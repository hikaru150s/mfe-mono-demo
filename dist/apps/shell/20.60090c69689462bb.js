(self.webpackChunkshell=self.webpackChunkshell||[]).push([[20],{9870:(e,r)=>{var t;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e="",r=0;r<arguments.length;r++){var t=arguments[r];t&&(e=i(e,s(t)))}return e}function s(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var r="";for(var t in e)n.call(e,t)&&e[t]&&(r=i(r,t));return r}function i(e,r){return r?e?e+" "+r:e+r:e}e.exports?(o.default=o,e.exports=o):void 0===(t=(function(){return o}).apply(r,[]))||(e.exports=t)}()},30:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>p});var n=t(9870),o=t.n(n),s=t(6587),i=t(3378),a=t(1085);const p=s.forwardRef((({bsPrefix:e,className:r,striped:t,bordered:n,borderless:s,hover:p,size:u,variant:f,responsive:c,...l},d)=>{const x=(0,i.useBootstrapPrefix)(e,"table"),m=o()(r,x,f&&`${x}-${f}`,u&&`${x}-${u}`,t&&`${x}-${"string"==typeof t?`striped-${t}`:"striped"}`,n&&`${x}-bordered`,s&&`${x}-borderless`,p&&`${x}-hover`),b=(0,a.jsx)("table",{...l,className:m,ref:d});if(c){let e=`${x}-responsive`;return"string"==typeof c&&(e=`${e}-${c}`),(0,a.jsx)("div",{className:e,children:b})}return b}))},3378:(e,r,t)=>{"use strict";t.r(r),t.d(r,{DEFAULT_BREAKPOINTS:()=>s,DEFAULT_MIN_BREAKPOINT:()=>i,ThemeConsumer:()=>p,createBootstrapComponent:()=>x,default:()=>m,useBootstrapBreakpoints:()=>c,useBootstrapMinBreakpoint:()=>l,useBootstrapPrefix:()=>f,useIsRTL:()=>d});var n=t(6587),o=t(1085);const s=["xxl","xl","lg","md","sm","xs"],i="xs",a=n.createContext({prefixes:{},breakpoints:s,minBreakpoint:i}),{Consumer:p,Provider:u}=a;function f(e,r){const{prefixes:t}=(0,n.useContext)(a);return e||t[r]||r}function c(){const{breakpoints:e}=(0,n.useContext)(a);return e}function l(){const{minBreakpoint:e}=(0,n.useContext)(a);return e}function d(){const{dir:e}=(0,n.useContext)(a);return"rtl"===e}function x(e,r){"string"==typeof r&&(r={prefix:r});const t=e.prototype&&e.prototype.isReactComponent,{prefix:s,forwardRefAs:i=(t?"ref":"innerRef")}=r,a=n.forwardRef((({...r},t)=>{r[i]=t;const n=f(r.bsPrefix,s);return(0,o.jsx)(e,{...r,bsPrefix:n})}));return a.displayName=`Bootstrap(${e.displayName||e.name})`,a}const m=function({prefixes:e={},breakpoints:r=s,minBreakpoint:t=i,dir:a,children:p}){const f=(0,n.useMemo)((()=>({prefixes:{...e},breakpoints:r,minBreakpoint:t,dir:a})),[e,r,t,a]);return(0,o.jsx)(u,{value:f,children:p})}}}]);