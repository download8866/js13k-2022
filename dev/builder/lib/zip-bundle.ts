import ADMZip from "adm-zip";
import fs from "fs";
import zlib from "zlib";
import { zipBundleOptions } from "../options/zip-bundle-options";
import type { WriteBundleInput } from "./write-bundle";
import { devLog } from "@balsamic/dev";
import { sizeDifference } from "./utils";

export type ZipFileEntry = { name?: string; source?: Buffer | Uint8Array | string | undefined; fileName?: string };

export function zipBundle(bundle: WriteBundleInput) {
  let html = bundle.html;

  // Remove tag closures
  for (const endTag of ["</html>", "</body>"]) {
    if (html.endsWith(endTag)) {
      html = html.slice(0, -endTag.length).trim();
    }
  }

  return zipEntries([{ name: "index.html", source: html }, ...(bundle.assets || [])]);
}

export async function zipEntries(input: ZipFileEntry[]) {
  const entries: { name: string; data: Buffer }[] = [];

  let totalUnzipped = 0;

  const zippedBuffer = await devLog.timed(
    zipBundleOptions.implementation === "zopfli"
      ? `zip zopfli ${zipBundleOptions.zopfli.numiterations}`
      : `zip zlib ${zipBundleOptions.zlib.level}`,
    async function compress() {
      const admZip = new ADMZip();
      for (const item of input) {
        const fname = item.name || item.fileName;
        if (!fname) {
          continue;
        }

        let data: Buffer | undefined;

        if (item.source !== undefined) {
          data = Buffer.isBuffer(item.source)
            ? item.source
            : typeof item.source === "string"
            ? Buffer.from(item.source, "utf8")
            : Buffer.from(item.source as Buffer);
          if (!Buffer.isBuffer(data)) {
            throw new Error(`Entry ${item.name} is invalid.`);
          }
        } else if (item.fileName) {
          data = await fs.promises.readFile(item.fileName);
        }

        if (data) {
          entries.push({ name: fname, data });
          totalUnzipped += data.length;
        }
      }

      entries.sort((a, b) => b.data.length - a.data.length || a.name.localeCompare(b.name));

      for (const entry of entries) {
        admZip.addFile(entry.name, entry.data);
      }

      const zipped = await new Promise<Buffer>((resolve, reject) => admZip.toBuffer(resolve, reject));

      this.setSuccessText(sizeDifference(totalUnzipped, zipped));

      return zipped;
    },
    { spinner: true },
  );

  devLog.timed(
    function zip_verify() {
      const unzip = new ADMZip(zippedBuffer);

      const unzippedEntries: { name: string; data: Buffer }[] = [];
      for (const entry of unzip.getEntries()) {
        unzippedEntries.push({ name: entry.name, data: entry.getData() });
      }
      unzippedEntries.sort((a, b) => b.data.length - a.data.length || a.name.localeCompare(b.name));

      if (entries.length !== unzippedEntries.length) {
        throw new Error(
          `Final zip contains ${unzippedEntries.length} files instead of ${entries.length}. Zip file verification failed.`,
        );
      }
      for (let i = 0; i < entries.length; ++i) {
        const entry = entries[i]!;
        if (!entry.data.equals(unzippedEntries[i]!.data)) {
          throw new Error(
            `Compressed file ${entry.name}, index ${i}, has a different content. Zip file verification failed.`,
          );
        }
      }
    },
    { spinner: true },
  );

  return zippedBuffer;
}

let _zopfli: unknown = null;

// Hack into adm-zip package to replace default zlib based implementation with a custom zlib or zopfli implementation.
Object.defineProperty(require("adm-zip/methods"), "Deflater", {
  get() {
    return zipBundleOptions.implementation === "zopfli" ? ZopliDeflater : ZLibDeflater;
  },
  configurable: true,
  enumerable: true,
});

const { round } = Math;

function ZLibDeflater(input: Buffer) {
  const options = {
    ...zipBundleOptions.zlib,
    chunkSize: (round(input.length / 1024) + 1) * 1024,
  };
  return {
    deflate() {
      return zlib.deflateRawSync(input, options);
    },
    deflateAsync(callback: (input: Buffer | null) => void) {
      const parts: Buffer[] = [];
      zlib
        .createDeflateRaw(options)
        .on("data", (data) => parts.push(data))
        .on("end", () => callback(Buffer.concat(parts)))
        .on("error", (error) => {
          devLog.logException("zlib compression failed", error);
          callback(null);
        })
        .end(input);
    },
  };
}

function ZopliDeflater(input: Buffer) {
  return {
    deflate() {
      return _requireZopfli().deflateSync(input, zipBundleOptions.zopfli);
    },
    deflateAsync(callback: (input: Buffer | null) => void) {
      _requireZopfli().deflate(input, zipBundleOptions.zopfli, (error: Error | null, deflated: Buffer) => {
        if (error) {
          devLog.logException("zopli compression failed", error);
          callback(null);
        } else {
          callback(deflated);
        }
      });
    },
  };
}

function _requireZopfli() {
  return _zopfli || (_zopfli = require("node-zopfli"));
}
