const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/qr-utils-Cc6U-Akc.js","assets/element-plus-CTp1djr_.js","assets/vue-core-DHcoxuim.js","assets/element-plus-CqJ-3YyC.css"])))=>i.map(i=>d[i]);
import { _ as o, __tla as __tla_0 } from "./pdf-utils-CDJbbqXy.js";
let a, n;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    a = {
        SECURITY: [
            {
                name: "openpgp",
                loader: ()=>o(()=>import("./openpgp-DrHuyQ_D.js"), []),
                probe: "openpgp"
            },
            {
                name: "libsodium",
                loader: ()=>o(()=>import("./libsodium-wrappers-DPx9QiDt.js"), []),
                probe: "sodium"
            },
            {
                name: "hash-wasm",
                loader: ()=>o(()=>import("./hash-wasm-Dup_VHWH.js"), []),
                probe: "hash-wasm"
            }
        ],
        UTILITIES: [
            {
                name: "qrcode",
                loader: ()=>o(()=>import("./qr-utils-Cc6U-Akc.js").then((r)=>r.b), __vite__mapDeps([0,1,2,3])),
                probes: [
                    "qrcode",
                    "qrparser",
                    "vaultservice",
                    "login"
                ]
            },
            {
                name: "jsqr",
                loader: ()=>o(()=>import("./qr-utils-Cc6U-Akc.js").then((r)=>r.j), __vite__mapDeps([0,1,2,3])),
                probes: [
                    "jsqr",
                    "qrparser",
                    "datamigration"
                ]
            },
            {
                name: "fflate",
                loader: ()=>o(()=>import("./compression-utils-BzBbrBKd.js"), []),
                probes: [
                    "fflate",
                    "pako",
                    "zlib",
                    "datamigration"
                ]
            }
        ],
        ENGINES: [
            {
                name: "argon2",
                url: "/argon2.wasm",
                probe: "argon2"
            }
        ]
    };
    n = async function(r) {
        const e = [
            ...a.SECURITY,
            ...a.UTILITIES
        ].find((_)=>_.name === r);
        if (!e || !e.loader) throw new Error(`Resource '${r}' not found in registry.`);
        return await e.loader();
    };
});
export { a as O, n as l, __tla };
