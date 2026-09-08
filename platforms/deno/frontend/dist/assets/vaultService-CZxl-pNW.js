const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DpkVzPs1.js","assets/pdf-utils-CDJbbqXy.js","assets/compression-utils-BzBbrBKd.js","assets/vue-core-DHcoxuim.js","assets/element-plus-CTp1djr_.js","assets/element-plus-CqJ-3YyC.css","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-CY07rioj.js","assets/index-CeTN7Y2W.css"])))=>i.map(i=>d[i]);
import { _ as z, __tla as __tla_0 } from "./pdf-utils-CDJbbqXy.js";
import { f as F, r as Q, E as x, n as H, x as D, B as g, H as G, N as _, M as K, C as q, s as W, R as b, Q as N, __tla as __tla_1 } from "./index-DpkVzPs1.js";
import { l as B, __tla as __tla_2 } from "./resourceRegistry-B1hhQL_K.js";
import { aD as X, aa as R } from "./vue-core-DHcoxuim.js";
let pt, ht, dt, ft, et, nt, at, ot, st;
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
    })()
]).then(async ()=>{
    async function j(t, n = 30, e = 6, r = "SHA-1", i = 0) {
        if (!t) return "------";
        try {
            const o = F(t);
            if (o.length === 0) return "------";
            const s = Q() / 1e3, a = Math.floor(s / n) + i, u = new ArrayBuffer(8);
            new DataView(u).setBigUint64(0, BigInt(a), !1);
            const f = {
                name: "HMAC",
                hash: r.includes("-") ? r : r.replace("SHA", "SHA-")
            };
            let d;
            if (x("using hash-wasm fallback for TOTP generation.")) {
                const A = await B("hash-wasm"), { createHMAC: E, createSHA1: S, createSHA256: v, createSHA512: y } = A?.default || A;
                let T;
                f.hash === "SHA-256" ? T = v() : f.hash === "SHA-512" ? T = y() : T = S();
                const O = await E(T, o);
                O.init(), O.update(new Uint8Array(u));
                const M = O.digest("hex"), J = new Uint8Array(M.length / 2);
                for(let L = 0; L < M.length; L += 2)J[L / 2] = parseInt(M.substring(L, L + 2), 16);
                d = J.buffer;
            } else {
                const A = await H.subtle.importKey("raw", o, f, !1, [
                    "sign"
                ]);
                d = await H.subtle.sign("HMAC", A, u);
            }
            const c = new DataView(d), p = c.getUint8(d.byteLength - 1) & 15;
            return (((c.getUint8(p) & 127) << 24 | (c.getUint8(p + 1) & 255) << 16 | (c.getUint8(p + 2) & 255) << 8 | c.getUint8(p + 3) & 255) % Math.pow(10, e)).toString().padStart(e, "0");
        } catch (o) {
            return D.error("TOTP Error", o), "ERROR";
        }
    }
    const $ = "23456789BCDFGHJKMNPQRTVWXY";
    async function Y(t, n = 30, e = 0) {
        if (!t) return "-----";
        try {
            const r = F(t);
            if (r.length === 0) return "-----";
            const i = Q() / 1e3, o = Math.floor(i / n) + e, s = new ArrayBuffer(8);
            new DataView(s).setBigUint64(0, BigInt(o), !1);
            const u = {
                name: "HMAC",
                hash: "SHA-1"
            };
            let l;
            if (x("using hash-wasm fallback for Steam TOTP generation.")) {
                const h = await B("hash-wasm"), { createHMAC: w, createSHA1: A } = h?.default || h, E = await w(A(), r);
                E.init(), E.update(new Uint8Array(s));
                const S = E.digest("hex"), v = new Uint8Array(S.length / 2);
                for(let y = 0; y < S.length; y += 2)v[y / 2] = parseInt(S.substring(y, y + 2), 16);
                l = v.buffer;
            } else {
                const h = await H.subtle.importKey("raw", r, u, !1, [
                    "sign"
                ]);
                l = await H.subtle.sign("HMAC", h, s);
            }
            const f = new DataView(l), d = f.getUint8(l.byteLength - 1) & 15;
            let c = (f.getUint8(d) & 127) << 24 | (f.getUint8(d + 1) & 255) << 16 | (f.getUint8(d + 2) & 255) << 8 | f.getUint8(d + 3) & 255, p = "";
            for(let h = 0; h < 5; h++)p += $.charAt(c % $.length), c = Math.floor(c / $.length);
            return p;
        } catch (r) {
            return D.error("Steam TOTP Error", r), "ERROR";
        }
    }
    async function Z(t, n = 0, e = 6, r = "SHA-1") {
        if (!t) return "------";
        try {
            const i = F(t);
            if (i.length === 0) return "------";
            const o = new ArrayBuffer(8);
            new DataView(o).setBigUint64(0, BigInt(n), !1);
            const a = {
                name: "HMAC",
                hash: r.includes("-") ? r : r.replace("SHA", "SHA-")
            };
            let u;
            if (x("using hash-wasm fallback for HOTP generation.")) {
                const p = await B("hash-wasm"), { createHMAC: h, createSHA1: w, createSHA256: A, createSHA512: E } = p?.default || p;
                let S;
                a.hash === "SHA-256" ? S = A() : a.hash === "SHA-512" ? S = E() : S = w();
                const v = await h(S, i);
                v.init(), v.update(new Uint8Array(o));
                const y = v.digest("hex"), T = new Uint8Array(y.length / 2);
                for(let O = 0; O < y.length; O += 2)T[O / 2] = parseInt(y.substring(O, O + 2), 16);
                u = T.buffer;
            } else {
                const p = await H.subtle.importKey("raw", i, a, !1, [
                    "sign"
                ]);
                u = await H.subtle.sign("HMAC", p, o);
            }
            const l = new DataView(u), f = l.getUint8(u.byteLength - 1) & 15;
            return (((l.getUint8(f) & 127) << 24 | (l.getUint8(f + 1) & 255) << 16 | (l.getUint8(f + 2) & 255) << 8 | l.getUint8(f + 3) & 255) % Math.pow(10, e)).toString().padStart(e, "0");
        } catch (i) {
            return D.error("HOTP Error", i), "ERROR";
        }
    }
    async function tt(t, n = 30, e = 0) {
        return j(t, n, 8, "SHA1", e);
    }
    ft = async function(t, n = 30, e = 6, r = "SHA1", i = "totp", o = 0) {
        return i === "steam" ? Y(t, n, o) : i === "blizzard" ? tt(t, n, o) : i === "hotp" ? Z(t, n, e, r) : j(t, n, e, r, o);
    };
    et = function(t = {}) {
        const n = rt(t.type, t), e = {
            ...t,
            type: n
        };
        if (n === "steam") e.digits = 5, e.period = 30, e.algorithm = "SHA1";
        else if (n === "blizzard") e.digits = 8, e.period = 30, e.algorithm = "SHA1";
        else {
            let i = (t.algorithm || "SHA1").toUpperCase().replace(/-/g, "");
            [
                "SHA1",
                "SHA256",
                "SHA512"
            ].includes(i) || (i = "SHA1"), e.algorithm = i;
            let o = parseInt(t.digits || "6", 10);
            (isNaN(o) || o <= 0) && (o = 6), e.digits = o;
            let s = parseInt(t.period || "30", 10);
            (isNaN(s) || s <= 0) && (s = 30), e.period = s;
        }
        e.service = e.service || e.issuer || "Unknown", e.account = e.account || "Unknown";
        const r = e.secret || "";
        return e.secret = r.startsWith("nodeauth:") ? r : r.replace(/[\s=]/g, "").toUpperCase(), e.counter = parseInt(e.counter || "0", 10), (isNaN(e.counter) || e.counter < 0) && (e.counter = 0), e.category = e.category || "", e;
    };
    function rt(t, n = {}) {
        const e = (t || n.type || "").toLowerCase().trim(), r = (n.algorithm || "").toUpperCase(), i = (n.service || n.issuer || "").toUpperCase(), o = parseInt(n.digits || "0", 10);
        return e === "steam" || e === "steam guard" || r === "STEAM" || o === 5 && i.includes("STEAM") ? "steam" : [
            "blizzard",
            "battle.net"
        ].some((s)=>e.includes(s) || i.includes(s.toUpperCase())) ? "blizzard" : e === "totp" ? "totp" : e === "hotp" || n.hasOwnProperty("counter") && n.counter !== null && n.counter !== void 0 ? "hotp" : "totp";
    }
    nt = function(t) {
        try {
            if (!t) return null;
            if (t.startsWith("steam://")) {
                const c = t.replace("steam://", "").replace(/[\s=]/g, "").toUpperCase();
                return c ? {
                    service: "Steam",
                    account: "Steam Guard",
                    secret: c,
                    type: "steam",
                    digits: 5,
                    period: 30,
                    algorithm: "SHA1",
                    counter: 0,
                    category: ""
                } : null;
            }
            const n = new URL(t);
            if (n.protocol !== "otpauth:") return null;
            let e = n.host || n.hostname;
            !e && n.pathname.startsWith("//") && (e = n.pathname.substring(2).split("/")[0]), e = (e || "").toLowerCase();
            const r = n.searchParams, i = r.get("secret");
            if (!i) return null;
            const o = decodeURIComponent(n.pathname.replace(/^\//, ""));
            let s = r.get("issuer") || "", a = o;
            if (o.includes(":")) {
                const c = o.indexOf(":"), p = o.substring(0, c).trim(), h = o.substring(c + 1).trim();
                s || (s = p), a = h;
            }
            let u = (r.get("algorithm") || "SHA1").toUpperCase().replace(/-/g, "");
            [
                "SHA1",
                "SHA256",
                "SHA512"
            ].includes(u) || (u = "SHA1");
            const l = parseInt(r.get("digits") || "0", 10), f = parseInt(r.get("period") || "30", 10);
            let d = parseInt(r.get("counter") || "0", 10);
            return (isNaN(d) || d < 0) && (d = 0), et({
                service: s,
                account: a,
                secret: i,
                type: e,
                digits: l,
                period: f,
                counter: d,
                algorithm: u
            });
        } catch  {
            return null;
        }
    };
    dt = function(t) {
        const { service: n, account: e, secret: r, algorithm: i = "SHA1", digits: o = 6, period: s = 30, type: a = "totp", counter: u = 0 } = t, l = encodeURIComponent(e ? `${n}:${e}` : n), f = encodeURIComponent(n);
        if (a === "hotp") {
            let d = `otpauth://hotp/${l}?secret=${r}&counter=${u}`;
            return n && (d += `&issuer=${f}`), i !== "SHA1" && (d += `&algorithm=${i}`), o !== 6 && (d += `&digits=${o}`), d;
        }
        return a === "steam" ? `otpauth://steam/${l}?secret=${r}&issuer=${f}&algorithm=SHA1&digits=5` : a === "blizzard" ? `otpauth://totp/${l}?secret=${r}&issuer=${f}&algorithm=SHA1&digits=8&period=30` : `otpauth://totp/${l}?secret=${r}&issuer=${f}&algorithm=${i}&digits=${o}&period=${s}`;
    };
    pt = {
        "2fas": [
            "totp",
            "hotp",
            "steam",
            "blizzard"
        ],
        aegis: [
            "totp",
            "hotp",
            "steam",
            "blizzard"
        ],
        google_auth: [
            "totp",
            "hotp",
            "blizzard"
        ],
        bitwarden_auth_json: [
            "totp",
            "steam",
            "blizzard"
        ],
        bitwarden_auth_csv: [
            "totp",
            "steam",
            "blizzard"
        ],
        proton_auth: [
            "totp",
            "steam",
            "blizzard"
        ],
        generic_otpauth: [
            "totp",
            "hotp",
            "steam",
            "blizzard"
        ],
        nodeauth_json: [
            "totp",
            "hotp",
            "steam",
            "blizzard"
        ],
        nodeauth_encrypted: [
            "totp",
            "hotp",
            "steam",
            "blizzard"
        ],
        nodeauth_csv: [
            "totp",
            "hotp",
            "steam",
            "blizzard"
        ],
        nodeauth_html: [
            "totp",
            "hotp",
            "steam",
            "blizzard"
        ]
    };
    class m extends Error {
        constructor(n, e = "VAULT_ERROR", r = null){
            super(n), this.name = "vaultError", this.code = e, this.details = r, Error.captureStackTrace && Error.captureStackTrace(this, m);
        }
    }
    let I, U, P, V;
    at = {
        async getTrashList () {
            const t = await g("/api/vault/trash");
            try {
                const { useLayoutStore: n } = await z(async ()=>{
                    const { useLayoutStore: o } = await import("./index-DpkVzPs1.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }).then((s)=>s.w);
                    return {
                        useLayoutStore: o
                    };
                }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])), r = n().appTrashRetention;
                let i = t.vault || t.data || (Array.isArray(t) ? t : []);
                if (r > 0 && i.length > 0) {
                    const o = Date.now(), s = r * 24 * 60 * 60 * 1e3, a = o - s, u = i.filter((l)=>l.deletedAt && l.deletedAt < a);
                    if (u.length > 0) {
                        const l = u.map((f)=>this.hardDelete(f.id));
                        Promise.allSettled(l).catch(console.warn), i = i.filter((f)=>!f.deletedAt || f.deletedAt >= a), t.vault = i, t.data && Array.isArray(t.data) && (t.data = i);
                    }
                }
            } catch (n) {
                console.warn("[Trash TTL] Failed to evaluate auto-purge:", n);
            }
            return t;
        },
        async moveToTrash (t) {
            return await g(`/api/vault/${t}/trash_move`, {
                method: "POST"
            });
        },
        async restoreItem (t) {
            return await g(`/api/vault/${t}/trash_restore`, {
                method: "POST"
            });
        },
        async batchMoveToTrash (t) {
            return await g("/api/vault/trash_batch_move", {
                method: "POST",
                body: JSON.stringify({
                    ids: t
                })
            });
        },
        async hardDelete (t) {
            return await g(`/api/vault/${t}/trash_hard`, {
                method: "DELETE"
            });
        },
        async emptyTrash () {
            return await g("/api/vault/trash_empty", {
                method: "DELETE"
            });
        }
    };
    I = R([]);
    U = R(0);
    P = R(!1);
    V = R(null);
    typeof window < "u" && W("vault:meta:trash_count").then((t)=>{
        typeof t == "number" && (U.value = t);
    }).catch(()=>{});
    ot = function() {
        const t = G(), n = _(), e = K(), r = async ()=>{
            if (!(t.isLocked || n.isOffline || !e.appTrashMode) && !P.value) {
                P.value = !0, V.value = null;
                try {
                    const s = await at.getTrashList(), a = s.vault || s.data || (Array.isArray(s) ? s : []);
                    I.value = a, U.value = a.length, q("vault:meta:trash_count", a.length).catch(()=>{});
                } catch (s) {
                    V.value = s, D.error("[useTrashList] fetchTrash failed:", s);
                } finally{
                    P.value = !1;
                }
            }
        };
        return X([
            ()=>t.isInitialized,
            ()=>t.isLocked,
            ()=>n.isOffline,
            ()=>e.appTrashMode
        ], ([s, a, u, l])=>{
            if (s) {
                if (a || u || !l) {
                    I.value = [];
                    return;
                }
                r();
            }
        }, {
            immediate: !0
        }), {
            trashVault: I,
            trashCount: U,
            isFetchingTrash: P,
            trashError: V,
            fetchTrash: r,
            filteredTrash: (s = "")=>{
                const a = I.value;
                if (!s) return a;
                const u = s.toLowerCase();
                return a.filter((l)=>l.service?.toLowerCase().includes(u) || l.account?.toLowerCase().includes(u));
            },
            updateTrashMetadata: (s, a = void 0)=>{
                a !== void 0 ? U.value = a : U.value = Math.max(0, U.value + s), q("vault:meta:trash_count", U.value).catch(()=>{});
            }
        };
    };
    let k, C;
    k = async (t)=>{
        if (t && t.secret && !t.secret.startsWith("nodeauth:")) {
            const { useAppLockStore: n } = await z(async ()=>{
                const { useAppLockStore: i } = await import("./index-DpkVzPs1.js").then(async (m)=>{
                    await m.__tla;
                    return m;
                }).then((o)=>o.b);
                return {
                    useAppLockStore: i
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])), r = await n().getMaskingKey();
            if (r) {
                const { maskSecretFront: i } = await z(async ()=>{
                    const { maskSecretFront: o } = await import("./index-DpkVzPs1.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }).then((s)=>s.m);
                    return {
                        maskSecretFront: o
                    };
                }, __vite__mapDeps([0,1,2,3,4,5,6,7,8]));
                t.secret = await i(t.secret, r);
            }
        }
    };
    C = (t)=>t.isOffline || t.name === "TypeError" || t.message?.toLowerCase().includes("fetch") || t.message?.toLowerCase().includes("network") || typeof navigator < "u" && !navigator.onLine;
    st = {
        async getVault ({ page: t = 1, limit: n = 12, search: e = "", category: r = "" }) {
            if (_().isManualOffline) try {
                const s = await N().getData();
                let a = s?.vault || [];
                if (e && e.trim()) {
                    const c = e.trim().toLowerCase();
                    a = a.filter((p)=>p.service?.toLowerCase().includes(c) || p.account?.toLowerCase().includes(c));
                }
                r && r !== "____UNCATEGORIZED____" ? a = a.filter((c)=>(c.category || "") === r) : r === "____UNCATEGORIZED____" && (a = a.filter((c)=>!c.category || c.category === ""));
                const u = a.length, l = s?.vault || [], f = {};
                l.forEach((c)=>{
                    const p = c.category || "";
                    f[p] = (f[p] || 0) + 1;
                });
                const d = Object.entries(f).map(([c, p])=>({
                        category: c,
                        count: p
                    }));
                return {
                    success: !0,
                    vault: a,
                    total: u,
                    categoryStats: d,
                    pagination: {
                        page: 1,
                        limit: u || 1,
                        totalItems: u,
                        totalPages: 1
                    }
                };
            } catch (o) {
                throw console.error("[VaultService] Offline getVault failed:", o), o;
            }
            try {
                const o = new URLSearchParams({
                    page: t,
                    limit: n,
                    search: e,
                    category: r
                });
                return await g(`/api/vault?${o.toString()}`);
            } catch (o) {
                throw new m("Failed to fetch vault list", "VAULT_FETCH_FAILED", o);
            }
        },
        async createAccount (t) {
            await k(t);
            const n = async ()=>{
                const e = N(), r = b(), o = (await e.getData())?.vault || [], s = (l, f)=>`${(l || "").trim().toLowerCase()}:${(f || "").trim().toLowerCase()}`, a = s(t.service, t.account);
                if (o.some((l)=>s(l.service, l.account) === a)) return console.warn("[VaultService] Account already exists locally, skipping duplicate create task"), {
                    success: !0,
                    alreadyExists: !0
                };
                const u = `tmp_${Date.now()}`;
                return r.enqueueAction("create", u, t), {
                    success: !0,
                    pending: !0,
                    item: {
                        ...t,
                        id: u,
                        pending: !0
                    }
                };
            };
            try {
                return _().isOffline ? n() : await g("/api/vault", {
                    method: "POST",
                    body: JSON.stringify(t)
                });
            } catch (e) {
                if (C(e)) return console.warn("[VaultService] Network error, falling back to offline queue", e), n();
                throw new m("Failed to create account", "ACCOUNT_CREATE_FAILED", e);
            }
        },
        async updateAccount (t, n) {
            await k(n);
            const e = ()=>(b().enqueueAction("update", t, n), {
                    success: !0,
                    pending: !0
                });
            try {
                return _().isOffline ? e() : await g(`/api/vault/${t}`, {
                    method: "PUT",
                    body: JSON.stringify(n)
                });
            } catch (r) {
                if (C(r)) return e();
                throw new m("Failed to update account", "ACCOUNT_UPDATE_FAILED", r);
            }
        },
        async incrementCounter (t, n) {
            const e = ()=>(b().enqueueAction("increment", t, {
                    updatedAt: n
                }), {
                    success: !0,
                    pending: !0
                });
            try {
                return _().isOffline ? e() : await g(`/api/vault/${t}/increment`, {
                    method: "PATCH",
                    body: JSON.stringify({
                        updatedAt: n
                    })
                });
            } catch (r) {
                if (C(r)) return e();
                throw new m("Failed to increment counter", "ACCOUNT_INCREMENT_FAILED", r);
            }
        },
        async deleteAccount (t, n = {}) {
            const e = ()=>(b().enqueueAction("delete", t, n), {
                    success: !0,
                    pending: !0
                });
            try {
                return _().isOffline ? e() : await g(`/api/vault/${t}`, {
                    method: "DELETE"
                });
            } catch (r) {
                const i = r.details?.statusCode || r.statusCode, o = r.details?.message || r.message;
                if (i === 404 || o === "account_not_found") return console.warn("[VaultService] Account already deleted on server, treating as success:", t), {
                    success: !0
                };
                if (C(r)) return e();
                throw new m("Failed to delete account", "ACCOUNT_DELETE_FAILED", r);
            }
        },
        async batchDelete (t) {
            const n = ()=>{
                const e = b();
                for (const r of t)e.enqueueAction("delete", r);
                return {
                    success: !0,
                    pending: !0,
                    deleted: t.length
                };
            };
            try {
                return _().isOffline ? n() : await g("/api/vault/batch-delete", {
                    method: "POST",
                    body: JSON.stringify({
                        ids: t
                    })
                });
            } catch (e) {
                if (C(e)) return n();
                throw new m("Failed to batch delete accounts", "ACCOUNTS_BATCH_DELETE_FAILED", e);
            }
        },
        async reorder (t) {
            const n = ()=>(b().enqueueAction("reorder", "global_order", {
                    ids: t
                }), {
                    success: !0,
                    pending: !0
                });
            try {
                return _().isOffline ? n() : await g("/api/vault/reorder", {
                    method: "POST",
                    body: JSON.stringify({
                        ids: t
                    })
                });
            } catch (e) {
                if (C(e)) return n();
                throw new m("Failed to reorder accounts", "VAULT_REORDER_FAILED", e);
            }
        },
        async moveSortOrder (t, n) {
            const e = ()=>(b().enqueueAction("move-sort", t, {
                    sortOrder: n
                }), {
                    success: !0,
                    pending: !0
                });
            try {
                return _().isOffline ? e() : await g(`/api/vault/${t}/sort-order`, {
                    method: "PATCH",
                    body: JSON.stringify({
                        sortOrder: n
                    })
                });
            } catch (r) {
                if (C(r)) return e();
                throw new m("Failed to move sort order", "VAULT_SORT_MOVE_FAILED", r);
            }
        },
        async addFromUri (t, n = "扫码添加") {
            try {
                const e = nt(t);
                if (!e) throw new Error("Invalid OTP URI");
                return e.category = n, await this.createAccount(e);
            } catch (e) {
                throw new m("Failed to add account from URI", "ACCOUNT_ADD_URI_FAILED", e);
            }
        },
        async restoreBlizzardNet (t, n, e) {
            return await g("/api/vault/import/blizzard-net", {
                method: "POST",
                body: JSON.stringify({
                    serial: t,
                    restoreCode: n,
                    ssoToken: e
                })
            });
        },
        async importVault (t, n = "raw") {
            const e = async ()=>{
                const r = N(), i = b(), s = (await r.getData())?.vault || [], a = (c, p)=>`${(c || "").trim().toLowerCase()}:${(p || "").trim().toLowerCase()}`, u = new Set(s.map((c)=>a(c.service, c.account)));
                let l = 0;
                const f = Array.isArray(t) ? t : typeof t == "string" ? JSON.parse(t) : [
                    t
                ], d = [];
                for (const c of f){
                    if (!c) continue;
                    const p = a(c.service, c.account);
                    if (u.has(p)) {
                        console.debug("[VaultService] Skipping duplicate import in sync queue:", p);
                        continue;
                    }
                    let h;
                    try {
                        h = JSON.parse(JSON.stringify(c));
                    } catch  {
                        console.warn("[importVault] Account not serializable, skipping:", c);
                        continue;
                    }
                    const w = h.id || Date.now().toString(36) + Math.random().toString(36).substr(2);
                    h.id = w, await k(h), d.push({
                        type: "create",
                        id: w,
                        data: h
                    }), l++, u.add(p);
                }
                return d.length > 0 && await i.enqueueActions(d), {
                    success: !0,
                    count: l,
                    pending: !0
                };
            };
            try {
                return _().isOffline ? await e() : await g("/api/vault/import", {
                    method: "POST",
                    body: JSON.stringify({
                        type: n,
                        content: typeof t == "string" ? t : JSON.stringify(t)
                    })
                });
            } catch (r) {
                if (C(r)) return await e();
                throw new m("Failed to import vault data", "VAULT_IMPORT_FAILED", r);
            }
        },
        async syncOfflineActions () {
            const t = b();
            if (t.hasPendingChanges && !t.isSyncing) try {
                t.isSyncing = !0;
                const n = t.syncQueue.filter((a)=>a.type === "move-sort"), e = t.syncQueue.filter((a)=>a.type !== "move-sort"), r = await Promise.allSettled(n.map((a)=>g(`/api/vault/${a.id}/sort-order`, {
                        method: "PATCH",
                        body: JSON.stringify({
                            sortOrder: a.data.sortOrder
                        })
                    }))), i = new Set(n.filter((a, u)=>r[u].status === "fulfilled").map((a)=>a.id));
                if (e.length === 0) return t.syncQueue = t.syncQueue.filter((a)=>!i.has(a.id)), await t.saveQueue(), {
                    success: !0
                };
                const o = e.map((a)=>({
                        id: a.id,
                        type: a.type,
                        data: {
                            ...a.data,
                            updatedAt: a.baselineUpdatedAt
                        }
                    })), s = await g("/api/vault/sync", {
                    method: "POST",
                    body: JSON.stringify({
                        actions: o
                    })
                });
                if (s.success && s.results) {
                    const a = s.results, u = [];
                    for(let d = 0; d < e.length; d++){
                        const c = e[d], p = a[d];
                        if (!p?.success) {
                            const h = p?.code || "error", w = p?.error || "", A = h === "conflict_detected" || w === "conflict_detected" || h === "409";
                            if (h === "404" || w === "account_not_found" || h === "account_not_found") continue;
                            if (A) {
                                u.push({
                                    ...c,
                                    status: "conflict"
                                });
                                const { useOfflineStore: S } = await z(async ()=>{
                                    const { useOfflineStore: y } = await import("./index-DpkVzPs1.js").then(async (m)=>{
                                        await m.__tla;
                                        return m;
                                    }).then((T)=>T.y);
                                    return {
                                        useOfflineStore: y
                                    };
                                }, __vite__mapDeps([0,1,2,3,4,5,6,7,8]));
                                S().registerConflict(c.id);
                            } else u.push(c);
                        }
                    }
                    const l = t.syncQueue.filter((d)=>d.type === "move-sort" && !i.has(d.id));
                    t.syncQueue = [
                        ...u,
                        ...l
                    ], await t.saveQueue();
                    const { fetchTrash: f } = ot();
                    f();
                }
                return s;
            } catch (n) {
                throw console.error("[Sync] Batch sync failed:", n), new m("Offline sync failed", "SYNC_FAILED", n);
            } finally{
                t.isSyncing = !1;
            }
        }
    };
    ht = Object.freeze(Object.defineProperty({
        __proto__: null,
        vaultService: st
    }, Symbol.toStringTag, {
        value: "Module"
    }));
});
export { pt as O, ht as a, dt as b, ft as g, et as n, nt as p, at as t, ot as u, st as v, __tla };
