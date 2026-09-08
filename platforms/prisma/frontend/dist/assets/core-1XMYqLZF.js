const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/web3-vendor-DJNYHj_t.js","assets/pdf-utils-CDJbbqXy.js","assets/compression-utils-BzBbrBKd.js","assets/element-plus-CTp1djr_.js","assets/vue-core-DHcoxuim.js","assets/element-plus-CqJ-3YyC.css","assets/features-BriXm9vV.js","assets/basic-BAc7ZafT.js","assets/index-jJt55ioD.js","assets/qr-utils-Cc6U-Akc.js","assets/w3m-modal-CKywMyBY.js"])))=>i.map(i=>d[i]);
import { _ as Ut, __tla as __tla_0 } from "./pdf-utils-CDJbbqXy.js";
import { a as Yn, e as Nt, G as Ns, U as As, f as An, h as At, b as bs, t as bn, N as Is, __tla as __tla_1 } from "./web3-vendor-DJNYHj_t.js";
let Ma, Y, Cn, Ze, Ua, tt, wt, Ba, hn, xa, Wa, us, It, M, Xn, f, J, is, T, me, ie, Oa, pe, ve, Pt, Re, La, V, cs, X, Q, ln, ma, Da, he, oe, N, Ke, ue, Lt, v, c, g, Mt, m, te, h, L, xs, E, ke, U, ts, K, I, y, Ae, C, Ar, Ue;
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
    const Jn = {
        isLowerCaseMatch (e, t) {
            return e?.toLowerCase() === t?.toLowerCase();
        }
    };
    var In = {};
    let Qn;
    h = {
        WC_NAME_SUFFIX: ".reown.id",
        WC_NAME_SUFFIX_LEGACY: ".wcn.id",
        BLOCKCHAIN_API_RPC_URL: "https://rpc.walletconnect.org",
        PULSE_API_URL: "https://pulse.walletconnect.org",
        W3M_API_URL: "https://api.web3modal.org",
        CONNECTOR_ID: {
            WALLET_CONNECT: "walletConnect",
            INJECTED: "injected",
            WALLET_STANDARD: "announced",
            COINBASE: "coinbaseWallet",
            COINBASE_SDK: "coinbaseWalletSDK",
            BASE_ACCOUNT: "baseAccount",
            SAFE: "safe",
            LEDGER: "ledger",
            OKX: "okx",
            EIP6963: "eip6963",
            AUTH: "AUTH"
        },
        CONNECTOR_NAMES: {
            AUTH: "Auth"
        },
        AUTH_CONNECTOR_SUPPORTED_CHAINS: [
            "eip155",
            "solana"
        ],
        LIMITS: {
            PENDING_TRANSACTIONS: 99
        },
        CHAIN: {
            EVM: "eip155",
            SOLANA: "solana",
            POLKADOT: "polkadot",
            BITCOIN: "bip122",
            TON: "ton"
        },
        CHAIN_NAME_MAP: {
            eip155: "EVM Networks",
            solana: "Solana",
            polkadot: "Polkadot",
            bip122: "Bitcoin",
            cosmos: "Cosmos",
            sui: "Sui",
            stacks: "Stacks",
            ton: "TON"
        },
        ADAPTER_TYPES: {
            BITCOIN: "bitcoin",
            SOLANA: "solana",
            WAGMI: "wagmi",
            ETHERS: "ethers",
            ETHERS5: "ethers5",
            TON: "ton"
        },
        USDT_CONTRACT_ADDRESSES: [
            "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
            "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
            "0x919C1c267BC06a7039e03fcc2eF738525769109c",
            "0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e",
            "0x55d398326f99059fF775485246999027B3197955",
            "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"
        ],
        SOLANA_SPL_TOKEN_ADDRESSES: {
            SOL: "So11111111111111111111111111111111111111112"
        },
        NATIVE_IMAGE_IDS_BY_NAMESPACE: {
            eip155: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
            solana: "3e8119e5-2a6f-4818-c50c-1937011d5900",
            bip122: "0b4838db-0161-4ffe-022d-532bf03dba00"
        },
        TOKEN_SYMBOLS_BY_ADDRESS: {
            "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": "USDC",
            "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913": "USDC",
            "0x0b2c639c533813f4aa9d7837caf62653d097ff85": "USDC",
            "0xaf88d065e77c8cc2239327c5edb3a432268e5831": "USDC",
            "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359": "USDC",
            "0x2791bca1f2de4661ed88a30c99a7a9449aa84174": "USDC",
            EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v: "USDC",
            "0xdac17f958d2ee523a2206206994597c13d831ec7": "USDT",
            "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58": "USDT",
            "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9": "USDT",
            "0xc2132d05d31c914a87c6611c10748aeb04b58e8f": "USDT",
            Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB: "USDT"
        },
        HTTP_STATUS_CODES: {
            SERVER_ERROR: 500,
            TOO_MANY_REQUESTS: 429,
            SERVICE_UNAVAILABLE: 503,
            FORBIDDEN: 403
        },
        UNSUPPORTED_NETWORK_NAME: "Unknown Network",
        SECURE_SITE_SDK_ORIGIN: (typeof process < "u" && typeof In < "u" ? In.NEXT_PUBLIC_SECURE_SITE_ORIGIN : void 0) || "https://secure.walletconnect.org",
        REMOTE_FEATURES_ALERTS: {
            MULTI_WALLET_NOT_ENABLED: {
                DEFAULT: {
                    displayMessage: "Multi-Wallet Not Enabled",
                    debugMessage: "Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com."
                },
                CONNECTIONS_HOOK: {
                    displayMessage: "Multi-Wallet Not Enabled",
                    debugMessage: "Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnections hook."
                },
                CONNECTION_HOOK: {
                    displayMessage: "Multi-Wallet Not Enabled",
                    debugMessage: "Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnection hook."
                }
            },
            HEADLESS_NOT_ENABLED: {
                DEFAULT: {
                    displayMessage: "",
                    debugMessage: "Headless support is not enabled. Please enable it with the features.headless option in the AppKit configuration and make sure your current plan supports it."
                }
            }
        },
        IS_DEVELOPMENT: typeof process < "u" && !1,
        DEFAULT_ALLOWED_ANCESTORS: [
            "http://localhost:*",
            "https://localhost:*",
            "http://127.0.0.1:*",
            "https://127.0.0.1:*",
            "https://*.pages.dev",
            "https://*.vercel.app",
            "https://*.ngrok-free.app",
            "https://secure-mobile.walletconnect.com",
            "https://secure-mobile.walletconnect.org"
        ],
        METMASK_CONNECTOR_NAME: "MetaMask",
        TRUST_CONNECTOR_NAME: "Trust Wallet",
        SOLFLARE_CONNECTOR_NAME: "Solflare",
        PHANTOM_CONNECTOR_NAME: "Phantom",
        COIN98_CONNECTOR_NAME: "Coin98",
        MAGIC_EDEN_CONNECTOR_NAME: "Magic Eden",
        BACKPACK_CONNECTOR_NAME: "Backpack",
        BITGET_CONNECTOR_NAME: "Bitget Wallet",
        FRONTIER_CONNECTOR_NAME: "Frontier",
        XVERSE_CONNECTOR_NAME: "Xverse Wallet",
        LEATHER_CONNECTOR_NAME: "Leather",
        OKX_CONNECTOR_NAME: "OKX Wallet",
        BINANCE_CONNECTOR_NAME: "Binance Wallet",
        EIP155: "eip155",
        ADD_CHAIN_METHOD: "wallet_addEthereumChain",
        EIP6963_ANNOUNCE_EVENT: "eip6963:announceProvider",
        EIP6963_REQUEST_EVENT: "eip6963:requestProvider",
        CONNECTOR_RDNS_MAP: {
            coinbaseWallet: "com.coinbase.wallet",
            coinbaseWalletSDK: "com.coinbase.wallet"
        },
        CONNECTOR_TYPE_EXTERNAL: "EXTERNAL",
        CONNECTOR_TYPE_WALLET_CONNECT: "WALLET_CONNECT",
        CONNECTOR_TYPE_INJECTED: "INJECTED",
        CONNECTOR_TYPE_ANNOUNCED: "ANNOUNCED",
        CONNECTOR_TYPE_AUTH: "AUTH",
        CONNECTOR_TYPE_MULTI_CHAIN: "MULTI_CHAIN",
        CONNECTOR_TYPE_W3M_AUTH: "AUTH"
    };
    Xn = {
        caipNetworkIdToNumber (e) {
            return e ? Number(e.split(":")[1]) : void 0;
        },
        parseEvmChainId (e) {
            return typeof e == "string" ? this.caipNetworkIdToNumber(e) : e;
        },
        getNetworksByNamespace (e, t) {
            return e?.filter((n)=>n.chainNamespace === t) || [];
        },
        getFirstNetworkByNamespace (e, t) {
            return this.getNetworksByNamespace(e, t)[0];
        },
        getNetworkNameByCaipNetworkId (e, t) {
            if (!t) return;
            const n = e.find((r)=>r.caipNetworkId === t);
            if (n) return n.name;
            const [s] = t.split(":");
            return h.CHAIN_NAME_MAP?.[s] || void 0;
        }
    };
    Qn = [
        "eip155",
        "solana",
        "polkadot",
        "bip122",
        "cosmos",
        "sui",
        "stacks"
    ];
    var ys = 20, Ss = 1, je = 1e6, yn = 1e6, _s = -7, Ts = 21, ks = !1, mt = "[big.js] ", qe = mt + "Invalid ", jt = qe + "decimal places", vs = qe + "rounding mode", Zn = mt + "Division by zero", j = {}, Ie = void 0, Os = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    function es() {
        function e(t) {
            var n = this;
            if (!(n instanceof e)) return t === Ie ? es() : new e(t);
            if (t instanceof e) n.s = t.s, n.e = t.e, n.c = t.c.slice();
            else {
                if (typeof t != "string") {
                    if (e.strict === !0 && typeof t != "bigint") throw TypeError(qe + "value");
                    t = t === 0 && 1 / t < 0 ? "-0" : String(t);
                }
                Rs(n, t);
            }
            n.constructor = e;
        }
        return e.prototype = j, e.DP = ys, e.RM = Ss, e.NE = _s, e.PE = Ts, e.strict = ks, e.roundDown = 0, e.roundHalfUp = 1, e.roundHalfEven = 2, e.roundUp = 3, e;
    }
    function Rs(e, t) {
        var n, s, r;
        if (!Os.test(t)) throw Error(qe + "number");
        for(e.s = t.charAt(0) == "-" ? (t = t.slice(1), -1) : 1, (n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (s = t.search(/e/i)) > 0 ? (n < 0 && (n = s), n += +t.slice(s + 1), t = t.substring(0, s)) : n < 0 && (n = t.length), r = t.length, s = 0; s < r && t.charAt(s) == "0";)++s;
        if (s == r) e.c = [
            e.e = 0
        ];
        else {
            for(; r > 0 && t.charAt(--r) == "0";);
            for(e.e = n - s - 1, e.c = [], n = 0; s <= r;)e.c[n++] = +t.charAt(s++);
        }
        return e;
    }
    function ze(e, t, n, s) {
        var r = e.c;
        if (n === Ie && (n = e.constructor.RM), n !== 0 && n !== 1 && n !== 2 && n !== 3) throw Error(vs);
        if (t < 1) s = n === 3 && (s || !!r[0]) || t === 0 && (n === 1 && r[0] >= 5 || n === 2 && (r[0] > 5 || r[0] === 5 && (s || r[1] !== Ie))), r.length = 1, s ? (e.e = e.e - t + 1, r[0] = 1) : r[0] = e.e = 0;
        else if (t < r.length) {
            if (s = n === 1 && r[t] >= 5 || n === 2 && (r[t] > 5 || r[t] === 5 && (s || r[t + 1] !== Ie || r[t - 1] & 1)) || n === 3 && (s || !!r[0]), r.length = t, s) {
                for(; ++r[--t] > 9;)if (r[t] = 0, t === 0) {
                    ++e.e, r.unshift(1);
                    break;
                }
            }
            for(t = r.length; !r[--t];)r.pop();
        }
        return e;
    }
    function Ge(e, t, n) {
        var s = e.e, r = e.c.join(""), a = r.length;
        if (t) r = r.charAt(0) + (a > 1 ? "." + r.slice(1) : "") + (s < 0 ? "e" : "e+") + s;
        else if (s < 0) {
            for(; ++s;)r = "0" + r;
            r = "0." + r;
        } else if (s > 0) if (++s > a) for(s -= a; s--;)r += "0";
        else s < a && (r = r.slice(0, s) + "." + r.slice(s));
        else a > 1 && (r = r.charAt(0) + "." + r.slice(1));
        return e.s < 0 && n ? "-" + r : r;
    }
    j.abs = function() {
        var e = new this.constructor(this);
        return e.s = 1, e;
    };
    j.cmp = function(e) {
        var t, n = this, s = n.c, r = (e = new n.constructor(e)).c, a = n.s, o = e.s, i = n.e, d = e.e;
        if (!s[0] || !r[0]) return s[0] ? a : r[0] ? -o : 0;
        if (a != o) return a;
        if (t = a < 0, i != d) return i > d ^ t ? 1 : -1;
        for(o = (i = s.length) < (d = r.length) ? i : d, a = -1; ++a < o;)if (s[a] != r[a]) return s[a] > r[a] ^ t ? 1 : -1;
        return i == d ? 0 : i > d ^ t ? 1 : -1;
    };
    j.div = function(e) {
        var t = this, n = t.constructor, s = t.c, r = (e = new n(e)).c, a = t.s == e.s ? 1 : -1, o = n.DP;
        if (o !== ~~o || o < 0 || o > je) throw Error(jt);
        if (!r[0]) throw Error(Zn);
        if (!s[0]) return e.s = a, e.c = [
            e.e = 0
        ], e;
        var i, d, l, u, p, b = r.slice(), O = i = r.length, A = s.length, S = s.slice(0, i), k = S.length, x = e, P = x.c = [], ne = 0, Ee = o + (x.e = t.e - e.e) + 1;
        for(x.s = a, a = Ee < 0 ? 0 : Ee, b.unshift(0); k++ < i;)S.push(0);
        do {
            for(l = 0; l < 10; l++){
                if (i != (k = S.length)) u = i > k ? 1 : -1;
                else for(p = -1, u = 0; ++p < i;)if (r[p] != S[p]) {
                    u = r[p] > S[p] ? 1 : -1;
                    break;
                }
                if (u < 0) {
                    for(d = k == i ? r : b; k;){
                        if (S[--k] < d[k]) {
                            for(p = k; p && !S[--p];)S[p] = 9;
                            --S[p], S[k] += 10;
                        }
                        S[k] -= d[k];
                    }
                    for(; !S[0];)S.shift();
                } else break;
            }
            P[ne++] = u ? l : ++l, S[0] && u ? S[k] = s[O] || 0 : S = [
                s[O]
            ];
        }while ((O++ < A || S[0] !== Ie) && a--);
        return !P[0] && ne != 1 && (P.shift(), x.e--, Ee--), ne > Ee && ze(x, Ee, n.RM, S[0] !== Ie), x;
    };
    j.eq = function(e) {
        return this.cmp(e) === 0;
    };
    j.gt = function(e) {
        return this.cmp(e) > 0;
    };
    j.gte = function(e) {
        return this.cmp(e) > -1;
    };
    j.lt = function(e) {
        return this.cmp(e) < 0;
    };
    j.lte = function(e) {
        return this.cmp(e) < 1;
    };
    j.minus = j.sub = function(e) {
        var t, n, s, r, a = this, o = a.constructor, i = a.s, d = (e = new o(e)).s;
        if (i != d) return e.s = -d, a.plus(e);
        var l = a.c.slice(), u = a.e, p = e.c, b = e.e;
        if (!l[0] || !p[0]) return p[0] ? e.s = -d : l[0] ? e = new o(a) : e.s = 1, e;
        if (i = u - b) {
            for((r = i < 0) ? (i = -i, s = l) : (b = u, s = p), s.reverse(), d = i; d--;)s.push(0);
            s.reverse();
        } else for(n = ((r = l.length < p.length) ? l : p).length, i = d = 0; d < n; d++)if (l[d] != p[d]) {
            r = l[d] < p[d];
            break;
        }
        if (r && (s = l, l = p, p = s, e.s = -e.s), (d = (n = p.length) - (t = l.length)) > 0) for(; d--;)l[t++] = 0;
        for(d = t; n > i;){
            if (l[--n] < p[n]) {
                for(t = n; t && !l[--t];)l[t] = 9;
                --l[t], l[n] += 10;
            }
            l[n] -= p[n];
        }
        for(; l[--d] === 0;)l.pop();
        for(; l[0] === 0;)l.shift(), --b;
        return l[0] || (e.s = 1, l = [
            b = 0
        ]), e.c = l, e.e = b, e;
    };
    j.mod = function(e) {
        var t, n = this, s = n.constructor, r = n.s, a = (e = new s(e)).s;
        if (!e.c[0]) throw Error(Zn);
        return n.s = e.s = 1, t = e.cmp(n) == 1, n.s = r, e.s = a, t ? new s(n) : (r = s.DP, a = s.RM, s.DP = s.RM = 0, n = n.div(e), s.DP = r, s.RM = a, this.minus(n.times(e)));
    };
    j.neg = function() {
        var e = new this.constructor(this);
        return e.s = -e.s, e;
    };
    j.plus = j.add = function(e) {
        var t, n, s, r = this, a = r.constructor;
        if (e = new a(e), r.s != e.s) return e.s = -e.s, r.minus(e);
        var o = r.e, i = r.c, d = e.e, l = e.c;
        if (!i[0] || !l[0]) return l[0] || (i[0] ? e = new a(r) : e.s = r.s), e;
        if (i = i.slice(), t = o - d) {
            for(t > 0 ? (d = o, s = l) : (t = -t, s = i), s.reverse(); t--;)s.push(0);
            s.reverse();
        }
        for(i.length - l.length < 0 && (s = l, l = i, i = s), t = l.length, n = 0; t; i[t] %= 10)n = (i[--t] = i[t] + l[t] + n) / 10 | 0;
        for(n && (i.unshift(n), ++d), t = i.length; i[--t] === 0;)i.pop();
        return e.c = i, e.e = d, e;
    };
    j.pow = function(e) {
        var t = this, n = new t.constructor("1"), s = n, r = e < 0;
        if (e !== ~~e || e < -yn || e > yn) throw Error(qe + "exponent");
        for(r && (e = -e); e & 1 && (s = s.times(t)), e >>= 1, !!e;)t = t.times(t);
        return r ? n.div(s) : s;
    };
    j.prec = function(e, t) {
        if (e !== ~~e || e < 1 || e > je) throw Error(qe + "precision");
        return ze(new this.constructor(this), e, t);
    };
    j.round = function(e, t) {
        if (e === Ie) e = 0;
        else if (e !== ~~e || e < -je || e > je) throw Error(jt);
        return ze(new this.constructor(this), e + this.e + 1, t);
    };
    j.sqrt = function() {
        var e, t, n, s = this, r = s.constructor, a = s.s, o = s.e, i = new r("0.5");
        if (!s.c[0]) return new r(s);
        if (a < 0) throw Error(mt + "No square root");
        a = Math.sqrt(+Ge(s, !0, !0)), a === 0 || a === 1 / 0 ? (t = s.c.join(""), t.length + o & 1 || (t += "0"), a = Math.sqrt(t), o = ((o + 1) / 2 | 0) - (o < 0 || o & 1), e = new r((a == 1 / 0 ? "5e" : (a = a.toExponential()).slice(0, a.indexOf("e") + 1)) + o)) : e = new r(a + ""), o = e.e + (r.DP += 4);
        do n = e, e = i.times(n.plus(s.div(n)));
        while (n.c.slice(0, o).join("") !== e.c.slice(0, o).join(""));
        return ze(e, (r.DP -= 4) + e.e + 1, r.RM);
    };
    j.times = j.mul = function(e) {
        var t, n = this, s = n.constructor, r = n.c, a = (e = new s(e)).c, o = r.length, i = a.length, d = n.e, l = e.e;
        if (e.s = n.s == e.s ? 1 : -1, !r[0] || !a[0]) return e.c = [
            e.e = 0
        ], e;
        for(e.e = d + l, o < i && (t = r, r = a, a = t, l = o, o = i, i = l), t = new Array(l = o + i); l--;)t[l] = 0;
        for(d = i; d--;){
            for(i = 0, l = o + d; l > d;)i = t[l] + a[d] * r[l - d - 1] + i, t[l--] = i % 10, i = i / 10 | 0;
            t[l] = i;
        }
        for(i ? ++e.e : t.shift(), d = t.length; !t[--d];)t.pop();
        return e.c = t, e;
    };
    j.toExponential = function(e, t) {
        var n = this, s = n.c[0];
        if (e !== Ie) {
            if (e !== ~~e || e < 0 || e > je) throw Error(jt);
            for(n = ze(new n.constructor(n), ++e, t); n.c.length < e;)n.c.push(0);
        }
        return Ge(n, !0, !!s);
    };
    j.toFixed = function(e, t) {
        var n = this, s = n.c[0];
        if (e !== Ie) {
            if (e !== ~~e || e < 0 || e > je) throw Error(jt);
            for(n = ze(new n.constructor(n), e + n.e + 1, t), e = e + n.e + 1; n.c.length < e;)n.c.push(0);
        }
        return Ge(n, !1, !!s);
    };
    j[Symbol.for("nodejs.util.inspect.custom")] = j.toJSON = j.toString = function() {
        var e = this, t = e.constructor;
        return Ge(e, e.e <= t.NE || e.e >= t.PE, !!e.c[0]);
    };
    j.toNumber = function() {
        var e = +Ge(this, !0, !0);
        if (this.constructor.strict === !0 && !this.eq(e.toString())) throw Error(mt + "Imprecise conversion");
        return e;
    };
    j.toPrecision = function(e, t) {
        var n = this, s = n.constructor, r = n.c[0];
        if (e !== Ie) {
            if (e !== ~~e || e < 1 || e > je) throw Error(qe + "precision");
            for(n = ze(new s(n), e, t); n.c.length < e;)n.c.push(0);
        }
        return Ge(n, e <= n.e || n.e <= s.NE || n.e >= s.PE, !!r);
    };
    j.valueOf = function() {
        var e = this, t = e.constructor;
        if (t.strict === !0) throw Error(mt + "valueOf disallowed");
        return Ge(e, e.e <= t.NE || e.e >= t.PE, !0);
    };
    var Ne = es();
    let Ps, Us, Ds, Ye;
    ts = {
        bigNumber (e, t = {
            safe: !1
        }) {
            try {
                return e ? new Ne(e) : new Ne(0);
            } catch (n) {
                if (t.safe) return new Ne(0);
                throw n;
            }
        },
        formatNumber (e, t) {
            const { decimals: n, round: s = 8, safe: r = !0 } = t;
            return ts.bigNumber(e, {
                safe: r
            }).div(new Ne(10).pow(n)).round(s);
        },
        multiply (e, t) {
            if (e === void 0 || t === void 0) return new Ne(0);
            const n = new Ne(e), s = new Ne(t);
            return n.times(s);
        },
        toFixed (e, t = 2) {
            return e === void 0 || e === "" ? new Ne(0).toFixed(t) : new Ne(e).toFixed(t);
        },
        formatNumberToLocalString (e, t = 2) {
            return e === void 0 || e === "" ? "0.00" : typeof e == "number" ? e.toLocaleString("en-US", {
                maximumFractionDigits: t,
                minimumFractionDigits: t,
                roundingMode: "floor"
            }) : parseFloat(e).toLocaleString("en-US", {
                maximumFractionDigits: t,
                minimumFractionDigits: t,
                roundingMode: "floor"
            });
        },
        parseLocalStringToNumber (e) {
            if (e === void 0 || e === "") return 0;
            const t = e.replace(/,/gu, "");
            return new Ne(t).toNumber();
        }
    };
    Ps = [
        {
            type: "function",
            name: "transfer",
            stateMutability: "nonpayable",
            inputs: [
                {
                    name: "_to",
                    type: "address"
                },
                {
                    name: "_value",
                    type: "uint256"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "bool"
                }
            ]
        },
        {
            type: "function",
            name: "transferFrom",
            stateMutability: "nonpayable",
            inputs: [
                {
                    name: "_from",
                    type: "address"
                },
                {
                    name: "_to",
                    type: "address"
                },
                {
                    name: "_value",
                    type: "uint256"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "bool"
                }
            ]
        }
    ];
    Us = [
        {
            type: "function",
            name: "approve",
            stateMutability: "nonpayable",
            inputs: [
                {
                    name: "spender",
                    type: "address"
                },
                {
                    name: "amount",
                    type: "uint256"
                }
            ],
            outputs: [
                {
                    type: "bool"
                }
            ]
        }
    ];
    Ds = [
        {
            type: "function",
            name: "transfer",
            stateMutability: "nonpayable",
            inputs: [
                {
                    name: "recipient",
                    type: "address"
                },
                {
                    name: "amount",
                    type: "uint256"
                }
            ],
            outputs: []
        },
        {
            type: "function",
            name: "transferFrom",
            stateMutability: "nonpayable",
            inputs: [
                {
                    name: "sender",
                    type: "address"
                },
                {
                    name: "recipient",
                    type: "address"
                },
                {
                    name: "amount",
                    type: "uint256"
                }
            ],
            outputs: [
                {
                    name: "",
                    type: "bool"
                }
            ]
        }
    ];
    xs = {
        getERC20Abi: (e)=>h.USDT_CONTRACT_ADDRESSES.includes(e) ? Ds : Ps,
        getSwapAbi: ()=>Us
    };
    Ye = {
        ConnectorExplorerIds: {
            [h.CONNECTOR_ID.COINBASE]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
            [h.CONNECTOR_ID.COINBASE_SDK]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
            [h.CONNECTOR_ID.BASE_ACCOUNT]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
            [h.CONNECTOR_ID.SAFE]: "225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",
            [h.CONNECTOR_ID.LEDGER]: "19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927",
            [h.CONNECTOR_ID.OKX]: "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
            [h.METMASK_CONNECTOR_NAME]: "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
            [h.TRUST_CONNECTOR_NAME]: "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
            [h.SOLFLARE_CONNECTOR_NAME]: "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
            [h.PHANTOM_CONNECTOR_NAME]: "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
            [h.COIN98_CONNECTOR_NAME]: "2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01",
            [h.MAGIC_EDEN_CONNECTOR_NAME]: "8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6",
            [h.BACKPACK_CONNECTOR_NAME]: "2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0",
            [h.BITGET_CONNECTOR_NAME]: "38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662",
            [h.FRONTIER_CONNECTOR_NAME]: "85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041",
            [h.XVERSE_CONNECTOR_NAME]: "2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b",
            [h.LEATHER_CONNECTOR_NAME]: "483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13",
            [h.OKX_CONNECTOR_NAME]: "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
            [h.BINANCE_CONNECTOR_NAME]: "2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25"
        }
    };
    J = {
        validateCaipAddress (e) {
            if (e.split(":")?.length !== 3) throw new Error("Invalid CAIP Address");
            return e;
        },
        parseCaipAddress (e) {
            const t = e.split(":");
            if (t.length !== 3) throw new Error(`Invalid CAIP-10 address: ${e}`);
            const [n, s, r] = t;
            if (!n || !s || !r) throw new Error(`Invalid CAIP-10 address: ${e}`);
            return {
                chainNamespace: n,
                chainId: s,
                address: r
            };
        },
        parseCaipNetworkId (e) {
            const t = e.split(":");
            if (t.length !== 2) throw new Error(`Invalid CAIP-2 network id: ${e}`);
            const [n, s] = t;
            if (!n || !s) throw new Error(`Invalid CAIP-2 network id: ${e}`);
            return {
                chainNamespace: n,
                chainId: s
            };
        }
    };
    ke = {
        RPC_ERROR_CODE: {
            USER_REJECTED_REQUEST: 4001,
            USER_REJECTED_METHODS: 5002,
            USER_REJECTED: 5e3,
            SEND_TRANSACTION_ERROR: 5001
        },
        PROVIDER_RPC_ERROR_NAME: {
            PROVIDER_RPC: "ProviderRpcError",
            USER_REJECTED_REQUEST: "UserRejectedRequestError",
            SEND_TRANSACTION_ERROR: "SendTransactionError"
        },
        isRpcProviderError (e) {
            try {
                if (typeof e == "object" && e !== null) {
                    const t = e, n = typeof t.message == "string", s = typeof t.code == "number";
                    return n && s;
                }
                return !1;
            } catch  {
                return !1;
            }
        },
        isUserRejectedMessage (e) {
            return e.toLowerCase().includes("user rejected") || e.toLowerCase().includes("user cancelled") || e.toLowerCase().includes("user canceled");
        },
        isUserRejectedRequestError (e) {
            if (ke.isRpcProviderError(e)) {
                const t = e.code === ke.RPC_ERROR_CODE.USER_REJECTED_REQUEST, n = e.code === ke.RPC_ERROR_CODE.USER_REJECTED_METHODS;
                return t || n || ke.isUserRejectedMessage(e.message);
            }
            return e instanceof Error ? ke.isUserRejectedMessage(e.message) : !1;
        }
    };
    class Ls extends Error {
        constructor(t, n){
            super(n.message, {
                cause: t
            }), this.name = ke.PROVIDER_RPC_ERROR_NAME.PROVIDER_RPC, this.code = n.code;
        }
    }
    class ns extends Ls {
        constructor(t){
            super(t, {
                code: ke.RPC_ERROR_CODE.USER_REJECTED_REQUEST,
                message: "User rejected the request"
            }), this.name = ke.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST;
        }
    }
    y = {
        WALLET_ID: "@appkit/wallet_id",
        WALLET_NAME: "@appkit/wallet_name",
        SOLANA_WALLET: "@appkit/solana_wallet",
        SOLANA_CAIP_CHAIN: "@appkit/solana_caip_chain",
        ACTIVE_CAIP_NETWORK_ID: "@appkit/active_caip_network_id",
        CONNECTED_SOCIAL: "@appkit/connected_social",
        CONNECTED_SOCIAL_USERNAME: "@appkit-wallet/SOCIAL_USERNAME",
        RECENT_WALLETS: "@appkit/recent_wallets",
        RECENT_WALLET: "@appkit/recent_wallet",
        DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
        ACTIVE_NAMESPACE: "@appkit/active_namespace",
        CONNECTED_NAMESPACES: "@appkit/connected_namespaces",
        CONNECTION_STATUS: "@appkit/connection_status",
        SIWX_AUTH_TOKEN: "@appkit/siwx-auth-token",
        SIWX_NONCE_TOKEN: "@appkit/siwx-nonce-token",
        TELEGRAM_SOCIAL_PROVIDER: "@appkit/social_provider",
        NATIVE_BALANCE_CACHE: "@appkit/native_balance_cache",
        PORTFOLIO_CACHE: "@appkit/portfolio_cache",
        ENS_CACHE: "@appkit/ens_cache",
        IDENTITY_CACHE: "@appkit/identity_cache",
        PREFERRED_ACCOUNT_TYPES: "@appkit/preferred_account_types",
        CONNECTIONS: "@appkit/connections",
        DISCONNECTED_CONNECTOR_IDS: "@appkit/disconnected_connector_ids",
        HISTORY_TRANSACTIONS_CACHE: "@appkit/history_transactions_cache",
        TOKEN_PRICE_CACHE: "@appkit/token_price_cache",
        RECENT_EMAILS: "@appkit/recent_emails",
        LATEST_APPKIT_VERSION: "@appkit/latest_version",
        TON_WALLETS_CACHE: "@appkit/ton_wallets_cache"
    };
    function qt(e) {
        if (!e) throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");
        return `@appkit/${e}:connected_connector_id`;
    }
    I = {
        setItem (e, t) {
            ot() && t !== void 0 && localStorage.setItem(e, t);
        },
        getItem (e) {
            if (ot()) return localStorage.getItem(e) || void 0;
        },
        removeItem (e) {
            ot() && localStorage.removeItem(e);
        },
        clear () {
            ot() && localStorage.clear();
        }
    };
    function ot() {
        return typeof window < "u" && typeof localStorage < "u";
    }
    function Dt(e, t) {
        const n = e?.["--apkt-accent"] ?? e?.["--w3m-accent"];
        return t === "light" ? {
            "--w3m-accent": n || "hsla(231, 100%, 70%, 1)",
            "--w3m-background": "#fff"
        } : {
            "--w3m-accent": n || "hsla(230, 100%, 67%, 1)",
            "--w3m-background": "#202020"
        };
    }
    const Ms = Symbol(), Sn = Object.getPrototypeOf, tn = new WeakMap, Ws = (e)=>e && (tn.has(e) ? tn.get(e) : Sn(e) === Object.prototype || Sn(e) === Array.prototype), Bs = (e)=>Ws(e) && e[Ms] || null, _n = (e, t = !0)=>{
        tn.set(e, t);
    }, xt = {}, fn = (e)=>typeof e == "object" && e !== null, Fs = (e)=>fn(e) && !gt.has(e) && (Array.isArray(e) || !(Symbol.iterator in e)) && !(e instanceof WeakMap) && !(e instanceof WeakSet) && !(e instanceof Error) && !(e instanceof Number) && !(e instanceof Date) && !(e instanceof String) && !(e instanceof RegExp) && !(e instanceof ArrayBuffer) && !(e instanceof Promise), ss = (e, t)=>{
        const n = nn.get(e);
        if (n?.[0] === t) return n[1];
        const s = Array.isArray(e) ? [] : Object.create(Object.getPrototypeOf(e));
        return _n(s, !0), nn.set(e, [
            t,
            s
        ]), Reflect.ownKeys(e).forEach((r)=>{
            if (Object.getOwnPropertyDescriptor(s, r)) return;
            const a = Reflect.get(e, r), { enumerable: o } = Reflect.getOwnPropertyDescriptor(e, r), i = {
                value: a,
                enumerable: o,
                configurable: !0
            };
            if (gt.has(a)) _n(a, !1);
            else if (xe.has(a)) {
                const [d, l] = xe.get(a);
                i.value = ss(d, l());
            }
            Object.defineProperty(s, r, i);
        }), Object.preventExtensions(s);
    }, $s = (e, t, n, s)=>({
            deleteProperty (r, a) {
                const o = Reflect.get(r, a);
                n(a);
                const i = Reflect.deleteProperty(r, a);
                return i && s([
                    "delete",
                    [
                        a
                    ],
                    o
                ]), i;
            },
            set (r, a, o, i) {
                const d = !e() && Reflect.has(r, a), l = Reflect.get(r, a, i);
                if (d && (Tn(l, o) || lt.has(o) && Tn(l, lt.get(o)))) return !0;
                n(a), fn(o) && (o = Bs(o) || o);
                const u = !xe.has(o) && js(o) ? V(o) : o;
                return t(a, u), Reflect.set(r, a, u, i), s([
                    "set",
                    [
                        a
                    ],
                    o,
                    l
                ]), !0;
            }
        }), xe = new WeakMap, gt = new WeakSet, nn = new WeakMap, kt = [
        1
    ], lt = new WeakMap;
    let Tn = Object.is, Hs = (e, t)=>new Proxy(e, t), js = Fs, Ks = ss, Vs = $s;
    V = function(e = {}) {
        if (!fn(e)) throw new Error("object required");
        const t = lt.get(e);
        if (t) return t;
        let n = kt[0];
        const s = new Set, r = (k, x = ++kt[0])=>{
            n !== x && (a = n = x, s.forEach((P)=>P(k, x)));
        };
        let a = n;
        const o = (k = kt[0])=>(a !== k && (a = k, d.forEach(([x])=>{
                const P = x[1](k);
                P > n && (n = P);
            })), n), i = (k)=>(x, P)=>{
                const ne = [
                    ...x
                ];
                ne[1] = [
                    k,
                    ...ne[1]
                ], r(ne, P);
            }, d = new Map, l = (k, x)=>{
            const P = !gt.has(x) && xe.get(x);
            if (P) {
                if ((xt ? "production" : void 0) !== "production" && d.has(k)) throw new Error("prop listener already exists");
                if (s.size) {
                    const ne = P[2](i(k));
                    d.set(k, [
                        P,
                        ne
                    ]);
                } else d.set(k, [
                    P
                ]);
            }
        }, u = (k)=>{
            var x;
            const P = d.get(k);
            P && (d.delete(k), (x = P[1]) == null || x.call(P));
        }, p = (k)=>(s.add(k), s.size === 1 && d.forEach(([P, ne], Ee)=>{
                if ((xt ? "production" : void 0) !== "production" && ne) throw new Error("remove already exists");
                const Es = P[2](i(Ee));
                d.set(Ee, [
                    P,
                    Es
                ]);
            }), ()=>{
                s.delete(k), s.size === 0 && d.forEach(([P, ne], Ee)=>{
                    ne && (ne(), d.set(Ee, [
                        P
                    ]));
                });
            });
        let b = !0;
        const O = Vs(()=>b, l, u, r), A = Hs(e, O);
        lt.set(e, A);
        const S = [
            e,
            o,
            p
        ];
        return xe.set(A, S), Reflect.ownKeys(e).forEach((k)=>{
            const x = Object.getOwnPropertyDescriptor(e, k);
            "value" in x && x.writable && (A[k] = e[k]);
        }), b = !1, A;
    };
    X = function(e, t, n) {
        const s = xe.get(e);
        (xt ? "production" : void 0) !== "production" && !s && console.warn("Please use proxy object");
        let r;
        const a = [], o = s[2];
        let i = !1;
        const l = o((u)=>{
            a.push(u), r || (r = Promise.resolve().then(()=>{
                r = void 0, i && t(a.splice(0));
            }));
        });
        return i = !0, ()=>{
            i = !1, l();
        };
    };
    function ut(e) {
        const t = xe.get(e);
        (xt ? "production" : void 0) !== "production" && !t && console.warn("Please use proxy object");
        const [n, s] = t;
        return Ks(n, s());
    }
    function pt(e) {
        return gt.add(e), e;
    }
    function qs() {
        return {
            proxyStateMap: xe,
            refSet: gt,
            snapCache: nn,
            versionHolder: kt,
            proxyCache: lt
        };
    }
    Q = function(e, t, n, s) {
        let r = e[t];
        return X(e, ()=>{
            const a = e[t];
            Object.is(r, a) || n(r = a);
        });
    };
    const { proxyStateMap: zs, snapCache: Gs } = qs(), bt = (e)=>zs.has(e);
    function Ys(e) {
        const t = [];
        let n = 0;
        const s = new Map, r = new WeakMap, a = ()=>{
            const l = Gs.get(i), u = l?.[1];
            if (u && !r.has(u)) {
                const p = new Map(s);
                r.set(u, p);
            }
        }, o = (l)=>r.get(l) || s, i = {
            data: t,
            index: n,
            epoch: 0,
            get size () {
                return bt(this) || a(), o(this).size;
            },
            get (l) {
                const p = o(this).get(l);
                if (p === void 0) {
                    this.epoch;
                    return;
                }
                return this.data[p];
            },
            has (l) {
                const u = o(this);
                return this.epoch, u.has(l);
            },
            set (l, u) {
                if (!bt(this)) throw new Error("Cannot perform mutations on a snapshot");
                const p = s.get(l);
                return p === void 0 ? (s.set(l, this.index), this.data[this.index++] = u) : this.data[p] = u, this.epoch++, this;
            },
            delete (l) {
                if (!bt(this)) throw new Error("Cannot perform mutations on a snapshot");
                const u = s.get(l);
                return u === void 0 ? !1 : (delete this.data[u], s.delete(l), this.epoch++, !0);
            },
            clear () {
                if (!bt(this)) throw new Error("Cannot perform mutations on a snapshot");
                this.data.length = 0, this.index = 0, this.epoch++, s.clear();
            },
            forEach (l) {
                this.epoch, o(this).forEach((p, b)=>{
                    l(this.data[p], b, this);
                });
            },
            *entries () {
                this.epoch;
                const l = o(this);
                for (const [u, p] of l)yield [
                    u,
                    this.data[p]
                ];
            },
            *keys () {
                this.epoch;
                const l = o(this);
                for (const u of l.keys())yield u;
            },
            *values () {
                this.epoch;
                const l = o(this);
                for (const u of l.values())yield this.data[u];
            },
            [Symbol.iterator] () {
                return this.entries();
            },
            get [Symbol.toStringTag] () {
                return "Map";
            },
            toJSON () {
                return new Map(this.entries());
            }
        }, d = V(i);
        return Object.defineProperties(d, {
            size: {
                enumerable: !1
            },
            index: {
                enumerable: !1
            },
            epoch: {
                enumerable: !1
            },
            data: {
                enumerable: !1
            },
            toJSON: {
                enumerable: !1
            }
        }), Object.seal(d), d;
    }
    var kn = {};
    let zt, rs, Js, vt, Xs, Gt;
    zt = (typeof process < "u" && typeof kn < "u" ? kn.NEXT_PUBLIC_SECURE_SITE_ORIGIN : void 0) || "https://secure.walletconnect.org";
    rs = [
        {
            label: "Meld.io",
            name: "meld",
            feeRange: "1-2%",
            url: "https://meldcrypto.com",
            supportedChains: [
                "eip155",
                "solana"
            ]
        }
    ];
    Js = "WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU";
    L = {
        FOUR_MINUTES_MS: 24e4,
        TEN_SEC_MS: 1e4,
        FIVE_SEC_MS: 5e3,
        THREE_SEC_MS: 3e3,
        ONE_SEC_MS: 1e3,
        SECURE_SITE: zt,
        SECURE_SITE_DASHBOARD: `${zt}/dashboard`,
        SECURE_SITE_FAVICON: `${zt}/images/favicon.png`,
        SOLANA_NATIVE_TOKEN_ADDRESS: "So11111111111111111111111111111111111111111",
        RESTRICTED_TIMEZONES: [
            "ASIA/SHANGHAI",
            "ASIA/URUMQI",
            "ASIA/CHONGQING",
            "ASIA/HARBIN",
            "ASIA/KASHGAR",
            "ASIA/MACAU",
            "ASIA/HONG_KONG",
            "ASIA/MACAO",
            "ASIA/BEIJING",
            "ASIA/HARBIN"
        ],
        SWAP_SUGGESTED_TOKENS: [
            "ETH",
            "UNI",
            "1INCH",
            "AAVE",
            "SOL",
            "ADA",
            "AVAX",
            "DOT",
            "LINK",
            "NITRO",
            "GAIA",
            "MILK",
            "TRX",
            "NEAR",
            "GNO",
            "WBTC",
            "DAI",
            "WETH",
            "USDC",
            "USDT",
            "ARB",
            "BAL",
            "BICO",
            "CRV",
            "ENS",
            "MATIC",
            "OP"
        ],
        SWAP_POPULAR_TOKENS: [
            "ETH",
            "UNI",
            "1INCH",
            "AAVE",
            "SOL",
            "ADA",
            "AVAX",
            "DOT",
            "LINK",
            "NITRO",
            "GAIA",
            "MILK",
            "TRX",
            "NEAR",
            "GNO",
            "WBTC",
            "DAI",
            "WETH",
            "USDC",
            "USDT",
            "ARB",
            "BAL",
            "BICO",
            "CRV",
            "ENS",
            "MATIC",
            "OP",
            "METAL",
            "DAI",
            "CHAMP",
            "WOLF",
            "SALE",
            "BAL",
            "BUSD",
            "MUST",
            "BTCpx",
            "ROUTE",
            "HEX",
            "WELT",
            "amDAI",
            "VSQ",
            "VISION",
            "AURUM",
            "pSP",
            "SNX",
            "VC",
            "LINK",
            "CHP",
            "amUSDT",
            "SPHERE",
            "FOX",
            "GIDDY",
            "GFC",
            "OMEN",
            "OX_OLD",
            "DE",
            "WNT"
        ],
        SUGGESTED_TOKENS_BY_CHAIN: {
            "eip155:42161": [
                "USD₮0"
            ]
        },
        BALANCE_SUPPORTED_CHAINS: [
            h.CHAIN.EVM,
            h.CHAIN.SOLANA
        ],
        SEND_PARAMS_SUPPORTED_CHAINS: [
            h.CHAIN.EVM
        ],
        SWAP_SUPPORTED_NETWORKS: [
            "eip155:1",
            "eip155:42161",
            "eip155:10",
            "eip155:324",
            "eip155:8453",
            "eip155:56",
            "eip155:137",
            "eip155:100",
            "eip155:43114",
            "eip155:250",
            "eip155:8217",
            "eip155:1313161554"
        ],
        NAMES_SUPPORTED_CHAIN_NAMESPACES: [
            h.CHAIN.EVM
        ],
        ONRAMP_SUPPORTED_CHAIN_NAMESPACES: [
            h.CHAIN.EVM,
            h.CHAIN.SOLANA
        ],
        PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES: [
            h.CHAIN.EVM,
            h.CHAIN.SOLANA
        ],
        ACTIVITY_ENABLED_CHAIN_NAMESPACES: [
            h.CHAIN.EVM,
            h.CHAIN.TON
        ],
        NATIVE_TOKEN_ADDRESS: {
            eip155: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
            solana: "So11111111111111111111111111111111111111111",
            polkadot: "0x",
            bip122: "0x",
            cosmos: "0x",
            sui: "0x",
            stacks: "0x",
            ton: "0x"
        },
        CONVERT_SLIPPAGE_TOLERANCE: 1,
        CONNECT_LABELS: {
            MOBILE: "Open and continue in the wallet app",
            WEB: "Open and continue in the wallet app"
        },
        SEND_SUPPORTED_NAMESPACES: [
            h.CHAIN.EVM,
            h.CHAIN.SOLANA
        ],
        DEFAULT_REMOTE_FEATURES: {
            swaps: [
                "1inch"
            ],
            onramp: [
                "meld"
            ],
            email: !0,
            socials: [
                "google",
                "x",
                "discord",
                "farcaster",
                "github",
                "apple",
                "facebook"
            ],
            activity: !0,
            reownBranding: !0,
            multiWallet: !1,
            emailCapture: !1,
            payWithExchange: !1,
            payments: !1,
            reownAuthentication: !1,
            headless: !1
        },
        DEFAULT_REMOTE_FEATURES_DISABLED: {
            email: !1,
            socials: !1,
            swaps: !1,
            onramp: !1,
            activity: !1,
            reownBranding: !1,
            emailCapture: !1,
            reownAuthentication: !1,
            headless: !1
        },
        DEFAULT_FEATURES: {
            receive: !0,
            send: !0,
            emailShowWallets: !0,
            connectorTypeOrder: [
                "walletConnect",
                "recent",
                "injected",
                "featured",
                "custom",
                "external",
                "recommended"
            ],
            analytics: !0,
            allWallets: !0,
            legalCheckbox: !1,
            smartSessions: !1,
            collapseWallets: !1,
            walletFeaturesOrder: [
                "onramp",
                "swaps",
                "receive",
                "send"
            ],
            connectMethodsOrder: void 0,
            pay: !1,
            reownAuthentication: !1,
            headless: !1
        },
        DEFAULT_SOCIALS: [
            "google",
            "x",
            "farcaster",
            "discord",
            "apple",
            "github",
            "facebook"
        ],
        DEFAULT_ACCOUNT_TYPES: {
            bip122: "payment",
            eip155: "smartAccount",
            polkadot: "eoa",
            solana: "eoa",
            ton: "eoa"
        },
        ADAPTER_TYPES: {
            UNIVERSAL: "universal",
            SOLANA: "solana",
            WAGMI: "wagmi",
            ETHERS: "ethers",
            ETHERS5: "ethers5",
            BITCOIN: "bitcoin"
        },
        SIWX_DEFAULTS: {
            signOutOnDisconnect: !0
        },
        MANDATORY_WALLET_IDS_ON_MOBILE: [
            Ye.ConnectorExplorerIds[h.CONNECTOR_ID.COINBASE],
            Ye.ConnectorExplorerIds[h.CONNECTOR_ID.COINBASE_SDK],
            Ye.ConnectorExplorerIds[h.CONNECTOR_ID.BASE_ACCOUNT],
            Ye.ConnectorExplorerIds[h.SOLFLARE_CONNECTOR_NAME],
            Ye.ConnectorExplorerIds[h.PHANTOM_CONNECTOR_NAME],
            Ye.ConnectorExplorerIds[h.BINANCE_CONNECTOR_NAME]
        ],
        DEFAULT_CONNECT_METHOD_ORDER: [
            "email",
            "social",
            "wallet"
        ]
    };
    C = {
        cacheExpiry: {
            portfolio: 3e4,
            nativeBalance: 3e4,
            ens: 3e5,
            identity: 3e5,
            transactionsHistory: 15e3,
            tokenPrice: 15e3,
            latestAppKitVersion: 6048e5,
            tonWallets: 864e5
        },
        isCacheExpired (e, t) {
            return Date.now() - e > t;
        },
        getActiveNetworkProps () {
            const e = C.getActiveNamespace(), t = C.getActiveCaipNetworkId(), n = t ? t.split(":")[1] : void 0, s = n ? isNaN(Number(n)) ? n : Number(n) : void 0;
            return {
                namespace: e,
                caipNetworkId: t,
                chainId: s
            };
        },
        setWalletConnectDeepLink ({ name: e, href: t }) {
            try {
                I.setItem(y.DEEPLINK_CHOICE, JSON.stringify({
                    href: t,
                    name: e
                }));
            } catch  {
                console.info("Unable to set WalletConnect deep link");
            }
        },
        getWalletConnectDeepLink () {
            try {
                const e = I.getItem(y.DEEPLINK_CHOICE);
                if (e) return JSON.parse(e);
            } catch  {
                console.info("Unable to get WalletConnect deep link");
            }
        },
        deleteWalletConnectDeepLink () {
            try {
                I.removeItem(y.DEEPLINK_CHOICE);
            } catch  {
                console.info("Unable to delete WalletConnect deep link");
            }
        },
        setActiveNamespace (e) {
            try {
                I.setItem(y.ACTIVE_NAMESPACE, e);
            } catch  {
                console.info("Unable to set active namespace");
            }
        },
        setActiveCaipNetworkId (e) {
            try {
                I.setItem(y.ACTIVE_CAIP_NETWORK_ID, e), C.setActiveNamespace(e.split(":")[0]);
            } catch  {
                console.info("Unable to set active caip network id");
            }
        },
        getActiveCaipNetworkId () {
            try {
                return I.getItem(y.ACTIVE_CAIP_NETWORK_ID);
            } catch  {
                console.info("Unable to get active caip network id");
                return;
            }
        },
        deleteActiveCaipNetworkId () {
            try {
                I.removeItem(y.ACTIVE_CAIP_NETWORK_ID);
            } catch  {
                console.info("Unable to delete active caip network id");
            }
        },
        deleteConnectedConnectorId (e) {
            try {
                const t = qt(e);
                I.removeItem(t);
            } catch  {
                console.info("Unable to delete connected connector id");
            }
        },
        setAppKitRecent (e) {
            try {
                const t = C.getRecentWallets();
                t.find((s)=>s.id === e.id) || (t.unshift(e), t.length > 2 && t.pop(), I.setItem(y.RECENT_WALLETS, JSON.stringify(t)), I.setItem(y.RECENT_WALLET, JSON.stringify(e)));
            } catch  {
                console.info("Unable to set AppKit recent");
            }
        },
        getRecentWallets () {
            try {
                const e = I.getItem(y.RECENT_WALLETS);
                return e ? JSON.parse(e) : [];
            } catch  {
                console.info("Unable to get AppKit recent");
            }
            return [];
        },
        getRecentWallet () {
            try {
                const e = I.getItem(y.RECENT_WALLET);
                return e ? JSON.parse(e) : null;
            } catch  {
                console.info("Unable to get AppKit recent");
            }
            return null;
        },
        deleteRecentWallet () {
            try {
                I.removeItem(y.RECENT_WALLET);
            } catch  {
                console.info("Unable to delete AppKit recent");
            }
        },
        setConnectedConnectorId (e, t) {
            try {
                const n = qt(e);
                I.setItem(n, t);
            } catch  {
                console.info("Unable to set Connected Connector Id");
            }
        },
        getActiveNamespace () {
            try {
                return I.getItem(y.ACTIVE_NAMESPACE);
            } catch  {
                console.info("Unable to get active namespace");
            }
        },
        getConnectedConnectorId (e) {
            if (e) try {
                const t = qt(e);
                return I.getItem(t);
            } catch  {
                console.info("Unable to get connected connector id in namespace", e);
            }
        },
        setConnectedSocialProvider (e) {
            try {
                I.setItem(y.CONNECTED_SOCIAL, e);
            } catch  {
                console.info("Unable to set connected social provider");
            }
        },
        getConnectedSocialProvider () {
            try {
                return I.getItem(y.CONNECTED_SOCIAL);
            } catch  {
                console.info("Unable to get connected social provider");
            }
        },
        deleteConnectedSocialProvider () {
            try {
                I.removeItem(y.CONNECTED_SOCIAL);
            } catch  {
                console.info("Unable to delete connected social provider");
            }
        },
        getConnectedSocialUsername () {
            try {
                return I.getItem(y.CONNECTED_SOCIAL_USERNAME);
            } catch  {
                console.info("Unable to get connected social username");
            }
        },
        getStoredActiveCaipNetworkId () {
            return I.getItem(y.ACTIVE_CAIP_NETWORK_ID)?.split(":")?.[1];
        },
        setConnectionStatus (e) {
            try {
                I.setItem(y.CONNECTION_STATUS, e);
            } catch  {
                console.info("Unable to set connection status");
            }
        },
        getConnectionStatus () {
            try {
                return I.getItem(y.CONNECTION_STATUS);
            } catch  {
                return;
            }
        },
        getConnectedNamespaces () {
            try {
                const e = I.getItem(y.CONNECTED_NAMESPACES);
                return e?.length ? e.split(",") : [];
            } catch  {
                return [];
            }
        },
        setConnectedNamespaces (e) {
            try {
                const t = Array.from(new Set(e));
                I.setItem(y.CONNECTED_NAMESPACES, t.join(","));
            } catch  {
                console.info("Unable to set namespaces in storage");
            }
        },
        addConnectedNamespace (e) {
            try {
                const t = C.getConnectedNamespaces();
                t.includes(e) || (t.push(e), C.setConnectedNamespaces(t));
            } catch  {
                console.info("Unable to add connected namespace");
            }
        },
        removeConnectedNamespace (e) {
            try {
                const t = C.getConnectedNamespaces(), n = t.indexOf(e);
                n > -1 && (t.splice(n, 1), C.setConnectedNamespaces(t));
            } catch  {
                console.info("Unable to remove connected namespace");
            }
        },
        getTelegramSocialProvider () {
            try {
                return I.getItem(y.TELEGRAM_SOCIAL_PROVIDER);
            } catch  {
                return console.info("Unable to get telegram social provider"), null;
            }
        },
        setTelegramSocialProvider (e) {
            try {
                I.setItem(y.TELEGRAM_SOCIAL_PROVIDER, e);
            } catch  {
                console.info("Unable to set telegram social provider");
            }
        },
        removeTelegramSocialProvider () {
            try {
                I.removeItem(y.TELEGRAM_SOCIAL_PROVIDER);
            } catch  {
                console.info("Unable to remove telegram social provider");
            }
        },
        getBalanceCache () {
            let e = {};
            try {
                const t = I.getItem(y.PORTFOLIO_CACHE);
                e = t ? JSON.parse(t) : {};
            } catch  {
                console.info("Unable to get balance cache");
            }
            return e;
        },
        removeAddressFromBalanceCache (e) {
            try {
                const t = C.getBalanceCache();
                I.setItem(y.PORTFOLIO_CACHE, JSON.stringify({
                    ...t,
                    [e]: void 0
                }));
            } catch  {
                console.info("Unable to remove address from balance cache", e);
            }
        },
        getBalanceCacheForCaipAddress (e) {
            try {
                const n = C.getBalanceCache()[e];
                if (n && !this.isCacheExpired(n.timestamp, this.cacheExpiry.portfolio)) return n.balance;
                C.removeAddressFromBalanceCache(e);
            } catch  {
                console.info("Unable to get balance cache for address", e);
            }
        },
        updateBalanceCache (e) {
            try {
                const t = C.getBalanceCache();
                t[e.caipAddress] = e, I.setItem(y.PORTFOLIO_CACHE, JSON.stringify(t));
            } catch  {
                console.info("Unable to update balance cache", e);
            }
        },
        getNativeBalanceCache () {
            let e = {};
            try {
                const t = I.getItem(y.NATIVE_BALANCE_CACHE);
                e = t ? JSON.parse(t) : {};
            } catch  {
                console.info("Unable to get balance cache");
            }
            return e;
        },
        removeAddressFromNativeBalanceCache (e) {
            try {
                const t = C.getBalanceCache();
                I.setItem(y.NATIVE_BALANCE_CACHE, JSON.stringify({
                    ...t,
                    [e]: void 0
                }));
            } catch  {
                console.info("Unable to remove address from balance cache", e);
            }
        },
        getNativeBalanceCacheForCaipAddress (e) {
            try {
                const n = C.getNativeBalanceCache()[e];
                if (n && !this.isCacheExpired(n.timestamp, this.cacheExpiry.nativeBalance)) return n;
                console.info("Discarding cache for address", e), C.removeAddressFromBalanceCache(e);
            } catch  {
                console.info("Unable to get balance cache for address", e);
            }
        },
        updateNativeBalanceCache (e) {
            try {
                const t = C.getNativeBalanceCache();
                t[e.caipAddress] = e, I.setItem(y.NATIVE_BALANCE_CACHE, JSON.stringify(t));
            } catch  {
                console.info("Unable to update balance cache", e);
            }
        },
        getEnsCache () {
            let e = {};
            try {
                const t = I.getItem(y.ENS_CACHE);
                e = t ? JSON.parse(t) : {};
            } catch  {
                console.info("Unable to get ens name cache");
            }
            return e;
        },
        getEnsFromCacheForAddress (e) {
            try {
                const n = C.getEnsCache()[e];
                if (n && !this.isCacheExpired(n.timestamp, this.cacheExpiry.ens)) return n.ens;
                C.removeEnsFromCache(e);
            } catch  {
                console.info("Unable to get ens name from cache", e);
            }
        },
        updateEnsCache (e) {
            try {
                const t = C.getEnsCache();
                t[e.address] = e, I.setItem(y.ENS_CACHE, JSON.stringify(t));
            } catch  {
                console.info("Unable to update ens name cache", e);
            }
        },
        removeEnsFromCache (e) {
            try {
                const t = C.getEnsCache();
                I.setItem(y.ENS_CACHE, JSON.stringify({
                    ...t,
                    [e]: void 0
                }));
            } catch  {
                console.info("Unable to remove ens name from cache", e);
            }
        },
        getIdentityCache () {
            let e = {};
            try {
                const t = I.getItem(y.IDENTITY_CACHE);
                e = t ? JSON.parse(t) : {};
            } catch  {
                console.info("Unable to get identity cache");
            }
            return e;
        },
        getIdentityFromCacheForAddress (e) {
            try {
                const n = C.getIdentityCache()[e];
                if (n && !this.isCacheExpired(n.timestamp, this.cacheExpiry.identity)) return n.identity;
                C.removeIdentityFromCache(e);
            } catch  {
                console.info("Unable to get identity from cache", e);
            }
        },
        updateIdentityCache (e) {
            try {
                const t = C.getIdentityCache();
                t[e.address] = {
                    identity: e.identity,
                    timestamp: e.timestamp
                }, I.setItem(y.IDENTITY_CACHE, JSON.stringify(t));
            } catch  {
                console.info("Unable to update identity cache", e);
            }
        },
        removeIdentityFromCache (e) {
            try {
                const t = C.getIdentityCache();
                I.setItem(y.IDENTITY_CACHE, JSON.stringify({
                    ...t,
                    [e]: void 0
                }));
            } catch  {
                console.info("Unable to remove identity from cache", e);
            }
        },
        getTonWalletsCache () {
            try {
                const e = I.getItem(y.TON_WALLETS_CACHE), t = e ? JSON.parse(e) : void 0;
                if (t && !this.isCacheExpired(t.timestamp, this.cacheExpiry.tonWallets)) return t;
                C.removeTonWalletsCache();
            } catch  {
                console.info("Unable to get ton wallets cache");
            }
        },
        updateTonWalletsCache (e) {
            try {
                const t = C.getTonWalletsCache() || {
                    timestamp: 0,
                    wallets: []
                };
                t.timestamp = new Date().getTime(), t.wallets = e, I.setItem(y.TON_WALLETS_CACHE, JSON.stringify(t));
            } catch  {
                console.info("Unable to update ton wallets cache", e);
            }
        },
        removeTonWalletsCache () {
            try {
                I.removeItem(y.TON_WALLETS_CACHE);
            } catch  {
                console.info("Unable to remove ton wallets cache");
            }
        },
        clearAddressCache () {
            try {
                I.removeItem(y.PORTFOLIO_CACHE), I.removeItem(y.NATIVE_BALANCE_CACHE), I.removeItem(y.ENS_CACHE), I.removeItem(y.IDENTITY_CACHE), I.removeItem(y.HISTORY_TRANSACTIONS_CACHE);
            } catch  {
                console.info("Unable to clear address cache");
            }
        },
        setPreferredAccountTypes (e) {
            try {
                I.setItem(y.PREFERRED_ACCOUNT_TYPES, JSON.stringify(e));
            } catch  {
                console.info("Unable to set preferred account types", e);
            }
        },
        getPreferredAccountTypes () {
            try {
                const e = I.getItem(y.PREFERRED_ACCOUNT_TYPES);
                return e ? JSON.parse(e) : {};
            } catch  {
                console.info("Unable to get preferred account types");
            }
            return {};
        },
        setConnections (e, t) {
            try {
                const n = C.getConnections(), s = n[t] ?? [], r = new Map;
                for (const o of s)r.set(o.connectorId, {
                    ...o
                });
                for (const o of e){
                    const i = r.get(o.connectorId), d = o.connectorId === h.CONNECTOR_ID.AUTH;
                    if (i && !d) {
                        const l = new Set(i.accounts.map((p)=>p.address.toLowerCase())), u = o.accounts.filter((p)=>!l.has(p.address.toLowerCase()));
                        i.accounts.push(...u);
                    } else r.set(o.connectorId, {
                        ...o
                    });
                }
                const a = {
                    ...n,
                    [t]: Array.from(r.values())
                };
                I.setItem(y.CONNECTIONS, JSON.stringify(a));
            } catch (n) {
                console.error("Unable to sync connections to storage", n);
            }
        },
        getConnections () {
            try {
                const e = I.getItem(y.CONNECTIONS);
                return e ? JSON.parse(e) : {};
            } catch (e) {
                return console.error("Unable to get connections from storage", e), {};
            }
        },
        deleteAddressFromConnection ({ connectorId: e, address: t, namespace: n }) {
            try {
                const s = C.getConnections(), r = s[n] ?? [], a = new Map(r.map((i)=>[
                        i.connectorId,
                        i
                    ])), o = a.get(e);
                o && (o.accounts.filter((d)=>d.address.toLowerCase() !== t.toLowerCase()).length === 0 ? a.delete(e) : a.set(e, {
                    ...o,
                    accounts: o.accounts.filter((d)=>d.address.toLowerCase() !== t.toLowerCase())
                })), I.setItem(y.CONNECTIONS, JSON.stringify({
                    ...s,
                    [n]: Array.from(a.values())
                }));
            } catch  {
                console.error(`Unable to remove address "${t}" from connector "${e}" in namespace "${n}"`);
            }
        },
        getDisconnectedConnectorIds () {
            try {
                const e = I.getItem(y.DISCONNECTED_CONNECTOR_IDS);
                return e ? JSON.parse(e) : {};
            } catch  {
                console.info("Unable to get disconnected connector ids");
            }
            return {};
        },
        addDisconnectedConnectorId (e, t) {
            try {
                const n = C.getDisconnectedConnectorIds(), s = n[t] ?? [];
                s.push(e), I.setItem(y.DISCONNECTED_CONNECTOR_IDS, JSON.stringify({
                    ...n,
                    [t]: Array.from(new Set(s))
                }));
            } catch  {
                console.error(`Unable to set disconnected connector id "${e}" for namespace "${t}"`);
            }
        },
        removeDisconnectedConnectorId (e, t) {
            try {
                const n = C.getDisconnectedConnectorIds();
                let s = n[t] ?? [];
                s = s.filter((r)=>r.toLowerCase() !== e.toLowerCase()), I.setItem(y.DISCONNECTED_CONNECTOR_IDS, JSON.stringify({
                    ...n,
                    [t]: Array.from(new Set(s))
                }));
            } catch  {
                console.error(`Unable to remove disconnected connector id "${e}" for namespace "${t}"`);
            }
        },
        isConnectorDisconnected (e, t) {
            try {
                return (C.getDisconnectedConnectorIds()[t] ?? []).some((r)=>r.toLowerCase() === e.toLowerCase());
            } catch  {
                console.info(`Unable to get disconnected connector id "${e}" for namespace "${t}"`);
            }
            return !1;
        },
        getTransactionsCache () {
            try {
                const e = I.getItem(y.HISTORY_TRANSACTIONS_CACHE);
                return e ? JSON.parse(e) : {};
            } catch  {
                console.info("Unable to get transactions cache");
            }
            return {};
        },
        getTransactionsCacheForAddress ({ address: e, chainId: t = "" }) {
            try {
                const s = C.getTransactionsCache()[e]?.[t];
                if (s && !this.isCacheExpired(s.timestamp, this.cacheExpiry.transactionsHistory)) return s.transactions;
                C.removeTransactionsCache({
                    address: e,
                    chainId: t
                });
            } catch  {
                console.info("Unable to get transactions cache");
            }
        },
        updateTransactionsCache ({ address: e, chainId: t = "", timestamp: n, transactions: s }) {
            try {
                const r = C.getTransactionsCache();
                r[e] = {
                    ...r[e],
                    [t]: {
                        timestamp: n,
                        transactions: s
                    }
                }, I.setItem(y.HISTORY_TRANSACTIONS_CACHE, JSON.stringify(r));
            } catch  {
                console.info("Unable to update transactions cache", {
                    address: e,
                    chainId: t,
                    timestamp: n,
                    transactions: s
                });
            }
        },
        removeTransactionsCache ({ address: e, chainId: t }) {
            try {
                const n = C.getTransactionsCache(), s = n?.[e] || {}, { [t]: r, ...a } = s;
                I.setItem(y.HISTORY_TRANSACTIONS_CACHE, JSON.stringify({
                    ...n,
                    [e]: a
                }));
            } catch  {
                console.info("Unable to remove transactions cache", {
                    address: e,
                    chainId: t
                });
            }
        },
        getTokenPriceCache () {
            try {
                const e = I.getItem(y.TOKEN_PRICE_CACHE);
                return e ? JSON.parse(e) : {};
            } catch  {
                console.info("Unable to get token price cache");
            }
            return {};
        },
        getTokenPriceCacheForAddresses (e) {
            try {
                const n = C.getTokenPriceCache()[e.join(",")];
                if (n && !this.isCacheExpired(n.timestamp, this.cacheExpiry.tokenPrice)) return n.tokenPrice;
                C.removeTokenPriceCache(e);
            } catch  {
                console.info("Unable to get token price cache for addresses", e);
            }
        },
        updateTokenPriceCache (e) {
            try {
                const t = C.getTokenPriceCache();
                t[e.addresses.join(",")] = {
                    timestamp: e.timestamp,
                    tokenPrice: e.tokenPrice
                }, I.setItem(y.TOKEN_PRICE_CACHE, JSON.stringify(t));
            } catch  {
                console.info("Unable to update token price cache", e);
            }
        },
        removeTokenPriceCache (e) {
            try {
                const t = C.getTokenPriceCache();
                I.setItem(y.TOKEN_PRICE_CACHE, JSON.stringify({
                    ...t,
                    [e.join(",")]: void 0
                }));
            } catch  {
                console.info("Unable to remove token price cache", e);
            }
        },
        getLatestAppKitVersion () {
            try {
                const e = this.getLatestAppKitVersionCache(), t = e?.version;
                return t && !this.isCacheExpired(e.timestamp, this.cacheExpiry.latestAppKitVersion) ? t : void 0;
            } catch  {
                console.info("Unable to get latest AppKit version");
            }
        },
        getLatestAppKitVersionCache () {
            try {
                const e = I.getItem(y.LATEST_APPKIT_VERSION);
                return e ? JSON.parse(e) : {};
            } catch  {
                console.info("Unable to get latest AppKit version cache");
            }
            return {};
        },
        updateLatestAppKitVersion (e) {
            try {
                const t = C.getLatestAppKitVersionCache();
                t.timestamp = e.timestamp, t.version = e.version, I.setItem(y.LATEST_APPKIT_VERSION, JSON.stringify(t));
            } catch  {
                console.info("Unable to update latest AppKit version on local storage", e);
            }
        }
    };
    E = {
        getWindow () {
            if (!(typeof window > "u")) return window;
        },
        isMobile () {
            return this.isClient() ? !!(window?.matchMedia && typeof window.matchMedia == "function" && window.matchMedia("(pointer:coarse)")?.matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
        },
        checkCaipNetwork (e, t = "") {
            return e?.caipNetworkId.toLocaleLowerCase().includes(t.toLowerCase());
        },
        isAndroid () {
            if (!this.isMobile()) return !1;
            const e = window?.navigator.userAgent.toLowerCase();
            return E.isMobile() && e.includes("android");
        },
        isIos () {
            if (!this.isMobile()) return !1;
            const e = window?.navigator.userAgent.toLowerCase();
            return e.includes("iphone") || e.includes("ipad");
        },
        isSafari () {
            return this.isClient() ? (window?.navigator.userAgent.toLowerCase()).includes("safari") : !1;
        },
        isClient () {
            return typeof window < "u";
        },
        isPairingExpired (e) {
            return e ? e - Date.now() <= L.TEN_SEC_MS : !0;
        },
        isAllowedRetry (e, t = L.ONE_SEC_MS) {
            return Date.now() - e >= t;
        },
        copyToClopboard (e) {
            navigator.clipboard.writeText(e);
        },
        isIframe () {
            try {
                return window?.self !== window?.top;
            } catch  {
                return !1;
            }
        },
        isSafeApp () {
            if (E.isClient() && window.self !== window.top) try {
                const e = window?.location?.ancestorOrigins?.[0], t = "https://app.safe.global";
                if (e) {
                    const n = new URL(e), s = new URL(t);
                    return n.hostname === s.hostname;
                }
            } catch  {
                return !1;
            }
            return !1;
        },
        getPairingExpiry () {
            return Date.now() + L.FOUR_MINUTES_MS;
        },
        getNetworkId (e) {
            return e?.split(":")[1];
        },
        getPlainAddress (e) {
            return e?.split(":")[2];
        },
        async wait (e) {
            return new Promise((t)=>{
                setTimeout(t, e);
            });
        },
        debounce (e, t = 500) {
            let n;
            return (...s)=>{
                function r() {
                    e(...s);
                }
                n && clearTimeout(n), n = setTimeout(r, t);
            };
        },
        isHttpUrl (e) {
            return e.startsWith("http://") || e.startsWith("https://");
        },
        formatNativeUrl (e, t, n = null) {
            if (E.isHttpUrl(e)) return this.formatUniversalUrl(e, t);
            let s = e, r = n;
            s.includes("://") || (s = e.replaceAll("/", "").replaceAll(":", ""), s = `${s}://`), s.endsWith("/") || (s = `${s}/`), r && !r?.endsWith("/") && (r = `${r}/`), this.isTelegram() && this.isAndroid() && (t = encodeURIComponent(t));
            const a = encodeURIComponent(t);
            return {
                redirect: `${s}wc?uri=${a}`,
                redirectUniversalLink: r ? `${r}wc?uri=${a}` : void 0,
                href: s
            };
        },
        formatUniversalUrl (e, t) {
            if (!E.isHttpUrl(e)) return this.formatNativeUrl(e, t);
            let n = e;
            n.endsWith("/") || (n = `${n}/`);
            const s = encodeURIComponent(t);
            return {
                redirect: `${n}wc?uri=${s}`,
                href: n
            };
        },
        getOpenTargetForPlatform (e) {
            return e === "popupWindow" ? e : this.isTelegram() ? C.getTelegramSocialProvider() ? "_top" : "_blank" : e;
        },
        openHref (e, t, n) {
            window?.open(e, this.getOpenTargetForPlatform(t), n || "noreferrer noopener");
        },
        returnOpenHref (e, t, n) {
            return window?.open(e, this.getOpenTargetForPlatform(t), n || "noreferrer noopener");
        },
        isTelegram () {
            return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
        },
        isPWA () {
            if (typeof window > "u") return !1;
            const e = window?.matchMedia && typeof window.matchMedia == "function" ? window.matchMedia("(display-mode: standalone)")?.matches : !1, t = window?.navigator?.standalone;
            return !!(e || t);
        },
        async preloadImage (e) {
            const t = new Promise((n, s)=>{
                const r = new Image;
                r.onload = n, r.onerror = s, r.crossOrigin = "anonymous", r.src = e;
            });
            return Promise.race([
                t,
                E.wait(2e3)
            ]);
        },
        parseBalance (e, t) {
            let n = "0.000";
            if (typeof e == "string") {
                const d = Number(e);
                if (!isNaN(d)) {
                    const l = (Math.floor(d * 1e3) / 1e3).toFixed(3);
                    l && (n = l);
                }
            }
            const [s, r] = n.split("."), a = s || "0", o = r || "000";
            return {
                formattedText: `${a}.${o}${t ? ` ${t}` : ""}`,
                value: a,
                decimals: o,
                symbol: t
            };
        },
        getApiUrl () {
            return h.W3M_API_URL;
        },
        getBlockchainApiUrl () {
            return h.BLOCKCHAIN_API_RPC_URL;
        },
        getAnalyticsUrl () {
            return h.PULSE_API_URL;
        },
        getUUID () {
            return crypto?.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (e)=>{
                const t = Math.random() * 16 | 0;
                return (e === "x" ? t : t & 3 | 8).toString(16);
            });
        },
        parseError (e) {
            return typeof e == "string" ? e : typeof e?.issues?.[0]?.message == "string" ? e.issues[0].message : e instanceof Error ? e.message : "Unknown error";
        },
        sortRequestedNetworks (e, t = []) {
            const n = {};
            return t && e && (e.forEach((s, r)=>{
                n[s] = r;
            }), t.sort((s, r)=>{
                const a = n[s.id], o = n[r.id];
                return a !== void 0 && o !== void 0 ? a - o : a !== void 0 ? -1 : o !== void 0 ? 1 : 0;
            })), t;
        },
        calculateBalance (e) {
            let t = 0;
            for (const n of e)t += n.value ?? 0;
            return t;
        },
        formatTokenBalance (e) {
            const t = e.toFixed(2), [n, s] = t.split(".");
            return {
                dollars: n,
                pennies: s
            };
        },
        isAddress (e, t = "eip155") {
            switch(t){
                case "eip155":
                    if (/^(?:0x)?[0-9a-f]{40}$/iu.test(e)) {
                        if (/^(?:0x)?[0-9a-f]{40}$/iu.test(e) || /^(?:0x)?[0-9A-F]{40}$/iu.test(e)) return !0;
                    } else return !1;
                    return !1;
                case "solana":
                    return /[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(e);
                case "bip122":
                    {
                        const n = /^[1][a-km-zA-HJ-NP-Z1-9]{25,34}$/u.test(e), s = /^[3][a-km-zA-HJ-NP-Z1-9]{25,34}$/u.test(e), r = /^bc1[a-z0-9]{39,87}$/u.test(e), a = /^bc1p[a-z0-9]{58}$/u.test(e);
                        return n || s || r || a;
                    }
                default:
                    return !1;
            }
        },
        uniqueBy (e, t) {
            const n = new Set;
            return e.filter((s)=>{
                const r = s[t];
                return n.has(r) ? !1 : (n.add(r), !0);
            });
        },
        generateSdkVersion (e, t, n) {
            const r = e.length === 0 ? L.ADAPTER_TYPES.UNIVERSAL : e.map((a)=>a.adapterType).join(",");
            return `${t}-${r}-${n}`;
        },
        createAccount (e, t, n, s, r) {
            return {
                namespace: e,
                address: t,
                type: n,
                publicKey: s,
                path: r
            };
        },
        isCaipAddress (e) {
            if (typeof e != "string") return !1;
            const t = e.split(":"), n = t[0];
            return t.filter(Boolean).length === 3 && n in h.CHAIN_NAME_MAP;
        },
        getAccount (e) {
            return e ? typeof e == "string" ? {
                address: e,
                chainId: void 0
            } : {
                address: e.address,
                chainId: e.chainId
            } : {
                address: void 0,
                chainId: void 0
            };
        },
        isMac () {
            const e = window?.navigator.userAgent.toLowerCase();
            return e.includes("macintosh") && !e.includes("safari");
        },
        formatTelegramSocialLoginUrl (e) {
            const t = `--${encodeURIComponent(window?.location.href)}`, n = "state=";
            if (new URL(e).host === "auth.magic.link") {
                const r = "provider_authorization_url=", a = e.substring(e.indexOf(r) + r.length), o = this.injectIntoUrl(decodeURIComponent(a), n, t);
                return e.replace(a, encodeURIComponent(o));
            }
            return this.injectIntoUrl(e, n, t);
        },
        injectIntoUrl (e, t, n) {
            const s = e.indexOf(t);
            if (s === -1) throw new Error(`${t} parameter not found in the URL: ${e}`);
            const r = e.indexOf("&", s), a = t.length, o = r !== -1 ? r : e.length, i = e.substring(0, s + a), d = e.substring(s + a, o), l = e.substring(r), u = d + n;
            return i + u + l;
        },
        isNumber (e) {
            return typeof e != "number" && typeof e != "string" ? !1 : !isNaN(Number(e));
        }
    };
    vt = {
        STORAGE_KEY: "@appkit-wallet/",
        SMART_ACCOUNT_ENABLED_NETWORKS: "SMART_ACCOUNT_ENABLED_NETWORKS"
    };
    ve = {
        SAFE_RPC_METHODS: [
            "eth_accounts",
            "eth_blockNumber",
            "eth_call",
            "eth_chainId",
            "eth_estimateGas",
            "eth_feeHistory",
            "eth_gasPrice",
            "eth_getAccount",
            "eth_getBalance",
            "eth_getBlockByHash",
            "eth_getBlockByNumber",
            "eth_getBlockReceipts",
            "eth_getBlockTransactionCountByHash",
            "eth_getBlockTransactionCountByNumber",
            "eth_getCode",
            "eth_getFilterChanges",
            "eth_getFilterLogs",
            "eth_getLogs",
            "eth_getProof",
            "eth_getStorageAt",
            "eth_getTransactionByBlockHashAndIndex",
            "eth_getTransactionByBlockNumberAndIndex",
            "eth_getTransactionByHash",
            "eth_getTransactionCount",
            "eth_getTransactionReceipt",
            "eth_getUncleCountByBlockHash",
            "eth_getUncleCountByBlockNumber",
            "eth_maxPriorityFeePerGas",
            "eth_newBlockFilter",
            "eth_newFilter",
            "eth_newPendingTransactionFilter",
            "eth_sendRawTransaction",
            "eth_syncing",
            "eth_uninstallFilter",
            "wallet_getCapabilities",
            "wallet_getCallsStatus",
            "eth_getUserOperationReceipt",
            "eth_estimateUserOperationGas",
            "eth_getUserOperationByHash",
            "eth_supportedEntryPoints",
            "wallet_getAssets"
        ],
        NOT_SAFE_RPC_METHODS: [
            "personal_sign",
            "eth_signTypedData_v4",
            "eth_sendTransaction",
            "solana_signMessage",
            "solana_signTransaction",
            "solana_signAllTransactions",
            "solana_signAndSendTransaction",
            "wallet_sendCalls",
            "wallet_grantPermissions",
            "wallet_revokePermissions",
            "eth_sendUserOperation"
        ],
        GET_CHAIN_ID: "eth_chainId",
        RPC_METHOD_NOT_ALLOWED_MESSAGE: "Requested RPC call is not allowed",
        RPC_METHOD_NOT_ALLOWED_UI_MESSAGE: "Action not allowed",
        ACCOUNT_TYPES: {
            EOA: "eoa",
            SMART_ACCOUNT: "smartAccount"
        }
    };
    Xs = {
        set (e, t) {
            Gt.isClient && localStorage.setItem(`${vt.STORAGE_KEY}${e}`, t);
        },
        get (e) {
            return Gt.isClient ? localStorage.getItem(`${vt.STORAGE_KEY}${e}`) : null;
        },
        delete (e, t) {
            Gt.isClient && (t ? localStorage.removeItem(e) : localStorage.removeItem(`${vt.STORAGE_KEY}${e}`));
        }
    };
    Gt = {
        isClient: typeof window < "u"
    };
    async function st(...e) {
        const t = await fetch(...e);
        if (!t.ok) throw new Error(`HTTP status code: ${t.status}`, {
            cause: t
        });
        return t;
    }
    wt = class {
        constructor({ baseUrl: t, clientId: n }){
            this.baseUrl = t, this.clientId = n;
        }
        async get({ headers: t, signal: n, cache: s, ...r }) {
            const a = this.createUrl(r);
            return (await st(a, {
                method: "GET",
                headers: t,
                signal: n,
                cache: s
            })).json();
        }
        async getBlob({ headers: t, signal: n, ...s }) {
            const r = this.createUrl(s);
            return (await st(r, {
                method: "GET",
                headers: t,
                signal: n
            })).blob();
        }
        async post({ body: t, headers: n, signal: s, ...r }) {
            const a = this.createUrl(r);
            return (await st(a, {
                method: "POST",
                headers: n,
                body: t ? JSON.stringify(t) : void 0,
                signal: s
            })).json();
        }
        async put({ body: t, headers: n, signal: s, ...r }) {
            const a = this.createUrl(r);
            return (await st(a, {
                method: "PUT",
                headers: n,
                body: t ? JSON.stringify(t) : void 0,
                signal: s
            })).json();
        }
        async delete({ body: t, headers: n, signal: s, ...r }) {
            const a = this.createUrl(r);
            return (await st(a, {
                method: "DELETE",
                headers: n,
                body: t ? JSON.stringify(t) : void 0,
                signal: s
            })).json();
        }
        createUrl({ path: t, params: n }) {
            const s = new URL(t, this.baseUrl);
            return n && Object.entries(n).forEach(([r, a])=>{
                a && s.searchParams.append(r, a);
            }), this.clientId && s.searchParams.append("clientId", this.clientId), s;
        }
        sendBeacon({ body: t, ...n }) {
            const s = this.createUrl(n);
            return navigator.sendBeacon(s.toString(), t ? JSON.stringify(t) : void 0);
        }
    };
    let sn, _, Be, G, Qs, Zs, as, Z, er, tr, nr, sr, Oe, rr;
    sn = {
        getFeatureValue (e, t) {
            const n = t?.[e];
            return n === void 0 ? L.DEFAULT_FEATURES[e] : n;
        },
        filterSocialsByPlatform (e) {
            if (!e || !e.length) return e;
            let t = e;
            return E.isTelegram() && (E.isIos() && (t = t.filter((n)=>n !== "google")), E.isMac() && (t = t.filter((n)=>n !== "x")), E.isAndroid() && (t = t.filter((n)=>![
                    "facebook",
                    "x"
                ].includes(n)))), E.isMobile() && (t = t.filter((n)=>n !== "facebook")), t;
        },
        isSocialsEnabled () {
            return Array.isArray(f.state.features?.socials) && f.state.features?.socials.length > 0 || Array.isArray(f.state.remoteFeatures?.socials) && f.state.remoteFeatures?.socials.length > 0;
        },
        isEmailEnabled () {
            return !!(f.state.features?.email || f.state.remoteFeatures?.email);
        }
    };
    _ = V({
        features: L.DEFAULT_FEATURES,
        projectId: "",
        sdkType: "appkit",
        sdkVersion: "html-wagmi-undefined",
        defaultAccountTypes: L.DEFAULT_ACCOUNT_TYPES,
        enableNetworkSwitch: !0,
        experimental_preferUniversalLinks: !1,
        remoteFeatures: {},
        enableMobileFullScreen: !1,
        coinbasePreference: "all"
    });
    f = {
        state: _,
        subscribeKey (e, t) {
            return Q(_, e, t);
        },
        setOptions (e) {
            Object.assign(_, e);
        },
        setRemoteFeatures (e) {
            if (!e) return;
            const t = {
                ..._.remoteFeatures,
                ...e
            };
            _.remoteFeatures = t, _.remoteFeatures?.socials && (_.remoteFeatures.socials = sn.filterSocialsByPlatform(_.remoteFeatures.socials)), _.features?.pay && (_.remoteFeatures.email = !1, _.remoteFeatures.socials = !1);
        },
        setFeatures (e) {
            if (!e) return;
            _.features || (_.features = L.DEFAULT_FEATURES);
            const t = {
                ..._.features,
                ...e
            };
            _.features = t, _.features?.pay && _.remoteFeatures && (_.remoteFeatures.email = !1, _.remoteFeatures.socials = !1);
        },
        setProjectId (e) {
            _.projectId = e;
        },
        setCustomRpcUrls (e) {
            _.customRpcUrls = e;
        },
        setAllWallets (e) {
            _.allWallets = e;
        },
        setIncludeWalletIds (e) {
            _.includeWalletIds = e;
        },
        setExcludeWalletIds (e) {
            _.excludeWalletIds = e;
        },
        setFeaturedWalletIds (e) {
            _.featuredWalletIds = e;
        },
        setTokens (e) {
            _.tokens = e;
        },
        setTermsConditionsUrl (e) {
            _.termsConditionsUrl = e;
        },
        setPrivacyPolicyUrl (e) {
            _.privacyPolicyUrl = e;
        },
        setCustomWallets (e) {
            _.customWallets = e;
        },
        setIsSiweEnabled (e) {
            _.isSiweEnabled = e;
        },
        setIsUniversalProvider (e) {
            _.isUniversalProvider = e;
        },
        setSdkVersion (e) {
            _.sdkVersion = e;
        },
        setMetadata (e) {
            _.metadata = e;
        },
        setDisableAppend (e) {
            _.disableAppend = e;
        },
        setEIP6963Enabled (e) {
            _.enableEIP6963 = e;
        },
        setDebug (e) {
            _.debug = e;
        },
        setEnableWalletGuide (e) {
            _.enableWalletGuide = e;
        },
        setEnableAuthLogger (e) {
            _.enableAuthLogger = e;
        },
        setEnableWallets (e) {
            _.enableWallets = e;
        },
        setPreferUniversalLinks (e) {
            _.experimental_preferUniversalLinks = e;
        },
        setSIWX (e) {
            if (e) for (const [t, n] of Object.entries(L.SIWX_DEFAULTS))e[t] ??= n;
            _.siwx = e;
        },
        setConnectMethodsOrder (e) {
            _.features = {
                ..._.features,
                connectMethodsOrder: e
            };
        },
        setWalletFeaturesOrder (e) {
            _.features = {
                ..._.features,
                walletFeaturesOrder: e
            };
        },
        setSocialsOrder (e) {
            _.remoteFeatures = {
                ..._.remoteFeatures,
                socials: e
            };
        },
        setCollapseWallets (e) {
            _.features = {
                ..._.features,
                collapseWallets: e
            };
        },
        setEnableEmbedded (e) {
            _.enableEmbedded = e;
        },
        setAllowUnsupportedChain (e) {
            _.allowUnsupportedChain = e;
        },
        setManualWCControl (e) {
            _.manualWCControl = e;
        },
        setEnableNetworkSwitch (e) {
            _.enableNetworkSwitch = e;
        },
        setEnableMobileFullScreen (e) {
            _.enableMobileFullScreen = E.isMobile() && e;
        },
        setEnableReconnect (e) {
            _.enableReconnect = e;
        },
        setCoinbasePreference (e) {
            _.coinbasePreference = e;
        },
        setDefaultAccountTypes (e = {}) {
            Object.entries(e).forEach(([t, n])=>{
                n && (_.defaultAccountTypes[t] = n);
            });
        },
        setUniversalProviderConfigOverride (e) {
            _.universalProviderConfigOverride = e;
        },
        getUniversalProviderConfigOverride () {
            return _.universalProviderConfigOverride;
        },
        getSnapshot () {
            return ut(_);
        }
    };
    Be = Object.freeze({
        message: "",
        variant: "success",
        svg: void 0,
        open: !1,
        autoClose: !0
    });
    G = V({
        ...Be
    });
    Qs = {
        state: G,
        subscribeKey (e, t) {
            return Q(G, e, t);
        },
        showLoading (e, t = {}) {
            this._showMessage({
                message: e,
                variant: "loading",
                ...t
            });
        },
        showSuccess (e) {
            this._showMessage({
                message: e,
                variant: "success"
            });
        },
        showSvg (e, t) {
            this._showMessage({
                message: e,
                svg: t
            });
        },
        showError (e) {
            const t = E.parseError(e);
            this._showMessage({
                message: t,
                variant: "error"
            });
        },
        hide () {
            G.message = Be.message, G.variant = Be.variant, G.svg = Be.svg, G.open = Be.open, G.autoClose = Be.autoClose;
        },
        _showMessage ({ message: e, svg: t, variant: n = "success", autoClose: s = Be.autoClose }) {
            G.open ? (G.open = !1, setTimeout(()=>{
                G.message = e, G.variant = n, G.svg = t, G.open = !0, G.autoClose = s;
            }, 150)) : (G.message = e, G.variant = n, G.svg = t, G.open = !0, G.autoClose = s);
        }
    };
    Ae = Qs;
    Zs = {
        purchaseCurrencies: [
            {
                id: "2b92315d-eab7-5bef-84fa-089a131333f5",
                name: "USD Coin",
                symbol: "USDC",
                networks: [
                    {
                        name: "ethereum-mainnet",
                        display_name: "Ethereum",
                        chain_id: "1",
                        contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
                    },
                    {
                        name: "polygon-mainnet",
                        display_name: "Polygon",
                        chain_id: "137",
                        contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
                    }
                ]
            },
            {
                id: "2b92315d-eab7-5bef-84fa-089a131333f5",
                name: "Ether",
                symbol: "ETH",
                networks: [
                    {
                        name: "ethereum-mainnet",
                        display_name: "Ethereum",
                        chain_id: "1",
                        contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
                    },
                    {
                        name: "polygon-mainnet",
                        display_name: "Polygon",
                        chain_id: "137",
                        contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
                    }
                ]
            }
        ],
        paymentCurrencies: [
            {
                id: "USD",
                payment_method_limits: [
                    {
                        id: "card",
                        min: "10.00",
                        max: "7500.00"
                    },
                    {
                        id: "ach_bank_account",
                        min: "10.00",
                        max: "25000.00"
                    }
                ]
            },
            {
                id: "EUR",
                payment_method_limits: [
                    {
                        id: "card",
                        min: "10.00",
                        max: "7500.00"
                    },
                    {
                        id: "ach_bank_account",
                        min: "10.00",
                        max: "25000.00"
                    }
                ]
            }
        ]
    };
    as = E.getBlockchainApiUrl();
    Z = V({
        clientId: null,
        api: new wt({
            baseUrl: as,
            clientId: null
        }),
        supportedChains: {
            http: [],
            ws: []
        }
    });
    v = {
        state: Z,
        async get (e) {
            const { st: t, sv: n } = v.getSdkProperties(), s = f.state.projectId, r = {
                ...e.params || {},
                st: t,
                sv: n,
                projectId: s
            };
            return Z.api.get({
                ...e,
                params: r
            });
        },
        getSdkProperties () {
            const { sdkType: e, sdkVersion: t } = f.state;
            return {
                st: e || "unknown",
                sv: t || "unknown"
            };
        },
        async isNetworkSupported (e) {
            if (!e) return !1;
            try {
                Z.supportedChains.http.length || await v.getSupportedNetworks();
            } catch  {
                return !1;
            }
            return Z.supportedChains.http.includes(e);
        },
        async getSupportedNetworks () {
            try {
                const e = await v.get({
                    path: "v1/supported-chains"
                });
                return Z.supportedChains = e, e;
            } catch  {
                return Z.supportedChains;
            }
        },
        async fetchIdentity ({ address: e }) {
            const t = C.getIdentityFromCacheForAddress(e);
            if (t) return t;
            const n = await v.get({
                path: `/v1/identity/${e}`,
                params: {
                    sender: c.state.activeCaipAddress ? E.getPlainAddress(c.state.activeCaipAddress) : void 0
                }
            });
            return C.updateIdentityCache({
                address: e,
                identity: n,
                timestamp: Date.now()
            }), n;
        },
        async fetchTransactions ({ account: e, cursor: t, signal: n, cache: s, chainId: r }) {
            if (!await v.isNetworkSupported(c.state.activeCaipNetwork?.caipNetworkId)) return {
                data: [],
                next: void 0
            };
            const o = C.getTransactionsCacheForAddress({
                address: e,
                chainId: r
            });
            if (o) return o;
            const i = await v.get({
                path: `/v1/account/${e}/history`,
                params: {
                    cursor: t,
                    chainId: r
                },
                signal: n,
                cache: s
            });
            return C.updateTransactionsCache({
                address: e,
                chainId: r,
                timestamp: Date.now(),
                transactions: i
            }), i;
        },
        async fetchSwapQuote ({ amount: e, userAddress: t, from: n, to: s, gasPrice: r }) {
            return await v.isNetworkSupported(c.state.activeCaipNetwork?.caipNetworkId) ? v.get({
                path: "/v1/convert/quotes",
                headers: {
                    "Content-Type": "application/json"
                },
                params: {
                    amount: e,
                    userAddress: t,
                    from: n,
                    to: s,
                    gasPrice: r
                }
            }) : {
                quotes: []
            };
        },
        async fetchSwapTokens ({ chainId: e }) {
            return await v.isNetworkSupported(c.state.activeCaipNetwork?.caipNetworkId) ? v.get({
                path: "/v1/convert/tokens",
                params: {
                    chainId: e
                }
            }) : {
                tokens: []
            };
        },
        async getAddressBalance ({ caipNetworkId: e, address: t }) {
            return Z.api.post({
                path: `/v1?chainId=${e}&projectId=${f.state.projectId}`,
                body: {
                    id: "1",
                    jsonrpc: "2.0",
                    method: "getAddressBalance",
                    params: {
                        address: t
                    }
                }
            }).then((n)=>n.result);
        },
        async fetchTokenPrice ({ addresses: e, caipNetworkId: t = c.state.activeCaipNetwork?.caipNetworkId }) {
            if (!await v.isNetworkSupported(t)) return {
                fungibles: []
            };
            const s = C.getTokenPriceCacheForAddresses(e);
            if (s) return s;
            const r = await Z.api.post({
                path: "/v1/fungible/price",
                body: {
                    currency: "usd",
                    addresses: e,
                    projectId: f.state.projectId
                },
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return C.updateTokenPriceCache({
                addresses: e,
                timestamp: Date.now(),
                tokenPrice: r
            }), r;
        },
        async fetchSwapAllowance ({ tokenAddress: e, userAddress: t }) {
            return await v.isNetworkSupported(c.state.activeCaipNetwork?.caipNetworkId) ? v.get({
                path: "/v1/convert/allowance",
                params: {
                    tokenAddress: e,
                    userAddress: t
                },
                headers: {
                    "Content-Type": "application/json"
                }
            }) : {
                allowance: "0"
            };
        },
        async fetchGasPrice ({ chainId: e }) {
            const { st: t, sv: n } = v.getSdkProperties();
            if (!await v.isNetworkSupported(c.state.activeCaipNetwork?.caipNetworkId)) throw new Error("Network not supported for Gas Price");
            return v.get({
                path: "/v1/convert/gas-price",
                headers: {
                    "Content-Type": "application/json"
                },
                params: {
                    chainId: e,
                    st: t,
                    sv: n
                }
            });
        },
        async generateSwapCalldata ({ amount: e, from: t, to: n, userAddress: s, disableEstimate: r }) {
            if (!await v.isNetworkSupported(c.state.activeCaipNetwork?.caipNetworkId)) throw new Error("Network not supported for Swaps");
            return Z.api.post({
                path: "/v1/convert/build-transaction",
                headers: {
                    "Content-Type": "application/json"
                },
                body: {
                    amount: e,
                    eip155: {
                        slippage: L.CONVERT_SLIPPAGE_TOLERANCE
                    },
                    projectId: f.state.projectId,
                    from: t,
                    to: n,
                    userAddress: s,
                    disableEstimate: r
                }
            });
        },
        async generateApproveCalldata ({ from: e, to: t, userAddress: n }) {
            const { st: s, sv: r } = v.getSdkProperties();
            if (!await v.isNetworkSupported(c.state.activeCaipNetwork?.caipNetworkId)) throw new Error("Network not supported for Swaps");
            return v.get({
                path: "/v1/convert/build-approve",
                headers: {
                    "Content-Type": "application/json"
                },
                params: {
                    userAddress: n,
                    from: e,
                    to: t,
                    st: s,
                    sv: r
                }
            });
        },
        async getBalance (e, t, n) {
            const { st: s, sv: r } = v.getSdkProperties();
            if (!await v.isNetworkSupported(c.state.activeCaipNetwork?.caipNetworkId)) return Ae.showError("Token Balance Unavailable"), {
                balances: []
            };
            const o = `${t}:${e}`, i = C.getBalanceCacheForCaipAddress(o);
            if (i) return i;
            const d = await v.get({
                path: `/v1/account/${e}/balance`,
                params: {
                    currency: "usd",
                    chainId: t,
                    forceUpdate: n,
                    st: s,
                    sv: r
                }
            });
            return C.updateBalanceCache({
                caipAddress: o,
                balance: d,
                timestamp: Date.now()
            }), d;
        },
        async lookupEnsName (e) {
            return await v.isNetworkSupported(c.state.activeCaipNetwork?.caipNetworkId) ? v.get({
                path: `/v1/profile/account/${e}`,
                params: {
                    apiVersion: "2"
                }
            }) : {
                addresses: {},
                attributes: []
            };
        },
        async reverseLookupEnsName ({ address: e }) {
            if (!await v.isNetworkSupported(c.state.activeCaipNetwork?.caipNetworkId)) return [];
            const n = c.getAccountData()?.address;
            return v.get({
                path: `/v1/profile/reverse/${e}`,
                params: {
                    sender: n,
                    apiVersion: "2"
                }
            });
        },
        async getEnsNameSuggestions (e) {
            return await v.isNetworkSupported(c.state.activeCaipNetwork?.caipNetworkId) ? v.get({
                path: `/v1/profile/suggestions/${e}`,
                params: {
                    zone: "reown.id"
                }
            }) : {
                suggestions: []
            };
        },
        async registerEnsName ({ coinType: e, address: t, message: n, signature: s }) {
            return await v.isNetworkSupported(c.state.activeCaipNetwork?.caipNetworkId) ? Z.api.post({
                path: "/v1/profile/account",
                body: {
                    coin_type: e,
                    address: t,
                    message: n,
                    signature: s
                },
                headers: {
                    "Content-Type": "application/json"
                }
            }) : {
                success: !1
            };
        },
        async generateOnRampURL ({ destinationWallets: e, partnerUserId: t, defaultNetwork: n, purchaseAmount: s, paymentAmount: r }) {
            return await v.isNetworkSupported(c.state.activeCaipNetwork?.caipNetworkId) ? (await Z.api.post({
                path: "/v1/generators/onrampurl",
                params: {
                    projectId: f.state.projectId
                },
                body: {
                    destinationWallets: e,
                    defaultNetwork: n,
                    partnerUserId: t,
                    defaultExperience: "buy",
                    presetCryptoAmount: s,
                    presetFiatAmount: r
                }
            })).url : "";
        },
        async getOnrampOptions () {
            if (!await v.isNetworkSupported(c.state.activeCaipNetwork?.caipNetworkId)) return {
                paymentCurrencies: [],
                purchaseCurrencies: []
            };
            try {
                return await v.get({
                    path: "/v1/onramp/options"
                });
            } catch  {
                return Zs;
            }
        },
        async getOnrampQuote ({ purchaseCurrency: e, paymentCurrency: t, amount: n, network: s }) {
            try {
                return await v.isNetworkSupported(c.state.activeCaipNetwork?.caipNetworkId) ? await Z.api.post({
                    path: "/v1/onramp/quote",
                    params: {
                        projectId: f.state.projectId
                    },
                    body: {
                        purchaseCurrency: e,
                        paymentCurrency: t,
                        amount: n,
                        network: s
                    }
                }) : null;
            } catch  {
                return {
                    networkFee: {
                        amount: n,
                        currency: t.id
                    },
                    paymentSubtotal: {
                        amount: n,
                        currency: t.id
                    },
                    paymentTotal: {
                        amount: n,
                        currency: t.id
                    },
                    purchaseAmount: {
                        amount: n,
                        currency: t.id
                    },
                    quoteId: "mocked-quote-id"
                };
            }
        },
        async getSmartSessions (e) {
            return await v.isNetworkSupported(c.state.activeCaipNetwork?.caipNetworkId) ? v.get({
                path: `/v1/sessions/${e}`
            }) : [];
        },
        async revokeSmartSession (e, t, n) {
            return await v.isNetworkSupported(c.state.activeCaipNetwork?.caipNetworkId) ? Z.api.post({
                path: `/v1/sessions/${e}/revoke`,
                params: {
                    projectId: f.state.projectId
                },
                body: {
                    pci: t,
                    signature: n
                }
            }) : {
                success: !1
            };
        },
        setClientId (e) {
            Z.clientId = e, Z.api = new wt({
                baseUrl: as,
                clientId: e
            });
        }
    };
    er = Object.freeze({
        enabled: !0,
        events: []
    });
    tr = new wt({
        baseUrl: E.getAnalyticsUrl(),
        clientId: null
    });
    nr = 5;
    sr = 60 * 1e3;
    Oe = V({
        ...er
    });
    rr = {
        state: Oe,
        subscribeKey (e, t) {
            return Q(Oe, e, t);
        },
        async sendError (e, t) {
            if (!Oe.enabled) return;
            const n = Date.now();
            if (Oe.events.filter((a)=>{
                const o = new Date(a.properties.timestamp || "").getTime();
                return n - o < sr;
            }).length >= nr) return;
            const r = {
                type: "error",
                event: t,
                properties: {
                    errorType: e.name,
                    errorMessage: e.message,
                    stackTrace: e.stack,
                    timestamp: new Date().toISOString()
                }
            };
            Oe.events.push(r);
            try {
                if (typeof window > "u") return;
                const { projectId: a, sdkType: o, sdkVersion: i } = f.state;
                await tr.post({
                    path: "/e",
                    params: {
                        projectId: a,
                        st: o,
                        sv: i || "html-wagmi-4.2.2"
                    },
                    body: {
                        eventId: E.getUUID(),
                        url: window.location.href,
                        domain: window.location.hostname,
                        timestamp: new Date().toISOString(),
                        props: {
                            type: "error",
                            event: t,
                            errorType: e.name,
                            errorMessage: e.message,
                            stackTrace: e.stack
                        }
                    }
                });
            } catch  {}
        },
        enable () {
            Oe.enabled = !0;
        },
        disable () {
            Oe.enabled = !1;
        },
        clearEvents () {
            Oe.events = [];
        }
    };
    Ke = class extends Error {
        constructor(t, n, s){
            super(t), this.originalName = "AppKitError", this.name = "AppKitError", this.category = n, this.originalError = s, s && s instanceof Error && (this.originalName = s.name), Object.setPrototypeOf(this, Ke.prototype);
            let r = !1;
            if (s instanceof Error && typeof s.stack == "string" && s.stack) {
                const a = s.stack, o = a.indexOf(`
`);
                if (o > -1) {
                    const i = a.substring(o + 1);
                    this.stack = `${this.name}: ${this.message}
${i}`, r = !0;
                }
            }
            r || (Error.captureStackTrace ? Error.captureStackTrace(this, Ke) : this.stack || (this.stack = `${this.name}: ${this.message}`));
        }
    };
    function vn(e, t) {
        let n = "";
        try {
            e instanceof Error ? n = e.message : typeof e == "string" ? n = e : typeof e == "object" && e !== null ? Object.keys(e).length === 0 ? n = "Unknown error" : n = e?.message || JSON.stringify(e) : n = String(e);
        } catch (r) {
            n = "Unknown error", console.error("Error parsing error message", r);
        }
        const s = e instanceof Ke ? e : new Ke(n, t, e);
        throw rr.sendError(s, s.category), s;
    }
    he = function(e, t = "INTERNAL_SDK_ERROR") {
        const n = {};
        return Object.keys(e).forEach((s)=>{
            const r = e[s];
            if (typeof r == "function") {
                let a = r;
                r.constructor.name === "AsyncFunction" ? a = async (...o)=>{
                    try {
                        return await r(...o);
                    } catch (i) {
                        return vn(i, t);
                    }
                } : a = (...o)=>{
                    try {
                        return r(...o);
                    } catch (i) {
                        return vn(i, t);
                    }
                }, n[s] = a;
            } else n[s] = r;
        }), n;
    };
    let ae, ar, On, Je, le, or, ir, cr, dr, lr, Rn, z, ur, ee, pr, Pn, hr, R, fr, H, Cr, ye, rn, os, mr, B, gr, wr, rt;
    ae = V({
        walletImages: {},
        networkImages: {},
        chainImages: {},
        connectorImages: {},
        tokenImages: {},
        currencyImages: {}
    });
    ar = {
        state: ae,
        subscribeNetworkImages (e) {
            return X(ae.networkImages, ()=>e(ae.networkImages));
        },
        subscribeKey (e, t) {
            return Q(ae, e, t);
        },
        subscribe (e) {
            return X(ae, ()=>e(ae));
        },
        setWalletImage (e, t) {
            ae.walletImages[e] = t;
        },
        setNetworkImage (e, t) {
            ae.networkImages[e] = t;
        },
        setChainImage (e, t) {
            ae.chainImages[e] = t;
        },
        setConnectorImage (e, t) {
            ae.connectorImages = {
                ...ae.connectorImages,
                [e]: t
            };
        },
        setTokenImage (e, t) {
            ae.tokenImages[e] = t;
        },
        setCurrencyImage (e, t) {
            ae.currencyImages[e] = t;
        }
    };
    ue = he(ar);
    On = {
        eip155: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
        solana: "a1b58899-f671-4276-6a5e-56ca5bd59700",
        polkadot: "",
        bip122: "0b4838db-0161-4ffe-022d-532bf03dba00",
        cosmos: "",
        sui: "",
        stacks: "",
        ton: "20f673c0-095e-49b2-07cf-eb5049dcf600"
    };
    Je = V({
        networkImagePromises: {},
        tokenImagePromises: {}
    });
    Lt = {
        async fetchWalletImage (e) {
            if (e) return await N._fetchWalletImage(e), this.getWalletImageById(e);
        },
        async fetchNetworkImage (e) {
            if (!e) return;
            const t = this.getNetworkImageById(e);
            return t || (Je.networkImagePromises[e] || (Je.networkImagePromises[e] = N._fetchNetworkImage(e)), await Je.networkImagePromises[e], this.getNetworkImageById(e));
        },
        async fetchTokenImage (e) {
            if (e) return Je.tokenImagePromises[e] || (Je.tokenImagePromises[e] = N._fetchTokenImage(e)), await Je.tokenImagePromises[e], this.getTokenImage(e);
        },
        getWalletImageById (e) {
            if (e) return ue.state.walletImages[e];
        },
        getWalletImage (e) {
            if (e?.image_url) return e?.image_url;
            if (e?.image_id) return ue.state.walletImages[e.image_id];
        },
        getNetworkImage (e) {
            if (e?.assets?.imageUrl) return e?.assets?.imageUrl;
            if (e?.assets?.imageId) return ue.state.networkImages[e.assets.imageId];
        },
        getNetworkImageById (e) {
            if (e) return ue.state.networkImages[e];
        },
        getConnectorImage (e) {
            if (e?.imageUrl) return e.imageUrl;
            if (e?.info?.icon) return e.info.icon;
            if (e?.imageId) return ue.state.connectorImages[e.imageId];
        },
        getChainImage (e) {
            return ue.state.networkImages[On[e]];
        },
        getTokenImage (e) {
            if (e) return ue.state.tokenImages[e];
        },
        getWalletImageUrl (e) {
            if (!e) return "";
            const { projectId: t, sdkType: n, sdkVersion: s } = f.state, r = new URL(`${h.W3M_API_URL}/getWalletImage/${e}`);
            return r.searchParams.set("projectId", t), r.searchParams.set("st", n), r.searchParams.set("sv", s), r.toString();
        },
        getAssetImageUrl (e) {
            if (!e) return "";
            const { projectId: t, sdkType: n, sdkVersion: s } = f.state, r = new URL(`${h.W3M_API_URL}/public/getAssetImage/${e}`);
            return r.searchParams.set("projectId", t), r.searchParams.set("st", n), r.searchParams.set("sv", s), r.toString();
        },
        getChainNamespaceImageUrl (e) {
            return this.getAssetImageUrl(On[e]);
        },
        async getImageByToken (e, t) {
            if (e === "native") {
                const s = h.NATIVE_IMAGE_IDS_BY_NAMESPACE[t] ?? null;
                return s ? Lt.fetchNetworkImage(s) : void 0;
            }
            const [, n] = Object.entries(h.TOKEN_SYMBOLS_BY_ADDRESS).find(([s])=>s.toLowerCase() === e.toLowerCase()) ?? [];
            if (n) return Lt.fetchTokenImage(n);
        }
    };
    le = {
        PHANTOM: {
            id: "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
            url: "https://phantom.app"
        },
        SOLFLARE: {
            id: "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
            url: "https://solflare.com"
        },
        COINBASE: {
            id: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
            url: "https://go.cb-w.com"
        },
        BINANCE: {
            id: "2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25",
            appId: "yFK5FCqYprrXDiVFbhyRx7",
            deeplink: "bnc://app.binance.com/mp/app",
            url: "https://app.binance.com/en/download"
        }
    };
    or = {
        handleMobileDeeplinkRedirect (e, t) {
            const n = window.location.href, s = encodeURIComponent(n);
            if (e === le.PHANTOM.id && !("phantom" in window)) {
                const r = n.startsWith("https") ? "https" : "http", a = n.split("/")[2], o = encodeURIComponent(`${r}://${a}`);
                window.location.href = `${le.PHANTOM.url}/ul/browse/${s}?ref=${o}`;
            }
            if (e === le.SOLFLARE.id && !("solflare" in window) && (window.location.href = `${le.SOLFLARE.url}/ul/v1/browse/${s}?ref=${s}`), t === h.CHAIN.SOLANA && e === le.COINBASE.id && !("coinbaseSolana" in window) && (window.location.href = `${le.COINBASE.url}/dapp?cb_url=${s}`), t === h.CHAIN.BITCOIN && e === le.BINANCE.id && !("binancew3w" in window)) {
                const r = c.state.activeCaipNetwork, a = window.btoa("/pages/browser/index"), o = window.btoa(`url=${s}&defaultChainId=${r?.id ?? 1}`), i = new URL(le.BINANCE.deeplink);
                i.searchParams.set("appId", le.BINANCE.appId), i.searchParams.set("startPagePath", a), i.searchParams.set("startPageQuery", o);
                const d = new URL(le.BINANCE.url);
                d.searchParams.set("_dp", window.btoa(i.toString())), window.location.href = d.toString();
            }
        }
    };
    ir = E.getAnalyticsUrl();
    cr = new wt({
        baseUrl: ir,
        clientId: null
    });
    dr = [
        "MODAL_CREATED"
    ];
    lr = 45;
    Rn = 1e3 * 10;
    z = V({
        timestamp: Date.now(),
        lastFlush: Date.now(),
        reportedErrors: {},
        data: {
            type: "track",
            event: "MODAL_CREATED"
        },
        pendingEvents: [],
        subscribedToVisibilityChange: !1,
        walletImpressions: []
    });
    U = {
        state: z,
        subscribe (e) {
            return X(z, ()=>e(z));
        },
        getSdkProperties () {
            const { projectId: e, sdkType: t, sdkVersion: n } = f.state;
            return {
                projectId: e,
                st: t,
                sv: n || "html-wagmi-4.2.2"
            };
        },
        shouldFlushEvents () {
            const e = JSON.stringify(z.pendingEvents).length / 1024 > lr, t = z.lastFlush + Rn < Date.now();
            return e || t;
        },
        _setPendingEvent (e) {
            try {
                let t = c.getAccountData()?.address;
                if ("address" in e.data && e.data.address && (t = e.data.address), dr.includes(e.data.event) || typeof window > "u") return;
                const n = c.getActiveCaipNetwork()?.caipNetworkId;
                this.state.pendingEvents.push({
                    eventId: E.getUUID(),
                    url: window.location.href,
                    domain: window.location.hostname,
                    timestamp: e.timestamp,
                    props: {
                        ...e.data,
                        address: t,
                        properties: {
                            ..."properties" in e.data ? e.data.properties : {},
                            caipNetworkId: n
                        }
                    }
                }), z.reportedErrors.FORBIDDEN = !1, U.shouldFlushEvents() && U._submitPendingEvents();
            } catch (t) {
                console.warn("_setPendingEvent", t);
            }
        },
        sendEvent (e) {
            z.timestamp = Date.now(), z.data = e;
            const t = [
                "INITIALIZE",
                "CONNECT_SUCCESS",
                "SOCIAL_LOGIN_SUCCESS"
            ];
            (f.state.features?.analytics || t.includes(e.event)) && U._setPendingEvent(z), this.subscribeToFlushTriggers();
        },
        sendWalletImpressionEvent (e) {
            z.walletImpressions.push(e);
        },
        _transformPendingEventsForBatch (e) {
            try {
                return e.filter((t)=>t.props.event !== "WALLET_IMPRESSION_V2");
            } catch  {
                return e;
            }
        },
        _submitPendingEvents () {
            if (z.lastFlush = Date.now(), !(z.pendingEvents.length === 0 && z.walletImpressions.length === 0)) try {
                const e = U._transformPendingEventsForBatch(z.pendingEvents);
                z.walletImpressions.length && e.push({
                    eventId: E.getUUID(),
                    url: window.location.href,
                    domain: window.location.hostname,
                    timestamp: Date.now(),
                    props: {
                        type: "track",
                        event: "WALLET_IMPRESSION_V2",
                        items: [
                            ...z.walletImpressions
                        ]
                    }
                }), cr.sendBeacon({
                    path: "/batch",
                    params: U.getSdkProperties(),
                    body: e
                }), z.reportedErrors.FORBIDDEN = !1, z.pendingEvents = [], z.walletImpressions = [];
            } catch  {
                z.reportedErrors.FORBIDDEN = !0;
            }
        },
        subscribeToFlushTriggers () {
            z.subscribedToVisibilityChange || typeof document > "u" || (z.subscribedToVisibilityChange = !0, document?.addEventListener?.("visibilitychange", ()=>{
                document.visibilityState === "hidden" && U._submitPendingEvents();
            }), document?.addEventListener?.("freeze", ()=>{
                U._submitPendingEvents();
            }), window?.addEventListener?.("pagehide", ()=>{
                U._submitPendingEvents();
            }), setInterval(()=>{
                U._submitPendingEvents();
            }, Rn));
        }
    };
    ur = E.getApiUrl();
    ee = new wt({
        baseUrl: ur,
        clientId: null
    });
    pr = 40;
    Pn = 4;
    hr = 20;
    R = V({
        promises: {},
        page: 1,
        count: 0,
        featured: [],
        allFeatured: [],
        recommended: [],
        allRecommended: [],
        wallets: [],
        filteredWallets: [],
        search: [],
        isAnalyticsEnabled: !1,
        excludedWallets: [],
        isFetchingRecommendedWallets: !1,
        explorerWallets: [],
        explorerFilteredWallets: [],
        plan: {
            tier: "none",
            hasExceededUsageLimit: !1,
            limits: {
                isAboveRpcLimit: !1,
                isAboveMauLimit: !1
            }
        }
    });
    N = {
        state: R,
        subscribeKey (e, t) {
            return Q(R, e, t);
        },
        _getSdkProperties () {
            const { projectId: e, sdkType: t, sdkVersion: n } = f.state;
            return {
                projectId: e,
                st: t || "appkit",
                sv: n || "html-wagmi-4.2.2"
            };
        },
        _filterOutExtensions (e) {
            return f.state.isUniversalProvider ? e.filter((t)=>!!(t.mobile_link || t.desktop_link || t.webapp_link)) : e;
        },
        async _fetchWalletImage (e) {
            const t = `${ee.baseUrl}/getWalletImage/${e}`, n = await ee.getBlob({
                path: t,
                params: N._getSdkProperties()
            });
            ue.setWalletImage(e, URL.createObjectURL(n));
        },
        async _fetchNetworkImage (e) {
            const t = `${ee.baseUrl}/public/getAssetImage/${e}`, n = await ee.getBlob({
                path: t,
                params: N._getSdkProperties()
            });
            ue.setNetworkImage(e, URL.createObjectURL(n));
        },
        async _fetchConnectorImage (e) {
            const t = `${ee.baseUrl}/public/getAssetImage/${e}`, n = await ee.getBlob({
                path: t,
                params: N._getSdkProperties()
            });
            ue.setConnectorImage(e, URL.createObjectURL(n));
        },
        async _fetchCurrencyImage (e) {
            const t = `${ee.baseUrl}/public/getCurrencyImage/${e}`, n = await ee.getBlob({
                path: t,
                params: N._getSdkProperties()
            });
            ue.setCurrencyImage(e, URL.createObjectURL(n));
        },
        async _fetchTokenImage (e) {
            const t = `${ee.baseUrl}/public/getTokenImage/${e}`, n = await ee.getBlob({
                path: t,
                params: N._getSdkProperties()
            });
            ue.setTokenImage(e, URL.createObjectURL(n));
        },
        _filterWalletsByPlatform (e) {
            const t = e.length, n = E.isMobile() ? e?.filter((r)=>r.mobile_link || r.webapp_link ? !0 : Object.values(le).map((o)=>o.id).includes(r.id)) : e, s = t - n.length;
            return {
                filteredWallets: n,
                mobileFilteredOutWalletsLength: s
            };
        },
        async fetchProjectConfig () {
            return (await ee.get({
                path: "/appkit/v1/config",
                params: N._getSdkProperties()
            })).features;
        },
        async fetchUsage () {
            try {
                const e = await ee.get({
                    path: "/appkit/v1/project-limits",
                    params: N._getSdkProperties()
                }), { tier: t, isAboveMauLimit: n, isAboveRpcLimit: s } = e.planLimits, r = t === "starter", a = n || s;
                N.state.plan = {
                    tier: t,
                    hasExceededUsageLimit: r && a,
                    limits: {
                        isAboveRpcLimit: s,
                        isAboveMauLimit: n
                    }
                };
            } catch (e) {
                console.warn("Failed to fetch usage", e);
            }
        },
        async fetchAllowedOrigins () {
            try {
                const { allowedOrigins: e } = await ee.get({
                    path: "/projects/v1/origins",
                    params: N._getSdkProperties()
                });
                return e;
            } catch (e) {
                if (e instanceof Error && e.cause instanceof Response) {
                    const t = e.cause.status;
                    if (t === h.HTTP_STATUS_CODES.TOO_MANY_REQUESTS) throw new Error("RATE_LIMITED", {
                        cause: e
                    });
                    if (t >= h.HTTP_STATUS_CODES.SERVER_ERROR && t < 600) throw new Error("SERVER_ERROR", {
                        cause: e
                    });
                    return [];
                }
                return [];
            }
        },
        async fetchNetworkImages () {
            const t = c.getAllRequestedCaipNetworks()?.map(({ assets: n })=>n?.imageId).filter(Boolean).filter((n)=>!Lt.getNetworkImageById(n));
            t && await Promise.allSettled(t.map((n)=>N._fetchNetworkImage(n)));
        },
        async fetchConnectorImages () {
            const { connectors: e } = m.state, t = e.map(({ imageId: n })=>n).filter(Boolean);
            await Promise.allSettled(t.map((n)=>N._fetchConnectorImage(n)));
        },
        async fetchCurrencyImages (e = []) {
            await Promise.allSettled(e.map((t)=>N._fetchCurrencyImage(t)));
        },
        async fetchTokenImages (e = []) {
            await Promise.allSettled(e.map((t)=>N._fetchTokenImage(t)));
        },
        async fetchWallets (e) {
            const t = e.exclude ?? [];
            N._getSdkProperties().sv.startsWith("html-core-") && t.push(...Object.values(le).map((o)=>o.id));
            const s = await ee.get({
                path: "/getWallets",
                params: {
                    ...N._getSdkProperties(),
                    ...e,
                    page: String(e.page),
                    entries: String(e.entries),
                    include: e.include?.join(","),
                    exclude: t.join(",")
                }
            }), { filteredWallets: r, mobileFilteredOutWalletsLength: a } = N._filterWalletsByPlatform(s?.data);
            return {
                data: r || [],
                count: s?.count,
                mobileFilteredOutWalletsLength: a
            };
        },
        async prefetchWalletRanks () {
            const e = m.state.connectors;
            if (!e?.length) return;
            const t = {
                page: 1,
                entries: 20,
                badge: "certified"
            };
            if (t.names = e.map((r)=>r.name).join(","), c.state.activeChain === h.CHAIN.EVM) {
                const r = [
                    ...e.flatMap((a)=>a.connectors?.map((o)=>o.info?.rdns) || []),
                    ...e.map((a)=>a.info?.rdns)
                ].filter((a)=>typeof a == "string" && a.length > 0);
                r.length && (t.rdns = r.join(","));
            }
            const { data: n } = await N.fetchWallets(t);
            R.explorerWallets = n, m.extendConnectorsWithExplorerWallets(n);
            const s = c.getRequestedCaipNetworkIds().join(",");
            R.explorerFilteredWallets = n.filter((r)=>r.chains?.some((a)=>s.includes(a)));
        },
        async fetchFeaturedWallets () {
            const { featuredWalletIds: e } = f.state;
            if (e?.length) {
                const t = {
                    ...N._getSdkProperties(),
                    page: 1,
                    entries: e?.length ?? Pn,
                    include: e
                }, { data: n } = await N.fetchWallets(t), s = [
                    ...n
                ].sort((a, o)=>e.indexOf(a.id) - e.indexOf(o.id)), r = s.map((a)=>a.image_id).filter(Boolean);
                await Promise.allSettled(r.map((a)=>N._fetchWalletImage(a))), R.featured = s, R.allFeatured = s;
            }
        },
        async fetchRecommendedWallets () {
            try {
                R.isFetchingRecommendedWallets = !0;
                const { includeWalletIds: e, excludeWalletIds: t, featuredWalletIds: n } = f.state, s = [
                    ...t ?? [],
                    ...n ?? []
                ].filter(Boolean), r = c.getRequestedCaipNetworkIds().join(","), a = {
                    page: 1,
                    entries: Pn,
                    include: e,
                    exclude: s,
                    chains: r
                }, { data: o, count: i } = await N.fetchWallets(a), d = C.getRecentWallets(), l = o.map((p)=>p.image_id).filter(Boolean), u = d.map((p)=>p.image_id).filter(Boolean);
                await Promise.allSettled([
                    ...l,
                    ...u
                ].map((p)=>N._fetchWalletImage(p))), R.recommended = o, R.allRecommended = o, R.count = i ?? 0;
            } catch  {} finally{
                R.isFetchingRecommendedWallets = !1;
            }
        },
        async fetchWalletsByPage ({ page: e }) {
            const { includeWalletIds: t, excludeWalletIds: n, featuredWalletIds: s } = f.state, r = c.getRequestedCaipNetworkIds().join(","), a = [
                ...R.recommended.map(({ id: p })=>p),
                ...n ?? [],
                ...s ?? []
            ].filter(Boolean), o = {
                page: e,
                entries: pr,
                include: t,
                exclude: a,
                chains: r
            }, { data: i, count: d, mobileFilteredOutWalletsLength: l } = await N.fetchWallets(o);
            R.mobileFilteredOutWalletsLength = l + (R.mobileFilteredOutWalletsLength ?? 0);
            const u = i.slice(0, hr).map((p)=>p.image_id).filter(Boolean);
            await Promise.allSettled(u.map((p)=>N._fetchWalletImage(p))), R.wallets = E.uniqueBy([
                ...R.wallets,
                ...N._filterOutExtensions(i)
            ], "id").filter((p)=>p.chains?.some((b)=>r.includes(b))), R.count = d > R.count ? d : R.count, R.page = e;
        },
        async initializeExcludedWallets ({ ids: e }) {
            const t = {
                page: 1,
                entries: e.length,
                include: e
            }, { data: n } = await N.fetchWallets(t);
            n && n.forEach((s)=>{
                R.excludedWallets.push({
                    rdns: s.rdns,
                    name: s.name
                });
            });
        },
        async searchWallet ({ search: e, badge: t }) {
            const { includeWalletIds: n, excludeWalletIds: s } = f.state, r = c.getRequestedCaipNetworkIds().join(",");
            R.search = [];
            const a = {
                page: 1,
                entries: 100,
                search: e?.trim(),
                badge_type: t,
                include: n,
                exclude: s,
                chains: r
            }, { data: o } = await N.fetchWallets(a);
            U.sendEvent({
                type: "track",
                event: "SEARCH_WALLET",
                properties: {
                    badge: t ?? "",
                    search: e ?? ""
                }
            });
            const i = o.map((d)=>d.image_id).filter(Boolean);
            await Promise.allSettled([
                ...i.map((d)=>N._fetchWalletImage(d)),
                E.wait(300)
            ]), R.search = N._filterOutExtensions(o);
        },
        initPromise (e, t) {
            const n = R.promises[e];
            return n || (R.promises[e] = t());
        },
        prefetch ({ fetchConnectorImages: e = !0, fetchFeaturedWallets: t = !0, fetchRecommendedWallets: n = !0, fetchNetworkImages: s = !0, fetchWalletRanks: r = !0 } = {}) {
            const a = [
                e && N.initPromise("connectorImages", N.fetchConnectorImages),
                t && N.initPromise("featuredWallets", N.fetchFeaturedWallets),
                n && N.initPromise("recommendedWallets", N.fetchRecommendedWallets),
                s && N.initPromise("networkImages", N.fetchNetworkImages),
                r && N.initPromise("walletRanks", N.prefetchWalletRanks)
            ].filter(Boolean);
            return Promise.allSettled(a);
        },
        prefetchAnalyticsConfig () {
            f.state.features?.analytics && N.fetchAnalyticsConfig();
        },
        async fetchAnalyticsConfig () {
            try {
                const { isAnalyticsEnabled: e } = await ee.get({
                    path: "/getAnalyticsConfig",
                    params: N._getSdkProperties()
                });
                f.setFeatures({
                    analytics: e
                });
            } catch  {
                f.setFeatures({
                    analytics: !1
                });
            }
        },
        filterByNamespaces (e) {
            if (!e?.length) {
                R.featured = R.allFeatured, R.recommended = R.allRecommended;
                return;
            }
            const t = c.getRequestedCaipNetworkIds().join(",");
            R.featured = R.allFeatured.filter((n)=>n.chains?.some((s)=>t.includes(s))), R.recommended = R.allRecommended.filter((n)=>n.chains?.some((s)=>t.includes(s))), R.filteredWallets = R.wallets.filter((n)=>n.chains?.some((s)=>t.includes(s)));
        },
        clearFilterByNamespaces () {
            R.filteredWallets = [];
        },
        setFilterByNamespace (e) {
            if (!e) {
                R.featured = R.allFeatured, R.recommended = R.allRecommended;
                return;
            }
            const t = c.getRequestedCaipNetworkIds().join(",");
            R.featured = R.allFeatured.filter((n)=>n.chains?.some((s)=>t.includes(s))), R.recommended = R.allRecommended.filter((n)=>n.chains?.some((s)=>t.includes(s))), R.filteredWallets = R.wallets.filter((n)=>n.chains?.some((s)=>t.includes(s)));
        }
    };
    Ue = {
        filterOutDuplicatesByRDNS (e) {
            const t = f.state.enableEIP6963 ? m.state.connectors : [], n = C.getRecentWallets(), s = t.map((i)=>i.info?.rdns).filter(Boolean), r = n.map((i)=>i.rdns).filter(Boolean), a = s.concat(r);
            if (a.includes("io.metamask.mobile") && E.isMobile()) {
                const i = a.indexOf("io.metamask.mobile");
                a[i] = "io.metamask";
            }
            return e.filter((i)=>!(i?.rdns && a.includes(String(i.rdns)) || !i?.rdns && t.some((l)=>l.name === i.name)));
        },
        filterOutDuplicatesByIds (e) {
            const t = m.state.connectors.filter((i)=>i.type === "ANNOUNCED" || i.type === "INJECTED" || i.type === "MULTI_CHAIN"), n = C.getRecentWallets(), s = t.map((i)=>i.explorerId || i.explorerWallet?.id || i.id), r = n.map((i)=>i.id), a = s.concat(r);
            return e.filter((i)=>!a.includes(i?.id));
        },
        filterOutDuplicateWallets (e) {
            const t = this.filterOutDuplicatesByRDNS(e);
            return this.filterOutDuplicatesByIds(t);
        },
        markWalletsAsInstalled (e) {
            const { connectors: t } = m.state, { featuredWalletIds: n } = f.state, s = t.filter((o)=>o.type === "ANNOUNCED").reduce((o, i)=>(i.info?.rdns && (o[i.info.rdns] = !0), o), {});
            return e.map((o)=>({
                    ...o,
                    installed: !!o.rdns && !!s[o.rdns ?? ""]
                })).sort((o, i)=>{
                const d = Number(i.installed) - Number(o.installed);
                if (d !== 0) return d;
                if (n?.length) {
                    const l = n.indexOf(o.id), u = n.indexOf(i.id);
                    if (l !== -1 && u !== -1) return l - u;
                    if (l !== -1) return -1;
                    if (u !== -1) return 1;
                }
                return 0;
            });
        },
        getConnectOrderMethod (e, t) {
            const n = e?.connectMethodsOrder || f.state.features?.connectMethodsOrder, s = t || m.state.connectors;
            if (n) return n;
            const { injected: r, announced: a } = te.getConnectorsByType(s, N.state.recommended, N.state.featured), o = r.filter(te.showConnector), i = a.filter(te.showConnector);
            return o.length || i.length ? [
                "wallet",
                "email",
                "social"
            ] : L.DEFAULT_CONNECT_METHOD_ORDER;
        },
        isExcluded (e) {
            const t = !!e.rdns && N.state.excludedWallets.some((s)=>s.rdns === e.rdns), n = !!e.name && N.state.excludedWallets.some((s)=>Jn.isLowerCaseMatch(s.name, e.name));
            return t || n;
        },
        markWalletsWithDisplayIndex (e) {
            return e.map((t, n)=>({
                    ...t,
                    display_index: n
                }));
        },
        filterWalletsByWcSupport (e) {
            return g.state.wcBasic ? e.filter((t)=>t.supports_wc) : E.isMobile() ? e.filter((t)=>t.supports_wc || L.MANDATORY_WALLET_IDS_ON_MOBILE.includes(t.id)) : e;
        },
        getWalletConnectWallets (e) {
            const t = [
                ...N.state.featured,
                ...N.state.recommended
            ];
            N.state.filteredWallets?.length > 0 ? t.push(...N.state.filteredWallets) : t.push(...e);
            const n = E.uniqueBy(t, "id"), s = Ue.markWalletsAsInstalled(n), r = Ue.filterWalletsByWcSupport(s);
            return Ue.markWalletsWithDisplayIndex(r);
        }
    };
    te = {
        getConnectorsByType (e, t, n) {
            const { customWallets: s } = f.state, r = C.getRecentWallets(), a = Ue.filterOutDuplicateWallets(t), o = Ue.filterOutDuplicateWallets(n), i = e.filter((p)=>p.type === "MULTI_CHAIN"), d = e.filter((p)=>p.type === "ANNOUNCED"), l = e.filter((p)=>p.type === "INJECTED"), u = e.filter((p)=>p.type === "EXTERNAL");
            return {
                custom: s,
                recent: r,
                external: u,
                multiChain: i,
                announced: d,
                injected: l,
                recommended: a,
                featured: o
            };
        },
        showConnector (e) {
            const t = e.info?.rdns, n = !!t && N.state.excludedWallets.some((r)=>!!r.rdns && r.rdns === t), s = !!e.name && N.state.excludedWallets.some((r)=>Jn.isLowerCaseMatch(r.name, e.name));
            return !(e.type === "INJECTED" && (e.name === "Browser Wallet" && (!E.isMobile() || E.isMobile() && !t && !g.checkInstalled()) || n || s) || (e.type === "ANNOUNCED" || e.type === "EXTERNAL") && (n || s));
        },
        getIsConnectedWithWC () {
            return Array.from(c.state.chains.values()).some((n)=>m.getConnectorId(n.namespace) === h.CONNECTOR_ID.WALLET_CONNECT);
        },
        getConnectorTypeOrder ({ recommended: e, featured: t, custom: n, recent: s, announced: r, injected: a, multiChain: o, external: i, overriddenConnectors: d = f.state.features?.connectorTypeOrder ?? [] }) {
            const u = [
                {
                    type: "walletConnect",
                    isEnabled: !0
                },
                {
                    type: "recent",
                    isEnabled: s.length > 0
                },
                {
                    type: "injected",
                    isEnabled: [
                        ...a,
                        ...r,
                        ...o
                    ].length > 0
                },
                {
                    type: "featured",
                    isEnabled: t.length > 0
                },
                {
                    type: "custom",
                    isEnabled: n && n.length > 0
                },
                {
                    type: "external",
                    isEnabled: i.length > 0
                },
                {
                    type: "recommended",
                    isEnabled: e.length > 0
                }
            ].filter((A)=>A.isEnabled), p = new Set(u.map((A)=>A.type)), b = d.filter((A)=>p.has(A)).map((A)=>({
                    type: A,
                    isEnabled: !0
                })), O = u.filter(({ type: A })=>!b.some(({ type: k })=>k === A));
            return Array.from(new Set([
                ...b,
                ...O
            ].map(({ type: A })=>A)));
        },
        sortConnectorsByExplorerWallet (e) {
            return [
                ...e
            ].sort((t, n)=>t.explorerWallet && n.explorerWallet ? (t.explorerWallet.order ?? 0) - (n.explorerWallet.order ?? 0) : t.explorerWallet ? -1 : n.explorerWallet ? 1 : 0);
        },
        getPriority (e) {
            return e.id === h.CONNECTOR_ID.BASE_ACCOUNT ? 0 : e.id === h.CONNECTOR_ID.COINBASE || e.id === h.CONNECTOR_ID.COINBASE_SDK ? 1 : 2;
        },
        sortConnectorsByPriority (e) {
            return [
                ...e
            ].sort((t, n)=>te.getPriority(t) - te.getPriority(n));
        },
        getAuthName ({ email: e, socialUsername: t, socialProvider: n }) {
            return t ? n && n === "discord" && t.endsWith("0") ? t.slice(0, -1) : t : e.length > 30 ? `${e.slice(0, -3)}...` : e;
        },
        async fetchProviderData (e) {
            try {
                if (e.name === "Browser Wallet" && !E.isMobile()) return {
                    accounts: [],
                    chainId: void 0
                };
                if (e.id === h.CONNECTOR_ID.AUTH) return {
                    accounts: [],
                    chainId: void 0
                };
                const [t, n] = await Promise.all([
                    e.provider?.request({
                        method: "eth_accounts"
                    }),
                    e.provider?.request({
                        method: "eth_chainId"
                    }).then((s)=>Number(s))
                ]);
                return {
                    accounts: t,
                    chainId: n
                };
            } catch (t) {
                return console.warn(`Failed to fetch provider data for ${e.name}`, t), {
                    accounts: [],
                    chainId: void 0
                };
            }
        },
        getFilteredCustomWallets (e) {
            const t = C.getRecentWallets(), n = m.state.connectors.map((o)=>o.info?.rdns).filter(Boolean), s = t.map((o)=>o.rdns).filter(Boolean), r = n.concat(s);
            if (r.includes("io.metamask.mobile") && E.isMobile()) {
                const o = r.indexOf("io.metamask.mobile");
                r[o] = "io.metamask";
            }
            return e.filter((o)=>!r.includes(String(o?.rdns)));
        },
        hasWalletConnector (e) {
            return m.state.connectors.some((t)=>t.id === e.id || t.name === e.name);
        },
        isWalletCompatibleWithCurrentChain (e) {
            const t = c.state.activeChain;
            return t && e.chains ? e.chains.some((n)=>{
                const s = n.split(":")[0];
                return t === s;
            }) : !0;
        },
        getFilteredRecentWallets () {
            return C.getRecentWallets().filter((n)=>!Ue.isExcluded(n)).filter((n)=>!this.hasWalletConnector(n)).filter((n)=>this.isWalletCompatibleWithCurrentChain(n));
        },
        getCappedRecommendedWallets (e) {
            const { connectors: t } = m.state, { customWallets: n, featuredWalletIds: s } = f.state, r = t.find((P)=>P.id === "walletConnect"), a = t.filter((P)=>P.type === "INJECTED" || P.type === "ANNOUNCED" || P.type === "MULTI_CHAIN");
            if (!r && !a.length && !n?.length) return [];
            const o = sn.isEmailEnabled(), i = sn.isSocialsEnabled(), d = a.filter((P)=>P.name !== "Browser Wallet" && P.name !== "WalletConnect"), l = s?.length || 0, u = n?.length || 0, p = d.length || 0, b = o ? 1 : 0, O = i ? 1 : 0, A = l + u + p + b + O, k = Math.max(0, 4 - A);
            return k <= 0 ? [] : Ue.filterOutDuplicateWallets(e).slice(0, k);
        },
        processConnectorsByType (e, t = !0) {
            const n = te.sortConnectorsByExplorerWallet([
                ...e
            ]);
            return t ? n.filter(te.showConnector) : n;
        },
        connectorList () {
            const e = te.getConnectorsByType(m.state.connectors, N.state.recommended, N.state.featured), t = this.processConnectorsByType(e.announced.filter((O)=>O.id !== "walletConnect")), n = this.processConnectorsByType(e.injected), s = this.processConnectorsByType(e.multiChain.filter((O)=>O.name !== "WalletConnect"), !1), r = e.custom, a = e.recent, o = this.processConnectorsByType(e.external.filter((O)=>O.id !== h.CONNECTOR_ID.COINBASE_SDK && O.id !== h.CONNECTOR_ID.BASE_ACCOUNT)), i = e.recommended, d = e.featured, l = te.getConnectorTypeOrder({
                custom: r,
                recent: a,
                announced: t,
                injected: n,
                multiChain: s,
                recommended: i,
                featured: d,
                external: o
            }), u = m.state.connectors.find((O)=>O.id === "walletConnect"), p = E.isMobile(), b = [];
            for (const O of l)switch(O){
                case "walletConnect":
                    {
                        !p && u && b.push({
                            kind: "connector",
                            subtype: "walletConnect",
                            connector: u
                        });
                        break;
                    }
                case "recent":
                    {
                        te.getFilteredRecentWallets().forEach((S)=>b.push({
                                kind: "wallet",
                                subtype: "recent",
                                wallet: S
                            }));
                        break;
                    }
                case "injected":
                    {
                        s.forEach((A)=>b.push({
                                kind: "connector",
                                subtype: "multiChain",
                                connector: A
                            })), t.forEach((A)=>b.push({
                                kind: "connector",
                                subtype: "announced",
                                connector: A
                            })), n.forEach((A)=>b.push({
                                kind: "connector",
                                subtype: "injected",
                                connector: A
                            }));
                        break;
                    }
                case "featured":
                    {
                        d.forEach((A)=>b.push({
                                kind: "wallet",
                                subtype: "featured",
                                wallet: A
                            }));
                        break;
                    }
                case "custom":
                    {
                        te.getFilteredCustomWallets(r ?? []).forEach((S)=>b.push({
                                kind: "wallet",
                                subtype: "custom",
                                wallet: S
                            }));
                        break;
                    }
                case "external":
                    {
                        o.forEach((A)=>b.push({
                                kind: "connector",
                                subtype: "external",
                                connector: A
                            }));
                        break;
                    }
                case "recommended":
                    {
                        te.getCappedRecommendedWallets(i).forEach((S)=>b.push({
                                kind: "wallet",
                                subtype: "recommended",
                                wallet: S
                            }));
                        break;
                    }
                default:
                    console.warn(`Unknown connector type: ${O}`);
            }
            return b;
        },
        hasInjectedConnectors () {
            return m.state.connectors.filter((e)=>(e.type === "INJECTED" || e.type === "ANNOUNCED" || e.type === "MULTI_CHAIN") && e.name !== "Browser Wallet" && e.name !== "WalletConnect").length;
        }
    };
    fr = [
        "ConnectingExternal",
        "ConnectingMultiChain",
        "ConnectingSocial",
        "ConnectingFarcaster"
    ];
    H = V({
        view: "Connect",
        history: [
            "Connect"
        ],
        transactionStack: []
    });
    Cr = {
        state: H,
        subscribeKey (e, t) {
            return Q(H, e, t);
        },
        pushTransactionStack (e) {
            H.transactionStack.push(e);
        },
        popTransactionStack (e) {
            const t = H.transactionStack.pop();
            if (!t) return;
            const { onSuccess: n, onError: s, onCancel: r } = t;
            switch(e){
                case "success":
                    n?.();
                    break;
                case "error":
                    s?.(), T.goBack();
                    break;
                case "cancel":
                    r?.(), T.goBack();
                    break;
            }
        },
        push (e, t) {
            let n = e, s = t;
            N.state.plan.hasExceededUsageLimit && fr.includes(e) && (n = "UsageExceeded", s = void 0), n !== H.view && (H.view = n, H.history.push(n), H.data = s);
        },
        reset (e, t) {
            H.view = e, H.history = [
                e
            ], H.data = t;
        },
        replace (e, t) {
            H.history.at(-1) === e || (H.view = e, H.history[H.history.length - 1] = e, H.data = t);
        },
        goBack () {
            const e = c.state.activeCaipAddress, t = T.state.view === "ConnectingFarcaster", n = !e && t;
            if (H.history.length > 1) {
                H.history.pop();
                const [s] = H.history.slice(-1);
                s && (e && s === "Connect" ? H.view = "Account" : H.view = s);
            } else M.close();
            H.data?.wallet && (H.data.wallet = void 0), H.data?.redirectView && (H.data.redirectView = void 0), setTimeout(()=>{
                if (n) {
                    c.setAccountProp("farcasterUrl", void 0, c.state.activeChain);
                    const s = m.getAuthConnector();
                    s?.provider?.reload();
                    const r = ut(f.state);
                    s?.provider?.syncDappData?.({
                        metadata: r.metadata,
                        sdkVersion: r.sdkVersion,
                        projectId: r.projectId,
                        sdkType: r.sdkType
                    });
                }
            }, 100);
        },
        goBackToIndex (e) {
            if (H.history.length > 1) {
                H.history = H.history.slice(0, e + 1);
                const [t] = H.history.slice(-1);
                t && (H.view = t);
            }
        },
        goBackOrCloseModal () {
            T.state.history.length > 1 ? T.goBack() : M.close();
        }
    };
    T = he(Cr);
    ye = V({
        themeMode: "dark",
        themeVariables: {},
        w3mThemeVariables: void 0
    });
    rn = {
        state: ye,
        subscribe (e) {
            return X(ye, ()=>e(ye));
        },
        setThemeMode (e) {
            ye.themeMode = e;
            try {
                const t = m.getAuthConnector();
                if (t) {
                    const n = rn.getSnapshot().themeVariables;
                    t.provider.syncTheme({
                        themeMode: e,
                        themeVariables: n,
                        w3mThemeVariables: Dt(n, e)
                    });
                }
            } catch  {
                console.info("Unable to sync theme to auth connector");
            }
        },
        setThemeVariables (e) {
            ye.themeVariables = {
                ...ye.themeVariables,
                ...e
            };
            try {
                const t = m.getAuthConnector();
                if (t) {
                    const n = rn.getSnapshot().themeVariables;
                    t.provider.syncTheme({
                        themeVariables: n,
                        w3mThemeVariables: Dt(ye.themeVariables, ye.themeMode)
                    });
                }
            } catch  {
                console.info("Unable to sync theme to auth connector");
            }
        },
        getSnapshot () {
            return ut(ye);
        }
    };
    ie = he(rn);
    os = Object.fromEntries(Qn.map((e)=>[
            e,
            void 0
        ]));
    mr = Object.fromEntries(Qn.map((e)=>[
            e,
            !0
        ]));
    B = V({
        allConnectors: [],
        connectors: [],
        activeConnector: void 0,
        filterByNamespace: void 0,
        activeConnectorIds: os,
        filterByNamespaceMap: mr
    });
    gr = {
        state: B,
        subscribe (e) {
            return X(B, ()=>{
                e(B);
            });
        },
        subscribeKey (e, t) {
            return Q(B, e, t);
        },
        initialize (e) {
            e.forEach((t)=>{
                const n = C.getConnectedConnectorId(t);
                n && m.setConnectorId(n, t);
            });
        },
        setActiveConnector (e) {
            e && (B.activeConnector = pt(e));
        },
        setConnectors (e) {
            e.filter((r)=>!B.allConnectors.some((a)=>a.id === r.id && m.getConnectorName(a.name) === m.getConnectorName(r.name) && a.chain === r.chain)).forEach((r)=>{
                r.type !== "MULTI_CHAIN" && B.allConnectors.push(pt(r));
            });
            const n = m.getEnabledNamespaces(), s = m.getEnabledConnectors(n);
            B.connectors = m.mergeMultiChainConnectors(s);
        },
        filterByNamespaces (e) {
            Object.keys(B.filterByNamespaceMap).forEach((t)=>{
                B.filterByNamespaceMap[t] = !1;
            }), e.forEach((t)=>{
                B.filterByNamespaceMap[t] = !0;
            }), m.updateConnectorsForEnabledNamespaces();
        },
        filterByNamespace (e, t) {
            B.filterByNamespaceMap[e] = t, m.updateConnectorsForEnabledNamespaces();
        },
        updateConnectorsForEnabledNamespaces () {
            const e = m.getEnabledNamespaces(), t = m.getEnabledConnectors(e), n = m.areAllNamespacesEnabled();
            B.connectors = m.mergeMultiChainConnectors(t), n ? N.clearFilterByNamespaces() : N.filterByNamespaces(e);
        },
        getEnabledNamespaces () {
            return Object.entries(B.filterByNamespaceMap).filter(([e, t])=>t).map(([e])=>e);
        },
        getEnabledConnectors (e) {
            return B.allConnectors.filter((t)=>e.includes(t.chain));
        },
        areAllNamespacesEnabled () {
            return Object.values(B.filterByNamespaceMap).every((e)=>e);
        },
        mergeMultiChainConnectors (e) {
            const t = m.generateConnectorMapByName(e), n = [];
            return t.forEach((s)=>{
                const r = s[0], a = r?.id === h.CONNECTOR_ID.AUTH;
                s.length > 1 && r ? n.push({
                    name: r.name,
                    imageUrl: r.imageUrl,
                    imageId: r.imageId,
                    connectors: [
                        ...s
                    ],
                    type: a ? "AUTH" : "MULTI_CHAIN",
                    chain: "eip155",
                    id: r?.id || ""
                }) : r && n.push(r);
            }), n;
        },
        generateConnectorMapByName (e) {
            const t = new Map;
            return e.forEach((n)=>{
                const { name: s } = n, r = m.getConnectorName(s);
                if (!r) return;
                const a = t.get(r) || [];
                a.find((i)=>i.chain === n.chain) || a.push(n), t.set(r, a);
            }), t;
        },
        getConnectorName (e) {
            return e && ({
                "Trust Wallet": "Trust"
            }[e] || e);
        },
        getUniqueConnectorsByName (e) {
            const t = [];
            return e.forEach((n)=>{
                t.find((s)=>s.chain === n.chain) || t.push(n);
            }), t;
        },
        addConnector (e) {
            if (e.id === h.CONNECTOR_ID.AUTH) {
                const t = e, n = ut(f.state), s = ie.getSnapshot().themeMode, r = ie.getSnapshot().themeVariables;
                t?.provider?.syncDappData?.({
                    metadata: n.metadata,
                    sdkVersion: n.sdkVersion,
                    projectId: n.projectId,
                    sdkType: n.sdkType
                }), t?.provider?.syncTheme({
                    themeMode: s,
                    themeVariables: r,
                    w3mThemeVariables: Dt(r, s)
                }), m.setConnectors([
                    e
                ]);
            } else m.setConnectors([
                e
            ]);
        },
        getAuthConnector (e) {
            const t = e || c.state.activeChain, n = B.connectors.find((s)=>s.id === h.CONNECTOR_ID.AUTH);
            if (n) return n?.connectors?.length ? n.connectors.find((r)=>r.chain === t) : n;
        },
        getAnnouncedConnectorRdns () {
            return B.connectors.filter((e)=>e.type === "ANNOUNCED").map((e)=>e.info?.rdns);
        },
        getConnectorById (e) {
            return te.sortConnectorsByPriority(B.allConnectors).find((n)=>n.id === e);
        },
        getConnector ({ id: e, namespace: t }) {
            const n = t || c.state.activeChain, s = B.allConnectors.filter((o)=>o.chain === n);
            return te.sortConnectorsByPriority(s).find((o)=>o.id === e || o.explorerId === e);
        },
        syncIfAuthConnector (e) {
            if (e.id !== "AUTH") return;
            const t = e, n = ut(f.state), s = ie.getSnapshot().themeMode, r = ie.getSnapshot().themeVariables;
            t?.provider?.syncDappData?.({
                metadata: n.metadata,
                sdkVersion: n.sdkVersion,
                sdkType: n.sdkType,
                projectId: n.projectId
            }), t.provider.syncTheme({
                themeMode: s,
                themeVariables: r,
                w3mThemeVariables: Dt(r, s)
            });
        },
        getConnectorsByNamespace (e) {
            const t = B.allConnectors.filter((n)=>n.chain === e);
            return m.mergeMultiChainConnectors(t);
        },
        canSwitchToSmartAccount (e) {
            return c.checkIfSmartAccountEnabled() && pe(e) === ve.ACCOUNT_TYPES.EOA;
        },
        selectWalletConnector (e) {
            const t = T.state.data?.redirectView, n = c.state.activeChain, s = n ? m.getConnector({
                id: e.id,
                namespace: n
            }) : void 0;
            or.handleMobileDeeplinkRedirect(s?.explorerId || e.id, c.state.activeChain), s ? T.push("ConnectingExternal", {
                connector: s,
                wallet: e,
                redirectView: t
            }) : T.push("ConnectingWalletConnect", {
                wallet: e,
                redirectView: t
            });
        },
        getConnectors (e) {
            return e ? m.getConnectorsByNamespace(e) : m.mergeMultiChainConnectors(B.allConnectors);
        },
        setFilterByNamespace (e) {
            B.filterByNamespace = e, B.connectors = m.getConnectors(e), N.setFilterByNamespace(e);
        },
        setConnectorId (e, t) {
            e && (B.activeConnectorIds = {
                ...B.activeConnectorIds,
                [t]: e
            }, C.setConnectedConnectorId(t, e));
        },
        removeConnectorId (e) {
            B.activeConnectorIds = {
                ...B.activeConnectorIds,
                [e]: void 0
            }, C.deleteConnectedConnectorId(e);
        },
        getConnectorId (e) {
            if (e) return B.activeConnectorIds[e];
        },
        isConnected (e) {
            return e ? !!B.activeConnectorIds[e] : Object.values(B.activeConnectorIds).some((t)=>!!t);
        },
        resetConnectorIds () {
            B.activeConnectorIds = {
                ...os
            };
        },
        extendConnectorsWithExplorerWallets (e) {
            B.allConnectors.forEach((s)=>{
                const r = e.find((a)=>a.id === s.id || a.rdns && a.rdns === s.info?.rdns);
                r && (s.explorerWallet = r);
            });
            const t = m.getEnabledNamespaces(), n = m.getEnabledConnectors(t);
            B.connectors = m.mergeMultiChainConnectors(n);
        },
        async connect (e = {}) {
            const { namespace: t } = e;
            return m.setFilterByNamespace(t), T.push("Connect", {
                addWalletForNamespace: t
            }), new Promise((n, s)=>{
                if (t) {
                    const r = c.subscribeChainProp("accountState", (o)=>{
                        o?.caipAddress && (n({
                            caipAddress: o?.caipAddress
                        }), r());
                    }, t), a = M.subscribeKey("open", (o)=>{
                        o || (s(new Error("Modal closed")), a());
                    });
                } else {
                    const r = c.subscribeKey("activeCaipAddress", (o)=>{
                        o && (n({
                            caipAddress: o
                        }), r());
                    }), a = M.subscribeKey("open", (o)=>{
                        o || (s(new Error("Modal closed")), a());
                    });
                }
            });
        }
    };
    m = he(gr);
    wr = 1e3;
    rt = {
        checkNamespaceConnectorId (e, t) {
            return m.getConnectorId(e) === t;
        },
        isSocialProvider (e) {
            return L.DEFAULT_REMOTE_FEATURES.socials.includes(e);
        },
        connectWalletConnect ({ walletConnect: e, connector: t, closeModalOnConnect: n = !0, redirectViewOnModalClose: s = "Connect", onOpen: r, onConnect: a }) {
            return new Promise((o, i)=>{
                if (e && m.setActiveConnector(t), r?.(E.isMobile() && e), s) {
                    const l = M.subscribeKey("open", (u)=>{
                        u || (T.state.view !== s && T.replace(s), l(), i(new Error("Modal closed")));
                    });
                }
                const d = c.subscribeKey("activeCaipAddress", (l)=>{
                    l && (a?.(), n && M.close(), d(), o(J.parseCaipAddress(l)));
                });
            });
        },
        connectExternal (e) {
            return new Promise((t, n)=>{
                const s = c.subscribeKey("activeCaipAddress", (r)=>{
                    r && (M.close(), s(), t(J.parseCaipAddress(r)));
                });
                g.connectExternal(e, e.chain).catch(()=>{
                    s(), n(new Error("Connection rejected"));
                });
            });
        },
        connectSocial ({ social: e, namespace: t, closeModalOnConnect: n = !0, onOpenFarcaster: s, onConnect: r }) {
            let a, o = !1, i = null;
            const d = t || c.state.activeChain, l = c.subscribeKey("activeCaipAddress", (u)=>{
                u && (n && M.close(), l());
            });
            return new Promise((u, p)=>{
                async function b(A) {
                    if (A.data?.resultUri) if (A.origin === h.SECURE_SITE_SDK_ORIGIN) {
                        window.removeEventListener("message", b, !1);
                        try {
                            const S = m.getAuthConnector(d);
                            if (S && !o) {
                                a && a.close(), o = !0;
                                const k = A.data.resultUri;
                                U.sendEvent({
                                    type: "track",
                                    event: "SOCIAL_LOGIN_REQUEST_USER_DATA",
                                    properties: {
                                        provider: e
                                    }
                                }), C.setConnectedSocialProvider(e), await g.connectExternal({
                                    id: S.id,
                                    type: S.type,
                                    socialUri: k
                                }, S.chain);
                                const x = c.state.activeCaipAddress;
                                if (!x) {
                                    p(new Error("Failed to connect"));
                                    return;
                                }
                                u(J.parseCaipAddress(x)), U.sendEvent({
                                    type: "track",
                                    event: "SOCIAL_LOGIN_SUCCESS",
                                    properties: {
                                        provider: e
                                    }
                                });
                            }
                        } catch (S) {
                            U.sendEvent({
                                type: "track",
                                event: "SOCIAL_LOGIN_ERROR",
                                properties: {
                                    provider: e,
                                    message: E.parseError(S)
                                }
                            }), p(new Error("Failed to connect"));
                        }
                    } else U.sendEvent({
                        type: "track",
                        event: "SOCIAL_LOGIN_ERROR",
                        properties: {
                            provider: e,
                            message: "Untrusted Origin"
                        }
                    });
                }
                async function O() {
                    if (U.sendEvent({
                        type: "track",
                        event: "SOCIAL_LOGIN_STARTED",
                        properties: {
                            provider: e
                        }
                    }), e === "farcaster") {
                        s?.();
                        const A = M.subscribeKey("open", (k)=>{
                            !k && e === "farcaster" && (p(new Error("Popup closed")), r?.(), A());
                        }), S = m.getAuthConnector();
                        if (S && !c.getAccountData(d)?.farcasterUrl) try {
                            const { url: x } = await S.provider.getFarcasterUri();
                            c.setAccountProp("farcasterUrl", x, d);
                        } catch  {
                            p(new Error("Failed to connect to farcaster"));
                        }
                    } else {
                        const A = m.getAuthConnector();
                        i = E.returnOpenHref(`${h.SECURE_SITE_SDK_ORIGIN}/loading`, "popupWindow", "width=600,height=800,scrollbars=yes");
                        try {
                            if (A) {
                                const { uri: S } = await A.provider.getSocialRedirectUri({
                                    provider: e
                                });
                                if (i && S) {
                                    i.location.href = S, a = i;
                                    const k = setInterval(()=>{
                                        a?.closed && !o && (p(new Error("Popup closed")), clearInterval(k));
                                    }, 1e3);
                                    window.addEventListener("message", b, !1);
                                } else i?.close(), p(new Error("Failed to initiate social connection"));
                            }
                        } catch  {
                            p(new Error("Failed to initiate social connection")), i?.close();
                        }
                    }
                }
                O();
            });
        },
        connectEmail ({ closeModalOnConnect: e = !0, redirectViewOnModalClose: t = "Connect", onOpen: n, onConnect: s }) {
            return new Promise((r, a)=>{
                if (n?.(), t) {
                    const i = M.subscribeKey("open", (d)=>{
                        d || (T.state.view !== t && T.replace(t), i(), a(new Error("Modal closed")));
                    });
                }
                const o = c.subscribeKey("activeCaipAddress", (i)=>{
                    i && (s?.(), e && M.close(), o(), r(J.parseCaipAddress(i)));
                });
            });
        },
        async updateEmail () {
            const e = C.getConnectedConnectorId(c.state.activeChain), t = m.getAuthConnector();
            if (!t) throw new Error("No auth connector found");
            if (e !== h.CONNECTOR_ID.AUTH) throw new Error("Not connected to email or social");
            const n = t.provider.getEmail() ?? "";
            return await M.open({
                view: "UpdateEmailWallet",
                data: {
                    email: n,
                    redirectView: void 0
                }
            }), new Promise((s, r)=>{
                const a = setInterval(()=>{
                    const i = t.provider.getEmail() ?? "";
                    i !== n && (M.close(), clearInterval(a), o(), s({
                        email: i
                    }));
                }, wr), o = M.subscribeKey("open", (i)=>{
                    i || (T.state.view !== "Connect" && T.push("Connect"), clearInterval(a), o(), r(new Error("Modal closed")));
                });
            });
        },
        canSwitchToSmartAccount (e) {
            return c.checkIfSmartAccountEnabled() && pe(e) === ve.ACCOUNT_TYPES.EOA;
        }
    };
    is = function() {
        const e = c.state.activeCaipNetwork?.chainNamespace || "eip155", t = c.state.activeCaipNetwork?.id || 1, n = L.NATIVE_TOKEN_ADDRESS[e];
        return `${e}:${t}:${n}`;
    };
    Oa = function(e) {
        return L.NATIVE_TOKEN_ADDRESS[e];
    };
    pe = function(e) {
        return c.getAccountData(e)?.preferredAccountType;
    };
    It = function(e) {
        return c.state.activeCaipNetwork;
    };
    let Xe, we, q, Er, Ot, W;
    Mt = {
        getConnectionStatus (e, t) {
            const n = m.state.activeConnectorIds[t], s = g.getConnections(t);
            return !!n && e.connectorId === n ? "connected" : s.some((o)=>o.connectorId.toLowerCase() === e.connectorId.toLowerCase()) ? "active" : "disconnected";
        },
        excludeConnectorAddressFromConnections ({ connections: e, connectorId: t, addresses: n }) {
            return e.map((s)=>{
                if ((t ? s.connectorId.toLowerCase() === t.toLowerCase() : !1) && n) {
                    const a = s.accounts.filter((o)=>!n.some((d)=>d.toLowerCase() === o.address.toLowerCase()));
                    return {
                        ...s,
                        accounts: a
                    };
                }
                return s;
            });
        },
        excludeExistingConnections (e, t) {
            const n = new Set(e);
            return t.filter((s)=>!n.has(s.connectorId));
        },
        getConnectionsByConnectorId (e, t) {
            return e.filter((n)=>n.connectorId.toLowerCase() === t.toLowerCase());
        },
        getConnectionsData (e) {
            const t = !!f.state.remoteFeatures?.multiWallet, n = m.state.activeConnectorIds[e], s = g.getConnections(e), a = (g.state.recentConnections.get(e) ?? []).filter((i)=>m.getConnectorById(i.connectorId)), o = Mt.excludeExistingConnections([
                ...s.map((i)=>i.connectorId),
                ...n ? [
                    n
                ] : []
            ], a);
            return t ? {
                connections: s,
                recentConnections: o
            } : {
                connections: s.filter((i)=>i.connectorId.toLowerCase() === n?.toLowerCase()),
                recentConnections: []
            };
        },
        onConnectMobile (e) {
            const t = g.state.wcUri;
            if (e?.mobile_link && t) try {
                g.setWcError(!1);
                const { mobile_link: n, link_mode: s, name: r } = e, { redirect: a, redirectUniversalLink: o, href: i } = E.formatNativeUrl(n, t, s), d = a, l = o, u = E.isIframe() ? "_top" : "_self";
                g.setWcLinking({
                    name: r,
                    href: i
                }), g.setRecentWallet(e), f.state.experimental_preferUniversalLinks && l ? E.openHref(l, u) : E.openHref(d, u);
            } catch (n) {
                U.sendEvent({
                    type: "track",
                    event: "CONNECT_PROXY_ERROR",
                    properties: {
                        message: n instanceof Error ? n.message : "Error parsing the deep link",
                        uri: t,
                        mobile_link: e.mobile_link,
                        name: e.name
                    }
                }), g.setWcError(!0);
            }
        }
    };
    Xe = V({
        loading: !1,
        open: !1,
        selectedNetworkId: void 0,
        activeChain: void 0,
        initialized: !1,
        connectingWallet: void 0
    });
    we = {
        state: Xe,
        subscribe (e) {
            return X(Xe, ()=>e(Xe));
        },
        subscribeOpen (e) {
            return Q(Xe, "open", e);
        },
        set (e) {
            Object.assign(Xe, {
                ...Xe,
                ...e
            });
        }
    };
    q = V({
        transactions: [],
        transactionsByYear: {},
        lastNetworkInView: void 0,
        loading: !1,
        empty: !1,
        next: void 0
    });
    Er = {
        state: q,
        subscribe (e) {
            return X(q, ()=>e(q));
        },
        setLastNetworkInView (e) {
            q.lastNetworkInView = e;
        },
        async fetchTransactions (e) {
            if (!e) throw new Error("Transactions can't be fetched without an accountAddress");
            q.loading = !0;
            try {
                const t = await v.fetchTransactions({
                    account: e,
                    cursor: q.next,
                    chainId: c.state.activeCaipNetwork?.caipNetworkId
                }), n = Ot.filterSpamTransactions(t.data), s = Ot.filterByConnectedChain(n), r = [
                    ...q.transactions,
                    ...s
                ];
                q.loading = !1, q.transactions = r, q.transactionsByYear = Ot.groupTransactionsByYearAndMonth(q.transactionsByYear, s), q.empty = r.length === 0, q.next = t.next ? t.next : void 0;
            } catch  {
                const n = c.state.activeChain;
                U.sendEvent({
                    type: "track",
                    event: "ERROR_FETCH_TRANSACTIONS",
                    properties: {
                        address: e,
                        projectId: f.state.projectId,
                        cursor: q.next,
                        isSmartAccount: pe(n) === ve.ACCOUNT_TYPES.SMART_ACCOUNT
                    }
                }), Ae.showError("Failed to fetch transactions"), q.loading = !1, q.empty = !0, q.next = void 0;
            }
        },
        groupTransactionsByYearAndMonth (e = {}, t = []) {
            const n = e;
            return t.forEach((s)=>{
                const r = new Date(s.metadata.minedAt).getFullYear(), a = new Date(s.metadata.minedAt).getMonth(), o = n[r] ?? {}, d = (o[a] ?? []).filter((l)=>l.id !== s.id);
                n[r] = {
                    ...o,
                    [a]: [
                        ...d,
                        s
                    ].sort((l, u)=>new Date(u.metadata.minedAt).getTime() - new Date(l.metadata.minedAt).getTime())
                };
            }), n;
        },
        filterSpamTransactions (e) {
            return e.filter((t)=>!t.transfers?.every((s)=>s.nft_info?.flags.is_spam === !0));
        },
        filterByConnectedChain (e) {
            const t = c.state.activeCaipNetwork?.caipNetworkId;
            return e.filter((s)=>s.metadata.chain === t);
        },
        clearCursor () {
            q.next = void 0;
        },
        resetTransactions () {
            q.transactions = [], q.transactionsByYear = {}, q.lastNetworkInView = void 0, q.loading = !1, q.empty = !1, q.next = void 0;
        }
    };
    Ot = he(Er, "API_ERROR");
    W = V({
        connections: new Map,
        recentConnections: new Map,
        isSwitchingConnection: !1,
        wcError: !1,
        wcFetchingUri: !1,
        buffering: !1,
        status: "disconnected"
    });
    let Le;
    let Nr, Yt;
    Nr = {
        state: W,
        subscribe (e) {
            return X(W, ()=>e(W));
        },
        subscribeKey (e, t) {
            return Q(W, e, t);
        },
        _getClient () {
            return W._client;
        },
        setClient (e) {
            W._client = pt(e);
        },
        initialize (e) {
            const t = e.filter((n)=>!!n.namespace).map((n)=>n.namespace);
            g.syncStorageConnections(t);
        },
        syncStorageConnections (e) {
            const t = C.getConnections(), n = e ?? Array.from(c.state.chains.keys());
            for (const s of n){
                const r = t[s] ?? [], a = new Map(W.recentConnections);
                a.set(s, r), W.recentConnections = a;
            }
        },
        getConnections (e) {
            return e ? W.connections.get(e) ?? [] : [];
        },
        hasAnyConnection (e) {
            const t = g.state.connections;
            return Array.from(t.values()).flatMap((n)=>n).some(({ connectorId: n })=>n === e);
        },
        async connectWalletConnect ({ cache: e = "auto" } = {}) {
            W.wcFetchingUri = !0;
            const t = E.isTelegram() || E.isSafari() && E.isIos();
            if (e === "always" || e === "auto" && t) {
                if (Le) {
                    await Le, Le = void 0;
                    return;
                }
                if (!E.isPairingExpired(W?.wcPairingExpiry)) {
                    const n = W.wcUri;
                    W.wcUri = n;
                    return;
                }
                Le = g._getClient()?.connectWalletConnect?.().catch(()=>{}), g.state.status = "connecting", await Le, Le = void 0, W.wcPairingExpiry = void 0, g.state.status = "connected";
            } else await g._getClient()?.connectWalletConnect?.();
        },
        async connectExternal (e, t, n = !0) {
            const s = await g._getClient()?.connectExternal?.(e);
            n && c.setActiveNamespace(t);
            const r = m.state.allConnectors.find((o)=>o.id === e?.id), a = e.type === "AUTH" ? "email" : "browser";
            return U.sendEvent({
                type: "track",
                event: "CONNECT_SUCCESS",
                properties: {
                    method: a,
                    name: r?.name || "Unknown",
                    view: T.state.view,
                    walletRank: r?.explorerWallet?.order
                }
            }), s;
        },
        async reconnectExternal (e) {
            await g._getClient()?.reconnectExternal?.(e);
            const t = e.chain || c.state.activeChain;
            t && m.setConnectorId(e.id, t);
        },
        async setPreferredAccountType (e, t) {
            if (!t) return;
            M.setLoading(!0, c.state.activeChain);
            const n = m.getAuthConnector();
            n && (c.setAccountProp("preferredAccountType", e, t), await n.provider.setPreferredAccount(e), C.setPreferredAccountTypes(Object.entries(c.state.chains).reduce((s, [r, a])=>{
                const o = r, i = pe(o);
                return i !== void 0 && (s[o] = i), s;
            }, {})), await g.reconnectExternal(n), M.setLoading(!1, c.state.activeChain), U.sendEvent({
                type: "track",
                event: "SET_PREFERRED_ACCOUNT_TYPE",
                properties: {
                    accountType: e,
                    network: c.state.activeCaipNetwork?.caipNetworkId || ""
                }
            }));
        },
        async signMessage (e) {
            return g._getClient()?.signMessage(e);
        },
        parseUnits (e, t) {
            return g._getClient()?.parseUnits(e, t);
        },
        formatUnits (e, t) {
            return g._getClient()?.formatUnits(e, t);
        },
        updateBalance (e) {
            return g._getClient()?.updateBalance(e);
        },
        async sendTransaction (e) {
            return g._getClient()?.sendTransaction(e);
        },
        async getCapabilities (e) {
            return g._getClient()?.getCapabilities(e);
        },
        async grantPermissions (e) {
            return g._getClient()?.grantPermissions(e);
        },
        async walletGetAssets (e) {
            return g._getClient()?.walletGetAssets(e) ?? {};
        },
        async estimateGas (e) {
            return g._getClient()?.estimateGas(e);
        },
        async writeContract (e) {
            return g._getClient()?.writeContract(e);
        },
        async writeSolanaTransaction (e) {
            return g._getClient()?.writeSolanaTransaction(e);
        },
        async getEnsAddress (e) {
            return g._getClient()?.getEnsAddress(e);
        },
        async getEnsAvatar (e) {
            return g._getClient()?.getEnsAvatar(e);
        },
        checkInstalled (e) {
            return g._getClient()?.checkInstalled?.(e) || !1;
        },
        resetWcConnection () {
            W.wcUri = void 0, W.wcPairingExpiry = void 0, W.wcLinking = void 0, W.recentWallet = void 0, W.wcFetchingUri = !1, W.status = "disconnected", Ot.resetTransactions(), C.deleteWalletConnectDeepLink(), C.deleteRecentWallet(), we.set({
                connectingWallet: void 0
            });
        },
        resetUri () {
            W.wcUri = void 0, W.wcPairingExpiry = void 0, Le = void 0, W.wcFetchingUri = !1, we.set({
                connectingWallet: void 0
            });
        },
        finalizeWcConnection (e) {
            const { wcLinking: t, recentWallet: n } = g.state;
            t && C.setWalletConnectDeepLink(t), n && C.setAppKitRecent(n), e && U.sendEvent({
                type: "track",
                event: "CONNECT_SUCCESS",
                address: e,
                properties: {
                    method: t ? "mobile" : "qrcode",
                    name: T.state.data?.wallet?.name || "Unknown",
                    view: T.state.view,
                    walletRank: n?.order
                }
            });
        },
        setWcBasic (e) {
            W.wcBasic = e;
        },
        setUri (e) {
            W.wcUri = e, W.wcFetchingUri = !1, W.wcPairingExpiry = E.getPairingExpiry();
        },
        setWcLinking (e) {
            W.wcLinking = e;
        },
        setWcError (e) {
            W.wcError = e, W.wcFetchingUri = !1, W.buffering = !1;
        },
        setRecentWallet (e) {
            W.recentWallet = e;
        },
        setBuffering (e) {
            W.buffering = e;
        },
        setStatus (e) {
            W.status = e;
        },
        setIsSwitchingConnection (e) {
            W.isSwitchingConnection = e;
        },
        async disconnect ({ id: e, namespace: t, initialDisconnect: n } = {}) {
            try {
                await g._getClient()?.disconnect({
                    id: e,
                    chainNamespace: t,
                    initialDisconnect: n
                });
            } catch (s) {
                throw new Ke("Failed to disconnect", "INTERNAL_SDK_ERROR", s);
            }
        },
        async disconnectConnector ({ id: e, namespace: t }) {
            try {
                await g._getClient()?.disconnectConnector({
                    id: e,
                    namespace: t
                });
            } catch (n) {
                throw new Ke("Failed to disconnect connector", "INTERNAL_SDK_ERROR", n);
            }
        },
        setConnections (e, t) {
            const n = new Map(W.connections);
            n.set(t, e), W.connections = n;
        },
        async handleAuthAccountSwitch ({ address: e, namespace: t }) {
            const s = c.getAccountData(t)?.user?.accounts?.find((a)=>a.type === "smartAccount"), r = s && s.address.toLowerCase() === e.toLowerCase() && rt.canSwitchToSmartAccount(t) ? "smartAccount" : "eoa";
            await g.setPreferredAccountType(r, t);
        },
        async handleActiveConnection ({ connection: e, namespace: t, address: n }) {
            const s = m.getConnectorById(e.connectorId), r = e.connectorId === h.CONNECTOR_ID.AUTH;
            if (!s) throw new Error(`No connector found for connection: ${e.connectorId}`);
            if (r) n && await g.handleAuthAccountSwitch({
                address: n,
                namespace: t
            });
            else return (await g.connectExternal({
                id: s.id,
                type: s.type,
                provider: s.provider,
                address: n,
                chain: t
            }, t))?.address;
            return n;
        },
        async handleDisconnectedConnection ({ connection: e, namespace: t, address: n, closeModalOnConnect: s }) {
            const r = m.getConnectorById(e.connectorId), a = e.auth?.name?.toLowerCase(), o = e.connectorId === h.CONNECTOR_ID.AUTH, i = e.connectorId === h.CONNECTOR_ID.WALLET_CONNECT;
            if (!r) throw new Error(`No connector found for connection: ${e.connectorId}`);
            let d;
            if (o) if (a && rt.isSocialProvider(a)) {
                const { address: l } = await rt.connectSocial({
                    social: a,
                    closeModalOnConnect: s,
                    onOpenFarcaster () {
                        M.open({
                            view: "ConnectingFarcaster"
                        });
                    },
                    onConnect () {
                        T.replace("ProfileWallets");
                    }
                });
                d = l;
            } else {
                const { address: l } = await rt.connectEmail({
                    closeModalOnConnect: s,
                    onOpen () {
                        M.open({
                            view: "EmailLogin"
                        });
                    },
                    onConnect () {
                        T.replace("ProfileWallets");
                    }
                });
                d = l;
            }
            else if (i) {
                const { address: l } = await rt.connectWalletConnect({
                    walletConnect: !0,
                    connector: r,
                    closeModalOnConnect: s,
                    onOpen (u) {
                        const p = u ? "AllWallets" : "ConnectingWalletConnect";
                        M.state.open ? T.push(p) : M.open({
                            view: p
                        });
                    },
                    onConnect () {
                        T.replace("ProfileWallets");
                    }
                });
                d = l;
            } else {
                const l = await g.connectExternal({
                    id: r.id,
                    type: r.type,
                    provider: r.provider,
                    chain: t
                }, t);
                l && (d = l.address);
            }
            return o && n && await g.handleAuthAccountSwitch({
                address: n,
                namespace: t
            }), d;
        },
        async switchConnection ({ connection: e, address: t, namespace: n, closeModalOnConnect: s, onChange: r }) {
            let a;
            const o = c.getAccountData(n)?.caipAddress;
            if (o) {
                const { address: d } = J.parseCaipAddress(o);
                a = d;
            }
            const i = Mt.getConnectionStatus(e, n);
            switch(i){
                case "connected":
                case "active":
                    {
                        const d = await g.handleActiveConnection({
                            connection: e,
                            namespace: n,
                            address: t
                        });
                        if (a && d) {
                            const l = d.toLowerCase() !== a.toLowerCase();
                            r?.({
                                address: d,
                                namespace: n,
                                hasSwitchedAccount: l,
                                hasSwitchedWallet: i === "active"
                            });
                        }
                        break;
                    }
                case "disconnected":
                    {
                        const d = await g.handleDisconnectedConnection({
                            connection: e,
                            namespace: n,
                            address: t,
                            closeModalOnConnect: s
                        });
                        d && r?.({
                            address: d,
                            namespace: n,
                            hasSwitchedAccount: !0,
                            hasSwitchedWallet: !0
                        });
                        break;
                    }
                default:
                    throw new Error(`Invalid connection status: ${i}`);
            }
        }
    };
    g = he(Nr);
    Yt = {
        createBalance (e, t) {
            const n = {
                name: e.metadata.name || "",
                symbol: e.metadata.symbol || "",
                decimals: e.metadata.decimals || 0,
                value: e.metadata.value || 0,
                price: e.metadata.price || 0,
                iconUrl: e.metadata.iconUrl || ""
            };
            return {
                name: n.name,
                symbol: n.symbol,
                chainId: t,
                address: e.address === "native" ? void 0 : this.convertAddressToCAIP10Address(e.address, t),
                value: n.value,
                price: n.price,
                quantity: {
                    decimals: n.decimals.toString(),
                    numeric: this.convertHexToBalance({
                        hex: e.balance,
                        decimals: n.decimals
                    })
                },
                iconUrl: n.iconUrl
            };
        },
        convertHexToBalance ({ hex: e, decimals: t }) {
            return Yn(BigInt(e), t);
        },
        convertAddressToCAIP10Address (e, t) {
            return `${t}:${e}`;
        },
        createCAIP2ChainId (e, t) {
            return `${t}:${parseInt(e, 16)}`;
        },
        getChainIdHexFromCAIP2ChainId (e) {
            const t = e.split(":");
            if (t.length < 2 || !t[1]) return "0x0";
            const n = t[1], s = parseInt(n, 10);
            return isNaN(s) ? "0x0" : `0x${s.toString(16)}`;
        },
        isWalletGetAssetsResponse (e) {
            return typeof e != "object" || e === null ? !1 : Object.values(e).every((t)=>Array.isArray(t) && t.every((n)=>this.isValidAsset(n)));
        },
        isValidAsset (e) {
            return typeof e == "object" && e !== null && typeof e.address == "string" && typeof e.balance == "string" && (e.type === "ERC20" || e.type === "NATIVE") && typeof e.metadata == "object" && e.metadata !== null && typeof e.metadata.name == "string" && typeof e.metadata.symbol == "string" && typeof e.metadata.decimals == "number" && typeof e.metadata.price == "number" && typeof e.metadata.iconUrl == "string";
        }
    };
    let Jt;
    async function Un() {
        if (!Jt) {
            const { createPublicClient: e, http: t, defineChain: n } = await Ut(async ()=>{
                const { createPublicClient: s, http: r, defineChain: a } = await import("./web3-vendor-DJNYHj_t.js").then(async (m)=>{
                    await m.__tla;
                    return m;
                }).then((o)=>o.c);
                return {
                    createPublicClient: s,
                    http: r,
                    defineChain: a
                };
            }, __vite__mapDeps([0,1,2,3,4,5]));
            Jt = {
                createPublicClient: e,
                http: t,
                defineChain: n
            };
        }
        return Jt;
    }
    let an, Xt, Wt, se, F, br, D, Qt, yt, w, ds, Ir, re, yr, it, on, Sr, $, _r, cn, Dn, Tr, ce, kr, ct;
    an = {
        getBlockchainApiRpcUrl (e, t) {
            const n = new URL("https://rpc.walletconnect.org/v1/");
            return n.searchParams.set("chainId", e), n.searchParams.set("projectId", t), n.toString();
        },
        async getViemChain (e) {
            const { defineChain: t } = await Un(), { chainId: n } = J.parseCaipNetworkId(e.caipNetworkId);
            return t({
                ...e,
                id: Number(n)
            });
        },
        async createViemPublicClient (e) {
            const { createPublicClient: t, http: n } = await Un(), s = f.state.projectId, r = await an.getViemChain(e);
            if (!r) throw new Error(`Chain ${e.caipNetworkId} not found in viem/chains`);
            return t({
                chain: r,
                transport: n(an.getBlockchainApiRpcUrl(e.caipNetworkId, s))
            });
        }
    };
    Cn = {
        async getMyTokensWithBalance (e = {
            forceUpdate: void 0,
            caipNetwork: c.state.activeCaipNetwork,
            address: c.getAccountData()?.address
        }) {
            const { forceUpdate: t, caipNetwork: n, address: s } = e, r = m.getConnectorId("eip155") === h.CONNECTOR_ID.AUTH;
            if (!s) return [];
            const a = n ? `${n.caipNetworkId}:${s}` : s, o = C.getBalanceCacheForCaipAddress(a);
            if (o) return o.balances;
            if (n && n.chainNamespace === h.CHAIN.EVM && r) {
                const d = await this.getEIP155Balances(s, n);
                if (d) return this.filterLowQualityTokens(d);
            }
            const i = await v.getBalance(s, n?.caipNetworkId, t);
            return this.filterLowQualityTokens(i.balances);
        },
        async getEIP155Balances (e, t) {
            try {
                const n = Yt.getChainIdHexFromCAIP2ChainId(t.caipNetworkId);
                if (!(await g.getCapabilities(e))?.[n]?.assetDiscovery?.supported) return null;
                const r = await g.walletGetAssets({
                    account: e,
                    chainFilter: [
                        n
                    ]
                });
                if (!Yt.isWalletGetAssetsResponse(r)) return null;
                const o = (r[n] || []).map((i)=>Yt.createBalance(i, t.caipNetworkId));
                return C.updateBalanceCache({
                    caipAddress: `${t.caipNetworkId}:${e}`,
                    balance: {
                        balances: o
                    },
                    timestamp: Date.now()
                }), o;
            } catch  {
                return null;
            }
        },
        filterLowQualityTokens (e) {
            return e.filter((t)=>t.quantity.decimals !== "0");
        },
        async fetchERC20Balance ({ caipAddress: e, assetAddress: t, caipNetwork: n }) {
            const s = await an.createViemPublicClient(n), { address: r } = J.parseCaipAddress(e), [{ result: a }, { result: o }, { result: i }, { result: d }] = await s.multicall({
                contracts: [
                    {
                        address: t,
                        functionName: "name",
                        args: [],
                        abi: Nt
                    },
                    {
                        address: t,
                        functionName: "symbol",
                        args: [],
                        abi: Nt
                    },
                    {
                        address: t,
                        functionName: "balanceOf",
                        args: [
                            r
                        ],
                        abi: Nt
                    },
                    {
                        address: t,
                        functionName: "decimals",
                        args: [],
                        abi: Nt
                    }
                ]
            });
            return {
                name: a,
                symbol: o,
                decimals: d,
                balance: i && d ? Yn(i, d) : "0"
            };
        }
    };
    Xt = {
        adapters: {}
    };
    cs = {
        state: Xt,
        initialize (e) {
            Xt.adapters = {
                ...e
            };
        },
        get (e) {
            return Xt.adapters[e];
        }
    };
    Wt = {
        eip155: void 0,
        solana: void 0,
        polkadot: void 0,
        bip122: void 0,
        cosmos: void 0,
        sui: void 0,
        stacks: void 0,
        ton: void 0
    };
    se = V({
        providers: {
            ...Wt
        },
        providerIds: {
            ...Wt
        }
    });
    K = {
        state: se,
        subscribeKey (e, t) {
            return Q(se, e, t);
        },
        subscribe (e) {
            return X(se, ()=>{
                e(se);
            });
        },
        subscribeProviders (e) {
            return X(se.providers, ()=>e(se.providers));
        },
        setProvider (e, t) {
            e && t && (se.providers[e] = pt(t));
        },
        getProvider (e) {
            if (e) return se.providers[e];
        },
        setProviderId (e, t) {
            t && (se.providerIds[e] = t);
        },
        getProviderId (e) {
            if (e) return se.providerIds[e];
        },
        reset () {
            se.providers = {
                ...Wt
            }, se.providerIds = {
                ...Wt
            };
        },
        resetChain (e) {
            se.providers[e] = void 0, se.providerIds[e] = void 0;
        }
    };
    Ar = {
        async getTokenList (e) {
            return (await v.fetchSwapTokens({
                chainId: e
            }))?.tokens?.map((s)=>({
                    ...s,
                    eip2612: !1,
                    quantity: {
                        decimals: "0",
                        numeric: "0"
                    },
                    price: 0,
                    value: 0
                })) || [];
        },
        async fetchGasPrice () {
            const e = c.state.activeCaipNetwork;
            if (!e) return null;
            try {
                if (e.chainNamespace === "solana") {
                    const t = (await g?.estimateGas({
                        chainNamespace: "solana"
                    }))?.toString();
                    return {
                        standard: t,
                        fast: t,
                        instant: t
                    };
                } else return await v.fetchGasPrice({
                    chainId: e.caipNetworkId
                });
            } catch  {
                return null;
            }
        },
        async fetchSwapAllowance ({ tokenAddress: e, userAddress: t, sourceTokenAmount: n, sourceTokenDecimals: s }) {
            const r = await v.fetchSwapAllowance({
                tokenAddress: e,
                userAddress: t
            });
            if (r?.allowance && n && s) {
                const a = g.parseUnits(n, s) || 0;
                return BigInt(r.allowance) >= a;
            }
            return !1;
        },
        async getMyTokensWithBalance (e) {
            const t = await Cn.getMyTokensWithBalance({
                forceUpdate: e,
                caipNetwork: c.state.activeCaipNetwork,
                address: c.getAccountData()?.address
            });
            return c.setAccountProp("tokenBalance", t, c.state.activeChain), this.mapBalancesToSwapTokens(t);
        },
        mapBalancesToSwapTokens (e) {
            return e?.map((t)=>({
                    ...t,
                    address: t?.address ? t.address : is(),
                    decimals: parseInt(t.quantity.decimals, 10),
                    logoUri: t.iconUrl,
                    eip2612: !1
                })) || [];
        },
        async handleSwapError (e) {
            try {
                const t = e?.cause;
                return t?.json && (await t.json())?.reasons?.[0]?.description?.includes("insufficient liquidity") ? "Insufficient liquidity" : void 0;
            } catch  {
                return;
            }
        }
    };
    F = V({
        tokenBalances: [],
        loading: !1
    });
    br = {
        state: F,
        subscribe (e) {
            return X(F, ()=>e(F));
        },
        subscribeKey (e, t) {
            return Q(F, e, t);
        },
        setToken (e) {
            e && (F.token = pt(e));
        },
        setTokenAmount (e) {
            F.sendTokenAmount = e;
        },
        setReceiverAddress (e) {
            F.receiverAddress = e;
        },
        setReceiverProfileImageUrl (e) {
            F.receiverProfileImageUrl = e;
        },
        setReceiverProfileName (e) {
            F.receiverProfileName = e;
        },
        setNetworkBalanceInUsd (e) {
            F.networkBalanceInUSD = e;
        },
        setLoading (e) {
            F.loading = e;
        },
        getSdkEventProperties (e) {
            return {
                message: E.parseError(e),
                isSmartAccount: pe(c.state.activeChain) === ve.ACCOUNT_TYPES.SMART_ACCOUNT,
                token: F.token?.symbol || "",
                amount: F.sendTokenAmount ?? 0,
                network: c.state.activeCaipNetwork?.caipNetworkId || ""
            };
        },
        async sendToken () {
            try {
                switch(D.setLoading(!0), c.state.activeCaipNetwork?.chainNamespace){
                    case "eip155":
                        await D.sendEvmToken();
                        return;
                    case "solana":
                        await D.sendSolanaToken();
                        return;
                    default:
                        throw new Error("Unsupported chain");
                }
            } catch (e) {
                throw ke.isUserRejectedRequestError(e) ? new ns(e) : e;
            } finally{
                D.setLoading(!1);
            }
        },
        async sendEvmToken () {
            const e = c.state.activeChain;
            if (!e) throw new Error("SendController:sendEvmToken - activeChainNamespace is required");
            const t = pe(e);
            if (!D.state.sendTokenAmount || !D.state.receiverAddress) throw new Error("An amount and receiver address are required");
            if (!D.state.token) throw new Error("A token is required");
            if (D.state.token?.address) {
                U.sendEvent({
                    type: "track",
                    event: "SEND_INITIATED",
                    properties: {
                        isSmartAccount: t === ve.ACCOUNT_TYPES.SMART_ACCOUNT,
                        token: D.state.token.address,
                        amount: D.state.sendTokenAmount,
                        network: c.state.activeCaipNetwork?.caipNetworkId || ""
                    }
                });
                const { hash: n } = await D.sendERC20Token({
                    receiverAddress: D.state.receiverAddress,
                    tokenAddress: D.state.token.address,
                    sendTokenAmount: D.state.sendTokenAmount,
                    decimals: D.state.token.quantity.decimals
                });
                n && (F.hash = n);
            } else {
                U.sendEvent({
                    type: "track",
                    event: "SEND_INITIATED",
                    properties: {
                        isSmartAccount: t === ve.ACCOUNT_TYPES.SMART_ACCOUNT,
                        token: D.state.token.symbol || "",
                        amount: D.state.sendTokenAmount,
                        network: c.state.activeCaipNetwork?.caipNetworkId || ""
                    }
                });
                const { hash: n } = await D.sendNativeToken({
                    receiverAddress: D.state.receiverAddress,
                    sendTokenAmount: D.state.sendTokenAmount,
                    decimals: D.state.token.quantity.decimals
                });
                n && (F.hash = n);
            }
        },
        async fetchTokenBalance (e) {
            F.loading = !0;
            const t = c.state.activeChain, n = c.state.activeCaipNetwork?.caipNetworkId, s = c.state.activeCaipNetwork?.chainNamespace, r = c.getAccountData(t)?.caipAddress ?? c.state.activeCaipAddress, a = r ? E.getPlainAddress(r) : void 0;
            if (F.lastRetry && !E.isAllowedRetry(F.lastRetry, 30 * L.ONE_SEC_MS)) return F.loading = !1, [];
            try {
                if (a && n && s) {
                    const o = await Cn.getMyTokensWithBalance();
                    return F.tokenBalances = o, F.lastRetry = void 0, o;
                }
            } catch (o) {
                F.lastRetry = Date.now(), e?.(o), Ae.showError("Token Balance Unavailable");
            } finally{
                F.loading = !1;
            }
            return [];
        },
        fetchNetworkBalance () {
            if (F.tokenBalances.length === 0) return;
            const e = Ar.mapBalancesToSwapTokens(F.tokenBalances);
            if (!e) return;
            const t = e.find((n)=>n.address === is());
            t && (F.networkBalanceInUSD = t ? ts.multiply(t.quantity.numeric, t.price).toString() : "0");
        },
        async sendNativeToken (e) {
            T.pushTransactionStack({});
            const t = e.receiverAddress, n = c.getAccountData()?.address, s = g.parseUnits(e.sendTokenAmount.toString(), Number(e.decimals)), a = await g.sendTransaction({
                chainNamespace: h.CHAIN.EVM,
                to: t,
                address: n,
                data: "0x",
                value: s ?? BigInt(0)
            });
            return U.sendEvent({
                type: "track",
                event: "SEND_SUCCESS",
                properties: {
                    isSmartAccount: pe("eip155") === ve.ACCOUNT_TYPES.SMART_ACCOUNT,
                    token: D.state.token?.symbol || "",
                    amount: e.sendTokenAmount,
                    network: c.state.activeCaipNetwork?.caipNetworkId || "",
                    hash: a || ""
                }
            }), g._getClient()?.updateBalance("eip155"), D.resetSend(), {
                hash: a
            };
        },
        async sendERC20Token (e) {
            T.pushTransactionStack({
                onSuccess () {
                    T.replace("Account");
                }
            });
            const t = g.parseUnits(e.sendTokenAmount.toString(), Number(e.decimals)), n = c.getAccountData()?.address;
            if (n && e.sendTokenAmount && e.receiverAddress && e.tokenAddress) {
                const s = E.getPlainAddress(e.tokenAddress);
                if (!s) throw new Error("SendController:sendERC20Token - tokenAddress is required");
                const r = await g.writeContract({
                    fromAddress: n,
                    tokenAddress: s,
                    args: [
                        e.receiverAddress,
                        t ?? BigInt(0)
                    ],
                    method: "transfer",
                    abi: xs.getERC20Abi(s),
                    chainNamespace: h.CHAIN.EVM
                });
                return U.sendEvent({
                    type: "track",
                    event: "SEND_SUCCESS",
                    properties: {
                        isSmartAccount: pe("eip155") === ve.ACCOUNT_TYPES.SMART_ACCOUNT,
                        token: D.state.token?.symbol || "",
                        amount: e.sendTokenAmount,
                        network: c.state.activeCaipNetwork?.caipNetworkId || "",
                        hash: r || ""
                    }
                }), D.resetSend(), {
                    hash: r
                };
            }
            return {
                hash: void 0
            };
        },
        async sendSolanaToken () {
            if (!D.state.sendTokenAmount || !D.state.receiverAddress) throw new Error("An amount and receiver address are required");
            T.pushTransactionStack({
                onSuccess () {
                    T.replace("Account");
                }
            });
            let e;
            D.state.token && D.state.token.address !== L.SOLANA_NATIVE_TOKEN_ADDRESS && (E.isCaipAddress(D.state.token.address) ? e = E.getPlainAddress(D.state.token.address) : e = D.state.token.address);
            const t = await g.sendTransaction({
                chainNamespace: "solana",
                tokenMint: e,
                to: D.state.receiverAddress,
                value: D.state.sendTokenAmount
            });
            t && (F.hash = t), g._getClient()?.updateBalance("solana"), U.sendEvent({
                type: "track",
                event: "SEND_SUCCESS",
                properties: {
                    isSmartAccount: !1,
                    token: D.state.token?.symbol || "",
                    amount: D.state.sendTokenAmount,
                    network: c.state.activeCaipNetwork?.caipNetworkId || "",
                    hash: t || ""
                }
            }), D.resetSend();
        },
        resetSend () {
            F.token = void 0, F.sendTokenAmount = void 0, F.receiverAddress = void 0, F.receiverProfileImageUrl = void 0, F.receiverProfileName = void 0, F.loading = !1, F.tokenBalances = [];
        }
    };
    D = he(br);
    Qt = {
        currentTab: 0,
        tokenBalance: [],
        smartAccountDeployed: !1,
        addressLabels: new Map,
        user: void 0,
        preferredAccountType: void 0
    };
    yt = {
        caipNetwork: void 0,
        supportsAllNetworks: !0,
        smartAccountEnabledNetworks: []
    };
    w = V({
        chains: Ys(),
        activeCaipAddress: void 0,
        activeChain: void 0,
        activeCaipNetwork: void 0,
        noAdapters: !1,
        universalAdapter: {
            connectionControllerClient: void 0
        },
        isSwitchingNamespace: !1
    });
    ds = {
        state: w,
        subscribe (e) {
            return X(w, ()=>{
                e(w);
            });
        },
        subscribeKey (e, t) {
            return Q(w, e, t);
        },
        subscribeAccountStateProp (e, t, n) {
            const s = n || w.activeChain;
            return s ? Q(w.chains.get(s)?.accountState || {}, e, t) : ()=>{};
        },
        subscribeChainProp (e, t, n) {
            let s;
            return X(w.chains, ()=>{
                const r = n || w.activeChain;
                if (r) {
                    const a = w.chains.get(r)?.[e];
                    s !== a && (s = a, t(a));
                }
            });
        },
        initialize (e, t, n) {
            const { chainId: s, namespace: r } = C.getActiveNetworkProps(), a = t?.find((u)=>u.id.toString() === s?.toString()), i = e.find((u)=>u?.namespace === r) || e?.[0], d = e.map((u)=>u.namespace).filter((u)=>u !== void 0), l = f.state.enableEmbedded ? new Set([
                ...d
            ]) : new Set([
                ...t?.map((u)=>u.chainNamespace) ?? []
            ]);
            (e?.length === 0 || !i) && (w.noAdapters = !0), w.noAdapters || (w.activeChain = i?.namespace, w.activeCaipNetwork = a, c.setChainNetworkData(i?.namespace, {
                caipNetwork: a
            }), w.activeChain && we.set({
                activeChain: i?.namespace
            })), l.forEach((u)=>{
                const p = t?.filter((A)=>A.chainNamespace === u), b = C.getPreferredAccountTypes() || {}, O = {
                    ...f.state.defaultAccountTypes,
                    ...b
                };
                c.state.chains.set(u, {
                    namespace: u,
                    networkState: V({
                        ...yt,
                        caipNetwork: p?.[0]
                    }),
                    accountState: V({
                        ...Qt,
                        preferredAccountType: O[u]
                    }),
                    caipNetworks: p ?? [],
                    ...n
                }), c.setRequestedCaipNetworks(p ?? [], u);
            });
        },
        removeAdapter (e) {
            if (w.activeChain === e) {
                const t = Array.from(w.chains.entries()).find(([n])=>n !== e);
                if (t) {
                    const n = t[1]?.caipNetworks?.[0];
                    n && c.setActiveCaipNetwork(n);
                }
            }
            w.chains.delete(e);
        },
        addAdapter (e, { connectionControllerClient: t }, n) {
            if (!e.namespace) throw new Error("ChainController:addAdapter - adapter must have a namespace");
            w.chains.set(e.namespace, {
                namespace: e.namespace,
                networkState: {
                    ...yt,
                    caipNetwork: n[0]
                },
                accountState: {
                    ...Qt
                },
                caipNetworks: n,
                connectionControllerClient: t
            }), c.setRequestedCaipNetworks(n?.filter((s)=>s.chainNamespace === e.namespace) ?? [], e.namespace);
        },
        addNetwork (e) {
            const t = w.chains.get(e.chainNamespace);
            if (t) {
                const n = [
                    ...t.caipNetworks || []
                ];
                t.caipNetworks?.find((s)=>s.id === e.id) || n.push(e), w.chains.set(e.chainNamespace, {
                    ...t,
                    caipNetworks: n
                }), c.setRequestedCaipNetworks(n, e.chainNamespace), m.filterByNamespace(e.chainNamespace, !0);
            }
        },
        removeNetwork (e, t) {
            const n = w.chains.get(e);
            if (n) {
                const s = w.activeCaipNetwork?.id === t, r = [
                    ...n.caipNetworks?.filter((a)=>a.id !== t) || []
                ];
                s && n?.caipNetworks?.[0] && c.setActiveCaipNetwork(n.caipNetworks[0]), w.chains.set(e, {
                    ...n,
                    caipNetworks: r
                }), c.setRequestedCaipNetworks(r || [], e), r.length === 0 && m.filterByNamespace(e, !1);
            }
        },
        setAdapterNetworkState (e, t) {
            const n = w.chains.get(e);
            n && (n.networkState = {
                ...n.networkState || yt,
                ...t
            }, w.chains.set(e, n));
        },
        setChainAccountData (e, t, n = !0) {
            if (!e) throw new Error("Chain is required to update chain account data");
            const s = w.chains.get(e);
            if (s) {
                const r = {
                    ...s.accountState || Qt,
                    ...t
                };
                w.chains.set(e, {
                    ...s,
                    accountState: r
                }), (w.chains.size === 1 || w.activeChain === e) && t.caipAddress && (w.activeCaipAddress = t.caipAddress);
            }
        },
        setChainNetworkData (e, t) {
            if (!e) return;
            const n = w.chains.get(e);
            if (n) {
                const s = {
                    ...n.networkState || yt,
                    ...t
                };
                w.chains.set(e, {
                    ...n,
                    networkState: s
                });
            }
        },
        setAccountProp (e, t, n, s = !0) {
            c.setChainAccountData(n, {
                [e]: t
            }, s);
        },
        setActiveNamespace (e) {
            w.activeChain = e;
            const t = e ? w.chains.get(e) : void 0, n = t?.networkState?.caipNetwork;
            n?.id && e && (w.activeCaipAddress = t?.accountState?.caipAddress, w.activeCaipNetwork = n, c.setChainNetworkData(e, {
                caipNetwork: n
            }), C.setActiveCaipNetworkId(n?.caipNetworkId), we.set({
                activeChain: e,
                selectedNetworkId: n?.caipNetworkId
            }));
        },
        setActiveCaipNetwork (e) {
            if (!e) return;
            const t = w.activeChain === e.chainNamespace;
            t || c.setIsSwitchingNamespace(!0);
            const n = w.chains.get(e.chainNamespace);
            w.activeChain = e.chainNamespace, w.activeCaipNetwork = e, c.setChainNetworkData(e.chainNamespace, {
                caipNetwork: e
            });
            let s = n?.accountState?.address;
            if (s) w.activeCaipAddress = `${e.chainNamespace}:${e.id}:${s}`;
            else if (t && w.activeCaipAddress) {
                const { address: a } = J.parseCaipAddress(w.activeCaipAddress);
                s = a, w.activeCaipAddress = `${e.caipNetworkId}:${s}`;
            } else w.activeCaipAddress = void 0;
            c.setChainAccountData(e.chainNamespace, {
                address: s,
                caipAddress: w.activeCaipAddress
            }), D.resetSend(), we.set({
                activeChain: w.activeChain,
                selectedNetworkId: w.activeCaipNetwork?.caipNetworkId
            }), C.setActiveCaipNetworkId(e.caipNetworkId), !c.checkIfSupportedNetwork(e.chainNamespace) && f.state.enableNetworkSwitch && !f.state.allowUnsupportedChain && !g.state.wcBasic && c.showUnsupportedChainUI();
        },
        addCaipNetwork (e) {
            if (!e) return;
            const t = w.chains.get(e.chainNamespace);
            t && t?.caipNetworks?.push(e);
        },
        async switchActiveNamespace (e) {
            if (!e) return;
            const t = e !== c.state.activeChain, n = c.getNetworkData(e)?.caipNetwork, s = c.getCaipNetworkByNamespace(e, n?.id);
            t && s && await c.switchActiveNetwork(s);
        },
        async switchActiveNetwork (e, { throwOnFailure: t = !1 } = {}) {
            const n = c.state.activeChain;
            if (!n) throw new Error("ChainController:switchActiveNetwork - namespace is required");
            const s = K.getProviderId(w.activeChain) === "AUTH", r = c.getAccountData(n)?.address, a = h.AUTH_CONNECTOR_SUPPORTED_CHAINS.includes(e.chainNamespace);
            try {
                if (r && e.chainNamespace === n || s && a) {
                    const o = cs.get(e.chainNamespace);
                    if (!o) throw new Error("Adapter not found");
                    await o.switchNetwork({
                        caipNetwork: e
                    });
                }
                c.setActiveCaipNetwork(e);
            } catch (o) {
                if (t) throw o;
            }
            U.sendEvent({
                type: "track",
                event: "SWITCH_NETWORK",
                properties: {
                    network: e.caipNetworkId
                }
            });
        },
        getConnectionControllerClient (e) {
            const t = e || w.activeChain;
            if (!t) throw new Error("Chain is required to get connection controller client");
            const n = w.chains.get(t);
            if (!n?.connectionControllerClient) throw new Error("ConnectionController client not set");
            return n.connectionControllerClient;
        },
        getNetworkProp (e, t) {
            const n = w.chains.get(t)?.networkState;
            if (n) return n[e];
        },
        getRequestedCaipNetworks (e) {
            const t = w.chains.get(e), { approvedCaipNetworkIds: n = [], requestedCaipNetworks: s = [] } = t?.networkState || {};
            return E.sortRequestedNetworks(n, s).filter((o)=>o?.id);
        },
        getAllRequestedCaipNetworks () {
            const e = [];
            return w.chains.forEach((t)=>{
                if (!t.namespace) throw new Error("ChainController:getAllRequestedCaipNetworks - chainAdapter must have a namespace");
                const n = c.getRequestedCaipNetworks(t.namespace);
                e.push(...n);
            }), e;
        },
        setRequestedCaipNetworks (e, t) {
            c.setAdapterNetworkState(t, {
                requestedCaipNetworks: e
            });
            const s = c.getAllRequestedCaipNetworks().map((a)=>a.chainNamespace), r = Array.from(new Set(s));
            m.filterByNamespaces(r);
        },
        getAllApprovedCaipNetworkIds () {
            const e = [];
            return w.chains.forEach((t)=>{
                if (!t.namespace) throw new Error("ChainController:getAllApprovedCaipNetworkIds - chainAdapter must have a namespace");
                const n = c.getApprovedCaipNetworkIds(t.namespace);
                e.push(...n);
            }), e;
        },
        getActiveCaipNetwork (e) {
            return e ? w.chains.get(e)?.networkState?.caipNetwork : w.activeCaipNetwork;
        },
        getActiveCaipAddress () {
            return w.activeCaipAddress;
        },
        getApprovedCaipNetworkIds (e) {
            return w.chains.get(e)?.networkState?.approvedCaipNetworkIds || [];
        },
        setApprovedCaipNetworksData (e, t) {
            c.setAdapterNetworkState(e, t);
        },
        checkIfSupportedNetwork (e, t) {
            const n = t || w.activeCaipNetwork?.caipNetworkId, s = c.getRequestedCaipNetworks(e);
            return s.length ? s?.some((r)=>r.caipNetworkId === n) : !0;
        },
        checkIfSupportedChainId (e) {
            return w.activeChain ? c.getRequestedCaipNetworks(w.activeChain)?.some((n)=>n.id === e) : !0;
        },
        checkIfSmartAccountEnabled () {
            const e = Xn.caipNetworkIdToNumber(w.activeCaipNetwork?.caipNetworkId);
            return !w.activeChain || !e ? !1 : !!(Xs.get(vt.SMART_ACCOUNT_ENABLED_NETWORKS)?.split(",") || [])?.includes(e.toString());
        },
        showUnsupportedChainUI () {
            M.open({
                view: "UnsupportedChain"
            });
        },
        checkIfNamesSupported () {
            const e = w.activeCaipNetwork;
            return !!(e?.chainNamespace && L.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(e.chainNamespace));
        },
        resetNetwork (e) {
            c.setAdapterNetworkState(e, {
                approvedCaipNetworkIds: void 0,
                supportsAllNetworks: !0
            });
        },
        resetAccount (e) {
            const t = e;
            if (!t) throw new Error("Chain is required to set account prop");
            const n = c.state.chains.get(t)?.accountState?.preferredAccountType, s = f.state.defaultAccountTypes[t];
            w.activeCaipAddress = void 0, c.setChainAccountData(t, {
                smartAccountDeployed: !1,
                currentTab: 0,
                caipAddress: void 0,
                address: void 0,
                balance: void 0,
                balanceSymbol: void 0,
                profileName: void 0,
                profileImage: void 0,
                addressExplorerUrl: void 0,
                tokenBalance: [],
                connectedWalletInfo: void 0,
                preferredAccountType: s || n,
                socialProvider: void 0,
                socialWindow: void 0,
                farcasterUrl: void 0,
                user: void 0,
                status: "disconnected"
            }), m.removeConnectorId(t);
        },
        setIsSwitchingNamespace (e) {
            w.isSwitchingNamespace = e;
        },
        getFirstCaipNetworkSupportsAuthConnector () {
            const e = [];
            let t;
            if (w.chains.forEach((n)=>{
                h.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((s)=>s === n.namespace) && n.namespace && e.push(n.namespace);
            }), e.length > 0) {
                const n = e[0];
                return t = n ? w.chains.get(n)?.caipNetworks?.[0] : void 0, t;
            }
        },
        getAccountData (e) {
            const t = e || w.activeChain;
            if (t) return c.state.chains.get(t)?.accountState;
        },
        getNetworkData (e) {
            const t = e || w.activeChain;
            if (t) return c.state.chains.get(t)?.networkState;
        },
        getCaipNetworkByNamespace (e, t) {
            if (!e) return;
            const n = c.state.chains.get(e), s = n?.caipNetworks?.find((r)=>r.id.toString() === t?.toString());
            return s || n?.networkState?.caipNetwork || n?.caipNetworks?.[0];
        },
        getRequestedCaipNetworkIds () {
            const e = m.state.filterByNamespace;
            return (e ? [
                w.chains.get(e)
            ] : Array.from(w.chains.values())).flatMap((n)=>n?.caipNetworks || []).map((n)=>n.caipNetworkId);
        },
        getCaipNetworks (e) {
            return e ? c.getRequestedCaipNetworks(e) : c.getAllRequestedCaipNetworks();
        },
        getCaipNetworkById (e, t) {
            return ds.getCaipNetworks(t).find((n)=>n.id.toString() === e.toString() || n.caipNetworkId.toString() === e.toString());
        },
        setLastConnectedSIWECaipNetwork (e) {
            w.lastConnectedSIWECaipNetwork = e;
        },
        getLastConnectedSIWECaipNetwork () {
            return w.lastConnectedSIWECaipNetwork;
        },
        async fetchTokenBalance (e) {
            const t = c.getAccountData();
            if (!t) return [];
            const n = c.state.activeCaipNetwork?.caipNetworkId, s = c.state.activeCaipNetwork?.chainNamespace, r = c.state.activeCaipAddress, a = r ? E.getPlainAddress(r) : void 0;
            if (c.setAccountProp("balanceLoading", !0, s), t.lastRetry && !E.isAllowedRetry(t.lastRetry, 30 * L.ONE_SEC_MS)) return c.setAccountProp("balanceLoading", !1, s), [];
            try {
                if (a && n && s) {
                    const o = await Cn.getMyTokensWithBalance();
                    return c.setAccountProp("tokenBalance", o, s), c.setAccountProp("lastRetry", void 0, s), c.setAccountProp("balanceLoading", !1, s), o;
                }
            } catch (o) {
                c.setAccountProp("lastRetry", Date.now(), s), e?.(o), Ae.showError("Token Balance Unavailable");
            } finally{
                c.setAccountProp("balanceLoading", !1, s);
            }
            return [];
        },
        isCaipNetworkDisabled (e) {
            const t = e.chainNamespace, n = !!c.getAccountData(t)?.caipAddress, s = c.getAllApprovedCaipNetworkIds(), r = c.getNetworkProp("supportsAllNetworks", t) !== !1, a = m.getConnectorId(t), o = m.getAuthConnector(), i = a === h.CONNECTOR_ID.AUTH && o;
            return !n || r || i ? !1 : !s?.includes(e.caipNetworkId);
        }
    };
    c = he(ds);
    Ir = {
        onSwitchNetwork ({ network: e, ignoreSwitchConfirmation: t = !1 }) {
            const n = c.state.activeCaipNetwork, s = c.state.activeChain, r = T.state.data;
            if (e.id === n?.id) return;
            const o = !!c.getAccountData(s)?.address, i = !!c.getAccountData(e.chainNamespace)?.address, d = e.chainNamespace !== s, u = m.getConnectorId(s) === h.CONNECTOR_ID.AUTH, p = h.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((b)=>b === e.chainNamespace);
            t || u && p ? T.push("SwitchNetwork", {
                ...r,
                network: e
            }) : o && d && !i ? T.push("SwitchActiveChain", {
                switchToChain: e.chainNamespace,
                navigateTo: "Connect",
                navigateWithReplace: !0,
                network: e
            }) : T.push("SwitchNetwork", {
                ...r,
                network: e
            });
        }
    };
    re = V({
        loading: !1,
        loadingNamespaceMap: new Map,
        open: !1,
        shake: !1,
        namespace: void 0
    });
    yr = {
        state: re,
        subscribe (e) {
            return X(re, ()=>e(re));
        },
        subscribeKey (e, t) {
            return Q(re, e, t);
        },
        async open (e) {
            const t = e?.namespace, n = c.state.activeChain, s = t && t !== n, r = c.getAccountData(e?.namespace)?.caipAddress, a = c.state.noAdapters;
            if (g.state.wcBasic ? N.prefetch({
                fetchNetworkImages: !1,
                fetchConnectorImages: !1,
                fetchWalletRanks: !1
            }) : await N.prefetch(), m.setFilterByNamespace(e?.namespace), M.setLoading(!0, t), t && s) {
                const o = c.getNetworkData(t)?.caipNetwork || c.getRequestedCaipNetworks(t)[0];
                o && (a ? (await c.switchActiveNetwork(o), T.push("ConnectingWalletConnectBasic")) : Ir.onSwitchNetwork({
                    network: o,
                    ignoreSwitchConfirmation: !0
                }));
            } else f.state.manualWCControl || a && !r ? E.isMobile() ? T.reset("AllWallets") : T.reset("ConnectingWalletConnectBasic") : e?.view ? T.reset(e.view, e.data) : r ? T.reset("Account") : T.reset("Connect");
            re.open = !0, we.set({
                open: !0
            }), U.sendEvent({
                type: "track",
                event: "MODAL_OPEN",
                properties: {
                    connected: !!r
                }
            });
        },
        close () {
            const e = f.state.enableEmbedded, t = !!c.state.activeCaipAddress;
            re.open && U.sendEvent({
                type: "track",
                event: "MODAL_CLOSE",
                properties: {
                    connected: t
                }
            }), re.open = !1, T.reset("Connect"), M.clearLoading(), e ? t ? T.replace("Account") : T.push("Connect") : we.set({
                open: !1
            }), g.resetUri();
        },
        setLoading (e, t) {
            t && re.loadingNamespaceMap.set(t, e), re.loading = e, we.set({
                loading: e
            });
        },
        clearLoading () {
            re.loadingNamespaceMap.clear(), re.loading = !1, we.set({
                loading: !1
            });
        },
        shake () {
            re.shake || (re.shake = !0, setTimeout(()=>{
                re.shake = !1;
            }, 500));
        }
    };
    M = he(yr);
    it = {
        id: "2b92315d-eab7-5bef-84fa-089a131333f5",
        name: "USD Coin",
        symbol: "USDC",
        networks: [
            {
                name: "ethereum-mainnet",
                display_name: "Ethereum",
                chain_id: "1",
                contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
            },
            {
                name: "polygon-mainnet",
                display_name: "Polygon",
                chain_id: "137",
                contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
            }
        ]
    };
    on = {
        id: "USD",
        payment_method_limits: [
            {
                id: "card",
                min: "10.00",
                max: "7500.00"
            },
            {
                id: "ach_bank_account",
                min: "10.00",
                max: "25000.00"
            }
        ]
    };
    Sr = {
        providers: rs,
        selectedProvider: null,
        error: null,
        purchaseCurrency: it,
        paymentCurrency: on,
        purchaseCurrencies: [
            it
        ],
        paymentCurrencies: [],
        quotesLoading: !1
    };
    $ = V(Sr);
    _r = {
        state: $,
        subscribe (e) {
            return X($, ()=>e($));
        },
        subscribeKey (e, t) {
            return Q($, e, t);
        },
        setSelectedProvider (e) {
            if (e && e.name === "meld") {
                const t = c.state.activeChain, n = t === h.CHAIN.SOLANA ? "SOL" : "USDC", s = t ? c.state.chains.get(t)?.accountState?.address ?? "" : "", r = new URL(e.url);
                r.searchParams.append("publicKey", Js), r.searchParams.append("destinationCurrencyCode", n), r.searchParams.append("walletAddress", s), r.searchParams.append("externalCustomerId", f.state.projectId), $.selectedProvider = {
                    ...e,
                    url: r.toString()
                };
            } else $.selectedProvider = e;
        },
        setOnrampProviders (e) {
            if (Array.isArray(e) && e.every((t)=>typeof t == "string")) {
                const t = e, n = rs.filter((s)=>t.includes(s.name));
                $.providers = n;
            } else $.providers = [];
        },
        setPurchaseCurrency (e) {
            $.purchaseCurrency = e;
        },
        setPaymentCurrency (e) {
            $.paymentCurrency = e;
        },
        setPurchaseAmount (e) {
            cn.state.purchaseAmount = e;
        },
        setPaymentAmount (e) {
            cn.state.paymentAmount = e;
        },
        async getAvailableCurrencies () {
            const e = await v.getOnrampOptions();
            $.purchaseCurrencies = e.purchaseCurrencies, $.paymentCurrencies = e.paymentCurrencies, $.paymentCurrency = e.paymentCurrencies[0] || on, $.purchaseCurrency = e.purchaseCurrencies[0] || it, await N.fetchCurrencyImages(e.paymentCurrencies.map((t)=>t.id)), await N.fetchTokenImages(e.purchaseCurrencies.map((t)=>t.symbol));
        },
        async getQuote () {
            $.quotesLoading = !0;
            try {
                const e = await v.getOnrampQuote({
                    purchaseCurrency: $.purchaseCurrency,
                    paymentCurrency: $.paymentCurrency,
                    amount: $.paymentAmount?.toString() || "0",
                    network: $.purchaseCurrency?.symbol
                });
                return $.quotesLoading = !1, $.purchaseAmount = Number(e?.purchaseAmount.amount), e;
            } catch (e) {
                return $.error = e.message, $.quotesLoading = !1, null;
            } finally{
                $.quotesLoading = !1;
            }
        },
        resetState () {
            $.selectedProvider = null, $.error = null, $.purchaseCurrency = it, $.paymentCurrency = on, $.purchaseCurrencies = [
                it
            ], $.paymentCurrencies = [], $.paymentAmount = void 0, $.purchaseAmount = void 0, $.quotesLoading = !1;
        }
    };
    cn = he(_r);
    Dn = 2147483648;
    Tr = {
        convertEVMChainIdToCoinType (e) {
            if (e >= Dn) throw new Error("Invalid chainId");
            return (Dn | e) >>> 0;
        }
    };
    ce = V({
        suggestions: [],
        loading: !1
    });
    kr = {
        state: ce,
        subscribe (e) {
            return X(ce, ()=>e(ce));
        },
        subscribeKey (e, t) {
            return Q(ce, e, t);
        },
        async resolveName (e) {
            try {
                return await v.lookupEnsName(e);
            } catch (t) {
                const n = t;
                throw new Error(n?.reasons?.[0]?.description || "Error resolving name");
            }
        },
        async isNameRegistered (e) {
            try {
                return await v.lookupEnsName(e), !0;
            } catch  {
                return !1;
            }
        },
        async getSuggestions (e) {
            try {
                ce.loading = !0, ce.suggestions = [];
                const t = await v.getEnsNameSuggestions(e);
                return ce.suggestions = t.suggestions || [], ce.suggestions;
            } catch (t) {
                const n = ct.parseEnsApiError(t, "Error fetching name suggestions");
                throw new Error(n);
            } finally{
                ce.loading = !1;
            }
        },
        async getNamesForAddress (e) {
            try {
                if (!c.state.activeCaipNetwork) return [];
                const n = C.getEnsFromCacheForAddress(e);
                if (n) return n;
                const s = await v.reverseLookupEnsName({
                    address: e
                });
                return C.updateEnsCache({
                    address: e,
                    ens: s,
                    timestamp: Date.now()
                }), s;
            } catch (t) {
                const n = ct.parseEnsApiError(t, "Error fetching names for address");
                throw new Error(n);
            }
        },
        async registerName (e) {
            const t = c.state.activeCaipNetwork, n = c.getAccountData(t?.chainNamespace)?.address, s = m.getAuthConnector();
            if (!t) throw new Error("Network not found");
            if (!n || !s) throw new Error("Address or auth connector not found");
            ce.loading = !0;
            try {
                const r = JSON.stringify({
                    name: e,
                    attributes: {},
                    timestamp: Math.floor(Date.now() / 1e3)
                });
                T.pushTransactionStack({
                    onCancel () {
                        T.replace("RegisterAccountName");
                    }
                });
                const a = await g.signMessage(r);
                ce.loading = !1;
                const o = t.id;
                if (!o) throw new Error("Network not found");
                const i = Tr.convertEVMChainIdToCoinType(Number(o));
                await v.registerEnsName({
                    coinType: i,
                    address: n,
                    signature: a,
                    message: r
                }), c.setAccountProp("profileName", e, t.chainNamespace), C.updateEnsCache({
                    address: n,
                    ens: [
                        {
                            name: e,
                            registered_at: new Date().toISOString(),
                            updated_at: void 0,
                            addresses: {},
                            attributes: []
                        }
                    ],
                    timestamp: Date.now()
                }), T.replace("RegisterAccountNameSuccess");
            } catch (r) {
                const a = ct.parseEnsApiError(r, `Error registering name ${e}`);
                throw T.replace("RegisterAccountName"), new Error(a);
            } finally{
                ce.loading = !1;
            }
        },
        validateName (e) {
            return /^[a-zA-Z0-9-]{4,}$/u.test(e);
        },
        parseEnsApiError (e, t) {
            return e?.reasons?.[0]?.description || t;
        }
    };
    ct = he(kr);
    function dn(e) {
        try {
            return new URL(e);
        } catch  {
            return null;
        }
    }
    function vr(e) {
        const t = e.split("/"), n = t.length > 0 && t[0] !== void 0 ? t[0] : "", s = n.lastIndexOf(":");
        return s === -1 ? {
            host: n
        } : {
            host: n.slice(0, s),
            port: n.slice(s + 1)
        };
    }
    function Or(e) {
        const t = e.indexOf("://");
        if (t === -1) return null;
        const n = e.slice(0, t), s = t + 3;
        let r = e.indexOf("/", s);
        r === -1 && (r = e.length);
        const a = e.slice(s, r), o = a.lastIndexOf(":");
        return o === -1 ? {
            scheme: n,
            host: a
        } : {
            scheme: n,
            host: a.slice(0, o),
            port: a.slice(o + 1)
        };
    }
    function Rr(e, t) {
        if (t.includes("://")) {
            const o = dn(t);
            return o ? o.origin === e : !1;
        }
        const { host: n, port: s } = vr(t), r = e.indexOf("://");
        if (r !== -1) {
            const o = r + 3;
            let i = e.indexOf("/", o);
            i === -1 && (i = e.length);
            const d = e.slice(o, i);
            if (s !== void 0) return `${n}:${s}` === d;
            const l = d.split(":")[0];
            return n === l;
        }
        const a = dn(e);
        return a ? s !== void 0 ? n === a.hostname && s === (a.port || void 0) : n === a.hostname : !1;
    }
    function Pr(e, t, n) {
        let s = n, r;
        const a = s.indexOf("://");
        a !== -1 && (r = s.slice(0, a), s = s.slice(a + 3));
        const o = s.indexOf("/");
        o !== -1 && (s = s.slice(0, o));
        let i = s, d;
        const l = i.lastIndexOf(":");
        l !== -1 && (d = i.slice(l + 1), i = i.slice(0, l));
        const u = i.split(".");
        for (const S of u)if (S.includes("*") && S !== "*") return !1;
        const p = e.protocol.replace(/:$/u, "");
        if (r && r !== p || d !== void 0 && d !== "*" && d !== e.port) return !1;
        const b = Or(t), A = (b ? b.host : e.hostname).split(".");
        if (u.length !== A.length) return !1;
        for(let S = u.length - 1; S >= 0; S -= 1){
            const k = u[S], x = A[S];
            if (k !== "*" && k !== x) return !1;
        }
        return !0;
    }
    const Ur = {
        ton: [
            "ton_sendMessage",
            "ton_signData"
        ],
        solana: [
            "solana_signMessage",
            "solana_signTransaction",
            "solana_requestAccounts",
            "solana_getAccounts",
            "solana_signAllTransactions",
            "solana_signAndSendTransaction"
        ],
        eip155: [
            "eth_accounts",
            "eth_requestAccounts",
            "eth_sendRawTransaction",
            "eth_sign",
            "eth_signTransaction",
            "eth_signTypedData",
            "eth_signTypedData_v3",
            "eth_signTypedData_v4",
            "eth_sendTransaction",
            "personal_sign",
            "wallet_switchEthereumChain",
            "wallet_addEthereumChain",
            "wallet_getPermissions",
            "wallet_requestPermissions",
            "wallet_registerOnboarding",
            "wallet_watchAsset",
            "wallet_scanQRCode",
            "wallet_getCallsStatus",
            "wallet_showCallsStatus",
            "wallet_sendCalls",
            "wallet_getCapabilities",
            "wallet_grantPermissions",
            "wallet_revokePermissions",
            "wallet_getAssets"
        ],
        bip122: [
            "sendTransfer",
            "signMessage",
            "signPsbt",
            "getAccountAddresses"
        ]
    }, De = {
        RPC_ERROR_CODE: {
            USER_REJECTED: 5e3,
            USER_REJECTED_METHODS: 5002
        },
        getMethodsByChainNamespace (e) {
            return Ur[e] || [];
        },
        createDefaultNamespace (e) {
            return {
                methods: this.getMethodsByChainNamespace(e),
                events: [
                    "accountsChanged",
                    "chainChanged"
                ],
                chains: [],
                rpcMap: {}
            };
        },
        applyNamespaceOverrides (e, t) {
            if (!t) return {
                ...e
            };
            const n = {
                ...e
            }, s = new Set;
            if (t.methods && Object.keys(t.methods).forEach((r)=>s.add(r)), t.chains && Object.keys(t.chains).forEach((r)=>s.add(r)), t.events && Object.keys(t.events).forEach((r)=>s.add(r)), t.rpcMap && Object.keys(t.rpcMap).forEach((r)=>{
                const [a] = r.split(":");
                a && s.add(a);
            }), s.forEach((r)=>{
                n[r] || (n[r] = this.createDefaultNamespace(r));
            }), t.methods && Object.entries(t.methods).forEach(([r, a])=>{
                n[r] && (n[r].methods = a);
            }), t.chains && Object.entries(t.chains).forEach(([r, a])=>{
                n[r] && (n[r].chains = a);
            }), t.events && Object.entries(t.events).forEach(([r, a])=>{
                n[r] && (n[r].events = a);
            }), t.rpcMap) {
                const r = new Set;
                Object.entries(t.rpcMap).forEach(([a, o])=>{
                    const [i, d] = a.split(":");
                    !i || !d || !n[i] || (n[i].rpcMap || (n[i].rpcMap = {}), r.has(i) || (n[i].rpcMap = {}, r.add(i)), n[i].rpcMap[d] = o);
                });
            }
            return n;
        },
        createNamespaces (e, t) {
            const n = e.reduce((s, r)=>{
                const { id: a, chainNamespace: o, rpcUrls: i } = r, d = i.default.http[0];
                s[o] || (s[o] = this.createDefaultNamespace(o));
                const l = `${o}:${a}`, u = s[o];
                switch(u.chains.push(l), l){
                    case "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":
                        u.chains.push("solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ");
                        break;
                    case "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1":
                        u.chains.push("solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K");
                        break;
                }
                return u?.rpcMap && d && (u.rpcMap[a] = d), s;
            }, {});
            return this.applyNamespaceOverrides(n, t);
        },
        resolveReownName: async (e)=>{
            const t = await ct.resolveName(e);
            return (t?.addresses ? Object.values(t.addresses) : [])[0]?.address || !1;
        },
        getChainsFromNamespaces (e = {}) {
            return Object.values(e).flatMap((t)=>{
                const n = t.chains || [], s = t.accounts.map((r)=>{
                    const [a, o] = r.split(":");
                    return `${a}:${o}`;
                });
                return Array.from(new Set([
                    ...n,
                    ...s
                ]));
            });
        },
        isSessionEventData (e) {
            return typeof e == "object" && e !== null && "id" in e && "topic" in e && "params" in e && typeof e.params == "object" && e.params !== null && "chainId" in e.params && "event" in e.params && typeof e.params.event == "object" && e.params.event !== null;
        },
        isUserRejectedRequestError (e) {
            try {
                if (typeof e == "object" && e !== null) {
                    const t = e, n = typeof t.code == "number", s = n && t.code === De.RPC_ERROR_CODE.USER_REJECTED_METHODS, r = n && t.code === De.RPC_ERROR_CODE.USER_REJECTED;
                    return s || r;
                }
                return !1;
            } catch  {
                return !1;
            }
        },
        isOriginAllowed (e, t, n) {
            const s = [
                ...t,
                ...n
            ];
            if (t.length === 0) return !0;
            const r = dn(e);
            if (!r) return s.some((a)=>!a.includes("*") && a === e);
            if (r.hostname === "localhost" || r.hostname === "127.0.0.1") return !0;
            for (const a of s)if (a.includes("*")) {
                if (Pr(r, e, a)) return !0;
            } else if (Rr(e, a)) return !0;
            return !1;
        },
        listenWcProvider ({ universalProvider: e, namespace: t, onConnect: n, onDisconnect: s, onAccountsChanged: r, onChainChanged: a, onDisplayUri: o }) {
            n && e.on("connect", ()=>{
                const i = De.getWalletConnectAccounts(e, t);
                n(i);
            }), s && e.on("disconnect", ()=>{
                s();
            }), r && e.on("accountsChanged", (i)=>{
                try {
                    const d = e.session?.namespaces?.[t]?.accounts || [], l = e.rpcProviders?.[t]?.getDefaultChain(), u = i.map((p)=>{
                        const b = d.find((S)=>S.includes(`${t}:${l}:${p}`));
                        if (!b) return;
                        const { chainId: O, chainNamespace: A } = J.parseCaipAddress(b);
                        return {
                            address: p,
                            chainId: O,
                            chainNamespace: A
                        };
                    }).filter((p)=>p !== void 0);
                    u.length > 0 && r(u);
                } catch (d) {
                    console.warn("Failed to parse accounts for namespace on accountsChanged event", t, i, d);
                }
            }), a && e.on("chainChanged", (i)=>{
                a(i);
            }), o && e.on("display_uri", (i)=>{
                o(i);
            });
        },
        getWalletConnectAccounts (e, t) {
            const n = new Set, s = e?.session?.namespaces?.[t]?.accounts?.map((r)=>J.parseCaipAddress(r)).filter(({ address: r })=>n.has(r.toLowerCase()) ? !1 : (n.add(r.toLowerCase()), !0));
            return s && s.length > 0 ? s : [];
        }
    }, Dr = [
        h.CONNECTOR_ID.AUTH,
        h.CONNECTOR_ID.WALLET_CONNECT
    ];
    class xr {
        constructor(t){
            this.availableConnectors = [], this.availableConnections = [], this.providerHandlers = {}, this.eventListeners = new Map, this.getCaipNetworks = (n)=>c.getCaipNetworks(n), this.getConnectorId = (n)=>m.getConnectorId(n), t && this.construct(t);
        }
        construct(t) {
            this.projectId = t.projectId, this.namespace = t.namespace, this.adapterType = t.adapterType;
        }
        get connectors() {
            return this.availableConnectors;
        }
        get connections() {
            return this.availableConnections;
        }
        get networks() {
            return this.getCaipNetworks(this.namespace);
        }
        onAuthConnected({ accounts: t, chainId: n }) {
            const s = this.getCaipNetworks().filter((r)=>r.chainNamespace === this.namespace).find((r)=>r.id.toString() === n?.toString());
            t && s && this.addConnection({
                connectorId: h.CONNECTOR_ID.AUTH,
                accounts: t,
                caipNetwork: s
            });
        }
        setAuthProvider(t) {
            t.onConnect(this.onAuthConnected.bind(this)), t.onSocialConnected(this.onAuthConnected.bind(this)), this.addConnector({
                id: h.CONNECTOR_ID.AUTH,
                type: "AUTH",
                name: h.CONNECTOR_NAMES.AUTH,
                provider: t,
                imageId: void 0,
                chain: this.namespace,
                chains: []
            });
        }
        addConnector(...t) {
            const n = new Set;
            this.availableConnectors = [
                ...t,
                ...this.availableConnectors
            ].filter((s)=>n.has(s.id) ? !1 : (n.add(s.id), !0)), this.emit("connectors", this.availableConnectors);
        }
        addConnection(...t) {
            const n = new Set;
            this.availableConnections = [
                ...t,
                ...this.availableConnections
            ].filter((s)=>n.has(s.connectorId.toLowerCase()) ? !1 : (n.add(s.connectorId.toLowerCase()), !0)), this.emit("connections", this.availableConnections);
        }
        deleteConnection(t) {
            this.availableConnections = this.availableConnections.filter((n)=>n.connectorId.toLowerCase() !== t.toLowerCase()), this.emit("connections", this.availableConnections);
        }
        clearConnections(t = !1) {
            this.availableConnections = [], t && this.emit("connections", this.availableConnections);
        }
        setStatus(t, n) {
            c.setAccountProp("status", t, n);
        }
        on(t, n) {
            this.eventListeners.has(t) || this.eventListeners.set(t, new Set), this.eventListeners.get(t)?.add(n);
        }
        off(t, n) {
            const s = this.eventListeners.get(t);
            s && s.delete(n);
        }
        removeAllEventListeners() {
            this.eventListeners.forEach((t)=>{
                t.clear();
            });
        }
        emit(t, n) {
            const s = this.eventListeners.get(t);
            s && s.forEach((r)=>r(n));
        }
        async connectWalletConnect(t) {
            try {
                return {
                    clientId: (await this.getWalletConnectConnector().connectWalletConnect()).clientId
                };
            } catch (n) {
                throw De.isUserRejectedRequestError(n) ? new ns(n) : n;
            }
        }
        async switchNetwork(t) {
            const { caipNetwork: n } = t, s = K.getProviderId(n.chainNamespace), r = K.getProvider(n.chainNamespace);
            if (!r) throw new Error("Provider not found");
            if (s === "WALLET_CONNECT") {
                r.setDefaultChain(n.caipNetworkId);
                return;
            }
            if (s === "AUTH") {
                const a = m.getAuthConnector()?.provider;
                if (!a) throw new Error("Auth provider not found");
                const o = pe(n.chainNamespace);
                await a.switchNetwork({
                    chainId: n.caipNetworkId
                });
                const i = await a.getUser({
                    chainId: n.caipNetworkId,
                    preferredAccountType: o
                });
                this.emit("switchNetwork", i);
            }
        }
        getWalletConnectConnector() {
            const t = this.connectors.find((n)=>n.id === "walletConnect");
            if (!t) throw new Error("WalletConnectConnector not found");
            return t;
        }
        onConnect(t, n) {
            if (t.length > 0) {
                const { address: s, chainId: r } = E.getAccount(t[0]), a = this.getCaipNetworks().filter((i)=>i.chainNamespace === this.namespace).find((i)=>i.id.toString() === r?.toString()), o = this.connectors.find((i)=>i.id === n);
                s && (this.emit("accountChanged", {
                    address: s,
                    chainId: r,
                    connector: o
                }), this.addConnection({
                    connectorId: n,
                    accounts: t.map((i)=>{
                        const { address: d } = E.getAccount(i);
                        return {
                            address: d
                        };
                    }),
                    caipNetwork: a
                }));
            }
        }
        onAccountsChanged(t, n, s = !0) {
            if (t.length > 0) {
                const { address: r } = E.getAccount(t[0]), a = this.getConnection({
                    connectorId: n,
                    connections: this.connections,
                    connectors: this.connectors
                });
                r && this.getConnectorId(h.CHAIN.EVM)?.toLowerCase() === n.toLowerCase() && this.emit("accountChanged", {
                    address: r,
                    chainId: a?.caipNetwork?.id,
                    connector: a?.connector
                }), this.addConnection({
                    connectorId: n,
                    accounts: t.map((o)=>{
                        const { address: i } = E.getAccount(o);
                        return {
                            address: i
                        };
                    }),
                    caipNetwork: a?.caipNetwork
                });
            } else s && this.onDisconnect(n);
        }
        onDisconnect(t) {
            this.removeProviderListeners(t), this.deleteConnection(t), this.getConnectorId(h.CHAIN.EVM)?.toLowerCase() === t.toLowerCase() && this.emitFirstAvailableConnection(), this.connections.length === 0 && this.emit("disconnect");
        }
        onChainChanged(t, n) {
            const s = typeof t == "string" && t.startsWith("0x") ? parseInt(t, 16).toString() : t.toString(), r = this.getConnection({
                connectorId: n,
                connections: this.connections,
                connectors: this.connectors
            }), a = this.getCaipNetworks().filter((o)=>o.chainNamespace === this.namespace).find((o)=>o.id.toString() === s);
            r && this.addConnection({
                connectorId: n,
                accounts: r.accounts,
                caipNetwork: a
            }), this.getConnectorId(h.CHAIN.EVM)?.toLowerCase() === n.toLowerCase() && this.emit("switchNetwork", {
                chainId: s
            });
        }
        listenProviderEvents(t, n) {
            if (Dr.includes(t)) return;
            const s = (o)=>this.onAccountsChanged(o, t), r = (o)=>this.onChainChanged(o, t), a = ()=>this.onDisconnect(t);
            this.providerHandlers[t] || (n.on("disconnect", a), n.on("accountsChanged", s), n.on("chainChanged", r), this.providerHandlers[t] = {
                provider: n,
                disconnect: a,
                accountsChanged: s,
                chainChanged: r
            });
        }
        removeProviderListeners(t) {
            if (this.providerHandlers[t]) {
                const { provider: n, disconnect: s, accountsChanged: r, chainChanged: a } = this.providerHandlers[t];
                n.removeListener("disconnect", s), n.removeListener("accountsChanged", r), n.removeListener("chainChanged", a), this.providerHandlers[t] = null;
            }
        }
        emitFirstAvailableConnection() {
            const t = this.getConnection({
                connections: this.connections,
                connectors: this.connectors
            });
            if (t) {
                const [n] = t.accounts;
                this.emit("accountChanged", {
                    address: n?.address,
                    chainId: t.caipNetwork?.id,
                    connector: t.connector
                });
            }
        }
        getConnection({ address: t, connectorId: n, connections: s, connectors: r }) {
            if (n) {
                const o = s.find((l)=>l.connectorId.toLowerCase() === n.toLowerCase());
                if (!o) return null;
                const i = r.find((l)=>l.id.toLowerCase() === o.connectorId.toLowerCase()), d = t ? o.accounts.find((l)=>l.address.toLowerCase() === t.toLowerCase()) : o.accounts[0];
                return {
                    ...o,
                    account: d,
                    connector: i
                };
            }
            const a = s.find((o)=>o.accounts.length > 0 && r.some((i)=>i.id.toLowerCase() === o.connectorId.toLowerCase()));
            if (a) {
                const [o] = a.accounts, i = r.find((d)=>d.id.toLowerCase() === a.connectorId.toLowerCase());
                return {
                    ...a,
                    account: o,
                    connector: i
                };
            }
            return null;
        }
    }
    let Me = null;
    me = {
        getSIWX () {
            return f.state.siwx;
        },
        async initializeIfEnabled (e = c.getActiveCaipAddress()) {
            const t = f.state.siwx;
            if (!(t && e)) return;
            const [n, s, r] = e.split(":");
            if (c.checkIfSupportedNetwork(n, `${n}:${s}`)) try {
                if (f.state.remoteFeatures?.emailCapture) {
                    const o = c.getAccountData(n)?.user;
                    await M.open({
                        view: "DataCapture",
                        data: {
                            email: o?.email ?? void 0
                        }
                    });
                    return;
                }
                if (Me && await Me, (await t.getSessions(`${n}:${s}`, r)).length) return;
                await M.open({
                    view: "SIWXSignMessage"
                });
            } catch (a) {
                console.error("SIWXUtil:initializeIfEnabled", a), U.sendEvent({
                    type: "track",
                    event: "SIWX_AUTH_ERROR",
                    properties: this.getSIWXEventProperties(a)
                }), await g._getClient()?.disconnect().catch(console.error), T.reset("Connect"), Ae.showError("A problem occurred while trying initialize authentication");
            }
        },
        async isAuthenticated (e = c.getActiveCaipAddress()) {
            if (!f.state.siwx || !e) return !0;
            const { chainNamespace: n, chainId: s, address: r } = J.parseCaipAddress(e), a = `${n}:${s}`;
            return (await me.getSessions({
                address: r,
                caipNetworkId: a
            })).length > 0;
        },
        async requestSignMessage () {
            const e = f.state.siwx, t = E.getPlainAddress(c.getActiveCaipAddress()), n = It();
            if (!e) throw new Error("SIWX is not enabled");
            if (!t) throw new Error("No ActiveCaipAddress found");
            if (!n) throw new Error("No ActiveCaipNetwork or client found");
            try {
                const s = await e.createMessage({
                    chainId: n.caipNetworkId,
                    accountAddress: t
                }), r = s.toString();
                let a = "";
                e.signMessage ? a = await e.signMessage({
                    message: r,
                    chainId: n.caipNetworkId,
                    accountAddress: t
                }) : (m.getConnectorId(n.chainNamespace) === h.CONNECTOR_ID.AUTH && T.pushTransactionStack({}), a = await g.signMessage(r) || ""), await e.addSession({
                    data: s,
                    message: r,
                    signature: a
                }), c.setLastConnectedSIWECaipNetwork(n), M.close(), U.sendEvent({
                    type: "track",
                    event: "SIWX_AUTH_SUCCESS",
                    properties: this.getSIWXEventProperties()
                });
            } catch (s) {
                (!M.state.open || T.state.view === "ApproveTransaction") && await M.open({
                    view: "SIWXSignMessage"
                }), Ae.showError("Error signing message"), U.sendEvent({
                    type: "track",
                    event: "SIWX_AUTH_ERROR",
                    properties: this.getSIWXEventProperties(s)
                }), console.error("SWIXUtil:requestSignMessage", s);
            }
        },
        async cancelSignMessage () {
            try {
                const e = this.getSIWX();
                if (e?.getRequired?.()) {
                    const n = c.getLastConnectedSIWECaipNetwork();
                    if (n) {
                        const s = await e?.getSessions(n?.caipNetworkId, E.getPlainAddress(c.getActiveCaipAddress()) || "");
                        s && s.length > 0 ? await c.switchActiveNetwork(n) : await g.disconnect();
                    } else await g.disconnect();
                } else M.close();
                M.close(), U.sendEvent({
                    event: "CLICK_CANCEL_SIWX",
                    type: "track",
                    properties: this.getSIWXEventProperties()
                });
            } catch (e) {
                console.error("SIWXUtil:cancelSignMessage", e);
            }
        },
        async getAllSessions () {
            const e = this.getSIWX(), t = c.getAllRequestedCaipNetworks(), n = [];
            return await Promise.all(t.map(async (s)=>{
                const r = await e?.getSessions(s.caipNetworkId, E.getPlainAddress(c.getActiveCaipAddress()) || "");
                r && n.push(...r);
            })), n;
        },
        async getSessions (e) {
            const t = f.state.siwx;
            let n = e?.address;
            if (!n) {
                const r = c.getActiveCaipAddress();
                n = E.getPlainAddress(r);
            }
            let s = e?.caipNetworkId;
            return s || (s = c.getActiveCaipNetwork()?.caipNetworkId), t && n && s ? t.getSessions(s, n) : [];
        },
        async isSIWXCloseDisabled () {
            const e = this.getSIWX();
            if (e) {
                const t = T.state.view === "ApproveTransaction", n = T.state.view === "SIWXSignMessage";
                if (t || n) return e.getRequired?.() && (await this.getSessions()).length === 0;
            }
            return !1;
        },
        async authConnectorAuthenticate ({ authConnector: e, chainId: t, socialUri: n, preferredAccountType: s, chainNamespace: r }) {
            const a = me.getSIWX(), o = It();
            if (!a || !r.includes(h.CHAIN.EVM) || f.state.remoteFeatures?.emailCapture) {
                const p = await e.connect({
                    chainId: t,
                    socialUri: n,
                    preferredAccountType: s
                });
                return {
                    address: p.address,
                    chainId: p.chainId,
                    accounts: p.accounts
                };
            }
            const i = `${r}:${t}`, d = await a.createMessage({
                chainId: i,
                accountAddress: "<<AccountAddress>>"
            }), l = {
                accountAddress: d.accountAddress,
                chainId: d.chainId,
                domain: d.domain,
                uri: d.uri,
                version: d.version,
                nonce: d.nonce,
                notBefore: d.notBefore,
                statement: d.statement,
                resources: d.resources,
                requestId: d.requestId,
                issuedAt: d.issuedAt,
                expirationTime: d.expirationTime,
                serializedMessage: d.toString()
            }, u = await e.connect({
                chainId: t,
                socialUri: n,
                siwxMessage: l,
                preferredAccountType: s
            });
            return l.accountAddress = u.address, l.serializedMessage = u.message || "", u.signature && u.message && await me.addEmbeddedWalletSession(l, u.message, u.signature), c.setLastConnectedSIWECaipNetwork(o), {
                address: u.address,
                chainId: u.chainId,
                accounts: u.accounts
            };
        },
        async addEmbeddedWalletSession (e, t, n) {
            if (Me) return Me;
            const s = me.getSIWX();
            return s ? (Me = s.addSession({
                data: e,
                message: t,
                signature: n
            }).finally(()=>{
                Me = null;
            }), Me) : Promise.resolve();
        },
        async universalProviderAuthenticate ({ universalProvider: e, chains: t, methods: n }) {
            const s = me.getSIWX(), r = It(), a = new Set(t.map((l)=>l.split(":")[0]));
            if (!s || a.size !== 1 || !a.has("eip155")) return !1;
            const o = await s.createMessage({
                chainId: It()?.caipNetworkId || "",
                accountAddress: ""
            }), i = await e.authenticate({
                nonce: o.nonce,
                domain: o.domain,
                uri: o.uri,
                exp: o.expirationTime,
                iat: o.issuedAt,
                nbf: o.notBefore,
                requestId: o.requestId,
                version: o.version,
                resources: o.resources,
                statement: o.statement,
                chainId: o.chainId,
                methods: n,
                chains: [
                    o.chainId,
                    ...t.filter((l)=>l !== o.chainId)
                ]
            });
            Ae.showLoading("Authenticating...", {
                autoClose: !1
            });
            const d = {
                ...i.session.peer.metadata,
                name: i.session.peer.metadata.name,
                icon: i.session.peer.metadata.icons?.[0],
                type: "WALLET_CONNECT"
            };
            if (c.setAccountProp("connectedWalletInfo", d, Array.from(a)[0]), i?.auths?.length) {
                const l = i.auths.map((u)=>{
                    const p = e.client.formatAuthMessage({
                        request: u.p,
                        iss: u.p.iss
                    });
                    return {
                        data: {
                            ...u.p,
                            accountAddress: u.p.iss.split(":").slice(-1).join(""),
                            chainId: u.p.iss.split(":").slice(2, 4).join(":"),
                            uri: u.p.aud ?? "",
                            version: u.p.version || o.version,
                            expirationTime: u.p.exp,
                            issuedAt: u.p.iat,
                            notBefore: u.p.nbf
                        },
                        message: p,
                        signature: u.s.s,
                        cacao: u
                    };
                });
                try {
                    await s.setSessions(l), r && c.setLastConnectedSIWECaipNetwork(r), U.sendEvent({
                        type: "track",
                        event: "SIWX_AUTH_SUCCESS",
                        properties: me.getSIWXEventProperties()
                    });
                } catch (u) {
                    throw console.error("SIWX:universalProviderAuth - failed to set sessions", u), U.sendEvent({
                        type: "track",
                        event: "SIWX_AUTH_ERROR",
                        properties: me.getSIWXEventProperties(u)
                    }), await e.disconnect().catch(console.error), u;
                } finally{
                    Ae.hide();
                }
            }
            return !0;
        },
        getSIWXEventProperties (e) {
            const t = c.state.activeChain;
            if (!t) throw new Error("SIWXUtil:getSIWXEventProperties - namespace is required");
            return {
                network: c.state.activeCaipNetwork?.caipNetworkId || "",
                isSmartAccount: pe(t) === ve.ACCOUNT_TYPES.SMART_ACCOUNT,
                message: e ? E.parseError(e) : void 0
            };
        },
        async clearSessions () {
            const e = this.getSIWX();
            e && await e.setSessions([]);
        }
    };
    class Lr {
        constructor({ provider: t, namespace: n }){
            this.id = h.CONNECTOR_ID.WALLET_CONNECT, this.name = "WalletConnect", this.type = "WALLET_CONNECT", this.imageId = "ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400", this.getCaipNetworks = c.getCaipNetworks.bind(c), this.caipNetworks = this.getCaipNetworks(), this.provider = t, this.chain = n;
        }
        get chains() {
            return this.getCaipNetworks();
        }
        async connectWalletConnect() {
            if (!await this.authenticate()) {
                const n = this.getCaipNetworks(), s = f.state.universalProviderConfigOverride, r = De.createNamespaces(n, s);
                await this.provider.connect({
                    optionalNamespaces: r
                });
            }
            return {
                clientId: await this.provider.client.core.crypto.getClientId(),
                session: this.provider.session
            };
        }
        async disconnect() {
            await this.provider.disconnect();
        }
        async authenticate() {
            const t = this.chains.map((n)=>n.caipNetworkId);
            return me.universalProviderAuthenticate({
                universalProvider: this.provider,
                chains: t,
                methods: Mr
            });
        }
    }
    let Mr, fe, Wr, Br, Fr;
    Mr = [
        "eth_accounts",
        "eth_requestAccounts",
        "eth_sendRawTransaction",
        "eth_sign",
        "eth_signTransaction",
        "eth_signTypedData",
        "eth_signTypedData_v3",
        "eth_signTypedData_v4",
        "eth_sendTransaction",
        "personal_sign",
        "wallet_switchEthereumChain",
        "wallet_addEthereumChain",
        "wallet_getPermissions",
        "wallet_requestPermissions",
        "wallet_registerOnboarding",
        "wallet_watchAsset",
        "wallet_scanQRCode",
        "wallet_getCallsStatus",
        "wallet_sendCalls",
        "wallet_getCapabilities",
        "wallet_grantPermissions",
        "wallet_revokePermissions",
        "wallet_getAssets"
    ];
    fe = V({
        message: "",
        variant: "info",
        open: !1
    });
    Wr = {
        state: fe,
        subscribeKey (e, t) {
            return Q(fe, e, t);
        },
        open (e, t) {
            const { debug: n } = f.state, { code: s, displayMessage: r, debugMessage: a } = e;
            r && n && (fe.message = r, fe.variant = t, fe.open = !0);
        },
        warn (e, t, n) {
            fe.open = !0, fe.message = e, fe.variant = "warning", t && console.warn(t, n);
        },
        close () {
            fe.open = !1, fe.message = "", fe.variant = "info";
        }
    };
    oe = he(Wr);
    Br = {
        asset: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913"
    };
    Fr = {
        asset: "0x036CbD53842c5426634e7929541eC2318f3dCF7e"
    };
    const Rt = globalThis, mn = Rt.ShadowRoot && (Rt.ShadyCSS === void 0 || Rt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, gn = Symbol(), xn = new WeakMap;
    let ls = class {
        constructor(t, n, s){
            if (this._$cssResult$ = !0, s !== gn) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = t, this.t = n;
        }
        get styleSheet() {
            let t = this.o;
            const n = this.t;
            if (mn && t === void 0) {
                const s = n !== void 0 && n.length === 1;
                s && (t = xn.get(n)), t === void 0 && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), s && xn.set(n, t));
            }
            return t;
        }
        toString() {
            return this.cssText;
        }
    };
    let Ce, $r, Ln;
    Ce = (e)=>new ls(typeof e == "string" ? e : e + "", void 0, gn);
    Re = (e, ...t)=>{
        const n = e.length === 1 ? e[0] : t.reduce((s, r, a)=>s + ((o)=>{
                if (o._$cssResult$ === !0) return o.cssText;
                if (typeof o == "number") return o;
                throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
            })(r) + e[a + 1], e[0]);
        return new ls(n, e, gn);
    };
    $r = (e, t)=>{
        if (mn) e.adoptedStyleSheets = t.map((n)=>n instanceof CSSStyleSheet ? n : n.styleSheet);
        else for (const n of t){
            const s = document.createElement("style"), r = Rt.litNonce;
            r !== void 0 && s.setAttribute("nonce", r), s.textContent = n.cssText, e.appendChild(s);
        }
    };
    Ln = mn ? (e)=>e : (e)=>e instanceof CSSStyleSheet ? ((t)=>{
            let n = "";
            for (const s of t.cssRules)n += s.cssText;
            return Ce(n);
        })(e) : e;
    let Hr, jr, Kr, Vr, qr, zr, Kt, Mn, Gr, Yr, dt, Wn;
    ({ is: Hr, defineProperty: jr, getOwnPropertyDescriptor: Kr, getOwnPropertyNames: Vr, getOwnPropertySymbols: qr, getPrototypeOf: zr } = Object);
    Kt = globalThis;
    Mn = Kt.trustedTypes;
    Gr = Mn ? Mn.emptyScript : "";
    Yr = Kt.reactiveElementPolyfillSupport;
    dt = (e, t)=>e;
    ln = {
        toAttribute (e, t) {
            switch(t){
                case Boolean:
                    e = e ? Gr : null;
                    break;
                case Object:
                case Array:
                    e = e == null ? e : JSON.stringify(e);
            }
            return e;
        },
        fromAttribute (e, t) {
            let n = e;
            switch(t){
                case Boolean:
                    n = e !== null;
                    break;
                case Number:
                    n = e === null ? null : Number(e);
                    break;
                case Object:
                case Array:
                    try {
                        n = JSON.parse(e);
                    } catch  {
                        n = null;
                    }
            }
            return n;
        }
    };
    us = (e, t)=>!Hr(e, t);
    Wn = {
        attribute: !0,
        type: String,
        converter: ln,
        reflect: !1,
        useDefault: !1,
        hasChanged: us
    };
    Symbol.metadata ??= Symbol("metadata"), Kt.litPropertyMetadata ??= new WeakMap;
    let Qe = class extends HTMLElement {
        static addInitializer(t) {
            this._$Ei(), (this.l ??= []).push(t);
        }
        static get observedAttributes() {
            return this.finalize(), this._$Eh && [
                ...this._$Eh.keys()
            ];
        }
        static createProperty(t, n = Wn) {
            if (n.state && (n.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((n = Object.create(n)).wrapped = !0), this.elementProperties.set(t, n), !n.noAccessor) {
                const s = Symbol(), r = this.getPropertyDescriptor(t, s, n);
                r !== void 0 && jr(this.prototype, t, r);
            }
        }
        static getPropertyDescriptor(t, n, s) {
            const { get: r, set: a } = Kr(this.prototype, t) ?? {
                get () {
                    return this[n];
                },
                set (o) {
                    this[n] = o;
                }
            };
            return {
                get: r,
                set (o) {
                    const i = r?.call(this);
                    a?.call(this, o), this.requestUpdate(t, i, s);
                },
                configurable: !0,
                enumerable: !0
            };
        }
        static getPropertyOptions(t) {
            return this.elementProperties.get(t) ?? Wn;
        }
        static _$Ei() {
            if (this.hasOwnProperty(dt("elementProperties"))) return;
            const t = zr(this);
            t.finalize(), t.l !== void 0 && (this.l = [
                ...t.l
            ]), this.elementProperties = new Map(t.elementProperties);
        }
        static finalize() {
            if (this.hasOwnProperty(dt("finalized"))) return;
            if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(dt("properties"))) {
                const n = this.properties, s = [
                    ...Vr(n),
                    ...qr(n)
                ];
                for (const r of s)this.createProperty(r, n[r]);
            }
            const t = this[Symbol.metadata];
            if (t !== null) {
                const n = litPropertyMetadata.get(t);
                if (n !== void 0) for (const [s, r] of n)this.elementProperties.set(s, r);
            }
            this._$Eh = new Map;
            for (const [n, s] of this.elementProperties){
                const r = this._$Eu(n, s);
                r !== void 0 && this._$Eh.set(r, n);
            }
            this.elementStyles = this.finalizeStyles(this.styles);
        }
        static finalizeStyles(t) {
            const n = [];
            if (Array.isArray(t)) {
                const s = new Set(t.flat(1 / 0).reverse());
                for (const r of s)n.unshift(Ln(r));
            } else t !== void 0 && n.push(Ln(t));
            return n;
        }
        static _$Eu(t, n) {
            const s = n.attribute;
            return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
        }
        constructor(){
            super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
        }
        _$Ev() {
            this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t)=>t(this));
        }
        addController(t) {
            (this._$EO ??= new Set).add(t), this.renderRoot !== void 0 && this.isConnected && t.hostConnected?.();
        }
        removeController(t) {
            this._$EO?.delete(t);
        }
        _$E_() {
            const t = new Map, n = this.constructor.elementProperties;
            for (const s of n.keys())this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
            t.size > 0 && (this._$Ep = t);
        }
        createRenderRoot() {
            const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
            return $r(t, this.constructor.elementStyles), t;
        }
        connectedCallback() {
            this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t)=>t.hostConnected?.());
        }
        enableUpdating(t) {}
        disconnectedCallback() {
            this._$EO?.forEach((t)=>t.hostDisconnected?.());
        }
        attributeChangedCallback(t, n, s) {
            this._$AK(t, s);
        }
        _$ET(t, n) {
            const s = this.constructor.elementProperties.get(t), r = this.constructor._$Eu(t, s);
            if (r !== void 0 && s.reflect === !0) {
                const a = (s.converter?.toAttribute !== void 0 ? s.converter : ln).toAttribute(n, s.type);
                this._$Em = t, a == null ? this.removeAttribute(r) : this.setAttribute(r, a), this._$Em = null;
            }
        }
        _$AK(t, n) {
            const s = this.constructor, r = s._$Eh.get(t);
            if (r !== void 0 && this._$Em !== r) {
                const a = s.getPropertyOptions(r), o = typeof a.converter == "function" ? {
                    fromAttribute: a.converter
                } : a.converter?.fromAttribute !== void 0 ? a.converter : ln;
                this._$Em = r;
                const i = o.fromAttribute(n, a.type);
                this[r] = i ?? this._$Ej?.get(r) ?? i, this._$Em = null;
            }
        }
        requestUpdate(t, n, s, r = !1, a) {
            if (t !== void 0) {
                const o = this.constructor;
                if (r === !1 && (a = this[t]), s ??= o.getPropertyOptions(t), !((s.hasChanged ?? us)(a, n) || s.useDefault && s.reflect && a === this._$Ej?.get(t) && !this.hasAttribute(o._$Eu(t, s)))) return;
                this.C(t, n, s);
            }
            this.isUpdatePending === !1 && (this._$ES = this._$EP());
        }
        C(t, n, { useDefault: s, reflect: r, wrapped: a }, o) {
            s && !(this._$Ej ??= new Map).has(t) && (this._$Ej.set(t, o ?? n ?? this[t]), a !== !0 || o !== void 0) || (this._$AL.has(t) || (this.hasUpdated || s || (n = void 0), this._$AL.set(t, n)), r === !0 && this._$Em !== t && (this._$Eq ??= new Set).add(t));
        }
        async _$EP() {
            this.isUpdatePending = !0;
            try {
                await this._$ES;
            } catch (n) {
                Promise.reject(n);
            }
            const t = this.scheduleUpdate();
            return t != null && await t, !this.isUpdatePending;
        }
        scheduleUpdate() {
            return this.performUpdate();
        }
        performUpdate() {
            if (!this.isUpdatePending) return;
            if (!this.hasUpdated) {
                if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
                    for (const [r, a] of this._$Ep)this[r] = a;
                    this._$Ep = void 0;
                }
                const s = this.constructor.elementProperties;
                if (s.size > 0) for (const [r, a] of s){
                    const { wrapped: o } = a, i = this[r];
                    o !== !0 || this._$AL.has(r) || i === void 0 || this.C(r, void 0, a, i);
                }
            }
            let t = !1;
            const n = this._$AL;
            try {
                t = this.shouldUpdate(n), t ? (this.willUpdate(n), this._$EO?.forEach((s)=>s.hostUpdate?.()), this.update(n)) : this._$EM();
            } catch (s) {
                throw t = !1, this._$EM(), s;
            }
            t && this._$AE(n);
        }
        willUpdate(t) {}
        _$AE(t) {
            this._$EO?.forEach((n)=>n.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
        }
        _$EM() {
            this._$AL = new Map, this.isUpdatePending = !1;
        }
        get updateComplete() {
            return this.getUpdateComplete();
        }
        getUpdateComplete() {
            return this._$ES;
        }
        shouldUpdate(t) {
            return !0;
        }
        update(t) {
            this._$Eq &&= this._$Eq.forEach((n)=>this._$ET(n, this[n])), this._$EM();
        }
        updated(t) {}
        firstUpdated(t) {}
    };
    Qe.elementStyles = [], Qe.shadowRootOptions = {
        mode: "open"
    }, Qe[dt("elementProperties")] = new Map, Qe[dt("finalized")] = new Map, Yr?.({
        ReactiveElement: Qe
    }), (Kt.reactiveElementVersions ??= []).push("2.1.2");
    let wn, Bn, Bt, Fn, ps, Pe, hs, Jr, Ve, ht, ft, En, Xr, Zt, at, $n, Hn, We, jn, Kn, fs, Cs, Vn, $e;
    wn = globalThis;
    Bn = (e)=>e;
    Bt = wn.trustedTypes;
    Fn = Bt ? Bt.createPolicy("lit-html", {
        createHTML: (e)=>e
    }) : void 0;
    ps = "$lit$";
    Pe = `lit$${Math.random().toFixed(9).slice(2)}$`;
    hs = "?" + Pe;
    Jr = `<${hs}>`;
    Ve = document;
    ht = ()=>Ve.createComment("");
    ft = (e)=>e === null || typeof e != "object" && typeof e != "function";
    En = Array.isArray;
    Xr = (e)=>En(e) || typeof e?.[Symbol.iterator] == "function";
    Zt = `[ 	
\f\r]`;
    at = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
    $n = /-->/g;
    Hn = />/g;
    We = RegExp(`>|${Zt}(?:([^\\s"'>=/]+)(${Zt}*=${Zt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
    jn = /'/g;
    Kn = /"/g;
    fs = /^(?:script|style|textarea|title)$/i;
    Cs = (e)=>(t, ...n)=>({
                _$litType$: e,
                strings: t,
                values: n
            });
    Ua = Cs(1);
    Da = Cs(2);
    tt = Symbol.for("lit-noChange");
    Y = Symbol.for("lit-nothing");
    Vn = new WeakMap;
    $e = Ve.createTreeWalker(Ve, 129);
    function ms(e, t) {
        if (!En(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
        return Fn !== void 0 ? Fn.createHTML(t) : t;
    }
    const Qr = (e, t)=>{
        const n = e.length - 1, s = [];
        let r, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = at;
        for(let i = 0; i < n; i++){
            const d = e[i];
            let l, u, p = -1, b = 0;
            for(; b < d.length && (o.lastIndex = b, u = o.exec(d), u !== null);)b = o.lastIndex, o === at ? u[1] === "!--" ? o = $n : u[1] !== void 0 ? o = Hn : u[2] !== void 0 ? (fs.test(u[2]) && (r = RegExp("</" + u[2], "g")), o = We) : u[3] !== void 0 && (o = We) : o === We ? u[0] === ">" ? (o = r ?? at, p = -1) : u[1] === void 0 ? p = -2 : (p = o.lastIndex - u[2].length, l = u[1], o = u[3] === void 0 ? We : u[3] === '"' ? Kn : jn) : o === Kn || o === jn ? o = We : o === $n || o === Hn ? o = at : (o = We, r = void 0);
            const O = o === We && e[i + 1].startsWith("/>") ? " " : "";
            a += o === at ? d + Jr : p >= 0 ? (s.push(l), d.slice(0, p) + ps + d.slice(p) + Pe + O) : d + Pe + (p === -2 ? i : O);
        }
        return [
            ms(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")),
            s
        ];
    };
    class Ct {
        constructor({ strings: t, _$litType$: n }, s){
            let r;
            this.parts = [];
            let a = 0, o = 0;
            const i = t.length - 1, d = this.parts, [l, u] = Qr(t, n);
            if (this.el = Ct.createElement(l, s), $e.currentNode = this.el.content, n === 2 || n === 3) {
                const p = this.el.content.firstChild;
                p.replaceWith(...p.childNodes);
            }
            for(; (r = $e.nextNode()) !== null && d.length < i;){
                if (r.nodeType === 1) {
                    if (r.hasAttributes()) for (const p of r.getAttributeNames())if (p.endsWith(ps)) {
                        const b = u[o++], O = r.getAttribute(p).split(Pe), A = /([.?@])?(.*)/.exec(b);
                        d.push({
                            type: 1,
                            index: a,
                            name: A[2],
                            strings: O,
                            ctor: A[1] === "." ? ea : A[1] === "?" ? ta : A[1] === "@" ? na : Vt
                        }), r.removeAttribute(p);
                    } else p.startsWith(Pe) && (d.push({
                        type: 6,
                        index: a
                    }), r.removeAttribute(p));
                    if (fs.test(r.tagName)) {
                        const p = r.textContent.split(Pe), b = p.length - 1;
                        if (b > 0) {
                            r.textContent = Bt ? Bt.emptyScript : "";
                            for(let O = 0; O < b; O++)r.append(p[O], ht()), $e.nextNode(), d.push({
                                type: 2,
                                index: ++a
                            });
                            r.append(p[b], ht());
                        }
                    }
                } else if (r.nodeType === 8) if (r.data === hs) d.push({
                    type: 2,
                    index: a
                });
                else {
                    let p = -1;
                    for(; (p = r.data.indexOf(Pe, p + 1)) !== -1;)d.push({
                        type: 7,
                        index: a
                    }), p += Pe.length - 1;
                }
                a++;
            }
        }
        static createElement(t, n) {
            const s = Ve.createElement("template");
            return s.innerHTML = t, s;
        }
    }
    function nt(e, t, n = e, s) {
        if (t === tt) return t;
        let r = s !== void 0 ? n._$Co?.[s] : n._$Cl;
        const a = ft(t) ? void 0 : t._$litDirective$;
        return r?.constructor !== a && (r?._$AO?.(!1), a === void 0 ? r = void 0 : (r = new a(e), r._$AT(e, n, s)), s !== void 0 ? (n._$Co ??= [])[s] = r : n._$Cl = r), r !== void 0 && (t = nt(e, r._$AS(e, t.values), r, s)), t;
    }
    class Zr {
        constructor(t, n){
            this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = n;
        }
        get parentNode() {
            return this._$AM.parentNode;
        }
        get _$AU() {
            return this._$AM._$AU;
        }
        u(t) {
            const { el: { content: n }, parts: s } = this._$AD, r = (t?.creationScope ?? Ve).importNode(n, !0);
            $e.currentNode = r;
            let a = $e.nextNode(), o = 0, i = 0, d = s[0];
            for(; d !== void 0;){
                if (o === d.index) {
                    let l;
                    d.type === 2 ? l = new Et(a, a.nextSibling, this, t) : d.type === 1 ? l = new d.ctor(a, d.name, d.strings, this, t) : d.type === 6 && (l = new sa(a, this, t)), this._$AV.push(l), d = s[++i];
                }
                o !== d?.index && (a = $e.nextNode(), o++);
            }
            return $e.currentNode = Ve, r;
        }
        p(t) {
            let n = 0;
            for (const s of this._$AV)s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, n), n += s.strings.length - 2) : s._$AI(t[n])), n++;
        }
    }
    class Et {
        get _$AU() {
            return this._$AM?._$AU ?? this._$Cv;
        }
        constructor(t, n, s, r){
            this.type = 2, this._$AH = Y, this._$AN = void 0, this._$AA = t, this._$AB = n, this._$AM = s, this.options = r, this._$Cv = r?.isConnected ?? !0;
        }
        get parentNode() {
            let t = this._$AA.parentNode;
            const n = this._$AM;
            return n !== void 0 && t?.nodeType === 11 && (t = n.parentNode), t;
        }
        get startNode() {
            return this._$AA;
        }
        get endNode() {
            return this._$AB;
        }
        _$AI(t, n = this) {
            t = nt(this, t, n), ft(t) ? t === Y || t == null || t === "" ? (this._$AH !== Y && this._$AR(), this._$AH = Y) : t !== this._$AH && t !== tt && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Xr(t) ? this.k(t) : this._(t);
        }
        O(t) {
            return this._$AA.parentNode.insertBefore(t, this._$AB);
        }
        T(t) {
            this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
        }
        _(t) {
            this._$AH !== Y && ft(this._$AH) ? this._$AA.nextSibling.data = t : this.T(Ve.createTextNode(t)), this._$AH = t;
        }
        $(t) {
            const { values: n, _$litType$: s } = t, r = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = Ct.createElement(ms(s.h, s.h[0]), this.options)), s);
            if (this._$AH?._$AD === r) this._$AH.p(n);
            else {
                const a = new Zr(r, this), o = a.u(this.options);
                a.p(n), this.T(o), this._$AH = a;
            }
        }
        _$AC(t) {
            let n = Vn.get(t.strings);
            return n === void 0 && Vn.set(t.strings, n = new Ct(t)), n;
        }
        k(t) {
            En(this._$AH) || (this._$AH = [], this._$AR());
            const n = this._$AH;
            let s, r = 0;
            for (const a of t)r === n.length ? n.push(s = new Et(this.O(ht()), this.O(ht()), this, this.options)) : s = n[r], s._$AI(a), r++;
            r < n.length && (this._$AR(s && s._$AB.nextSibling, r), n.length = r);
        }
        _$AR(t = this._$AA.nextSibling, n) {
            for(this._$AP?.(!1, !0, n); t !== this._$AB;){
                const s = Bn(t).nextSibling;
                Bn(t).remove(), t = s;
            }
        }
        setConnected(t) {
            this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
        }
    }
    class Vt {
        get tagName() {
            return this.element.tagName;
        }
        get _$AU() {
            return this._$AM._$AU;
        }
        constructor(t, n, s, r, a){
            this.type = 1, this._$AH = Y, this._$AN = void 0, this.element = t, this.name = n, this._$AM = r, this.options = a, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = Y;
        }
        _$AI(t, n = this, s, r) {
            const a = this.strings;
            let o = !1;
            if (a === void 0) t = nt(this, t, n, 0), o = !ft(t) || t !== this._$AH && t !== tt, o && (this._$AH = t);
            else {
                const i = t;
                let d, l;
                for(t = a[0], d = 0; d < a.length - 1; d++)l = nt(this, i[s + d], n, d), l === tt && (l = this._$AH[d]), o ||= !ft(l) || l !== this._$AH[d], l === Y ? t = Y : t !== Y && (t += (l ?? "") + a[d + 1]), this._$AH[d] = l;
            }
            o && !r && this.j(t);
        }
        j(t) {
            t === Y ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
        }
    }
    class ea extends Vt {
        constructor(){
            super(...arguments), this.type = 3;
        }
        j(t) {
            this.element[this.name] = t === Y ? void 0 : t;
        }
    }
    class ta extends Vt {
        constructor(){
            super(...arguments), this.type = 4;
        }
        j(t) {
            this.element.toggleAttribute(this.name, !!t && t !== Y);
        }
    }
    class na extends Vt {
        constructor(t, n, s, r, a){
            super(t, n, s, r, a), this.type = 5;
        }
        _$AI(t, n = this) {
            if ((t = nt(this, t, n, 0) ?? Y) === tt) return;
            const s = this._$AH, r = t === Y && s !== Y || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, a = t !== Y && (s === Y || r);
            r && this.element.removeEventListener(this.name, this, s), a && this.element.addEventListener(this.name, this, t), this._$AH = t;
        }
        handleEvent(t) {
            typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
        }
    }
    class sa {
        constructor(t, n, s){
            this.element = t, this.type = 6, this._$AN = void 0, this._$AM = n, this.options = s;
        }
        get _$AU() {
            return this._$AM._$AU;
        }
        _$AI(t) {
            nt(this, t);
        }
    }
    const ra = wn.litHtmlPolyfillSupport;
    ra?.(Ct, Et), (wn.litHtmlVersions ??= []).push("3.3.3");
    const aa = (e, t, n)=>{
        const s = n?.renderBefore ?? t;
        let r = s._$litPart$;
        if (r === void 0) {
            const a = n?.renderBefore ?? null;
            s._$litPart$ = r = new Et(t.insertBefore(ht(), a), a, void 0, n ?? {});
        }
        return r._$AI(e), r;
    };
    const Nn = globalThis;
    Pt = class extends Qe {
        constructor(){
            super(...arguments), this.renderOptions = {
                host: this
            }, this._$Do = void 0;
        }
        createRenderRoot() {
            const t = super.createRenderRoot();
            return this.renderOptions.renderBefore ??= t.firstChild, t;
        }
        update(t) {
            const n = this.render();
            this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = aa(n, this.renderRoot, this.renderOptions);
        }
        connectedCallback() {
            super.connectedCallback(), this._$Do?.setConnected(!0);
        }
        disconnectedCallback() {
            super.disconnectedCallback(), this._$Do?.setConnected(!1);
        }
        render() {
            return tt;
        }
    };
    Pt._$litElement$ = !0, Pt.finalized = !0, Nn.litElementHydrateSupport?.({
        LitElement: Pt
    });
    const oa = Nn.litElementPolyfillSupport;
    oa?.({
        LitElement: Pt
    });
    (Nn.litElementVersions ??= []).push("4.2.2");
    const ia = {
        black: "#202020",
        white: "#FFFFFF",
        white010: "rgba(255, 255, 255, 0.1)",
        accent010: "rgba(9, 136, 240, 0.1)",
        accent020: "rgba(9, 136, 240, 0.2)",
        accent030: "rgba(9, 136, 240, 0.3)",
        accent040: "rgba(9, 136, 240, 0.4)",
        accent050: "rgba(9, 136, 240, 0.5)",
        accent060: "rgba(9, 136, 240, 0.6)",
        accent070: "rgba(9, 136, 240, 0.7)",
        accent080: "rgba(9, 136, 240, 0.8)",
        accent090: "rgba(9, 136, 240, 0.9)",
        accent100: "rgba(9, 136, 240, 1.0)",
        accentSecondary010: "rgba(199, 185, 148, 0.1)",
        accentSecondary020: "rgba(199, 185, 148, 0.2)",
        accentSecondary030: "rgba(199, 185, 148, 0.3)",
        accentSecondary040: "rgba(199, 185, 148, 0.4)",
        accentSecondary050: "rgba(199, 185, 148, 0.5)",
        accentSecondary060: "rgba(199, 185, 148, 0.6)",
        accentSecondary070: "rgba(199, 185, 148, 0.7)",
        accentSecondary080: "rgba(199, 185, 148, 0.8)",
        accentSecondary090: "rgba(199, 185, 148, 0.9)",
        accentSecondary100: "rgba(199, 185, 148, 1.0)",
        productWalletKit: "#FFB800",
        productAppKit: "#FF573B",
        productCloud: "#0988F0",
        productDocumentation: "#008847",
        neutrals050: "#F6F6F6",
        neutrals100: "#F3F3F3",
        neutrals200: "#E9E9E9",
        neutrals300: "#D0D0D0",
        neutrals400: "#BBB",
        neutrals500: "#9A9A9A",
        neutrals600: "#6C6C6C",
        neutrals700: "#4F4F4F",
        neutrals800: "#363636",
        neutrals900: "#2A2A2A",
        neutrals1000: "#252525",
        semanticSuccess010: "rgba(48, 164, 107, 0.1)",
        semanticSuccess020: "rgba(48, 164, 107, 0.2)",
        semanticSuccess030: "rgba(48, 164, 107, 0.3)",
        semanticSuccess040: "rgba(48, 164, 107, 0.4)",
        semanticSuccess050: "rgba(48, 164, 107, 0.5)",
        semanticSuccess060: "rgba(48, 164, 107, 0.6)",
        semanticSuccess070: "rgba(48, 164, 107, 0.7)",
        semanticSuccess080: "rgba(48, 164, 107, 0.8)",
        semanticSuccess090: "rgba(48, 164, 107, 0.9)",
        semanticSuccess100: "rgba(48, 164, 107, 1.0)",
        semanticError010: "rgba(223, 74, 52, 0.1)",
        semanticError020: "rgba(223, 74, 52, 0.2)",
        semanticError030: "rgba(223, 74, 52, 0.3)",
        semanticError040: "rgba(223, 74, 52, 0.4)",
        semanticError050: "rgba(223, 74, 52, 0.5)",
        semanticError060: "rgba(223, 74, 52, 0.6)",
        semanticError070: "rgba(223, 74, 52, 0.7)",
        semanticError080: "rgba(223, 74, 52, 0.8)",
        semanticError090: "rgba(223, 74, 52, 0.9)",
        semanticError100: "rgba(223, 74, 52, 1.0)",
        semanticWarning010: "rgba(243, 161, 63, 0.1)",
        semanticWarning020: "rgba(243, 161, 63, 0.2)",
        semanticWarning030: "rgba(243, 161, 63, 0.3)",
        semanticWarning040: "rgba(243, 161, 63, 0.4)",
        semanticWarning050: "rgba(243, 161, 63, 0.5)",
        semanticWarning060: "rgba(243, 161, 63, 0.6)",
        semanticWarning070: "rgba(243, 161, 63, 0.7)",
        semanticWarning080: "rgba(243, 161, 63, 0.8)",
        semanticWarning090: "rgba(243, 161, 63, 0.9)",
        semanticWarning100: "rgba(243, 161, 63, 1.0)"
    }, Ft = {
        core: {
            backgroundAccentPrimary: "#0988F0",
            backgroundAccentCertified: "#C7B994",
            backgroundWalletKit: "#FFB800",
            backgroundAppKit: "#FF573B",
            backgroundCloud: "#0988F0",
            backgroundDocumentation: "#008847",
            backgroundSuccess: "rgba(48, 164, 107, 0.20)",
            backgroundError: "rgba(223, 74, 52, 0.20)",
            backgroundWarning: "rgba(243, 161, 63, 0.20)",
            textAccentPrimary: "#0988F0",
            textAccentCertified: "#C7B994",
            textWalletKit: "#FFB800",
            textAppKit: "#FF573B",
            textCloud: "#0988F0",
            textDocumentation: "#008847",
            textSuccess: "#30A46B",
            textError: "#DF4A34",
            textWarning: "#F3A13F",
            borderAccentPrimary: "#0988F0",
            borderSecondary: "#C7B994",
            borderSuccess: "#30A46B",
            borderError: "#DF4A34",
            borderWarning: "#F3A13F",
            foregroundAccent010: "rgba(9, 136, 240, 0.1)",
            foregroundAccent020: "rgba(9, 136, 240, 0.2)",
            foregroundAccent040: "rgba(9, 136, 240, 0.4)",
            foregroundAccent060: "rgba(9, 136, 240, 0.6)",
            foregroundSecondary020: "rgba(199, 185, 148, 0.2)",
            foregroundSecondary040: "rgba(199, 185, 148, 0.4)",
            foregroundSecondary060: "rgba(199, 185, 148, 0.6)",
            iconAccentPrimary: "#0988F0",
            iconAccentCertified: "#C7B994",
            iconSuccess: "#30A46B",
            iconError: "#DF4A34",
            iconWarning: "#F3A13F",
            glass010: "rgba(255, 255, 255, 0.1)",
            zIndex: "9999"
        },
        dark: {
            overlay: "rgba(0, 0, 0, 0.50)",
            backgroundPrimary: "#202020",
            backgroundInvert: "#FFFFFF",
            textPrimary: "#FFFFFF",
            textSecondary: "#9A9A9A",
            textTertiary: "#BBBBBB",
            textInvert: "#202020",
            borderPrimary: "#2A2A2A",
            borderPrimaryDark: "#363636",
            borderSecondary: "#4F4F4F",
            foregroundPrimary: "#252525",
            foregroundSecondary: "#2A2A2A",
            foregroundTertiary: "#363636",
            iconDefault: "#9A9A9A",
            iconInverse: "#FFFFFF"
        },
        light: {
            overlay: "rgba(230 , 230, 230, 0.5)",
            backgroundPrimary: "#FFFFFF",
            borderPrimaryDark: "#E9E9E9",
            backgroundInvert: "#202020",
            textPrimary: "#202020",
            textSecondary: "#9A9A9A",
            textTertiary: "#6C6C6C",
            textInvert: "#FFFFFF",
            borderPrimary: "#E9E9E9",
            borderSecondary: "#D0D0D0",
            foregroundPrimary: "#F3F3F3",
            foregroundSecondary: "#E9E9E9",
            foregroundTertiary: "#D0D0D0",
            iconDefault: "#9A9A9A",
            iconInverse: "#202020"
        }
    }, ca = {
        1: "4px",
        2: "8px",
        10: "10px",
        3: "12px",
        4: "16px",
        6: "24px",
        5: "20px",
        8: "32px",
        16: "64px",
        20: "80px",
        32: "128px",
        64: "256px",
        128: "512px",
        round: "9999px"
    }, da = {
        0: "0px",
        "01": "2px",
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
        10: "40px",
        12: "48px",
        14: "56px",
        16: "64px",
        20: "80px",
        32: "128px",
        64: "256px"
    }, la = {
        regular: "KHTeka",
        mono: "KHTekaMono"
    }, ua = {
        regular: "400",
        medium: "500"
    }, pa = {
        h1: "50px",
        h2: "44px",
        h3: "38px",
        h4: "32px",
        h5: "26px",
        h6: "20px",
        large: "16px",
        medium: "14px",
        small: "12px"
    }, ha = {
        "h1-regular-mono": {
            lineHeight: "50px",
            letterSpacing: "-3px"
        },
        "h1-regular": {
            lineHeight: "50px",
            letterSpacing: "-1px"
        },
        "h1-medium": {
            lineHeight: "50px",
            letterSpacing: "-0.84px"
        },
        "h2-regular-mono": {
            lineHeight: "44px",
            letterSpacing: "-2.64px"
        },
        "h2-regular": {
            lineHeight: "44px",
            letterSpacing: "-0.88px"
        },
        "h2-medium": {
            lineHeight: "44px",
            letterSpacing: "-0.88px"
        },
        "h3-regular-mono": {
            lineHeight: "38px",
            letterSpacing: "-2.28px"
        },
        "h3-regular": {
            lineHeight: "38px",
            letterSpacing: "-0.76px"
        },
        "h3-medium": {
            lineHeight: "38px",
            letterSpacing: "-0.76px"
        },
        "h4-regular-mono": {
            lineHeight: "32px",
            letterSpacing: "-1.92px"
        },
        "h4-regular": {
            lineHeight: "32px",
            letterSpacing: "-0.32px"
        },
        "h4-medium": {
            lineHeight: "32px",
            letterSpacing: "-0.32px"
        },
        "h5-regular-mono": {
            lineHeight: "26px",
            letterSpacing: "-1.56px"
        },
        "h5-regular": {
            lineHeight: "26px",
            letterSpacing: "-0.26px"
        },
        "h5-medium": {
            lineHeight: "26px",
            letterSpacing: "-0.26px"
        },
        "h6-regular-mono": {
            lineHeight: "20px",
            letterSpacing: "-1.2px"
        },
        "h6-regular": {
            lineHeight: "20px",
            letterSpacing: "-0.6px"
        },
        "h6-medium": {
            lineHeight: "20px",
            letterSpacing: "-0.6px"
        },
        "lg-regular-mono": {
            lineHeight: "16px",
            letterSpacing: "-0.96px"
        },
        "lg-regular": {
            lineHeight: "18px",
            letterSpacing: "-0.16px"
        },
        "lg-medium": {
            lineHeight: "18px",
            letterSpacing: "-0.16px"
        },
        "md-regular-mono": {
            lineHeight: "14px",
            letterSpacing: "-0.84px"
        },
        "md-regular": {
            lineHeight: "16px",
            letterSpacing: "-0.14px"
        },
        "md-medium": {
            lineHeight: "16px",
            letterSpacing: "-0.14px"
        },
        "sm-regular-mono": {
            lineHeight: "12px",
            letterSpacing: "-0.72px"
        },
        "sm-regular": {
            lineHeight: "14px",
            letterSpacing: "-0.12px"
        },
        "sm-medium": {
            lineHeight: "14px",
            letterSpacing: "-0.12px"
        }
    }, fa = {
        "ease-out-power-2": "cubic-bezier(0.23, 0.09, 0.08, 1.13)",
        "ease-out-power-1": "cubic-bezier(0.12, 0.04, 0.2, 1.06)",
        "ease-in-power-2": "cubic-bezier(0.92, -0.13, 0.77, 0.91)",
        "ease-in-power-1": "cubic-bezier(0.88, -0.06, 0.8, 0.96)",
        "ease-inout-power-2": "cubic-bezier(0.77, 0.09, 0.23, 1.13)",
        "ease-inout-power-1": "cubic-bezier(0.88, 0.04, 0.12, 1.06)"
    }, Ca = {
        xl: "400ms",
        lg: "200ms",
        md: "125ms",
        sm: "75ms"
    }, un = {
        colors: ia,
        fontFamily: la,
        fontWeight: ua,
        textSize: pa,
        typography: ha,
        tokens: {
            core: Ft.core,
            theme: Ft.dark
        },
        borderRadius: ca,
        spacing: da,
        durations: Ca,
        easings: fa
    }, qn = "--apkt";
    function St(e) {
        if (!e) return {};
        const t = {};
        return t["font-family"] = e["--apkt-font-family"] ?? e["--w3m-font-family"] ?? "KHTeka", t.accent = e["--apkt-accent"] ?? e["--w3m-accent"] ?? "#0988F0", t["color-mix"] = e["--apkt-color-mix"] ?? e["--w3m-color-mix"] ?? "#000", t["color-mix-strength"] = e["--apkt-color-mix-strength"] ?? e["--w3m-color-mix-strength"] ?? 0, t["font-size-master"] = e["--apkt-font-size-master"] ?? e["--w3m-font-size-master"] ?? "10px", t["border-radius-master"] = e["--apkt-border-radius-master"] ?? e["--w3m-border-radius-master"] ?? "4px", e["--apkt-z-index"] !== void 0 ? t["z-index"] = e["--apkt-z-index"] : e["--w3m-z-index"] !== void 0 && (t["z-index"] = e["--w3m-z-index"]), t;
    }
    let Te;
    Te = {
        createCSSVariables (e) {
            const t = {}, n = {};
            function s(a, o, i = "") {
                for (const [d, l] of Object.entries(a)){
                    const u = i ? `${i}-${d}` : d;
                    l && typeof l == "object" && Object.keys(l).length ? (o[d] = {}, s(l, o[d], u)) : typeof l == "string" && (o[d] = `${qn}-${u}`);
                }
            }
            function r(a, o) {
                for (const [i, d] of Object.entries(a))d && typeof d == "object" ? (o[i] = {}, r(d, o[i])) : typeof d == "string" && (o[i] = `var(${d})`);
            }
            return s(e, t), r(t, n), {
                cssVariables: t,
                cssVariablesVarPrefix: n
            };
        },
        assignCSSVariables (e, t) {
            const n = {};
            function s(r, a, o) {
                for (const [i, d] of Object.entries(r)){
                    const l = o ? `${o}-${i}` : i, u = a[i];
                    d && typeof d == "object" ? s(d, u, l) : typeof u == "string" && (n[`${qn}-${l}`] = u);
                }
            }
            return s(e, t), n;
        },
        createRootStyles (e, t) {
            const n = {
                ...un,
                tokens: {
                    ...un.tokens,
                    theme: e === "light" ? Ft.light : Ft.dark
                }
            }, { cssVariables: s } = Te.createCSSVariables(n), r = Te.assignCSSVariables(s, n), a = Te.generateW3MVariables(t), o = Te.generateW3MOverrides(t), i = Te.generateScaledVariables(t), d = Te.generateBaseVariables(r), l = {
                ...r,
                ...d,
                ...a,
                ...o,
                ...i
            }, u = Te.applyColorMixToVariables(t, l), p = {
                ...l,
                ...u
            };
            return `:root {${Object.entries(p).map(([O, A])=>`${O}:${A.replace("/[:;{}</>]/g", "")};`).join("")}}`;
        },
        generateW3MVariables (e) {
            if (!e) return {};
            const t = St(e), n = {};
            return n["--w3m-font-family"] = t["font-family"], n["--w3m-accent"] = t.accent, n["--w3m-color-mix"] = t["color-mix"], n["--w3m-color-mix-strength"] = `${t["color-mix-strength"]}%`, n["--w3m-font-size-master"] = t["font-size-master"], n["--w3m-border-radius-master"] = t["border-radius-master"], n;
        },
        generateW3MOverrides (e) {
            if (!e) return {};
            const t = St(e), n = {};
            if (e["--apkt-accent"] || e["--w3m-accent"]) {
                const s = t.accent;
                n["--apkt-tokens-core-iconAccentPrimary"] = s, n["--apkt-tokens-core-borderAccentPrimary"] = s, n["--apkt-tokens-core-textAccentPrimary"] = s, n["--apkt-tokens-core-backgroundAccentPrimary"] = s;
            }
            return (e["--apkt-font-family"] || e["--w3m-font-family"]) && (n["--apkt-fontFamily-regular"] = t["font-family"]), t["z-index"] !== void 0 && (n["--apkt-tokens-core-zIndex"] = `${t["z-index"]}`), n;
        },
        generateScaledVariables (e) {
            if (!e) return {};
            const t = St(e), n = {};
            if (e["--apkt-font-size-master"] || e["--w3m-font-size-master"]) {
                const s = parseFloat(t["font-size-master"].replace("px", ""));
                n["--apkt-textSize-h1"] = `${Number(s) * 5}px`, n["--apkt-textSize-h2"] = `${Number(s) * 4.4}px`, n["--apkt-textSize-h3"] = `${Number(s) * 3.8}px`, n["--apkt-textSize-h4"] = `${Number(s) * 3.2}px`, n["--apkt-textSize-h5"] = `${Number(s) * 2.6}px`, n["--apkt-textSize-h6"] = `${Number(s) * 2}px`, n["--apkt-textSize-large"] = `${Number(s) * 1.6}px`, n["--apkt-textSize-medium"] = `${Number(s) * 1.4}px`, n["--apkt-textSize-small"] = `${Number(s) * 1.2}px`;
            }
            if (e["--apkt-border-radius-master"] || e["--w3m-border-radius-master"]) {
                const s = parseFloat(t["border-radius-master"].replace("px", ""));
                n["--apkt-borderRadius-1"] = `${Number(s)}px`, n["--apkt-borderRadius-2"] = `${Number(s) * 2}px`, n["--apkt-borderRadius-3"] = `${Number(s) * 3}px`, n["--apkt-borderRadius-4"] = `${Number(s) * 4}px`, n["--apkt-borderRadius-5"] = `${Number(s) * 5}px`, n["--apkt-borderRadius-6"] = `${Number(s) * 6}px`, n["--apkt-borderRadius-8"] = `${Number(s) * 8}px`, n["--apkt-borderRadius-16"] = `${Number(s) * 16}px`, n["--apkt-borderRadius-20"] = `${Number(s) * 20}px`, n["--apkt-borderRadius-32"] = `${Number(s) * 32}px`, n["--apkt-borderRadius-64"] = `${Number(s) * 64}px`, n["--apkt-borderRadius-128"] = `${Number(s) * 128}px`;
            }
            return n;
        },
        generateColorMixCSS (e, t) {
            if (!e?.["--w3m-color-mix"] || !e["--w3m-color-mix-strength"]) return "";
            const n = e["--w3m-color-mix"], s = e["--w3m-color-mix-strength"];
            if (!s || s === 0) return "";
            const r = Object.keys(t || {}).filter((o)=>{
                const i = o.includes("-tokens-core-background") || o.includes("-tokens-core-text") || o.includes("-tokens-core-border") || o.includes("-tokens-core-foreground") || o.includes("-tokens-core-icon") || o.includes("-tokens-theme-background") || o.includes("-tokens-theme-text") || o.includes("-tokens-theme-border") || o.includes("-tokens-theme-foreground") || o.includes("-tokens-theme-icon"), d = o.includes("-borderRadius-") || o.includes("-spacing-") || o.includes("-textSize-") || o.includes("-fontFamily-") || o.includes("-fontWeight-") || o.includes("-typography-") || o.includes("-duration-") || o.includes("-ease-") || o.includes("-path-") || o.includes("-width-") || o.includes("-height-") || o.includes("-visual-size-") || o.includes("-modal-width") || o.includes("-cover");
                return i && !d;
            });
            return r.length === 0 ? "" : ` @supports (background: color-mix(in srgb, white 50%, black)) {
      :root {
        ${r.map((o)=>{
                const i = t?.[o] || "";
                return i.includes("color-mix") || i.startsWith("#") || i.startsWith("rgb") ? `${o}: color-mix(in srgb, ${n} ${s}%, ${i});` : `${o}: color-mix(in srgb, ${n} ${s}%, var(${o}-base, ${i}));`;
            }).join("")}
      }
    }`;
        },
        generateBaseVariables (e) {
            const t = {}, n = e["--apkt-tokens-theme-backgroundPrimary"];
            n && (t["--apkt-tokens-theme-backgroundPrimary-base"] = n);
            const s = e["--apkt-tokens-core-backgroundAccentPrimary"];
            return s && (t["--apkt-tokens-core-backgroundAccentPrimary-base"] = s), t;
        },
        applyColorMixToVariables (e, t) {
            const n = {};
            t?.["--apkt-tokens-theme-backgroundPrimary"] && (n["--apkt-tokens-theme-backgroundPrimary"] = "var(--apkt-tokens-theme-backgroundPrimary-base)"), t?.["--apkt-tokens-core-backgroundAccentPrimary"] && (n["--apkt-tokens-core-backgroundAccentPrimary"] = "var(--apkt-tokens-core-backgroundAccentPrimary-base)");
            const s = St(e), r = s["color-mix"], a = s["color-mix-strength"];
            if (!a || a === 0) return n;
            const o = Object.keys(t || {}).filter((i)=>{
                const d = i.includes("-tokens-core-background") || i.includes("-tokens-core-text") || i.includes("-tokens-core-border") || i.includes("-tokens-core-foreground") || i.includes("-tokens-core-icon") || i.includes("-tokens-theme-background") || i.includes("-tokens-theme-text") || i.includes("-tokens-theme-border") || i.includes("-tokens-theme-foreground") || i.includes("-tokens-theme-icon") || i.includes("-tokens-theme-overlay"), l = i.includes("-borderRadius-") || i.includes("-spacing-") || i.includes("-textSize-") || i.includes("-fontFamily-") || i.includes("-fontWeight-") || i.includes("-typography-") || i.includes("-duration-") || i.includes("-ease-") || i.includes("-path-") || i.includes("-width-") || i.includes("-height-") || i.includes("-visual-size-") || i.includes("-modal-width") || i.includes("-cover");
                return d && !l;
            });
            return o.length === 0 || o.forEach((i)=>{
                const d = t?.[i] || "";
                i.endsWith("-base") || (i === "--apkt-tokens-theme-backgroundPrimary" || i === "--apkt-tokens-core-backgroundAccentPrimary" ? n[i] = `color-mix(in srgb, ${r} ${a}%, var(${i}-base))` : d.includes("color-mix") || d.startsWith("#") || d.startsWith("rgb") ? n[i] = `color-mix(in srgb, ${r} ${a}%, ${d})` : n[i] = `color-mix(in srgb, ${r} ${a}%, var(${i}-base, ${d}))`);
            }), n;
        }
    };
    ({ cssVariablesVarPrefix: ma } = Te.createCSSVariables(un));
    xa = function(e, ...t) {
        return Re(e, ...t.map((n)=>Ce(typeof n == "function" ? n(ma) : n)));
    };
    let Fe, He, be, ge, $t;
    const Se = {
        "KHTeka-500-woff2": "https://fonts.reown.com/KHTeka-Medium.woff2",
        "KHTeka-400-woff2": "https://fonts.reown.com/KHTeka-Regular.woff2",
        "KHTeka-300-woff2": "https://fonts.reown.com/KHTeka-Light.woff2",
        "KHTekaMono-400-woff2": "https://fonts.reown.com/KHTekaMono-Regular.woff2",
        "KHTeka-500-woff": "https://fonts.reown.com/KHTeka-Light.woff",
        "KHTeka-400-woff": "https://fonts.reown.com/KHTeka-Regular.woff",
        "KHTeka-300-woff": "https://fonts.reown.com/KHTeka-Light.woff",
        "KHTekaMono-400-woff": "https://fonts.reown.com/KHTekaMono-Regular.woff"
    };
    function Ht(e, t = "dark") {
        Fe && document.head.removeChild(Fe), Fe = document.createElement("style"), Fe.textContent = Te.createRootStyles(t, e), document.head.appendChild(Fe);
    }
    La = function(e, t = "dark") {
        if ($t = e, He = document.createElement("style"), be = document.createElement("style"), ge = document.createElement("style"), He.textContent = et(e).core.cssText, be.textContent = et(e).dark.cssText, ge.textContent = et(e).light.cssText, document.head.appendChild(He), document.head.appendChild(be), document.head.appendChild(ge), Ht(e, t), pn(t), !(e?.["--apkt-font-family"] || e?.["--w3m-font-family"])) for (const [s, r] of Object.entries(Se)){
            const a = document.createElement("link");
            a.rel = "preload", a.href = r, a.as = "font", a.type = s.includes("woff2") ? "font/woff2" : "font/woff", a.crossOrigin = "anonymous", document.head.appendChild(a);
        }
        pn(t);
    };
    function pn(e = "dark") {
        be && ge && Fe && (e === "light" ? (Ht($t, e), be.removeAttribute("media"), ge.media = "enabled") : (Ht($t, e), ge.removeAttribute("media"), be.media = "enabled"));
    }
    function ga(e) {
        if ($t = e, He && be && ge) {
            He.textContent = et(e).core.cssText, be.textContent = et(e).dark.cssText, ge.textContent = et(e).light.cssText;
            const t = e?.["--apkt-font-family"] || e?.["--w3m-font-family"];
            t && (He.textContent = He.textContent?.replace("font-family: KHTeka", `font-family: ${t}`), be.textContent = be.textContent?.replace("font-family: KHTeka", `font-family: ${t}`), ge.textContent = ge.textContent?.replace("font-family: KHTeka", `font-family: ${t}`));
        }
        if (Fe) {
            const t = ge?.media === "enabled" ? "light" : "dark";
            Ht(e, t);
        }
    }
    function et(e) {
        const t = !!(e?.["--apkt-font-family"] || e?.["--w3m-font-family"]);
        return {
            core: Re`
      ${t ? Re`` : Re`
            @font-face {
              font-family: 'KHTeka';
              src:
                url(${Ce(Se["KHTeka-400-woff2"])}) format('woff2'),
                url(${Ce(Se["KHTeka-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${Ce(Se["KHTeka-300-woff2"])}) format('woff2'),
                url(${Ce(Se["KHTeka-300-woff"])}) format('woff');
              font-weight: 300;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTekaMono';
              src:
                url(${Ce(Se["KHTekaMono-400-woff2"])}) format('woff2'),
                url(${Ce(Se["KHTekaMono-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${Ce(Se["KHTeka-400-woff2"])}) format('woff2'),
                url(${Ce(Se["KHTeka-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }
          `}

      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --apkt-modal-width: 370px;

        --apkt-visual-size-inherit: inherit;
        --apkt-visual-size-sm: 40px;
        --apkt-visual-size-md: 55px;
        --apkt-visual-size-lg: 80px;

        --apkt-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --apkt-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --apkt-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --apkt-width-network-sm: 36px;
        --apkt-width-network-md: 48px;
        --apkt-width-network-lg: 86px;

        --apkt-duration-dynamic: 0ms;
        --apkt-height-network-sm: 40px;
        --apkt-height-network-md: 54px;
        --apkt-height-network-lg: 96px;
      }
    `,
            dark: Re`
      :root {
      }
    `,
            light: Re`
      :root {
      }
    `
        };
    }
    let _e, wa, Ea, de, gs, Na, Aa;
    Ma = Re`
  div,
  span,
  iframe,
  a,
  img,
  form,
  button,
  label,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    backface-visibility: hidden;
  }

  :host {
    font-family: var(--apkt-fontFamily-regular);
  }
`;
    Wa = Re`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
    outline: none;
    border: none;
    text-decoration: none;
    transition:
      background-color var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      color var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      border var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      box-shadow var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      width var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      height var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      transform var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      opacity var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      scale var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      border-radius var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2);
    will-change:
      background-color, color, border, box-shadow, width, height, transform, opacity, scale,
      border-radius;
  }

  a:active:not([disabled]),
  button:active:not([disabled]) {
    scale: 0.975;
    transform-origin: center;
  }

  button:disabled {
    cursor: default;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`;
    _e = {
        EIP155: h.CHAIN.EVM,
        CONNECTOR_TYPE_WALLET_CONNECT: "WALLET_CONNECT",
        CONNECTOR_TYPE_INJECTED: "INJECTED",
        CONNECTOR_TYPE_ANNOUNCED: "ANNOUNCED",
        CONNECTOR_TYPE_AUTH: "AUTH"
    };
    wa = {
        NetworkImageIds: {
            1: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
            42161: "3bff954d-5cb0-47a0-9a23-d20192e74600",
            43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
            56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
            250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
            10: "ab9c186a-c52f-464b-2906-ca59d760a400",
            137: "41d04d42-da3b-4453-8506-668cc0727900",
            5e3: "e86fae9b-b770-4eea-e520-150e12c81100",
            295: "6a97d510-cac8-4e58-c7ce-e8681b044c00",
            11155111: "e909ea0a-f92a-4512-c8fc-748044ea6800",
            84532: "a18a7ecd-e307-4360-4746-283182228e00",
            1301: "4eeea7ef-0014-4649-5d1d-07271a80f600",
            130: "2257980a-3463-48c6-cbac-a42d2a956e00",
            10143: "0a728e83-bacb-46db-7844-948f05434900",
            100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
            9001: "f926ff41-260d-4028-635e-91913fc28e00",
            324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
            314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
            4689: "34e68754-e536-40da-c153-6ef2e7188a00",
            1088: "3897a66d-40b9-4833-162f-a2c90531c900",
            1284: "161038da-44ae-4ec7-1208-0ea569454b00",
            1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00",
            7777777: "845c60df-d429-4991-e687-91ae45791600",
            42220: "ab781bbc-ccc6-418d-d32d-789b15da1f00",
            8453: "7289c336-3981-4081-c5f4-efc26ac64a00",
            1313161554: "3ff73439-a619-4894-9262-4470c773a100",
            2020: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
            2021: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
            80094: "e329c2c9-59b0-4a02-83e4-212ff3779900",
            2741: "fc2427d1-5af9-4a9c-8da5-6f94627cd900",
            "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp": "a1b58899-f671-4276-6a5e-56ca5bd59700",
            "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z": "a1b58899-f671-4276-6a5e-56ca5bd59700",
            EtWTRABZaYq6iMfeYKouRu166VU2xqa1: "a1b58899-f671-4276-6a5e-56ca5bd59700",
            "000000000019d6689c085ae165831e93": "0b4838db-0161-4ffe-022d-532bf03dba00",
            "000000000933ea01ad0ee984209779ba": "39354064-d79b-420b-065d-f980c4b78200",
            "00000008819873e925422c1ff0f99f7c": "b3406e4a-bbfc-44fb-e3a6-89673c78b700",
            "-239": "20f673c0-095e-49b2-07cf-eb5049dcf600",
            "-3": "20f673c0-095e-49b2-07cf-eb5049dcf600"
        }
    };
    hn = {
        getCaipTokens (e) {
            if (!e) return;
            const t = {};
            return Object.entries(e).forEach(([n, s])=>{
                t[`${_e.EIP155}:${n}`] = s;
            }), t;
        },
        isLowerCaseMatch (e, t) {
            return e?.toLowerCase() === t?.toLowerCase();
        },
        getActiveNamespaceConnectedToAuth () {
            const e = c.state.activeChain;
            return h.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((t)=>m.getConnectorId(t) === h.CONNECTOR_ID.AUTH && t === e);
        },
        withRetry ({ conditionFn: e, intervalMs: t, maxRetries: n }) {
            let s = 0;
            return new Promise((r)=>{
                async function a() {
                    return s += 1, await e() ? r(!0) : s >= n ? r(!1) : (setTimeout(a, t), null);
                }
                a();
            });
        },
        userChainIdToChainNamespace (e) {
            if (typeof e == "number") return h.CHAIN.EVM;
            const [t] = e.split(":");
            return t;
        },
        getOtherAuthNamespaces (e) {
            return e ? h.AUTH_CONNECTOR_SUPPORTED_CHAINS.filter((s)=>s !== e) : [];
        },
        getConnectorStorageInfo (e, t) {
            const s = C.getConnections()[t] ?? [];
            return {
                hasDisconnected: C.isConnectorDisconnected(e, t),
                hasConnected: s.some((r)=>hn.isLowerCaseMatch(r.connectorId, e))
            };
        }
    };
    Ea = new AbortController;
    de = {
        EmbeddedWalletAbortController: Ea,
        UniversalProviderErrors: {
            UNAUTHORIZED_DOMAIN_NOT_ALLOWED: {
                message: "Unauthorized: origin not allowed",
                alertErrorKey: "ORIGIN_NOT_ALLOWED"
            },
            JWT_VALIDATION_ERROR: {
                message: "JWT validation error: JWT Token is not yet valid",
                alertErrorKey: "JWT_TOKEN_NOT_VALID"
            },
            INVALID_KEY: {
                message: "Unauthorized: invalid key",
                alertErrorKey: "INVALID_PROJECT_ID"
            }
        },
        ALERT_ERRORS: {
            SWITCH_NETWORK_NOT_FOUND: {
                code: "APKT001",
                displayMessage: "Network Not Found",
                debugMessage: "The specified network is not recognized. Please ensure it is included in the `networks` array of your `createAppKit` configuration."
            },
            ORIGIN_NOT_ALLOWED: {
                code: "APKT002",
                displayMessage: "Invalid App Configuration",
                debugMessage: ()=>`The origin ${ot() ? window.origin : "unknown"} is not in your allow list. Please update your allowed domains at https://dashboard.reown.com. [PID: ${f.state.projectId}]`
            },
            IFRAME_LOAD_FAILED: {
                code: "APKT003",
                displayMessage: "Network Error: Wallet Load Failed",
                debugMessage: ()=>"Failed to load the embedded wallet. This may be due to network issues or server downtime. Please check your network connection and try again shortly. Contact support if the issue persists."
            },
            IFRAME_REQUEST_TIMEOUT: {
                code: "APKT004",
                displayMessage: "Wallet Request Timeout",
                debugMessage: ()=>"The request to the embedded wallet timed out. Please check your network connection and try again shortly. Contact support if the issue persists."
            },
            UNVERIFIED_DOMAIN: {
                code: "APKT005",
                displayMessage: "Unverified Domain",
                debugMessage: ()=>"Embedded wallet load failed. Ensure your domain is verified in https://dashboard.reown.com."
            },
            JWT_TOKEN_NOT_VALID: {
                code: "APKT006",
                displayMessage: "Session Expired",
                debugMessage: "Your session is invalid or expired. Please check your system’s date and time settings, then reconnect."
            },
            INVALID_PROJECT_ID: {
                code: "APKT007",
                displayMessage: "Invalid Project ID",
                debugMessage: "The specified project ID is invalid. Please visit https://dashboard.reown.com to obtain a valid project ID."
            },
            PROJECT_ID_NOT_CONFIGURED: {
                code: "APKT008",
                displayMessage: "Project ID Missing",
                debugMessage: "No project ID is configured. You can create and configure a project ID at https://dashboard.reown.com."
            },
            SERVER_ERROR_APP_CONFIGURATION: {
                code: "APKT009",
                displayMessage: "Server Error",
                debugMessage: (e)=>`Unable to fetch App Configuration. ${e}. Please check your network connection and try again shortly. Contact support if the issue persists.`
            },
            RATE_LIMITED_APP_CONFIGURATION: {
                code: "APKT010",
                displayMessage: "Rate Limited",
                debugMessage: "You have been rate limited while retrieving App Configuration. Please wait a few minutes and try again. Contact support if the issue persists."
            }
        },
        ALERT_WARNINGS: {
            LOCAL_CONFIGURATION_IGNORED: {
                debugMessage: (e)=>`[Reown Config Notice] ${e}`
            },
            INACTIVE_NAMESPACE_NOT_CONNECTED: {
                code: "APKTW001",
                displayMessage: "Inactive Namespace Not Connected",
                debugMessage: (e, t)=>`An error occurred while connecting an inactive namespace ${e}: "${t}"`
            },
            INVALID_EMAIL: {
                code: "APKTW002",
                displayMessage: "Invalid Email Address",
                debugMessage: "Please enter a valid email address"
            }
        }
    };
    gs = {
        TOKEN_ADDRESSES_BY_SYMBOL: {
            USDC: {
                8453: Br.asset,
                84532: Fr.asset
            }
        },
        getTokenSymbolByAddress (e) {
            if (!e) return;
            const [t] = Object.entries(gs.TOKEN_ADDRESSES_BY_SYMBOL).find(([n, s])=>Object.values(s).includes(e)) ?? [];
            return t;
        }
    };
    Na = {
        createLogger (e, t = "error") {
            const n = Ns({
                level: t
            }), { logger: s } = As({
                opts: n
            });
            return s.error = (...r)=>{
                for (const a of r)if (a instanceof Error) {
                    e(a, ...r);
                    return;
                }
                e(void 0, ...r);
            }, s;
        }
    };
    Aa = "rpc.walletconnect.org";
    function zn(e, t) {
        const n = new URL("https://rpc.walletconnect.org/v1/");
        return n.searchParams.set("chainId", e), n.searchParams.set("projectId", t), n.toString();
    }
    let en, _t;
    en = [
        "near:mainnet",
        "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
        "eip155:1101",
        "eip155:56",
        "eip155:42161",
        "eip155:7777777",
        "eip155:59144",
        "eip155:324",
        "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
        "eip155:5000",
        "solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz",
        "eip155:80084",
        "eip155:5003",
        "eip155:100",
        "eip155:8453",
        "eip155:42220",
        "eip155:1313161555",
        "eip155:17000",
        "eip155:1",
        "eip155:300",
        "eip155:1313161554",
        "eip155:1329",
        "eip155:84532",
        "eip155:421614",
        "eip155:11155111",
        "eip155:8217",
        "eip155:43114",
        "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
        "eip155:999999999",
        "eip155:11155420",
        "eip155:80002",
        "eip155:97",
        "eip155:43113",
        "eip155:137",
        "eip155:10",
        "eip155:1301",
        "eip155:80094",
        "eip155:80069",
        "eip155:560048",
        "eip155:31",
        "eip155:2818",
        "eip155:57054",
        "eip155:911867",
        "eip155:534351",
        "eip155:1112",
        "eip155:534352",
        "eip155:1111",
        "eip155:146",
        "eip155:130",
        "eip155:1284",
        "eip155:30",
        "eip155:2810",
        "bip122:000000000019d6689c085ae165831e93",
        "bip122:000000000933ea01ad0ee984209779ba"
    ];
    Ze = {
        extendRpcUrlWithProjectId (e, t) {
            let n = !1;
            try {
                n = new URL(e).host === Aa;
            } catch  {
                n = !1;
            }
            if (n) {
                const s = new URL(e);
                return s.searchParams.has("projectId") || s.searchParams.set("projectId", t), s.toString();
            }
            return e;
        },
        isCaipNetwork (e) {
            return "chainNamespace" in e && "caipNetworkId" in e;
        },
        getChainNamespace (e) {
            return this.isCaipNetwork(e) ? e.chainNamespace : h.CHAIN.EVM;
        },
        getCaipNetworkId (e) {
            return this.isCaipNetwork(e) ? e.caipNetworkId : `${h.CHAIN.EVM}:${e.id}`;
        },
        getDefaultRpcUrl (e, t, n) {
            const s = e.rpcUrls?.default?.http?.[0];
            return en.includes(t) ? zn(t, n) : s || "";
        },
        extendCaipNetwork (e, { customNetworkImageUrls: t, projectId: n, customRpcUrls: s }) {
            const r = this.getChainNamespace(e), a = this.getCaipNetworkId(e), o = e.rpcUrls?.default?.http?.[0], i = this.getDefaultRpcUrl(e, a, n), d = e?.rpcUrls?.chainDefault?.http?.[0] || o, l = s?.[a]?.map((b)=>b.url) || [], u = [
                ...l,
                ...i ? [
                    i
                ] : []
            ], p = [
                ...l
            ];
            return d && !p.includes(d) && p.push(d), {
                ...e,
                chainNamespace: r,
                caipNetworkId: a,
                assets: {
                    imageId: wa.NetworkImageIds[e.id],
                    imageUrl: t?.[e.id]
                },
                rpcUrls: {
                    ...e.rpcUrls,
                    default: {
                        http: u
                    },
                    chainDefault: {
                        http: p
                    }
                }
            };
        },
        extendCaipNetworks (e, { customNetworkImageUrls: t, projectId: n, customRpcUrls: s }) {
            return e.map((r)=>Ze.extendCaipNetwork(r, {
                    customNetworkImageUrls: t,
                    customRpcUrls: s,
                    projectId: n
                }));
        },
        getViemTransport (e, t, n) {
            const s = [];
            return n?.forEach((r)=>{
                s.push(At(r.url, r.config));
            }), en.includes(e.caipNetworkId) && s.push(At(zn(e.caipNetworkId, t), {
                fetchOptions: {
                    headers: {
                        "Content-Type": "text/plain"
                    }
                }
            })), e?.rpcUrls?.default?.http?.forEach((r)=>{
                s.push(At(r));
            }), An(s);
        },
        extendWagmiTransports (e, t, n) {
            if (en.includes(e.caipNetworkId)) {
                const s = this.getDefaultRpcUrl(e, e.caipNetworkId, t);
                return An([
                    n,
                    At(s)
                ]);
            }
            return n;
        },
        getUnsupportedNetwork (e) {
            return {
                id: e.split(":")[1],
                caipNetworkId: e,
                name: h.UNSUPPORTED_NETWORK_NAME,
                chainNamespace: e.split(":")[0],
                nativeCurrency: {
                    name: "",
                    decimals: 0,
                    symbol: ""
                },
                rpcUrls: {
                    default: {
                        http: []
                    }
                }
            };
        },
        getCaipNetworkFromStorage (e) {
            const t = C.getActiveCaipNetworkId(), n = c.getAllRequestedCaipNetworks(), s = Array.from(c.state.chains?.keys() || []), r = t?.split(":")[0], a = r ? s.includes(r) : !1, o = n?.find((d)=>d.caipNetworkId === t);
            return a && !o && t ? this.getUnsupportedNetwork(t) : o || e || n?.[0];
        }
    };
    _t = {
        ERROR_CODE_UNRECOGNIZED_CHAIN_ID: 4902,
        ERROR_CODE_DEFAULT: 5e3,
        ERROR_INVALID_CHAIN_ID: 32603
    };
    class ba extends xr {
        async setUniversalProvider(t) {
            if (!this.namespace) throw new Error("UniversalAdapter:setUniversalProvider - namespace is required");
            return this.addConnector(new Lr({
                provider: t,
                caipNetworks: this.getCaipNetworks(),
                namespace: this.namespace
            })), Promise.resolve();
        }
        async connect(t) {
            return Promise.resolve({
                id: "WALLET_CONNECT",
                type: "WALLET_CONNECT",
                chainId: Number(t.chainId),
                provider: this.provider,
                address: ""
            });
        }
        async disconnect() {
            try {
                await this.getWalletConnectConnector().disconnect(), this.emit("disconnect");
            } catch (t) {
                console.warn("UniversalAdapter:disconnect - error", t);
            }
            return {
                connections: []
            };
        }
        syncConnections() {
            return Promise.resolve();
        }
        async writeSolanaTransaction() {
            return Promise.resolve({
                hash: ""
            });
        }
        async getAccounts({ namespace: t }) {
            const s = this.provider?.session?.namespaces?.[t]?.accounts?.map((r)=>{
                const [, , a] = r.split(":");
                return a;
            }).filter((r, a, o)=>o.indexOf(r) === a) || [];
            return Promise.resolve({
                accounts: s.map((r)=>E.createAccount(t, r, t === "bip122" ? "payment" : "eoa"))
            });
        }
        async syncConnectors() {
            return Promise.resolve();
        }
        async getBalance(t) {
            if (!(t.caipNetwork && L.BALANCE_SUPPORTED_CHAINS.includes(t.caipNetwork?.chainNamespace)) || t.caipNetwork?.testnet) return {
                balance: "0.00",
                symbol: t.caipNetwork?.nativeCurrency.symbol || ""
            };
            const s = c.getAccountData();
            if (s?.balanceLoading && t.chainId === c.state.activeCaipNetwork?.id) return {
                balance: s?.balance || "0.00",
                symbol: s?.balanceSymbol || ""
            };
            const a = (await c.fetchTokenBalance()).find((o)=>o.chainId === `${t.caipNetwork?.chainNamespace}:${t.chainId}` && o.symbol === t.caipNetwork?.nativeCurrency.symbol);
            return {
                balance: a?.quantity.numeric || "0.00",
                symbol: a?.symbol || t.caipNetwork?.nativeCurrency.symbol || ""
            };
        }
        async signMessage(t) {
            const { provider: n, message: s, address: r } = t;
            if (!n) throw new Error("UniversalAdapter:signMessage - provider is undefined");
            let a = "";
            return c.state.activeCaipNetwork?.chainNamespace === h.CHAIN.SOLANA ? a = (await n.request({
                method: "solana_signMessage",
                params: {
                    message: bs.encode(new TextEncoder().encode(s)),
                    pubkey: r
                }
            }, c.state.activeCaipNetwork?.caipNetworkId)).signature : a = await n.request({
                method: "personal_sign",
                params: [
                    s,
                    r
                ]
            }, c.state.activeCaipNetwork?.caipNetworkId), {
                signature: a
            };
        }
        async estimateGas() {
            return Promise.resolve({
                gas: BigInt(0)
            });
        }
        async sendTransaction() {
            return Promise.resolve({
                hash: ""
            });
        }
        walletGetAssets(t) {
            return Promise.resolve({});
        }
        async writeContract() {
            return Promise.resolve({
                hash: ""
            });
        }
        emitFirstAvailableConnection() {}
        parseUnits() {
            return 0n;
        }
        formatUnits() {
            return "0";
        }
        async getCapabilities() {
            return Promise.resolve({});
        }
        async grantPermissions() {
            return Promise.resolve({});
        }
        async revokePermissions() {
            return Promise.resolve("0x");
        }
        async syncConnection() {
            return Promise.resolve({
                id: "WALLET_CONNECT",
                type: "WALLET_CONNECT",
                chainId: 1,
                provider: this.provider,
                address: ""
            });
        }
        async switchNetwork(t) {
            const { caipNetwork: n } = t, s = this.getWalletConnectConnector();
            if (n.chainNamespace === h.CHAIN.EVM) try {
                await s.provider?.request({
                    method: "wallet_switchEthereumChain",
                    params: [
                        {
                            chainId: bn(n.id)
                        }
                    ]
                });
            } catch (r) {
                if (r.code === _t.ERROR_CODE_UNRECOGNIZED_CHAIN_ID || r.code === _t.ERROR_INVALID_CHAIN_ID || r.code === _t.ERROR_CODE_DEFAULT || r?.data?.originalError?.code === _t.ERROR_CODE_UNRECOGNIZED_CHAIN_ID) try {
                    await s.provider?.request({
                        method: "wallet_addEthereumChain",
                        params: [
                            {
                                chainId: bn(n.id),
                                rpcUrls: [
                                    n?.rpcUrls.chainDefault?.http
                                ],
                                chainName: n.name,
                                nativeCurrency: n.nativeCurrency,
                                blockExplorerUrls: [
                                    n.blockExplorers?.default.url
                                ]
                            }
                        ]
                    });
                } catch  {
                    throw new Error("Chain is not supported");
                }
            }
            s.provider.setDefaultChain(n.caipNetworkId);
        }
        getWalletConnectProvider() {
            return this.connectors.find((s)=>s.type === "WALLET_CONNECT")?.provider;
        }
    }
    const Ia = [
        "email",
        "socials",
        "swaps",
        "onramp",
        "activity",
        "reownBranding",
        "multiWallet",
        "emailCapture",
        "payWithExchange",
        "payments",
        "reownAuthentication",
        "headless"
    ], Tt = {
        email: {
            apiFeatureName: "social_login",
            localFeatureName: "email",
            returnType: !1,
            isLegacy: !1,
            isAvailableOnBasic: !1,
            processApi: (e)=>{
                if (!e?.config) return !1;
                const t = e.config;
                return !!e.isEnabled && t.includes("email");
            },
            processFallback: (e)=>e === void 0 ? L.DEFAULT_REMOTE_FEATURES.email : !!e
        },
        socials: {
            apiFeatureName: "social_login",
            localFeatureName: "socials",
            returnType: !1,
            isLegacy: !1,
            isAvailableOnBasic: !1,
            processApi: (e)=>{
                if (!e?.config) return !1;
                const t = e.config;
                return e.isEnabled && t.length > 0 ? t.filter((n)=>n !== "email") : !1;
            },
            processFallback: (e)=>e === void 0 ? L.DEFAULT_REMOTE_FEATURES.socials : typeof e == "boolean" ? e ? L.DEFAULT_REMOTE_FEATURES.socials : !1 : e
        },
        swaps: {
            apiFeatureName: "swap",
            localFeatureName: "swaps",
            returnType: !1,
            isLegacy: !1,
            isAvailableOnBasic: !1,
            processApi: (e)=>{
                if (!e?.config) return !1;
                const t = e.config;
                return e.isEnabled && t.length > 0 ? t : !1;
            },
            processFallback: (e)=>e === void 0 ? L.DEFAULT_REMOTE_FEATURES.swaps : typeof e == "boolean" ? e ? L.DEFAULT_REMOTE_FEATURES.swaps : !1 : e
        },
        onramp: {
            apiFeatureName: "onramp",
            localFeatureName: "onramp",
            returnType: !1,
            isLegacy: !1,
            isAvailableOnBasic: !1,
            processApi: (e)=>{
                if (!e?.config) return !1;
                const t = e.config;
                return e.isEnabled && t.length > 0 ? t : !1;
            },
            processFallback: (e)=>e === void 0 ? L.DEFAULT_REMOTE_FEATURES.onramp : typeof e == "boolean" ? e ? L.DEFAULT_REMOTE_FEATURES.onramp : !1 : e
        },
        activity: {
            apiFeatureName: "activity",
            localFeatureName: "history",
            returnType: !1,
            isLegacy: !0,
            isAvailableOnBasic: !1,
            processApi: (e)=>!!e.isEnabled,
            processFallback: (e)=>e === void 0 ? L.DEFAULT_REMOTE_FEATURES.activity : !!e
        },
        reownBranding: {
            apiFeatureName: "reown_branding",
            localFeatureName: "reownBranding",
            returnType: !1,
            isLegacy: !1,
            isAvailableOnBasic: !1,
            processApi: (e)=>!!e.isEnabled,
            processFallback: (e)=>e === void 0 ? L.DEFAULT_REMOTE_FEATURES.reownBranding : !!e
        },
        emailCapture: {
            apiFeatureName: "email_capture",
            localFeatureName: "emailCapture",
            returnType: !1,
            isLegacy: !1,
            isAvailableOnBasic: !1,
            processApi: (e)=>e.isEnabled && (e.config ?? []),
            processFallback: (e)=>!1
        },
        multiWallet: {
            apiFeatureName: "multi_wallet",
            localFeatureName: "multiWallet",
            returnType: !1,
            isLegacy: !1,
            isAvailableOnBasic: !1,
            processApi: (e)=>!!e.isEnabled,
            processFallback: ()=>L.DEFAULT_REMOTE_FEATURES.multiWallet
        },
        payWithExchange: {
            apiFeatureName: "fund_from_exchange",
            localFeatureName: "payWithExchange",
            returnType: !1,
            isLegacy: !1,
            isAvailableOnBasic: !1,
            processApi: (e)=>!!e.isEnabled,
            processFallback: ()=>L.DEFAULT_REMOTE_FEATURES.payWithExchange
        },
        payments: {
            apiFeatureName: "payments",
            localFeatureName: "payments",
            returnType: !1,
            isLegacy: !1,
            isAvailableOnBasic: !1,
            processApi: (e)=>!!e.isEnabled,
            processFallback: ()=>L.DEFAULT_REMOTE_FEATURES.payments
        },
        reownAuthentication: {
            apiFeatureName: "reown_authentication",
            localFeatureName: "reownAuthentication",
            returnType: !1,
            isLegacy: !1,
            isAvailableOnBasic: !1,
            processApi: (e)=>!!e.isEnabled,
            processFallback: (e)=>typeof e > "u" ? L.DEFAULT_REMOTE_FEATURES.reownAuthentication : !!e
        },
        headless: {
            apiFeatureName: "headless",
            localFeatureName: "headless",
            returnType: !1,
            isLegacy: !1,
            isAvailableOnBasic: !1,
            processApi: (e)=>!!e.isEnabled,
            processFallback: ()=>L.DEFAULT_REMOTE_FEATURES.headless
        }
    }, ya = {
        localSettingsOverridden: new Set,
        getApiConfig (e, t) {
            return t?.find((n)=>n.id === e);
        },
        addWarning (e, t) {
            if (e !== void 0) {
                const n = Tt[t], s = n.isLegacy ? `"features.${n.localFeatureName}" (now "${t}")` : `"features.${t}"`;
                this.localSettingsOverridden.add(s);
            }
        },
        processFeature (e, t, n, s, r) {
            const a = Tt[e], o = t[a.localFeatureName];
            if (r && !a.isAvailableOnBasic) return !1;
            if (s) {
                const i = this.getApiConfig(a.apiFeatureName, n);
                return i?.config === null ? this.processFallbackFeature(e, o) : i?.config ? (o !== void 0 && this.addWarning(o, e), this.processApiFeature(e, i)) : !1;
            }
            return this.processFallbackFeature(e, o);
        },
        processApiFeature (e, t) {
            return Tt[e].processApi(t);
        },
        processFallbackFeature (e, t) {
            return Tt[e].processFallback(t);
        },
        async fetchRemoteFeatures (e) {
            const t = e.basic ?? !1, n = e.features || {};
            this.localSettingsOverridden.clear();
            let s = null, r = !1;
            try {
                s = await N.fetchProjectConfig(), r = s != null;
            } catch (o) {
                console.warn("[Reown Config] Failed to fetch remote project configuration. Using local/default values.", o);
            }
            const a = r && !t ? L.DEFAULT_REMOTE_FEATURES : L.DEFAULT_REMOTE_FEATURES_DISABLED;
            try {
                for (const o of Ia){
                    const i = this.processFeature(o, n, s, r, t);
                    Object.assign(a, {
                        [o]: i
                    });
                }
            } catch (o) {
                return console.warn("[Reown Config] Failed to process the configuration from Cloud. Using default values.", o), L.DEFAULT_REMOTE_FEATURES;
            }
            if (r && this.localSettingsOverridden.size > 0) {
                const o = `Your local configuration for ${Array.from(this.localSettingsOverridden).join(", ")} was ignored because a remote configuration was successfully fetched. Please manage these features via your project dashboard on dashboard.reown.com.`;
                oe.open({
                    debugMessage: de.ALERT_WARNINGS.LOCAL_CONFIGURATION_IGNORED.debugMessage(o)
                }, "warning");
            }
            return a;
        }
    };
    class Sa {
        constructor(t){
            this.chainNamespaces = [], this.features = {}, this.remoteFeatures = {}, this.reportedAlertErrors = {}, this.getCaipNetwork = (n, s)=>{
                if (n) {
                    const r = c.getCaipNetworks(n)?.find((i)=>i.id === s);
                    if (r) return r;
                    const a = c.getNetworkData(n)?.caipNetwork;
                    return a || c.getRequestedCaipNetworks(n).filter((i)=>i.chainNamespace === n)?.[0];
                }
                return c.state.activeCaipNetwork || this.defaultCaipNetwork;
            }, this.getCaipNetworkId = ()=>{
                const n = this.getCaipNetwork();
                if (n) return n.id;
            }, this.getCaipNetworks = (n)=>c.getCaipNetworks(n), this.getActiveChainNamespace = ()=>c.state.activeChain, this.setRequestedCaipNetworks = (n, s)=>{
                c.setRequestedCaipNetworks(n, s);
            }, this.getApprovedCaipNetworkIds = ()=>c.getAllApprovedCaipNetworkIds(), this.getCaipAddress = (n)=>c.state.activeChain === n || !n ? c.state.activeCaipAddress : c.state.chains.get(n)?.accountState?.caipAddress, this.setClientId = (n)=>{
                v.setClientId(n);
            }, this.getProvider = (n)=>K.getProvider(n), this.getProviderType = (n)=>K.getProviderId(n), this.getPreferredAccountType = (n)=>pe(n), this.setCaipAddress = (n, s, r = !1)=>{
                c.setAccountProp("caipAddress", n, s, r), c.setAccountProp("address", E.getPlainAddress(n), s, r);
            }, this.setBalance = (n, s, r)=>{
                c.setAccountProp("balance", n, r), c.setAccountProp("balanceSymbol", s, r);
            }, this.setProfileName = (n, s)=>{
                c.setAccountProp("profileName", n, s);
            }, this.setProfileImage = (n, s)=>{
                c.setAccountProp("profileImage", n, s);
            }, this.setUser = (n, s)=>{
                c.setAccountProp("user", n, s);
            }, this.resetAccount = (n)=>{
                c.resetAccount(n);
            }, this.setCaipNetwork = (n)=>{
                c.setActiveCaipNetwork(n);
            }, this.setCaipNetworkOfNamespace = (n, s)=>{
                c.setChainNetworkData(s, {
                    caipNetwork: n
                });
            }, this.setStatus = (n, s)=>{
                c.setAccountProp("status", n, s), m.isConnected() ? C.setConnectionStatus("connected") : C.setConnectionStatus("disconnected");
            }, this.getAddressByChainNamespace = (n)=>c.getAccountData(n)?.address, this.setConnectors = (n)=>{
                const s = [
                    ...m.state.allConnectors,
                    ...n
                ];
                m.setConnectors(s);
            }, this.setConnections = (n, s)=>{
                C.setConnections(n, s), g.setConnections(n, s);
            }, this.fetchIdentity = (n)=>v.fetchIdentity(n), this.getReownName = (n)=>ct.getNamesForAddress(n), this.getConnectors = ()=>m.getConnectors(), this.getConnectorImage = (n)=>Lt.getConnectorImage(n), this.getConnections = (n)=>this.remoteFeatures.multiWallet ? Mt.getConnectionsData(n).connections : (oe.open(h.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info"), []), this.getRecentConnections = (n)=>this.remoteFeatures.multiWallet ? Mt.getConnectionsData(n).recentConnections : (oe.open(h.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info"), []), this.switchConnection = async (n)=>{
                if (!this.remoteFeatures.multiWallet) {
                    oe.open(h.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
                    return;
                }
                await g.switchConnection(n);
            }, this.deleteConnection = (n)=>{
                if (!this.remoteFeatures.multiWallet) {
                    oe.open(h.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info");
                    return;
                }
                C.deleteAddressFromConnection(n), g.syncStorageConnections();
            }, this.setConnectedWalletInfo = (n, s)=>{
                const r = K.getProviderId(s), a = n ? {
                    ...n,
                    type: r
                } : void 0;
                c.setAccountProp("connectedWalletInfo", a, s);
            }, this.getIsConnectedState = ()=>!!c.state.activeCaipAddress, this.addAddressLabel = (n, s, r)=>{
                const a = c.getAccountData(r)?.addressLabels || {};
                c.setAccountProp("addressLabels", {
                    ...a,
                    [n]: s
                }, r);
            }, this.removeAddressLabel = (n, s)=>{
                const r = c.getAccountData(s)?.addressLabels || {};
                c.setAccountProp("addressLabels", {
                    ...r,
                    [n]: void 0
                }, s);
            }, this.getAddress = (n)=>{
                const s = n || c.state.activeChain;
                return c.getAccountData(s)?.address;
            }, this.resetNetwork = (n)=>{
                c.resetNetwork(n);
            }, this.addConnector = (n)=>{
                m.addConnector(n);
            }, this.resetWcConnection = ()=>{
                g.resetWcConnection();
            }, this.setAddressExplorerUrl = (n, s)=>{
                c.setAccountProp("addressExplorerUrl", n, s);
            }, this.setSmartAccountDeployed = (n, s)=>{
                c.setAccountProp("smartAccountDeployed", n, s);
            }, this.setPreferredAccountType = (n, s)=>{
                c.setAccountProp("preferredAccountType", n, s);
            }, this.setEIP6963Enabled = (n)=>{
                f.setEIP6963Enabled(n);
            }, this.handleUnsafeRPCRequest = ()=>{
                if (this.isOpen()) {
                    if (this.isTransactionStackEmpty()) return;
                    this.redirect("ApproveTransaction");
                } else this.open({
                    view: "ApproveTransaction"
                });
            }, this.options = t, this.version = t.sdkVersion, this.caipNetworks = this.extendCaipNetworks(t), this.chainNamespaces = this.getChainNamespacesSet(t.adapters, this.caipNetworks), this.defaultCaipNetwork = this.extendDefaultCaipNetwork(t), this.chainAdapters = this.createAdapters(t.adapters), this.readyPromise = this.initialize(t);
        }
        getChainNamespacesSet(t, n) {
            const s = t?.map((a)=>a.namespace).filter((a)=>!!a);
            if (s?.length) return [
                ...new Set(s)
            ];
            const r = n?.map((a)=>a.chainNamespace);
            return [
                ...new Set(r)
            ];
        }
        async initialize(t) {
            if (this.initializeProjectSettings(t), this.initControllers(t), await this.initChainAdapters(), this.sendInitializeEvent(t), t.features?.headless && !te.hasInjectedConnectors() && N.prefetch({
                fetchNetworkImages: !1,
                fetchConnectorImages: !1,
                fetchWalletRanks: !1,
                fetchRecommendedWallets: !0
            }), f.state.enableReconnect ? (await this.syncExistingConnection(), await this.syncAdapterConnections()) : await this.unSyncExistingConnection(), !t.basic && !t.manualWCControl && (this.remoteFeatures = await ya.fetchRemoteFeatures(t)), await N.fetchUsage(), f.setRemoteFeatures(this.remoteFeatures), this.remoteFeatures.onramp && cn.setOnrampProviders(this.remoteFeatures.onramp), (f.state.remoteFeatures?.email || Array.isArray(f.state.remoteFeatures?.socials) && f.state.remoteFeatures?.socials.length > 0) && await this.checkAllowedOrigins(), f.state.features?.reownAuthentication || f.state.remoteFeatures?.reownAuthentication) {
                const { ReownAuthentication: n } = await Ut(async ()=>{
                    const { ReownAuthentication: r } = await import("./features-BriXm9vV.js");
                    return {
                        ReownAuthentication: r
                    };
                }, __vite__mapDeps([6,1,2,0,3,4,5])), s = f.state.siwx;
                s instanceof n || (s && console.warn("ReownAuthentication option is enabled, SIWX configuration will be overridden."), f.setSIWX(new n));
            }
        }
        async openSend(t) {
            const n = t.namespace || c.state.activeChain, s = this.getCaipAddress(n), r = this.getCaipNetwork(n)?.id;
            if (!s) throw new Error("openSend: caipAddress not found");
            if (r?.toString() !== t.chainId.toString()) {
                const a = c.getCaipNetworkById(t.chainId, n);
                if (!a) throw new Error(`openSend: caipNetwork with chainId ${t.chainId} not found`);
                await this.switchNetwork(a, {
                    throwOnFailure: !0
                });
            }
            try {
                const a = gs.getTokenSymbolByAddress(t.assetAddress);
                a && await N.fetchTokenImages([
                    a
                ]);
            } catch  {}
            return await M.open({
                view: "WalletSend",
                data: {
                    send: t
                }
            }), new Promise((a, o)=>{
                const i = D.subscribeKey("hash", (u)=>{
                    u && (l(), a({
                        hash: u
                    }));
                }), d = M.subscribe((u)=>{
                    u.open || (l(), o(new Error("Modal closed")));
                }), l = this.createCleanupHandler([
                    i,
                    d
                ]);
            });
        }
        toModalOptions() {
            function t(s) {
                return s?.view === "Swap";
            }
            function n(s) {
                return s?.view === "WalletSend";
            }
            return {
                isSwap: t,
                isSend: n
            };
        }
        async checkAllowedOrigins() {
            try {
                const t = await N.fetchAllowedOrigins();
                if (!E.isClient()) return;
                const n = window.location.origin;
                De.isOriginAllowed(n, t, h.DEFAULT_ALLOWED_ANCESTORS) || oe.open(de.ALERT_ERRORS.ORIGIN_NOT_ALLOWED, "error");
            } catch (t) {
                if (!(t instanceof Error)) return;
                switch(t.message){
                    case "RATE_LIMITED":
                        oe.open(de.ALERT_ERRORS.RATE_LIMITED_APP_CONFIGURATION, "error");
                        break;
                    case "SERVER_ERROR":
                        {
                            const n = t.cause instanceof Error ? t.cause : t;
                            oe.open({
                                displayMessage: de.ALERT_ERRORS.SERVER_ERROR_APP_CONFIGURATION.displayMessage,
                                debugMessage: de.ALERT_ERRORS.SERVER_ERROR_APP_CONFIGURATION.debugMessage(n.message)
                            }, "error");
                            break;
                        }
                }
            }
        }
        createCleanupHandler(t) {
            return ()=>{
                t.forEach((n)=>{
                    try {
                        n();
                    } catch  {}
                });
            };
        }
        sendInitializeEvent(t) {
            const { ...n } = t;
            delete n.adapters, delete n.universalProvider, U.sendEvent({
                type: "track",
                event: "INITIALIZE",
                properties: {
                    ...n,
                    networks: t.networks.map((s)=>s.id),
                    siweConfig: {
                        options: t.siweConfig?.options || {}
                    }
                }
            });
        }
        initControllers(t) {
            this.initializeOptionsController(t), this.initializeChainController(t), this.initializeThemeController(t), this.initializeConnectionController(t), this.initializeConnectorController();
        }
        initAdapterController() {
            cs.initialize(this.chainAdapters);
        }
        initializeThemeController(t) {
            t.themeMode && ie.setThemeMode(t.themeMode), t.themeVariables && ie.setThemeVariables(t.themeVariables);
        }
        initializeChainController(t) {
            if (!this.connectionControllerClient) throw new Error("ConnectionControllerClient must be set");
            c.initialize(t.adapters ?? [], this.caipNetworks, {
                connectionControllerClient: this.connectionControllerClient
            });
            const n = this.getDefaultNetwork();
            n && c.setActiveCaipNetwork(n);
        }
        initializeConnectionController(t) {
            g.initialize(t.adapters ?? []), g.setWcBasic(t.basic ?? !1);
        }
        initializeConnectorController() {
            m.initialize(this.chainNamespaces);
        }
        initializeProjectSettings(t) {
            f.setProjectId(t.projectId), f.setSdkVersion(t.sdkVersion);
        }
        initializeOptionsController(t) {
            f.setDebug(t.debug !== !1), f.setEnableWalletGuide(t.enableWalletGuide !== !1), f.setEnableWallets(t.enableWallets !== !1), f.setEIP6963Enabled(t.enableEIP6963 !== !1), f.setEnableNetworkSwitch(t.enableNetworkSwitch !== !1), f.setEnableReconnect(t.enableReconnect !== !1), f.setEnableMobileFullScreen(t.enableMobileFullScreen === !0), f.setCoinbasePreference(t.coinbasePreference), f.setEnableAuthLogger(t.enableAuthLogger !== !1), f.setCustomRpcUrls(t.customRpcUrls), f.setEnableEmbedded(t.enableEmbedded), f.setAllWallets(t.allWallets), f.setIncludeWalletIds(t.includeWalletIds), f.setExcludeWalletIds(t.excludeWalletIds), f.setFeaturedWalletIds(t.featuredWalletIds), f.setTokens(t.tokens), f.setTermsConditionsUrl(t.termsConditionsUrl), f.setPrivacyPolicyUrl(t.privacyPolicyUrl), f.setCustomWallets(t.customWallets), f.setFeatures(t.features), f.setAllowUnsupportedChain(t.allowUnsupportedChain), f.setUniversalProviderConfigOverride(t.universalProviderConfigOverride), f.setPreferUniversalLinks(t.experimental_preferUniversalLinks), f.setDefaultAccountTypes(t.defaultAccountTypes);
            const n = this.getDefaultMetaData();
            if (!t.metadata && n && (t.metadata = n), f.setMetadata(t.metadata), f.setDisableAppend(t.disableAppend), f.setEnableEmbedded(t.enableEmbedded), f.setSIWX(t.siwx), this.features = f.state.features ?? {}, !t.projectId) {
                oe.open(de.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED, "error");
                return;
            }
            if (t.adapters?.find((r)=>r.namespace === h.CHAIN.EVM) && t.siweConfig) {
                if (t.siwx) throw new Error("Cannot set both `siweConfig` and `siwx` options");
                f.setSIWX(t.siweConfig.mapToSIWX());
            }
        }
        getDefaultMetaData() {
            return E.isClient() ? {
                name: document.getElementsByTagName("title")?.[0]?.textContent || "",
                description: document.querySelector('meta[property="og:description"]')?.content || "",
                url: window.location.origin,
                icons: [
                    document.querySelector('link[rel~="icon"]')?.href || ""
                ]
            } : null;
        }
        setUnsupportedNetwork(t) {
            const n = this.getActiveChainNamespace();
            if (n) {
                const s = Ze.getUnsupportedNetwork(`${n}:${t}`);
                c.setActiveCaipNetwork(s);
            }
        }
        getDefaultNetwork() {
            return Ze.getCaipNetworkFromStorage(this.defaultCaipNetwork);
        }
        extendCaipNetwork(t, n) {
            return Ze.extendCaipNetwork(t, {
                customNetworkImageUrls: n.chainImages,
                projectId: n.projectId
            });
        }
        extendCaipNetworks(t) {
            return Ze.extendCaipNetworks(t.networks, {
                customNetworkImageUrls: t.chainImages,
                customRpcUrls: t.customRpcUrls,
                projectId: t.projectId
            });
        }
        extendDefaultCaipNetwork(t) {
            const n = t.networks.find((r)=>r.id === t.defaultNetwork?.id);
            return n ? Ze.extendCaipNetwork(n, {
                customNetworkImageUrls: t.chainImages,
                customRpcUrls: t.customRpcUrls,
                projectId: t.projectId
            }) : void 0;
        }
        async disconnectConnector(t, n) {
            try {
                this.setLoading(!0, t);
                let s = {
                    connections: []
                };
                const r = this.getAdapter(t);
                return (c.state.chains.get(t)?.accountState?.caipAddress || !f.state.enableReconnect) && r?.disconnect && (s = await r.disconnect({
                    id: n
                })), this.setLoading(!1, t), s;
            } catch (s) {
                throw this.setLoading(!1, t), new Error(`Failed to disconnect chains: ${s.message}`);
            }
        }
        createClients() {
            this.connectionControllerClient = {
                connectWalletConnect: async ()=>{
                    const t = c.state.activeChain, n = this.getAdapter(t), s = this.getCaipNetwork(t)?.id, r = g.getConnections(t), a = this.remoteFeatures.multiWallet, o = r.length > 0;
                    if (!n) throw new Error("Adapter not found");
                    const i = await n.connectWalletConnect(s);
                    (!o || !a) && this.close(), this.setClientId(i?.clientId || null), C.setConnectedNamespaces([
                        ...c.state.chains.keys()
                    ]), await this.syncWalletConnectAccount(), await me.initializeIfEnabled();
                },
                connectExternal: async (t)=>{
                    const n = await this.onConnectExternal(t);
                    return await this.connectInactiveNamespaces(t, n), n ? {
                        address: n.address
                    } : void 0;
                },
                reconnectExternal: async ({ id: t, info: n, type: s, provider: r })=>{
                    const a = c.state.activeChain, o = this.getAdapter(a);
                    if (!a) throw new Error("reconnectExternal: namespace not found");
                    if (!o) throw new Error("reconnectExternal: adapter not found");
                    o?.reconnect && (await o?.reconnect({
                        id: t,
                        info: n,
                        type: s,
                        provider: r,
                        chainId: this.getCaipNetwork()?.id
                    }), C.addConnectedNamespace(a), this.syncConnectedWalletInfo(a));
                },
                disconnectConnector: async (t)=>{
                    await this.disconnectConnector(t.namespace, t.id);
                },
                disconnect: async (t)=>{
                    const { id: n, chainNamespace: s, initialDisconnect: r } = t || {}, a = s || c.state.activeChain, o = m.getConnectorId(a), i = n === h.CONNECTOR_ID.AUTH || o === h.CONNECTOR_ID.AUTH, d = n === h.CONNECTOR_ID.WALLET_CONNECT || o === h.CONNECTOR_ID.WALLET_CONNECT;
                    try {
                        const l = Array.from(c.state.chains.keys());
                        let u = s ? [
                            s
                        ] : l;
                        (d || i) && (u = l);
                        const p = u.map(async (A)=>{
                            const S = m.getConnectorId(A), k = n || S, x = await this.disconnectConnector(A, k);
                            x && (i && C.deleteConnectedSocialProvider(), x.connections.forEach((P)=>{
                                C.addDisconnectedConnectorId(P.connectorId, A);
                            })), r && this.onDisconnectNamespace({
                                chainNamespace: A,
                                closeModal: !1
                            });
                        }), b = await Promise.allSettled(p);
                        D.resetSend(), g.resetWcConnection(), me.getSIWX()?.signOutOnDisconnect && await me.clearSessions(), m.setFilterByNamespace(void 0), g.syncStorageConnections();
                        const O = b.filter((A)=>A.status === "rejected");
                        if (O.length > 0) throw new Error(O.map((A)=>A.reason.message).join(", "));
                        U.sendEvent({
                            type: "track",
                            event: "DISCONNECT_SUCCESS",
                            properties: {
                                namespace: s || "all"
                            }
                        });
                    } catch (l) {
                        throw new Error(`Failed to disconnect chains: ${l.message}`);
                    }
                },
                checkInstalled: (t)=>t ? t.some((n)=>!!window.ethereum?.[String(n)]) : !!window.ethereum,
                signMessage: async (t)=>{
                    const n = c.state.activeChain, s = this.getAdapter(c.state.activeChain);
                    if (!n) throw new Error("signMessage: namespace not found");
                    if (!s) throw new Error("signMessage: adapter not found");
                    const r = this.getAddress(n);
                    if (!r) throw new Error("signMessage: address not found");
                    return (await s?.signMessage({
                        message: t,
                        address: r,
                        provider: K.getProvider(n)
                    }))?.signature || "";
                },
                sendTransaction: async (t)=>{
                    const n = t.chainNamespace;
                    if (!n) throw new Error("sendTransaction: namespace not found");
                    if (L.SEND_SUPPORTED_NAMESPACES.includes(n)) {
                        const s = this.getAdapter(n);
                        if (!s) throw new Error("sendTransaction: adapter not found");
                        const r = K.getProvider(n);
                        return (await s?.sendTransaction({
                            ...t,
                            caipNetwork: this.getCaipNetwork(),
                            provider: r
                        }))?.hash || "";
                    }
                    return "";
                },
                estimateGas: async (t)=>{
                    const n = t.chainNamespace;
                    if (n === h.CHAIN.EVM) {
                        const s = this.getAdapter(n);
                        if (!s) throw new Error("estimateGas: adapter is required but got undefined");
                        const r = K.getProvider(n), a = this.getCaipNetwork();
                        if (!a) throw new Error("estimateGas: caipNetwork is required but got undefined");
                        return (await s?.estimateGas({
                            ...t,
                            provider: r,
                            caipNetwork: a
                        }))?.gas || 0n;
                    }
                    return 0n;
                },
                getEnsAvatar: async ()=>{
                    const t = c.state.activeChain;
                    if (!t) throw new Error("getEnsAvatar: namespace is required but got undefined");
                    const n = this.getAddress(t);
                    if (!n) throw new Error("getEnsAvatar: address not found");
                    return await this.syncIdentity({
                        address: n,
                        chainId: Number(this.getCaipNetwork()?.id),
                        chainNamespace: t
                    }), c.getAccountData()?.profileImage || !1;
                },
                getEnsAddress: async (t)=>await De.resolveReownName(t),
                writeContract: async (t)=>{
                    const n = c.state.activeChain, s = this.getAdapter(n);
                    if (!n) throw new Error("writeContract: namespace is required but got undefined");
                    if (!s) throw new Error("writeContract: adapter is required but got undefined");
                    const r = this.getCaipNetwork(), a = this.getCaipAddress(), o = K.getProvider(n);
                    if (!r || !a) throw new Error("writeContract: caipNetwork or caipAddress is required but got undefined");
                    return (await s?.writeContract({
                        ...t,
                        caipNetwork: r,
                        provider: o,
                        caipAddress: a
                    }))?.hash;
                },
                writeSolanaTransaction: async (t)=>{
                    const n = c.state.activeChain, s = this.getAdapter(n);
                    if (!n) throw new Error("writeContract: namespace is required but got undefined");
                    if (!s) throw new Error("writeContract: adapter is required but got undefined");
                    const r = this.getCaipNetwork(), a = this.getCaipAddress(), o = K.getProvider(n);
                    if (!r || !a) throw new Error("writeContract: caipNetwork or caipAddress is required but got undefined");
                    return (await s?.writeSolanaTransaction({
                        ...t,
                        caipNetwork: r,
                        provider: o,
                        caipAddress: a
                    }))?.hash;
                },
                parseUnits: (t, n)=>{
                    const s = this.getAdapter(c.state.activeChain);
                    if (!s) throw new Error("parseUnits: adapter is required but got undefined");
                    return s?.parseUnits({
                        value: t,
                        decimals: n
                    }) ?? 0n;
                },
                formatUnits: (t, n)=>{
                    const s = this.getAdapter(c.state.activeChain);
                    if (!s) throw new Error("formatUnits: adapter is required but got undefined");
                    return s?.formatUnits({
                        value: t,
                        decimals: n
                    }) ?? "0";
                },
                getCapabilities: async (t)=>{
                    const n = this.getAdapter(c.state.activeChain);
                    if (!n) throw new Error("getCapabilities: adapter is required but got undefined");
                    return await n?.getCapabilities(t);
                },
                grantPermissions: async (t)=>{
                    const n = this.getAdapter(c.state.activeChain);
                    if (!n) throw new Error("grantPermissions: adapter is required but got undefined");
                    return await n?.grantPermissions(t);
                },
                revokePermissions: async (t)=>{
                    const n = this.getAdapter(c.state.activeChain);
                    if (!n) throw new Error("revokePermissions: adapter is required but got undefined");
                    return n?.revokePermissions ? await n.revokePermissions(t) : "0x";
                },
                walletGetAssets: async (t)=>{
                    const n = this.getAdapter(c.state.activeChain);
                    if (!n) throw new Error("walletGetAssets: adapter is required but got undefined");
                    return await n?.walletGetAssets(t) ?? {};
                },
                updateBalance: (t)=>{
                    const n = this.getAddress(t), s = this.getCaipNetwork(t);
                    !s || !n || this.updateNativeBalance(n, s?.id, t);
                }
            }, g.setClient(this.connectionControllerClient);
        }
        async onConnectExternal(t) {
            const n = c.state.activeChain, s = t.chain || n, r = this.getAdapter(s);
            let a = !0;
            if (t.type === _e.CONNECTOR_TYPE_AUTH && h.AUTH_CONNECTOR_SUPPORTED_CHAINS.some((p)=>m.getConnectorId(p) === h.CONNECTOR_ID.AUTH) && t.chain !== n && (a = !1), t.chain && t.chain !== n && !t.caipNetwork) {
                const l = this.getCaipNetworks().find((u)=>u.chainNamespace === t.chain);
                l && a && this.setCaipNetwork(l);
            }
            if (!s) throw new Error("connectExternal: namespace not found");
            if (!r) throw new Error("connectExternal: adapter not found");
            const o = this.getCaipNetwork(s), i = t.caipNetwork || o, d = await r.connect({
                id: t.id,
                address: t.address,
                info: t.info,
                type: t.type,
                provider: t.provider,
                socialUri: t.socialUri,
                chainId: t.caipNetwork?.id || o?.id,
                rpcUrl: t.caipNetwork?.rpcUrls?.default?.http?.[0] || o?.rpcUrls?.default?.http?.[0]
            });
            if (d) return C.addConnectedNamespace(s), this.syncProvider({
                ...d,
                chainNamespace: s
            }), this.setStatus("connected", s), this.syncConnectedWalletInfo(s), C.removeDisconnectedConnectorId(t.id, s), {
                address: d.address,
                connectedCaipNetwork: i
            };
        }
        async connectInactiveNamespaces(t, n) {
            const s = t.type === _e.CONNECTOR_TYPE_AUTH, r = hn.getOtherAuthNamespaces(n?.connectedCaipNetwork?.chainNamespace), a = c.state.activeCaipNetwork, o = this.getAdapter(a?.chainNamespace);
            s && (await Promise.all(r.map(async (i)=>{
                try {
                    const d = K.getProvider(i), l = this.getCaipNetwork(i);
                    await this.getAdapter(i)?.connect({
                        ...t,
                        provider: d,
                        socialUri: void 0,
                        chainId: l?.id,
                        rpcUrl: l?.rpcUrls?.default?.http?.[0]
                    }) && (C.addConnectedNamespace(i), C.removeDisconnectedConnectorId(t.id, i), this.setStatus("connected", i), this.syncConnectedWalletInfo(i));
                } catch (d) {
                    oe.warn(de.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.displayMessage, de.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.debugMessage(i, d instanceof Error ? d.message : void 0), de.ALERT_WARNINGS.INACTIVE_NAMESPACE_NOT_CONNECTED.code);
                }
            })), a && await o?.switchNetwork({
                caipNetwork: a
            }));
        }
        getApprovedCaipNetworksData() {
            if (K.getProviderId(c.state.activeChain) === _e.CONNECTOR_TYPE_WALLET_CONNECT) {
                const n = this.universalProvider?.session?.namespaces;
                return {
                    supportsAllNetworks: this.universalProvider?.session?.peer?.metadata.name === "MetaMask Wallet",
                    approvedCaipNetworkIds: this.getChainsFromNamespaces(n)
                };
            }
            return {
                supportsAllNetworks: !0,
                approvedCaipNetworkIds: []
            };
        }
        async switchCaipNetwork(t) {
            const n = t.chainNamespace;
            if (this.getAddressByChainNamespace(t.chainNamespace)) {
                const r = K.getProviderId(n);
                if (t.chainNamespace === c.state.activeChain) await this.getAdapter(n)?.switchNetwork({
                    caipNetwork: t
                });
                else if (this.setCaipNetwork(t), r === _e.CONNECTOR_TYPE_WALLET_CONNECT) this.syncWalletConnectAccount();
                else {
                    const a = this.getAddressByChainNamespace(n);
                    a && this.syncAccount({
                        address: a,
                        chainId: t.id,
                        chainNamespace: n
                    });
                }
            } else this.setCaipNetwork(t);
        }
        getChainsFromNamespaces(t = {}) {
            return Object.values(t).flatMap((n)=>{
                const s = n.chains || [], r = n.accounts.map((a)=>{
                    const { chainId: o, chainNamespace: i } = J.parseCaipAddress(a);
                    return `${i}:${o}`;
                });
                return Array.from(new Set([
                    ...s,
                    ...r
                ]));
            });
        }
        createAdapters(t) {
            return this.createClients(), this.chainNamespaces.reduce((n, s)=>{
                const r = t?.find((a)=>a.namespace === s);
                return r ? (r.construct({
                    namespace: s,
                    projectId: this.options?.projectId,
                    networks: this.caipNetworks?.filter(({ chainNamespace: a })=>a === s)
                }), n[s] = r) : n[s] = new ba({
                    namespace: s,
                    networks: this.getCaipNetworks()
                }), n;
            }, {});
        }
        async initChainAdapter(t) {
            this.onConnectors(t), this.listenAdapter(t);
            const n = this.getAdapter(t);
            if (!n) throw new Error("adapter not found");
            await n.syncConnectors(), await this.createUniversalProviderForAdapter(t);
        }
        async initChainAdapters() {
            await Promise.all(this.chainNamespaces.map(async (t)=>{
                await this.initChainAdapter(t);
            })), this.initAdapterController();
        }
        onConnectors(t) {
            this.getAdapter(t)?.on("connectors", this.setConnectors.bind(this));
        }
        listenAdapter(t) {
            const n = this.getAdapter(t);
            if (!n) return;
            const s = C.getConnectionStatus();
            f.state.enableReconnect === !1 ? this.setStatus("disconnected", t) : s === "connected" ? this.setStatus("connecting", t) : s === "disconnected" ? (C.clearAddressCache(), this.setStatus(s, t)) : this.setStatus(s, t), n.on("switchNetwork", ({ address: r, chainId: a })=>{
                const o = this.getCaipNetworks().find((l)=>l.id.toString() === a.toString() || l.caipNetworkId.toString() === a.toString()), i = c.state.activeChain === t, d = c.state.chains.get(t)?.accountState?.address;
                if (o) {
                    const l = i && r ? r : d;
                    l && this.syncAccount({
                        address: l,
                        chainId: o.id,
                        chainNamespace: t
                    });
                } else this.setUnsupportedNetwork(a);
            }), n.on("disconnect", ()=>{
                const r = this.remoteFeatures.multiWallet, a = Array.from(g.state.connections.values()).flat();
                this.onDisconnectNamespace({
                    chainNamespace: t,
                    closeModal: !r || a.length === 0
                });
            }), n.on("connections", (r)=>{
                this.setConnections(r, t);
            }), n.on("pendingTransactions", ()=>{
                const r = this.getAddress(t), a = c.state.activeCaipNetwork;
                !r || !a?.id || this.updateNativeBalance(r, a.id, a.chainNamespace);
            }), n.on("accountChanged", ({ address: r, chainId: a, connector: o })=>{
                this.handlePreviousConnectorConnection(o);
                const i = c.state.activeChain === t;
                o?.provider && (this.syncProvider({
                    id: o.id,
                    type: o.type,
                    provider: o?.provider,
                    chainNamespace: t
                }), this.syncConnectedWalletInfo(t));
                const d = c.getNetworkData(t)?.caipNetwork?.id, l = a || d;
                i && l ? this.syncAccount({
                    address: r,
                    chainId: l,
                    chainNamespace: t
                }) : !i && l ? (this.syncAccountInfo(r, l, t), this.syncBalance({
                    address: r,
                    chainId: l,
                    chainNamespace: t
                })) : this.syncAccountInfo(r, a, t), C.addConnectedNamespace(t);
            });
        }
        async handlePreviousConnectorConnection(t) {
            const n = t?.chain, s = t?.id, r = m.getConnectorId(n), a = f.state.remoteFeatures?.multiWallet, i = n && s && r && r !== s && !a;
            try {
                i && await g.disconnect({
                    id: r,
                    namespace: n
                });
            } catch (d) {
                console.warn("Error disconnecting previous connector", d);
            }
        }
        async createUniversalProviderForAdapter(t) {
            await this.getUniversalProvider(), this.universalProvider && await this.chainAdapters?.[t]?.setUniversalProvider?.(this.universalProvider);
        }
        async syncExistingConnection() {
            await Promise.allSettled(this.chainNamespaces.map((t)=>this.syncNamespaceConnection(t)));
        }
        async unSyncExistingConnection() {
            try {
                await Promise.allSettled(this.chainNamespaces.map((t)=>g.disconnect({
                        namespace: t,
                        initialDisconnect: !0
                    })));
            } catch (t) {
                console.error("Error disconnecting existing connections:", t);
            }
        }
        async reconnectWalletConnect() {
            await this.syncWalletConnectAccount();
            const t = this.getAddress();
            this.getCaipAddress() || C.deleteRecentWallet();
            const n = C.getRecentWallet();
            U.sendEvent({
                type: "track",
                event: "CONNECT_SUCCESS",
                address: t,
                properties: {
                    method: E.isMobile() ? "mobile" : "qrcode",
                    name: n?.name || "Unknown",
                    reconnect: !0,
                    view: T.state.view,
                    walletRank: n?.order
                }
            });
        }
        async syncNamespaceConnection(t) {
            try {
                t === h.CHAIN.EVM && E.isSafeApp() && m.setConnectorId(h.CONNECTOR_ID.SAFE, t);
                const n = m.getConnectorId(t);
                switch(this.setStatus("connecting", t), n){
                    case h.CONNECTOR_ID.WALLET_CONNECT:
                        await this.reconnectWalletConnect();
                        break;
                    case h.CONNECTOR_ID.AUTH:
                        break;
                    default:
                        await this.syncAdapterConnection(t);
                }
            } catch (n) {
                console.warn("AppKit couldn't sync existing connection", n), this.setStatus("disconnected", t);
            }
        }
        onDisconnectNamespace(t) {
            const { chainNamespace: n, closeModal: s } = t || {};
            c.resetAccount(n), c.resetNetwork(n), C.removeConnectedNamespace(n);
            const r = Array.from(c.state.chains.keys());
            (n ? [
                n
            ] : r).forEach((o)=>C.addDisconnectedConnectorId(m.getConnectorId(o) || "", o)), m.removeConnectorId(n), K.resetChain(n), this.setUser(null, n), this.setStatus("disconnected", n), this.setConnectedWalletInfo(null, n), s !== !1 && M.close();
        }
        async syncAdapterConnections() {
            await Promise.allSettled(this.chainNamespaces.map((t)=>{
                const n = this.getAdapter(t), s = this.getCaipAddress(t), r = this.getCaipNetwork(t);
                return n?.syncConnections({
                    connectToFirstConnector: !s,
                    caipNetwork: r
                });
            }));
        }
        async syncAdapterConnection(t) {
            const n = this.getAdapter(t), s = this.getCaipNetwork(t), r = m.getConnectorId(t), o = m.getConnectors(t).find((i)=>i.id === r);
            try {
                if (!n || !o) throw new Error(`Adapter or connector not found for namespace ${t}`);
                if (!s?.id) throw new Error("CaipNetwork not found");
                const i = await n?.syncConnection({
                    namespace: t,
                    id: o.id,
                    chainId: s.id,
                    rpcUrl: s?.rpcUrls?.default?.http?.[0]
                });
                i ? (this.syncProvider({
                    ...i,
                    chainNamespace: t
                }), await this.syncAccount({
                    ...i,
                    chainNamespace: t
                }), this.setStatus("connected", t), U.sendEvent({
                    type: "track",
                    event: "CONNECT_SUCCESS",
                    address: i.address,
                    properties: {
                        method: "browser",
                        name: o.info?.name || o.name || "Unknown",
                        reconnect: !0,
                        view: T.state.view,
                        walletRank: o?.explorerWallet?.order
                    }
                })) : this.setStatus("disconnected", t);
            } catch  {
                this.onDisconnectNamespace({
                    chainNamespace: t,
                    closeModal: !1
                });
            }
        }
        async syncWalletConnectAccount() {
            const t = Object.keys(this.universalProvider?.session?.namespaces || {}), n = this.chainNamespaces.map(async (s)=>{
                const r = this.getAdapter(s);
                if (!r) return;
                const a = this.universalProvider?.session?.namespaces?.[s]?.accounts || [], o = c.state.activeCaipNetwork?.id, i = a.find((l)=>{
                    const { chainId: u } = J.parseCaipAddress(l);
                    return u === o?.toString();
                }) || a[0];
                if (i) {
                    const l = J.validateCaipAddress(i), { chainId: u, address: p } = J.parseCaipAddress(l);
                    if (K.setProviderId(s, _e.CONNECTOR_TYPE_WALLET_CONNECT), this.caipNetworks && c.state.activeCaipNetwork && r.namespace !== h.CHAIN.EVM) {
                        const b = r.getWalletConnectProvider({
                            caipNetworks: this.getCaipNetworks(),
                            provider: this.universalProvider,
                            activeCaipNetwork: c.state.activeCaipNetwork
                        });
                        K.setProvider(s, b);
                    } else K.setProvider(s, this.universalProvider);
                    m.setConnectorId(h.CONNECTOR_ID.WALLET_CONNECT, s), C.addConnectedNamespace(s), await this.syncAccount({
                        address: p,
                        chainId: u,
                        chainNamespace: s
                    });
                } else t.includes(s) && this.setStatus("disconnected", s);
                const d = this.getApprovedCaipNetworksData();
                this.syncConnectedWalletInfo(s), c.setApprovedCaipNetworksData(s, {
                    approvedCaipNetworkIds: d.approvedCaipNetworkIds,
                    supportsAllNetworks: d.supportsAllNetworks
                });
            });
            await Promise.all(n);
        }
        syncProvider({ type: t, provider: n, id: s, chainNamespace: r }) {
            K.setProviderId(r, t), K.setProvider(r, n), m.setConnectorId(s, r);
        }
        async syncAccount(t) {
            const n = t.chainNamespace === c.state.activeChain, s = c.getCaipNetworkByNamespace(t.chainNamespace, t.chainId), { address: r, chainId: a, chainNamespace: o } = t, { chainId: i } = C.getActiveNetworkProps(), d = s?.id || i, l = c.state.activeCaipNetwork?.name === h.UNSUPPORTED_NETWORK_NAME, u = c.getNetworkProp("supportsAllNetworks", o);
            if (this.setStatus("connected", o), !(l && !u) && d) {
                let p = this.getCaipNetworks().find((S)=>S.id.toString() === d.toString()), b = this.getCaipNetworks().find((S)=>S.chainNamespace === o);
                if (!u && !p && !b) {
                    const S = this.getApprovedCaipNetworkIds() || [], k = S.find((P)=>J.parseCaipNetworkId(P)?.chainId === d.toString()), x = S.find((P)=>J.parseCaipNetworkId(P)?.chainNamespace === o);
                    p = this.getCaipNetworks().find((P)=>P.caipNetworkId === k), b = this.getCaipNetworks().find((P)=>P.caipNetworkId === x || "deprecatedCaipNetworkId" in P && P.deprecatedCaipNetworkId === x);
                }
                const O = p || b;
                O?.chainNamespace === c.state.activeChain ? f.state.enableNetworkSwitch && !f.state.allowUnsupportedChain && c.state.activeCaipNetwork?.name === h.UNSUPPORTED_NETWORK_NAME ? c.showUnsupportedChainUI() : this.setCaipNetwork(O) : n || s && this.setCaipNetworkOfNamespace(s, o), this.syncConnectedWalletInfo(o);
                const A = this.getAddress(o);
                hn.isLowerCaseMatch(r, A) || this.syncAccountInfo(r, O?.id, o), n ? await this.syncBalance({
                    address: r,
                    chainId: O?.id,
                    chainNamespace: o
                }) : await this.syncBalance({
                    address: r,
                    chainId: s?.id,
                    chainNamespace: o
                }), this.syncIdentity({
                    address: r,
                    chainId: a,
                    chainNamespace: o
                });
            }
        }
        async syncAccountInfo(t, n, s) {
            const r = this.getCaipAddress(s), a = n || r?.split(":")[1];
            if (!a) return;
            const o = `${s}:${a}:${t}`;
            this.setCaipAddress(o, s, !0), await this.syncIdentity({
                address: t,
                chainId: a,
                chainNamespace: s
            });
        }
        async syncReownName(t, n) {
            try {
                const s = await this.getReownName(t);
                if (s[0]) {
                    const r = s[0];
                    this.setProfileName(r.name, n);
                } else this.setProfileName(null, n);
            } catch  {
                this.setProfileName(null, n);
            }
        }
        syncConnectedWalletInfo(t) {
            const n = m.getConnectorId(t), s = K.getProviderId(t);
            if (s === _e.CONNECTOR_TYPE_ANNOUNCED || s === _e.CONNECTOR_TYPE_INJECTED) {
                if (n) {
                    const a = this.getConnectors().find((o)=>{
                        const i = o.id === n, d = o.info?.rdns === n, l = o.connectors?.some((u)=>u.id === n || u.info?.rdns === n);
                        return i || d || !!l;
                    });
                    if (a) {
                        const { info: o, name: i, imageUrl: d } = a, l = d || this.getConnectorImage(a);
                        this.setConnectedWalletInfo({
                            name: i,
                            icon: l,
                            ...o
                        }, t);
                    }
                }
            } else if (s === _e.CONNECTOR_TYPE_WALLET_CONNECT) {
                const r = K.getProvider(t);
                r?.session && this.setConnectedWalletInfo({
                    ...r.session.peer.metadata,
                    name: r.session.peer.metadata.name,
                    icon: r.session.peer.metadata.icons?.[0]
                }, t);
            } else if (n && (n === h.CONNECTOR_ID.COINBASE_SDK || n === h.CONNECTOR_ID.COINBASE)) {
                const r = this.getConnectors().find((d)=>d.id === n), a = r?.name || "Coinbase Wallet", o = r?.imageUrl || this.getConnectorImage(r), i = r?.info;
                this.setConnectedWalletInfo({
                    ...i,
                    name: a,
                    icon: o
                }, t);
            }
        }
        async syncBalance(t) {
            !Xn.getNetworksByNamespace(this.getCaipNetworks(), t.chainNamespace).find((s)=>s.id.toString() === t.chainId?.toString()) || !t.chainId || await this.updateNativeBalance(t.address, t.chainId, t.chainNamespace);
        }
        async ready() {
            await this.readyPromise;
        }
        async updateNativeBalance(t, n, s) {
            const r = this.getAdapter(s), a = c.getCaipNetworkByNamespace(s, n);
            if (r) {
                const o = await r.getBalance({
                    address: t,
                    chainId: n,
                    caipNetwork: a,
                    tokens: this.options.tokens
                });
                return this.setBalance(o.balance, o.symbol, s), o;
            }
        }
        async initializeUniversalAdapter() {
            const t = Na.createLogger((r, ...a)=>{
                r && this.handleAlertError(r), console.error(...a);
            }), n = {
                projectId: this.options?.projectId,
                metadata: {
                    name: this.options?.metadata ? this.options?.metadata.name : "",
                    description: this.options?.metadata ? this.options?.metadata.description : "",
                    url: this.options?.metadata ? this.options?.metadata.url : "",
                    icons: this.options?.metadata ? this.options?.metadata.icons : [
                        ""
                    ]
                },
                logger: t
            };
            f.setManualWCControl(!!this.options?.manualWCControl), this.universalProvider = this.options.universalProvider ?? await Is.init(n);
            const s = this.universalProvider.disconnect.bind(this.universalProvider);
            this.universalProvider.disconnect = async ()=>{
                try {
                    return await s();
                } catch (r) {
                    if (r instanceof Error && r.message.includes("Missing or invalid. Record was recently deleted")) return;
                    throw r;
                }
            }, f.state.enableReconnect === !1 && this.universalProvider.session && await this.universalProvider.disconnect(), this.listenWalletConnect();
        }
        listenWalletConnect() {
            this.universalProvider && this.chainNamespaces.forEach((t)=>{
                De.listenWcProvider({
                    universalProvider: this.universalProvider,
                    namespace: t,
                    onDisplayUri: (n)=>{
                        g.setUri(n);
                    },
                    onConnect: (n)=>{
                        const { address: s } = E.getAccount(n[0]);
                        for (const r of this.chainNamespaces)C.removeDisconnectedConnectorId(h.CONNECTOR_ID.WALLET_CONNECT, r);
                        g.finalizeWcConnection(s);
                    },
                    onDisconnect: ()=>{
                        c.state.noAdapters && this.resetAccount(t), g.resetWcConnection();
                    },
                    onChainChanged: (n)=>{
                        const s = c.state.activeChain, r = s && m.state.activeConnectorIds[s] === h.CONNECTOR_ID.WALLET_CONNECT;
                        if (s === t && (c.state.noAdapters || r)) {
                            const a = this.getCaipNetworks().find((i)=>i.id.toString() === n.toString() || i.caipNetworkId.toString() === n.toString()), o = this.getCaipNetwork();
                            if (!a) {
                                this.setUnsupportedNetwork(n);
                                return;
                            }
                            o?.id.toString() !== a?.id.toString() && o?.chainNamespace === a?.chainNamespace && this.setCaipNetwork(a);
                        }
                    },
                    onAccountsChanged: (n)=>{
                        const s = c.state.activeChain, r = s && m.state.activeConnectorIds[s] === h.CONNECTOR_ID.WALLET_CONNECT;
                        if (s === t && (c.state.noAdapters || r)) {
                            const a = n?.[0];
                            a && this.syncAccount({
                                address: a.address,
                                chainId: a.chainId,
                                chainNamespace: a.chainNamespace
                            });
                        }
                    }
                });
            });
        }
        createUniversalProvider() {
            return !this.universalProviderInitPromise && E.isClient() && this.options?.projectId && (this.universalProviderInitPromise = this.initializeUniversalAdapter()), this.universalProviderInitPromise;
        }
        async getUniversalProvider() {
            if (!this.universalProvider) try {
                await this.createUniversalProvider();
            } catch (t) {
                U.sendEvent({
                    type: "error",
                    event: "INTERNAL_SDK_ERROR",
                    properties: {
                        errorType: "UniversalProviderInitError",
                        errorMessage: t instanceof Error ? t.message : "Unknown",
                        uncaught: !1
                    }
                }), console.error("AppKit:getUniversalProvider - Cannot create provider", t);
            }
            return this.universalProvider;
        }
        getDisabledCaipNetworks() {
            const t = c.getAllApprovedCaipNetworkIds(), n = c.getAllRequestedCaipNetworks();
            return E.sortRequestedNetworks(t, n).filter((r)=>c.isCaipNetworkDisabled(r));
        }
        handleAlertError(t) {
            const n = Object.entries(de.UniversalProviderErrors).find(([, { message: i }])=>t.message.includes(i)), [s, r] = n ?? [], { message: a, alertErrorKey: o } = r ?? {};
            if (s && a && !this.reportedAlertErrors[s]) {
                const i = de.ALERT_ERRORS[o];
                i && (oe.open(i, "error"), this.reportedAlertErrors[s] = !0);
            }
        }
        getAdapter(t) {
            if (t) return this.chainAdapters?.[t];
        }
        createAdapter(t) {
            if (!t) return;
            const n = t.namespace;
            if (!n) return;
            this.createClients();
            const s = t;
            s.namespace = n, s.construct({
                namespace: n,
                projectId: this.options?.projectId,
                networks: this.caipNetworks?.filter(({ chainNamespace: r })=>r === n)
            }), this.chainNamespaces.includes(n) || this.chainNamespaces.push(n), this.chainAdapters && (this.chainAdapters[n] = s);
        }
        async open(t) {
            await this.injectModalUi(), t?.uri && g.setUri(t.uri);
            const { isSwap: n, isSend: s } = this.toModalOptions();
            return n(t) ? M.open({
                ...t,
                data: {
                    swap: t.arguments
                }
            }) : s(t) && t.arguments ? this.openSend(t.arguments) : M.open(t);
        }
        async close() {
            await this.injectModalUi(), M.close();
        }
        setLoading(t, n) {
            M.setLoading(t, n);
        }
        async disconnect(t) {
            await g.disconnect({
                namespace: t
            });
        }
        getSIWX() {
            return f.state.siwx;
        }
        getError() {
            return "";
        }
        getChainId() {
            return c.state.activeCaipNetwork?.id;
        }
        async switchNetwork(t, { throwOnFailure: n = !1 } = {}) {
            const s = this.getCaipNetworks().find((r)=>r.id === t.id);
            if (!s) {
                oe.open(de.ALERT_ERRORS.SWITCH_NETWORK_NOT_FOUND, "error");
                return;
            }
            await c.switchActiveNetwork(s, {
                throwOnFailure: n
            });
        }
        getWalletProvider() {
            return c.state.activeChain ? K.state.providers[c.state.activeChain] : null;
        }
        getWalletProviderType() {
            return K.getProviderId(c.state.activeChain);
        }
        subscribeProviders(t) {
            return K.subscribeProviders(t);
        }
        getThemeMode() {
            return ie.state.themeMode;
        }
        getThemeVariables() {
            return ie.state.themeVariables;
        }
        setThemeMode(t) {
            ie.setThemeMode(t), pn(ie.state.themeMode);
        }
        setTermsConditionsUrl(t) {
            f.setTermsConditionsUrl(t);
        }
        setPrivacyPolicyUrl(t) {
            f.setPrivacyPolicyUrl(t);
        }
        setThemeVariables(t) {
            ie.setThemeVariables(t), ga(ie.state.themeVariables);
        }
        subscribeTheme(t) {
            return ie.subscribe(t);
        }
        subscribeConnections(t) {
            return this.remoteFeatures.multiWallet ? g.subscribe(t) : (oe.open(h.REMOTE_FEATURES_ALERTS.MULTI_WALLET_NOT_ENABLED.DEFAULT, "info"), ()=>{});
        }
        getWalletInfo(t) {
            return t ? c.state.chains.get(t)?.accountState?.connectedWalletInfo : c.getAccountData()?.connectedWalletInfo;
        }
        getAccount(t) {
            const n = t || c.state.activeChain, s = m.getAuthConnector(n), r = c.getAccountData(n), a = C.getConnectedConnectorId(c.state.activeChain), o = g.getConnections(n);
            if (!n) throw new Error("AppKit:getAccount - namespace is required");
            const i = o.flatMap((d)=>d.accounts.map(({ address: l, type: u, publicKey: p })=>E.createAccount(n, l, u || "eoa", p)));
            if (r) return {
                allAccounts: i,
                caipAddress: r.caipAddress,
                address: E.getPlainAddress(r.caipAddress),
                isConnected: !!r.caipAddress,
                status: r.status,
                embeddedWalletInfo: s && a === h.CONNECTOR_ID.AUTH ? {
                    user: r.user ? {
                        ...r.user,
                        username: C.getConnectedSocialUsername()
                    } : void 0,
                    authProvider: r.socialProvider || "email",
                    accountType: pe(n),
                    isSmartAccountDeployed: !!r.smartAccountDeployed
                } : void 0
            };
        }
        subscribeAccount(t, n) {
            const s = [], r = ()=>{
                const o = this.getAccount(n);
                o && t(o);
            };
            if (n) {
                const o = c.subscribeChainProp("accountState", r, n);
                s.push(o);
            } else {
                const o = c.subscribe(r);
                s.push(o);
            }
            const a = m.subscribe(r);
            return s.push(a), ()=>{
                s.forEach((o)=>o());
            };
        }
        subscribeNetwork(t) {
            return c.subscribe(({ activeCaipNetwork: n })=>{
                t({
                    caipNetwork: n,
                    chainId: n?.id,
                    caipNetworkId: n?.caipNetworkId
                });
            });
        }
        subscribeWalletInfo(t, n) {
            return n ? c.subscribeChainProp("accountState", (s)=>t(s?.connectedWalletInfo), n) : c.subscribeChainProp("accountState", (s)=>t(s?.connectedWalletInfo));
        }
        subscribeShouldUpdateToAddress(t) {
            return c.subscribeChainProp("accountState", (n)=>t(n?.shouldUpdateToAddress));
        }
        subscribeCaipNetworkChange(t) {
            return c.subscribeKey("activeCaipNetwork", t);
        }
        getState() {
            return we.state;
        }
        getRemoteFeatures() {
            return f.state.remoteFeatures;
        }
        subscribeState(t) {
            return we.subscribe(t);
        }
        subscribeRemoteFeatures(t) {
            return f.subscribeKey("remoteFeatures", t);
        }
        showErrorMessage(t) {
            Ae.showError(t);
        }
        showSuccessMessage(t) {
            Ae.showSuccess(t);
        }
        getEvent() {
            return {
                ...U.state
            };
        }
        subscribeEvents(t) {
            return U.subscribe(t);
        }
        replace(t) {
            T.replace(t);
        }
        redirect(t) {
            T.push(t);
        }
        popTransactionStack(t) {
            T.popTransactionStack(t);
        }
        isOpen() {
            return M.state.open;
        }
        isTransactionStackEmpty() {
            return T.state.transactionStack.length === 0;
        }
        static getInstance() {
            return this.instance;
        }
        updateFeatures(t) {
            f.setFeatures(t);
        }
        updateRemoteFeatures(t) {
            f.setRemoteFeatures(t);
        }
        updateOptions(t) {
            const s = {
                ...f.state || {},
                ...t
            };
            f.setOptions(s);
        }
        setConnectMethodsOrder(t) {
            f.setConnectMethodsOrder(t);
        }
        setWalletFeaturesOrder(t) {
            f.setWalletFeaturesOrder(t);
        }
        setCollapseWallets(t) {
            f.setCollapseWallets(t);
        }
        setSocialsOrder(t) {
            f.setSocialsOrder(t);
        }
        getConnectMethodsOrder() {
            return Ue.getConnectOrderMethod(f.state.features, m.getConnectors());
        }
        addNetwork(t, n) {
            if (this.chainAdapters && !this.chainAdapters[t]) throw new Error(`Adapter for namespace ${t} doesn't exist`);
            const s = this.extendCaipNetwork(n, this.options);
            this.getCaipNetworks().find((r)=>r.id === s.id) || c.addNetwork(s);
        }
        removeNetwork(t, n) {
            if (this.chainAdapters && !this.chainAdapters[t]) throw new Error(`Adapter for namespace ${t} doesn't exist`);
            this.getCaipNetworks().find((r)=>r.id === n) && c.removeNetwork(t, n);
        }
    }
    let Gn = !1;
    class ws extends Sa {
        async open(t) {
            m.isConnected() || await super.open(t);
        }
        async close() {
            if (await super.close(), this.options.manualWCControl) {
                const t = c.getAccountData(this.activeChainNamespace)?.address;
                g.finalizeWcConnection(t);
            }
        }
        async syncIdentity(t) {
            return Promise.resolve();
        }
        async syncBalance(t) {
            return Promise.resolve();
        }
        async injectModalUi() {
            if (!Gn && E.isClient()) {
                if (await Ut(()=>import("./basic-BAc7ZafT.js"), __vite__mapDeps([7,8,1,2,9,3,4,5,0])), await Ut(()=>import("./w3m-modal-CKywMyBY.js"), __vite__mapDeps([10,8,1,2,0,3,4,5])), !document.querySelector("w3m-modal")) {
                    const n = document.createElement("w3m-modal");
                    !f.state.disableAppend && !f.state.enableEmbedded && document.body.insertAdjacentElement("beforeend", n);
                }
                Gn = !0;
            }
        }
    }
    const _a = "1.8.17-wc-circular-dependencies-fix.0";
    function Ta(e) {
        return new ws({
            ...e,
            basic: !0,
            sdkVersion: `html-core-${_a}`
        });
    }
    Ba = Object.freeze(Object.defineProperty({
        __proto__: null,
        AppKit: ws,
        createAppKit: Ta
    }, Symbol.toStringTag, {
        value: "Module"
    }));
});
export { Ma as $, Y as A, Cn as B, Ze as C, Ua as D, tt as E, wt as F, Ba as G, hn as H, xa as I, Wa as J, us as K, It as L, M, Xn as N, f as O, J as P, is as Q, T as R, me as S, ie as T, Oa as U, pe as V, ve as W, Pt as X, Re as Y, La as Z, V as _, cs as a, X as a0, Q as a1, ln as a2, ma as a3, Da as a4, he as a5, oe as b, N as c, Ke as d, ue as e, Lt as f, v as g, c as h, g as i, Mt as j, m as k, te as l, h as m, L as n, xs as o, E as p, ke as q, U as r, ts as s, K as t, I as u, y as v, Ae as w, C as x, Ar as y, Ue as z, __tla };
