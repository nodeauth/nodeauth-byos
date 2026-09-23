const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BJE2ExGB.js","assets/pdf-utils-CDJbbqXy.js","assets/compression-utils-BzBbrBKd.js","assets/vue-core-DHcoxuim.js","assets/element-plus-CTp1djr_.js","assets/element-plus-CqJ-3YyC.css","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-CY07rioj.js","assets/index-CeTN7Y2W.css"])))=>i.map(i=>d[i]);
import { e as Yt, h as En, W as An, X as Dn, u as pn, aW as gn, b1 as On, o as Vn, aG as Ln, q as Fn, p as Bn, aH as en, aM as St, al as tn, ah as nt, H as Hn, aA as Ct, g as Pn, C as Ve, D as nn, w as Wn, aN as Un, K as Nn, at as Xn, an as Yn, J as qn, E as Kn, r as Qn, v as jn, N as Gn, j as Jn, s as Zn, t as el, c as tl, a_ as nl, au as ll, ag as il, az as ol } from "./element-plus-CTp1djr_.js";
import { u as mt, a6 as $, j as he, aF as _, ad as We, ag as It, aa as J, o as sl, X as al, z as rl, U as xt, at as l, G as ln, a2 as Je, aD as be, ar as b, $ as Et, a8 as cl, V as dt, Z as hn, a1 as ul, a4 as ft, aG as qt, l as ae, k as ge, F as lt, ac as Tt, an as dl, W as qe, Y as ot, r as p, g as q, w as fl, aj as kt, S as ml, ah as vl, a7 as rt, v as pl, aB as gl, al as Y, i as x, q as Me, aI as Ge, b as hl, O as Vt, T as yl } from "./vue-core-DHcoxuim.js";
import { _ as yn, M as Rt, N as Kt, H as _l, P as wl, t as Lt, G as bl, x as ut, Q as _n, v as Sl, R as wn, L as bn, __tla as __tla_0 } from "./index-BJE2ExGB.js";
import { g as Ft, u as Sn, v as tt, t as ct, b as on, __tla as __tla_1 } from "./vaultService-CP_oNFz2.js";
import { c as Mt } from "./common-D9c9Q5Qx.js";
import { D as kl } from "./decryptionErrorState-Tk3B3XB5.js";
import { _ as sn } from "./responsiveOverlay-185flkzM.js";
import { u as zl } from "./useVaultList-C08Ol_rS.js";
import { _ as an, __tla as __tla_2 } from "./pdf-utils-CDJbbqXy.js";
import { Q as $l } from "./qr-utils-Cc6U-Akc.js";
import "./simplewebauthn-3qpiAaRi.js";
import "./tanstack-query-CY07rioj.js";
import "./compression-utils-BzBbrBKd.js";
import { __tla as __tla_3 } from "./resourceRegistry-B1hhQL_K.js";
let $o;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_1;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_2;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_3;
        } catch  {}
    })()
]).then(async ()=>{
    function Cl(e) {
        return {
            all: e = e || new Map,
            on: function(n, o) {
                var i = e.get(n);
                i && i.push(o) || e.set(n, [
                    o
                ]);
            },
            off: function(n, o) {
                var i = e.get(n);
                i && i.splice(i.indexOf(o) >>> 0, 1);
            },
            emit: function(n, o) {
                (e.get(n) || []).slice().map(function(i) {
                    i(o);
                }), (e.get("*") || []).slice().map(function(i) {
                    i(n, o);
                });
            }
        };
    }
    function Qt(e, n, o) {
        if (!o) return n;
        const i = e?.[o];
        if (i == null) throw new Error(`Key is ${i} on item (keyField is '${o}')`);
        return i;
    }
    function it(e, n) {
        return e.map((o, i)=>Qt(o, i, n));
    }
    function Tl(e, n, o) {
        const i = [], u = [];
        for(let c = 0; c < e.length; c++){
            const T = e[c], O = Qt(T, c, n), m = o(T, c, O);
            i.push(O), u.push(typeof m == "number" && m > 0 ? m : null);
        }
        return {
            keys: i,
            sizes: u
        };
    }
    function Ml(e, n, o) {
        if (!e || e.keys.length !== n.length || e.sizes.length !== n.length) return !1;
        for(let i = 0; i < n.length; i++)if (e.keys[i] !== Qt(n[i], i, o)) return !1;
        return !0;
    }
    function Ut(e, n, o) {
        if (!Ml(e, n, o)) return {};
        const i = {};
        for(let u = 0; u < e.keys.length; u++){
            const c = e.sizes[u];
            typeof c == "number" && c > 0 && (i[e.keys[u]] = c);
        }
        return i;
    }
    function kn(e, n) {
        if (!e.length || n.length <= e.length) return 0;
        const o = e[0], i = n.indexOf(o);
        if (i <= 0 || i + e.length < n.length && e.length > n.length - i) return 0;
        for(let u = 0; u < e.length; u++)if (n[i + u] !== e[u]) return 0;
        return i;
    }
    function rn(e, n, o, i, u, c = 0) {
        const T = u ?? "start";
        if (T === "nearest") {
            const O = o + i, m = e + n;
            return e >= o && m <= O ? null : e < o ? e + c : m - i + c;
        }
        return T === "end" ? e + n - i + c : T === "center" ? e + (n - i) / 2 + c : e + c;
    }
    function zn(e, n, o, i) {
        let u = null, c = null, T = null, O = !1, m = null;
        const R = [], Z = o.resizeObserver ? ()=>{} : o.onVscrollUpdate(re), v = q(()=>{
            const g = b(e);
            if (o.vscrollData.simpleArray) {
                if (g.index == null) throw new Error("index is required when using simple-array mode with dynamic item measurement");
                return g.index;
            }
            if (o.vscrollData.keyField in g.item) return g.item[o.vscrollData.keyField];
            throw new Error(`keyField '${o.vscrollData.keyField}' not found in your item. You should set a valid keyField prop on your Scroller`);
        }), I = q(()=>o.vscrollData.sizes[v.value] || 0), H = q(()=>b(e).active && o.vscrollData.active);
        function le() {
            H.value ? c !== v.value && (c = v.value, u = null, T = null, V(v.value)) : u = v.value;
        }
        function ie() {
            b(e).watchData && !o.resizeObserver ? m = be(()=>b(e).item, ()=>{
                ee();
            }, {
                deep: !0
            }) : m && (m(), m = null);
        }
        function re({ force: g }) {
            !H.value && g && (T = v.value), (u === v.value || g || !I.value) && le();
        }
        function ee() {
            le();
        }
        function C(g) {
            o.undefinedMap[g] && o.undefinedSizeCount.value--, o.undefinedMap[g] = void 0;
        }
        function N(g, h) {
            if (o.vscrollData.sizes[g]) {
                C(g);
                return;
            }
            if (h) {
                o.undefinedMap[g] || o.undefinedSizeCount.value++, o.undefinedMap[g] = !0;
                return;
            }
            o.undefinedMap[g] && (o.undefinedSizeCount.value--, o.undefinedMap[g] = !1);
        }
        function V(g) {
            dt(()=>{
                if (v.value === g) {
                    const h = b(n);
                    if (!h) return;
                    const k = h.offsetWidth, P = h.offsetHeight;
                    te(k, P);
                }
                c = null;
            });
        }
        function te(g, h) {
            const k = ~~(o.direction.value === "vertical" ? h : g);
            k && I.value !== k && X(k);
        }
        function X(g) {
            var h, k;
            C(v.value), o.vscrollData.sizes[v.value] = g, b(e).emitResize && ((k = (h = b(i)) == null ? void 0 : h.onResize) == null || k.call(h, v.value));
        }
        function j() {
            if (!o.resizeObserver || O) return;
            const g = b(n);
            g && (o.resizeObserver.observe(g), g.$_vs_id = v.value, g.$_vs_onResize = ce, O = !0);
        }
        function Q() {
            if (!o.resizeObserver || !O) return;
            const g = b(n);
            g && (o.resizeObserver.unobserve(g), g.$_vs_onResize = void 0, O = !1);
        }
        function ce(g, h, k) {
            v.value === g && te(h, k);
        }
        R.push(be(()=>b(e).watchData, ()=>{
            ie();
        })), o.resizeObserver || R.push(be(()=>b(e).sizeDependencies, ()=>{
            ee();
        }, {
            deep: !0
        })), R.push(be(v, (g, h)=>{
            const k = b(n);
            k && (k.$_vs_id = g), C(h), N(g, H.value);
            const P = o.vscrollData.sizes[g];
            if (!P) {
                u = g, ee();
                return;
            }
            C(g), O && (o.vscrollData.sizes[g] = P);
        })), R.push(be(H, (g)=>{
            N(v.value, g), o.resizeObserver ? g ? j() : Q() : g && T === v.value && le();
        })), ie();
        function ne() {
            H.value && (le(), j());
        }
        function E() {
            Z(), Q(), C(v.value);
            const g = b(n);
            g && (g.$_vs_id = void 0, g.$_vs_onResize = void 0), m && (m(), m = null);
            for (const h of R)h();
            R.length = 0;
        }
        return {
            id: v,
            size: I,
            finalActive: H,
            updateSize: le,
            mount: ne,
            unmount: E
        };
    }
    const xl = {
        itemsLimit: 1e3
    };
    function $n(e) {
        return typeof window < "u" && e === window;
    }
    const Rl = (()=>{
        if (typeof document > "u") return "negative";
        const e = document.createElement("div"), n = document.createElement("div");
        e.style.width = "4px", e.style.height = "1px", e.style.overflow = "auto", e.style.direction = "rtl", n.style.width = "8px", n.style.height = "1px", e.appendChild(n), document.body.appendChild(e), e.scrollLeft = -1;
        const o = e.scrollLeft < 0;
        return document.body.removeChild(e), o ? "negative" : "default";
    })();
    function at(e, n, o) {
        return n !== "horizontal" || !o || $n(o) || getComputedStyle(o).direction !== "rtl" ? e : Rl === "negative" ? -e : e;
    }
    function Il(e, n, o) {
        return at(e, n, o);
    }
    function Bt(e, n, o, i) {
        const u = Il(o, n, e), c = !!(i != null && i.smooth);
        if ($n(e)) {
            n === "vertical" ? e.scrollTo({
                top: u,
                behavior: c ? "smooth" : "auto"
            }) : e.scrollTo({
                left: u,
                behavior: c ? "smooth" : "auto"
            });
            return;
        }
        if (typeof e.scrollTo == "function") {
            e.scrollTo(n === "vertical" ? {
                top: u,
                behavior: c ? "smooth" : "auto"
            } : {
                left: u,
                behavior: c ? "smooth" : "auto"
            });
            return;
        }
        n === "vertical" ? e.scrollTop = u : e.scrollLeft = u;
    }
    function El(e, n, o) {
        return o ? n === "vertical" ? window.innerHeight : window.innerWidth : n === "vertical" ? e.clientHeight : e.clientWidth;
    }
    const Al = /auto|scroll/;
    function Cn(e, n) {
        return e.parentNode === null ? n : Cn(e.parentNode, [
            ...n,
            e
        ]);
    }
    function Ht(e, n) {
        return getComputedStyle(e, null).getPropertyValue(n);
    }
    function Dl(e) {
        return Ht(e, "overflow") + Ht(e, "overflow-y") + Ht(e, "overflow-x");
    }
    function Ol(e) {
        return Al.test(Dl(e));
    }
    function zt(e) {
        if (!(e instanceof HTMLElement || e instanceof SVGElement)) return;
        const n = Cn(e.parentNode, []);
        for(let o = 0; o < n.length; o += 1)if (n[o] instanceof Element && Ol(n[o])) return n[o];
        return document.scrollingElement || document.documentElement;
    }
    let Nt = !1;
    function Vl() {
        return Nt;
    }
    if (typeof window < "u") {
        Nt = !1;
        try {
            const e = Object.defineProperty({}, "passive", {
                get () {
                    Nt = !0;
                }
            });
            window.addEventListener("test", null, e);
        } catch  {}
    }
    let Ll = 0;
    function Pt(e) {
        const n = e;
        n._vs_styleStamp++;
    }
    function Fl(e, n, o) {
        const i = e?.[o];
        if (i == null) throw new Error(`Key is ${i} on item (keyField is '${o}')`);
        return i;
    }
    function Tn(e, n, o, i, u) {
        const c = J([]), T = J(0), O = J(!1);
        let m = 0, R = 0;
        const Z = new Map, v = new Map;
        let I = !1, H = 0, le = 0, ie = !1, re = null, ee = null, C = null, N = 0, V = null, te = [], X = null, j = null, Q = null, ce = !1;
        const ne = new Set, E = J({}), g = q(()=>{
            const t = b(e);
            return t.items.length > 0 && typeof t.items[0] != "object";
        }), h = q(()=>{
            const t = b(e);
            if (t.itemSize === null) {
                const s = {
                    [-1]: {
                        accumulator: 0
                    }
                }, y = t.items, M = t.sizeField ?? "size", B = t.minItemSize, G = E.value;
                let se = 1e4, ye = 0, Ee;
                for(let Re = 0, Ae = y.length; Re < Ae; Re++){
                    const De = g.value ? Re : Fl(y[Re], Re, t.keyField);
                    Ee = G[De] || y[Re][M] || B, Ee < se && (se = Ee), ye += Ee, s[Re] = {
                        accumulator: ye,
                        size: Ee
                    };
                }
                return N = se, s;
            }
            return [];
        }), k = q(()=>c.value.filter((t)=>t.nr.used).sort((t, s)=>t.nr.index - s.nr.index)), P = q(()=>{
            const t = b(e), s = g.value ? null : t.keyField;
            return Tl(t.items, s, (y, M, B)=>t.itemSize != null ? t.itemSize : E.value[B] || y?.[t.sizeField ?? "size"] || void 0);
        });
        function A(t) {
            const s = b(e);
            return E.value = Ut(t, s.items, g.value ? null : s.keyField), Object.keys(E.value).length > 0;
        }
        function ue(t) {
            let s = v.get(t);
            return s || (s = [], v.set(t, s)), s;
        }
        function fe(t, s, y, M, B) {
            const G = ml({
                id: Ll++,
                index: s,
                used: !0,
                key: M,
                type: B
            }), se = vl({
                item: y,
                position: 0,
                offset: 0,
                nr: G,
                _vs_styleStamp: 0
            });
            return t.push(se), se;
        }
        function f(t) {
            const s = ue(t);
            if (s && s.length) {
                const y = s.pop();
                return y.nr.used = !0, Pt(y), y;
            }
        }
        function w(t) {
            const s = t.nr.type;
            ue(s).push(t), t.nr.used = !1, t.position = -9999, Pt(t), Z.delete(t.nr.key);
        }
        function D() {
            Z.clear(), v.clear();
            for(let t = 0, s = c.value.length; t < s; t++){
                const y = c.value[t];
                y && w(y);
            }
        }
        function me(t) {
            let s = -1;
            return s = requestAnimationFrame(()=>{
                ne.delete(s), t();
            }), ne.add(s), s;
        }
        function r() {
            for (const t of ne)cancelAnimationFrame(t);
            ne.clear();
        }
        function S() {
            re && (clearTimeout(re), re = null), ee && (clearTimeout(ee), ee = null), C && (clearTimeout(C), C = null), j && (clearTimeout(j), j = null), Q && (clearTimeout(Q), Q = null);
        }
        function F() {
            var t;
            (t = u?.onResize) == null || t.call(u), O.value && Le(!1);
        }
        function ve() {
            X && !ce && we();
            const t = b(e);
            if (!I) {
                if (I = !0, re) return;
                const s = ()=>me(()=>{
                        I = !1;
                        const { continuous: y } = Le(!1, !0);
                        y || (ee && clearTimeout(ee), ee = setTimeout(ve, t.updateInterval + 100));
                    });
                s(), t.updateInterval && (re = setTimeout(()=>{
                    re = null, I && s();
                }, t.updateInterval));
            }
        }
        function a(t, s) {
            var y, M;
            O.value && (t || s.boundingClientRect.width !== 0 || s.boundingClientRect.height !== 0 ? ((y = u?.onVisible) == null || y.call(u), me(()=>{
                Le(!1);
            })) : (M = u?.onHidden) == null || M.call(u));
        }
        function d() {
            const t = b(n), s = t ? zt(t) : void 0;
            return window.document && (s === window.document.documentElement || s === window.document.body) ? window : s || window;
        }
        function z() {
            const t = b(o);
            return t ? b(e).direction === "vertical" ? t.scrollHeight : t.scrollWidth : 0;
        }
        function L() {
            const t = b(n);
            if (!t) return {
                start: 0,
                end: 0
            };
            const s = b(e), y = s.direction === "vertical";
            let M;
            if (s.pageMode) {
                const B = t.getBoundingClientRect(), G = y ? B.height : B.width;
                let se = -(y ? B.top : B.left), ye = y ? window.innerHeight : window.innerWidth;
                se < 0 && (ye += se, se = 0), se + ye > G && (ye = G - se), M = {
                    start: se,
                    end: se + ye
                };
            } else y ? M = {
                start: t.scrollTop,
                end: t.scrollTop + t.clientHeight
            } : M = {
                start: at(t.scrollLeft, s.direction, t),
                end: at(t.scrollLeft, s.direction, t) + t.clientWidth
            };
            return M;
        }
        function K() {
            const t = b(n);
            if (!t) return {
                start: 0,
                end: 0
            };
            if (b(e).direction === "vertical") {
                const s = at(t.scrollLeft, "horizontal", t);
                return {
                    start: s,
                    end: s + t.clientWidth
                };
            }
            return {
                start: t.scrollTop,
                end: t.scrollTop + t.clientHeight
            };
        }
        function W(t) {
            const s = b(e);
            if (s.itemSize != null) return s.itemSize;
            const y = h.value[t];
            return y?.size || Number(s.minItemSize) || 0;
        }
        function oe(t) {
            var s;
            const y = b(e), M = y.gridItems || 1;
            return t <= 0 ? 0 : y.itemSize != null ? Math.floor(t / M) * y.itemSize : ((s = h.value[t - 1]) == null ? void 0 : s.accumulator) || 0;
        }
        function Te(t) {
            const s = b(e), y = s.items.length, M = s.gridItems || 1;
            if (!y) return 0;
            if (s.itemSize != null) {
                const ye = Math.floor(t / s.itemSize) * M;
                return Math.min(Math.max(ye, 0), y - 1);
            }
            let B = 0, G = y - 1, se = 0;
            for(; B <= G;){
                const ye = Math.floor((B + G) / 2);
                oe(ye) <= t ? (se = ye, B = ye + 1) : G = ye - 1;
            }
            return se;
        }
        function we() {
            j && (clearTimeout(j), j = null), X = null;
        }
        function $e() {
            j && clearTimeout(j), j = setTimeout(()=>{
                X = null, j = null;
            }, 150);
        }
        function Ce(t, s) {
            if (!t.length) {
                we();
                return;
            }
            const y = Math.max(L().start - z(), 0), M = Math.min(Te(y), t.length - 1), B = t[M], G = s ? B?.[s] : M;
            if (G == null) {
                we();
                return;
            }
            const se = z() + oe(M);
            X = {
                key: G,
                offset: L().start - se
            };
        }
        function ke(t) {
            if (!X) return !1;
            const s = b(e), y = t ?? s.items, M = g.value ? null : s.keyField, B = it(y, M).indexOf(X.key);
            if (B === -1) return we(), !1;
            const G = z() + oe(B) + X.offset, se = L().start;
            return Math.abs(G - se) < .5 ? !1 : (ce = !0, st(G), me(()=>{
                ce = !1;
            }), !0);
        }
        function Qe() {
            b(e).pageMode ? vt() : pt();
        }
        function vt() {
            V = d(), V.addEventListener("scroll", ve, Vl() ? {
                passive: !0
            } : !1), V.addEventListener("resize", F);
        }
        function pt() {
            V && (V.removeEventListener("scroll", ve), V.removeEventListener("resize", F), V = null);
        }
        function gt(t, s, y, M, B, G) {
            const se = Math.ceil(t / s) * y, ye = Math.max(0, Math.floor(B.start / y)), Ee = Math.min(Math.ceil(B.end / y), Math.ceil(t / s)), Re = Math.max(0, Math.floor(G.start / M)), Ae = Math.min(Math.ceil(G.end / M), s), De = [];
            for(let Ue = ye; Ue < Ee; Ue++){
                const U = Ue * s;
                for(let Be = Re; Be < Ae; Be++){
                    const Fe = U + Be;
                    if (Fe >= t) break;
                    De.push(Fe);
                }
            }
            const Se = De[0] ?? 0, Ie = De.at(-1) ?? -1;
            return {
                renderedIndices: De,
                startIndex: Se,
                endIndex: Ie + 1,
                visibleStartIndex: Se,
                visibleEndIndex: Ie,
                totalSize: se
            };
        }
        function ht() {
            const t = b(e);
            if (!t.gridItems || t.itemSize == null) return !1;
            const s = b(n);
            if (!s) return !1;
            const y = t.itemSecondarySize || t.itemSize, M = t.direction === "vertical" ? s.clientWidth : s.clientHeight;
            return y * t.gridItems > M;
        }
        function Le(t, s = !1) {
            var y, M;
            const B = b(e), G = B.itemSize, se = B.gridItems || 1, ye = B.itemSecondarySize || G, Ee = N, Re = B.typeField, Ae = g.value ? null : B.keyField, De = B.items, Se = De.length, Ie = h.value, Ue = Z, U = c.value;
            let Be = null, Fe = null, _e, ze, Ye, Ne, Xe;
            if (!Se) _e = ze = Ne = Xe = Ye = 0;
            else if (ie) _e = Ne = 0, ze = Xe = Math.min(B.prerender, De.length), Ye = 0;
            else {
                const de = L(), Oe = K();
                if (s) {
                    let xe = de.start - H;
                    xe < 0 && (xe = -xe);
                    let et = Oe.start - le;
                    et < 0 && (et = -et);
                    const bt = G === null && xe >= Ee || G !== null && xe >= G, He = se > 1 && G != null && et >= ye;
                    if (!bt && !He) return {
                        continuous: !0
                    };
                }
                H = de.start, le = Oe.start;
                const Ke = B.buffer;
                de.start -= Ke, de.end += Ke, Oe.start -= Ke, Oe.end += Ke;
                let je = 0;
                const wt = b(o);
                wt && (je = wt.scrollHeight, de.start -= je);
                const Jt = b(i);
                if (Jt) {
                    const xe = Jt.scrollHeight;
                    de.end += xe;
                }
                if (G === null) {
                    let xe, et = 0, bt = Se - 1, He = ~~(Se / 2), Zt;
                    do Zt = He, xe = Ie[He].accumulator, xe < de.start ? et = He : He < Se - 1 && Ie[He + 1].accumulator > de.start && (bt = He), He = ~~((et + bt) / 2);
                    while (He !== Zt);
                    for(He < 0 && (He = 0), _e = He, Ye = Ie[Se - 1].accumulator, ze = He; ze < Se && Ie[ze].accumulator < de.end; ze++);
                    for(ze === -1 ? ze = De.length - 1 : (ze++, ze > Se && (ze = Se)), Ne = _e; Ne < Se && je + Ie[Ne].accumulator < de.start; Ne++);
                    for(Xe = Ne; Xe < Se && je + Ie[Xe].accumulator < de.end; Xe++);
                } else if (se > 1) {
                    const xe = gt(Se, se, G, ye, de, Oe);
                    Be = xe.renderedIndices, Fe = new Set(Be), _e = xe.startIndex, ze = xe.endIndex, Ne = xe.visibleStartIndex, Xe = xe.visibleEndIndex, Ye = xe.totalSize;
                } else {
                    _e = ~~(de.start / G * se);
                    const xe = _e % se;
                    _e -= xe, ze = Math.ceil(de.end / G * se), Ne = Math.max(0, Math.floor((de.start - je) / G * se)), Xe = Math.floor((de.end - je) / G * se), _e < 0 && (_e = 0), ze > Se && (ze = Se), Ne < 0 && (Ne = 0), Xe > Se && (Xe = Se), Ye = Math.ceil(Se / se) * G;
                }
            }
            ze - _e > xl.itemsLimit && At(), T.value = Ye;
            let pe;
            const Gt = _e <= R && ze >= m;
            if (!Gt || t) D();
            else for(let de = 0, Oe = U.length; de < Oe; de++){
                const Ke = U[de];
                if (Ke && (pe = Ke, pe.nr.used)) {
                    const je = Fe ? Fe.has(pe.nr.index) : pe.nr.index >= _e && pe.nr.index < ze, wt = G || Ie[pe.nr.index] && Ie[pe.nr.index].size;
                    (!je || !wt) && w(pe);
                }
            }
            let Ze, _t;
            const In = Be ?? Array.from({
                length: Math.max(0, ze - _e)
            }, (de, Oe)=>_e + Oe);
            for (const de of In){
                if (!(G || Ie[de] && Ie[de].size)) continue;
                Ze = De[de];
                const Oe = Ae ? Ze[Ae] : de;
                if (Oe == null) throw new Error(`Key is ${Oe} on item (keyField is '${Ae}')`);
                if (pe = Ue.get(Oe), pe) pe.item !== Ze && (pe.item = Ze), pe.nr.used || console.warn(`Expected existing view's used flag to be true, got ${pe.nr.used}`);
                else {
                    if (_t = Ze[Re], pe = f(_t), pe) {
                        const Ke = pe.nr.index !== de || pe.nr.key !== Oe;
                        pe.item = Ze, pe.nr.index = de, pe.nr.key = Oe, pe.nr.type !== _t && console.warn("Reused view's type does not match pool's type"), Ke && Pt(pe);
                    } else pe = fe(U, de, Ze, Oe, _t);
                    Ue.set(Oe, pe);
                }
                G === null ? (pe.position = ((y = Ie[de - 1]) == null ? void 0 : y.accumulator) || 0, pe.offset = 0) : (pe.position = Math.floor(de / se) * G, pe.offset = de % se * ye);
            }
            return m = _e, R = ze, B.emitUpdate && ((M = u?.onUpdate) == null || M.call(u, _e, ze, Ne, Xe)), C && clearTimeout(C), C = setTimeout(yt, B.updateInterval + 300), {
                continuous: Gt
            };
        }
        function At() {
            throw Q = setTimeout(()=>{
                Q = null, console.warn("It seems the scroller element isn't scrolling, so it tries to render all the items at once.", "Scroller:", b(n)), console.warn("Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.");
            }), new Error("Rendered items limit reached");
        }
        function Dt() {
            if (ht()) return !1;
            const t = c.value.filter(({ nr: s })=>s.used);
            for(let s = 1; s < t.length; s++)if (t[s].nr.index !== t[s - 1].nr.index + 1) return !0;
            return !1;
        }
        function yt() {
            c.value.sort((t, s)=>t.nr.index - s.nr.index), Dt() && (Le(!1), C && clearTimeout(C));
        }
        function Ot(t, s) {
            const y = b(e), M = b(n);
            if (!M) return;
            const B = Math.max(0, Math.min(t, y.items.length - 1)), G = L().start, se = El(M, y.direction, y.pageMode), ye = oe(B), Ee = W(B), Re = rn(ye, Ee, G, se, s?.align, s?.offset ?? 0);
            if (Re != null && (st(Re, s), y.gridItems && y.itemSize != null)) {
                const Ae = b(n);
                if (!Ae) return;
                const De = y.gridItems, Se = y.itemSecondarySize || y.itemSize, Ie = B % De * Se, Ue = y.direction === "vertical" ? "horizontal" : "vertical", U = Ue === "horizontal" ? at(Ae.scrollLeft, "horizontal", Ae) : Ae.scrollTop, Be = Ue === "horizontal" ? Ae.clientWidth : Ae.clientHeight, Fe = rn(Ie, Se, U, Be, s?.align, s?.offset ?? 0);
                Fe != null && Bt(Ae, Ue, Fe, s);
            }
        }
        function st(t, s) {
            const y = b(e), M = b(n);
            if (M) if (y.pageMode) {
                const B = zt(M), G = B.getBoundingClientRect(), se = M.getBoundingClientRect(), ye = y.direction === "vertical" ? "top" : "left", Ee = zt(M) === document.documentElement || zt(M) === document.body ? y.direction === "vertical" ? window.scrollY : window.scrollX : at(y.direction === "vertical" ? B.scrollTop : B.scrollLeft, y.direction, B), Re = se[ye] - G[ye];
                Bt(B.tagName === "HTML" ? window : B, y.direction, t + Ee + Re, s);
            } else Bt(M, y.direction, t, s);
        }
        const Pe = b(e);
        return te = it(Pe.items, Pe.items.length > 0 && typeof Pe.items[0] != "object" ? null : Pe.keyField), Pe.cache && A(Pe.cache), Pe.prerender && (ie = !0, Le(!1)), Pe.gridItems && !Pe.itemSize && console.error("[vue-recycle-scroller] You must provide an itemSize when using gridItems"), Je(()=>{
            Qe(), dt(()=>{
                ie = !1, Le(!0), O.value = !0;
            });
        }), hn(()=>{
            const t = H;
            typeof t == "number" && dt(()=>{
                st(t);
            });
        }), Et(()=>{
            S(), r(), pt();
        }), be(()=>b(e).cache, (t)=>{
            A(t), Le(!0);
        }), be(()=>b(e).items, (t, s)=>{
            const y = b(e), M = g.value ? null : y.keyField, B = it(t, M);
            if (y.shift) {
                const G = s ? it(s, M) : te;
                kn(G, B) > 0 ? Ce(s ?? [], M) : we();
            } else we();
            te = B, ke(t), Le(!0);
        }), be(()=>b(e).pageMode, ()=>{
            Qe(), Le(!1);
        }), be(h, ()=>{
            ke() && $e(), Le(!1);
        }, {
            deep: !0
        }), be(()=>b(e).gridItems, ()=>{
            Le(!0);
        }), be(()=>b(e).itemSecondarySize, ()=>{
            Le(!0);
        }), {
            pool: c,
            visiblePool: k,
            totalSize: T,
            ready: O,
            sizes: h,
            simpleArray: g,
            scrollToItem: Ot,
            scrollToPosition: st,
            getScroll: L,
            findItemIndex: Te,
            getItemOffset: oe,
            getItemSize: W,
            cacheSnapshot: P,
            restoreCache: A,
            updateVisibleItems: Le,
            handleScroll: ve,
            handleResize: F,
            handleVisibilityChange: a,
            sortViews: yt
        };
    }
    function Xt(e) {
        return e.item;
    }
    function Bl(e) {
        return e._vs_styleStamp ?? 0;
    }
    const Mn = [
        "position",
        "top",
        "left",
        "transform",
        "willChange",
        "visibility",
        "pointerEvents"
    ];
    function cn(e) {
        const n = {};
        for (const o of Mn)n[o] = e.style[o];
        return n;
    }
    function xn(e, n) {
        for (const o of Mn)e.style[o] = n[o] ?? "";
    }
    function un(e, n, o, i) {
        if (!("view" in n)) {
            xn(e, i);
            return;
        }
        const u = o === "vertical", c = e.tagName === "TR", T = u ? `translateY(${n.view.position}px) translateX(${n.view.offset}px)` : `translateX(${n.view.position}px) translateY(${n.view.offset}px)`;
        e.style.position = "absolute", e.style.top = u && c ? `${n.view.position}px` : "0px", e.style.left = !u && c ? `${n.view.position}px` : "0px", e.style.transform = c ? "" : T, e.style.willChange = c ? "unset" : "transform", e.style.visibility = n.view.nr.used ? "visible" : "hidden", e.style.pointerEvents = n.view.nr.used ? "" : "none";
    }
    function dn(e) {
        return "view" in e ? {
            item: Xt(e.view).item,
            active: e.view.nr.used,
            index: e.view.nr.index,
            watchData: e.watchData ?? !1,
            emitResize: e.emitResize ?? !1,
            sizeDependencies: e.sizeDependencies ?? null,
            onResize: e.onResize
        } : {
            watchData: !1,
            emitResize: !1,
            sizeDependencies: null,
            ...e
        };
    }
    function fn(e, n, o, i) {
        return o ? i ?? null : e?.[n] ?? null;
    }
    function Hl(e) {
        let n = 0, o = {};
        const i = Cl();
        let u = !1, c, T = !1, O = [], m = null, R = null;
        const Z = new Set, v = cl({
            active: !0,
            sizes: {},
            keyField: b(e).keyField,
            simpleArray: !1
        }), I = q(()=>b(e).direction), H = q(()=>b(b(e).el)), le = q(()=>b(b(e).before)), ie = q(()=>b(b(e).after)), re = new Map;
        function ee(a) {
            let d = -1;
            return d = requestAnimationFrame(()=>{
                Z.delete(d), a();
            }), Z.add(d), d;
        }
        function C() {
            for (const a of Z)cancelAnimationFrame(a);
            Z.clear();
        }
        typeof ResizeObserver < "u" && (c = new ResizeObserver((a)=>{
            ee(()=>{
                if (Array.isArray(a)) {
                    for (const d of a)if (d.target && d.target.$_vs_onResize) {
                        let z, L;
                        if (d.borderBoxSize) {
                            const K = d.borderBoxSize[0];
                            z = K.inlineSize, L = K.blockSize;
                        } else z = d.contentRect.width, L = d.contentRect.height;
                        d.target.$_vs_onResize(d.target.$_vs_id, z, L);
                    }
                }
            });
        }));
        const N = {
            vscrollData: v,
            resizeObserver: c,
            direction: I,
            undefinedMap: o,
            undefinedSizeCount: {
                get value () {
                    return n;
                },
                set value (a){
                    n = a;
                }
            },
            onVscrollUpdate (a) {
                const d = (z)=>{
                    a(z);
                };
                return i.on("vscroll:update", d), ()=>i.off("vscroll:update", d);
            }
        };
        rt("vscrollData", v), rt("vscrollParent", {
            get $_undefinedSizes () {
                return n;
            },
            set $_undefinedSizes (a){
                n = a;
            },
            get $_undefinedMap () {
                return o;
            },
            set $_undefinedMap (a){
                o = a;
            },
            $_events: i,
            direction: I
        }), rt("vscrollResizeObserver", c), rt("vscrollMeasurementContext", N), rt("vscrollAnchorRegistry", {
            delete (a) {
                re.delete(a);
            },
            set (a, d) {
                re.set(a, d);
            }
        });
        const V = q(()=>{
            const a = b(e);
            return a.items.length > 0 && typeof a.items[0] != "object";
        }), te = q(()=>{
            const a = [], d = b(e), { items: z, keyField: L } = d, K = V.value, W = v.sizes, oe = z.length;
            for(let Te = 0; Te < oe; Te++){
                const we = z[Te], $e = K ? Te : we[L];
                let Ce = W[$e];
                typeof Ce > "u" && !o[$e] && (Ce = 0), a.push({
                    item: we,
                    id: $e,
                    size: Ce
                });
            }
            return a;
        }), X = b(e);
        O = it(X.items, V.value ? null : X.keyField), X.cache && (v.sizes = Ut(X.cache, X.items, V.value ? null : X.keyField));
        const j = q(()=>{
            const a = b(e);
            return {
                items: te.value,
                keyField: "id",
                direction: a.direction,
                itemSize: null,
                gridItems: void 0,
                itemSecondarySize: void 0,
                minItemSize: a.minItemSize,
                sizeField: "size",
                typeField: "type",
                buffer: a.buffer ?? 200,
                pageMode: a.pageMode ?? !1,
                shift: !1,
                cache: a.cache,
                prerender: a.prerender ?? 0,
                emitUpdate: a.emitUpdate ?? !1,
                updateInterval: a.updateInterval ?? 0
            };
        });
        function Q() {
            var a, d;
            D(), (d = (a = b(e)).onResize) == null || d.call(a);
        }
        function ce() {
            var a, d;
            i.emit("vscroll:update", {
                force: !1
            }), (d = (a = b(e)).onVisible) == null || d.call(a);
        }
        const ne = Tn(j, H, le, ie, {
            onResize: Q,
            onVisible: ce,
            onHidden: ()=>{
                var a, d;
                return (d = (a = b(e)).onHidden) == null ? void 0 : d.call(a);
            },
            onUpdate: (a, d, z, L)=>{
                var K, W;
                return (W = (K = b(e)).onUpdate) == null ? void 0 : W.call(K, a, d, z, L);
            }
        }), E = new WeakMap;
        function g() {
            R != null && (cancelAnimationFrame(R), Z.delete(R), R = null);
        }
        function h() {
            g(), m = null;
        }
        function k() {
            m == null || R != null || (R = ee(()=>{
                R = null, fe();
            }));
        }
        function P() {
            const a = H.value;
            if (!a) return null;
            const d = a.getBoundingClientRect();
            let z = null;
            for (const [L, K] of re.entries()){
                if (!K.active || getComputedStyle(L).visibility === "hidden") continue;
                const W = L.getBoundingClientRect();
                if (W.bottom <= d.top || W.top >= d.bottom) continue;
                const oe = Math.max(W.top, d.top) - d.top;
                (!z || oe < z.score) && (z = {
                    key: K.id,
                    offset: W.top - d.top,
                    score: oe
                });
            }
            return z;
        }
        function A(a) {
            const d = H.value;
            if (!d) {
                h();
                return;
            }
            const z = d.scrollTop, L = Math.min(ne.findItemIndex(z), a.length - 1), K = a[L];
            if (K == null) {
                h();
                return;
            }
            const W = P();
            m = {
                logicalKey: K,
                logicalOffset: z - ne.getItemOffset(L),
                pendingKeys: new Set,
                stableFrames: 0,
                visualKey: W?.key ?? null,
                visualOffset: W?.offset ?? 0
            };
        }
        function ue(a) {
            const d = H.value;
            return !d || Math.abs(d.scrollTop - a) < .5 ? !1 : (T = !0, d.scrollTop = a, d.dispatchEvent(new Event("scroll")), ee(()=>{
                T = !1;
            }), !0);
        }
        function fe() {
            const a = m, d = H.value;
            if (!a || !d) return;
            const z = te.value.findIndex((oe)=>oe.id === a.logicalKey);
            if (z === -1) {
                h();
                return;
            }
            let L = !1;
            const K = ne.getItemOffset(z) + a.logicalOffset;
            if (L = ue(K) || L, a.visualKey != null) for (const [oe, Te] of re.entries()){
                if (!Te.active || Te.id !== a.visualKey || getComputedStyle(oe).visibility === "hidden") continue;
                const we = oe.getBoundingClientRect().top - d.getBoundingClientRect().top - a.visualOffset;
                L = ue(d.scrollTop + we) || L;
                break;
            }
            let W = !0;
            for (const oe of a.pendingKeys)if (!(typeof v.sizes[oe] == "number" && v.sizes[oe] > 0)) {
                W = !1;
                break;
            }
            if (!L && W) {
                if (a.stableFrames++, a.stableFrames >= 2) {
                    h();
                    return;
                }
            } else a.stableFrames = 0;
            k();
        }
        function f(a, d, z, L) {
            const K = fl(), W = kt(d), oe = kt(z), Te = kt({
                onResize: z.onResize
            }), we = kt(a), $e = K.run(()=>(be(()=>{
                    const Ce = W.value;
                    if (!("view" in Ce)) return {
                        active: oe.value.active,
                        direction: I.value,
                        id: fn(oe.value.item, b(e).keyField, v.simpleArray, oe.value.index),
                        legacy: !0
                    };
                    const { view: ke } = Ce;
                    return {
                        active: ke.nr.used,
                        direction: I.value,
                        id: Xt(ke).id,
                        legacy: !1,
                        position: ke.position,
                        offset: ke.offset,
                        styleStamp: Bl(ke)
                    };
                }, ()=>{
                    const Ce = we.value;
                    if (Ce) {
                        const ke = W.value, Qe = "view" in ke ? Xt(ke.view).id : fn(oe.value.item, b(e).keyField, v.simpleArray, oe.value.index);
                        Qe != null && re.set(Ce, {
                            active: oe.value.active && v.active,
                            id: Qe
                        }), un(Ce, W.value, I.value, L);
                    }
                }, {
                    immediate: !0
                }), zn(oe, we, N, Te)));
            $e.mount(), E.set(a, {
                binding: W,
                scope: K,
                options: oe,
                callbacks: Te,
                el: we,
                controller: $e,
                restoreStyles: L
            });
        }
        const w = {
            mounted (a, d) {
                const z = cn(a);
                f(a, d.value, dn(d.value), z);
            },
            updated (a, d) {
                const z = E.get(a), L = dn(d.value);
                if (!z) {
                    const K = cn(a);
                    f(a, d.value, L, K);
                    return;
                }
                z.binding.value = d.value, z.options.value = L, z.callbacks.value = {
                    onResize: L.onResize
                }, z.el.value = a, un(a, d.value, I.value, z.restoreStyles);
            },
            unmounted (a) {
                const d = E.get(a);
                d && (d.controller.unmount(), d.scope.stop(), xn(a, d.restoreStyles), re.delete(a), E.delete(a));
            }
        };
        function D(a = !1) {
            (a || V.value) && (v.sizes = {}), i.emit("vscroll:update", {
                force: !0
            });
        }
        function me(a, d) {
            ne.scrollToItem(a, d);
        }
        function r(a) {
            const d = b(e);
            return v.sizes = Ut(a, d.items, V.value ? null : d.keyField), ne.restoreCache(a);
        }
        function S(a, d) {
            const z = b(e), L = V.value ? d ?? z.items.indexOf(a) : a[z.keyField];
            return v.sizes[L] || 0;
        }
        function F() {
            const a = H.value;
            a && (u || (u = !0, dt(()=>{
                a.scrollTop = a.scrollHeight + 5e3;
                const d = ()=>{
                    a.scrollTop = a.scrollHeight + 5e3, ee(()=>{
                        a.scrollTop = a.scrollHeight + 5e3, n === 0 ? u = !1 : ee(d);
                    });
                };
                ee(d);
            })));
        }
        function ve() {
            m && !T && h();
        }
        return be(()=>b(e).items, (a, d)=>{
            const z = b(e), L = V.value ? null : z.keyField, K = it(a, L);
            if (z.shift) {
                const W = d ? it(d, L) : O, oe = kn(W, K);
                oe > 0 ? (A(W), m && (m.pendingKeys = new Set(K.slice(0, oe)), m.stableFrames = 0, dt(()=>{
                    m && fe();
                }))) : h();
            } else h();
            O = K, D();
        }, {
            flush: "sync"
        }), be(()=>b(e).cache, (a)=>{
            a && r(a);
        }), be(V, (a)=>{
            v.simpleArray = a;
        }, {
            immediate: !0
        }), be(()=>b(e).direction, ()=>{
            h(), D(!0);
        }), be(H, (a, d)=>{
            d?.removeEventListener("scroll", ve), a?.addEventListener("scroll", ve);
        }, {
            immediate: !0
        }), be(te, (a, d)=>{
            const z = H.value;
            if (!z) return;
            if (m) {
                fe();
                return;
            }
            const L = z.scrollTop, K = b(e);
            let W = 0, oe = 0;
            const Te = Math.min(a.length, d.length);
            for(let $e = 0; $e < Te && !(W >= L); $e++)W += d[$e].size || K.minItemSize, oe += a[$e].size || K.minItemSize;
            const we = oe - W;
            we !== 0 && (z.scrollTop += we);
        }, {
            flush: "post"
        }), hn(()=>{
            v.active = !0;
        }), ul(()=>{
            v.active = !1;
        }), ft(()=>{
            var a;
            g(), C(), (a = H.value) == null || a.removeEventListener("scroll", ve), i.all.clear();
        }), {
            vscrollData: v,
            itemsWithSize: te,
            resizeObserver: c,
            measurementContext: N,
            vDynamicScrollerItem: w,
            ...ne,
            simpleArray: V,
            forceUpdate: D,
            scrollToItem: me,
            restoreCache: r,
            getItemSize: S,
            scrollToBottom: F,
            onScrollerResize: Q,
            onScrollerVisible: ce
        };
    }
    const jt = new WeakMap;
    function Pl(e) {
        return typeof e == "function" ? {
            callback: e,
            observer: null,
            intersection: void 0,
            visible: null
        } : {
            callback: e.callback,
            observer: null,
            intersection: e.intersection,
            visible: null
        };
    }
    function mn(e, n) {
        Rn(e);
        const o = Pl(n.value);
        if (jt.set(e, o), typeof IntersectionObserver > "u") {
            const i = e.getBoundingClientRect();
            o.visible = !0, o.callback(!0, {
                boundingClientRect: i
            });
            return;
        }
        o.observer = new IntersectionObserver((i)=>{
            const u = i[0], c = !!(u != null && u.isIntersecting);
            o.visible !== null && o.visible === c || (o.visible = c, o.callback(c, u));
        }, o.intersection), o.observer.observe(e);
    }
    function Rn(e) {
        const n = jt.get(e);
        n != null && n.observer && (n.observer.disconnect(), n.observer = null);
    }
    const Wl = {
        mounted (e, n) {
            mn(e, n);
        },
        updated (e, n) {
            n.value !== n.oldValue && mn(e, n);
        },
        unmounted (e) {
            Rn(e), jt.delete(e);
        }
    }, Ul = mt({
        __name: "ItemView",
        props: {
            view: {},
            itemTag: {}
        },
        setup (e) {
            const n = e;
            return (o, i)=>($(), he(It(n.itemTag), {
                    class: "vue-recycle-scroller__item-view"
                }, {
                    default: _(()=>[
                            We(o.$slots, "default", {
                                item: n.view.item,
                                index: n.view.nr.index,
                                active: n.view.nr.used
                            })
                        ]),
                    _: 3
                }));
        }
    }), Nl = mt({
        __name: "ResizeObserver",
        emits: [
            "notify"
        ],
        setup (e, { emit: n }) {
            const o = n, i = J();
            let u = null, c = null;
            function T() {
                o("notify");
            }
            return Je(()=>{
                var O;
                const m = (O = i.value) == null ? void 0 : O.parentElement;
                if (m) {
                    if (typeof ResizeObserver < "u") {
                        u = new ResizeObserver(()=>{
                            T();
                        }), u.observe(m);
                        return;
                    }
                    c = ()=>T(), window.addEventListener("resize", c);
                }
            }), Et(()=>{
                u && (u.disconnect(), u = null), c && (window.removeEventListener("resize", c), c = null);
            }), (O, m)=>($(), ae("div", {
                    ref_key: "el",
                    ref: i,
                    class: "vue-recycle-scroller__resize-observer",
                    "aria-hidden": "true"
                }, null, 512));
        }
    }), Xl = (e, n)=>{
        const o = e.__vccOpts || e;
        for (const [i, u] of n)o[i] = u;
        return o;
    }, Yl = Xl(Nl, [
        [
            "__scopeId",
            "data-v-08cc04ab"
        ]
    ]), ql = mt({
        __name: "RecycleScroller",
        props: {
            items: {},
            keyField: {
                default: "id"
            },
            direction: {
                default: "vertical"
            },
            listTag: {
                default: "div"
            },
            itemTag: {
                default: "div"
            },
            itemSize: {
                default: null
            },
            gridItems: {
                default: void 0
            },
            itemSecondarySize: {
                default: void 0
            },
            minItemSize: {
                default: null
            },
            sizeField: {
                default: "size"
            },
            typeField: {
                default: "type"
            },
            buffer: {
                default: 200
            },
            pageMode: {
                type: Boolean,
                default: !1
            },
            shift: {
                type: Boolean,
                default: !1
            },
            cache: {
                default: void 0
            },
            prerender: {
                default: 0
            },
            emitUpdate: {
                type: Boolean,
                default: !1
            },
            disableTransform: {
                type: Boolean,
                default: !1
            },
            updateInterval: {
                default: 0
            },
            skipHover: {
                type: Boolean,
                default: !1
            },
            listClass: {
                default: ""
            },
            itemClass: {
                default: ""
            }
        },
        emits: [
            "resize",
            "visible",
            "hidden",
            "update",
            "scrollStart",
            "scrollEnd"
        ],
        setup (e, { expose: n, emit: o }) {
            const i = e, u = o, c = Wl, T = J(), O = J(), m = J(), R = J(null), Z = Tn(i, T, O, m, {
                onResize: ()=>u("resize"),
                onVisible: ()=>u("visible"),
                onHidden: ()=>u("hidden"),
                onUpdate: (k, P, A, ue)=>{
                    u("update", k, P, A, ue), A <= 0 && u("scrollStart"), ue >= i.items.length - 1 && u("scrollEnd");
                }
            }), { pool: v, visiblePool: I, totalSize: H, ready: le, scrollToItem: ie, scrollToPosition: re, getScroll: ee, findItemIndex: C, getItemOffset: N, getItemSize: V, cacheSnapshot: te, restoreCache: X, updateVisibleItems: j, handleScroll: Q, handleResize: ce, handleVisibilityChange: ne } = Z;
            function E(k) {
                R.value = k;
            }
            function g() {
                R.value = null;
            }
            const h = q(()=>{
                const k = {
                    [i.direction === "vertical" ? "minHeight" : "minWidth"]: `${H.value}px`
                };
                if (i.gridItems && i.itemSize != null) {
                    const P = (i.itemSecondarySize || i.itemSize) * i.gridItems;
                    k[i.direction === "vertical" ? "minWidth" : "minHeight"] = `${P}px`;
                }
                return k;
            });
            return n({
                el: T,
                visiblePool: I,
                scrollToItem: ie,
                scrollToPosition: re,
                getScroll: ee,
                findItemIndex: C,
                getItemOffset: N,
                getItemSize: V,
                cacheSnapshot: te,
                restoreCache: X,
                updateVisibleItems: j
            }), (k, P)=>qt(($(), ae("div", {
                    ref_key: "el",
                    ref: T,
                    class: qe([
                        "vue-recycle-scroller",
                        {
                            "grid-mode": i.gridItems,
                            ready: l(le),
                            "page-mode": i.pageMode,
                            [`direction-${i.direction}`]: !0
                        }
                    ]),
                    onScrollPassive: P[0] || (P[0] = (...A)=>l(Q) && l(Q)(...A))
                }, [
                    k.$slots.before ? ($(), ae("div", {
                        key: 0,
                        ref_key: "before",
                        ref: O,
                        class: "vue-recycle-scroller__slot"
                    }, [
                        We(k.$slots, "before")
                    ], 512)) : ge("", !0),
                    ($(), he(It(i.listTag), {
                        style: ot(h.value),
                        class: qe([
                            "vue-recycle-scroller__item-wrapper",
                            i.listClass
                        ])
                    }, {
                        default: _(()=>[
                                ($(!0), ae(lt, null, Tt(l(v), (A)=>($(), he(Ul, xt({
                                        key: A.nr.id,
                                        view: A,
                                        "item-tag": i.itemTag,
                                        style: l(le) ? [
                                            i.disableTransform ? {
                                                [i.direction === "vertical" ? "top" : "left"]: `${A.position}px`,
                                                willChange: "unset"
                                            } : {
                                                transform: `translate${i.direction === "vertical" ? "Y" : "X"}(${A.position}px) translate${i.direction === "vertical" ? "X" : "Y"}(${A.offset}px)`
                                            },
                                            {
                                                width: i.gridItems ? `${i.direction === "vertical" && i.itemSecondarySize || i.itemSize}px` : void 0,
                                                height: i.gridItems ? `${i.direction === "horizontal" && i.itemSecondarySize || i.itemSize}px` : void 0,
                                                visibility: A.nr.used ? "visible" : "hidden"
                                            }
                                        ] : null,
                                        class: [
                                            "vue-recycle-scroller__item-view",
                                            [
                                                i.itemClass,
                                                {
                                                    hover: !i.skipHover && R.value === A.nr.key
                                                }
                                            ]
                                        ]
                                    }, dl(i.skipHover ? {} : {
                                        mouseenter: ()=>{
                                            E(A.nr.key);
                                        },
                                        mouseleave: ()=>{
                                            g();
                                        }
                                    })), {
                                        default: _((ue)=>[
                                                We(k.$slots, "default", xt({
                                                    ref_for: !0
                                                }, ue))
                                            ]),
                                        _: 2
                                    }, 1040, [
                                        "view",
                                        "item-tag",
                                        "style",
                                        "class"
                                    ]))), 128)),
                                i.items.length === 0 ? We(k.$slots, "empty", {
                                    key: 0
                                }) : ge("", !0)
                            ]),
                        _: 3
                    }, 8, [
                        "style",
                        "class"
                    ])),
                    k.$slots.after ? ($(), ae("div", {
                        key: 1,
                        ref_key: "after",
                        ref: m,
                        class: "vue-recycle-scroller__slot"
                    }, [
                        We(k.$slots, "after")
                    ], 512)) : ge("", !0),
                    p(Yl, {
                        onNotify: l(ce)
                    }, null, 8, [
                        "onNotify"
                    ])
                ], 34)), [
                    [
                        l(c),
                        l(ne)
                    ]
                ]);
        }
    }), Kl = mt({
        inheritAttrs: !1,
        __name: "DynamicScroller",
        props: {
            items: {},
            keyField: {
                default: "id"
            },
            direction: {
                default: "vertical"
            },
            listTag: {
                default: "div"
            },
            itemTag: {
                default: "div"
            },
            minItemSize: {},
            shift: {
                type: Boolean,
                default: !1
            },
            cache: {
                default: void 0
            }
        },
        emits: [
            "resize",
            "visible"
        ],
        setup (e, { expose: n, emit: o }) {
            const i = e, u = o, c = J(), T = q(()=>{
                var X;
                const j = (X = c.value) == null ? void 0 : X.el;
                return j && typeof j == "object" && "value" in j ? j.value : j;
            }), O = q(()=>({
                    items: i.items,
                    keyField: i.keyField,
                    direction: i.direction,
                    minItemSize: i.minItemSize,
                    shift: i.shift,
                    cache: i.cache,
                    el: T.value,
                    onResize: ()=>u("resize"),
                    onVisible: ()=>u("visible")
                })), m = Hl(O), { itemsWithSize: R, forceUpdate: Z, scrollToItem: v, scrollToPosition: I, findItemIndex: H, getItemOffset: le, getItemSize: ie, cacheSnapshot: re, restoreCache: ee, scrollToBottom: C, onScrollerResize: N, onScrollerVisible: V } = m;
            function te(X, j, Q) {
                return {
                    item: X.item,
                    index: j,
                    active: Q,
                    itemWithSize: X
                };
            }
            return n({
                scrollToItem: v,
                scrollToPosition: I,
                findItemIndex: H,
                getItemOffset: le,
                scrollToBottom: C,
                getItemSize: ie,
                cacheSnapshot: re,
                restoreCache: ee,
                forceUpdate: Z
            }), (X, j)=>($(), he(ql, xt({
                    ref_key: "scroller",
                    ref: c,
                    items: l(R),
                    "min-item-size": i.minItemSize,
                    direction: i.direction,
                    cache: i.cache,
                    "key-field": "id",
                    "list-tag": i.listTag,
                    "item-tag": i.itemTag
                }, X.$attrs, {
                    onResize: l(N),
                    onVisible: l(V)
                }), sl({
                    default: _(({ item: Q, index: ce, active: ne })=>[
                            We(X.$slots, "default", al(rl(te(Q, ce, ne))))
                        ]),
                    empty: _(()=>[
                            We(X.$slots, "empty")
                        ]),
                    _: 2
                }, [
                    X.$slots.before ? {
                        name: "before",
                        fn: _(()=>[
                                We(X.$slots, "before")
                            ]),
                        key: "0"
                    } : void 0,
                    X.$slots.after ? {
                        name: "after",
                        fn: _(()=>[
                                We(X.$slots, "after")
                            ]),
                        key: "1"
                    } : void 0
                ]), 1040, [
                    "items",
                    "min-item-size",
                    "direction",
                    "cache",
                    "list-tag",
                    "item-tag",
                    "onResize",
                    "onVisible"
                ]));
        }
    });
    function Ql(e, n, o) {
        const i = ln("vscrollMeasurementContext"), u = ln("vscrollAnchorRegistry", null), c = zn(e, n, i, o);
        return Je(()=>{
            c.mount();
        }), u && be([
            c.id,
            c.finalActive,
            ()=>b(n)
        ], ([T, O, m], [R, Z, v])=>{
            v && v !== m && u.delete(v), m && u.set(m, {
                active: O,
                id: T
            });
        }, {
            immediate: !0
        }), Et(()=>{
            const T = b(n);
            u && T && u.delete(T), c.unmount();
        }), {
            id: c.id,
            size: c.size,
            finalActive: c.finalActive,
            updateSize: c.updateSize
        };
    }
    const jl = mt({
        __name: "DynamicScrollerItem",
        props: {
            item: {},
            watchData: {
                type: Boolean,
                default: !1
            },
            active: {
                type: Boolean
            },
            index: {
                default: void 0
            },
            sizeDependencies: {
                default: null
            },
            emitResize: {
                type: Boolean,
                default: !1
            },
            tag: {
                default: "div"
            }
        },
        emits: [
            "resize"
        ],
        setup (e, { emit: n }) {
            const o = e, i = n, u = J();
            return Ql(o, u, {
                onResize: (c)=>i("resize", c)
            }), (c, T)=>($(), he(It(o.tag), {
                    ref_key: "el",
                    ref: u
                }, {
                    default: _(()=>[
                            We(c.$slots, "default")
                        ]),
                    _: 3
                }, 512));
        }
    }), Gl = pl("vaultIcon", ()=>{
        const e = J(JSON.parse(localStorage.getItem("app_vault_icon_cache") || "{}"));
        return {
            iconCache: e,
            getCachedIcon: (i)=>e.value[i] || null,
            setCachedIcon: (i, u)=>{
                e.value[i] = u, localStorage.setItem("app_vault_icon_cache", JSON.stringify(e.value));
            }
        };
    }), Jl = {
        key: 0,
        class: "loading-spinner"
    }, Zl = [
        "src"
    ], ei = {
        __name: "vaultIcon",
        props: {
            service: {
                type: String,
                default: ""
            },
            size: {
                type: Number,
                default: 32
            }
        },
        setup (e) {
            const n = Gl(), o = e, i = J(!1), u = J(!0), c = J(""), T = J(null), O = J(null), m = (C)=>{
                const N = C.target, V = c.value.includes("google") && N.naturalWidth === 16, te = c.value.includes("bitwarden") && N.naturalWidth === 19;
                if (V || te) {
                    console.warn(`[VaultIcon] Loaded icon found as placeholder (${N.naturalWidth}px), clearing cache...`), v.value && n.clearCachedIcon(v.value), R();
                    return;
                }
                u.value = !1, clearTimeout(T.value), clearTimeout(O.value);
            }, R = ()=>{
                i.value = !0, u.value = !1, clearTimeout(T.value), clearTimeout(O.value);
            }, Z = {
                google: "google.com",
                github: "github.com",
                microsoft: "microsoft.com",
                apple: "apple.com",
                amazon: "amazon.com",
                facebook: "facebook.com",
                twitter: "twitter.com",
                discord: "discord.com",
                slack: "slack.com",
                telegram: "telegram.org",
                dropbox: "dropbox.com",
                cloudflare: "cloudflare.com",
                gitlab: "gitlab.com",
                bitbucket: "bitbucket.org",
                digitalocean: "digitalocean.com",
                heroku: "heroku.com",
                vercel: "vercel.com",
                netlify: "netlify.com",
                stripe: "stripe.com",
                paypal: "paypal.com",
                spotify: "spotify.com",
                netflix: "netflix.com",
                steam: "steampowered.com",
                battle: "battle.net",
                blizzard: "battle.net"
            }, v = q(()=>{
                if (!o.service) return "";
                const C = o.service.toLowerCase().trim();
                return C.includes(".") ? C : Z[C] || `${C}.com`;
            }), I = q(()=>o.service ? o.service.charAt(0).toUpperCase() : "");
            let H = 0;
            const le = async ()=>{
                const C = v.value;
                if (!C) {
                    u.value = !1, i.value = !1;
                    return;
                }
                const N = ++H, V = n.getCachedIcon(C);
                if (V) {
                    c.value = V, u.value = !1, i.value = !1, O.value = setTimeout(()=>{
                        N === H && (console.warn(`[VaultIcon] Cache response slow for ${C}, starting backup race...`), ie(C, N));
                    }, 2e3);
                    return;
                }
                if (typeof navigator < "u" && !navigator.onLine) {
                    R();
                    return;
                }
                ie(C, N);
            }, ie = (C, N)=>{
                if (N !== H) return;
                u.value = !0, i.value = !1;
                const V = [
                    {
                        name: "google",
                        url: `https://www.google.com/s2/favicons?domain=${C}&sz=64`
                    },
                    {
                        name: "bitwarden",
                        url: `https://icons.bitwarden.net/${C}/icon.png`
                    },
                    {
                        name: "favicon",
                        url: `https://favicon.im/zh/${C}?throw-error-on-404=true`
                    }
                ];
                let te = !1;
                const X = 6e3, j = (ce, ne)=>new Promise((E, g)=>{
                        const h = new Image, k = setTimeout(()=>{
                            h.src = "", g("timeout");
                        }, 3e3);
                        h.onload = ()=>{
                            if (clearTimeout(k), h.naturalWidth <= 1) {
                                g("placeholder_1x1");
                                return;
                            }
                            if (ne === "google" && h.naturalWidth === 16) {
                                console.warn(`[VaultIcon] Google returned default 16px globe for ${C}`), g("google_default");
                                return;
                            }
                            if (ne === "bitwarden" && h.naturalWidth === 19) {
                                console.warn(`[VaultIcon] Bitwarden returned default 19px globe for ${C}`), g("bitwarden_default");
                                return;
                            }
                            E(ce);
                        }, h.onerror = ()=>{
                            clearTimeout(k), g("network_error");
                        }, h.src = ce;
                    });
                (async ()=>{
                    const ce = V[0], ne = async ()=>{
                        if (!(N !== H || te)) try {
                            const E = V.map((h)=>j(h.url, h.name)), g = await Promise.any(E);
                            !te && N === H && (te = !0, c.value = g, n.setCachedIcon(C, g));
                        } catch  {
                            !te && N === H && (console.error(`[VaultIcon] All race sources failed for ${C}`), R());
                        }
                    };
                    try {
                        const E = await Promise.race([
                            j(ce.url, ce.name),
                            new Promise((g, h)=>setTimeout(()=>h("timeout"), 1500))
                        ]);
                        !te && N === H && (te = !0, c.value = E, n.setCachedIcon(C, E), m());
                    } catch  {
                        ne();
                    }
                })(), T.value = setTimeout(()=>{
                    N === H && !te && u.value && (console.error(`[VaultIcon] Race absolute timeout for ${C}`), R());
                }, X);
            };
            Je(()=>{
                le();
            }), Et(()=>{
                clearTimeout(T.value), clearTimeout(O.value);
            }), be(()=>o.service, ()=>{
                c.value = "", u.value = !0, i.value = !1, le();
            });
            const re = q(()=>({
                    width: `${o.size}px`,
                    height: `${o.size}px`
                })), ee = q(()=>{
                const C = [
                    "#409EFF",
                    "#67C23A",
                    "#E6A23C",
                    "#F56C6C",
                    "#909399",
                    "#7232dd",
                    "#ee0a24",
                    "#07c160",
                    "#ff976a",
                    "#1989fa"
                ];
                let N = 0;
                for(let te = 0; te < (o.service || "").length; te++)N = (o.service || "").charCodeAt(te) + ((N << 5) - N);
                return {
                    backgroundColor: C[Math.abs(N) % C.length],
                    fontSize: `${Math.floor(o.size * .5)}px`
                };
            });
            return (C, N)=>($(), ae("div", {
                    class: "service-icon-wrapper",
                    style: ot(re.value)
                }, [
                    u.value && !i.value ? ($(), ae("div", Jl)) : ge("", !0),
                    c.value && !i.value ? qt(($(), ae("img", {
                        key: 1,
                        src: c.value,
                        class: "service-icon-img",
                        onError: R,
                        onLoad: m
                    }, null, 40, Zl)), [
                        [
                            gl,
                            !u.value
                        ]
                    ]) : ge("", !0),
                    i.value && !u.value ? ($(), ae("div", {
                        key: 2,
                        class: "service-icon-fallback",
                        style: ot(ee.value)
                    }, Y(I.value), 5)) : ge("", !0)
                ], 4));
        }
    }, ti = yn(ei, [
        [
            "__scopeId",
            "data-v-a60dac5e"
        ]
    ]), ni = {
        __name: "swipeAction",
        props: {
            id: {
                type: [
                    String,
                    Number
                ],
                default: null
            },
            disabled: {
                type: Boolean,
                default: !1
            },
            threshold: {
                type: Number,
                default: .3
            }
        },
        emits: [
            "open",
            "close"
        ],
        setup (e, { expose: n, emit: o }) {
            const i = e, u = o, c = J(null), T = J(null), O = J(null), m = J(0), R = J(!1), Z = J(!1), v = J(null);
            let I = 0, H = 0, le = 0, ie = 0, re = null;
            const ee = q(()=>T.value?.offsetWidth || 0), C = q(()=>O.value?.offsetWidth || 0), N = q(()=>({
                    transform: `translateX(${m.value}px)`,
                    transition: R.value ? "none" : "transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.15)"
                })), V = (E)=>{
                if (i.disabled) return;
                const g = E.touches[0];
                I = g.clientX, H = g.clientY, le = m.value, ie = Date.now(), R.value = !0, re = null;
            }, te = (E)=>{
                if (i.disabled || !R.value) return;
                const g = E.touches[0], h = g.clientX - I, k = g.clientY - H;
                if (re === null && (Math.abs(h) > 15 || Math.abs(k) > 15) && (re = Math.abs(h) > Math.abs(k)), re) {
                    E.cancelable && E.preventDefault();
                    let P = le + h;
                    P > ee.value ? P = ee.value + (P - ee.value) * .2 : P < -C.value && (P = -C.value + (P + C.value) * .2), m.value = P;
                }
            }, X = ()=>{
                if (i.disabled) return;
                R.value = !1;
                const E = Math.abs(m.value), g = Date.now() - ie;
                m.value > 0 ? m.value > ee.value * i.threshold || g < 250 && m.value > 20 ? (m.value = ee.value, Z.value = !0, v.value = "left", u("open", "left"), j()) : ne() : m.value < 0 && (E > C.value * i.threshold || g < 250 && E > 20) ? (m.value = -C.value, Z.value = !0, v.value = "right", u("open", "right"), j()) : ne();
            }, j = ()=>{
                if ("vibrate" in navigator) try {
                    navigator.vibrate(10);
                } catch  {}
                i.id && window.dispatchEvent(new CustomEvent("swipe-action:opened", {
                    detail: {
                        id: i.id
                    }
                }));
            }, Q = (E)=>{
                Z.value && E.detail.id !== i.id && ne();
            }, ce = (E)=>{
                Z.value && !c.value?.contains(E.target) && ne();
            };
            Je(()=>{
                window.addEventListener("swipe-action:opened", Q), window.addEventListener("touchstart", ce, {
                    passive: !0
                });
            }), ft(()=>{
                window.removeEventListener("swipe-action:opened", Q), window.removeEventListener("touchstart", ce);
            });
            const ne = ()=>{
                m.value = 0, Z.value = !1, v.value = null, u("close");
            };
            return n({
                reset: ne
            }), (E, g)=>($(), ae("div", {
                    class: qe([
                        "swipe-action-container",
                        {
                            "is-open": Z.value,
                            "is-swiping": R.value
                        }
                    ]),
                    ref_key: "containerRef",
                    ref: c
                }, [
                    x("div", {
                        class: "swipe-actions left-actions",
                        ref_key: "leftActionsRef",
                        ref: T,
                        style: ot({
                            opacity: m.value > 0 ? 1 : 0,
                            visibility: m.value > 0 ? "visible" : "hidden"
                        })
                    }, [
                        We(E.$slots, "left-actions")
                    ], 4),
                    x("div", {
                        class: "swipe-actions right-actions",
                        ref_key: "rightActionsRef",
                        ref: O,
                        style: ot({
                            opacity: m.value < 0 ? 1 : 0,
                            visibility: m.value < 0 ? "visible" : "hidden"
                        })
                    }, [
                        We(E.$slots, "right-actions")
                    ], 4),
                    x("div", {
                        class: "swipe-action-content",
                        style: ot(N.value),
                        onTouchstart: V,
                        onTouchmove: te,
                        onTouchend: X,
                        onTouchcancel: X
                    }, [
                        We(E.$slots, "default")
                    ], 36)
                ], 2));
        }
    }, li = {
        class: "conflict-overlay"
    }, ii = {
        class: "conflict-content"
    }, oi = {
        class: "conflict-text"
    }, si = {
        class: "conflict-actions"
    }, ai = {
        __name: "conflictOverlay",
        emits: [
            "resolve"
        ],
        setup (e) {
            return (n, o)=>{
                const i = Yt;
                return $(), ae("div", li, [
                    x("div", ii, [
                        x("p", oi, Y(n.$t("vault.conflict_notice")), 1),
                        x("div", si, [
                            p(i, {
                                size: "small",
                                type: "primary",
                                plain: "",
                                onClick: o[0] || (o[0] = Ge((u)=>n.$emit("resolve", "force"), [
                                    "stop"
                                ]))
                            }, {
                                default: _(()=>[
                                        Me(Y(n.$t("vault.force_sync")), 1)
                                    ]),
                                _: 1
                            }),
                            p(i, {
                                size: "small",
                                type: "danger",
                                plain: "",
                                onClick: o[1] || (o[1] = Ge((u)=>n.$emit("resolve", "discard"), [
                                    "stop"
                                ]))
                            }, {
                                default: _(()=>[
                                        Me(Y(n.$t("vault.discard_local")), 1)
                                    ]),
                                _: 1
                            })
                        ])
                    ])
                ]);
            };
        }
    }, $t = J(null);
    let Wt = null;
    function ri() {
        return {
            currentlyCopiedId: $t,
            setCopied: (n)=>{
                $t.value = n, Wt && clearTimeout(Wt), Wt = setTimeout(()=>{
                    $t.value === n && ($t.value = null);
                }, 2e3);
            }
        };
    }
    const ci = {
        class: "card-inner-content"
    }, ui = {
        class: "card-header"
    }, di = {
        class: "service-info"
    }, fi = [
        "title"
    ], mi = {
        class: "vault-name"
    }, vi = {
        class: "copy-text"
    }, pi = {
        class: "code-left"
    }, gi = [
        "data-digits"
    ], hi = [
        "data-digits"
    ], yi = {
        key: 0,
        class: "code-right flex flex-items-center"
    }, _i = {
        key: 1,
        class: "code-right"
    }, wi = {
        class: "timer-text"
    }, bi = {
        key: 2,
        class: "code-right"
    }, vn = {
        __name: "vaultItemCard",
        props: {
            item: {
                type: Object,
                required: !0
            },
            isSelected: {
                type: Boolean,
                default: !1
            },
            isDragging: {
                type: Boolean,
                default: !1
            },
            isPressing: {
                type: Boolean,
                default: !1
            },
            isCompact: {
                type: Boolean,
                default: !1
            },
            isPending: {
                type: Boolean,
                default: !1
            },
            isMobile: {
                type: Boolean,
                default: !1
            },
            isIncrementing: {
                type: Boolean,
                default: !1
            }
        },
        emits: [
            "toggle-selection",
            "command",
            "resolve-conflict",
            "increment"
        ],
        setup (e, { emit: n }) {
            const o = Rt(), i = Kt(), u = _l(), c = J(!1);
            let T = null, O = 0, m = 0;
            const R = (f)=>{
                if (o.appGhostMode) if (f.type === "touchstart" && f.touches && f.touches.length > 0) {
                    const w = f.touches[0];
                    O = w.clientX, m = w.clientY;
                } else f.type === "mousedown" && (O = f.clientX, m = f.clientY);
            }, Z = (f)=>{
                if (o.appGhostMode) {
                    if (f && f.type.startsWith("touch") && f.changedTouches && f.changedTouches.length > 0) {
                        const w = f.changedTouches[0], D = Math.abs(w.clientX - O), me = Math.abs(w.clientY - m);
                        if (D > 15 || me > 15) return;
                    }
                    if (f.type === "mouseup") {
                        const w = Math.abs(f.clientX - O), D = Math.abs(f.clientY - m);
                        if (w > 10 || D > 10) return;
                    }
                    c.value = !0, T && clearTimeout(T), T = setTimeout(()=>{
                        c.value = !1, T = null;
                    }, 3e4);
                }
            };
            ft(()=>{
                T && clearTimeout(T), C();
            });
            const v = e, { currentlyCopiedId: I, setCopied: H } = ri(), le = q(()=>I.value === v.item.id), ie = async ()=>{
                if (v.item.deletedAt != null || V.value === "------" || V.value === "ERROR") return;
                await Mt(V.value, null) && H(v.item.id);
            }, { currentTime: re, startTimer: ee, stopTimer: C } = wl(), N = q(()=>Lt.get(v.item.id) || {
                    code: "------",
                    next: null
                }), V = q(()=>N.value.code), te = q(()=>N.value.next), X = q(()=>N.value.epoch ?? null), j = q(()=>N.value.epoch !== void 0 ? N.value.epoch + 1 : null), Q = q(()=>v.item.period || 30), ce = q(()=>v.item.digits || 6), ne = q(()=>Math.ceil(Q.value - re.value % Q.value)), E = q(()=>ne.value / Q.value * 100), g = q(()=>ne.value > 10 ? "#67C23A" : ne.value > 5 ? "#E6A23C" : "#F56C6C"), h = q(()=>v.item.account?.includes(":") ? v.item.account.split(":").pop() : v.item.account), k = (f, w)=>{
                if (!f || f === "ERROR") return [
                    "",
                    ""
                ];
                if (f === "------") {
                    const me = Math.floor(w / 2), r = " ".repeat(w);
                    return [
                        r.substring(0, me),
                        r.substring(me)
                    ];
                }
                const D = Math.floor(w / 2);
                return [
                    f.substring(0, D),
                    f.substring(D)
                ];
            }, P = q(()=>k(V.value, ce.value)), A = q(()=>k(te.value, ce.value)), ue = async (f)=>{
                if (!f.secret) return {
                    code: "ERROR",
                    next: null
                };
                let w = f.secret;
                if (w && w.startsWith("nodeauth:")) try {
                    const z = await u.getAllMaskingKeys();
                    w = await bl(w, z);
                } catch (z) {
                    return ut.error("[VaultItemCard] Unmask secret failed for item:", f.id, f.service, z), {
                        code: "ERROR",
                        next: null
                    };
                }
                const D = f.digits || 6, me = f.algorithm || "SHA1", r = f.period || 30;
                if (f.type === "hotp") {
                    const z = await Ft(w, f.counter || 0, D, me, "hotp");
                    return w = null, {
                        code: z,
                        next: null
                    };
                }
                const S = re.value, F = Math.floor(S / r), ve = Math.ceil(r - S % r);
                let a = V.value, d = te.value;
                return (X.value !== F || a === "------" || a === "ERROR") && (a = await Ft(w, r, D, me, f.type)), ve <= 5 && v.isMobile ? (!d || j.value !== F + 1) && (d = await Ft(w, r, D, me, f.type, 1)) : d = null, w = null, {
                    code: a,
                    next: d,
                    epoch: F
                };
            }, fe = async (f)=>{
                const w = f.id, D = await ue(f);
                !u.isLocked && D.code !== "ERROR" && Lt.set(w, D);
            };
            return be(re, ()=>{
                v.item.type !== "hotp" && fe(v.item);
            }), be(()=>v.item.counter, ()=>{
                v.item.type === "hotp" && fe(v.item);
            }), be([
                ()=>v.item.id,
                ()=>v.item.secret
            ], ([f, w], [D, me])=>{
                if (f !== D) {
                    c.value = !1, T && (clearTimeout(T), T = null), fe(v.item);
                    return;
                }
                w !== me && (Lt.delete(f), fe(v.item));
            }, {
                immediate: !0
            }), be(()=>u.isLocked, (f, w)=>{
                w && !f && fe(v.item);
            }), Je(()=>{
                ee();
            }), (f, w)=>{
                const D = pn, me = En, r = An, S = Dn, F = Bn, ve = Fn, a = Vn, d = Yt, z = Hn, L = Pn;
                return $(), he(L, {
                    shadow: "hover",
                    class: qe([
                        "vault-card",
                        {
                            "is-selected": e.isSelected,
                            "is-dragging": e.isDragging,
                            "is-pressing": e.isPressing,
                            "is-compact": e.isCompact,
                            "is-pending": e.isPending,
                            "is-ghost-mode": l(o).appGhostMode,
                            "is-revealed": c.value
                        }
                    ])
                }, {
                    default: _(()=>[
                            p(ni, {
                                id: e.item.id,
                                disabled: !l(o).isMobile || e.item.status === "conflict" || l(i).isItemInConflict(e.item.id) || e.isDragging || e.isPressing,
                                onOpen: w[13] || (w[13] = ()=>c.value = !1)
                            }, {
                                "left-actions": _(()=>[
                                        e.item.deletedAt != null ? ($(), ae("div", {
                                            key: 0,
                                            class: "swipe-btn bg-success",
                                            onClick: w[0] || (w[0] = (K)=>f.$emit("command", "restore", e.item))
                                        }, [
                                            p(D, null, {
                                                default: _(()=>[
                                                        p(l(St))
                                                    ]),
                                                _: 1
                                            }),
                                            x("span", null, Y(f.$t("vault.restore")), 1)
                                        ])) : ($(), ae("div", {
                                            key: 1,
                                            class: "swipe-btn bg-primary",
                                            onClick: w[1] || (w[1] = (K)=>f.$emit("command", "qr", e.item))
                                        }, [
                                            p(D, null, {
                                                default: _(()=>[
                                                        p(l(en))
                                                    ]),
                                                _: 1
                                            }),
                                            x("span", null, Y(f.$t("vault.export_account")), 1)
                                        ]))
                                    ]),
                                "right-actions": _(()=>[
                                        e.item.deletedAt != null ? ($(), ae("div", {
                                            key: 0,
                                            class: "swipe-btn bg-danger",
                                            onClick: w[2] || (w[2] = (K)=>f.$emit("command", "delete", e.item))
                                        }, [
                                            p(D, null, {
                                                default: _(()=>[
                                                        p(l(nt))
                                                    ]),
                                                _: 1
                                            }),
                                            x("span", null, Y(f.$t("vault.hard_delete")), 1)
                                        ])) : ($(), ae(lt, {
                                            key: 1
                                        }, [
                                            x("div", {
                                                class: "swipe-btn bg-warning",
                                                onClick: w[3] || (w[3] = (K)=>f.$emit("command", "edit", e.item))
                                            }, [
                                                p(D, null, {
                                                    default: _(()=>[
                                                            p(l(tn))
                                                        ]),
                                                    _: 1
                                                }),
                                                x("span", null, Y(f.$t("common.edit")), 1)
                                            ]),
                                            x("div", {
                                                class: "swipe-btn bg-danger",
                                                onClick: w[4] || (w[4] = (K)=>f.$emit("command", "delete", e.item))
                                            }, [
                                                p(D, null, {
                                                    default: _(()=>[
                                                            p(l(nt))
                                                        ]),
                                                    _: 1
                                                }),
                                                x("span", null, Y(f.$t("common.delete")), 1)
                                            ])
                                        ], 64))
                                    ]),
                                default: _(()=>[
                                        x("div", ci, [
                                            x("div", ui, [
                                                x("div", di, [
                                                    p(me, {
                                                        "model-value": e.isSelected,
                                                        onChange: w[5] || (w[5] = (K)=>f.$emit("toggle-selection", e.item.id)),
                                                        onClick: w[6] || (w[6] = Ge(()=>{}, [
                                                            "stop"
                                                        ]))
                                                    }, null, 8, [
                                                        "model-value"
                                                    ]),
                                                    p(ti, {
                                                        service: e.item.service,
                                                        size: e.isCompact ? 20 : 24
                                                    }, null, 8, [
                                                        "service",
                                                        "size"
                                                    ]),
                                                    x("h3", {
                                                        class: "service-name",
                                                        title: e.item.service
                                                    }, Y(e.item.service), 9, fi),
                                                    e.item.category ? ($(), he(r, {
                                                        key: 0,
                                                        size: "small",
                                                        effect: "light"
                                                    }, {
                                                        default: _(()=>[
                                                                Me(Y(e.item.category), 1)
                                                            ]),
                                                        _: 1
                                                    })) : ge("", !0),
                                                    e.isPending && e.item.status !== "conflict" && !l(i).isItemInConflict(e.item.id) ? ($(), he(S, {
                                                        key: 1,
                                                        content: f.$t("vault.pending_sync_tip")
                                                    }, {
                                                        default: _(()=>[
                                                                p(D, {
                                                                    class: "pending-icon ml-5"
                                                                }, {
                                                                    default: _(()=>[
                                                                            p(l(gn))
                                                                        ]),
                                                                    _: 1
                                                                })
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "content"
                                                    ])) : ge("", !0),
                                                    e.item.status === "conflict" || l(i).isItemInConflict(e.item.id) ? ($(), he(S, {
                                                        key: 2,
                                                        content: f.$t("vault.conflict_detected_tip")
                                                    }, {
                                                        default: _(()=>[
                                                                p(D, {
                                                                    class: "conflict-icon ml-5",
                                                                    color: "#F56C6C"
                                                                }, {
                                                                    default: _(()=>[
                                                                            p(l(On))
                                                                        ]),
                                                                    _: 1
                                                                })
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "content"
                                                    ])) : ge("", !0)
                                                ]),
                                                l(o).isMobile ? ge("", !0) : ($(), he(a, {
                                                    key: 0,
                                                    trigger: "click",
                                                    onCommand: w[8] || (w[8] = (K)=>f.$emit("command", K, e.item))
                                                }, {
                                                    dropdown: _(()=>[
                                                            p(ve, null, {
                                                                default: _(()=>[
                                                                        e.item.deletedAt == null ? ($(), he(F, {
                                                                            key: 0,
                                                                            command: "qr"
                                                                        }, {
                                                                            default: _(()=>[
                                                                                    p(D, null, {
                                                                                        default: _(()=>[
                                                                                                p(l(en))
                                                                                            ]),
                                                                                        _: 1
                                                                                    }),
                                                                                    Me(" " + Y(f.$t("vault.export_account")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        })) : ge("", !0),
                                                                        e.item.deletedAt != null ? ($(), he(F, {
                                                                            key: 1,
                                                                            command: "restore"
                                                                        }, {
                                                                            default: _(()=>[
                                                                                    p(D, null, {
                                                                                        default: _(()=>[
                                                                                                p(l(St))
                                                                                            ]),
                                                                                        _: 1
                                                                                    }),
                                                                                    Me(" " + Y(f.$t("vault.restore")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        })) : ge("", !0),
                                                                        e.item.deletedAt == null ? ($(), he(F, {
                                                                            key: 2,
                                                                            command: "edit"
                                                                        }, {
                                                                            default: _(()=>[
                                                                                    p(D, null, {
                                                                                        default: _(()=>[
                                                                                                p(l(tn))
                                                                                            ]),
                                                                                        _: 1
                                                                                    }),
                                                                                    Me(" " + Y(f.$t("common.edit")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        })) : ge("", !0),
                                                                        p(F, {
                                                                            command: "delete",
                                                                            class: "text-danger"
                                                                        }, {
                                                                            default: _(()=>[
                                                                                    p(D, null, {
                                                                                        default: _(()=>[
                                                                                                p(l(nt))
                                                                                            ]),
                                                                                        _: 1
                                                                                    }),
                                                                                    Me(" " + Y(e.item.deletedAt != null ? f.$t("vault.hard_delete") : f.$t("common.delete")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        })
                                                                    ]),
                                                                _: 1
                                                            })
                                                        ]),
                                                    default: _(()=>[
                                                            p(D, {
                                                                class: "more-icon",
                                                                onClick: w[7] || (w[7] = Ge(()=>{}, [
                                                                    "stop"
                                                                ]))
                                                            }, {
                                                                default: _(()=>[
                                                                        p(l(Ln))
                                                                    ]),
                                                                _: 1
                                                            })
                                                        ]),
                                                    _: 1
                                                }))
                                            ]),
                                            x("p", mi, Y(h.value), 1),
                                            x("div", {
                                                class: "code-display-area",
                                                onClick: Ge(ie, [
                                                    "stop"
                                                ]),
                                                onMousedown: R,
                                                onMouseup: Z,
                                                onMouseleave: Z,
                                                onTouchstart: R,
                                                onTouchend: Z,
                                                onTouchcancel: Z
                                            }, [
                                                x("div", {
                                                    class: qe([
                                                        "copy-overlay",
                                                        {
                                                            "is-active": le.value
                                                        }
                                                    ])
                                                }, [
                                                    w[14] || (w[14] = x("div", {
                                                        class: "copy-bg"
                                                    }, null, -1)),
                                                    x("span", vi, Y(f.$t("common.copied")), 1)
                                                ], 2),
                                                x("div", pi, [
                                                    x("div", {
                                                        class: qe([
                                                            "current-code",
                                                            {
                                                                "is-placeholder-loading": V.value === "------" || V.value === "ERROR"
                                                            }
                                                        ]),
                                                        "data-digits": ce.value
                                                    }, [
                                                        V.value ? ($(), ae(lt, {
                                                            key: 0
                                                        }, [
                                                            x("span", null, Y(P.value[0]), 1),
                                                            w[15] || (w[15] = x("span", {
                                                                class: "code-divider"
                                                            }, null, -1)),
                                                            x("span", null, Y(P.value[1]), 1)
                                                        ], 64)) : ge("", !0)
                                                    ], 10, gi),
                                                    e.isMobile && te.value && e.item.deletedAt == null ? ($(), ae("div", {
                                                        key: 0,
                                                        class: "next-code",
                                                        "data-digits": ce.value
                                                    }, [
                                                        x("span", null, Y(A.value[0]), 1),
                                                        w[16] || (w[16] = x("span", {
                                                            class: "code-divider is-next"
                                                        }, null, -1)),
                                                        x("span", null, Y(A.value[1]), 1)
                                                    ], 8, hi)) : ge("", !0)
                                                ]),
                                                e.item.deletedAt != null ? ($(), ae("div", yi, [
                                                    p(d, {
                                                        type: "success",
                                                        plain: "",
                                                        circle: "",
                                                        size: "small",
                                                        onClick: w[9] || (w[9] = Ge((K)=>f.$emit("command", "restore", e.item), [
                                                            "stop"
                                                        ])),
                                                        title: f.$t("vault.restore")
                                                    }, {
                                                        icon: _(()=>[
                                                                p(D, null, {
                                                                    default: _(()=>[
                                                                            p(l(St))
                                                                        ]),
                                                                    _: 1
                                                                })
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "title"
                                                    ]),
                                                    p(d, {
                                                        type: "danger",
                                                        plain: "",
                                                        circle: "",
                                                        size: "small",
                                                        onClick: w[10] || (w[10] = Ge((K)=>f.$emit("command", "delete", e.item), [
                                                            "stop"
                                                        ])),
                                                        title: f.$t("vault.hard_delete")
                                                    }, {
                                                        icon: _(()=>[
                                                                p(D, null, {
                                                                    default: _(()=>[
                                                                            p(l(nt))
                                                                        ]),
                                                                    _: 1
                                                                })
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "title"
                                                    ])
                                                ])) : V.value !== "------" ? ($(), ae("div", _i, [
                                                    e.item.type === "hotp" ? ($(), he(d, {
                                                        key: 0,
                                                        type: "primary",
                                                        plain: "",
                                                        circle: "",
                                                        size: e.isCompact ? "small" : "default",
                                                        loading: e.isIncrementing,
                                                        onClick: w[11] || (w[11] = Ge((K)=>f.$emit("increment", e.item), [
                                                            "stop"
                                                        ])),
                                                        title: f.$t("vault.increment")
                                                    }, {
                                                        icon: _(()=>[
                                                                p(D, null, {
                                                                    default: _(()=>[
                                                                            p(l(St))
                                                                        ]),
                                                                    _: 1
                                                                })
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "size",
                                                        "loading",
                                                        "title"
                                                    ])) : ($(), he(z, {
                                                        key: 1,
                                                        type: "circle",
                                                        percentage: E.value,
                                                        width: e.isCompact ? 26 : 30,
                                                        "stroke-width": e.isCompact ? 2 : 3,
                                                        color: g.value
                                                    }, {
                                                        default: _(()=>[
                                                                x("span", wi, Y(ne.value), 1)
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "percentage",
                                                        "width",
                                                        "stroke-width",
                                                        "color"
                                                    ]))
                                                ])) : ($(), ae("div", bi, [
                                                    p(D, {
                                                        class: "is-loading"
                                                    }, {
                                                        default: _(()=>[
                                                                p(l(Ct))
                                                            ]),
                                                        _: 1
                                                    })
                                                ]))
                                            ], 32),
                                            e.item.status === "conflict" || l(i).isItemInConflict(e.item.id) ? ($(), he(ai, {
                                                key: 0,
                                                onResolve: w[12] || (w[12] = (K)=>f.$emit("resolve-conflict", e.item.id, K))
                                            })) : ge("", !0)
                                        ])
                                    ]),
                                _: 1
                            }, 8, [
                                "id",
                                "disabled"
                            ])
                        ]),
                    _: 1
                }, 8, [
                    "class"
                ]);
            };
        }
    };
    function Si(e, n, o, i = null) {
        const u = _n(), c = Kt(), { updateTrashMetadata: T, fetchTrash: O } = Sn(), { t: m } = Sl.global, R = J([]), Z = J(!1), v = J(!1), I = J(!1), H = J({
            id: "",
            service: "",
            account: "",
            category: ""
        }), le = J(!1), ie = J(null), re = J(!1), ee = J(""), C = async ()=>{
            if (R.value.length) try {
                await nn.confirm(m("vault.delete_batch_confirm", {
                    count: R.value.length
                }), m("common.delete"), {
                    type: "warning",
                    confirmButtonText: m("common.delete"),
                    cancelButtonText: m("common.cancel")
                }), Z.value = !0;
                const r = Rt(), S = n?.value?.length > 0 && n.value[0]?.deletedAt != null || !r.appTrashMode;
                if (!c.isManualOffline && (!navigator.onLine || c.isOffline)) {
                    Ve.warning(m("security.offline_network_blocked")), Z.value = !1;
                    return;
                }
                S ? (c.isManualOffline ? await tt.batchDelete(R.value) : await Promise.all(R.value.map((F)=>ct.hardDelete(F))), T(-R.value.length)) : (await ct.batchMoveToTrash(R.value), T(R.value.length)), await u.deleteItems(R.value), !c.isOffline && !S && await u.updateMetadata({
                    delta: -R.value.length
                }), Ve.success(m("vault.delete_batch_success", {
                    count: R.value.length
                })), R.value = [], u.markDirty(), e(), O();
            } catch (r) {
                r !== "cancel" && ut.error(r);
            } finally{
                Z.value = !1;
            }
        }, N = (r)=>{
            const S = R.value.indexOf(r);
            S > -1 ? R.value.splice(S, 1) : R.value.push(r);
        }, V = ()=>{
            n?.value && (R.value = n.value.map((r)=>r.id));
        }, te = async (r, S)=>{
            const F = S || r?.currentCode;
            if (!F || F === "------") return Ve.warning(m("vault.not_generated_yet"));
            await Mt(F, m("common.copy_success"));
        }, X = (r)=>{
            H.value = {
                id: r.id,
                service: r.service,
                account: r.account,
                category: r.category || "",
                updatedAt: r.updatedAt
            }, v.value = !0;
        }, j = async ()=>{
            I.value = !0;
            try {
                const { id: r, ...S } = H.value;
                (await tt.updateAccount(r, S)).success && (Ve.success(m("vault.update_success")), v.value = !1, u.markDirty(), e(), O());
            } catch  {} finally{
                I.value = !1;
            }
        };
        let Q = null;
        const ce = async (r, S)=>{
            if (!r.some((W, oe)=>W.id !== S[oe]?.id)) return;
            const ve = Ve.success({
                message: m("vault.sort_updated"),
                duration: 1500,
                customClass: "message-success-blur"
            }), d = (i?.value || r).filter((W)=>!W.id.startsWith("tmp_"));
            let z = null;
            const L = r.findIndex((W, oe)=>W.id !== S[oe]?.id);
            if (L !== -1 && (S[L]?.id === r[L + 1]?.id ? z = r[L] : r[L]?.id === S[L + 1]?.id ? z = r.find((W)=>W.id === S[L].id) : z = r[L]), z) {
                const W = d.findIndex((ke)=>ke.id === z.id), oe = W > 0 ? d[W - 1] : null, Te = W < d.length - 1 ? d[W + 1] : null, we = oe?.sortOrder ?? null, $e = Te?.sortOrder ?? null;
                let Ce = null;
                if (we === null && $e === null) Ce = 1e3;
                else if (we === null) Ce = ($e ?? 0) + 1e3;
                else if ($e === null) Ce = Math.max(0, (we ?? 0) - 1e3);
                else {
                    const ke = Math.floor((we + $e) / 2);
                    ke > $e && ke < we && (Ce = ke);
                }
                if (Ce !== null) {
                    z.sortOrder = Ce;
                    try {
                        await tt.moveSortOrder(z.id, Ce), Q && clearTimeout(Q), Q = setTimeout(()=>{
                            u.markDirty(), e();
                        }, 1e3);
                    } catch  {
                        ve?.close(), n.value = S, Q && clearTimeout(Q), e();
                    }
                    return;
                }
            }
            const K = d.map((W)=>W.id);
            try {
                await tt.reorder(K), Q && clearTimeout(Q), Q = setTimeout(()=>{
                    u.markDirty(), e();
                }, 1e3);
            } catch  {
                ve?.close(), n.value = S, Q && clearTimeout(Q), e();
            }
        }, ne = async (r)=>{
            try {
                const S = Rt(), F = r.deletedAt != null || !S.appTrashMode;
                if (!c.isManualOffline && (!navigator.onLine || c.isOffline)) {
                    Ve.warning(m("security.offline_network_blocked"));
                    return;
                }
                const ve = m(F ? "vault.hard_delete" : "common.delete"), a = F ? m("vault.hard_delete_confirm", {
                    service: r.service
                }) : m("vault.delete_confirm", {
                    service: r.service
                });
                await nn.confirm(a, ve, {
                    type: "warning",
                    confirmButtonText: ve,
                    cancelButtonText: m("common.cancel")
                }), F ? (c.isManualOffline ? await tt.deleteAccount(r.id) : await ct.hardDelete(r.id), T(-1)) : (await ct.moveToTrash(r.id), T(1)), await u.deleteItems([
                    r.id
                ]);
                const d = r.deletedAt == null;
                !c.isOffline && d && await u.updateMetadata({
                    delta: -1
                }), Ve.success(m("vault.delete_success")), u.markDirty(), e();
            } catch (S) {
                S !== "cancel" && ut.error(S);
            }
        }, E = J(!1), g = async (r)=>{
            if (!E.value) {
                E.value = !0;
                try {
                    const S = await tt.incrementCounter(r.id, r.updatedAt);
                    S.success && (u.markDirty(), e(), S.pending ? Ve.info(m("vault.increment_offline_queued")) : Ve.success(m("vault.increment_success")));
                } catch (S) {
                    ut.error(S), Ve.error(m("vault.increment_failed"));
                } finally{
                    E.value = !1;
                }
            }
        }, h = async (r)=>{
            if (!r || !r.startsWith("nodeauth:")) return r;
            const { useAppLockStore: S } = await an(async ()=>{
                const { useAppLockStore: d } = await import("./index-BJE2ExGB.js").then(async (m)=>{
                    await m.__tla;
                    return m;
                }).then((z)=>z.b);
                return {
                    useAppLockStore: d
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])), { unmaskSecretFront: F } = await an(async ()=>{
                const { unmaskSecretFront: d } = await import("./index-BJE2ExGB.js").then(async (m)=>{
                    await m.__tla;
                    return m;
                }).then((z)=>z.m);
                return {
                    unmaskSecretFront: d
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])), a = await S().getAllMaskingKeys();
            return await F(r, a);
        }, k = async (r)=>{
            const S = await h(r.secret);
            ie.value = {
                ...r,
                secret: S
            }, re.value = !1, le.value = !0;
            const F = on({
                service: r.service,
                account: r.account,
                secret: S,
                type: r.type,
                algorithm: r.algorithm,
                digits: r.digits,
                period: r.period,
                counter: r.counter
            });
            ee.value = await $l.toDataURL(F, {
                width: 240,
                margin: 1
            });
        }, P = async ()=>{
            ie.value && await Mt(ie.value.secret);
        }, A = async ()=>{
            if (ie.value) {
                const r = ie.value, S = on({
                    service: r.service,
                    account: r.account,
                    secret: r.secret,
                    type: r.type,
                    algorithm: r.algorithm,
                    digits: r.digits,
                    period: r.period,
                    counter: r.counter
                });
                await Mt(S);
            }
        }, ue = (r)=>(r || "").match(/.{1,4}/g)?.join(" ") || r, fe = (r, S)=>{
            if (!r || r === "------" || typeof r != "string") return r;
            const F = r.replace(/\s/g, "");
            return S === 6 && F.length === 6 ? `${F.slice(0, 3)} ${F.slice(3)}` : S === 8 && F.length === 8 ? `${F.slice(0, 4)} ${F.slice(4)}` : F;
        }, f = (r, S)=>{
            if (!r || r === "------" || typeof r != "string") return [
                r,
                ""
            ];
            const F = r.replace(/\s/g, "");
            return S === 6 && F.length === 6 ? [
                F.slice(0, 3),
                F.slice(3)
            ] : S === 8 && F.length === 8 ? [
                F.slice(0, 4),
                F.slice(4)
            ] : [
                F,
                ""
            ];
        }, w = (r, S)=>{
            r === "edit" ? X(S) : r === "qr" ? k(S) : r === "delete" ? ne(S) : r === "restore" && D(S);
        }, D = async (r)=>{
            if (!navigator.onLine || c.isOffline) {
                Ve.warning(m("security.offline_network_restore_blocked"));
                return;
            }
            try {
                await ct.restoreItem(r.id), T(-1), Ve.success(m("vault.restore_success")), c.isOffline || await u.updateMetadata({
                    delta: 1
                }), await u.deleteItems([
                    r.id
                ]), u.markDirty(), e();
            } catch (S) {
                ut.error(S), Ve.error("恢复失败");
            }
        }, me = async (r, S)=>{
            await wn().resolveConflict(r, S), S === "force" ? (Ve.success(m("vault.conflict_force_applied")), tt.syncOfflineActions().then(()=>e())) : (Ve.info(m("vault.conflict_discarded")), e());
        };
        return {
            selectedIds: R,
            isBulkDeleting: Z,
            showEditDialog: v,
            isEditing: I,
            editVaultData: H,
            showQrDialog: le,
            currentQrItem: ie,
            showSecret: re,
            qrCodeUrl: ee,
            categoryOptions: q(()=>(o?.value || []).filter((r)=>r.category).map((r)=>r.category)),
            toggleSelection: N,
            selectAllLoaded: V,
            handleBulkDelete: C,
            copyCode: te,
            openEditDialog: X,
            submitEditVault: j,
            deleteVault: ne,
            openQrDialog: k,
            copySecret: P,
            copyOtpUrl: A,
            formatSecret: ue,
            formatCode: fe,
            getCodeGroups: f,
            handleCommand: w,
            performReorder: ce,
            handleResolveConflict: me,
            restoreVault: D,
            handleIncrement: g,
            isIncrementing: E
        };
    }
    function ki(e) {
        const { listRef: n, columns: o, isMobile: i, isOffline: u, appViewMode: c, onReorder: T } = e, { t: O } = bn(), m = J(null), R = q(()=>n.value.find((h)=>h.id === m.value)), Z = J({
            x: 0,
            y: 0
        }), v = J({
            w: 0
        }), I = J(null);
        let H = {
            x: 0,
            y: 0
        }, le = !1, ie = null, re = 0, ee = 1, C = {
            x: 0,
            y: 0
        };
        const N = q(()=>({
                left: `${Z.value.x}px`,
                top: `${Z.value.y}px`,
                width: `${v.value.w}px`
            }));
        let V = [];
        const te = (h, k)=>{
            const P = document.querySelector(".vault-scroller");
            if (!P) return;
            const A = P.getBoundingClientRect();
            if (h >= A.left && h <= A.right && k >= A.top && k <= A.bottom) {
                const ue = k - A.top, fe = h - A.left, f = document.querySelector(".vue-recycle-scroller__item-view"), w = f ? f.offsetHeight : c.value === "compact" ? 95 : 135, D = Math.floor(ue / w), me = Math.floor(fe / (A.width / o.value));
                let r = D * o.value + me;
                const S = n.value.length - 1;
                r > S && (r = S), r < 0 && (r = 0);
                const F = n.value[r]?.id;
                if (F && F !== m.value) {
                    const ve = [
                        ...n.value
                    ], a = ve.findIndex((d)=>d.id === m.value);
                    if (a !== -1 && a !== r) {
                        const [d] = ve.splice(a, 1);
                        ve.splice(r, 0, d), n.value = ve;
                    }
                }
            }
        }, X = (h)=>{
            if (re = h, ie) return;
            ee = 1;
            const k = ()=>{
                if (!le) return j();
                const P = re * ee;
                let A = document.getElementById("app") || document.documentElement;
                if (!i.value && A.scrollHeight <= A.clientHeight) {
                    const f = document.querySelector(".main-content");
                    f && (A = f);
                }
                const ue = A.scrollTop;
                A.scrollTop += P;
                const fe = A.scrollTop;
                Math.abs(fe - ue) < .1 && P !== 0 && A !== document.documentElement && (document.documentElement.scrollTop += P), ee < 4 && (ee += .03), te(C.x, C.y), ie = requestAnimationFrame(k);
            };
            ie = requestAnimationFrame(k);
        }, j = ()=>{
            ie && (cancelAnimationFrame(ie), ie = null, ee = 1, re = 0);
        }, Q = (h, k, P, A)=>{
            m.value = P, le = !0, C = {
                x: h,
                y: k
            }, V = [
                ...n.value
            ];
            const ue = A.getBoundingClientRect();
            if (H = {
                x: h - ue.left,
                y: k - ue.top
            }, v.value.w = ue.width, Z.value = {
                x: ue.left,
                y: ue.top
            }, i.value && "vibrate" in navigator) try {
                navigator.vibrate([
                    20
                ]);
            } catch  {}
            i.value && (document.body.style.overflow = "hidden", document.documentElement.style.overflow = "hidden", document.body.style.touchAction = "none"), window.getSelection()?.removeAllRanges(), document.body.style.userSelect = "none", document.body.style.webkitUserSelect = "none";
        }, ce = (h, k)=>{
            if (!le) return;
            C = {
                x: h,
                y: k
            }, Z.value = {
                x: h - H.x,
                y: k - H.y
            };
            const P = 80;
            if (k < P) {
                const A = Math.max(-25, Math.floor((k - P) / 2.5));
                X(A);
            } else if (k > window.innerHeight - P) {
                const A = Math.min(25, Math.floor((k - (window.innerHeight - P)) / 2.5));
                X(A);
            } else j();
            te(h, k);
        }, ne = ()=>{
            le && (j(), T && T([
                ...n.value
            ], V), le = !1, m.value = null, document.body.style.overflow = "", document.documentElement.style.overflow = "", document.body.style.touchAction = "", document.body.style.userSelect = "", document.body.style.webkitUserSelect = "");
        };
        return {
            draggedId: m,
            draggedItem: R,
            floatingStyle: N,
            isPressing: I,
            handleMouseDown: (h, k)=>{
                if (h.target.closest(".el-checkbox, .el-dropdown, .el-button, .more-icon")) return;
                const P = h.clientX, A = h.clientY, ue = h.currentTarget;
                let fe = !1;
                const f = ()=>{
                    fe && ne(), window.removeEventListener("mousemove", w), window.removeEventListener("mouseup", f);
                }, w = (D)=>{
                    if (!fe && Math.sqrt(Math.pow(D.clientX - P, 2) + Math.pow(D.clientY - A, 2)) > 5) {
                        if (u.value) {
                            Ve.warning(O("vault.reorder_offline_disabled")), f();
                            return;
                        }
                        fe = !0, Q(P, A, k, ue);
                    }
                    fe && ce(D.clientX, D.clientY);
                };
                window.addEventListener("mousemove", w), window.addEventListener("mouseup", f);
            },
            handleTouchStart: (h, k)=>{
                if (h.target.closest(".el-checkbox, .el-dropdown, .el-button, .more-icon, .code-display-area")) return;
                const P = h.touches[0], A = P.clientX, ue = P.clientY, fe = h.currentTarget;
                I.value = k;
                let f = !1;
                const w = setTimeout(()=>{
                    if (u.value) {
                        Ve.warning(O("vault.reorder_offline_disabled")), I.value = null;
                        return;
                    }
                    f = !0, I.value = null, Q(A, ue, k, fe);
                }, 250), D = (r)=>{
                    if (f) {
                        r.cancelable && r.preventDefault();
                        const S = r.touches[0];
                        ce(S.clientX, S.clientY);
                    } else {
                        const S = r.touches[0];
                        (Math.abs(S.clientX - A) > 10 || Math.abs(S.clientY - ue) > 10) && (clearTimeout(w), I.value = null);
                    }
                }, me = ()=>{
                    clearTimeout(w), I.value = null, f && ne(), window.removeEventListener("touchmove", D), window.removeEventListener("touchend", me), window.removeEventListener("touchcancel", me);
                };
                window.addEventListener("touchmove", D, {
                    passive: !1
                }), window.addEventListener("touchend", me), window.addEventListener("touchcancel", me);
            },
            stopAutoScroll: j
        };
    }
    let zi, $i, Ci, Ti, Mi, xi, Ri, Ii, Ei, Ai, Di, Oi, Vi, Li, Fi, Bi, Hi, Pi, Wi, Ui, Ni, Xi, Yi, qi, Ki, Qi, ji, Gi, Ji, Zi, eo, to, no, lo, io, oo, so, ao, ro, co;
    zi = {
        class: "vault-list-wrapper min-h-400"
    };
    $i = {
        key: 0,
        class: "offline-sync-banner px-16 py-8 mb-10"
    };
    Ci = {
        class: "text-12"
    };
    Ti = {
        class: "vault-content"
    };
    Mi = {
        key: 0,
        class: "vault-list-toolbar mb-10 flex gap-15 flex-items-center flex-between px-16 py-12"
    };
    xi = {
        class: "batch-actions flex flex-items-center gap-10 flex-1"
    };
    Ri = {
        class: "batch-text"
    };
    Ii = {
        key: 1,
        class: "vault-list-toolbar mb-10 flex gap-15 flex-items-center flex-between flex-wrap"
    };
    Ei = {
        class: "flex flex-items-center gap-10 flex-1"
    };
    Ai = {
        class: "batch-actions flex flex-items-center gap-10"
    };
    Di = {
        class: "batch-text"
    };
    Oi = {
        key: 2,
        class: "category-filter-container"
    };
    Vi = {
        class: "category-chips"
    };
    Li = {
        class: "tag-count"
    };
    Fi = {
        key: 0,
        class: "tag-loading-track"
    };
    Bi = [
        "onClick"
    ];
    Hi = {
        class: "tag-count"
    };
    Pi = {
        key: 0,
        class: "tag-loading-track"
    };
    Wi = {
        class: "tag-count"
    };
    Ui = {
        key: 0,
        class: "tag-loading-track"
    };
    Ni = {
        key: 0,
        class: "flex-column flex-center min-h-400 text-secondary"
    };
    Xi = {
        class: "text-16 ls-1"
    };
    Yi = {
        key: 2,
        class: "empty-state"
    };
    qi = [
        "infinite-scroll-disabled"
    ];
    Ki = {
        key: 0,
        class: "text-center p-20 text-secondary"
    };
    Qi = {
        key: 1,
        class: "text-center p-20 text-secondary text-12"
    };
    ji = {
        class: "dialog-footer"
    };
    Gi = {
        key: 0,
        class: "qr-container"
    };
    Ji = {
        class: "qr-info"
    };
    Zi = {
        class: "qr-service"
    };
    eo = {
        class: "qr-account"
    };
    to = {
        class: "qr-image-wrapper"
    };
    no = [
        "src"
    ];
    lo = {
        class: "qr-tip"
    };
    io = {
        class: "secret-section"
    };
    oo = {
        class: "secret-box"
    };
    so = {
        class: "secret-text"
    };
    ao = {
        class: "secret-actions"
    };
    ro = {
        class: "uri-link-wrapper"
    };
    co = {
        __name: "vaultList",
        emits: [
            "switch-tab"
        ],
        setup (e, { expose: n, emit: o }) {
            const i = wn(), { t: u } = bn(), c = Rt(), T = Kt(), O = _n(), m = J(null), { serverVault: R, vault: Z, searchQuery: v, selectedCategory: I, isLoading: H, isFetching: le, isFetchingNextPage: ie, hasNextPage: re, absoluteTotalItems: ee, categoryStats: C, localCategoryStats: N, fetchVault: V, handleLoadMore: te, isLoadMoreDisabled: X } = zl(m), { trashCount: j, isFetchingTrash: Q, fetchTrash: ce, filteredTrash: ne } = Sn(), E = q({
                get () {
                    return I.value === "____TRASH____" ? ne(v.value) : Z.value;
                },
                set (t) {
                    I.value !== "____TRASH____" && (Z.value = t);
                }
            }), g = ()=>{
                V(), c.isOffline || ce();
            };
            be(()=>c.searchQuery, (t)=>{
                c.isMobile && (v.value = t);
            }), be([
                le,
                v
            ], ([t, s])=>{
                c.isLoadingSearching = t && !!s;
            });
            const { selectedIds: h, isBulkDeleting: k, toggleSelection: P, selectAllLoaded: A, handleBulkDelete: ue, showEditDialog: fe, editVaultData: f, isEditing: w, handleCommand: D, submitEditVault: me, showQrDialog: r, currentQrItem: S, qrCodeUrl: F, showSecret: ve, formatSecret: a, copySecret: d, copyOtpUrl: z, categoryOptions: L, performReorder: K, handleResolveConflict: W, handleIncrement: oe, isIncrementing: Te } = Si(g, E, C, R), we = [
                {
                    value: "card",
                    icon: Xn
                },
                {
                    value: "compact",
                    icon: Yn
                }
            ], $e = J(!1), Ce = {
                xs: 24,
                sm: 12,
                md: 8,
                lg: 6
            }, ke = J(typeof window < "u" ? window.innerWidth : 1200), Qe = ()=>{
                ke.value = window.innerWidth;
            };
            Je(()=>window.addEventListener("resize", Qe)), ft(()=>window.removeEventListener("resize", Qe));
            const vt = q(()=>c.isMobile ? 1 : ke.value >= 1200 ? 4 : ke.value >= 992 ? 3 : ke.value >= 768 ? 2 : 1), pt = q(()=>{
                const t = [], s = E.value, y = vt.value;
                for(let M = 0; M < s.length; M += y)t.push({
                    id: `row_${M}`,
                    items: s.slice(M, M + y)
                });
                return t;
            }), { draggedId: gt, draggedItem: ht, floatingStyle: Le, isPressing: At, handleMouseDown: Dt, handleTouchStart: yt, stopAutoScroll: Ot } = ki({
                listRef: E,
                columns: vt,
                isMobile: q(()=>c.isMobile),
                isOffline: q(()=>T.isOffline),
                appViewMode: q(()=>c.appVaultViewMode),
                onReorder: (t, s)=>K(t, s)
            }), st = async ()=>{
                try {
                    if (O.isDirty) {
                        V();
                        return;
                    }
                    const t = await O.getData();
                    t && t.categoryStats && (N.value = t.categoryStats);
                } finally{
                    Pe.value = !1;
                }
            }, Pe = J(!0);
            return Je(()=>{
                st();
            }), ft(()=>{
                Ot();
            }), n({
                fetchVault: V
            }), (t, s)=>{
                const y = pn, M = Yt, B = Wn, G = qn, se = Nn, ye = Kn, Ee = Qn, Re = Jn, Ae = Gn, De = el, Se = tl, Ie = Zn, Ue = jn;
                return $(), ae("div", zi, [
                    p(hl, {
                        name: "el-zoom-in-top"
                    }, {
                        default: _(()=>[
                                l(i).hasPendingChanges ? ($(), ae("div", $i, [
                                    p(y, {
                                        class: "mr-8"
                                    }, {
                                        default: _(()=>[
                                                p(l(gn))
                                            ]),
                                        _: 1
                                    }),
                                    x("span", Ci, Y(t.$t("vault.offline_pending_sync", {
                                        count: l(i).syncQueue.length
                                    })), 1)
                                ])) : ge("", !0)
                            ]),
                        _: 1
                    }),
                    x("div", Ti, [
                        p(ye, {
                            offset: l(c).isMobile ? 58 : 60,
                            disabled: l(c).isMobile && l(h).length === 0,
                            onChange: s[6] || (s[6] = (U)=>$e.value = U)
                        }, {
                            default: _(()=>[
                                    x("div", {
                                        class: qe([
                                            "affix-container",
                                            {
                                                "is-affixed": $e.value
                                            }
                                        ])
                                    }, [
                                        l(c).isMobile && l(h).length > 0 ? ($(), ae("div", Mi, [
                                            x("div", xi, [
                                                x("span", Ri, Y(t.$t("search.selected_items", {
                                                    count: l(h).length
                                                })), 1),
                                                s[16] || (s[16] = x("div", {
                                                    class: "flex-1"
                                                }, null, -1)),
                                                p(M, {
                                                    size: "small",
                                                    onClick: l(A),
                                                    plain: "",
                                                    disabled: l(k)
                                                }, {
                                                    default: _(()=>[
                                                            Me(Y(t.$t("search.select_all_loaded")), 1)
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "onClick",
                                                    "disabled"
                                                ]),
                                                p(M, {
                                                    type: "danger",
                                                    plain: "",
                                                    size: "small",
                                                    onClick: l(ue),
                                                    loading: l(k)
                                                }, {
                                                    default: _(()=>[
                                                            p(y, null, {
                                                                default: _(()=>[
                                                                        p(l(nt))
                                                                    ]),
                                                                _: 1
                                                            })
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "onClick",
                                                    "loading"
                                                ]),
                                                p(M, {
                                                    size: "small",
                                                    onClick: s[0] || (s[0] = (U)=>h.value = []),
                                                    plain: "",
                                                    disabled: l(k)
                                                }, {
                                                    default: _(()=>[
                                                            Me(Y(t.$t("common.cancel")), 1)
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "disabled"
                                                ])
                                            ])
                                        ])) : ge("", !0),
                                        l(c).isMobile ? ge("", !0) : ($(), ae("div", Ii, [
                                            x("div", Ei, [
                                                p(B, {
                                                    modelValue: l(v),
                                                    "onUpdate:modelValue": s[1] || (s[1] = (U)=>Vt(v) ? v.value = U : null),
                                                    placeholder: t.$t("search.placeholder"),
                                                    clearable: "",
                                                    class: "max-w-400"
                                                }, {
                                                    prefix: _(()=>[
                                                            l(le) && l(v) ? ($(), he(y, {
                                                                key: 0,
                                                                class: "is-loading"
                                                            }, {
                                                                default: _(()=>[
                                                                        p(l(Ct))
                                                                    ]),
                                                                _: 1
                                                            })) : ($(), he(y, {
                                                                key: 1
                                                            }, {
                                                                default: _(()=>[
                                                                        p(l(Un))
                                                                    ]),
                                                                _: 1
                                                            }))
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "modelValue",
                                                    "placeholder"
                                                ])
                                            ]),
                                            x("div", Ai, [
                                                l(h).length > 0 ? ($(), ae(lt, {
                                                    key: 0
                                                }, [
                                                    x("span", Di, Y(t.$t("search.selected_items", {
                                                        count: l(h).length
                                                    })), 1),
                                                    p(M, {
                                                        type: "danger",
                                                        plain: "",
                                                        onClick: l(ue),
                                                        loading: l(k)
                                                    }, {
                                                        default: _(()=>[
                                                                p(y, null, {
                                                                    default: _(()=>[
                                                                            p(l(nt))
                                                                        ]),
                                                                    _: 1
                                                                }),
                                                                Me(" " + Y(t.$t("common.delete")), 1)
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "onClick",
                                                        "loading"
                                                    ]),
                                                    p(M, {
                                                        onClick: s[2] || (s[2] = (U)=>h.value = []),
                                                        plain: "",
                                                        disabled: l(k)
                                                    }, {
                                                        default: _(()=>[
                                                                Me(Y(t.$t("common.cancel")), 1)
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "disabled"
                                                    ])
                                                ], 64)) : ($(), he(M, {
                                                    key: 1,
                                                    onClick: l(A),
                                                    plain: "",
                                                    disabled: l(k)
                                                }, {
                                                    default: _(()=>[
                                                            Me(Y(t.$t("search.select_all_loaded")), 1)
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "onClick",
                                                    "disabled"
                                                ])),
                                                p(se, {
                                                    modelValue: l(c).appVaultViewMode,
                                                    "onUpdate:modelValue": s[3] || (s[3] = (U)=>l(c).appVaultViewMode = U),
                                                    class: "ml-10",
                                                    onChange: l(c).setVaultViewMode
                                                }, {
                                                    default: _(()=>[
                                                            ($(), ae(lt, null, Tt(we, (U)=>p(G, {
                                                                    key: U.value,
                                                                    label: U.value
                                                                }, {
                                                                    default: _(()=>[
                                                                            p(y, {
                                                                                size: "16"
                                                                            }, {
                                                                                default: _(()=>[
                                                                                        ($(), he(It(U.icon)))
                                                                                    ]),
                                                                                _: 2
                                                                            }, 1024)
                                                                        ]),
                                                                    _: 2
                                                                }, 1032, [
                                                                    "label"
                                                                ])), 64))
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "modelValue",
                                                    "onChange"
                                                ])
                                            ])
                                        ])),
                                        !Pe.value && (!l(c).isMobile || !l(c).isSearchVisible) ? ($(), ae("div", Oi, [
                                            x("div", Vi, [
                                                x("div", {
                                                    class: qe([
                                                        "category-tag",
                                                        {
                                                            "is-active": l(I) === "",
                                                            "is-loading": l(le) && l(I) === "" && !l(ie)
                                                        }
                                                    ]),
                                                    onClick: s[4] || (s[4] = (U)=>I.value = "")
                                                }, [
                                                    Me(Y(t.$t("common.all")) + " ", 1),
                                                    x("span", Li, "(" + Y(l(ee)) + ")", 1),
                                                    l(le) && l(I) === "" && !l(ie) ? ($(), ae("div", Fi, [
                                                        ...s[17] || (s[17] = [
                                                            x("div", {
                                                                class: "tag-loading-bar"
                                                            }, null, -1)
                                                        ])
                                                    ])) : ge("", !0)
                                                ], 2),
                                                ($(!0), ae(lt, null, Tt(l(C), (U)=>($(), ae("div", {
                                                        key: U.id,
                                                        class: qe([
                                                            "category-tag",
                                                            {
                                                                "is-active": l(I) === U.id,
                                                                "is-loading": l(le) && l(I) === U.id && !l(ie)
                                                            }
                                                        ]),
                                                        onClick: (Be)=>I.value = U.id
                                                    }, [
                                                        Me(Y(U.category || t.$t("common.uncategorized")) + " ", 1),
                                                        x("span", Hi, "(" + Y(U.count) + ")", 1),
                                                        l(le) && l(I) === U.id && !l(ie) ? ($(), ae("div", Pi, [
                                                            ...s[18] || (s[18] = [
                                                                x("div", {
                                                                    class: "tag-loading-bar"
                                                                }, null, -1)
                                                            ])
                                                        ])) : ge("", !0)
                                                    ], 10, Bi))), 128)),
                                                l(c).appTrashMode && (l(j) > 0 || l(I) === "____TRASH____") ? ($(), ae("div", {
                                                    key: 0,
                                                    class: qe([
                                                        "category-tag trash-tag",
                                                        {
                                                            "is-active": l(I) === "____TRASH____",
                                                            "is-loading": l(le) && l(I) === "____TRASH____" && !l(ie)
                                                        }
                                                    ]),
                                                    onClick: s[5] || (s[5] = (U)=>I.value = "____TRASH____")
                                                }, [
                                                    p(y, {
                                                        class: "mr-4"
                                                    }, {
                                                        default: _(()=>[
                                                                p(l(nt))
                                                            ]),
                                                        _: 1
                                                    }),
                                                    Me(" " + Y(t.$t("vault.trash")) + " ", 1),
                                                    x("span", Wi, "(" + Y(l(j)) + ")", 1),
                                                    l(Q) && l(I) === "____TRASH____" ? ($(), ae("div", Ui, [
                                                        ...s[19] || (s[19] = [
                                                            x("div", {
                                                                class: "tag-loading-bar bg-danger"
                                                            }, null, -1)
                                                        ])
                                                    ])) : ge("", !0)
                                                ], 2)) : ge("", !0)
                                            ])
                                        ])) : ge("", !0)
                                    ], 2)
                                ]),
                            _: 1
                        }, 8, [
                            "offset",
                            "disabled"
                        ]),
                        Pe.value || (l(H) || l(Q) && l(I) === "____TRASH____") && E.value.length === 0 ? ($(), ae("div", Ni, [
                            p(y, {
                                class: "is-loading mb-20 text-primary",
                                size: 48
                            }, {
                                default: _(()=>[
                                        p(l(Ct))
                                    ]),
                                _: 1
                            }),
                            x("p", Xi, Y(t.$t("common.loading_data")), 1)
                        ])) : l(O).hasDecryptionError ? ($(), he(kl, {
                            key: 1
                        })) : !(l(H) || l(Q) && l(I) === "____TRASH____") && !l(le) && E.value.length === 0 && !l(v) ? ($(), ae("div", Yi, [
                            l(I) === "____TRASH____" ? ($(), he(Ee, {
                                key: 0,
                                description: t.$t("security.trash_already_empty")
                            }, null, 8, [
                                "description"
                            ])) : ($(), he(Ee, {
                                key: 1,
                                description: t.$t("vault.empty_vault")
                            }, {
                                default: _(()=>[
                                        p(M, {
                                            type: "primary",
                                            onClick: s[7] || (s[7] = (U)=>t.$emit("switch-tab", "add-vault"))
                                        }, {
                                            default: _(()=>[
                                                    Me(Y(t.$t("vault.go_add_vault")), 1)
                                                ]),
                                            _: 1
                                        })
                                    ]),
                                _: 1
                            }, 8, [
                                "description"
                            ]))
                        ])) : qt(($(), ae("div", {
                            key: 3,
                            class: "list-container min-h-200",
                            "infinite-scroll-disabled": l(X),
                            "infinite-scroll-distance": 300
                        }, [
                            p(l(Kl), {
                                class: "vault-scroller",
                                items: pt.value,
                                "min-item-size": 80,
                                "key-field": "id",
                                "page-mode": ""
                            }, {
                                default: _(({ item: U, index: Be, active: Fe })=>[
                                        p(l(jl), {
                                            item: U,
                                            active: Fe,
                                            "size-dependencies": [
                                                U.items
                                            ],
                                            "data-index": Be
                                        }, {
                                            default: _(()=>[
                                                    p(Ae, {
                                                        gutter: 20
                                                    }, {
                                                        default: _(()=>[
                                                                ($(!0), ae(lt, null, Tt(U.items, (_e, ze)=>($(), he(Re, xt({
                                                                        key: ze
                                                                    }, {
                                                                        ref_for: !0
                                                                    }, Ce, {
                                                                        class: [
                                                                            l(c).appVaultViewMode === "compact" ? "mb-15" : "mb-20"
                                                                        ],
                                                                        "data-id": _e.id
                                                                    }), {
                                                                        default: _(()=>[
                                                                                p(vn, {
                                                                                    item: _e,
                                                                                    "is-selected": l(h).includes(_e.id),
                                                                                    "is-dragging": l(gt) === _e.id,
                                                                                    "is-pressing": l(At) === _e.id,
                                                                                    "is-compact": l(c).appVaultViewMode === "compact",
                                                                                    "is-pending": l(i).isItemPending(_e.id) || _e.pending,
                                                                                    "is-mobile": l(c).isMobile,
                                                                                    "is-incrementing": l(Te),
                                                                                    onToggleSelection: l(P),
                                                                                    onCommand: l(D),
                                                                                    onIncrement: l(oe),
                                                                                    onResolveConflict: l(W),
                                                                                    onMousedown: (Ye)=>l(Dt)(Ye, _e.id),
                                                                                    onTouchstart: (Ye)=>l(yt)(Ye, _e.id)
                                                                                }, null, 8, [
                                                                                    "item",
                                                                                    "is-selected",
                                                                                    "is-dragging",
                                                                                    "is-pressing",
                                                                                    "is-compact",
                                                                                    "is-pending",
                                                                                    "is-mobile",
                                                                                    "is-incrementing",
                                                                                    "onToggleSelection",
                                                                                    "onCommand",
                                                                                    "onIncrement",
                                                                                    "onResolveConflict",
                                                                                    "onMousedown",
                                                                                    "onTouchstart"
                                                                                ])
                                                                            ]),
                                                                        _: 2
                                                                    }, 1040, [
                                                                        "class",
                                                                        "data-id"
                                                                    ]))), 128))
                                                            ]),
                                                        _: 2
                                                    }, 1024)
                                                ]),
                                            _: 2
                                        }, 1032, [
                                            "item",
                                            "active",
                                            "size-dependencies",
                                            "data-index"
                                        ])
                                    ]),
                                _: 1
                            }, 8, [
                                "items"
                            ]),
                            ($(), he(yl, {
                                to: "body"
                            }, [
                                l(gt) && l(ht) ? ($(), ae("div", {
                                    key: 0,
                                    class: "drag-floating-card",
                                    style: ot(l(Le))
                                }, [
                                    p(vn, {
                                        style: {
                                            "pointer-events": "none"
                                        },
                                        item: l(ht),
                                        "is-compact": l(c).appVaultViewMode === "compact",
                                        "is-dragging": !1,
                                        "is-incrementing": l(Te)
                                    }, null, 8, [
                                        "item",
                                        "is-compact",
                                        "is-incrementing"
                                    ])
                                ], 4)) : ge("", !0)
                            ])),
                            l(ie) ? ($(), ae("div", Ki, [
                                p(y, {
                                    class: "is-loading"
                                }, {
                                    default: _(()=>[
                                            p(l(Ct))
                                        ]),
                                    _: 1
                                }),
                                Me(" " + Y(t.$t("vault.loading_more")), 1)
                            ])) : ge("", !0),
                            !l(re) && E.value.length > 0 ? ($(), ae("div", Qi, Y(t.$t("vault.no_more_accounts")), 1)) : ge("", !0),
                            !(l(H) || l(Q) && l(I) === "____TRASH____") && E.value.length === 0 && l(v) ? ($(), he(Ee, {
                                key: 2,
                                description: t.$t("search.no_matching_accounts")
                            }, null, 8, [
                                "description"
                            ])) : ge("", !0)
                        ], 8, qi)), [
                            [
                                Ue,
                                l(te)
                            ]
                        ])
                    ]),
                    p(sn, {
                        modelValue: l(fe),
                        "onUpdate:modelValue": s[12] || (s[12] = (U)=>Vt(fe) ? fe.value = U : null),
                        title: t.$t("vault.edit_account"),
                        width: "400px"
                    }, {
                        footer: _(()=>[
                                x("span", ji, [
                                    p(M, {
                                        onClick: s[11] || (s[11] = (U)=>fe.value = !1)
                                    }, {
                                        default: _(()=>[
                                                Me(Y(t.$t("common.cancel")), 1)
                                            ]),
                                        _: 1
                                    }),
                                    p(M, {
                                        type: "primary",
                                        loading: l(w),
                                        onClick: l(me)
                                    }, {
                                        default: _(()=>[
                                                Me(Y(t.$t("common.save")), 1)
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "loading",
                                        "onClick"
                                    ])
                                ])
                            ]),
                        default: _(()=>[
                                p(Ie, {
                                    model: l(f),
                                    "label-position": "top"
                                }, {
                                    default: _(()=>[
                                            p(De, {
                                                label: t.$t("vault.service_name")
                                            }, {
                                                default: _(()=>[
                                                        p(B, {
                                                            modelValue: l(f).service,
                                                            "onUpdate:modelValue": s[8] || (s[8] = (U)=>l(f).service = U)
                                                        }, null, 8, [
                                                            "modelValue"
                                                        ])
                                                    ]),
                                                _: 1
                                            }, 8, [
                                                "label"
                                            ]),
                                            p(De, {
                                                label: t.$t("vault.account_identifier")
                                            }, {
                                                default: _(()=>[
                                                        p(B, {
                                                            modelValue: l(f).account,
                                                            "onUpdate:modelValue": s[9] || (s[9] = (U)=>l(f).account = U)
                                                        }, null, 8, [
                                                            "modelValue"
                                                        ])
                                                    ]),
                                                _: 1
                                            }, 8, [
                                                "label"
                                            ]),
                                            p(De, {
                                                label: t.$t("vault.category_optional")
                                            }, {
                                                default: _(()=>[
                                                        p(Se, {
                                                            modelValue: l(f).category,
                                                            "onUpdate:modelValue": s[10] || (s[10] = (U)=>l(f).category = U),
                                                            "fetch-suggestions": (U, Be)=>Be(l(L).filter((Fe)=>Fe.toLowerCase().includes(U.toLowerCase())).map((Fe)=>({
                                                                        value: Fe
                                                                    }))),
                                                            placeholder: t.$t("vault.category_optional"),
                                                            style: {
                                                                width: "100%"
                                                            },
                                                            clearable: "",
                                                            teleported: !1
                                                        }, null, 8, [
                                                            "modelValue",
                                                            "fetch-suggestions",
                                                            "placeholder"
                                                        ])
                                                    ]),
                                                _: 1
                                            }, 8, [
                                                "label"
                                            ])
                                        ]),
                                    _: 1
                                }, 8, [
                                    "model"
                                ])
                            ]),
                        _: 1
                    }, 8, [
                        "modelValue",
                        "title"
                    ]),
                    p(sn, {
                        modelValue: l(r),
                        "onUpdate:modelValue": s[14] || (s[14] = (U)=>Vt(r) ? r.value = U : null),
                        title: t.$t("vault.export_account"),
                        width: "350px",
                        onClosed: s[15] || (s[15] = (U)=>ve.value = !1)
                    }, {
                        default: _(()=>[
                                l(S) ? ($(), ae("div", Gi, [
                                    x("div", Ji, [
                                        x("h3", Zi, Y(l(S).service), 1),
                                        x("p", eo, Y(l(S).account), 1)
                                    ]),
                                    x("div", to, [
                                        x("img", {
                                            src: l(F),
                                            class: "qr-code-img"
                                        }, null, 8, no)
                                    ]),
                                    x("p", lo, Y(t.$t("vault.export_qr_tip")), 1),
                                    x("div", io, [
                                        x("div", oo, [
                                            x("div", so, Y(l(ve) ? l(a)(l(S).secret) : "•••• •••• •••• ••••"), 1),
                                            x("div", ao, [
                                                p(y, {
                                                    class: "action-icon",
                                                    onClick: s[13] || (s[13] = (U)=>ve.value = !l(ve))
                                                }, {
                                                    default: _(()=>[
                                                            l(ve) ? ($(), he(l(ll), {
                                                                key: 1
                                                            })) : ($(), he(l(nl), {
                                                                key: 0
                                                            }))
                                                        ]),
                                                    _: 1
                                                }),
                                                p(y, {
                                                    class: "action-icon",
                                                    onClick: l(d)
                                                }, {
                                                    default: _(()=>[
                                                            p(l(il))
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "onClick"
                                                ])
                                            ])
                                        ])
                                    ]),
                                    x("div", ro, [
                                        p(M, {
                                            link: "",
                                            type: "primary",
                                            class: "otp-url-btn",
                                            onClick: l(z)
                                        }, {
                                            default: _(()=>[
                                                    p(y, {
                                                        class: "mr-4"
                                                    }, {
                                                        default: _(()=>[
                                                                p(l(ol))
                                                            ]),
                                                        _: 1
                                                    }),
                                                    Me(" " + Y(t.$t("vault.copy_otp_url")), 1)
                                                ]),
                                            _: 1
                                        }, 8, [
                                            "onClick"
                                        ])
                                    ])
                                ])) : ge("", !0)
                            ]),
                        _: 1
                    }, 8, [
                        "modelValue",
                        "title"
                    ])
                ]);
            };
        }
    };
    $o = yn(co, [
        [
            "__scopeId",
            "data-v-00f95918"
        ]
    ]);
});
export { $o as default, __tla };
