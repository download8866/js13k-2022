let M,
  F,
  k,
  C,
  _,
  Z,
  $,
  l,
  e1,
  t1 = 0,
  a1 = 0,
  D = 0,
  l1 = 0,
  r1 = 0,
  x = 0,
  s1 = 0,
  y = 0,
  o1 = 0,
  z = 0,
  c1 = 0,
  i1 = 0,
  Q = 0,
  w = 0,
  n1 = 0,
  f1 = 0,
  B = 0,
  T = 1,
  H = 180,
  O = .066,
  P = [],
  R = [],
  h1 = [],
  m1 = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  q = { x: 0, y: 0, z: 0 },
  u1 = { x: 0, y: 0, z: 0 },
  v = (e, a) => Array.from(Array(e), (e, t) => a(t)),
  L = (e, t = 0, a = 1) => e < t ? t : a < e ? a : e,
  x1 = (e, t) => E(e) > t ? e : 0,
  X = (e, t, a) => (0 < a ? a < 1 ? e + (t - e) * a : t : e) || 0,
  n = (e, t) => (e = L(e), X(e, 1 - e, t)),
  g1 = e => q1(K(e *= N1), J(e)) / N1,
  y1 = (e, t, a) => e + (2 * (t = (t - e) % 360) % 360 - t) * L(a) || 0,
  v1 = ({ x: e, y: t, z: a }) => L1(e - q.x, t - q.y, a - q.z),
  h = ({ x: e, y: t, z: a }, l) => e * l.x + t * l.y + a * l.z,
  z1 = e => {
    let t, a = 0, l = 0, r = 0, s = e.at(-1);
    for (t of e) a += (s.y - t.y) * (s.z + t.z), l += (s.z - t.z) * (s.x + t.x), r += (s.x - t.x) * (s.y + t.y), s = t;
    return t = L1(a, l, r), a /= t, l /= t, r /= t, { x: a, y: l, z: r, w: a * s.x + l * s.y + r * s.z };
  },
  m = (
    e,
    t = P1,
    a = 0,
  ) => (a *= 16,
    t[a++] = e.m11,
    t[a++] = e.m12,
    t[a++] = e.m13,
    t[a++] = e.m14,
    t[a++] = e.m21,
    t[a++] = e.m22,
    t[a++] = e.m23,
    t[a++] = e.m24,
    t[a++] = e.m31,
    t[a++] = e.m32,
    t[a++] = e.m33,
    t[a++] = e.m34,
    t[a++] = e.m41,
    t[a++] = e.m42,
    t[a++] = e.m43,
    t[a] = e.m44,
    t),
  d1 = (e, t, a) => (e.D = a, e.A = t, e),
  p1 = (e, l, t = e.A) =>
    d1(
      e.map(e => {
        let t, a;
        return { x: e, y: t, z: a } = e,
          { x: e, y: t, z: a } = l.transformPoint({ x: e, y: t, z: a }),
          { x: e, y: t, z: a };
      }),
      t,
      e.D,
    ),
  f = (e, t, a) => e.map(e => p1(e, t, a)),
  w1 = (a, l = 0) =>
    v(a, e => {
      let t = J(2 * W * e / a);
      return { x: K(2 * W * e / a), y: 0, z: E(t) < .01 ? t : t < 0 ? t - l : t + l };
    }),
  r = (l, r, s) =>
    l.map((e, t, { length: a }) => d1([e, r[a - t - 1], r[a - (t + 1) % a - 1], l[(t + 1) % a]], l.A, s)),
  u = (
    e,
    t,
    a = 0,
    l,
  ) => (e = e ? w1(e, l) : m1,
    l = p1(e, U(0, 1).scale3d(0 < a ? a : 1)),
    e = p1(e, U(0, -1).scale3d(a < 0 ? -a : 1)).reverse(),
    [...r(e, l, t), l, e]),
  s = (l, r = l, s = (e, t) => (t *= W / r, { x: J(e *= 2 * W / l) * K(t), y: J(t), z: K(e) * K(t) })) => {
    let o = [];
    for (let a = 0; l > a; a++) {
      for (let t = 0; r > t; t++) {
        let e = d1([], 0, 1);
        o.push(e),
          e.push(s(a, t, e)),
          t && e.push(s((a + 1) % l, t, e)),
          r - 1 > t && e.push(s((a + 1) % l, t + 1 % r, e)),
          e.push(s(a, t + 1 % r, e));
      }
    }
    return o;
  },
  i = (l, r) => {
    let s, o, c, i = r.C;
    for (let e = 0; i.length > e; ++e) {
      if ((s = h(l, i[e]) - l.w) < -8e-5 ? c = r : 8e-5 < s && (o = r), c && o) {
        o = [], c = [], i = r.C, e = r.B;
        let t = i.at(-1), a = h(l, t) - l.w;
        for (let e of i) {
          s = h(l, e) - l.w,
            a < 8e-5 && c.push(t),
            -8e-5 < a && o.push(t),
            (8e-5 < a && s < -8e-5 || a < -8e-5 && 8e-5 < s)
            && (a /= s - a,
              t = { x: t.x + (t.x - e.x) * a, y: t.y + (t.y - e.y) * a, z: t.z + (t.z - e.z) * a },
              o.push(t),
              c.push(t)),
            t = e,
            a = s;
        }
        return {
          o: 2 < o.length && { C: d1(o, i.A, i.D), B: e, u: r },
          m: 2 < c.length && { C: d1(c, i.A, i.D), B: e, u: r },
        };
      }
    }
    return { o, m: c };
  },
  o = (e, t, a = z1(t.C)) => {
    let l, r, s;
    return e
      ? ({ o: l, m: r } = i(e, t), l || r || e.s.push(t), l && (e.o = o(e.o, l, a)), r && (e.m = o(e.m, r, a)))
      : ({ x: l, y: r, z: a, w: s } = a, e = { x: l, y: r, z: a, w: s, s: [t], o: 0, m: 0 }),
      e;
  },
  a = (t, r, s) => {
    let o = [],
      c = (e, t) => {
        let { o: a, m: l } = i(e, t);
        a || l || (0 < s * h(e, r) ? a = t : l = t), a && (e.o ? c(e.o, a) : o.push(a)), l && e.m && c(e.m, l);
      };
    for (let e of r.s) c(t, e);
    return o;
  },
  c = (e, t) => e && (t(e), c(e.o, t), c(e.m, t)),
  A1 = e => e.length ? e.reduce((e, t) => o(e, { C: t, B: 0, u: 0 }), 0) : e,
  I1 = e => (c(e, t => {
    let e = t.m;
    t.m = t.o, t.o = e, t.x *= -1, t.y *= -1, t.z *= -1, t.w *= -1;
    for (let e of t.s) e.B = !e.B;
  }),
    e),
  g = (...e) =>
    e.reduce((l, t) => {
      let r = [];
      if (l = A1(l), t) {
        t = A1(t), c(l, e => e.s = a(t, e, 1)), c(t, e => r.push([e, a(l, e, -1)]));
        for (let [t, a] of r) for (let e of a) o(l, e, t);
      }
      return l;
    }),
  d = (...e) => {
    let t,
      a = e => {
        let t;
        return e.u && ((t = l.get(e.u)) ? (r.delete(t), e = a(e.u)) : l.set(e.u, e)), e;
      },
      l = new Map(),
      r = new Map();
    return [e, ...t] = [...e],
      e = I1(g(I1(A1(e)), ...t)),
      c(e, t => {
        for (let e of t.s) r.set(a(e), e.B);
      }),
      Array.from(r, ([{ C: e }, t]) => {
        let a = e.map(({ x: e, y: t, z: a }) => ({ x: e, y: t, z: a }));
        return d1(t ? a.reverse() : a, e.A, e.D);
      });
  },
  M1 = () => {
    c1 = n(R[12].g, R[13].g),
      s1 = X(X(s1, 0, 1 - G(-1 * O)), g1(s1 + 60 * O), R[5].g - R[6].i),
      r1 = X(X(r1, 0, 1 - G(-5 * O)), g1(r1 + 56 * O), c1),
      x = X(X(x, 0, 1 - G(-4 * O)), g1(x + 48 * O), c1),
      z = X(z, R[9].i, 1 - G(-(.2 + .3 * E(2 * R[9].i - 1)) * O)),
      o1 = X(o1, y ? X(o1, -9, 1 - G(-1.5 * O)) : L(D / 3), 1 - G(-1 * O)),
      T && D > T && (T = 0, h4.innerHTML = ""),
      R[0].l && .8 < R[0].g && (t1 < 13
        ? (1 / 0 > T && (T = D + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), R[0].l = 0)
        : y
          || (1 / 0 > T && (T = D + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
            y = 1));
    for (let e of P) e.h && (e.j = e.h());
    for (let e of R) e.h();
    for (let e of h1) e.h();
  },
  Y1 = () => {
    h3.innerHTML = "Souls: "
      + [
        0,
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
        "X",
        "XI",
        "XII",
        "XIII",
      ][t1 = h1.reduce((e, { l: t }) => e + t, 0)] + " / XIII";
  },
  j1 = () => {
    localStorage.I = JSON.stringify([R.map(({ l: e }) => e), h1.map(({ l: e }) => e), l1, D, z]);
  },
  S1 = (
    e,
    t,
    a = Z / _ * 1.732051,
    l = 1.732051,
  ) => [a, 0, 0, 0, 0, l, 0, 0, 0, 0, (t + e) / (e - t), -1, 0, 0, 2 * t * e / (e - t), 0],
  p = (e, t = 1) => {
    let a = l;
    return P.push(l = t = { j: O1, H: P.length, G: t, s: [] }), e(t), l = a, t;
  },
  b = (e, t = O1, a) => l.s.push(...f(e, t, a)),
  A = r => {
    let s = l,
      o = R.length,
      c = {
        l: 0,
        g: 0,
        i: 0,
        u: s,
        h() {
          let e = c.l, t = c.g, a = c.i, l = s.j.multiply(r);
          c.J = l,
            v1(l.transformPoint()) < 3 && k && (t < .3 || .7 < t)
            && (c.l = e ? 0 : 1, o && 1 / 0 > T && (T = D + 1, h4.innerHTML = "* click *"), l1 = o, j1()),
            c.g = X(t, e, 1 - G(-4 * O)),
            c.i = X(a, e, 1 - G(-1 * O)),
            c.j = l.rotate(60 * c.g - 30, 0).translateSelf(0, 1);
        },
      };
    R.push(c),
      b(u(5), r.translate(-.2).rotate(90, 90).scale(.4, .1, .5), S(.4, .5, .5)),
      b(u(5), r.translate(.2).rotate(90, 90).scale(.4, .1, .5), S(.4, .5, .5)),
      b(u(), r.translate(0, -.4).scale(.5, .1, .5), S(.5, .5, .4));
  },
  I = (f, ...e) => {
    let h = -1,
      m = 0,
      u = 0,
      g = 0,
      v = 0,
      d = 0,
      p = 1,
      b = 3,
      A = {
        l: 0,
        h() {
          if (!A.l) {
            let e, t, a, l, r, s, o, c = 1, i = 1 / 0;
            for (let l of M) {
              let { x: e, z: t, w: a } = l;
              t = (e = L1(j - e, S - t)) - a, o ||= e < a, 0 < t && i > t && (i = t, Y = l), c = B1(c, e / a);
            }
            o
            || ({ x: e, z: t, w: a } = Y,
              l = j - e,
              r = S - t,
              s = L1(l, r),
              n = q1(-r, l),
              p && (u = (X1() - .5) * W / 2, b = L(b / (1 + X1()))),
              h = -J(n += u),
              m = K(n),
              .1 < s && (s = B1(s, a) / (s || 1), j = l * s + e, S = r * s + t)),
              p = o,
              b = X(b, 6 * (1 - c) + 3, 1 - G(-(c + 3) * O)),
              n = j = X(j, j + h, 1 - G(-b * O)),
              F = X(F, n, 1 - G(-b * O)),
              n = S = X(S, S + m, 1 - G(-b * O)),
              k = X(k, n, 1 - G(-b * O)),
              g = y1(g, q1(F - v, k - d) / N1 - 180, 1 - G(-3 * O)),
              v = F,
              d = k;
            var n = (A.j = I.j.multiply(f.translate(F, 0, k).rotateSelf(0, g, 7 * K(1.7 * D)))).transformPoint();
            v1(n) < 1.6
              && (A.l = 1,
                n = [
                  ,
                  "Mark Zuckemberg<br>made the world worse",
                  "Giorgia Meloni<br>fascist",
                  "Andrzej Mazur<br>for the js13k competition",
                  "Donald Trump<br>lies",
                  "Kim Jong-un<br>Dictator, liked pineapple on pizza",
                  "Maxime Euziere<br>forced me to finish this game",
                  "She traded NFTs apes",
                  ,
                  "Vladimir Putin<br>evil war",
                  "He was not a good person",
                  ,
                  "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",
                ][t1] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                1 / 0 > T && (T = D + (t1 && t1 < 12 ? 5 : 7), h4.innerHTML = n),
                Y1(),
                j1());
          }
          A.l
            && (A.j = P[2].j.translate(
              t % 4 * 1.2 - 1.7 + K(D + t) / 7,
              -2,
              1.7 * (t / 4 | 0) - 5.5 + E(t % 4 - 2) + J(D / 1.5 + t) / 6,
            ));
        },
      },
      I = l,
      t = h1.length,
      M = e.map(([e, t, a]) => ({ x: e, z: t, w: a })),
      Y = M[0],
      { x: j, z: S } = Y,
      F = j,
      k = S;
    h1.push(A);
  },
  F1 = (e, t, a, l) => {
    let r = 0,
      s = 0,
      o = 0,
      c = 1 / 0,
      i = -1 / 0,
      n = 1 / 0,
      f = -1 / 0,
      h = 1 / 0,
      m = -1 / 0,
      u = 1.1 * (a - t),
      g = new DOMMatrix(S1(t, a)).multiplySelf(e).invertSelf();
    return t = v(
      8,
      e => (e = g.transformPoint({ x: 4 & e ? 1 : -1, y: 2 & e ? 1 : -1, z: 1 & e ? 1 : -1 }),
        r -= e.x = (u * e.x | 0) / u / e.w,
        s -= e.y = (u * e.y | 0) / u / e.w,
        o -= e.z = (u * e.z | 0) / u / e.w,
        e),
    ),
      a = Y(298, 139).translateSelf(r / 8, s / 8, o / 8),
      p1(t, a).map(({ x: e, y: t, z: a }) => {
        c = B1(c, e), i = N(i, e), n = B1(n, t), f = N(f, t), h = B1(h, a), m = N(m, a);
      }),
      h *= h < 0 ? l : 1 / l,
      m *= 0 < m ? l : 1 / l,
      j(2 / (i - c), 2 / (f - n), 2 / (h - m)).translateSelf((i + c) / -2, (f + n) / -2, (h + m) / 2).multiplySelf(a);
  },
  k1 = (e, t = 35633) => (t = V.c6x(t), V.s3c(t, e), V.c6a(t), t),
  T1 = (e, t) => {
    let a = {}, l = V.c1h();
    return V.abz(l, e), V.abz(l, k1(t, 35632)), V.l8l(l), e => e ? a[e] || (a[e] = V.gan(l, e)) : V.u7y(l);
  },
  C1 = (e, t, a, l) => {
    if (M) {
      for (var r of (a = Y(0, 40 * K(a1) - 70), [37, 38, 39])) m(a, R1, r - 1);
      V.uae(e, !1, R1), V.d97(4, P[39].F - P[37].v, 5123, 2 * P[37].v);
    } else {
      for (r = 0; P.length > r; ++r) P[r].G && m(P[r].j, R1, r - 1);
      for (V.uae(e, !1, R1), V.d97(4, (t ? P[39].F : P[37].v) - 3, 5123, 6), t = 0; t < 13; ++t) m(h1[t].j, R1, t);
      for (t = 0; R.length > t; ++t) m(R[t].j, R1, t + 13), l || (R1[16 * (t + 13) + 15] = 1 - R[t].g);
      V.uae(e, !1, R1),
        V.das(4, P[a].F - P[a].v, 5123, 2 * P[a].v, 13),
        V.das(4, P[40].F - P[40].v, 5123, 2 * P[40].v, R.length);
    }
  },
  D1 = e => {
    h4.innerHTML += ".", setTimeout(e);
  },
  Q1 = e => K(e * W * 2),
  B1 = (e, t) => e < t ? e : t,
  N = (e, t) => t < e ? e : t,
  E = e => e < 0 ? -e : e,
  U = (e, t, a) => O1.translate(e, t, a),
  Y = (e, t, a) => O1.rotate(e, t, a),
  j = (e, t, a) => O1.scale(e, t, a),
  S = (e, t, a, l = 0) => 255 * l << 24 | 255 * a << 16 | 255 * t << 8 | 255 * e,
  H1 = new AudioContext(),
  O1 = new DOMMatrix(),
  P1 = new Float32Array(16),
  R1 = new Float32Array(624),
  { PI: W, atan2: q1, sin: K, cos: J, hypot: L1, exp: G, random: X1 } = Math,
  N1 = W / 180,
  t = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  E1 = H1.createBufferSource(),
  V = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (let e in V) V[e[0] + [...e].reduce((e, t, a) => (e * a + t.charCodeAt(0)) % 434, 0).toString(36)] = V[e];
D1(() => {
  let e = 0,
    a = () => {
      if (2 == ++e) {
        let l = e => {
            let t;
            V.f1s(),
              requestAnimationFrame(l),
              a1 += a = (e - (F || e)) / 1e3,
              D += O = M ? 0 : B1(.066, a),
              F = e,
              0 < O
              && ($(),
                M1(),
                e1(),
                o(),
                V.b6o(36160, f),
                V.v5y(0, 0, 128, 128),
                V.c4s(16640),
                V.cbf(!0, !1, !0, !1),
                { x: a, y: e, z: t } = q,
                V.uae(o("b"), !1, m(Y(0, 180).invertSelf().translateSelf(-a, -e, .3 - t))),
                C1(o("c"), 0, 41, 0),
                V.c4s(256),
                V.cbf(!1, !0, !0, !1),
                V.uae(o("b"), !1, m(U(-a, -e, -t - .3))),
                C1(o("c"), 0, 41, 0),
                V.f1s()),
              k = 0;
            var a = M
              ? Y(-20, -90).invertSelf().translateSelf(5, -2, -3.4)
              : Y(-B, -H).invertSelf().translateSelf(-w, -n1, -f1);
            r(),
              V.b6o(36160, n),
              V.v5y(0, 0, 2048, 2048),
              i[0](F1(a, .3, 55, 10)),
              i[1](F1(a, 55, 181, 11)),
              c(),
              V.b6o(36160, null),
              V.v5y(0, 0, V.drawingBufferWidth, V.drawingBufferHeight),
              V.cbf(!0, !0, !0, !0),
              V.c4s(16640),
              i[0](),
              i[1](),
              V.uae(c("a"), !1, S1(.3, 181)),
              V.uae(c("b"), !1, m(a)),
              V.ubu(c("k"), w, n1, f1),
              C1(c("c"), !C, 42, 0),
              s(),
              V.ubu(s("j"), V.drawingBufferWidth, V.drawingBufferHeight, a1),
              V.ubu(s("k"), w, n1, f1),
              V.uae(s("b"), !1, m(a.inverse())),
              V.d97(4, 3, 5123, 0),
              V.b6o(36160, f),
              V.f1s();
          },
          e = h,
          t = k1(`#version 300 es
layout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}`),
          r = T1(
            k1(`#version 300 es
in vec4 f;uniform mat4 b,c[39];void main(){gl_Position=b*c[max(0,abs(int(f.w))-1)+gl_InstanceID]*vec4(f.xyz,1);}`),
            `#version 300 es
void main(){}`,
          ),
          s = T1(
            k1(`#version 300 es
in vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}`),
            `#version 300 es
precision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}`,
          ),
          o = T1(
            t,
            `#version 300 es
precision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}`,
          ),
          c = T1(
            t,
            `#version 300 es
precision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}`,
          ),
          i = v(2, t => {
            let a = new Float32Array(16), l = V.c25();
            return V.a4v(33984 + t),
              V.b9j(3553, l),
              V.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              V.t2z(3553, 10241, 9729),
              V.t2z(3553, 10240, 9729),
              V.t2z(3553, 34893, 515),
              V.t2z(3553, 34892, 34894),
              V.t2z(3553, 10243, 33071),
              V.t2z(3553, 10242, 33071),
              e => {
                e
                  ? (m(e, a), V.uae(r("b"), !1, a), V.fas(36160, 36096, 3553, l, 0), V.c4s(256), C1(r("c"), !C, 42, 1))
                  : V.uae(c(t ? "j" : "i"), !1, a);
              };
          }),
          n = V.c5w(),
          f = (t = V.c3z(), V.c5w()),
          a = V.c25();
        o(),
          V.uae(o("a"), !1, S1(1e-4, 1, 1.4, .59)),
          c(),
          V.ubh(c("q"), 2),
          V.ubh(c("h"), 1),
          V.ubh(c("g"), 0),
          s(),
          V.ubh(s("q"), 2),
          V.b6o(36160, n),
          V.d45([0]),
          V.r9l(0),
          V.b6o(36160, f),
          V.bb1(36161, t),
          V.r4v(36161, 33189, 128, 128),
          V.f8w(36160, 36096, 36161, t),
          V.a4v(33986),
          V.b9j(3553, a),
          V.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null),
          V.fas(36160, 36064, 3553, a, 0),
          V.b9j(3553, V.c25()),
          V.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, e),
          V.gbn(3553),
          V.t2z(3553, 10241, 9987),
          V.t2z(3553, 10240, 9729),
          V.e8z(2929),
          V.e8z(2884),
          V.c70(1),
          V.c7a(1029),
          V.d4n(515),
          V.c5t(0, 0, 0, 1),
          M1(),
          (() => {
            let e,
              n,
              f,
              h,
              m,
              u,
              g,
              v,
              d,
              p,
              b,
              o,
              A,
              I,
              t = !0,
              c = [],
              a = () => {
                M || !t ? E1.disconnect() : E1.connect(H1.destination), b4.innerHTML = "Music: " + t;
              },
              l = () => {
                h = v = void 0,
                  c.length =
                    k =
                    o =
                    Q =
                    A =
                    I =
                      0,
                  hC.width = _ = innerWidth,
                  hC.height = Z = innerHeight,
                  document.hidden && i(!0);
              },
              i = (e, t = 0) => {
                if (M !== e) {
                  M = e, C = t, l(), Y1(), document.body.className = e ? "l m" : "l";
                  try {
                    e
                      ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock())
                      : (document.body.requestFullscreen().catch(() => 0), E1.start());
                  } catch {}
                  a();
                }
              };
            oncontextmenu = () => !1,
              b1.onclick = () => i(!1),
              b2.onclick = () => i(!1, 1),
              b5.onclick = () => i(!0),
              b4.onclick = () => {
                t = !t, a();
              },
              b3.onclick = () => {
                confirm("Restart game?") && (localStorage.I = "", location.reload());
              },
              onclick = e => {
                if (!M && (e.target === hC && (k = 1), C)) {
                  try {
                    hC.requestPointerLock();
                  } catch {}
                }
              },
              onkeyup = onkeydown = e => {
                let t;
                e.repeat
                  || (t = !!e.type[5] && !0,
                    (c[
                      e = {
                        KeyA: 1,
                        ArrowLeft: 1,
                        KeyW: 3,
                        ArrowUp: 3,
                        KeyD: 2,
                        ArrowRight: 2,
                        KeyS: 4,
                        ArrowDown: 4,
                        KeyE: 0,
                        Space: 0,
                        Enter: 0,
                        Escape: 5,
                      }[e.code]
                    ] = t) && (0 === e && (k = 1), 5 === e && i(!0)));
              },
              onmousemove = ({ movementX: e, movementY: t }) => {
                C && (e || t) && (H += .1 * e, B += .1 * t);
              },
              hC.ontouchstart = l => {
                if (!M) {
                  for (let { pageX: e, pageY: t, identifier: a } of l.changedTouches) {
                    C && e > hC.clientWidth / 2
                      ? void 0 === v && (d = 0, u = e, g = t, v = a, p = H, b = B)
                      : void 0 === h && (m = 0, n = e, f = t, h = a);
                  }
                  e = a1;
                }
              },
              hC.ontouchmove = l => {
                let r, s, o, c, i;
                if (!M) {
                  for (let { pageX: e, pageY: t, identifier: a } of l.changedTouches) {
                    v === a && (H = p + (e - u) / 2.3, B = b + (t - g) / 2.3, d = 1),
                      h === a
                      && (a = (n - e) / 20,
                        r = (f - t) / 20,
                        s = E(a),
                        o = E(r),
                        c = q1(r, a),
                        i = L(L1(r, a) - .5),
                        A = .2 < s ? J(c) * i : 0,
                        I = .2 < o ? K(c) * i : 0,
                        (A || I) && (m = 1),
                        2 < s && (n = e + 20 * (a < 0 ? -1 : 1)),
                        2 < o && (f = t + 20 * (r < 0 ? -1 : 1)));
                  }
                }
              },
              hC.ontouchend = t => {
                let a;
                document.activeElement === document.body && t.preventDefault();
                for (let e of t.changedTouches) {
                  e.identifier === v
                    ? (v = void 0, d || (a = 1), d = 0)
                    : e.identifier === h
                    ? (h = void 0, I = A = 0, m || (a = 1), m = 0)
                    : a = 1;
                }
                t.target === hC && a && e && .02 < (t = a1 - e) && t < .7 && (c[0] = !0);
              },
              $ = () => {
                let l = I + (c[3] ? 1 : 0) - (c[4] ? 1 : 0),
                  r = A + (c[1] ? 1 : 0) - (c[2] ? 1 : 0),
                  s = navigator.getGamepads()[0];
                if (s) {
                  let e = e => t[e]?.pressed || 0 < t[e]?.value ? 1 : 0, t = s.buttons, a = s.axes;
                  s = e(3) || e(2) || e(1) || e(0),
                    l += e(12) - e(13) - x1(a[1], .2),
                    r += e(14) - e(15) - x1(a[0], .2),
                    e(9) && i(!0),
                    C && (B += O * x1(a[3], .3) * 80, H += O * x1(a[2], .3) * 80),
                    s && !o && (k = 1),
                    o = s;
                }
                i1 = q1(l, r), Q = x1(L(L1(l, r)), .05);
              },
              document.onvisibilitychange = onblur = onresize = l,
              i(!0);
          })(),
          (() => {
            let r,
              c,
              s,
              i,
              o,
              n,
              f,
              h,
              m,
              u,
              g,
              v,
              d,
              p,
              b,
              A,
              I,
              M = 1,
              Y = 2,
              j = 2,
              S = () => Y ? R[l1].u.j : s && 1 === P[s].G && P[s].j || O1,
              F = (e, t, a, l) => X(e, t, M || (L(E(t - e) ** .9 - a) + 1 / 7) * (1 - G(-1.5 * l * O))),
              k = new Int32Array(256),
              T = new Uint8Array(65536);
            e1 = () => {
              let t;
              V.fa7(),
                V.r9r(0, 0, 128, 128, 6408, 5121, T),
                V.iay(36008, [36064, 36096]),
                V.iay(36009, [36064, 36096]),
                (() => {
                  u = m = 0;
                  for (let e = 32; e < 128; e += 2) {
                    let o = 0, c = 0, i = 0, n = 0, f = 512 * e;
                    for (let s = 1 & e; s < 128; s += 2) {
                      let e = f + 4 * s,
                        t = f + 4 * (127 - s),
                        a = T[e] / 255,
                        l = T[1 + t] / 255,
                        r = 1 - E(s / 63.5 - 1);
                      10 < s && s < 118 && (o = N(N(a * r, a * T[t] / 255), o), c = N(N(l * r, l * T[1 + e] / 255), c)),
                        (s < 54 || 74 < s) && .001 < (t = (1 - r) * N(a, l) / 3)
                        && (s < 64 && t > i ? i = t : 64 < s && t > n && (n = t));
                    }
                    E(n - i) > E(m) && (m = n - i), E(c - o) > E(u) && (u = c - o);
                  }
                })(),
                (() => {
                  let s = 0, o = 0, t = 0, a = 0;
                  i = 0, k.fill(0);
                  for (let e = 0; e < 31; ++e) {
                    let l = 0, r = 512 * e;
                    for (let a = 0; a < 128; a++) {
                      let e = r + 4 * a, t = (T[e] + T[1 + e]) / 255;
                      e = T[2 + e],
                        14 < a && a < 114 && (l += t),
                        e && t && (t = k[e] + 1, k[e] = t, s > t || (s = t, o = e));
                    }
                    l < 3 && 5 < e && (t += e / 32), 3 < l && (7 < e && (a += e / 15), i = 1);
                  }
                  o && (i = 1),
                    r = o || c,
                    c = o,
                    j = X(j, i ? 6.5 : u1.y < -20 ? 11 : 8, 1 - G(-4 * O)),
                    u1.y += a / 41 - (i || j) * t / 41 * j * O;
                })(),
                t = L(1 - 5 * N(E(m), E(u))),
                l = C ? H * N1 : W,
                d = X(d, i * t * L(2 * Q) * 7, 1 - G(-(i ? .1 < t ? 10 : 5 + 2 * Q : 1) * O)),
                g = X(g, 0, 1 - G(-(i ? 8 : 4) * O)),
                m += O * ((r ? 0 : t * g) - J(i1 + l) * Q * d),
                v = X(v, 0, 1 - G(-(i ? 8 : 4) * O)),
                u += O * ((r ? 0 : t * v) - K(i1 + l) * Q * d),
                t = S();
              var { x: e, y: a, z: l } = 1 < Y
                ? R[l1].J.transformPoint({ x: 0, y: l1 || .9 < o1 ? 15 : 1, z: -2.4 })
                : ((e = (l = t).inverse()).m41 = e.m42 = e.m43 = 0,
                  a = e.transformPoint({ x: m, z: u, w: 0 }),
                  u1.x += a.x,
                  u1.z += a.z,
                  l.transformPoint(u1));
              if (
                r && (g = (e - q.x) / O, v = (l - q.z) / O),
                  q.x = e,
                  q.y = a,
                  q.z = l,
                  (Y = Y && (i && r ? 0 : 1)) || r !== s
              ) {
                s = r;
                let e = (t = S()).inverse().transformPoint(q);
                u1.x = e.x, u1.y = e.y, u1.z = e.z;
              }
              for (
                h = X(h, c1 * (27 < r && r < 32), 1 - G(-2 * O)),
                  a < (e < -25 || l < 109 ? -25 : -9) && (g = v = d = 0, Y = 2),
                  1 === r && (R[9].l = e < -15 && l < 0 ? 1 : 0),
                  p = X(X(p, a, 1 - G(-2 * O)), a, Y || 8 * E(p - a)),
                  A = F(A, p, 2, 1),
                  b = F(b, e, .5, 1),
                  I = F(I, l, .5, 1),
                  C
                    ? (t = Y + (1 - G(-18 * O)), w = X(w, e, t), n1 = X(n1, p + 1.5, t), f1 = X(f1, l, t), H = g1(H))
                    : (n1 = F(n1, N(A + L((-60 - l) / 8, 0, 20) + 13 + 9 * h, 6), 4, 2),
                      f1 = F(f1, I + -18 + 5 * h, 1, 2 + h),
                      w = F(w, b, 1, 2 + h),
                      a = B1(4, -E(I - f1)),
                      H = y1(H, 90 - g1(q1(a, t = b - w) / N1), M + (1 - G(-6 * O))),
                      B = y1(B, 90 - q1(L1(a, t), n1 - A) / N1, M + (1 - G(-6 * O)))),
                  B = L(B, -87, 87),
                  n = y1(n, o, 1 - G(-8 * O)),
                  f = X(f, Q, 1 - G(-10 * O)),
                  Q && (o = 90 - i1 / N1),
                  M = 0,
                  P[37].j = U(e, p + .124, l).rotateSelf(0, n),
                  t = 0;
                t < 2;
                ++t
              ) {
                P[38 + t].j = P[37].j.translate(0, f * L(.45 * K(9.1 * D + W * (t - 1) - W / 2))).rotateSelf(
                  f * K(9.1 * D + W * (t - 1)) * .25 / N1,
                  0,
                );
              }
            };
          })(),
          requestAnimationFrame(l);
      }
    },
    h = new Image();
  h.onload = h.onerror = a,
    h.src = t,
    (r => {
      let X = 0,
        s = () => {
          let b = 0,
            e = h => {
              let r,
                m,
                s,
                u,
                o,
                c,
                i = 0,
                n = 0,
                g = [],
                f = new Int32Array(768 * h),
                v = 2 ** (a - 9) / h,
                d = W * 2 ** (l - 8) / h,
                p = R * h & -2;
              for (let l = 0; l <= 11; ++l) {
                for (
                  let e = 0, t = +"000001234556112341234556011111111112011111111112000001111112"[12 * X + l];
                  e < 32;
                  ++e
                ) {
                  let a = (32 * l + e) * h;
                  for (r = 0; r < 4; ++r) {
                    if (u = 0, t && (u = A[t - 1].charCodeAt(e + 32 * r) - 40, u += 0 < u ? 106 : 0), u) {
                      if (!(m = g[u])) {
                        let l,
                          r,
                          s = 0,
                          o = 0,
                          c = m = u,
                          i = X < 2
                            ? e => e % 1 * 2 - 1
                            : Q1,
                          n = X < 2
                            ? X < 1
                              ? e => e % 1 < .5 ? 1 : -1
                              : e => (e = e % 1 * 4) < 2 ? e - 1 : 3 - e
                            : Q1,
                          f = new Int32Array(T + C + L);
                        for (let t = 0, a = 0; T + C + L > t; ++t, ++a) {
                          let e = 1;
                          T > t ? e = t / T : T + C > t || (e = (1 - (e = (t - T - C) / L)) * 3 ** (-D / 16 * e)),
                            a < 0
                            || (a -= 4 * h,
                              r = .00396 * 2 ** ((c + M - 256) / 12),
                              l = .00396 * 2 ** ((c + S - 256) / 12) * (1 + (X ? 0 : .0072))),
                            f[t] = 80
                                * (i(s += r * e ** (Y / 32)) * I + n(o += l * e ** (F / 32)) * j
                                  + (k ? (2 * X1() - 1) * k : 0))
                                * e | 0;
                        }
                        m = g[m] = f;
                      }
                      for (let e = 0, t = 2 * a; m.length > e; ++e, t += 2) f[t] += m[e];
                    }
                  }
                  for (let e, t = 0; h > t; ++t) {
                    r = 0,
                      m = 2 * (a + t),
                      ((e = f[m]) || c)
                      && (o = .00308 * Q,
                        1 !== X && 4 !== X || (o *= K(v * m * W * 2) * q / 512 + .5),
                        o = 1.5 * K(o),
                        i += o * n,
                        n += o * (s = (1 - B / 255) * (e - n) - i),
                        e = 4 === X ? n : 3 === X ? s : i,
                        X || (e = (e *= 22e-5) < 1 ? -1 < e ? K(e / 4 * W * 2) : -1 : 1, e /= 22e-5),
                        e *= H / 32,
                        c = 1e-5 < e * e,
                        r = e * (1 - (s = K(d * m) * O / 512 + .5)),
                        e *= s),
                      p > m || (r += f[1 + m - p] * P / 255, e += f[m - p] * P / 255),
                      N[s = b + m >> 1] += (f[m] = r) / 65536,
                      E[s] += (f[++m] = e) / 65536;
                  }
                }
              }
              b += 768 * h;
            },
            A = [
              [
                "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U",
                "(059<59<A9<AE<AEHAEHMEHMQMQTY(Y",
                "(5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y",
                "(:?BFFKNRRWZ^(^((:=@FFILRRUX^(^",
                "Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X]",
                "QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]",
              ],
              [
                ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5",
                "-(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5",
                ",(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5",
                "*(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6",
                "5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5",
                "5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5",
              ],
              ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q"],
              ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q"],
              ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q"],
            ][X],
            [I, M, Y, j, S, F, k, T, C, t, D, a, Q, B, H, O, l, P, R, q] = [
              [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
              [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
              [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
              [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
              [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
            ][X],
            L = 4 * t ** 2;
          e(5513), e(4562), e(3891), D1(++X < 5 ? s : r);
        },
        e = H1.createBuffer(2, 5362944, 44100),
        N = e.getChannelData(0),
        E = e.getChannelData(1);
      E1.buffer = e, E1.loop = !0, D1(s);
    })(() => {
      D1(() => {
        let s,
          t = 0,
          l = [],
          o = [],
          c = [],
          i = [],
          r = e => {
            let { x: t, y: a, z: l } = s[e], r = (m[0] = t, m[1] = a, m[2] = l, f.get(e = "" + (s.D ? h : n)));
            return void 0 !== r
              ? (t = 3 * r, i[t] = (i[t++] + n[5]) / 2, i[t] = (i[t++] + n[6]) / 2, i[t] = (i[t] + n[7]) / 2)
              : (f.set(e, r = f.size), o.push(t, a, l, m[3]), c.push(n[4]), i.push(n[5], n[6], n[7])),
              r;
          },
          n = new Int32Array(8),
          f = new Map(),
          h = new Int32Array(n.buffer, 0, 5),
          m = new Float32Array(n.buffer);
        for (let e of P) {
          for (s of (m[3] = 40 === e.H ? -14 : e.G && e.H, e.s)) {
            let { x: e, y: t, z: a } = z1(s);
            n[4] = 0 | s.A, n[5] = 32767 * e, n[6] = 32767 * t, n[7] = 32767 * a;
            for (let e = 2, t = r(0), a = r(1); s.length > e; ++e) l.push(t, a, a = r(e));
          }
          e.s = null, e.v = t, e.F = t = l.length;
        }
        V.b11(34962, V.c1b()),
          V.b2v(34962, new Float32Array(o), 35044),
          V.v7s(0, 4, 5126, !1, 0, 0),
          V.b11(34962, V.c1b()),
          V.b2v(34962, new Int16Array(i), 35044),
          V.v7s(1, 3, 5122, !0, 0, 0),
          V.b11(34962, V.c1b()),
          V.b2v(34962, new Uint32Array(c), 35044),
          V.v7s(2, 4, 5121, !0, 0, 0),
          V.b11(34963, V.c1b()),
          V.b2v(34963, new Uint16Array(l), 35044),
          V.e3x(0),
          V.e3x(1),
          V.e3x(2),
          D1(a);
        try {
          let [a, l, e, t, r] = JSON.parse(localStorage.I);
          R.map((e, t) => e.g = e.i = e.l = t ? 0 | a[t] : 0), h1.map((e, t) => e.l = 0 | l[t]), l1 = e, D = t, z = r;
        } catch {}
        o1 = L(l1);
      });
      let t = v(11, e => U(K(e / 10 * W), e / 10).rotate(+e).scale(1.0001 - e / 10, 0, 1 - e / 10)),
        i = v(10, e => r(p1(w1(18), t[e]).reverse(), p1(w1(18), t[e + 1]), 1)).flat();
      p(() => b([m1.slice(1)], U(-2).scale3d(3).rotate(90, 0)), 0),
        p(() => {
          let e = (t, a, l) =>
              p(e => {
                e.h = () => U(r() * K(3 * t + D * t) * a),
                  m1.map(({ x: e, z: t }) => {
                    b(u(11, 1), U(4 * e, 4, l + 4 * t).scale(.8, 3, .8), S(.5, .3, .7, .6)),
                      b(u(), U(4 * e, 7, l + 4 * t).scale(1, .3), S(.5, .5, .5, .3));
                  }),
                  b(d(
                    f(u(), U(0, 0, l).scale(5, 1, 5), S(.8, .8, .8, .3)),
                    ...[-1, 1].map(e => f(u(), U(5 * e, .2, l).rotate(-30 * e).scale(4, 1, 2), S(.8, .8, .8, .3))),
                  )),
                  b(u(), U(0, -3, l).scale(8, 2, 8), S(.4, .4, .4, .3));
              }),
            t = (e, t, a) => U(e + K(D + 2) / 5, t + K(.8 * D) / 3, a).rotateSelf(2 * K(D), K(.7 * D), K(.9 * D)),
            a = e =>
              d(
                f(u(), U(0, -e / 2).scale(6, e - 1, 2.2)),
                f(u(), U(0, -e / 2 - 6).scale(4, e - 3, 4)),
                f(u(32, 1), U(0, e / 2 - 9).rotate(90, 0, 90).scale3d(4)),
              ),
            r = () => B1(R[2].i, 1 - R[4].i),
            l = d(
              f(u(20, 1, 1.15, 1), U(0, -3).scale(3.5, 1, 3.5), S(.7, .4, .25, .7)),
              f(u(20, 1, 1.3, 1), U(0, -2.5).scale(2.6, 1, 3), S(.7, .4, .25, .2)),
              f(u(), U(4, -1.2).scale3d(2), S(.7, .4, .25, .3)),
            ),
            s = v(7, e => f(u(6, 1), U(4 * (e / 6 - .5), 3).scale(.2, 3, .2), S(.3, .3, .38))).flat(),
            o = (p(e => {
              e.h = () => t(-12, 4.2, 40 * o1 - 66), b(l), A(U(0, -3, 4));
            }),
              A(U(-5.4, 1.5, -19).rotate(0, -90)),
              I(U(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
              I(U(0, 2.8), [5, 10, 3], [-5, 10, 3], ...w1(18).map(({ x: e, z: t }) => [7 * e, 10 * t, 4.5 - 2 * E(e)])),
              b(u(), U(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), S(.8, .8, .8, .2)),
              m1.map(({ x: e, z: t }) => b(u(6), U(3 * e, 3, 15 * t).scale(.7, 4, .7), S(.6, .3, .3, .4))),
              b(u(), U(0, 0, -23).scale(3, 1, 8), S(.9, .9, .9, .2)),
              b(u(), U(0, 0, 22).scale(3, 1, 8), S(.9, .9, .9, .2)),
              [-15, 15].map((t, a) => {
                b(u(), U(0, 6.3, t).scale(4, .3, 1), S(.3, .3, .3, .4)),
                  b(u(), U(0, 1, t).scale(3, .2, .35), S(.5, .5, .5, .3)),
                  p(e => {
                    e.h = () => U(0, 0, t).scale(1, L(1.22 - R[a + 1].g), 1), b(s);
                  });
              }),
              v(5, t =>
                v(2, e =>
                  b(
                    i,
                    U(18.5 * (e - .5), 0, 4.8 * t - 9.5).rotate(0, 180 - 180 * e).scale(1.2, 10, 1.2),
                    S(1, 1, .8, .2),
                  ))),
              b(u(), U(3, 1.5, -20).scale(.5, 2, 5), S(.7, .7, .7, .2)),
              b(u(), U(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), S(.75, .75, .75, .2)),
              b(u(5), U(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), S(.6, .3, .3, .4)),
              b(u(), Y(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, .6, 4.5), S(.8, .2, .2, .5)),
              b(d(
                g(
                  f(u(6, 0, 0, .3), U(8, -3, -4).scale(13, 1, 13), S(.7, .7, .7, .2)),
                  f(u(6), U(0, -8).scale(9, 8, 8), S(.4, .2, .5, .5)),
                  f(u(6, 0, 0, .3), U(0, -.92).scale(13, 2, 13), S(.8, .8, .8, .2)),
                ),
                f(u(5), j(5, 30, 5), S(.4, .2, .6, .5)),
                f(u(5, 0, 1.5), U(0, 1).scale(4.5, .3, 4.5), S(.7, .5, .9, .2)),
                f(u(), Y(0, 60).translate(14, .7, -1).rotate(-35).scale(2, 2, 2), S(.5, .5, .5, .5)),
                f(u(6), U(15, -1.5, 4).scale(3.5, 1, 3.5), S(.5, .5, .5, .5)),
              )),
              p(e => {
                e.h = () =>
                  U(0, .01 < R[3].g ? (5 * J(1.5 * D) + 2) * R[3].i * (1 - R[2].g) + -15 * (1 - R[3].g) : -500, 0),
                  b(u(5), U(0, -.2).scale(5, 1, 5), S(.6, .65, .7, .3)),
                  A(U(0, 1.2));
              }),
              A(U(15, -2, 4)),
              e(.7, 12, 35),
              e(1, 8.2, 55),
              p(e => {
                e.h = () => U(r() * K(D / 1.5 + 2) * 12),
                  b(
                    d(
                      g(
                        f(u(), j(1.5, 1, 5), S(.9, .9, .9, .2)),
                        f(u(6), j(4, 1, 5), S(.9, .9, .9, .2)),
                        f(u(), U(0, -2).scale(2, 3.2, 1.9), S(.3, .8, .5, .5)),
                        f(u(16, 1, 0, 4), j(1, 1, 1.5).rotate(0, 90), S(.9, .9, .9, .2)),
                      ),
                      f(u(), j(1.3, 10, 1.3), S(.2, .7, .4, .6)),
                    ),
                    U(0, 0, 45),
                  ),
                  I(U(0, 2.8, 45), [0, 0, 4.5]);
              }),
              b(u(), U(-18.65, -3, 55).scale(2.45, 1.4, 2.7), S(.9, .9, .9, .2)),
              p(e => {
                e.h = () => U(9.8 * (1 - r())),
                  b(u(3), U(-23, -1.7, 55.8).scale(5, .7, 8.3), S(.3, .6, .6, .2)),
                  b(u(8), U(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), S(.8, .8, .8, .2)),
                  b(u(), U(-23, -3, 55).scale(5.2, 1.7, 3), S(.5, .5, .5, .3)),
                  b(u(), U(-23, -2.2, 62).scale(3, 1, 4), S(.5, .5, .5, .3)),
                  A(U(-23, -.5, 66.5));
              }),
              p(e => {
                e.h = () => U(0, L(1 - 5 * r()) * n(R[4].g, R[5].g) * K(1.35 * D) * 4),
                  b(u(), U(-22.55, -3, 55).scale(1.45, 1.4, 2.7), S(.7, .7, .7, .2)),
                  b(d(f(u(), j(3, 1.4, 2.7)), f(u(), j(1.2, 8, 1.2))), U(-33, -3, 55), S(.7, .7, .7, .2));
              }),
              p(e => {
                e.h = () => U(0, 0, L(1 - 5 * r()) * n(R[4].g, R[5].g) * K(.9 * D) * 8),
                  b(d(
                    f(u(), U(-27, -3, 55).scale(3, 1.4, 2.7), S(.9, .9, .9, .2)),
                    f(u(), U(-27, -3, 55).scale(1, 3), S(.9, .9, .9, .2)),
                  )),
                  b(u(), U(-39, -3, 55).scale(3, 1.4, 2.7), S(.9, .9, .9, .2));
              }),
              p(e => {
                e.h = () => U(0, -6.5 * R[4].i),
                  b(u(6), U(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), S(.7, .7, .7, .4));
              }),
              A(U(-55, -1.1, 46).rotate(0, 90)),
              b(u(6), U(-61.3, -2.4, 49).scale(3, 1, 5), S(.4, .6, .6, .3)),
              b(u(7), U(-57, -2.6, 46).scale(4, 1, 4), S(.8, .8, .8, .3)),
              [
                ...f(u(), U(0, -3).scale(11, 1.4, 3), S(.9, .9, .9, .2)),
                ...d(
                  f(u(6), Y(90).scale(6, 8, 6), S(.3, .6, .6, .3)),
                  f(u(4, 0, .01), U(0, 6).scale(12, 2, .75).rotate(0, 45), S(.3, .6, .6, .3)),
                  f(u(6), Y(90).scale(5, 12, 5), S(.3, .6, .6, .3)),
                  ...[5, 0, -5].map(e => f(u(5), U(e, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), S(.3, .6, .6, .3))),
                ),
              ]),
            c = (b(o, U(-53, 0, 55)),
              p(e => {
                e.h = () => U(-75, (1 - R[5].i) * (1 - R[6].g) * 3, 55).rotate(180 * (1 - R[5].i) + s1, 0), b(o);
              }, 2),
              b(u(), U(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), S(.7, .7, .7, .2)),
              b(u(3, 0, -.5), U(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), S(.8, .8, .8, .2)),
              b(d(
                g(
                  f(u(), U(-100, -2.5, 55).scale(8, 1, 8), S(.8, .8, .8, .2)),
                  f(u(), U(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), S(.8, .8, .8, .2)),
                  f(u(), U(-100, -2.6, 70).scale(3, 1.1, 7), S(.8, .8, .8, .2)),
                  f(u(), U(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), S(.8, .8, .8, .2)),
                  f(u(6), U(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), S(.6, .6, .6, .3)),
                  f(u(), U(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), S(.8, .8, .8, .2)),
                  f(u(), U(-100, .42, 92).scale(3, 1.1, 4.1), S(.8, .8, .8, .2)),
                ),
                f(u(8), U(-100, -1, 55).scale(7, .9, 7), S(.3, .3, .3, .4)),
                f(u(8), U(-100, -2, 55).scale(4, .3, 4), S(.4, .4, .4, .5)),
                f(u(8), U(-100, -3, 55).scale(.6, 1, .6), S(.4, .4, .4, .5)),
              )),
              I(U(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
              I(U(-89, .2, 80), [0, 0, 6]),
              b(d(
                f(u(), U(-100, 1, 63).scale(7.5, 4), S(.5, .5, .5, .4)),
                f(u(), U(-100, 0, 70).scale(2, 2, 10), S(.5, .5, .5, .4)),
                f(u(20, 1), U(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), S(.5, .5, .5, .4)),
              )),
              p(e => {
                e.h = () => U(-99.7, -1.9, 63.5).scale(1, L(1.1 - R[6].g), 1), b(s);
              }),
              m1.map(({ x: t, z: a }) => {
                b(u(6), U(7 * t - 100, -3, 7 * a + 55).scale(1, 8.1), S(.6, .15, .15, .8)),
                  [4, -.4].map(e => b(u(6), U(7 * t - 100, e, 7 * a + 55).scale(1.3, .5, 1.3), S(.4, .2, .2, .8)));
              }),
              v(7, e => {
                b(
                  u((23 * e + 1) % 5 + 5, 0, .55),
                  U(5 * K(e) - 101 + e, -2.3 - e, 44.9 - 2.8 * e).scaleSelf(5 + e / 2, 1 + e / 6, 5 + e / 3),
                  S(.5 - e / 17, .5 - (1 & e) / 9, .6, .3),
                );
              }),
              b(u(), U(-87, -9.5, 24).scale(7, 1, 3), S(.4, .5, .6, .4)),
              b(u(4), U(-86, -9.2, 27).scale(5, 1, 5), S(.5, .6, .7, .3)),
              b(u(12, 1), U(-86, -9, 31).scale(1.5, 1, 1.5), S(.3, .3, .4, .1)),
              A(U(-86, -7.5, 31)),
              p(e => {
                e.h = () => U(0, 3.5 * (1 - N(R[6].g, R[7].g)) + n(R[7].i, R[6].i) * K(D) * 5),
                  [0, 12, 24].map(e => b(u(), U(e - 76.9, e / -13 - 10, 24).scale(2.8, 1.5, 3), S(.2, .5, .6, .2)));
              }),
              p(e => {
                e.h = () => U(0, n(R[7].i, R[6].i) * K(D + 3) * 6, 6 * K(.6 * D + 1) * n(R[7].i, R[6].i)),
                  [6, 18].map(e => b(u(), U(e - 76.9, e / -13 - 10, 24).scale(2.8, 1.5, 3), S(.1, .4, .5, .2)));
              }),
              b(
                d(
                  g(
                    f(u(5), U(0, 0, -7).scale(2, 1.2, 2), S(.2, .4, .7, .3)),
                    f(u(5), j(9, 1.2, 9), S(0, .2, .3, .5)),
                    f(u(), j(11, 1, 13), S(.3, .4, .6, .3)),
                  ),
                  f(u(5), j(5.4, 5, 5.4), S(0, .2, .3, .5)),
                ),
                U(-38.9, -11.3, 17),
              ),
              A(U(-38.9, -9.6, 10)),
              p(e => {
                e.h = () => U(0, -7.3 * R[7].i),
                  b(
                    d(
                      g(
                        f(u(5), U(0, 2).scale(5, 7, 5).skewY(8), S(.2, .4, .5, .5)),
                        f(u(5), U(0, 6).scale(1.1, 7, 1.1).skewY(-8), S(.25, .35, .5, .5)),
                        f(u(5), U(0, 9).scale(.6, 7, .6).skewY(8), S(.35, .3, .5, .5)),
                      ),
                      f(u(5), j(4, 8, 4), S(.2, .4, .5, .5)),
                      f(u(5), U(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), S(.2, .4, .5, .5)),
                    ),
                    U(-38.9, -11.3, 17),
                  ),
                  I(U(-39.1, -.6, 17).rotate(11), ...w1(15).map(({ x: e, z: t }) => [3 * e, 3 * t, 1.2]));
              }),
              m1.map(({ x: t, z: a }) => {
                b(u(14, 1), U(9 * t - 38.9, -7.3, 11 * a + 17).scale(1, 4), S(.25, .25, .25, 1)),
                  [1.5, 8].map(e =>
                    b(u(17, 1), U(9 * t - 38.9, e - 11.3, 11 * a + 17).scale(1.5, .5, 1.5), S(.6, .6, .6, .3))
                  );
              }),
              b(
                d(
                  g(
                    f(u(6), U(0, 0, -36).scale(15, 1.2, 15), S(.7, .7, .7, .3)),
                    f(u(), U(0, 0, -18).scale(4, 1.2, 6), S(.45, .4, .6, .3)),
                  ),
                  ...v(6, t =>
                    v(6, e =>
                      f(
                        u(6),
                        U(4.6 * e - 12 + 2 * (1 & t), 0, 4.6 * t - 50 + 2 * K(4 * e)).scale(2, 5, 2),
                        S(.7, .7, .7, .3),
                      ))).flat(),
                ),
                U(-38.9, -11.3, 17),
              ),
              I(U(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
              b(u(5), U(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), S(.8, .1, .25, .4)),
              A(U(-84, -.5, 85).rotate(0, 45)),
              p(e => {
                e.h = () => t(-123, 1.4, 55 + -65 * z), b(l), A(U(0, -3, -4).rotate(0, 180));
              }),
              d(
                f(u(), U(0, -.5, 1).scale(1.15, 1.2, 6.5), S(.25, .25, .35, .3)),
                f(u(3), U(0, 0, -5.5).scale(3, 2), S(.6, .3, .4, .3)),
                ...[-1.2, 1.2].map(e => f(u(), U(e, -.5, 1).scale(.14, .3, 6.5), S(.7, .2, 0, .3))),
              ));
          p(e => {
            e.h = () => U(0, -2, n(R[10].g, R[11].g) * E(K(1.1 * D)) * -8.5 + 10),
              v(2, e => b(c, U(9 * e - 110 + (1 & e), 1.7, -12)));
          }),
            p(e => {
              e.h = () => U(0, -2, n(R[10].g, R[11].g) * E(K(2.1 * D)) * -8.5 + 10),
                v(2, e => b(c, U(9 * (e + 2) - 110 + (1 & e), 1.7, -12)));
            }),
            p(e => {
              e.h = () =>
                U(0, -2, -8.5 * N((1 - R[10].g) * (1 - n(R[10].g, R[11].g)), n(R[10].g, R[11].g) * E(K(1.5 * D))) + 10),
                v(3, e => b(c, U(9 * e - 106, 1.7, -12)));
            }),
            b(
              d(
                g(f(u(), U(26.5, -1.6, 10).scale(20, 2.08, 3)), f(u(), U(26.5, -.6, 10).scale(19, 2, .5))),
                ...v(4, e => f(u(), U(13 + 9 * e + (1 & e), -.8, 9).scale(1.35, 1.35, 9))),
                ...v(3, e => f(u(), U(17 + 9 * e, -.8, 9).scale(1.35, 1.35, 9))),
              ),
              U(-123, 0, -12),
              S(.5, .5, .6, .2),
            ),
            A(U(-116, -1.4, -18).rotate(0, 180)),
            b(u(), U(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), S(.8, .8, .8, .2)),
            b(u(6), U(-116, -2.6, -16.5).scale(3.2, .8, 3), S(.6, .5, .7, .2)),
            b(u(), U(-115.5, -17, -12).scale(.5, 15, 2.2), S(.6, .6, .6, .3)),
            b(u(8), U(-114, -17, -2).scale(2, 15, 2), S(.6, .6, .6, .3)),
            b(u(8), U(-79, -17, -2).scale(2, 15, 2), S(1, 1, 1, .3)),
            b(u(), U(-77, -17, -50.5).scale(2.2, 15, .5), S(.6, .6, .6, .3)),
            v(3, e => {
              b(a(16), U(12 * e - 109, -9, -12), S(.6, .6, .6, .3)),
                b(a(16), U(-77, -9, -12 * e - 20).rotate(0, 90), S(.6, .6, .6, .3));
            }),
            b(d(
              f(u(12), U(-77, -14.5, -12).scale(4, 17.5, 4), S(.7, .7, .7, .2)),
              f(u(), U(-79, .1, -12).scale(3.5, 2, 1.3), S(.4, .5, .6, .2)),
              f(u(), U(-77, .1, -14).scale(1.5, 2, 2), S(.4, .5, .6, .2)),
              f(u(12), U(-77, 3.1, -12).scale(3, 5, 3), S(.4, .5, .6, .2)),
            )),
            b(u(), U(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), S(.6, .6, .6, .3)),
            b(u(9), U(-98, -18.4, -40).scale(2.5, 13.5, 2.5), S(.5, .5, .5, .3)),
            b(d(
              f(u(), U(-93, -5.8, -40).scale(9, 1, 5), S(.8, .8, .8, .1)),
              f(u(9), U(-98, -5.8, -40).scale(3, 8, 3), S(.7, .7, .7, .2)),
            )),
            A(U(-98, -4.4, -40).rotate(0, 90)),
            I(U(-115, .2, -12), [0, 0, 3.5]),
            I(U(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]),
            b(d(
              g(
                f(u(6, 0, 0, .6), U(-100, .7, 105.5).scale(8, 1, 11), S(.7, .7, .7, .2)),
                f(u(), U(-101.5, .7, 93.5).scale(10.5, 1, 2), S(.7, .7, .7, .2)),
              ),
              f(u(5), U(-100, .7, 113).scale(4, 3, 4), S(.7, .7, .7, .2)),
            )),
            v(4, t =>
              p(e => {
                e.h = () => {
                  let e = n(R[8].i, R[12].i);
                  return U(
                    (2 < t ? 2 * (1 - e) + e : 0) - 100,
                    e * K(1.3 * D + 1.7 * t) * (3 + t / 3) + .7,
                    115 + (1 & t ? -1 : 1) * (1 - R[8].i) * (1 - R[12].i) * -7
                      + N(e, .05) * J(1.3 * D + 7 * t) * (4 - 2 * (1 - t / 3)),
                  );
                },
                  b(
                    u(6),
                    U(-14.6 - 4.8 * t - (2 < t ? 2 : 0), -t / 2.3, -21.5).scale(2.6, 1, 2.5),
                    S(.5 - t / 8, t / 12 + .5, .7, .3),
                  );
              })),
            p(e => {
              e.h = () => {
                let e = n(R[8].i, R[12].i);
                return U(2.5 * (1 - e) - 139.7, -3 * (1 - R[8].g) + e * K(.8 * D) * -1 - 1.8, 93.5).rotateSelf(
                  J(1.3 * D) * (3 * e + 3),
                  0,
                );
              },
                b(d(f(u(10), j(6, 2, 6), S(.1, .6, .5, .3)), f(u(10), j(3.3, 6, 3.3), S(.1, .6, .5, .5)))),
                b(u(15, 1), U(-7.5).rotate(0, 90).scale(3, 2.3, 3), S(.4, .4, .4, .3)),
                b(u(10), U(-7.5).rotate(0, 90).scale(2, 2.5, 2), S(.3, .8, .7, .3)),
                b(u(5), U(-7.5).rotate(0, 90).scale(1, 3), S(.5, .5, .5, .5)),
                A(U(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180)),
                [-1, 1].map(e =>
                  b(i, Y(90 * -e, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), S(1, 1, .8, .2))
                ),
                I(U(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
            }),
            [-1, 1].map(t => {
              b(u(12, 1), U(-7.5 * t - 100, 3.7, 96).scale(.8, 4, .8), S(.6, .24, .2, .5)),
                [7.2, 1.5].map(e => b(u(15, 1), U(-7.5 * t - 100, e + .7, 96).scale(1.1, .5, 1.1), S(.5, .24, .2, .4))),
                b(i, U(-5 * t - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * t - 90), S(1, 1, .8)),
                b(
                  d(
                    f(u(), U(-4 * t, 3.5, -.5).scale(4, 4, .7), S(.5, .5, .5, .4)),
                    f(u(), j(3, 3, 10), S(.6, .24, .2, .5)),
                    f(u(28, 1), U(0, 3, -5).scale(3, 4, 10).rotate(90, 0), S(.6, .24, .2, .5)),
                    f(u(5), U(-5.3 * t, 7).rotate(90, 0).scale(1.7, 5, 1.7), S(.6, .24, .2, .5)),
                    f(u(5), U(-5.3 * t, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), S(.6, .24, .2, .5)),
                  ),
                  U(t - 100, .7, 97),
                );
            }),
            p(e => {
              e.h = () => U(-100, .6, 96.5).scale(.88, 1.2 - R[12].g), b(s);
            }),
            b(d(
              f(u(), U(-82.07, .8, 106).scale(11, .9, 2.2), S(.7, .7, .7, .1)),
              f(u(45, 1), U(-81, .7, 106).scale3d(7.7), S(.7, .7, .7, .1)),
            )),
            p(e => {
              e.h = () => U(-81, .6, 106).rotate(0, 40 + r1),
                b(d(
                  f(u(45, 1), j(7.5, 1, 7.5), S(.45, .45, .45, .2)),
                  f(u(), U(0, 0, -5.5).scale(1.5, 3, 2.7), S(.45, .45, .45, .2)),
                )),
                b(u(8), U(0, 2).scale(3, 1.5, 3).rotate(0, 22), S(.7, .7, .7, .1)),
                b(u(5), U(0, 2).scale(1, 2), S(.3, .3, .3, .2)),
                I(U(0, 3), ...w1(14).map(({ x: e, z: t }) => [5.6 * e, 5.6 * t, 2]));
            }),
            p(e => {
              e.h = () => U(-65.8, .8, 106).rotate(0, x),
                [-1, 1].map(e =>
                  b(i, Y(0, 90).translate(-5 * e, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90), S(1, 1, .8))
                ),
                b(d(f(u(28, 1), U(0, 2).scale(7.5, 1, 7.5), S(.35, 0, 0, .3)), f(u(), j(9, 5, 2), S(.3, 0, 0, .3)))),
                b(f(u(28, 1), j(7.5, 1, 7.5), S(.45, .45, .45, .2))),
                b(f(u(5), U(0, 1).scale(1, .2), S(.3, .3, .3, .2)));
            }),
            p(e => {
              e.h = () => U(-50.7, .8, 106).rotate(0, 180 - x),
                b(d(
                  f(u(28, 1), U(0, 2).scale(7.5, 1, 7.5), S(.35, 0, 0, .3)),
                  f(u(), U(7).scale(9, 5, 2), S(.3, 0, 0, .3)),
                  f(u(), U(0, 0, 7).scale(2, 5, 9), S(.3, 0, 0, .3)),
                )),
                b(f(u(28, 1), j(7.5, 1, 7.5), S(.45, .45, .45, .2))),
                b(f(u(5), U(0, 1).scale(1, .2), S(.3, .3, .3, .2)));
            }),
            p(e => {
              e.h = () => U(-50.7, .8, 91).rotate(0, 270 + x),
                b(d(
                  f(u(28, 1), U(0, 2).scale(7.5, 1, 7.5), S(.35, 0, 0, .3)),
                  f(u(), U(7).scale(9, 5, 2), S(.3, 0, 0, .3)),
                  f(u(), U(0, 0, -7).scale(2, 5, 9), S(.3, 0, 0, .3)),
                )),
                b(f(u(28, 1), j(7.5, 1, 7.5), S(.45, .45, .45, .2))),
                b(f(u(5), U(0, 1).scale(1, .2), S(.3, .3, .3, .2)));
            }),
            b(u(), U(-58, 1, 106).scale(2, .65, 2), S(.7, .7, .7, .2)),
            b(u(), U(-50.7, 1, 99).scale(2, .65, 1), S(.7, .7, .7, .2)),
            b(u(), U(-42, .4, 91).scale(5, 1, 2.5), S(.7, .7, .7, .3)),
            b(u(), U(-34.2, .4, 91).scale(3, 1, 3), S(.7, .7, .7, .3)),
            A(U(-34, 2.7, 96).rotate(-12, 0)),
            b(u(5), U(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), S(.2, .5, .5, .6)),
            [S(.1, .55, .45, .2), S(.2, .5, .5, .3), S(.3, .45, .55, .4)].map((t, a) =>
              p(e => {
                e.h = () =>
                  U(0, (1 - R[13].i) * (1 - R[14].i) * (a ? 0 : 3) + n(R[13].i, R[14].i) * K(1.5 * D + 1.5 * a) * 4),
                  b(u(), U(-23.5, .5, 91 + 6.8 * a).scale(1 === a ? 2 : 3.3, 1, 3.3), t),
                  2 === a && b(u(), U(-29.1, .4, 91).scale(2.1, 1, 3), S(.7, .7, .7, .3)),
                  1 === a && b(u(), U(-16.1, .5, 103.5).rotate(-3.5).scale(3.9, .8, 2).skewX(-1), S(.6, .6, .7, .3));
              })
            ),
            [-1, 1].map(e => b(i, U(-8 * e, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90), S(1, 1, .8))),
            v(3, e =>
              b(
                a(24.7 - .7 * (1 & e)),
                U(6 * e - 6, 4 - (1 & e), 111 - .2 * (1 & e)),
                1 & e ? S(.5, .5, .5, .3) : S(.35, .35, .35, .5),
              )),
            b(d(
              f(u(6, 0, 0, .3), U(0, -.92, 95).scale(14, 2, 14), S(.8, .8, .8, .2)),
              f(u(5), U(0, 0, 95).scale3d(6), S(.3, .3, .3, .5)),
            )),
            A(U(0, 1.7, 82).rotate(0, 180)),
            b(u(5), U(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), S(.5, .3, .3, .4)),
            b(u(6), U(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), S(.5, .6, .7, .3)),
            b(u(), U(0, 16, 129).scale(1.5, 1, 2), S(.5, .6, .7, .3)),
            b(u(7), U(0, 16.2, 133).scale(5, 1, 5), S(.4, .5, .6, .4)),
            b(d(
              g(
                f(u(), U(0, 16, 110.5).scale(12, 1, 3), S(.5, .3, .3, .4)),
                f(u(), U(0, 16, 111).scale(3, 1, 3.8), S(.5, .3, .3, .4)),
              ),
              f(u(5), U(0, 16, 103.5).scale(5.5, 5, 5.5), S(.5, .3, .3, .4)),
            )),
            p(e => {
              e.h = () => {
                let e = K(D);
                return U(-2 * e).rotate(25 * e);
              },
                b(u(3), U(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), S(.5, .3, .3, .4)),
                [22, 30].map(e => {
                  b(u(6), U(0, 16, e + 95).scale(3, 1, 2.3).rotate(0, 90), S(.7, .7, .7, .4)),
                    b(u(), U(0, 6.2, e + 95).scale(.5, 11, .5), S(.5, .3, .3, .4));
                });
            }),
            p(e => {
              e.h = () => {
                let e = n(n((R[14].g + R[14].i) / 2, R[13].i), (R[15].g + R[15].i) / 2);
                return U(0, 16 * e, 8.5 * L(2 * e - 1) + 95);
              },
                b(u(5), j(5, 1.1, 5), S(.5, .3, .3, .4)),
                b(u(5), j(5.5, .9, 5.5), S(.25, .25, .25, .4)),
                A(U(0, 1.5, -1).rotate(0, 180));
            }),
            I(U(0, 3, 95), ...w1(9).map(({ x: e, z: t }) => [9 * e, 9 * t, 4])),
            I(U(0, 19, 134), [0, 0, 3.5]);
        }),
        p(() => {
          [0, 180].map(e => b(i, Y(0, e).translate(.2, 1.32).rotate(-30).scale(.2, .6, .2), S(1, 1, .8))),
            b(s(20), U(0, 1).scale(.5, .5, .5), S(1, .3, .4)),
            b(s(30), j(.7, .8, .55), S(1, .3, .4));
          let t = f(d(u(15, 1), f(u(), U(0, 0, 1).scale(2, 2, .5))), Y(-90, 0).scale(.1, .05, .1), S(.3, .3, .3));
          [-1, 1].map(e => b(t, U(.2 * e, 1.2, .4).rotate(0, 20 * e, 20 * e))),
            b(u(), U(0, .9, .45).scale(.15, .02, .06), S(.3, .3, .3));
        }),
        [-1, 1].map(e =>
          p(() => {
            b(u(20, 1), U(.3 * e, -.8).scale(.2, .7, .24), S(1, .3, .4));
          })
        ),
        p(() => {
          b(u(6, 1), j(.13, 1.4, .13), S(.3, .3, .5, .1)),
            b(u(10), U(0, 1).scale(.21, .3, .21), S(1, .5, .2)),
            b(u(3), U(0, -1).rotate(90, 90).scale(.3, .4, .3), S(.2, .2, .2, .1));
        }, 0),
        p(() => {
          b(u(6).slice(0, -1), j(.77, 1, .77), S(1, .3, .5));
        }, 0),
        p(() => {
          b(
            s(30, 24, (e, t, a) => {
              let l = t / 24, r = e * W * 2 / 30, s = l ** .6 * W / 2;
              return e = l * l * K(e * W * 14 / 30) / 4,
                23 === t
                  ? { x: a.D = 0, y: -.5, z: 0 }
                  : { x: J(r) * K(s), y: J(l * W) - l - e, z: K(r) * K(s) + K(e * W * 2) / 4 };
            }),
            j(.7, .7, .7),
            S(1, 1, 1),
          ), [-1, 1].map(e => b(s(12), U(.16 * e, .4, -.36).scale3d(.09)));
        }, 0);
    });
});
