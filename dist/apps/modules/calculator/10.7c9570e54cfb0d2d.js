(self.webpackChunkcalculator=self.webpackChunkcalculator||[]).push([[10],{6951:(e,r)=>{var t;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e="",r=0;r<arguments.length;r++){var t=arguments[r];t&&(e=i(e,a(t)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var r="";for(var t in e)n.call(e,t)&&e[t]&&(r=i(r,t));return r}function i(e,r){return r?e?e+" "+r:e+r:e}e.exports?(o.default=o,e.exports=o):void 0===(t=(function(){return o}).apply(r,[]))||(e.exports=t)}()},1217:(e,r,t)=>{"use strict";t.r(r),t.d(r,{DEFAULT_BREAKPOINTS:()=>a,DEFAULT_MIN_BREAKPOINT:()=>i,ThemeConsumer:()=>c,createBootstrapComponent:()=>d,default:()=>m,useBootstrapBreakpoints:()=>l,useBootstrapMinBreakpoint:()=>p,useBootstrapPrefix:()=>f,useIsRTL:()=>y});var n=t(8424),o=t(6870);const a=["xxl","xl","lg","md","sm","xs"],i="xs",s=n.createContext({prefixes:{},breakpoints:a,minBreakpoint:i}),{Consumer:c,Provider:u}=s;function f(e,r){const{prefixes:t}=(0,n.useContext)(s);return e||t[r]||r}function l(){const{breakpoints:e}=(0,n.useContext)(s);return e}function p(){const{minBreakpoint:e}=(0,n.useContext)(s);return e}function y(){const{dir:e}=(0,n.useContext)(s);return"rtl"===e}function d(e,r){"string"==typeof r&&(r={prefix:r});const t=e.prototype&&e.prototype.isReactComponent,{prefix:a,forwardRefAs:i=(t?"ref":"innerRef")}=r,s=n.forwardRef((({...r},t)=>{r[i]=t;const n=f(r.bsPrefix,a);return(0,o.jsx)(e,{...r,bsPrefix:n})}));return s.displayName=`Bootstrap(${e.displayName||e.name})`,s}const m=function({prefixes:e={},breakpoints:r=a,minBreakpoint:t=i,dir:s,children:c}){const f=(0,n.useMemo)((()=>({prefixes:{...e},breakpoints:r,minBreakpoint:t,dir:s})),[e,r,t,s]);return(0,o.jsx)(u,{value:f,children:c})}},8142:(e,r,t)=>{"use strict";(function(){var e=t(8424),n=Symbol.for("react.element"),o=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),m=Symbol.for("react.offscreen"),v=Symbol.iterator;var g=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function b(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];!function(e,r,t){var n=g.ReactDebugCurrentFrame,o=n.getStackAddendum();""!==o&&(r+="%s",t=t.concat([o]));var a=t.map((function(e){return String(e)}));a.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,a)}("error",e,t)}var h;function k(e){return e.displayName||"Context"}function w(e){if(null==e)return null;if("number"==typeof e.tag&&b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case a:return"Fragment";case o:return"Portal";case s:return"Profiler";case i:return"StrictMode";case l:return"Suspense";case p:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case u:return k(e)+".Consumer";case c:return k(e._context)+".Provider";case f:return function(e,r,t){var n=e.displayName;if(n)return n;var o=r.displayName||r.name||"";return""!==o?t+"("+o+")":t}(e,e.render,"ForwardRef");case y:var r=e.displayName||null;return null!==r?r:w(e.type)||"Memo";case d:var t=e,n=t._payload,m=t._init;try{return w(m(n))}catch(v){return null}}return null}h=Symbol.for("react.module.reference");var _,S,j,R,x,O,P,E=Object.assign,T=0;function C(){}C.__reactDisabledLog=!0;var $,N=g.ReactCurrentDispatcher;function F(e,r,t){if(void 0===$)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);$=n&&n[1]||""}return"\n"+$+e}var D,I=!1,B="function"==typeof WeakMap?WeakMap:Map;function A(e,r){if(!e||I)return"";var t,n=D.get(e);if(void 0!==n)return n;I=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=N.current,N.current=null,function(){if(0===T){_=console.log,S=console.info,j=console.warn,R=console.error,x=console.group,O=console.groupCollapsed,P=console.groupEnd;var e={configurable:!0,enumerable:!0,value:C,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}T++}();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(i,[])}catch(d){t=d}Reflect.construct(e,[],i)}else{try{i.call()}catch(d){t=d}e.call(i.prototype)}}else{try{throw Error()}catch(d){t=d}e()}}catch(m){if(m&&t&&"string"==typeof m.stack){for(var s=m.stack.split("\n"),c=t.stack.split("\n"),u=s.length-1,f=c.length-1;u>=1&&f>=0&&s[u]!==c[f];)f--;for(;u>=1&&f>=0;u--,f--)if(s[u]!==c[f]){if(1!==u||1!==f)do{if(u--,--f<0||s[u]!==c[f]){var l="\n"+s[u].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),"function"==typeof e&&D.set(e,l),l}}while(u>=1&&f>=0);break}}}finally{I=!1,N.current=o,function(){if(0==--T){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:E({},e,{value:_}),info:E({},e,{value:S}),warn:E({},e,{value:j}),error:E({},e,{value:R}),group:E({},e,{value:x}),groupCollapsed:E({},e,{value:O}),groupEnd:E({},e,{value:P})})}T<0&&b("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var p=e?e.displayName||e.name:"",y=p?F(p):"";return"function"==typeof e&&D.set(e,y),y}function L(e,r,t){if(null==e)return"";if("function"==typeof e)return A(e,!(!(n=e.prototype)||!n.isReactComponent));var n;if("string"==typeof e)return F(e);switch(e){case l:return F("Suspense");case p:return F("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case f:return A(e.render,!1);case y:return L(e.type,r,t);case d:var o=e,a=o._payload,i=o._init;try{return L(i(a),r,t)}catch(s){}}return""}D=new B;var U=Object.prototype.hasOwnProperty,W={},M=g.ReactDebugCurrentFrame;function z(e){if(e){var r=e._owner,t=L(e.type,e._source,r?r.type:null);M.setExtraStackFrame(t)}else M.setExtraStackFrame(null)}var K=Array.isArray;function Y(e){return K(e)}function J(e){return""+e}function X(e){if(function(e){try{return J(e),!1}catch(r){return!0}}(e))return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),J(e)}var q,V,H,G=g.ReactCurrentOwner,Q={key:!0,ref:!0,__self:!0,__source:!0};H={};function Z(e,r,t,o,a){var i,s={},c=null,u=null;for(i in void 0!==t&&(X(t),c=""+t),function(e){if(U.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return void 0!==e.key}(r)&&(X(r.key),c=""+r.key),function(e){if(U.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return void 0!==e.ref}(r)&&(u=r.ref,function(e,r){if("string"==typeof e.ref&&G.current&&r&&G.current.stateNode!==r){var t=w(G.current.type);H[t]||(b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',w(G.current.type),e.ref),H[t]=!0)}}(r,a)),r)U.call(r,i)&&!Q.hasOwnProperty(i)&&(s[i]=r[i]);if(e&&e.defaultProps){var f=e.defaultProps;for(i in f)void 0===s[i]&&(s[i]=f[i])}if(c||u){var l="function"==typeof e?e.displayName||e.name||"Unknown":e;c&&function(e,r){var t=function(){q||(q=!0,b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}(s,l),u&&function(e,r){var t=function(){V||(V=!0,b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}(s,l)}return function(e,r,t,o,a,i,s){var c={$$typeof:n,type:e,key:r,ref:t,props:s,_owner:i,_store:{}};return Object.defineProperty(c._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(c,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(c,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c}(e,c,u,a,o,G.current,s)}var ee,re=g.ReactCurrentOwner,te=g.ReactDebugCurrentFrame;function ne(e){if(e){var r=e._owner,t=L(e.type,e._source,r?r.type:null);te.setExtraStackFrame(t)}else te.setExtraStackFrame(null)}function oe(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}function ae(){if(re.current){var e=w(re.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}ee=!1;var ie={};function se(e,r){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var t=function(e){var r=ae();if(!r){var t="string"==typeof e?e:e.displayName||e.name;t&&(r="\n\nCheck the top-level render call using <"+t+">.")}return r}(r);if(!ie[t]){ie[t]=!0;var n="";e&&e._owner&&e._owner!==re.current&&(n=" It was passed a child from "+w(e._owner.type)+"."),ne(e),b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),ne(null)}}}function ce(e,r){if("object"==typeof e)if(Y(e))for(var t=0;t<e.length;t++){var n=e[t];oe(n)&&se(n,r)}else if(oe(e))e._store&&(e._store.validated=!0);else if(e){var o=function(e){if(null===e||"object"!=typeof e)return null;var r=v&&e[v]||e["@@iterator"];return"function"==typeof r?r:null}(e);if("function"==typeof o&&o!==e.entries)for(var a,i=o.call(e);!(a=i.next()).done;)oe(a.value)&&se(a.value,r)}}function ue(e){var r,t=e.type;if(null!=t&&"string"!=typeof t){if("function"==typeof t)r=t.propTypes;else{if("object"!=typeof t||t.$$typeof!==f&&t.$$typeof!==y)return;r=t.propTypes}if(r){var n=w(t);!function(e,r,t,n,o){var a=Function.call.bind(U);for(var i in e)if(a(e,i)){var s=void 0;try{if("function"!=typeof e[i]){var c=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}s=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(u){s=u}!s||s instanceof Error||(z(o),b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof s),z(null)),s instanceof Error&&!(s.message in W)&&(W[s.message]=!0,z(o),b("Failed %s type: %s",t,s.message),z(null))}}(r,e.props,"prop",n,e)}else if(void 0!==t.PropTypes&&!ee){ee=!0,b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",w(t)||"Unknown")}"function"!=typeof t.getDefaultProps||t.getDefaultProps.isReactClassApproved||b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}var fe={};function le(e,r,t,o,v,g){var k=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===s||e===i||e===l||e===p||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===y||e.$$typeof===c||e.$$typeof===u||e.$$typeof===f||e.$$typeof===h||void 0!==e.getModuleId)}(e);if(!k){var _="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(_+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var S,j=function(e){return void 0!==e?"\n\nCheck your code at "+e.fileName.replace(/^.*[\\\/]/,"")+":"+e.lineNumber+".":""}(v);_+=j||ae(),null===e?S="null":Y(e)?S="array":void 0!==e&&e.$$typeof===n?(S="<"+(w(e.type)||"Unknown")+" />",_=" Did you accidentally export a JSX literal instead of a component?"):S=typeof e,b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",S,_)}var R=Z(e,r,t,v,g);if(null==R)return R;if(k){var x=r.children;if(void 0!==x)if(o)if(Y(x)){for(var O=0;O<x.length;O++)ce(x[O],e);Object.freeze&&Object.freeze(x)}else b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ce(x,e)}if(U.call(r,"key")){var P=w(e),E=Object.keys(r).filter((function(e){return"key"!==e})),T=E.length>0?"{key: someKey, "+E.join(": ..., ")+": ...}":"{key: someKey}";if(!fe[P+T])b('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',T,P,E.length>0?"{"+E.join(": ..., ")+": ...}":"{}",P),fe[P+T]=!0}return e===a?function(e){for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if("children"!==n&&"key"!==n){ne(e),b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),ne(null);break}}null!==e.ref&&(ne(e),b("Invalid attribute `ref` supplied to `React.Fragment`."),ne(null))}(R):ue(R),R}var pe=function(e,r,t){return le(e,r,t,!1)},ye=function(e,r,t){return le(e,r,t,!0)};r.Fragment=a,r.jsx=pe,r.jsxs=ye})()},6870:(e,r,t)=>{"use strict";e.exports=t(8142)}}]);