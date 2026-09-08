const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/qrScanner-C8pwTWWz.js","assets/element-plus-CTp1djr_.js","assets/vue-core-DHcoxuim.js","assets/element-plus-CqJ-3YyC.css","assets/qr-utils-Cc6U-Akc.js","assets/index-DpkVzPs1.js","assets/pdf-utils-CDJbbqXy.js","assets/compression-utils-BzBbrBKd.js","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-CY07rioj.js","assets/index-CeTN7Y2W.css"])))=>i.map(i=>d[i]);
import { _ as w, __tla as __tla_0 } from "./pdf-utils-CDJbbqXy.js";
import { n as S, w as g, u as h, ag as k, e as q, C as l } from "./element-plus-CTp1djr_.js";
import { v as C, __tla as __tla_1 } from "./index-DpkVzPs1.js";
import { a6 as c, l as r, i as x, r as t, at as i, aF as s, q as u, al as _, k as B, t as N, aa as b } from "./vue-core-DHcoxuim.js";
import "./compression-utils-BzBbrBKd.js";
import "./simplewebauthn-3qpiAaRi.js";
import "./tanstack-query-CY07rioj.js";
let O;
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
    let D, I, P;
    D = {
        class: "tool-pane"
    };
    I = {
        class: "qr-parser-container"
    };
    P = {
        key: 0,
        class: "result-section mt-20"
    };
    O = {
        __name: "qrParser",
        setup (R) {
            const p = N(()=>w(()=>import("./qrScanner-C8pwTWWz.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))), e = b(""), { t: a } = C.global, d = (o)=>{
                e.value = o, l.success(a("tools.qr_parsed"));
            }, m = async ()=>{
                if (e.value) try {
                    await navigator.clipboard.writeText(e.value), l.success(a("tools.password_copied"));
                } catch  {}
            };
            return (o, n)=>{
                const f = S, v = g, y = h, E = q;
                return c(), r("div", D, [
                    x("div", I, [
                        t(i(p), {
                            onScanSuccess: d
                        }),
                        e.value ? (c(), r("div", P, [
                            t(f, {
                                "content-position": "left"
                            }, {
                                default: s(()=>[
                                        u(_(o.$t("tools.qr_result")), 1)
                                    ]),
                                _: 1
                            }),
                            t(v, {
                                modelValue: e.value,
                                "onUpdate:modelValue": n[0] || (n[0] = (V)=>e.value = V),
                                type: "textarea",
                                rows: 3,
                                readonly: "",
                                resize: "none"
                            }, null, 8, [
                                "modelValue"
                            ]),
                            t(E, {
                                type: "success",
                                plain: "",
                                class: "w-full mt-10",
                                onClick: m
                            }, {
                                default: s(()=>[
                                        t(y, null, {
                                            default: s(()=>[
                                                    t(i(k))
                                                ]),
                                            _: 1
                                        }),
                                        u(" " + _(o.$t("common.copy")), 1)
                                    ]),
                                _: 1
                            })
                        ])) : B("", !0)
                    ])
                ]);
            };
        }
    };
});
export { O as default, __tla };
