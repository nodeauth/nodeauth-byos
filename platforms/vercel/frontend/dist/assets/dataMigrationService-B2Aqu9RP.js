const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/qr-utils-Cc6U-Akc.js","assets/element-plus-CTp1djr_.js","assets/vue-core-DHcoxuim.js","assets/element-plus-CqJ-3YyC.css","assets/index-BJE2ExGB.js","assets/pdf-utils-CDJbbqXy.js","assets/compression-utils-BzBbrBKd.js","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-CY07rioj.js","assets/index-CeTN7Y2W.css"])))=>i.map(i=>d[i]);
import { _ as j, __tla as __tla_0 } from "./pdf-utils-CDJbbqXy.js";
import { n as pe, O as _e, p as V, b as te, v as fe, __tla as __tla_1 } from "./vaultService-CP_oNFz2.js";
import { B as xe, c as le, S as Se, b as G, d as Ee, a as Te, M as ve, s as Ie, F as Pe, f as de, e as Le, g as Oe } from "./wa-sqlite-CPsif24c.js";
import { x as ue, o as Ue, q as De, __tla as __tla_2 } from "./index-BJE2ExGB.js";
import { c as Re } from "./qr-utils-Cc6U-Akc.js";
import { a as he } from "./argon2-browser-DuRf3eoo.js";
import { l as be, __tla as __tla_3 } from "./resourceRegistry-B1hhQL_K.js";
import { argon2id as Ce } from "./hash-wasm-Dup_VHWH.js";
import { unzipSync as Ne } from "./compression-utils-BzBbrBKd.js";
import "./vue-core-DHcoxuim.js";
import "./element-plus-CTp1djr_.js";
import "./simplewebauthn-3qpiAaRi.js";
import "./tanstack-query-CY07rioj.js";
let at, _t;
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
    class P extends Error {
        constructor(r, e = "MIGRATION_ERROR", t = null){
            super(r), this.name = "migrationError", this.code = e, this.details = t;
        }
    }
    function q(n) {
        const r = new Uint8Array(n.length / 2);
        for(let e = 0; e < n.length; e += 2)r[e / 2] = parseInt(n.substring(e, e + 2), 16);
        return r;
    }
    function Fe(n) {
        const r = atob(n), e = new Uint8Array(r.length);
        for(let t = 0; t < r.length; t++)e[t] = r.charCodeAt(t);
        return e;
    }
    function Y(n) {
        try {
            return JSON.parse(n);
        } catch  {
            return null;
        }
    }
    const Me = {
        detect (n, r) {
            if (n instanceof ArrayBuffer || n instanceof Uint8Array) {
                const t = n instanceof Uint8Array ? n : new Uint8Array(n), s = "SQLite format 3";
                let i = !0;
                for(let c = 0; c < s.length && c < t.length; c++)if (t[c] !== s.charCodeAt(c)) {
                    i = !1;
                    break;
                }
                if (i) return "phonefactor";
                try {
                    const c = new TextDecoder("utf-8", {
                        fatal: !1
                    }).decode(t);
                    if (c.includes("accounts") && (c.includes("oath_secret_key") || c.includes("encrypted_oath_secret_key"))) return "phonefactor";
                } catch  {}
            }
            if (r && r.toLowerCase().includes("phonefactor")) return "phonefactor";
            let e = n;
            if (n instanceof ArrayBuffer || n instanceof Uint8Array) try {
                const t = n instanceof Uint8Array ? n : new Uint8Array(n);
                e = new TextDecoder("utf-8", {
                    fatal: !1
                }).decode(t);
            } catch  {
                e = "";
            }
            if (r && r.toLowerCase().endsWith(".csv")) {
                const t = typeof e == "string" ? e.split(`
`)[0].toLowerCase() : "";
                return t.includes("login_totp") ? "bitwarden_pass_csv" : t.includes("title") && t.includes("otpauth") ? "1password_csv" : t.includes("otpauth") ? "bitwarden_auth_csv" : t.includes("totp") && t.includes("vault") && t.includes("createtime") ? "proton_pass_csv" : t.includes("otpurl") && t.includes("title") && t.includes("username") ? "dashlane_csv" : "nodeauth_csv";
            }
            if (typeof e == "string" && e.trim().startsWith("otpauth://")) return "generic_otpauth";
            if (typeof e == "string") {
                const t = Y(e);
                if (t) {
                    if (Array.isArray(t.items) && Array.isArray(t.folders)) return "bitwarden_pass_json";
                    if (Array.isArray(t.items) && (t.encrypted === !1 || !("encrypted" in t))) return "bitwarden_auth_json";
                    if (t.encrypted === !0 && t.app === "nodeauth") return "nodeauth_encrypted";
                    if (t.version === 1 && Array.isArray(t.accounts) && (t.accounts.length === 0 || t.accounts[0].issuerName)) return "lastpass_auth_json";
                    if (t.app === "nodeauth" || Array.isArray(t.accounts) || Array.isArray(t.vault) || Array.isArray(t.secrets)) return "nodeauth_json";
                    if (t.schemaVersion && t.servicesEncrypted && typeof t.servicesEncrypted == "string") return "2fas_encrypted";
                    if (t.schemaVersion && Array.isArray(t.services)) return "2fas";
                    if (t.version === 1 && t.db && typeof t.db == "object" && Array.isArray(t.db.entries)) return "aegis";
                    if (t.version === 1 && t.entries && Array.isArray(t.entries)) return "proton_auth";
                    if (t.version === 1 && t.header && t.db && typeof t.db == "string") return "aegis_encrypted";
                    if (t.version === 1 && typeof t.salt == "string" && typeof t.content == "string") return "proton_auth_encrypted";
                    if (t.kdfParams && typeof t.encryptedData == "string") return "ente_encrypted";
                    if (t.encrypted === !0 && t.passwordProtected === !0 && t.encKeyValidation_DO_NOT_EDIT) return "bitwarden_pass_encrypted";
                    if (t.shared_secret && (t.account_name || t.SteamID)) return "steam_mafile";
                }
            }
            if (typeof e == "string" && e.includes("-----BEGIN PGP MESSAGE-----")) return "proton_pass_pgp";
            if (r) {
                const t = r.toLowerCase();
                if (t.endsWith(".2fas")) return "2fas";
                if (t.endsWith(".txt")) return "generic_otpauth";
                if (t.endsWith(".mafile")) return "steam_mafile";
                if (t.endsWith(".1pux")) return "1password_pux";
            }
            return "unknown";
        }
    };
    class ke extends xe {
        name = "memory";
        mapNameToFile = new Map;
        mapIdToFile = new Map;
        constructor(){
            super();
        }
        close() {
            for (const r of this.mapIdToFile.keys())this.xClose(r);
        }
        xOpen(r, e, t, s) {
            r = r || Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(36);
            let i = this.mapNameToFile.get(r);
            if (!i) if (t & le) i = {
                name: r,
                flags: t,
                size: 0,
                data: new ArrayBuffer(0)
            }, this.mapNameToFile.set(r, i);
            else return Se;
            return this.mapIdToFile.set(e, i), s.setInt32(0, t, !0), G;
        }
        xClose(r) {
            const e = this.mapIdToFile.get(r);
            return e && (this.mapIdToFile.delete(r), e.flags & Ee && this.mapNameToFile.delete(e.name)), G;
        }
        xRead(r, e, t) {
            const s = this.mapIdToFile.get(r), i = Math.min(t, s.size), u = Math.min(t + e.byteLength, s.size) - i;
            return u && e.set(new Uint8Array(s.data, i, u)), u < e.byteLength ? (e.fill(0, u), Te) : G;
        }
        xWrite(r, e, t) {
            const s = this.mapIdToFile.get(r);
            if (t + e.byteLength > s.data.byteLength) {
                const i = Math.max(t + e.byteLength, 2 * s.data.byteLength), c = new ArrayBuffer(i);
                new Uint8Array(c).set(new Uint8Array(s.data, 0, s.size)), s.data = c;
            }
            return new Uint8Array(s.data, t, e.byteLength).set(e), s.size = Math.max(s.size, t + e.byteLength), G;
        }
        xTruncate(r, e) {
            const t = this.mapIdToFile.get(r);
            return t.size = Math.min(t.size, e), G;
        }
        xFileSize(r, e) {
            const t = this.mapIdToFile.get(r);
            return e.setBigInt64(0, BigInt(t.size), !0), G;
        }
        xDelete(r, e) {
            return this.mapNameToFile.delete(r), G;
        }
        xAccess(r, e, t) {
            const s = this.mapNameToFile.get(r);
            return t.setInt32(0, s ? 1 : 0, !0), G;
        }
    }
    class Be extends ke {
        name = "memory-async";
        constructor(){
            super();
        }
        async close() {
            for (const r of this.mapIdToFile.keys())await this.xClose(r);
        }
        xOpen(r, e, t, s) {
            return this.handleAsync(async ()=>super.xOpen(r, e, t, s));
        }
        xClose(r) {
            return this.handleAsync(async ()=>super.xClose(r));
        }
        xRead(r, e, t) {
            return this.handleAsync(async ()=>super.xRead(r, e, t));
        }
        xWrite(r, e, t) {
            return this.handleAsync(async ()=>super.xWrite(r, e, t));
        }
        xTruncate(r, e) {
            return this.handleAsync(async ()=>super.xTruncate(r, e));
        }
        xFileSize(r, e) {
            return this.handleAsync(async ()=>super.xFileSize(r, e));
        }
        xDelete(r, e) {
            return this.handleAsync(async ()=>super.xDelete(r, e));
        }
        xAccess(r, e, t) {
            return this.handleAsync(async ()=>super.xAccess(r, e, t));
        }
    }
    const Ve = {
        bytesToBase32 (n) {
            const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
            let e = 0, t = 0, s = "";
            for(let i = 0; i < n.length; i++)for(t = t << 8 | n[i], e += 8; e >= 5;)e -= 5, s += r[t >>> e & 31];
            for(e > 0 && (s += r[t << 5 - e & 31]); s.length % 8;)s += "=";
            return s;
        },
        base64ToBase32 (n) {
            try {
                const r = atob(n.trim()), e = new Uint8Array(r.length);
                for(let t = 0; t < r.length; t++)e[t] = r.charCodeAt(t);
                return this.bytesToBase32(e);
            } catch (r) {
                throw new Error(`Base64 转 Base32 失败: ${r.message}`);
            }
        },
        async parse (n) {
            let r = null, e = null, t = null, s = null;
            try {
                if (n && n.main && n.main.buffer) r = new Uint8Array(n.main.buffer), n.wal && n.wal.buffer && (e = new Uint8Array(n.wal.buffer)), n.shm && n.shm.buffer && (t = new Uint8Array(n.shm.buffer));
                else if (n instanceof ArrayBuffer || n instanceof Uint8Array) r = new Uint8Array(n);
                else throw new P("无法识别传入的 PhoneFactor 数据格式", "INVALID_PHONEFACTOR_INPUT");
                const i = await ve({
                    locateFile: (a)=>a.endsWith(".wasm") ? Ie : a
                }), c = Pe(i);
                s = new Be;
                const u = `vfs-pf-${Date.now()}`;
                s.name = u, c.vfs_register(s);
                const g = "PhoneFactor", w = (a, h)=>{
                    const l = h.buffer.slice(h.byteOffset, h.byteOffset + h.byteLength);
                    s.mapNameToFile.set(a, {
                        name: a,
                        flags: le | de | Le,
                        size: h.byteLength,
                        data: l
                    });
                };
                w(g, r), e && e.byteLength > 0 && w(`${g}-wal`, e), t && t.byteLength > 0 && w(`${g}-shm`, t);
                const m = await c.open_v2(g, de | le, u);
                await c.exec(m, "PRAGMA locking_mode = EXCLUSIVE;"), await c.exec(m, "PRAGMA journal_mode = DELETE;");
                let A = !1;
                if (await c.exec(m, "SELECT name FROM sqlite_master WHERE type='table' AND name='accounts'", ()=>{
                    A = !0;
                }), !A) throw await c.close(m), new P("不是有效的 Microsoft Authenticator 数据文件", "INVALID_PHONEFACTOR_FILE");
                const y = [], x = /^[A-Z2-7]+=*$/i, f = c.str_new(m, "SELECT name, username, oath_secret_key, encrypted_oath_secret_key, account_type FROM accounts"), o = await c.prepare_v2(m, c.str_value(f));
                if (o && o.stmt) {
                    const a = o.stmt;
                    try {
                        for(; await c.step(a) === Oe;){
                            const h = c.row(a), l = h[0], p = h[1], d = h[2], _ = h[4];
                            if (!l && !p) continue;
                            let b = (d || "").toString().trim();
                            if (!b) continue;
                            let S = "SHA1", v = 6;
                            try {
                                if (_ !== 0) if (_ === 1) b = this.base64ToBase32(b), v = 8;
                                else if (_ === 2) b = b.toUpperCase(), S = "SHA256";
                                else continue;
                            } catch  {
                                continue;
                            }
                            const I = b.replace(/\s+/g, "").replace(/=+$/, "");
                            x.test(I) && y.push({
                                service: l || "Microsoft",
                                account: p || "Unknown",
                                secret: b,
                                type: "totp",
                                algorithm: S,
                                digits: v,
                                period: 30
                            });
                        }
                    } finally{
                        await c.finalize(a);
                    }
                }
                if (c.str_finish(f), await c.close(m), s.mapNameToFile.clear(), y.length === 0) throw new P("未能提取到有效的 TOTP 记录", "NO_DATA");
                return y;
            } catch (i) {
                throw ue.error("[PhoneFactor] parse failed:", i), i instanceof P ? i : new P(`PhoneFactor 解析失败: ${i.message}`, "PF_ERROR", i);
            }
        }
    }, He = {
        async parseImage (n) {
            return new Promise((r, e)=>{
                const t = new Image, s = URL.createObjectURL(n);
                t.onload = ()=>{
                    URL.revokeObjectURL(s);
                    const i = document.createElement("canvas"), c = i.getContext("2d", {
                        willReadFrequently: !0
                    }), u = [
                        1,
                        1.5,
                        .5,
                        2,
                        .8
                    ];
                    let g = null;
                    for (const m of u){
                        i.width = t.width * m, i.height = t.height * m, c.imageSmoothingEnabled = !1, c.drawImage(t, 0, 0, i.width, i.height);
                        const A = c.getImageData(0, 0, i.width, i.height);
                        if (g = Re(A.data, A.width, A.height, {
                            inversionAttempts: "attemptBoth"
                        }), g) break;
                    }
                    if (!g) return e(new P("未能识别出二维码，请确认为完整清晰的截图。", "QR_RECOGNITION_FAILED"));
                    const w = g.data;
                    if (!w.startsWith("otpauth-migration://offline?data=")) return e(new P("不是有效的 Google Authenticator 迁移二维码", "INVALID_GOOGLE_AUTH_QR"));
                    try {
                        let y = new URL(w).searchParams.get("data").replace(/-/g, "+").replace(/_/g, "/");
                        for(; y.length % 4;)y += "=";
                        const x = atob(y), E = new Uint8Array(x.length);
                        for(let f = 0; f < x.length; f++)E[f] = x.charCodeAt(f);
                        r(this.decodePayload(E));
                    } catch (m) {
                        e(new P("解析 Google Authenticator 数据失败", "GOOGLE_AUTH_DECODE_FAILED", m));
                    }
                }, t.onerror = ()=>{
                    URL.revokeObjectURL(s), e(new P("图片读取失败，文件可能已损坏", "IMAGE_LOAD_FAILED"));
                }, t.src = s;
            });
        },
        decodePayload (n) {
            const r = [];
            let e = 0;
            function t() {
                let s = 0, i = 0;
                for(; e < n.length;){
                    const c = n[e++];
                    if (s |= (c & 127) << i, (c & 128) === 0) break;
                    i += 7;
                }
                return s;
            }
            for(; e < n.length;){
                const s = n[e++], i = s >> 3, c = s & 7;
                if (i === 1 && c === 2) {
                    const u = t(), g = e + u;
                    let w = null, m = "", A = "", y = "SHA1", x = 6, E = "totp", f = 0;
                    for(; e < g;){
                        const o = n[e++], a = o >> 3, h = o & 7;
                        if (a === 1 && h === 2) {
                            const l = t(), p = n.slice(e, e + l), d = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
                            let _ = 0, b = 0, S = "";
                            for(let v = 0; v < p.length; v++)for(b = b << 8 | p[v], _ += 8; _ >= 5;)S += d[b >>> _ - 5 & 31], _ -= 5;
                            _ > 0 && (S += d[b << 5 - _ & 31]), w = S, e += l;
                        } else if (a === 2 && h === 2) {
                            const l = t();
                            m = new TextDecoder().decode(n.slice(e, e + l)), e += l;
                        } else if (a === 3 && h === 2) {
                            const l = t();
                            A = new TextDecoder().decode(n.slice(e, e + l)), e += l;
                        } else if (a === 4 && h === 0) {
                            const l = t();
                            l === 2 ? y = "SHA256" : l === 3 ? y = "SHA512" : l === 4 && (y = "MD5");
                        } else if (a === 5 && h === 0) t() === 2 && (x = 8);
                        else if (a === 6 && h === 0) E = t() === 1 ? "hotp" : "totp";
                        else if (a === 7 && h === 0) f = t();
                        else if (h === 0) t();
                        else if (h === 2) e += t();
                        else break;
                    }
                    if (w) {
                        let o = m, a = A;
                        if (!a && m.includes(":")) {
                            const h = m.split(":");
                            a = h[0].trim(), o = h[1].trim();
                        } else a || (a = m);
                        r.push(pe({
                            service: a,
                            account: o,
                            secret: w,
                            algorithm: y,
                            digits: x,
                            type: E,
                            counter: E === "hotp" ? f : 0,
                            period: 30
                        }));
                    }
                    e = g;
                } else if (c === 0) t();
                else if (c === 2) e += t();
                else break;
            }
            return r;
        }
    }, Ke = {
        async exportToGoogleAuth (n) {
            if (!n || n.length === 0) throw new P("没有账户可以迁移", "EMPTY_VAULT");
            const r = _e.google_auth || [
                "totp",
                "hotp"
            ], e = n.filter((A)=>r.includes((A.type || "totp").toLowerCase()));
            if (e.length === 0) throw new P("所选账号的类型 Google Authenticator 均不支持", "EMPTY_VAULT");
            const t = 10, s = [];
            for(let A = 0; A < e.length; A += t)s.push(e.slice(A, A + t));
            const i = Math.floor(Math.random() * 2147483647), c = await j(()=>import("./qr-utils-Cc6U-Akc.js").then((A)=>A.b), __vite__mapDeps([0,1,2,3])), u = [];
            function g(A, y) {
                for(; A >= 128;)y.push(A & 127 | 128), A >>>= 7;
                y.push(A);
            }
            function w(A, y) {
                const x = new TextEncoder().encode(A);
                g(x.length, y);
                for(let E = 0; E < x.length; E++)y.push(x[E]);
            }
            function m(A, y) {
                g(A.length, y);
                for(let x = 0; x < A.length; x++)y.push(A[x]);
            }
            for(let A = 0; A < s.length; A++){
                const y = s[A], x = [];
                x.push(16), g(1, x), x.push(24), g(s.length, x), x.push(32), g(A, x), x.push(40), g(i, x);
                for (const a of y){
                    const h = [], l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", p = a.secret.toUpperCase().replace(/=+$/, "").replace(/[^A-Z2-7]/g, ""), d = [];
                    let _ = 0, b = 0;
                    for(let U = 0; U < p.length; U++){
                        const L = l.indexOf(p[U]);
                        L !== -1 && (b = b << 5 | L, _ += 5, _ >= 8 && (d.push(b >>> _ - 8 & 255), _ -= 8));
                    }
                    d.length > 0 && (h.push(10), m(d, h));
                    const S = a.account || a.service;
                    S && (h.push(18), w(S, h)), a.service && (h.push(26), w(a.service, h));
                    let v = 1;
                    a.algorithm === "SHA256" ? v = 2 : a.algorithm === "SHA512" && (v = 3), h.push(32), g(v, h);
                    let I = 1;
                    a.digits === 8 && (I = 2), h.push(40), g(I, h);
                    let D = 2;
                    a.type === "hotp" && (D = 1), h.push(48), g(D, h), a.type === "hotp" && (h.push(56), g(a.counter || 0, h)), x.push(10), g(h.length, x);
                    for(let U = 0; U < h.length; U++)x.push(h[U]);
                }
                let E = "";
                for(let a = 0; a < x.length; a++)E += String.fromCharCode(x[a]);
                const f = `otpauth-migration://offline?data=${encodeURIComponent(btoa(E))}`, o = await c.toDataURL(f, {
                    errorCorrectionLevel: "M",
                    width: 480,
                    margin: 2
                });
                u.push(o);
            }
            return u;
        }
    }, We = {
        _splitCsvLine (n) {
            const r = [];
            let e = 0;
            for(; e <= n.length;){
                if (e === n.length) {
                    r.push("");
                    break;
                }
                if (n[e] === '"') {
                    let t = "";
                    for(e++; e < n.length;)if (n[e] === '"') if (n[e + 1] === '"') t += '"', e += 2;
                    else {
                        e++;
                        break;
                    }
                    else t += n[e++];
                    r.push(t.trim()), n[e] === "," && e++;
                } else {
                    const t = n.indexOf(",", e);
                    if (t === -1) {
                        r.push(n.slice(e).trim());
                        break;
                    }
                    r.push(n.slice(e, t).trim()), e = t + 1;
                }
            }
            return r;
        },
        parseCsv (n) {
            const r = n.split(`
`).filter((f)=>f.trim());
            if (r.length < 2) return [];
            const e = this._splitCsvLine(r[0]).map((f)=>f.toLowerCase()), t = [], s = e.includes("login_totp"), i = e.includes("otpauth") && !e.includes("title"), c = e.includes("otpauth") && e.includes("title"), u = e.includes("totp") && e.includes("vault") && e.includes("createtime"), g = e.includes("otpurl") && e.includes("title") && e.includes("username"), w = e.includes("issuer") || e.includes("secret") || e.includes("name"), m = [
                "otpauth",
                "login_totp",
                "totp",
                "mfa",
                "two_factor_code",
                "secret",
                "otpurl",
                "nodeauth",
                "authenticator"
            ], A = [
                "name",
                "title",
                "item name",
                "issuer",
                "label"
            ], y = [
                "username",
                "login",
                "login_username",
                "account",
                "email"
            ], x = (f)=>f ? f.toString().trim().replace(/[\s-]/g, "").toUpperCase() : "", E = e.some((f)=>m.includes(f));
            if (!s && !i && !c && !u && !g && !w && !E) return [];
            for(let f = 1; f < r.length; f++){
                const o = this._splitCsvLine(r[f]), a = {};
                e.forEach((l, p)=>{
                    a[l] = o[p] || "";
                });
                const h = t.length;
                if (c) {
                    const l = (a.otpauth || "").trim();
                    if (l && l.startsWith("otpauth://")) {
                        const p = V(l);
                        p && (p.service = a.title || p.service, p.account = a.username || p.account, t.push(p));
                    }
                } else if (s || i) {
                    const l = (a.login_totp || a.otpauth || a.totp || "").trim();
                    if (l) {
                        let p = null;
                        if (l.startsWith("otpauth://") || l.startsWith("steam://")) p = V(l);
                        else {
                            const d = x(l);
                            /^[A-Z2-7]+=*$/.test(d) && (p = {
                                service: a.name || "Unknown",
                                account: a.login_username || "Unknown",
                                secret: d,
                                algorithm: "SHA1",
                                digits: 6,
                                period: 30,
                                category: "",
                                type: "totp"
                            });
                        }
                        p && (p.service = a.name || p.service, p.account = a.login_username || p.account, t.push(p));
                    }
                } else if (u) {
                    const l = (a.totp || "").trim();
                    if (l && (l.startsWith("otpauth://") || l.startsWith("steam://"))) {
                        const p = V(l);
                        p && (p.service = a.name || p.service, p.account = a.username || p.account, p.category = a.vault || "", t.push(p));
                    }
                } else if (g) {
                    const l = (a.otpurl || "").trim();
                    if (l && (l.startsWith("otpauth://") || l.startsWith("steam://"))) {
                        const p = V(l);
                        p && (p.service = a.title || p.service, p.account = a.username || p.account, p.category = a.category || "", t.push(p));
                    }
                } else {
                    const l = e.find((d)=>m.includes(d)), p = l ? (a[l] || "").trim() : "";
                    if (p) if (p.toLowerCase().startsWith("otpauth://") || p.toLowerCase().startsWith("steam://")) {
                        const d = V(p);
                        if (d) {
                            const _ = e.find((S)=>A.includes(S)), b = e.find((S)=>y.includes(S));
                            d.service = a[_] || d.service, d.account = a[b] || d.account, t.push(d);
                        }
                    } else {
                        const d = x(p);
                        if (/^[A-Z2-7]+=*$/.test(d)) {
                            let b = e.find((U)=>A.includes(U)), S = e.find((U)=>y.includes(U));
                            e.includes("issuer") && e.includes("name") && (b = "issuer", S = "name");
                            const v = (a.type || "totp").toLowerCase(), I = parseInt(a.digits || "0", 10), D = (a.algorithm || "SHA1").toUpperCase().replace(/-/g, "");
                            t.push({
                                ...pe({
                                    service: a[b],
                                    account: a[S],
                                    secret: d,
                                    algorithm: D,
                                    digits: I,
                                    period: parseInt(a.period || "30", 10),
                                    type: v,
                                    counter: parseInt(a.counter || "0", 10)
                                }),
                                category: a.category || ""
                            });
                        }
                    }
                }
                if (t.length > h) for(let l = h; l < t.length; l++){
                    const p = t[l];
                    a.sort_order !== void 0 && a.sort_order !== "" && (p.sort_order = parseInt(a.sort_order, 10) || 0), a.deleted_at !== void 0 && a.deleted_at !== "" && (p.deleted_at = a.deleted_at);
                }
            }
            return t;
        }
    }, Ge = {
        exportToCsv (n) {
            let r = `name,issuer,secret,algorithm,digits,period,type,counter,category,sort_order
`;
            return n.forEach((e)=>{
                const t = e.account || "", s = e.service || "", i = e.type?.toUpperCase() || "TOTP", c = e.category || "", u = e.sortOrder ?? e.sort_order ?? 0;
                r += `"${t}","${s}",${e.secret},${e.algorithm || "SHA1"},${e.digits || 6},${e.period || 30},${i},${e.counter || 0},"${c}",${u}
`;
            }), r;
        }
    };
    var se = {
        exports: {}
    }, ye;
    function $e() {
        return ye || (ye = 1, (function(n, r) {
            (function(e) {
                function s(f) {
                    const o = new Uint32Array([
                        1116352408,
                        1899447441,
                        3049323471,
                        3921009573,
                        961987163,
                        1508970993,
                        2453635748,
                        2870763221,
                        3624381080,
                        310598401,
                        607225278,
                        1426881987,
                        1925078388,
                        2162078206,
                        2614888103,
                        3248222580,
                        3835390401,
                        4022224774,
                        264347078,
                        604807628,
                        770255983,
                        1249150122,
                        1555081692,
                        1996064986,
                        2554220882,
                        2821834349,
                        2952996808,
                        3210313671,
                        3336571891,
                        3584528711,
                        113926993,
                        338241895,
                        666307205,
                        773529912,
                        1294757372,
                        1396182291,
                        1695183700,
                        1986661051,
                        2177026350,
                        2456956037,
                        2730485921,
                        2820302411,
                        3259730800,
                        3345764771,
                        3516065817,
                        3600352804,
                        4094571909,
                        275423344,
                        430227734,
                        506948616,
                        659060556,
                        883997877,
                        958139571,
                        1322822218,
                        1537002063,
                        1747873779,
                        1955562222,
                        2024104815,
                        2227730452,
                        2361852424,
                        2428436474,
                        2756734187,
                        3204031479,
                        3329325298
                    ]);
                    let a = 1779033703, h = 3144134277, l = 1013904242, p = 2773480762, d = 1359893119, _ = 2600822924, b = 528734635, S = 1541459225;
                    const v = new Uint32Array(64);
                    function I(H) {
                        let Q = 0, k = H.length;
                        for(; k >= 64;){
                            let N = a, K = h, $ = l, z = p, T = d, B = _, O = b, X = S, F, R, Z, ee, re;
                            for(R = 0; R < 16; R++)Z = Q + R * 4, v[R] = (H[Z] & 255) << 24 | (H[Z + 1] & 255) << 16 | (H[Z + 2] & 255) << 8 | H[Z + 3] & 255;
                            for(R = 16; R < 64; R++)F = v[R - 2], ee = (F >>> 17 | F << 15) ^ (F >>> 19 | F << 13) ^ F >>> 10, F = v[R - 15], re = (F >>> 7 | F << 25) ^ (F >>> 18 | F << 14) ^ F >>> 3, v[R] = (ee + v[R - 7] | 0) + (re + v[R - 16] | 0) | 0;
                            for(R = 0; R < 64; R++)ee = (((T >>> 6 | T << 26) ^ (T >>> 11 | T << 21) ^ (T >>> 25 | T << 7)) + (T & B ^ ~T & O) | 0) + (X + (o[R] + v[R] | 0) | 0) | 0, re = ((N >>> 2 | N << 30) ^ (N >>> 13 | N << 19) ^ (N >>> 22 | N << 10)) + (N & K ^ N & $ ^ K & $) | 0, X = O, O = B, B = T, T = z + ee | 0, z = $, $ = K, K = N, N = ee + re | 0;
                            a = a + N | 0, h = h + K | 0, l = l + $ | 0, p = p + z | 0, d = d + T | 0, _ = _ + B | 0, b = b + O | 0, S = S + X | 0, Q += 64, k -= 64;
                        }
                    }
                    I(f);
                    let D, U = f.length % 64, L = f.length / 536870912 | 0, M = f.length << 3, J = U < 56 ? 56 : 120, C = f.slice(f.length - U, f.length);
                    for(C.push(128), D = U + 1; D < J; D++)C.push(0);
                    return C.push(L >>> 24 & 255), C.push(L >>> 16 & 255), C.push(L >>> 8 & 255), C.push(L >>> 0 & 255), C.push(M >>> 24 & 255), C.push(M >>> 16 & 255), C.push(M >>> 8 & 255), C.push(M >>> 0 & 255), I(C), [
                        a >>> 24 & 255,
                        a >>> 16 & 255,
                        a >>> 8 & 255,
                        a >>> 0 & 255,
                        h >>> 24 & 255,
                        h >>> 16 & 255,
                        h >>> 8 & 255,
                        h >>> 0 & 255,
                        l >>> 24 & 255,
                        l >>> 16 & 255,
                        l >>> 8 & 255,
                        l >>> 0 & 255,
                        p >>> 24 & 255,
                        p >>> 16 & 255,
                        p >>> 8 & 255,
                        p >>> 0 & 255,
                        d >>> 24 & 255,
                        d >>> 16 & 255,
                        d >>> 8 & 255,
                        d >>> 0 & 255,
                        _ >>> 24 & 255,
                        _ >>> 16 & 255,
                        _ >>> 8 & 255,
                        _ >>> 0 & 255,
                        b >>> 24 & 255,
                        b >>> 16 & 255,
                        b >>> 8 & 255,
                        b >>> 0 & 255,
                        S >>> 24 & 255,
                        S >>> 16 & 255,
                        S >>> 8 & 255,
                        S >>> 0 & 255
                    ];
                }
                function i(f, o, a) {
                    f = f.length <= 64 ? f : s(f);
                    const h = 64 + o.length + 4, l = new Array(h), p = new Array(64);
                    let d, _ = [];
                    for(d = 0; d < 64; d++)l[d] = 54;
                    for(d = 0; d < f.length; d++)l[d] ^= f[d];
                    for(d = 0; d < o.length; d++)l[64 + d] = o[d];
                    for(d = h - 4; d < h; d++)l[d] = 0;
                    for(d = 0; d < 64; d++)p[d] = 92;
                    for(d = 0; d < f.length; d++)p[d] ^= f[d];
                    function b() {
                        for(let S = h - 1; S >= h - 4; S--){
                            if (l[S]++, l[S] <= 255) return;
                            l[S] = 0;
                        }
                    }
                    for(; a >= 32;)b(), _ = _.concat(s(p.concat(s(l)))), a -= 32;
                    return a > 0 && (b(), _ = _.concat(s(p.concat(s(l))).slice(0, a))), _;
                }
                function c(f, o, a, h, l) {
                    let p;
                    for(m(f, (2 * a - 1) * 16, l, 0, 16), p = 0; p < 2 * a; p++)w(f, p * 16, l, 16), g(l, h), m(l, 0, f, o + p * 16, 16);
                    for(p = 0; p < a; p++)m(f, o + p * 2 * 16, f, p * 16, 16);
                    for(p = 0; p < a; p++)m(f, o + (p * 2 + 1) * 16, f, (p + a) * 16, 16);
                }
                function u(f, o) {
                    return f << o | f >>> 32 - o;
                }
                function g(f, o) {
                    m(f, 0, o, 0, 16);
                    for(let a = 8; a > 0; a -= 2)o[4] ^= u(o[0] + o[12], 7), o[8] ^= u(o[4] + o[0], 9), o[12] ^= u(o[8] + o[4], 13), o[0] ^= u(o[12] + o[8], 18), o[9] ^= u(o[5] + o[1], 7), o[13] ^= u(o[9] + o[5], 9), o[1] ^= u(o[13] + o[9], 13), o[5] ^= u(o[1] + o[13], 18), o[14] ^= u(o[10] + o[6], 7), o[2] ^= u(o[14] + o[10], 9), o[6] ^= u(o[2] + o[14], 13), o[10] ^= u(o[6] + o[2], 18), o[3] ^= u(o[15] + o[11], 7), o[7] ^= u(o[3] + o[15], 9), o[11] ^= u(o[7] + o[3], 13), o[15] ^= u(o[11] + o[7], 18), o[1] ^= u(o[0] + o[3], 7), o[2] ^= u(o[1] + o[0], 9), o[3] ^= u(o[2] + o[1], 13), o[0] ^= u(o[3] + o[2], 18), o[6] ^= u(o[5] + o[4], 7), o[7] ^= u(o[6] + o[5], 9), o[4] ^= u(o[7] + o[6], 13), o[5] ^= u(o[4] + o[7], 18), o[11] ^= u(o[10] + o[9], 7), o[8] ^= u(o[11] + o[10], 9), o[9] ^= u(o[8] + o[11], 13), o[10] ^= u(o[9] + o[8], 18), o[12] ^= u(o[15] + o[14], 7), o[13] ^= u(o[12] + o[15], 9), o[14] ^= u(o[13] + o[12], 13), o[15] ^= u(o[14] + o[13], 18);
                    for(let a = 0; a < 16; ++a)f[a] += o[a];
                }
                function w(f, o, a, h) {
                    for(let l = 0; l < h; l++)a[l] ^= f[o + l];
                }
                function m(f, o, a, h, l) {
                    for(; l--;)a[h++] = f[o++];
                }
                function A(f) {
                    if (!f || typeof f.length != "number") return !1;
                    for(let o = 0; o < f.length; o++){
                        const a = f[o];
                        if (typeof a != "number" || a % 1 || a < 0 || a >= 256) return !1;
                    }
                    return !0;
                }
                function y(f, o) {
                    if (typeof f != "number" || f % 1) throw new Error("invalid " + o);
                    return f;
                }
                function x(f, o, a, h, l, p, d) {
                    if (a = y(a, "N"), h = y(h, "r"), l = y(l, "p"), p = y(p, "dkLen"), a === 0 || (a & a - 1) !== 0) throw new Error("N must be power of 2");
                    if (a > 2147483647 / 128 / h) throw new Error("N too large");
                    if (h > 2147483647 / 128 / l) throw new Error("r too large");
                    if (!A(f)) throw new Error("password must be an array or buffer");
                    if (f = Array.prototype.slice.call(f), !A(o)) throw new Error("salt must be an array or buffer");
                    o = Array.prototype.slice.call(o);
                    let _ = i(f, o, l * 128 * h);
                    const b = new Uint32Array(l * 32 * h);
                    for(let T = 0; T < b.length; T++){
                        const B = T * 4;
                        b[T] = (_[B + 3] & 255) << 24 | (_[B + 2] & 255) << 16 | (_[B + 1] & 255) << 8 | (_[B + 0] & 255) << 0;
                    }
                    const S = new Uint32Array(64 * h), v = new Uint32Array(32 * h * a), I = 32 * h, D = new Uint32Array(16), U = new Uint32Array(16), L = l * a * 2;
                    let M = 0, J = null, C = !1, H = 0, Q = 0, k, N;
                    const K = d ? parseInt(1e3 / h) : 4294967295, $ = typeof setImmediate < "u" ? setImmediate : setTimeout, z = function() {
                        if (C) return d(new Error("cancelled"), M / L);
                        let T;
                        switch(H){
                            case 0:
                                N = Q * 32 * h, m(b, N, S, 0, I), H = 1, k = 0;
                            case 1:
                                T = a - k, T > K && (T = K);
                                for(let O = 0; O < T; O++)m(S, 0, v, (k + O) * I, I), c(S, I, h, D, U);
                                if (k += T, M += T, d) {
                                    const O = parseInt(1e3 * M / L);
                                    if (O !== J) {
                                        if (C = d(null, M / L), C) break;
                                        J = O;
                                    }
                                }
                                if (k < a) break;
                                k = 0, H = 2;
                            case 2:
                                T = a - k, T > K && (T = K);
                                for(let O = 0; O < T; O++){
                                    const X = (2 * h - 1) * 16, F = S[X] & a - 1;
                                    w(v, F * I, S, I), c(S, I, h, D, U);
                                }
                                if (k += T, M += T, d) {
                                    const O = parseInt(1e3 * M / L);
                                    if (O !== J) {
                                        if (C = d(null, M / L), C) break;
                                        J = O;
                                    }
                                }
                                if (k < a) break;
                                if (m(S, 0, b, N, I), Q++, Q < l) {
                                    H = 0;
                                    break;
                                }
                                _ = [];
                                for(let O = 0; O < b.length; O++)_.push(b[O] >> 0 & 255), _.push(b[O] >> 8 & 255), _.push(b[O] >> 16 & 255), _.push(b[O] >> 24 & 255);
                                const B = i(f, _, p);
                                return d && d(null, 1, B), B;
                        }
                        d && $(z);
                    };
                    if (!d) for(;;){
                        const T = z();
                        if (T != null) return T;
                    }
                    z();
                }
                const E = {
                    scrypt: function(f, o, a, h, l, p, d) {
                        return new Promise(function(_, b) {
                            let S = 0;
                            d && d(0), x(f, o, a, h, l, p, function(v, I, D) {
                                if (v) b(v);
                                else if (D) d && S !== 1 && d(1), _(new Uint8Array(D));
                                else if (d && I !== S) return S = I, d(I);
                            });
                        });
                    },
                    syncScrypt: function(f, o, a, h, l, p) {
                        return new Uint8Array(x(f, o, a, h, l, p));
                    }
                };
                n.exports = E;
            })();
        })(se)), se.exports;
    }
    var ze = $e();
    const oe = {
        async decryptDatabase (n, r) {
            const e = n.header.slots;
            if (!e || !e.length) throw new Error("Aegis: 找不到密钥槽");
            const t = n.db, s = n.header.params;
            let i = null;
            const c = new TextEncoder().encode(r);
            for (const y of e)if (y.type === 1) {
                const x = q(y.salt), E = await ze.scrypt(c, x, y.n, y.r, y.p, 32), f = q(y.key), o = q(y.key_params.nonce), a = q(y.key_params.tag), h = new Uint8Array(f.length + a.length);
                h.set(f), h.set(a, f.length);
                try {
                    const l = await window.crypto.subtle.importKey("raw", E, {
                        name: "AES-GCM"
                    }, !1, [
                        "decrypt"
                    ]), p = await window.crypto.subtle.decrypt({
                        name: "AES-GCM",
                        iv: o
                    }, l, h);
                    i = new Uint8Array(p);
                    break;
                } catch  {
                    continue;
                }
            }
            if (!i) throw new Error("Aegis: 密码错误或不支持的加密格式 (缺少 Scrypt)");
            const u = Fe(t), g = q(s.nonce), w = q(s.tag), m = new Uint8Array(u.length + w.length);
            m.set(u), m.set(w, u.length);
            const A = await window.crypto.subtle.importKey("raw", i, {
                name: "AES-GCM"
            }, !1, [
                "decrypt"
            ]);
            try {
                const y = await window.crypto.subtle.decrypt({
                    name: "AES-GCM",
                    iv: g
                }, A, m);
                return JSON.parse(new TextDecoder().decode(y));
            } catch  {
                throw new Error("Aegis: 数据库载荷解密失败");
            }
        },
        parseEntries (n) {
            return (n.entries || []).map((e)=>{
                const t = (e.info?.type || e.type || "").toLowerCase();
                return {
                    service: e.issuer || e.name || "Unknown",
                    account: e.name || "",
                    secret: e.info?.secret || "",
                    type: t,
                    algorithm: e.info?.algo || "SHA1",
                    digits: e.info?.digits || 6,
                    period: e.info?.period || 30,
                    counter: e.info?.counter || 0
                };
            });
        }
    }, Je = {
        exportPlaintext (n) {
            const r = new Map;
            n.forEach((s)=>{
                s.category && !r.has(s.category) && r.set(s.category, crypto.randomUUID());
            });
            const e = Array.from(r.entries()).map(([s, i])=>({
                    name: s,
                    uuid: i
                })), t = n.map((s)=>{
                const i = [];
                s.category && r.has(s.category) && i.push(r.get(s.category));
                const c = (s.type || "totp").toLowerCase(), u = c === "steam", w = u || c === "blizzard" ? "totp" : c, m = {
                    secret: s.secret,
                    algo: (s.algorithm || "SHA1").toUpperCase(),
                    digits: u ? 5 : s.digits || 6
                };
                return c === "hotp" ? m.counter = s.counter || 0 : m.period = s.period || 30, {
                    type: w,
                    uuid: crypto.randomUUID(),
                    name: s.account || s.service,
                    issuer: s.service,
                    info: m,
                    groups: i
                };
            });
            return JSON.stringify({
                version: 1,
                header: {
                    slots: null,
                    params: null
                },
                db: {
                    version: 3,
                    entries: t,
                    groups: e,
                    icons_optimized: !0
                }
            }, null, 2);
        }
    }, ge = {
        async parseEncrypted (n, r) {
            if (!r) throw new Error("MISSING_PASSWORD");
            try {
                let e = n;
                const t = typeof n == "string" ? Y(n) : n;
                t && typeof t == "object" && t.data && (e = t.data);
                const s = await Ue(e, r);
                return s.vault || s.accounts || [];
            } catch  {
                throw new Error("DECRYPTION_FAILED");
            }
        },
        parsePlaintext (n) {
            const r = typeof n == "string" ? Y(n) : n;
            return r ? Array.isArray(r.accounts) ? r.accounts : Array.isArray(r.vault) ? r.vault : Array.isArray(r.data) ? r.data : r.secrets ? r.secrets.map((e)=>{
                let t = e.account || e.label || "";
                return typeof t == "string" && t.includes(":") && (t = t.split(":").pop()?.trim() || t), {
                    service: e.issuer || e.service || e.name || "Unknown",
                    account: t,
                    secret: e.secret || "",
                    type: (e.type || "TOTP").toLowerCase(),
                    algorithm: e.algorithm || "SHA1",
                    digits: e.digits || 6,
                    period: e.period || 30,
                    counter: e.counter || 0
                };
            }) : Array.isArray(r) ? r : [] : [];
        }
    }, me = {
        async exportEncrypted (n, r) {
            if (!r) throw new Error("MISSING_PASSWORD");
            const e = n.map((u)=>{
                const { deletedAt: g, deleted_at: w, ...m } = u;
                return m;
            }), s = {
                version: "2.0",
                app: "nodeauth",
                timestamp: new Date().toISOString()
            }, i = {
                ...s,
                accounts: e
            }, c = await De(i, r);
            return JSON.stringify({
                ...s,
                encrypted: !0,
                data: c,
                note: "This file is encrypted with your export password (AES-GCM-256 + PBKDF2)."
            }, null, 2);
        },
        exportPlaintext (n) {
            const r = n.map((t)=>{
                const { deletedAt: s, deleted_at: i, ...c } = t;
                return c;
            }), e = new Date().toISOString();
            return JSON.stringify({
                version: "2.0",
                app: "nodeauth",
                timestamp: e,
                encrypted: !1,
                accounts: r
            }, null, 2);
        }
    }, Qe = {
        async exportToHtml (n) {
            const r = await j(()=>import("./qr-utils-Cc6U-Akc.js").then((t)=>t.b), __vite__mapDeps([0,1,2,3])), e = [];
            e.push(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>NodeAuth 备份报告</title>
        <style>
          body { font-family: -apple-system, system-ui, sans-serif; padding: 20px; color: #333; max-width: 1000px; margin: 0 auto; line-height: 1.5; }
          .header { text-align: center; margin-bottom: 40px; border-bottom: 2px solid #eaeaea; padding-bottom: 20px; }
          .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
          .card { border: 1px solid #ddd; border-radius: 8px; padding: 15px; text-align: center; display: flex; flex-direction: column; align-items: center; background: white; page-break-inside: avoid; }
          .qr-img { width: 160px; height: 160px; margin: 10px 0; border: 1px solid #eee; }
          .service { font-weight: bold; font-size: 1.1em; color: #1a73e8; margin-bottom: 5px; word-break: break-all; }
          .account { color: #555; font-size: 0.9em; margin-bottom: 15px; word-break: break-all; }
          .code { font-family: monospace; background: #f5f5f5; padding: 5px 10px; border-radius: 4px; font-size: 1.2em; letter-spacing: 2px; }
          .footer { text-align: center; margin-top: 50px; color: #888; font-size: 0.9em; page-break-before: auto; }
          @media print {
            body { padding: 0; }
            .no-print { display: none; }
            .card { box-shadow: none; border: 1px solid #999; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>NodeAuth 二步验证账户备份</h1>
          <p>生成时间：${new Date().toLocaleString()}</p>
          <p class="no-print" style="color: #d93025; font-weight: bold;">⚠️ 警告：此页面包含敏感信息，请妥善保管。请使用浏览器打印功能将其保存为 PDF 或打印成纸质备份。</p>
          <button class="no-print" onclick="window.print()" style="padding: 10px 20px; background: #1a73e8; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;">打印 / 导出 PDF</button>
        </div>
        <div class="grid">
    `);
            for (const t of n){
                const s = te(t);
                try {
                    const i = await r.toDataURL(s, {
                        errorCorrectionLevel: "M",
                        margin: 2
                    });
                    e.push(`
          <div class="card">
            <div class="service">${t.service}</div>
            <div class="account">${t.account || "-"}</div>
            <img class="qr-img" src="${i}" alt="QR Code">
            <div class="code">${t.secret.replace(/(.{4})/g, "$1 ").trim()}</div>
            <div style="font-size: 0.8em; color: #888; margin-top: 8px;">
                <span style="display: inline-block; background: #f0f4f8; color: #5a6b7d; padding: 2px 8px; border-radius: 12px; font-weight: 600; font-size: 0.85em; margin-right: 8px; border: 1px solid #d1d9e0;">${(t.type || "totp").toUpperCase()}</span>
                ${t.algorithm || "SHA1"} / ${t.digits}位 / ${t.period}s
            </div>
          </div>
        `);
                } catch  {}
            }
            return e.push(`
        </div>
        <div class="footer"><p>This report was securely generated in the browser for backup purposes.</p></div>
      </body>
      </html>
    `), e.join(`
`);
        }
    }, W = {
        SALT_LEN: 32,
        IV_LEN: 12,
        ITERATIONS: 1e4,
        ALGORITHM: "aes-256-gcm",
        KDF: "PBKDF2"
    }, ae = {
        async decrypt (n, r) {
            try {
                const e = r.servicesEncrypted;
                if (!e || typeof e != "string") throw new P("无效的 2FAS 加密数据：找不到 servicesEncrypted 字段", "INVALID_2FAS_ENCRYPTED");
                const t = e.split(":");
                if (t.length < 3) throw new P("无效的 2FAS 加密格式：应为 salt:iv:ciphertext", "INVALID_2FAS_FORMAT");
                const i = [
                    t[0],
                    t[1],
                    t.slice(2).join(":")
                ].map((l)=>Uint8Array.from(atob(l.replace(/\s+/g, "")), (p)=>p.charCodeAt(0))), c = (l)=>{
                    const p = l.reduce((b, S)=>b + S.length, 0), d = new Uint8Array(p);
                    let _ = 0;
                    for (const b of l)d.set(b, _), _ += b.length;
                    return d;
                };
                let u, g, w;
                const m = i.findIndex((l)=>l.length === W.IV_LEN);
                if (m !== -1 && (g = i.splice(m, 1)[0], i.length > 0)) {
                    let l = 0;
                    for(let p = 1; p < i.length; p++)i[p].length < i[l].length && (l = p);
                    u = i.splice(l, 1)[0], w = i.length === 1 ? i[0] : c(i);
                }
                if (!u || !g || !w) {
                    let l = !1;
                    const p = [
                        {
                            salt: i[1],
                            iv: i[2],
                            cipher: i[0]
                        },
                        {
                            salt: i.length > 1 && i[1].length >= 44 ? i[1].slice(0, 32) : null,
                            iv: i.length > 1 && i[1].length >= 44 ? i[1].slice(32, 44) : null,
                            cipher: i[0]
                        },
                        {
                            salt: i[0].slice(0, 32),
                            iv: i[0].slice(32, 44),
                            cipher: i[0].slice(44)
                        }
                    ];
                    for (const d of p)if (!(!d.salt || !d.iv || !d.cipher) && d.iv.length === W.IV_LEN) try {
                        const _ = new TextEncoder().encode(n), b = await crypto.subtle.importKey("raw", _, {
                            name: "PBKDF2"
                        }, !1, [
                            "deriveKey"
                        ]), S = await crypto.subtle.deriveKey({
                            name: "PBKDF2",
                            salt: d.salt,
                            iterations: W.ITERATIONS,
                            hash: "SHA-256"
                        }, b, {
                            name: "AES-GCM",
                            length: 256
                        }, !1, [
                            "decrypt"
                        ]);
                        if (d.cipher.length >= 16) {
                            const v = d.cipher.slice(d.cipher.length - 16), I = d.cipher.slice(0, d.cipher.length - 16), D = await crypto.subtle.decrypt({
                                name: "AES-GCM",
                                iv: d.iv
                            }, S, new Uint8Array([
                                ...I,
                                ...v
                            ])), U = new TextDecoder().decode(D);
                            JSON.parse(U), u = d.salt, g = d.iv, w = d.cipher, l = !0;
                            break;
                        }
                    } catch  {}
                    !l && !u && (u = i[0], g = i[1], w = i[2], u.length !== W.SALT_LEN && g.length === W.SALT_LEN && ([u, g] = [
                        g,
                        u
                    ]), g.length !== W.IV_LEN && w.length === W.IV_LEN && ([g, w] = [
                        w,
                        g
                    ]));
                }
                if (u.length < 16) throw new P(`salt 长度过短：${u.length}`, "INVALID_SALT_LEN");
                if (g.length !== W.IV_LEN) throw new P("IV 长度错误", "INVALID_IV_LEN");
                const A = new TextEncoder().encode(n), y = await crypto.subtle.importKey("raw", A, {
                    name: "PBKDF2"
                }, !1, [
                    "deriveKey"
                ]), x = await crypto.subtle.deriveKey({
                    name: "PBKDF2",
                    salt: u,
                    iterations: W.ITERATIONS,
                    hash: "SHA-256"
                }, y, {
                    name: "AES-GCM",
                    length: 256
                }, !1, [
                    "decrypt"
                ]);
                if (w.length < 16) throw new P("密文过短", "CIPHERTEXT_TOO_SHORT");
                const E = w.slice(w.length - 16), f = w.slice(0, w.length - 16), o = await crypto.subtle.decrypt({
                    name: "AES-GCM",
                    iv: g
                }, x, new Uint8Array([
                    ...f,
                    ...E
                ])), a = new TextDecoder().decode(o), h = JSON.parse(a);
                if (!Array.isArray(h)) throw new P("解密后的数据不是数组格式", "INVALID_DECRYPTED_FORMAT");
                return h;
            } catch (e) {
                throw e instanceof P ? e : new P(`2FAS 解密失败：${e.message || String(e)}`, "TWOFAS_DECRYPTION_FAILED", e);
            }
        },
        parsePlain (n) {
            return !n || !Array.isArray(n.services) ? [] : n.services.map((r)=>{
                let e = r.otp?.account || r.account || r.username || "";
                typeof e == "string" && e.includes(":") && (e = e.split(":").pop()?.trim() || e);
                const t = (r.otp?.tokenType || r.tokenType || "").toUpperCase();
                return {
                    service: r.otp?.issuer || r.name || "Unknown",
                    account: e,
                    secret: r.secret || "",
                    type: t,
                    algorithm: r.otp?.algorithm || r.algorithm || "SHA1",
                    digits: r.otp?.digits || r.digits || 6,
                    period: r.otp?.period || r.period || 30,
                    counter: r.otp?.counter || r.counter || 0
                };
            });
        }
    }, qe = {
        exportPlaintext (n) {
            const r = n.map((e, t)=>{
                const s = e.type === "steam";
                return {
                    name: e.service,
                    secret: e.secret,
                    otp: {
                        source: "manual",
                        account: e.account || "",
                        digits: s ? 5 : e.digits || 6,
                        period: e.period || 30,
                        algorithm: (e.algorithm || "SHA1").toUpperCase(),
                        tokenType: s ? "STEAM" : e.type?.toUpperCase() || "TOTP",
                        counter: e.counter || 0
                    },
                    order: {
                        position: t
                    },
                    badge: {
                        color: "Default"
                    },
                    updatedAt: Date.now(),
                    icon: {
                        selected: "Label",
                        label: {
                            text: (e.service || "?").slice(0, 2).toUpperCase(),
                            backgroundColor: "Default"
                        },
                        iconCollection: {
                            id: "A5B3FB65-4EC5-43E6-8EC1-49E24CA9E7AD"
                        }
                    }
                };
            });
            return JSON.stringify({
                schemaVersion: 4,
                appVersionCode: 50316,
                appVersionName: "5.3.16",
                appOrigin: "ios",
                groups: [],
                services: r
            });
        }
    }, ie = {
        async decrypt (n, r) {
            try {
                const e = r.salt, t = r.kdfIterations, s = r.kdfType;
                if (s !== 0) throw new P(`不支持的 KDF 类型: ${s}`, "UNSUPPORTED_BITWARDEN_KDF");
                const i = new TextEncoder().encode(e), c = new TextEncoder().encode(n), u = await crypto.subtle.importKey("raw", c, {
                    name: "PBKDF2"
                }, !1, [
                    "deriveBits"
                ]), g = await crypto.subtle.deriveBits({
                    name: "PBKDF2",
                    salt: i,
                    iterations: t,
                    hash: "SHA-256"
                }, u, 256), w = new Uint8Array(g), m = await this._hkdfExpandSha256(w, "enc", 32), A = await this._hkdfExpandSha256(w, "mac", 32), y = async (f, o, a)=>{
                    const h = f.split(".");
                    if (h[0] !== "2") throw new Error("Unsupported encryption type");
                    const l = h[1].split("|"), p = Uint8Array.from(atob(l[0]), (L)=>L.charCodeAt(0)), d = Uint8Array.from(atob(l[1]), (L)=>L.charCodeAt(0)), _ = Uint8Array.from(atob(l[2]), (L)=>L.charCodeAt(0)), b = await crypto.subtle.importKey("raw", a, {
                        name: "HMAC",
                        hash: "SHA-256"
                    }, !1, [
                        "sign"
                    ]), S = new Uint8Array(p.length + d.length);
                    S.set(p, 0), S.set(d, p.length);
                    const v = new Uint8Array(await crypto.subtle.sign("HMAC", b, S));
                    if (_.length !== v.length) return null;
                    let I = 0;
                    for(let L = 0; L < _.length; L++)I |= _[L] ^ v[L];
                    if (I !== 0) return null;
                    const D = await crypto.subtle.importKey("raw", o, {
                        name: "AES-CBC"
                    }, !1, [
                        "decrypt"
                    ]), U = await crypto.subtle.decrypt({
                        name: "AES-CBC",
                        iv: p
                    }, D, d);
                    return new TextDecoder().decode(U);
                };
                if (!await y(r.encKeyValidation_DO_NOT_EDIT, m, A)) throw new Error("MAC verification failed");
                const E = await y(r.data, m, A);
                return JSON.parse(E);
            } catch (e) {
                throw new P(`Bitwarden 解密失败: ${e.message}`, "BITWARDEN_DECRYPTION_FAILED", e);
            }
        },
        async _hkdfExpandSha256 (n, r, e) {
            const t = new TextEncoder().encode(r || ""), s = await crypto.subtle.importKey("raw", n, {
                name: "HMAC",
                hash: "SHA-256"
            }, !1, [
                "sign"
            ]), i = new Uint8Array(e);
            let c = new Uint8Array(0), u = 0, g = 1;
            for(; u < e;){
                const w = new Uint8Array(c.length + t.length + 1);
                w.set(c, 0), w.set(t, c.length), w[w.length - 1] = g & 255, c = new Uint8Array(await crypto.subtle.sign("HMAC", s, w));
                const m = Math.min(c.length, e - u);
                i.set(c.slice(0, m), u), u += m, g++;
            }
            return i;
        },
        parseJson (n) {
            const r = [];
            return !n || !Array.isArray(n.items) ? [] : (n.items.forEach((e)=>{
                const t = e.login && e.login.totp || e.totp || e.uri || "";
                if (t) {
                    let s = V(t);
                    if (s) s.service = e.name || s.service, s.account = e.login && e.login.username || e.username || s.account;
                    else {
                        const i = t.replace(/\s/g, "").toUpperCase();
                        /^[A-Z2-7]+=*$/.test(i) && (s = {
                            service: e.name || "Unknown",
                            account: e.login && e.login.username || e.username || "Unknown",
                            secret: i,
                            algorithm: "SHA1",
                            digits: 6,
                            period: 30,
                            type: "totp",
                            counter: 0,
                            category: ""
                        });
                    }
                    s && r.push(s);
                }
            }), r);
        }
    }, je = {
        parseJson (n) {
            const r = typeof n == "string" ? Y(n) : n;
            return !r || !Array.isArray(r.items) ? [] : r.items.map((e)=>{
                const t = e.login && e.login.totp || e.totp || e.uri || "";
                if (t) {
                    let s = V(t);
                    if (s) return s.service = e.name || s.service, s.account = e.login && e.login.username || e.username || s.account, s;
                }
                return null;
            }).filter(Boolean);
        }
    }, we = {
        exportToJson (n) {
            const r = n.map((e)=>{
                const t = e.type === "steam" ? `steam://${e.secret}` : te(e);
                return {
                    favorite: !1,
                    id: crypto.randomUUID().toUpperCase(),
                    login: {
                        totp: t,
                        username: e.account || ""
                    },
                    name: e.service,
                    type: 1
                };
            });
            return JSON.stringify({
                encrypted: !1,
                items: r
            });
        },
        exportToCsv (n) {
            let r = `name,secret,totp,favorite,folder
`;
            return n.forEach((e)=>{
                const t = `"${e.service}${e.account ? ":" + e.account : ""}"`, s = e.type === "steam" ? `steam://${e.secret}` : te(e);
                r += `${t},${e.secret},"${s}",0,
`;
            }), r;
        }
    }, Ae = {
        name: "Proton Authenticator (.json)",
        fileType: "application/json, text/plain",
        async parse (n, r) {
            let e;
            try {
                e = JSON.parse(n);
            } catch  {
                throw new Error("INVALID_FORMAT_OR_PASSWORD");
            }
            if (e.version !== 1 || !e.salt || !e.content) throw new Error("INVALID_FORMAT_OR_PASSWORD");
            if (!r) throw new Error("PASSWORD_REQUIRED");
            try {
                const t = atob(e.salt), s = new Uint8Array(t.length);
                for(let o = 0; o < t.length; o++)s[o] = t.charCodeAt(o);
                const i = atob(e.content), c = new Uint8Array(i.length);
                for(let o = 0; o < i.length; o++)c[o] = i.charCodeAt(o);
                const u = c.slice(0, 12), g = c.slice(12), m = (await he.hash({
                    pass: r,
                    salt: s,
                    time: 2,
                    mem: 19 * 1024,
                    hashLen: 32,
                    parallelism: 1,
                    type: he.ArgonType.Argon2id,
                    distPath: "/"
                })).hash, A = await window.crypto.subtle.importKey("raw", m, {
                    name: "AES-GCM"
                }, !1, [
                    "decrypt"
                ]), y = new TextEncoder().encode("proton.authenticator.export.v1"), x = await window.crypto.subtle.decrypt({
                    name: "AES-GCM",
                    iv: u,
                    additionalData: y,
                    tagLength: 128
                }, A, g), E = new TextDecoder().decode(x), f = JSON.parse(E);
                return this.parsePlaintext(f);
            } catch (t) {
                throw ue.error("Proton Authenticator decryption failed:", t), new Error("INVALID_FORMAT_OR_PASSWORD");
            }
        },
        parsePlaintext (n) {
            const e = (typeof n == "string" ? JSON.parse(n) : n).entries || [], t = [];
            for (const s of e)if (s.content && s.content.uri) {
                const i = V(s.content.uri);
                i && (s.content.name && (i.account = s.content.name), (!i.service || i.service === "Unknown") && (i.service = s.content.entry_type || "Unknown"), t.push(i));
            }
            return t;
        }
    }, Ye = {
        exportPlaintext (n) {
            const r = {
                version: 1,
                entries: n.map((e)=>{
                    const t = e.type === "steam", s = t ? `steam://${e.secret}` : te(e);
                    return {
                        id: crypto.randomUUID(),
                        content: {
                            uri: s,
                            entry_type: t ? "Steam" : "Totp",
                            name: e.account || e.service
                        },
                        note: e.category || null
                    };
                })
            };
            return JSON.stringify(r, null, 2);
        }
    }, Xe = {
        name: "Proton Pass (.pgp)",
        fileType: "text/plain",
        async parse (n, r) {
            try {
                const e = await be("openpgp"), t = e?.default || e, s = await t.readMessage({
                    armoredMessage: n
                }), { data: i } = await t.decrypt({
                    message: s,
                    passwords: [
                        r
                    ],
                    format: "utf8"
                }), c = JSON.parse(i), u = [], g = c.vaults || {};
                for(const w in g){
                    const A = g[w].items || [];
                    for (const y of A){
                        const x = y.data || {}, E = x.content || {}, f = x.metadata || {};
                        if (E.totpUri) {
                            const o = V(E.totpUri);
                            o && (f.name && (o.service = f.name), E.itemUsername && (o.account = E.itemUsername), u.push(o));
                        }
                    }
                }
                return u;
            } catch (e) {
                throw ue.error("Proton Pass PGP decryption failed:", e), new Error("INVALID_FORMAT_OR_PASSWORD");
            }
        }
    }, Ze = {
        isEnteEncrypted (n) {
            return n && typeof n.kdfParams == "object" && typeof n.encryptedData == "string" && typeof n.encryptionNonce == "string";
        },
        async decryptAndParse (n, r) {
            let e;
            try {
                e = typeof n == "string" ? JSON.parse(n) : n;
            } catch  {
                throw new Error("INVALID_FORMAT_OR_PASSWORD");
            }
            if (!this.isEnteEncrypted(e)) throw new Error("INVALID_FORMAT_OR_PASSWORD");
            if (!r) throw new Error("PASSWORD_REQUIRED");
            const t = ce(e.kdfParams.salt), s = ce(e.encryptionNonce), i = ce(e.encryptedData), { opsLimit: c, memLimit: u } = e.kdfParams, g = Math.floor(u / 1024);
            let w;
            try {
                w = await Ce({
                    password: r,
                    salt: t,
                    parallelism: 1,
                    iterations: c,
                    memorySize: g,
                    hashLength: 32,
                    outputType: "binary"
                });
            } catch  {
                throw new Error("INVALID_FORMAT_OR_PASSWORD");
            }
            let m;
            try {
                const E = await et(), f = E.crypto_secretstream_xchacha20poly1305_init_pull(s, w), o = E.crypto_secretstream_xchacha20poly1305_pull(f, i);
                if (!o || !o.message) throw new Error("no result");
                m = o.message;
            } catch  {
                throw new Error("INVALID_FORMAT_OR_PASSWORD");
            }
            const y = new TextDecoder().decode(m).split(`
`), x = [];
            for (const E of y){
                const f = E.trim();
                if (!f.startsWith("otpauth://")) continue;
                const o = V(f);
                o && o.secret && x.push(o);
            }
            return x;
        }
    };
    function ce(n) {
        const r = n.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(n.length / 4) * 4, "="), e = atob(r), t = new Uint8Array(e.length);
        for(let s = 0; s < e.length; s++)t[s] = e.charCodeAt(s);
        return t;
    }
    let ne = null;
    async function et() {
        if (ne) return ne;
        const n = await be("libsodium"), r = n?.default || n;
        return await r.ready, ne = r, ne;
    }
    let tt, rt, nt, st, ot;
    tt = {
        async parse (n) {
            const r = typeof n == "string" ? Y(n) : n;
            if (!r || !r.shared_secret) throw new P("无效的 Steam maFile: 找不到 shared_secret", "INVALID_MAFILE");
            const t = ((i)=>{
                const c = atob(i.trim()), u = new Uint8Array(c.length);
                for(let y = 0; y < c.length; y++)u[y] = c.charCodeAt(y);
                const g = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
                let w = 0, m = 0, A = "";
                for(let y = 0; y < u.length; y++)for(m = m << 8 | u[y], w += 8; w >= 5;)w -= 5, A += g[m >>> w & 31];
                for(w > 0 && (A += g[m << 5 - w & 31]); A.length % 8;)A += "=";
                return A;
            })(r.shared_secret);
            let s = r.account_name || "Steam Account";
            return typeof s == "string" && s.includes(":") && (s = s.split(":").pop().trim() || s), [
                {
                    service: "Steam",
                    account: s,
                    secret: t,
                    type: "steam",
                    algorithm: "SHA1",
                    digits: 5,
                    period: 30
                }
            ];
        }
    };
    rt = {
        async parse (n) {
            try {
                const r = n instanceof Uint8Array ? n : new Uint8Array(n), t = Ne(r)["export.data"];
                if (!t) throw new Error("未能在 .1pux 文件中找到 export.data");
                const s = new TextDecoder().decode(t), i = JSON.parse(s), c = [];
                return (i.accounts || []).forEach((g)=>{
                    (g.vaults || []).forEach((m)=>{
                        (m.items || []).forEach((y)=>{
                            const x = y.overview?.title || "Unknown", E = y.overview?.subtitle || "", f = (o)=>{
                                Array.isArray(o) && o.forEach((a)=>{
                                    a.value && typeof a.value == "object" && a.value.totp && c.push({
                                        service: x,
                                        account: E,
                                        secret: a.value.totp,
                                        algorithm: "SHA1",
                                        digits: 6,
                                        period: 30
                                    });
                                });
                            };
                            f(y.details?.loginFields), Array.isArray(y.details?.sections) && y.details.sections.forEach((o)=>f(o.fields));
                        });
                    });
                }), c;
            } catch (r) {
                throw new P("解析 1Password 备份失败: " + (r.message || String(r)), "ONEPASSWORD_PARSE_FAILED", r);
            }
        }
    };
    nt = {
        parse (n) {
            const r = typeof n == "string" ? Y(n) : n;
            return !r || !Array.isArray(r.accounts) ? [] : r.accounts.map((e)=>({
                    service: e.issuerName || e.originalIssuerName || "Unknown",
                    account: e.userName || e.originalUserName || "",
                    secret: e.secret || "",
                    type: (e.type || "TOTP").toLowerCase(),
                    algorithm: e.algorithm || "SHA1",
                    digits: e.digits || 6,
                    period: e.timeStep || 30,
                    counter: e.counter || 0
                }));
        }
    };
    st = {
        parse (n) {
            if (!n) return [];
            const r = n.split(`
`), e = [];
            return r.forEach((t)=>{
                const s = t.trim();
                if (s.startsWith("otpauth://") || s.startsWith("steam://")) {
                    const i = V(s);
                    i && e.push(i);
                }
            }), e;
        }
    };
    ot = {
        exportToText (n) {
            return n.map((r)=>te(r)).join(`
`);
        }
    };
    at = {
        nodeauth_encrypted: {
            requiresPassword: !0
        },
        "2fas_encrypted": {
            requiresPassword: !0
        },
        bitwarden_pass_encrypted: {
            requiresPassword: !0
        },
        aegis_encrypted: {
            requiresPassword: !0
        },
        proton_auth_encrypted: {
            requiresPassword: !0
        },
        proton_pass_pgp: {
            requiresPassword: !0
        },
        ente_encrypted: {
            requiresPassword: !0
        },
        phonefactor: {
            isBinary: !0,
            isGroup: !0
        },
        phonefactor_group: {
            isBinary: !0,
            isGroup: !0
        },
        "1password_pux": {
            isBinary: !0
        },
        steam_mafile: {
            isBinary: !1
        }
    };
    _t = {
        getStrategyMeta (n) {
            return at[n] || {
                requiresPassword: !1,
                isBinary: !1,
                isGroup: !1
            };
        },
        getGroupInfo (n) {
            const r = n.toLowerCase();
            if (r.includes("phonefactor")) {
                let e = "main";
                return r.includes("-wal") && (e = "wal"), r.includes("-shm") && (e = "shm"), {
                    groupId: "phonefactor_group",
                    role: e
                };
            }
            return null;
        },
        detectFileType (n, r) {
            return Me.detect(n, r);
        },
        deduplicateVault (n) {
            const r = (t, s)=>`${(t || "").toString().trim().toLowerCase()}:${(s || "").toString().trim().toLowerCase()}`, e = new Set;
            return n.filter((t)=>{
                const s = r(t.service, t.account);
                return e.has(s) ? !1 : (e.add(s), !0);
            });
        },
        async fetchAllVault () {
            const n = await fe.getVault({
                limit: 9999
            });
            if (!n.success) throw new P("无法获取账号数据", "VAULT_FETCH_FAILED");
            const r = n.vault || [];
            try {
                const { useAppLockStore: e } = await j(async ()=>{
                    const { useAppLockStore: c } = await import("./index-BJE2ExGB.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }).then((u)=>u.b);
                    return {
                        useAppLockStore: c
                    };
                }, __vite__mapDeps([4,5,6,2,1,3,7,8,9])), { unmaskSecretFront: t } = await j(async ()=>{
                    const { unmaskSecretFront: c } = await import("./index-BJE2ExGB.js").then(async (m)=>{
                        await m.__tla;
                        return m;
                    }).then((u)=>u.m);
                    return {
                        unmaskSecretFront: c
                    };
                }, __vite__mapDeps([4,5,6,2,1,3,7,8,9])), i = await e().getAllMaskingKeys();
                if (i) return await Promise.all(r.map(async (c)=>{
                    if (c.secret && c.secret.startsWith("nodeauth:")) try {
                        const u = await t(c.secret, i);
                        return {
                            ...c,
                            secret: u
                        };
                    } catch  {
                        return c;
                    }
                    return c;
                }));
            } catch  {}
            return r;
        },
        async exportData (n, r, e) {
            const t = _e[r];
            switch(t && Array.isArray(n) && (n = n.filter((s)=>t.includes((s.type || "totp").toLowerCase()))), r){
                case "nodeauth_json":
                    return me.exportPlaintext(n);
                case "nodeauth_encrypted":
                    return await me.exportEncrypted(n, e);
                case "2fas":
                    return qe.exportPlaintext(n);
                case "aegis":
                    return Je.exportPlaintext(n);
                case "proton_auth":
                    return Ye.exportPlaintext(n);
                case "generic_otpauth":
                    return ot.exportToText(n);
                case "bitwarden_auth_csv":
                    return we.exportToCsv(n);
                case "bitwarden_auth_json":
                    return we.exportToJson(n);
                case "nodeauth_csv":
                    return Ge.exportToCsv(n);
                default:
                    throw new P("未知的导出类型: " + r, "UNKNOWN_EXPORT_TYPE");
            }
        },
        async parseImportData (n, r, e) {
            let t = [];
            if (r === "phonefactor" || r === "phonefactor_group") return await Ve.parse(n);
            if (r === "1password_pux") return await rt.parse(n);
            if (r === "steam_mafile") return await tt.parse(n);
            let s = n;
            (n instanceof ArrayBuffer || n instanceof Uint8Array) && (s = new TextDecoder("utf-8", {
                fatal: !1
            }).decode(n instanceof Uint8Array ? n : new Uint8Array(n)));
            const i = (c)=>typeof c == "string" ? JSON.parse(c) : c;
            switch(r){
                case "nodeauth_json":
                    t = ge.parsePlaintext(s);
                    break;
                case "nodeauth_encrypted":
                    t = await ge.parseEncrypted(s, e);
                    break;
                case "2fas":
                    t = ae.parsePlain(i(s));
                    break;
                case "2fas_encrypted":
                    const c = await ae.decrypt(e, i(s));
                    t = ae.parsePlain({
                        services: c
                    });
                    break;
                case "bitwarden_pass_json":
                    t = ie.parseJson(i(s));
                    break;
                case "bitwarden_auth_json":
                    t = je.parseJson(i(s));
                    break;
                case "bitwarden_pass_encrypted":
                    const u = await ie.decrypt(e, i(s));
                    t = ie.parseJson(u);
                    break;
                case "aegis":
                    t = oe.parseEntries(i(s).db || i(s));
                    break;
                case "aegis_encrypted":
                    const g = await oe.decryptDatabase(i(s), e);
                    t = oe.parseEntries(g);
                    break;
                case "proton_auth":
                    t = Ae.parsePlaintext(s);
                    break;
                case "proton_auth_encrypted":
                    t = await Ae.parse(s, e);
                    break;
                case "proton_pass_pgp":
                    t = await Xe.parse(s, e);
                    break;
                case "ente_encrypted":
                    t = await Ze.decryptAndParse(s, e);
                    break;
                case "generic_otpauth":
                    t = st.parse(s);
                    break;
                case "lastpass_auth_json":
                    t = nt.parse(s);
                    break;
                case "bitwarden_pass_csv":
                case "bitwarden_auth_csv":
                case "1password_csv":
                case "proton_pass_csv":
                case "dashlane_csv":
                case "nodeauth_csv":
                    t = We.parseCsv(s);
                    break;
            }
            return t.map((c)=>{
                typeof c.account == "string" && c.account.includes(":") && (c.account = c.account.split(":").pop()?.trim() || c.account), (!c.account || c.account.trim() === "") && (c.account = c.service || "Unknown Account");
                const u = pe(c);
                return u.id = c.id, u;
            }).filter((c)=>c && c.secret && c.service);
        },
        async exportAsGoogleAuthMigration (n) {
            return await Ke.exportToGoogleAuth(n);
        },
        async parseGoogleAuthQrImageFile (n) {
            return await He.parseImage(n);
        },
        async exportAsHtml (n) {
            return await Qe.exportToHtml(n);
        },
        async saveImportedVault (n) {
            const { useAppLockStore: r } = await j(async ()=>{
                const { useAppLockStore: i } = await import("./index-BJE2ExGB.js").then(async (m)=>{
                    await m.__tla;
                    return m;
                }).then((c)=>c.b);
                return {
                    useAppLockStore: i
                };
            }, __vite__mapDeps([4,5,6,2,1,3,7,8,9])), { maskSecretFront: e } = await j(async ()=>{
                const { maskSecretFront: i } = await import("./index-BJE2ExGB.js").then(async (m)=>{
                    await m.__tla;
                    return m;
                }).then((c)=>c.m);
                return {
                    maskSecretFront: i
                };
            }, __vite__mapDeps([4,5,6,2,1,3,7,8,9])), s = await r().getMaskingKey();
            if (s) for (let i of n)i.secret && !i.secret.startsWith("nodeauth:") && (i.secret = await e(i.secret, s));
            return await fe.importVault(n);
        }
    };
});
export { at as MIGRATION_STRATEGY_META, _t as dataMigrationService, __tla };
