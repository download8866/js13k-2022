let A,
  D,
  k,
  T,
  _,
  Z,
  $,
  e1,
  o,
  t1,
  a1 = 0,
  l1 = 0,
  C = 0,
  r1 = 0,
  x = 0,
  s1 = 0,
  y = 0,
  e = 0,
  z = 0,
  o1 = 0,
  c1 = 0,
  n1 = 0,
  w = 0,
  i1 = 0,
  f1 = 0,
  m1 = 0,
  O = 0,
  Q = 1,
  B = 180,
  H = .066,
  P = [],
  R = [],
  h1 = [],
  u1 = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  q = { x: 0, y: 0, z: 0 },
  x1 = {},
  g1 = { x: 0, y: 0, z: 0 },
  u = (e, a) => Array.from(Array(e), (e, t) => a(t)),
  y1 = () => {
    c1 = v(R[12].g, R[13].g),
      y = X(X(y, 0, 1 - K(-1 * H)), w1(y + 60 * H), R[5].g - R[6].i),
      x = X(X(x, 0, 1 - K(-5 * H)), w1(x + 56 * H), c1),
      s1 = X(X(s1, 0, 1 - K(-4 * H)), w1(s1 + 48 * H), c1),
      o1 = X(o1, R[9].i, 1 - K(-(.2 + .3 * U(2 * R[9].i - 1)) * H)),
      z = X(z, e ? X(z, -9, 1 - K(-1.5 * H)) : L(C / 3), 1 - K(-1 * H)),
      Q && C > Q && (Q = 0, h4.innerHTML = ""),
      R[0].j && .8 < R[0].g && (a1 < 13
        ? (1 / 0 > Q && (Q = C + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), R[0].j = 0)
        : e
          || (1 / 0 > Q && (Q = C + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
            e = 1));
    for (let e of P) e.h(N(R1, e.l));
    for (let e of R) e.h();
    for (let e of h1) e.h();
  },
  v1 = () => {
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
      ][a1 = h1.reduce((e, { j: t }) => e + t, 0)] + " / XIII";
  },
  z1 = () => {
    localStorage.I = JSON.stringify([R.map(({ j: e }) => e), h1.map(({ j: e }) => e), r1, C, o1]);
  },
  i = (e, t = 1) => {
    let a = o;
    return P.push(t = { l: new DOMMatrix(), H: P.length, G: t, s: [], h() {} }), e(o = t), o = a, t;
  },
  f = (e, t = new DOMMatrix(), a) => o.s.push(...p(e, t, a)),
  m = e => {
    let t = new DOMMatrix(),
      a = new DOMMatrix(),
      l = o,
      r = R.length,
      s = {
        j: 0,
        g: 0,
        i: 0,
        u: l,
        J: t,
        l: a,
        h() {
          N(N(l.l, t).multiplySelf(e), a).rotateSelf(60 * s.g - 30, 0).translateSelf(0, 1),
            s.g = X(s.g, s.j, 1 - K(-4 * H)),
            s.i = X(s.i, s.j, 1 - K(-1 * H)),
            k && M1(t.transformPoint()) < 3 && (s.g < .3 || .7 < s.g)
            && (s.j = s.j ? 0 : 1, r && 1 / 0 > Q && (Q = C + 1, h4.innerHTML = "* click *"), r1 = r, z1());
        },
      };
    R.push(s),
      f(b(5), e.translate(-.2).rotate(90, 90).scale(.4, .1, .5), F(.4, .5, .5)),
      f(b(5), e.translate(.2).rotate(90, 90).scale(.4, .1, .5), F(.4, .5, .5)),
      f(b(), e.translate(0, -.4).scale(.5, .1, .5), F(.5, .5, .4));
  },
  g = (f, ...e) => {
    let m = -1,
      h = 0,
      u = 0,
      g = 0,
      v = 0,
      d = 0,
      p = 1,
      b = 3,
      S = new DOMMatrix(),
      M = o,
      t = h1.length,
      A = e.map(([e, t, a]) => ({ x: e, z: t, w: a })),
      I = A[0],
      { x: j, z: Y } = I,
      F = j,
      D = Y,
      k = {
        j: 0,
        l: S,
        h() {
          if (!k.j) {
            let e, t, a, l, r, s, o, c = 1, n = 1 / 0;
            for (let l of A) {
              let { x: e, z: t, w: a } = l;
              t = (e = U1(j - e, Y - t)) - a, o ||= e < a, 0 < t && n > t && (n = t, I = l), c = B1(c, e / a);
            }
            o
            || ({ x: e, z: t, w: a } = I,
              l = j - e,
              r = Y - t,
              s = U1(l, r),
              i = E1(-r, l),
              p && (u = (W1() - .5) * W / 2, b = L(b / (1 + W1()))),
              m = -J(i += u),
              h = G(i),
              .1 < s && (s = B1(s, a) / (s || 1), j = l * s + e, Y = r * s + t)),
              p = o,
              b = X(b, 6 * (1 - c) + 3, 1 - K(-(c + 3) * H)),
              i = j = X(j, j + m, 1 - K(-b * H)),
              F = X(F, i, 1 - K(-b * H)),
              i = Y = X(Y, Y + h, 1 - K(-b * H)),
              D = X(D, i, 1 - K(-b * H)),
              g = S1(g, E1(F - v, D - d) / K1 - 180, 1 - K(-3 * H)),
              v = F,
              d = D;
            var i = N(M.l, S).multiplySelf(f).translateSelf(F, 0, D).rotateSelf(0, g, 7 * G(1.7 * C)).transformPoint();
            M1(i) < 1.6
              && (k.j = 1,
                i = [
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
                ][a1] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                1 / 0 > Q && (Q = C + (a1 && a1 < 12 ? 5 : 7), h4.innerHTML = i),
                v1(),
                z1());
          }
          k.j
            && N(P[2].l, S).translateSelf(
              t % 4 * 1.2 - 1.7 + G(C + t) / 7,
              -2,
              1.7 * (t / 4 | 0) - 5.5 + U(t % 4 - 2) + J(C / 1.5 + t) / 6,
            );
        },
      };
    h1.push(k);
  },
  d1 = (t, a, l, e) => {
    let r = 0, s = 0, o = 0, c = 1 / 0, n = -1 / 0, i = 1 / 0, f = -1 / 0, m = 1 / 0, h = -1 / 0;
    for (N().scale3dSelf(l).multiplySelf(a.multiply(t).invertSelf()), t = 0; t < 8; ++t) {
      x1.x = 4 & t ? 1 : -1, x1.y = 2 & t ? 1 : -1, x1.z = 1 & t ? 1 : -1;
      let e = l * (a = q1.transformPoint(x1)).w;
      r -= G1[t].x = (0 | a.x) / e, s -= G1[t].y = (0 | a.y) / e, o -= G1[t].z = (0 | a.z) / e;
    }
    for (N().rotateSelf(298, 139).translateSelf(r / 8, s / 8, o / 8), l = 0; l < 8; ++l) {
      let { x: e, y: t, z: a } = q1.transformPoint(G1[l]);
      c = B1(c, e), n = E(n, e), i = B1(i, t), f = E(f, t), m = B1(m, a), h = E(h, a);
    }
    return m *= m < 0 ? e : 1 / e,
      h *= 0 < h ? e : 1 / e,
      Y(2 / (n - c), 2 / (f - i), 2 / (m - h)).translateSelf((n + c) / -2, (f + i) / -2, (m + h) / 2).multiplySelf(q1);
  },
  L = (e, t = 0, a = 1) => e < t ? t : a < e ? a : e,
  p1 = (e, t) => U(e) > t ? e : 0,
  X = (e, t, a) => (0 < a ? a < 1 ? e + (t - e) * a : t : e) || 0,
  v = (e, t) => (e = L(e), X(e, 1 - e, t)),
  w1 = e => E1(G(e *= K1), J(e)) / K1,
  S1 = (e, t, a) => e + (2 * (t = (t - e) % 360) % 360 - t) * L(a) || 0,
  M1 = ({ x: e, y: t, z: a }) => U1(e - q.x, t - q.y, a - q.z),
  h = ({ x: e, y: t, z: a }, l) => e * l.x + t * l.y + a * l.z,
  A1 = e => {
    let t, a = 0, l = 0, r = 0, s = e.at(-1);
    for (t of e) a += (s.y - t.y) * (s.z + t.z), l += (s.z - t.z) * (s.x + t.x), r += (s.x - t.x) * (s.y + t.y), s = t;
    return t = U1(a, l, r), a /= t, l /= t, r /= t, { x: a, y: l, z: r, w: a * s.x + l * s.y + r * s.z };
  },
  d = (
    e,
    t = L1,
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
  N = (
    e = R1,
    t = q1,
  ) => (t.m11 = e.m11,
    t.m12 = e.m12,
    t.m13 = e.m13,
    t.m14 = e.m14,
    t.m21 = e.m21,
    t.m22 = e.m22,
    t.m23 = e.m23,
    t.m24 = e.m24,
    t.m31 = e.m31,
    t.m32 = e.m32,
    t.m33 = e.m33,
    t.m34 = e.m34,
    t.m41 = e.m41,
    t.m42 = e.m42,
    t.m43 = e.m43,
    t.m44 = e.m44,
    t),
  I1 = (e, t, a) => (e.D = a, e.A = t, e),
  r = (e, l, t = e.A) =>
    I1(
      e.map(e => {
        let t, a;
        return { x: e, y: t, z: a } = e,
          { x: e, y: t, z: a } = l.transformPoint({ x: e, y: t, z: a }),
          { x: e, y: t, z: a };
      }),
      t,
      e.D,
    ),
  p = (e, t, a) => e.map(e => r(e, t, a)),
  j1 = (a, l = 0) =>
    u(a, e => {
      let t = J(2 * W * e / a);
      return { x: G(2 * W * e / a), y: 0, z: U(t) < .01 ? t : t < 0 ? t - l : t + l };
    }),
  s = (l, r, s) =>
    l.map((e, t, { length: a }) => I1([e, r[a - t - 1], r[a - (t + 1) % a - 1], l[(t + 1) % a]], l.A, s)),
  b = (
    e,
    t,
    a = 0,
    l,
  ) => (e = e ? j1(e, l) : u1,
    l = r(e, I(0, 1).scale3d(0 < a ? a : 1)),
    e = r(e, I(0, -1).scale3d(a < 0 ? -a : 1)).reverse(),
    [...s(e, l, t), l, e]),
  l = (l, r = l, s = (e, t) => (t *= W / r, { x: J(e *= 2 * W / l) * G(t), y: J(t), z: G(e) * G(t) })) => {
    let o = [];
    for (let a = 0; l > a; a++) {
      for (let t = 0; r > t; t++) {
        let e = I1([], 0, 1);
        o.push(e),
          e.push(s(a, t, e)),
          t && e.push(s((a + 1) % l, t, e)),
          r - 1 > t && e.push(s((a + 1) % l, t + 1 % r, e)),
          e.push(s(a, t + 1 % r, e));
      }
    }
    return o;
  },
  n = (l, r) => {
    let s, o, c, n = r.C;
    for (let e = 0; n.length > e; ++e) {
      if ((s = h(l, n[e]) - l.w) < -8e-5 ? c = r : 8e-5 < s && (o = r), c && o) {
        o = [], c = [], n = r.C, e = r.B;
        let t = n.at(-1), a = h(l, t) - l.w;
        for (let e of n) {
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
          o: 2 < o.length && { C: I1(o, n.A, n.D), B: e, u: r },
          m: 2 < c.length && { C: I1(c, n.A, n.D), B: e, u: r },
        };
      }
    }
    return { o: o, m: c };
  },
  c = (e, t, a = A1(t.C)) => {
    let l, r, s;
    return e
      ? ({ o: l, m: r } = n(e, t), l || r || e.s.push(t), l && (e.o = c(e.o, l, a)), r && (e.m = c(e.m, r, a)))
      : ({ x: l, y: r, z: a, w: s } = a, e = { x: l, y: r, z: a, w: s, s: [t], o: 0, m: 0 }),
      e;
  },
  a = (t, r, s) => {
    let o = [],
      c = (e, t) => {
        let { o: a, m: l } = n(e, t);
        a || l || (0 < s * h(e, r) ? a = t : l = t), a && (e.o ? c(e.o, a) : o.push(a)), l && e.m && c(e.m, l);
      };
    for (let e of r.s) c(t, e);
    return o;
  },
  Y1 = (e, t) => e && (t(e), Y1(e.o, t), Y1(e.m, t)),
  F1 = e => e.length ? e.reduce((e, t) => c(e, { C: t, B: 0, u: 0 }), 0) : e,
  D1 = e => (Y1(e, t => {
    let e = t.m;
    t.m = t.o, t.o = e, t.x *= -1, t.y *= -1, t.z *= -1, t.w *= -1;
    for (let e of t.s) e.B = !e.B;
  }),
    e),
  S = (...e) =>
    e.reduce((l, t) => {
      let r = [];
      if (l = F1(l), t) {
        t = F1(t), Y1(l, e => e.s = a(t, e, 1)), Y1(t, e => r.push([e, a(l, e, -1)]));
        for (let [t, a] of r) for (let e of a) c(l, e, t);
      }
      return l;
    }),
  M = (...e) => {
    let t,
      a = e => {
        let t;
        return e.u && ((t = l.get(e.u)) ? (r.delete(t), e = a(e.u)) : l.set(e.u, e)), e;
      },
      l = new Map(),
      r = new Map();
    return [e, ...t] = [...e],
      e = D1(S(D1(F1(e)), ...t)),
      Y1(e, t => {
        for (let e of t.s) r.set(a(e), e.B);
      }),
      Array.from(r, ([{ C: e }, t]) => {
        let a = e.map(({ x: e, y: t, z: a }) => ({ x: e, y: t, z: a }));
        return I1(t ? a.reverse() : a, e.A, e.D);
      });
  },
  k1 = (e, t = 35633) => (t = V.c6x(t), V.s3c(t, e), V.c6a(t), t),
  T1 = (e, t) => {
    let a = {}, l = V.c1h();
    return V.abz(l, e), V.abz(l, k1(t, 35632)), V.l8l(l), e => e ? a[e] || (a[e] = V.gan(l, e)) : V.u7y(l);
  },
  C1 = (e, t, a) => {
    if (A) {
      t = j(0, 40 * G(l1) - 70);
      for (let e of [37, 38, 39]) d(t, X1, e - 1);
      V.uae(e, !1, X1), V.d97(4, P[39].F - P[37].v, 5123, 2 * P[37].v);
    } else {
      V.uae(e, !1, X1),
        V.d97(4, (t ? P[39].F : P[37].v) - 3, 5123, 6),
        V.uae(e, !1, N1),
        V.das(4, P[a].F - P[a].v, 5123, 2 * P[a].v, 13),
        V.das(4, P[40].F - P[40].v, 5123, 2 * P[40].v, R.length);
    }
  },
  O1 = e => {
    h4.innerHTML += ".", setTimeout(e);
  },
  Q1 = e => G(e * W * 2),
  B1 = (e, t) => e < t ? e : t,
  E = (e, t) => t < e ? e : t,
  U = e => e < 0 ? -e : e,
  I = (e, t, a) => R1.translate(e, t, a),
  j = (e, t, a) => R1.rotate(e, t, a),
  Y = (e, t, a) => R1.scale(e, t, a),
  H1 = (e, t, a, l) =>
    new DOMMatrix([a, 0, 0, 0, 0, l, 0, 0, 0, 0, (t + e) / (e - t), -1, 0, 0, 2 * t * e / (e - t), 0]),
  F = (e, t, a, l = 0) => 255 * l << 24 | 255 * a << 16 | 255 * t << 8 | 255 * e,
  P1 = new AudioContext(),
  R1 = new DOMMatrix(),
  q1 = new DOMMatrix(),
  L1 = new Float32Array(16),
  X1 = new Float32Array(624),
  N1 = new Float32Array(624),
  { PI: W, exp: K, atan2: E1, hypot: U1, cos: J, sin: G, random: W1 } = Math,
  K1 = W / 180,
  t = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  J1 = P1.createBufferSource(),
  G1 = u(8, () => ({})),
  V = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (let e in V) V[e[0] + [...e].reduce((e, t, a) => (e * a + t.charCodeAt(0)) % 434, 0).toString(36)] = V[e];
O1(() => {
  let e = 0,
    a = () => {
      if (2 == ++e) {
        let l = e => {
            if (
              V.f1s(),
                requestAnimationFrame(l),
                l1 += t = (e - (D || e)) / 1e3,
                C += H = A ? 0 : B1(.066, t),
                D = e,
                0 < H
            ) {
              for (_(), y1(), t1(), e = 0; P.length > e; ++e) P[e].G && d(P[e].l, X1, e - 1);
              for (e = 0; e < 13; ++e) d(h1[e].l, N1, e);
              for (e = 0; R.length > e; ++e) d(R[e].l, N1, e + 13), N1[16 * (e + 13) + 15] = 1 - R[e].g;
              c(), V.b6o(36160, m), V.v5y(0, 0, 128, 128), V.c4s(16640), V.cbf(!0, !1, !0, !1);
              var { x: t, y: e, z: a } = q;
              V.uae(c("b"), !1, d(N().rotateSelf(0, 180).invertSelf().translateSelf(-t, -e, .3 - a))),
                C1(c("c"), 0, 41),
                V.c4s(256),
                V.cbf(!1, !0, !0, !1),
                V.uae(c("b"), !1, d(N().translateSelf(-t, -e, -a - .3))),
                C1(c("c"), 0, 41),
                V.f1s();
            }
            k = 0,
              N(R1, r),
              A
                ? r.rotateSelf(-20, -90).invertSelf().translateSelf(5, -2, -3.4)
                : r.rotateSelf(-O, -B).invertSelf().translateSelf(-i1, -f1, -m1),
              s(),
              V.b6o(36160, f),
              V.v5y(0, 0, 2048, 2048),
              i[0](d1(r, $, 60.17, 10)),
              i[1](d1(r, e1, 138.6, 11)),
              n(),
              V.b6o(36160, null),
              V.v5y(0, 0, V.drawingBufferWidth, V.drawingBufferHeight),
              V.cbf(!0, !0, !0, !0),
              V.c4s(16640),
              i[0](),
              i[1](),
              V.uae(n("a"), !1, d(Z)),
              V.uae(n("b"), !1, d(r)),
              V.ubu(n("k"), i1, f1, m1),
              C1(n("c"), !T, 42),
              o(),
              V.ubu(o("j"), V.drawingBufferWidth, V.drawingBufferHeight, l1),
              V.ubu(o("k"), i1, f1, m1),
              V.uae(o("b"), !1, d(N(r).invertSelf())),
              V.d97(4, 3, 5123, 0),
              V.b6o(36160, m),
              V.f1s();
          },
          r = new DOMMatrix(),
          e = h,
          t = k1(`#version 300 es
layout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}`),
          s = T1(
            k1(`#version 300 es
in vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}`),
            `#version 300 es
void main(){}`,
          ),
          o = T1(
            k1(`#version 300 es
in vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}`),
            `#version 300 es
precision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}`,
          ),
          c = T1(
            t,
            `#version 300 es
precision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}`,
          ),
          n = T1(
            t,
            `#version 300 es
precision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}`,
          ),
          i = u(2, t => {
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
                  ? (d(e, a), V.uae(s("b"), !1, a), V.fas(36160, 36096, 3553, l, 0), V.c4s(256), C1(s("c"), !T, 42))
                  : V.uae(n(t ? "j" : "i"), !1, a);
              };
          }),
          f = V.c5w(),
          m = (t = V.c3z(), V.c5w()),
          a = V.c25();
        c(),
          V.uae(c("a"), !1, d(H1(1e-4, 1, 1.4, .59))),
          n(),
          V.ubh(n("q"), 2),
          V.ubh(n("h"), 1),
          V.ubh(n("g"), 0),
          o(),
          V.ubh(o("q"), 2),
          V.b6o(36160, f),
          V.d45([0]),
          V.r9l(0),
          V.b6o(36160, m),
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
          y1(),
          (() => {
            let e,
              i,
              f,
              m,
              h,
              u,
              g,
              v,
              d,
              p,
              b,
              o,
              S,
              M,
              t = !0,
              c = [],
              a = () => {
                b4.innerHTML = "Music: " + t, A || !t ? J1.disconnect() : J1.connect(P1.destination);
              },
              l = () => {
                let e = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
                Z = H1(.3, 181, e, 1.732051),
                  $ = H1(.3, 55, e, 1.732051),
                  e1 = H1(55, 181, e, 1.732051),
                  m = v = void 0,
                  c.length =
                    k =
                    o =
                    w =
                    S =
                    M =
                      0,
                  document.hidden && n(!0);
              },
              n = (e, t = 0) => {
                if (A !== e) {
                  A = e, T = t, l(), v1(), document.body.className = e ? "l m" : "l";
                  try {
                    e
                      ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock())
                      : (document.body.requestFullscreen().catch(() => 0), J1.start());
                  } catch {}
                  a();
                }
              };
            oncontextmenu = () => !1,
              b1.onclick = () => n(!1),
              b2.onclick = () => n(!1, 1),
              b5.onclick = () => n(!0),
              b4.onclick = () => {
                t = !t, a();
              },
              b3.onclick = () => {
                confirm("Restart game?") && (localStorage.I = "", location.reload());
              },
              onclick = e => {
                if (!A && (e.target === hC && (k = 1), T)) {
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
                    ] = t) && (0 === e && (k = 1), 5 === e && n(!0)));
              },
              onmousemove = ({ movementX: e, movementY: t }) => {
                T && (e || t) && (B += .1 * e, O += .1 * t);
              },
              hC.ontouchstart = l => {
                if (!A) {
                  for (let { pageX: e, pageY: t, identifier: a } of l.changedTouches) {
                    T && e > hC.clientWidth / 2
                      ? void 0 === v && (d = 0, u = e, g = t, v = a, p = B, b = O)
                      : void 0 === m && (h = 0, i = e, f = t, m = a);
                  }
                  e = l1;
                }
              },
              hC.ontouchmove = l => {
                let r, s, o, c, n;
                if (!A) {
                  for (let { pageX: e, pageY: t, identifier: a } of l.changedTouches) {
                    v === a && (B = p + (e - u) / 2.3, O = b + (t - g) / 2.3, d = 1),
                      m === a
                      && (a = (i - e) / 20,
                        r = (f - t) / 20,
                        s = U(a),
                        o = U(r),
                        c = E1(r, a),
                        n = L(U1(r, a) - .5),
                        S = .2 < s ? J(c) * n : 0,
                        M = .2 < o ? G(c) * n : 0,
                        (S || M) && (h = 1),
                        2 < s && (i = e + 20 * (a < 0 ? -1 : 1)),
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
                    : e.identifier === m
                    ? (m = void 0, M = S = 0, h || (a = 1), h = 0)
                    : a = 1;
                }
                t.target === hC && a && e && .02 < (t = l1 - e) && t < .7 && (c[0] = !0);
              },
              _ = () => {
                let l = M + (c[3] ? 1 : 0) - (c[4] ? 1 : 0),
                  r = S + (c[1] ? 1 : 0) - (c[2] ? 1 : 0),
                  s = navigator.getGamepads()[0];
                if (s) {
                  let e = e => t[e]?.pressed || 0 < t[e]?.value ? 1 : 0, t = s.buttons, a = s.axes;
                  s = e(3) || e(2) || e(1) || e(0),
                    l += e(12) - e(13) - p1(a[1], .2),
                    r += e(14) - e(15) - p1(a[0], .2),
                    e(9) && n(!0),
                    T && (O += H * p1(a[3], .3) * 80, B += H * p1(a[2], .3) * 80),
                    s && !o && (k = 1),
                    o = s;
                }
                n1 = E1(l, r), w = p1(L(U1(l, r)), .05);
              },
              document.onvisibilitychange = onblur = onresize = l,
              n(!0);
          })(),
          (() => {
            let r,
              c,
              s,
              n,
              o,
              i,
              f,
              m,
              h,
              u,
              g,
              v,
              d,
              p,
              b,
              S,
              M,
              A = 1,
              I = 2,
              j = 2,
              Y = () => (I ? R[r1].u : P[s && 1 === P[s].G && s || 0]).l,
              F = (e, t, a, l) => X(e, t, A || (L(U(t - e) ** .9 - a) + 1 / 7) * (1 - K(-1.5 * l * H))),
              D = new Int32Array(256),
              k = new Uint8Array(65536);
            t1 = () => {
              let t;
              V.fa7(),
                V.r9r(0, 0, 128, 128, 6408, 5121, k),
                V.iay(36008, [36064, 36096]),
                V.iay(36009, [36064, 36096]),
                (() => {
                  u = h = 0;
                  for (let e = 32; e < 128; e += 2) {
                    let o = 0, c = 0, n = 0, i = 0, f = 512 * e;
                    for (let s = 1 & e; s < 128; s += 2) {
                      let e = f + 4 * s,
                        t = f + 4 * (127 - s),
                        a = k[e] / 255,
                        l = k[1 + t] / 255,
                        r = 1 - U(s / 63.5 - 1);
                      10 < s && s < 118 && (o = E(E(a * r, a * k[t] / 255), o), c = E(E(l * r, l * k[1 + e] / 255), c)),
                        (s < 54 || 74 < s) && .001 < (t = (1 - r) * E(a, l) / 3)
                        && (s < 64 && t > n ? n = t : 64 < s && t > i && (i = t));
                    }
                    U(i - n) > U(h) && (h = i - n), U(c - o) > U(u) && (u = c - o);
                  }
                })(),
                (() => {
                  let s = 0, o = 0, t = 0, a = 0;
                  n = 0, D.fill(0);
                  for (let e = 0; e < 31; ++e) {
                    let l = 0, r = 512 * e;
                    for (let a = 0; a < 128; a++) {
                      let e = r + 4 * a, t = (k[e] + k[1 + e]) / 255;
                      e = k[2 + e],
                        14 < a && a < 114 && (l += t),
                        e && t && (t = D[e] + 1, D[e] = t, s > t || (s = t, o = e));
                    }
                    l < 3 && 5 < e && (t += e / 32), 3 < l && (7 < e && (a += e / 15), n = 1);
                  }
                  o && (n = 1),
                    r = o || c,
                    c = o,
                    j = X(j, n ? 6.5 : g1.y < -20 ? 11 : 8, 1 - K(-4 * H)),
                    g1.y += a / 41 - (n || j) * t / 41 * j * H;
                })(),
                t = L(1 - 5 * E(U(h), U(u))),
                a = T ? B * K1 : W,
                d = X(d, n * t * L(2 * w) * 7, 1 - K(-(n ? .1 < t ? 10 : 5 + 2 * w : 1) * H)),
                g = X(g, 0, 1 - K(-(n ? 8 : 4) * H)),
                h += H * ((r ? 0 : t * g) - J(n1 + a) * w * d),
                v = X(v, 0, 1 - K(-(n ? 8 : 4) * H)),
                u += H * ((r ? 0 : t * v) - G(n1 + a) * w * d),
                t = Y();
              var { x: e, y: a, z: l } = 1 < I
                ? R[r1].J.transformPoint({ x: 0, y: r1 || .9 < z ? 15 : 1, z: -2.4 })
                : (N(a = t).invertSelf(),
                  q1.m41 = q1.m42 = q1.m43 = 0,
                  e = q1.transformPoint({ x: h, z: u, w: 0 }),
                  g1.x += e.x,
                  g1.z += e.z,
                  a.transformPoint(g1));
              if (
                r && (g = (e - q.x) / H, v = (l - q.z) / H),
                  q.x = e,
                  q.y = a,
                  q.z = l,
                  (I = I && (n && r ? 0 : 1)) || r !== s
              ) {
                s = r;
                let e = (t = Y()).inverse().transformPoint(q);
                g1.x = e.x, g1.y = e.y, g1.z = e.z;
              }
              for (
                m = X(m, c1 * (27 < r && r < 32), 1 - K(-2 * H)),
                  a < (e < -25 || l < 109 ? -25 : -9) && (g = v = d = 0, I = 2),
                  1 === r && (R[9].j = e < -15 && l < 0 ? 1 : 0),
                  p = X(X(p, a, 1 - K(-2 * H)), a, I || 8 * U(p - a)),
                  S = F(S, p, 2, 1),
                  b = F(b, e, .5, 1),
                  M = F(M, l, .5, 1),
                  T
                    ? (t = I + (1 - K(-18 * H)), i1 = X(i1, e, t), f1 = X(f1, p + 1.5, t), m1 = X(m1, l, t), B = w1(B))
                    : (f1 = F(f1, E(S + L((-60 - l) / 8, 0, 20) + 13 + 9 * m, 6), 4, 2),
                      m1 = F(m1, M + -18 + 5 * m, 1, 2 + m),
                      i1 = F(i1, b, 1, 2 + m),
                      a = B1(4, -U(M - m1)),
                      B = S1(B, 90 - w1(E1(a, t = b - i1) / K1), A + (1 - K(-6 * H))),
                      O = S1(O, 90 - E1(U1(a, t), f1 - S) / K1, A + (1 - K(-6 * H)))),
                  O = L(O, -87, 87),
                  i = S1(i, o, 1 - K(-8 * H)),
                  f = X(f, w, 1 - K(-10 * H)),
                  w && (o = 90 - n1 / K1),
                  A = 0,
                  P[37].l.translateSelf(e, p + .124, l).rotateSelf(0, i),
                  t = 0;
                t < 2;
                ++t
              ) {
                P[38 + t].l.multiplySelf(P[37].l).translateSelf(0, f * L(.45 * G(9.1 * C + W * (t - 1) - W / 2)))
                  .rotateSelf(f * G(9.1 * C + W * (t - 1)) * .25 / K1, 0);
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
            e = m => {
              let r,
                h,
                s,
                u,
                o,
                c,
                n = 0,
                i = 0,
                g = [],
                f = new Int32Array(768 * m),
                v = 2 ** (a - 9) / m,
                d = W * 2 ** (l - 8) / m,
                p = R * m & -2;
              for (let l = 0; l <= 11; ++l) {
                for (
                  let e = 0, t = +"000001234556112341234556011111111112011111111112000001111112"[12 * X + l];
                  e < 32;
                  ++e
                ) {
                  let a = (32 * l + e) * m;
                  for (r = 0; r < 4; ++r) {
                    if (u = 0, t && (u = S[t - 1].charCodeAt(e + 32 * r) - 40, u += 0 < u ? 106 : 0), u) {
                      if (!(h = g[u])) {
                        let l,
                          r,
                          s = 0,
                          o = 0,
                          c = h = u,
                          n = X < 2
                            ? e => e % 1 * 2 - 1
                            : Q1,
                          i = X < 2
                            ? X < 1
                              ? e => e % 1 < .5 ? 1 : -1
                              : e => (e = e % 1 * 4) < 2 ? e - 1 : 3 - e
                            : Q1,
                          f = new Int32Array(k + T + L);
                        for (let t = 0, a = 0; k + T + L > t; ++t, ++a) {
                          let e = 1;
                          k > t ? e = t / k : k + T > t || (e = (1 - (e = (t - k - T) / L)) * 3 ** (-C / 16 * e)),
                            a < 0
                            || (a -= 4 * m,
                              r = .00396 * 2 ** ((c + A - 256) / 12),
                              l = .00396 * 2 ** ((c + Y - 256) / 12) * (1 + (X ? 0 : .0072))),
                            f[t] = 80
                                * (n(s += r * e ** (I / 32)) * M + i(o += l * e ** (F / 32)) * j
                                  + (D ? (2 * W1() - 1) * D : 0))
                                * e | 0;
                        }
                        h = g[h] = f;
                      }
                      for (let e = 0, t = 2 * a; h.length > e; ++e, t += 2) f[t] += h[e];
                    }
                  }
                  for (let e, t = 0; m > t; ++t) {
                    r = 0,
                      h = 2 * (a + t),
                      ((e = f[h]) || c)
                      && (o = .00308 * O,
                        1 !== X && 4 !== X || (o *= G(v * h * W * 2) * q / 512 + .5),
                        o = 1.5 * G(o),
                        n += o * i,
                        i += o * (s = (1 - Q / 255) * (e - i) - n),
                        e = 4 === X ? i : 3 === X ? s : n,
                        X || (e = (e *= 22e-5) < 1 ? -1 < e ? G(e / 4 * W * 2) : -1 : 1, e /= 22e-5),
                        e *= B / 32,
                        c = 1e-5 < e * e,
                        r = e * (1 - (s = G(d * h) * H / 512 + .5)),
                        e *= s),
                      p > h || (r += f[1 + h - p] * P / 255, e += f[h - p] * P / 255),
                      N[s = b + h >> 1] += (f[h] = r) / 65536,
                      E[s] += (f[++h] = e) / 65536;
                  }
                }
              }
              b += 768 * m;
            },
            S = [
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
            [M, A, I, j, Y, F, D, k, T, t, C, a, O, Q, B, H, l, P, R, q] = [
              [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
              [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
              [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
              [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
              [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
            ][X],
            L = 4 * t ** 2;
          e(5513), e(4562), e(3891), O1(++X < 5 ? s : r);
        },
        e = P1.createBuffer(2, 5362944, 44100),
        N = e.getChannelData(0),
        E = e.getChannelData(1);
      J1.buffer = e, J1.loop = !0, O1(s);
    })(() => {
      O1(() => {
        let s,
          t = 0,
          l = [],
          o = [],
          c = [],
          n = [],
          r = e => {
            let { x: t, y: a, z: l } = s[e], r = (h[0] = t, h[1] = a, h[2] = l, f.get(e = "" + (s.D ? m : i)));
            return void 0 !== r
              ? (t = 3 * r, n[t] = (n[t++] + i[5]) / 2, n[t] = (n[t++] + i[6]) / 2, n[t] = (n[t] + i[7]) / 2)
              : (f.set(e, r = f.size), o.push(t, a, l, h[3]), c.push(i[4]), n.push(i[5], i[6], i[7])),
              r;
          },
          i = new Int32Array(8),
          f = new Map(),
          m = new Int32Array(i.buffer, 0, 5),
          h = new Float32Array(i.buffer);
        for (let e of P) {
          for (s of (h[3] = 40 === e.H ? -14 : e.G && e.H, e.s)) {
            let { x: e, y: t, z: a } = A1(s);
            i[4] = 0 | s.A, i[5] = 32767 * e, i[6] = 32767 * t, i[7] = 32767 * a;
            for (let e = 2, t = r(0), a = r(1); s.length > e; ++e) l.push(t, a, a = r(e));
          }
          e.s = null, e.v = t, e.F = t = l.length;
        }
        V.b11(34962, V.c1b()),
          V.b2v(34962, new Float32Array(o), 35044),
          V.v7s(0, 4, 5126, !1, 0, 0),
          V.b11(34962, V.c1b()),
          V.b2v(34962, new Int16Array(n), 35044),
          V.v7s(1, 3, 5122, !0, 0, 0),
          V.b11(34962, V.c1b()),
          V.b2v(34962, new Uint32Array(c), 35044),
          V.v7s(2, 4, 5121, !0, 0, 0),
          V.b11(34963, V.c1b()),
          V.b2v(34963, new Uint16Array(l), 35044),
          V.e3x(0),
          V.e3x(1),
          V.e3x(2),
          O1(a);
        try {
          let [a, l, e, t, r] = JSON.parse(localStorage.I);
          R.map((e, t) => e.g = e.i = e.j = t ? 0 | a[t] : 0), h1.map((e, t) => e.j = 0 | l[t]), r1 = e, C = t, o1 = r;
        } catch {}
        z = L(r1);
      });
      let t = u(11, e => I(G(e / 10 * W), e / 10).rotate(+e).scale(1.0001 - e / 10, 0, 1 - e / 10)),
        n = u(10, e => s(r(j1(18), t[e]).reverse(), r(j1(18), t[e + 1]), 1)).flat();
      i(() => f([u1.slice(1)], I(-2).scale3d(3).rotate(90, 0)), 0),
        i(() => {
          let e = (t, a, l) =>
              i(e => {
                e.h = e => e.translateSelf(r() * G(3 * t + C * t) * a),
                  u1.map(({ x: e, z: t }) => {
                    f(b(11, 1), I(4 * e, 4, l + 4 * t).scale(.8, 3, .8), F(.5, .3, .7, .6)),
                      f(b(), I(4 * e, 7, l + 4 * t).scale(1, .3), F(.5, .5, .5, .3));
                  }),
                  f(M(
                    p(b(), I(0, 0, l).scale(5, 1, 5), F(.8, .8, .8, .3)),
                    ...[-1, 1].map(e => p(b(), I(5 * e, .2, l).rotate(-30 * e).scale(4, 1, 2), F(.8, .8, .8, .3))),
                  )),
                  f(b(), I(0, -3, l).scale(8, 2, 8), F(.4, .4, .4, .3));
              }),
            t = (e, t, a, l) =>
              e.translateSelf(t + G(C + 2) / 5, a + G(.8 * C) / 3, l).rotateSelf(2 * G(C), G(.7 * C), G(.9 * C)),
            a = e =>
              M(
                p(b(), I(0, -e / 2).scale(6, e - 1, 2.2)),
                p(b(), I(0, -e / 2 - 6).scale(4, e - 3, 4)),
                p(b(32, 1), I(0, e / 2 - 9).rotate(90, 0, 90).scale3d(4)),
              ),
            r = () => B1(R[2].i, 1 - R[4].i),
            l = M(
              p(b(30, 1, 1.15, 1), I(0, -3).scale(3.5, 1, 3.5), F(.7, .4, .25, .7)),
              p(b(30, 1, 1.3, 1), I(0, -2.5).scale(2.6, 1, 3), F(.7, .4, .25, .2)),
              p(b(), I(4, -1.2).scale3d(2), F(.7, .4, .25, .3)),
            ),
            s = u(7, e => p(b(6, 1), I(4 * (e / 6 - .5), 3).scale(.2, 3, .2), F(.3, .3, .38))).flat(),
            o = (i(e => {
              e.h = e => t(e, -12, 4.2, 40 * z - 66), f(l), m(I(0, -3, 4));
            }),
              m(I(-5.4, 1.5, -19).rotate(0, -90)),
              g(I(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
              g(I(0, 2.8), [5, 10, 3], [-5, 10, 3], ...j1(18).map(({ x: e, z: t }) => [7 * e, 10 * t, 4.5 - 2 * U(e)])),
              f(b(), I(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), F(.8, .8, .8, .2)),
              u1.map(({ x: e, z: t }) => f(b(6), I(3 * e, 3, 15 * t).scale(.7, 4, .7), F(.6, .3, .3, .4))),
              f(b(), I(0, 0, -23).scale(3, 1, 8), F(.9, .9, .9, .2)),
              f(b(), I(0, 0, 22).scale(3, 1, 8), F(.9, .9, .9, .2)),
              [-15, 15].map((t, a) => {
                f(b(), I(0, 6.3, t).scale(4, .3, 1), F(.3, .3, .3, .4)),
                  f(b(), I(0, 1, t).scale(3, .2, .35), F(.5, .5, .5, .3)),
                  i(e => {
                    e.h = e => e.translateSelf(0, 0, t).scaleSelf(1, L(1.22 - R[a + 1].g), 1), f(s);
                  });
              }),
              u(5, t =>
                u(2, e =>
                  f(
                    n,
                    I(18.5 * (e - .5), 0, 4.8 * t - 9.5).rotate(0, 180 - 180 * e).scale(1.2, 10, 1.2),
                    F(1, 1, .8, .2),
                  ))),
              f(b(), I(3, 1.5, -20).scale(.5, 2, 5), F(.7, .7, .7, .2)),
              f(b(), I(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), F(.75, .75, .75, .2)),
              f(b(5), I(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), F(.6, .3, .3, .4)),
              f(b(), j(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, .6, 4.5), F(.8, .2, .2, .5)),
              f(M(
                S(
                  p(b(6, 0, 0, .3), I(8, -3, -4).scale(13, 1, 13), F(.7, .7, .7, .2)),
                  p(b(6), I(0, -8).scale(9, 8, 8), F(.4, .2, .5, .5)),
                  p(b(6, 0, 0, .3), I(0, -.92).scale(13, 2, 13), F(.8, .8, .8, .2)),
                ),
                p(b(5), Y(5, 30, 5), F(.4, .2, .6, .5)),
                p(b(5, 0, 1.5), I(0, 1).scale(4.5, .3, 4.5), F(.7, .5, .9, .2)),
                p(b(), j(0, 60).translate(14, .7, -1).rotate(-35).scale(2, 2, 2), F(.5, .5, .5, .5)),
                p(b(6), I(15, -1.5, 4).scale(3.5, 1, 3.5), F(.5, .5, .5, .5)),
              )),
              i(e => {
                e.h = e =>
                  e.translateSelf(
                    0,
                    .01 < R[3].g ? (5 * J(1.5 * C) + 2) * R[3].i * (1 - R[2].g) + -15 * (1 - R[3].g) : -500,
                    0,
                  ),
                  f(b(5), I(0, -.2).scale(5, 1, 5), F(.6, .65, .7, .3)),
                  m(I(0, 1.2));
              }),
              m(I(15, -2, 4)),
              e(.7, 12, 35),
              e(1, 8.2, 55),
              i(e => {
                e.h = e => e.translateSelf(r() * G(C / 1.5 + 2) * 12),
                  f(
                    M(
                      S(
                        p(b(), Y(1.5, 1, 5), F(.9, .9, .9, .2)),
                        p(b(6), Y(4, 1, 5), F(.9, .9, .9, .2)),
                        p(b(), I(0, -2).scale(2, 3.2, 1.9), F(.3, .8, .5, .5)),
                        p(b(16, 1, 0, 4), Y(1, 1, 1.5).rotate(0, 90), F(.9, .9, .9, .2)),
                      ),
                      p(b(), Y(1.3, 10, 1.3), F(.2, .7, .4, .6)),
                    ),
                    I(0, 0, 45),
                  ),
                  g(I(0, 2.8, 45), [0, 0, 4.5]);
              }),
              f(b(), I(-18.65, -3, 55).scale(2.45, 1.4, 2.7), F(.9, .9, .9, .2)),
              i(e => {
                e.h = e => e.translateSelf(9.8 * (1 - r())),
                  f(b(3), I(-23, -1.7, 55.8).scale(5, .7, 8.3), F(.3, .6, .6, .2)),
                  f(b(8), I(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), F(.8, .8, .8, .2)),
                  f(b(), I(-23, -3, 55).scale(5.2, 1.7, 3), F(.5, .5, .5, .3)),
                  f(b(), I(-23, -2.2, 62).scale(3, 1, 4), F(.5, .5, .5, .3)),
                  m(I(-23, -.5, 66.5));
              }),
              i(e => {
                e.h = e => e.translateSelf(0, L(1 - 5 * r()) * v(R[4].g, R[5].g) * G(1.35 * C) * 4),
                  f(b(), I(-22.55, -3, 55).scale(1.45, 1.4, 2.7), F(.7, .7, .7, .2)),
                  f(M(p(b(), Y(3, 1.4, 2.7)), p(b(), Y(1.2, 8, 1.2))), I(-33, -3, 55), F(.7, .7, .7, .2));
              }),
              i(e => {
                e.h = e => e.translateSelf(0, 0, L(1 - 5 * r()) * v(R[4].g, R[5].g) * G(.9 * C) * 8),
                  f(M(
                    p(b(), I(-27, -3, 55).scale(3, 1.4, 2.7), F(.9, .9, .9, .2)),
                    p(b(), I(-27, -3, 55).scale(1, 3), F(.9, .9, .9, .2)),
                  )),
                  f(b(), I(-39, -3, 55).scale(3, 1.4, 2.7), F(.9, .9, .9, .2));
              }),
              i(e => {
                e.h = e => e.translateSelf(0, -6.5 * R[4].i),
                  f(b(6), I(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), F(.7, .7, .7, .4));
              }),
              m(I(-55, -1.1, 46).rotate(0, 90)),
              f(b(6), I(-61.3, -2.4, 49).scale(3, 1, 5), F(.4, .6, .6, .3)),
              f(b(7), I(-57, -2.6, 46).scale(4, 1, 4), F(.8, .8, .8, .3)),
              [
                ...p(b(), I(0, -3).scale(11, 1.4, 3), F(.9, .9, .9, .2)),
                ...M(
                  p(b(6), j(90).scale(6, 8, 6), F(.3, .6, .6, .3)),
                  p(b(4, 0, .01), I(0, 6).scale(12, 2, .75).rotate(0, 45), F(.3, .6, .6, .3)),
                  p(b(6), j(90).scale(5, 12, 5), F(.3, .6, .6, .3)),
                  ...[5, 0, -5].map(e => p(b(5), I(e, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), F(.3, .6, .6, .3))),
                ),
              ]),
            c = (f(o, I(-53, 0, 55)),
              i(e => {
                e.h = e => e.translateSelf(-75, (1 - R[5].i) * (1 - R[6].g) * 3, 55).rotate(180 * (1 - R[5].i) + y, 0),
                  f(o);
              }, 2),
              f(b(), I(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), F(.7, .7, .7, .2)),
              f(b(3, 0, -.5), I(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), F(.8, .8, .8, .2)),
              f(M(
                S(
                  p(b(), I(-100, -2.5, 55).scale(8, 1, 8), F(.8, .8, .8, .2)),
                  p(b(), I(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), F(.8, .8, .8, .2)),
                  p(b(), I(-100, -2.6, 70).scale(3, 1.1, 7), F(.8, .8, .8, .2)),
                  p(b(), I(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), F(.8, .8, .8, .2)),
                  p(b(6), I(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), F(.6, .6, .6, .3)),
                  p(b(), I(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), F(.8, .8, .8, .2)),
                  p(b(), I(-100, .42, 92).scale(3, 1.1, 4.1), F(.8, .8, .8, .2)),
                ),
                p(b(8), I(-100, -1, 55).scale(7, .9, 7), F(.3, .3, .3, .4)),
                p(b(8), I(-100, -2, 55).scale(4, .3, 4), F(.4, .4, .4, .5)),
                p(b(8), I(-100, -3, 55).scale(.6, 1, .6), F(.4, .4, .4, .5)),
              )),
              g(I(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
              g(I(-89, .2, 80), [0, 0, 6]),
              f(M(
                p(b(), I(-100, 1, 63).scale(7.5, 4), F(.5, .5, .5, .4)),
                p(b(), I(-100, 0, 70).scale(2, 2, 10), F(.5, .5, .5, .4)),
                p(b(20, 1), I(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), F(.5, .5, .5, .4)),
              )),
              i(e => {
                e.h = e => e.translateSelf(-99.7, -1.9, 63.5).scale(1, L(1.1 - R[6].g), 1), f(s);
              }),
              u1.map(({ x: t, z: a }) => {
                f(b(6), I(7 * t - 100, -3, 7 * a + 55).scale(1, 8.1), F(.6, .15, .15, .8)),
                  [4, -.4].map(e => f(b(6), I(7 * t - 100, e, 7 * a + 55).scale(1.3, .5, 1.3), F(.4, .2, .2, .8)));
              }),
              u(7, e => {
                f(
                  b((23 * e + 1) % 5 + 5, 0, .55),
                  I(5 * G(e) - 101 + e, -2.3 - e, 44.9 - 2.8 * e).scaleSelf(5 + e / 2, 1 + e / 6, 5 + e / 3),
                  F(.5 - e / 17, .5 - (1 & e) / 9, .6, .3),
                );
              }),
              f(b(), I(-87, -9.5, 24).scale(7, 1, 3), F(.4, .5, .6, .4)),
              f(b(4), I(-86, -9.2, 27).scale(5, 1, 5), F(.5, .6, .7, .3)),
              f(b(12, 1), I(-86, -9, 31).scale(1.5, 1, 1.5), F(.3, .3, .4, .1)),
              m(I(-86, -7.5, 31)),
              i(e => {
                e.h = e => e.translateSelf(0, 3.5 * (1 - E(R[6].g, R[7].g)) + v(R[7].i, R[6].i) * G(C) * 5),
                  [0, 12, 24].map(e => f(b(), I(e - 76.9, e / -13 - 10, 24).scale(2.8, 1.5, 3), F(.2, .5, .6, .2)));
              }),
              i(e => {
                e.h = e => e.translateSelf(0, v(R[7].i, R[6].i) * G(C + 3) * 6, 6 * G(.6 * C + 1) * v(R[7].i, R[6].i)),
                  [6, 18].map(e => f(b(), I(e - 76.9, e / -13 - 10, 24).scale(2.8, 1.5, 3), F(.1, .4, .5, .2)));
              }),
              f(
                M(
                  S(
                    p(b(5), I(0, 0, -7).scale(2, 1.2, 2), F(.2, .4, .7, .3)),
                    p(b(5), Y(9, 1.2, 9), F(0, .2, .3, .5)),
                    p(b(), Y(11, 1, 13), F(.3, .4, .6, .3)),
                  ),
                  p(b(5), Y(5.4, 5, 5.4), F(0, .2, .3, .5)),
                ),
                I(-38.9, -11.3, 17),
              ),
              m(I(-38.9, -9.6, 10)),
              i(e => {
                e.h = e => e.translateSelf(0, -7.3 * R[7].i),
                  f(
                    M(
                      S(
                        p(b(5), I(0, 2).scale(5, 7, 5).skewY(8), F(.2, .4, .5, .5)),
                        p(b(5), I(0, 6).scale(1.1, 7, 1.1).skewY(-8), F(.25, .35, .5, .5)),
                        p(b(5), I(0, 9).scale(.6, 7, .6).skewY(8), F(.35, .3, .5, .5)),
                      ),
                      p(b(5), Y(4, 8, 4), F(.2, .4, .5, .5)),
                      p(b(5), I(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), F(.2, .4, .5, .5)),
                    ),
                    I(-38.9, -11.3, 17),
                  ),
                  g(I(-39.1, -.6, 17).rotate(11), ...j1(15).map(({ x: e, z: t }) => [3 * e, 3 * t, 1.2]));
              }),
              u1.map(({ x: t, z: a }) => {
                f(b(14, 1), I(9 * t - 38.9, -7.3, 11 * a + 17).scale(1, 4), F(.25, .25, .25, 1)),
                  [1.5, 8].map(e =>
                    f(b(17, 1), I(9 * t - 38.9, e - 11.3, 11 * a + 17).scale(1.5, .5, 1.5), F(.6, .6, .6, .3))
                  );
              }),
              f(
                M(
                  S(
                    p(b(6), I(0, 0, -36).scale(15, 1.2, 15), F(.7, .7, .7, .3)),
                    p(b(), I(0, 0, -18).scale(4, 1.2, 6), F(.45, .4, .6, .3)),
                  ),
                  ...u(6, t =>
                    u(6, e =>
                      p(
                        b(6),
                        I(4.6 * e - 12 + 2 * (1 & t), 0, 4.6 * t - 50 + 2 * G(4 * e)).scale(2, 5, 2),
                        F(.7, .7, .7, .3),
                      ))).flat(),
                ),
                I(-38.9, -11.3, 17),
              ),
              g(I(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
              f(b(5), I(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), F(.8, .1, .25, .4)),
              m(I(-84, -.5, 85).rotate(0, 45)),
              i(e => {
                e.h = e => t(e, -123, 1.4, 55 + -65 * o1), f(l), m(I(0, -3, -4).rotate(0, 180));
              }),
              M(
                p(b(), I(0, -.5, 1).scale(1.15, 1.2, 6.5), F(.25, .25, .35, .3)),
                p(b(3), I(0, 0, -5.5).scale(3, 2), F(.6, .3, .4, .3)),
                ...[-1.2, 1.2].map(e => p(b(), I(e, -.5, 1).scale(.14, .3, 6.5), F(.7, .2, 0, .3))),
              ));
          i(e => {
            e.h = e => e.translateSelf(0, -2, v(R[10].g, R[11].g) * U(G(1.1 * C)) * -8.5 + 10),
              u(2, e => f(c, I(9 * e - 110 + (1 & e), 1.7, -12)));
          }),
            i(e => {
              e.h = e => e.translateSelf(0, -2, v(R[10].g, R[11].g) * U(G(2.1 * C)) * -8.5 + 10),
                u(2, e => f(c, I(9 * (e + 2) - 110 + (1 & e), 1.7, -12)));
            }),
            i(e => {
              e.h = e =>
                e.translateSelf(
                  0,
                  -2,
                  -8.5 * E((1 - R[10].g) * (1 - v(R[10].g, R[11].g)), v(R[10].g, R[11].g) * U(G(1.5 * C))) + 10,
                ), u(3, e => f(c, I(9 * e - 106, 1.7, -12)));
            }),
            f(
              M(
                S(p(b(), I(26.5, -1.6, 10).scale(20, 2.08, 3)), p(b(), I(26.5, -.6, 10).scale(19, 2, .5))),
                ...u(4, e => p(b(), I(13 + 9 * e + (1 & e), -.8, 9).scale(1.35, 1.35, 9))),
                ...u(3, e => p(b(), I(17 + 9 * e, -.8, 9).scale(1.35, 1.35, 9))),
              ),
              I(-123, 0, -12),
              F(.5, .5, .6, .2),
            ),
            m(I(-116, -1.4, -18).rotate(0, 180)),
            f(b(), I(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), F(.8, .8, .8, .2)),
            f(b(6), I(-116, -2.6, -16.5).scale(3.2, .8, 3), F(.6, .5, .7, .2)),
            f(b(), I(-115.5, -17, -12).scale(.5, 15, 2.2), F(.6, .6, .6, .3)),
            f(b(8), I(-114, -17, -2).scale(2, 15, 2), F(.6, .6, .6, .3)),
            f(b(8), I(-79, -17, -2).scale(2, 15, 2), F(1, 1, 1, .3)),
            f(b(), I(-77, -17, -50.5).scale(2.2, 15, .5), F(.6, .6, .6, .3)),
            u(3, e => {
              f(a(16), I(12 * e - 109, -9, -12), F(.6, .6, .6, .3)),
                f(a(16), I(-77, -9, -12 * e - 20).rotate(0, 90), F(.6, .6, .6, .3));
            }),
            f(M(
              p(b(12), I(-77, -14.5, -12).scale(4, 17.5, 4), F(.7, .7, .7, .2)),
              p(b(), I(-79, .1, -12).scale(3.5, 2, 1.3), F(.4, .5, .6, .2)),
              p(b(), I(-77, .1, -14).scale(1.5, 2, 2), F(.4, .5, .6, .2)),
              p(b(12), I(-77, 3.1, -12).scale(3, 5, 3), F(.4, .5, .6, .2)),
            )),
            f(b(), I(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), F(.6, .6, .6, .3)),
            f(b(9), I(-98, -18.4, -40).scale(2.5, 13.5, 2.5), F(.5, .5, .5, .3)),
            f(M(
              p(b(), I(-93, -5.8, -40).scale(9, 1, 5), F(.8, .8, .8, .1)),
              p(b(9), I(-98, -5.8, -40).scale(3, 8, 3), F(.7, .7, .7, .2)),
            )),
            m(I(-98, -4.4, -40).rotate(0, 90)),
            g(I(-115, .2, -12), [0, 0, 3.5]),
            g(I(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]),
            f(M(
              S(
                p(b(6, 0, 0, .6), I(-100, .7, 105.5).scale(8, 1, 11), F(.7, .7, .7, .2)),
                p(b(), I(-101.5, .7, 93.5).scale(10.5, 1, 2), F(.7, .7, .7, .2)),
              ),
              p(b(5), I(-100, .7, 113).scale(4, 3, 4), F(.7, .7, .7, .2)),
            )),
            u(4, a =>
              i(e => {
                e.h = e => {
                  let t = v(R[8].i, R[12].i);
                  e.translateSelf(
                    (2 < a ? 2 * (1 - t) + t : 0) - 100,
                    t * G(1.3 * C + 1.7 * a) * (3 + a / 3) + .7,
                    115 + (1 & a ? -1 : 1) * (1 - R[8].i) * (1 - R[12].i) * -7
                      + E(t, .05) * J(1.3 * C + 7 * a) * (4 - 2 * (1 - a / 3)),
                  );
                },
                  f(
                    b(6),
                    I(-14.6 - 4.8 * a - (2 < a ? 2 : 0), -a / 2.3, -21.5).scale(2.6, 1, 2.5),
                    F(.5 - a / 8, a / 12 + .5, .7, .3),
                  );
              })),
            i(e => {
              e.h = e => {
                let t = v(R[8].i, R[12].i);
                e.translateSelf(2.5 * (1 - t) - 139.7, -3 * (1 - R[8].g) + t * G(.8 * C) * -1 - 1.8, 93.5).rotateSelf(
                  J(1.3 * C) * (3 * t + 3),
                  0,
                );
              },
                f(M(p(b(10), Y(6, 2, 6), F(.1, .6, .5, .3)), p(b(10), Y(3.3, 6, 3.3), F(.1, .6, .5, .5)))),
                f(b(15, 1), I(-7.5).rotate(0, 90).scale(3, 2.3, 3), F(.4, .4, .4, .3)),
                f(b(10), I(-7.5).rotate(0, 90).scale(2, 2.5, 2), F(.3, .8, .7, .3)),
                f(b(5), I(-7.5).rotate(0, 90).scale(1, 3), F(.5, .5, .5, .5)),
                m(I(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180)),
                [-1, 1].map(e =>
                  f(n, j(90 * -e, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), F(1, 1, .8, .2))
                ),
                g(I(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
            }),
            [-1, 1].map(t => {
              f(b(12, 1), I(-7.5 * t - 100, 3.7, 96).scale(.8, 4, .8), F(.6, .24, .2, .5)),
                [7.2, 1.5].map(e => f(b(15, 1), I(-7.5 * t - 100, e + .7, 96).scale(1.1, .5, 1.1), F(.5, .24, .2, .4))),
                f(n, I(-5 * t - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * t - 90), F(1, 1, .8)),
                f(
                  M(
                    p(b(), I(-4 * t, 3.5, -.5).scale(4, 4, .7), F(.5, .5, .5, .4)),
                    p(b(), Y(3, 3, 10), F(.6, .24, .2, .5)),
                    p(b(28, 1), I(0, 3, -5).scale(3, 4, 10).rotate(90, 0), F(.6, .24, .2, .5)),
                    p(b(5), I(-5.3 * t, 7).rotate(90, 0).scale(1.7, 5, 1.7), F(.6, .24, .2, .5)),
                    p(b(5), I(-5.3 * t, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), F(.6, .24, .2, .5)),
                  ),
                  I(t - 100, .7, 97),
                );
            }),
            i(e => {
              e.h = e => e.translateSelf(-100, .6, 96.5).scaleSelf(.88, 1.2 - R[12].g), f(s);
            }),
            f(M(
              p(b(), I(-82.07, .8, 106).scale(11, .9, 2.2), F(.7, .7, .7, .1)),
              p(b(45, 1), I(-81, .7, 106).scale3d(7.7), F(.7, .7, .7, .1)),
            )),
            i(e => {
              e.h = e => e.translateSelf(-81, .6, 106).rotateSelf(0, 40 + x),
                f(M(
                  p(b(45, 1), Y(7.5, 1, 7.5), F(.45, .45, .45, .2)),
                  p(b(), I(0, 0, -5.5).scale(1.5, 3, 2.7), F(.45, .45, .45, .2)),
                )),
                f(b(8), I(0, 2).scale(3, 1.5, 3).rotate(0, 22), F(.7, .7, .7, .1)),
                f(b(5), I(0, 2).scale(1, 2), F(.3, .3, .3, .2)),
                g(I(0, 3), ...j1(14).map(({ x: e, z: t }) => [5.6 * e, 5.6 * t, 2]));
            }),
            i(e => {
              e.h = e => e.translateSelf(-65.8, .8, 106).rotateSelf(0, s1),
                [-1, 1].map(e =>
                  f(n, j(0, 90).translate(-5 * e, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90), F(1, 1, .8))
                ),
                f(M(p(b(28, 1), I(0, 2).scale(7.5, 1, 7.5), F(.35, 0, 0, .3)), p(b(), Y(9, 5, 2), F(.3, 0, 0, .3)))),
                f(p(b(28, 1), Y(7.5, 1, 7.5), F(.45, .45, .45, .2))),
                f(p(b(5), I(0, 1).scale(1, .2), F(.3, .3, .3, .2)));
            }),
            i(e => {
              e.h = e => e.translateSelf(-50.7, .8, 106).rotateSelf(0, 180 - s1),
                f(M(
                  p(b(28, 1), I(0, 2).scale(7.5, 1, 7.5), F(.35, 0, 0, .3)),
                  p(b(), I(7).scale(9, 5, 2), F(.3, 0, 0, .3)),
                  p(b(), I(0, 0, 7).scale(2, 5, 9), F(.3, 0, 0, .3)),
                )),
                f(p(b(28, 1), Y(7.5, 1, 7.5), F(.45, .45, .45, .2))),
                f(p(b(5), I(0, 1).scale(1, .2), F(.3, .3, .3, .2)));
            }),
            i(e => {
              e.h = e => e.translateSelf(-50.7, .8, 91).rotateSelf(0, 270 + s1),
                f(M(
                  p(b(28, 1), I(0, 2).scale(7.5, 1, 7.5), F(.35, 0, 0, .3)),
                  p(b(), I(7).scale(9, 5, 2), F(.3, 0, 0, .3)),
                  p(b(), I(0, 0, -7).scale(2, 5, 9), F(.3, 0, 0, .3)),
                )),
                f(p(b(28, 1), Y(7.5, 1, 7.5), F(.45, .45, .45, .2))),
                f(p(b(5), I(0, 1).scale(1, .2), F(.3, .3, .3, .2)));
            }),
            f(b(), I(-58, 1, 106).scale(2, .65, 2), F(.7, .7, .7, .2)),
            f(b(), I(-50.7, 1, 99).scale(2, .65, 1), F(.7, .7, .7, .2)),
            f(b(), I(-42, .4, 91).scale(5, 1, 2.5), F(.7, .7, .7, .3)),
            f(b(), I(-34.2, .4, 91).scale(3, 1, 3), F(.7, .7, .7, .3)),
            m(I(-34, 2.7, 96).rotate(-12, 0)),
            f(b(5), I(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), F(.2, .5, .5, .6)),
            [F(.1, .55, .45, .2), F(.2, .5, .5, .3), F(.3, .45, .55, .4)].map((t, a) =>
              i(e => {
                e.h = e => {
                  e.translateSelf(
                    0,
                    (1 - R[13].i) * (1 - R[14].i) * (a ? 0 : 3) + v(R[13].i, R[14].i) * G(1.5 * C + 1.5 * a) * 4,
                  );
                },
                  f(b(), I(-23.5, .5, 91 + 6.8 * a).scale(1 === a ? 2 : 3.3, 1, 3.3), t),
                  2 === a && f(b(), I(-29.1, .4, 91).scale(2.1, 1, 3), F(.7, .7, .7, .3)),
                  1 === a && f(b(), I(-16.1, .5, 103.5).rotate(-3.5).scale(3.9, .8, 2).skewX(-1), F(.6, .6, .7, .3));
              })
            ),
            [-1, 1].map(e => f(n, I(-8 * e, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90), F(1, 1, .8))),
            u(3, e =>
              f(
                a(24.7 - .7 * (1 & e)),
                I(6 * e - 6, 4 - (1 & e), 111 - .2 * (1 & e)),
                1 & e ? F(.5, .5, .5, .3) : F(.35, .35, .35, .5),
              )),
            f(M(
              p(b(6, 0, 0, .3), I(0, -.92, 95).scale(14, 2, 14), F(.8, .8, .8, .2)),
              p(b(5), I(0, 0, 95).scale3d(6), F(.3, .3, .3, .5)),
            )),
            m(I(0, 1.7, 82).rotate(0, 180)),
            f(b(5), I(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), F(.5, .3, .3, .4)),
            f(b(6), I(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), F(.5, .6, .7, .3)),
            f(b(), I(0, 16, 129).scale(1.5, 1, 2), F(.5, .6, .7, .3)),
            f(b(7), I(0, 16.2, 133).scale(5, 1, 5), F(.4, .5, .6, .4)),
            f(M(
              S(
                p(b(), I(0, 16, 110.5).scale(12, 1, 3), F(.5, .3, .3, .4)),
                p(b(), I(0, 16, 111).scale(3, 1, 3.8), F(.5, .3, .3, .4)),
              ),
              p(b(5), I(0, 16, 103.5).scale(5.5, 5, 5.5), F(.5, .3, .3, .4)),
            )),
            i(e => {
              e.h = e => e.translateSelf(-2 * G(C)).rotate(25 * G(C)),
                f(b(3), I(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), F(.5, .3, .3, .4)),
                [22, 30].map(e => {
                  f(b(6), I(0, 16, e + 95).scale(3, 1, 2.3).rotate(0, 90), F(.7, .7, .7, .4)),
                    f(b(), I(0, 6.2, e + 95).scale(.5, 11, .5), F(.5, .3, .3, .4));
                });
            }),
            i(e => {
              e.h = e => {
                let t = v(v((R[14].g + R[14].i) / 2, R[13].i), (R[15].g + R[15].i) / 2);
                e.translateSelf(0, 16 * t, 8.5 * L(2 * t - 1) + 95);
              },
                f(b(5), Y(5, 1.1, 5), F(.5, .3, .3, .4)),
                f(b(5), Y(5.5, .9, 5.5), F(.25, .25, .25, .4)),
                m(I(0, 1.5, -1).rotate(0, 180));
            }),
            g(I(0, 3, 95), ...j1(9).map(({ x: e, z: t }) => [9 * e, 9 * t, 4])),
            g(I(0, 19, 134), [0, 0, 3.5]);
        }),
        i(() => {
          [0, 180].map(e => f(n, j(0, e).translate(.2, 1.32).rotate(-30).scale(.2, .6, .2), F(1, 1, .8))),
            f(l(20), I(0, 1).scale(.5, .5, .5), F(1, .3, .4)),
            f(l(30), Y(.7, .8, .55), F(1, .3, .4));
          let t = p(M(b(15, 1), p(b(), I(0, 0, 1).scale(2, 2, .5))), j(-90, 0).scale(.1, .05, .1), F(.3, .3, .3));
          [-1, 1].map(e => f(t, I(.2 * e, 1.2, .4).rotate(0, 20 * e, 20 * e))),
            f(b(), I(0, .9, .45).scale(.15, .02, .06), F(.3, .3, .3));
        }),
        [-1, 1].map(e =>
          i(() => {
            f(b(20, 1), I(.3 * e, -.8).scale(.2, .7, .24), F(1, .3, .4));
          })
        ),
        i(() => {
          f(b(6, 1), Y(.13, 1.4, .13), F(.3, .3, .5, .1)),
            f(b(10), I(0, 1).scale(.21, .3, .21), F(1, .5, .2)),
            f(b(3), I(0, -1).rotate(90, 90).scale(.3, .4, .3), F(.2, .2, .2, .1));
        }, 0),
        i(() => {
          f(b(6).slice(0, -1), Y(.77, 1, .77), F(1, .3, .5));
        }, 0),
        i(() => {
          f(
            l(30, 24, (e, t, a) => {
              let l = t / 24, r = e * W * 2 / 30, s = G(l ** .6 * W / 2);
              return e = l * l * G(e * W * 14 / 30) / 4,
                23 < t
                  ? { x: a.D = 0, y: -.5, z: 0 }
                  : { x: J(r) * s, y: J(l * W) - l - e, z: G(r) * s + G(e * W * 2) / 4 };
            }),
            Y(.7, .7, .7),
            F(1, 1, 1),
          ), [-1, 1].map(e => f(l(12), I(.16 * e, .4, -.36).scale3d(.09)));
        }, 0);
    });
});
