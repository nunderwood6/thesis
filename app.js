(function(){
var $ = (s, d = document) => Array.prototype.slice.call(d.querySelectorAll(s));

$.one = (s, d = document) => d.querySelector(s);

var _$$_17 = $;

var _$d3Min_8 = { exports: {} };
// https://d3js.org v7.6.1 Copyright 2010-2022 Mike Bostock
!function (t, n) {
  "object" == typeof _$d3Min_8.exports && "undefined" != "object" ? n(_$d3Min_8.exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n((t = "undefined" != typeof globalThis ? globalThis : t || self).d3 = t.d3 || {});
}(this, function (t) {
  "use strict";

  function n(t, n) {
    return null == t || null == n ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
  }

  function e(t, n) {
    return null == t || null == n ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
  }

  function r(t) {
    let r, o, a;

    function u(t, n, e = 0, i = t.length) {
      if (e < i) {
        if (0 !== r(n, n)) return i;

        do {
          const r = e + i >>> 1;
          o(t[r], n) < 0 ? e = r + 1 : i = r;
        } while (e < i);
      }

      return e;
    }

    return 2 !== t.length ? (r = n, o = (e, r) => n(t(e), r), a = (n, e) => t(n) - e) : (r = t === n || t === e ? t : i, o = t, a = t), {
      left: u,
      center: function (t, n, e = 0, r = t.length) {
        const i = u(t, n, e, r - 1);
        return i > e && a(t[i - 1], n) > -a(t[i], n) ? i - 1 : i;
      },
      right: function (t, n, e = 0, i = t.length) {
        if (e < i) {
          if (0 !== r(n, n)) return i;

          do {
            const r = e + i >>> 1;
            o(t[r], n) <= 0 ? e = r + 1 : i = r;
          } while (e < i);
        }

        return e;
      }
    };
  }

  function i() {
    return 0;
  }

  function o(t) {
    return null === t ? NaN : +t;
  }

  function* a(t, n) {
    if (void 0 === n) for (let n of t) null != n && (n = +n) >= n && (yield n);else {
      let e = -1;

      for (let r of t) null != (r = n(r, ++e, t)) && (r = +r) >= r && (yield r);
    }
  }

  const u = r(n),
        c = u.right,
        f = u.left,
        s = r(o).center;
  var l = c;
  const h = p(v),
        d = p(function (t) {
    const n = v(t);
    return (t, e, r, i, o) => {
      n(t, e, (r <<= 2) + 0, (i <<= 2) + 0, o <<= 2), n(t, e, r + 1, i + 1, o), n(t, e, r + 2, i + 2, o), n(t, e, r + 3, i + 3, o);
    };
  });

  function p(t) {
    return function (n, e, r = e) {
      if (!((e = +e) >= 0)) throw new RangeError("invalid rx");
      if (!((r = +r) >= 0)) throw new RangeError("invalid ry");
      let {
        data: i,
        width: o,
        height: a
      } = n;
      if (!((o = Math.floor(o)) >= 0)) throw new RangeError("invalid width");
      if (!((a = Math.floor(void 0 !== a ? a : i.length / o)) >= 0)) throw new RangeError("invalid height");
      if (!o || !a || !e && !r) return n;
      const u = e && t(e),
            c = r && t(r),
            f = i.slice();
      return u && c ? (g(u, f, i, o, a), g(u, i, f, o, a), g(u, f, i, o, a), y(c, i, f, o, a), y(c, f, i, o, a), y(c, i, f, o, a)) : u ? (g(u, i, f, o, a), g(u, f, i, o, a), g(u, i, f, o, a)) : c && (y(c, i, f, o, a), y(c, f, i, o, a), y(c, i, f, o, a)), n;
    };
  }

  function g(t, n, e, r, i) {
    for (let o = 0, a = r * i; o < a;) t(n, e, o, o += r, 1);
  }

  function y(t, n, e, r, i) {
    for (let o = 0, a = r * i; o < r; ++o) t(n, e, o, o + a, r);
  }

  function v(t) {
    const n = Math.floor(t);
    if (n === t) return function (t) {
      const n = 2 * t + 1;
      return (e, r, i, o, a) => {
        if (!((o -= a) >= i)) return;
        let u = t * r[i];
        const c = a * t;

        for (let t = i, n = i + c; t < n; t += a) u += r[Math.min(o, t)];

        for (let t = i, f = o; t <= f; t += a) u += r[Math.min(o, t + c)], e[t] = u / n, u -= r[Math.max(i, t - c)];
      };
    }(t);
    const e = t - n,
          r = 2 * t + 1;
    return (t, i, o, a, u) => {
      if (!((a -= u) >= o)) return;
      let c = n * i[o];
      const f = u * n,
            s = f + u;

      for (let t = o, n = o + f; t < n; t += u) c += i[Math.min(a, t)];

      for (let n = o, l = a; n <= l; n += u) c += i[Math.min(a, n + f)], t[n] = (c + e * (i[Math.max(o, n - s)] + i[Math.min(a, n + s)])) / r, c -= i[Math.max(o, n - f)];
    };
  }

  function _(t, n) {
    let e = 0;
    if (void 0 === n) for (let n of t) null != n && (n = +n) >= n && ++e;else {
      let r = -1;

      for (let i of t) null != (i = n(i, ++r, t)) && (i = +i) >= i && ++e;
    }
    return e;
  }

  function b(t) {
    return 0 | t.length;
  }

  function m(t) {
    return !(t > 0);
  }

  function x(t) {
    return "object" != typeof t || "length" in t ? t : Array.from(t);
  }

  function w(t, n) {
    let e,
        r = 0,
        i = 0,
        o = 0;
    if (void 0 === n) for (let n of t) null != n && (n = +n) >= n && (e = n - i, i += e / ++r, o += e * (n - i));else {
      let a = -1;

      for (let u of t) null != (u = n(u, ++a, t)) && (u = +u) >= u && (e = u - i, i += e / ++r, o += e * (u - i));
    }
    if (r > 1) return o / (r - 1);
  }

  function M(t, n) {
    const e = w(t, n);
    return e ? Math.sqrt(e) : e;
  }

  function A(t, n) {
    let e, r;
    if (void 0 === n) for (const n of t) null != n && (void 0 === e ? n >= n && (e = r = n) : (e > n && (e = n), r < n && (r = n)));else {
      let i = -1;

      for (let o of t) null != (o = n(o, ++i, t)) && (void 0 === e ? o >= o && (e = r = o) : (e > o && (e = o), r < o && (r = o)));
    }
    return [e, r];
  }

  class T {
    constructor() {
      this._partials = new Float64Array(32), this._n = 0;
    }

    add(t) {
      const n = this._partials;
      let e = 0;

      for (let r = 0; r < this._n && r < 32; r++) {
        const i = n[r],
              o = t + i,
              a = Math.abs(t) < Math.abs(i) ? t - (o - i) : i - (o - t);
        a && (n[e++] = a), t = o;
      }

      return n[e] = t, this._n = e + 1, this;
    }

    valueOf() {
      const t = this._partials;
      let n,
          e,
          r,
          i = this._n,
          o = 0;

      if (i > 0) {
        for (o = t[--i]; i > 0 && (n = o, e = t[--i], o = n + e, r = e - (o - n), !r););

        i > 0 && (r < 0 && t[i - 1] < 0 || r > 0 && t[i - 1] > 0) && (e = 2 * r, n = o + e, e == n - o && (o = n));
      }

      return o;
    }

  }

  class InternMap extends Map {
    constructor(t, n = N) {
      if (super(), Object.defineProperties(this, {
        _intern: {
          value: new Map()
        },
        _key: {
          value: n
        }
      }), null != t) for (const [n, e] of t) this.set(n, e);
    }

    get(t) {
      return super.get(S(this, t));
    }

    has(t) {
      return super.has(S(this, t));
    }

    set(t, n) {
      return super.set(E(this, t), n);
    }

    delete(t) {
      return super.delete(k(this, t));
    }

  }

  class InternSet extends Set {
    constructor(t, n = N) {
      if (super(), Object.defineProperties(this, {
        _intern: {
          value: new Map()
        },
        _key: {
          value: n
        }
      }), null != t) for (const n of t) this.add(n);
    }

    has(t) {
      return super.has(S(this, t));
    }

    add(t) {
      return super.add(E(this, t));
    }

    delete(t) {
      return super.delete(k(this, t));
    }

  }

  function S({
    _intern: t,
    _key: n
  }, e) {
    const r = n(e);
    return t.has(r) ? t.get(r) : e;
  }

  function E({
    _intern: t,
    _key: n
  }, e) {
    const r = n(e);
    return t.has(r) ? t.get(r) : (t.set(r, e), e);
  }

  function k({
    _intern: t,
    _key: n
  }, e) {
    const r = n(e);
    return t.has(r) && (e = t.get(r), t.delete(r)), e;
  }

  function N(t) {
    return null !== t && "object" == typeof t ? t.valueOf() : t;
  }

  function C(t) {
    return t;
  }

  function P(t, ...n) {
    return I(t, C, C, n);
  }

  function z(t, ...n) {
    return I(t, Array.from, C, n);
  }

  function D(t, n) {
    for (let e = 1, r = n.length; e < r; ++e) t = t.flatMap(t => t.pop().map(([n, e]) => [...t, n, e]));

    return t;
  }

  function R(t, n, ...e) {
    return I(t, C, n, e);
  }

  function F(t, n, ...e) {
    return I(t, Array.from, n, e);
  }

  function q(t) {
    if (1 !== t.length) throw new Error("duplicate key");
    return t[0];
  }

  function I(t, n, e, r) {
    return function t(i, o) {
      if (o >= r.length) return e(i);
      const a = new InternMap(),
            u = r[o++];
      let c = -1;

      for (const t of i) {
        const n = u(t, ++c, i),
              e = a.get(n);
        e ? e.push(t) : a.set(n, [t]);
      }

      for (const [n, e] of a) a.set(n, t(e, o));

      return n(a);
    }(t, 0);
  }

  function O(t, n) {
    return Array.from(n, n => t[n]);
  }

  function U(t, ...n) {
    if ("function" != typeof t[Symbol.iterator]) throw new TypeError("values is not iterable");
    t = Array.from(t);
    let [e] = n;

    if (e && 2 !== e.length || n.length > 1) {
      const r = Uint32Array.from(t, (t, n) => n);
      return n.length > 1 ? (n = n.map(n => t.map(n)), r.sort((t, e) => {
        for (const r of n) {
          const n = Y(r[t], r[e]);
          if (n) return n;
        }
      })) : (e = t.map(e), r.sort((t, n) => Y(e[t], e[n]))), O(t, r);
    }

    return t.sort(B(e));
  }

  function B(t = n) {
    if (t === n) return Y;
    if ("function" != typeof t) throw new TypeError("compare is not a function");
    return (n, e) => {
      const r = t(n, e);
      return r || 0 === r ? r : (0 === t(e, e)) - (0 === t(n, n));
    };
  }

  function Y(t, n) {
    return (null == t || !(t >= t)) - (null == n || !(n >= n)) || (t < n ? -1 : t > n ? 1 : 0);
  }

  var L = Array.prototype.slice;

  function j(t) {
    return () => t;
  }

  var $ = Math.sqrt(50),
      H = Math.sqrt(10),
      X = Math.sqrt(2);

  function G(t, n, e) {
    var r,
        i,
        o,
        a,
        u = -1;
    if (e = +e, (t = +t) === (n = +n) && e > 0) return [t];
    if ((r = n < t) && (i = t, t = n, n = i), 0 === (a = V(t, n, e)) || !isFinite(a)) return [];

    if (a > 0) {
      let e = Math.round(t / a),
          r = Math.round(n / a);

      for (e * a < t && ++e, r * a > n && --r, o = new Array(i = r - e + 1); ++u < i;) o[u] = (e + u) * a;
    } else {
      a = -a;
      let e = Math.round(t * a),
          r = Math.round(n * a);

      for (e / a < t && ++e, r / a > n && --r, o = new Array(i = r - e + 1); ++u < i;) o[u] = (e + u) / a;
    }

    return r && o.reverse(), o;
  }

  function V(t, n, e) {
    var r = (n - t) / Math.max(0, e),
        i = Math.floor(Math.log(r) / Math.LN10),
        o = r / Math.pow(10, i);
    return i >= 0 ? (o >= $ ? 10 : o >= H ? 5 : o >= X ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (o >= $ ? 10 : o >= H ? 5 : o >= X ? 2 : 1);
  }

  function W(t, n, e) {
    var r = Math.abs(n - t) / Math.max(0, e),
        i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
        o = r / i;
    return o >= $ ? i *= 10 : o >= H ? i *= 5 : o >= X && (i *= 2), n < t ? -i : i;
  }

  function Z(t, n, e) {
    let r;

    for (;;) {
      const i = V(t, n, e);
      if (i === r || 0 === i || !isFinite(i)) return [t, n];
      i > 0 ? (t = Math.floor(t / i) * i, n = Math.ceil(n / i) * i) : i < 0 && (t = Math.ceil(t * i) / i, n = Math.floor(n * i) / i), r = i;
    }
  }

  function K(t) {
    return Math.ceil(Math.log(_(t)) / Math.LN2) + 1;
  }

  function Q() {
    var t = C,
        n = A,
        e = K;

    function r(r) {
      Array.isArray(r) || (r = Array.from(r));
      var i,
          o,
          a,
          u = r.length,
          c = new Array(u);

      for (i = 0; i < u; ++i) c[i] = t(r[i], i, r);

      var f = n(c),
          s = f[0],
          h = f[1],
          d = e(c, s, h);

      if (!Array.isArray(d)) {
        const t = h,
              e = +d;
        if (n === A && ([s, h] = Z(s, h, e)), (d = G(s, h, e))[0] <= s && (a = V(s, h, e)), d[d.length - 1] >= h) if (t >= h && n === A) {
          const t = V(s, h, e);
          isFinite(t) && (t > 0 ? h = (Math.floor(h / t) + 1) * t : t < 0 && (h = (Math.ceil(h * -t) + 1) / -t));
        } else d.pop();
      }

      for (var p = d.length; d[0] <= s;) d.shift(), --p;

      for (; d[p - 1] > h;) d.pop(), --p;

      var g,
          y = new Array(p + 1);

      for (i = 0; i <= p; ++i) (g = y[i] = []).x0 = i > 0 ? d[i - 1] : s, g.x1 = i < p ? d[i] : h;

      if (isFinite(a)) {
        if (a > 0) for (i = 0; i < u; ++i) null != (o = c[i]) && s <= o && o <= h && y[Math.min(p, Math.floor((o - s) / a))].push(r[i]);else if (a < 0) for (i = 0; i < u; ++i) if (null != (o = c[i]) && s <= o && o <= h) {
          const t = Math.floor((s - o) * a);
          y[Math.min(p, t + (d[t] <= o))].push(r[i]);
        }
      } else for (i = 0; i < u; ++i) null != (o = c[i]) && s <= o && o <= h && y[l(d, o, 0, p)].push(r[i]);

      return y;
    }

    return r.value = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : j(n), r) : t;
    }, r.domain = function (t) {
      return arguments.length ? (n = "function" == typeof t ? t : j([t[0], t[1]]), r) : n;
    }, r.thresholds = function (t) {
      return arguments.length ? (e = "function" == typeof t ? t : Array.isArray(t) ? j(L.call(t)) : j(t), r) : e;
    }, r;
  }

  function J(t, n) {
    let e;
    if (void 0 === n) for (const n of t) null != n && (e < n || void 0 === e && n >= n) && (e = n);else {
      let r = -1;

      for (let i of t) null != (i = n(i, ++r, t)) && (e < i || void 0 === e && i >= i) && (e = i);
    }
    return e;
  }

  function tt(t, n) {
    let e,
        r = -1,
        i = -1;
    if (void 0 === n) for (const n of t) ++i, null != n && (e < n || void 0 === e && n >= n) && (e = n, r = i);else for (let o of t) null != (o = n(o, ++i, t)) && (e < o || void 0 === e && o >= o) && (e = o, r = i);
    return r;
  }

  function nt(t, n) {
    let e;
    if (void 0 === n) for (const n of t) null != n && (e > n || void 0 === e && n >= n) && (e = n);else {
      let r = -1;

      for (let i of t) null != (i = n(i, ++r, t)) && (e > i || void 0 === e && i >= i) && (e = i);
    }
    return e;
  }

  function et(t, n) {
    let e,
        r = -1,
        i = -1;
    if (void 0 === n) for (const n of t) ++i, null != n && (e > n || void 0 === e && n >= n) && (e = n, r = i);else for (let o of t) null != (o = n(o, ++i, t)) && (e > o || void 0 === e && o >= o) && (e = o, r = i);
    return r;
  }

  function rt(t, n, e = 0, r = t.length - 1, i) {
    for (i = void 0 === i ? Y : B(i); r > e;) {
      if (r - e > 600) {
        const o = r - e + 1,
              a = n - e + 1,
              u = Math.log(o),
              c = .5 * Math.exp(2 * u / 3),
              f = .5 * Math.sqrt(u * c * (o - c) / o) * (a - o / 2 < 0 ? -1 : 1);
        rt(t, n, Math.max(e, Math.floor(n - a * c / o + f)), Math.min(r, Math.floor(n + (o - a) * c / o + f)), i);
      }

      const o = t[n];
      let a = e,
          u = r;

      for (it(t, e, n), i(t[r], o) > 0 && it(t, e, r); a < u;) {
        for (it(t, a, u), ++a, --u; i(t[a], o) < 0;) ++a;

        for (; i(t[u], o) > 0;) --u;
      }

      0 === i(t[e], o) ? it(t, e, u) : (++u, it(t, u, r)), u <= n && (e = u + 1), n <= u && (r = u - 1);
    }

    return t;
  }

  function it(t, n, e) {
    const r = t[n];
    t[n] = t[e], t[e] = r;
  }

  function ot(t, e = n) {
    let r,
        i = !1;

    if (1 === e.length) {
      let o;

      for (const a of t) {
        const t = e(a);
        (i ? n(t, o) > 0 : 0 === n(t, t)) && (r = a, o = t, i = !0);
      }
    } else for (const n of t) (i ? e(n, r) > 0 : 0 === e(n, n)) && (r = n, i = !0);

    return r;
  }

  function at(t, n, e) {
    if (r = (t = Float64Array.from(a(t, e))).length) {
      if ((n = +n) <= 0 || r < 2) return nt(t);
      if (n >= 1) return J(t);
      var r,
          i = (r - 1) * n,
          o = Math.floor(i),
          u = J(rt(t, o).subarray(0, o + 1));
      return u + (nt(t.subarray(o + 1)) - u) * (i - o);
    }
  }

  function ut(t, n, e = o) {
    if (r = t.length) {
      if ((n = +n) <= 0 || r < 2) return +e(t[0], 0, t);
      if (n >= 1) return +e(t[r - 1], r - 1, t);
      var r,
          i = (r - 1) * n,
          a = Math.floor(i),
          u = +e(t[a], a, t);
      return u + (+e(t[a + 1], a + 1, t) - u) * (i - a);
    }
  }

  function ct(t, n, e) {
    if (r = (t = Float64Array.from(a(t, e))).length) {
      if ((n = +n) <= 0 || r < 2) return et(t);
      if (n >= 1) return tt(t);
      var r,
          i = Math.floor((r - 1) * n),
          o = rt(Uint32Array.from(t, (t, n) => n), i, 0, r - 1, (n, e) => Y(t[n], t[e]));
      return ot(o.subarray(0, i + 1), n => t[n]);
    }
  }

  function ft(t) {
    return Array.from(function* (t) {
      for (const n of t) yield* n;
    }(t));
  }

  function st(t, n) {
    return [t, n];
  }

  function lt(t, n, e) {
    t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;

    for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), o = new Array(i); ++r < i;) o[r] = t + r * e;

    return o;
  }

  function ht(t, e = n) {
    if (1 === e.length) return et(t, e);
    let r,
        i = -1,
        o = -1;

    for (const n of t) ++o, (i < 0 ? 0 === e(n, n) : e(n, r) < 0) && (r = n, i = o);

    return i;
  }

  var dt = pt(Math.random);

  function pt(t) {
    return function (n, e = 0, r = n.length) {
      let i = r - (e = +e);

      for (; i;) {
        const r = t() * i-- | 0,
              o = n[i + e];
        n[i + e] = n[r + e], n[r + e] = o;
      }

      return n;
    };
  }

  function gt(t) {
    if (!(i = t.length)) return [];

    for (var n = -1, e = nt(t, yt), r = new Array(e); ++n < e;) for (var i, o = -1, a = r[n] = new Array(i); ++o < i;) a[o] = t[o][n];

    return r;
  }

  function yt(t) {
    return t.length;
  }

  function vt(t) {
    return t instanceof InternSet ? t : new InternSet(t);
  }

  function _t(t, n) {
    const e = t[Symbol.iterator](),
          r = new Set();

    for (const t of n) {
      const n = bt(t);
      if (r.has(n)) continue;
      let i, o;

      for (; ({
        value: i,
        done: o
      } = e.next());) {
        if (o) return !1;
        const t = bt(i);
        if (r.add(t), Object.is(n, t)) break;
      }
    }

    return !0;
  }

  function bt(t) {
    return null !== t && "object" == typeof t ? t.valueOf() : t;
  }

  function mt(t) {
    return t;
  }

  var xt = 1e-6;

  function wt(t) {
    return "translate(" + t + ",0)";
  }

  function Mt(t) {
    return "translate(0," + t + ")";
  }

  function At(t) {
    return n => +t(n);
  }

  function Tt(t, n) {
    return n = Math.max(0, t.bandwidth() - 2 * n) / 2, t.round() && (n = Math.round(n)), e => +t(e) + n;
  }

  function St() {
    return !this.__axis;
  }

  function Et(t, n) {
    var e = [],
        r = null,
        i = null,
        o = 6,
        a = 6,
        u = 3,
        c = "undefined" != typeof window && window.devicePixelRatio > 1 ? 0 : .5,
        f = 1 === t || 4 === t ? -1 : 1,
        s = 4 === t || 2 === t ? "x" : "y",
        l = 1 === t || 3 === t ? wt : Mt;

    function h(h) {
      var d = null == r ? n.ticks ? n.ticks.apply(n, e) : n.domain() : r,
          p = null == i ? n.tickFormat ? n.tickFormat.apply(n, e) : mt : i,
          g = Math.max(o, 0) + u,
          y = n.range(),
          v = +y[0] + c,
          _ = +y[y.length - 1] + c,
          b = (n.bandwidth ? Tt : At)(n.copy(), c),
          m = h.selection ? h.selection() : h,
          x = m.selectAll(".domain").data([null]),
          w = m.selectAll(".tick").data(d, n).order(),
          M = w.exit(),
          A = w.enter().append("g").attr("class", "tick"),
          T = w.select("line"),
          S = w.select("text");

      x = x.merge(x.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), w = w.merge(A), T = T.merge(A.append("line").attr("stroke", "currentColor").attr(s + "2", f * o)), S = S.merge(A.append("text").attr("fill", "currentColor").attr(s, f * g).attr("dy", 1 === t ? "0em" : 3 === t ? "0.71em" : "0.32em")), h !== m && (x = x.transition(h), w = w.transition(h), T = T.transition(h), S = S.transition(h), M = M.transition(h).attr("opacity", xt).attr("transform", function (t) {
        return isFinite(t = b(t)) ? l(t + c) : this.getAttribute("transform");
      }), A.attr("opacity", xt).attr("transform", function (t) {
        var n = this.parentNode.__axis;
        return l((n && isFinite(n = n(t)) ? n : b(t)) + c);
      })), M.remove(), x.attr("d", 4 === t || 2 === t ? a ? "M" + f * a + "," + v + "H" + c + "V" + _ + "H" + f * a : "M" + c + "," + v + "V" + _ : a ? "M" + v + "," + f * a + "V" + c + "H" + _ + "V" + f * a : "M" + v + "," + c + "H" + _), w.attr("opacity", 1).attr("transform", function (t) {
        return l(b(t) + c);
      }), T.attr(s + "2", f * o), S.attr(s, f * g).text(p), m.filter(St).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", 2 === t ? "start" : 4 === t ? "end" : "middle"), m.each(function () {
        this.__axis = b;
      });
    }

    return h.scale = function (t) {
      return arguments.length ? (n = t, h) : n;
    }, h.ticks = function () {
      return e = Array.from(arguments), h;
    }, h.tickArguments = function (t) {
      return arguments.length ? (e = null == t ? [] : Array.from(t), h) : e.slice();
    }, h.tickValues = function (t) {
      return arguments.length ? (r = null == t ? null : Array.from(t), h) : r && r.slice();
    }, h.tickFormat = function (t) {
      return arguments.length ? (i = t, h) : i;
    }, h.tickSize = function (t) {
      return arguments.length ? (o = a = +t, h) : o;
    }, h.tickSizeInner = function (t) {
      return arguments.length ? (o = +t, h) : o;
    }, h.tickSizeOuter = function (t) {
      return arguments.length ? (a = +t, h) : a;
    }, h.tickPadding = function (t) {
      return arguments.length ? (u = +t, h) : u;
    }, h.offset = function (t) {
      return arguments.length ? (c = +t, h) : c;
    }, h;
  }

  var kt = {
    value: () => {}
  };

  function Nt() {
    for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
      if (!(t = arguments[n] + "") || t in r || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
      r[t] = [];
    }

    return new Ct(r);
  }

  function Ct(t) {
    this._ = t;
  }

  function Pt(t, n) {
    return t.trim().split(/^|\s+/).map(function (t) {
      var e = "",
          r = t.indexOf(".");
      if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
      return {
        type: t,
        name: e
      };
    });
  }

  function zt(t, n) {
    for (var e, r = 0, i = t.length; r < i; ++r) if ((e = t[r]).name === n) return e.value;
  }

  function Dt(t, n, e) {
    for (var r = 0, i = t.length; r < i; ++r) if (t[r].name === n) {
      t[r] = kt, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }

    return null != e && t.push({
      name: n,
      value: e
    }), t;
  }

  Ct.prototype = Nt.prototype = {
    constructor: Ct,
    on: function (t, n) {
      var e,
          r = this._,
          i = Pt(t + "", r),
          o = -1,
          a = i.length;

      if (!(arguments.length < 2)) {
        if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);

        for (; ++o < a;) if (e = (t = i[o]).type) r[e] = Dt(r[e], t.name, n);else if (null == n) for (e in r) r[e] = Dt(r[e], t.name, null);

        return this;
      }

      for (; ++o < a;) if ((e = (t = i[o]).type) && (e = zt(r[e], t.name))) return e;
    },
    copy: function () {
      var t = {},
          n = this._;

      for (var e in n) t[e] = n[e].slice();

      return new Ct(t);
    },
    call: function (t, n) {
      if ((e = arguments.length - 2) > 0) for (var e, r, i = new Array(e), o = 0; o < e; ++o) i[o] = arguments[o + 2];
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);

      for (o = 0, e = (r = this._[t]).length; o < e; ++o) r[o].value.apply(n, i);
    },
    apply: function (t, n, e) {
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);

      for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
    }
  };
  var Rt = "http://www.w3.org/1999/xhtml",
      Ft = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: Rt,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };

  function qt(t) {
    var n = t += "",
        e = n.indexOf(":");
    return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), Ft.hasOwnProperty(n) ? {
      space: Ft[n],
      local: t
    } : t;
  }

  function It(t) {
    return function () {
      var n = this.ownerDocument,
          e = this.namespaceURI;
      return e === Rt && n.documentElement.namespaceURI === Rt ? n.createElement(t) : n.createElementNS(e, t);
    };
  }

  function Ot(t) {
    return function () {
      return this.ownerDocument.createElementNS(t.space, t.local);
    };
  }

  function Ut(t) {
    var n = qt(t);
    return (n.local ? Ot : It)(n);
  }

  function Bt() {}

  function Yt(t) {
    return null == t ? Bt : function () {
      return this.querySelector(t);
    };
  }

  function Lt(t) {
    return null == t ? [] : Array.isArray(t) ? t : Array.from(t);
  }

  function jt() {
    return [];
  }

  function $t(t) {
    return null == t ? jt : function () {
      return this.querySelectorAll(t);
    };
  }

  function Ht(t) {
    return function () {
      return this.matches(t);
    };
  }

  function Xt(t) {
    return function (n) {
      return n.matches(t);
    };
  }

  var Gt = Array.prototype.find;

  function Vt() {
    return this.firstElementChild;
  }

  var Wt = Array.prototype.filter;

  function Zt() {
    return Array.from(this.children);
  }

  function Kt(t) {
    return new Array(t.length);
  }

  function Qt(t, n) {
    this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
  }

  function Jt(t) {
    return function () {
      return t;
    };
  }

  function tn(t, n, e, r, i, o) {
    for (var a, u = 0, c = n.length, f = o.length; u < f; ++u) (a = n[u]) ? (a.__data__ = o[u], r[u] = a) : e[u] = new Qt(t, o[u]);

    for (; u < c; ++u) (a = n[u]) && (i[u] = a);
  }

  function nn(t, n, e, r, i, o, a) {
    var u,
        c,
        f,
        s = new Map(),
        l = n.length,
        h = o.length,
        d = new Array(l);

    for (u = 0; u < l; ++u) (c = n[u]) && (d[u] = f = a.call(c, c.__data__, u, n) + "", s.has(f) ? i[u] = c : s.set(f, c));

    for (u = 0; u < h; ++u) f = a.call(t, o[u], u, o) + "", (c = s.get(f)) ? (r[u] = c, c.__data__ = o[u], s.delete(f)) : e[u] = new Qt(t, o[u]);

    for (u = 0; u < l; ++u) (c = n[u]) && s.get(d[u]) === c && (i[u] = c);
  }

  function en(t) {
    return t.__data__;
  }

  function rn(t) {
    return "object" == typeof t && "length" in t ? t : Array.from(t);
  }

  function on(t, n) {
    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
  }

  function an(t) {
    return function () {
      this.removeAttribute(t);
    };
  }

  function un(t) {
    return function () {
      this.removeAttributeNS(t.space, t.local);
    };
  }

  function cn(t, n) {
    return function () {
      this.setAttribute(t, n);
    };
  }

  function fn(t, n) {
    return function () {
      this.setAttributeNS(t.space, t.local, n);
    };
  }

  function sn(t, n) {
    return function () {
      var e = n.apply(this, arguments);
      null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
    };
  }

  function ln(t, n) {
    return function () {
      var e = n.apply(this, arguments);
      null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
    };
  }

  function hn(t) {
    return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
  }

  function dn(t) {
    return function () {
      this.style.removeProperty(t);
    };
  }

  function pn(t, n, e) {
    return function () {
      this.style.setProperty(t, n, e);
    };
  }

  function gn(t, n, e) {
    return function () {
      var r = n.apply(this, arguments);
      null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
    };
  }

  function yn(t, n) {
    return t.style.getPropertyValue(n) || hn(t).getComputedStyle(t, null).getPropertyValue(n);
  }

  function vn(t) {
    return function () {
      delete this[t];
    };
  }

  function _n(t, n) {
    return function () {
      this[t] = n;
    };
  }

  function bn(t, n) {
    return function () {
      var e = n.apply(this, arguments);
      null == e ? delete this[t] : this[t] = e;
    };
  }

  function mn(t) {
    return t.trim().split(/^|\s+/);
  }

  function xn(t) {
    return t.classList || new wn(t);
  }

  function wn(t) {
    this._node = t, this._names = mn(t.getAttribute("class") || "");
  }

  function Mn(t, n) {
    for (var e = xn(t), r = -1, i = n.length; ++r < i;) e.add(n[r]);
  }

  function An(t, n) {
    for (var e = xn(t), r = -1, i = n.length; ++r < i;) e.remove(n[r]);
  }

  function Tn(t) {
    return function () {
      Mn(this, t);
    };
  }

  function Sn(t) {
    return function () {
      An(this, t);
    };
  }

  function En(t, n) {
    return function () {
      (n.apply(this, arguments) ? Mn : An)(this, t);
    };
  }

  function kn() {
    this.textContent = "";
  }

  function Nn(t) {
    return function () {
      this.textContent = t;
    };
  }

  function Cn(t) {
    return function () {
      var n = t.apply(this, arguments);
      this.textContent = null == n ? "" : n;
    };
  }

  function Pn() {
    this.innerHTML = "";
  }

  function zn(t) {
    return function () {
      this.innerHTML = t;
    };
  }

  function Dn(t) {
    return function () {
      var n = t.apply(this, arguments);
      this.innerHTML = null == n ? "" : n;
    };
  }

  function Rn() {
    this.nextSibling && this.parentNode.appendChild(this);
  }

  function Fn() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }

  function qn() {
    return null;
  }

  function In() {
    var t = this.parentNode;
    t && t.removeChild(this);
  }

  function On() {
    var t = this.cloneNode(!1),
        n = this.parentNode;
    return n ? n.insertBefore(t, this.nextSibling) : t;
  }

  function Un() {
    var t = this.cloneNode(!0),
        n = this.parentNode;
    return n ? n.insertBefore(t, this.nextSibling) : t;
  }

  function Bn(t) {
    return t.trim().split(/^|\s+/).map(function (t) {
      var n = "",
          e = t.indexOf(".");
      return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {
        type: t,
        name: n
      };
    });
  }

  function Yn(t) {
    return function () {
      var n = this.__on;

      if (n) {
        for (var e, r = 0, i = -1, o = n.length; r < o; ++r) e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.options);

        ++i ? n.length = i : delete this.__on;
      }
    };
  }

  function Ln(t, n, e) {
    return function () {
      var r,
          i = this.__on,
          o = function (t) {
        return function (n) {
          t.call(this, n, this.__data__);
        };
      }(n);

      if (i) for (var a = 0, u = i.length; a < u; ++a) if ((r = i[a]).type === t.type && r.name === t.name) return this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener = o, r.options = e), void (r.value = n);
      this.addEventListener(t.type, o, e), r = {
        type: t.type,
        name: t.name,
        value: n,
        listener: o,
        options: e
      }, i ? i.push(r) : this.__on = [r];
    };
  }

  function jn(t, n, e) {
    var r = hn(t),
        i = r.CustomEvent;
    "function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
  }

  function $n(t, n) {
    return function () {
      return jn(this, t, n);
    };
  }

  function Hn(t, n) {
    return function () {
      return jn(this, t, n.apply(this, arguments));
    };
  }

  Qt.prototype = {
    constructor: Qt,
    appendChild: function (t) {
      return this._parent.insertBefore(t, this._next);
    },
    insertBefore: function (t, n) {
      return this._parent.insertBefore(t, n);
    },
    querySelector: function (t) {
      return this._parent.querySelector(t);
    },
    querySelectorAll: function (t) {
      return this._parent.querySelectorAll(t);
    }
  }, wn.prototype = {
    add: function (t) {
      this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
    },
    remove: function (t) {
      var n = this._names.indexOf(t);

      n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
    },
    contains: function (t) {
      return this._names.indexOf(t) >= 0;
    }
  };
  var Xn = [null];

  function Gn(t, n) {
    this._groups = t, this._parents = n;
  }

  function Vn() {
    return new Gn([[document.documentElement]], Xn);
  }

  function Wn(t) {
    return "string" == typeof t ? new Gn([[document.querySelector(t)]], [document.documentElement]) : new Gn([[t]], Xn);
  }

  Gn.prototype = Vn.prototype = {
    constructor: Gn,
    select: function (t) {
      "function" != typeof t && (t = Yt(t));

      for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) for (var o, a, u = n[i], c = u.length, f = r[i] = new Array(c), s = 0; s < c; ++s) (o = u[s]) && (a = t.call(o, o.__data__, s, u)) && ("__data__" in o && (a.__data__ = o.__data__), f[s] = a);

      return new Gn(r, this._parents);
    },
    selectAll: function (t) {
      t = "function" == typeof t ? function (t) {
        return function () {
          return Lt(t.apply(this, arguments));
        };
      }(t) : $t(t);

      for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o) for (var a, u = n[o], c = u.length, f = 0; f < c; ++f) (a = u[f]) && (r.push(t.call(a, a.__data__, f, u)), i.push(a));

      return new Gn(r, i);
    },
    selectChild: function (t) {
      return this.select(null == t ? Vt : function (t) {
        return function () {
          return Gt.call(this.children, t);
        };
      }("function" == typeof t ? t : Xt(t)));
    },
    selectChildren: function (t) {
      return this.selectAll(null == t ? Zt : function (t) {
        return function () {
          return Wt.call(this.children, t);
        };
      }("function" == typeof t ? t : Xt(t)));
    },
    filter: function (t) {
      "function" != typeof t && (t = Ht(t));

      for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) for (var o, a = n[i], u = a.length, c = r[i] = [], f = 0; f < u; ++f) (o = a[f]) && t.call(o, o.__data__, f, a) && c.push(o);

      return new Gn(r, this._parents);
    },
    data: function (t, n) {
      if (!arguments.length) return Array.from(this, en);
      var e = n ? nn : tn,
          r = this._parents,
          i = this._groups;
      "function" != typeof t && (t = Jt(t));

      for (var o = i.length, a = new Array(o), u = new Array(o), c = new Array(o), f = 0; f < o; ++f) {
        var s = r[f],
            l = i[f],
            h = l.length,
            d = rn(t.call(s, s && s.__data__, f, r)),
            p = d.length,
            g = u[f] = new Array(p),
            y = a[f] = new Array(p),
            v = c[f] = new Array(h);
        e(s, l, g, y, v, d, n);

        for (var _, b, m = 0, x = 0; m < p; ++m) if (_ = g[m]) {
          for (m >= x && (x = m + 1); !(b = y[x]) && ++x < p;);

          _._next = b || null;
        }
      }

      return (a = new Gn(a, r))._enter = u, a._exit = c, a;
    },
    enter: function () {
      return new Gn(this._enter || this._groups.map(Kt), this._parents);
    },
    exit: function () {
      return new Gn(this._exit || this._groups.map(Kt), this._parents);
    },
    join: function (t, n, e) {
      var r = this.enter(),
          i = this,
          o = this.exit();
      return "function" == typeof t ? (r = t(r)) && (r = r.selection()) : r = r.append(t + ""), null != n && (i = n(i)) && (i = i.selection()), null == e ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
    },
    merge: function (t) {
      for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), u = new Array(i), c = 0; c < a; ++c) for (var f, s = e[c], l = r[c], h = s.length, d = u[c] = new Array(h), p = 0; p < h; ++p) (f = s[p] || l[p]) && (d[p] = f);

      for (; c < i; ++c) u[c] = e[c];

      return new Gn(u, this._parents);
    },
    selection: function () {
      return this;
    },
    order: function () {
      for (var t = this._groups, n = -1, e = t.length; ++n < e;) for (var r, i = t[n], o = i.length - 1, a = i[o]; --o >= 0;) (r = i[o]) && (a && 4 ^ r.compareDocumentPosition(a) && a.parentNode.insertBefore(r, a), a = r);

      return this;
    },
    sort: function (t) {
      function n(n, e) {
        return n && e ? t(n.__data__, e.__data__) : !n - !e;
      }

      t || (t = on);

      for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
        for (var a, u = e[o], c = u.length, f = i[o] = new Array(c), s = 0; s < c; ++s) (a = u[s]) && (f[s] = a);

        f.sort(n);
      }

      return new Gn(i, this._parents).order();
    },
    call: function () {
      var t = arguments[0];
      return arguments[0] = this, t.apply(null, arguments), this;
    },
    nodes: function () {
      return Array.from(this);
    },
    node: function () {
      for (var t = this._groups, n = 0, e = t.length; n < e; ++n) for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
        var a = r[i];
        if (a) return a;
      }

      return null;
    },
    size: function () {
      let t = 0;

      for (const n of this) ++t;

      return t;
    },
    empty: function () {
      return !this.node();
    },
    each: function (t) {
      for (var n = this._groups, e = 0, r = n.length; e < r; ++e) for (var i, o = n[e], a = 0, u = o.length; a < u; ++a) (i = o[a]) && t.call(i, i.__data__, a, o);

      return this;
    },
    attr: function (t, n) {
      var e = qt(t);

      if (arguments.length < 2) {
        var r = this.node();
        return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
      }

      return this.each((null == n ? e.local ? un : an : "function" == typeof n ? e.local ? ln : sn : e.local ? fn : cn)(e, n));
    },
    style: function (t, n, e) {
      return arguments.length > 1 ? this.each((null == n ? dn : "function" == typeof n ? gn : pn)(t, n, null == e ? "" : e)) : yn(this.node(), t);
    },
    property: function (t, n) {
      return arguments.length > 1 ? this.each((null == n ? vn : "function" == typeof n ? bn : _n)(t, n)) : this.node()[t];
    },
    classed: function (t, n) {
      var e = mn(t + "");

      if (arguments.length < 2) {
        for (var r = xn(this.node()), i = -1, o = e.length; ++i < o;) if (!r.contains(e[i])) return !1;

        return !0;
      }

      return this.each(("function" == typeof n ? En : n ? Tn : Sn)(e, n));
    },
    text: function (t) {
      return arguments.length ? this.each(null == t ? kn : ("function" == typeof t ? Cn : Nn)(t)) : this.node().textContent;
    },
    html: function (t) {
      return arguments.length ? this.each(null == t ? Pn : ("function" == typeof t ? Dn : zn)(t)) : this.node().innerHTML;
    },
    raise: function () {
      return this.each(Rn);
    },
    lower: function () {
      return this.each(Fn);
    },
    append: function (t) {
      var n = "function" == typeof t ? t : Ut(t);
      return this.select(function () {
        return this.appendChild(n.apply(this, arguments));
      });
    },
    insert: function (t, n) {
      var e = "function" == typeof t ? t : Ut(t),
          r = null == n ? qn : "function" == typeof n ? n : Yt(n);
      return this.select(function () {
        return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
      });
    },
    remove: function () {
      return this.each(In);
    },
    clone: function (t) {
      return this.select(t ? Un : On);
    },
    datum: function (t) {
      return arguments.length ? this.property("__data__", t) : this.node().__data__;
    },
    on: function (t, n, e) {
      var r,
          i,
          o = Bn(t + ""),
          a = o.length;

      if (!(arguments.length < 2)) {
        for (u = n ? Ln : Yn, r = 0; r < a; ++r) this.each(u(o[r], n, e));

        return this;
      }

      var u = this.node().__on;

      if (u) for (var c, f = 0, s = u.length; f < s; ++f) for (r = 0, c = u[f]; r < a; ++r) if ((i = o[r]).type === c.type && i.name === c.name) return c.value;
    },
    dispatch: function (t, n) {
      return this.each(("function" == typeof n ? Hn : $n)(t, n));
    },
    [Symbol.iterator]: function* () {
      for (var t = this._groups, n = 0, e = t.length; n < e; ++n) for (var r, i = t[n], o = 0, a = i.length; o < a; ++o) (r = i[o]) && (yield r);
    }
  };
  var Zn = 0;

  function Kn() {
    return new Qn();
  }

  function Qn() {
    this._ = "@" + (++Zn).toString(36);
  }

  function Jn(t) {
    let n;

    for (; n = t.sourceEvent;) t = n;

    return t;
  }

  function te(t, n) {
    if (t = Jn(t), void 0 === n && (n = t.currentTarget), n) {
      var e = n.ownerSVGElement || n;

      if (e.createSVGPoint) {
        var r = e.createSVGPoint();
        return r.x = t.clientX, r.y = t.clientY, [(r = r.matrixTransform(n.getScreenCTM().inverse())).x, r.y];
      }

      if (n.getBoundingClientRect) {
        var i = n.getBoundingClientRect();
        return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
      }
    }

    return [t.pageX, t.pageY];
  }

  Qn.prototype = Kn.prototype = {
    constructor: Qn,
    get: function (t) {
      for (var n = this._; !(n in t);) if (!(t = t.parentNode)) return;

      return t[n];
    },
    set: function (t, n) {
      return t[this._] = n;
    },
    remove: function (t) {
      return this._ in t && delete t[this._];
    },
    toString: function () {
      return this._;
    }
  };
  const ne = {
    passive: !1
  },
        ee = {
    capture: !0,
    passive: !1
  };

  function re(t) {
    t.stopImmediatePropagation();
  }

  function ie(t) {
    t.preventDefault(), t.stopImmediatePropagation();
  }

  function oe(t) {
    var n = t.document.documentElement,
        e = Wn(t).on("dragstart.drag", ie, ee);
    "onselectstart" in n ? e.on("selectstart.drag", ie, ee) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
  }

  function ae(t, n) {
    var e = t.document.documentElement,
        r = Wn(t).on("dragstart.drag", null);
    n && (r.on("click.drag", ie, ee), setTimeout(function () {
      r.on("click.drag", null);
    }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
  }

  var ue = t => () => t;

  function ce(t, {
    sourceEvent: n,
    subject: e,
    target: r,
    identifier: i,
    active: o,
    x: a,
    y: u,
    dx: c,
    dy: f,
    dispatch: s
  }) {
    Object.defineProperties(this, {
      type: {
        value: t,
        enumerable: !0,
        configurable: !0
      },
      sourceEvent: {
        value: n,
        enumerable: !0,
        configurable: !0
      },
      subject: {
        value: e,
        enumerable: !0,
        configurable: !0
      },
      target: {
        value: r,
        enumerable: !0,
        configurable: !0
      },
      identifier: {
        value: i,
        enumerable: !0,
        configurable: !0
      },
      active: {
        value: o,
        enumerable: !0,
        configurable: !0
      },
      x: {
        value: a,
        enumerable: !0,
        configurable: !0
      },
      y: {
        value: u,
        enumerable: !0,
        configurable: !0
      },
      dx: {
        value: c,
        enumerable: !0,
        configurable: !0
      },
      dy: {
        value: f,
        enumerable: !0,
        configurable: !0
      },
      _: {
        value: s
      }
    });
  }

  function fe(t) {
    return !t.ctrlKey && !t.button;
  }

  function se() {
    return this.parentNode;
  }

  function le(t, n) {
    return null == n ? {
      x: t.x,
      y: t.y
    } : n;
  }

  function he() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }

  function de(t, n, e) {
    t.prototype = n.prototype = e, e.constructor = t;
  }

  function pe(t, n) {
    var e = Object.create(t.prototype);

    for (var r in n) e[r] = n[r];

    return e;
  }

  function ge() {}

  ce.prototype.on = function () {
    var t = this._.on.apply(this._, arguments);

    return t === this._ ? this : t;
  };

  var ye = .7,
      ve = 1 / ye,
      _e = "\\s*([+-]?\\d+)\\s*",
      be = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      me = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      xe = /^#([0-9a-f]{3,8})$/,
      we = new RegExp("^rgb\\(" + _e + "," + _e + "," + _e + "\\)$"),
      Me = new RegExp("^rgb\\(" + me + "," + me + "," + me + "\\)$"),
      Ae = new RegExp("^rgba\\(" + _e + "," + _e + "," + _e + "," + be + "\\)$"),
      Te = new RegExp("^rgba\\(" + me + "," + me + "," + me + "," + be + "\\)$"),
      Se = new RegExp("^hsl\\(" + be + "," + me + "," + me + "\\)$"),
      Ee = new RegExp("^hsla\\(" + be + "," + me + "," + me + "," + be + "\\)$"),
      ke = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  };

  function Ne() {
    return this.rgb().formatHex();
  }

  function Ce() {
    return this.rgb().formatRgb();
  }

  function Pe(t) {
    var n, e;
    return t = (t + "").trim().toLowerCase(), (n = xe.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), 6 === e ? ze(n) : 3 === e ? new qe(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : 8 === e ? De(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (255 & n) / 255) : 4 === e ? De(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, ((15 & n) << 4 | 15 & n) / 255) : null) : (n = we.exec(t)) ? new qe(n[1], n[2], n[3], 1) : (n = Me.exec(t)) ? new qe(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = Ae.exec(t)) ? De(n[1], n[2], n[3], n[4]) : (n = Te.exec(t)) ? De(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = Se.exec(t)) ? Le(n[1], n[2] / 100, n[3] / 100, 1) : (n = Ee.exec(t)) ? Le(n[1], n[2] / 100, n[3] / 100, n[4]) : ke.hasOwnProperty(t) ? ze(ke[t]) : "transparent" === t ? new qe(NaN, NaN, NaN, 0) : null;
  }

  function ze(t) {
    return new qe(t >> 16 & 255, t >> 8 & 255, 255 & t, 1);
  }

  function De(t, n, e, r) {
    return r <= 0 && (t = n = e = NaN), new qe(t, n, e, r);
  }

  function Re(t) {
    return t instanceof ge || (t = Pe(t)), t ? new qe((t = t.rgb()).r, t.g, t.b, t.opacity) : new qe();
  }

  function Fe(t, n, e, r) {
    return 1 === arguments.length ? Re(t) : new qe(t, n, e, null == r ? 1 : r);
  }

  function qe(t, n, e, r) {
    this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
  }

  function Ie() {
    return "#" + Ye(this.r) + Ye(this.g) + Ye(this.b);
  }

  function Oe() {
    const t = Ue(this.opacity);
    return "" + (1 === t ? "rgb(" : "rgba(") + Be(this.r) + ", " + Be(this.g) + ", " + Be(this.b) + (1 === t ? ")" : ", " + t + ")");
  }

  function Ue(t) {
    return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
  }

  function Be(t) {
    return Math.max(0, Math.min(255, Math.round(t) || 0));
  }

  function Ye(t) {
    return ((t = Be(t)) < 16 ? "0" : "") + t.toString(16);
  }

  function Le(t, n, e, r) {
    return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new He(t, n, e, r);
  }

  function je(t) {
    if (t instanceof He) return new He(t.h, t.s, t.l, t.opacity);
    if (t instanceof ge || (t = Pe(t)), !t) return new He();
    if (t instanceof He) return t;
    var n = (t = t.rgb()).r / 255,
        e = t.g / 255,
        r = t.b / 255,
        i = Math.min(n, e, r),
        o = Math.max(n, e, r),
        a = NaN,
        u = o - i,
        c = (o + i) / 2;
    return u ? (a = n === o ? (e - r) / u + 6 * (e < r) : e === o ? (r - n) / u + 2 : (n - e) / u + 4, u /= c < .5 ? o + i : 2 - o - i, a *= 60) : u = c > 0 && c < 1 ? 0 : a, new He(a, u, c, t.opacity);
  }

  function $e(t, n, e, r) {
    return 1 === arguments.length ? je(t) : new He(t, n, e, null == r ? 1 : r);
  }

  function He(t, n, e, r) {
    this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
  }

  function Xe(t) {
    return (t = (t || 0) % 360) < 0 ? t + 360 : t;
  }

  function Ge(t) {
    return Math.max(0, Math.min(1, t || 0));
  }

  function Ve(t, n, e) {
    return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n);
  }

  de(ge, Pe, {
    copy(t) {
      return Object.assign(new this.constructor(), this, t);
    },

    displayable() {
      return this.rgb().displayable();
    },

    hex: Ne,
    formatHex: Ne,
    formatHex8: function () {
      return this.rgb().formatHex8();
    },
    formatHsl: function () {
      return je(this).formatHsl();
    },
    formatRgb: Ce,
    toString: Ce
  }), de(qe, Fe, pe(ge, {
    brighter(t) {
      return t = null == t ? ve : Math.pow(ve, t), new qe(this.r * t, this.g * t, this.b * t, this.opacity);
    },

    darker(t) {
      return t = null == t ? ye : Math.pow(ye, t), new qe(this.r * t, this.g * t, this.b * t, this.opacity);
    },

    rgb() {
      return this;
    },

    clamp() {
      return new qe(Be(this.r), Be(this.g), Be(this.b), Ue(this.opacity));
    },

    displayable() {
      return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },

    hex: Ie,
    formatHex: Ie,
    formatHex8: function () {
      return "#" + Ye(this.r) + Ye(this.g) + Ye(this.b) + Ye(255 * (isNaN(this.opacity) ? 1 : this.opacity));
    },
    formatRgb: Oe,
    toString: Oe
  })), de(He, $e, pe(ge, {
    brighter(t) {
      return t = null == t ? ve : Math.pow(ve, t), new He(this.h, this.s, this.l * t, this.opacity);
    },

    darker(t) {
      return t = null == t ? ye : Math.pow(ye, t), new He(this.h, this.s, this.l * t, this.opacity);
    },

    rgb() {
      var t = this.h % 360 + 360 * (this.h < 0),
          n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
          e = this.l,
          r = e + (e < .5 ? e : 1 - e) * n,
          i = 2 * e - r;
      return new qe(Ve(t >= 240 ? t - 240 : t + 120, i, r), Ve(t, i, r), Ve(t < 120 ? t + 240 : t - 120, i, r), this.opacity);
    },

    clamp() {
      return new He(Xe(this.h), Ge(this.s), Ge(this.l), Ue(this.opacity));
    },

    displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },

    formatHsl() {
      const t = Ue(this.opacity);
      return "" + (1 === t ? "hsl(" : "hsla(") + Xe(this.h) + ", " + 100 * Ge(this.s) + "%, " + 100 * Ge(this.l) + "%" + (1 === t ? ")" : ", " + t + ")");
    }

  }));
  const We = Math.PI / 180,
        Ze = 180 / Math.PI,
        Ke = .96422,
        Qe = .82521,
        Je = 4 / 29,
        tr = 6 / 29,
        nr = 3 * tr * tr;

  function er(t) {
    if (t instanceof ir) return new ir(t.l, t.a, t.b, t.opacity);
    if (t instanceof lr) return hr(t);
    t instanceof qe || (t = Re(t));
    var n,
        e,
        r = cr(t.r),
        i = cr(t.g),
        o = cr(t.b),
        a = or((.2225045 * r + .7168786 * i + .0606169 * o) / 1);
    return r === i && i === o ? n = e = a : (n = or((.4360747 * r + .3850649 * i + .1430804 * o) / Ke), e = or((.0139322 * r + .0971045 * i + .7141733 * o) / Qe)), new ir(116 * a - 16, 500 * (n - a), 200 * (a - e), t.opacity);
  }

  function rr(t, n, e, r) {
    return 1 === arguments.length ? er(t) : new ir(t, n, e, null == r ? 1 : r);
  }

  function ir(t, n, e, r) {
    this.l = +t, this.a = +n, this.b = +e, this.opacity = +r;
  }

  function or(t) {
    return t > .008856451679035631 ? Math.pow(t, 1 / 3) : t / nr + Je;
  }

  function ar(t) {
    return t > tr ? t * t * t : nr * (t - Je);
  }

  function ur(t) {
    return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
  }

  function cr(t) {
    return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
  }

  function fr(t) {
    if (t instanceof lr) return new lr(t.h, t.c, t.l, t.opacity);
    if (t instanceof ir || (t = er(t)), 0 === t.a && 0 === t.b) return new lr(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
    var n = Math.atan2(t.b, t.a) * Ze;
    return new lr(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
  }

  function sr(t, n, e, r) {
    return 1 === arguments.length ? fr(t) : new lr(t, n, e, null == r ? 1 : r);
  }

  function lr(t, n, e, r) {
    this.h = +t, this.c = +n, this.l = +e, this.opacity = +r;
  }

  function hr(t) {
    if (isNaN(t.h)) return new ir(t.l, 0, 0, t.opacity);
    var n = t.h * We;
    return new ir(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
  }

  de(ir, rr, pe(ge, {
    brighter(t) {
      return new ir(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
    },

    darker(t) {
      return new ir(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
    },

    rgb() {
      var t = (this.l + 16) / 116,
          n = isNaN(this.a) ? t : t + this.a / 500,
          e = isNaN(this.b) ? t : t - this.b / 200;
      return new qe(ur(3.1338561 * (n = Ke * ar(n)) - 1.6168667 * (t = 1 * ar(t)) - .4906146 * (e = Qe * ar(e))), ur(-.9787684 * n + 1.9161415 * t + .033454 * e), ur(.0719453 * n - .2289914 * t + 1.4052427 * e), this.opacity);
    }

  })), de(lr, sr, pe(ge, {
    brighter(t) {
      return new lr(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity);
    },

    darker(t) {
      return new lr(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity);
    },

    rgb() {
      return hr(this).rgb();
    }

  }));

  var dr = -.14861,
      pr = 1.78277,
      gr = -.29227,
      yr = -.90649,
      vr = 1.97294,
      _r = vr * yr,
      br = vr * pr,
      mr = pr * gr - yr * dr;

  function xr(t) {
    if (t instanceof Mr) return new Mr(t.h, t.s, t.l, t.opacity);
    t instanceof qe || (t = Re(t));
    var n = t.r / 255,
        e = t.g / 255,
        r = t.b / 255,
        i = (mr * r + _r * n - br * e) / (mr + _r - br),
        o = r - i,
        a = (vr * (e - i) - gr * o) / yr,
        u = Math.sqrt(a * a + o * o) / (vr * i * (1 - i)),
        c = u ? Math.atan2(a, o) * Ze - 120 : NaN;
    return new Mr(c < 0 ? c + 360 : c, u, i, t.opacity);
  }

  function wr(t, n, e, r) {
    return 1 === arguments.length ? xr(t) : new Mr(t, n, e, null == r ? 1 : r);
  }

  function Mr(t, n, e, r) {
    this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
  }

  function Ar(t, n, e, r, i) {
    var o = t * t,
        a = o * t;
    return ((1 - 3 * t + 3 * o - a) * n + (4 - 6 * o + 3 * a) * e + (1 + 3 * t + 3 * o - 3 * a) * r + a * i) / 6;
  }

  function Tr(t) {
    var n = t.length - 1;
    return function (e) {
      var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
          i = t[r],
          o = t[r + 1],
          a = r > 0 ? t[r - 1] : 2 * i - o,
          u = r < n - 1 ? t[r + 2] : 2 * o - i;
      return Ar((e - r / n) * n, a, i, o, u);
    };
  }

  function Sr(t) {
    var n = t.length;
    return function (e) {
      var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
          i = t[(r + n - 1) % n],
          o = t[r % n],
          a = t[(r + 1) % n],
          u = t[(r + 2) % n];
      return Ar((e - r / n) * n, i, o, a, u);
    };
  }

  de(Mr, wr, pe(ge, {
    brighter(t) {
      return t = null == t ? ve : Math.pow(ve, t), new Mr(this.h, this.s, this.l * t, this.opacity);
    },

    darker(t) {
      return t = null == t ? ye : Math.pow(ye, t), new Mr(this.h, this.s, this.l * t, this.opacity);
    },

    rgb() {
      var t = isNaN(this.h) ? 0 : (this.h + 120) * We,
          n = +this.l,
          e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
          r = Math.cos(t),
          i = Math.sin(t);
      return new qe(255 * (n + e * (dr * r + pr * i)), 255 * (n + e * (gr * r + yr * i)), 255 * (n + e * (vr * r)), this.opacity);
    }

  }));

  var Er = t => () => t;

  function kr(t, n) {
    return function (e) {
      return t + e * n;
    };
  }

  function Nr(t, n) {
    var e = n - t;
    return e ? kr(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : Er(isNaN(t) ? n : t);
  }

  function Cr(t) {
    return 1 == (t = +t) ? Pr : function (n, e) {
      return e - n ? function (t, n, e) {
        return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function (r) {
          return Math.pow(t + r * n, e);
        };
      }(n, e, t) : Er(isNaN(n) ? e : n);
    };
  }

  function Pr(t, n) {
    var e = n - t;
    return e ? kr(t, e) : Er(isNaN(t) ? n : t);
  }

  var zr = function t(n) {
    var e = Cr(n);

    function r(t, n) {
      var r = e((t = Fe(t)).r, (n = Fe(n)).r),
          i = e(t.g, n.g),
          o = e(t.b, n.b),
          a = Pr(t.opacity, n.opacity);
      return function (n) {
        return t.r = r(n), t.g = i(n), t.b = o(n), t.opacity = a(n), t + "";
      };
    }

    return r.gamma = t, r;
  }(1);

  function Dr(t) {
    return function (n) {
      var e,
          r,
          i = n.length,
          o = new Array(i),
          a = new Array(i),
          u = new Array(i);

      for (e = 0; e < i; ++e) r = Fe(n[e]), o[e] = r.r || 0, a[e] = r.g || 0, u[e] = r.b || 0;

      return o = t(o), a = t(a), u = t(u), r.opacity = 1, function (t) {
        return r.r = o(t), r.g = a(t), r.b = u(t), r + "";
      };
    };
  }

  var Rr = Dr(Tr),
      Fr = Dr(Sr);

  function qr(t, n) {
    n || (n = []);
    var e,
        r = t ? Math.min(n.length, t.length) : 0,
        i = n.slice();
    return function (o) {
      for (e = 0; e < r; ++e) i[e] = t[e] * (1 - o) + n[e] * o;

      return i;
    };
  }

  function Ir(t) {
    return ArrayBuffer.isView(t) && !(t instanceof DataView);
  }

  function Or(t, n) {
    var e,
        r = n ? n.length : 0,
        i = t ? Math.min(r, t.length) : 0,
        o = new Array(i),
        a = new Array(r);

    for (e = 0; e < i; ++e) o[e] = Hr(t[e], n[e]);

    for (; e < r; ++e) a[e] = n[e];

    return function (t) {
      for (e = 0; e < i; ++e) a[e] = o[e](t);

      return a;
    };
  }

  function Ur(t, n) {
    var e = new Date();
    return t = +t, n = +n, function (r) {
      return e.setTime(t * (1 - r) + n * r), e;
    };
  }

  function Br(t, n) {
    return t = +t, n = +n, function (e) {
      return t * (1 - e) + n * e;
    };
  }

  function Yr(t, n) {
    var e,
        r = {},
        i = {};

    for (e in null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {}), n) e in t ? r[e] = Hr(t[e], n[e]) : i[e] = n[e];

    return function (t) {
      for (e in r) i[e] = r[e](t);

      return i;
    };
  }

  var Lr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      jr = new RegExp(Lr.source, "g");

  function $r(t, n) {
    var e,
        r,
        i,
        o = Lr.lastIndex = jr.lastIndex = 0,
        a = -1,
        u = [],
        c = [];

    for (t += "", n += ""; (e = Lr.exec(t)) && (r = jr.exec(n));) (i = r.index) > o && (i = n.slice(o, i), u[a] ? u[a] += i : u[++a] = i), (e = e[0]) === (r = r[0]) ? u[a] ? u[a] += r : u[++a] = r : (u[++a] = null, c.push({
      i: a,
      x: Br(e, r)
    })), o = jr.lastIndex;

    return o < n.length && (i = n.slice(o), u[a] ? u[a] += i : u[++a] = i), u.length < 2 ? c[0] ? function (t) {
      return function (n) {
        return t(n) + "";
      };
    }(c[0].x) : function (t) {
      return function () {
        return t;
      };
    }(n) : (n = c.length, function (t) {
      for (var e, r = 0; r < n; ++r) u[(e = c[r]).i] = e.x(t);

      return u.join("");
    });
  }

  function Hr(t, n) {
    var e,
        r = typeof n;
    return null == n || "boolean" === r ? Er(n) : ("number" === r ? Br : "string" === r ? (e = Pe(n)) ? (n = e, zr) : $r : n instanceof Pe ? zr : n instanceof Date ? Ur : Ir(n) ? qr : Array.isArray(n) ? Or : "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? Yr : Br)(t, n);
  }

  function Xr(t, n) {
    return t = +t, n = +n, function (e) {
      return Math.round(t * (1 - e) + n * e);
    };
  }

  var Gr,
      Vr = 180 / Math.PI,
      Wr = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
  };

  function Zr(t, n, e, r, i, o) {
    var a, u, c;
    return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (c = t * e + n * r) && (e -= t * c, r -= n * c), (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u, c /= u), t * r < n * e && (t = -t, n = -n, c = -c, a = -a), {
      translateX: i,
      translateY: o,
      rotate: Math.atan2(n, t) * Vr,
      skewX: Math.atan(c) * Vr,
      scaleX: a,
      scaleY: u
    };
  }

  function Kr(t, n, e, r) {
    function i(t) {
      return t.length ? t.pop() + " " : "";
    }

    return function (o, a) {
      var u = [],
          c = [];
      return o = t(o), a = t(a), function (t, r, i, o, a, u) {
        if (t !== i || r !== o) {
          var c = a.push("translate(", null, n, null, e);
          u.push({
            i: c - 4,
            x: Br(t, i)
          }, {
            i: c - 2,
            x: Br(r, o)
          });
        } else (i || o) && a.push("translate(" + i + n + o + e);
      }(o.translateX, o.translateY, a.translateX, a.translateY, u, c), function (t, n, e, o) {
        t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({
          i: e.push(i(e) + "rotate(", null, r) - 2,
          x: Br(t, n)
        })) : n && e.push(i(e) + "rotate(" + n + r);
      }(o.rotate, a.rotate, u, c), function (t, n, e, o) {
        t !== n ? o.push({
          i: e.push(i(e) + "skewX(", null, r) - 2,
          x: Br(t, n)
        }) : n && e.push(i(e) + "skewX(" + n + r);
      }(o.skewX, a.skewX, u, c), function (t, n, e, r, o, a) {
        if (t !== e || n !== r) {
          var u = o.push(i(o) + "scale(", null, ",", null, ")");
          a.push({
            i: u - 4,
            x: Br(t, e)
          }, {
            i: u - 2,
            x: Br(n, r)
          });
        } else 1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")");
      }(o.scaleX, o.scaleY, a.scaleX, a.scaleY, u, c), o = a = null, function (t) {
        for (var n, e = -1, r = c.length; ++e < r;) u[(n = c[e]).i] = n.x(t);

        return u.join("");
      };
    };
  }

  var Qr = Kr(function (t) {
    const n = new ("function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix)(t + "");
    return n.isIdentity ? Wr : Zr(n.a, n.b, n.c, n.d, n.e, n.f);
  }, "px, ", "px)", "deg)"),
      Jr = Kr(function (t) {
    return null == t ? Wr : (Gr || (Gr = document.createElementNS("http://www.w3.org/2000/svg", "g")), Gr.setAttribute("transform", t), (t = Gr.transform.baseVal.consolidate()) ? Zr((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f) : Wr);
  }, ", ", ")", ")");

  function ti(t) {
    return ((t = Math.exp(t)) + 1 / t) / 2;
  }

  var ni = function t(n, e, r) {
    function i(t, i) {
      var o,
          a,
          u = t[0],
          c = t[1],
          f = t[2],
          s = i[0],
          l = i[1],
          h = i[2],
          d = s - u,
          p = l - c,
          g = d * d + p * p;
      if (g < 1e-12) a = Math.log(h / f) / n, o = function (t) {
        return [u + t * d, c + t * p, f * Math.exp(n * t * a)];
      };else {
        var y = Math.sqrt(g),
            v = (h * h - f * f + r * g) / (2 * f * e * y),
            _ = (h * h - f * f - r * g) / (2 * h * e * y),
            b = Math.log(Math.sqrt(v * v + 1) - v),
            m = Math.log(Math.sqrt(_ * _ + 1) - _);

        a = (m - b) / n, o = function (t) {
          var r = t * a,
              i = ti(b),
              o = f / (e * y) * (i * function (t) {
            return ((t = Math.exp(2 * t)) - 1) / (t + 1);
          }(n * r + b) - function (t) {
            return ((t = Math.exp(t)) - 1 / t) / 2;
          }(b));

          return [u + o * d, c + o * p, f * i / ti(n * r + b)];
        };
      }
      return o.duration = 1e3 * a * n / Math.SQRT2, o;
    }

    return i.rho = function (n) {
      var e = Math.max(.001, +n),
          r = e * e;
      return t(e, r, r * r);
    }, i;
  }(Math.SQRT2, 2, 4);

  function ei(t) {
    return function (n, e) {
      var r = t((n = $e(n)).h, (e = $e(e)).h),
          i = Pr(n.s, e.s),
          o = Pr(n.l, e.l),
          a = Pr(n.opacity, e.opacity);
      return function (t) {
        return n.h = r(t), n.s = i(t), n.l = o(t), n.opacity = a(t), n + "";
      };
    };
  }

  var ri = ei(Nr),
      ii = ei(Pr);

  function oi(t) {
    return function (n, e) {
      var r = t((n = sr(n)).h, (e = sr(e)).h),
          i = Pr(n.c, e.c),
          o = Pr(n.l, e.l),
          a = Pr(n.opacity, e.opacity);
      return function (t) {
        return n.h = r(t), n.c = i(t), n.l = o(t), n.opacity = a(t), n + "";
      };
    };
  }

  var ai = oi(Nr),
      ui = oi(Pr);

  function ci(t) {
    return function n(e) {
      function r(n, r) {
        var i = t((n = wr(n)).h, (r = wr(r)).h),
            o = Pr(n.s, r.s),
            a = Pr(n.l, r.l),
            u = Pr(n.opacity, r.opacity);
        return function (t) {
          return n.h = i(t), n.s = o(t), n.l = a(Math.pow(t, e)), n.opacity = u(t), n + "";
        };
      }

      return e = +e, r.gamma = n, r;
    }(1);
  }

  var fi = ci(Nr),
      si = ci(Pr);

  function li(t, n) {
    void 0 === n && (n = t, t = Hr);

    for (var e = 0, r = n.length - 1, i = n[0], o = new Array(r < 0 ? 0 : r); e < r;) o[e] = t(i, i = n[++e]);

    return function (t) {
      var n = Math.max(0, Math.min(r - 1, Math.floor(t *= r)));
      return o[n](t - n);
    };
  }

  var hi,
      di,
      pi = 0,
      gi = 0,
      yi = 0,
      vi = 0,
      _i = 0,
      bi = 0,
      mi = "object" == typeof performance && performance.now ? performance : Date,
      xi = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
    setTimeout(t, 17);
  };

  function wi() {
    return _i || (xi(Mi), _i = mi.now() + bi);
  }

  function Mi() {
    _i = 0;
  }

  function Ai() {
    this._call = this._time = this._next = null;
  }

  function Ti(t, n, e) {
    var r = new Ai();
    return r.restart(t, n, e), r;
  }

  function Si() {
    wi(), ++pi;

    for (var t, n = hi; n;) (t = _i - n._time) >= 0 && n._call.call(void 0, t), n = n._next;

    --pi;
  }

  function Ei() {
    _i = (vi = mi.now()) + bi, pi = gi = 0;

    try {
      Si();
    } finally {
      pi = 0, function () {
        var t,
            n,
            e = hi,
            r = 1 / 0;

        for (; e;) e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : hi = n);

        di = t, Ni(r);
      }(), _i = 0;
    }
  }

  function ki() {
    var t = mi.now(),
        n = t - vi;
    n > 1e3 && (bi -= n, vi = t);
  }

  function Ni(t) {
    pi || (gi && (gi = clearTimeout(gi)), t - _i > 24 ? (t < 1 / 0 && (gi = setTimeout(Ei, t - mi.now() - bi)), yi && (yi = clearInterval(yi))) : (yi || (vi = mi.now(), yi = setInterval(ki, 1e3)), pi = 1, xi(Ei)));
  }

  function Ci(t, n, e) {
    var r = new Ai();
    return n = null == n ? 0 : +n, r.restart(e => {
      r.stop(), t(e + n);
    }, n, e), r;
  }

  Ai.prototype = Ti.prototype = {
    constructor: Ai,
    restart: function (t, n, e) {
      if ("function" != typeof t) throw new TypeError("callback is not a function");
      e = (null == e ? wi() : +e) + (null == n ? 0 : +n), this._next || di === this || (di ? di._next = this : hi = this, di = this), this._call = t, this._time = e, Ni();
    },
    stop: function () {
      this._call && (this._call = null, this._time = 1 / 0, Ni());
    }
  };
  var Pi = Nt("start", "end", "cancel", "interrupt"),
      zi = [];

  function Di(t, n, e, r, i, o) {
    var a = t.__transition;

    if (a) {
      if (e in a) return;
    } else t.__transition = {};

    !function (t, n, e) {
      var r,
          i = t.__transition;

      function o(t) {
        e.state = 1, e.timer.restart(a, e.delay, e.time), e.delay <= t && a(t - e.delay);
      }

      function a(o) {
        var f, s, l, h;
        if (1 !== e.state) return c();

        for (f in i) if ((h = i[f]).name === e.name) {
          if (3 === h.state) return Ci(a);
          4 === h.state ? (h.state = 6, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete i[f]) : +f < n && (h.state = 6, h.timer.stop(), h.on.call("cancel", t, t.__data__, h.index, h.group), delete i[f]);
        }

        if (Ci(function () {
          3 === e.state && (e.state = 4, e.timer.restart(u, e.delay, e.time), u(o));
        }), e.state = 2, e.on.call("start", t, t.__data__, e.index, e.group), 2 === e.state) {
          for (e.state = 3, r = new Array(l = e.tween.length), f = 0, s = -1; f < l; ++f) (h = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (r[++s] = h);

          r.length = s + 1;
        }
      }

      function u(n) {
        for (var i = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(c), e.state = 5, 1), o = -1, a = r.length; ++o < a;) r[o].call(t, i);

        5 === e.state && (e.on.call("end", t, t.__data__, e.index, e.group), c());
      }

      function c() {
        for (var r in e.state = 6, e.timer.stop(), delete i[n], i) return;

        delete t.__transition;
      }

      i[n] = e, e.timer = Ti(o, 0, e.time);
    }(t, e, {
      name: n,
      index: r,
      group: i,
      on: Pi,
      tween: zi,
      time: o.time,
      delay: o.delay,
      duration: o.duration,
      ease: o.ease,
      timer: null,
      state: 0
    });
  }

  function Ri(t, n) {
    var e = qi(t, n);
    if (e.state > 0) throw new Error("too late; already scheduled");
    return e;
  }

  function Fi(t, n) {
    var e = qi(t, n);
    if (e.state > 3) throw new Error("too late; already running");
    return e;
  }

  function qi(t, n) {
    var e = t.__transition;
    if (!e || !(e = e[n])) throw new Error("transition not found");
    return e;
  }

  function Ii(t, n) {
    var e,
        r,
        i,
        o = t.__transition,
        a = !0;

    if (o) {
      for (i in n = null == n ? null : n + "", o) (e = o[i]).name === n ? (r = e.state > 2 && e.state < 5, e.state = 6, e.timer.stop(), e.on.call(r ? "interrupt" : "cancel", t, t.__data__, e.index, e.group), delete o[i]) : a = !1;

      a && delete t.__transition;
    }
  }

  function Oi(t, n) {
    var e, r;
    return function () {
      var i = Fi(this, t),
          o = i.tween;
      if (o !== e) for (var a = 0, u = (r = e = o).length; a < u; ++a) if (r[a].name === n) {
        (r = r.slice()).splice(a, 1);
        break;
      }
      i.tween = r;
    };
  }

  function Ui(t, n, e) {
    var r, i;
    if ("function" != typeof e) throw new Error();
    return function () {
      var o = Fi(this, t),
          a = o.tween;

      if (a !== r) {
        i = (r = a).slice();

        for (var u = {
          name: n,
          value: e
        }, c = 0, f = i.length; c < f; ++c) if (i[c].name === n) {
          i[c] = u;
          break;
        }

        c === f && i.push(u);
      }

      o.tween = i;
    };
  }

  function Bi(t, n, e) {
    var r = t._id;
    return t.each(function () {
      var t = Fi(this, r);
      (t.value || (t.value = {}))[n] = e.apply(this, arguments);
    }), function (t) {
      return qi(t, r).value[n];
    };
  }

  function Yi(t, n) {
    var e;
    return ("number" == typeof n ? Br : n instanceof Pe ? zr : (e = Pe(n)) ? (n = e, zr) : $r)(t, n);
  }

  function Li(t) {
    return function () {
      this.removeAttribute(t);
    };
  }

  function ji(t) {
    return function () {
      this.removeAttributeNS(t.space, t.local);
    };
  }

  function $i(t, n, e) {
    var r,
        i,
        o = e + "";
    return function () {
      var a = this.getAttribute(t);
      return a === o ? null : a === r ? i : i = n(r = a, e);
    };
  }

  function Hi(t, n, e) {
    var r,
        i,
        o = e + "";
    return function () {
      var a = this.getAttributeNS(t.space, t.local);
      return a === o ? null : a === r ? i : i = n(r = a, e);
    };
  }

  function Xi(t, n, e) {
    var r, i, o;
    return function () {
      var a,
          u,
          c = e(this);
      if (null != c) return (a = this.getAttribute(t)) === (u = c + "") ? null : a === r && u === i ? o : (i = u, o = n(r = a, c));
      this.removeAttribute(t);
    };
  }

  function Gi(t, n, e) {
    var r, i, o;
    return function () {
      var a,
          u,
          c = e(this);
      if (null != c) return (a = this.getAttributeNS(t.space, t.local)) === (u = c + "") ? null : a === r && u === i ? o : (i = u, o = n(r = a, c));
      this.removeAttributeNS(t.space, t.local);
    };
  }

  function Vi(t, n) {
    return function (e) {
      this.setAttribute(t, n.call(this, e));
    };
  }

  function Wi(t, n) {
    return function (e) {
      this.setAttributeNS(t.space, t.local, n.call(this, e));
    };
  }

  function Zi(t, n) {
    var e, r;

    function i() {
      var i = n.apply(this, arguments);
      return i !== r && (e = (r = i) && Wi(t, i)), e;
    }

    return i._value = n, i;
  }

  function Ki(t, n) {
    var e, r;

    function i() {
      var i = n.apply(this, arguments);
      return i !== r && (e = (r = i) && Vi(t, i)), e;
    }

    return i._value = n, i;
  }

  function Qi(t, n) {
    return function () {
      Ri(this, t).delay = +n.apply(this, arguments);
    };
  }

  function Ji(t, n) {
    return n = +n, function () {
      Ri(this, t).delay = n;
    };
  }

  function to(t, n) {
    return function () {
      Fi(this, t).duration = +n.apply(this, arguments);
    };
  }

  function no(t, n) {
    return n = +n, function () {
      Fi(this, t).duration = n;
    };
  }

  function eo(t, n) {
    if ("function" != typeof n) throw new Error();
    return function () {
      Fi(this, t).ease = n;
    };
  }

  function ro(t, n, e) {
    var r,
        i,
        o = function (t) {
      return (t + "").trim().split(/^|\s+/).every(function (t) {
        var n = t.indexOf(".");
        return n >= 0 && (t = t.slice(0, n)), !t || "start" === t;
      });
    }(n) ? Ri : Fi;
    return function () {
      var a = o(this, t),
          u = a.on;
      u !== r && (i = (r = u).copy()).on(n, e), a.on = i;
    };
  }

  var io = Vn.prototype.constructor;

  function oo(t) {
    return function () {
      this.style.removeProperty(t);
    };
  }

  function ao(t, n, e) {
    return function (r) {
      this.style.setProperty(t, n.call(this, r), e);
    };
  }

  function uo(t, n, e) {
    var r, i;

    function o() {
      var o = n.apply(this, arguments);
      return o !== i && (r = (i = o) && ao(t, o, e)), r;
    }

    return o._value = n, o;
  }

  function co(t) {
    return function (n) {
      this.textContent = t.call(this, n);
    };
  }

  function fo(t) {
    var n, e;

    function r() {
      var r = t.apply(this, arguments);
      return r !== e && (n = (e = r) && co(r)), n;
    }

    return r._value = t, r;
  }

  var so = 0;

  function lo(t, n, e, r) {
    this._groups = t, this._parents = n, this._name = e, this._id = r;
  }

  function ho(t) {
    return Vn().transition(t);
  }

  function po() {
    return ++so;
  }

  var go = Vn.prototype;
  lo.prototype = ho.prototype = {
    constructor: lo,
    select: function (t) {
      var n = this._name,
          e = this._id;
      "function" != typeof t && (t = Yt(t));

      for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a) for (var u, c, f = r[a], s = f.length, l = o[a] = new Array(s), h = 0; h < s; ++h) (u = f[h]) && (c = t.call(u, u.__data__, h, f)) && ("__data__" in u && (c.__data__ = u.__data__), l[h] = c, Di(l[h], n, e, h, l, qi(u, e)));

      return new lo(o, this._parents, n, e);
    },
    selectAll: function (t) {
      var n = this._name,
          e = this._id;
      "function" != typeof t && (t = $t(t));

      for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u) for (var c, f = r[u], s = f.length, l = 0; l < s; ++l) if (c = f[l]) {
        for (var h, d = t.call(c, c.__data__, l, f), p = qi(c, e), g = 0, y = d.length; g < y; ++g) (h = d[g]) && Di(h, n, e, g, d, p);

        o.push(d), a.push(c);
      }

      return new lo(o, a, n, e);
    },
    selectChild: go.selectChild,
    selectChildren: go.selectChildren,
    filter: function (t) {
      "function" != typeof t && (t = Ht(t));

      for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) for (var o, a = n[i], u = a.length, c = r[i] = [], f = 0; f < u; ++f) (o = a[f]) && t.call(o, o.__data__, f, a) && c.push(o);

      return new lo(r, this._parents, this._name, this._id);
    },
    merge: function (t) {
      if (t._id !== this._id) throw new Error();

      for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u) for (var c, f = n[u], s = e[u], l = f.length, h = a[u] = new Array(l), d = 0; d < l; ++d) (c = f[d] || s[d]) && (h[d] = c);

      for (; u < r; ++u) a[u] = n[u];

      return new lo(a, this._parents, this._name, this._id);
    },
    selection: function () {
      return new io(this._groups, this._parents);
    },
    transition: function () {
      for (var t = this._name, n = this._id, e = po(), r = this._groups, i = r.length, o = 0; o < i; ++o) for (var a, u = r[o], c = u.length, f = 0; f < c; ++f) if (a = u[f]) {
        var s = qi(a, n);
        Di(a, t, e, f, u, {
          time: s.time + s.delay + s.duration,
          delay: 0,
          duration: s.duration,
          ease: s.ease
        });
      }

      return new lo(r, this._parents, t, e);
    },
    call: go.call,
    nodes: go.nodes,
    node: go.node,
    size: go.size,
    empty: go.empty,
    each: go.each,
    on: function (t, n) {
      var e = this._id;
      return arguments.length < 2 ? qi(this.node(), e).on.on(t) : this.each(ro(e, t, n));
    },
    attr: function (t, n) {
      var e = qt(t),
          r = "transform" === e ? Jr : Yi;
      return this.attrTween(t, "function" == typeof n ? (e.local ? Gi : Xi)(e, r, Bi(this, "attr." + t, n)) : null == n ? (e.local ? ji : Li)(e) : (e.local ? Hi : $i)(e, r, n));
    },
    attrTween: function (t, n) {
      var e = "attr." + t;
      if (arguments.length < 2) return (e = this.tween(e)) && e._value;
      if (null == n) return this.tween(e, null);
      if ("function" != typeof n) throw new Error();
      var r = qt(t);
      return this.tween(e, (r.local ? Zi : Ki)(r, n));
    },
    style: function (t, n, e) {
      var r = "transform" == (t += "") ? Qr : Yi;
      return null == n ? this.styleTween(t, function (t, n) {
        var e, r, i;
        return function () {
          var o = yn(this, t),
              a = (this.style.removeProperty(t), yn(this, t));
          return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
        };
      }(t, r)).on("end.style." + t, oo(t)) : "function" == typeof n ? this.styleTween(t, function (t, n, e) {
        var r, i, o;
        return function () {
          var a = yn(this, t),
              u = e(this),
              c = u + "";
          return null == u && (this.style.removeProperty(t), c = u = yn(this, t)), a === c ? null : a === r && c === i ? o : (i = c, o = n(r = a, u));
        };
      }(t, r, Bi(this, "style." + t, n))).each(function (t, n) {
        var e,
            r,
            i,
            o,
            a = "style." + n,
            u = "end." + a;
        return function () {
          var c = Fi(this, t),
              f = c.on,
              s = null == c.value[a] ? o || (o = oo(n)) : void 0;
          f === e && i === s || (r = (e = f).copy()).on(u, i = s), c.on = r;
        };
      }(this._id, t)) : this.styleTween(t, function (t, n, e) {
        var r,
            i,
            o = e + "";
        return function () {
          var a = yn(this, t);
          return a === o ? null : a === r ? i : i = n(r = a, e);
        };
      }(t, r, n), e).on("end.style." + t, null);
    },
    styleTween: function (t, n, e) {
      var r = "style." + (t += "");
      if (arguments.length < 2) return (r = this.tween(r)) && r._value;
      if (null == n) return this.tween(r, null);
      if ("function" != typeof n) throw new Error();
      return this.tween(r, uo(t, n, null == e ? "" : e));
    },
    text: function (t) {
      return this.tween("text", "function" == typeof t ? function (t) {
        return function () {
          var n = t(this);
          this.textContent = null == n ? "" : n;
        };
      }(Bi(this, "text", t)) : function (t) {
        return function () {
          this.textContent = t;
        };
      }(null == t ? "" : t + ""));
    },
    textTween: function (t) {
      var n = "text";
      if (arguments.length < 1) return (n = this.tween(n)) && n._value;
      if (null == t) return this.tween(n, null);
      if ("function" != typeof t) throw new Error();
      return this.tween(n, fo(t));
    },
    remove: function () {
      return this.on("end.remove", function (t) {
        return function () {
          var n = this.parentNode;

          for (var e in this.__transition) if (+e !== t) return;

          n && n.removeChild(this);
        };
      }(this._id));
    },
    tween: function (t, n) {
      var e = this._id;

      if (t += "", arguments.length < 2) {
        for (var r, i = qi(this.node(), e).tween, o = 0, a = i.length; o < a; ++o) if ((r = i[o]).name === t) return r.value;

        return null;
      }

      return this.each((null == n ? Oi : Ui)(e, t, n));
    },
    delay: function (t) {
      var n = this._id;
      return arguments.length ? this.each(("function" == typeof t ? Qi : Ji)(n, t)) : qi(this.node(), n).delay;
    },
    duration: function (t) {
      var n = this._id;
      return arguments.length ? this.each(("function" == typeof t ? to : no)(n, t)) : qi(this.node(), n).duration;
    },
    ease: function (t) {
      var n = this._id;
      return arguments.length ? this.each(eo(n, t)) : qi(this.node(), n).ease;
    },
    easeVarying: function (t) {
      if ("function" != typeof t) throw new Error();
      return this.each(function (t, n) {
        return function () {
          var e = n.apply(this, arguments);
          if ("function" != typeof e) throw new Error();
          Fi(this, t).ease = e;
        };
      }(this._id, t));
    },
    end: function () {
      var t,
          n,
          e = this,
          r = e._id,
          i = e.size();
      return new Promise(function (o, a) {
        var u = {
          value: a
        },
            c = {
          value: function () {
            0 == --i && o();
          }
        };
        e.each(function () {
          var e = Fi(this, r),
              i = e.on;
          i !== t && ((n = (t = i).copy())._.cancel.push(u), n._.interrupt.push(u), n._.end.push(c)), e.on = n;
        }), 0 === i && o();
      });
    },
    [Symbol.iterator]: go[Symbol.iterator]
  };

  function yo(t) {
    return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
  }

  function vo(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  }

  var _o = function t(n) {
    function e(t) {
      return Math.pow(t, n);
    }

    return n = +n, e.exponent = t, e;
  }(3),
      bo = function t(n) {
    function e(t) {
      return 1 - Math.pow(1 - t, n);
    }

    return n = +n, e.exponent = t, e;
  }(3),
      mo = function t(n) {
    function e(t) {
      return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2;
    }

    return n = +n, e.exponent = t, e;
  }(3),
      xo = Math.PI,
      wo = xo / 2;

  function Mo(t) {
    return (1 - Math.cos(xo * t)) / 2;
  }

  function Ao(t) {
    return 1.0009775171065494 * (Math.pow(2, -10 * t) - .0009765625);
  }

  function To(t) {
    return ((t *= 2) <= 1 ? Ao(1 - t) : 2 - Ao(t - 1)) / 2;
  }

  function So(t) {
    return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
  }

  var Eo = 4 / 11,
      ko = 7.5625;

  function No(t) {
    return (t = +t) < Eo ? ko * t * t : t < .7272727272727273 ? ko * (t -= .5454545454545454) * t + .75 : t < .9090909090909091 ? ko * (t -= .8181818181818182) * t + .9375 : ko * (t -= .9545454545454546) * t + .984375;
  }

  var Co = 1.70158,
      Po = function t(n) {
    function e(t) {
      return (t = +t) * t * (n * (t - 1) + t);
    }

    return n = +n, e.overshoot = t, e;
  }(Co),
      zo = function t(n) {
    function e(t) {
      return --t * t * ((t + 1) * n + t) + 1;
    }

    return n = +n, e.overshoot = t, e;
  }(Co),
      Do = function t(n) {
    function e(t) {
      return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2;
    }

    return n = +n, e.overshoot = t, e;
  }(Co),
      Ro = 2 * Math.PI,
      Fo = function t(n, e) {
    var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Ro);

    function i(t) {
      return n * Ao(- --t) * Math.sin((r - t) / e);
    }

    return i.amplitude = function (n) {
      return t(n, e * Ro);
    }, i.period = function (e) {
      return t(n, e);
    }, i;
  }(1, .3),
      qo = function t(n, e) {
    var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Ro);

    function i(t) {
      return 1 - n * Ao(t = +t) * Math.sin((t + r) / e);
    }

    return i.amplitude = function (n) {
      return t(n, e * Ro);
    }, i.period = function (e) {
      return t(n, e);
    }, i;
  }(1, .3),
      Io = function t(n, e) {
    var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Ro);

    function i(t) {
      return ((t = 2 * t - 1) < 0 ? n * Ao(-t) * Math.sin((r - t) / e) : 2 - n * Ao(t) * Math.sin((r + t) / e)) / 2;
    }

    return i.amplitude = function (n) {
      return t(n, e * Ro);
    }, i.period = function (e) {
      return t(n, e);
    }, i;
  }(1, .3),
      Oo = {
    time: null,
    delay: 0,
    duration: 250,
    ease: vo
  };

  function Uo(t, n) {
    for (var e; !(e = t.__transition) || !(e = e[n]);) if (!(t = t.parentNode)) throw new Error("transition " + n + " not found");

    return e;
  }

  Vn.prototype.interrupt = function (t) {
    return this.each(function () {
      Ii(this, t);
    });
  }, Vn.prototype.transition = function (t) {
    var n, e;
    t instanceof lo ? (n = t._id, t = t._name) : (n = po(), (e = Oo).time = wi(), t = null == t ? null : t + "");

    for (var r = this._groups, i = r.length, o = 0; o < i; ++o) for (var a, u = r[o], c = u.length, f = 0; f < c; ++f) (a = u[f]) && Di(a, t, n, f, u, e || Uo(a, n));

    return new lo(r, this._parents, t, n);
  };
  var Bo = [null];

  var Yo = t => () => t;

  function Lo(t, {
    sourceEvent: n,
    target: e,
    selection: r,
    mode: i,
    dispatch: o
  }) {
    Object.defineProperties(this, {
      type: {
        value: t,
        enumerable: !0,
        configurable: !0
      },
      sourceEvent: {
        value: n,
        enumerable: !0,
        configurable: !0
      },
      target: {
        value: e,
        enumerable: !0,
        configurable: !0
      },
      selection: {
        value: r,
        enumerable: !0,
        configurable: !0
      },
      mode: {
        value: i,
        enumerable: !0,
        configurable: !0
      },
      _: {
        value: o
      }
    });
  }

  function jo(t) {
    t.stopImmediatePropagation();
  }

  function $o(t) {
    t.preventDefault(), t.stopImmediatePropagation();
  }

  var Ho = {
    name: "drag"
  },
      Xo = {
    name: "space"
  },
      Go = {
    name: "handle"
  },
      Vo = {
    name: "center"
  };
  const {
    abs: Wo,
    max: Zo,
    min: Ko
  } = Math;

  function Qo(t) {
    return [+t[0], +t[1]];
  }

  function Jo(t) {
    return [Qo(t[0]), Qo(t[1])];
  }

  var ta = {
    name: "x",
    handles: ["w", "e"].map(ca),
    input: function (t, n) {
      return null == t ? null : [[+t[0], n[0][1]], [+t[1], n[1][1]]];
    },
    output: function (t) {
      return t && [t[0][0], t[1][0]];
    }
  },
      na = {
    name: "y",
    handles: ["n", "s"].map(ca),
    input: function (t, n) {
      return null == t ? null : [[n[0][0], +t[0]], [n[1][0], +t[1]]];
    },
    output: function (t) {
      return t && [t[0][1], t[1][1]];
    }
  },
      ea = {
    name: "xy",
    handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(ca),
    input: function (t) {
      return null == t ? null : Jo(t);
    },
    output: function (t) {
      return t;
    }
  },
      ra = {
    overlay: "crosshair",
    selection: "move",
    n: "ns-resize",
    e: "ew-resize",
    s: "ns-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    ne: "nesw-resize",
    se: "nwse-resize",
    sw: "nesw-resize"
  },
      ia = {
    e: "w",
    w: "e",
    nw: "ne",
    ne: "nw",
    se: "sw",
    sw: "se"
  },
      oa = {
    n: "s",
    s: "n",
    nw: "sw",
    ne: "se",
    se: "ne",
    sw: "nw"
  },
      aa = {
    overlay: 1,
    selection: 1,
    n: null,
    e: 1,
    s: null,
    w: -1,
    nw: -1,
    ne: 1,
    se: 1,
    sw: -1
  },
      ua = {
    overlay: 1,
    selection: 1,
    n: -1,
    e: null,
    s: 1,
    w: null,
    nw: -1,
    ne: -1,
    se: 1,
    sw: 1
  };

  function ca(t) {
    return {
      type: t
    };
  }

  function fa(t) {
    return !t.ctrlKey && !t.button;
  }

  function sa() {
    var t = this.ownerSVGElement || this;
    return t.hasAttribute("viewBox") ? [[(t = t.viewBox.baseVal).x, t.y], [t.x + t.width, t.y + t.height]] : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]];
  }

  function la() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }

  function ha(t) {
    for (; !t.__brush;) if (!(t = t.parentNode)) return;

    return t.__brush;
  }

  function da(t) {
    return t[0][0] === t[1][0] || t[0][1] === t[1][1];
  }

  function pa(t) {
    var n,
        e = sa,
        r = fa,
        i = la,
        o = !0,
        a = Nt("start", "brush", "end"),
        u = 6;

    function c(n) {
      var e = n.property("__brush", g).selectAll(".overlay").data([ca("overlay")]);
      e.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", ra.overlay).merge(e).each(function () {
        var t = ha(this).extent;
        Wn(this).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1]);
      }), n.selectAll(".selection").data([ca("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", ra.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
      var r = n.selectAll(".handle").data(t.handles, function (t) {
        return t.type;
      });
      r.exit().remove(), r.enter().append("rect").attr("class", function (t) {
        return "handle handle--" + t.type;
      }).attr("cursor", function (t) {
        return ra[t.type];
      }), n.each(f).attr("fill", "none").attr("pointer-events", "all").on("mousedown.brush", h).filter(i).on("touchstart.brush", h).on("touchmove.brush", d).on("touchend.brush touchcancel.brush", p).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }

    function f() {
      var t = Wn(this),
          n = ha(this).selection;
      n ? (t.selectAll(".selection").style("display", null).attr("x", n[0][0]).attr("y", n[0][1]).attr("width", n[1][0] - n[0][0]).attr("height", n[1][1] - n[0][1]), t.selectAll(".handle").style("display", null).attr("x", function (t) {
        return "e" === t.type[t.type.length - 1] ? n[1][0] - u / 2 : n[0][0] - u / 2;
      }).attr("y", function (t) {
        return "s" === t.type[0] ? n[1][1] - u / 2 : n[0][1] - u / 2;
      }).attr("width", function (t) {
        return "n" === t.type || "s" === t.type ? n[1][0] - n[0][0] + u : u;
      }).attr("height", function (t) {
        return "e" === t.type || "w" === t.type ? n[1][1] - n[0][1] + u : u;
      })) : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
    }

    function s(t, n, e) {
      var r = t.__brush.emitter;
      return !r || e && r.clean ? new l(t, n, e) : r;
    }

    function l(t, n, e) {
      this.that = t, this.args = n, this.state = t.__brush, this.active = 0, this.clean = e;
    }

    function h(e) {
      if ((!n || e.touches) && r.apply(this, arguments)) {
        var i,
            a,
            u,
            c,
            l,
            h,
            d,
            p,
            g,
            y,
            v,
            _ = this,
            b = e.target.__data__.type,
            m = "selection" === (o && e.metaKey ? b = "overlay" : b) ? Ho : o && e.altKey ? Vo : Go,
            x = t === na ? null : aa[b],
            w = t === ta ? null : ua[b],
            M = ha(_),
            A = M.extent,
            T = M.selection,
            S = A[0][0],
            E = A[0][1],
            k = A[1][0],
            N = A[1][1],
            C = 0,
            P = 0,
            z = x && w && o && e.shiftKey,
            D = Array.from(e.touches || [e], t => {
          const n = t.identifier;
          return (t = te(t, _)).point0 = t.slice(), t.identifier = n, t;
        });

        Ii(_);
        var R = s(_, arguments, !0).beforestart();

        if ("overlay" === b) {
          T && (g = !0);
          const n = [D[0], D[1] || D[0]];
          M.selection = T = [[i = t === na ? S : Ko(n[0][0], n[1][0]), u = t === ta ? E : Ko(n[0][1], n[1][1])], [l = t === na ? k : Zo(n[0][0], n[1][0]), d = t === ta ? N : Zo(n[0][1], n[1][1])]], D.length > 1 && U(e);
        } else i = T[0][0], u = T[0][1], l = T[1][0], d = T[1][1];

        a = i, c = u, h = l, p = d;
        var F = Wn(_).attr("pointer-events", "none"),
            q = F.selectAll(".overlay").attr("cursor", ra[b]);
        if (e.touches) R.moved = O, R.ended = B;else {
          var I = Wn(e.view).on("mousemove.brush", O, !0).on("mouseup.brush", B, !0);
          o && I.on("keydown.brush", Y, !0).on("keyup.brush", L, !0), oe(e.view);
        }
        f.call(_), R.start(e, m.name);
      }

      function O(t) {
        for (const n of t.changedTouches || [t]) for (const t of D) t.identifier === n.identifier && (t.cur = te(n, _));

        if (z && !y && !v && 1 === D.length) {
          const t = D[0];
          Wo(t.cur[0] - t[0]) > Wo(t.cur[1] - t[1]) ? v = !0 : y = !0;
        }

        for (const t of D) t.cur && (t[0] = t.cur[0], t[1] = t.cur[1]);

        g = !0, $o(t), U(t);
      }

      function U(t) {
        const n = D[0],
              e = n.point0;
        var r;

        switch (C = n[0] - e[0], P = n[1] - e[1], m) {
          case Xo:
          case Ho:
            x && (C = Zo(S - i, Ko(k - l, C)), a = i + C, h = l + C), w && (P = Zo(E - u, Ko(N - d, P)), c = u + P, p = d + P);
            break;

          case Go:
            D[1] ? (x && (a = Zo(S, Ko(k, D[0][0])), h = Zo(S, Ko(k, D[1][0])), x = 1), w && (c = Zo(E, Ko(N, D[0][1])), p = Zo(E, Ko(N, D[1][1])), w = 1)) : (x < 0 ? (C = Zo(S - i, Ko(k - i, C)), a = i + C, h = l) : x > 0 && (C = Zo(S - l, Ko(k - l, C)), a = i, h = l + C), w < 0 ? (P = Zo(E - u, Ko(N - u, P)), c = u + P, p = d) : w > 0 && (P = Zo(E - d, Ko(N - d, P)), c = u, p = d + P));
            break;

          case Vo:
            x && (a = Zo(S, Ko(k, i - C * x)), h = Zo(S, Ko(k, l + C * x))), w && (c = Zo(E, Ko(N, u - P * w)), p = Zo(E, Ko(N, d + P * w)));
        }

        h < a && (x *= -1, r = i, i = l, l = r, r = a, a = h, h = r, b in ia && q.attr("cursor", ra[b = ia[b]])), p < c && (w *= -1, r = u, u = d, d = r, r = c, c = p, p = r, b in oa && q.attr("cursor", ra[b = oa[b]])), M.selection && (T = M.selection), y && (a = T[0][0], h = T[1][0]), v && (c = T[0][1], p = T[1][1]), T[0][0] === a && T[0][1] === c && T[1][0] === h && T[1][1] === p || (M.selection = [[a, c], [h, p]], f.call(_), R.brush(t, m.name));
      }

      function B(t) {
        if (jo(t), t.touches) {
          if (t.touches.length) return;
          n && clearTimeout(n), n = setTimeout(function () {
            n = null;
          }, 500);
        } else ae(t.view, g), I.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);

        F.attr("pointer-events", "all"), q.attr("cursor", ra.overlay), M.selection && (T = M.selection), da(T) && (M.selection = null, f.call(_)), R.end(t, m.name);
      }

      function Y(t) {
        switch (t.keyCode) {
          case 16:
            z = x && w;
            break;

          case 18:
            m === Go && (x && (l = h - C * x, i = a + C * x), w && (d = p - P * w, u = c + P * w), m = Vo, U(t));
            break;

          case 32:
            m !== Go && m !== Vo || (x < 0 ? l = h - C : x > 0 && (i = a - C), w < 0 ? d = p - P : w > 0 && (u = c - P), m = Xo, q.attr("cursor", ra.selection), U(t));
            break;

          default:
            return;
        }

        $o(t);
      }

      function L(t) {
        switch (t.keyCode) {
          case 16:
            z && (y = v = z = !1, U(t));
            break;

          case 18:
            m === Vo && (x < 0 ? l = h : x > 0 && (i = a), w < 0 ? d = p : w > 0 && (u = c), m = Go, U(t));
            break;

          case 32:
            m === Xo && (t.altKey ? (x && (l = h - C * x, i = a + C * x), w && (d = p - P * w, u = c + P * w), m = Vo) : (x < 0 ? l = h : x > 0 && (i = a), w < 0 ? d = p : w > 0 && (u = c), m = Go), q.attr("cursor", ra[b]), U(t));
            break;

          default:
            return;
        }

        $o(t);
      }
    }

    function d(t) {
      s(this, arguments).moved(t);
    }

    function p(t) {
      s(this, arguments).ended(t);
    }

    function g() {
      var n = this.__brush || {
        selection: null
      };
      return n.extent = Jo(e.apply(this, arguments)), n.dim = t, n;
    }

    return c.move = function (n, e, r) {
      n.tween ? n.on("start.brush", function (t) {
        s(this, arguments).beforestart().start(t);
      }).on("interrupt.brush end.brush", function (t) {
        s(this, arguments).end(t);
      }).tween("brush", function () {
        var n = this,
            r = n.__brush,
            i = s(n, arguments),
            o = r.selection,
            a = t.input("function" == typeof e ? e.apply(this, arguments) : e, r.extent),
            u = Hr(o, a);

        function c(t) {
          r.selection = 1 === t && null === a ? null : u(t), f.call(n), i.brush();
        }

        return null !== o && null !== a ? c : c(1);
      }) : n.each(function () {
        var n = this,
            i = arguments,
            o = n.__brush,
            a = t.input("function" == typeof e ? e.apply(n, i) : e, o.extent),
            u = s(n, i).beforestart();
        Ii(n), o.selection = null === a ? null : a, f.call(n), u.start(r).brush(r).end(r);
      });
    }, c.clear = function (t, n) {
      c.move(t, null, n);
    }, l.prototype = {
      beforestart: function () {
        return 1 == ++this.active && (this.state.emitter = this, this.starting = !0), this;
      },
      start: function (t, n) {
        return this.starting ? (this.starting = !1, this.emit("start", t, n)) : this.emit("brush", t), this;
      },
      brush: function (t, n) {
        return this.emit("brush", t, n), this;
      },
      end: function (t, n) {
        return 0 == --this.active && (delete this.state.emitter, this.emit("end", t, n)), this;
      },
      emit: function (n, e, r) {
        var i = Wn(this.that).datum();
        a.call(n, this.that, new Lo(n, {
          sourceEvent: e,
          target: c,
          selection: t.output(this.state.selection),
          mode: r,
          dispatch: a
        }), i);
      }
    }, c.extent = function (t) {
      return arguments.length ? (e = "function" == typeof t ? t : Yo(Jo(t)), c) : e;
    }, c.filter = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : Yo(!!t), c) : r;
    }, c.touchable = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : Yo(!!t), c) : i;
    }, c.handleSize = function (t) {
      return arguments.length ? (u = +t, c) : u;
    }, c.keyModifiers = function (t) {
      return arguments.length ? (o = !!t, c) : o;
    }, c.on = function () {
      var t = a.on.apply(a, arguments);
      return t === a ? c : t;
    }, c;
  }

  var ga = Math.abs,
      ya = Math.cos,
      va = Math.sin,
      _a = Math.PI,
      ba = _a / 2,
      ma = 2 * _a,
      xa = Math.max,
      wa = 1e-12;

  function Ma(t, n) {
    return Array.from({
      length: n - t
    }, (n, e) => t + e);
  }

  function Aa(t) {
    return function (n, e) {
      return t(n.source.value + n.target.value, e.source.value + e.target.value);
    };
  }

  function Ta(t, n) {
    var e = 0,
        r = null,
        i = null,
        o = null;

    function a(a) {
      var u,
          c = a.length,
          f = new Array(c),
          s = Ma(0, c),
          l = new Array(c * c),
          h = new Array(c),
          d = 0;
      a = Float64Array.from({
        length: c * c
      }, n ? (t, n) => a[n % c][n / c | 0] : (t, n) => a[n / c | 0][n % c]);

      for (let n = 0; n < c; ++n) {
        let e = 0;

        for (let r = 0; r < c; ++r) e += a[n * c + r] + t * a[r * c + n];

        d += f[n] = e;
      }

      u = (d = xa(0, ma - e * c) / d) ? e : ma / c;
      {
        let n = 0;
        r && s.sort((t, n) => r(f[t], f[n]));

        for (const e of s) {
          const r = n;

          if (t) {
            const t = Ma(1 + ~c, c).filter(t => t < 0 ? a[~t * c + e] : a[e * c + t]);
            i && t.sort((t, n) => i(t < 0 ? -a[~t * c + e] : a[e * c + t], n < 0 ? -a[~n * c + e] : a[e * c + n]));

            for (const r of t) if (r < 0) {
              (l[~r * c + e] || (l[~r * c + e] = {
                source: null,
                target: null
              })).target = {
                index: e,
                startAngle: n,
                endAngle: n += a[~r * c + e] * d,
                value: a[~r * c + e]
              };
            } else {
              (l[e * c + r] || (l[e * c + r] = {
                source: null,
                target: null
              })).source = {
                index: e,
                startAngle: n,
                endAngle: n += a[e * c + r] * d,
                value: a[e * c + r]
              };
            }

            h[e] = {
              index: e,
              startAngle: r,
              endAngle: n,
              value: f[e]
            };
          } else {
            const t = Ma(0, c).filter(t => a[e * c + t] || a[t * c + e]);
            i && t.sort((t, n) => i(a[e * c + t], a[e * c + n]));

            for (const r of t) {
              let t;

              if (e < r ? (t = l[e * c + r] || (l[e * c + r] = {
                source: null,
                target: null
              }), t.source = {
                index: e,
                startAngle: n,
                endAngle: n += a[e * c + r] * d,
                value: a[e * c + r]
              }) : (t = l[r * c + e] || (l[r * c + e] = {
                source: null,
                target: null
              }), t.target = {
                index: e,
                startAngle: n,
                endAngle: n += a[e * c + r] * d,
                value: a[e * c + r]
              }, e === r && (t.source = t.target)), t.source && t.target && t.source.value < t.target.value) {
                const n = t.source;
                t.source = t.target, t.target = n;
              }
            }

            h[e] = {
              index: e,
              startAngle: r,
              endAngle: n,
              value: f[e]
            };
          }

          n += u;
        }
      }
      return (l = Object.values(l)).groups = h, o ? l.sort(o) : l;
    }

    return a.padAngle = function (t) {
      return arguments.length ? (e = xa(0, t), a) : e;
    }, a.sortGroups = function (t) {
      return arguments.length ? (r = t, a) : r;
    }, a.sortSubgroups = function (t) {
      return arguments.length ? (i = t, a) : i;
    }, a.sortChords = function (t) {
      return arguments.length ? (null == t ? o = null : (o = Aa(t))._ = t, a) : o && o._;
    }, a;
  }

  const Sa = Math.PI,
        Ea = 2 * Sa,
        ka = 1e-6,
        Na = Ea - ka;

  function Ca() {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
  }

  function Pa() {
    return new Ca();
  }

  Ca.prototype = Pa.prototype = {
    constructor: Ca,
    moveTo: function (t, n) {
      this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n);
    },
    closePath: function () {
      null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
    },
    lineTo: function (t, n) {
      this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n);
    },
    quadraticCurveTo: function (t, n, e, r) {
      this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r);
    },
    bezierCurveTo: function (t, n, e, r, i, o) {
      this._ += "C" + +t + "," + +n + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +o);
    },
    arcTo: function (t, n, e, r, i) {
      t = +t, n = +n, e = +e, r = +r, i = +i;
      var o = this._x1,
          a = this._y1,
          u = e - t,
          c = r - n,
          f = o - t,
          s = a - n,
          l = f * f + s * s;
      if (i < 0) throw new Error("negative radius: " + i);
      if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);else if (l > ka) {
        if (Math.abs(s * u - c * f) > ka && i) {
          var h = e - o,
              d = r - a,
              p = u * u + c * c,
              g = h * h + d * d,
              y = Math.sqrt(p),
              v = Math.sqrt(l),
              _ = i * Math.tan((Sa - Math.acos((p + l - g) / (2 * y * v))) / 2),
              b = _ / v,
              m = _ / y;

          Math.abs(b - 1) > ka && (this._ += "L" + (t + b * f) + "," + (n + b * s)), this._ += "A" + i + "," + i + ",0,0," + +(s * h > f * d) + "," + (this._x1 = t + m * u) + "," + (this._y1 = n + m * c);
        } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
      } else ;
    },
    arc: function (t, n, e, r, i, o) {
      t = +t, n = +n, o = !!o;
      var a = (e = +e) * Math.cos(r),
          u = e * Math.sin(r),
          c = t + a,
          f = n + u,
          s = 1 ^ o,
          l = o ? r - i : i - r;
      if (e < 0) throw new Error("negative radius: " + e);
      null === this._x1 ? this._ += "M" + c + "," + f : (Math.abs(this._x1 - c) > ka || Math.abs(this._y1 - f) > ka) && (this._ += "L" + c + "," + f), e && (l < 0 && (l = l % Ea + Ea), l > Na ? this._ += "A" + e + "," + e + ",0,1," + s + "," + (t - a) + "," + (n - u) + "A" + e + "," + e + ",0,1," + s + "," + (this._x1 = c) + "," + (this._y1 = f) : l > ka && (this._ += "A" + e + "," + e + ",0," + +(l >= Sa) + "," + s + "," + (this._x1 = t + e * Math.cos(i)) + "," + (this._y1 = n + e * Math.sin(i))));
    },
    rect: function (t, n, e, r) {
      this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z";
    },
    toString: function () {
      return this._;
    }
  };
  var za = Array.prototype.slice;

  function Da(t) {
    return function () {
      return t;
    };
  }

  function Ra(t) {
    return t.source;
  }

  function Fa(t) {
    return t.target;
  }

  function qa(t) {
    return t.radius;
  }

  function Ia(t) {
    return t.startAngle;
  }

  function Oa(t) {
    return t.endAngle;
  }

  function Ua() {
    return 0;
  }

  function Ba() {
    return 10;
  }

  function Ya(t) {
    var n = Ra,
        e = Fa,
        r = qa,
        i = qa,
        o = Ia,
        a = Oa,
        u = Ua,
        c = null;

    function f() {
      var f,
          s = n.apply(this, arguments),
          l = e.apply(this, arguments),
          h = u.apply(this, arguments) / 2,
          d = za.call(arguments),
          p = +r.apply(this, (d[0] = s, d)),
          g = o.apply(this, d) - ba,
          y = a.apply(this, d) - ba,
          v = +i.apply(this, (d[0] = l, d)),
          _ = o.apply(this, d) - ba,
          b = a.apply(this, d) - ba;

      if (c || (c = f = Pa()), h > wa && (ga(y - g) > 2 * h + wa ? y > g ? (g += h, y -= h) : (g -= h, y += h) : g = y = (g + y) / 2, ga(b - _) > 2 * h + wa ? b > _ ? (_ += h, b -= h) : (_ -= h, b += h) : _ = b = (_ + b) / 2), c.moveTo(p * ya(g), p * va(g)), c.arc(0, 0, p, g, y), g !== _ || y !== b) if (t) {
        var m = +t.apply(this, arguments),
            x = v - m,
            w = (_ + b) / 2;
        c.quadraticCurveTo(0, 0, x * ya(_), x * va(_)), c.lineTo(v * ya(w), v * va(w)), c.lineTo(x * ya(b), x * va(b));
      } else c.quadraticCurveTo(0, 0, v * ya(_), v * va(_)), c.arc(0, 0, v, _, b);
      if (c.quadraticCurveTo(0, 0, p * ya(g), p * va(g)), c.closePath(), f) return c = null, f + "" || null;
    }

    return t && (f.headRadius = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : Da(+n), f) : t;
    }), f.radius = function (t) {
      return arguments.length ? (r = i = "function" == typeof t ? t : Da(+t), f) : r;
    }, f.sourceRadius = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : Da(+t), f) : r;
    }, f.targetRadius = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : Da(+t), f) : i;
    }, f.startAngle = function (t) {
      return arguments.length ? (o = "function" == typeof t ? t : Da(+t), f) : o;
    }, f.endAngle = function (t) {
      return arguments.length ? (a = "function" == typeof t ? t : Da(+t), f) : a;
    }, f.padAngle = function (t) {
      return arguments.length ? (u = "function" == typeof t ? t : Da(+t), f) : u;
    }, f.source = function (t) {
      return arguments.length ? (n = t, f) : n;
    }, f.target = function (t) {
      return arguments.length ? (e = t, f) : e;
    }, f.context = function (t) {
      return arguments.length ? (c = null == t ? null : t, f) : c;
    }, f;
  }

  var La = Array.prototype.slice;

  function ja(t, n) {
    return t - n;
  }

  var $a = t => () => t;

  function Ha(t, n) {
    for (var e, r = -1, i = n.length; ++r < i;) if (e = Xa(t, n[r])) return e;

    return 0;
  }

  function Xa(t, n) {
    for (var e = n[0], r = n[1], i = -1, o = 0, a = t.length, u = a - 1; o < a; u = o++) {
      var c = t[o],
          f = c[0],
          s = c[1],
          l = t[u],
          h = l[0],
          d = l[1];
      if (Ga(c, l, n)) return 0;
      s > r != d > r && e < (h - f) * (r - s) / (d - s) + f && (i = -i);
    }

    return i;
  }

  function Ga(t, n, e) {
    var r, i, o, a;
    return function (t, n, e) {
      return (n[0] - t[0]) * (e[1] - t[1]) == (e[0] - t[0]) * (n[1] - t[1]);
    }(t, n, e) && (i = t[r = +(t[0] === n[0])], o = e[r], a = n[r], i <= o && o <= a || a <= o && o <= i);
  }

  function Va() {}

  var Wa = [[], [[[1, 1.5], [.5, 1]]], [[[1.5, 1], [1, 1.5]]], [[[1.5, 1], [.5, 1]]], [[[1, .5], [1.5, 1]]], [[[1, 1.5], [.5, 1]], [[1, .5], [1.5, 1]]], [[[1, .5], [1, 1.5]]], [[[1, .5], [.5, 1]]], [[[.5, 1], [1, .5]]], [[[1, 1.5], [1, .5]]], [[[.5, 1], [1, .5]], [[1.5, 1], [1, 1.5]]], [[[1.5, 1], [1, .5]]], [[[.5, 1], [1.5, 1]]], [[[1, 1.5], [1.5, 1]]], [[[.5, 1], [1, 1.5]]], []];

  function Za() {
    var t = 1,
        n = 1,
        e = K,
        r = u;

    function i(t) {
      var n = e(t);
      if (Array.isArray(n)) n = n.slice().sort(ja);else {
        const e = A(t),
              r = W(e[0], e[1], n);
        n = G(Math.floor(e[0] / r) * r, Math.floor(e[1] / r - 1) * r, n);
      }
      return n.map(n => o(t, n));
    }

    function o(e, i) {
      var o = [],
          u = [];
      return function (e, r, i) {
        var o,
            u,
            c,
            f,
            s,
            l,
            h = new Array(),
            d = new Array();
        o = u = -1, f = e[0] >= r, Wa[f << 1].forEach(p);

        for (; ++o < t - 1;) c = f, f = e[o + 1] >= r, Wa[c | f << 1].forEach(p);

        Wa[f << 0].forEach(p);

        for (; ++u < n - 1;) {
          for (o = -1, f = e[u * t + t] >= r, s = e[u * t] >= r, Wa[f << 1 | s << 2].forEach(p); ++o < t - 1;) c = f, f = e[u * t + t + o + 1] >= r, l = s, s = e[u * t + o + 1] >= r, Wa[c | f << 1 | s << 2 | l << 3].forEach(p);

          Wa[f | s << 3].forEach(p);
        }

        o = -1, s = e[u * t] >= r, Wa[s << 2].forEach(p);

        for (; ++o < t - 1;) l = s, s = e[u * t + o + 1] >= r, Wa[s << 2 | l << 3].forEach(p);

        function p(t) {
          var n,
              e,
              r = [t[0][0] + o, t[0][1] + u],
              c = [t[1][0] + o, t[1][1] + u],
              f = a(r),
              s = a(c);
          (n = d[f]) ? (e = h[s]) ? (delete d[n.end], delete h[e.start], n === e ? (n.ring.push(c), i(n.ring)) : h[n.start] = d[e.end] = {
            start: n.start,
            end: e.end,
            ring: n.ring.concat(e.ring)
          }) : (delete d[n.end], n.ring.push(c), d[n.end = s] = n) : (n = h[s]) ? (e = d[f]) ? (delete h[n.start], delete d[e.end], n === e ? (n.ring.push(c), i(n.ring)) : h[e.start] = d[n.end] = {
            start: e.start,
            end: n.end,
            ring: e.ring.concat(n.ring)
          }) : (delete h[n.start], n.ring.unshift(r), h[n.start = f] = n) : h[f] = d[s] = {
            start: f,
            end: s,
            ring: [r, c]
          };
        }

        Wa[s << 3].forEach(p);
      }(e, i, function (t) {
        r(t, e, i), function (t) {
          for (var n = 0, e = t.length, r = t[e - 1][1] * t[0][0] - t[e - 1][0] * t[0][1]; ++n < e;) r += t[n - 1][1] * t[n][0] - t[n - 1][0] * t[n][1];

          return r;
        }(t) > 0 ? o.push([t]) : u.push(t);
      }), u.forEach(function (t) {
        for (var n, e = 0, r = o.length; e < r; ++e) if (-1 !== Ha((n = o[e])[0], t)) return void n.push(t);
      }), {
        type: "MultiPolygon",
        value: i,
        coordinates: o
      };
    }

    function a(n) {
      return 2 * n[0] + n[1] * (t + 1) * 4;
    }

    function u(e, r, i) {
      e.forEach(function (e) {
        var o,
            a = e[0],
            u = e[1],
            c = 0 | a,
            f = 0 | u,
            s = r[f * t + c];
        a > 0 && a < t && c === a && (o = r[f * t + c - 1], e[0] = a + (i - o) / (s - o) - .5), u > 0 && u < n && f === u && (o = r[(f - 1) * t + c], e[1] = u + (i - o) / (s - o) - .5);
      });
    }

    return i.contour = o, i.size = function (e) {
      if (!arguments.length) return [t, n];
      var r = Math.floor(e[0]),
          o = Math.floor(e[1]);
      if (!(r >= 0 && o >= 0)) throw new Error("invalid size");
      return t = r, n = o, i;
    }, i.thresholds = function (t) {
      return arguments.length ? (e = "function" == typeof t ? t : Array.isArray(t) ? $a(La.call(t)) : $a(t), i) : e;
    }, i.smooth = function (t) {
      return arguments.length ? (r = t ? u : Va, i) : r === u;
    }, i;
  }

  function Ka(t) {
    return t[0];
  }

  function Qa(t) {
    return t[1];
  }

  function Ja() {
    return 1;
  }

  const tu = 134217729;

  function nu(t, n, e, r, i) {
    let o,
        a,
        u,
        c,
        f = n[0],
        s = r[0],
        l = 0,
        h = 0;
    s > f == s > -f ? (o = f, f = n[++l]) : (o = s, s = r[++h]);
    let d = 0;
    if (l < t && h < e) for (s > f == s > -f ? (a = f + o, u = o - (a - f), f = n[++l]) : (a = s + o, u = o - (a - s), s = r[++h]), o = a, 0 !== u && (i[d++] = u); l < t && h < e;) s > f == s > -f ? (a = o + f, c = a - o, u = o - (a - c) + (f - c), f = n[++l]) : (a = o + s, c = a - o, u = o - (a - c) + (s - c), s = r[++h]), o = a, 0 !== u && (i[d++] = u);

    for (; l < t;) a = o + f, c = a - o, u = o - (a - c) + (f - c), f = n[++l], o = a, 0 !== u && (i[d++] = u);

    for (; h < e;) a = o + s, c = a - o, u = o - (a - c) + (s - c), s = r[++h], o = a, 0 !== u && (i[d++] = u);

    return 0 === o && 0 !== d || (i[d++] = o), d;
  }

  function eu(t) {
    return new Float64Array(t);
  }

  const ru = eu(4),
        iu = eu(8),
        ou = eu(12),
        au = eu(16),
        uu = eu(4);

  function cu(t, n, e, r, i, o) {
    const a = (n - o) * (e - i),
          u = (t - i) * (r - o),
          c = a - u;
    if (0 === a || 0 === u || a > 0 != u > 0) return c;
    const f = Math.abs(a + u);
    return Math.abs(c) >= 33306690738754716e-32 * f ? c : -function (t, n, e, r, i, o, a) {
      let u, c, f, s, l, h, d, p, g, y, v, _, b, m, x, w, M, A;

      const T = t - i,
            S = e - i,
            E = n - o,
            k = r - o;
      m = T * k, h = tu * T, d = h - (h - T), p = T - d, h = tu * k, g = h - (h - k), y = k - g, x = p * y - (m - d * g - p * g - d * y), w = E * S, h = tu * E, d = h - (h - E), p = E - d, h = tu * S, g = h - (h - S), y = S - g, M = p * y - (w - d * g - p * g - d * y), v = x - M, l = x - v, ru[0] = x - (v + l) + (l - M), _ = m + v, l = _ - m, b = m - (_ - l) + (v - l), v = b - w, l = b - v, ru[1] = b - (v + l) + (l - w), A = _ + v, l = A - _, ru[2] = _ - (A - l) + (v - l), ru[3] = A;

      let N = function (t, n) {
        let e = n[0];

        for (let r = 1; r < t; r++) e += n[r];

        return e;
      }(4, ru),
          C = 22204460492503146e-32 * a;

      if (N >= C || -N >= C) return N;
      if (l = t - T, u = t - (T + l) + (l - i), l = e - S, f = e - (S + l) + (l - i), l = n - E, c = n - (E + l) + (l - o), l = r - k, s = r - (k + l) + (l - o), 0 === u && 0 === c && 0 === f && 0 === s) return N;
      if (C = 11093356479670487e-47 * a + 33306690738754706e-32 * Math.abs(N), N += T * s + k * u - (E * f + S * c), N >= C || -N >= C) return N;
      m = u * k, h = tu * u, d = h - (h - u), p = u - d, h = tu * k, g = h - (h - k), y = k - g, x = p * y - (m - d * g - p * g - d * y), w = c * S, h = tu * c, d = h - (h - c), p = c - d, h = tu * S, g = h - (h - S), y = S - g, M = p * y - (w - d * g - p * g - d * y), v = x - M, l = x - v, uu[0] = x - (v + l) + (l - M), _ = m + v, l = _ - m, b = m - (_ - l) + (v - l), v = b - w, l = b - v, uu[1] = b - (v + l) + (l - w), A = _ + v, l = A - _, uu[2] = _ - (A - l) + (v - l), uu[3] = A;
      const P = nu(4, ru, 4, uu, iu);
      m = T * s, h = tu * T, d = h - (h - T), p = T - d, h = tu * s, g = h - (h - s), y = s - g, x = p * y - (m - d * g - p * g - d * y), w = E * f, h = tu * E, d = h - (h - E), p = E - d, h = tu * f, g = h - (h - f), y = f - g, M = p * y - (w - d * g - p * g - d * y), v = x - M, l = x - v, uu[0] = x - (v + l) + (l - M), _ = m + v, l = _ - m, b = m - (_ - l) + (v - l), v = b - w, l = b - v, uu[1] = b - (v + l) + (l - w), A = _ + v, l = A - _, uu[2] = _ - (A - l) + (v - l), uu[3] = A;
      const z = nu(P, iu, 4, uu, ou);
      m = u * s, h = tu * u, d = h - (h - u), p = u - d, h = tu * s, g = h - (h - s), y = s - g, x = p * y - (m - d * g - p * g - d * y), w = c * f, h = tu * c, d = h - (h - c), p = c - d, h = tu * f, g = h - (h - f), y = f - g, M = p * y - (w - d * g - p * g - d * y), v = x - M, l = x - v, uu[0] = x - (v + l) + (l - M), _ = m + v, l = _ - m, b = m - (_ - l) + (v - l), v = b - w, l = b - v, uu[1] = b - (v + l) + (l - w), A = _ + v, l = A - _, uu[2] = _ - (A - l) + (v - l), uu[3] = A;
      const D = nu(z, ou, 4, uu, au);
      return au[D - 1];
    }(t, n, e, r, i, o, f);
  }

  const fu = Math.pow(2, -52),
        su = new Uint32Array(512);

  class lu {
    static from(t, n = vu, e = _u) {
      const r = t.length,
            i = new Float64Array(2 * r);

      for (let o = 0; o < r; o++) {
        const r = t[o];
        i[2 * o] = n(r), i[2 * o + 1] = e(r);
      }

      return new lu(i);
    }

    constructor(t) {
      const n = t.length >> 1;
      if (n > 0 && "number" != typeof t[0]) throw new Error("Expected coords to contain numbers.");
      this.coords = t;
      const e = Math.max(2 * n - 5, 0);
      this._triangles = new Uint32Array(3 * e), this._halfedges = new Int32Array(3 * e), this._hashSize = Math.ceil(Math.sqrt(n)), this._hullPrev = new Uint32Array(n), this._hullNext = new Uint32Array(n), this._hullTri = new Uint32Array(n), this._hullHash = new Int32Array(this._hashSize).fill(-1), this._ids = new Uint32Array(n), this._dists = new Float64Array(n), this.update();
    }

    update() {
      const {
        coords: t,
        _hullPrev: n,
        _hullNext: e,
        _hullTri: r,
        _hullHash: i
      } = this,
            o = t.length >> 1;
      let a = 1 / 0,
          u = 1 / 0,
          c = -1 / 0,
          f = -1 / 0;

      for (let n = 0; n < o; n++) {
        const e = t[2 * n],
              r = t[2 * n + 1];
        e < a && (a = e), r < u && (u = r), e > c && (c = e), r > f && (f = r), this._ids[n] = n;
      }

      const s = (a + c) / 2,
            l = (u + f) / 2;
      let h,
          d,
          p,
          g = 1 / 0;

      for (let n = 0; n < o; n++) {
        const e = hu(s, l, t[2 * n], t[2 * n + 1]);
        e < g && (h = n, g = e);
      }

      const y = t[2 * h],
            v = t[2 * h + 1];
      g = 1 / 0;

      for (let n = 0; n < o; n++) {
        if (n === h) continue;
        const e = hu(y, v, t[2 * n], t[2 * n + 1]);
        e < g && e > 0 && (d = n, g = e);
      }

      let _ = t[2 * d],
          b = t[2 * d + 1],
          m = 1 / 0;

      for (let n = 0; n < o; n++) {
        if (n === h || n === d) continue;
        const e = pu(y, v, _, b, t[2 * n], t[2 * n + 1]);
        e < m && (p = n, m = e);
      }

      let x = t[2 * p],
          w = t[2 * p + 1];

      if (m === 1 / 0) {
        for (let n = 0; n < o; n++) this._dists[n] = t[2 * n] - t[0] || t[2 * n + 1] - t[1];

        gu(this._ids, this._dists, 0, o - 1);
        const n = new Uint32Array(o);
        let e = 0;

        for (let t = 0, r = -1 / 0; t < o; t++) {
          const i = this._ids[t];
          this._dists[i] > r && (n[e++] = i, r = this._dists[i]);
        }

        return this.hull = n.subarray(0, e), this.triangles = new Uint32Array(0), void (this.halfedges = new Uint32Array(0));
      }

      if (cu(y, v, _, b, x, w) < 0) {
        const t = d,
              n = _,
              e = b;
        d = p, _ = x, b = w, p = t, x = n, w = e;
      }

      const M = function (t, n, e, r, i, o) {
        const a = e - t,
              u = r - n,
              c = i - t,
              f = o - n,
              s = a * a + u * u,
              l = c * c + f * f,
              h = .5 / (a * f - u * c);
        return {
          x: t + (f * s - u * l) * h,
          y: n + (a * l - c * s) * h
        };
      }(y, v, _, b, x, w);

      this._cx = M.x, this._cy = M.y;

      for (let n = 0; n < o; n++) this._dists[n] = hu(t[2 * n], t[2 * n + 1], M.x, M.y);

      gu(this._ids, this._dists, 0, o - 1), this._hullStart = h;
      let A = 3;
      e[h] = n[p] = d, e[d] = n[h] = p, e[p] = n[d] = h, r[h] = 0, r[d] = 1, r[p] = 2, i.fill(-1), i[this._hashKey(y, v)] = h, i[this._hashKey(_, b)] = d, i[this._hashKey(x, w)] = p, this.trianglesLen = 0, this._addTriangle(h, d, p, -1, -1, -1);

      for (let o, a, u = 0; u < this._ids.length; u++) {
        const c = this._ids[u],
              f = t[2 * c],
              s = t[2 * c + 1];
        if (u > 0 && Math.abs(f - o) <= fu && Math.abs(s - a) <= fu) continue;
        if (o = f, a = s, c === h || c === d || c === p) continue;
        let l = 0;

        for (let t = 0, n = this._hashKey(f, s); t < this._hashSize && (l = i[(n + t) % this._hashSize], -1 === l || l === e[l]); t++);

        l = n[l];
        let g,
            y = l;

        for (; g = e[y], cu(f, s, t[2 * y], t[2 * y + 1], t[2 * g], t[2 * g + 1]) >= 0;) if (y = g, y === l) {
          y = -1;
          break;
        }

        if (-1 === y) continue;

        let v = this._addTriangle(y, c, e[y], -1, -1, r[y]);

        r[c] = this._legalize(v + 2), r[y] = v, A++;
        let _ = e[y];

        for (; g = e[_], cu(f, s, t[2 * _], t[2 * _ + 1], t[2 * g], t[2 * g + 1]) < 0;) v = this._addTriangle(_, c, g, r[c], -1, r[_]), r[c] = this._legalize(v + 2), e[_] = _, A--, _ = g;

        if (y === l) for (; g = n[y], cu(f, s, t[2 * g], t[2 * g + 1], t[2 * y], t[2 * y + 1]) < 0;) v = this._addTriangle(g, c, y, -1, r[y], r[g]), this._legalize(v + 2), r[g] = v, e[y] = y, A--, y = g;
        this._hullStart = n[c] = y, e[y] = n[_] = c, e[c] = _, i[this._hashKey(f, s)] = c, i[this._hashKey(t[2 * y], t[2 * y + 1])] = y;
      }

      this.hull = new Uint32Array(A);

      for (let t = 0, n = this._hullStart; t < A; t++) this.hull[t] = n, n = e[n];

      this.triangles = this._triangles.subarray(0, this.trianglesLen), this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
    }

    _hashKey(t, n) {
      return Math.floor(function (t, n) {
        const e = t / (Math.abs(t) + Math.abs(n));
        return (n > 0 ? 3 - e : 1 + e) / 4;
      }(t - this._cx, n - this._cy) * this._hashSize) % this._hashSize;
    }

    _legalize(t) {
      const {
        _triangles: n,
        _halfedges: e,
        coords: r
      } = this;
      let i = 0,
          o = 0;

      for (;;) {
        const a = e[t],
              u = t - t % 3;

        if (o = u + (t + 2) % 3, -1 === a) {
          if (0 === i) break;
          t = su[--i];
          continue;
        }

        const c = a - a % 3,
              f = u + (t + 1) % 3,
              s = c + (a + 2) % 3,
              l = n[o],
              h = n[t],
              d = n[f],
              p = n[s];

        if (du(r[2 * l], r[2 * l + 1], r[2 * h], r[2 * h + 1], r[2 * d], r[2 * d + 1], r[2 * p], r[2 * p + 1])) {
          n[t] = p, n[a] = l;
          const r = e[s];

          if (-1 === r) {
            let n = this._hullStart;

            do {
              if (this._hullTri[n] === s) {
                this._hullTri[n] = t;
                break;
              }

              n = this._hullPrev[n];
            } while (n !== this._hullStart);
          }

          this._link(t, r), this._link(a, e[o]), this._link(o, s);
          const u = c + (a + 1) % 3;
          i < su.length && (su[i++] = u);
        } else {
          if (0 === i) break;
          t = su[--i];
        }
      }

      return o;
    }

    _link(t, n) {
      this._halfedges[t] = n, -1 !== n && (this._halfedges[n] = t);
    }

    _addTriangle(t, n, e, r, i, o) {
      const a = this.trianglesLen;
      return this._triangles[a] = t, this._triangles[a + 1] = n, this._triangles[a + 2] = e, this._link(a, r), this._link(a + 1, i), this._link(a + 2, o), this.trianglesLen += 3, a;
    }

  }

  function hu(t, n, e, r) {
    const i = t - e,
          o = n - r;
    return i * i + o * o;
  }

  function du(t, n, e, r, i, o, a, u) {
    const c = t - a,
          f = n - u,
          s = e - a,
          l = r - u,
          h = i - a,
          d = o - u,
          p = s * s + l * l,
          g = h * h + d * d;
    return c * (l * g - p * d) - f * (s * g - p * h) + (c * c + f * f) * (s * d - l * h) < 0;
  }

  function pu(t, n, e, r, i, o) {
    const a = e - t,
          u = r - n,
          c = i - t,
          f = o - n,
          s = a * a + u * u,
          l = c * c + f * f,
          h = .5 / (a * f - u * c),
          d = (f * s - u * l) * h,
          p = (a * l - c * s) * h;
    return d * d + p * p;
  }

  function gu(t, n, e, r) {
    if (r - e <= 20) for (let i = e + 1; i <= r; i++) {
      const r = t[i],
            o = n[r];
      let a = i - 1;

      for (; a >= e && n[t[a]] > o;) t[a + 1] = t[a--];

      t[a + 1] = r;
    } else {
      let i = e + 1,
          o = r;
      yu(t, e + r >> 1, i), n[t[e]] > n[t[r]] && yu(t, e, r), n[t[i]] > n[t[r]] && yu(t, i, r), n[t[e]] > n[t[i]] && yu(t, e, i);
      const a = t[i],
            u = n[a];

      for (;;) {
        do {
          i++;
        } while (n[t[i]] < u);

        do {
          o--;
        } while (n[t[o]] > u);

        if (o < i) break;
        yu(t, i, o);
      }

      t[e + 1] = t[o], t[o] = a, r - i + 1 >= o - e ? (gu(t, n, i, r), gu(t, n, e, o - 1)) : (gu(t, n, e, o - 1), gu(t, n, i, r));
    }
  }

  function yu(t, n, e) {
    const r = t[n];
    t[n] = t[e], t[e] = r;
  }

  function vu(t) {
    return t[0];
  }

  function _u(t) {
    return t[1];
  }

  const bu = 1e-6;

  class mu {
    constructor() {
      this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
    }

    moveTo(t, n) {
      this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n);
    }

    closePath() {
      null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
    }

    lineTo(t, n) {
      this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n);
    }

    arc(t, n, e) {
      const r = (t = +t) + (e = +e),
            i = n = +n;
      if (e < 0) throw new Error("negative radius");
      null === this._x1 ? this._ += "M" + r + "," + i : (Math.abs(this._x1 - r) > bu || Math.abs(this._y1 - i) > bu) && (this._ += "L" + r + "," + i), e && (this._ += "A" + e + "," + e + ",0,1,1," + (t - e) + "," + n + "A" + e + "," + e + ",0,1,1," + (this._x1 = r) + "," + (this._y1 = i));
    }

    rect(t, n, e, r) {
      this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z";
    }

    value() {
      return this._ || null;
    }

  }

  class xu {
    constructor() {
      this._ = [];
    }

    moveTo(t, n) {
      this._.push([t, n]);
    }

    closePath() {
      this._.push(this._[0].slice());
    }

    lineTo(t, n) {
      this._.push([t, n]);
    }

    value() {
      return this._.length ? this._ : null;
    }

  }

  class wu {
    constructor(t, [n, e, r, i] = [0, 0, 960, 500]) {
      if (!((r = +r) >= (n = +n) && (i = +i) >= (e = +e))) throw new Error("invalid bounds");
      this.delaunay = t, this._circumcenters = new Float64Array(2 * t.points.length), this.vectors = new Float64Array(2 * t.points.length), this.xmax = r, this.xmin = n, this.ymax = i, this.ymin = e, this._init();
    }

    update() {
      return this.delaunay.update(), this._init(), this;
    }

    _init() {
      const {
        delaunay: {
          points: t,
          hull: n,
          triangles: e
        },
        vectors: r
      } = this,
            i = this.circumcenters = this._circumcenters.subarray(0, e.length / 3 * 2);

      for (let n, r, o = 0, a = 0, u = e.length; o < u; o += 3, a += 2) {
        const u = 2 * e[o],
              c = 2 * e[o + 1],
              f = 2 * e[o + 2],
              s = t[u],
              l = t[u + 1],
              h = t[c],
              d = t[c + 1],
              p = t[f],
              g = t[f + 1],
              y = h - s,
              v = d - l,
              _ = p - s,
              b = g - l,
              m = 2 * (y * b - v * _);

        if (Math.abs(m) < 1e-9) {
          let i = 1e9;
          const o = 2 * e[0];
          i *= Math.sign((t[o] - s) * b - (t[o + 1] - l) * _), n = (s + p) / 2 - i * b, r = (l + g) / 2 + i * _;
        } else {
          const t = 1 / m,
                e = y * y + v * v,
                i = _ * _ + b * b;
          n = s + (b * e - v * i) * t, r = l + (y * i - _ * e) * t;
        }

        i[a] = n, i[a + 1] = r;
      }

      let o,
          a,
          u,
          c = n[n.length - 1],
          f = 4 * c,
          s = t[2 * c],
          l = t[2 * c + 1];
      r.fill(0);

      for (let e = 0; e < n.length; ++e) c = n[e], o = f, a = s, u = l, f = 4 * c, s = t[2 * c], l = t[2 * c + 1], r[o + 2] = r[f] = u - l, r[o + 3] = r[f + 1] = s - a;
    }

    render(t) {
      const n = null == t ? t = new mu() : void 0,
            {
        delaunay: {
          halfedges: e,
          inedges: r,
          hull: i
        },
        circumcenters: o,
        vectors: a
      } = this;
      if (i.length <= 1) return null;

      for (let n = 0, r = e.length; n < r; ++n) {
        const r = e[n];
        if (r < n) continue;
        const i = 2 * Math.floor(n / 3),
              a = 2 * Math.floor(r / 3),
              u = o[i],
              c = o[i + 1],
              f = o[a],
              s = o[a + 1];

        this._renderSegment(u, c, f, s, t);
      }

      let u,
          c = i[i.length - 1];

      for (let n = 0; n < i.length; ++n) {
        u = c, c = i[n];

        const e = 2 * Math.floor(r[c] / 3),
              f = o[e],
              s = o[e + 1],
              l = 4 * u,
              h = this._project(f, s, a[l + 2], a[l + 3]);

        h && this._renderSegment(f, s, h[0], h[1], t);
      }

      return n && n.value();
    }

    renderBounds(t) {
      const n = null == t ? t = new mu() : void 0;
      return t.rect(this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin), n && n.value();
    }

    renderCell(t, n) {
      const e = null == n ? n = new mu() : void 0,
            r = this._clip(t);

      if (null === r || !r.length) return;
      n.moveTo(r[0], r[1]);
      let i = r.length;

      for (; r[0] === r[i - 2] && r[1] === r[i - 1] && i > 1;) i -= 2;

      for (let t = 2; t < i; t += 2) r[t] === r[t - 2] && r[t + 1] === r[t - 1] || n.lineTo(r[t], r[t + 1]);

      return n.closePath(), e && e.value();
    }

    *cellPolygons() {
      const {
        delaunay: {
          points: t
        }
      } = this;

      for (let n = 0, e = t.length / 2; n < e; ++n) {
        const t = this.cellPolygon(n);
        t && (t.index = n, yield t);
      }
    }

    cellPolygon(t) {
      const n = new xu();
      return this.renderCell(t, n), n.value();
    }

    _renderSegment(t, n, e, r, i) {
      let o;

      const a = this._regioncode(t, n),
            u = this._regioncode(e, r);

      0 === a && 0 === u ? (i.moveTo(t, n), i.lineTo(e, r)) : (o = this._clipSegment(t, n, e, r, a, u)) && (i.moveTo(o[0], o[1]), i.lineTo(o[2], o[3]));
    }

    contains(t, n, e) {
      return (n = +n) == n && (e = +e) == e && this.delaunay._step(t, n, e) === t;
    }

    *neighbors(t) {
      const n = this._clip(t);

      if (n) for (const e of this.delaunay.neighbors(t)) {
        const t = this._clip(e);

        if (t) t: for (let r = 0, i = n.length; r < i; r += 2) for (let o = 0, a = t.length; o < a; o += 2) if (n[r] == t[o] && n[r + 1] == t[o + 1] && n[(r + 2) % i] == t[(o + a - 2) % a] && n[(r + 3) % i] == t[(o + a - 1) % a]) {
          yield e;
          break t;
        }
      }
    }

    _cell(t) {
      const {
        circumcenters: n,
        delaunay: {
          inedges: e,
          halfedges: r,
          triangles: i
        }
      } = this,
            o = e[t];
      if (-1 === o) return null;
      const a = [];
      let u = o;

      do {
        const e = Math.floor(u / 3);
        if (a.push(n[2 * e], n[2 * e + 1]), u = u % 3 == 2 ? u - 2 : u + 1, i[u] !== t) break;
        u = r[u];
      } while (u !== o && -1 !== u);

      return a;
    }

    _clip(t) {
      if (0 === t && 1 === this.delaunay.hull.length) return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];

      const n = this._cell(t);

      if (null === n) return null;
      const {
        vectors: e
      } = this,
            r = 4 * t;
      return e[r] || e[r + 1] ? this._clipInfinite(t, n, e[r], e[r + 1], e[r + 2], e[r + 3]) : this._clipFinite(t, n);
    }

    _clipFinite(t, n) {
      const e = n.length;

      let r,
          i,
          o,
          a,
          u = null,
          c = n[e - 2],
          f = n[e - 1],
          s = this._regioncode(c, f),
          l = 0;

      for (let h = 0; h < e; h += 2) if (r = c, i = f, c = n[h], f = n[h + 1], o = s, s = this._regioncode(c, f), 0 === o && 0 === s) a = l, l = 0, u ? u.push(c, f) : u = [c, f];else {
        let n, e, h, d, p;

        if (0 === o) {
          if (null === (n = this._clipSegment(r, i, c, f, o, s))) continue;
          [e, h, d, p] = n;
        } else {
          if (null === (n = this._clipSegment(c, f, r, i, s, o))) continue;
          [d, p, e, h] = n, a = l, l = this._edgecode(e, h), a && l && this._edge(t, a, l, u, u.length), u ? u.push(e, h) : u = [e, h];
        }

        a = l, l = this._edgecode(d, p), a && l && this._edge(t, a, l, u, u.length), u ? u.push(d, p) : u = [d, p];
      }

      if (u) a = l, l = this._edgecode(u[0], u[1]), a && l && this._edge(t, a, l, u, u.length);else if (this.contains(t, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
      return u;
    }

    _clipSegment(t, n, e, r, i, o) {
      for (;;) {
        if (0 === i && 0 === o) return [t, n, e, r];
        if (i & o) return null;
        let a,
            u,
            c = i || o;
        8 & c ? (a = t + (e - t) * (this.ymax - n) / (r - n), u = this.ymax) : 4 & c ? (a = t + (e - t) * (this.ymin - n) / (r - n), u = this.ymin) : 2 & c ? (u = n + (r - n) * (this.xmax - t) / (e - t), a = this.xmax) : (u = n + (r - n) * (this.xmin - t) / (e - t), a = this.xmin), i ? (t = a, n = u, i = this._regioncode(t, n)) : (e = a, r = u, o = this._regioncode(e, r));
      }
    }

    _clipInfinite(t, n, e, r, i, o) {
      let a,
          u = Array.from(n);
      if ((a = this._project(u[0], u[1], e, r)) && u.unshift(a[0], a[1]), (a = this._project(u[u.length - 2], u[u.length - 1], i, o)) && u.push(a[0], a[1]), u = this._clipFinite(t, u)) for (let n, e = 0, r = u.length, i = this._edgecode(u[r - 2], u[r - 1]); e < r; e += 2) n = i, i = this._edgecode(u[e], u[e + 1]), n && i && (e = this._edge(t, n, i, u, e), r = u.length);else this.contains(t, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2) && (u = [this.xmin, this.ymin, this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax]);
      return u;
    }

    _edge(t, n, e, r, i) {
      for (; n !== e;) {
        let e, o;

        switch (n) {
          case 5:
            n = 4;
            continue;

          case 4:
            n = 6, e = this.xmax, o = this.ymin;
            break;

          case 6:
            n = 2;
            continue;

          case 2:
            n = 10, e = this.xmax, o = this.ymax;
            break;

          case 10:
            n = 8;
            continue;

          case 8:
            n = 9, e = this.xmin, o = this.ymax;
            break;

          case 9:
            n = 1;
            continue;

          case 1:
            n = 5, e = this.xmin, o = this.ymin;
        }

        r[i] === e && r[i + 1] === o || !this.contains(t, e, o) || (r.splice(i, 0, e, o), i += 2);
      }

      if (r.length > 4) for (let t = 0; t < r.length; t += 2) {
        const n = (t + 2) % r.length,
              e = (t + 4) % r.length;
        (r[t] === r[n] && r[n] === r[e] || r[t + 1] === r[n + 1] && r[n + 1] === r[e + 1]) && (r.splice(n, 2), t -= 2);
      }
      return i;
    }

    _project(t, n, e, r) {
      let i,
          o,
          a,
          u = 1 / 0;

      if (r < 0) {
        if (n <= this.ymin) return null;
        (i = (this.ymin - n) / r) < u && (a = this.ymin, o = t + (u = i) * e);
      } else if (r > 0) {
        if (n >= this.ymax) return null;
        (i = (this.ymax - n) / r) < u && (a = this.ymax, o = t + (u = i) * e);
      }

      if (e > 0) {
        if (t >= this.xmax) return null;
        (i = (this.xmax - t) / e) < u && (o = this.xmax, a = n + (u = i) * r);
      } else if (e < 0) {
        if (t <= this.xmin) return null;
        (i = (this.xmin - t) / e) < u && (o = this.xmin, a = n + (u = i) * r);
      }

      return [o, a];
    }

    _edgecode(t, n) {
      return (t === this.xmin ? 1 : t === this.xmax ? 2 : 0) | (n === this.ymin ? 4 : n === this.ymax ? 8 : 0);
    }

    _regioncode(t, n) {
      return (t < this.xmin ? 1 : t > this.xmax ? 2 : 0) | (n < this.ymin ? 4 : n > this.ymax ? 8 : 0);
    }

  }

  const Mu = 2 * Math.PI,
        Au = Math.pow;

  function Tu(t) {
    return t[0];
  }

  function Su(t) {
    return t[1];
  }

  function Eu(t, n, e) {
    return [t + Math.sin(t + n) * e, n + Math.cos(t - n) * e];
  }

  class ku {
    static from(t, n = Tu, e = Su, r) {
      return new ku("length" in t ? function (t, n, e, r) {
        const i = t.length,
              o = new Float64Array(2 * i);

        for (let a = 0; a < i; ++a) {
          const i = t[a];
          o[2 * a] = n.call(r, i, a, t), o[2 * a + 1] = e.call(r, i, a, t);
        }

        return o;
      }(t, n, e, r) : Float64Array.from(function* (t, n, e, r) {
        let i = 0;

        for (const o of t) yield n.call(r, o, i, t), yield e.call(r, o, i, t), ++i;
      }(t, n, e, r)));
    }

    constructor(t) {
      this._delaunator = new lu(t), this.inedges = new Int32Array(t.length / 2), this._hullIndex = new Int32Array(t.length / 2), this.points = this._delaunator.coords, this._init();
    }

    update() {
      return this._delaunator.update(), this._init(), this;
    }

    _init() {
      const t = this._delaunator,
            n = this.points;

      if (t.hull && t.hull.length > 2 && function (t) {
        const {
          triangles: n,
          coords: e
        } = t;

        for (let t = 0; t < n.length; t += 3) {
          const r = 2 * n[t],
                i = 2 * n[t + 1],
                o = 2 * n[t + 2];
          if ((e[o] - e[r]) * (e[i + 1] - e[r + 1]) - (e[i] - e[r]) * (e[o + 1] - e[r + 1]) > 1e-10) return !1;
        }

        return !0;
      }(t)) {
        this.collinear = Int32Array.from({
          length: n.length / 2
        }, (t, n) => n).sort((t, e) => n[2 * t] - n[2 * e] || n[2 * t + 1] - n[2 * e + 1]);
        const t = this.collinear[0],
              e = this.collinear[this.collinear.length - 1],
              r = [n[2 * t], n[2 * t + 1], n[2 * e], n[2 * e + 1]],
              i = 1e-8 * Math.hypot(r[3] - r[1], r[2] - r[0]);

        for (let t = 0, e = n.length / 2; t < e; ++t) {
          const e = Eu(n[2 * t], n[2 * t + 1], i);
          n[2 * t] = e[0], n[2 * t + 1] = e[1];
        }

        this._delaunator = new lu(n);
      } else delete this.collinear;

      const e = this.halfedges = this._delaunator.halfedges,
            r = this.hull = this._delaunator.hull,
            i = this.triangles = this._delaunator.triangles,
            o = this.inedges.fill(-1),
            a = this._hullIndex.fill(-1);

      for (let t = 0, n = e.length; t < n; ++t) {
        const n = i[t % 3 == 2 ? t - 2 : t + 1];
        -1 !== e[t] && -1 !== o[n] || (o[n] = t);
      }

      for (let t = 0, n = r.length; t < n; ++t) a[r[t]] = t;

      r.length <= 2 && r.length > 0 && (this.triangles = new Int32Array(3).fill(-1), this.halfedges = new Int32Array(3).fill(-1), this.triangles[0] = r[0], o[r[0]] = 1, 2 === r.length && (o[r[1]] = 0, this.triangles[1] = r[1], this.triangles[2] = r[1]));
    }

    voronoi(t) {
      return new wu(this, t);
    }

    *neighbors(t) {
      const {
        inedges: n,
        hull: e,
        _hullIndex: r,
        halfedges: i,
        triangles: o,
        collinear: a
      } = this;

      if (a) {
        const n = a.indexOf(t);
        return n > 0 && (yield a[n - 1]), void (n < a.length - 1 && (yield a[n + 1]));
      }

      const u = n[t];
      if (-1 === u) return;
      let c = u,
          f = -1;

      do {
        if (yield f = o[c], c = c % 3 == 2 ? c - 2 : c + 1, o[c] !== t) return;

        if (c = i[c], -1 === c) {
          const n = e[(r[t] + 1) % e.length];
          return void (n !== f && (yield n));
        }
      } while (c !== u);
    }

    find(t, n, e = 0) {
      if ((t = +t) != t || (n = +n) != n) return -1;
      const r = e;
      let i;

      for (; (i = this._step(e, t, n)) >= 0 && i !== e && i !== r;) e = i;

      return i;
    }

    _step(t, n, e) {
      const {
        inedges: r,
        hull: i,
        _hullIndex: o,
        halfedges: a,
        triangles: u,
        points: c
      } = this;
      if (-1 === r[t] || !c.length) return (t + 1) % (c.length >> 1);
      let f = t,
          s = Au(n - c[2 * t], 2) + Au(e - c[2 * t + 1], 2);
      const l = r[t];
      let h = l;

      do {
        let r = u[h];
        const l = Au(n - c[2 * r], 2) + Au(e - c[2 * r + 1], 2);
        if (l < s && (s = l, f = r), h = h % 3 == 2 ? h - 2 : h + 1, u[h] !== t) break;

        if (h = a[h], -1 === h) {
          if (h = i[(o[t] + 1) % i.length], h !== r && Au(n - c[2 * h], 2) + Au(e - c[2 * h + 1], 2) < s) return h;
          break;
        }
      } while (h !== l);

      return f;
    }

    render(t) {
      const n = null == t ? t = new mu() : void 0,
            {
        points: e,
        halfedges: r,
        triangles: i
      } = this;

      for (let n = 0, o = r.length; n < o; ++n) {
        const o = r[n];
        if (o < n) continue;
        const a = 2 * i[n],
              u = 2 * i[o];
        t.moveTo(e[a], e[a + 1]), t.lineTo(e[u], e[u + 1]);
      }

      return this.renderHull(t), n && n.value();
    }

    renderPoints(t, n) {
      void 0 !== n || t && "function" == typeof t.moveTo || (n = t, t = null), n = null == n ? 2 : +n;
      const e = null == t ? t = new mu() : void 0,
            {
        points: r
      } = this;

      for (let e = 0, i = r.length; e < i; e += 2) {
        const i = r[e],
              o = r[e + 1];
        t.moveTo(i + n, o), t.arc(i, o, n, 0, Mu);
      }

      return e && e.value();
    }

    renderHull(t) {
      const n = null == t ? t = new mu() : void 0,
            {
        hull: e,
        points: r
      } = this,
            i = 2 * e[0],
            o = e.length;
      t.moveTo(r[i], r[i + 1]);

      for (let n = 1; n < o; ++n) {
        const i = 2 * e[n];
        t.lineTo(r[i], r[i + 1]);
      }

      return t.closePath(), n && n.value();
    }

    hullPolygon() {
      const t = new xu();
      return this.renderHull(t), t.value();
    }

    renderTriangle(t, n) {
      const e = null == n ? n = new mu() : void 0,
            {
        points: r,
        triangles: i
      } = this,
            o = 2 * i[t *= 3],
            a = 2 * i[t + 1],
            u = 2 * i[t + 2];
      return n.moveTo(r[o], r[o + 1]), n.lineTo(r[a], r[a + 1]), n.lineTo(r[u], r[u + 1]), n.closePath(), e && e.value();
    }

    *trianglePolygons() {
      const {
        triangles: t
      } = this;

      for (let n = 0, e = t.length / 3; n < e; ++n) yield this.trianglePolygon(n);
    }

    trianglePolygon(t) {
      const n = new xu();
      return this.renderTriangle(t, n), n.value();
    }

  }

  var Nu = {},
      Cu = {};

  function Pu(t) {
    return new Function("d", "return {" + t.map(function (t, n) {
      return JSON.stringify(t) + ": d[" + n + '] || ""';
    }).join(",") + "}");
  }

  function zu(t) {
    var n = Object.create(null),
        e = [];
    return t.forEach(function (t) {
      for (var r in t) r in n || e.push(n[r] = r);
    }), e;
  }

  function Du(t, n) {
    var e = t + "",
        r = e.length;
    return r < n ? new Array(n - r + 1).join(0) + e : e;
  }

  function Ru(t) {
    var n = t.getUTCHours(),
        e = t.getUTCMinutes(),
        r = t.getUTCSeconds(),
        i = t.getUTCMilliseconds();
    return isNaN(t) ? "Invalid Date" : function (t) {
      return t < 0 ? "-" + Du(-t, 6) : t > 9999 ? "+" + Du(t, 6) : Du(t, 4);
    }(t.getUTCFullYear()) + "-" + Du(t.getUTCMonth() + 1, 2) + "-" + Du(t.getUTCDate(), 2) + (i ? "T" + Du(n, 2) + ":" + Du(e, 2) + ":" + Du(r, 2) + "." + Du(i, 3) + "Z" : r ? "T" + Du(n, 2) + ":" + Du(e, 2) + ":" + Du(r, 2) + "Z" : e || n ? "T" + Du(n, 2) + ":" + Du(e, 2) + "Z" : "");
  }

  function Fu(t) {
    var n = new RegExp('["' + t + "\n\r]"),
        e = t.charCodeAt(0);

    function r(t, n) {
      var r,
          i = [],
          o = t.length,
          a = 0,
          u = 0,
          c = o <= 0,
          f = !1;

      function s() {
        if (c) return Cu;
        if (f) return f = !1, Nu;
        var n,
            r,
            i = a;

        if (34 === t.charCodeAt(i)) {
          for (; a++ < o && 34 !== t.charCodeAt(a) || 34 === t.charCodeAt(++a););

          return (n = a) >= o ? c = !0 : 10 === (r = t.charCodeAt(a++)) ? f = !0 : 13 === r && (f = !0, 10 === t.charCodeAt(a) && ++a), t.slice(i + 1, n - 1).replace(/""/g, '"');
        }

        for (; a < o;) {
          if (10 === (r = t.charCodeAt(n = a++))) f = !0;else if (13 === r) f = !0, 10 === t.charCodeAt(a) && ++a;else if (r !== e) continue;
          return t.slice(i, n);
        }

        return c = !0, t.slice(i, o);
      }

      for (10 === t.charCodeAt(o - 1) && --o, 13 === t.charCodeAt(o - 1) && --o; (r = s()) !== Cu;) {
        for (var l = []; r !== Nu && r !== Cu;) l.push(r), r = s();

        n && null == (l = n(l, u++)) || i.push(l);
      }

      return i;
    }

    function i(n, e) {
      return n.map(function (n) {
        return e.map(function (t) {
          return a(n[t]);
        }).join(t);
      });
    }

    function o(n) {
      return n.map(a).join(t);
    }

    function a(t) {
      return null == t ? "" : t instanceof Date ? Ru(t) : n.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t;
    }

    return {
      parse: function (t, n) {
        var e,
            i,
            o = r(t, function (t, r) {
          if (e) return e(t, r - 1);
          i = t, e = n ? function (t, n) {
            var e = Pu(t);
            return function (r, i) {
              return n(e(r), i, t);
            };
          }(t, n) : Pu(t);
        });
        return o.columns = i || [], o;
      },
      parseRows: r,
      format: function (n, e) {
        return null == e && (e = zu(n)), [e.map(a).join(t)].concat(i(n, e)).join("\n");
      },
      formatBody: function (t, n) {
        return null == n && (n = zu(t)), i(t, n).join("\n");
      },
      formatRows: function (t) {
        return t.map(o).join("\n");
      },
      formatRow: o,
      formatValue: a
    };
  }

  var qu = Fu(","),
      Iu = qu.parse,
      Ou = qu.parseRows,
      Uu = qu.format,
      Bu = qu.formatBody,
      Yu = qu.formatRows,
      Lu = qu.formatRow,
      ju = qu.formatValue,
      $u = Fu("\t"),
      Hu = $u.parse,
      Xu = $u.parseRows,
      Gu = $u.format,
      Vu = $u.formatBody,
      Wu = $u.formatRows,
      Zu = $u.formatRow,
      Ku = $u.formatValue;
  const Qu = new Date("2019-01-01T00:00").getHours() || new Date("2019-07-01T00:00").getHours();

  function Ju(t) {
    if (!t.ok) throw new Error(t.status + " " + t.statusText);
    return t.blob();
  }

  function tc(t) {
    if (!t.ok) throw new Error(t.status + " " + t.statusText);
    return t.arrayBuffer();
  }

  function nc(t) {
    if (!t.ok) throw new Error(t.status + " " + t.statusText);
    return t.text();
  }

  function ec(t, n) {
    return fetch(t, n).then(nc);
  }

  function rc(t) {
    return function (n, e, r) {
      return 2 === arguments.length && "function" == typeof e && (r = e, e = void 0), ec(n, e).then(function (n) {
        return t(n, r);
      });
    };
  }

  var ic = rc(Iu),
      oc = rc(Hu);

  function ac(t) {
    if (!t.ok) throw new Error(t.status + " " + t.statusText);
    if (204 !== t.status && 205 !== t.status) return t.json();
  }

  function uc(t) {
    return (n, e) => ec(n, e).then(n => new DOMParser().parseFromString(n, t));
  }

  var cc = uc("application/xml"),
      fc = uc("text/html"),
      sc = uc("image/svg+xml");

  function lc(t, n, e, r) {
    if (isNaN(n) || isNaN(e)) return t;
    var i,
        o,
        a,
        u,
        c,
        f,
        s,
        l,
        h,
        d = t._root,
        p = {
      data: r
    },
        g = t._x0,
        y = t._y0,
        v = t._x1,
        _ = t._y1;
    if (!d) return t._root = p, t;

    for (; d.length;) if ((f = n >= (o = (g + v) / 2)) ? g = o : v = o, (s = e >= (a = (y + _) / 2)) ? y = a : _ = a, i = d, !(d = d[l = s << 1 | f])) return i[l] = p, t;

    if (u = +t._x.call(null, d.data), c = +t._y.call(null, d.data), n === u && e === c) return p.next = d, i ? i[l] = p : t._root = p, t;

    do {
      i = i ? i[l] = new Array(4) : t._root = new Array(4), (f = n >= (o = (g + v) / 2)) ? g = o : v = o, (s = e >= (a = (y + _) / 2)) ? y = a : _ = a;
    } while ((l = s << 1 | f) == (h = (c >= a) << 1 | u >= o));

    return i[h] = d, i[l] = p, t;
  }

  function hc(t, n, e, r, i) {
    this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = i;
  }

  function dc(t) {
    return t[0];
  }

  function pc(t) {
    return t[1];
  }

  function gc(t, n, e) {
    var r = new yc(null == n ? dc : n, null == e ? pc : e, NaN, NaN, NaN, NaN);
    return null == t ? r : r.addAll(t);
  }

  function yc(t, n, e, r, i, o) {
    this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this._root = void 0;
  }

  function vc(t) {
    for (var n = {
      data: t.data
    }, e = n; t = t.next;) e = e.next = {
      data: t.data
    };

    return n;
  }

  var _c = gc.prototype = yc.prototype;

  function bc(t) {
    return function () {
      return t;
    };
  }

  function mc(t) {
    return 1e-6 * (t() - .5);
  }

  function xc(t) {
    return t.x + t.vx;
  }

  function wc(t) {
    return t.y + t.vy;
  }

  function Mc(t) {
    return t.index;
  }

  function Ac(t, n) {
    var e = t.get(n);
    if (!e) throw new Error("node not found: " + n);
    return e;
  }

  _c.copy = function () {
    var t,
        n,
        e = new yc(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
        r = this._root;
    if (!r) return e;
    if (!r.length) return e._root = vc(r), e;

    for (t = [{
      source: r,
      target: e._root = new Array(4)
    }]; r = t.pop();) for (var i = 0; i < 4; ++i) (n = r.source[i]) && (n.length ? t.push({
      source: n,
      target: r.target[i] = new Array(4)
    }) : r.target[i] = vc(n));

    return e;
  }, _c.add = function (t) {
    const n = +this._x.call(null, t),
          e = +this._y.call(null, t);
    return lc(this.cover(n, e), n, e, t);
  }, _c.addAll = function (t) {
    var n,
        e,
        r,
        i,
        o = t.length,
        a = new Array(o),
        u = new Array(o),
        c = 1 / 0,
        f = 1 / 0,
        s = -1 / 0,
        l = -1 / 0;

    for (e = 0; e < o; ++e) isNaN(r = +this._x.call(null, n = t[e])) || isNaN(i = +this._y.call(null, n)) || (a[e] = r, u[e] = i, r < c && (c = r), r > s && (s = r), i < f && (f = i), i > l && (l = i));

    if (c > s || f > l) return this;

    for (this.cover(c, f).cover(s, l), e = 0; e < o; ++e) lc(this, a[e], u[e], t[e]);

    return this;
  }, _c.cover = function (t, n) {
    if (isNaN(t = +t) || isNaN(n = +n)) return this;
    var e = this._x0,
        r = this._y0,
        i = this._x1,
        o = this._y1;
    if (isNaN(e)) i = (e = Math.floor(t)) + 1, o = (r = Math.floor(n)) + 1;else {
      for (var a, u, c = i - e || 1, f = this._root; e > t || t >= i || r > n || n >= o;) switch (u = (n < r) << 1 | t < e, (a = new Array(4))[u] = f, f = a, c *= 2, u) {
        case 0:
          i = e + c, o = r + c;
          break;

        case 1:
          e = i - c, o = r + c;
          break;

        case 2:
          i = e + c, r = o - c;
          break;

        case 3:
          e = i - c, r = o - c;
      }

      this._root && this._root.length && (this._root = f);
    }
    return this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this;
  }, _c.data = function () {
    var t = [];
    return this.visit(function (n) {
      if (!n.length) do {
        t.push(n.data);
      } while (n = n.next);
    }), t;
  }, _c.extent = function (t) {
    return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
  }, _c.find = function (t, n, e) {
    var r,
        i,
        o,
        a,
        u,
        c,
        f,
        s = this._x0,
        l = this._y0,
        h = this._x1,
        d = this._y1,
        p = [],
        g = this._root;

    for (g && p.push(new hc(g, s, l, h, d)), null == e ? e = 1 / 0 : (s = t - e, l = n - e, h = t + e, d = n + e, e *= e); c = p.pop();) if (!(!(g = c.node) || (i = c.x0) > h || (o = c.y0) > d || (a = c.x1) < s || (u = c.y1) < l)) if (g.length) {
      var y = (i + a) / 2,
          v = (o + u) / 2;
      p.push(new hc(g[3], y, v, a, u), new hc(g[2], i, v, y, u), new hc(g[1], y, o, a, v), new hc(g[0], i, o, y, v)), (f = (n >= v) << 1 | t >= y) && (c = p[p.length - 1], p[p.length - 1] = p[p.length - 1 - f], p[p.length - 1 - f] = c);
    } else {
      var _ = t - +this._x.call(null, g.data),
          b = n - +this._y.call(null, g.data),
          m = _ * _ + b * b;

      if (m < e) {
        var x = Math.sqrt(e = m);
        s = t - x, l = n - x, h = t + x, d = n + x, r = g.data;
      }
    }

    return r;
  }, _c.remove = function (t) {
    if (isNaN(o = +this._x.call(null, t)) || isNaN(a = +this._y.call(null, t))) return this;
    var n,
        e,
        r,
        i,
        o,
        a,
        u,
        c,
        f,
        s,
        l,
        h,
        d = this._root,
        p = this._x0,
        g = this._y0,
        y = this._x1,
        v = this._y1;
    if (!d) return this;
    if (d.length) for (;;) {
      if ((f = o >= (u = (p + y) / 2)) ? p = u : y = u, (s = a >= (c = (g + v) / 2)) ? g = c : v = c, n = d, !(d = d[l = s << 1 | f])) return this;
      if (!d.length) break;
      (n[l + 1 & 3] || n[l + 2 & 3] || n[l + 3 & 3]) && (e = n, h = l);
    }

    for (; d.data !== t;) if (r = d, !(d = d.next)) return this;

    return (i = d.next) && delete d.next, r ? (i ? r.next = i : delete r.next, this) : n ? (i ? n[l] = i : delete n[l], (d = n[0] || n[1] || n[2] || n[3]) && d === (n[3] || n[2] || n[1] || n[0]) && !d.length && (e ? e[h] = d : this._root = d), this) : (this._root = i, this);
  }, _c.removeAll = function (t) {
    for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]);

    return this;
  }, _c.root = function () {
    return this._root;
  }, _c.size = function () {
    var t = 0;
    return this.visit(function (n) {
      if (!n.length) do {
        ++t;
      } while (n = n.next);
    }), t;
  }, _c.visit = function (t) {
    var n,
        e,
        r,
        i,
        o,
        a,
        u = [],
        c = this._root;

    for (c && u.push(new hc(c, this._x0, this._y0, this._x1, this._y1)); n = u.pop();) if (!t(c = n.node, r = n.x0, i = n.y0, o = n.x1, a = n.y1) && c.length) {
      var f = (r + o) / 2,
          s = (i + a) / 2;
      (e = c[3]) && u.push(new hc(e, f, s, o, a)), (e = c[2]) && u.push(new hc(e, r, s, f, a)), (e = c[1]) && u.push(new hc(e, f, i, o, s)), (e = c[0]) && u.push(new hc(e, r, i, f, s));
    }

    return this;
  }, _c.visitAfter = function (t) {
    var n,
        e = [],
        r = [];

    for (this._root && e.push(new hc(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) {
      var i = n.node;

      if (i.length) {
        var o,
            a = n.x0,
            u = n.y0,
            c = n.x1,
            f = n.y1,
            s = (a + c) / 2,
            l = (u + f) / 2;
        (o = i[0]) && e.push(new hc(o, a, u, s, l)), (o = i[1]) && e.push(new hc(o, s, u, c, l)), (o = i[2]) && e.push(new hc(o, a, l, s, f)), (o = i[3]) && e.push(new hc(o, s, l, c, f));
      }

      r.push(n);
    }

    for (; n = r.pop();) t(n.node, n.x0, n.y0, n.x1, n.y1);

    return this;
  }, _c.x = function (t) {
    return arguments.length ? (this._x = t, this) : this._x;
  }, _c.y = function (t) {
    return arguments.length ? (this._y = t, this) : this._y;
  };
  const Tc = 4294967296;

  function Sc(t) {
    return t.x;
  }

  function Ec(t) {
    return t.y;
  }

  var kc = Math.PI * (3 - Math.sqrt(5));

  function Nc(t, n) {
    if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
    var e,
        r = t.slice(0, e);
    return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)];
  }

  function Cc(t) {
    return (t = Nc(Math.abs(t))) ? t[1] : NaN;
  }

  var Pc,
      zc = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

  function Dc(t) {
    if (!(n = zc.exec(t))) throw new Error("invalid format: " + t);
    var n;
    return new Rc({
      fill: n[1],
      align: n[2],
      sign: n[3],
      symbol: n[4],
      zero: n[5],
      width: n[6],
      comma: n[7],
      precision: n[8] && n[8].slice(1),
      trim: n[9],
      type: n[10]
    });
  }

  function Rc(t) {
    this.fill = void 0 === t.fill ? " " : t.fill + "", this.align = void 0 === t.align ? ">" : t.align + "", this.sign = void 0 === t.sign ? "-" : t.sign + "", this.symbol = void 0 === t.symbol ? "" : t.symbol + "", this.zero = !!t.zero, this.width = void 0 === t.width ? void 0 : +t.width, this.comma = !!t.comma, this.precision = void 0 === t.precision ? void 0 : +t.precision, this.trim = !!t.trim, this.type = void 0 === t.type ? "" : t.type + "";
  }

  function Fc(t, n) {
    var e = Nc(t, n);
    if (!e) return t + "";
    var r = e[0],
        i = e[1];
    return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
  }

  Dc.prototype = Rc.prototype, Rc.prototype.toString = function () {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type;
  };
  var qc = {
    "%": (t, n) => (100 * t).toFixed(n),
    b: t => Math.round(t).toString(2),
    c: t => t + "",
    d: function (t) {
      return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
    },
    e: (t, n) => t.toExponential(n),
    f: (t, n) => t.toFixed(n),
    g: (t, n) => t.toPrecision(n),
    o: t => Math.round(t).toString(8),
    p: (t, n) => Fc(100 * t, n),
    r: Fc,
    s: function (t, n) {
      var e = Nc(t, n);
      if (!e) return t + "";
      var r = e[0],
          i = e[1],
          o = i - (Pc = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
          a = r.length;
      return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + Nc(t, Math.max(0, n + o - 1))[0];
    },
    X: t => Math.round(t).toString(16).toUpperCase(),
    x: t => Math.round(t).toString(16)
  };

  function Ic(t) {
    return t;
  }

  var Oc,
      Uc = Array.prototype.map,
      Bc = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

  function Yc(t) {
    var n,
        e,
        r = void 0 === t.grouping || void 0 === t.thousands ? Ic : (n = Uc.call(t.grouping, Number), e = t.thousands + "", function (t, r) {
      for (var i = t.length, o = [], a = 0, u = n[0], c = 0; i > 0 && u > 0 && (c + u + 1 > r && (u = Math.max(1, r - c)), o.push(t.substring(i -= u, i + u)), !((c += u + 1) > r));) u = n[a = (a + 1) % n.length];

      return o.reverse().join(e);
    }),
        i = void 0 === t.currency ? "" : t.currency[0] + "",
        o = void 0 === t.currency ? "" : t.currency[1] + "",
        a = void 0 === t.decimal ? "." : t.decimal + "",
        u = void 0 === t.numerals ? Ic : function (t) {
      return function (n) {
        return n.replace(/[0-9]/g, function (n) {
          return t[+n];
        });
      };
    }(Uc.call(t.numerals, String)),
        c = void 0 === t.percent ? "%" : t.percent + "",
        f = void 0 === t.minus ? "−" : t.minus + "",
        s = void 0 === t.nan ? "NaN" : t.nan + "";

    function l(t) {
      var n = (t = Dc(t)).fill,
          e = t.align,
          l = t.sign,
          h = t.symbol,
          d = t.zero,
          p = t.width,
          g = t.comma,
          y = t.precision,
          v = t.trim,
          _ = t.type;
      "n" === _ ? (g = !0, _ = "g") : qc[_] || (void 0 === y && (y = 12), v = !0, _ = "g"), (d || "0" === n && "=" === e) && (d = !0, n = "0", e = "=");
      var b = "$" === h ? i : "#" === h && /[boxX]/.test(_) ? "0" + _.toLowerCase() : "",
          m = "$" === h ? o : /[%p]/.test(_) ? c : "",
          x = qc[_],
          w = /[defgprs%]/.test(_);

      function M(t) {
        var i,
            o,
            c,
            h = b,
            M = m;
        if ("c" === _) M = x(t) + M, t = "";else {
          var A = (t = +t) < 0 || 1 / t < 0;
          if (t = isNaN(t) ? s : x(Math.abs(t), y), v && (t = function (t) {
            t: for (var n, e = t.length, r = 1, i = -1; r < e; ++r) switch (t[r]) {
              case ".":
                i = n = r;
                break;

              case "0":
                0 === i && (i = r), n = r;
                break;

              default:
                if (!+t[r]) break t;
                i > 0 && (i = 0);
            }

            return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t;
          }(t)), A && 0 == +t && "+" !== l && (A = !1), h = (A ? "(" === l ? l : f : "-" === l || "(" === l ? "" : l) + h, M = ("s" === _ ? Bc[8 + Pc / 3] : "") + M + (A && "(" === l ? ")" : ""), w) for (i = -1, o = t.length; ++i < o;) if (48 > (c = t.charCodeAt(i)) || c > 57) {
            M = (46 === c ? a + t.slice(i + 1) : t.slice(i)) + M, t = t.slice(0, i);
            break;
          }
        }
        g && !d && (t = r(t, 1 / 0));
        var T = h.length + t.length + M.length,
            S = T < p ? new Array(p - T + 1).join(n) : "";

        switch (g && d && (t = r(S + t, S.length ? p - M.length : 1 / 0), S = ""), e) {
          case "<":
            t = h + t + M + S;
            break;

          case "=":
            t = h + S + t + M;
            break;

          case "^":
            t = S.slice(0, T = S.length >> 1) + h + t + M + S.slice(T);
            break;

          default:
            t = S + h + t + M;
        }

        return u(t);
      }

      return y = void 0 === y ? 6 : /[gprs]/.test(_) ? Math.max(1, Math.min(21, y)) : Math.max(0, Math.min(20, y)), M.toString = function () {
        return t + "";
      }, M;
    }

    return {
      format: l,
      formatPrefix: function (t, n) {
        var e = l(((t = Dc(t)).type = "f", t)),
            r = 3 * Math.max(-8, Math.min(8, Math.floor(Cc(n) / 3))),
            i = Math.pow(10, -r),
            o = Bc[8 + r / 3];
        return function (t) {
          return e(i * t) + o;
        };
      }
    };
  }

  function Lc(n) {
    return Oc = Yc(n), t.format = Oc.format, t.formatPrefix = Oc.formatPrefix, Oc;
  }

  function jc(t) {
    return Math.max(0, -Cc(Math.abs(t)));
  }

  function $c(t, n) {
    return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Cc(n) / 3))) - Cc(Math.abs(t)));
  }

  function Hc(t, n) {
    return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Cc(n) - Cc(t)) + 1;
  }

  t.format = void 0, t.formatPrefix = void 0, Lc({
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
  });

  var Xc = 1e-6,
      Gc = 1e-12,
      Vc = Math.PI,
      Wc = Vc / 2,
      Zc = Vc / 4,
      Kc = 2 * Vc,
      Qc = 180 / Vc,
      Jc = Vc / 180,
      tf = Math.abs,
      nf = Math.atan,
      ef = Math.atan2,
      rf = Math.cos,
      of = Math.ceil,
      af = Math.exp,
      uf = Math.hypot,
      cf = Math.log,
      ff = Math.pow,
      sf = Math.sin,
      lf = Math.sign || function (t) {
    return t > 0 ? 1 : t < 0 ? -1 : 0;
  },
      hf = Math.sqrt,
      df = Math.tan;

  function pf(t) {
    return t > 1 ? 0 : t < -1 ? Vc : Math.acos(t);
  }

  function gf(t) {
    return t > 1 ? Wc : t < -1 ? -Wc : Math.asin(t);
  }

  function yf(t) {
    return (t = sf(t / 2)) * t;
  }

  function vf() {}

  function _f(t, n) {
    t && mf.hasOwnProperty(t.type) && mf[t.type](t, n);
  }

  var bf = {
    Feature: function (t, n) {
      _f(t.geometry, n);
    },
    FeatureCollection: function (t, n) {
      for (var e = t.features, r = -1, i = e.length; ++r < i;) _f(e[r].geometry, n);
    }
  },
      mf = {
    Sphere: function (t, n) {
      n.sphere();
    },
    Point: function (t, n) {
      t = t.coordinates, n.point(t[0], t[1], t[2]);
    },
    MultiPoint: function (t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) t = e[r], n.point(t[0], t[1], t[2]);
    },
    LineString: function (t, n) {
      xf(t.coordinates, n, 0);
    },
    MultiLineString: function (t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) xf(e[r], n, 0);
    },
    Polygon: function (t, n) {
      wf(t.coordinates, n);
    },
    MultiPolygon: function (t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) wf(e[r], n);
    },
    GeometryCollection: function (t, n) {
      for (var e = t.geometries, r = -1, i = e.length; ++r < i;) _f(e[r], n);
    }
  };

  function xf(t, n, e) {
    var r,
        i = -1,
        o = t.length - e;

    for (n.lineStart(); ++i < o;) r = t[i], n.point(r[0], r[1], r[2]);

    n.lineEnd();
  }

  function wf(t, n) {
    var e = -1,
        r = t.length;

    for (n.polygonStart(); ++e < r;) xf(t[e], n, 1);

    n.polygonEnd();
  }

  function Mf(t, n) {
    t && bf.hasOwnProperty(t.type) ? bf[t.type](t, n) : _f(t, n);
  }

  var Af,
      Tf,
      Sf,
      Ef,
      kf,
      Nf,
      Cf,
      Pf,
      zf,
      Df,
      Rf,
      Ff,
      qf,
      If,
      Of,
      Uf,
      Bf = new T(),
      Yf = new T(),
      Lf = {
    point: vf,
    lineStart: vf,
    lineEnd: vf,
    polygonStart: function () {
      Bf = new T(), Lf.lineStart = jf, Lf.lineEnd = $f;
    },
    polygonEnd: function () {
      var t = +Bf;
      Yf.add(t < 0 ? Kc + t : t), this.lineStart = this.lineEnd = this.point = vf;
    },
    sphere: function () {
      Yf.add(Kc);
    }
  };

  function jf() {
    Lf.point = Hf;
  }

  function $f() {
    Xf(Af, Tf);
  }

  function Hf(t, n) {
    Lf.point = Xf, Af = t, Tf = n, Sf = t *= Jc, Ef = rf(n = (n *= Jc) / 2 + Zc), kf = sf(n);
  }

  function Xf(t, n) {
    var e = (t *= Jc) - Sf,
        r = e >= 0 ? 1 : -1,
        i = r * e,
        o = rf(n = (n *= Jc) / 2 + Zc),
        a = sf(n),
        u = kf * a,
        c = Ef * o + u * rf(i),
        f = u * r * sf(i);
    Bf.add(ef(f, c)), Sf = t, Ef = o, kf = a;
  }

  function Gf(t) {
    return [ef(t[1], t[0]), gf(t[2])];
  }

  function Vf(t) {
    var n = t[0],
        e = t[1],
        r = rf(e);
    return [r * rf(n), r * sf(n), sf(e)];
  }

  function Wf(t, n) {
    return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
  }

  function Zf(t, n) {
    return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]];
  }

  function Kf(t, n) {
    t[0] += n[0], t[1] += n[1], t[2] += n[2];
  }

  function Qf(t, n) {
    return [t[0] * n, t[1] * n, t[2] * n];
  }

  function Jf(t) {
    var n = hf(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
    t[0] /= n, t[1] /= n, t[2] /= n;
  }

  var ts,
      ns,
      es,
      rs,
      is,
      os,
      as,
      us,
      cs,
      fs,
      ss,
      ls,
      hs,
      ds,
      ps,
      gs,
      ys = {
    point: vs,
    lineStart: bs,
    lineEnd: ms,
    polygonStart: function () {
      ys.point = xs, ys.lineStart = ws, ys.lineEnd = Ms, If = new T(), Lf.polygonStart();
    },
    polygonEnd: function () {
      Lf.polygonEnd(), ys.point = vs, ys.lineStart = bs, ys.lineEnd = ms, Bf < 0 ? (Nf = -(Pf = 180), Cf = -(zf = 90)) : If > Xc ? zf = 90 : If < -1e-6 && (Cf = -90), Uf[0] = Nf, Uf[1] = Pf;
    },
    sphere: function () {
      Nf = -(Pf = 180), Cf = -(zf = 90);
    }
  };

  function vs(t, n) {
    Of.push(Uf = [Nf = t, Pf = t]), n < Cf && (Cf = n), n > zf && (zf = n);
  }

  function _s(t, n) {
    var e = Vf([t * Jc, n * Jc]);

    if (qf) {
      var r = Zf(qf, e),
          i = Zf([r[1], -r[0], 0], r);
      Jf(i), i = Gf(i);
      var o,
          a = t - Df,
          u = a > 0 ? 1 : -1,
          c = i[0] * Qc * u,
          f = tf(a) > 180;
      f ^ (u * Df < c && c < u * t) ? (o = i[1] * Qc) > zf && (zf = o) : f ^ (u * Df < (c = (c + 360) % 360 - 180) && c < u * t) ? (o = -i[1] * Qc) < Cf && (Cf = o) : (n < Cf && (Cf = n), n > zf && (zf = n)), f ? t < Df ? As(Nf, t) > As(Nf, Pf) && (Pf = t) : As(t, Pf) > As(Nf, Pf) && (Nf = t) : Pf >= Nf ? (t < Nf && (Nf = t), t > Pf && (Pf = t)) : t > Df ? As(Nf, t) > As(Nf, Pf) && (Pf = t) : As(t, Pf) > As(Nf, Pf) && (Nf = t);
    } else Of.push(Uf = [Nf = t, Pf = t]);

    n < Cf && (Cf = n), n > zf && (zf = n), qf = e, Df = t;
  }

  function bs() {
    ys.point = _s;
  }

  function ms() {
    Uf[0] = Nf, Uf[1] = Pf, ys.point = vs, qf = null;
  }

  function xs(t, n) {
    if (qf) {
      var e = t - Df;
      If.add(tf(e) > 180 ? e + (e > 0 ? 360 : -360) : e);
    } else Rf = t, Ff = n;

    Lf.point(t, n), _s(t, n);
  }

  function ws() {
    Lf.lineStart();
  }

  function Ms() {
    xs(Rf, Ff), Lf.lineEnd(), tf(If) > Xc && (Nf = -(Pf = 180)), Uf[0] = Nf, Uf[1] = Pf, qf = null;
  }

  function As(t, n) {
    return (n -= t) < 0 ? n + 360 : n;
  }

  function Ts(t, n) {
    return t[0] - n[0];
  }

  function Ss(t, n) {
    return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n;
  }

  var Es = {
    sphere: vf,
    point: ks,
    lineStart: Cs,
    lineEnd: Ds,
    polygonStart: function () {
      Es.lineStart = Rs, Es.lineEnd = Fs;
    },
    polygonEnd: function () {
      Es.lineStart = Cs, Es.lineEnd = Ds;
    }
  };

  function ks(t, n) {
    t *= Jc;
    var e = rf(n *= Jc);
    Ns(e * rf(t), e * sf(t), sf(n));
  }

  function Ns(t, n, e) {
    ++ts, es += (t - es) / ts, rs += (n - rs) / ts, is += (e - is) / ts;
  }

  function Cs() {
    Es.point = Ps;
  }

  function Ps(t, n) {
    t *= Jc;
    var e = rf(n *= Jc);
    ds = e * rf(t), ps = e * sf(t), gs = sf(n), Es.point = zs, Ns(ds, ps, gs);
  }

  function zs(t, n) {
    t *= Jc;
    var e = rf(n *= Jc),
        r = e * rf(t),
        i = e * sf(t),
        o = sf(n),
        a = ef(hf((a = ps * o - gs * i) * a + (a = gs * r - ds * o) * a + (a = ds * i - ps * r) * a), ds * r + ps * i + gs * o);
    ns += a, os += a * (ds + (ds = r)), as += a * (ps + (ps = i)), us += a * (gs + (gs = o)), Ns(ds, ps, gs);
  }

  function Ds() {
    Es.point = ks;
  }

  function Rs() {
    Es.point = qs;
  }

  function Fs() {
    Is(ls, hs), Es.point = ks;
  }

  function qs(t, n) {
    ls = t, hs = n, t *= Jc, n *= Jc, Es.point = Is;
    var e = rf(n);
    ds = e * rf(t), ps = e * sf(t), gs = sf(n), Ns(ds, ps, gs);
  }

  function Is(t, n) {
    t *= Jc;
    var e = rf(n *= Jc),
        r = e * rf(t),
        i = e * sf(t),
        o = sf(n),
        a = ps * o - gs * i,
        u = gs * r - ds * o,
        c = ds * i - ps * r,
        f = uf(a, u, c),
        s = gf(f),
        l = f && -s / f;
    cs.add(l * a), fs.add(l * u), ss.add(l * c), ns += s, os += s * (ds + (ds = r)), as += s * (ps + (ps = i)), us += s * (gs + (gs = o)), Ns(ds, ps, gs);
  }

  function Os(t) {
    return function () {
      return t;
    };
  }

  function Us(t, n) {
    function e(e, r) {
      return e = t(e, r), n(e[0], e[1]);
    }

    return t.invert && n.invert && (e.invert = function (e, r) {
      return (e = n.invert(e, r)) && t.invert(e[0], e[1]);
    }), e;
  }

  function Bs(t, n) {
    return [tf(t) > Vc ? t + Math.round(-t / Kc) * Kc : t, n];
  }

  function Ys(t, n, e) {
    return (t %= Kc) ? n || e ? Us(js(t), $s(n, e)) : js(t) : n || e ? $s(n, e) : Bs;
  }

  function Ls(t) {
    return function (n, e) {
      return [(n += t) > Vc ? n - Kc : n < -Vc ? n + Kc : n, e];
    };
  }

  function js(t) {
    var n = Ls(t);
    return n.invert = Ls(-t), n;
  }

  function $s(t, n) {
    var e = rf(t),
        r = sf(t),
        i = rf(n),
        o = sf(n);

    function a(t, n) {
      var a = rf(n),
          u = rf(t) * a,
          c = sf(t) * a,
          f = sf(n),
          s = f * e + u * r;
      return [ef(c * i - s * o, u * e - f * r), gf(s * i + c * o)];
    }

    return a.invert = function (t, n) {
      var a = rf(n),
          u = rf(t) * a,
          c = sf(t) * a,
          f = sf(n),
          s = f * i - c * o;
      return [ef(c * i + f * o, u * e + s * r), gf(s * e - u * r)];
    }, a;
  }

  function Hs(t) {
    function n(n) {
      return (n = t(n[0] * Jc, n[1] * Jc))[0] *= Qc, n[1] *= Qc, n;
    }

    return t = Ys(t[0] * Jc, t[1] * Jc, t.length > 2 ? t[2] * Jc : 0), n.invert = function (n) {
      return (n = t.invert(n[0] * Jc, n[1] * Jc))[0] *= Qc, n[1] *= Qc, n;
    }, n;
  }

  function Xs(t, n, e, r, i, o) {
    if (e) {
      var a = rf(n),
          u = sf(n),
          c = r * e;
      null == i ? (i = n + r * Kc, o = n - c / 2) : (i = Gs(a, i), o = Gs(a, o), (r > 0 ? i < o : i > o) && (i += r * Kc));

      for (var f, s = i; r > 0 ? s > o : s < o; s -= c) f = Gf([a, -u * rf(s), -u * sf(s)]), t.point(f[0], f[1]);
    }
  }

  function Gs(t, n) {
    (n = Vf(n))[0] -= t, Jf(n);
    var e = pf(-n[1]);
    return ((-n[2] < 0 ? -e : e) + Kc - Xc) % Kc;
  }

  function Vs() {
    var t,
        n = [];
    return {
      point: function (n, e, r) {
        t.push([n, e, r]);
      },
      lineStart: function () {
        n.push(t = []);
      },
      lineEnd: vf,
      rejoin: function () {
        n.length > 1 && n.push(n.pop().concat(n.shift()));
      },
      result: function () {
        var e = n;
        return n = [], t = null, e;
      }
    };
  }

  function Ws(t, n) {
    return tf(t[0] - n[0]) < Xc && tf(t[1] - n[1]) < Xc;
  }

  function Zs(t, n, e, r) {
    this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null;
  }

  function Ks(t, n, e, r, i) {
    var o,
        a,
        u = [],
        c = [];

    if (t.forEach(function (t) {
      if (!((n = t.length - 1) <= 0)) {
        var n,
            e,
            r = t[0],
            a = t[n];

        if (Ws(r, a)) {
          if (!r[2] && !a[2]) {
            for (i.lineStart(), o = 0; o < n; ++o) i.point((r = t[o])[0], r[1]);

            return void i.lineEnd();
          }

          a[0] += 2e-6;
        }

        u.push(e = new Zs(r, t, null, !0)), c.push(e.o = new Zs(r, null, e, !1)), u.push(e = new Zs(a, t, null, !1)), c.push(e.o = new Zs(a, null, e, !0));
      }
    }), u.length) {
      for (c.sort(n), Qs(u), Qs(c), o = 0, a = c.length; o < a; ++o) c[o].e = e = !e;

      for (var f, s, l = u[0];;) {
        for (var h = l, d = !0; h.v;) if ((h = h.n) === l) return;

        f = h.z, i.lineStart();

        do {
          if (h.v = h.o.v = !0, h.e) {
            if (d) for (o = 0, a = f.length; o < a; ++o) i.point((s = f[o])[0], s[1]);else r(h.x, h.n.x, 1, i);
            h = h.n;
          } else {
            if (d) for (f = h.p.z, o = f.length - 1; o >= 0; --o) i.point((s = f[o])[0], s[1]);else r(h.x, h.p.x, -1, i);
            h = h.p;
          }

          f = (h = h.o).z, d = !d;
        } while (!h.v);

        i.lineEnd();
      }
    }
  }

  function Qs(t) {
    if (n = t.length) {
      for (var n, e, r = 0, i = t[0]; ++r < n;) i.n = e = t[r], e.p = i, i = e;

      i.n = e = t[0], e.p = i;
    }
  }

  function Js(t) {
    return tf(t[0]) <= Vc ? t[0] : lf(t[0]) * ((tf(t[0]) + Vc) % Kc - Vc);
  }

  function tl(t, n) {
    var e = Js(n),
        r = n[1],
        i = sf(r),
        o = [sf(e), -rf(e), 0],
        a = 0,
        u = 0,
        c = new T();
    1 === i ? r = Wc + Xc : -1 === i && (r = -Wc - Xc);

    for (var f = 0, s = t.length; f < s; ++f) if (h = (l = t[f]).length) for (var l, h, d = l[h - 1], p = Js(d), g = d[1] / 2 + Zc, y = sf(g), v = rf(g), _ = 0; _ < h; ++_, p = m, y = w, v = M, d = b) {
      var b = l[_],
          m = Js(b),
          x = b[1] / 2 + Zc,
          w = sf(x),
          M = rf(x),
          A = m - p,
          S = A >= 0 ? 1 : -1,
          E = S * A,
          k = E > Vc,
          N = y * w;

      if (c.add(ef(N * S * sf(E), v * M + N * rf(E))), a += k ? A + S * Kc : A, k ^ p >= e ^ m >= e) {
        var C = Zf(Vf(d), Vf(b));
        Jf(C);
        var P = Zf(o, C);
        Jf(P);
        var z = (k ^ A >= 0 ? -1 : 1) * gf(P[2]);
        (r > z || r === z && (C[0] || C[1])) && (u += k ^ A >= 0 ? 1 : -1);
      }
    }

    return (a < -1e-6 || a < Xc && c < -1e-12) ^ 1 & u;
  }

  function nl(t, n, e, r) {
    return function (i) {
      var o,
          a,
          u,
          c = n(i),
          f = Vs(),
          s = n(f),
          l = !1,
          h = {
        point: d,
        lineStart: g,
        lineEnd: y,
        polygonStart: function () {
          h.point = v, h.lineStart = _, h.lineEnd = b, a = [], o = [];
        },
        polygonEnd: function () {
          h.point = d, h.lineStart = g, h.lineEnd = y, a = ft(a);
          var t = tl(o, r);
          a.length ? (l || (i.polygonStart(), l = !0), Ks(a, rl, t, e, i)) : t && (l || (i.polygonStart(), l = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()), l && (i.polygonEnd(), l = !1), a = o = null;
        },
        sphere: function () {
          i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd();
        }
      };

      function d(n, e) {
        t(n, e) && i.point(n, e);
      }

      function p(t, n) {
        c.point(t, n);
      }

      function g() {
        h.point = p, c.lineStart();
      }

      function y() {
        h.point = d, c.lineEnd();
      }

      function v(t, n) {
        u.push([t, n]), s.point(t, n);
      }

      function _() {
        s.lineStart(), u = [];
      }

      function b() {
        v(u[0][0], u[0][1]), s.lineEnd();
        var t,
            n,
            e,
            r,
            c = s.clean(),
            h = f.result(),
            d = h.length;
        if (u.pop(), o.push(u), u = null, d) if (1 & c) {
          if ((n = (e = h[0]).length - 1) > 0) {
            for (l || (i.polygonStart(), l = !0), i.lineStart(), t = 0; t < n; ++t) i.point((r = e[t])[0], r[1]);

            i.lineEnd();
          }
        } else d > 1 && 2 & c && h.push(h.pop().concat(h.shift())), a.push(h.filter(el));
      }

      return h;
    };
  }

  function el(t) {
    return t.length > 1;
  }

  function rl(t, n) {
    return ((t = t.x)[0] < 0 ? t[1] - Wc - Xc : Wc - t[1]) - ((n = n.x)[0] < 0 ? n[1] - Wc - Xc : Wc - n[1]);
  }

  Bs.invert = Bs;
  var il = nl(function () {
    return !0;
  }, function (t) {
    var n,
        e = NaN,
        r = NaN,
        i = NaN;
    return {
      lineStart: function () {
        t.lineStart(), n = 1;
      },
      point: function (o, a) {
        var u = o > 0 ? Vc : -Vc,
            c = tf(o - e);
        tf(c - Vc) < Xc ? (t.point(e, r = (r + a) / 2 > 0 ? Wc : -Wc), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(u, r), t.point(o, r), n = 0) : i !== u && c >= Vc && (tf(e - i) < Xc && (e -= i * Xc), tf(o - u) < Xc && (o -= u * Xc), r = function (t, n, e, r) {
          var i,
              o,
              a = sf(t - e);
          return tf(a) > Xc ? nf((sf(n) * (o = rf(r)) * sf(e) - sf(r) * (i = rf(n)) * sf(t)) / (i * o * a)) : (n + r) / 2;
        }(e, r, o, a), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(u, r), n = 0), t.point(e = o, r = a), i = u;
      },
      lineEnd: function () {
        t.lineEnd(), e = r = NaN;
      },
      clean: function () {
        return 2 - n;
      }
    };
  }, function (t, n, e, r) {
    var i;
    if (null == t) i = e * Wc, r.point(-Vc, i), r.point(0, i), r.point(Vc, i), r.point(Vc, 0), r.point(Vc, -i), r.point(0, -i), r.point(-Vc, -i), r.point(-Vc, 0), r.point(-Vc, i);else if (tf(t[0] - n[0]) > Xc) {
      var o = t[0] < n[0] ? Vc : -Vc;
      i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i);
    } else r.point(n[0], n[1]);
  }, [-Vc, -Wc]);

  function ol(t) {
    var n = rf(t),
        e = 6 * Jc,
        r = n > 0,
        i = tf(n) > Xc;

    function o(t, e) {
      return rf(t) * rf(e) > n;
    }

    function a(t, e, r) {
      var i = [1, 0, 0],
          o = Zf(Vf(t), Vf(e)),
          a = Wf(o, o),
          u = o[0],
          c = a - u * u;
      if (!c) return !r && t;
      var f = n * a / c,
          s = -n * u / c,
          l = Zf(i, o),
          h = Qf(i, f);
      Kf(h, Qf(o, s));
      var d = l,
          p = Wf(h, d),
          g = Wf(d, d),
          y = p * p - g * (Wf(h, h) - 1);

      if (!(y < 0)) {
        var v = hf(y),
            _ = Qf(d, (-p - v) / g);

        if (Kf(_, h), _ = Gf(_), !r) return _;
        var b,
            m = t[0],
            x = e[0],
            w = t[1],
            M = e[1];
        x < m && (b = m, m = x, x = b);
        var A = x - m,
            T = tf(A - Vc) < Xc;

        if (!T && M < w && (b = w, w = M, M = b), T || A < Xc ? T ? w + M > 0 ^ _[1] < (tf(_[0] - m) < Xc ? w : M) : w <= _[1] && _[1] <= M : A > Vc ^ (m <= _[0] && _[0] <= x)) {
          var S = Qf(d, (-p + v) / g);
          return Kf(S, h), [_, Gf(S)];
        }
      }
    }

    function u(n, e) {
      var i = r ? t : Vc - t,
          o = 0;
      return n < -i ? o |= 1 : n > i && (o |= 2), e < -i ? o |= 4 : e > i && (o |= 8), o;
    }

    return nl(o, function (t) {
      var n, e, c, f, s;
      return {
        lineStart: function () {
          f = c = !1, s = 1;
        },
        point: function (l, h) {
          var d,
              p = [l, h],
              g = o(l, h),
              y = r ? g ? 0 : u(l, h) : g ? u(l + (l < 0 ? Vc : -Vc), h) : 0;
          if (!n && (f = c = g) && t.lineStart(), g !== c && (!(d = a(n, p)) || Ws(n, d) || Ws(p, d)) && (p[2] = 1), g !== c) s = 0, g ? (t.lineStart(), d = a(p, n), t.point(d[0], d[1])) : (d = a(n, p), t.point(d[0], d[1], 2), t.lineEnd()), n = d;else if (i && n && r ^ g) {
            var v;
            y & e || !(v = a(p, n, !0)) || (s = 0, r ? (t.lineStart(), t.point(v[0][0], v[0][1]), t.point(v[1][0], v[1][1]), t.lineEnd()) : (t.point(v[1][0], v[1][1]), t.lineEnd(), t.lineStart(), t.point(v[0][0], v[0][1], 3)));
          }
          !g || n && Ws(n, p) || t.point(p[0], p[1]), n = p, c = g, e = y;
        },
        lineEnd: function () {
          c && t.lineEnd(), n = null;
        },
        clean: function () {
          return s | (f && c) << 1;
        }
      };
    }, function (n, r, i, o) {
      Xs(o, t, e, i, n, r);
    }, r ? [0, -t] : [-Vc, t - Vc]);
  }

  var al,
      ul,
      cl,
      fl,
      sl = 1e9,
      ll = -sl;

  function hl(t, n, e, r) {
    function i(i, o) {
      return t <= i && i <= e && n <= o && o <= r;
    }

    function o(i, o, u, f) {
      var s = 0,
          l = 0;
      if (null == i || (s = a(i, u)) !== (l = a(o, u)) || c(i, o) < 0 ^ u > 0) do {
        f.point(0 === s || 3 === s ? t : e, s > 1 ? r : n);
      } while ((s = (s + u + 4) % 4) !== l);else f.point(o[0], o[1]);
    }

    function a(r, i) {
      return tf(r[0] - t) < Xc ? i > 0 ? 0 : 3 : tf(r[0] - e) < Xc ? i > 0 ? 2 : 1 : tf(r[1] - n) < Xc ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2;
    }

    function u(t, n) {
      return c(t.x, n.x);
    }

    function c(t, n) {
      var e = a(t, 1),
          r = a(n, 1);
      return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0];
    }

    return function (a) {
      var c,
          f,
          s,
          l,
          h,
          d,
          p,
          g,
          y,
          v,
          _,
          b = a,
          m = Vs(),
          x = {
        point: w,
        lineStart: function () {
          x.point = M, f && f.push(s = []);
          v = !0, y = !1, p = g = NaN;
        },
        lineEnd: function () {
          c && (M(l, h), d && y && m.rejoin(), c.push(m.result()));
          x.point = w, y && b.lineEnd();
        },
        polygonStart: function () {
          b = m, c = [], f = [], _ = !0;
        },
        polygonEnd: function () {
          var n = function () {
            for (var n = 0, e = 0, i = f.length; e < i; ++e) for (var o, a, u = f[e], c = 1, s = u.length, l = u[0], h = l[0], d = l[1]; c < s; ++c) o = h, a = d, h = (l = u[c])[0], d = l[1], a <= r ? d > r && (h - o) * (r - a) > (d - a) * (t - o) && ++n : d <= r && (h - o) * (r - a) < (d - a) * (t - o) && --n;

            return n;
          }(),
              e = _ && n,
              i = (c = ft(c)).length;

          (e || i) && (a.polygonStart(), e && (a.lineStart(), o(null, null, 1, a), a.lineEnd()), i && Ks(c, u, n, o, a), a.polygonEnd());
          b = a, c = f = s = null;
        }
      };

      function w(t, n) {
        i(t, n) && b.point(t, n);
      }

      function M(o, a) {
        var u = i(o, a);
        if (f && s.push([o, a]), v) l = o, h = a, d = u, v = !1, u && (b.lineStart(), b.point(o, a));else if (u && y) b.point(o, a);else {
          var c = [p = Math.max(ll, Math.min(sl, p)), g = Math.max(ll, Math.min(sl, g))],
              m = [o = Math.max(ll, Math.min(sl, o)), a = Math.max(ll, Math.min(sl, a))];
          !function (t, n, e, r, i, o) {
            var a,
                u = t[0],
                c = t[1],
                f = 0,
                s = 1,
                l = n[0] - u,
                h = n[1] - c;

            if (a = e - u, l || !(a > 0)) {
              if (a /= l, l < 0) {
                if (a < f) return;
                a < s && (s = a);
              } else if (l > 0) {
                if (a > s) return;
                a > f && (f = a);
              }

              if (a = i - u, l || !(a < 0)) {
                if (a /= l, l < 0) {
                  if (a > s) return;
                  a > f && (f = a);
                } else if (l > 0) {
                  if (a < f) return;
                  a < s && (s = a);
                }

                if (a = r - c, h || !(a > 0)) {
                  if (a /= h, h < 0) {
                    if (a < f) return;
                    a < s && (s = a);
                  } else if (h > 0) {
                    if (a > s) return;
                    a > f && (f = a);
                  }

                  if (a = o - c, h || !(a < 0)) {
                    if (a /= h, h < 0) {
                      if (a > s) return;
                      a > f && (f = a);
                    } else if (h > 0) {
                      if (a < f) return;
                      a < s && (s = a);
                    }

                    return f > 0 && (t[0] = u + f * l, t[1] = c + f * h), s < 1 && (n[0] = u + s * l, n[1] = c + s * h), !0;
                  }
                }
              }
            }
          }(c, m, t, n, e, r) ? u && (b.lineStart(), b.point(o, a), _ = !1) : (y || (b.lineStart(), b.point(c[0], c[1])), b.point(m[0], m[1]), u || b.lineEnd(), _ = !1);
        }
        p = o, g = a, y = u;
      }

      return x;
    };
  }

  var dl = {
    sphere: vf,
    point: vf,
    lineStart: function () {
      dl.point = gl, dl.lineEnd = pl;
    },
    lineEnd: vf,
    polygonStart: vf,
    polygonEnd: vf
  };

  function pl() {
    dl.point = dl.lineEnd = vf;
  }

  function gl(t, n) {
    ul = t *= Jc, cl = sf(n *= Jc), fl = rf(n), dl.point = yl;
  }

  function yl(t, n) {
    t *= Jc;
    var e = sf(n *= Jc),
        r = rf(n),
        i = tf(t - ul),
        o = rf(i),
        a = r * sf(i),
        u = fl * e - cl * r * o,
        c = cl * e + fl * r * o;
    al.add(ef(hf(a * a + u * u), c)), ul = t, cl = e, fl = r;
  }

  function vl(t) {
    return al = new T(), Mf(t, dl), +al;
  }

  var _l = [null, null],
      bl = {
    type: "LineString",
    coordinates: _l
  };

  function ml(t, n) {
    return _l[0] = t, _l[1] = n, vl(bl);
  }

  var xl = {
    Feature: function (t, n) {
      return Ml(t.geometry, n);
    },
    FeatureCollection: function (t, n) {
      for (var e = t.features, r = -1, i = e.length; ++r < i;) if (Ml(e[r].geometry, n)) return !0;

      return !1;
    }
  },
      wl = {
    Sphere: function () {
      return !0;
    },
    Point: function (t, n) {
      return Al(t.coordinates, n);
    },
    MultiPoint: function (t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) if (Al(e[r], n)) return !0;

      return !1;
    },
    LineString: function (t, n) {
      return Tl(t.coordinates, n);
    },
    MultiLineString: function (t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) if (Tl(e[r], n)) return !0;

      return !1;
    },
    Polygon: function (t, n) {
      return Sl(t.coordinates, n);
    },
    MultiPolygon: function (t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) if (Sl(e[r], n)) return !0;

      return !1;
    },
    GeometryCollection: function (t, n) {
      for (var e = t.geometries, r = -1, i = e.length; ++r < i;) if (Ml(e[r], n)) return !0;

      return !1;
    }
  };

  function Ml(t, n) {
    return !(!t || !wl.hasOwnProperty(t.type)) && wl[t.type](t, n);
  }

  function Al(t, n) {
    return 0 === ml(t, n);
  }

  function Tl(t, n) {
    for (var e, r, i, o = 0, a = t.length; o < a; o++) {
      if (0 === (r = ml(t[o], n))) return !0;
      if (o > 0 && (i = ml(t[o], t[o - 1])) > 0 && e <= i && r <= i && (e + r - i) * (1 - Math.pow((e - r) / i, 2)) < Gc * i) return !0;
      e = r;
    }

    return !1;
  }

  function Sl(t, n) {
    return !!tl(t.map(El), kl(n));
  }

  function El(t) {
    return (t = t.map(kl)).pop(), t;
  }

  function kl(t) {
    return [t[0] * Jc, t[1] * Jc];
  }

  function Nl(t, n, e) {
    var r = lt(t, n - Xc, e).concat(n);
    return function (t) {
      return r.map(function (n) {
        return [t, n];
      });
    };
  }

  function Cl(t, n, e) {
    var r = lt(t, n - Xc, e).concat(n);
    return function (t) {
      return r.map(function (n) {
        return [n, t];
      });
    };
  }

  function Pl() {
    var t,
        n,
        e,
        r,
        i,
        o,
        a,
        u,
        c,
        f,
        s,
        l,
        h = 10,
        d = h,
        p = 90,
        g = 360,
        y = 2.5;

    function v() {
      return {
        type: "MultiLineString",
        coordinates: _()
      };
    }

    function _() {
      return lt(of(r / p) * p, e, p).map(s).concat(lt(of(u / g) * g, a, g).map(l)).concat(lt(of(n / h) * h, t, h).filter(function (t) {
        return tf(t % p) > Xc;
      }).map(c)).concat(lt(of(o / d) * d, i, d).filter(function (t) {
        return tf(t % g) > Xc;
      }).map(f));
    }

    return v.lines = function () {
      return _().map(function (t) {
        return {
          type: "LineString",
          coordinates: t
        };
      });
    }, v.outline = function () {
      return {
        type: "Polygon",
        coordinates: [s(r).concat(l(a).slice(1), s(e).reverse().slice(1), l(u).reverse().slice(1))]
      };
    }, v.extent = function (t) {
      return arguments.length ? v.extentMajor(t).extentMinor(t) : v.extentMinor();
    }, v.extentMajor = function (t) {
      return arguments.length ? (r = +t[0][0], e = +t[1][0], u = +t[0][1], a = +t[1][1], r > e && (t = r, r = e, e = t), u > a && (t = u, u = a, a = t), v.precision(y)) : [[r, u], [e, a]];
    }, v.extentMinor = function (e) {
      return arguments.length ? (n = +e[0][0], t = +e[1][0], o = +e[0][1], i = +e[1][1], n > t && (e = n, n = t, t = e), o > i && (e = o, o = i, i = e), v.precision(y)) : [[n, o], [t, i]];
    }, v.step = function (t) {
      return arguments.length ? v.stepMajor(t).stepMinor(t) : v.stepMinor();
    }, v.stepMajor = function (t) {
      return arguments.length ? (p = +t[0], g = +t[1], v) : [p, g];
    }, v.stepMinor = function (t) {
      return arguments.length ? (h = +t[0], d = +t[1], v) : [h, d];
    }, v.precision = function (h) {
      return arguments.length ? (y = +h, c = Nl(o, i, 90), f = Cl(n, t, y), s = Nl(u, a, 90), l = Cl(r, e, y), v) : y;
    }, v.extentMajor([[-180, -89.999999], [180, 89.999999]]).extentMinor([[-180, -80.000001], [180, 80.000001]]);
  }

  var zl,
      Dl,
      Rl,
      Fl,
      ql = t => t,
      Il = new T(),
      Ol = new T(),
      Ul = {
    point: vf,
    lineStart: vf,
    lineEnd: vf,
    polygonStart: function () {
      Ul.lineStart = Bl, Ul.lineEnd = jl;
    },
    polygonEnd: function () {
      Ul.lineStart = Ul.lineEnd = Ul.point = vf, Il.add(tf(Ol)), Ol = new T();
    },
    result: function () {
      var t = Il / 2;
      return Il = new T(), t;
    }
  };

  function Bl() {
    Ul.point = Yl;
  }

  function Yl(t, n) {
    Ul.point = Ll, zl = Rl = t, Dl = Fl = n;
  }

  function Ll(t, n) {
    Ol.add(Fl * t - Rl * n), Rl = t, Fl = n;
  }

  function jl() {
    Ll(zl, Dl);
  }

  var $l = Ul,
      Hl = 1 / 0,
      Xl = Hl,
      Gl = -Hl,
      Vl = Gl,
      Wl = {
    point: function (t, n) {
      t < Hl && (Hl = t);
      t > Gl && (Gl = t);
      n < Xl && (Xl = n);
      n > Vl && (Vl = n);
    },
    lineStart: vf,
    lineEnd: vf,
    polygonStart: vf,
    polygonEnd: vf,
    result: function () {
      var t = [[Hl, Xl], [Gl, Vl]];
      return Gl = Vl = -(Xl = Hl = 1 / 0), t;
    }
  };
  var Zl,
      Kl,
      Ql,
      Jl,
      th = Wl,
      nh = 0,
      eh = 0,
      rh = 0,
      ih = 0,
      oh = 0,
      ah = 0,
      uh = 0,
      ch = 0,
      fh = 0,
      sh = {
    point: lh,
    lineStart: hh,
    lineEnd: gh,
    polygonStart: function () {
      sh.lineStart = yh, sh.lineEnd = vh;
    },
    polygonEnd: function () {
      sh.point = lh, sh.lineStart = hh, sh.lineEnd = gh;
    },
    result: function () {
      var t = fh ? [uh / fh, ch / fh] : ah ? [ih / ah, oh / ah] : rh ? [nh / rh, eh / rh] : [NaN, NaN];
      return nh = eh = rh = ih = oh = ah = uh = ch = fh = 0, t;
    }
  };

  function lh(t, n) {
    nh += t, eh += n, ++rh;
  }

  function hh() {
    sh.point = dh;
  }

  function dh(t, n) {
    sh.point = ph, lh(Ql = t, Jl = n);
  }

  function ph(t, n) {
    var e = t - Ql,
        r = n - Jl,
        i = hf(e * e + r * r);
    ih += i * (Ql + t) / 2, oh += i * (Jl + n) / 2, ah += i, lh(Ql = t, Jl = n);
  }

  function gh() {
    sh.point = lh;
  }

  function yh() {
    sh.point = _h;
  }

  function vh() {
    bh(Zl, Kl);
  }

  function _h(t, n) {
    sh.point = bh, lh(Zl = Ql = t, Kl = Jl = n);
  }

  function bh(t, n) {
    var e = t - Ql,
        r = n - Jl,
        i = hf(e * e + r * r);
    ih += i * (Ql + t) / 2, oh += i * (Jl + n) / 2, ah += i, uh += (i = Jl * t - Ql * n) * (Ql + t), ch += i * (Jl + n), fh += 3 * i, lh(Ql = t, Jl = n);
  }

  var mh = sh;

  function xh(t) {
    this._context = t;
  }

  xh.prototype = {
    _radius: 4.5,
    pointRadius: function (t) {
      return this._radius = t, this;
    },
    polygonStart: function () {
      this._line = 0;
    },
    polygonEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._point = 0;
    },
    lineEnd: function () {
      0 === this._line && this._context.closePath(), this._point = NaN;
    },
    point: function (t, n) {
      switch (this._point) {
        case 0:
          this._context.moveTo(t, n), this._point = 1;
          break;

        case 1:
          this._context.lineTo(t, n);

          break;

        default:
          this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, Kc);
      }
    },
    result: vf
  };
  var wh,
      Mh,
      Ah,
      Th,
      Sh,
      Eh = new T(),
      kh = {
    point: vf,
    lineStart: function () {
      kh.point = Nh;
    },
    lineEnd: function () {
      wh && Ch(Mh, Ah), kh.point = vf;
    },
    polygonStart: function () {
      wh = !0;
    },
    polygonEnd: function () {
      wh = null;
    },
    result: function () {
      var t = +Eh;
      return Eh = new T(), t;
    }
  };

  function Nh(t, n) {
    kh.point = Ch, Mh = Th = t, Ah = Sh = n;
  }

  function Ch(t, n) {
    Th -= t, Sh -= n, Eh.add(hf(Th * Th + Sh * Sh)), Th = t, Sh = n;
  }

  var Ph = kh;

  function zh() {
    this._string = [];
  }

  function Dh(t) {
    return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z";
  }

  function Rh(t) {
    return function (n) {
      var e = new Fh();

      for (var r in t) e[r] = t[r];

      return e.stream = n, e;
    };
  }

  function Fh() {}

  function qh(t, n, e) {
    var r = t.clipExtent && t.clipExtent();
    return t.scale(150).translate([0, 0]), null != r && t.clipExtent(null), Mf(e, t.stream(th)), n(th.result()), null != r && t.clipExtent(r), t;
  }

  function Ih(t, n, e) {
    return qh(t, function (e) {
      var r = n[1][0] - n[0][0],
          i = n[1][1] - n[0][1],
          o = Math.min(r / (e[1][0] - e[0][0]), i / (e[1][1] - e[0][1])),
          a = +n[0][0] + (r - o * (e[1][0] + e[0][0])) / 2,
          u = +n[0][1] + (i - o * (e[1][1] + e[0][1])) / 2;
      t.scale(150 * o).translate([a, u]);
    }, e);
  }

  function Oh(t, n, e) {
    return Ih(t, [[0, 0], n], e);
  }

  function Uh(t, n, e) {
    return qh(t, function (e) {
      var r = +n,
          i = r / (e[1][0] - e[0][0]),
          o = (r - i * (e[1][0] + e[0][0])) / 2,
          a = -i * e[0][1];
      t.scale(150 * i).translate([o, a]);
    }, e);
  }

  function Bh(t, n, e) {
    return qh(t, function (e) {
      var r = +n,
          i = r / (e[1][1] - e[0][1]),
          o = -i * e[0][0],
          a = (r - i * (e[1][1] + e[0][1])) / 2;
      t.scale(150 * i).translate([o, a]);
    }, e);
  }

  zh.prototype = {
    _radius: 4.5,
    _circle: Dh(4.5),
    pointRadius: function (t) {
      return (t = +t) !== this._radius && (this._radius = t, this._circle = null), this;
    },
    polygonStart: function () {
      this._line = 0;
    },
    polygonEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._point = 0;
    },
    lineEnd: function () {
      0 === this._line && this._string.push("Z"), this._point = NaN;
    },
    point: function (t, n) {
      switch (this._point) {
        case 0:
          this._string.push("M", t, ",", n), this._point = 1;
          break;

        case 1:
          this._string.push("L", t, ",", n);

          break;

        default:
          null == this._circle && (this._circle = Dh(this._radius)), this._string.push("M", t, ",", n, this._circle);
      }
    },
    result: function () {
      if (this._string.length) {
        var t = this._string.join("");

        return this._string = [], t;
      }

      return null;
    }
  }, Fh.prototype = {
    constructor: Fh,
    point: function (t, n) {
      this.stream.point(t, n);
    },
    sphere: function () {
      this.stream.sphere();
    },
    lineStart: function () {
      this.stream.lineStart();
    },
    lineEnd: function () {
      this.stream.lineEnd();
    },
    polygonStart: function () {
      this.stream.polygonStart();
    },
    polygonEnd: function () {
      this.stream.polygonEnd();
    }
  };
  var Yh = rf(30 * Jc);

  function Lh(t, n) {
    return +n ? function (t, n) {
      function e(r, i, o, a, u, c, f, s, l, h, d, p, g, y) {
        var v = f - r,
            _ = s - i,
            b = v * v + _ * _;

        if (b > 4 * n && g--) {
          var m = a + h,
              x = u + d,
              w = c + p,
              M = hf(m * m + x * x + w * w),
              A = gf(w /= M),
              T = tf(tf(w) - 1) < Xc || tf(o - l) < Xc ? (o + l) / 2 : ef(x, m),
              S = t(T, A),
              E = S[0],
              k = S[1],
              N = E - r,
              C = k - i,
              P = _ * N - v * C;
          (P * P / b > n || tf((v * N + _ * C) / b - .5) > .3 || a * h + u * d + c * p < Yh) && (e(r, i, o, a, u, c, E, k, T, m /= M, x /= M, w, g, y), y.point(E, k), e(E, k, T, m, x, w, f, s, l, h, d, p, g, y));
        }
      }

      return function (n) {
        var r,
            i,
            o,
            a,
            u,
            c,
            f,
            s,
            l,
            h,
            d,
            p,
            g = {
          point: y,
          lineStart: v,
          lineEnd: b,
          polygonStart: function () {
            n.polygonStart(), g.lineStart = m;
          },
          polygonEnd: function () {
            n.polygonEnd(), g.lineStart = v;
          }
        };

        function y(e, r) {
          e = t(e, r), n.point(e[0], e[1]);
        }

        function v() {
          s = NaN, g.point = _, n.lineStart();
        }

        function _(r, i) {
          var o = Vf([r, i]),
              a = t(r, i);
          e(s, l, f, h, d, p, s = a[0], l = a[1], f = r, h = o[0], d = o[1], p = o[2], 16, n), n.point(s, l);
        }

        function b() {
          g.point = y, n.lineEnd();
        }

        function m() {
          v(), g.point = x, g.lineEnd = w;
        }

        function x(t, n) {
          _(r = t, n), i = s, o = l, a = h, u = d, c = p, g.point = _;
        }

        function w() {
          e(s, l, f, h, d, p, i, o, r, a, u, c, 16, n), g.lineEnd = b, b();
        }

        return g;
      };
    }(t, n) : function (t) {
      return Rh({
        point: function (n, e) {
          n = t(n, e), this.stream.point(n[0], n[1]);
        }
      });
    }(t);
  }

  var jh = Rh({
    point: function (t, n) {
      this.stream.point(t * Jc, n * Jc);
    }
  });

  function $h(t, n, e, r, i, o) {
    if (!o) return function (t, n, e, r, i) {
      function o(o, a) {
        return [n + t * (o *= r), e - t * (a *= i)];
      }

      return o.invert = function (o, a) {
        return [(o - n) / t * r, (e - a) / t * i];
      }, o;
    }(t, n, e, r, i);
    var a = rf(o),
        u = sf(o),
        c = a * t,
        f = u * t,
        s = a / t,
        l = u / t,
        h = (u * e - a * n) / t,
        d = (u * n + a * e) / t;

    function p(t, o) {
      return [c * (t *= r) - f * (o *= i) + n, e - f * t - c * o];
    }

    return p.invert = function (t, n) {
      return [r * (s * t - l * n + h), i * (d - l * t - s * n)];
    }, p;
  }

  function Hh(t) {
    return Xh(function () {
      return t;
    })();
  }

  function Xh(t) {
    var n,
        e,
        r,
        i,
        o,
        a,
        u,
        c,
        f,
        s,
        l = 150,
        h = 480,
        d = 250,
        p = 0,
        g = 0,
        y = 0,
        v = 0,
        _ = 0,
        b = 0,
        m = 1,
        x = 1,
        w = null,
        M = il,
        A = null,
        T = ql,
        S = .5;

    function E(t) {
      return c(t[0] * Jc, t[1] * Jc);
    }

    function k(t) {
      return (t = c.invert(t[0], t[1])) && [t[0] * Qc, t[1] * Qc];
    }

    function N() {
      var t = $h(l, 0, 0, m, x, b).apply(null, n(p, g)),
          r = $h(l, h - t[0], d - t[1], m, x, b);
      return e = Ys(y, v, _), u = Us(n, r), c = Us(e, u), a = Lh(u, S), C();
    }

    function C() {
      return f = s = null, E;
    }

    return E.stream = function (t) {
      return f && s === t ? f : f = jh(function (t) {
        return Rh({
          point: function (n, e) {
            var r = t(n, e);
            return this.stream.point(r[0], r[1]);
          }
        });
      }(e)(M(a(T(s = t)))));
    }, E.preclip = function (t) {
      return arguments.length ? (M = t, w = void 0, C()) : M;
    }, E.postclip = function (t) {
      return arguments.length ? (T = t, A = r = i = o = null, C()) : T;
    }, E.clipAngle = function (t) {
      return arguments.length ? (M = +t ? ol(w = t * Jc) : (w = null, il), C()) : w * Qc;
    }, E.clipExtent = function (t) {
      return arguments.length ? (T = null == t ? (A = r = i = o = null, ql) : hl(A = +t[0][0], r = +t[0][1], i = +t[1][0], o = +t[1][1]), C()) : null == A ? null : [[A, r], [i, o]];
    }, E.scale = function (t) {
      return arguments.length ? (l = +t, N()) : l;
    }, E.translate = function (t) {
      return arguments.length ? (h = +t[0], d = +t[1], N()) : [h, d];
    }, E.center = function (t) {
      return arguments.length ? (p = t[0] % 360 * Jc, g = t[1] % 360 * Jc, N()) : [p * Qc, g * Qc];
    }, E.rotate = function (t) {
      return arguments.length ? (y = t[0] % 360 * Jc, v = t[1] % 360 * Jc, _ = t.length > 2 ? t[2] % 360 * Jc : 0, N()) : [y * Qc, v * Qc, _ * Qc];
    }, E.angle = function (t) {
      return arguments.length ? (b = t % 360 * Jc, N()) : b * Qc;
    }, E.reflectX = function (t) {
      return arguments.length ? (m = t ? -1 : 1, N()) : m < 0;
    }, E.reflectY = function (t) {
      return arguments.length ? (x = t ? -1 : 1, N()) : x < 0;
    }, E.precision = function (t) {
      return arguments.length ? (a = Lh(u, S = t * t), C()) : hf(S);
    }, E.fitExtent = function (t, n) {
      return Ih(E, t, n);
    }, E.fitSize = function (t, n) {
      return Oh(E, t, n);
    }, E.fitWidth = function (t, n) {
      return Uh(E, t, n);
    }, E.fitHeight = function (t, n) {
      return Bh(E, t, n);
    }, function () {
      return n = t.apply(this, arguments), E.invert = n.invert && k, N();
    };
  }

  function Gh(t) {
    var n = 0,
        e = Vc / 3,
        r = Xh(t),
        i = r(n, e);
    return i.parallels = function (t) {
      return arguments.length ? r(n = t[0] * Jc, e = t[1] * Jc) : [n * Qc, e * Qc];
    }, i;
  }

  function Vh(t, n) {
    var e = sf(t),
        r = (e + sf(n)) / 2;
    if (tf(r) < Xc) return function (t) {
      var n = rf(t);

      function e(t, e) {
        return [t * n, sf(e) / n];
      }

      return e.invert = function (t, e) {
        return [t / n, gf(e * n)];
      }, e;
    }(t);
    var i = 1 + e * (2 * r - e),
        o = hf(i) / r;

    function a(t, n) {
      var e = hf(i - 2 * r * sf(n)) / r;
      return [e * sf(t *= r), o - e * rf(t)];
    }

    return a.invert = function (t, n) {
      var e = o - n,
          a = ef(t, tf(e)) * lf(e);
      return e * r < 0 && (a -= Vc * lf(t) * lf(e)), [a / r, gf((i - (t * t + e * e) * r * r) / (2 * r))];
    }, a;
  }

  function Wh() {
    return Gh(Vh).scale(155.424).center([0, 33.6442]);
  }

  function Zh() {
    return Wh().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7]);
  }

  function Kh(t) {
    return function (n, e) {
      var r = rf(n),
          i = rf(e),
          o = t(r * i);
      return o === 1 / 0 ? [2, 0] : [o * i * sf(n), o * sf(e)];
    };
  }

  function Qh(t) {
    return function (n, e) {
      var r = hf(n * n + e * e),
          i = t(r),
          o = sf(i),
          a = rf(i);
      return [ef(n * o, r * a), gf(r && e * o / r)];
    };
  }

  var Jh = Kh(function (t) {
    return hf(2 / (1 + t));
  });
  Jh.invert = Qh(function (t) {
    return 2 * gf(t / 2);
  });
  var td = Kh(function (t) {
    return (t = pf(t)) && t / sf(t);
  });

  function nd(t, n) {
    return [t, cf(df((Wc + n) / 2))];
  }

  function ed(t) {
    var n,
        e,
        r,
        i = Hh(t),
        o = i.center,
        a = i.scale,
        u = i.translate,
        c = i.clipExtent,
        f = null;

    function s() {
      var o = Vc * a(),
          u = i(Hs(i.rotate()).invert([0, 0]));
      return c(null == f ? [[u[0] - o, u[1] - o], [u[0] + o, u[1] + o]] : t === nd ? [[Math.max(u[0] - o, f), n], [Math.min(u[0] + o, e), r]] : [[f, Math.max(u[1] - o, n)], [e, Math.min(u[1] + o, r)]]);
    }

    return i.scale = function (t) {
      return arguments.length ? (a(t), s()) : a();
    }, i.translate = function (t) {
      return arguments.length ? (u(t), s()) : u();
    }, i.center = function (t) {
      return arguments.length ? (o(t), s()) : o();
    }, i.clipExtent = function (t) {
      return arguments.length ? (null == t ? f = n = e = r = null : (f = +t[0][0], n = +t[0][1], e = +t[1][0], r = +t[1][1]), s()) : null == f ? null : [[f, n], [e, r]];
    }, s();
  }

  function rd(t) {
    return df((Wc + t) / 2);
  }

  function id(t, n) {
    var e = rf(t),
        r = t === n ? sf(t) : cf(e / rf(n)) / cf(rd(n) / rd(t)),
        i = e * ff(rd(t), r) / r;
    if (!r) return nd;

    function o(t, n) {
      i > 0 ? n < -Wc + Xc && (n = -Wc + Xc) : n > Wc - Xc && (n = Wc - Xc);
      var e = i / ff(rd(n), r);
      return [e * sf(r * t), i - e * rf(r * t)];
    }

    return o.invert = function (t, n) {
      var e = i - n,
          o = lf(r) * hf(t * t + e * e),
          a = ef(t, tf(e)) * lf(e);
      return e * r < 0 && (a -= Vc * lf(t) * lf(e)), [a / r, 2 * nf(ff(i / o, 1 / r)) - Wc];
    }, o;
  }

  function od(t, n) {
    return [t, n];
  }

  function ad(t, n) {
    var e = rf(t),
        r = t === n ? sf(t) : (e - rf(n)) / (n - t),
        i = e / r + t;
    if (tf(r) < Xc) return od;

    function o(t, n) {
      var e = i - n,
          o = r * t;
      return [e * sf(o), i - e * rf(o)];
    }

    return o.invert = function (t, n) {
      var e = i - n,
          o = ef(t, tf(e)) * lf(e);
      return e * r < 0 && (o -= Vc * lf(t) * lf(e)), [o / r, i - lf(r) * hf(t * t + e * e)];
    }, o;
  }

  td.invert = Qh(function (t) {
    return t;
  }), nd.invert = function (t, n) {
    return [t, 2 * nf(af(n)) - Wc];
  }, od.invert = od;
  var ud = 1.340264,
      cd = -.081106,
      fd = 893e-6,
      sd = .003796,
      ld = hf(3) / 2;

  function hd(t, n) {
    var e = gf(ld * sf(n)),
        r = e * e,
        i = r * r * r;
    return [t * rf(e) / (ld * (ud + 3 * cd * r + i * (7 * fd + 9 * sd * r))), e * (ud + cd * r + i * (fd + sd * r))];
  }

  function dd(t, n) {
    var e = rf(n),
        r = rf(t) * e;
    return [e * sf(t) / r, sf(n) / r];
  }

  function pd(t, n) {
    var e = n * n,
        r = e * e;
    return [t * (.8707 - .131979 * e + r * (r * (.003971 * e - .001529 * r) - .013791)), n * (1.007226 + e * (.015085 + r * (.028874 * e - .044475 - .005916 * r)))];
  }

  function gd(t, n) {
    return [rf(n) * sf(t), sf(n)];
  }

  function yd(t, n) {
    var e = rf(n),
        r = 1 + rf(t) * e;
    return [e * sf(t) / r, sf(n) / r];
  }

  function vd(t, n) {
    return [cf(df((Wc + n) / 2)), -t];
  }

  function _d(t, n) {
    return t.parent === n.parent ? 1 : 2;
  }

  function bd(t, n) {
    return t + n.x;
  }

  function md(t, n) {
    return Math.max(t, n.y);
  }

  function xd(t) {
    var n = 0,
        e = t.children,
        r = e && e.length;
    if (r) for (; --r >= 0;) n += e[r].value;else n = 1;
    t.value = n;
  }

  function wd(t, n) {
    t instanceof Map ? (t = [void 0, t], void 0 === n && (n = Ad)) : void 0 === n && (n = Md);

    for (var e, r, i, o, a, u = new Ed(t), c = [u]; e = c.pop();) if ((i = n(e.data)) && (a = (i = Array.from(i)).length)) for (e.children = i, o = a - 1; o >= 0; --o) c.push(r = i[o] = new Ed(i[o])), r.parent = e, r.depth = e.depth + 1;

    return u.eachBefore(Sd);
  }

  function Md(t) {
    return t.children;
  }

  function Ad(t) {
    return Array.isArray(t) ? t[1] : null;
  }

  function Td(t) {
    void 0 !== t.data.value && (t.value = t.data.value), t.data = t.data.data;
  }

  function Sd(t) {
    var n = 0;

    do {
      t.height = n;
    } while ((t = t.parent) && t.height < ++n);
  }

  function Ed(t) {
    this.data = t, this.depth = this.height = 0, this.parent = null;
  }

  function kd(t) {
    return null == t ? null : Nd(t);
  }

  function Nd(t) {
    if ("function" != typeof t) throw new Error();
    return t;
  }

  function Cd() {
    return 0;
  }

  function Pd(t) {
    return function () {
      return t;
    };
  }

  hd.invert = function (t, n) {
    for (var e, r = n, i = r * r, o = i * i * i, a = 0; a < 12 && (o = (i = (r -= e = (r * (ud + cd * i + o * (fd + sd * i)) - n) / (ud + 3 * cd * i + o * (7 * fd + 9 * sd * i))) * r) * i * i, !(tf(e) < Gc)); ++a);

    return [ld * t * (ud + 3 * cd * i + o * (7 * fd + 9 * sd * i)) / rf(r), gf(sf(r) / ld)];
  }, dd.invert = Qh(nf), pd.invert = function (t, n) {
    var e,
        r = n,
        i = 25;

    do {
      var o = r * r,
          a = o * o;
      r -= e = (r * (1.007226 + o * (.015085 + a * (.028874 * o - .044475 - .005916 * a))) - n) / (1.007226 + o * (.045255 + a * (.259866 * o - .311325 - .005916 * 11 * a)));
    } while (tf(e) > Xc && --i > 0);

    return [t / (.8707 + (o = r * r) * (o * (o * o * o * (.003971 - .001529 * o) - .013791) - .131979)), r];
  }, gd.invert = Qh(gf), yd.invert = Qh(function (t) {
    return 2 * nf(t);
  }), vd.invert = function (t, n) {
    return [-n, 2 * nf(af(t)) - Wc];
  }, Ed.prototype = wd.prototype = {
    constructor: Ed,
    count: function () {
      return this.eachAfter(xd);
    },
    each: function (t, n) {
      let e = -1;

      for (const r of this) t.call(n, r, ++e, this);

      return this;
    },
    eachAfter: function (t, n) {
      for (var e, r, i, o = this, a = [o], u = [], c = -1; o = a.pop();) if (u.push(o), e = o.children) for (r = 0, i = e.length; r < i; ++r) a.push(e[r]);

      for (; o = u.pop();) t.call(n, o, ++c, this);

      return this;
    },
    eachBefore: function (t, n) {
      for (var e, r, i = this, o = [i], a = -1; i = o.pop();) if (t.call(n, i, ++a, this), e = i.children) for (r = e.length - 1; r >= 0; --r) o.push(e[r]);

      return this;
    },
    find: function (t, n) {
      let e = -1;

      for (const r of this) if (t.call(n, r, ++e, this)) return r;
    },
    sum: function (t) {
      return this.eachAfter(function (n) {
        for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0;) e += r[i].value;

        n.value = e;
      });
    },
    sort: function (t) {
      return this.eachBefore(function (n) {
        n.children && n.children.sort(t);
      });
    },
    path: function (t) {
      for (var n = this, e = function (t, n) {
        if (t === n) return t;
        var e = t.ancestors(),
            r = n.ancestors(),
            i = null;
        t = e.pop(), n = r.pop();

        for (; t === n;) i = t, t = e.pop(), n = r.pop();

        return i;
      }(n, t), r = [n]; n !== e;) n = n.parent, r.push(n);

      for (var i = r.length; t !== e;) r.splice(i, 0, t), t = t.parent;

      return r;
    },
    ancestors: function () {
      for (var t = this, n = [t]; t = t.parent;) n.push(t);

      return n;
    },
    descendants: function () {
      return Array.from(this);
    },
    leaves: function () {
      var t = [];
      return this.eachBefore(function (n) {
        n.children || t.push(n);
      }), t;
    },
    links: function () {
      var t = this,
          n = [];
      return t.each(function (e) {
        e !== t && n.push({
          source: e.parent,
          target: e
        });
      }), n;
    },
    copy: function () {
      return wd(this).eachBefore(Td);
    },
    [Symbol.iterator]: function* () {
      var t,
          n,
          e,
          r,
          i = this,
          o = [i];

      do {
        for (t = o.reverse(), o = []; i = t.pop();) if (yield i, n = i.children) for (e = 0, r = n.length; e < r; ++e) o.push(n[e]);
      } while (o.length);
    }
  };
  const zd = 4294967296;

  function Dd() {
    let t = 1;
    return () => (t = (1664525 * t + 1013904223) % zd) / zd;
  }

  function Rd(t, n) {
    for (var e, r, i = 0, o = (t = function (t, n) {
      let e,
          r,
          i = t.length;

      for (; i;) r = n() * i-- | 0, e = t[i], t[i] = t[r], t[r] = e;

      return t;
    }(Array.from(t), n)).length, a = []; i < o;) e = t[i], r && Id(r, e) ? ++i : (r = Ud(a = Fd(a, e)), i = 0);

    return r;
  }

  function Fd(t, n) {
    var e, r;
    if (Od(n, t)) return [n];

    for (e = 0; e < t.length; ++e) if (qd(n, t[e]) && Od(Bd(t[e], n), t)) return [t[e], n];

    for (e = 0; e < t.length - 1; ++e) for (r = e + 1; r < t.length; ++r) if (qd(Bd(t[e], t[r]), n) && qd(Bd(t[e], n), t[r]) && qd(Bd(t[r], n), t[e]) && Od(Yd(t[e], t[r], n), t)) return [t[e], t[r], n];

    throw new Error();
  }

  function qd(t, n) {
    var e = t.r - n.r,
        r = n.x - t.x,
        i = n.y - t.y;
    return e < 0 || e * e < r * r + i * i;
  }

  function Id(t, n) {
    var e = t.r - n.r + 1e-9 * Math.max(t.r, n.r, 1),
        r = n.x - t.x,
        i = n.y - t.y;
    return e > 0 && e * e > r * r + i * i;
  }

  function Od(t, n) {
    for (var e = 0; e < n.length; ++e) if (!Id(t, n[e])) return !1;

    return !0;
  }

  function Ud(t) {
    switch (t.length) {
      case 1:
        return function (t) {
          return {
            x: t.x,
            y: t.y,
            r: t.r
          };
        }(t[0]);

      case 2:
        return Bd(t[0], t[1]);

      case 3:
        return Yd(t[0], t[1], t[2]);
    }
  }

  function Bd(t, n) {
    var e = t.x,
        r = t.y,
        i = t.r,
        o = n.x,
        a = n.y,
        u = n.r,
        c = o - e,
        f = a - r,
        s = u - i,
        l = Math.sqrt(c * c + f * f);
    return {
      x: (e + o + c / l * s) / 2,
      y: (r + a + f / l * s) / 2,
      r: (l + i + u) / 2
    };
  }

  function Yd(t, n, e) {
    var r = t.x,
        i = t.y,
        o = t.r,
        a = n.x,
        u = n.y,
        c = n.r,
        f = e.x,
        s = e.y,
        l = e.r,
        h = r - a,
        d = r - f,
        p = i - u,
        g = i - s,
        y = c - o,
        v = l - o,
        _ = r * r + i * i - o * o,
        b = _ - a * a - u * u + c * c,
        m = _ - f * f - s * s + l * l,
        x = d * p - h * g,
        w = (p * m - g * b) / (2 * x) - r,
        M = (g * y - p * v) / x,
        A = (d * b - h * m) / (2 * x) - i,
        T = (h * v - d * y) / x,
        S = M * M + T * T - 1,
        E = 2 * (o + w * M + A * T),
        k = w * w + A * A - o * o,
        N = -(Math.abs(S) > 1e-6 ? (E + Math.sqrt(E * E - 4 * S * k)) / (2 * S) : k / E);

    return {
      x: r + w + M * N,
      y: i + A + T * N,
      r: N
    };
  }

  function Ld(t, n, e) {
    var r,
        i,
        o,
        a,
        u = t.x - n.x,
        c = t.y - n.y,
        f = u * u + c * c;
    f ? (i = n.r + e.r, i *= i, a = t.r + e.r, i > (a *= a) ? (r = (f + a - i) / (2 * f), o = Math.sqrt(Math.max(0, a / f - r * r)), e.x = t.x - r * u - o * c, e.y = t.y - r * c + o * u) : (r = (f + i - a) / (2 * f), o = Math.sqrt(Math.max(0, i / f - r * r)), e.x = n.x + r * u - o * c, e.y = n.y + r * c + o * u)) : (e.x = n.x + e.r, e.y = n.y);
  }

  function jd(t, n) {
    var e = t.r + n.r - 1e-6,
        r = n.x - t.x,
        i = n.y - t.y;
    return e > 0 && e * e > r * r + i * i;
  }

  function $d(t) {
    var n = t._,
        e = t.next._,
        r = n.r + e.r,
        i = (n.x * e.r + e.x * n.r) / r,
        o = (n.y * e.r + e.y * n.r) / r;
    return i * i + o * o;
  }

  function Hd(t) {
    this._ = t, this.next = null, this.previous = null;
  }

  function Xd(t, n) {
    if (!(o = (t = function (t) {
      return "object" == typeof t && "length" in t ? t : Array.from(t);
    }(t)).length)) return 0;
    var e, r, i, o, a, u, c, f, s, l, h;
    if ((e = t[0]).x = 0, e.y = 0, !(o > 1)) return e.r;
    if (r = t[1], e.x = -r.r, r.x = e.r, r.y = 0, !(o > 2)) return e.r + r.r;
    Ld(r, e, i = t[2]), e = new Hd(e), r = new Hd(r), i = new Hd(i), e.next = i.previous = r, r.next = e.previous = i, i.next = r.previous = e;

    t: for (c = 3; c < o; ++c) {
      Ld(e._, r._, i = t[c]), i = new Hd(i), f = r.next, s = e.previous, l = r._.r, h = e._.r;

      do {
        if (l <= h) {
          if (jd(f._, i._)) {
            r = f, e.next = r, r.previous = e, --c;
            continue t;
          }

          l += f._.r, f = f.next;
        } else {
          if (jd(s._, i._)) {
            (e = s).next = r, r.previous = e, --c;
            continue t;
          }

          h += s._.r, s = s.previous;
        }
      } while (f !== s.next);

      for (i.previous = e, i.next = r, e.next = r.previous = r = i, a = $d(e); (i = i.next) !== r;) (u = $d(i)) < a && (e = i, a = u);

      r = e.next;
    }

    for (e = [r._], i = r; (i = i.next) !== r;) e.push(i._);

    for (i = Rd(e, n), c = 0; c < o; ++c) (e = t[c]).x -= i.x, e.y -= i.y;

    return i.r;
  }

  function Gd(t) {
    return Math.sqrt(t.value);
  }

  function Vd(t) {
    return function (n) {
      n.children || (n.r = Math.max(0, +t(n) || 0));
    };
  }

  function Wd(t, n, e) {
    return function (r) {
      if (i = r.children) {
        var i,
            o,
            a,
            u = i.length,
            c = t(r) * n || 0;
        if (c) for (o = 0; o < u; ++o) i[o].r += c;
        if (a = Xd(i, e), c) for (o = 0; o < u; ++o) i[o].r -= c;
        r.r = a + c;
      }
    };
  }

  function Zd(t) {
    return function (n) {
      var e = n.parent;
      n.r *= t, e && (n.x = e.x + t * n.x, n.y = e.y + t * n.y);
    };
  }

  function Kd(t) {
    t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1);
  }

  function Qd(t, n, e, r, i) {
    for (var o, a = t.children, u = -1, c = a.length, f = t.value && (r - n) / t.value; ++u < c;) (o = a[u]).y0 = e, o.y1 = i, o.x0 = n, o.x1 = n += o.value * f;
  }

  var Jd = {
    depth: -1
  },
      tp = {},
      np = {};

  function ep(t) {
    return t.id;
  }

  function rp(t) {
    return t.parentId;
  }

  function ip(t) {
    let n = t.length;
    if (n < 2) return "";

    for (; --n > 1 && !op(t, n););

    return t.slice(0, n);
  }

  function op(t, n) {
    if ("/" === t[n]) {
      let e = 0;

      for (; n > 0 && "\\" === t[--n];) ++e;

      if (0 == (1 & e)) return !0;
    }

    return !1;
  }

  function ap(t, n) {
    return t.parent === n.parent ? 1 : 2;
  }

  function up(t) {
    var n = t.children;
    return n ? n[0] : t.t;
  }

  function cp(t) {
    var n = t.children;
    return n ? n[n.length - 1] : t.t;
  }

  function fp(t, n, e) {
    var r = e / (n.i - t.i);
    n.c -= r, n.s += e, t.c += r, n.z += e, n.m += e;
  }

  function sp(t, n, e) {
    return t.a.parent === n.parent ? t.a : e;
  }

  function lp(t, n) {
    this._ = t, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n;
  }

  function hp(t, n, e, r, i) {
    for (var o, a = t.children, u = -1, c = a.length, f = t.value && (i - e) / t.value; ++u < c;) (o = a[u]).x0 = n, o.x1 = r, o.y0 = e, o.y1 = e += o.value * f;
  }

  lp.prototype = Object.create(Ed.prototype);
  var dp = (1 + Math.sqrt(5)) / 2;

  function pp(t, n, e, r, i, o) {
    for (var a, u, c, f, s, l, h, d, p, g, y, v = [], _ = n.children, b = 0, m = 0, x = _.length, w = n.value; b < x;) {
      c = i - e, f = o - r;

      do {
        s = _[m++].value;
      } while (!s && m < x);

      for (l = h = s, y = s * s * (g = Math.max(f / c, c / f) / (w * t)), p = Math.max(h / y, y / l); m < x; ++m) {
        if (s += u = _[m].value, u < l && (l = u), u > h && (h = u), y = s * s * g, (d = Math.max(h / y, y / l)) > p) {
          s -= u;
          break;
        }

        p = d;
      }

      v.push(a = {
        value: s,
        dice: c < f,
        children: _.slice(b, m)
      }), a.dice ? Qd(a, e, r, i, w ? r += f * s / w : o) : hp(a, e, r, w ? e += c * s / w : i, o), w -= s, b = m;
    }

    return v;
  }

  var gp = function t(n) {
    function e(t, e, r, i, o) {
      pp(n, t, e, r, i, o);
    }

    return e.ratio = function (n) {
      return t((n = +n) > 1 ? n : 1);
    }, e;
  }(dp);

  var yp = function t(n) {
    function e(t, e, r, i, o) {
      if ((a = t._squarify) && a.ratio === n) for (var a, u, c, f, s, l = -1, h = a.length, d = t.value; ++l < h;) {
        for (c = (u = a[l]).children, f = u.value = 0, s = c.length; f < s; ++f) u.value += c[f].value;

        u.dice ? Qd(u, e, r, i, d ? r += (o - r) * u.value / d : o) : hp(u, e, r, d ? e += (i - e) * u.value / d : i, o), d -= u.value;
      } else t._squarify = a = pp(n, t, e, r, i, o), a.ratio = n;
    }

    return e.ratio = function (n) {
      return t((n = +n) > 1 ? n : 1);
    }, e;
  }(dp);

  function vp(t, n, e) {
    return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0]);
  }

  function _p(t, n) {
    return t[0] - n[0] || t[1] - n[1];
  }

  function bp(t) {
    const n = t.length,
          e = [0, 1];
    let r,
        i = 2;

    for (r = 2; r < n; ++r) {
      for (; i > 1 && vp(t[e[i - 2]], t[e[i - 1]], t[r]) <= 0;) --i;

      e[i++] = r;
    }

    return e.slice(0, i);
  }

  var mp = Math.random,
      xp = function t(n) {
    function e(t, e) {
      return t = null == t ? 0 : +t, e = null == e ? 1 : +e, 1 === arguments.length ? (e = t, t = 0) : e -= t, function () {
        return n() * e + t;
      };
    }

    return e.source = t, e;
  }(mp),
      wp = function t(n) {
    function e(t, e) {
      return arguments.length < 2 && (e = t, t = 0), t = Math.floor(t), e = Math.floor(e) - t, function () {
        return Math.floor(n() * e + t);
      };
    }

    return e.source = t, e;
  }(mp),
      Mp = function t(n) {
    function e(t, e) {
      var r, i;
      return t = null == t ? 0 : +t, e = null == e ? 1 : +e, function () {
        var o;
        if (null != r) o = r, r = null;else do {
          r = 2 * n() - 1, o = 2 * n() - 1, i = r * r + o * o;
        } while (!i || i > 1);
        return t + e * o * Math.sqrt(-2 * Math.log(i) / i);
      };
    }

    return e.source = t, e;
  }(mp),
      Ap = function t(n) {
    var e = Mp.source(n);

    function r() {
      var t = e.apply(this, arguments);
      return function () {
        return Math.exp(t());
      };
    }

    return r.source = t, r;
  }(mp),
      Tp = function t(n) {
    function e(t) {
      return (t = +t) <= 0 ? () => 0 : function () {
        for (var e = 0, r = t; r > 1; --r) e += n();

        return e + r * n();
      };
    }

    return e.source = t, e;
  }(mp),
      Sp = function t(n) {
    var e = Tp.source(n);

    function r(t) {
      if (0 == (t = +t)) return n;
      var r = e(t);
      return function () {
        return r() / t;
      };
    }

    return r.source = t, r;
  }(mp),
      Ep = function t(n) {
    function e(t) {
      return function () {
        return -Math.log1p(-n()) / t;
      };
    }

    return e.source = t, e;
  }(mp),
      kp = function t(n) {
    function e(t) {
      if ((t = +t) < 0) throw new RangeError("invalid alpha");
      return t = 1 / -t, function () {
        return Math.pow(1 - n(), t);
      };
    }

    return e.source = t, e;
  }(mp),
      Np = function t(n) {
    function e(t) {
      if ((t = +t) < 0 || t > 1) throw new RangeError("invalid p");
      return function () {
        return Math.floor(n() + t);
      };
    }

    return e.source = t, e;
  }(mp),
      Cp = function t(n) {
    function e(t) {
      if ((t = +t) < 0 || t > 1) throw new RangeError("invalid p");
      return 0 === t ? () => 1 / 0 : 1 === t ? () => 1 : (t = Math.log1p(-t), function () {
        return 1 + Math.floor(Math.log1p(-n()) / t);
      });
    }

    return e.source = t, e;
  }(mp),
      Pp = function t(n) {
    var e = Mp.source(n)();

    function r(t, r) {
      if ((t = +t) < 0) throw new RangeError("invalid k");
      if (0 === t) return () => 0;
      if (r = null == r ? 1 : +r, 1 === t) return () => -Math.log1p(-n()) * r;
      var i = (t < 1 ? t + 1 : t) - 1 / 3,
          o = 1 / (3 * Math.sqrt(i)),
          a = t < 1 ? () => Math.pow(n(), 1 / t) : () => 1;
      return function () {
        do {
          do {
            var t = e(),
                u = 1 + o * t;
          } while (u <= 0);

          u *= u * u;
          var c = 1 - n();
        } while (c >= 1 - .0331 * t * t * t * t && Math.log(c) >= .5 * t * t + i * (1 - u + Math.log(u)));

        return i * u * a() * r;
      };
    }

    return r.source = t, r;
  }(mp),
      zp = function t(n) {
    var e = Pp.source(n);

    function r(t, n) {
      var r = e(t),
          i = e(n);
      return function () {
        var t = r();
        return 0 === t ? 0 : t / (t + i());
      };
    }

    return r.source = t, r;
  }(mp),
      Dp = function t(n) {
    var e = Cp.source(n),
        r = zp.source(n);

    function i(t, n) {
      return t = +t, (n = +n) >= 1 ? () => t : n <= 0 ? () => 0 : function () {
        for (var i = 0, o = t, a = n; o * a > 16 && o * (1 - a) > 16;) {
          var u = Math.floor((o + 1) * a),
              c = r(u, o - u + 1)();
          c <= a ? (i += u, o -= u, a = (a - c) / (1 - c)) : (o = u - 1, a /= c);
        }

        for (var f = a < .5, s = e(f ? a : 1 - a), l = s(), h = 0; l <= o; ++h) l += s();

        return i + (f ? h : o - h);
      };
    }

    return i.source = t, i;
  }(mp),
      Rp = function t(n) {
    function e(t, e, r) {
      var i;
      return 0 == (t = +t) ? i = t => -Math.log(t) : (t = 1 / t, i = n => Math.pow(n, t)), e = null == e ? 0 : +e, r = null == r ? 1 : +r, function () {
        return e + r * i(-Math.log1p(-n()));
      };
    }

    return e.source = t, e;
  }(mp),
      Fp = function t(n) {
    function e(t, e) {
      return t = null == t ? 0 : +t, e = null == e ? 1 : +e, function () {
        return t + e * Math.tan(Math.PI * n());
      };
    }

    return e.source = t, e;
  }(mp),
      qp = function t(n) {
    function e(t, e) {
      return t = null == t ? 0 : +t, e = null == e ? 1 : +e, function () {
        var r = n();
        return t + e * Math.log(r / (1 - r));
      };
    }

    return e.source = t, e;
  }(mp),
      Ip = function t(n) {
    var e = Pp.source(n),
        r = Dp.source(n);

    function i(t) {
      return function () {
        for (var i = 0, o = t; o > 16;) {
          var a = Math.floor(.875 * o),
              u = e(a)();
          if (u > o) return i + r(a - 1, o / u)();
          i += a, o -= u;
        }

        for (var c = -Math.log1p(-n()), f = 0; c <= o; ++f) c -= Math.log1p(-n());

        return i + f;
      };
    }

    return i.source = t, i;
  }(mp);

  const Op = 1 / 4294967296;

  function Up(t, n) {
    switch (arguments.length) {
      case 0:
        break;

      case 1:
        this.range(t);
        break;

      default:
        this.range(n).domain(t);
    }

    return this;
  }

  function Bp(t, n) {
    switch (arguments.length) {
      case 0:
        break;

      case 1:
        "function" == typeof t ? this.interpolator(t) : this.range(t);
        break;

      default:
        this.domain(t), "function" == typeof n ? this.interpolator(n) : this.range(n);
    }

    return this;
  }

  const Yp = Symbol("implicit");

  function Lp() {
    var t = new InternMap(),
        n = [],
        e = [],
        r = Yp;

    function i(i) {
      let o = t.get(i);

      if (void 0 === o) {
        if (r !== Yp) return r;
        t.set(i, o = n.push(i) - 1);
      }

      return e[o % e.length];
    }

    return i.domain = function (e) {
      if (!arguments.length) return n.slice();
      n = [], t = new InternMap();

      for (const r of e) t.has(r) || t.set(r, n.push(r) - 1);

      return i;
    }, i.range = function (t) {
      return arguments.length ? (e = Array.from(t), i) : e.slice();
    }, i.unknown = function (t) {
      return arguments.length ? (r = t, i) : r;
    }, i.copy = function () {
      return Lp(n, e).unknown(r);
    }, Up.apply(i, arguments), i;
  }

  function jp() {
    var t,
        n,
        e = Lp().unknown(void 0),
        r = e.domain,
        i = e.range,
        o = 0,
        a = 1,
        u = !1,
        c = 0,
        f = 0,
        s = .5;

    function l() {
      var e = r().length,
          l = a < o,
          h = l ? a : o,
          d = l ? o : a;
      t = (d - h) / Math.max(1, e - c + 2 * f), u && (t = Math.floor(t)), h += (d - h - t * (e - c)) * s, n = t * (1 - c), u && (h = Math.round(h), n = Math.round(n));
      var p = lt(e).map(function (n) {
        return h + t * n;
      });
      return i(l ? p.reverse() : p);
    }

    return delete e.unknown, e.domain = function (t) {
      return arguments.length ? (r(t), l()) : r();
    }, e.range = function (t) {
      return arguments.length ? ([o, a] = t, o = +o, a = +a, l()) : [o, a];
    }, e.rangeRound = function (t) {
      return [o, a] = t, o = +o, a = +a, u = !0, l();
    }, e.bandwidth = function () {
      return n;
    }, e.step = function () {
      return t;
    }, e.round = function (t) {
      return arguments.length ? (u = !!t, l()) : u;
    }, e.padding = function (t) {
      return arguments.length ? (c = Math.min(1, f = +t), l()) : c;
    }, e.paddingInner = function (t) {
      return arguments.length ? (c = Math.min(1, t), l()) : c;
    }, e.paddingOuter = function (t) {
      return arguments.length ? (f = +t, l()) : f;
    }, e.align = function (t) {
      return arguments.length ? (s = Math.max(0, Math.min(1, t)), l()) : s;
    }, e.copy = function () {
      return jp(r(), [o, a]).round(u).paddingInner(c).paddingOuter(f).align(s);
    }, Up.apply(l(), arguments);
  }

  function $p(t) {
    var n = t.copy;
    return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function () {
      return $p(n());
    }, t;
  }

  function Hp(t) {
    return +t;
  }

  var Xp = [0, 1];

  function Gp(t) {
    return t;
  }

  function Vp(t, n) {
    return (n -= t = +t) ? function (e) {
      return (e - t) / n;
    } : function (t) {
      return function () {
        return t;
      };
    }(isNaN(n) ? NaN : .5);
  }

  function Wp(t, n, e) {
    var r = t[0],
        i = t[1],
        o = n[0],
        a = n[1];
    return i < r ? (r = Vp(i, r), o = e(a, o)) : (r = Vp(r, i), o = e(o, a)), function (t) {
      return o(r(t));
    };
  }

  function Zp(t, n, e) {
    var r = Math.min(t.length, n.length) - 1,
        i = new Array(r),
        o = new Array(r),
        a = -1;

    for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r;) i[a] = Vp(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);

    return function (n) {
      var e = l(t, n, 1, r) - 1;
      return o[e](i[e](n));
    };
  }

  function Kp(t, n) {
    return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
  }

  function Qp() {
    var t,
        n,
        e,
        r,
        i,
        o,
        a = Xp,
        u = Xp,
        c = Hr,
        f = Gp;

    function s() {
      var t = Math.min(a.length, u.length);
      return f !== Gp && (f = function (t, n) {
        var e;
        return t > n && (e = t, t = n, n = e), function (e) {
          return Math.max(t, Math.min(n, e));
        };
      }(a[0], a[t - 1])), r = t > 2 ? Zp : Wp, i = o = null, l;
    }

    function l(n) {
      return null == n || isNaN(n = +n) ? e : (i || (i = r(a.map(t), u, c)))(t(f(n)));
    }

    return l.invert = function (e) {
      return f(n((o || (o = r(u, a.map(t), Br)))(e)));
    }, l.domain = function (t) {
      return arguments.length ? (a = Array.from(t, Hp), s()) : a.slice();
    }, l.range = function (t) {
      return arguments.length ? (u = Array.from(t), s()) : u.slice();
    }, l.rangeRound = function (t) {
      return u = Array.from(t), c = Xr, s();
    }, l.clamp = function (t) {
      return arguments.length ? (f = !!t || Gp, s()) : f !== Gp;
    }, l.interpolate = function (t) {
      return arguments.length ? (c = t, s()) : c;
    }, l.unknown = function (t) {
      return arguments.length ? (e = t, l) : e;
    }, function (e, r) {
      return t = e, n = r, s();
    };
  }

  function Jp() {
    return Qp()(Gp, Gp);
  }

  function tg(n, e, r, i) {
    var o,
        a = W(n, e, r);

    switch ((i = Dc(null == i ? ",f" : i)).type) {
      case "s":
        var u = Math.max(Math.abs(n), Math.abs(e));
        return null != i.precision || isNaN(o = $c(a, u)) || (i.precision = o), t.formatPrefix(i, u);

      case "":
      case "e":
      case "g":
      case "p":
      case "r":
        null != i.precision || isNaN(o = Hc(a, Math.max(Math.abs(n), Math.abs(e)))) || (i.precision = o - ("e" === i.type));
        break;

      case "f":
      case "%":
        null != i.precision || isNaN(o = jc(a)) || (i.precision = o - 2 * ("%" === i.type));
    }

    return t.format(i);
  }

  function ng(t) {
    var n = t.domain;
    return t.ticks = function (t) {
      var e = n();
      return G(e[0], e[e.length - 1], null == t ? 10 : t);
    }, t.tickFormat = function (t, e) {
      var r = n();
      return tg(r[0], r[r.length - 1], null == t ? 10 : t, e);
    }, t.nice = function (e) {
      null == e && (e = 10);
      var r,
          i,
          o = n(),
          a = 0,
          u = o.length - 1,
          c = o[a],
          f = o[u],
          s = 10;

      for (f < c && (i = c, c = f, f = i, i = a, a = u, u = i); s-- > 0;) {
        if ((i = V(c, f, e)) === r) return o[a] = c, o[u] = f, n(o);
        if (i > 0) c = Math.floor(c / i) * i, f = Math.ceil(f / i) * i;else {
          if (!(i < 0)) break;
          c = Math.ceil(c * i) / i, f = Math.floor(f * i) / i;
        }
        r = i;
      }

      return t;
    }, t;
  }

  function eg(t, n) {
    var e,
        r = 0,
        i = (t = t.slice()).length - 1,
        o = t[r],
        a = t[i];
    return a < o && (e = r, r = i, i = e, e = o, o = a, a = e), t[r] = n.floor(o), t[i] = n.ceil(a), t;
  }

  function rg(t) {
    return Math.log(t);
  }

  function ig(t) {
    return Math.exp(t);
  }

  function og(t) {
    return -Math.log(-t);
  }

  function ag(t) {
    return -Math.exp(-t);
  }

  function ug(t) {
    return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
  }

  function cg(t) {
    return (n, e) => -t(-n, e);
  }

  function fg(n) {
    const e = n(rg, ig),
          r = e.domain;
    let i,
        o,
        a = 10;

    function u() {
      return i = function (t) {
        return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), n => Math.log(n) / t);
      }(a), o = function (t) {
        return 10 === t ? ug : t === Math.E ? Math.exp : n => Math.pow(t, n);
      }(a), r()[0] < 0 ? (i = cg(i), o = cg(o), n(og, ag)) : n(rg, ig), e;
    }

    return e.base = function (t) {
      return arguments.length ? (a = +t, u()) : a;
    }, e.domain = function (t) {
      return arguments.length ? (r(t), u()) : r();
    }, e.ticks = t => {
      const n = r();
      let e = n[0],
          u = n[n.length - 1];
      const c = u < e;
      c && ([e, u] = [u, e]);
      let f,
          s,
          l = i(e),
          h = i(u);
      const d = null == t ? 10 : +t;
      let p = [];

      if (!(a % 1) && h - l < d) {
        if (l = Math.floor(l), h = Math.ceil(h), e > 0) {
          for (; l <= h; ++l) for (f = 1; f < a; ++f) if (s = l < 0 ? f / o(-l) : f * o(l), !(s < e)) {
            if (s > u) break;
            p.push(s);
          }
        } else for (; l <= h; ++l) for (f = a - 1; f >= 1; --f) if (s = l > 0 ? f / o(-l) : f * o(l), !(s < e)) {
          if (s > u) break;
          p.push(s);
        }

        2 * p.length < d && (p = G(e, u, d));
      } else p = G(l, h, Math.min(h - l, d)).map(o);

      return c ? p.reverse() : p;
    }, e.tickFormat = (n, r) => {
      if (null == n && (n = 10), null == r && (r = 10 === a ? "s" : ","), "function" != typeof r && (a % 1 || null != (r = Dc(r)).precision || (r.trim = !0), r = t.format(r)), n === 1 / 0) return r;
      const u = Math.max(1, a * n / e.ticks().length);
      return t => {
        let n = t / o(Math.round(i(t)));
        return n * a < a - .5 && (n *= a), n <= u ? r(t) : "";
      };
    }, e.nice = () => r(eg(r(), {
      floor: t => o(Math.floor(i(t))),
      ceil: t => o(Math.ceil(i(t)))
    })), e;
  }

  function sg(t) {
    return function (n) {
      return Math.sign(n) * Math.log1p(Math.abs(n / t));
    };
  }

  function lg(t) {
    return function (n) {
      return Math.sign(n) * Math.expm1(Math.abs(n)) * t;
    };
  }

  function hg(t) {
    var n = 1,
        e = t(sg(n), lg(n));
    return e.constant = function (e) {
      return arguments.length ? t(sg(n = +e), lg(n)) : n;
    }, ng(e);
  }

  function dg(t) {
    return function (n) {
      return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
    };
  }

  function pg(t) {
    return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
  }

  function gg(t) {
    return t < 0 ? -t * t : t * t;
  }

  function yg(t) {
    var n = t(Gp, Gp),
        e = 1;

    function r() {
      return 1 === e ? t(Gp, Gp) : .5 === e ? t(pg, gg) : t(dg(e), dg(1 / e));
    }

    return n.exponent = function (t) {
      return arguments.length ? (e = +t, r()) : e;
    }, ng(n);
  }

  function vg() {
    var t = yg(Qp());
    return t.copy = function () {
      return Kp(t, vg()).exponent(t.exponent());
    }, Up.apply(t, arguments), t;
  }

  function _g(t) {
    return Math.sign(t) * t * t;
  }

  function bg(t) {
    return Math.sign(t) * Math.sqrt(Math.abs(t));
  }

  var mg = new Date(),
      xg = new Date();

  function wg(t, n, e, r) {
    function i(n) {
      return t(n = 0 === arguments.length ? new Date() : new Date(+n)), n;
    }

    return i.floor = function (n) {
      return t(n = new Date(+n)), n;
    }, i.ceil = function (e) {
      return t(e = new Date(e - 1)), n(e, 1), t(e), e;
    }, i.round = function (t) {
      var n = i(t),
          e = i.ceil(t);
      return t - n < e - t ? n : e;
    }, i.offset = function (t, e) {
      return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t;
    }, i.range = function (e, r, o) {
      var a,
          u = [];
      if (e = i.ceil(e), o = null == o ? 1 : Math.floor(o), !(e < r && o > 0)) return u;

      do {
        u.push(a = new Date(+e)), n(e, o), t(e);
      } while (a < e && e < r);

      return u;
    }, i.filter = function (e) {
      return wg(function (n) {
        if (n >= n) for (; t(n), !e(n);) n.setTime(n - 1);
      }, function (t, r) {
        if (t >= t) if (r < 0) for (; ++r <= 0;) for (; n(t, -1), !e(t););else for (; --r >= 0;) for (; n(t, 1), !e(t););
      });
    }, e && (i.count = function (n, r) {
      return mg.setTime(+n), xg.setTime(+r), t(mg), t(xg), Math.floor(e(mg, xg));
    }, i.every = function (t) {
      return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function (n) {
        return r(n) % t == 0;
      } : function (n) {
        return i.count(0, n) % t == 0;
      }) : i : null;
    }), i;
  }

  var Mg = wg(function () {}, function (t, n) {
    t.setTime(+t + n);
  }, function (t, n) {
    return n - t;
  });

  Mg.every = function (t) {
    return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? wg(function (n) {
      n.setTime(Math.floor(n / t) * t);
    }, function (n, e) {
      n.setTime(+n + e * t);
    }, function (n, e) {
      return (e - n) / t;
    }) : Mg : null;
  };

  var Ag = Mg,
      Tg = Mg.range;
  const Sg = 1e3,
        Eg = 6e4,
        kg = 36e5,
        Ng = 864e5,
        Cg = 6048e5,
        Pg = 2592e6,
        zg = 31536e6;
  var Dg = wg(function (t) {
    t.setTime(t - t.getMilliseconds());
  }, function (t, n) {
    t.setTime(+t + n * Sg);
  }, function (t, n) {
    return (n - t) / Sg;
  }, function (t) {
    return t.getUTCSeconds();
  }),
      Rg = Dg,
      Fg = Dg.range,
      qg = wg(function (t) {
    t.setTime(t - t.getMilliseconds() - t.getSeconds() * Sg);
  }, function (t, n) {
    t.setTime(+t + n * Eg);
  }, function (t, n) {
    return (n - t) / Eg;
  }, function (t) {
    return t.getMinutes();
  }),
      Ig = qg,
      Og = qg.range,
      Ug = wg(function (t) {
    t.setTime(t - t.getMilliseconds() - t.getSeconds() * Sg - t.getMinutes() * Eg);
  }, function (t, n) {
    t.setTime(+t + n * kg);
  }, function (t, n) {
    return (n - t) / kg;
  }, function (t) {
    return t.getHours();
  }),
      Bg = Ug,
      Yg = Ug.range,
      Lg = wg(t => t.setHours(0, 0, 0, 0), (t, n) => t.setDate(t.getDate() + n), (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Eg) / Ng, t => t.getDate() - 1),
      jg = Lg,
      $g = Lg.range;

  function Hg(t) {
    return wg(function (n) {
      n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0);
    }, function (t, n) {
      t.setDate(t.getDate() + 7 * n);
    }, function (t, n) {
      return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Eg) / Cg;
    });
  }

  var Xg = Hg(0),
      Gg = Hg(1),
      Vg = Hg(2),
      Wg = Hg(3),
      Zg = Hg(4),
      Kg = Hg(5),
      Qg = Hg(6),
      Jg = Xg.range,
      ty = Gg.range,
      ny = Vg.range,
      ey = Wg.range,
      ry = Zg.range,
      iy = Kg.range,
      oy = Qg.range,
      ay = wg(function (t) {
    t.setDate(1), t.setHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setMonth(t.getMonth() + n);
  }, function (t, n) {
    return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear());
  }, function (t) {
    return t.getMonth();
  }),
      uy = ay,
      cy = ay.range,
      fy = wg(function (t) {
    t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setFullYear(t.getFullYear() + n);
  }, function (t, n) {
    return n.getFullYear() - t.getFullYear();
  }, function (t) {
    return t.getFullYear();
  });

  fy.every = function (t) {
    return isFinite(t = Math.floor(t)) && t > 0 ? wg(function (n) {
      n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0);
    }, function (n, e) {
      n.setFullYear(n.getFullYear() + e * t);
    }) : null;
  };

  var sy = fy,
      ly = fy.range,
      hy = wg(function (t) {
    t.setUTCSeconds(0, 0);
  }, function (t, n) {
    t.setTime(+t + n * Eg);
  }, function (t, n) {
    return (n - t) / Eg;
  }, function (t) {
    return t.getUTCMinutes();
  }),
      dy = hy,
      py = hy.range,
      gy = wg(function (t) {
    t.setUTCMinutes(0, 0, 0);
  }, function (t, n) {
    t.setTime(+t + n * kg);
  }, function (t, n) {
    return (n - t) / kg;
  }, function (t) {
    return t.getUTCHours();
  }),
      yy = gy,
      vy = gy.range,
      _y = wg(function (t) {
    t.setUTCHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setUTCDate(t.getUTCDate() + n);
  }, function (t, n) {
    return (n - t) / Ng;
  }, function (t) {
    return t.getUTCDate() - 1;
  }),
      by = _y,
      my = _y.range;

  function xy(t) {
    return wg(function (n) {
      n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0);
    }, function (t, n) {
      t.setUTCDate(t.getUTCDate() + 7 * n);
    }, function (t, n) {
      return (n - t) / Cg;
    });
  }

  var wy = xy(0),
      My = xy(1),
      Ay = xy(2),
      Ty = xy(3),
      Sy = xy(4),
      Ey = xy(5),
      ky = xy(6),
      Ny = wy.range,
      Cy = My.range,
      Py = Ay.range,
      zy = Ty.range,
      Dy = Sy.range,
      Ry = Ey.range,
      Fy = ky.range,
      qy = wg(function (t) {
    t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setUTCMonth(t.getUTCMonth() + n);
  }, function (t, n) {
    return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear());
  }, function (t) {
    return t.getUTCMonth();
  }),
      Iy = qy,
      Oy = qy.range,
      Uy = wg(function (t) {
    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setUTCFullYear(t.getUTCFullYear() + n);
  }, function (t, n) {
    return n.getUTCFullYear() - t.getUTCFullYear();
  }, function (t) {
    return t.getUTCFullYear();
  });

  Uy.every = function (t) {
    return isFinite(t = Math.floor(t)) && t > 0 ? wg(function (n) {
      n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
    }, function (n, e) {
      n.setUTCFullYear(n.getUTCFullYear() + e * t);
    }) : null;
  };

  var By = Uy,
      Yy = Uy.range;

  function Ly(t, n, e, i, o, a) {
    const u = [[Rg, 1, Sg], [Rg, 5, 5e3], [Rg, 15, 15e3], [Rg, 30, 3e4], [a, 1, Eg], [a, 5, 3e5], [a, 15, 9e5], [a, 30, 18e5], [o, 1, kg], [o, 3, 108e5], [o, 6, 216e5], [o, 12, 432e5], [i, 1, Ng], [i, 2, 1728e5], [e, 1, Cg], [n, 1, Pg], [n, 3, 7776e6], [t, 1, zg]];

    function c(n, e, i) {
      const o = Math.abs(e - n) / i,
            a = r(([,, t]) => t).right(u, o);
      if (a === u.length) return t.every(W(n / zg, e / zg, i));
      if (0 === a) return Ag.every(Math.max(W(n, e, i), 1));
      const [c, f] = u[o / u[a - 1][2] < u[a][2] / o ? a - 1 : a];
      return c.every(f);
    }

    return [function (t, n, e) {
      const r = n < t;
      r && ([t, n] = [n, t]);
      const i = e && "function" == typeof e.range ? e : c(t, n, e),
            o = i ? i.range(t, +n + 1) : [];
      return r ? o.reverse() : o;
    }, c];
  }

  const [jy, $y] = Ly(By, Iy, wy, by, yy, dy),
        [Hy, Xy] = Ly(sy, uy, Xg, jg, Bg, Ig);

  function Gy(t) {
    if (0 <= t.y && t.y < 100) {
      var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
      return n.setFullYear(t.y), n;
    }

    return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
  }

  function Vy(t) {
    if (0 <= t.y && t.y < 100) {
      var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
      return n.setUTCFullYear(t.y), n;
    }

    return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
  }

  function Wy(t, n, e) {
    return {
      y: t,
      m: n,
      d: e,
      H: 0,
      M: 0,
      S: 0,
      L: 0
    };
  }

  function Zy(t) {
    var n = t.dateTime,
        e = t.date,
        r = t.time,
        i = t.periods,
        o = t.days,
        a = t.shortDays,
        u = t.months,
        c = t.shortMonths,
        f = iv(i),
        s = ov(i),
        l = iv(o),
        h = ov(o),
        d = iv(a),
        p = ov(a),
        g = iv(u),
        y = ov(u),
        v = iv(c),
        _ = ov(c),
        b = {
      a: function (t) {
        return a[t.getDay()];
      },
      A: function (t) {
        return o[t.getDay()];
      },
      b: function (t) {
        return c[t.getMonth()];
      },
      B: function (t) {
        return u[t.getMonth()];
      },
      c: null,
      d: Sv,
      e: Sv,
      f: Pv,
      g: Lv,
      G: $v,
      H: Ev,
      I: kv,
      j: Nv,
      L: Cv,
      m: zv,
      M: Dv,
      p: function (t) {
        return i[+(t.getHours() >= 12)];
      },
      q: function (t) {
        return 1 + ~~(t.getMonth() / 3);
      },
      Q: d_,
      s: p_,
      S: Rv,
      u: Fv,
      U: qv,
      V: Ov,
      w: Uv,
      W: Bv,
      x: null,
      X: null,
      y: Yv,
      Y: jv,
      Z: Hv,
      "%": h_
    },
        m = {
      a: function (t) {
        return a[t.getUTCDay()];
      },
      A: function (t) {
        return o[t.getUTCDay()];
      },
      b: function (t) {
        return c[t.getUTCMonth()];
      },
      B: function (t) {
        return u[t.getUTCMonth()];
      },
      c: null,
      d: Xv,
      e: Xv,
      f: Kv,
      g: c_,
      G: s_,
      H: Gv,
      I: Vv,
      j: Wv,
      L: Zv,
      m: Qv,
      M: Jv,
      p: function (t) {
        return i[+(t.getUTCHours() >= 12)];
      },
      q: function (t) {
        return 1 + ~~(t.getUTCMonth() / 3);
      },
      Q: d_,
      s: p_,
      S: t_,
      u: n_,
      U: e_,
      V: i_,
      w: o_,
      W: a_,
      x: null,
      X: null,
      y: u_,
      Y: f_,
      Z: l_,
      "%": h_
    },
        x = {
      a: function (t, n, e) {
        var r = d.exec(n.slice(e));
        return r ? (t.w = p.get(r[0].toLowerCase()), e + r[0].length) : -1;
      },
      A: function (t, n, e) {
        var r = l.exec(n.slice(e));
        return r ? (t.w = h.get(r[0].toLowerCase()), e + r[0].length) : -1;
      },
      b: function (t, n, e) {
        var r = v.exec(n.slice(e));
        return r ? (t.m = _.get(r[0].toLowerCase()), e + r[0].length) : -1;
      },
      B: function (t, n, e) {
        var r = g.exec(n.slice(e));
        return r ? (t.m = y.get(r[0].toLowerCase()), e + r[0].length) : -1;
      },
      c: function (t, e, r) {
        return A(t, n, e, r);
      },
      d: yv,
      e: yv,
      f: wv,
      g: hv,
      G: lv,
      H: _v,
      I: _v,
      j: vv,
      L: xv,
      m: gv,
      M: bv,
      p: function (t, n, e) {
        var r = f.exec(n.slice(e));
        return r ? (t.p = s.get(r[0].toLowerCase()), e + r[0].length) : -1;
      },
      q: pv,
      Q: Av,
      s: Tv,
      S: mv,
      u: uv,
      U: cv,
      V: fv,
      w: av,
      W: sv,
      x: function (t, n, r) {
        return A(t, e, n, r);
      },
      X: function (t, n, e) {
        return A(t, r, n, e);
      },
      y: hv,
      Y: lv,
      Z: dv,
      "%": Mv
    };

    function w(t, n) {
      return function (e) {
        var r,
            i,
            o,
            a = [],
            u = -1,
            c = 0,
            f = t.length;

        for (e instanceof Date || (e = new Date(+e)); ++u < f;) 37 === t.charCodeAt(u) && (a.push(t.slice(c, u)), null != (i = Qy[r = t.charAt(++u)]) ? r = t.charAt(++u) : i = "e" === r ? " " : "0", (o = n[r]) && (r = o(e, i)), a.push(r), c = u + 1);

        return a.push(t.slice(c, u)), a.join("");
      };
    }

    function M(t, n) {
      return function (e) {
        var r,
            i,
            o = Wy(1900, void 0, 1);
        if (A(o, t, e += "", 0) != e.length) return null;
        if ("Q" in o) return new Date(o.Q);
        if ("s" in o) return new Date(1e3 * o.s + ("L" in o ? o.L : 0));

        if (n && !("Z" in o) && (o.Z = 0), "p" in o && (o.H = o.H % 12 + 12 * o.p), void 0 === o.m && (o.m = "q" in o ? o.q : 0), "V" in o) {
          if (o.V < 1 || o.V > 53) return null;
          "w" in o || (o.w = 1), "Z" in o ? (i = (r = Vy(Wy(o.y, 0, 1))).getUTCDay(), r = i > 4 || 0 === i ? My.ceil(r) : My(r), r = by.offset(r, 7 * (o.V - 1)), o.y = r.getUTCFullYear(), o.m = r.getUTCMonth(), o.d = r.getUTCDate() + (o.w + 6) % 7) : (i = (r = Gy(Wy(o.y, 0, 1))).getDay(), r = i > 4 || 0 === i ? Gg.ceil(r) : Gg(r), r = jg.offset(r, 7 * (o.V - 1)), o.y = r.getFullYear(), o.m = r.getMonth(), o.d = r.getDate() + (o.w + 6) % 7);
        } else ("W" in o || "U" in o) && ("w" in o || (o.w = "u" in o ? o.u % 7 : "W" in o ? 1 : 0), i = "Z" in o ? Vy(Wy(o.y, 0, 1)).getUTCDay() : Gy(Wy(o.y, 0, 1)).getDay(), o.m = 0, o.d = "W" in o ? (o.w + 6) % 7 + 7 * o.W - (i + 5) % 7 : o.w + 7 * o.U - (i + 6) % 7);

        return "Z" in o ? (o.H += o.Z / 100 | 0, o.M += o.Z % 100, Vy(o)) : Gy(o);
      };
    }

    function A(t, n, e, r) {
      for (var i, o, a = 0, u = n.length, c = e.length; a < u;) {
        if (r >= c) return -1;

        if (37 === (i = n.charCodeAt(a++))) {
          if (i = n.charAt(a++), !(o = x[i in Qy ? n.charAt(a++) : i]) || (r = o(t, e, r)) < 0) return -1;
        } else if (i != e.charCodeAt(r++)) return -1;
      }

      return r;
    }

    return b.x = w(e, b), b.X = w(r, b), b.c = w(n, b), m.x = w(e, m), m.X = w(r, m), m.c = w(n, m), {
      format: function (t) {
        var n = w(t += "", b);
        return n.toString = function () {
          return t;
        }, n;
      },
      parse: function (t) {
        var n = M(t += "", !1);
        return n.toString = function () {
          return t;
        }, n;
      },
      utcFormat: function (t) {
        var n = w(t += "", m);
        return n.toString = function () {
          return t;
        }, n;
      },
      utcParse: function (t) {
        var n = M(t += "", !0);
        return n.toString = function () {
          return t;
        }, n;
      }
    };
  }

  var Ky,
      Qy = {
    "-": "",
    _: " ",
    0: "0"
  },
      Jy = /^\s*\d+/,
      tv = /^%/,
      nv = /[\\^$*+?|[\]().{}]/g;

  function ev(t, n, e) {
    var r = t < 0 ? "-" : "",
        i = (r ? -t : t) + "",
        o = i.length;
    return r + (o < e ? new Array(e - o + 1).join(n) + i : i);
  }

  function rv(t) {
    return t.replace(nv, "\\$&");
  }

  function iv(t) {
    return new RegExp("^(?:" + t.map(rv).join("|") + ")", "i");
  }

  function ov(t) {
    return new Map(t.map((t, n) => [t.toLowerCase(), n]));
  }

  function av(t, n, e) {
    var r = Jy.exec(n.slice(e, e + 1));
    return r ? (t.w = +r[0], e + r[0].length) : -1;
  }

  function uv(t, n, e) {
    var r = Jy.exec(n.slice(e, e + 1));
    return r ? (t.u = +r[0], e + r[0].length) : -1;
  }

  function cv(t, n, e) {
    var r = Jy.exec(n.slice(e, e + 2));
    return r ? (t.U = +r[0], e + r[0].length) : -1;
  }

  function fv(t, n, e) {
    var r = Jy.exec(n.slice(e, e + 2));
    return r ? (t.V = +r[0], e + r[0].length) : -1;
  }

  function sv(t, n, e) {
    var r = Jy.exec(n.slice(e, e + 2));
    return r ? (t.W = +r[0], e + r[0].length) : -1;
  }

  function lv(t, n, e) {
    var r = Jy.exec(n.slice(e, e + 4));
    return r ? (t.y = +r[0], e + r[0].length) : -1;
  }

  function hv(t, n, e) {
    var r = Jy.exec(n.slice(e, e + 2));
    return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1;
  }

  function dv(t, n, e) {
    var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
    return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1;
  }

  function pv(t, n, e) {
    var r = Jy.exec(n.slice(e, e + 1));
    return r ? (t.q = 3 * r[0] - 3, e + r[0].length) : -1;
  }

  function gv(t, n, e) {
    var r = Jy.exec(n.slice(e, e + 2));
    return r ? (t.m = r[0] - 1, e + r[0].length) : -1;
  }

  function yv(t, n, e) {
    var r = Jy.exec(n.slice(e, e + 2));
    return r ? (t.d = +r[0], e + r[0].length) : -1;
  }

  function vv(t, n, e) {
    var r = Jy.exec(n.slice(e, e + 3));
    return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1;
  }

  function _v(t, n, e) {
    var r = Jy.exec(n.slice(e, e + 2));
    return r ? (t.H = +r[0], e + r[0].length) : -1;
  }

  function bv(t, n, e) {
    var r = Jy.exec(n.slice(e, e + 2));
    return r ? (t.M = +r[0], e + r[0].length) : -1;
  }

  function mv(t, n, e) {
    var r = Jy.exec(n.slice(e, e + 2));
    return r ? (t.S = +r[0], e + r[0].length) : -1;
  }

  function xv(t, n, e) {
    var r = Jy.exec(n.slice(e, e + 3));
    return r ? (t.L = +r[0], e + r[0].length) : -1;
  }

  function wv(t, n, e) {
    var r = Jy.exec(n.slice(e, e + 6));
    return r ? (t.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1;
  }

  function Mv(t, n, e) {
    var r = tv.exec(n.slice(e, e + 1));
    return r ? e + r[0].length : -1;
  }

  function Av(t, n, e) {
    var r = Jy.exec(n.slice(e));
    return r ? (t.Q = +r[0], e + r[0].length) : -1;
  }

  function Tv(t, n, e) {
    var r = Jy.exec(n.slice(e));
    return r ? (t.s = +r[0], e + r[0].length) : -1;
  }

  function Sv(t, n) {
    return ev(t.getDate(), n, 2);
  }

  function Ev(t, n) {
    return ev(t.getHours(), n, 2);
  }

  function kv(t, n) {
    return ev(t.getHours() % 12 || 12, n, 2);
  }

  function Nv(t, n) {
    return ev(1 + jg.count(sy(t), t), n, 3);
  }

  function Cv(t, n) {
    return ev(t.getMilliseconds(), n, 3);
  }

  function Pv(t, n) {
    return Cv(t, n) + "000";
  }

  function zv(t, n) {
    return ev(t.getMonth() + 1, n, 2);
  }

  function Dv(t, n) {
    return ev(t.getMinutes(), n, 2);
  }

  function Rv(t, n) {
    return ev(t.getSeconds(), n, 2);
  }

  function Fv(t) {
    var n = t.getDay();
    return 0 === n ? 7 : n;
  }

  function qv(t, n) {
    return ev(Xg.count(sy(t) - 1, t), n, 2);
  }

  function Iv(t) {
    var n = t.getDay();
    return n >= 4 || 0 === n ? Zg(t) : Zg.ceil(t);
  }

  function Ov(t, n) {
    return t = Iv(t), ev(Zg.count(sy(t), t) + (4 === sy(t).getDay()), n, 2);
  }

  function Uv(t) {
    return t.getDay();
  }

  function Bv(t, n) {
    return ev(Gg.count(sy(t) - 1, t), n, 2);
  }

  function Yv(t, n) {
    return ev(t.getFullYear() % 100, n, 2);
  }

  function Lv(t, n) {
    return ev((t = Iv(t)).getFullYear() % 100, n, 2);
  }

  function jv(t, n) {
    return ev(t.getFullYear() % 1e4, n, 4);
  }

  function $v(t, n) {
    var e = t.getDay();
    return ev((t = e >= 4 || 0 === e ? Zg(t) : Zg.ceil(t)).getFullYear() % 1e4, n, 4);
  }

  function Hv(t) {
    var n = t.getTimezoneOffset();
    return (n > 0 ? "-" : (n *= -1, "+")) + ev(n / 60 | 0, "0", 2) + ev(n % 60, "0", 2);
  }

  function Xv(t, n) {
    return ev(t.getUTCDate(), n, 2);
  }

  function Gv(t, n) {
    return ev(t.getUTCHours(), n, 2);
  }

  function Vv(t, n) {
    return ev(t.getUTCHours() % 12 || 12, n, 2);
  }

  function Wv(t, n) {
    return ev(1 + by.count(By(t), t), n, 3);
  }

  function Zv(t, n) {
    return ev(t.getUTCMilliseconds(), n, 3);
  }

  function Kv(t, n) {
    return Zv(t, n) + "000";
  }

  function Qv(t, n) {
    return ev(t.getUTCMonth() + 1, n, 2);
  }

  function Jv(t, n) {
    return ev(t.getUTCMinutes(), n, 2);
  }

  function t_(t, n) {
    return ev(t.getUTCSeconds(), n, 2);
  }

  function n_(t) {
    var n = t.getUTCDay();
    return 0 === n ? 7 : n;
  }

  function e_(t, n) {
    return ev(wy.count(By(t) - 1, t), n, 2);
  }

  function r_(t) {
    var n = t.getUTCDay();
    return n >= 4 || 0 === n ? Sy(t) : Sy.ceil(t);
  }

  function i_(t, n) {
    return t = r_(t), ev(Sy.count(By(t), t) + (4 === By(t).getUTCDay()), n, 2);
  }

  function o_(t) {
    return t.getUTCDay();
  }

  function a_(t, n) {
    return ev(My.count(By(t) - 1, t), n, 2);
  }

  function u_(t, n) {
    return ev(t.getUTCFullYear() % 100, n, 2);
  }

  function c_(t, n) {
    return ev((t = r_(t)).getUTCFullYear() % 100, n, 2);
  }

  function f_(t, n) {
    return ev(t.getUTCFullYear() % 1e4, n, 4);
  }

  function s_(t, n) {
    var e = t.getUTCDay();
    return ev((t = e >= 4 || 0 === e ? Sy(t) : Sy.ceil(t)).getUTCFullYear() % 1e4, n, 4);
  }

  function l_() {
    return "+0000";
  }

  function h_() {
    return "%";
  }

  function d_(t) {
    return +t;
  }

  function p_(t) {
    return Math.floor(+t / 1e3);
  }

  function g_(n) {
    return Ky = Zy(n), t.timeFormat = Ky.format, t.timeParse = Ky.parse, t.utcFormat = Ky.utcFormat, t.utcParse = Ky.utcParse, Ky;
  }

  t.timeFormat = void 0, t.timeParse = void 0, t.utcFormat = void 0, t.utcParse = void 0, g_({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: ["AM", "PM"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  });
  var y_ = "%Y-%m-%dT%H:%M:%S.%LZ";
  var v_ = Date.prototype.toISOString ? function (t) {
    return t.toISOString();
  } : t.utcFormat(y_),
      __ = v_;
  var b_ = +new Date("2000-01-01T00:00:00.000Z") ? function (t) {
    var n = new Date(t);
    return isNaN(n) ? null : n;
  } : t.utcParse(y_),
      m_ = b_;

  function x_(t) {
    return new Date(t);
  }

  function w_(t) {
    return t instanceof Date ? +t : +new Date(+t);
  }

  function M_(t, n, e, r, i, o, a, u, c, f) {
    var s = Jp(),
        l = s.invert,
        h = s.domain,
        d = f(".%L"),
        p = f(":%S"),
        g = f("%I:%M"),
        y = f("%I %p"),
        v = f("%a %d"),
        _ = f("%b %d"),
        b = f("%B"),
        m = f("%Y");

    function x(t) {
      return (c(t) < t ? d : u(t) < t ? p : a(t) < t ? g : o(t) < t ? y : r(t) < t ? i(t) < t ? v : _ : e(t) < t ? b : m)(t);
    }

    return s.invert = function (t) {
      return new Date(l(t));
    }, s.domain = function (t) {
      return arguments.length ? h(Array.from(t, w_)) : h().map(x_);
    }, s.ticks = function (n) {
      var e = h();
      return t(e[0], e[e.length - 1], null == n ? 10 : n);
    }, s.tickFormat = function (t, n) {
      return null == n ? x : f(n);
    }, s.nice = function (t) {
      var e = h();
      return t && "function" == typeof t.range || (t = n(e[0], e[e.length - 1], null == t ? 10 : t)), t ? h(eg(e, t)) : s;
    }, s.copy = function () {
      return Kp(s, M_(t, n, e, r, i, o, a, u, c, f));
    }, s;
  }

  function A_() {
    var t,
        n,
        e,
        r,
        i,
        o = 0,
        a = 1,
        u = Gp,
        c = !1;

    function f(n) {
      return null == n || isNaN(n = +n) ? i : u(0 === e ? .5 : (n = (r(n) - t) * e, c ? Math.max(0, Math.min(1, n)) : n));
    }

    function s(t) {
      return function (n) {
        var e, r;
        return arguments.length ? ([e, r] = n, u = t(e, r), f) : [u(0), u(1)];
      };
    }

    return f.domain = function (i) {
      return arguments.length ? ([o, a] = i, t = r(o = +o), n = r(a = +a), e = t === n ? 0 : 1 / (n - t), f) : [o, a];
    }, f.clamp = function (t) {
      return arguments.length ? (c = !!t, f) : c;
    }, f.interpolator = function (t) {
      return arguments.length ? (u = t, f) : u;
    }, f.range = s(Hr), f.rangeRound = s(Xr), f.unknown = function (t) {
      return arguments.length ? (i = t, f) : i;
    }, function (i) {
      return r = i, t = i(o), n = i(a), e = t === n ? 0 : 1 / (n - t), f;
    };
  }

  function T_(t, n) {
    return n.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown());
  }

  function S_() {
    var t = yg(A_());
    return t.copy = function () {
      return T_(t, S_()).exponent(t.exponent());
    }, Bp.apply(t, arguments);
  }

  function E_() {
    var t,
        n,
        e,
        r,
        i,
        o,
        a,
        u = 0,
        c = .5,
        f = 1,
        s = 1,
        l = Gp,
        h = !1;

    function d(t) {
      return isNaN(t = +t) ? a : (t = .5 + ((t = +o(t)) - n) * (s * t < s * n ? r : i), l(h ? Math.max(0, Math.min(1, t)) : t));
    }

    function p(t) {
      return function (n) {
        var e, r, i;
        return arguments.length ? ([e, r, i] = n, l = li(t, [e, r, i]), d) : [l(0), l(.5), l(1)];
      };
    }

    return d.domain = function (a) {
      return arguments.length ? ([u, c, f] = a, t = o(u = +u), n = o(c = +c), e = o(f = +f), r = t === n ? 0 : .5 / (n - t), i = n === e ? 0 : .5 / (e - n), s = n < t ? -1 : 1, d) : [u, c, f];
    }, d.clamp = function (t) {
      return arguments.length ? (h = !!t, d) : h;
    }, d.interpolator = function (t) {
      return arguments.length ? (l = t, d) : l;
    }, d.range = p(Hr), d.rangeRound = p(Xr), d.unknown = function (t) {
      return arguments.length ? (a = t, d) : a;
    }, function (a) {
      return o = a, t = a(u), n = a(c), e = a(f), r = t === n ? 0 : .5 / (n - t), i = n === e ? 0 : .5 / (e - n), s = n < t ? -1 : 1, d;
    };
  }

  function k_() {
    var t = yg(E_());
    return t.copy = function () {
      return T_(t, k_()).exponent(t.exponent());
    }, Bp.apply(t, arguments);
  }

  function N_(t) {
    for (var n = t.length / 6 | 0, e = new Array(n), r = 0; r < n;) e[r] = "#" + t.slice(6 * r, 6 * ++r);

    return e;
  }

  var C_ = N_("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
      P_ = N_("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),
      z_ = N_("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),
      D_ = N_("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),
      R_ = N_("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),
      F_ = N_("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),
      q_ = N_("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),
      I_ = N_("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),
      O_ = N_("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"),
      U_ = N_("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab"),
      B_ = t => Rr(t[t.length - 1]),
      Y_ = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(N_),
      L_ = B_(Y_),
      j_ = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(N_),
      $_ = B_(j_),
      H_ = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(N_),
      X_ = B_(H_),
      G_ = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(N_),
      V_ = B_(G_),
      W_ = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(N_),
      Z_ = B_(W_),
      K_ = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(N_),
      Q_ = B_(K_),
      J_ = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(N_),
      tb = B_(J_),
      nb = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(N_),
      eb = B_(nb),
      rb = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(N_),
      ib = B_(rb),
      ob = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(N_),
      ab = B_(ob),
      ub = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(N_),
      cb = B_(ub),
      fb = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(N_),
      sb = B_(fb),
      lb = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(N_),
      hb = B_(lb),
      db = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(N_),
      pb = B_(db),
      gb = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(N_),
      yb = B_(gb),
      vb = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(N_),
      _b = B_(vb),
      bb = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(N_),
      mb = B_(bb),
      xb = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(N_),
      wb = B_(xb),
      Mb = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(N_),
      Ab = B_(Mb),
      Tb = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(N_),
      Sb = B_(Tb),
      Eb = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(N_),
      kb = B_(Eb),
      Nb = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(N_),
      Cb = B_(Nb),
      Pb = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(N_),
      zb = B_(Pb),
      Db = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(N_),
      Rb = B_(Db),
      Fb = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(N_),
      qb = B_(Fb),
      Ib = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(N_),
      Ob = B_(Ib),
      Ub = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(N_),
      Bb = B_(Ub);

  var Yb = si(wr(300, .5, 0), wr(-240, .5, 1)),
      Lb = si(wr(-100, .75, .35), wr(80, 1.5, .8)),
      jb = si(wr(260, .75, .35), wr(80, 1.5, .8)),
      $b = wr();
  var Hb = Fe(),
      Xb = Math.PI / 3,
      Gb = 2 * Math.PI / 3;

  function Vb(t) {
    var n = t.length;
    return function (e) {
      return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
    };
  }

  var Wb = Vb(N_("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),
      Zb = Vb(N_("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
      Kb = Vb(N_("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
      Qb = Vb(N_("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

  function Jb(t) {
    return function () {
      return t;
    };
  }

  const tm = Math.abs,
        nm = Math.atan2,
        em = Math.cos,
        rm = Math.max,
        im = Math.min,
        om = Math.sin,
        am = Math.sqrt,
        um = 1e-12,
        cm = Math.PI,
        fm = cm / 2,
        sm = 2 * cm;

  function lm(t) {
    return t > 1 ? 0 : t < -1 ? cm : Math.acos(t);
  }

  function hm(t) {
    return t >= 1 ? fm : t <= -1 ? -fm : Math.asin(t);
  }

  function dm(t) {
    return t.innerRadius;
  }

  function pm(t) {
    return t.outerRadius;
  }

  function gm(t) {
    return t.startAngle;
  }

  function ym(t) {
    return t.endAngle;
  }

  function vm(t) {
    return t && t.padAngle;
  }

  function _m(t, n, e, r, i, o, a, u) {
    var c = e - t,
        f = r - n,
        s = a - i,
        l = u - o,
        h = l * c - s * f;
    if (!(h * h < um)) return [t + (h = (s * (n - o) - l * (t - i)) / h) * c, n + h * f];
  }

  function bm(t, n, e, r, i, o, a) {
    var u = t - e,
        c = n - r,
        f = (a ? o : -o) / am(u * u + c * c),
        s = f * c,
        l = -f * u,
        h = t + s,
        d = n + l,
        p = e + s,
        g = r + l,
        y = (h + p) / 2,
        v = (d + g) / 2,
        _ = p - h,
        b = g - d,
        m = _ * _ + b * b,
        x = i - o,
        w = h * g - p * d,
        M = (b < 0 ? -1 : 1) * am(rm(0, x * x * m - w * w)),
        A = (w * b - _ * M) / m,
        T = (-w * _ - b * M) / m,
        S = (w * b + _ * M) / m,
        E = (-w * _ + b * M) / m,
        k = A - y,
        N = T - v,
        C = S - y,
        P = E - v;

    return k * k + N * N > C * C + P * P && (A = S, T = E), {
      cx: A,
      cy: T,
      x01: -s,
      y01: -l,
      x11: A * (i / x - 1),
      y11: T * (i / x - 1)
    };
  }

  var mm = Array.prototype.slice;

  function xm(t) {
    return "object" == typeof t && "length" in t ? t : Array.from(t);
  }

  function wm(t) {
    this._context = t;
  }

  function Mm(t) {
    return new wm(t);
  }

  function Am(t) {
    return t[0];
  }

  function Tm(t) {
    return t[1];
  }

  function Sm(t, n) {
    var e = Jb(!0),
        r = null,
        i = Mm,
        o = null;

    function a(a) {
      var u,
          c,
          f,
          s = (a = xm(a)).length,
          l = !1;

      for (null == r && (o = i(f = Pa())), u = 0; u <= s; ++u) !(u < s && e(c = a[u], u, a)) === l && ((l = !l) ? o.lineStart() : o.lineEnd()), l && o.point(+t(c, u, a), +n(c, u, a));

      if (f) return o = null, f + "" || null;
    }

    return t = "function" == typeof t ? t : void 0 === t ? Am : Jb(t), n = "function" == typeof n ? n : void 0 === n ? Tm : Jb(n), a.x = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : Jb(+n), a) : t;
    }, a.y = function (t) {
      return arguments.length ? (n = "function" == typeof t ? t : Jb(+t), a) : n;
    }, a.defined = function (t) {
      return arguments.length ? (e = "function" == typeof t ? t : Jb(!!t), a) : e;
    }, a.curve = function (t) {
      return arguments.length ? (i = t, null != r && (o = i(r)), a) : i;
    }, a.context = function (t) {
      return arguments.length ? (null == t ? r = o = null : o = i(r = t), a) : r;
    }, a;
  }

  function Em(t, n, e) {
    var r = null,
        i = Jb(!0),
        o = null,
        a = Mm,
        u = null;

    function c(c) {
      var f,
          s,
          l,
          h,
          d,
          p = (c = xm(c)).length,
          g = !1,
          y = new Array(p),
          v = new Array(p);

      for (null == o && (u = a(d = Pa())), f = 0; f <= p; ++f) {
        if (!(f < p && i(h = c[f], f, c)) === g) if (g = !g) s = f, u.areaStart(), u.lineStart();else {
          for (u.lineEnd(), u.lineStart(), l = f - 1; l >= s; --l) u.point(y[l], v[l]);

          u.lineEnd(), u.areaEnd();
        }
        g && (y[f] = +t(h, f, c), v[f] = +n(h, f, c), u.point(r ? +r(h, f, c) : y[f], e ? +e(h, f, c) : v[f]));
      }

      if (d) return u = null, d + "" || null;
    }

    function f() {
      return Sm().defined(i).curve(a).context(o);
    }

    return t = "function" == typeof t ? t : void 0 === t ? Am : Jb(+t), n = "function" == typeof n ? n : Jb(void 0 === n ? 0 : +n), e = "function" == typeof e ? e : void 0 === e ? Tm : Jb(+e), c.x = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : Jb(+n), r = null, c) : t;
    }, c.x0 = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : Jb(+n), c) : t;
    }, c.x1 = function (t) {
      return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : Jb(+t), c) : r;
    }, c.y = function (t) {
      return arguments.length ? (n = "function" == typeof t ? t : Jb(+t), e = null, c) : n;
    }, c.y0 = function (t) {
      return arguments.length ? (n = "function" == typeof t ? t : Jb(+t), c) : n;
    }, c.y1 = function (t) {
      return arguments.length ? (e = null == t ? null : "function" == typeof t ? t : Jb(+t), c) : e;
    }, c.lineX0 = c.lineY0 = function () {
      return f().x(t).y(n);
    }, c.lineY1 = function () {
      return f().x(t).y(e);
    }, c.lineX1 = function () {
      return f().x(r).y(n);
    }, c.defined = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : Jb(!!t), c) : i;
    }, c.curve = function (t) {
      return arguments.length ? (a = t, null != o && (u = a(o)), c) : a;
    }, c.context = function (t) {
      return arguments.length ? (null == t ? o = u = null : u = a(o = t), c) : o;
    }, c;
  }

  function km(t, n) {
    return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
  }

  function Nm(t) {
    return t;
  }

  wm.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._point = 0;
    },
    lineEnd: function () {
      (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function (t, n) {
      switch (t = +t, n = +n, this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
          break;

        case 1:
          this._point = 2;

        default:
          this._context.lineTo(t, n);

      }
    }
  };
  var Cm = zm(Mm);

  function Pm(t) {
    this._curve = t;
  }

  function zm(t) {
    function n(n) {
      return new Pm(t(n));
    }

    return n._curve = t, n;
  }

  function Dm(t) {
    var n = t.curve;
    return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function (t) {
      return arguments.length ? n(zm(t)) : n()._curve;
    }, t;
  }

  function Rm() {
    return Dm(Sm().curve(Cm));
  }

  function Fm() {
    var t = Em().curve(Cm),
        n = t.curve,
        e = t.lineX0,
        r = t.lineX1,
        i = t.lineY0,
        o = t.lineY1;
    return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function () {
      return Dm(e());
    }, delete t.lineX0, t.lineEndAngle = function () {
      return Dm(r());
    }, delete t.lineX1, t.lineInnerRadius = function () {
      return Dm(i());
    }, delete t.lineY0, t.lineOuterRadius = function () {
      return Dm(o());
    }, delete t.lineY1, t.curve = function (t) {
      return arguments.length ? n(zm(t)) : n()._curve;
    }, t;
  }

  function qm(t, n) {
    return [(n = +n) * Math.cos(t -= Math.PI / 2), n * Math.sin(t)];
  }

  Pm.prototype = {
    areaStart: function () {
      this._curve.areaStart();
    },
    areaEnd: function () {
      this._curve.areaEnd();
    },
    lineStart: function () {
      this._curve.lineStart();
    },
    lineEnd: function () {
      this._curve.lineEnd();
    },
    point: function (t, n) {
      this._curve.point(n * Math.sin(t), n * -Math.cos(t));
    }
  };

  class Im {
    constructor(t, n) {
      this._context = t, this._x = n;
    }

    areaStart() {
      this._line = 0;
    }

    areaEnd() {
      this._line = NaN;
    }

    lineStart() {
      this._point = 0;
    }

    lineEnd() {
      (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    }

    point(t, n) {
      switch (t = +t, n = +n, this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
          break;

        case 1:
          this._point = 2;

        default:
          this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, n, t, n) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + n) / 2, t, this._y0, t, n);
      }

      this._x0 = t, this._y0 = n;
    }

  }

  class Om {
    constructor(t) {
      this._context = t;
    }

    lineStart() {
      this._point = 0;
    }

    lineEnd() {}

    point(t, n) {
      if (t = +t, n = +n, 0 == this._point++) this._x0 = t, this._y0 = n;else {
        const e = qm(this._x0, this._y0),
              r = qm(this._x0, this._y0 = (this._y0 + n) / 2),
              i = qm(t, this._y0),
              o = qm(t, n);
        this._context.moveTo(...e), this._context.bezierCurveTo(...r, ...i, ...o);
      }
    }

  }

  function Um(t) {
    return new Im(t, !0);
  }

  function Bm(t) {
    return new Im(t, !1);
  }

  function Ym(t) {
    return new Om(t);
  }

  function Lm(t) {
    return t.source;
  }

  function jm(t) {
    return t.target;
  }

  function $m(t) {
    let n = Lm,
        e = jm,
        r = Am,
        i = Tm,
        o = null,
        a = null;

    function u() {
      let u;
      const c = mm.call(arguments),
            f = n.apply(this, c),
            s = e.apply(this, c);
      if (null == o && (a = t(u = Pa())), a.lineStart(), c[0] = f, a.point(+r.apply(this, c), +i.apply(this, c)), c[0] = s, a.point(+r.apply(this, c), +i.apply(this, c)), a.lineEnd(), u) return a = null, u + "" || null;
    }

    return u.source = function (t) {
      return arguments.length ? (n = t, u) : n;
    }, u.target = function (t) {
      return arguments.length ? (e = t, u) : e;
    }, u.x = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : Jb(+t), u) : r;
    }, u.y = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : Jb(+t), u) : i;
    }, u.context = function (n) {
      return arguments.length ? (null == n ? o = a = null : a = t(o = n), u) : o;
    }, u;
  }

  const Hm = am(3);
  var Xm = {
    draw(t, n) {
      const e = .59436 * am(n + im(n / 28, .75)),
            r = e / 2,
            i = r * Hm;
      t.moveTo(0, e), t.lineTo(0, -e), t.moveTo(-i, -r), t.lineTo(i, r), t.moveTo(-i, r), t.lineTo(i, -r);
    }

  },
      Gm = {
    draw(t, n) {
      const e = am(n / cm);
      t.moveTo(e, 0), t.arc(0, 0, e, 0, sm);
    }

  },
      Vm = {
    draw(t, n) {
      const e = am(n / 5) / 2;
      t.moveTo(-3 * e, -e), t.lineTo(-e, -e), t.lineTo(-e, -3 * e), t.lineTo(e, -3 * e), t.lineTo(e, -e), t.lineTo(3 * e, -e), t.lineTo(3 * e, e), t.lineTo(e, e), t.lineTo(e, 3 * e), t.lineTo(-e, 3 * e), t.lineTo(-e, e), t.lineTo(-3 * e, e), t.closePath();
    }

  };
  const Wm = am(1 / 3),
        Zm = 2 * Wm;
  var Km = {
    draw(t, n) {
      const e = am(n / Zm),
            r = e * Wm;
      t.moveTo(0, -e), t.lineTo(r, 0), t.lineTo(0, e), t.lineTo(-r, 0), t.closePath();
    }

  },
      Qm = {
    draw(t, n) {
      const e = .62625 * am(n);
      t.moveTo(0, -e), t.lineTo(e, 0), t.lineTo(0, e), t.lineTo(-e, 0), t.closePath();
    }

  },
      Jm = {
    draw(t, n) {
      const e = .87559 * am(n - im(n / 7, 2));
      t.moveTo(-e, 0), t.lineTo(e, 0), t.moveTo(0, e), t.lineTo(0, -e);
    }

  },
      tx = {
    draw(t, n) {
      const e = am(n),
            r = -e / 2;
      t.rect(r, r, e, e);
    }

  },
      nx = {
    draw(t, n) {
      const e = .4431 * am(n);
      t.moveTo(e, e), t.lineTo(e, -e), t.lineTo(-e, -e), t.lineTo(-e, e), t.closePath();
    }

  };
  const ex = om(cm / 10) / om(7 * cm / 10),
        rx = om(sm / 10) * ex,
        ix = -em(sm / 10) * ex;
  var ox = {
    draw(t, n) {
      const e = am(.8908130915292852 * n),
            r = rx * e,
            i = ix * e;
      t.moveTo(0, -e), t.lineTo(r, i);

      for (let n = 1; n < 5; ++n) {
        const o = sm * n / 5,
              a = em(o),
              u = om(o);
        t.lineTo(u * e, -a * e), t.lineTo(a * r - u * i, u * r + a * i);
      }

      t.closePath();
    }

  };
  const ax = am(3);
  var ux = {
    draw(t, n) {
      const e = -am(n / (3 * ax));
      t.moveTo(0, 2 * e), t.lineTo(-ax * e, -e), t.lineTo(ax * e, -e), t.closePath();
    }

  };
  const cx = am(3);
  var fx = {
    draw(t, n) {
      const e = .6824 * am(n),
            r = e / 2,
            i = e * cx / 2;
      t.moveTo(0, -e), t.lineTo(i, r), t.lineTo(-i, r), t.closePath();
    }

  };
  const sx = -.5,
        lx = am(3) / 2,
        hx = 1 / am(12),
        dx = 3 * (hx / 2 + 1);
  var px = {
    draw(t, n) {
      const e = am(n / dx),
            r = e / 2,
            i = e * hx,
            o = r,
            a = e * hx + e,
            u = -o,
            c = a;
      t.moveTo(r, i), t.lineTo(o, a), t.lineTo(u, c), t.lineTo(sx * r - lx * i, lx * r + sx * i), t.lineTo(sx * o - lx * a, lx * o + sx * a), t.lineTo(sx * u - lx * c, lx * u + sx * c), t.lineTo(sx * r + lx * i, sx * i - lx * r), t.lineTo(sx * o + lx * a, sx * a - lx * o), t.lineTo(sx * u + lx * c, sx * c - lx * u), t.closePath();
    }

  },
      gx = {
    draw(t, n) {
      const e = .6189 * am(n - im(n / 6, 1.7));
      t.moveTo(-e, -e), t.lineTo(e, e), t.moveTo(-e, e), t.lineTo(e, -e);
    }

  };
  const yx = [Gm, Vm, Km, tx, ox, ux, px],
        vx = [Gm, Jm, gx, fx, Xm, nx, Qm];

  function _x() {}

  function bx(t, n, e) {
    t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6);
  }

  function mx(t) {
    this._context = t;
  }

  function xx(t) {
    this._context = t;
  }

  function wx(t) {
    this._context = t;
  }

  function Mx(t, n) {
    this._basis = new mx(t), this._beta = n;
  }

  mx.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
    },
    lineEnd: function () {
      switch (this._point) {
        case 3:
          bx(this, this._x1, this._y1);

        case 2:
          this._context.lineTo(this._x1, this._y1);

      }

      (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function (t, n) {
      switch (t = +t, n = +n, this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
          break;

        case 1:
          this._point = 2;
          break;

        case 2:
          this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);

        default:
          bx(this, t, n);
      }

      this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n;
    }
  }, xx.prototype = {
    areaStart: _x,
    areaEnd: _x,
    lineStart: function () {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
    },
    lineEnd: function () {
      switch (this._point) {
        case 1:
          this._context.moveTo(this._x2, this._y2), this._context.closePath();
          break;

        case 2:
          this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
          break;

        case 3:
          this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
      }
    },
    point: function (t, n) {
      switch (t = +t, n = +n, this._point) {
        case 0:
          this._point = 1, this._x2 = t, this._y2 = n;
          break;

        case 1:
          this._point = 2, this._x3 = t, this._y3 = n;
          break;

        case 2:
          this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
          break;

        default:
          bx(this, t, n);
      }

      this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n;
    }
  }, wx.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
    },
    lineEnd: function () {
      (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function (t, n) {
      switch (t = +t, n = +n, this._point) {
        case 0:
          this._point = 1;
          break;

        case 1:
          this._point = 2;
          break;

        case 2:
          this._point = 3;
          var e = (this._x0 + 4 * this._x1 + t) / 6,
              r = (this._y0 + 4 * this._y1 + n) / 6;
          this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
          break;

        case 3:
          this._point = 4;

        default:
          bx(this, t, n);
      }

      this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n;
    }
  }, Mx.prototype = {
    lineStart: function () {
      this._x = [], this._y = [], this._basis.lineStart();
    },
    lineEnd: function () {
      var t = this._x,
          n = this._y,
          e = t.length - 1;
      if (e > 0) for (var r, i = t[0], o = n[0], a = t[e] - i, u = n[e] - o, c = -1; ++c <= e;) r = c / e, this._basis.point(this._beta * t[c] + (1 - this._beta) * (i + r * a), this._beta * n[c] + (1 - this._beta) * (o + r * u));
      this._x = this._y = null, this._basis.lineEnd();
    },
    point: function (t, n) {
      this._x.push(+t), this._y.push(+n);
    }
  };

  var Ax = function t(n) {
    function e(t) {
      return 1 === n ? new mx(t) : new Mx(t, n);
    }

    return e.beta = function (n) {
      return t(+n);
    }, e;
  }(.85);

  function Tx(t, n, e) {
    t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2);
  }

  function Sx(t, n) {
    this._context = t, this._k = (1 - n) / 6;
  }

  Sx.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
    },
    lineEnd: function () {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x2, this._y2);

          break;

        case 3:
          Tx(this, this._x1, this._y1);
      }

      (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function (t, n) {
      switch (t = +t, n = +n, this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
          break;

        case 1:
          this._point = 2, this._x1 = t, this._y1 = n;
          break;

        case 2:
          this._point = 3;

        default:
          Tx(this, t, n);
      }

      this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
    }
  };

  var Ex = function t(n) {
    function e(t) {
      return new Sx(t, n);
    }

    return e.tension = function (n) {
      return t(+n);
    }, e;
  }(0);

  function kx(t, n) {
    this._context = t, this._k = (1 - n) / 6;
  }

  kx.prototype = {
    areaStart: _x,
    areaEnd: _x,
    lineStart: function () {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
    },
    lineEnd: function () {
      switch (this._point) {
        case 1:
          this._context.moveTo(this._x3, this._y3), this._context.closePath();
          break;

        case 2:
          this._context.lineTo(this._x3, this._y3), this._context.closePath();
          break;

        case 3:
          this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
      }
    },
    point: function (t, n) {
      switch (t = +t, n = +n, this._point) {
        case 0:
          this._point = 1, this._x3 = t, this._y3 = n;
          break;

        case 1:
          this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
          break;

        case 2:
          this._point = 3, this._x5 = t, this._y5 = n;
          break;

        default:
          Tx(this, t, n);
      }

      this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
    }
  };

  var Nx = function t(n) {
    function e(t) {
      return new kx(t, n);
    }

    return e.tension = function (n) {
      return t(+n);
    }, e;
  }(0);

  function Cx(t, n) {
    this._context = t, this._k = (1 - n) / 6;
  }

  Cx.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
    },
    lineEnd: function () {
      (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function (t, n) {
      switch (t = +t, n = +n, this._point) {
        case 0:
          this._point = 1;
          break;

        case 1:
          this._point = 2;
          break;

        case 2:
          this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
          break;

        case 3:
          this._point = 4;

        default:
          Tx(this, t, n);
      }

      this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
    }
  };

  var Px = function t(n) {
    function e(t) {
      return new Cx(t, n);
    }

    return e.tension = function (n) {
      return t(+n);
    }, e;
  }(0);

  function zx(t, n, e) {
    var r = t._x1,
        i = t._y1,
        o = t._x2,
        a = t._y2;

    if (t._l01_a > um) {
      var u = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
          c = 3 * t._l01_a * (t._l01_a + t._l12_a);
      r = (r * u - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c, i = (i * u - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c;
    }

    if (t._l23_a > um) {
      var f = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
          s = 3 * t._l23_a * (t._l23_a + t._l12_a);
      o = (o * f + t._x1 * t._l23_2a - n * t._l12_2a) / s, a = (a * f + t._y1 * t._l23_2a - e * t._l12_2a) / s;
    }

    t._context.bezierCurveTo(r, i, o, a, t._x2, t._y2);
  }

  function Dx(t, n) {
    this._context = t, this._alpha = n;
  }

  Dx.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function () {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x2, this._y2);

          break;

        case 3:
          this.point(this._x2, this._y2);
      }

      (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function (t, n) {
      if (t = +t, n = +n, this._point) {
        var e = this._x2 - t,
            r = this._y2 - n;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha));
      }

      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
          break;

        case 1:
          this._point = 2;
          break;

        case 2:
          this._point = 3;

        default:
          zx(this, t, n);
      }

      this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
    }
  };

  var Rx = function t(n) {
    function e(t) {
      return n ? new Dx(t, n) : new Sx(t, 0);
    }

    return e.alpha = function (n) {
      return t(+n);
    }, e;
  }(.5);

  function Fx(t, n) {
    this._context = t, this._alpha = n;
  }

  Fx.prototype = {
    areaStart: _x,
    areaEnd: _x,
    lineStart: function () {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function () {
      switch (this._point) {
        case 1:
          this._context.moveTo(this._x3, this._y3), this._context.closePath();
          break;

        case 2:
          this._context.lineTo(this._x3, this._y3), this._context.closePath();
          break;

        case 3:
          this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
      }
    },
    point: function (t, n) {
      if (t = +t, n = +n, this._point) {
        var e = this._x2 - t,
            r = this._y2 - n;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha));
      }

      switch (this._point) {
        case 0:
          this._point = 1, this._x3 = t, this._y3 = n;
          break;

        case 1:
          this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
          break;

        case 2:
          this._point = 3, this._x5 = t, this._y5 = n;
          break;

        default:
          zx(this, t, n);
      }

      this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
    }
  };

  var qx = function t(n) {
    function e(t) {
      return n ? new Fx(t, n) : new kx(t, 0);
    }

    return e.alpha = function (n) {
      return t(+n);
    }, e;
  }(.5);

  function Ix(t, n) {
    this._context = t, this._alpha = n;
  }

  Ix.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function () {
      (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function (t, n) {
      if (t = +t, n = +n, this._point) {
        var e = this._x2 - t,
            r = this._y2 - n;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha));
      }

      switch (this._point) {
        case 0:
          this._point = 1;
          break;

        case 1:
          this._point = 2;
          break;

        case 2:
          this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
          break;

        case 3:
          this._point = 4;

        default:
          zx(this, t, n);
      }

      this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
    }
  };

  var Ox = function t(n) {
    function e(t) {
      return n ? new Ix(t, n) : new Cx(t, 0);
    }

    return e.alpha = function (n) {
      return t(+n);
    }, e;
  }(.5);

  function Ux(t) {
    this._context = t;
  }

  function Bx(t) {
    return t < 0 ? -1 : 1;
  }

  function Yx(t, n, e) {
    var r = t._x1 - t._x0,
        i = n - t._x1,
        o = (t._y1 - t._y0) / (r || i < 0 && -0),
        a = (e - t._y1) / (i || r < 0 && -0),
        u = (o * i + a * r) / (r + i);
    return (Bx(o) + Bx(a)) * Math.min(Math.abs(o), Math.abs(a), .5 * Math.abs(u)) || 0;
  }

  function Lx(t, n) {
    var e = t._x1 - t._x0;
    return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n;
  }

  function jx(t, n, e) {
    var r = t._x0,
        i = t._y0,
        o = t._x1,
        a = t._y1,
        u = (o - r) / 3;

    t._context.bezierCurveTo(r + u, i + u * n, o - u, a - u * e, o, a);
  }

  function $x(t) {
    this._context = t;
  }

  function Hx(t) {
    this._context = new Xx(t);
  }

  function Xx(t) {
    this._context = t;
  }

  function Gx(t) {
    this._context = t;
  }

  function Vx(t) {
    var n,
        e,
        r = t.length - 1,
        i = new Array(r),
        o = new Array(r),
        a = new Array(r);

    for (i[0] = 0, o[0] = 2, a[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n) i[n] = 1, o[n] = 4, a[n] = 4 * t[n] + 2 * t[n + 1];

    for (i[r - 1] = 2, o[r - 1] = 7, a[r - 1] = 8 * t[r - 1] + t[r], n = 1; n < r; ++n) e = i[n] / o[n - 1], o[n] -= e, a[n] -= e * a[n - 1];

    for (i[r - 1] = a[r - 1] / o[r - 1], n = r - 2; n >= 0; --n) i[n] = (a[n] - i[n + 1]) / o[n];

    for (o[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n) o[n] = 2 * t[n + 1] - i[n + 1];

    return [i, o];
  }

  function Wx(t, n) {
    this._context = t, this._t = n;
  }

  function Zx(t, n) {
    if ((i = t.length) > 1) for (var e, r, i, o = 1, a = t[n[0]], u = a.length; o < i; ++o) for (r = a, a = t[n[o]], e = 0; e < u; ++e) a[e][1] += a[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1];
  }

  function Kx(t) {
    for (var n = t.length, e = new Array(n); --n >= 0;) e[n] = n;

    return e;
  }

  function Qx(t, n) {
    return t[n];
  }

  function Jx(t) {
    const n = [];
    return n.key = t, n;
  }

  function tw(t) {
    var n = t.map(nw);
    return Kx(t).sort(function (t, e) {
      return n[t] - n[e];
    });
  }

  function nw(t) {
    for (var n, e = -1, r = 0, i = t.length, o = -1 / 0; ++e < i;) (n = +t[e][1]) > o && (o = n, r = e);

    return r;
  }

  function ew(t) {
    var n = t.map(rw);
    return Kx(t).sort(function (t, e) {
      return n[t] - n[e];
    });
  }

  function rw(t) {
    for (var n, e = 0, r = -1, i = t.length; ++r < i;) (n = +t[r][1]) && (e += n);

    return e;
  }

  Ux.prototype = {
    areaStart: _x,
    areaEnd: _x,
    lineStart: function () {
      this._point = 0;
    },
    lineEnd: function () {
      this._point && this._context.closePath();
    },
    point: function (t, n) {
      t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n));
    }
  }, $x.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
    },
    lineEnd: function () {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x1, this._y1);

          break;

        case 3:
          jx(this, this._t0, Lx(this, this._t0));
      }

      (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function (t, n) {
      var e = NaN;

      if (n = +n, (t = +t) !== this._x1 || n !== this._y1) {
        switch (this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
            break;

          case 1:
            this._point = 2;
            break;

          case 2:
            this._point = 3, jx(this, Lx(this, e = Yx(this, t, n)), e);
            break;

          default:
            jx(this, this._t0, e = Yx(this, t, n));
        }

        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e;
      }
    }
  }, (Hx.prototype = Object.create($x.prototype)).point = function (t, n) {
    $x.prototype.point.call(this, n, t);
  }, Xx.prototype = {
    moveTo: function (t, n) {
      this._context.moveTo(n, t);
    },
    closePath: function () {
      this._context.closePath();
    },
    lineTo: function (t, n) {
      this._context.lineTo(n, t);
    },
    bezierCurveTo: function (t, n, e, r, i, o) {
      this._context.bezierCurveTo(n, t, r, e, o, i);
    }
  }, Gx.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x = [], this._y = [];
    },
    lineEnd: function () {
      var t = this._x,
          n = this._y,
          e = t.length;
      if (e) if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e) this._context.lineTo(t[1], n[1]);else for (var r = Vx(t), i = Vx(n), o = 0, a = 1; a < e; ++o, ++a) this._context.bezierCurveTo(r[0][o], i[0][o], r[1][o], i[1][o], t[a], n[a]);
      (this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
    },
    point: function (t, n) {
      this._x.push(+t), this._y.push(+n);
    }
  }, Wx.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x = this._y = NaN, this._point = 0;
    },
    lineEnd: function () {
      0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
    },
    point: function (t, n) {
      switch (t = +t, n = +n, this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
          break;

        case 1:
          this._point = 2;

        default:
          if (this._t <= 0) this._context.lineTo(this._x, n), this._context.lineTo(t, n);else {
            var e = this._x * (1 - this._t) + t * this._t;
            this._context.lineTo(e, this._y), this._context.lineTo(e, n);
          }
      }

      this._x = t, this._y = n;
    }
  };

  var iw = t => () => t;

  function ow(t, {
    sourceEvent: n,
    target: e,
    transform: r,
    dispatch: i
  }) {
    Object.defineProperties(this, {
      type: {
        value: t,
        enumerable: !0,
        configurable: !0
      },
      sourceEvent: {
        value: n,
        enumerable: !0,
        configurable: !0
      },
      target: {
        value: e,
        enumerable: !0,
        configurable: !0
      },
      transform: {
        value: r,
        enumerable: !0,
        configurable: !0
      },
      _: {
        value: i
      }
    });
  }

  function aw(t, n, e) {
    this.k = t, this.x = n, this.y = e;
  }

  aw.prototype = {
    constructor: aw,
    scale: function (t) {
      return 1 === t ? this : new aw(this.k * t, this.x, this.y);
    },
    translate: function (t, n) {
      return 0 === t & 0 === n ? this : new aw(this.k, this.x + this.k * t, this.y + this.k * n);
    },
    apply: function (t) {
      return [t[0] * this.k + this.x, t[1] * this.k + this.y];
    },
    applyX: function (t) {
      return t * this.k + this.x;
    },
    applyY: function (t) {
      return t * this.k + this.y;
    },
    invert: function (t) {
      return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
    },
    invertX: function (t) {
      return (t - this.x) / this.k;
    },
    invertY: function (t) {
      return (t - this.y) / this.k;
    },
    rescaleX: function (t) {
      return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
    },
    rescaleY: function (t) {
      return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
    },
    toString: function () {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
  };
  var uw = new aw(1, 0, 0);

  function cw(t) {
    for (; !t.__zoom;) if (!(t = t.parentNode)) return uw;

    return t.__zoom;
  }

  function fw(t) {
    t.stopImmediatePropagation();
  }

  function sw(t) {
    t.preventDefault(), t.stopImmediatePropagation();
  }

  function lw(t) {
    return !(t.ctrlKey && "wheel" !== t.type || t.button);
  }

  function hw() {
    var t = this;
    return t instanceof SVGElement ? (t = t.ownerSVGElement || t).hasAttribute("viewBox") ? [[(t = t.viewBox.baseVal).x, t.y], [t.x + t.width, t.y + t.height]] : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]] : [[0, 0], [t.clientWidth, t.clientHeight]];
  }

  function dw() {
    return this.__zoom || uw;
  }

  function pw(t) {
    return -t.deltaY * (1 === t.deltaMode ? .05 : t.deltaMode ? 1 : .002) * (t.ctrlKey ? 10 : 1);
  }

  function gw() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }

  function yw(t, n, e) {
    var r = t.invertX(n[0][0]) - e[0][0],
        i = t.invertX(n[1][0]) - e[1][0],
        o = t.invertY(n[0][1]) - e[0][1],
        a = t.invertY(n[1][1]) - e[1][1];
    return t.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), a > o ? (o + a) / 2 : Math.min(0, o) || Math.max(0, a));
  }

  cw.prototype = aw.prototype, t.Adder = T, t.Delaunay = ku, t.FormatSpecifier = Rc, t.InternMap = InternMap, t.InternSet = InternSet, t.Node = Ed, t.Voronoi = wu, t.ZoomTransform = aw, t.active = function (t, n) {
    var e,
        r,
        i = t.__transition;
    if (i) for (r in n = null == n ? null : n + "", i) if ((e = i[r]).state > 1 && e.name === n) return new lo([[t]], Bo, n, +r);
    return null;
  }, t.arc = function () {
    var t = dm,
        n = pm,
        e = Jb(0),
        r = null,
        i = gm,
        o = ym,
        a = vm,
        u = null;

    function c() {
      var c,
          f,
          s = +t.apply(this, arguments),
          l = +n.apply(this, arguments),
          h = i.apply(this, arguments) - fm,
          d = o.apply(this, arguments) - fm,
          p = tm(d - h),
          g = d > h;
      if (u || (u = c = Pa()), l < s && (f = l, l = s, s = f), l > um) {
        if (p > sm - um) u.moveTo(l * em(h), l * om(h)), u.arc(0, 0, l, h, d, !g), s > um && (u.moveTo(s * em(d), s * om(d)), u.arc(0, 0, s, d, h, g));else {
          var y,
              v,
              _ = h,
              b = d,
              m = h,
              x = d,
              w = p,
              M = p,
              A = a.apply(this, arguments) / 2,
              T = A > um && (r ? +r.apply(this, arguments) : am(s * s + l * l)),
              S = im(tm(l - s) / 2, +e.apply(this, arguments)),
              E = S,
              k = S;

          if (T > um) {
            var N = hm(T / s * om(A)),
                C = hm(T / l * om(A));
            (w -= 2 * N) > um ? (m += N *= g ? 1 : -1, x -= N) : (w = 0, m = x = (h + d) / 2), (M -= 2 * C) > um ? (_ += C *= g ? 1 : -1, b -= C) : (M = 0, _ = b = (h + d) / 2);
          }

          var P = l * em(_),
              z = l * om(_),
              D = s * em(x),
              R = s * om(x);

          if (S > um) {
            var F,
                q = l * em(b),
                I = l * om(b),
                O = s * em(m),
                U = s * om(m);

            if (p < cm && (F = _m(P, z, O, U, q, I, D, R))) {
              var B = P - F[0],
                  Y = z - F[1],
                  L = q - F[0],
                  j = I - F[1],
                  $ = 1 / om(lm((B * L + Y * j) / (am(B * B + Y * Y) * am(L * L + j * j))) / 2),
                  H = am(F[0] * F[0] + F[1] * F[1]);
              E = im(S, (s - H) / ($ - 1)), k = im(S, (l - H) / ($ + 1));
            }
          }

          M > um ? k > um ? (y = bm(O, U, P, z, l, k, g), v = bm(q, I, D, R, l, k, g), u.moveTo(y.cx + y.x01, y.cy + y.y01), k < S ? u.arc(y.cx, y.cy, k, nm(y.y01, y.x01), nm(v.y01, v.x01), !g) : (u.arc(y.cx, y.cy, k, nm(y.y01, y.x01), nm(y.y11, y.x11), !g), u.arc(0, 0, l, nm(y.cy + y.y11, y.cx + y.x11), nm(v.cy + v.y11, v.cx + v.x11), !g), u.arc(v.cx, v.cy, k, nm(v.y11, v.x11), nm(v.y01, v.x01), !g))) : (u.moveTo(P, z), u.arc(0, 0, l, _, b, !g)) : u.moveTo(P, z), s > um && w > um ? E > um ? (y = bm(D, R, q, I, s, -E, g), v = bm(P, z, O, U, s, -E, g), u.lineTo(y.cx + y.x01, y.cy + y.y01), E < S ? u.arc(y.cx, y.cy, E, nm(y.y01, y.x01), nm(v.y01, v.x01), !g) : (u.arc(y.cx, y.cy, E, nm(y.y01, y.x01), nm(y.y11, y.x11), !g), u.arc(0, 0, s, nm(y.cy + y.y11, y.cx + y.x11), nm(v.cy + v.y11, v.cx + v.x11), g), u.arc(v.cx, v.cy, E, nm(v.y11, v.x11), nm(v.y01, v.x01), !g))) : u.arc(0, 0, s, x, m, g) : u.lineTo(D, R);
        }
      } else u.moveTo(0, 0);
      if (u.closePath(), c) return u = null, c + "" || null;
    }

    return c.centroid = function () {
      var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
          r = (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 - cm / 2;
      return [em(r) * e, om(r) * e];
    }, c.innerRadius = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : Jb(+n), c) : t;
    }, c.outerRadius = function (t) {
      return arguments.length ? (n = "function" == typeof t ? t : Jb(+t), c) : n;
    }, c.cornerRadius = function (t) {
      return arguments.length ? (e = "function" == typeof t ? t : Jb(+t), c) : e;
    }, c.padRadius = function (t) {
      return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : Jb(+t), c) : r;
    }, c.startAngle = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : Jb(+t), c) : i;
    }, c.endAngle = function (t) {
      return arguments.length ? (o = "function" == typeof t ? t : Jb(+t), c) : o;
    }, c.padAngle = function (t) {
      return arguments.length ? (a = "function" == typeof t ? t : Jb(+t), c) : a;
    }, c.context = function (t) {
      return arguments.length ? (u = null == t ? null : t, c) : u;
    }, c;
  }, t.area = Em, t.areaRadial = Fm, t.ascending = n, t.autoType = function (t) {
    for (var n in t) {
      var e,
          r,
          i = t[n].trim();
      if (i) {
        if ("true" === i) i = !0;else if ("false" === i) i = !1;else if ("NaN" === i) i = NaN;else if (isNaN(e = +i)) {
          if (!(r = i.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/))) continue;
          Qu && r[4] && !r[7] && (i = i.replace(/-/g, "/").replace(/T/, " ")), i = new Date(i);
        } else i = e;
      } else i = null;
      t[n] = i;
    }

    return t;
  }, t.axisBottom = function (t) {
    return Et(3, t);
  }, t.axisLeft = function (t) {
    return Et(4, t);
  }, t.axisRight = function (t) {
    return Et(2, t);
  }, t.axisTop = function (t) {
    return Et(1, t);
  }, t.bin = Q, t.bisect = l, t.bisectCenter = s, t.bisectLeft = f, t.bisectRight = c, t.bisector = r, t.blob = function (t, n) {
    return fetch(t, n).then(Ju);
  }, t.blur = function (t, n) {
    if (!((n = +n) >= 0)) throw new RangeError("invalid r");
    let e = t.length;
    if (!((e = Math.floor(e)) >= 0)) throw new RangeError("invalid length");
    if (!e || !n) return t;
    const r = v(n),
          i = t.slice();
    return r(t, i, 0, e, 1), r(i, t, 0, e, 1), r(t, i, 0, e, 1), t;
  }, t.blur2 = h, t.blurImage = d, t.brush = function () {
    return pa(ea);
  }, t.brushSelection = function (t) {
    var n = t.__brush;
    return n ? n.dim.output(n.selection) : null;
  }, t.brushX = function () {
    return pa(ta);
  }, t.brushY = function () {
    return pa(na);
  }, t.buffer = function (t, n) {
    return fetch(t, n).then(tc);
  }, t.chord = function () {
    return Ta(!1, !1);
  }, t.chordDirected = function () {
    return Ta(!0, !1);
  }, t.chordTranspose = function () {
    return Ta(!1, !0);
  }, t.cluster = function () {
    var t = _d,
        n = 1,
        e = 1,
        r = !1;

    function i(i) {
      var o,
          a = 0;
      i.eachAfter(function (n) {
        var e = n.children;
        e ? (n.x = function (t) {
          return t.reduce(bd, 0) / t.length;
        }(e), n.y = function (t) {
          return 1 + t.reduce(md, 0);
        }(e)) : (n.x = o ? a += t(n, o) : 0, n.y = 0, o = n);
      });

      var u = function (t) {
        for (var n; n = t.children;) t = n[0];

        return t;
      }(i),
          c = function (t) {
        for (var n; n = t.children;) t = n[n.length - 1];

        return t;
      }(i),
          f = u.x - t(u, c) / 2,
          s = c.x + t(c, u) / 2;

      return i.eachAfter(r ? function (t) {
        t.x = (t.x - i.x) * n, t.y = (i.y - t.y) * e;
      } : function (t) {
        t.x = (t.x - f) / (s - f) * n, t.y = (1 - (i.y ? t.y / i.y : 1)) * e;
      });
    }

    return i.separation = function (n) {
      return arguments.length ? (t = n, i) : t;
    }, i.size = function (t) {
      return arguments.length ? (r = !1, n = +t[0], e = +t[1], i) : r ? null : [n, e];
    }, i.nodeSize = function (t) {
      return arguments.length ? (r = !0, n = +t[0], e = +t[1], i) : r ? [n, e] : null;
    }, i;
  }, t.color = Pe, t.contourDensity = function () {
    var t = Ka,
        n = Qa,
        e = Ja,
        r = 960,
        i = 500,
        o = 20,
        a = 2,
        u = 3 * o,
        c = r + 2 * u >> a,
        f = i + 2 * u >> a,
        s = $a(20);

    function l(r) {
      var i = new Float32Array(c * f),
          s = Math.pow(2, -a),
          l = -1;

      for (const o of r) {
        var d = (t(o, ++l, r) + u) * s,
            p = (n(o, l, r) + u) * s,
            g = +e(o, l, r);

        if (d >= 0 && d < c && p >= 0 && p < f) {
          var y = Math.floor(d),
              v = Math.floor(p),
              _ = d - y - .5,
              b = p - v - .5;

          i[y + v * c] += (1 - _) * (1 - b) * g, i[y + 1 + v * c] += _ * (1 - b) * g, i[y + 1 + (v + 1) * c] += _ * b * g, i[y + (v + 1) * c] += (1 - _) * b * g;
        }
      }

      return h({
        data: i,
        width: c,
        height: f
      }, o * s), i;
    }

    function d(t) {
      var n = l(t),
          e = s(n),
          r = Math.pow(2, 2 * a);
      return Array.isArray(e) || (e = G(Number.MIN_VALUE, J(n) / r, e)), Za().size([c, f]).thresholds(e.map(t => t * r))(n).map((t, n) => (t.value = +e[n], p(t)));
    }

    function p(t) {
      return t.coordinates.forEach(g), t;
    }

    function g(t) {
      t.forEach(y);
    }

    function y(t) {
      t.forEach(v);
    }

    function v(t) {
      t[0] = t[0] * Math.pow(2, a) - u, t[1] = t[1] * Math.pow(2, a) - u;
    }

    function _() {
      return c = r + 2 * (u = 3 * o) >> a, f = i + 2 * u >> a, d;
    }

    return d.contours = function (t) {
      var n = l(t),
          e = Za().size([c, f]),
          r = Math.pow(2, 2 * a),
          i = t => {
        t = +t;
        var i = p(e.contour(n, t * r));
        return i.value = t, i;
      };

      return Object.defineProperty(i, "max", {
        get: () => J(n) / r
      }), i;
    }, d.x = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : $a(+n), d) : t;
    }, d.y = function (t) {
      return arguments.length ? (n = "function" == typeof t ? t : $a(+t), d) : n;
    }, d.weight = function (t) {
      return arguments.length ? (e = "function" == typeof t ? t : $a(+t), d) : e;
    }, d.size = function (t) {
      if (!arguments.length) return [r, i];
      var n = +t[0],
          e = +t[1];
      if (!(n >= 0 && e >= 0)) throw new Error("invalid size");
      return r = n, i = e, _();
    }, d.cellSize = function (t) {
      if (!arguments.length) return 1 << a;
      if (!((t = +t) >= 1)) throw new Error("invalid cell size");
      return a = Math.floor(Math.log(t) / Math.LN2), _();
    }, d.thresholds = function (t) {
      return arguments.length ? (s = "function" == typeof t ? t : Array.isArray(t) ? $a(La.call(t)) : $a(t), d) : s;
    }, d.bandwidth = function (t) {
      if (!arguments.length) return Math.sqrt(o * (o + 1));
      if (!((t = +t) >= 0)) throw new Error("invalid bandwidth");
      return o = (Math.sqrt(4 * t * t + 1) - 1) / 2, _();
    }, d;
  }, t.contours = Za, t.count = _, t.create = function (t) {
    return Wn(Ut(t).call(document.documentElement));
  }, t.creator = Ut, t.cross = function (...t) {
    const n = "function" == typeof t[t.length - 1] && function (t) {
      return n => t(...n);
    }(t.pop()),
          e = (t = t.map(x)).map(b),
          r = t.length - 1,
          i = new Array(r + 1).fill(0),
          o = [];

    if (r < 0 || e.some(m)) return o;

    for (;;) {
      o.push(i.map((n, e) => t[e][n]));
      let a = r;

      for (; ++i[a] === e[a];) {
        if (0 === a) return n ? o.map(n) : o;
        i[a--] = 0;
      }
    }
  }, t.csv = ic, t.csvFormat = Uu, t.csvFormatBody = Bu, t.csvFormatRow = Lu, t.csvFormatRows = Yu, t.csvFormatValue = ju, t.csvParse = Iu, t.csvParseRows = Ou, t.cubehelix = wr, t.cumsum = function (t, n) {
    var e = 0,
        r = 0;
    return Float64Array.from(t, void 0 === n ? t => e += +t || 0 : i => e += +n(i, r++, t) || 0);
  }, t.curveBasis = function (t) {
    return new mx(t);
  }, t.curveBasisClosed = function (t) {
    return new xx(t);
  }, t.curveBasisOpen = function (t) {
    return new wx(t);
  }, t.curveBumpX = Um, t.curveBumpY = Bm, t.curveBundle = Ax, t.curveCardinal = Ex, t.curveCardinalClosed = Nx, t.curveCardinalOpen = Px, t.curveCatmullRom = Rx, t.curveCatmullRomClosed = qx, t.curveCatmullRomOpen = Ox, t.curveLinear = Mm, t.curveLinearClosed = function (t) {
    return new Ux(t);
  }, t.curveMonotoneX = function (t) {
    return new $x(t);
  }, t.curveMonotoneY = function (t) {
    return new Hx(t);
  }, t.curveNatural = function (t) {
    return new Gx(t);
  }, t.curveStep = function (t) {
    return new Wx(t, .5);
  }, t.curveStepAfter = function (t) {
    return new Wx(t, 1);
  }, t.curveStepBefore = function (t) {
    return new Wx(t, 0);
  }, t.descending = e, t.deviation = M, t.difference = function (t, ...n) {
    t = new InternSet(t);

    for (const e of n) for (const n of e) t.delete(n);

    return t;
  }, t.disjoint = function (t, n) {
    const e = n[Symbol.iterator](),
          r = new InternSet();

    for (const n of t) {
      if (r.has(n)) return !1;
      let t, i;

      for (; ({
        value: t,
        done: i
      } = e.next()) && !i;) {
        if (Object.is(n, t)) return !1;
        r.add(t);
      }
    }

    return !0;
  }, t.dispatch = Nt, t.drag = function () {
    var t,
        n,
        e,
        r,
        i = fe,
        o = se,
        a = le,
        u = he,
        c = {},
        f = Nt("start", "drag", "end"),
        s = 0,
        l = 0;

    function h(t) {
      t.on("mousedown.drag", d).filter(u).on("touchstart.drag", y).on("touchmove.drag", v, ne).on("touchend.drag touchcancel.drag", _).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }

    function d(a, u) {
      if (!r && i.call(this, a, u)) {
        var c = b(this, o.call(this, a, u), a, u, "mouse");
        c && (Wn(a.view).on("mousemove.drag", p, ee).on("mouseup.drag", g, ee), oe(a.view), re(a), e = !1, t = a.clientX, n = a.clientY, c("start", a));
      }
    }

    function p(r) {
      if (ie(r), !e) {
        var i = r.clientX - t,
            o = r.clientY - n;
        e = i * i + o * o > l;
      }

      c.mouse("drag", r);
    }

    function g(t) {
      Wn(t.view).on("mousemove.drag mouseup.drag", null), ae(t.view, e), ie(t), c.mouse("end", t);
    }

    function y(t, n) {
      if (i.call(this, t, n)) {
        var e,
            r,
            a = t.changedTouches,
            u = o.call(this, t, n),
            c = a.length;

        for (e = 0; e < c; ++e) (r = b(this, u, t, n, a[e].identifier, a[e])) && (re(t), r("start", t, a[e]));
      }
    }

    function v(t) {
      var n,
          e,
          r = t.changedTouches,
          i = r.length;

      for (n = 0; n < i; ++n) (e = c[r[n].identifier]) && (ie(t), e("drag", t, r[n]));
    }

    function _(t) {
      var n,
          e,
          i = t.changedTouches,
          o = i.length;

      for (r && clearTimeout(r), r = setTimeout(function () {
        r = null;
      }, 500), n = 0; n < o; ++n) (e = c[i[n].identifier]) && (re(t), e("end", t, i[n]));
    }

    function b(t, n, e, r, i, o) {
      var u,
          l,
          d,
          p = f.copy(),
          g = te(o || e, n);
      if (null != (d = a.call(t, new ce("beforestart", {
        sourceEvent: e,
        target: h,
        identifier: i,
        active: s,
        x: g[0],
        y: g[1],
        dx: 0,
        dy: 0,
        dispatch: p
      }), r))) return u = d.x - g[0] || 0, l = d.y - g[1] || 0, function e(o, a, f) {
        var y,
            v = g;

        switch (o) {
          case "start":
            c[i] = e, y = s++;
            break;

          case "end":
            delete c[i], --s;

          case "drag":
            g = te(f || a, n), y = s;
        }

        p.call(o, t, new ce(o, {
          sourceEvent: a,
          subject: d,
          target: h,
          identifier: i,
          active: y,
          x: g[0] + u,
          y: g[1] + l,
          dx: g[0] - v[0],
          dy: g[1] - v[1],
          dispatch: p
        }), r);
      };
    }

    return h.filter = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : ue(!!t), h) : i;
    }, h.container = function (t) {
      return arguments.length ? (o = "function" == typeof t ? t : ue(t), h) : o;
    }, h.subject = function (t) {
      return arguments.length ? (a = "function" == typeof t ? t : ue(t), h) : a;
    }, h.touchable = function (t) {
      return arguments.length ? (u = "function" == typeof t ? t : ue(!!t), h) : u;
    }, h.on = function () {
      var t = f.on.apply(f, arguments);
      return t === f ? h : t;
    }, h.clickDistance = function (t) {
      return arguments.length ? (l = (t = +t) * t, h) : Math.sqrt(l);
    }, h;
  }, t.dragDisable = oe, t.dragEnable = ae, t.dsv = function (t, n, e, r) {
    3 === arguments.length && "function" == typeof e && (r = e, e = void 0);
    var i = Fu(t);
    return ec(n, e).then(function (t) {
      return i.parse(t, r);
    });
  }, t.dsvFormat = Fu, t.easeBack = Do, t.easeBackIn = Po, t.easeBackInOut = Do, t.easeBackOut = zo, t.easeBounce = No, t.easeBounceIn = function (t) {
    return 1 - No(1 - t);
  }, t.easeBounceInOut = function (t) {
    return ((t *= 2) <= 1 ? 1 - No(1 - t) : No(t - 1) + 1) / 2;
  }, t.easeBounceOut = No, t.easeCircle = So, t.easeCircleIn = function (t) {
    return 1 - Math.sqrt(1 - t * t);
  }, t.easeCircleInOut = So, t.easeCircleOut = function (t) {
    return Math.sqrt(1 - --t * t);
  }, t.easeCubic = vo, t.easeCubicIn = function (t) {
    return t * t * t;
  }, t.easeCubicInOut = vo, t.easeCubicOut = function (t) {
    return --t * t * t + 1;
  }, t.easeElastic = qo, t.easeElasticIn = Fo, t.easeElasticInOut = Io, t.easeElasticOut = qo, t.easeExp = To, t.easeExpIn = function (t) {
    return Ao(1 - +t);
  }, t.easeExpInOut = To, t.easeExpOut = function (t) {
    return 1 - Ao(t);
  }, t.easeLinear = t => +t, t.easePoly = mo, t.easePolyIn = _o, t.easePolyInOut = mo, t.easePolyOut = bo, t.easeQuad = yo, t.easeQuadIn = function (t) {
    return t * t;
  }, t.easeQuadInOut = yo, t.easeQuadOut = function (t) {
    return t * (2 - t);
  }, t.easeSin = Mo, t.easeSinIn = function (t) {
    return 1 == +t ? 1 : 1 - Math.cos(t * wo);
  }, t.easeSinInOut = Mo, t.easeSinOut = function (t) {
    return Math.sin(t * wo);
  }, t.every = function (t, n) {
    if ("function" != typeof n) throw new TypeError("test is not a function");
    let e = -1;

    for (const r of t) if (!n(r, ++e, t)) return !1;

    return !0;
  }, t.extent = A, t.fcumsum = function (t, n) {
    const e = new T();
    let r = -1;
    return Float64Array.from(t, void 0 === n ? t => e.add(+t || 0) : i => e.add(+n(i, ++r, t) || 0));
  }, t.filter = function (t, n) {
    if ("function" != typeof n) throw new TypeError("test is not a function");
    const e = [];
    let r = -1;

    for (const i of t) n(i, ++r, t) && e.push(i);

    return e;
  }, t.flatGroup = function (t, ...n) {
    return D(z(t, ...n), n);
  }, t.flatRollup = function (t, n, ...e) {
    return D(F(t, n, ...e), e);
  }, t.forceCenter = function (t, n) {
    var e,
        r = 1;

    function i() {
      var i,
          o,
          a = e.length,
          u = 0,
          c = 0;

      for (i = 0; i < a; ++i) u += (o = e[i]).x, c += o.y;

      for (u = (u / a - t) * r, c = (c / a - n) * r, i = 0; i < a; ++i) (o = e[i]).x -= u, o.y -= c;
    }

    return null == t && (t = 0), null == n && (n = 0), i.initialize = function (t) {
      e = t;
    }, i.x = function (n) {
      return arguments.length ? (t = +n, i) : t;
    }, i.y = function (t) {
      return arguments.length ? (n = +t, i) : n;
    }, i.strength = function (t) {
      return arguments.length ? (r = +t, i) : r;
    }, i;
  }, t.forceCollide = function (t) {
    var n,
        e,
        r,
        i = 1,
        o = 1;

    function a() {
      for (var t, a, c, f, s, l, h, d = n.length, p = 0; p < o; ++p) for (a = gc(n, xc, wc).visitAfter(u), t = 0; t < d; ++t) c = n[t], l = e[c.index], h = l * l, f = c.x + c.vx, s = c.y + c.vy, a.visit(g);

      function g(t, n, e, o, a) {
        var u = t.data,
            d = t.r,
            p = l + d;
        if (!u) return n > f + p || o < f - p || e > s + p || a < s - p;

        if (u.index > c.index) {
          var g = f - u.x - u.vx,
              y = s - u.y - u.vy,
              v = g * g + y * y;
          v < p * p && (0 === g && (v += (g = mc(r)) * g), 0 === y && (v += (y = mc(r)) * y), v = (p - (v = Math.sqrt(v))) / v * i, c.vx += (g *= v) * (p = (d *= d) / (h + d)), c.vy += (y *= v) * p, u.vx -= g * (p = 1 - p), u.vy -= y * p);
        }
      }
    }

    function u(t) {
      if (t.data) return t.r = e[t.data.index];

      for (var n = t.r = 0; n < 4; ++n) t[n] && t[n].r > t.r && (t.r = t[n].r);
    }

    function c() {
      if (n) {
        var r,
            i,
            o = n.length;

        for (e = new Array(o), r = 0; r < o; ++r) i = n[r], e[i.index] = +t(i, r, n);
      }
    }

    return "function" != typeof t && (t = bc(null == t ? 1 : +t)), a.initialize = function (t, e) {
      n = t, r = e, c();
    }, a.iterations = function (t) {
      return arguments.length ? (o = +t, a) : o;
    }, a.strength = function (t) {
      return arguments.length ? (i = +t, a) : i;
    }, a.radius = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : bc(+n), c(), a) : t;
    }, a;
  }, t.forceLink = function (t) {
    var n,
        e,
        r,
        i,
        o,
        a,
        u = Mc,
        c = function (t) {
      return 1 / Math.min(i[t.source.index], i[t.target.index]);
    },
        f = bc(30),
        s = 1;

    function l(r) {
      for (var i = 0, u = t.length; i < s; ++i) for (var c, f, l, h, d, p, g, y = 0; y < u; ++y) f = (c = t[y]).source, h = (l = c.target).x + l.vx - f.x - f.vx || mc(a), d = l.y + l.vy - f.y - f.vy || mc(a), h *= p = ((p = Math.sqrt(h * h + d * d)) - e[y]) / p * r * n[y], d *= p, l.vx -= h * (g = o[y]), l.vy -= d * g, f.vx += h * (g = 1 - g), f.vy += d * g;
    }

    function h() {
      if (r) {
        var a,
            c,
            f = r.length,
            s = t.length,
            l = new Map(r.map((t, n) => [u(t, n, r), t]));

        for (a = 0, i = new Array(f); a < s; ++a) (c = t[a]).index = a, "object" != typeof c.source && (c.source = Ac(l, c.source)), "object" != typeof c.target && (c.target = Ac(l, c.target)), i[c.source.index] = (i[c.source.index] || 0) + 1, i[c.target.index] = (i[c.target.index] || 0) + 1;

        for (a = 0, o = new Array(s); a < s; ++a) c = t[a], o[a] = i[c.source.index] / (i[c.source.index] + i[c.target.index]);

        n = new Array(s), d(), e = new Array(s), p();
      }
    }

    function d() {
      if (r) for (var e = 0, i = t.length; e < i; ++e) n[e] = +c(t[e], e, t);
    }

    function p() {
      if (r) for (var n = 0, i = t.length; n < i; ++n) e[n] = +f(t[n], n, t);
    }

    return null == t && (t = []), l.initialize = function (t, n) {
      r = t, a = n, h();
    }, l.links = function (n) {
      return arguments.length ? (t = n, h(), l) : t;
    }, l.id = function (t) {
      return arguments.length ? (u = t, l) : u;
    }, l.iterations = function (t) {
      return arguments.length ? (s = +t, l) : s;
    }, l.strength = function (t) {
      return arguments.length ? (c = "function" == typeof t ? t : bc(+t), d(), l) : c;
    }, l.distance = function (t) {
      return arguments.length ? (f = "function" == typeof t ? t : bc(+t), p(), l) : f;
    }, l;
  }, t.forceManyBody = function () {
    var t,
        n,
        e,
        r,
        i,
        o = bc(-30),
        a = 1,
        u = 1 / 0,
        c = .81;

    function f(e) {
      var i,
          o = t.length,
          a = gc(t, Sc, Ec).visitAfter(l);

      for (r = e, i = 0; i < o; ++i) n = t[i], a.visit(h);
    }

    function s() {
      if (t) {
        var n,
            e,
            r = t.length;

        for (i = new Array(r), n = 0; n < r; ++n) e = t[n], i[e.index] = +o(e, n, t);
      }
    }

    function l(t) {
      var n,
          e,
          r,
          o,
          a,
          u = 0,
          c = 0;

      if (t.length) {
        for (r = o = a = 0; a < 4; ++a) (n = t[a]) && (e = Math.abs(n.value)) && (u += n.value, c += e, r += e * n.x, o += e * n.y);

        t.x = r / c, t.y = o / c;
      } else {
        (n = t).x = n.data.x, n.y = n.data.y;

        do {
          u += i[n.data.index];
        } while (n = n.next);
      }

      t.value = u;
    }

    function h(t, o, f, s) {
      if (!t.value) return !0;
      var l = t.x - n.x,
          h = t.y - n.y,
          d = s - o,
          p = l * l + h * h;
      if (d * d / c < p) return p < u && (0 === l && (p += (l = mc(e)) * l), 0 === h && (p += (h = mc(e)) * h), p < a && (p = Math.sqrt(a * p)), n.vx += l * t.value * r / p, n.vy += h * t.value * r / p), !0;

      if (!(t.length || p >= u)) {
        (t.data !== n || t.next) && (0 === l && (p += (l = mc(e)) * l), 0 === h && (p += (h = mc(e)) * h), p < a && (p = Math.sqrt(a * p)));

        do {
          t.data !== n && (d = i[t.data.index] * r / p, n.vx += l * d, n.vy += h * d);
        } while (t = t.next);
      }
    }

    return f.initialize = function (n, r) {
      t = n, e = r, s();
    }, f.strength = function (t) {
      return arguments.length ? (o = "function" == typeof t ? t : bc(+t), s(), f) : o;
    }, f.distanceMin = function (t) {
      return arguments.length ? (a = t * t, f) : Math.sqrt(a);
    }, f.distanceMax = function (t) {
      return arguments.length ? (u = t * t, f) : Math.sqrt(u);
    }, f.theta = function (t) {
      return arguments.length ? (c = t * t, f) : Math.sqrt(c);
    }, f;
  }, t.forceRadial = function (t, n, e) {
    var r,
        i,
        o,
        a = bc(.1);

    function u(t) {
      for (var a = 0, u = r.length; a < u; ++a) {
        var c = r[a],
            f = c.x - n || 1e-6,
            s = c.y - e || 1e-6,
            l = Math.sqrt(f * f + s * s),
            h = (o[a] - l) * i[a] * t / l;
        c.vx += f * h, c.vy += s * h;
      }
    }

    function c() {
      if (r) {
        var n,
            e = r.length;

        for (i = new Array(e), o = new Array(e), n = 0; n < e; ++n) o[n] = +t(r[n], n, r), i[n] = isNaN(o[n]) ? 0 : +a(r[n], n, r);
      }
    }

    return "function" != typeof t && (t = bc(+t)), null == n && (n = 0), null == e && (e = 0), u.initialize = function (t) {
      r = t, c();
    }, u.strength = function (t) {
      return arguments.length ? (a = "function" == typeof t ? t : bc(+t), c(), u) : a;
    }, u.radius = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : bc(+n), c(), u) : t;
    }, u.x = function (t) {
      return arguments.length ? (n = +t, u) : n;
    }, u.y = function (t) {
      return arguments.length ? (e = +t, u) : e;
    }, u;
  }, t.forceSimulation = function (t) {
    var n,
        e = 1,
        r = .001,
        i = 1 - Math.pow(r, 1 / 300),
        o = 0,
        a = .6,
        u = new Map(),
        c = Ti(l),
        f = Nt("tick", "end"),
        s = function () {
      let t = 1;
      return () => (t = (1664525 * t + 1013904223) % Tc) / Tc;
    }();

    function l() {
      h(), f.call("tick", n), e < r && (c.stop(), f.call("end", n));
    }

    function h(r) {
      var c,
          f,
          s = t.length;
      void 0 === r && (r = 1);

      for (var l = 0; l < r; ++l) for (e += (o - e) * i, u.forEach(function (t) {
        t(e);
      }), c = 0; c < s; ++c) null == (f = t[c]).fx ? f.x += f.vx *= a : (f.x = f.fx, f.vx = 0), null == f.fy ? f.y += f.vy *= a : (f.y = f.fy, f.vy = 0);

      return n;
    }

    function d() {
      for (var n, e = 0, r = t.length; e < r; ++e) {
        if ((n = t[e]).index = e, null != n.fx && (n.x = n.fx), null != n.fy && (n.y = n.fy), isNaN(n.x) || isNaN(n.y)) {
          var i = 10 * Math.sqrt(.5 + e),
              o = e * kc;
          n.x = i * Math.cos(o), n.y = i * Math.sin(o);
        }

        (isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0);
      }
    }

    function p(n) {
      return n.initialize && n.initialize(t, s), n;
    }

    return null == t && (t = []), d(), n = {
      tick: h,
      restart: function () {
        return c.restart(l), n;
      },
      stop: function () {
        return c.stop(), n;
      },
      nodes: function (e) {
        return arguments.length ? (t = e, d(), u.forEach(p), n) : t;
      },
      alpha: function (t) {
        return arguments.length ? (e = +t, n) : e;
      },
      alphaMin: function (t) {
        return arguments.length ? (r = +t, n) : r;
      },
      alphaDecay: function (t) {
        return arguments.length ? (i = +t, n) : +i;
      },
      alphaTarget: function (t) {
        return arguments.length ? (o = +t, n) : o;
      },
      velocityDecay: function (t) {
        return arguments.length ? (a = 1 - t, n) : 1 - a;
      },
      randomSource: function (t) {
        return arguments.length ? (s = t, u.forEach(p), n) : s;
      },
      force: function (t, e) {
        return arguments.length > 1 ? (null == e ? u.delete(t) : u.set(t, p(e)), n) : u.get(t);
      },
      find: function (n, e, r) {
        var i,
            o,
            a,
            u,
            c,
            f = 0,
            s = t.length;

        for (null == r ? r = 1 / 0 : r *= r, f = 0; f < s; ++f) (a = (i = n - (u = t[f]).x) * i + (o = e - u.y) * o) < r && (c = u, r = a);

        return c;
      },
      on: function (t, e) {
        return arguments.length > 1 ? (f.on(t, e), n) : f.on(t);
      }
    };
  }, t.forceX = function (t) {
    var n,
        e,
        r,
        i = bc(.1);

    function o(t) {
      for (var i, o = 0, a = n.length; o < a; ++o) (i = n[o]).vx += (r[o] - i.x) * e[o] * t;
    }

    function a() {
      if (n) {
        var o,
            a = n.length;

        for (e = new Array(a), r = new Array(a), o = 0; o < a; ++o) e[o] = isNaN(r[o] = +t(n[o], o, n)) ? 0 : +i(n[o], o, n);
      }
    }

    return "function" != typeof t && (t = bc(null == t ? 0 : +t)), o.initialize = function (t) {
      n = t, a();
    }, o.strength = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : bc(+t), a(), o) : i;
    }, o.x = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : bc(+n), a(), o) : t;
    }, o;
  }, t.forceY = function (t) {
    var n,
        e,
        r,
        i = bc(.1);

    function o(t) {
      for (var i, o = 0, a = n.length; o < a; ++o) (i = n[o]).vy += (r[o] - i.y) * e[o] * t;
    }

    function a() {
      if (n) {
        var o,
            a = n.length;

        for (e = new Array(a), r = new Array(a), o = 0; o < a; ++o) e[o] = isNaN(r[o] = +t(n[o], o, n)) ? 0 : +i(n[o], o, n);
      }
    }

    return "function" != typeof t && (t = bc(null == t ? 0 : +t)), o.initialize = function (t) {
      n = t, a();
    }, o.strength = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : bc(+t), a(), o) : i;
    }, o.y = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : bc(+n), a(), o) : t;
    }, o;
  }, t.formatDefaultLocale = Lc, t.formatLocale = Yc, t.formatSpecifier = Dc, t.fsum = function (t, n) {
    const e = new T();
    if (void 0 === n) for (let n of t) (n = +n) && e.add(n);else {
      let r = -1;

      for (let i of t) (i = +n(i, ++r, t)) && e.add(i);
    }
    return +e;
  }, t.geoAlbers = Zh, t.geoAlbersUsa = function () {
    var t,
        n,
        e,
        r,
        i,
        o,
        a = Zh(),
        u = Wh().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
        c = Wh().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
        f = {
      point: function (t, n) {
        o = [t, n];
      }
    };

    function s(t) {
      var n = t[0],
          a = t[1];
      return o = null, e.point(n, a), o || (r.point(n, a), o) || (i.point(n, a), o);
    }

    function l() {
      return t = n = null, s;
    }

    return s.invert = function (t) {
      var n = a.scale(),
          e = a.translate(),
          r = (t[0] - e[0]) / n,
          i = (t[1] - e[1]) / n;
      return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? u : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? c : a).invert(t);
    }, s.stream = function (e) {
      return t && n === e ? t : (r = [a.stream(n = e), u.stream(e), c.stream(e)], i = r.length, t = {
        point: function (t, n) {
          for (var e = -1; ++e < i;) r[e].point(t, n);
        },
        sphere: function () {
          for (var t = -1; ++t < i;) r[t].sphere();
        },
        lineStart: function () {
          for (var t = -1; ++t < i;) r[t].lineStart();
        },
        lineEnd: function () {
          for (var t = -1; ++t < i;) r[t].lineEnd();
        },
        polygonStart: function () {
          for (var t = -1; ++t < i;) r[t].polygonStart();
        },
        polygonEnd: function () {
          for (var t = -1; ++t < i;) r[t].polygonEnd();
        }
      });
      var r, i;
    }, s.precision = function (t) {
      return arguments.length ? (a.precision(t), u.precision(t), c.precision(t), l()) : a.precision();
    }, s.scale = function (t) {
      return arguments.length ? (a.scale(t), u.scale(.35 * t), c.scale(t), s.translate(a.translate())) : a.scale();
    }, s.translate = function (t) {
      if (!arguments.length) return a.translate();
      var n = a.scale(),
          o = +t[0],
          s = +t[1];
      return e = a.translate(t).clipExtent([[o - .455 * n, s - .238 * n], [o + .455 * n, s + .238 * n]]).stream(f), r = u.translate([o - .307 * n, s + .201 * n]).clipExtent([[o - .425 * n + Xc, s + .12 * n + Xc], [o - .214 * n - Xc, s + .234 * n - Xc]]).stream(f), i = c.translate([o - .205 * n, s + .212 * n]).clipExtent([[o - .214 * n + Xc, s + .166 * n + Xc], [o - .115 * n - Xc, s + .234 * n - Xc]]).stream(f), l();
    }, s.fitExtent = function (t, n) {
      return Ih(s, t, n);
    }, s.fitSize = function (t, n) {
      return Oh(s, t, n);
    }, s.fitWidth = function (t, n) {
      return Uh(s, t, n);
    }, s.fitHeight = function (t, n) {
      return Bh(s, t, n);
    }, s.scale(1070);
  }, t.geoArea = function (t) {
    return Yf = new T(), Mf(t, Lf), 2 * Yf;
  }, t.geoAzimuthalEqualArea = function () {
    return Hh(Jh).scale(124.75).clipAngle(179.999);
  }, t.geoAzimuthalEqualAreaRaw = Jh, t.geoAzimuthalEquidistant = function () {
    return Hh(td).scale(79.4188).clipAngle(179.999);
  }, t.geoAzimuthalEquidistantRaw = td, t.geoBounds = function (t) {
    var n, e, r, i, o, a, u;

    if (zf = Pf = -(Nf = Cf = 1 / 0), Of = [], Mf(t, ys), e = Of.length) {
      for (Of.sort(Ts), n = 1, o = [r = Of[0]]; n < e; ++n) Ss(r, (i = Of[n])[0]) || Ss(r, i[1]) ? (As(r[0], i[1]) > As(r[0], r[1]) && (r[1] = i[1]), As(i[0], r[1]) > As(r[0], r[1]) && (r[0] = i[0])) : o.push(r = i);

      for (a = -1 / 0, n = 0, r = o[e = o.length - 1]; n <= e; r = i, ++n) i = o[n], (u = As(r[1], i[0])) > a && (a = u, Nf = i[0], Pf = r[1]);
    }

    return Of = Uf = null, Nf === 1 / 0 || Cf === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[Nf, Cf], [Pf, zf]];
  }, t.geoCentroid = function (t) {
    ts = ns = es = rs = is = os = as = us = 0, cs = new T(), fs = new T(), ss = new T(), Mf(t, Es);
    var n = +cs,
        e = +fs,
        r = +ss,
        i = uf(n, e, r);
    return i < Gc && (n = os, e = as, r = us, ns < Xc && (n = es, e = rs, r = is), (i = uf(n, e, r)) < Gc) ? [NaN, NaN] : [ef(e, n) * Qc, gf(r / i) * Qc];
  }, t.geoCircle = function () {
    var t,
        n,
        e = Os([0, 0]),
        r = Os(90),
        i = Os(6),
        o = {
      point: function (e, r) {
        t.push(e = n(e, r)), e[0] *= Qc, e[1] *= Qc;
      }
    };

    function a() {
      var a = e.apply(this, arguments),
          u = r.apply(this, arguments) * Jc,
          c = i.apply(this, arguments) * Jc;
      return t = [], n = Ys(-a[0] * Jc, -a[1] * Jc, 0).invert, Xs(o, u, c, 1), a = {
        type: "Polygon",
        coordinates: [t]
      }, t = n = null, a;
    }

    return a.center = function (t) {
      return arguments.length ? (e = "function" == typeof t ? t : Os([+t[0], +t[1]]), a) : e;
    }, a.radius = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : Os(+t), a) : r;
    }, a.precision = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : Os(+t), a) : i;
    }, a;
  }, t.geoClipAntimeridian = il, t.geoClipCircle = ol, t.geoClipExtent = function () {
    var t,
        n,
        e,
        r = 0,
        i = 0,
        o = 960,
        a = 500;
    return e = {
      stream: function (e) {
        return t && n === e ? t : t = hl(r, i, o, a)(n = e);
      },
      extent: function (u) {
        return arguments.length ? (r = +u[0][0], i = +u[0][1], o = +u[1][0], a = +u[1][1], t = n = null, e) : [[r, i], [o, a]];
      }
    };
  }, t.geoClipRectangle = hl, t.geoConicConformal = function () {
    return Gh(id).scale(109.5).parallels([30, 30]);
  }, t.geoConicConformalRaw = id, t.geoConicEqualArea = Wh, t.geoConicEqualAreaRaw = Vh, t.geoConicEquidistant = function () {
    return Gh(ad).scale(131.154).center([0, 13.9389]);
  }, t.geoConicEquidistantRaw = ad, t.geoContains = function (t, n) {
    return (t && xl.hasOwnProperty(t.type) ? xl[t.type] : Ml)(t, n);
  }, t.geoDistance = ml, t.geoEqualEarth = function () {
    return Hh(hd).scale(177.158);
  }, t.geoEqualEarthRaw = hd, t.geoEquirectangular = function () {
    return Hh(od).scale(152.63);
  }, t.geoEquirectangularRaw = od, t.geoGnomonic = function () {
    return Hh(dd).scale(144.049).clipAngle(60);
  }, t.geoGnomonicRaw = dd, t.geoGraticule = Pl, t.geoGraticule10 = function () {
    return Pl()();
  }, t.geoIdentity = function () {
    var t,
        n,
        e,
        r,
        i,
        o,
        a,
        u = 1,
        c = 0,
        f = 0,
        s = 1,
        l = 1,
        h = 0,
        d = null,
        p = 1,
        g = 1,
        y = Rh({
      point: function (t, n) {
        var e = b([t, n]);
        this.stream.point(e[0], e[1]);
      }
    }),
        v = ql;

    function _() {
      return p = u * s, g = u * l, o = a = null, b;
    }

    function b(e) {
      var r = e[0] * p,
          i = e[1] * g;

      if (h) {
        var o = i * t - r * n;
        r = r * t + i * n, i = o;
      }

      return [r + c, i + f];
    }

    return b.invert = function (e) {
      var r = e[0] - c,
          i = e[1] - f;

      if (h) {
        var o = i * t + r * n;
        r = r * t - i * n, i = o;
      }

      return [r / p, i / g];
    }, b.stream = function (t) {
      return o && a === t ? o : o = y(v(a = t));
    }, b.postclip = function (t) {
      return arguments.length ? (v = t, d = e = r = i = null, _()) : v;
    }, b.clipExtent = function (t) {
      return arguments.length ? (v = null == t ? (d = e = r = i = null, ql) : hl(d = +t[0][0], e = +t[0][1], r = +t[1][0], i = +t[1][1]), _()) : null == d ? null : [[d, e], [r, i]];
    }, b.scale = function (t) {
      return arguments.length ? (u = +t, _()) : u;
    }, b.translate = function (t) {
      return arguments.length ? (c = +t[0], f = +t[1], _()) : [c, f];
    }, b.angle = function (e) {
      return arguments.length ? (n = sf(h = e % 360 * Jc), t = rf(h), _()) : h * Qc;
    }, b.reflectX = function (t) {
      return arguments.length ? (s = t ? -1 : 1, _()) : s < 0;
    }, b.reflectY = function (t) {
      return arguments.length ? (l = t ? -1 : 1, _()) : l < 0;
    }, b.fitExtent = function (t, n) {
      return Ih(b, t, n);
    }, b.fitSize = function (t, n) {
      return Oh(b, t, n);
    }, b.fitWidth = function (t, n) {
      return Uh(b, t, n);
    }, b.fitHeight = function (t, n) {
      return Bh(b, t, n);
    }, b;
  }, t.geoInterpolate = function (t, n) {
    var e = t[0] * Jc,
        r = t[1] * Jc,
        i = n[0] * Jc,
        o = n[1] * Jc,
        a = rf(r),
        u = sf(r),
        c = rf(o),
        f = sf(o),
        s = a * rf(e),
        l = a * sf(e),
        h = c * rf(i),
        d = c * sf(i),
        p = 2 * gf(hf(yf(o - r) + a * c * yf(i - e))),
        g = sf(p),
        y = p ? function (t) {
      var n = sf(t *= p) / g,
          e = sf(p - t) / g,
          r = e * s + n * h,
          i = e * l + n * d,
          o = e * u + n * f;
      return [ef(i, r) * Qc, ef(o, hf(r * r + i * i)) * Qc];
    } : function () {
      return [e * Qc, r * Qc];
    };
    return y.distance = p, y;
  }, t.geoLength = vl, t.geoMercator = function () {
    return ed(nd).scale(961 / Kc);
  }, t.geoMercatorRaw = nd, t.geoNaturalEarth1 = function () {
    return Hh(pd).scale(175.295);
  }, t.geoNaturalEarth1Raw = pd, t.geoOrthographic = function () {
    return Hh(gd).scale(249.5).clipAngle(90.000001);
  }, t.geoOrthographicRaw = gd, t.geoPath = function (t, n) {
    var e,
        r,
        i = 4.5;

    function o(t) {
      return t && ("function" == typeof i && r.pointRadius(+i.apply(this, arguments)), Mf(t, e(r))), r.result();
    }

    return o.area = function (t) {
      return Mf(t, e($l)), $l.result();
    }, o.measure = function (t) {
      return Mf(t, e(Ph)), Ph.result();
    }, o.bounds = function (t) {
      return Mf(t, e(th)), th.result();
    }, o.centroid = function (t) {
      return Mf(t, e(mh)), mh.result();
    }, o.projection = function (n) {
      return arguments.length ? (e = null == n ? (t = null, ql) : (t = n).stream, o) : t;
    }, o.context = function (t) {
      return arguments.length ? (r = null == t ? (n = null, new zh()) : new xh(n = t), "function" != typeof i && r.pointRadius(i), o) : n;
    }, o.pointRadius = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : (r.pointRadius(+t), +t), o) : i;
    }, o.projection(t).context(n);
  }, t.geoProjection = Hh, t.geoProjectionMutator = Xh, t.geoRotation = Hs, t.geoStereographic = function () {
    return Hh(yd).scale(250).clipAngle(142);
  }, t.geoStereographicRaw = yd, t.geoStream = Mf, t.geoTransform = function (t) {
    return {
      stream: Rh(t)
    };
  }, t.geoTransverseMercator = function () {
    var t = ed(vd),
        n = t.center,
        e = t.rotate;
    return t.center = function (t) {
      return arguments.length ? n([-t[1], t[0]]) : [(t = n())[1], -t[0]];
    }, t.rotate = function (t) {
      return arguments.length ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : [(t = e())[0], t[1], t[2] - 90];
    }, e([0, 0, 90]).scale(159.155);
  }, t.geoTransverseMercatorRaw = vd, t.gray = function (t, n) {
    return new ir(t, 0, 0, null == n ? 1 : n);
  }, t.greatest = ot, t.greatestIndex = function (t, e = n) {
    if (1 === e.length) return tt(t, e);
    let r,
        i = -1,
        o = -1;

    for (const n of t) ++o, (i < 0 ? 0 === e(n, n) : e(n, r) > 0) && (r = n, i = o);

    return i;
  }, t.group = P, t.groupSort = function (t, e, r) {
    return (2 !== e.length ? U(R(t, e, r), ([t, e], [r, i]) => n(e, i) || n(t, r)) : U(P(t, r), ([t, r], [i, o]) => e(r, o) || n(t, i))).map(([t]) => t);
  }, t.groups = z, t.hcl = sr, t.hierarchy = wd, t.histogram = Q, t.hsl = $e, t.html = fc, t.image = function (t, n) {
    return new Promise(function (e, r) {
      var i = new Image();

      for (var o in n) i[o] = n[o];

      i.onerror = r, i.onload = function () {
        e(i);
      }, i.src = t;
    });
  }, t.index = function (t, ...n) {
    return I(t, C, q, n);
  }, t.indexes = function (t, ...n) {
    return I(t, Array.from, q, n);
  }, t.interpolate = Hr, t.interpolateArray = function (t, n) {
    return (Ir(n) ? qr : Or)(t, n);
  }, t.interpolateBasis = Tr, t.interpolateBasisClosed = Sr, t.interpolateBlues = Cb, t.interpolateBrBG = L_, t.interpolateBuGn = ab, t.interpolateBuPu = cb, t.interpolateCividis = function (t) {
    return t = Math.max(0, Math.min(1, t)), "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - t * (35.34 - t * (2381.73 - t * (6402.7 - t * (7024.72 - 2710.57 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + t * (170.73 + t * (52.82 - t * (131.46 - t * (176.58 - 67.37 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + t * (442.36 - t * (2482.43 - t * (6167.24 - t * (6614.94 - 2475.67 * t))))))) + ")";
  }, t.interpolateCool = jb, t.interpolateCubehelix = fi, t.interpolateCubehelixDefault = Yb, t.interpolateCubehelixLong = si, t.interpolateDate = Ur, t.interpolateDiscrete = function (t) {
    var n = t.length;
    return function (e) {
      return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
    };
  }, t.interpolateGnBu = sb, t.interpolateGreens = zb, t.interpolateGreys = Rb, t.interpolateHcl = ai, t.interpolateHclLong = ui, t.interpolateHsl = ri, t.interpolateHslLong = ii, t.interpolateHue = function (t, n) {
    var e = Nr(+t, +n);
    return function (t) {
      var n = e(t);
      return n - 360 * Math.floor(n / 360);
    };
  }, t.interpolateInferno = Kb, t.interpolateLab = function (t, n) {
    var e = Pr((t = rr(t)).l, (n = rr(n)).l),
        r = Pr(t.a, n.a),
        i = Pr(t.b, n.b),
        o = Pr(t.opacity, n.opacity);
    return function (n) {
      return t.l = e(n), t.a = r(n), t.b = i(n), t.opacity = o(n), t + "";
    };
  }, t.interpolateMagma = Zb, t.interpolateNumber = Br, t.interpolateNumberArray = qr, t.interpolateObject = Yr, t.interpolateOrRd = hb, t.interpolateOranges = Bb, t.interpolatePRGn = $_, t.interpolatePiYG = X_, t.interpolatePlasma = Qb, t.interpolatePuBu = yb, t.interpolatePuBuGn = pb, t.interpolatePuOr = V_, t.interpolatePuRd = _b, t.interpolatePurples = qb, t.interpolateRainbow = function (t) {
    (t < 0 || t > 1) && (t -= Math.floor(t));
    var n = Math.abs(t - .5);
    return $b.h = 360 * t - 100, $b.s = 1.5 - 1.5 * n, $b.l = .8 - .9 * n, $b + "";
  }, t.interpolateRdBu = Z_, t.interpolateRdGy = Q_, t.interpolateRdPu = mb, t.interpolateRdYlBu = tb, t.interpolateRdYlGn = eb, t.interpolateReds = Ob, t.interpolateRgb = zr, t.interpolateRgbBasis = Rr, t.interpolateRgbBasisClosed = Fr, t.interpolateRound = Xr, t.interpolateSinebow = function (t) {
    var n;
    return t = (.5 - t) * Math.PI, Hb.r = 255 * (n = Math.sin(t)) * n, Hb.g = 255 * (n = Math.sin(t + Xb)) * n, Hb.b = 255 * (n = Math.sin(t + Gb)) * n, Hb + "";
  }, t.interpolateSpectral = ib, t.interpolateString = $r, t.interpolateTransformCss = Qr, t.interpolateTransformSvg = Jr, t.interpolateTurbo = function (t) {
    return t = Math.max(0, Math.min(1, t)), "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + t * (1172.33 - t * (10793.56 - t * (33300.12 - t * (38394.49 - 14825.05 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + t * (557.33 + t * (1225.33 - t * (3574.96 - t * (1073.77 + 707.56 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + t * (3211.1 - t * (15327.97 - t * (27814 - t * (22569.18 - 6838.66 * t))))))) + ")";
  }, t.interpolateViridis = Wb, t.interpolateWarm = Lb, t.interpolateYlGn = Ab, t.interpolateYlGnBu = wb, t.interpolateYlOrBr = Sb, t.interpolateYlOrRd = kb, t.interpolateZoom = ni, t.interrupt = Ii, t.intersection = function (t, ...n) {
    t = new InternSet(t), n = n.map(vt);

    t: for (const e of t) for (const r of n) if (!r.has(e)) {
      t.delete(e);
      continue t;
    }

    return t;
  }, t.interval = function (t, n, e) {
    var r = new Ai(),
        i = n;
    return null == n ? (r.restart(t, n, e), r) : (r._restart = r.restart, r.restart = function (t, n, e) {
      n = +n, e = null == e ? wi() : +e, r._restart(function o(a) {
        a += i, r._restart(o, i += n, e), t(a);
      }, n, e);
    }, r.restart(t, n, e), r);
  }, t.isoFormat = __, t.isoParse = m_, t.json = function (t, n) {
    return fetch(t, n).then(ac);
  }, t.lab = rr, t.lch = function (t, n, e, r) {
    return 1 === arguments.length ? fr(t) : new lr(e, n, t, null == r ? 1 : r);
  }, t.least = function (t, e = n) {
    let r,
        i = !1;

    if (1 === e.length) {
      let o;

      for (const a of t) {
        const t = e(a);
        (i ? n(t, o) < 0 : 0 === n(t, t)) && (r = a, o = t, i = !0);
      }
    } else for (const n of t) (i ? e(n, r) < 0 : 0 === e(n, n)) && (r = n, i = !0);

    return r;
  }, t.leastIndex = ht, t.line = Sm, t.lineRadial = Rm, t.link = $m, t.linkHorizontal = function () {
    return $m(Um);
  }, t.linkRadial = function () {
    const t = $m(Ym);
    return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t;
  }, t.linkVertical = function () {
    return $m(Bm);
  }, t.local = Kn, t.map = function (t, n) {
    if ("function" != typeof t[Symbol.iterator]) throw new TypeError("values is not iterable");
    if ("function" != typeof n) throw new TypeError("mapper is not a function");
    return Array.from(t, (e, r) => n(e, r, t));
  }, t.matcher = Ht, t.max = J, t.maxIndex = tt, t.mean = function (t, n) {
    let e = 0,
        r = 0;
    if (void 0 === n) for (let n of t) null != n && (n = +n) >= n && (++e, r += n);else {
      let i = -1;

      for (let o of t) null != (o = n(o, ++i, t)) && (o = +o) >= o && (++e, r += o);
    }
    if (e) return r / e;
  }, t.median = function (t, n) {
    return at(t, .5, n);
  }, t.medianIndex = function (t, n) {
    return ct(t, .5, n);
  }, t.merge = ft, t.min = nt, t.minIndex = et, t.mode = function (t, n) {
    const e = new InternMap();
    if (void 0 === n) for (let n of t) null != n && n >= n && e.set(n, (e.get(n) || 0) + 1);else {
      let r = -1;

      for (let i of t) null != (i = n(i, ++r, t)) && i >= i && e.set(i, (e.get(i) || 0) + 1);
    }
    let r,
        i = 0;

    for (const [t, n] of e) n > i && (i = n, r = t);

    return r;
  }, t.namespace = qt, t.namespaces = Ft, t.nice = Z, t.now = wi, t.pack = function () {
    var t = null,
        n = 1,
        e = 1,
        r = Cd;

    function i(i) {
      const o = Dd();
      return i.x = n / 2, i.y = e / 2, t ? i.eachBefore(Vd(t)).eachAfter(Wd(r, .5, o)).eachBefore(Zd(1)) : i.eachBefore(Vd(Gd)).eachAfter(Wd(Cd, 1, o)).eachAfter(Wd(r, i.r / Math.min(n, e), o)).eachBefore(Zd(Math.min(n, e) / (2 * i.r))), i;
    }

    return i.radius = function (n) {
      return arguments.length ? (t = kd(n), i) : t;
    }, i.size = function (t) {
      return arguments.length ? (n = +t[0], e = +t[1], i) : [n, e];
    }, i.padding = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : Pd(+t), i) : r;
    }, i;
  }, t.packEnclose = function (t) {
    return Rd(t, Dd());
  }, t.packSiblings = function (t) {
    return Xd(t, Dd()), t;
  }, t.pairs = function (t, n = st) {
    const e = [];
    let r,
        i = !1;

    for (const o of t) i && e.push(n(r, o)), r = o, i = !0;

    return e;
  }, t.partition = function () {
    var t = 1,
        n = 1,
        e = 0,
        r = !1;

    function i(i) {
      var o = i.height + 1;
      return i.x0 = i.y0 = e, i.x1 = t, i.y1 = n / o, i.eachBefore(function (t, n) {
        return function (r) {
          r.children && Qd(r, r.x0, t * (r.depth + 1) / n, r.x1, t * (r.depth + 2) / n);
          var i = r.x0,
              o = r.y0,
              a = r.x1 - e,
              u = r.y1 - e;
          a < i && (i = a = (i + a) / 2), u < o && (o = u = (o + u) / 2), r.x0 = i, r.y0 = o, r.x1 = a, r.y1 = u;
        };
      }(n, o)), r && i.eachBefore(Kd), i;
    }

    return i.round = function (t) {
      return arguments.length ? (r = !!t, i) : r;
    }, i.size = function (e) {
      return arguments.length ? (t = +e[0], n = +e[1], i) : [t, n];
    }, i.padding = function (t) {
      return arguments.length ? (e = +t, i) : e;
    }, i;
  }, t.path = Pa, t.permute = O, t.pie = function () {
    var t = Nm,
        n = km,
        e = null,
        r = Jb(0),
        i = Jb(sm),
        o = Jb(0);

    function a(a) {
      var u,
          c,
          f,
          s,
          l,
          h = (a = xm(a)).length,
          d = 0,
          p = new Array(h),
          g = new Array(h),
          y = +r.apply(this, arguments),
          v = Math.min(sm, Math.max(-sm, i.apply(this, arguments) - y)),
          _ = Math.min(Math.abs(v) / h, o.apply(this, arguments)),
          b = _ * (v < 0 ? -1 : 1);

      for (u = 0; u < h; ++u) (l = g[p[u] = u] = +t(a[u], u, a)) > 0 && (d += l);

      for (null != n ? p.sort(function (t, e) {
        return n(g[t], g[e]);
      }) : null != e && p.sort(function (t, n) {
        return e(a[t], a[n]);
      }), u = 0, f = d ? (v - h * b) / d : 0; u < h; ++u, y = s) c = p[u], s = y + ((l = g[c]) > 0 ? l * f : 0) + b, g[c] = {
        data: a[c],
        index: u,
        value: l,
        startAngle: y,
        endAngle: s,
        padAngle: _
      };

      return g;
    }

    return a.value = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : Jb(+n), a) : t;
    }, a.sortValues = function (t) {
      return arguments.length ? (n = t, e = null, a) : n;
    }, a.sort = function (t) {
      return arguments.length ? (e = t, n = null, a) : e;
    }, a.startAngle = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : Jb(+t), a) : r;
    }, a.endAngle = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : Jb(+t), a) : i;
    }, a.padAngle = function (t) {
      return arguments.length ? (o = "function" == typeof t ? t : Jb(+t), a) : o;
    }, a;
  }, t.piecewise = li, t.pointRadial = qm, t.pointer = te, t.pointers = function (t, n) {
    return t.target && (t = Jn(t), void 0 === n && (n = t.currentTarget), t = t.touches || [t]), Array.from(t, t => te(t, n));
  }, t.polygonArea = function (t) {
    for (var n, e = -1, r = t.length, i = t[r - 1], o = 0; ++e < r;) n = i, i = t[e], o += n[1] * i[0] - n[0] * i[1];

    return o / 2;
  }, t.polygonCentroid = function (t) {
    for (var n, e, r = -1, i = t.length, o = 0, a = 0, u = t[i - 1], c = 0; ++r < i;) n = u, u = t[r], c += e = n[0] * u[1] - u[0] * n[1], o += (n[0] + u[0]) * e, a += (n[1] + u[1]) * e;

    return [o / (c *= 3), a / c];
  }, t.polygonContains = function (t, n) {
    for (var e, r, i = t.length, o = t[i - 1], a = n[0], u = n[1], c = o[0], f = o[1], s = !1, l = 0; l < i; ++l) e = (o = t[l])[0], (r = o[1]) > u != f > u && a < (c - e) * (u - r) / (f - r) + e && (s = !s), c = e, f = r;

    return s;
  }, t.polygonHull = function (t) {
    if ((e = t.length) < 3) return null;
    var n,
        e,
        r = new Array(e),
        i = new Array(e);

    for (n = 0; n < e; ++n) r[n] = [+t[n][0], +t[n][1], n];

    for (r.sort(_p), n = 0; n < e; ++n) i[n] = [r[n][0], -r[n][1]];

    var o = bp(r),
        a = bp(i),
        u = a[0] === o[0],
        c = a[a.length - 1] === o[o.length - 1],
        f = [];

    for (n = o.length - 1; n >= 0; --n) f.push(t[r[o[n]][2]]);

    for (n = +u; n < a.length - c; ++n) f.push(t[r[a[n]][2]]);

    return f;
  }, t.polygonLength = function (t) {
    for (var n, e, r = -1, i = t.length, o = t[i - 1], a = o[0], u = o[1], c = 0; ++r < i;) n = a, e = u, n -= a = (o = t[r])[0], e -= u = o[1], c += Math.hypot(n, e);

    return c;
  }, t.precisionFixed = jc, t.precisionPrefix = $c, t.precisionRound = Hc, t.quadtree = gc, t.quantile = at, t.quantileIndex = ct, t.quantileSorted = ut, t.quantize = function (t, n) {
    for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t(r / (n - 1));

    return e;
  }, t.quickselect = rt, t.radialArea = Fm, t.radialLine = Rm, t.randomBates = Sp, t.randomBernoulli = Np, t.randomBeta = zp, t.randomBinomial = Dp, t.randomCauchy = Fp, t.randomExponential = Ep, t.randomGamma = Pp, t.randomGeometric = Cp, t.randomInt = wp, t.randomIrwinHall = Tp, t.randomLcg = function (t = Math.random()) {
    let n = 0 | (0 <= t && t < 1 ? t / Op : Math.abs(t));
    return () => (n = 1664525 * n + 1013904223 | 0, Op * (n >>> 0));
  }, t.randomLogNormal = Ap, t.randomLogistic = qp, t.randomNormal = Mp, t.randomPareto = kp, t.randomPoisson = Ip, t.randomUniform = xp, t.randomWeibull = Rp, t.range = lt, t.rank = function (t, e = n) {
    if ("function" != typeof t[Symbol.iterator]) throw new TypeError("values is not iterable");
    let r = Array.from(t);
    const i = new Float64Array(r.length);
    2 !== e.length && (r = r.map(e), e = n);

    const o = (t, n) => e(r[t], r[n]);

    let a, u;
    return Uint32Array.from(r, (t, n) => n).sort(e === n ? (t, n) => Y(r[t], r[n]) : B(o)).forEach((t, n) => {
      const e = o(t, void 0 === a ? t : a);
      e >= 0 ? ((void 0 === a || e > 0) && (a = t, u = n), i[t] = u) : i[t] = NaN;
    }), i;
  }, t.reduce = function (t, n, e) {
    if ("function" != typeof n) throw new TypeError("reducer is not a function");
    const r = t[Symbol.iterator]();
    let i,
        o,
        a = -1;

    if (arguments.length < 3) {
      if (({
        done: i,
        value: e
      } = r.next()), i) return;
      ++a;
    }

    for (; ({
      done: i,
      value: o
    } = r.next()), !i;) e = n(e, o, ++a, t);

    return e;
  }, t.reverse = function (t) {
    if ("function" != typeof t[Symbol.iterator]) throw new TypeError("values is not iterable");
    return Array.from(t).reverse();
  }, t.rgb = Fe, t.ribbon = function () {
    return Ya();
  }, t.ribbonArrow = function () {
    return Ya(Ba);
  }, t.rollup = R, t.rollups = F, t.scaleBand = jp, t.scaleDiverging = function t() {
    var n = ng(E_()(Gp));
    return n.copy = function () {
      return T_(n, t());
    }, Bp.apply(n, arguments);
  }, t.scaleDivergingLog = function t() {
    var n = fg(E_()).domain([.1, 1, 10]);
    return n.copy = function () {
      return T_(n, t()).base(n.base());
    }, Bp.apply(n, arguments);
  }, t.scaleDivergingPow = k_, t.scaleDivergingSqrt = function () {
    return k_.apply(null, arguments).exponent(.5);
  }, t.scaleDivergingSymlog = function t() {
    var n = hg(E_());
    return n.copy = function () {
      return T_(n, t()).constant(n.constant());
    }, Bp.apply(n, arguments);
  }, t.scaleIdentity = function t(n) {
    var e;

    function r(t) {
      return null == t || isNaN(t = +t) ? e : t;
    }

    return r.invert = r, r.domain = r.range = function (t) {
      return arguments.length ? (n = Array.from(t, Hp), r) : n.slice();
    }, r.unknown = function (t) {
      return arguments.length ? (e = t, r) : e;
    }, r.copy = function () {
      return t(n).unknown(e);
    }, n = arguments.length ? Array.from(n, Hp) : [0, 1], ng(r);
  }, t.scaleImplicit = Yp, t.scaleLinear = function t() {
    var n = Jp();
    return n.copy = function () {
      return Kp(n, t());
    }, Up.apply(n, arguments), ng(n);
  }, t.scaleLog = function t() {
    const n = fg(Qp()).domain([1, 10]);
    return n.copy = () => Kp(n, t()).base(n.base()), Up.apply(n, arguments), n;
  }, t.scaleOrdinal = Lp, t.scalePoint = function () {
    return $p(jp.apply(null, arguments).paddingInner(1));
  }, t.scalePow = vg, t.scaleQuantile = function t() {
    var e,
        r = [],
        i = [],
        o = [];

    function a() {
      var t = 0,
          n = Math.max(1, i.length);

      for (o = new Array(n - 1); ++t < n;) o[t - 1] = ut(r, t / n);

      return u;
    }

    function u(t) {
      return null == t || isNaN(t = +t) ? e : i[l(o, t)];
    }

    return u.invertExtent = function (t) {
      var n = i.indexOf(t);
      return n < 0 ? [NaN, NaN] : [n > 0 ? o[n - 1] : r[0], n < o.length ? o[n] : r[r.length - 1]];
    }, u.domain = function (t) {
      if (!arguments.length) return r.slice();
      r = [];

      for (let n of t) null == n || isNaN(n = +n) || r.push(n);

      return r.sort(n), a();
    }, u.range = function (t) {
      return arguments.length ? (i = Array.from(t), a()) : i.slice();
    }, u.unknown = function (t) {
      return arguments.length ? (e = t, u) : e;
    }, u.quantiles = function () {
      return o.slice();
    }, u.copy = function () {
      return t().domain(r).range(i).unknown(e);
    }, Up.apply(u, arguments);
  }, t.scaleQuantize = function t() {
    var n,
        e = 0,
        r = 1,
        i = 1,
        o = [.5],
        a = [0, 1];

    function u(t) {
      return null != t && t <= t ? a[l(o, t, 0, i)] : n;
    }

    function c() {
      var t = -1;

      for (o = new Array(i); ++t < i;) o[t] = ((t + 1) * r - (t - i) * e) / (i + 1);

      return u;
    }

    return u.domain = function (t) {
      return arguments.length ? ([e, r] = t, e = +e, r = +r, c()) : [e, r];
    }, u.range = function (t) {
      return arguments.length ? (i = (a = Array.from(t)).length - 1, c()) : a.slice();
    }, u.invertExtent = function (t) {
      var n = a.indexOf(t);
      return n < 0 ? [NaN, NaN] : n < 1 ? [e, o[0]] : n >= i ? [o[i - 1], r] : [o[n - 1], o[n]];
    }, u.unknown = function (t) {
      return arguments.length ? (n = t, u) : u;
    }, u.thresholds = function () {
      return o.slice();
    }, u.copy = function () {
      return t().domain([e, r]).range(a).unknown(n);
    }, Up.apply(ng(u), arguments);
  }, t.scaleRadial = function t() {
    var n,
        e = Jp(),
        r = [0, 1],
        i = !1;

    function o(t) {
      var r = bg(e(t));
      return isNaN(r) ? n : i ? Math.round(r) : r;
    }

    return o.invert = function (t) {
      return e.invert(_g(t));
    }, o.domain = function (t) {
      return arguments.length ? (e.domain(t), o) : e.domain();
    }, o.range = function (t) {
      return arguments.length ? (e.range((r = Array.from(t, Hp)).map(_g)), o) : r.slice();
    }, o.rangeRound = function (t) {
      return o.range(t).round(!0);
    }, o.round = function (t) {
      return arguments.length ? (i = !!t, o) : i;
    }, o.clamp = function (t) {
      return arguments.length ? (e.clamp(t), o) : e.clamp();
    }, o.unknown = function (t) {
      return arguments.length ? (n = t, o) : n;
    }, o.copy = function () {
      return t(e.domain(), r).round(i).clamp(e.clamp()).unknown(n);
    }, Up.apply(o, arguments), ng(o);
  }, t.scaleSequential = function t() {
    var n = ng(A_()(Gp));
    return n.copy = function () {
      return T_(n, t());
    }, Bp.apply(n, arguments);
  }, t.scaleSequentialLog = function t() {
    var n = fg(A_()).domain([1, 10]);
    return n.copy = function () {
      return T_(n, t()).base(n.base());
    }, Bp.apply(n, arguments);
  }, t.scaleSequentialPow = S_, t.scaleSequentialQuantile = function t() {
    var e = [],
        r = Gp;

    function i(t) {
      if (null != t && !isNaN(t = +t)) return r((l(e, t, 1) - 1) / (e.length - 1));
    }

    return i.domain = function (t) {
      if (!arguments.length) return e.slice();
      e = [];

      for (let n of t) null == n || isNaN(n = +n) || e.push(n);

      return e.sort(n), i;
    }, i.interpolator = function (t) {
      return arguments.length ? (r = t, i) : r;
    }, i.range = function () {
      return e.map((t, n) => r(n / (e.length - 1)));
    }, i.quantiles = function (t) {
      return Array.from({
        length: t + 1
      }, (n, r) => at(e, r / t));
    }, i.copy = function () {
      return t(r).domain(e);
    }, Bp.apply(i, arguments);
  }, t.scaleSequentialSqrt = function () {
    return S_.apply(null, arguments).exponent(.5);
  }, t.scaleSequentialSymlog = function t() {
    var n = hg(A_());
    return n.copy = function () {
      return T_(n, t()).constant(n.constant());
    }, Bp.apply(n, arguments);
  }, t.scaleSqrt = function () {
    return vg.apply(null, arguments).exponent(.5);
  }, t.scaleSymlog = function t() {
    var n = hg(Qp());
    return n.copy = function () {
      return Kp(n, t()).constant(n.constant());
    }, Up.apply(n, arguments);
  }, t.scaleThreshold = function t() {
    var n,
        e = [.5],
        r = [0, 1],
        i = 1;

    function o(t) {
      return null != t && t <= t ? r[l(e, t, 0, i)] : n;
    }

    return o.domain = function (t) {
      return arguments.length ? (e = Array.from(t), i = Math.min(e.length, r.length - 1), o) : e.slice();
    }, o.range = function (t) {
      return arguments.length ? (r = Array.from(t), i = Math.min(e.length, r.length - 1), o) : r.slice();
    }, o.invertExtent = function (t) {
      var n = r.indexOf(t);
      return [e[n - 1], e[n]];
    }, o.unknown = function (t) {
      return arguments.length ? (n = t, o) : n;
    }, o.copy = function () {
      return t().domain(e).range(r).unknown(n);
    }, Up.apply(o, arguments);
  }, t.scaleTime = function () {
    return Up.apply(M_(Hy, Xy, sy, uy, Xg, jg, Bg, Ig, Rg, t.timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
  }, t.scaleUtc = function () {
    return Up.apply(M_(jy, $y, By, Iy, wy, by, yy, dy, Rg, t.utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
  }, t.scan = function (t, n) {
    const e = ht(t, n);
    return e < 0 ? void 0 : e;
  }, t.schemeAccent = P_, t.schemeBlues = Nb, t.schemeBrBG = Y_, t.schemeBuGn = ob, t.schemeBuPu = ub, t.schemeCategory10 = C_, t.schemeDark2 = z_, t.schemeGnBu = fb, t.schemeGreens = Pb, t.schemeGreys = Db, t.schemeOrRd = lb, t.schemeOranges = Ub, t.schemePRGn = j_, t.schemePaired = D_, t.schemePastel1 = R_, t.schemePastel2 = F_, t.schemePiYG = H_, t.schemePuBu = gb, t.schemePuBuGn = db, t.schemePuOr = G_, t.schemePuRd = vb, t.schemePurples = Fb, t.schemeRdBu = W_, t.schemeRdGy = K_, t.schemeRdPu = bb, t.schemeRdYlBu = J_, t.schemeRdYlGn = nb, t.schemeReds = Ib, t.schemeSet1 = q_, t.schemeSet2 = I_, t.schemeSet3 = O_, t.schemeSpectral = rb, t.schemeTableau10 = U_, t.schemeYlGn = Mb, t.schemeYlGnBu = xb, t.schemeYlOrBr = Tb, t.schemeYlOrRd = Eb, t.select = Wn, t.selectAll = function (t) {
    return "string" == typeof t ? new Gn([document.querySelectorAll(t)], [document.documentElement]) : new Gn([Lt(t)], Xn);
  }, t.selection = Vn, t.selector = Yt, t.selectorAll = $t, t.shuffle = dt, t.shuffler = pt, t.some = function (t, n) {
    if ("function" != typeof n) throw new TypeError("test is not a function");
    let e = -1;

    for (const r of t) if (n(r, ++e, t)) return !0;

    return !1;
  }, t.sort = U, t.stack = function () {
    var t = Jb([]),
        n = Kx,
        e = Zx,
        r = Qx;

    function i(i) {
      var o,
          a,
          u = Array.from(t.apply(this, arguments), Jx),
          c = u.length,
          f = -1;

      for (const t of i) for (o = 0, ++f; o < c; ++o) (u[o][f] = [0, +r(t, u[o].key, f, i)]).data = t;

      for (o = 0, a = xm(n(u)); o < c; ++o) u[a[o]].index = o;

      return e(u, a), u;
    }

    return i.keys = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : Jb(Array.from(n)), i) : t;
    }, i.value = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : Jb(+t), i) : r;
    }, i.order = function (t) {
      return arguments.length ? (n = null == t ? Kx : "function" == typeof t ? t : Jb(Array.from(t)), i) : n;
    }, i.offset = function (t) {
      return arguments.length ? (e = null == t ? Zx : t, i) : e;
    }, i;
  }, t.stackOffsetDiverging = function (t, n) {
    if ((u = t.length) > 0) for (var e, r, i, o, a, u, c = 0, f = t[n[0]].length; c < f; ++c) for (o = a = 0, e = 0; e < u; ++e) (i = (r = t[n[e]][c])[1] - r[0]) > 0 ? (r[0] = o, r[1] = o += i) : i < 0 ? (r[1] = a, r[0] = a += i) : (r[0] = 0, r[1] = i);
  }, t.stackOffsetExpand = function (t, n) {
    if ((r = t.length) > 0) {
      for (var e, r, i, o = 0, a = t[0].length; o < a; ++o) {
        for (i = e = 0; e < r; ++e) i += t[e][o][1] || 0;

        if (i) for (e = 0; e < r; ++e) t[e][o][1] /= i;
      }

      Zx(t, n);
    }
  }, t.stackOffsetNone = Zx, t.stackOffsetSilhouette = function (t, n) {
    if ((e = t.length) > 0) {
      for (var e, r = 0, i = t[n[0]], o = i.length; r < o; ++r) {
        for (var a = 0, u = 0; a < e; ++a) u += t[a][r][1] || 0;

        i[r][1] += i[r][0] = -u / 2;
      }

      Zx(t, n);
    }
  }, t.stackOffsetWiggle = function (t, n) {
    if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
      for (var e, r, i, o = 0, a = 1; a < r; ++a) {
        for (var u = 0, c = 0, f = 0; u < i; ++u) {
          for (var s = t[n[u]], l = s[a][1] || 0, h = (l - (s[a - 1][1] || 0)) / 2, d = 0; d < u; ++d) {
            var p = t[n[d]];
            h += (p[a][1] || 0) - (p[a - 1][1] || 0);
          }

          c += l, f += h * l;
        }

        e[a - 1][1] += e[a - 1][0] = o, c && (o -= f / c);
      }

      e[a - 1][1] += e[a - 1][0] = o, Zx(t, n);
    }
  }, t.stackOrderAppearance = tw, t.stackOrderAscending = ew, t.stackOrderDescending = function (t) {
    return ew(t).reverse();
  }, t.stackOrderInsideOut = function (t) {
    var n,
        e,
        r = t.length,
        i = t.map(rw),
        o = tw(t),
        a = 0,
        u = 0,
        c = [],
        f = [];

    for (n = 0; n < r; ++n) e = o[n], a < u ? (a += i[e], c.push(e)) : (u += i[e], f.push(e));

    return f.reverse().concat(c);
  }, t.stackOrderNone = Kx, t.stackOrderReverse = function (t) {
    return Kx(t).reverse();
  }, t.stratify = function () {
    var t,
        n = ep,
        e = rp;

    function r(r) {
      var i,
          o,
          a,
          u,
          c,
          f,
          s,
          l,
          h = Array.from(r),
          d = n,
          p = e,
          g = new Map();

      if (null != t) {
        const n = h.map((n, e) => function (t) {
          let n = (t = "" + t).length;
          op(t, n - 1) && !op(t, n - 2) && (t = t.slice(0, -1));
          return "/" === t[0] ? t : "/" + t;
        }(t(n, e, r))),
              e = n.map(ip),
              i = new Set(n).add("");

        for (const t of e) i.has(t) || (i.add(t), n.push(t), e.push(ip(t)), h.push(np));

        d = (t, e) => n[e], p = (t, n) => e[n];
      }

      for (a = 0, i = h.length; a < i; ++a) o = h[a], f = h[a] = new Ed(o), null != (s = d(o, a, r)) && (s += "") && (l = f.id = s, g.set(l, g.has(l) ? tp : f)), null != (s = p(o, a, r)) && (s += "") && (f.parent = s);

      for (a = 0; a < i; ++a) if (s = (f = h[a]).parent) {
        if (!(c = g.get(s))) throw new Error("missing: " + s);
        if (c === tp) throw new Error("ambiguous: " + s);
        c.children ? c.children.push(f) : c.children = [f], f.parent = c;
      } else {
        if (u) throw new Error("multiple roots");
        u = f;
      }

      if (!u) throw new Error("no root");

      if (null != t) {
        for (; u.data === np && 1 === u.children.length;) u = u.children[0], --i;

        for (let t = h.length - 1; t >= 0 && (f = h[t], f.data === np); --t) f.data = null;
      }

      if (u.parent = Jd, u.eachBefore(function (t) {
        t.depth = t.parent.depth + 1, --i;
      }).eachBefore(Sd), u.parent = null, i > 0) throw new Error("cycle");
      return u;
    }

    return r.id = function (t) {
      return arguments.length ? (n = kd(t), r) : n;
    }, r.parentId = function (t) {
      return arguments.length ? (e = kd(t), r) : e;
    }, r.path = function (n) {
      return arguments.length ? (t = kd(n), r) : t;
    }, r;
  }, t.style = yn, t.subset = function (t, n) {
    return _t(n, t);
  }, t.sum = function (t, n) {
    let e = 0;
    if (void 0 === n) for (let n of t) (n = +n) && (e += n);else {
      let r = -1;

      for (let i of t) (i = +n(i, ++r, t)) && (e += i);
    }
    return e;
  }, t.superset = _t, t.svg = sc, t.symbol = function (t, n) {
    let e = null;

    function r() {
      let r;
      if (e || (e = r = Pa()), t.apply(this, arguments).draw(e, +n.apply(this, arguments)), r) return e = null, r + "" || null;
    }

    return t = "function" == typeof t ? t : Jb(t || Gm), n = "function" == typeof n ? n : Jb(void 0 === n ? 64 : +n), r.type = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : Jb(n), r) : t;
    }, r.size = function (t) {
      return arguments.length ? (n = "function" == typeof t ? t : Jb(+t), r) : n;
    }, r.context = function (t) {
      return arguments.length ? (e = null == t ? null : t, r) : e;
    }, r;
  }, t.symbolAsterisk = Xm, t.symbolCircle = Gm, t.symbolCross = Vm, t.symbolDiamond = Km, t.symbolDiamond2 = Qm, t.symbolPlus = Jm, t.symbolSquare = tx, t.symbolSquare2 = nx, t.symbolStar = ox, t.symbolTriangle = ux, t.symbolTriangle2 = fx, t.symbolWye = px, t.symbolX = gx, t.symbols = yx, t.symbolsFill = yx, t.symbolsStroke = vx, t.text = ec, t.thresholdFreedmanDiaconis = function (t, n, e) {
    return Math.ceil((e - n) / (2 * (at(t, .75) - at(t, .25)) * Math.pow(_(t), -1 / 3)));
  }, t.thresholdScott = function (t, n, e) {
    return Math.ceil((e - n) * Math.cbrt(_(t)) / (3.49 * M(t)));
  }, t.thresholdSturges = K, t.tickFormat = tg, t.tickIncrement = V, t.tickStep = W, t.ticks = G, t.timeDay = jg, t.timeDays = $g, t.timeFormatDefaultLocale = g_, t.timeFormatLocale = Zy, t.timeFriday = Kg, t.timeFridays = iy, t.timeHour = Bg, t.timeHours = Yg, t.timeInterval = wg, t.timeMillisecond = Ag, t.timeMilliseconds = Tg, t.timeMinute = Ig, t.timeMinutes = Og, t.timeMonday = Gg, t.timeMondays = ty, t.timeMonth = uy, t.timeMonths = cy, t.timeSaturday = Qg, t.timeSaturdays = oy, t.timeSecond = Rg, t.timeSeconds = Fg, t.timeSunday = Xg, t.timeSundays = Jg, t.timeThursday = Zg, t.timeThursdays = ry, t.timeTickInterval = Xy, t.timeTicks = Hy, t.timeTuesday = Vg, t.timeTuesdays = ny, t.timeWednesday = Wg, t.timeWednesdays = ey, t.timeWeek = Xg, t.timeWeeks = Jg, t.timeYear = sy, t.timeYears = ly, t.timeout = Ci, t.timer = Ti, t.timerFlush = Si, t.transition = ho, t.transpose = gt, t.tree = function () {
    var t = ap,
        n = 1,
        e = 1,
        r = null;

    function i(i) {
      var c = function (t) {
        for (var n, e, r, i, o, a = new lp(t, 0), u = [a]; n = u.pop();) if (r = n._.children) for (n.children = new Array(o = r.length), i = o - 1; i >= 0; --i) u.push(e = n.children[i] = new lp(r[i], i)), e.parent = n;

        return (a.parent = new lp(null, 0)).children = [a], a;
      }(i);

      if (c.eachAfter(o), c.parent.m = -c.z, c.eachBefore(a), r) i.eachBefore(u);else {
        var f = i,
            s = i,
            l = i;
        i.eachBefore(function (t) {
          t.x < f.x && (f = t), t.x > s.x && (s = t), t.depth > l.depth && (l = t);
        });
        var h = f === s ? 1 : t(f, s) / 2,
            d = h - f.x,
            p = n / (s.x + h + d),
            g = e / (l.depth || 1);
        i.eachBefore(function (t) {
          t.x = (t.x + d) * p, t.y = t.depth * g;
        });
      }
      return i;
    }

    function o(n) {
      var e = n.children,
          r = n.parent.children,
          i = n.i ? r[n.i - 1] : null;

      if (e) {
        !function (t) {
          for (var n, e = 0, r = 0, i = t.children, o = i.length; --o >= 0;) (n = i[o]).z += e, n.m += e, e += n.s + (r += n.c);
        }(n);
        var o = (e[0].z + e[e.length - 1].z) / 2;
        i ? (n.z = i.z + t(n._, i._), n.m = n.z - o) : n.z = o;
      } else i && (n.z = i.z + t(n._, i._));

      n.parent.A = function (n, e, r) {
        if (e) {
          for (var i, o = n, a = n, u = e, c = o.parent.children[0], f = o.m, s = a.m, l = u.m, h = c.m; u = cp(u), o = up(o), u && o;) c = up(c), (a = cp(a)).a = n, (i = u.z + l - o.z - f + t(u._, o._)) > 0 && (fp(sp(u, n, r), n, i), f += i, s += i), l += u.m, f += o.m, h += c.m, s += a.m;

          u && !cp(a) && (a.t = u, a.m += l - s), o && !up(c) && (c.t = o, c.m += f - h, r = n);
        }

        return r;
      }(n, i, n.parent.A || r[0]);
    }

    function a(t) {
      t._.x = t.z + t.parent.m, t.m += t.parent.m;
    }

    function u(t) {
      t.x *= n, t.y = t.depth * e;
    }

    return i.separation = function (n) {
      return arguments.length ? (t = n, i) : t;
    }, i.size = function (t) {
      return arguments.length ? (r = !1, n = +t[0], e = +t[1], i) : r ? null : [n, e];
    }, i.nodeSize = function (t) {
      return arguments.length ? (r = !0, n = +t[0], e = +t[1], i) : r ? [n, e] : null;
    }, i;
  }, t.treemap = function () {
    var t = gp,
        n = !1,
        e = 1,
        r = 1,
        i = [0],
        o = Cd,
        a = Cd,
        u = Cd,
        c = Cd,
        f = Cd;

    function s(t) {
      return t.x0 = t.y0 = 0, t.x1 = e, t.y1 = r, t.eachBefore(l), i = [0], n && t.eachBefore(Kd), t;
    }

    function l(n) {
      var e = i[n.depth],
          r = n.x0 + e,
          s = n.y0 + e,
          l = n.x1 - e,
          h = n.y1 - e;
      l < r && (r = l = (r + l) / 2), h < s && (s = h = (s + h) / 2), n.x0 = r, n.y0 = s, n.x1 = l, n.y1 = h, n.children && (e = i[n.depth + 1] = o(n) / 2, r += f(n) - e, s += a(n) - e, (l -= u(n) - e) < r && (r = l = (r + l) / 2), (h -= c(n) - e) < s && (s = h = (s + h) / 2), t(n, r, s, l, h));
    }

    return s.round = function (t) {
      return arguments.length ? (n = !!t, s) : n;
    }, s.size = function (t) {
      return arguments.length ? (e = +t[0], r = +t[1], s) : [e, r];
    }, s.tile = function (n) {
      return arguments.length ? (t = Nd(n), s) : t;
    }, s.padding = function (t) {
      return arguments.length ? s.paddingInner(t).paddingOuter(t) : s.paddingInner();
    }, s.paddingInner = function (t) {
      return arguments.length ? (o = "function" == typeof t ? t : Pd(+t), s) : o;
    }, s.paddingOuter = function (t) {
      return arguments.length ? s.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t) : s.paddingTop();
    }, s.paddingTop = function (t) {
      return arguments.length ? (a = "function" == typeof t ? t : Pd(+t), s) : a;
    }, s.paddingRight = function (t) {
      return arguments.length ? (u = "function" == typeof t ? t : Pd(+t), s) : u;
    }, s.paddingBottom = function (t) {
      return arguments.length ? (c = "function" == typeof t ? t : Pd(+t), s) : c;
    }, s.paddingLeft = function (t) {
      return arguments.length ? (f = "function" == typeof t ? t : Pd(+t), s) : f;
    }, s;
  }, t.treemapBinary = function (t, n, e, r, i) {
    var o,
        a,
        u = t.children,
        c = u.length,
        f = new Array(c + 1);

    for (f[0] = a = o = 0; o < c; ++o) f[o + 1] = a += u[o].value;

    !function t(n, e, r, i, o, a, c) {
      if (n >= e - 1) {
        var s = u[n];
        return s.x0 = i, s.y0 = o, s.x1 = a, void (s.y1 = c);
      }

      var l = f[n],
          h = r / 2 + l,
          d = n + 1,
          p = e - 1;

      for (; d < p;) {
        var g = d + p >>> 1;
        f[g] < h ? d = g + 1 : p = g;
      }

      h - f[d - 1] < f[d] - h && n + 1 < d && --d;
      var y = f[d] - l,
          v = r - y;

      if (a - i > c - o) {
        var _ = r ? (i * v + a * y) / r : a;

        t(n, d, y, i, o, _, c), t(d, e, v, _, o, a, c);
      } else {
        var b = r ? (o * v + c * y) / r : c;
        t(n, d, y, i, o, a, b), t(d, e, v, i, b, a, c);
      }
    }(0, c, t.value, n, e, r, i);
  }, t.treemapDice = Qd, t.treemapResquarify = yp, t.treemapSlice = hp, t.treemapSliceDice = function (t, n, e, r, i) {
    (1 & t.depth ? hp : Qd)(t, n, e, r, i);
  }, t.treemapSquarify = gp, t.tsv = oc, t.tsvFormat = Gu, t.tsvFormatBody = Vu, t.tsvFormatRow = Zu, t.tsvFormatRows = Wu, t.tsvFormatValue = Ku, t.tsvParse = Hu, t.tsvParseRows = Xu, t.union = function (...t) {
    const n = new InternSet();

    for (const e of t) for (const t of e) n.add(t);

    return n;
  }, t.utcDay = by, t.utcDays = my, t.utcFriday = Ey, t.utcFridays = Ry, t.utcHour = yy, t.utcHours = vy, t.utcMillisecond = Ag, t.utcMilliseconds = Tg, t.utcMinute = dy, t.utcMinutes = py, t.utcMonday = My, t.utcMondays = Cy, t.utcMonth = Iy, t.utcMonths = Oy, t.utcSaturday = ky, t.utcSaturdays = Fy, t.utcSecond = Rg, t.utcSeconds = Fg, t.utcSunday = wy, t.utcSundays = Ny, t.utcThursday = Sy, t.utcThursdays = Dy, t.utcTickInterval = $y, t.utcTicks = jy, t.utcTuesday = Ay, t.utcTuesdays = Py, t.utcWednesday = Ty, t.utcWednesdays = zy, t.utcWeek = wy, t.utcWeeks = Ny, t.utcYear = By, t.utcYears = Yy, t.variance = w, t.version = "7.6.1", t.window = hn, t.xml = cc, t.zip = function () {
    return gt(arguments);
  }, t.zoom = function () {
    var t,
        n,
        e,
        r = lw,
        i = hw,
        o = yw,
        a = pw,
        u = gw,
        c = [0, 1 / 0],
        f = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]],
        s = 250,
        l = ni,
        h = Nt("start", "zoom", "end"),
        d = 500,
        p = 0,
        g = 10;

    function y(t) {
      t.property("__zoom", dw).on("wheel.zoom", M, {
        passive: !1
      }).on("mousedown.zoom", A).on("dblclick.zoom", T).filter(u).on("touchstart.zoom", S).on("touchmove.zoom", E).on("touchend.zoom touchcancel.zoom", k).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }

    function v(t, n) {
      return (n = Math.max(c[0], Math.min(c[1], n))) === t.k ? t : new aw(n, t.x, t.y);
    }

    function _(t, n, e) {
      var r = n[0] - e[0] * t.k,
          i = n[1] - e[1] * t.k;
      return r === t.x && i === t.y ? t : new aw(t.k, r, i);
    }

    function b(t) {
      return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2];
    }

    function m(t, n, e, r) {
      t.on("start.zoom", function () {
        x(this, arguments).event(r).start();
      }).on("interrupt.zoom end.zoom", function () {
        x(this, arguments).event(r).end();
      }).tween("zoom", function () {
        var t = this,
            o = arguments,
            a = x(t, o).event(r),
            u = i.apply(t, o),
            c = null == e ? b(u) : "function" == typeof e ? e.apply(t, o) : e,
            f = Math.max(u[1][0] - u[0][0], u[1][1] - u[0][1]),
            s = t.__zoom,
            h = "function" == typeof n ? n.apply(t, o) : n,
            d = l(s.invert(c).concat(f / s.k), h.invert(c).concat(f / h.k));
        return function (t) {
          if (1 === t) t = h;else {
            var n = d(t),
                e = f / n[2];
            t = new aw(e, c[0] - n[0] * e, c[1] - n[1] * e);
          }
          a.zoom(null, t);
        };
      });
    }

    function x(t, n, e) {
      return !e && t.__zooming || new w(t, n);
    }

    function w(t, n) {
      this.that = t, this.args = n, this.active = 0, this.sourceEvent = null, this.extent = i.apply(t, n), this.taps = 0;
    }

    function M(t, ...n) {
      if (r.apply(this, arguments)) {
        var e = x(this, n).event(t),
            i = this.__zoom,
            u = Math.max(c[0], Math.min(c[1], i.k * Math.pow(2, a.apply(this, arguments)))),
            s = te(t);
        if (e.wheel) e.mouse[0][0] === s[0] && e.mouse[0][1] === s[1] || (e.mouse[1] = i.invert(e.mouse[0] = s)), clearTimeout(e.wheel);else {
          if (i.k === u) return;
          e.mouse = [s, i.invert(s)], Ii(this), e.start();
        }
        sw(t), e.wheel = setTimeout(l, 150), e.zoom("mouse", o(_(v(i, u), e.mouse[0], e.mouse[1]), e.extent, f));
      }

      function l() {
        e.wheel = null, e.end();
      }
    }

    function A(t, ...n) {
      if (!e && r.apply(this, arguments)) {
        var i = t.currentTarget,
            a = x(this, n, !0).event(t),
            u = Wn(t.view).on("mousemove.zoom", h, !0).on("mouseup.zoom", d, !0),
            c = te(t, i),
            s = t.clientX,
            l = t.clientY;
        oe(t.view), fw(t), a.mouse = [c, this.__zoom.invert(c)], Ii(this), a.start();
      }

      function h(t) {
        if (sw(t), !a.moved) {
          var n = t.clientX - s,
              e = t.clientY - l;
          a.moved = n * n + e * e > p;
        }

        a.event(t).zoom("mouse", o(_(a.that.__zoom, a.mouse[0] = te(t, i), a.mouse[1]), a.extent, f));
      }

      function d(t) {
        u.on("mousemove.zoom mouseup.zoom", null), ae(t.view, a.moved), sw(t), a.event(t).end();
      }
    }

    function T(t, ...n) {
      if (r.apply(this, arguments)) {
        var e = this.__zoom,
            a = te(t.changedTouches ? t.changedTouches[0] : t, this),
            u = e.invert(a),
            c = e.k * (t.shiftKey ? .5 : 2),
            l = o(_(v(e, c), a, u), i.apply(this, n), f);
        sw(t), s > 0 ? Wn(this).transition().duration(s).call(m, l, a, t) : Wn(this).call(y.transform, l, a, t);
      }
    }

    function S(e, ...i) {
      if (r.apply(this, arguments)) {
        var o,
            a,
            u,
            c,
            f = e.touches,
            s = f.length,
            l = x(this, i, e.changedTouches.length === s).event(e);

        for (fw(e), a = 0; a < s; ++a) c = [c = te(u = f[a], this), this.__zoom.invert(c), u.identifier], l.touch0 ? l.touch1 || l.touch0[2] === c[2] || (l.touch1 = c, l.taps = 0) : (l.touch0 = c, o = !0, l.taps = 1 + !!t);

        t && (t = clearTimeout(t)), o && (l.taps < 2 && (n = c[0], t = setTimeout(function () {
          t = null;
        }, d)), Ii(this), l.start());
      }
    }

    function E(t, ...n) {
      if (this.__zooming) {
        var e,
            r,
            i,
            a,
            u = x(this, n).event(t),
            c = t.changedTouches,
            s = c.length;

        for (sw(t), e = 0; e < s; ++e) i = te(r = c[e], this), u.touch0 && u.touch0[2] === r.identifier ? u.touch0[0] = i : u.touch1 && u.touch1[2] === r.identifier && (u.touch1[0] = i);

        if (r = u.that.__zoom, u.touch1) {
          var l = u.touch0[0],
              h = u.touch0[1],
              d = u.touch1[0],
              p = u.touch1[1],
              g = (g = d[0] - l[0]) * g + (g = d[1] - l[1]) * g,
              y = (y = p[0] - h[0]) * y + (y = p[1] - h[1]) * y;
          r = v(r, Math.sqrt(g / y)), i = [(l[0] + d[0]) / 2, (l[1] + d[1]) / 2], a = [(h[0] + p[0]) / 2, (h[1] + p[1]) / 2];
        } else {
          if (!u.touch0) return;
          i = u.touch0[0], a = u.touch0[1];
        }

        u.zoom("touch", o(_(r, i, a), u.extent, f));
      }
    }

    function k(t, ...r) {
      if (this.__zooming) {
        var i,
            o,
            a = x(this, r).event(t),
            u = t.changedTouches,
            c = u.length;

        for (fw(t), e && clearTimeout(e), e = setTimeout(function () {
          e = null;
        }, d), i = 0; i < c; ++i) o = u[i], a.touch0 && a.touch0[2] === o.identifier ? delete a.touch0 : a.touch1 && a.touch1[2] === o.identifier && delete a.touch1;

        if (a.touch1 && !a.touch0 && (a.touch0 = a.touch1, delete a.touch1), a.touch0) a.touch0[1] = this.__zoom.invert(a.touch0[0]);else if (a.end(), 2 === a.taps && (o = te(o, this), Math.hypot(n[0] - o[0], n[1] - o[1]) < g)) {
          var f = Wn(this).on("dblclick.zoom");
          f && f.apply(this, arguments);
        }
      }
    }

    return y.transform = function (t, n, e, r) {
      var i = t.selection ? t.selection() : t;
      i.property("__zoom", dw), t !== i ? m(t, n, e, r) : i.interrupt().each(function () {
        x(this, arguments).event(r).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end();
      });
    }, y.scaleBy = function (t, n, e, r) {
      y.scaleTo(t, function () {
        var t = this.__zoom.k,
            e = "function" == typeof n ? n.apply(this, arguments) : n;
        return t * e;
      }, e, r);
    }, y.scaleTo = function (t, n, e, r) {
      y.transform(t, function () {
        var t = i.apply(this, arguments),
            r = this.__zoom,
            a = null == e ? b(t) : "function" == typeof e ? e.apply(this, arguments) : e,
            u = r.invert(a),
            c = "function" == typeof n ? n.apply(this, arguments) : n;
        return o(_(v(r, c), a, u), t, f);
      }, e, r);
    }, y.translateBy = function (t, n, e, r) {
      y.transform(t, function () {
        return o(this.__zoom.translate("function" == typeof n ? n.apply(this, arguments) : n, "function" == typeof e ? e.apply(this, arguments) : e), i.apply(this, arguments), f);
      }, null, r);
    }, y.translateTo = function (t, n, e, r, a) {
      y.transform(t, function () {
        var t = i.apply(this, arguments),
            a = this.__zoom,
            u = null == r ? b(t) : "function" == typeof r ? r.apply(this, arguments) : r;
        return o(uw.translate(u[0], u[1]).scale(a.k).translate("function" == typeof n ? -n.apply(this, arguments) : -n, "function" == typeof e ? -e.apply(this, arguments) : -e), t, f);
      }, r, a);
    }, w.prototype = {
      event: function (t) {
        return t && (this.sourceEvent = t), this;
      },
      start: function () {
        return 1 == ++this.active && (this.that.__zooming = this, this.emit("start")), this;
      },
      zoom: function (t, n) {
        return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this;
      },
      end: function () {
        return 0 == --this.active && (delete this.that.__zooming, this.emit("end")), this;
      },
      emit: function (t) {
        var n = Wn(this.that).datum();
        h.call(t, this.that, new ow(t, {
          sourceEvent: this.sourceEvent,
          target: y,
          type: t,
          transform: this.that.__zoom,
          dispatch: h
        }), n);
      }
    }, y.wheelDelta = function (t) {
      return arguments.length ? (a = "function" == typeof t ? t : iw(+t), y) : a;
    }, y.filter = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : iw(!!t), y) : r;
    }, y.touchable = function (t) {
      return arguments.length ? (u = "function" == typeof t ? t : iw(!!t), y) : u;
    }, y.extent = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : iw([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]), y) : i;
    }, y.scaleExtent = function (t) {
      return arguments.length ? (c[0] = +t[0], c[1] = +t[1], y) : [c[0], c[1]];
    }, y.translateExtent = function (t) {
      return arguments.length ? (f[0][0] = +t[0][0], f[1][0] = +t[1][0], f[0][1] = +t[0][1], f[1][1] = +t[1][1], y) : [[f[0][0], f[0][1]], [f[1][0], f[1][1]]];
    }, y.constrain = function (t) {
      return arguments.length ? (o = t, y) : o;
    }, y.duration = function (t) {
      return arguments.length ? (s = +t, y) : s;
    }, y.interpolate = function (t) {
      return arguments.length ? (l = t, y) : l;
    }, y.on = function () {
      var t = h.on.apply(h, arguments);
      return t === h ? y : t;
    }, y.clickDistance = function (t) {
      return arguments.length ? (p = (t = +t) * t, y) : Math.sqrt(p);
    }, y.tapDistance = function (t) {
      return arguments.length ? (g = +t, y) : g;
    }, y;
  }, t.zoomIdentity = uw, t.zoomTransform = cw, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});

_$d3Min_8 = _$d3Min_8.exports
var _$topojsonClient_10 = { exports: {} };
// https://github.com/topojson/topojson-client Version 3.0.0. Copyright 2017 Mike Bostock.
(function (global, factory) {
  typeof _$topojsonClient_10.exports === 'object' && "object" !== 'undefined' ? factory(_$topojsonClient_10.exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : factory(global.topojson = global.topojson || {});
})(this, function (exports) {
  'use strict';

  var identity = function (x) {
    return x;
  };

  var transform = function (transform) {
    if (transform == null) return identity;
    var x0,
        y0,
        kx = transform.scale[0],
        ky = transform.scale[1],
        dx = transform.translate[0],
        dy = transform.translate[1];
    return function (input, i) {
      if (!i) x0 = y0 = 0;
      var j = 2,
          n = input.length,
          output = new Array(n);
      output[0] = (x0 += input[0]) * kx + dx;
      output[1] = (y0 += input[1]) * ky + dy;

      while (j < n) output[j] = input[j], ++j;

      return output;
    };
  };

  var bbox = function (topology) {
    var t = transform(topology.transform),
        key,
        x0 = Infinity,
        y0 = x0,
        x1 = -x0,
        y1 = -x0;

    function bboxPoint(p) {
      p = t(p);
      if (p[0] < x0) x0 = p[0];
      if (p[0] > x1) x1 = p[0];
      if (p[1] < y0) y0 = p[1];
      if (p[1] > y1) y1 = p[1];
    }

    function bboxGeometry(o) {
      switch (o.type) {
        case "GeometryCollection":
          o.geometries.forEach(bboxGeometry);
          break;

        case "Point":
          bboxPoint(o.coordinates);
          break;

        case "MultiPoint":
          o.coordinates.forEach(bboxPoint);
          break;
      }
    }

    topology.arcs.forEach(function (arc) {
      var i = -1,
          n = arc.length,
          p;

      while (++i < n) {
        p = t(arc[i], i);
        if (p[0] < x0) x0 = p[0];
        if (p[0] > x1) x1 = p[0];
        if (p[1] < y0) y0 = p[1];
        if (p[1] > y1) y1 = p[1];
      }
    });

    for (key in topology.objects) {
      bboxGeometry(topology.objects[key]);
    }

    return [x0, y0, x1, y1];
  };

  var reverse = function (array, n) {
    var t,
        j = array.length,
        i = j - n;

    while (i < --j) t = array[i], array[i++] = array[j], array[j] = t;
  };

  var feature = function (topology, o) {
    return o.type === "GeometryCollection" ? {
      type: "FeatureCollection",
      features: o.geometries.map(function (o) {
        return feature$1(topology, o);
      })
    } : feature$1(topology, o);
  };

  function feature$1(topology, o) {
    var id = o.id,
        bbox = o.bbox,
        properties = o.properties == null ? {} : o.properties,
        geometry = object(topology, o);
    return id == null && bbox == null ? {
      type: "Feature",
      properties: properties,
      geometry: geometry
    } : bbox == null ? {
      type: "Feature",
      id: id,
      properties: properties,
      geometry: geometry
    } : {
      type: "Feature",
      id: id,
      bbox: bbox,
      properties: properties,
      geometry: geometry
    };
  }

  function object(topology, o) {
    var transformPoint = transform(topology.transform),
        arcs = topology.arcs;

    function arc(i, points) {
      if (points.length) points.pop();

      for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length; k < n; ++k) {
        points.push(transformPoint(a[k], k));
      }

      if (i < 0) reverse(points, n);
    }

    function point(p) {
      return transformPoint(p);
    }

    function line(arcs) {
      var points = [];

      for (var i = 0, n = arcs.length; i < n; ++i) arc(arcs[i], points);

      if (points.length < 2) points.push(points[0]); // This should never happen per the specification.

      return points;
    }

    function ring(arcs) {
      var points = line(arcs);

      while (points.length < 4) points.push(points[0]); // This may happen if an arc has only two points.


      return points;
    }

    function polygon(arcs) {
      return arcs.map(ring);
    }

    function geometry(o) {
      var type = o.type,
          coordinates;

      switch (type) {
        case "GeometryCollection":
          return {
            type: type,
            geometries: o.geometries.map(geometry)
          };

        case "Point":
          coordinates = point(o.coordinates);
          break;

        case "MultiPoint":
          coordinates = o.coordinates.map(point);
          break;

        case "LineString":
          coordinates = line(o.arcs);
          break;

        case "MultiLineString":
          coordinates = o.arcs.map(line);
          break;

        case "Polygon":
          coordinates = polygon(o.arcs);
          break;

        case "MultiPolygon":
          coordinates = o.arcs.map(polygon);
          break;

        default:
          return null;
      }

      return {
        type: type,
        coordinates: coordinates
      };
    }

    return geometry(o);
  }

  var stitch = function (topology, arcs) {
    var stitchedArcs = {},
        fragmentByStart = {},
        fragmentByEnd = {},
        fragments = [],
        emptyIndex = -1; // Stitch empty arcs first, since they may be subsumed by other arcs.

    arcs.forEach(function (i, j) {
      var arc = topology.arcs[i < 0 ? ~i : i],
          t;

      if (arc.length < 3 && !arc[1][0] && !arc[1][1]) {
        t = arcs[++emptyIndex], arcs[emptyIndex] = i, arcs[j] = t;
      }
    });
    arcs.forEach(function (i) {
      var e = ends(i),
          start = e[0],
          end = e[1],
          f,
          g;

      if (f = fragmentByEnd[start]) {
        delete fragmentByEnd[f.end];
        f.push(i);
        f.end = end;

        if (g = fragmentByStart[end]) {
          delete fragmentByStart[g.start];
          var fg = g === f ? f : f.concat(g);
          fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;
        } else {
          fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
        }
      } else if (f = fragmentByStart[end]) {
        delete fragmentByStart[f.start];
        f.unshift(i);
        f.start = start;

        if (g = fragmentByEnd[start]) {
          delete fragmentByEnd[g.end];
          var gf = g === f ? f : g.concat(f);
          fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;
        } else {
          fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
        }
      } else {
        f = [i];
        fragmentByStart[f.start = start] = fragmentByEnd[f.end = end] = f;
      }
    });

    function ends(i) {
      var arc = topology.arcs[i < 0 ? ~i : i],
          p0 = arc[0],
          p1;
      if (topology.transform) p1 = [0, 0], arc.forEach(function (dp) {
        p1[0] += dp[0], p1[1] += dp[1];
      });else p1 = arc[arc.length - 1];
      return i < 0 ? [p1, p0] : [p0, p1];
    }

    function flush(fragmentByEnd, fragmentByStart) {
      for (var k in fragmentByEnd) {
        var f = fragmentByEnd[k];
        delete fragmentByStart[f.start];
        delete f.start;
        delete f.end;
        f.forEach(function (i) {
          stitchedArcs[i < 0 ? ~i : i] = 1;
        });
        fragments.push(f);
      }
    }

    flush(fragmentByEnd, fragmentByStart);
    flush(fragmentByStart, fragmentByEnd);
    arcs.forEach(function (i) {
      if (!stitchedArcs[i < 0 ? ~i : i]) fragments.push([i]);
    });
    return fragments;
  };

  var mesh = function (topology) {
    return object(topology, meshArcs.apply(this, arguments));
  };

  function meshArcs(topology, object$$1, filter) {
    var arcs, i, n;
    if (arguments.length > 1) arcs = extractArcs(topology, object$$1, filter);else for (i = 0, arcs = new Array(n = topology.arcs.length); i < n; ++i) arcs[i] = i;
    return {
      type: "MultiLineString",
      arcs: stitch(topology, arcs)
    };
  }

  function extractArcs(topology, object$$1, filter) {
    var arcs = [],
        geomsByArc = [],
        geom;

    function extract0(i) {
      var j = i < 0 ? ~i : i;
      (geomsByArc[j] || (geomsByArc[j] = [])).push({
        i: i,
        g: geom
      });
    }

    function extract1(arcs) {
      arcs.forEach(extract0);
    }

    function extract2(arcs) {
      arcs.forEach(extract1);
    }

    function extract3(arcs) {
      arcs.forEach(extract2);
    }

    function geometry(o) {
      switch (geom = o, o.type) {
        case "GeometryCollection":
          o.geometries.forEach(geometry);
          break;

        case "LineString":
          extract1(o.arcs);
          break;

        case "MultiLineString":
        case "Polygon":
          extract2(o.arcs);
          break;

        case "MultiPolygon":
          extract3(o.arcs);
          break;
      }
    }

    geometry(object$$1);
    geomsByArc.forEach(filter == null ? function (geoms) {
      arcs.push(geoms[0].i);
    } : function (geoms) {
      if (filter(geoms[0].g, geoms[geoms.length - 1].g)) arcs.push(geoms[0].i);
    });
    return arcs;
  }

  function planarRingArea(ring) {
    var i = -1,
        n = ring.length,
        a,
        b = ring[n - 1],
        area = 0;

    while (++i < n) a = b, b = ring[i], area += a[0] * b[1] - a[1] * b[0];

    return Math.abs(area); // Note: doubled area!
  }

  var merge = function (topology) {
    return object(topology, mergeArcs.apply(this, arguments));
  };

  function mergeArcs(topology, objects) {
    var polygonsByArc = {},
        polygons = [],
        groups = [];
    objects.forEach(geometry);

    function geometry(o) {
      switch (o.type) {
        case "GeometryCollection":
          o.geometries.forEach(geometry);
          break;

        case "Polygon":
          extract(o.arcs);
          break;

        case "MultiPolygon":
          o.arcs.forEach(extract);
          break;
      }
    }

    function extract(polygon) {
      polygon.forEach(function (ring) {
        ring.forEach(function (arc) {
          (polygonsByArc[arc = arc < 0 ? ~arc : arc] || (polygonsByArc[arc] = [])).push(polygon);
        });
      });
      polygons.push(polygon);
    }

    function area(ring) {
      return planarRingArea(object(topology, {
        type: "Polygon",
        arcs: [ring]
      }).coordinates[0]);
    }

    polygons.forEach(function (polygon) {
      if (!polygon._) {
        var group = [],
            neighbors = [polygon];
        polygon._ = 1;
        groups.push(group);

        while (polygon = neighbors.pop()) {
          group.push(polygon);
          polygon.forEach(function (ring) {
            ring.forEach(function (arc) {
              polygonsByArc[arc < 0 ? ~arc : arc].forEach(function (polygon) {
                if (!polygon._) {
                  polygon._ = 1;
                  neighbors.push(polygon);
                }
              });
            });
          });
        }
      }
    });
    polygons.forEach(function (polygon) {
      delete polygon._;
    });
    return {
      type: "MultiPolygon",
      arcs: groups.map(function (polygons) {
        var arcs = [],
            n; // Extract the exterior (unique) arcs.

        polygons.forEach(function (polygon) {
          polygon.forEach(function (ring) {
            ring.forEach(function (arc) {
              if (polygonsByArc[arc < 0 ? ~arc : arc].length < 2) {
                arcs.push(arc);
              }
            });
          });
        }); // Stitch the arcs into one or more rings.

        arcs = stitch(topology, arcs); // If more than one ring is returned,
        // at most one of these rings can be the exterior;
        // choose the one with the greatest absolute area.

        if ((n = arcs.length) > 1) {
          for (var i = 1, k = area(arcs[0]), ki, t; i < n; ++i) {
            if ((ki = area(arcs[i])) > k) {
              t = arcs[0], arcs[0] = arcs[i], arcs[i] = t, k = ki;
            }
          }
        }

        return arcs;
      })
    };
  }

  var bisect = function (a, x) {
    var lo = 0,
        hi = a.length;

    while (lo < hi) {
      var mid = lo + hi >>> 1;
      if (a[mid] < x) lo = mid + 1;else hi = mid;
    }

    return lo;
  };

  var neighbors = function (objects) {
    var indexesByArc = {},
        // arc index -> array of object indexes
    neighbors = objects.map(function () {
      return [];
    });

    function line(arcs, i) {
      arcs.forEach(function (a) {
        if (a < 0) a = ~a;
        var o = indexesByArc[a];
        if (o) o.push(i);else indexesByArc[a] = [i];
      });
    }

    function polygon(arcs, i) {
      arcs.forEach(function (arc) {
        line(arc, i);
      });
    }

    function geometry(o, i) {
      if (o.type === "GeometryCollection") o.geometries.forEach(function (o) {
        geometry(o, i);
      });else if (o.type in geometryType) geometryType[o.type](o.arcs, i);
    }

    var geometryType = {
      LineString: line,
      MultiLineString: polygon,
      Polygon: polygon,
      MultiPolygon: function (arcs, i) {
        arcs.forEach(function (arc) {
          polygon(arc, i);
        });
      }
    };
    objects.forEach(geometry);

    for (var i in indexesByArc) {
      for (var indexes = indexesByArc[i], m = indexes.length, j = 0; j < m; ++j) {
        for (var k = j + 1; k < m; ++k) {
          var ij = indexes[j],
              ik = indexes[k],
              n;
          if ((n = neighbors[ij])[i = bisect(n, ik)] !== ik) n.splice(i, 0, ik);
          if ((n = neighbors[ik])[i = bisect(n, ij)] !== ij) n.splice(i, 0, ij);
        }
      }
    }

    return neighbors;
  };

  var untransform = function (transform) {
    if (transform == null) return identity;
    var x0,
        y0,
        kx = transform.scale[0],
        ky = transform.scale[1],
        dx = transform.translate[0],
        dy = transform.translate[1];
    return function (input, i) {
      if (!i) x0 = y0 = 0;
      var j = 2,
          n = input.length,
          output = new Array(n),
          x1 = Math.round((input[0] - dx) / kx),
          y1 = Math.round((input[1] - dy) / ky);
      output[0] = x1 - x0, x0 = x1;
      output[1] = y1 - y0, y0 = y1;

      while (j < n) output[j] = input[j], ++j;

      return output;
    };
  };

  var quantize = function (topology, transform) {
    if (topology.transform) throw new Error("already quantized");

    if (!transform || !transform.scale) {
      if (!((n = Math.floor(transform)) >= 2)) throw new Error("n must be ≥2");
      box = topology.bbox || bbox(topology);
      var x0 = box[0],
          y0 = box[1],
          x1 = box[2],
          y1 = box[3],
          n;
      transform = {
        scale: [x1 - x0 ? (x1 - x0) / (n - 1) : 1, y1 - y0 ? (y1 - y0) / (n - 1) : 1],
        translate: [x0, y0]
      };
    } else {
      box = topology.bbox;
    }

    var t = untransform(transform),
        box,
        key,
        inputs = topology.objects,
        outputs = {};

    function quantizePoint(point) {
      return t(point);
    }

    function quantizeGeometry(input) {
      var output;

      switch (input.type) {
        case "GeometryCollection":
          output = {
            type: "GeometryCollection",
            geometries: input.geometries.map(quantizeGeometry)
          };
          break;

        case "Point":
          output = {
            type: "Point",
            coordinates: quantizePoint(input.coordinates)
          };
          break;

        case "MultiPoint":
          output = {
            type: "MultiPoint",
            coordinates: input.coordinates.map(quantizePoint)
          };
          break;

        default:
          return input;
      }

      if (input.id != null) output.id = input.id;
      if (input.bbox != null) output.bbox = input.bbox;
      if (input.properties != null) output.properties = input.properties;
      return output;
    }

    function quantizeArc(input) {
      var i = 0,
          j = 1,
          n = input.length,
          p,
          output = new Array(n); // pessimistic

      output[0] = t(input[0], 0);

      while (++i < n) if ((p = t(input[i], i))[0] || p[1]) output[j++] = p; // non-coincident points


      if (j === 1) output[j++] = [0, 0]; // an arc must have at least two points

      output.length = j;
      return output;
    }

    for (key in inputs) outputs[key] = quantizeGeometry(inputs[key]);

    return {
      type: "Topology",
      bbox: box,
      transform: transform,
      objects: outputs,
      arcs: topology.arcs.map(quantizeArc)
    };
  };

  exports.bbox = bbox;
  exports.feature = feature;
  exports.mesh = mesh;
  exports.meshArcs = meshArcs;
  exports.merge = merge;
  exports.mergeArcs = mergeArcs;
  exports.neighbors = neighbors;
  exports.quantize = quantize;
  exports.transform = transform;
  exports.untransform = untransform;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

_$topojsonClient_10 = _$topojsonClient_10.exports
var _$topojsonServer_11 = { exports: {} };
// https://github.com/topojson/topojson-server Version 3.0.0. Copyright 2017 Mike Bostock.
(function (global, factory) {
  typeof _$topojsonServer_11.exports === 'object' && "object" !== 'undefined' ? factory(_$topojsonServer_11.exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : factory(global.topojson = global.topojson || {});
})(this, function (exports) {
  'use strict'; // Computes the bounding box of the specified hash of GeoJSON objects.

  var bounds = function (objects) {
    var x0 = Infinity,
        y0 = Infinity,
        x1 = -Infinity,
        y1 = -Infinity;

    function boundGeometry(geometry) {
      if (geometry != null && boundGeometryType.hasOwnProperty(geometry.type)) boundGeometryType[geometry.type](geometry);
    }

    var boundGeometryType = {
      GeometryCollection: function (o) {
        o.geometries.forEach(boundGeometry);
      },
      Point: function (o) {
        boundPoint(o.coordinates);
      },
      MultiPoint: function (o) {
        o.coordinates.forEach(boundPoint);
      },
      LineString: function (o) {
        boundLine(o.arcs);
      },
      MultiLineString: function (o) {
        o.arcs.forEach(boundLine);
      },
      Polygon: function (o) {
        o.arcs.forEach(boundLine);
      },
      MultiPolygon: function (o) {
        o.arcs.forEach(boundMultiLine);
      }
    };

    function boundPoint(coordinates) {
      var x = coordinates[0],
          y = coordinates[1];
      if (x < x0) x0 = x;
      if (x > x1) x1 = x;
      if (y < y0) y0 = y;
      if (y > y1) y1 = y;
    }

    function boundLine(coordinates) {
      coordinates.forEach(boundPoint);
    }

    function boundMultiLine(coordinates) {
      coordinates.forEach(boundLine);
    }

    for (var key in objects) {
      boundGeometry(objects[key]);
    }

    return x1 >= x0 && y1 >= y0 ? [x0, y0, x1, y1] : undefined;
  };

  var hashset = function (size, hash, equal, type, empty) {
    if (arguments.length === 3) {
      type = Array;
      empty = null;
    }

    var store = new type(size = 1 << Math.max(4, Math.ceil(Math.log(size) / Math.LN2))),
        mask = size - 1;

    for (var i = 0; i < size; ++i) {
      store[i] = empty;
    }

    function add(value) {
      var index = hash(value) & mask,
          match = store[index],
          collisions = 0;

      while (match != empty) {
        if (equal(match, value)) return true;
        if (++collisions >= size) throw new Error("full hashset");
        match = store[index = index + 1 & mask];
      }

      store[index] = value;
      return true;
    }

    function has(value) {
      var index = hash(value) & mask,
          match = store[index],
          collisions = 0;

      while (match != empty) {
        if (equal(match, value)) return true;
        if (++collisions >= size) break;
        match = store[index = index + 1 & mask];
      }

      return false;
    }

    function values() {
      var values = [];

      for (var i = 0, n = store.length; i < n; ++i) {
        var match = store[i];
        if (match != empty) values.push(match);
      }

      return values;
    }

    return {
      add: add,
      has: has,
      values: values
    };
  };

  var hashmap = function (size, hash, equal, keyType, keyEmpty, valueType) {
    if (arguments.length === 3) {
      keyType = valueType = Array;
      keyEmpty = null;
    }

    var keystore = new keyType(size = 1 << Math.max(4, Math.ceil(Math.log(size) / Math.LN2))),
        valstore = new valueType(size),
        mask = size - 1;

    for (var i = 0; i < size; ++i) {
      keystore[i] = keyEmpty;
    }

    function set(key, value) {
      var index = hash(key) & mask,
          matchKey = keystore[index],
          collisions = 0;

      while (matchKey != keyEmpty) {
        if (equal(matchKey, key)) return valstore[index] = value;
        if (++collisions >= size) throw new Error("full hashmap");
        matchKey = keystore[index = index + 1 & mask];
      }

      keystore[index] = key;
      valstore[index] = value;
      return value;
    }

    function maybeSet(key, value) {
      var index = hash(key) & mask,
          matchKey = keystore[index],
          collisions = 0;

      while (matchKey != keyEmpty) {
        if (equal(matchKey, key)) return valstore[index];
        if (++collisions >= size) throw new Error("full hashmap");
        matchKey = keystore[index = index + 1 & mask];
      }

      keystore[index] = key;
      valstore[index] = value;
      return value;
    }

    function get(key, missingValue) {
      var index = hash(key) & mask,
          matchKey = keystore[index],
          collisions = 0;

      while (matchKey != keyEmpty) {
        if (equal(matchKey, key)) return valstore[index];
        if (++collisions >= size) break;
        matchKey = keystore[index = index + 1 & mask];
      }

      return missingValue;
    }

    function keys() {
      var keys = [];

      for (var i = 0, n = keystore.length; i < n; ++i) {
        var matchKey = keystore[i];
        if (matchKey != keyEmpty) keys.push(matchKey);
      }

      return keys;
    }

    return {
      set: set,
      maybeSet: maybeSet,
      // set if unset
      get: get,
      keys: keys
    };
  };

  var equalPoint = function (pointA, pointB) {
    return pointA[0] === pointB[0] && pointA[1] === pointB[1];
  }; // TODO if quantized, use simpler Int32 hashing?


  var buffer = new ArrayBuffer(16);
  var floats = new Float64Array(buffer);
  var uints = new Uint32Array(buffer);

  var hashPoint = function (point) {
    floats[0] = point[0];
    floats[1] = point[1];
    var hash = uints[0] ^ uints[1];
    hash = hash << 5 ^ hash >> 7 ^ uints[2] ^ uints[3];
    return hash & 0x7fffffff;
  }; // Given an extracted (pre-)topology, identifies all of the junctions. These are
  // the points at which arcs (lines or rings) will need to be cut so that each
  // arc is represented uniquely.
  //
  // A junction is a point where at least one arc deviates from another arc going
  // through the same point. For example, consider the point B. If there is a arc
  // through ABC and another arc through CBA, then B is not a junction because in
  // both cases the adjacent point pairs are {A,C}. However, if there is an
  // additional arc ABD, then {A,D} != {A,C}, and thus B becomes a junction.
  //
  // For a closed ring ABCA, the first point A’s adjacent points are the second
  // and last point {B,C}. For a line, the first and last point are always
  // considered junctions, even if the line is closed; this ensures that a closed
  // line is never rotated.


  var join = function (topology) {
    var coordinates = topology.coordinates,
        lines = topology.lines,
        rings = topology.rings,
        indexes = index(),
        visitedByIndex = new Int32Array(coordinates.length),
        leftByIndex = new Int32Array(coordinates.length),
        rightByIndex = new Int32Array(coordinates.length),
        junctionByIndex = new Int8Array(coordinates.length),
        junctionCount = 0,
        // upper bound on number of junctions
    i,
        n,
        previousIndex,
        currentIndex,
        nextIndex;

    for (i = 0, n = coordinates.length; i < n; ++i) {
      visitedByIndex[i] = leftByIndex[i] = rightByIndex[i] = -1;
    }

    for (i = 0, n = lines.length; i < n; ++i) {
      var line = lines[i],
          lineStart = line[0],
          lineEnd = line[1];
      currentIndex = indexes[lineStart];
      nextIndex = indexes[++lineStart];
      ++junctionCount, junctionByIndex[currentIndex] = 1; // start

      while (++lineStart <= lineEnd) {
        sequence(i, previousIndex = currentIndex, currentIndex = nextIndex, nextIndex = indexes[lineStart]);
      }

      ++junctionCount, junctionByIndex[nextIndex] = 1; // end
    }

    for (i = 0, n = coordinates.length; i < n; ++i) {
      visitedByIndex[i] = -1;
    }

    for (i = 0, n = rings.length; i < n; ++i) {
      var ring = rings[i],
          ringStart = ring[0] + 1,
          ringEnd = ring[1];
      previousIndex = indexes[ringEnd - 1];
      currentIndex = indexes[ringStart - 1];
      nextIndex = indexes[ringStart];
      sequence(i, previousIndex, currentIndex, nextIndex);

      while (++ringStart <= ringEnd) {
        sequence(i, previousIndex = currentIndex, currentIndex = nextIndex, nextIndex = indexes[ringStart]);
      }
    }

    function sequence(i, previousIndex, currentIndex, nextIndex) {
      if (visitedByIndex[currentIndex] === i) return; // ignore self-intersection

      visitedByIndex[currentIndex] = i;
      var leftIndex = leftByIndex[currentIndex];

      if (leftIndex >= 0) {
        var rightIndex = rightByIndex[currentIndex];

        if ((leftIndex !== previousIndex || rightIndex !== nextIndex) && (leftIndex !== nextIndex || rightIndex !== previousIndex)) {
          ++junctionCount, junctionByIndex[currentIndex] = 1;
        }
      } else {
        leftByIndex[currentIndex] = previousIndex;
        rightByIndex[currentIndex] = nextIndex;
      }
    }

    function index() {
      var indexByPoint = hashmap(coordinates.length * 1.4, hashIndex, equalIndex, Int32Array, -1, Int32Array),
          indexes = new Int32Array(coordinates.length);

      for (var i = 0, n = coordinates.length; i < n; ++i) {
        indexes[i] = indexByPoint.maybeSet(i, i);
      }

      return indexes;
    }

    function hashIndex(i) {
      return hashPoint(coordinates[i]);
    }

    function equalIndex(i, j) {
      return equalPoint(coordinates[i], coordinates[j]);
    }

    visitedByIndex = leftByIndex = rightByIndex = null;
    var junctionByPoint = hashset(junctionCount * 1.4, hashPoint, equalPoint),
        j; // Convert back to a standard hashset by point for caller convenience.

    for (i = 0, n = coordinates.length; i < n; ++i) {
      if (junctionByIndex[j = indexes[i]]) {
        junctionByPoint.add(coordinates[j]);
      }
    }

    return junctionByPoint;
  }; // Given an extracted (pre-)topology, cuts (or rotates) arcs so that all shared
  // point sequences are identified. The topology can then be subsequently deduped
  // to remove exact duplicate arcs.


  var cut = function (topology) {
    var junctions = join(topology),
        coordinates = topology.coordinates,
        lines = topology.lines,
        rings = topology.rings,
        next,
        i,
        n;

    for (i = 0, n = lines.length; i < n; ++i) {
      var line = lines[i],
          lineMid = line[0],
          lineEnd = line[1];

      while (++lineMid < lineEnd) {
        if (junctions.has(coordinates[lineMid])) {
          next = {
            0: lineMid,
            1: line[1]
          };
          line[1] = lineMid;
          line = line.next = next;
        }
      }
    }

    for (i = 0, n = rings.length; i < n; ++i) {
      var ring = rings[i],
          ringStart = ring[0],
          ringMid = ringStart,
          ringEnd = ring[1],
          ringFixed = junctions.has(coordinates[ringStart]);

      while (++ringMid < ringEnd) {
        if (junctions.has(coordinates[ringMid])) {
          if (ringFixed) {
            next = {
              0: ringMid,
              1: ring[1]
            };
            ring[1] = ringMid;
            ring = ring.next = next;
          } else {
            // For the first junction, we can rotate rather than cut.
            rotateArray(coordinates, ringStart, ringEnd, ringEnd - ringMid);
            coordinates[ringEnd] = coordinates[ringStart];
            ringFixed = true;
            ringMid = ringStart; // restart; we may have skipped junctions
          }
        }
      }
    }

    return topology;
  };

  function rotateArray(array, start, end, offset) {
    reverse(array, start, end);
    reverse(array, start, start + offset);
    reverse(array, start + offset, end);
  }

  function reverse(array, start, end) {
    for (var mid = start + (end-- - start >> 1), t; start < mid; ++start, --end) {
      t = array[start], array[start] = array[end], array[end] = t;
    }
  } // Given a cut topology, combines duplicate arcs.


  var dedup = function (topology) {
    var coordinates = topology.coordinates,
        lines = topology.lines,
        line,
        rings = topology.rings,
        ring,
        arcCount = lines.length + rings.length,
        i,
        n;
    delete topology.lines;
    delete topology.rings; // Count the number of (non-unique) arcs to initialize the hashmap safely.

    for (i = 0, n = lines.length; i < n; ++i) {
      line = lines[i];

      while (line = line.next) ++arcCount;
    }

    for (i = 0, n = rings.length; i < n; ++i) {
      ring = rings[i];

      while (ring = ring.next) ++arcCount;
    }

    var arcsByEnd = hashmap(arcCount * 2 * 1.4, hashPoint, equalPoint),
        arcs = topology.arcs = [];

    for (i = 0, n = lines.length; i < n; ++i) {
      line = lines[i];

      do {
        dedupLine(line);
      } while (line = line.next);
    }

    for (i = 0, n = rings.length; i < n; ++i) {
      ring = rings[i];

      if (ring.next) {
        // arc is no longer closed
        do {
          dedupLine(ring);
        } while (ring = ring.next);
      } else {
        dedupRing(ring);
      }
    }

    function dedupLine(arc) {
      var startPoint, endPoint, startArcs, startArc, endArcs, endArc, i, n; // Does this arc match an existing arc in order?

      if (startArcs = arcsByEnd.get(startPoint = coordinates[arc[0]])) {
        for (i = 0, n = startArcs.length; i < n; ++i) {
          startArc = startArcs[i];

          if (equalLine(startArc, arc)) {
            arc[0] = startArc[0];
            arc[1] = startArc[1];
            return;
          }
        }
      } // Does this arc match an existing arc in reverse order?


      if (endArcs = arcsByEnd.get(endPoint = coordinates[arc[1]])) {
        for (i = 0, n = endArcs.length; i < n; ++i) {
          endArc = endArcs[i];

          if (reverseEqualLine(endArc, arc)) {
            arc[1] = endArc[0];
            arc[0] = endArc[1];
            return;
          }
        }
      }

      if (startArcs) startArcs.push(arc);else arcsByEnd.set(startPoint, [arc]);
      if (endArcs) endArcs.push(arc);else arcsByEnd.set(endPoint, [arc]);
      arcs.push(arc);
    }

    function dedupRing(arc) {
      var endPoint, endArcs, endArc, i, n; // Does this arc match an existing line in order, or reverse order?
      // Rings are closed, so their start point and end point is the same.

      if (endArcs = arcsByEnd.get(endPoint = coordinates[arc[0]])) {
        for (i = 0, n = endArcs.length; i < n; ++i) {
          endArc = endArcs[i];

          if (equalRing(endArc, arc)) {
            arc[0] = endArc[0];
            arc[1] = endArc[1];
            return;
          }

          if (reverseEqualRing(endArc, arc)) {
            arc[0] = endArc[1];
            arc[1] = endArc[0];
            return;
          }
        }
      } // Otherwise, does this arc match an existing ring in order, or reverse order?


      if (endArcs = arcsByEnd.get(endPoint = coordinates[arc[0] + findMinimumOffset(arc)])) {
        for (i = 0, n = endArcs.length; i < n; ++i) {
          endArc = endArcs[i];

          if (equalRing(endArc, arc)) {
            arc[0] = endArc[0];
            arc[1] = endArc[1];
            return;
          }

          if (reverseEqualRing(endArc, arc)) {
            arc[0] = endArc[1];
            arc[1] = endArc[0];
            return;
          }
        }
      }

      if (endArcs) endArcs.push(arc);else arcsByEnd.set(endPoint, [arc]);
      arcs.push(arc);
    }

    function equalLine(arcA, arcB) {
      var ia = arcA[0],
          ib = arcB[0],
          ja = arcA[1],
          jb = arcB[1];
      if (ia - ja !== ib - jb) return false;

      for (; ia <= ja; ++ia, ++ib) if (!equalPoint(coordinates[ia], coordinates[ib])) return false;

      return true;
    }

    function reverseEqualLine(arcA, arcB) {
      var ia = arcA[0],
          ib = arcB[0],
          ja = arcA[1],
          jb = arcB[1];
      if (ia - ja !== ib - jb) return false;

      for (; ia <= ja; ++ia, --jb) if (!equalPoint(coordinates[ia], coordinates[jb])) return false;

      return true;
    }

    function equalRing(arcA, arcB) {
      var ia = arcA[0],
          ib = arcB[0],
          ja = arcA[1],
          jb = arcB[1],
          n = ja - ia;
      if (n !== jb - ib) return false;
      var ka = findMinimumOffset(arcA),
          kb = findMinimumOffset(arcB);

      for (var i = 0; i < n; ++i) {
        if (!equalPoint(coordinates[ia + (i + ka) % n], coordinates[ib + (i + kb) % n])) return false;
      }

      return true;
    }

    function reverseEqualRing(arcA, arcB) {
      var ia = arcA[0],
          ib = arcB[0],
          ja = arcA[1],
          jb = arcB[1],
          n = ja - ia;
      if (n !== jb - ib) return false;
      var ka = findMinimumOffset(arcA),
          kb = n - findMinimumOffset(arcB);

      for (var i = 0; i < n; ++i) {
        if (!equalPoint(coordinates[ia + (i + ka) % n], coordinates[jb - (i + kb) % n])) return false;
      }

      return true;
    } // Rings are rotated to a consistent, but arbitrary, start point.
    // This is necessary to detect when a ring and a rotated copy are dupes.


    function findMinimumOffset(arc) {
      var start = arc[0],
          end = arc[1],
          mid = start,
          minimum = mid,
          minimumPoint = coordinates[mid];

      while (++mid < end) {
        var point = coordinates[mid];

        if (point[0] < minimumPoint[0] || point[0] === minimumPoint[0] && point[1] < minimumPoint[1]) {
          minimum = mid;
          minimumPoint = point;
        }
      }

      return minimum - start;
    }

    return topology;
  }; // Given an array of arcs in absolute (but already quantized!) coordinates,
  // converts to fixed-point delta encoding.
  // This is a destructive operation that modifies the given arcs!


  var delta = function (arcs) {
    var i = -1,
        n = arcs.length;

    while (++i < n) {
      var arc = arcs[i],
          j = 0,
          k = 1,
          m = arc.length,
          point = arc[0],
          x0 = point[0],
          y0 = point[1],
          x1,
          y1;

      while (++j < m) {
        point = arc[j], x1 = point[0], y1 = point[1];
        if (x1 !== x0 || y1 !== y0) arc[k++] = [x1 - x0, y1 - y0], x0 = x1, y0 = y1;
      }

      if (k === 1) arc[k++] = [0, 0]; // Each arc must be an array of two or more positions.

      arc.length = k;
    }

    return arcs;
  }; // Extracts the lines and rings from the specified hash of geometry objects.
  //
  // Returns an object with three properties:
  //
  // * coordinates - shared buffer of [x, y] coordinates
  // * lines - lines extracted from the hash, of the form [start, end]
  // * rings - rings extracted from the hash, of the form [start, end]
  //
  // For each ring or line, start and end represent inclusive indexes into the
  // coordinates buffer. For rings (and closed lines), coordinates[start] equals
  // coordinates[end].
  //
  // For each line or polygon geometry in the input hash, including nested
  // geometries as in geometry collections, the `coordinates` array is replaced
  // with an equivalent `arcs` array that, for each line (for line string
  // geometries) or ring (for polygon geometries), points to one of the above
  // lines or rings.


  var extract = function (objects) {
    var index = -1,
        lines = [],
        rings = [],
        coordinates = [];

    function extractGeometry(geometry) {
      if (geometry && extractGeometryType.hasOwnProperty(geometry.type)) extractGeometryType[geometry.type](geometry);
    }

    var extractGeometryType = {
      GeometryCollection: function (o) {
        o.geometries.forEach(extractGeometry);
      },
      LineString: function (o) {
        o.arcs = extractLine(o.arcs);
      },
      MultiLineString: function (o) {
        o.arcs = o.arcs.map(extractLine);
      },
      Polygon: function (o) {
        o.arcs = o.arcs.map(extractRing);
      },
      MultiPolygon: function (o) {
        o.arcs = o.arcs.map(extractMultiRing);
      }
    };

    function extractLine(line) {
      for (var i = 0, n = line.length; i < n; ++i) coordinates[++index] = line[i];

      var arc = {
        0: index - n + 1,
        1: index
      };
      lines.push(arc);
      return arc;
    }

    function extractRing(ring) {
      for (var i = 0, n = ring.length; i < n; ++i) coordinates[++index] = ring[i];

      var arc = {
        0: index - n + 1,
        1: index
      };
      rings.push(arc);
      return arc;
    }

    function extractMultiRing(rings) {
      return rings.map(extractRing);
    }

    for (var key in objects) {
      extractGeometry(objects[key]);
    }

    return {
      type: "Topology",
      coordinates: coordinates,
      lines: lines,
      rings: rings,
      objects: objects
    };
  }; // Given a hash of GeoJSON objects, returns a hash of GeoJSON geometry objects.
  // Any null input geometry objects are represented as {type: null} in the output.
  // Any feature.{id,properties,bbox} are transferred to the output geometry object.
  // Each output geometry object is a shallow copy of the input (e.g., properties, coordinates)!


  var geometry = function (inputs) {
    var outputs = {},
        key;

    for (key in inputs) outputs[key] = geomifyObject(inputs[key]);

    return outputs;
  };

  function geomifyObject(input) {
    return input == null ? {
      type: null
    } : (input.type === "FeatureCollection" ? geomifyFeatureCollection : input.type === "Feature" ? geomifyFeature : geomifyGeometry)(input);
  }

  function geomifyFeatureCollection(input) {
    var output = {
      type: "GeometryCollection",
      geometries: input.features.map(geomifyFeature)
    };
    if (input.bbox != null) output.bbox = input.bbox;
    return output;
  }

  function geomifyFeature(input) {
    var output = geomifyGeometry(input.geometry),
        key; // eslint-disable-line no-unused-vars

    if (input.id != null) output.id = input.id;
    if (input.bbox != null) output.bbox = input.bbox;

    for (key in input.properties) {
      output.properties = input.properties;
      break;
    }

    return output;
  }

  function geomifyGeometry(input) {
    if (input == null) return {
      type: null
    };
    var output = input.type === "GeometryCollection" ? {
      type: "GeometryCollection",
      geometries: input.geometries.map(geomifyGeometry)
    } : input.type === "Point" || input.type === "MultiPoint" ? {
      type: input.type,
      coordinates: input.coordinates
    } : {
      type: input.type,
      arcs: input.coordinates
    }; // TODO Check for unknown types?

    if (input.bbox != null) output.bbox = input.bbox;
    return output;
  }

  var prequantize = function (objects, bbox, n) {
    var x0 = bbox[0],
        y0 = bbox[1],
        x1 = bbox[2],
        y1 = bbox[3],
        kx = x1 - x0 ? (n - 1) / (x1 - x0) : 1,
        ky = y1 - y0 ? (n - 1) / (y1 - y0) : 1;

    function quantizePoint(input) {
      return [Math.round((input[0] - x0) * kx), Math.round((input[1] - y0) * ky)];
    }

    function quantizePoints(input, m) {
      var i = -1,
          j = 0,
          n = input.length,
          output = new Array(n),
          // pessimistic
      pi,
          px,
          py,
          x,
          y;

      while (++i < n) {
        pi = input[i];
        x = Math.round((pi[0] - x0) * kx);
        y = Math.round((pi[1] - y0) * ky);
        if (x !== px || y !== py) output[j++] = [px = x, py = y]; // non-coincident points
      }

      output.length = j;

      while (j < m) j = output.push([output[0][0], output[0][1]]);

      return output;
    }

    function quantizeLine(input) {
      return quantizePoints(input, 2);
    }

    function quantizeRing(input) {
      return quantizePoints(input, 4);
    }

    function quantizePolygon(input) {
      return input.map(quantizeRing);
    }

    function quantizeGeometry(o) {
      if (o != null && quantizeGeometryType.hasOwnProperty(o.type)) quantizeGeometryType[o.type](o);
    }

    var quantizeGeometryType = {
      GeometryCollection: function (o) {
        o.geometries.forEach(quantizeGeometry);
      },
      Point: function (o) {
        o.coordinates = quantizePoint(o.coordinates);
      },
      MultiPoint: function (o) {
        o.coordinates = o.coordinates.map(quantizePoint);
      },
      LineString: function (o) {
        o.arcs = quantizeLine(o.arcs);
      },
      MultiLineString: function (o) {
        o.arcs = o.arcs.map(quantizeLine);
      },
      Polygon: function (o) {
        o.arcs = quantizePolygon(o.arcs);
      },
      MultiPolygon: function (o) {
        o.arcs = o.arcs.map(quantizePolygon);
      }
    };

    for (var key in objects) {
      quantizeGeometry(objects[key]);
    }

    return {
      scale: [1 / kx, 1 / ky],
      translate: [x0, y0]
    };
  }; // Constructs the TopoJSON Topology for the specified hash of features.
  // Each object in the specified hash must be a GeoJSON object,
  // meaning FeatureCollection, a Feature or a geometry object.


  var topology = function (objects, quantization) {
    var bbox = bounds(objects = geometry(objects)),
        transform = quantization > 0 && bbox && prequantize(objects, bbox, quantization),
        topology = dedup(cut(extract(objects))),
        coordinates = topology.coordinates,
        indexByArc = hashmap(topology.arcs.length * 1.4, hashArc, equalArc);
    objects = topology.objects; // for garbage collection

    topology.bbox = bbox;
    topology.arcs = topology.arcs.map(function (arc, i) {
      indexByArc.set(arc, i);
      return coordinates.slice(arc[0], arc[1] + 1);
    });
    delete topology.coordinates;
    coordinates = null;

    function indexGeometry(geometry$$1) {
      if (geometry$$1 && indexGeometryType.hasOwnProperty(geometry$$1.type)) indexGeometryType[geometry$$1.type](geometry$$1);
    }

    var indexGeometryType = {
      GeometryCollection: function (o) {
        o.geometries.forEach(indexGeometry);
      },
      LineString: function (o) {
        o.arcs = indexArcs(o.arcs);
      },
      MultiLineString: function (o) {
        o.arcs = o.arcs.map(indexArcs);
      },
      Polygon: function (o) {
        o.arcs = o.arcs.map(indexArcs);
      },
      MultiPolygon: function (o) {
        o.arcs = o.arcs.map(indexMultiArcs);
      }
    };

    function indexArcs(arc) {
      var indexes = [];

      do {
        var index = indexByArc.get(arc);
        indexes.push(arc[0] < arc[1] ? index : ~index);
      } while (arc = arc.next);

      return indexes;
    }

    function indexMultiArcs(arcs) {
      return arcs.map(indexArcs);
    }

    for (var key in objects) {
      indexGeometry(objects[key]);
    }

    if (transform) {
      topology.transform = transform;
      topology.arcs = delta(topology.arcs);
    }

    return topology;
  };

  function hashArc(arc) {
    var i = arc[0],
        j = arc[1],
        t;
    if (j < i) t = i, i = j, j = t;
    return i + 31 * j;
  }

  function equalArc(arcA, arcB) {
    var ia = arcA[0],
        ja = arcA[1],
        ib = arcB[0],
        jb = arcB[1],
        t;
    if (ja < ia) t = ia, ia = ja, ja = t;
    if (jb < ib) t = ib, ib = jb, jb = t;
    return ia === ib && ja === jb;
  }

  exports.topology = topology;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

_$topojsonServer_11 = _$topojsonServer_11.exports
var _$topojsonSimplify_12 = { exports: {} };
// https://github.com/topojson/topojson-simplify Version 3.0.2. Copyright 2017 Mike Bostock.
(function (global, factory) {
  typeof _$topojsonSimplify_12.exports === 'object' && "object" !== 'undefined' ? factory(_$topojsonSimplify_12.exports, _$topojsonClient_10) : typeof define === 'function' && define.amd ? define(['exports', 'topojson-client'], factory) : factory(global.topojson = global.topojson || {}, global.topojson);
})(this, function (exports, topojsonClient) {
  'use strict';

  var prune = function (topology) {
    var oldObjects = topology.objects,
        newObjects = {},
        oldArcs = topology.arcs,
        oldArcsLength = oldArcs.length,
        oldIndex = -1,
        newIndexByOldIndex = new Array(oldArcsLength),
        newArcsLength = 0,
        newArcs,
        newIndex = -1,
        key;

    function scanGeometry(input) {
      switch (input.type) {
        case "GeometryCollection":
          input.geometries.forEach(scanGeometry);
          break;

        case "LineString":
          scanArcs(input.arcs);
          break;

        case "MultiLineString":
          input.arcs.forEach(scanArcs);
          break;

        case "Polygon":
          input.arcs.forEach(scanArcs);
          break;

        case "MultiPolygon":
          input.arcs.forEach(scanMultiArcs);
          break;
      }
    }

    function scanArc(index) {
      if (index < 0) index = ~index;
      if (!newIndexByOldIndex[index]) newIndexByOldIndex[index] = 1, ++newArcsLength;
    }

    function scanArcs(arcs) {
      arcs.forEach(scanArc);
    }

    function scanMultiArcs(arcs) {
      arcs.forEach(scanArcs);
    }

    function reindexGeometry(input) {
      var output;

      switch (input.type) {
        case "GeometryCollection":
          output = {
            type: "GeometryCollection",
            geometries: input.geometries.map(reindexGeometry)
          };
          break;

        case "LineString":
          output = {
            type: "LineString",
            arcs: reindexArcs(input.arcs)
          };
          break;

        case "MultiLineString":
          output = {
            type: "MultiLineString",
            arcs: input.arcs.map(reindexArcs)
          };
          break;

        case "Polygon":
          output = {
            type: "Polygon",
            arcs: input.arcs.map(reindexArcs)
          };
          break;

        case "MultiPolygon":
          output = {
            type: "MultiPolygon",
            arcs: input.arcs.map(reindexMultiArcs)
          };
          break;

        default:
          return input;
      }

      if (input.id != null) output.id = input.id;
      if (input.bbox != null) output.bbox = input.bbox;
      if (input.properties != null) output.properties = input.properties;
      return output;
    }

    function reindexArc(oldIndex) {
      return oldIndex < 0 ? ~newIndexByOldIndex[~oldIndex] : newIndexByOldIndex[oldIndex];
    }

    function reindexArcs(arcs) {
      return arcs.map(reindexArc);
    }

    function reindexMultiArcs(arcs) {
      return arcs.map(reindexArcs);
    }

    for (key in oldObjects) {
      scanGeometry(oldObjects[key]);
    }

    newArcs = new Array(newArcsLength);

    while (++oldIndex < oldArcsLength) {
      if (newIndexByOldIndex[oldIndex]) {
        newIndexByOldIndex[oldIndex] = ++newIndex;
        newArcs[newIndex] = oldArcs[oldIndex];
      }
    }

    for (key in oldObjects) {
      newObjects[key] = reindexGeometry(oldObjects[key]);
    }

    return {
      type: "Topology",
      bbox: topology.bbox,
      transform: topology.transform,
      objects: newObjects,
      arcs: newArcs
    };
  };

  var filter = function (topology, filter) {
    var oldObjects = topology.objects,
        newObjects = {},
        key;
    if (filter == null) filter = filterTrue;

    function filterGeometry(input) {
      var output, arcs;

      switch (input.type) {
        case "Polygon":
          {
            arcs = filterRings(input.arcs);
            output = arcs ? {
              type: "Polygon",
              arcs: arcs
            } : {
              type: null
            };
            break;
          }

        case "MultiPolygon":
          {
            arcs = input.arcs.map(filterRings).filter(filterIdentity);
            output = arcs.length ? {
              type: "MultiPolygon",
              arcs: arcs
            } : {
              type: null
            };
            break;
          }

        case "GeometryCollection":
          {
            arcs = input.geometries.map(filterGeometry).filter(filterNotNull);
            output = arcs.length ? {
              type: "GeometryCollection",
              geometries: arcs
            } : {
              type: null
            };
            break;
          }

        default:
          return input;
      }

      if (input.id != null) output.id = input.id;
      if (input.bbox != null) output.bbox = input.bbox;
      if (input.properties != null) output.properties = input.properties;
      return output;
    }

    function filterRings(arcs) {
      return arcs.length && filterExteriorRing(arcs[0]) // if the exterior is small, ignore any holes
      ? [arcs[0]].concat(arcs.slice(1).filter(filterInteriorRing)) : null;
    }

    function filterExteriorRing(ring) {
      return filter(ring, false);
    }

    function filterInteriorRing(ring) {
      return filter(ring, true);
    }

    for (key in oldObjects) {
      newObjects[key] = filterGeometry(oldObjects[key]);
    }

    return prune({
      type: "Topology",
      bbox: topology.bbox,
      transform: topology.transform,
      objects: newObjects,
      arcs: topology.arcs
    });
  };

  function filterTrue() {
    return true;
  }

  function filterIdentity(x) {
    return x;
  }

  function filterNotNull(geometry) {
    return geometry.type != null;
  }

  var filterAttached = function (topology) {
    var ownerByArc = new Array(topology.arcs.length),
        // arc index -> index of unique associated ring, or -1 if used by multiple rings
    ownerIndex = 0,
        key;

    function testGeometry(o) {
      switch (o.type) {
        case "GeometryCollection":
          o.geometries.forEach(testGeometry);
          break;

        case "Polygon":
          testArcs(o.arcs);
          break;

        case "MultiPolygon":
          o.arcs.forEach(testArcs);
          break;
      }
    }

    function testArcs(arcs) {
      for (var i = 0, n = arcs.length; i < n; ++i, ++ownerIndex) {
        for (var ring = arcs[i], j = 0, m = ring.length; j < m; ++j) {
          var arc = ring[j];
          if (arc < 0) arc = ~arc;
          var owner = ownerByArc[arc];
          if (owner == null) ownerByArc[arc] = ownerIndex;else if (owner !== ownerIndex) ownerByArc[arc] = -1;
        }
      }
    }

    for (key in topology.objects) {
      testGeometry(topology.objects[key]);
    }

    return function (ring) {
      for (var j = 0, m = ring.length, arc; j < m; ++j) {
        if (ownerByArc[(arc = ring[j]) < 0 ? ~arc : arc] === -1) {
          return true;
        }
      }

      return false;
    };
  };

  function planarTriangleArea(triangle) {
    var a = triangle[0],
        b = triangle[1],
        c = triangle[2];
    return Math.abs((a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1])) / 2;
  }

  function planarRingArea(ring) {
    var i = -1,
        n = ring.length,
        a,
        b = ring[n - 1],
        area = 0;

    while (++i < n) a = b, b = ring[i], area += a[0] * b[1] - a[1] * b[0];

    return Math.abs(area) / 2;
  }

  var filterWeight = function (topology, minWeight, weight) {
    minWeight = minWeight == null ? Number.MIN_VALUE : +minWeight;
    if (weight == null) weight = planarRingArea;
    return function (ring, interior) {
      return weight(topojsonClient.feature(topology, {
        type: "Polygon",
        arcs: [ring]
      }).geometry.coordinates[0], interior) >= minWeight;
    };
  };

  var filterAttachedWeight = function (topology, minWeight, weight) {
    var a = filterAttached(topology),
        w = filterWeight(topology, minWeight, weight);
    return function (ring, interior) {
      return a(ring, interior) || w(ring, interior);
    };
  };

  function compare(a, b) {
    return a[1][2] - b[1][2];
  }

  var newHeap = function () {
    var heap = {},
        array = [],
        size = 0;

    heap.push = function (object) {
      up(array[object._ = size] = object, size++);
      return size;
    };

    heap.pop = function () {
      if (size <= 0) return;
      var removed = array[0],
          object;
      if (--size > 0) object = array[size], down(array[object._ = 0] = object, 0);
      return removed;
    };

    heap.remove = function (removed) {
      var i = removed._,
          object;
      if (array[i] !== removed) return; // invalid request

      if (i !== --size) object = array[size], (compare(object, removed) < 0 ? up : down)(array[object._ = i] = object, i);
      return i;
    };

    function up(object, i) {
      while (i > 0) {
        var j = (i + 1 >> 1) - 1,
            parent = array[j];
        if (compare(object, parent) >= 0) break;
        array[parent._ = i] = parent;
        array[object._ = i = j] = object;
      }
    }

    function down(object, i) {
      while (true) {
        var r = i + 1 << 1,
            l = r - 1,
            j = i,
            child = array[j];
        if (l < size && compare(array[l], child) < 0) child = array[j = l];
        if (r < size && compare(array[r], child) < 0) child = array[j = r];
        if (j === i) break;
        array[child._ = i] = child;
        array[object._ = i = j] = object;
      }
    }

    return heap;
  };

  function copy(point) {
    return [point[0], point[1], 0];
  }

  var presimplify = function (topology, weight) {
    var point = topology.transform ? topojsonClient.transform(topology.transform) : copy,
        heap = newHeap();
    if (weight == null) weight = planarTriangleArea;
    var arcs = topology.arcs.map(function (arc) {
      var triangles = [],
          maxWeight = 0,
          triangle,
          i,
          n;
      arc = arc.map(point);

      for (i = 1, n = arc.length - 1; i < n; ++i) {
        triangle = [arc[i - 1], arc[i], arc[i + 1]];
        triangle[1][2] = weight(triangle);
        triangles.push(triangle);
        heap.push(triangle);
      } // Always keep the arc endpoints!


      arc[0][2] = arc[n][2] = Infinity;

      for (i = 0, n = triangles.length; i < n; ++i) {
        triangle = triangles[i];
        triangle.previous = triangles[i - 1];
        triangle.next = triangles[i + 1];
      }

      while (triangle = heap.pop()) {
        var previous = triangle.previous,
            next = triangle.next; // If the weight of the current point is less than that of the previous
        // point to be eliminated, use the latter’s weight instead. This ensures
        // that the current point cannot be eliminated without eliminating
        // previously- eliminated points.

        if (triangle[1][2] < maxWeight) triangle[1][2] = maxWeight;else maxWeight = triangle[1][2];

        if (previous) {
          previous.next = next;
          previous[2] = triangle[2];
          update(previous);
        }

        if (next) {
          next.previous = previous;
          next[0] = triangle[0];
          update(next);
        }
      }

      return arc;
    });

    function update(triangle) {
      heap.remove(triangle);
      triangle[1][2] = weight(triangle);
      heap.push(triangle);
    }

    return {
      type: "Topology",
      bbox: topology.bbox,
      objects: topology.objects,
      arcs: arcs
    };
  };

  var quantile = function (topology, p) {
    var array = [];
    topology.arcs.forEach(function (arc) {
      arc.forEach(function (point) {
        if (isFinite(point[2])) {
          // Ignore endpoints, whose weight is Infinity.
          array.push(point[2]);
        }
      });
    });
    return array.length && quantile$1(array.sort(descending), p);
  };

  function quantile$1(array, p) {
    if (!(n = array.length)) return;
    if ((p = +p) <= 0 || n < 2) return array[0];
    if (p >= 1) return array[n - 1];
    var n,
        h = (n - 1) * p,
        i = Math.floor(h),
        a = array[i],
        b = array[i + 1];
    return a + (b - a) * (h - i);
  }

  function descending(a, b) {
    return b - a;
  }

  var simplify = function (topology, minWeight) {
    minWeight = minWeight == null ? Number.MIN_VALUE : +minWeight; // Remove points whose weight is less than the minimum weight.

    var arcs = topology.arcs.map(function (input) {
      var i = -1,
          j = 0,
          n = input.length,
          output = new Array(n),
          // pessimistic
      point;

      while (++i < n) {
        if ((point = input[i])[2] >= minWeight) {
          output[j++] = [point[0], point[1]];
        }
      }

      output.length = j;
      return output;
    });
    return {
      type: "Topology",
      transform: topology.transform,
      bbox: topology.bbox,
      objects: topology.objects,
      arcs: arcs
    };
  };

  var pi = Math.PI;
  var tau = 2 * pi;
  var quarterPi = pi / 4;
  var radians = pi / 180;
  var abs = Math.abs;
  var atan2 = Math.atan2;
  var cos = Math.cos;
  var sin = Math.sin;

  function halfArea(ring, closed) {
    var i = 0,
        n = ring.length,
        sum = 0,
        point = ring[closed ? i++ : n - 1],
        lambda0,
        lambda1 = point[0] * radians,
        phi1 = point[1] * radians / 2 + quarterPi,
        cosPhi0,
        cosPhi1 = cos(phi1),
        sinPhi0,
        sinPhi1 = sin(phi1);

    for (; i < n; ++i) {
      point = ring[i];
      lambda0 = lambda1, lambda1 = point[0] * radians;
      phi1 = point[1] * radians / 2 + quarterPi;
      cosPhi0 = cosPhi1, cosPhi1 = cos(phi1);
      sinPhi0 = sinPhi1, sinPhi1 = sin(phi1); // Spherical excess E for a spherical triangle with vertices: south pole,
      // previous point, current point.  Uses a formula derived from Cagnoli’s
      // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
      // See https://github.com/d3/d3-geo/blob/master/README.md#geoArea

      var dLambda = lambda1 - lambda0,
          sdLambda = dLambda >= 0 ? 1 : -1,
          adLambda = sdLambda * dLambda,
          k = sinPhi0 * sinPhi1,
          u = cosPhi0 * cosPhi1 + k * cos(adLambda),
          v = k * sdLambda * sin(adLambda);
      sum += atan2(v, u);
    }

    return sum;
  }

  function sphericalRingArea(ring, interior) {
    var sum = halfArea(ring, true);
    if (interior) sum *= -1;
    return (sum < 0 ? tau + sum : sum) * 2;
  }

  function sphericalTriangleArea(t) {
    return abs(halfArea(t, false)) * 2;
  }

  exports.filter = filter;
  exports.filterAttached = filterAttached;
  exports.filterAttachedWeight = filterAttachedWeight;
  exports.filterWeight = filterWeight;
  exports.planarRingArea = planarRingArea;
  exports.planarTriangleArea = planarTriangleArea;
  exports.presimplify = presimplify;
  exports.quantile = quantile;
  exports.simplify = simplify;
  exports.sphericalRingArea = sphericalRingArea;
  exports.sphericalTriangleArea = sphericalTriangleArea;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

_$topojsonSimplify_12 = _$topojsonSimplify_12.exports
var _$topojsonNode_13 = {};
'use strict';

Object.defineProperty(_$topojsonNode_13, '__esModule', {
  value: true
});

/* removed: var _$topojsonClient_10 = require('topojson-client'); */;

/* removed: var _$topojsonServer_11 = require('topojson-server'); */;

/* removed: var _$topojsonSimplify_12 = require('topojson-simplify'); */;

Object.keys(_$topojsonClient_10).forEach(function (key) {
  _$topojsonNode_13[key] = _$topojsonClient_10[key];
});
Object.keys(_$topojsonServer_11).forEach(function (key) {
  _$topojsonNode_13[key] = _$topojsonServer_11[key];
});
Object.keys(_$topojsonSimplify_12).forEach(function (key) {
  _$topojsonNode_13[key] = _$topojsonSimplify_12[key];
});

var _$yearlyTotals_7=[{"year":1965,"massacres":3},{"year":1966,"massacres":1},{"year":1967,"massacres":1},{"year":1968,"massacres":1},{"year":1969,"massacres":1},{"year":1970,"massacres":0},{"year":1971,"massacres":0},{"year":1972,"massacres":1},{"year":1973,"massacres":1},{"year":1974,"massacres":0},{"year":1975,"massacres":0},{"year":1976,"massacres":1},{"year":1977,"massacres":1},{"year":1978,"massacres":1},{"year":1979,"massacres":5},{"year":1980,"massacres":45},{"year":1981,"massacres":167},{"year":1982,"massacres":334},{"year":1983,"massacres":52},{"year":1984,"massacres":16},{"year":1985,"massacres":7},{"year":1986,"massacres":2},{"year":1987,"massacres":1},{"year":1988,"massacres":2},{"year":1989,"massacres":1},{"year":1990,"massacres":2},{"year":1991,"massacres":0},{"year":1992,"massacres":2},{"year":1993,"massacres":0},{"year":1994,"massacres":0},{"year":1995,"massacres":1}]
var _$makeTranslate_16 = (x, y) => "translate(" + x + ", " + y + ")";

/* removed: var _$d3Min_8 = require("d3/dist/d3.min"); */;

/* removed: var _$yearlyTotals_7 = require("../../data/yearly-totals.json"); */;

/* removed: var _$makeTranslate_16 = require("./lib/makeTranslate"); */;

var fmtComma = s => s.toLocaleString().replace(/\.0+$/, "");

var _$renderChart_21 = function () {
  var labelColumn = "year";
  var valueColumn = "massacres";
  var margins = {
    top: 20,
    right: 10,
    bottom: 20,
    left: 30
  };
  var ticksY = 4;
  var ticksX = 5;
  var roundTicksFactor = 500;
  var container = document.querySelector("div.chart");
  var chartWidth = container.offsetWidth - margins.left - margins.right;
  var chartHeight = 60; // Math.ceil((container.offsetWidth * aspectHeight) / aspectWidth) -
  // margins.top -
  // margins.bottom;
  //clear for redraw

  var containerElement = _$d3Min_8.select(container);
  containerElement.select("svg").remove();
  var chartElement = containerElement.append("svg").attr("width", chartWidth + margins.left + margins.right).attr("height", chartHeight + margins.top + margins.bottom).append("g").attr("transform", "translate(" + margins.left + "," + margins.top + ")");
  var xScale = _$d3Min_8.scaleBand().range([0, chartWidth]).round(true).padding(0.1).domain(_$yearlyTotals_7.map(d => d[labelColumn]));
  var floors = _$yearlyTotals_7.map(d => Math.floor(d[valueColumn] / roundTicksFactor) * roundTicksFactor);
  var min = Math.min(...floors);

  if (min > 0) {
    min = 0;
  }

  var ceilings = _$yearlyTotals_7.map(d => Math.ceil(d[valueColumn] / roundTicksFactor) * roundTicksFactor);
  var max = Math.max(...ceilings);
  var yScale = _$d3Min_8.scaleLog().domain([0.7, 500]).range([chartHeight, 0]); // Create D3 axes.

  var xAxis = _$d3Min_8.axisBottom().scale(xScale).tickValues([1965, 1970, 1975, 1980, 1985, 1990, 1995]);
  var yAxis = _$d3Min_8.axisLeft().scale(yScale).tickValues([10, 100, 500]).tickFormat(function (d) {
    return fmtComma(d);
  }); // Render axes to chart.

  chartElement.append("g").attr("class", "x axis").attr("aria-hidden", "true").attr("transform", _$makeTranslate_16(0, chartHeight)).call(xAxis);
  chartElement.append("g").attr("class", "y axis").attr("aria-hidden", "true").call(yAxis); //y axis grid

  var yAxisGrid = function () {
    return yAxis;
  };

  chartElement.append("g").attr("class", "y grid").call(yAxisGrid().tickSize(-chartWidth, 0, 0).tickFormat("")); // Render bars to chart.

  var bars = chartElement.append("g").attr("class", "bars").selectAll("rect").data(_$yearlyTotals_7).enter().append("rect").attr("x", d => xScale(d[labelColumn])).attr("y", d => d[valueColumn] <= 0 ? yScale(0.7) : yScale(d[valueColumn])).attr("width", xScale.bandwidth()).attr("height", d => d[valueColumn] <= 0 ? 0 : yScale(0.7) - yScale(d[valueColumn])).attr("class", function (d) {
    return "bar" + d[labelColumn];
  }); // add time indicator.

  var timeIndicator = chartElement.append("path").attr("class", "timeIndicator").attr("d", function (d) {
    return "M " + xScale(1965) + " " + yScale(0.6) + "H " + (xScale(1995) + xScale.bandwidth());
  }).attr("stroke", "#fff").attr("stroke-width", 2).attr("fill", "none").attr("stroke-dasharray", function (d) {
    return _$d3Min_8.select(this).node().getTotalLength();
  }).attr("stroke-dashoffset", function (d) {
    return _$d3Min_8.select(this).node().getTotalLength();
  });
};

var _$enterViewMin_9 = { exports: {} };
(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(factory);
  } else if ("object" !== "undefined" && _$enterViewMin_9.exports) {
    _$enterViewMin_9.exports = factory();
  } else {
    window.enterView = factory.call(this);
  }
})(() => {
  const lib = ({
    selector: selector,
    enter = () => {},
    exit = () => {},
    progress = () => {},
    offset = 0,
    once = false
  }) => {
    let raf = null;
    let ticking = false;
    let elements = [];
    let height = 0;

    function setupRaf() {
      raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        return setTimeout(callback, 1e3 / 60);
      };
    }

    function getOffsetHeight() {
      if (offset && typeof offset === "number") {
        const fraction = Math.min(Math.max(0, offset), 1);
        return height - fraction * height;
      }

      return height;
    }

    function updateHeight() {
      const cH = document.documentElement.clientHeight;
      const wH = window.innerHeight || 0;
      height = Math.max(cH, wH);
    }

    function updateScroll() {
      ticking = false;
      const targetFromTop = getOffsetHeight();
      elements = elements.filter(el => {
        const {
          top: top,
          bottom: bottom,
          height: height
        } = el.getBoundingClientRect();
        const entered = top < targetFromTop;
        const exited = bottom < targetFromTop;

        if (entered && !el.__ev_entered) {
          enter(el);
          el.__ev_progress = 0;
          progress(el, el.__ev_progress);
          if (once) return false;
        } else if (!entered && el.__ev_entered) {
          el.__ev_progress = 0;
          progress(el, el.__ev_progress);
          exit(el);
        }

        if (entered && !exited) {
          const delta = (targetFromTop - top) / height;
          el.__ev_progress = Math.min(1, Math.max(0, delta));
          progress(el, el.__ev_progress);
        }

        if (entered && exited && el.__ev_progress !== 1) {
          el.__ev_progress = 1;
          progress(el, el.__ev_progress);
        }

        el.__ev_entered = entered;
        return true;
      });

      if (!elements.length) {
        window.removeEventListener("scroll", onScroll, true);
        window.removeEventListener("resize", onResize, true);
        window.removeEventListener("load", onLoad, true);
      }
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        raf(updateScroll);
      }
    }

    function onResize() {
      updateHeight();
      updateScroll();
    }

    function onLoad() {
      updateHeight();
      updateScroll();
    }

    function selectionToArray(selection) {
      const len = selection.length;
      const result = [];

      for (let i = 0; i < len; i += 1) {
        result.push(selection[i]);
      }

      return result;
    }

    function selectAll(selector, parent = document) {
      if (typeof selector === "string") {
        return selectionToArray(parent.querySelectorAll(selector));
      } else if (selector instanceof NodeList) {
        return selectionToArray(selector);
      } else if (selector instanceof Array) {
        return selector;
      }
    }

    function setupElements() {
      elements = selectAll(selector);
    }

    function setupEvents() {
      window.addEventListener("resize", onResize, true);
      window.addEventListener("scroll", onScroll, true);
      window.addEventListener("load", onLoad, true);
      onResize();
    }

    function init() {
      if (!selector) {
        console.error("must pass a selector");
        return false;
      }

      setupElements();

      if (!elements || !elements.length) {
        console.error("no selector elements found");
        return false;
      }

      setupRaf();
      setupEvents();
      updateScroll();
    }

    init();
  };

  return lib;
});

_$enterViewMin_9 = _$enterViewMin_9.exports
var _$debounce_15 = function (fn, duration = 100) {
  var timeout;
  return function (...args) {
    if (timeout) return;
    timeout = setTimeout(function () {
      timeout = null;
      fn.apply(null, args);
    }, duration);
  };
};

var _$breakpoints_14 = {
  isMobile: window.matchMedia("(max-width: 500px)"),
  isTablet: window.matchMedia("(max-width:750px)"),
  isDesktop: window.matchMedia("(min-width: 501px)")
};

/*
* Wrap a block of SVG text to a given width
* adapted from http://bl.ocks.org/mbostock/7555321
*/
var _$wrapText_18 = function (texts, width, lineHeight) {
  var eachText = function (text) {
    // work with arrays as well
    var words = text.textContent.split(/\s+/).reverse();
    var word = null;
    var line = [];
    var lineNumber = 0;
    var x = text.getAttribute("x") || 0;
    var y = text.getAttribute("y") || 0;
    var dx = parseFloat(text.getAttribute("dx")) || 0;
    var dy = parseFloat(text.getAttribute("dy")) || 0;
    text.textContent = "";
    var NS = "http://www.w3.org/2000/svg";
    var tspan = document.createElementNS(NS, "tspan");
    text.appendChild(tspan);
    var attrs = {
      x,
      y,
      dx: dx + "px",
      dy: dy + "px"
    };

    for (var k in attrs) {
      tspan.setAttribute(k, attrs[k]);
    }

    while (word = words.pop()) {
      line.push(word);
      tspan.textContent = line.join(" ");

      if (tspan.getComputedTextLength() > width) {
        line.pop();
        tspan.textContent = line.join(" ");
        line = [word];
        lineNumber += 1;
        tspan = document.createElementNS(NS, "tspan");
        text.appendChild(tspan);
        var attrs = {
          x,
          y,
          dx: dx + "px",
          dy: lineNumber * lineHeight + dy + "px"
        };

        for (var k in attrs) {
          tspan.setAttribute(k, attrs[k]);
        }

        tspan.textContent = word;
      }
    }
  }; // convert D3 to array


  if ("each" in texts) {
    // call D3-style
    texts = texts.nodes();
  }

  texts.forEach(eachText);
};

var _$focusExtent_2={
"type": "FeatureCollection",
"name": "bounding_box_wgs84",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{
	"type":"Feature",
	"geometry": {
		"type": "Point",
		"coordinates": [ -92.232254741170564, 13.72930666560671 ]
	}
},
{
	"type":"Feature",
	"geometry": {
		"type": "Point",
		"coordinates": [ -88.241023349878972, 13.729429875538147 ]
	}
},
{
	"type":"Feature",
	"geometry": {
		"type": "Point",
		"coordinates": [ -88.200803575466651, 17.808855795958966 ]
	}
},
{
	"type":"Feature",
	"geometry": {
		"type": "Point",
		"coordinates": [ -92.272742983103228, 17.80873014520208 ]
	}
}
]
}
var _$rasterExtent_6={
"type": "FeatureCollection",
"name": "bounding_box_wgs84",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{
	"type":"Feature",
	"geometry": {
		"type": "Point",
		"coordinates": [ -95.999613227049053, 11.986058568650364 ]
	}
},
{
	"type":"Feature",
	"geometry": {
		"type": "Point",
		"coordinates": [ -84.999999999998636, 12.000000000002679 ]
	}
},
{
	"type":"Feature",
	"geometry": {
		"type": "Point",
		"coordinates": [ -84.79018172406721, 20.008356901762397 ]
	}
},
{
	"type":"Feature",
	"geometry": {
		"type": "Point",
		"coordinates": [ -96.231057881703805, 19.99385881141994 ]
	}
}
]
}
var _$municipiosTopo_5={"type":"Topology","arcs":[[[9957,21690],[5829,-5]],[[15786,21685],[25,-46],[48,-51],[29,-6],[46,43],[34,18],[42,-23],[-1,-34],[-75,-62],[-31,-79],[-26,-27],[-78,-7],[2,-41],[64,6],[57,-22],[26,-42],[9,-97],[-35,9],[-34,40],[-39,19],[-28,-7],[-13,-83],[-31,-28],[-42,-16],[-49,-3],[-29,-14],[-57,-85],[-51,-12],[-25,13],[-17,94],[-28,24],[-65,-17],[-29,-29],[-17,-82],[-34,-62],[-29,-100],[-81,-37]],[[15224,20839],[75,97],[-4,44],[-24,10],[-33,-31],[-23,-39],[-63,9],[-41,-27],[-18,21],[33,55],[-1,35],[-35,12],[-30,-33],[-15,-56],[-21,11],[12,39],[-29,45],[-33,-3],[-30,-59],[-21,-20],[-19,69],[-38,34],[-25,-4],[-5,-67],[-48,-27],[-17,-46],[-29,-10],[-25,13],[20,59],[-43,19],[-41,-38],[-38,5],[-6,39],[17,32],[-11,44],[-40,16],[-26,34],[-40,15],[-37,0],[-89,-27],[-48,10],[4,46],[28,12],[69,-4],[25,12],[5,40],[-14,85],[-41,33],[-72,-62],[-38,-54],[-30,1],[-52,40],[-101,109],[-33,-4],[-53,-27],[-56,8],[-20,34],[-29,-15],[-22,-36],[-77,32],[-19,-3],[-34,-77],[-66,-55],[-14,-25],[-93,-37],[-63,15],[-14,-39],[50,-72],[12,-122],[-64,15],[-43,-7],[-10,-42],[13,-72],[41,-50],[-14,-48],[-31,-11],[-58,20],[-26,31],[-53,22],[-30,26],[-65,9],[-27,-13],[-4,-48],[6,-59],[-29,-35],[-48,-4],[-29,17],[-91,-58],[1,-61],[60,-23],[40,-87],[44,15],[48,-1],[23,-38],[-5,-62],[-22,-50],[-100,-62],[-36,-59],[9,-91],[-5,-44],[-55,-105],[2,-61],[55,-6],[59,26],[35,-5],[38,-37],[1,-73],[-17,-44],[58,-25],[20,-29],[-2,-27],[-50,-62],[-8,-35],[-33,-14],[-16,-59],[-52,-12],[-17,-45],[-30,-18],[-23,22],[-37,-1],[-69,-57],[-37,-75],[-7,-40],[-53,-33],[-2,-45],[-20,-34],[4,-32],[39,-32],[-58,-57],[-6,-38],[-27,-5],[-32,-36],[-31,-17],[-6,-66],[-25,-21],[-58,-6],[-42,-37],[-18,-128],[-48,-20],[-26,-23],[3,-26],[44,-33],[61,-22],[32,-1],[60,61],[26,3],[92,-55],[5,-40],[39,-100],[-3,-19],[-75,-28],[-41,19],[-43,-39],[32,-26],[58,26],[30,-6],[40,-71],[66,-58],[0,-23],[-68,-4],[-81,-89],[-19,-13]],[[12746,18128],[-55,62],[-28,4],[-41,-37],[-16,42],[30,38],[-24,42],[-26,-7],[-15,-39],[-34,-6],[-55,14],[-21,-48],[-35,-12],[-16,-43],[-43,10],[-9,-49],[-74,3],[-54,-15],[-24,29],[-42,-22],[-32,26],[-38,-5],[-75,21],[-21,15],[-15,47],[-38,-3],[-17,23],[36,42],[-3,15],[-85,3],[-40,16],[-63,1],[-37,17],[-111,124],[-129,156],[-23,10],[-303,-28]],[[11170,18574],[-150,-13],[-123,123],[-62,5],[-245,150],[-174,53],[-312,105],[-38,7]],[[10066,19004],[-43,17],[7,85],[58,42]],[[10088,19148],[10,26],[196,757],[46,165],[21,95],[20,54],[67,-20],[41,186],[-15,20],[-164,66],[15,75],[42,137],[-10,14],[-82,0],[-113,-8],[-91,1],[-28,32],[26,56],[-48,11],[-33,48],[-25,71],[-32,28],[-78,-3],[-89,57],[20,47],[-1,76],[21,88],[-47,15],[-14,44],[47,32],[63,10],[21,26],[-11,46],[98,89],[-2,20],[-41,78],[0,35],[38,48],[1,20]],[[15224,20839],[88,-172],[93,-191],[43,-79],[40,-89],[91,-174],[289,-591],[52,-99],[189,-392],[23,-20],[165,-115],[133,-99],[260,-182],[226,-165],[86,-58]],[[17002,18413],[-122,-304],[-76,-197],[-212,-195],[-117,-100],[96,-217],[24,-44],[213,-455],[69,-138],[0,-363],[-56,-110],[-41,-64],[-81,-142],[-29,-61],[20,-51],[63,-200],[14,-21]],[[16767,15751],[-6,-25],[-94,-213],[-69,-164],[192,-209],[42,0],[122,46],[244,102],[116,44],[23,-131],[23,-172],[8,-26]],[[17368,15003],[4,-62],[27,-171],[-25,-14]],[[17374,14756],[-79,26],[-129,27],[-61,18],[-158,38],[-75,22],[-110,24],[-403,104]],[[16359,15015],[53,215],[-15,12],[-156,61],[-188,80],[-132,53]],[[15921,15436],[-322,134],[-6,11],[91,222],[8,62],[-213,46],[-160,39],[-158,32],[-251,58],[-289,59],[-266,62],[-44,6],[-199,47],[-12,-1]],[[14100,16213],[43,19],[30,25],[23,43],[60,52],[43,-21],[20,34],[63,34],[-9,50],[8,65],[-25,85],[-7,107],[-51,87],[10,20],[-5,51],[-17,44],[-27,37],[-13,50],[-28,42],[-21,10],[-59,1],[-56,33],[-29,36],[4,46],[50,28]],[[14107,17191],[26,19],[11,74],[13,18],[-11,38],[4,41],[-64,13],[-7,38],[-44,25],[-14,44],[0,92],[-53,36],[-56,14],[-19,33],[36,22],[1,34],[-107,19],[-162,-22],[-46,6],[-31,37],[-25,1],[-150,47],[-47,0],[-115,29],[-74,23],[-51,28],[-64,13],[-171,76],[-65,18],[-36,-8],[-69,15],[-4,51],[33,63]],[[32973,16369],[-93,29],[-86,18],[-42,42],[-37,83],[-35,35],[-60,28],[-70,8],[-44,14],[-30,49],[-7,89],[-83,52],[-64,61],[-7,53],[17,52],[21,29],[39,88],[14,61],[-5,62],[-69,33],[-85,17],[-36,40],[-34,62],[-72,61],[-44,20],[-81,18],[-47,2],[-38,-22],[-49,1],[-46,-27],[-38,-42],[-9,-67],[-19,-62],[-21,-38],[-38,-29],[-95,3],[-110,-42],[-57,22],[-43,-27],[-80,-17],[-94,20],[-117,-12],[-179,35]],[[30900,17171],[22,40],[16,65],[18,29],[46,107],[20,82],[25,141],[-7,57],[6,55],[21,76],[18,35],[43,37],[72,42],[91,38],[15,25],[3,55],[53,38],[18,23],[-5,82],[-29,36],[-77,35],[-66,4],[-20,22],[-86,16],[-111,-5],[-44,31],[-27,76],[-50,97],[-14,52],[-19,36],[-14,54],[4,44],[30,65],[33,19],[56,-26],[107,18],[119,63],[114,110],[12,25]],[[31293,18970],[82,-65],[61,-32],[21,-24],[111,-80],[65,-33],[122,-30],[19,-28],[11,-69],[-37,30],[-39,-20],[1,-27],[30,-52],[31,-25],[-69,-7],[6,-41],[-35,-29],[7,-50],[-84,-34],[-11,-82],[1,-54],[37,-44],[49,-2],[28,-28],[35,15],[8,25],[67,-27],[21,5],[114,50],[48,1],[11,42],[22,26],[12,44],[-70,66],[-8,29],[8,50],[-20,55],[35,54],[55,25],[49,-11],[33,20],[49,46],[48,90],[-37,-13],[-29,7],[-7,46],[33,62],[36,35],[49,64],[78,144],[60,154],[-44,74],[-39,38],[-14,62],[3,205],[36,21],[35,-67],[58,-50],[57,56],[38,-10],[31,-27],[68,-39],[54,1],[54,-21],[84,-18],[39,15],[35,-19],[34,20],[22,41],[7,72],[-45,52],[-104,5],[-19,9],[-9,51],[12,20],[-11,51],[-138,30],[-67,31],[-56,-3],[-75,64],[-3,86],[-12,38],[-52,13],[-44,58],[-6,40],[-23,35],[-74,37],[-28,32],[-58,19],[-29,-2],[-54,44],[-35,56],[-21,12],[-83,6],[-48,35],[-43,91],[-9,62],[-27,66],[6,24],[59,19],[72,1],[146,-33],[66,-26],[212,-118],[40,-17],[91,-76],[144,-147],[102,-112],[111,-106],[113,-88],[183,-130],[136,-109],[170,-113],[81,-47],[166,-81],[123,-76],[122,-57],[116,-66],[99,-70],[162,-101],[81,-39],[62,-44],[115,-72],[89,-78],[56,-59],[35,-51],[140,-156],[83,-60],[72,-43],[202,-55],[57,10],[19,-35],[-253,-22],[-4,-24],[41,-72],[33,-18],[-21,-107],[-35,-19],[10,-48],[-34,-24],[-37,13],[-35,45],[-23,-9],[39,-50],[-25,-44],[-37,-7],[-12,23],[5,53],[-37,2],[-22,-41],[-28,-6],[-43,56],[-24,9],[-26,-24],[11,-30],[32,-29],[8,-61],[-22,-19],[-100,-1],[-74,-28],[-28,8],[-41,67],[-29,0],[-26,-66],[-24,-20],[-35,18],[-18,-19],[8,-98],[17,-23],[-20,-79],[-45,-89],[-94,-149],[-48,-63],[-55,-45],[-422,-363],[-628,-553],[-154,-104]],[[30900,17171],[-37,-13],[-121,-72],[-55,-11],[-54,-29],[-119,-14],[-61,8],[-35,-9],[-70,6],[-44,-7],[-63,-37],[-70,9],[-31,16],[-54,4],[-54,-35],[-53,25],[-58,7],[-267,-22],[-62,-60],[-55,-30],[-81,-57],[-44,-20],[-80,-12],[-45,41],[-68,4],[-170,47],[-71,9],[-56,-17],[-110,-69],[-39,-7],[-115,-1],[-49,16]],[[28609,16841],[-15,63],[-40,108],[-44,3],[-27,18],[-10,55],[-32,97],[0,28],[25,21],[16,64],[-32,54],[5,14],[88,9],[16,-15],[25,47],[23,-2],[29,36],[14,71],[-47,87],[-44,32],[-21,35],[-31,94],[-2,43],[37,3],[14,28],[-1,59],[42,-7],[11,27],[36,20],[63,16],[53,-26],[19,24],[78,26],[11,-15],[66,3],[20,54],[2,49],[39,59],[21,4],[34,39],[63,-14],[40,23],[28,-1],[88,-28],[59,-47],[38,10],[26,-52],[70,24],[23,61],[33,47],[-6,48],[21,50],[53,8],[29,41],[30,-8],[36,31],[-4,39],[45,10],[6,54],[48,57],[-1,38],[43,14],[46,59],[-9,32],[-26,24],[14,33],[29,-32],[7,72],[41,28],[4,29],[44,-7],[3,29],[48,-13],[-12,40],[34,46],[42,-4],[54,-37],[76,6],[9,26],[43,50],[69,26],[31,1],[38,-30],[13,-49],[35,4],[19,115],[24,32],[-17,24],[-50,35],[-9,35],[21,13],[42,-4],[63,12],[48,31],[46,52],[43,19],[42,-27],[40,-8],[88,62],[27,-5],[27,-30],[17,-39],[48,-42],[118,-84],[14,-4],[102,-72],[89,-49]],[[26514,20000],[1,-42],[20,-16],[44,11],[34,82],[42,21],[44,-5],[52,41],[91,-35],[8,31],[-9,66],[42,11],[56,34],[50,-21],[23,-51],[34,-16],[19,-47],[77,-7],[43,-13],[91,48],[20,44],[35,2],[19,-59],[30,-8],[40,32],[22,-5],[33,-57],[15,35],[-26,26],[-3,29],[77,10],[38,46],[21,1],[120,-26],[25,-20],[26,-44],[14,-45],[25,10],[13,79],[26,15],[74,-84],[15,14],[-11,38],[42,40],[1,43],[35,21],[25,-16],[11,-41],[-8,-62],[11,-21],[45,21],[25,85],[39,9],[59,-29],[88,-5],[27,-14],[3,-38],[-23,-55],[6,-44],[80,23],[59,6],[62,48],[46,5],[25,-15],[54,-56],[102,-7],[44,-12],[66,-47],[41,-7],[61,12],[145,10],[48,24],[71,16],[38,44],[88,-93],[83,-139],[67,-94],[46,-27],[58,17],[46,-19],[66,-3],[72,49],[110,-8],[22,-13],[71,84],[29,-6],[99,-72],[91,-11],[93,-35],[131,-99],[265,-174],[15,-54],[-24,-11],[-46,-54],[-38,-63],[-46,-44],[-35,-19],[-98,-5],[-17,-33],[15,-30],[60,-46],[-20,-35],[-15,-94],[-46,52],[-84,11],[-62,-15],[-59,-68],[-24,-17],[-79,27],[-63,67],[-18,44],[-54,29],[-61,-43],[-36,0],[-47,-33],[-12,15],[-73,-13],[-36,-93],[-5,-45],[-65,-92],[24,-19],[-35,-81],[-34,4],[-13,46],[-30,-36],[-67,-34],[-60,-46],[-65,-13],[-12,-60],[-44,-25],[-31,22],[-43,-15],[-61,46],[-35,-37],[39,-74],[-92,-67],[-83,16],[10,-29],[-47,-21],[-19,-33],[41,-94],[31,-32],[-65,-90],[-24,-22],[-41,3],[-106,-58],[-39,-6],[-30,18],[-27,-42],[-55,-20],[-18,25],[-23,-37],[-33,-2],[-52,-41],[13,-78],[-21,-76],[4,-34],[-24,-42],[37,-34],[53,-11],[-73,-60],[-59,-25],[-70,-1],[-40,8],[-57,-9],[5,-46],[-52,-38],[-62,-17],[-38,17],[-66,-21],[-33,-35],[24,-50],[-27,-30],[-78,-31],[-16,-67],[-29,-12],[-4,-33],[-68,-2],[-39,-34],[-92,-32],[-25,-33],[-29,7]],[[27611,17085],[-46,76],[-128,173],[-89,134],[-269,368],[-40,10],[-155,2],[-63,4],[-448,12],[-49,4],[-464,11],[-41,2],[-72,-38],[-68,-9],[-119,5],[-68,-9],[-209,2],[-31,38],[-108,9],[-92,-22],[-60,14],[-111,-13],[-61,7],[-115,-15],[-117,-4],[-79,-15],[-41,4],[-61,80],[-29,50],[-79,114],[-28,47],[-125,185]],[[24146,18311],[65,126],[39,90],[76,143],[64,136],[19,31],[79,168],[36,66],[41,89],[72,139],[38,42],[41,-9],[24,60],[52,15],[-6,59],[22,32],[17,72],[69,14],[-25,20],[-23,42],[19,23]],[[24865,19669],[38,21],[7,28],[31,21],[1,30],[35,7],[24,-50],[27,29],[12,65],[19,21],[47,-28],[18,42],[-48,10],[-13,44],[40,-2],[42,60],[-7,44],[32,129],[50,55],[60,49],[83,24],[50,-15],[51,-1],[54,10],[33,-50],[59,-6],[48,30],[46,14],[17,-32],[28,15],[67,3],[38,-21],[24,5],[46,-19],[27,17],[21,-14],[52,17],[58,-11],[70,56],[24,-6],[31,-37],[23,22],[32,-21],[38,1],[65,-46],[56,-18],[39,-62],[1,-55],[53,-44]],[[11170,18574],[24,-31],[37,-77],[1,-45],[-31,-34],[-64,-85],[-47,-79],[-30,-95],[-8,-42],[2,-74],[40,-67],[69,-38],[87,-34],[21,-32],[0,-40],[-34,-125],[10,-44],[34,-16],[128,11],[50,14],[75,-7],[58,-65],[53,-79],[10,-44],[9,-136],[14,-60],[87,-76],[34,-130],[27,-33],[88,-67],[43,-47],[103,-205],[17,-92],[8,-93],[-5,-102],[-32,-106],[-14,-96]],[[12034,16203],[-79,-33],[-91,-65],[-42,-16],[-47,-48],[-42,-3],[-34,-39],[-40,-11],[-53,10],[-44,-29],[-160,7],[-24,-2],[-103,-50],[-65,-5],[-72,12],[-94,-44],[-82,10],[-67,-37],[-46,-15],[-52,35],[-34,72],[-26,24],[-182,-42],[-220,-55],[-105,-8],[-62,-10],[-102,-7],[-119,2],[-92,-29],[-22,-21],[-62,-105]],[[9771,15701],[-24,73],[2,49],[14,48],[70,65],[82,111],[68,53],[88,-2],[74,-26],[72,-3],[87,15],[62,19],[58,48],[17,41],[15,80],[25,37],[180,110],[71,70],[-1,79],[-13,59],[-20,36],[-82,53],[-39,35],[-2,75],[47,153],[-20,51],[-39,16],[-53,64],[-26,20],[-152,44],[-66,3],[-60,30],[-33,45],[-9,37],[6,88],[50,83],[22,54],[5,51],[-23,130],[-29,94],[-14,248],[26,163],[41,123],[-1,68],[-22,82],[1,89],[-10,61],[-26,98],[-37,114],[-53,121],[-34,48]],[[22236,18447],[-41,-70],[-6,-42],[-32,-113],[-13,-147],[0,-56],[-10,-72],[-5,-153],[-13,-125],[9,-95],[-50,-87],[-2,-38],[25,-36],[72,24],[36,26],[25,0],[60,50],[43,13],[36,59],[44,1],[49,30],[-7,32],[79,-10],[20,-40],[24,-14],[45,1],[100,35],[42,-2],[50,26],[63,-3],[19,36],[49,-8],[34,25],[88,-24],[72,28],[39,-13],[50,25],[86,-13],[42,-14],[34,-30],[45,-9],[38,-30],[107,-4],[188,8]],[[23770,17618],[19,-20],[-71,-179],[-26,-54],[-44,-117],[-122,-285],[-100,-253],[-59,-127],[-7,-30]],[[23360,16553],[-202,14]],[[23158,16567],[-282,24],[-652,-84],[-51,-4],[-227,-32],[-357,-44],[-8,-4],[-203,-22],[-288,-37],[-8,-5],[-572,-68],[-39,-1]],[[20471,16290],[-104,38],[-27,29],[-17,68],[9,107],[26,37],[-30,24],[-5,35],[11,53],[-22,5],[-11,68],[40,31],[60,3],[17,21],[-2,37],[-43,50],[-1,65],[83,44],[44,-23],[7,28],[-13,100],[-64,138],[-130,261],[-21,54],[-55,107],[-25,62],[-57,110],[-6,29]],[[20135,17871],[116,74],[16,382],[6,60]],[[20273,18387],[399,15],[343,8],[230,10],[413,10],[379,15],[199,2]],[[27611,17085],[-54,27],[-94,5],[-37,-16],[-63,-10],[-19,-70],[-17,-23],[-54,-2],[-43,-18],[-61,-5],[-24,-24],[-56,1],[1,28],[-103,43],[-38,55],[-28,16],[-83,-4],[-35,-31],[-27,-45],[-77,-24],[-99,4],[-74,32],[-34,-10],[-41,-42],[-84,-14],[-41,-45],[11,-50],[0,-56],[-35,-88],[-58,-74],[-69,-44],[-26,-47],[-81,-29],[-21,16],[-41,-6],[-37,-22],[-29,23],[-56,-16],[-31,2],[-22,51],[-34,45],[-41,26],[-33,-3],[-49,-31],[-36,-8],[-35,-26],[-89,-16],[-34,-15],[-64,-44],[-53,21],[-24,-10],[-31,-48],[-118,-40],[-49,-56],[-35,-59],[-58,-150],[-22,13],[-57,6],[-12,-45],[-52,-73],[41,-20],[96,69],[23,-57],[28,-29],[1,-34],[-36,-18],[2,-42],[70,53],[52,3],[33,97],[36,-10],[-15,-75],[29,-15],[37,23],[49,79],[27,-17],[30,-43],[-71,-30],[-50,-47],[-2,-59],[68,5],[65,83],[25,6],[23,-31],[14,-51],[46,-73],[55,-43],[69,-121],[-83,-33],[4,-35],[59,-140],[-7,-25],[-49,-2],[-75,-59],[-18,-25],[17,-61],[34,-55],[-3,-33],[26,-16],[36,-51],[49,-34],[67,-32],[73,-45],[156,129],[44,12],[66,-5],[56,45],[7,75],[49,69],[11,63],[60,33],[22,27],[72,21],[13,31],[-37,47],[-54,-29],[-110,-44],[-19,14],[35,39],[54,33],[47,3],[103,-10],[72,-18],[121,17],[36,-7]],[[26584,15562],[-4,-32],[20,-82],[-14,-39],[4,-55],[34,-66],[79,-4],[3,-66],[19,-21],[-16,-87],[-35,-95],[-40,-140],[-14,-82],[22,-72],[20,-31],[-3,-62],[-42,-82],[5,-37],[-22,-48],[-38,-44],[-32,-16]],[[26530,14401],[-66,49],[-56,5],[-47,-30],[-77,-90],[-31,13],[15,89],[-17,30],[-34,4],[-76,-39],[-208,0],[-79,-19],[-57,-51],[-18,-48],[10,-45],[-30,-32],[-46,11],[-48,-20],[-42,2],[-39,38],[-67,12],[-49,-24],[-38,-6],[-105,37],[-136,-56],[-70,-48],[-91,-154],[-24,-58],[6,-60],[-58,5],[-58,-109],[-55,-54],[-57,-47],[-98,-35],[-117,-63],[-62,-22],[-50,-31],[-53,-14]],[[24402,13541],[-74,-26],[-107,-27],[-80,-27],[-98,-45],[-47,-29],[-75,-26],[-121,-30],[-22,-11],[-81,-12],[-64,16],[-77,57],[-25,8],[-44,-18],[-80,-51],[-122,-38],[-190,-87],[-34,-4],[-86,13]],[[22975,13204],[21,25],[26,62],[101,191],[50,71],[157,250],[43,60],[48,88],[21,81],[16,29],[40,117],[-7,247],[43,67],[-31,87],[21,19],[94,10],[62,-15],[62,-5],[28,24],[10,63],[-105,160],[-1,48],[25,46],[29,26],[48,24],[72,18],[86,36],[50,48],[-12,42],[-98,116],[9,57],[42,121],[15,73],[25,77],[-20,30],[-32,13],[-59,-2],[-54,40],[4,45],[21,66],[31,31],[36,59],[49,47],[-16,42],[-42,17],[-54,76],[-103,-91],[-36,-8],[-44,36],[3,21],[-46,49],[-41,-9],[-96,78],[-134,15],[-26,23],[2,47],[24,31],[49,40],[57,26],[63,52],[0,35],[-51,67],[-32,13],[-46,38],[-12,59]],[[23770,17618],[37,13],[65,146],[132,255],[47,102],[95,177]],[[20471,16290],[-47,-10],[-41,6],[-340,20]],[[20043,16306],[-30,2],[-126,-13],[-33,-31],[-56,-6],[-41,29],[-64,62],[-19,7],[-69,61],[-43,-16],[-62,26],[-72,-4],[-23,-42],[-67,3],[-57,-27],[-37,-41],[-74,21],[-34,-19],[-43,6],[-13,46],[10,552],[12,367],[52,34],[183,102],[326,188],[68,24],[81,51],[305,177],[18,6]],[[22236,18447],[35,28],[66,7],[48,21],[22,31],[43,21],[71,-29],[53,26],[62,7],[28,-25],[31,1],[18,38],[35,30],[27,46],[5,44],[24,14],[27,40],[-27,45],[30,38],[-3,110],[-16,33],[22,14],[11,108],[18,9],[73,-12],[64,5],[63,-7],[9,25],[47,45],[51,9],[57,-32],[42,14],[61,33],[59,2],[27,21],[128,45],[22,20],[40,6],[30,25],[3,27],[68,58],[18,39],[26,-14],[70,10],[97,46],[24,33],[74,47],[60,3],[11,19]],[[24090,19571],[13,20],[47,16],[30,36],[43,3],[40,38],[15,34],[42,-4],[22,-17],[32,23],[38,-11],[-6,-49],[35,-29],[27,-40],[101,5],[53,19],[106,84],[79,-13],[27,20],[31,-37]],[[9771,15701],[-18,-30],[-99,-106],[-27,-42],[-10,-122],[-25,-48],[-133,-22],[-62,-36]],[[9397,15295],[-608,-66],[-119,92],[-214,176],[-237,190],[-125,323],[-1,356]],[[8093,16366],[1,501],[340,241],[61,36],[-14,46],[-38,46],[-31,15],[-62,-7],[-38,27],[7,30]],[[8319,17301],[7,26],[66,-9],[40,35],[-1,73],[46,9],[32,56]],[[8509,17491],[83,-2],[12,-18],[66,2],[67,55],[54,6],[57,61],[-24,10],[40,69],[-22,52],[35,39],[54,-10],[9,-23],[60,-36],[15,15],[-14,39],[-4,58],[-46,19],[6,29],[48,8],[48,35],[49,-2],[30,43],[1,55],[67,41],[42,62]],[[9242,18098],[40,50],[149,46],[16,52],[-24,74],[20,13],[45,0],[24,29],[3,325],[104,154],[56,73],[-56,75],[-59,58],[-85,55],[-62,25],[14,28],[112,70],[67,97],[1,12],[-45,95],[79,10],[154,-98],[69,-48],[120,-73],[104,-72]],[[20110,18558],[67,-69],[77,-92],[19,-10]],[[20043,16306],[-24,-143],[-18,-81],[60,-171],[37,-131],[65,-192],[1,-18],[-87,-23],[-171,-37],[-116,-32],[-107,-14],[-376,-90],[-187,-48],[-406,-99]],[[18714,15227],[-14,18],[-327,137],[-110,43],[-84,38],[-368,156],[-238,98],[-66,30],[-135,39],[-148,51],[-43,10],[-278,89],[-49,7],[-87,-192]],[[17002,18413],[34,-8],[460,-67],[164,-82],[110,151],[344,493],[25,2],[91,-42],[37,39],[27,6],[28,-67],[56,-35],[37,15],[23,25],[73,-20],[29,18],[40,-67],[33,43],[21,10],[30,-37],[49,33],[62,-19],[22,-29],[20,23],[104,-15],[-3,-46],[34,-4],[5,-26],[61,-11],[61,2],[7,-20],[52,1],[202,-50],[19,-15],[51,-9],[52,20],[19,-45],[104,5],[53,-27],[14,-31],[50,-1],[48,-17],[39,16],[30,-11],[37,38],[32,-19],[32,-1],[21,23],[23,-24],[46,50],[65,6],[35,-29]],[[23158,16567],[-3,-17],[-49,-69],[-99,-163],[-52,-72],[-54,-90],[-84,-124],[7,-44],[0,-88],[-32,-403],[-22,-15],[-183,-84],[-111,-58],[-371,-175],[-13,-163],[-10,-21],[-292,-36],[-192,-20],[-145,-61]],[[21453,14864],[-11,-7],[-73,10],[-155,-36],[-200,27],[-306,7],[11,-83],[66,-72],[-221,-3],[-9,-31],[-135,91],[-366,-93]],[[20054,14674],[-94,-19],[-285,4],[-228,169],[-356,82],[-127,34],[-35,4],[-183,47],[-35,14]],[[18711,15009],[3,218]],[[6754,10726],[-37,-8],[-55,-31],[-52,-53]],[[6610,10634],[-75,-4]],[[6535,10630],[-20,1],[-46,62],[-40,118],[-69,162]],[[6360,10973],[-62,165]],[[6298,11138],[45,2],[35,-14],[67,-73],[62,-26],[133,-25],[79,1],[-1,-13],[-57,-105],[-3,-35],[22,-43],[74,-81]],[[14107,17191],[-44,17],[-112,-15],[-35,-18],[-68,-52],[-120,-61],[-24,-23],[-64,-27],[-68,-1],[-65,-22],[-78,-48],[-67,3],[-48,11],[-43,-3],[-47,-46],[-8,-39],[-48,-27],[-70,-17],[-153,-21],[-181,2],[-80,-29],[-20,-43],[24,-17],[-11,-29],[-49,-22],[-34,-31],[-14,-53],[26,-71],[37,-64],[2,-60],[-26,-86],[-77,-135],[-3,-30],[46,-76],[25,-27],[12,-35],[-8,-88],[1,-65],[-37,-47],[-22,-50],[-17,-76],[8,-35],[28,-26],[25,8],[70,64],[57,28],[60,14],[71,-18],[33,-36],[9,-58],[-44,-66],[-6,-66],[27,-61],[40,-58],[31,-79],[8,-54],[-12,-61],[-38,-37],[-72,-26],[-60,-7],[-40,7],[-56,40],[-41,5],[-45,-18],[-20,28],[-5,51],[-18,32],[-30,11],[-32,-8],[-32,-28],[-27,-39],[-10,-42],[-41,-35],[-64,-21],[-82,-14],[-66,-29],[-51,-64],[-2,-43],[54,-38],[90,-8],[101,-65],[113,-30],[83,-8],[148,10],[167,30],[188,19],[157,11],[138,41],[136,18],[87,3],[31,-7],[58,-60]],[[13663,14845],[-2,-14],[-234,-420],[-36,-55],[-244,155],[-49,-128],[-25,-89],[176,-117],[-112,-236],[-82,-164],[-79,-7],[-51,26],[-48,-22],[-33,1],[-30,21],[-38,84],[-48,59],[-54,-12],[-48,-26],[-86,4],[-9,-7]],[[12531,13898],[-57,-26],[-46,23],[-68,-33],[-45,3],[-30,22],[-54,4],[-24,28],[-51,31],[-27,40],[-54,12],[-33,31],[-35,53],[-59,-4],[-59,8]],[[11889,14090],[-18,97],[-31,114],[-22,139],[-18,52],[-35,70],[2,50],[44,56],[6,38],[-14,150]],[[11803,14856],[32,84],[14,70],[23,225],[22,106],[-1,263]],[[11893,15604],[3,130],[11,96],[26,97],[45,107],[49,84],[7,85]],[[6982,10429],[66,-56],[56,-25],[85,-48],[27,-29],[113,-190],[20,-26]],[[7349,10055],[-34,-201],[-268,-296],[-43,-41]],[[7004,9517],[-99,169],[-21,43],[-30,34],[-73,-2],[-28,-21],[-23,36]],[[6730,9776],[26,59],[16,102],[12,40],[35,54],[31,32]],[[6850,10063],[18,34],[-1,48],[-15,77],[-36,29],[-58,10],[-9,36],[12,64]],[[6761,10361],[64,-6],[70,18],[48,45],[39,11]],[[14100,16213],[-32,-12],[-34,-97],[-47,-24],[-17,-26],[-2,-52],[20,-96],[-12,-48],[-109,-109],[-47,-1],[-79,53],[-75,-4],[-87,11],[-57,14],[-42,-77],[-27,-32],[-7,-38],[-62,-70],[0,-29],[26,-57],[-17,-65],[22,-59],[3,-75],[39,-42],[21,-51],[45,-21],[27,-36],[-2,-21],[33,-44],[62,-9],[43,-31],[104,-16],[32,-17],[44,16],[49,-51],[37,-21],[126,-37],[70,-1],[29,-13],[52,-4],[46,-20],[35,-1],[37,-18],[17,15],[59,-29],[17,27],[50,-7],[89,9],[70,-23],[52,13],[52,-28],[62,15],[43,-13],[67,17],[129,-8],[141,-45],[15,-17],[51,7],[30,-10],[74,-67],[59,-24],[5,-60],[35,-80],[-7,-105],[-76,-75],[-4,-78]],[[15377,14316],[-15,-49],[-51,-14],[-4,-26],[32,-44],[-20,-11]],[[15319,14172],[-46,-6],[-7,-53],[-42,9],[-26,-17],[-18,-38],[-6,-52],[-61,-42],[-3,-30],[-57,-53],[8,-58],[-64,-121],[-63,-45],[-33,-37],[-24,125]],[[14877,13754],[-45,181],[-26,68],[-293,11],[-81,-1],[-120,7],[-21,-4],[-131,7],[-8,6],[-11,209],[-7,52],[-3,126],[-11,99],[-1,80],[-49,55],[-305,307],[-29,3],[-73,-115]],[[32973,16369],[-117,-77],[-140,-143],[-56,-63],[-120,-117],[-64,-70],[-52,-41],[-63,-7],[-24,-29],[6,-43],[-32,-15],[-33,-65],[-83,-44],[-49,-49],[-51,19],[-31,-6],[-50,-42],[-46,-18],[-102,-92],[-129,-140],[-131,-147],[-83,-80],[-88,-98],[-104,-103],[-343,-219],[-45,-23],[-86,-59],[-93,-55],[-264,-170],[-53,-28],[-177,-117],[-190,-114],[-256,-164],[-186,-163],[-12,-14]],[[29626,13773],[-30,58],[-43,57],[-111,-15],[-26,18],[14,53],[30,53],[-12,39],[28,48],[-10,48],[-38,4],[-23,39],[-36,36],[-45,85],[-56,43],[-42,-2],[-55,-48],[-30,-6],[-62,46],[-57,19],[-95,4],[-26,40],[75,91],[31,64],[37,21],[76,-9],[23,48],[-1,81],[-16,167],[35,49],[32,11],[2,24],[-40,17],[71,92],[9,48],[-42,53],[-30,14],[-87,0],[-31,38],[-57,110],[-10,31],[-42,73],[-37,45],[-83,30],[-92,-14],[-50,8],[-49,-6],[-133,33],[-45,98],[-33,6],[-43,-32],[-60,-1],[-44,-44],[-43,11],[-18,56],[-11,88],[-44,38],[9,50],[86,43],[88,36],[76,23],[74,45],[65,8],[72,21],[58,49],[23,47],[14,84],[-16,112],[-46,84],[-9,63],[19,59],[0,33],[-30,10]],[[28634,16498],[3,104],[-16,52],[-15,92],[3,95]],[[22975,13204],[-84,15],[-62,31],[-85,7],[-40,-62],[-134,-105],[-4,-49],[27,-55],[-3,-103],[16,-45],[-13,-26],[-42,-11],[-55,11],[-42,42],[-33,58],[-15,51],[-24,15],[-105,1],[-40,10],[-90,91],[-78,20],[-39,-16],[-43,-32]],[[21987,13052],[-75,-19],[-67,33],[-65,5],[-63,-10],[-46,35],[-25,83],[-49,82],[-34,16]],[[21563,13277],[114,66],[80,88],[114,101],[36,132],[39,192],[-121,-38],[-88,46],[-48,-12],[-74,45],[-148,-29],[-6,282],[-12,520],[4,194]],[[7026,7423],[13,-6],[61,-88],[10,-49],[25,-24],[-41,-31],[-33,-43],[-39,14],[-26,-37]],[[6996,7159],[-80,9],[-20,50],[-157,21]],[[6739,7239],[-15,31],[-12,118],[6,33]],[[6718,7421],[35,8],[20,38],[48,-22],[-3,70],[61,37],[27,-3],[29,-30],[12,-69],[22,-20],[57,-7]],[[15921,15436],[-35,-54],[-196,-279],[-1,-12],[92,-100],[156,-160],[-178,-276],[-72,-119],[-29,-59]],[[15658,14377],[-85,5],[-45,11],[-52,-10],[-99,-67]],[[11893,15604],[-67,9],[-91,-19],[-79,-61],[-36,-15],[-38,1],[-95,45],[-55,6],[-70,-43],[-48,-18],[-73,8],[-75,-7],[-51,-17],[-104,-55],[-98,-15],[-61,4],[-28,12],[-64,64],[-45,12],[-74,-32],[-248,-6],[-49,-19],[-122,-113],[-144,-55],[-107,-29],[-39,-26],[-40,16],[-87,-39],[-76,-11],[-95,-30],[-75,-9],[-54,-55]],[[9505,15107],[-108,188]],[[18711,15009],[-110,-28],[-77,-26],[-166,-44],[-118,-38],[-255,-36],[-29,-8]],[[17956,14829],[-18,0],[-229,-33],[-221,136],[-88,58],[-32,13]],[[29626,13773],[-208,-177],[-79,-79],[-19,-8],[-192,-173],[-55,-46],[-173,-157],[-151,-128],[-48,-36],[-97,-34],[-47,-24],[-171,-62],[-125,-55],[-363,-140],[-65,-29],[-101,-37],[-62,-28],[-390,-152],[-135,-59],[-16,-14]],[[27129,12335],[-38,47],[-66,42],[-9,34],[-40,38],[-29,2],[-27,95],[-39,52],[-31,24],[-9,38],[69,60],[-8,33],[11,58],[-9,61],[-21,31],[20,32],[-7,45],[-38,4],[-30,18],[-26,67],[-2,44],[-25,66],[-30,34],[21,46],[-84,35],[-66,13],[-49,52],[54,32],[14,25],[194,115],[68,22],[53,37],[-6,455],[-3,95],[-83,7],[-20,23],[9,87],[-30,32],[-24,-3],[-146,-78],[-77,-5],[-32,49],[-8,102]],[[26584,15562],[63,-42],[60,-25],[78,5],[78,-2],[76,-26],[30,13],[62,-14],[123,-11],[71,22],[68,-4],[90,12],[52,51],[78,56],[113,-22],[74,35],[29,43],[58,24],[28,78],[35,39],[62,3],[22,11],[39,72],[77,37],[36,45],[44,37],[44,13],[36,68],[36,7],[45,47],[7,84],[54,26],[29,1],[103,121],[103,29],[31,22],[15,33],[1,48]],[[11803,14856],[-56,4],[-202,-7],[-51,50],[-28,0],[-76,-84],[-85,-21],[-145,1],[-122,-25],[-79,-1],[-81,-37],[-47,-3]],[[10831,14733],[-30,12],[-43,48],[-28,6],[-77,-50],[-52,-18],[-112,2],[-44,-6],[-158,-3],[-114,-25],[-59,38],[-33,37],[-30,18],[-200,-11],[-61,19],[-52,4],[-65,-33],[-60,-58],[-56,-22],[-63,-9],[-75,3],[-48,9],[-52,33]],[[9319,14727],[28,68],[25,98],[63,89],[79,91],[-9,34]],[[1076,15642],[37,-38],[26,-71],[30,-45],[67,-44],[126,-38],[48,-8],[15,-46],[0,-140]],[[1425,15212],[-1,-152],[7,-80],[-4,-343],[6,-116],[-5,-148],[9,-89],[248,-50],[41,-13],[145,-26],[147,-31],[16,2]],[[2034,14166],[43,-61],[11,-49],[-8,-67],[-12,-28],[5,-97],[-16,-51],[-11,-87],[41,-36],[63,-21],[78,-15],[99,-5],[33,-10],[41,-31],[39,-84],[34,-31],[75,-87],[49,-18]],[[2598,13388],[-8,-42],[-34,-15],[-58,4],[-64,99],[-50,17],[-19,-28],[24,-25],[3,-28],[-35,-28],[-139,-75],[-52,1]],[[2166,13268],[-25,44],[-47,39],[-59,26],[-100,9],[-40,-10],[-66,5],[-79,26],[-66,-12],[-29,-20],[-42,-54],[-43,-31],[-32,-6],[-45,13],[-74,-15],[-74,-54],[-31,-7],[-50,11],[-82,38],[-52,10],[-40,-3],[-68,15],[-39,-9],[-84,34],[-25,-6]],[[874,13311],[-340,431],[-275,381],[238,419],[191,347],[172,325],[116,238],[100,190]],[[16359,15015],[-148,-598],[0,-17],[146,-213],[14,-35]],[[16371,14152],[-91,40],[-41,24],[-107,45],[-10,55],[-39,49],[-90,10],[-58,-23],[-41,39],[-36,9],[-122,-27],[-78,4]],[[20054,14674],[140,-56],[37,-86],[38,0],[35,-33],[26,25],[90,-13]],[[20420,14511],[-26,-75],[-125,-141],[-113,-60],[-15,15],[-124,2],[-96,-8],[-64,-13],[-64,-4],[-100,-16],[-138,15],[-48,-1],[-170,-36],[-32,-16],[-93,-27],[-69,-10],[-126,3],[-73,16],[-129,12],[-107,-1],[-47,5],[-348,-15],[-277,0],[-112,10]],[[17924,14166],[16,409],[16,254]],[[17924,14166],[-175,10],[-149,32],[-66,1],[-79,-15],[-111,-46],[-40,1]],[[17304,14149],[-4,29],[-123,287],[-81,199],[50,18],[208,58],[20,16]],[[17304,14149],[-129,13],[-155,-8],[-25,-36],[-27,-62],[-131,-34],[-23,-26],[-16,-47],[-8,-83]],[[16790,13866],[-29,-15]],[[16761,13851],[-96,58],[-101,83],[-122,122],[-71,38]],[[3156,15070],[127,-78],[236,-132],[119,-59],[37,-26],[60,6],[166,-4],[213,106]],[[4114,14883],[90,36],[24,1],[86,-19]],[[4314,14901],[-31,-46],[-69,-43],[-1,-42],[67,-38],[2,-24],[-126,-85],[-15,-50],[-2,-52],[-32,-29],[-40,33],[-28,3],[-14,-27],[22,-65],[15,-77],[-30,-54],[-47,-34],[-52,-142],[-52,-63],[-33,-23],[-99,-8],[-32,8],[-80,-15],[-57,-45],[-7,-75]],[[3573,13908],[-80,-40],[-78,-87],[-95,-48],[-55,0],[-72,19],[-6,56],[-37,7],[-119,-19],[-24,-46],[-34,-8],[-41,33],[-29,10],[-49,-21]],[[2854,13764],[-32,47],[-46,110],[3,110],[-11,8],[-134,-15],[-120,75],[-23,27],[-18,71],[-7,133],[-12,15],[-69,19],[-40,32],[-48,65]],[[2297,14461],[64,75],[75,76],[59,75],[169,10],[115,98],[110,83],[63,42],[89,67],[43,26],[72,57]],[[14877,13754],[-46,-40],[-25,-51],[1,-55],[14,-37],[6,-64],[27,-60],[-11,-36],[-130,-68],[-29,-26],[-103,-143],[-23,-41],[-11,-62],[3,-114],[21,-133],[72,-87],[10,-86],[154,-177],[50,-84],[22,-62],[3,-51],[-11,-30],[-42,-53],[-13,-33],[-34,-36],[-100,-68],[-31,-29],[-80,-24],[-23,-24],[-11,-44],[10,-116],[25,-56]],[[14572,11764],[-49,-42],[-6,-44],[-66,1],[-41,-8],[-75,-55],[-54,-24],[-65,-52],[-8,-68],[-59,-46],[-23,-57],[-27,-7],[-37,12],[-42,-42],[-31,-7],[-30,17],[-48,56],[-22,12]],[[13889,11410],[15,63],[-1,69],[28,47],[1,86],[-24,62],[-27,8],[-53,58],[-105,85],[-36,24],[-129,103],[-256,193],[-75,62],[-175,131],[-188,308]],[[12864,12709],[-79,138],[-35,53],[-148,254]],[[12602,13154],[-7,120],[-7,29],[-15,202],[-10,67],[-12,165],[-20,161]],[[11889,14090],[-2,-50],[-19,-57],[-28,-42],[-13,-44],[-3,-64],[-43,-89],[-78,-103],[-44,-80],[-35,-112],[3,-124],[-9,-158],[-11,-85]],[[11607,13082],[-177,-55],[-157,-74],[-44,-30],[-93,-80],[-55,-61],[-55,-74],[-31,-58]],[[10995,12650],[-74,7]],[[10921,12657],[-10,76],[1,68],[37,108],[10,44],[37,97],[-11,64]],[[10985,13114],[75,62],[132,146],[26,66],[27,119],[10,67],[-5,73],[-43,111],[10,50]],[[11217,13808],[65,51],[69,180],[17,125],[-58,112],[-29,119],[-25,27],[-200,20],[-102,-2],[-94,14],[-32,29],[7,126],[-8,22],[4,102]],[[4663,14857],[88,-123],[92,-108],[57,-78],[101,-66],[64,-58],[94,-157],[61,-79]],[[5220,14188],[38,-48],[86,-126]],[[5344,14014],[-68,-97],[-22,-41],[-43,-20],[-172,-37],[-26,15],[-3,50],[-37,53],[11,54],[-42,11],[-48,-101],[-102,-72],[-33,-15],[-133,-96],[-32,-7],[-54,13],[-58,0],[-37,-47],[-4,-46],[-21,-48]],[[4420,13583],[-46,-24],[-42,13],[-83,-20],[-35,-42],[-129,12],[-31,-30],[-146,-17]],[[3908,13475],[-17,15],[-77,31],[-40,26],[-25,59],[2,83],[10,84],[-27,30],[-27,-5],[-134,110]],[[4314,14901],[55,-8],[14,55],[100,-10],[4,-36],[119,-25],[57,-20]],[[27129,12335],[6,-91],[-21,-49],[-32,-36],[-20,-46],[-32,-27],[-53,-4],[-21,-12],[-7,-76],[27,-34],[-58,-89],[-5,-54],[-45,-65]],[[26868,11752],[-69,16],[-74,-19],[-57,-3],[-54,39],[-92,8],[-41,-38],[-31,-12],[-86,9],[-45,26],[-26,50],[-4,47],[-15,17],[-45,-4],[-36,-35],[-61,-6],[-78,-20],[-65,-7],[-46,-21],[-33,-39],[-106,2],[-49,57],[-50,-29],[-52,9],[-59,0]],[[25594,11799],[13,38],[40,44],[12,52],[-140,61],[-95,23],[-51,-5],[-66,-41],[-39,10],[-80,54],[-17,45],[3,38],[32,66],[6,37],[-9,54],[-49,61],[-36,1],[-62,-48],[-64,-19],[-42,-47],[-52,-8],[-57,15],[-61,1],[-78,-24],[-43,25],[-18,127],[-22,62],[-33,49],[-18,5],[-34,-40],[-121,15],[-51,-34]],[[24362,12416],[-39,25],[4,24],[35,43],[14,57],[-37,42],[48,91],[3,68],[23,58],[39,38],[110,18],[25,14],[12,44],[16,125],[1,52],[-30,24],[8,77],[-88,86],[-35,52],[-67,164],[-2,23]],[[13022,9146],[9,-64],[-35,-63],[-46,-6],[-36,-53],[-14,-62],[8,-43],[-11,-35],[42,-76],[5,-36],[43,-112],[8,-40],[-18,-60],[-64,-42],[-77,-101]],[[12836,8353],[-80,-101]],[[12756,8252],[-43,3],[-77,-10],[-23,5],[-84,-23]],[[12529,8227],[-5,71],[9,194],[7,47],[-8,72],[3,62],[47,125],[48,103],[7,34],[29,65],[58,86],[105,67],[106,42],[55,16]],[[12990,9211],[32,-65]],[[11217,13808],[-56,-12],[-25,16],[-40,-13],[-24,15],[-60,-41],[-105,-43],[-31,-28],[-59,-9],[-60,19],[-96,-46],[-28,-4],[-85,11],[-43,-12],[-25,-60],[-32,3],[-9,-32],[-122,10],[-81,-4],[-55,5],[-120,32],[-102,54],[-56,22],[-143,12],[-86,36],[-24,3]],[[9650,13742],[-84,25],[-63,0],[-172,-11],[-185,-3],[-82,25],[-396,10],[-57,11],[-135,4],[-87,18],[-51,3],[-99,24],[-60,35],[-34,44]],[[8145,13927],[21,68],[-27,42],[-26,1],[-17,32]],[[8096,14070],[-53,43],[22,56],[-3,36]],[[8062,14205],[16,17],[68,22],[14,20],[61,-70],[52,10],[34,22],[-2,31],[17,32],[40,24],[27,-13],[10,-41],[36,5],[51,-23],[11,-37],[97,14],[29,-9],[80,27],[84,66],[5,20],[63,9],[29,35],[66,-9],[74,0],[26,8],[27,-49],[114,50],[57,-10],[32,99],[16,87],[5,122],[18,63]],[[20998,13201],[-104,-6],[-25,-40],[-29,-83],[-16,-17],[-82,15],[-55,1],[-53,29],[-36,4],[-8,-28],[19,-58],[-33,-28]],[[20576,12990],[-86,-26],[-35,21],[-147,22],[-83,-1],[-86,25],[-69,31],[-59,61],[-157,-62],[-93,-51],[-42,-7]],[[19719,13003],[-29,32],[-50,21],[-85,-5],[-55,-21],[-75,-61],[-38,-20],[-92,-26],[-58,1],[-115,44],[-90,27],[-64,-25],[-53,46],[-3,66],[-23,31],[-34,7],[-34,43],[-9,84],[-28,106],[-1,62],[13,56],[-19,50],[-36,1],[-79,-52],[-67,-29],[-67,-13],[-60,20],[-93,-87],[-59,-23],[-36,51],[-32,134],[-19,64],[-44,93],[-12,56],[-16,19],[-178,13],[-148,2],[-68,-86],[-38,-20],[-43,4],[-49,20],[-90,5],[-46,-10],[-27,6],[-44,49],[-30,90],[-16,12],[-57,1],[-63,16],[-57,2],[-29,-22],[-21,-56],[-42,-42],[-60,-15],[-51,29],[-41,42],[-139,72],[-30,-1]],[[20420,14511],[30,-6],[97,6],[47,-16],[52,33],[38,-16],[-9,-37],[-40,-27],[12,-56],[-40,-31],[1,-80],[88,-22],[90,12],[39,-14],[69,3],[21,-17],[15,-68],[-8,-21],[3,-67],[-19,-35],[-3,-93],[9,-35],[-20,-16],[20,-30],[-3,-49],[-18,-30],[-26,-82],[24,-11],[6,-42],[-24,-42],[6,-60],[-21,-53],[37,-32],[-1,-92],[-9,-24],[13,-42],[-12,-44],[23,-33],[91,-41]],[[16761,13851],[-6,-162],[-32,-47],[-60,-58],[-55,-61],[-64,-56],[-49,-63],[-57,-45],[-80,-91],[-18,-82],[31,-36],[71,-43],[54,-51],[26,-81],[11,-90],[17,-60],[15,-156],[3,-72],[-16,-41],[2,-109],[-3,-234],[5,-43],[-8,-146],[-28,-53],[-30,-9],[-61,2],[-61,-57],[-52,-112],[-56,-75],[0,-29],[-75,-56],[-87,8],[-62,22],[-70,11],[-13,11],[-10,60]],[[15943,11747],[17,34],[63,53],[9,36],[-6,61],[-41,88],[-16,82],[-53,86],[-13,47],[-34,53],[-37,89],[1,83],[-27,57],[-44,50],[-53,79],[-44,136],[-120,85],[-32,101],[-23,50],[-60,58],[-57,44],[-19,36],[17,59],[148,92],[17,55],[164,106],[43,16],[123,6],[34,17],[17,68],[-15,60],[-45,70],[-63,43],[-58,2],[-59,-43],[-68,-21],[-56,15],[-71,8],[-22,14],[-5,33],[19,54],[-1,60],[-45,108],[-100,162],[-9,33]],[[2854,13764],[30,-74],[33,-48],[17,-48],[9,-64]],[[2943,13530],[-18,-34],[-65,-71],[-129,-55],[-59,-16],[-28,48],[-46,-14]],[[2034,14166],[64,72]],[[2098,14238],[199,223]],[[15943,11747],[-61,47],[-30,-10],[-29,-90],[-107,-33]],[[15716,11661],[-45,44],[-32,50],[-63,56],[-38,23],[-163,57],[-131,-4],[-78,5],[-39,-42],[-12,-75]],[[15115,11775],[-33,20],[-62,8],[-46,-23],[-33,-5],[-26,-21],[-66,-28],[-17,16],[-6,51],[-16,20],[-42,-4],[-61,-104],[-46,35],[-89,24]],[[12602,13154],[-52,-5],[-57,11],[-105,89],[-57,-5],[-198,-101],[-115,-14],[-101,7],[-76,-15],[-60,-42],[-34,-13],[-83,-1],[-57,17]],[[5344,14014],[55,-92],[35,-22],[305,10],[83,-45],[84,-60]],[[5906,13805],[-37,-110],[-18,-68],[-30,-83],[-68,-242],[-106,-68],[-185,-97]],[[5462,13137],[-73,-47],[-59,-5],[-248,-7],[-69,-10],[-35,-25],[-26,1],[-26,-34]],[[4926,13010],[-54,63],[-102,48],[-50,34],[-94,-1],[-23,-54],[-57,3],[-84,32],[-18,17],[-14,53],[-66,71],[-66,7],[-51,-7],[-15,22],[63,39],[49,52],[48,83],[26,73],[2,38]],[[5906,13805],[59,-26],[172,-62],[196,-84],[13,-116],[15,-79],[5,-71],[13,-72],[21,-218],[6,-16]],[[6406,13061],[-79,-78]],[[6327,12983],[-20,-13],[-190,-188],[-41,-29],[-1,-48],[11,-83],[0,-58],[12,-106],[4,-106],[13,-98],[6,-199],[18,-102]],[[6139,11953],[18,-240],[-14,-116],[10,-66],[29,-62],[40,-41],[11,-83],[19,-20]],[[6252,11325],[-56,-49],[-136,-105],[-29,-28]],[[6031,11143],[-4,-36],[15,-42],[-93,25],[-83,0]],[[5866,11090],[-33,14],[-61,3],[-96,-7],[-44,28],[-83,110],[-66,63]],[[5483,11301],[13,62],[14,122],[-1,63],[61,7],[33,109],[-31,25],[-60,-18],[-24,17],[-4,45],[12,145],[-19,50]],[[5477,11928],[73,80],[29,48],[1,112],[17,74],[123,4],[38,9],[77,0],[16,29],[-1,62],[-47,45],[-90,54]],[[5713,12445],[-44,53],[-16,40],[-1,99],[-14,22],[-68,4],[-48,22],[-30,49],[-11,43],[-10,99],[13,91],[18,63],[-4,42],[-36,65]],[[8145,13927],[-19,-47],[5,-19],[-28,-38],[6,-77],[-49,-16],[29,-52],[31,-17],[-18,-29],[-10,-48]],[[8092,13584],[-22,-40],[-33,-13],[-44,-69],[2,-42],[22,-29],[-23,-40],[5,-58],[-18,-51],[47,-30],[74,-108],[57,35],[23,-16],[10,-36],[40,9],[40,-12],[109,-101]],[[8381,12983],[-14,-26],[-32,-110],[-58,-119],[-37,-31],[-61,-3],[-43,-45],[-35,-129],[-24,-26],[-96,-51],[-81,-72],[-63,-87],[-124,-110],[-102,-60],[-21,-17],[-11,-79],[-20,-53],[-48,-86],[-44,-42],[-66,-31],[-18,-20],[-29,-69],[-18,-102],[-72,-84],[-111,-98]],[[7153,11433],[-44,-22],[-149,1],[-87,43],[-1,49],[-48,97],[-14,111],[-38,79],[-54,23],[-62,4],[-63,-10],[-36,-28],[-50,-124],[-39,-22],[-61,13],[-22,23],[-15,42],[-39,49],[-75,52],[-39,76],[-41,9],[-12,49],[-25,6]],[[6327,12983],[70,-80],[53,-72],[11,-46],[0,-68],[10,-35],[23,-17],[74,-9],[25,8],[50,49],[34,-11],[16,-30],[43,-26],[16,-53],[-21,-68],[-54,-40],[-5,-39],[36,-61],[28,-13],[53,0],[63,15],[99,50],[50,14],[20,18],[36,66],[18,134],[15,42],[55,52],[100,44],[61,40],[83,83],[65,23],[30,20],[14,40]],[[7498,13013],[12,133],[1,50],[36,407],[-3,77],[54,-6],[33,35],[7,53],[43,0],[59,88],[-1,15]],[[7739,13865],[86,-5],[38,54],[39,11],[56,-25],[54,30],[14,-8],[26,88],[44,60]],[[19719,13003],[-26,-16],[-188,-91],[-245,-185]],[[19260,12711],[-63,17],[-69,7],[-58,22],[-151,13],[-124,-1],[-59,26],[-52,-37],[-62,-24],[-48,-2],[-123,21],[-74,4],[-38,25],[-27,43],[-26,19],[-133,37],[-101,7],[-85,-70],[-87,-1],[-72,-45],[-78,-21],[-34,10],[-91,-11],[-33,-28],[-18,-53],[-57,3],[-47,-57],[-40,-21],[-64,31],[-118,-1],[-49,-34],[-9,-36],[30,-70],[-6,-43],[-34,-88],[-7,-103],[-39,-85],[-6,-68],[56,-85],[62,-74],[37,-102],[36,-10],[78,14],[53,-4],[73,-18],[22,-26],[45,-130],[39,-55],[29,-70],[34,-60]],[[17672,11477],[-6,-10],[-135,-97],[-143,-112],[-180,-131],[-130,-101],[-57,-36],[-118,-93],[-30,-55],[21,-86],[70,-28],[61,-56],[-2,-32]],[[17023,10640],[-38,-66],[-41,-5],[-35,-19],[-85,9],[-36,17],[-46,-2],[-18,-25],[-34,-15],[-31,6],[-28,-15],[-62,3],[-49,-17],[-30,20],[-63,-22],[-66,20],[-112,-4],[-25,12]],[[16224,10537],[-21,56],[-18,12],[-25,52],[2,60],[-55,88],[-10,71],[-98,10],[-37,24],[-39,-38],[-31,-8]],[[15892,10864],[-42,71],[-103,96],[-41,57],[-19,46],[1,84],[10,82],[35,127],[45,135],[-1,33],[-61,66]],[[19260,12711],[-40,-31]],[[19220,12680],[-243,-186],[-153,-112],[-40,-33],[-274,-209],[-328,-246],[-116,-91],[-109,-80],[-188,-181],[-97,-65]],[[10995,12650],[33,-66],[40,-59],[8,-31],[9,-125],[30,-107],[23,-54]],[[11138,12208],[-36,-3],[-52,-25],[-54,-44],[-45,-56],[-53,-28],[-140,-23],[-88,-43],[-37,1],[-27,23],[-22,92],[-31,43],[-90,72],[-77,75],[-74,27]],[[10312,12319],[-15,133],[-22,107],[1,56]],[[10276,12615],[13,30],[66,12],[199,13],[97,10],[72,-3],[108,-33],[61,1],[29,12]],[[9650,13742],[24,-37],[15,-85],[51,-70],[12,-66],[33,-37],[53,-21],[75,-39],[155,-44],[56,3],[42,21],[88,81],[32,-7],[56,-136],[10,-43],[-9,-36],[-36,-53],[-22,-52],[-14,-71],[125,-13],[114,-33],[98,-8],[96,7],[48,14],[164,82],[69,15]],[[10276,12615],[-65,15],[-73,50],[-39,51],[-24,6],[-63,-16],[-62,-35],[-66,18],[-58,7],[-81,0],[-56,-13],[-60,-41],[-14,-136],[-19,-19]],[[9596,12502],[-1,39],[-17,23],[-77,36],[-31,5],[-184,-11],[-85,2],[-89,35],[-85,20]],[[9027,12651],[33,68],[31,11],[-17,49],[-54,10],[-120,65],[-19,31],[-52,56],[-3,42],[-40,37],[4,23],[-72,6],[-41,30],[-1,44],[-49,49],[-14,37],[-44,30],[-48,-42],[-43,5],[-81,53],[-24,-1],[-32,55],[-28,22],[-42,80],[-2,50],[-76,51],[-26,72],[-75,0]],[[3908,13475],[38,-131],[14,-25],[5,-72],[40,-58],[22,-15],[43,8],[32,-20],[34,-48],[-21,-206],[-2,-139],[-41,-68],[-39,-34],[-14,-28],[-1,-67],[-23,-37],[-53,-24],[-13,-26],[-39,-24],[-36,-3],[-23,-20],[-42,10],[-34,-14]],[[3755,12434],[-36,-21],[-102,44],[-40,-17],[6,-51],[-48,-32],[-76,32]],[[3459,12389],[6,34],[45,74],[8,56],[21,37],[25,99],[-20,33],[-97,48],[-73,26],[-37,31],[-2,112],[-41,98],[13,19],[33,-18],[19,25],[-67,79],[-56,8],[-16,19],[-12,71],[39,-16],[35,44],[0,22],[-64,59],[-53,71],[-78,90],[-49,40],[-95,-20]],[[24362,12416],[-33,-30],[-103,-34],[-55,-49],[-50,3],[-37,-20],[-24,-33],[-36,-15],[-16,-35],[-42,-2],[-67,-28],[-36,6],[-47,-27],[-63,9],[-111,-110],[-42,-55]],[[23600,11996],[-67,-3],[-1,56],[-82,22],[-96,-50],[-75,-4],[-33,-61],[-44,-40],[-49,5],[-55,-23],[-7,-40],[-36,-78],[-28,-21],[-102,0],[-80,-22],[-83,-44],[-112,-34],[-40,-6]],[[22610,11653],[-48,-6],[-51,-27],[-53,4],[-62,-9],[-34,39],[-67,141],[-39,39],[-80,119],[-23,53],[-58,84],[-24,81],[-11,77],[-7,205],[-13,23],[-50,19],[-65,42],[7,61],[-6,33],[-35,44],[-9,30],[-53,58],[21,67],[-6,23],[16,64],[101,98],[26,37]],[[9027,12651],[-149,26],[-156,71],[-27,35],[-2,62],[-16,37],[-36,28],[-32,-31]],[[8609,12879],[-65,37],[-75,15],[-62,49],[-26,3]],[[4926,13010],[-48,-12],[-26,-50],[10,-46],[-43,-45],[-18,-64],[-36,3],[-42,-72],[-2,-68],[19,-20],[5,-41]],[[4745,12595],[-19,-43],[8,-125],[-19,-64],[21,-102],[35,-53],[5,-56],[-43,-73],[-47,-49]],[[4686,12030],[-47,54],[-31,68],[-29,34],[-52,35],[-33,4],[-65,-23],[-109,-15],[-125,9],[-72,-26],[-81,-83],[-91,-14]],[[3951,12073],[-25,80],[-96,39],[-13,47],[-6,74],[-56,42],[0,79]],[[3459,12389],[-42,-51],[-59,-25],[-55,-1],[-51,22]],[[3252,12334],[5,173],[-36,55],[-9,37],[19,66],[43,33],[-1,34],[-31,84],[-51,74],[-22,7],[-107,-4],[-29,24],[-48,-6],[-23,10],[-72,-5],[-32,-15],[-96,-99],[-176,-10],[-54,25],[-10,19],[7,68],[-1,131],[-82,10],[-36,-17],[-45,-72],[-71,-32],[-100,1],[-21,-32],[-83,-17],[-64,7]],[[2026,12883],[34,82],[-2,43],[46,37],[4,26],[-16,51],[51,56],[20,42],[3,48]],[[22610,11653],[16,-54],[-6,-68],[35,-120],[-96,-3]],[[22559,11408],[-74,-20],[-61,-33],[-85,-5],[-47,11],[-59,0],[-35,-23],[-47,6],[-63,24],[-109,-40],[-29,-20]],[[21950,11308],[6,57],[-15,74],[-47,65],[-1,63],[-21,101],[-37,67],[-56,52],[-7,22],[7,110],[10,42],[-28,29],[-36,17],[-87,105],[-18,107],[6,82],[-14,33],[-71,1],[-57,-7],[-88,22],[-94,4],[-169,-10]],[[21133,12344],[-76,86],[-131,155],[-12,3]],[[20914,12588],[-9,19],[-83,91],[-89,111],[-115,129],[-42,52]],[[20998,13201],[10,9],[225,88],[142,-77],[44,56],[144,0]],[[2026,12883],[-25,-35],[-12,-40],[6,-129],[-16,-43],[-27,-29],[-84,-20],[-35,7],[-13,-41],[-50,5],[7,-51],[-10,-25],[-47,-43],[-65,-15],[-65,-75]],[[1590,12349],[-7,17],[-421,566],[-288,379]],[[12864,12709],[-40,-17],[-58,-43],[-74,-124],[-130,-166],[-62,-71],[-70,-92],[-79,-121],[-13,-39],[-9,-98],[-65,-8],[-83,19],[-53,-7],[-75,5],[-97,-61],[-71,-10],[-40,10],[-72,43],[-73,70],[-89,23],[-75,8],[-144,4],[-140,12],[-73,-5]],[[11179,12041],[0,54],[-30,61],[-11,52]],[[20914,12588],[-71,-43],[-119,-29],[-39,-27],[-52,1],[-53,21],[-55,-25],[-80,-12],[-35,-53],[1,-32],[20,-41],[4,-85],[28,-48],[-1,-69],[27,-77],[36,-138],[1,-61],[-63,-138],[-8,-77],[-23,-53],[-51,-75],[-17,-8],[-34,-53],[-6,-60],[21,-61],[-2,-149],[11,-38],[3,-88],[15,-30],[50,-30],[5,-24],[-30,-65]],[[20397,10921],[-30,2],[-90,34],[-36,1],[-74,-32],[-44,-3],[-106,12],[-70,-28],[-41,14],[-40,-2],[-26,-139],[-12,-38],[0,-43],[-29,-33]],[[19799,10666],[-61,-43],[-74,-29],[-56,-3],[-89,35],[-34,23],[-78,103],[-23,60],[-2,85],[-19,33],[-74,-31],[-31,3],[-35,-25],[-46,9],[-25,33],[-41,-27],[-100,4],[-40,-14]],[[18971,10882],[-66,125],[-13,39],[4,38],[32,77],[25,34],[55,109],[21,103],[-1,101],[-16,91],[2,58],[-6,237],[19,153],[13,53],[27,27],[88,51],[69,20],[170,83],[34,24],[99,49],[27,29],[14,49],[-5,50],[-45,62],[-62,44],[-63,14],[-65,41],[-108,37]],[[5713,12445],[-48,-58],[-51,-23],[-53,15],[-32,-8],[-70,-72],[-53,-7],[-72,10],[-33,19],[-42,-2],[-32,-22],[-59,5],[-47,-30],[-22,-30]],[[5099,12242],[-26,-8],[-76,30],[-39,60],[0,28],[-66,26],[-22,58],[-69,50],[2,44],[-58,65]],[[6406,13061],[152,-6],[227,-60],[220,8],[157,1],[222,8],[114,1]],[[5477,11928],[-11,0],[-109,-73],[-50,-42],[-40,39],[-54,8],[-38,-24],[-32,36],[-38,18],[-10,26],[-45,47]],[[5050,11963],[33,178],[17,64],[-1,37]],[[3252,12334],[-12,-39],[-40,-58],[-82,-67],[-57,-33],[-58,-9],[-20,-18],[5,-44]],[[2988,12066],[-28,-64],[-55,-56],[-35,-71],[-5,-57],[-20,-61],[-49,-39],[-33,6],[-51,53],[-90,-8],[-45,4],[-43,-22],[-69,-79],[-7,-88],[-37,-37],[-11,-79],[-25,-21],[-29,-1],[-35,33],[6,53],[-20,21],[-41,-4],[-37,-24],[-32,2],[-34,30],[25,83],[37,151],[-7,73],[-24,44],[15,36],[-22,29],[-40,-47],[-39,-15],[-53,2],[-95,-9],[-40,-10],[-53,-59],[-29,-115],[-28,-52],[-62,-64]],[[1748,11604],[-17,11],[-91,18],[-120,33],[-48,-4],[-7,30],[20,80],[33,54],[-28,15],[-96,3],[-16,21],[14,37],[40,32],[1,43],[-22,9]],[[1411,11986],[18,144],[44,-13],[21,20],[13,82],[-30,25],[-7,30],[72,66],[48,9]],[[8609,12879],[-13,-219],[-5,-170],[-20,-322],[-67,-130],[77,-126],[3,-31],[-26,-164],[39,-55],[28,-66],[38,-63],[97,23],[19,11]],[[8779,11567],[41,-1],[23,-15],[14,-42],[-16,-46],[-33,-46],[-33,-67],[26,-44],[2,-55],[-19,-44]],[[8784,11207],[-66,-45],[-62,-30],[-121,-20],[-181,-6],[-69,15],[-75,27],[-112,5],[-144,-17],[-59,3],[-67,31],[-72,66],[-63,42],[-81,30],[-93,22],[-117,7],[-135,0],[-31,6]],[[7236,11343],[-48,45],[-35,45]],[[9596,12502],[-10,-35],[-162,-184],[-11,-79],[11,-31],[37,-49],[24,-72],[52,-91],[32,-81],[11,-54],[-24,-106],[4,-51]],[[9560,11669],[-45,5],[-80,26],[-137,-34],[-42,-1],[-71,14],[-86,53],[-59,-6],[-55,-29],[-77,-12],[-77,-32],[-44,-40],[-8,-46]],[[18971,10882],[-32,-2],[-35,-28],[-38,-8],[-33,46],[-87,-21],[-51,5],[-61,-38],[-37,-39],[-40,-1],[-106,-139],[-29,-12],[-77,9],[-26,-54],[-44,30],[-36,3],[-44,-48],[-54,11]],[[18141,10596],[-30,3],[-45,-46],[-37,-3],[-40,18],[-78,-8],[-102,26],[-57,-10],[-53,20],[4,-41],[-25,-10],[-38,19],[-35,-1],[-41,-18],[-65,15],[-54,4],[-67,42],[-39,7],[-31,-39],[-31,-2],[-87,50],[-38,0],[-52,22],[-46,-11],[-31,7]],[[10312,12319],[-51,-9],[-48,-23],[-63,-60],[-57,-98],[-38,-103],[-20,-90],[-22,-65],[-42,-215],[-36,-76],[-127,-132],[-48,-62],[-28,-51],[-4,-55],[25,-39]],[[9753,11241],[-60,-54],[-74,-32],[-64,5],[-57,29]],[[9498,11189],[21,55],[4,172],[17,101],[21,54],[-1,98]],[[3951,12073],[-21,-51],[35,-60],[2,-60]],[[3967,11902],[-39,-25],[-62,-19],[-127,-76],[-20,-120],[16,-42],[101,-121],[72,-66],[35,-48],[45,-114],[23,-85],[24,-15],[46,-1],[22,-16],[-25,-51],[33,-36],[1,-43],[21,-42]],[[4133,10982],[-55,-29],[-39,-3],[-38,-20],[-58,-17],[-29,-67],[-34,-36]],[[3880,10810],[-118,121]],[[3762,10931],[58,79],[34,72],[-5,55],[-16,24],[-81,71],[-48,19],[-90,58],[-104,54],[-61,4],[-65,-40],[-38,-12],[-58,-36],[-88,-91]],[[3200,11188],[-56,-4],[-71,-27],[-26,12],[-21,104],[1,81],[17,30],[0,33],[-65,39]],[[2979,11456],[21,36],[94,31],[92,-4],[33,5],[132,97],[73,69],[8,57],[-61,58],[-107,80],[-38,54],[-37,91],[-34,29],[-48,-1],[-53,-23],[-66,31]],[[13889,11410],[-60,-70],[-34,-56],[-22,-57],[-11,-56],[-52,-80],[-12,-48],[-80,-101],[-12,-81]],[[13606,10861],[-34,-23],[-22,25],[-88,-12],[-40,31],[-10,27],[-66,12],[-33,-14],[-25,13],[-32,-15],[-42,13],[-43,0],[-55,31],[-43,51],[-40,13],[-44,-12],[-75,30],[-13,-21],[-62,-30],[-10,-20],[-58,-9],[-78,35],[-44,-6],[-56,14],[-31,-12],[-64,21],[-30,-9],[-22,20],[-99,8],[-38,-7],[-71,8],[-61,44],[-65,8],[-29,-8],[-45,29],[-32,8],[-60,-23],[-54,16],[-50,-40],[-54,5],[-20,-12]],[[11768,11050],[-27,-2],[-60,-51],[-47,4],[-12,-42],[-39,17],[-38,-14],[-48,4],[-25,29],[-50,3]],[[11422,10998],[-43,13],[-49,-32],[-25,18],[-75,15],[-27,34],[-81,59],[-84,-2],[-42,-13],[-85,37],[-28,-46],[-34,-1],[-77,-17]],[[10772,11063],[-72,134],[-6,55],[26,124],[45,60],[54,44]],[[10819,11480],[62,32],[133,44],[134,56],[50,68],[17,72],[-2,67],[-40,96],[-12,53],[18,73]],[[21133,12344],[185,-166],[60,-66],[59,-87],[109,-137],[-2,-44],[-33,-17],[-163,19],[-229,-1],[-77,19],[-183,58],[-34,4],[-15,-27],[14,-33],[74,-88],[13,-27],[50,-55],[57,-125],[22,-28],[-3,-42],[-20,-51],[-16,-114],[23,-30],[-12,-46],[33,-13],[20,21],[66,-69],[32,17],[23,45],[54,4],[49,-11],[40,-68]],[[21329,11186],[-26,-32],[-1,-60],[-17,-11]],[[21285,11083],[-28,10],[-23,49],[-37,-3],[-51,-91],[-19,-16],[-69,-10],[-36,-23],[-70,1],[-66,-14],[-50,-50],[-29,6],[-48,49],[-45,9],[-52,-17],[-17,-54],[-149,0],[-99,-8]],[[25594,11799],[-8,-5],[8,-122],[17,-62],[4,-81],[-39,-67],[-40,-30],[-71,-35],[-71,-66],[-51,-31],[-76,-66],[-51,-61],[-118,-32],[-73,-48],[-45,-44],[-19,-129],[-65,-124]],[[24896,10796],[-172,33],[-70,-32],[-89,-23],[-58,-5],[-122,6],[-86,-24],[-52,-26],[-58,-49],[-28,-67],[-78,-161],[-11,-32]],[[24072,10416],[-77,5],[-264,-22],[-58,-11],[-114,-4],[-69,-12],[-198,-9],[-49,24],[-150,38],[-140,48]],[[22953,10473],[79,41],[56,-18],[40,7],[166,0],[242,-5],[-84,250],[26,41],[23,6],[59,44],[49,106],[-8,84],[-68,82],[-6,48],[15,26],[-19,32],[18,47],[-36,49],[-22,8],[-16,35],[-33,5]],[[23434,11361],[55,58],[63,12],[58,28],[24,45],[-45,80],[19,51],[-37,41],[-2,57],[17,32],[-2,51],[18,41],[-20,38],[18,101]],[[5050,11963],[-46,-241],[-18,-29]],[[4986,11693],[-40,5],[-65,25],[-43,43],[-93,2],[-32,7]],[[4713,11775],[34,45],[9,61],[-41,54],[-29,74],[0,21]],[[21950,11308],[-42,-44]],[[21908,11264],[-40,-32],[-98,-53],[-98,-25],[-34,16],[-70,-7],[-58,5],[-54,33],[-127,-15]],[[13758,2609],[18,-83],[16,-123],[106,-694]],[[13898,1709],[-149,12],[-189,-1],[-289,-12],[-150,-8]],[[13121,1700],[-9,59],[-24,42],[4,65],[-33,109]],[[13059,1975],[46,11],[102,10],[82,22],[60,9],[63,95],[37,121],[-9,54],[8,35],[36,26],[-29,70],[-13,156]],[[13442,2584],[147,-7],[80,7],[89,25]],[[10819,11480],[-36,64],[-5,65],[-27,40],[-57,-3],[-40,-27],[-93,-106],[-59,-41],[-81,-25],[-100,-9],[-155,2],[-85,-11],[-109,-32],[-91,-37],[-66,-51],[-62,-68]],[[23434,11361],[-34,8],[-38,-12],[-45,7],[-112,36],[-21,-75],[-27,-30],[-122,20],[15,-64],[28,-28],[-30,-61],[-32,-104],[4,-51],[-5,-89],[-88,-42],[-22,12],[-78,-11],[-66,10]],[[22761,10887],[-1,89],[-19,34],[-72,59],[28,79],[0,30],[-40,102],[-19,31],[-79,97]],[[2979,11456],[-22,-29],[-204,-125],[-56,-42],[-96,-89]],[[2601,11171],[-23,-14],[-103,-90],[-38,-11],[-255,-39],[-104,-34],[-102,-73]],[[1976,10910],[-48,13],[-144,-22],[-26,9],[-25,45],[23,128],[27,46],[40,44],[6,24],[-20,120],[-1,108],[6,111],[-15,34],[-45,10],[-6,24]],[[22953,10473],[-18,-10],[-113,3],[-178,121]],[[22644,10587],[49,298],[68,2]],[[4713,11775],[-23,41],[-24,13],[-36,-68],[-43,-10],[-34,-28],[-54,-6],[-13,-43],[-19,-11],[-56,1],[-115,-12],[-43,14],[-19,28],[-38,92],[-80,81],[-68,-18],[-57,52],[-24,1]],[[26868,11752],[12,-45],[35,-28],[3,-47],[86,-32],[13,-29],[86,-32],[10,-35],[-54,-61],[-10,-42],[13,-41],[-14,-36],[-5,-74],[-37,-71],[-51,-21],[-9,-43],[22,-19],[6,-41],[-66,-75]],[[26908,10980],[-42,71],[-65,90],[-79,75],[-175,20],[-41,-10],[-35,-67],[-38,-48],[-39,-67],[-52,-70],[-82,-140],[-56,-57],[-117,-43],[-74,-13],[-46,18],[-134,76],[-69,29],[-48,31],[-86,6],[-58,-25],[-41,-7],[-62,-30],[-61,-17]],[[25408,10802],[-99,-39],[-150,-42],[-69,21],[-110,24],[-84,30]],[[19657,9899],[5,-40],[-54,-57],[-3,-42],[18,-44],[-19,-14],[-74,34],[-37,-19],[-1,-27],[22,-27],[61,-47],[9,-22],[-38,-17],[-69,36],[-44,4],[-44,-12],[-33,-55],[-19,-83],[-2,-43],[17,-66],[-15,-76],[-28,-41],[-60,-55],[-55,-34],[-24,-29],[2,-76],[-8,-80],[-34,-33],[-128,1],[-87,15],[-52,62],[-43,25],[-74,3],[-65,-35],[-55,1],[-30,-18],[-25,-39],[-36,-9],[-33,7],[-99,-41],[-82,-12],[-71,-1],[-47,-15]],[[18203,8878],[-20,63],[-27,49],[17,60],[12,92],[27,66],[9,102],[20,61],[-2,38],[-21,63],[0,106],[22,43],[57,36],[73,65],[51,1],[23,36],[67,-23],[33,31],[43,8],[58,56],[85,44]],[[18730,9875],[109,-8],[18,-24],[9,-95],[25,-20],[41,6],[76,41],[26,34],[15,58],[39,62],[39,-5],[49,-74],[36,-12],[103,21],[58,59],[65,-13],[156,-14],[63,8]],[[15892,10864],[-32,-87],[4,-88],[-5,-44],[-50,-30],[-55,0],[-66,-13],[-97,10],[-30,-28],[-49,9],[-25,35],[-24,-7],[-25,27],[-41,15],[-43,66],[-40,0]],[[15314,10729],[-30,41],[-30,23],[-66,69],[-13,22],[1,52],[22,68],[40,84],[-19,58],[-162,77],[-54,15],[-16,29],[-69,52],[-20,43],[3,49],[27,74],[-6,32],[-41,59],[2,40],[46,66],[131,37],[29,19],[26,37]],[[1976,10910],[-45,-59]],[[1931,10851],[-88,-17],[-122,-29],[-74,42],[-20,-1],[-60,-70],[-72,-65],[-29,-17],[-72,-73],[-25,-48],[0,-95],[-12,-28],[-83,-35],[-69,-80],[-7,-22],[-95,-160],[-142,-254]],[[961,9899],[-41,-68],[-55,3],[-58,30],[-113,22],[-90,7],[-53,-16]],[[551,9877],[-1,78],[17,39],[-33,47],[-28,77],[12,94],[-2,55],[14,34],[33,16],[39,57],[6,35],[56,5],[55,32],[80,35],[17,25],[46,120],[48,51],[-2,65],[-36,82],[-28,43],[4,41],[19,42],[-46,80],[8,67],[27,20],[0,26],[-47,59],[-4,80],[23,57],[-9,85],[23,61],[-22,46],[-33,34],[2,24],[29,40],[68,29],[4,63],[36,35],[10,46],[58,39],[28,0],[35,-27],[27,25],[61,-30],[100,-2],[7,30],[57,45],[60,31],[42,73]],[[5483,11301],[-80,-6],[-55,7],[-67,-13]],[[5281,11289],[-48,29],[-88,98],[-52,23],[-90,-40],[-46,-36]],[[4957,11363],[-7,46],[13,78],[5,86],[18,120]],[[7236,11343],[18,-45],[83,-109],[-8,-35],[-55,-92],[-63,-58]],[[7211,11004],[-79,5],[-112,37],[-101,21],[-52,-1],[-38,19],[-82,24],[-36,100],[-40,30],[-107,51],[-31,-3],[-58,14],[-24,27],[-63,28],[-77,-11],[-59,-20]],[[15314,10729],[-60,-29],[-45,-32],[-43,-11],[-91,-7],[-35,-25],[-45,23],[-40,-24]],[[14955,10624],[-37,-11],[-46,-47],[-97,-28],[-22,-20],[-19,33],[-47,-25]],[[14687,10526],[-29,-14],[-71,-16],[-58,46],[-32,-34],[-27,4],[-37,32],[-75,44],[-58,-32],[-49,4]],[[14251,10560],[-26,79]],[[14225,10639],[-2,28],[30,116],[21,15],[8,112],[-56,44],[-24,-1],[-60,33],[-41,38],[-23,46],[12,18],[-45,71],[-2,62],[-38,32],[-10,30],[-43,17],[-25,24],[-35,60],[-3,26]],[[8852,9808],[-31,-45],[-18,-59],[-27,-50],[-18,-60],[-18,-105],[-11,-96]],[[8729,9393],[-47,11],[-77,-15],[-64,-24],[-62,-11]],[[8479,9354],[-125,-30]],[[8354,9324],[-85,4],[-56,-5],[-104,12],[-21,19]],[[8088,9354],[20,48],[3,78],[94,97]],[[8205,9577],[49,23],[38,40],[-8,62],[-29,57],[-31,96],[2,35],[29,20],[128,24],[42,16],[79,70],[62,10],[67,-30],[20,-36],[52,-28],[75,-13],[51,-30],[5,-49],[16,-36]],[[4713,11775],[-3,-52],[-21,-6],[9,-151],[-6,-57],[-25,-29],[-44,-18],[-22,7],[-51,54],[-31,2],[-37,-24],[-96,-36],[-44,-46],[-36,-78],[-11,-136],[22,-49],[37,-46],[99,-42],[71,-73]],[[4524,10995],[12,-56],[45,-26],[54,-69],[1,-69]],[[4636,10775],[-59,-29],[-25,-32],[-44,10],[-75,-14]],[[4433,10710],[-73,74],[-46,23],[-63,49],[-118,126]],[[4957,11363],[15,-64],[-25,-57],[-35,-33],[-88,-50],[-49,-37],[-32,-48],[-33,-29],[-186,-50]],[[9498,11189],[-173,-11],[-195,5],[-90,-52]],[[9040,11131],[-65,79],[-191,-3]],[[10772,11063],[-20,-64],[-35,-62],[-61,-75],[-11,-53],[21,-41],[6,-137],[11,-39],[-53,-51],[-72,-96],[-31,-58],[-22,-108],[3,-30],[44,-99],[34,-20],[110,17],[29,-46],[-8,-41],[-97,-52],[-155,-75],[-64,-16],[-117,-9],[-17,-10]],[[10267,9898],[-22,7],[-86,79],[-38,-42],[-57,-93],[-34,-70],[-12,-51],[-21,-37],[-68,-2]],[[9929,9689],[-52,23],[-71,58],[-59,40],[-40,49],[1,37]],[[9708,9896],[35,12],[50,56],[17,46],[46,47],[29,16],[102,24],[24,35],[-10,49],[-23,43],[-130,103],[-57,55],[-73,113],[-34,-3],[-65,-30],[-101,75],[6,111],[-45,74],[-128,18]],[[9351,10740],[-70,82],[-241,309]],[[22644,10587],[-71,-59],[-115,-104],[-94,-71]],[[22364,10353],[-75,43],[-36,30],[-78,38],[-99,68],[65,82],[37,92],[3,78],[-8,44],[-43,48],[-42,18],[-44,31],[-65,12],[-28,41],[6,59],[-32,52],[-29,63],[12,112]],[[26908,10980],[0,-43],[-27,-45],[7,-29],[-25,-42],[-55,-39],[-50,-10],[-74,6],[-41,-31],[-39,-60],[-72,-23],[-46,-57],[-8,-75],[7,-100],[19,-115],[6,-150],[100,-141],[50,-57],[83,-107]],[[26743,9862],[-33,-33],[-43,-5],[-29,-21],[-37,19],[-42,-28],[-75,-14],[-7,-43],[-19,-20]],[[26458,9717],[-65,-2],[-69,31],[-78,-17],[-148,-4],[-82,21],[-74,39],[-49,3],[-116,-33],[-67,-11],[-25,-13],[-69,38],[-58,7],[-128,-17],[-46,17],[-46,4],[-22,-14],[-58,-1],[-40,47],[-25,108],[12,70],[-17,81],[0,49],[-26,97],[2,65],[59,114],[39,31],[12,37],[23,14],[31,77],[25,30],[17,59],[31,23],[22,48],[-5,68],[-10,19]],[[14225,10639],[-15,11],[-57,-6],[-18,29],[-40,-3],[-34,18],[-50,-3],[-31,-48],[-63,15],[-20,24],[-30,-2],[-80,65],[-64,22],[-7,28],[-64,32],[-13,26],[-33,14]],[[3200,11188],[-10,-125],[3,-76],[-16,-63],[-87,-118]],[[3090,10806],[-11,-21],[-66,-61],[-38,-18],[-107,-2],[-24,5],[-64,49],[-73,-1],[-65,32],[-31,52],[-6,78],[-34,21],[-63,3]],[[2508,10943],[142,109],[-1,29],[-48,90]],[[22364,10353],[-5,-16],[-83,-79],[-7,-75],[-32,-77]],[[22237,10106],[-57,31],[-36,35],[-19,35],[-56,14],[-22,-46],[-29,-27],[-122,-7],[-88,23],[-82,11],[-22,22],[11,42],[-14,24],[-85,30],[-42,-3],[-75,-61],[-77,-8],[-49,19],[-98,7]],[[21275,10247],[-112,99],[-76,24],[-6,44],[-19,19],[-82,19],[-69,-12],[-10,14],[5,57]],[[20906,10511],[32,11],[45,33],[12,40],[92,162],[44,14],[48,39],[73,-8],[43,19],[8,19],[-2,92],[15,94],[-31,57]],[[5281,11289],[-19,-90],[-4,-87],[14,-55]],[[5272,11057],[-58,-74],[-149,-64],[-93,-32],[-76,-83],[-51,18],[-104,6],[-62,-22],[-43,-31]],[[7211,11004],[9,-17],[52,-20],[25,1],[7,-36],[-50,-75],[-83,-72],[-3,-34],[-67,-41],[-60,-24]],[[7041,10686],[-10,11],[-152,38],[-71,3],[-54,-12]],[[6298,11138],[-27,66],[-178,-53],[-62,-8]],[[3762,10931],[-45,-34],[-92,-128],[-8,-21]],[[3617,10748],[-43,2],[-73,-39],[-38,1],[-76,-31],[-30,-25],[-33,-7],[-35,12],[-59,38],[-86,83],[-31,-9],[-23,33]],[[9351,10740],[-266,-120],[-42,-83],[-11,-53],[7,-75],[-32,-19],[-258,-52],[-156,-77]],[[8593,10261],[-51,109],[-64,53],[-52,8],[-119,-28],[-59,-40],[-10,12],[-37,173],[-188,-5],[-75,3],[-91,-75],[-140,-110],[16,-50],[-104,-77],[-270,-179]],[[6982,10429],[5,75],[43,70],[11,112]],[[2508,10943],[-41,-32],[-72,-95],[-13,-64],[-16,-30],[-47,-53],[-62,-95],[-22,-49],[-90,-139],[-47,-82],[-32,-40],[-46,-31],[-69,-59],[-33,2],[-19,36],[-60,-14],[-58,-45],[-85,-30]],[[1696,10123],[-36,31],[1,41],[28,28],[46,7],[71,57],[11,46],[0,71],[25,43],[-15,62],[5,37],[43,72],[49,45],[37,49],[10,35],[-8,49],[-32,55]],[[20906,10511],[-65,-6],[-84,21],[-48,-2],[-55,-23],[-50,-40],[-74,-35],[-137,-84],[-54,-41],[-42,-20]],[[20297,10281],[-66,1],[-65,-38],[-110,-13],[-37,-17],[-52,10],[-34,-18],[-66,-13],[-10,47],[-48,19],[-114,63],[-67,10],[-34,23],[19,37],[124,-1],[50,18],[35,47],[20,48],[0,92],[-43,70]],[[5866,11090],[-21,-111]],[[5845,10979],[-38,4],[-71,-39],[-65,-8],[-128,15],[-64,-7],[-28,-16]],[[5451,10928],[-86,74],[-55,25],[-38,30]],[[6360,10973],[-9,-21],[-101,-78],[-21,-7],[-60,27],[-42,32],[-64,11],[-107,-22],[-47,-35],[-17,-49],[-20,-15],[-63,6]],[[5809,10822],[0,59],[36,22],[16,53],[-16,23]],[[11422,10998],[-6,-41],[-27,-36],[-57,-99],[-11,-78]],[[11321,10744],[-29,-73],[-64,-101],[-19,-113],[18,-136],[-10,-31],[-85,-119],[-43,-70],[-92,-169],[-21,-62],[7,-77],[34,-75],[67,-52],[38,-8],[220,29],[43,-5],[32,10],[33,-9]],[[11450,9683],[21,-62],[19,-153],[21,-51],[-63,-70],[-42,-66],[11,-102],[-11,-101]],[[11406,9078],[-66,34],[-43,-5],[-42,-19],[-8,-49],[8,-25],[14,-146]],[[11269,8868],[-4,-60],[-27,-37],[-34,-22],[-45,68],[-95,-4],[-57,8]],[[11007,8821],[-23,32],[4,87],[-51,57],[11,71],[4,103],[-13,11],[-87,-1],[-78,-17],[-95,0],[-38,-8],[-46,-40],[-89,-15],[-40,-58],[-37,-18],[-55,2],[-72,-46],[-60,-25]],[[10242,8956],[-10,72],[-24,45],[-32,31],[-21,48],[9,59],[64,63],[10,48],[-17,29],[-31,18],[-44,47],[-6,35],[21,108],[17,38],[27,104],[34,97],[28,100]],[[14251,10560],[-32,-1],[-27,-47],[-55,-17],[-31,-35],[-53,-6],[-44,-33],[-66,6],[-71,-31],[-8,-46],[14,-24],[-16,-52],[-50,14],[-65,-13],[-53,-68],[-86,-23],[-24,-58],[27,-75],[-28,-47],[5,-42],[67,-75],[-14,-51],[-28,-14],[-21,-62],[-23,-15],[-56,2],[-14,-13],[-26,-90],[-18,-18],[-82,-11],[-21,-36],[-108,-100],[-34,-12],[-28,-30],[-15,-65],[-27,3],[-48,-21]],[[13092,9354],[-52,5],[-40,-10],[-75,-3],[-13,-45],[-65,-25],[-24,15],[-37,-17],[-9,-24],[-37,-9],[-45,-28],[-75,1],[-44,-29],[-25,-54]],[[12551,9131],[-38,23],[-52,12],[-35,21],[-59,15],[-58,30],[-52,12]],[[12257,9244],[-84,45],[-93,92],[-41,68],[-20,78],[77,394]],[[12096,9921],[26,30],[19,71],[41,29],[29,63],[-6,39],[-25,41],[22,62],[-16,43],[-61,6],[-29,25],[5,47],[-43,22],[-97,-5],[-51,82],[-17,64],[-9,115],[-29,46],[-64,15],[1,43],[23,13],[-18,39],[-34,22],[17,41],[-28,69],[38,90],[-22,17]],[[12096,9921],[-47,33],[-95,-20],[-84,-59],[-81,-20],[-105,-38],[-28,-21],[-49,14],[-34,-33]],[[11573,9777],[-2,21],[-51,58],[-53,97],[10,45],[-24,38],[3,32],[29,57],[-4,48],[-22,33],[-45,44],[-37,98],[-14,115],[-2,131],[-22,99],[-18,51]],[[20297,10281],[-71,-81],[-10,-41],[23,-12],[20,-41],[39,-24],[18,-44]],[[20316,10038],[-47,-1],[-88,-38],[-66,-56],[-13,-103],[-29,-40],[-45,-8],[-77,39],[-71,-17],[-48,22],[-29,52],[-33,25],[-29,5],[-41,30],[-32,-23],[-11,-26]],[[18730,9875],[-21,19],[-16,44],[-171,90],[-67,50],[-56,59],[-110,100],[-49,36],[-60,18],[-51,34],[13,66],[-4,78],[3,127]],[[4433,10710],[-13,-12],[-5,-54],[-23,-41],[-83,-22],[-28,-15],[-32,-47],[9,-30],[-9,-75],[-38,-57],[-4,-24],[-42,-51]],[[4165,10282],[-46,14],[-34,30],[-34,62],[-52,120]],[[3999,10508],[-7,71],[-15,75],[-39,74],[-58,82]],[[5451,10928],[-47,-67],[-21,-46],[-14,-65],[45,-54],[24,-11],[45,6],[58,-39],[3,-39],[39,-36],[45,14],[50,-25]],[[5678,10566],[53,-84]],[[5731,10482],[-75,-19],[-68,-30]],[[5588,10433],[-107,-3],[-30,25],[-32,-2],[-95,-35],[-151,-25],[-11,-42]],[[5162,10351],[-44,-7],[-35,-19],[-89,-19],[-51,5],[-63,36],[-46,-8],[-51,-40],[-85,-37],[-44,-25],[-80,1],[-55,-44]],[[4519,10194],[-40,-33],[-50,-59],[-52,-13],[-92,29],[-16,-13],[-25,-64],[-38,-68],[-29,-31],[-28,-68],[-34,-33],[-5,-52],[-25,-11]],[[4085,9778],[-19,47],[-30,32],[11,32],[2,105],[71,68],[7,26],[-20,63],[53,92],[5,39]],[[26458,9717],[30,-48],[22,-56],[97,-62],[-17,-27],[-34,-7],[-31,-60],[-36,-31],[-15,-29]],[[26474,9397],[-96,-31],[-69,-31],[-48,-6],[-69,4],[-53,-9],[-93,-69],[-47,-14],[-60,16],[-46,-4],[-43,12],[-16,-42],[-47,-18],[-68,35],[-39,3],[-43,21],[-17,59],[-25,33],[-39,18],[-79,-16],[-113,-61],[-91,-98],[-29,-70]],[[25244,9129],[-60,0],[-71,-9],[-24,21],[-13,132],[-25,51],[-61,82],[-11,29],[-46,40],[-30,2],[-40,40],[-57,13],[73,139],[-5,44],[-23,2],[-50,-22],[-44,19],[-39,29],[-37,48],[-44,-11],[-55,-39],[-16,-54],[-94,-24]],[[24472,9661],[-105,15],[-46,77],[-40,9],[-18,53],[8,73],[32,33],[52,5],[69,-7],[41,-29],[18,-27],[36,13],[44,116],[-4,81],[-12,21],[-89,42],[-16,24],[-12,94],[-28,25],[-23,43],[-4,51],[-20,23],[-92,3],[-66,-9],[-36,9],[-50,-2],[-39,19]],[[3617,10748],[-5,-61],[-39,-99],[-31,-50],[-69,-63],[-77,-54],[-89,-51],[-124,-97],[-41,-46],[-102,-44],[-103,-10],[-96,-20],[-53,-32],[-37,-49],[-63,-111],[-63,-85],[-15,-36],[-72,-113],[-66,-92],[-80,-56],[-18,-4]],[[2374,9575],[-63,46],[-55,28],[-51,38],[-102,107],[-30,5],[-75,-22],[-20,10],[1,63],[-25,37],[-98,40],[-14,-7],[-30,-88],[-39,-34],[-29,-4],[-52,23],[-22,25]],[[1670,9842],[32,37],[59,30],[-17,32],[-49,20],[-18,29],[19,133]],[[16224,10537],[-28,-32],[-64,-43],[0,-38],[25,-35],[-17,-45],[6,-74]],[[16146,10270],[-49,-39],[-21,12],[-31,-41],[-2,-46],[-56,-33],[-24,-44]],[[15963,10079],[-92,-1],[-22,-14],[-67,7],[-106,-2],[-27,9],[-58,-13],[-56,-1],[-37,-10],[-42,-39],[3,-30],[-62,-66],[-56,-19]],[[15341,9900],[-71,-15],[-16,-108],[-46,-9]],[[15208,9768],[-1,54],[-63,45],[-34,0],[-41,-26],[-79,24],[-54,-2],[-48,-14],[-28,31],[1,51],[71,104],[10,31],[-3,139],[15,28],[91,-12],[27,38],[3,73],[25,69],[-17,66],[-74,81],[-2,20],[-52,56]],[[5809,10822],[-3,-70]],[[5806,10752],[-58,-26],[-89,-54],[-11,-36],[30,-70]],[[6535,10630],[4,-81],[-38,-35],[-53,-5],[-53,28],[-39,4],[-141,-59],[-83,-10],[-54,30],[-35,69],[-36,40],[-26,3]],[[5981,10614],[-37,57],[-40,21],[-66,51],[-32,9]],[[3880,10810],[-80,-183],[-118,-77],[-82,-46],[-50,-64],[-17,-46],[31,-116],[3,-50],[-26,-98],[-59,-120],[-7,-57],[-27,-45],[-8,-62],[-22,-39],[-84,-32],[-39,-34],[-42,-8],[-45,9],[-31,-17],[-11,-63],[-98,-145],[-16,-36],[-41,-47],[-67,-59],[-42,-22],[-27,-30]],[[2875,9323],[-70,-31],[-8,-31],[14,-51],[3,-52]],[[2814,9158],[-64,38],[-68,-19],[-29,-26],[-49,21],[-20,-49],[-57,-16],[-1,-45],[-39,-23],[-42,24],[-79,-16],[-73,-1],[-52,-10],[-88,24],[-100,8],[-43,21]],[[2010,9089],[15,96],[55,22],[13,53],[90,64],[65,54],[81,34],[68,52],[-102,63],[-6,26],[85,22]],[[1670,9842],[-75,23],[-76,-43],[-32,35],[-21,-22],[22,-28],[21,-54],[-16,-22],[-37,4]],[[1456,9735],[-65,61],[-53,7],[-43,32],[-77,34],[-61,-7],[-1,-58],[-16,-19],[-37,17],[-31,37],[-45,73],[-66,-13]],[[3999,10508],[-95,-92],[-17,-35],[-16,-80],[-38,-100],[-5,-39],[14,-127],[-25,-64],[-6,-42],[-27,-75],[-24,-44],[-43,-106],[-28,-41],[-70,-57],[-181,-133],[-120,-54],[-45,-37],[-78,-90],[-90,-29],[-114,-4],[-12,-6],[-83,44],[-21,26]],[[11573,9777],[-123,-94]],[[9708,9896],[-45,-2],[-57,-52],[-80,-60],[-5,-34],[5,-90],[78,-72],[42,-61],[47,-45]],[[9693,9480],[-28,-24],[-58,-10],[-172,-75],[-2,-16]],[[9433,9355],[-18,6],[-51,-54],[-38,-20],[-63,22],[-53,-5],[-37,-31],[-24,22]],[[9149,9295],[5,118],[-59,67]],[[9095,9480],[-19,21],[-27,62],[-19,83],[-16,23],[-39,99],[-37,72]],[[8938,9840],[3,38],[-15,29],[-67,67],[-72,36],[-75,56],[-66,71],[-26,39],[-27,85]],[[24472,9661],[3,-30],[-48,-24],[-21,-33],[-6,-43],[20,-20],[54,-13],[21,-24],[-56,-64],[-156,-129],[-37,-38],[-3,-43]],[[24243,9200],[-52,-14],[-52,-26],[-24,-25],[12,-62],[1,-48],[-16,-58],[-18,-6],[-61,21],[-104,20],[-61,0],[-45,-14],[-59,11]],[[23764,8999],[-68,78],[0,53],[-29,59],[8,85],[-65,43],[-65,7],[-55,-15],[1,64],[-71,39],[-45,7],[-123,40],[-53,33],[-50,47],[-32,-8],[-9,-29],[-57,-14],[-49,-50],[-127,-6],[-58,4],[-97,-5],[-149,-40]],[[22571,9391],[-69,18],[-58,-47],[-56,-6],[-121,8],[-115,23]],[[22152,9387],[4,32],[48,16],[26,40],[3,50],[43,84],[25,62],[4,37],[-24,109],[-21,49],[-41,140],[18,100]],[[5981,10614],[8,-107],[-10,-25],[-116,-107],[-23,-17]],[[5840,10358],[-60,71],[-31,47],[-18,6]],[[15208,9768],[-56,-86],[3,-35],[32,-48],[21,-53],[-1,-48],[-19,-19],[-41,-4],[-66,12],[-41,-8],[-32,53],[-46,-48],[-13,-64],[24,-86],[14,-12],[47,10],[41,-16],[58,0],[46,-61],[4,-87],[-21,-50],[-81,-108],[-3,-27]],[[15078,8983],[-51,3],[-54,19]],[[14973,9005],[58,49],[-15,37],[-77,-9]],[[14939,9082],[-90,-21],[-83,1],[-71,-12],[-157,5],[-98,18],[-38,26],[-69,131],[-80,9],[-12,104],[8,21],[100,130],[0,23],[-28,54],[64,123],[30,23],[144,-6],[58,22],[0,168],[-5,10],[8,104],[25,30],[-10,57],[-37,38],[-46,-15],[-16,110],[19,25],[61,15],[41,21],[34,80],[-4,150]],[[21275,10247],[-24,-21],[-9,-37],[35,-55],[-6,-25],[-36,-25],[15,-37],[-28,-54],[67,-83],[23,-46],[34,-45],[-2,-55],[23,-26],[51,-27],[69,-75],[63,-31],[36,-47],[53,-15],[26,-22],[30,-87],[33,-52],[54,-19],[44,-36],[45,-18]],[[21871,9309],[-1,-135],[-21,-58],[11,-26],[4,-64],[-16,-28],[-13,-101],[6,-29],[37,-31],[-19,-45],[-41,-18],[-38,-33],[-97,-54],[-34,-35],[-12,-37],[-6,-126],[52,-139],[-9,-91],[23,-34],[43,14],[31,-43],[20,-62],[-11,-51],[52,-82],[15,-62],[-11,-39],[15,-46]],[[21851,7854],[-75,-3],[-37,-16],[-33,-35],[-71,-42],[-43,-53],[-38,-12],[-45,-49],[-74,29],[-29,-29],[-1,-58],[-16,-31],[-58,-8],[-28,31],[-16,58],[-70,20],[-62,-54],[-24,2]],[[21131,7604],[-27,27],[-74,0],[-22,7],[-37,53],[-61,8],[-47,30],[2,55],[-28,36],[-98,-18],[-67,1],[-34,-13],[-26,7],[-50,-8],[-35,-36],[-79,-49],[-81,15]],[[20367,7719],[-17,96],[-15,28],[-15,85],[-24,98],[-18,18],[-70,10],[-41,39],[-9,95],[24,119],[2,95],[9,68],[-7,130],[4,50],[37,13],[8,19],[-9,128],[43,155],[32,58],[12,65],[11,176],[43,99],[5,58],[-10,88],[-15,43],[-9,78],[30,44],[-20,72],[2,48],[17,45],[2,37],[-18,40],[-8,60],[-27,62]],[[18203,8878],[-47,-65],[-53,-104],[-51,-48],[-59,-40]],[[17993,8621],[-20,7],[-117,-3],[-25,14]],[[17831,8639],[22,52],[34,35],[18,88],[-25,15],[15,78],[26,5],[3,44],[-14,38],[27,19],[13,40],[-14,58],[-44,11],[-28,20],[-11,29],[-48,60],[-4,58],[-61,56],[13,51],[-49,39],[-69,-15],[-40,49],[29,40],[-6,36],[19,13],[2,57],[-20,22],[-14,47],[-78,14],[-24,29],[8,49],[-40,-3],[-43,39],[-79,48],[-99,16],[-11,42],[-44,-10],[4,36],[-49,0],[-34,17],[-42,-14],[-59,-4],[-22,21],[-35,-34],[-35,6],[-23,-19],[-82,48]],[[16818,9965],[2,77],[-11,18],[-68,54],[-5,42],[-20,18],[-109,42],[-41,6],[-111,-7],[-26,20],[-130,-24],[-44,7],[-56,43],[-53,9]],[[6761,10361],[-38,62],[-33,75],[-80,136]],[[14939,9082],[-71,-100],[-68,-81],[-52,-52],[-59,-11],[-39,-20],[-59,-57],[-75,-39],[-97,-11],[-78,2],[-54,32],[-62,66],[-17,66],[-33,-4],[-47,-32],[-51,-5],[-50,47],[-50,11],[-19,-9],[-23,-48],[-33,-41],[-33,-13],[-30,-32],[-60,-27]],[[13779,8724],[-27,198],[-43,14],[-109,15],[-15,-50],[-42,-33],[-57,-9],[-44,-23],[-27,14],[-27,-8],[-59,14],[-44,29],[-49,-14]],[[13236,8871],[-42,32],[-36,106],[-59,70],[-23,12],[-54,55]],[[12990,9211],[7,18],[54,54],[41,71]],[[6850,10063],[-113,16],[-79,50],[-76,-11],[-45,-57],[-45,-33],[-7,-83],[20,-94]],[[6505,9851],[-94,-77],[8,-59],[-47,-12],[-17,-40],[49,-56],[17,-79],[-21,-82],[-22,-25],[-79,-18],[-48,-1],[-110,-39],[-41,-60]],[[6100,9303],[-154,-1],[-33,15],[-42,54],[-21,72],[-72,193],[-45,98]],[[5733,9734],[6,106],[27,57],[14,54],[-4,55]],[[5776,10006],[99,98],[-5,107],[-26,94],[-4,53]],[[5588,10433],[90,-132],[19,-36],[11,-52],[-4,-60],[-46,-57]],[[5658,10096],[-72,-4],[-128,-50],[-39,-3],[-33,26],[-32,88],[-63,18],[-46,33],[-30,64],[-53,83]],[[8088,9354],[-78,-90]],[[8010,9264],[-19,-10],[-75,-99],[-19,-68],[15,-101],[-66,-79],[-33,-105],[12,-75],[7,-84]],[[7832,8643],[1,-37],[-24,-48],[-10,-67],[-34,-82]],[[7765,8409],[-42,-28],[-28,-42],[-29,-5],[-38,16],[-26,-22],[-31,5],[-37,-32],[-48,17],[-65,5]],[[7421,8323],[-46,57],[-64,1],[-51,-26],[-56,-3],[-32,-25],[-53,-7],[-26,-25],[3,-56]],[[7096,8239],[-110,-120],[-40,-74],[7,-37],[-12,-24],[-31,-6]],[[6910,7978],[-99,1],[-107,18],[-69,5]],[[6635,8002],[24,50],[73,78],[21,43],[58,61],[46,110],[40,21],[131,16],[13,39],[38,30],[135,37],[30,19],[-3,24],[-53,49],[-49,74],[-19,77],[3,77],[42,114],[39,122],[10,54],[-3,146],[-12,58],[-43,54],[2,27],[81,104],[121,124],[59,76],[35,58],[7,62],[38,69],[29,35],[26,50],[55,75],[19,6],[88,-18],[122,0],[70,35],[20,19],[75,14],[52,-51],[15,-32],[1,-93],[-12,-67],[-25,-67],[7,-51],[112,-85],[43,-45],[9,-23]],[[4085,9778],[-22,-11],[-7,-65],[24,-20],[-11,-42],[-35,-59],[1,-52],[-20,-57],[-25,-37],[-16,-135],[-30,-37],[-71,-42],[-82,10],[-81,-18],[-24,-17],[-22,-57],[-59,-42]],[[3605,9097],[-58,-21],[-70,7],[-45,32],[-95,-24],[-66,-1],[-59,11],[-47,-22],[-73,19],[-69,7],[-28,-22],[-46,49],[-37,-5],[-24,25],[-39,14],[-35,-8]],[[5776,10006],[-25,37],[-93,53]],[[22152,9387],[-54,-52],[-29,-16],[-77,-11],[-93,-6],[-28,7]],[[16818,9965],[-96,-32],[-19,-34],[6,-39],[-22,-20],[-18,-52],[35,-42],[-5,-95],[-50,-45],[-14,-49],[33,-34],[46,-67],[3,-43],[54,-106],[5,-89]],[[16776,9218],[-32,12],[-47,50],[-48,20],[-24,24],[10,68],[-64,60],[-17,34],[-22,-10],[-48,-160],[-90,-65],[-26,-65],[-39,9],[-4,80],[-23,12],[-35,-32],[-47,-14],[-39,3],[-32,20],[-68,62]],[[16081,9326],[-1,28],[41,52],[5,112],[168,81],[-42,280],[-47,13],[-23,75],[-36,9],[-75,37],[-94,40],[-14,26]],[[5733,9734],[-87,-89],[-58,-107],[-61,-58],[-51,-4],[-36,15],[-58,3],[-94,-49],[-38,-32],[-16,-31],[-1,-62],[-32,-8],[-59,28],[-84,-34],[-20,-22],[1,-169],[-5,-68]],[[5034,9047],[-17,-1]],[[5017,9046],[-34,48],[18,104],[16,27],[-13,50],[-84,84],[-47,14],[-53,-23],[-38,-71],[-15,-50],[-20,-21],[-50,-9],[-41,10],[-53,48],[-68,18],[-16,20],[69,80],[0,79],[33,16],[7,53],[-24,144],[-17,18],[-48,8],[-49,25],[-14,21],[-2,45],[17,24],[37,124],[22,128],[-2,66],[-29,68]],[[20367,7719],[0,-49],[-33,-54],[-29,-10],[-77,-68],[-17,-57],[12,-39],[42,-67],[6,-40],[-37,-58],[-25,-56],[-111,-124],[-12,-70],[-16,-40],[-70,-81],[-36,-65],[-13,-48],[-50,-22],[-27,-38],[-38,-27],[-6,-26],[16,-57]],[[19846,6623],[4,-42],[-17,-31],[-63,-45],[-127,-15],[-57,-16],[-48,4],[-48,-16],[-43,-39],[-35,-16]],[[19412,6407],[-23,23],[-33,62],[-13,136],[37,63],[-5,60],[21,39],[43,-4],[53,51],[2,33],[-105,129],[-57,114],[-32,77],[-26,30],[-71,14],[-109,1],[-117,10],[-63,18],[-82,-12],[-4,72],[-75,12],[-80,-1]],[[18673,7334],[-61,110],[-84,118],[-62,79],[-41,78],[-10,57],[0,80],[-23,177],[-40,27],[-46,49],[-30,9],[-73,-1],[-61,21],[-39,36],[-22,47],[-16,103],[-1,116],[-13,39],[-37,66],[-21,76]],[[5017,9046],[-12,-30],[-28,-16],[-47,11],[-90,-75],[-34,-43],[-28,-16],[-26,-40],[-32,-21],[-11,-69],[-56,-94],[-29,-95],[14,-22]],[[4638,8536],[-67,30],[-66,40],[0,61],[-39,16],[-40,-88],[-17,-56],[-39,-83],[-49,-48],[-14,-36],[-3,-88],[-26,-75],[6,-76],[-10,-40],[18,-61],[-13,-62],[6,-30],[-15,-58],[-54,4],[-151,40],[-53,-70],[-18,-114],[45,-87],[-13,-67]],[[4026,7588],[-71,36],[-39,-3],[-53,11],[-43,53],[-1,37],[16,68],[13,98],[4,108],[49,122],[39,116],[14,89],[26,20],[20,53],[53,16],[20,47],[65,57],[23,75],[6,86],[-11,41],[-51,21],[-29,1],[-46,-86],[-51,-36],[-35,3],[-31,-58],[-37,-35],[-25,4],[-80,85]],[[3771,8617],[3,64],[30,33],[45,8],[6,129],[-26,16]],[[3829,8867],[-27,25],[-53,11],[-7,33],[25,32],[-10,27],[-67,23],[-62,46],[-23,33]],[[16081,9326],[-13,-45],[-32,-61],[-4,-53],[54,-112],[-1,-48]],[[16085,9007],[-59,-17],[-57,10],[-97,-22],[-28,24],[-28,-2],[-31,-27],[-64,-4]],[[15721,8969],[-34,63],[-73,84],[-70,45],[-12,26],[13,35],[-15,45],[1,85],[7,31],[-10,47],[-40,-2],[-62,25],[-38,42],[-33,153],[13,84],[43,85],[-70,83]],[[6730,9776],[-78,0],[-88,21],[-59,54]],[[26743,9862],[166,-177],[89,-75],[2,-96],[23,-168],[-2,-139],[26,-26],[66,-27],[106,-66],[102,-53],[-4,-47],[-45,-88],[-22,-64],[-77,-153],[-64,-33],[-5,-38],[29,-78],[-14,-54],[22,-24],[17,-52],[5,-78],[26,-53],[-33,-156],[32,-29],[-20,-59],[10,-36],[-25,-49],[-3,-45],[-18,-38],[16,-33],[-64,-49],[-14,-50],[-63,-16],[-86,9],[-51,34],[-79,5],[-62,19],[-32,41],[-158,6],[-51,14],[-83,6],[-28,-11],[-5,-27],[-69,-62],[-12,-43],[-34,-14],[18,-49],[-22,-29],[-36,-22],[-35,-80],[-19,-17],[-46,-9],[-47,-33],[-35,-64],[-26,-29],[-27,-53],[-2,-51],[-22,-44],[-74,-65],[-73,-28],[18,-113],[-39,-19],[-36,-40],[-28,0],[-72,-44],[-45,-9],[-33,-38],[-72,-22],[-22,-17],[-77,-23],[-36,-29],[15,-39],[-8,-32]],[[25376,6692],[-159,19],[-29,53],[-34,0],[-99,13],[-38,41],[3,93],[11,30],[13,143],[7,37],[-5,93],[-39,69],[-18,84],[7,75],[-1,88],[-23,26],[-60,38],[-179,148]],[[24733,7742],[77,35],[60,65],[59,19],[135,-2],[29,-5],[85,16],[24,20],[22,41],[19,80],[5,130],[-5,58],[-16,32],[3,58],[38,62],[10,74]],[[25278,8425],[33,25],[90,17],[103,4],[51,-20],[74,-14],[56,-3],[41,-19],[28,-38],[58,51],[59,69],[159,109],[-15,33],[-45,42],[2,96],[33,53],[129,68],[48,0],[30,12],[32,50],[46,28],[28,69],[29,33],[-23,33],[-34,-3],[-35,17],[-1,30],[63,43],[35,10],[68,60],[4,34],[50,58],[0,25]],[[17831,8639],[-112,67],[-109,70],[-108,65],[-293,75],[-123,36],[-24,58],[-60,35],[-81,8],[-89,70],[-26,56],[-30,39]],[[10242,8956],[-7,-67],[-13,-33]],[[10222,8856],[-105,6],[-97,-11],[-82,50],[-62,53]],[[9876,8954],[-43,71],[-31,75],[-40,64],[-15,37],[-62,83]],[[9685,9284],[-14,52],[18,68],[74,55],[67,36],[35,43]],[[9865,9538],[48,27],[25,34],[-9,90]],[[25244,9129],[13,-57],[38,-58],[-35,-46],[-72,-34],[-23,-50],[-51,-47]],[[25114,8837],[-41,25],[-113,13],[-74,21],[-87,-14],[-66,11],[-53,-2],[-30,21],[-48,10],[-102,0],[-51,-21],[-64,-13]],[[24385,8888],[-56,43],[-40,0],[6,43],[66,82],[22,109],[-37,47],[-103,-12]],[[12257,9244],[-41,-52],[-54,-46],[-59,-3],[-24,-38],[4,-42],[-15,-57],[6,-60],[-21,-25],[-66,-44],[-62,24],[-123,-38],[-36,3]],[[11766,8866],[-68,46],[-46,3],[-43,82],[-20,12],[-126,-11],[-29,15],[-1,25],[-27,40]],[[15721,8969],[-18,-33],[-69,-82],[-46,6],[-33,-10],[-6,-44],[-37,-15],[-43,-43],[-17,-62],[-17,-21],[-118,29],[-66,5],[-54,-14],[-124,-69],[-32,-27]],[[15041,8589],[-26,39],[2,23],[34,73],[83,42],[25,38],[-3,24],[-58,35],[-23,60],[3,60]],[[9865,9538],[-109,-12],[-63,-46]],[[7004,9517],[-10,-33],[-13,-155],[-26,-28],[-53,-6],[-63,-23],[-29,-30],[-59,-85],[-96,-52],[-24,-31],[-12,-50],[-24,-52]],[[6595,8972],[-26,-5],[-36,-40],[-64,-41],[-64,-58],[-43,-49]],[[6362,8779],[-93,-16],[-54,2]],[[6215,8765],[9,54],[0,73],[-34,69],[-28,151],[-34,77],[-7,65],[-21,49]],[[2010,9089],[-22,-8],[-50,10],[-43,-4],[-41,-26],[-56,-12],[-49,-39],[-63,-6],[-45,-59],[-40,-72],[-26,-17],[-68,-88],[-15,-3],[-62,39],[-52,-25],[-31,-58],[-36,-155],[-22,-16],[-69,5],[-20,-14],[-27,-67],[-57,-64],[-26,-44],[-86,-64],[-29,-39],[-58,-21]],[[917,8242],[29,48],[-16,29],[2,31],[72,29],[19,21],[-30,33],[14,50],[31,27],[-20,35],[10,78],[32,15],[2,68],[-72,30],[23,37],[58,51],[0,136],[-51,27],[10,28],[37,17],[28,101],[-2,150],[43,-2],[138,-66],[63,-14],[41,16],[14,32],[69,67],[34,22],[-13,27],[-50,1],[-3,34],[22,32],[-28,29],[4,20],[56,47],[-38,29],[14,81],[-3,97]],[[917,8242],[-28,-43],[12,-58]],[[901,8141],[-21,-51],[-71,-48]],[[809,8042],[-83,-16],[-165,26]],[[561,8052],[16,40],[-7,24],[-40,26],[-3,33],[53,62],[-11,64],[60,26],[26,23],[71,89],[-6,48],[96,15],[22,86],[-18,42],[5,104],[32,76],[0,21],[-36,70],[-7,51],[6,61],[-5,61],[-31,64],[-18,56],[-38,72],[-45,17],[-63,60],[-12,87],[41,36],[38,8],[12,29],[4,85],[-16,37],[-56,27],[-16,41],[15,26],[-23,70],[-56,88]],[[9095,9480],[-53,-18],[-79,-70],[-36,0],[-151,-22],[-47,6]],[[8729,9376],[0,17]],[[8852,9808],[38,26],[48,6]],[[6215,8765],[-35,-20],[-95,-99],[-55,-69],[-30,-21],[-27,-47],[-43,-41],[-70,-8],[-30,-25],[-36,17],[-45,-5],[-23,-21],[-15,-49],[13,-20],[-25,-57],[-29,-30],[-60,-29],[-29,-4],[-35,18],[-19,51],[18,68],[-4,51],[26,46],[-13,15],[-152,-3],[1,-66],[-8,-36],[-49,-57],[-27,-14],[-4,-74],[-21,-62],[-135,-121]],[[5159,8053],[2,70],[-7,47],[-31,56],[-14,102],[14,65],[-1,55],[17,37],[-41,9],[-42,-10],[-40,-38],[-29,-73],[-24,-13],[-53,17],[5,53],[34,105],[42,88],[5,101],[37,64],[-2,63],[14,53],[-4,75],[13,53],[-20,15]],[[23764,8999],[-55,-48],[-56,-23],[-17,-17],[-21,-76],[-8,-85],[-43,-116],[-35,-44]],[[23529,8590],[-36,-26],[-48,-6],[-29,10],[-61,51],[-29,10],[-80,-27],[-31,12],[-82,105],[-53,45],[-64,16],[-95,-11],[-120,-52]],[[22801,8717],[12,47],[-15,16],[-53,-2],[6,37],[-43,17],[-53,-34],[-36,-2],[-41,43],[6,54],[-23,32],[43,22],[-57,89],[20,33],[-18,56],[3,108],[16,30],[3,128]],[[25278,8425],[-57,5],[-9,34],[113,107],[8,37],[-68,7],[-19,42],[-61,38],[-59,61],[-14,41],[2,40]],[[22801,8717],[-20,-38],[-14,-110],[-40,-84],[-60,-45],[-23,-70],[-38,-21],[-1,-20],[29,-39],[5,-81],[-27,-51],[-59,-59],[0,-60],[21,-66],[-3,-33],[-29,-56],[-53,-58],[-51,-78],[-21,-19],[10,-29],[-23,-22],[-7,-57],[-13,-28]],[[22384,7593],[-39,-13],[-18,12],[-79,-13],[-12,-13],[6,-82],[-27,-10],[-27,29],[-52,28],[-76,5],[-52,17],[-86,-26],[-28,40],[5,103],[-41,68],[9,79],[-16,37]],[[17831,8639],[-2,-19],[-71,-8],[-46,-27],[-16,-23],[-34,-99],[19,-53],[3,-42],[-16,-44],[6,-61],[-24,-37],[15,-42],[-7,-32],[-46,-82]],[[17612,8070],[-117,9],[-113,-8],[-58,-11],[-118,-60],[-71,3],[-101,19],[-118,-36],[-78,-35],[-71,4],[-92,42],[-65,11],[-72,37],[-47,54],[-34,11],[-114,8],[-35,9],[-52,42]],[[16256,8169],[35,46],[7,37],[-9,115],[-22,91],[15,75],[-22,55],[-2,30],[36,88],[1,85],[29,47],[26,63],[-14,69],[-43,36],[-86,30],[-50,-18],[-72,-11]],[[9685,9284],[-65,-80]],[[9620,9204],[-19,12],[-69,7],[-59,54],[-16,69],[-24,9]],[[9149,9295],[-49,-13],[-39,4],[-32,-37],[-56,1],[-53,-43],[-35,-7],[-25,-27],[-58,31],[-39,-24]],[[8763,9180],[-48,56],[-7,21],[19,62],[2,57]],[[8763,9180],[0,-41],[-39,-18],[-38,-3],[-35,14],[-45,-29],[-31,30],[-21,-47],[-28,-22]],[[8526,9064],[-24,125],[-3,110],[-20,55]],[[24385,8888],[-1,-38],[-75,-147],[-42,-103],[-11,-53],[-89,-117],[-82,-51],[-39,7],[-58,-29],[-56,-81],[-60,-35],[-134,-3],[-52,-11]],[[23686,8227],[13,129],[-8,84],[-29,69],[-19,22],[-75,17],[-39,42]],[[12529,8227],[-30,-15],[-70,81],[-83,62],[-61,82],[-22,18],[-50,13],[-45,35],[-39,5],[-52,-10],[-40,41]],[[12037,8539],[64,75],[10,31],[-3,55],[-19,42],[10,37],[112,63],[56,52],[7,71],[31,34],[21,-52],[40,-9],[29,22],[80,23],[43,52],[33,96]],[[8526,9064],[-39,-18],[-31,3],[-29,-16]],[[8427,9033],[-42,29]],[[8385,9062],[-26,54],[0,197],[-5,11]],[[8385,9062],[-34,-18],[-114,-137],[-63,-43],[-61,-15],[-56,-2]],[[8057,8847],[28,63],[77,119],[34,29],[24,61],[-53,65],[-73,3],[-32,11],[-52,66]],[[9876,8954],[-45,-53]],[[9831,8901],[-45,19],[-31,37],[7,28],[-25,101],[-27,35],[-30,-4],[-14,39],[-46,48]],[[12037,8539],[-29,-21],[-2,-25],[-33,-65],[-50,-62],[-42,-73],[-21,-21],[-60,-33],[-28,-28]],[[11772,8211],[-96,107],[-31,58],[-11,60],[4,71],[-17,35],[-30,96]],[[11591,8638],[82,116],[41,12],[52,100]],[[8057,8847],[-33,-77],[-38,-172],[-25,-24],[-29,-3],[-50,20],[-50,52]],[[11007,8821],[-17,-46],[-59,-32],[20,-60],[-5,-53],[18,-17],[109,-24],[93,-42],[15,-16],[21,-64],[31,20],[49,-16],[2,-83],[-34,-146],[8,-49],[24,-72],[9,-100],[-16,-51],[-23,-20]],[[11252,7950],[-59,29],[-57,11],[-72,-53],[-188,-115]],[[10876,7822],[-45,37],[-160,188],[-50,30],[-39,5],[-24,-13],[-18,-47],[-4,-78],[-29,-57],[-95,-45],[-46,-12],[-105,-4],[-66,9],[-94,25],[-93,50],[-109,51]],[[9899,7961],[20,145],[-3,27],[14,107]],[[9930,8240],[32,68],[33,44],[31,87],[51,81],[28,58],[6,39],[37,73],[38,35],[28,46],[8,85]],[[13236,8871],[49,-117],[4,-82],[-14,-64],[-2,-54],[10,-46]],[[13283,8508],[34,-95],[80,-96],[29,-56],[36,-150]],[[13462,8111],[-28,-67]],[[13434,8044],[-83,-4],[-57,-28],[-19,32]],[[13275,8044],[-12,76],[-111,-14],[-71,21],[-47,71],[-16,55],[-54,15],[-33,33],[-95,52]],[[24733,7742],[-51,-4],[-32,-15],[-51,-55],[-30,-64],[-50,-31],[-85,-16],[-87,-6],[-28,-18],[-88,-21],[-74,23],[-42,21],[-71,-11],[-33,32],[-43,-14],[0,-65],[-25,-81],[3,-32],[-43,-25],[-22,-57],[-47,-8],[-29,10],[-59,-13]],[[23746,7292],[4,48],[-16,78],[-62,104],[-38,20],[-7,51],[-29,27],[-31,7],[-7,34],[26,58],[-1,40],[-29,144],[-37,81],[-3,35],[29,32],[42,16],[20,-13],[50,41],[19,47],[10,85]],[[16256,8169],[-85,-17],[-56,-32]],[[16115,8120],[-136,-34],[-104,27],[-46,-23],[-59,-17],[-37,-56],[-76,-50],[-71,-15],[-42,-33],[-64,-103],[-26,-30],[-31,9],[-91,-17],[-70,-3],[-107,-31],[-12,-12],[-59,-119]],[[15084,7613],[-49,-33],[-17,-25],[-17,-97],[-32,-58]],[[14969,7400],[-26,33],[-57,26],[-85,8]],[[14801,7467],[16,122],[37,47],[-40,50],[-13,80],[-51,35],[-63,-29],[-55,-4],[-28,24]],[[14604,7792],[14,18],[9,69],[26,35],[11,43],[-2,140],[-16,87],[13,66],[48,23],[16,48],[-11,64],[6,58],[64,29],[50,-3],[53,10],[124,58],[32,52]],[[3829,8867],[-69,-65],[-79,-57],[-62,-21],[-112,32],[-34,4],[-108,-81],[-129,-9],[-17,-46],[-65,-53],[-46,39],[-30,5],[-4,-48],[20,-91],[38,-104],[-15,-5],[-108,-130],[-24,-46],[-16,-57],[-35,-32],[-21,-35],[-70,-55],[51,-41],[25,-43],[1,-30],[-36,-66],[56,-22],[163,-76],[68,-6],[55,-16]],[[3226,7712],[-15,-27],[-30,-7],[-31,-28],[-69,-14],[-59,1],[-20,-13],[-115,-5],[-107,1],[-84,13],[-53,-3],[-112,-123],[-69,-68],[-48,-73]],[[2414,7366],[-54,9],[-64,-2],[-78,13],[-33,12],[-127,79],[-115,25],[-34,18],[-85,70],[-47,30],[-53,15],[-56,34]],[[1668,7669],[16,8],[-16,170],[-260,143],[-59,-95],[-439,245],[-9,1]],[[14973,9005],[-90,-72],[-29,-47],[-52,-60],[-70,-49],[-47,-10],[-68,-31],[-24,-42],[-43,-42],[-58,-23],[-47,-6],[-81,-48],[-27,-3],[-77,36],[-56,-4],[-48,-29],[-21,-65],[-54,-31]],[[14081,8479],[-81,57],[-89,28],[-135,56]],[[13776,8620],[3,104]],[[11591,8638],[-111,-7],[-27,16],[-14,35],[-3,69],[-48,21],[-21,46],[-42,35],[-56,15]],[[14604,7792],[-19,3],[-69,-23],[-76,-3],[-64,38],[-70,16]],[[14306,7823],[-7,68],[-137,42],[-48,30],[-21,38],[-10,96],[49,57],[-23,45],[-34,-1],[-36,32]],[[14039,8230],[34,142],[8,107]],[[8427,9033],[-15,-42],[-29,-24],[-1,-64],[36,-33]],[[8418,8870],[-9,-11],[-1,-80],[-13,-138],[-18,-51],[-44,-58],[-6,-37],[-44,-69],[-52,-64],[-84,-59],[-21,-4]],[[8126,8299],[-23,40],[-17,79],[-34,3],[-70,-82],[-49,-42],[-39,-18],[-36,6],[-16,36],[-35,10],[-4,55],[-38,23]],[[5159,8053],[-32,-25],[-1,-32],[-44,-23],[-55,-74]],[[5027,7899],[-47,-47],[-15,-53],[-51,-93],[-51,-28],[-19,-39],[-60,-50],[-9,-29],[-42,-36],[-55,-13],[-57,-50]],[[4621,7461],[-56,108],[-18,56],[8,78],[25,55],[37,38],[8,53],[-29,36],[-36,79],[-26,38],[-3,144],[32,54],[-16,69],[-1,50],[21,84],[17,21],[18,53],[36,59]],[[13275,8044],[-27,-8],[-50,-40],[-17,-71],[-34,-23],[-54,-59],[-17,-43],[-4,-46],[20,-36],[-8,-56]],[[13084,7662],[-32,-10],[-71,16],[-46,-8],[-76,56],[-34,0],[-35,-20]],[[12790,7696],[-83,-3],[-38,-19]],[[12669,7674],[-67,48]],[[12602,7722],[1,63],[32,28],[11,64],[53,78],[2,61],[37,70],[-13,84],[2,42],[29,40]],[[13776,8620],[-29,-36],[-55,-35],[-51,-7],[-92,6],[-98,-4],[-68,4],[-60,-11],[-40,-29]],[[9930,8240],[-74,11],[-140,33],[-11,26]],[[9705,8310],[10,77],[21,30],[-16,30],[69,71],[6,38],[75,-8],[13,39],[-11,57],[11,30],[-25,62],[17,122],[-44,43]],[[6595,8972],[-80,-168],[-10,-40],[-55,-57],[-69,-20],[-4,-42],[-29,-24],[-7,-78],[12,-37],[-16,-19],[-18,-69],[13,-54],[-15,-43],[-57,39],[-53,-74],[-68,-30]],[[6139,8256],[-51,51],[-49,7],[-29,17]],[[6010,8331],[11,61],[57,95],[44,38],[-11,36],[29,35],[-3,30],[28,36],[55,0],[51,29],[65,54],[26,34]],[[6634,8612],[-25,-18],[-31,-56],[-27,-32],[-3,-41],[-28,-44],[-32,-17],[-61,-9],[35,-47],[-22,-47],[-2,-46],[-30,-37],[-29,-78],[-14,-58],[-9,-100],[20,-12],[37,19],[37,-4]],[[6450,7985],[56,-14],[8,-26]],[[6514,7945],[1,-99],[-24,-54],[-9,-97],[-17,-47],[-44,-39],[-51,40],[-38,-19],[-30,14],[-35,-8],[-29,19]],[[6238,7655],[-31,-10],[-56,46],[-44,4],[-45,41],[29,28],[8,45],[-24,25],[0,29],[-33,16],[-4,32],[35,50],[24,73],[-7,42],[-29,32]],[[6061,8108],[78,148]],[[6595,8972],[10,-19],[-3,-119],[9,-92],[23,-130]],[[7421,8323],[-28,-108],[14,-32],[-21,-59],[10,-22],[-8,-71],[-32,-83]],[[7356,7948],[-148,148],[-46,39],[-4,45],[-62,59]],[[23746,7292],[-45,-22],[-25,-43]],[[23676,7227],[-13,14],[5,43],[-47,10],[-61,-82],[-43,-39],[12,-33],[71,-5],[48,-112],[10,-79],[-33,-43],[-71,-33],[-114,-33],[-76,-13],[-63,20],[-31,54],[5,103],[15,76],[-10,22],[-75,-4],[-46,11],[-22,-34],[-39,17],[-32,37],[-42,25],[-21,30],[9,120],[11,47],[16,133],[-65,44],[-95,40],[-46,34],[-21,-1],[-85,-76],[-234,-179]],[[22493,7341],[-48,77],[-32,29],[-13,93],[-16,53]],[[11772,8211],[-58,-99],[8,-71],[37,-38],[6,-52],[-33,-82]],[[11732,7869],[-63,-29],[-105,-31],[-91,-35],[-58,33],[-11,45],[-23,31],[-93,54],[-36,13]],[[8647,8225],[-71,-1],[-74,-41],[-108,-99],[-79,-111]],[[8315,7973],[-105,41],[-163,112],[-59,48],[19,27],[63,5],[59,65],[-3,28]],[[8418,8870],[39,6],[26,-22],[36,32],[28,-53],[38,-37],[90,-71],[59,-26],[47,-39],[9,-67],[30,-27],[-28,-76],[29,5],[21,-32],[-33,-21],[-17,-72],[-41,-45],[-34,-20],[-21,-43],[-49,-37]],[[3771,8617],[-23,-38],[-11,-58],[-79,-106],[-70,-45],[-8,-34],[-38,-59],[-11,-56],[-21,-40],[-38,-33],[-15,-30],[-51,-22],[-34,-26],[-15,-90],[-48,-70],[-37,-37],[-1,-36],[-30,-42],[-15,-83]],[[6010,8331],[-45,-29],[-41,-42]],[[5924,8260],[-61,-4],[-143,-39],[-107,-63],[-82,-31],[-50,-30],[-8,-51],[-38,-43],[-23,-2],[-25,-37]],[[5387,7960],[-156,-59],[-70,-9],[-134,7]],[[18673,7334],[-1,-60],[-13,-48],[-27,-35],[-67,-40],[2,-50],[-14,-39],[14,-68],[-2,-43]],[[18565,6951],[-72,-7],[-59,20],[-83,4],[-88,-11],[-52,-36],[-99,-3],[-33,14],[-22,36],[-94,-26],[-46,-30],[-100,-13]],[[17817,6899],[-69,8],[-75,-5],[-56,8],[-16,-62],[-3,-76],[-35,-23],[-62,51],[-16,4]],[[17485,6804],[-28,31],[-77,16],[-30,25]],[[17350,6876],[-12,129],[-18,46],[-50,32],[-61,2],[-122,-28],[-30,38]],[[17057,7095],[45,8],[30,20],[20,39],[41,118],[20,30],[37,23],[84,-17],[36,3],[17,39],[-45,61],[-26,81],[-23,95],[-24,127],[0,41],[31,82],[45,47],[35,16],[69,11],[32,-7],[36,-24],[39,39],[-1,53],[55,64],[2,26]],[[4026,7588],[-1,-52],[-25,-28],[-14,-89],[-44,-61],[-32,2],[-6,-88],[-30,-58],[11,-30],[-20,-42],[16,-46]],[[3881,7096],[-46,-31],[-14,-58],[-76,1],[-30,12],[-65,-20],[-58,-2],[-48,32],[-95,17],[-76,61],[-95,24],[-43,52],[-58,3],[-54,-49],[-35,-12],[-52,35],[-38,1],[-28,23],[-107,108],[-59,37],[-104,7],[-47,-15],[-66,1],[-173,43]],[[9548,8526],[-64,-8],[-53,-71],[-51,-102],[-25,-96],[-40,-78],[-32,-38],[-16,-54],[-29,-45],[-10,-56],[7,-21],[53,-61],[38,-25],[62,-64],[14,-112],[-13,-83]],[[9389,7612],[-153,118]],[[9236,7730],[-77,64],[-67,10],[-34,-25],[-124,-164],[-38,-30],[-107,-35],[-107,-77],[-73,-75],[-19,-30],[8,-59],[-21,-35],[-37,-7]],[[8540,7267],[-48,31],[-16,45],[67,42],[-1,50],[-50,71],[-46,99],[-29,50],[-92,38],[-30,37],[25,95],[11,77],[-4,55],[-12,16]],[[8647,8225],[21,-77],[-2,-53],[31,-21],[64,78],[36,26],[18,47],[43,29],[9,41],[-32,38],[29,42],[32,0],[6,33],[-29,29],[54,40],[40,44],[15,41],[57,16],[53,-15],[4,37],[60,-17],[1,55],[57,24],[23,-17],[27,20],[93,-11],[49,25],[53,-38],[8,-44],[46,-45],[52,46],[15,-20],[-32,-52]],[[14039,8230],[-27,-12],[-25,-38],[-28,-7],[-30,39],[-46,-46],[-51,-8],[-74,15],[-30,-18],[-7,-48]],[[13721,8107],[-24,4],[-50,38],[-20,2],[-36,-39],[-19,-3],[-52,22],[-58,-20]],[[4621,7461],[-15,-20],[-16,-85],[-13,-33],[8,-45],[-60,-52],[-5,-57],[-84,-17],[-35,30],[-33,-13],[-25,13],[-37,-22],[-36,-5],[-71,-28],[-57,-3],[-30,-24],[-89,-28],[-103,10],[-39,14]],[[6635,8002],[-42,-23],[-14,-46]],[[6579,7933],[-39,-8],[-26,20]],[[6450,7985],[17,38],[79,111],[96,183],[27,85],[-16,149],[-19,61]],[[12529,8227],[-6,-123],[-21,-78],[-30,-41],[-75,-24],[-81,-4],[-78,-21],[-38,-21],[-24,-31],[-21,-62],[1,-111],[31,-69]],[[12187,7642],[-17,-30],[1,-79],[-23,-63]],[[12148,7470],[-49,23],[-42,39],[-72,26],[-17,18],[-10,65],[-79,62],[-57,56],[-90,110]],[[9548,8526],[9,-27],[75,-19],[17,-21],[16,-59],[-7,-56],[47,-34]],[[9899,7961],[-20,-75],[-8,-115],[10,-70],[1,-257],[-13,-110],[-13,-38],[-51,-40]],[[9805,7256],[-40,42],[-3,110],[-12,49],[-32,39],[-67,15],[-76,0],[-55,34],[-59,14],[-72,53]],[[12602,7722],[-68,-6],[-58,-78],[-46,-30],[-33,-1]],[[12397,7607],[-52,7],[-77,34],[-61,3],[-20,-9]],[[8540,7267],[-31,-47],[-45,-18],[-40,-31],[-56,-21],[-42,-32],[-37,-90],[-30,-27],[-57,-30],[-73,-75],[-24,-12],[-63,-6]],[[8042,6878],[-66,-37],[-16,-23],[-8,-49],[0,-68],[-24,-85],[-32,-57],[-33,-10],[-13,-38],[12,-79],[-49,-11],[-18,-16],[-46,0],[-19,-20],[19,-95],[-7,-44],[-35,-62],[-25,-9],[-17,-39],[-24,-3],[-24,-97],[20,-91],[-21,-31],[-13,-122],[-29,-23],[-31,6],[-31,-66],[0,-117],[-25,-24],[-48,-1],[-7,-23],[-42,-52],[-75,-35],[-19,-26],[-35,36],[-46,25],[-34,-4]],[[7181,5488],[2,35],[22,39],[47,35],[15,44],[-9,39],[10,62],[48,86],[59,50],[-18,35],[19,69],[31,18],[-1,71],[-34,75],[16,104],[20,28],[9,51],[25,40],[-22,26],[28,53],[69,44],[59,108],[29,23],[13,87],[-29,64]],[[7589,6774],[50,22],[31,36],[59,37],[60,20],[69,65],[36,68],[29,38],[42,167],[50,46],[25,36],[6,90],[-54,-5],[-68,9],[-70,-5],[2,-52],[-11,-17],[-42,4],[-13,-72],[-48,-25],[-32,22],[15,27],[2,51],[-67,9],[-44,39]],[[7616,7384],[-12,101],[30,82],[0,58],[-24,19],[-56,1],[-30,16],[-80,-7],[-35,7],[-17,21],[-27,66],[-25,22]],[[7340,7770],[3,138],[13,40]],[[7589,6774],[-81,-7]],[[7508,6767],[-26,109],[53,48],[16,52],[22,31],[-15,32],[3,44],[-9,42],[11,187],[53,72]],[[14306,7823],[-12,-16],[-67,-13],[-55,18],[-29,-11],[11,-97],[-25,-58],[-38,14],[-36,95],[-62,54],[-41,25],[-72,12],[-50,-18],[-9,-21]],[[13821,7807],[-39,33]],[[13782,7840],[-6,42],[3,101],[15,38],[-5,29],[-68,57]],[[17057,7095],[-49,-7],[-37,-27],[-108,-124],[-57,61],[-34,-6],[-121,-126],[-65,-7],[-88,43],[-56,12],[-36,-4],[-61,-39]],[[16345,6871],[-36,64],[-32,25],[-14,43],[-2,53],[-14,51],[-3,66],[-30,83],[-25,16],[-110,20],[-46,33],[-48,80],[-27,56],[-39,31]],[[15919,7492],[23,81],[34,31],[51,3],[26,15],[-187,236],[29,40],[84,69],[49,48],[87,105]],[[5924,8260],[-41,-84],[-100,-100],[-55,-88]],[[5728,7988],[-88,29],[-101,-8],[-67,-17],[-85,-32]],[[7340,7770],[-75,-31],[-39,-33],[-42,-9],[-9,-59],[-29,-16],[-27,37],[-42,10],[-46,-38],[-27,-1]],[[7004,7630],[-34,163],[-98,38],[-19,32],[6,55],[51,60]],[[13782,7840],[-131,-6]],[[13651,7834],[-20,32],[-27,114],[-20,35],[-89,55],[-33,41]],[[1668,7669],[-37,-18],[-53,38],[-58,-27],[1,-54],[-83,-40],[-41,-106],[-45,7],[-12,-53],[-50,0],[-34,-16],[12,-30],[-30,-19],[-30,11],[-20,-98],[8,-30],[-17,-47],[12,-23],[-50,-75],[-35,-13],[-58,24],[-30,21],[-86,23],[-67,-62],[-54,-104],[-118,-21],[-19,-23]],[[674,6934],[-257,169]],[[417,7103],[36,7],[86,52],[37,32],[33,82],[42,66],[51,47],[25,2],[67,58],[7,65],[-20,94],[8,58],[47,58],[-10,42],[-51,38],[16,49],[-7,71],[25,118]],[[15919,7492],[-37,-35],[-90,-20],[-21,-15],[-7,-103],[-30,-51],[-31,-2],[-70,23],[-58,-2],[-50,-48]],[[15525,7239],[-27,-3],[-39,29],[-18,60],[-22,24],[-63,15],[-5,31],[-46,-6],[-27,27],[-50,-3],[-46,63],[-38,-19],[-22,21],[2,83],[11,49],[-51,3]],[[13651,7834],[-12,-92],[-48,-69],[-22,-78]],[[13569,7595],[-47,-35],[-18,-46],[69,-45],[37,-37],[24,-51],[10,-91]],[[13644,7290],[-26,-77],[-52,-48],[-35,-10],[-115,2],[-95,-11],[-30,-17],[2,-97],[-32,-80],[-53,-57],[-23,-65],[-48,-87],[-8,-43]],[[13129,6700],[-16,244],[-31,388],[-12,100],[-21,13],[-53,6],[-46,35],[-25,46]],[[12925,7532],[-83,112],[-52,52]],[[13084,7662],[47,14],[72,52],[59,54],[43,57],[92,64],[16,38],[21,103]],[[10876,7822],[-2,-131],[-15,-36],[-112,-19],[-138,-34],[-35,-30],[-26,-45],[-18,-85],[-27,-91],[28,-58],[67,-90],[-7,-54],[8,-48],[23,-46]],[[10622,7055],[-49,-35],[-33,-44],[-36,-11],[-30,15],[-60,-44],[-29,-51],[1,-29],[-27,-32],[7,-42],[-63,-25],[-39,13],[-98,48],[-14,-27],[-40,-36],[-49,-12],[-7,-44],[7,-73]],[[10063,6626],[-53,-6],[-60,28],[-80,7],[-96,20],[16,76],[21,34],[-3,63],[27,40],[16,52],[5,80],[-38,99],[9,69],[-20,17],[-2,51]],[[21131,7604],[-51,-45],[-5,-90],[25,28],[43,3],[26,-25],[-21,-48],[-5,-67],[8,-98],[-24,-52],[3,-50]],[[21130,7160],[-31,18],[-35,-11],[-11,-37],[7,-36],[63,-52],[19,-41],[-37,-42],[-71,-1],[-53,-23],[-26,-28],[-25,-54],[-37,-104]],[[20893,6749],[-47,-23],[-50,4],[-39,18],[-55,-52],[-37,-25],[-9,-39],[-5,-83],[-17,-118]],[[20634,6431],[-11,3],[-257,198],[-91,66],[-56,8],[-139,-34],[-142,-18],[-80,-20],[-12,-11]],[[417,7103],[-3,15],[-51,28],[-27,38],[-185,156],[-151,118],[4,12],[65,0],[35,-22],[15,-40],[51,-18],[31,43],[13,121],[7,21],[62,30],[47,44],[78,8],[9,35],[29,37],[5,42],[19,27],[28,0],[21,24],[-7,71],[38,103],[11,56]],[[6238,7655],[8,-38],[-27,-40],[-9,-134],[-20,-51],[-25,-32],[-38,-74],[-13,-77],[-37,-67],[-8,-73],[-26,-61],[6,-74],[16,-110],[1,-72],[-37,-56],[-11,-41],[-39,-41],[-5,-37],[24,-38],[5,-53],[-12,-42],[25,-29],[-7,-100],[22,-27],[50,-22]],[[6081,6266],[24,-30],[14,-43],[-8,-29],[14,-51],[-13,-16],[20,-47],[38,-30],[6,-44],[-22,-23]],[[6154,5953],[-38,9],[-323,44],[-10,-88],[-79,5]],[[5704,5923],[-27,32],[-11,70],[58,34],[5,83],[32,27],[15,130],[-14,56],[14,38],[-4,61],[25,83],[2,91],[-18,83],[17,74],[-16,46],[3,42],[23,59],[-23,29],[-14,45],[22,63],[-16,131],[-38,100],[-9,55],[2,54],[34,51],[28,107],[28,38],[8,95],[63,136],[37,19],[37,45],[94,208]],[[6154,5953],[-4,-33],[-22,-21],[20,-31],[-13,-45],[17,-46],[-7,-24],[71,-20],[-24,-33],[6,-53],[-16,-28],[0,-36],[-16,-51],[22,-9],[4,-55],[32,-57],[41,-48],[-36,-27],[7,-37],[-25,-29],[23,-22],[38,0],[4,-41],[-63,-15],[-13,-32],[-1,-54],[47,-60],[-7,-34],[-71,19],[-18,-86],[-18,-34],[4,-51],[-33,-46],[-22,19],[-35,-4],[-28,18],[-28,-57],[-14,-63],[1,-52],[-27,6],[-51,-21],[-22,-25],[-7,-53],[-45,6],[-9,-38],[-63,-55],[-16,-4],[-12,-71],[-32,-38],[-51,5],[-49,-49],[0,-54],[31,-29],[4,-26],[-38,-32],[-37,-13],[3,-50],[-42,-8],[-18,-42],[-28,-16],[-4,-31],[-35,-30],[-24,-2],[-5,-52],[-28,-41],[-28,-13],[-33,-60],[-40,-28],[2,-31],[-39,8],[-29,-18],[-70,37]],[[5135,3807],[48,44],[-6,48],[23,35],[6,53],[40,29],[27,1],[-34,57],[34,59],[-15,38],[43,36],[47,59],[30,2],[36,60],[0,47],[26,48],[-19,48],[26,69],[-16,21],[20,30],[-25,17],[14,56],[-39,35],[26,39],[-11,15],[12,41],[-15,17],[2,93],[29,22],[-8,31],[33,49],[-15,38],[21,36],[40,3],[32,72],[-2,51],[32,-3],[-15,44],[4,78],[26,7],[9,43],[28,-9],[24,20],[26,53],[0,73],[16,52],[-17,23],[-56,26],[32,30],[-16,24],[11,34],[-22,40],[37,21],[-16,40],[23,6],[10,53],[-8,19],[31,43]],[[12148,7470],[-21,-51],[-40,-34],[-57,-28],[-13,-123],[-21,-141]],[[11996,7093],[-7,-13]],[[11989,7080],[-93,71],[-57,39],[-140,69],[-80,4],[-108,-27],[-101,-1],[-130,18],[-30,9],[-74,48],[-45,-19],[-35,-48],[5,-45],[-81,-2],[-98,-47],[-11,-22],[-88,-40],[-26,-26],[-32,-3],[-33,42],[-67,8],[-36,-22],[-7,-31]],[[22493,7341],[2,-42]],[[22495,7299],[-63,-93],[0,-70],[-23,-106],[-31,-27],[-56,-24],[-39,-56],[-57,-39],[-95,3],[-57,26],[-104,-9],[-40,16],[-116,-6],[-17,-27],[-80,9],[-53,13],[-62,-20],[-29,8],[-25,-18],[-59,23],[35,37],[-10,21],[-112,8],[-23,14],[-4,51],[-64,66],[-52,27],[4,48],[-52,-27],[-46,27],[-35,-14]],[[5387,7960],[7,-51],[-28,-5],[-22,-57],[3,-49],[-38,-81],[-2,-45],[-39,-89],[-5,-82],[-56,-135],[-24,-31],[-6,-49],[-28,-33]],[[5149,7253],[-14,133],[-57,123],[-10,44],[4,103],[-4,148],[-17,55],[-24,40]],[[14969,7400],[-22,-99],[5,-75],[15,-62],[-25,-34],[-16,-47],[-3,-50],[40,-79],[-3,-56],[-29,-38],[-16,-51],[-31,-17],[-42,39],[-147,70]],[[14695,6901],[2,30],[-23,11],[-51,-3]],[[14623,6939],[-27,62],[2,62],[35,54],[2,65],[41,54],[39,17],[27,30],[13,49],[31,54],[15,81]],[[5728,7988],[-8,-141],[-27,-100],[-6,-99],[-22,-74],[-27,-125],[-20,-39],[-63,-77],[-31,-68],[-3,-85],[8,-26],[-42,-97],[-37,-51],[-13,-46],[7,-29],[-23,-26],[-40,-82],[10,-18],[-51,-56],[-6,-78],[8,-63],[-46,-21],[-24,-55],[-34,-29],[-25,-60],[-49,-35],[-18,-88],[22,-33],[0,-43],[-33,-24],[-24,-37],[-72,-15],[-14,-46],[-29,-14],[-25,-37],[-12,-58],[20,-30],[-15,-49],[16,-42],[-18,-89],[-28,-44],[-14,-59],[6,-61],[-26,-85],[-50,-38],[-27,-52],[-5,-40],[-32,-34],[-78,-31],[-65,-81],[-55,-35],[-71,-68],[-29,-20]],[[4488,5155],[-45,291],[6,67],[23,51],[48,57],[12,37],[40,22],[19,40],[7,59],[68,54],[58,11],[65,42],[77,95],[27,77],[10,62],[-4,52],[18,90],[0,63],[47,38],[-1,110],[33,66],[3,74],[-30,68],[0,45],[-22,53],[70,96],[22,10],[17,44],[19,2],[14,53],[25,45],[3,156],[32,68]],[[7004,7630],[-11,-93],[22,-56],[11,-58]],[[6718,7421],[28,67],[-9,90],[-37,33],[-41,-5],[-5,-55],[-41,13],[-42,37],[-25,61],[4,108],[7,46],[25,39],[-3,78]],[[25376,6692],[23,-63],[-23,-69],[43,-47],[-18,-74],[4,-39],[-40,-68],[-60,18],[-65,43],[-31,9],[-46,59],[-25,5],[-20,-72],[-20,-2],[-11,125],[-12,50],[-20,27],[-24,0],[-30,-30],[-39,0],[-22,-50],[-29,-94],[-37,0],[-19,-48],[-55,-57],[-44,-11],[-19,-29],[-68,-42],[-44,2],[-53,66],[-156,40],[-61,47],[-52,-40],[-94,-45],[-35,0],[-60,-96],[-40,-39],[-28,33],[-36,8],[-16,-17]],[[23994,6192],[-14,26],[-2,64],[-24,9],[-32,43],[-19,46],[19,40],[62,42],[57,21],[37,77],[3,41],[-17,25],[32,79],[-15,62],[14,22],[-5,45],[-41,32],[-53,23],[-23,22],[6,31],[34,38],[-56,20],[-43,-5],[-15,50],[24,36],[-64,74],[-113,21],[-22,-6],[-20,47],[-28,10]],[[9236,7730],[-31,-50],[-11,-40],[5,-45],[18,-64],[26,-40],[5,-74],[-22,-36],[-6,-34],[18,-97],[28,-193],[-53,-63],[15,-56],[-45,-9],[-61,6],[-28,-39],[-6,-150]],[[9088,6746],[-8,-30],[36,-78],[7,-49],[-44,-54],[10,-55],[-15,-20],[-51,-6],[-17,-51],[-49,-48],[-86,-49],[-49,-51],[-38,-16],[-18,-28],[-3,-49]],[[8763,6162],[-31,-51],[-2,-60],[17,-69],[-2,-67],[9,-47],[-42,-44],[-35,-22]],[[8677,5802],[-49,20],[-24,31],[-45,11],[-81,96],[-51,3],[-44,-44],[-82,-2],[-26,10],[-10,126],[7,63],[22,32],[45,298],[6,62],[19,31],[42,-9],[13,28],[-38,30],[-21,-23],[-83,22],[-19,15],[4,63],[46,41],[32,41],[29,70],[-61,50],[-21,-18],[-62,-89],[-169,100],[-14,18]],[[6739,7239],[-18,-129],[-53,-2],[-54,-31],[-78,39],[-5,-38],[-60,-43]],[[6471,7035],[6,36],[-14,34],[25,44],[2,67],[-42,22],[-32,1],[-81,29],[-35,-66],[-3,-50],[-17,-44],[-13,-71],[45,-42]],[[6312,6995],[-31,-8],[-20,-26],[-4,-51],[18,-106],[-24,-91],[-9,-60],[-38,-52],[6,-79],[-10,-42],[-49,-39],[-45,-73],[-3,-47],[-22,-55]],[[6471,7035],[-58,-28],[-101,-12]],[[14623,6939],[-38,-59],[-60,10],[-24,22],[-68,5],[-39,14],[-21,26],[-46,10]],[[14327,6967],[-54,51],[-49,22],[-16,31],[2,78],[-38,54],[-133,35],[-71,32],[-54,38],[-49,19]],[[13865,7327],[48,121],[-10,64],[8,40],[25,13]],[[13936,7565],[42,13],[12,31],[-40,44],[-44,20],[-55,39],[-28,31],[-2,64]],[[13936,7565],[-18,33],[-162,4],[-61,-7],[-78,9],[-48,-9]],[[4488,5155],[-33,-78],[-32,-100],[-58,-49],[-49,-70],[-19,-55],[3,-93],[-38,-60],[-6,-47],[38,-110],[-5,-64],[-39,-36],[-166,-132],[-66,-71],[-30,-9]],[[3988,4181],[-66,55],[-68,69],[-21,30],[-117,127],[-119,102]],[[3597,4564],[59,88],[38,89],[10,90],[23,68],[17,77],[31,35],[73,18],[80,40],[87,68],[23,31],[19,86],[-14,105],[-15,43],[-33,55],[-54,113],[-2,50],[20,56],[-37,25],[-70,20],[-22,29],[-3,48],[-17,59],[4,42],[82,104],[40,-6],[18,20],[15,62],[-99,81],[-71,38],[-93,70],[-41,68],[-89,48],[-44,58],[-29,12],[-58,-47],[-27,-3],[-37,20],[-31,-14],[-15,-27],[-41,13],[-81,-29],[-81,-2],[-51,-72],[-68,2],[-46,-15],[-80,-4],[-50,4],[-29,-33],[-29,39],[-25,-12],[-38,-47],[-27,-7],[-98,18],[-70,-80],[-69,43],[-27,-22],[-49,12],[-36,-12],[-48,25],[-35,3],[-122,-10],[-44,-41],[-71,0],[-43,-22],[-73,15],[-57,24],[-40,-14],[-79,-4],[-6,-27],[59,-62],[-9,-10]],[[1772,6056],[-14,15],[-140,109],[-151,122],[-89,77],[-137,109],[-34,21],[-163,141],[-196,157],[-174,127]],[[23994,6192],[-3,-76],[-42,-20],[-9,-39],[-29,-13],[16,-35],[-18,-34],[-50,-11],[-27,-30],[-22,5],[-32,35],[-5,34],[22,43],[3,34],[-20,25],[1,30],[-63,93],[13,38],[-288,10],[-19,-23],[-5,-68],[-21,-35],[-1,-79],[-10,-52],[12,-90],[17,-30]],[[23414,5904],[-58,1],[-61,-41],[-39,-5],[-196,-67],[-56,-5],[-72,102],[-40,15],[2,82],[26,115],[16,119],[19,43],[58,55],[6,29],[-60,12],[-86,50],[-63,-1],[-50,-35],[-14,-56],[-57,-11],[-111,17],[-100,26]],[[22478,6349],[6,154],[5,8],[12,136],[-2,60],[6,83],[-13,11],[-60,-4],[-21,17],[1,75],[-11,50],[96,17],[24,17],[0,66],[12,23],[10,81],[25,27],[-25,69],[-48,60]],[[12669,7674],[12,-35],[29,-24],[92,-50],[35,-47],[-71,-66]],[[12766,7452],[-54,-18],[-67,50],[-104,4],[-36,9],[-59,-12],[-40,31],[-9,91]],[[7508,6767],[-30,-37],[-20,-43],[-29,-13],[-54,15],[-37,-43],[-10,-35],[-41,-2],[-49,15],[-11,25],[12,56],[-41,13],[-21,48],[-21,-84],[-30,13],[-29,56],[4,80],[-52,18]],[[7049,6849],[7,91],[-23,68],[-15,81],[-22,70]],[[12766,7452],[10,-26]],[[12776,7426],[-46,-18],[58,-41],[3,-50],[-17,-97],[-10,-10],[-124,-43],[-38,-9],[-79,-43],[-11,-13],[5,-75]],[[12517,7027],[-97,19],[-72,-10],[-69,30],[-67,42],[-124,-2],[-92,-13]],[[10063,6626],[18,-51],[-18,-114],[-23,-59],[9,-47],[-42,-78]],[[10007,6277],[-32,-15],[-92,-84],[-4,-25],[-56,-68],[9,-28],[-55,-65],[-8,-27],[-59,-13],[-1,-71],[43,-19],[-29,-64],[77,-69],[-6,-62],[-24,-36],[6,-35],[-8,-47],[23,-25],[-27,-77],[-5,-36],[-35,-19],[-43,12],[0,-44],[-26,-13],[9,-35],[-40,-32],[3,-40],[-16,-37],[19,-50],[0,-53],[-13,-24],[-32,-14],[-42,5],[0,-65],[21,-39],[3,-40],[-19,-28],[-5,-71],[34,-81],[-7,-46],[-26,-19],[13,-25],[-5,-59],[-27,-14],[-27,-44],[-43,-29],[-23,18],[-31,-15],[14,-48],[4,-63],[-30,-43],[-64,10],[-8,-13],[13,-75]],[[9330,4278],[-87,11],[-106,24],[-142,23],[-11,26],[10,35],[75,377],[16,61],[63,301],[-310,61],[-285,50]],[[8553,5247],[-44,51],[18,60],[-4,58],[22,29],[19,100]],[[8564,5545],[3,22],[47,65],[5,36],[55,28],[3,106]],[[8763,6162],[9,-10],[200,-44],[76,-5],[77,-48],[15,7],[25,56],[49,49],[35,48],[22,11],[32,58],[19,4],[39,40],[59,39],[56,85],[-100,57],[-56,54],[30,66],[55,2],[26,67],[44,9],[-11,51],[-42,51],[-21,5],[-14,-60],[-42,-22],[3,-52],[-49,-24],[-66,48],[-82,34],[-63,8]],[[12925,7532],[-22,-35],[-1,-93],[-44,-25],[-58,45],[-24,2]],[[15525,7239],[-8,-56],[-20,-36],[-19,-98],[-19,-56],[-6,-110],[-17,-36],[1,-100],[8,-50],[67,-29],[-23,-38],[1,-26],[44,-42],[-1,-42],[-23,-64],[-1,-86],[-20,-93],[9,-64],[51,-47],[38,-86],[16,-183],[52,-102]],[[15655,5795],[-19,-5],[-202,-19],[-19,-6],[-49,-115],[-27,-77],[-38,-43],[5,-33],[27,-23],[6,-29],[-86,-104],[-74,-55],[-6,-31],[62,-78],[23,-61]],[[15258,5116],[-31,-1],[-25,-35],[-93,-65],[-49,-23],[1,-61],[-14,-25],[-49,0],[-41,-27],[-43,-6],[-13,-27],[-38,-22],[-36,7],[-50,-26],[-16,14],[-68,-23],[-82,-86],[-12,-33],[-32,-18],[-50,2]],[[14517,4661],[14,41],[69,87],[-18,45],[1,55],[-16,41],[-54,27],[0,22],[44,92],[-11,46],[-32,27],[-106,38]],[[14408,5182],[-32,41],[5,37],[-9,76],[-63,81],[-17,90],[4,32],[49,56],[44,69],[49,133],[-8,183],[-5,30]],[[14425,6010],[63,-50],[30,1],[56,33],[34,5],[209,75],[20,18],[21,68],[8,90],[55,80]],[[14921,6330],[36,-19],[36,33],[-10,142],[25,37],[35,13],[-14,30],[-39,-5],[-29,14],[-82,-30],[-41,34],[-33,10],[-11,25],[-45,-9],[-6,31],[-36,70],[6,41],[-25,41],[-43,-10],[-6,21],[54,70],[2,32]],[[13865,7327],[-28,-46]],[[13837,7281],[-28,1],[-73,-18],[-54,3],[-38,23]],[[13129,6700],[-61,36],[-66,49],[-129,128],[-92,34],[-97,-15],[-35,45],[-132,50]],[[16345,6871],[-41,-45],[-33,-4],[-42,32],[-68,103],[-17,-14],[-16,-69],[-5,-55],[-37,-167],[-27,-73],[-23,-37],[-8,-62],[8,-36]],[[16036,6444],[-46,-39],[17,-29],[-20,-66],[-17,-23],[-60,5],[-13,-69]],[[15897,6223],[-4,-58],[-198,-37],[9,-73],[-9,-51],[35,-48],[16,-70],[-12,-83],[-79,-8]],[[22478,6349],[-68,-2],[-39,-11],[0,-37],[26,-31],[7,-30],[-46,3],[-70,-45],[-85,-10],[-20,-18],[-4,-34],[-55,-43],[-39,1],[-36,29],[-76,5],[-56,14],[-22,-47],[-13,-125],[-20,-109],[-37,-12],[-102,-47],[-71,-13],[-71,11],[-4,-71]],[[21577,5727],[-26,17],[-51,55]],[[21500,5799],[-74,65],[-70,34],[-49,-12],[-62,-36],[-16,28],[31,41],[-17,41],[-34,124],[24,39],[6,67],[49,8],[29,66],[-1,41],[-109,-8],[-24,29],[-64,-23],[-14,20],[30,59],[-12,28],[-35,16],[-128,81],[14,140],[0,65],[-79,-6],[-2,43]],[[19412,6407],[12,-54],[-11,-12],[-228,-28]],[[19185,6313],[-13,22],[-99,72],[-42,23],[-192,140],[-15,7]],[[18824,6577],[-125,89],[-74,60],[-13,43],[-27,163],[-20,19]],[[14327,6967],[5,-56],[29,-28],[11,-71],[16,-5],[48,48],[33,-5],[63,-71],[-3,-39],[40,-31],[27,27],[33,-5],[29,-73],[30,-18],[102,-150],[19,-79],[32,-26],[8,-29],[72,-26]],[[14425,6010],[-3,41],[6,121],[-2,118],[-18,35],[-36,25],[-104,-4],[-72,11],[-126,11],[-30,19]],[[14040,6387],[-9,37],[1,91],[-35,61],[-11,52],[-93,88]],[[13893,6716],[-120,160],[9,49],[4,111],[17,47],[47,89],[-13,109]],[[13893,6716],[-27,-14],[-104,-99],[0,-22],[43,-50],[16,-73],[-47,-47],[-31,-19],[-64,-2],[-84,60],[-121,-4],[-142,151],[-44,35],[-90,58],[-69,10]],[[11989,7080],[-18,-171],[-21,-127]],[[11950,6782],[-38,-8]],[[11912,6774],[-111,-49],[-93,-50],[-64,-48],[-55,-52],[-56,-71],[-81,-138],[-44,-38],[-54,-60],[-46,-94],[-52,-55],[-77,-54],[-20,-34],[-28,-120],[-29,-25],[-44,-11]],[[11058,5875],[-2,123],[6,88],[-5,118],[-48,53],[-12,50],[-41,13],[-25,-14],[-53,6],[-29,28],[23,70],[-14,50],[23,36],[-28,25],[-43,-43],[-32,-102],[-76,-89],[-56,-50],[-71,-19],[-8,46],[40,64],[-4,57],[-18,23],[-56,-24],[-36,37],[-35,-2],[-26,-23],[-57,-14],[-83,-66],[-37,-23],[-81,-82],[-27,-9],[-50,5],[-32,-40],[-48,-20],[-16,17],[13,88],[-7,25]],[[17350,6876],[-66,-49],[-44,-21],[-8,-54],[15,-54],[-29,-36],[-41,-13],[-58,13],[-28,-13],[-1,-52],[-31,-60],[-24,-70],[10,-23],[46,-31],[14,-152],[-2,-69],[11,-128],[-14,-55],[-57,-76],[-9,-80],[-59,-11],[-25,-32],[-31,19],[-64,-4],[-37,17],[-50,8]],[[16768,5850],[8,38],[-55,19],[-42,53],[-40,27],[-63,101],[-7,42],[-20,44],[-59,52],[-37,61],[-129,62],[-141,36],[-26,29],[-45,20],[-43,-5],[-33,15]],[[13129,6700],[-189,-98],[-43,-37],[-66,-71],[-64,-112],[-33,-76],[-99,-152],[-32,-32],[-17,-44],[-4,-50],[14,-114],[-25,6],[-54,91],[-6,136],[-65,109],[-72,69],[-61,123],[-72,88],[-50,33],[-29,49],[-37,30],[-27,5],[-61,38],[-87,91]],[[7049,6849],[-19,-28],[-6,-120],[13,-45],[5,-55],[-31,-22],[-23,40],[-42,25],[13,31],[43,14],[0,73],[-10,50],[-96,103],[-60,43],[-22,-7],[-15,-80],[-22,-65],[-1,-88],[-34,-118],[38,-49],[49,-14],[26,-58],[56,-12],[20,-35],[-17,-22],[12,-54],[-55,-62],[-9,-71],[-19,-38],[-8,-80],[18,-35],[-26,-18],[-5,-65],[14,-29],[29,-17],[21,-80],[-49,-48],[-7,-75],[-15,-54],[-35,-30],[8,-60],[-13,-26],[5,-41],[-68,-132],[-30,-8],[-41,-81],[12,-64],[-18,-65],[-35,-14],[18,-102],[49,-26],[1,-45],[62,-102],[24,-13],[-9,-38],[83,-44],[30,-2],[95,14]],[[6953,4805],[3,-30],[-17,-32],[-1,-39],[27,-61],[-17,-106],[1,-39],[38,-74],[-12,-54],[-48,-31],[41,-45],[-9,-46],[-34,-31],[-38,-77],[-13,-54],[-24,-42],[-55,-57],[-88,-74],[-53,-66],[-28,-82],[1,-103],[-10,-24],[-89,-71],[-25,-10],[-30,-53],[-21,-106],[-16,-50],[-68,-48],[-67,-74],[-79,-40],[-4,-25],[29,-40],[1,-35],[-61,-79],[-1,-46],[47,-19],[8,-21],[-23,-56],[-50,-46]],[[6168,2819],[-83,47],[-41,31],[-136,84]],[[5908,2981],[16,41],[29,113],[8,150],[31,118],[47,85],[48,127],[20,35],[46,34],[52,14],[153,2],[58,14],[52,47],[49,68],[40,82],[23,77],[-1,61],[12,70],[-3,83],[-42,78],[-19,82],[28,83],[6,77],[-6,38],[-42,100],[-23,23],[-26,99],[-41,106],[-21,38],[-5,40],[11,33],[-36,100],[1,138],[9,181],[42,100],[-8,38],[-49,-9],[-32,10],[-45,-51],[-38,32],[-7,51],[22,23],[31,-28],[20,11],[-20,70],[35,73],[-7,50],[28,3],[39,64],[-29,-1],[-2,75],[-13,82],[31,17],[8,58],[31,34],[13,37],[32,-8],[22,20],[3,83],[-14,46],[-31,-2],[-27,56],[7,48],[-8,24],[-41,33],[30,14],[2,75],[17,61],[22,17],[17,61],[4,70],[24,21],[10,98],[-18,21],[-7,46],[13,39],[-18,55]],[[18824,6577],[-49,-108],[-73,-63],[-25,-41],[-100,-88],[-96,-41],[-176,-69],[-18,18],[2,67],[-14,17],[-89,4],[-50,-16],[-73,-5],[-29,-23],[-26,12],[4,119],[-47,-2],[-28,23],[-23,-32],[-48,17],[-60,116],[-7,37],[26,66],[39,39],[-13,34],[-39,19],[-79,-10],[24,129],[13,12],[50,-23],[44,6],[-1,25],[-46,83]],[[19185,6313],[-30,-70],[-50,-28],[-28,-49],[-26,-94],[-34,-69],[-5,-171],[-8,-37],[62,-32],[15,-103],[33,-118]],[[19114,5542],[-123,22],[-87,34],[-26,17],[-79,29],[-118,20],[-56,-1],[-58,-13],[-29,16],[-32,-8],[0,-32],[23,-32],[7,-45],[-7,-50]],[[18529,5499],[-43,-10],[-93,8],[-92,-4],[-73,8],[-80,0],[-87,12],[-4,-21],[-17,-279],[-28,-72],[-41,-18],[-109,63]],[[17862,5186],[20,54],[-39,205],[-34,67]],[[17809,5512],[-24,75],[-19,181],[-1,68],[-46,1],[-25,26],[-29,70],[-59,50],[-32,-20],[-17,35],[19,56],[-1,70],[-14,52],[-34,30],[-44,5],[-128,-3],[-45,9],[-26,-32],[-75,14],[14,58],[70,28],[102,20],[17,33],[-1,102],[6,75],[19,83],[39,37],[53,11],[-24,45],[0,62],[-19,51]],[[17809,5512],[-69,-42],[-8,-28],[-33,-44],[-37,-70],[-40,-37],[-20,-45],[-34,-16],[-160,32],[-26,-6],[-65,-53],[-55,-3],[-121,62],[-33,5],[-40,-20],[-29,37],[-3,124],[-32,35],[-60,18]],[[16944,5461],[-91,39],[-136,41],[-11,10]],[[16706,5551],[25,140],[37,159]],[[14040,6387],[-18,-61],[-52,-62],[-63,-92],[6,-32],[41,-1],[20,-19],[6,-138],[-7,-18],[-73,-46],[0,-26],[28,-49],[-56,-27],[-61,-44],[-135,0],[-20,-14],[-38,-59],[-54,-20],[-16,-22]],[[13548,5657],[-82,39],[-25,2],[-101,-92],[38,-70],[-1,-75],[-13,-23],[-48,4],[7,52],[-28,28],[-38,-2],[-34,-28],[-65,8],[-50,-5],[-21,14],[19,66],[-16,30],[-50,-16],[-39,18],[-25,51],[20,118],[14,37],[40,47],[18,48],[40,35],[0,55],[28,96],[44,109],[24,88],[-11,80],[3,87],[-18,99],[-5,70],[-11,52],[-33,21]],[[5908,2981],[-70,38],[-62,43],[-110,66],[-204,139],[-70,57],[-123,89],[-25,12],[-199,136]],[[5045,3561],[37,8],[30,35],[-4,23],[-42,35],[5,41],[33,64],[31,40]],[[7181,5488],[1,-35],[40,-123],[32,-121],[35,-107]],[[7289,5102],[-84,-52],[-58,-16],[-25,42],[-43,309],[-30,12],[-56,-19],[-46,-73],[-68,-11],[-22,-12],[2,-38],[-36,-52],[10,-38],[30,-26],[45,-9],[-3,-58],[9,-41],[-55,-71],[-12,-44],[22,-16],[48,-5],[36,-79]],[[21500,5799],[-38,-17],[-166,-123],[-49,-56],[-2,-40],[15,-36],[3,-45],[25,-77],[-18,-32],[7,-44],[-12,-32],[46,-51],[-38,-21],[-34,-2],[-45,-29],[-15,-33],[-77,-12],[-30,38],[-167,90],[-76,88],[-14,47],[-1,96],[7,122],[-4,106],[-36,86],[-17,22],[-64,146],[107,64],[41,19],[11,27],[-42,83],[-22,27],[-42,100],[-23,36],[-96,85]],[[8564,5545],[-133,23],[10,-67],[-34,-11],[-79,26],[-36,-1],[-44,-51],[-49,-35],[-30,-36],[-18,0],[-80,64],[-47,57],[-158,-97],[-98,-45],[-13,16],[-49,129],[-49,-2],[-4,-23],[54,-145],[-45,-53],[-32,-9],[-47,11],[-29,-12],[-135,-115],[-55,-24],[-45,-34],[-30,-9]],[[21577,5727],[-2,-137],[-5,-63],[-26,-74],[-27,-107],[-39,-71],[1,-36],[82,-6],[11,-18],[21,-106],[25,-55],[74,-108],[-30,-68],[-105,-288]],[[21557,4590],[-73,18],[-33,-26],[-86,-118],[-38,-88],[-20,-75]],[[21307,4301],[-56,-52],[-55,18],[-62,-52],[-37,-11],[-39,-36],[-118,-6],[-66,19],[-65,-26],[-42,10],[-57,-40],[-31,-55],[-61,-72],[-9,-22],[-59,-88]],[[20550,3888],[-19,13],[-17,90],[-32,60],[12,41],[-52,42],[-16,37],[-41,25],[0,34],[-41,9],[-20,21],[-11,38],[-44,29],[-66,-16],[-35,-65],[-39,-25],[11,-67],[-6,-42],[-33,-25],[-28,23],[-49,80],[8,70],[-38,-12],[-46,3],[-22,-96],[-63,1],[-33,-129],[-38,-87]],[[19792,3940],[-73,23],[-25,-7],[-82,-1],[-58,13],[-63,46],[-8,40],[28,50],[13,130],[39,75],[-7,7],[-87,7],[-25,10],[-37,65]],[[19407,4398],[35,73],[59,54],[30,5],[29,-34],[76,15],[59,-1],[23,33],[-14,67],[25,51],[29,105],[20,26],[46,4],[39,-24],[32,24],[-25,50],[-21,11],[5,42],[34,79],[-69,79],[-62,98],[-31,-59],[-37,-25],[-194,8],[-44,12],[-30,22],[-15,37],[-4,70],[-35,51],[22,56],[0,31],[23,31],[-2,50],[36,74],[52,29],[-2,43],[-25,7],[-227,-55],[-109,-6],[-21,11]],[[13548,5657],[-34,-34],[-6,-39],[-24,-49],[-84,-117],[6,-16],[73,29],[106,27],[88,16],[14,-127],[-80,-17],[-3,-21],[22,-163],[50,-20],[5,-30],[-49,-27],[3,-67],[-35,-78],[-53,-46],[-31,-48],[-62,-58],[25,-18],[131,-20],[116,24],[133,64]],[[13859,4822],[1,-34],[-24,-78],[-40,-82],[-38,-97],[-9,-39],[-4,-153],[22,-93],[46,-94],[9,-32],[53,-106],[55,-76],[-3,-26],[-61,0],[-89,-10],[-43,25],[-38,4],[-12,-18],[26,-39],[-38,-24],[1,-51],[-16,-29],[-87,13],[-176,11],[-78,18],[-35,23],[-60,19],[-141,12]],[[13080,3866],[-23,28],[-60,108],[-76,91],[-23,39],[36,24],[20,108],[4,58],[-26,21],[-36,4],[-76,58],[19,59],[-17,147],[-28,40],[-103,21],[-109,-6],[-91,11],[-27,-25],[-25,-81],[-77,-67],[-17,-48],[-67,-50],[-43,-73],[-48,-45],[-96,-55],[-13,-18],[-103,-56],[-31,-29],[-91,-38]],[[11853,4092],[-20,55],[49,26],[27,81],[-14,94],[-31,16],[6,67],[-15,35],[31,63],[17,13],[-10,50],[-32,62],[-19,54],[-62,118],[11,48],[-39,48]],[[11752,4922],[-49,44],[-63,0],[-53,27],[-28,35],[7,64],[31,49],[70,11],[-32,77],[4,90],[77,-5],[19,35],[96,-6],[55,23],[32,42],[38,24],[-14,45],[14,32],[-13,83],[-26,47],[-31,35],[-23,47],[4,47],[-17,32],[-2,73],[-53,98],[-2,98],[30,37],[30,128],[33,97],[1,151],[21,127],[4,165]],[[11752,4922],[-31,-63],[-24,-27],[-49,-28],[-44,3],[-45,-12],[-16,12],[-8,88],[-14,72],[-43,-48],[-81,-45],[-22,-65],[-45,-7],[-27,27],[4,56],[-29,19],[-10,43],[-42,4],[-150,35],[-40,-12],[4,-29],[-73,6]],[[10967,4951],[-20,11],[-48,73],[-45,45],[-12,54],[-33,73],[-54,62],[-19,67],[52,54],[39,53],[66,21],[-9,38],[71,100],[23,48],[39,19],[13,29],[4,95],[24,82]],[[23414,5904],[-9,-43],[40,-76],[51,-38],[25,-63],[-10,-22],[-42,13],[-44,-2],[-46,-40],[-30,9],[-36,-30],[-30,-164],[17,-41],[-20,-38],[-3,-70],[26,-6],[68,52],[32,-12],[85,10],[58,-22],[39,-53],[12,-42],[31,-11],[61,-65],[9,-43],[-24,-46],[2,-63],[-29,-26],[46,-83],[23,-11],[80,-115],[59,-74],[40,-39],[-10,-44],[33,-11],[6,-28],[-49,-57],[23,-32],[-30,-31],[-107,-22],[-49,39],[-68,-6],[-71,-104],[-86,-11],[-23,-24],[-70,-27],[-57,-7],[-372,23],[-164,-90],[-167,-87]],[[22634,4131],[-70,79],[-39,13],[-64,57],[-43,23],[26,39],[-17,34],[-29,1],[-39,44],[-74,7],[-29,-41],[-26,-6],[-61,17],[-102,11],[-96,52],[-184,63]],[[21787,4524],[-88,27],[-69,13],[-73,26]],[[14408,5182],[-22,-84],[-48,-62],[-9,-67],[2,-75],[-58,-65],[-53,-30],[-92,-22],[-34,13],[5,39],[-29,16],[-39,-24],[-123,45],[-26,-10],[-23,-34]],[[19407,4398],[-66,71],[-25,13],[-42,0],[-34,20],[-16,39],[-38,13],[-93,77]],[[19093,4631],[21,63],[-143,56],[-143,65],[-119,62],[-72,41],[-42,52],[6,113],[28,236],[27,121],[-127,59]],[[10967,4951],[61,-187],[4,-100],[38,-91],[-16,-74],[-8,-93],[10,-46],[-15,-112],[-26,-38],[17,-75],[-15,-40]],[[11017,4095],[-23,22],[-168,29],[-8,5],[-184,32],[-179,37],[-14,-20],[0,-45],[-30,-40],[-8,-40],[-27,-28],[-14,-103],[-140,11],[-93,-81],[-140,-112],[-71,54],[-219,158],[-131,101],[-9,-54],[-24,-23],[-43,26],[-36,-11],[-65,-42],[-17,3]],[[9374,3974],[16,17],[8,50],[-33,29],[4,90],[-10,20],[8,68],[-37,30]],[[16706,5551],[-107,9],[-102,-62],[-92,62],[-29,-2],[-55,-34],[-46,-16],[-6,25],[-38,40],[-42,6],[-28,52],[2,35],[26,31],[91,24],[62,25],[-20,59],[-53,103],[-66,82],[-97,96],[15,66],[-19,38],[-50,35],[-43,-8],[-71,11],[-41,-5]],[[3597,4564],[-66,48],[-32,36],[-105,71],[-49,45],[-98,64],[-196,155],[-217,155],[-44,45],[-77,55],[-70,63],[-100,81],[-117,113],[-103,87],[-224,203],[-36,25],[-170,146],[-88,62],[-33,38]],[[16944,5461],[-50,-19],[-47,6],[-150,-139],[-71,-81],[-43,-89],[30,-47],[79,-65],[-4,-123],[22,-33],[64,-60],[-18,-31],[-112,-39],[-68,-30],[-29,49],[-19,-8],[11,-76],[-48,-44],[-72,-27],[-56,-32],[-145,-33],[-49,-36],[-7,-67],[29,-121]],[[16191,4316],[-86,-22],[-87,2],[-32,-12],[-61,-66],[-65,12],[-27,20],[-29,67],[-73,82],[-7,54],[23,37],[21,93],[58,138],[2,53],[-51,90],[16,61],[38,50],[-49,103],[-48,42],[-11,72],[43,81],[7,100],[49,57],[-3,25],[-33,33],[-6,-57],[-67,-76],[-73,-27],[-45,20],[-39,-27],[-9,-95],[-13,-25],[-129,16],[-48,-52],[-26,2],[-73,-51]],[[19093,4631],[-67,-116],[-25,-16],[-84,0],[-92,-29],[-2,-15],[42,-47],[30,-93],[0,-31]],[[18895,4284],[-153,85],[-29,11],[-138,76],[-130,59],[-180,99],[-23,6],[-172,145],[-79,73],[-109,-99]],[[17882,4739],[-30,21],[-17,32],[2,52],[35,48],[-22,32],[0,67],[-19,43],[-9,51],[18,68],[22,33]],[[17882,4739],[-41,-63],[-105,39],[-16,-23],[-29,-96],[27,-27],[72,-3],[39,-33],[46,-7],[59,-31],[34,-37],[3,-35],[-15,-70],[-31,-48],[-3,-38],[-34,-47],[-3,-85],[-13,-62],[8,-51],[-8,-60],[9,-42]],[[17881,3920],[-52,-7],[-49,32],[-60,28],[-103,21],[-124,17],[-9,40],[1,73],[-21,37],[-59,21],[-3,19],[60,60],[5,80],[0,123],[15,45],[-23,12],[-26,46],[-121,3],[-44,-6],[-30,15],[-73,-12],[-82,10],[7,-98],[-50,-42],[-11,-79],[-61,-47],[18,-40],[40,-31],[3,-28],[-111,-12],[-51,24],[-147,-103]],[[16720,4121],[-55,19]],[[16665,4140],[10,34],[30,14],[-28,61],[-21,13],[-79,-31],[-47,-7],[-93,32],[-91,-23],[-12,37],[-124,34],[-19,12]],[[21787,4524],[-8,-70],[3,-65],[-32,-187],[-11,-26],[-7,-65],[-15,-68],[11,-68],[-12,-45],[39,-115],[14,-86],[20,-28],[1,-92],[9,-108]],[[21799,3501],[-33,14],[-65,3],[-12,-12],[-5,-93],[-63,-114]],[[21621,3299],[-49,21],[-79,10],[-52,51],[7,67],[13,14],[42,114],[43,70],[31,28],[54,28],[-26,111],[-27,67],[31,42],[19,78],[-41,-21],[-46,-3],[-215,33]],[[21326,4009],[-29,44],[-7,106],[8,108],[9,34]],[[6583,18421],[70,-42],[-23,-25],[-20,-159]],[[6610,18195],[25,-88],[5,-125],[68,-134],[-20,-66],[-66,-11],[-94,-72],[-21,-133]],[[6507,17566],[-52,45],[-188,92]],[[6267,17703],[1,69],[-46,45],[-14,112],[-18,24],[-126,0],[-65,25],[-47,117],[-46,7],[-13,-42],[-30,0],[-6,33],[19,26],[-1,41],[42,-1],[97,44],[58,78],[61,37],[29,39],[86,7],[43,12],[153,27],[43,-38],[40,20],[37,2],[19,34]],[[7724,21688],[285,1],[1948,2],[0,-1]],[[9242,18098],[-22,112],[-19,20]],[[9201,18230],[5,53],[-21,40],[-2,55],[-27,29],[5,34],[-9,97],[-30,-11],[-44,18],[-2,53],[-43,18],[-39,-4],[-58,29],[-29,31],[-71,16],[-102,-33],[-29,7],[-14,-50],[-48,-12],[-60,14],[-49,-64],[-58,11],[-22,-42],[-50,9],[-42,20],[15,78],[-4,41],[-100,69],[-65,-16],[-35,4],[-13,-38],[-56,-45],[-71,15],[-28,28],[-12,38],[-35,50],[-103,25],[-22,37],[-42,14],[1,31],[-54,48],[-110,-15],[-38,-13],[-96,80],[-17,-10],[-101,60],[-50,-2],[-50,-32],[-22,4],[-48,-21],[-23,31],[-36,-4],[-51,43],[-39,105],[-31,28]],[[7026,19181],[-14,46],[15,23],[-29,58],[-5,48],[20,31],[8,52],[43,42],[-17,21],[37,34],[69,179],[34,36],[50,22],[0,23],[55,72],[42,80],[77,67],[35,54],[5,23],[-20,42],[-42,62],[-9,36],[11,49],[-4,38],[19,38],[-14,63],[-5,76],[15,36],[73,108],[39,96],[8,55],[-8,66],[0,72],[21,102],[57,242],[29,55],[28,77],[21,33],[47,33],[18,33],[-8,33],[-26,11],[-10,47],[-29,42],[62,51]],[[16665,4140],[-45,-49],[-93,-2],[-60,26],[-34,3],[-34,-16],[-40,-2],[-36,27],[-45,-9],[-36,13],[-33,-27],[-71,-36],[-80,-75],[-20,-29],[0,-73],[21,-35],[61,-13],[28,-28],[20,-51],[6,-55],[-25,-47],[-41,-26]],[[16108,3636],[-102,30]],[[16006,3666],[-132,105],[11,70],[-31,11],[-34,-42],[-67,-38],[-53,-15],[-20,17],[12,40],[-12,31],[-54,47],[-46,9],[-27,-16],[-43,9],[-24,54],[-44,4],[-50,-33],[-30,-38],[-68,18],[15,41],[-5,48],[20,38],[-6,113],[-14,45],[-21,25],[-65,48],[-52,7],[-46,-12],[-21,-31],[-11,-61],[-32,-44],[-29,-16],[-74,-92],[-15,-47],[-34,-41],[-89,-14],[-73,-60],[-59,-19],[-41,0],[-132,16],[-56,28],[-40,68],[-60,50]],[[14354,3989],[46,139],[21,43],[-21,62],[-7,107],[27,33],[33,66],[10,64],[24,12],[-17,42],[-84,17],[5,52],[18,34],[43,144],[52,-6],[9,-18],[-15,-103],[19,-16]],[[20550,3888],[42,-21],[49,15],[20,-18],[43,0],[48,22],[17,-17]],[[20769,3869],[84,-97],[-1,-71],[47,-46],[56,-32],[24,-4],[46,-41],[53,-69],[6,-42],[-11,-59],[23,-1],[38,40],[30,-66],[10,-254],[-81,-8],[-159,-4],[-45,-28],[3,-57],[-41,-35],[36,-20],[44,-44],[-8,-63]],[[20923,2868],[10,-53],[-58,-34],[-36,-4],[-53,19],[-138,0],[-51,-30],[-40,-44],[-24,-6]],[[20533,2716],[12,59],[-40,18],[-1,36],[-29,7],[-49,67],[-45,30],[-83,15],[-36,20],[-55,6],[-42,40],[-56,-1],[-36,11],[0,43],[-54,17],[-19,20],[-43,-5],[-57,125],[-12,90],[56,23],[0,55],[45,50],[65,23],[54,-4],[1,-50],[36,-37],[37,-11],[23,12],[-22,97],[-20,120],[-45,111],[-42,57],[-9,35],[-140,49],[-108,70],[-27,26]],[[8553,5247],[-1,-35],[-65,-58],[-16,-30],[5,-38],[-50,-30],[-14,-84],[14,-28],[-57,-45],[-18,-44],[-70,-91],[-4,-30],[18,-63],[-13,-17],[-64,-24],[-6,-44],[-29,-30],[13,-35],[-10,-25],[-47,-21],[-30,2],[0,-33],[-21,-13],[-15,-58],[24,-44],[5,-41],[25,-29],[-1,-31],[-26,-35],[10,-33],[-28,-43],[-40,-2],[-39,-38],[-29,-9],[-20,-56],[7,-41],[-19,-10],[-12,-50],[-5,-115],[-45,-20],[-62,-12],[-45,2],[-53,-54],[-50,-39],[-24,-51],[-62,-61],[-40,-4],[-69,-25],[-83,-119],[-60,-79],[-67,-105],[-80,-111],[-5,-239],[-12,-34],[-1,-51],[-31,-55],[0,-53],[9,-72],[17,-35],[-5,-40],[-75,-62],[-14,-22]],[[7068,2455],[-72,38],[-78,26],[-129,64],[-77,28],[-225,94],[-47,14],[-164,72],[-108,28]],[[21326,4009],[42,-70],[-13,-16],[-190,-19],[-79,-4],[-317,-31]],[[9374,3974],[-61,-68],[-102,-98],[-38,-110],[-30,-51],[-44,-24],[-52,-6],[-50,-35],[-36,-60],[-10,-72],[-26,-22],[-39,-7],[0,-48],[-22,-45],[-52,-64],[0,-22],[-30,-57],[-34,-42],[-35,3],[-20,-36],[-55,-19],[-6,-26],[21,-31],[-3,-38],[-45,-20],[-9,-49],[-46,-54],[-5,-92],[-63,-56],[24,-44],[-7,-23],[-56,-37],[-30,-59],[-3,-49]],[[8410,2513],[-3,2]],[[8407,2515],[-50,-10],[1,-42],[-31,-20],[2,-47],[-26,5],[-51,-69],[5,-52],[-14,-29],[13,-44],[-41,-3],[-25,-55],[-44,-46],[-4,-64],[36,-74]],[[8178,1965],[-117,40],[-31,20],[-212,85],[-41,23],[-62,21],[-50,26],[-422,190],[-175,85]],[[22158,3602],[-55,-91],[-62,-233],[-27,-52],[-3,-35],[-26,-19],[2,-44],[-58,-135],[-1,-46],[21,-44],[-14,-46],[26,-69],[56,-43],[-22,-40],[-29,24],[-58,6],[-94,-32],[-17,19],[-48,0],[-67,-15],[-39,10],[-79,51],[-24,63],[-45,17],[-39,43],[-19,-3],[-39,39]],[[21398,2927],[13,41],[26,34],[6,42],[18,28],[44,11],[68,-10],[16,17],[20,156],[12,53]],[[21799,3501],[98,-30],[43,26],[42,91],[18,21],[36,2],[97,-12],[25,3]],[[14354,3989],[-36,-15],[-23,-61],[-48,-27],[-23,-46],[-23,-7],[-44,-52],[-88,-69],[-35,-42],[10,-61],[-10,-44],[24,-40],[-9,-31],[33,-42],[1,-24],[-64,-69],[-38,-26],[-5,-29],[22,-105],[60,-81],[50,-103],[-12,-137],[-34,-3],[-193,3],[-11,-26],[35,-138],[3,-42],[-34,-13],[-31,-35],[-73,-15]],[[13442,2584],[13,56],[52,59],[22,76],[-8,26],[-39,18],[-6,57],[-45,139],[17,72],[-30,22],[-33,49],[19,26],[-22,77],[-32,33],[-104,64],[-63,18],[-109,73],[-32,28],[-65,3],[14,76],[22,32],[53,2],[11,23],[-14,94],[12,37],[-1,48],[-16,47],[22,27]],[[20533,2716],[-10,-45],[9,-67],[-22,-65],[-55,-39],[-55,4],[-17,-44],[-44,5],[-34,-110],[-48,-2],[-7,-62],[-85,-28],[-31,-36]],[[20134,2227],[-19,37],[-6,64],[-34,42],[-48,98],[-68,88],[-27,27],[-60,90],[8,66],[-16,51],[14,83],[3,65],[-16,37],[-47,9],[-54,30],[-76,19],[-107,17],[-62,29],[-40,40],[-53,11],[-98,71],[-23,-28],[-75,-116],[-59,-71],[-53,-54],[-14,-28]],[[19104,2904],[-42,-9],[-21,12],[-21,57],[-50,61]],[[18970,3025],[61,140],[58,157],[46,135],[-38,30],[-74,104],[-53,113],[-8,28],[-42,64],[-20,59],[100,46],[-1,25],[-47,51],[1,32],[42,31],[93,19],[12,31],[-94,49],[-82,87],[-29,58]],[[11853,4092],[1,-45],[-49,-30],[-1,-75],[26,-41],[-21,-49],[-1,-40],[-42,-43],[-8,-54],[-31,-109],[13,-58],[-16,-29],[6,-36],[-12,-48],[4,-47],[-12,-54],[44,-116],[-8,-57],[15,-110],[-17,-21],[-87,8],[-17,-12],[15,-55],[-32,-42],[6,-116],[-54,-123],[-39,-63]],[[11536,2627],[-63,-91],[-51,-65],[-10,-45],[17,-85],[-63,-8],[-56,-40],[-218,8],[-19,-46],[-6,-50],[-26,-117]],[[11041,2088],[-31,3]],[[11010,2091],[-140,15],[6,51],[-73,10]],[[10803,2167],[-14,1]],[[10789,2168],[70,172],[29,85],[8,4],[100,267],[16,31],[74,202],[55,138],[-70,98],[-71,88],[-8,-9],[-40,-114],[-25,-31],[-99,23],[-50,20],[-5,217],[-88,9],[31,41],[39,19],[24,44],[-8,17],[28,31],[-6,46],[26,29],[6,45],[35,-36],[30,38],[25,8],[-1,50],[66,22],[57,42],[42,53],[37,13],[43,54],[25,63],[-3,38],[-51,43],[-65,32],[-48,35]],[[18970,3025],[-157,20],[-107,20],[-41,13],[-192,45],[-36,5],[-19,-118],[-86,-91],[-79,-72],[-157,-163],[11,-18],[87,-40],[173,-85],[114,-47],[74,-36],[-77,-101],[-72,-59],[-89,-87],[-72,-64]],[[18245,2147],[-19,44],[36,66],[0,42],[-25,19],[-151,-5],[-111,15],[-43,35],[-42,58],[-46,17],[-45,57],[-93,13],[-130,-12],[-37,3],[-40,-25],[-59,-4]],[[17440,2470],[-11,46],[12,48],[-9,68],[23,37],[1,50],[-14,77]],[[17442,2796],[7,38],[-5,100],[24,16],[68,8],[43,16],[45,-3]],[[17624,2971],[56,-9],[115,4],[57,69],[-3,83],[53,40],[68,-23],[52,11],[73,55],[63,55],[47,14],[35,39],[-8,81],[-24,38],[-50,12],[-30,-14],[-31,19],[-60,1],[-29,30],[-44,10],[-69,80],[34,64],[5,88],[-51,58],[-12,38],[28,43],[-18,63]],[[13059,1975],[-89,-2],[-14,48],[-91,-13],[-4,-40],[-57,-15],[-25,40],[-9,126],[-61,15],[-26,77],[-241,-35],[-31,34],[-9,124],[-13,93],[-305,2],[-1,57],[32,32],[0,22],[-58,22],[-41,43],[-13,77],[-178,22],[-9,-7],[-10,-86],[-53,-7],[-94,9],[-64,-1],[-59,15]],[[22634,4131],[-57,-110],[-78,-68],[-185,-173],[-102,-90],[-54,-88]],[[17624,2971],[19,71],[-3,73],[-27,42],[-88,30],[-8,22],[35,39],[-64,35],[-54,-3],[-32,9],[-87,89],[-62,12],[-50,-11],[-136,-48]],[[17067,3331],[-110,35],[16,75],[3,158],[-15,52],[-11,99],[-122,226],[-29,31],[-50,-15],[-21,6],[-43,70],[35,53]],[[16006,3666],[-45,-79],[-8,-40],[-9,-125],[-103,22],[12,120],[-19,3],[-126,-16],[-42,-44],[-27,-50],[13,-41],[133,-21],[6,-29],[-9,-77],[23,-17],[3,-106],[-12,-46],[-38,-51],[26,-36],[-12,-103],[-38,-110],[-4,-66],[-24,-81],[-9,-212],[-8,-30],[29,-22],[-32,-36],[-66,-17],[-44,-47],[-17,-97],[38,-62],[32,-11],[40,57],[57,3],[37,-18],[39,1],[19,-26],[11,-52],[-18,-33],[-14,-71],[3,-63],[-7,-64],[-36,-9],[-60,-35],[-21,-3],[-50,-68],[20,-36],[16,-132],[35,-25],[68,-31],[22,-18],[-81,-190],[-24,-41]],[[15685,1285],[-284,102],[-168,50],[-217,71],[-140,34],[-323,66],[-288,52],[-143,23],[-224,26]],[[16108,3636],[43,-168],[9,-78],[30,-38],[11,-112],[-8,-31],[-42,-19],[5,-66],[53,-9],[28,-25],[-10,-49],[12,-36],[52,-42],[-48,-83],[-49,-30],[-1,-55],[-33,-67],[-7,-55],[-100,4],[-21,-112],[83,5],[28,-90],[-43,-45],[22,-32],[36,-12],[-5,-23],[-55,6],[-121,-14],[-38,-12],[-25,-56],[27,-15],[-1,-95],[-52,-18],[-1,-83],[70,-29],[12,-133],[15,-94],[78,-23],[-7,-54],[-22,-41],[-37,-28],[-30,-68],[-43,-68],[-66,-39],[-14,-25],[-82,-221]],[[15761,1258],[-76,27]],[[17442,2796],[-25,-9],[-61,15],[-25,-22],[-16,32],[-25,7],[-39,-32],[-32,-10],[-21,31],[-31,4],[-31,61],[-31,5],[-56,-19],[-9,29],[27,60],[22,29],[10,68],[62,57],[0,33],[-13,141],[-81,55]],[[10789,2168],[-3,0]],[[10786,2168],[-65,12],[-32,36],[-35,79],[-23,15],[-105,28],[-174,18],[-8,-40],[-191,30],[-8,-18],[-218,29],[-207,25],[-309,39],[-563,69],[-171,-88],[-163,1]],[[8514,2403],[-104,110]],[[20134,2227],[-72,-24],[-20,-71],[-81,-54],[-45,0],[-13,-41],[-42,5],[-50,-34],[-25,5],[-24,-26],[-21,12],[-43,-4],[-24,-45],[-46,-22],[-11,-41],[-24,-15],[-39,3],[-38,-41],[-27,-6],[-26,-31],[-14,-55],[-28,-31],[19,-35],[-19,-47],[-40,1]],[[19381,1630],[-13,229],[-14,172],[-40,129],[-99,173],[-64,46],[-91,40],[33,259],[11,226]],[[17440,2470],[-42,-15],[-95,-3],[-53,-27],[-35,-3],[-35,-36],[-22,-60],[-27,-31],[-35,-9],[-16,-36],[26,-41],[-6,-60],[39,-125],[2,-50],[44,-5],[9,-53],[26,-28],[41,-17],[16,-53],[47,-38],[35,5],[21,-34],[118,-6],[80,-40],[65,-25],[14,-14],[11,-53],[-49,-11],[-6,-38],[70,-36],[-20,-34],[4,-24],[87,-2],[14,-24],[-18,-95],[11,-17],[79,-7],[71,-124],[-29,-23],[-39,17],[-4,-35],[34,-86],[-55,7],[-72,-85],[-15,-55],[98,-18],[60,4],[3,-14],[-53,-100],[-40,11],[-225,13],[-6,-47],[12,-68],[37,-103],[-45,-44],[-3,-28],[46,-41],[3,-29],[-20,-37]],[[17598,440],[-35,48],[-21,-18],[-29,11],[-113,59],[-198,83],[-40,30],[-162,60],[-124,67],[-158,71],[-33,27],[-8,28],[-59,34],[-17,-38],[-211,94],[-55,21],[-162,76],[-160,67],[-88,32],[-164,66]],[[21398,2927],[-31,-5],[-74,60],[-62,-7],[-15,-28],[-41,21],[-68,-30],[-59,-12],[-43,0],[-43,14],[-12,-13],[-6,-54],[-21,-5]],[[19381,1630],[-18,-8],[1,-58],[15,-37],[-1,-63],[-46,-55],[-56,2],[-50,-24],[-122,-34],[5,-46],[-34,-28],[-89,-27],[-16,-18],[-19,-74],[-26,-48],[-66,-36],[-11,-63],[-41,-77],[-47,-43],[-51,-31],[-11,-57],[28,-58],[23,-78],[-2,-45],[-57,-42],[13,-33],[-43,-18],[20,-55],[-25,-48],[8,-51],[20,-42],[27,-3],[35,42],[60,-107],[30,-38],[-36,-50],[10,-36],[64,-2],[5,-24],[-27,-36],[-56,-25],[-1,-56],[-125,6],[11,30],[-37,15],[-39,-47],[-43,-1],[-25,31],[-44,7],[-161,74],[-54,30],[-214,98],[26,31],[34,5],[-47,43],[-65,-16],[-55,21],[-40,-25],[-146,60]],[[17770,362],[20,98],[-18,10],[-3,62],[44,-4],[21,23],[0,51],[26,24],[49,99],[34,9],[4,89],[-7,31],[34,35],[16,52],[17,21],[-7,43],[24,30],[-9,30],[6,49],[-12,21],[13,68],[27,32],[-30,13],[-51,78],[2,60],[35,36],[-10,51],[25,13],[-5,73],[17,42],[-2,47],[39,87],[42,30],[-39,21],[25,61],[16,97],[39,109],[21,28],[72,66]],[[13121,1700],[-233,-23],[-81,-15],[-17,-17],[-33,80],[-35,-28],[-36,-1],[-3,-25],[69,-4],[17,-30],[-142,12],[-90,-4],[-124,-11],[-246,-8],[-270,-29],[-93,-16],[-132,-5],[-182,15],[-260,13],[-124,-2],[-80,13]],[[11026,1615],[27,248],[38,-6],[-10,72],[-25,5],[16,150]],[[11072,2084],[-31,4]],[[17770,362],[-152,65],[-20,13]],[[6175,15712],[18,-136],[-16,-48],[3,-98],[-21,-27],[3,-40],[57,-47],[-23,-76],[32,-38],[10,-33],[-60,-32]],[[6178,15137],[-51,-1],[-13,-105],[-145,-162]],[[5969,14869],[-206,183],[-31,42],[-14,66],[-57,27],[-68,-6],[-91,60],[-57,-3],[-45,-12],[-74,2]],[[5326,15228],[4,32],[-17,51],[57,13],[2,76],[30,40]],[[5402,15440],[13,53],[25,1],[111,83],[-13,41],[19,50],[-7,34],[7,74],[28,92],[0,139]],[[5585,16007],[55,36],[19,-12],[55,28],[50,7],[40,-28],[21,13],[31,-51],[22,-88],[69,-36],[63,-6],[33,-16],[49,1],[63,-17],[20,-126]],[[15786,21685],[2014,-270],[301,-54],[211,-57],[264,-94]],[[18576,21210],[-13,-112],[-62,-111],[36,-158],[-214,-168],[-263,244],[-52,55],[-164,-178],[-46,-7],[-24,-23],[-154,76],[23,-69],[-77,-70],[20,-67],[38,-26],[77,-25],[13,-15],[-185,-488],[251,-76],[-115,-115],[85,-11],[140,-69],[181,-166],[264,-18],[48,-62],[-20,-36],[74,-128],[33,-194],[90,-2],[253,93],[-26,-31],[-41,-17],[-17,-41],[45,-17],[98,-7],[87,-28],[10,-21],[58,9],[90,-12],[105,-6],[-2,-45],[55,0],[0,-18],[60,-54],[14,-70],[85,-20],[24,-40],[76,-10],[0,-28],[554,81]],[[20088,18909],[-10,-52],[89,-84],[-11,-35],[7,-37],[-26,-71],[-32,8],[-17,-32],[22,-48]],[[20088,18909],[129,19],[-47,93],[6,46],[21,46],[-17,53],[0,48],[19,20],[-9,27],[21,25],[16,57],[-10,18],[-14,82],[34,26],[64,1],[21,18],[5,45],[-47,22],[-17,87],[-27,15],[-34,-9],[-46,12],[-26,57],[-2,72],[31,41],[-29,26],[-38,11],[-19,45],[48,12],[-24,45],[-36,-16],[-29,-36],[-44,27],[-41,44],[-57,-26],[-27,17],[1,32],[60,7],[13,29],[-23,20],[-67,20],[-31,-32],[5,-53],[-52,-31],[-23,20],[28,32],[8,62],[-66,48],[42,7],[53,-25],[42,36],[-12,40],[-29,19],[-47,-7],[-46,68],[43,32],[0,35],[44,47],[-42,53],[2,33],[23,40],[1,96],[-21,17],[-37,-26],[13,-39],[-7,-46],[-46,-104],[-39,54],[37,59],[-35,12],[-63,-31],[-19,68],[-43,75],[18,36],[55,-74],[41,11],[10,63],[-26,80],[-49,52],[12,30],[33,22],[37,4],[8,22],[62,24],[41,-31],[39,14],[-14,58]],[[19797,20957],[30,9],[42,-30],[5,30],[-32,31],[18,61],[-59,34],[48,52],[35,-12],[10,-55],[50,5],[46,-17],[39,-29],[7,-45],[-44,-35],[-14,-57],[16,-15],[70,17],[-33,-44],[-1,-43],[44,-9],[49,9],[41,-40],[-2,-82],[47,49],[31,3],[6,-71],[45,6],[-1,56],[13,29],[27,-10],[33,-65]],[[20363,20689],[39,-3],[10,24],[32,-4],[-5,-63],[22,-14],[37,27],[34,-23],[-10,-51],[33,-11],[39,28],[-25,55],[0,33],[36,17],[38,-18],[16,-27],[7,-52],[19,-22],[-52,-25],[-30,-33],[76,-33],[35,-25],[-22,-21],[8,-25],[42,14],[54,-66],[36,21],[22,-82],[-3,-32],[-22,-38],[15,-50],[50,-12],[-6,-23],[72,-27],[39,-3],[-1,33],[84,7],[14,-23],[107,8],[32,-21],[9,52],[36,-25],[45,11],[77,-19],[98,5],[18,75],[46,1],[9,33],[41,28],[37,-9],[52,20],[33,-42],[67,15],[0,30],[28,31],[2,39],[43,6],[18,32],[8,47],[43,9],[18,28],[-54,56],[32,45],[33,29],[69,23],[30,26],[68,22],[121,-32],[7,-28],[40,11],[10,21],[-13,39],[25,34],[9,43],[78,18],[43,24],[45,-42],[12,-41],[103,44],[50,29],[58,-31],[26,-26],[12,58],[15,17],[-2,41],[35,54],[25,3],[18,41],[-6,25],[37,16],[6,44],[-30,30],[22,42],[33,35],[109,-10],[23,-14],[17,-37],[91,28],[13,-33],[29,2],[32,37],[25,-23],[-2,-47],[33,10],[7,47],[-19,5],[-34,65],[66,-27],[-2,-37],[38,-26],[16,22],[79,71],[43,17],[-23,23],[33,41],[54,18],[38,3],[22,-24],[47,29],[1,85],[30,17],[27,-11],[64,57],[26,-1],[66,34],[38,-65],[94,-22],[-20,-59],[28,-7],[4,38],[40,11],[35,-54],[-13,-30],[2,-206],[9,-75],[-1,-568],[5,-879]],[[5326,15228],[-77,19],[-53,54],[-29,42],[-51,36],[-34,-18],[-46,-42],[-68,-90],[-39,-9]],[[4929,15220],[-70,40],[-58,43],[-4,57]],[[4797,15360],[0,37],[57,37],[38,37],[39,95],[16,16]],[[4947,15582],[6,44],[-14,29],[-12,67],[17,27],[60,20],[49,3],[62,-85],[54,-124],[45,-28],[68,-7],[59,-22],[61,-66]],[[18576,21210],[226,103],[-23,33],[-33,-3],[86,150],[3,31],[69,-22],[40,-24],[62,28],[-15,104],[5,38],[59,22],[14,-57],[37,-16],[7,-42],[54,-36],[2,-50],[40,0],[31,-22],[-36,-122],[-49,-46],[-16,-36],[8,-46],[32,-15],[32,5],[53,36],[25,-21],[-32,-36],[2,-192],[30,-44],[20,7],[51,102],[-13,71],[40,44],[44,-61],[35,-17],[94,31],[24,-12],[18,-52],[-4,-26],[-37,-26],[-18,-38],[41,-22],[50,64],[22,15],[53,-16],[50,27],[25,-7],[13,-57]],[[5045,3561],[-363,243],[-259,157],[-187,101],[-248,119]],[[9201,18230],[-17,-31],[-30,-15],[5,-62],[-122,25],[-30,56],[-94,94],[7,29],[-23,31],[-61,-35],[-37,11],[-34,38],[-40,4],[-21,27],[-78,-15],[-21,26],[-45,-35],[-34,-100],[-66,-26],[-47,-46],[-97,-50],[-27,9],[-50,-22],[-54,32],[-109,-42],[-41,30],[-31,-29],[-85,4],[-37,-15],[-22,-25],[-41,-9],[-10,-29],[-65,1],[-42,-11],[-159,72],[-72,42],[-28,106],[-82,109],[-26,13],[-43,-5],[-28,-33],[-18,-64],[-55,-2],[-77,75],[-50,-30],[-36,9],[-67,-69],[-3,-22],[-63,25],[-6,24],[-96,-35],[-45,6],[-138,-76]],[[6583,18421],[-74,45],[-36,31],[-72,39],[-70,19]],[[6331,18555],[-9,26],[-52,18],[-37,-2],[-31,89],[-45,79],[-98,191],[48,39],[33,10]],[[6140,19005],[58,13],[19,-29],[59,-39],[67,51],[66,14],[27,-8],[17,-44],[74,-55],[49,21],[87,6],[26,135],[56,72],[69,-21],[79,28],[133,32]],[[6507,21686],[1217,2]],[[6140,19005],[-52,142],[-78,36],[-62,-19],[-107,30],[-16,13],[-15,70],[-107,89],[-54,-7],[-51,20],[-27,26],[-37,-22],[-95,11],[-130,2],[-57,29]],[[5252,19425],[24,50],[32,31],[6,30],[-36,42],[48,119],[15,58],[164,47],[126,230],[111,273],[-4,87],[37,133],[140,62],[119,102],[152,97],[-73,200],[10,39],[35,24],[-11,73],[-27,39],[12,102],[-13,108],[44,91],[-4,26],[56,33],[20,-10],[62,39],[41,-17],[91,54],[54,53],[24,46]],[[8509,17491],[-55,39],[-86,25],[-71,32],[-81,-18],[-67,-47],[-101,-59],[-106,-24],[-36,12],[-28,34],[-49,19],[-61,-28],[-76,-13],[-60,-28],[-14,-18],[-89,-55],[-75,-1],[-67,-16],[-44,50],[-20,-7],[-105,53],[6,31],[-75,3],[-82,24],[-42,31],[-106,22],[-42,-7],[-39,44],[-46,-10],[-37,-20],[-28,-49],[-29,-80],[-26,-13],[-117,64],[-48,85]],[[4947,15582],[-103,85],[-32,130],[24,106]],[[4836,15903],[75,115],[61,20],[65,59],[-10,68],[-31,65],[23,30],[10,69]],[[5029,16329],[69,-18],[134,-63],[26,8],[61,-23],[36,-69],[117,-133],[17,-38],[77,-2],[19,16]],[[4504,17658],[-53,-32]],[[4451,17626],[-57,19]],[[4394,17645],[-100,-25],[-72,-141],[-147,-7]],[[4075,17472],[12,-5]],[[4087,17467],[-4,-3]],[[4083,17464],[18,-13],[-32,-65],[12,-17],[-7,-65],[-53,-73],[1,-37]],[[4022,17194],[-39,22],[-28,37],[-70,32],[-45,49],[-37,21]],[[3803,17355],[-29,27],[-7,54],[-93,56],[-47,18],[-30,62],[-56,34],[-45,52],[-81,16],[-48,41],[-15,1],[-49,63]],[[3303,17779],[47,17],[57,-8],[39,21],[22,-18],[51,2],[79,-12],[65,-58],[18,9],[32,111],[25,17],[8,30],[-27,39],[-2,66],[31,3],[64,-15],[12,20],[97,5],[67,-31],[58,44]],[[4046,18021],[55,-59],[50,-34],[124,7],[14,8],[56,-18],[24,-54],[0,-44],[86,-73],[7,-51],[42,-45]],[[5220,14188],[104,-14],[53,57],[69,-4],[57,-19],[24,-34],[70,-8],[81,63],[135,154]],[[5813,14383],[8,-51],[40,-41],[30,-56],[36,-18],[48,20],[137,5],[60,39],[90,37],[58,-18],[51,22],[35,-9],[189,27],[91,-79],[99,-29],[30,-15],[23,-71],[49,-19],[178,-123],[9,-29],[60,27],[65,-20],[53,0],[165,-53],[82,-10],[26,9],[32,-29],[46,-3],[28,22],[71,-7],[37,-46]],[[8062,14205],[-21,81],[-9,177],[-41,19],[-58,1],[-39,74],[-63,28],[-41,-2],[-113,-32],[-54,3],[-62,22],[-26,22],[-11,57],[-31,108],[-17,111]],[[7476,14874],[0,228],[15,29],[-2,45],[21,44],[35,44],[93,48],[26,-11],[79,12],[30,362],[46,213],[101,135],[-99,119],[-32,24],[12,81],[-31,51],[-7,130],[6,52],[-26,47],[0,57],[22,25],[29,-49],[144,-117],[57,-5],[7,-49],[65,-26],[26,3]],[[5969,14869],[-43,-48],[13,-280],[-53,-79],[-73,-79]],[[4663,14857],[27,111],[17,147],[54,72],[82,27],[86,6]],[[1425,15212],[85,-34],[17,-23],[28,25],[57,-2],[23,34],[70,6],[63,-14],[62,-100],[37,-208],[48,-134],[104,-175],[-39,-39],[-9,-41],[70,-100],[17,-92],[22,-28],[18,-49]],[[6178,15137],[57,-49],[56,10],[20,-15],[50,-4],[70,-18],[-19,-35],[55,-33],[38,-2],[-6,32],[38,24],[20,-36],[53,-2],[40,29],[37,-42],[19,-42],[73,-53],[73,10],[79,-1],[45,-33],[70,-17],[28,36],[25,-19],[59,9],[122,-38],[60,21],[18,22],[43,-2],[60,-20],[15,5]],[[1918,17105],[268,-166],[65,-96],[-4,-95],[-38,-129],[-12,-85],[-34,-36],[-20,-55],[30,-120],[71,-66],[72,-51],[181,0],[324,13],[348,-165],[4,-5]],[[3173,16049],[123,-194],[-12,-61],[-49,-30],[-21,-35],[19,-65],[-3,-53],[16,-114],[-10,-28],[19,-26],[48,-32],[24,-36],[4,-55],[-65,-62],[-21,-89],[-3,-41],[-34,-32],[-47,-2],[-5,-24]],[[1076,15642],[20,37],[311,497],[511,929]],[[4563,16142],[-17,-38],[-14,-77],[54,-11],[110,13],[29,11],[23,-23],[23,-60],[2,-31],[63,-23]],[[4797,15360],[-43,0],[-50,16],[-75,4],[-64,-4],[-16,17],[-7,68],[-35,22],[-56,-48],[-31,-68],[-52,-68],[2,-55],[-41,-48],[-60,17],[-38,-29]],[[4231,15184],[-20,191],[45,15],[4,41],[38,84],[-18,62],[-8,140],[-108,123],[44,7],[22,27],[-48,49]],[[4182,15923],[43,33],[14,47],[84,89],[240,50]],[[4114,14883],[-7,32],[19,17],[35,70],[35,30],[11,48],[-1,70],[25,34]],[[3641,16295],[19,-19],[56,-4],[38,-33],[41,-12],[118,-101],[22,-6],[99,-115],[54,-11],[36,-45],[58,-26]],[[3173,16049],[12,27],[37,30],[94,7],[31,17],[23,73],[31,38],[85,49],[38,33],[107,-18],[10,-10]],[[4493,16830],[7,-24],[93,-68],[42,-43],[44,-29],[-5,-39],[41,-23],[21,-47],[51,-28],[11,-45],[33,5],[54,-59],[47,-65],[98,0],[-1,-36]],[[4563,16142],[9,5],[-22,113],[-5,191],[-26,26],[-6,56],[-25,22],[8,42],[-18,38],[5,34],[-9,173]],[[4474,16842],[19,-12]],[[4819,17194],[-1,-16]],[[4818,17178],[-22,-27],[-32,-87],[-36,-47],[-54,-29],[17,-28],[-86,-60],[-38,-9],[-74,-61]],[[4474,16842],[-30,19],[-17,32],[-37,2],[-20,18],[-59,6],[-9,26],[-41,2],[-47,54],[-52,26],[-67,56],[-58,77],[-15,34]],[[4083,17464],[-8,8]],[[4087,17467],[21,-7],[6,-29],[105,-39],[99,17],[60,-2],[74,33],[49,-13],[36,16],[73,-11],[41,2],[41,-86],[31,-95],[24,7],[66,-44],[6,-22]],[[3641,16295],[-11,82],[-14,34],[8,55],[-33,35],[-27,-13],[-21,39],[-55,6],[-14,49],[-44,42],[-9,51],[18,79],[-16,17],[-11,78]],[[3412,16849],[-11,69],[4,46],[76,22],[147,-23],[42,-12],[89,-43],[118,-37],[4,60],[-54,62],[-43,31],[39,65],[56,49],[-80,100],[-47,67],[51,50]],[[1918,17105],[170,308]],[[2088,17413],[61,-29],[66,-43],[82,6],[119,61],[232,-106],[32,69],[-4,42],[23,96],[23,11],[33,44],[16,41],[46,-63],[89,-64],[139,-115],[38,-59],[5,-43],[-22,-91],[25,-32],[172,-94],[38,-57],[19,-148],[35,-14],[57,24]],[[6331,18555],[-86,-65],[-107,-19],[-81,-20],[-102,-5],[-142,-18],[-18,26],[-57,39],[-54,13],[-36,48],[-91,-41],[-117,93],[-165,11],[-56,72],[-83,-25],[-56,15],[10,40],[-38,62],[-8,46],[-28,57],[-42,35],[-123,51]],[[4851,18970],[1,84],[-25,39],[-2,52],[-86,46],[-11,36],[-98,62],[-58,-10],[-25,-31],[-25,36],[34,87],[40,41],[15,44],[31,24],[8,101],[25,31],[41,-1],[21,-17],[44,5],[11,-49],[29,-2],[36,-26],[50,9],[43,-12],[51,-42],[47,25],[25,-4],[23,-33],[81,-45],[38,13],[37,-8]],[[2611,18357],[47,-40],[25,-7],[52,27],[15,-24],[118,-51],[-1,-48],[67,-19],[68,-94],[60,-54],[35,-17],[19,-35],[22,4],[45,-37],[31,-14],[75,-124],[14,-45]],[[2088,17413],[140,250],[211,384],[172,310]],[[6267,17703],[-31,-58],[-59,-48],[-37,-177],[-163,-24],[-70,61]],[[5907,17457],[-150,166],[-37,68],[-55,67],[-136,98],[-341,89]],[[5188,17945],[-28,8],[-48,56],[-17,67],[-55,43],[-69,43],[-70,71],[-60,32],[-28,42],[-53,36],[0,129],[-25,6],[-50,54],[-98,47],[-62,-3],[-54,60]],[[4471,18636],[74,61],[65,180],[-4,23],[-35,47],[3,42],[28,30],[34,-5],[13,-27],[75,-35],[10,-28],[51,0],[27,32],[39,14]],[[3035,19119],[26,-5]],[[3061,19114],[3,-36],[-26,-45],[25,-17],[-9,-38],[38,-12],[11,-63],[36,-17],[34,17],[75,-58],[98,-31],[50,-35],[31,0],[33,-46],[-21,-52],[3,-32],[37,-17],[39,-84],[-40,-42],[5,-58],[40,-28],[53,-3],[2,-32],[31,-40],[27,-119],[83,-64],[47,-26],[108,18],[148,-108],[24,-25]],[[2611,18357],[119,210],[305,552]],[[5907,17457],[-5,-73],[-26,-92],[-115,-117]],[[5761,17175],[-78,-41],[-46,-3],[-86,38],[-74,-13],[-77,8],[-41,26],[-50,51],[-49,-27],[-45,-8],[-51,67],[-121,-33],[-74,6],[-83,-50],[-68,-18]],[[4819,17194],[5,127],[-102,152],[40,48]],[[4762,17521],[-311,105]],[[4504,17658],[88,-51],[45,-7],[73,-33],[66,-15],[85,1],[24,-9],[11,-40],[47,-21],[46,43],[8,32],[-16,53],[17,33],[46,21],[6,29],[75,58],[25,51],[20,5],[24,77],[-6,60]],[[3061,19114],[25,20],[65,-2],[46,27],[67,-9],[108,-48],[14,-26],[35,-15],[32,14],[149,-44],[260,-58],[135,-25],[61,-44],[59,-133],[68,-5],[22,-12],[40,6],[62,-17],[56,-41],[42,-49],[58,3],[6,-20]],[[6175,15712],[10,46],[58,56],[63,26],[76,64],[82,185],[-10,72],[-19,75],[32,133],[38,18],[10,59],[7,236],[-32,31],[-16,58]],[[6474,16771],[31,4],[76,-65],[45,-48],[29,-10],[66,17],[75,-16],[36,-77],[43,-58],[69,-23],[53,-29],[69,2],[68,33],[144,186],[72,20],[75,52],[39,71],[31,39],[2,59],[-26,85],[83,49],[54,-2],[32,54],[36,15],[50,-18],[52,52],[83,-7],[71,45],[-5,38],[35,3],[34,25],[47,-6],[21,30],[38,-9],[9,23],[47,17],[76,-33],[85,12]],[[20426,37905],[1905,-2]],[[22331,37903],[30,-4480],[-282,20],[-136,-2003],[446,-34],[-45,-40],[3,-54],[-7,-75],[-48,-50],[30,-67],[-1,-42],[-74,8],[-4,-44],[70,-6],[4,-83],[66,-7],[1,-42],[-77,-2],[5,-329],[26,3],[-2,-123],[12,-45],[29,-2],[-72,-133],[-160,-157],[-367,184],[-829,-7],[-352,-345]],[[20597,29948],[-87,128],[-54,71],[20,132],[-50,25],[0,7601]],[[25554,37893],[1552,-6],[0,-225],[4,-223],[-2,-206],[3,-420],[3,-128],[-3,-97],[3,-107],[3,-436],[4,-171],[-2,-363],[5,-330],[3,-1175],[4,-14],[-2,-363],[8,-276],[0,-367],[3,-372],[9,-553],[0,-421],[3,-9],[-2,-208],[3,-8],[0,-215],[-7,-433],[-6,-99],[-6,-258],[-17,-233],[-23,-451],[-7,-60],[-11,-248],[-26,-393],[-4,-33],[-26,-450],[-30,-406],[-14,-302],[-16,-210],[1,-60],[-23,-301]],[[26938,27263],[-253,0],[-59,123],[-80,0],[-24,28],[-68,17],[-20,29],[13,28],[-6,40],[-23,21],[-24,48],[-34,41],[28,55],[12,45],[-28,75],[-7,44],[-29,16],[0,26],[-459,-5],[-4,260],[-119,1],[-607,-10],[43,15],[18,59],[-8,83],[-30,56],[15,39],[38,21],[14,38],[-35,2],[7,47],[22,18],[-6,52],[-377,-7],[-1,77],[26,1],[-1,74],[9,75],[113,2],[7,77],[1,188],[-314,-9]],[[24688,29053],[-234,118]],[[24454,29171],[45,40],[3,93],[-39,12],[-7,29],[32,26],[41,14],[83,43],[34,57],[29,17],[39,49],[18,66],[48,57],[47,7],[45,21],[66,75],[78,59],[50,2],[41,51],[65,-1],[43,44],[65,8],[106,128],[32,8],[33,35],[56,33],[19,48],[64,49],[55,81],[-15,30],[-76,-5],[0,7546]],[[3035,19119],[143,243],[96,182],[1201,2141],[2032,1]],[[6474,16771],[-189,203],[-286,140],[-188,32],[-50,29]],[[20473,26053],[74,0],[-1,-86],[-25,-12],[-107,-536],[-35,-178],[42,-33],[-9,-268],[-15,-308],[39,16],[0,34],[30,31],[-13,31],[101,35],[-24,-452],[-16,17],[-48,-122],[30,-22]],[[20496,24200],[-126,-4],[-115,2],[-1,-50],[-33,29],[-2,-250],[66,-1],[1,25],[49,-1],[-4,-304],[9,-6],[25,-175],[11,-451],[41,1],[2,-85],[13,-167],[-197,20],[1,36],[-38,1],[10,-146],[41,6],[24,22],[81,-9],[0,-25],[120,21],[3,-99],[100,4]],[[20577,22594],[-2,-74],[20,-463],[-41,52],[-29,-32],[13,-21],[-9,-35],[19,-40],[-83,-32],[-16,-35],[34,-4],[7,-43],[-32,-19],[-19,-113],[-35,-274],[-10,-117],[-23,-203],[-11,-162],[3,-290]],[[15786,21685],[21,23],[-43,67],[65,67],[20,52],[23,14],[61,-4],[22,52],[-20,36],[-53,5],[-101,-79],[-22,-34],[-57,-15],[-24,14],[9,48],[-16,41],[-6,74],[23,88],[35,36],[73,-23],[8,-23],[36,-20],[56,-3],[17,39],[-12,65],[21,70],[-11,34],[-59,24],[-82,9],[-46,30],[10,54],[40,31],[61,0],[61,38],[51,23],[-3,88],[-33,43],[-91,49],[-88,18],[-29,23],[-8,33],[1,58],[-25,101],[15,103],[13,40],[43,42],[61,40],[40,10],[69,-11],[6,37],[-81,55],[-11,55],[-38,-2],[-38,-52],[-32,4],[-25,24],[-5,41],[10,34],[41,70],[44,26],[33,-4],[63,-52],[42,-17],[41,25],[13,29],[-15,42],[-42,66],[-26,24],[-59,26],[-22,71],[24,34],[49,27],[2,20],[-44,28],[-14,26],[36,54],[54,-5],[120,6],[30,17],[28,70],[-6,37],[-28,64],[14,25],[77,47],[17,46],[50,11],[54,-41],[22,-5],[32,29],[9,27],[-10,36],[-24,18],[-73,9],[-56,27],[-17,94],[-28,9],[-31,-48],[21,-72],[-42,-4],[-12,73],[4,35],[58,83],[77,57],[29,3],[47,-24],[37,-49],[10,-41],[42,-30],[45,18],[23,51],[-4,35],[-38,45],[-63,8],[-34,14],[-103,82],[-40,68],[-3,26],[32,33],[81,27],[22,58],[-2,25],[-59,36],[-37,0],[-25,-70],[-53,-37],[-40,27],[-35,113],[-33,48],[-29,5],[-77,-12],[-97,8],[-123,-23],[-26,-13],[-98,37],[-33,4],[-92,-15],[-21,31],[8,39],[53,66],[19,62],[-13,36],[19,76],[-12,26],[-42,17],[-22,-10],[-57,-66],[-31,6],[-22,49],[-2,39],[-32,36],[-71,25],[-79,-13],[-38,-25],[-9,-69],[-48,4],[-77,49],[-61,26],[-11,55],[42,73]],[[14921,25480],[102,31],[49,-15],[41,-30],[24,31],[-16,60],[3,94],[12,59],[66,79],[71,13],[19,44],[25,-14],[-14,-30],[7,-34],[63,-56],[41,24],[6,48],[57,103]],[[15477,25887],[19,11]],[[15496,25898],[74,-21],[24,-18],[39,-232],[-10,-64],[21,-32],[92,-34],[23,6],[15,65],[-38,42],[-23,83],[16,129],[44,161],[26,50],[-7,43],[-31,9],[-39,-23],[-13,-30],[-58,0],[-46,19],[-16,42]],[[15589,26093],[25,40]],[[15614,26133],[113,65],[35,28],[62,0],[39,-29],[49,2],[50,24],[21,31],[6,43]],[[15989,26297],[12,56]],[[16001,26353],[85,27],[72,5],[80,-18],[57,16],[61,-2],[57,-31],[23,42],[-88,163],[-1,39],[41,23],[108,-27],[94,18],[33,-7],[54,-46],[13,-61],[-25,-32],[-93,-11],[-26,-71],[20,-38],[46,-2],[48,37],[35,-3],[77,-64],[177,-160],[34,19],[5,36]],[[16988,26205],[-17,22]],[[16971,26227],[7,28],[33,49],[32,17],[93,-9]],[[17136,26312],[72,-35]],[[17208,26277],[96,-15],[67,-39],[25,-6],[26,31],[-5,42],[37,56],[58,-33],[52,21],[7,58],[19,13],[4,90],[-29,31],[28,44],[-18,107],[12,67],[-7,38],[106,67],[55,2],[58,36],[92,1],[45,12],[109,13],[42,17]],[[18087,26930],[4,-2]],[[18091,26928],[42,-11],[113,22],[147,21],[23,26],[93,-17],[69,35],[22,-20],[32,2],[85,-11],[27,17],[46,-12],[29,13],[45,-16],[108,47],[173,51],[7,31],[48,31],[74,21],[47,1],[44,-26],[16,-34],[33,-14],[112,9]],[[19526,27094],[24,-10],[82,25],[60,30],[34,51],[38,16],[61,-31],[46,-11],[113,7],[73,-12],[59,55],[96,-2],[44,22],[41,-1],[48,19],[29,37],[38,-10],[-8,-151],[-214,9],[-17,-337],[123,-5],[-3,-48],[125,-9],[-9,-126],[92,-7],[-18,-34],[11,-39],[-31,-57],[24,-7],[-9,-102],[-133,2],[-1,-68],[-192,-17],[10,-118],[1,-103],[8,-59],[42,11],[11,30],[59,7],[64,25],[126,-23]],[[26938,27263],[-20,-307],[-6,-32],[-10,-185],[-9,-83],[-19,-396],[-16,-188],[1,-40],[-15,-186],[-12,-299],[-11,-130],[-1,-92],[-11,-111]],[[26809,25214],[-284,-221],[-195,-79],[-61,-79],[-831,76],[-473,158],[-297,60],[12,30],[-160,58],[6,17],[-117,5],[-81,49],[-137,41],[-19,-17],[-83,11],[-75,3],[-3,-40],[-100,7],[-5,-78],[-53,5],[-2,-31],[-41,20],[-74,54],[-5,-77],[-55,-17],[-41,17],[-20,24],[-42,-4],[-3,-42],[-97,24],[-21,-12],[-50,11]],[[23402,25187],[0,328],[26,14],[8,98],[32,4],[68,-17],[48,9],[35,-17],[49,9],[-22,39],[-1,43],[42,-5],[28,54],[-55,97],[-61,49],[0,87],[27,16],[49,-7],[12,79],[-51,-2],[40,246],[-83,8],[-8,36],[-48,-6],[15,49],[-29,92],[-33,23],[65,49],[33,46],[134,106],[-20,15],[86,65],[-14,110],[-29,70],[-27,43],[62,46],[15,25],[41,-18],[20,23],[1,36],[53,50],[-140,65],[-30,32]],[[23740,27276],[108,233],[-17,3],[15,66],[86,-49],[74,84],[36,-59],[53,17],[1,49],[-37,38],[56,64],[-34,35],[73,82],[35,27],[-15,52],[9,83],[33,2],[12,131],[108,-9],[32,91],[-18,20],[32,42],[64,-2],[16,14],[-16,53],[7,171],[-21,27],[-7,45],[19,29],[-10,100],[4,46],[45,20],[14,36],[29,25],[142,93],[42,46],[2,22],[-24,50]],[[23402,25187],[-35,15],[-11,53],[7,26],[-73,54],[-35,-1],[-41,-18],[-78,-70],[-22,-12],[-45,18],[-12,69],[-44,17],[-5,-34],[-40,-52],[-95,6],[1,58],[-22,39],[9,-466],[-48,-9],[-23,26],[-10,36],[-77,54],[-12,25],[-55,28],[-34,33],[-74,-23],[-44,6],[-29,-13],[-33,12],[-12,-27],[-35,18],[-43,-32],[-62,-9],[-12,-13],[-114,-6],[-36,7],[-19,29],[-63,36],[-171,-27],[-44,-51],[-22,5],[-59,-30],[-62,6],[-31,-78],[-39,-6],[-105,-77],[-24,13],[-103,-30],[3,-36],[-28,-31],[-39,-97],[18,-40],[-21,-23],[-2,-52],[-36,-72],[-22,-75],[-32,-9],[-16,-32],[-40,-32],[-27,-43],[-33,1],[-10,-65],[-41,1],[-26,-42],[-63,-52],[-41,-47],[-45,-1],[-36,29],[-57,3],[-21,-13],[-34,7],[-27,-15],[-194,144]],[[20473,26053],[-2,68],[77,-4],[3,55],[-36,-4],[-7,88],[46,49],[377,-6],[73,2],[156,-6],[3,79],[90,-3],[5,83],[-84,5],[7,171],[11,138],[26,-2],[7,177],[40,0],[35,127]],[[21300,27070],[16,-25],[65,-26],[24,11],[41,-13],[43,15],[52,57],[53,8],[29,-27],[-5,-28],[31,-38],[56,-9],[30,-30],[64,19],[33,40],[34,-12],[41,10],[79,45],[5,25],[49,47],[134,-91],[-10,-8],[14,-128],[134,-92],[15,13],[44,-25],[49,-7],[29,45],[29,-17],[48,38],[52,-9],[44,78],[35,-20],[19,44],[76,79],[-13,11],[48,51],[21,40],[158,280],[21,-12],[30,53],[-24,23],[29,66],[68,-34],[11,20],[42,-23],[-30,-69],[84,-20],[42,-29],[16,-34],[24,2],[31,61],[54,-44],[73,-25],[55,81],[109,-69],[4,-41],[23,-31],[112,-20]],[[21300,27070],[-86,-4],[-10,608],[95,2],[-249,335],[-43,46],[-83,126],[-2,220],[-5,180],[-97,-44],[-131,-19],[12,141],[29,218],[-8,74],[-19,49]],[[20703,29002],[-3,116],[276,-66],[-58,-54],[188,-17],[241,7],[-4,-8],[194,4],[13,-11],[253,17],[49,9],[159,10],[140,-4],[39,8],[10,52],[-45,5],[13,112],[56,-14],[28,-22],[111,45],[-7,27],[84,3],[37,-17],[3,38],[52,3],[-18,48],[84,-13],[0,-10],[106,0],[0,-11],[216,7],[0,-17],[137,2],[1,52],[35,-4],[4,-105],[44,6],[371,10],[1,-8],[156,5],[2,35],[80,-29],[-1,-21],[232,-18],[8,-48],[62,-5],[-4,-51],[32,1],[0,-51],[38,-4],[39,96],[143,-68],[43,54],[47,23],[64,50]],[[22331,37903],[3223,-10]],[[20703,29002],[-213,43],[6,33],[-107,25]],[[20389,29103],[21,13],[21,59],[-3,47],[8,86],[12,52],[37,16],[1,47],[125,209],[-4,21],[-38,6],[-153,119]],[[20416,29778],[0,46],[181,124]],[[26809,25214],[-15,-206],[-6,-150],[-20,-278],[0,-95],[-10,-94],[-4,-120],[-12,-116],[-7,-157],[-33,-512],[-1,-78],[-10,-144]],[[26691,23264],[-268,13],[-210,49],[-202,-11],[-351,97],[-63,19],[-191,-22],[-37,-24],[-29,41],[-52,0],[-1,-24],[-63,6],[-116,32],[4,-54],[-81,6],[-6,71],[-47,-2],[5,-62],[-93,16],[-81,7],[-609,-4],[-6,-35],[-92,26],[-69,-43],[-43,40],[-11,-48],[-38,18],[-66,11],[-28,16],[-4,-57],[-30,-1],[-4,64],[-48,3],[-121,-41],[-57,-10],[-28,-51],[-40,132],[-107,-8],[-14,54],[-122,55],[-66,49],[-74,43],[-40,6],[-54,-21],[-81,-51],[112,-566],[-467,-229],[-581,-122],[-75,-63],[-141,-44],[-2,42],[14,51],[-339,-9],[-247,-9],[78,326],[-84,-48],[-104,-73],[-91,36],[-43,-4],[5,-241],[-174,1],[-241,-23]],[[18087,26930],[5,15],[145,217],[7,37],[-12,112],[28,51],[30,33],[-489,-2],[-22,249],[-156,2],[5,179],[39,0],[7,152],[32,0],[2,142],[-144,10],[8,12],[-335,9],[-49,36],[-36,13],[-144,3],[-25,59],[-44,5],[8,54],[-84,37],[0,23],[-63,21],[-2,-26],[-55,-4],[-28,-40],[-352,54],[7,50],[-349,-2],[-2,-71],[-8,-499],[-784,6],[-732,67],[24,15],[10,124],[15,256],[-171,2],[0,-55],[-81,0],[7,-92],[-12,1],[-10,-395],[-202,301],[12,36],[-38,34],[-33,-41],[-19,-49],[-30,7],[-64,47],[8,90],[-183,98],[-447,127],[12,51],[105,181],[-53,29],[-86,103],[-364,8],[27,403],[-657,116],[-273,317],[-165,122],[-26,-19],[-30,12],[-33,-28],[-25,12],[-46,-72],[3,-16],[-32,-48],[-89,-33],[-7,-22],[-44,-15],[-7,-17],[-642,65],[-774,591],[-899,767],[-373,894],[-135,129],[-807,668]],[[7861,32638],[3154,3],[-1,250]],[[11014,32891],[52,-6],[11,-20],[11,-69],[44,-55],[29,-7],[8,46],[34,-11],[35,-31],[46,4],[30,-30],[50,2],[19,-25],[60,-32],[26,2],[38,-40],[67,-8],[68,-23],[27,14],[31,43],[74,-4],[27,27],[-9,44],[41,3],[3,46],[39,-28],[38,7],[34,26],[38,-2],[21,52],[22,-45],[41,19],[22,-26],[3,-40],[48,-38],[-25,-25],[45,-27],[90,0],[24,23]],[[12276,32657],[30,13]],[[12306,32670],[58,-14],[84,-67],[10,-26],[45,-3],[36,-84],[16,-10],[61,68],[44,20],[7,-50],[26,-34],[77,-11],[23,-29],[37,-24],[35,16],[31,46],[25,-35],[45,14]],[[12966,32447],[11,19]],[[12977,32466],[46,9],[4,59],[43,-8],[6,85],[-17,18],[4,54],[69,51],[62,25],[59,13],[60,-17],[34,23],[25,-6]],[[13372,32772],[17,15]],[[13389,32787],[35,9],[38,42],[4,31]],[[13466,32869],[28,67]],[[13494,32936],[22,22],[87,54],[43,54],[70,-11],[52,25],[51,-11],[27,48],[128,59],[80,-2],[35,-33]],[[14089,33141],[20,16]],[[14109,33157],[19,12],[99,-3],[32,-11],[100,-11],[31,-13],[37,-58],[64,-38],[53,-14],[20,-23],[80,-27],[26,9],[44,-11],[102,-7],[67,-17],[33,-38],[95,-36],[49,-7],[41,-27],[29,-64],[38,1],[8,-43],[33,-3],[-3,-44],[44,-15],[69,-48],[4,-24],[35,-35],[22,7],[50,-10],[45,-79],[53,-36],[119,-136],[14,-50],[-2,-40],[12,-42],[-3,-64],[17,-32],[-22,-43],[-35,-12],[-68,15],[-42,-8],[-25,-23],[-7,-32],[34,-53],[48,10],[122,-6],[-8,-35],[37,-18],[3,50],[25,39],[1,64],[13,19],[40,-5],[-3,42],[42,-9],[4,33],[75,-1],[85,-25],[107,29],[24,14],[122,29],[89,86],[21,33]],[[16367,32273],[50,3]],[[16417,32276],[29,5],[89,47],[18,25],[74,33],[113,19],[-2,-34],[86,19],[-25,-425],[79,-57],[74,-129],[87,-57],[69,-86],[39,-21],[-2,-40],[35,-8],[0,-68],[169,0],[-1,-83],[-115,3],[0,-83],[113,-3],[-2,-82],[94,-13],[-7,-98],[87,-32],[2,-39],[47,18],[25,-20],[-12,-43],[64,-36],[38,-33],[34,28],[91,-111],[62,8],[34,17],[28,-14],[19,-36],[-5,-38],[-26,-33],[2,-56],[-22,-46],[-5,-298],[80,-6],[194,-6],[-7,-93],[122,2],[3,-76],[125,1],[13,-46],[148,-6],[91,21],[29,-203],[-44,-6],[-1,-44]],[[18647,29914],[-7,-85],[-19,16],[-50,-2],[4,-93],[49,2],[8,-177],[-31,-83],[59,-12],[76,7],[1,-47],[143,-5],[3,-165],[145,-4],[194,1],[-1,-180],[206,-11],[-1,-161],[45,21],[52,-76],[-62,-48],[49,-69]],[[19510,28743],[-81,-16],[18,-17],[24,-122],[68,-32],[47,-53],[5,-333],[42,0],[3,-329],[-100,-1],[-20,-348],[10,-398]],[[18091,26928],[-4,2]],[[20389,29103],[-25,-41],[7,-76],[-8,-23],[16,-34],[-140,20],[-150,27],[-104,3],[-155,34],[-78,12],[-15,-52],[-42,-46],[-31,-18],[-10,-32],[-57,-24],[-62,-67],[-25,-43]],[[18647,29914],[142,4],[216,-24],[3,39],[392,3],[42,-65],[152,103],[37,-51],[-40,-20],[-18,-32],[41,-34],[47,38],[25,-9],[75,18],[75,-45],[10,-49],[30,-8],[147,-2],[115,-15],[63,23],[215,-10]],[[26691,23264],[-47,-664],[-4,-128],[-22,-315],[-1,-50],[-35,-512],[-28,-576],[-1,-91],[-14,-168],[-6,-159],[-23,-349],[1,-37],[-11,-177],[14,-38]],[[8407,2515],[107,-112]],[[10786,2168],[17,-1]],[[11010,2091],[62,-7]],[[11026,1615],[-157,-3],[-339,1],[-222,9],[-142,10],[-233,26],[-339,27],[-213,27],[-272,42],[-265,52],[-299,65],[-133,31],[-201,52],[-33,11]],[[16417,32276],[-50,-3]],[[14109,33157],[-20,-16]],[[13494,32936],[-28,-67]],[[13389,32787],[-17,-15]],[[12977,32466],[-11,-19]],[[12306,32670],[-30,-13]],[[11014,32891],[-3,4993],[9415,21]],[[17208,26277],[-72,35]],[[16971,26227],[17,-22]],[[16001,26353],[-12,-56]],[[15614,26133],[-25,-40]],[[15496,25898],[-19,-11]],[[14921,25480],[-45,11],[-162,-51],[-48,-25],[-54,-8],[-67,-33],[-37,7],[-25,23],[-12,69],[15,68],[-17,26],[-87,-25],[-57,8],[-31,-15],[-28,-72],[-58,-21],[-41,5],[-46,29],[-10,31],[31,56],[76,-20],[36,10],[86,53],[28,80],[-22,89],[-62,81],[-28,8],[-38,-14],[-43,-37],[-70,-28],[-46,3],[-41,46],[28,132],[-6,34],[-47,79],[16,40],[-9,65],[8,41],[66,75],[113,61],[4,22],[-46,65],[-28,55],[-33,38],[-32,-13],[16,-50],[-4,-35],[-44,-52],[-94,-17],[-51,11],[-42,30],[-11,40],[17,39],[86,11],[25,31],[-16,149],[-47,91],[-16,89],[36,43],[12,37],[-100,132],[-60,32],[-22,36],[-30,111],[-1,57],[-23,97],[-137,101],[-79,31],[-22,17],[-5,42],[22,68],[-12,41],[-30,48],[-79,28],[-32,27],[-121,74],[-51,23],[-112,86],[-1,56],[-23,34],[-53,21],[-84,13],[-91,38],[-101,50],[-40,8],[-17,55],[32,123],[-15,25],[-40,13],[-69,-6],[-67,-21],[-27,4],[-70,-13],[-126,-2],[-42,5],[-37,21],[-28,110],[-129,109],[-52,22],[-56,5],[-70,-7],[-219,-43],[-43,35],[-11,84],[-61,80],[-6,42],[13,70],[-5,43],[-29,30],[-39,16],[-111,22],[-146,-49],[-36,20],[-10,42],[31,47],[100,51],[47,69],[-15,99],[-53,46],[-81,24],[-56,-6],[-59,-36],[-14,-69],[31,-64],[27,-126],[-26,-49],[-34,-23],[-27,8],[-20,83],[-28,49],[-53,47],[-103,44],[-56,0],[-142,56],[-56,12],[-78,28],[-84,10],[-49,28],[-43,37],[-34,61],[20,38],[71,45],[-22,51],[-23,17],[-34,60],[-53,65],[-110,64],[-50,70],[-19,68],[-59,62],[-64,30],[-42,7],[-34,26],[-1,100],[16,84],[-26,55],[-51,22],[-112,6],[-67,-23],[-54,10],[-160,90],[-35,26],[-34,62],[-75,105],[-100,79],[-61,80],[-40,9],[-12,25],[-1,72],[-14,40],[-14,99],[-18,54],[-44,90],[-36,44],[-46,33],[-70,-5],[-42,7],[-83,-1],[-86,51],[-18,20],[-23,84],[-22,199],[26,80],[30,31],[28,65],[-3,84],[-42,39],[-26,9],[-33,46],[-37,20],[-53,-14],[-70,12],[-97,7],[-70,-1],[-79,28],[-66,-20],[-18,-22],[-36,-92],[-8,-57],[-37,-41],[-72,0],[-26,47],[29,126],[-65,124],[-121,72],[-40,40],[-63,30],[-81,6],[-98,-13],[-98,7],[-88,45],[-70,70],[-33,108],[-27,51],[-6,153],[818,1]],[[4394,17645],[368,-124]]],"transform":{"scale":[0.00011375168061357284,0.00010756715524206863],"translate":[-92.24019453289772,13.740252990478657]},"objects":{"municipios":{"type":"GeometryCollection","geometries":[{"arcs":[[0,1,2,3,4,5,6]],"type":"Polygon","properties":{"id":"limites_municipales.1","objectid":1,"municipio":"Ixcán","cod_dep":14,"departamen":"Quiché","codigo_mun":1420,"shape_leng":296343.225889,"shape_area":1583786910.72,"code":"Quiché_Ixc","codigo":"Quiché_Ixcán"}},{"arcs":[[7,8,9,10,11,12,13,14,15,-3]],"type":"Polygon","properties":{"id":"limites_municipales.2","objectid":2,"municipio":"Cobán","cod_dep":16,"departamen":"Alta Verapaz","codigo_mun":1601,"shape_leng":299737.374484,"shape_area":2265948195.66,"code":"Alta Verap","codigo":"Alta Verapaz_Cobán"}},{"arcs":[[16,17,18]],"type":"Polygon","properties":{"id":"limites_municipales.3","objectid":3,"municipio":"Puerto Barrios","cod_dep":18,"departamen":"Izabal","codigo_mun":1801,"shape_leng":253471.249977,"shape_area":1196748348.76,"code":"Izabal_Pue","codigo":"Izabal_Puerto Barrios"}},{"arcs":[[[-18,19,20]],[[21,22,23,24]]],"type":"MultiPolygon","properties":{"id":"limites_municipales.4","objectid":4,"municipio":"Livingston","cod_dep":18,"departamen":"Izabal","codigo_mun":1802,"shape_leng":393654.899173,"shape_area":2353384906.48,"code":"Izabal_Liv","codigo":"Izabal_Livingston"}},{"arcs":[[25,26,27,-5]],"type":"Polygon","properties":{"id":"limites_municipales.7","objectid":7,"municipio":"Chajul","cod_dep":14,"departamen":"Quiché","codigo_mun":1405,"shape_leng":135348.412091,"shape_area":525454286.212,"code":"Quiché_Cha","codigo":"Quiché_Chajul"}},{"arcs":[[28,29,30,31,32,33,34]],"type":"Polygon","properties":{"id":"limites_municipales.11","objectid":11,"municipio":"Cahabón","cod_dep":16,"departamen":"Alta Verapaz","codigo_mun":1612,"shape_leng":142506.622078,"shape_area":760262600.434,"code":"Alta Verap","codigo":"Alta Verapaz_Cahabón"}},{"arcs":[[-23,35,36,37,38,39,-30,40]],"type":"Polygon","properties":{"id":"limites_municipales.12","objectid":12,"municipio":"El Estor","cod_dep":18,"departamen":"Izabal","codigo_mun":1803,"shape_leng":316238.589383,"shape_area":1573784951.49,"code":"Izabal_El ","codigo":"Izabal_El Estor"}},{"arcs":[[-33,41,42]],"type":"Polygon","properties":{"id":"limites_municipales.13","objectid":13,"municipio":"Lanquín","cod_dep":16,"departamen":"Alta Verapaz","codigo_mun":1611,"shape_leng":69626.4680894,"shape_area":236093295.402,"code":"Alta Verap","codigo":"Alta Verapaz_Lanquín"}},{"arcs":[[-24,-41,-29,43,44]],"type":"Polygon","properties":{"id":"limites_municipales.5","objectid":5,"municipio":"Chahal","cod_dep":16,"departamen":"Alta Verapaz","codigo_mun":1614,"shape_leng":116754.979653,"shape_area":460453018.111,"code":"Alta Verap","codigo":"Alta Verapaz_Chahal"}},{"arcs":[[-6,-28,45,46,47,48,49,50]],"type":"Polygon","properties":{"id":"limites_municipales.6","objectid":6,"municipio":"Nebaj","cod_dep":14,"departamen":"Quiché","codigo_mun":1413,"shape_leng":158851.490814,"shape_area":852698683.98,"code":"Quiché_Neb","codigo":"Quiché_Nebaj"}},{"arcs":[[51,-34,-43,52,53,-9,54]],"type":"Polygon","properties":{"id":"limites_municipales.8","objectid":8,"municipio":"San Pedro Carchá","cod_dep":16,"departamen":"Alta Verapaz","codigo_mun":1609,"shape_leng":194069.441539,"shape_area":1313969912.87,"code":"Alta Verap","codigo":"Alta Verapaz_San Pedro Carchá"}},{"arcs":[[55,56,57,58,-53,-42,-32]],"type":"Polygon","properties":{"id":"limites_municipales.17","objectid":17,"municipio":"Senahú","cod_dep":16,"departamen":"Alta Verapaz","codigo_mun":1608,"shape_leng":140360.48802,"shape_area":705255126.102,"code":"Alta Verap","codigo":"Alta Verapaz_Senahú"}},{"arcs":[[59,60,61,62,63]],"type":"Polygon","properties":{"id":"limites_municipales.99","objectid":99,"municipio":"San Andrés Xecul","cod_dep":8,"departamen":"Totonicapán","codigo_mun":804,"shape_leng":19496.6399131,"shape_area":16491738.602,"code":"Totonicapá","codigo":"Totonicapán_San Andrés Xecul"}},{"arcs":[[-16,64,65,66,67,68,69,-26,-4]],"type":"Polygon","properties":{"id":"limites_municipales.9","objectid":9,"municipio":"Uspantán","cod_dep":14,"departamen":"Quiché","codigo_mun":1415,"shape_leng":234801.55949,"shape_area":836520537.494,"code":"Quiché_Usp","codigo":"Quiché_Uspantán"}},{"arcs":[[70,71,72,73,74,75]],"type":"Polygon","properties":{"id":"limites_municipales.127","objectid":127,"municipio":"Cantel","cod_dep":9,"departamen":"Quetzaltenango","codigo_mun":914,"shape_leng":31121.1423446,"shape_area":49733927.6082,"code":"Quetzalten","codigo":"Quetzaltenango_Cantel"}},{"arcs":[[-15,76,77,78,79,-65]],"type":"Polygon","properties":{"id":"limites_municipales.10","objectid":10,"municipio":"Chicamán","cod_dep":14,"departamen":"Quiché","codigo_mun":1419,"shape_leng":187875.624833,"shape_area":566010969.689,"code":"Quiché_Chi","codigo":"Quiché_Chicamán"}},{"arcs":[[80,81,82,-20,-17]],"type":"Polygon","properties":{"id":"limites_municipales.14","objectid":14,"municipio":"Morales","cod_dep":18,"departamen":"Izabal","codigo_mun":1804,"shape_leng":184393.199936,"shape_area":1324840636.74,"code":"Izabal_Mor","codigo":"Izabal_Morales"}},{"arcs":[[-40,83,84,85,-56,-31]],"type":"Polygon","properties":{"id":"limites_municipales.18","objectid":18,"municipio":"Panzós","cod_dep":16,"departamen":"Alta Verapaz","codigo_mun":1607,"shape_leng":148564.030837,"shape_area":728900915.191,"code":"Alta Verap","codigo":"Alta Verapaz_Panzós"}},{"arcs":[[86,87,88,89]],"type":"Polygon","properties":{"id":"limites_municipales.232","objectid":232,"municipio":"San Bernardino","cod_dep":10,"departamen":"Suchitepéquez","codigo_mun":1004,"shape_leng":17038.5445491,"shape_area":14314205.1491,"code":"Suchitepéq","codigo":"Suchitepéquez_San Bernardino"}},{"arcs":[[90,91,-77,-14]],"type":"Polygon","properties":{"id":"limites_municipales.15","objectid":15,"municipio":"San Cristóbal Verapaz","cod_dep":16,"departamen":"Alta Verapaz","codigo_mun":1603,"shape_leng":99271.3828242,"shape_area":384177901.941,"code":"Alta Verap","codigo":"Alta Verapaz_San Cristóbal Verapaz"}},{"arcs":[[-70,92,93,-46,-27]],"type":"Polygon","properties":{"id":"limites_municipales.19","objectid":19,"municipio":"San Juan Cotzal","cod_dep":14,"departamen":"Quiché","codigo_mun":1411,"shape_leng":80289.2290194,"shape_area":162916982.701,"code":"Quiché_San","codigo":"Quiché_San Juan Cotzal"}},{"arcs":[[-59,94,95,-10,-54]],"type":"Polygon","properties":{"id":"limites_municipales.20","objectid":20,"municipio":"San Juan Chamelco","cod_dep":16,"departamen":"Alta Verapaz","codigo_mun":1610,"shape_leng":66392.5443283,"shape_area":186862433.27,"code":"Alta Verap","codigo":"Alta Verapaz_San Juan Chamelco"}},{"arcs":[[96,97,-37,98,-82]],"type":"Polygon","properties":{"id":"limites_municipales.16","objectid":16,"municipio":"Los Amates","cod_dep":18,"departamen":"Izabal","codigo_mun":1805,"shape_leng":184438.850661,"shape_area":1042262730.38,"code":"Izabal_Los","codigo":"Izabal_Los Amates"}},{"arcs":[[-69,99,100,101,-93]],"type":"Polygon","properties":{"id":"limites_municipales.21","objectid":21,"municipio":"Cunén","cod_dep":14,"departamen":"Quiché","codigo_mun":1410,"shape_leng":78939.5014134,"shape_area":225874982.992,"code":"Quiché_Cun","codigo":"Quiché_Cunén"}},{"arcs":[[102,103,104,105,106,107]],"type":"Polygon","properties":{"id":"limites_municipales.22","objectid":22,"municipio":"Tacaná","cod_dep":12,"departamen":"San Marcos","codigo_mun":1207,"shape_leng":98640.5880872,"shape_area":362213920.134,"code":"San Marcos","codigo":"San Marcos_Tacaná"}},{"arcs":[[108,109,-91,-13]],"type":"Polygon","properties":{"id":"limites_municipales.23","objectid":23,"municipio":"Santa Cruz Verapaz","cod_dep":16,"departamen":"Alta Verapaz","codigo_mun":1602,"shape_leng":46123.4183183,"shape_area":77996738.3512,"code":"Alta Verap","codigo":"Alta Verapaz_Santa Cruz Verapaz"}},{"arcs":[[110,111,112,-95,-58]],"type":"Polygon","properties":{"id":"limites_municipales.24","objectid":24,"municipio":"Tucurú","cod_dep":16,"departamen":"Alta Verapaz","codigo_mun":1606,"shape_leng":72752.3690773,"shape_area":219006272.379,"code":"Alta Verap","codigo":"Alta Verapaz_Tucurú"}},{"arcs":[[-113,113,114,-11,-96]],"type":"Polygon","properties":{"id":"limites_municipales.25","objectid":25,"municipio":"Tamahú","cod_dep":16,"departamen":"Alta Verapaz","codigo_mun":1605,"shape_leng":36995.4682165,"shape_area":69875000.5144,"code":"Alta Verap","codigo":"Alta Verapaz_Tamahú"}},{"arcs":[[-115,115,116,117,-109,-12]],"type":"Polygon","properties":{"id":"limites_municipales.26","objectid":26,"municipio":"Tactic","cod_dep":16,"departamen":"Alta Verapaz","codigo_mun":1604,"shape_leng":49056.3061096,"shape_area":116363819.337,"code":"Alta Verap","codigo":"Alta Verapaz_Tactic"}},{"arcs":[[118,119,120,121,122,123]],"type":"Polygon","properties":{"id":"limites_municipales.27","objectid":27,"municipio":"Concepción Tutuapa","cod_dep":12,"departamen":"San Marcos","codigo_mun":1206,"shape_leng":71607.427061,"shape_area":224258365.642,"code":"San Marcos","codigo":"San Marcos_Concepción Tutuapa"}},{"arcs":[[124,125,126,127,128,-66,-80]],"type":"Polygon","properties":{"id":"limites_municipales.28","objectid":28,"municipio":"Cubulco","cod_dep":15,"departamen":"Baja Verapaz","codigo_mun":1504,"shape_leng":132412.099721,"shape_area":691238692.421,"code":"Baja Verap","codigo":"Baja Verapaz_Cubulco"}},{"arcs":[[-68,129,130,131,132,133,134,-100]],"type":"Polygon","properties":{"id":"limites_municipales.29","objectid":29,"municipio":"San Andrés Sajcabajá","cod_dep":14,"departamen":"Quiché","codigo_mun":1414,"shape_leng":77378.4703598,"shape_area":169248996.007,"code":"Quiché_San","codigo":"Quiché_San Andrés Sajcabajá"}},{"arcs":[[135,136,137,138,139,-121,140]],"type":"Polygon","properties":{"id":"limites_municipales.30","objectid":30,"municipio":"San Miguel Ixtahuacán","cod_dep":12,"departamen":"San Marcos","codigo_mun":1205,"shape_leng":69234.5038487,"shape_area":196206909.961,"code":"San Marcos","codigo":"San Marcos_San Miguel Ixtahuacán"}},{"arcs":[[-98,141,142,143,144,-38]],"type":"Polygon","properties":{"id":"limites_municipales.32","objectid":32,"municipio":"Gualán","cod_dep":19,"departamen":"Zacapa","codigo_mun":1904,"shape_leng":144690.890017,"shape_area":781086275.589,"code":"Zacapa_Gua","codigo":"Zacapa_Gualán"}},{"arcs":[[145,146,147,148,149]],"type":"Polygon","properties":{"id":"limites_municipales.162","objectid":162,"municipio":"El Tejar","cod_dep":4,"departamen":"Chimaltenango","codigo_mun":416,"shape_leng":31245.9805905,"shape_area":45519785.7129,"code":"Chimaltena","codigo":"Chimaltenango_El Tejar"}},{"arcs":[[-135,150,151,152,153,154,-101]],"type":"Polygon","properties":{"id":"limites_municipales.31","objectid":31,"municipio":"Sacapulas","cod_dep":14,"departamen":"Quiché","codigo_mun":1416,"shape_leng":108073.72216,"shape_area":369629821.703,"code":"Quiché_Sac","codigo":"Quiché_Sacapulas"}},{"arcs":[[155,156,157,-116,-114,-112,158]],"type":"Polygon","properties":{"id":"limites_municipales.33","objectid":33,"municipio":"Purulhá","cod_dep":15,"departamen":"Baja Verapaz","codigo_mun":1508,"shape_leng":142768.942969,"shape_area":516811796.98,"code":"Baja Verap","codigo":"Baja Verapaz_Purulhá"}},{"arcs":[[-118,159,160,-78,-92,-110]],"type":"Polygon","properties":{"id":"limites_municipales.34","objectid":34,"municipio":"San Miguel Chicaj","cod_dep":15,"departamen":"Baja Verapaz","codigo_mun":1502,"shape_leng":100331.196566,"shape_area":326936040.84,"code":"Baja Verap","codigo":"Baja Verapaz_San Miguel Chicaj"}},{"arcs":[[-123,161,162,-105,163,164]],"type":"Polygon","properties":{"id":"limites_municipales.35","objectid":35,"municipio":"San José Ojetenam","cod_dep":12,"departamen":"San Marcos","codigo_mun":1224,"shape_leng":39750.6083677,"shape_area":78668243.3963,"code":"San Marcos","codigo":"San Marcos_San José Ojetenam"}},{"arcs":[[-161,165,166,167,-125,-79]],"type":"Polygon","properties":{"id":"limites_municipales.36","objectid":36,"municipio":"Rabinal","cod_dep":15,"departamen":"Baja Verapaz","codigo_mun":1503,"shape_leng":104521.959143,"shape_area":311714043.229,"code":"Baja Verap","codigo":"Baja Verapaz_Rabinal"}},{"arcs":[[-129,168,-130,-67]],"type":"Polygon","properties":{"id":"limites_municipales.37","objectid":37,"municipio":"Canillá","cod_dep":14,"departamen":"Quiché","codigo_mun":1418,"shape_leng":44221.1403357,"shape_area":102052785.338,"code":"Quiché_Can","codigo":"Quiché_Canillá"}},{"arcs":[[169,170,171,172,-138]],"type":"Polygon","properties":{"id":"limites_municipales.39","objectid":39,"municipio":"Sipacapa","cod_dep":12,"departamen":"San Marcos","codigo_mun":1226,"shape_leng":57408.3163507,"shape_area":151442867.69,"code":"San Marcos","codigo":"San Marcos_Sipacapa"}},{"arcs":[[173,174,175,176,177,178,179,180,181,182,-171]],"type":"Polygon","properties":{"id":"limites_municipales.45","objectid":45,"municipio":"San Carlos Sija","cod_dep":9,"departamen":"Quetzaltenango","codigo_mun":904,"shape_leng":88857.964338,"shape_area":226562853.039,"code":"Quetzalten","codigo":"Quetzaltenango_San Carlos Sija"}},{"arcs":[[-153,183,184,185,186,-176,187,188,189]],"type":"Polygon","properties":{"id":"limites_municipales.38","objectid":38,"municipio":"Momostenango","cod_dep":8,"departamen":"Totonicapán","codigo_mun":805,"shape_leng":124601.499925,"shape_area":360020912.175,"code":"Totonicapá","codigo":"Totonicapán_Momostenango"}},{"arcs":[[190,191,192,193,194,195,-166,-160,-117,-158]],"type":"Polygon","properties":{"id":"limites_municipales.40","objectid":40,"municipio":"Salamá","cod_dep":15,"departamen":"Baja Verapaz","codigo_mun":1501,"shape_leng":186934.814344,"shape_area":674746165.265,"code":"Baja Verap","codigo":"Baja Verapaz_Salamá"}},{"arcs":[[196,197,-192]],"type":"Polygon","properties":{"id":"limites_municipales.41","objectid":41,"municipio":"San Jerónimo","cod_dep":15,"departamen":"Baja Verapaz","codigo_mun":1507,"shape_leng":70062.8097714,"shape_area":221627177.398,"code":"Baja Verap","codigo":"Baja Verapaz_San Jerónimo"}},{"arcs":[[-132,198,199,200,201]],"type":"Polygon","properties":{"id":"limites_municipales.63","objectid":63,"municipio":"Chinique","cod_dep":14,"departamen":"Quiché","codigo_mun":1403,"shape_leng":31191.6654145,"shape_area":61174297.9616,"code":"Quiché_Chi","codigo":"Quiché_Chinique"}},{"arcs":[[-152,202,-133,-202,203,204,205,-184]],"type":"Polygon","properties":{"id":"limites_municipales.42","objectid":42,"municipio":"San Pedro Jocopilas","cod_dep":14,"departamen":"Quiché","codigo_mun":1409,"shape_leng":103115.167277,"shape_area":294797704.033,"code":"Quiché_San","codigo":"Quiché_San Pedro Jocopilas"}},{"arcs":[[-140,206,207,208,-162,-122]],"type":"Polygon","properties":{"id":"limites_municipales.43","objectid":43,"municipio":"Tejutla","cod_dep":12,"departamen":"San Marcos","codigo_mun":1210,"shape_leng":64232.7823346,"shape_area":143069585.551,"code":"San Marcos","codigo":"San Marcos_Tejutla"}},{"arcs":[[-134,-203,-151]],"type":"Polygon","properties":{"id":"limites_municipales.44","objectid":44,"municipio":"San Bartolomé Jocotenango","cod_dep":14,"departamen":"Quiché","codigo_mun":1417,"shape_leng":57577.0290834,"shape_area":103371586.178,"code":"Quiché_San","codigo":"Quiché_San Bartolomé Jocotenango"}},{"arcs":[[209,210,211,-84,-39,-145]],"type":"Polygon","properties":{"id":"limites_municipales.46","objectid":46,"municipio":"Río Hondo","cod_dep":19,"departamen":"Zacapa","codigo_mun":1903,"shape_leng":104316.679002,"shape_area":456851124.078,"code":"Zacapa_Río","codigo":"Zacapa_Río Hondo"}},{"arcs":[[212,213,-185,-206]],"type":"Polygon","properties":{"id":"limites_municipales.47","objectid":47,"municipio":"Santa Lucía La Reforma","cod_dep":8,"departamen":"Totonicapán","codigo_mun":807,"shape_leng":43035.5189673,"shape_area":45394229.4037,"code":"Totonicapá","codigo":"Totonicapán_Santa Lucía La Reforma"}},{"arcs":[[-173,214,215,216,217,-207,-139]],"type":"Polygon","properties":{"id":"limites_municipales.48","objectid":48,"municipio":"Comitancillo","cod_dep":12,"departamen":"San Marcos","codigo_mun":1204,"shape_leng":69110.8288747,"shape_area":134836304.941,"code":"San Marcos","codigo":"San Marcos_Comitancillo"}},{"arcs":[[218,219,220,-106,-163,-209]],"type":"Polygon","properties":{"id":"limites_municipales.49","objectid":49,"municipio":"Ixchiguán","cod_dep":12,"departamen":"San Marcos","codigo_mun":1223,"shape_leng":69299.3287988,"shape_area":104495016.303,"code":"San Marcos","codigo":"San Marcos_Ixchiguán"}},{"arcs":[[-85,-212,221,222,223,224,225,-156,226]],"type":"Polygon","properties":{"id":"limites_municipales.50","objectid":50,"municipio":"Teculután","cod_dep":19,"departamen":"Zacapa","codigo_mun":1905,"shape_leng":88097.3262592,"shape_area":211742270.031,"code":"Zacapa_Tec","codigo":"Zacapa_Teculután"}},{"arcs":[[-221,227,228,-107]],"type":"Polygon","properties":{"id":"limites_municipales.51","objectid":51,"municipio":"Sibinal","cod_dep":12,"departamen":"San Marcos","codigo_mun":1208,"shape_leng":47769.7481596,"shape_area":104414033.9,"code":"San Marcos","codigo":"San Marcos_Sibinal"}},{"arcs":[[-128,229,230,-199,-131,-169]],"type":"Polygon","properties":{"id":"limites_municipales.52","objectid":52,"municipio":"Zacualpa","cod_dep":14,"departamen":"Quiché","codigo_mun":1404,"shape_leng":62968.4887989,"shape_area":247507751.415,"code":"Quiché_Zac","codigo":"Quiché_Zacualpa"}},{"arcs":[[-226,231,232,233,234,-197,-191,-157]],"type":"Polygon","properties":{"id":"limites_municipales.53","objectid":53,"municipio":"San Agustín Acasaguastlán","cod_dep":2,"departamen":"El Progreso","codigo_mun":203,"shape_leng":103679.22239,"shape_area":425669144.438,"code":"El Progres","codigo":"El Progreso_San Agustín Acasaguastlán"}},{"arcs":[[235,236,-215,-172,-183]],"type":"Polygon","properties":{"id":"limites_municipales.54","objectid":54,"municipio":"Cabricán","cod_dep":9,"departamen":"Quetzaltenango","codigo_mun":906,"shape_leng":39417.650123,"shape_area":83682830.645,"code":"Quetzalten","codigo":"Quetzaltenango_Cabricán"}},{"arcs":[[237,-188,-175]],"type":"Polygon","properties":{"id":"limites_municipales.55","objectid":55,"municipio":"San Bartolo Aguas Calientes","cod_dep":8,"departamen":"Totonicapán","codigo_mun":808,"shape_leng":40146.4280243,"shape_area":56404449.6683,"code":"Totonicapá","codigo":"Totonicapán_San Bartolo Aguas Calientes"}},{"arcs":[[238,239,-236,-182]],"type":"Polygon","properties":{"id":"limites_municipales.67","objectid":67,"municipio":"Huitán","cod_dep":9,"departamen":"Quetzaltenango","codigo_mun":915,"shape_leng":29472.7753119,"shape_area":36345582.6582,"code":"Quetzalten","codigo":"Quetzaltenango_Huitán"}},{"arcs":[[240,241,242,243,-228,-220]],"type":"Polygon","properties":{"id":"limites_municipales.56","objectid":56,"municipio":"Tajumulco","cod_dep":12,"departamen":"San Marcos","codigo_mun":1209,"shape_leng":87547.1829461,"shape_area":251542012.505,"code":"San Marcos","codigo":"San Marcos_Tajumulco"}},{"arcs":[[244,245,246,247,-186,-214]],"type":"Polygon","properties":{"id":"limites_municipales.57","objectid":57,"municipio":"Santa María Chiquimula","cod_dep":8,"departamen":"Totonicapán","codigo_mun":806,"shape_leng":73732.001717,"shape_area":237441444.699,"code":"Totonicapá","codigo":"Totonicapán_Santa María Chiquimula"}},{"arcs":[[-205,248,249,-245,-213]],"type":"Polygon","properties":{"id":"limites_municipales.58","objectid":58,"municipio":"San Antonio Ilotenango","cod_dep":14,"departamen":"Quiché","codigo_mun":1408,"shape_leng":54935.3742087,"shape_area":138664383.436,"code":"Quiché_San","codigo":"Quiché_San Antonio Ilotenango"}},{"arcs":[[-235,250,251,-193,-198]],"type":"Polygon","properties":{"id":"limites_municipales.59","objectid":59,"municipio":"Morazán","cod_dep":2,"departamen":"El Progreso","codigo_mun":202,"shape_leng":96843.5158284,"shape_area":347185840.422,"code":"El Progres","codigo":"El Progreso_Morazán"}},{"arcs":[[-201,252,253,254,-249,-204]],"type":"Polygon","properties":{"id":"limites_municipales.60","objectid":60,"municipio":"Santa Cruz del Quiché","cod_dep":14,"departamen":"Quiché","codigo_mun":1401,"shape_leng":50537.7193601,"shape_area":112202669.272,"code":"Quiché_San","codigo":"Quiché_Santa Cruz del Quiché"}},{"arcs":[[-218,255,256,257,258,259,260,261,-241,-219,-208]],"type":"Polygon","properties":{"id":"limites_municipales.68","objectid":68,"municipio":"San Marcos","cod_dep":12,"departamen":"San Marcos","codigo_mun":1201,"shape_leng":74858.9510379,"shape_area":120601510.301,"code":"San Marcos","codigo":"San Marcos_San Marcos"}},{"arcs":[[262,263,264,265,266,267,-230,-127]],"type":"Polygon","properties":{"id":"limites_municipales.61","objectid":61,"municipio":"Joyabaj","cod_dep":14,"departamen":"Quiché","codigo_mun":1412,"shape_leng":112129.811941,"shape_area":472396116.21,"code":"Quiché_Joy","codigo":"Quiché_Joyabaj"}},{"arcs":[[268,269,270,-232,-225]],"type":"Polygon","properties":{"id":"limites_municipales.62","objectid":62,"municipio":"San Cristóbal Acasaguastlán","cod_dep":2,"departamen":"El Progreso","codigo_mun":204,"shape_leng":77045.5334272,"shape_area":164486959.211,"code":"El Progres","codigo":"El Progreso_San Cristóbal Acasaguastlán"}},{"arcs":[[271,272,273,274,275,-210,-144]],"type":"Polygon","properties":{"id":"limites_municipales.64","objectid":64,"municipio":"Zacapa","cod_dep":19,"departamen":"Zacapa","codigo_mun":1901,"shape_leng":109577.529156,"shape_area":424853592.407,"code":"Zacapa_Zac","codigo":"Zacapa_Zacapa"}},{"arcs":[[-237,-240,276,277,278,-216]],"type":"Polygon","properties":{"id":"limites_municipales.65","objectid":65,"municipio":"Río Blanco","cod_dep":12,"departamen":"San Marcos","codigo_mun":1228,"shape_leng":28132.6520556,"shape_area":31202951.3212,"code":"San Marcos","codigo":"San Marcos_Río Blanco"}},{"arcs":[[279,280,-269,-224]],"type":"Polygon","properties":{"id":"limites_municipales.66","objectid":66,"municipio":"Usumatlán","cod_dep":19,"departamen":"Zacapa","codigo_mun":1906,"shape_leng":60102.2945501,"shape_area":108106669.813,"code":"Zacapa_Usu","codigo":"Zacapa_Usumatlán"}},{"arcs":[[281,282,283,284,285]],"type":"Polygon","properties":{"id":"limites_municipales.286","objectid":286,"municipio":"Iztapa","cod_dep":5,"departamen":"Escuintla","codigo_mun":510,"shape_leng":38842.2599718,"shape_area":65160481.2203,"code":"Escuintla_","codigo":"Escuintla_Iztapa"}},{"arcs":[[-200,-231,-268,286,-253]],"type":"Polygon","properties":{"id":"limites_municipales.69","objectid":69,"municipio":"Chiché","cod_dep":14,"departamen":"Quiché","codigo_mun":1402,"shape_leng":56481.0239327,"shape_area":115747133.136,"code":"Quiché_Chi","codigo":"Quiché_Chiché"}},{"arcs":[[-276,287,288,-222,-211]],"type":"Polygon","properties":{"id":"limites_municipales.70","objectid":70,"municipio":"Estanzuela","cod_dep":19,"departamen":"Zacapa","codigo_mun":1902,"shape_leng":52120.7738487,"shape_area":94615253.7553,"code":"Zacapa_Est","codigo":"Zacapa_Estanzuela"}},{"arcs":[[289,290,291,-242,-262]],"type":"Polygon","properties":{"id":"limites_municipales.74","objectid":74,"municipio":"San Pablo","cod_dep":12,"departamen":"San Marcos","codigo_mun":1219,"shape_leng":70964.395925,"shape_area":139324857.472,"code":"San Marcos","codigo":"San Marcos_San Pablo"}},{"arcs":[[-275,292,293,-288]],"type":"Polygon","properties":{"id":"limites_municipales.71","objectid":71,"municipio":"San Jorge","cod_dep":19,"departamen":"Zacapa","codigo_mun":1911,"shape_leng":44372.6236885,"shape_area":82292480.5175,"code":"Zacapa_San","codigo":"Zacapa_San Jorge"}},{"arcs":[[-279,294,-256,-217]],"type":"Polygon","properties":{"id":"limites_municipales.72","objectid":72,"municipio":"San Lorenzo","cod_dep":12,"departamen":"San Marcos","codigo_mun":1229,"shape_leng":28629.2637209,"shape_area":44842240.1741,"code":"San Marcos","codigo":"San Marcos_San Lorenzo"}},{"arcs":[[295,296,297,-272,-143]],"type":"Polygon","properties":{"id":"limites_municipales.73","objectid":73,"municipio":"La Unión","cod_dep":19,"departamen":"Zacapa","codigo_mun":1909,"shape_leng":77387.9992666,"shape_area":214504149.134,"code":"Zacapa_La ","codigo":"Zacapa_La Unión"}},{"arcs":[[298,299,300]],"type":"Polygon","properties":{"id":"limites_municipales.136","objectid":136,"municipio":"Sansare","cod_dep":2,"departamen":"El Progreso","codigo_mun":206,"shape_leng":62044.1625127,"shape_area":143893241.461,"code":"El Progres","codigo":"El Progreso_Sansare"}},{"arcs":[[-196,301,302,-167]],"type":"Polygon","properties":{"id":"limites_municipales.75","objectid":75,"municipio":"El Chol","cod_dep":15,"departamen":"Baja Verapaz","codigo_mun":1506,"shape_leng":48881.971344,"shape_area":119140370.599,"code":"Baja Verap","codigo":"Baja Verapaz_El Chol"}},{"arcs":[[-292,303,304,305,306,-243]],"type":"Polygon","properties":{"id":"limites_municipales.76","objectid":76,"municipio":"Malacatán","cod_dep":12,"departamen":"San Marcos","codigo_mun":1215,"shape_leng":82451.5476191,"shape_area":212575597.408,"code":"San Marcos","codigo":"San Marcos_Malacatán"}},{"arcs":[[-181,307,308,309,-277,-239]],"type":"Polygon","properties":{"id":"limites_municipales.77","objectid":77,"municipio":"Sibilia","cod_dep":9,"departamen":"Quetzaltenango","codigo_mun":905,"shape_leng":31533.2740275,"shape_area":41074751.4478,"code":"Quetzalten","codigo":"Quetzaltenango_Sibilia"}},{"arcs":[[-248,310,311,-177,-187]],"type":"Polygon","properties":{"id":"limites_municipales.78","objectid":78,"municipio":"San Francisco El Alto","cod_dep":8,"departamen":"Totonicapán","codigo_mun":803,"shape_leng":46796.7877354,"shape_area":72635686.8128,"code":"Totonicapá","codigo":"Totonicapán_San Francisco El Alto"}},{"arcs":[[-303,312,313,314,315,316,-126,-168]],"type":"Polygon","properties":{"id":"limites_municipales.79","objectid":79,"municipio":"Granados","cod_dep":15,"departamen":"Baja Verapaz","codigo_mun":1505,"shape_leng":66912.3540019,"shape_area":154496571.76,"code":"Baja Verap","codigo":"Baja Verapaz_Granados"}},{"arcs":[[317,318,319,320,321,322]],"type":"Polygon","properties":{"id":"limites_municipales.137","objectid":137,"municipio":"Santa Lucía Utatlán","cod_dep":7,"departamen":"Sololá","codigo_mun":704,"shape_leng":30514.3308206,"shape_area":51051149.2265,"code":"Sololá_San","codigo":"Sololá_Santa Lucía Utatlán"}},{"arcs":[[323,324,325,326,-257,-295]],"type":"Polygon","properties":{"id":"limites_municipales.80","objectid":80,"municipio":"San Pedro Sacatepéquez","cod_dep":12,"departamen":"San Marcos","codigo_mun":1202,"shape_leng":53651.038185,"shape_area":77399836.9823,"code":"San Marcos","codigo":"San Marcos_San Pedro Sacatepéquez"}},{"arcs":[[-310,327,-324,-278]],"type":"Polygon","properties":{"id":"limites_municipales.81","objectid":81,"municipio":"San Antonio Sacatepéquez","cod_dep":12,"departamen":"San Marcos","codigo_mun":1203,"shape_leng":30431.0070557,"shape_area":47323409.5859,"code":"San Marcos","codigo":"San Marcos_San Antonio Sacatepéquez"}},{"arcs":[[-255,328,329,-246,-250]],"type":"Polygon","properties":{"id":"limites_municipales.82","objectid":82,"municipio":"Patzité","cod_dep":14,"departamen":"Quiché","codigo_mun":1407,"shape_leng":31372.2185441,"shape_area":53160419.987,"code":"Quiché_Pat","codigo":"Quiché_Patzité"}},{"arcs":[[-267,330,331,332,333,334,-329,-254,-287]],"type":"Polygon","properties":{"id":"limites_municipales.83","objectid":83,"municipio":"Chichicastenango","cod_dep":14,"departamen":"Quiché","codigo_mun":1406,"shape_leng":86621.5383752,"shape_area":245701451.07,"code":"Quiché_Chi","codigo":"Quiché_Chichicastenango"}},{"arcs":[[-289,-294,335,336,-280,-223]],"type":"Polygon","properties":{"id":"limites_municipales.84","objectid":84,"municipio":"Huité","cod_dep":19,"departamen":"Zacapa","codigo_mun":1910,"shape_leng":40200.0574053,"shape_area":84707684.4242,"code":"Zacapa_Hui","codigo":"Zacapa_Huité"}},{"arcs":[[337,338,339,-297]],"type":"Polygon","properties":{"id":"limites_municipales.85","objectid":85,"municipio":"Camotán","cod_dep":20,"departamen":"Chiquimula","codigo_mun":2005,"shape_leng":74908.0252936,"shape_area":230387242.502,"code":"Chiquimula","codigo":"Chiquimula_Camotán"}},{"arcs":[[-317,340,-263]],"type":"Polygon","properties":{"id":"limites_municipales.86","objectid":86,"municipio":"Pachalum","cod_dep":14,"departamen":"Quiché","codigo_mun":1421,"shape_leng":29445.0119476,"shape_area":41779411.4705,"code":"Quiché_Pac","codigo":"Quiché_Pachalum"}},{"arcs":[[341,342,343,-290,-261]],"type":"Polygon","properties":{"id":"limites_municipales.87","objectid":87,"municipio":"San Rafael Pie de la Cuesta","cod_dep":12,"departamen":"San Marcos","codigo_mun":1211,"shape_leng":29757.5458797,"shape_area":45228402.1666,"code":"San Marcos","codigo":"San Marcos_San Rafael Pie de la Cuesta"}},{"arcs":[[-337,344,345,346,347,-270,-281]],"type":"Polygon","properties":{"id":"limites_municipales.88","objectid":88,"municipio":"Cabañas","cod_dep":19,"departamen":"Zacapa","codigo_mun":1907,"shape_leng":58570.2903778,"shape_area":138429442.652,"code":"Zacapa_Cab","codigo":"Zacapa_Cabañas"}},{"arcs":[[348,349,-325,-328,-309]],"type":"Polygon","properties":{"id":"limites_municipales.89","objectid":89,"municipio":"Palestina de los Altos","cod_dep":9,"departamen":"Quetzaltenango","codigo_mun":924,"shape_leng":27789.4712035,"shape_area":36030705.523,"code":"Quetzalten","codigo":"Quetzaltenango_Palestina de los Altos"}},{"arcs":[[350,351,-64,352,-178,-312]],"type":"Polygon","properties":{"id":"limites_municipales.90","objectid":90,"municipio":"San Cristóbal Totonicapán","cod_dep":8,"departamen":"Totonicapán","codigo_mun":802,"shape_leng":40309.6750804,"shape_area":44260682.7815,"code":"Totonicapá","codigo":"Totonicapán_San Cristóbal Totonicapán"}},{"arcs":[[353,354,-342,-260]],"type":"Polygon","properties":{"id":"limites_municipales.91","objectid":91,"municipio":"Esquipulas Palo Gordo","cod_dep":12,"departamen":"San Marcos","codigo_mun":1227,"shape_leng":27840.459651,"shape_area":50544514.6003,"code":"San Marcos","codigo":"San Marcos_Esquipulas Palo Gordo"}},{"arcs":[[-330,-335,355,356,-71,357,-351,-311,-247]],"type":"Polygon","properties":{"id":"limites_municipales.92","objectid":92,"municipio":"Totonicapán","cod_dep":8,"departamen":"Totonicapán","codigo_mun":801,"shape_leng":83359.277114,"shape_area":244472494.297,"code":"Totonicapá","codigo":"Totonicapán_Totonicapán"}},{"arcs":[[-344,358,359,-304,-291]],"type":"Polygon","properties":{"id":"limites_municipales.98","objectid":98,"municipio":"El Rodeo","cod_dep":12,"departamen":"San Marcos","codigo_mun":1214,"shape_leng":39289.5750945,"shape_area":51743366.1199,"code":"San Marcos","codigo":"San Marcos_El Rodeo"}},{"arcs":[[-348,360,361,-233,-271]],"type":"Polygon","properties":{"id":"limites_municipales.93","objectid":93,"municipio":"El Jícaro","cod_dep":2,"departamen":"El Progreso","codigo_mun":205,"shape_leng":57684.901223,"shape_area":114374166.172,"code":"El Progres","codigo":"El Progreso_El Jícaro"}},{"arcs":[[-180,362,363,364,-349,-308]],"type":"Polygon","properties":{"id":"limites_municipales.94","objectid":94,"municipio":"Cajolá","cod_dep":9,"departamen":"Quetzaltenango","codigo_mun":907,"shape_leng":20241.9894997,"shape_area":20533182.1146,"code":"Quetzalten","codigo":"Quetzaltenango_Cajolá"}},{"arcs":[[-63,365,366,-363,-179,-353]],"type":"Polygon","properties":{"id":"limites_municipales.95","objectid":95,"municipio":"San Francisco La Unión","cod_dep":9,"departamen":"Quetzaltenango","codigo_mun":918,"shape_leng":21102.755973,"shape_area":16889152.057,"code":"Quetzalten","codigo":"Quetzaltenango_San Francisco La Unión"}},{"arcs":[[367,368,369,370,371,372,373,-331,-266]],"type":"Polygon","properties":{"id":"limites_municipales.96","objectid":96,"municipio":"Tecpán Guatemala","cod_dep":4,"departamen":"Chimaltenango","codigo_mun":406,"shape_leng":97265.4489604,"shape_area":247729860.312,"code":"Chimaltena","codigo":"Chimaltenango_Tecpán Guatemala"}},{"arcs":[[-341,-316,374,375,376,377,378,-264]],"type":"Polygon","properties":{"id":"limites_municipales.97","objectid":97,"municipio":"San Martín Jilotepeque","cod_dep":4,"departamen":"Chimaltenango","codigo_mun":403,"shape_leng":103891.938427,"shape_area":409703455.954,"code":"Chimaltena","codigo":"Chimaltenango_San Martín Jilotepeque"}},{"arcs":[[379,380,-368,-265,-379]],"type":"Polygon","properties":{"id":"limites_municipales.100","objectid":100,"municipio":"San José Poaquil","cod_dep":4,"departamen":"Chimaltenango","codigo_mun":402,"shape_leng":48057.828845,"shape_area":96507144.9496,"code":"Chimaltena","codigo":"Chimaltenango_San José Poaquíl"}},{"arcs":[[-362,381,382,-301,383,-251,-234]],"type":"Polygon","properties":{"id":"limites_municipales.101","objectid":101,"municipio":"Guastatoya","cod_dep":2,"departamen":"El Progreso","codigo_mun":201,"shape_leng":84411.4823532,"shape_area":217793897.531,"code":"El Progres","codigo":"El Progreso_Guastatoya"}},{"arcs":[[-327,384,385,386,-258]],"type":"Polygon","properties":{"id":"limites_municipales.107","objectid":107,"municipio":"San Cristóbal Cucho","cod_dep":12,"departamen":"San Marcos","codigo_mun":1225,"shape_leng":23382.3986728,"shape_area":29715799.3391,"code":"San Marcos","codigo":"San Marcos_San Cristóbal Cucho"}},{"arcs":[[-365,387,388,389,390,391,392,393,-385,-326,-350]],"type":"Polygon","properties":{"id":"limites_municipales.102","objectid":102,"municipio":"San Juan Ostuncalco","cod_dep":9,"departamen":"Quetzaltenango","codigo_mun":909,"shape_leng":62098.5982311,"shape_area":109037532.185,"code":"Quetzalten","codigo":"Quetzaltenango_San Juan Ostuncalco"}},{"arcs":[[-298,-340,394,395,396,397,-273]],"type":"Polygon","properties":{"id":"limites_municipales.103","objectid":103,"municipio":"Jocotán","cod_dep":20,"departamen":"Chiquimula","codigo_mun":2004,"shape_leng":108607.19598,"shape_area":250990450.355,"code":"Chiquimula","codigo":"Chiquimula_Jocotán"}},{"arcs":[[-355,398,399,400,-359,-343]],"type":"Polygon","properties":{"id":"limites_municipales.108","objectid":108,"municipio":"El Tumbador","cod_dep":12,"departamen":"San Marcos","codigo_mun":1213,"shape_leng":70619.3859763,"shape_area":165811059.457,"code":"San Marcos","codigo":"San Marcos_El Tumbador"}},{"arcs":[[401,402,403,404,405,-313,-302,-195]],"type":"Polygon","properties":{"id":"limites_municipales.104","objectid":104,"municipio":"Chuarrancho","cod_dep":1,"departamen":"Guatemala","codigo_mun":112,"shape_leng":60377.5064974,"shape_area":117804111.658,"code":"Guatemala_","codigo":"Guatemala_Chuarrancho"}},{"arcs":[[-367,406,407,-388,-364]],"type":"Polygon","properties":{"id":"limites_municipales.105","objectid":105,"municipio":"San Miguel Sigüila","cod_dep":9,"departamen":"Quetzaltenango","codigo_mun":908,"shape_leng":19148.3689741,"shape_area":17131274.4922,"code":"Quetzalten","codigo":"Quetzaltenango_San Miguel Sigüilá"}},{"arcs":[[408,409,-407,-366,-62]],"type":"Polygon","properties":{"id":"limites_municipales.106","objectid":106,"municipio":"Olintepeque","cod_dep":9,"departamen":"Quetzaltenango","codigo_mun":903,"shape_leng":25598.8253699,"shape_area":32180738.7168,"code":"Quetzalten","codigo":"Quetzaltenango_Olintepeque"}},{"arcs":[[-259,410,411,412,413,-399,-354]],"type":"Polygon","properties":{"id":"limites_municipales.109","objectid":109,"municipio":"Nuevo Progreso","cod_dep":12,"departamen":"San Marcos","codigo_mun":1212,"shape_leng":75037.6498266,"shape_area":140486920.178,"code":"San Marcos","codigo":"San Marcos_Nuevo Progreso"}},{"arcs":[[-360,-401,414,415,-305]],"type":"Polygon","properties":{"id":"limites_municipales.110","objectid":110,"municipio":"Catarina","cod_dep":12,"departamen":"San Marcos","codigo_mun":1216,"shape_leng":47102.2125543,"shape_area":81472917.0142,"code":"San Marcos","codigo":"San Marcos_Catarina"}},{"arcs":[[416,-411,-387]],"type":"Polygon","properties":{"id":"limites_municipales.111","objectid":111,"municipio":"La Reforma","cod_dep":12,"departamen":"San Marcos","codigo_mun":1221,"shape_leng":50813.0279074,"shape_area":74160786.9147,"code":"San Marcos","codigo":"San Marcos_La Reforma"}},{"arcs":[[-381,417,-369]],"type":"Polygon","properties":{"id":"limites_municipales.112","objectid":112,"municipio":"Santa Apolonia","cod_dep":4,"departamen":"Chimaltenango","codigo_mun":405,"shape_leng":33708.9500972,"shape_area":46108303.1067,"code":"Chimaltena","codigo":"Chimaltenango_Santa Apolonia"}},{"arcs":[[418,419,420,421,422,423,-356,-334]],"type":"Polygon","properties":{"id":"limites_municipales.113","objectid":113,"municipio":"Sololá","cod_dep":7,"departamen":"Sololá","codigo_mun":701,"shape_leng":58914.7438894,"shape_area":151300051.795,"code":"Sololá_Sol","codigo":"Sololá_Sololá"}},{"arcs":[[-293,-274,-398,424,425,426,427,428,-345,-336]],"type":"Polygon","properties":{"id":"limites_municipales.114","objectid":114,"municipio":"Chiquimula","cod_dep":20,"departamen":"Chiquimula","codigo_mun":2001,"shape_leng":96045.3800618,"shape_area":351552748.517,"code":"Chiquimula","codigo":"Chiquimula_Chiquimula"}},{"arcs":[[429,430,-389,-408,-410]],"type":"Polygon","properties":{"id":"limites_municipales.115","objectid":115,"municipio":"La Esperanza","cod_dep":9,"departamen":"Quetzaltenango","codigo_mun":923,"shape_leng":13347.3576888,"shape_area":12250423.7275,"code":"Quetzalten","codigo":"Quetzaltenango_La Esperanza"}},{"arcs":[[-406,431,432,433,434,-314]],"type":"Polygon","properties":{"id":"limites_municipales.118","objectid":118,"municipio":"San Raymundo","cod_dep":1,"departamen":"Guatemala","codigo_mun":111,"shape_leng":71468.3237701,"shape_area":124812187.438,"code":"Guatemala_","codigo":"Guatemala_San Raymundo"}},{"arcs":[[-347,435,436,437,438,439,-382,-361]],"type":"Polygon","properties":{"id":"limites_municipales.119","objectid":119,"municipio":"San Pedro Pinula","cod_dep":21,"departamen":"Jalapa","codigo_mun":2102,"shape_leng":108846.441516,"shape_area":530560065.785,"code":"Jalapa_San","codigo":"Jalapa_San Pedro Pinula"}},{"arcs":[[-384,-300,440,441,442,443,-402,-194,-252]],"type":"Polygon","properties":{"id":"limites_municipales.116","objectid":116,"municipio":"Sanarate","cod_dep":2,"departamen":"El Progreso","codigo_mun":207,"shape_leng":107909.226952,"shape_area":273904030.27,"code":"El Progres","codigo":"El Progreso_Sanarate"}},{"arcs":[[-358,-76,444,-60,-352]],"type":"Polygon","properties":{"id":"limites_municipales.117","objectid":117,"municipio":"Salcajá","cod_dep":9,"departamen":"Quetzaltenango","codigo_mun":902,"shape_leng":15746.5023599,"shape_area":16879258.1008,"code":"Quetzalten","codigo":"Quetzaltenango_Salcajá"}},{"arcs":[[-435,445,446,447,-150,448,-375,-315]],"type":"Polygon","properties":{"id":"limites_municipales.120","objectid":120,"municipio":"San Juan Sacatepéquez","cod_dep":1,"departamen":"Guatemala","codigo_mun":110,"shape_leng":98068.6133594,"shape_area":272564262.348,"code":"Guatemala_","codigo":"Guatemala_San Juan Sacatepéquez"}},{"arcs":[[-445,-75,449,450,451,452,453,-430,-409,-61]],"type":"Polygon","properties":{"id":"limites_municipales.121","objectid":121,"municipio":"Quetzaltenango","cod_dep":9,"departamen":"Quetzaltenango","codigo_mun":901,"shape_leng":55868.545322,"shape_area":126837231.735,"code":"Quetzalten","codigo":"Quetzaltenango_Quetzaltenango"}},{"arcs":[[454,455,-391]],"type":"Polygon","properties":{"id":"limites_municipales.126","objectid":126,"municipio":"Concepción Chiquirichapa","cod_dep":9,"departamen":"Quetzaltenango","codigo_mun":911,"shape_leng":18816.7220926,"shape_area":21895945.827,"code":"Quetzalten","codigo":"Quetzaltenango_Concepción Chiquirichapa"}},{"arcs":[[-322,456,457,458,459,460,461,462,463]],"type":"Polygon","properties":{"id":"limites_municipales.122","objectid":122,"municipio":"Santa Catarina Ixtahuacán","cod_dep":7,"departamen":"Sololá","codigo_mun":706,"shape_leng":77910.4327198,"shape_area":189735099.665,"code":"Sololá_San","codigo":"Sololá_Santa Catarina Ixtahuacán"}},{"arcs":[[-394,464,465,-412,-417,-386]],"type":"Polygon","properties":{"id":"limites_municipales.123","objectid":123,"municipio":"El Quetzal","cod_dep":12,"departamen":"San Marcos","codigo_mun":1220,"shape_leng":59014.8119625,"shape_area":87508870.0249,"code":"San Marcos","codigo":"San Marcos_El Quetzal"}},{"arcs":[[-454,466,-455,-390,-431]],"type":"Polygon","properties":{"id":"limites_municipales.124","objectid":124,"municipio":"San Mateo","cod_dep":9,"departamen":"Quetzaltenango","codigo_mun":910,"shape_leng":15177.1374658,"shape_area":10824943.8451,"code":"Quetzalten","codigo":"Quetzaltenango_San Mateo"}},{"arcs":[[-429,467,-436,-346]],"type":"Polygon","properties":{"id":"limites_municipales.125","objectid":125,"municipio":"San Diego","cod_dep":19,"departamen":"Zacapa","codigo_mun":1908,"shape_leng":43408.7853614,"shape_area":103401102.371,"code":"Zacapa_San","codigo":"Zacapa_San Diego"}},{"arcs":[[-444,468,469,470,-403]],"type":"Polygon","properties":{"id":"limites_municipales.128","objectid":128,"municipio":"San José del Golfo","cod_dep":1,"departamen":"Guatemala","codigo_mun":104,"shape_leng":53813.0008173,"shape_area":76364844.6366,"code":"Guatemala_","codigo":"Guatemala_San José del Golfo"}},{"arcs":[[-456,-467,-453,471,472,473,-392]],"type":"Polygon","properties":{"id":"limites_municipales.129","objectid":129,"municipio":"San Martín Sacatepéquez","cod_dep":9,"departamen":"Quetzaltenango","codigo_mun":912,"shape_leng":60359.098566,"shape_area":143792176.905,"code":"Quetzalten","codigo":"Quetzaltenango_San Martín Sacatepéquez"}},{"arcs":[[-440,474,475,476,477,-441,-299,-383]],"type":"Polygon","properties":{"id":"limites_municipales.130","objectid":130,"municipio":"Jalapa","cod_dep":21,"departamen":"Jalapa","codigo_mun":2101,"shape_leng":137894.701632,"shape_area":684930702.527,"code":"Jalapa_Jal","codigo":"Jalapa_Jalapa"}},{"arcs":[[478,479,480,481,482,-465,-393,-474]],"type":"Polygon","properties":{"id":"limites_municipales.131","objectid":131,"municipio":"Colomba","cod_dep":9,"departamen":"Quetzaltenango","codigo_mun":917,"shape_leng":105110.136721,"shape_area":205730710.515,"code":"Quetzalten","codigo":"Quetzaltenango_Colomba"}},{"arcs":[[-471,483,484,485,-404]],"type":"Polygon","properties":{"id":"limites_municipales.132","objectid":132,"municipio":"San Pedro Ayampuc","cod_dep":1,"departamen":"Guatemala","codigo_mun":107,"shape_leng":44828.2692614,"shape_area":106667066.969,"code":"Guatemala_","codigo":"Guatemala_San Pedro Ayampuc"}},{"arcs":[[-74,486,-450]],"type":"Polygon","properties":{"id":"limites_municipales.133","objectid":133,"municipio":"Almolonga","cod_dep":9,"departamen":"Quetzaltenango","codigo_mun":913,"shape_leng":14074.0418946,"shape_area":12548668.0279,"code":"Quetzalten","codigo":"Quetzaltenango_Almolonga"}},{"arcs":[[487,488,489,490,-395,-339]],"type":"Polygon","properties":{"id":"limites_municipales.134","objectid":134,"municipio":"Esquipulas","cod_dep":20,"departamen":"Chiquimula","codigo_mun":2007,"shape_leng":128892.821343,"shape_area":500589851.617,"code":"Chiquimula","codigo":"Chiquimula_Esquipulas"}},{"arcs":[[491,-469,-443]],"type":"Polygon","properties":{"id":"limites_municipales.135","objectid":135,"municipio":"San Antonio La Paz","cod_dep":2,"departamen":"El Progreso","codigo_mun":208,"shape_leng":56987.1880416,"shape_area":147251133.199,"code":"El Progres","codigo":"El Progreso_San Antonio La Paz"}},{"arcs":[[-374,492,493,494,495,496,-332]],"type":"Polygon","properties":{"id":"limites_municipales.138","objectid":138,"municipio":"San Andrés Semetabaj","cod_dep":7,"departamen":"Sololá","codigo_mun":709,"shape_leng":36381.8222476,"shape_area":52945281.4903,"code":"Sololá_San","codigo":"Sololá_San Andrés Semetabaj","deportations_rate":0.00413,"population":15256}},{"arcs":[[497,498,499,-425,-397]],"type":"Polygon","properties":{"id":"limites_municipales.139","objectid":139,"municipio":"San Juan la Ermita","cod_dep":20,"departamen":"Chiquimula","codigo_mun":2003,"shape_leng":45850.6029589,"shape_area":80476188.0703,"code":"Chiquimula","codigo":"Chiquimula_San Juan la Ermita"}},{"arcs":[[-378,500,501,-370,-418,-380]],"type":"Polygon","properties":{"id":"limites_municipales.140","objectid":140,"municipio":"Comalapa","cod_dep":4,"departamen":"Chimaltenango","codigo_mun":404,"shape_leng":41443.2256501,"shape_area":85680040.0321,"code":"Chimaltena","codigo":"Chimaltenango_Comalapa"}},{"arcs":[[-486,502,503,-432,-405]],"type":"Polygon","properties":{"id":"limites_municipales.141","objectid":141,"municipio":"Chinautla","cod_dep":1,"departamen":"Guatemala","codigo_mun":106,"shape_leng":49917.0920218,"shape_area":66957610.6189,"code":"Guatemala_","codigo":"Guatemala_Chinautla"}},{"arcs":[[-333,-497,504,-419]],"type":"Polygon","properties":{"id":"limites_municipales.142","objectid":142,"municipio":"Concepción","cod_dep":7,"departamen":"Sololá","codigo_mun":708,"shape_leng":15649.7771376,"shape_area":14967718.798,"code":"Sololá_Con","codigo":"Sololá_Concepción"}},{"arcs":[[-73,505,506,507,508,-451,-487]],"type":"Polygon","properties":{"id":"limites_municipales.146","objectid":146,"municipio":"Zunil","cod_dep":9,"departamen":"Quetzaltenango","codigo_mun":916,"shape_leng":40384.4583048,"shape_area":77461847.87,"code":"Quetzalten","codigo":"Quetzaltenango_Zunil"}},{"arcs":[[-414,509,510,-415,-400]],"type":"Polygon","properties":{"id":"limites_municipales.143","objectid":143,"municipio":"Pajapita","cod_dep":12,"departamen":"San Marcos","codigo_mun":1222,"shape_leng":75346.9307624,"shape_area":131228176.447,"code":"San Marcos","codigo":"San Marcos_Pajapita"}},{"arcs":[[-511,511,512,513,514,-306,-416]],"type":"Polygon","properties":{"id":"limites_municipales.144","objectid":144,"municipio":"Ayutla","cod_dep":12,"departamen":"San Marcos","codigo_mun":1217,"shape_leng":76539.044265,"shape_area":118748475.24,"code":"San Marcos","codigo":"San Marcos_Ayutla"}},{"arcs":[[-423,515,516,-318,517]],"type":"Polygon","properties":{"id":"limites_municipales.145","objectid":145,"municipio":"San José Chacayá","cod_dep":7,"departamen":"Sololá","codigo_mun":702,"shape_leng":16247.8174667,"shape_area":15784719.764,"code":"Sololá_San","codigo":"Sololá_San José Chacayá"}},{"arcs":[[-509,518,519,-472,-452]],"type":"Polygon","properties":{"id":"limites_municipales.147","objectid":147,"municipio":"El Palmar","cod_dep":9,"departamen":"Quetzaltenango","codigo_mun":919,"shape_leng":69776.0217491,"shape_area":175910860.919,"code":"Quetzalten","codigo":"Quetzaltenango_El Palmar"}},{"arcs":[[520,521,522,-427]],"type":"Polygon","properties":{"id":"limites_municipales.148","objectid":148,"municipio":"San José La Arada","cod_dep":20,"departamen":"Chiquimula","codigo_mun":2002,"shape_leng":47825.7393008,"shape_area":115304479.879,"code":"Chiquimula","codigo":"Chiquimula_San José La Arada"}},{"arcs":[[523,-498,-396,-491]],"type":"Polygon","properties":{"id":"limites_municipales.149","objectid":149,"municipio":"Olopa","cod_dep":20,"departamen":"Chiquimula","codigo_mun":2006,"shape_leng":56400.0667291,"shape_area":112104322.262,"code":"Chiquimula","codigo":"Chiquimula_Olopa"}},{"arcs":[[-523,524,525,-437,-468,-428]],"type":"Polygon","properties":{"id":"limites_municipales.150","objectid":150,"municipio":"San Luis Jilotepeque","cod_dep":21,"departamen":"Jalapa","codigo_mun":2103,"shape_leng":69605.6117726,"shape_area":209931647.637,"code":"Jalapa_San","codigo":"Jalapa_San Luis Jilotepeque"}},{"arcs":[[-492,526,527,528,-484,-470]],"type":"Polygon","properties":{"id":"limites_municipales.151","objectid":151,"municipio":"Palencia","cod_dep":1,"departamen":"Guatemala","codigo_mun":105,"shape_leng":73852.3210638,"shape_area":217363997.02,"code":"Guatemala_","codigo":"Guatemala_Palencia"}},{"arcs":[[-496,529,530,-420,-505]],"type":"Polygon","properties":{"id":"limites_municipales.152","objectid":152,"municipio":"Panajachel","cod_dep":7,"departamen":"Sololá","codigo_mun":710,"shape_leng":14746.9549828,"shape_area":7720125.80217,"code":"Sololá_Pan","codigo":"Sololá_Panajachel"}},{"arcs":[[-422,531,532,-516]],"type":"Polygon","properties":{"id":"limites_municipales.153","objectid":153,"municipio":"Santa Cruz La Laguna","cod_dep":7,"departamen":"Sololá","codigo_mun":714,"shape_leng":15531.1974701,"shape_area":11263649.9174,"code":"Sololá_San","codigo":"Sololá_Santa Cruz La Laguna"}},{"arcs":[[-517,-533,533,534,-319]],"type":"Polygon","properties":{"id":"limites_municipales.154","objectid":154,"municipio":"San Marcos La Laguna","cod_dep":7,"departamen":"Sololá","codigo_mun":716,"shape_leng":14029.7407948,"shape_area":9182181.1775,"code":"Sololá_San","codigo":"Sololá_San Marcos La Laguna"}},{"arcs":[[535,536,-521,-426,-500]],"type":"Polygon","properties":{"id":"limites_municipales.155","objectid":155,"municipio":"San Jacinto","cod_dep":20,"departamen":"Chiquimula","codigo_mun":2010,"shape_leng":39352.4294515,"shape_area":70740389.25,"code":"Chiquimula","codigo":"Chiquimula_San Jacinto"}},{"arcs":[[-449,-149,537,538,-376]],"type":"Polygon","properties":{"id":"limites_municipales.156","objectid":156,"municipio":"Chimaltenango","cod_dep":4,"departamen":"Chimaltenango","codigo_mun":401,"shape_leng":45321.9982972,"shape_area":49044135.4018,"code":"Chimaltena","codigo":"Chimaltenango_Chimaltenango"}},{"arcs":[[-535,539,540,541,-320]],"type":"Polygon","properties":{"id":"limites_municipales.157","objectid":157,"municipio":"San Pablo La Laguna","cod_dep":7,"departamen":"Sololá","codigo_mun":715,"shape_leng":10239.1263797,"shape_area":6133262.89692,"code":"Sololá_San","codigo":"Sololá_San Pablo La Laguna"}},{"arcs":[[-542,542,543,-457,-321]],"type":"Polygon","properties":{"id":"limites_municipales.158","objectid":158,"municipio":"Santa Clara La Laguna","cod_dep":7,"departamen":"Sololá","codigo_mun":707,"shape_leng":20301.1971169,"shape_area":14353538.7618,"code":"Sololá_San","codigo":"Sololá_Santa Clara La Laguna"}},{"arcs":[[544,545,-530,-495]],"type":"Polygon","properties":{"id":"limites_municipales.159","objectid":159,"municipio":"Santa Catarina Palopó","cod_dep":7,"departamen":"Sololá","codigo_mun":711,"shape_leng":11806.335686,"shape_area":4728279.58197,"code":"Sololá_San","codigo":"Sololá_Santa Catarina Palopó"}},{"arcs":[[-539,546,547,548,-501,-377]],"type":"Polygon","properties":{"id":"limites_municipales.160","objectid":160,"municipio":"Zaragoza","cod_dep":4,"departamen":"Chimaltenango","codigo_mun":415,"shape_leng":39869.476844,"shape_area":51878392.8306,"code":"Chimaltena","codigo":"Chimaltenango_Zaragoza"}},{"arcs":[[-544,549,-458]],"type":"Polygon","properties":{"id":"limites_municipales.161","objectid":161,"municipio":"Santa María Visitación","cod_dep":7,"departamen":"Sololá","codigo_mun":703,"shape_leng":21028.1050532,"shape_area":20751483.3725,"code":"Sololá_San","codigo":"Sololá_Santa María Visitación"}},{"arcs":[[550,551,552,553,554,-493,-373]],"type":"Polygon","properties":{"id":"limites_municipales.163","objectid":163,"municipio":"Patzún","cod_dep":4,"departamen":"Chimaltenango","codigo_mun":407,"shape_leng":62538.1375696,"shape_area":184066938.179,"code":"Chimaltena","codigo":"Chimaltenango_Patzún"}},{"arcs":[[555,556,557,558,559,-146,-448]],"type":"Polygon","properties":{"id":"limites_municipales.164","objectid":164,"municipio":"Sumpango","cod_dep":3,"departamen":"Sacatepéquez","codigo_mun":304,"shape_leng":36373.4724615,"shape_area":50499321.8115,"code":"Sacatepéqu","codigo":"Sacatepéquez_Sumpango"}},{"arcs":[[-524,-490,560,561,-536,-499]],"type":"Polygon","properties":{"id":"limites_municipales.168","objectid":168,"municipio":"Quezaltepeque","cod_dep":20,"departamen":"Chiquimula","codigo_mun":2009,"shape_leng":73184.4196153,"shape_area":244451880.531,"code":"Chiquimula","codigo":"Chiquimula_Quezaltepeque"}},{"arcs":[[562,563,564,565,566,567,-503,-485,-529]],"type":"Polygon","properties":{"id":"limites_municipales.169","objectid":169,"municipio":"Guatemala","cod_dep":1,"departamen":"Guatemala","codigo_mun":101,"shape_leng":72029.6122123,"shape_area":214717119.335,"code":"Guatemala_","codigo":"Guatemala_Guatemala"}},{"arcs":[[-466,-483,568,569,570,571,-512,-510,-413]],"type":"Polygon","properties":{"id":"limites_municipales.165","objectid":165,"municipio":"Coatepeque","cod_dep":9,"departamen":"Quetzaltenango","codigo_mun":920,"shape_leng":110351.45588,"shape_area":418696783.759,"code":"Quetzalten","codigo":"Quetzaltenango_Coatepeque"}},{"arcs":[[572,573,574,-446,-434]],"type":"Polygon","properties":{"id":"limites_municipales.166","objectid":166,"municipio":"San Pedro Sacatepéquez","cod_dep":1,"departamen":"Guatemala","codigo_mun":109,"shape_leng":40062.3175445,"shape_area":28844406.7041,"code":"Guatemala_","codigo":"Guatemala_San Pedro Sacatepéquez"}},{"arcs":[[-502,-549,575,-371]],"type":"Polygon","properties":{"id":"limites_municipales.167","objectid":167,"municipio":"Santa Cruz Balanyá","cod_dep":4,"departamen":"Chimaltenango","codigo_mun":410,"shape_leng":19814.323338,"shape_area":19797484.1711,"code":"Chimaltena","codigo":"Chimaltenango_Santa Cruz Balanyá"}},{"arcs":[[-504,-568,576,577,578,-573,-433]],"type":"Polygon","properties":{"id":"limites_municipales.170","objectid":170,"municipio":"Mixco","cod_dep":1,"departamen":"Guatemala","codigo_mun":108,"shape_leng":48697.3319647,"shape_area":90206958.4623,"code":"Guatemala_","codigo":"Guatemala_Mixco"}},{"arcs":[[-541,579,580,581,-459,-550,-543]],"type":"Polygon","properties":{"id":"limites_municipales.171","objectid":171,"municipio":"San Juan La Laguna","cod_dep":7,"departamen":"Sololá","codigo_mun":717,"shape_leng":31928.4068024,"shape_area":37166902.0364,"code":"Sololá_San","codigo":"Sololá_San Juan La Laguna"}},{"arcs":[[-520,582,583,584,-479,-473]],"type":"Polygon","properties":{"id":"limites_municipales.172","objectid":172,"municipio":"Nuevo San Carlos","cod_dep":11,"departamen":"Retalhuleu","codigo_mun":1108,"shape_leng":50936.6937448,"shape_area":86542190.3956,"code":"Retalhuleu","codigo":"Retalhuleu_Nuevo San Carlos"}},{"arcs":[[585,586,587,588,589,-147,-560]],"type":"Polygon","properties":{"id":"limites_municipales.193","objectid":193,"municipio":"Pastores","cod_dep":3,"departamen":"Sacatepéquez","codigo_mun":303,"shape_leng":28440.3949363,"shape_area":39157533.3475,"code":"Sacatepéqu","codigo":"Sacatepéquez_Pastores"}},{"arcs":[[-575,590,-556,-447]],"type":"Polygon","properties":{"id":"limites_municipales.173","objectid":173,"municipio":"Santo Domingo Xenacoj","cod_dep":3,"departamen":"Sacatepéquez","codigo_mun":305,"shape_leng":22038.4255994,"shape_area":24754889.6519,"code":"Sacatepéqu","codigo":"Sacatepéquez_Santo Domingo Xenacoj"}},{"arcs":[[-494,-555,591,592,-545]],"type":"Polygon","properties":{"id":"limites_municipales.174","objectid":174,"municipio":"San Antonio Palopó","cod_dep":7,"departamen":"Sololá","codigo_mun":712,"shape_leng":26167.55891,"shape_area":26106200.6563,"code":"Sololá_San","codigo":"Sololá_San Antonio Palopó"}},{"arcs":[[593,594,595,-507]],"type":"Polygon","properties":{"id":"limites_municipales.175","objectid":175,"municipio":"Pueblo Nuevo","cod_dep":10,"departamen":"Suchitepéquez","codigo_mun":1019,"shape_leng":25759.2550594,"shape_area":18515113.4752,"code":"Suchitepéq","codigo":"Suchitepéquez_Pueblo Nuevo"}},{"arcs":[[596,597,598,599,600,-594,601]],"type":"Polygon","properties":{"id":"limites_municipales.176","objectid":176,"municipio":"San Francisco Zapotitlán","cod_dep":10,"departamen":"Suchitepéquez","codigo_mun":1003,"shape_leng":45950.1578316,"shape_area":48898297.6497,"code":"Suchitepéq","codigo":"Suchitepéquez_San Francisco Zapotitlán"}},{"arcs":[[602,603,-461]],"type":"Polygon","properties":{"id":"limites_municipales.194","objectid":194,"municipio":"Santo Tomas La Unión","cod_dep":10,"departamen":"Suchitepéquez","codigo_mun":1017,"shape_leng":15019.6427008,"shape_area":12480401.8545,"code":"Suchitepéq","codigo":"Suchitepéquez_Santo Tomas La Unión"}},{"arcs":[[-537,-562,604,605,606,-525,-522]],"type":"Polygon","properties":{"id":"limites_municipales.177","objectid":177,"municipio":"Ipala","cod_dep":20,"departamen":"Chiquimula","codigo_mun":2011,"shape_leng":81619.6369066,"shape_area":229983598.91,"code":"Chiquimula","codigo":"Chiquimula_Ipala"}},{"arcs":[[-548,607,608,-551,-372,-576]],"type":"Polygon","properties":{"id":"limites_municipales.178","objectid":178,"municipio":"Patzicía","cod_dep":4,"departamen":"Chimaltenango","codigo_mun":409,"shape_leng":42370.5556431,"shape_area":64691470.378,"code":"Chimaltena","codigo":"Chimaltenango_Patzicía"}},{"arcs":[[609,610,-581,611]],"type":"Polygon","properties":{"id":"limites_municipales.179","objectid":179,"municipio":"San Pedro La Laguna","cod_dep":7,"departamen":"Sololá","codigo_mun":718,"shape_leng":34528.3394625,"shape_area":50645661.2901,"code":"Sololá_San","codigo":"Sololá_San Pedro La Laguna"}},{"arcs":[[612,-569,-482]],"type":"Polygon","properties":{"id":"limites_municipales.180","objectid":180,"municipio":"Flores Costa Cuca","cod_dep":9,"departamen":"Quetzaltenango","codigo_mun":922,"shape_leng":44462.9939362,"shape_area":72480818.2124,"code":"Quetzalten","codigo":"Quetzaltenango_Flores Costa Cuca"}},{"arcs":[[-596,613,614,615,-583,-519,-508]],"type":"Polygon","properties":{"id":"limites_municipales.181","objectid":181,"municipio":"San Felipe Retalhuleu","cod_dep":11,"departamen":"Retalhuleu","codigo_mun":1105,"shape_leng":49404.3138529,"shape_area":36616430.1857,"code":"Retalhuleu","codigo":"Retalhuleu_San Felipe Retalhuleu"}},{"arcs":[[-478,616,617,618,619,620,621,-527,-442]],"type":"Polygon","properties":{"id":"limites_municipales.182","objectid":182,"municipio":"Mataquescuintla","cod_dep":21,"departamen":"Jalapa","codigo_mun":2107,"shape_leng":76258.6101912,"shape_area":237782873.309,"code":"Jalapa_Mat","codigo":"Jalapa_Mataquescuintla"}},{"arcs":[[622,623,-570,-613,-481]],"type":"Polygon","properties":{"id":"limites_municipales.183","objectid":183,"municipio":"Génova","cod_dep":9,"departamen":"Quetzaltenango","codigo_mun":921,"shape_leng":76558.3181358,"shape_area":168369259.117,"code":"Quetzalten","codigo":"Quetzaltenango_Génova"}},{"arcs":[[624,625,626,627,-610,628]],"type":"Polygon","properties":{"id":"limites_municipales.184","objectid":184,"municipio":"Santiago Atitlán","cod_dep":7,"departamen":"Sololá","codigo_mun":719,"shape_leng":68051.325145,"shape_area":115882679.177,"code":"Sololá_San","codigo":"Sololá_Santiago Atitlán"}},{"arcs":[[-579,629,630,-557,-591,-574]],"type":"Polygon","properties":{"id":"limites_municipales.185","objectid":185,"municipio":"Santiago Sacatepéquez","cod_dep":3,"departamen":"Sacatepéquez","codigo_mun":306,"shape_leng":28047.8430389,"shape_area":40435718.4569,"code":"Sacatepéqu","codigo":"Sacatepéquez_Santiago Sacatepéquez"}},{"arcs":[[-585,631,-623,-480]],"type":"Polygon","properties":{"id":"limites_municipales.186","objectid":186,"municipio":"El Asintal","cod_dep":11,"departamen":"Retalhuleu","codigo_mun":1109,"shape_leng":54395.7002081,"shape_area":93672381.6146,"code":"Retalhuleu","codigo":"Retalhuleu_El Asintal"}},{"arcs":[[-424,-518,-323,-464,632,633,-598,634,-602,-506,-72,-357]],"type":"Polygon","properties":{"id":"limites_municipales.187","objectid":187,"municipio":"Nahualá","cod_dep":7,"departamen":"Sololá","codigo_mun":705,"shape_leng":119614.646705,"shape_area":186190956.405,"code":"Sololá_Nah","codigo":"Sololá_Nahualá"}},{"arcs":[[-635,-597]],"type":"Polygon","properties":{"id":"limites_municipales.188","objectid":188,"municipio":"Zunilito","cod_dep":10,"departamen":"Suchitepéquez","codigo_mun":1018,"shape_leng":19023.8675479,"shape_area":13090665.8455,"code":"Suchitepéq","codigo":"Suchitepéquez_Zunilito"}},{"arcs":[[-538,635,636,637,-608,-547]],"type":"Polygon","properties":{"id":"limites_municipales.189","objectid":189,"municipio":"San Andrés Itzapa","cod_dep":4,"departamen":"Chimaltenango","codigo_mun":413,"shape_leng":37180.2600326,"shape_area":67604482.0107,"code":"Chimaltena","codigo":"Chimaltenango_San Andrés Itzapa"}},{"arcs":[[638,-592,-554,639,640,-625]],"type":"Polygon","properties":{"id":"limites_municipales.190","objectid":190,"municipio":"San Lucas Tolimán","cod_dep":7,"departamen":"Sololá","codigo_mun":713,"shape_leng":41044.8683419,"shape_area":73651118.7171,"code":"Sololá_San","codigo":"Sololá_San Lucas Tolimán"}},{"arcs":[[-590,641,642,-636,-148]],"type":"Polygon","properties":{"id":"limites_municipales.195","objectid":195,"municipio":"Parramos","cod_dep":4,"departamen":"Chimaltenango","codigo_mun":414,"shape_leng":25724.9302691,"shape_area":29415296.6428,"code":"Chimaltena","codigo":"Chimaltenango_Parramos"}},{"arcs":[[-611,-628,643,644,645,646,647,648,-603,-460,-582]],"type":"Polygon","properties":{"id":"limites_municipales.191","objectid":191,"municipio":"Chicacao","cod_dep":10,"departamen":"Suchitepéquez","codigo_mun":1013,"shape_leng":115039.037863,"shape_area":210988276.627,"code":"Suchitepéq","codigo":"Suchitepéquez_Chicacao"}},{"arcs":[[649,650,-647]],"type":"Polygon","properties":{"id":"limites_municipales.192","objectid":192,"municipio":"San Miguel Panán","cod_dep":10,"departamen":"Suchitepéquez","codigo_mun":1011,"shape_leng":27916.2790768,"shape_area":28795370.7812,"code":"Suchitepéq","codigo":"Suchitepéquez_San Miguel Panán"}},{"arcs":[[-578,651,652,653,-630]],"type":"Polygon","properties":{"id":"limites_municipales.196","objectid":196,"municipio":"San Lucas Sacatepéquez","cod_dep":3,"departamen":"Sacatepéquez","codigo_mun":308,"shape_leng":26445.2550594,"shape_area":23261535.6796,"code":"Sacatepéqu","codigo":"Sacatepéquez_San Lucas Sacatepéquez"}},{"arcs":[[-528,-622,654,655,656,-563]],"type":"Polygon","properties":{"id":"limites_municipales.197","objectid":197,"municipio":"San José Pinula","cod_dep":1,"departamen":"Guatemala","codigo_mun":103,"shape_leng":69065.6108652,"shape_area":197674924.59,"code":"Guatemala_","codigo":"Guatemala_San José Pinula"}},{"arcs":[[657,658,-615]],"type":"Polygon","properties":{"id":"limites_municipales.198","objectid":198,"municipio":"San Martín Zapotitlán","cod_dep":11,"departamen":"Retalhuleu","codigo_mun":1104,"shape_leng":16550.6552152,"shape_area":9393351.93341,"code":"Retalhuleu","codigo":"Retalhuleu_San Martín Zapotitlán"}},{"arcs":[[-604,-649,659,660,-462]],"type":"Polygon","properties":{"id":"limites_municipales.199","objectid":199,"municipio":"San Pablo Jocopila","cod_dep":10,"departamen":"Suchitepéquez","codigo_mun":1009,"shape_leng":22134.5304984,"shape_area":26112920.5798,"code":"Suchitepéq","codigo":"Suchitepéquez_San Pablo Jocopilas"}},{"arcs":[[-654,661,662,-631]],"type":"Polygon","properties":{"id":"limites_municipales.200","objectid":200,"municipio":"San Bartolomé Milpas Altas","cod_dep":3,"departamen":"Sacatepéquez","codigo_mun":307,"shape_leng":13164.4962236,"shape_area":8345520.15679,"code":"Sacatepéqu","codigo":"Sacatepéquez_San Bartolomé Milpas Altas"}},{"arcs":[[-513,-572,663,664,665]],"type":"Polygon","properties":{"id":"limites_municipales.204","objectid":204,"municipio":"La Blanca","cod_dep":12,"departamen":"San Marcos","codigo_mun":1230,"shape_leng":56461.4176584,"shape_area":98717824.3911,"code":"San Marcos","codigo":"San Marcos_La Blanca"}},{"arcs":[[-657,666,667,-564]],"type":"Polygon","properties":{"id":"limites_municipales.201","objectid":201,"municipio":"Santa Catarina Pinula","cod_dep":1,"departamen":"Guatemala","codigo_mun":102,"shape_leng":42264.6686136,"shape_area":67244590.1191,"code":"Guatemala_","codigo":"Guatemala_Santa Catarina Pinula"}},{"arcs":[[-663,668,669,670,671,672,-587,673,-558]],"type":"Polygon","properties":{"id":"limites_municipales.202","objectid":202,"municipio":"Antigua Guatemala","cod_dep":3,"departamen":"Sacatepéquez","codigo_mun":301,"shape_leng":48307.5154288,"shape_area":68859469.1848,"code":"Sacatepéqu","codigo":"Sacatepéquez_Antigua Guatemala"}},{"arcs":[[674,675,676,-640,-553]],"type":"Polygon","properties":{"id":"limites_municipales.203","objectid":203,"municipio":"Pochuta","cod_dep":4,"departamen":"Chimaltenango","codigo_mun":408,"shape_leng":60177.6374882,"shape_area":129429403.311,"code":"Chimaltena","codigo":"Chimaltenango_Pochuta"}},{"arcs":[[677,678,679,680,-475,-439]],"type":"Polygon","properties":{"id":"limites_municipales.213","objectid":213,"municipio":"Monjas","cod_dep":21,"departamen":"Jalapa","codigo_mun":2106,"shape_leng":60225.9999284,"shape_area":148022578.531,"code":"Jalapa_Mon","codigo":"Jalapa_Monjas"}},{"arcs":[[-666,681,-514]],"type":"Polygon","properties":{"id":"limites_municipales.205","objectid":205,"municipio":"Ocós","cod_dep":12,"departamen":"San Marcos","codigo_mun":1218,"shape_leng":37513.9884636,"shape_area":53277104.7399,"code":"San Marcos","codigo":"San Marcos_Ocós"}},{"arcs":[[-674,-586,-559]],"type":"Polygon","properties":{"id":"limites_municipales.206","objectid":206,"municipio":"Jocotenango","cod_dep":3,"departamen":"Sacatepéquez","codigo_mun":302,"shape_leng":14736.216901,"shape_area":9947135.80262,"code":"Sacatepéqu","codigo":"Sacatepéquez_Jocotenango"}},{"arcs":[[682,683,684,685,-600]],"type":"Polygon","properties":{"id":"limites_municipales.207","objectid":207,"municipio":"Cuyotenango","cod_dep":10,"departamen":"Suchitepéquez","codigo_mun":1002,"shape_leng":67770.299844,"shape_area":88653301.5479,"code":"Suchitepéq","codigo":"Suchitepéquez_Cuyotenango"}},{"arcs":[[-685,686,687]],"type":"Polygon","properties":{"id":"limites_municipales.208","objectid":208,"municipio":"La Máquina","cod_dep":10,"departamen":"Suchitepéquez","codigo_mun":1021,"shape_leng":98385.7476337,"shape_area":146595356.777,"code":"Suchitepéq","codigo":"Suchitepéquez_La Máquina"}},{"arcs":[[-609,-638,688,689,690,-675,-552]],"type":"Polygon","properties":{"id":"limites_municipales.209","objectid":209,"municipio":"Acatenango","cod_dep":4,"departamen":"Chimaltenango","codigo_mun":411,"shape_leng":58613.5232466,"shape_area":130881087.441,"code":"Chimaltena","codigo":"Chimaltenango_Acatenango"}},{"arcs":[[-526,-607,691,692,-678,-438]],"type":"Polygon","properties":{"id":"limites_municipales.210","objectid":210,"municipio":"San Manuel Chaparrón","cod_dep":21,"departamen":"Jalapa","codigo_mun":2104,"shape_leng":59134.7734084,"shape_area":128704958.121,"code":"Jalapa_San","codigo":"Jalapa_San Manuel Chaparrón"}},{"arcs":[[693,694,-616]],"type":"Polygon","properties":{"id":"limites_municipales.214","objectid":214,"municipio":"San Sebastián","cod_dep":11,"departamen":"Retalhuleu","codigo_mun":1102,"shape_leng":22032.4344686,"shape_area":17719577.3062,"code":"Retalhuleu","codigo":"Retalhuleu_San Sebastián"}},{"arcs":[[695,696,697,-566]],"type":"Polygon","properties":{"id":"limites_municipales.233","objectid":233,"municipio":"Petapa","cod_dep":1,"departamen":"Guatemala","codigo_mun":117,"shape_leng":21714.5104324,"shape_area":23762595.9723,"code":"Guatemala_","codigo":"Guatemala_Petapa"}},{"arcs":[[698,699,-694,-659]],"type":"Polygon","properties":{"id":"limites_municipales.211","objectid":211,"municipio":"Santa Cruz Muluá","cod_dep":11,"departamen":"Retalhuleu","codigo_mun":1103,"shape_leng":84613.6678511,"shape_area":128201255.174,"code":"Retalhuleu","codigo":"Retalhuleu_Santa Cruz Muluá"}},{"arcs":[[-661,700,-90,701,-633,-463]],"type":"Polygon","properties":{"id":"limites_municipales.212","objectid":212,"municipio":"Samayac","cod_dep":10,"departamen":"Suchitepéquez","codigo_mun":1008,"shape_leng":27766.5694911,"shape_area":25824165.3403,"code":"Suchitepéq","codigo":"Suchitepéquez_Samayac"}},{"arcs":[[-489,702,703,-605,-561]],"type":"Polygon","properties":{"id":"limites_municipales.215","objectid":215,"municipio":"Concepción Las Minas","cod_dep":20,"departamen":"Chiquimula","codigo_mun":2008,"shape_leng":85868.9225891,"shape_area":214795119.038,"code":"Chiquimula","codigo":"Chiquimula_Concepción Las Minas"}},{"arcs":[[704,705,706,707,-644,-627]],"type":"Polygon","properties":{"id":"limites_municipales.221","objectid":221,"municipio":"Santa Bárbara","cod_dep":10,"departamen":"Suchitepéquez","codigo_mun":1015,"shape_leng":73784.7987093,"shape_area":177013626.427,"code":"Suchitepéq","codigo":"Suchitepéquez_Santa Bárbara"}},{"arcs":[[-702,-89,708,709,710,-683,-599,-634]],"type":"Polygon","properties":{"id":"limites_municipales.216","objectid":216,"municipio":"Mazatenango","cod_dep":10,"departamen":"Suchitepéquez","codigo_mun":1001,"shape_leng":61777.9701587,"shape_area":65251706.1734,"code":"Suchitepéq","codigo":"Suchitepéquez_Mazatenango"}},{"arcs":[[711,-710]],"type":"Polygon","properties":{"id":"limites_municipales.217","objectid":217,"municipio":"San Gabriel","cod_dep":10,"departamen":"Suchitepéquez","codigo_mun":1012,"shape_leng":10236.3164007,"shape_area":6600983.44649,"code":"Suchitepéq","codigo":"Suchitepéquez_San Gabriel"}},{"arcs":[[-577,-567,-698,712,713,714,715,-652]],"type":"Polygon","properties":{"id":"limites_municipales.218","objectid":218,"municipio":"Villa Nueva","cod_dep":1,"departamen":"Guatemala","codigo_mun":115,"shape_leng":47233.2654509,"shape_area":88952834.5987,"code":"Guatemala_","codigo":"Guatemala_Villa Nueva"}},{"arcs":[[-653,-716,716,-669,-662]],"type":"Polygon","properties":{"id":"limites_municipales.219","objectid":219,"municipio":"Santa Lucía Milpas Altas","cod_dep":3,"departamen":"Sacatepéquez","codigo_mun":309,"shape_leng":14582.3672837,"shape_area":9190550.13747,"code":"Sacatepéqu","codigo":"Sacatepéquez_Santa Lucía Milpas Altas"}},{"arcs":[[-695,-700,717,718,719,720,-664,-571,-624,-632,-584]],"type":"Polygon","properties":{"id":"limites_municipales.220","objectid":220,"municipio":"Retalhuleu","cod_dep":11,"departamen":"Retalhuleu","codigo_mun":1101,"shape_leng":207814.803657,"shape_area":808681552.264,"code":"Retalhuleu","codigo":"Retalhuleu_Retalhuleu"}},{"arcs":[[-704,721,722,723,-692,-606]],"type":"Polygon","properties":{"id":"limites_municipales.222","objectid":222,"municipio":"Agua Blanca","cod_dep":22,"departamen":"Jutiapa","codigo_mun":2204,"shape_leng":105962.708922,"shape_area":238588651.942,"code":"Jutiapa_Ag","codigo":"Jutiapa_Agua Blanca"}},{"arcs":[[-589,724,725,-642]],"type":"Polygon","properties":{"id":"limites_municipales.223","objectid":223,"municipio":"Santa Catarina Barahona","cod_dep":3,"departamen":"Sacatepéquez","codigo_mun":316,"shape_leng":14219.2048177,"shape_area":10541018.1014,"code":"Sacatepéqu","codigo":"Sacatepéquez_Santa Catarina Barahona"}},{"arcs":[[-651,726,727,-87,-701,-660,-648]],"type":"Polygon","properties":{"id":"limites_municipales.224","objectid":224,"municipio":"San Antonio Suchitepéquez","cod_dep":10,"departamen":"Suchitepéquez","codigo_mun":1010,"shape_leng":43458.1867988,"shape_area":75008961.5791,"code":"Suchitepéq","codigo":"Suchitepéquez_San Antonio Suchitepéquez"}},{"arcs":[[-726,728,729,730,-689,-637,-643]],"type":"Polygon","properties":{"id":"limites_municipales.227","objectid":227,"municipio":"San Miguel Dueñas","cod_dep":3,"departamen":"Sacatepéquez","codigo_mun":313,"shape_leng":30836.9593966,"shape_area":44737633.0505,"code":"Sacatepéqu","codigo":"Sacatepéquez_San Miguel Dueñas"}},{"arcs":[[-626,-641,-677,731,732,733,734,735,-707,736,-705]],"type":"Polygon","properties":{"id":"limites_municipales.225","objectid":225,"municipio":"Patulul","cod_dep":10,"departamen":"Suchitepéquez","codigo_mun":1014,"shape_leng":132072.058363,"shape_area":338743344.247,"code":"Suchitepéq","codigo":"Suchitepéquez_Patulul"}},{"arcs":[[-673,737,-729,-725,-588]],"type":"Polygon","properties":{"id":"limites_municipales.226","objectid":226,"municipio":"San Antonio Aguas Calientes","cod_dep":3,"departamen":"Sacatepéquez","codigo_mun":315,"shape_leng":12060.4229125,"shape_area":5146184.76692,"code":"Sacatepéqu","codigo":"Sacatepéquez_San Antonio Aguas Calientes"}},{"arcs":[[738,739,740,741,742,743,744,-696,-565,-668]],"type":"Polygon","properties":{"id":"limites_municipales.228","objectid":228,"municipio":"Villa Canales","cod_dep":1,"departamen":"Guatemala","codigo_mun":116,"shape_leng":109857.914811,"shape_area":279625183.419,"code":"Guatemala_","codigo":"Guatemala_Villa Canales"}},{"arcs":[[-715,745,746,-670,-717]],"type":"Polygon","properties":{"id":"limites_municipales.229","objectid":229,"municipio":"Magdalena Milpas Altas","cod_dep":3,"departamen":"Sacatepéquez","codigo_mun":310,"shape_leng":15938.8880474,"shape_area":14556109.8947,"code":"Sacatepéqu","codigo":"Sacatepéquez_Magdalena Milpas Altas"}},{"arcs":[[-672,747,-730,-738]],"type":"Polygon","properties":{"id":"limites_municipales.230","objectid":230,"municipio":"Ciudad Vieja","cod_dep":3,"departamen":"Sacatepéquez","codigo_mun":312,"shape_leng":31136.6136957,"shape_area":35710022.9797,"code":"Sacatepéqu","codigo":"Sacatepéquez_Ciudad Vieja"}},{"arcs":[[748,749,750,-739,-667,-656]],"type":"Polygon","properties":{"id":"limites_municipales.231","objectid":231,"municipio":"Fraijanes","cod_dep":1,"departamen":"Guatemala","codigo_mun":113,"shape_leng":58136.3995767,"shape_area":114995876.769,"code":"Guatemala_","codigo":"Guatemala_Fraijanes"}},{"arcs":[[-724,751,752,753,-679,-693]],"type":"Polygon","properties":{"id":"limites_municipales.234","objectid":234,"municipio":"Santa Catarina Mita","cod_dep":22,"departamen":"Jutiapa","codigo_mun":2203,"shape_leng":86153.0642197,"shape_area":202100564.797,"code":"Jutiapa_Sa","codigo":"Jutiapa_Santa Catarina Mita"}},{"arcs":[[754,755,756,-617,-477]],"type":"Polygon","properties":{"id":"limites_municipales.235","objectid":235,"municipio":"San Carlos Alzatate","cod_dep":21,"departamen":"Jalapa","codigo_mun":2105,"shape_leng":40633.1474281,"shape_area":89756107.5469,"code":"Jalapa_San","codigo":"Jalapa_San Carlos Alzatate"}},{"arcs":[[757,-744,758,759,760,-746,-714]],"type":"Polygon","properties":{"id":"limites_municipales.236","objectid":236,"municipio":"Amatitlán","cod_dep":1,"departamen":"Guatemala","codigo_mun":114,"shape_leng":50915.014666,"shape_area":100834189.103,"code":"Guatemala_","codigo":"Guatemala_Amatitlán"}},{"arcs":[[-747,-761,761,-671]],"type":"Polygon","properties":{"id":"limites_municipales.237","objectid":237,"municipio":"Santa María de Jesús","cod_dep":3,"departamen":"Sacatepéquez","codigo_mun":311,"shape_leng":35246.9183932,"shape_area":60772832.9931,"code":"Sacatepéqu","codigo":"Sacatepéquez_Santa María de Jesús"}},{"arcs":[[762,763,764,765,-732,-676,-691]],"type":"Polygon","properties":{"id":"limites_municipales.238","objectid":238,"municipio":"Yepocapa","cod_dep":4,"departamen":"Chimaltenango","codigo_mun":412,"shape_leng":85332.4911267,"shape_area":205322514.748,"code":"Chimaltena","codigo":"Chimaltenango_Yepocapa"}},{"arcs":[[-621,766,767,-749,-655]],"type":"Polygon","properties":{"id":"limites_municipales.240","objectid":240,"municipio":"Santa Rosa de Lima","cod_dep":6,"departamen":"Santa Rosa","codigo_mun":603,"shape_leng":58060.8967342,"shape_area":133978681.487,"code":"Santa Rosa","codigo":"Santa Rosa_Santa Rosa de Lima"}},{"arcs":[[-748,768,-763,-690,-731]],"type":"Polygon","properties":{"id":"limites_municipales.241","objectid":241,"municipio":"Alotenango","cod_dep":3,"departamen":"Sacatepéquez","codigo_mun":314,"shape_leng":45520.3502121,"shape_area":90061187.0732,"code":"Sacatepéqu","codigo":"Sacatepéquez_Alotenango"}},{"arcs":[[-728,769,770,771,772,-709,-88]],"type":"Polygon","properties":{"id":"limites_municipales.239","objectid":239,"municipio":"Santo Domingo Suchitepéquez","cod_dep":10,"departamen":"Suchitepéquez","codigo_mun":1006,"shape_leng":154717.811613,"shape_area":236091206.602,"code":"Suchitepéq","codigo":"Suchitepéquez_Santo Domingo Suchitepéquez"}},{"arcs":[[-757,773,-618]],"type":"Polygon","properties":{"id":"limites_municipales.242","objectid":242,"municipio":"San Rafael Las Flores","cod_dep":6,"departamen":"Santa Rosa","codigo_mun":605,"shape_leng":42810.1622897,"shape_area":85068768.6758,"code":"Santa Rosa","codigo":"Santa Rosa_San Rafael Las Flores"}},{"arcs":[[-774,-756,774,775,776,777,778,-619]],"type":"Polygon","properties":{"id":"limites_municipales.244","objectid":244,"municipio":"Casillas","cod_dep":6,"departamen":"Santa Rosa","codigo_mun":604,"shape_leng":100364.070337,"shape_area":204318973.687,"code":"Santa Rosa","codigo":"Santa Rosa_Casillas"}},{"arcs":[[-620,-779,779,780,781,-767]],"type":"Polygon","properties":{"id":"limites_municipales.245","objectid":245,"municipio":"Nueva Santa Rosa","cod_dep":6,"departamen":"Santa Rosa","codigo_mun":614,"shape_leng":67633.2784976,"shape_area":131920763.278,"code":"Santa Rosa","codigo":"Santa Rosa_Nueva Santa Rosa"}},{"arcs":[[-760,782,783,-762]],"type":"Polygon","properties":{"id":"limites_municipales.253","objectid":253,"municipio":"Palín","cod_dep":5,"departamen":"Escuintla","codigo_mun":511,"shape_leng":59209.6096532,"shape_area":110941364.732,"code":"Escuintla_","codigo":"Escuintla_Palín"}},{"arcs":[[-773,784,785,-687,-684,-711,-712]],"type":"Polygon","properties":{"id":"limites_municipales.243","objectid":243,"municipio":"San Lorenzo","cod_dep":10,"departamen":"Suchitepéquez","codigo_mun":1007,"shape_leng":142087.674346,"shape_area":286565784.888,"code":"Suchitepéq","codigo":"Suchitepéquez_San Lorenzo"}},{"arcs":[[-727,-650,-646,786,787,-770]],"type":"Polygon","properties":{"id":"limites_municipales.246","objectid":246,"municipio":"San José El Ídolo","cod_dep":10,"departamen":"Suchitepéquez","codigo_mun":1005,"shape_leng":96609.8528086,"shape_area":137718912.147,"code":"Suchitepéq","codigo":"Suchitepéquez_San José El Ídolo"}},{"arcs":[[-754,788,-680]],"type":"Polygon","properties":{"id":"limites_municipales.247","objectid":247,"municipio":"El Progreso","cod_dep":22,"departamen":"Jutiapa","codigo_mun":2202,"shape_leng":58385.3068312,"shape_area":99422306.2813,"code":"Jutiapa_El","codigo":"Jutiapa_El Progreso"}},{"arcs":[[-706,-737]],"type":"Polygon","properties":{"id":"limites_municipales.250","objectid":250,"municipio":"San Juan Bautista","cod_dep":10,"departamen":"Suchitepéquez","codigo_mun":1016,"shape_leng":33787.6036204,"shape_area":34601856.7764,"code":"Suchitepéq","codigo":"Suchitepéquez_San Juan Bautista"}},{"arcs":[[-708,-736,789,-787,-645]],"type":"Polygon","properties":{"id":"limites_municipales.248","objectid":248,"municipio":"Río Bravo","cod_dep":10,"departamen":"Suchitepéquez","codigo_mun":1020,"shape_leng":82669.8348463,"shape_area":158223575.371,"code":"Suchitepéq","codigo":"Suchitepéquez_Río Bravo"}},{"arcs":[[-789,-753,790,791,792,793,794,795,-775,-755,-476,-681]],"type":"Polygon","properties":{"id":"limites_municipales.249","objectid":249,"municipio":"Jutiapa","cod_dep":22,"departamen":"Jutiapa","codigo_mun":2201,"shape_leng":158234.46557,"shape_area":624315930.59,"code":"Jutiapa_Ju","codigo":"Jutiapa_Jutiapa"}},{"arcs":[[-769,-784,796,797,798,799,800,-764]],"type":"Polygon","properties":{"id":"limites_municipales.251","objectid":251,"municipio":"Escuintla","cod_dep":5,"departamen":"Escuintla","codigo_mun":501,"shape_leng":168054.970815,"shape_area":546150186.724,"code":"Escuintla_","codigo":"Escuintla_Escuintla"}},{"arcs":[[-801,801,802,-765]],"type":"Polygon","properties":{"id":"limites_municipales.252","objectid":252,"municipio":"Siquinalá","cod_dep":5,"departamen":"Escuintla","codigo_mun":504,"shape_leng":74240.2562234,"shape_area":184349336.779,"code":"Escuintla_","codigo":"Escuintla_Siquinalá"}},{"arcs":[[803,804,805,-791,-752,-723]],"type":"Polygon","properties":{"id":"limites_municipales.254","objectid":254,"municipio":"Asunción Mita","cod_dep":22,"departamen":"Jutiapa","codigo_mun":2205,"shape_leng":117971.474664,"shape_area":502484786.045,"code":"Jutiapa_As","codigo":"Jutiapa_Asunción Mita"}},{"arcs":[[-759,-743,806,-797,-783]],"type":"Polygon","properties":{"id":"limites_municipales.257","objectid":257,"municipio":"San Vicente Pacaya","cod_dep":5,"departamen":"Escuintla","codigo_mun":512,"shape_leng":67859.3155115,"shape_area":149960258.804,"code":"Escuintla_","codigo":"Escuintla_San Vicente Pacaya"}},{"arcs":[[-796,807,808,-776]],"type":"Polygon","properties":{"id":"limites_municipales.260","objectid":260,"municipio":"Quesada","cod_dep":22,"departamen":"Jutiapa","codigo_mun":2217,"shape_leng":61783.950632,"shape_area":139745976.398,"code":"Jutiapa_Qu","codigo":"Jutiapa_Quesada"}},{"arcs":[[-803,809,810,811,-733,-766]],"type":"Polygon","properties":{"id":"limites_municipales.255","objectid":255,"municipio":"Santa Lucia Cotzulmalguapa","cod_dep":5,"departamen":"Escuintla","codigo_mun":502,"shape_leng":117419.802073,"shape_area":454571602.978,"code":"Escuintla_","codigo":"Escuintla_Santa Lucía Cotzulmalguapa"}},{"arcs":[[-782,812,-750,-768]],"type":"Polygon","properties":{"id":"limites_municipales.256","objectid":256,"municipio":"Santa Cruz Naranjo","cod_dep":6,"departamen":"Santa Rosa","codigo_mun":612,"shape_leng":40376.3485349,"shape_area":58423756.4875,"code":"Santa Rosa","codigo":"Santa Rosa_Santa Cruz Naranjo"}},{"arcs":[[813,-720]],"type":"Polygon","properties":{"id":"limites_municipales.258","objectid":258,"municipio":"Champerico","cod_dep":11,"departamen":"Retalhuleu","codigo_mun":1107,"shape_leng":86625.2559237,"shape_area":328113652.058,"code":"Retalhuleu","codigo":"Retalhuleu_Champerico"}},{"arcs":[[-781,814,815,-740,-751,-813]],"type":"Polygon","properties":{"id":"limites_municipales.259","objectid":259,"municipio":"Barberena","cod_dep":6,"departamen":"Santa Rosa","codigo_mun":602,"shape_leng":100487.954291,"shape_area":224320806.551,"code":"Santa Rosa","codigo":"Santa Rosa_Barberena"}},{"arcs":[[-809,816,817,818,-777]],"type":"Polygon","properties":{"id":"limites_municipales.261","objectid":261,"municipio":"San José Acatempa","cod_dep":22,"departamen":"Jutiapa","codigo_mun":2216,"shape_leng":55429.1944141,"shape_area":112359395.344,"code":"Jutiapa_Sa","codigo":"Jutiapa_San José Acatempa"}},{"arcs":[[-778,-819,819,820,821,822,-815,-780]],"type":"Polygon","properties":{"id":"limites_municipales.262","objectid":262,"municipio":"Cuilapa","cod_dep":6,"departamen":"Santa Rosa","codigo_mun":601,"shape_leng":99048.469721,"shape_area":213568722.81,"code":"Santa Rosa","codigo":"Santa Rosa_Cuilapa"}},{"arcs":[[-806,823,824,825,826,-792]],"type":"Polygon","properties":{"id":"limites_municipales.269","objectid":269,"municipio":"Yupiltepeque","cod_dep":22,"departamen":"Jutiapa","codigo_mun":2206,"shape_leng":43559.4686195,"shape_area":55539605.8203,"code":"Jutiapa_Yu","codigo":"Jutiapa_Yupiltepeque"}},{"arcs":[[827,828,829,830]],"type":"Polygon","properties":{"id":"limites_municipales.294","objectid":294,"municipio":"San Rafael La Independencia","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1314,"shape_leng":36027.4919969,"shape_area":56578495.0668,"code":"Huehuetena","codigo":"Huehuetenango_San Rafael La Independencia"}},{"arcs":[[831,-7,-51,832,833,834]],"type":"Polygon","properties":{"id":"limites_municipales.295","objectid":295,"municipio":"Barillas","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1326,"shape_leng":176903.048726,"shape_area":1165267517.18,"code":"Huehuetena","codigo":"Huehuetenango_Barillas"}},{"arcs":[[-823,835,836,837,838,-741,-816]],"type":"Polygon","properties":{"id":"limites_municipales.263","objectid":263,"municipio":"Pueblo Nuevo Viñas","cod_dep":6,"departamen":"Santa Rosa","codigo_mun":613,"shape_leng":115110.143078,"shape_area":250323755.648,"code":"Santa Rosa","codigo":"Santa Rosa_Pueblo Nuevo Viñas"}},{"arcs":[[839,840,841,842,-794]],"type":"Polygon","properties":{"id":"limites_municipales.274","objectid":274,"municipio":"Comapa","cod_dep":22,"departamen":"Jutiapa","codigo_mun":2211,"shape_leng":77191.3379868,"shape_area":173727201.316,"code":"Jutiapa_Co","codigo":"Jutiapa_Comapa"}},{"arcs":[[-735,843,844,-771,-788,-790]],"type":"Polygon","properties":{"id":"limites_municipales.264","objectid":264,"municipio":"Tiquisate","cod_dep":5,"departamen":"Escuintla","codigo_mun":506,"shape_leng":131505.125879,"shape_area":471543068.438,"code":"Escuintla_","codigo":"Escuintla_Tiquisate"}},{"arcs":[[845,-840,-793,-827]],"type":"Polygon","properties":{"id":"limites_municipales.275","objectid":275,"municipio":"El Adelanto","cod_dep":22,"departamen":"Jutiapa","codigo_mun":2209,"shape_leng":27182.6205234,"shape_area":29729014.5625,"code":"Jutiapa_El","codigo":"Jutiapa_El Adelanto"}},{"arcs":[[-812,846,847,848,849,-844,-734]],"type":"Polygon","properties":{"id":"limites_municipales.265","objectid":265,"municipio":"Nueva Concepción","cod_dep":5,"departamen":"Escuintla","codigo_mun":513,"shape_leng":119390.681645,"shape_area":523951962.908,"code":"Escuintla_","codigo":"Escuintla_Nueva Concepción"}},{"arcs":[[850,851,-825,852]],"type":"Polygon","properties":{"id":"limites_municipales.280","objectid":280,"municipio":"Jerez","cod_dep":22,"departamen":"Jutiapa","codigo_mun":2208,"shape_leng":37284.2529241,"shape_area":52258744.9521,"code":"Jutiapa_Je","codigo":"Jutiapa_Jerez"}},{"arcs":[[-742,-839,853,-286,854,-798,-807]],"type":"Polygon","properties":{"id":"limites_municipales.266","objectid":266,"municipio":"Guanagazapa","cod_dep":5,"departamen":"Escuintla","codigo_mun":508,"shape_leng":107284.037657,"shape_area":227349241.57,"code":"Escuintla_","codigo":"Escuintla_Guanagazapa"}},{"arcs":[[-795,-843,855,856,857,858,-817,-808]],"type":"Polygon","properties":{"id":"limites_municipales.270","objectid":270,"municipio":"Jalpatagua","cod_dep":22,"departamen":"Jutiapa","codigo_mun":2212,"shape_leng":104693.642313,"shape_area":228580798.778,"code":"Jutiapa_Ja","codigo":"Jutiapa_Jalpatagua"}},{"arcs":[[-800,859,860,861,862,863,864,-810,-802]],"type":"Polygon","properties":{"id":"limites_municipales.267","objectid":267,"municipio":"La Democracia","cod_dep":5,"departamen":"Escuintla","codigo_mun":503,"shape_leng":109939.326761,"shape_area":289241880.234,"code":"Escuintla_","codigo":"Escuintla_La Democracia"}},{"arcs":[[-859,865,866,867,868,869,-820,-818]],"type":"Polygon","properties":{"id":"limites_municipales.268","objectid":268,"municipio":"Oratorio","cod_dep":6,"departamen":"Santa Rosa","codigo_mun":606,"shape_leng":117362.913976,"shape_area":310058797.191,"code":"Santa Rosa","codigo":"Santa Rosa_Oratorio"}},{"arcs":[[-855,-285,870,-860,-799]],"type":"Polygon","properties":{"id":"limites_municipales.271","objectid":271,"municipio":"Masagua","cod_dep":5,"departamen":"Escuintla","codigo_mun":505,"shape_leng":107490.017176,"shape_area":473250573.329,"code":"Escuintla_","codigo":"Escuintla_Masagua"}},{"arcs":[[871,-853,-824,-805]],"type":"Polygon","properties":{"id":"limites_municipales.272","objectid":272,"municipio":"Atescatempa","cod_dep":22,"departamen":"Jutiapa","codigo_mun":2207,"shape_leng":40016.6449866,"shape_area":85547018.2031,"code":"Jutiapa_At","codigo":"Jutiapa_Atescatempa"}},{"arcs":[[-870,872,873,-821]],"type":"Polygon","properties":{"id":"limites_municipales.273","objectid":273,"municipio":"Santa María Ixhuatán","cod_dep":6,"departamen":"Santa Rosa","codigo_mun":610,"shape_leng":72095.2284788,"shape_area":164614028.447,"code":"Santa Rosa","codigo":"Santa Rosa_Santa María Ixhuatán"}},{"arcs":[[874,875,-282,-854,-838]],"type":"Polygon","properties":{"id":"limites_municipales.276","objectid":276,"municipio":"Taxisco","cod_dep":6,"departamen":"Santa Rosa","codigo_mun":609,"shape_leng":134260.379391,"shape_area":639688984.952,"code":"Santa Rosa","codigo":"Santa Rosa_Taxisco"}},{"arcs":[[-837,876,877,-875]],"type":"Polygon","properties":{"id":"limites_municipales.281","objectid":281,"municipio":"Guazacapán","cod_dep":6,"departamen":"Santa Rosa","codigo_mun":611,"shape_leng":87326.2466286,"shape_area":109471180.852,"code":"Santa Rosa","codigo":"Santa Rosa_Guazacapán"}},{"arcs":[[-869,878,-873]],"type":"Polygon","properties":{"id":"limites_municipales.282","objectid":282,"municipio":"San Juan Tecuaco","cod_dep":6,"departamen":"Santa Rosa","codigo_mun":607,"shape_leng":28451.058182,"shape_area":33617643.7956,"code":"Santa Rosa","codigo":"Santa Rosa_San Juan Tecuaco"}},{"arcs":[[879,880,881,-847,-811,-865]],"type":"Polygon","properties":{"id":"limites_municipales.277","objectid":277,"municipio":"La Gomera","cod_dep":5,"departamen":"Escuintla","codigo_mun":507,"shape_leng":118498.921175,"shape_area":515538176.453,"code":"Escuintla_","codigo":"Escuintla_La Gomera"}},{"arcs":[[882,883,-857]],"type":"Polygon","properties":{"id":"limites_municipales.283","objectid":283,"municipio":"Conguaco","cod_dep":22,"departamen":"Jutiapa","codigo_mun":2213,"shape_leng":52878.6152329,"shape_area":132193612.261,"code":"Jutiapa_Co","codigo":"Jutiapa_Conguaco"}},{"arcs":[[-822,-874,-879,-868,884,885,-877,-836]],"type":"Polygon","properties":{"id":"limites_municipales.278","objectid":278,"municipio":"Chiquimulilla","cod_dep":6,"departamen":"Santa Rosa","codigo_mun":608,"shape_leng":158855.763442,"shape_area":599939397.828,"code":"Santa Rosa","codigo":"Santa Rosa_Chiquimulilla"}},{"arcs":[[-826,-852,886,-841,-846]],"type":"Polygon","properties":{"id":"limites_municipales.279","objectid":279,"municipio":"Zapotitlán","cod_dep":22,"departamen":"Jutiapa","codigo_mun":2210,"shape_leng":57075.1303213,"shape_area":78483463.9997,"code":"Jutiapa_Za","codigo":"Jutiapa_Zapotitlán"}},{"arcs":[[-858,-884,887,888,-866]],"type":"Polygon","properties":{"id":"limites_municipales.284","objectid":284,"municipio":"Moyuta","cod_dep":22,"departamen":"Jutiapa","codigo_mun":2214,"shape_leng":123621.332306,"shape_area":412291849.058,"code":"Jutiapa_Mo","codigo":"Jutiapa_Moyuta"}},{"arcs":[[-284,889,890,891,-861,-871]],"type":"Polygon","properties":{"id":"limites_municipales.285","objectid":285,"municipio":"San José","cod_dep":5,"departamen":"Escuintla","codigo_mun":509,"shape_leng":81028.2058949,"shape_area":217676064.551,"code":"Escuintla_","codigo":"Escuintla_San José"}},{"arcs":[[-889,892,-885,-867]],"type":"Polygon","properties":{"id":"limites_municipales.287","objectid":287,"municipio":"Pasaco","cod_dep":22,"departamen":"Jutiapa","codigo_mun":2215,"shape_leng":86755.7473503,"shape_area":148796342.909,"code":"Jutiapa_Pa","codigo":"Jutiapa_Pasaco"}},{"arcs":[[-86,-227,-159,-111,-57]],"type":"Polygon","properties":{"id":"limites_municipales.288","objectid":288,"municipio":"Santa Catalina la Tinta","cod_dep":16,"departamen":"Alta Verapaz","codigo_mun":1616,"shape_leng":86877.4460794,"shape_area":197243775.535,"code":"Alta Verap","codigo":"Alta Verapaz_Santa Catalina la Tinta"}},{"arcs":[[893,894,895,896,897,898]],"type":"Polygon","properties":{"id":"limites_municipales.303","objectid":303,"municipio":"San Sebastián Huehuetenango","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1320,"shape_leng":44470.7995671,"shape_area":90354767.669,"code":"Huehuetena","codigo":"Huehuetenango_San Sebastián Huehuetenango"}},{"arcs":[[899,900,901,-55,-8,-2]],"type":"Polygon","properties":{"id":"limites_municipales.289","objectid":289,"municipio":"Chisec","cod_dep":16,"departamen":"Alta Verapaz","codigo_mun":1613,"shape_leng":233233.478898,"shape_area":1098633089.06,"code":"Alta Verap","codigo":"Alta Verapaz_Chisec"}},{"arcs":[[-44,-35,-52,-902,902,903,904]],"type":"Polygon","properties":{"id":"limites_municipales.290","objectid":290,"municipio":"Fray Bartolomé de las Casas","cod_dep":16,"departamen":"Alta Verapaz","codigo_mun":1615,"shape_leng":275385.324671,"shape_area":1212975415.48,"code":"Alta Verap","codigo":"Alta Verapaz_Fray Bartolomé de las Casas"}},{"arcs":[[-897,905,906,907,908]],"type":"Polygon","properties":{"id":"limites_municipales.304","objectid":304,"municipio":"San Rafael Pétzal","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1328,"shape_leng":25607.6439894,"shape_area":25173338.2697,"code":"Huehuetena","codigo":"Huehuetenango_San Rafael Pétzal"}},{"arcs":[[-903,-901,909]],"type":"Polygon","properties":{"id":"limites_municipales.291","objectid":291,"municipio":"Raxruhá","cod_dep":16,"departamen":"Alta Verapaz","codigo_mun":1617,"shape_leng":174803.481708,"shape_area":602655190.239,"code":"Alta Verap","codigo":"Alta Verapaz_Raxruhá"}},{"arcs":[[-601,-686,-688,-786,910,-718,-699,-658,-614,-595]],"type":"Polygon","properties":{"id":"limites_municipales.292","objectid":292,"municipio":"San Andrés Villa Seca","cod_dep":11,"departamen":"Retalhuleu","codigo_mun":1106,"shape_leng":161152.6671,"shape_area":435130570.333,"code":"Retalhuleu","codigo":"Retalhuleu_San Andrés Villa Seca"}},{"arcs":[[-834,911,-828,912,913,914]],"type":"Polygon","properties":{"id":"limites_municipales.293","objectid":293,"municipio":"Santa Eulalia","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1317,"shape_leng":113468.554071,"shape_area":250637080.848,"code":"Huehuetena","codigo":"Huehuetenango_Santa Eulalia"}},{"arcs":[[915,-835,-915,916,917]],"type":"Polygon","properties":{"id":"limites_municipales.296","objectid":296,"municipio":"San Mateo Ixtatán","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1318,"shape_leng":114804.625815,"shape_area":583364945.347,"code":"Huehuetena","codigo":"Huehuetenango_San Mateo Ixtatán"}},{"arcs":[[-833,-50,918,-829,-912]],"type":"Polygon","properties":{"id":"limites_municipales.297","objectid":297,"municipio":"San Pedro Soloma","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1308,"shape_leng":106192.436941,"shape_area":262969536.7,"code":"Huehuetena","codigo":"Huehuetenango_San Pedro Soloma"}},{"arcs":[[-898,-909,919,920,921]],"type":"Polygon","properties":{"id":"limites_municipales.305","objectid":305,"municipio":"San Juan Atitán","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1316,"shape_leng":37802.9042925,"shape_area":57966584.7922,"code":"Huehuetena","codigo":"Huehuetenango_San Juan Atitán"}},{"arcs":[[922,923,924,925,926,927,928,929,930,931]],"type":"Polygon","properties":{"id":"limites_municipales.298","objectid":298,"municipio":"San Antonio Huista","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1324,"shape_leng":44165.4271691,"shape_area":64962812.652,"code":"Huehuetena","codigo":"Huehuetenango_San Antonio Huista"}},{"arcs":[[-189,-238,-174,-170,-137,932,933]],"type":"Polygon","properties":{"id":"limites_municipales.301","objectid":301,"municipio":"Malacatancito","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1303,"shape_leng":87540.2828552,"shape_area":256805188.775,"code":"Huehuetena","codigo":"Huehuetenango_Malacatancito"}},{"arcs":[[-47,-94,-102,-155,934,935]],"type":"Polygon","properties":{"id":"limites_municipales.299","objectid":299,"municipio":"Aguacatán","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1327,"shape_leng":100405.106112,"shape_area":325092362.968,"code":"Huehuetena","codigo":"Huehuetenango_Aguacatán"}},{"arcs":[[-896,936,-933,-136,937,-906]],"type":"Polygon","properties":{"id":"limites_municipales.302","objectid":302,"municipio":"Santa Bárbara","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1310,"shape_leng":48545.2201388,"shape_area":150081224.798,"code":"Huehuetena","codigo":"Huehuetenango_Santa Bárbara"}},{"arcs":[[-164,-104,938]],"type":"Polygon","properties":{"id":"limites_municipales.306","objectid":306,"municipio":"Tectitán","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1321,"shape_leng":37379.3731723,"shape_area":72602491.4756,"code":"Huehuetena","codigo":"Huehuetenango_Tectitán"}},{"arcs":[[939,-935,-154,-190,-934,-937,-895]],"type":"Polygon","properties":{"id":"limites_municipales.300","objectid":300,"municipio":"Huehuetenango","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1301,"shape_leng":84260.9892277,"shape_area":235305995.065,"code":"Huehuetena","codigo":"Huehuetenango_Huehuetenango"}},{"arcs":[[940,941,-124,-165,-939,-103,942]],"type":"Polygon","properties":{"id":"limites_municipales.307","objectid":307,"municipio":"Cuilco","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1304,"shape_leng":102152.431698,"shape_area":453965406.782,"code":"Huehuetena","codigo":"Huehuetenango_Cuilco"}},{"arcs":[[943,-920,-908,944,945,946]],"type":"Polygon","properties":{"id":"limites_municipales.308","objectid":308,"municipio":"Colotenango","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1319,"shape_leng":41015.0826417,"shape_area":61832691.9824,"code":"Huehuetena","codigo":"Huehuetenango_Colotenango"}},{"arcs":[[-907,-938,-141,-120,947,-945]],"type":"Polygon","properties":{"id":"limites_municipales.309","objectid":309,"municipio":"San Gaspar Ixchil","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1329,"shape_leng":31207.6279535,"shape_area":35447875.7277,"code":"Huehuetena","codigo":"Huehuetenango_San Gaspar Ixchil"}},{"arcs":[[948,-946,-948,-119,-942,949]],"type":"Polygon","properties":{"id":"limites_municipales.310","objectid":310,"municipio":"San Idelfonso Ixtahuacán","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1309,"shape_leng":58492.4637495,"shape_area":185552042.041,"code":"Huehuetena","codigo":"Huehuetenango_San Ildefonso Ixtahuacán"}},{"arcs":[[950,-921,-944,951,952]],"type":"Polygon","properties":{"id":"limites_municipales.311","objectid":311,"municipio":"Santiago Chimaltenango","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1330,"shape_leng":33486.8505964,"shape_area":39376423.1191,"code":"Huehuetena","codigo":"Huehuetenango_Santiago Chimaltenango"}},{"arcs":[[953,954,-953,955,-928,956,925,957]],"type":"Polygon","properties":{"id":"limites_municipales.312","objectid":312,"municipio":"Unión Cantinil","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1332,"shape_leng":32315.0785635,"shape_area":47050906.1092,"code":"Huehuetena","codigo":"Huehuetenango_Unión Cantinil"}},{"arcs":[[-956,-952,-947,-949,958,959,-929]],"type":"Polygon","properties":{"id":"limites_municipales.313","objectid":313,"municipio":"San Pedro Nécta","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1306,"shape_leng":58891.6006833,"shape_area":132902500.982,"code":"Huehuetena","codigo":"Huehuetenango_San Pedro Nécta"}},{"arcs":[[-959,-950,-941,960,961]],"type":"Polygon","properties":{"id":"limites_municipales.314","objectid":314,"municipio":"La Libertad","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1311,"shape_leng":71358.629527,"shape_area":217135986.206,"code":"Huehuetena","codigo":"Huehuetenango_La Libertad"}},{"arcs":[[-917,-914,962,963]],"type":"Polygon","properties":{"id":"limites_municipales.319","objectid":319,"municipio":"San Sebastián Coatán","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1325,"shape_leng":64530.4636193,"shape_area":156693782.615,"code":"Huehuetena","codigo":"Huehuetenango_San Sebastián Coatán"}},{"arcs":[[964,-930,-960,-962,965]],"type":"Polygon","properties":{"id":"limites_municipales.315","objectid":315,"municipio":"La Democracia","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1312,"shape_leng":74765.8712917,"shape_area":169001934.096,"code":"Huehuetena","codigo":"Huehuetenango_La Democracia"}},{"arcs":[[-963,-913,-831,966,967,968,969]],"type":"Polygon","properties":{"id":"limites_municipales.322","objectid":322,"municipio":"San Miguel Acatán","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1313,"shape_leng":86759.2082785,"shape_area":175861894.66,"code":"Huehuetena","codigo":"Huehuetenango_San Miguel Acatán"}},{"arcs":[[970,971,-931,-965,972]],"type":"Polygon","properties":{"id":"limites_municipales.316","objectid":316,"municipio":"Santa Ana Huista","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1331,"shape_leng":59145.3067054,"shape_area":117144078.078,"code":"Huehuetena","codigo":"Huehuetenango_Santa Ana Huista"}},{"arcs":[[973,974,-954,975,976,-923,977,-968]],"type":"Polygon","properties":{"id":"limites_municipales.323","objectid":323,"municipio":"Concepción Huista","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1322,"shape_leng":50716.5586737,"shape_area":86038956.701,"code":"Huehuetena","codigo":"Huehuetenango_Concepción Huista"}},{"arcs":[[-969,-978,-932,-972,978]],"type":"Polygon","properties":{"id":"limites_municipales.317","objectid":317,"municipio":"Jacaltenango","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1307,"shape_leng":77420.4408543,"shape_area":207018154.358,"code":"Huehuetena","codigo":"Huehuetenango_Jacaltenango"}},{"arcs":[[-48,-936,-940,-894,979,980]],"type":"Polygon","properties":{"id":"limites_municipales.318","objectid":318,"municipio":"Chiantla","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1302,"shape_leng":122617.64605,"shape_area":413088306.337,"code":"Huehuetena","codigo":"Huehuetenango_Chiantla"}},{"arcs":[[981,982,983]],"type":"Polygon","properties":{"id":"limites_municipales.335","objectid":335,"municipio":"San José","cod_dep":17,"departamen":"Petén","codigo_mun":1702,"shape_leng":248030.678179,"shape_area":2021378713.83,"code":"Petén_San ","codigo":"Petén_San José"}},{"arcs":[[984,985,986,987]],"type":"Polygon","properties":{"id":"limites_municipales.336","objectid":336,"municipio":"Melchor de Mencos","cod_dep":17,"departamen":"Petén","codigo_mun":1711,"shape_leng":322829.011321,"shape_area":2449935684.25,"code":"Petén_Melc","codigo":"Petén_Melchor de Mencos"}},{"arcs":[[-918,-964,-970,-979,-971,988]],"type":"Polygon","properties":{"id":"limites_municipales.320","objectid":320,"municipio":"Nentón","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1305,"shape_leng":147626.232489,"shape_area":766406469.551,"code":"Huehuetena","codigo":"Huehuetenango_Nentón"}},{"arcs":[[-919,-49,-981,989,-974,-967,-830]],"type":"Polygon","properties":{"id":"limites_municipales.321","objectid":321,"municipio":"San Juan Ixcoy","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1323,"shape_leng":92202.6098499,"shape_area":210697593.506,"code":"Huehuetena","codigo":"Huehuetenango_San Juan Ixcoy"}},{"arcs":[[-990,-980,-899,-922,-951,-955,-975]],"type":"Polygon","properties":{"id":"limites_municipales.324","objectid":324,"municipio":"Todos Santos Cuchumatán","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1315,"shape_leng":75290.1807023,"shape_area":269219581.423,"code":"Huehuetena","codigo":"Huehuetenango_Todos Santos Cuchumatán"}},{"arcs":[[990,991,992,-904,-910,-900,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007]],"type":"Polygon","properties":{"id":"limites_municipales.325","objectid":325,"municipio":"Sayaxché","cod_dep":17,"departamen":"Petén","codigo_mun":1710,"shape_leng":454985.85723,"shape_area":3626058075.2,"code":"Petén_Saya","codigo":"Petén_Sayaxché"}},{"arcs":[[-986,1008,1009,1010,1011]],"type":"Polygon","properties":{"id":"limites_municipales.326","objectid":326,"municipio":"Dolores","cod_dep":17,"departamen":"Petén","codigo_mun":1708,"shape_leng":206535.472823,"shape_area":1396555892.1,"code":"Petén_Dolo","codigo":"Petén_Dolores"}},{"arcs":[[-1011,1012,-991,1013,1014]],"type":"Polygon","properties":{"id":"limites_municipales.327","objectid":327,"municipio":"El Chal","cod_dep":17,"departamen":"Petén","codigo_mun":1714,"shape_leng":209074.914666,"shape_area":957624338.462,"code":"Petén_El C","codigo":"Petén_El Chal"}},{"arcs":[[-987,-1012,-1015,1015,1016]],"type":"Polygon","properties":{"id":"limites_municipales.328","objectid":328,"municipio":"Santa Ana","cod_dep":17,"departamen":"Petén","codigo_mun":1707,"shape_leng":175603.839909,"shape_area":933615940.6,"code":"Petén_Sant","codigo":"Petén_Santa Ana"}},{"arcs":[[1017,-988,-1017,1018,1019,1020,-983]],"type":"Polygon","properties":{"id":"limites_municipales.329","objectid":329,"municipio":"Flores","cod_dep":17,"departamen":"Petén","codigo_mun":1701,"shape_leng":361297.915013,"shape_area":4347507935.39,"code":"Petén_Flor","codigo":"Petén_Flores"}},{"arcs":[[1021,1022,-992,-1013,-1010]],"type":"Polygon","properties":{"id":"limites_municipales.330","objectid":330,"municipio":"Poptún","cod_dep":17,"departamen":"Petén","codigo_mun":1712,"shape_leng":279086.872257,"shape_area":1687339407.92,"code":"Petén_Popt","codigo":"Petén_Poptún"}},{"arcs":[[1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,-1007,1040]],"type":"Polygon","properties":{"id":"limites_municipales.331","objectid":331,"municipio":"La Libertad","cod_dep":17,"departamen":"Petén","codigo_mun":1705,"shape_leng":476973.717817,"shape_area":5284971903.54,"code":"Petén_La L","codigo":"Petén_La Libertad"}},{"arcs":[[-1020,1041,-1039,1042]],"type":"Polygon","properties":{"id":"limites_municipales.332","objectid":332,"municipio":"San Benito","cod_dep":17,"departamen":"Petén","codigo_mun":1703,"shape_leng":79203.00623,"shape_area":206716077.456,"code":"Petén_San ","codigo":"Petén_San Benito"}},{"arcs":[[1043,-25,-45,-905,-993,-1023]],"type":"Polygon","properties":{"id":"limites_municipales.333","objectid":333,"municipio":"San Luis","cod_dep":17,"departamen":"Petén","codigo_mun":1709,"shape_leng":345730.762957,"shape_area":2383793998.74,"code":"Petén_San ","codigo":"Petén_San Luis"}},{"arcs":[[1044,-881,1045,-863,1046,-891,1047,-849]],"type":"Polygon","properties":{"id":"limites_municipales.340","objectid":340,"municipio":"Sipacate","cod_dep":5,"departamen":"Escuintla","codigo_mun":514,"shape_leng":87069.6758433,"shape_area":269707932.321,"code":"Escuintla_","codigo":"Escuintla_Sipacate"}},{"arcs":[[-984,-1021,-1043,-1038,1048,-1036,1049,-1034,1050,-1032,1051,-1030,1052,-1028,1053,-1026,1054]],"type":"Polygon","properties":{"id":"limites_municipales.334","objectid":334,"municipio":"San Andrés","cod_dep":17,"departamen":"Petén","codigo_mun":1704,"shape_leng":459319.814891,"shape_area":8273285254.13,"code":"Petén_San ","codigo":"Petén_San Andrés"}},{"arcs":[[-1016,-1014,-1008,-1040,-1042,-1019]],"type":"Polygon","properties":{"id":"limites_municipales.337","objectid":337,"municipio":"San Francisco","cod_dep":17,"departamen":"Petén","codigo_mun":1706,"shape_leng":141206.274983,"shape_area":500912690.226,"code":"Petén_San ","codigo":"Petén_San Francisco"}},{"arcs":[[-1024,-1005,1055,-1003,1056,-1001,1057,-999,1058,-997,1059,-995,1060]],"type":"Polygon","properties":{"id":"limites_municipales.338","objectid":338,"municipio":"Las Cruces","cod_dep":17,"departamen":"Petén","codigo_mun":1713,"shape_leng":494757.13808,"shape_area":1769045254.5,"code":"Petén_Las ","codigo":"Petén_Las Cruces"}},{"arcs":[[-926,-925,1061,-976,-958]],"type":"Polygon","properties":{"id":"limites_municipales.339","objectid":339,"municipio":"Petatán","cod_dep":13,"departamen":"Huehuetenango","codigo_mun":1333,"shape_leng":26841.5241849,"shape_area":16774953.9786,"code":"Huehuetena","codigo":"Huehuetenango_Petatán"}}]}},"crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}}}
var _$homePoints_3={
"type": "FeatureCollection",
"name": "home_points",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "textSize": {"mobile": 10, "desktop": 10}, "properties": { "id": 1, "name": "Felipe", "town": "Yalambojoch", "positionX": "right", "positionY": "top"}, "geometry": { "type": "Point", "coordinates": [ -91.572477400268141, 15.980128436424637 ] } },
{ "type": "Feature", "textSize": {"mobile": 10, "desktop": 10},"properties": { "id": 2, "name": "Carlos", "town": "San José El Rodeo", "positionX": "right", "positionY": "bottom"}, "geometry": { "type": "Point", "coordinates": [ -90.641302319756477, 14.980483928419657 ] } },
{ "type": "Feature", "textSize": {"mobile": 10, "desktop": 10},"properties": { "id": 3, "name": "Wilmer", "town": "Tituque", "positionX": "left", "positionY": "bottom" }, "geometry": { "type": "Point", "coordinates": [ -89.360356682257361, 14.712392590547799 ] } },
{ "type": "Feature", "textSize": {"mobile": 10, "desktop": 10},"properties": { "id": 4, "name": "Juan", "town": "El Tesoro", "positionX": "right", "positionY": "top" }, "geometry": { "type": "Point", "coordinates": [ -89.209899877153688, 14.905955659732733 ] } },
{ "type": "Feature", "textSize": {"mobile": 10, "desktop": 10},"properties": { "id": 5, "name": "Jakelin", "town": "San Antonio Secortez", "positionX": "right", "positionY": "top" }, "geometry": { "type": "Point", "coordinates": [ -90.08403791230127, 15.992003855078368 ] } },
{ "type": "Feature", "textSize": {"mobile": 10, "desktop": 10},"properties": { "id": 6, "name": "Claudia", "town": "La Unión Los Mendoza", "positionX": "right", "positionY": "top" }, "geometry": { "type": "Point", "coordinates": [ -91.643027167301099, 14.910105687776172 ] } }
]
}

var _$massacreAnnotations_4=[
      {"case": "c47",
       "date": "February 1967",
       "location": "Cajón del Río",
       "group": "chorti",
       "killed": 14,
       "x": 4,
       "y": 40,
       "textSize": {"mobile":11,"desktop":12},
       "width": {"mobile":45,"desktop":70},
       "xAlign": "right",
       "yAlign": "top",
       "text": "“Many from here are [still] in Honduras. Almost half of the village left.” —Survivor",
       "animationIndex": 1
      },
      {"case": "c1004",
       "date": "November 1966",
       "location": "Río Hondo",
       "group": "chorti",
       "killed": 61,
       "x": -2,
       "y": -10,
       "textSize": {"mobile":11,"desktop":12},
       "width": {"mobile":38,"desktop":70},
       "xAlign": "left",
       "yAlign": "bottom",
       "text": "The soldiers doused them with gasoline and began to throw paper balls at them with fire. The victims were burned alive. —CEH",
       "animationIndex": 1
      },
      {"case": "c9",
       "date": "May 1978",
       "location": "Panzós",
       "group": "qeqchi",
       "killed": 53,
       "x": -5,
       "y": 0,
       "textSize": {"mobile":11,"desktop":12},
       "width": {"mobile":80,"desktop":120},
       "xAlign": "left",
       "yAlign": "bottom",
       "text": "“If they want land, they will have it in the cemetary.” —Soldier, just before massacre",
       "animationIndex": 2
      },
      {"case": "c10_1",
       "date": "February 1982",
       "location": "Río Negro",
       "group": "achi",
       "killed": 74,
       "x": 10,
       "y": -52,
       "textSize": {"mobile":11,"desktop":12},
       "width": {"mobile":42,"desktop":100},
       "xAlign": "right",
       "yAlign": "top",
       "text": "“In the community before [it was] calm, after the construction of the dam is when many problems arose.”",
       "animationIndex": 3
      },
      {"case": "c10_2",
       "date": "March 1982",
       "location": "Río Negro",
       "group": "achi",
       "killed": 177,
       "victimType": "women and children ",
       "x": 7,
       "y": 13,
       "textSize": {"mobile":11,"desktop":12},
       "width": {"mobile":40,"desktop":100},
       "xAlign": "right",
       "yAlign": "bottom",
       "text": "There I lost my family, well, my brother, wife, nephews, mother-in-law, brother-in-law, comrades, aunts, everyone there...nobody stayed in the village, we went to the mountains...we were abandoned, without spirit.",
       "animationIndex": 3
      },
      {"case": "c18",
       "date": "July 1982",
       "location": "San Francisco",
       "group": "chuj",
       "killed": 350,
       "x": 10,
       "y": -93,
       "textSize": {"mobile":11,"desktop":12},
       "width": {"mobile":60,"desktop":100},
       "xAlign": "right",
       "yAlign": "top",
       "text": "“After they killed our women, they took our children, little ones of ten, eight, five and four years old, they just grabbed their legs and smashed them on the roofs of the houses, and left the brains of the little ones torn apart like corn dough. I had six children, all of them died...also my wife. None were left alive.”",
       "animationIndex": 4,
       "double": true
      },
      {"case": "c18",
       "date": "July 1982",
       "location": "San Francisco",
       "group": "chuj",
       "killed": 350,
       "x": 10,
       "y": -50,
       "textSize": {"mobile":11,"desktop":12},
       "width": {"mobile":70,"desktop":100},
       "xAlign": "right",
       "yAlign": "top",
       "text": "Once the soldiers finished the massacre, they put the meat of the oxen that they had butchered on the fire and ate, drank and danced to the music of the radio-recorders that they stole from the houses. Before leaving, they set fire to the village.",
       "animationIndex": 4,
       "second": true
      }
]
var _$defendersData_1=[
 {
   "codigo_municipio": 101,
   "2018": null,
   "2019": null,
   "2020": 1,
   "total": 1
 },
 {
   "codigo_municipio": 116,
   "2018": 1,
   "2019": null,
   "2020": null,
   "total": 1
 },
 {
   "codigo_municipio": 609,
   "2018": 1,
   "2019": null,
   "2020": null,
   "total": 1
 },
 {
   "codigo_municipio": 908,
   "2018": null,
   "2019": 1,
   "2020": null,
   "total": 1
 },
 {
   "codigo_municipio": 917,
   "2018": null,
   "2019": null,
   "2020": 1,
   "total": 1
 },
 {
   "codigo_municipio": 920,
   "2018": 1,
   "2019": null,
   "2020": null,
   "total": 1
 },
 {
   "codigo_municipio": 1001,
   "2018": 2,
   "2019": null,
   "2020": null,
   "total": 2
 },
 {
   "codigo_municipio": 1006,
   "2018": null,
   "2019": 1,
   "2020": 1,
   "total": 2
 },
 {
   "codigo_municipio": 1230,
   "2018": 1,
   "2019": null,
   "2020": null,
   "total": 1
 },
 {
   "codigo_municipio": 1301,
   "2018": 1,
   "2019": 1,
   "2020": null,
   "total": 2
 },
 {
   "codigo_municipio": 1311,
   "2018": null,
   "2019": 1,
   "2020": null,
   "total": 1
 },
 {
   "codigo_municipio": 1318,
   "2018": 2,
   "2019": null,
   "2020": null,
   "total": 2
 },
 {
   "codigo_municipio": 1408,
   "2018": null,
   "2019": null,
   "2020": 1,
   "total": 1
 },
 {
   "codigo_municipio": 1413,
   "2018": 3,
   "2019": null,
   "2020": null,
   "total": 3
 },
 {
   "codigo_municipio": 1503,
   "2018": null,
   "2019": 1,
   "2020": null,
   "total": 1
 },
 {
   "codigo_municipio": 1508,
   "2018": 1,
   "2019": null,
   "2020": 1,
   "total": 2
 },
 {
   "codigo_municipio": 1601,
   "2018": 3,
   "2019": 1,
   "2020": 1,
   "total": 5
 },
 {
   "codigo_municipio": 1703,
   "2018": 1,
   "2019": null,
   "2020": null,
   "total": 1
 },
 {
   "codigo_municipio": 1709,
   "2018": null,
   "2019": null,
   "2020": 1,
   "total": 1
 },
 {
   "codigo_municipio": 1710,
   "2018": null,
   "2019": null,
   "2020": 1,
   "total": 1
 },
 {
   "codigo_municipio": 1711,
   "2018": 1,
   "2019": null,
   "2020": null,
   "total": 1
 },
 {
   "codigo_municipio": 1712,
   "2018": null,
   "2019": 1,
   "2020": null,
   "total": 1
 },
 {
   "codigo_municipio": 1801,
   "2018": null,
   "2019": null,
   "2020": 1,
   "total": 1
 },
 {
   "codigo_municipio": 1802,
   "2018": null,
   "2019": 5,
   "2020": null,
   "total": 5
 },
 {
   "codigo_municipio": 1803,
   "2018": null,
   "2019": null,
   "2020": 1,
   "total": 1
 },
 {
   "codigo_municipio": 1804,
   "2018": null,
   "2019": 2,
   "2020": 1,
   "total": 3
 },
 {
   "codigo_municipio": 2001,
   "2018": null,
   "2019": null,
   "2020": 1,
   "total": 1
 },
 {
   "codigo_municipio": 2004,
   "2018": null,
   "2019": null,
   "2020": 1,
   "total": 1
 },
 {
   "codigo_municipio": 2005,
   "2018": 1,
   "2019": null,
   "2020": null,
   "total": 1
 },
 {
   "codigo_municipio": 2006,
   "2018": null,
   "2019": null,
   "2020": 1,
   "total": 1
 },
 {
   "codigo_municipio": 2101,
   "2018": 3,
   "2019": null,
   "2020": 1,
   "total": 4
 },
 {
   "codigo_municipio": 2102,
   "2018": null,
   "2019": 2,
   "2020": null,
   "total": 2
 },
 {
   "codigo_municipio": 2103,
   "2018": 1,
   "2019": null,
   "2020": null,
   "total": 1
 },
 {
   "codigo_municipio": 2201,
   "2018": 2,
   "2019": null,
   "2020": null,
   "total": 2
 },
 {
   "codigo_municipio": 2202,
   "2018": 1,
   "2019": null,
   "2020": null,
   "total": 1
 }
]
var _$magicMap_19 = {};
/* removed: var _$$_17 = require("./lib/qsa"); */;

/* removed: var _$d3Min_8 = require("d3/dist/d3.min"); */;

/* removed: var _$topojsonNode_13 = require("topojson"); */;

/* removed: var _$renderChart_21 = require("./render-chart"); */;

/* removed: var _$enterViewMin_9 = require("enter-view"); */;

/* removed: var _$debounce_15 = require("./lib/debounce"); */;

var {
  isMobile,
  isTablet,
  isDesktop
} = _$breakpoints_14;

/* removed: var _$makeTranslate_16 = require("./lib/makeTranslate"); */;

/* removed: var _$wrapText_18 = require("./lib/wrapText"); */;

var zoomingNow = false; // load data

/* removed: var _$focusExtent_2 = require("../../data/focus-extent.json"); */;

/* removed: var _$rasterExtent_6 = require("../../data/raster-extent.json"); */;

/* removed: var _$municipiosTopo_5 = require("../../data/municipios-topo.json"); */;

var municipioData = _$topojsonNode_13.feature(_$municipiosTopo_5, _$municipiosTopo_5.objects.municipios).features;

/* removed: var _$homePoints_3 = require("../../data/home-points.json"); */;

/* removed: var _$massacreAnnotations_4 = require("../../data/massacre-annotations.json"); */;

var casesWithAnnotations = _$massacreAnnotations_4.map(d => d.case);

/* removed: var _$defendersData_1 = require("../../data/defenders-data.json"); */; //load massacre data


var massacreData; //adjust source for src/build

var massacreDataPath = "./assets/circle-positions.json";
var pathPrefix = ".";
if (location.hostname == "localhost") pathPrefix = ".";
_$d3Min_8.json(massacreDataPath).then(function (data) {
  massacreData = data;
  drawMassacres();
  timelineElements = magicMap.selectAll(".timeline");
});
var mapContainer = _$$_17(".magic-map .inner")[0]; //get initial width and height

var w = mapContainer.offsetWidth;
var h = mapContainer.offsetHeight;
var margin = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5
}; //guatemala-optimized projection

const centerLocation = {
  "longitude": -90.2299,
  "latitude": 15.7779
}; //albers centered on guatemala

albersGuate = _$d3Min_8.geoConicEqualArea().parallels([14.8, 16.8]).rotate([centerLocation["longitude"] * -1, 0, 0]).center([0, centerLocation["latitude"]]).fitExtent([[margin.left, margin.top], [w - margin.right, h - margin.bottom]], _$focusExtent_2); //path generator

pathGuate = _$d3Min_8.geoPath().projection(albersGuate); //store width of focus area to scale vectors

var computedBox = pathGuate.bounds(_$focusExtent_2);
focusWidth = computedBox[1][0] - computedBox[0][0];
focusHeight = computedBox[1][1] - computedBox[0][1];
var svg = _$d3Min_8.select(mapContainer).append("svg").attr("viewBox", "0 0 " + w + " " + h).attr("preserveAspectRatio", "xMidYMid meet").attr("overflow", "visible");
var svgInner = svg.append("g").attr("class", "inner"); //add focusBox as rectangle so we can calculate bbox for scaling later

var renderedBox = svgInner.append("rect").attr("x", computedBox[0][0]).attr("y", computedBox[0][1]).attr("width", focusWidth).attr("height", focusHeight).attr("fill", "none").attr("stroke", "#fff").attr("stroke-width", 0.25); //calculate raster bounds

var rasterBounds = pathGuate.bounds(_$rasterExtent_6);
var rasterWidth = rasterBounds[1][0] - rasterBounds[0][0];
var rasterHeight = rasterBounds[1][1] - rasterBounds[0][1];
var rasterOrigin = [rasterBounds[0][0], rasterBounds[0][1]]; //append raster backgrounds
// all

svgInner.append("image").attr("href", pathPrefix + "/assets/img/dot_all.jpg").attr("class", "allDot").attr("x", rasterOrigin[0]).attr("y", rasterOrigin[1]).attr("width", rasterWidth + "px").attr("height", rasterHeight + "px").attr("opacity", "1"); // focus-only

svgInner.append("image").attr("href", pathPrefix + "/assets/img/focus-only.jpg").attr("class", "focusOnly").attr("x", computedBox[0][0]).attr("y", computedBox[0][1]).attr("width", focusWidth).attr("height", focusHeight).attr("opacity", "1"); // indigenous

svgInner.append("image").attr("href", pathPrefix + "/assets/img/indigenous-only.jpg").attr("class", "indigenousOnly").attr("x", computedBox[0][0]).attr("y", computedBox[0][1]).attr("width", focusWidth).attr("height", focusHeight).attr("opacity", "0"); // binary

var binaryImg = svgInner.append("image").attr("href", pathPrefix + "/assets/img/binary.jpg").attr("class", "binary").attr("x", computedBox[0][0]).attr("y", computedBox[0][1]).attr("width", focusWidth).attr("height", focusHeight).attr("opacity", "0"); //draw municipios

var municipios = svgInner.append("g").selectAll(".municipio").data(municipioData).enter().append("path").attr("d", pathGuate).attr("class", "municipio").attr("id", function (d) {
  return "m" + d.properties["codigo_mun"];
}).attr("fill", "none").style("display", "none");
var defendersGroup = svgInner.append("g").style("display", "none"); //draw defenders data

var defenderScale = _$d3Min_8.scaleSqrt().domain([0, 5]).range([0, 8]);
var defenders = defendersGroup.selectAll(".defenderCircles").data(_$defendersData_1).enter().append("g").attr("transform", function (d) {
  var codigo = d.codigo_municipio;
  var municipio = svg.select("#m" + codigo);
  var centroid = pathGuate.centroid(municipio.datum());
  return _$makeTranslate_16(centroid[0], centroid[1]);
});
var circles = defenders.append("circle").attr("r", d => defenderScale(d.total)).attr("stroke", "#fff").attr("stroke-width", 0.85).attr("fill", "#000").attr("fill-opacity", 0.8); //add event listener for resize

_$d3Min_8.select(window).on('resize', resized);

function resized() {
  calculateZoomFactor();
  _$debounce_15(_$renderChart_21());
} //draw massacres


var rScale = _$d3Min_8.scaleSqrt().domain([0, 400]).range([0, focusWidth / 55]);
var startTime = "1965_0";
var currentData;
var massacreGroup;
var circleGroups;
var massacreCircles;

function drawMassacres() {
  var currentData = massacreData.municipios.filter(m => m.mama[startTime]); // viewBox from "calculateCirclePositions" was 0 0 678.359 709
  //need to adjust values to account for the old viewbox
  //cant set directly through viewbox since we will animate for zooming

  scaleFactor = h / 653;
  massacreGroup = svg.append("g").attr("class", "timeline");
  circleGroups = massacreGroup.selectAll(".circleGroups").attr("class", "circleGroups").data(currentData).enter().append("g").attr("transform", d => "translate(" + d.mama[startTime].x * scaleFactor + " " + d.mama[startTime].y * scaleFactor + ")");
  massacreCircles = circleGroups.selectAll(".innerCircle").data(d => d.mama[startTime].children).enter().append("circle").attr("class", "innerCircle").attr("caso", d => d.caso).attr("cx", d => d.x * scaleFactor).attr("cy", d => d.y * scaleFactor).attr("r", 0).attr("r", d => (d.r - 0.1) * scaleFactor).attr("fill-opacity", 0.9).attr("fill", "#fff").attr("stroke", "#555").attr("stroke-width", 0.1);
}

_$renderChart_21(); //draw homes

var symbolSize = 3;
var labelPadding = 0.5;
var homePoints = svgInner.append("g").attr("class", d => "homes").selectAll("circle").data(_$homePoints_3.features).enter().append("rect").attr("class", d => d.properties["name"]).attr("x", d => albersGuate(d.geometry.coordinates)[0] - symbolSize / 2).attr("y", d => albersGuate(d.geometry.coordinates)[1] - symbolSize / 2).attr("width", symbolSize).attr("height", symbolSize).attr("fill", "#fff").attr("stroke", "#000").attr("stroke-width", 0.25).attr("opacity", 1); //home labels

var homeLabels = svgInner.append("g").attr("class", "homeLabels").selectAll("text").data(_$homePoints_3.features).enter().append("g").attr("class", d => d.properties["name"] + " label").attr("transform", function (d) {
  if (d.properties.positionX == "right") {
    var x = albersGuate(d.geometry.coordinates)[0] + (symbolSize + labelPadding);
  } else {
    var x = albersGuate(d.geometry.coordinates)[0] - (symbolSize + labelPadding);
  }

  if (d.properties.positionY == "top") var y = albersGuate(d.geometry.coordinates)[1] - (symbolSize + labelPadding);else var y = albersGuate(d.geometry.coordinates)[1] + (symbolSize + labelPadding);
  return "translate(" + x + "," + y + ")";
}).html(function (d) {
  if (d.properties.positionY == "top") {
    return "<text><tspan x=\"0\" dy=\"-0.5em\">" + (d.properties["name"] + "'s home") + "</tspan>\n                       <tspan x=\"0\" dy=\"1em\">" + d.properties["town"] + "</tspan></text>";
  } else {
    return "<text><tspan x=\"0\" dy=\"-0.2em\">" + d.properties["town"] + "</tspan>\n                       <tspan x=\"0\" dy=\"1em\">" + (d.properties["name"] + "'s home") + "</tspan></text>";
  }
}).attr("dominant-baseline", d => d.properties.positionY == "top" ? "auto" : "hanging").attr("font-size", 11).attr("text-anchor", function (d) {
  if (d.properties.positionX == "right") {
    var anchor = "start";
  } else {
    var anchor = "end";
  }

  return anchor;
}).attr("opacity", 0).attr("fill", "#fff").attr("font-weight", "bold").attr("text-shadow", "text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;");
var zoomFactor; //for resizing

var calculateZoomFactor = _$debounce_15(function () {
  var originalBoxWidth = renderedBox.node().getBBox().width;
  var clientBoxWidth = renderedBox.node().getBoundingClientRect().width;
  zoomFactor = originalBoxWidth / clientBoxWidth;
  resizeLabels();
}, 100);

function resizeLabels() {
  svg.selectAll(".label").attr("font-size", function (d) {
    if (isMobile.matches) return d.textSize.mobile * zoomFactor + "px";else return d.textSize.desktop * zoomFactor + "px";
  });
  svg.selectAll(".massacreAnnotation").each(function (d) {
    renderMassacreAnnotation(_$d3Min_8.select(this));
  });
}

function updateMassacres(currentData, timePeriod) {
  //behaviour for updating groups
  var circleGroups = massacreGroup.selectAll(".circleGroups").data(currentData, d => d["codigo_mun"]).join(enter => enter.append("g").attr("class", "circleGroups").attr("transform", d => "translate(" + d.mama[timePeriod].x * scaleFactor + " " + d.mama[timePeriod].y * scaleFactor + ")"), update => update.attr("transform", d => "translate(" + d.mama[timePeriod].x * scaleFactor + " " + d.mama[timePeriod].y * scaleFactor + ")"), exit => exit.remove());
  var massacreCircles = circleGroups.selectAll(".innerChildren").data(d => d.mama[timePeriod].children, d => d.caso ? d.caso : "c" + d.caso_ilustrativo).join(enter => enter.append("g").attr("class", function (d) {
    var currentCase = d.caso ? "c" + d.caso : "c" + d.caso_ilustrativo;
    return "innerChildren " + currentCase;
  }).attr("transform", d => _$makeTranslate_16(d.x * scaleFactor, d.y * scaleFactor)).append("circle").attr("r", d => (d.r - 0.1) * scaleFactor).attr("fill-opacity", 0.8).attr("fill", "#fff").attr("stroke", "#555").attr("stroke-width", function (d) {
    //add massacre annotations
    var currentCase = d.caso ? "c" + d.caso : "c" + d.caso_ilustrativo; //check if it has a massacre annotation, if so render

    var currentAnnotationIndex = casesWithAnnotations.indexOf(currentCase);

    if (currentAnnotationIndex != -1) {
      //add annotation
      var label = _$massacreAnnotations_4[currentAnnotationIndex]; //bind data

      var labelG = _$d3Min_8.select(this.parentNode).append("g").attr("opacity", 0).attr("class", "massacreAnnotation " + label.group).datum(label);
      renderMassacreAnnotation(labelG); //check for double

      if (label.double) {
        var label2 = _$massacreAnnotations_4[currentAnnotationIndex + 1];
        var labelG2 = _$d3Min_8.select(this.parentNode).append("g").attr("opacity", 0).attr("class", "massacreAnnotation " + label.group).datum(label2);
        renderMassacreAnnotation(labelG2);

        if (label2.animationIndex == animationIndex) {
          if (!zoomingNow) {
            labelG2.transition("fade in annotation").duration(500).attr("opacity", 1);
          }
        }
      }

      if (label.animationIndex == animationIndex) {
        if (!zoomingNow) {
          labelG.transition("fade in annotation").duration(500).attr("opacity", 1);
        }
      }
    }

    return 0.1;
  }), update => update.attr("transform", d => _$makeTranslate_16(d.x * scaleFactor, d.y * scaleFactor)), exit => exit.remove());
} //////////////////////////////////////////////////////////////////////
//////////////////Code for Discrete Animations///////////////////////////////
//////////////////////////////////////////////////////////////////////


var animationIndex = 0;

function addDiscreteListeners() {
  var stepSel = _$d3Min_8.selectAll(".discrete");
  _$enterViewMin_9({
    selector: stepSel.nodes(),
    offset: 0,
    enter: el => {
      const index = _$d3Min_8.select(el).attr('forward');
      updateMap[index]();
    },
    exit: el => {
      let index = _$d3Min_8.select(el).attr('backward'); //check for multiple

      if (!index.includes(" ")) {
        updateMap[index]();
      } else {
        var indexes = index.split(" ");

        for (var i of indexes) {
          updateMap[i]();
        }
      }
    }
  });
}

var magicMap = _$d3Min_8.select("div.magic-map");
var timelineElements = magicMap.selectAll(".timeline"); //ai2html layers

var focusOnly = magicMap.selectAll(".focusOnly");
var indigenousOnly = magicMap.selectAll(".indigenousOnly");
var binary = magicMap.selectAll(".binary");
var defenders = magicMap.selectAll(".defenders");
var updateMap = {
  fadeFocus: function () {
    focusOnly.transition("fade in focus").duration(500).style("opacity", 1);
    indigenousOnly.transition("fade out indigenous backward").duration(500).style("opacity", 0);
    homePoints.transition("fade in homes").duration(500).attr("opacity", 1);
  },
  fadeIndigenous: function () {
    //fade out homes
    homePoints.transition("fade out homes").duration(500).attr("opacity", 0);
    focusOnly.transition("fade out focus").duration(500).style("opacity", 0);
    binary.transition("fade out binary").duration(500).style("opacity", 0);
    indigenousOnly.transition("fade in indigenous").duration(500).style("opacity", 1);
  },
  fadeBinaryLabeled: function () {
    indigenousOnly.transition("fade out indigenous forward").duration(500).style("opacity", 0);
    binary.transition("fade in binary").duration(500).style("opacity", 1);
    homePoints.transition("fade in homes").duration(500).attr("opacity", 1);
  },
  fadeOutTimeline: function () {
    binary.style("opacity", 1);
    homePoints.attr("opacity", 1);
    timelineElements.style("opacity", 0);
  },
  fadeTimeline: function () {
    binary.transition("ensure clean timeline").duration(500).style("opacity", 0);
    indigenousOnly.transition("ensure clean timeline").duration(500).style("opacity", 0);
    focusOnly.transition("ensure clean timeline").duration(500).style("opacity", 0);
    timelineElements.style("opacity", 1);
  },
  zoomOutFull: function () {
    animationIndex = 0;
    svg.selectAll(".chorti,.Wilmer,.Juan,.chuj,.Felipe").transition("fade out east labels backward").duration(500).attr("opacity", 0).on("end", function () {
      if (animationIndex == 0) {
        zoomingNow = true;
        svg.transition("Zoom out full!").duration(1500).attr("viewBox", "0 0 " + w + " " + h).on("end", function () {
          zoomingNow = false;
          calculateZoomFactor();
        });
      }
    });
  },
  zoomChorti: function () {
    binary.transition("ensure clean timeline").duration(500).style("opacity", 0);
    indigenousOnly.transition("ensure clean timeline").duration(500).style("opacity", 0);
    focusOnly.transition("ensure clean timeline").duration(500).style("opacity", 0);
    animationIndex = 1; //fade out labels

    svg.selectAll(".qeqchi,.Jakelin").transition("fade labels out chorti").duration(500).attr("opacity", 0);
    var w2 = .30 * w,
        h2 = 0.36 * h,
        left = 0.55 * w,
        top = 0.51 * h;
    zoomingNow = true; //zoom

    svg.transition("zoom east").duration(1500).attr("viewBox", left + " " + top + " " + w2 + " " + h2).on("end", function () {
      //resized, need to calculate zoom
      zoomingNow = false;
      calculateZoomFactor(); //check if still at current step before fading in east labels

      if (animationIndex == 1) {
        //fade in east labels
        svg.selectAll(".chorti,.Wilmer,.Juan").transition("fade in east labels").duration(500).attr("opacity", 1);
      }
    });
  },
  zoomQeqchi: function () {
    animationIndex = 2;
    var w2 = .40 * w,
        h2 = 0.36 * h,
        left = 0.38 * w,
        top = 0.35 * h; //fade out chorti labels

    svg.selectAll(".chorti,.Wilmer,.Juan,.achi,.Carlos").transition("fade out labels qeqchi").duration(500).attr("opacity", 0);
    zoomingNow = true; //zoom to new location

    svg.transition("Zoom qeqchi").duration(1500).attr("viewBox", left + " " + top + " " + w2 + " " + h2).on("end", function () {
      zoomingNow = false;
      calculateZoomFactor(); //fade in new labels

      if (animationIndex == 2) {
        svg.selectAll(".Jakelin,.qeqchi").transition("fade in labels qeqchi").duration(500).attr("opacity", 1);
      }
    });
  },
  zoomAchi: function () {
    animationIndex = 3;
    var w2 = .30 * w,
        h2 = 0.30 * h,
        left = 0.28 * w,
        top = 0.48 * h; //fade out qeqchi labels

    svg.selectAll(".Jakelin,.qeqchi").transition("fade out labels achi").duration(500).attr("opacity", 0);
    zoomingNow = true; //zoom to new location

    svg.transition("Zoom achi").duration(1500).attr("viewBox", left + " " + top + " " + w2 + " " + h2).on("end", function () {
      zoomingNow = false;
      calculateZoomFactor(); //fade in new labels

      if (animationIndex == 3) {
        svg.selectAll(".Carlos,.achi").transition("fade in labels achi").duration(500).attr("opacity", 1);
      }
    });
  },
  zoomChuj: function () {
    animationIndex = 4;
    var w2 = .30 * w,
        h2 = 0.30 * h,
        left = 0.10 * w,
        top = 0.28 * h; //fade out achi labels

    svg.selectAll(".Carlos,.achi").transition("fade out labels chuj").duration(500).attr("opacity", 0);
    zoomingNow = true; //zoom to new location

    svg.transition("Zoom chuj").duration(1500).attr("viewBox", left + " " + top + " " + w2 + " " + h2).on("end", function () {
      zoomingNow = false;
      calculateZoomFactor(); //fade in new labels

      if (animationIndex == 4) {
        svg.selectAll(".Felipe,.chuj").transition("fade in labels chuj").duration(500).attr("opacity", 1);
      }
    });
  },
  fadeBinary: function () {
    //fade in binary
    binaryImg.transition("fadeInBinary").duration(500).style("opacity", 1);
  },
  fadeAll: function () {
    //fade out binary
    binaryImg.transition("fadeOutBinary").duration(500).style("opacity", 0);
  },
  fadeOutDefenders: function () {
    //show binary
    binaryImg.style("opacity", 1); //show all timeline elements

    timelineElements.style("opacity", 1); // hide defenders circles and html

    defendersGroup.style("display", "none");
    defenders.style("opacity", 0);
  },
  fadeDefenders: function () {
    //hide binary
    binaryImg.style("opacity", 0); //hide all timeline elements

    timelineElements.style("opacity", 0); //show defenders circles and html

    defendersGroup.style("display", "block");
    defenders.style("opacity", 1);
  }
};

function renderMassacreAnnotation(labelG) {
  //clear previous
  labelG.html("");
  var label = labelG.datum();
  var parent = _$d3Min_8.select(labelG.node().parentNode);
  var circleBbox = parent.select("circle").node().getBBox();
  var leaderLine = labelG.append("path"); //add rectangle underneath text

  var textRect = labelG.append("rect"); //calculate text dimensions

  var textElement = labelG.append("text").attr("class", "label wrapped").datum(label).attr("fill", "#000").style("font-family", "Lora") // .style("font-weight", "bold")
  // .attr("font-style", d=> d["font-style"] ? d["font-style"] : "normal")
  .attr("font-style", "italic").attr("font-size", function (d) {
    if (isMobile.matches) return d.textSize.mobile * zoomFactor + "px";else return d.textSize.desktop * zoomFactor + "px";
  }).attr("dominant-baseline", "hanging").text(label["text"]).attr("text-shadow", "text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;");
  var dWidth = isMobile.matches ? label["width"].mobile : label["width"].desktop;
  textElement.call(_$wrapText_18, dWidth, 12 * zoomFactor);
  var textBbox = labelG.node().getBBox();
  var textW = textBbox["width"];
  var textH = textBbox["height"]; //set x and y depending on where we want the text anchored

  labelG.attr("transform", function (d) {
    var x, y;

    if (d.xAlign == "right") {
      x = circleBbox["width"] / 2 + d.x;
    } else {
      x = d.x - circleBbox["width"] / 2 - textW;
    }

    if (d.yAlign == "top") {
      y = circleBbox["height"] / 2 + d.y;
    } else {
      y = d.y - circleBbox["height"] / 2 - textH;
    }

    return _$makeTranslate_16(x, y);
  });
  var textPadding = 3; //add text rect

  textRect.attr("x", -textPadding).attr("y", -textPadding).attr("width", textW + textPadding * 2).attr("height", textH + textPadding * 2).attr("fill", "#fff").attr("fill-opacity", 0.9).attr("stroke", "none"); //leader line dimensions

  leaderLine.attr("d", function (d) {
    if (d.xAlign == "right") {
      var x0 = -circleBbox["width"] / 2 - label.x;
      var x1 = x0;
      var x2 = -label.x / 2;
    } else {
      var x0 = textW + circleBbox["width"] / 2 - label.x;
      var x1 = x0;
      var x2 = textW - label.x / 2;
    }

    if (d.yAlign == "top") {
      var y0 = -circleBbox["height"] / 2 - label.y;
      var y1 = textH / 2;
      var y2 = y1;
    } else {
      var y0 = textH + circleBbox["height"] / 2 - label.y;
      var y1 = textH / 2;
      var y2 = y1;
    }

    return "M " + x0 + " " + y0 + "L " + x1 + " " + y1 + "L " + x2 + " " + y2;
  }).attr("stroke", "#fff").attr("stroke-width", 0.4).attr("fill", "none"); //don't add if double

  if (!label["second"]) {
    //add name and date
    labelG.append("text").attr("x", 0).attr("y", -textPadding - 1).attr("font-size", function (d) {
      if (isMobile.matches) return d.textSize.mobile * zoomFactor + "px";else return d.textSize.desktop * zoomFactor + "px";
    }).attr("font-weight", "bold").attr("fill", "#fff").attr("text-shadow", "text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;").attr("dominant-baseline", "auto").html(function (d) {
      return "<tspan x=\"0\" dy=\"-1em\" text-decoration=\"underline\">" + d.location + " Massacre</tspan>\n                            <tspan x=\"0\" dy=\"1em\">" + d.date + " \u2014 " + d.killed + " " + (d.victimType ? d.victimType : "") + "killed</tspan>";
    });
  }
} //////////////////////////////////////////////////////////////////////
//////////////////Code for Continuous Animations///////////////////////////////
//////////////////////////////////////////////////////////////////////


var timeDomain = [new Date(1965, 0, 1), new Date(1969, 11, 31)];
var timeDomain2 = [new Date(1969, 11, 31), new Date(1978, 4, 31)];
var timeDomain3 = [new Date(1978, 4, 31), new Date(1982, 2, 31)];
var timeDomain4 = [new Date(1982, 2, 31), new Date(1982, 11, 31)];
var timeDomain5 = [new Date(1983, 11, 31), new Date(1995, 11, 31)];
var overallTimeDomain = [new Date(1965, 0, 1), new Date(1995, 11, 31)];
var timeScale = _$d3Min_8.scaleLinear().domain(timeDomain).range([0, 1]);
var timeScale2 = _$d3Min_8.scaleLinear().domain(timeDomain2).range([0, 1]);
var timeScale3 = _$d3Min_8.scaleLinear().domain(timeDomain3).range([0, 1]);
var timeScale4 = _$d3Min_8.scaleLinear().domain(timeDomain4).range([0, 1]);
var timeScale5 = _$d3Min_8.scaleLinear().domain(timeDomain5).range([0, 1]);
var timeScaleOverall = _$d3Min_8.scaleLinear().domain(overallTimeDomain).range([0, 1]);

function fmtMonthYear(time) {
  var dateObj = new Date(time);
  var month = dateObj.toLocaleString('default', {
    month: 'long'
  });
  var year = dateObj.getFullYear();
  return month + " " + year;
}

function fmtMonthYearNum(time) {
  var dateObj = new Date(time);
  var month = dateObj.getMonth();
  var year = dateObj.getFullYear();
  return year + "_" + month;
}

var currentDisplayTime = 1965;
var yearElement = _$d3Min_8.select("p.year");
var chartElement = _$d3Min_8.select(".chart-outer");
var bars = chartElement.selectAll(".bars rect");
var timeIndicator = chartElement.select(".timeIndicator");

function updateTime() {
  yearElement.text(currentDisplayTime); //update bars

  bars.attr("fill", function (d) {
    var barYear = Number(_$d3Min_8.select(this).attr("class").substring(3));
    var currentYear = Number(currentDisplayTime.substring(currentDisplayTime.length - 4));

    if (barYear < currentYear) {
      return "#ccc";
    } else if (barYear == currentYear) {
      return "#fff";
    } else {
      return "#000";
    }
  }); //update line

  timeIndicator.attr("stroke-dashoffset", function (d) {
    var length = _$d3Min_8.select(this).node().getTotalLength();
    return length * (1 - overallTimePercent);
  });
} //////////////////////////////////////////////////////////////////////
//////////////////1)Smooth Animations, with RAF///////////////////////////////
//////////////////////////////////////////////////////////////////////


function addContinuousListeners() {
  //observer for timeline
  var observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: [0, 0.1]
  };
  let observer = new IntersectionObserver(intersectionCallback, observerOptions);
  var target = _$d3Min_8.select(".time1").node();
  observer.observe(target);
  var latestKnownTop = window.innerHeight;
  var ticking = false;

  function onScroll() {
    latestKnownTop = target.getBoundingClientRect().top;
    requestTick();
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(update);
    }

    ticking = true;
  }

  var accelAmmount = 0.9;

  function update() {
    //reset tick to capture next scroll
    ticking = false;
    var currentTop = latestKnownTop;
    var percent = (window.innerHeight - currentTop) / window.innerHeight;
    if (percent > 1) percent = 1;
    if (percent < 0) percent = 0;
    var newTime = timeScale.invert(percent);
    var newDisplayTime = fmtMonthYear(newTime);
    var timePeriod = fmtMonthYearNum(newTime);
    overallTimePercent = timeScaleOverall(newTime);

    if (newDisplayTime != currentDisplayTime) {
      //update year text
      currentDisplayTime = newDisplayTime;
      updateTime(); //update massacres

      var currentData = massacreData.municipios.filter(m => m.mama[timePeriod]);
      updateMassacres(currentData, timePeriod);
    }
  }

  var listening;

  function intersectionCallback(entries, observer) {
    if (entries[0].intersectionRatio > 0) {
      if (!listening) {
        window.addEventListener("scroll", onScroll);
      }

      listening = true;
    } else {
      window.removeEventListener("scroll", onScroll);
      listening = false;
    }
  } //duplicate
  ////////////////////////////////////////////


  let observer2 = new IntersectionObserver(intersectionCallback2, observerOptions);
  var target2 = _$d3Min_8.select(".time2").node();
  observer2.observe(target2);

  function onScroll2() {
    latestKnownTop2 = target2.getBoundingClientRect().top;
    requestTick2();
  }

  var ticking2 = false;

  function requestTick2() {
    if (!ticking2) {
      requestAnimationFrame(update2);
    }

    ticking2 = true;
  }

  function update2() {
    //reset tick to capture next scroll
    ticking2 = false;
    var currentTop = latestKnownTop2;
    var percent = (window.innerHeight - currentTop) / window.innerHeight;
    if (percent > 1) percent = 1;
    if (percent < 0) percent = 0;
    var newTime = timeScale2.invert(percent);
    var newDisplayTime = fmtMonthYear(newTime);
    var timePeriod = fmtMonthYearNum(newTime);
    overallTimePercent = timeScaleOverall(newTime);

    if (newDisplayTime != currentDisplayTime) {
      //update year text
      currentDisplayTime = newDisplayTime;
      updateTime(); //update massacres

      var currentData = massacreData.municipios.filter(m => m.mama[timePeriod]);
      updateMassacres(currentData, timePeriod);
    }
  }

  var listening2;

  function intersectionCallback2(entries, observer) {
    if (entries[0].intersectionRatio > 0) {
      if (!listening2) {
        window.addEventListener("scroll", onScroll2);
      }

      listening2 = true;
    } else {
      window.removeEventListener("scroll", onScroll2);
      listening2 = false;
    }
  } ////////////////////////////////////////////


  let observer3 = new IntersectionObserver(intersectionCallback3, observerOptions);
  var target3 = _$d3Min_8.select(".time3").node();
  observer3.observe(target3);

  function onScroll3() {
    latestKnownTop3 = target3.getBoundingClientRect().top;
    requestTick3();
  }

  var ticking3 = false;

  function requestTick3() {
    if (!ticking3) {
      requestAnimationFrame(update3);
    }

    ticking3 = true;
  }

  function update3() {
    //reset tick to capture next scroll
    ticking3 = false;
    var currentTop = latestKnownTop3;
    var percent = (window.innerHeight - currentTop) / window.innerHeight;
    if (percent > 1) percent = 1;
    if (percent < 0) percent = 0;
    var newTime = timeScale3.invert(percent);
    var newDisplayTime = fmtMonthYear(newTime);
    var timePeriod = fmtMonthYearNum(newTime);
    overallTimePercent = timeScaleOverall(newTime);

    if (newDisplayTime != currentDisplayTime) {
      //update year text
      currentDisplayTime = newDisplayTime;
      updateTime(); //update massacres

      var currentData = massacreData.municipios.filter(m => m.mama[timePeriod]);
      updateMassacres(currentData, timePeriod);
    }
  }

  var listening3;

  function intersectionCallback3(entries, observer) {
    if (entries[0].intersectionRatio > 0) {
      if (!listening3) {
        window.addEventListener("scroll", onScroll3);
      }

      listening3 = true;
    } else {
      window.removeEventListener("scroll", onScroll3);
      listening3 = false;
    }
  } ////////////////////////////////////////////


  let observer4 = new IntersectionObserver(intersectionCallback4, observerOptions);
  var target4 = _$d3Min_8.select(".time4").node();
  observer4.observe(target4);

  function onScroll4() {
    latestKnownTop4 = target4.getBoundingClientRect().top;
    requestTick4();
  }

  var ticking4 = false;

  function requestTick4() {
    if (!ticking4) {
      requestAnimationFrame(update4);
    }

    ticking4 = true;
  }

  function update4() {
    //reset tick to capture next scroll
    ticking4 = false;
    var currentTop = latestKnownTop4;
    var percent = (window.innerHeight - currentTop) / window.innerHeight;
    if (percent > 1) percent = 1;
    if (percent < 0) percent = 0;
    var newTime = timeScale4.invert(percent);
    var newDisplayTime = fmtMonthYear(newTime);
    var timePeriod = fmtMonthYearNum(newTime);
    overallTimePercent = timeScaleOverall(newTime);

    if (newDisplayTime != currentDisplayTime) {
      //update year text
      currentDisplayTime = newDisplayTime;
      updateTime(); //update massacres

      var currentData = massacreData.municipios.filter(m => m.mama[timePeriod]);
      updateMassacres(currentData, timePeriod);
    }
  }

  var listening4;

  function intersectionCallback4(entries, observer) {
    if (entries[0].intersectionRatio > 0) {
      if (!listening4) {
        window.addEventListener("scroll", onScroll4);
      }

      listening4 = true;
    } else {
      window.removeEventListener("scroll", onScroll4);
      listening4 = false;
    }
  } ////////////////////////////////////////////


  let observer5 = new IntersectionObserver(intersectionCallback5, observerOptions);
  var target5 = _$d3Min_8.select(".time5").node();
  observer5.observe(target5);

  function onScroll5() {
    latestKnownTop5 = target5.getBoundingClientRect().top;
    requestTick5();
  }

  var ticking5 = false;

  function requestTick5() {
    if (!ticking5) {
      requestAnimationFrame(update5);
    }

    ticking5 = true;
  }

  function update5() {
    //reset tick to capture next scroll
    ticking5 = false;
    var currentTop = latestKnownTop5;
    var percent = (window.innerHeight - currentTop) / window.innerHeight;
    if (percent > 1) percent = 1;
    if (percent < 0) percent = 0;
    var newTime = timeScale5.invert(percent);
    var newDisplayTime = fmtMonthYear(newTime);
    var timePeriod = fmtMonthYearNum(newTime);
    overallTimePercent = timeScaleOverall(newTime);

    if (newDisplayTime != currentDisplayTime) {
      //update year text
      currentDisplayTime = newDisplayTime;
      updateTime(); //update massacres

      var currentData = massacreData.municipios.filter(m => m.mama[timePeriod]);
      updateMassacres(currentData, timePeriod);
    }
  }

  var listening5;

  function intersectionCallback5(entries, observer) {
    if (entries[0].intersectionRatio > 0) {
      if (!listening5) {
        window.addEventListener("scroll", onScroll5);
      }

      listening5 = true;
    } else {
      window.removeEventListener("scroll", onScroll5);
      listening5 = false;
    }
  }
}

window.onload = function () {
  addDiscreteListeners();
  addContinuousListeners();
};

var _$main_20 = {};
window.onbeforeunload = function () {
  return window.scrollTo(0, 0);
};

/* removed: var _$$_17 = require("./lib/qsa"); */; // setup map


/* removed: var _$magicMap_19 = require("./magic-map"); */;

var slides = _$$_17(".sequence .slide").reverse();
var aiTriggers = _$$_17(".sequence .ai2html.double .trigger");
var activeAi = null;
var __magicMap_20 = _$$_17("div.magic-map")[0];
var completion = 0;
var active = null;

var activateSlide = function (slide) {
  if (active == slide) return;

  if (active) {
    var exiting = active;
    active.classList.remove("active");
    active.classList.add("exiting");
    setTimeout(() => exiting.classList.remove("exiting"), 1000); //also remove magic map depending on slide type

    if (exiting.classList.contains("map-block") && !slide.classList.contains("map-block")) {
      __magicMap_20.classList.remove("active");
      __magicMap_20.classList.add("exiting");
      setTimeout(() => __magicMap_20.classList.remove("exiting"), 1000);
    }
  } // lazy-load neighboring slides


  var neighbors = [-1, 0, 1, 2];
  var all = _$$_17(".sequence .slide");
  var index = all.indexOf(slide);
  neighbors.forEach(function (offset) {
    var neighbor = all[index + offset];
    if (!neighbor) return;
    var images = _$$_17("[data-src]", neighbor);
    images.forEach(function (img) {
      img.src = img.dataset.src;
      img.removeAttribute("data-src");
    });
  });
  slide.classList.add("active");
  slide.classList.remove("exiting"); //also activate magic map depending on slide type

  if (slide.classList.contains("map-block")) {
    __magicMap_20.classList.add("active");
    __magicMap_20.classList.remove("exiting");
  }

  active = slide;
};

var switchAi = function (trigger) {
  if (activeAi == trigger) return;
  var parent = trigger.parentNode; //handle exiting

  if (activeAi && activeAi.parentNode == trigger.parentNode) {
    //only trigger if siblings
    var exiting = activeAi;
    var exitingState = exiting.getAttribute("state"); //set classes on ai2html container so styles can trickle down

    parent.classList.remove("active" + exitingState);
    parent.classList.add("exiting" + exitingState);
    setTimeout(() => parent.classList.remove("exiting" + exitingState), 1000);
  } //handle entering


  var enteringState = trigger.getAttribute("state");
  parent.classList.add("active" + enteringState);
  parent.classList.remove("exiting" + enteringState);
  activeAi = trigger;
};

var scrollSlides = function () {
  for (var i = 0; i < slides.length; i++) {
    var slide = slides[i];
    var bounds = slide.getBoundingClientRect();

    if (bounds.top < window.innerHeight * .9 && bounds.bottom > 0) {
      var complete = (slides.length - i) / slides.length * 100 | 0;

      if (complete > completion) {
        completion = complete;
      }

      return activateSlide(slide);
    }
  }
};

var scrollAi = function () {
  for (var j = 0; j < aiTriggers.length; j++) {
    var trigger = aiTriggers[j];
    var triggerBounds = trigger.getBoundingClientRect();

    if (triggerBounds.top < window.innerHeight * .9 && triggerBounds.bottom > 0) {
      return switchAi(trigger);
    }
  }
};

var onScroll = function () {
  scrollSlides();
  scrollAi();
};

document.body.classList.add("boot-complete");
window.addEventListener("scroll", onScroll);
onScroll();

}());
//# sourceMappingURL=app.js.map
