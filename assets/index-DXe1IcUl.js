(function(){const K=document.createElement("link").relList;if(K&&K.supports&&K.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))h(_);new MutationObserver(_=>{for(const L of _)if(L.type==="childList")for(const Q of L.addedNodes)Q.tagName==="LINK"&&Q.rel==="modulepreload"&&h(Q)}).observe(document,{childList:!0,subtree:!0});function R(_){const L={};return _.integrity&&(L.integrity=_.integrity),_.referrerPolicy&&(L.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?L.credentials="include":_.crossOrigin==="anonymous"?L.credentials="omit":L.credentials="same-origin",L}function h(_){if(_.ep)return;_.ep=!0;const L=R(_);fetch(_.href,L)}})();var io={exports:{}},xa={};var gd;function Km(){if(gd)return xa;gd=1;var A=Symbol.for("react.transitional.element"),K=Symbol.for("react.fragment");function R(h,_,L){var Q=null;if(L!==void 0&&(Q=""+L),_.key!==void 0&&(Q=""+_.key),"key"in _){L={};for(var Y in _)Y!=="key"&&(L[Y]=_[Y])}else L=_;return _=L.ref,{$$typeof:A,type:h,key:Q,ref:_!==void 0?_:null,props:L}}return xa.Fragment=K,xa.jsx=R,xa.jsxs=R,xa}var pd;function Wm(){return pd||(pd=1,io.exports=Km()),io.exports}var d=Wm(),uo={exports:{}},q={};var yd;function Fm(){if(yd)return q;yd=1;var A=Symbol.for("react.transitional.element"),K=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),B=Symbol.iterator;function J(f){return f===null||typeof f!="object"?null:(f=B&&f[B]||f["@@iterator"],typeof f=="function"?f:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,pe={};function le(f,E,C){this.props=f,this.context=E,this.refs=pe,this.updater=C||X}le.prototype.isReactComponent={},le.prototype.setState=function(f,E){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,E,"setState")},le.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function Se(){}Se.prototype=le.prototype;function ye(f,E,C){this.props=f,this.context=E,this.refs=pe,this.updater=C||X}var ke=ye.prototype=new Se;ke.constructor=ye,F(ke,le.prototype),ke.isPureReactComponent=!0;var xe=Array.isArray;function Ue(){}var V={H:null,A:null,T:null,S:null},Ze=Object.prototype.hasOwnProperty;function zt(f,E,C){var O=C.ref;return{$$typeof:A,type:f,key:E,ref:O!==void 0?O:null,props:C}}function Qn(f,E){return zt(f.type,E,f.props)}function Mt(f){return typeof f=="object"&&f!==null&&f.$$typeof===A}function Ve(f){var E={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(C){return E[C]})}var En=/\/+/g;function Dt(f,E){return typeof f=="object"&&f!==null&&f.key!=null?Ve(""+f.key):E.toString(36)}function xt(f){switch(f.status){case"fulfilled":return f.value;case"rejected":throw f.reason;default:switch(typeof f.status=="string"?f.then(Ue,Ue):(f.status="pending",f.then(function(E){f.status==="pending"&&(f.status="fulfilled",f.value=E)},function(E){f.status==="pending"&&(f.status="rejected",f.reason=E)})),f.status){case"fulfilled":return f.value;case"rejected":throw f.reason}}throw f}function b(f,E,C,O,G){var $=typeof f;($==="undefined"||$==="boolean")&&(f=null);var ce=!1;if(f===null)ce=!0;else switch($){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(f.$$typeof){case A:case K:ce=!0;break;case W:return ce=f._init,b(ce(f._payload),E,C,O,G)}}if(ce)return G=G(f),ce=O===""?"."+Dt(f,0):O,xe(G)?(C="",ce!=null&&(C=ce.replace(En,"$&/")+"/"),b(G,E,C,"",function(wl){return wl})):G!=null&&(Mt(G)&&(G=Qn(G,C+(G.key==null||f&&f.key===G.key?"":(""+G.key).replace(En,"$&/")+"/")+ce)),E.push(G)),1;ce=0;var Qe=O===""?".":O+":";if(xe(f))for(var ze=0;ze<f.length;ze++)O=f[ze],$=Qe+Dt(O,ze),ce+=b(O,E,C,$,G);else if(ze=J(f),typeof ze=="function")for(f=ze.call(f),ze=0;!(O=f.next()).done;)O=O.value,$=Qe+Dt(O,ze++),ce+=b(O,E,C,$,G);else if($==="object"){if(typeof f.then=="function")return b(xt(f),E,C,O,G);throw E=String(f),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return ce}function M(f,E,C){if(f==null)return f;var O=[],G=0;return b(f,O,"","",function($){return E.call(C,$,G++)}),O}function U(f){if(f._status===-1){var E=f._result;E=E(),E.then(function(C){(f._status===0||f._status===-1)&&(f._status=1,f._result=C)},function(C){(f._status===0||f._status===-1)&&(f._status=2,f._result=C)}),f._status===-1&&(f._status=0,f._result=E)}if(f._status===1)return f._result.default;throw f._result}var fe=typeof reportError=="function"?reportError:function(f){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof f=="object"&&f!==null&&typeof f.message=="string"?String(f.message):String(f),error:f});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",f);return}console.error(f)},me={map:M,forEach:function(f,E,C){M(f,function(){E.apply(this,arguments)},C)},count:function(f){var E=0;return M(f,function(){E++}),E},toArray:function(f){return M(f,function(E){return E})||[]},only:function(f){if(!Mt(f))throw Error("React.Children.only expected to receive a single React element child.");return f}};return q.Activity=D,q.Children=me,q.Component=le,q.Fragment=R,q.Profiler=_,q.PureComponent=ye,q.StrictMode=h,q.Suspense=z,q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,q.__COMPILER_RUNTIME={__proto__:null,c:function(f){return V.H.useMemoCache(f)}},q.cache=function(f){return function(){return f.apply(null,arguments)}},q.cacheSignal=function(){return null},q.cloneElement=function(f,E,C){if(f==null)throw Error("The argument must be a React element, but you passed "+f+".");var O=F({},f.props),G=f.key;if(E!=null)for($ in E.key!==void 0&&(G=""+E.key),E)!Ze.call(E,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&E.ref===void 0||(O[$]=E[$]);var $=arguments.length-2;if($===1)O.children=C;else if(1<$){for(var ce=Array($),Qe=0;Qe<$;Qe++)ce[Qe]=arguments[Qe+2];O.children=ce}return zt(f.type,G,O)},q.createContext=function(f){return f={$$typeof:Q,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null},f.Provider=f,f.Consumer={$$typeof:L,_context:f},f},q.createElement=function(f,E,C){var O,G={},$=null;if(E!=null)for(O in E.key!==void 0&&($=""+E.key),E)Ze.call(E,O)&&O!=="key"&&O!=="__self"&&O!=="__source"&&(G[O]=E[O]);var ce=arguments.length-2;if(ce===1)G.children=C;else if(1<ce){for(var Qe=Array(ce),ze=0;ze<ce;ze++)Qe[ze]=arguments[ze+2];G.children=Qe}if(f&&f.defaultProps)for(O in ce=f.defaultProps,ce)G[O]===void 0&&(G[O]=ce[O]);return zt(f,$,G)},q.createRef=function(){return{current:null}},q.forwardRef=function(f){return{$$typeof:Y,render:f}},q.isValidElement=Mt,q.lazy=function(f){return{$$typeof:W,_payload:{_status:-1,_result:f},_init:U}},q.memo=function(f,E){return{$$typeof:T,type:f,compare:E===void 0?null:E}},q.startTransition=function(f){var E=V.T,C={};V.T=C;try{var O=f(),G=V.S;G!==null&&G(C,O),typeof O=="object"&&O!==null&&typeof O.then=="function"&&O.then(Ue,fe)}catch($){fe($)}finally{E!==null&&C.types!==null&&(E.types=C.types),V.T=E}},q.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},q.use=function(f){return V.H.use(f)},q.useActionState=function(f,E,C){return V.H.useActionState(f,E,C)},q.useCallback=function(f,E){return V.H.useCallback(f,E)},q.useContext=function(f){return V.H.useContext(f)},q.useDebugValue=function(){},q.useDeferredValue=function(f,E){return V.H.useDeferredValue(f,E)},q.useEffect=function(f,E){return V.H.useEffect(f,E)},q.useEffectEvent=function(f){return V.H.useEffectEvent(f)},q.useId=function(){return V.H.useId()},q.useImperativeHandle=function(f,E,C){return V.H.useImperativeHandle(f,E,C)},q.useInsertionEffect=function(f,E){return V.H.useInsertionEffect(f,E)},q.useLayoutEffect=function(f,E){return V.H.useLayoutEffect(f,E)},q.useMemo=function(f,E){return V.H.useMemo(f,E)},q.useOptimistic=function(f,E){return V.H.useOptimistic(f,E)},q.useReducer=function(f,E,C){return V.H.useReducer(f,E,C)},q.useRef=function(f){return V.H.useRef(f)},q.useState=function(f){return V.H.useState(f)},q.useSyncExternalStore=function(f,E,C){return V.H.useSyncExternalStore(f,E,C)},q.useTransition=function(){return V.H.useTransition()},q.version="19.2.4",q}var vd;function ro(){return vd||(vd=1,uo.exports=Fm()),uo.exports}var ft=ro(),co={exports:{}},Ta={},oo={exports:{}},so={};var bd;function $m(){return bd||(bd=1,(function(A){function K(b,M){var U=b.length;b.push(M);e:for(;0<U;){var fe=U-1>>>1,me=b[fe];if(0<_(me,M))b[fe]=M,b[U]=me,U=fe;else break e}}function R(b){return b.length===0?null:b[0]}function h(b){if(b.length===0)return null;var M=b[0],U=b.pop();if(U!==M){b[0]=U;e:for(var fe=0,me=b.length,f=me>>>1;fe<f;){var E=2*(fe+1)-1,C=b[E],O=E+1,G=b[O];if(0>_(C,U))O<me&&0>_(G,C)?(b[fe]=G,b[O]=U,fe=O):(b[fe]=C,b[E]=U,fe=E);else if(O<me&&0>_(G,U))b[fe]=G,b[O]=U,fe=O;else break e}}return M}function _(b,M){var U=b.sortIndex-M.sortIndex;return U!==0?U:b.id-M.id}if(A.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var L=performance;A.unstable_now=function(){return L.now()}}else{var Q=Date,Y=Q.now();A.unstable_now=function(){return Q.now()-Y}}var z=[],T=[],W=1,D=null,B=3,J=!1,X=!1,F=!1,pe=!1,le=typeof setTimeout=="function"?setTimeout:null,Se=typeof clearTimeout=="function"?clearTimeout:null,ye=typeof setImmediate<"u"?setImmediate:null;function ke(b){for(var M=R(T);M!==null;){if(M.callback===null)h(T);else if(M.startTime<=b)h(T),M.sortIndex=M.expirationTime,K(z,M);else break;M=R(T)}}function xe(b){if(F=!1,ke(b),!X)if(R(z)!==null)X=!0,Ue||(Ue=!0,Ve());else{var M=R(T);M!==null&&xt(xe,M.startTime-b)}}var Ue=!1,V=-1,Ze=5,zt=-1;function Qn(){return pe?!0:!(A.unstable_now()-zt<Ze)}function Mt(){if(pe=!1,Ue){var b=A.unstable_now();zt=b;var M=!0;try{e:{X=!1,F&&(F=!1,Se(V),V=-1),J=!0;var U=B;try{t:{for(ke(b),D=R(z);D!==null&&!(D.expirationTime>b&&Qn());){var fe=D.callback;if(typeof fe=="function"){D.callback=null,B=D.priorityLevel;var me=fe(D.expirationTime<=b);if(b=A.unstable_now(),typeof me=="function"){D.callback=me,ke(b),M=!0;break t}D===R(z)&&h(z),ke(b)}else h(z);D=R(z)}if(D!==null)M=!0;else{var f=R(T);f!==null&&xt(xe,f.startTime-b),M=!1}}break e}finally{D=null,B=U,J=!1}M=void 0}}finally{M?Ve():Ue=!1}}}var Ve;if(typeof ye=="function")Ve=function(){ye(Mt)};else if(typeof MessageChannel<"u"){var En=new MessageChannel,Dt=En.port2;En.port1.onmessage=Mt,Ve=function(){Dt.postMessage(null)}}else Ve=function(){le(Mt,0)};function xt(b,M){V=le(function(){b(A.unstable_now())},M)}A.unstable_IdlePriority=5,A.unstable_ImmediatePriority=1,A.unstable_LowPriority=4,A.unstable_NormalPriority=3,A.unstable_Profiling=null,A.unstable_UserBlockingPriority=2,A.unstable_cancelCallback=function(b){b.callback=null},A.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ze=0<b?Math.floor(1e3/b):5},A.unstable_getCurrentPriorityLevel=function(){return B},A.unstable_next=function(b){switch(B){case 1:case 2:case 3:var M=3;break;default:M=B}var U=B;B=M;try{return b()}finally{B=U}},A.unstable_requestPaint=function(){pe=!0},A.unstable_runWithPriority=function(b,M){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var U=B;B=b;try{return M()}finally{B=U}},A.unstable_scheduleCallback=function(b,M,U){var fe=A.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?fe+U:fe):U=fe,b){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=U+me,b={id:W++,callback:M,priorityLevel:b,startTime:U,expirationTime:me,sortIndex:-1},U>fe?(b.sortIndex=U,K(T,b),R(z)===null&&b===R(T)&&(F?(Se(V),V=-1):F=!0,xt(xe,U-fe))):(b.sortIndex=me,K(z,b),X||J||(X=!0,Ue||(Ue=!0,Ve()))),b},A.unstable_shouldYield=Qn,A.unstable_wrapCallback=function(b){var M=B;return function(){var U=B;B=M;try{return b.apply(this,arguments)}finally{B=U}}}})(so)),so}var Sd;function Im(){return Sd||(Sd=1,oo.exports=$m()),oo.exports}var fo={exports:{}},Ge={};var xd;function Pm(){if(xd)return Ge;xd=1;var A=ro();function K(z){var T="https://react.dev/errors/"+z;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var W=2;W<arguments.length;W++)T+="&args[]="+encodeURIComponent(arguments[W])}return"Minified React error #"+z+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function R(){}var h={d:{f:R,r:function(){throw Error(K(522))},D:R,C:R,L:R,m:R,X:R,S:R,M:R},p:0,findDOMNode:null},_=Symbol.for("react.portal");function L(z,T,W){var D=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_,key:D==null?null:""+D,children:z,containerInfo:T,implementation:W}}var Q=A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Y(z,T){if(z==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return Ge.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,Ge.createPortal=function(z,T){var W=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(K(299));return L(z,T,null,W)},Ge.flushSync=function(z){var T=Q.T,W=h.p;try{if(Q.T=null,h.p=2,z)return z()}finally{Q.T=T,h.p=W,h.d.f()}},Ge.preconnect=function(z,T){typeof z=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,h.d.C(z,T))},Ge.prefetchDNS=function(z){typeof z=="string"&&h.d.D(z)},Ge.preinit=function(z,T){if(typeof z=="string"&&T&&typeof T.as=="string"){var W=T.as,D=Y(W,T.crossOrigin),B=typeof T.integrity=="string"?T.integrity:void 0,J=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;W==="style"?h.d.S(z,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:D,integrity:B,fetchPriority:J}):W==="script"&&h.d.X(z,{crossOrigin:D,integrity:B,fetchPriority:J,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},Ge.preinitModule=function(z,T){if(typeof z=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var W=Y(T.as,T.crossOrigin);h.d.M(z,{crossOrigin:W,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&h.d.M(z)},Ge.preload=function(z,T){if(typeof z=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var W=T.as,D=Y(W,T.crossOrigin);h.d.L(z,W,{crossOrigin:D,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},Ge.preloadModule=function(z,T){if(typeof z=="string")if(T){var W=Y(T.as,T.crossOrigin);h.d.m(z,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:W,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else h.d.m(z)},Ge.requestFormReset=function(z){h.d.r(z)},Ge.unstable_batchedUpdates=function(z,T){return z(T)},Ge.useFormState=function(z,T,W){return Q.H.useFormState(z,T,W)},Ge.useFormStatus=function(){return Q.H.useHostTransitionStatus()},Ge.version="19.2.4",Ge}var Td;function eg(){if(Td)return fo.exports;Td=1;function A(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)}catch(K){console.error(K)}}return A(),fo.exports=Pm(),fo.exports}var Ed;function tg(){if(Ed)return Ta;Ed=1;var A=Im(),K=ro(),R=eg();function h(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function L(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Q(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function z(e){if(L(e)!==e)throw Error(h(188))}function T(e){var t=e.alternate;if(!t){if(t=L(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,l=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return z(a),e;if(i===l)return z(a),t;i=i.sibling}throw Error(h(188))}if(n.return!==l.return)n=a,l=i;else{for(var u=!1,c=a.child;c;){if(c===n){u=!0,n=a,l=i;break}if(c===l){u=!0,l=a,n=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===n){u=!0,n=i,l=a;break}if(c===l){u=!0,l=i,n=a;break}c=c.sibling}if(!u)throw Error(h(189))}}if(n.alternate!==l)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}function W(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=W(e),t!==null)return t;e=e.sibling}return null}var D=Object.assign,B=Symbol.for("react.element"),J=Symbol.for("react.transitional.element"),X=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),pe=Symbol.for("react.strict_mode"),le=Symbol.for("react.profiler"),Se=Symbol.for("react.consumer"),ye=Symbol.for("react.context"),ke=Symbol.for("react.forward_ref"),xe=Symbol.for("react.suspense"),Ue=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),zt=Symbol.for("react.activity"),Qn=Symbol.for("react.memo_cache_sentinel"),Mt=Symbol.iterator;function Ve(e){return e===null||typeof e!="object"?null:(e=Mt&&e[Mt]||e["@@iterator"],typeof e=="function"?e:null)}var En=Symbol.for("react.client.reference");function Dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===En?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case le:return"Profiler";case pe:return"StrictMode";case xe:return"Suspense";case Ue:return"SuspenseList";case zt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case X:return"Portal";case ye:return e.displayName||"Context";case Se:return(e._context.displayName||"Context")+".Consumer";case ke:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return t=e.displayName||null,t!==null?t:Dt(e.type)||"Memo";case Ze:t=e._payload,e=e._init;try{return Dt(e(t))}catch{}}return null}var xt=Array.isArray,b=K.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=R.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U={pending:!1,data:null,method:null,action:null},fe=[],me=-1;function f(e){return{current:e}}function E(e){0>me||(e.current=fe[me],fe[me]=null,me--)}function C(e,t){me++,fe[me]=e.current,e.current=t}var O=f(null),G=f(null),$=f(null),ce=f(null);function Qe(e,t){switch(C($,t),C(G,e),C(O,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Lr(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Lr(t),e=qr(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}E(O),C(O,e)}function ze(){E(O),E(G),E($)}function wl(e){e.memoizedState!==null&&C(ce,e);var t=O.current,n=qr(t,e.type);t!==n&&(C(G,e),C(O,n))}function Ea(e){G.current===e&&(E(O),E(G)),ce.current===e&&(E(ce),ya._currentValue=U)}var Gi,ho;function An(e){if(Gi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Gi=t&&t[1]||"",ho=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Gi+e+ho}var ki=!1;function Qi(e,t){if(!e||ki)return"";ki=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var x=function(){throw Error()};if(Object.defineProperty(x.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(x,[])}catch(y){var p=y}Reflect.construct(e,[],x)}else{try{x.call()}catch(y){p=y}e.call(x.prototype)}}else{try{throw Error()}catch(y){p=y}(x=e())&&typeof x.catch=="function"&&x.catch(function(){})}}catch(y){if(y&&p&&typeof y.stack=="string")return[y.stack,p.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var o=u.split(`
`),g=c.split(`
`);for(a=l=0;l<o.length&&!o[l].includes("DetermineComponentFrameRoot");)l++;for(;a<g.length&&!g[a].includes("DetermineComponentFrameRoot");)a++;if(l===o.length||a===g.length)for(l=o.length-1,a=g.length-1;1<=l&&0<=a&&o[l]!==g[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==g[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==g[a]){var v=`
`+o[l].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=l&&0<=a);break}}}finally{ki=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?An(n):""}function zd(e,t){switch(e.tag){case 26:case 27:case 5:return An(e.type);case 16:return An("Lazy");case 13:return e.child!==t&&t!==null?An("Suspense Fallback"):An("Suspense");case 19:return An("SuspenseList");case 0:case 15:return Qi(e.type,!1);case 11:return Qi(e.type.render,!1);case 1:return Qi(e.type,!0);case 31:return An("Activity");default:return""}}function mo(e){try{var t="",n=null;do t+=zd(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Xi=Object.prototype.hasOwnProperty,Zi=A.unstable_scheduleCallback,Vi=A.unstable_cancelCallback,Md=A.unstable_shouldYield,Cd=A.unstable_requestPaint,et=A.unstable_now,wd=A.unstable_getCurrentPriorityLevel,go=A.unstable_ImmediatePriority,po=A.unstable_UserBlockingPriority,Aa=A.unstable_NormalPriority,Od=A.unstable_LowPriority,yo=A.unstable_IdlePriority,Nd=A.log,Dd=A.unstable_setDisableYieldValue,Ol=null,tt=null;function Ft(e){if(typeof Nd=="function"&&Dd(e),tt&&typeof tt.setStrictMode=="function")try{tt.setStrictMode(Ol,e)}catch{}}var nt=Math.clz32?Math.clz32:Hd,jd=Math.log,_d=Math.LN2;function Hd(e){return e>>>=0,e===0?32:31-(jd(e)/_d|0)|0}var za=256,Ma=262144,Ca=4194304;function zn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function wa(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var a=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var c=l&134217727;return c!==0?(l=c&~i,l!==0?a=zn(l):(u&=c,u!==0?a=zn(u):n||(n=c&~e,n!==0&&(a=zn(n))))):(c=l&~i,c!==0?a=zn(c):u!==0?a=zn(u):n||(n=l&~e,n!==0&&(a=zn(n)))),a===0?0:t!==0&&t!==a&&(t&i)===0&&(i=a&-a,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:a}function Nl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ud(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vo(){var e=Ca;return Ca<<=1,(Ca&62914560)===0&&(Ca=4194304),e}function Ji(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Dl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bd(e,t,n,l,a,i){var u=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var c=e.entanglements,o=e.expirationTimes,g=e.hiddenUpdates;for(n=u&~n;0<n;){var v=31-nt(n),x=1<<v;c[v]=0,o[v]=-1;var p=g[v];if(p!==null)for(g[v]=null,v=0;v<p.length;v++){var y=p[v];y!==null&&(y.lane&=-536870913)}n&=~x}l!==0&&bo(e,l,0),i!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function bo(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-nt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function So(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-nt(n),a=1<<l;a&t|e[l]&t&&(e[l]|=t),n&=~a}}function xo(e,t){var n=t&-t;return n=(n&42)!==0?1:Ki(n),(n&(e.suspendedLanes|t))!==0?0:n}function Ki(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Wi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function To(){var e=M.p;return e!==0?e:(e=window.event,e===void 0?32:od(e.type))}function Eo(e,t){var n=M.p;try{return M.p=e,t()}finally{M.p=n}}var $t=Math.random().toString(36).slice(2),Be="__reactFiber$"+$t,Je="__reactProps$"+$t,Xn="__reactContainer$"+$t,Fi="__reactEvents$"+$t,Rd="__reactListeners$"+$t,Ld="__reactHandles$"+$t,Ao="__reactResources$"+$t,jl="__reactMarker$"+$t;function $i(e){delete e[Be],delete e[Je],delete e[Fi],delete e[Rd],delete e[Ld]}function Zn(e){var t=e[Be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xn]||n[Be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vr(e);e!==null;){if(n=e[Be])return n;e=Vr(e)}return t}e=n,n=e.parentNode}return null}function Vn(e){if(e=e[Be]||e[Xn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function _l(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(h(33))}function Jn(e){var t=e[Ao];return t||(t=e[Ao]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function _e(e){e[jl]=!0}var zo=new Set,Mo={};function Mn(e,t){Kn(e,t),Kn(e+"Capture",t)}function Kn(e,t){for(Mo[e]=t,e=0;e<t.length;e++)zo.add(t[e])}var qd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Co={},wo={};function Yd(e){return Xi.call(wo,e)?!0:Xi.call(Co,e)?!1:qd.test(e)?wo[e]=!0:(Co[e]=!0,!1)}function Oa(e,t,n){if(Yd(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Na(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function jt(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}function rt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gd(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(u){n=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ii(e){if(!e._valueTracker){var t=Oo(e)?"checked":"value";e._valueTracker=Gd(e,t,""+e[t])}}function No(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=Oo(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function Da(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var kd=/[\n"\\]/g;function dt(e){return e.replace(kd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Pi(e,t,n,l,a,i,u,c){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+rt(t)):e.value!==""+rt(t)&&(e.value=""+rt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?eu(e,u,rt(t)):n!=null?eu(e,u,rt(n)):l!=null&&e.removeAttribute("value"),a==null&&i!=null&&(e.defaultChecked=!!i),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+rt(c):e.removeAttribute("name")}function Do(e,t,n,l,a,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Ii(e);return}n=n!=null?""+rt(n):"",t=t!=null?""+rt(t):n,c||t===e.value||(e.value=t),e.defaultValue=t}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=c?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Ii(e)}function eu(e,t,n){t==="number"&&Da(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Wn(e,t,n,l){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&l&&(e[n].defaultSelected=!0)}else{for(n=""+rt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,l&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function jo(e,t,n){if(t!=null&&(t=""+rt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+rt(n):""}function _o(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(h(92));if(xt(l)){if(1<l.length)throw Error(h(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=rt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),Ii(e)}function Fn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ho(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||Qd.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Uo(e,t,n){if(t!=null&&typeof t!="object")throw Error(h(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var a in t)l=t[a],t.hasOwnProperty(a)&&n[a]!==l&&Ho(e,a,l)}else for(var i in t)t.hasOwnProperty(i)&&Ho(e,i,t[i])}function tu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ja(e){return Zd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function _t(){}var nu=null;function lu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $n=null,In=null;function Bo(e){var t=Vn(e);if(t&&(e=t.stateNode)){var n=e[Je]||null;e:switch(e=t.stateNode,t.type){case"input":if(Pi(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+dt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var a=l[Je]||null;if(!a)throw Error(h(90));Pi(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&No(l)}break e;case"textarea":jo(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Wn(e,!!n.multiple,t,!1)}}}var au=!1;function Ro(e,t,n){if(au)return e(t,n);au=!0;try{var l=e(t);return l}finally{if(au=!1,($n!==null||In!==null)&&(bi(),$n&&(t=$n,e=In,In=$n=null,Bo(t),e)))for(t=0;t<e.length;t++)Bo(e[t])}}function Hl(e,t){var n=e.stateNode;if(n===null)return null;var l=n[Je]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),iu=!1;if(Ht)try{var Ul={};Object.defineProperty(Ul,"passive",{get:function(){iu=!0}}),window.addEventListener("test",Ul,Ul),window.removeEventListener("test",Ul,Ul)}catch{iu=!1}var It=null,uu=null,_a=null;function Lo(){if(_a)return _a;var e,t=uu,n=t.length,l,a="value"in It?It.value:It.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var u=n-e;for(l=1;l<=u&&t[n-l]===a[i-l];l++);return _a=a.slice(e,1<l?1-l:void 0)}function Ha(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ua(){return!0}function qo(){return!1}function Ke(e){function t(n,l,a,i,u){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ua:qo,this.isPropagationStopped=qo,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ua)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ua)},persist:function(){},isPersistent:Ua}),t}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ba=Ke(Cn),Bl=D({},Cn,{view:0,detail:0}),Vd=Ke(Bl),cu,ou,Rl,Ra=D({},Bl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rl&&(Rl&&e.type==="mousemove"?(cu=e.screenX-Rl.screenX,ou=e.screenY-Rl.screenY):ou=cu=0,Rl=e),cu)},movementY:function(e){return"movementY"in e?e.movementY:ou}}),Yo=Ke(Ra),Jd=D({},Ra,{dataTransfer:0}),Kd=Ke(Jd),Wd=D({},Bl,{relatedTarget:0}),su=Ke(Wd),Fd=D({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0}),$d=Ke(Fd),Id=D({},Cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pd=Ke(Id),eh=D({},Cn,{data:0}),Go=Ke(eh),th={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ah(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lh[e])?!!t[e]:!1}function fu(){return ah}var ih=D({},Bl,{key:function(e){if(e.key){var t=th[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ha(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(e){return e.type==="keypress"?Ha(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ha(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),uh=Ke(ih),ch=D({},Ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ko=Ke(ch),oh=D({},Bl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),sh=Ke(oh),fh=D({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),rh=Ke(fh),dh=D({},Ra,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hh=Ke(dh),mh=D({},Cn,{newState:0,oldState:0}),gh=Ke(mh),ph=[9,13,27,32],ru=Ht&&"CompositionEvent"in window,Ll=null;Ht&&"documentMode"in document&&(Ll=document.documentMode);var yh=Ht&&"TextEvent"in window&&!Ll,Qo=Ht&&(!ru||Ll&&8<Ll&&11>=Ll),Xo=" ",Zo=!1;function Vo(e,t){switch(e){case"keyup":return ph.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pn=!1;function vh(e,t){switch(e){case"compositionend":return Jo(t);case"keypress":return t.which!==32?null:(Zo=!0,Xo);case"textInput":return e=t.data,e===Xo&&Zo?null:e;default:return null}}function bh(e,t){if(Pn)return e==="compositionend"||!ru&&Vo(e,t)?(e=Lo(),_a=uu=It=null,Pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qo&&t.locale!=="ko"?null:t.data;default:return null}}var Sh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ko(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sh[e.type]:t==="textarea"}function Wo(e,t,n,l){$n?In?In.push(l):In=[l]:$n=l,t=Mi(t,"onChange"),0<t.length&&(n=new Ba("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var ql=null,Yl=null;function xh(e){jr(e,0)}function La(e){var t=_l(e);if(No(t))return e}function Fo(e,t){if(e==="change")return t}var $o=!1;if(Ht){var du;if(Ht){var hu="oninput"in document;if(!hu){var Io=document.createElement("div");Io.setAttribute("oninput","return;"),hu=typeof Io.oninput=="function"}du=hu}else du=!1;$o=du&&(!document.documentMode||9<document.documentMode)}function Po(){ql&&(ql.detachEvent("onpropertychange",es),Yl=ql=null)}function es(e){if(e.propertyName==="value"&&La(Yl)){var t=[];Wo(t,Yl,e,lu(e)),Ro(xh,t)}}function Th(e,t,n){e==="focusin"?(Po(),ql=t,Yl=n,ql.attachEvent("onpropertychange",es)):e==="focusout"&&Po()}function Eh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return La(Yl)}function Ah(e,t){if(e==="click")return La(t)}function zh(e,t){if(e==="input"||e==="change")return La(t)}function Mh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:Mh;function Gl(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!Xi.call(t,a)||!lt(e[a],t[a]))return!1}return!0}function ts(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ns(e,t){var n=ts(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ts(n)}}function ls(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ls(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function as(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Da(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Da(e.document)}return t}function mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ch=Ht&&"documentMode"in document&&11>=document.documentMode,el=null,gu=null,kl=null,pu=!1;function is(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pu||el==null||el!==Da(l)||(l=el,"selectionStart"in l&&mu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),kl&&Gl(kl,l)||(kl=l,l=Mi(gu,"onSelect"),0<l.length&&(t=new Ba("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=el)))}function wn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tl={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionrun:wn("Transition","TransitionRun"),transitionstart:wn("Transition","TransitionStart"),transitioncancel:wn("Transition","TransitionCancel"),transitionend:wn("Transition","TransitionEnd")},yu={},us={};Ht&&(us=document.createElement("div").style,"AnimationEvent"in window||(delete tl.animationend.animation,delete tl.animationiteration.animation,delete tl.animationstart.animation),"TransitionEvent"in window||delete tl.transitionend.transition);function On(e){if(yu[e])return yu[e];if(!tl[e])return e;var t=tl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in us)return yu[e]=t[n];return e}var cs=On("animationend"),os=On("animationiteration"),ss=On("animationstart"),wh=On("transitionrun"),Oh=On("transitionstart"),Nh=On("transitioncancel"),fs=On("transitionend"),rs=new Map,vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vu.push("scrollEnd");function Tt(e,t){rs.set(e,t),Mn(t,[e])}var qa=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ht=[],nl=0,bu=0;function Ya(){for(var e=nl,t=bu=nl=0;t<e;){var n=ht[t];ht[t++]=null;var l=ht[t];ht[t++]=null;var a=ht[t];ht[t++]=null;var i=ht[t];if(ht[t++]=null,l!==null&&a!==null){var u=l.pending;u===null?a.next=a:(a.next=u.next,u.next=a),l.pending=a}i!==0&&ds(n,a,i)}}function Ga(e,t,n,l){ht[nl++]=e,ht[nl++]=t,ht[nl++]=n,ht[nl++]=l,bu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Su(e,t,n,l){return Ga(e,t,n,l),ka(e)}function Nn(e,t){return Ga(e,null,null,t),ka(e)}function ds(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var a=!1,i=e.return;i!==null;)i.childLanes|=n,l=i.alternate,l!==null&&(l.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(a=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,a&&t!==null&&(a=31-nt(n),e=i.hiddenUpdates,l=e[a],l===null?e[a]=[t]:l.push(t),t.lane=n|536870912),i):null}function ka(e){if(50<fa)throw fa=0,Oc=null,Error(h(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ll={};function Dh(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,l){return new Dh(e,t,n,l)}function xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ut(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function hs(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Qa(e,t,n,l,a,i){var u=0;if(l=e,typeof e=="function")xu(e)&&(u=1);else if(typeof e=="string")u=Bm(e,n,O.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case zt:return e=at(31,n,t,a),e.elementType=zt,e.lanes=i,e;case F:return Dn(n.children,a,i,t);case pe:u=8,a|=24;break;case le:return e=at(12,n,t,a|2),e.elementType=le,e.lanes=i,e;case xe:return e=at(13,n,t,a),e.elementType=xe,e.lanes=i,e;case Ue:return e=at(19,n,t,a),e.elementType=Ue,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ye:u=10;break e;case Se:u=9;break e;case ke:u=11;break e;case V:u=14;break e;case Ze:u=16,l=null;break e}u=29,n=Error(h(130,e===null?"null":typeof e,"")),l=null}return t=at(u,n,t,a),t.elementType=e,t.type=l,t.lanes=i,t}function Dn(e,t,n,l){return e=at(7,e,l,t),e.lanes=n,e}function Tu(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function ms(e){var t=at(18,null,null,0);return t.stateNode=e,t}function Eu(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var gs=new WeakMap;function mt(e,t){if(typeof e=="object"&&e!==null){var n=gs.get(e);return n!==void 0?n:(t={value:e,source:t,stack:mo(t)},gs.set(e,t),t)}return{value:e,source:t,stack:mo(t)}}var al=[],il=0,Xa=null,Ql=0,gt=[],pt=0,Pt=null,Ct=1,wt="";function Bt(e,t){al[il++]=Ql,al[il++]=Xa,Xa=e,Ql=t}function ps(e,t,n){gt[pt++]=Ct,gt[pt++]=wt,gt[pt++]=Pt,Pt=e;var l=Ct;e=wt;var a=32-nt(l)-1;l&=~(1<<a),n+=1;var i=32-nt(t)+a;if(30<i){var u=a-a%5;i=(l&(1<<u)-1).toString(32),l>>=u,a-=u,Ct=1<<32-nt(t)+a|n<<a|l,wt=i+e}else Ct=1<<i|n<<a|l,wt=e}function Au(e){e.return!==null&&(Bt(e,1),ps(e,1,0))}function zu(e){for(;e===Xa;)Xa=al[--il],al[il]=null,Ql=al[--il],al[il]=null;for(;e===Pt;)Pt=gt[--pt],gt[pt]=null,wt=gt[--pt],gt[pt]=null,Ct=gt[--pt],gt[pt]=null}function ys(e,t){gt[pt++]=Ct,gt[pt++]=wt,gt[pt++]=Pt,Ct=t.id,wt=t.overflow,Pt=e}var Re=null,ve=null,ne=!1,en=null,yt=!1,Mu=Error(h(519));function tn(e){var t=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xl(mt(t,e)),Mu}function vs(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[Be]=e,t[Je]=l,n){case"dialog":P("cancel",t),P("close",t);break;case"iframe":case"object":case"embed":P("load",t);break;case"video":case"audio":for(n=0;n<da.length;n++)P(da[n],t);break;case"source":P("error",t);break;case"img":case"image":case"link":P("error",t),P("load",t);break;case"details":P("toggle",t);break;case"input":P("invalid",t),Do(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":P("invalid",t);break;case"textarea":P("invalid",t),_o(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||Br(t.textContent,n)?(l.popover!=null&&(P("beforetoggle",t),P("toggle",t)),l.onScroll!=null&&P("scroll",t),l.onScrollEnd!=null&&P("scrollend",t),l.onClick!=null&&(t.onclick=_t),t=!0):t=!1,t||tn(e,!0)}function bs(e){for(Re=e.return;Re;)switch(Re.tag){case 5:case 31:case 13:yt=!1;return;case 27:case 3:yt=!0;return;default:Re=Re.return}}function ul(e){if(e!==Re)return!1;if(!ne)return bs(e),ne=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Xc(e.type,e.memoizedProps)),n=!n),n&&ve&&tn(e),bs(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));ve=Zr(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));ve=Zr(e)}else t===27?(t=ve,pn(e.type)?(e=Wc,Wc=null,ve=e):ve=t):ve=Re?bt(e.stateNode.nextSibling):null;return!0}function jn(){ve=Re=null,ne=!1}function Cu(){var e=en;return e!==null&&(Ie===null?Ie=e:Ie.push.apply(Ie,e),en=null),e}function Xl(e){en===null?en=[e]:en.push(e)}var wu=f(null),_n=null,Rt=null;function nn(e,t,n){C(wu,t._currentValue),t._currentValue=n}function Lt(e){e._currentValue=wu.current,E(wu)}function Ou(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Nu(e,t,n,l){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var i=a.dependencies;if(i!==null){var u=a.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=a;for(var o=0;o<t.length;o++)if(c.context===t[o]){i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Ou(i.return,n,e),l||(u=null);break e}i=c.next}}else if(a.tag===18){if(u=a.return,u===null)throw Error(h(341));u.lanes|=n,i=u.alternate,i!==null&&(i.lanes|=n),Ou(u,n,e),u=null}else u=a.child;if(u!==null)u.return=a;else for(u=a;u!==null;){if(u===e){u=null;break}if(a=u.sibling,a!==null){a.return=u.return,u=a;break}u=u.return}a=u}}function cl(e,t,n,l){e=null;for(var a=t,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var u=a.alternate;if(u===null)throw Error(h(387));if(u=u.memoizedProps,u!==null){var c=a.type;lt(a.pendingProps.value,u.value)||(e!==null?e.push(c):e=[c])}}else if(a===ce.current){if(u=a.alternate,u===null)throw Error(h(387));u.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(ya):e=[ya])}a=a.return}e!==null&&Nu(t,e,n,l),t.flags|=262144}function Za(e){for(e=e.firstContext;e!==null;){if(!lt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Hn(e){_n=e,Rt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Le(e){return Ss(_n,e)}function Va(e,t){return _n===null&&Hn(e),Ss(e,t)}function Ss(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Rt===null){if(e===null)throw Error(h(308));Rt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Rt=Rt.next=t;return n}var jh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},_h=A.unstable_scheduleCallback,Hh=A.unstable_NormalPriority,we={$$typeof:ye,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Du(){return{controller:new jh,data:new Map,refCount:0}}function Zl(e){e.refCount--,e.refCount===0&&_h(Hh,function(){e.controller.abort()})}var Vl=null,ju=0,ol=0,sl=null;function Uh(e,t){if(Vl===null){var n=Vl=[];ju=0,ol=Uc(),sl={status:"pending",value:void 0,then:function(l){n.push(l)}}}return ju++,t.then(xs,xs),t}function xs(){if(--ju===0&&Vl!==null){sl!==null&&(sl.status="fulfilled");var e=Vl;Vl=null,ol=0,sl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Bh(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var Ts=b.S;b.S=function(e,t){ur=et(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Uh(e,t),Ts!==null&&Ts(e,t)};var Un=f(null);function _u(){var e=Un.current;return e!==null?e:ge.pooledCache}function Ja(e,t){t===null?C(Un,Un.current):C(Un,t.pool)}function Es(){var e=_u();return e===null?null:{parent:we._currentValue,pool:e}}var fl=Error(h(460)),Hu=Error(h(474)),Ka=Error(h(542)),Wa={then:function(){}};function As(e){return e=e.status,e==="fulfilled"||e==="rejected"}function zs(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(_t,_t),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Cs(e),e;default:if(typeof t.status=="string")t.then(_t,_t);else{if(e=ge,e!==null&&100<e.shellSuspendCounter)throw Error(h(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=l}},function(l){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Cs(e),e}throw Rn=t,fl}}function Bn(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Rn=n,fl):n}}var Rn=null;function Ms(){if(Rn===null)throw Error(h(459));var e=Rn;return Rn=null,e}function Cs(e){if(e===fl||e===Ka)throw Error(h(483))}var rl=null,Jl=0;function Fa(e){var t=Jl;return Jl+=1,rl===null&&(rl=[]),zs(rl,e,t)}function Kl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function $a(e,t){throw t.$$typeof===B?Error(h(525)):(e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ws(e){function t(r,s){if(e){var m=r.deletions;m===null?(r.deletions=[s],r.flags|=16):m.push(s)}}function n(r,s){if(!e)return null;for(;s!==null;)t(r,s),s=s.sibling;return null}function l(r){for(var s=new Map;r!==null;)r.key!==null?s.set(r.key,r):s.set(r.index,r),r=r.sibling;return s}function a(r,s){return r=Ut(r,s),r.index=0,r.sibling=null,r}function i(r,s,m){return r.index=m,e?(m=r.alternate,m!==null?(m=m.index,m<s?(r.flags|=67108866,s):m):(r.flags|=67108866,s)):(r.flags|=1048576,s)}function u(r){return e&&r.alternate===null&&(r.flags|=67108866),r}function c(r,s,m,S){return s===null||s.tag!==6?(s=Tu(m,r.mode,S),s.return=r,s):(s=a(s,m),s.return=r,s)}function o(r,s,m,S){var j=m.type;return j===F?v(r,s,m.props.children,S,m.key):s!==null&&(s.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Ze&&Bn(j)===s.type)?(s=a(s,m.props),Kl(s,m),s.return=r,s):(s=Qa(m.type,m.key,m.props,null,r.mode,S),Kl(s,m),s.return=r,s)}function g(r,s,m,S){return s===null||s.tag!==4||s.stateNode.containerInfo!==m.containerInfo||s.stateNode.implementation!==m.implementation?(s=Eu(m,r.mode,S),s.return=r,s):(s=a(s,m.children||[]),s.return=r,s)}function v(r,s,m,S,j){return s===null||s.tag!==7?(s=Dn(m,r.mode,S,j),s.return=r,s):(s=a(s,m),s.return=r,s)}function x(r,s,m){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=Tu(""+s,r.mode,m),s.return=r,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case J:return m=Qa(s.type,s.key,s.props,null,r.mode,m),Kl(m,s),m.return=r,m;case X:return s=Eu(s,r.mode,m),s.return=r,s;case Ze:return s=Bn(s),x(r,s,m)}if(xt(s)||Ve(s))return s=Dn(s,r.mode,m,null),s.return=r,s;if(typeof s.then=="function")return x(r,Fa(s),m);if(s.$$typeof===ye)return x(r,Va(r,s),m);$a(r,s)}return null}function p(r,s,m,S){var j=s!==null?s.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return j!==null?null:c(r,s,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case J:return m.key===j?o(r,s,m,S):null;case X:return m.key===j?g(r,s,m,S):null;case Ze:return m=Bn(m),p(r,s,m,S)}if(xt(m)||Ve(m))return j!==null?null:v(r,s,m,S,null);if(typeof m.then=="function")return p(r,s,Fa(m),S);if(m.$$typeof===ye)return p(r,s,Va(r,m),S);$a(r,m)}return null}function y(r,s,m,S,j){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return r=r.get(m)||null,c(s,r,""+S,j);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case J:return r=r.get(S.key===null?m:S.key)||null,o(s,r,S,j);case X:return r=r.get(S.key===null?m:S.key)||null,g(s,r,S,j);case Ze:return S=Bn(S),y(r,s,m,S,j)}if(xt(S)||Ve(S))return r=r.get(m)||null,v(s,r,S,j,null);if(typeof S.then=="function")return y(r,s,m,Fa(S),j);if(S.$$typeof===ye)return y(r,s,m,Va(s,S),j);$a(s,S)}return null}function w(r,s,m,S){for(var j=null,ae=null,N=s,Z=s=0,te=null;N!==null&&Z<m.length;Z++){N.index>Z?(te=N,N=null):te=N.sibling;var ie=p(r,N,m[Z],S);if(ie===null){N===null&&(N=te);break}e&&N&&ie.alternate===null&&t(r,N),s=i(ie,s,Z),ae===null?j=ie:ae.sibling=ie,ae=ie,N=te}if(Z===m.length)return n(r,N),ne&&Bt(r,Z),j;if(N===null){for(;Z<m.length;Z++)N=x(r,m[Z],S),N!==null&&(s=i(N,s,Z),ae===null?j=N:ae.sibling=N,ae=N);return ne&&Bt(r,Z),j}for(N=l(N);Z<m.length;Z++)te=y(N,r,Z,m[Z],S),te!==null&&(e&&te.alternate!==null&&N.delete(te.key===null?Z:te.key),s=i(te,s,Z),ae===null?j=te:ae.sibling=te,ae=te);return e&&N.forEach(function(xn){return t(r,xn)}),ne&&Bt(r,Z),j}function H(r,s,m,S){if(m==null)throw Error(h(151));for(var j=null,ae=null,N=s,Z=s=0,te=null,ie=m.next();N!==null&&!ie.done;Z++,ie=m.next()){N.index>Z?(te=N,N=null):te=N.sibling;var xn=p(r,N,ie.value,S);if(xn===null){N===null&&(N=te);break}e&&N&&xn.alternate===null&&t(r,N),s=i(xn,s,Z),ae===null?j=xn:ae.sibling=xn,ae=xn,N=te}if(ie.done)return n(r,N),ne&&Bt(r,Z),j;if(N===null){for(;!ie.done;Z++,ie=m.next())ie=x(r,ie.value,S),ie!==null&&(s=i(ie,s,Z),ae===null?j=ie:ae.sibling=ie,ae=ie);return ne&&Bt(r,Z),j}for(N=l(N);!ie.done;Z++,ie=m.next())ie=y(N,r,Z,ie.value,S),ie!==null&&(e&&ie.alternate!==null&&N.delete(ie.key===null?Z:ie.key),s=i(ie,s,Z),ae===null?j=ie:ae.sibling=ie,ae=ie);return e&&N.forEach(function(Jm){return t(r,Jm)}),ne&&Bt(r,Z),j}function he(r,s,m,S){if(typeof m=="object"&&m!==null&&m.type===F&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case J:e:{for(var j=m.key;s!==null;){if(s.key===j){if(j=m.type,j===F){if(s.tag===7){n(r,s.sibling),S=a(s,m.props.children),S.return=r,r=S;break e}}else if(s.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Ze&&Bn(j)===s.type){n(r,s.sibling),S=a(s,m.props),Kl(S,m),S.return=r,r=S;break e}n(r,s);break}else t(r,s);s=s.sibling}m.type===F?(S=Dn(m.props.children,r.mode,S,m.key),S.return=r,r=S):(S=Qa(m.type,m.key,m.props,null,r.mode,S),Kl(S,m),S.return=r,r=S)}return u(r);case X:e:{for(j=m.key;s!==null;){if(s.key===j)if(s.tag===4&&s.stateNode.containerInfo===m.containerInfo&&s.stateNode.implementation===m.implementation){n(r,s.sibling),S=a(s,m.children||[]),S.return=r,r=S;break e}else{n(r,s);break}else t(r,s);s=s.sibling}S=Eu(m,r.mode,S),S.return=r,r=S}return u(r);case Ze:return m=Bn(m),he(r,s,m,S)}if(xt(m))return w(r,s,m,S);if(Ve(m)){if(j=Ve(m),typeof j!="function")throw Error(h(150));return m=j.call(m),H(r,s,m,S)}if(typeof m.then=="function")return he(r,s,Fa(m),S);if(m.$$typeof===ye)return he(r,s,Va(r,m),S);$a(r,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,s!==null&&s.tag===6?(n(r,s.sibling),S=a(s,m),S.return=r,r=S):(n(r,s),S=Tu(m,r.mode,S),S.return=r,r=S),u(r)):n(r,s)}return function(r,s,m,S){try{Jl=0;var j=he(r,s,m,S);return rl=null,j}catch(N){if(N===fl||N===Ka)throw N;var ae=at(29,N,null,r.mode);return ae.lanes=S,ae.return=r,ae}}}var Ln=ws(!0),Os=ws(!1),ln=!1;function Uu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function an(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function un(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ue&2)!==0){var a=l.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t,t=ka(e),ds(e,null,n),t}return Ga(e,l,t,n),ka(e)}function Wl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,So(e,n)}}function Ru(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var u={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?a=i=u:i=i.next=u,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Lu=!1;function Fl(){if(Lu){var e=sl;if(e!==null)throw e}}function $l(e,t,n,l){Lu=!1;var a=e.updateQueue;ln=!1;var i=a.firstBaseUpdate,u=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var o=c,g=o.next;o.next=null,u===null?i=g:u.next=g,u=o;var v=e.alternate;v!==null&&(v=v.updateQueue,c=v.lastBaseUpdate,c!==u&&(c===null?v.firstBaseUpdate=g:c.next=g,v.lastBaseUpdate=o))}if(i!==null){var x=a.baseState;u=0,v=g=o=null,c=i;do{var p=c.lane&-536870913,y=p!==c.lane;if(y?(ee&p)===p:(l&p)===p){p!==0&&p===ol&&(Lu=!0),v!==null&&(v=v.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var w=e,H=c;p=t;var he=n;switch(H.tag){case 1:if(w=H.payload,typeof w=="function"){x=w.call(he,x,p);break e}x=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=H.payload,p=typeof w=="function"?w.call(he,x,p):w,p==null)break e;x=D({},x,p);break e;case 2:ln=!0}}p=c.callback,p!==null&&(e.flags|=64,y&&(e.flags|=8192),y=a.callbacks,y===null?a.callbacks=[p]:y.push(p))}else y={lane:p,tag:c.tag,payload:c.payload,callback:c.callback,next:null},v===null?(g=v=y,o=x):v=v.next=y,u|=p;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;y=c,c=y.next,y.next=null,a.lastBaseUpdate=y,a.shared.pending=null}}while(!0);v===null&&(o=x),a.baseState=o,a.firstBaseUpdate=g,a.lastBaseUpdate=v,i===null&&(a.shared.lanes=0),rn|=u,e.lanes=u,e.memoizedState=x}}function Ns(e,t){if(typeof e!="function")throw Error(h(191,e));e.call(t)}function Ds(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ns(n[e],t)}var dl=f(null),Ia=f(0);function js(e,t){e=Jt,C(Ia,e),C(dl,t),Jt=e|t.baseLanes}function qu(){C(Ia,Jt),C(dl,dl.current)}function Yu(){Jt=Ia.current,E(dl),E(Ia)}var it=f(null),vt=null;function cn(e){var t=e.alternate;C(Me,Me.current&1),C(it,e),vt===null&&(t===null||dl.current!==null||t.memoizedState!==null)&&(vt=e)}function Gu(e){C(Me,Me.current),C(it,e),vt===null&&(vt=e)}function _s(e){e.tag===22?(C(Me,Me.current),C(it,e),vt===null&&(vt=e)):on()}function on(){C(Me,Me.current),C(it,it.current)}function ut(e){E(it),vt===e&&(vt=null),E(Me)}var Me=f(0);function Pa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Jc(n)||Kc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qt=0,k=null,re=null,Oe=null,ei=!1,hl=!1,qn=!1,ti=0,Il=0,ml=null,Rh=0;function Ee(){throw Error(h(321))}function ku(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lt(e[n],t[n]))return!1;return!0}function Qu(e,t,n,l,a,i){return qt=i,k=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,b.H=e===null||e.memoizedState===null?yf:ac,qn=!1,i=n(l,a),qn=!1,hl&&(i=Us(t,n,l,a)),Hs(e),i}function Hs(e){b.H=ta;var t=re!==null&&re.next!==null;if(qt=0,Oe=re=k=null,ei=!1,Il=0,ml=null,t)throw Error(h(300));e===null||Ne||(e=e.dependencies,e!==null&&Za(e)&&(Ne=!0))}function Us(e,t,n,l){k=e;var a=0;do{if(hl&&(ml=null),Il=0,hl=!1,25<=a)throw Error(h(301));if(a+=1,Oe=re=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}b.H=vf,i=t(n,l)}while(hl);return i}function Lh(){var e=b.H,t=e.useState()[0];return t=typeof t.then=="function"?Pl(t):t,e=e.useState()[0],(re!==null?re.memoizedState:null)!==e&&(k.flags|=1024),t}function Xu(){var e=ti!==0;return ti=0,e}function Zu(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Vu(e){if(ei){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ei=!1}qt=0,Oe=re=k=null,hl=!1,Il=ti=0,ml=null}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?k.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function Ce(){if(re===null){var e=k.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=Oe===null?k.memoizedState:Oe.next;if(t!==null)Oe=t,re=e;else{if(e===null)throw k.alternate===null?Error(h(467)):Error(h(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},Oe===null?k.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function ni(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pl(e){var t=Il;return Il+=1,ml===null&&(ml=[]),e=zs(ml,e,t),t=k,(Oe===null?t.memoizedState:Oe.next)===null&&(t=t.alternate,b.H=t===null||t.memoizedState===null?yf:ac),e}function li(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Pl(e);if(e.$$typeof===ye)return Le(e)}throw Error(h(438,String(e)))}function Ju(e){var t=null,n=k.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=k.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ni(),k.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=Qn;return t.index++,n}function Yt(e,t){return typeof t=="function"?t(e):t}function ai(e){var t=Ce();return Ku(t,re,e)}function Ku(e,t,n){var l=e.queue;if(l===null)throw Error(h(311));l.lastRenderedReducer=n;var a=e.baseQueue,i=l.pending;if(i!==null){if(a!==null){var u=a.next;a.next=i.next,i.next=u}t.baseQueue=a=i,l.pending=null}if(i=e.baseState,a===null)e.memoizedState=i;else{t=a.next;var c=u=null,o=null,g=t,v=!1;do{var x=g.lane&-536870913;if(x!==g.lane?(ee&x)===x:(qt&x)===x){var p=g.revertLane;if(p===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),x===ol&&(v=!0);else if((qt&p)===p){g=g.next,p===ol&&(v=!0);continue}else x={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},o===null?(c=o=x,u=i):o=o.next=x,k.lanes|=p,rn|=p;x=g.action,qn&&n(i,x),i=g.hasEagerState?g.eagerState:n(i,x)}else p={lane:x,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},o===null?(c=o=p,u=i):o=o.next=p,k.lanes|=x,rn|=x;g=g.next}while(g!==null&&g!==t);if(o===null?u=i:o.next=c,!lt(i,e.memoizedState)&&(Ne=!0,v&&(n=sl,n!==null)))throw n;e.memoizedState=i,e.baseState=u,e.baseQueue=o,l.lastRenderedState=i}return a===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Wu(e){var t=Ce(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var l=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var u=a=a.next;do i=e(i,u.action),u=u.next;while(u!==a);lt(i,t.memoizedState)||(Ne=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,l]}function Bs(e,t,n){var l=k,a=Ce(),i=ne;if(i){if(n===void 0)throw Error(h(407));n=n()}else n=t();var u=!lt((re||a).memoizedState,n);if(u&&(a.memoizedState=n,Ne=!0),a=a.queue,Iu(qs.bind(null,l,a,e),[e]),a.getSnapshot!==t||u||Oe!==null&&Oe.memoizedState.tag&1){if(l.flags|=2048,gl(9,{destroy:void 0},Ls.bind(null,l,a,n,t),null),ge===null)throw Error(h(349));i||(qt&127)!==0||Rs(l,t,n)}return n}function Rs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=k.updateQueue,t===null?(t=ni(),k.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ls(e,t,n,l){t.value=n,t.getSnapshot=l,Ys(t)&&Gs(e)}function qs(e,t,n){return n(function(){Ys(t)&&Gs(e)})}function Ys(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lt(e,n)}catch{return!0}}function Gs(e){var t=Nn(e,2);t!==null&&Pe(t,e,2)}function Fu(e){var t=Xe();if(typeof e=="function"){var n=e;if(e=n(),qn){Ft(!0);try{n()}finally{Ft(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:e},t}function ks(e,t,n,l){return e.baseState=n,Ku(e,re,typeof l=="function"?l:Yt)}function qh(e,t,n,l,a){if(ci(e))throw Error(h(485));if(e=t.action,e!==null){var i={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};b.T!==null?n(!0):i.isTransition=!1,l(i),n=t.pending,n===null?(i.next=t.pending=i,Qs(t,i)):(i.next=n.next,t.pending=n.next=i)}}function Qs(e,t){var n=t.action,l=t.payload,a=e.state;if(t.isTransition){var i=b.T,u={};b.T=u;try{var c=n(a,l),o=b.S;o!==null&&o(u,c),Xs(e,t,c)}catch(g){$u(e,t,g)}finally{i!==null&&u.types!==null&&(i.types=u.types),b.T=i}}else try{i=n(a,l),Xs(e,t,i)}catch(g){$u(e,t,g)}}function Xs(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){Zs(e,t,l)},function(l){return $u(e,t,l)}):Zs(e,t,n)}function Zs(e,t,n){t.status="fulfilled",t.value=n,Vs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Qs(e,n)))}function $u(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,Vs(t),t=t.next;while(t!==l)}e.action=null}function Vs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Js(e,t){return t}function Ks(e,t){if(ne){var n=ge.formState;if(n!==null){e:{var l=k;if(ne){if(ve){t:{for(var a=ve,i=yt;a.nodeType!==8;){if(!i){a=null;break t}if(a=bt(a.nextSibling),a===null){a=null;break t}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){ve=bt(a.nextSibling),l=a.data==="F!";break e}}tn(l)}l=!1}l&&(t=n[0])}}return n=Xe(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Js,lastRenderedState:t},n.queue=l,n=mf.bind(null,k,l),l.dispatch=n,l=Fu(!1),i=lc.bind(null,k,!1,l.queue),l=Xe(),a={state:t,dispatch:null,action:e,pending:null},l.queue=a,n=qh.bind(null,k,a,i,n),a.dispatch=n,l.memoizedState=e,[t,n,!1]}function Ws(e){var t=Ce();return Fs(t,re,e)}function Fs(e,t,n){if(t=Ku(e,t,Js)[0],e=ai(Yt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Pl(t)}catch(u){throw u===fl?Ka:u}else l=t;t=Ce();var a=t.queue,i=a.dispatch;return n!==t.memoizedState&&(k.flags|=2048,gl(9,{destroy:void 0},Yh.bind(null,a,n),null)),[l,i,e]}function Yh(e,t){e.action=t}function $s(e){var t=Ce(),n=re;if(n!==null)return Fs(t,n,e);Ce(),t=t.memoizedState,n=Ce();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function gl(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=k.updateQueue,t===null&&(t=ni(),k.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function Is(){return Ce().memoizedState}function ii(e,t,n,l){var a=Xe();k.flags|=e,a.memoizedState=gl(1|t,{destroy:void 0},n,l===void 0?null:l)}function ui(e,t,n,l){var a=Ce();l=l===void 0?null:l;var i=a.memoizedState.inst;re!==null&&l!==null&&ku(l,re.memoizedState.deps)?a.memoizedState=gl(t,i,n,l):(k.flags|=e,a.memoizedState=gl(1|t,i,n,l))}function Ps(e,t){ii(8390656,8,e,t)}function Iu(e,t){ui(2048,8,e,t)}function Gh(e){k.flags|=4;var t=k.updateQueue;if(t===null)t=ni(),k.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ef(e){var t=Ce().memoizedState;return Gh({ref:t,nextImpl:e}),function(){if((ue&2)!==0)throw Error(h(440));return t.impl.apply(void 0,arguments)}}function tf(e,t){return ui(4,2,e,t)}function nf(e,t){return ui(4,4,e,t)}function lf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function af(e,t,n){n=n!=null?n.concat([e]):null,ui(4,4,lf.bind(null,t,e),n)}function Pu(){}function uf(e,t){var n=Ce();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&ku(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function cf(e,t){var n=Ce();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&ku(t,l[1]))return l[0];if(l=e(),qn){Ft(!0);try{e()}finally{Ft(!1)}}return n.memoizedState=[l,t],l}function ec(e,t,n){return n===void 0||(qt&1073741824)!==0&&(ee&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=or(),k.lanes|=e,rn|=e,n)}function of(e,t,n,l){return lt(n,t)?n:dl.current!==null?(e=ec(e,n,l),lt(e,t)||(Ne=!0),e):(qt&42)===0||(qt&1073741824)!==0&&(ee&261930)===0?(Ne=!0,e.memoizedState=n):(e=or(),k.lanes|=e,rn|=e,t)}function sf(e,t,n,l,a){var i=M.p;M.p=i!==0&&8>i?i:8;var u=b.T,c={};b.T=c,lc(e,!1,t,n);try{var o=a(),g=b.S;if(g!==null&&g(c,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var v=Bh(o,l);ea(e,t,v,st(e))}else ea(e,t,l,st(e))}catch(x){ea(e,t,{then:function(){},status:"rejected",reason:x},st())}finally{M.p=i,u!==null&&c.types!==null&&(u.types=c.types),b.T=u}}function kh(){}function tc(e,t,n,l){if(e.tag!==5)throw Error(h(476));var a=ff(e).queue;sf(e,a,t,U,n===null?kh:function(){return rf(e),n(l)})}function ff(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:U,baseState:U,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:U},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function rf(e){var t=ff(e);t.next===null&&(t=e.alternate.memoizedState),ea(e,t.next.queue,{},st())}function nc(){return Le(ya)}function df(){return Ce().memoizedState}function hf(){return Ce().memoizedState}function Qh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=st();e=an(n);var l=un(t,e,n);l!==null&&(Pe(l,t,n),Wl(l,t,n)),t={cache:Du()},e.payload=t;return}t=t.return}}function Xh(e,t,n){var l=st();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ci(e)?gf(t,n):(n=Su(e,t,n,l),n!==null&&(Pe(n,e,l),pf(n,t,l)))}function mf(e,t,n){var l=st();ea(e,t,n,l)}function ea(e,t,n,l){var a={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ci(e))gf(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,c=i(u,n);if(a.hasEagerState=!0,a.eagerState=c,lt(c,u))return Ga(e,t,a,0),ge===null&&Ya(),!1}catch{}if(n=Su(e,t,a,l),n!==null)return Pe(n,e,l),pf(n,t,l),!0}return!1}function lc(e,t,n,l){if(l={lane:2,revertLane:Uc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ci(e)){if(t)throw Error(h(479))}else t=Su(e,n,l,2),t!==null&&Pe(t,e,2)}function ci(e){var t=e.alternate;return e===k||t!==null&&t===k}function gf(e,t){hl=ei=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pf(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,So(e,n)}}var ta={readContext:Le,use:li,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useLayoutEffect:Ee,useInsertionEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useSyncExternalStore:Ee,useId:Ee,useHostTransitionStatus:Ee,useFormState:Ee,useActionState:Ee,useOptimistic:Ee,useMemoCache:Ee,useCacheRefresh:Ee};ta.useEffectEvent=Ee;var yf={readContext:Le,use:li,useCallback:function(e,t){return Xe().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:Ps,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ii(4194308,4,lf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ii(4194308,4,e,t)},useInsertionEffect:function(e,t){ii(4,2,e,t)},useMemo:function(e,t){var n=Xe();t=t===void 0?null:t;var l=e();if(qn){Ft(!0);try{e()}finally{Ft(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=Xe();if(n!==void 0){var a=n(t);if(qn){Ft(!0);try{n(t)}finally{Ft(!1)}}}else a=t;return l.memoizedState=l.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},l.queue=e,e=e.dispatch=Xh.bind(null,k,e),[l.memoizedState,e]},useRef:function(e){var t=Xe();return e={current:e},t.memoizedState=e},useState:function(e){e=Fu(e);var t=e.queue,n=mf.bind(null,k,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Pu,useDeferredValue:function(e,t){var n=Xe();return ec(n,e,t)},useTransition:function(){var e=Fu(!1);return e=sf.bind(null,k,e.queue,!0,!1),Xe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=k,a=Xe();if(ne){if(n===void 0)throw Error(h(407));n=n()}else{if(n=t(),ge===null)throw Error(h(349));(ee&127)!==0||Rs(l,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Ps(qs.bind(null,l,i,e),[e]),l.flags|=2048,gl(9,{destroy:void 0},Ls.bind(null,l,i,n,t),null),n},useId:function(){var e=Xe(),t=ge.identifierPrefix;if(ne){var n=wt,l=Ct;n=(l&~(1<<32-nt(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=ti++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Rh++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:nc,useFormState:Ks,useActionState:Ks,useOptimistic:function(e){var t=Xe();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=lc.bind(null,k,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ju,useCacheRefresh:function(){return Xe().memoizedState=Qh.bind(null,k)},useEffectEvent:function(e){var t=Xe(),n={impl:e};return t.memoizedState=n,function(){if((ue&2)!==0)throw Error(h(440));return n.impl.apply(void 0,arguments)}}},ac={readContext:Le,use:li,useCallback:uf,useContext:Le,useEffect:Iu,useImperativeHandle:af,useInsertionEffect:tf,useLayoutEffect:nf,useMemo:cf,useReducer:ai,useRef:Is,useState:function(){return ai(Yt)},useDebugValue:Pu,useDeferredValue:function(e,t){var n=Ce();return of(n,re.memoizedState,e,t)},useTransition:function(){var e=ai(Yt)[0],t=Ce().memoizedState;return[typeof e=="boolean"?e:Pl(e),t]},useSyncExternalStore:Bs,useId:df,useHostTransitionStatus:nc,useFormState:Ws,useActionState:Ws,useOptimistic:function(e,t){var n=Ce();return ks(n,re,e,t)},useMemoCache:Ju,useCacheRefresh:hf};ac.useEffectEvent=ef;var vf={readContext:Le,use:li,useCallback:uf,useContext:Le,useEffect:Iu,useImperativeHandle:af,useInsertionEffect:tf,useLayoutEffect:nf,useMemo:cf,useReducer:Wu,useRef:Is,useState:function(){return Wu(Yt)},useDebugValue:Pu,useDeferredValue:function(e,t){var n=Ce();return re===null?ec(n,e,t):of(n,re.memoizedState,e,t)},useTransition:function(){var e=Wu(Yt)[0],t=Ce().memoizedState;return[typeof e=="boolean"?e:Pl(e),t]},useSyncExternalStore:Bs,useId:df,useHostTransitionStatus:nc,useFormState:$s,useActionState:$s,useOptimistic:function(e,t){var n=Ce();return re!==null?ks(n,re,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ju,useCacheRefresh:hf};vf.useEffectEvent=ef;function ic(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:D({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var uc={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=st(),a=an(l);a.payload=t,n!=null&&(a.callback=n),t=un(e,a,l),t!==null&&(Pe(t,e,l),Wl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=st(),a=an(l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=un(e,a,l),t!==null&&(Pe(t,e,l),Wl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=st(),l=an(n);l.tag=2,t!=null&&(l.callback=t),t=un(e,l,n),t!==null&&(Pe(t,e,n),Wl(t,e,n))}};function bf(e,t,n,l,a,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!Gl(n,l)||!Gl(a,i):!0}function Sf(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&uc.enqueueReplaceState(t,t.state,null)}function Yn(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=D({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function xf(e){qa(e)}function Tf(e){console.error(e)}function Ef(e){qa(e)}function oi(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Af(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function cc(e,t,n){return n=an(n),n.tag=3,n.payload={element:null},n.callback=function(){oi(e,t)},n}function zf(e){return e=an(e),e.tag=3,e}function Mf(e,t,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var i=l.value;e.payload=function(){return a(i)},e.callback=function(){Af(t,n,l)}}var u=n.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Af(t,n,l),typeof a!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function Zh(e,t,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&cl(t,n,a,!0),n=it.current,n!==null){switch(n.tag){case 31:case 13:return vt===null?Si():n.alternate===null&&Ae===0&&(Ae=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===Wa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),jc(e,l,a)),!1;case 22:return n.flags|=65536,l===Wa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),jc(e,l,a)),!1}throw Error(h(435,n.tag))}return jc(e,l,a),Si(),!1}if(ne)return t=it.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,l!==Mu&&(e=Error(h(422),{cause:l}),Xl(mt(e,n)))):(l!==Mu&&(t=Error(h(423),{cause:l}),Xl(mt(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,l=mt(l,n),a=cc(e.stateNode,l,a),Ru(e,a),Ae!==4&&(Ae=2)),!1;var i=Error(h(520),{cause:l});if(i=mt(i,n),sa===null?sa=[i]:sa.push(i),Ae!==4&&(Ae=2),t===null)return!0;l=mt(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=cc(n.stateNode,l,e),Ru(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(dn===null||!dn.has(i))))return n.flags|=65536,a&=-a,n.lanes|=a,a=zf(a),Mf(a,e,n,l),Ru(n,a),!1}n=n.return}while(n!==null);return!1}var oc=Error(h(461)),Ne=!1;function qe(e,t,n,l){t.child=e===null?Os(t,null,n,l):Ln(t,e.child,n,l)}function Cf(e,t,n,l,a){n=n.render;var i=t.ref;if("ref"in l){var u={};for(var c in l)c!=="ref"&&(u[c]=l[c])}else u=l;return Hn(t),l=Qu(e,t,n,u,i,a),c=Xu(),e!==null&&!Ne?(Zu(e,t,a),Gt(e,t,a)):(ne&&c&&Au(t),t.flags|=1,qe(e,t,l,a),t.child)}function wf(e,t,n,l,a){if(e===null){var i=n.type;return typeof i=="function"&&!xu(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Of(e,t,i,l,a)):(e=Qa(n.type,null,l,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!pc(e,a)){var u=i.memoizedProps;if(n=n.compare,n=n!==null?n:Gl,n(u,l)&&e.ref===t.ref)return Gt(e,t,a)}return t.flags|=1,e=Ut(i,l),e.ref=t.ref,e.return=t,t.child=e}function Of(e,t,n,l,a){if(e!==null){var i=e.memoizedProps;if(Gl(i,l)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=l=i,pc(e,a))(e.flags&131072)!==0&&(Ne=!0);else return t.lanes=e.lanes,Gt(e,t,a)}return sc(e,t,n,l,a)}function Nf(e,t,n,l){var a=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(l=t.child=e.child,a=0;l!==null;)a=a|l.lanes|l.childLanes,l=l.sibling;l=a&~i}else l=0,t.child=null;return Df(e,t,i,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ja(t,i!==null?i.cachePool:null),i!==null?js(t,i):qu(),_s(t);else return l=t.lanes=536870912,Df(e,t,i!==null?i.baseLanes|n:n,n,l)}else i!==null?(Ja(t,i.cachePool),js(t,i),on(),t.memoizedState=null):(e!==null&&Ja(t,null),qu(),on());return qe(e,t,a,n),t.child}function na(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Df(e,t,n,l,a){var i=_u();return i=i===null?null:{parent:we._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Ja(t,null),qu(),_s(t),e!==null&&cl(e,t,l,!0),t.childLanes=a,null}function si(e,t){return t=ri({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function jf(e,t,n){return Ln(t,e.child,null,n),e=si(t,t.pendingProps),e.flags|=2,ut(t),t.memoizedState=null,e}function Vh(e,t,n){var l=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ne){if(l.mode==="hidden")return e=si(t,l),t.lanes=536870912,na(null,e);if(Gu(t),(e=ve)?(e=Xr(e,yt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pt!==null?{id:Ct,overflow:wt}:null,retryLane:536870912,hydrationErrors:null},n=ms(e),n.return=t,t.child=n,Re=t,ve=null)):e=null,e===null)throw tn(t);return t.lanes=536870912,null}return si(t,l)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(Gu(t),a)if(t.flags&256)t.flags&=-257,t=jf(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(h(558));else if(Ne||cl(e,t,n,!1),a=(n&e.childLanes)!==0,Ne||a){if(l=ge,l!==null&&(u=xo(l,n),u!==0&&u!==i.retryLane))throw i.retryLane=u,Nn(e,u),Pe(l,e,u),oc;Si(),t=jf(e,t,n)}else e=i.treeContext,ve=bt(u.nextSibling),Re=t,ne=!0,en=null,yt=!1,e!==null&&ys(t,e),t=si(t,l),t.flags|=4096;return t}return e=Ut(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function fi(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(h(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function sc(e,t,n,l,a){return Hn(t),n=Qu(e,t,n,l,void 0,a),l=Xu(),e!==null&&!Ne?(Zu(e,t,a),Gt(e,t,a)):(ne&&l&&Au(t),t.flags|=1,qe(e,t,n,a),t.child)}function _f(e,t,n,l,a,i){return Hn(t),t.updateQueue=null,n=Us(t,l,n,a),Hs(e),l=Xu(),e!==null&&!Ne?(Zu(e,t,i),Gt(e,t,i)):(ne&&l&&Au(t),t.flags|=1,qe(e,t,n,i),t.child)}function Hf(e,t,n,l,a){if(Hn(t),t.stateNode===null){var i=ll,u=n.contextType;typeof u=="object"&&u!==null&&(i=Le(u)),i=new n(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=uc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Uu(t),u=n.contextType,i.context=typeof u=="object"&&u!==null?Le(u):ll,i.state=t.memoizedState,u=n.getDerivedStateFromProps,typeof u=="function"&&(ic(t,n,u,l),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&uc.enqueueReplaceState(i,i.state,null),$l(t,l,i,a),Fl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var c=t.memoizedProps,o=Yn(n,c);i.props=o;var g=i.context,v=n.contextType;u=ll,typeof v=="object"&&v!==null&&(u=Le(v));var x=n.getDerivedStateFromProps;v=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||g!==u)&&Sf(t,i,l,u),ln=!1;var p=t.memoizedState;i.state=p,$l(t,l,i,a),Fl(),g=t.memoizedState,c||p!==g||ln?(typeof x=="function"&&(ic(t,n,x,l),g=t.memoizedState),(o=ln||bf(t,n,o,l,p,g,u))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=g),i.props=l,i.state=g,i.context=u,l=o):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Bu(e,t),u=t.memoizedProps,v=Yn(n,u),i.props=v,x=t.pendingProps,p=i.context,g=n.contextType,o=ll,typeof g=="object"&&g!==null&&(o=Le(g)),c=n.getDerivedStateFromProps,(g=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==x||p!==o)&&Sf(t,i,l,o),ln=!1,p=t.memoizedState,i.state=p,$l(t,l,i,a),Fl();var y=t.memoizedState;u!==x||p!==y||ln||e!==null&&e.dependencies!==null&&Za(e.dependencies)?(typeof c=="function"&&(ic(t,n,c,l),y=t.memoizedState),(v=ln||bf(t,n,v,l,p,y,o)||e!==null&&e.dependencies!==null&&Za(e.dependencies))?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,y,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,y,o)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=y),i.props=l,i.state=y,i.context=o,l=v):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,fi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Ln(t,e.child,null,a),t.child=Ln(t,null,n,a)):qe(e,t,n,a),t.memoizedState=i.state,e=t.child):e=Gt(e,t,a),e}function Uf(e,t,n,l){return jn(),t.flags|=256,qe(e,t,n,l),t.child}var fc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rc(e){return{baseLanes:e,cachePool:Es()}}function dc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=ot),e}function Bf(e,t,n){var l=t.pendingProps,a=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(Me.current&2)!==0),u&&(a=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(ne){if(a?cn(t):on(),(e=ve)?(e=Xr(e,yt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pt!==null?{id:Ct,overflow:wt}:null,retryLane:536870912,hydrationErrors:null},n=ms(e),n.return=t,t.child=n,Re=t,ve=null)):e=null,e===null)throw tn(t);return Kc(e)?t.lanes=32:t.lanes=536870912,null}var c=l.children;return l=l.fallback,a?(on(),a=t.mode,c=ri({mode:"hidden",children:c},a),l=Dn(l,a,n,null),c.return=t,l.return=t,c.sibling=l,t.child=c,l=t.child,l.memoizedState=rc(n),l.childLanes=dc(e,u,n),t.memoizedState=fc,na(null,l)):(cn(t),hc(t,c))}var o=e.memoizedState;if(o!==null&&(c=o.dehydrated,c!==null)){if(i)t.flags&256?(cn(t),t.flags&=-257,t=mc(e,t,n)):t.memoizedState!==null?(on(),t.child=e.child,t.flags|=128,t=null):(on(),c=l.fallback,a=t.mode,l=ri({mode:"visible",children:l.children},a),c=Dn(c,a,n,null),c.flags|=2,l.return=t,c.return=t,l.sibling=c,t.child=l,Ln(t,e.child,null,n),l=t.child,l.memoizedState=rc(n),l.childLanes=dc(e,u,n),t.memoizedState=fc,t=na(null,l));else if(cn(t),Kc(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var g=u.dgst;u=g,l=Error(h(419)),l.stack="",l.digest=u,Xl({value:l,source:null,stack:null}),t=mc(e,t,n)}else if(Ne||cl(e,t,n,!1),u=(n&e.childLanes)!==0,Ne||u){if(u=ge,u!==null&&(l=xo(u,n),l!==0&&l!==o.retryLane))throw o.retryLane=l,Nn(e,l),Pe(u,e,l),oc;Jc(c)||Si(),t=mc(e,t,n)}else Jc(c)?(t.flags|=192,t.child=e.child,t=null):(e=o.treeContext,ve=bt(c.nextSibling),Re=t,ne=!0,en=null,yt=!1,e!==null&&ys(t,e),t=hc(t,l.children),t.flags|=4096);return t}return a?(on(),c=l.fallback,a=t.mode,o=e.child,g=o.sibling,l=Ut(o,{mode:"hidden",children:l.children}),l.subtreeFlags=o.subtreeFlags&65011712,g!==null?c=Ut(g,c):(c=Dn(c,a,n,null),c.flags|=2),c.return=t,l.return=t,l.sibling=c,t.child=l,na(null,l),l=t.child,c=e.child.memoizedState,c===null?c=rc(n):(a=c.cachePool,a!==null?(o=we._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=Es(),c={baseLanes:c.baseLanes|n,cachePool:a}),l.memoizedState=c,l.childLanes=dc(e,u,n),t.memoizedState=fc,na(e.child,l)):(cn(t),n=e.child,e=n.sibling,n=Ut(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=n,t.memoizedState=null,n)}function hc(e,t){return t=ri({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ri(e,t){return e=at(22,e,null,t),e.lanes=0,e}function mc(e,t,n){return Ln(t,e.child,null,n),e=hc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rf(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Ou(e.return,t,n)}function gc(e,t,n,l,a,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=n,u.tailMode=a,u.treeForkCount=i)}function Lf(e,t,n){var l=t.pendingProps,a=l.revealOrder,i=l.tail;l=l.children;var u=Me.current,c=(u&2)!==0;if(c?(u=u&1|2,t.flags|=128):u&=1,C(Me,u),qe(e,t,l,n),l=ne?Ql:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rf(e,n,t);else if(e.tag===19)Rf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Pa(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),gc(t,!1,a,n,i,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Pa(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}gc(t,!0,n,null,i,l);break;case"together":gc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Gt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(cl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=Ut(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Za(e)))}function Jh(e,t,n){switch(t.tag){case 3:Qe(t,t.stateNode.containerInfo),nn(t,we,e.memoizedState.cache),jn();break;case 27:case 5:wl(t);break;case 4:Qe(t,t.stateNode.containerInfo);break;case 10:nn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Gu(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(cn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Bf(e,t,n):(cn(t),e=Gt(e,t,n),e!==null?e.sibling:null);cn(t);break;case 19:var a=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(cl(e,t,n,!1),l=(n&t.childLanes)!==0),a){if(l)return Lf(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),C(Me,Me.current),l)break;return null;case 22:return t.lanes=0,Nf(e,t,n,t.pendingProps);case 24:nn(t,we,e.memoizedState.cache)}return Gt(e,t,n)}function qf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ne=!0;else{if(!pc(e,n)&&(t.flags&128)===0)return Ne=!1,Jh(e,t,n);Ne=(e.flags&131072)!==0}else Ne=!1,ne&&(t.flags&1048576)!==0&&ps(t,Ql,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Bn(t.elementType),t.type=e,typeof e=="function")xu(e)?(l=Yn(e,l),t.tag=1,t=Hf(null,t,e,l,n)):(t.tag=0,t=sc(null,t,e,l,n));else{if(e!=null){var a=e.$$typeof;if(a===ke){t.tag=11,t=Cf(null,t,e,l,n);break e}else if(a===V){t.tag=14,t=wf(null,t,e,l,n);break e}}throw t=Dt(e)||e,Error(h(306,t,""))}}return t;case 0:return sc(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,a=Yn(l,t.pendingProps),Hf(e,t,l,a,n);case 3:e:{if(Qe(t,t.stateNode.containerInfo),e===null)throw Error(h(387));l=t.pendingProps;var i=t.memoizedState;a=i.element,Bu(e,t),$l(t,l,null,n);var u=t.memoizedState;if(l=u.cache,nn(t,we,l),l!==i.cache&&Nu(t,[we],n,!0),Fl(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Uf(e,t,l,n);break e}else if(l!==a){a=mt(Error(h(424)),t),Xl(a),t=Uf(e,t,l,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ve=bt(e.firstChild),Re=t,ne=!0,en=null,yt=!0,n=Os(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jn(),l===a){t=Gt(e,t,n);break e}qe(e,t,l,n)}t=t.child}return t;case 26:return fi(e,t),e===null?(n=Fr(t.type,null,t.pendingProps,null))?t.memoizedState=n:ne||(n=t.type,e=t.pendingProps,l=Ci($.current).createElement(n),l[Be]=t,l[Je]=e,Ye(l,n,e),_e(l),t.stateNode=l):t.memoizedState=Fr(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return wl(t),e===null&&ne&&(l=t.stateNode=Jr(t.type,t.pendingProps,$.current),Re=t,yt=!0,a=ve,pn(t.type)?(Wc=a,ve=bt(l.firstChild)):ve=a),qe(e,t,t.pendingProps.children,n),fi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ne&&((a=l=ve)&&(l=Em(l,t.type,t.pendingProps,yt),l!==null?(t.stateNode=l,Re=t,ve=bt(l.firstChild),yt=!1,a=!0):a=!1),a||tn(t)),wl(t),a=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,l=i.children,Xc(a,i)?l=null:u!==null&&Xc(a,u)&&(t.flags|=32),t.memoizedState!==null&&(a=Qu(e,t,Lh,null,null,n),ya._currentValue=a),fi(e,t),qe(e,t,l,n),t.child;case 6:return e===null&&ne&&((e=n=ve)&&(n=Am(n,t.pendingProps,yt),n!==null?(t.stateNode=n,Re=t,ve=null,e=!0):e=!1),e||tn(t)),null;case 13:return Bf(e,t,n);case 4:return Qe(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ln(t,null,l,n):qe(e,t,l,n),t.child;case 11:return Cf(e,t,t.type,t.pendingProps,n);case 7:return qe(e,t,t.pendingProps,n),t.child;case 8:return qe(e,t,t.pendingProps.children,n),t.child;case 12:return qe(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,nn(t,t.type,l.value),qe(e,t,l.children,n),t.child;case 9:return a=t.type._context,l=t.pendingProps.children,Hn(t),a=Le(a),l=l(a),t.flags|=1,qe(e,t,l,n),t.child;case 14:return wf(e,t,t.type,t.pendingProps,n);case 15:return Of(e,t,t.type,t.pendingProps,n);case 19:return Lf(e,t,n);case 31:return Vh(e,t,n);case 22:return Nf(e,t,n,t.pendingProps);case 24:return Hn(t),l=Le(we),e===null?(a=_u(),a===null&&(a=ge,i=Du(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=n),a=i),t.memoizedState={parent:l,cache:a},Uu(t),nn(t,we,a)):((e.lanes&n)!==0&&(Bu(e,t),$l(t,null,null,n),Fl()),a=e.memoizedState,i=t.memoizedState,a.parent!==l?(a={parent:l,cache:l},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),nn(t,we,l)):(l=i.cache,nn(t,we,l),l!==a.cache&&Nu(t,[we],n,!0))),qe(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(h(156,t.tag))}function kt(e){e.flags|=4}function yc(e,t,n,l,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(dr())e.flags|=8192;else throw Rn=Wa,Hu}else e.flags&=-16777217}function Yf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!td(t))if(dr())e.flags|=8192;else throw Rn=Wa,Hu}function di(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?vo():536870912,e.lanes|=t,bl|=t)}function la(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function Kh(e,t,n){var l=t.pendingProps;switch(zu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return be(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Lt(we),ze(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ul(t)?kt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Cu())),be(t),null;case 26:var a=t.type,i=t.memoizedState;return e===null?(kt(t),i!==null?(be(t),Yf(t,i)):(be(t),yc(t,a,null,l,n))):i?i!==e.memoizedState?(kt(t),be(t),Yf(t,i)):(be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&kt(t),be(t),yc(t,a,e,l,n)),null;case 27:if(Ea(t),n=$.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&kt(t);else{if(!l){if(t.stateNode===null)throw Error(h(166));return be(t),null}e=O.current,ul(t)?vs(t):(e=Jr(a,l,n),t.stateNode=e,kt(t))}return be(t),null;case 5:if(Ea(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&kt(t);else{if(!l){if(t.stateNode===null)throw Error(h(166));return be(t),null}if(i=O.current,ul(t))vs(t);else{var u=Ci($.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(a,{is:l.is}):u.createElement(a)}}i[Be]=t,i[Je]=l;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(Ye(i,a,l),a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&kt(t)}}return be(t),yc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&kt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(h(166));if(e=$.current,ul(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,a=Re,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}e[Be]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||Br(e.nodeValue,n)),e||tn(t,!0)}else e=Ci(e).createTextNode(l),e[Be]=t,t.stateNode=e}return be(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=ul(t),n!==null){if(e===null){if(!l)throw Error(h(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(557));e[Be]=t}else jn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;be(t),e=!1}else n=Cu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ut(t),t):(ut(t),null);if((t.flags&128)!==0)throw Error(h(558))}return be(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=ul(t),l!==null&&l.dehydrated!==null){if(e===null){if(!a)throw Error(h(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(h(317));a[Be]=t}else jn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;be(t),a=!1}else a=Cu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ut(t),t):(ut(t),null)}return ut(t),(t.flags&128)!==0?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==a&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),di(t,t.updateQueue),be(t),null);case 4:return ze(),e===null&&qc(t.stateNode.containerInfo),be(t),null;case 10:return Lt(t.type),be(t),null;case 19:if(E(Me),l=t.memoizedState,l===null)return be(t),null;if(a=(t.flags&128)!==0,i=l.rendering,i===null)if(a)la(l,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Pa(e),i!==null){for(t.flags|=128,la(l,!1),e=i.updateQueue,t.updateQueue=e,di(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)hs(n,e),n=n.sibling;return C(Me,Me.current&1|2),ne&&Bt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&et()>yi&&(t.flags|=128,a=!0,la(l,!1),t.lanes=4194304)}else{if(!a)if(e=Pa(i),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,di(t,e),la(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ne)return be(t),null}else 2*et()-l.renderingStartTime>yi&&n!==536870912&&(t.flags|=128,a=!0,la(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=et(),e.sibling=null,n=Me.current,C(Me,a?n&1|2:n&1),ne&&Bt(t,l.treeForkCount),e):(be(t),null);case 22:case 23:return ut(t),Yu(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),n=t.updateQueue,n!==null&&di(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&E(Un),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Lt(we),be(t),null;case 25:return null;case 30:return null}throw Error(h(156,t.tag))}function Wh(e,t){switch(zu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Lt(we),ze(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ea(t),null;case 31:if(t.memoizedState!==null){if(ut(t),t.alternate===null)throw Error(h(340));jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ut(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return E(Me),null;case 4:return ze(),null;case 10:return Lt(t.type),null;case 22:case 23:return ut(t),Yu(),e!==null&&E(Un),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Lt(we),null;case 25:return null;default:return null}}function Gf(e,t){switch(zu(t),t.tag){case 3:Lt(we),ze();break;case 26:case 27:case 5:Ea(t);break;case 4:ze();break;case 31:t.memoizedState!==null&&ut(t);break;case 13:ut(t);break;case 19:E(Me);break;case 10:Lt(t.type);break;case 22:case 23:ut(t),Yu(),e!==null&&E(Un);break;case 24:Lt(we)}}function aa(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&e)===e){l=void 0;var i=n.create,u=n.inst;l=i(),u.destroy=l}n=n.next}while(n!==a)}}catch(c){se(t,t.return,c)}}function sn(e,t,n){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&e)===e){var u=l.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,a=t;var o=n,g=c;try{g()}catch(v){se(a,o,v)}}}l=l.next}while(l!==i)}}catch(v){se(t,t.return,v)}}function kf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ds(t,n)}catch(l){se(e,e.return,l)}}}function Qf(e,t,n){n.props=Yn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){se(e,t,l)}}function ia(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(a){se(e,t,a)}}function Ot(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){se(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){se(e,t,a)}else n.current=null}function Xf(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){se(e,e.return,a)}}function vc(e,t,n){try{var l=e.stateNode;ym(l,e.type,n,t),l[Je]=t}catch(a){se(e,e.return,a)}}function Zf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pn(e.type)||e.tag===4}function bc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sc(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=_t));else if(l!==4&&(l===27&&pn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Sc(e,t,n),e=e.sibling;e!==null;)Sc(e,t,n),e=e.sibling}function hi(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&pn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(hi(e,t,n),e=e.sibling;e!==null;)hi(e,t,n),e=e.sibling}function Vf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Ye(t,l,n),t[Be]=e,t[Je]=n}catch(i){se(e,e.return,i)}}var Qt=!1,De=!1,xc=!1,Jf=typeof WeakSet=="function"?WeakSet:Set,He=null;function Fh(e,t){if(e=e.containerInfo,kc=Hi,e=as(e),mu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var u=0,c=-1,o=-1,g=0,v=0,x=e,p=null;t:for(;;){for(var y;x!==n||a!==0&&x.nodeType!==3||(c=u+a),x!==i||l!==0&&x.nodeType!==3||(o=u+l),x.nodeType===3&&(u+=x.nodeValue.length),(y=x.firstChild)!==null;)p=x,x=y;for(;;){if(x===e)break t;if(p===n&&++g===a&&(c=u),p===i&&++v===l&&(o=u),(y=x.nextSibling)!==null)break;x=p,p=x.parentNode}x=y}n=c===-1||o===-1?null:{start:c,end:o}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qc={focusedElem:e,selectionRange:n},Hi=!1,He=t;He!==null;)if(t=He,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,He=e;else for(;He!==null;){switch(t=He,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,a=i.memoizedProps,i=i.memoizedState,l=n.stateNode;try{var w=Yn(n.type,a);e=l.getSnapshotBeforeUpdate(w,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(H){se(n,n.return,H)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Vc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(h(163))}if(e=t.sibling,e!==null){e.return=t.return,He=e;break}He=t.return}}function Kf(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Zt(e,n),l&4&&aa(5,n);break;case 1:if(Zt(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(u){se(n,n.return,u)}else{var a=Yn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){se(n,n.return,u)}}l&64&&kf(n),l&512&&ia(n,n.return);break;case 3:if(Zt(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ds(e,t)}catch(u){se(n,n.return,u)}}break;case 27:t===null&&l&4&&Vf(n);case 26:case 5:Zt(e,n),t===null&&l&4&&Xf(n),l&512&&ia(n,n.return);break;case 12:Zt(e,n);break;case 31:Zt(e,n),l&4&&$f(e,n);break;case 13:Zt(e,n),l&4&&If(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=im.bind(null,n),zm(e,n))));break;case 22:if(l=n.memoizedState!==null||Qt,!l){t=t!==null&&t.memoizedState!==null||De,a=Qt;var i=De;Qt=l,(De=t)&&!i?Vt(e,n,(n.subtreeFlags&8772)!==0):Zt(e,n),Qt=a,De=i}break;case 30:break;default:Zt(e,n)}}function Wf(e){var t=e.alternate;t!==null&&(e.alternate=null,Wf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&$i(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Te=null,We=!1;function Xt(e,t,n){for(n=n.child;n!==null;)Ff(e,t,n),n=n.sibling}function Ff(e,t,n){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(Ol,n)}catch{}switch(n.tag){case 26:De||Ot(n,t),Xt(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:De||Ot(n,t);var l=Te,a=We;pn(n.type)&&(Te=n.stateNode,We=!1),Xt(e,t,n),ma(n.stateNode),Te=l,We=a;break;case 5:De||Ot(n,t);case 6:if(l=Te,a=We,Te=null,Xt(e,t,n),Te=l,We=a,Te!==null)if(We)try{(Te.nodeType===9?Te.body:Te.nodeName==="HTML"?Te.ownerDocument.body:Te).removeChild(n.stateNode)}catch(i){se(n,t,i)}else try{Te.removeChild(n.stateNode)}catch(i){se(n,t,i)}break;case 18:Te!==null&&(We?(e=Te,kr(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Cl(e)):kr(Te,n.stateNode));break;case 4:l=Te,a=We,Te=n.stateNode.containerInfo,We=!0,Xt(e,t,n),Te=l,We=a;break;case 0:case 11:case 14:case 15:sn(2,n,t),De||sn(4,n,t),Xt(e,t,n);break;case 1:De||(Ot(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&Qf(n,t,l)),Xt(e,t,n);break;case 21:Xt(e,t,n);break;case 22:De=(l=De)||n.memoizedState!==null,Xt(e,t,n),De=l;break;default:Xt(e,t,n)}}function $f(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Cl(e)}catch(n){se(t,t.return,n)}}}function If(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Cl(e)}catch(n){se(t,t.return,n)}}function $h(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Jf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Jf),t;default:throw Error(h(435,e.tag))}}function mi(e,t){var n=$h(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var a=um.bind(null,e,l);l.then(a,a)}})}function Fe(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l],i=e,u=t,c=u;e:for(;c!==null;){switch(c.tag){case 27:if(pn(c.type)){Te=c.stateNode,We=!1;break e}break;case 5:Te=c.stateNode,We=!1;break e;case 3:case 4:Te=c.stateNode.containerInfo,We=!0;break e}c=c.return}if(Te===null)throw Error(h(160));Ff(i,u,a),Te=null,We=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Pf(t,e),t=t.sibling}var Et=null;function Pf(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Fe(t,e),$e(e),l&4&&(sn(3,e,e.return),aa(3,e),sn(5,e,e.return));break;case 1:Fe(t,e),$e(e),l&512&&(De||n===null||Ot(n,n.return)),l&64&&Qt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var a=Et;if(Fe(t,e),$e(e),l&512&&(De||n===null||Ot(n,n.return)),l&4){var i=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(l){case"title":i=a.getElementsByTagName("title")[0],(!i||i[jl]||i[Be]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(l),a.head.insertBefore(i,a.querySelector("head > title"))),Ye(i,l,n),i[Be]=e,_e(i),l=i;break e;case"link":var u=Pr("link","href",a).get(l+(n.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){u.splice(c,1);break t}}i=a.createElement(l),Ye(i,l,n),a.head.appendChild(i);break;case"meta":if(u=Pr("meta","content",a).get(l+(n.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){u.splice(c,1);break t}}i=a.createElement(l),Ye(i,l,n),a.head.appendChild(i);break;default:throw Error(h(468,l))}i[Be]=e,_e(i),l=i}e.stateNode=l}else ed(a,e.type,e.stateNode);else e.stateNode=Ir(a,l,e.memoizedProps);else i!==l?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,l===null?ed(a,e.type,e.stateNode):Ir(a,l,e.memoizedProps)):l===null&&e.stateNode!==null&&vc(e,e.memoizedProps,n.memoizedProps)}break;case 27:Fe(t,e),$e(e),l&512&&(De||n===null||Ot(n,n.return)),n!==null&&l&4&&vc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Fe(t,e),$e(e),l&512&&(De||n===null||Ot(n,n.return)),e.flags&32){a=e.stateNode;try{Fn(a,"")}catch(w){se(e,e.return,w)}}l&4&&e.stateNode!=null&&(a=e.memoizedProps,vc(e,a,n!==null?n.memoizedProps:a)),l&1024&&(xc=!0);break;case 6:if(Fe(t,e),$e(e),l&4){if(e.stateNode===null)throw Error(h(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(w){se(e,e.return,w)}}break;case 3:if(Ni=null,a=Et,Et=wi(t.containerInfo),Fe(t,e),Et=a,$e(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Cl(t.containerInfo)}catch(w){se(e,e.return,w)}xc&&(xc=!1,er(e));break;case 4:l=Et,Et=wi(e.stateNode.containerInfo),Fe(t,e),$e(e),Et=l;break;case 12:Fe(t,e),$e(e);break;case 31:Fe(t,e),$e(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,mi(e,l)));break;case 13:Fe(t,e),$e(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(pi=et()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,mi(e,l)));break;case 22:a=e.memoizedState!==null;var o=n!==null&&n.memoizedState!==null,g=Qt,v=De;if(Qt=g||a,De=v||o,Fe(t,e),De=v,Qt=g,$e(e),l&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||o||Qt||De||Gn(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){o=n=t;try{if(i=o.stateNode,a)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=o.stateNode;var x=o.memoizedProps.style,p=x!=null&&x.hasOwnProperty("display")?x.display:null;c.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(w){se(o,o.return,w)}}}else if(t.tag===6){if(n===null){o=t;try{o.stateNode.nodeValue=a?"":o.memoizedProps}catch(w){se(o,o.return,w)}}}else if(t.tag===18){if(n===null){o=t;try{var y=o.stateNode;a?Qr(y,!0):Qr(o.stateNode,!1)}catch(w){se(o,o.return,w)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,mi(e,n))));break;case 19:Fe(t,e),$e(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,mi(e,l)));break;case 30:break;case 21:break;default:Fe(t,e),$e(e)}}function $e(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(Zf(l)){n=l;break}l=l.return}if(n==null)throw Error(h(160));switch(n.tag){case 27:var a=n.stateNode,i=bc(e);hi(e,i,a);break;case 5:var u=n.stateNode;n.flags&32&&(Fn(u,""),n.flags&=-33);var c=bc(e);hi(e,c,u);break;case 3:case 4:var o=n.stateNode.containerInfo,g=bc(e);Sc(e,g,o);break;default:throw Error(h(161))}}catch(v){se(e,e.return,v)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function er(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;er(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Zt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Kf(e,t.alternate,t),t=t.sibling}function Gn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:sn(4,t,t.return),Gn(t);break;case 1:Ot(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Qf(t,t.return,n),Gn(t);break;case 27:ma(t.stateNode);case 26:case 5:Ot(t,t.return),Gn(t);break;case 22:t.memoizedState===null&&Gn(t);break;case 30:Gn(t);break;default:Gn(t)}e=e.sibling}}function Vt(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,a=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:Vt(a,i,n),aa(4,i);break;case 1:if(Vt(a,i,n),l=i,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(g){se(l,l.return,g)}if(l=i,a=l.updateQueue,a!==null){var c=l.stateNode;try{var o=a.shared.hiddenCallbacks;if(o!==null)for(a.shared.hiddenCallbacks=null,a=0;a<o.length;a++)Ns(o[a],c)}catch(g){se(l,l.return,g)}}n&&u&64&&kf(i),ia(i,i.return);break;case 27:Vf(i);case 26:case 5:Vt(a,i,n),n&&l===null&&u&4&&Xf(i),ia(i,i.return);break;case 12:Vt(a,i,n);break;case 31:Vt(a,i,n),n&&u&4&&$f(a,i);break;case 13:Vt(a,i,n),n&&u&4&&If(a,i);break;case 22:i.memoizedState===null&&Vt(a,i,n),ia(i,i.return);break;case 30:break;default:Vt(a,i,n)}t=t.sibling}}function Tc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Zl(n))}function Ec(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Zl(e))}function At(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)tr(e,t,n,l),t=t.sibling}function tr(e,t,n,l){var a=t.flags;switch(t.tag){case 0:case 11:case 15:At(e,t,n,l),a&2048&&aa(9,t);break;case 1:At(e,t,n,l);break;case 3:At(e,t,n,l),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Zl(e)));break;case 12:if(a&2048){At(e,t,n,l),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(o){se(t,t.return,o)}}else At(e,t,n,l);break;case 31:At(e,t,n,l);break;case 13:At(e,t,n,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?At(e,t,n,l):ua(e,t):i._visibility&2?At(e,t,n,l):(i._visibility|=2,pl(e,t,n,l,(t.subtreeFlags&10256)!==0||!1)),a&2048&&Tc(u,t);break;case 24:At(e,t,n,l),a&2048&&Ec(t.alternate,t);break;default:At(e,t,n,l)}}function pl(e,t,n,l,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,c=n,o=l,g=u.flags;switch(u.tag){case 0:case 11:case 15:pl(i,u,c,o,a),aa(8,u);break;case 23:break;case 22:var v=u.stateNode;u.memoizedState!==null?v._visibility&2?pl(i,u,c,o,a):ua(i,u):(v._visibility|=2,pl(i,u,c,o,a)),a&&g&2048&&Tc(u.alternate,u);break;case 24:pl(i,u,c,o,a),a&&g&2048&&Ec(u.alternate,u);break;default:pl(i,u,c,o,a)}t=t.sibling}}function ua(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,a=l.flags;switch(l.tag){case 22:ua(n,l),a&2048&&Tc(l.alternate,l);break;case 24:ua(n,l),a&2048&&Ec(l.alternate,l);break;default:ua(n,l)}t=t.sibling}}var ca=8192;function yl(e,t,n){if(e.subtreeFlags&ca)for(e=e.child;e!==null;)nr(e,t,n),e=e.sibling}function nr(e,t,n){switch(e.tag){case 26:yl(e,t,n),e.flags&ca&&e.memoizedState!==null&&Rm(n,Et,e.memoizedState,e.memoizedProps);break;case 5:yl(e,t,n);break;case 3:case 4:var l=Et;Et=wi(e.stateNode.containerInfo),yl(e,t,n),Et=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=ca,ca=16777216,yl(e,t,n),ca=l):yl(e,t,n));break;default:yl(e,t,n)}}function lr(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function oa(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];He=l,ir(l,e)}lr(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ar(e),e=e.sibling}function ar(e){switch(e.tag){case 0:case 11:case 15:oa(e),e.flags&2048&&sn(9,e,e.return);break;case 3:oa(e);break;case 12:oa(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,gi(e)):oa(e);break;default:oa(e)}}function gi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];He=l,ir(l,e)}lr(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:sn(8,t,t.return),gi(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,gi(t));break;default:gi(t)}e=e.sibling}}function ir(e,t){for(;He!==null;){var n=He;switch(n.tag){case 0:case 11:case 15:sn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Zl(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,He=l;else e:for(n=e;He!==null;){l=He;var a=l.sibling,i=l.return;if(Wf(l),l===n){He=null;break e}if(a!==null){a.return=i,He=a;break e}He=i}}}var Ih={getCacheForType:function(e){var t=Le(we),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Le(we).controller.signal}},Ph=typeof WeakMap=="function"?WeakMap:Map,ue=0,ge=null,I=null,ee=0,oe=0,ct=null,fn=!1,vl=!1,Ac=!1,Jt=0,Ae=0,rn=0,kn=0,zc=0,ot=0,bl=0,sa=null,Ie=null,Mc=!1,pi=0,ur=0,yi=1/0,vi=null,dn=null,je=0,hn=null,Sl=null,Kt=0,Cc=0,wc=null,cr=null,fa=0,Oc=null;function st(){return(ue&2)!==0&&ee!==0?ee&-ee:b.T!==null?Uc():To()}function or(){if(ot===0)if((ee&536870912)===0||ne){var e=Ma;Ma<<=1,(Ma&3932160)===0&&(Ma=262144),ot=e}else ot=536870912;return e=it.current,e!==null&&(e.flags|=32),ot}function Pe(e,t,n){(e===ge&&(oe===2||oe===9)||e.cancelPendingCommit!==null)&&(xl(e,0),mn(e,ee,ot,!1)),Dl(e,n),((ue&2)===0||e!==ge)&&(e===ge&&((ue&2)===0&&(kn|=n),Ae===4&&mn(e,ee,ot,!1)),Nt(e))}function sr(e,t,n){if((ue&6)!==0)throw Error(h(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Nl(e,t),a=l?nm(e,t):Dc(e,t,!0),i=l;do{if(a===0){vl&&!l&&mn(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!em(n)){a=Dc(e,t,!1),i=!1;continue}if(a===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var c=e;a=sa;var o=c.current.memoizedState.isDehydrated;if(o&&(xl(c,u).flags|=256),u=Dc(c,u,!1),u!==2){if(Ac&&!o){c.errorRecoveryDisabledLanes|=i,kn|=i,a=4;break e}i=Ie,Ie=a,i!==null&&(Ie===null?Ie=i:Ie.push.apply(Ie,i))}a=u}if(i=!1,a!==2)continue}}if(a===1){xl(e,0),mn(e,t,0,!0);break}e:{switch(l=e,i=a,i){case 0:case 1:throw Error(h(345));case 4:if((t&4194048)!==t)break;case 6:mn(l,t,ot,!fn);break e;case 2:Ie=null;break;case 3:case 5:break;default:throw Error(h(329))}if((t&62914560)===t&&(a=pi+300-et(),10<a)){if(mn(l,t,ot,!fn),wa(l,0,!0)!==0)break e;Kt=t,l.timeoutHandle=Yr(fr.bind(null,l,n,Ie,vi,Mc,t,ot,kn,bl,fn,i,"Throttled",-0,0),a);break e}fr(l,n,Ie,vi,Mc,t,ot,kn,bl,fn,i,null,-0,0)}}break}while(!0);Nt(e)}function fr(e,t,n,l,a,i,u,c,o,g,v,x,p,y){if(e.timeoutHandle=-1,x=t.subtreeFlags,x&8192||(x&16785408)===16785408){x={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_t},nr(t,i,x);var w=(i&62914560)===i?pi-et():(i&4194048)===i?ur-et():0;if(w=Lm(x,w),w!==null){Kt=i,e.cancelPendingCommit=w(vr.bind(null,e,t,i,n,l,a,u,c,o,v,x,null,p,y)),mn(e,i,u,!g);return}}vr(e,t,i,n,l,a,u,c,o)}function em(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],i=a.getSnapshot;a=a.value;try{if(!lt(i(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mn(e,t,n,l){t&=~zc,t&=~kn,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var a=t;0<a;){var i=31-nt(a),u=1<<i;l[i]=-1,a&=~u}n!==0&&bo(e,n,t)}function bi(){return(ue&6)===0?(ra(0),!1):!0}function Nc(){if(I!==null){if(oe===0)var e=I.return;else e=I,Rt=_n=null,Vu(e),rl=null,Jl=0,e=I;for(;e!==null;)Gf(e.alternate,e),e=e.return;I=null}}function xl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Sm(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Kt=0,Nc(),ge=e,I=n=Ut(e.current,null),ee=t,oe=0,ct=null,fn=!1,vl=Nl(e,t),Ac=!1,bl=ot=zc=kn=rn=Ae=0,Ie=sa=null,Mc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var a=31-nt(l),i=1<<a;t|=e[a],l&=~i}return Jt=t,Ya(),n}function rr(e,t){k=null,b.H=ta,t===fl||t===Ka?(t=Ms(),oe=3):t===Hu?(t=Ms(),oe=4):oe=t===oc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ct=t,I===null&&(Ae=1,oi(e,mt(t,e.current)))}function dr(){var e=it.current;return e===null?!0:(ee&4194048)===ee?vt===null:(ee&62914560)===ee||(ee&536870912)!==0?e===vt:!1}function hr(){var e=b.H;return b.H=ta,e===null?ta:e}function mr(){var e=b.A;return b.A=Ih,e}function Si(){Ae=4,fn||(ee&4194048)!==ee&&it.current!==null||(vl=!0),(rn&134217727)===0&&(kn&134217727)===0||ge===null||mn(ge,ee,ot,!1)}function Dc(e,t,n){var l=ue;ue|=2;var a=hr(),i=mr();(ge!==e||ee!==t)&&(vi=null,xl(e,t)),t=!1;var u=Ae;e:do try{if(oe!==0&&I!==null){var c=I,o=ct;switch(oe){case 8:Nc(),u=6;break e;case 3:case 2:case 9:case 6:it.current===null&&(t=!0);var g=oe;if(oe=0,ct=null,Tl(e,c,o,g),n&&vl){u=0;break e}break;default:g=oe,oe=0,ct=null,Tl(e,c,o,g)}}tm(),u=Ae;break}catch(v){rr(e,v)}while(!0);return t&&e.shellSuspendCounter++,Rt=_n=null,ue=l,b.H=a,b.A=i,I===null&&(ge=null,ee=0,Ya()),u}function tm(){for(;I!==null;)gr(I)}function nm(e,t){var n=ue;ue|=2;var l=hr(),a=mr();ge!==e||ee!==t?(vi=null,yi=et()+500,xl(e,t)):vl=Nl(e,t);e:do try{if(oe!==0&&I!==null){t=I;var i=ct;t:switch(oe){case 1:oe=0,ct=null,Tl(e,t,i,1);break;case 2:case 9:if(As(i)){oe=0,ct=null,pr(t);break}t=function(){oe!==2&&oe!==9||ge!==e||(oe=7),Nt(e)},i.then(t,t);break e;case 3:oe=7;break e;case 4:oe=5;break e;case 7:As(i)?(oe=0,ct=null,pr(t)):(oe=0,ct=null,Tl(e,t,i,7));break;case 5:var u=null;switch(I.tag){case 26:u=I.memoizedState;case 5:case 27:var c=I;if(u?td(u):c.stateNode.complete){oe=0,ct=null;var o=c.sibling;if(o!==null)I=o;else{var g=c.return;g!==null?(I=g,xi(g)):I=null}break t}}oe=0,ct=null,Tl(e,t,i,5);break;case 6:oe=0,ct=null,Tl(e,t,i,6);break;case 8:Nc(),Ae=6;break e;default:throw Error(h(462))}}lm();break}catch(v){rr(e,v)}while(!0);return Rt=_n=null,b.H=l,b.A=a,ue=n,I!==null?0:(ge=null,ee=0,Ya(),Ae)}function lm(){for(;I!==null&&!Md();)gr(I)}function gr(e){var t=qf(e.alternate,e,Jt);e.memoizedProps=e.pendingProps,t===null?xi(e):I=t}function pr(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_f(n,t,t.pendingProps,t.type,void 0,ee);break;case 11:t=_f(n,t,t.pendingProps,t.type.render,t.ref,ee);break;case 5:Vu(t);default:Gf(n,t),t=I=hs(t,Jt),t=qf(n,t,Jt)}e.memoizedProps=e.pendingProps,t===null?xi(e):I=t}function Tl(e,t,n,l){Rt=_n=null,Vu(t),rl=null,Jl=0;var a=t.return;try{if(Zh(e,a,t,n,ee)){Ae=1,oi(e,mt(n,e.current)),I=null;return}}catch(i){if(a!==null)throw I=a,i;Ae=1,oi(e,mt(n,e.current)),I=null;return}t.flags&32768?(ne||l===1?e=!0:vl||(ee&536870912)!==0?e=!1:(fn=e=!0,(l===2||l===9||l===3||l===6)&&(l=it.current,l!==null&&l.tag===13&&(l.flags|=16384))),yr(t,e)):xi(t)}function xi(e){var t=e;do{if((t.flags&32768)!==0){yr(t,fn);return}e=t.return;var n=Kh(t.alternate,t,Jt);if(n!==null){I=n;return}if(t=t.sibling,t!==null){I=t;return}I=t=e}while(t!==null);Ae===0&&(Ae=5)}function yr(e,t){do{var n=Wh(e.alternate,e);if(n!==null){n.flags&=32767,I=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){I=e;return}I=e=n}while(e!==null);Ae=6,I=null}function vr(e,t,n,l,a,i,u,c,o){e.cancelPendingCommit=null;do Ti();while(je!==0);if((ue&6)!==0)throw Error(h(327));if(t!==null){if(t===e.current)throw Error(h(177));if(i=t.lanes|t.childLanes,i|=bu,Bd(e,n,i,u,c,o),e===ge&&(I=ge=null,ee=0),Sl=t,hn=e,Kt=n,Cc=i,wc=a,cr=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,cm(Aa,function(){return Er(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=b.T,b.T=null,a=M.p,M.p=2,u=ue,ue|=4;try{Fh(e,t,n)}finally{ue=u,M.p=a,b.T=l}}je=1,br(),Sr(),xr()}}function br(){if(je===1){je=0;var e=hn,t=Sl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=b.T,b.T=null;var l=M.p;M.p=2;var a=ue;ue|=4;try{Pf(t,e);var i=Qc,u=as(e.containerInfo),c=i.focusedElem,o=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&ls(c.ownerDocument.documentElement,c)){if(o!==null&&mu(c)){var g=o.start,v=o.end;if(v===void 0&&(v=g),"selectionStart"in c)c.selectionStart=g,c.selectionEnd=Math.min(v,c.value.length);else{var x=c.ownerDocument||document,p=x&&x.defaultView||window;if(p.getSelection){var y=p.getSelection(),w=c.textContent.length,H=Math.min(o.start,w),he=o.end===void 0?H:Math.min(o.end,w);!y.extend&&H>he&&(u=he,he=H,H=u);var r=ns(c,H),s=ns(c,he);if(r&&s&&(y.rangeCount!==1||y.anchorNode!==r.node||y.anchorOffset!==r.offset||y.focusNode!==s.node||y.focusOffset!==s.offset)){var m=x.createRange();m.setStart(r.node,r.offset),y.removeAllRanges(),H>he?(y.addRange(m),y.extend(s.node,s.offset)):(m.setEnd(s.node,s.offset),y.addRange(m))}}}}for(x=[],y=c;y=y.parentNode;)y.nodeType===1&&x.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<x.length;c++){var S=x[c];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Hi=!!kc,Qc=kc=null}finally{ue=a,M.p=l,b.T=n}}e.current=t,je=2}}function Sr(){if(je===2){je=0;var e=hn,t=Sl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=b.T,b.T=null;var l=M.p;M.p=2;var a=ue;ue|=4;try{Kf(e,t.alternate,t)}finally{ue=a,M.p=l,b.T=n}}je=3}}function xr(){if(je===4||je===3){je=0,Cd();var e=hn,t=Sl,n=Kt,l=cr;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?je=5:(je=0,Sl=hn=null,Tr(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(dn=null),Wi(n),t=t.stateNode,tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(Ol,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=b.T,a=M.p,M.p=2,b.T=null;try{for(var i=e.onRecoverableError,u=0;u<l.length;u++){var c=l[u];i(c.value,{componentStack:c.stack})}}finally{b.T=t,M.p=a}}(Kt&3)!==0&&Ti(),Nt(e),a=e.pendingLanes,(n&261930)!==0&&(a&42)!==0?e===Oc?fa++:(fa=0,Oc=e):fa=0,ra(0)}}function Tr(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Zl(t)))}function Ti(){return br(),Sr(),xr(),Er()}function Er(){if(je!==5)return!1;var e=hn,t=Cc;Cc=0;var n=Wi(Kt),l=b.T,a=M.p;try{M.p=32>n?32:n,b.T=null,n=wc,wc=null;var i=hn,u=Kt;if(je=0,Sl=hn=null,Kt=0,(ue&6)!==0)throw Error(h(331));var c=ue;if(ue|=4,ar(i.current),tr(i,i.current,u,n),ue=c,ra(0,!1),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(Ol,i)}catch{}return!0}finally{M.p=a,b.T=l,Tr(e,t)}}function Ar(e,t,n){t=mt(n,t),t=cc(e.stateNode,t,2),e=un(e,t,2),e!==null&&(Dl(e,2),Nt(e))}function se(e,t,n){if(e.tag===3)Ar(e,e,n);else for(;t!==null;){if(t.tag===3){Ar(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(dn===null||!dn.has(l))){e=mt(n,e),n=zf(2),l=un(t,n,2),l!==null&&(Mf(n,l,t,e),Dl(l,2),Nt(l));break}}t=t.return}}function jc(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new Ph;var a=new Set;l.set(t,a)}else a=l.get(t),a===void 0&&(a=new Set,l.set(t,a));a.has(n)||(Ac=!0,a.add(n),e=am.bind(null,e,t,n),t.then(e,e))}function am(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ge===e&&(ee&n)===n&&(Ae===4||Ae===3&&(ee&62914560)===ee&&300>et()-pi?(ue&2)===0&&xl(e,0):zc|=n,bl===ee&&(bl=0)),Nt(e)}function zr(e,t){t===0&&(t=vo()),e=Nn(e,t),e!==null&&(Dl(e,t),Nt(e))}function im(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zr(e,n)}function um(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(h(314))}l!==null&&l.delete(t),zr(e,n)}function cm(e,t){return Zi(e,t)}var Ei=null,El=null,_c=!1,Ai=!1,Hc=!1,gn=0;function Nt(e){e!==El&&e.next===null&&(El===null?Ei=El=e:El=El.next=e),Ai=!0,_c||(_c=!0,sm())}function ra(e,t){if(!Hc&&Ai){Hc=!0;do for(var n=!1,l=Ei;l!==null;){if(e!==0){var a=l.pendingLanes;if(a===0)var i=0;else{var u=l.suspendedLanes,c=l.pingedLanes;i=(1<<31-nt(42|e)+1)-1,i&=a&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,Or(l,i))}else i=ee,i=wa(l,l===ge?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Nl(l,i)||(n=!0,Or(l,i));l=l.next}while(n);Hc=!1}}function om(){Mr()}function Mr(){Ai=_c=!1;var e=0;gn!==0&&bm()&&(e=gn);for(var t=et(),n=null,l=Ei;l!==null;){var a=l.next,i=Cr(l,t);i===0?(l.next=null,n===null?Ei=a:n.next=a,a===null&&(El=n)):(n=l,(e!==0||(i&3)!==0)&&(Ai=!0)),l=a}je!==0&&je!==5||ra(e),gn!==0&&(gn=0)}function Cr(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-nt(i),c=1<<u,o=a[u];o===-1?((c&n)===0||(c&l)!==0)&&(a[u]=Ud(c,t)):o<=t&&(e.expiredLanes|=c),i&=~c}if(t=ge,n=ee,n=wa(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(oe===2||oe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Vi(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Nl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&Vi(l),Wi(n)){case 2:case 8:n=po;break;case 32:n=Aa;break;case 268435456:n=yo;break;default:n=Aa}return l=wr.bind(null,e),n=Zi(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&Vi(l),e.callbackPriority=2,e.callbackNode=null,2}function wr(e,t){if(je!==0&&je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ti()&&e.callbackNode!==n)return null;var l=ee;return l=wa(e,e===ge?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(sr(e,l,t),Cr(e,et()),e.callbackNode!=null&&e.callbackNode===n?wr.bind(null,e):null)}function Or(e,t){if(Ti())return null;sr(e,t,!0)}function sm(){xm(function(){(ue&6)!==0?Zi(go,om):Mr()})}function Uc(){if(gn===0){var e=ol;e===0&&(e=za,za<<=1,(za&261888)===0&&(za=256)),gn=e}return gn}function Nr(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ja(""+e)}function Dr(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function fm(e,t,n,l,a){if(t==="submit"&&n&&n.stateNode===a){var i=Nr((a[Je]||null).action),u=l.submitter;u&&(t=(t=u[Je]||null)?Nr(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var c=new Ba("action","action",null,l,a);e.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(gn!==0){var o=u?Dr(a,u):new FormData(a);tc(n,{pending:!0,data:o,method:a.method,action:i},null,o)}}else typeof i=="function"&&(c.preventDefault(),o=u?Dr(a,u):new FormData(a),tc(n,{pending:!0,data:o,method:a.method,action:i},i,o))},currentTarget:a}]})}}for(var Bc=0;Bc<vu.length;Bc++){var Rc=vu[Bc],rm=Rc.toLowerCase(),dm=Rc[0].toUpperCase()+Rc.slice(1);Tt(rm,"on"+dm)}Tt(cs,"onAnimationEnd"),Tt(os,"onAnimationIteration"),Tt(ss,"onAnimationStart"),Tt("dblclick","onDoubleClick"),Tt("focusin","onFocus"),Tt("focusout","onBlur"),Tt(wh,"onTransitionRun"),Tt(Oh,"onTransitionStart"),Tt(Nh,"onTransitionCancel"),Tt(fs,"onTransitionEnd"),Kn("onMouseEnter",["mouseout","mouseover"]),Kn("onMouseLeave",["mouseout","mouseover"]),Kn("onPointerEnter",["pointerout","pointerover"]),Kn("onPointerLeave",["pointerout","pointerover"]),Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(da));function jr(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],a=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var c=l[u],o=c.instance,g=c.currentTarget;if(c=c.listener,o!==i&&a.isPropagationStopped())break e;i=c,a.currentTarget=g;try{i(a)}catch(v){qa(v)}a.currentTarget=null,i=o}else for(u=0;u<l.length;u++){if(c=l[u],o=c.instance,g=c.currentTarget,c=c.listener,o!==i&&a.isPropagationStopped())break e;i=c,a.currentTarget=g;try{i(a)}catch(v){qa(v)}a.currentTarget=null,i=o}}}}function P(e,t){var n=t[Fi];n===void 0&&(n=t[Fi]=new Set);var l=e+"__bubble";n.has(l)||(_r(t,e,2,!1),n.add(l))}function Lc(e,t,n){var l=0;t&&(l|=4),_r(n,e,l,t)}var zi="_reactListening"+Math.random().toString(36).slice(2);function qc(e){if(!e[zi]){e[zi]=!0,zo.forEach(function(n){n!=="selectionchange"&&(hm.has(n)||Lc(n,!1,e),Lc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zi]||(t[zi]=!0,Lc("selectionchange",!1,t))}}function _r(e,t,n,l){switch(od(t)){case 2:var a=Gm;break;case 8:a=km;break;default:a=eo}n=a.bind(null,t,n,e),a=void 0,!iu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),l?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Yc(e,t,n,l,a){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var c=l.stateNode.containerInfo;if(c===a)break;if(u===4)for(u=l.return;u!==null;){var o=u.tag;if((o===3||o===4)&&u.stateNode.containerInfo===a)return;u=u.return}for(;c!==null;){if(u=Zn(c),u===null)return;if(o=u.tag,o===5||o===6||o===26||o===27){l=i=u;continue e}c=c.parentNode}}l=l.return}Ro(function(){var g=i,v=lu(n),x=[];e:{var p=rs.get(e);if(p!==void 0){var y=Ba,w=e;switch(e){case"keypress":if(Ha(n)===0)break e;case"keydown":case"keyup":y=uh;break;case"focusin":w="focus",y=su;break;case"focusout":w="blur",y=su;break;case"beforeblur":case"afterblur":y=su;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Yo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Kd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=sh;break;case cs:case os:case ss:y=$d;break;case fs:y=rh;break;case"scroll":case"scrollend":y=Vd;break;case"wheel":y=hh;break;case"copy":case"cut":case"paste":y=Pd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ko;break;case"toggle":case"beforetoggle":y=gh}var H=(t&4)!==0,he=!H&&(e==="scroll"||e==="scrollend"),r=H?p!==null?p+"Capture":null:p;H=[];for(var s=g,m;s!==null;){var S=s;if(m=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||m===null||r===null||(S=Hl(s,r),S!=null&&H.push(ha(s,S,m))),he)break;s=s.return}0<H.length&&(p=new y(p,w,null,n,v),x.push({event:p,listeners:H}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==nu&&(w=n.relatedTarget||n.fromElement)&&(Zn(w)||w[Xn]))break e;if((y||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=g,w=w?Zn(w):null,w!==null&&(he=L(w),H=w.tag,w!==he||H!==5&&H!==27&&H!==6)&&(w=null)):(y=null,w=g),y!==w)){if(H=Yo,S="onMouseLeave",r="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(H=ko,S="onPointerLeave",r="onPointerEnter",s="pointer"),he=y==null?p:_l(y),m=w==null?p:_l(w),p=new H(S,s+"leave",y,n,v),p.target=he,p.relatedTarget=m,S=null,Zn(v)===g&&(H=new H(r,s+"enter",w,n,v),H.target=m,H.relatedTarget=he,S=H),he=S,y&&w)t:{for(H=mm,r=y,s=w,m=0,S=r;S;S=H(S))m++;S=0;for(var j=s;j;j=H(j))S++;for(;0<m-S;)r=H(r),m--;for(;0<S-m;)s=H(s),S--;for(;m--;){if(r===s||s!==null&&r===s.alternate){H=r;break t}r=H(r),s=H(s)}H=null}else H=null;y!==null&&Hr(x,p,y,H,!1),w!==null&&he!==null&&Hr(x,he,w,H,!0)}}e:{if(p=g?_l(g):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var ae=Fo;else if(Ko(p))if($o)ae=zh;else{ae=Eh;var N=Th}else y=p.nodeName,!y||y.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?g&&tu(g.elementType)&&(ae=Fo):ae=Ah;if(ae&&(ae=ae(e,g))){Wo(x,ae,n,v);break e}N&&N(e,p,g),e==="focusout"&&g&&p.type==="number"&&g.memoizedProps.value!=null&&eu(p,"number",p.value)}switch(N=g?_l(g):window,e){case"focusin":(Ko(N)||N.contentEditable==="true")&&(el=N,gu=g,kl=null);break;case"focusout":kl=gu=el=null;break;case"mousedown":pu=!0;break;case"contextmenu":case"mouseup":case"dragend":pu=!1,is(x,n,v);break;case"selectionchange":if(Ch)break;case"keydown":case"keyup":is(x,n,v)}var Z;if(ru)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else Pn?Vo(e,n)&&(te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(te="onCompositionStart");te&&(Qo&&n.locale!=="ko"&&(Pn||te!=="onCompositionStart"?te==="onCompositionEnd"&&Pn&&(Z=Lo()):(It=v,uu="value"in It?It.value:It.textContent,Pn=!0)),N=Mi(g,te),0<N.length&&(te=new Go(te,e,null,n,v),x.push({event:te,listeners:N}),Z?te.data=Z:(Z=Jo(n),Z!==null&&(te.data=Z)))),(Z=yh?vh(e,n):bh(e,n))&&(te=Mi(g,"onBeforeInput"),0<te.length&&(N=new Go("onBeforeInput","beforeinput",null,n,v),x.push({event:N,listeners:te}),N.data=Z)),fm(x,e,g,n,v)}jr(x,t)})}function ha(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Mi(e,t){for(var n=t+"Capture",l=[];e!==null;){var a=e,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=Hl(e,n),a!=null&&l.unshift(ha(e,a,i)),a=Hl(e,t),a!=null&&l.push(ha(e,a,i))),e.tag===3)return l;e=e.return}return[]}function mm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Hr(e,t,n,l,a){for(var i=t._reactName,u=[];n!==null&&n!==l;){var c=n,o=c.alternate,g=c.stateNode;if(c=c.tag,o!==null&&o===l)break;c!==5&&c!==26&&c!==27||g===null||(o=g,a?(g=Hl(n,i),g!=null&&u.unshift(ha(n,g,o))):a||(g=Hl(n,i),g!=null&&u.push(ha(n,g,o)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var gm=/\r\n?/g,pm=/\u0000|\uFFFD/g;function Ur(e){return(typeof e=="string"?e:""+e).replace(gm,`
`).replace(pm,"")}function Br(e,t){return t=Ur(t),Ur(e)===t}function de(e,t,n,l,a,i){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Fn(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Fn(e,""+l);break;case"className":Na(e,"class",l);break;case"tabIndex":Na(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Na(e,n,l);break;case"style":Uo(e,l,i);break;case"data":if(t!=="object"){Na(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=ja(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&de(e,t,"name",a.name,a,null),de(e,t,"formEncType",a.formEncType,a,null),de(e,t,"formMethod",a.formMethod,a,null),de(e,t,"formTarget",a.formTarget,a,null)):(de(e,t,"encType",a.encType,a,null),de(e,t,"method",a.method,a,null),de(e,t,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=ja(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=_t);break;case"onScroll":l!=null&&P("scroll",e);break;case"onScrollEnd":l!=null&&P("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(h(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(h(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=ja(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":P("beforetoggle",e),P("toggle",e),Oa(e,"popover",l);break;case"xlinkActuate":jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":jt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":jt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":jt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":jt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Oa(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Xd.get(n)||n,Oa(e,n,l))}}function Gc(e,t,n,l,a,i){switch(n){case"style":Uo(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(h(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(h(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Fn(e,l):(typeof l=="number"||typeof l=="bigint")&&Fn(e,""+l);break;case"onScroll":l!=null&&P("scroll",e);break;case"onScrollEnd":l!=null&&P("scrollend",e);break;case"onClick":l!=null&&(e.onclick=_t);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Mo.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),i=e[Je]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,a),typeof l=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,a);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):Oa(e,n,l)}}}function Ye(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":P("error",e),P("load",e);var l=!1,a=!1,i;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:de(e,t,i,u,n,null)}}a&&de(e,t,"srcSet",n.srcSet,n,null),l&&de(e,t,"src",n.src,n,null);return;case"input":P("invalid",e);var c=i=u=a=null,o=null,g=null;for(l in n)if(n.hasOwnProperty(l)){var v=n[l];if(v!=null)switch(l){case"name":a=v;break;case"type":u=v;break;case"checked":o=v;break;case"defaultChecked":g=v;break;case"value":i=v;break;case"defaultValue":c=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(h(137,t));break;default:de(e,t,l,v,n,null)}}Do(e,i,c,o,g,u,a,!1);return;case"select":P("invalid",e),l=u=i=null;for(a in n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":l=c;default:de(e,t,a,c,n,null)}t=i,n=u,e.multiple=!!l,t!=null?Wn(e,!!l,t,!1):n!=null&&Wn(e,!!l,n,!0);return;case"textarea":P("invalid",e),i=a=l=null;for(u in n)if(n.hasOwnProperty(u)&&(c=n[u],c!=null))switch(u){case"value":l=c;break;case"defaultValue":a=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(h(91));break;default:de(e,t,u,c,n,null)}_o(e,l,a,i);return;case"option":for(o in n)n.hasOwnProperty(o)&&(l=n[o],l!=null)&&(o==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":de(e,t,o,l,n,null));return;case"dialog":P("beforetoggle",e),P("toggle",e),P("cancel",e),P("close",e);break;case"iframe":case"object":P("load",e);break;case"video":case"audio":for(l=0;l<da.length;l++)P(da[l],e);break;case"image":P("error",e),P("load",e);break;case"details":P("toggle",e);break;case"embed":case"source":case"link":P("error",e),P("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in n)if(n.hasOwnProperty(g)&&(l=n[g],l!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:de(e,t,g,l,n,null)}return;default:if(tu(t)){for(v in n)n.hasOwnProperty(v)&&(l=n[v],l!==void 0&&Gc(e,t,v,l,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(l=n[c],l!=null&&de(e,t,c,l,n,null))}function ym(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,u=null,c=null,o=null,g=null,v=null;for(y in n){var x=n[y];if(n.hasOwnProperty(y)&&x!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":o=x;default:l.hasOwnProperty(y)||de(e,t,y,null,l,x)}}for(var p in l){var y=l[p];if(x=n[p],l.hasOwnProperty(p)&&(y!=null||x!=null))switch(p){case"type":i=y;break;case"name":a=y;break;case"checked":g=y;break;case"defaultChecked":v=y;break;case"value":u=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(h(137,t));break;default:y!==x&&de(e,t,p,y,l,x)}}Pi(e,u,c,o,g,v,i,a);return;case"select":y=u=c=p=null;for(i in n)if(o=n[i],n.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":y=o;default:l.hasOwnProperty(i)||de(e,t,i,null,l,o)}for(a in l)if(i=l[a],o=n[a],l.hasOwnProperty(a)&&(i!=null||o!=null))switch(a){case"value":p=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==o&&de(e,t,a,i,l,o)}t=c,n=u,l=y,p!=null?Wn(e,!!n,p,!1):!!l!=!!n&&(t!=null?Wn(e,!!n,t,!0):Wn(e,!!n,n?[]:"",!1));return;case"textarea":y=p=null;for(c in n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:de(e,t,c,null,l,a)}for(u in l)if(a=l[u],i=n[u],l.hasOwnProperty(u)&&(a!=null||i!=null))switch(u){case"value":p=a;break;case"defaultValue":y=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(h(91));break;default:a!==i&&de(e,t,u,a,l,i)}jo(e,p,y);return;case"option":for(var w in n)p=n[w],n.hasOwnProperty(w)&&p!=null&&!l.hasOwnProperty(w)&&(w==="selected"?e.selected=!1:de(e,t,w,null,l,p));for(o in l)p=l[o],y=n[o],l.hasOwnProperty(o)&&p!==y&&(p!=null||y!=null)&&(o==="selected"?e.selected=p&&typeof p!="function"&&typeof p!="symbol":de(e,t,o,p,l,y));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var H in n)p=n[H],n.hasOwnProperty(H)&&p!=null&&!l.hasOwnProperty(H)&&de(e,t,H,null,l,p);for(g in l)if(p=l[g],y=n[g],l.hasOwnProperty(g)&&p!==y&&(p!=null||y!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(h(137,t));break;default:de(e,t,g,p,l,y)}return;default:if(tu(t)){for(var he in n)p=n[he],n.hasOwnProperty(he)&&p!==void 0&&!l.hasOwnProperty(he)&&Gc(e,t,he,void 0,l,p);for(v in l)p=l[v],y=n[v],!l.hasOwnProperty(v)||p===y||p===void 0&&y===void 0||Gc(e,t,v,p,l,y);return}}for(var r in n)p=n[r],n.hasOwnProperty(r)&&p!=null&&!l.hasOwnProperty(r)&&de(e,t,r,null,l,p);for(x in l)p=l[x],y=n[x],!l.hasOwnProperty(x)||p===y||p==null&&y==null||de(e,t,x,p,l,y)}function Rr(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var a=n[l],i=a.transferSize,u=a.initiatorType,c=a.duration;if(i&&c&&Rr(u)){for(u=0,c=a.responseEnd,l+=1;l<n.length;l++){var o=n[l],g=o.startTime;if(g>c)break;var v=o.transferSize,x=o.initiatorType;v&&Rr(x)&&(o=o.responseEnd,u+=v*(o<c?1:(c-g)/(o-g)))}if(--l,t+=8*(i+u)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var kc=null,Qc=null;function Ci(e){return e.nodeType===9?e:e.ownerDocument}function Lr(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qr(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Xc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zc=null;function bm(){var e=window.event;return e&&e.type==="popstate"?e===Zc?!1:(Zc=e,!0):(Zc=null,!1)}var Yr=typeof setTimeout=="function"?setTimeout:void 0,Sm=typeof clearTimeout=="function"?clearTimeout:void 0,Gr=typeof Promise=="function"?Promise:void 0,xm=typeof queueMicrotask=="function"?queueMicrotask:typeof Gr<"u"?function(e){return Gr.resolve(null).then(e).catch(Tm)}:Yr;function Tm(e){setTimeout(function(){throw e})}function pn(e){return e==="head"}function kr(e,t){var n=t,l=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(a),Cl(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")ma(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ma(n);for(var i=n.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[jl]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=u}}else n==="body"&&ma(e.ownerDocument.body);n=a}while(n);Cl(t)}function Qr(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function Vc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Vc(n),$i(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Em(e,t,n,l){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[jl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=bt(e.nextSibling),e===null)break}return null}function Am(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=bt(e.nextSibling),e===null))return null;return e}function Xr(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=bt(e.nextSibling),e===null))return null;return e}function Jc(e){return e.data==="$?"||e.data==="$~"}function Kc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function zm(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Wc=null;function Zr(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return bt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Vr(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Jr(e,t,n){switch(t=Ci(n),e){case"html":if(e=t.documentElement,!e)throw Error(h(452));return e;case"head":if(e=t.head,!e)throw Error(h(453));return e;case"body":if(e=t.body,!e)throw Error(h(454));return e;default:throw Error(h(451))}}function ma(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);$i(e)}var St=new Map,Kr=new Set;function wi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Wt=M.d;M.d={f:Mm,r:Cm,D:wm,C:Om,L:Nm,m:Dm,X:_m,S:jm,M:Hm};function Mm(){var e=Wt.f(),t=bi();return e||t}function Cm(e){var t=Vn(e);t!==null&&t.tag===5&&t.type==="form"?rf(t):Wt.r(e)}var Al=typeof document>"u"?null:document;function Wr(e,t,n){var l=Al;if(l&&typeof t=="string"&&t){var a=dt(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Kr.has(a)||(Kr.add(a),e={rel:e,crossOrigin:n,href:t},l.querySelector(a)===null&&(t=l.createElement("link"),Ye(t,"link",e),_e(t),l.head.appendChild(t)))}}function wm(e){Wt.D(e),Wr("dns-prefetch",e,null)}function Om(e,t){Wt.C(e,t),Wr("preconnect",e,t)}function Nm(e,t,n){Wt.L(e,t,n);var l=Al;if(l&&e&&t){var a='link[rel="preload"][as="'+dt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+dt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+dt(n.imageSizes)+'"]')):a+='[href="'+dt(e)+'"]';var i=a;switch(t){case"style":i=zl(e);break;case"script":i=Ml(e)}St.has(i)||(e=D({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),St.set(i,e),l.querySelector(a)!==null||t==="style"&&l.querySelector(ga(i))||t==="script"&&l.querySelector(pa(i))||(t=l.createElement("link"),Ye(t,"link",e),_e(t),l.head.appendChild(t)))}}function Dm(e,t){Wt.m(e,t);var n=Al;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+dt(l)+'"][href="'+dt(e)+'"]',i=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ml(e)}if(!St.has(i)&&(e=D({rel:"modulepreload",href:e},t),St.set(i,e),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(pa(i)))return}l=n.createElement("link"),Ye(l,"link",e),_e(l),n.head.appendChild(l)}}}function jm(e,t,n){Wt.S(e,t,n);var l=Al;if(l&&e){var a=Jn(l).hoistableStyles,i=zl(e);t=t||"default";var u=a.get(i);if(!u){var c={loading:0,preload:null};if(u=l.querySelector(ga(i)))c.loading=5;else{e=D({rel:"stylesheet",href:e,"data-precedence":t},n),(n=St.get(i))&&Fc(e,n);var o=u=l.createElement("link");_e(o),Ye(o,"link",e),o._p=new Promise(function(g,v){o.onload=g,o.onerror=v}),o.addEventListener("load",function(){c.loading|=1}),o.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Oi(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:c},a.set(i,u)}}}function _m(e,t){Wt.X(e,t);var n=Al;if(n&&e){var l=Jn(n).hoistableScripts,a=Ml(e),i=l.get(a);i||(i=n.querySelector(pa(a)),i||(e=D({src:e,async:!0},t),(t=St.get(a))&&$c(e,t),i=n.createElement("script"),_e(i),Ye(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function Hm(e,t){Wt.M(e,t);var n=Al;if(n&&e){var l=Jn(n).hoistableScripts,a=Ml(e),i=l.get(a);i||(i=n.querySelector(pa(a)),i||(e=D({src:e,async:!0,type:"module"},t),(t=St.get(a))&&$c(e,t),i=n.createElement("script"),_e(i),Ye(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function Fr(e,t,n,l){var a=(a=$.current)?wi(a):null;if(!a)throw Error(h(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=zl(n.href),n=Jn(a).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=zl(n.href);var i=Jn(a).hoistableStyles,u=i.get(e);if(u||(a=a.ownerDocument||a,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=a.querySelector(ga(e)))&&!i._p&&(u.instance=i,u.state.loading=5),St.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},St.set(e,n),i||Um(a,e,n,u.state))),t&&l===null)throw Error(h(528,""));return u}if(t&&l!==null)throw Error(h(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ml(n),n=Jn(a).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,e))}}function zl(e){return'href="'+dt(e)+'"'}function ga(e){return'link[rel="stylesheet"]['+e+"]"}function $r(e){return D({},e,{"data-precedence":e.precedence,precedence:null})}function Um(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ye(t,"link",n),_e(t),e.head.appendChild(t))}function Ml(e){return'[src="'+dt(e)+'"]'}function pa(e){return"script[async]"+e}function Ir(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+dt(n.href)+'"]');if(l)return t.instance=l,_e(l),l;var a=D({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),_e(l),Ye(l,"style",a),Oi(l,n.precedence,e),t.instance=l;case"stylesheet":a=zl(n.href);var i=e.querySelector(ga(a));if(i)return t.state.loading|=4,t.instance=i,_e(i),i;l=$r(n),(a=St.get(a))&&Fc(l,a),i=(e.ownerDocument||e).createElement("link"),_e(i);var u=i;return u._p=new Promise(function(c,o){u.onload=c,u.onerror=o}),Ye(i,"link",l),t.state.loading|=4,Oi(i,n.precedence,e),t.instance=i;case"script":return i=Ml(n.src),(a=e.querySelector(pa(i)))?(t.instance=a,_e(a),a):(l=n,(a=St.get(i))&&(l=D({},n),$c(l,a)),e=e.ownerDocument||e,a=e.createElement("script"),_e(a),Ye(a,"link",l),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(h(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Oi(l,n.precedence,e));return t.instance}function Oi(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,i=a,u=0;u<l.length;u++){var c=l[u];if(c.dataset.precedence===t)i=c;else if(i!==a)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Fc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function $c(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ni=null;function Pr(e,t,n){if(Ni===null){var l=new Map,a=Ni=new Map;a.set(n,l)}else a=Ni,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var i=n[a];if(!(i[jl]||i[Be]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var c=l.get(u);c?c.push(i):l.set(u,[i])}}return l}function ed(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Bm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function td(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Rm(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=zl(l.href),i=t.querySelector(ga(a));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Di.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,_e(i);return}i=t.ownerDocument||t,l=$r(l),(a=St.get(a))&&Fc(l,a),i=i.createElement("link"),_e(i);var u=i;u._p=new Promise(function(c,o){u.onload=c,u.onerror=o}),Ye(i,"link",l),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Di.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Ic=0;function Lm(e,t){return e.stylesheets&&e.count===0&&_i(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&_i(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Ic===0&&(Ic=62500*vm());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&_i(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Ic?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(a)}}:null}function Di(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_i(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ji=null;function _i(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ji=new Map,t.forEach(qm,e),ji=null,Di.call(e))}function qm(e,t){if(!(t.state.loading&4)){var n=ji.get(e);if(n)var l=n.get(null);else{n=new Map,ji.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var u=a[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(n.set(u.dataset.precedence,u),l=u)}l&&n.set(null,l)}a=t.instance,u=a.getAttribute("data-precedence"),i=n.get(u)||l,i===l&&n.set(null,a),n.set(u,a),this.count++,l=Di.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),i?i.parentNode.insertBefore(a,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var ya={$$typeof:ye,Provider:null,Consumer:null,_currentValue:U,_currentValue2:U,_threadCount:0};function Ym(e,t,n,l,a,i,u,c,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ji(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ji(0),this.hiddenUpdates=Ji(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function nd(e,t,n,l,a,i,u,c,o,g,v,x){return e=new Ym(e,t,n,u,o,g,v,x,c),t=1,i===!0&&(t|=24),i=at(3,null,null,t),e.current=i,i.stateNode=e,t=Du(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:n,cache:t},Uu(i),e}function ld(e){return e?(e=ll,e):ll}function ad(e,t,n,l,a,i){a=ld(a),l.context===null?l.context=a:l.pendingContext=a,l=an(t),l.payload={element:n},i=i===void 0?null:i,i!==null&&(l.callback=i),n=un(e,l,t),n!==null&&(Pe(n,e,t),Wl(n,e,t))}function id(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Pc(e,t){id(e,t),(e=e.alternate)&&id(e,t)}function ud(e){if(e.tag===13||e.tag===31){var t=Nn(e,67108864);t!==null&&Pe(t,e,67108864),Pc(e,67108864)}}function cd(e){if(e.tag===13||e.tag===31){var t=st();t=Ki(t);var n=Nn(e,t);n!==null&&Pe(n,e,t),Pc(e,t)}}var Hi=!0;function Gm(e,t,n,l){var a=b.T;b.T=null;var i=M.p;try{M.p=2,eo(e,t,n,l)}finally{M.p=i,b.T=a}}function km(e,t,n,l){var a=b.T;b.T=null;var i=M.p;try{M.p=8,eo(e,t,n,l)}finally{M.p=i,b.T=a}}function eo(e,t,n,l){if(Hi){var a=to(l);if(a===null)Yc(e,t,l,Ui,n),sd(e,l);else if(Xm(a,e,t,n,l))l.stopPropagation();else if(sd(e,l),t&4&&-1<Qm.indexOf(e)){for(;a!==null;){var i=Vn(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=zn(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var o=1<<31-nt(u);c.entanglements[1]|=o,u&=~o}Nt(i),(ue&6)===0&&(yi=et()+500,ra(0))}}break;case 31:case 13:c=Nn(i,2),c!==null&&Pe(c,i,2),bi(),Pc(i,2)}if(i=to(l),i===null&&Yc(e,t,l,Ui,n),i===a)break;a=i}a!==null&&l.stopPropagation()}else Yc(e,t,l,null,n)}}function to(e){return e=lu(e),no(e)}var Ui=null;function no(e){if(Ui=null,e=Zn(e),e!==null){var t=L(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Q(t),e!==null)return e;e=null}else if(n===31){if(e=Y(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ui=e,null}function od(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wd()){case go:return 2;case po:return 8;case Aa:case Od:return 32;case yo:return 268435456;default:return 32}default:return 32}}var lo=!1,yn=null,vn=null,bn=null,va=new Map,ba=new Map,Sn=[],Qm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sd(e,t){switch(e){case"focusin":case"focusout":yn=null;break;case"dragenter":case"dragleave":vn=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":va.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ba.delete(t.pointerId)}}function Sa(e,t,n,l,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:i,targetContainers:[a]},t!==null&&(t=Vn(t),t!==null&&ud(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Xm(e,t,n,l,a){switch(t){case"focusin":return yn=Sa(yn,e,t,n,l,a),!0;case"dragenter":return vn=Sa(vn,e,t,n,l,a),!0;case"mouseover":return bn=Sa(bn,e,t,n,l,a),!0;case"pointerover":var i=a.pointerId;return va.set(i,Sa(va.get(i)||null,e,t,n,l,a)),!0;case"gotpointercapture":return i=a.pointerId,ba.set(i,Sa(ba.get(i)||null,e,t,n,l,a)),!0}return!1}function fd(e){var t=Zn(e.target);if(t!==null){var n=L(t);if(n!==null){if(t=n.tag,t===13){if(t=Q(n),t!==null){e.blockedOn=t,Eo(e.priority,function(){cd(n)});return}}else if(t===31){if(t=Y(n),t!==null){e.blockedOn=t,Eo(e.priority,function(){cd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=to(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);nu=l,n.target.dispatchEvent(l),nu=null}else return t=Vn(n),t!==null&&ud(t),e.blockedOn=n,!1;t.shift()}return!0}function rd(e,t,n){Bi(e)&&n.delete(t)}function Zm(){lo=!1,yn!==null&&Bi(yn)&&(yn=null),vn!==null&&Bi(vn)&&(vn=null),bn!==null&&Bi(bn)&&(bn=null),va.forEach(rd),ba.forEach(rd)}function Ri(e,t){e.blockedOn===t&&(e.blockedOn=null,lo||(lo=!0,A.unstable_scheduleCallback(A.unstable_NormalPriority,Zm)))}var Li=null;function dd(e){Li!==e&&(Li=e,A.unstable_scheduleCallback(A.unstable_NormalPriority,function(){Li===e&&(Li=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],a=e[t+2];if(typeof l!="function"){if(no(l||n)===null)continue;break}var i=Vn(n);i!==null&&(e.splice(t,3),t-=3,tc(i,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function Cl(e){function t(o){return Ri(o,e)}yn!==null&&Ri(yn,e),vn!==null&&Ri(vn,e),bn!==null&&Ri(bn,e),va.forEach(t),ba.forEach(t);for(var n=0;n<Sn.length;n++){var l=Sn[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Sn.length&&(n=Sn[0],n.blockedOn===null);)fd(n),n.blockedOn===null&&Sn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],i=n[l+1],u=a[Je]||null;if(typeof i=="function")u||dd(n);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(a=i,u=i[Je]||null)c=u.formAction;else if(no(a)!==null)continue}else c=u.action;typeof c=="function"?n[l+1]=c:(n.splice(l,3),l-=3),dd(n)}}}function hd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return a=u})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function ao(e){this._internalRoot=e}qi.prototype.render=ao.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));var n=t.current,l=st();ad(n,l,e,t,null,null)},qi.prototype.unmount=ao.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ad(e.current,2,null,e,null,null),bi(),t[Xn]=null}};function qi(e){this._internalRoot=e}qi.prototype.unstable_scheduleHydration=function(e){if(e){var t=To();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sn.length&&t!==0&&t<Sn[n].priority;n++);Sn.splice(n,0,e),n===0&&fd(e)}};var md=K.version;if(md!=="19.2.4")throw Error(h(527,md,"19.2.4"));M.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=T(t),e=e!==null?W(e):null,e=e===null?null:e.stateNode,e};var Vm={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:b,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yi.isDisabled&&Yi.supportsFiber)try{Ol=Yi.inject(Vm),tt=Yi}catch{}}return Ta.createRoot=function(e,t){if(!_(e))throw Error(h(299));var n=!1,l="",a=xf,i=Tf,u=Ef;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=nd(e,1,!1,null,null,n,l,null,a,i,u,hd),e[Xn]=t.current,qc(e),new ao(t)},Ta.hydrateRoot=function(e,t,n){if(!_(e))throw Error(h(299));var l=!1,a="",i=xf,u=Tf,c=Ef,o=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(c=n.onRecoverableError),n.formState!==void 0&&(o=n.formState)),t=nd(e,1,!0,t,n??null,l,a,o,i,u,c,hd),t.context=ld(null),n=t.current,l=st(),l=Ki(l),a=an(l),a.callback=null,un(n,a,l),n=l,t.current.lanes=n,Dl(t,n),Nt(t),e[Xn]=t.current,qc(e),new qi(t)},Ta.version="19.2.4",Ta}var Ad;function ng(){if(Ad)return co.exports;Ad=1;function A(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)}catch(K){console.error(K)}}return A(),co.exports=tg(),co.exports}var lg=ng();const Tn={title:"Web Development for Kids",description:"Build your own websites with HTML, CSS & JavaScript — create cool pages the world can see!",chapters:[{id:1,title:"Welcome to Web Dev!",lessons:[{id:"1-1",title:"How Websites Work",completed:!1,content:{description:"Discover how websites work and meet the three languages that power every site on the internet!",sections:[{type:"text",content:"Every website you visit — YouTube, Google, TikTok, Wikipedia — is built with just **three languages**: HTML, CSS, and JavaScript. In this lesson, you'll learn what each one does and how they work together to create the web pages you see every day. By the end, you'll understand the entire journey from typing a URL to seeing a website on your screen! 🌐"},{type:"text",content:"When you type a web address and press Enter, your browser sends a request to a computer called a **server** somewhere in the world. That server sends back files — HTML, CSS, and JavaScript files — and your browser reads those files and displays the website. It's like ordering a build-your-own-LEGO set: the server sends the instructions and pieces, and your browser puts them together on screen."},{type:"heading",level:2,content:"The Three Languages of the Web"},{type:"text",content:"Think of building a website like building a house. You need three things: the **structure** (walls, rooms, floors), the **decoration** (paint, furniture, curtains), and the **functionality** (electricity, plumbing, smart home features). Each web language handles one of these:"},{type:"list",items:["**HTML** (HyperText Markup Language) — The **structure**. It defines WHAT is on the page: headings, paragraphs, images, links, buttons, and forms. Without HTML, there would be nothing on the page at all.","**CSS** (Cascading Style Sheets) — The **style**. It controls HOW things look: colors, fonts, sizes, spacing, animations, and layout. CSS turns plain text into beautiful, professional designs.","**JavaScript** (JS) — The **behavior**. It makes things HAPPEN: button clicks, form validation, animations, games, and dynamic content that changes without reloading the page."]},{type:"code",language:"text",filename:"analogy.txt",code:`Think of a website like building a person:

🦴 HTML = Skeleton (structure)
   └── Headings, paragraphs, images, links, buttons
   └── Without it: nothing exists on the page

👗 CSS = Skin & Clothes (appearance)
   └── Colors, fonts, sizes, spacing, layout
   └── Without it: ugly plain text on white background

🧠 JavaScript = Brain (behavior)
   └── Click handlers, animations, games, dynamic content
   └── Without it: static page that never changes

═══════════════════════════════════════════
Same HTML + Different CSS = Completely different look!
That's the power of separating structure from style.`},{type:"tip",content:"You can build beautiful websites with JUST HTML and CSS! JavaScript adds interactivity but isn't always needed. Many professional portfolios and business sites are pure HTML + CSS. Start simple, add complexity later."},{type:"heading",level:2,content:"What You'll Build in This Course"},{type:"text",content:"This isn't just theory — you'll build real, working projects that you can show to friends and family:"},{type:"list",items:["📄 **Personal profile page** — Your own 'about me' webpage","🎨 **Styled cards and layouts** — Professional-looking designs with CSS","🖱️ **Interactive buttons and forms** — Pages that respond to user actions","🎮 **A working quiz game** — Built entirely with JavaScript","🃏 **Beautiful profile card** — A portfolio-worthy component","🌐 **A live website** — Published on the internet for anyone to visit!"]},{type:"heading",level:2,content:"Tools You Need"},{type:"text",content:"One of the best things about web development is that you need almost NO special software. You probably already have everything!"},{type:"code",language:"text",filename:"tools.txt",code:`All you need (totally FREE!):

1. A TEXT EDITOR (pick one):
   ★ VS Code (RECOMMENDED!) - code.visualstudio.com
     → Free, powerful, used by professional developers
     → Has autocomplete, error highlighting, built-in terminal
     → Install the 'Live Server' extension for instant previews!
   • Sublime Text - sublimetext.com (free)
   • Notepad++ - notepad-plus-plus.org (free, Windows)
   • Even regular Notepad/TextEdit works for basics!

2. A WEB BROWSER:
   ★ Chrome (RECOMMENDED for developers)
     → Press F12 to open Developer Tools
     → Inspect any website's code!
   • Firefox (also has great dev tools)
   • Edge or Safari work too

3. OPTIONAL BUT HELPFUL:
   • Live Server extension for VS Code
     (auto-refreshes browser when you save!)
   • Emmet (built into VS Code — type shortcuts like
     h1 then Tab to create <h1></h1> instantly!)

That's it! No signups, no payments, no installations
(if you use a browser-based editor like CodePen).`},{type:"heading",level:2,content:"How to View Your Code"},{type:"code",language:"text",filename:"viewing.txt",code:`THREE WAYS TO SEE YOUR WEBPAGE:

1. DOUBLE-CLICK THE FILE
   - Save your file as 'index.html'
   - Find it in your file explorer
   - Double-click → opens in your default browser!
   - Refresh (Ctrl+R / Cmd+R) to see changes

2. VS CODE LIVE SERVER (BEST!)
   - Install the 'Live Server' extension
   - Right-click your HTML file → 'Open with Live Server'
   - Changes appear INSTANTLY when you save! (Ctrl+S)
   - No manual refreshing needed!

3. ONLINE EDITORS (no installation!)
   - codepen.io — great for experimenting
   - codesandbox.io — more full-featured
   - jsfiddle.net — quick tests
   - You see results side-by-side as you type!`},{type:"warning",content:"**Always save your file with the .html extension!** If you save as 'mypage.txt' instead of 'mypage.html', your browser won't know it's a webpage. Also, name your main file 'index.html' — this is the standard name that web servers look for."},{type:"heading",level:2,content:"Practice: Set Up Your Workspace"},{type:"code",language:"text",filename:"setup_activity.txt",code:`DO THIS NOW:

1. Download VS Code from code.visualstudio.com
2. Install it and open it
3. Create a new folder called 'my-website'
4. In VS Code: File → Open Folder → select 'my-website'
5. Create a new file: File → New File
6. Save it as 'index.html' (Ctrl+S / Cmd+S)
7. Type: Hello World!
8. Save and double-click the file to open in browser

CONGRATULATIONS! You just created your first webpage!
(It's not pretty yet, but we'll fix that soon!)

BONUS: Install these VS Code extensions:
- Live Server (essential!)
- Prettier (auto-formats your code)
- Auto Rename Tag (renames matching HTML tags)`},{type:"checkpoint",content:"Download VS Code, create a folder called 'my-website', create 'index.html' inside it, type some text, save it, and open it in your browser. If you can see your text on screen, you're ready to start coding! 🎉"}]}},{id:"1-2",title:"Your First Webpage",completed:!1,content:{description:"Write your first real HTML page — learn the basic structure that every website uses!",sections:[{type:"text",content:"Let's write your first real webpage! Every website in the world — from Google to YouTube to Wikipedia — uses the same basic HTML structure. Once you learn it, you'll recognize it everywhere. It only takes a few lines of code to create something you can see in a browser! 🚀"},{type:"heading",level:2,content:"The Basic HTML Structure"},{type:"text",content:"Every HTML page has the same skeleton. Think of it as the template that everything else goes into. Copy this into your 'index.html' file and open it in your browser:"},{type:"code",language:"html",filename:"index.html",code:`<!DOCTYPE html>
<html>
<head>
    <title>My First Website</title>
</head>
<body>
    <h1>Hello, World! 🌍</h1>
    <p>This is my first webpage. I made this with HTML!</p>
    <p>Web development is awesome! 🚀</p>
</body>
</html>`},{type:"heading",level:2,content:"Understanding Every Line"},{type:"text",content:"Let's break down what each part does. Understanding this structure is crucial — you'll use it in every single webpage you create:"},{type:"list",items:["**<!DOCTYPE html>** — Tells the browser 'this is a modern HTML5 page.' Always put this first.","**<html>** — The root container. EVERYTHING on your page goes between <html> and </html>.","**<head>** — The 'behind the scenes' section. Contains info that visitors don't directly see: the page title, CSS links, settings. Think of it as the brain of the page.","**<title>** — The text shown in the browser TAB. Not on the page itself! This also appears in Google search results.","**<body>** — The visible content! Everything users see goes between <body> and </body>. This is where you'll spend most of your time.","**<h1>** — A heading (the biggest size). h1 through h6 give you 6 sizes of headings.","**<p>** — A paragraph of text. Browsers automatically add space between paragraphs."]},{type:"heading",level:2,content:"How HTML Tags Work"},{type:"text",content:"HTML uses **tags** to define elements. Most tags come in pairs: an opening tag and a closing tag (with a /). The content goes between them. Some tags are self-closing (they don't need a closing tag)."},{type:"code",language:"html",filename:"tags_explained.html",code:`<!-- PAIRED TAGS (most common) -->
<h1>This is a heading</h1>
<p>This is a paragraph</p>
<strong>This is bold text</strong>
<em>This is italic text</em>

<!-- SELF-CLOSING TAGS (no content inside) -->
<br>     <!-- Line break (goes to next line) -->
<hr>     <!-- Horizontal line (divider) -->
<img>    <!-- Image (we'll add details later) -->

<!-- NESTED TAGS (tags inside tags) -->
<p>This is <strong>very</strong> <em>important</em> text!</p>

<!-- THIS IS A COMMENT -->
<!-- Browsers ignore comments -->
<!-- Use them to leave notes for yourself! -->

<!-- WRONG! Tags must be properly nested -->
<p>This is <strong>wrong</p></strong>

<!-- CORRECT! Close inner tags first -->
<p>This is <strong>correct</strong></p>`},{type:"heading",level:2,content:"Essential HTML Tags"},{type:"code",language:"html",filename:"essential_tags.html",code:`<!-- ═══ HEADINGS (6 sizes) ═══ -->
<h1>Heading 1 - Page Title (biggest)</h1>
<h2>Heading 2 - Section Title</h2>
<h3>Heading 3 - Subsection</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6 - Smallest heading</h6>

<!-- ═══ TEXT ═══ -->
<p>A paragraph of text. Browsers add space above and below.</p>
<p>Text can be <strong>bold</strong> or <em>italic</em> or
   <mark>highlighted</mark> or <del>crossed out</del>.</p>
<p>Line one<br>Line two (br = line break, no new paragraph)</p>
<hr> <!-- Horizontal divider line -->

<!-- ═══ LINKS ═══ -->
<a href="https://google.com">Go to Google</a>
<a href="https://youtube.com" target="_blank">YouTube (new tab)</a>
<a href="about.html">My About Page</a>

<!-- ═══ IMAGES ═══ -->
<img src="photo.jpg" alt="My photo" width="300">
<img src="https://placekitten.com/200/200" alt="A cute cat">

<!-- ═══ LISTS ═══ -->
<h3>My Hobbies (unordered/bullets):</h3>
<ul>
    <li>Coding</li>
    <li>Gaming</li>
    <li>Drawing</li>
</ul>

<h3>Steps to Make a Website (ordered/numbered):</h3>
<ol>
    <li>Write the HTML</li>
    <li>Add CSS styling</li>
    <li>Make it interactive with JavaScript</li>
</ol>`},{type:"tip",content:"**VS Code shortcut!** Type `!` and press Tab in an empty .html file — VS Code will generate the entire HTML skeleton for you instantly! This is called an Emmet abbreviation, and there are many more: `h1` + Tab, `p` + Tab, `ul>li*3` + Tab (creates a list with 3 items!)."},{type:"heading",level:2,content:"Build Your 'About Me' Page"},{type:"code",language:"html",filename:"about_me.html",code:`<!DOCTYPE html>
<html>
<head>
    <title>About Me</title>
</head>
<body>
    <h1>👋 Hi, I'm [Your Name]!</h1>
    
    <p>I'm learning web development and I'm excited to build
    cool websites! This is my first ever webpage.</p>
    
    <h2>🎯 My Hobbies</h2>
    <ul>
        <li>🎮 Gaming</li>
        <li>💻 Coding</li>
        <li>📚 Reading</li>
        <li>🎵 Music</li>
    </ul>
    
    <h2>🌟 Fun Facts About Me</h2>
    <ol>
        <li>I can solve a Rubik's cube</li>
        <li>My favorite color is blue</li>
        <li>I've visited 5 countries</li>
    </ol>
    
    <h2>🔗 My Favorite Websites</h2>
    <p>Check out these cool sites:</p>
    <ul>
        <li><a href="https://youtube.com" target="_blank">YouTube</a></li>
        <li><a href="https://scratch.mit.edu" target="_blank">Scratch</a></li>
        <li><a href="https://github.com" target="_blank">GitHub</a></li>
    </ul>
    
    <hr>
    <p><em>Made with ❤️ by [Your Name] | My first webpage!</em></p>
</body>
</html>`},{type:"warning",content:"**The 'alt' attribute on images is NOT optional!** It describes the image for people who can't see it (screen readers for blind users), and it shows text if the image fails to load. It also helps with Google search rankings. Always add meaningful alt text!"},{type:"heading",level:2,content:"Practice Exercises"},{type:"code",language:"text",filename:"exercises.txt",code:`BUILD THESE PAGES:

1. ABOUT ME PAGE 👤
   - Your name as h1
   - A paragraph about yourself
   - An unordered list of 5 hobbies
   - An ordered list of your top 3 favorite foods
   - Links to 3 websites you like

2. RECIPE PAGE 🍕
   - Recipe title as h1
   - An image of the food
   - Ingredients as an unordered list
   - Instructions as an ordered list
   - A 'Back to Home' link

3. MY PETS PAGE 🐱
   - Title and intro paragraph
   - For each pet: name (h2), image, and description (p)
   - Use <hr> to separate each pet

4. EXPLORE CHALLENGE 🔍
   - Right-click any website and select 'View Page Source'
   - Can you spot the <html>, <head>, <body> tags?
   - Find the <title> — does it match the browser tab?`},{type:"quiz",question:"What goes inside the <head> tag?",options:[{id:"a",text:"The main content visitors see"},{id:"b",text:"Hidden info like title and settings"},{id:"c",text:"Images and videos"},{id:"d",text:"Nothing, it should be empty"}],correct:"b",explanation:"The <head> contains metadata — info about the page that isn't visible on screen. The <title>, CSS links, character encoding, and other settings go here. The visible content goes in <body>."},{type:"checkpoint",content:"Create your own 'About Me' page with: your name as an h1, at least 2 paragraphs, a list of hobbies, a list of favorite things, 3 links to websites you like, and proper HTML structure. View it in your browser — you're officially a web developer! 🎉"}]}}]},{id:2,title:"CSS — Making It Pretty!",lessons:[{id:"2-1",title:"Introduction to CSS",completed:!1,content:{description:"Transform boring HTML into beautiful designs! Learn CSS basics — colors, fonts, spacing, and more.",sections:[{type:"text",content:"**CSS** (Cascading Style Sheets) controls how your page LOOKS. Same HTML content, different CSS = completely different appearance! CSS is what turns plain text into a beautiful, professional website. Think of CSS as the interior designer for your HTML house — same rooms, but painted, furnished, and decorated. 🎨"},{type:"text",content:"CSS works by selecting HTML elements and applying styles to them. You say 'find all paragraphs and make them blue' or 'find the heading and make it big and centered.' The browser reads your CSS rules and applies them to the HTML, transforming the appearance without changing the content."},{type:"heading",level:2,content:"Three Ways to Add CSS"},{type:"code",language:"html",filename:"css_methods.html",code:`<!-- METHOD 1: Inline (on the element itself) -->
<!-- Quick but messy — avoid for real projects! -->
<p style="color: red; font-size: 20px;">Red text</p>

<!-- METHOD 2: Internal (in the <head> section) -->
<!-- Good for single-page experiments -->
<head>
    <style>
        p {
            color: blue;
            font-size: 18px;
        }
    </style>
</head>

<!-- METHOD 3: External file (THE BEST WAY!) -->
<!-- Keeps code organized — use this for real projects! -->
<head>
    <link rel="stylesheet" href="style.css">
</head>
<!-- Then create a separate 'style.css' file -->`},{type:"heading",level:2,content:"CSS Syntax — The Rules"},{type:"code",language:"css",filename:"syntax.css",code:`/* CSS Rule Structure:
   selector {
       property: value;
       another-property: value;
   }
*/

/* Example: Style ALL h1 elements */
h1 {
    color: #8b5cf6;        /* purple text */
    font-size: 48px;       /* big text */
    text-align: center;    /* centered */
    margin-bottom: 20px;   /* space below */
}

/* Example: Style ALL paragraphs */
p {
    color: #333333;        /* dark gray text */
    font-family: Arial, sans-serif;
    font-size: 18px;
    line-height: 1.6;      /* spacing between lines */
}

/* Example: Style the entire page */
body {
    background-color: #f5f5f5;  /* light gray background */
    margin: 0;                   /* remove default margins */
    padding: 40px;               /* add inner spacing */
    font-family: 'Segoe UI', Arial, sans-serif;
}`},{type:"heading",level:2,content:"Essential CSS Properties"},{type:"code",language:"css",filename:"essential_properties.css",code:`/* ═══ COLORS ═══ */
color: red;                    /* text color */
background-color: #1a1a2e;     /* background color */
/* Colors can be: names (red), hex (#ff0000), rgb(255,0,0) */

/* ═══ TEXT ═══ */
font-size: 20px;               /* text size */
font-family: Arial, sans-serif; /* font (with fallback) */
font-weight: bold;             /* bold text */
font-style: italic;            /* italic text */
text-align: center;            /* left, center, right, justify */
text-decoration: none;         /* removes underlines from links */
text-transform: uppercase;     /* UPPERCASE, lowercase, capitalize */
line-height: 1.6;              /* space between lines */
letter-spacing: 2px;           /* space between letters */

/* ═══ SPACING ═══ */
padding: 20px;                 /* space INSIDE the element */
margin: 10px;                  /* space OUTSIDE the element */
/* Think: padding = cushion inside a box */
/*        margin = distance between boxes */

/* ═══ SIZE ═══ */
width: 300px;                  /* fixed width */
max-width: 800px;              /* won't get wider than this */
height: 200px;                 /* fixed height */
min-height: 100px;             /* won't get shorter */

/* ═══ BORDERS ═══ */
border: 2px solid #8b5cf6;     /* width, style, color */
border-radius: 10px;           /* rounded corners! */
border-radius: 50%;            /* perfect circle! */`},{type:"heading",level:2,content:"Your First Styled Page"},{type:"code",language:"css",filename:"style.css",code:`/* A beautiful dark theme! */
body {
    background-color: #0f0f1a;
    color: #e0e0e0;
    font-family: 'Segoe UI', Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;        /* centers the page! */
    padding: 40px 20px;
    line-height: 1.8;
}

h1 {
    color: #8b5cf6;        /* vibrant purple */
    font-size: 42px;
    text-align: center;
    margin-bottom: 10px;
}

h2 {
    color: #06b6d4;        /* cyan accent */
    border-bottom: 2px solid #06b6d4;
    padding-bottom: 10px;
    margin-top: 40px;
}

p {
    font-size: 18px;
    color: #b0b0b0;
}

a {
    color: #ec4899;        /* pink links */
    text-decoration: none; /* no underline */
}

a:hover {
    color: #f472b6;        /* lighter pink on hover */
    text-decoration: underline;
}

ul, ol {
    padding-left: 30px;
}

li {
    margin-bottom: 8px;
    font-size: 16px;
}`},{type:"tip",content:'**Use an external CSS file for real projects!** Create a file called \'style.css\' and link it in your HTML with `<link rel="stylesheet" href="style.css">`. This keeps your code organized, lets you style multiple HTML pages with the same CSS, and is how professional developers work.'},{type:"heading",level:2,content:"Selectors — Targeting Elements"},{type:"code",language:"css",filename:"selectors.css",code:`/* ELEMENT selector — targets ALL of that element */
p { color: gray; }         /* ALL paragraphs */
h1 { font-size: 48px; }    /* ALL h1 headings */

/* CLASS selector — targets elements with that class */
/* Use a dot (.) before the class name */
.highlight { background-color: yellow; }
.big-text { font-size: 24px; }
.card { border: 1px solid #ddd; padding: 20px; }

/* ID selector — targets ONE specific element */
/* Use a hash (#) before the ID name */
#main-title { font-size: 48px; color: purple; }
#footer { text-align: center; }

/* MULTIPLE selectors — same styles for multiple */
h1, h2, h3 { font-family: Georgia, serif; }

/* DESCENDANT selector — elements INSIDE other elements */
.card p { color: gray; }  /* paragraphs inside .card only */
nav a { color: white; }   /* links inside nav only */

/* PSEUDO-CLASS — element in a specific STATE */
a:hover { color: red; }         /* when mouse hovers */
button:active { background: blue; } /* when being clicked */
input:focus { border-color: purple; } /* when selected */`},{type:"code",language:"html",filename:"using_selectors.html",code:`<!-- Classes (reusable — use on MANY elements) -->
<p class="highlight">This is highlighted!</p>
<p class="highlight big-text">Highlighted AND big!</p>
<p>This has no special styling</p>

<!-- IDs (unique — use ONCE per page) -->
<h1 id="main-title">Welcome!</h1>

<!-- Multiple classes on one element -->
<div class="card highlight">I have two classes!</div>`},{type:"heading",level:2,content:"Colors in CSS"},{type:"code",language:"css",filename:"colors.css",code:`/* Named colors (140+ built-in names) */
color: red;
color: coral;
color: darkviolet;
color: tomato;

/* Hex colors (#RRGGBB) — most common! */
color: #ff0000;   /* red */
color: #00ff00;   /* green */
color: #0000ff;   /* blue */
color: #8b5cf6;   /* nice purple */
color: #06b6d4;   /* nice cyan */
color: #ffffff;   /* white */
color: #000000;   /* black */

/* RGB — Red, Green, Blue (0-255 each) */
color: rgb(255, 0, 0);       /* red */
color: rgba(0, 0, 0, 0.5);   /* black at 50% transparent! */

/* Gradients — smooth color transitions */
background: linear-gradient(to right, #8b5cf6, #ec4899);
background: linear-gradient(135deg, #667eea, #764ba2);
background: radial-gradient(circle, #06b6d4, #0f0f1a);`},{type:"warning",content:"**Classes vs IDs:** Use classes (`.name`) for styles you'll reuse on multiple elements. Use IDs (`#name`) for ONE unique element. A common mistake is using IDs everywhere — stick to classes for styling, and save IDs for JavaScript targeting."},{type:"quiz",question:"What does 'padding' do?",options:[{id:"a",text:"Adds space outside the element"},{id:"b",text:"Adds space inside the element"},{id:"c",text:"Changes the font size"},{id:"d",text:"Changes the color"}],correct:"b",explanation:"Padding adds space INSIDE an element — between the content and its border. Margin adds space OUTSIDE — between the element and its neighbors. Remember: Padding = inside cushion, Margin = outside gap."},{type:"checkpoint",content:"Take your 'About Me' page and create an external 'style.css' file. Add a dark background, colorful headings, styled links with hover effects, and nice spacing. Make it look professional! Link the CSS file in your HTML head."}]}},{id:"2-2",title:"The Box Model & Flexbox Layout",completed:!1,content:{description:"Master the Box Model and Flexbox — the secrets to perfect page layouts!",sections:[{type:"text",content:"Every HTML element is a **box**. Understanding how these boxes work — and how to arrange them — is THE key skill in CSS. In this lesson, you'll master the Box Model (how each box is structured) and Flexbox (how to arrange boxes on the page). These two concepts solve 90% of all layout challenges. 📦"},{type:"heading",level:2,content:"The Box Model"},{type:"code",language:"text",filename:"box_model.txt",code:`Every HTML element is a box with 4 layers:

┌────────────────────────────────────┐
│            MARGIN                  │ ← Space OUTSIDE (gap between boxes)
│   ┌────────────────────────────┐   │
│   │         BORDER             │   │ ← The visible edge
│   │   ┌────────────────────┐   │   │
│   │   │     PADDING        │   │   │ ← Space INSIDE (cushion)
│   │   │   ┌────────────┐   │   │   │
│   │   │   │  CONTENT   │   │   │   │ ← Your text, images, etc.
│   │   │   └────────────┘   │   │   │
│   │   └────────────────────┘   │   │
│   └────────────────────────────┘   │
└────────────────────────────────────┘

Real-world analogy:
• CONTENT = The gift inside a box
• PADDING = The bubble wrap around the gift
• BORDER  = The cardboard box itself
• MARGIN  = The space between boxes on a shelf`},{type:"code",language:"css",filename:"box_model.css",code:`/* Apply box-sizing to ALL elements (best practice!) */
* {
    box-sizing: border-box;
    /* This makes width include padding + border */
    /* Without this, padding ADDS to the width — confusing! */
}

.card {
    /* Content size */
    width: 300px;
    height: auto;        /* height adjusts to content */
    
    /* Padding (space inside) */
    padding: 24px;                    /* all 4 sides */
    /* padding: 10px 20px;           top/bottom, left/right */
    /* padding: 5px 10px 15px 20px;  top, right, bottom, left */
    
    /* Border */
    border: 2px solid #8b5cf6;
    border-radius: 16px;              /* rounded corners */
    
    /* Margin (space outside) */
    margin: 20px;
    /* margin: 0 auto;  ← CENTER a block element horizontally! */
    
    /* Visual extras */
    background-color: white;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.card:hover {
    transform: translateY(-5px);      /* float up on hover */
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;        /* smooth animation */
}`},{type:"heading",level:2,content:"Flexbox — The Layout Superpower"},{type:"text",content:"**Flexbox** is the modern way to arrange elements on a page. Before Flexbox, centering something was notoriously difficult. Now it's just 3 lines of CSS! Flexbox lets you align items, distribute space, and create responsive layouts with ease."},{type:"code",language:"css",filename:"flexbox.css",code:`/* Step 1: Make the parent a flex container */
.container {
    display: flex;  /* This is the magic line! */
    /* Children automatically become flex items */
    /* They line up in a ROW by default */
}

/* ═══ DIRECTION ═══ */
.container {
    flex-direction: row;      /* Left to right (default) */
    flex-direction: column;   /* Top to bottom */
}

/* ═══ HORIZONTAL ALIGNMENT (justify-content) ═══ */
.container {
    justify-content: flex-start;    /* Left (default) */
    justify-content: center;        /* Center */
    justify-content: flex-end;      /* Right */
    justify-content: space-between; /* Even space, edges flush */
    justify-content: space-around;  /* Even space, including edges */
    justify-content: space-evenly;  /* Perfectly even spaces */
}

/* ═══ VERTICAL ALIGNMENT (align-items) ═══ */
.container {
    align-items: flex-start;  /* Top */
    align-items: center;      /* Middle (vertically!) */
    align-items: flex-end;    /* Bottom */
    align-items: stretch;     /* Fill height (default) */
}

/* ═══ WRAPPING (for responsive grids) ═══ */
.container {
    flex-wrap: wrap;    /* Items wrap to new line if needed */
    gap: 20px;          /* Space between items */
}`},{type:"heading",level:2,content:"Common Flexbox Patterns"},{type:"code",language:"css",filename:"flex_patterns.css",code:`/* PATTERN 1: Center ANYTHING (the holy grail!) */
.center-everything {
    display: flex;
    justify-content: center;  /* horizontal center */
    align-items: center;      /* vertical center */
    min-height: 100vh;        /* full screen height */
}

/* PATTERN 2: Navigation bar */
.navbar {
    display: flex;
    justify-content: space-between; /* logo left, links right */
    align-items: center;
    padding: 15px 30px;
    background: #1a1a2e;
}

.nav-links {
    display: flex;
    gap: 30px;                      /* space between links */
}

/* PATTERN 3: Card grid */
.card-grid {
    display: flex;
    flex-wrap: wrap;          /* wrap to new rows */
    gap: 20px;
    justify-content: center;  /* center the grid */
}

.card-grid .card {
    width: 300px;             /* each card is 300px wide */
    /* Cards will wrap to new rows when space runs out! */
}

/* PATTERN 4: Footer at bottom */
.page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.page main {
    flex: 1;  /* main content takes ALL remaining space */
}
/* Footer naturally sits at the bottom! */`},{type:"tip",content:"**Play Flexbox Froggy!** Go to flexboxfroggy.com — it's a free game that teaches Flexbox through 24 puzzles. It's the most fun way to master Flexbox and takes about 30 minutes. You'll be a Flexbox pro by the end!"},{type:"heading",level:2,content:"Build a Card Layout"},{type:"code",language:"html",filename:"cards.html",code:`<!DOCTYPE html>
<html>
<head>
    <title>Card Layout</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        body {
            background: #0f0f1a;
            padding: 40px;
            font-family: 'Segoe UI', sans-serif;
        }
        
        h1 {
            color: white;
            text-align: center;
            margin-bottom: 30px;
        }
        
        .card-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
        }
        
        .card {
            width: 280px;
            background: #1e1e30;
            border-radius: 16px;
            padding: 24px;
            color: white;
            border: 1px solid #333;
            transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 40px rgba(139, 92, 246, 0.3);
            border-color: #8b5cf6;
        }
        
        .card h3 { color: #8b5cf6; margin-bottom: 10px; }
        .card p { color: #999; font-size: 14px; line-height: 1.6; }
    </style>
</head>
<body>
    <h1>My Projects</h1>
    <div class="card-grid">
        <div class="card">
            <h3>🎮 Game Project</h3>
            <p>A fun browser game built with JavaScript.</p>
        </div>
        <div class="card">
            <h3>🎨 Art Portfolio</h3>
            <p>A gallery of my digital artwork.</p>
        </div>
        <div class="card">
            <h3>📱 App Design</h3>
            <p>UI mockups for a mobile app concept.</p>
        </div>
    </div>
</body>
</html>`},{type:"quiz",question:"What does 'margin: 0 auto;' do?",options:[{id:"a",text:"Removes all margins"},{id:"b",text:"Centers the element horizontally"},{id:"c",text:"Adds automatic margins everywhere"},{id:"d",text:"Makes margins invisible"}],correct:"b",explanation:"'margin: 0 auto' sets top/bottom margins to 0 and left/right margins to 'auto' — which automatically distributes equal space on both sides, centering a block element horizontally! This only works when the element has a set width."},{type:"checkpoint",content:"Build a page with a centered navigation bar (logo left, 3 links right) and a grid of 4 cards below it, using only Flexbox for layout. Add hover effects on the cards!"}]}}]},{id:3,title:"JavaScript — Making It Interactive!",lessons:[{id:"3-1",title:"Introduction to JavaScript",completed:!1,content:{description:"Add interactivity to your pages! Learn variables, data types, and your first JavaScript code.",sections:[{type:"text",content:"**JavaScript** brings your pages to life! It's the programming language of the web — every interactive feature you've ever used (clicking buttons, submitting forms, playing videos, infinite scrolling) is powered by JavaScript. It's also the most widely-used programming language in the world! ⚡"},{type:"heading",level:2,content:"Adding JavaScript to Your Page"},{type:"code",language:"html",filename:"add_js.html",code:`<!-- METHOD 1: External file (BEST WAY!) -->
<!-- Put this at the END of <body>, before </body> -->
<body>
    <h1>My Page</h1>
    <p>Content here...</p>
    
    <!-- JavaScript goes at the BOTTOM! -->
    <script src="script.js"><\/script>
</body>

<!-- METHOD 2: Internal script (for quick tests) -->
<script>
    console.log('Hello from JavaScript!');
<\/script>

<!-- WHY at the bottom?
     HTML loads top-to-bottom. If JS is at the top,
     it runs before the HTML elements exist!
     Bottom = all HTML is loaded first ✅ -->`},{type:"heading",level:2,content:"Your First JavaScript"},{type:"code",language:"javascript",filename:"first.js",code:`// ═══════════════════════════════════════
// CONSOLE.LOG — Your debugging best friend!
// ═══════════════════════════════════════
// Press F12 in your browser → Console tab to see output!
console.log('Hello, JavaScript!');
console.log('I can print numbers:', 42);
console.log('And do math:', 10 + 20);

// ALERT — Show a popup (use sparingly!)
alert('Welcome to my website!');

// ═══════════════════════════════════════
// VARIABLES — Storing data
// ═══════════════════════════════════════
// let = can change later
let name = 'Alex';
let age = 14;
let score = 0;

// const = CANNOT change (use this by default!)
const PI = 3.14159;
const MAX_LIVES = 3;
const MY_NAME = 'Alex';

// ═══════════════════════════════════════
// DATA TYPES
// ═══════════════════════════════════════
let text = 'Hello';          // String (text in quotes)
let number = 42;             // Number (integer)
let decimal = 3.14;          // Number (decimal)
let isAwesome = true;        // Boolean (true/false)
let nothing = null;          // Null (intentionally empty)
let unknown;                 // Undefined (not set yet)
let fruits = ['apple', 'banana']; // Array (list)

// Check what type something is:
console.log(typeof text);    // 'string'
console.log(typeof number);  // 'number'
console.log(typeof isAwesome); // 'boolean'

// ═══════════════════════════════════════
// TEMPLATE LITERALS (modern string magic!)
// ═══════════════════════════════════════
let firstName = 'Alex';
let greeting = \`Hello, \${firstName}! You are \${age} years old.\`;
console.log(greeting);
// Output: Hello, Alex! You are 14 years old.

let result = \`2 + 3 = \${2 + 3}\`;
console.log(result); // '2 + 3 = 5'`},{type:"heading",level:2,content:"Operators and Conditions"},{type:"code",language:"javascript",filename:"operators.js",code:`// ═══════════════════════════════════════
// MATH OPERATORS
// ═══════════════════════════════════════
let a = 10 + 5;   // 15 (addition)
let b = 10 - 5;   // 5  (subtraction)
let c = 10 * 5;   // 50 (multiplication)
let d = 10 / 3;   // 3.33... (division)
let e = 10 % 3;   // 1  (remainder/modulo)
let f = 2 ** 3;   // 8  (exponent: 2³)

// Short forms
let score = 0;
score++;          // score = score + 1 → 1
score += 10;      // score = score + 10 → 11
score -= 5;       // score = score - 5 → 6

// ═══════════════════════════════════════
// COMPARISON OPERATORS
// ═══════════════════════════════════════
console.log(5 === 5);   // true  (strict equal — USE THIS!)
console.log(5 !== 3);   // true  (not equal)
console.log(10 > 5);    // true  (greater than)
console.log(3 < 7);     // true  (less than)
console.log(5 >= 5);    // true  (greater or equal)
console.log(3 <= 2);    // false (less or equal)

// ═══════════════════════════════════════
// IF/ELSE — Making decisions!
// ═══════════════════════════════════════
let age = 15;

if (age >= 18) {
    console.log('You are an adult');
} else if (age >= 13) {
    console.log('You are a teenager');
} else {
    console.log('You are a child');
}

// LOGICAL OPERATORS
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {       // AND: both must be true
    console.log('Admin access');
}
if (isLoggedIn || isAdmin) {       // OR: at least one true
    console.log('Some access');
}
if (!isAdmin) {                     // NOT: flips the value
    console.log('Not an admin');
}`},{type:"heading",level:2,content:"Arrays and Loops"},{type:"code",language:"javascript",filename:"arrays_loops.js",code:`// ═══════════════════════════════════════
// ARRAYS — Lists of items
// ═══════════════════════════════════════
const fruits = ['apple', 'banana', 'cherry', 'date'];

console.log(fruits[0]);       // 'apple' (first item, index 0)
console.log(fruits.length);   // 4
fruits.push('elderberry');     // add to end
fruits.pop();                 // remove from end
fruits.includes('banana');    // true

// ═══════════════════════════════════════
// LOOPS — Repeat actions
// ═══════════════════════════════════════

// for loop (classic)
for (let i = 0; i < 5; i++) {
    console.log(\`Count: \${i}\`);
}

// for...of loop (modern, cleaner)
for (const fruit of fruits) {
    console.log(\`I like \${fruit}\`);
}

// forEach (array method)
fruits.forEach((fruit, index) => {
    console.log(\`\${index + 1}. \${fruit}\`);
});

// ═══════════════════════════════════════
// FUNCTIONS — Reusable code blocks
// ═══════════════════════════════════════

// Function declaration
function greet(name) {
    return \`Hello, \${name}!\`;
}
console.log(greet('Alex')); // 'Hello, Alex!'

// Arrow function (modern, shorter)
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8

const isEven = (num) => num % 2 === 0;
console.log(isEven(4)); // true`},{type:"tip",content:"**Use `const` by default, `let` when you need to change the value.** Never use `var` (the old way) — it has confusing scoping rules. Also, ALWAYS use `===` instead of `==` for comparisons. `==` does weird type conversions: `'5' == 5` is true, but `'5' === 5` is false (different types)."},{type:"quiz",question:"What's the difference between let and const?",options:[{id:"a",text:"No difference"},{id:"b",text:"let can be reassigned, const cannot"},{id:"c",text:"const is faster"},{id:"d",text:"let is for numbers, const is for text"}],correct:"b",explanation:"'let' creates a variable you can change later (reassign). 'const' creates a constant that cannot be reassigned — if you try, you get an error. Use const by default for safety!"},{type:"checkpoint",content:"Create a script.js file that: declares 3 variables (your name, age, hobby), prints a greeting using template literals, uses an if/else to check if you're a teen/adult, loops through an array of 5 foods and prints each one, and defines a function that calculates your age in months."}]}},{id:"3-2",title:"DOM Manipulation & Events",completed:!1,content:{description:"Control HTML with JavaScript! Change text, styles, and make things happen when users click!",sections:[{type:"text",content:"The **DOM** (Document Object Model) is how JavaScript sees your HTML page. It turns your HTML into a tree of objects that JavaScript can find, read, change, and create. This is where the magic happens — you can change anything on the page without reloading! 🪄"},{type:"heading",level:2,content:"Selecting Elements"},{type:"code",language:"javascript",filename:"selecting.js",code:`// Get ONE element by ID (fastest, most specific)
const title = document.getElementById('main-title');

// Get ONE element by CSS selector (very flexible!)
const card = document.querySelector('.card');
const firstLink = document.querySelector('a');
const special = document.querySelector('#hero .subtitle');

// Get ALL matching elements (returns a list!)
const allCards = document.querySelectorAll('.card');
const allParagraphs = document.querySelectorAll('p');

// Loop through all matched elements
allCards.forEach((card) => {
    console.log(card.textContent);
});`},{type:"heading",level:2,content:"Changing Content and Styles"},{type:"code",language:"javascript",filename:"changing.js",code:`const title = document.getElementById('title');

// Change text content
title.textContent = 'New Title!';

// Change HTML (can include tags)
title.innerHTML = 'Hello <strong>World</strong>!';

// Change styles directly
const box = document.getElementById('box');
box.style.backgroundColor = '#8b5cf6';
box.style.color = 'white';
box.style.padding = '20px';
box.style.borderRadius = '12px';
// Note: CSS kebab-case → JS camelCase
// background-color → backgroundColor

// BETTER: Add/remove CSS classes!
box.classList.add('active');      // add a class
box.classList.remove('hidden');   // remove a class
box.classList.toggle('dark-mode'); // add if missing, remove if present
box.classList.contains('active'); // returns true/false

// Create NEW elements
const newCard = document.createElement('div');
newCard.classList.add('card');
newCard.textContent = 'I am a new card!';
document.getElementById('container').appendChild(newCard);

// Remove an element
const oldElement = document.getElementById('old');
oldElement.remove();`},{type:"heading",level:2,content:"Events — Responding to Users!"},{type:"code",language:"javascript",filename:"events.js",code:`// ═══════════════════════════════════════
// addEventListener — The professional way!
// ═══════════════════════════════════════
const button = document.getElementById('myButton');

button.addEventListener('click', () => {
    console.log('Button was clicked!');
    alert('You clicked the button!');
});

// ═══════════════════════════════════════
// COMMON EVENTS
// ═══════════════════════════════════════

// Click
element.addEventListener('click', () => { /* ... */ });

// Mouse hover
element.addEventListener('mouseenter', () => {
    element.style.backgroundColor = 'blue';
});
element.addEventListener('mouseleave', () => {
    element.style.backgroundColor = 'white';
});

// Keyboard
document.addEventListener('keydown', (event) => {
    console.log('Key pressed:', event.key);
    if (event.key === 'Enter') {
        console.log('Enter was pressed!');
    }
});

// Form submit
form.addEventListener('submit', (event) => {
    event.preventDefault(); // STOP page refresh!
    console.log('Form submitted!');
});

// Input change (real-time)
input.addEventListener('input', (event) => {
    console.log('Current value:', event.target.value);
});`},{type:"heading",level:2,content:"Practical Example: Click Counter"},{type:"code",language:"javascript",filename:"counter.js",code:`// HTML:
// <h2 id="count">0</h2>
// <button id="increment">Click Me! +1</button>
// <button id="decrement">-1</button>
// <button id="reset">Reset</button>

let count = 0;
const display = document.getElementById('count');

document.getElementById('increment').addEventListener('click', () => {
    count++;
    display.textContent = count;
    display.style.color = count > 0 ? '#10b981' : count < 0 ? '#ef4444' : 'white';
});

document.getElementById('decrement').addEventListener('click', () => {
    count--;
    display.textContent = count;
    display.style.color = count > 0 ? '#10b981' : count < 0 ? '#ef4444' : 'white';
});

document.getElementById('reset').addEventListener('click', () => {
    count = 0;
    display.textContent = count;
    display.style.color = 'white';
});`},{type:"heading",level:2,content:"Dark Mode Toggle"},{type:"code",language:"javascript",filename:"darkmode.js",code:`const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        toggleBtn.textContent = '☀️ Light Mode';
    } else {
        toggleBtn.textContent = '🌙 Dark Mode';
    }
});

// In your CSS:
// .dark-mode { background: #0f0f1a; color: #e0e0e0; }
// .dark-mode .card { background: #1e1e30; }`},{type:"tip",content:"**Prefer classList over style!** Instead of `element.style.backgroundColor = 'blue'`, define a CSS class `.active { background: blue; }` and toggle it with `element.classList.toggle('active')`. This keeps your JavaScript clean and your styles in CSS where they belong."},{type:"warning",content:"**Always use event.preventDefault() on form submit!** Without it, the browser refreshes the page when you submit a form, which erases everything JavaScript was doing. This is the #1 beginner mistake with forms!"},{type:"checkpoint",content:"Build an interactive page with: a heading that changes text when you click a button, a click counter that goes up and down, and a dark mode toggle button. Use addEventListener for all interactions!"}]}}]},{id:4,title:"Forms & User Input",lessons:[{id:"4-1",title:"HTML Forms",completed:!1,content:{description:"Create forms that collect user input — text fields, checkboxes, dropdowns, and styled buttons!",sections:[{type:"text",content:"**Forms** are how users interact with websites — signing up, logging in, searching, writing comments, taking quizzes. Every website that collects information uses forms. In this lesson, you'll learn to build beautiful, functional forms! 📝"},{type:"heading",level:2,content:"Form Structure & Input Types"},{type:"code",language:"html",filename:"form.html",code:`<form id="signup-form">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username"
           placeholder="Enter your name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email"
           placeholder="you@example.com" required>
    
    <label for="password">Password:</label>
    <input type="password" id="password" name="password"
           placeholder="Min 6 characters" required minlength="6">
    
    <label for="age">Age:</label>
    <input type="number" id="age" name="age" min="1" max="120">
    
    <label for="birthday">Birthday:</label>
    <input type="date" id="birthday" name="birthday">
    
    <label for="color">Favorite Color:</label>
    <input type="color" id="color" name="color" value="#8b5cf6">
    
    <label for="country">Country:</label>
    <select id="country" name="country">
        <option value="">Select a country...</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
        <option value="in">India</option>
    </select>
    
    <label for="bio">About You:</label>
    <textarea id="bio" name="bio" rows="4"
              placeholder="Tell us about yourself..."></textarea>
    
    <div class="checkbox-group">
        <input type="checkbox" id="agree" name="agree" required>
        <label for="agree">I agree to the terms</label>
    </div>
    
    <button type="submit">Sign Up!</button>
</form>`},{type:"heading",level:2,content:"Styling Forms"},{type:"code",language:"css",filename:"form_styles.css",code:`form {
    max-width: 450px;
    margin: 40px auto;
    background: #1e1e30;
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

label {
    display: block;
    margin-top: 18px;
    margin-bottom: 6px;
    color: #b0b0b0;
    font-weight: 500;
    font-size: 14px;
}

input, select, textarea {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid #333;
    border-radius: 10px;
    background: #0f0f1a;
    color: white;
    font-size: 16px;
    transition: border-color 0.3s;
}

input:focus, select:focus, textarea:focus {
    border-color: #8b5cf6;  /* purple glow on focus! */
    outline: none;
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.2);
}

button[type="submit"] {
    width: 100%;
    margin-top: 24px;
    padding: 14px;
    background: linear-gradient(135deg, #8b5cf6, #ec4899);
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
}

button[type="submit"]:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(139, 92, 246, 0.4);
}`},{type:"tip",content:"**Always use `<label>` with inputs!** The `for` attribute should match the input's `id`. This helps accessibility (screen readers), and lets users click the label to focus the input — a small detail that makes a big UX difference!"},{type:"checkpoint",content:"Create a styled contact form with: name, email, subject dropdown (3 options), message textarea, and a submit button. Use the dark theme styling above. It should look professional!"}]}},{id:"4-2",title:"Form Handling with JavaScript",completed:!1,content:{description:"Process form data with JavaScript — validate input, show errors, and respond to user submissions!",sections:[{type:"text",content:"Now that you can build forms, let's make them actually DO something! JavaScript lets you read what users type, validate their input (check if it's correct), show helpful error messages, and process the data — all without refreshing the page!"},{type:"heading",level:2,content:"Getting Form Values"},{type:"code",language:"javascript",filename:"form_handling.js",code:`const form = document.getElementById('signup-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();  // CRITICAL: Stop page refresh!
    
    // Get all input values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    console.log('Username:', username);
    console.log('Email:', email);
    
    // You now have the data — validate it!
});`},{type:"heading",level:2,content:"Form Validation"},{type:"code",language:"javascript",filename:"validation.js",code:`const form = document.getElementById('signup-form');
const errorDiv = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    errorDiv.textContent = '';  // clear previous errors
    errorDiv.style.color = '#ef4444';
    
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    
    // Validate username
    if (username.length < 3) {
        errorDiv.textContent = '❌ Username must be at least 3 characters';
        return; // stop here!
    }
    
    // Validate email (simple check)
    if (!email.includes('@') || !email.includes('.')) {
        errorDiv.textContent = '❌ Please enter a valid email';
        return;
    }
    
    // Validate password
    if (password.length < 6) {
        errorDiv.textContent = '❌ Password must be at least 6 characters';
        return;
    }
    
    // All good! Show success
    errorDiv.style.color = '#10b981';
    errorDiv.textContent = '✅ Account created successfully!';
    
    // In a real app, you'd send data to a server here
    console.log('Form submitted:', { username, email });
});`},{type:"heading",level:2,content:"Real-time Password Strength"},{type:"code",language:"javascript",filename:"password_strength.js",code:`const passwordInput = document.getElementById('password');
const strengthBar = document.getElementById('strength-bar');
const strengthText = document.getElementById('strength-text');

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    let strength = 0;
    
    if (password.length >= 6) strength++;
    if (password.length >= 10) strength++;
    if (/[A-Z]/.test(password)) strength++;  // has uppercase
    if (/[0-9]/.test(password)) strength++;  // has number
    if (/[^A-Za-z0-9]/.test(password)) strength++; // has symbol
    
    const levels = [
        { text: 'Very Weak', color: '#ef4444', width: '20%' },
        { text: 'Weak', color: '#f97316', width: '40%' },
        { text: 'Fair', color: '#eab308', width: '60%' },
        { text: 'Strong', color: '#22c55e', width: '80%' },
        { text: 'Very Strong', color: '#10b981', width: '100%' }
    ];
    
    const level = levels[Math.min(strength, 4)];
    strengthBar.style.width = level.width;
    strengthBar.style.backgroundColor = level.color;
    strengthText.textContent = level.text;
    strengthText.style.color = level.color;
});`},{type:"tip",content:"**Use `.trim()` on input values!** `' hello '.trim()` removes whitespace from both ends, giving you `'hello'`. Without trimming, a user could type just spaces and pass your 'not empty' validation. Always trim text inputs!"},{type:"quiz",question:"What does .value give you from an input element?",options:[{id:"a",text:"The input's ID"},{id:"b",text:"The text the user typed"},{id:"c",text:"The input's type"},{id:"d",text:"The input's placeholder"}],correct:"b",explanation:"The .value property gives you whatever the user has typed or selected in that input field. It's always a string, even for number inputs (use parseInt() to convert)."},{type:"checkpoint",content:"Build a signup form with real-time validation: username (min 3 chars), email (must contain @ and .), password (min 6 chars with strength indicator). Show error messages in red, success in green!"}]}}]},{id:5,title:"Build Real Projects!",lessons:[{id:"5-1",title:"Project: Profile Card",completed:!1,content:{description:"Build a beautiful, professional profile card — a portfolio piece you'll be proud of!",sections:[{type:"text",content:"Let's build a sleek profile card that looks like it belongs on a professional website! This project combines everything you've learned — HTML structure, CSS styling with Flexbox, gradients, hover effects, and box shadows. This is something you can actually use as part of a portfolio. 🎨"},{type:"heading",level:2,content:"The Complete Profile Card"},{type:"code",language:"html",filename:"profile.html",code:`<!DOCTYPE html>
<html>
<head>
    <title>Profile Card</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="card">
        <div class="card-header">
            <img src="https://i.pravatar.cc/200" alt="Profile" class="avatar">
        </div>
        <div class="card-body">
            <h1>Alex Johnson</h1>
            <p class="title">Web Developer ✨</p>
            <p class="bio">I love creating beautiful websites and
            learning new technologies! Currently building cool
            stuff with HTML, CSS & JavaScript.</p>
            <div class="stats">
                <div class="stat">
                    <span class="number">52</span>
                    <span class="label">Projects</span>
                </div>
                <div class="stat">
                    <span class="number">1.2k</span>
                    <span class="label">Followers</span>
                </div>
                <div class="stat">
                    <span class="number">890</span>
                    <span class="label">Following</span>
                </div>
            </div>
            <button class="follow-btn" id="follow-btn">Follow</button>
        </div>
    </div>
    <script>
        const btn = document.getElementById('follow-btn');
        let following = false;
        btn.addEventListener('click', () => {
            following = !following;
            btn.textContent = following ? '✓ Following' : 'Follow';
            btn.style.background = following
                ? '#333' : 'linear-gradient(135deg, #8b5cf6, #ec4899)';
        });
    <\/script>
</body>
</html>`},{type:"code",language:"css",filename:"style.css",code:`* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #0f0f1a, #1a1a2e);
    font-family: 'Segoe UI', sans-serif;
}

.card {
    width: 360px;
    background: #1e1e30;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    border: 1px solid #333;
}

.card-header {
    height: 120px;
    background: linear-gradient(135deg, #8b5cf6, #ec4899);
    position: relative;
}

.avatar {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border: 5px solid #1e1e30;
    position: absolute;
    bottom: -55px;
    left: 50%;
    transform: translateX(-50%);
    object-fit: cover;
}

.card-body {
    padding: 70px 30px 30px;
    text-align: center;
}

.card-body h1 {
    font-size: 26px;
    color: white;
}

.title {
    color: #8b5cf6;
    font-weight: 500;
    margin: 5px 0 15px;
    font-size: 15px;
}

.bio {
    color: #888;
    font-size: 14px;
    line-height: 1.7;
}

.stats {
    display: flex;
    justify-content: space-around;
    margin: 25px 0;
    padding: 20px 0;
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
}

.number {
    display: block;
    font-size: 22px;
    font-weight: bold;
    color: white;
}

.label {
    font-size: 12px;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.follow-btn {
    width: 100%;
    padding: 14px;
    background: linear-gradient(135deg, #8b5cf6, #ec4899);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
}

.follow-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
}`},{type:"tip",content:"**Use `object-fit: cover` on images** to make them fill their container without stretching! Combined with `border-radius: 50%`, you get perfectly circular profile photos every time."},{type:"checkpoint",content:"Build this profile card, then customize it with YOUR name, bio, and stats. Change the gradient colors to your favorites. Make the Follow button actually toggle between 'Follow' and 'Following' with JavaScript!"}]}},{id:"5-2",title:"Project: Interactive Quiz Game",completed:!1,content:{description:"Build a working quiz game with questions, scoring, and results — using HTML, CSS, and JavaScript together!",sections:[{type:"text",content:"Let's build an interactive quiz that tracks score, shows right/wrong answers with colors, and displays results at the end! This project combines everything: DOM manipulation, events, arrays, loops, and conditions. It's a real application! 🧠"},{type:"heading",level:2,content:"The Quiz JavaScript"},{type:"code",language:"javascript",filename:"quiz.js",code:`const questions = [
    {
        question: 'What does HTML stand for?',
        options: ['Hyper Text Markup Language', 'Hot Mail', 'How To Make Lasagna'],
        correct: 0
    },
    {
        question: 'What does CSS stand for?',
        options: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Styling System'],
        correct: 1
    },
    {
        question: 'Which symbol starts a JavaScript comment?',
        options: ['<!-- -->', '/* */', '//'],
        correct: 2
    },
    {
        question: 'What does the <a> tag create?',
        options: ['An image', 'A link', 'A paragraph'],
        correct: 1
    },
    {
        question: 'Which CSS property changes text color?',
        options: ['text-color', 'font-color', 'color'],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const scoreEl = document.getElementById('score');
const resultEl = document.getElementById('result');
const progressEl = document.getElementById('progress');

function showQuestion() {
    answered = false;
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    progressEl.textContent = \`Question \${currentQuestion + 1} of \${questions.length}\`;
    
    optionsEl.innerHTML = '';
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.textContent = option;
        btn.addEventListener('click', () => selectAnswer(index, btn));
        optionsEl.appendChild(btn);
    });
}

function selectAnswer(selected, clickedBtn) {
    if (answered) return; // prevent double-clicking!
    answered = true;
    
    const correct = questions[currentQuestion].correct;
    const allBtns = document.querySelectorAll('.option-btn');
    
    allBtns.forEach((btn, index) => {
        btn.style.pointerEvents = 'none'; // disable all
        if (index === correct) {
            btn.classList.add('correct'); // green
        } else if (index === selected && selected !== correct) {
            btn.classList.add('wrong'); // red
        }
    });
    
    if (selected === correct) score++;
}

nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    document.getElementById('quiz-area').style.display = 'none';
    resultEl.style.display = 'block';
    
    const percentage = Math.round((score / questions.length) * 100);
    let emoji = percentage >= 80 ? '🎉' : percentage >= 50 ? '👍' : '📚';
    
    scoreEl.innerHTML = \`
        <h2>\${emoji} Quiz Complete!</h2>
        <p class="final-score">You scored \${score}/\${questions.length} (\${percentage}%)</p>
        <p>\${percentage >= 80 ? 'Amazing!' : percentage >= 50 ? 'Good job!' : 'Keep practicing!'}</p>
        <button onclick="location.reload()">Try Again</button>
    \`;
}

// Start the quiz!
showQuestion();`},{type:"code",language:"css",filename:"quiz_styles.css",code:`.option-btn {
    display: block;
    width: 100%;
    padding: 15px 20px;
    margin-bottom: 10px;
    background: #1e1e30;
    color: white;
    border: 2px solid #333;
    border-radius: 12px;
    font-size: 16px;
    cursor: pointer;
    text-align: left;
    transition: all 0.2s;
}

.option-btn:hover {
    border-color: #8b5cf6;
    background: #252540;
}

.option-btn.correct {
    background: #065f46;
    border-color: #10b981;
    color: #6ee7b7;
}

.option-btn.wrong {
    background: #7f1d1d;
    border-color: #ef4444;
    color: #fca5a5;
}`},{type:"tip",content:"**Want to add more questions?** Just add more objects to the `questions` array! You can also randomize the order with `questions.sort(() => Math.random() - 0.5)` at the start."},{type:"checkpoint",content:"Build the complete quiz: HTML structure, CSS styling, and JavaScript logic. Add 5+ questions about topics YOU know. Make it look professional with your own color scheme!"}]}}]},{id:6,title:"Responsive Design & Animations",lessons:[{id:"6-1",title:"Making Sites Work on All Devices",completed:!1,content:{description:"Make your websites look great on phones, tablets, and desktops — responsive design essentials!",sections:[{type:"text",content:"Over 60% of web traffic comes from mobile phones! If your website only looks good on a desktop, you're losing most of your visitors. **Responsive design** makes your site adapt to ANY screen size — phone, tablet, laptop, or giant monitor. 📱💻🖥️"},{type:"heading",level:2,content:"The Viewport Meta Tag"},{type:"code",language:"html",filename:"viewport.html",code:`<!-- ALWAYS add this in your <head>! -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Without this, mobile browsers zoom out to show
     the desktop version, making everything tiny! -->`},{type:"heading",level:2,content:"Media Queries — Different Styles for Different Screens"},{type:"code",language:"css",filename:"responsive.css",code:`/* Default styles (mobile first!) */
.card-grid {
    display: flex;
    flex-direction: column;  /* stack vertically on mobile */
    gap: 20px;
    padding: 20px;
}

.card {
    width: 100%;  /* full width on mobile */
}

/* Tablet (768px and up) */
@media (min-width: 768px) {
    .card-grid {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    .card {
        width: 45%;  /* 2 cards per row */
    }
}

/* Desktop (1024px and up) */
@media (min-width: 1024px) {
    .card {
        width: 30%;  /* 3 cards per row */
    }
}

/* Responsive font sizes */
h1 {
    font-size: 28px;  /* mobile */
}
@media (min-width: 768px) {
    h1 { font-size: 42px; }  /* tablet+ */
}

/* Hide/show elements on different screens */
.mobile-menu { display: block; }
.desktop-menu { display: none; }

@media (min-width: 768px) {
    .mobile-menu { display: none; }
    .desktop-menu { display: flex; }
}`},{type:"heading",level:2,content:"CSS Transitions & Animations"},{type:"code",language:"css",filename:"animations.css",code:`/* TRANSITIONS — Smooth changes on hover/click */
.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
}

/* BUTTON with satisfying click */
.btn {
    transition: all 0.2s ease;
}
.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
}
.btn:active {
    transform: translateY(0);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

/* KEYFRAME ANIMATIONS */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.fade-in {
    animation: fadeIn 0.6s ease forwards;
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

.pulse {
    animation: pulse 2s ease-in-out infinite;
}

@keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.animated-bg {
    background: linear-gradient(270deg, #8b5cf6, #ec4899, #06b6d4);
    background-size: 600% 600%;
    animation: gradient 6s ease infinite;
}`},{type:"tip",content:"**Mobile-first design** means writing your default CSS for mobile, then using `@media (min-width: ...)` to ADD styles for larger screens. This is the professional approach because it's easier to add complexity for bigger screens than to remove it for smaller ones."},{type:"checkpoint",content:"Make your profile card responsive: stacked on mobile, side-by-side on tablet. Add smooth hover animations to cards and buttons. Test by resizing your browser window!"}]}},{id:"6-2",title:"CSS Grid & Advanced Layouts",completed:!1,content:{description:"Master CSS Grid for complex layouts — photo galleries, dashboards, and magazine-style pages!",sections:[{type:"text",content:"**CSS Grid** is Flexbox's powerful sibling. While Flexbox is great for one-dimensional layouts (a row OR a column), Grid handles **two-dimensional** layouts (rows AND columns simultaneously). Together, Flexbox + Grid can create any layout imaginable! 🎯"},{type:"heading",level:2,content:"CSS Grid Basics"},{type:"code",language:"css",filename:"grid.css",code:`/* Create a grid container */
.gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
    gap: 20px;
    padding: 20px;
}

/* Responsive grid */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    /* Automatically fills as many 250px+ columns as will fit! */
    /* Responsive without media queries! */
}

/* Dashboard layout */
.dashboard {
    display: grid;
    grid-template-columns: 250px 1fr;    /* sidebar + main */
    grid-template-rows: 60px 1fr 50px;   /* header, content, footer */
    min-height: 100vh;
    gap: 0;
}

.header  { grid-column: 1 / -1; }  /* span full width */
.sidebar { grid-row: 2 / 3; }
.main    { grid-row: 2 / 3; }
.footer  { grid-column: 1 / -1; }`},{type:"tip",content:"**Use `repeat(auto-fill, minmax(250px, 1fr))` for responsive grids!** This magical one-liner creates as many columns as will fit (min 250px each), and they grow to fill remaining space. No media queries needed — it's responsive automatically!"},{type:"heading",level:2,content:"Flexbox vs Grid"},{type:"code",language:"text",filename:"comparison.txt",code:`When to use each:

FLEXBOX (1D)                    │ GRID (2D)
────────────────────────────────┼────────────────────────────────
• Navigation bars               │ • Photo galleries
• Card rows                     │ • Dashboard layouts
• Centering things              │ • Magazine-style pages
• Aligning items in a row/col   │ • Complex multi-area layouts
• Simple component layouts      │ • When you need rows AND columns

PRO TIP: Use BOTH together!
• Grid for the overall page layout
• Flexbox for components within grid cells`},{type:"checkpoint",content:"Create a photo gallery using CSS Grid that automatically adjusts from 1 column on mobile to 2 on tablet to 3+ on desktop, using only `repeat(auto-fill, minmax(250px, 1fr))`!"}]}}]},{id:7,title:"Publishing Your Site!",lessons:[{id:"7-1",title:"Going Live on the Internet",completed:!1,content:{description:"Put your website on the internet for FREE! Deploy with GitHub Pages or Netlify.",sections:[{type:"text",content:"Your website deserves to be seen by the world! Let's put it online for FREE. In just a few minutes, you'll have a real URL that anyone on the planet can visit. This is one of the most exciting moments in web development — when your creation goes live! 🌐"},{type:"heading",level:2,content:"Free Hosting Options"},{type:"list",items:["**GitHub Pages** ⭐ — Best for portfolios, free with github.com account","**Netlify** ⭐ — Drag-and-drop deployment, incredibly easy","**Vercel** — Great for JavaScript projects and frameworks","**Cloudflare Pages** — Fast CDN, generous free tier"]},{type:"heading",level:2,content:"Deploy with Netlify (Easiest Method!)"},{type:"code",language:"text",filename:"netlify_deploy.txt",code:`NETLIFY — Deploy in 30 seconds!

1. Go to netlify.com (sign up free with email or GitHub)
2. Click 'Add new site' → 'Deploy manually'
3. DRAG your project folder onto the upload area
4. Wait 10 seconds...
5. DONE! 🎉 You get a URL like: funny-name-123.netlify.app
6. Optional: Go to Site Settings → Change site name
   → yourname.netlify.app

Every time you want to update:
- Go to Deploys → drag the folder again
- New version is live in seconds!`},{type:"heading",level:2,content:"Deploy with GitHub Pages"},{type:"code",language:"text",filename:"github_pages.txt",code:`GITHUB PAGES — Professional deployment!

1. Create a GitHub account at github.com
2. Create a new repository (green '+' button)
3. Name it: yourusername.github.io
4. Upload your HTML, CSS, and JS files
   (main file MUST be named index.html!)
5. Go to Settings → Pages
6. Under 'Source', select 'main' branch
7. Wait 1-2 minutes...
8. Your site is live at: yourusername.github.io! 🎉

For project sites (not your main page):
- Create repo with any name (e.g., 'my-quiz')
- Upload files, enable Pages
- URL: yourusername.github.io/my-quiz/`},{type:"heading",level:2,content:"Pre-Deployment Checklist"},{type:"code",language:"text",filename:"checklist.txt",code:`BEFORE YOU DEPLOY — Check these!

✅ Main file is named 'index.html' (not 'home.html'!)
✅ All file names are lowercase (no spaces!)
   Good: style.css, script.js, images/photo.jpg
   Bad:  Style.CSS, My Script.js, My Photo.JPG
✅ Use RELATIVE paths, not absolute:
   Good: 'images/logo.png' or './style.css'
   Bad:  'C:\\Users\\Alex\\Desktop\\images\\logo.png'
✅ All images load correctly
✅ All links work (test every one!)
✅ Page looks good on mobile (resize your window)
✅ No console errors (F12 → Console tab)`},{type:"tip",content:"**Share your URL everywhere!** Put it on your resume, social media profiles, and share it with friends and family. Having a live website is a real accomplishment and looks great to schools and employers!"},{type:"checkpoint",content:"Deploy your best project to either Netlify (easiest) or GitHub Pages. Share the live URL with at least one person! Then try updating the site — change some text, redeploy, and verify the changes are live."}]}},{id:"7-2",title:"Portfolio & Next Steps",completed:!1,content:{description:"Build a portfolio page linking all your projects, and discover what to learn next!",sections:[{type:"text",content:"The best way to show off your skills is with a **portfolio website** — a single page that links to all your projects. Think of it as your web development resume! Let's build one, and then I'll show you where to go from here."},{type:"heading",level:2,content:"Portfolio Page Structure"},{type:"code",language:"html",filename:"portfolio.html",code:`<!DOCTYPE html>
<html>
<head>
    <title>My Portfolio</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="portfolio.css">
</head>
<body>
    <header>
        <h1>Hi, I'm [Your Name] 👋</h1>
        <p>Web Developer | Creator | Learner</p>
    </header>
    
    <section class="projects">
        <h2>My Projects</h2>
        <div class="project-grid">
            <a href="/profile-card/" class="project-card">
                <h3>🃏 Profile Card</h3>
                <p>A beautiful profile card with follow button.</p>
            </a>
            <a href="/quiz/" class="project-card">
                <h3>🧠 Quiz Game</h3>
                <p>Interactive quiz with scoring and results.</p>
            </a>
            <a href="/gallery/" class="project-card">
                <h3>📸 Photo Gallery</h3>
                <p>Responsive CSS Grid gallery.</p>
            </a>
        </div>
    </section>
    
    <section class="skills">
        <h2>Skills</h2>
        <div class="skill-tags">
            <span class="tag">HTML5</span>
            <span class="tag">CSS3</span>
            <span class="tag">JavaScript</span>
            <span class="tag">Flexbox</span>
            <span class="tag">CSS Grid</span>
            <span class="tag">Responsive Design</span>
        </div>
    </section>
    
    <footer>
        <p>Built with ❤️ by [Your Name] | 2025</p>
    </footer>
</body>
</html>`},{type:"heading",level:2,content:"What To Learn Next"},{type:"list",items:["📱 **Responsive Design** — Master media queries and mobile-first design","⚛️ **React or Vue** — Build complex, dynamic web applications","🗄️ **Backend (Node.js)** — Create servers, APIs, and databases","🎨 **Tailwind CSS** — Utility-first CSS framework used by pros","📦 **Git & GitHub** — Version control (track changes like a pro)","🔥 **TypeScript** — JavaScript with superpowers (type safety)","🚀 **Build, build, build!** — The best way to learn is by making things!"]},{type:"heading",level:2,content:"Project Ideas to Keep Learning"},{type:"list",items:["📝 **To-do list app** — Create, check off, and delete tasks","🧮 **Calculator** — Functional calculator with clean design","⏱️ **Stopwatch/Timer** — With start, stop, and lap buttons","🌤️ **Weather app** — Fetch real weather data from an API","🎮 **Tic-tac-toe** — Two-player game with win detection","📰 **Blog template** — Multi-page site with articles","🎵 **Music player UI** — Beautiful player interface","💰 **Expense tracker** — Log and categorize spending"]},{type:"text",content:"🎉 **CONGRATULATIONS!** You've completed the Web Development course! You can now build real websites with HTML, CSS, and JavaScript — and put them on the internet for the world to see. That's an incredible skill that most people don't have. Keep building, keep learning, and keep creating amazing things for the web! 🚀🌐"},{type:"checkpoint",content:"Build a portfolio page that links to at least 2 of your projects. Deploy it live. Share the URL — you're officially a web developer with a published portfolio! 🎉"}]}}]},{id:8,title:"Bonus: Advanced JavaScript",lessons:[{id:"8-1",title:"Objects, JSON & Local Storage",completed:!1,content:{description:"Level up with objects, JSON data, and saving data in the browser — essential skills for real web apps!",sections:[{type:"text",content:"Ready to level up? In this bonus chapter, we'll cover three powerful JavaScript concepts: **Objects** (structured data), **JSON** (data format used everywhere), and **Local Storage** (saving data in the browser). These are essential for building real web applications! 🚀"},{type:"heading",level:2,content:"Objects — Structured Data"},{type:"code",language:"javascript",filename:"objects.js",code:`// Objects store related data together
const user = {
    name: 'Alex',
    age: 14,
    hobbies: ['coding', 'gaming', 'art'],
    isStudent: true,
    
    // Methods (functions in objects)
    greet() {
        return \`Hi, I'm \${this.name}!\`;
    }
};

console.log(user.name);          // 'Alex'
console.log(user['age']);         // 14
console.log(user.hobbies[0]);    // 'coding'
console.log(user.greet());       // 'Hi, I'm Alex!'

// Add new properties
user.email = 'alex@email.com';

// Array of objects (very common!)
const products = [
    { name: 'Laptop', price: 999, inStock: true },
    { name: 'Phone', price: 699, inStock: true },
    { name: 'Tablet', price: 449, inStock: false }
];

// Filter, map, find
const inStock = products.filter(p => p.inStock);
const names = products.map(p => p.name);
const laptop = products.find(p => p.name === 'Laptop');
console.log(inStock, names, laptop);`},{type:"heading",level:2,content:"Local Storage — Save Data in the Browser!"},{type:"code",language:"javascript",filename:"storage.js",code:`// LOCAL STORAGE persists even after closing the browser!

// Save a simple value
localStorage.setItem('username', 'Alex');
localStorage.setItem('highScore', '42');

// Read a value
const name = localStorage.getItem('username'); // 'Alex'
const score = localStorage.getItem('highScore'); // '42' (always string!)

// Save an object (must convert to JSON string!)
const settings = { theme: 'dark', fontSize: 18, sound: true };
localStorage.setItem('settings', JSON.stringify(settings));

// Read an object (parse the JSON string back!)
const loaded = JSON.parse(localStorage.getItem('settings'));
console.log(loaded.theme); // 'dark'

// Delete
localStorage.removeItem('username');
localStorage.clear(); // delete EVERYTHING

// PRACTICAL: Remember dark mode preference!
const toggleBtn = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});`},{type:"tip",content:"**Local Storage only stores strings!** Always use `JSON.stringify()` when saving objects/arrays, and `JSON.parse()` when reading them back. Forgetting this is the #1 Local Storage bug!"},{type:"checkpoint",content:"Build a to-do list that saves tasks to Local Storage! When you refresh the page, your tasks should still be there. Include: add task, mark complete, delete task."}]}},{id:"8-2",title:"Fetching Data from APIs",completed:!1,content:{description:"Connect to the real world! Fetch live data from APIs — weather, jokes, Pokémon, and more!",sections:[{type:"text",content:"An **API** (Application Programming Interface) lets your website get real data from the internet — live weather, random jokes, Pokémon stats, movie info, and much more. This is how real web apps work: they fetch data from servers and display it dynamically! 🌐"},{type:"heading",level:2,content:"Fetch API — Getting Data"},{type:"code",language:"javascript",filename:"fetch.js",code:`// ═══ Fetch a random joke ═══
async function getJoke() {
    const response = await fetch(
        'https://official-joke-api.appspot.com/random_joke'
    );
    const joke = await response.json();
    
    document.getElementById('setup').textContent = joke.setup;
    document.getElementById('punchline').textContent = joke.punchline;
}

document.getElementById('joke-btn').addEventListener('click', getJoke);

// ═══ Fetch Pokémon data ═══
async function getPokemon(name) {
    try {
        const response = await fetch(
            \`https://pokeapi.co/api/v2/pokemon/\${name.toLowerCase()}\`
        );
        
        if (!response.ok) throw new Error('Pokémon not found!');
        
        const pokemon = await response.json();
        
        document.getElementById('pokemon-name').textContent =
            pokemon.name.toUpperCase();
        document.getElementById('pokemon-img').src =
            pokemon.sprites.front_default;
        document.getElementById('pokemon-type').textContent =
            pokemon.types.map(t => t.type.name).join(', ');
        document.getElementById('pokemon-hp').textContent =
            pokemon.stats[0].base_stat;
    } catch (error) {
        alert(error.message);
    }
}

// Search for a Pokémon
document.getElementById('search-btn').addEventListener('click', () => {
    const name = document.getElementById('pokemon-search').value;
    if (name) getPokemon(name);
});`},{type:"heading",level:2,content:"Free APIs to Try"},{type:"code",language:"text",filename:"free_apis.txt",code:`FUN FREE APIs (no key needed!):

Jokes:    official-joke-api.appspot.com/random_joke
Pokémon:  pokeapi.co/api/v2/pokemon/{name}
Dog pics: dog.ceo/api/breeds/image/random
Cat facts: catfact.ninja/fact
Advice:   api.adviceslip.com/advice
Trivia:   opentdb.com/api.php?amount=10
Countries: restcountries.com/v3.1/name/{name}

WEATHER (free key needed):
openweathermap.org/api — real weather data!`},{type:"warning",content:"**Always use try/catch with fetch!** Network requests can fail (no internet, server down, wrong URL). Without error handling, your app will crash silently. The try/catch pattern catches errors and lets you show a helpful message instead."},{type:"text",content:"🎉 **You've completed the entire Web Development course!** You can build HTML pages, style them beautifully with CSS, make them interactive with JavaScript, deploy them live, and even fetch real data from APIs. These skills open doors to building real applications, getting jobs, or creating your own projects. The web is your canvas — go create something amazing! 🚀"},{type:"checkpoint",content:"Build a Pokémon search app or random joke generator using the Fetch API. Display the data in a beautifully styled card. Deploy it live on Netlify — this is a great portfolio piece!"}]}}]}]};function ag({course:A,currentLesson:K,completedLessons:R,expandedChapters:h,onLessonSelect:_,onChapterToggle:L,progress:Q,isOpen:Y}){const[z,T]=ft.useState(""),W=B=>({completed:B.lessons.filter(X=>R.includes(X.id)).length,total:B.lessons.length}),D=z?A.chapters.map(B=>({...B,lessons:B.lessons.filter(J=>J.title.toLowerCase().includes(z.toLowerCase()))})).filter(B=>B.lessons.length>0):A.chapters;return d.jsxs("aside",{className:`sidebar ${Y?"open":""}`,children:[d.jsxs("div",{className:"sidebar-header",children:[d.jsxs("div",{className:"course-logo",children:[d.jsx("span",{className:"logo-icon",children:"🌐"}),d.jsxs("div",{children:[d.jsx("h1",{className:"course-title",children:A.title}),d.jsx("p",{className:"course-subtitle",children:A.description})]})]}),d.jsxs("div",{className:"progress-section",children:[d.jsxs("div",{className:"progress-header",children:[d.jsx("span",{children:"Progress"}),d.jsxs("span",{className:"progress-percent",children:[Q,"%"]})]}),d.jsx("div",{className:"progress-bar",children:d.jsx("div",{className:"progress-fill",style:{width:`${Q}%`}})})]}),d.jsxs("div",{className:"search-box",children:[d.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("circle",{cx:"11",cy:"11",r:"8"}),d.jsx("path",{d:"m21 21-4.35-4.35"})]}),d.jsx("input",{type:"text",placeholder:"Search lessons...",value:z,onChange:B=>T(B.target.value)})]})]}),d.jsx("nav",{className:"chapter-list",children:D.map(B=>{const J=h.includes(B.id),{completed:X,total:F}=W(B),pe=X===F;return d.jsxs("div",{className:"chapter",children:[d.jsxs("div",{className:`chapter-header ${J?"expanded":""}`,onClick:()=>L(B.id),children:[d.jsxs("div",{className:"chapter-info",children:[d.jsx("span",{className:`chapter-number ${pe?"completed":""}`,children:pe?"✓":B.id}),d.jsxs("div",{className:"chapter-text",children:[d.jsx("span",{className:"chapter-name",children:B.title}),d.jsxs("span",{className:"chapter-meta",children:[X,"/",F," lessons"]})]})]}),d.jsx("svg",{className:`chevron ${J?"rotated":""}`,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("path",{d:"m6 9 6 6 6-6"})})]}),J&&d.jsx("ul",{className:"lesson-list",children:B.lessons.map(le=>{const Se=K?.id===le.id,ye=R.includes(le.id);return d.jsxs("li",{className:`lesson-item ${Se?"active":""} ${ye?"completed":""}`,onClick:()=>_(le),children:[d.jsx("span",{className:"lesson-status",children:ye?d.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:d.jsx("polyline",{points:"20 6 9 17 4 12"})}):d.jsx("span",{className:"status-dot"})}),d.jsx("span",{className:"lesson-name",children:le.title})]},le.id)})})]},B.id)})})]})}function ig({code:A,language:K,filename:R}){const[h,_]=ft.useState(""),[L,Q]=ft.useState(!1),[Y,z]=ft.useState(!1),T=A.split(`
`),W=()=>{Q(!0),setTimeout(()=>{try{const X=B(A);_(X)}catch(X){_(`Error: ${X.message}`)}Q(!1)},500)},D=()=>{navigator.clipboard.writeText(A),z(!0),setTimeout(()=>z(!1),2e3)},B=X=>{const F=[],pe=X.split(`
`),le={};for(const Se of pe){if(Se.trim().startsWith("#")||!Se.trim())continue;const ye=Se.match(/print\((.+)\)/);if(ye){let xe=ye[1].trim();xe.startsWith('f"')||xe.startsWith("f'")?(xe=xe.slice(2,-1),xe=xe.replace(/\{([^}]+)\}/g,(Ue,V)=>V.includes("+")?"[calculated]":V.includes(":")?"[formatted]":le[V]||V),F.push(xe)):xe.startsWith('"')||xe.startsWith("'")?F.push(xe.slice(1,-1)):F.push(xe)}const ke=Se.match(/^(\w+)\s*=\s*(.+)$/);if(ke&&!Se.includes("def ")){const[,xe,Ue]=ke;le[xe]=Ue.replace(/["']/g,"").trim()}}return F.length>0?F.join(`
`):"✨ Code executed successfully!"},J=X=>{let F=X.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");const pe=["def","return","if","elif","else","for","while","in","not","and","or","True","False","None","import","from","class","try","except","finally","with","as","raise","break","continue","pass","lambda"],le=["print","len","range","str","int","float","list","dict","set","type","open","sum","min","max","sorted","enumerate","zip","map","filter","isinstance","super"];return F.replace(/(#.*)$/gm,"§COM§$1§/COM§").replace(/(f?&quot;[^&]*&quot;|f?&#39;[^&]*&#39;|f?"[^"]*"|f?'[^']*')/g,"§STR§$1§/STR§").replace(/\b(\d+\.?\d*)\b/g,"§NUM§$1§/NUM§").replace(new RegExp(`\\b(${pe.join("|")})\\b`,"g"),"§KEY§$1§/KEY§").replace(new RegExp(`\\b(${le.join("|")})\\b(?=\\()`,"g"),"§BLT§$1§/BLT§").replace(/§COM§/g,'<span class="comment">').replace(/§\/COM§/g,"</span>").replace(/§STR§/g,'<span class="string">').replace(/§\/STR§/g,"</span>").replace(/§NUM§/g,'<span class="number">').replace(/§\/NUM§/g,"</span>").replace(/§KEY§/g,'<span class="keyword">').replace(/§\/KEY§/g,"</span>").replace(/§BLT§/g,'<span class="builtin">').replace(/§\/BLT§/g,"</span>")};return d.jsxs("div",{className:"code-editor",children:[d.jsxs("div",{className:"editor-header",children:[d.jsx("div",{className:"editor-tabs",children:d.jsxs("div",{className:"editor-tab active",children:[d.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"})}),R]})}),d.jsxs("div",{className:"editor-actions",children:[d.jsx("button",{className:"copy-btn",onClick:D,title:"Copy code",children:Y?d.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#10b981",strokeWidth:"2",children:d.jsx("polyline",{points:"20 6 9 17 4 12"})}):d.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),d.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}),d.jsx("button",{className:"run-btn",onClick:W,disabled:L,children:L?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"spinner"}),"Running..."]}):d.jsxs(d.Fragment,{children:[d.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:d.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),"Run"]})})]})]}),d.jsxs("div",{className:"editor-content",children:[d.jsx("div",{className:"line-numbers",children:T.map((X,F)=>d.jsx("div",{children:F+1},F))}),d.jsx("pre",{className:"code-area",dangerouslySetInnerHTML:{__html:J(A)}})]}),h&&d.jsxs("div",{className:"output-area",children:[d.jsxs("div",{className:"output-header",children:[d.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("polyline",{points:"4 17 10 11 4 5"}),d.jsx("line",{x1:"12",y1:"19",x2:"20",y2:"19"})]}),"Output"]}),d.jsx("pre",{className:"output-content",children:h})]})]})}function ug({quiz:A}){const[K,R]=ft.useState(null),[h,_]=ft.useState(!1),L=()=>{K&&_(!0)},Q=K===A.correct,Y=z=>z.replace(/\n/g,"<br/>");return d.jsxs("div",{className:"quiz-container",children:[d.jsxs("div",{className:"quiz-header",children:[d.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),d.jsx("path",{d:"M12 17h.01"})]}),d.jsx("span",{children:"Quick Quiz"})]}),d.jsx("p",{className:"quiz-question",dangerouslySetInnerHTML:{__html:Y(A.question)}}),d.jsx("div",{className:"quiz-options",children:A.options.map(z=>{let T="quiz-option";return h?z.id===A.correct?T+=" correct":z.id===K&&z.id!==A.correct&&(T+=" incorrect"):z.id===K&&(T+=" selected"),d.jsxs("div",{className:T,onClick:()=>!h&&R(z.id),children:[d.jsx("span",{className:"option-marker",children:h&&z.id===A.correct?d.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:d.jsx("polyline",{points:"20 6 9 17 4 12"})}):h&&z.id===K&&z.id!==A.correct?d.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:[d.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),d.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}):z.id.toUpperCase()}),d.jsx("span",{className:"option-text",children:z.text})]},z.id)})}),h?d.jsxs("div",{className:`quiz-result ${Q?"correct":"incorrect"}`,children:[d.jsx("div",{className:"result-header",children:Q?d.jsxs(d.Fragment,{children:[d.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),d.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),"Correct! 🎉"]}):d.jsxs(d.Fragment,{children:[d.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),d.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),"Not quite!"]})}),d.jsx("p",{className:"result-explanation",children:A.explanation}),d.jsx("button",{className:"quiz-retry",onClick:()=>{R(null),_(!1)},children:"Try Again"})]}):d.jsx("button",{className:"quiz-submit gradient-btn",onClick:L,disabled:!K,children:"Check Answer"})]})}function cg({lesson:A,isCompleted:K,onMarkComplete:R,onNavigate:h,courseTitle:_}){const L=(Y,z)=>{switch(Y.type){case"text":return d.jsx("div",{className:"lesson-text",dangerouslySetInnerHTML:{__html:Q(Y.content)}},z);case"heading":const T=`h${Y.level}`;return d.jsx(T,{className:"lesson-heading",children:Y.content},z);case"list":return d.jsx("ul",{className:"lesson-list",children:Y.items.map((W,D)=>d.jsx("li",{dangerouslySetInnerHTML:{__html:Q(W)}},D))},z);case"code":return d.jsx(ig,{code:Y.code,language:Y.language,filename:Y.filename},z);case"tip":return d.jsxs("div",{className:"tip-box",children:[d.jsxs("div",{className:"tip-title",children:[d.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("path",{d:"M12 16v-4M12 8h.01"})]}),"Pro Tip"]}),d.jsx("p",{dangerouslySetInnerHTML:{__html:Q(Y.content)}})]},z);case"warning":return d.jsxs("div",{className:"warning-box",children:[d.jsxs("div",{className:"warning-title",children:[d.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}),d.jsx("path",{d:"M12 9v4M12 17h.01"})]}),"Important"]}),d.jsx("p",{dangerouslySetInnerHTML:{__html:Q(Y.content)}})]},z);case"checkpoint":return d.jsxs("div",{className:"checkpoint",children:[d.jsxs("div",{className:"checkpoint-title",children:[d.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),d.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),"Checkpoint"]}),d.jsx("p",{dangerouslySetInnerHTML:{__html:Q(Y.content)}})]},z);case"quiz":return d.jsx(ug,{quiz:Y},z);default:return null}},Q=Y=>Y?Y.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\n/g,"<br/>"):"";return d.jsxs("div",{className:"lesson-container animate-in",children:[d.jsxs("nav",{className:"breadcrumb",children:[d.jsx("a",{href:"#",children:"Home"}),d.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("path",{d:"m9 18 6-6-6-6"})}),d.jsx("a",{href:"#",children:"Courses"}),d.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("path",{d:"m9 18 6-6-6-6"})}),d.jsx("span",{children:_})]}),d.jsxs("header",{className:"lesson-header",children:[d.jsx("h1",{className:"lesson-title",children:A.title}),d.jsx("p",{className:"lesson-description",children:A.content.description})]}),d.jsx("article",{className:"lesson-content",children:A.content.sections.map((Y,z)=>L(Y,z))}),d.jsxs("footer",{className:"lesson-nav",children:[d.jsxs("button",{className:"nav-btn secondary",onClick:()=>h("prev"),children:[d.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("path",{d:"m15 18-6-6 6-6"})}),"Previous"]}),d.jsx("div",{className:"nav-center",children:K?d.jsxs("span",{className:"completed-badge",children:[d.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("polyline",{points:"20 6 9 17 4 12"})}),"Completed"]}):d.jsxs("button",{className:"nav-btn gradient-btn mark-complete-btn",onClick:R,children:[d.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("polyline",{points:"20 6 9 17 4 12"})}),"Mark Complete"]})}),d.jsxs("button",{className:"nav-btn gradient-btn",onClick:()=>h("next"),children:["Next",d.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("path",{d:"m9 18 6-6-6-6"})})]})]})]})}function og(){const[A,K]=ft.useState(null),[R,h]=ft.useState(()=>{const J=localStorage.getItem("webdevCourseProgress");return J?JSON.parse(J):[]}),[_,L]=ft.useState([1]),[Q,Y]=ft.useState(!1);ft.useEffect(()=>{!A&&Tn.chapters.length>0&&K(Tn.chapters[0].lessons[0])},[]),ft.useEffect(()=>{localStorage.setItem("webdevCourseProgress",JSON.stringify(R))},[R]);const z=J=>{L(X=>X.includes(J)?X.filter(F=>F!==J):[...X,J])},T=J=>{R.includes(J)||h(X=>[...X,J])},W=J=>{const X=Tn.chapters.flatMap(pe=>pe.lessons),F=X.findIndex(pe=>pe.id===A?.id);if(J==="next"&&F<X.length-1){const pe=X[F+1];K(pe);const le=Tn.chapters.find(Se=>Se.lessons.some(ye=>ye.id===pe.id));le&&!_.includes(le.id)&&L(Se=>[...Se,le.id])}else if(J==="prev"&&F>0){const pe=X[F-1];K(pe);const le=Tn.chapters.find(Se=>Se.lessons.some(ye=>ye.id===pe.id));le&&!_.includes(le.id)&&L(Se=>[...Se,le.id])}},D=()=>{const J=Tn.chapters.reduce((X,F)=>X+F.lessons.length,0);return Math.round(R.length/J*100)},B=J=>{K(J),Y(!1)};return d.jsxs("div",{className:"app",children:[d.jsx("button",{className:"mobile-menu-btn",onClick:()=>Y(!Q),"aria-label":"Toggle menu",children:Q?d.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),d.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}):d.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),d.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),d.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),Q&&d.jsx("div",{className:"sidebar-overlay",onClick:()=>Y(!1)}),d.jsx(ag,{course:Tn,currentLesson:A,completedLessons:R,expandedChapters:_,onLessonSelect:B,onChapterToggle:z,progress:D(),isOpen:Q}),d.jsx("main",{className:"main-content",children:A&&d.jsx(cg,{lesson:A,isCompleted:R.includes(A.id),onMarkComplete:()=>T(A.id),onNavigate:W,courseTitle:Tn.title})})]})}lg.createRoot(document.getElementById("root")).render(d.jsx(ft.StrictMode,{children:d.jsx(og,{})}));
