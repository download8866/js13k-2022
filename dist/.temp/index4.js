let A,
  j,
  l,
  D,
  $,
  e1,
  T = 0,
  F = 0,
  H = 0,
  t1 = 0,
  S = 0,
  C = 0,
  a1 = 0,
  t = 0,
  l1 = 0,
  x = 0,
  y = 0,
  r1 = 0,
  s1 = 0,
  z = 0,
  Q = 0,
  B = 0,
  w = 0,
  k = 1,
  q = 180,
  O = .066,
  P = [],
  R = [],
  o1 = [],
  L = [],
  c1 = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  X = { x: 0, y: 0, z: 0 },
  i1 = { x: 0, y: 0, z: 0 },
  v = (e, a) => Array.from(Array(e), (e, t) => a(t)),
  N = (e, t = 0, a = 1) => e < t ? t : a < e ? a : e,
  n1 = (e, t) => t < (e < 0 ? -e : e) ? e : 0,
  W = (e, t, a) => (0 < a ? a < 1 ? e + (t - e) * a : t : e) || 0,
  n = (e, t) => (e = N(e), W(e, 1 - e, t)),
  f1 = e => H1(V(e *= O1), G(e)) / O1,
  h1 = (e, t, a) => e + (2 * (t = (t - e) % 360) % 360 - t) * N(a) || 0,
  u1 = ({ x: e, y: t, z: a }) => Q1(e - X.x, t - X.y, a - X.z),
  h = ({ x: e, y: t, z: a }, l) => e * l.x + t * l.y + a * l.z,
  m1 = e => {
    let t, a = 0, l = 0, r = 0, s = e.at(-1);
    for (t of e) a += (s.y - t.y) * (s.z + t.z), l += (s.z - t.z) * (s.x + t.x), r += (s.x - t.x) * (s.y + t.y), s = t;
    return t = Q1(a, l, r), a /= t, l /= t, r /= t, { x: a, y: l, z: r, w: a * s.x + l * s.y + r * s.z };
  },
  u = (
    e,
    t = T1,
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
  g1 = (e, t, a, l) => [e, 0, 0, 0, 0, t, 0, 0, 0, 0, (l + a) / (a - l), -1, 0, 0, 2 * l * a / (a - l), 0],
  x1 = (e, t, a) => (e.D = a, e.A = t, e),
  y1 = (e, l, t = e.A) =>
    x1(
      e.map(e => {
        let t, a;
        return { x: e, y: t, z: a } = e,
          { x: e, y: t, z: a } = l.transformPoint({ x: e, y: t, z: a }),
          { x: e, y: t, z: a };
      }),
      t,
      e.D,
    ),
  f = (e, t, a) => e.map(e => y1(e, t, a)),
  v1 = (a, l = 0) =>
    v(a, e => {
      let t = G(2 * J * e / a);
      return { x: V(2 * J * e / a), y: 0, z: (t < 0 ? -t : t) < .01 ? t : t < 0 ? t - l : t + l };
    }),
  r = (l, r, s) =>
    l.map((e, t, { length: a }) => x1([e, r[a - t - 1], r[a - (t + 1) % a - 1], l[(t + 1) % a]], l.A, s)),
  m = (
    e,
    t,
    a = 0,
    l,
  ) => (e = e ? v1(e, l) : c1,
    l = y1(e, U(0, 1).scale3d(0 < a ? a : 1)),
    e = y1(e, U(0, -1).scale3d(a < 0 ? -a : 1)).reverse(),
    [...r(e, l, t), l, e]),
  s = (l, r = l, s = (e, t) => (t *= J / r, { x: G(e *= 2 * J / l) * V(t), y: G(t), z: V(e) * V(t) })) => {
    let o = [];
    for (let a = 0; l > a; a++) {
      for (let t = 0; r > t; t++) {
        let e = x1([], 0, 1);
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
          o: 2 < o.length && { C: x1(o, i.A, i.D), B: e, u: r },
          m: 2 < c.length && { C: x1(c, i.A, i.D), B: e, u: r },
        };
      }
    }
    return { o: o, m: c };
  },
  o = (e, t, a = m1(t.C)) => {
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
  d1 = e => e.length ? e.reduce((e, t) => o(e, { C: t, B: 0, u: 0 }), 0) : e,
  z1 = e => (c(e, t => {
    let e = t.m;
    t.m = t.o, t.o = e, t.x *= -1, t.y *= -1, t.z *= -1, t.w *= -1;
    for (let e of t.s) e.B = !e.B;
  }),
    e),
  g = (...e) =>
    e.reduce((l, t) => {
      let r = [];
      if (l = d1(l), t) {
        t = d1(t), c(l, e => e.s = a(t, e, 1)), c(t, e => r.push([e, a(l, e, -1)]));
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
      e = z1(g(z1(d1(e)), ...t)),
      c(e, t => {
        for (let e of t.s) r.set(a(e), e.B);
      }),
      Array.from(r, ([{ C: e }, t]) => {
        let a = e.map(({ x: e, y: t, z: a }) => ({ x: e, y: t, z: a }));
        return x1(t ? a.reverse() : a, e.A, e.D);
      });
  },
  p1 = () => {
    y = n(R[12].g, R[13].g),
      a1 = W(W(a1, 0, 1 - _(-1 * O)), f1(a1 + 60 * O), R[5].g - R[6].i),
      S = W(W(S, 0, 1 - _(-5 * O)), f1(S + 56 * O), y),
      C = W(W(C, 0, 1 - _(-4 * O)), f1(C + 48 * O), y);
    let e = 2 * R[9].i - 1;
    x = W(x, R[9].i, 1 - _(-(.2 + .3 * (e < 0 ? -e : e)) * O)),
      l1 = W(l1, t ? W(l1, -9, 1 - _(-1.5 * O)) : N(H / 3), 1 - _(-1 * O)),
      k && H > k && (k = 0, h4.innerHTML = ""),
      R[0].l && .8 < R[0].g && (T < 13
        ? (1 / 0 > k && (k = H + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), R[0].l = 0)
        : t
          || (1 / 0 > k && (k = H + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
            t = 1));
    for (let e of P) e.h && (e.j = e.h());
    for (let e of R) e.h();
    for (let e of o1) e.h();
  },
  w1 = () => {
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
      ][T = o1.reduce((e, { l: t }) => e + t, 0)] + " / XIII";
  },
  A1 = () => {
    localStorage.I = JSON.stringify([R.map(({ l: e }) => e), o1.map(({ l: e }) => e), t1, H, x]);
  },
  p = (e, t = 1) => {
    let a = l;
    return P.push(l = t = { j: K, H: P.length, G: t, s: [] }), e(t), l = a, t;
  },
  b = (e, t = K, a) => l.s.push(...f(e, t, a)),
  I = r => {
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
            u1(l.transformPoint()) < 3 && L[5] && (t < .3 || .7 < t)
            && (c.l = e ? 0 : 1, o && 1 / 0 > k && (k = H + 1, h4.innerHTML = "* click *"), t1 = o, A1()),
            c.g = W(t, e, 1 - _(-4 * O)),
            c.i = W(a, e, 1 - _(-1 * O)),
            c.j = l.rotate(60 * c.g - 30, 0).translateSelf(0, 1);
        },
      };
    R.push(c),
      b(m(5), r.translate(-.2).rotate(90, 90).scale(.4, .1, .5), Y(.4, .5, .5)),
      b(m(5), r.translate(.2).rotate(90, 90).scale(.4, .1, .5), Y(.4, .5, .5)),
      b(m(), r.translate(0, -.4).scale(.5, .1, .5), Y(.5, .5, .4));
  },
  M = (f, ...e) => {
    let h = -1,
      u = 0,
      m = 0,
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
              t = (e = Q1(j - e, F - t)) - a, o ||= e < a, 0 < t && i > t && (i = t, Y = l), c = C1(c, e / a);
            }
            o
            || ({ x: e, z: t, w: a } = Y,
              l = j - e,
              r = F - t,
              s = Q1(l, r),
              n = H1(-r, l),
              p && (m = (B1() - .5) * J / 2, b = N(b / (1 + B1()))),
              h = -G(n += m),
              u = V(n),
              .1 < s && (s = C1(s, a) / (s || 1), j = l * s + e, F = r * s + t)),
              p = o,
              b = W(b, 6 * (1 - c) + 3, 1 - _(-(c + 3) * O)),
              n = j = W(j, j + h, 1 - _(-b * O)),
              S = W(S, n, 1 - _(-b * O)),
              n = F = W(F, F + u, 1 - _(-b * O)),
              C = W(C, n, 1 - _(-b * O)),
              g = h1(g, H1(S - v, C - d) / O1 - 180, 1 - _(-3 * O)),
              v = S,
              d = C;
            var n = (A.j = I.j.multiply(f.translate(S, 0, C).rotateSelf(0, g, 7 * V(1.7 * H)))).transformPoint();
            u1(n) < 1.6
              && (A.l = 1,
                n = [
                  ,
                  "Mark Zuckemberg<br>made the world worse",
                  ,
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
                ][T] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                1 / 0 > k && (k = H + (T && T < 12 ? 5 : 7), h4.innerHTML = n),
                w1(),
                A1());
          }
          A.l
            && (n = t % 4 - 2,
              A.j = P[2].j.translate(
                t % 4 * 1.2 - 1.7 + V(H + t) / 7,
                -2,
                1.7 * (t / 4 | 0) - 5.5 + (n < 0 ? -n : n) + G(H / 1.5 + t) / 6,
              ));
        },
      },
      I = l,
      t = o1.length,
      M = e.map(([e, t, a]) => ({ x: e, z: t, w: a })),
      Y = M[0],
      { x: j, z: F } = Y,
      S = j,
      C = F;
    o1.push(A);
  },
  I1 = (e, t, a, l) => {
    let r = 0,
      s = 0,
      o = 0,
      c = 1 / 0,
      i = -1 / 0,
      n = 1 / 0,
      f = -1 / 0,
      h = 1 / 0,
      u = -1 / 0,
      m = 1.1 * (a - t),
      g = new DOMMatrix(g1(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, t, a)).multiplySelf(e).invertSelf();
    return t = v(
      8,
      e => (e = g.transformPoint({ x: 4 & e ? 1 : -1, y: 2 & e ? 1 : -1, z: 1 & e ? 1 : -1 }),
        r -= e.x = (m * e.x | 0) / m / e.w,
        s -= e.y = (m * e.y | 0) / m / e.w,
        o -= e.z = (m * e.z | 0) / m / e.w,
        e),
    ),
      a = K.rotate(298, 139).translateSelf(r / 8, s / 8, o / 8),
      y1(t, a).map(({ x: e, y: t, z: a }) => {
        c = C1(c, e), i = E(i, e), n = C1(n, t), f = E(f, t), h = C1(h, a), u = E(u, a);
      }),
      h *= h < 0 ? l : 1 / l,
      u *= 0 < u ? l : 1 / l,
      K.scale(2 / (i - c), 2 / (f - n), 2 / (h - u)).translateSelf((i + c) / -2, (f + n) / -2, (h + u) / 2)
        .multiplySelf(a);
  },
  M1 = (e, t = 35633) => (t = Z.c6x(t), Z.s3c(t, e), Z.c6a(t), t),
  Y1 = (e, t) => {
    let a = {}, l = Z.c1h();
    return Z.abz(l, e), Z.abz(l, M1(t, 35632)), Z.l8l(l), e => e ? a[e] || (a[e] = Z.gan(l, e)) : Z.u7y(l);
  },
  j1 = (e, t, a, l) => {
    if (A) {
      for (var r of (a = K.rotate(0, 40 * V(F) - 70), [37, 38, 39])) u(a, D1, r - 1);
      Z.uae(e, !1, D1), Z.d97(4, P[39].F - P[37].v, 5123, 2 * P[37].v);
    } else {
      for (r = 0; P.length > r; ++r) P[r].G && u(P[r].j, D1, r - 1);
      for (Z.uae(e, !1, D1), Z.d97(4, (t ? P[39].F : P[37].v) - 3, 5123, 6), t = 0; t < 13; ++t) u(o1[t].j, D1, t);
      for (t = 0; R.length > t; ++t) u(R[t].j, D1, t + 13), l || (D1[16 * (t + 13) + 15] = 1 - R[t].g);
      Z.uae(e, !1, D1),
        Z.das(4, P[a].F - P[a].v, 5123, 2 * P[a].v, 13),
        Z.das(4, P[40].F - P[40].v, 5123, 2 * P[40].v, R.length);
    }
  },
  F1 = e => {
    h4.innerHTML += ".", setTimeout(e);
  },
  S1 = e => V(e * J * 2),
  C1 = (e, t) => e < t ? e : t,
  E = (e, t) => t < e ? e : t,
  U = (e, t, a) => K.translate(e, t, a),
  Y = (e, t, a, l = 0) => 255 * l << 24 | 255 * a << 16 | 255 * t << 8 | 255 * e,
  k1 = new AudioContext(),
  K = new DOMMatrix(),
  T1 = new Float32Array(16),
  D1 = new Float32Array(624),
  { PI: J, atan2: H1, sin: V, cos: G, hypot: Q1, exp: _, random: B1, sign: q1 } = Math,
  O1 = J / 180,
  P1 = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  R1 = k1.createBufferSource(),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (let e in Z) Z[e[0] + [...e].reduce((e, t, a) => (e * a + t.charCodeAt(0)) % 434, 0).toString(36)] = Z[e];
