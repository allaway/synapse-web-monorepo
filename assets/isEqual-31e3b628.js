import{aK as K,bI as I,bB as D,bE as E,bG as F}from"./SynapseContext-3300ccd2.js";import{S as H,c as J}from"./_cacheHas-7c09914b.js";import{S as G,e as M,i as $}from"./isArray-a82322d9.js";import{s as Q}from"./_setToArray-3d6ec6fd.js";import{e as b,c as x}from"./_baseClone-9e4d1916.js";function X(n,e){for(var a=-1,f=n==null?0:n.length;++a<f;)if(e(n[a],a,n))return!0;return!1}var Y=1,Z=2;function q(n,e,a,f,g,r){var s=a&Y,u=n.length,l=e.length;if(u!=l&&!(s&&l>u))return!1;var v=r.get(n),t=r.get(e);if(v&&t)return v==e&&t==n;var A=-1,i=!0,O=a&Z?new H:void 0;for(r.set(n,e),r.set(e,n);++A<u;){var p=n[A],T=e[A];if(f)var d=s?f(T,p,A,e,n,r):f(p,T,A,n,e,r);if(d!==void 0){if(d)continue;i=!1;break}if(O){if(!X(e,function(P,_){if(!J(O,_)&&(p===P||g(p,P,a,f,r)))return O.push(_)})){i=!1;break}}else if(!(p===T||g(p,T,a,f,r))){i=!1;break}}return r.delete(n),r.delete(e),i}function W(n){var e=-1,a=Array(n.size);return n.forEach(function(f,g){a[++e]=[g,f]}),a}var z=1,c=2,j="[object Boolean]",V="[object Date]",o="[object Error]",h="[object Map]",k="[object Number]",nn="[object RegExp]",en="[object Set]",rn="[object String]",fn="[object Symbol]",an="[object ArrayBuffer]",sn="[object DataView]",B=G?G.prototype:void 0,R=B?B.valueOf:void 0;function gn(n,e,a,f,g,r,s){switch(a){case sn:if(n.byteLength!=e.byteLength||n.byteOffset!=e.byteOffset)return!1;n=n.buffer,e=e.buffer;case an:return!(n.byteLength!=e.byteLength||!r(new I(n),new I(e)));case j:case V:case k:return K(+n,+e);case o:return n.name==e.name&&n.message==e.message;case nn:case rn:return n==e+"";case h:var u=W;case en:var l=f&z;if(u||(u=Q),n.size!=e.size&&!l)return!1;var v=s.get(n);if(v)return v==e;f|=c,s.set(n,e);var t=q(u(n),u(e),f,g,r,s);return s.delete(n),t;case fn:if(R)return R.call(n)==R.call(e)}return!1}var ln=1,un=Object.prototype,vn=un.hasOwnProperty;function An(n,e,a,f,g,r){var s=a&ln,u=b(n),l=u.length,v=b(e),t=v.length;if(l!=t&&!s)return!1;for(var A=l;A--;){var i=u[A];if(!(s?i in e:vn.call(e,i)))return!1}var O=r.get(n),p=r.get(e);if(O&&p)return O==e&&p==n;var T=!0;r.set(n,e),r.set(e,n);for(var d=s;++A<l;){i=u[A];var P=n[i],_=e[i];if(f)var S=s?f(_,P,i,e,n,r):f(P,_,i,n,e,r);if(!(S===void 0?P===_||g(P,_,a,f,r):S)){T=!1;break}d||(d=i=="constructor")}if(T&&!d){var w=n.constructor,L=e.constructor;w!=L&&"constructor"in n&&"constructor"in e&&!(typeof w=="function"&&w instanceof w&&typeof L=="function"&&L instanceof L)&&(T=!1)}return r.delete(n),r.delete(e),T}var pn=1,m="[object Arguments]",N="[object Array]",y="[object Object]",Tn=Object.prototype,U=Tn.hasOwnProperty;function tn(n,e,a,f,g,r){var s=M(n),u=M(e),l=s?N:x(n),v=u?N:x(e);l=l==m?y:l,v=v==m?y:v;var t=l==y,A=v==y,i=l==v;if(i&&D(n)){if(!D(e))return!1;s=!0,t=!1}if(i&&!t)return r||(r=new E),s||F(n)?q(n,e,a,f,g,r):gn(n,e,l,a,f,g,r);if(!(a&pn)){var O=t&&U.call(n,"__wrapped__"),p=A&&U.call(e,"__wrapped__");if(O||p){var T=O?n.value():n,d=p?e.value():e;return r||(r=new E),g(T,d,a,f,r)}}return i?(r||(r=new E),An(n,e,a,f,g,r)):!1}function C(n,e,a,f,g){return n===e?!0:n==null||e==null||!$(n)&&!$(e)?n!==n&&e!==e:tn(n,e,a,f,C,g)}function Ln(n,e){return C(n,e)}export{X as a,C as b,Ln as i,W as m};
//# sourceMappingURL=isEqual-31e3b628.js.map
