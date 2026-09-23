const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/qrScanner-KtD8_q0f.js","assets/element-plus-CTp1djr_.js","assets/vue-core-DHcoxuim.js","assets/element-plus-CqJ-3YyC.css","assets/qr-utils-Cc6U-Akc.js","assets/index-BJE2ExGB.js","assets/pdf-utils-CDJbbqXy.js","assets/compression-utils-BzBbrBKd.js","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-CY07rioj.js","assets/index-CeTN7Y2W.css"])))=>i.map(i=>d[i]);
import { _ as Y, __tla as __tla_0 } from "./pdf-utils-CDJbbqXy.js";
import { aJ as x, u as ee, a1 as ae, $ as le, J as te, K as oe, t as se, w as re, e as ue, aL as ie, O as ne, G as de, N as ce, j as ve, x as pe, s as me, a2 as _e, aH as fe, al as be, C as z, D as ge } from "./element-plus-CTp1djr_.js";
import { p as ye, v as C, u as M, __tla as __tla_1 } from "./vaultService-CP_oNFz2.js";
import { _ as he, Q as Ve, M as ze, N as $e, v as we, i as ke, __tla as __tla_2 } from "./index-BJE2ExGB.js";
import { av as Se, a2 as Ee, aa as $, aD as Ae, a6 as d, l as f, i, r as t, aF as s, at as b, al as h, k as E, j as g, F, ac as Be, ag as Ce, q as Te, g as Ue, A as c, t as qe } from "./vue-core-DHcoxuim.js";
import { D as De } from "./decryptionErrorState-Tk3B3XB5.js";
import "./compression-utils-BzBbrBKd.js";
import { __tla as __tla_3 } from "./resourceRegistry-B1hhQL_K.js";
import "./simplewebauthn-3qpiAaRi.js";
import "./tanstack-query-CY07rioj.js";
let fa;
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
    let He, Re, Me, Fe, Ne, Oe, Ie, Le, Pe, je, Ge, Je, Qe, Ke, Ze, We, Xe, Ye, xe, ea, aa, la, ta, oa;
    He = {
        class: "add-vault-wrapper"
    };
    Re = {
        class: "tab-card-wrapper"
    };
    Me = {
        class: "page-header-container"
    };
    Fe = {
        class: "page-header-hero"
    };
    Ne = {
        class: "hero-icon-wrapper"
    };
    Oe = {
        key: 0
    };
    Ie = {
        class: "page-desc-text"
    };
    Le = {
        key: 1,
        class: "max-w-600 m-auto"
    };
    Pe = {
        class: "batch-import-container-top mb-10"
    };
    je = {
        class: "card-left"
    };
    Ge = {
        class: "icon-ring"
    };
    Je = {
        class: "text-meta"
    };
    Qe = {
        class: "entry-title"
    };
    Ke = {
        class: "entry-desc"
    };
    Ze = {
        class: "flex-center mb-20"
    };
    We = {
        class: "flex-center gap-5"
    };
    Xe = {
        key: 0
    };
    Ye = {
        key: 1,
        class: "vault-manual-form-container"
    };
    xe = {
        class: "m-auto w-full"
    };
    ea = {
        key: 1,
        class: "mb-20 bg-secondary-subtle border-radius-md blizzard-restore-section"
    };
    aa = {
        class: "blizzard-restore-header"
    };
    la = {
        class: "mt-20 p-10 rounded-10 blizzard-hint-box"
    };
    ta = [
        "innerHTML"
    ];
    oa = {
        __name: "addVault",
        emits: [
            "success"
        ],
        setup (sa, { emit: N }) {
            const O = qe(()=>Y(()=>import("./qrScanner-KtD8_q0f.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))), T = N, w = Ve(), k = ze(), U = $e(), q = Se();
            Ee(()=>{
                if (k.initialAddVaultParams) {
                    const e = k.initialAddVaultParams;
                    e.mode === "manual" && (m.value = "manual"), e.type === "blizzard" && (a.value.type = "blizzard", a.value.service = "Battle.net"), k.setAddVaultParams(null);
                }
                q.query.mode === "manual" && (m.value = "manual"), q.query.type === "blizzard" && (a.value.type = "blizzard", a.value.service = "Battle.net");
            });
            const { t: r } = we.global, m = $("camera"), I = Ue(()=>[
                    {
                        label: r("vault.add_mode_camera"),
                        value: "camera",
                        icon: _e
                    },
                    {
                        label: r("vault.add_mode_image"),
                        value: "image",
                        icon: fe
                    },
                    {
                        label: r("vault.add_account"),
                        value: "manual",
                        icon: be
                    }
                ]), D = ()=>({
                    type: "totp",
                    service: "",
                    account: "",
                    secret: "",
                    category: "",
                    digits: 6,
                    period: 30,
                    counter: 0,
                    algorithm: "SHA1"
                }), V = $(!1), A = $(null), a = $(D()), H = $(!1), n = $({
                serial: "",
                restoreCode: "",
                ssoToken: ""
            }), L = async ()=>{
                if (!n.value.serial || !n.value.restoreCode || !n.value.ssoToken) {
                    z.warning(r("vault.blizzard_fields_required"));
                    return;
                }
                H.value = !0;
                try {
                    const e = await C.restoreBlizzardNet(n.value.serial, n.value.restoreCode, n.value.ssoToken);
                    e.success && e.secret ? (a.value.secret = e.secret, a.value.service = "Battle.net", a.value.digits = 8, n.value = {
                        serial: "",
                        restoreCode: "",
                        ssoToken: ""
                    }) : z.error(e.error || r("vault.restore_failed"));
                } finally{
                    H.value = !1;
                }
            }, P = (e, l, u)=>{
                if (!l) return u(new Error(r("vault.require_secret")));
                const _ = l.replace(/\s/g, "");
                if (_.length < 16) return u(new Error(r("vault.secret_min_length")));
                if (!/^[A-Z2-7]+$/i.test(_)) return u(new Error(r("vault.secret_invalid_char")));
                u();
            }, j = {
                service: [
                    {
                        required: !0,
                        message: r("vault.require_service"),
                        trigger: "blur"
                    }
                ],
                account: [
                    {
                        required: !0,
                        message: r("vault.require_account"),
                        trigger: "blur"
                    }
                ],
                secret: [
                    {
                        required: !0,
                        validator: (e, l, u)=>a.value.type === "blizzard" ? u() : P(e, l, u),
                        trigger: "blur"
                    }
                ]
            };
            Ae(()=>a.value.type, (e)=>{
                const l = e === "steam", u = e === "blizzard", _ = e === "hotp";
                a.value.algorithm = "SHA1", l ? (a.value.digits = 5, a.value.period = 30) : u ? (a.value.digits = 8, a.value.period = 30) : (a.value.digits = 6, a.value.period = 30), _ && (a.value.counter = 0), l && !a.value.service && (a.value.service = "Steam"), u && !a.value.service && (a.value.service = "Battle.net");
            });
            const G = ()=>{
                const e = new Uint8Array(20);
                window.crypto.getRandomValues(e), a.value.secret = ke(e);
            }, J = async ()=>{
                if (A.value) {
                    if (a.value.type === "blizzard" && !a.value.secret) {
                        if (!n.value.serial || !n.value.restoreCode || !n.value.ssoToken) {
                            z.warning(r("vault.blizzard_fields_required"));
                            return;
                        }
                        V.value = !0;
                        try {
                            if (await L(), !a.value.secret) {
                                V.value = !1;
                                return;
                            }
                        } catch  {
                            V.value = !1;
                            return;
                        }
                    }
                    await A.value.validate(async (e)=>{
                        if (e) {
                            V.value = !0;
                            try {
                                if ((await C.createAccount(a.value)).success) {
                                    U.isOffline || await w.updateMetadata({
                                        delta: 1
                                    }), z.success(r("vault.add_success")), a.value = D(), w.markDirty();
                                    const { fetchTrash: u } = M();
                                    u(), T("success");
                                }
                            } catch  {} finally{
                                V.value = !1;
                            }
                        }
                    });
                }
            }, Q = async (e)=>{
                try {
                    const l = ye(e);
                    if (!l) {
                        z.error(r("vault.invalid_qr_format"));
                        return;
                    }
                    if (await ge.confirm(c("div", {
                        class: "confirmation-box"
                    }, [
                        c("div", {
                            class: "confirmation-row"
                        }, [
                            c("span", {
                                class: "confirmation-label"
                            }, r("vault.service_label")),
                            c("span", {
                                class: "confirmation-value"
                            }, l.service || r("vault.unknown_service"))
                        ]),
                        c("div", {
                            class: "confirmation-row"
                        }, [
                            c("span", {
                                class: "confirmation-label"
                            }, r("vault.account_label")),
                            c("span", {
                                class: "confirmation-value mono"
                            }, l.account || r("vault.unnamed_account"))
                        ]),
                        c("div", {
                            class: "confirmation-row"
                        }, [
                            c("span", {
                                class: "confirmation-label"
                            }, r("vault.param_label")),
                            c("div", {
                                class: "confirmation-tags"
                            }, [
                                c("span", {
                                    class: "confirmation-tag confirmation-tag-primary"
                                }, l.type === "steam" ? r("vault.otp_type_steam") : l.type === "hotp" ? r("vault.otp_type_hotp") : r("vault.otp_type_totp")),
                                c("span", {
                                    class: "confirmation-tag confirmation-tag-info"
                                }, l.algorithm || "SHA1"),
                                c("span", {
                                    class: "confirmation-tag confirmation-tag-success"
                                }, `${l.digits || 6}${r("vault.digits_suffix")}`),
                                l.type === "hotp" ? c("span", {
                                    class: "confirmation-tag confirmation-tag-warning"
                                }, `${r("vault.counter_label")}: ${l.counter || 0}`) : c("span", {
                                    class: "confirmation-tag confirmation-tag-warning"
                                }, `${l.period || 30}${r("vault.period_suffix")}`)
                            ])
                        ])
                    ]), r("vault.confirm_add_title"), {
                        confirmButtonText: r("common.confirm"),
                        cancelButtonText: r("common.cancel"),
                        type: "success",
                        center: !0
                    }), (await C.addFromUri(e, "Scan")).success) {
                        U.isOffline || await w.updateMetadata({
                            delta: 1
                        }), z.success(r("vault.add_success")), w.markDirty();
                        const { fetchTrash: _ } = M();
                        _(), T("success");
                    }
                } catch (l) {
                    l !== "cancel" && console.error(l);
                }
            };
            return (e, l)=>{
                const u = ee, _ = te, K = oe, y = re, p = se, R = ue, v = de, S = ne, B = ve, Z = pe, W = ce, X = me;
                return d(), f("div", He, [
                    i("div", Re, [
                        i("div", Me, [
                            i("div", Fe, [
                                i("div", Ne, [
                                    t(u, {
                                        size: 28
                                    }, {
                                        default: s(()=>[
                                                t(b(x))
                                            ]),
                                        _: 1
                                    })
                                ]),
                                b(k).isMobile ? E("", !0) : (d(), f("h2", Oe, h(e.$t("menu.add")), 1))
                            ]),
                            i("p", Ie, h(e.$t("vault.add_account_tip")), 1)
                        ]),
                        b(w).hasDecryptionError ? (d(), g(De, {
                            key: 0,
                            class: "mt-40"
                        })) : (d(), f("div", Le, [
                            i("div", Pe, [
                                i("div", {
                                    class: "import-card-hero",
                                    onClick: l[0] || (l[0] = (o)=>b(k).setActiveTab("migration-import"))
                                }, [
                                    i("div", je, [
                                        i("div", Ge, [
                                            t(u, null, {
                                                default: s(()=>[
                                                        t(b(ae))
                                                    ]),
                                                _: 1
                                            })
                                        ]),
                                        i("div", Je, [
                                            i("div", Qe, h(e.$t("vault.batch_import_entry_title")), 1),
                                            i("div", Ke, h(e.$t("vault.batch_import_entry_desc")), 1)
                                        ])
                                    ]),
                                    t(u, {
                                        class: "card-arrow"
                                    }, {
                                        default: s(()=>[
                                                t(b(le))
                                            ]),
                                        _: 1
                                    })
                                ])
                            ]),
                            i("div", Ze, [
                                t(K, {
                                    modelValue: m.value,
                                    "onUpdate:modelValue": l[1] || (l[1] = (o)=>m.value = o),
                                    class: "mode-switcher-radio"
                                }, {
                                    default: s(()=>[
                                            (d(!0), f(F, null, Be(I.value, (o)=>(d(), g(_, {
                                                    key: o.value,
                                                    label: o.value
                                                }, {
                                                    default: s(()=>[
                                                            i("div", We, [
                                                                t(u, null, {
                                                                    default: s(()=>[
                                                                            (d(), g(Ce(o.icon)))
                                                                        ]),
                                                                    _: 2
                                                                }, 1024),
                                                                i("span", null, h(o.label), 1)
                                                            ])
                                                        ]),
                                                    _: 2
                                                }, 1032, [
                                                    "label"
                                                ]))), 128))
                                        ]),
                                    _: 1
                                }, 8, [
                                    "modelValue"
                                ])
                            ]),
                            m.value === "camera" || m.value === "image" ? (d(), f("div", Xe, [
                                t(b(O), {
                                    "force-mode": m.value,
                                    onScanSuccess: Q
                                }, null, 8, [
                                    "force-mode"
                                ])
                            ])) : m.value === "manual" ? (d(), f("div", Ye, [
                                i("div", xe, [
                                    t(X, {
                                        model: a.value,
                                        "label-position": "top",
                                        rules: j,
                                        ref_key: "addFormRef",
                                        ref: A,
                                        class: "vault-manual-form-wrapper"
                                    }, {
                                        default: s(()=>[
                                                t(p, {
                                                    label: e.$t("vault.service_name"),
                                                    prop: "service"
                                                }, {
                                                    default: s(()=>[
                                                            t(y, {
                                                                modelValue: a.value.service,
                                                                "onUpdate:modelValue": l[2] || (l[2] = (o)=>a.value.service = o),
                                                                placeholder: e.$t("vault.input_service_placeholder")
                                                            }, null, 8, [
                                                                "modelValue",
                                                                "placeholder"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "label"
                                                ]),
                                                t(p, {
                                                    label: e.$t("vault.account_identifier"),
                                                    prop: "account"
                                                }, {
                                                    default: s(()=>[
                                                            t(y, {
                                                                modelValue: a.value.account,
                                                                "onUpdate:modelValue": l[3] || (l[3] = (o)=>a.value.account = o),
                                                                placeholder: e.$t("vault.input_account_placeholder")
                                                            }, null, 8, [
                                                                "modelValue",
                                                                "placeholder"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "label"
                                                ]),
                                                a.value.type !== "blizzard" ? (d(), g(p, {
                                                    key: 0,
                                                    label: e.$t("vault.input_secret_label"),
                                                    prop: "secret"
                                                }, {
                                                    default: s(()=>[
                                                            t(y, {
                                                                modelValue: a.value.secret,
                                                                "onUpdate:modelValue": l[4] || (l[4] = (o)=>a.value.secret = o),
                                                                placeholder: e.$t("vault.input_secret_placeholder"),
                                                                clearable: ""
                                                            }, {
                                                                append: s(()=>[
                                                                        t(R, {
                                                                            onClick: G,
                                                                            title: e.$t("vault.generate_random_secret")
                                                                        }, {
                                                                            default: s(()=>[
                                                                                    t(u, null, {
                                                                                        default: s(()=>[
                                                                                                t(b(ie))
                                                                                            ]),
                                                                                        _: 1
                                                                                    })
                                                                                ]),
                                                                            _: 1
                                                                        }, 8, [
                                                                            "title"
                                                                        ])
                                                                    ]),
                                                                _: 1
                                                            }, 8, [
                                                                "modelValue",
                                                                "placeholder"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "label"
                                                ])) : E("", !0),
                                                t(p, {
                                                    label: e.$t("vault.otp_type_label"),
                                                    prop: "type"
                                                }, {
                                                    default: s(()=>[
                                                            t(S, {
                                                                modelValue: a.value.type,
                                                                "onUpdate:modelValue": l[5] || (l[5] = (o)=>a.value.type = o),
                                                                class: "w-full"
                                                            }, {
                                                                default: s(()=>[
                                                                        t(v, {
                                                                            label: e.$t("vault.otp_type_totp"),
                                                                            value: "totp"
                                                                        }, null, 8, [
                                                                            "label"
                                                                        ]),
                                                                        t(v, {
                                                                            label: e.$t("vault.otp_type_hotp"),
                                                                            value: "hotp"
                                                                        }, null, 8, [
                                                                            "label"
                                                                        ]),
                                                                        t(v, {
                                                                            label: e.$t("vault.otp_type_steam"),
                                                                            value: "steam"
                                                                        }, null, 8, [
                                                                            "label"
                                                                        ]),
                                                                        t(v, {
                                                                            label: e.$t("vault.otp_type_blizzard"),
                                                                            value: "blizzard"
                                                                        }, null, 8, [
                                                                            "label"
                                                                        ])
                                                                    ]),
                                                                _: 1
                                                            }, 8, [
                                                                "modelValue"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "label"
                                                ]),
                                                t(W, {
                                                    gutter: 20
                                                }, {
                                                    default: s(()=>[
                                                            t(B, {
                                                                span: 8
                                                            }, {
                                                                default: s(()=>[
                                                                        t(p, {
                                                                            label: e.$t("vault.algorithm_label"),
                                                                            prop: "algorithm"
                                                                        }, {
                                                                            default: s(()=>[
                                                                                    t(S, {
                                                                                        modelValue: a.value.algorithm,
                                                                                        "onUpdate:modelValue": l[6] || (l[6] = (o)=>a.value.algorithm = o),
                                                                                        class: "w-full",
                                                                                        disabled: a.value.type === "steam" || a.value.type === "blizzard"
                                                                                    }, {
                                                                                        default: s(()=>[
                                                                                                t(v, {
                                                                                                    label: e.$t("vault.algo_sha1"),
                                                                                                    value: "SHA1"
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ]),
                                                                                                t(v, {
                                                                                                    label: "SHA256",
                                                                                                    value: "SHA256"
                                                                                                }),
                                                                                                t(v, {
                                                                                                    label: "SHA512",
                                                                                                    value: "SHA512"
                                                                                                })
                                                                                            ]),
                                                                                        _: 1
                                                                                    }, 8, [
                                                                                        "modelValue",
                                                                                        "disabled"
                                                                                    ])
                                                                                ]),
                                                                            _: 1
                                                                        }, 8, [
                                                                            "label"
                                                                        ])
                                                                    ]),
                                                                _: 1
                                                            }),
                                                            t(B, {
                                                                span: 8
                                                            }, {
                                                                default: s(()=>[
                                                                        t(p, {
                                                                            label: e.$t("vault.digits_label"),
                                                                            prop: "digits"
                                                                        }, {
                                                                            default: s(()=>[
                                                                                    t(S, {
                                                                                        modelValue: a.value.digits,
                                                                                        "onUpdate:modelValue": l[7] || (l[7] = (o)=>a.value.digits = o),
                                                                                        class: "w-full",
                                                                                        disabled: a.value.type === "steam" || a.value.type === "blizzard"
                                                                                    }, {
                                                                                        default: s(()=>[
                                                                                                a.value.type === "steam" ? (d(), g(v, {
                                                                                                    key: 0,
                                                                                                    label: e.$t("vault.digits_5"),
                                                                                                    value: 5
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ])) : a.value.type === "blizzard" ? (d(), g(v, {
                                                                                                    key: 1,
                                                                                                    label: e.$t("vault.digits_8"),
                                                                                                    value: 8
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ])) : (d(), f(F, {
                                                                                                    key: 2
                                                                                                }, [
                                                                                                    t(v, {
                                                                                                        label: e.$t("vault.digits_6"),
                                                                                                        value: 6
                                                                                                    }, null, 8, [
                                                                                                        "label"
                                                                                                    ]),
                                                                                                    t(v, {
                                                                                                        label: e.$t("vault.digits_8"),
                                                                                                        value: 8
                                                                                                    }, null, 8, [
                                                                                                        "label"
                                                                                                    ])
                                                                                                ], 64))
                                                                                            ]),
                                                                                        _: 1
                                                                                    }, 8, [
                                                                                        "modelValue",
                                                                                        "disabled"
                                                                                    ])
                                                                                ]),
                                                                            _: 1
                                                                        }, 8, [
                                                                            "label"
                                                                        ])
                                                                    ]),
                                                                _: 1
                                                            }),
                                                            t(B, {
                                                                span: 8
                                                            }, {
                                                                default: s(()=>[
                                                                        t(p, {
                                                                            label: a.value.type === "hotp" ? e.$t("vault.counter_label") : e.$t("vault.period_label"),
                                                                            prop: "period"
                                                                        }, {
                                                                            default: s(()=>[
                                                                                    a.value.type === "hotp" ? (d(), g(Z, {
                                                                                        key: 0,
                                                                                        modelValue: a.value.counter,
                                                                                        "onUpdate:modelValue": l[8] || (l[8] = (o)=>a.value.counter = o),
                                                                                        min: 0,
                                                                                        class: "w-full"
                                                                                    }, null, 8, [
                                                                                        "modelValue"
                                                                                    ])) : (d(), g(S, {
                                                                                        key: 1,
                                                                                        modelValue: a.value.period,
                                                                                        "onUpdate:modelValue": l[9] || (l[9] = (o)=>a.value.period = o),
                                                                                        class: "w-full",
                                                                                        disabled: a.value.type === "steam"
                                                                                    }, {
                                                                                        default: s(()=>[
                                                                                                t(v, {
                                                                                                    label: e.$t("vault.period_30s"),
                                                                                                    value: 30
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ]),
                                                                                                t(v, {
                                                                                                    label: e.$t("vault.period_60s"),
                                                                                                    value: 60
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ])
                                                                                            ]),
                                                                                        _: 1
                                                                                    }, 8, [
                                                                                        "modelValue",
                                                                                        "disabled"
                                                                                    ]))
                                                                                ]),
                                                                            _: 1
                                                                        }, 8, [
                                                                            "label"
                                                                        ])
                                                                    ]),
                                                                _: 1
                                                            })
                                                        ]),
                                                    _: 1
                                                }),
                                                a.value.type === "blizzard" && !a.value.secret ? (d(), f("div", ea, [
                                                    i("div", aa, h(e.$t("vault.blizzard_net_restore_desc")), 1),
                                                    t(p, {
                                                        label: e.$t("vault.serial_number"),
                                                        required: ""
                                                    }, {
                                                        default: s(()=>[
                                                                t(y, {
                                                                    modelValue: n.value.serial,
                                                                    "onUpdate:modelValue": l[10] || (l[10] = (o)=>n.value.serial = o),
                                                                    placeholder: e.$t("vault.serial_placeholder")
                                                                }, null, 8, [
                                                                    "modelValue",
                                                                    "placeholder"
                                                                ])
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "label"
                                                    ]),
                                                    t(p, {
                                                        label: e.$t("vault.restore_code"),
                                                        required: ""
                                                    }, {
                                                        default: s(()=>[
                                                                t(y, {
                                                                    modelValue: n.value.restoreCode,
                                                                    "onUpdate:modelValue": l[11] || (l[11] = (o)=>n.value.restoreCode = o),
                                                                    placeholder: e.$t("vault.restore_code_placeholder"),
                                                                    maxlength: "10",
                                                                    "show-word-limit": ""
                                                                }, null, 8, [
                                                                    "modelValue",
                                                                    "placeholder"
                                                                ])
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "label"
                                                    ]),
                                                    t(p, {
                                                        label: e.$t("vault.sso_token_label"),
                                                        required: ""
                                                    }, {
                                                        default: s(()=>[
                                                                t(y, {
                                                                    modelValue: n.value.ssoToken,
                                                                    "onUpdate:modelValue": l[12] || (l[12] = (o)=>n.value.ssoToken = o),
                                                                    placeholder: e.$t("vault.sso_token_placeholder"),
                                                                    clearable: ""
                                                                }, null, 8, [
                                                                    "modelValue",
                                                                    "placeholder"
                                                                ]),
                                                                i("div", la, [
                                                                    i("span", {
                                                                        innerHTML: `${e.$t("vault.get_method")}：${e.$t("vault.sso_token_hint")}`
                                                                    }, null, 8, ta)
                                                                ])
                                                            ]),
                                                        _: 1
                                                    }, 8, [
                                                        "label"
                                                    ])
                                                ])) : E("", !0),
                                                t(p, {
                                                    label: e.$t("vault.category_optional"),
                                                    prop: "category"
                                                }, {
                                                    default: s(()=>[
                                                            t(y, {
                                                                modelValue: a.value.category,
                                                                "onUpdate:modelValue": l[13] || (l[13] = (o)=>a.value.category = o),
                                                                placeholder: e.$t("vault.input_category_placeholder")
                                                            }, null, 8, [
                                                                "modelValue",
                                                                "placeholder"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "label"
                                                ]),
                                                t(p, {
                                                    class: "mt-30"
                                                }, {
                                                    default: s(()=>[
                                                            t(R, {
                                                                type: "primary",
                                                                loading: V.value,
                                                                onClick: J,
                                                                class: "vault-manual-submit-btn",
                                                                size: "large"
                                                            }, {
                                                                default: s(()=>[
                                                                        Te(h(e.$t("vault.confirm_add_btn")), 1)
                                                                    ]),
                                                                _: 1
                                                            }, 8, [
                                                                "loading"
                                                            ])
                                                        ]),
                                                    _: 1
                                                })
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "model"
                                    ])
                                ])
                            ])) : E("", !0)
                        ]))
                    ])
                ]);
            };
        }
    };
    fa = he(oa, [
        [
            "__scopeId",
            "data-v-9f24bed9"
        ]
    ]);
});
export { fa as default, __tla };
