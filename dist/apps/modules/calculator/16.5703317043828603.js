"use strict";(self.webpackChunkcalculator=self.webpackChunkcalculator||[]).push([[16],{6720:(a,e,t)=>{t.r(e),t.d(e,{default:()=>f});var n=t(6951),r=t.n(n),l=t(8424),s=t(6870);const i=["as","disabled"];function o({tagName:a,disabled:e,href:t,target:n,rel:r,role:l,onClick:s,tabIndex:i=0,type:o}){a||(a=null!=t||null!=n||null!=r?"a":"button");const d={tagName:a};if("button"===a)return[{type:o||"button",disabled:e},d];const u=n=>{(e||"a"===a&&function(a){return!a||"#"===a.trim()}(t))&&n.preventDefault(),e?n.stopPropagation():null==s||s(n)};return"a"===a&&(t||(t="#"),e&&(t=void 0)),[{role:null!=l?l:"button",disabled:void 0,tabIndex:e?void 0:i,href:t,target:"a"===a?n:void 0,"aria-disabled":e||void 0,rel:"a"===a?r:void 0,onClick:u,onKeyDown:a=>{" "===a.key&&(a.preventDefault(),u(a))}},d]}const d=l.forwardRef(((a,e)=>{let{as:t,disabled:n}=a,r=function(a,e){if(null==a)return{};var t={};for(var n in a)if({}.hasOwnProperty.call(a,n)){if(e.indexOf(n)>=0)continue;t[n]=a[n]}return t}(a,i);const[l,{tagName:d}]=o(Object.assign({tagName:t,disabled:n},r));return(0,s.jsx)(d,Object.assign({},r,l,{ref:e}))}));d.displayName="Button";var u=t(1217);const c=l.forwardRef((({as:a,bsPrefix:e,variant:t="primary",size:n,active:l=!1,disabled:i=!1,className:d,...c},f)=>{const b=(0,u.useBootstrapPrefix)(e,"btn"),[v,{tagName:p}]=o({tagName:a,disabled:i,...c}),m=p;return(0,s.jsx)(m,{...v,...c,ref:f,disabled:i,className:r()(d,b,l&&"active",t&&`${b}-${t}`,n&&`${b}-${n}`,c.href&&i&&"disabled")})}));c.displayName="Button";const f=c}}]);