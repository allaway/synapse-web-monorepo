import{r as y}from"./index-f1f749bf.js";import{a4 as r,a6 as f,ab as T,bJ as l,bK as g,bL as m,bM as k,bN as Q,bO as w,bP as M,bQ as d}from"./SynapseContext-3300ccd2.js";import{u as S}from"./useMutation-1c752b99.js";import{u as J}from"./useInfiniteQuery-d97d5171.js";import{e as u,i as E}from"./queryKeys-dd803d9a.js";import{_ as P,o as b}from"./pick-2595b540.js";function F(t,s,n){const{accessToken:e}=r();return f(u.version(t,s),()=>T(e,t,s==null?void 0:s.toString()),n)}function K(t){const s=l(),{accessToken:n}=r();return S(e=>g(e,n),{...t,onSuccess:async(e,a,c)=>{await E(s,e.id),s.setQueryData(u.entity(e.id),e),t!=null&&t.onSuccess&&await t.onSuccess(e,a,c)}})}function V(t){const s=l(),{accessToken:n}=r();return S(e=>m(n,e),{...t,onSuccess:async(e,a,c)=>{await E(s,a),t!=null&&t.onSuccess&&await t.onSuccess(e,a,c)}})}function A(t,s){const{accessToken:e}=r();return J(u.versions(t),async a=>await k(t,e,a.pageParam,200),{...s,getNextPageParam:(a,c)=>{if(a.results.length>0)return c.length*200}})}function h(t){return P(t,d[t.concreteType])}function C(t){return b(t,d[t.concreteType])}function U(t,s){const[n,e]=y.useState(),[a,c]=y.useState(),{accessToken:o}=r(),i=f(u.json(t),()=>Q(t,o),s);return y.useEffect(()=>{i.data&&(e(h(i.data)),c(C(i.data)))},[i.data]),{...i,entityMetadata:n,annotations:a}}function _(t){const s=l(),{accessToken:n}=r();return S(e=>{const a=e.id;return w(a,e,n)},{...t,onSuccess:async(e,a,c)=>{const o=e.id;await E(s,o),s.setQueryData(u.json(o),e),t!=null&&t.onSuccess&&await t.onSuccess(e,a,c)}})}function O(t,s){const{accessToken:n}=r();return f(u.path(t),()=>M(t,n),s)}export{O as a,K as b,V as c,A as d,U as e,_ as f,F as u};
//# sourceMappingURL=useEntity-7d14ccdc.js.map
