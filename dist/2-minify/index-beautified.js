let S,
  j,
  C,
  D,
  F,
  Z,
  $,
  e1,
  a1,
  A,
  t1,
  M,
  I,
  s,
  l1,
  r1,
  x,
  y,
  s1,
  T,
  O,
  Q,
  c1,
  B = 0,
  o1 = 0,
  R = 0,
  i1 = 0,
  n1 = 0,
  f1 = 0,
  m1 = 0,
  h1 = 0,
  u1 = 0,
  X = 0,
  q = 0,
  H = 0,
  g1 = 14,
  N = 180,
  v1 = .1,
  t = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  L = [],
  E = [],
  x1 = [],
  p = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  { PI: W, atan2: y1, sin: z, cos: w, exp: a, random: p1 } = Math,
  U = e => e < 0 ? -e : e,
  d1 = (e, a) => e < a ? e : a,
  z1 = (e, a) => a < e ? e : a,
  w1 = (e, a) => U(e) > a ? e : 0,
  K = (e, a = 0, t = 1) => e < a ? a : t < e ? t : e,
  S1 = e => y1(z(e * G1), w(e * G1)) / G1,
  A1 = (e, a, t) => e + (2 * (a = (a - e) % 360) % 360 - a) * K(t) || 0,
  M1 = (e, a, t) => (0 < t ? t < 1 ? e + (a - e) * t : a : e) || 0,
  I1 = (e, a) => (e = K(e), M1(e, 1 - e, a)),
  j1 = (e, a, t = 0) => (e * e + a * a + t * t) ** .5,
  Y = (
    e,
    a = l,
    t = 0,
  ) => (t *= 16,
    a[t++] = e.m11,
    a[t++] = e.m12,
    a[t++] = e.m13,
    a[t++] = e.m14,
    a[t++] = e.m21,
    a[t++] = e.m22,
    a[t++] = e.m23,
    a[t++] = e.m24,
    a[t++] = e.m31,
    a[t++] = e.m32,
    a[t++] = e.m33,
    a[t++] = e.m34,
    a[t++] = e.m41,
    a[t++] = e.m42,
    a[t++] = e.m43,
    a[t] = e.m44,
    a),
  P = (
    e = d,
    a = k,
  ) => (a.m11 = e.m11,
    a.m12 = e.m12,
    a.m13 = e.m13,
    a.m14 = e.m14,
    a.m21 = e.m21,
    a.m22 = e.m22,
    a.m23 = e.m23,
    a.m24 = e.m24,
    a.m31 = e.m31,
    a.m32 = e.m32,
    a.m33 = e.m33,
    a.m34 = e.m34,
    a.m41 = e.m41,
    a.m42 = e.m42,
    a.m43 = e.m43,
    a.m44 = e.m44,
    a),
  V = (e = 0, a = 0, t = 0, l = 1) => {
    T = k.m11 * e + k.m21 * a + k.m31 * t + k.m41 * l,
      O = k.m12 * e + k.m22 * a + k.m32 * t + k.m42 * l,
      Q = k.m13 * e + k.m23 * a + k.m33 * t + k.m43 * l,
      c1 = k.m14 * e + k.m24 * a + k.m34 * t + k.m44 * l;
  },
  c = (e, a, t) => d.translate(e, a, t),
  n = (e, t) => Array.from(Array(e), (e, a) => t(a)),
  g = (e, a, t) => (e.A = t, e.s = a, e),
  Y1 = (e, a, t = e.s) => (P(a), g(e.map(({ x: e, y: a, z: t }) => (V(e, a, t), { x: T, y: O, z: Q })), t, e.A)),
  o = (e, a, t) => e.map(e => Y1(e, a, t)),
  k1 = (t, l = 0) =>
    n(t, e => {
      let a = w(2 * W * e / t);
      return { x: z(2 * W * e / t), y: 0, z: U(a) < .01 ? a : a < 0 ? a - l : a + l };
    }),
  C1 = (l, r, s) =>
    l.map((e, a, { length: t }) => g([e, r[t - a - 1], r[t - (a + 1) % t - 1], l[(a + 1) % t]], l.s, s)),
  i = (
    e,
    a,
    t = 0,
    l,
  ) => (e = e ? k1(e, l) : p,
    l = Y1(e, c(0, 1).scale3d(0 < t ? t : 1)),
    e = Y1(e, c(0, -1).scale3d(t < 0 ? -t : 1)).reverse(),
    [...C1(e, l, a), l, e]),
  D1 = (l, r = l, s = (e, a) => (a *= W / r, { x: w(e *= 2 * W / l) * z(a), y: w(a), z: z(e) * z(a) })) => {
    let c = [];
    for (let t = 0; l > t; t++) {
      for (let a = 0; r > a; a++) {
        let e = g([], 0, 1);
        c.push(e),
          e.push(s(t, a, e)),
          a && e.push(s((t + 1) % l, a, e)),
          r - 1 > a && e.push(s((t + 1) % l, a + 1 % r, e)),
          e.push(s(t, a + 1 % r, e));
      }
    }
    return c;
  },
  F1 = e => 1 - a(-R * e),
  J = (e, a, t) => M1(e, a, F1(t)),
  T1 = e => {
    h4.innerHTML += ".", setTimeout(e);
  },
  O1 = e => z(e * W * 2),
  Q1 = (e, a, t, l) =>
    new DOMMatrix([t, 0, 0, 0, 0, l, 0, 0, 0, 0, (a + e) / (e - a), -1, 0, 0, 2 * a * e / (e - a), 0]),
  B1 = (e, a) => {
    1 / 0 > v1 && (v1 = B + a, h4.innerHTML = e);
  },
  R1 = () => {
    h3.innerHTML = "Souls: "
      + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][
        a1 = x1.reduce((e, a) => e + a.i, 0)
      ] + " / XIII";
  },
  X1 = () => {
    localStorage["Dante-22"] = JSON.stringify([E.map(e => e.i), x1.map(e => e.i), g1, M, B]);
  },
  f = (e, a, t, l = 0) => 255 * l << 24 | 255 * t << 16 | 255 * a << 8 | 255 * e,
  _ = (e, a = 0, t = 0) => {
    let l = P(d, L[++I].l);
    return l.m41 = e, l.m42 = a, l.m43 = t, l;
  },
  m = () => {
    let l = [];
    s = (e, a = d, t) => l.push(...o(e, a, t)), L.push({ l: new DOMMatrix(), j: l });
  },
  h = a => {
    let t = () => {
        let e = t.h = J(t.h, t.i, 4);
        t.g = J(t.g, t.i, 1),
          P(P(l).multiplySelf(a), _(0)).rotateSelf(50 * e - 25, 0).translateSelf(0, 1).m44 = e,
          D && (V(), j1(X - T, q - O, H - Q) < 3)
            ? t.i
              ? .7 < e && (t.i = 0, g1 = r, B1("* click *", 1), X1())
              : e < .3 && (t.i = 1, g1 = r, B1("* click *", 1), X1())
            : t.i && .8 < e && 14 === r && (t.i = 0,
              a1 < 13
                ? B1("Not leaving now, there are souls to catch!", 3)
                : A || (B1("Well done. They will be punished.<br>Thanks for playing", 1 / 0), A = 1));
      },
      l = L.at(-1).l,
      r = E.length;
    t.l = l,
      t.D = a,
      E.push(t),
      s(i(5), a.translate(-.2).rotate(90, 90).scale(.4, .1, .5), f(.4, .5, .5)),
      s(i(5), a.translate(.2).rotate(90, 90).scale(.4, .1, .5), f(.4, .5, .5)),
      s(i(), a.translate(0, -.4).scale(.5, .1, .5), f(.5, .5, .4));
  },
  u = (o, ...i) => {
    let n,
      f,
      m,
      h,
      u = 0,
      g = 0,
      v = 1,
      p = -1,
      d = () => {
        if (!d.i) {
          let l, e, a, t, r, s = 1, c = 1 / 0;
          for (let t = 0; i.length > t; t++) {
            let e = i[t], a = j1(S - e[0], A - e[1]);
            s = d1(s, a / e[2]), (a -= e[2]) < 0 ? l = 1 : c > a && (c = a, b = e);
          }
          l
          || (e = S - b[0],
            a = A - b[1],
            t = j1(e, a),
            r = y1(-a, e),
            v && (h = K(h / (1 + p1())), g = (p1() - .5) * W / 2),
            r += g,
            p = -w(r),
            u = z(r),
            .1 < t && (t = d1(t, b[2]) / t, S = e * t + b[0], A = a * t + b[1])),
            v = l,
            h = J(h, 3 + 6 * (1 - s), 3 + s),
            M = J(M, S = J(S, S + p, h), h),
            I = J(I, A = J(A, A + u, h), h),
            n = A1(n, y1(M - f, I - m) / G1 - 180, F1(3)),
            P(j).multiplySelf(o).translateSelf(f = M, 0, m = I).rotateSelf(0, n, 7 * z(1.7 * B)),
            V(),
            j1(X - T, q - O, H - Q) < 1.6
            && (d.i = 1,
              B1(
                [
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
                6,
              ),
              R1(),
              X1());
        }
        d.i
        && P(L[35].l).translateSelf(
          e % 4 * 1.2 - 1.7 + z(B + e) / 7,
          -2,
          1.7 * (e / 4 | 0) - 5.5 + U(e % 4 - 2) + w(B / 1.5 + e) / 6,
        ), Y(k, J1, 28 + e);
      },
      b = i[0],
      [S, A] = b,
      [M, I] = b,
      j = L.at(-1).l,
      e = x1.length;
    x1.push(d);
  },
  q1 = e => {
    let a, t = 0, l = 0, r = 0, s = e.at(-1);
    for (a of e) t += (s.y - a.y) * (s.z + a.z), l += (s.z - a.z) * (s.x + a.x), r += (s.x - a.x) * (s.y + a.y), s = a;
    return a = j1(t, l, r), t /= a, l /= a, r /= a, { x: t, y: l, z: r, w: t * s.x + l * s.y + r * s.z };
  },
  H1 = ({ x: e, y: a, z: t }, l) => e * l.x + a * l.y + t * l.z,
  N1 = (l, e) => {
    let r, s, c, o = e.j, i = e.u;
    for (let t = 0; o.length > t; ++t) {
      if ((r = H1(l, o[t]) - l.w) < -8e-5 ? c = e : 8e-5 < r && (s = e), c && s) {
        s = [], c = [], t = o.at(-1);
        let a = H1(t, l) - l.w;
        for (let e of o) {
          r = H1(e, l) - l.w,
            a < 8e-5 && c.push(t),
            -8e-5 < a && s.push(t),
            (8e-5 < a && r < -8e-5 || a < -8e-5 && 8e-5 < r)
            && (a /= r - a,
              t = { x: t.x + (t.x - e.x) * a, y: t.y + (t.y - e.y) * a, z: t.z + (t.z - e.z) * a },
              s.push(t),
              c.push(t)),
            t = e,
            a = r;
        }
        s = 2 < s.length && { j: g(s, o.s, o.A), u: i, v: e }, c = 2 < c.length && { j: g(c, o.s, o.A), u: i, v: e };
        break;
      }
    }
    return { x: s, y: c };
  },
  L1 = (e, a, t = q1(a.j)) => {
    let l, r;
    return e
      ? ({ x: l, y: r } = N1(e, a), l || r || e.j.push(a), l && (e.o = L1(e.o, l, t)), r && (e.m = L1(e.m, r, t)))
      : e = { x: t.x, y: t.y, z: t.z, w: t.w, j: [a], o: 0, m: 0 },
      e;
  },
  E1 = (a, r, s) => {
    let c = [],
      o = (e, a) => {
        let { x: t, y: l } = N1(e, a);
        t || l || (0 < s * H1(e, r) ? t = a : l = a), t && (e.o ? o(e.o, t) : c.push(t)), l && e.m && o(e.m, l);
      };
    for (let e of r.j) o(a, e);
    return c;
  },
  U1 = (e, a) => e && (a(e), U1(e.o, a), U1(e.m, a)),
  W1 = e => (U1(e, a => {
    let e = a.m;
    a.m = a.o, a.o = e, a.x *= -1, a.y *= -1, a.z *= -1, a.w *= -1;
    for (let e of a.j) e.u = !e.u;
  }),
    e),
  K1 = e => e.length ? e.reduce((e, a) => L1(e, { j: a, u: 0, v: 0 }), 0) : e,
  P1 = (...e) =>
    e.reduce((l, a) => {
      let r = [];
      if (l = K1(l), a) {
        a = K1(a), U1(l, e => e.j = E1(a, e, 1)), U1(a, e => r.push([e, E1(l, e, -1)]));
        for (let [a, t] of r) for (let e of t) L1(l, e, a);
      }
      return l;
    }),
  v = (e, ...a) => {
    let t = e => {
        let a;
        return e.v && ((a = r.get(e.v)) ? (l.delete(a), e = t(e.v)) : r.set(e.v, e)), e;
      },
      l = new Map(),
      r = new Map();
    return e = W1(P1(W1(K1(e)), ...a)),
      U1(e, a => {
        for (let e of a.j) l.set(t(e), e.u);
      }),
      Array.from(l, ([{ j: e }, a]) => {
        let t = e.map(({ x: e, y: a, z: t }) => ({ x: e, y: a, z: t }));
        return g(a ? t.reverse() : t, e.s, e.A);
      });
  },
  V1 = (e, a, t) => {
    j
      ? 1100 < hC.width && e.d97(4, L[55].C - L[53].B, 5123, 2 * L[53].B)
      : (e.das(4, L[a].C - L[a].B, 5123, 2 * L[a].B, x1.length), e.d97(4, (t ? L[55].C : L[53].B) - 3, 5123, 6));
  },
  d = new DOMMatrix(),
  k = new DOMMatrix(),
  l = new Float32Array(16),
  J1 = new Float32Array(760),
  _1 = new Uint8Array(65536),
  G1 = W / 180,
  b = hC.getContext("webgl2", { powerPreference: "high-performance" }),
  G = hD.getContext("webgl2", {
    powerPreference: "high-performance",
    preserveDrawingBuffer: !0,
    desynchronized: !0,
    antialias: !1,
  });
for (let a in G) {
  [b, G].map(e => e[a[0] + [...a].reduce((e, a, t) => (e * t + a.charCodeAt(0)) % 434, 0).toString(36)] = e[a]);
}
T1(() => {
  let e = 0,
    g = () => {
      2 == ++e && (e => {
        let h = [{}, {}, {}, {}, {}, {}, {}, {}],
          a = (
            t,
            e,
            a =
              "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],l.w==0.)l=mix(vec4(1,.5,.2,0),l,r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}",
          ) => {
            let l = {}, r = (e, a) => (a = t.c6x(a), t.s3c(a, e), t.c6a(a), a), s = t.c1h();
            return t.abz(s, r(a, 35633)),
              t.abz(s, r(e, 35632)),
              t.l8l(s),
              e => e ? l[e] || (l[e] = t.gan(s, e)) : t.u7y(s);
          },
          l = a => {
            requestAnimationFrame(l);
            let e = (a - (S || a)) / 1e3;
            if (o1 += e, B += R = j ? 0 : d1(.055, e), S = a, 0 < R) {
              e = (e, a, t) => _(e + z(B + 2) / 5, a + z(.8 * B) / 5, t).rotateSelf(2 * z(B), z(.7 * B), z(.9 * B)),
                v1 && B > v1 && (v1 = 0, h4.innerHTML = ""),
                M = J(M, E[15].g, .2 + .3 * U(2 * E[15].g - 1)),
                t1 = A ? (F = 0, J(t1, -9, .015)) : J(t1, K(B / 3), 1),
                e1(),
                I = 1,
                r1 = I1(E[13].h, E[8].h),
                s1 = M1(J(s1, 0, 1), S1(s1 + 60 * R), E[2].h - E[3].g),
                x = M1(J(x, 0, 5), S1(x + 56 * R), r1),
                y = M1(J(y, 0, 4), S1(y + 48 * R), r1),
                _(0, 270 * (E[1].h - 1) + (2 + 5 * w(1.5 * B)) * (1 - E[10].h)),
                a = d1(1 - E[11].g, E[10].g),
                _(a * z(.6 * B + 1.2) * 12, 0, 35),
                _(a * z(.6 * B - 1.2) * 8.2, 0, 55),
                _(a * z(.6 * B) * 12, 0, 45),
                _(9.8 * (1 - a)),
                a = K(1 - 5 * a) * I1(E[11].h, E[2].h),
                _(0, a * z(1.35 * B) * 4),
                _(0, 0, a * z(.9 * B) * 8),
                _(0, -6.5 * E[11].g),
                a = I1(E[4].g, E[3].g),
                _(0, a * z(B) * 5 + 3.5 * (1 - z1(E[3].h, E[4].h))),
                _(0, a * z(B + 3) * 6, a * z(.6 * B + 1) * 6),
                _(0, -7.3 * E[4].g),
                a = I1(E[6].h, E[7].h),
                _(0, -2, 10 - 8.5 * a * U(z(1.1 * B))),
                _(0, -2, 10 - 8.5 * a * U(z(2.1 * B))),
                _(0, -2, 10 - 8.5 * z1(a * U(z(1.5 * B)), (1 - E[6].h) * (1 - a)));
              var t = I1(E[5].g, E[13].g);
              for (a = 0; a < 4; a++) {
                _(
                  (2 < a ? 2 * (1 - t) + t : 0) - 100,
                  t * z(1.3 * B + 1.7 * a) * (3 + a / 3) + .7,
                  115 - 7 * (1 - E[5].g) * (1 - E[13].g) * (1 & a ? -1 : 1)
                    + z1(.05, t) * w(1.3 * B + 7 * a) * (4 - 2 * (1 - a / 3)),
                );
              }
              a = I1(E[8].g, E[9].g);
              for (let e = 0; e < 3; ++e) {
                _(0, a * z(1.5 * B + 1.5 * e) * 4 + (e ? 0 : 3 * (1 - E[8].g) * (1 - E[9].g)));
              }
              for (
                a = I1(I1((E[9].h + E[9].g) / 2, E[8].g), (E[12].h + E[12].g) / 2),
                  _(0, 16 * a, 95 + 8.5 * K(2 * a - 1)),
                  _(0, -4.7 * E[0].h, -15),
                  _(0, -4.7 * E[10].h, 15),
                  _(-99.7, -1.9 - 5.5 * E[3].h, 63.5),
                  _(-100, .6 - 5.8 * E[13].h, 96.5),
                  _(-75, 3 * (1 - E[2].g) * (1 - E[3].h), 55).rotateSelf(180 * (1 - E[2].g) + s1, 0),
                  _(2.5 * (1 - t) - 139.7, -3 * (1 - E[5].h) - t * z(.8 * B) - 1.8, 93.5).rotateSelf(
                    w(1.3 * B) * (3 + 3 * t),
                    0,
                  ),
                  _(-2 * z(B)).rotateSelf(25 * z(B)),
                  _(-81, .6, 106).rotateSelf(0, 40 + x),
                  _(-65.8, .8, 106).rotateSelf(0, y),
                  _(-50.7, .8, 106).rotateSelf(0, 180 - y),
                  _(-50.7, .8, 91).rotateSelf(0, 270 + y),
                  e(-12, 4.2, 40 * t1 - 66),
                  e(-123, 1.4, 55 - 65 * M),
                  e = 0;
                e < 16;
                ++e
              ) {
                e < 13 && x1[e](), E[e]();
              }
              for (l1(), e = 0; e < 28; ++e) Y(L[28 + e].l, J1, e);
              for (let e, a = 0, t = 656; a < 26; ++a, ++t) {
                e = L[2 + a].l, J1[t++] = e.m41, J1[t++] = e.m42, J1[t++] = e.m43;
              }
              G.cbf(!0, !0, !0, !0),
                G.c4s(16640),
                G.u3a(s("j"), J1),
                G.cbf(!0, !1, !0, !1),
                G.uae(s("b"), !1, Y(P().rotateSelf(0, 180).invertSelf().translateSelf(-X, -q, .3 - H))),
                V1(G, 56),
                G.c4s(256),
                G.cbf(!1, !0, !1, !0),
                G.uae(s("b"), !1, Y(P().translateSelf(-X, -q, -H - .3))),
                V1(G, 56),
                G.f1s(),
                D = 0;
            }
            p(),
              b.u3a(p("j"), J1),
              b.b6o(36160, r),
              b.v5y(0, 0, 2048, 2048),
              b.ubh(p("g"), 4),
              b.ubh(p("h"), 4),
              b.uae(p("a"), !1, Y(d)),
              o(54.7),
              V1(b, 57, !F),
              i(126),
              V1(b, 57, !F),
              b.b6o(36160, null),
              b.v5y(0, 0, b.drawingBufferWidth, b.drawingBufferHeight),
              b.c4s(16640),
              e = f1,
              t = m1,
              a = h1,
              j
                ? (P().rotateSelf(0, 40 * z(o1) - 80, -8),
                  Y(k, J1, 25),
                  Y(k, J1, 26),
                  Y(k, J1, 27),
                  P(Z).invertSelf(),
                  V(3.6, 3.5),
                  e = T,
                  t = O,
                  a = 5,
                  P(d, g).rotateSelf(-20, 0).invertSelf().translateSelf(-e, -t, -a).rotateSelf(0, 99))
                : P(d, g).rotateSelf(-u1, -N).invertSelf().translateSelf(-e, -t, -a),
              b.ubh(p("g"), 0),
              b.ubh(p("h"), 1),
              b.ubu(p("k"), e, t, a),
              b.uae(p("a"), !1, Y(Z)),
              b.uae(p("b"), !1, Y(g)),
              b.uae(p("i"), !1, v),
              V1(b, 57, !F),
              c(),
              b.uae(c("b"), !1, Y(P(g).invertSelf())),
              b.ubu(c("j"), b.drawingBufferWidth, b.drawingBufferHeight, o1),
              b.d97(4, 3, 5123, 0);
          },
          u = new DOMMatrix(),
          g = new DOMMatrix(),
          v = new Float32Array(32),
          r = b.c5w(),
          p = a(
            b,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          s = a(
            G,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<3.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
          ),
          c = a(
            b,
            "#version 300 es\nprecision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}",
            "#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}",
          ),
          [o, i] = n(2, e => {
            let a = b.c25();
            return b.a4v(33984 + e),
              b.b9j(3553, a),
              b.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              b.t2z(3553, 10241, 9729),
              b.t2z(3553, 10240, 9729),
              b.t2z(3553, 34893, 515),
              b.t2z(3553, 34892, 34894),
              b.t2z(3553, 10243, 33071),
              b.t2z(3553, 10242, 33071),
              l => {
                let t = 0, r = 0, s = 0, c = 1 / 0, o = 1 / 0, i = 1 / 0, n = -1 / 0, f = -1 / 0, m = -1 / 0;
                b.fas(36160, 36096, 3553, a, 0),
                  b.c4s(256),
                  P().scale3dSelf(l *= 1.1).multiplySelf(P($[e], u).multiplySelf(g).invertSelf());
                for (let a = 0; a < 8; ++a) {
                  let e = h[a];
                  V(4 & a ? 1 : -1, 2 & a ? 1 : -1, 1 & a ? 1 : -1),
                    t -= e.x = (0 | T) / l / c1,
                    r -= e.y = (0 | O) / l / c1,
                    s -= e.z = (0 | Q) / l / c1;
                }
                for (P().rotateSelf(298, 139).translateSelf(t / 8, r / 8, s / 8), l = 0; l < 8; ++l) {
                  let { x: e, y: a, z: t } = h[l];
                  V(e, a, t), n = z1(n, T), f = z1(f, O), m = z1(m, Q), c = d1(c, T), o = d1(o, O), i = d1(i, Q);
                }
                l = 10 + e,
                  i *= i < 0 ? l : 1 / l,
                  m *= 0 < m ? l : 1 / l,
                  b.uae(
                    p("b"),
                    !1,
                    Y(
                      P(d, u).scaleSelf(2 / (n - c), 2 / (f - o), 2 / (i - m)).translateSelf(
                        (n + c) / -2,
                        (f + o) / -2,
                        (i + m) / 2,
                      ).multiplySelf(k),
                      v,
                      e,
                    ),
                    16 * e,
                    16,
                  );
              };
          });
        b.a4v(33986),
          b.b9j(3553, b.c25()),
          b.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, e),
          b.t2z(3553, 10241, 9987),
          b.t2z(3553, 10240, 9729),
          b.gbn(3553),
          b.b6o(36160, r),
          b.d45([0]),
          b.r9l(0),
          p(),
          b.ubh(p("q"), 2),
          c(),
          b.ubh(c("q"), 2),
          b.c5t(0, 0, 0, 1),
          b.d4n(515),
          b.e8z(2929),
          b.e8z(2884),
          G.e8z(2929),
          G.e8z(2884),
          G.v5y(0, 0, 128, 128),
          s(),
          G.uae(s("a"), !1, Y(Q1(1e-4, 2, 1.2, .4))),
          (() => {
            let e,
              i,
              n,
              f,
              m,
              h,
              u,
              g,
              v,
              p,
              d,
              b,
              S,
              a,
              t,
              l,
              r = !0,
              s = [],
              c = () => {
                b4.innerHTML = "Music: " + r, l && (j || !r ? l.disconnect() : l.connect(t.destination));
              },
              o = () => {
                let e = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
                $ = [Q1(.3, 55, e, 1.732051), Q1(55, 181, e, 1.732051)],
                  Z = Q1(.3, 181, e, 1.732051),
                  f = g = void 0,
                  s.length =
                    D =
                    a =
                    b =
                    S =
                    i1 =
                    n1 =
                      0,
                  document.hidden && A(!0);
              },
              A = e => {
                if (j !== e) {
                  if (j = e, o(), document.body.className = e ? "l m" : "l", e) {
                    try {
                      document.exitFullscreen().catch(() => 0), document.exitPointerLock();
                    } catch {}
                  }
                  c();
                }
              },
              M = e => {
                try {
                  t || (t = new AudioContext(), (l = t.createBufferSource()).buffer = C, l.loop = !0, l.start()),
                    document.body.requestFullscreen().catch(() => 0);
                } catch {}
                A(!1), F = e;
              },
              I = (e, a) => e.buttons[a]?.pressed || 0 < e.buttons[a]?.value ? 1 : 0;
            oncontextmenu = () => !1,
              b1.onclick = () => {
                M();
              },
              b2.onclick = () => {
                M(1);
              },
              b5.onclick = () => A(!0),
              b4.onclick = () => {
                r = !r, c();
              },
              b3.onclick = () => {
                confirm("Restart game?") && (localStorage["Dante-22"] = "", location.reload());
              },
              onclick = e => {
                if (!j && (e.target === hC && (D = 1), F)) {
                  try {
                    hC.requestPointerLock();
                  } catch {}
                }
              },
              onkeyup = onkeydown = e => {
                let a;
                e.repeat
                  || (a = {
                    KeyE: 0,
                    Space: 0,
                    Enter: 0,
                    Escape: 1,
                    KeyA: 2,
                    ArrowLeft: 2,
                    KeyD: 3,
                    ArrowRight: 3,
                    KeyW: 4,
                    ArrowUp: 4,
                    KeyS: 5,
                    ArrowDown: 5,
                  }[e.code],
                    (s[a] = !!e.type[5] && !0) && (0 === a && (D = 1), 1 === a && A(!0)));
              },
              onmousemove = ({ movementX: e, movementY: a }) => {
                F && (e || a) && (N += .1 * e, u1 += .1 * a);
              },
              hC.ontouchstart = l => {
                if (!j) {
                  for (let { pageX: e, pageY: a, identifier: t } of l.changedTouches) {
                    F && e > hC.clientWidth / 2
                      ? void 0 === g && (v = 0, h = e, u = a, g = t, d = u1, p = N)
                      : void 0 === f && (m = 0, i = e, n = a, f = t);
                  }
                  e = o1;
                }
              },
              hC.ontouchmove = l => {
                if (!j) {
                  for (let { pageX: e, pageY: a, identifier: t } of l.changedTouches) {
                    var r, s, c, o;
                    g === t && (u1 = d + (a - u) / 2.3, N = p + (e - h) / 2.3, v = 1),
                      f === t
                      && (t = (i - e) / 19,
                        r = U(t),
                        c = U(s = (n - a) / 19),
                        (o = .3 < z1(r, c)) && (m = 1),
                        b = (o && .2 < r) * K(t, -1),
                        S = (o && .2 < c) * K(s, -1),
                        2 < r && (i = 19 * (t < 0 ? -1 : 1) + e),
                        2 < c && (n = 19 * (s < 0 ? -1 : 1) + a));
                  }
                }
              },
              hC.ontouchend = a => {
                let t;
                document.activeElement === document.body && a.preventDefault();
                for (let e of a.changedTouches) {
                  e.identifier === g
                    ? (g = void 0, v || (t = 1), v = 0)
                    : e.identifier === f
                    ? (f = void 0, S = b = 0, m || (t = 1), m = 0)
                    : t = 1;
                }
                a.target === hC && t && e && .02 < (a = o1 - e) && a < .7 && (D = 1);
              },
              e1 = () => {
                i1 = S + (s[4] ? 1 : 0) - (s[5] ? 1 : 0), n1 = b + (s[2] ? 1 : 0) - (s[3] ? 1 : 0);
                let e = navigator.getGamepads()[0];
                e
                  && (F && (u1 += R * w1(e.axes[3], .3) * 80, N += R * w1(e.axes[2], .3) * 80),
                    i1 += I(e, 12) - I(e, 13) - w1(e.axes[1], .2),
                    n1 += I(e, 14) - I(e, 15) - w1(e.axes[0], .2),
                    I(e, 9) && A(!0),
                    (e = I(e, 3) || I(e, 2) || I(e, 1) || I(e, 0)) && !a && (D = 1),
                    a = e);
              },
              document.onvisibilitychange = onblur = onresize = o,
              A(!0);
          })(),
          (() => {
            let s,
              c,
              o,
              i,
              n,
              f,
              m,
              h,
              u,
              g,
              v,
              p,
              d,
              b,
              S,
              A,
              M = 0,
              I = 1,
              j = 2,
              Y = 15,
              k = (e, a, t, l) => M1(e, a, I || (K(U(a - e) ** .5 - t) + 1 / 7) * F1(1.5 * l)),
              C = () => P((j ? E[g1] : L[28 !== M ? M : 0]).l),
              D = e => {
                1 < j ? (P(E[g1].l).multiplySelf(E[g1].D), V(0, .9 < t1 ? 15 : 1, -2.4)) : (C(), V(b, S, A)),
                  e && (n = (T - X) / R, f = (Q - H) / R),
                  X = T,
                  q = O,
                  H = Q;
              };
            l1 = () => {
              let e, a, t, l, r;
              for (
                D(g),
                  G.r9r(0, 0, 128, 128, 6408, 5121, _1),
                  (() => {
                    let a, t, l, r, s, c = 0, o = 0, i = 0, n = 0, e = 0, f = 0, m = -1;
                    for (a = 0; a < 36; ++a) {
                      for (t = 512 * a, l = 96; l < 416; l += 4) {
                        for (r = 0; r < 2; ++r) {
                          let e = _1[t + l + r + 2];
                          (s = _1[t + l + r]) > n && (n = s),
                            s + e && (m < 0 || m === a) && (m = a, e === g ? ++c : o && o !== e || (o = e, ++i));
                        }
                      }
                    }
                    for (g = m < 0 ? 0 : i > 2 * c ? o : g, c = 36; c < 128; ++c) {
                      for (
                        a =
                          m =
                          i =
                          o =
                            0,
                          t = 512 * c,
                          l = 0;
                        l < 128;
                        ++l
                      ) {
                        s = _1[r = t + 4 * l],
                          l < 64 ? s > o && (o = s) : s > i && (i = s),
                          (s = _1[2 + r]) > m && (m = s),
                          s = _1[1 + r],
                          64 < l ? s > o && (o = s) : s > i && (i = s),
                          (s = _1[3 + r]) > a && (a = s);
                      }
                      (i -= o) * i > e * e && (e = i), (a -= m) * a > f * f && (f = a);
                    }
                    e *= .7,
                      h = K(1 - .01 * z1(U(e), U(f)), .3),
                      e /= 255,
                      n /= 255,
                      f /= 255,
                      C().invertSelf(),
                      V(e, n, f, 0),
                      b += T,
                      S += n,
                      A += Q,
                      D();
                  })(),
                  !j && g === M || (M = g, C().invertSelf(), V(X, q, H), b = T, S = O, A = Q, j = j && (g ? 0 : 1)),
                  (X < -20 || H < 109 ? -25 : -9) > q && (j = 2),
                  1 === g && (E[15].i = X < -15 && H < 0 ? 1 : 0),
                  i = J(i, r1 * (30 < g && g < 35), 2),
                  v = k(v, X, .5, 1),
                  p = k(p, u = M1(J(u, q, 2), q, j || 8 * U(u - q)), 2, 1),
                  d = k(d, H, .5, 1),
                  F
                    ? (e = j + F1(18), f1 = M1(f1, X, e), h1 = M1(h1, H, e), m1 = M1(m1, 1.6 + u, e), N = S1(N))
                    : (f1 = k(f1, v, 1, 2 + i),
                      h1 = k(h1, d + -18 + 5 * i, 1, 2 + i),
                      m1 = k(m1, z1(p + K((-60 - H) / 8, 0, 20) + 13 + 9 * i, 6), 4, 2),
                      e = d1(-6, -U(d - h1)),
                      N = A1(N, 90 - S1(y1(e, a = v - f1) / G1), I + F1(10)),
                      u1 = A1(u1, 90 - y1(j1(e, a), m1 - p) / G1, I + F1(10))),
                  u1 = K(u1, -87, 87),
                  I = 0,
                  e = K(i1, -1),
                  a = K(n1, -1),
                  t = w1(j1(e, a) ** .5, .1),
                  l = y1(e, a),
                  t && (s = 90 - l / G1),
                  c = A1(c, s, F1(8)),
                  o = J(o, t, 10),
                  _(X, .06 * h * o * w(18.2 * B) + u, H).rotateSelf(0, c),
                  r = 0;
                r < 2;
                ++r
              ) {
                let e = 9.1 * B - W * r;
                P(L[53].l, _(0)).translateSelf(0, o * K(.45 * z(e - W / 2))).rotateSelf(o * z(e) * .25 / G1, 0);
              }
              Y = g ? 5 : J(Y, j ? 13 : 19 - 2 * d1(0, q + 10), 2.2),
                n = g || j ? 0 : J(n, 0, 3),
                f = g || j ? 0 : J(f, 0, 3),
                e = (m = j ? 0 : J(m, g ? 7 * K(2 * t) * h : 0, g ? 9 : 1)) * t * U(e) * z(l),
                a = m * t * U(a) * w(l),
                t = R * (n + (w(l = F ? (180 + N) * G1 : 0) * a - z(l) * e)),
                r = R * -Y,
                e = R * (f + (z(l) * a + w(l) * e)),
                C().invertSelf(),
                V(t, r, e, 0),
                b += T,
                S += r,
                A += Q,
                D();
            };
          })(),
          requestAnimationFrame(l);
      })(a);
    },
    a = new Image();
  a.onerror = a.onload = g,
    a.src = t,
    (r => {
      let L = 0,
        s = () => {
          let b = 0,
            e = m => {
              let h,
                r,
                s,
                c,
                u,
                o,
                i = 0,
                n = 0,
                g = [],
                f = new Int32Array(768 * m),
                v = 2 ** (t - 9) / m,
                p = W * 2 ** (l - 8) / m,
                d = q * m & -2;
              for (let l = 0; l <= 11; ++l) {
                for (
                  let e = 0, a = +"000001234556112341234556011111111112011111111112000001111112"[12 * L + l];
                  e < 32;
                  ++e
                ) {
                  let t = (32 * l + e) * m;
                  for (c = 0; c < 4; ++c) {
                    if (h = 0, a && (h = S[a - 1].charCodeAt(e + 32 * c) - 40, h += 0 < h ? 106 : 0), h) {
                      if (!(u = g[h])) {
                        let l,
                          r,
                          s = 0,
                          c = 0,
                          o = u = h,
                          i = L < 2
                            ? e => e % 1 * 2 - 1
                            : O1,
                          n = L < 2
                            ? L < 1
                              ? e => e % 1 < .5 ? 1 : -1
                              : e => (e = e % 1 * 4) < 2 ? e - 1 : 3 - e
                            : O1,
                          f = new Int32Array(D + F + N);
                        for (let a = 0, t = 0; D + F + N > a; ++a, ++t) {
                          let e = 1;
                          D > a ? e = a / D : D + F > a || (e = (1 - (e = (a - D - F) / N)) * 3 ** (-T / 16 * e)),
                            t < 0
                            || (t -= 4 * m,
                              r = .00396 * 2 ** ((o + M - 256) / 12),
                              l = .00396 * 2 ** ((o + Y - 256) / 12) * (1 + (L ? 0 : .0072))),
                            f[a] = 80
                                * (i(s += r * e ** (I / 32)) * A + n(c += l * e ** (k / 32)) * j
                                  + (C ? (2 * p1() - 1) * C : 0))
                                * e | 0;
                        }
                        u = g[u] = f;
                      }
                      for (let e = 0, a = 2 * t; u.length > e; ++e, a += 2) f[a] += u[e];
                    }
                  }
                  for (let e, a = 0; m > a; ++a) {
                    u = 0,
                      ((e = f[c = 2 * (t + a)]) || s)
                      && (r = .00308 * O,
                        1 !== L && 4 !== L || (r *= z(v * c * W * 2) * H / 512 + .5),
                        r = 1.5 * z(r),
                        i += r * n,
                        n += r * (o = (1 - Q / 255) * (e - n) - i),
                        e = 4 === L ? n : 3 === L ? o : i,
                        L || (e = (e *= 22e-5) < 1 ? -1 < e ? z(e / 4 * W * 2) : -1 : 1, e /= 22e-5),
                        e *= B / 32,
                        s = 1e-5 < e * e,
                        u = e * (1 - (o = z(p * c) * R / 512 + .5)),
                        e *= o),
                      d > c || (u += f[1 + c - d] * X / 255, e += f[c - d] * X / 255),
                      E[o = b + c >> 1] += (f[c] = u) / 65536,
                      U[o] += (f[++c] = e) / 65536;
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
            ][L],
            [A, M, I, j, Y, k, C, D, F, a, T, t, O, Q, B, R, l, X, q, H] = [
              [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
              [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
              [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
              [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
              [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
            ][L],
            N = 4 * a ** 2;
          e(5513), e(4562), e(3891), T1(++L < 5 ? s : r);
        },
        E = (C = new AudioBuffer({ numberOfChannels: 2, sampleRate: 44100, length: 5362944 })).getChannelData(0),
        U = C.getChannelData(1);
      T1(s);
    })(() => {
      let a = e => c(z((e /= 11) * W), e).rotateSelf(10 * e).scaleSelf(1.002 - e, 1, 1.002 - e),
        t = e =>
          v(
            o(i(), c(0, -e / 2).scale(6, e - 1, 2.2)),
            o(i(), c(0, -e / 2 - 6).scale(4, e - 3, 4)),
            o(i(28, 1), c(0, e / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        l = (T1(() => {
          let t = 0,
            r = [],
            c = [],
            o = [],
            i = [],
            s = [],
            n = [],
            f = new Int32Array(8),
            m = new Map(),
            h = new Int32Array(f.buffer, 0, 5),
            u = new Float32Array(f.buffer);
          L.map((e, a) => {
            let s,
              l = e => {
                let { x: a, y: t, z: l } = s[e], r = (u[0] = a, u[1] = t, u[2] = l, m.get(e = "" + (s.A ? h : f)));
                return void 0 !== r
                  ? (a = 3 * r, i[a] = (i[a++] + f[5]) / 2, i[a] = (i[a++] + f[6]) / 2, i[a] = (i[a] + f[7]) / 2)
                  : (m.set(e, r = m.size), c.push(a, t, l, u[3]), o.push(f[4]), i.push(f[5], f[6], f[7])),
                  r;
              };
            for (s of (u[3] = 55 < a ? -28 : a, e.j)) {
              let { x: e, y: a, z: t } = q1(s);
              f[4] = 0 | s.s, f[5] = 32767 * e, f[6] = 32767 * a, f[7] = 32767 * t;
              for (let e = 2, a = l(0), t = l(1); s.length > e; ++e) r.push(a, t, t = l(e));
            }
            e.j = 0, e.B = t, e.C = t = r.length;
          }),
            [b, G].map(e => {
              e.b11(34962, e.c1b()),
                e.b2v(34962, new Float32Array(c), 35044),
                e.v7s(0, 4, 5126, !1, 0, 0),
                e.b11(34962, e.c1b()),
                e.b2v(34962, new Int16Array(i), 35044),
                e.v7s(1, 3, 5122, !0, 0, 0),
                e.b11(34962, e.c1b()),
                e.b2v(34962, new Uint32Array(o), 35044),
                e.v7s(2, 4, 5121, !0, 0, 0),
                e.b11(34963, e.c1b()),
                e.b2v(34963, new Uint16Array(r), 35044),
                e.e3x(0),
                e.e3x(1),
                e.e3x(2);
            });
          try {
            let [e, a, t, l, r] = JSON.parse(localStorage["Dante-22"]);
            s = e, n = a, g1 = t, M = l, B = r;
          } catch {}
          E.map((e, a) => e.h = e.g = e.i = 14 !== a && s[a] ? 1 : 0),
            x1.map((e, a) => e.i = n[a] ? 1 : 0),
            R1(),
            t1 = a1 || 14 !== g1 ? 1 : 0,
            T1(g);
        }),
          n(11, e => C1(Y1(k1(16), a(e), f(1, 1, .8, .2)).reverse(), Y1(k1(16), a(e + 1), f(1, 1, .8, .2)), 1)).flat()),
        e = [
          ...o(i(), c(0, -3).scale(11, 1.4, 3), f(.9, .9, .9, .2)),
          ...o(i(), c(0, -2.2).scale(7.7, .5, 4), f(.5, .5, .5, .2)),
          ...n(12, e => o(i(), d.translate(e - 5.5, 4.4).scale(.1, .1, 2), f(.6, .5, .3, .2))).flat(),
          ...v(
            o(i(6), d.rotate(90).scale(6, 8, 6), f(.3, .6, .6, .3)),
            o(i(4, 0, .01), c(0, 6).scale(12, 2, .75).rotate(0, 45), f(.3, .6, .6, .3)),
            o(i(6), d.rotate(90).scale(5, 12, 5), f(.3, .6, .6, .3)),
            ...[-5, 0, 5].map(e => o(i(5), c(e, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), f(.3, .6, .6, .3))),
          ),
        ],
        r = v(
          o(i(), c(0, -.5, 1).scale(1.15, 1.2, 6.5), f(.25, .25, .35, .3)),
          v(
            o(i(3), c(0, 0, -5.5).scale(3, 2), f(.6, .3, .4, .3)),
            o(i(), c(0, 0, -3.65).scale(2.5, 3), f(.6, .3, .4, .3)),
          ),
          ...[-1, 1].map(e => o(i(), c(1.2 * e, -.5, 1).scale(.14, .3, 6.5), f(.7, .2, 0, .3))),
        );
      for (
        m(),
          s([p.slice(1)], c(-2).scale3d(3).rotate(90, 0)),
          m(),
          h(c(-5.4, 1.5, -19).rotate(0, -90)),
          [-15, 15].map((e, a) => {
            s(i(), c(0, 0, a ? 22 : -23).scale(3, 1, 8), f(.9, .9, .9, .2)),
              s(i(), c(0, 6.3, e).scale(4, .3, 1), f(.3, .3, .3, .4)),
              s(i(), c(0, 1, e).scale(3, .2, .35), f(.5, .5, .5, .3));
          }),
          s(i(), c(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), f(.8, .8, .8, .2)),
          s(i(), c(3, 1.5, -20).scale(.5, 2, 5), f(.7, .7, .7, .2)),
          s(i(), c(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), f(.75, .75, .75, .2)),
          s(i(5), c(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), f(.6, .3, .3, .4)),
          s(v(
            P1(
              o(i(6, 0, 0, .3), c(8, -3, -4).scale(13, 1, 13), f(.7, .7, .7, .2)),
              v(
                o(i(6, 0, 0, .3), c(0, -.92).scale(13, 2, 13), f(.8, .8, .8, .2)),
                o(i(), d.rotate(0, 60).translate(14, .5, -1).scale(2.4, 5, 2), f(.5, .5, .5, .5)),
              ),
              o(
                i(),
                d.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5),
                f(.8, .2, .2, .5),
              ),
              o(i(6), c(0, -8).scale(9, 8, 7), f(.2, .1, .4, .5)),
            ),
            o(i(5), d.scale(5, 30, 5), f(.4, .2, .6, .5)),
            o(i(5, 0, 1.5), c(0, 1).scale(4.5, .3, 4.5), f(.7, .5, .9, .2)),
            o(i(6), c(15, -1.5, 4).scale(3.5, 1, 3.5), f(.5, .5, .5, .5)),
          )),
          h(c(15, -2, 4)),
          s(i(), c(-18.65, -3, 55).scale(2.45, 1.4, 2.7), f(.9, .9, .9, .2)),
          h(c(-55, -1.1, 46).rotate(0, 90)),
          s(i(7), c(-57, -2.6, 46).scale(4, 1, 4), f(.8, .8, .8, .3)),
          s(i(6), c(-61.3, -2.4, 49).scale(3, 1, 5), f(.4, .6, .6, .3)),
          s(e, c(-53, 0, 55)),
          s(i(), c(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), f(.7, .7, .7, .2)),
          s(i(3, 0, -.5), c(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), f(.8, .8, .8, .2)),
          s(v(
            P1(
              o(i(), c(-100, -2.4, 55).scale(8, .9, 8), f(.8, .8, .8, .2)),
              o(i(), c(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), f(.8, .8, .8, .2)),
              o(i(), c(-100, -2.6, 70).scale(3, 1.1, 7), f(.8, .8, .8, .2)),
              o(i(), c(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), f(.8, .8, .8, .2)),
              o(i(6), c(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), f(.6, .6, .6, .3)),
              o(i(), c(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), f(.8, .8, .8, .2)),
              o(i(), c(-100, .42, 92).scale(3, 1.1, 4.1), f(.8, .8, .8, .2)),
            ),
            o(i(8), c(-100, -1, 55).scale(7, .9, 7), f(.3, .3, .3, .4)),
            o(i(8), c(-100, -2, 55).scale(4, .3, 4), f(.4, .4, .4, .5)),
            o(i(8, 0, -3.1), c(-100, -3, 55).scale(.4, 1, .4), f(.4, .4, .4, .5)),
          )),
          s(v(
            o(i(), c(-100, 1, 63).scale(7.5, 4), f(.5, .5, .5, .4)),
            o(i(), c(-100, 0, 70).scale(2, 2, 10), f(.5, .5, .5, .4)),
            o(i(20, 1), c(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), f(.5, .5, .5, .4)),
          )),
          p.map(({ x: a, z: t }) => {
            s(i(6), c(3 * a, 3, 15 * t).scale(.7, 4, .7), f(.6, .3, .3, .4)),
              s(i(6), c(7 * a - 100, -3, 7 * t + 55).scale(1, 8.1), f(.6, .15, .15, .8)),
              [4, -.4].map(e => s(i(6), c(7 * a - 100, e, 7 * t + 55).scale(1.3, .5, 1.3), f(.4, .2, .2, .8))),
              s(i(14, 1), c(9 * a - 38.9, -7.3, 11 * t + 17).scale(1, 4), f(.25, .25, .25, 1)),
              [1.5, 8].map(e =>
                s(i(17, 1), c(9 * a - 38.9, e - 11.3, 11 * t + 17).scale(1.5, .5, 1.5), f(.6, .6, .6, .3))
              );
          }),
          n(7, e => {
            s(
              i((23 * e + 1) % 5 + 5, 0, .5),
              c(5 * z(e) - 101 + e, -2.3 - e, 44.9 - 2.8 * e).scaleSelf(5 + e / 2, 1 + e / 6, 5 + e / 3),
              f(.5 - e / 17, .5 - (1 & e) / 9, .6, .3),
            );
          }),
          s(i(), c(-87, -9.5, 24).scale(7, 1, 3), f(.4, .5, .6, .4)),
          s(i(4), c(-86, -9.2, 27).scale(5, 1, 5), f(.5, .6, .7, .3)),
          s(i(12, 1), c(-86, -9, 31).scale(1.5, 1, 1.5), f(.3, .3, .4, .1)),
          h(c(-86, -7.5, 31)),
          s(
            v(
              P1(
                o(i(5), c(0, 0, -7).scale(2, 1.2, 2), f(.2, .4, .7, .3)),
                o(i(5), d.scale(9, 1.2, 9), f(0, .2, .3, .5)),
                o(i(), d.scale(11, 1, 13), f(.3, .4, .6, .3)),
              ),
              o(i(5), d.scale(5.4, 5, 5.4), f(0, .2, .3, .5)),
            ),
            c(-38.9, -11.3, 17),
          ),
          h(c(-38.9, -9.6, 10)),
          s(
            v(
              P1(
                o(i(6), c(0, 0, -18).scale(15, 1.2, 15), f(.7, .7, .7, .3)),
                o(i(), d.scale(4, 1.2, 6), f(.45, .4, .6, .3)),
              ),
              ...n(6, a =>
                n(6, e =>
                  o(
                    i(6),
                    c(4.6 * e - 12 + 2 * (1 & a), 0, 4.6 * a + 2 * z(4 * e) - 32).scale(2, 5, 2),
                    f(.7, .7, .7, .3),
                  ))).flat(),
            ),
            c(-38.9, -11.3, -1),
          ),
          s(i(5), c(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), f(.8, .1, .25, .4)),
          h(c(-84, -.7, 85).rotate(0, 45)),
          s(
            v(
              P1(o(i(), c(26.5, -1.6, 10).scale(20, 2.08, 3)), o(i(), c(26.5, -.5, 10).scale(19, 2, .5))),
              ...n(4, e => o(i(), c(13 + 9 * e + (1 & e), -.8, 9).scale(1.35, 1.35, 9))),
              ...n(3, e => o(i(), c(17 + 9 * e, -.8, 9).scale(1.35, 1.35, 9))),
            ),
            c(-123, .2, -12),
            f(.5, .5, .6, .2),
          ),
          h(c(-116, -1.4, -18).rotate(0, 180)),
          s(i(6), c(-116, -2.6, -16.5).scale(3.2, .8, 3), f(.6, .5, .7, .2)),
          s(i(), c(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), f(.8, .8, .8, .2)),
          s(i(), c(-115.5, -17, -12).scale(.5, 15, 2.2), f(.6, .6, .6, .3)),
          s(i(8), c(-114, -17, -2).scale(2, 15, 2), f(.6, .6, .6, .3)),
          s(i(8), c(-79, -17, -2).scale(2, 15, 2), f(1, 1, 1, .3)),
          s(i(), c(-77, -17, -50.5).scale(2.2, 15, .5), f(.6, .6, .6, .3)),
          s(v(
            o(i(12), c(-77, -14.5, -12).scale(4, 17.5, 4), f(.7, .7, .7, .2)),
            o(i(12), c(-77, 3.1, -12).scale(3, 5, 3), f(.4, .5, .6, .2)),
            o(i(), c(-79, .1, -12).scale(3.5, 2, 1.3), f(.4, .5, .6, .2)),
            o(i(), c(-77, .1, -14).scale(1.5, 2, 2), f(.4, .5, .6, .2)),
          )),
          s(v(
            o(i(), c(-93, -5.8, -40).scale(9, 1, 5), f(.8, .8, .8, .1)),
            o(i(9), c(-98, -5.8, -40).scale(3, 8, 3), f(.7, .7, .7, .2)),
          )),
          s(i(), c(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), f(.6, .6, .6, .3)),
          s(i(9), c(-98, -18.4, -40).scale(2.5, 13.5, 2.5), f(.5, .5, .5, .3)),
          h(c(-98, -4.4, -40).rotate(0, 90)),
          [-1, 1].map((a, t) => {
            s(
              v(
                o(i(), c(-4 * a, 3.5, -.5).scale(4, 4, .7), f(.5, .5, .5, .4)),
                o(i(), d.scale(3, 3, 10), f(.6, .24, .2, .5)),
                o(i(32, 1), c(0, 3, -5).scale(3, 4, 10).rotate(90, 0), f(.6, .24, .2, .5)),
                o(i(5), c(-5.3 * a, 7).rotate(90, 0).scale(1.7, 5, 1.7), f(.6, .24, .2, .5)),
                o(i(5), c(-5.3 * a, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), f(.6, .24, .2, .5)),
              ),
              c(a - 100, .7, 97),
            ),
              s(i(12, 1), c(-7.5 * a - 100, 3.7, 96).scale(.8, 4, .8), f(.6, .24, .2, .5)),
              [7.2, 1.5].map(e => s(i(15, 1), c(-7.5 * a - 100, e + .7, 96).scale(1.1, .5, 1.1), f(.5, .24, .2, .4))),
              s(l, c(-8 * a, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * a + 90)),
              s(l, c(-5 * a - 100, 1.7, 110).scale(1.2, 10, 1.2).rotate(0, 90 * a - 90)),
              n(5, e => s(l, c(18.5 * (t - .5), 0, 4.8 * e - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2)));
          }),
          s(v(
            o(i(), c(-82.07, .8, 106).scale(11, .9, 2.2), f(.7, .7, .7, .1)),
            o(i(45, 1), c(-81, .7, 106).scale3d(7.7), f(.7, .7, .7, .1)),
          )),
          s(i(), c(-58, 1, 106).scale(2, .65, 2), f(.7, .7, .7, .2)),
          s(i(), c(-50.7, 1, 99).scale(2, .65, 1), f(.7, .7, .7, .2)),
          s(i(), c(-42, .4, 91).scale(5, 1, 2.5), f(.7, .7, .7, .3)),
          s(i(), c(-34.2, .4, 91).scale(3, 1, 3), f(.7, .7, .7, .3)),
          s(i(5), c(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), f(.2, .5, .5, .6)),
          h(c(-34, 2.7, 96).rotate(-12, 0)),
          s(v(
            P1(
              o(i(6, 0, 0, .6), c(-100, .7, 105.5).scale(8, 1, 11), f(.7, .7, .7, .2)),
              o(i(), c(-101.5, .7, 93.5).scale(10.5, 1, 2), f(.7, .7, .7, .2)),
            ),
            o(i(5), c(-100, .7, 113).scale(4, 3, 4), f(.7, .7, .7, .2)),
          )),
          n(3, e => {
            s(t(16), c(-77, -9, -12 * e - 20).rotate(0, 90), f(.6, .6, .6, .3)),
              s(t(16), c(12 * e - 109, -9, -12), f(.6, .6, .6, .3)),
              s(
                t(24.7 - .7 * (1 & e)),
                c(6 * e - 6, 4 - (1 & e), 111 - .2 * (1 & e)),
                1 & e ? f(.5, .5, .5, .3) : f(.35, .35, .35, .5),
              );
          }),
          s(v(
            o(i(6, 0, 0, .3), c(0, -.92, 95).scale(14, 2, 14), f(.8, .8, .8, .2)),
            o(i(5), c(0, 0, 95).scale3d(6), f(.3, .3, .3, .5)),
          )),
          h(c(0, 1.7, 82).rotate(0, 180)),
          s(i(5), c(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), f(.5, .3, .3, .4)),
          s(i(6), c(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), f(.5, .6, .7, .3)),
          s(i(), c(0, 16, 127.8).scale(1.5, 1, .7), f(.5, .6, .7, .3)),
          s(i(7), c(0, 15.1, 133).scale(5, 2, 5), f(.4, .5, .6, .4)),
          s(v(
            P1(
              o(i(), c(0, 16, 110.5).scale(12, 1, 3), f(.5, .3, .3, .4)),
              o(i(), c(0, 16, 111).scale(3, 1, 3.8), f(.5, .3, .3, .4)),
            ),
            o(i(5), c(0, 16, 103.5).scale(5.5, 5, 5.5), f(.5, .3, .3, .4)),
          )),
          u(c(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          u(c(0, 2.8), [5, 10, 3], [-5, 10, 3], ...k1(18).map(({ x: e, z: a }) => [7 * e, 10 * a, 4.5 - 2 * U(e)])),
          u(c(0, 3, 95), ...k1(9).map(({ x: e, z: a }) => [9 * e, 9 * a, 4])),
          u(c(0, 19, 134), [0, 0, 3.5]),
          u(c(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          u(c(-89, .2, 80), [0, 0, 6]),
          u(c(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          u(c(-115, .2, -12), [0, 0, 3.5]),
          u(c(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]),
          m(),
          s(i(5), c(0, -.2).scale(5, 1, 5), f(.6, .65, .7, .3)),
          h(c(0, 1.2)),
          n(2, () => {
            m(),
              p.map(({ x: e, z: a }) => {
                s(i(11, 1), c(4 * e, 4, 4 * a).scale(.8, 3, .8), f(.5, .3, .7, .6)),
                  s(i(), c(4 * e, 7, 4 * a).scale(1, .3), f(.5, .5, .5, .3));
              }),
              s(v(
                o(i(), d.scale(5, 1, 5), f(.8, .8, .8, .3)),
                ...[-1, 1].map(e => o(i(25, 1), c(5 * e, .2).rotate(-30 * e).scale(4, 1, 3), f(.8, .8, .8, .3))),
              )),
              s(i(), c(0, -3).scale(8, 2, 8), f(.4, .4, .4, .3));
          }),
          m(),
          s(v(
            P1(
              o(i(), d.scale(1.5, 1, 5), f(.9, .9, .9, .2)),
              o(i(6), d.scale(4, 1, 5), f(.9, .9, .9, .2)),
              o(i(), c(0, -2).scale(2, 3.2, 1.9), f(.3, .8, .5, .5)),
              o(i(16, 1, 0, 4), d.scale(1, 1, 1.5).rotate(0, 90), f(.9, .9, .9, .2)),
            ),
            o(i(), d.scale(1.3, 10, 1.3), f(.2, .7, .4, .6)),
          )),
          u(c(0, 2.8), [0, 0, 4.5]),
          m(),
          s(i(3), c(-23, -1.7, 55.8).scale(5, .7, 8.3), f(.3, .6, .6, .2)),
          s(i(8), c(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), f(.8, .8, .8, .2)),
          s(i(), c(-23, -3, 55).scale(5.2, 1.7, 3), f(.5, .5, .5, .3)),
          s(i(), c(-23, -2.2, 62).scale(3, 1, 4), f(.5, .5, .5, .3)),
          h(c(-23, -.5, 66.5)),
          m(),
          s(i(), c(-22.55, -3, 55).scale(1.45, 1.4, 2.7), f(.7, .7, .7, .2)),
          s(v(o(i(), d.scale(3, 1.4, 2.7)), o(i(), d.scale(1.2, 8, 1.2))), c(-33, -3, 55), f(.7, .7, .7, .2)),
          m(),
          s(v(
            o(i(), c(-27, -3, 55).scale(3, 1.4, 2.7), f(.9, .9, .9, .2)),
            o(i(), c(-27, -3, 55).scale(1, 3), f(.9, .9, .9, .2)),
          )),
          s(i(), c(-39, -3, 55).scale(3, 1.4, 2.7), f(.9, .9, .9, .2)),
          m(),
          s(i(6), c(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, .5, 5.9), f(.7, .7, .7, .4)),
          m(),
          [0, 12, 24].map(e =>
            s(i(), c(e - 76.9, e / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), f(.2, .5, .6, .2))
          ),
          m(),
          [6, 18].map(e =>
            s(i(), c(e - 76.9, e / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), f(.1, .4, .5, .2))
          ),
          m(),
          s(
            v(
              P1(
                o(i(5), c(0, 2).scale(5, 7, 5).skewY(8), f(.2, .4, .5, .5)),
                o(i(5), c(0, 6).scale(1.1, 7, 1.1).skewY(-8), f(.25, .35, .5, .5)),
                o(i(5), c(0, 9).scale(.6, 7, .6).skewY(8), f(.35, .3, .5, .5)),
              ),
              o(i(5), d.scale(4, 8, 4), f(.2, .4, .5, .5)),
              o(i(5), c(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), f(.2, .4, .5, .5)),
            ),
            c(-38.9, -11.3, 17),
          ),
          u(c(-39.1, -.6, 17).rotate(11), ...k1(15).map(({ x: e, z: a }) => [3 * e, 3 * a, 1.2])),
          m(),
          n(2, e => s(r, c(9 * e - 110 + (1 & e), 1.9, -12))),
          m(),
          n(2, e => s(r, c(9 * (e + 2) - 110 + (1 & e), 1.9, -12))),
          m(),
          n(3, e => s(r, c(9 * e - 106, 1.9, -12))),
          n(4, e => {
            m(),
              s(
                i(6),
                c(-14.6 - 4.8 * e - (2 < e ? 2 : 0), -e / 2.5 - .1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(
                  2.6,
                  1,
                  2.5,
                ),
                f(.5 - e / 8, e / 12 + .5, .7, .3),
              );
          }),
          [f(.1, .55, .45, .2), f(.2, .5, .5, .3), f(.3, .45, .55, .4)].map((e, a) => {
            m(),
              s(i(), c(-23.5, .5, 91 + 6.8 * a).scale(1 === a ? 2 : 3.3, 1, 3.3), e),
              2 === a && s(i(), c(-29.1, .4, 91).scale(2.1, 1, 3), f(.7, .7, .7, .3)),
              1 === a && s(i(), c(-16.1, .5, 103.5).rotate(-3.5).scale(3.9, .8, 2).skewX(-1), f(.6, .6, .7, .3));
          }),
          m(),
          s(i(5), d.scale(5, 1.1, 5), f(.5, .3, .3, .4)),
          s(i(5), d.scale(5.5, .9, 5.5), f(.25, .25, .25, .4)),
          h(c(0, 1.5, -1).rotate(0, 180)),
          n(4, a => {
            m(),
              n(
                7,
                e => s(o(i(9, 1), c((2 < a ? 3.5 : 4) * (e / 6 - .5), 3).scale(.2, 2 < a ? 4 : 3, .2), f(.3, .3, .38))),
              );
          }),
          m(),
          s(e),
          m(),
          s(i(15, 1), c(-7.5).rotate(0, 90).scale(3, 2.3, 3), f(.4, .4, .4, .3)),
          s(i(10), c(-7.5).rotate(0, 90).scale(2, 2.5, 2), f(.3, .8, .7, .3)),
          s(i(5), c(-7.5).rotate(0, 90).scale(1, 3), f(.5, .5, .5, .5)),
          h(c(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180)),
          [-1, 1].map(e => s(l, d.rotate(90 * e, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3))),
          s(v(o(i(10), d.scale(6, 2, 6), f(.1, .6, .5, .3)), o(i(10), d.scale(3.3, 6, 3.3), f(.1, .6, .5, .5)))),
          u(c(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]),
          m(),
          s(i(3), c(0, -3, 118.8).scale(.8, .8, 8).rotate(90, 0, 60), f(.5, .3, .3, .4)),
          [22, 30].map(e => {
            s(i(6), c(0, 16, e + 95).scale(3, 1, 2.3).rotate(0, 90), f(.7, .7, .7, .4)),
              s(i(), c(0, 6.2, e + 95).scale(.5, 11, .5), f(.5, .3, .3, .4));
          }),
          m(),
          s(v(
            o(i(45, 1), d.scale(7.5, 1, 7.5), f(.45, .45, .45, .2)),
            o(i(), c(0, 0, -5.5).scale(1.5, 3, 2.7), f(.45, .45, .45, .2)),
          )),
          s(i(8), c(0, 2).scale(3, 1.5, 3).rotate(0, 22), f(.7, .7, .7, .1)),
          s(i(5), c(0, 2).scale(1, 2), f(.3, .3, .3, .2)),
          u(c(0, 3), ...k1(14).map(({ x: e, z: a }) => [5.6 * e, 5.6 * a, 2])),
          m(),
          [-1, 1].map(e => s(l, d.rotate(0, 90).translate(-5 * e, 3, -.5).scale(1.2, 9, 1.2).rotate(0, 90 * e + 90))),
          s(v(o(i(28, 1), c(0, 2).scale(7.5, 1, 7.5), f(.35, 0, 0, .3)), o(i(), d.scale(9, 5, 2), f(.3, 0, 0, .3)))),
          s(o(i(28, 1), d.scale(7.5, 1, 7.5), f(.45, .45, .45, .2))),
          s(o(i(5), c(0, 1).scale(1, .2), f(.3, .3, .3, .2))),
          m(),
          s(v(
            o(i(28, 1), c(0, 2).scale(7.5, 1, 7.5), f(.35, 0, 0, .3)),
            o(i(), c(7).scale(9, 5, 2), f(.3, 0, 0, .3)),
            o(i(), c(0, 0, 7).scale(2, 5, 9), f(.3, 0, 0, .3)),
          )),
          s(o(i(28, 1), d.scale(7.5, 1, 7.5), f(.45, .45, .45, .2))),
          s(o(i(5), c(0, 1).scale(1, .2), f(.3, .3, .3, .2))),
          m(),
          s(v(
            o(i(28, 1), c(0, 2).scale(7.5, 1, 7.5), f(.35, 0, 0, .3)),
            o(i(), c(7).scale(9, 5, 2), f(.3, 0, 0, .3)),
            o(i(), c(0, 0, -7).scale(2, 5, 9), f(.3, 0, 0, .3)),
          )),
          s(o(i(28, 1), d.scale(7.5, 1, 7.5), f(.45, .45, .45, .2))),
          s(o(i(5), c(0, 1).scale(1, .2), f(.3, .3, .3, .2))),
          n(2, () => {
            m(),
              s(v(
                o(i(30, 1, 1.15, 1), c(0, -3).scale(3.5, 1, 3.5), f(.7, .4, .25, .7)),
                o(i(30, 1, 1.3, 1), c(0, -2.5).scale(2.6, 1, 3), f(.7, .4, .25, .2)),
                o(i(), c(4, -1.2).scale3d(2), f(.7, .4, .25, .3)),
              )),
              h(c(0, -3, 4));
          }),
          e = 0;
        e < 16;
        ++e
      ) {
        m(),
          s(i(6, 1).slice(0, -1), d.scale(.12, 1.2, .12), f(.3, .3, .5, .1)),
          s(i(9, 1), c(0, .8).scale(.2, .3, .2), f(.7, 1, .2)),
          s(i(3), c(0, -1).rotate(90, 90).scale(.3, .4, .3), f(.2, .2, .2, .1));
      }
      m(),
        s(D1(20), c(0, 1).scale3d(.5), f(1, .3, .4)),
        s(D1(30), d.scale(.65, .8, .55), f(1, .3, .4)),
        s(i(), c(0, .9, .45).scale(.15, .02, .06), f(.3, .3, .3)),
        [-1, 1].map(e => {
          s(l, d.rotate(0, 0 < e ? 180 : 0).translate(.2, 1.32).rotate(-30).scale(.2, .6, .2), f(1, 1, .8)),
            s(
              o(v(i(15, 1), o(i(), c(0, 0, 1).scale(2, 2, .5))), d.rotate(-90, 0).scale(.1, .05, .1), f(.3, .3, .3)),
              c(.2 * e, 1.2, .4).rotate(0, 20 * e, 20 * e),
            );
        }),
        [-1, 1].map(e => {
          m(), s(i(20, 1), c(.3 * e, -.8).scale(.2, .7, .24), f(1, .3, .4));
        }),
        m(),
        s(i(6, 1).slice(0, -1), d.scale(.77, 1, .77), f(1, .3, .5)),
        m(),
        s(
          D1(28, 22, (e, a, t) => {
            let l = a / 22, r = e * W * 2 / 28, s = z(l ** .6 * W / 2);
            return e = l * l * z(e * W * .5) / 4,
              21 < a
                ? { x: t.A = 0, y: -.5, z: 0 }
                : { x: w(r) * s, y: w(l * W) - l - e, z: z(r) * s + z(e * W * 2) / 4 };
          }),
          d.scale(.7, .7, .7),
          f(1, 1, 1),
        ),
        [-1, 1].map(e => s(D1(10), c(.16 * e, .4, -.36).scale3d(.09)));
    });
});
