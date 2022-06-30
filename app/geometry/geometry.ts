import type { Vec3 } from "../math/vectors";
import { vec3_triangleNormal } from "../math/vectors";
import { vertex_clone, vertex_flipped, vertex_lerp, type Material, type Vertex } from "./vertex";

export interface Polygon {
  /** Polygon material */
  $material: Material;

  /** Polygon points */
  $points: Vertex[];
}

export const polygon_transform = ({ $material, $points }: Polygon, m: DOMMatrix): Polygon => ({
  $material,
  $points: $points.map(({ x, y, z, $nx, $ny, $nz }: Vertex): Vertex => {
    ({ x, y, z } = m.transformPoint({ x, y, z }));
    ({ x: $nx, y: $ny, z: $nz } = m.transformPoint({ x: $nx, y: $ny, z: $nz, w: 0 }));
    return { x, y, z, $nx, $ny, $nz };
  }),
});

export const polygon_clone = ({ $material, $points }: Polygon): Polygon => ({
  $material,
  $points: $points.map(vertex_clone),
});

export const polygon_flipped = ({ $material, $points }: Polygon): Polygon => ({
  $material,
  $points: $points.map(vertex_flipped).reverse(),
});

export const polygon_fromPoints = (material: Material, points: Vec3[]): Polygon => {
  const { x: $nx, y: $ny, z: $nz } = vec3_triangleNormal(points as [Vec3, Vec3, Vec3]);
  return {
    $material: material,
    $points: points.map(({ x, y, z }: Vec3): Vertex => ({ x, y, z, $nx, $ny, $nz })),
  };
};

/** Creates a regular polygon */
export const polygon_regular = (material: Material, segments: number, radius: number, y = 0): Polygon => {
  const result: Vertex[] = [];
  const arc = (Math.PI * 2) / segments;
  for (let i = 0; i < segments; ++i) {
    result[i] = { x: Math.cos(arc * i) * radius, y, z: Math.sin(arc * i) * radius, $nx: 0, $ny: -1, $nz: 0 };
  }
  return { $material: material, $points: result };
};

/**
 * Connects a top and a bottom polygon with side polygons.
 * Top and bottom polygons must have the same length.
 * Top polygon is supposed to be flipped.
 */
export const polygon_sides = ($material: Material, { $points: btm }: Polygon, { $points: top }: Polygon): Polygon[] => {
  const len = btm.length;
  return btm.map((btmi, i) =>
    polygon_fromPoints($material, [btmi, top[len - i - 1]!, top[len - ((i + 1) % len) - 1]!, btm[(i + 1) % len]!]),
  );
};

export const solid_smoothSidesQuads = (sides: Polygon[]): Polygon[] => {
  let a = sides[sides.length - 2]!.$points;
  let b = sides[sides.length - 1]!.$points;
  return sides.map(({ $points: c, $material }) => {
    const result = {
      $material,
      $points: [
        vertex_lerp(b[0]!, a[3]!, 0, 0.5),
        vertex_lerp(b[1]!, a[2]!, 0, 0.5),
        vertex_lerp(b[2]!, c[1]!, 0, 0.5),
        vertex_lerp(b[3]!, c[0]!, 0, 0.5),
      ],
    };
    a = b;
    b = c;
    return result;
  });
};

export const solid_cylinder = ($material: Material, segments: number, smoothed?: boolean | 1) => {
  const top = polygon_flipped(polygon_regular($material, segments, 1, 1));
  const btm = polygon_regular($material, segments, 1, -1);
  const sides = polygon_sides($material, btm, top);
  return [btm, top, ...(smoothed ? solid_smoothSidesQuads(sides) : sides)];
};

export const solid_transform = (solid: Polygon[], m: DOMMatrix) =>
  solid.map((polygon) => polygon_transform(polygon, m));

type TriangleVertex = [number, number, number, number, number, number, number, number, number] & {
  $index: number;
};

type Triangle = [TriangleVertex, TriangleVertex, TriangleVertex];

export const solids_to_triangles = (solids: Polygon[][]) => {
  const vertexMap = new Map<string, TriangleVertex>();
  const triangles: Triangle[] = [];

  const getVertex = ({ x, y, z, $nx, $ny, $nz }: Vertex, $material: Material): TriangleVertex => {
    x = Math.fround(x);
    y = Math.fround(y);
    z = Math.fround(z);

    // Normalize the normal, and round it to the nearest 8 bit integer
    const m = 32767 * Math.sqrt($nx * $nx + $ny * $ny + $nz * $nz);
    $nx = ($nx * m) | 0;
    $ny = ($ny * m) | 0;
    $nz = ($nz * m) | 0;

    // Build the vertex

    const vertex = [x, y, z, $nx, $ny, $nz, ...$material] as TriangleVertex;
    vertex.$index = -1;

    const key = "" + vertex;

    const found = vertexMap.get(key);
    if (found) {
      return found;
    }
    vertexMap.set(key, vertex);
    return vertex;
  };

  const makePolygon = ({ $points, $material }: Polygon) => {
    for (let i = 2; i < $points.length; i++) {
      const a = getVertex($points[0]!, $material);
      const b = getVertex($points[i - 1]!, $material);
      const c = getVertex($points[i]!, $material);
      if (a !== b && a !== c && b !== c) {
        triangles.push([a, b, c]);
      }
    }
  };

  for (const polygons of solids) {
    for (const polygon of polygons) {
      makePolygon(polygon);
    }
  }

  const $vertices: number[] = [];
  const $indices: number[] = [];

  let verticesCount = 0;

  const getVertexIndex = (vertex: TriangleVertex): number => {
    let { $index } = vertex;
    if ($index === -1) {
      $index = verticesCount++;
      vertex.$index = $index;
      $vertices.push(...vertex);
    }
    return $index;
  };

  for (const [a, b, c] of triangles) {
    $indices.push(getVertexIndex(a), getVertexIndex(b), getVertexIndex(c));
  }

  return {
    $vertices,
    $indices,
  };
};

// export const polygon_extrudeSides = ({ $points, $material }: Polygon): Polygon[] => {
//   const result: Polygon[] = [];
//   for (let i = 0, len = $points.length; i <= len; ++i) {
//     const { x: ax, z: az } = $points[i % len]!;
//     const { x: bx, z: bz } = $points[(i + 1) % len]!;

//     const {
//       x: $nx,
//       y: $ny,
//       z: $nz,
//     } = triangleNormal({ x: ax, y: -1, z: az }, { x: ax, y: 1, z: az }, { x: bx, y: 1, z: bz });

//     result[i] = {
//       $material,
//       $points: [
//         { x: ax, y: -1, z: az, $nx, $ny, $nz },
//         { x: ax, y: 1, z: az, $nx, $ny, $nz },
//         { x: bx, y: 1, z: bz, $nx, $ny, $nz },
//         { x: bx, y: -1, z: bz, $nx, $ny, $nz },
//       ],
//     };
//   }
//   return result;
// };

// export const polygon_extrude = (polygon: Polygon): Polygon[] => {
//   const sides = polygon_extrudeSides(polygon);
//   const top = polygon_clone(polygon);
//   const bottom = polygon_clone(polygon);
//   for (const p of top.$points.reverse()) {
//     p.y = 1;
//   }
//   for (const p of bottom.$points) {
//     p.y = -1;
//   }
//   return [bottom, ...sides, top];
// };
