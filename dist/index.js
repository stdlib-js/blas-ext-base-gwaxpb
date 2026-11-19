"use strict";var P=function(a,u){return function(){try{return u||a((u={exports:{}}).exports,u),u.exports}catch(v){throw (u=0, v)}};};var M=P(function(S,k){
function D(a,u,v,n,o,s,r,q,y){var e,c,f,g,t,i,m;for(e=n.data,c=r.data,f=n.accessors[0],g=r.accessors[1],t=s,i=y,m=0;m<a;m++)g(c,i,u*f(e,t)+v),t+=o,i+=q;return r}k.exports=D
});var j=P(function(T,R){
var O=require('@stdlib/array-base-arraylike2object/dist'),E=require('@stdlib/blas-ext-base-gwapx/dist').ndarray,F=require('@stdlib/blas-ext-base-gwax/dist').ndarray,G=M(),x=5;function H(a,u,v,n,o,s,r,q,y){var e,c,f,g,t,i;if(a<=0)return r;if(u===1)return E(a,v,n,o,s,r,q,y);if(v===0)return F(a,u,n,o,s,r,q,y);if(f=O(n),g=O(r),f.accessorProtocol||g.accessorProtocol)return G(a,u,v,f,o,s,g,q,y),r;if(e=s,c=y,o===1&&q===1){if(t=a%x,t>0)for(i=0;i<t;i++)r[c]=u*n[e]+v,e+=o,c+=q;if(a<x)return r;for(i=t;i<a;i+=x)r[c]=u*n[e]+v,r[c+1]=u*n[e+1]+v,r[c+2]=u*n[e+2]+v,r[c+3]=u*n[e+3]+v,r[c+4]=u*n[e+4]+v,e+=x,c+=x;return r}for(i=0;i<a;i++)r[c]=u*n[e]+v,e+=o,c+=q;return r}R.exports=H
});var B=P(function(U,A){
var z=require('@stdlib/strided-base-stride2offset/dist'),I=j();function J(a,u,v,n,o,s,r){return I(a,u,v,n,o,z(a,o),s,r,z(a,r))}A.exports=J
});var K=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=B(),L=j();K(C,"ndarray",L);module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
