(self.webpackChunkshell=self.webpackChunkshell||[]).push([[12],{9870:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=i(e,s(r)))}return e}function s(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=i(t,r));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(r=(function(){return o}).apply(t,[]))||(e.exports=r)}()},5032:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f,useCol:()=>u});var n=r(9870),o=r.n(n),s=r(6587),i=r(3378),a=r(1085);function u({as:e,bsPrefix:t,className:r,...n}){t=(0,i.useBootstrapPrefix)(t,"col");const s=(0,i.useBootstrapBreakpoints)(),a=(0,i.useBootstrapMinBreakpoint)(),u=[],p=[];return s.forEach((e=>{const r=n[e];let o,s,i;delete n[e],"object"==typeof r&&null!=r?({span:o,offset:s,order:i}=r):o=r;const f=e!==a?`-${e}`:"";o&&u.push(!0===o?`${t}${f}`:`${t}${f}-${o}`),null!=i&&p.push(`order${f}-${i}`),null!=s&&p.push(`offset${f}-${s}`)})),[{...n,className:o()(r,...u,...p)},{as:e,bsPrefix:t,spans:u}]}const p=s.forwardRef(((e,t)=>{const[{className:r,...n},{as:s="div",bsPrefix:i,spans:p}]=u(e);return(0,a.jsx)(s,{...n,ref:t,className:o()(r,!p.length&&i)})}));p.displayName="Col";const f=p},3378:(e,t,r)=>{"use strict";r.r(t),r.d(t,{DEFAULT_BREAKPOINTS:()=>s,DEFAULT_MIN_BREAKPOINT:()=>i,ThemeConsumer:()=>u,createBootstrapComponent:()=>d,default:()=>m,useBootstrapBreakpoints:()=>c,useBootstrapMinBreakpoint:()=>l,useBootstrapPrefix:()=>f,useIsRTL:()=>x});var n=r(6587),o=r(1085);const s=["xxl","xl","lg","md","sm","xs"],i="xs",a=n.createContext({prefixes:{},breakpoints:s,minBreakpoint:i}),{Consumer:u,Provider:p}=a;function f(e,t){const{prefixes:r}=(0,n.useContext)(a);return e||r[t]||t}function c(){const{breakpoints:e}=(0,n.useContext)(a);return e}function l(){const{minBreakpoint:e}=(0,n.useContext)(a);return e}function x(){const{dir:e}=(0,n.useContext)(a);return"rtl"===e}function d(e,t){"string"==typeof t&&(t={prefix:t});const r=e.prototype&&e.prototype.isReactComponent,{prefix:s,forwardRefAs:i=(r?"ref":"innerRef")}=t,a=n.forwardRef((({...t},r)=>{t[i]=r;const n=f(t.bsPrefix,s);return(0,o.jsx)(e,{...t,bsPrefix:n})}));return a.displayName=`Bootstrap(${e.displayName||e.name})`,a}const m=function({prefixes:e={},breakpoints:t=s,minBreakpoint:r=i,dir:a,children:u}){const f=(0,n.useMemo)((()=>({prefixes:{...e},breakpoints:t,minBreakpoint:r,dir:a})),[e,t,r,a]);return(0,o.jsx)(p,{value:f,children:u})}}}]);