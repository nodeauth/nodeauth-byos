const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CVsR1xBn.js","assets/pdf-utils-BCRGp2im.js","assets/compression-utils-BzBbrBKd.js","assets/vue-core-DW8rIolU.js","assets/element-plus-CCPnjKpy.js","assets/element-plus-CqJ-3YyC.css","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-CWdaVIeG.js","assets/index-CeTN7Y2W.css"])))=>i.map(i=>d[i]);
import { _ as s, __tla as __tla_0 } from "./pdf-utils-BCRGp2im.js";
import { s as u, a as c, b as d } from "./simplewebauthn-3qpiAaRi.js";
import { B as a, __tla as __tla_1 } from "./index-CVsR1xBn.js";
let l;
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
    l = {
        isSupported () {
            return d();
        },
        async register (t) {
            const e = await a("/api/oauth/webauthn/register/options"), i = await c(e);
            return await a("/api/oauth/webauthn/register/verify", {
                method: "POST",
                body: JSON.stringify({
                    name: t,
                    response: i
                })
            });
        },
        async login () {
            const t = await a("/api/oauth/webauthn/login/options"), e = await u(t), { getDeviceId: i } = await s(async ()=>{
                const { getDeviceId: r } = await import("./index-CVsR1xBn.js").then(async (m)=>{
                    await m.__tla;
                    return m;
                }).then((o)=>o.p);
                return {
                    getDeviceId: r
                };
            }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])), n = {
                ...e,
                deviceId: i()
            };
            return await a("/api/oauth/webauthn/login/verify", {
                method: "POST",
                body: JSON.stringify(n)
            });
        },
        async listCredentials () {
            return await a("/api/oauth/webauthn/credentials");
        },
        async deleteCredential (t) {
            return await a(`/api/oauth/webauthn/credentials/${t}`, {
                method: "DELETE"
            });
        },
        async updateCredentialName (t, e) {
            return await a(`/api/oauth/webauthn/credentials/${t}`, {
                method: "PUT",
                body: JSON.stringify({
                    name: e
                })
            });
        }
    };
});
export { l as w, __tla };
