"use strict";(self.webpackChunkshell=self.webpackChunkshell||[]).push([[35],{9173:(e,r,t)=>{(function(){var e=t(6587),n=Symbol.for("react.element"),o=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),v=Symbol.for("react.offscreen"),m=Symbol.iterator;var g=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function b(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];!function(e,r,t){var n=g.ReactDebugCurrentFrame,o=n.getStackAddendum();""!==o&&(r+="%s",t=t.concat([o]));var a=t.map((function(e){return String(e)}));a.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,a)}("error",e,t)}var h;function k(e){return e.displayName||"Context"}function w(e){if(null==e)return null;if("number"==typeof e.tag&&b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case a:return"Fragment";case o:return"Portal";case s:return"Profiler";case i:return"StrictMode";case f:return"Suspense";case p:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case l:return k(e)+".Consumer";case c:return k(e._context)+".Provider";case u:return function(e,r,t){var n=e.displayName;if(n)return n;var o=r.displayName||r.name||"";return""!==o?t+"("+o+")":t}(e,e.render,"ForwardRef");case y:var r=e.displayName||null;return null!==r?r:w(e.type)||"Memo";case d:var t=e,n=t._payload,v=t._init;try{return w(v(n))}catch(m){return null}}return null}h=Symbol.for("react.module.reference");var _,S,j,O,R,E,P,T=Object.assign,$=0;function C(){}C.__reactDisabledLog=!0;var x,F=g.ReactCurrentDispatcher;function D(e,r,t){if(void 0===x)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);x=n&&n[1]||""}return"\n"+x+e}var N,I=!1,W="function"==typeof WeakMap?WeakMap:Map;function L(e,r){if(!e||I)return"";var t,n=N.get(e);if(void 0!==n)return n;I=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=F.current,F.current=null,function(){if(0===$){_=console.log,S=console.info,j=console.warn,O=console.error,R=console.group,E=console.groupCollapsed,P=console.groupEnd;var e={configurable:!0,enumerable:!0,value:C,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}$++}();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(i,[])}catch(d){t=d}Reflect.construct(e,[],i)}else{try{i.call()}catch(d){t=d}e.call(i.prototype)}}else{try{throw Error()}catch(d){t=d}e()}}catch(v){if(v&&t&&"string"==typeof v.stack){for(var s=v.stack.split("\n"),c=t.stack.split("\n"),l=s.length-1,u=c.length-1;l>=1&&u>=0&&s[l]!==c[u];)u--;for(;l>=1&&u>=0;l--,u--)if(s[l]!==c[u]){if(1!==l||1!==u)do{if(l--,--u<0||s[l]!==c[u]){var f="\n"+s[l].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),"function"==typeof e&&N.set(e,f),f}}while(l>=1&&u>=0);break}}}finally{I=!1,F.current=o,function(){if(0==--$){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:T({},e,{value:_}),info:T({},e,{value:S}),warn:T({},e,{value:j}),error:T({},e,{value:O}),group:T({},e,{value:R}),groupCollapsed:T({},e,{value:E}),groupEnd:T({},e,{value:P})})}$<0&&b("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var p=e?e.displayName||e.name:"",y=p?D(p):"";return"function"==typeof e&&N.set(e,y),y}function A(e,r,t){if(null==e)return"";if("function"==typeof e)return L(e,!(!(n=e.prototype)||!n.isReactComponent));var n;if("string"==typeof e)return D(e);switch(e){case f:return D("Suspense");case p:return D("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case u:return L(e.render,!1);case y:return A(e.type,r,t);case d:var o=e,a=o._payload,i=o._init;try{return A(i(a),r,t)}catch(s){}}return""}N=new W;var U=Object.prototype.hasOwnProperty,z={},M=g.ReactDebugCurrentFrame;function Y(e){if(e){var r=e._owner,t=A(e.type,e._source,r?r.type:null);M.setExtraStackFrame(t)}else M.setExtraStackFrame(null)}var B=Array.isArray;function J(e){return B(e)}function K(e){return""+e}function X(e){if(function(e){try{return K(e),!1}catch(r){return!0}}(e))return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),K(e)}var q,V,H,G=g.ReactCurrentOwner,Q={key:!0,ref:!0,__self:!0,__source:!0};H={};function Z(e,r,t,o,a){var i,s={},c=null,l=null;for(i in void 0!==t&&(X(t),c=""+t),function(e){if(U.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return void 0!==e.key}(r)&&(X(r.key),c=""+r.key),function(e){if(U.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return void 0!==e.ref}(r)&&(l=r.ref,function(e,r){if("string"==typeof e.ref&&G.current&&r&&G.current.stateNode!==r){var t=w(G.current.type);H[t]||(b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',w(G.current.type),e.ref),H[t]=!0)}}(r,a)),r)U.call(r,i)&&!Q.hasOwnProperty(i)&&(s[i]=r[i]);if(e&&e.defaultProps){var u=e.defaultProps;for(i in u)void 0===s[i]&&(s[i]=u[i])}if(c||l){var f="function"==typeof e?e.displayName||e.name||"Unknown":e;c&&function(e,r){var t=function(){q||(q=!0,b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}(s,f),l&&function(e,r){var t=function(){V||(V=!0,b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}(s,f)}return function(e,r,t,o,a,i,s){var c={$$typeof:n,type:e,key:r,ref:t,props:s,_owner:i,_store:{}};return Object.defineProperty(c._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(c,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(c,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c}(e,c,l,a,o,G.current,s)}var ee,re=g.ReactCurrentOwner,te=g.ReactDebugCurrentFrame;function ne(e){if(e){var r=e._owner,t=A(e.type,e._source,r?r.type:null);te.setExtraStackFrame(t)}else te.setExtraStackFrame(null)}function oe(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}function ae(){if(re.current){var e=w(re.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}ee=!1;var ie={};function se(e,r){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var t=function(e){var r=ae();if(!r){var t="string"==typeof e?e:e.displayName||e.name;t&&(r="\n\nCheck the top-level render call using <"+t+">.")}return r}(r);if(!ie[t]){ie[t]=!0;var n="";e&&e._owner&&e._owner!==re.current&&(n=" It was passed a child from "+w(e._owner.type)+"."),ne(e),b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),ne(null)}}}function ce(e,r){if("object"==typeof e)if(J(e))for(var t=0;t<e.length;t++){var n=e[t];oe(n)&&se(n,r)}else if(oe(e))e._store&&(e._store.validated=!0);else if(e){var o=function(e){if(null===e||"object"!=typeof e)return null;var r=m&&e[m]||e["@@iterator"];return"function"==typeof r?r:null}(e);if("function"==typeof o&&o!==e.entries)for(var a,i=o.call(e);!(a=i.next()).done;)oe(a.value)&&se(a.value,r)}}function le(e){var r,t=e.type;if(null!=t&&"string"!=typeof t){if("function"==typeof t)r=t.propTypes;else{if("object"!=typeof t||t.$$typeof!==u&&t.$$typeof!==y)return;r=t.propTypes}if(r){var n=w(t);!function(e,r,t,n,o){var a=Function.call.bind(U);for(var i in e)if(a(e,i)){var s=void 0;try{if("function"!=typeof e[i]){var c=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}s=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(l){s=l}!s||s instanceof Error||(Y(o),b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof s),Y(null)),s instanceof Error&&!(s.message in z)&&(z[s.message]=!0,Y(o),b("Failed %s type: %s",t,s.message),Y(null))}}(r,e.props,"prop",n,e)}else if(void 0!==t.PropTypes&&!ee){ee=!0,b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",w(t)||"Unknown")}"function"!=typeof t.getDefaultProps||t.getDefaultProps.isReactClassApproved||b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}var ue={};function fe(e,r,t,o,m,g){var k=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===s||e===i||e===f||e===p||e===v||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===y||e.$$typeof===c||e.$$typeof===l||e.$$typeof===u||e.$$typeof===h||void 0!==e.getModuleId)}(e);if(!k){var _="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(_+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var S,j=function(e){return void 0!==e?"\n\nCheck your code at "+e.fileName.replace(/^.*[\\\/]/,"")+":"+e.lineNumber+".":""}(m);_+=j||ae(),null===e?S="null":J(e)?S="array":void 0!==e&&e.$$typeof===n?(S="<"+(w(e.type)||"Unknown")+" />",_=" Did you accidentally export a JSX literal instead of a component?"):S=typeof e,b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",S,_)}var O=Z(e,r,t,m,g);if(null==O)return O;if(k){var R=r.children;if(void 0!==R)if(o)if(J(R)){for(var E=0;E<R.length;E++)ce(R[E],e);Object.freeze&&Object.freeze(R)}else b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ce(R,e)}if(U.call(r,"key")){var P=w(e),T=Object.keys(r).filter((function(e){return"key"!==e})),$=T.length>0?"{key: someKey, "+T.join(": ..., ")+": ...}":"{key: someKey}";if(!ue[P+$])b('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',$,P,T.length>0?"{"+T.join(": ..., ")+": ...}":"{}",P),ue[P+$]=!0}return e===a?function(e){for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if("children"!==n&&"key"!==n){ne(e),b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),ne(null);break}}null!==e.ref&&(ne(e),b("Invalid attribute `ref` supplied to `React.Fragment`."),ne(null))}(O):le(O),O}var pe=function(e,r,t){return fe(e,r,t,!1)},ye=function(e,r,t){return fe(e,r,t,!0)};r.Fragment=a,r.jsx=pe,r.jsxs=ye})()},1085:(e,r,t)=>{e.exports=t(9173)}}]);