F1(() => {
  let e = 0,
    a = () => {
      if (2 == ++e) {
        let l = e => {
            let t;
            Z.f1s(),
              requestAnimationFrame(l),
              a = (e - (j || e)) / 1e3,
              A ? (O = 0, L[5] = 0) : O = C1(.066, a),
              H += O,
              F += a,
              j = e,
              0 < O && (p1(), $()),
              0 < O
              && ({ x: a, y: e, z: t } = X,
                o(),
                Z.b6o(36160, f),
                Z.v5y(0, 0, 128, 128),
                Z.c4s(16640),
                Z.cbf(!0, !1, !0, !1),
                Z.uae(o("b"), !1, u(K.rotate(0, 180).invertSelf().translateSelf(-a, -e, .3 - t))),
                j1(o("c"), 0, 41, 0),
                Z.c4s(256),
                Z.cbf(!1, !0, !0, !1),
                Z.uae(o("b"), !1, u(U(-a, -e, -t - .3))),
                j1(o("c"), 0, 41, 0),
                Z.f1s());
            var a = A
              ? K.rotate(-20, -90).invertSelf().translateSelf(5, -2, -3.4)
              : K.rotate(-w, -q).invertSelf().translateSelf(-z, -Q, -B);
            r(),
              Z.b6o(36160, n),
              Z.v5y(0, 0, 2048, 2048),
              i[0](I1(a, .3, 55, 10)),
              i[1](I1(a, 55, 186, 11)),
              c(),
              Z.b6o(36160, null),
              Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight),
              Z.cbf(!0, !0, !0, !0),
              Z.c4s(16640),
              i[0](),
              i[1](),
              Z.uae(c("a"), !1, g1(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 186)),
              Z.uae(c("b"), !1, u(a)),
              Z.ubu(c("k"), z, Q, B),
              j1(c("c"), !D, 42, 0),
              s(),
              Z.ubu(s("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, F),
              Z.ubu(s("k"), z, Q, B),
              Z.uae(s("b"), !1, u(a.inverse())),
              Z.d97(4, 3, 5123, 0),
              Z.b6o(36160, f),
              Z.f1s();
          },
          e = h,
          t = M1(`#version 300 es
layout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}`),
          r = Y1(
            M1(`#version 300 es
in vec4 f;uniform mat4 b,c[39];void main(){gl_Position=b*c[max(0,abs(int(f.w))-1)+gl_InstanceID]*vec4(f.xyz,1);}`),
            `#version 300 es
void main(){}`,
          ),
          s = Y1(
            M1(`#version 300 es
in vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}`),
            `#version 300 es
precision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}`,
          ),
          o = Y1(
            t,
            `#version 300 es
precision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}`,
          ),
          c = Y1(
            t,
            `#version 300 es
precision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}`,
          ),
          i = v(2, t => {
            let a = new Float32Array(16), l = Z.c25();
            return Z.a4v(33984 + t),
              Z.b9j(3553, l),
              Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              Z.t2z(3553, 10241, 9729),
              Z.t2z(3553, 10240, 9729),
              Z.t2z(3553, 34893, 515),
              Z.t2z(3553, 34892, 34894),
              Z.t2z(3553, 10243, 33071),
              Z.t2z(3553, 10242, 33071),
              e => {
                e
                  ? (u(e, a), Z.uae(r("b"), !1, a), Z.fas(36160, 36096, 3553, l, 0), Z.c4s(256), j1(r("c"), !D, 42, 1))
                  : Z.uae(c(t ? "j" : "i"), !1, a);
              };
          }),
          n = Z.c5w(),
          f = (t = Z.c3z(), Z.c5w()),
          a = Z.c25();
        o(),
          Z.uae(o("a"), !1, g1(1.4, .59, 1e-4, 1)),
          c(),
          Z.ubh(c("q"), 2),
          Z.ubh(c("h"), 1),
          Z.ubh(c("g"), 0),
          s(),
          Z.ubh(s("q"), 2),
          Z.b6o(36160, n),
          Z.d45([0]),
          Z.r9l(0),
          Z.b6o(36160, f),
          Z.bb1(36161, t),
          Z.r4v(36161, 33189, 128, 128),
          Z.f8w(36160, 36096, 36161, t),
          Z.a4v(33986),
          Z.b9j(3553, a),
          Z.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null),
          Z.fas(36160, 36064, 3553, a, 0),
          Z.b9j(3553, Z.c25()),
          Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, e),
          Z.gbn(3553),
          Z.t2z(3553, 10241, 9987),
          Z.t2z(3553, 10240, 9729),
          Z.e8z(2929),
          Z.e8z(2884),
          Z.c70(1),
          Z.c7a(1029),
          Z.d4n(515),
          Z.c5t(0, 0, 0, 1),
          p1(),
          (() => {
            let c,
              e,
              o,
              i,
              t,
              n,
              f,
              h,
              u,
              m,
              g,
              v,
              d,
              p,
              b,
              A,
              I,
              M,
              Y = 1,
              j = 2,
              F = 2,
              S = () => j ? R[t1].u.j : o && 1 === P[o].G && P[o].j || K,
              C = (e, t, a, l) => {
                let r;
                return (r = Y) || (r = t - e, r = (N((r < 0 ? -r : r) ** .9 - a) + 1 / 7) * (1 - _(-1.5 * l * O))),
                  W(e, t, r);
              },
              k = new Int32Array(256),
              T = new Uint8Array(65536);
            e1 = () => {
              let t = S();
              var { x: e, y: a, z: l } = 1 < j
                ? R[t1].J.transformPoint({ x: 0, y: t1 || .9 < l1 ? 15 : 1, z: -2.4 })
                : ((e = (l = t).inverse()).m41 = e.m42 = e.m43 = 0,
                  a = e.transformPoint({ x: u, z: m, w: 0 }),
                  i1.x += a.x,
                  i1.z += a.z,
                  l.transformPoint(i1));
              let r = e - X.x, s = l - X.z;
              if (j = j && (i && c ? 0 : 1), X.x = e, X.y = a, X.z = l, j || c !== o) {
                o = c;
                let e = (t = S()).inverse().transformPoint(X);
                i1.x = e.x, i1.y = e.y, i1.z = e.z;
              }
              for (
                c && (g = r / O, v = s / O),
                  h = W(h, y * (27 < c && c < 32), 1 - _(-2 * O)),
                  a < (e < -25 || l < 109 ? -25 : -9) && (g = v = d = 0, j = 2),
                  1 === c && (R[9].l = e < -15 && l < 0 ? 1 : 0),
                  (t = j) || (t = 8 * ((t = p - a) < 0 ? -t : t)),
                  p = W(W(p, a, 1 - _(-2 * O)), a, t),
                  A = C(A, p, 2, 1),
                  b = C(b, e, .5, 1),
                  I = C(I, l, .5, 1),
                  D
                    ? (t = j + (1 - _(-18 * O)), z = W(z, e, t), Q = W(Q, p + 1.5, t), B = W(B, l, t), q = f1(q))
                    : (Q = C(Q, E(A + N((-60 - l) / 8, 0, 20) + 13 + 9 * h, 6), 4, 2),
                      B = C(B, I + -18 + 5 * h, 1, 2 + h),
                      z = C(z, b, 1, 2 + h),
                      r = C1(4, -((t = I - B) < 0 ? -t : t)),
                      s = b - z,
                      q = h1(q, 90 - f1(H1(r, s) / O1), Y + (1 - _(-6 * O))),
                      w = h1(w, 90 - H1(Q1(r, s), Q - A) / O1, Y + (1 - _(-6 * O)))),
                  w = N(w, -87, 87),
                  Y = 0,
                  P[37].j = U(e, p, l).rotateSelf(0, n),
                  t = 0;
                t < 2;
                ++t
              ) {
                P[38 + t].j = P[37].j.translate(0, f * N(.45 * V(9.1 * H + J * (t - 1) - J / 2))).rotateSelf(
                  f * V(9.1 * H + J * (t - 1)) * .25 / O1,
                  0,
                );
              }
            },
              $ = () => {
                let a, l, r = s1 + (L[1] ? 1 : 0) - (L[3] ? 1 : 0), s = r1 + (L[0] ? 1 : 0) - (L[2] ? 1 : 0);
                if (l = navigator.getGamepads()[0]) {
                  let t = l.buttons, e = l.axes;
                  l = (a = e => t[e]?.pressed || 0 < t[e]?.value ? 1 : 0)(3) || a(2) || a(1) || a(0),
                    r += a(12) - a(13) - n1(e[1], .2),
                    s += a(14) - a(15) - n1(e[0], .2),
                    D && (w += O * n1(e[3], .3) * 80, q += O * n1(e[2], .3) * 80),
                    l && !M && (L[5] = 1),
                    M = l;
                }
                a = H1(r, s),
                  l = n1(N(Q1(r, s)), .05),
                  Z.fa7(),
                  Z.r9r(0, 0, 128, 128, 6408, 5121, T),
                  Z.iay(36008, [36064, 36096]),
                  Z.iay(36009, [36064, 36096]),
                  (() => {
                    m = u = 0;
                    for (let e = 32; e < 128; e += 2) {
                      let o = 0, c = 0, i = 0, n = 0, f = 512 * e;
                      for (let s = 1 & e; s < 128; s += 2) {
                        let e = f + 4 * s, t = f + 4 * (127 - s), a = T[e] / 255, l = T[1 + t] / 255, r = s / 63.5 - 1;
                        r = 1 - (r < 0 ? -r : r),
                          10 < s && s < 118
                          && (o = E(E(a * r, a * T[t] / 255), o), c = E(E(l * r, l * T[1 + e] / 255), c)),
                          (s < 54 || 74 < s) && .001 < (t = (1 - r) * E(a, l) / 3)
                          && (s < 64 && t > i ? i = t : 64 < s && t > n && (n = t));
                      }
                      ((f = n - i) < 0 ? -f : f) > (u < 0 ? -u : u) && (u = n - i),
                        ((i = c - o) < 0 ? -i : i) > (m < 0 ? -m : m) && (m = c - o);
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
                      c = o || e,
                      e = o,
                      F = W(F, i ? 6.5 : i1.y < -20 ? 11 : 8, 1 - _(-4 * O)),
                      i1.y += a / 41 - (i || F) * t / 41 * F * O;
                  })(),
                  r = N(1 - 5 * E(u < 0 ? -u : u, m < 0 ? -m : m)),
                  s = D ? q * O1 : J,
                  f = W(f, l, 1 - _(-10 * O)),
                  l && (t = 90 - a / O1),
                  n = h1(n, t, 8 * O),
                  d = W(d, i * r * N(2 * l) * 7, 1 - _(-(i ? .1 < r ? 10 : 5 + 2 * l : 1) * O)),
                  g = W(g, 0, 1 - _(-(i ? 8 : 4) * O)),
                  u += O * ((c ? 0 : r * g) - G(a + s) * l * d),
                  v = W(v, 0, 1 - _(-(i ? 8 : 4) * O)),
                  m += O * ((c ? 0 : r * v) - V(a + s) * l * d),
                  e1(),
                  L[5] = 0;
              };
          })(),
          (() => {
            let e,
              n,
              f,
              h,
              u,
              m,
              g,
              v,
              d,
              p,
              b,
              r,
              t = !0,
              a = () => {
                A || !t ? R1.disconnect() : R1.connect(k1.destination), b4.innerHTML = "Music: " + t;
              },
              s = (e = !1) => {
                if (A !== e) {
                  A = e;
                  try {
                    e ? (document.exitFullscreen().catch(() => {}), document.exitPointerLock()) : R1.start();
                  } catch {}
                  D = 0, document.body.className = e ? "l m" : "l", a(), w1();
                }
              };
            oncontextmenu = () => !1,
              b3.onclick = () => {
                confirm("Restart game?") && (localStorage.I = "", location.reload());
              },
              b1.onclick = () => {
                document.body.requestFullscreen(), s();
              },
              b2.onclick = () => {
                document.body.requestFullscreen(), s(), D = 1;
              },
              b4.onclick = () => {
                t = !t, a();
              },
              b5.onclick = () => s(!0),
              onclick = e => {
                r = 1, A || (e.target === hC && (L[5] = !0), D && hC.requestPointerLock());
              },
              onkeyup = onkeydown = ({ code: e, target: t, type: a, repeat: l }) => {
                l || ((l = !!a[5] && t === document.body) && ("Escape" === e || "Enter" === e && A)
                  ? A && !r || s(!A)
                  : 5
                      === (a = {
                        KeyA: 0,
                        ArrowLeft: 0,
                        KeyW: 1,
                        ArrowUp: 1,
                        KeyD: 2,
                        ArrowRight: 2,
                        KeyS: 3,
                        ArrowDown: 3,
                        KeyE: 5,
                        Space: 5,
                        Enter: 5,
                      }[e])
                  ? l && (L[a] = 1)
                  : L[a] = l);
              },
              onmousemove = ({ movementX: e, movementY: t }) => {
                D && (e || t) && (q += .1 * e, w += .1 * t);
              },
              hC.ontouchstart = l => {
                if (!A) {
                  for (let { pageX: e, pageY: t, identifier: a } of l.changedTouches) {
                    D && e > hC.clientWidth / 2
                      ? void 0 === v && (d = 0, m = e, g = t, v = a, p = q, b = w)
                      : void 0 === h && (u = 0, n = e, f = t, h = a);
                  }
                  e = F;
                }
              },
              hC.ontouchmove = l => {
                let r, s, o, c, i;
                if (!A) {
                  for (let { pageX: e, pageY: t, identifier: a } of l.changedTouches) {
                    v === a && (q = p + (e - m) / 2.3, w = b + (t - g) / 2.3, d = 1),
                      h === a
                      && (a = (n - e) / 20,
                        r = (f - t) / 20,
                        s = a < 0 ? -a : a,
                        o = r < 0 ? -r : r,
                        c = H1(r, a),
                        i = N(Q1(r, a) - .5),
                        r1 = .2 < s ? G(c) * i : 0,
                        s1 = .2 < o ? V(c) * i : 0,
                        (r1 || s1) && (u = 1),
                        2 < s && (n = e + 20 * q1(a)),
                        2 < o && (f = t + 20 * q1(r)));
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
                    ? (h = void 0, s1 = r1 = 0, u || (a = 1), u = 0)
                    : a = 1;
                }
                a && t.target === hC && e && .02 < (t = F - e) && t < .7 && (L[5] = !0);
              },
              (document.onvisibilitychange = onblur = onresize = () => {
                hC.width = innerWidth,
                  hC.height = innerHeight,
                  L.length = r1 = s1 = 0,
                  h = v = void 0,
                  document.hidden && s(!0);
              })(),
              s(!0);
          })(),
          requestAnimationFrame(l);
      }
    },
    h = new Image();
  h.onload = h.onerror = a,
    h.src = P1,
    (e => {
      let L = 0,
        s = () => {
          let l = k1.createBuffer(2, 5362944, 44100);
          for (let a = 0; a < 2; a++) {
            for (let e = a, t = l.getChannelData(a); e < 10725888; e += 2) {
              t[e >> 1] = X[e] / 65536;
            }
          }
          R1.buffer = l, R1.loop = !0, F1(e);
        },
        o = () => {
          let b = 0,
            e = h => {
              let s,
                u,
                o,
                c,
                i = 0,
                n = 0,
                m = [],
                f = new Int32Array(768 * h),
                g = 2 ** (a - 9) / h,
                v = J * 2 ** (r - 8) / h,
                d = O * h & -2;
              for (let e = 0; e <= 11; ++e) {
                for (
                  let t = 0,
                    a = +"000001234556112341234556011111111112011111111112000001111112"[12 * L + e],
                    r = (32 * e + t) * h;
                  t < 32;
                  ++t
                ) {
                  for (let e = 0; e < 4; ++e) {
                    if (u = 0, a && (u = l[a - 1].charCodeAt(t + 32 * e) - 40, u += 0 < u ? 106 : 0), u) {
                      var p;
                      if (!(p = m[u])) {
                        let l,
                          r,
                          s = 0,
                          o = 0,
                          c = p = u,
                          i = L < 2
                            ? e => e % 1 * 2 - 1
                            : S1,
                          n = L < 2
                            ? L < 1
                              ? e => e % 1 < .5 ? 1 : -1
                              : e => (e = e % 1 * 4) < 2 ? e - 1 : 3 - e
                            : S1,
                          f = new Int32Array(C + k + R);
                        for (let t = 0, a = 0; C + k + R > t; ++t, ++a) {
                          let e = 1;
                          C > t ? e = t / C : C + k > t || (e = (1 - (e = (t - C - k) / R)) * 3 ** (T / -16 * e)),
                            a < 0
                            || (r = .00396 * 2 ** ((c + I - 256) / 12),
                              l = .00396 * 2 ** ((c + j - 256) / 12) * (L ? 1 : 1.0072),
                              a -= 4 * h),
                            f[t] = 80
                              * (i(s += r * e ** (M / 32)) * A + n(o += l * e ** (F / 32)) * Y
                                + (S ? (2 * B1() - 1) * S : 0))
                              * e;
                        }
                        p = m[p] = f;
                      }
                      for (let e = 0, t = 2 * r; p.length > e; ++e, t += 2) f[t] += p[e];
                    }
                  }
                  for (let e, t, a, l = 0; h > l; ++l) {
                    a = 2 * (r + l),
                      e = 0,
                      ((t = f[a]) || c)
                      && (o = .00308 * D,
                        1 !== L && 4 !== L || (o *= V(g * a * J * 2) * P / 512 + .5),
                        o = 1.5 * V(o),
                        i += o * n,
                        s = (1 - H / 255) * (t - n) - i,
                        n += o * s,
                        t = 4 === L ? n : 3 === L ? s : i,
                        L || (t = (t *= 22e-5) < 1 ? -1 < t ? V(t / 4 * J * 2) : -1 : 1, t /= 22e-5),
                        t *= Q / 32,
                        c = 1e-5 < t * t,
                        s = V(v * a) * B / 512 + .5,
                        e = t * (1 - s),
                        t *= s),
                      a < d || (e += f[1 + a - d] * q / 255, t += f[a - d] * q / 255),
                      X[b + a] += f[a] = e,
                      ++a,
                      X[b + a] += f[a] = t;
                  }
                }
              }
              b += 768 * h;
            },
            l = [
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
            ][L],
            [A, I, M, Y, j, F, S, C, k, t, T, a, D, H, Q, B, r, q, O, P] = [
              [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
              [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
              [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
              [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
              [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
            ][L],
            R = 4 * t ** 2;
          e(5513), e(4562), e(3891), F1(++L < 5 ? o : s);
        },
        X = new Int32Array(10725888);
      F1(o);
    })(() => {
      F1(() => {
        let s,
          t = 0,
          l = [],
          o = [],
          c = [],
          i = [],
          r = e => {
            let { x: t, y: a, z: l } = s[e], r = (u[0] = t, u[1] = a, u[2] = l, f.get(e = "" + (s.D ? h : n)));
            return void 0 !== r
              ? (t = 3 * r, i[t] = (i[t++] + n[5]) / 2, i[t] = (i[t++] + n[6]) / 2, i[t] = (i[t] + n[7]) / 2)
              : (f.set(e, r = f.size), o.push(t, a, l, u[3]), c.push(n[4]), i.push(n[5], n[6], n[7])),
              r;
          },
          n = new Int32Array(8),
          f = new Map(),
          h = new Int32Array(n.buffer, 0, 5),
          u = new Float32Array(n.buffer);
        for (let e of P) {
          for (s of (u[3] = 40 === e.H ? -14 : e.G && e.H, e.s)) {
            let { x: e, y: t, z: a } = m1(s);
            n[4] = 0 | s.A, n[5] = 32767 * e, n[6] = 32767 * t, n[7] = 32767 * a;
            for (let e = 2, t = r(0), a = r(1); s.length > e; ++e) l.push(t, a, a = r(e));
          }
          e.s = null, e.v = t, e.F = t = l.length;
        }
        Z.b11(34962, Z.c1b()),
          Z.b2v(34962, new Float32Array(o), 35044),
          Z.v7s(0, 4, 5126, !1, 0, 0),
          Z.b11(34962, Z.c1b()),
          Z.b2v(34962, new Int16Array(i), 35044),
          Z.v7s(1, 3, 5122, !0, 0, 0),
          Z.b11(34962, Z.c1b()),
          Z.b2v(34962, new Uint32Array(c), 35044),
          Z.v7s(2, 4, 5121, !0, 0, 0),
          Z.b11(34963, Z.c1b()),
          Z.b2v(34963, new Uint16Array(l), 35044),
          Z.e3x(0),
          Z.e3x(1),
          Z.e3x(2),
          F1(a);
        try {
          let [a, l, e, t, r] = JSON.parse(localStorage.I);
          R.map((e, t) => e.g = e.i = e.l = t ? 0 | a[t] : 0), o1.map((e, t) => e.l = 0 | l[t]), t1 = e, H = t, x = r;
        } catch {}
        l1 = N(t1);
      });
      let t = v(11, e => U(V(e / 10 * J), e / 10).rotate(+e).scale(1.0001 - e / 10, 0, 1 - e / 10)),
        i = v(10, e => r(y1(v1(18), t[e]).reverse(), y1(v1(18), t[e + 1]), 1)).flat();
      p(() => b([c1.slice(1)], U(-2).scale3d(3).rotate(90, 0)), 0),
        p(() => {
          let e = (t, a, l) =>
              p(e => {
                e.h = () => U(r() * V(3 * t + H * t) * a),
                  c1.map(({ x: e, z: t }) => {
                    b(m(11, 1), U(4 * e, 4, l + 4 * t).scale(.8, 3, .8), Y(.5, .3, .7, .6)),
                      b(m(), U(4 * e, 7, l + 4 * t).scale(1, .3), Y(.5, .5, .5, .3));
                  }),
                  b(d(
                    f(m(), U(0, 0, l).scale(5, 1, 5), Y(.8, .8, .8, .3)),
                    ...[-1, 1].map(e => f(m(), U(5 * e, .2, l).rotate(-30 * e).scale(4, 1, 2), Y(.8, .8, .8, .3))),
                  )),
                  b(m(), U(0, -3, l).scale(8, 2, 8), Y(.4, .4, .4, .3));
              }),
            t = (e, t, a) => U(e + V(H + 2) / 5, t + V(.8 * H) / 3, a).rotateSelf(2 * V(H), V(.7 * H), V(.9 * H)),
            a = e =>
              d(
                f(m(), U(0, -e / 2).scale(6, e - 1, 2.2)),
                f(m(), U(0, -e / 2 - 6).scale(4, e - 3, 4)),
                f(m(32, 1), U(0, e / 2 - 9).rotate(90, 0, 90).scale3d(4)),
              ),
            r = () => C1(R[2].i, 1 - R[4].i),
            l = d(
              f(m(20, 1, 1.15, 1), U(0, -3).scale(3.5, 1, 3.5), Y(.7, .4, .25, .7)),
              f(m(20, 1, 1.3, 1), U(0, -2.5).scale(2.6, 1, 3), Y(.7, .4, .25, .2)),
              f(m(), U(4, -1.2).scale3d(2), Y(.7, .4, .25, .3)),
            ),
            s = v(7, e => f(m(6, 1), U(4 * (e / 6 - .5), 3).scale(.2, 3, .2), Y(.3, .3, .38))).flat(),
            o = (p(e => {
              e.h = () => t(-12, 4.2, 40 * l1 - 66), b(l), I(U(0, -3, 4));
            }),
              I(U(-5.4, 1.5, -19).rotate(0, -90)),
              M(U(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
              M(
                U(0, 2.8),
                [5, 10, 3],
                [-5, 10, 3],
                ...v1(18).map(({ x: e, z: t }) => [7 * e, 10 * t, 4.5 - 2 * (e < 0 ? -e : e)]),
              ),
              b(m(), U(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), Y(.8, .8, .8, .2)),
              c1.map(({ x: e, z: t }) => b(m(6), U(3 * e, 3, 15 * t).scale(.7, 4, .7), Y(.6, .3, .3, .4))),
              [-23, 22].map(e => b(m(), U(0, 0, e).scale(3, 1, 8), Y(.9, .9, .9, .2))),
              [-15, 15].map((t, a) => {
                b(m(), U(0, 6.3, t).scale(4, .3, 1), Y(.3, .3, .3, .4)),
                  b(m(), U(0, 1, t).scale(3, .2, .35), Y(.5, .5, .5, .3)),
                  p(e => {
                    e.h = () => U(0, 0, t).scale(1, N(1.22 - R[a + 1].g), 1), b(s);
                  });
              }),
              v(5, t =>
                v(2, e =>
                  b(
                    i,
                    U(18.5 * (e - .5), 0, 4.8 * t - 9.5).rotate(0, 180 - 180 * e).scale(1.2, 10, 1.2),
                    Y(1, 1, .8, .2),
                  ))),
              b(m(), U(3, 1.5, -20).scale(.5, 2, 5), Y(.7, .7, .7, .2)),
              b(m(), U(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), Y(.75, .75, .75, .2)),
              b(m(5), U(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), Y(.6, .3, .3, .4)),
              b(m(), K.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, .6, 4.5), Y(.8, .2, .2, .5)),
              b(d(
                g(
                  f(m(6, 0, 0, .3), U(8, -3, -4).scale(13, 1, 13), Y(.7, .7, .7, .2)),
                  f(m(6), U(0, -8).scale(9, 8, 8), Y(.4, .2, .5, .5)),
                  f(m(6, 0, 0, .3), U(0, -.92).scale(13, 2, 13), Y(.8, .8, .8, .2)),
                ),
                f(m(5), K.scale(5, 30, 5), Y(.4, .2, .6, .5)),
                f(m(5, 0, 1.5), U(0, 1).scale(4.5, .3, 4.5), Y(.7, .5, .9, .2)),
                f(m(), K.rotate(0, 60).translate(14, .7, -1).rotate(-35).scale(2, 2, 2), Y(.5, .5, .5, .5)),
                f(m(6), U(15, -1.5, 4).scale(3.5, 1, 3.5), Y(.5, .5, .5, .5)),
              )),
              p(e => {
                e.h = () =>
                  U(0, .01 < R[3].g ? (5 * G(1.5 * H) + 2) * R[3].i * (1 - R[2].g) + -15 * (1 - R[3].g) : -500, 0),
                  b(m(5), U(0, -.2).scale(5, 1, 5), Y(.6, .65, .7, .3)),
                  I(U(0, 1.2));
              }),
              I(U(15, -2, 4)),
              e(.7, 12, 35),
              e(1, 8.2, 55),
              p(e => {
                e.h = () => U(r() * V(H / 1.5 + 2) * 12),
                  b(
                    d(
                      g(
                        f(m(), K.scale(1.5, 1, 5), Y(.9, .9, .9, .2)),
                        f(m(6), K.scale(4, 1, 5), Y(.9, .9, .9, .2)),
                        f(m(), U(0, -2).scale(2, 3.2, 1.9), Y(.3, .8, .5, .5)),
                        f(m(16, 1, 0, 4), K.scale(1, 1, 1.5).rotate(0, 90), Y(.9, .9, .9, .2)),
                      ),
                      f(m(), K.scale(1.3, 10, 1.3), Y(.2, .7, .4, .6)),
                    ),
                    U(0, 0, 45),
                  ),
                  M(U(0, 2.8, 45), [0, 0, 4.5]);
              }),
              b(m(), U(-18.65, -3, 55).scale(2.45, 1.4, 2.7), Y(.9, .9, .9, .2)),
              p(e => {
                e.h = () => U(9.8 * (1 - r())),
                  b(m(3), U(-23, -1.7, 55.8).scale(5, .7, 8.3), Y(.3, .6, .6, .2)),
                  b(m(8), U(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), Y(.8, .8, .8, .2)),
                  b(m(), U(-23, -3, 55).scale(5.2, 1.7, 3), Y(.5, .5, .5, .3)),
                  b(m(), U(-23, -2.2, 62).scale(3, 1, 4), Y(.5, .5, .5, .3)),
                  I(U(-23, -.5, 66.5));
              }),
              p(e => {
                e.h = () => U(0, N(1 - 5 * r()) * n(R[4].g, R[5].g) * V(1.35 * H) * 4),
                  b(m(), U(-22.55, -3, 55).scale(1.45, 1.4, 2.7), Y(.7, .7, .7, .2)),
                  b(d(f(m(), K.scale(3, 1.4, 2.7)), f(m(), K.scale(1.2, 8, 1.2))), U(-33, -3, 55), Y(.7, .7, .7, .2));
              }),
              p(e => {
                e.h = () => U(0, 0, N(1 - 5 * r()) * n(R[4].g, R[5].g) * V(.9 * H) * 8),
                  b(d(
                    f(m(), U(-27, -3, 55).scale(3, 1.4, 2.7), Y(.9, .9, .9, .2)),
                    f(m(), U(-27, -3, 55).scale(1, 3), Y(.9, .9, .9, .2)),
                  )),
                  b(m(), U(-39, -3, 55).scale(3, 1.4, 2.7), Y(.9, .9, .9, .2));
              }),
              p(e => {
                e.h = () => U(0, -6.5 * R[4].i),
                  b(m(6), U(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), Y(.7, .7, .7, .4));
              }),
              I(U(-55, -1.1, 46).rotate(0, 90)),
              b(m(6), U(-61.3, -2.4, 49).scale(3, 1, 5), Y(.4, .6, .6, .3)),
              b(m(7), U(-57, -2.6, 46).scale(4, 1, 4), Y(.8, .8, .8, .3)),
              [
                ...f(m(), U(0, -3).scale(11, 1.4, 3), Y(.9, .9, .9, .2)),
                ...d(
                  f(m(6), K.rotate(90).scale(6, 8, 6), Y(.3, .6, .6, .3)),
                  f(m(4, 0, .01), U(0, 6).scale(12, 2, .75).rotate(0, 45), Y(.3, .6, .6, .3)),
                  f(m(6), K.rotate(90).scale(5, 12, 5), Y(.3, .6, .6, .3)),
                  ...[5, 0, -5].map(e => f(m(5), U(e, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), Y(.3, .6, .6, .3))),
                ),
              ]),
            c = (b(o, U(-53, 0, 55)),
              p(e => {
                e.h = () => U(-75, (1 - R[5].i) * (1 - R[6].g) * 3, 55).rotate(180 * (1 - R[5].i) + a1, 0), b(o);
              }, 2),
              b(m(), U(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), Y(.7, .7, .7, .2)),
              b(m(3, 0, -.5), U(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), Y(.8, .8, .8, .2)),
              b(d(
                g(
                  f(m(), U(-100, -2.5, 55).scale(8, 1, 8), Y(.8, .8, .8, .2)),
                  f(m(), U(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), Y(.8, .8, .8, .2)),
                  f(m(), U(-100, -2.6, 70).scale(3, 1.1, 7), Y(.8, .8, .8, .2)),
                  f(m(), U(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), Y(.8, .8, .8, .2)),
                  f(m(6), U(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), Y(.6, .6, .6, .3)),
                  f(m(), U(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), Y(.8, .8, .8, .2)),
                  f(m(), U(-100, .42, 92).scale(3, 1.1, 4.1), Y(.8, .8, .8, .2)),
                ),
                f(m(8), U(-100, -1, 55).scale(7, .9, 7), Y(.3, .3, .3, .4)),
                f(m(8), U(-100, -2, 55).scale(4, .3, 4), Y(.4, .4, .4, .5)),
                f(m(8), U(-100, -3, 55).scale(.6, 1, .6), Y(.4, .4, .4, .5)),
              )),
              M(U(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
              M(U(-89, .2, 80), [0, 0, 6]),
              b(d(
                f(m(), U(-100, 1, 63).scale(7.5, 4), Y(.5, .5, .5, .4)),
                f(m(), U(-100, 0, 70).scale(2, 2, 10), Y(.5, .5, .5, .4)),
                f(m(20, 1), U(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), Y(.5, .5, .5, .4)),
              )),
              p(e => {
                e.h = () => U(-99.7, -1.9, 63.5).scale(1, N(1.1 - R[6].g), 1), b(s);
              }),
              c1.map(({ x: t, z: a }) => {
                b(m(6), U(7 * t - 100, -3, 7 * a + 55).scale(1, 8.1), Y(.6, .15, .15, .8)),
                  [4, -.4].map(e => b(m(6), U(7 * t - 100, e, 7 * a + 55).scale(1.3, .5, 1.3), Y(.4, .2, .2, .8)));
              }),
              v(7, e => {
                b(
                  m((23 * e + 1) % 5 + 5, 0, .55),
                  U(5 * V(e) - 101 + e, -2.3 - e, 44.9 - 2.8 * e).scaleSelf(5 + e / 2, 1 + e / 6, 5 + e / 3),
                  Y(.5 - e / 17, .5 - (1 & e) / 9, .6, .3),
                );
              }),
              b(m(), U(-87, -9.5, 24).scale(7, 1, 3), Y(.4, .5, .6, .4)),
              b(m(4), U(-86, -9.2, 27).scale(5, 1, 5), Y(.5, .6, .7, .3)),
              b(m(12, 1), U(-86, -9, 31).scale(1.5, 1, 1.5), Y(.3, .3, .4, .1)),
              I(U(-86, -7.5, 31)),
              p(e => {
                e.h = () => U(0, 3.5 * (1 - E(R[6].g, R[7].g)) + n(R[7].i, R[6].i) * V(H) * 5),
                  [0, 12, 24].map(e => b(m(), U(e - 76.9, e / -13 - 10, 24).scale(2.8, 1.5, 3), Y(.2, .5, .6, .2)));
              }),
              p(e => {
                e.h = () => U(0, n(R[7].i, R[6].i) * V(H + 3) * 6, 6 * V(.6 * H + 1) * n(R[7].i, R[6].i)),
                  [6, 18].map(e => b(m(), U(e - 76.9, e / -13 - 10, 24).scale(2.8, 1.5, 3), Y(.1, .4, .5, .2)));
              }),
              b(
                d(
                  g(
                    f(m(5), U(0, 0, -7).scale(2, 1.2, 2), Y(.2, .4, .7, .3)),
                    f(m(5), K.scale(9, 1.2, 9), Y(0, .2, .3, .5)),
                    f(m(), K.scale(11, 1, 13), Y(.3, .4, .6, .3)),
                  ),
                  f(m(5), K.scale(5.4, 5, 5.4), Y(0, .2, .3, .5)),
                ),
                U(-38.9, -11.3, 17),
              ),
              I(U(-38.9, -9.6, 10)),
              p(e => {
                e.h = () => U(0, -7.3 * R[7].i),
                  b(
                    d(
                      g(
                        f(m(5), U(0, 2).scale(5, 7, 5).skewY(8), Y(.2, .4, .5, .5)),
                        f(m(5), U(0, 6).scale(1.1, 7, 1.1).skewY(-8), Y(.25, .35, .5, .5)),
                        f(m(5), U(0, 9).scale(.6, 7, .6).skewY(8), Y(.35, .3, .5, .5)),
                      ),
                      f(m(5), K.scale(4, 8, 4), Y(.2, .4, .5, .5)),
                      f(m(5), U(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), Y(.2, .4, .5, .5)),
                    ),
                    U(-38.9, -11.3, 17),
                  ),
                  M(U(-39.1, -.6, 17).rotate(11), ...v1(15).map(({ x: e, z: t }) => [3 * e, 3 * t, 1.2]));
              }),
              c1.map(({ x: t, z: a }) => {
                b(m(14, 1), U(9 * t - 38.9, -7.3, 11 * a + 17).scale(1, 4), Y(.25, .25, .25, 1)),
                  [1.5, 8].map(e =>
                    b(m(17, 1), U(9 * t - 38.9, e - 11.3, 11 * a + 17).scale(1.5, .5, 1.5), Y(.6, .6, .6, .3))
                  );
              }),
              b(
                d(
                  g(
                    f(m(6), U(0, 0, -36).scale(15, 1.2, 15), Y(.7, .7, .7, .3)),
                    f(m(), U(0, 0, -18).scale(4, 1.2, 6), Y(.45, .4, .6, .3)),
                  ),
                  ...v(6, t =>
                    v(6, e =>
                      f(
                        m(6),
                        U(4.6 * e - 12 + 2 * (1 & t), 0, 4.6 * t - 50 + 2 * V(4 * e)).scale(2, 5, 2),
                        Y(.7, .7, .7, .3),
                      ))).flat(),
                ),
                U(-38.9, -11.3, 17),
              ),
              M(U(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
              b(m(5), U(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), Y(.8, .1, .25, .4)),
              I(U(-84, -.5, 85).rotate(0, 45)),
              p(e => {
                e.h = () => t(-123, 1.4, 55 + -65 * x), b(l), I(U(0, -3, -4).rotate(0, 180));
              }),
              d(
                f(m(), U(0, -.5, 1).scale(1.15, 1.2, 6.5), Y(.25, .25, .35, .3)),
                f(m(3), U(0, 0, -5.5).scale(3, 2), Y(.6, .3, .4, .3)),
                ...[-1.2, 1.2].map(e => f(m(), U(e, -.5, 1).scale(.14, .3, 6.5), Y(.7, .2, 0, .3))),
              ));
          p(e => {
            e.h = () => {
              let e = V(1.1 * H);
              return U(0, -2, n(R[10].g, R[11].g) * (e < 0 ? -e : e) * -8.5 + 10);
            }, v(2, e => b(c, U(9 * e - 110 + (1 & e), 1.7, -12)));
          }),
            p(e => {
              e.h = () => {
                let e = V(2.1 * H);
                return U(0, -2, n(R[10].g, R[11].g) * (e < 0 ? -e : e) * -8.5 + 10);
              }, v(2, e => b(c, U(9 * (e + 2) - 110 + (1 & e), 1.7, -12)));
            }),
            p(e => {
              e.h = () => {
                let e = V(1.5 * H);
                return U(
                  0,
                  -2,
                  -8.5 * E((1 - R[10].g) * (1 - n(R[10].g, R[11].g)), n(R[10].g, R[11].g) * (e < 0 ? -e : e)) + 10,
                );
              }, v(3, e => b(c, U(9 * e - 106, 1.7, -12)));
            }),
            b(
              d(
                g(f(m(), U(26.5, -1.6, 10).scale(20, 2.08, 3)), f(m(), U(26.5, -.6, 10).scale(19, 2, .5))),
                ...v(4, e => f(m(), U(13 + 9 * e + (1 & e), -.8, 9).scale(1.35, 1.35, 9))),
                ...v(3, e => f(m(), U(17 + 9 * e, -.8, 9).scale(1.35, 1.35, 9))),
              ),
              U(-123, 0, -12),
              Y(.5, .5, .6, .2),
            ),
            I(U(-116, -1.4, -18).rotate(0, 180)),
            b(m(), U(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), Y(.8, .8, .8, .2)),
            b(m(6), U(-116, -2.6, -16.5).scale(3.2, .8, 3), Y(.6, .5, .7, .2)),
            b(m(), U(-115.5, -17, -12).scale(.5, 15, 2.2), Y(.6, .6, .6, .3)),
            b(m(8), U(-114, -17, -2).scale(2, 15, 2), Y(.6, .6, .6, .3)),
            b(m(8), U(-79, -17, -2).scale(2, 15, 2), Y(1, 1, 1, .3)),
            b(m(), U(-77, -17, -50.5).scale(2.2, 15, .5), Y(.6, .6, .6, .3)),
            v(3, e => {
              b(a(16), U(12 * e - 109, -9, -12), Y(.6, .6, .6, .3)),
                b(a(16), U(-77, -9, -12 * e - 20).rotate(0, 90), Y(.6, .6, .6, .3));
            }),
            b(d(
              f(m(12), U(-77, -14.5, -12).scale(4, 17.5, 4), Y(.7, .7, .7, .2)),
              f(m(), U(-79, .1, -12).scale(3.5, 2, 1.3), Y(.4, .5, .6, .2)),
              f(m(), U(-77, .1, -14).scale(1.5, 2, 2), Y(.4, .5, .6, .2)),
              f(m(12), U(-77, 3.1, -12).scale(3, 5, 3), Y(.4, .5, .6, .2)),
            )),
            b(m(), U(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), Y(.6, .6, .6, .3)),
            b(m(9), U(-98, -18.4, -40).scale(2.5, 13.5, 2.5), Y(.5, .5, .5, .3)),
            b(d(
              f(m(), U(-93, -5.8, -40).scale(9, 1, 5), Y(.8, .8, .8, .1)),
              f(m(9), U(-98, -5.8, -40).scale(3, 8, 3), Y(.7, .7, .7, .2)),
            )),
            I(U(-98, -4.4, -40).rotate(0, 90)),
            M(U(-115, .2, -12), [0, 0, 3.5]),
            M(U(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]),
            b(d(
              g(
                f(m(6, 0, 0, .6), U(-100, .7, 105.5).scale(8, 1, 11), Y(.7, .7, .7, .2)),
                f(m(), U(-101.5, .7, 93.5).scale(10.5, 1, 2), Y(.7, .7, .7, .2)),
              ),
              f(m(5), U(-100, .7, 113).scale(4, 3, 4), Y(.7, .7, .7, .2)),
            )),
            v(4, t =>
              p(e => {
                e.h = () => {
                  let e = n(R[8].i, R[12].i);
                  return U(
                    (2 < t ? 2 * (1 - e) + e : 0) - 100,
                    e * V(1.3 * H + 1.7 * t) * (3 + t / 3) + .7,
                    115 + (1 & t ? -1 : 1) * (1 - R[8].i) * (1 - R[12].i) * -7
                      + E(e, .05) * G(1.3 * H + 7 * t) * (4 - 2 * (1 - t / 3)),
                  );
                },
                  b(
                    m(6),
                    U(-14.6 - 4.8 * t - (2 < t ? 2 : 0), -t / 2.3, -21.5).scale(2.6, 1, 2.5),
                    Y(.5 - t / 8, t / 12 + .5, .7, .3),
                  );
              })),
            p(e => {
              e.h = () => {
                let e = n(R[8].i, R[12].i);
                return U(2.5 * (1 - e) - 139.7, -3 * (1 - R[8].g) + e * V(.8 * H) * -1 - 1.8, 93.5).rotateSelf(
                  G(1.3 * H) * (3 * e + 3),
                  0,
                );
              },
                b(d(f(m(10), K.scale(6, 2, 6), Y(.1, .6, .5, .3)), f(m(10), K.scale(3.3, 6, 3.3), Y(.1, .6, .5, .5)))),
                b(m(15, 1), U(-7.5).rotate(0, 90).scale(3, 2.3, 3), Y(.4, .4, .4, .3)),
                b(m(10), U(-7.5).rotate(0, 90).scale(2, 2.5, 2), Y(.3, .8, .7, .3)),
                b(m(5), U(-7.5).rotate(0, 90).scale(1, 3), Y(.5, .5, .5, .5)),
                I(U(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180)),
                [-1, 1].map(e =>
                  b(i, K.rotate(90 * -e, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), Y(1, 1, .8, .2))
                ),
                M(U(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
            }),
            [-1, 1].map(t => {
              b(m(12, 1), U(-7.5 * t - 100, 3.7, 96).scale(.8, 4, .8), Y(.6, .24, .2, .5)),
                [7.2, 1.5].map(e => b(m(15, 1), U(-7.5 * t - 100, e + .7, 96).scale(1.1, .5, 1.1), Y(.5, .24, .2, .4))),
                b(i, U(-5 * t - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * t - 90), Y(1, 1, .8)),
                b(
                  d(
                    f(m(), U(-4 * t, 3.5, -.5).scale(4, 4, .7), Y(.5, .5, .5, .4)),
                    f(m(), K.scale(3, 3, 10), Y(.6, .24, .2, .5)),
                    f(m(28, 1), U(0, 3, -5).scale(3, 4, 10).rotate(90, 0), Y(.6, .24, .2, .5)),
                    f(m(5), U(-5.3 * t, 7).rotate(90, 0).scale(1.7, 5, 1.7), Y(.6, .24, .2, .5)),
                    f(m(5), U(-5.3 * t, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), Y(.6, .24, .2, .5)),
                  ),
                  U(t - 100, .7, 97),
                );
            }),
            p(e => {
              e.h = () => U(-100, .6, 96.5).scale(.88, 1.2 - R[12].g), b(s);
            }),
            b(d(
              f(m(), U(-82.07, .8, 106).scale(11, .9, 2.2), Y(.7, .7, .7, .1)),
              f(m(45, 1), U(-81, .7, 106).scale3d(7.7), Y(.7, .7, .7, .1)),
            )),
            p(e => {
              e.h = () => U(-81, .6, 106).rotate(0, 40 + S),
                b(d(
                  f(m(45, 1), K.scale(7.5, 1, 7.5), Y(.45, .45, .45, .2)),
                  f(m(), U(0, 0, -5.5).scale(1.5, 3, 2.7), Y(.45, .45, .45, .2)),
                )),
                b(m(8), U(0, 2).scale(3, 1.5, 3).rotate(0, 22), Y(.7, .7, .7, .1)),
                b(m(5), U(0, 2).scale(1, 2), Y(.3, .3, .3, .2)),
                M(U(0, 3), ...v1(14).map(({ x: e, z: t }) => [5.6 * e, 5.6 * t, 2]));
            }),
            p(e => {
              e.h = () => U(-65.8, .8, 106).rotate(0, C),
                [-1, 1].map(e =>
                  b(
                    i,
                    K.rotate(0, 90).translate(-5 * e, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90),
                    Y(1, 1, .8),
                  )
                ),
                b(d(
                  f(m(28, 1), U(0, 2).scale(7.5, 1, 7.5), Y(.35, 0, 0, .3)),
                  f(m(), K.scale(9, 5, 2), Y(.3, 0, 0, .3)),
                )),
                b(f(m(28, 1), K.scale(7.5, 1, 7.5), Y(.45, .45, .45, .2))),
                b(f(m(5), U(0, 1).scale(1, .2), Y(.3, .3, .3, .2)));
            }),
            p(e => {
              e.h = () => U(-50.7, .8, 106).rotate(0, 180 - C),
                b(d(
                  f(m(28, 1), U(0, 2).scale(7.5, 1, 7.5), Y(.35, 0, 0, .3)),
                  f(m(), U(7).scale(9, 5, 2), Y(.3, 0, 0, .3)),
                  f(m(), U(0, 0, 7).scale(2, 5, 9), Y(.3, 0, 0, .3)),
                )),
                b(f(m(28, 1), K.scale(7.5, 1, 7.5), Y(.45, .45, .45, .2))),
                b(f(m(5), U(0, 1).scale(1, .2), Y(.3, .3, .3, .2)));
            }),
            p(e => {
              e.h = () => U(-50.7, .8, 91).rotate(0, 270 + C),
                b(d(
                  f(m(28, 1), U(0, 2).scale(7.5, 1, 7.5), Y(.35, 0, 0, .3)),
                  f(m(), U(7).scale(9, 5, 2), Y(.3, 0, 0, .3)),
                  f(m(), U(0, 0, -7).scale(2, 5, 9), Y(.3, 0, 0, .3)),
                )),
                b(f(m(28, 1), K.scale(7.5, 1, 7.5), Y(.45, .45, .45, .2))),
                b(f(m(5), U(0, 1).scale(1, .2), Y(.3, .3, .3, .2)));
            }),
            b(m(), U(-58, 1, 106).scale(2, .65, 2), Y(.7, .7, .7, .2)),
            b(m(), U(-50.7, 1, 99).scale(2, .65, 1), Y(.7, .7, .7, .2)),
            b(m(), U(-42, .4, 91).scale(5, 1, 2.5), Y(.7, .7, .7, .3)),
            b(m(), U(-34.2, .4, 91).scale(3, 1, 3), Y(.7, .7, .7, .3)),
            I(U(-34, 2.7, 96).rotate(-12, 0)),
            b(m(5), U(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), Y(.2, .5, .5, .6)),
            [Y(.1, .55, .45, .2), Y(.2, .5, .5, .3), Y(.3, .45, .55, .4)].map((t, a) =>
              p(e => {
                e.h = () =>
                  U(0, (1 - R[13].i) * (1 - R[14].i) * (a ? 0 : 3) + n(R[13].i, R[14].i) * V(1.5 * H + 1.5 * a) * 4),
                  b(m(), U(-23.5, .5, 91 + 6.8 * a).scale(1 === a ? 2 : 3.3, 1, 3.3), t),
                  2 === a && b(m(), U(-29.1, .4, 91).scale(2.1, 1, 3), Y(.7, .7, .7, .3)),
                  1 === a && b(m(), U(-16.1, .5, 103.5).rotate(-3.5).scale(3.9, .8, 2).skewX(-1), Y(.6, .6, .7, .3));
              })
            ),
            [-1, 1].map(e => b(i, U(-8 * e, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90), Y(1, 1, .8))),
            v(3, e =>
              b(
                a(24.7 - .7 * (1 & e)),
                U(6 * e - 6, 4 - (1 & e), 111 - .2 * (1 & e)),
                1 & e ? Y(.5, .5, .5, .3) : Y(.35, .35, .35, .5),
              )),
            b(d(
              f(m(6, 0, 0, .3), U(0, -.92, 95).scale(14, 2, 14), Y(.8, .8, .8, .2)),
              f(m(5), U(0, 0, 95).scale3d(6), Y(.3, .3, .3, .5)),
            )),
            I(U(0, 1.7, 82).rotate(0, 180)),
            b(m(5), U(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), Y(.5, .3, .3, .4)),
            b(m(6), U(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), Y(.5, .6, .7, .3)),
            b(m(), U(0, 16, 129).scale(1.5, 1, 2), Y(.5, .6, .7, .3)),
            b(m(7), U(0, 16.2, 133).scale(5, 1, 5), Y(.4, .5, .6, .4)),
            b(d(
              g(
                f(m(), U(0, 16, 110.5).scale(12, 1, 3), Y(.5, .3, .3, .4)),
                f(m(), U(0, 16, 111).scale(3, 1, 3.8), Y(.5, .3, .3, .4)),
              ),
              f(m(5), U(0, 16, 103.5).scale(5.5, 5, 5.5), Y(.5, .3, .3, .4)),
            )),
            p(e => {
              e.h = () => {
                let e = V(H);
                return U(-2 * e).rotate(25 * e);
              },
                b(m(3), U(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), Y(.5, .3, .3, .4)),
                [22, 30].map(e => {
                  b(m(6), U(0, 16, e + 95).scale(3, 1, 2.3).rotate(0, 90), Y(.7, .7, .7, .4)),
                    b(m(), U(0, 6.2, e + 95).scale(.5, 11, .5), Y(.5, .3, .3, .4));
                });
            }),
            p(e => {
              e.h = () => {
                let e = n(n((R[14].g + R[14].i) / 2, R[13].i), (R[15].g + R[15].i) / 2);
                return U(0, 16 * e, 8.5 * N(2 * e - 1) + 95);
              },
                b(m(5), K.scale(5, 1.1, 5), Y(.5, .3, .3, .4)),
                b(m(5), K.scale(5.5, .9, 5.5), Y(.25, .25, .25, .4)),
                I(U(0, 1.5, -1).rotate(0, 180));
            }),
            M(U(0, 3, 95), ...v1(9).map(({ x: e, z: t }) => [9 * e, 9 * t, 4])),
            M(U(0, 19, 134), [0, 0, 3.5]);
        }),
        p(() => {
          [0, 180].map(e => b(i, K.rotate(0, e).translate(.2, 1.32).rotate(-30).scale(.2, .6, .2), Y(1, 1, .8))),
            b(s(20), U(0, 1).scale(.5, .5, .5), Y(1, .3, .4));
          let t = f(
            d(m(15, 1), f(m(), U(0, 0, 1).scale(2, 2, .5))),
            K.rotate(-90, 0).scale(.1, .05, .1),
            Y(.3, .3, .3),
          );
          [-1, 1].map(e => b(t, U(.2 * e, 1.2, .4).rotate(0, 20 * e, 20 * e))),
            b(m(), U(0, .9, .45).scale(.15, .02, .06), Y(.3, .3, .3)),
            b(s(20), K.scale(.7, .8, .55), Y(1, .3, .4));
        }),
        [-1, 1].map(e =>
          p(() => {
            b(m(10, 1), U(.3 * e, -.8).scale(.2, .7, .24), Y(1, .3, .4));
          })
        ),
        p(() => {
          b(m(6, 1), K.scale(.13, 1.4, .13), Y(.3, .3, .5, .1)),
            b(m(10), U(0, 1).scale(.21, .3, .21), Y(1, .5, .2)),
            b(m(3), U(0, -1).rotate(90, 90).scale(.3, .4, .3), Y(.2, .2, .2, .1));
        }, 0),
        p(() => {
          b(m(6).slice(0, -1), K.scale(.77, 1, .77), Y(1, .3, .5));
        }, 0),
        p(() => {
          b(
            s(30, 24, (e, t, a) => {
              let l = t / 24, r = e * J * 2 / 30, s = l ** .6 * J / 2;
              return e = l * l * V(e * J * 14 / 30) / 4,
                23 === t
                  ? { x: a.D = 0, y: -.5, z: 0 }
                  : { x: G(r) * V(s), y: G(l * J) - l - e, z: V(r) * V(s) + V(e * J * 2) / 4 };
            }),
            K.scale3d(.7),
            Y(1, 1, 1),
          ), [-1, 1].map(e => b(s(12), U(.16 * e, .4, -.36).scale3d(.09)));
        }, 0);
    });
});
