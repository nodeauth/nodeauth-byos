const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/passwordGenerator-DiyMJByM.js","assets/element-plus-CTp1djr_.js","assets/vue-core-DHcoxuim.js","assets/element-plus-CqJ-3YyC.css","assets/index-CchOo4_M.js","assets/pdf-utils-CDJbbqXy.js","assets/compression-utils-BzBbrBKd.js","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-CY07rioj.js","assets/index-CeTN7Y2W.css","assets/timeSync-CosUWx8C.js","assets/qrParser-nyvxcMsF.js","assets/totpSecret-59xln4zR.js","assets/common-4CMW6x8T.js","assets/vaultService-DSwP8RFJ.js","assets/resourceRegistry-B1hhQL_K.js","assets/qr-utils-Cc6U-Akc.js","assets/appsReview-Bf4P6d5i.js","assets/iconProtonAuth-DNmudLoY.js","assets/iconLastPassAuth-tkOXoXk7.js"])))=>i.map(i=>d[i]);
import { _, __tla as __tla_0 } from "./pdf-utils-CDJbbqXy.js";
import { u as x, g as O, aC as q, ax as z, ay as B, aU as $, a2 as F } from "./element-plus-CTp1djr_.js";
import { I as g } from "./iconToolbox-CCvYrKlP.js";
import { M, v as N, __tla as __tla_1 } from "./index-CchOo4_M.js";
import { a6 as t, l as r, i as e, F as T, r as m, aF as h, at as k, al as n, k as E, ac as j, j as f, ag as y, g as w, W as Q, S as d, t as p } from "./vue-core-DHcoxuim.js";
import "./compression-utils-BzBbrBKd.js";
import "./simplewebauthn-3qpiAaRi.js";
import "./tanstack-query-CY07rioj.js";
let fe;
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
    })()
]).then(async ()=>{
    let U, W, G, H, J, K, X, Y, Z, ee, te, oe, se, ae, ce, re;
    U = {
        class: "tools-wrapper"
    };
    W = {
        class: "tab-card-wrapper"
    };
    G = {
        class: "page-header-container"
    };
    H = {
        class: "page-header-hero"
    };
    J = {
        class: "hero-icon-wrapper"
    };
    K = {
        key: 0
    };
    X = {
        class: "page-desc-text"
    };
    Y = {
        class: "page-header-hero"
    };
    Z = {
        class: "hero-icon-wrapper"
    };
    ee = {
        key: 0
    };
    te = {
        class: "page-desc-text"
    };
    oe = {
        key: 0,
        class: "tools-grid"
    };
    se = {
        class: "tool-card-content"
    };
    ae = {
        class: "icon-wrapper"
    };
    ce = {
        class: "text-info"
    };
    re = {
        key: 1,
        class: "tool-container"
    };
    fe = {
        __name: "utilityTools",
        setup (ie) {
            const u = M(), C = p(()=>_(()=>import("./passwordGenerator-DiyMJByM.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))), I = p(()=>_(()=>import("./timeSync-CosUWx8C.js"), __vite__mapDeps([10,1,2,3,4,5,6,7,8,9]))), D = p(()=>_(()=>import("./qrParser-nyvxcMsF.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([11,5,6,1,2,3,4,7,8,9]))), P = p(()=>_(()=>import("./totpSecret-59xln4zR.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([12,5,6,1,2,3,8,13,4,7,9,14,15,16]))), S = p(()=>_(()=>import("./appsReview-Bf4P6d5i.js"), __vite__mapDeps([17,1,2,3,18,4,5,6,7,8,9,19]))), i = w({
                get: ()=>u.activeSubTool,
                set: (s)=>{
                    u.activeSubTool = s;
                }
            }), { t: o } = N.global, v = w(()=>[
                    {
                        id: "totp-secret",
                        title: o("tools.totp_secret_title"),
                        desc: o("tools.totp_secret_desc"),
                        icon: d(q)
                    },
                    {
                        id: "apps-review",
                        title: o("tools.apps_review_title"),
                        desc: o("tools.apps_review_desc"),
                        icon: d(z)
                    },
                    {
                        id: "password",
                        title: o("tools.password_gen_title"),
                        desc: o("tools.password_gen_desc"),
                        icon: d(B)
                    },
                    {
                        id: "time-sync",
                        title: o("tools.time_sync_title"),
                        desc: o("tools.time_sync_desc"),
                        icon: d($)
                    },
                    {
                        id: "qr-parser",
                        title: o("tools.qr_parser_title"),
                        desc: o("tools.qr_parser_desc"),
                        icon: d(F)
                    }
                ]), V = (s)=>{
                const a = v.value.find((c)=>c.id === s);
                return a ? a.title : "工具";
            }, b = (s)=>{
                const a = v.value.find((c)=>c.id === s);
                return a ? a.desc : "";
            }, A = (s)=>{
                const a = v.value.find((c)=>c.id === s);
                return a ? a.icon : g;
            }, L = w(()=>{
                switch(i.value){
                    case "password":
                        return C;
                    case "time-sync":
                        return I;
                    case "qr-parser":
                        return D;
                    case "totp-secret":
                        return P;
                    case "apps-review":
                        return S;
                    default:
                        return null;
                }
            });
            return (s, a)=>{
                const c = x, R = O;
                return t(), r("div", U, [
                    e("div", W, [
                        e("div", G, [
                            i.value ? (t(), r(T, {
                                key: 1
                            }, [
                                e("div", Y, [
                                    e("div", Z, [
                                        m(c, {
                                            size: 28
                                        }, {
                                            default: h(()=>[
                                                    (t(), f(y(A(i.value))))
                                                ]),
                                            _: 1
                                        })
                                    ]),
                                    k(u).isMobile ? E("", !0) : (t(), r("h2", ee, n(V(i.value)), 1))
                                ]),
                                e("p", te, n(b(i.value)), 1)
                            ], 64)) : (t(), r(T, {
                                key: 0
                            }, [
                                e("div", H, [
                                    e("div", J, [
                                        m(c, {
                                            size: 28
                                        }, {
                                            default: h(()=>[
                                                    m(g)
                                                ]),
                                            _: 1
                                        })
                                    ]),
                                    k(u).isMobile ? E("", !0) : (t(), r("h2", K, n(s.$t("tools.title")), 1))
                                ]),
                                e("p", X, n(s.$t("tools.desc")), 1)
                            ], 64))
                        ]),
                        i.value ? (t(), r("div", re, [
                            (t(), f(y(L.value)))
                        ])) : (t(), r("div", oe, [
                            (t(!0), r(T, null, j(v.value, (l)=>(t(), f(R, {
                                    key: l.id,
                                    shadow: "hover",
                                    class: Q([
                                        "tool-card",
                                        `tool-card-${l.id}`
                                    ]),
                                    onClick: (le)=>i.value = l.id
                                }, {
                                    default: h(()=>[
                                            e("div", se, [
                                                e("div", ae, [
                                                    m(c, {
                                                        size: 32
                                                    }, {
                                                        default: h(()=>[
                                                                (t(), f(y(l.icon)))
                                                            ]),
                                                        _: 2
                                                    }, 1024)
                                                ]),
                                                e("div", ce, [
                                                    e("h3", null, n(l.title), 1),
                                                    e("p", null, n(l.desc), 1)
                                                ])
                                            ])
                                        ]),
                                    _: 2
                                }, 1032, [
                                    "class",
                                    "onClick"
                                ]))), 128))
                        ]))
                    ])
                ]);
            };
        }
    };
});
export { fe as default, __tla };
