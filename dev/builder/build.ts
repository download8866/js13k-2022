import {
  devLogBuilding,
  devPrintOjutputFileWritten,
  devWriteOutputFile,
  FilesSizeTermBox,
  globalReport,
} from "./lib/logging";
import { devLog } from "@balsamic/dev";
import { writeFinalBundle, writeOptimizedBundle } from "./lib/write-bundle";
import { zipBundle } from "./steps/bundle-zip";
import { outPath_bundle, outPath_minify, outPath_rolled, outPath_zip } from "./out-paths";
import type { WriteBundleInput } from "./lib/write-bundle";

import type { ViteBundledOutput } from "./steps/build-vite";
import { buildWithVite } from "./steps/build-vite";
import { bundleHtml } from "./steps/bundle-html";
import { jsOptimizeTerser } from "./steps/js-optimize-terser";
import { jsUglify } from "./steps/js-uglify";
import { cssOptimize } from "./steps/css-optimize";

import { jsOptimizeEsbuild } from "./steps/js-optimize-esbuild";
import { jsTransformSwc } from "./steps/js-transform-swc";
import { jsRoadroller } from "./steps/js-roadroller";
import { htmlCssToJs } from "./steps/html-css-to-js";

devLog.titlePaddingWidth = 18;

export async function build() {
  devLogBuilding("src", "dist");

  const includeDevTools = process.argv.includes("--with-dev-tools");

  const sources = await buildWithVite({ stripDevTools: !includeDevTools });

  try {
    sources.css = await cssOptimize(sources.css);

    const htmlCssJsBundle = await htmlCssToJs(sources);

    sources.css = "";
    sources.html = htmlCssJsBundle.html;
    sources.js = htmlCssJsBundle.js;

    sources.js = await jsOptimizeTerser(sources.js, { mangle: false });

    sources.js = await jsOptimizeEsbuild(sources.js, { mangle: true });

    sources.js = await jsTransformSwc(sources.js);

    sources.js = await jsOptimizeTerser(sources.js, { mangle: true });

    sources.js = await jsUglify(sources.js, { mangle: true });
  } finally {
    await writeOptimizedBundle(sources);
  }

  const optimizedTotalSize = logTableOptimized(sources);

  devLog.log();
  devPrintOjutputFileWritten(outPath_minify, optimizedTotalSize);
  devLog.log();

  const bundled: WriteBundleInput = {
    html: (await bundleHtml(sources)).html,
    assets: sources.assets,
  };

  logTableBundled(bundled, "bundled");

  await writeFinalBundle(bundled, outPath_bundle);

  const compressedBundle = { ...bundled };
  compressedBundle.html = await jsRoadroller(bundled.html);

  logTableBundled(compressedBundle, "rolled");

  await writeFinalBundle(compressedBundle, outPath_rolled);

  const zippedBuffer = await zipBundle(compressedBundle);

  devLog.log();
  await devWriteOutputFile(outPath_zip, zippedBuffer, null);
  devLog.log();

  if (!FilesSizeTermBox.final(zippedBuffer.length)) {
    process.exitCode = 1;
  }

  await globalReport.append();
}

function logTableBundled(bundled: WriteBundleInput, name: string) {
  devLog.log();
  FilesSizeTermBox.new(name)
    .sizeRow(
      name,
      bundled.html,
      bundled.assets.reduce((r, a) => r + a.source.length, 0),
    )
    .print();
  devLog.log();
}

function logTableOptimized(bundledSwc: ViteBundledOutput) {
  devLog.log();
  const optimizedTotalSize = FilesSizeTermBox.new("optimized")
    .sizeRow("js", bundledSwc.js)
    .sizeRow("html", bundledSwc.html)
    .sizeRow("css", bundledSwc.css)
    .sizeRowOptional(
      "assets",
      bundledSwc.assets.reduce((r, a) => r + a.source.length, 0),
    )
    .hr()
    .totalRow("total")
    .print().totalValue;
  return optimizedTotalSize;
}
