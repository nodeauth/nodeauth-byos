const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-TjUXpP2f.js","assets/pdf-utils-BCRGp2im.js","assets/compression-utils-BzBbrBKd.js","assets/vue-core-DW8rIolU.js","assets/element-plus-CCPnjKpy.js","assets/element-plus-CqJ-3YyC.css","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-CWdaVIeG.js","assets/index-CeTN7Y2W.css"])))=>i.map(i=>d[i]);
import { e as jt, h as Ln, W as Vn, X as Fn, u as wn, aW as _n, b1 as Bn, o as Hn, aG as Un, q as Pn, p as Nn, aH as on, aM as St, al as sn, ah as nt, H as Wn, aA as Tt, g as Xn, C as Le, D as an, w as Yn, aN as qn, K as Kn, at as jn, an as Qn, J as Gn, E as Jn, r as Zn, v as el, N as tl, j as nl, s as ll, t as il, c as ol, a_ as sl, au as al, ag as rl, az as cl } from "./element-plus-CCPnjKpy.js";
import { u as mt, a6 as T, j as pe, aF as h, ad as Pe, ag as At, aa as ee, o as ul, X as dl, z as fl, U as Rt, at as o, G as rn, a2 as Je, aD as be, ar as S, $ as Qt, a8 as ml, V as dt, Z as bn, a1 as vl, a4 as ft, aG as Gt, l as ie, k as me, F as lt, ac as Mt, an as pl, W as qe, Y as ot, r as p, g as W, w as gl, aj as kt, S as hl, ah as yl, a7 as rt, v as wl, aB as _l, al as N, i as x, q as Me, aI as Ge, b as bl, O as Vt, T as Sl } from "./vue-core-DW8rIolU.js";
import { _ as Sn, M as Et, N as Jt, H as kl, P as zl, t as Ft, G as Cl, x as ut, Q as kn, v as $l, R as zn, L as Cn, __tla as __tla_0 } from "./index-TjUXpP2f.js";
import { g as Bt, u as $n, v as tt, t as ct, b as cn, __tla as __tla_1 } from "./vaultService-0MYmbRSm.js";
import { c as It } from "./common-JUw_a07-.js";
import { D as Tl } from "./decryptionErrorState-BOeFLnbK.js";
import { _ as un } from "./responsiveOverlay-DVmVaDuE.js";
import { u as Ml } from "./useVaultList-S0FJoU-f.js";
import { _ as dn, __tla as __tla_2 } from "./pdf-utils-BCRGp2im.js";
import { Q as Il } from "./qr-utils-TyG6HmXP.js";
import "./simplewebauthn-3qpiAaRi.js";
import "./tanstack-query-CWdaVIeG.js";
import "./compression-utils-BzBbrBKd.js";
import { __tla as __tla_3 } from "./resourceRegistry-yHLVqQHM.js";
let Bo;
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
    function xl(e) {
        return {
            all: e = e || new Map,
            on: function(t, l) {
                var n = e.get(t);
                n && n.push(l) || e.set(t, [
                    l
                ]);
            },
            off: function(t, l) {
                var n = e.get(t);
                n && n.splice(n.indexOf(l) >>> 0, 1);
            },
            emit: function(t, l) {
                (e.get(t) || []).slice().map(function(n) {
                    n(l);
                }), (e.get("*") || []).slice().map(function(n) {
                    n(t, l);
                });
            }
        };
    }
    function Zt(e, t, l) {
        if (!l) return t;
        const n = e?.[l];
        if (n == null) throw new Error(`Key is ${n} on item (keyField is '${l}')`);
        return n;
    }
    function it(e, t) {
        return e.map((l, n)=>Zt(l, n, t));
    }
    function Rl(e, t, l) {
        const n = [], c = [];
        for(let r = 0; r < e.length; r++){
            const M = e[r], y = Zt(M, r, t), d = l(M, r, y);
            n.push(y), c.push(typeof d == "number" && d > 0 ? d : null);
        }
        return {
            keys: n,
            sizes: c
        };
    }
    function El(e, t, l) {
        if (!e || e.keys.length !== t.length || e.sizes.length !== t.length) return !1;
        for(let n = 0; n < t.length; n++)if (e.keys[n] !== Zt(t[n], n, l)) return !1;
        return !0;
    }
    function Wt(e, t, l) {
        if (!El(e, t, l)) return {};
        const n = {};
        for(let c = 0; c < e.keys.length; c++){
            const r = e.sizes[c];
            typeof r == "number" && r > 0 && (n[e.keys[c]] = r);
        }
        return n;
    }
    function Tn(e, t) {
        if (!e.length || t.length <= e.length) return 0;
        const l = e[0], n = t.indexOf(l);
        if (n <= 0 || n + e.length < t.length && e.length > t.length - n) return 0;
        for(let c = 0; c < e.length; c++)if (t[n + c] !== e[c]) return 0;
        return n;
    }
    function fn(e, t, l, n, c, r = 0) {
        const M = c ?? "start";
        if (M === "nearest") {
            const y = l + n, d = e + t;
            return e >= l && d <= y ? null : e < l ? e + r : d - n + r;
        }
        return M === "end" ? e + t - n + r : M === "center" ? e + (t - n) / 2 + r : e + r;
    }
    function Mn(e, t, l, n) {
        let c = null, r = null, M = null, y = !1, d = null;
        const k = [], Y = l.resizeObserver ? ()=>{} : l.onVscrollUpdate(H), v = W(()=>{
            const w = S(e);
            if (l.vscrollData.simpleArray) {
                if (w.index == null) throw new Error("index is required when using simple-array mode with dynamic item measurement");
                return w.index;
            }
            if (l.vscrollData.keyField in w.item) return w.item[l.vscrollData.keyField];
            throw new Error(`keyField '${l.vscrollData.keyField}' not found in your item. You should set a valid keyField prop on your Scroller`);
        }), R = W(()=>l.vscrollData.sizes[v.value] || 0), Z = W(()=>S(e).active && l.vscrollData.active);
        function oe() {
            Z.value ? r !== v.value && (r = v.value, c = null, M = null, Q(v.value)) : c = v.value;
        }
        function D() {
            S(e).watchData && !l.resizeObserver ? d = be(()=>S(e).item, ()=>{
                q();
            }, {
                deep: !0
            }) : d && (d(), d = null);
        }
        function H({ force: w }) {
            !Z.value && w && (M = v.value), (c === v.value || w || !R.value) && oe();
        }
        function q() {
            oe();
        }
        function K(w) {
            l.undefinedMap[w] && l.undefinedSizeCount.value--, l.undefinedMap[w] = void 0;
        }
        function ge(w, b) {
            if (l.vscrollData.sizes[w]) {
                K(w);
                return;
            }
            if (b) {
                l.undefinedMap[w] || l.undefinedSizeCount.value++, l.undefinedMap[w] = !0;
                return;
            }
            l.undefinedMap[w] && (l.undefinedSizeCount.value--, l.undefinedMap[w] = !1);
        }
        function Q(w) {
            dt(()=>{
                if (v.value === w) {
                    const b = S(t);
                    if (!b) return;
                    const C = b.offsetWidth, F = b.offsetHeight;
                    ve(C, F);
                }
                r = null;
            });
        }
        function ve(w, b) {
            const C = ~~(l.direction.value === "vertical" ? b : w);
            C && R.value !== C && j(C);
        }
        function j(w) {
            var b, C;
            K(v.value), l.vscrollData.sizes[v.value] = w, S(e).emitResize && ((C = (b = S(n)) == null ? void 0 : b.onResize) == null || C.call(b, v.value));
        }
        function te() {
            if (!l.resizeObserver || y) return;
            const w = S(t);
            w && (l.resizeObserver.observe(w), w.$_vs_id = v.value, w.$_vs_onResize = he, y = !0);
        }
        function G() {
            if (!l.resizeObserver || !y) return;
            const w = S(t);
            w && (l.resizeObserver.unobserve(w), w.$_vs_onResize = void 0, y = !1);
        }
        function he(w, b, C) {
            v.value === w && ve(b, C);
        }
        k.push(be(()=>S(e).watchData, ()=>{
            D();
        })), l.resizeObserver || k.push(be(()=>S(e).sizeDependencies, ()=>{
            q();
        }, {
            deep: !0
        })), k.push(be(v, (w, b)=>{
            const C = S(t);
            C && (C.$_vs_id = w), K(b), ge(w, Z.value);
            const F = l.vscrollData.sizes[w];
            if (!F) {
                c = w, q();
                return;
            }
            K(w), y && (l.vscrollData.sizes[w] = F);
        })), k.push(be(Z, (w)=>{
            ge(v.value, w), l.resizeObserver ? w ? te() : G() : w && M === v.value && oe();
        })), D();
        function se() {
            Z.value && (oe(), te());
        }
        function P() {
            Y(), G(), K(v.value);
            const w = S(t);
            w && (w.$_vs_id = void 0, w.$_vs_onResize = void 0), d && (d(), d = null);
            for (const b of k)b();
            k.length = 0;
        }
        return {
            id: v,
            size: R,
            finalActive: Z,
            updateSize: oe,
            mount: se,
            unmount: P
        };
    }
    const Al = {
        itemsLimit: 1e3
    };
    function In(e) {
        return typeof window < "u" && e === window;
    }
    const Dl = (()=>{
        if (typeof document > "u") return "negative";
        const e = document.createElement("div"), t = document.createElement("div");
        e.style.width = "4px", e.style.height = "1px", e.style.overflow = "auto", e.style.direction = "rtl", t.style.width = "8px", t.style.height = "1px", e.appendChild(t), document.body.appendChild(e), e.scrollLeft = -1;
        const l = e.scrollLeft < 0;
        return document.body.removeChild(e), l ? "negative" : "default";
    })();
    function at(e, t, l) {
        return t !== "horizontal" || !l || In(l) || getComputedStyle(l).direction !== "rtl" ? e : Dl === "negative" ? -e : e;
    }
    function Ol(e, t, l) {
        return at(e, t, l);
    }
    function Ht(e, t, l, n) {
        const c = Ol(l, t, e), r = !!(n != null && n.smooth);
        if (In(e)) {
            t === "vertical" ? e.scrollTo({
                top: c,
                behavior: r ? "smooth" : "auto"
            }) : e.scrollTo({
                left: c,
                behavior: r ? "smooth" : "auto"
            });
            return;
        }
        if (typeof e.scrollTo == "function") {
            e.scrollTo(t === "vertical" ? {
                top: c,
                behavior: r ? "smooth" : "auto"
            } : {
                left: c,
                behavior: r ? "smooth" : "auto"
            });
            return;
        }
        t === "vertical" ? e.scrollTop = c : e.scrollLeft = c;
    }
    function Ll(e, t, l) {
        return l ? t === "vertical" ? window.innerHeight : window.innerWidth : t === "vertical" ? e.clientHeight : e.clientWidth;
    }
    const Vl = /auto|scroll/;
    function xn(e, t) {
        return e.parentNode === null ? t : xn(e.parentNode, [
            ...t,
            e
        ]);
    }
    function Ut(e, t) {
        return getComputedStyle(e, null).getPropertyValue(t);
    }
    function Fl(e) {
        return Ut(e, "overflow") + Ut(e, "overflow-y") + Ut(e, "overflow-x");
    }
    function Bl(e) {
        return Vl.test(Fl(e));
    }
    function zt(e) {
        if (!(e instanceof HTMLElement || e instanceof SVGElement)) return;
        const t = xn(e.parentNode, []);
        for(let l = 0; l < t.length; l += 1)if (t[l] instanceof Element && Bl(t[l])) return t[l];
        return document.scrollingElement || document.documentElement;
    }
    let Xt = !1;
    function Hl() {
        return Xt;
    }
    if (typeof window < "u") {
        Xt = !1;
        try {
            const e = Object.defineProperty({}, "passive", {
                get () {
                    Xt = !0;
                }
            });
            window.addEventListener("test", null, e);
        } catch  {}
    }
    let Ul = 0;
    function Pt(e) {
        const t = e;
        t._vs_styleStamp++;
    }
    function Pl(e, t, l) {
        const n = e?.[l];
        if (n == null) throw new Error(`Key is ${n} on item (keyField is '${l}')`);
        return n;
    }
    function Rn(e, t, l, n, c) {
        const r = ee([]), M = ee(0), y = ee(!1);
        let d = 0, k = 0;
        const Y = new Map, v = new Map;
        let R = !1, Z = 0, oe = 0, D = !1, H = null, q = null, K = null, ge = 0, Q = null, ve = [], j = null, te = null, G = null, he = !1;
        const se = new Set, P = ee({}), w = W(()=>{
            const i = S(e);
            return i.items.length > 0 && typeof i.items[0] != "object";
        }), b = W(()=>{
            const i = S(e);
            if (i.itemSize === null) {
                const s = {
                    [-1]: {
                        accumulator: 0
                    }
                }, g = i.items, I = i.sizeField ?? "size", V = i.minItemSize, J = P.value;
                let le = 1e4, ye = 0, Ee;
                for(let xe = 0, Ae = g.length; xe < Ae; xe++){
                    const De = w.value ? xe : Pl(g[xe], xe, i.keyField);
                    Ee = J[De] || g[xe][I] || V, Ee < le && (le = Ee), ye += Ee, s[xe] = {
                        accumulator: ye,
                        size: Ee
                    };
                }
                return ge = le, s;
            }
            return [];
        }), C = W(()=>r.value.filter((i)=>i.nr.used).sort((i, s)=>i.nr.index - s.nr.index)), F = W(()=>{
            const i = S(e), s = w.value ? null : i.keyField;
            return Rl(i.items, s, (g, I, V)=>i.itemSize != null ? i.itemSize : P.value[V] || g?.[i.sizeField ?? "size"] || void 0);
        });
        function E(i) {
            const s = S(e);
            return P.value = Wt(i, s.items, w.value ? null : s.keyField), Object.keys(P.value).length > 0;
        }
        function ae(i) {
            let s = v.get(i);
            return s || (s = [], v.set(i, s)), s;
        }
        function ce(i, s, g, I, V) {
            const J = hl({
                id: Ul++,
                index: s,
                used: !0,
                key: I,
                type: V
            }), le = yl({
                item: g,
                position: 0,
                offset: 0,
                nr: J,
                _vs_styleStamp: 0
            });
            return i.push(le), le;
        }
        function m(i) {
            const s = ae(i);
            if (s && s.length) {
                const g = s.pop();
                return g.nr.used = !0, Pt(g), g;
            }
        }
        function _(i) {
            const s = i.nr.type;
            ae(s).push(i), i.nr.used = !1, i.position = -9999, Pt(i), Y.delete(i.nr.key);
        }
        function A() {
            Y.clear(), v.clear();
            for(let i = 0, s = r.value.length; i < s; i++){
                const g = r.value[i];
                g && _(g);
            }
        }
        function ue(i) {
            let s = -1;
            return s = requestAnimationFrame(()=>{
                se.delete(s), i();
            }), se.add(s), s;
        }
        function u() {
            for (const i of se)cancelAnimationFrame(i);
            se.clear();
        }
        function z() {
            H && (clearTimeout(H), H = null), q && (clearTimeout(q), q = null), K && (clearTimeout(K), K = null), te && (clearTimeout(te), te = null), G && (clearTimeout(G), G = null);
        }
        function L() {
            var i;
            (i = c?.onResize) == null || i.call(c), y.value && Ve(!1);
        }
        function de() {
            j && !he && _e();
            const i = S(e);
            if (!R) {
                if (R = !0, H) return;
                const s = ()=>ue(()=>{
                        R = !1;
                        const { continuous: g } = Ve(!1, !0);
                        g || (q && clearTimeout(q), q = setTimeout(de, i.updateInterval + 100));
                    });
                s(), i.updateInterval && (H = setTimeout(()=>{
                    H = null, R && s();
                }, i.updateInterval));
            }
        }
        function a(i, s) {
            var g, I;
            y.value && (i || s.boundingClientRect.width !== 0 || s.boundingClientRect.height !== 0 ? ((g = c?.onVisible) == null || g.call(c), ue(()=>{
                Ve(!1);
            })) : (I = c?.onHidden) == null || I.call(c));
        }
        function f() {
            const i = S(t), s = i ? zt(i) : void 0;
            return window.document && (s === window.document.documentElement || s === window.document.body) ? window : s || window;
        }
        function $() {
            const i = S(l);
            return i ? S(e).direction === "vertical" ? i.scrollHeight : i.scrollWidth : 0;
        }
        function O() {
            const i = S(t);
            if (!i) return {
                start: 0,
                end: 0
            };
            const s = S(e), g = s.direction === "vertical";
            let I;
            if (s.pageMode) {
                const V = i.getBoundingClientRect(), J = g ? V.height : V.width;
                let le = -(g ? V.top : V.left), ye = g ? window.innerHeight : window.innerWidth;
                le < 0 && (ye += le, le = 0), le + ye > J && (ye = J - le), I = {
                    start: le,
                    end: le + ye
                };
            } else g ? I = {
                start: i.scrollTop,
                end: i.scrollTop + i.clientHeight
            } : I = {
                start: at(i.scrollLeft, s.direction, i),
                end: at(i.scrollLeft, s.direction, i) + i.clientWidth
            };
            return I;
        }
        function X() {
            const i = S(t);
            if (!i) return {
                start: 0,
                end: 0
            };
            if (S(e).direction === "vertical") {
                const s = at(i.scrollLeft, "horizontal", i);
                return {
                    start: s,
                    end: s + i.clientWidth
                };
            }
            return {
                start: i.scrollTop,
                end: i.scrollTop + i.clientHeight
            };
        }
        function B(i) {
            const s = S(e);
            if (s.itemSize != null) return s.itemSize;
            const g = b.value[i];
            return g?.size || Number(s.minItemSize) || 0;
        }
        function ne(i) {
            var s;
            const g = S(e), I = g.gridItems || 1;
            return i <= 0 ? 0 : g.itemSize != null ? Math.floor(i / I) * g.itemSize : ((s = b.value[i - 1]) == null ? void 0 : s.accumulator) || 0;
        }
        function Te(i) {
            const s = S(e), g = s.items.length, I = s.gridItems || 1;
            if (!g) return 0;
            if (s.itemSize != null) {
                const ye = Math.floor(i / s.itemSize) * I;
                return Math.min(Math.max(ye, 0), g - 1);
            }
            let V = 0, J = g - 1, le = 0;
            for(; V <= J;){
                const ye = Math.floor((V + J) / 2);
                ne(ye) <= i ? (le = ye, V = ye + 1) : J = ye - 1;
            }
            return le;
        }
        function _e() {
            te && (clearTimeout(te), te = null), j = null;
        }
        function Ce() {
            te && clearTimeout(te), te = setTimeout(()=>{
                j = null, te = null;
            }, 150);
        }
        function $e(i, s) {
            if (!i.length) {
                _e();
                return;
            }
            const g = Math.max(O().start - $(), 0), I = Math.min(Te(g), i.length - 1), V = i[I], J = s ? V?.[s] : I;
            if (J == null) {
                _e();
                return;
            }
            const le = $() + ne(I);
            j = {
                key: J,
                offset: O().start - le
            };
        }
        function ke(i) {
            if (!j) return !1;
            const s = S(e), g = i ?? s.items, I = w.value ? null : s.keyField, V = it(g, I).indexOf(j.key);
            if (V === -1) return _e(), !1;
            const J = $() + ne(V) + j.offset, le = O().start;
            return Math.abs(J - le) < .5 ? !1 : (he = !0, st(J), ue(()=>{
                he = !1;
            }), !0);
        }
        function je() {
            S(e).pageMode ? vt() : pt();
        }
        function vt() {
            Q = f(), Q.addEventListener("scroll", de, Hl() ? {
                passive: !0
            } : !1), Q.addEventListener("resize", L);
        }
        function pt() {
            Q && (Q.removeEventListener("scroll", de), Q.removeEventListener("resize", L), Q = null);
        }
        function gt(i, s, g, I, V, J) {
            const le = Math.ceil(i / s) * g, ye = Math.max(0, Math.floor(V.start / g)), Ee = Math.min(Math.ceil(V.end / g), Math.ceil(i / s)), xe = Math.max(0, Math.floor(J.start / I)), Ae = Math.min(Math.ceil(J.end / I), s), De = [];
            for(let Ne = ye; Ne < Ee; Ne++){
                const U = Ne * s;
                for(let Be = xe; Be < Ae; Be++){
                    const Fe = U + Be;
                    if (Fe >= i) break;
                    De.push(Fe);
                }
            }
            const Se = De[0] ?? 0, Re = De.at(-1) ?? -1;
            return {
                renderedIndices: De,
                startIndex: Se,
                endIndex: Re + 1,
                visibleStartIndex: Se,
                visibleEndIndex: Re,
                totalSize: le
            };
        }
        function ht() {
            const i = S(e);
            if (!i.gridItems || i.itemSize == null) return !1;
            const s = S(t);
            if (!s) return !1;
            const g = i.itemSecondarySize || i.itemSize, I = i.direction === "vertical" ? s.clientWidth : s.clientHeight;
            return g * i.gridItems > I;
        }
        function Ve(i, s = !1) {
            var g, I;
            const V = S(e), J = V.itemSize, le = V.gridItems || 1, ye = V.itemSecondarySize || J, Ee = ge, xe = V.typeField, Ae = w.value ? null : V.keyField, De = V.items, Se = De.length, Re = b.value, Ne = Y, U = r.value;
            let Be = null, Fe = null, we, ze, Ye, We, Xe;
            if (!Se) we = ze = We = Xe = Ye = 0;
            else if (D) we = We = 0, ze = Xe = Math.min(V.prerender, De.length), Ye = 0;
            else {
                const re = O(), Oe = X();
                if (s) {
                    let Ie = re.start - Z;
                    Ie < 0 && (Ie = -Ie);
                    let et = Oe.start - oe;
                    et < 0 && (et = -et);
                    const bt = J === null && Ie >= Ee || J !== null && Ie >= J, He = le > 1 && J != null && et >= ye;
                    if (!bt && !He) return {
                        continuous: !0
                    };
                }
                Z = re.start, oe = Oe.start;
                const Ke = V.buffer;
                re.start -= Ke, re.end += Ke, Oe.start -= Ke, Oe.end += Ke;
                let Qe = 0;
                const _t = S(l);
                _t && (Qe = _t.scrollHeight, re.start -= Qe);
                const nn = S(n);
                if (nn) {
                    const Ie = nn.scrollHeight;
                    re.end += Ie;
                }
                if (J === null) {
                    let Ie, et = 0, bt = Se - 1, He = ~~(Se / 2), ln;
                    do ln = He, Ie = Re[He].accumulator, Ie < re.start ? et = He : He < Se - 1 && Re[He + 1].accumulator > re.start && (bt = He), He = ~~((et + bt) / 2);
                    while (He !== ln);
                    for(He < 0 && (He = 0), we = He, Ye = Re[Se - 1].accumulator, ze = He; ze < Se && Re[ze].accumulator < re.end; ze++);
                    for(ze === -1 ? ze = De.length - 1 : (ze++, ze > Se && (ze = Se)), We = we; We < Se && Qe + Re[We].accumulator < re.start; We++);
                    for(Xe = We; Xe < Se && Qe + Re[Xe].accumulator < re.end; Xe++);
                } else if (le > 1) {
                    const Ie = gt(Se, le, J, ye, re, Oe);
                    Be = Ie.renderedIndices, Fe = new Set(Be), we = Ie.startIndex, ze = Ie.endIndex, We = Ie.visibleStartIndex, Xe = Ie.visibleEndIndex, Ye = Ie.totalSize;
                } else {
                    we = ~~(re.start / J * le);
                    const Ie = we % le;
                    we -= Ie, ze = Math.ceil(re.end / J * le), We = Math.max(0, Math.floor((re.start - Qe) / J * le)), Xe = Math.floor((re.end - Qe) / J * le), we < 0 && (we = 0), ze > Se && (ze = Se), We < 0 && (We = 0), Xe > Se && (Xe = Se), Ye = Math.ceil(Se / le) * J;
                }
            }
            ze - we > Al.itemsLimit && Dt(), M.value = Ye;
            let fe;
            const tn = we <= k && ze >= d;
            if (!tn || i) A();
            else for(let re = 0, Oe = U.length; re < Oe; re++){
                const Ke = U[re];
                if (Ke && (fe = Ke, fe.nr.used)) {
                    const Qe = Fe ? Fe.has(fe.nr.index) : fe.nr.index >= we && fe.nr.index < ze, _t = J || Re[fe.nr.index] && Re[fe.nr.index].size;
                    (!Qe || !_t) && _(fe);
                }
            }
            let Ze, wt;
            const On = Be ?? Array.from({
                length: Math.max(0, ze - we)
            }, (re, Oe)=>we + Oe);
            for (const re of On){
                if (!(J || Re[re] && Re[re].size)) continue;
                Ze = De[re];
                const Oe = Ae ? Ze[Ae] : re;
                if (Oe == null) throw new Error(`Key is ${Oe} on item (keyField is '${Ae}')`);
                if (fe = Ne.get(Oe), fe) fe.item !== Ze && (fe.item = Ze), fe.nr.used || console.warn(`Expected existing view's used flag to be true, got ${fe.nr.used}`);
                else {
                    if (wt = Ze[xe], fe = m(wt), fe) {
                        const Ke = fe.nr.index !== re || fe.nr.key !== Oe;
                        fe.item = Ze, fe.nr.index = re, fe.nr.key = Oe, fe.nr.type !== wt && console.warn("Reused view's type does not match pool's type"), Ke && Pt(fe);
                    } else fe = ce(U, re, Ze, Oe, wt);
                    Ne.set(Oe, fe);
                }
                J === null ? (fe.position = ((g = Re[re - 1]) == null ? void 0 : g.accumulator) || 0, fe.offset = 0) : (fe.position = Math.floor(re / le) * J, fe.offset = re % le * ye);
            }
            return d = we, k = ze, V.emitUpdate && ((I = c?.onUpdate) == null || I.call(c, we, ze, We, Xe)), K && clearTimeout(K), K = setTimeout(yt, V.updateInterval + 300), {
                continuous: tn
            };
        }
        function Dt() {
            throw G = setTimeout(()=>{
                G = null, console.warn("It seems the scroller element isn't scrolling, so it tries to render all the items at once.", "Scroller:", S(t)), console.warn("Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.");
            }), new Error("Rendered items limit reached");
        }
        function Ot() {
            if (ht()) return !1;
            const i = r.value.filter(({ nr: s })=>s.used);
            for(let s = 1; s < i.length; s++)if (i[s].nr.index !== i[s - 1].nr.index + 1) return !0;
            return !1;
        }
        function yt() {
            r.value.sort((i, s)=>i.nr.index - s.nr.index), Ot() && (Ve(!1), K && clearTimeout(K));
        }
        function Lt(i, s) {
            const g = S(e), I = S(t);
            if (!I) return;
            const V = Math.max(0, Math.min(i, g.items.length - 1)), J = O().start, le = Ll(I, g.direction, g.pageMode), ye = ne(V), Ee = B(V), xe = fn(ye, Ee, J, le, s?.align, s?.offset ?? 0);
            if (xe != null && (st(xe, s), g.gridItems && g.itemSize != null)) {
                const Ae = S(t);
                if (!Ae) return;
                const De = g.gridItems, Se = g.itemSecondarySize || g.itemSize, Re = V % De * Se, Ne = g.direction === "vertical" ? "horizontal" : "vertical", U = Ne === "horizontal" ? at(Ae.scrollLeft, "horizontal", Ae) : Ae.scrollTop, Be = Ne === "horizontal" ? Ae.clientWidth : Ae.clientHeight, Fe = fn(Re, Se, U, Be, s?.align, s?.offset ?? 0);
                Fe != null && Ht(Ae, Ne, Fe, s);
            }
        }
        function st(i, s) {
            const g = S(e), I = S(t);
            if (I) if (g.pageMode) {
                const V = zt(I), J = V.getBoundingClientRect(), le = I.getBoundingClientRect(), ye = g.direction === "vertical" ? "top" : "left", Ee = zt(I) === document.documentElement || zt(I) === document.body ? g.direction === "vertical" ? window.scrollY : window.scrollX : at(g.direction === "vertical" ? V.scrollTop : V.scrollLeft, g.direction, V), xe = le[ye] - J[ye];
                Ht(V.tagName === "HTML" ? window : V, g.direction, i + Ee + xe, s);
            } else Ht(I, g.direction, i, s);
        }
        const Ue = S(e);
        return ve = it(Ue.items, Ue.items.length > 0 && typeof Ue.items[0] != "object" ? null : Ue.keyField), Ue.cache && E(Ue.cache), Ue.prerender && (D = !0, Ve(!1)), Ue.gridItems && !Ue.itemSize && console.error("[vue-recycle-scroller] You must provide an itemSize when using gridItems"), Je(()=>{
            je(), dt(()=>{
                D = !1, Ve(!0), y.value = !0;
            });
        }), bn(()=>{
            const i = Z;
            typeof i == "number" && dt(()=>{
                st(i);
            });
        }), Qt(()=>{
            z(), u(), pt();
        }), be(()=>S(e).cache, (i)=>{
            E(i), Ve(!0);
        }), be(()=>S(e).items, (i, s)=>{
            const g = S(e), I = w.value ? null : g.keyField, V = it(i, I);
            if (g.shift) {
                const J = s ? it(s, I) : ve;
                Tn(J, V) > 0 ? $e(s ?? [], I) : _e();
            } else _e();
            ve = V, ke(i), Ve(!0);
        }), be(()=>S(e).pageMode, ()=>{
            je(), Ve(!1);
        }), be(b, ()=>{
            ke() && Ce(), Ve(!1);
        }, {
            deep: !0
        }), be(()=>S(e).gridItems, ()=>{
            Ve(!0);
        }), be(()=>S(e).itemSecondarySize, ()=>{
            Ve(!0);
        }), {
            pool: r,
            visiblePool: C,
            totalSize: M,
            ready: y,
            sizes: b,
            simpleArray: w,
            scrollToItem: Lt,
            scrollToPosition: st,
            getScroll: O,
            findItemIndex: Te,
            getItemOffset: ne,
            getItemSize: B,
            cacheSnapshot: F,
            restoreCache: E,
            updateVisibleItems: Ve,
            handleScroll: de,
            handleResize: L,
            handleVisibilityChange: a,
            sortViews: yt
        };
    }
    function Yt(e) {
        return e.item;
    }
    function Nl(e) {
        return e._vs_styleStamp ?? 0;
    }
    const En = [
        "position",
        "top",
        "left",
        "transform",
        "willChange",
        "visibility",
        "pointerEvents"
    ];
    function mn(e) {
        const t = {};
        for (const l of En)t[l] = e.style[l];
        return t;
    }
    function An(e, t) {
        for (const l of En)e.style[l] = t[l] ?? "";
    }
    function vn(e, t, l, n) {
        if (!("view" in t)) {
            An(e, n);
            return;
        }
        const c = l === "vertical", r = e.tagName === "TR", M = c ? `translateY(${t.view.position}px) translateX(${t.view.offset}px)` : `translateX(${t.view.position}px) translateY(${t.view.offset}px)`;
        e.style.position = "absolute", e.style.top = c && r ? `${t.view.position}px` : "0px", e.style.left = !c && r ? `${t.view.position}px` : "0px", e.style.transform = r ? "" : M, e.style.willChange = r ? "unset" : "transform", e.style.visibility = t.view.nr.used ? "visible" : "hidden", e.style.pointerEvents = t.view.nr.used ? "" : "none";
    }
    function pn(e) {
        return "view" in e ? {
            item: Yt(e.view).item,
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
    function gn(e, t, l, n) {
        return l ? n ?? null : e?.[t] ?? null;
    }
    function Wl(e) {
        let t = 0, l = {};
        const n = xl();
        let c = !1, r, M = !1, y = [], d = null, k = null;
        const Y = new Set, v = ml({
            active: !0,
            sizes: {},
            keyField: S(e).keyField,
            simpleArray: !1
        }), R = W(()=>S(e).direction), Z = W(()=>S(S(e).el)), oe = W(()=>S(S(e).before)), D = W(()=>S(S(e).after)), H = new Map;
        function q(a) {
            let f = -1;
            return f = requestAnimationFrame(()=>{
                Y.delete(f), a();
            }), Y.add(f), f;
        }
        function K() {
            for (const a of Y)cancelAnimationFrame(a);
            Y.clear();
        }
        typeof ResizeObserver < "u" && (r = new ResizeObserver((a)=>{
            q(()=>{
                if (Array.isArray(a)) {
                    for (const f of a)if (f.target && f.target.$_vs_onResize) {
                        let $, O;
                        if (f.borderBoxSize) {
                            const X = f.borderBoxSize[0];
                            $ = X.inlineSize, O = X.blockSize;
                        } else $ = f.contentRect.width, O = f.contentRect.height;
                        f.target.$_vs_onResize(f.target.$_vs_id, $, O);
                    }
                }
            });
        }));
        const ge = {
            vscrollData: v,
            resizeObserver: r,
            direction: R,
            undefinedMap: l,
            undefinedSizeCount: {
                get value () {
                    return t;
                },
                set value (a){
                    t = a;
                }
            },
            onVscrollUpdate (a) {
                const f = ($)=>{
                    a($);
                };
                return n.on("vscroll:update", f), ()=>n.off("vscroll:update", f);
            }
        };
        rt("vscrollData", v), rt("vscrollParent", {
            get $_undefinedSizes () {
                return t;
            },
            set $_undefinedSizes (a){
                t = a;
            },
            get $_undefinedMap () {
                return l;
            },
            set $_undefinedMap (a){
                l = a;
            },
            $_events: n,
            direction: R
        }), rt("vscrollResizeObserver", r), rt("vscrollMeasurementContext", ge), rt("vscrollAnchorRegistry", {
            delete (a) {
                H.delete(a);
            },
            set (a, f) {
                H.set(a, f);
            }
        });
        const Q = W(()=>{
            const a = S(e);
            return a.items.length > 0 && typeof a.items[0] != "object";
        }), ve = W(()=>{
            const a = [], f = S(e), { items: $, keyField: O } = f, X = Q.value, B = v.sizes, ne = $.length;
            for(let Te = 0; Te < ne; Te++){
                const _e = $[Te], Ce = X ? Te : _e[O];
                let $e = B[Ce];
                typeof $e > "u" && !l[Ce] && ($e = 0), a.push({
                    item: _e,
                    id: Ce,
                    size: $e
                });
            }
            return a;
        }), j = S(e);
        y = it(j.items, Q.value ? null : j.keyField), j.cache && (v.sizes = Wt(j.cache, j.items, Q.value ? null : j.keyField));
        const te = W(()=>{
            const a = S(e);
            return {
                items: ve.value,
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
        function G() {
            var a, f;
            A(), (f = (a = S(e)).onResize) == null || f.call(a);
        }
        function he() {
            var a, f;
            n.emit("vscroll:update", {
                force: !1
            }), (f = (a = S(e)).onVisible) == null || f.call(a);
        }
        const se = Rn(te, Z, oe, D, {
            onResize: G,
            onVisible: he,
            onHidden: ()=>{
                var a, f;
                return (f = (a = S(e)).onHidden) == null ? void 0 : f.call(a);
            },
            onUpdate: (a, f, $, O)=>{
                var X, B;
                return (B = (X = S(e)).onUpdate) == null ? void 0 : B.call(X, a, f, $, O);
            }
        }), P = new WeakMap;
        function w() {
            k != null && (cancelAnimationFrame(k), Y.delete(k), k = null);
        }
        function b() {
            w(), d = null;
        }
        function C() {
            d == null || k != null || (k = q(()=>{
                k = null, ce();
            }));
        }
        function F() {
            const a = Z.value;
            if (!a) return null;
            const f = a.getBoundingClientRect();
            let $ = null;
            for (const [O, X] of H.entries()){
                if (!X.active || getComputedStyle(O).visibility === "hidden") continue;
                const B = O.getBoundingClientRect();
                if (B.bottom <= f.top || B.top >= f.bottom) continue;
                const ne = Math.max(B.top, f.top) - f.top;
                (!$ || ne < $.score) && ($ = {
                    key: X.id,
                    offset: B.top - f.top,
                    score: ne
                });
            }
            return $;
        }
        function E(a) {
            const f = Z.value;
            if (!f) {
                b();
                return;
            }
            const $ = f.scrollTop, O = Math.min(se.findItemIndex($), a.length - 1), X = a[O];
            if (X == null) {
                b();
                return;
            }
            const B = F();
            d = {
                logicalKey: X,
                logicalOffset: $ - se.getItemOffset(O),
                pendingKeys: new Set,
                stableFrames: 0,
                visualKey: B?.key ?? null,
                visualOffset: B?.offset ?? 0
            };
        }
        function ae(a) {
            const f = Z.value;
            return !f || Math.abs(f.scrollTop - a) < .5 ? !1 : (M = !0, f.scrollTop = a, f.dispatchEvent(new Event("scroll")), q(()=>{
                M = !1;
            }), !0);
        }
        function ce() {
            const a = d, f = Z.value;
            if (!a || !f) return;
            const $ = ve.value.findIndex((ne)=>ne.id === a.logicalKey);
            if ($ === -1) {
                b();
                return;
            }
            let O = !1;
            const X = se.getItemOffset($) + a.logicalOffset;
            if (O = ae(X) || O, a.visualKey != null) for (const [ne, Te] of H.entries()){
                if (!Te.active || Te.id !== a.visualKey || getComputedStyle(ne).visibility === "hidden") continue;
                const _e = ne.getBoundingClientRect().top - f.getBoundingClientRect().top - a.visualOffset;
                O = ae(f.scrollTop + _e) || O;
                break;
            }
            let B = !0;
            for (const ne of a.pendingKeys)if (!(typeof v.sizes[ne] == "number" && v.sizes[ne] > 0)) {
                B = !1;
                break;
            }
            if (!O && B) {
                if (a.stableFrames++, a.stableFrames >= 2) {
                    b();
                    return;
                }
            } else a.stableFrames = 0;
            C();
        }
        function m(a, f, $, O) {
            const X = gl(), B = kt(f), ne = kt($), Te = kt({
                onResize: $.onResize
            }), _e = kt(a), Ce = X.run(()=>(be(()=>{
                    const $e = B.value;
                    if (!("view" in $e)) return {
                        active: ne.value.active,
                        direction: R.value,
                        id: gn(ne.value.item, S(e).keyField, v.simpleArray, ne.value.index),
                        legacy: !0
                    };
                    const { view: ke } = $e;
                    return {
                        active: ke.nr.used,
                        direction: R.value,
                        id: Yt(ke).id,
                        legacy: !1,
                        position: ke.position,
                        offset: ke.offset,
                        styleStamp: Nl(ke)
                    };
                }, ()=>{
                    const $e = _e.value;
                    if ($e) {
                        const ke = B.value, je = "view" in ke ? Yt(ke.view).id : gn(ne.value.item, S(e).keyField, v.simpleArray, ne.value.index);
                        je != null && H.set($e, {
                            active: ne.value.active && v.active,
                            id: je
                        }), vn($e, B.value, R.value, O);
                    }
                }, {
                    immediate: !0
                }), Mn(ne, _e, ge, Te)));
            Ce.mount(), P.set(a, {
                binding: B,
                scope: X,
                options: ne,
                callbacks: Te,
                el: _e,
                controller: Ce,
                restoreStyles: O
            });
        }
        const _ = {
            mounted (a, f) {
                const $ = mn(a);
                m(a, f.value, pn(f.value), $);
            },
            updated (a, f) {
                const $ = P.get(a), O = pn(f.value);
                if (!$) {
                    const X = mn(a);
                    m(a, f.value, O, X);
                    return;
                }
                $.binding.value = f.value, $.options.value = O, $.callbacks.value = {
                    onResize: O.onResize
                }, $.el.value = a, vn(a, f.value, R.value, $.restoreStyles);
            },
            unmounted (a) {
                const f = P.get(a);
                f && (f.controller.unmount(), f.scope.stop(), An(a, f.restoreStyles), H.delete(a), P.delete(a));
            }
        };
        function A(a = !1) {
            (a || Q.value) && (v.sizes = {}), n.emit("vscroll:update", {
                force: !0
            });
        }
        function ue(a, f) {
            se.scrollToItem(a, f);
        }
        function u(a) {
            const f = S(e);
            return v.sizes = Wt(a, f.items, Q.value ? null : f.keyField), se.restoreCache(a);
        }
        function z(a, f) {
            const $ = S(e), O = Q.value ? f ?? $.items.indexOf(a) : a[$.keyField];
            return v.sizes[O] || 0;
        }
        function L() {
            const a = Z.value;
            a && (c || (c = !0, dt(()=>{
                a.scrollTop = a.scrollHeight + 5e3;
                const f = ()=>{
                    a.scrollTop = a.scrollHeight + 5e3, q(()=>{
                        a.scrollTop = a.scrollHeight + 5e3, t === 0 ? c = !1 : q(f);
                    });
                };
                q(f);
            })));
        }
        function de() {
            d && !M && b();
        }
        return be(()=>S(e).items, (a, f)=>{
            const $ = S(e), O = Q.value ? null : $.keyField, X = it(a, O);
            if ($.shift) {
                const B = f ? it(f, O) : y, ne = Tn(B, X);
                ne > 0 ? (E(B), d && (d.pendingKeys = new Set(X.slice(0, ne)), d.stableFrames = 0, dt(()=>{
                    d && ce();
                }))) : b();
            } else b();
            y = X, A();
        }, {
            flush: "sync"
        }), be(()=>S(e).cache, (a)=>{
            a && u(a);
        }), be(Q, (a)=>{
            v.simpleArray = a;
        }, {
            immediate: !0
        }), be(()=>S(e).direction, ()=>{
            b(), A(!0);
        }), be(Z, (a, f)=>{
            f?.removeEventListener("scroll", de), a?.addEventListener("scroll", de);
        }, {
            immediate: !0
        }), be(ve, (a, f)=>{
            const $ = Z.value;
            if (!$) return;
            if (d) {
                ce();
                return;
            }
            const O = $.scrollTop, X = S(e);
            let B = 0, ne = 0;
            const Te = Math.min(a.length, f.length);
            for(let Ce = 0; Ce < Te && !(B >= O); Ce++)B += f[Ce].size || X.minItemSize, ne += a[Ce].size || X.minItemSize;
            const _e = ne - B;
            _e !== 0 && ($.scrollTop += _e);
        }, {
            flush: "post"
        }), bn(()=>{
            v.active = !0;
        }), vl(()=>{
            v.active = !1;
        }), ft(()=>{
            var a;
            w(), K(), (a = Z.value) == null || a.removeEventListener("scroll", de), n.all.clear();
        }), {
            vscrollData: v,
            itemsWithSize: ve,
            resizeObserver: r,
            measurementContext: ge,
            vDynamicScrollerItem: _,
            ...se,
            simpleArray: Q,
            forceUpdate: A,
            scrollToItem: ue,
            restoreCache: u,
            getItemSize: z,
            scrollToBottom: L,
            onScrollerResize: G,
            onScrollerVisible: he
        };
    }
    const en = new WeakMap;
    function Xl(e) {
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
    function hn(e, t) {
        Dn(e);
        const l = Xl(t.value);
        if (en.set(e, l), typeof IntersectionObserver > "u") {
            const n = e.getBoundingClientRect();
            l.visible = !0, l.callback(!0, {
                boundingClientRect: n
            });
            return;
        }
        l.observer = new IntersectionObserver((n)=>{
            const c = n[0], r = !!(c != null && c.isIntersecting);
            l.visible !== null && l.visible === r || (l.visible = r, l.callback(r, c));
        }, l.intersection), l.observer.observe(e);
    }
    function Dn(e) {
        const t = en.get(e);
        t != null && t.observer && (t.observer.disconnect(), t.observer = null);
    }
    const Yl = {
        mounted (e, t) {
            hn(e, t);
        },
        updated (e, t) {
            t.value !== t.oldValue && hn(e, t);
        },
        unmounted (e) {
            Dn(e), en.delete(e);
        }
    }, ql = mt({
        __name: "ItemView",
        props: {
            view: {},
            itemTag: {}
        },
        setup (e) {
            const t = e;
            return (l, n)=>(T(), pe(At(t.itemTag), {
                    class: "vue-recycle-scroller__item-view"
                }, {
                    default: h(()=>[
                            Pe(l.$slots, "default", {
                                item: t.view.item,
                                index: t.view.nr.index,
                                active: t.view.nr.used
                            })
                        ]),
                    _: 3
                }));
        }
    }), Kl = mt({
        __name: "ResizeObserver",
        emits: [
            "notify"
        ],
        setup (e, { emit: t }) {
            const l = t, n = ee();
            let c = null, r = null;
            function M() {
                l("notify");
            }
            return Je(()=>{
                var y;
                const d = (y = n.value) == null ? void 0 : y.parentElement;
                if (d) {
                    if (typeof ResizeObserver < "u") {
                        c = new ResizeObserver(()=>{
                            M();
                        }), c.observe(d);
                        return;
                    }
                    r = ()=>M(), window.addEventListener("resize", r);
                }
            }), Qt(()=>{
                c && (c.disconnect(), c = null), r && (window.removeEventListener("resize", r), r = null);
            }), (y, d)=>(T(), ie("div", {
                    ref_key: "el",
                    ref: n,
                    class: "vue-recycle-scroller__resize-observer",
                    "aria-hidden": "true"
                }, null, 512));
        }
    }), jl = (e, t)=>{
        const l = e.__vccOpts || e;
        for (const [n, c] of t)l[n] = c;
        return l;
    }, Ql = jl(Kl, [
        [
            "__scopeId",
            "data-v-08cc04ab"
        ]
    ]), Gl = mt({
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
        setup (e, { expose: t, emit: l }) {
            const n = e, c = l, r = Yl, M = ee(), y = ee(), d = ee(), k = ee(null), Y = Rn(n, M, y, d, {
                onResize: ()=>c("resize"),
                onVisible: ()=>c("visible"),
                onHidden: ()=>c("hidden"),
                onUpdate: (C, F, E, ae)=>{
                    c("update", C, F, E, ae), E <= 0 && c("scrollStart"), ae >= n.items.length - 1 && c("scrollEnd");
                }
            }), { pool: v, visiblePool: R, totalSize: Z, ready: oe, scrollToItem: D, scrollToPosition: H, getScroll: q, findItemIndex: K, getItemOffset: ge, getItemSize: Q, cacheSnapshot: ve, restoreCache: j, updateVisibleItems: te, handleScroll: G, handleResize: he, handleVisibilityChange: se } = Y;
            function P(C) {
                k.value = C;
            }
            function w() {
                k.value = null;
            }
            const b = W(()=>{
                const C = {
                    [n.direction === "vertical" ? "minHeight" : "minWidth"]: `${Z.value}px`
                };
                if (n.gridItems && n.itemSize != null) {
                    const F = (n.itemSecondarySize || n.itemSize) * n.gridItems;
                    C[n.direction === "vertical" ? "minWidth" : "minHeight"] = `${F}px`;
                }
                return C;
            });
            return t({
                el: M,
                visiblePool: R,
                scrollToItem: D,
                scrollToPosition: H,
                getScroll: q,
                findItemIndex: K,
                getItemOffset: ge,
                getItemSize: Q,
                cacheSnapshot: ve,
                restoreCache: j,
                updateVisibleItems: te
            }), (C, F)=>Gt((T(), ie("div", {
                    ref_key: "el",
                    ref: M,
                    class: qe([
                        "vue-recycle-scroller",
                        {
                            "grid-mode": n.gridItems,
                            ready: o(oe),
                            "page-mode": n.pageMode,
                            [`direction-${n.direction}`]: !0
                        }
                    ]),
                    onScrollPassive: F[0] || (F[0] = (...E)=>o(G) && o(G)(...E))
                }, [
                    C.$slots.before ? (T(), ie("div", {
                        key: 0,
                        ref_key: "before",
                        ref: y,
                        class: "vue-recycle-scroller__slot"
                    }, [
                        Pe(C.$slots, "before")
                    ], 512)) : me("", !0),
                    (T(), pe(At(n.listTag), {
                        style: ot(b.value),
                        class: qe([
                            "vue-recycle-scroller__item-wrapper",
                            n.listClass
                        ])
                    }, {
                        default: h(()=>[
                                (T(!0), ie(lt, null, Mt(o(v), (E)=>(T(), pe(ql, Rt({
                                        key: E.nr.id,
                                        view: E,
                                        "item-tag": n.itemTag,
                                        style: o(oe) ? [
                                            n.disableTransform ? {
                                                [n.direction === "vertical" ? "top" : "left"]: `${E.position}px`,
                                                willChange: "unset"
                                            } : {
                                                transform: `translate${n.direction === "vertical" ? "Y" : "X"}(${E.position}px) translate${n.direction === "vertical" ? "X" : "Y"}(${E.offset}px)`
                                            },
                                            {
                                                width: n.gridItems ? `${n.direction === "vertical" && n.itemSecondarySize || n.itemSize}px` : void 0,
                                                height: n.gridItems ? `${n.direction === "horizontal" && n.itemSecondarySize || n.itemSize}px` : void 0,
                                                visibility: E.nr.used ? "visible" : "hidden"
                                            }
                                        ] : null,
                                        class: [
                                            "vue-recycle-scroller__item-view",
                                            [
                                                n.itemClass,
                                                {
                                                    hover: !n.skipHover && k.value === E.nr.key
                                                }
                                            ]
                                        ]
                                    }, pl(n.skipHover ? {} : {
                                        mouseenter: ()=>{
                                            P(E.nr.key);
                                        },
                                        mouseleave: ()=>{
                                            w();
                                        }
                                    })), {
                                        default: h((ae)=>[
                                                Pe(C.$slots, "default", Rt({
                                                    ref_for: !0
                                                }, ae))
                                            ]),
                                        _: 2
                                    }, 1040, [
                                        "view",
                                        "item-tag",
                                        "style",
                                        "class"
                                    ]))), 128)),
                                n.items.length === 0 ? Pe(C.$slots, "empty", {
                                    key: 0
                                }) : me("", !0)
                            ]),
                        _: 3
                    }, 8, [
                        "style",
                        "class"
                    ])),
                    C.$slots.after ? (T(), ie("div", {
                        key: 1,
                        ref_key: "after",
                        ref: d,
                        class: "vue-recycle-scroller__slot"
                    }, [
                        Pe(C.$slots, "after")
                    ], 512)) : me("", !0),
                    p(Ql, {
                        onNotify: o(he)
                    }, null, 8, [
                        "onNotify"
                    ])
                ], 34)), [
                    [
                        o(r),
                        o(se)
                    ]
                ]);
        }
    }), Jl = mt({
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
        setup (e, { expose: t, emit: l }) {
            const n = e, c = l, r = ee(), M = W(()=>{
                var j;
                const te = (j = r.value) == null ? void 0 : j.el;
                return te && typeof te == "object" && "value" in te ? te.value : te;
            }), y = W(()=>({
                    items: n.items,
                    keyField: n.keyField,
                    direction: n.direction,
                    minItemSize: n.minItemSize,
                    shift: n.shift,
                    cache: n.cache,
                    el: M.value,
                    onResize: ()=>c("resize"),
                    onVisible: ()=>c("visible")
                })), d = Wl(y), { itemsWithSize: k, forceUpdate: Y, scrollToItem: v, scrollToPosition: R, findItemIndex: Z, getItemOffset: oe, getItemSize: D, cacheSnapshot: H, restoreCache: q, scrollToBottom: K, onScrollerResize: ge, onScrollerVisible: Q } = d;
            function ve(j, te, G) {
                return {
                    item: j.item,
                    index: te,
                    active: G,
                    itemWithSize: j
                };
            }
            return t({
                scrollToItem: v,
                scrollToPosition: R,
                findItemIndex: Z,
                getItemOffset: oe,
                scrollToBottom: K,
                getItemSize: D,
                cacheSnapshot: H,
                restoreCache: q,
                forceUpdate: Y
            }), (j, te)=>(T(), pe(Gl, Rt({
                    ref_key: "scroller",
                    ref: r,
                    items: o(k),
                    "min-item-size": n.minItemSize,
                    direction: n.direction,
                    cache: n.cache,
                    "key-field": "id",
                    "list-tag": n.listTag,
                    "item-tag": n.itemTag
                }, j.$attrs, {
                    onResize: o(ge),
                    onVisible: o(Q)
                }), ul({
                    default: h(({ item: G, index: he, active: se })=>[
                            Pe(j.$slots, "default", dl(fl(ve(G, he, se))))
                        ]),
                    empty: h(()=>[
                            Pe(j.$slots, "empty")
                        ]),
                    _: 2
                }, [
                    j.$slots.before ? {
                        name: "before",
                        fn: h(()=>[
                                Pe(j.$slots, "before")
                            ]),
                        key: "0"
                    } : void 0,
                    j.$slots.after ? {
                        name: "after",
                        fn: h(()=>[
                                Pe(j.$slots, "after")
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
    function Zl(e, t, l) {
        const n = rn("vscrollMeasurementContext"), c = rn("vscrollAnchorRegistry", null), r = Mn(e, t, n, l);
        return Je(()=>{
            r.mount();
        }), c && be([
            r.id,
            r.finalActive,
            ()=>S(t)
        ], ([M, y, d], [k, Y, v])=>{
            v && v !== d && c.delete(v), d && c.set(d, {
                active: y,
                id: M
            });
        }, {
            immediate: !0
        }), Qt(()=>{
            const M = S(t);
            c && M && c.delete(M), r.unmount();
        }), {
            id: r.id,
            size: r.size,
            finalActive: r.finalActive,
            updateSize: r.updateSize
        };
    }
    const ei = mt({
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
        setup (e, { emit: t }) {
            const l = e, n = t, c = ee();
            return Zl(l, c, {
                onResize: (r)=>n("resize", r)
            }), (r, M)=>(T(), pe(At(l.tag), {
                    ref_key: "el",
                    ref: c
                }, {
                    default: h(()=>[
                            Pe(r.$slots, "default")
                        ]),
                    _: 3
                }, 512));
        }
    }), ti = "https://icons.nextmatrix.app", ni = "7dc6ea56-3665-482b-856d-76780c0fcd38", li = 3e3, qt = "app_vault_icon_cache_v2", ii = 720 * 60 * 60 * 1e3, oi = 10080 * 60 * 1e3;
    function Kt() {
        try {
            if (typeof window < "u" && window.localStorage) return window.localStorage;
        } catch  {}
        return null;
    }
    function xt(e) {
        return typeof e != "string" ? !1 : e.startsWith("data:image/");
    }
    function si() {
        const e = Kt();
        if (!e) return {};
        try {
            e.removeItem("app_vault_icon_cache");
            const t = e.getItem(qt);
            if (!t) return {};
            const l = JSON.parse(t), n = {};
            for (const [c, r] of Object.entries(l))r && typeof r == "object" && (r.status === "FAIL" || r.status === "SUCCESS" && xt(r.url)) && (n[c] = r);
            return n;
        } catch  {}
        return {};
    }
    const ai = wl("vaultIcon", ()=>{
        const e = ee(si()), t = ()=>{
            const y = Kt();
            if (y) try {
                y.setItem(qt, JSON.stringify(e.value));
            } catch  {}
        };
        return {
            iconCache: e,
            getCachedIcon: (y)=>{
                if (!y) return null;
                const d = y.toLowerCase().trim(), k = e.value[d];
                if (!k) return null;
                if (typeof k == "string") return xt(k) ? k : (delete e.value[d], t(), null);
                const Y = Date.now();
                return k.expireAt && Y > k.expireAt ? (delete e.value[d], t(), null) : k.status === "SUCCESS" ? xt(k.url) ? k.url : (delete e.value[d], t(), null) : k.status === "FAIL" ? "FAIL" : null;
            },
            setCachedIcon: (y, d)=>{
                if (!y || !d || !xt(d)) return;
                const k = y.toLowerCase().trim();
                e.value[k] = {
                    status: "SUCCESS",
                    url: d,
                    updatedAt: Date.now(),
                    expireAt: Date.now() + ii
                }, t();
            },
            setFailedIcon: (y)=>{
                if (!y) return;
                const d = y.toLowerCase().trim();
                e.value[d] = {
                    status: "FAIL",
                    updatedAt: Date.now(),
                    expireAt: Date.now() + oi
                }, t();
            },
            clearCachedIcon: (y)=>{
                if (!y) return;
                const d = y.toLowerCase().trim();
                e.value[d] && (delete e.value[d], t());
            },
            clearAllCache: ()=>{
                e.value = {};
                const y = Kt();
                if (y) try {
                    y.removeItem(qt), y.removeItem("app_vault_icon_cache");
                } catch  {}
            }
        };
    }), Ct = new Map;
    function ri(e) {
        return new Promise((t, l)=>{
            const n = new FileReader;
            n.onloadend = ()=>t(n.result), n.onerror = l, n.readAsDataURL(e);
        });
    }
    async function ci(e, t = ni) {
        if (!e || typeof e != "string") return "";
        const l = e.toLowerCase().trim(), n = globalThis.crypto?.subtle || (typeof window < "u" ? window.crypto?.subtle : null);
        if (!n) return "";
        const c = new TextEncoder().encode(`${l}:${t}`), r = await n.digest("SHA-256", c);
        return Array.from(new Uint8Array(r)).map((y)=>y.toString(16).padStart(2, "0")).join("").slice(0, 16);
    }
    async function ui(e) {
        if (!e || typeof e != "string") return "";
        const t = e.toLowerCase().trim(), l = await ci(t);
        return l ? `${ti}/${t}.png?t=${l}` : "";
    }
    async function di(e, t) {
        if (!e || typeof e != "string") return null;
        const l = e.toLowerCase().trim();
        if (t) {
            const c = t.getCachedIcon(l);
            if (c) return c === "FAIL" ? null : c;
        }
        if (typeof navigator < "u" && !navigator.onLine) return null;
        if (Ct.has(l)) return Ct.get(l);
        const n = (async ()=>{
            try {
                const c = await ui(l);
                if (!c) return null;
                const r = new AbortController, M = setTimeout(()=>r.abort(), li);
                let y;
                try {
                    y = await fetch(c, {
                        signal: r.signal
                    });
                } finally{
                    clearTimeout(M);
                }
                if (y.status === 200) {
                    const d = await y.blob();
                    if (!d || d.size <= 1) return t && t.setFailedIcon(l), null;
                    const k = await ri(d);
                    return t && t.setCachedIcon(l, k), k;
                } else if (y.status === 404) return t && t.setFailedIcon(l), null;
                return null;
            } catch  {
                return null;
            } finally{
                Ct.delete(l);
            }
        })();
        return Ct.set(l, n), n;
    }
    const fi = {
        key: 0,
        class: "loading-spinner"
    }, mi = [
        "src"
    ], vi = {
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
            const t = ai(), l = e, n = ee(!1), c = ee(!0), r = ee(""), M = (D)=>{
                const H = D?.target;
                if (H && H.naturalWidth <= 1) {
                    k.value && t.clearCachedIcon(k.value), y();
                    return;
                }
                c.value = !1;
            }, y = ()=>{
                n.value = !0, c.value = !1;
            }, d = {
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
            }, k = W(()=>{
                if (!l.service) return "";
                const D = l.service.toLowerCase().trim();
                return D.includes(".") ? D : d[D] || `${D}.com`;
            }), Y = W(()=>l.service ? l.service.charAt(0).toUpperCase() : "");
            let v = 0;
            const R = async ()=>{
                const D = k.value;
                if (!D) {
                    c.value = !1, n.value = !1;
                    return;
                }
                const H = ++v, q = t.getCachedIcon(D);
                if (q) {
                    q === "FAIL" ? y() : (r.value = q, c.value = !1, n.value = !1);
                    return;
                }
                if (typeof navigator < "u" && !navigator.onLine) {
                    y();
                    return;
                }
                c.value = !0, n.value = !1;
                try {
                    const K = await di(D, t);
                    if (H !== v) return;
                    K ? (r.value = K, c.value = !1, n.value = !1) : y();
                } catch  {
                    H === v && y();
                }
            };
            Je(()=>{
                R();
            }), be(()=>l.service, ()=>{
                r.value = "", c.value = !0, n.value = !1, R();
            });
            const Z = W(()=>({
                    width: `${l.size}px`,
                    height: `${l.size}px`
                })), oe = W(()=>{
                const D = [
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
                let H = 0;
                for(let K = 0; K < (l.service || "").length; K++)H = (l.service || "").charCodeAt(K) + ((H << 5) - H);
                return {
                    backgroundColor: D[Math.abs(H) % D.length],
                    fontSize: `${Math.floor(l.size * .5)}px`
                };
            });
            return (D, H)=>(T(), ie("div", {
                    class: "service-icon-wrapper",
                    style: ot(Z.value)
                }, [
                    c.value && !n.value ? (T(), ie("div", fi)) : me("", !0),
                    r.value && !n.value ? Gt((T(), ie("img", {
                        key: 1,
                        src: r.value,
                        class: "service-icon-img",
                        onError: y,
                        onLoad: M
                    }, null, 40, mi)), [
                        [
                            _l,
                            !c.value
                        ]
                    ]) : me("", !0),
                    n.value && !c.value ? (T(), ie("div", {
                        key: 2,
                        class: "service-icon-fallback",
                        style: ot(oe.value)
                    }, N(Y.value), 5)) : me("", !0)
                ], 4));
        }
    }, pi = Sn(vi, [
        [
            "__scopeId",
            "data-v-60f16256"
        ]
    ]), gi = {
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
        setup (e, { expose: t, emit: l }) {
            const n = e, c = l, r = ee(null), M = ee(null), y = ee(null), d = ee(0), k = ee(!1), Y = ee(!1), v = ee(null);
            let R = 0, Z = 0, oe = 0, D = 0, H = null;
            const q = W(()=>M.value?.offsetWidth || 0), K = W(()=>y.value?.offsetWidth || 0), ge = W(()=>({
                    transform: `translateX(${d.value}px)`,
                    transition: k.value ? "none" : "transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.15)"
                })), Q = (P)=>{
                if (n.disabled) return;
                const w = P.touches[0];
                R = w.clientX, Z = w.clientY, oe = d.value, D = Date.now(), k.value = !0, H = null;
            }, ve = (P)=>{
                if (n.disabled || !k.value) return;
                const w = P.touches[0], b = w.clientX - R, C = w.clientY - Z;
                if (H === null && (Math.abs(b) > 15 || Math.abs(C) > 15) && (H = Math.abs(b) > Math.abs(C)), H) {
                    P.cancelable && P.preventDefault();
                    let F = oe + b;
                    F > q.value ? F = q.value + (F - q.value) * .2 : F < -K.value && (F = -K.value + (F + K.value) * .2), d.value = F;
                }
            }, j = ()=>{
                if (n.disabled) return;
                k.value = !1;
                const P = Math.abs(d.value), w = Date.now() - D;
                d.value > 0 ? d.value > q.value * n.threshold || w < 250 && d.value > 20 ? (d.value = q.value, Y.value = !0, v.value = "left", c("open", "left"), te()) : se() : d.value < 0 && (P > K.value * n.threshold || w < 250 && P > 20) ? (d.value = -K.value, Y.value = !0, v.value = "right", c("open", "right"), te()) : se();
            }, te = ()=>{
                if ("vibrate" in navigator) try {
                    navigator.vibrate(10);
                } catch  {}
                n.id && window.dispatchEvent(new CustomEvent("swipe-action:opened", {
                    detail: {
                        id: n.id
                    }
                }));
            }, G = (P)=>{
                Y.value && P.detail.id !== n.id && se();
            }, he = (P)=>{
                Y.value && !r.value?.contains(P.target) && se();
            };
            Je(()=>{
                window.addEventListener("swipe-action:opened", G), window.addEventListener("touchstart", he, {
                    passive: !0
                });
            }), ft(()=>{
                window.removeEventListener("swipe-action:opened", G), window.removeEventListener("touchstart", he);
            });
            const se = ()=>{
                d.value = 0, Y.value = !1, v.value = null, c("close");
            };
            return t({
                reset: se
            }), (P, w)=>(T(), ie("div", {
                    class: qe([
                        "swipe-action-container",
                        {
                            "is-open": Y.value,
                            "is-swiping": k.value
                        }
                    ]),
                    ref_key: "containerRef",
                    ref: r
                }, [
                    x("div", {
                        class: "swipe-actions left-actions",
                        ref_key: "leftActionsRef",
                        ref: M,
                        style: ot({
                            opacity: d.value > 0 ? 1 : 0,
                            visibility: d.value > 0 ? "visible" : "hidden"
                        })
                    }, [
                        Pe(P.$slots, "left-actions")
                    ], 4),
                    x("div", {
                        class: "swipe-actions right-actions",
                        ref_key: "rightActionsRef",
                        ref: y,
                        style: ot({
                            opacity: d.value < 0 ? 1 : 0,
                            visibility: d.value < 0 ? "visible" : "hidden"
                        })
                    }, [
                        Pe(P.$slots, "right-actions")
                    ], 4),
                    x("div", {
                        class: "swipe-action-content",
                        style: ot(ge.value),
                        onTouchstart: Q,
                        onTouchmove: ve,
                        onTouchend: j,
                        onTouchcancel: j
                    }, [
                        Pe(P.$slots, "default")
                    ], 36)
                ], 2));
        }
    }, hi = {
        class: "conflict-overlay"
    }, yi = {
        class: "conflict-content"
    }, wi = {
        class: "conflict-text"
    }, _i = {
        class: "conflict-actions"
    }, bi = {
        __name: "conflictOverlay",
        emits: [
            "resolve"
        ],
        setup (e) {
            return (t, l)=>{
                const n = jt;
                return T(), ie("div", hi, [
                    x("div", yi, [
                        x("p", wi, N(t.$t("vault.conflict_notice")), 1),
                        x("div", _i, [
                            p(n, {
                                size: "small",
                                type: "primary",
                                plain: "",
                                onClick: l[0] || (l[0] = Ge((c)=>t.$emit("resolve", "force"), [
                                    "stop"
                                ]))
                            }, {
                                default: h(()=>[
                                        Me(N(t.$t("vault.force_sync")), 1)
                                    ]),
                                _: 1
                            }),
                            p(n, {
                                size: "small",
                                type: "danger",
                                plain: "",
                                onClick: l[1] || (l[1] = Ge((c)=>t.$emit("resolve", "discard"), [
                                    "stop"
                                ]))
                            }, {
                                default: h(()=>[
                                        Me(N(t.$t("vault.discard_local")), 1)
                                    ]),
                                _: 1
                            })
                        ])
                    ])
                ]);
            };
        }
    }, $t = ee(null);
    let Nt = null;
    function Si() {
        return {
            currentlyCopiedId: $t,
            setCopied: (t)=>{
                $t.value = t, Nt && clearTimeout(Nt), Nt = setTimeout(()=>{
                    $t.value === t && ($t.value = null);
                }, 2e3);
            }
        };
    }
    const ki = {
        class: "card-inner-content"
    }, zi = {
        class: "card-header"
    }, Ci = {
        class: "service-info"
    }, $i = [
        "title"
    ], Ti = {
        class: "vault-name"
    }, Mi = {
        class: "copy-text"
    }, Ii = {
        class: "code-left"
    }, xi = [
        "data-digits"
    ], Ri = [
        "data-digits"
    ], Ei = {
        key: 0,
        class: "code-right flex flex-items-center"
    }, Ai = {
        key: 1,
        class: "code-right"
    }, Di = {
        class: "timer-text"
    }, Oi = {
        key: 2,
        class: "code-right"
    }, yn = {
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
        setup (e, { emit: t }) {
            const l = Et(), n = Jt(), c = kl(), r = ee(!1);
            let M = null, y = 0, d = 0;
            const k = (m)=>{
                if (l.appGhostMode) if (m.type === "touchstart" && m.touches && m.touches.length > 0) {
                    const _ = m.touches[0];
                    y = _.clientX, d = _.clientY;
                } else m.type === "mousedown" && (y = m.clientX, d = m.clientY);
            }, Y = (m)=>{
                if (l.appGhostMode) {
                    if (m && m.type.startsWith("touch") && m.changedTouches && m.changedTouches.length > 0) {
                        const _ = m.changedTouches[0], A = Math.abs(_.clientX - y), ue = Math.abs(_.clientY - d);
                        if (A > 15 || ue > 15) return;
                    }
                    if (m.type === "mouseup") {
                        const _ = Math.abs(m.clientX - y), A = Math.abs(m.clientY - d);
                        if (_ > 10 || A > 10) return;
                    }
                    r.value = !0, M && clearTimeout(M), M = setTimeout(()=>{
                        r.value = !1, M = null;
                    }, 3e4);
                }
            };
            ft(()=>{
                M && clearTimeout(M), K();
            });
            const v = e, { currentlyCopiedId: R, setCopied: Z } = Si(), oe = W(()=>R.value === v.item.id), D = async ()=>{
                if (v.item.deletedAt != null || Q.value === "------" || Q.value === "ERROR") return;
                await It(Q.value, null) && Z(v.item.id);
            }, { currentTime: H, startTimer: q, stopTimer: K } = zl(), ge = W(()=>Ft.get(v.item.id) || {
                    code: "------",
                    next: null
                }), Q = W(()=>ge.value.code), ve = W(()=>ge.value.next), j = W(()=>ge.value.epoch ?? null), te = W(()=>ge.value.epoch !== void 0 ? ge.value.epoch + 1 : null), G = W(()=>v.item.period || 30), he = W(()=>v.item.digits || 6), se = W(()=>Math.ceil(G.value - H.value % G.value)), P = W(()=>se.value / G.value * 100), w = W(()=>se.value > 10 ? "#67C23A" : se.value > 5 ? "#E6A23C" : "#F56C6C"), b = W(()=>v.item.account?.includes(":") ? v.item.account.split(":").pop() : v.item.account), C = (m, _)=>{
                if (!m || m === "ERROR") return [
                    "",
                    ""
                ];
                if (m === "------") {
                    const ue = Math.floor(_ / 2), u = " ".repeat(_);
                    return [
                        u.substring(0, ue),
                        u.substring(ue)
                    ];
                }
                const A = Math.floor(_ / 2);
                return [
                    m.substring(0, A),
                    m.substring(A)
                ];
            }, F = W(()=>C(Q.value, he.value)), E = W(()=>C(ve.value, he.value)), ae = async (m)=>{
                if (!m.secret) return {
                    code: "ERROR",
                    next: null
                };
                let _ = m.secret;
                if (_ && _.startsWith("nodeauth:")) try {
                    const $ = await c.getAllMaskingKeys();
                    _ = await Cl(_, $);
                } catch ($) {
                    return ut.error("[VaultItemCard] Unmask secret failed for item:", m.id, m.service, $), {
                        code: "ERROR",
                        next: null
                    };
                }
                const A = m.digits || 6, ue = m.algorithm || "SHA1", u = m.period || 30;
                if (m.type === "hotp") {
                    const $ = await Bt(_, m.counter || 0, A, ue, "hotp");
                    return _ = null, {
                        code: $,
                        next: null
                    };
                }
                const z = H.value, L = Math.floor(z / u), de = Math.ceil(u - z % u);
                let a = Q.value, f = ve.value;
                return (j.value !== L || a === "------" || a === "ERROR") && (a = await Bt(_, u, A, ue, m.type)), de <= 5 && v.isMobile ? (!f || te.value !== L + 1) && (f = await Bt(_, u, A, ue, m.type, 1)) : f = null, _ = null, {
                    code: a,
                    next: f,
                    epoch: L
                };
            }, ce = async (m)=>{
                const _ = m.id, A = await ae(m);
                !c.isLocked && A.code !== "ERROR" && Ft.set(_, A);
            };
            return be(H, ()=>{
                v.item.type !== "hotp" && ce(v.item);
            }), be(()=>v.item.counter, ()=>{
                v.item.type === "hotp" && ce(v.item);
            }), be([
                ()=>v.item.id,
                ()=>v.item.secret
            ], ([m, _], [A, ue])=>{
                if (m !== A) {
                    r.value = !1, M && (clearTimeout(M), M = null), ce(v.item);
                    return;
                }
                _ !== ue && (Ft.delete(m), ce(v.item));
            }, {
                immediate: !0
            }), be(()=>c.isLocked, (m, _)=>{
                _ && !m && ce(v.item);
            }), Je(()=>{
                q();
            }), (m, _)=>{
                const A = wn, ue = Ln, u = Vn, z = Fn, L = Nn, de = Pn, a = Hn, f = jt, $ = Wn, O = Xn;
                return T(), pe(O, {
                    shadow: "hover",
                    class: qe([
                        "vault-card",
                        {
                            "is-selected": e.isSelected,
                            "is-dragging": e.isDragging,
                            "is-pressing": e.isPressing,
                            "is-compact": e.isCompact,
                            "is-pending": e.isPending,
                            "is-ghost-mode": o(l).appGhostMode,
                            "is-revealed": r.value
                        }
                    ])
                }, {
                    default: h(()=>[
                            p(gi, {
                                id: e.item.id,
                                disabled: !o(l).isMobile || e.item.status === "conflict" || o(n).isItemInConflict(e.item.id) || e.isDragging || e.isPressing,
                                onOpen: _[13] || (_[13] = ()=>r.value = !1)
                            }, {
                                "left-actions": h(()=>[
                                        e.item.deletedAt != null ? (T(), ie("div", {
                                            key: 0,
                                            class: "swipe-btn bg-success",
                                            onClick: _[0] || (_[0] = (X)=>m.$emit("command", "restore", e.item))
                                        }, [
                                            p(A, null, {
                                                default: h(()=>[
                                                        p(o(St))
                                                    ]),
                                                _: 1
                                            }),
                                            x("span", null, N(m.$t("vault.restore")), 1)
                                        ])) : (T(), ie("div", {
                                            key: 1,
                                            class: "swipe-btn bg-primary",
                                            onClick: _[1] || (_[1] = (X)=>m.$emit("command", "qr", e.item))
                                        }, [
                                            p(A, null, {
                                                default: h(()=>[
                                                        p(o(on))
                                                    ]),
                                                _: 1
                                            }),
                                            x("span", null, N(m.$t("vault.export_account")), 1)
                                        ]))
                                    ]),
                                "right-actions": h(()=>[
                                        e.item.deletedAt != null ? (T(), ie("div", {
                                            key: 0,
                                            class: "swipe-btn bg-danger",
                                            onClick: _[2] || (_[2] = (X)=>m.$emit("command", "delete", e.item))
                                        }, [
                                            p(A, null, {
                                                default: h(()=>[
                                                        p(o(nt))
                                                    ]),
                                                _: 1
                                            }),
                                            x("span", null, N(m.$t("vault.hard_delete")), 1)
                                        ])) : (T(), ie(lt, {
                                            key: 1
                                        }, [
                                            x("div", {
                                                class: "swipe-btn bg-warning",
                                                onClick: _[3] || (_[3] = (X)=>m.$emit("command", "edit", e.item))
                                            }, [
                                                p(A, null, {
                                                    default: h(()=>[
                                                            p(o(sn))
                                                        ]),
                                                    _: 1
                                                }),
                                                x("span", null, N(m.$t("common.edit")), 1)
                                            ]),
                                            x("div", {
                                                class: "swipe-btn bg-danger",
                                                onClick: _[4] || (_[4] = (X)=>m.$emit("command", "delete", e.item))
                                            }, [
                                                p(A, null, {
                                                    default: h(()=>[
                                                            p(o(nt))
                                                        ]),
                                                    _: 1
                                                }),
                                                x("span", null, N(m.$t("common.delete")), 1)
                                            ])
                                        ], 64))
                                    ]),
                                default: h(()=>[
                                        x("div", ki, [
                                            x("div", zi, [
                                                x("div", Ci, [
                                                    p(ue, {
                                                        "model-value": e.isSelected,
                                                        onChange: _[5] || (_[5] = (X)=>m.$emit("toggle-selection", e.item.id)),
                                                        onClick: _[6] || (_[6] = Ge(()=>{}, [
                                                            "stop"
                                                        ]))
                                                    }, null, 8, [
                                                        "model-value"
                                                    ]),
                                                    p(pi, {
                                                        service: e.item.service,
                                                        size: e.isCompact ? 20 : 24
                                                    }, null, 8, [
                                                        "service",
                                                        "size"
                                                    ]),
                                                    x("h3", {
                                                        class: "service-name",
                                                        title: e.item.service
                                                    }, N(e.item.service), 9, $i),
                                                    e.item.category ? (T(), pe(u, {
                                                        key: 0,
                                                        size: "small",
                                                        effect: "light"
                                                    }, {
                                                        default: h(()=>[
                                                                Me(N(e.item.category), 1)
                                                            ]),
                                                        _: 1
                                                    })) : me("", !0),
                                                    e.isPending && e.item.status !== "conflict" && !o(n).isItemInConflict(e.item.id) ? (T(), pe(z, {
                                                        key: 1,
                                                        content: m.$t("vault.pending_sync_tip")
                                                    }, {
                                                        default: h(()=>[
                                                                p(A, {
                                                                    class: "pending-icon ml-5"
                                                                }, {
                                                                    default: h(()=>[
                                                                            p(o(_n))
                                                                        ]),
                                                                    _: 1
                                                                })
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "content"
                                                    ])) : me("", !0),
                                                    e.item.status === "conflict" || o(n).isItemInConflict(e.item.id) ? (T(), pe(z, {
                                                        key: 2,
                                                        content: m.$t("vault.conflict_detected_tip")
                                                    }, {
                                                        default: h(()=>[
                                                                p(A, {
                                                                    class: "conflict-icon ml-5",
                                                                    color: "#F56C6C"
                                                                }, {
                                                                    default: h(()=>[
                                                                            p(o(Bn))
                                                                        ]),
                                                                    _: 1
                                                                })
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "content"
                                                    ])) : me("", !0)
                                                ]),
                                                o(l).isMobile ? me("", !0) : (T(), pe(a, {
                                                    key: 0,
                                                    trigger: "click",
                                                    onCommand: _[8] || (_[8] = (X)=>m.$emit("command", X, e.item))
                                                }, {
                                                    dropdown: h(()=>[
                                                            p(de, null, {
                                                                default: h(()=>[
                                                                        e.item.deletedAt == null ? (T(), pe(L, {
                                                                            key: 0,
                                                                            command: "qr"
                                                                        }, {
                                                                            default: h(()=>[
                                                                                    p(A, null, {
                                                                                        default: h(()=>[
                                                                                                p(o(on))
                                                                                            ]),
                                                                                        _: 1
                                                                                    }),
                                                                                    Me(" " + N(m.$t("vault.export_account")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        })) : me("", !0),
                                                                        e.item.deletedAt != null ? (T(), pe(L, {
                                                                            key: 1,
                                                                            command: "restore"
                                                                        }, {
                                                                            default: h(()=>[
                                                                                    p(A, null, {
                                                                                        default: h(()=>[
                                                                                                p(o(St))
                                                                                            ]),
                                                                                        _: 1
                                                                                    }),
                                                                                    Me(" " + N(m.$t("vault.restore")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        })) : me("", !0),
                                                                        e.item.deletedAt == null ? (T(), pe(L, {
                                                                            key: 2,
                                                                            command: "edit"
                                                                        }, {
                                                                            default: h(()=>[
                                                                                    p(A, null, {
                                                                                        default: h(()=>[
                                                                                                p(o(sn))
                                                                                            ]),
                                                                                        _: 1
                                                                                    }),
                                                                                    Me(" " + N(m.$t("common.edit")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        })) : me("", !0),
                                                                        p(L, {
                                                                            command: "delete",
                                                                            class: "text-danger"
                                                                        }, {
                                                                            default: h(()=>[
                                                                                    p(A, null, {
                                                                                        default: h(()=>[
                                                                                                p(o(nt))
                                                                                            ]),
                                                                                        _: 1
                                                                                    }),
                                                                                    Me(" " + N(e.item.deletedAt != null ? m.$t("vault.hard_delete") : m.$t("common.delete")), 1)
                                                                                ]),
                                                                            _: 1
                                                                        })
                                                                    ]),
                                                                _: 1
                                                            })
                                                        ]),
                                                    default: h(()=>[
                                                            p(A, {
                                                                class: "more-icon",
                                                                onClick: _[7] || (_[7] = Ge(()=>{}, [
                                                                    "stop"
                                                                ]))
                                                            }, {
                                                                default: h(()=>[
                                                                        p(o(Un))
                                                                    ]),
                                                                _: 1
                                                            })
                                                        ]),
                                                    _: 1
                                                }))
                                            ]),
                                            x("p", Ti, N(b.value), 1),
                                            x("div", {
                                                class: "code-display-area",
                                                onClick: Ge(D, [
                                                    "stop"
                                                ]),
                                                onMousedown: k,
                                                onMouseup: Y,
                                                onMouseleave: Y,
                                                onTouchstart: k,
                                                onTouchend: Y,
                                                onTouchcancel: Y
                                            }, [
                                                x("div", {
                                                    class: qe([
                                                        "copy-overlay",
                                                        {
                                                            "is-active": oe.value
                                                        }
                                                    ])
                                                }, [
                                                    _[14] || (_[14] = x("div", {
                                                        class: "copy-bg"
                                                    }, null, -1)),
                                                    x("span", Mi, N(m.$t("common.copied")), 1)
                                                ], 2),
                                                x("div", Ii, [
                                                    x("div", {
                                                        class: qe([
                                                            "current-code",
                                                            {
                                                                "is-placeholder-loading": Q.value === "------" || Q.value === "ERROR"
                                                            }
                                                        ]),
                                                        "data-digits": he.value
                                                    }, [
                                                        Q.value ? (T(), ie(lt, {
                                                            key: 0
                                                        }, [
                                                            x("span", null, N(F.value[0]), 1),
                                                            _[15] || (_[15] = x("span", {
                                                                class: "code-divider"
                                                            }, null, -1)),
                                                            x("span", null, N(F.value[1]), 1)
                                                        ], 64)) : me("", !0)
                                                    ], 10, xi),
                                                    e.isMobile && ve.value && e.item.deletedAt == null ? (T(), ie("div", {
                                                        key: 0,
                                                        class: "next-code",
                                                        "data-digits": he.value
                                                    }, [
                                                        x("span", null, N(E.value[0]), 1),
                                                        _[16] || (_[16] = x("span", {
                                                            class: "code-divider is-next"
                                                        }, null, -1)),
                                                        x("span", null, N(E.value[1]), 1)
                                                    ], 8, Ri)) : me("", !0)
                                                ]),
                                                e.item.deletedAt != null ? (T(), ie("div", Ei, [
                                                    p(f, {
                                                        type: "success",
                                                        plain: "",
                                                        circle: "",
                                                        size: "small",
                                                        onClick: _[9] || (_[9] = Ge((X)=>m.$emit("command", "restore", e.item), [
                                                            "stop"
                                                        ])),
                                                        title: m.$t("vault.restore")
                                                    }, {
                                                        icon: h(()=>[
                                                                p(A, null, {
                                                                    default: h(()=>[
                                                                            p(o(St))
                                                                        ]),
                                                                    _: 1
                                                                })
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "title"
                                                    ]),
                                                    p(f, {
                                                        type: "danger",
                                                        plain: "",
                                                        circle: "",
                                                        size: "small",
                                                        onClick: _[10] || (_[10] = Ge((X)=>m.$emit("command", "delete", e.item), [
                                                            "stop"
                                                        ])),
                                                        title: m.$t("vault.hard_delete")
                                                    }, {
                                                        icon: h(()=>[
                                                                p(A, null, {
                                                                    default: h(()=>[
                                                                            p(o(nt))
                                                                        ]),
                                                                    _: 1
                                                                })
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "title"
                                                    ])
                                                ])) : Q.value !== "------" ? (T(), ie("div", Ai, [
                                                    e.item.type === "hotp" ? (T(), pe(f, {
                                                        key: 0,
                                                        type: "primary",
                                                        plain: "",
                                                        circle: "",
                                                        size: e.isCompact ? "small" : "default",
                                                        loading: e.isIncrementing,
                                                        onClick: _[11] || (_[11] = Ge((X)=>m.$emit("increment", e.item), [
                                                            "stop"
                                                        ])),
                                                        title: m.$t("vault.increment")
                                                    }, {
                                                        icon: h(()=>[
                                                                p(A, null, {
                                                                    default: h(()=>[
                                                                            p(o(St))
                                                                        ]),
                                                                    _: 1
                                                                })
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "size",
                                                        "loading",
                                                        "title"
                                                    ])) : (T(), pe($, {
                                                        key: 1,
                                                        type: "circle",
                                                        percentage: P.value,
                                                        width: e.isCompact ? 26 : 30,
                                                        "stroke-width": e.isCompact ? 2 : 3,
                                                        color: w.value
                                                    }, {
                                                        default: h(()=>[
                                                                x("span", Di, N(se.value), 1)
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "percentage",
                                                        "width",
                                                        "stroke-width",
                                                        "color"
                                                    ]))
                                                ])) : (T(), ie("div", Oi, [
                                                    p(A, {
                                                        class: "is-loading"
                                                    }, {
                                                        default: h(()=>[
                                                                p(o(Tt))
                                                            ]),
                                                        _: 1
                                                    })
                                                ]))
                                            ], 32),
                                            e.item.status === "conflict" || o(n).isItemInConflict(e.item.id) ? (T(), pe(bi, {
                                                key: 0,
                                                onResolve: _[12] || (_[12] = (X)=>m.$emit("resolve-conflict", e.item.id, X))
                                            })) : me("", !0)
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
    function Li(e, t, l, n = null) {
        const c = kn(), r = Jt(), { updateTrashMetadata: M, fetchTrash: y } = $n(), { t: d } = $l.global, k = ee([]), Y = ee(!1), v = ee(!1), R = ee(!1), Z = ee({
            id: "",
            service: "",
            account: "",
            category: ""
        }), oe = ee(!1), D = ee(null), H = ee(!1), q = ee(""), K = async ()=>{
            if (k.value.length) try {
                await an.confirm(d("vault.delete_batch_confirm", {
                    count: k.value.length
                }), d("common.delete"), {
                    type: "warning",
                    confirmButtonText: d("common.delete"),
                    cancelButtonText: d("common.cancel")
                }), Y.value = !0;
                const u = Et(), z = t?.value?.length > 0 && t.value[0]?.deletedAt != null || !u.appTrashMode;
                if (!r.isManualOffline && (!navigator.onLine || r.isOffline)) {
                    Le.warning(d("security.offline_network_blocked")), Y.value = !1;
                    return;
                }
                z ? (r.isManualOffline ? await tt.batchDelete(k.value) : await Promise.all(k.value.map((L)=>ct.hardDelete(L))), M(-k.value.length)) : (await ct.batchMoveToTrash(k.value), M(k.value.length)), await c.deleteItems(k.value), !r.isOffline && !z && await c.updateMetadata({
                    delta: -k.value.length
                }), Le.success(d("vault.delete_batch_success", {
                    count: k.value.length
                })), k.value = [], c.markDirty(), e(), y();
            } catch (u) {
                u !== "cancel" && ut.error(u);
            } finally{
                Y.value = !1;
            }
        }, ge = (u)=>{
            const z = k.value.indexOf(u);
            z > -1 ? k.value.splice(z, 1) : k.value.push(u);
        }, Q = ()=>{
            t?.value && (k.value = t.value.map((u)=>u.id));
        }, ve = async (u, z)=>{
            const L = z || u?.currentCode;
            if (!L || L === "------") return Le.warning(d("vault.not_generated_yet"));
            await It(L, d("common.copy_success"));
        }, j = (u)=>{
            Z.value = {
                id: u.id,
                service: u.service,
                account: u.account,
                category: u.category || "",
                updatedAt: u.updatedAt
            }, v.value = !0;
        }, te = async ()=>{
            R.value = !0;
            try {
                const { id: u, ...z } = Z.value;
                (await tt.updateAccount(u, z)).success && (Le.success(d("vault.update_success")), v.value = !1, c.markDirty(), e(), y());
            } catch  {} finally{
                R.value = !1;
            }
        };
        let G = null;
        const he = async (u, z)=>{
            if (!u.some((B, ne)=>B.id !== z[ne]?.id)) return;
            const de = Le.success({
                message: d("vault.sort_updated"),
                duration: 1500,
                customClass: "message-success-blur"
            }), f = (n?.value || u).filter((B)=>!B.id.startsWith("tmp_"));
            let $ = null;
            const O = u.findIndex((B, ne)=>B.id !== z[ne]?.id);
            if (O !== -1 && (z[O]?.id === u[O + 1]?.id ? $ = u[O] : u[O]?.id === z[O + 1]?.id ? $ = u.find((B)=>B.id === z[O].id) : $ = u[O]), $) {
                const B = f.findIndex((ke)=>ke.id === $.id), ne = B > 0 ? f[B - 1] : null, Te = B < f.length - 1 ? f[B + 1] : null, _e = ne?.sortOrder ?? null, Ce = Te?.sortOrder ?? null;
                let $e = null;
                if (_e === null && Ce === null) $e = 1e3;
                else if (_e === null) $e = (Ce ?? 0) + 1e3;
                else if (Ce === null) $e = Math.max(0, (_e ?? 0) - 1e3);
                else {
                    const ke = Math.floor((_e + Ce) / 2);
                    ke > Ce && ke < _e && ($e = ke);
                }
                if ($e !== null) {
                    $.sortOrder = $e;
                    try {
                        await tt.moveSortOrder($.id, $e), G && clearTimeout(G), G = setTimeout(()=>{
                            c.markDirty(), e();
                        }, 1e3);
                    } catch  {
                        de?.close(), t.value = z, G && clearTimeout(G), e();
                    }
                    return;
                }
            }
            const X = f.map((B)=>B.id);
            try {
                await tt.reorder(X), G && clearTimeout(G), G = setTimeout(()=>{
                    c.markDirty(), e();
                }, 1e3);
            } catch  {
                de?.close(), t.value = z, G && clearTimeout(G), e();
            }
        }, se = async (u)=>{
            try {
                const z = Et(), L = u.deletedAt != null || !z.appTrashMode;
                if (!r.isManualOffline && (!navigator.onLine || r.isOffline)) {
                    Le.warning(d("security.offline_network_blocked"));
                    return;
                }
                const de = d(L ? "vault.hard_delete" : "common.delete"), a = L ? d("vault.hard_delete_confirm", {
                    service: u.service
                }) : d("vault.delete_confirm", {
                    service: u.service
                });
                await an.confirm(a, de, {
                    type: "warning",
                    confirmButtonText: de,
                    cancelButtonText: d("common.cancel")
                }), L ? (r.isManualOffline ? await tt.deleteAccount(u.id) : await ct.hardDelete(u.id), M(-1)) : (await ct.moveToTrash(u.id), M(1)), await c.deleteItems([
                    u.id
                ]);
                const f = u.deletedAt == null;
                !r.isOffline && f && await c.updateMetadata({
                    delta: -1
                }), Le.success(d("vault.delete_success")), c.markDirty(), e();
            } catch (z) {
                z !== "cancel" && ut.error(z);
            }
        }, P = ee(!1), w = async (u)=>{
            if (!P.value) {
                P.value = !0;
                try {
                    const z = await tt.incrementCounter(u.id, u.updatedAt);
                    z.success && (c.markDirty(), e(), z.pending ? Le.info(d("vault.increment_offline_queued")) : Le.success(d("vault.increment_success")));
                } catch (z) {
                    ut.error(z), Le.error(d("vault.increment_failed"));
                } finally{
                    P.value = !1;
                }
            }
        }, b = async (u)=>{
            if (!u || !u.startsWith("nodeauth:")) return u;
            const { useAppLockStore: z } = await dn(async ()=>{
                const { useAppLockStore: f } = await import("./index-TjUXpP2f.js").then(async (m)=>{
                    await m.__tla;
                    return m;
                }).then(($)=>$.b);
                return {
                    useAppLockStore: f
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])), { unmaskSecretFront: L } = await dn(async ()=>{
                const { unmaskSecretFront: f } = await import("./index-TjUXpP2f.js").then(async (m)=>{
                    await m.__tla;
                    return m;
                }).then(($)=>$.m);
                return {
                    unmaskSecretFront: f
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])), a = await z().getAllMaskingKeys();
            return await L(u, a);
        }, C = async (u)=>{
            const z = await b(u.secret);
            D.value = {
                ...u,
                secret: z
            }, H.value = !1, oe.value = !0;
            const L = cn({
                service: u.service,
                account: u.account,
                secret: z,
                type: u.type,
                algorithm: u.algorithm,
                digits: u.digits,
                period: u.period,
                counter: u.counter
            });
            q.value = await Il.toDataURL(L, {
                width: 240,
                margin: 1
            });
        }, F = async ()=>{
            D.value && await It(D.value.secret);
        }, E = async ()=>{
            if (D.value) {
                const u = D.value, z = cn({
                    service: u.service,
                    account: u.account,
                    secret: u.secret,
                    type: u.type,
                    algorithm: u.algorithm,
                    digits: u.digits,
                    period: u.period,
                    counter: u.counter
                });
                await It(z);
            }
        }, ae = (u)=>(u || "").match(/.{1,4}/g)?.join(" ") || u, ce = (u, z)=>{
            if (!u || u === "------" || typeof u != "string") return u;
            const L = u.replace(/\s/g, "");
            return z === 6 && L.length === 6 ? `${L.slice(0, 3)} ${L.slice(3)}` : z === 8 && L.length === 8 ? `${L.slice(0, 4)} ${L.slice(4)}` : L;
        }, m = (u, z)=>{
            if (!u || u === "------" || typeof u != "string") return [
                u,
                ""
            ];
            const L = u.replace(/\s/g, "");
            return z === 6 && L.length === 6 ? [
                L.slice(0, 3),
                L.slice(3)
            ] : z === 8 && L.length === 8 ? [
                L.slice(0, 4),
                L.slice(4)
            ] : [
                L,
                ""
            ];
        }, _ = (u, z)=>{
            u === "edit" ? j(z) : u === "qr" ? C(z) : u === "delete" ? se(z) : u === "restore" && A(z);
        }, A = async (u)=>{
            if (!navigator.onLine || r.isOffline) {
                Le.warning(d("security.offline_network_restore_blocked"));
                return;
            }
            try {
                await ct.restoreItem(u.id), M(-1), Le.success(d("vault.restore_success")), r.isOffline || await c.updateMetadata({
                    delta: 1
                }), await c.deleteItems([
                    u.id
                ]), c.markDirty(), e();
            } catch (z) {
                ut.error(z), Le.error("恢复失败");
            }
        }, ue = async (u, z)=>{
            await zn().resolveConflict(u, z), z === "force" ? (Le.success(d("vault.conflict_force_applied")), tt.syncOfflineActions().then(()=>e())) : (Le.info(d("vault.conflict_discarded")), e());
        };
        return {
            selectedIds: k,
            isBulkDeleting: Y,
            showEditDialog: v,
            isEditing: R,
            editVaultData: Z,
            showQrDialog: oe,
            currentQrItem: D,
            showSecret: H,
            qrCodeUrl: q,
            categoryOptions: W(()=>(l?.value || []).filter((u)=>u.category).map((u)=>u.category)),
            toggleSelection: ge,
            selectAllLoaded: Q,
            handleBulkDelete: K,
            copyCode: ve,
            openEditDialog: j,
            submitEditVault: te,
            deleteVault: se,
            openQrDialog: C,
            copySecret: F,
            copyOtpUrl: E,
            formatSecret: ae,
            formatCode: ce,
            getCodeGroups: m,
            handleCommand: _,
            performReorder: he,
            handleResolveConflict: ue,
            restoreVault: A,
            handleIncrement: w,
            isIncrementing: P
        };
    }
    function Vi(e) {
        const { listRef: t, columns: l, isMobile: n, isOffline: c, appViewMode: r, onReorder: M } = e, { t: y } = Cn(), d = ee(null), k = W(()=>t.value.find((b)=>b.id === d.value)), Y = ee({
            x: 0,
            y: 0
        }), v = ee({
            w: 0
        }), R = ee(null);
        let Z = {
            x: 0,
            y: 0
        }, oe = !1, D = null, H = 0, q = 1, K = {
            x: 0,
            y: 0
        };
        const ge = W(()=>({
                left: `${Y.value.x}px`,
                top: `${Y.value.y}px`,
                width: `${v.value.w}px`
            }));
        let Q = [];
        const ve = (b, C)=>{
            const F = document.querySelector(".vault-scroller");
            if (!F) return;
            const E = F.getBoundingClientRect();
            if (b >= E.left && b <= E.right && C >= E.top && C <= E.bottom) {
                const ae = C - E.top, ce = b - E.left, m = document.querySelector(".vue-recycle-scroller__item-view"), _ = m ? m.offsetHeight : r.value === "compact" ? 95 : 135, A = Math.floor(ae / _), ue = Math.floor(ce / (E.width / l.value));
                let u = A * l.value + ue;
                const z = t.value.length - 1;
                u > z && (u = z), u < 0 && (u = 0);
                const L = t.value[u]?.id;
                if (L && L !== d.value) {
                    const de = [
                        ...t.value
                    ], a = de.findIndex((f)=>f.id === d.value);
                    if (a !== -1 && a !== u) {
                        const [f] = de.splice(a, 1);
                        de.splice(u, 0, f), t.value = de;
                    }
                }
            }
        }, j = (b)=>{
            if (H = b, D) return;
            q = 1;
            const C = ()=>{
                if (!oe) return te();
                const F = H * q;
                let E = document.getElementById("app") || document.documentElement;
                if (!n.value && E.scrollHeight <= E.clientHeight) {
                    const m = document.querySelector(".main-content");
                    m && (E = m);
                }
                const ae = E.scrollTop;
                E.scrollTop += F;
                const ce = E.scrollTop;
                Math.abs(ce - ae) < .1 && F !== 0 && E !== document.documentElement && (document.documentElement.scrollTop += F), q < 4 && (q += .03), ve(K.x, K.y), D = requestAnimationFrame(C);
            };
            D = requestAnimationFrame(C);
        }, te = ()=>{
            D && (cancelAnimationFrame(D), D = null, q = 1, H = 0);
        }, G = (b, C, F, E)=>{
            d.value = F, oe = !0, K = {
                x: b,
                y: C
            }, Q = [
                ...t.value
            ];
            const ae = E.getBoundingClientRect();
            if (Z = {
                x: b - ae.left,
                y: C - ae.top
            }, v.value.w = ae.width, Y.value = {
                x: ae.left,
                y: ae.top
            }, n.value && "vibrate" in navigator) try {
                navigator.vibrate([
                    20
                ]);
            } catch  {}
            n.value && (document.body.style.overflow = "hidden", document.documentElement.style.overflow = "hidden", document.body.style.touchAction = "none"), window.getSelection()?.removeAllRanges(), document.body.style.userSelect = "none", document.body.style.webkitUserSelect = "none";
        }, he = (b, C)=>{
            if (!oe) return;
            K = {
                x: b,
                y: C
            }, Y.value = {
                x: b - Z.x,
                y: C - Z.y
            };
            const F = 80;
            if (C < F) {
                const E = Math.max(-25, Math.floor((C - F) / 2.5));
                j(E);
            } else if (C > window.innerHeight - F) {
                const E = Math.min(25, Math.floor((C - (window.innerHeight - F)) / 2.5));
                j(E);
            } else te();
            ve(b, C);
        }, se = ()=>{
            oe && (te(), M && M([
                ...t.value
            ], Q), oe = !1, d.value = null, document.body.style.overflow = "", document.documentElement.style.overflow = "", document.body.style.touchAction = "", document.body.style.userSelect = "", document.body.style.webkitUserSelect = "");
        };
        return {
            draggedId: d,
            draggedItem: k,
            floatingStyle: ge,
            isPressing: R,
            handleMouseDown: (b, C)=>{
                if (b.target.closest(".el-checkbox, .el-dropdown, .el-button, .more-icon")) return;
                const F = b.clientX, E = b.clientY, ae = b.currentTarget;
                let ce = !1;
                const m = ()=>{
                    ce && se(), window.removeEventListener("mousemove", _), window.removeEventListener("mouseup", m);
                }, _ = (A)=>{
                    if (!ce && Math.sqrt(Math.pow(A.clientX - F, 2) + Math.pow(A.clientY - E, 2)) > 5) {
                        if (c.value) {
                            Le.warning(y("vault.reorder_offline_disabled")), m();
                            return;
                        }
                        ce = !0, G(F, E, C, ae);
                    }
                    ce && he(A.clientX, A.clientY);
                };
                window.addEventListener("mousemove", _), window.addEventListener("mouseup", m);
            },
            handleTouchStart: (b, C)=>{
                if (b.target.closest(".el-checkbox, .el-dropdown, .el-button, .more-icon, .code-display-area")) return;
                const F = b.touches[0], E = F.clientX, ae = F.clientY, ce = b.currentTarget;
                R.value = C;
                let m = !1;
                const _ = setTimeout(()=>{
                    if (c.value) {
                        Le.warning(y("vault.reorder_offline_disabled")), R.value = null;
                        return;
                    }
                    m = !0, R.value = null, G(E, ae, C, ce);
                }, 250), A = (u)=>{
                    if (m) {
                        u.cancelable && u.preventDefault();
                        const z = u.touches[0];
                        he(z.clientX, z.clientY);
                    } else {
                        const z = u.touches[0];
                        (Math.abs(z.clientX - E) > 10 || Math.abs(z.clientY - ae) > 10) && (clearTimeout(_), R.value = null);
                    }
                }, ue = ()=>{
                    clearTimeout(_), R.value = null, m && se(), window.removeEventListener("touchmove", A), window.removeEventListener("touchend", ue), window.removeEventListener("touchcancel", ue);
                };
                window.addEventListener("touchmove", A, {
                    passive: !1
                }), window.addEventListener("touchend", ue), window.addEventListener("touchcancel", ue);
            },
            stopAutoScroll: te
        };
    }
    let Fi, Bi, Hi, Ui, Pi, Ni, Wi, Xi, Yi, qi, Ki, ji, Qi, Gi, Ji, Zi, eo, to, no, lo, io, oo, so, ao, ro, co, uo, fo, mo, vo, po, go, ho, yo, wo, _o, bo, So, ko, zo;
    Fi = {
        class: "vault-list-wrapper min-h-400"
    };
    Bi = {
        key: 0,
        class: "offline-sync-banner px-16 py-8 mb-10"
    };
    Hi = {
        class: "text-12"
    };
    Ui = {
        class: "vault-content"
    };
    Pi = {
        key: 0,
        class: "vault-list-toolbar mb-10 flex gap-15 flex-items-center flex-between px-16 py-12"
    };
    Ni = {
        class: "batch-actions flex flex-items-center gap-10 flex-1"
    };
    Wi = {
        class: "batch-text"
    };
    Xi = {
        key: 1,
        class: "vault-list-toolbar mb-10 flex gap-15 flex-items-center flex-between flex-wrap"
    };
    Yi = {
        class: "flex flex-items-center gap-10 flex-1"
    };
    qi = {
        class: "batch-actions flex flex-items-center gap-10"
    };
    Ki = {
        class: "batch-text"
    };
    ji = {
        key: 2,
        class: "category-filter-container"
    };
    Qi = {
        class: "category-chips"
    };
    Gi = {
        class: "tag-count"
    };
    Ji = {
        key: 0,
        class: "tag-loading-track"
    };
    Zi = [
        "onClick"
    ];
    eo = {
        class: "tag-count"
    };
    to = {
        key: 0,
        class: "tag-loading-track"
    };
    no = {
        class: "tag-count"
    };
    lo = {
        key: 0,
        class: "tag-loading-track"
    };
    io = {
        key: 0,
        class: "flex-column flex-center min-h-400 text-secondary"
    };
    oo = {
        class: "text-16 ls-1"
    };
    so = {
        key: 2,
        class: "empty-state"
    };
    ao = [
        "infinite-scroll-disabled"
    ];
    ro = {
        key: 0,
        class: "text-center p-20 text-secondary"
    };
    co = {
        key: 1,
        class: "text-center p-20 text-secondary text-12"
    };
    uo = {
        class: "dialog-footer"
    };
    fo = {
        key: 0,
        class: "qr-container"
    };
    mo = {
        class: "qr-info"
    };
    vo = {
        class: "qr-service"
    };
    po = {
        class: "qr-account"
    };
    go = {
        class: "qr-image-wrapper"
    };
    ho = [
        "src"
    ];
    yo = {
        class: "qr-tip"
    };
    wo = {
        class: "secret-section"
    };
    _o = {
        class: "secret-box"
    };
    bo = {
        class: "secret-text"
    };
    So = {
        class: "secret-actions"
    };
    ko = {
        class: "uri-link-wrapper"
    };
    zo = {
        __name: "vaultList",
        emits: [
            "switch-tab"
        ],
        setup (e, { expose: t, emit: l }) {
            const n = zn(), { t: c } = Cn(), r = Et(), M = Jt(), y = kn(), d = ee(null), { serverVault: k, vault: Y, searchQuery: v, selectedCategory: R, isLoading: Z, isFetching: oe, isFetchingNextPage: D, hasNextPage: H, absoluteTotalItems: q, categoryStats: K, localCategoryStats: ge, fetchVault: Q, handleLoadMore: ve, isLoadMoreDisabled: j } = Ml(d), { trashCount: te, isFetchingTrash: G, fetchTrash: he, filteredTrash: se } = $n(), P = W({
                get () {
                    return R.value === "____TRASH____" ? se(v.value) : Y.value;
                },
                set (i) {
                    R.value !== "____TRASH____" && (Y.value = i);
                }
            }), w = ()=>{
                Q(), r.isOffline || he();
            };
            be(()=>r.searchQuery, (i)=>{
                r.isMobile && (v.value = i);
            }), be([
                oe,
                v
            ], ([i, s])=>{
                r.isLoadingSearching = i && !!s;
            });
            const { selectedIds: b, isBulkDeleting: C, toggleSelection: F, selectAllLoaded: E, handleBulkDelete: ae, showEditDialog: ce, editVaultData: m, isEditing: _, handleCommand: A, submitEditVault: ue, showQrDialog: u, currentQrItem: z, qrCodeUrl: L, showSecret: de, formatSecret: a, copySecret: f, copyOtpUrl: $, categoryOptions: O, performReorder: X, handleResolveConflict: B, handleIncrement: ne, isIncrementing: Te } = Li(w, P, K, k), _e = [
                {
                    value: "card",
                    icon: jn
                },
                {
                    value: "compact",
                    icon: Qn
                }
            ], Ce = ee(!1), $e = {
                xs: 24,
                sm: 12,
                md: 8,
                lg: 6
            }, ke = ee(typeof window < "u" ? window.innerWidth : 1200), je = ()=>{
                ke.value = window.innerWidth;
            };
            Je(()=>window.addEventListener("resize", je)), ft(()=>window.removeEventListener("resize", je));
            const vt = W(()=>r.isMobile ? 1 : ke.value >= 1200 ? 4 : ke.value >= 992 ? 3 : ke.value >= 768 ? 2 : 1), pt = W(()=>{
                const i = [], s = P.value, g = vt.value;
                for(let I = 0; I < s.length; I += g)i.push({
                    id: `row_${I}`,
                    items: s.slice(I, I + g)
                });
                return i;
            }), { draggedId: gt, draggedItem: ht, floatingStyle: Ve, isPressing: Dt, handleMouseDown: Ot, handleTouchStart: yt, stopAutoScroll: Lt } = Vi({
                listRef: P,
                columns: vt,
                isMobile: W(()=>r.isMobile),
                isOffline: W(()=>M.isOffline),
                appViewMode: W(()=>r.appVaultViewMode),
                onReorder: (i, s)=>X(i, s)
            }), st = async ()=>{
                try {
                    if (y.isDirty) {
                        Q();
                        return;
                    }
                    const i = await y.getData();
                    i && i.categoryStats && (ge.value = i.categoryStats);
                } finally{
                    Ue.value = !1;
                }
            }, Ue = ee(!0);
            return Je(()=>{
                st();
            }), ft(()=>{
                Lt();
            }), t({
                fetchVault: Q
            }), (i, s)=>{
                const g = wn, I = jt, V = Yn, J = Gn, le = Kn, ye = Jn, Ee = Zn, xe = nl, Ae = tl, De = il, Se = ol, Re = ll, Ne = el;
                return T(), ie("div", Fi, [
                    p(bl, {
                        name: "el-zoom-in-top"
                    }, {
                        default: h(()=>[
                                o(n).hasPendingChanges ? (T(), ie("div", Bi, [
                                    p(g, {
                                        class: "mr-8"
                                    }, {
                                        default: h(()=>[
                                                p(o(_n))
                                            ]),
                                        _: 1
                                    }),
                                    x("span", Hi, N(i.$t("vault.offline_pending_sync", {
                                        count: o(n).syncQueue.length
                                    })), 1)
                                ])) : me("", !0)
                            ]),
                        _: 1
                    }),
                    x("div", Ui, [
                        p(ye, {
                            offset: o(r).isMobile ? 58 : 60,
                            disabled: o(r).isMobile && o(b).length === 0,
                            onChange: s[6] || (s[6] = (U)=>Ce.value = U)
                        }, {
                            default: h(()=>[
                                    x("div", {
                                        class: qe([
                                            "affix-container",
                                            {
                                                "is-affixed": Ce.value
                                            }
                                        ])
                                    }, [
                                        o(r).isMobile && o(b).length > 0 ? (T(), ie("div", Pi, [
                                            x("div", Ni, [
                                                x("span", Wi, N(i.$t("search.selected_items", {
                                                    count: o(b).length
                                                })), 1),
                                                s[16] || (s[16] = x("div", {
                                                    class: "flex-1"
                                                }, null, -1)),
                                                p(I, {
                                                    size: "small",
                                                    onClick: o(E),
                                                    plain: "",
                                                    disabled: o(C)
                                                }, {
                                                    default: h(()=>[
                                                            Me(N(i.$t("search.select_all_loaded")), 1)
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "onClick",
                                                    "disabled"
                                                ]),
                                                p(I, {
                                                    type: "danger",
                                                    plain: "",
                                                    size: "small",
                                                    onClick: o(ae),
                                                    loading: o(C)
                                                }, {
                                                    default: h(()=>[
                                                            p(g, null, {
                                                                default: h(()=>[
                                                                        p(o(nt))
                                                                    ]),
                                                                _: 1
                                                            })
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "onClick",
                                                    "loading"
                                                ]),
                                                p(I, {
                                                    size: "small",
                                                    onClick: s[0] || (s[0] = (U)=>b.value = []),
                                                    plain: "",
                                                    disabled: o(C)
                                                }, {
                                                    default: h(()=>[
                                                            Me(N(i.$t("common.cancel")), 1)
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "disabled"
                                                ])
                                            ])
                                        ])) : me("", !0),
                                        o(r).isMobile ? me("", !0) : (T(), ie("div", Xi, [
                                            x("div", Yi, [
                                                p(V, {
                                                    modelValue: o(v),
                                                    "onUpdate:modelValue": s[1] || (s[1] = (U)=>Vt(v) ? v.value = U : null),
                                                    placeholder: i.$t("search.placeholder"),
                                                    clearable: "",
                                                    class: "max-w-400"
                                                }, {
                                                    prefix: h(()=>[
                                                            o(oe) && o(v) ? (T(), pe(g, {
                                                                key: 0,
                                                                class: "is-loading"
                                                            }, {
                                                                default: h(()=>[
                                                                        p(o(Tt))
                                                                    ]),
                                                                _: 1
                                                            })) : (T(), pe(g, {
                                                                key: 1
                                                            }, {
                                                                default: h(()=>[
                                                                        p(o(qn))
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
                                            x("div", qi, [
                                                o(b).length > 0 ? (T(), ie(lt, {
                                                    key: 0
                                                }, [
                                                    x("span", Ki, N(i.$t("search.selected_items", {
                                                        count: o(b).length
                                                    })), 1),
                                                    p(I, {
                                                        type: "danger",
                                                        plain: "",
                                                        onClick: o(ae),
                                                        loading: o(C)
                                                    }, {
                                                        default: h(()=>[
                                                                p(g, null, {
                                                                    default: h(()=>[
                                                                            p(o(nt))
                                                                        ]),
                                                                    _: 1
                                                                }),
                                                                Me(" " + N(i.$t("common.delete")), 1)
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "onClick",
                                                        "loading"
                                                    ]),
                                                    p(I, {
                                                        onClick: s[2] || (s[2] = (U)=>b.value = []),
                                                        plain: "",
                                                        disabled: o(C)
                                                    }, {
                                                        default: h(()=>[
                                                                Me(N(i.$t("common.cancel")), 1)
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "disabled"
                                                    ])
                                                ], 64)) : (T(), pe(I, {
                                                    key: 1,
                                                    onClick: o(E),
                                                    plain: "",
                                                    disabled: o(C)
                                                }, {
                                                    default: h(()=>[
                                                            Me(N(i.$t("search.select_all_loaded")), 1)
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "onClick",
                                                    "disabled"
                                                ])),
                                                p(le, {
                                                    modelValue: o(r).appVaultViewMode,
                                                    "onUpdate:modelValue": s[3] || (s[3] = (U)=>o(r).appVaultViewMode = U),
                                                    class: "ml-10",
                                                    onChange: o(r).setVaultViewMode
                                                }, {
                                                    default: h(()=>[
                                                            (T(), ie(lt, null, Mt(_e, (U)=>p(J, {
                                                                    key: U.value,
                                                                    label: U.value
                                                                }, {
                                                                    default: h(()=>[
                                                                            p(g, {
                                                                                size: "16"
                                                                            }, {
                                                                                default: h(()=>[
                                                                                        (T(), pe(At(U.icon)))
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
                                        !Ue.value && (!o(r).isMobile || !o(r).isSearchVisible) ? (T(), ie("div", ji, [
                                            x("div", Qi, [
                                                x("div", {
                                                    class: qe([
                                                        "category-tag",
                                                        {
                                                            "is-active": o(R) === "",
                                                            "is-loading": o(oe) && o(R) === "" && !o(D)
                                                        }
                                                    ]),
                                                    onClick: s[4] || (s[4] = (U)=>R.value = "")
                                                }, [
                                                    Me(N(i.$t("common.all")) + " ", 1),
                                                    x("span", Gi, "(" + N(o(q)) + ")", 1),
                                                    o(oe) && o(R) === "" && !o(D) ? (T(), ie("div", Ji, [
                                                        ...s[17] || (s[17] = [
                                                            x("div", {
                                                                class: "tag-loading-bar"
                                                            }, null, -1)
                                                        ])
                                                    ])) : me("", !0)
                                                ], 2),
                                                (T(!0), ie(lt, null, Mt(o(K), (U)=>(T(), ie("div", {
                                                        key: U.id,
                                                        class: qe([
                                                            "category-tag",
                                                            {
                                                                "is-active": o(R) === U.id,
                                                                "is-loading": o(oe) && o(R) === U.id && !o(D)
                                                            }
                                                        ]),
                                                        onClick: (Be)=>R.value = U.id
                                                    }, [
                                                        Me(N(U.category || i.$t("common.uncategorized")) + " ", 1),
                                                        x("span", eo, "(" + N(U.count) + ")", 1),
                                                        o(oe) && o(R) === U.id && !o(D) ? (T(), ie("div", to, [
                                                            ...s[18] || (s[18] = [
                                                                x("div", {
                                                                    class: "tag-loading-bar"
                                                                }, null, -1)
                                                            ])
                                                        ])) : me("", !0)
                                                    ], 10, Zi))), 128)),
                                                o(r).appTrashMode && (o(te) > 0 || o(R) === "____TRASH____") ? (T(), ie("div", {
                                                    key: 0,
                                                    class: qe([
                                                        "category-tag trash-tag",
                                                        {
                                                            "is-active": o(R) === "____TRASH____",
                                                            "is-loading": o(oe) && o(R) === "____TRASH____" && !o(D)
                                                        }
                                                    ]),
                                                    onClick: s[5] || (s[5] = (U)=>R.value = "____TRASH____")
                                                }, [
                                                    p(g, {
                                                        class: "mr-4"
                                                    }, {
                                                        default: h(()=>[
                                                                p(o(nt))
                                                            ]),
                                                        _: 1
                                                    }),
                                                    Me(" " + N(i.$t("vault.trash")) + " ", 1),
                                                    x("span", no, "(" + N(o(te)) + ")", 1),
                                                    o(G) && o(R) === "____TRASH____" ? (T(), ie("div", lo, [
                                                        ...s[19] || (s[19] = [
                                                            x("div", {
                                                                class: "tag-loading-bar bg-danger"
                                                            }, null, -1)
                                                        ])
                                                    ])) : me("", !0)
                                                ], 2)) : me("", !0)
                                            ])
                                        ])) : me("", !0)
                                    ], 2)
                                ]),
                            _: 1
                        }, 8, [
                            "offset",
                            "disabled"
                        ]),
                        Ue.value || (o(Z) || o(G) && o(R) === "____TRASH____") && P.value.length === 0 ? (T(), ie("div", io, [
                            p(g, {
                                class: "is-loading mb-20 text-primary",
                                size: 48
                            }, {
                                default: h(()=>[
                                        p(o(Tt))
                                    ]),
                                _: 1
                            }),
                            x("p", oo, N(i.$t("common.loading_data")), 1)
                        ])) : o(y).hasDecryptionError ? (T(), pe(Tl, {
                            key: 1
                        })) : !(o(Z) || o(G) && o(R) === "____TRASH____") && !o(oe) && P.value.length === 0 && !o(v) ? (T(), ie("div", so, [
                            o(R) === "____TRASH____" ? (T(), pe(Ee, {
                                key: 0,
                                description: i.$t("security.trash_already_empty")
                            }, null, 8, [
                                "description"
                            ])) : (T(), pe(Ee, {
                                key: 1,
                                description: i.$t("vault.empty_vault")
                            }, {
                                default: h(()=>[
                                        p(I, {
                                            type: "primary",
                                            onClick: s[7] || (s[7] = (U)=>i.$emit("switch-tab", "add-vault"))
                                        }, {
                                            default: h(()=>[
                                                    Me(N(i.$t("vault.go_add_vault")), 1)
                                                ]),
                                            _: 1
                                        })
                                    ]),
                                _: 1
                            }, 8, [
                                "description"
                            ]))
                        ])) : Gt((T(), ie("div", {
                            key: 3,
                            class: "list-container min-h-200",
                            "infinite-scroll-disabled": o(j),
                            "infinite-scroll-distance": 300
                        }, [
                            p(o(Jl), {
                                class: "vault-scroller",
                                items: pt.value,
                                "min-item-size": 80,
                                "key-field": "id",
                                "page-mode": ""
                            }, {
                                default: h(({ item: U, index: Be, active: Fe })=>[
                                        p(o(ei), {
                                            item: U,
                                            active: Fe,
                                            "size-dependencies": [
                                                U.items
                                            ],
                                            "data-index": Be
                                        }, {
                                            default: h(()=>[
                                                    p(Ae, {
                                                        gutter: 20
                                                    }, {
                                                        default: h(()=>[
                                                                (T(!0), ie(lt, null, Mt(U.items, (we, ze)=>(T(), pe(xe, Rt({
                                                                        key: ze
                                                                    }, {
                                                                        ref_for: !0
                                                                    }, $e, {
                                                                        class: [
                                                                            o(r).appVaultViewMode === "compact" ? "mb-15" : "mb-20"
                                                                        ],
                                                                        "data-id": we.id
                                                                    }), {
                                                                        default: h(()=>[
                                                                                p(yn, {
                                                                                    item: we,
                                                                                    "is-selected": o(b).includes(we.id),
                                                                                    "is-dragging": o(gt) === we.id,
                                                                                    "is-pressing": o(Dt) === we.id,
                                                                                    "is-compact": o(r).appVaultViewMode === "compact",
                                                                                    "is-pending": o(n).isItemPending(we.id) || we.pending,
                                                                                    "is-mobile": o(r).isMobile,
                                                                                    "is-incrementing": o(Te),
                                                                                    onToggleSelection: o(F),
                                                                                    onCommand: o(A),
                                                                                    onIncrement: o(ne),
                                                                                    onResolveConflict: o(B),
                                                                                    onMousedown: (Ye)=>o(Ot)(Ye, we.id),
                                                                                    onTouchstart: (Ye)=>o(yt)(Ye, we.id)
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
                            (T(), pe(Sl, {
                                to: "body"
                            }, [
                                o(gt) && o(ht) ? (T(), ie("div", {
                                    key: 0,
                                    class: "drag-floating-card",
                                    style: ot(o(Ve))
                                }, [
                                    p(yn, {
                                        style: {
                                            "pointer-events": "none"
                                        },
                                        item: o(ht),
                                        "is-compact": o(r).appVaultViewMode === "compact",
                                        "is-dragging": !1,
                                        "is-incrementing": o(Te)
                                    }, null, 8, [
                                        "item",
                                        "is-compact",
                                        "is-incrementing"
                                    ])
                                ], 4)) : me("", !0)
                            ])),
                            o(D) ? (T(), ie("div", ro, [
                                p(g, {
                                    class: "is-loading"
                                }, {
                                    default: h(()=>[
                                            p(o(Tt))
                                        ]),
                                    _: 1
                                }),
                                Me(" " + N(i.$t("vault.loading_more")), 1)
                            ])) : me("", !0),
                            !o(H) && P.value.length > 0 ? (T(), ie("div", co, N(i.$t("vault.no_more_accounts")), 1)) : me("", !0),
                            !(o(Z) || o(G) && o(R) === "____TRASH____") && P.value.length === 0 && o(v) ? (T(), pe(Ee, {
                                key: 2,
                                description: i.$t("search.no_matching_accounts")
                            }, null, 8, [
                                "description"
                            ])) : me("", !0)
                        ], 8, ao)), [
                            [
                                Ne,
                                o(ve)
                            ]
                        ])
                    ]),
                    p(un, {
                        modelValue: o(ce),
                        "onUpdate:modelValue": s[12] || (s[12] = (U)=>Vt(ce) ? ce.value = U : null),
                        title: i.$t("vault.edit_account"),
                        width: "400px"
                    }, {
                        footer: h(()=>[
                                x("span", uo, [
                                    p(I, {
                                        onClick: s[11] || (s[11] = (U)=>ce.value = !1)
                                    }, {
                                        default: h(()=>[
                                                Me(N(i.$t("common.cancel")), 1)
                                            ]),
                                        _: 1
                                    }),
                                    p(I, {
                                        type: "primary",
                                        loading: o(_),
                                        onClick: o(ue)
                                    }, {
                                        default: h(()=>[
                                                Me(N(i.$t("common.save")), 1)
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "loading",
                                        "onClick"
                                    ])
                                ])
                            ]),
                        default: h(()=>[
                                p(Re, {
                                    model: o(m),
                                    "label-position": "top"
                                }, {
                                    default: h(()=>[
                                            p(De, {
                                                label: i.$t("vault.service_name")
                                            }, {
                                                default: h(()=>[
                                                        p(V, {
                                                            modelValue: o(m).service,
                                                            "onUpdate:modelValue": s[8] || (s[8] = (U)=>o(m).service = U)
                                                        }, null, 8, [
                                                            "modelValue"
                                                        ])
                                                    ]),
                                                _: 1
                                            }, 8, [
                                                "label"
                                            ]),
                                            p(De, {
                                                label: i.$t("vault.account_identifier")
                                            }, {
                                                default: h(()=>[
                                                        p(V, {
                                                            modelValue: o(m).account,
                                                            "onUpdate:modelValue": s[9] || (s[9] = (U)=>o(m).account = U)
                                                        }, null, 8, [
                                                            "modelValue"
                                                        ])
                                                    ]),
                                                _: 1
                                            }, 8, [
                                                "label"
                                            ]),
                                            p(De, {
                                                label: i.$t("vault.category_optional")
                                            }, {
                                                default: h(()=>[
                                                        p(Se, {
                                                            modelValue: o(m).category,
                                                            "onUpdate:modelValue": s[10] || (s[10] = (U)=>o(m).category = U),
                                                            "fetch-suggestions": (U, Be)=>Be(o(O).filter((Fe)=>Fe.toLowerCase().includes(U.toLowerCase())).map((Fe)=>({
                                                                        value: Fe
                                                                    }))),
                                                            placeholder: i.$t("vault.category_optional"),
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
                    p(un, {
                        modelValue: o(u),
                        "onUpdate:modelValue": s[14] || (s[14] = (U)=>Vt(u) ? u.value = U : null),
                        title: i.$t("vault.export_account"),
                        width: "350px",
                        onClosed: s[15] || (s[15] = (U)=>de.value = !1)
                    }, {
                        default: h(()=>[
                                o(z) ? (T(), ie("div", fo, [
                                    x("div", mo, [
                                        x("h3", vo, N(o(z).service), 1),
                                        x("p", po, N(o(z).account), 1)
                                    ]),
                                    x("div", go, [
                                        x("img", {
                                            src: o(L),
                                            class: "qr-code-img"
                                        }, null, 8, ho)
                                    ]),
                                    x("p", yo, N(i.$t("vault.export_qr_tip")), 1),
                                    x("div", wo, [
                                        x("div", _o, [
                                            x("div", bo, N(o(de) ? o(a)(o(z).secret) : "•••• •••• •••• ••••"), 1),
                                            x("div", So, [
                                                p(g, {
                                                    class: "action-icon",
                                                    onClick: s[13] || (s[13] = (U)=>de.value = !o(de))
                                                }, {
                                                    default: h(()=>[
                                                            o(de) ? (T(), pe(o(al), {
                                                                key: 1
                                                            })) : (T(), pe(o(sl), {
                                                                key: 0
                                                            }))
                                                        ]),
                                                    _: 1
                                                }),
                                                p(g, {
                                                    class: "action-icon",
                                                    onClick: o(f)
                                                }, {
                                                    default: h(()=>[
                                                            p(o(rl))
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "onClick"
                                                ])
                                            ])
                                        ])
                                    ]),
                                    x("div", ko, [
                                        p(I, {
                                            link: "",
                                            type: "primary",
                                            class: "otp-url-btn",
                                            onClick: o($)
                                        }, {
                                            default: h(()=>[
                                                    p(g, {
                                                        class: "mr-4"
                                                    }, {
                                                        default: h(()=>[
                                                                p(o(cl))
                                                            ]),
                                                        _: 1
                                                    }),
                                                    Me(" " + N(i.$t("vault.copy_otp_url")), 1)
                                                ]),
                                            _: 1
                                        }, 8, [
                                            "onClick"
                                        ])
                                    ])
                                ])) : me("", !0)
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
    Bo = Sn(zo, [
        [
            "__scopeId",
            "data-v-00f95918"
        ]
    ]);
});
export { Bo as default, __tla };
