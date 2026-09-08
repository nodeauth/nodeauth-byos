const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vaultList-CpJtAJYe.js","assets/element-plus-CTp1djr_.js","assets/vue-core-DHcoxuim.js","assets/element-plus-CqJ-3YyC.css","assets/index-DpkVzPs1.js","assets/pdf-utils-CDJbbqXy.js","assets/compression-utils-BzBbrBKd.js","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-CY07rioj.js","assets/index-CeTN7Y2W.css","assets/vaultService-CZxl-pNW.js","assets/resourceRegistry-B1hhQL_K.js","assets/common-B_BSmTKM.js","assets/decryptionErrorState-DMT6xVck.js","assets/responsiveOverlay-BLp6suU0.js","assets/responsiveOverlay-DXpm1mUF.css","assets/useVaultList-BT76su_F.js","assets/qr-utils-Cc6U-Akc.js","assets/vaultList-DblAQ1dG.css","assets/addVault-DOq8Oe_M.js","assets/addVault-BSLeJoQv.css","assets/dataExport-bPWh8k_t.js","assets/iconProtonAuth-BCqDVbGn.js","assets/dataMigrationService-D_nTCSU_.js","assets/wa-sqlite-CPsif24c.js","assets/argon2-browser-DuRf3eoo.js","assets/hash-wasm-Dup_VHWH.js","assets/dataExport-BViWmYxM.css","assets/dataImport-C7eEqhFY.js","assets/iconLastPassAuth-Dt19xImU.js","assets/dataBackup-DZQ_Nu0t.js","assets/utilityTools-Dz8WS8Hz.js","assets/iconToolbox-Z3hOq26f.js","assets/passkeySettings-C6Z_p9ei.js","assets/webAuthnService-CsD5YGdx.js","assets/securitySettings-DyvJWOLp.js","assets/iconPinCode-Deq77zU8.js","assets/securitySettings-hawg_PJi.css","assets/appearanceSetting-DPEaSOe7.js","assets/iconTheme-eGqgL0R_.js","assets/languageSettings-Dh7yNLaO.js","assets/themeSettings-Be1F9H6C.js","assets/layoutSettings-DoE_IH1c.js","assets/layoutSettings-CDkc7e94.css","assets/devicesSettings-CExqFFbq.js","assets/trashSettings-BJvnvwxV.js","assets/pinSettings-DQBZ766j.js","assets/aboutView-D13l3X0a.js","assets/mobileHub-5-OqR6lk.js"])))=>i.map(i=>d[i]);
import { ag as q, aJ as X, aW as Y, ak as Z, aQ as tt, ac as et, aC as at, aD as ot, aP as N, A as it, S as st, B as nt, u as U, e as _t, an as lt, ao as ct, aS as ut, b as pt, C as rt, ad as dt, z as j, l as mt } from "./element-plus-CTp1djr_.js";
import { a6 as a, l as S, i as v, aw as vt, j as o, aF as n, r as _, at as t, F as C, ac as W, ag as z, al as A, W as $, g as bt, k as M, aD as I, V as R, b as J, aa as H, a2 as gt } from "./vue-core-DHcoxuim.js";
import { _ as Q, F as yt, L as kt, J as ft, M as x, l as i, __tla as __tla_0 } from "./index-DpkVzPs1.js";
import { I as G } from "./iconToolbox-Z3hOq26f.js";
import { _ as s, __tla as __tla_1 } from "./pdf-utils-CDJbbqXy.js";
let At, Bt;
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
    const Et = {
        name: "iconAbout"
    }, Tt = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    };
    function St(d, e, l, b, u, c) {
        return a(), S("svg", Tt, [
            ...e[0] || (e[0] = [
                v("path", {
                    fill: "currentColor",
                    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
                }, null, -1)
            ])
        ]);
    }
    let Vt, Lt, Dt, ht, It, Rt, Pt, Ot;
    At = Q(Et, [
        [
            "render",
            St
        ]
    ]);
    Vt = [
        {
            key: "vault",
            label: "menu.vault",
            icon: q
        },
        {
            key: "add-vault",
            label: "menu.add",
            icon: X
        },
        {
            key: "migration",
            label: "menu.migration",
            icon: tt,
            children: [
                {
                    key: "migration-export",
                    label: "migration.export",
                    icon: Y
                },
                {
                    key: "migration-import",
                    label: "migration.import",
                    icon: Z
                }
            ]
        },
        {
            key: "backups",
            label: "menu.backup",
            icon: et
        },
        {
            key: "tools",
            label: "menu.tools",
            icon: G
        },
        {
            key: "settings",
            label: "menu.settings",
            icon: N,
            children: [
                {
                    key: "settings-passkey",
                    label: "menu.passkey",
                    icon: yt
                },
                {
                    key: "settings-security",
                    label: "menu.security",
                    icon: at
                },
                {
                    key: "settings-appearance",
                    label: "menu.appearance",
                    icon: ot
                },
                {
                    key: "settings-about",
                    label: "menu.about",
                    icon: At
                }
            ]
        }
    ];
    Lt = {
        __name: "desktopMenu",
        props: {
            app_active_tab: {
                type: String,
                required: !0
            }
        },
        emits: [
            "select"
        ],
        setup (d) {
            const { t: e, locale: l } = kt(), b = ft(), u = x();
            vt();
            const c = bt(()=>u.isSidebarCollapsed), r = ()=>u.toggleSidebar(), g = async ()=>{
                await b.logout(), rt.success(e("auth.logout_success"));
            };
            return (m, V)=>{
                const f = U, L = nt, P = st, O = it, D = _t, w = pt;
                return a(), o(w, {
                    width: t(c) ? "64px" : "240px",
                    class: "left-aside"
                }, {
                    default: n(()=>[
                            _(O, {
                                "default-active": d.app_active_tab,
                                class: "side-menu",
                                onSelect: V[0] || (V[0] = (p)=>m.$emit("select", p)),
                                collapse: t(c)
                            }, {
                                default: n(()=>[
                                        (a(!0), S(C, null, W(t(Vt), (p)=>(a(), S(C, {
                                                key: p.key
                                            }, [
                                                p.children ? (a(), o(P, {
                                                    key: 0,
                                                    index: p.key
                                                }, {
                                                    title: n(()=>[
                                                            _(f, null, {
                                                                default: n(()=>[
                                                                        (a(), o(z(p.icon)))
                                                                    ]),
                                                                _: 2
                                                            }, 1024),
                                                            v("span", null, A(m.$t(p.label)), 1)
                                                        ]),
                                                    default: n(()=>[
                                                            (a(!0), S(C, null, W(p.children, (E)=>(a(), o(L, {
                                                                    key: E.key,
                                                                    index: E.key
                                                                }, {
                                                                    default: n(()=>[
                                                                            _(f, null, {
                                                                                default: n(()=>[
                                                                                        (a(), o(z(E.icon)))
                                                                                    ]),
                                                                                _: 2
                                                                            }, 1024),
                                                                            v("span", null, A(m.$t(E.label)), 1)
                                                                        ]),
                                                                    _: 2
                                                                }, 1032, [
                                                                    "index"
                                                                ]))), 128))
                                                        ]),
                                                    _: 2
                                                }, 1032, [
                                                    "index"
                                                ])) : (a(), o(L, {
                                                    key: 1,
                                                    index: p.key
                                                }, {
                                                    title: n(()=>[
                                                            v("span", null, A(m.$t(p.label)), 1)
                                                        ]),
                                                    default: n(()=>[
                                                            _(f, null, {
                                                                default: n(()=>[
                                                                        (a(), o(z(p.icon)))
                                                                    ]),
                                                                _: 2
                                                            }, 1024)
                                                        ]),
                                                    _: 2
                                                }, 1032, [
                                                    "index"
                                                ]))
                                            ], 64))), 128))
                                    ]),
                                _: 1
                            }, 8, [
                                "default-active",
                                "collapse"
                            ]),
                            v("div", {
                                class: $([
                                    "sidebar-footer",
                                    {
                                        "is-collapsed": t(c)
                                    }
                                ])
                            }, [
                                _(D, {
                                    circle: "",
                                    icon: t(c) ? t(lt) : t(ct),
                                    onClick: r,
                                    title: t(c) ? "展开" : "折叠"
                                }, null, 8, [
                                    "icon",
                                    "title"
                                ]),
                                _(D, {
                                    circle: "",
                                    onClick: g,
                                    title: m.$t("menu.logout")
                                }, {
                                    default: n(()=>[
                                            _(f, null, {
                                                default: n(()=>[
                                                        _(t(ut))
                                                    ]),
                                                _: 1
                                            })
                                        ]),
                                    _: 1
                                }, 8, [
                                    "title"
                                ])
                            ], 2)
                        ]),
                    _: 1
                }, 8, [
                    "width"
                ]);
            };
        }
    };
    Dt = {
        key: 0,
        class: "mobile-menu"
    };
    ht = {
        __name: "mobileMenu",
        props: {
            app_active_tab: {
                type: String,
                required: !0
            }
        },
        emits: [
            "select"
        ],
        setup (d, { emit: e }) {
            const l = e, b = x(), u = (c)=>{
                l("select", c);
            };
            return (c, r)=>{
                const g = U;
                return t(b).isMobile ? (a(), S("nav", Dt, [
                    v("div", {
                        class: $([
                            "nav-item",
                            {
                                active: d.app_active_tab === "vault" || d.app_active_tab === "add-vault"
                            }
                        ]),
                        onClick: r[0] || (r[0] = (m)=>u("vault"))
                    }, [
                        _(g, {
                            size: 20
                        }, {
                            default: n(()=>[
                                    _(t(q))
                                ]),
                            _: 1
                        }),
                        v("span", null, A(c.$t("menu.mobile.vault")), 1)
                    ], 2),
                    v("div", {
                        class: $([
                            "nav-item",
                            {
                                active: [
                                    "mobile-data",
                                    "migration-export",
                                    "migration-import",
                                    "backups"
                                ].includes(d.app_active_tab)
                            }
                        ]),
                        onClick: r[1] || (r[1] = (m)=>u("mobile-data"))
                    }, [
                        _(g, {
                            size: 20
                        }, {
                            default: n(()=>[
                                    _(t(dt))
                                ]),
                            _: 1
                        }),
                        v("span", null, A(c.$t("menu.mobile.data")), 1)
                    ], 2),
                    v("div", {
                        class: $([
                            "nav-item",
                            {
                                active: d.app_active_tab === "tools" || d.app_active_tab.startsWith("tool-")
                            }
                        ]),
                        onClick: r[2] || (r[2] = (m)=>u("tools"))
                    }, [
                        _(g, {
                            size: 20
                        }, {
                            default: n(()=>[
                                    _(G)
                                ]),
                            _: 1
                        }),
                        v("span", null, A(c.$t("menu.mobile.tools")), 1)
                    ], 2),
                    v("div", {
                        class: $([
                            "nav-item",
                            {
                                active: d.app_active_tab === "mobile-settings" || d.app_active_tab.startsWith("settings-")
                            }
                        ]),
                        onClick: r[3] || (r[3] = (m)=>u("mobile-settings"))
                    }, [
                        _(g, {
                            size: 20
                        }, {
                            default: n(()=>[
                                    _(t(N))
                                ]),
                            _: 1
                        }),
                        v("span", null, A(c.$t("menu.mobile.settings")), 1)
                    ], 2)
                ])) : M("", !0);
            };
        }
    };
    It = Q(ht, [
        [
            "__scopeId",
            "data-v-3dd01012"
        ]
    ]);
    Rt = {
        __name: "desktopBody",
        setup (d) {
            const e = x(), l = H(null), b = i(()=>s(()=>import("./vaultList-CpJtAJYe.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]))), u = i(()=>s(()=>import("./addVault-DOq8Oe_M.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([19,5,6,1,2,3,10,4,7,8,9,11,13,20]))), c = i(()=>s(()=>import("./dataExport-bPWh8k_t.js"), __vite__mapDeps([21,1,2,3,22,4,5,6,7,8,9,23,10,11,24,17,25,26,12,14,15,27]))), r = i(()=>s(()=>import("./dataImport-C7eEqhFY.js"), __vite__mapDeps([28,1,2,3,4,5,6,7,8,9,23,10,11,24,17,25,26,14,15,22,29]))), g = i(()=>s(()=>import("./dataBackup-DZQ_Nu0t.js"), __vite__mapDeps([30,1,2,3,4,5,6,7,8,9,23,10,11,24,17,25,26,14,15]))), m = i(()=>s(()=>import("./utilityTools-Dz8WS8Hz.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([31,5,6,1,2,3,32,4,7,8,9]))), V = i(()=>s(()=>import("./passkeySettings-C6Z_p9ei.js"), __vite__mapDeps([33,1,2,3,4,5,6,7,8,9,34,14,15]))), f = i(()=>s(()=>import("./securitySettings-DyvJWOLp.js"), __vite__mapDeps([35,1,2,3,4,5,6,7,8,9,36,14,15,17,11,37]))), L = i(()=>s(()=>import("./appearanceSetting-DPEaSOe7.js"), __vite__mapDeps([38,1,2,3,4,5,6,7,8,9,39]))), P = i(()=>s(()=>import("./languageSettings-Dh7yNLaO.js"), __vite__mapDeps([40,1,2,3,4,5,6,7,8,9]))), O = i(()=>s(()=>import("./themeSettings-Be1F9H6C.js"), __vite__mapDeps([41,1,2,3,4,5,6,7,8,9,39]))), D = i(()=>s(()=>import("./layoutSettings-DoE_IH1c.js"), __vite__mapDeps([42,1,2,3,4,5,6,7,8,9,43]))), w = i(()=>s(()=>import("./devicesSettings-CExqFFbq.js"), __vite__mapDeps([44,1,2,3,4,5,6,7,8,9]))), p = i(()=>s(()=>import("./trashSettings-BJvnvwxV.js"), __vite__mapDeps([45,1,2,3,4,5,6,7,8,9,16,10,11]))), E = i(()=>s(()=>import("./pinSettings-DQBZ766j.js"), __vite__mapDeps([46,1,2,3,4,5,6,7,8,9,36,14,15]))), B = i(()=>s(()=>import("./aboutView-D13l3X0a.js"), __vite__mapDeps([47,4,5,6,2,1,3,7,8,9])));
            let h = !1;
            const T = ()=>{
                e.setActiveTab("vault"), l.value ? R(()=>l.value?.fetchVault()) : h = !0;
            };
            return I(l, (y)=>{
                y && h && (h = !1, R(()=>y.fetchVault()));
            }), I(()=>e.homeTabReset, ()=>{
                e.app_active_tab === "vault" ? l.value?.fetchVault() : (e.setActiveTab("vault"), h = !0);
            }), I(()=>e.app_active_tab, ()=>{
                R(()=>{
                    window.scrollTo(0, 0);
                    const y = document.querySelector(".main-content");
                    y && (y.scrollTop = 0);
                });
            }), (y, k)=>{
                const F = j;
                return a(), o(F, {
                    class: "main-content"
                }, {
                    default: n(()=>[
                            _(J, {
                                name: t(e).pageTransition,
                                mode: "out-in"
                            }, {
                                default: n(()=>[
                                        (a(), S("div", {
                                            key: t(e).app_active_tab,
                                            class: "view-container"
                                        }, [
                                            t(e).app_active_tab === "vault" ? (a(), o(t(b), {
                                                key: 0,
                                                ref_key: "vaultListRef",
                                                ref: l,
                                                onSwitchTab: t(e).setActiveTab
                                            }, null, 8, [
                                                "onSwitchTab"
                                            ])) : t(e).app_active_tab === "add-vault" ? (a(), o(t(u), {
                                                key: 1,
                                                onSuccess: T
                                            })) : t(e).app_active_tab === "migration-export" ? (a(), o(t(c), {
                                                key: 2
                                            })) : t(e).app_active_tab === "migration-import" ? (a(), o(t(r), {
                                                key: 3,
                                                onSuccess: T
                                            })) : t(e).app_active_tab === "backups" ? (a(), o(t(g), {
                                                key: 4,
                                                onSuccess: T
                                            })) : t(e).app_active_tab === "tools" ? (a(), o(t(m), {
                                                key: 5
                                            })) : t(e).app_active_tab === "settings-passkey" ? (a(), o(t(V), {
                                                key: 6
                                            })) : t(e).app_active_tab === "settings-security" ? (a(), o(t(f), {
                                                key: 7
                                            })) : t(e).app_active_tab === "settings-appearance" ? (a(), o(t(L), {
                                                key: 8
                                            })) : t(e).app_active_tab === "settings-language" ? (a(), o(t(P), {
                                                key: 9
                                            })) : t(e).app_active_tab === "settings-theme" ? (a(), o(t(O), {
                                                key: 10
                                            })) : t(e).app_active_tab === "settings-layout" ? (a(), o(t(D), {
                                                key: 11
                                            })) : t(e).app_active_tab === "settings-devices" ? (a(), o(t(w), {
                                                key: 12
                                            })) : t(e).app_active_tab === "settings-trash" ? (a(), o(t(p), {
                                                key: 13
                                            })) : t(e).app_active_tab === "settings-pin" ? (a(), o(t(E), {
                                                key: 14
                                            })) : t(e).app_active_tab === "settings-about" ? (a(), o(t(B), {
                                                key: 15
                                            })) : M("", !0)
                                        ]))
                                    ]),
                                _: 1
                            }, 8, [
                                "name"
                            ])
                        ]),
                    _: 1
                });
            };
        }
    };
    Pt = {
        __name: "mobileBody",
        setup (d) {
            const e = x(), l = H(null), b = i(()=>s(()=>import("./vaultList-CpJtAJYe.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]))), u = i(()=>s(()=>import("./mobileHub-5-OqR6lk.js"), __vite__mapDeps([48,1,2,3,4,5,6,7,8,9,32]))), c = i(()=>s(()=>import("./aboutView-D13l3X0a.js"), __vite__mapDeps([47,4,5,6,2,1,3,7,8,9]))), r = i(()=>s(()=>import("./addVault-DOq8Oe_M.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([19,5,6,1,2,3,10,4,7,8,9,11,13,20]))), g = i(()=>s(()=>import("./dataExport-bPWh8k_t.js"), __vite__mapDeps([21,1,2,3,22,4,5,6,7,8,9,23,10,11,24,17,25,26,12,14,15,27]))), m = i(()=>s(()=>import("./dataImport-C7eEqhFY.js"), __vite__mapDeps([28,1,2,3,4,5,6,7,8,9,23,10,11,24,17,25,26,14,15,22,29]))), V = i(()=>s(()=>import("./dataBackup-DZQ_Nu0t.js"), __vite__mapDeps([30,1,2,3,4,5,6,7,8,9,23,10,11,24,17,25,26,14,15]))), f = i(()=>s(()=>import("./utilityTools-Dz8WS8Hz.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }), __vite__mapDeps([31,5,6,1,2,3,32,4,7,8,9]))), L = i(()=>s(()=>import("./passkeySettings-C6Z_p9ei.js"), __vite__mapDeps([33,1,2,3,4,5,6,7,8,9,34,14,15]))), P = i(()=>s(()=>import("./appearanceSetting-DPEaSOe7.js"), __vite__mapDeps([38,1,2,3,4,5,6,7,8,9,39]))), O = i(()=>s(()=>import("./securitySettings-DyvJWOLp.js"), __vite__mapDeps([35,1,2,3,4,5,6,7,8,9,36,14,15,17,11,37]))), D = i(()=>s(()=>import("./languageSettings-Dh7yNLaO.js"), __vite__mapDeps([40,1,2,3,4,5,6,7,8,9]))), w = i(()=>s(()=>import("./themeSettings-Be1F9H6C.js"), __vite__mapDeps([41,1,2,3,4,5,6,7,8,9,39]))), p = i(()=>s(()=>import("./layoutSettings-DoE_IH1c.js"), __vite__mapDeps([42,1,2,3,4,5,6,7,8,9,43]))), E = i(()=>s(()=>import("./devicesSettings-CExqFFbq.js"), __vite__mapDeps([44,1,2,3,4,5,6,7,8,9]))), B = i(()=>s(()=>import("./trashSettings-BJvnvwxV.js"), __vite__mapDeps([45,1,2,3,4,5,6,7,8,9,16,10,11]))), h = i(()=>s(()=>import("./pinSettings-DQBZ766j.js"), __vite__mapDeps([46,1,2,3,4,5,6,7,8,9,36,14,15])));
            let T = !1;
            const y = ()=>{
                e.setActiveTab("vault"), l.value ? R(()=>l.value?.fetchVault()) : T = !0;
            };
            return I(l, (k)=>{
                k && T && (T = !1, R(()=>k.fetchVault()));
            }), I(()=>e.homeTabReset, ()=>{
                e.setActiveTab("vault"), T = !0;
            }), I(()=>e.app_active_tab, ()=>{
                R(()=>{
                    const k = document.querySelector("#app");
                    k && (k.scrollTop = 0), setTimeout(()=>{
                        k && k.scrollTop !== 0 && (k.scrollTop = 0);
                    }, 10);
                });
            }), (k, F)=>{
                const K = j;
                return a(), o(K, {
                    class: "main-content has-bottom-nav"
                }, {
                    default: n(()=>[
                            _(J, {
                                name: t(e).pageTransition,
                                mode: "out-in"
                            }, {
                                default: n(()=>[
                                        (a(), S("div", {
                                            key: t(e).app_active_tab,
                                            class: "view-container"
                                        }, [
                                            t(e).app_active_tab === "vault" ? (a(), o(t(b), {
                                                key: 0,
                                                ref_key: "vaultListRef",
                                                ref: l,
                                                onSwitchTab: t(e).setActiveTab
                                            }, null, 8, [
                                                "onSwitchTab"
                                            ])) : t(e).app_active_tab === "mobile-data" ? (a(), o(t(u), {
                                                key: 1,
                                                mode: "data",
                                                onSelect: t(e).setActiveTab
                                            }, null, 8, [
                                                "onSelect"
                                            ])) : t(e).app_active_tab === "mobile-settings" ? (a(), o(t(u), {
                                                key: 2,
                                                mode: "settings",
                                                onSelect: t(e).setActiveTab
                                            }, null, 8, [
                                                "onSelect"
                                            ])) : t(e).app_active_tab === "settings-about" ? (a(), o(t(c), {
                                                key: 3
                                            })) : t(e).app_active_tab === "add-vault" ? (a(), o(t(r), {
                                                key: 4,
                                                onSuccess: y
                                            })) : t(e).app_active_tab === "migration-export" ? (a(), o(t(g), {
                                                key: 5
                                            })) : t(e).app_active_tab === "migration-import" ? (a(), o(t(m), {
                                                key: 6,
                                                onSuccess: y
                                            })) : t(e).app_active_tab === "backups" ? (a(), o(t(V), {
                                                key: 7,
                                                onSuccess: y
                                            })) : t(e).app_active_tab === "tools" ? (a(), o(t(f), {
                                                key: 8
                                            })) : t(e).app_active_tab === "settings-passkey" ? (a(), o(t(L), {
                                                key: 9
                                            })) : t(e).app_active_tab === "settings-appearance" ? (a(), o(t(P), {
                                                key: 10
                                            })) : t(e).app_active_tab === "settings-security" ? (a(), o(t(O), {
                                                key: 11
                                            })) : t(e).app_active_tab === "settings-language" ? (a(), o(t(D), {
                                                key: 12
                                            })) : t(e).app_active_tab === "settings-theme" ? (a(), o(t(w), {
                                                key: 13
                                            })) : t(e).app_active_tab === "settings-layout" ? (a(), o(t(p), {
                                                key: 14
                                            })) : t(e).app_active_tab === "settings-devices" ? (a(), o(t(E), {
                                                key: 15
                                            })) : t(e).app_active_tab === "settings-trash" ? (a(), o(t(B), {
                                                key: 16
                                            })) : t(e).app_active_tab === "settings-pin" ? (a(), o(t(h), {
                                                key: 17
                                            })) : M("", !0)
                                        ]))
                                    ]),
                                _: 1
                            }, 8, [
                                "name"
                            ])
                        ]),
                    _: 1
                });
            };
        }
    };
    Ot = {
        __name: "home",
        setup (d) {
            const e = x();
            return gt(()=>{
                const l = [
                    "vault",
                    "add-vault",
                    "tools",
                    "backups",
                    "migration-export",
                    "migration-import"
                ];
                e.isMobile && l.push("mobile-data", "mobile-settings");
                const b = e.app_active_tab.startsWith("settings-");
                !l.includes(e.app_active_tab) && !b && e.setActiveTab("vault");
            }), (l, b)=>{
                const u = mt;
                return a(), o(u, {
                    class: "home-container"
                }, {
                    default: n(()=>[
                            _(u, {
                                class: "main-body"
                            }, {
                                default: n(()=>[
                                        t(e).isMobile ? (a(), o(Pt, {
                                            key: 1
                                        })) : (a(), S(C, {
                                            key: 0
                                        }, [
                                            _(Lt, {
                                                app_active_tab: t(e).app_active_tab,
                                                onSelect: t(e).setActiveTab
                                            }, null, 8, [
                                                "app_active_tab",
                                                "onSelect"
                                            ]),
                                            _(Rt)
                                        ], 64))
                                    ]),
                                _: 1
                            }),
                            t(e).isMobile ? (a(), o(It, {
                                key: 0,
                                app_active_tab: t(e).app_active_tab,
                                onSelect: t(e).setActiveTab
                            }, null, 8, [
                                "app_active_tab",
                                "onSelect"
                            ])) : M("", !0)
                        ]),
                    _: 1
                });
            };
        }
    };
    Bt = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ot
    }, Symbol.toStringTag, {
        value: "Module"
    }));
});
export { At as I, Bt as h, __tla };
