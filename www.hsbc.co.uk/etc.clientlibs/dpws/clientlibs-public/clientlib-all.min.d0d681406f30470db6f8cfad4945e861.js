/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

/*! jQuery UI - v1.12.1 - 2018-11-27
 * http://jqueryui.com
 * Includes: widget.js, focusable.js, keycode.js, unique-id.js, widgets/mouse.js, widgets/slider.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (t) {
  typeof define === 'function' && define.amd ? define(['jquery'], t) : t(jQuery);
})((t) => {
  function e(t) {
    for (var e = t.css('visibility'); e === 'inherit';) (t = t.parent()), (e = t.css('visibility'));
    return e !== 'hidden';
  }
  (t.ui = t.ui || {}), (t.ui.version = '1.12.1');
  let i = 0;
  const s = Array.prototype.slice;
  (t.cleanData = (function (e) {
    return function (i) {
      let s; let n; let
        o;
      for (o = 0; (n = i[o]) != null; o++) {
        try {
          (s = t._data(n, 'events')),
          s && s.remove && t(n).triggerHandler('remove');
        } catch (a) {}
      }
      e(i);
    };
  })(t.cleanData)),
  (t.widget = function (e, i, s) {
    let n;
    let o;
    let a;
    const r = {};
    const l = e.split('.')[0];
    e = e.split('.')[1];
    const h = `${l}-${e}`;
    return (
      s || ((s = i), (i = t.Widget)),
      t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))),
      (t.expr[':'][h.toLowerCase()] = function (e) {
        return !!t.data(e, h);
      }),
      (t[l] = t[l] || {}),
      (n = t[l][e]),
      (o = t[l][e] =
          function (t, e) {
            return this._createWidget
              ? (arguments.length && this._createWidget(t, e), void 0)
              : new o(t, e);
          }),
      t.extend(o, n, {
        version: s.version,
        _proto: t.extend({}, s),
        _childConstructors: [],
      }),
      (a = new i()),
      (a.options = t.widget.extend({}, a.options)),
      t.each(s, (e, s) => t.isFunction(s)
        ? ((r[e] = (function () {
          function t() {
            return i.prototype[e].apply(this, arguments);
          }
          function n(t) {
            return i.prototype[e].apply(this, t);
          }
          return function () {
            let e;
            const i = this._super;
            const o = this._superApply;
            return (
              (this._super = t),
              (this._superApply = n),
              (e = s.apply(this, arguments)),
              (this._super = i),
              (this._superApply = o),
              e
            );
          };
        })()),
        void 0)
        : ((r[e] = s), void 0)),
      (o.prototype = t.widget.extend(
        a,
        { widgetEventPrefix: n ? a.widgetEventPrefix || e : e },
        r,
        { constructor: o, namespace: l, widgetName: e, widgetFullName: h },
      )),
      n
        ? (t.each(n._childConstructors, (e, i) => {
          const s = i.prototype;
          t.widget(`${s.namespace}.${s.widgetName}`, o, i._proto);
        }),
        delete n._childConstructors)
        : i._childConstructors.push(o),
      t.widget.bridge(e, o),
      o
    );
  }),
  (t.widget.extend = function (e) {
    for (var i, n, o = s.call(arguments, 1), a = 0, r = o.length; r > a; a++) {
      for (i in o[a]) {
        (n = o[a][i]),
        o[a].hasOwnProperty(i)
              && void 0 !== n
              && (e[i] = t.isPlainObject(n)
                ? t.isPlainObject(e[i])
                  ? t.widget.extend({}, e[i], n)
                  : t.widget.extend({}, n)
                : n);
      }
    }
    return e;
  }),
  (t.widget.bridge = function (e, i) {
    const n = i.prototype.widgetFullName || e;
    t.fn[e] = function (o) {
      const a = typeof o === 'string';
      const r = s.call(arguments, 1);
      let l = this;
      return (
        a
          ? this.length || o !== 'instance'
            ? this.each(function () {
              let i;
              const s = t.data(this, n);
              return o === 'instance'
                ? ((l = s), !1)
                : s
                  ? t.isFunction(s[o]) && o.charAt(0) !== '_'
                    ? ((i = s[o].apply(s, r)),
                    i !== s && void 0 !== i
                      ? ((l = i && i.jquery ? l.pushStack(i.get()) : i), !1)
                      : void 0)
                    : t.error(
                      `no such method '${
                        o
                      }' for ${
                        e
                      } widget instance`,
                    )
                  : t.error(
                    `cannot call methods on ${
                      e
                    } prior to initialization; `
                          + `attempted to call method '${
                            o
                          }'`,
                  );
            })
            : (l = void 0)
          : (r.length && (o = t.widget.extend.apply(null, [o].concat(r))),
          this.each(function () {
            const e = t.data(this, n);
            e
              ? (e.option(o || {}), e._init && e._init())
              : t.data(this, n, new i(o, this));
          })),
        l
      );
    };
  }),
  (t.Widget = function () {}),
  (t.Widget._childConstructors = []),
  (t.Widget.prototype = {
    widgetName: 'widget',
    widgetEventPrefix: '',
    defaultElement: '<div>',
    options: { classes: {}, disabled: !1, create: null },
    _createWidget (e, s) {
      (s = t(s || this.defaultElement || this)[0]),
      (this.element = t(s)),
      (this.uuid = i++),
      (this.eventNamespace = `.${this.widgetName}${this.uuid}`),
      (this.bindings = t()),
      (this.hoverable = t()),
      (this.focusable = t()),
      (this.classesElementLookup = {}),
      s !== this
            && (t.data(s, this.widgetFullName, this),
            this._on(!0, this.element, {
              remove (t) {
                t.target === s && this.destroy();
              },
            }),
            (this.document = t(s.style ? s.ownerDocument : s.document || s)),
            (this.window = t(
              this.document[0].defaultView || this.document[0].parentWindow,
            ))),
      (this.options = t.widget.extend(
        {},
        this.options,
        this._getCreateOptions(),
        e,
      )),
      this._create(),
      this.options.disabled
            && this._setOptionDisabled(this.options.disabled),
      this._trigger('create', null, this._getCreateEventData()),
      this._init();
    },
    _getCreateOptions () {
      return {};
    },
    _getCreateEventData: t.noop,
    _create: t.noop,
    _init: t.noop,
    destroy () {
      const e = this;
      this._destroy(),
      t.each(this.classesElementLookup, (t, i) => {
        e._removeClass(i, t);
      }),
      this.element.off(this.eventNamespace).removeData(this.widgetFullName),
      this.widget().off(this.eventNamespace).removeAttr('aria-disabled'),
      this.bindings.off(this.eventNamespace);
    },
    _destroy: t.noop,
    widget () {
      return this.element;
    },
    option (e, i) {
      let s;
      let n;
      let o;
      let a = e;
      if (arguments.length === 0) return t.widget.extend({}, this.options);
      if (typeof e === 'string') {
        if (((a = {}), (s = e.split('.')), (e = s.shift()), s.length)) {
          for (
            n = a[e] = t.widget.extend({}, this.options[e]), o = 0;
            s.length - 1 > o;
            o++
          ) (n[s[o]] = n[s[o]] || {}), (n = n[s[o]]);
          if (((e = s.pop()), arguments.length === 1)) return void 0 === n[e] ? null : n[e];
          n[e] = i;
        } else {
          if (arguments.length === 1) return void 0 === this.options[e] ? null : this.options[e];
          a[e] = i;
        }
      }
      return this._setOptions(a), this;
    },
    _setOptions (t) {
      let e;
      for (e in t) this._setOption(e, t[e]);
      return this;
    },
    _setOption (t, e) {
      return (
        t === 'classes' && this._setOptionClasses(e),
        (this.options[t] = e),
        t === 'disabled' && this._setOptionDisabled(e),
        this
      );
    },
    _setOptionClasses (e) {
      let i; let s; let
        n;
      for (i in e) {
        (n = this.classesElementLookup[i]),
        e[i] !== this.options.classes[i]
              && n
              && n.length
              && ((s = t(n.get())),
              this._removeClass(n, i),
              s.addClass(
                this._classes({ element: s, keys: i, classes: e, add: !0 }),
              ));
      }
    },
    _setOptionDisabled (t) {
      this._toggleClass(
        this.widget(),
        `${this.widgetFullName}-disabled`,
        null,
        !!t,
      ),
      t
            && (this._removeClass(this.hoverable, null, 'ui-state-hover'),
            this._removeClass(this.focusable, null, 'ui-state-focus'));
    },
    enable () {
      return this._setOptions({ disabled: !1 });
    },
    disable () {
      return this._setOptions({ disabled: !0 });
    },
    _classes (e) {
      function i(i, o) {
        let a; let
          r;
        for (r = 0; i.length > r; r++) {
          (a = n.classesElementLookup[i[r]] || t()),
          (a = e.add
            ? t(t.unique(a.get().concat(e.element.get())))
            : t(a.not(e.element).get())),
          (n.classesElementLookup[i[r]] = a),
          s.push(i[r]),
          o && e.classes[i[r]] && s.push(e.classes[i[r]]);
        }
      }
      var s = [];
      var n = this;
      return (
        (e = t.extend(
          { element: this.element, classes: this.options.classes || {} },
          e,
        )),
        this._on(e.element, { remove: '_untrackClassesElement' }),
        e.keys && i(e.keys.match(/\S+/g) || [], !0),
        e.extra && i(e.extra.match(/\S+/g) || []),
        s.join(' ')
      );
    },
    _untrackClassesElement (e) {
      const i = this;
      t.each(i.classesElementLookup, (s, n) => {
        t.inArray(e.target, n) !== -1
            && (i.classesElementLookup[s] = t(n.not(e.target).get()));
      });
    },
    _removeClass (t, e, i) {
      return this._toggleClass(t, e, i, !1);
    },
    _addClass (t, e, i) {
      return this._toggleClass(t, e, i, !0);
    },
    _toggleClass (t, e, i, s) {
      s = typeof s === 'boolean' ? s : i;
      const n = typeof t === 'string' || t === null;
      const o = {
        extra: n ? e : i,
        keys: n ? t : e,
        element: n ? this.element : t,
        add: s,
      };
      return o.element.toggleClass(this._classes(o), s), this;
    },
    _on (e, i, s) {
      let n;
      const o = this;
      typeof e !== 'boolean' && ((s = i), (i = e), (e = !1)),
      s
        ? ((i = n = t(i)), (this.bindings = this.bindings.add(i)))
        : ((s = i), (i = this.element), (n = this.widget())),
      t.each(s, (s, a) => {
        function r() {
          return e
                || (o.options.disabled !== !0
                  && !t(this).hasClass('ui-state-disabled'))
            ? (typeof a === 'string' ? o[a] : a).apply(o, arguments)
            : void 0;
        }
        typeof a !== 'string'
              && (r.guid = a.guid = a.guid || r.guid || t.guid++);
        const l = s.match(/^([\w:-]*)\s*(.*)$/);
        const h = l[1] + o.eventNamespace;
        const c = l[2];
        c ? n.on(h, c, r) : i.on(h, r);
      });
    },
    _off (e, i) {
      (i =
          (i || '').split(' ').join(`${this.eventNamespace} `)
          + this.eventNamespace),
      e.off(i).off(i),
      (this.bindings = t(this.bindings.not(e).get())),
      (this.focusable = t(this.focusable.not(e).get())),
      (this.hoverable = t(this.hoverable.not(e).get()));
    },
    _delay (t, e) {
      function i() {
        return (typeof t === 'string' ? s[t] : t).apply(s, arguments);
      }
      var s = this;
      return setTimeout(i, e || 0);
    },
    _hoverable (e) {
      (this.hoverable = this.hoverable.add(e)),
      this._on(e, {
        mouseenter (e) {
          this._addClass(t(e.currentTarget), null, 'ui-state-hover');
        },
        mouseleave (e) {
          this._removeClass(t(e.currentTarget), null, 'ui-state-hover');
        },
      });
    },
    _focusable (e) {
      (this.focusable = this.focusable.add(e)),
      this._on(e, {
        focusin (e) {
          this._addClass(t(e.currentTarget), null, 'ui-state-focus');
        },
        focusout (e) {
          this._removeClass(t(e.currentTarget), null, 'ui-state-focus');
        },
      });
    },
    _trigger (e, i, s) {
      let n;
      let o;
      const a = this.options[e];
      if (
        ((s = s || {}),
        (i = t.Event(i)),
        (i.type = (
          e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e
        ).toLowerCase()),
        (i.target = this.element[0]),
        (o = i.originalEvent))
      ) for (n in o) n in i || (i[n] = o[n]);
      return (
        this.element.trigger(i, s),
        !(
          (t.isFunction(a)
              && a.apply(this.element[0], [i].concat(s)) === !1)
            || i.isDefaultPrevented()
        )
      );
    },
  }),
  t.each({ show: 'fadeIn', hide: 'fadeOut' }, (e, i) => {
    t.Widget.prototype[`_${e}`] = function (s, n, o) {
      typeof n === 'string' && (n = { effect: n });
      let a;
      const r = n ? (n === !0 || typeof n === 'number' ? i : n.effect || i) : e;
      (n = n || {}),
      typeof n === 'number' && (n = { duration: n }),
      (a = !t.isEmptyObject(n)),
      (n.complete = o),
      n.delay && s.delay(n.delay),
      a && t.effects && t.effects.effect[r]
        ? s[e](n)
        : r !== e && s[r]
          ? s[r](n.duration, n.easing, o)
          : s.queue(function (i) {
            t(this)[e](), o && o.call(s[0]), i();
          });
    };
  }),
  t.widget,
  (t.ui.focusable = function (i, s) {
    let n;
    let o;
    let a;
    let r;
    let l;
    const h = i.nodeName.toLowerCase();
    return h === 'area'
      ? ((n = i.parentNode),
      (o = n.name),
      i.href && o && n.nodeName.toLowerCase() === 'map'
        ? ((a = t(`img[usemap='#${o}']`)),
        a.length > 0 && a.is(':visible'))
        : !1)
      : (/^(input|select|textarea|button|object)$/.test(h)
        ? ((r = !i.disabled),
        r && ((l = t(i).closest('fieldset')[0]), l && (r = !l.disabled)))
        : (r = h === 'a' ? i.href || s : s),
      r && t(i).is(':visible') && e(t(i)));
  }),
  t.extend(t.expr[':'], {
    focusable (e) {
      return t.ui.focusable(e, t.attr(e, 'tabindex') != null);
    },
  }),
  t.ui.focusable,
  (t.ui.keyCode = {
    BACKSPACE: 8,
    COMMA: 188,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    LEFT: 37,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    PERIOD: 190,
    RIGHT: 39,
    SPACE: 32,
    TAB: 9,
    UP: 38,
  }),
  t.fn.extend({
    uniqueId: (function () {
      let t = 0;
      return function () {
        return this.each(function () {
          this.id || (this.id = `ui-id-${++t}`);
        });
      };
    })(),
    removeUniqueId () {
      return this.each(function () {
        /^ui-id-\d+$/.test(this.id) && t(this).removeAttr('id');
      });
    },
  }),
  (t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()));
  let n = !1;
  t(document).on('mouseup', () => {
    n = !1;
  }),
  t.widget('ui.mouse', {
    version: '1.12.1',
    options: {
      cancel: 'input, textarea, button, select, option',
      distance: 1,
      delay: 0,
    },
    _mouseInit () {
      const e = this;
      this.element
        .on(`mousedown.${this.widgetName}`, (t) => e._mouseDown(t))
        .on(`click.${this.widgetName}`, (i) => !0 === t.data(i.target, `${e.widgetName}.preventClickEvent`)
          ? (t.removeData(i.target, `${e.widgetName}.preventClickEvent`),
          i.stopImmediatePropagation(),
          !1)
          : void 0),
      (this.started = !1);
    },
    _mouseDestroy () {
      this.element.off(`.${this.widgetName}`),
      this._mouseMoveDelegate
            && this.document
              .off(`mousemove.${this.widgetName}`, this._mouseMoveDelegate)
              .off(`mouseup.${this.widgetName}`, this._mouseUpDelegate);
    },
    _mouseDown (e) {
      if (!n) {
        (this._mouseMoved = !1),
        this._mouseStarted && this._mouseUp(e),
        (this._mouseDownEvent = e);
        const i = this;
        const s = e.which === 1;
        const o =
              typeof this.options.cancel === 'string' && e.target.nodeName
                ? t(e.target).closest(this.options.cancel).length
                : !1;
        return s && !o && this._mouseCapture(e)
          ? ((this.mouseDelayMet = !this.options.delay),
          this.mouseDelayMet
                || (this._mouseDelayTimer = setTimeout(() => {
                  i.mouseDelayMet = !0;
                }, this.options.delay)),
          this._mouseDistanceMet(e)
              && this._mouseDelayMet(e)
              && ((this._mouseStarted = this._mouseStart(e) !== !1),
              !this._mouseStarted)
            ? (e.preventDefault(), !0)
            : (!0
                    === t.data(e.target, `${this.widgetName}.preventClickEvent`)
                    && t.removeData(
                      e.target,
                      `${this.widgetName}.preventClickEvent`,
                    ),
            (this._mouseMoveDelegate = function (t) {
              return i._mouseMove(t);
            }),
            (this._mouseUpDelegate = function (t) {
              return i._mouseUp(t);
            }),
            this.document
              .on(`mousemove.${this.widgetName}`, this._mouseMoveDelegate)
              .on(`mouseup.${this.widgetName}`, this._mouseUpDelegate),
            e.preventDefault(),
            (n = !0),
            !0))
          : !0;
      }
    },
    _mouseMove (e) {
      if (this._mouseMoved) {
        if (
          t.ui.ie
            && (!document.documentMode || document.documentMode < 9)
            && !e.button
        ) return this._mouseUp(e);
        if (!e.which) {
          if (
            e.originalEvent.altKey
              || e.originalEvent.ctrlKey
              || e.originalEvent.metaKey
              || e.originalEvent.shiftKey
          ) this.ignoreMissingWhich = !0;
          else if (!this.ignoreMissingWhich) return this._mouseUp(e);
        }
      }
      return (
        (e.which || e.button) && (this._mouseMoved = !0),
        this._mouseStarted
          ? (this._mouseDrag(e), e.preventDefault())
          : (this._mouseDistanceMet(e)
                && this._mouseDelayMet(e)
                && ((this._mouseStarted =
                  this._mouseStart(this._mouseDownEvent, e) !== !1),
                this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
          !this._mouseStarted)
      );
    },
    _mouseUp (e) {
      this.document
        .off(`mousemove.${this.widgetName}`, this._mouseMoveDelegate)
        .off(`mouseup.${this.widgetName}`, this._mouseUpDelegate),
      this._mouseStarted
            && ((this._mouseStarted = !1),
            e.target === this._mouseDownEvent.target
              && t.data(e.target, `${this.widgetName}.preventClickEvent`, !0),
            this._mouseStop(e)),
      this._mouseDelayTimer
            && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer),
      (this.ignoreMissingWhich = !1),
      (n = !1),
      e.preventDefault();
    },
    _mouseDistanceMet (t) {
      return (
        Math.max(
          Math.abs(this._mouseDownEvent.pageX - t.pageX),
          Math.abs(this._mouseDownEvent.pageY - t.pageY),
        ) >= this.options.distance
      );
    },
    _mouseDelayMet () {
      return this.mouseDelayMet;
    },
    _mouseStart () {},
    _mouseDrag () {},
    _mouseStop () {},
    _mouseCapture () {
      return !0;
    },
  }),
  t.widget('ui.slider', t.ui.mouse, {
    version: '1.12.1',
    widgetEventPrefix: 'slide',
    options: {
      animate: !1,
      classes: {
        'ui-slider': 'ui-corner-all',
        'ui-slider-handle': 'ui-corner-all',
        'ui-slider-range': 'ui-corner-all ui-widget-header',
      },
      distance: 0,
      max: 100,
      min: 0,
      orientation: 'horizontal',
      range: !1,
      step: 1,
      value: 0,
      values: null,
      change: null,
      slide: null,
      start: null,
      stop: null,
    },
    numPages: 5,
    _create () {
      (this._keySliding = !1),
      (this._mouseSliding = !1),
      (this._animateOff = !0),
      (this._handleIndex = null),
      this._detectOrientation(),
      this._mouseInit(),
      this._calculateNewMax(),
      this._addClass(
        `ui-slider ui-slider-${this.orientation}`,
        'ui-widget ui-widget-content',
      ),
      this._refresh(),
      (this._animateOff = !1);
    },
    _refresh () {
      this._createRange(),
      this._createHandles(),
      this._setupEvents(),
      this._refreshValue();
    },
    _createHandles () {
      let e;
      let i;
      const s = this.options;
      let n = this.element.find('.ui-slider-handle');
      const o = "<span tabindex='0'></span>";
      const a = [];
      for (
        i = (s.values && s.values.length) || 1,
        n.length > i && (n.slice(i).remove(), (n = n.slice(0, i))),
        e = n.length;
        i > e;
        e++
      ) a.push(o);
      (this.handles = n.add(t(a.join('')).appendTo(this.element))),
      this._addClass(this.handles, 'ui-slider-handle', 'ui-state-default'),
      (this.handle = this.handles.eq(0)),
      this.handles.each(function (e) {
        t(this).data('ui-slider-handle-index', e).attr('tabIndex', 0);
      });
    },
    _createRange () {
      const e = this.options;
      e.range
        ? (e.range === !0
              && (e.values
                ? e.values.length && e.values.length !== 2
                  ? (e.values = [e.values[0], e.values[0]])
                  : t.isArray(e.values) && (e.values = e.values.slice(0))
                : (e.values = [this._valueMin(), this._valueMin()])),
        this.range && this.range.length
          ? (this._removeClass(
            this.range,
            'ui-slider-range-min ui-slider-range-max',
          ),
          this.range.css({ left: '', bottom: '' }))
          : ((this.range = t('<div>').appendTo(this.element)),
          this._addClass(this.range, 'ui-slider-range')),
        (e.range === 'min' || e.range === 'max')
              && this._addClass(this.range, `ui-slider-range-${e.range}`))
        : (this.range && this.range.remove(), (this.range = null));
    },
    _setupEvents () {
      this._off(this.handles),
      this._on(this.handles, this._handleEvents),
      this._hoverable(this.handles),
      this._focusable(this.handles);
    },
    _destroy () {
      this.handles.remove(),
      this.range && this.range.remove(),
      this._mouseDestroy();
    },
    _mouseCapture (e) {
      let i;
      let s;
      let n;
      let o;
      let a;
      let r;
      let l;
      let h;
      const c = this;
      const u = this.options;
      return u.disabled
        ? !1
        : ((this.elementSize = {
          width: this.element.outerWidth(),
          height: this.element.outerHeight(),
        }),
        (this.elementOffset = this.element.offset()),
        (i = { x: e.pageX, y: e.pageY }),
        (s = this._normValueFromMouse(i)),
        (n = this._valueMax() - this._valueMin() + 1),
        this.handles.each(function (e) {
          const i = Math.abs(s - c.values(e));
          (n > i
                || (n === i
                  && (e === c._lastChangedValue || c.values(e) === u.min)))
                && ((n = i), (o = t(this)), (a = e));
        }),
        (r = this._start(e, a)),
        r === !1
          ? !1
          : ((this._mouseSliding = !0),
          (this._handleIndex = a),
          this._addClass(o, null, 'ui-state-active'),
          o.trigger('focus'),
          (l = o.offset()),
          (h = !t(e.target).parents().addBack().is('.ui-slider-handle')),
          (this._clickOffset = h
            ? { left: 0, top: 0 }
            : {
              left: e.pageX - l.left - o.width() / 2,
              top:
                        e.pageY
                        - l.top
                        - o.height() / 2
                        - (parseInt(o.css('borderTopWidth'), 10) || 0)
                        - (parseInt(o.css('borderBottomWidth'), 10) || 0)
                        + (parseInt(o.css('marginTop'), 10) || 0),
            }),
          this.handles.hasClass('ui-state-hover') || this._slide(e, a, s),
          (this._animateOff = !0),
          !0));
    },
    _mouseStart () {
      return !0;
    },
    _mouseDrag (t) {
      const e = { x: t.pageX, y: t.pageY };
      const i = this._normValueFromMouse(e);
      return this._slide(t, this._handleIndex, i), !1;
    },
    _mouseStop (t) {
      return (
        this._removeClass(this.handles, null, 'ui-state-active'),
        (this._mouseSliding = !1),
        this._stop(t, this._handleIndex),
        this._change(t, this._handleIndex),
        (this._handleIndex = null),
        (this._clickOffset = null),
        (this._animateOff = !1),
        !1
      );
    },
    _detectOrientation () {
      this.orientation =
          this.options.orientation === 'vertical' ? 'vertical' : 'horizontal';
    },
    _normValueFromMouse (t) {
      let e; let i; let s; let n; let
        o;
      return (
        this.orientation === 'horizontal'
          ? ((e = this.elementSize.width),
          (i =
                t.x
                - this.elementOffset.left
                - (this._clickOffset ? this._clickOffset.left : 0)))
          : ((e = this.elementSize.height),
          (i =
                t.y
                - this.elementOffset.top
                - (this._clickOffset ? this._clickOffset.top : 0))),
        (s = i / e),
        s > 1 && (s = 1),
        s < 0 && (s = 0),
        this.orientation === 'vertical' && (s = 1 - s),
        (n = this._valueMax() - this._valueMin()),
        (o = this._valueMin() + s * n),
        this._trimAlignValue(o)
      );
    },
    _uiHash (t, e, i) {
      const s = {
        handle: this.handles[t],
        handleIndex: t,
        value: void 0 !== e ? e : this.value(),
      };
      return (
        this._hasMultipleValues()
            && ((s.value = void 0 !== e ? e : this.values(t)),
            (s.values = i || this.values())),
        s
      );
    },
    _hasMultipleValues () {
      return this.options.values && this.options.values.length;
    },
    _start (t, e) {
      return this._trigger('start', t, this._uiHash(e));
    },
    _slide (t, e, i) {
      let s;
      let n;
      let o = this.value();
      const a = this.values();
      this._hasMultipleValues()
          && ((n = this.values(e ? 0 : 1)),
          (o = this.values(e)),
          this.options.values.length === 2
            && this.options.range === !0
            && (i = e === 0 ? Math.min(n, i) : Math.max(n, i)),
          (a[e] = i)),
      i !== o
            && ((s = this._trigger('slide', t, this._uiHash(e, i, a))),
            s !== !1
              && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)));
    },
    _stop (t, e) {
      this._trigger('stop', t, this._uiHash(e));
    },
    _change (t, e) {
      this._keySliding
          || this._mouseSliding
          || ((this._lastChangedValue = e),
          this._trigger('change', t, this._uiHash(e)));
    },
    value (t) {
      return arguments.length
        ? ((this.options.value = this._trimAlignValue(t)),
        this._refreshValue(),
        this._change(null, 0),
        void 0)
        : this._value();
    },
    values (e, i) {
      let s; let n; let
        o;
      if (arguments.length > 1) {
        return (
          (this.options.values[e] = this._trimAlignValue(i)),
          this._refreshValue(),
          this._change(null, e),
          void 0
        );
      }
      if (!arguments.length) return this._values();
      if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
      for (
        s = this.options.values, n = arguments[0], o = 0;
        s.length > o;
        o += 1
      ) (s[o] = this._trimAlignValue(n[o])), this._change(null, o);
      this._refreshValue();
    },
    _setOption (e, i) {
      let s;
      let n = 0;
      switch (
        (e === 'range'
            && this.options.range === !0
            && (i === 'min'
              ? ((this.options.value = this._values(0)),
              (this.options.values = null))
              : i === 'max'
                && ((this.options.value = this._values(
                  this.options.values.length - 1,
                )),
                (this.options.values = null))),
        t.isArray(this.options.values) && (n = this.options.values.length),
        this._super(e, i),
        e)
      ) {
        case 'orientation':
          this._detectOrientation(),
          this._removeClass(
            'ui-slider-horizontal ui-slider-vertical',
          )._addClass(`ui-slider-${this.orientation}`),
          this._refreshValue(),
          this.options.range && this._refreshRange(i),
          this.handles.css(i === 'horizontal' ? 'bottom' : 'left', '');
          break;
        case 'value':
          (this._animateOff = !0),
          this._refreshValue(),
          this._change(null, 0),
          (this._animateOff = !1);
          break;
        case 'values':
          for (
            this._animateOff = !0, this._refreshValue(), s = n - 1;
            s >= 0;
            s--
          ) this._change(null, s);
          this._animateOff = !1;
          break;
        case 'step':
        case 'min':
        case 'max':
          (this._animateOff = !0),
          this._calculateNewMax(),
          this._refreshValue(),
          (this._animateOff = !1);
          break;
        case 'range':
          (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
      }
    },
    _setOptionDisabled (t) {
      this._super(t), this._toggleClass(null, 'ui-state-disabled', !!t);
    },
    _value () {
      let t = this.options.value;
      return (t = this._trimAlignValue(t));
    },
    _values (t) {
      let e; let i; let
        s;
      if (arguments.length) return (e = this.options.values[t]), (e = this._trimAlignValue(e));
      if (this._hasMultipleValues()) {
        for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
        return i;
      }
      return [];
    },
    _trimAlignValue (t) {
      if (this._valueMin() >= t) return this._valueMin();
      if (t >= this._valueMax()) return this._valueMax();
      const e = this.options.step > 0 ? this.options.step : 1;
      const i = (t - this._valueMin()) % e;
      let s = t - i;
      return (
        2 * Math.abs(i) >= e && (s += i > 0 ? e : -e),
        parseFloat(s.toFixed(5))
      );
    },
    _calculateNewMax () {
      let t = this.options.max;
      const e = this._valueMin();
      const i = this.options.step;
      const s = Math.round((t - e) / i) * i;
      (t = s + e),
      t > this.options.max && (t -= i),
      (this.max = parseFloat(t.toFixed(this._precision())));
    },
    _precision () {
      let t = this._precisionOf(this.options.step);
      return (
        this.options.min !== null
            && (t = Math.max(t, this._precisionOf(this.options.min))),
        t
      );
    },
    _precisionOf (t) {
      const e = `${t}`;
      const i = e.indexOf('.');
      return i === -1 ? 0 : e.length - i - 1;
    },
    _valueMin () {
      return this.options.min;
    },
    _valueMax () {
      return this.max;
    },
    _refreshRange (t) {
      t === 'vertical' && this.range.css({ width: '', left: '' }),
      t === 'horizontal' && this.range.css({ height: '', bottom: '' });
    },
    _refreshValue () {
      let e;
      let i;
      let s;
      let n;
      let o;
      const a = this.options.range;
      const r = this.options;
      const l = this;
      const h = this._animateOff ? !1 : r.animate;
      const c = {};
      this._hasMultipleValues()
        ? this.handles.each(function (s) {
          (i =
                100
                * ((l.values(s) - l._valueMin())
                  / (l._valueMax() - l._valueMin()))),
          (c[l.orientation === 'horizontal' ? 'left' : 'bottom'] =
                  `${i}%`),
          t(this).stop(1, 1)[h ? 'animate' : 'css'](c, r.animate),
          l.options.range === !0
                  && (l.orientation === 'horizontal'
                    ? (s === 0
                        && l.range
                          .stop(1, 1)
                          [h ? 'animate' : 'css']({ left: `${i}%` }, r.animate),
                    s === 1
                        && l.range[h ? 'animate' : 'css'](
                          { width: `${i - e}%` },
                          { queue: !1, duration: r.animate },
                        ))
                    : (s === 0
                        && l.range
                          .stop(1, 1)
                          [h ? 'animate' : 'css'](
                            { bottom: `${i}%` },
                            r.animate,
                          ),
                    s === 1
                        && l.range[h ? 'animate' : 'css'](
                          { height: `${i - e}%` },
                          { queue: !1, duration: r.animate },
                        ))),
          (e = i);
        })
        : ((s = this.value()),
        (n = this._valueMin()),
        (o = this._valueMax()),
        (i = o !== n ? 100 * ((s - n) / (o - n)) : 0),
        (c[this.orientation === 'horizontal' ? 'left' : 'bottom'] =
              `${i}%`),
        this.handle.stop(1, 1)[h ? 'animate' : 'css'](c, r.animate),
        a === 'min'
              && this.orientation === 'horizontal'
              && this.range
                .stop(1, 1)
                [h ? 'animate' : 'css']({ width: `${i}%` }, r.animate),
        a === 'max'
              && this.orientation === 'horizontal'
              && this.range
                .stop(1, 1)
                [h ? 'animate' : 'css']({ width: `${100 - i}%` }, r.animate),
        a === 'min'
              && this.orientation === 'vertical'
              && this.range
                .stop(1, 1)
                [h ? 'animate' : 'css']({ height: `${i}%` }, r.animate),
        a === 'max'
              && this.orientation === 'vertical'
              && this.range
                .stop(1, 1)
                [h ? 'animate' : 'css']({ height: `${100 - i}%` }, r.animate));
    },
    _handleEvents: {
      keydown (e) {
        let i;
        let s;
        let n;
        let o;
        const a = t(e.target).data('ui-slider-handle-index');
        switch (e.keyCode) {
          case t.ui.keyCode.HOME:
          case t.ui.keyCode.END:
          case t.ui.keyCode.PAGE_UP:
          case t.ui.keyCode.PAGE_DOWN:
          case t.ui.keyCode.UP:
          case t.ui.keyCode.RIGHT:
          case t.ui.keyCode.DOWN:
          case t.ui.keyCode.LEFT:
            if (
              (e.preventDefault(),
              !this._keySliding
                  && ((this._keySliding = !0),
                  this._addClass(t(e.target), null, 'ui-state-active'),
                  (i = this._start(e, a)),
                  i === !1))
            ) return;
        }
        switch (
          ((o = this.options.step),
          (s = n = this._hasMultipleValues() ? this.values(a) : this.value()),
          e.keyCode)
        ) {
          case t.ui.keyCode.HOME:
            n = this._valueMin();
            break;
          case t.ui.keyCode.END:
            n = this._valueMax();
            break;
          case t.ui.keyCode.PAGE_UP:
            n = this._trimAlignValue(
              s + (this._valueMax() - this._valueMin()) / this.numPages,
            );
            break;
          case t.ui.keyCode.PAGE_DOWN:
            n = this._trimAlignValue(
              s - (this._valueMax() - this._valueMin()) / this.numPages,
            );
            break;
          case t.ui.keyCode.UP:
          case t.ui.keyCode.RIGHT:
            if (s === this._valueMax()) return;
            n = this._trimAlignValue(s + o);
            break;
          case t.ui.keyCode.DOWN:
          case t.ui.keyCode.LEFT:
            if (s === this._valueMin()) return;
            n = this._trimAlignValue(s - o);
        }
        this._slide(e, a, n);
      },
      keyup (e) {
        const i = t(e.target).data('ui-slider-handle-index');
        this._keySliding
            && ((this._keySliding = !1),
            this._stop(e, i),
            this._change(e, i),
            this._removeClass(t(e.target), null, 'ui-state-active'));
      },
    },
  });
});

/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!(function (a) {
  function f(a, b) {
    if (!(a.originalEvent.touches.length > 1)) {
      a.preventDefault();
      const c = a.originalEvent.changedTouches[0];
      const d = document.createEvent('MouseEvents');
      d.initMouseEvent(
        b,
        !0,
        !0,
        window,
        1,
        c.screenX,
        c.screenY,
        c.clientX,
        c.clientY,
        !1,
        !1,
        !1,
        !1,
        0,
        null,
      ),
      a.target.dispatchEvent(d);
    }
  }
  if (((a.support.touch = 'ontouchend' in document), a.support.touch)) {
    let e;
    const b = a.ui.mouse.prototype;
    const c = b._mouseInit;
    const d = b._mouseDestroy;
    (b._touchStart = function (a) {
      const b = this;
      !e
        && b._mouseCapture(a.originalEvent.changedTouches[0])
        && ((e = !0),
        (b._touchMoved = !1),
        f(a, 'mouseover'),
        f(a, 'mousemove'),
        f(a, 'mousedown'));
    }),
    (b._touchMove = function (a) {
      e && ((this._touchMoved = !0), f(a, 'mousemove'));
    }),
    (b._touchEnd = function (a) {
      e
          && (f(a, 'mouseup'),
          f(a, 'mouseout'),
          this._touchMoved || f(a, 'click'),
          (e = !1));
    }),
    (b._mouseInit = function () {
      const b = this;
      b.element.bind({
        touchstart: a.proxy(b, '_touchStart'),
        touchmove: a.proxy(b, '_touchMove'),
        touchend: a.proxy(b, '_touchEnd'),
      }),
      c.call(b);
    }),
    (b._mouseDestroy = function () {
      const b = this;
      b.element.unbind({
        touchstart: a.proxy(b, '_touchStart'),
        touchmove: a.proxy(b, '_touchMove'),
        touchend: a.proxy(b, '_touchEnd'),
      }),
      d.call(b);
    });
  }
})(jQuery);

//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory())
    : typeof define === 'function' && define.amd
      ? define(factory)
      : (global.moment = factory());
})(this, () => {
  'use strict';

  let hookCallback;

  function hooks() {
    return hookCallback.apply(null, arguments);
  }

  // This is done to register the method called with moment()
  // without creating circular dependencies.
  function setHookCallback(callback) {
    hookCallback = callback;
  }

  function isArray(input) {
    return (
      input instanceof Array
      || Object.prototype.toString.call(input) === '[object Array]'
    );
  }

  function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return (
      input != null
      && Object.prototype.toString.call(input) === '[object Object]'
    );
  }

  function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }

  function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
      return Object.getOwnPropertyNames(obj).length === 0;
    }
    let k;
    for (k in obj) {
      if (hasOwnProp(obj, k)) {
        return false;
      }
    }
    return true;
  }

  function isUndefined(input) {
    return input === void 0;
  }

  function isNumber(input) {
    return (
      typeof input === 'number'
      || Object.prototype.toString.call(input) === '[object Number]'
    );
  }

  function isDate(input) {
    return (
      input instanceof Date
      || Object.prototype.toString.call(input) === '[object Date]'
    );
  }

  function map(arr, fn) {
    const res = [];
    let i;
    const arrLen = arr.length;
    for (i = 0; i < arrLen; ++i) {
      res.push(fn(arr[i], i));
    }
    return res;
  }

  function extend(a, b) {
    for (const i in b) {
      if (hasOwnProp(b, i)) {
        a[i] = b[i];
      }
    }

    if (hasOwnProp(b, 'toString')) {
      a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
      a.valueOf = b.valueOf;
    }

    return a;
  }

  function createUTC(input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
  }

  function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
      empty: false,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: false,
      invalidEra: null,
      invalidMonth: null,
      invalidFormat: false,
      userInvalidated: false,
      iso: false,
      parsedDateParts: [],
      era: null,
      meridiem: null,
      rfc2822: false,
      weekdayMismatch: false,
    };
  }

  function getParsingFlags(m) {
    if (m._pf == null) {
      m._pf = defaultParsingFlags();
    }
    return m._pf;
  }

  let some;
  if (Array.prototype.some) {
    some = Array.prototype.some;
  } else {
    some = function (fun) {
      const t = Object(this);
      const len = t.length >>> 0;
      let i;

      for (i = 0; i < len; i++) {
        if (i in t && fun.call(this, t[i], i, t)) {
          return true;
        }
      }

      return false;
    };
  }

  function isValid(m) {
    if (m._isValid == null) {
      const flags = getParsingFlags(m);
      const parsedParts = some.call(flags.parsedDateParts, (i) => i != null);
      let isNowValid =
          !isNaN(m._d.getTime())
          && flags.overflow < 0
          && !flags.empty
          && !flags.invalidEra
          && !flags.invalidMonth
          && !flags.invalidWeekday
          && !flags.weekdayMismatch
          && !flags.nullInput
          && !flags.invalidFormat
          && !flags.userInvalidated
          && (!flags.meridiem || (flags.meridiem && parsedParts));

      if (m._strict) {
        isNowValid =
          isNowValid
          && flags.charsLeftOver === 0
          && flags.unusedTokens.length === 0
          && flags.bigHour === undefined;
      }

      if (Object.isFrozen == null || !Object.isFrozen(m)) {
        m._isValid = isNowValid;
      } else {
        return isNowValid;
      }
    }
    return m._isValid;
  }

  function createInvalid(flags) {
    const m = createUTC(NaN);
    if (flags != null) {
      extend(getParsingFlags(m), flags);
    } else {
      getParsingFlags(m).userInvalidated = true;
    }

    return m;
  }

  // Plugins that add properties should also add the key here (null value),
  // so we can properly clone ourselves.
  const momentProperties = (hooks.momentProperties = []);
  let updateInProgress = false;

  function copyConfig(to, from) {
    let i;
    let prop;
    let val;
    const momentPropertiesLen = momentProperties.length;

    if (!isUndefined(from._isAMomentObject)) {
      to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
      to._i = from._i;
    }
    if (!isUndefined(from._f)) {
      to._f = from._f;
    }
    if (!isUndefined(from._l)) {
      to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
      to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
      to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
      to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
      to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
      to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
      to._locale = from._locale;
    }

    if (momentPropertiesLen > 0) {
      for (i = 0; i < momentPropertiesLen; i++) {
        prop = momentProperties[i];
        val = from[prop];
        if (!isUndefined(val)) {
          to[prop] = val;
        }
      }
    }

    return to;
  }

  // Moment prototype object
  function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
      this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
      updateInProgress = true;
      hooks.updateOffset(this);
      updateInProgress = false;
    }
  }

  function isMoment(obj) {
    return (
      obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
    );
  }

  function warn(msg) {
    if (
      hooks.suppressDeprecationWarnings === false
      && typeof console !== 'undefined'
      && console.warn
    ) {
      console.warn(`Deprecation warning: ${msg}`);
    }
  }

  function deprecate(msg, fn) {
    let firstTime = true;

    return extend(function () {
      if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(null, msg);
      }
      if (firstTime) {
        const args = [];
        let arg;
        let i;
        let key;
        const argLen = arguments.length;
        for (i = 0; i < argLen; i++) {
          arg = '';
          if (typeof arguments[i] === 'object') {
            arg += `\n[${i}] `;
            for (key in arguments[0]) {
              if (hasOwnProp(arguments[0], key)) {
                arg += `${key}: ${arguments[0][key]}, `;
              }
            }
            arg = arg.slice(0, -2); // Remove trailing comma and space
          } else {
            arg = arguments[i];
          }
          args.push(arg);
        }
        warn(
          `${msg
          }\nArguments: ${
            Array.prototype.slice.call(args).join('')
          }\n${
            new Error().stack}`,
        );
        firstTime = false;
      }
      return fn.apply(this, arguments);
    }, fn);
  }

  const deprecations = {};

  function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
      hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
      warn(msg);
      deprecations[name] = true;
    }
  }

  hooks.suppressDeprecationWarnings = false;
  hooks.deprecationHandler = null;

  function isFunction(input) {
    return (
      (typeof Function !== 'undefined' && input instanceof Function)
      || Object.prototype.toString.call(input) === '[object Function]'
    );
  }

  function set(config) {
    let prop; let
      i;
    for (i in config) {
      if (hasOwnProp(config, i)) {
        prop = config[i];
        if (isFunction(prop)) {
          this[i] = prop;
        } else {
          this[`_${i}`] = prop;
        }
      }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.
    this._dayOfMonthOrdinalParseLenient = new RegExp(
      `${this._dayOfMonthOrdinalParse.source || this._ordinalParse.source
      }|${
        /\d{1,2}/.source}`,
    );
  }

  function mergeConfigs(parentConfig, childConfig) {
    const res = extend({}, parentConfig);
    let prop;
    for (prop in childConfig) {
      if (hasOwnProp(childConfig, prop)) {
        if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
          res[prop] = {};
          extend(res[prop], parentConfig[prop]);
          extend(res[prop], childConfig[prop]);
        } else if (childConfig[prop] != null) {
          res[prop] = childConfig[prop];
        } else {
          delete res[prop];
        }
      }
    }
    for (prop in parentConfig) {
      if (
        hasOwnProp(parentConfig, prop)
        && !hasOwnProp(childConfig, prop)
        && isObject(parentConfig[prop])
      ) {
        // make sure changes to properties don't modify parent config
        res[prop] = extend({}, res[prop]);
      }
    }
    return res;
  }

  function Locale(config) {
    if (config != null) {
      this.set(config);
    }
  }

  let keys;

  if (Object.keys) {
    keys = Object.keys;
  } else {
    keys = function (obj) {
      let i;
      const res = [];
      for (i in obj) {
        if (hasOwnProp(obj, i)) {
          res.push(i);
        }
      }
      return res;
    };
  }

  const defaultCalendar = {
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    nextWeek: 'dddd [at] LT',
    lastDay: '[Yesterday at] LT',
    lastWeek: '[Last] dddd [at] LT',
    sameElse: 'L',
  };

  function calendar(key, mom, now) {
    const output = this._calendar[key] || this._calendar.sameElse;
    return isFunction(output) ? output.call(mom, now) : output;
  }

  function zeroFill(number, targetLength, forceSign) {
    const absNumber = `${Math.abs(number)}`;
    const zerosToFill = targetLength - absNumber.length;
    const sign = number >= 0;
    return (
      (sign ? (forceSign ? '+' : '') : '-')
      + (10 ** Math.max(0, zerosToFill)).toString().substr(1)
      + absNumber
    );
  }

  const formattingTokens =
      /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
  const localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
  const formatFunctions = {};
  const formatTokenFunctions = {};

  // token:    'M'
  // padded:   ['MM', 2]
  // ordinal:  'Mo'
  // callback: function () { this.month() + 1 }
  function addFormatToken(token, padded, ordinal, callback) {
    let func = callback;
    if (typeof callback === 'string') {
      func = function () {
        return this[callback]();
      };
    }
    if (token) {
      formatTokenFunctions[token] = func;
    }
    if (padded) {
      formatTokenFunctions[padded[0]] = function () {
        return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
      };
    }
    if (ordinal) {
      formatTokenFunctions[ordinal] = function () {
        return this.localeData().ordinal(func.apply(this, arguments), token);
      };
    }
  }

  function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
      return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
  }

  function makeFormatFunction(format) {
    const array = format.match(formattingTokens);
    let i;
    let length;

    for (i = 0, length = array.length; i < length; i++) {
      if (formatTokenFunctions[array[i]]) {
        array[i] = formatTokenFunctions[array[i]];
      } else {
        array[i] = removeFormattingTokens(array[i]);
      }
    }

    return function (mom) {
      let output = '';
      let i;
      for (i = 0; i < length; i++) {
        output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
      }
      return output;
    };
  }

  // format date using native date object
  function formatMoment(m, format) {
    if (!m.isValid()) {
      return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] =
      formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
  }

  function expandFormat(format, locale) {
    let i = 5;

    function replaceLongDateFormatTokens(input) {
      return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
      format = format.replace(
        localFormattingTokens,
        replaceLongDateFormatTokens,
      );
      localFormattingTokens.lastIndex = 0;
      i -= 1;
    }

    return format;
  }

  const defaultLongDateFormat = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A',
  };

  function longDateFormat(key) {
    const format = this._longDateFormat[key];
    const formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
      return format;
    }

    this._longDateFormat[key] = formatUpper
      .match(formattingTokens)
      .map((tok) => {
        if (tok === 'MMMM' || tok === 'MM' || tok === 'DD' || tok === 'dddd') {
          return tok.slice(1);
        }
        return tok;
      })
      .join('');

    return this._longDateFormat[key];
  }

  const defaultInvalidDate = 'Invalid date';

  function invalidDate() {
    return this._invalidDate;
  }

  const defaultOrdinal = '%d';
  const defaultDayOfMonthOrdinalParse = /\d{1,2}/;

  function ordinal(number) {
    return this._ordinal.replace('%d', number);
  }

  const defaultRelativeTime = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    ss: '%d seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    w: 'a week',
    ww: '%d weeks',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years',
  };

  function relativeTime(number, withoutSuffix, string, isFuture) {
    const output = this._relativeTime[string];
    return isFunction(output)
      ? output(number, withoutSuffix, string, isFuture)
      : output.replace(/%d/i, number);
  }

  function pastFuture(diff, output) {
    const format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
  }

  const aliases = {};

  function addUnitAlias(unit, shorthand) {
    const lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[`${lowerCase}s`] = aliases[shorthand] = unit;
  }

  function normalizeUnits(units) {
    return typeof units === 'string'
      ? aliases[units] || aliases[units.toLowerCase()]
      : undefined;
  }

  function normalizeObjectUnits(inputObject) {
    const normalizedInput = {};
    let normalizedProp;
    let prop;

    for (prop in inputObject) {
      if (hasOwnProp(inputObject, prop)) {
        normalizedProp = normalizeUnits(prop);
        if (normalizedProp) {
          normalizedInput[normalizedProp] = inputObject[prop];
        }
      }
    }

    return normalizedInput;
  }

  const priorities = {};

  function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
  }

  function getPrioritizedUnits(unitsObj) {
    const units = [];
    let u;
    for (u in unitsObj) {
      if (hasOwnProp(unitsObj, u)) {
        units.push({ unit: u, priority: priorities[u] });
      }
    }
    units.sort((a, b) => a.priority - b.priority);
    return units;
  }

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  function absFloor(number) {
    if (number < 0) {
      // -0 -> 0
      return Math.ceil(number) || 0;
    }
    return Math.floor(number);
  }

  function toInt(argumentForCoercion) {
    const coercedNumber = +argumentForCoercion;
    let value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
      value = absFloor(coercedNumber);
    }

    return value;
  }

  function makeGetSet(unit, keepTime) {
    return function (value) {
      if (value != null) {
        set$1(this, unit, value);
        hooks.updateOffset(this, keepTime);
        return this;
      }
      return get(this, unit);
    };
  }

  function get(mom, unit) {
    return mom.isValid()
      ? mom._d[`get${mom._isUTC ? 'UTC' : ''}${unit}`]()
      : NaN;
  }

  function set$1(mom, unit, value) {
    if (mom.isValid() && !isNaN(value)) {
      if (
        unit === 'FullYear'
        && isLeapYear(mom.year())
        && mom.month() === 1
        && mom.date() === 29
      ) {
        value = toInt(value);
        mom._d[`set${mom._isUTC ? 'UTC' : ''}${unit}`](
          value,
          mom.month(),
          daysInMonth(value, mom.month()),
        );
      } else {
        mom._d[`set${mom._isUTC ? 'UTC' : ''}${unit}`](value);
      }
    }
  }

  // MOMENTS

  function stringGet(units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
      return this[units]();
    }
    return this;
  }

  function stringSet(units, value) {
    if (typeof units === 'object') {
      units = normalizeObjectUnits(units);
      const prioritized = getPrioritizedUnits(units);
      let i;
      const prioritizedLen = prioritized.length;
      for (i = 0; i < prioritizedLen; i++) {
        this[prioritized[i].unit](units[prioritized[i].unit]);
      }
    } else {
      units = normalizeUnits(units);
      if (isFunction(this[units])) {
        return this[units](value);
      }
    }
    return this;
  }

  const match1 = /\d/; //       0 - 9
  const match2 = /\d\d/; //      00 - 99
  const match3 = /\d{3}/; //     000 - 999
  const match4 = /\d{4}/; //    0000 - 9999
  const match6 = /[+-]?\d{6}/; // -999999 - 999999
  const match1to2 = /\d\d?/; //       0 - 99
  const match3to4 = /\d\d\d\d?/; //     999 - 9999
  const match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999
  const match1to3 = /\d{1,3}/; //       0 - 999
  const match1to4 = /\d{1,4}/; //       0 - 9999
  const match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999
  const matchUnsigned = /\d+/; //       0 - inf
  const matchSigned = /[+-]?\d+/; //    -inf - inf
  const matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
  const matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z
  const matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
  // any word (or two) characters or numbers including two/three word month in arabic.
  // includes scottish gaelic two word and hyphenated months
  const matchWord =
      /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
  let regexes;

  regexes = {};

  function addRegexToken(token, regex, strictRegex) {
    regexes[token] = isFunction(regex)
      ? regex
      : function (isStrict, localeData) {
        return isStrict && strictRegex ? strictRegex : regex;
      };
  }

  function getParseRegexForToken(token, config) {
    if (!hasOwnProp(regexes, token)) {
      return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
  }

  // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
  function unescapeFormat(s) {
    return regexEscape(
      s
        .replace('\\', '')
        .replace(
          /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
          (matched, p1, p2, p3, p4) => p1 || p2 || p3 || p4,
        ),
    );
  }

  function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }

  const tokens = {};

  function addParseToken(token, callback) {
    let i;
    let func = callback;
    let tokenLen;
    if (typeof token === 'string') {
      token = [token];
    }
    if (isNumber(callback)) {
      func = function (input, array) {
        array[callback] = toInt(input);
      };
    }
    tokenLen = token.length;
    for (i = 0; i < tokenLen; i++) {
      tokens[token[i]] = func;
    }
  }

  function addWeekParseToken(token, callback) {
    addParseToken(token, (input, array, config, token) => {
      config._w = config._w || {};
      callback(input, config._w, config, token);
    });
  }

  function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
      tokens[token](input, config._a, config, token);
    }
  }

  const YEAR = 0;
  const MONTH = 1;
  const DATE = 2;
  const HOUR = 3;
  const MINUTE = 4;
  const SECOND = 5;
  const MILLISECOND = 6;
  const WEEK = 7;
  const WEEKDAY = 8;

  function mod(n, x) {
    return ((n % x) + x) % x;
  }

  let indexOf;

  if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
  } else {
    indexOf = function (o) {
      // I know
      let i;
      for (i = 0; i < this.length; ++i) {
        if (this[i] === o) {
          return i;
        }
      }
      return -1;
    };
  }

  function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
      return NaN;
    }
    const modMonth = mod(month, 12);
    year += (month - modMonth) / 12;
    return modMonth === 1
      ? isLeapYear(year)
        ? 29
        : 28
      : 31 - ((modMonth % 7) % 2);
  }

  // FORMATTING

  addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
  });

  addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
  });

  addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
  });

  // ALIASES

  addUnitAlias('month', 'M');

  // PRIORITY

  addUnitPriority('month', 8);

  // PARSING

  addRegexToken('M', match1to2);
  addRegexToken('MM', match1to2, match2);
  addRegexToken('MMM', (isStrict, locale) => locale.monthsShortRegex(isStrict));
  addRegexToken('MMMM', (isStrict, locale) => locale.monthsRegex(isStrict));

  addParseToken(['M', 'MM'], (input, array) => {
    array[MONTH] = toInt(input) - 1;
  });

  addParseToken(['MMM', 'MMMM'], (input, array, config, token) => {
    const month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
      array[MONTH] = month;
    } else {
      getParsingFlags(config).invalidMonth = input;
    }
  });

  // LOCALES

  const defaultLocaleMonths =
      'January_February_March_April_May_June_July_August_September_October_November_December'.split(
        '_',
      );
  const defaultLocaleMonthsShort =
      'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
  const MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
  const defaultMonthsShortRegex = matchWord;
  const defaultMonthsRegex = matchWord;

  function localeMonths(m, format) {
    if (!m) {
      return isArray(this._months) ? this._months : this._months.standalone;
    }
    return isArray(this._months)
      ? this._months[m.month()]
      : this._months[
        (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
          ? 'format'
          : 'standalone'
      ][m.month()];
  }

  function localeMonthsShort(m, format) {
    if (!m) {
      return isArray(this._monthsShort)
        ? this._monthsShort
        : this._monthsShort.standalone;
    }
    return isArray(this._monthsShort)
      ? this._monthsShort[m.month()]
      : this._monthsShort[
        MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
      ][m.month()];
  }

  function handleStrictParse(monthName, format, strict) {
    let i;
    let ii;
    let mom;
    const llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
      // this is not used
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
      for (i = 0; i < 12; ++i) {
        mom = createUTC([2000, i]);
        this._shortMonthsParse[i] = this.monthsShort(
          mom,
          '',
        ).toLocaleLowerCase();
        this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
      }
    }

    if (strict) {
      if (format === 'MMM') {
        ii = indexOf.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
      ii = indexOf.call(this._longMonthsParse, llc);
      return ii !== -1 ? ii : null;
    }
    if (format === 'MMM') {
      ii = indexOf.call(this._shortMonthsParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._longMonthsParse, llc);
      return ii !== -1 ? ii : null;
    }
    ii = indexOf.call(this._longMonthsParse, llc);
    if (ii !== -1) {
      return ii;
    }
    ii = indexOf.call(this._shortMonthsParse, llc);
    return ii !== -1 ? ii : null;
  }

  function localeMonthsParse(monthName, format, strict) {
    let i; let mom; let
      regex;

    if (this._monthsParseExact) {
      return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, i]);
      if (strict && !this._longMonthsParse[i]) {
        this._longMonthsParse[i] = new RegExp(
          `^${this.months(mom, '').replace('.', '')}$`,
          'i',
        );
        this._shortMonthsParse[i] = new RegExp(
          `^${this.monthsShort(mom, '').replace('.', '')}$`,
          'i',
        );
      }
      if (!strict && !this._monthsParse[i]) {
        regex = `^${this.months(mom, '')}|^${this.monthsShort(mom, '')}`;
        this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
      }
      // test the regex
      if (
        strict
        && format === 'MMMM'
        && this._longMonthsParse[i].test(monthName)
      ) {
        return i;
      } if (
        strict
        && format === 'MMM'
        && this._shortMonthsParse[i].test(monthName)
      ) {
        return i;
      } if (!strict && this._monthsParse[i].test(monthName)) {
        return i;
      }
    }
  }

  // MOMENTS

  function setMonth(mom, value) {
    let dayOfMonth;

    if (!mom.isValid()) {
      // No op
      return mom;
    }

    if (typeof value === 'string') {
      if (/^\d+$/.test(value)) {
        value = toInt(value);
      } else {
        value = mom.localeData().monthsParse(value);
        // TODO: Another silent failure?
        if (!isNumber(value)) {
          return mom;
        }
      }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d[`set${mom._isUTC ? 'UTC' : ''}Month`](value, dayOfMonth);
    return mom;
  }

  function getSetMonth(value) {
    if (value != null) {
      setMonth(this, value);
      hooks.updateOffset(this, true);
      return this;
    }
    return get(this, 'Month');
  }

  function getDaysInMonth() {
    return daysInMonth(this.year(), this.month());
  }

  function monthsShortRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, '_monthsRegex')) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsShortStrictRegex;
      }
      return this._monthsShortRegex;
    }
    if (!hasOwnProp(this, '_monthsShortRegex')) {
      this._monthsShortRegex = defaultMonthsShortRegex;
    }
    return this._monthsShortStrictRegex && isStrict
      ? this._monthsShortStrictRegex
      : this._monthsShortRegex;
  }

  function monthsRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, '_monthsRegex')) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsStrictRegex;
      }
      return this._monthsRegex;
    }
    if (!hasOwnProp(this, '_monthsRegex')) {
      this._monthsRegex = defaultMonthsRegex;
    }
    return this._monthsStrictRegex && isStrict
      ? this._monthsStrictRegex
      : this._monthsRegex;
  }

  function computeMonthsParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }

    const shortPieces = [];
    const longPieces = [];
    const mixedPieces = [];
    let i;
    let mom;
    for (i = 0; i < 12; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, i]);
      shortPieces.push(this.monthsShort(mom, ''));
      longPieces.push(this.months(mom, ''));
      mixedPieces.push(this.months(mom, ''));
      mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
      shortPieces[i] = regexEscape(shortPieces[i]);
      longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
      mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp(`^(${mixedPieces.join('|')})`, 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp(
      `^(${longPieces.join('|')})`,
      'i',
    );
    this._monthsShortStrictRegex = new RegExp(
      `^(${shortPieces.join('|')})`,
      'i',
    );
  }

  // FORMATTING

  addFormatToken('Y', 0, 0, function () {
    const y = this.year();
    return y <= 9999 ? zeroFill(y, 4) : `+${y}`;
  });

  addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
  });

  addFormatToken(0, ['YYYY', 4], 0, 'year');
  addFormatToken(0, ['YYYYY', 5], 0, 'year');
  addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

  // ALIASES

  addUnitAlias('year', 'y');

  // PRIORITIES

  addUnitPriority('year', 1);

  // PARSING

  addRegexToken('Y', matchSigned);
  addRegexToken('YY', match1to2, match2);
  addRegexToken('YYYY', match1to4, match4);
  addRegexToken('YYYYY', match1to6, match6);
  addRegexToken('YYYYYY', match1to6, match6);

  addParseToken(['YYYYY', 'YYYYYY'], YEAR);
  addParseToken('YYYY', (input, array) => {
    array[YEAR] =
      input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
  });
  addParseToken('YY', (input, array) => {
    array[YEAR] = hooks.parseTwoDigitYear(input);
  });
  addParseToken('Y', (input, array) => {
    array[YEAR] = parseInt(input, 10);
  });

  // HELPERS

  function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
  }

  // HOOKS

  hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
  };

  // MOMENTS

  const getSetYear = makeGetSet('FullYear', true);

  function getIsLeapYear() {
    return isLeapYear(this.year());
  }

  function createDate(y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    let date;
    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
      // preserve leap years using a full 400 year cycle, then reset
      date = new Date(y + 400, m, d, h, M, s, ms);
      if (isFinite(date.getFullYear())) {
        date.setFullYear(y);
      }
    } else {
      date = new Date(y, m, d, h, M, s, ms);
    }

    return date;
  }

  function createUTCDate(y) {
    let date; let
      args;
    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
      args = Array.prototype.slice.call(arguments);
      // preserve leap years using a full 400 year cycle, then reset
      args[0] = y + 400;
      date = new Date(Date.UTC.apply(null, args));
      if (isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
      }
    } else {
      date = new Date(Date.UTC.apply(null, arguments));
    }

    return date;
  }

  // start-of-first-week - start-of-year
  function firstWeekOffset(year, dow, doy) {
    const // first-week day -- which january is always in the first week (4 for iso, 1 for other)
      fwd = 7 + dow - doy;
      // first-week day local weekday -- which local weekday is fwd
    const fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
  }

  // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
  function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    const localWeekday = (7 + weekday - dow) % 7;
    const weekOffset = firstWeekOffset(year, dow, doy);
    const dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset;
    let resYear;
    let resDayOfYear;

    if (dayOfYear <= 0) {
      resYear = year - 1;
      resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
      resYear = year + 1;
      resDayOfYear = dayOfYear - daysInYear(year);
    } else {
      resYear = year;
      resDayOfYear = dayOfYear;
    }

    return {
      year: resYear,
      dayOfYear: resDayOfYear,
    };
  }

  function weekOfYear(mom, dow, doy) {
    const weekOffset = firstWeekOffset(mom.year(), dow, doy);
    const week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1;
    let resWeek;
    let resYear;

    if (week < 1) {
      resYear = mom.year() - 1;
      resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
      resWeek = week - weeksInYear(mom.year(), dow, doy);
      resYear = mom.year() + 1;
    } else {
      resYear = mom.year();
      resWeek = week;
    }

    return {
      week: resWeek,
      year: resYear,
    };
  }

  function weeksInYear(year, dow, doy) {
    const weekOffset = firstWeekOffset(year, dow, doy);
    const weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
  }

  // FORMATTING

  addFormatToken('w', ['ww', 2], 'wo', 'week');
  addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

  // ALIASES

  addUnitAlias('week', 'w');
  addUnitAlias('isoWeek', 'W');

  // PRIORITIES

  addUnitPriority('week', 5);
  addUnitPriority('isoWeek', 5);

  // PARSING

  addRegexToken('w', match1to2);
  addRegexToken('ww', match1to2, match2);
  addRegexToken('W', match1to2);
  addRegexToken('WW', match1to2, match2);

  addWeekParseToken(
    ['w', 'ww', 'W', 'WW'],
    (input, week, config, token) => {
      week[token.substr(0, 1)] = toInt(input);
    },
  );

  // HELPERS

  // LOCALES

  function localeWeek(mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
  }

  const defaultLocaleWeek = {
    dow: 0, // Sunday is the first day of the week.
    doy: 6, // The week that contains Jan 6th is the first week of the year.
  };

  function localeFirstDayOfWeek() {
    return this._week.dow;
  }

  function localeFirstDayOfYear() {
    return this._week.doy;
  }

  // MOMENTS

  function getSetWeek(input) {
    const week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
  }

  function getSetISOWeek(input) {
    const week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
  }

  // FORMATTING

  addFormatToken('d', 0, 'do', 'day');

  addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
  });

  addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
  });

  addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
  });

  addFormatToken('e', 0, 0, 'weekday');
  addFormatToken('E', 0, 0, 'isoWeekday');

  // ALIASES

  addUnitAlias('day', 'd');
  addUnitAlias('weekday', 'e');
  addUnitAlias('isoWeekday', 'E');

  // PRIORITY
  addUnitPriority('day', 11);
  addUnitPriority('weekday', 11);
  addUnitPriority('isoWeekday', 11);

  // PARSING

  addRegexToken('d', match1to2);
  addRegexToken('e', match1to2);
  addRegexToken('E', match1to2);
  addRegexToken('dd', (isStrict, locale) => locale.weekdaysMinRegex(isStrict));
  addRegexToken('ddd', (isStrict, locale) => locale.weekdaysShortRegex(isStrict));
  addRegexToken('dddd', (isStrict, locale) => locale.weekdaysRegex(isStrict));

  addWeekParseToken(
    ['dd', 'ddd', 'dddd'],
    (input, week, config, token) => {
      const weekday = config._locale.weekdaysParse(input, token, config._strict);
      // if we didn't get a weekday name, mark the date as invalid
      if (weekday != null) {
        week.d = weekday;
      } else {
        getParsingFlags(config).invalidWeekday = input;
      }
    },
  );

  addWeekParseToken(['d', 'e', 'E'], (input, week, config, token) => {
    week[token] = toInt(input);
  });

  // HELPERS

  function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
      return input;
    }

    if (!isNaN(input)) {
      return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
      return input;
    }

    return null;
  }

  function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
      return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
  }

  // LOCALES
  function shiftWeekdays(ws, n) {
    return ws.slice(n, 7).concat(ws.slice(0, n));
  }

  const defaultLocaleWeekdays =
      'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
  const defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
  const defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
  const defaultWeekdaysRegex = matchWord;
  const defaultWeekdaysShortRegex = matchWord;
  const defaultWeekdaysMinRegex = matchWord;

  function localeWeekdays(m, format) {
    const weekdays = isArray(this._weekdays)
      ? this._weekdays
      : this._weekdays[
        m && m !== true && this._weekdays.isFormat.test(format)
          ? 'format'
          : 'standalone'
      ];
    return m === true
      ? shiftWeekdays(weekdays, this._week.dow)
      : m
        ? weekdays[m.day()]
        : weekdays;
  }

  function localeWeekdaysShort(m) {
    return m === true
      ? shiftWeekdays(this._weekdaysShort, this._week.dow)
      : m
        ? this._weekdaysShort[m.day()]
        : this._weekdaysShort;
  }

  function localeWeekdaysMin(m) {
    return m === true
      ? shiftWeekdays(this._weekdaysMin, this._week.dow)
      : m
        ? this._weekdaysMin[m.day()]
        : this._weekdaysMin;
  }

  function handleStrictParse$1(weekdayName, format, strict) {
    let i;
    let ii;
    let mom;
    const llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._minWeekdaysParse = [];

      for (i = 0; i < 7; ++i) {
        mom = createUTC([2000, 1]).day(i);
        this._minWeekdaysParse[i] = this.weekdaysMin(
          mom,
          '',
        ).toLocaleLowerCase();
        this._shortWeekdaysParse[i] = this.weekdaysShort(
          mom,
          '',
        ).toLocaleLowerCase();
        this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
      }
    }

    if (strict) {
      if (format === 'dddd') {
        ii = indexOf.call(this._weekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } if (format === 'ddd') {
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
      ii = indexOf.call(this._minWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    }
    if (format === 'dddd') {
      ii = indexOf.call(this._weekdaysParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._shortWeekdaysParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._minWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    } if (format === 'ddd') {
      ii = indexOf.call(this._shortWeekdaysParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._weekdaysParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._minWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    }
    ii = indexOf.call(this._minWeekdaysParse, llc);
    if (ii !== -1) {
      return ii;
    }
    ii = indexOf.call(this._weekdaysParse, llc);
    if (ii !== -1) {
      return ii;
    }
    ii = indexOf.call(this._shortWeekdaysParse, llc);
    return ii !== -1 ? ii : null;
  }

  function localeWeekdaysParse(weekdayName, format, strict) {
    let i; let mom; let
      regex;

    if (this._weekdaysParseExact) {
      return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._minWeekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
      // make the regex if we don't have it already

      mom = createUTC([2000, 1]).day(i);
      if (strict && !this._fullWeekdaysParse[i]) {
        this._fullWeekdaysParse[i] = new RegExp(
          `^${this.weekdays(mom, '').replace('.', '\\.?')}$`,
          'i',
        );
        this._shortWeekdaysParse[i] = new RegExp(
          `^${this.weekdaysShort(mom, '').replace('.', '\\.?')}$`,
          'i',
        );
        this._minWeekdaysParse[i] = new RegExp(
          `^${this.weekdaysMin(mom, '').replace('.', '\\.?')}$`,
          'i',
        );
      }
      if (!this._weekdaysParse[i]) {
        regex =
          `^${
            this.weekdays(mom, '')
          }|^${
            this.weekdaysShort(mom, '')
          }|^${
            this.weekdaysMin(mom, '')}`;
        this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
      }
      // test the regex
      if (
        strict
        && format === 'dddd'
        && this._fullWeekdaysParse[i].test(weekdayName)
      ) {
        return i;
      } if (
        strict
        && format === 'ddd'
        && this._shortWeekdaysParse[i].test(weekdayName)
      ) {
        return i;
      } if (
        strict
        && format === 'dd'
        && this._minWeekdaysParse[i].test(weekdayName)
      ) {
        return i;
      } if (!strict && this._weekdaysParse[i].test(weekdayName)) {
        return i;
      }
    }
  }

  // MOMENTS

  function getSetDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    const day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
      input = parseWeekday(input, this.localeData());
      return this.add(input - day, 'd');
    }
    return day;
  }

  function getSetLocaleDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    const weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
  }

  function getSetISODayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
      const weekday = parseIsoWeekday(input, this.localeData());
      return this.day(this.day() % 7 ? weekday : weekday - 7);
    }
    return this.day() || 7;
  }

  function weekdaysRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysStrictRegex;
      }
      return this._weekdaysRegex;
    }
    if (!hasOwnProp(this, '_weekdaysRegex')) {
      this._weekdaysRegex = defaultWeekdaysRegex;
    }
    return this._weekdaysStrictRegex && isStrict
      ? this._weekdaysStrictRegex
      : this._weekdaysRegex;
  }

  function weekdaysShortRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysShortStrictRegex;
      }
      return this._weekdaysShortRegex;
    }
    if (!hasOwnProp(this, '_weekdaysShortRegex')) {
      this._weekdaysShortRegex = defaultWeekdaysShortRegex;
    }
    return this._weekdaysShortStrictRegex && isStrict
      ? this._weekdaysShortStrictRegex
      : this._weekdaysShortRegex;
  }

  function weekdaysMinRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysMinStrictRegex;
      }
      return this._weekdaysMinRegex;
    }
    if (!hasOwnProp(this, '_weekdaysMinRegex')) {
      this._weekdaysMinRegex = defaultWeekdaysMinRegex;
    }
    return this._weekdaysMinStrictRegex && isStrict
      ? this._weekdaysMinStrictRegex
      : this._weekdaysMinRegex;
  }

  function computeWeekdaysParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }

    const minPieces = [];
    const shortPieces = [];
    const longPieces = [];
    const mixedPieces = [];
    let i;
    let mom;
    let minp;
    let shortp;
    let longp;
    for (i = 0; i < 7; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, 1]).day(i);
      minp = regexEscape(this.weekdaysMin(mom, ''));
      shortp = regexEscape(this.weekdaysShort(mom, ''));
      longp = regexEscape(this.weekdays(mom, ''));
      minPieces.push(minp);
      shortPieces.push(shortp);
      longPieces.push(longp);
      mixedPieces.push(minp);
      mixedPieces.push(shortp);
      mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);

    this._weekdaysRegex = new RegExp(`^(${mixedPieces.join('|')})`, 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp(
      `^(${longPieces.join('|')})`,
      'i',
    );
    this._weekdaysShortStrictRegex = new RegExp(
      `^(${shortPieces.join('|')})`,
      'i',
    );
    this._weekdaysMinStrictRegex = new RegExp(
      `^(${minPieces.join('|')})`,
      'i',
    );
  }

  // FORMATTING

  function hFormat() {
    return this.hours() % 12 || 12;
  }

  function kFormat() {
    return this.hours() || 24;
  }

  addFormatToken('H', ['HH', 2], 0, 'hour');
  addFormatToken('h', ['hh', 2], 0, hFormat);
  addFormatToken('k', ['kk', 2], 0, kFormat);

  addFormatToken('hmm', 0, 0, function () {
    return `${hFormat.apply(this)}${zeroFill(this.minutes(), 2)}`;
  });

  addFormatToken('hmmss', 0, 0, function () {
    return (
      `${
        hFormat.apply(this)
      }${zeroFill(this.minutes(), 2)
      }${zeroFill(this.seconds(), 2)}`
    );
  });

  addFormatToken('Hmm', 0, 0, function () {
    return `${this.hours()}${zeroFill(this.minutes(), 2)}`;
  });

  addFormatToken('Hmmss', 0, 0, function () {
    return (
      `${
        this.hours()
      }${zeroFill(this.minutes(), 2)
      }${zeroFill(this.seconds(), 2)}`
    );
  });

  function meridiem(token, lowercase) {
    addFormatToken(token, 0, 0, function () {
      return this.localeData().meridiem(
        this.hours(),
        this.minutes(),
        lowercase,
      );
    });
  }

  meridiem('a', true);
  meridiem('A', false);

  // ALIASES

  addUnitAlias('hour', 'h');

  // PRIORITY
  addUnitPriority('hour', 13);

  // PARSING

  function matchMeridiem(isStrict, locale) {
    return locale._meridiemParse;
  }

  addRegexToken('a', matchMeridiem);
  addRegexToken('A', matchMeridiem);
  addRegexToken('H', match1to2);
  addRegexToken('h', match1to2);
  addRegexToken('k', match1to2);
  addRegexToken('HH', match1to2, match2);
  addRegexToken('hh', match1to2, match2);
  addRegexToken('kk', match1to2, match2);

  addRegexToken('hmm', match3to4);
  addRegexToken('hmmss', match5to6);
  addRegexToken('Hmm', match3to4);
  addRegexToken('Hmmss', match5to6);

  addParseToken(['H', 'HH'], HOUR);
  addParseToken(['k', 'kk'], (input, array, config) => {
    const kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
  });
  addParseToken(['a', 'A'], (input, array, config) => {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
  });
  addParseToken(['h', 'hh'], (input, array, config) => {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('hmm', (input, array, config) => {
    const pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('hmmss', (input, array, config) => {
    const pos1 = input.length - 4;
    const pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('Hmm', (input, array, config) => {
    const pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
  });
  addParseToken('Hmmss', (input, array, config) => {
    const pos1 = input.length - 4;
    const pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
  });

  // LOCALES

  function localeIsPM(input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return (`${input}`).toLowerCase().charAt(0) === 'p';
  }

  const defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
  // Setting the hour should keep the time, because the user explicitly
  // specified which hour they want. So trying to maintain the same hour (in
  // a new timezone) makes sense. Adding/subtracting hours does not follow
  // this rule.
  const getSetHour = makeGetSet('Hours', true);

  function localeMeridiem(hours, minutes, isLower) {
    if (hours > 11) {
      return isLower ? 'pm' : 'PM';
    }
    return isLower ? 'am' : 'AM';
  }

  const baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,

    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,

    week: defaultLocaleWeek,

    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,

    meridiemParse: defaultLocaleMeridiemParse,
  };

  // internal storage for locale config files
  const locales = {};
  const localeFamilies = {};
  let globalLocale;

  function commonPrefix(arr1, arr2) {
    let i;
    const minl = Math.min(arr1.length, arr2.length);
    for (i = 0; i < minl; i += 1) {
      if (arr1[i] !== arr2[i]) {
        return i;
      }
    }
    return minl;
  }

  function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
  }

  // pick the locale from the array
  // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
  // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
  function chooseLocale(names) {
    let i = 0;
    let j;
    let next;
    let locale;
    let split;

    while (i < names.length) {
      split = normalizeLocale(names[i]).split('-');
      j = split.length;
      next = normalizeLocale(names[i + 1]);
      next = next ? next.split('-') : null;
      while (j > 0) {
        locale = loadLocale(split.slice(0, j).join('-'));
        if (locale) {
          return locale;
        }
        if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
          // the next array item is better than a shallower substring of this one
          break;
        }
        j--;
      }
      i++;
    }
    return globalLocale;
  }

  function isLocaleNameSane(name) {
    // Prevent names that look like filesystem paths, i.e contain '/' or '\'
    return name.match('^[^/\\\\]*$') != null;
  }

  function loadLocale(name) {
    let oldLocale = null;
    let aliasedRequire;
    // TODO: Find a better way to register and load all the locales in Node
    if (
      locales[name] === undefined
      && typeof module !== 'undefined'
      && module
      && module.exports
      && isLocaleNameSane(name)
    ) {
      try {
        oldLocale = globalLocale._abbr;
        aliasedRequire = require;
        aliasedRequire(`./locale/${name}`);
        getSetGlobalLocale(oldLocale);
      } catch (e) {
        // mark as not found to avoid repeating expensive file require call causing high CPU
        // when trying to find en-US, en_US, en-us for every format call
        locales[name] = null; // null means not found
      }
    }
    return locales[name];
  }

  // This function will load locale and then set the global locale.  If
  // no arguments are passed in, it will simply return the current global
  // locale key.
  function getSetGlobalLocale(key, values) {
    let data;
    if (key) {
      if (isUndefined(values)) {
        data = getLocale(key);
      } else {
        data = defineLocale(key, values);
      }

      if (data) {
        // moment.duration._locale = moment._locale = data;
        globalLocale = data;
      } else if (typeof console !== 'undefined' && console.warn) {
        // warn user if arguments are passed but the locale could not be set
        console.warn(
          `Locale ${key} not found. Did you forget to load it?`,
        );
      }
    }

    return globalLocale._abbr;
  }

  function defineLocale(name, config) {
    if (config !== null) {
      let locale;
      let parentConfig = baseConfig;
      config.abbr = name;
      if (locales[name] != null) {
        deprecateSimple(
          'defineLocaleOverride',
          'use moment.updateLocale(localeName, config) to change '
            + 'an existing locale. moment.defineLocale(localeName, '
            + 'config) should only be used for creating a new locale '
            + 'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.',
        );
        parentConfig = locales[name]._config;
      } else if (config.parentLocale != null) {
        if (locales[config.parentLocale] != null) {
          parentConfig = locales[config.parentLocale]._config;
        } else {
          locale = loadLocale(config.parentLocale);
          if (locale != null) {
            parentConfig = locale._config;
          } else {
            if (!localeFamilies[config.parentLocale]) {
              localeFamilies[config.parentLocale] = [];
            }
            localeFamilies[config.parentLocale].push({
              name,
              config,
            });
            return null;
          }
        }
      }
      locales[name] = new Locale(mergeConfigs(parentConfig, config));

      if (localeFamilies[name]) {
        localeFamilies[name].forEach((x) => {
          defineLocale(x.name, x.config);
        });
      }

      // backwards compat for now: also set the locale
      // make sure we set the locale AFTER all child locales have been
      // created, so we won't end up with the child locale set.
      getSetGlobalLocale(name);

      return locales[name];
    }
    // useful for testing
    delete locales[name];
    return null;
  }

  function updateLocale(name, config) {
    if (config != null) {
      let locale;
      let tmpLocale;
      let parentConfig = baseConfig;

      if (locales[name] != null && locales[name].parentLocale != null) {
        // Update existing child locale in-place to avoid memory-leaks
        locales[name].set(mergeConfigs(locales[name]._config, config));
      } else {
        // MERGE
        tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
          parentConfig = tmpLocale._config;
        }
        config = mergeConfigs(parentConfig, config);
        if (tmpLocale == null) {
          // updateLocale is called for creating a new locale
          // Set abbr so it will have a name (getters return
          // undefined otherwise).
          config.abbr = name;
        }
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale;
      }

      // backwards compat for now: also set the locale
      getSetGlobalLocale(name);
    } else {
      // pass null for config to unupdate, useful for tests
      if (locales[name] != null) {
        if (locales[name].parentLocale != null) {
          locales[name] = locales[name].parentLocale;
          if (name === getSetGlobalLocale()) {
            getSetGlobalLocale(name);
          }
        } else if (locales[name] != null) {
          delete locales[name];
        }
      }
    }
    return locales[name];
  }

  // returns locale data
  function getLocale(key) {
    let locale;

    if (key && key._locale && key._locale._abbr) {
      key = key._locale._abbr;
    }

    if (!key) {
      return globalLocale;
    }

    if (!isArray(key)) {
      // short-circuit everything else
      locale = loadLocale(key);
      if (locale) {
        return locale;
      }
      key = [key];
    }

    return chooseLocale(key);
  }

  function listLocales() {
    return keys(locales);
  }

  function checkOverflow(m) {
    let overflow;
    const a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
      overflow =
        a[MONTH] < 0 || a[MONTH] > 11
          ? MONTH
          : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
            ? DATE
            : a[HOUR] < 0
            || a[HOUR] > 24
            || (a[HOUR] === 24
              && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0))
              ? HOUR
              : a[MINUTE] < 0 || a[MINUTE] > 59
                ? MINUTE
                : a[SECOND] < 0 || a[SECOND] > 59
                  ? SECOND
                  : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
                    ? MILLISECOND
                    : -1;

      if (
        getParsingFlags(m)._overflowDayOfYear
        && (overflow < YEAR || overflow > DATE)
      ) {
        overflow = DATE;
      }
      if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
        overflow = WEEK;
      }
      if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
        overflow = WEEKDAY;
      }

      getParsingFlags(m).overflow = overflow;
    }

    return m;
  }

  // iso 8601 regex
  // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
  const extendedIsoRegex =
      /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
  const basicIsoRegex =
      /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
  const tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
  const isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/],
    ['YYYYMMDD', /\d{8}/],
    ['GGGG[W]WWE', /\d{4}W\d{3}/],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/],
    ['YYYYMM', /\d{6}/, false],
    ['YYYY', /\d{4}/, false],
  ];
    // iso time formats and regexes
  const isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/],
  ];
  const aspNetJsonRegex = /^\/?Date\((-?\d+)/i;
  // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
  const rfc2822 =
      /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
  const obsOffsets = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60,
  };

  // date from iso format
  function configFromISO(config) {
    let i;
    let l;
    const string = config._i;
    const match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string);
    let allowTime;
    let dateFormat;
    let timeFormat;
    let tzFormat;
    const isoDatesLen = isoDates.length;
    const isoTimesLen = isoTimes.length;

    if (match) {
      getParsingFlags(config).iso = true;
      for (i = 0, l = isoDatesLen; i < l; i++) {
        if (isoDates[i][1].exec(match[1])) {
          dateFormat = isoDates[i][0];
          allowTime = isoDates[i][2] !== false;
          break;
        }
      }
      if (dateFormat == null) {
        config._isValid = false;
        return;
      }
      if (match[3]) {
        for (i = 0, l = isoTimesLen; i < l; i++) {
          if (isoTimes[i][1].exec(match[3])) {
            // match[2] should be 'T' or space
            timeFormat = (match[2] || ' ') + isoTimes[i][0];
            break;
          }
        }
        if (timeFormat == null) {
          config._isValid = false;
          return;
        }
      }
      if (!allowTime && timeFormat != null) {
        config._isValid = false;
        return;
      }
      if (match[4]) {
        if (tzRegex.exec(match[4])) {
          tzFormat = 'Z';
        } else {
          config._isValid = false;
          return;
        }
      }
      config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
      configFromStringAndFormat(config);
    } else {
      config._isValid = false;
    }
  }

  function extractFromRFC2822Strings(
    yearStr,
    monthStr,
    dayStr,
    hourStr,
    minuteStr,
    secondStr,
  ) {
    const result = [
      untruncateYear(yearStr),
      defaultLocaleMonthsShort.indexOf(monthStr),
      parseInt(dayStr, 10),
      parseInt(hourStr, 10),
      parseInt(minuteStr, 10),
    ];

    if (secondStr) {
      result.push(parseInt(secondStr, 10));
    }

    return result;
  }

  function untruncateYear(yearStr) {
    const year = parseInt(yearStr, 10);
    if (year <= 49) {
      return 2000 + year;
    } if (year <= 999) {
      return 1900 + year;
    }
    return year;
  }

  function preprocessRFC2822(s) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return s
      .replace(/\([^()]*\)|[\n\t]/g, ' ')
      .replace(/(\s\s+)/g, ' ')
      .replace(/^\s\s*/, '')
      .replace(/\s\s*$/, '');
  }

  function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
      // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
      const weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr);
      const weekdayActual = new Date(
        parsedInput[0],
        parsedInput[1],
        parsedInput[2],
      ).getDay();
      if (weekdayProvided !== weekdayActual) {
        getParsingFlags(config).weekdayMismatch = true;
        config._isValid = false;
        return false;
      }
    }
    return true;
  }

  function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
      return obsOffsets[obsOffset];
    } if (militaryOffset) {
      // the only allowed military tz is Z
      return 0;
    }
    const hm = parseInt(numOffset, 10);
    const m = hm % 100;
    const h = (hm - m) / 100;
    return h * 60 + m;
  }

  // date and time from ref 2822 format
  function configFromRFC2822(config) {
    const match = rfc2822.exec(preprocessRFC2822(config._i));
    let parsedArray;
    if (match) {
      parsedArray = extractFromRFC2822Strings(
        match[4],
        match[3],
        match[2],
        match[5],
        match[6],
        match[7],
      );
      if (!checkWeekday(match[1], parsedArray, config)) {
        return;
      }

      config._a = parsedArray;
      config._tzm = calculateOffset(match[8], match[9], match[10]);

      config._d = createUTCDate.apply(null, config._a);
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

      getParsingFlags(config).rfc2822 = true;
    } else {
      config._isValid = false;
    }
  }

  // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
  function configFromString(config) {
    const matched = aspNetJsonRegex.exec(config._i);
    if (matched !== null) {
      config._d = new Date(+matched[1]);
      return;
    }

    configFromISO(config);
    if (config._isValid === false) {
      delete config._isValid;
    } else {
      return;
    }

    configFromRFC2822(config);
    if (config._isValid === false) {
      delete config._isValid;
    } else {
      return;
    }

    if (config._strict) {
      config._isValid = false;
    } else {
      // Final attempt, use Input Fallback
      hooks.createFromInputFallback(config);
    }
  }

  hooks.createFromInputFallback = deprecate(
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), '
      + 'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are '
      + 'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    (config) => {
      config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    },
  );

  // Pick the first defined of two or three arguments.
  function defaults(a, b, c) {
    if (a != null) {
      return a;
    }
    if (b != null) {
      return b;
    }
    return c;
  }

  function currentDateArray(config) {
    // hooks is actually the exported moment object
    const nowValue = new Date(hooks.now());
    if (config._useUTC) {
      return [
        nowValue.getUTCFullYear(),
        nowValue.getUTCMonth(),
        nowValue.getUTCDate(),
      ];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
  }

  // convert an array to a date.
  // the array should mirror the parameters below
  // note: all values past the year are optional and will default to the lowest possible value.
  // [year, month, day , hour, minute, second, millisecond]
  function configFromArray(config) {
    let i;
    let date;
    const input = [];
    let currentDate;
    let expectedWeekday;
    let yearToUse;

    if (config._d) {
      return;
    }

    currentDate = currentDateArray(config);

    // compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
      dayOfYearFromWeekInfo(config);
    }

    // if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
      yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

      if (
        config._dayOfYear > daysInYear(yearToUse)
        || config._dayOfYear === 0
      ) {
        getParsingFlags(config)._overflowDayOfYear = true;
      }

      date = createUTCDate(yearToUse, 0, config._dayOfYear);
      config._a[MONTH] = date.getUTCMonth();
      config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
      config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
      config._a[i] = input[i] =
        config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (
      config._a[HOUR] === 24
      && config._a[MINUTE] === 0
      && config._a[SECOND] === 0
      && config._a[MILLISECOND] === 0
    ) {
      config._nextDay = true;
      config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(
      null,
      input,
    );
    expectedWeekday = config._useUTC
      ? config._d.getUTCDay()
      : config._d.getDay();

    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
      config._a[HOUR] = 24;
    }

    // check for mismatching day of week
    if (
      config._w
      && typeof config._w.d !== 'undefined'
      && config._w.d !== expectedWeekday
    ) {
      getParsingFlags(config).weekdayMismatch = true;
    }
  }

  function dayOfYearFromWeekInfo(config) {
    let w; let weekYear; let week; let weekday; let dow; let doy; let temp; let weekdayOverflow; let
      curWeek;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
      dow = 1;
      doy = 4;

      // TODO: We need to take the current isoWeekYear, but that depends on
      // how we interpret now (local, utc, fixed offset). So create
      // a now version of current config (take local/utc/offset flags, and
      // create now).
      weekYear = defaults(
        w.GG,
        config._a[YEAR],
        weekOfYear(createLocal(), 1, 4).year,
      );
      week = defaults(w.W, 1);
      weekday = defaults(w.E, 1);
      if (weekday < 1 || weekday > 7) {
        weekdayOverflow = true;
      }
    } else {
      dow = config._locale._week.dow;
      doy = config._locale._week.doy;

      curWeek = weekOfYear(createLocal(), dow, doy);

      weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

      // Default to current week.
      week = defaults(w.w, curWeek.week);

      if (w.d != null) {
        // weekday -- low day numbers are considered next week
        weekday = w.d;
        if (weekday < 0 || weekday > 6) {
          weekdayOverflow = true;
        }
      } else if (w.e != null) {
        // local weekday -- counting starts from beginning of week
        weekday = w.e + dow;
        if (w.e < 0 || w.e > 6) {
          weekdayOverflow = true;
        }
      } else {
        // default to beginning of week
        weekday = dow;
      }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
      getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
      getParsingFlags(config)._overflowWeekday = true;
    } else {
      temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
      config._a[YEAR] = temp.year;
      config._dayOfYear = temp.dayOfYear;
    }
  }

  // constant that refers to the ISO standard
  hooks.ISO_8601 = function () {};

  // constant that refers to the RFC 2822 form
  hooks.RFC_2822 = function () {};

  // date from string and format string
  function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
      configFromISO(config);
      return;
    }
    if (config._f === hooks.RFC_2822) {
      configFromRFC2822(config);
      return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    let string = `${config._i}`;
    let i;
    let parsedInput;
    let tokens;
    let token;
    let skipped;
    const stringLength = string.length;
    let totalParsedInputLength = 0;
    let era;
    let tokenLen;

    tokens =
      expandFormat(config._f, config._locale).match(formattingTokens) || [];
    tokenLen = tokens.length;
    for (i = 0; i < tokenLen; i++) {
      token = tokens[i];
      parsedInput = (string.match(getParseRegexForToken(token, config))
        || [])[0];
      if (parsedInput) {
        skipped = string.substr(0, string.indexOf(parsedInput));
        if (skipped.length > 0) {
          getParsingFlags(config).unusedInput.push(skipped);
        }
        string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
        totalParsedInputLength += parsedInput.length;
      }
      // don't parse if it's not a known token
      if (formatTokenFunctions[token]) {
        if (parsedInput) {
          getParsingFlags(config).empty = false;
        } else {
          getParsingFlags(config).unusedTokens.push(token);
        }
        addTimeToArrayFromToken(token, parsedInput, config);
      } else if (config._strict && !parsedInput) {
        getParsingFlags(config).unusedTokens.push(token);
      }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver =
      stringLength - totalParsedInputLength;
    if (string.length > 0) {
      getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (
      config._a[HOUR] <= 12
      && getParsingFlags(config).bigHour === true
      && config._a[HOUR] > 0
    ) {
      getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(
      config._locale,
      config._a[HOUR],
      config._meridiem,
    );

    // handle era
    era = getParsingFlags(config).era;
    if (era !== null) {
      config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
    }

    configFromArray(config);
    checkOverflow(config);
  }

  function meridiemFixWrap(locale, hour, meridiem) {
    let isPm;

    if (meridiem == null) {
      // nothing to do
      return hour;
    }
    if (locale.meridiemHour != null) {
      return locale.meridiemHour(hour, meridiem);
    } if (locale.isPM != null) {
      // Fallback
      isPm = locale.isPM(meridiem);
      if (isPm && hour < 12) {
        hour += 12;
      }
      if (!isPm && hour === 12) {
        hour = 0;
      }
      return hour;
    }
    // this is not supposed to happen
    return hour;
  }

  // date from string and array of format strings
  function configFromStringAndArray(config) {
    let tempConfig;
    let bestMoment;
    let scoreToBeat;
    let i;
    let currentScore;
    let validFormatFound;
    let bestFormatIsValid = false;
    const configfLen = config._f.length;

    if (configfLen === 0) {
      getParsingFlags(config).invalidFormat = true;
      config._d = new Date(NaN);
      return;
    }

    for (i = 0; i < configfLen; i++) {
      currentScore = 0;
      validFormatFound = false;
      tempConfig = copyConfig({}, config);
      if (config._useUTC != null) {
        tempConfig._useUTC = config._useUTC;
      }
      tempConfig._f = config._f[i];
      configFromStringAndFormat(tempConfig);

      if (isValid(tempConfig)) {
        validFormatFound = true;
      }

      // if there is any input that was not parsed add a penalty for that format
      currentScore += getParsingFlags(tempConfig).charsLeftOver;

      // or tokens
      currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

      getParsingFlags(tempConfig).score = currentScore;

      if (!bestFormatIsValid) {
        if (
          scoreToBeat == null
          || currentScore < scoreToBeat
          || validFormatFound
        ) {
          scoreToBeat = currentScore;
          bestMoment = tempConfig;
          if (validFormatFound) {
            bestFormatIsValid = true;
          }
        }
      } else if (currentScore < scoreToBeat) {
        scoreToBeat = currentScore;
        bestMoment = tempConfig;
      }
    }

    extend(config, bestMoment || tempConfig);
  }

  function configFromObject(config) {
    if (config._d) {
      return;
    }

    const i = normalizeObjectUnits(config._i);
    const dayOrDate = i.day === undefined ? i.date : i.day;
    config._a = map(
      [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
      (obj) => obj && parseInt(obj, 10),
    );

    configFromArray(config);
  }

  function createFromConfig(config) {
    const res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
      // Adding is smart enough around DST
      res.add(1, 'd');
      res._nextDay = undefined;
    }

    return res;
  }

  function prepareConfig(config) {
    let input = config._i;
    const format = config._f;

    config._locale = config._locale || getLocale(config._l);

    if (input === null || (format === undefined && input === '')) {
      return createInvalid({ nullInput: true });
    }

    if (typeof input === 'string') {
      config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
      return new Moment(checkOverflow(input));
    } if (isDate(input)) {
      config._d = input;
    } else if (isArray(format)) {
      configFromStringAndArray(config);
    } else if (format) {
      configFromStringAndFormat(config);
    } else {
      configFromInput(config);
    }

    if (!isValid(config)) {
      config._d = null;
    }

    return config;
  }

  function configFromInput(config) {
    const input = config._i;
    if (isUndefined(input)) {
      config._d = new Date(hooks.now());
    } else if (isDate(input)) {
      config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
      configFromString(config);
    } else if (isArray(input)) {
      config._a = map(input.slice(0), (obj) => parseInt(obj, 10));
      configFromArray(config);
    } else if (isObject(input)) {
      configFromObject(config);
    } else if (isNumber(input)) {
      // from milliseconds
      config._d = new Date(input);
    } else {
      hooks.createFromInputFallback(config);
    }
  }

  function createLocalOrUTC(input, format, locale, strict, isUTC) {
    const c = {};

    if (format === true || format === false) {
      strict = format;
      format = undefined;
    }

    if (locale === true || locale === false) {
      strict = locale;
      locale = undefined;
    }

    if (
      (isObject(input) && isObjectEmpty(input))
      || (isArray(input) && input.length === 0)
    ) {
      input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
  }

  function createLocal(input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
  }

  const prototypeMin = deprecate(
    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
      const other = createLocal.apply(null, arguments);
      if (this.isValid() && other.isValid()) {
        return other < this ? this : other;
      }
      return createInvalid();
    },
  );
  const prototypeMax = deprecate(
    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
      const other = createLocal.apply(null, arguments);
      if (this.isValid() && other.isValid()) {
        return other > this ? this : other;
      }
      return createInvalid();
    },
  );

  // Pick a moment m from moments so that m[fn](other) is true for all
  // other. This relies on the function fn to be transitive.
  //
  // moments should either be an array of moment objects or an array, whose
  // first element is an array of moment objects.
  function pickBy(fn, moments) {
    let res; let
      i;
    if (moments.length === 1 && isArray(moments[0])) {
      moments = moments[0];
    }
    if (!moments.length) {
      return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
      if (!moments[i].isValid() || moments[i][fn](res)) {
        res = moments[i];
      }
    }
    return res;
  }

  // TODO: Use [].sort instead?
  function min() {
    const args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
  }

  function max() {
    const args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
  }

  const now = function () {
    return Date.now ? Date.now() : +new Date();
  };

  const ordering = [
    'year',
    'quarter',
    'month',
    'week',
    'day',
    'hour',
    'minute',
    'second',
    'millisecond',
  ];

  function isDurationValid(m) {
    let key;
    let unitHasDecimal = false;
    let i;
    const orderLen = ordering.length;
    for (key in m) {
      if (
        hasOwnProp(m, key)
        && !(
          indexOf.call(ordering, key) !== -1
          && (m[key] == null || !isNaN(m[key]))
        )
      ) {
        return false;
      }
    }

    for (i = 0; i < orderLen; ++i) {
      if (m[ordering[i]]) {
        if (unitHasDecimal) {
          return false; // only allow non-integers for smallest unit
        }
        if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
          unitHasDecimal = true;
        }
      }
    }

    return true;
  }

  function isValid$1() {
    return this._isValid;
  }

  function createInvalid$1() {
    return createDuration(NaN);
  }

  function Duration(duration) {
    const normalizedInput = normalizeObjectUnits(duration);
    const years = normalizedInput.year || 0;
    const quarters = normalizedInput.quarter || 0;
    const months = normalizedInput.month || 0;
    const weeks = normalizedInput.week || normalizedInput.isoWeek || 0;
    const days = normalizedInput.day || 0;
    const hours = normalizedInput.hour || 0;
    const minutes = normalizedInput.minute || 0;
    const seconds = normalizedInput.second || 0;
    const milliseconds = normalizedInput.millisecond || 0;

    this._isValid = isDurationValid(normalizedInput);

    // representation for dateAddRemove
    this._milliseconds =
      +milliseconds
      + seconds * 1e3 // 1000
      + minutes * 6e4 // 1000 * 60
      + hours * 1000 * 60 * 60; // using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days + weeks * 7;
    // It is impossible to translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months + quarters * 3 + years * 12;

    this._data = {};

    this._locale = getLocale();

    this._bubble();
  }

  function isDuration(obj) {
    return obj instanceof Duration;
  }

  function absRound(number) {
    if (number < 0) {
      return Math.round(-1 * number) * -1;
    }
    return Math.round(number);
  }

  // compare two arrays, return the number of differences
  function compareArrays(array1, array2, dontConvert) {
    const len = Math.min(array1.length, array2.length);
    const lengthDiff = Math.abs(array1.length - array2.length);
    let diffs = 0;
    let i;
    for (i = 0; i < len; i++) {
      if (
        (dontConvert && array1[i] !== array2[i])
        || (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))
      ) {
        diffs++;
      }
    }
    return diffs + lengthDiff;
  }

  // FORMATTING

  function offset(token, separator) {
    addFormatToken(token, 0, 0, function () {
      let offset = this.utcOffset();
      let sign = '+';
      if (offset < 0) {
        offset = -offset;
        sign = '-';
      }
      return (
        sign
        + zeroFill(~~(offset / 60), 2)
        + separator
        + zeroFill(~~offset % 60, 2)
      );
    });
  }

  offset('Z', ':');
  offset('ZZ', '');

  // PARSING

  addRegexToken('Z', matchShortOffset);
  addRegexToken('ZZ', matchShortOffset);
  addParseToken(['Z', 'ZZ'], (input, array, config) => {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
  });

  // HELPERS

  // timezone chunker
  // '+10:00' > ['10',  '00']
  // '-1530'  > ['-15', '30']
  const chunkOffset = /([\+\-]|\d\d)/gi;

  function offsetFromString(matcher, string) {
    const matches = (string || '').match(matcher);
    let chunk;
    let parts;
    let minutes;

    if (matches === null) {
      return null;
    }

    chunk = matches[matches.length - 1] || [];
    parts = (`${chunk}`).match(chunkOffset) || ['-', 0, 0];
    minutes = +(parts[1] * 60) + toInt(parts[2]);

    return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
  }

  // Return a moment from input, that is local/utc/zone equivalent to model.
  function cloneWithOffset(input, model) {
    let res; let
      diff;
    if (model._isUTC) {
      res = model.clone();
      diff =
        (isMoment(input) || isDate(input)
          ? input.valueOf()
          : createLocal(input).valueOf()) - res.valueOf();
      // Use low-level api, because this fn is low-level api.
      res._d.setTime(res._d.valueOf() + diff);
      hooks.updateOffset(res, false);
      return res;
    }
    return createLocal(input).local();
  }

  function getDateOffset(m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset());
  }

  // HOOKS

  // This function will be called whenever a moment is mutated.
  // It is intended to keep the offset in sync with the timezone.
  hooks.updateOffset = function () {};

  // MOMENTS

  // keepLocalTime = true means only change the timezone, without
  // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
  // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
  // +0200, so we adjust the time as needed, to be valid.
  //
  // Keeping the time actually adds/subtracts (one hour)
  // from the actual represented time. That is why we call updateOffset
  // a second time. In case it wants us to change the offset again
  // _changeInProgress == true case, then we have to adjust, because
  // there is no such time in the given timezone.
  function getSetOffset(input, keepLocalTime, keepMinutes) {
    const offset = this._offset || 0;
    let localAdjust;
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    if (input != null) {
      if (typeof input === 'string') {
        input = offsetFromString(matchShortOffset, input);
        if (input === null) {
          return this;
        }
      } else if (Math.abs(input) < 16 && !keepMinutes) {
        input *= 60;
      }
      if (!this._isUTC && keepLocalTime) {
        localAdjust = getDateOffset(this);
      }
      this._offset = input;
      this._isUTC = true;
      if (localAdjust != null) {
        this.add(localAdjust, 'm');
      }
      if (offset !== input) {
        if (!keepLocalTime || this._changeInProgress) {
          addSubtract(this, createDuration(input - offset, 'm'), 1, false);
        } else if (!this._changeInProgress) {
          this._changeInProgress = true;
          hooks.updateOffset(this, true);
          this._changeInProgress = null;
        }
      }
      return this;
    }
    return this._isUTC ? offset : getDateOffset(this);
  }

  function getSetZone(input, keepLocalTime) {
    if (input != null) {
      if (typeof input !== 'string') {
        input = -input;
      }

      this.utcOffset(input, keepLocalTime);

      return this;
    }
    return -this.utcOffset();
  }

  function setOffsetToUTC(keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
  }

  function setOffsetToLocal(keepLocalTime) {
    if (this._isUTC) {
      this.utcOffset(0, keepLocalTime);
      this._isUTC = false;

      if (keepLocalTime) {
        this.subtract(getDateOffset(this), 'm');
      }
    }
    return this;
  }

  function setOffsetToParsedOffset() {
    if (this._tzm != null) {
      this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
      const tZone = offsetFromString(matchOffset, this._i);
      if (tZone != null) {
        this.utcOffset(tZone);
      } else {
        this.utcOffset(0, true);
      }
    }
    return this;
  }

  function hasAlignedHourOffset(input) {
    if (!this.isValid()) {
      return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
  }

  function isDaylightSavingTime() {
    return (
      this.utcOffset() > this.clone().month(0).utcOffset()
      || this.utcOffset() > this.clone().month(5).utcOffset()
    );
  }

  function isDaylightSavingTimeShifted() {
    if (!isUndefined(this._isDSTShifted)) {
      return this._isDSTShifted;
    }

    let c = {};
    let other;

    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
      other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
      this._isDSTShifted =
        this.isValid() && compareArrays(c._a, other.toArray()) > 0;
    } else {
      this._isDSTShifted = false;
    }

    return this._isDSTShifted;
  }

  function isLocal() {
    return this.isValid() ? !this._isUTC : false;
  }

  function isUtcOffset() {
    return this.isValid() ? this._isUTC : false;
  }

  function isUtc() {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
  }

  // ASP.NET json date format regex
  const aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/;
  // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
  // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
  // and further modified to allow for strings containing both week and day
  const isoRegex =
      /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

  function createDuration(input, key) {
    let duration = input;
    // matching against regexp is expensive, do it on demand
    let match = null;
    let sign;
    let ret;
    let diffRes;

    if (isDuration(input)) {
      duration = {
        ms: input._milliseconds,
        d: input._days,
        M: input._months,
      };
    } else if (isNumber(input) || !isNaN(+input)) {
      duration = {};
      if (key) {
        duration[key] = +input;
      } else {
        duration.milliseconds = +input;
      }
    } else if ((match = aspNetRegex.exec(input))) {
      sign = match[1] === '-' ? -1 : 1;
      duration = {
        y: 0,
        d: toInt(match[DATE]) * sign,
        h: toInt(match[HOUR]) * sign,
        m: toInt(match[MINUTE]) * sign,
        s: toInt(match[SECOND]) * sign,
        ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
      };
    } else if ((match = isoRegex.exec(input))) {
      sign = match[1] === '-' ? -1 : 1;
      duration = {
        y: parseIso(match[2], sign),
        M: parseIso(match[3], sign),
        w: parseIso(match[4], sign),
        d: parseIso(match[5], sign),
        h: parseIso(match[6], sign),
        m: parseIso(match[7], sign),
        s: parseIso(match[8], sign),
      };
    } else if (duration == null) {
      // checks for null or undefined
      duration = {};
    } else if (
      typeof duration === 'object'
      && ('from' in duration || 'to' in duration)
    ) {
      diffRes = momentsDifference(
        createLocal(duration.from),
        createLocal(duration.to),
      );

      duration = {};
      duration.ms = diffRes.milliseconds;
      duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
      ret._locale = input._locale;
    }

    if (isDuration(input) && hasOwnProp(input, '_isValid')) {
      ret._isValid = input._isValid;
    }

    return ret;
  }

  createDuration.fn = Duration.prototype;
  createDuration.invalid = createInvalid$1;

  function parseIso(inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    const res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
  }

  function positiveMomentsDifference(base, other) {
    const res = {};

    res.months =
      other.month() - base.month() + (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
      --res.months;
    }

    res.milliseconds = +other - +base.clone().add(res.months, 'M');

    return res;
  }

  function momentsDifference(base, other) {
    let res;
    if (!(base.isValid() && other.isValid())) {
      return { milliseconds: 0, months: 0 };
    }

    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
      res = positiveMomentsDifference(base, other);
    } else {
      res = positiveMomentsDifference(other, base);
      res.milliseconds = -res.milliseconds;
      res.months = -res.months;
    }

    return res;
  }

  // TODO: remove 'name' arg after deprecation is removed
  function createAdder(direction, name) {
    return function (val, period) {
      let dur; let
        tmp;
      // invert the arguments, but complain about it
      if (period !== null && !isNaN(+period)) {
        deprecateSimple(
          name,
          `moment().${
            name
          }(period, number) is deprecated. Please use moment().${
            name
          }(number, period). `
            + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.',
        );
        tmp = val;
        val = period;
        period = tmp;
      }

      dur = createDuration(val, period);
      addSubtract(this, dur, direction);
      return this;
    };
  }

  function addSubtract(mom, duration, isAdding, updateOffset) {
    const milliseconds = duration._milliseconds;
    const days = absRound(duration._days);
    const months = absRound(duration._months);

    if (!mom.isValid()) {
      // No op
      return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (months) {
      setMonth(mom, get(mom, 'Month') + months * isAdding);
    }
    if (days) {
      set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }
    if (milliseconds) {
      mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (updateOffset) {
      hooks.updateOffset(mom, days || months);
    }
  }

  const add = createAdder(1, 'add');
  const subtract = createAdder(-1, 'subtract');

  function isString(input) {
    return typeof input === 'string' || input instanceof String;
  }

  // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
  function isMomentInput(input) {
    return (
      isMoment(input)
      || isDate(input)
      || isString(input)
      || isNumber(input)
      || isNumberOrStringArray(input)
      || isMomentInputObject(input)
      || input === null
      || input === undefined
    );
  }

  function isMomentInputObject(input) {
    const objectTest = isObject(input) && !isObjectEmpty(input);
    let propertyTest = false;
    const properties = [
      'years',
      'year',
      'y',
      'months',
      'month',
      'M',
      'days',
      'day',
      'd',
      'dates',
      'date',
      'D',
      'hours',
      'hour',
      'h',
      'minutes',
      'minute',
      'm',
      'seconds',
      'second',
      's',
      'milliseconds',
      'millisecond',
      'ms',
    ];
    let i;
    let property;
    const propertyLen = properties.length;

    for (i = 0; i < propertyLen; i += 1) {
      property = properties[i];
      propertyTest = propertyTest || hasOwnProp(input, property);
    }

    return objectTest && propertyTest;
  }

  function isNumberOrStringArray(input) {
    const arrayTest = isArray(input);
    let dataTypeTest = false;
    if (arrayTest) {
      dataTypeTest =
        input.filter((item) => !isNumber(item) && isString(input)).length === 0;
    }
    return arrayTest && dataTypeTest;
  }

  function isCalendarSpec(input) {
    const objectTest = isObject(input) && !isObjectEmpty(input);
    let propertyTest = false;
    const properties = [
      'sameDay',
      'nextDay',
      'lastDay',
      'nextWeek',
      'lastWeek',
      'sameElse',
    ];
    let i;
    let property;

    for (i = 0; i < properties.length; i += 1) {
      property = properties[i];
      propertyTest = propertyTest || hasOwnProp(input, property);
    }

    return objectTest && propertyTest;
  }

  function getCalendarFormat(myMoment, now) {
    const diff = myMoment.diff(now, 'days', true);
    return diff < -6
      ? 'sameElse'
      : diff < -1
        ? 'lastWeek'
        : diff < 0
          ? 'lastDay'
          : diff < 1
            ? 'sameDay'
            : diff < 2
              ? 'nextDay'
              : diff < 7
                ? 'nextWeek'
                : 'sameElse';
  }

  function calendar$1(time, formats) {
    // Support for single parameter, formats only overload to the calendar function
    if (arguments.length === 1) {
      if (!arguments[0]) {
        time = undefined;
        formats = undefined;
      } else if (isMomentInput(arguments[0])) {
        time = arguments[0];
        formats = undefined;
      } else if (isCalendarSpec(arguments[0])) {
        formats = arguments[0];
        time = undefined;
      }
    }
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    const now = time || createLocal();
    const sod = cloneWithOffset(now, this).startOf('day');
    const format = hooks.calendarFormat(this, sod) || 'sameElse';
    const output =
        formats
        && (isFunction(formats[format])
          ? formats[format].call(this, now)
          : formats[format]);

    return this.format(
      output || this.localeData().calendar(format, this, createLocal(now)),
    );
  }

  function clone() {
    return new Moment(this);
  }

  function isAfter(input, units) {
    const localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || 'millisecond';
    if (units === 'millisecond') {
      return this.valueOf() > localInput.valueOf();
    }
    return localInput.valueOf() < this.clone().startOf(units).valueOf();
  }

  function isBefore(input, units) {
    const localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || 'millisecond';
    if (units === 'millisecond') {
      return this.valueOf() < localInput.valueOf();
    }
    return this.clone().endOf(units).valueOf() < localInput.valueOf();
  }

  function isBetween(from, to, units, inclusivity) {
    const localFrom = isMoment(from) ? from : createLocal(from);
    const localTo = isMoment(to) ? to : createLocal(to);
    if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
      return false;
    }
    inclusivity = inclusivity || '()';
    return (
      (inclusivity[0] === '('
        ? this.isAfter(localFrom, units)
        : !this.isBefore(localFrom, units))
      && (inclusivity[1] === ')'
        ? this.isBefore(localTo, units)
        : !this.isAfter(localTo, units))
    );
  }

  function isSame(input, units) {
    const localInput = isMoment(input) ? input : createLocal(input);
    let inputMs;
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || 'millisecond';
    if (units === 'millisecond') {
      return this.valueOf() === localInput.valueOf();
    }
    inputMs = localInput.valueOf();
    return (
      this.clone().startOf(units).valueOf() <= inputMs
        && inputMs <= this.clone().endOf(units).valueOf()
    );
  }

  function isSameOrAfter(input, units) {
    return this.isSame(input, units) || this.isAfter(input, units);
  }

  function isSameOrBefore(input, units) {
    return this.isSame(input, units) || this.isBefore(input, units);
  }

  function diff(input, units, asFloat) {
    let that; let zoneDelta; let
      output;

    if (!this.isValid()) {
      return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
      return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = normalizeUnits(units);

    switch (units) {
      case 'year':
        output = monthDiff(this, that) / 12;
        break;
      case 'month':
        output = monthDiff(this, that);
        break;
      case 'quarter':
        output = monthDiff(this, that) / 3;
        break;
      case 'second':
        output = (this - that) / 1e3;
        break; // 1000
      case 'minute':
        output = (this - that) / 6e4;
        break; // 1000 * 60
      case 'hour':
        output = (this - that) / 36e5;
        break; // 1000 * 60 * 60
      case 'day':
        output = (this - that - zoneDelta) / 864e5;
        break; // 1000 * 60 * 60 * 24, negate dst
      case 'week':
        output = (this - that - zoneDelta) / 6048e5;
        break; // 1000 * 60 * 60 * 24 * 7, negate dst
      default:
        output = this - that;
    }

    return asFloat ? output : absFloor(output);
  }

  function monthDiff(a, b) {
    if (a.date() < b.date()) {
      // end-of-month calculations work correct when the start month has more
      // days than the end month.
      return -monthDiff(b, a);
    }
    // difference in months
    const wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month());
    // b is in (anchor - 1 month, anchor + 1 month)
    const anchor = a.clone().add(wholeMonthDiff, 'months');
    let anchor2;
    let adjust;

    if (b - anchor < 0) {
      anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
      // linear across the month
      adjust = (b - anchor) / (anchor - anchor2);
    } else {
      anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
      // linear across the month
      adjust = (b - anchor) / (anchor2 - anchor);
    }

    // check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
  }

  hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
  hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

  function toString() {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
  }

  function toISOString(keepOffset) {
    if (!this.isValid()) {
      return null;
    }
    const utc = keepOffset !== true;
    const m = utc ? this.clone().utc() : this;
    if (m.year() < 0 || m.year() > 9999) {
      return formatMoment(
        m,
        utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ',
      );
    }
    if (isFunction(Date.prototype.toISOString)) {
      // native implementation is ~50x faster, use it when we can
      if (utc) {
        return this.toDate().toISOString();
      }
      return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
        .toISOString()
        .replace('Z', formatMoment(m, 'Z'));
    }
    return formatMoment(
      m,
      utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ',
    );
  }

  /**
   * Return a human readable representation of a moment that can
   * also be evaluated to get a new moment which is the same
   *
   * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
   */
  function inspect() {
    if (!this.isValid()) {
      return `moment.invalid(/* ${this._i} */)`;
    }
    let func = 'moment';
    let zone = '';
    let prefix;
    let year;
    let datetime;
    let suffix;
    if (!this.isLocal()) {
      func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
      zone = 'Z';
    }
    prefix = `[${func}("]`;
    year = this.year() >= 0 && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
    datetime = '-MM-DD[T]HH:mm:ss.SSS';
    suffix = `${zone}[")]`;

    return this.format(prefix + year + datetime + suffix);
  }

  function format(inputString) {
    if (!inputString) {
      inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    const output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
  }

  function from(time, withoutSuffix) {
    if (
      this.isValid()
      && ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
    ) {
      return createDuration({ to: this, from: time })
        .locale(this.locale())
        .humanize(!withoutSuffix);
    }
    return this.localeData().invalidDate();
  }

  function fromNow(withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
  }

  function to(time, withoutSuffix) {
    if (
      this.isValid()
      && ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
    ) {
      return createDuration({ from: this, to: time })
        .locale(this.locale())
        .humanize(!withoutSuffix);
    }
    return this.localeData().invalidDate();
  }

  function toNow(withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
  }

  // If passed a locale key, it will set the locale for this
  // instance.  Otherwise, it will return the locale configuration
  // variables for this instance.
  function locale(key) {
    let newLocaleData;

    if (key === undefined) {
      return this._locale._abbr;
    }
    newLocaleData = getLocale(key);
    if (newLocaleData != null) {
      this._locale = newLocaleData;
    }
    return this;
  }

  const lang = deprecate(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
      if (key === undefined) {
        return this.localeData();
      }
      return this.locale(key);
    },
  );

  function localeData() {
    return this._locale;
  }

  const MS_PER_SECOND = 1000;
  const MS_PER_MINUTE = 60 * MS_PER_SECOND;
  const MS_PER_HOUR = 60 * MS_PER_MINUTE;
  const MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

  // actual modulo - handles negative numbers (for dates before 1970):
  function mod$1(dividend, divisor) {
    return ((dividend % divisor) + divisor) % divisor;
  }

  function localStartOfDate(y, m, d) {
    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
      // preserve leap years using a full 400 year cycle, then reset
      return new Date(y + 400, m, d) - MS_PER_400_YEARS;
    }
    return new Date(y, m, d).valueOf();
  }

  function utcStartOfDate(y, m, d) {
    // Date.UTC remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
      // preserve leap years using a full 400 year cycle, then reset
      return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
    }
    return Date.UTC(y, m, d);
  }

  function startOf(units) {
    let time; let
      startOfDate;
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond' || !this.isValid()) {
      return this;
    }

    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

    switch (units) {
      case 'year':
        time = startOfDate(this.year(), 0, 1);
        break;
      case 'quarter':
        time = startOfDate(this.year(), this.month() - (this.month() % 3), 1);
        break;
      case 'month':
        time = startOfDate(this.year(), this.month(), 1);
        break;
      case 'week':
        time = startOfDate(
          this.year(),
          this.month(),
          this.date() - this.weekday(),
        );
        break;
      case 'isoWeek':
        time = startOfDate(
          this.year(),
          this.month(),
          this.date() - (this.isoWeekday() - 1),
        );
        break;
      case 'day':
      case 'date':
        time = startOfDate(this.year(), this.month(), this.date());
        break;
      case 'hour':
        time = this._d.valueOf();
        time -= mod$1(
          time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
          MS_PER_HOUR,
        );
        break;
      case 'minute':
        time = this._d.valueOf();
        time -= mod$1(time, MS_PER_MINUTE);
        break;
      case 'second':
        time = this._d.valueOf();
        time -= mod$1(time, MS_PER_SECOND);
        break;
    }

    this._d.setTime(time);
    hooks.updateOffset(this, true);
    return this;
  }

  function endOf(units) {
    let time; let
      startOfDate;
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond' || !this.isValid()) {
      return this;
    }

    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

    switch (units) {
      case 'year':
        time = startOfDate(this.year() + 1, 0, 1) - 1;
        break;
      case 'quarter':
        time =
          startOfDate(this.year(), this.month() - (this.month() % 3) + 3, 1)
          - 1;
        break;
      case 'month':
        time = startOfDate(this.year(), this.month() + 1, 1) - 1;
        break;
      case 'week':
        time =
          startOfDate(
            this.year(),
            this.month(),
            this.date() - this.weekday() + 7,
          ) - 1;
        break;
      case 'isoWeek':
        time =
          startOfDate(
            this.year(),
            this.month(),
            this.date() - (this.isoWeekday() - 1) + 7,
          ) - 1;
        break;
      case 'day':
      case 'date':
        time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
        break;
      case 'hour':
        time = this._d.valueOf();
        time
          += MS_PER_HOUR
          - mod$1(
            time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
            MS_PER_HOUR,
          )
          - 1;
        break;
      case 'minute':
        time = this._d.valueOf();
        time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
        break;
      case 'second':
        time = this._d.valueOf();
        time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
        break;
    }

    this._d.setTime(time);
    hooks.updateOffset(this, true);
    return this;
  }

  function valueOf() {
    return this._d.valueOf() - (this._offset || 0) * 60000;
  }

  function unix() {
    return Math.floor(this.valueOf() / 1000);
  }

  function toDate() {
    return new Date(this.valueOf());
  }

  function toArray() {
    const m = this;
    return [
      m.year(),
      m.month(),
      m.date(),
      m.hour(),
      m.minute(),
      m.second(),
      m.millisecond(),
    ];
  }

  function toObject() {
    const m = this;
    return {
      years: m.year(),
      months: m.month(),
      date: m.date(),
      hours: m.hours(),
      minutes: m.minutes(),
      seconds: m.seconds(),
      milliseconds: m.milliseconds(),
    };
  }

  function toJSON() {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
  }

  function isValid$2() {
    return isValid(this);
  }

  function parsingFlags() {
    return extend({}, getParsingFlags(this));
  }

  function invalidAt() {
    return getParsingFlags(this).overflow;
  }

  function creationData() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict,
    };
  }

  addFormatToken('N', 0, 0, 'eraAbbr');
  addFormatToken('NN', 0, 0, 'eraAbbr');
  addFormatToken('NNN', 0, 0, 'eraAbbr');
  addFormatToken('NNNN', 0, 0, 'eraName');
  addFormatToken('NNNNN', 0, 0, 'eraNarrow');

  addFormatToken('y', ['y', 1], 'yo', 'eraYear');
  addFormatToken('y', ['yy', 2], 0, 'eraYear');
  addFormatToken('y', ['yyy', 3], 0, 'eraYear');
  addFormatToken('y', ['yyyy', 4], 0, 'eraYear');

  addRegexToken('N', matchEraAbbr);
  addRegexToken('NN', matchEraAbbr);
  addRegexToken('NNN', matchEraAbbr);
  addRegexToken('NNNN', matchEraName);
  addRegexToken('NNNNN', matchEraNarrow);

  addParseToken(
    ['N', 'NN', 'NNN', 'NNNN', 'NNNNN'],
    (input, array, config, token) => {
      const era = config._locale.erasParse(input, token, config._strict);
      if (era) {
        getParsingFlags(config).era = era;
      } else {
        getParsingFlags(config).invalidEra = input;
      }
    },
  );

  addRegexToken('y', matchUnsigned);
  addRegexToken('yy', matchUnsigned);
  addRegexToken('yyy', matchUnsigned);
  addRegexToken('yyyy', matchUnsigned);
  addRegexToken('yo', matchEraYearOrdinal);

  addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
  addParseToken(['yo'], (input, array, config, token) => {
    let match;
    if (config._locale._eraYearOrdinalRegex) {
      match = input.match(config._locale._eraYearOrdinalRegex);
    }

    if (config._locale.eraYearOrdinalParse) {
      array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
    } else {
      array[YEAR] = parseInt(input, 10);
    }
  });

  function localeEras(m, format) {
    let i;
    let l;
    let date;
    const eras = this._eras || getLocale('en')._eras;
    for (i = 0, l = eras.length; i < l; ++i) {
      switch (typeof eras[i].since) {
        case 'string':
          // truncate time
          date = hooks(eras[i].since).startOf('day');
          eras[i].since = date.valueOf();
          break;
      }

      switch (typeof eras[i].until) {
        case 'undefined':
          eras[i].until = +Infinity;
          break;
        case 'string':
          // truncate time
          date = hooks(eras[i].until).startOf('day').valueOf();
          eras[i].until = date.valueOf();
          break;
      }
    }
    return eras;
  }

  function localeErasParse(eraName, format, strict) {
    let i;
    let l;
    const eras = this.eras();
    let name;
    let abbr;
    let narrow;
    eraName = eraName.toUpperCase();

    for (i = 0, l = eras.length; i < l; ++i) {
      name = eras[i].name.toUpperCase();
      abbr = eras[i].abbr.toUpperCase();
      narrow = eras[i].narrow.toUpperCase();

      if (strict) {
        switch (format) {
          case 'N':
          case 'NN':
          case 'NNN':
            if (abbr === eraName) {
              return eras[i];
            }
            break;

          case 'NNNN':
            if (name === eraName) {
              return eras[i];
            }
            break;

          case 'NNNNN':
            if (narrow === eraName) {
              return eras[i];
            }
            break;
        }
      } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
        return eras[i];
      }
    }
  }

  function localeErasConvertYear(era, year) {
    const dir = era.since <= era.until ? +1 : -1;
    if (year === undefined) {
      return hooks(era.since).year();
    }
    return hooks(era.since).year() + (year - era.offset) * dir;
  }

  function getEraName() {
    let i;
    let l;
    let val;
    const eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      // truncate time
      val = this.clone().startOf('day').valueOf();

      if (eras[i].since <= val && val <= eras[i].until) {
        return eras[i].name;
      }
      if (eras[i].until <= val && val <= eras[i].since) {
        return eras[i].name;
      }
    }

    return '';
  }

  function getEraNarrow() {
    let i;
    let l;
    let val;
    const eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      // truncate time
      val = this.clone().startOf('day').valueOf();

      if (eras[i].since <= val && val <= eras[i].until) {
        return eras[i].narrow;
      }
      if (eras[i].until <= val && val <= eras[i].since) {
        return eras[i].narrow;
      }
    }

    return '';
  }

  function getEraAbbr() {
    let i;
    let l;
    let val;
    const eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      // truncate time
      val = this.clone().startOf('day').valueOf();

      if (eras[i].since <= val && val <= eras[i].until) {
        return eras[i].abbr;
      }
      if (eras[i].until <= val && val <= eras[i].since) {
        return eras[i].abbr;
      }
    }

    return '';
  }

  function getEraYear() {
    let i;
    let l;
    let dir;
    let val;
    const eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      dir = eras[i].since <= eras[i].until ? +1 : -1;

      // truncate time
      val = this.clone().startOf('day').valueOf();

      if (
        (eras[i].since <= val && val <= eras[i].until)
        || (eras[i].until <= val && val <= eras[i].since)
      ) {
        return (
          (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset
        );
      }
    }

    return this.year();
  }

  function erasNameRegex(isStrict) {
    if (!hasOwnProp(this, '_erasNameRegex')) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasNameRegex : this._erasRegex;
  }

  function erasAbbrRegex(isStrict) {
    if (!hasOwnProp(this, '_erasAbbrRegex')) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasAbbrRegex : this._erasRegex;
  }

  function erasNarrowRegex(isStrict) {
    if (!hasOwnProp(this, '_erasNarrowRegex')) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasNarrowRegex : this._erasRegex;
  }

  function matchEraAbbr(isStrict, locale) {
    return locale.erasAbbrRegex(isStrict);
  }

  function matchEraName(isStrict, locale) {
    return locale.erasNameRegex(isStrict);
  }

  function matchEraNarrow(isStrict, locale) {
    return locale.erasNarrowRegex(isStrict);
  }

  function matchEraYearOrdinal(isStrict, locale) {
    return locale._eraYearOrdinalRegex || matchUnsigned;
  }

  function computeErasParse() {
    const abbrPieces = [];
    const namePieces = [];
    const narrowPieces = [];
    const mixedPieces = [];
    let i;
    let l;
    const eras = this.eras();

    for (i = 0, l = eras.length; i < l; ++i) {
      namePieces.push(regexEscape(eras[i].name));
      abbrPieces.push(regexEscape(eras[i].abbr));
      narrowPieces.push(regexEscape(eras[i].narrow));

      mixedPieces.push(regexEscape(eras[i].name));
      mixedPieces.push(regexEscape(eras[i].abbr));
      mixedPieces.push(regexEscape(eras[i].narrow));
    }

    this._erasRegex = new RegExp(`^(${mixedPieces.join('|')})`, 'i');
    this._erasNameRegex = new RegExp(`^(${namePieces.join('|')})`, 'i');
    this._erasAbbrRegex = new RegExp(`^(${abbrPieces.join('|')})`, 'i');
    this._erasNarrowRegex = new RegExp(
      `^(${narrowPieces.join('|')})`,
      'i',
    );
  }

  // FORMATTING

  addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
  });

  addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
  });

  function addWeekYearFormatToken(token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
  }

  addWeekYearFormatToken('gggg', 'weekYear');
  addWeekYearFormatToken('ggggg', 'weekYear');
  addWeekYearFormatToken('GGGG', 'isoWeekYear');
  addWeekYearFormatToken('GGGGG', 'isoWeekYear');

  // ALIASES

  addUnitAlias('weekYear', 'gg');
  addUnitAlias('isoWeekYear', 'GG');

  // PRIORITY

  addUnitPriority('weekYear', 1);
  addUnitPriority('isoWeekYear', 1);

  // PARSING

  addRegexToken('G', matchSigned);
  addRegexToken('g', matchSigned);
  addRegexToken('GG', match1to2, match2);
  addRegexToken('gg', match1to2, match2);
  addRegexToken('GGGG', match1to4, match4);
  addRegexToken('gggg', match1to4, match4);
  addRegexToken('GGGGG', match1to6, match6);
  addRegexToken('ggggg', match1to6, match6);

  addWeekParseToken(
    ['gggg', 'ggggg', 'GGGG', 'GGGGG'],
    (input, week, config, token) => {
      week[token.substr(0, 2)] = toInt(input);
    },
  );

  addWeekParseToken(['gg', 'GG'], (input, week, config, token) => {
    week[token] = hooks.parseTwoDigitYear(input);
  });

  // MOMENTS

  function getSetWeekYear(input) {
    return getSetWeekYearHelper.call(
      this,
      input,
      this.week(),
      this.weekday(),
      this.localeData()._week.dow,
      this.localeData()._week.doy,
    );
  }

  function getSetISOWeekYear(input) {
    return getSetWeekYearHelper.call(
      this,
      input,
      this.isoWeek(),
      this.isoWeekday(),
      1,
      4,
    );
  }

  function getISOWeeksInYear() {
    return weeksInYear(this.year(), 1, 4);
  }

  function getISOWeeksInISOWeekYear() {
    return weeksInYear(this.isoWeekYear(), 1, 4);
  }

  function getWeeksInYear() {
    const weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
  }

  function getWeeksInWeekYear() {
    const weekInfo = this.localeData()._week;
    return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
  }

  function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    let weeksTarget;
    if (input == null) {
      return weekOfYear(this, dow, doy).year;
    }
    weeksTarget = weeksInYear(input, dow, doy);
    if (week > weeksTarget) {
      week = weeksTarget;
    }
    return setWeekAll.call(this, input, week, weekday, dow, doy);
  }

  function setWeekAll(weekYear, week, weekday, dow, doy) {
    const dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
    const date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
  }

  // FORMATTING

  addFormatToken('Q', 0, 'Qo', 'quarter');

  // ALIASES

  addUnitAlias('quarter', 'Q');

  // PRIORITY

  addUnitPriority('quarter', 7);

  // PARSING

  addRegexToken('Q', match1);
  addParseToken('Q', (input, array) => {
    array[MONTH] = (toInt(input) - 1) * 3;
  });

  // MOMENTS

  function getSetQuarter(input) {
    return input == null
      ? Math.ceil((this.month() + 1) / 3)
      : this.month((input - 1) * 3 + (this.month() % 3));
  }

  // FORMATTING

  addFormatToken('D', ['DD', 2], 'Do', 'date');

  // ALIASES

  addUnitAlias('date', 'D');

  // PRIORITY
  addUnitPriority('date', 9);

  // PARSING

  addRegexToken('D', match1to2);
  addRegexToken('DD', match1to2, match2);
  addRegexToken('Do', (isStrict, locale) =>
    // TODO: Remove "ordinalParse" fallback in next major release.
    isStrict
      ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
      : locale._dayOfMonthOrdinalParseLenient,
  );

  addParseToken(['D', 'DD'], DATE);
  addParseToken('Do', (input, array) => {
    array[DATE] = toInt(input.match(match1to2)[0]);
  });

  // MOMENTS

  const getSetDayOfMonth = makeGetSet('Date', true);

  // FORMATTING

  addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

  // ALIASES

  addUnitAlias('dayOfYear', 'DDD');

  // PRIORITY
  addUnitPriority('dayOfYear', 4);

  // PARSING

  addRegexToken('DDD', match1to3);
  addRegexToken('DDDD', match3);
  addParseToken(['DDD', 'DDDD'], (input, array, config) => {
    config._dayOfYear = toInt(input);
  });

  // HELPERS

  // MOMENTS

  function getSetDayOfYear(input) {
    const dayOfYear =
      Math.round(
        (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5,
      ) + 1;
    return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
  }

  // FORMATTING

  addFormatToken('m', ['mm', 2], 0, 'minute');

  // ALIASES

  addUnitAlias('minute', 'm');

  // PRIORITY

  addUnitPriority('minute', 14);

  // PARSING

  addRegexToken('m', match1to2);
  addRegexToken('mm', match1to2, match2);
  addParseToken(['m', 'mm'], MINUTE);

  // MOMENTS

  const getSetMinute = makeGetSet('Minutes', false);

  // FORMATTING

  addFormatToken('s', ['ss', 2], 0, 'second');

  // ALIASES

  addUnitAlias('second', 's');

  // PRIORITY

  addUnitPriority('second', 15);

  // PARSING

  addRegexToken('s', match1to2);
  addRegexToken('ss', match1to2, match2);
  addParseToken(['s', 'ss'], SECOND);

  // MOMENTS

  const getSetSecond = makeGetSet('Seconds', false);

  // FORMATTING

  addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
  });

  addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
  });

  addFormatToken(0, ['SSS', 3], 0, 'millisecond');
  addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
  });
  addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
  });
  addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
  });
  addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
  });
  addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
  });
  addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
  });

  // ALIASES

  addUnitAlias('millisecond', 'ms');

  // PRIORITY

  addUnitPriority('millisecond', 16);

  // PARSING

  addRegexToken('S', match1to3, match1);
  addRegexToken('SS', match1to3, match2);
  addRegexToken('SSS', match1to3, match3);

  let token; let
    getSetMillisecond;
  for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
  }

  function parseMs(input, array) {
    array[MILLISECOND] = toInt((`0.${input}`) * 1000);
  }

  for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
  }

  getSetMillisecond = makeGetSet('Milliseconds', false);

  // FORMATTING

  addFormatToken('z', 0, 0, 'zoneAbbr');
  addFormatToken('zz', 0, 0, 'zoneName');

  // MOMENTS

  function getZoneAbbr() {
    return this._isUTC ? 'UTC' : '';
  }

  function getZoneName() {
    return this._isUTC ? 'Coordinated Universal Time' : '';
  }

  const proto = Moment.prototype;

  proto.add = add;
  proto.calendar = calendar$1;
  proto.clone = clone;
  proto.diff = diff;
  proto.endOf = endOf;
  proto.format = format;
  proto.from = from;
  proto.fromNow = fromNow;
  proto.to = to;
  proto.toNow = toNow;
  proto.get = stringGet;
  proto.invalidAt = invalidAt;
  proto.isAfter = isAfter;
  proto.isBefore = isBefore;
  proto.isBetween = isBetween;
  proto.isSame = isSame;
  proto.isSameOrAfter = isSameOrAfter;
  proto.isSameOrBefore = isSameOrBefore;
  proto.isValid = isValid$2;
  proto.lang = lang;
  proto.locale = locale;
  proto.localeData = localeData;
  proto.max = prototypeMax;
  proto.min = prototypeMin;
  proto.parsingFlags = parsingFlags;
  proto.set = stringSet;
  proto.startOf = startOf;
  proto.subtract = subtract;
  proto.toArray = toArray;
  proto.toObject = toObject;
  proto.toDate = toDate;
  proto.toISOString = toISOString;
  proto.inspect = inspect;
  if (typeof Symbol !== 'undefined' && Symbol.for != null) {
    proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
      return `Moment<${this.format()}>`;
    };
  }
  proto.toJSON = toJSON;
  proto.toString = toString;
  proto.unix = unix;
  proto.valueOf = valueOf;
  proto.creationData = creationData;
  proto.eraName = getEraName;
  proto.eraNarrow = getEraNarrow;
  proto.eraAbbr = getEraAbbr;
  proto.eraYear = getEraYear;
  proto.year = getSetYear;
  proto.isLeapYear = getIsLeapYear;
  proto.weekYear = getSetWeekYear;
  proto.isoWeekYear = getSetISOWeekYear;
  proto.quarter = proto.quarters = getSetQuarter;
  proto.month = getSetMonth;
  proto.daysInMonth = getDaysInMonth;
  proto.week = proto.weeks = getSetWeek;
  proto.isoWeek = proto.isoWeeks = getSetISOWeek;
  proto.weeksInYear = getWeeksInYear;
  proto.weeksInWeekYear = getWeeksInWeekYear;
  proto.isoWeeksInYear = getISOWeeksInYear;
  proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
  proto.date = getSetDayOfMonth;
  proto.day = proto.days = getSetDayOfWeek;
  proto.weekday = getSetLocaleDayOfWeek;
  proto.isoWeekday = getSetISODayOfWeek;
  proto.dayOfYear = getSetDayOfYear;
  proto.hour = proto.hours = getSetHour;
  proto.minute = proto.minutes = getSetMinute;
  proto.second = proto.seconds = getSetSecond;
  proto.millisecond = proto.milliseconds = getSetMillisecond;
  proto.utcOffset = getSetOffset;
  proto.utc = setOffsetToUTC;
  proto.local = setOffsetToLocal;
  proto.parseZone = setOffsetToParsedOffset;
  proto.hasAlignedHourOffset = hasAlignedHourOffset;
  proto.isDST = isDaylightSavingTime;
  proto.isLocal = isLocal;
  proto.isUtcOffset = isUtcOffset;
  proto.isUtc = isUtc;
  proto.isUTC = isUtc;
  proto.zoneAbbr = getZoneAbbr;
  proto.zoneName = getZoneName;
  proto.dates = deprecate(
    'dates accessor is deprecated. Use date instead.',
    getSetDayOfMonth,
  );
  proto.months = deprecate(
    'months accessor is deprecated. Use month instead',
    getSetMonth,
  );
  proto.years = deprecate(
    'years accessor is deprecated. Use year instead',
    getSetYear,
  );
  proto.zone = deprecate(
    'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
    getSetZone,
  );
  proto.isDSTShifted = deprecate(
    'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
    isDaylightSavingTimeShifted,
  );

  function createUnix(input) {
    return createLocal(input * 1000);
  }

  function createInZone() {
    return createLocal.apply(null, arguments).parseZone();
  }

  function preParsePostFormat(string) {
    return string;
  }

  const proto$1 = Locale.prototype;

  proto$1.calendar = calendar;
  proto$1.longDateFormat = longDateFormat;
  proto$1.invalidDate = invalidDate;
  proto$1.ordinal = ordinal;
  proto$1.preparse = preParsePostFormat;
  proto$1.postformat = preParsePostFormat;
  proto$1.relativeTime = relativeTime;
  proto$1.pastFuture = pastFuture;
  proto$1.set = set;
  proto$1.eras = localeEras;
  proto$1.erasParse = localeErasParse;
  proto$1.erasConvertYear = localeErasConvertYear;
  proto$1.erasAbbrRegex = erasAbbrRegex;
  proto$1.erasNameRegex = erasNameRegex;
  proto$1.erasNarrowRegex = erasNarrowRegex;

  proto$1.months = localeMonths;
  proto$1.monthsShort = localeMonthsShort;
  proto$1.monthsParse = localeMonthsParse;
  proto$1.monthsRegex = monthsRegex;
  proto$1.monthsShortRegex = monthsShortRegex;
  proto$1.week = localeWeek;
  proto$1.firstDayOfYear = localeFirstDayOfYear;
  proto$1.firstDayOfWeek = localeFirstDayOfWeek;

  proto$1.weekdays = localeWeekdays;
  proto$1.weekdaysMin = localeWeekdaysMin;
  proto$1.weekdaysShort = localeWeekdaysShort;
  proto$1.weekdaysParse = localeWeekdaysParse;

  proto$1.weekdaysRegex = weekdaysRegex;
  proto$1.weekdaysShortRegex = weekdaysShortRegex;
  proto$1.weekdaysMinRegex = weekdaysMinRegex;

  proto$1.isPM = localeIsPM;
  proto$1.meridiem = localeMeridiem;

  function get$1(format, index, field, setter) {
    const locale = getLocale();
    const utc = createUTC().set(setter, index);
    return locale[field](utc, format);
  }

  function listMonthsImpl(format, index, field) {
    if (isNumber(format)) {
      index = format;
      format = undefined;
    }

    format = format || '';

    if (index != null) {
      return get$1(format, index, field, 'month');
    }

    let i;
    const out = [];
    for (i = 0; i < 12; i++) {
      out[i] = get$1(format, i, field, 'month');
    }
    return out;
  }

  // ()
  // (5)
  // (fmt, 5)
  // (fmt)
  // (true)
  // (true, 5)
  // (true, fmt, 5)
  // (true, fmt)
  function listWeekdaysImpl(localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
      if (isNumber(format)) {
        index = format;
        format = undefined;
      }

      format = format || '';
    } else {
      format = localeSorted;
      index = format;
      localeSorted = false;

      if (isNumber(format)) {
        index = format;
        format = undefined;
      }

      format = format || '';
    }

    const locale = getLocale();
    const shift = localeSorted ? locale._week.dow : 0;
    let i;
    const out = [];

    if (index != null) {
      return get$1(format, (index + shift) % 7, field, 'day');
    }

    for (i = 0; i < 7; i++) {
      out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }
    return out;
  }

  function listMonths(format, index) {
    return listMonthsImpl(format, index, 'months');
  }

  function listMonthsShort(format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
  }

  function listWeekdays(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
  }

  function listWeekdaysShort(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
  }

  function listWeekdaysMin(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
  }

  getSetGlobalLocale('en', {
    eras: [
      {
        since: '0001-01-01',
        until: +Infinity,
        offset: 1,
        name: 'Anno Domini',
        narrow: 'AD',
        abbr: 'AD',
      },
      {
        since: '0000-12-31',
        until: -Infinity,
        offset: 1,
        name: 'Before Christ',
        narrow: 'BC',
        abbr: 'BC',
      },
    ],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal (number) {
      const b = number % 10;
      const output =
          toInt((number % 100) / 10) === 1
            ? 'th'
            : b === 1
              ? 'st'
              : b === 2
                ? 'nd'
                : b === 3
                  ? 'rd'
                  : 'th';
      return number + output;
    },
  });

  // Side effect imports

  hooks.lang = deprecate(
    'moment.lang is deprecated. Use moment.locale instead.',
    getSetGlobalLocale,
  );
  hooks.langData = deprecate(
    'moment.langData is deprecated. Use moment.localeData instead.',
    getLocale,
  );

  const mathAbs = Math.abs;

  function abs() {
    const data = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days = mathAbs(this._days);
    this._months = mathAbs(this._months);

    data.milliseconds = mathAbs(data.milliseconds);
    data.seconds = mathAbs(data.seconds);
    data.minutes = mathAbs(data.minutes);
    data.hours = mathAbs(data.hours);
    data.months = mathAbs(data.months);
    data.years = mathAbs(data.years);

    return this;
  }

  function addSubtract$1(duration, input, value, direction) {
    const other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days += direction * other._days;
    duration._months += direction * other._months;

    return duration._bubble();
  }

  // supports only 2.0-style add(1, 's') or add(duration)
  function add$1(input, value) {
    return addSubtract$1(this, input, value, 1);
  }

  // supports only 2.0-style subtract(1, 's') or subtract(duration)
  function subtract$1(input, value) {
    return addSubtract$1(this, input, value, -1);
  }

  function absCeil(number) {
    if (number < 0) {
      return Math.floor(number);
    }
    return Math.ceil(number);
  }

  function bubble() {
    let milliseconds = this._milliseconds;
    let days = this._days;
    let months = this._months;
    const data = this._data;
    let seconds;
    let minutes;
    let hours;
    let years;
    let monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (
      !(
        (milliseconds >= 0 && days >= 0 && months >= 0)
        || (milliseconds <= 0 && days <= 0 && months <= 0)
      )
    ) {
      milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
      days = 0;
      months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds = absFloor(milliseconds / 1000);
    data.seconds = seconds % 60;

    minutes = absFloor(seconds / 60);
    data.minutes = minutes % 60;

    hours = absFloor(minutes / 60);
    data.hours = hours % 24;

    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    data.days = days;
    data.months = months;
    data.years = years;

    return this;
  }

  function daysToMonths(days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return (days * 4800) / 146097;
  }

  function monthsToDays(months) {
    // the reverse of daysToMonths
    return (months * 146097) / 4800;
  }

  function as(units) {
    if (!this.isValid()) {
      return NaN;
    }
    let days;
    let months;
    const milliseconds = this._milliseconds;

    units = normalizeUnits(units);

    if (units === 'month' || units === 'quarter' || units === 'year') {
      days = this._days + milliseconds / 864e5;
      months = this._months + daysToMonths(days);
      switch (units) {
        case 'month':
          return months;
        case 'quarter':
          return months / 3;
        case 'year':
          return months / 12;
      }
    } else {
      // handle milliseconds separately because of floating point math errors (issue #1867)
      days = this._days + Math.round(monthsToDays(this._months));
      switch (units) {
        case 'week':
          return days / 7 + milliseconds / 6048e5;
        case 'day':
          return days + milliseconds / 864e5;
        case 'hour':
          return days * 24 + milliseconds / 36e5;
        case 'minute':
          return days * 1440 + milliseconds / 6e4;
        case 'second':
          return days * 86400 + milliseconds / 1000;
        // Math.floor prevents floating point math errors here
        case 'millisecond':
          return Math.floor(days * 864e5) + milliseconds;
        default:
          throw new Error(`Unknown unit ${units}`);
      }
    }
  }

  // TODO: Use this.as('ms')?
  function valueOf$1() {
    if (!this.isValid()) {
      return NaN;
    }
    return (
      this._milliseconds
      + this._days * 864e5
      + (this._months % 12) * 2592e6
      + toInt(this._months / 12) * 31536e6
    );
  }

  function makeAs(alias) {
    return function () {
      return this.as(alias);
    };
  }

  const asMilliseconds = makeAs('ms');
  const asSeconds = makeAs('s');
  const asMinutes = makeAs('m');
  const asHours = makeAs('h');
  const asDays = makeAs('d');
  const asWeeks = makeAs('w');
  const asMonths = makeAs('M');
  const asQuarters = makeAs('Q');
  const asYears = makeAs('y');

  function clone$1() {
    return createDuration(this);
  }

  function get$2(units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[`${units}s`]() : NaN;
  }

  function makeGetter(name) {
    return function () {
      return this.isValid() ? this._data[name] : NaN;
    };
  }

  const milliseconds = makeGetter('milliseconds');
  const seconds = makeGetter('seconds');
  const minutes = makeGetter('minutes');
  const hours = makeGetter('hours');
  const days = makeGetter('days');
  const months = makeGetter('months');
  const years = makeGetter('years');

  function weeks() {
    return absFloor(this.days() / 7);
  }

  let round = Math.round;
  const thresholds = {
    ss: 44, // a few seconds to seconds
    s: 45, // seconds to minute
    m: 45, // minutes to hour
    h: 22, // hours to day
    d: 26, // days to month/week
    w: null, // weeks to month
    M: 11, // months to year
  };

  // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
  function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
  }

  function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
    const duration = createDuration(posNegDuration).abs();
    const seconds = round(duration.as('s'));
    const minutes = round(duration.as('m'));
    const hours = round(duration.as('h'));
    const days = round(duration.as('d'));
    const months = round(duration.as('M'));
    const weeks = round(duration.as('w'));
    const years = round(duration.as('y'));
    let a =
        (seconds <= thresholds.ss && ['s', seconds])
        || (seconds < thresholds.s && ['ss', seconds])
        || (minutes <= 1 && ['m'])
        || (minutes < thresholds.m && ['mm', minutes])
        || (hours <= 1 && ['h'])
        || (hours < thresholds.h && ['hh', hours])
        || (days <= 1 && ['d'])
        || (days < thresholds.d && ['dd', days]);

    if (thresholds.w != null) {
      a = a || (weeks <= 1 && ['w']) || (weeks < thresholds.w && ['ww', weeks]);
    }
    a = a
      || (months <= 1 && ['M'])
      || (months < thresholds.M && ['MM', months])
      || (years <= 1 && ['y']) || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
  }

  // This function allows you to set the rounding function for relative time strings
  function getSetRelativeTimeRounding(roundingFunction) {
    if (roundingFunction === undefined) {
      return round;
    }
    if (typeof roundingFunction === 'function') {
      round = roundingFunction;
      return true;
    }
    return false;
  }

  // This function allows you to set a threshold for relative time strings
  function getSetRelativeTimeThreshold(threshold, limit) {
    if (thresholds[threshold] === undefined) {
      return false;
    }
    if (limit === undefined) {
      return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
      thresholds.ss = limit - 1;
    }
    return true;
  }

  function humanize(argWithSuffix, argThresholds) {
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }

    let withSuffix = false;
    let th = thresholds;
    let locale;
    let output;

    if (typeof argWithSuffix === 'object') {
      argThresholds = argWithSuffix;
      argWithSuffix = false;
    }
    if (typeof argWithSuffix === 'boolean') {
      withSuffix = argWithSuffix;
    }
    if (typeof argThresholds === 'object') {
      th = { ...thresholds, ...argThresholds };
      if (argThresholds.s != null && argThresholds.ss == null) {
        th.ss = argThresholds.s - 1;
      }
    }

    locale = this.localeData();
    output = relativeTime$1(this, !withSuffix, th, locale);

    if (withSuffix) {
      output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
  }

  const abs$1 = Math.abs;

  function sign(x) {
    return (x > 0) - (x < 0) || +x;
  }

  function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }

    let seconds = abs$1(this._milliseconds) / 1000;
    const days = abs$1(this._days);
    let months = abs$1(this._months);
    let minutes;
    let hours;
    let years;
    let s;
    const total = this.asSeconds();
    let totalSign;
    let ymSign;
    let daysSign;
    let hmsSign;

    if (!total) {
      // this is the same as C#'s (Noda) and python (isodate)...
      // but not other JS (goog.date)
      return 'P0D';
    }

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes = absFloor(seconds / 60);
    hours = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

    totalSign = total < 0 ? '-' : '';
    ymSign = sign(this._months) !== sign(total) ? '-' : '';
    daysSign = sign(this._days) !== sign(total) ? '-' : '';
    hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

    return (
      `${totalSign
      }P${
        years ? `${ymSign + years}Y` : ''
      }${months ? `${ymSign + months}M` : ''
      }${days ? `${daysSign + days}D` : ''
      }${hours || minutes || seconds ? 'T' : ''
      }${hours ? `${hmsSign + hours}H` : ''
      }${minutes ? `${hmsSign + minutes}M` : ''
      }${seconds ? `${hmsSign + s}S` : ''}`
    );
  }

  const proto$2 = Duration.prototype;

  proto$2.isValid = isValid$1;
  proto$2.abs = abs;
  proto$2.add = add$1;
  proto$2.subtract = subtract$1;
  proto$2.as = as;
  proto$2.asMilliseconds = asMilliseconds;
  proto$2.asSeconds = asSeconds;
  proto$2.asMinutes = asMinutes;
  proto$2.asHours = asHours;
  proto$2.asDays = asDays;
  proto$2.asWeeks = asWeeks;
  proto$2.asMonths = asMonths;
  proto$2.asQuarters = asQuarters;
  proto$2.asYears = asYears;
  proto$2.valueOf = valueOf$1;
  proto$2._bubble = bubble;
  proto$2.clone = clone$1;
  proto$2.get = get$2;
  proto$2.milliseconds = milliseconds;
  proto$2.seconds = seconds;
  proto$2.minutes = minutes;
  proto$2.hours = hours;
  proto$2.days = days;
  proto$2.weeks = weeks;
  proto$2.months = months;
  proto$2.years = years;
  proto$2.humanize = humanize;
  proto$2.toISOString = toISOString$1;
  proto$2.toString = toISOString$1;
  proto$2.toJSON = toISOString$1;
  proto$2.locale = locale;
  proto$2.localeData = localeData;

  proto$2.toIsoString = deprecate(
    'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
    toISOString$1,
  );
  proto$2.lang = lang;

  // FORMATTING

  addFormatToken('X', 0, 0, 'unix');
  addFormatToken('x', 0, 0, 'valueOf');

  // PARSING

  addRegexToken('x', matchSigned);
  addRegexToken('X', matchTimestamp);
  addParseToken('X', (input, array, config) => {
    config._d = new Date(parseFloat(input) * 1000);
  });
  addParseToken('x', (input, array, config) => {
    config._d = new Date(toInt(input));
  });

  //! moment.js

  hooks.version = '2.29.4';

  setHookCallback(createLocal);

  hooks.fn = proto;
  hooks.min = min;
  hooks.max = max;
  hooks.now = now;
  hooks.utc = createUTC;
  hooks.unix = createUnix;
  hooks.months = listMonths;
  hooks.isDate = isDate;
  hooks.locale = getSetGlobalLocale;
  hooks.invalid = createInvalid;
  hooks.duration = createDuration;
  hooks.isMoment = isMoment;
  hooks.weekdays = listWeekdays;
  hooks.parseZone = createInZone;
  hooks.localeData = getLocale;
  hooks.isDuration = isDuration;
  hooks.monthsShort = listMonthsShort;
  hooks.weekdaysMin = listWeekdaysMin;
  hooks.defineLocale = defineLocale;
  hooks.updateLocale = updateLocale;
  hooks.locales = listLocales;
  hooks.weekdaysShort = listWeekdaysShort;
  hooks.normalizeUnits = normalizeUnits;
  hooks.relativeTimeRounding = getSetRelativeTimeRounding;
  hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
  hooks.calendarFormat = getCalendarFormat;
  hooks.prototype = proto;

  // currently HTML5 input type only supports 24-hour formats
  hooks.HTML5_FMT = {
    DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
    DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
    DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
    DATE: 'YYYY-MM-DD', // <input type="date" />
    TIME: 'HH:mm', // <input type="time" />
    TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
    TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
    WEEK: 'GGGG-[W]WW', // <input type="week" />
    MONTH: 'YYYY-MM', // <input type="month" />
  };

  return hooks;
});

//! moment-timezone.js
//! version : 0.5.25
//! Copyright (c) JS Foundation and other contributors
//! license : MIT
//! github.com/moment/moment-timezone

(function (root, factory) {
  'use strict';

  /* global define */
  if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('moment')); // Node
  } else if (typeof define === 'function' && define.amd) {
    define(['moment'], factory); // AMD
  } else {
    factory(root.moment); // Browser
  }
})(this, (moment) => {
  'use strict';

  // Do not load moment-timezone a second time.
  // if (moment.tz !== undefined) {
  // 	logError('Moment Timezone ' + moment.tz.version + ' was already loaded ' + (moment.tz.dataVersion ? 'with data from ' : 'without any data') + moment.tz.dataVersion);
  // 	return moment;
  // }

  const VERSION = '0.5.25';
  const zones = {};
  const links = {};
  const names = {};
  const guesses = {};
  let cachedGuess;

  if (!moment || typeof moment.version !== 'string') {
    logError(
      'Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/',
    );
  }

  const momentVersion = moment.version.split('.');
  const major = +momentVersion[0];
  const minor = +momentVersion[1];

  // Moment.js version check
  if (major < 2 || (major === 2 && minor < 6)) {
    logError(
      `Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js ${
        moment.version
      }. See momentjs.com`,
    );
  }

  /** **********************************
     Unpacking
     *********************************** */

  function charCodeToInt(charCode) {
    if (charCode > 96) {
      return charCode - 87;
    } if (charCode > 64) {
      return charCode - 29;
    }
    return charCode - 48;
  }

  function unpackBase60(string) {
    let i = 0;
    const parts = string.split('.');
    const whole = parts[0];
    const fractional = parts[1] || '';
    let multiplier = 1;
    let num;
    let out = 0;
    let sign = 1;

    // handle negative numbers
    if (string.charCodeAt(0) === 45) {
      i = 1;
      sign = -1;
    }

    // handle digits before the decimal
    for (i; i < whole.length; i++) {
      num = charCodeToInt(whole.charCodeAt(i));
      out = 60 * out + num;
    }

    // handle digits after the decimal
    for (i = 0; i < fractional.length; i++) {
      multiplier /= 60;
      num = charCodeToInt(fractional.charCodeAt(i));
      out += num * multiplier;
    }

    return out * sign;
  }

  function arrayToInt(array) {
    for (let i = 0; i < array.length; i++) {
      array[i] = unpackBase60(array[i]);
    }
  }

  function intToUntil(array, length) {
    for (let i = 0; i < length; i++) {
      array[i] = Math.round((array[i - 1] || 0) + array[i] * 60000); // minutes to milliseconds
    }

    array[length - 1] = Infinity;
  }

  function mapIndices(source, indices) {
    const out = [];
    let i;

    for (i = 0; i < indices.length; i++) {
      out[i] = source[indices[i]];
    }

    return out;
  }

  function unpack(string) {
    const data = string.split('|');
    const offsets = data[2].split(' ');
    const indices = data[3].split('');
    const untils = data[4].split(' ');

    arrayToInt(offsets);
    arrayToInt(indices);
    arrayToInt(untils);

    intToUntil(untils, indices.length);

    return {
      name: data[0],
      abbrs: mapIndices(data[1].split(' '), indices),
      offsets: mapIndices(offsets, indices),
      untils,
      population: data[5] | 0,
    };
  }

  /** **********************************
     Zone object
     *********************************** */

  function Zone(packedString) {
    if (packedString) {
      this._set(unpack(packedString));
    }
  }

  Zone.prototype = {
    _set (unpacked) {
      this.name = unpacked.name;
      this.abbrs = unpacked.abbrs;
      this.untils = unpacked.untils;
      this.offsets = unpacked.offsets;
      this.population = unpacked.population;
    },

    _index (timestamp) {
      const target = +timestamp;
      const untils = this.untils;
      let i;

      for (i = 0; i < untils.length; i++) {
        if (target < untils[i]) {
          return i;
        }
      }
    },

    parse (timestamp) {
      const target = +timestamp;
      const offsets = this.offsets;
      const untils = this.untils;
      const max = untils.length - 1;
      let offset;
      let offsetNext;
      let offsetPrev;
      let i;

      for (i = 0; i < max; i++) {
        offset = offsets[i];
        offsetNext = offsets[i + 1];
        offsetPrev = offsets[i ? i - 1 : i];

        if (offset < offsetNext && tz.moveAmbiguousForward) {
          offset = offsetNext;
        } else if (offset > offsetPrev && tz.moveInvalidForward) {
          offset = offsetPrev;
        }

        if (target < untils[i] - offset * 60000) {
          return offsets[i];
        }
      }

      return offsets[max];
    },

    abbr (mom) {
      return this.abbrs[this._index(mom)];
    },

    offset (mom) {
      logError('zone.offset has been deprecated in favor of zone.utcOffset');
      return this.offsets[this._index(mom)];
    },

    utcOffset (mom) {
      return this.offsets[this._index(mom)];
    },
  };

  /** **********************************
     Current Timezone
     *********************************** */

  function OffsetAt(at) {
    const timeString = at.toTimeString();
    let abbr = timeString.match(/\([a-z ]+\)/i);
    if (abbr && abbr[0]) {
      // 17:56:31 GMT-0600 (CST)
      // 17:56:31 GMT-0600 (Central Standard Time)
      abbr = abbr[0].match(/[A-Z]/g);
      abbr = abbr ? abbr.join('') : undefined;
    } else {
      // 17:56:31 CST
      // 17:56:31 GMT+0800 (台北標準時間)
      abbr = timeString.match(/[A-Z]{3,5}/g);
      abbr = abbr ? abbr[0] : undefined;
    }

    if (abbr === 'GMT') {
      abbr = undefined;
    }

    this.at = +at;
    this.abbr = abbr;
    this.offset = at.getTimezoneOffset();
  }

  function ZoneScore(zone) {
    this.zone = zone;
    this.offsetScore = 0;
    this.abbrScore = 0;
  }

  ZoneScore.prototype.scoreOffsetAt = function (offsetAt) {
    this.offsetScore += Math.abs(
      this.zone.utcOffset(offsetAt.at) - offsetAt.offset,
    );
    if (this.zone.abbr(offsetAt.at).replace(/[^A-Z]/g, '') !== offsetAt.abbr) {
      this.abbrScore++;
    }
  };

  function findChange(low, high) {
    let mid; let
      diff;

    while ((diff = (((high.at - low.at) / 12e4) | 0) * 6e4)) {
      mid = new OffsetAt(new Date(low.at + diff));
      if (mid.offset === low.offset) {
        low = mid;
      } else {
        high = mid;
      }
    }

    return low;
  }

  function userOffsets() {
    const startYear = new Date().getFullYear() - 2;
    let last = new OffsetAt(new Date(startYear, 0, 1));
    const offsets = [last];
    let change;
    let next;
    let i;

    for (i = 1; i < 48; i++) {
      next = new OffsetAt(new Date(startYear, i, 1));
      if (next.offset !== last.offset) {
        change = findChange(last, next);
        offsets.push(change);
        offsets.push(new OffsetAt(new Date(change.at + 6e4)));
      }
      last = next;
    }

    for (i = 0; i < 4; i++) {
      offsets.push(new OffsetAt(new Date(startYear + i, 0, 1)));
      offsets.push(new OffsetAt(new Date(startYear + i, 6, 1)));
    }

    return offsets;
  }

  function sortZoneScores(a, b) {
    if (a.offsetScore !== b.offsetScore) {
      return a.offsetScore - b.offsetScore;
    }
    if (a.abbrScore !== b.abbrScore) {
      return a.abbrScore - b.abbrScore;
    }
    return b.zone.population - a.zone.population;
  }

  function addToGuesses(name, offsets) {
    let i; let
      offset;
    arrayToInt(offsets);
    for (i = 0; i < offsets.length; i++) {
      offset = offsets[i];
      guesses[offset] = guesses[offset] || {};
      guesses[offset][name] = true;
    }
  }

  function guessesForUserOffsets(offsets) {
    const offsetsLength = offsets.length;
    const filteredGuesses = {};
    const out = [];
    let i;
    let j;
    let guessesOffset;

    for (i = 0; i < offsetsLength; i++) {
      guessesOffset = guesses[offsets[i].offset] || {};
      for (j in guessesOffset) {
        if (guessesOffset.hasOwnProperty(j)) {
          filteredGuesses[j] = true;
        }
      }
    }

    for (i in filteredGuesses) {
      if (filteredGuesses.hasOwnProperty(i)) {
        out.push(names[i]);
      }
    }

    return out;
  }

  function rebuildGuess() {
    // use Intl API when available and returning valid time zone
    try {
      const intlName = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (intlName && intlName.length > 3) {
        const name = names[normalizeName(intlName)];
        if (name) {
          return name;
        }
        logError(
          `Moment Timezone found ${
            intlName
          } from the Intl api, but did not have that data loaded.`,
        );
      }
    } catch (e) {
      // Intl unavailable, fall back to manual guessing.
    }

    const offsets = userOffsets();
    const offsetsLength = offsets.length;
    const guesses = guessesForUserOffsets(offsets);
    const zoneScores = [];
    let zoneScore;
    let i;
    let j;

    for (i = 0; i < guesses.length; i++) {
      zoneScore = new ZoneScore(getZone(guesses[i]), offsetsLength);
      for (j = 0; j < offsetsLength; j++) {
        zoneScore.scoreOffsetAt(offsets[j]);
      }
      zoneScores.push(zoneScore);
    }

    zoneScores.sort(sortZoneScores);

    return zoneScores.length > 0 ? zoneScores[0].zone.name : undefined;
  }

  function guess(ignoreCache) {
    if (!cachedGuess || ignoreCache) {
      cachedGuess = rebuildGuess();
    }
    return cachedGuess;
  }

  /** **********************************
     Global Methods
     *********************************** */

  function normalizeName(name) {
    return (name || '').toLowerCase().replace(/\//g, '_');
  }

  function addZone(packed) {
    let i; let name; let split; let
      normalized;

    if (typeof packed === 'string') {
      packed = [packed];
    }

    for (i = 0; i < packed.length; i++) {
      split = packed[i].split('|');
      name = split[0];
      normalized = normalizeName(name);
      zones[normalized] = packed[i];
      names[normalized] = name;
      addToGuesses(normalized, split[2].split(' '));
    }
  }

  function getZone(name, caller) {
    name = normalizeName(name);

    let zone = zones[name];
    let link;

    if (zone instanceof Zone) {
      return zone;
    }

    if (typeof zone === 'string') {
      zone = new Zone(zone);
      zones[name] = zone;
      return zone;
    }

    // Pass getZone to prevent recursion more than 1 level deep
    if (
      links[name]
      && caller !== getZone
      && (link = getZone(links[name], getZone))
    ) {
      zone = zones[name] = new Zone();
      zone._set(link);
      zone.name = names[name];
      return zone;
    }

    return null;
  }

  function getNames() {
    let i;
    const out = [];

    for (i in names) {
      if (
        names.hasOwnProperty(i)
        && (zones[i] || zones[links[i]])
        && names[i]
      ) {
        out.push(names[i]);
      }
    }

    return out.sort();
  }

  function addLink(aliases) {
    let i; let alias; let normal0; let
      normal1;

    if (typeof aliases === 'string') {
      aliases = [aliases];
    }

    for (i = 0; i < aliases.length; i++) {
      alias = aliases[i].split('|');

      normal0 = normalizeName(alias[0]);
      normal1 = normalizeName(alias[1]);

      links[normal0] = normal1;
      names[normal0] = alias[0];

      links[normal1] = normal0;
      names[normal1] = alias[1];
    }
  }

  function loadData(data) {
    addZone(data.zones);
    addLink(data.links);
    tz.dataVersion = data.version;
  }

  function zoneExists(name) {
    if (!zoneExists.didShowError) {
      zoneExists.didShowError = true;
      logError(
        `moment.tz.zoneExists('${
          name
        }') has been deprecated in favor of !moment.tz.zone('${
          name
        }')`,
      );
    }
    return !!getZone(name);
  }

  function needsOffset(m) {
    const isUnixTimestamp = m._f === 'X' || m._f === 'x';
    return !!(m._a && m._tzm === undefined && !isUnixTimestamp);
  }

  function logError(message) {
    if (typeof console !== 'undefined' && typeof console.error === 'function') {
      console.error(message);
    }
  }

  /** **********************************
     moment.tz namespace
     *********************************** */

  function tz(input) {
    const args = Array.prototype.slice.call(arguments, 0, -1);
    const name = arguments[arguments.length - 1];
    const zone = getZone(name);
    const out = moment.utc.apply(null, args);

    if (zone && !moment.isMoment(input) && needsOffset(out)) {
      out.add(zone.parse(out), 'minutes');
    }

    out.tz(name);

    return out;
  }

  tz.version = VERSION;
  tz.dataVersion = '';
  tz._zones = zones;
  tz._links = links;
  tz._names = names;
  tz.add = addZone;
  tz.link = addLink;
  tz.load = loadData;
  tz.zone = getZone;
  tz.zoneExists = zoneExists; // deprecated in 0.1.0
  tz.guess = guess;
  tz.names = getNames;
  tz.Zone = Zone;
  tz.unpack = unpack;
  tz.unpackBase60 = unpackBase60;
  tz.needsOffset = needsOffset;
  tz.moveInvalidForward = true;
  tz.moveAmbiguousForward = false;

  /** **********************************
     Interface with Moment.js
     *********************************** */

  const fn = moment.fn;

  moment.tz = tz;

  moment.defaultZone = null;

  moment.updateOffset = function (mom, keepTime) {
    const zone = moment.defaultZone;
    let offset;

    if (mom._z === undefined) {
      if (zone && needsOffset(mom) && !mom._isUTC) {
        mom._d = moment.utc(mom._a)._d;
        mom.utc().add(zone.parse(mom), 'minutes');
      }
      mom._z = zone;
    }
    if (mom._z) {
      offset = mom._z.utcOffset(mom);
      if (Math.abs(offset) < 16) {
        offset /= 60;
      }
      if (mom.utcOffset !== undefined) {
        const z = mom._z;
        mom.utcOffset(-offset, keepTime);
        mom._z = z;
      } else {
        mom.zone(offset, keepTime);
      }
    }
  };

  fn.tz = function (name, keepTime) {
    if (name) {
      if (typeof name !== 'string') {
        throw new Error(
          `Time zone name must be a string, got ${
            name
          } [${
            typeof name
          }]`,
        );
      }
      this._z = getZone(name);
      if (this._z) {
        moment.updateOffset(this, keepTime);
      } else {
        logError(
          `Moment Timezone has no data for ${
            name
          }. See http://momentjs.com/timezone/docs/#/data-loading/.`,
        );
      }
      return this;
    }
    if (this._z) {
      return this._z.name;
    }
  };

  function abbrWrap(old) {
    return function () {
      if (this._z) {
        return this._z.abbr(this);
      }
      return old.call(this);
    };
  }

  function resetZoneWrap(old) {
    return function () {
      this._z = null;
      return old.apply(this, arguments);
    };
  }

  function resetZoneWrap2(old) {
    return function () {
      if (arguments.length > 0) this._z = null;
      return old.apply(this, arguments);
    };
  }

  fn.zoneName = abbrWrap(fn.zoneName);
  fn.zoneAbbr = abbrWrap(fn.zoneAbbr);
  fn.utc = resetZoneWrap(fn.utc);
  fn.local = resetZoneWrap(fn.local);
  fn.utcOffset = resetZoneWrap2(fn.utcOffset);

  moment.tz.setDefault = function (name) {
    if (major < 2 || (major === 2 && minor < 9)) {
      logError(
        `Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js ${
          moment.version
        }.`,
      );
    }
    moment.defaultZone = name ? getZone(name) : null;
    return moment;
  };

  // Cloning a moment should include the _z property.
  const momentProperties = moment.momentProperties;
  if (Object.prototype.toString.call(momentProperties) === '[object Array]') {
    // moment 2.8.1+
    momentProperties.push('_z');
    momentProperties.push('_a');
  } else if (momentProperties) {
    // moment 2.7.0
    momentProperties._z = null;
  }

  loadData({
    version: '2019a',
    zones: [
      'Africa/Abidjan|GMT|0|0||48e5',
      'Africa/Nairobi|EAT|-30|0||47e5',
      'Africa/Algiers|CET|-10|0||26e5',
      'Africa/Lagos|WAT|-10|0||17e6',
      'Africa/Maputo|CAT|-20|0||26e5',
      'Africa/Cairo|EET EEST|-20 -30|01010|1M2m0 gL0 e10 mn0|15e6',
      'Africa/Casablanca|+00 +01|0 -10|01010101010101010101010101010101|1LHC0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 28M0 e00 2600 e00 28M0 e00 2600 gM0 2600 e00 28M0 e00|32e5',
      'Europe/Paris|CET CEST|-10 -20|01010101010101010101010|1LHB0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|11e6',
      'Africa/Johannesburg|SAST|-20|0||84e5',
      'Africa/Khartoum|EAT CAT|-30 -20|01|1Usl0|51e5',
      'Africa/Sao_Tome|GMT WAT|0 -10|010|1UQN0 2q00',
      'Africa/Tripoli|EET|-20|0||11e5',
      'Africa/Windhoek|CAT WAT|-20 -10|010101010|1LKo0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0|32e4',
      'America/Adak|HST HDT|a0 90|01010101010101010101010|1Lzo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|326',
      'America/Anchorage|AKST AKDT|90 80|01010101010101010101010|1Lzn0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|30e4',
      'America/Santo_Domingo|AST|40|0||29e5',
      'America/Fortaleza|-03|30|0||34e5',
      'America/Asuncion|-03 -04|30 40|01010101010101010101010|1LEP0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0|28e5',
      'America/Panama|EST|50|0||15e5',
      'America/Mexico_City|CST CDT|60 50|01010101010101010101010|1LKw0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0|20e6',
      'America/Managua|CST|60|0||22e5',
      'America/La_Paz|-04|40|0||19e5',
      'America/Lima|-05|50|0||11e6',
      'America/Denver|MST MDT|70 60|01010101010101010101010|1Lzl0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e5',
      'America/Campo_Grande|-03 -04|30 40|01010101010101010101010|1LqP0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0 1HB0 FX0 1HB0 IL0 1HB0 FX0 1HB0 IL0 1EN0 FX0 1HB0|77e4',
      'America/Cancun|CST CDT EST|60 50 50|0102|1LKw0 1lb0 Dd0|63e4',
      'America/Caracas|-0430 -04|4u 40|01|1QMT0|29e5',
      'America/Chicago|CST CDT|60 50|01010101010101010101010|1Lzk0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|92e5',
      'America/Chihuahua|MST MDT|70 60|01010101010101010101010|1LKx0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0|81e4',
      'America/Phoenix|MST|70|0||42e5',
      'America/Los_Angeles|PST PDT|80 70|01010101010101010101010|1Lzm0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e6',
      'America/New_York|EST EDT|50 40|01010101010101010101010|1Lzj0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6',
      'America/Fort_Nelson|PST PDT MST|80 70 70|0102|1Lzm0 1zb0 Op0|39e2',
      'America/Halifax|AST ADT|40 30|01010101010101010101010|1Lzi0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|39e4',
      'America/Godthab|-03 -02|30 20|01010101010101010101010|1LHB0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|17e3',
      'America/Grand_Turk|EST EDT AST|50 40 40|0101210101010101010|1Lzj0 1zb0 Op0 1zb0 5Ip0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e2',
      'America/Havana|CST CDT|50 40|01010101010101010101010|1Lzh0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0|21e5',
      'America/Metlakatla|PST AKST AKDT|80 90 80|012121201212121212121|1PAa0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 uM0 jB0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2',
      'America/Miquelon|-03 -02|30 20|01010101010101010101010|1Lzh0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|61e2',
      'America/Montevideo|-02 -03|20 30|0101|1Lzg0 1o10 11z0|17e5',
      'America/Noronha|-02|20|0||30e2',
      'America/Port-au-Prince|EST EDT|50 40|010101010101010101010|1Lzj0 1zb0 Op0 1zb0 3iN0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5',
      'Antarctica/Palmer|-03 -04|30 40|01010|1LSP0 Rd0 46n0 Ap0|40',
      'America/Santiago|-03 -04|30 40|010101010101010101010|1LSP0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1zb0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0|62e5',
      'America/Sao_Paulo|-02 -03|20 30|01010101010101010101010|1LqO0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0 1HB0 FX0 1HB0 IL0 1HB0 FX0 1HB0 IL0 1EN0 FX0 1HB0|20e6',
      'Atlantic/Azores|-01 +00|10 0|01010101010101010101010|1LHB0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|25e4',
      'America/St_Johns|NST NDT|3u 2u|01010101010101010101010|1Lzhu 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4',
      'Antarctica/Casey|+08 +11|-80 -b0|010|1RWg0 3m10|10',
      'Asia/Bangkok|+07|-70|0||15e6',
      'Pacific/Port_Moresby|+10|-a0|0||25e4',
      'Pacific/Guadalcanal|+11|-b0|0||11e4',
      'Asia/Tashkent|+05|-50|0||23e5',
      'Pacific/Auckland|NZDT NZST|-d0 -c0|01010101010101010101010|1LKe0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00|14e5',
      'Asia/Baghdad|+03|-30|0||66e5',
      'Antarctica/Troll|+00 +02|0 -20|01010101010101010101010|1LHB0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|40',
      'Asia/Dhaka|+06|-60|0||16e6',
      'Asia/Amman|EET EEST|-20 -30|01010101010101010101010|1LGK0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|25e5',
      'Asia/Kamchatka|+12|-c0|0||18e4',
      'Asia/Baku|+04 +05|-40 -50|01010|1LHA0 1o00 11A0 1o00|27e5',
      'Asia/Barnaul|+07 +06|-70 -60|010|1N7v0 3rd0',
      'Asia/Beirut|EET EEST|-20 -30|01010101010101010101010|1LHy0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0|22e5',
      'Asia/Kuala_Lumpur|+08|-80|0||71e5',
      'Asia/Kolkata|IST|-5u|0||15e6',
      'Asia/Chita|+10 +08 +09|-a0 -80 -90|012|1N7s0 3re0|33e4',
      'Asia/Ulaanbaatar|+08 +09|-80 -90|01010|1O8G0 1cJ0 1cP0 1cJ0|12e5',
      'Asia/Shanghai|CST|-80|0||23e6',
      'Asia/Colombo|+0530|-5u|0||22e5',
      'Asia/Damascus|EET EEST|-20 -30|01010101010101010101010|1LGK0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0|26e5',
      'Asia/Dili|+09|-90|0||19e4',
      'Asia/Dubai|+04|-40|0||39e5',
      'Asia/Famagusta|EET EEST +03|-20 -30 -30|0101012010101010101010|1LHB0 1o00 11A0 1o00 11A0 15U0 2Ks0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00',
      'Asia/Gaza|EET EEST|-20 -30|01010101010101010101010|1LGK0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0|18e5',
      'Asia/Hong_Kong|HKT|-80|0||73e5',
      'Asia/Hovd|+07 +08|-70 -80|01010|1O8H0 1cJ0 1cP0 1cJ0|81e3',
      'Asia/Irkutsk|+09 +08|-90 -80|01|1N7t0|60e4',
      'Europe/Istanbul|EET EEST +03|-20 -30 -30|0101012|1LI10 1nA0 11A0 1tA0 U00 15w0|13e6',
      'Asia/Jakarta|WIB|-70|0||31e6',
      'Asia/Jayapura|WIT|-90|0||26e4',
      'Asia/Jerusalem|IST IDT|-20 -30|01010101010101010101010|1LGM0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0|81e4',
      'Asia/Kabul|+0430|-4u|0||46e5',
      'Asia/Karachi|PKT|-50|0||24e6',
      'Asia/Kathmandu|+0545|-5J|0||12e5',
      'Asia/Yakutsk|+10 +09|-a0 -90|01|1N7s0|28e4',
      'Asia/Krasnoyarsk|+08 +07|-80 -70|01|1N7u0|10e5',
      'Asia/Magadan|+12 +10 +11|-c0 -a0 -b0|012|1N7q0 3Cq0|95e3',
      'Asia/Makassar|WITA|-80|0||15e5',
      'Asia/Manila|PST|-80|0||24e6',
      'Europe/Athens|EET EEST|-20 -30|01010101010101010101010|1LHB0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|35e5',
      'Asia/Novosibirsk|+07 +06|-70 -60|010|1N7v0 4eN0|15e5',
      'Asia/Omsk|+07 +06|-70 -60|01|1N7v0|12e5',
      'Asia/Pyongyang|KST KST|-90 -8u|010|1P4D0 6BA0|29e5',
      'Asia/Qyzylorda|+06 +05|-60 -50|01|1Xei0|73e4',
      'Asia/Rangoon|+0630|-6u|0||48e5',
      'Asia/Sakhalin|+11 +10|-b0 -a0|010|1N7r0 3rd0|58e4',
      'Asia/Seoul|KST|-90|0||23e6',
      'Asia/Srednekolymsk|+12 +11|-c0 -b0|01|1N7q0|35e2',
      'Asia/Tehran|+0330 +0430|-3u -4u|01010101010101010101010|1LEku 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0|14e6',
      'Asia/Tokyo|JST|-90|0||38e6',
      'Asia/Tomsk|+07 +06|-70 -60|010|1N7v0 3Qp0|10e5',
      'Asia/Vladivostok|+11 +10|-b0 -a0|01|1N7r0|60e4',
      'Asia/Yekaterinburg|+06 +05|-60 -50|01|1N7w0|14e5',
      'Europe/Lisbon|WET WEST|0 -10|01010101010101010101010|1LHB0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|27e5',
      'Atlantic/Cape_Verde|-01|10|0||50e4',
      'Australia/Sydney|AEDT AEST|-b0 -a0|01010101010101010101010|1LKg0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0|40e5',
      'Australia/Adelaide|ACDT ACST|-au -9u|01010101010101010101010|1LKgu 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0|11e5',
      'Australia/Brisbane|AEST|-a0|0||20e5',
      'Australia/Darwin|ACST|-9u|0||12e4',
      'Australia/Eucla|+0845|-8J|0||368',
      'Australia/Lord_Howe|+11 +1030|-b0 -au|01010101010101010101010|1LKf0 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1fzu 1cMu|347',
      'Australia/Perth|AWST|-80|0||18e5',
      'Pacific/Easter|-05 -06|50 60|010101010101010101010|1LSP0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1zb0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0|30e2',
      'Europe/Dublin|GMT IST|0 -10|01010101010101010101010|1LHB0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|12e5',
      'Etc/GMT-1|+01|-10|0|',
      'Pacific/Fakaofo|+13|-d0|0||483',
      'Pacific/Kiritimati|+14|-e0|0||51e2',
      'Etc/GMT-2|+02|-20|0|',
      'Pacific/Tahiti|-10|a0|0||18e4',
      'Pacific/Niue|-11|b0|0||12e2',
      'Etc/GMT+12|-12|c0|0|',
      'Pacific/Galapagos|-06|60|0||25e3',
      'Etc/GMT+7|-07|70|0|',
      'Pacific/Pitcairn|-08|80|0||56',
      'Pacific/Gambier|-09|90|0||125',
      'Etc/UTC|UTC|0|0|',
      'Europe/Ulyanovsk|+04 +03|-40 -30|010|1N7y0 3rd0|13e5',
      'Europe/London|GMT BST|0 -10|01010101010101010101010|1LHB0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|10e6',
      'Europe/Chisinau|EET EEST|-20 -30|01010101010101010101010|1LHA0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|67e4',
      'Europe/Kaliningrad|+03 EET|-30 -20|01|1N7z0|44e4',
      'Europe/Kirov|+04 +03|-40 -30|01|1N7y0|48e4',
      'Europe/Moscow|MSK MSK|-40 -30|01|1N7y0|16e6',
      'Europe/Saratov|+04 +03|-40 -30|010|1N7y0 5810',
      'Europe/Simferopol|EET MSK MSK|-20 -40 -30|012|1LHA0 1nW0|33e4',
      'Europe/Volgograd|+04 +03|-40 -30|010|1N7y0 9Jd0|10e5',
      'Pacific/Honolulu|HST|a0|0||37e4',
      'MET|MET MEST|-10 -20|01010101010101010101010|1LHB0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00',
      'Pacific/Chatham|+1345 +1245|-dJ -cJ|01010101010101010101010|1LKe0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00|600',
      'Pacific/Apia|+14 +13|-e0 -d0|01010101010101010101010|1LKe0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00|37e3',
      'Pacific/Bougainville|+10 +11|-a0 -b0|01|1NwE0|18e4',
      'Pacific/Fiji|+13 +12|-d0 -c0|01010101010101010101010|1Lfp0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 1VA0|88e4',
      'Pacific/Guam|ChST|-a0|0||17e4',
      'Pacific/Marquesas|-0930|9u|0||86e2',
      'Pacific/Pago_Pago|SST|b0|0||37e2',
      'Pacific/Norfolk|+1130 +11|-bu -b0|01|1PoCu|25e4',
      'Pacific/Tongatapu|+13 +14|-d0 -e0|010|1S4d0 s00|75e3',
    ],
    links: [
      'Africa/Abidjan|Africa/Accra',
      'Africa/Abidjan|Africa/Bamako',
      'Africa/Abidjan|Africa/Banjul',
      'Africa/Abidjan|Africa/Bissau',
      'Africa/Abidjan|Africa/Conakry',
      'Africa/Abidjan|Africa/Dakar',
      'Africa/Abidjan|Africa/Freetown',
      'Africa/Abidjan|Africa/Lome',
      'Africa/Abidjan|Africa/Monrovia',
      'Africa/Abidjan|Africa/Nouakchott',
      'Africa/Abidjan|Africa/Ouagadougou',
      'Africa/Abidjan|Africa/Timbuktu',
      'Africa/Abidjan|America/Danmarkshavn',
      'Africa/Abidjan|Atlantic/Reykjavik',
      'Africa/Abidjan|Atlantic/St_Helena',
      'Africa/Abidjan|Etc/GMT',
      'Africa/Abidjan|Etc/GMT+0',
      'Africa/Abidjan|Etc/GMT-0',
      'Africa/Abidjan|Etc/GMT0',
      'Africa/Abidjan|Etc/Greenwich',
      'Africa/Abidjan|GMT',
      'Africa/Abidjan|GMT+0',
      'Africa/Abidjan|GMT-0',
      'Africa/Abidjan|GMT0',
      'Africa/Abidjan|Greenwich',
      'Africa/Abidjan|Iceland',
      'Africa/Algiers|Africa/Tunis',
      'Africa/Cairo|Egypt',
      'Africa/Casablanca|Africa/El_Aaiun',
      'Africa/Johannesburg|Africa/Maseru',
      'Africa/Johannesburg|Africa/Mbabane',
      'Africa/Lagos|Africa/Bangui',
      'Africa/Lagos|Africa/Brazzaville',
      'Africa/Lagos|Africa/Douala',
      'Africa/Lagos|Africa/Kinshasa',
      'Africa/Lagos|Africa/Libreville',
      'Africa/Lagos|Africa/Luanda',
      'Africa/Lagos|Africa/Malabo',
      'Africa/Lagos|Africa/Ndjamena',
      'Africa/Lagos|Africa/Niamey',
      'Africa/Lagos|Africa/Porto-Novo',
      'Africa/Maputo|Africa/Blantyre',
      'Africa/Maputo|Africa/Bujumbura',
      'Africa/Maputo|Africa/Gaborone',
      'Africa/Maputo|Africa/Harare',
      'Africa/Maputo|Africa/Kigali',
      'Africa/Maputo|Africa/Lubumbashi',
      'Africa/Maputo|Africa/Lusaka',
      'Africa/Nairobi|Africa/Addis_Ababa',
      'Africa/Nairobi|Africa/Asmara',
      'Africa/Nairobi|Africa/Asmera',
      'Africa/Nairobi|Africa/Dar_es_Salaam',
      'Africa/Nairobi|Africa/Djibouti',
      'Africa/Nairobi|Africa/Juba',
      'Africa/Nairobi|Africa/Kampala',
      'Africa/Nairobi|Africa/Mogadishu',
      'Africa/Nairobi|Indian/Antananarivo',
      'Africa/Nairobi|Indian/Comoro',
      'Africa/Nairobi|Indian/Mayotte',
      'Africa/Tripoli|Libya',
      'America/Adak|America/Atka',
      'America/Adak|US/Aleutian',
      'America/Anchorage|America/Juneau',
      'America/Anchorage|America/Nome',
      'America/Anchorage|America/Sitka',
      'America/Anchorage|America/Yakutat',
      'America/Anchorage|US/Alaska',
      'America/Campo_Grande|America/Cuiaba',
      'America/Chicago|America/Indiana/Knox',
      'America/Chicago|America/Indiana/Tell_City',
      'America/Chicago|America/Knox_IN',
      'America/Chicago|America/Matamoros',
      'America/Chicago|America/Menominee',
      'America/Chicago|America/North_Dakota/Beulah',
      'America/Chicago|America/North_Dakota/Center',
      'America/Chicago|America/North_Dakota/New_Salem',
      'America/Chicago|America/Rainy_River',
      'America/Chicago|America/Rankin_Inlet',
      'America/Chicago|America/Resolute',
      'America/Chicago|America/Winnipeg',
      'America/Chicago|CST6CDT',
      'America/Chicago|Canada/Central',
      'America/Chicago|US/Central',
      'America/Chicago|US/Indiana-Starke',
      'America/Chihuahua|America/Mazatlan',
      'America/Chihuahua|Mexico/BajaSur',
      'America/Denver|America/Boise',
      'America/Denver|America/Cambridge_Bay',
      'America/Denver|America/Edmonton',
      'America/Denver|America/Inuvik',
      'America/Denver|America/Ojinaga',
      'America/Denver|America/Shiprock',
      'America/Denver|America/Yellowknife',
      'America/Denver|Canada/Mountain',
      'America/Denver|MST7MDT',
      'America/Denver|Navajo',
      'America/Denver|US/Mountain',
      'America/Fortaleza|America/Araguaina',
      'America/Fortaleza|America/Argentina/Buenos_Aires',
      'America/Fortaleza|America/Argentina/Catamarca',
      'America/Fortaleza|America/Argentina/ComodRivadavia',
      'America/Fortaleza|America/Argentina/Cordoba',
      'America/Fortaleza|America/Argentina/Jujuy',
      'America/Fortaleza|America/Argentina/La_Rioja',
      'America/Fortaleza|America/Argentina/Mendoza',
      'America/Fortaleza|America/Argentina/Rio_Gallegos',
      'America/Fortaleza|America/Argentina/Salta',
      'America/Fortaleza|America/Argentina/San_Juan',
      'America/Fortaleza|America/Argentina/San_Luis',
      'America/Fortaleza|America/Argentina/Tucuman',
      'America/Fortaleza|America/Argentina/Ushuaia',
      'America/Fortaleza|America/Bahia',
      'America/Fortaleza|America/Belem',
      'America/Fortaleza|America/Buenos_Aires',
      'America/Fortaleza|America/Catamarca',
      'America/Fortaleza|America/Cayenne',
      'America/Fortaleza|America/Cordoba',
      'America/Fortaleza|America/Jujuy',
      'America/Fortaleza|America/Maceio',
      'America/Fortaleza|America/Mendoza',
      'America/Fortaleza|America/Paramaribo',
      'America/Fortaleza|America/Recife',
      'America/Fortaleza|America/Rosario',
      'America/Fortaleza|America/Santarem',
      'America/Fortaleza|Antarctica/Rothera',
      'America/Fortaleza|Atlantic/Stanley',
      'America/Fortaleza|Etc/GMT+3',
      'America/Halifax|America/Glace_Bay',
      'America/Halifax|America/Goose_Bay',
      'America/Halifax|America/Moncton',
      'America/Halifax|America/Thule',
      'America/Halifax|Atlantic/Bermuda',
      'America/Halifax|Canada/Atlantic',
      'America/Havana|Cuba',
      'America/La_Paz|America/Boa_Vista',
      'America/La_Paz|America/Guyana',
      'America/La_Paz|America/Manaus',
      'America/La_Paz|America/Porto_Velho',
      'America/La_Paz|Brazil/West',
      'America/La_Paz|Etc/GMT+4',
      'America/Lima|America/Bogota',
      'America/Lima|America/Eirunepe',
      'America/Lima|America/Guayaquil',
      'America/Lima|America/Porto_Acre',
      'America/Lima|America/Rio_Branco',
      'America/Lima|Brazil/Acre',
      'America/Lima|Etc/GMT+5',
      'America/Los_Angeles|America/Dawson',
      'America/Los_Angeles|America/Ensenada',
      'America/Los_Angeles|America/Santa_Isabel',
      'America/Los_Angeles|America/Tijuana',
      'America/Los_Angeles|America/Vancouver',
      'America/Los_Angeles|America/Whitehorse',
      'America/Los_Angeles|Canada/Pacific',
      'America/Los_Angeles|Canada/Yukon',
      'America/Los_Angeles|Mexico/BajaNorte',
      'America/Los_Angeles|PST8PDT',
      'America/Los_Angeles|US/Pacific',
      'America/Los_Angeles|US/Pacific-New',
      'America/Managua|America/Belize',
      'America/Managua|America/Costa_Rica',
      'America/Managua|America/El_Salvador',
      'America/Managua|America/Guatemala',
      'America/Managua|America/Regina',
      'America/Managua|America/Swift_Current',
      'America/Managua|America/Tegucigalpa',
      'America/Managua|Canada/Saskatchewan',
      'America/Mexico_City|America/Bahia_Banderas',
      'America/Mexico_City|America/Merida',
      'America/Mexico_City|America/Monterrey',
      'America/Mexico_City|Mexico/General',
      'America/New_York|America/Detroit',
      'America/New_York|America/Fort_Wayne',
      'America/New_York|America/Indiana/Indianapolis',
      'America/New_York|America/Indiana/Marengo',
      'America/New_York|America/Indiana/Petersburg',
      'America/New_York|America/Indiana/Vevay',
      'America/New_York|America/Indiana/Vincennes',
      'America/New_York|America/Indiana/Winamac',
      'America/New_York|America/Indianapolis',
      'America/New_York|America/Iqaluit',
      'America/New_York|America/Kentucky/Louisville',
      'America/New_York|America/Kentucky/Monticello',
      'America/New_York|America/Louisville',
      'America/New_York|America/Montreal',
      'America/New_York|America/Nassau',
      'America/New_York|America/Nipigon',
      'America/New_York|America/Pangnirtung',
      'America/New_York|America/Thunder_Bay',
      'America/New_York|America/Toronto',
      'America/New_York|Canada/Eastern',
      'America/New_York|EST5EDT',
      'America/New_York|US/East-Indiana',
      'America/New_York|US/Eastern',
      'America/New_York|US/Michigan',
      'America/Noronha|Atlantic/South_Georgia',
      'America/Noronha|Brazil/DeNoronha',
      'America/Noronha|Etc/GMT+2',
      'America/Panama|America/Atikokan',
      'America/Panama|America/Cayman',
      'America/Panama|America/Coral_Harbour',
      'America/Panama|America/Jamaica',
      'America/Panama|EST',
      'America/Panama|Jamaica',
      'America/Phoenix|America/Creston',
      'America/Phoenix|America/Dawson_Creek',
      'America/Phoenix|America/Hermosillo',
      'America/Phoenix|MST',
      'America/Phoenix|US/Arizona',
      'America/Santiago|Chile/Continental',
      'America/Santo_Domingo|America/Anguilla',
      'America/Santo_Domingo|America/Antigua',
      'America/Santo_Domingo|America/Aruba',
      'America/Santo_Domingo|America/Barbados',
      'America/Santo_Domingo|America/Blanc-Sablon',
      'America/Santo_Domingo|America/Curacao',
      'America/Santo_Domingo|America/Dominica',
      'America/Santo_Domingo|America/Grenada',
      'America/Santo_Domingo|America/Guadeloupe',
      'America/Santo_Domingo|America/Kralendijk',
      'America/Santo_Domingo|America/Lower_Princes',
      'America/Santo_Domingo|America/Marigot',
      'America/Santo_Domingo|America/Martinique',
      'America/Santo_Domingo|America/Montserrat',
      'America/Santo_Domingo|America/Port_of_Spain',
      'America/Santo_Domingo|America/Puerto_Rico',
      'America/Santo_Domingo|America/St_Barthelemy',
      'America/Santo_Domingo|America/St_Kitts',
      'America/Santo_Domingo|America/St_Lucia',
      'America/Santo_Domingo|America/St_Thomas',
      'America/Santo_Domingo|America/St_Vincent',
      'America/Santo_Domingo|America/Tortola',
      'America/Santo_Domingo|America/Virgin',
      'America/Sao_Paulo|Brazil/East',
      'America/St_Johns|Canada/Newfoundland',
      'Antarctica/Palmer|America/Punta_Arenas',
      'Asia/Baghdad|Antarctica/Syowa',
      'Asia/Baghdad|Asia/Aden',
      'Asia/Baghdad|Asia/Bahrain',
      'Asia/Baghdad|Asia/Kuwait',
      'Asia/Baghdad|Asia/Qatar',
      'Asia/Baghdad|Asia/Riyadh',
      'Asia/Baghdad|Etc/GMT-3',
      'Asia/Baghdad|Europe/Minsk',
      'Asia/Bangkok|Antarctica/Davis',
      'Asia/Bangkok|Asia/Ho_Chi_Minh',
      'Asia/Bangkok|Asia/Novokuznetsk',
      'Asia/Bangkok|Asia/Phnom_Penh',
      'Asia/Bangkok|Asia/Saigon',
      'Asia/Bangkok|Asia/Vientiane',
      'Asia/Bangkok|Etc/GMT-7',
      'Asia/Bangkok|Indian/Christmas',
      'Asia/Dhaka|Antarctica/Vostok',
      'Asia/Dhaka|Asia/Almaty',
      'Asia/Dhaka|Asia/Bishkek',
      'Asia/Dhaka|Asia/Dacca',
      'Asia/Dhaka|Asia/Kashgar',
      'Asia/Dhaka|Asia/Qostanay',
      'Asia/Dhaka|Asia/Thimbu',
      'Asia/Dhaka|Asia/Thimphu',
      'Asia/Dhaka|Asia/Urumqi',
      'Asia/Dhaka|Etc/GMT-6',
      'Asia/Dhaka|Indian/Chagos',
      'Asia/Dili|Etc/GMT-9',
      'Asia/Dili|Pacific/Palau',
      'Asia/Dubai|Asia/Muscat',
      'Asia/Dubai|Asia/Tbilisi',
      'Asia/Dubai|Asia/Yerevan',
      'Asia/Dubai|Etc/GMT-4',
      'Asia/Dubai|Europe/Samara',
      'Asia/Dubai|Indian/Mahe',
      'Asia/Dubai|Indian/Mauritius',
      'Asia/Dubai|Indian/Reunion',
      'Asia/Gaza|Asia/Hebron',
      'Asia/Hong_Kong|Hongkong',
      'Asia/Jakarta|Asia/Pontianak',
      'Asia/Jerusalem|Asia/Tel_Aviv',
      'Asia/Jerusalem|Israel',
      'Asia/Kamchatka|Asia/Anadyr',
      'Asia/Kamchatka|Etc/GMT-12',
      'Asia/Kamchatka|Kwajalein',
      'Asia/Kamchatka|Pacific/Funafuti',
      'Asia/Kamchatka|Pacific/Kwajalein',
      'Asia/Kamchatka|Pacific/Majuro',
      'Asia/Kamchatka|Pacific/Nauru',
      'Asia/Kamchatka|Pacific/Tarawa',
      'Asia/Kamchatka|Pacific/Wake',
      'Asia/Kamchatka|Pacific/Wallis',
      'Asia/Kathmandu|Asia/Katmandu',
      'Asia/Kolkata|Asia/Calcutta',
      'Asia/Kuala_Lumpur|Asia/Brunei',
      'Asia/Kuala_Lumpur|Asia/Kuching',
      'Asia/Kuala_Lumpur|Asia/Singapore',
      'Asia/Kuala_Lumpur|Etc/GMT-8',
      'Asia/Kuala_Lumpur|Singapore',
      'Asia/Makassar|Asia/Ujung_Pandang',
      'Asia/Rangoon|Asia/Yangon',
      'Asia/Rangoon|Indian/Cocos',
      'Asia/Seoul|ROK',
      'Asia/Shanghai|Asia/Chongqing',
      'Asia/Shanghai|Asia/Chungking',
      'Asia/Shanghai|Asia/Harbin',
      'Asia/Shanghai|Asia/Macao',
      'Asia/Shanghai|Asia/Macau',
      'Asia/Shanghai|Asia/Taipei',
      'Asia/Shanghai|PRC',
      'Asia/Shanghai|ROC',
      'Asia/Tashkent|Antarctica/Mawson',
      'Asia/Tashkent|Asia/Aqtau',
      'Asia/Tashkent|Asia/Aqtobe',
      'Asia/Tashkent|Asia/Ashgabat',
      'Asia/Tashkent|Asia/Ashkhabad',
      'Asia/Tashkent|Asia/Atyrau',
      'Asia/Tashkent|Asia/Dushanbe',
      'Asia/Tashkent|Asia/Oral',
      'Asia/Tashkent|Asia/Samarkand',
      'Asia/Tashkent|Etc/GMT-5',
      'Asia/Tashkent|Indian/Kerguelen',
      'Asia/Tashkent|Indian/Maldives',
      'Asia/Tehran|Iran',
      'Asia/Tokyo|Japan',
      'Asia/Ulaanbaatar|Asia/Choibalsan',
      'Asia/Ulaanbaatar|Asia/Ulan_Bator',
      'Asia/Vladivostok|Asia/Ust-Nera',
      'Asia/Yakutsk|Asia/Khandyga',
      'Atlantic/Azores|America/Scoresbysund',
      'Atlantic/Cape_Verde|Etc/GMT+1',
      'Australia/Adelaide|Australia/Broken_Hill',
      'Australia/Adelaide|Australia/South',
      'Australia/Adelaide|Australia/Yancowinna',
      'Australia/Brisbane|Australia/Lindeman',
      'Australia/Brisbane|Australia/Queensland',
      'Australia/Darwin|Australia/North',
      'Australia/Lord_Howe|Australia/LHI',
      'Australia/Perth|Australia/West',
      'Australia/Sydney|Australia/ACT',
      'Australia/Sydney|Australia/Canberra',
      'Australia/Sydney|Australia/Currie',
      'Australia/Sydney|Australia/Hobart',
      'Australia/Sydney|Australia/Melbourne',
      'Australia/Sydney|Australia/NSW',
      'Australia/Sydney|Australia/Tasmania',
      'Australia/Sydney|Australia/Victoria',
      'Etc/UTC|Etc/UCT',
      'Etc/UTC|Etc/Universal',
      'Etc/UTC|Etc/Zulu',
      'Etc/UTC|UCT',
      'Etc/UTC|UTC',
      'Etc/UTC|Universal',
      'Etc/UTC|Zulu',
      'Europe/Athens|Asia/Nicosia',
      'Europe/Athens|EET',
      'Europe/Athens|Europe/Bucharest',
      'Europe/Athens|Europe/Helsinki',
      'Europe/Athens|Europe/Kiev',
      'Europe/Athens|Europe/Mariehamn',
      'Europe/Athens|Europe/Nicosia',
      'Europe/Athens|Europe/Riga',
      'Europe/Athens|Europe/Sofia',
      'Europe/Athens|Europe/Tallinn',
      'Europe/Athens|Europe/Uzhgorod',
      'Europe/Athens|Europe/Vilnius',
      'Europe/Athens|Europe/Zaporozhye',
      'Europe/Chisinau|Europe/Tiraspol',
      'Europe/Dublin|Eire',
      'Europe/Istanbul|Asia/Istanbul',
      'Europe/Istanbul|Turkey',
      'Europe/Lisbon|Atlantic/Canary',
      'Europe/Lisbon|Atlantic/Faeroe',
      'Europe/Lisbon|Atlantic/Faroe',
      'Europe/Lisbon|Atlantic/Madeira',
      'Europe/Lisbon|Portugal',
      'Europe/Lisbon|WET',
      'Europe/London|Europe/Belfast',
      'Europe/London|Europe/Guernsey',
      'Europe/London|Europe/Isle_of_Man',
      'Europe/London|Europe/Jersey',
      'Europe/London|GB',
      'Europe/London|GB-Eire',
      'Europe/Moscow|W-SU',
      'Europe/Paris|Africa/Ceuta',
      'Europe/Paris|Arctic/Longyearbyen',
      'Europe/Paris|Atlantic/Jan_Mayen',
      'Europe/Paris|CET',
      'Europe/Paris|Europe/Amsterdam',
      'Europe/Paris|Europe/Andorra',
      'Europe/Paris|Europe/Belgrade',
      'Europe/Paris|Europe/Berlin',
      'Europe/Paris|Europe/Bratislava',
      'Europe/Paris|Europe/Brussels',
      'Europe/Paris|Europe/Budapest',
      'Europe/Paris|Europe/Busingen',
      'Europe/Paris|Europe/Copenhagen',
      'Europe/Paris|Europe/Gibraltar',
      'Europe/Paris|Europe/Ljubljana',
      'Europe/Paris|Europe/Luxembourg',
      'Europe/Paris|Europe/Madrid',
      'Europe/Paris|Europe/Malta',
      'Europe/Paris|Europe/Monaco',
      'Europe/Paris|Europe/Oslo',
      'Europe/Paris|Europe/Podgorica',
      'Europe/Paris|Europe/Prague',
      'Europe/Paris|Europe/Rome',
      'Europe/Paris|Europe/San_Marino',
      'Europe/Paris|Europe/Sarajevo',
      'Europe/Paris|Europe/Skopje',
      'Europe/Paris|Europe/Stockholm',
      'Europe/Paris|Europe/Tirane',
      'Europe/Paris|Europe/Vaduz',
      'Europe/Paris|Europe/Vatican',
      'Europe/Paris|Europe/Vienna',
      'Europe/Paris|Europe/Warsaw',
      'Europe/Paris|Europe/Zagreb',
      'Europe/Paris|Europe/Zurich',
      'Europe/Paris|Poland',
      'Europe/Ulyanovsk|Europe/Astrakhan',
      'Pacific/Auckland|Antarctica/McMurdo',
      'Pacific/Auckland|Antarctica/South_Pole',
      'Pacific/Auckland|NZ',
      'Pacific/Chatham|NZ-CHAT',
      'Pacific/Easter|Chile/EasterIsland',
      'Pacific/Fakaofo|Etc/GMT-13',
      'Pacific/Fakaofo|Pacific/Enderbury',
      'Pacific/Galapagos|Etc/GMT+6',
      'Pacific/Gambier|Etc/GMT+9',
      'Pacific/Guadalcanal|Antarctica/Macquarie',
      'Pacific/Guadalcanal|Etc/GMT-11',
      'Pacific/Guadalcanal|Pacific/Efate',
      'Pacific/Guadalcanal|Pacific/Kosrae',
      'Pacific/Guadalcanal|Pacific/Noumea',
      'Pacific/Guadalcanal|Pacific/Pohnpei',
      'Pacific/Guadalcanal|Pacific/Ponape',
      'Pacific/Guam|Pacific/Saipan',
      'Pacific/Honolulu|HST',
      'Pacific/Honolulu|Pacific/Johnston',
      'Pacific/Honolulu|US/Hawaii',
      'Pacific/Kiritimati|Etc/GMT-14',
      'Pacific/Niue|Etc/GMT+11',
      'Pacific/Pago_Pago|Pacific/Midway',
      'Pacific/Pago_Pago|Pacific/Samoa',
      'Pacific/Pago_Pago|US/Samoa',
      'Pacific/Pitcairn|Etc/GMT+8',
      'Pacific/Port_Moresby|Antarctica/DumontDUrville',
      'Pacific/Port_Moresby|Etc/GMT-10',
      'Pacific/Port_Moresby|Pacific/Chuuk',
      'Pacific/Port_Moresby|Pacific/Truk',
      'Pacific/Port_Moresby|Pacific/Yap',
      'Pacific/Tahiti|Etc/GMT+10',
      'Pacific/Tahiti|Pacific/Rarotonga',
    ],
  });

  return moment;
});

/*! For license information please see DPWS_register_first.js.LICENSE.txt */
(()=>{var e={3486:()=>{window.Bootstrap={jQuery:jQuery.noConflict()}},8654:(e,t,n)=>{"use strict";n.d(t,{j:()=>r});var r={trackEvent:function(e){var t=window.TMS||null;e&&t&&t.trackEvent(e)},trackView:function(e){var t=window.TMS||null;e&&t&&t.trackView(e)},trackEventWithInheritance:function(e){var t={};HSBC_utils.isTealiumReady&&(t={site_section:utag_data.site_section?utag_data.site_section:"",page_type:utag_data.page_type?utag_data.page_type:"",page_customer_group:utag_data.page_customer_group?utag_data.page_customer_group:"",page_category:utag_data.page_category?utag_data.page_category:"",page_subcategory:utag_data.page_subcategory?utag_data.page_subcategory:"",page_business_line:utag_data.page_business_line?utag_data.page_business_line:"",page_security_level:utag_data.page_security_level?utag_data.page_security_level:""}),this.trackEvent(Bootstrap.jQuery.extend(t,e))}}},7856:function(e){e.exports=function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,n){return t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(e,n)}function n(e,r,o){return n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,n,r){var o=[null];o.push.apply(o,n);var a=new(Function.bind.apply(e,o));return r&&t(a,r.prototype),a},n.apply(null,arguments)}function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a=Object.hasOwnProperty,i=Object.setPrototypeOf,l=Object.isFrozen,c=Object.getPrototypeOf,s=Object.getOwnPropertyDescriptor,u=Object.freeze,f=Object.seal,p=Object.create,m="undefined"!=typeof Reflect&&Reflect,d=m.apply,g=m.construct;d||(d=function(e,t,n){return e.apply(t,n)}),u||(u=function(e){return e}),f||(f=function(e){return e}),g||(g=function(e,t){return n(e,r(t))});var h,y=x(Array.prototype.forEach),v=x(Array.prototype.pop),b=x(Array.prototype.push),_=x(String.prototype.toLowerCase),E=x(String.prototype.toString),T=x(String.prototype.match),w=x(String.prototype.replace),A=x(String.prototype.indexOf),N=x(String.prototype.trim),S=x(RegExp.prototype.test),k=(h=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return g(h,t)});function x(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return d(e,t,r)}}function O(e,t,n){n=n||_,i&&i(e,null);for(var r=t.length;r--;){var o=t[r];if("string"==typeof o){var a=n(o);a!==o&&(l(t)||(t[r]=a),o=a)}e[o]=!0}return e}function C(e){var t,n=p(null);for(t in e)!0===d(a,e,[t])&&(n[t]=e[t]);return n}function L(e,t){for(;null!==e;){var n=s(e,t);if(n){if(n.get)return x(n.get);if("function"==typeof n.value)return x(n.value)}e=c(e)}return function(e){return console.warn("fallback value for",e),null}}var M=u(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),D=u(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),R=u(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),I=u(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),U=u(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),F=u(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),j=u(["#text"]),B=u(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),H=u(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),P=u(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),z=u(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),G=f(/\{\{[\w\W]*|[\w\W]*\}\}/gm),W=f(/<%[\w\W]*|[\w\W]*%>/gm),$=f(/\${[\w\W]*}/gm),V=f(/^data-[\-\w.\u00B7-\uFFFF]/),q=f(/^aria-[\-\w]+$/),Y=f(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Q=f(/^(?:\w+script|data):/i),K=f(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),X=f(/^html$/i),Z=function(){return"undefined"==typeof window?null:window};return function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z(),o=function(e){return t(e)};if(o.version="2.4.5",o.removed=[],!n||!n.document||9!==n.document.nodeType)return o.isSupported=!1,o;var a=n.document,i=n.document,l=n.DocumentFragment,c=n.HTMLTemplateElement,s=n.Node,f=n.Element,p=n.NodeFilter,m=n.NamedNodeMap,d=void 0===m?n.NamedNodeMap||n.MozNamedAttrMap:m,g=n.HTMLFormElement,h=n.DOMParser,x=n.trustedTypes,J=f.prototype,ee=L(J,"cloneNode"),te=L(J,"nextSibling"),ne=L(J,"childNodes"),re=L(J,"parentNode");if("function"==typeof c){var oe=i.createElement("template");oe.content&&oe.content.ownerDocument&&(i=oe.content.ownerDocument)}var ae=function(t,n){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var r=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(r=n.currentScript.getAttribute(o));var a="dompurify"+(r?"#"+r:"");try{return t.createPolicy(a,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+a+" could not be created."),null}}(x,a),ie=ae?ae.createHTML(""):"",le=i,ce=le.implementation,se=le.createNodeIterator,ue=le.createDocumentFragment,fe=le.getElementsByTagName,pe=a.importNode,me={};try{me=C(i).documentMode?i.documentMode:{}}catch(e){}var de={};o.isSupported="function"==typeof re&&ce&&void 0!==ce.createHTMLDocument&&9!==me;var ge,he,ye=G,ve=W,be=$,_e=V,Ee=q,Te=Q,we=K,Ae=Y,Ne=null,Se=O({},[].concat(r(M),r(D),r(R),r(U),r(j))),ke=null,xe=O({},[].concat(r(B),r(H),r(P),r(z))),Oe=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ce=null,Le=null,Me=!0,De=!0,Re=!1,Ie=!0,Ue=!1,Fe=!1,je=!1,Be=!1,He=!1,Pe=!1,ze=!1,Ge=!0,We=!1,$e=!0,Ve=!1,qe={},Ye=null,Qe=O({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Ke=null,Xe=O({},["audio","video","img","source","image","track"]),Ze=null,Je=O({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),et="http://www.w3.org/1998/Math/MathML",tt="http://www.w3.org/2000/svg",nt="http://www.w3.org/1999/xhtml",rt=nt,ot=!1,at=null,it=O({},[et,tt,nt],E),lt=["application/xhtml+xml","text/html"],ct=null,st=i.createElement("form"),ut=function(e){return e instanceof RegExp||e instanceof Function},ft=function(t){ct&&ct===t||(t&&"object"===e(t)||(t={}),t=C(t),ge=ge=-1===lt.indexOf(t.PARSER_MEDIA_TYPE)?"text/html":t.PARSER_MEDIA_TYPE,he="application/xhtml+xml"===ge?E:_,Ne="ALLOWED_TAGS"in t?O({},t.ALLOWED_TAGS,he):Se,ke="ALLOWED_ATTR"in t?O({},t.ALLOWED_ATTR,he):xe,at="ALLOWED_NAMESPACES"in t?O({},t.ALLOWED_NAMESPACES,E):it,Ze="ADD_URI_SAFE_ATTR"in t?O(C(Je),t.ADD_URI_SAFE_ATTR,he):Je,Ke="ADD_DATA_URI_TAGS"in t?O(C(Xe),t.ADD_DATA_URI_TAGS,he):Xe,Ye="FORBID_CONTENTS"in t?O({},t.FORBID_CONTENTS,he):Qe,Ce="FORBID_TAGS"in t?O({},t.FORBID_TAGS,he):{},Le="FORBID_ATTR"in t?O({},t.FORBID_ATTR,he):{},qe="USE_PROFILES"in t&&t.USE_PROFILES,Me=!1!==t.ALLOW_ARIA_ATTR,De=!1!==t.ALLOW_DATA_ATTR,Re=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Ie=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,Ue=t.SAFE_FOR_TEMPLATES||!1,Fe=t.WHOLE_DOCUMENT||!1,He=t.RETURN_DOM||!1,Pe=t.RETURN_DOM_FRAGMENT||!1,ze=t.RETURN_TRUSTED_TYPE||!1,Be=t.FORCE_BODY||!1,Ge=!1!==t.SANITIZE_DOM,We=t.SANITIZE_NAMED_PROPS||!1,$e=!1!==t.KEEP_CONTENT,Ve=t.IN_PLACE||!1,Ae=t.ALLOWED_URI_REGEXP||Ae,rt=t.NAMESPACE||nt,Oe=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&ut(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Oe.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&ut(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Oe.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Oe.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ue&&(De=!1),Pe&&(He=!0),qe&&(Ne=O({},r(j)),ke=[],!0===qe.html&&(O(Ne,M),O(ke,B)),!0===qe.svg&&(O(Ne,D),O(ke,H),O(ke,z)),!0===qe.svgFilters&&(O(Ne,R),O(ke,H),O(ke,z)),!0===qe.mathMl&&(O(Ne,U),O(ke,P),O(ke,z))),t.ADD_TAGS&&(Ne===Se&&(Ne=C(Ne)),O(Ne,t.ADD_TAGS,he)),t.ADD_ATTR&&(ke===xe&&(ke=C(ke)),O(ke,t.ADD_ATTR,he)),t.ADD_URI_SAFE_ATTR&&O(Ze,t.ADD_URI_SAFE_ATTR,he),t.FORBID_CONTENTS&&(Ye===Qe&&(Ye=C(Ye)),O(Ye,t.FORBID_CONTENTS,he)),$e&&(Ne["#text"]=!0),Fe&&O(Ne,["html","head","body"]),Ne.table&&(O(Ne,["tbody"]),delete Ce.tbody),u&&u(t),ct=t)},pt=O({},["mi","mo","mn","ms","mtext"]),mt=O({},["foreignobject","desc","title","annotation-xml"]),dt=O({},["title","style","font","a","script"]),gt=O({},D);O(gt,R),O(gt,I);var ht=O({},U);O(ht,F);var yt=function(e){b(o.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=ie}catch(t){e.remove()}}},vt=function(e,t){try{b(o.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){b(o.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!ke[e])if(He||Pe)try{yt(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},bt=function(e){var t,n;if(Be)e="<remove></remove>"+e;else{var r=T(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===ge&&rt===nt&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=ae?ae.createHTML(e):e;if(rt===nt)try{t=(new h).parseFromString(o,ge)}catch(e){}if(!t||!t.documentElement){t=ce.createDocument(rt,"template",null);try{t.documentElement.innerHTML=ot?ie:o}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(i.createTextNode(n),a.childNodes[0]||null),rt===nt?fe.call(t,Fe?"html":"body")[0]:Fe?t.documentElement:a},_t=function(e){return se.call(e.ownerDocument||e,e,p.SHOW_ELEMENT|p.SHOW_COMMENT|p.SHOW_TEXT,null,!1)},Et=function(t){return"object"===e(s)?t instanceof s:t&&"object"===e(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},Tt=function(e,t,n){de[e]&&y(de[e],(function(e){e.call(o,t,n,ct)}))},wt=function(e){var t,n;if(Tt("beforeSanitizeElements",e,null),(n=e)instanceof g&&("string"!=typeof n.nodeName||"string"!=typeof n.textContent||"function"!=typeof n.removeChild||!(n.attributes instanceof d)||"function"!=typeof n.removeAttribute||"function"!=typeof n.setAttribute||"string"!=typeof n.namespaceURI||"function"!=typeof n.insertBefore||"function"!=typeof n.hasChildNodes))return yt(e),!0;if(S(/[\u0080-\uFFFF]/,e.nodeName))return yt(e),!0;var r=he(e.nodeName);if(Tt("uponSanitizeElement",e,{tagName:r,allowedTags:Ne}),e.hasChildNodes()&&!Et(e.firstElementChild)&&(!Et(e.content)||!Et(e.content.firstElementChild))&&S(/<[/\w]/g,e.innerHTML)&&S(/<[/\w]/g,e.textContent))return yt(e),!0;if("select"===r&&S(/<template/i,e.innerHTML))return yt(e),!0;if(!Ne[r]||Ce[r]){if(!Ce[r]&&Nt(r)){if(Oe.tagNameCheck instanceof RegExp&&S(Oe.tagNameCheck,r))return!1;if(Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(r))return!1}if($e&&!Ye[r]){var a=re(e)||e.parentNode,i=ne(e)||e.childNodes;if(i&&a)for(var l=i.length-1;l>=0;--l)a.insertBefore(ee(i[l],!0),te(e))}return yt(e),!0}return e instanceof f&&!function(e){var t=re(e);t&&t.tagName||(t={namespaceURI:rt,tagName:"template"});var n=_(e.tagName),r=_(t.tagName);return!!at[e.namespaceURI]&&(e.namespaceURI===tt?t.namespaceURI===nt?"svg"===n:t.namespaceURI===et?"svg"===n&&("annotation-xml"===r||pt[r]):Boolean(gt[n]):e.namespaceURI===et?t.namespaceURI===nt?"math"===n:t.namespaceURI===tt?"math"===n&&mt[r]:Boolean(ht[n]):e.namespaceURI===nt?!(t.namespaceURI===tt&&!mt[r])&&!(t.namespaceURI===et&&!pt[r])&&!ht[n]&&(dt[n]||!gt[n]):!("application/xhtml+xml"!==ge||!at[e.namespaceURI]))}(e)?(yt(e),!0):"noscript"!==r&&"noembed"!==r||!S(/<\/no(script|embed)/i,e.innerHTML)?(Ue&&3===e.nodeType&&(t=e.textContent,t=w(t,ye," "),t=w(t,ve," "),t=w(t,be," "),e.textContent!==t&&(b(o.removed,{element:e.cloneNode()}),e.textContent=t)),Tt("afterSanitizeElements",e,null),!1):(yt(e),!0)},At=function(e,t,n){if(Ge&&("id"===t||"name"===t)&&(n in i||n in st))return!1;if(De&&!Le[t]&&S(_e,t));else if(Me&&S(Ee,t));else if(!ke[t]||Le[t]){if(!(Nt(e)&&(Oe.tagNameCheck instanceof RegExp&&S(Oe.tagNameCheck,e)||Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(e))&&(Oe.attributeNameCheck instanceof RegExp&&S(Oe.attributeNameCheck,t)||Oe.attributeNameCheck instanceof Function&&Oe.attributeNameCheck(t))||"is"===t&&Oe.allowCustomizedBuiltInElements&&(Oe.tagNameCheck instanceof RegExp&&S(Oe.tagNameCheck,n)||Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(n))))return!1}else if(Ze[t]);else if(S(Ae,w(n,we,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==A(n,"data:")||!Ke[e])if(Re&&!S(Te,w(n,we,"")));else if(n)return!1;return!0},Nt=function(e){return e.indexOf("-")>0},St=function(t){var n,r,a,i;Tt("beforeSanitizeAttributes",t,null);var l=t.attributes;if(l){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ke};for(i=l.length;i--;){var s=n=l[i],u=s.name,f=s.namespaceURI;if(r="value"===u?n.value:N(n.value),a=he(u),c.attrName=a,c.attrValue=r,c.keepAttr=!0,c.forceKeepAttr=void 0,Tt("uponSanitizeAttribute",t,c),r=c.attrValue,!c.forceKeepAttr&&(vt(u,t),c.keepAttr))if(Ie||!S(/\/>/i,r)){Ue&&(r=w(r,ye," "),r=w(r,ve," "),r=w(r,be," "));var p=he(t.nodeName);if(At(p,a,r)){if(!We||"id"!==a&&"name"!==a||(vt(u,t),r="user-content-"+r),ae&&"object"===e(x)&&"function"==typeof x.getAttributeType)if(f);else switch(x.getAttributeType(p,a)){case"TrustedHTML":r=ae.createHTML(r);break;case"TrustedScriptURL":r=ae.createScriptURL(r)}try{f?t.setAttributeNS(f,u,r):t.setAttribute(u,r),v(o.removed)}catch(e){}}}else vt(u,t)}Tt("afterSanitizeAttributes",t,null)}},kt=function e(t){var n,r=_t(t);for(Tt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)Tt("uponSanitizeShadowNode",n,null),wt(n)||(n.content instanceof l&&e(n.content),St(n));Tt("afterSanitizeShadowDOM",t,null)};return o.sanitize=function(t){var r,i,c,u,f,p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((ot=!t)&&(t="\x3c!--\x3e"),"string"!=typeof t&&!Et(t)){if("function"!=typeof t.toString)throw k("toString is not a function");if("string"!=typeof(t=t.toString()))throw k("dirty is not a string, aborting")}if(!o.isSupported){if("object"===e(n.toStaticHTML)||"function"==typeof n.toStaticHTML){if("string"==typeof t)return n.toStaticHTML(t);if(Et(t))return n.toStaticHTML(t.outerHTML)}return t}if(je||ft(p),o.removed=[],"string"==typeof t&&(Ve=!1),Ve){if(t.nodeName){var m=he(t.nodeName);if(!Ne[m]||Ce[m])throw k("root node is forbidden and cannot be sanitized in-place")}}else if(t instanceof s)1===(i=(r=bt("\x3c!----\x3e")).ownerDocument.importNode(t,!0)).nodeType&&"BODY"===i.nodeName||"HTML"===i.nodeName?r=i:r.appendChild(i);else{if(!He&&!Ue&&!Fe&&-1===t.indexOf("<"))return ae&&ze?ae.createHTML(t):t;if(!(r=bt(t)))return He?null:ze?ie:""}r&&Be&&yt(r.firstChild);for(var d=_t(Ve?t:r);c=d.nextNode();)3===c.nodeType&&c===u||wt(c)||(c.content instanceof l&&kt(c.content),St(c),u=c);if(u=null,Ve)return t;if(He){if(Pe)for(f=ue.call(r.ownerDocument);r.firstChild;)f.appendChild(r.firstChild);else f=r;return(ke.shadowroot||ke.shadowrootmod)&&(f=pe.call(a,f,!0)),f}var g=Fe?r.outerHTML:r.innerHTML;return Fe&&Ne["!doctype"]&&r.ownerDocument&&r.ownerDocument.doctype&&r.ownerDocument.doctype.name&&S(X,r.ownerDocument.doctype.name)&&(g="<!DOCTYPE "+r.ownerDocument.doctype.name+">\n"+g),Ue&&(g=w(g,ye," "),g=w(g,ve," "),g=w(g,be," ")),ae&&ze?ae.createHTML(g):g},o.setConfig=function(e){ft(e),je=!0},o.clearConfig=function(){ct=null,je=!1},o.isValidAttribute=function(e,t,n){ct||ft({});var r=he(e),o=he(t);return At(r,o,n)},o.addHook=function(e,t){"function"==typeof t&&(de[e]=de[e]||[],b(de[e],t))},o.removeHook=function(e){if(de[e])return v(de[e])},o.removeHooks=function(e){de[e]&&(de[e]=[])},o.removeAllHooks=function(){de={}},o}()}()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(3486);var e=n(7856),t=n.n(e);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,a=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(a)?a:String(a)),o)}var a}var a=Bootstrap.jQuery,i={ie:"rv:",ff:"Firefox/",safari:"Safari/",chrome:"Chrome/",edge:"Edg/"},l={android:"Android",iphone:"iPhone OS"},c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.setUpUserAgentString(),this.setUpUserAgent(),this.useUserAgent()}var n,r,c;return n=e,c=[{key:"fetchBrowserVersion",value:function(e,t){var n,r=e.split(t);return 2===r.length&&(n=parseInt(r[1],10)),n}}],(r=[{key:"setUpUserAgentString",value:function(){this.userAgentString=navigator.userAgent}},{key:"setUpUserAgent",value:function(){for(var e in i){var t=this.constructor.fetchBrowserVersion(this.userAgentString,i[e]);t&&(this.userAgent="".concat(e,"-").concat(t))}for(var n in l){var r=this.constructor.fetchBrowserVersion(this.userAgentString,l[n]);r&&(this.userAgent+=" ".concat(n,"-").concat(r))}}},{key:"useUserAgent",value:function(){var e=t().sanitize(this.userAgent);a("html").addClass(e)}}])&&o(n.prototype,r),c&&o(n,c),Object.defineProperty(n,"prototype",{writable:!1}),e}();window.browserUtils=new c;var s=n(8654);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var p=Bootstrap.jQuery,m="hidden";new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=p(t),this.$closeButton=this.$el.find(".close-browser-notification"),this.showBrowserNotification(),this.bindUiEvents()}var t,n;return t=e,(n=[{key:"bindUiEvents",value:function(){var e=this;this.$closeButton.on("click",(function(){return e.closeBanner()}))}},{key:"isIE10",value:function(){return navigator.userAgent.includes("MSIE 10")}},{key:"isIE11",value:function(){return navigator.userAgent.includes("rv:11")}},{key:"showBrowserNotification",value:function(){(this.isIE10()||this.isIE11())&&this.$el.removeClass(m),this.$el.is(":visible")&&s.j.trackEvent({event_category:"content",event_action:"popup",event_content:"Browser update banner"})}},{key:"closeBanner",value:function(){this.$el.hasClass(m)||(this.$el.addClass(m),s.j.trackEvent({event_category:"content",event_action:"onsite",event_content:"Browser update banner close"}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())(".browser-notification")})()})();
/*! For license information please see DPWS_utils.js.LICENSE.txt */
(()=>{var e={7967:(e,t)=>{"use strict";t.N=void 0;var n=/^([^\w]*)(javascript|data|vbscript)/im,r=/&#(\w+)(^\w|;)?/g,o=/&(newline|tab);/gi,i=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,a=/^.+(:|&colon;)/gim,l=[".","/"];t.N=function(e){var t,s=(t=e||"",t.replace(r,(function(e,t){return String.fromCharCode(t)}))).replace(o,"").replace(i,"").trim();if(!s)return"about:blank";if(function(e){return l.indexOf(e[0])>-1}(s))return s;var c=s.match(a);if(!c)return s;var u=c[0];return n.test(u)?"about:blank":s}},73:(e,t,n)=>{"use strict";var r=n(7967),o=n(7856),i=n.n(o);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}var u=Bootstrap.jQuery,f=u("body"),d=f.find(u(".controls")).find("#filters"),p=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"init",value:function(){f.find(".report-page-wrapper.grid").length&&(this.bindUIEvents(),this.setInitialDropdownValue())}},{key:"bindUIEvents",value:function(){f.find(u(".filter-button")).on("click",this.triggerSearch)}},{key:"setInitialDropdownValue",value:function(){var e,t,n,r=new URLSearchParams(window.location.search),o=i().sanitize(d.find("option:selected").text()),a=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=l(e))){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}(r.entries());try{for(a.s();!(e=a.n()).done;){var s=(t=e.value,n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],s=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){c=!0,o=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}(t,n)||l(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=s[0],f=s[1];""!==f&&(d.val("".concat(c,"=").concat(f)),u(".query-search-results").text(o))}}catch(e){a.e(e)}finally{a.f()}}},{key:"triggerSearch",value:function(){var e="?debug&search&".concat(d.find(":selected").val()),t=i().sanitize(window.location.href);t.includes("?")?window.location.href=(0,r.N)(t.split("?")[0]+e):window.location.href=(0,r.N)(t+e)}}],null&&c(t.prototype,null),n&&c(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();u(document).ready((function(){return p.init()}))},3936:()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=Bootstrap.jQuery,r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var r,o;return r=e,o=[{key:"init",value:function(){this.bindUIEvents()}},{key:"bindUIEvents",value:function(){var e=n("[data-validation-message]");e.on("invalid",(function(e){var t=n(e.target).data("validation-message");""!==t&&e.target.setCustomValidity(t)})).on("input",(function(e){var t=n(e.target).data("validation-message");e.target.setCustomValidity(""),void 0===e.target.validity.valid||e.target.validity.valid||""===t||e.target.setCustomValidity(t)})),n(window).on("load",(function(){n.each(e,(function(e,t){t.setCustomValidity("")}))}))}}],null&&t(r.prototype,null),o&&t(r,o),Object.defineProperty(r,"prototype",{writable:!1}),e}();n(document).ready((function(){return r.init()}))},6616:()=>{},6089:()=>{var e,t;e=Bootstrap.jQuery,t=void 0!==parent.Granite&&void 0!==parent.Granite.author&&void 0!==parent.Granite.author.layerManager&&-1!==["Edit","Design","Developer","Preview"].indexOf(parent.Granite.author.layerManager.getCurrentLayer()),e("body").data("exit-intent-confirm")&&!t&&("onbeforeunload"in window?e(window).on("beforeunload",(function(){return" "})):"onunload"in window?e(window).on("onunload",(function(){return" "})):e(document).on("pagehide",(function(){return" "})))},8310:()=>{window.GPWS=window.GPWS||{}},2516:(e,t,n)=>{"use strict";n.d(t,{L:()=>ce});var r=n(7856),o=n.n(r),i=n(7967);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}var s=jQuery,c=".generic-tabs",u=".tabs-container",f="#tab-title-",d="-mobile-anchor",p=".O-HRZTAB-RW-RBWM",m=".tab-widget-tab-content",h=".tab-wrapper",y=".O-ACCRD-RW-RBWM",v=".expander",b=".dropdown",g="tab-panel-",S=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.globalComponents=t}var t,n;return t=e,(n=[{key:"calculateTopOffset",value:function(e){var t=s(e);return t.length?t.offset().top:0}},{key:"smoothScrollToHTMLNode",value:function(e){var t,n=this.calculateTopOffset(e);t=n-(s(document).scrollTop()+this.globalComponents.headerController.calculateHeaderHeight())>0?n-this.globalComponents.headerController.calculateHeaderHeight(!1):n-this.globalComponents.headerController.calculateHeaderHeight(!0),s("html, body").animate({scrollTop:t,easing:"linear"},500)}},{key:"scrollToHtmlNode",value:function(e){if(this.globalComponents.anchorScrollController.smoothScrollEnabled)this.smoothScrollToHTMLNode(e);else{var t=this.calculateTopOffset(e);if(t){var n=t-this.globalComponents.headerController.calculateHeaderHeight(e);n>-1&&s(document).scrollTop(n)}}}},{key:"scrollToAccordionOrExpander",value:function(e,t){var n=e.is(":visible")?e:s("".concat(y," ").concat(t)),r=n.siblings(v);(r=r.length?r:e.siblings().children(v)).length?this.scrollToAccordionScrollLinkInHeader(r):this.scrollToAccordionScrollLinkInContent(n,e)}},{key:"scrollToAccordionScrollLinkInHeader",value:function(e){var t=e.children(b);this.openAccordionIfNeeded(t),this.scrollToHtmlNode(t)}},{key:"scrollToAccordionScrollLinkInContent",value:function(e,t){var n=e.closest(v).children(b);this.openAccordionIfNeeded(n),this.scrollToHtmlNode(t)}},{key:"openAccordionIfNeeded",value:function(e){"false"===e.attr("aria-expanded")&&e.click()}},{key:"scrollToSmartTabs",value:function(e,t){var n,r=e.closest(h),o=e.closest(m);if(o){var i=o.get(0).id;n="#".concat(i),this.isTargetInsideTabContent(o,t)&&(r=o.find(t))}var a=e.closest(p)[0],l=this.globalComponents.components.findComponentByHTMLNode(a);l&&l.instance&&l.instance.activeTab(n),this.scrollToHtmlNode(r)}},{key:"isTargetInsideTabContent",value:function(e,t){return e.find(t).length}},{key:"openMobileTabsHorizontal",value:function(e){var t,n;if(e.hasClass("tab-title-item"))t=e.children("a"),n=s("#".concat(e.children("a").attr("aria-controls")));else{var r=o().sanitize("".concat(f).concat(e.first().attr("id")).concat(d));t=s(r).children("a"),n=s("#panel-".concat(e.first().attr("id")).concat(d))}var i=t.closest(c)[0],a=this.globalComponents.components.findComponentByHTMLNode(i),l=t.parent();return a.instance.cleanElements(),a.instance.setSelectedElement(l,n),t}},{key:"openTabsHorizontal",value:function(e){var t=o().sanitize("".concat(f).concat(e.first().attr("id"))),n=s(t).children("a"),r=n.closest(c)[0],i=this.globalComponents.components.findComponentByHTMLNode(r);i&&i.instance.togglePanel(n)}},{key:"scrollToHorizontalTabs",value:function(e){var t=this.openMobileTabsHorizontal(e);this.openTabsHorizontal(e),this.scrollToHtmlNode(t.closest(".O-SMARTSPCGEN-DEV"))}},{key:"isExpanderOrAccordion",value:function(e){return e.siblings(v).length||e.siblings().children(v).length}},{key:"scroll",value:function(e){if("#"!==e){if(this.globalComponents.headerController.checkMobileHeaderIsExpanded()&&this.globalComponents.headerController.closeMobileHeader(),e.indexOf(g)>-1){var t=e.replace(g,""),n="#"!==t&&s(t);if(n.length&&this.isExpanderOrAccordion(n)&&n.is(":visible"))return void this.scrollToAccordionOrExpander(n,t)}this.handleScrollSmartTabs(e)}}},{key:"handleScrollSmartTabs",value:function(e){var t=s(e),n=t.closest(h),r=n&&n.length,o=t.closest(u).length,i=t.closest(v).length,a=this.isExpanderOrAccordion(t);if(!n.length||n.is(":visible"))o?this.scrollToHorizontalTabs(t,e):i||a?this.scrollToAccordionOrExpander(t,e):r?this.scrollToSmartTabs(t,e):this.scrollToHtmlNode(t,e);else{var l=n.siblings(y),c=l.length&&l.find(e);this.scrollToAccordionOrExpander(c)}}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==w(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}var k=jQuery,C=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.anchorHashSymbol="#",this.urlSeparator="?",this.parsedParams=this.createEmptyHashObject(),this.hashParser=this.createCallbackHandler()}var t,n;return t=e,(n=[{key:"createEmptyHashObject",value:function(){return{anchorString:""}}},{key:"parseParamsFromString",value:function(e){return e}},{key:"parseHashFromLocationHash",value:function(e){var t,n=e.substring(e.indexOf(this.anchorHashSymbol),e.length),r="";return n.indexOf(this.urlSeparator)>=0?(t=n.substring(0,n.indexOf(this.urlSeparator)),r=n.substring(n.indexOf(this.urlSeparator),n.length)):t=n,this.parsedParams.anchorHash=t,this.parsedParams.paramsString=r,{anchorString:t,paramsString:r}}},{key:"createCallbackHandler",value:function(){var e=this;k(window).on("hashchange",(function(t){t.preventDefault();var n=window.location.hash,r=e.parseHashFromLocationHash(n).paramsString;e.parseParamsFromString(r),k(window).trigger("HashParser:hash_parsed")}))}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}var O=jQuery,A=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.hashParser=t.hashParser,this.scrollService=t.scrollService,this.smoothScrollEneabled=!1,this.bindScrollToHashChange(),this.bindScrollToPageLoad()}var t,n;return t=e,(n=[{key:"anchorAction",value:function(e){this.scrollService.scroll(e),window.history.pushState({},"",e)}},{key:"bindScrollToPageLoad",value:function(){var e=this;O(document).on("DOMContentLoaded",(function(t){t.preventDefault();var n=window.location.hash,r=e.hashParser.parseHashFromLocationHash(n).anchorString;r&&r.length&&(0===O(".pws-header").length?e.scrollService.scroll(r):setTimeout((function(){e.scrollService.scroll(r)}),100))}))}},{key:"bindScrollToHashChange",value:function(){var e=this;O(window).on("HashParser:hash_parsed",(function(){var t=e.hashParser.parsedParams.anchorHash;t&&e.scrollService.scroll(t)}))}}])&&M(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==_(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}var N=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.memory=[0],this.scrollUpLength=15,this.scrollDownLength=5,this.maximumMemorySize=99999}var t,n;return t=e,(n=[{key:"setScrollPosition",value:function(e){this.memory.push(e),this.memory.length>this.maximumMemorySize&&this.cleanMemory()}},{key:"getScrollPosition",value:function(){this.memory(this.memory.length-1)}},{key:"isScrollingDown",value:function(){var e=this.memory.length;return this.memory[e-1]>this.memory[e-2]}},{key:"isScrolledDownSimple",value:function(){var e=this.memory.length;return this.memory[e-1]>this.memory[e-2]+1&&this.memory[e-2]>this.memory[e-3]+1&&this.memory[e-3]>this.memory[e-4]+1}},{key:"isScrolledUpSimple",value:function(){var e=this.memory.length;return this.memory[e-1]<this.memory[e-2]-4&&this.memory[e-2]<this.memory[e-3]-4&&this.memory[e-3]<this.memory[e-4]-4&&this.memory[e-4]<this.memory[e-5]-4}},{key:"cleanMemory",value:function(){if(this.memory.length>=this.historiScrollGeterSize){for(var e=[],t=this.memory.length-this.historiScrollGeterSize;t<this.memory.length;t++)e.push(this.memory[iterationStartIndex]);this.memory.length>9999&&(this.memory=e)}}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==P(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}var I=jQuery,D="isScrolledDown",j="isScrolledUp",H=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.headerController=t.headerController,this.scrollMemoryModel=new N,this.$document=I(document),this.lastEvent="none",this.dynamicBannerIsActivated=!1,this.bindScrollForBanner(),this.headerController.dynamicBannerShouldBeActivated()&&(this.dynamicBannerIsActivated=!0,setTimeout((function(){n.scrolledUpEvent()}),2e3))}var t,n;return t=e,(n=[{key:"scrolledUpEvent",value:function(){this.lastEvent=j,I(document).trigger("appScroll.isScrolledUp")}},{key:"scrolledDownEvent",value:function(){this.lastEvent=D,I(document).trigger("appScroll.isScrolledDown")}},{key:"analyzeScroll",value:function(){var e=this.scrollMemoryModel.isScrollingDown();if(this.headerController.dynamicButtonExistOnPage&&this.headerController.pinnedBannerIsDynamicBanner&&!this.dynamicBannerIsActivated){if(!this.headerController.dynamicBannerShouldBeActivated())return;this.dynamicBannerIsActivated=!0}this.lastEvent!==D&&e?this.scrollMemoryModel.isScrolledDownSimple()&&this.scrolledDownEvent():this.lastEvent===j||e||this.scrollMemoryModel.isScrolledUpSimple()&&this.scrolledUpEvent()}},{key:"isLastScrollScrollingDown",value:function(){return this.lastEvent===D}},{key:"bindScrollForBanner",value:function(){var e=this;this.$document.scroll((function(){e.scrollMemoryModel.setScrollPosition(window.pageYOffset),window.pageYOffset>e.headerController.mainContentPadding?e.analyzeScroll():e.lastEvent!==j&&e.scrolledUpEvent()}))}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==B(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}var U=jQuery,F=".header-nav-wrapper",z=".O-PINBANNER-RW-ALL",W="dynamic",$=".button-for-pinned-banner",G=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.globalComponents=t,this.$header=this.findHeader(),this.isPwsHeader=this.checkPwsHeader(),this.$headerContainer=this.findHeaderContainer(this.$header),this.havePinnedBanner=!1,this.$pinnedBanner=U(z),this.$hederNavWrapper=this.$header.find(F),this.headerChangingSize=!1,this.prevWindowWidth=U(window).width(),this.$pinnedBanner.length&&(this.appendPinnedBanner(),this.findDynamicButtonAndBanner()),this.setHeaderToFixedAndAddPaddingToMainContent(),this.bindUIEvents()}var t,n;return t=e,n=[{key:"findHeader",value:function(){return U(".header, .pws-header").first()}},{key:"findMobileHeader",value:function(){return U(".header-mobile")[0]}},{key:"checkMobileHeaderIsExpanded",value:function(){return U("#sidebar").hasClass("expanded")}},{key:"closeMobileHeader",value:function(){var e=this.findMobileHeader(),t=this.globalComponents.components.findComponentByHTMLNode(e);t&&t.instance&&t.instance.closeSidebar()}},{key:"checkPwsHeader",value:function(){return this.$header.hasClass("pws-header")}},{key:"bindUIEvents",value:function(){var e=this;U(window).on("load headerMessageChange",(function(){e.headerChangingSize=!0,e.setPaddingToMainContent()})),U(window).on("resize",(function(){e.windowWidth=U(window).width(),e.prevWindowWidth!==e.windowWidth&&(e.prevWindowWidth=e.windowWidth,e.headerChangingSize=!0,e.setPaddingToMainContent())}))}},{key:"findHeaderContainer",value:function(e){return e.parent()}},{key:"calculatePaddingForMainContent",value:function(e){var t=e.height();return this.$pinnedBanner.length?(!this.headerChangingSize&&t<this.lastHeaderHeight?t=this.lastHeaderHeight:(this.headerChangingSize=!1,this.lastHeaderHeight=t),t):t}},{key:"appendPinnedBanner",value:function(){this.globalComponents.configuration.checkViewTypeIsForClient()&&this.$pinnedBanner.length&&this.$hederNavWrapper&&(this.havePinnedBanner=!0,this.$pinnedBanner.parent().height(0),this.$hederNavWrapper.append(this.$pinnedBanner))}},{key:"findDynamicButtonAndBanner",value:function(){this.$dynamicButtonForBanner=U($).first(),this.pinnedBannerIsDynamicBanner=this.$pinnedBanner.hasClass(W),this.$dynamicButtonForBanner&&(this.dynamicButtonExistOnPage=!0)}},{key:"dynamicBannerShouldBeActivated",value:function(){return this.pinnedBannerIsDynamicBanner&&this.$dynamicButtonForBanner.length&&this.$dynamicButtonForBanner.offset().top+this.$dynamicButtonForBanner.outerHeight()<window.pageYOffset+this.$header.height()}},{key:"setPaddingToMainContent",value:function(){if(this.globalComponents.configuration.checkViewTypeIsForClient()){var e=this.$header||this.findHeader();this.mainContentPadding=this.calculatePaddingForMainContent(e),this.$headerContainer.css("padding-top",this.mainContentPadding)}}},{key:"setHeaderToFixedAndAddPaddingToMainContent",value:function(){this.globalComponents.configuration.checkViewTypeIsForClient()&&(this.$header.css("position","fixed"),this.setPaddingToMainContent())}},{key:"addPinnedBannerCalculation",value:function(e,t){var n=this.globalComponents.windowScrollMechanism.isLastScrollScrollingDown(),r=this.globalComponents.anchorScrollController.smoothScrollEnabled;return r&&!0===t?n?e+this.$header.find(F).height():e:r&&!1===t?n?e+this.$pinnedBanner.height():e-(this.$header.find(F).height()-this.$pinnedBanner.height()):n?e+this.$pinnedBanner.height():e}},{key:"calculateHeaderHeight",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"disabled",t=this.$header&&this.$header.height();if(this.havePinnedBanner&&(t=this.addPinnedBannerCalculation(t,e)),this.isPwsHeader){var n=this.$header.siblings(".header-messages").first(),r=n&&n.height();t=r?t+r:t}var o=U(".product-select-container");return o.length>0&&(t+=o.height()+parseInt(o.css("padding-top"),10)+4),t}}],n&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==V(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===V(o)?o:String(o)),r)}var o}var Y=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.components=t,this.configuration=n,this.hashParser=this.getHashParser(),this.scrollService=this.getScrollService(),this.headerController=this.getHeaderController(),this.anchorScrollController=this.getAnchorScrollController(),this.headerController.havePinnedBanner&&(this.windowScrollMechanism=this.getWindowScrollMechanism())}var t,n;return t=e,(n=[{key:"getHeaderController",value:function(){return new G(this)}},{key:"getWindowScrollMechanism",value:function(){return new H(this)}},{key:"getScrollService",value:function(){return new S(this)}},{key:"getHashParser",value:function(){return new C(this)}},{key:"getAnchorScrollController",value:function(){return new A(this)}}])&&Q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function K(e){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(e)}function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],s=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){c=!0,o=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return J(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function X(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==K(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==K(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===K(o)?o:String(o)),r)}var o}var Z=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"checkDomain",value:function(e){var t=e;return 0===t.indexOf("//")&&(t=window.location.protocol+t),t.toLowerCase().replace(/([a-z])?:\/\//,"$1").split("/")[0]}},{key:"isExternal",value:function(t){return(t.indexOf(":")>-1||t.indexOf("//")>-1)&&e.checkDomain(window.location.href)!==e.checkDomain(t)}},{key:"isLinkToCurrentPage",value:function(e){var t=e.href.split("?")[0],n=t.split("#");t=q(n,1)[0];var r=window.location.href.split("?")[0];return t===q(r.split("#"),1)[0]}},{key:"getAnchorIDFromHTMLNodeHref",value:function(t){var n=t.getAttribute("href");return e.isExternal(n)||!e.isLinkToCurrentPage(t)?null:n.substr(n.indexOf("#"))}}],null&&X(t.prototype,null),n&&X(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function ee(e){return ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ee(e)}function te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==ee(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==ee(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===ee(o)?o:String(o)),r)}var o}var ne=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.modules=t,this.componentMap=new Map,this.UrlHelper=Z}var t,n;return t=e,(n=[{key:"addInstanceToComponentsMap",value:function(e){var t=e.instance&&e.instance.$el&&e.instance.$el[0];t&&this.componentMap.set(t,e)}},{key:"getComponentByID",value:function(e){this.componentMap.get(e)}},{key:"findComponentByHTMLNode",value:function(e){return this.componentMap.get(e)}}])&&te(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function re(e){return re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},re(e)}function oe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==re(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==re(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===re(o)?o:String(o)),r)}var o}var ie=jQuery,ae=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.globalComponents=t,this.editModes=["Edit","Design","Developer"],this.$document=ie("document"),this.onStartIsConfigPage=this.isConfigPage(),this.onStartIsEditMode=this.isEditMode(),this.onStartIsPatternLab=this.isPatternLab(),this.onStartIsForClient=this.checkViewTypeIsForClient()}var t,n;return t=e,(n=[{key:"isConfigPage",value:function(){return ie("body").hasClass(".configPage")}},{key:"isPatternLab",value:function(){return!(!this.$document||"patternlab-html"!==ie(this.$document.documentElement).attr("id"))}},{key:"isEditMode",value:function(){return void 0!==parent.Granite&&void 0!==parent.Granite.author&&void 0!==parent.Granite.author.layerManager&&-1!==this.editModes.indexOf(parent.Granite.author.layerManager.getCurrentLayer())}},{key:"checkViewTypeIsForClient",value:function(){return!this.isConfigPage()&&!this.isEditMode()&&!this.isPatternLab()}}])&&oe(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function le(e){return le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},le(e)}function se(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ce=function(e){var t=[],n=new ae,r=new ne(t),a=new Y(r,n),l={modules:t,configuration:n,components:r,globalComponents:a},s=[],c={small:480,medium:960,smallModern:768,mediumModern:1024,largeModern:1366,xlargeModern:1920},u={mobile:7,tablet:9,desktop:10,smallModern:7,mediumModern:9,largeModern:10,xlargeModern:12,xxlargeModern:14},f={globalSettings:"global-settings"},d={SECOND_MILLISECONDS:1e3,MINUTE_MILLISECONDS:6e4,HOUR_MILLISECONDS:36e5,DAY_MILLISECONDS:864e5},p=navigator.userAgent,m=p.toLowerCase().indexOf("firefox")>-1,h=p.includes("MSIE")||navigator.appVersion.indexOf("Trident/")>0,y=p.includes("Chrome"),v=p.includes("Safari")&&!y&&!/(CriOS|FxiOS|OPiOS|mercury|UCBrowser|QQBrowser)/i.test(p),b=Number(p.split("OS ").slice(1).join().slice(0,3).replace("_","."))<6,g=/iphone|ipad|ipod/i.test(p),S=/android/i.test(p),w=/Windows Phone/i.test(p),T=e("body").is('[class*="globalSmart"]'),k="undefined"!=typeof utag_data,C=D(),E=j(),M=H(),O=B(),A=null,_=/iphone|android|webos|ipad|ipod|blackberry|iemobile|opera mini|Windows Phone/i.test(p),x="rtl"===e("html").attr("dir"),N=e("body").hasClass("landingPageTemplate");function P(e,t){for(var n=t.querySelectorAll(e.selector),r=0;r<n.length;r++)n[r].gpwsInitialized||L(e,n[r])}function L(e,t){t.gpwsInitialized=!0;var n=e.init(t,l);!function(e,t){var n={name:e.name,selector:e.selector,instance:t};r.addInstanceToComponentsMap(n)}(e,n)}function I(n){for(var r,o=n||document.body,i=0;i<t.length;i++){var a=t[i];n&&e(o).is(a.selector)?L(a,o):P(a,o)}r=e("a[href^=tel]"),_||r.addClass("no-link").attr("role","presentation").click((function(e){e.preventDefault()}))}function D(){return{mobile:"mobile"===H(),tablet:"tablet"===H(),desktop:"desktop"===H()}}function j(){return{smallModern:"smallModern"===B(),mediumModern:"mediumModern"===B(),largeModern:"largeModern"===B(),xlargeModern:"xlargeModern"===B(),xxlargeModern:"xxlargeModern"===B()}}function H(){var e=window.innerWidth;return e<c.small?"mobile":e>=c.medium?"desktop":"tablet"}function B(){var e=window.innerWidth;return e<c.smallModern?"smallModern":e<c.mediumModern?"mediumModern":e<c.largeModern?"largeModern":e<c.xlargeModern?"xlargeModern":"xxlargeModern"}function R(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!r.domain){var o=e(document.body).data(f.globalSettings);o&&o.cookieDomain&&(r.domain=o.cookieDomain)}return r.expires=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r="object"===le(n)?function(e){var t=0;return e.milliseconds&&(t=e.milliseconds),e.seconds&&(t+=e.seconds*d.SECOND_MILLISECONDS),e.minutes&&(t+=e.minutes*d.MINUTE_MILLISECONDS),e.hours&&(t+=e.hours*d.HOUR_MILLISECONDS),e.days&&(t+=e.days*d.DAY_MILLISECONDS),e.months&&(t+=e.months*Math.floor(30.5*d.DAY_MILLISECONDS)),e.years&&(t+=e.years*Math.floor(365.25*d.DAY_MILLISECONDS)),t}(n):n;return 0!==r&&"number"==typeof r?(e=r,(t=new Date).setTime(t.getTime()+e),t.toUTCString()):n}(r.expires),Object.entries(r).reduce((function(e,t){var n,r,o=(r=2,function(e){if(Array.isArray(e))return e}(n=t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],s=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){c=!0,o=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}(n,r)||function(e,t){if(e){if("string"==typeof e)return se(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?se(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],a=o[1];if(!a)return e;var l=!0!==a?"=".concat(a):"";return"".concat(e,"; ").concat(i).concat(l)}),"".concat(t,"=").concat(encodeURIComponent(n)))}function U(e,t,n){document.cookie=R(e,t,n)}return e(window).on("resize",(function(){var e=H(),t=B();e!==M&&(M=e,window.HSBC_utils.matchMedia=D()),t!==O&&(O=t,window.HSBC_utils.matchMediaModern=j())})),{deregisterComponent:function(e){t.splice(e,1)},init:I,initSegmentationFixInterval:function(){var e=1;A||(A=setInterval((function(){I(),200===e&&(clearInterval(A),A=null),e++}),300))},isEditMode:function(){return n.isEditMode()},isPreviewMode:function(){return void 0!==parent.Granite&&void 0!==parent.Granite.author&&void 0!==parent.Granite.author.layerManager&&-1!==["Preview"].indexOf(parent.Granite.author.layerManager.getCurrentLayer())},isPatternLab:function(){return n.isPatternLab()},registerComponent:function(e){t.push(e),e.reinitIfParent&&s.push(e)},reinitializeParent:function(t){do{t=t.parentNode}while(t&&!t.gpwsInitialized);if(t)for(var n=0;n<s.length;n++){var r=s[n];if(e(t).is(r.selector))return void r.reinit(t)}},dispatchLayerSwitchEvent:function(e){var n=t.length,r=null,o=0;if(e.prevLayer!==e.layer)for("Edit"===e.layer?r="switchToEditHandler":"Preview"===e.layer&&(r="switchToPreviewHandler");o<n;o++)t[o][r]&&t[o][r]()},prepareCookieString:R,setCookie:U,getCookie:function(e){var t=new RegExp("(?:^|; )".concat(e,"=([^;]*)")),n=document.cookie.match(t);return n?decodeURIComponent(n[1]):void 0},deleteCookie:function(e,t,n){U(e,"",{domain:n,path:t,expires:"Thu, 01 Jan 1970 00:00:00 UTC"})},keyCodes:{ENTER:13,SPACE:32,UP:38,DOWN:40,LEFT:37,RIGHT:39,ESC:27,TAB:9,SHIFT:16},matchMedia:C,matchMediaModern:E,getMatchMediaUnit:function(){return u[H()]},getMatchMediaUnitModern:function(){return u[B()]},focusables:["a","button","input",'[tabindex="0"]'],getUrlParam:function(e,t){var n;t=t||location.href,e=(e=e||"").replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var r=new RegExp("[\\?&]".concat(e,"=([^&#]*)")).exec(t),a=null==r?null:r[1],l=null!=a?decodeURIComponent(a.replace(/\+/g,"%20")):null;return n=o().sanitize(l),"about:blank"===(n=(0,i.N)(n))?null:n},collapseElement:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.animate({height:0},200,(function(){t&&e.remove()}))},isFirefox:m,isInternetExplorer:h,isChrome:y,isSafari:v,iOSLowerVersion:b,isMobileiOS:g,isMobileAndroid:S,isMobileWindowsPhone:w,isSmartTemplate:T,isTealiumReady:k,isRTL:x,isCLP:N,focusOnTheNextTabbableElement:function(t){var n=e(":tabbable"),r=n.length,o=n.index(t)+1;o<r&&n.get(o).focus()},smoothScrollToHTMLNode:function(e){a.scrollService.smoothScrollToHTMLNode(e)}}}(jQuery);window.HSBC_utils=ce},8883:(e,t,n)=>{"use strict";var r=n(7856),o=n.n(r);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===i(o)?o:String(o)),r)}var o}var l=Bootstrap.jQuery,s={anchorDataVisuallyHidden:[".text a[title]",'.text a[target="_blank"]',".rich-text a[title]",'.rich-text a[target="_blank"]',"table a[title]",'table a[target="_blank"]','[class*="A-PAR"] a[title]','[class*="A-PAR"] a[target="_blank"]','[class*="A-TYP"] a[title]','[class*="A-TYP"] a[target="_blank"]','[class*="A-BBS"] a[title]','[class*="A-BBS"] a[target="_blank"]'],chevronLink:['.text a[class*="A-LNKC"]','.rich-text a[class*="A-LNKC"]','table a[class*="A-LNKC"]'],linkTextWrapper:'[aria-hidden="true"]',visuallyHidden:".visuallyhidden",body:"body",articleMainMrichText:".article-main .M-RICHTEXT-ART-DEV"},c="title",u="&nbsp;",f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"init",value:function(){var e=this;this.addVisuallyHiddenTag(),this.addChevronLinkSpan(),l(document).on("pws_modal_open generic_modal_open",(function(t){var n="pws_modal_open"===t.type?".pws-modal-body":".modal-curtain";e.addVisuallyHiddenTag(n),e.addChevronLinkSpan(n)}))}},{key:"addVisuallyHiddenTag",value:function(e){var t=e||"",n=s.anchorDataVisuallyHidden.join(",".concat(t," ")),r=l(n),i=this.newWindowLinkText();l.each(r,(function(e,t){var n=l(t),r=n.text()||"",a=n.find(s.visuallyHidden),f=n.find(s.linkTextWrapper),d="_blank"===n.attr("target"),p=o().sanitize(n.attr(c)||""),m=a.text()||"";""===p&&!i.length||!r.length||m.length||(a.remove(),r=o().sanitize((n.text()||"").trim()),n.empty(),m=d?"".concat(r," ").concat(p," ").concat(i):"".concat(r," ").concat(p),f=l('<span aria-hidden="true"></span>'),n.append(f),f.html(r),a=l('<span class="visuallyhidden"></span>'),n.append(a),a.html(m),n.removeAttr(c),d&&n.closest(s.articleMainMrichText).length&&f.after(u))}))}},{key:"addChevronLinkSpan",value:function(e){var t=e||"",n=s.chevronLink.join(",".concat(t," ")),r=l(n);l.each(r,(function(e,t){var n=l(t),r=n.find(s.linkTextWrapper);if(0!==r.length)r.addClass("link");else{var i=o().sanitize(n.text()),a=l('<span class="link"></span>');a.html(i),n.html(a)}n.append(u)}))}},{key:"fetchGlobalSettings",value:function(){return l(s.body).data("global-settings")||{}}},{key:"newWindowLinkText",value:function(){return this.fetchGlobalSettings().newWindowLinkText||""}}],null&&a(t.prototype,null),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();l(document).ready((function(){return f.init()}))},7565:()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n="a[target='_blank']",r="noopener",o={childList:!0,attributes:!0,characterData:!0,subtree:!0},i=Bootstrap.jQuery,a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var a,l;return a=e,l=[{key:"init",value:function(){this.timer=void 0,this.bindUIEvents(),this.setNoOpenerAttr()}},{key:"bindUIEvents",value:function(){var e=this;window.MutationObserver?new MutationObserver((function(){return e.handleDOMChange()})).observe(document.body,o):i("body").on("DOMNodeInserted",n,(function(t){return e.setNoOpenerAttr(i(t.target))}))}},{key:"setNoOpenerAttr",value:function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:i(n)).each((function(){var e=i(this),t=e.attr("rel");void 0===t?e.attr("rel",r):t.toLowerCase().includes(r)||e.attr("rel","".concat(t," ").concat(r))}))}},{key:"handleDOMChange",value:function(){var e=this;void 0===this.timer&&(this.timer=setTimeout((function(){e.setNoOpenerAttr(),e.timer=void 0}),10))}}],null&&t(a.prototype,null),l&&t(a,l),Object.defineProperty(a,"prototype",{writable:!1}),e}();i(document).ready((function(){return a.init()}))},1265:()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=(0,Bootstrap.jQuery)("body"),r="no-outlines";(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var o,i;return o=e,i=[{key:"init",value:function(){n.on("mousedown",(function(){return n.addClass(r)})).on("keydown",(function(){return n.removeClass(r)}))}}],null&&t(o.prototype,null),i&&t(o,i),Object.defineProperty(o,"prototype",{writable:!1}),e})().init()},2988:(e,t,n)=>{"use strict";var r=n(8654);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}var a=Bootstrap.jQuery,l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.lang=e.setUpLang(),this.settings=a.extend({name:"HSBC_".concat(this.lang,"_").concat(this.constructor.name),cookieSettings:{path:"/",expires:{days:365}},session:!1,forceCookie:!1,sessionCookieSettings:{path:"/"}},t),this.localStorage=window.localStorage,this.sessionStorage=window.sessionStorage,this.hasLocalStorage=void 0!==this.localStorage,this.hasSessionStorage=void 0!==this.sessionStorage,this.setCookie=HSBC_utils.setCookie,this.getCookie=HSBC_utils.getCookie}var t,n,r;return t=e,r=[{key:"parseData",value:function(e){return e?JSON.parse(e):{}}},{key:"setUpLang",value:function(){return a("html").attr("lang")}}],(n=[{key:"save",value:function(e){var t=e||{};this.settings.session?this.hasSessionStorage&&!this.settings.forceCookie?this.sessionStorage[this.settings.name]=JSON.stringify(t):this.setCookie(this.settings.name,JSON.stringify(t),this.settings.sessionCookieSettings):this.hasLocalStorage&&!this.settings.forceCookie?this.localStorage[this.settings.name]=JSON.stringify(t):this.setCookie(this.settings.name,JSON.stringify(t),this.settings.cookieSettings)}},{key:"read",value:function(){return this.settings.session?this.hasSessionStorage&&!this.settings.forceCookie?e.parseData(this.sessionStorage[this.settings.name]):e.parseData(this.getCookie(this.settings.name)):this.hasLocalStorage&&!this.settings.forceCookie?e.parseData(this.localStorage[this.settings.name]):e.parseData(this.getCookie(this.settings.name))}}])&&i(t.prototype,n),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),s=n(2516);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}var f=Bootstrap.jQuery,d=".smart-banner",p="smart-banner",m="has-ios-banner",h="has-android-banner",y={appId:f('meta[name="apple-itunes-app"]').attr("content"),iosAppUrl:f('meta[name="app-itunes"]').attr("content"),androidAppUrl:f('meta[name="app-google-play"]').attr("content"),pageUrl:s.L.isTealiumReady&&utag_data.page_url?utag_data.page_url:document.location.pathname,title:f('meta[name="app-title"]').attr("content"),desc:f('meta[name="app-desc"]').attr("content"),viewBtnTxt:f('meta[name="app-view-label"]').attr("content")||"View",closeLabel:f('meta[name="app-close-label"]').attr("content")||"Close",bannerImg:f('meta[name="app-img"]').attr("content")||""},v=f("body"),b=f(".messaging-banner:first"),g=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"init",value:function(){this.dataKeeper=new l({name:"smartAppBanner",cookieSettings:{expires:{months:6}}}),this.storedData=this.dataKeeper.read(),this.storedData!==y.androidAppUrl&&this.storedData!==y.iosAppUrl&&(this.bindUIEvents(),this.setSmartBanner())}},{key:"bindUIEvents",value:function(){var e=this,t=b.find(".smart-banner-install"),n=b.find(".smart-banner-close");t.on("click",(function(e){r.j.trackEvent({event_type:"click",page_url:y.pageUrl,event_category:"content",event_action:"button click",event_content:"view smart banner"})})),n.on("click",(function(t){v.removeClass("".concat(m," ").concat(h)),b.find(d).remove(),e.triggerChangeMessageEvent(),r.j.trackEvent({event_type:"click",page_url:y.pageUrl,event_category:"content",event_action:"button click",event_content:"close smart banner"}),e.isMobileiOSModeToShowBanner()?e.dataKeeper.save(y.iosAppUrl):e.isMobileAndroidModeToShowBanner()&&e.dataKeeper.save(y.androidAppUrl)}))}},{key:"triggerChangeMessageEvent",value:function(){f(window).trigger("headerMessageChange")}},{key:"tealiumLoadEvent",value:function(){r.j.trackEvent({event_type:"load",page_url:y.pageUrl,event_category:"content",event_action:"popup",event_content:"smart banner popup"})}},{key:"setSmartBanner",value:function(){arguments.length>0&&void 0!==arguments[0]||f(d),this.isMobileiOSModeToShowBanner()&&!s.L.isSafari?(this.iOSBannerLoad(),this.bindUIEvents()):this.isMobileAndroidModeToShowBanner()&&(this.androidBannerLoad(),this.bindUIEvents()),this.triggerChangeMessageEvent()}},{key:"isMobileAndroidModeToShowBanner",value:function(){return s.L.isMobileAndroid&&y.androidAppUrl}},{key:"isMobileiOSModeToShowBanner",value:function(){return s.L.isMobileiOS&&y.iosAppUrl}},{key:"iOSBannerLoad",value:function(){var e=this.bannerTemplateIos();b.prepend(e),v.addClass(m),this.tealiumLoadEvent()}},{key:"androidBannerLoad",value:function(){var e=this.bannerTemplateAndroid();b.prepend(e),v.addClass(h),this.tealiumLoadEvent()}},{key:"bannerTemplateIos",value:function(){return'\n    <div class="'.concat(p,'-wrapper"><div id="').concat(p,'"  class="').concat(p,'">\n         <button id="smart-banner-close" class="smart-banner-close" role="button" aria-label=" smartBannerParam.closeLabel}">\n             <span aria-hidden="true">&times;</span>\n         </button>\n         <span class="smart-banner-logo" style="background-image: url(\'').concat(y.bannerImg,'\');"></span>\n         <p class="smart-banner-title">').concat(y.title,"\n             <span>").concat(y.desc,'</span>\n         </p>\n         <p class="smart-banner-install">\n             <a id="smart-banner-install" href="').concat(y.iosAppUrl,'" target="_blank" rel="noopener noreferrer">').concat(y.viewBtnTxt,"</a>\n         </p>\n    <br /></div></div>")}},{key:"bannerTemplateAndroid",value:function(){return'\n<div class="'.concat(p,'-wrapper"><div id="').concat(p,'"  class="').concat(p,'">\n     <span class="smart-banner-logo" style="background-image: url(\'').concat(y.bannerImg,'\');"></span>\n     <button id="smart-banner-close" class="smart-banner-close" role="button" aria-label="').concat(y.closeLabel,'">\n         <span aria-hidden="true">&times;</span>\n     </button>\n     <p class="smart-banner-title">').concat(y.title,"\n         <span>").concat(y.desc,'</span>\n     </p>\n     <p class="smart-banner-install">\n         <a id="smart-banner-install" href="').concat(y.androidAppUrl,'" target="_blank" rel="noopener noreferrer">').concat(y.viewBtnTxt,"</a>\n     </p>\n<br /></div></div>")}}],null&&u(t.prototype,null),n&&u(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();f(window).on("load",(function(){return g.init()}))},9873:()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=Bootstrap.jQuery,r=n("div.cc-wrapper"),o=n("div.O-SMARTSPCGEN-DEV");(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,i;return n=e,i=[{key:"init",value:function(){r.attr("role","region"),o.attr("role","region")}}],null&&t(n.prototype,null),i&&t(n,i),Object.defineProperty(n,"prototype",{writable:!1}),e})().init()},8654:(e,t,n)=>{"use strict";n.d(t,{j:()=>r});var r={trackEvent:function(e){var t=window.TMS||null;e&&t&&t.trackEvent(e)},trackView:function(e){var t=window.TMS||null;e&&t&&t.trackView(e)},trackEventWithInheritance:function(e){var t={};HSBC_utils.isTealiumReady&&(t={site_section:utag_data.site_section?utag_data.site_section:"",page_type:utag_data.page_type?utag_data.page_type:"",page_customer_group:utag_data.page_customer_group?utag_data.page_customer_group:"",page_category:utag_data.page_category?utag_data.page_category:"",page_subcategory:utag_data.page_subcategory?utag_data.page_subcategory:"",page_business_line:utag_data.page_business_line?utag_data.page_business_line:"",page_security_level:utag_data.page_security_level?utag_data.page_security_level:""}),this.trackEvent(Bootstrap.jQuery.extend(t,e))}}},2260:(e,t,n)=>{"use strict";var r=n(7856),o=n.n(r),i=jQuery,a=/^\s+/,l=/\s+$/;[".link-container .link"].map((function(e){return i(e)})).forEach((function(e){e.each((function(){var e,t=i(this),n=t.text().trim().split(" ").length;(function e(t){if(t.nodeType===Node.TEXT_NODE)return t.data=t.data.replace(l,""),0===t.data.length;for(var n=1,r=t.childNodes.length;n<=r&&e(t.childNodes[r-n]);)n+=1;return n>r})(e=t[0]),function e(t){if(t.nodeType===Node.TEXT_NODE)return t.data=t.data.replace(a,""),0===t.data.length;for(var n=0,r=t.childNodes.length;n<r&&e(t.childNodes[n]);)n+=1;return n===r}(e),1===n&&t.addClass("one-word")}))})),[".visuallyhidden"].map((function(e){return i(e)})).forEach((function(e){e.each((function(){var e=i(this),t=o().sanitize(e.text());e.html(t),e.text(e.html(t).text())}))}))},891:()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=Bootstrap.jQuery;(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var r,o;return r=e,o=[{key:"init",value:function(){this.$smartTemplate=n('[class*="globalSmart"]'),this.$buttons=this.$smartTemplate.find(".buttons-vertically"),this.setButtonsWidth(this.$buttons),this.bindUIEvents()}},{key:"setButtonsWidth",value:function(e){e.width("auto");var t=Math.max.apply(null,e.map((function(e,t){return n(t).width()})).get());t>216&&!HSBC_utils.matchMedia.mobile?e.width(t):HSBC_utils.matchMedia.mobile?e.width("".concat(100,"%")):e.width(216)}},{key:"bindUIEvents",value:function(){var e=this;n(window).on("resize",(function(){return e.setButtonsWidth(e.$buttons)}))}}],null&&t(r.prototype,null),o&&t(r,o),Object.defineProperty(r,"prototype",{writable:!1}),e})().init()},7856:function(e){e.exports=function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,n){return t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(e,n)}function n(e,r,o){return n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,n,r){var o=[null];o.push.apply(o,n);var i=new(Function.bind.apply(e,o));return r&&t(i,r.prototype),i},n.apply(null,arguments)}function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=Object.hasOwnProperty,a=Object.setPrototypeOf,l=Object.isFrozen,s=Object.getPrototypeOf,c=Object.getOwnPropertyDescriptor,u=Object.freeze,f=Object.seal,d=Object.create,p="undefined"!=typeof Reflect&&Reflect,m=p.apply,h=p.construct;m||(m=function(e,t,n){return e.apply(t,n)}),u||(u=function(e){return e}),f||(f=function(e){return e}),h||(h=function(e,t){return n(e,r(t))});var y,v=A(Array.prototype.forEach),b=A(Array.prototype.pop),g=A(Array.prototype.push),S=A(String.prototype.toLowerCase),w=A(String.prototype.toString),T=A(String.prototype.match),k=A(String.prototype.replace),C=A(String.prototype.indexOf),E=A(String.prototype.trim),M=A(RegExp.prototype.test),O=(y=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return h(y,t)});function A(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return m(e,t,r)}}function _(e,t,n){n=n||S,a&&a(e,null);for(var r=t.length;r--;){var o=t[r];if("string"==typeof o){var i=n(o);i!==o&&(l(t)||(t[r]=i),o=i)}e[o]=!0}return e}function x(e){var t,n=d(null);for(t in e)!0===m(i,e,[t])&&(n[t]=e[t]);return n}function N(e,t){for(;null!==e;){var n=c(e,t);if(n){if(n.get)return A(n.get);if("function"==typeof n.value)return A(n.value)}e=s(e)}return function(e){return console.warn("fallback value for",e),null}}var P=u(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),L=u(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),I=u(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),D=u(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),j=u(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),H=u(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),B=u(["#text"]),R=u(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),U=u(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),F=u(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),z=u(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),W=f(/\{\{[\w\W]*|[\w\W]*\}\}/gm),$=f(/<%[\w\W]*|[\w\W]*%>/gm),G=f(/\${[\w\W]*}/gm),V=f(/^data-[\-\w.\u00B7-\uFFFF]/),Q=f(/^aria-[\-\w]+$/),Y=f(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),K=f(/^(?:\w+script|data):/i),q=f(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),J=f(/^html$/i),X=function(){return"undefined"==typeof window?null:window};return function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X(),o=function(e){return t(e)};if(o.version="2.4.5",o.removed=[],!n||!n.document||9!==n.document.nodeType)return o.isSupported=!1,o;var i=n.document,a=n.document,l=n.DocumentFragment,s=n.HTMLTemplateElement,c=n.Node,f=n.Element,d=n.NodeFilter,p=n.NamedNodeMap,m=void 0===p?n.NamedNodeMap||n.MozNamedAttrMap:p,h=n.HTMLFormElement,y=n.DOMParser,A=n.trustedTypes,Z=f.prototype,ee=N(Z,"cloneNode"),te=N(Z,"nextSibling"),ne=N(Z,"childNodes"),re=N(Z,"parentNode");if("function"==typeof s){var oe=a.createElement("template");oe.content&&oe.content.ownerDocument&&(a=oe.content.ownerDocument)}var ie=function(t,n){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var r=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(r=n.currentScript.getAttribute(o));var i="dompurify"+(r?"#"+r:"");try{return t.createPolicy(i,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+i+" could not be created."),null}}(A,i),ae=ie?ie.createHTML(""):"",le=a,se=le.implementation,ce=le.createNodeIterator,ue=le.createDocumentFragment,fe=le.getElementsByTagName,de=i.importNode,pe={};try{pe=x(a).documentMode?a.documentMode:{}}catch(e){}var me={};o.isSupported="function"==typeof re&&se&&void 0!==se.createHTMLDocument&&9!==pe;var he,ye,ve=W,be=$,ge=G,Se=V,we=Q,Te=K,ke=q,Ce=Y,Ee=null,Me=_({},[].concat(r(P),r(L),r(I),r(j),r(B))),Oe=null,Ae=_({},[].concat(r(R),r(U),r(F),r(z))),_e=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),xe=null,Ne=null,Pe=!0,Le=!0,Ie=!1,De=!0,je=!1,He=!1,Be=!1,Re=!1,Ue=!1,Fe=!1,ze=!1,We=!0,$e=!1,Ge=!0,Ve=!1,Qe={},Ye=null,Ke=_({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),qe=null,Je=_({},["audio","video","img","source","image","track"]),Xe=null,Ze=_({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),et="http://www.w3.org/1998/Math/MathML",tt="http://www.w3.org/2000/svg",nt="http://www.w3.org/1999/xhtml",rt=nt,ot=!1,it=null,at=_({},[et,tt,nt],w),lt=["application/xhtml+xml","text/html"],st=null,ct=a.createElement("form"),ut=function(e){return e instanceof RegExp||e instanceof Function},ft=function(t){st&&st===t||(t&&"object"===e(t)||(t={}),t=x(t),he=he=-1===lt.indexOf(t.PARSER_MEDIA_TYPE)?"text/html":t.PARSER_MEDIA_TYPE,ye="application/xhtml+xml"===he?w:S,Ee="ALLOWED_TAGS"in t?_({},t.ALLOWED_TAGS,ye):Me,Oe="ALLOWED_ATTR"in t?_({},t.ALLOWED_ATTR,ye):Ae,it="ALLOWED_NAMESPACES"in t?_({},t.ALLOWED_NAMESPACES,w):at,Xe="ADD_URI_SAFE_ATTR"in t?_(x(Ze),t.ADD_URI_SAFE_ATTR,ye):Ze,qe="ADD_DATA_URI_TAGS"in t?_(x(Je),t.ADD_DATA_URI_TAGS,ye):Je,Ye="FORBID_CONTENTS"in t?_({},t.FORBID_CONTENTS,ye):Ke,xe="FORBID_TAGS"in t?_({},t.FORBID_TAGS,ye):{},Ne="FORBID_ATTR"in t?_({},t.FORBID_ATTR,ye):{},Qe="USE_PROFILES"in t&&t.USE_PROFILES,Pe=!1!==t.ALLOW_ARIA_ATTR,Le=!1!==t.ALLOW_DATA_ATTR,Ie=t.ALLOW_UNKNOWN_PROTOCOLS||!1,De=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,je=t.SAFE_FOR_TEMPLATES||!1,He=t.WHOLE_DOCUMENT||!1,Ue=t.RETURN_DOM||!1,Fe=t.RETURN_DOM_FRAGMENT||!1,ze=t.RETURN_TRUSTED_TYPE||!1,Re=t.FORCE_BODY||!1,We=!1!==t.SANITIZE_DOM,$e=t.SANITIZE_NAMED_PROPS||!1,Ge=!1!==t.KEEP_CONTENT,Ve=t.IN_PLACE||!1,Ce=t.ALLOWED_URI_REGEXP||Ce,rt=t.NAMESPACE||nt,_e=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&ut(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(_e.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&ut(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(_e.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(_e.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),je&&(Le=!1),Fe&&(Ue=!0),Qe&&(Ee=_({},r(B)),Oe=[],!0===Qe.html&&(_(Ee,P),_(Oe,R)),!0===Qe.svg&&(_(Ee,L),_(Oe,U),_(Oe,z)),!0===Qe.svgFilters&&(_(Ee,I),_(Oe,U),_(Oe,z)),!0===Qe.mathMl&&(_(Ee,j),_(Oe,F),_(Oe,z))),t.ADD_TAGS&&(Ee===Me&&(Ee=x(Ee)),_(Ee,t.ADD_TAGS,ye)),t.ADD_ATTR&&(Oe===Ae&&(Oe=x(Oe)),_(Oe,t.ADD_ATTR,ye)),t.ADD_URI_SAFE_ATTR&&_(Xe,t.ADD_URI_SAFE_ATTR,ye),t.FORBID_CONTENTS&&(Ye===Ke&&(Ye=x(Ye)),_(Ye,t.FORBID_CONTENTS,ye)),Ge&&(Ee["#text"]=!0),He&&_(Ee,["html","head","body"]),Ee.table&&(_(Ee,["tbody"]),delete xe.tbody),u&&u(t),st=t)},dt=_({},["mi","mo","mn","ms","mtext"]),pt=_({},["foreignobject","desc","title","annotation-xml"]),mt=_({},["title","style","font","a","script"]),ht=_({},L);_(ht,I),_(ht,D);var yt=_({},j);_(yt,H);var vt=function(e){g(o.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=ae}catch(t){e.remove()}}},bt=function(e,t){try{g(o.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){g(o.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!Oe[e])if(Ue||Fe)try{vt(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},gt=function(e){var t,n;if(Re)e="<remove></remove>"+e;else{var r=T(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===he&&rt===nt&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=ie?ie.createHTML(e):e;if(rt===nt)try{t=(new y).parseFromString(o,he)}catch(e){}if(!t||!t.documentElement){t=se.createDocument(rt,"template",null);try{t.documentElement.innerHTML=ot?ae:o}catch(e){}}var i=t.body||t.documentElement;return e&&n&&i.insertBefore(a.createTextNode(n),i.childNodes[0]||null),rt===nt?fe.call(t,He?"html":"body")[0]:He?t.documentElement:i},St=function(e){return ce.call(e.ownerDocument||e,e,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT,null,!1)},wt=function(t){return"object"===e(c)?t instanceof c:t&&"object"===e(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},Tt=function(e,t,n){me[e]&&v(me[e],(function(e){e.call(o,t,n,st)}))},kt=function(e){var t,n;if(Tt("beforeSanitizeElements",e,null),(n=e)instanceof h&&("string"!=typeof n.nodeName||"string"!=typeof n.textContent||"function"!=typeof n.removeChild||!(n.attributes instanceof m)||"function"!=typeof n.removeAttribute||"function"!=typeof n.setAttribute||"string"!=typeof n.namespaceURI||"function"!=typeof n.insertBefore||"function"!=typeof n.hasChildNodes))return vt(e),!0;if(M(/[\u0080-\uFFFF]/,e.nodeName))return vt(e),!0;var r=ye(e.nodeName);if(Tt("uponSanitizeElement",e,{tagName:r,allowedTags:Ee}),e.hasChildNodes()&&!wt(e.firstElementChild)&&(!wt(e.content)||!wt(e.content.firstElementChild))&&M(/<[/\w]/g,e.innerHTML)&&M(/<[/\w]/g,e.textContent))return vt(e),!0;if("select"===r&&M(/<template/i,e.innerHTML))return vt(e),!0;if(!Ee[r]||xe[r]){if(!xe[r]&&Et(r)){if(_e.tagNameCheck instanceof RegExp&&M(_e.tagNameCheck,r))return!1;if(_e.tagNameCheck instanceof Function&&_e.tagNameCheck(r))return!1}if(Ge&&!Ye[r]){var i=re(e)||e.parentNode,a=ne(e)||e.childNodes;if(a&&i)for(var l=a.length-1;l>=0;--l)i.insertBefore(ee(a[l],!0),te(e))}return vt(e),!0}return e instanceof f&&!function(e){var t=re(e);t&&t.tagName||(t={namespaceURI:rt,tagName:"template"});var n=S(e.tagName),r=S(t.tagName);return!!it[e.namespaceURI]&&(e.namespaceURI===tt?t.namespaceURI===nt?"svg"===n:t.namespaceURI===et?"svg"===n&&("annotation-xml"===r||dt[r]):Boolean(ht[n]):e.namespaceURI===et?t.namespaceURI===nt?"math"===n:t.namespaceURI===tt?"math"===n&&pt[r]:Boolean(yt[n]):e.namespaceURI===nt?!(t.namespaceURI===tt&&!pt[r])&&!(t.namespaceURI===et&&!dt[r])&&!yt[n]&&(mt[n]||!ht[n]):!("application/xhtml+xml"!==he||!it[e.namespaceURI]))}(e)?(vt(e),!0):"noscript"!==r&&"noembed"!==r||!M(/<\/no(script|embed)/i,e.innerHTML)?(je&&3===e.nodeType&&(t=e.textContent,t=k(t,ve," "),t=k(t,be," "),t=k(t,ge," "),e.textContent!==t&&(g(o.removed,{element:e.cloneNode()}),e.textContent=t)),Tt("afterSanitizeElements",e,null),!1):(vt(e),!0)},Ct=function(e,t,n){if(We&&("id"===t||"name"===t)&&(n in a||n in ct))return!1;if(Le&&!Ne[t]&&M(Se,t));else if(Pe&&M(we,t));else if(!Oe[t]||Ne[t]){if(!(Et(e)&&(_e.tagNameCheck instanceof RegExp&&M(_e.tagNameCheck,e)||_e.tagNameCheck instanceof Function&&_e.tagNameCheck(e))&&(_e.attributeNameCheck instanceof RegExp&&M(_e.attributeNameCheck,t)||_e.attributeNameCheck instanceof Function&&_e.attributeNameCheck(t))||"is"===t&&_e.allowCustomizedBuiltInElements&&(_e.tagNameCheck instanceof RegExp&&M(_e.tagNameCheck,n)||_e.tagNameCheck instanceof Function&&_e.tagNameCheck(n))))return!1}else if(Xe[t]);else if(M(Ce,k(n,ke,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==C(n,"data:")||!qe[e])if(Ie&&!M(Te,k(n,ke,"")));else if(n)return!1;return!0},Et=function(e){return e.indexOf("-")>0},Mt=function(t){var n,r,i,a;Tt("beforeSanitizeAttributes",t,null);var l=t.attributes;if(l){var s={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Oe};for(a=l.length;a--;){var c=n=l[a],u=c.name,f=c.namespaceURI;if(r="value"===u?n.value:E(n.value),i=ye(u),s.attrName=i,s.attrValue=r,s.keepAttr=!0,s.forceKeepAttr=void 0,Tt("uponSanitizeAttribute",t,s),r=s.attrValue,!s.forceKeepAttr&&(bt(u,t),s.keepAttr))if(De||!M(/\/>/i,r)){je&&(r=k(r,ve," "),r=k(r,be," "),r=k(r,ge," "));var d=ye(t.nodeName);if(Ct(d,i,r)){if(!$e||"id"!==i&&"name"!==i||(bt(u,t),r="user-content-"+r),ie&&"object"===e(A)&&"function"==typeof A.getAttributeType)if(f);else switch(A.getAttributeType(d,i)){case"TrustedHTML":r=ie.createHTML(r);break;case"TrustedScriptURL":r=ie.createScriptURL(r)}try{f?t.setAttributeNS(f,u,r):t.setAttribute(u,r),b(o.removed)}catch(e){}}}else bt(u,t)}Tt("afterSanitizeAttributes",t,null)}},Ot=function e(t){var n,r=St(t);for(Tt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)Tt("uponSanitizeShadowNode",n,null),kt(n)||(n.content instanceof l&&e(n.content),Mt(n));Tt("afterSanitizeShadowDOM",t,null)};return o.sanitize=function(t){var r,a,s,u,f,d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((ot=!t)&&(t="\x3c!--\x3e"),"string"!=typeof t&&!wt(t)){if("function"!=typeof t.toString)throw O("toString is not a function");if("string"!=typeof(t=t.toString()))throw O("dirty is not a string, aborting")}if(!o.isSupported){if("object"===e(n.toStaticHTML)||"function"==typeof n.toStaticHTML){if("string"==typeof t)return n.toStaticHTML(t);if(wt(t))return n.toStaticHTML(t.outerHTML)}return t}if(Be||ft(d),o.removed=[],"string"==typeof t&&(Ve=!1),Ve){if(t.nodeName){var p=ye(t.nodeName);if(!Ee[p]||xe[p])throw O("root node is forbidden and cannot be sanitized in-place")}}else if(t instanceof c)1===(a=(r=gt("\x3c!----\x3e")).ownerDocument.importNode(t,!0)).nodeType&&"BODY"===a.nodeName||"HTML"===a.nodeName?r=a:r.appendChild(a);else{if(!Ue&&!je&&!He&&-1===t.indexOf("<"))return ie&&ze?ie.createHTML(t):t;if(!(r=gt(t)))return Ue?null:ze?ae:""}r&&Re&&vt(r.firstChild);for(var m=St(Ve?t:r);s=m.nextNode();)3===s.nodeType&&s===u||kt(s)||(s.content instanceof l&&Ot(s.content),Mt(s),u=s);if(u=null,Ve)return t;if(Ue){if(Fe)for(f=ue.call(r.ownerDocument);r.firstChild;)f.appendChild(r.firstChild);else f=r;return(Oe.shadowroot||Oe.shadowrootmod)&&(f=de.call(i,f,!0)),f}var h=He?r.outerHTML:r.innerHTML;return He&&Ee["!doctype"]&&r.ownerDocument&&r.ownerDocument.doctype&&r.ownerDocument.doctype.name&&M(J,r.ownerDocument.doctype.name)&&(h="<!DOCTYPE "+r.ownerDocument.doctype.name+">\n"+h),je&&(h=k(h,ve," "),h=k(h,be," "),h=k(h,ge," ")),ie&&ze?ie.createHTML(h):h},o.setConfig=function(e){ft(e),Be=!0},o.clearConfig=function(){st=null,Be=!1},o.isValidAttribute=function(e,t,n){st||ft({});var r=ye(e),o=ye(t);return Ct(r,o,n)},o.addHook=function(e,t){"function"==typeof t&&(me[e]=me[e]||[],g(me[e],t))},o.removeHook=function(e){if(me[e])return b(me[e])},o.removeHooks=function(e){me[e]&&(me[e]=[])},o.removeAllHooks=function(){me={}},o}()}()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(73),n(3936),n(6616),n(6089),n(8310),n(2516),n(8883),n(7565),n(1265),n(2988),n(9873),n(891),n(8654),n(2260)})();
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

const objectToString = Object.prototype.toString;
const isArray =
  Array.isArray
  || function isArrayPolyfill(object) {
    return objectToString.call(object) === '[object Array]';
  };

function isFunction(object) {
  return typeof object === 'function';
}

/**
 * More correct typeof string handling array
 * which normally returns typeof 'object'
 */
function typeStr(obj) {
  return isArray(obj) ? 'array' : typeof obj;
}

function escapeRegExp(string) {
  return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
}

/**
 * Null safe way of checking whether or not an object,
 * including its prototype, has a given property
 */
function hasProperty(obj, propName) {
  return obj != null && typeof obj === 'object' && propName in obj;
}

/**
 * Safe way of detecting whether or not the given thing is a primitive and
 * whether it has the given property
 */
function primitiveHasOwnProperty(primitive, propName) {
  return (
    primitive != null
    && typeof primitive !== 'object'
    && primitive.hasOwnProperty
    && primitive.hasOwnProperty(propName)
  );
}

// Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
// See https://github.com/janl/mustache.js/issues/189
const regExpTest = RegExp.prototype.test;
function testRegExp(re, string) {
  return regExpTest.call(re, string);
}

const nonSpaceRe = /\S/;
function isWhitespace(string) {
  return !testRegExp(nonSpaceRe, string);
}

const entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;',
};

function escapeHtml(string) {
  return String(string).replace(/[&<>"'`=\/]/g, (s) => entityMap[s]);
}

const whiteRe = /\s*/;
const spaceRe = /\s+/;
const equalsRe = /\s*=/;
const curlyRe = /\s*\}/;
const tagRe = /#|\^|\/|>|\{|&|=|!/;

/**
 * Breaks up the given `template` string into a tree of tokens. If the `tags`
 * argument is given here it must be an array with two string values: the
 * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
 * course, the default is to use mustaches (i.e. mustache.tags).
 *
 * A token is an array with at least 4 elements. The first element is the
 * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
 * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
 * all text that appears outside a symbol this element is "text".
 *
 * The second element of a token is its "value". For mustache tags this is
 * whatever else was inside the tag besides the opening symbol. For text tokens
 * this is the text itself.
 *
 * The third and fourth elements of the token are the start and end indices,
 * respectively, of the token in the original template.
 *
 * Tokens that are the root node of a subtree contain two more elements: 1) an
 * array of tokens in the subtree and 2) the index in the original template at
 * which the closing tag for that section begins.
 *
 * Tokens for partials also contain two more elements: 1) a string value of
 * indendation prior to that tag and 2) the index of that tag on that line -
 * eg a value of 2 indicates the partial is the third tag on this line.
 */
function parseTemplate(template, tags) {
  if (!template) return [];
  let lineHasNonSpace = false;
  const sections = []; // Stack to hold section tokens
  const tokens = []; // Buffer to hold the tokens
  let spaces = []; // Indices of whitespace tokens on the current line
  let hasTag = false; // Is there a {{tag}} on the current line?
  let nonSpace = false; // Is there a non-space char on the current line?
  let indentation = ''; // Tracks indentation for tags that use it
  let tagIndex = 0; // Stores a count of number of tags encountered on a line

  // Strips all whitespace tokens array for the current line
  // if there was a {{#tag}} on it and otherwise only space.
  function stripSpace() {
    if (hasTag && !nonSpace) {
      while (spaces.length) delete tokens[spaces.pop()];
    } else {
      spaces = [];
    }

    hasTag = false;
    nonSpace = false;
  }

  let openingTagRe; let closingTagRe; let
    closingCurlyRe;
  function compileTags(tagsToCompile) {
    if (typeof tagsToCompile === 'string') tagsToCompile = tagsToCompile.split(spaceRe, 2);

    if (!isArray(tagsToCompile) || tagsToCompile.length !== 2) throw new Error(`Invalid tags: ${tagsToCompile}`);

    openingTagRe = new RegExp(`${escapeRegExp(tagsToCompile[0])}\\s*`);
    closingTagRe = new RegExp(`\\s*${escapeRegExp(tagsToCompile[1])}`);
    closingCurlyRe = new RegExp(`\\s*${escapeRegExp(`}${tagsToCompile[1]}`)}`);
  }

  compileTags(tags || mustache.tags);

  const scanner = new Scanner(template);

  let start; let type; let value; let chr; let token; let
    openSection;
  while (!scanner.eos()) {
    start = scanner.pos;

    // Match any text between tags.
    value = scanner.scanUntil(openingTagRe);

    if (value) {
      for (let i = 0, valueLength = value.length; i < valueLength; ++i) {
        chr = value.charAt(i);

        if (isWhitespace(chr)) {
          spaces.push(tokens.length);
          indentation += chr;
        } else {
          nonSpace = true;
          lineHasNonSpace = true;
          indentation += ' ';
        }

        tokens.push(['text', chr, start, start + 1]);
        start += 1;

        // Check for whitespace on the current line.
        if (chr === '\n') {
          stripSpace();
          indentation = '';
          tagIndex = 0;
          lineHasNonSpace = false;
        }
      }
    }

    // Match the opening tag.
    if (!scanner.scan(openingTagRe)) break;

    hasTag = true;

    // Get the tag type.
    type = scanner.scan(tagRe) || 'name';
    scanner.scan(whiteRe);

    // Get the tag value.
    if (type === '=') {
      value = scanner.scanUntil(equalsRe);
      scanner.scan(equalsRe);
      scanner.scanUntil(closingTagRe);
    } else if (type === '{') {
      value = scanner.scanUntil(closingCurlyRe);
      scanner.scan(curlyRe);
      scanner.scanUntil(closingTagRe);
      type = '&';
    } else {
      value = scanner.scanUntil(closingTagRe);
    }

    // Match the closing tag.
    if (!scanner.scan(closingTagRe)) throw new Error(`Unclosed tag at ${scanner.pos}`);

    if (type == '>') {
      token = [
        type,
        value,
        start,
        scanner.pos,
        indentation,
        tagIndex,
        lineHasNonSpace,
      ];
    } else {
      token = [type, value, start, scanner.pos];
    }
    tagIndex++;
    tokens.push(token);

    if (type === '#' || type === '^') {
      sections.push(token);
    } else if (type === '/') {
      // Check section nesting.
      openSection = sections.pop();

      if (!openSection) throw new Error(`Unopened section "${value}" at ${start}`);

      if (openSection[1] !== value) {
        throw new Error(
          `Unclosed section "${openSection[1]}" at ${start}`,
        );
      }
    } else if (type === 'name' || type === '{' || type === '&') {
      nonSpace = true;
    } else if (type === '=') {
      // Set the tags for the next time around.
      compileTags(value);
    }
  }

  stripSpace();

  // Make sure there are no open sections when we're done.
  openSection = sections.pop();

  if (openSection) {
    throw new Error(
      `Unclosed section "${openSection[1]}" at ${scanner.pos}`,
    );
  }

  return nestTokens(squashTokens(tokens));
}

/**
 * Combines the values of consecutive text tokens in the given `tokens` array
 * to a single token.
 */
function squashTokens(tokens) {
  const squashedTokens = [];

  let token; let
    lastToken;
  for (let i = 0, numTokens = tokens.length; i < numTokens; ++i) {
    token = tokens[i];

    if (token) {
      if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
        lastToken[1] += token[1];
        lastToken[3] = token[3];
      } else {
        squashedTokens.push(token);
        lastToken = token;
      }
    }
  }

  return squashedTokens;
}

/**
 * Forms the given array of `tokens` into a nested tree structure where
 * tokens that represent a section have two additional items: 1) an array of
 * all tokens that appear in that section and 2) the index in the original
 * template that represents the end of that section.
 */
function nestTokens(tokens) {
  const nestedTokens = [];
  let collector = nestedTokens;
  const sections = [];

  let token; let
    section;
  for (let i = 0, numTokens = tokens.length; i < numTokens; ++i) {
    token = tokens[i];

    switch (token[0]) {
      case '#':
      case '^':
        collector.push(token);
        sections.push(token);
        collector = token[4] = [];
        break;
      case '/':
        section = sections.pop();
        section[5] = token[2];
        collector =
          sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
        break;
      default:
        collector.push(token);
    }
  }

  return nestedTokens;
}

/**
 * A simple string scanner that is used by the template parser to find
 * tokens in template strings.
 */
function Scanner(string) {
  this.string = string;
  this.tail = string;
  this.pos = 0;
}

/**
 * Returns `true` if the tail is empty (end of string).
 */
Scanner.prototype.eos = function eos() {
  return this.tail === '';
};

/**
 * Tries to match the given regular expression at the current position.
 * Returns the matched text if it can match, the empty string otherwise.
 */
Scanner.prototype.scan = function scan(re) {
  const match = this.tail.match(re);

  if (!match || match.index !== 0) return '';

  const string = match[0];

  this.tail = this.tail.substring(string.length);
  this.pos += string.length;

  return string;
};

/**
 * Skips all text until the given regular expression can be matched. Returns
 * the skipped string, which is the entire tail if no match can be made.
 */
Scanner.prototype.scanUntil = function scanUntil(re) {
  const index = this.tail.search(re);
  let match;

  switch (index) {
    case -1:
      match = this.tail;
      this.tail = '';
      break;
    case 0:
      match = '';
      break;
    default:
      match = this.tail.substring(0, index);
      this.tail = this.tail.substring(index);
  }

  this.pos += match.length;

  return match;
};

/**
 * Represents a rendering context by wrapping a view object and
 * maintaining a reference to the parent context.
 */
function Context(view, parentContext) {
  this.view = view;
  this.cache = { '.': this.view };
  this.parent = parentContext;
}

/**
 * Creates a new context using the given view with this context
 * as the parent.
 */
Context.prototype.push = function push(view) {
  return new Context(view, this);
};

/**
 * Returns the value of the given name in this context, traversing
 * up the context hierarchy if the value is absent in this context's view.
 */
Context.prototype.lookup = function lookup(name) {
  const cache = this.cache;

  let value;
  if (cache.hasOwnProperty(name)) {
    value = cache[name];
  } else {
    let context = this;
    let intermediateValue;
    let names;
    let index;
    let lookupHit = false;

    while (context) {
      if (name.indexOf('.') > 0) {
        intermediateValue = context.view;
        names = name.split('.');
        index = 0;

        /**
         * Using the dot notion path in `name`, we descend through the
         * nested objects.
         *
         * To be certain that the lookup has been successful, we have to
         * check if the last object in the path actually has the property
         * we are looking for. We store the result in `lookupHit`.
         *
         * This is specially necessary for when the value has been set to
         * `undefined` and we want to avoid looking up parent contexts.
         *
         * In the case where dot notation is used, we consider the lookup
         * to be successful even if the last "object" in the path is
         * not actually an object but a primitive (e.g., a string, or an
         * integer), because it is sometimes useful to access a property
         * of an autoboxed primitive, such as the length of a string.
         * */
        while (intermediateValue != null && index < names.length) {
          if (index === names.length - 1) {
            lookupHit =
              hasProperty(intermediateValue, names[index])
              || primitiveHasOwnProperty(intermediateValue, names[index]);
          }

          intermediateValue = intermediateValue[names[index++]];
        }
      } else {
        intermediateValue = context.view[name];

        /**
         * Only checking against `hasProperty`, which always returns `false` if
         * `context.view` is not an object. Deliberately omitting the check
         * against `primitiveHasOwnProperty` if dot notation is not used.
         *
         * Consider this example:
         * ```
         * Mustache.render("The length of a football field is {{#length}}{{length}}{{/length}}.", {length: "100 yards"})
         * ```
         *
         * If we were to check also against `primitiveHasOwnProperty`, as we do
         * in the dot notation case, then render call would return:
         *
         * "The length of a football field is 9."
         *
         * rather than the expected:
         *
         * "The length of a football field is 100 yards."
         * */
        lookupHit = hasProperty(context.view, name);
      }

      if (lookupHit) {
        value = intermediateValue;
        break;
      }

      context = context.parent;
    }

    cache[name] = value;
  }

  if (isFunction(value)) value = value.call(this.view);

  return value;
};

/**
 * A Writer knows how to take a stream of tokens and render them to a
 * string, given a context. It also maintains a cache of templates to
 * avoid the need to parse the same template twice.
 */
function Writer() {
  this.templateCache = {
    _cache: {},
    set: function set(key, value) {
      this._cache[key] = value;
    },
    get: function get(key) {
      return this._cache[key];
    },
    clear: function clear() {
      this._cache = {};
    },
  };
}

/**
 * Clears all cached templates in this writer.
 */
Writer.prototype.clearCache = function clearCache() {
  if (typeof this.templateCache !== 'undefined') {
    this.templateCache.clear();
  }
};

/**
 * Parses and caches the given `template` according to the given `tags` or
 * `mustache.tags` if `tags` is omitted,  and returns the array of tokens
 * that is generated from the parse.
 */
Writer.prototype.parse = function parse(template, tags) {
  const cache = this.templateCache;
  const cacheKey = `${template}:${(tags || mustache.tags).join(':')}`;
  const isCacheEnabled = typeof cache !== 'undefined';
  let tokens = isCacheEnabled ? cache.get(cacheKey) : undefined;

  if (tokens == undefined) {
    tokens = parseTemplate(template, tags);
    isCacheEnabled && cache.set(cacheKey, tokens);
  }
  return tokens;
};

/**
 * High-level method that is used to render the given `template` with
 * the given `view`.
 *
 * The optional `partials` argument may be an object that contains the
 * names and templates of partials that are used in the template. It may
 * also be a function that is used to load partial templates on the fly
 * that takes a single argument: the name of the partial.
 *
 * If the optional `config` argument is given here, then it should be an
 * object with a `tags` attribute or an `escape` attribute or both.
 * If an array is passed, then it will be interpreted the same way as
 * a `tags` attribute on a `config` object.
 *
 * The `tags` attribute of a `config` object must be an array with two
 * string values: the opening and closing tags used in the template (e.g.
 * [ "<%", "%>" ]). The default is to mustache.tags.
 *
 * The `escape` attribute of a `config` object must be a function which
 * accepts a string as input and outputs a safely escaped string.
 * If an `escape` function is not provided, then an HTML-safe string
 * escaping function is used as the default.
 */
Writer.prototype.render = function render(template, view, partials, config) {
  const tags = this.getConfigTags(config);
  const tokens = this.parse(template, tags);
  const context = view instanceof Context ? view : new Context(view, undefined);
  return this.renderTokens(tokens, context, partials, template, config);
};

/**
 * Low-level method that renders the given array of `tokens` using
 * the given `context` and `partials`.
 *
 * Note: The `originalTemplate` is only ever used to extract the portion
 * of the original template that was contained in a higher-order section.
 * If the template doesn't use higher-order sections, this argument may
 * be omitted.
 */
Writer.prototype.renderTokens = function renderTokens(
  tokens,
  context,
  partials,
  originalTemplate,
  config,
) {
  let buffer = '';

  let token; let symbol; let
    value;
  for (let i = 0, numTokens = tokens.length; i < numTokens; ++i) {
    value = undefined;
    token = tokens[i];
    symbol = token[0];

    if (symbol === '#') {
      value = this.renderSection(
        token,
        context,
        partials,
        originalTemplate,
        config,
      );
    } else if (symbol === '^') {
      value = this.renderInverted(
        token,
        context,
        partials,
        originalTemplate,
        config,
      );
    } else if (symbol === '>') value = this.renderPartial(token, context, partials, config);
    else if (symbol === '&') value = this.unescapedValue(token, context);
    else if (symbol === 'name') value = this.escapedValue(token, context, config);
    else if (symbol === 'text') value = this.rawValue(token);

    if (value !== undefined) buffer += value;
  }

  return buffer;
};

Writer.prototype.renderSection = function renderSection(
  token,
  context,
  partials,
  originalTemplate,
  config,
) {
  const self = this;
  let buffer = '';
  let value = context.lookup(token[1]);

  // This function is used to render an arbitrary template
  // in the current context by higher-order sections.
  function subRender(template) {
    return self.render(template, context, partials, config);
  }

  if (!value) return;

  if (isArray(value)) {
    for (let j = 0, valueLength = value.length; j < valueLength; ++j) {
      buffer += this.renderTokens(
        token[4],
        context.push(value[j]),
        partials,
        originalTemplate,
        config,
      );
    }
  } else if (
    typeof value === 'object'
    || typeof value === 'string'
    || typeof value === 'number'
  ) {
    buffer += this.renderTokens(
      token[4],
      context.push(value),
      partials,
      originalTemplate,
      config,
    );
  } else if (isFunction(value)) {
    if (typeof originalTemplate !== 'string') {
      throw new Error(
        'Cannot use higher-order sections without the original template',
      );
    }

    // Extract the portion of the original template that the section contains.
    value = value.call(
      context.view,
      originalTemplate.slice(token[3], token[5]),
      subRender,
    );

    if (value != null) buffer += value;
  } else {
    buffer += this.renderTokens(
      token[4],
      context,
      partials,
      originalTemplate,
      config,
    );
  }
  return buffer;
};

Writer.prototype.renderInverted = function renderInverted(
  token,
  context,
  partials,
  originalTemplate,
  config,
) {
  const value = context.lookup(token[1]);

  // Use JavaScript's definition of falsy. Include empty arrays.
  // See https://github.com/janl/mustache.js/issues/186
  if (!value || (isArray(value) && value.length === 0)) {
    return this.renderTokens(
      token[4],
      context,
      partials,
      originalTemplate,
      config,
    );
  }
};

Writer.prototype.indentPartial = function indentPartial(
  partial,
  indentation,
  lineHasNonSpace,
) {
  const filteredIndentation = indentation.replace(/[^ \t]/g, '');
  const partialByNl = partial.split('\n');
  for (let i = 0; i < partialByNl.length; i++) {
    if (partialByNl[i].length && (i > 0 || !lineHasNonSpace)) {
      partialByNl[i] = filteredIndentation + partialByNl[i];
    }
  }
  return partialByNl.join('\n');
};

Writer.prototype.renderPartial = function renderPartial(
  token,
  context,
  partials,
  config,
) {
  if (!partials) return;
  const tags = this.getConfigTags(config);

  const value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
  if (value != null) {
    const lineHasNonSpace = token[6];
    const tagIndex = token[5];
    const indentation = token[4];
    let indentedValue = value;
    if (tagIndex == 0 && indentation) {
      indentedValue = this.indentPartial(value, indentation, lineHasNonSpace);
    }
    const tokens = this.parse(indentedValue, tags);
    return this.renderTokens(tokens, context, partials, indentedValue, config);
  }
};

Writer.prototype.unescapedValue = function unescapedValue(token, context) {
  const value = context.lookup(token[1]);
  if (value != null) return value;
};

Writer.prototype.escapedValue = function escapedValue(token, context, config) {
  const escape = this.getConfigEscape(config) || mustache.escape;
  const value = context.lookup(token[1]);
  if (value != null) {
    return typeof value === 'number' && escape === mustache.escape
      ? String(value)
      : escape(value);
  }
};

Writer.prototype.rawValue = function rawValue(token) {
  return token[1];
};

Writer.prototype.getConfigTags = function getConfigTags(config) {
  if (isArray(config)) {
    return config;
  } if (config && typeof config === 'object') {
    return config.tags;
  }
  return undefined;
};

Writer.prototype.getConfigEscape = function getConfigEscape(config) {
  if (config && typeof config === 'object' && !isArray(config)) {
    return config.escape;
  }
  return undefined;
};

var mustache = {
  name: 'mustache.js',
  version: '4.2.0',
  tags: ['{{', '}}'],
  clearCache: undefined,
  escape: undefined,
  parse: undefined,
  render: undefined,
  Scanner: undefined,
  Context: undefined,
  Writer: undefined,
  /**
   * Allows a user to override the default caching strategy, by providing an
   * object with set, get and clear methods. This can also be used to disable
   * the cache by setting it to the literal `undefined`.
   */
  set templateCache(cache) {
    defaultWriter.templateCache = cache;
  },
  /**
   * Gets the default or overridden caching object from the default writer.
   */
  get templateCache() {
    return defaultWriter.templateCache;
  },
};

// All high-level mustache.* functions use this writer.
var defaultWriter = new Writer();

/**
 * Clears all cached templates in the default writer.
 */
mustache.clearCache = function clearCache() {
  return defaultWriter.clearCache();
};

/**
 * Parses and caches the given template in the default writer and returns the
 * array of tokens it contains. Doing this ahead of time avoids the need to
 * parse templates on the fly as they are rendered.
 */
mustache.parse = function parse(template, tags) {
  return defaultWriter.parse(template, tags);
};

/**
 * Renders the `template` with the given `view`, `partials`, and `config`
 * using the default writer.
 */
mustache.render = function render(template, view, partials, config) {
  if (typeof template !== 'string') {
    throw new TypeError(
      'Invalid template! Template should be a "string" '
        + `but "${
          typeStr(template)
        }" was given as the first `
        + 'argument for mustache#render(template, view, partials)',
    );
  }

  return defaultWriter.render(template, view, partials, config);
};

// Export the escaping function so that the user may override it.
// See https://github.com/janl/mustache.js/issues/244
mustache.escape = escapeHtml;

// Export these mainly for testing, but also for advanced usage.
mustache.Scanner = Scanner;
mustache.Context = Context;
mustache.Writer = Writer;

// Changed export into a global variable (as in previous versions of mustache.js 3.x) as it is needed for jquery.mustache.js.
// export default mustache;
window.Mustache = mustache;

// Modified: 08.09.2022
// There is no a new version of this library at all and as for a new Mustache version 4.2
// the method to_html() is deprecated, and we have to use directly the render() method instead.

/*! jQuery Mustache - v0.2.8 - 2013-06-23
 * https://github.com/jonnyreeves/jquery-Mustache
 * Copyright (c) 2013 Jonny Reeves; Licensed MIT */

/* global jQuery, window */
(function ($, window) {
  'use strict';

  let templateMap = {};
  let instance = null;
  const options = {
    // Should an error be thrown if an attempt is made to render a non-existent template.  If false, the
    // operation will fail silently.
    warnOnMissingTemplates: false,

    // Should an error be thrown if an attempt is made to overwrite a template which has already been added.
    // If true the original template will be overwritten with the new value.
    allowOverwrite: true,

    // The 'type' attribute which you use to denoate a Mustache Template in the DOM; eg:
    // `<script type="text/html" id="my-template"></script>`
    domTemplateType: 'text/html',

    // Specifies the `dataType` attribute used when external templates are loaded.
    externalTemplateDataType: 'text',
  };

  function getMustache() {
    // Lazily retrieve Mustache from the window global if it hasn't been defined by
    // the User.
    if (instance === null) {
      instance = window.Mustache;
      if (instance === void 0) {
        $.error(
          'Failed to locate Mustache instance, are you sure it has been loaded?',
        );
      }
    }
    return instance;
  }

  /**
   * @return {boolean} if the supplied templateName has been added.
   */
  function has(templateName) {
    return templateMap[templateName] !== void 0;
  }

  /**
   * Registers a template so that it can be used by $.Mustache.
   *
   * @param templateName		A name which uniquely identifies this template.
   * @param templateHtml		The HTML which makes us the template; this will be rendered by Mustache when render()
   *							is invoked.
   * @throws					If options.allowOverwrite is false and the templateName has already been registered.
   */
  function add(templateName, templateHtml) {
    if (!options.allowOverwrite && has(templateName)) {
      $.error(`TemplateName: ${templateName} is already mapped.`);
      return;
    }
    templateMap[templateName] = $.trim(templateHtml);
  }

  /**
   * Adds one or more tempaltes from the DOM using either the supplied templateElementIds or by retrieving all script
   * tags of the 'domTemplateType'.  Templates added in this fashion will be registered with their elementId value.
   *
   * @param [...templateElementIds]	List of element id's present on the DOM which contain templates to be added;
   *									if none are supplied all script tags that are of the same type as the
   *									`options.domTemplateType` configuration value will be added.
   */
  function addFromDom() {
    let templateElementIds;

    // If no args are supplied, all script blocks will be read from the document.
    if (arguments.length === 0) {
      templateElementIds = $(
        `script[type="${options.domTemplateType}"]`,
      ).map(function () {
        return this.id;
      });
    } else {
      templateElementIds = $.makeArray(arguments);
    }

    $.each(templateElementIds, function () {
      const templateElement = document.getElementById(this);

      if (templateElement === null) {
        $.error(`No such elementId: #${this}`);
      } else {
        add(this, $(templateElement).html());
      }
    });
  }

  /**
   * Removes a template, the contents of the removed Template will be returned.
   *
   * @param templateName		The name of the previously registered Mustache template that you wish to remove.
   * @returns					String which represents the raw content of the template.
   */
  function remove(templateName) {
    const result = templateMap[templateName];
    delete templateMap[templateName];
    return result;
  }

  /**
   * Removes all templates and tells Mustache to flush its cache.
   */
  function clear() {
    templateMap = {};
    getMustache().clearCache();
  }

  /**
   * Renders a previously added Mustache template using the supplied templateData object.  Note if the supplied
   * templateName doesn't exist an empty String will be returned.
   */
  function render(templateName, templateData) {
    if (!has(templateName)) {
      if (options.warnOnMissingTemplates) {
        $.error(`No template registered for: ${templateName}`);
      }
      return '';
    }
    return getMustache().render(
      templateMap[templateName],
      templateData,
      templateMap,
    );
  }

  /**
   * Loads the external Mustache templates located at the supplied URL and registers them for later use.  This method
   * returns a jQuery Promise and also support an `onComplete` callback.
   *
   * @param url			URL of the external Mustache template file to load.
   * @param onComplete	Optional callback function which will be invoked when the templates from the supplied URL
   *						have been loaded and are ready for use.
   * @returns				jQuery deferred promise which will complete when the templates have been loaded and are
   *						ready for use.
   */
  function load(url, onComplete) {
    return $.ajax({
      url,
      dataType: options.externalTemplateDataType,
    }).done((templates) => {
      $(templates)
        .filter('script')
        .each((i, el) => {
          add(el.id, $(el).html());
        });

      if ($.isFunction(onComplete)) {
        onComplete();
      }
    });
  }

  /**
   * Returns an Array of templateNames which have been registered and can be retrieved via
   * $.Mustache.render() or $(element).mustache().
   */
  function templates() {
    return $.map(templateMap, (value, key) => key);
  }

  // Expose the public methods on jQuery.Mustache
  $.Mustache = {
    options,
    load,
    has,
    add,
    addFromDom,
    remove,
    clear,
    render,
    templates,
    instance,
  };

  /**
   * Renders one or more viewModels into the current jQuery element.
   *
   * @param templateName	The name of the Mustache template you wish to render, Note that the
   *						template must have been previously loaded and / or added.
   * @param templateData	One or more JavaScript objects which will be used to render the Mustache
   *						template.
   * @param options.method	jQuery method to use when rendering, defaults to 'append'.
   */
  $.fn.mustache = function (templateName, templateData, options) {
    const settings = $.extend(
      {
        method: 'append',
      },
      options,
    );

    const renderTemplate = function (obj, viewModel) {
      $(obj)[settings.method](render(templateName, viewModel));
    };

    return this.each(function () {
      const element = this;

      // Render a collection of viewModels.
      if ($.isArray(templateData)) {
        $.each(templateData, function () {
          renderTemplate(element, this);
        });
      }

      // Render a single viewModel.
      else {
        renderTemplate(element, templateData);
      }
    });
  };
})(window.jQuery || Bootstrap.jQuery, window);

(function (root, wax) {
  // Set up appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define(['mustache'], (mustache) => {
      wax(mustache || root.Mustache);
    });

    // Next for Node.js or CommonJS.
  } else if (typeof exports !== 'undefined') {
    const mustache = require('mustache');
    wax(mustache);

    // Finally, as a browser global.
  } else {
    wax(root.Mustache);
  }
})(this, (Mustache) => {
  Mustache.Formatters = {};

  /*
   *  This will parse a parameter from a filter:
   *
   *      {{ vaue | filter : param1 : param2 : param3 }}
   */
  Mustache.Context.prototype.parseParam = function parseParam(param) {
    let isString; let isInteger; let
      isFloat;
    isString = /^[\'\"](.*)[\'\"]$/g;
    isInteger = /^[+-]?\d+$/g;
    isFloat = /^[+-]?\d*\.\d+$/g;
    if (isString.test(param)) {
      return param.replace(isString, '$1');
    }
    if (isInteger.test(param)) {
      return parseInt(param, 10);
    }
    if (isFloat.test(param)) {
      return parseFloat(param);
    }
    return this._lookup(param);
  };

  /*
   *  This function will resolve one filter# in the mustache expression:
   *
   *      {{ value | filter1 | filter2 | ... | filterN }}
   */
  Mustache.Context.prototype.applyFilter = function applyFilter(expr, fltr) {
    let filterExp;
    let paramsExp;
    let match;
    let filter;
    const params = [expr];
    filterExp = /^\s*([^\:]+)/g;
    paramsExp = /\:\s*([\'][^\']*[\']|[\"][^\"]*[\"]|[^\:]+)\s*/g;
    match = filterExp.exec(fltr);
    filter = match[1].trim();
    while ((match = paramsExp.exec(fltr))) {
      params.push(this.parseParam(match[1].trim()));
    }
    // console.log( filter);
    // console.log( params);
    if (Mustache.Formatters.hasOwnProperty(filter)) {
      fltr = Mustache.Formatters[filter];
      return fltr.apply(fltr, params);
    }
    return expr;
  };

  /*
   * Keep a copy of the original lookup function of Mustache
   */
  Mustache.Context.prototype._lookup = Mustache.Context.prototype.lookup;

  /*
   * Overwrite the Context::lookup method to add filter capabilities
   */
  Mustache.Context.prototype.lookup = function parseExpression(name) {
    let i; let l; let expression; let
      formatters;
    formatters = name.split('|');
    expression = formatters.shift().trim();
    // console.log(expression);
    expression = this._lookup(expression);
    for (i = 0, l = formatters.length; i < l; ++i) {
      expression = this.applyFilter(expression, formatters[i]);
    }
    return expression;
  };
});

var RadioButton = function (domNode, groupObj) {
  this.domNode = domNode;
  this.radioGroup = groupObj;

  this.keyCode = Object.freeze({
    RETURN: 13,
    SPACE: 32,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
  });
};

RadioButton.prototype.init = function () {
  this.domNode.tabIndex = -1;
  this.domNode.setAttribute('aria-checked', 'false');

  this.domNode.addEventListener('keydown', this.handleKeydown.bind(this));
  this.domNode.addEventListener('click', this.handleClick.bind(this));
  this.domNode.addEventListener('focus', this.handleFocus.bind(this));
  this.domNode.addEventListener('blur', this.handleBlur.bind(this));
};

/* EVENT HANDLERS */

RadioButton.prototype.handleKeydown = function (event) {
  const tgt = event.currentTarget;
  let flag = false;
  let clickEvent;

  switch (event.keyCode) {
    case this.keyCode.SPACE:
    case this.keyCode.RETURN:
      this.radioGroup.setChecked(this);
      flag = true;
      break;

    case this.keyCode.UP:
      this.radioGroup.setCheckedToPreviousItem(this);
      flag = true;
      break;

    case this.keyCode.DOWN:
      this.radioGroup.setCheckedToNextItem(this);
      flag = true;
      break;

    case this.keyCode.LEFT:
      this.radioGroup.setCheckedToPreviousItem(this);
      flag = true;
      break;

    case this.keyCode.RIGHT:
      this.radioGroup.setCheckedToNextItem(this);
      flag = true;
      break;

    default:
      break;
  }

  if (flag) {
    event.stopPropagation();
    event.preventDefault();
  }
};

RadioButton.prototype.handleClick = function (event) {
  this.radioGroup.setChecked(this);
};

RadioButton.prototype.handleFocus = function (event) {
  this.domNode.classList.add('focus');
};

RadioButton.prototype.handleBlur = function (event) {
  this.domNode.classList.remove('focus');
};

var RadioGroup = function (domNode) {
  this.domNode = domNode;

  this.radioButtons = [];

  this.firstRadioButton = null;
  this.lastRadioButton = null;
};

RadioGroup.prototype.init = function () {
  // initialize pop up menus
  if (!this.domNode.getAttribute('role')) {
    this.domNode.setAttribute('role', 'radiogroup');
  }

  const rbs = this.domNode.querySelectorAll('[role=radio]');

  for (let i = 0; i < rbs.length; i++) {
    const rb = new RadioButton(rbs[i], this);
    rb.init();
    this.radioButtons.push(rb);

    if (!this.firstRadioButton) {
      this.firstRadioButton = rb;
    }
    this.lastRadioButton = rb;
  }
  this.firstRadioButton.domNode.tabIndex = 0;
};

RadioGroup.prototype.setChecked = function (currentItem) {
  for (let i = 0; i < this.radioButtons.length; i++) {
    const rb = this.radioButtons[i];
    rb.domNode.setAttribute('aria-checked', 'false');
    rb.domNode.tabIndex = -1;
  }
  currentItem.domNode.setAttribute('aria-checked', 'true');
  jQuery(currentItem.domNode).trigger('change');
  currentItem.domNode.tabIndex = 0;
  currentItem.domNode.focus();
};

RadioGroup.prototype.setCheckedToPreviousItem = function (currentItem) {
  let index;

  if (currentItem === this.firstRadioButton) {
    this.setChecked(this.lastRadioButton);
  } else {
    index = this.radioButtons.indexOf(currentItem);
    this.setChecked(this.radioButtons[index - 1]);
  }
};

RadioGroup.prototype.setCheckedToNextItem = function (currentItem) {
  let index;

  if (currentItem === this.lastRadioButton) {
    this.setChecked(this.firstRadioButton);
  } else {
    index = this.radioButtons.indexOf(currentItem);
    this.setChecked(this.radioButtons[index + 1]);
  }
};

/*! For license information please see DPWS_components.js.LICENSE.txt */
(()=>{var t={7967:(t,e)=>{"use strict";e.N=void 0;var n=/^([^\w]*)(javascript|data|vbscript)/im,i=/&#(\w+)(^\w|;)?/g,o=/&(newline|tab);/gi,r=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,a=/^.+(:|&colon;)/gim,s=[".","/"];e.N=function(t){var e,l=(e=t||"",e.replace(i,(function(t,e){return String.fromCharCode(e)}))).replace(o,"").replace(r,"").trim();if(!l)return"about:blank";if(function(t){return s.indexOf(t[0])>-1}(l))return l;var u=l.match(a);if(!u)return l;var c=u[0];return n.test(c)?"about:blank":l}},6616:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});const i=function(t){t.forEach((function(t){""===t.textContent&&t.remove()}))}},8654:(t,e,n)=>{"use strict";n.d(e,{j:()=>i});var i={trackEvent:function(t){var e=window.TMS||null;t&&e&&e.trackEvent(t)},trackView:function(t){var e=window.TMS||null;t&&e&&e.trackView(t)},trackEventWithInheritance:function(t){var e={};HSBC_utils.isTealiumReady&&(e={site_section:utag_data.site_section?utag_data.site_section:"",page_type:utag_data.page_type?utag_data.page_type:"",page_customer_group:utag_data.page_customer_group?utag_data.page_customer_group:"",page_category:utag_data.page_category?utag_data.page_category:"",page_subcategory:utag_data.page_subcategory?utag_data.page_subcategory:"",page_business_line:utag_data.page_business_line?utag_data.page_business_line:"",page_security_level:utag_data.page_security_level?utag_data.page_security_level:""}),this.trackEvent(Bootstrap.jQuery.extend(e,t))}}},1540:(t,e,n)=>{"use strict";n.d(e,{F:()=>s});var i=n(305),o=n(4465);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===r(o)?o:String(o)),i)}var o}var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.rules=e,this.formatUtils=new o.c,this.initData(),this.formatData(),this.updateRules()}var e,n,r;return e=t,n=[{key:"initData",value:function(){this.rulesData=o.c.copyJson(this.rules.LoanCalculatorRateConfig.loanCalculatorRateTable)||[],this.promoCodes=[].concat(this.rulesData.map((function(t){return t.promoCodeList[0]?t.promoCodeList[0]:""}))),this.rulesWithoutPromoCode=this.rulesData.filter((function(t){return!t.promoCodeList.length})),this.stages=i.Z}},{key:"updateRules",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.rules=this.getRulesByPromoCode(t),this.setAmountRange()}},{key:"getRulesByPromoCode",value:function(t){var e=this.rulesData.filter((function(e){return e.promoCodeList.includes(t)}));return(e.length?e:this.rulesWithoutPromoCode)[0].rateTable}},{key:"formatData",value:function(){this.rulesData.forEach((function(t){t.rateTable.forEach((function(t){var e=t.amount.split("-");t.amount={min:e[0],max:e[1]},t.flatRate.forEach((function(t){var e=t.months.split("-");t.months={min:e[0],max:e[1]}}))}))}))}},{key:"setMonthsRange",value:function(t){var e=this.getMonthPointStages(t);this.monthsRange={min:Math.min.apply(null,e),max:Math.max.apply(null,e)}}},{key:"setAmountRange",value:function(){this.amountRange={min:Math.min.apply(null,this.rules.map((function(t){return t.amount.min}))),max:Math.max.apply(null,this.rules.map((function(t){return t.amount.max})))}}},{key:"getApr",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.amount,n=this.getRuleByAmount(e).monthlyRepayment.find((function(e){return e.months==t.months}));return n?n.APR:0}},{key:"getRuleByAmount",value:function(t){return this.rules.find((function(e){return e.amount.max>=t&&e.amount.min<=t}))}},{key:"getAmountStages",value:function(){return t.getStages(this.stages.amount)}},{key:"getMonthPointStages",value:function(t){return this.getRuleByAmount(t).monthlyRepayment.map((function(t){return+t.months}))}},{key:"getMonthStages",value:function(e){return t.getStages(this.getMonthPointStages(e))}},{key:"getFormattedResult",value:function(t){var e=Number(this.getRuleByAmount(t.amount).flatRate[0].rate),n=t.amount*(1+e*t.months/100);return{monthlyRepayment:this.formatUtils.formatNumber(n/t.months),totalAmount:this.formatUtils.formatNumber(n),apr:this.getApr(t),flatRate:e}}}],r=[{key:"getStages",value:function(t){for(var e=[],n=1;n<t.length;n++)e.push({max:t[n],min:t[n-1]});return e}}],n&&a(e.prototype,n),r&&a(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}()},2362:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{J:()=>s});var r=HSBC_utils.keyCodes,a=Bootstrap.jQuery,s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=e.$el,this.context=e,this.bindUIEvents()}var e,n;return e=t,(n=[{key:"bindUIEvents",value:function(){var t=this;this.context.$inputFields.on("keydown",(function(e){return t.removeAriaLive(e)})).on("keyup",(function(e){var n=e.keyCode,i=n===r.TAB;n===r.SHIFT||i||t.readResults()})),this.$el.on("fieldUpdated",(function(){t.context.amountField.allySlider.setAriaOnSlider(),t.context.monthsField.allySlider.setAriaOnSlider()})),this.context.$sliderHandle.on("keydown",(function(e){return t.handleKeyboardNavigation(e)})).one("mousedown",(function(){return t.readResults()})),this.$el.on("hasError",(function(){return t.readErrorMessageOnce()}))}},{key:"handleKeyboardNavigation",value:function(t){var e=t.keyCode,n=e===r.TAB,i=e===r.ENTER,o=e===r.LEFT,s=e===r.RIGHT,l=t.shiftKey;a(document.activeElement).is(this.context.$sliderHandle)&&(o||s?(this.context.$results.attr("aria-live","polite"),this.context.$calculationInputs.attr("aria-live","polite")):(n||i||l)&&(this.context.$results.removeAttr("aria-live"),this.context.$calculationInputs.removeAttr("aria-live")))}},{key:"readResults",value:function(){function t(t){a(document.activeElement).is(t)&&t.attr({"aria-live":"polite","aria-atomic":"true"})}this.context.$results.attr("aria-live","polite"),this.context.$calculationInputs.attr("aria-live","polite"),t(this.context.amountField.$input),t(this.context.monthsField.$input)}},{key:"removeAriaLive",value:function(t){var e=t.keyCode===r.TAB,n=t.shiftKey;a(document.activeElement).is(this.context.$inputFields)&&(e||n)&&(this.context.$results.removeAttr("aria-live"),this.context.$calculationInputs.removeAttr("aria-live"),this.context.amountField.$input.removeAttr("aria-live aria-atomic"),this.context.monthsField.$input.removeAttr("aria-live aria-atomic"))}},{key:"readErrorMessageOnce",value:function(){this.context.$results.attr("aria-live","polite"),this.context.$calculationInputs.attr("aria-live","polite")}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},5733:(t,e,n)=>{"use strict";var i,o,r,a,s,l=n(2362),u=n(1540),c=n(9634),h=n(2625),f=n(8755),d=n(9779);function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function y(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==p(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===p(o)?o:String(o)),i)}var o}i=Bootstrap.jQuery,o=".input",r="hide",a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=i(e),this.cacheDOMElements(),this.cleanInputs(),this.initSettings(),this.initObjects(),this.calculate(),this.setEqualHeadingsHeight(),this.bindUIEvents(),this.currencyFormatter=new d.J(this.$el),this.currencyFormatter.addPrefixSpacing()}var e,n;return e=t,(n=[{key:"cacheDOMElements",value:function(){this.$headingLeft=this.$el.find(".heading-left"),this.$headingRight=this.$el.find(".heading-right"),this.$results=this.$el.find(".placeholder-right"),this.$calculationInputs=this.$el.find(".placeholder-left"),this.$sliderHandle=this.$el.find(".ui-slider-handle"),this.$inputFields=this.$el.find(o),this.$promoCodeWrapper=this.$el.find(".promocode-wrapper"),this.$promoCode=this.$promoCodeWrapper.find(o),this.$promoCodeErrorMessage=this.$promoCodeWrapper.find(".promoCode-message-error")}},{key:"cleanInputs",value:function(){this.$inputFields.val("")}},{key:"initSettings",value:function(){var t=this.$el.find(".config-holder"),e=t.data("default-months"),n=t.data("default-amount");this.rules=t.data("rules"),this.config={defaultMonths:e,defaultAmount:n},this.amountPrefix=t.data("amount-prefix")||"",this.percentSufix=t.data("percent-sufix")||"",this.dataKeeper=new h.E,this.state=this.dataKeeper.read(),i.extend(this.config,{defaultAmount:this.state.amount||n,defaultMonths:this.state.months||e}),i.extend(this.state,{amount:this.state.amount||n,months:this.state.months||e})}},{key:"initObjects",value:function(){this.calculationService=new u.F(this.rules),this.calculationService.setMonthsRange(this.state.amount),this.amountField=new c.J(this.$el,{name:"amount",value:this.config.defaultAmount,range:this.calculationService.amountRange},this.calculationService.stages.amount),this.monthsField=new c.J(this.$el,{name:"months",value:this.config.defaultMonths,range:this.calculationService.monthsRange,step:1},this.calculationService.getMonthPointStages(this.state.amount)),this.amountField.setAreas(this.calculationService.getAmountStages()),this.monthsField.setAreas(this.calculationService.getMonthStages(this.state.amount)),this.resultRenderer=new f.i(this.$el),this.ally=new l.J(this)}},{key:"bindUIEvents",value:function(){var t=this;i(window).on("resize",(function(){return t.setEqualHeadingsHeight()})).on("beforeunload",(function(){return t.dataKeeper.save(t.state)})),this.$el.on("fieldUpdated",(function(e,n){return t.recalculate(n)})),this.$promoCode.on("input",(function(e){return t.handlePromoCodeChange(e)}))}},{key:"handlePromoCodeChange",value:function(t){var e=i(t.target).val();this.calculationService.updateRules(e),this.$el.trigger("fieldUpdated",{name:"promoCode",value:e}),this.$promoCodeErrorMessage.addClass(r),this.calculationService.promoCodes.includes(e)||this.$promoCodeErrorMessage.removeClass(r)}},{key:"calculate",value:function(){var t=this.calculationService.getFormattedResult(this.state);i(document).trigger("LoansCalculator::recalculate",i.extend({},this.state)),i.extend(t,{amountPrefix:this.amountPrefix,percentSufix:this.percentSufix}),this.displayResult(t),this.result=t}},{key:"displayResult",value:function(t){this.amountField.setIndicatorValue(this.calculationService.getApr(this.state)+this.percentSufix),this.resultRenderer.render(t)}},{key:"recalculate",value:function(t){this.state[t.name]=t.value,this.calculationService.setMonthsRange(this.state.amount),this.monthsField.setRange(this.calculationService.monthsRange),this.amountField.setAreas(this.calculationService.getAmountStages()),this.monthsField.setAreas(this.calculationService.getMonthStages(this.state.amount)),this.amountField.validateRange()&&this.monthsField.validateRange()&&this.calculate()}},{key:"setEqualHeadingsHeight",value:function(){var t,e=[this.$headingLeft,this.$headingRight];if(e.forEach((function(t){return t.height("auto")})),!HSBC_utils.matchMedia.mobile){!HSBC_utils.matchMedia.desktop&&HSBC_utils.matchMedia.tablet&&(e[0]=e[0].eq(0));var n=e.map((function(t){return t.outerHeight()})),i=Math.max.apply(Math,function(t){if(Array.isArray(t))return m(t)}(t=n)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());e.forEach((function(t){return t.outerHeight(i)}))}}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),s={name:"loanRepaymentCalculator",selector:".O-LNREPCALC-RW-DEV",init:function(t){return new a(t)}},i(window).on("load",(function(){return HSBC_utils.registerComponent(s)}))},305:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});const i={amount:[5e3,21e4,43e4,64e4,86e4,1e6,12e5,15e5,17e5,19e5,21e5,23e5,25e5,27e5,3e6]}},5039:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{B:()=>r});var r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.rules=e}var e,n,i;return e=t,i=[{key:"getMonthsPredicate",value:function(t){return function(e){return e.minMonths<=t.months&&t.months<=e.maxMonths}}},{key:"getAmountPredicate",value:function(t){return function(e){return e.minAmount<=t.amount&&t.amount<=e.maxAmount}}}],(n=[{key:"calculateApr",value:function(e){var n=this.rules.find(t.getAmountPredicate(e));return n?n.apr:this.rules[0].apr}},{key:"calculateAmountRange",value:function(e){var n=this.rules.filter(t.getMonthsPredicate(e)),i=n.length?n:this.rules;return{min:i[0].minAmount,max:i[i.length-1].maxAmount}}},{key:"calculateMonthsRange",value:function(e){var n=this.rules.find(t.getAmountPredicate(e))||this.rules[0];return{min:n.minMonths,max:n.maxMonths}}}])&&o(e.prototype,n),i&&o(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}()},301:(t,e,n)=>{"use strict";n.d(e,{H:()=>a});var i=n(4465);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===o(r)?r:String(r)),i)}var r}var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.settings=e||{},this.formatUtils=new i.c(this.settings.branch)}var e,n,o;return e=t,o=[{key:"getPmt",value:function(t,e,n){return t*n*Math.pow(t+1,e)/(1-Math.pow(t+1,e))}},{key:"getNominal",value:function(t,e){return(Math.pow(t+1,1/e)-1)*e}},{key:"getMonthlyRepayment",value:function(t,e,n){return this.getPmt(this.getNominal(t,12)/12,e,-n)}}],(n=[{key:"getCalculationResults",value:function(e){var n=e.apr/100,i=e.months,o=e.amount,r=t.getMonthlyRepayment(n,i,o),a=r*i;return{amount:this.format(o),monthlyRepayment:this.format(r),totalAmount:this.format(a),apr:e.apr}}},{key:"format",value:function(t){return this.formatUtils.formatNumber(t)}}])&&r(e.prototype,n),o&&r(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}()},7933:(t,e,n)=>{"use strict";var i,o,r=n(9634),a=n(3136),s=n(5039),l=n(301);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function h(t,e,n){return(e=d(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,d(i.key),i)}}function d(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==u(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===u(e)?e:String(e)}function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}i=Bootstrap.jQuery,o=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}(y,t);var e,n,o,a,d=(o=y,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(o);if(a){var n=m(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===u(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function y(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,y),d.apply(this,arguments)}return e=y,n=[{key:"initCalculationService",value:function(){var t=this;this.calculationService=new l.H,this.calculationRules=new s.B(this.config.rules),this.amountField=new r.J(this.$el,{name:"amount",value:this.config.defaultAmount,range:this.calculationRules.calculateAmountRange(this.state),step:this.config.amountSliderStep}),this.monthsField=new r.J(this.$el,{name:"months",value:this.config.defaultMonths,range:this.calculationRules.calculateMonthsRange(this.state),step:1}),i(document).on("LoansCalculator::reinit",(function(){return t.calculate()}))}},{key:"calculate",value:function(){var t=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({apr:this.calculationRules.calculateApr(this.state)},this.state),e=this.calculationService.getCalculationResults(t);e&&(Object.assign(e,{amountPrefix:this.amountPrefix,percentSufix:this.percentSufix}),this.displayResult(e),this.result=e,i(document).trigger("LoansCalculator::recalculate",i.extend({},this.state,{amountPrefix:this.amountPrefix,percentSufix:this.percentSufix,annually:this.annually})))}},{key:"recalculate",value:function(t){this.state[t.name]=t.value,this.amountField.setRange(this.calculationRules.calculateAmountRange(this.state)),this.monthsField.setRange(this.calculationRules.calculateMonthsRange(this.state)),this.setInputsAreas(),this.amountField.validateRange()&&this.monthsField.validateRange()&&this.calculate(),this.amountField.allySlider.setAriaOnSlider(),this.monthsField.allySlider.setAriaOnSlider()}},{key:"displayResult",value:function(t){this.amountField.setIndicatorValue(this.calculationRules.calculateApr(this.state)+this.percentSufix),this.resultRenderer.render(t)}}],n&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),y}(a.K),HSBC_utils.registerComponent({name:"loansCalculator",selector:".O-LNSCALC-RW-RBWM",init:function(t){return new o(t)}})},3136:(t,e,n)=>{"use strict";n.d(e,{K:()=>S});var i=n(2625),o=n(8755);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(t,e,n){return(e=l(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,l(i.key),i)}}function l(t){var e=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===r(e)?e:String(e)}var u=HSBC_utils.keyCodes,c=Bootstrap.jQuery,h="aria-live",f="aria-atomic",d="".concat(h," ").concat(f),p=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=e.$el,this.context=e,this.bindUIEvents()}var e,n;return e=t,(n=[{key:"bindUIEvents",value:function(){var t=this;this.context.$inputFields.on("keydown",(function(e){return t.removeAriaLive(e)})).on("keyup",(function(e){var n=e.keyCode,i=n===u.TAB;n===u.SHIFT||i||t.readResults()})),this.context.$sliderHandle.on("keydown",(function(e){return t.handleKeyboardNavigation(e)})),this.$el.on("hasError",(function(){return t.readErrorMessageOnce()}))}},{key:"removeAriaLive",value:function(t){var e=t.keyCode===u.TAB,n=t.shiftKey;c(document.activeElement).is(this.context.$inputFields)&&(e||n)&&(this.context.$calculationInputs.removeAttr(h),this.context.amountField.$input.removeAttr(d),n&&this.context.$results.removeAttr(h),void 0!==this.context.monthsField.$input?this.context.monthsField.$input.removeAttr(d):this.context.monthsField.removeAttr(d))}},{key:"handleKeyboardNavigation",value:function(t){var e=t.keyCode,n=e===u.TAB,i=e===u.LEFT,o=e===u.RIGHT,r=t.shiftKey;c(document.activeElement).is(this.context.$sliderHandle)&&(i||o?(this.context.$results.attr(h,"assertive"),this.context.$calculationInputs.attr(h,"polite")):(n||r)&&(this.context.$results.removeAttr(h),this.context.$calculationInputs.removeAttr(h)))}},{key:"readResults",value:function(){function t(t){var e;c(document.activeElement).is(t)&&t.attr((a(e={},h,"polite"),a(e,f,"true"),e))}this.context.$results.attr(h,"assertive"),this.context.$calculationInputs.attr(h,"polite"),this.context.amountField&&t(this.context.amountField.$input),this.context.monthsField&&t(this.context.monthsField.$input)}},{key:"readErrorMessageOnce",value:function(){this.context.$results.attr(h,"assertive"),this.context.$calculationInputs.attr(h,"polite")}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),m=n(9779);function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function v(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==y(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===y(o)?o:String(o)),i)}var o}var b="auto",g=Bootstrap.jQuery,S=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=g(e),this.initConfig(),this.cacheDOMElements(),this.initCalculationService(),this.resultRenderer=new o.i(this.$el),this.setInputsAreas(),this.calculate(),this.setEqualHeadingsHeight(),this.bindUiEvents(),this.currencyFormatter=new m.J(this.$el),this.currencyFormatter.addPrefixSpacing(),this.ally=new p(this)}var e,n;return e=t,(n=[{key:"initConfig",value:function(){var t=this.$el.find(".config-holder");this.config=t.data("config"),this.amountPrefix=t.data("amount-prefix")||"",this.percentSufix=t.data("percent-sufix")||"",this.annually=t.data("annually")||"",this.dataKeeper=new i.E,this.state=this.dataKeeper.read(),Object.assign(this.config,{defaultAmount:this.state.amount||this.config.defaultAmount,defaultMonths:this.state.months||this.config.defaultMonths}),Object.assign(this.state,{amount:this.state.amount||this.config.defaultAmount,months:this.state.months||this.config.defaultMonths}),this.addMinAmountToRules()}},{key:"setInputsAreas",value:function(){this.amountField.setAreas(this.config.rules.map((function(t){return{max:t.maxAmount,min:t.minAmount}})))}},{key:"cacheDOMElements",value:function(){this.$headingLeft=this.$el.find(".heading-left"),this.$headingRight=this.$el.find(".heading-right"),this.$results=this.$el.find(".rightholder"),this.$calculationInputs=this.$el.find(".placeholder-left"),this.$sliderHandle=this.$el.find(".ui-slider-handle"),this.$inputFields=this.$el.find(".input")}},{key:"bindUiEvents",value:function(){var t=this;g(window).on("load resize",(function(){return t.setEqualHeadingsHeight()})).on("beforeunload",(function(){return t.save()})),this.$el.on("fieldUpdated",(function(e,n){return t.recalculate(n)}))}},{key:"save",value:function(){this.dataKeeper.save(this.state)}},{key:"setEqualHeadingsHeight",value:function(){if(this.$headingLeft.height(b),this.$headingRight.height(b),!HSBC_utils.matchMedia.mobile){var t=[this.$headingLeft,this.$headingRight],e=[this.$headingLeft.outerHeight(),this.$headingRight.outerHeight()],n=Math.max.apply(Math,e);t.forEach((function(t){return t.outerHeight(n)}))}}},{key:"addMinAmountToRules",value:function(){var t=this;this.config.rules.forEach((function(e,n){return e.minAmount=n?t.config.rules[n-1].maxAmount+1:t.config.minAmount}))}},{key:"calculate",value:function(){}},{key:"initCalculationService",value:function(){}},{key:"recalculate",value:function(t){}},{key:"displayResult",value:function(t){}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},1285:(t,e,n)=>{"use strict";n.d(e,{_:()=>a});var i=n(4465);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===o(r)?r:String(r)),i)}var r}var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.settings=e||{},this.formatUtils=new i.c(this.settings.branch)}var e,n,o;return e=t,o=[{key:"getMonthlyRepayment",value:function(t,e,n){return t*n*Math.pow(t+1,e)/(Math.pow(t+1,e)-1)}}],(n=[{key:"getCalculationResults",value:function(e){var n=e.rate/100,i=e.months,o=e.amount,r=t.getMonthlyRepayment(n,i,o),a=r*i;return{monthlyRepayment:this.formatUtils.formatNumber(r),totalAmount:this.formatUtils.formatNumber(a),rate:e.rate}}}])&&r(e.prototype,n),o&&r(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}()},7592:(t,e,n)=>{"use strict";var i,o,r,a=n(9634),s=n(1285),l=n(3136);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function h(t,e,n){return(e=d(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,d(i.key),i)}}function d(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==u(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===u(e)?e:String(e)}function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}i=Bootstrap.jQuery,o="months",r=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}(y,t);var e,n,r,l,d=(r=y,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(r);if(l){var n=m(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===u(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function y(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,y),d.apply(this,arguments)}return e=y,n=[{key:"initCalculationService",value:function(){var t=this;this.calculationService=new s._,this.amountField=new a.J(this.$el,{name:"amount",value:this.config.defaultAmount,range:this.calculateAmountRange(),step:this.config.amountSliderStep}),this.monthsField=this.$el.find("select[name='".concat(o,"']")),this.monthsField.val(this.config.defaultMonths),this.monthsField.on("change",(function(e){t.$el.trigger("fieldUpdated",{name:o,value:i(e.target).val()})}))}},{key:"calculate",value:function(){var t=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({rate:this.calculateRate(this.state)},this.state),e=this.calculationService.getCalculationResults(t);e&&(Object.assign(e,{amountPrefix:this.amountPrefix,percentSufix:this.percentSufix}),this.displayResult(e),this.result=e)}},{key:"recalculate",value:function(t){this.state[t.name]=t.value,this.calculate(),this.amountField.allySlider.setAriaOnSlider()}},{key:"displayResult",value:function(t){this.amountField.setIndicatorValue(this.calculateRate(this.state)+this.percentSufix),this.resultRenderer.render(t)}},{key:"calculateRate",value:function(t){var e=this.config.rules.filter((function(e){return e.minAmount<=t.amount&&t.amount<=e.maxAmount}));return e[0]?e[0].rate:this.config.rules[0].rate}},{key:"calculateAmountRange",value:function(){var t=this.config.rules;return{min:t[0].minAmount,max:t[t.length-1].maxAmount}}}],n&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),y}(l.K),HSBC_utils.registerComponent({name:"loansCalculatorChina",selector:".O-LNSCALCC-RW-RBWM",init:function(t){return new r(t)}})},9779:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{J:()=>a});var r=Bootstrap.jQuery,a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=r(e)}var e,n;return e=t,(n=[{key:"addPrefixSpacing",value:function(){var t=this.$el.find(".income-prefix"),e=t.next("input[name=amount]"),n=!!e.hasClass("left-placeholder-1"),i=t.width();n?n&&(i+=14):i+=18,e.css("padding-left",i)}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},2625:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{E:()=>a});var r=Bootstrap.jQuery,a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.lang=t.setUpLang(),this.settings=r.extend({name:"HSBC_".concat(this.lang,"_").concat(this.constructor.name),cookieSettings:{path:"/",expires:{days:365}},session:!1,forceCookie:!1,sessionCookieSettings:{path:"/"}},e),this.localStorage=window.localStorage,this.sessionStorage=window.sessionStorage,this.hasLocalStorage=void 0!==this.localStorage,this.hasSessionStorage=void 0!==this.sessionStorage,this.setCookie=HSBC_utils.setCookie,this.getCookie=HSBC_utils.getCookie}var e,n,i;return e=t,i=[{key:"parseData",value:function(t){return t?JSON.parse(t):{}}},{key:"setUpLang",value:function(){return r("html").attr("lang")}}],(n=[{key:"save",value:function(t){var e=t||{};this.settings.session?this.hasSessionStorage&&!this.settings.forceCookie?this.sessionStorage[this.settings.name]=JSON.stringify(e):this.setCookie(this.settings.name,JSON.stringify(e),this.settings.sessionCookieSettings):this.hasLocalStorage&&!this.settings.forceCookie?this.localStorage[this.settings.name]=JSON.stringify(e):this.setCookie(this.settings.name,JSON.stringify(e),this.settings.cookieSettings)}},{key:"read",value:function(){return this.settings.session?this.hasSessionStorage&&!this.settings.forceCookie?t.parseData(this.sessionStorage[this.settings.name]):t.parseData(this.getCookie(this.settings.name)):this.hasLocalStorage&&!this.settings.forceCookie?t.parseData(this.localStorage[this.settings.name]):t.parseData(this.getCookie(this.settings.name))}}])&&o(e.prototype,n),i&&o(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}()},4465:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{c:()=>a});var r=/(\d)(?=(\d{3})+(?:\.\d+)?$)/g,a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.branch=e||"uk"}var e,n,i;return e=t,i=[{key:"copyJson",value:function(t){return JSON.parse(JSON.stringify(t))}}],(n=[{key:"formatNumber",value:function(t){return"uk"===this.branch?this.formatNumberUK(Number(t)):t}},{key:"formatNumberUK",value:function(t){return t.toFixed(2).replace(r,"$1,").replace(/\.00$/,"")}},{key:"formatNumberCalc",value:function(t){return t.replace(/\,/,"")}}])&&o(e.prototype,n),i&&o(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}()},9634:(t,e,n)=>{"use strict";n.d(e,{J:()=>y});var i=n(4465);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===o(r)?r:String(r)),i)}var r}var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=e.$el,this.$indicator=e.$indicator,this.$handleInBothSliders=e.$handleInBothSliders,this.$handleAmount=e.$handleAmount,this.$handleMonths=e.$handleMonths,this.labelAmountId=e.labelAmountId,this.labelMonthsId=e.labelMonthsId,this.fieldSettings=e.fieldSettings,this.context=e,this.setAriaOnPercentageIndicator(),this.setAriaOnSlider()}var e,n;return e=t,(n=[{key:"setAriaOnPercentageIndicator",value:function(){this.$indicator.attr("aria-live","off")}},{key:"setAriaOnSlider",value:function(){this.$handleInBothSliders.attr({role:"slider","aria-valuemin":this.fieldSettings.range.min,"aria-valuemax":this.fieldSettings.range.max,"aria-valuenow":this.fieldSettings.value}),this.$handleAmount.attr("aria-labelledby",this.labelAmountId),this.$handleMonths.attr("aria-labelledby",this.labelMonthsId)}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function u(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==s(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===s(o)?o:String(o)),i)}var o}var c=".calc-indicator",h=".calc-slider-handle",f="hide",d="input-error",p="-validation-message",m=Bootstrap.jQuery,y=function(){function t(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$scope=e,this.fieldSettings=n,this.customValues=o,this.formatUtils=new i.c,this.setRanges(),this._initialiseInput(),this._initialiseSlider(),this.$indicator=this.$slider.find(c),this.$labelAmount=this.$scope.find(".heading-left"),this.$labelMonths=this.$scope.find(".heading-right"),this.labelAmountId=this.$labelAmount.attr("id"),this.labelMonthsId=this.$labelMonths.attr("id"),this.$handleInBothSliders=this.$slider.find(".ui-slider-handle"),this.$handleAmount=this.$slider.find(h),this.$handleMonths=this.$slider.find(".months-slider-handle"),this.allySlider=new a(this),this.allySlider.setAriaOnPercentageIndicator(),this.allySlider.setAriaOnSlider(),this.setCalcIndicatorPosition(),this.bindUiEvents()}var e,n;return e=t,(n=[{key:"bindUiEvents",value:function(){var t=this;this.$slider.on("mousedown mouseup focus",(function(){return t.setCalcIndicatorPosition()})),m(window).on("resize load",(function(){return t.setCalcIndicatorPosition()}))}},{key:"setRanges",value:function(){this.ranges={min:this.fieldSettings.range.min,max:this.fieldSettings.range.max}}},{key:"setRange",value:function(t){this.fieldSettings.range=t,this.setRanges(),this.$slider.slider(this.ranges),this.$minLabel.html(this.formatUtils.formatNumber(this.fieldSettings.range.min)),this.$maxLabel.html(this.formatUtils.formatNumber(this.fieldSettings.range.max))}},{key:"validateRange",value:function(){return this._isInRange(this.fieldSettings.value)}},{key:"setAreas",value:function(t){var e=this;this.$areas.empty();var n,i=t.map((function(t){return t.min>=e.fieldSettings.range.min&&t.max<=e.fieldSettings.range.max?100*(t.max-e.fieldSettings.range.min)/(e.fieldSettings.range.max-e.fieldSettings.range.min):null})).filter((function(t){return null!=t}));[0].concat((n=i,function(t){if(Array.isArray(t))return l(t)}(n)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(n)||function(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())).forEach((function(t){e.$areas.append('<span class="'.concat("area-border",'" style="margin-left:').concat(t,'%"></span>'))}))}},{key:"setIndicatorValue",value:function(t){this.$indicator.text(t)}},{key:"getProperValue",value:function(){var t=this.fieldSettings.value,e=this.ranges.min,n=this.ranges.max;return t>n?n:t<e?e:t}},{key:"_initialiseInput",value:function(){var t=this,e="[data-calc-input=".concat(this.fieldSettings.name,"]");this.$input=m("".concat(e," input"),this.$scope),this.$validationMessage=m("".concat(e," ").concat(".message"),this.$scope),m.Mustache.add(this.fieldSettings.name+p,this.$validationMessage.html()),this.$input.val(this.formatUtils.formatNumber(this.getProperValue())),this.$input.on("change keyup blur",(function(){t._clearValidationMessage(),t._isValidNumber(t.$input.val())?(t.fieldSettings.value=Number(t.$input.val().replace(/\.|,/g,"")),t._isInRange(t.fieldSettings.value)?(t._setSliderValue(t.fieldSettings.value),t._triggerUpdate()):(t._displayValidationMessage(),t._hasError())):(t._displayValidationMessage(),t._hasError())}))}},{key:"_initialiseSlider",value:function(){var t=this,e="[data-calc-slider=".concat(this.fieldSettings.name,"]");this.$slider=m("".concat(e," ").concat(".calc-slider"),this.$scope),this.$slider.slider({range:"min",value:this.getProperValue(),min:this.fieldSettings.range.min,max:this.fieldSettings.range.max,step:this.fieldSettings.step,slide:function(e,n){return t.customValues&&(n.value=t.findNearestValue(e,n.value),t._setSliderValue(n.value)),t.lastValue!==n.value&&(t.fieldSettings.value=n.value,t._setInputValue(n.value),t._clearValidationMessage(),t._triggerUpdate(),t.setCalcIndicatorPosition(),t.lastValue=n.value),!t.customValues},create:function(){t.$slider.find(h).html('<span class="'.concat("calc-indicator",'">&nbsp;</span>')),t.setCalcIndicatorPosition(),t.lastValue=t.getProperValue()}}),this.$minLabel=m("".concat(e," [data-calc-label-min]"),this.$scope),this.$minLabel.html(this.formatUtils.formatNumber(this.fieldSettings.range.min)),this.$maxLabel=m("".concat(e," [data-calc-label-max]"),this.$scope),this.$maxLabel.html(this.formatUtils.formatNumber(this.fieldSettings.range.max)),this.$areas=this.$slider.parent().find(".calc-areas")}},{key:"findNearestValue",value:function(t,e){var n=t.keyCode!==m.ui.keyCode.RIGHT,i=t.keyCode!==m.ui.keyCode.LEFT,o=null,r=null;return this.customValues.forEach((function(t){if(n&&t<=e||i&&t>=e){var a=Math.abs(e-t);(null===r||a<r)&&(o=t,r=a)}})),o}},{key:"setCalcIndicatorPosition",value:function(){var t=this.$slider.find(c).outerWidth(),e=this.$slider.find(h).width(),n=this.fieldSettings.value-this.fieldSettings.range.min,i=this.fieldSettings.range.max-this.fieldSettings.range.min,o=parseInt((n/i*100).toFixed(0))/100*(t-e);this.$slider.find(c).css("left","-".concat(o,"px"))}},{key:"_triggerUpdate",value:function(){this.$scope.trigger("fieldUpdated",{name:this.fieldSettings.name,value:this.fieldSettings.value})}},{key:"_hasError",value:function(){this.$scope.trigger("hasError",{name:this.fieldSettings.name,value:this.fieldSettings.value})}},{key:"_setInputValue",value:function(t){this.$input.val(this.formatUtils.formatNumber(t))}},{key:"_setSliderValue",value:function(t){this.$slider.slider({value:t})}},{key:"_isValidNumber",value:function(t){return/^[,\.0-9]+$/.test(t)}},{key:"_isInRange",value:function(t){return this.fieldSettings.range.min<=t&&t<=this.fieldSettings.range.max}},{key:"_displayValidationMessage",value:function(){var t=this.$validationMessage.attr("id");this.$validationMessage.empty(),this.$validationMessage.mustache(this.fieldSettings.name+p,this.fieldSettings.range),this.$input.addClass(d).attr("aria-describedby",t),this.$validationMessage.removeClass(f)}},{key:"_clearValidationMessage",value:function(){var t=this.$validationMessage.attr("id");this.$input.removeClass(d).removeAttr("aria-describedby",t),this.$validationMessage.addClass(f)}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},8755:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{i:()=>s});var r="resultTemplate",a=Bootstrap.jQuery,s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$scope=e,this.$resultElement=a(".result",e),a.Mustache.add(r,a(".result-template",e).html())}var e,n;return e=t,(n=[{key:"render",value:function(t){this.$resultElement.empty(),this.$resultElement.mustache(r,t)}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},8882:(t,e,n)=>{"use strict";var i,o,r,a=n(301),s=n(5039),l=n(7893);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==u(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===u(o)?o:String(o)),i)}var o}i=Bootstrap.jQuery,o=".config-holder",r=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$element=i(e),this.$loansCalculator=this.$element.closest(".O-PRDOFFER-RW-RBWM").find(".O-LNSCALC-RW-RBWM"),this.readAndPrepareConfig(),this.config.calculate&&(this.state={amount:this.getAmountVal(),months:this.getMonthsVal()},this.calculationService=new a.H,this.calculationRules=new s.B(this.config.rules),this.resultRenderer=new l.V(this.$element),this.$loansCalculator.on("fieldUpdated",(function(t,e){return n.recalculate(e)})),this.calculate())}var e,n;return e=t,(n=[{key:"getAmountVal",value:function(){return Number(this.$loansCalculator.find("[data-calc-input='amount'] input").val().replace(/\.|,/g,""))}},{key:"getMonthsVal",value:function(){return Number(this.$loansCalculator.find("[data-calc-input='months'] input").val())}},{key:"readAndPrepareConfig",value:function(){var t=this.$element.find(o),e=this.$loansCalculator.find(o);this.config=t.data("config"),this.amountPrefix=e.data("amount-prefix")||"",this.percentSufix=e.data("percent-sufix")||"",this.addMinAmountToRules()}},{key:"calculate",value:function(){if(this.validate()){var t=i.extend({apr:this.calculationRules.calculateApr(this.state)},this.state),e=this.calculationService.getCalculationResults(t);if(!e)return;this.displayResult(e)}else this.resultRenderer.empty()}},{key:"recalculate",value:function(t){this.state[t.name]=t.value,this.calculate()}},{key:"validate",value:function(){var t=this.calculationRules.calculateAmountRange(this.state),e=this.calculationRules.calculateMonthsRange(this.state);return t.min<=this.state.amount&&this.state.amount<=t.max&&e.min<=this.state.months&&this.state.months<=e.max}},{key:"displayResult",value:function(t){i.extend(t,{amount:this.state.amount,months:this.state.months,amountPrefix:this.amountPrefix,percentSufix:this.percentSufix}),this.resultRenderer.render(t)}},{key:"addMinAmountToRules",value:function(){for(var t=this.config.rules.length,e=0;e<t;++e)i.extend(this.config.rules[e],{minAmount:0===e?this.config.minAmount:this.config.rules[e-1].maxAmount+1})}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),HSBC_utils.registerComponent({name:"offerDetail",selector:".M-OFFERDETAIL-RW-RBWM",init:function(t){return new r(t)}})},7893:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{V:()=>l});var r="resultBottomTemplate",a="resultTopTemplate",s=Bootstrap.jQuery,l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$scope=e,this.$resultElements=s(".results",e),this.$resultBottom=s(".result-bottom",e),this.$resultTop=s(".result-top",e),s.Mustache.add(this.getMustacheName(r),s(".result-bottom-template",e).html()),s.Mustache.add(this.getMustacheName(a),s(".result-top-template",e).html())}var e,n;return e=t,(n=[{key:"render",value:function(t){this.empty(),this.$resultBottom.mustache(this.getMustacheName(r),t),this.$resultTop.mustache(this.getMustacheName(a),t)}},{key:"empty",value:function(){this.$resultElements.empty()}},{key:"getMustacheName",value:function(t){return"".concat(t,"_").concat(this.$scope.uniqueId().attr("id"))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},9310:(t,e,n)=>{"use strict";var i=n(7856),o=n.n(i);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return(e=p(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,o,r,a,s=[],l=!0,u=!1;try{if(r=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(i=r.call(n)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return s}}(t,e)||h(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||h(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){if(t){if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function d(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,p(i.key),i)}}function p(t){var e=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===r(e)?e:String(e)}var m=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$=Bootstrap.jQuery,this.options={modalIdSelector:"#".concat(e.modalId),buttonSelector:".crh-button",closeSelector:".crh-modal__close-button",overlaySelector:".crh-overlay",smartImageSelector:"a.smart-image-content",inlineLinkSelector:"a.crh-link",inputSelector:".crh-checkbox-radio__input",disabledCssClass:"disabled",exceptGmClass:"except-gm",LOGOUT_EVENT_COMMAND:"dpws_logout_command",close:function(){},fetchModal:function(){return null},logoutOnAction:!1,isLoggedIn:function(){return!1},onActionIntent:function(){},reopenModalTriggeredOnLoad:function(){}},this.isBlank=!1,this.settings=this.$.extend({},this.options,e),this.setUpModal(),this.flagModalButtons(),this.setUpInteractiveInputs(),this.observeButtons(),this.observeOverlay(),this.observeInputs()}var e,n,i;return e=t,i=[{key:"getModalButtonTarget",value:function(t){return t?"_blank":"_self"}},{key:"getModalButtonRelAttribute",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n="noopener";return t?e.toLowerCase().includes(n)?e:"".concat(e," ").concat(n):e.replace(n,"")||null}},{key:"actionExecutionForElementShouldBeAborted",value:function(t,e){return!!t.attr("aria-disabled")&&(e.preventDefault(),!0)}},{key:"getInteractionsMappedByInteractiveId",value:function(e,n){var i=n.input,o=n.inputInteractions,r=t.getInputState(i);return o.reduce((function(t,e){var n=e.interactiveId,i=e.interaction,o=t[n]||{},a=o[i]||[];return s(s({},t),{},l({},n,s(s({},o),{},l({},i,[].concat(c(a),[r])))))}),e)}},{key:"getInputState",value:function(t){return{isCheckboxChecked:"checkbox"===t.type&&t.checked}}},{key:"getAttributesBasedOnInteractions",value:function(t){var e=t.enableWhenSelected;return e?e.every((function(t){return t.isCheckboxChecked}))?{"aria-disabled":null}:{"aria-disabled":!0}:{}}},{key:"setElementAttributes",value:function(t,e){return Object.entries(e).forEach((function(e){var n=u(e,2),i=n[0],o=n[1];void 0!==o&&(null!==o?t.setAttribute(i,o):t.removeAttribute(i))}))}},{key:"removeURLHash",value:function(){var t=window.location;window.history.pushState("",document.title,t.pathname+t.search)}},{key:"isDefinedAndIsNotHash",value:function(t){return t&&"#"!==t}}],(n=[{key:"action",value:function(t){this.shouldLogoutOnAction(t)&&this.defer(this.logoutOnAction,100),window.addEventListener("pagehide",this.closeModalImmediately.bind(this))}},{key:"closeModalImmediately",value:function(){var t=this;this.settings.close((function(){t.removePageHideListener(),t.defer((function(){t.settings.reopenModalTriggeredOnLoad(t.currentPath)}),100)}),0)}},{key:"removePageHideListener",value:function(){window.removeEventListener("pagehide",this.closeModalImmediately.bind(this))}},{key:"updateModalButtonsAttributes",value:function(){var e=this;this.$modal.find(this.settings.buttonSelector).each((function(n,i){var o=e.$(i),r=o.attr("href"),a=o.attr("data-href"),s=o.attr("data-href-source"),l=e.shouldLogoutOnAction(o);if("#{modal_trigger_placeholder}"===r||"modal-trigger"===s)return e.setUrlDataFromLinkThatInvokedModal(o,l),void(s||o.attr("data-href-source","modal-trigger"));if(r||a){var u=o.attr("rel");o.attr({target:t.getModalButtonTarget(l),rel:t.getModalButtonRelAttribute(l,u)})}}))}},{key:"setUrlDataFromLinkThatInvokedModal",value:function(e,n){var i=this.isBlank||n,o=this.rel,r=e.attr("data-button-rel"),a=void 0===r?e.attr("rel")||"":r;e.attr({href:this.currentPath,target:t.getModalButtonTarget(i),rel:t.getModalButtonRelAttribute(i,a||o),"data-button-rel":a})}},{key:"cancel",value:function(){this.settings.close()}},{key:"observeButtons",value:function(){var e=this;this.$(document).on("click change","".concat(this.settings.modalIdSelector," ").concat(this.settings.buttonSelector,",\n      ").concat(this.settings.modalIdSelector," ").concat(this.settings.smartImageSelector),(function(n){var i=e.$(n.currentTarget);t.actionExecutionForElementShouldBeAborted(i,n)||e.dispatchAction(i,n)}))}},{key:"setUpInteractiveInputs",value:function(){var t=this.$modal.find(this.settings.inputSelector).get();this.interactiveInputs=t.reduce((function(t,e){var n=e.getAttribute("data-interactions");return n?[].concat(c(t),[{input:e,inputInteractions:JSON.parse(n)}]):t}),[]),this.elementsControlledByInteractiveInputs={}}},{key:"updateAttributesOfControlledElements",value:function(){var e=this,n=this.interactiveInputs.reduce(t.getInteractionsMappedByInteractiveId,{});Object.entries(n).forEach((function(n){var i=u(n,2),o=i[0],r=i[1],a=e.getElementControlledByInteractiveInput(o);if(a){var s=t.getAttributesBasedOnInteractions(r);t.setElementAttributes(a,s)}}))}},{key:"getElementControlledByInteractiveInput",value:function(t){if(Object.keys(this.elementsControlledByInteractiveInputs).includes(t))return this.elementsControlledByInteractiveInputs[t];var e=u(this.$modal.find("#".concat(t)).get(),1)[0];return this.elementsControlledByInteractiveInputs[t]=e,e}},{key:"observeOverlay",value:function(){var t=this;this.$(document).on("click change","".concat(this.settings.modalIdSelector).concat(this.settings.overlaySelector),(function(e){if(t.$(e.target).is(t.settings.overlaySelector)){var n=t.$modal.find(t.settings.closeSelector);n.length&&n.get(0).click()}}))}},{key:"observeInputs",value:function(){var e=this;this.$(document).on("click change","".concat(this.settings.modalIdSelector," ").concat(this.settings.inputSelector),(function(n){var i=e.$(n.currentTarget);t.actionExecutionForElementShouldBeAborted(i,n)||e.updateAttributesOfControlledElements()}))}},{key:"dispatchAction",value:function(e,n){t.removeURLHash();var i=e.attr("href");e.attr("data-action-intent")&&this.settings.onActionIntent(),t.isDefinedAndIsNotHash(i)?this.action(e):(n.preventDefault(),this.cancel())}},{key:"setUpModal",value:function(){"function"==typeof this.settings.fetchModal&&(this.$modal=this.settings.fetchModal())}},{key:"logoutOnAction",value:function(){this.$(document).trigger(this.settings.LOGOUT_EVENT_COMMAND)}},{key:"shouldLogoutOnAction",value:function(t){return t.attr("data-is-logout")&&this.settings.isLoggedIn()}},{key:"flagModalButtons",value:function(){this.$modal.find("".concat(this.settings.buttonSelector,",\n        ").concat(this.settings.smartImageSelector,",\n        ").concat(this.settings.inlineLinkSelector)).addClass(this.settings.exceptGmClass)}},{key:"defer",value:function(t,e){return setTimeout(t.bind(this),e)}}])&&d(e.prototype,n),i&&d(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function v(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==y(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===y(o)?o:String(o)),i)}var o}var b=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$=Bootstrap.jQuery,this.options={closeCssClass:"crh-modal__close-button",disabledCssClass:"disabled",closeKeyboadKey:27,fetchModal:function(){return null}},this.consts={visible:":visible",anchor:"a",input:"input",button:"button"},this.settings=this.$.extend({},this.options,e),this.setUpModal()}var e,n;return e=t,(n=[{key:"setUpModal",value:function(){"function"==typeof this.settings.fetchModal&&(this.$modal=this.settings.fetchModal())}},{key:"focusOnCloseButton",value:function(){var t=this.$modal.find(".".concat(this.settings.closeCssClass)).get(0);t&&t.focus()}},{key:"observeEscapeKeyPressed",value:function(){var t=this,e=this.$modal.find(".".concat(this.settings.closeCssClass));this.$(document).on("keyup",(function(n){t.$modal.is(t.consts.visible)&&n.which===t.settings.closeKeyboadKey&&e.length&&e.get(0).click()}))}},{key:"observeTabKeyPressed",value:function(){var t=this,e=this.$modal.find(HSBC_utils.focusables.join()),n=e.first()[0],i=e.last()[0];this.$(document).on("keydown",(function(e){var o=e.keyCode===HSBC_utils.keyCodes.TAB,r=document.activeElement;t.$modal.is(t.consts.visible)&&o&&(r!==i||e.shiftKey?r===n&&e.shiftKey&&(i.focus(),e.preventDefault()):(n.focus(),e.preventDefault()))}))}},{key:"setUpLastActive",value:function(t){this.lastActive=t}},{key:"backToLastActive",value:function(){var t=this.lastActive;t&&(t.is(this.consts.anchor)||t.is(this.consts.button)||t.is(this.consts.input)||t.is(document.body)||((t=t.parents(this.consts.anchor)).length||(t=t.parents(this.consts.button)),t.length||(t=t.parents(this.consts.input)),t.length||(t=t.parents(document.body))),t.get(0).focus())}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function S(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==g(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===g(o)?o:String(o)),i)}var o}var k=Bootstrap.jQuery,w=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.lang=t.setUpLang(),this.settings=k.extend({name:"HSBC_".concat(this.lang,"_").concat(this.constructor.name),cookieSettings:{path:"/",expires:{days:365}},session:!1,forceCookie:!1,sessionCookieSettings:{path:"/"}},e),this.localStorage=window.localStorage,this.sessionStorage=window.sessionStorage,this.hasLocalStorage=void 0!==this.localStorage,this.hasSessionStorage=void 0!==this.sessionStorage,this.setCookie=HSBC_utils.setCookie,this.getCookie=HSBC_utils.getCookie}var e,n,i;return e=t,i=[{key:"parseData",value:function(t){return t?JSON.parse(t):{}}},{key:"setUpLang",value:function(){return k("html").attr("lang")}}],(n=[{key:"save",value:function(t){var e=t||{};this.settings.session?this.hasSessionStorage&&!this.settings.forceCookie?this.sessionStorage[this.settings.name]=JSON.stringify(e):this.setCookie(this.settings.name,JSON.stringify(e),this.settings.sessionCookieSettings):this.hasLocalStorage&&!this.settings.forceCookie?this.localStorage[this.settings.name]=JSON.stringify(e):this.setCookie(this.settings.name,JSON.stringify(e),this.settings.cookieSettings)}},{key:"read",value:function(){return this.settings.session?this.hasSessionStorage&&!this.settings.forceCookie?t.parseData(this.sessionStorage[this.settings.name]):t.parseData(this.getCookie(this.settings.name)):this.hasLocalStorage&&!this.settings.forceCookie?t.parseData(this.localStorage[this.settings.name]):t.parseData(this.getCookie(this.settings.name))}}])&&S(e.prototype,n),i&&S(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function $(t){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(t)}function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(Object(n),!0).forEach((function(e){T(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function T(t,e,n){return(e=x(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function P(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,o,r,a,s=[],l=!0,u=!1;try{if(r=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(i=r.call(n)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return s}}(t,e)||function(t,e){if(t){if("string"==typeof t)return O(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function A(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,x(i.key),i)}}function x(t){var e=function(t,e){if("object"!==$(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==$(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===$(e)?e:String(e)}var B=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.items=Object.entries(e).map((function(e){var n=P(e,2),i=n[0],o=n[1];return t.init(i,o)}))}var e,n,i;return e=t,i=[{key:"init",value:function(e,n){if(!n.enabled)return{get:function(){return null},set:function(){return null}};var i=new w({name:e,session:n.session,forceCookie:!0}),o=t.getDefaults(n.defaults,n.externals),r=i.read();if(Object.keys(r).length){var a=E(E(E({},t.getDefaults(n.defaults)),r),t.getDefaults(n.externals)),s=Object.entries(a).reduce((function(t,e){var n=P(e,2),i=n[0],r=n[1];return E(E({},t),{},T({},i,Object.keys(o).includes(i)?r:void 0))}),{});i.save(s)}return{get:function(){var e=i.read();return Object.keys(e).length?e:t.getDefaults(n.defaults,n.externals)},set:function(t){var e=this.get(),n=t(e),o=E(E({},e),n);return i.save(o),o},setDefaults:function(){var e=t.getDefaults(n.defaults,n.externals);return i.save(e),e},updater:n.updater,checkLimit:t.setChecker(n.limiter),checkReset:t.setChecker(n.resetter),name:n.name}}},{key:"getDefaults",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.entries(E(E({},t),e)).reduce((function(t,e){var n=P(e,2),i=n[0],o=n[1];return E(E({},t),{},T({},i,"function"==typeof o?o():o))}),{})}},{key:"setChecker",value:function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return!1}}}],(n=[{key:"checkWhetherShouldBeReset",value:function(){this.items.forEach((function(t){var e=t.get();e&&t.checkReset(e)&&t.setDefaults()}))}},{key:"hasReachedActiveLimits",value:function(){return this.items.some((function(t){var e=t.get();return!!e&&t.checkLimit(e)}))}},{key:"update",value:function(t){return this.items.forEach((function(e){t.includes(e.name)&&e.set(e.updater)}))}}])&&A(e.prototype,n),i&&A(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}(),j=function(t){return{currentCounter:t.currentCounter+1}},_=function(t){return t.currentCounter>=t.numberOfViewsCounter},I=function(t){var e=t.frequencyCapDate,n=t.timeRangeResetCounter;return void 0!==n&&moment().diff(e,"days")>=n},M=function(){return moment().startOf("day")};function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function R(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?R(Object(n),!0).forEach((function(e){H(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function H(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==L(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===L(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var N="accelerated-evenly",U="until-submitted",F="once-per-session",W=function(){return{name:U,enabled:!0,defaults:{isSubmitted:!1},updater:function(){return{isSubmitted:!0}},limiter:function(t){return t.isSubmitted}}};function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function z(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function Q(t,e,n){return(e=G(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function q(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,G(i.key),i)}}function G(t){var e=function(t,e){if("object"!==V(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==V(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===V(e)?e:String(e)}var K=function(){function t(e){var n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$=Bootstrap.jQuery,this.options={openCssClass:"show-pws",modalSelector:".modal",proxyElement:document.body,IS_LOGGED_IN_EVENT:"dpws_authorized_true",IS_NOT_LOGGED_IN_EVENT:"dpws_authorized_false",authorizedOnly:!1,anonymousOnly:!1,showOnce:!1,openImmediate:!1,isBlank:!1,closingModalAnimationTime:400},this.settings=this.$.extend({},this.options,e),this.id="no-modal",this.$proxyElement=this.$(this.settings.proxyElement);var i,o=this.modalPathToKey();this.frequencyCap=new B((Q(n={},"HSBC_PWSMODAL_DATA".concat(o),(i={enabled:this.settings.showOnce},{name:F,enabled:i.enabled,session:!0,defaults:{showedOnce:!1},updater:function(){return{showedOnce:!0}},limiter:function(t){return t.showedOnce}})),Q(n,"HSBC_PWSMODAL_FREQ_DATA".concat(o),this.setUpConfigForDeliveryMethod()),n)),this.observeAuth(),this.prepare()}var e,n;return e=t,n=[{key:"setUpConfigForDeliveryMethod",value:function(){if(this.settings.reinitializationOccurrence){if("session"===this.settings.reinitializationOccurrence)return D(D({},W()),{},{session:!0});if("days"===this.settings.reinitializationOccurrence)return t={timeRangeResetCounter:this.settings.daysToReinitializeAfterSubmission}.timeRangeResetCounter,D(D({},W()),{},{defaults:{isSubmitted:!1,frequencyCapDate:M},externals:{timeRangeResetCounter:t},updater:function(){return{isSubmitted:!0,frequencyCapDate:moment().startOf("day")}},resetter:I});if("never"===this.settings.reinitializationOccurrence)return D({},W())}var t,e;return void 0!==this.settings.numberOfViewsCounter&&void 0!==this.settings.timeRangeResetCounter?(e={timeRangeResetCounter:this.settings.timeRangeResetCounter,numberOfViewsCounter:this.settings.numberOfViewsCounter},{name:N,enabled:!0,defaults:{currentCounter:0,frequencyCapDate:M},externals:{timeRangeResetCounter:e.timeRangeResetCounter,numberOfViewsCounter:e.numberOfViewsCounter},updater:j,limiter:_,resetter:I}):{enabled:!1}}},{key:"observeAuth",value:function(){var t=this;this.$(document).on(this.settings.IS_NOT_LOGGED_IN_EVENT,(function(){t.isAuthorizedOnly()&&t.abort(),t.loggedIn=!1,t.actions&&t.actions.updateModalButtonsAttributes()})),this.$(document).on(this.settings.IS_LOGGED_IN_EVENT,(function(){t.isAnonymousOnly()&&t.abort(),t.loggedIn=!0,t.actions&&t.actions.updateModalButtonsAttributes()}))}},{key:"onLoggedIn",value:function(t){"function"==typeof t&&(this.isLoggedIn()?t():this.$(document).on(this.settings.IS_LOGGED_IN_EVENT,(function(){return t()})))}},{key:"onNotLoggedIn",value:function(t){"function"==typeof t&&(this.isLoggedIn()?this.$(document).on(this.settings.IS_NOT_LOGGED_IN_EVENT,(function(){return t()})):t())}},{key:"isLoggedIn",value:function(){return!!this.loggedIn}},{key:"isAuthorizedOnly",value:function(){return this.settings.authorizedOnly&&!this.settings.anonymousOnly}},{key:"isAnonymousOnly",value:function(){return this.settings.anonymousOnly&&!this.settings.authorizedOnly}},{key:"modalPathToKey",value:function(){return"".concat(this.settings.modalUrl).replace(/\//g,"_")}},{key:"setUpCurrentPath",value:function(t){this.currentPath=t,this.actions.currentPath=t}},{key:"setUpIsBlank",value:function(t){this.isBlank=t,this.actions.isBlank=t}},{key:"setUpRelAttribute",value:function(t){this.actions.rel=t}},{key:"fetchModal",value:function(){return this.$modal}},{key:"open",value:function(t,e){this.frequencyCap.checkWhetherShouldBeReset(),this.$modal&&!this.frequencyCap.hasReachedActiveLimits()?(this.setUpCurrentPath(t.url),this.setUpIsBlank(t.isBlank),this.setUpRelAttribute(t.rel),this.$proxyElement.append(this.$modal),this.actions.updateModalButtonsAttributes(),this.actions.flagModalButtons(),this.actions.updateAttributesOfControlledElements(),this.addURLHash(),this.markAsOpen(),this.hideMainPageForReaders(),this.ally.setUpLastActive(e),this.ally.focusOnCloseButton(),this.ally.observeEscapeKeyPressed(),this.ally.observeTabKeyPressed(),this.stateEvent("open"),this.$modal.addClass("animate"),this.frequencyCap.update([F,N])):e&&window.open(t.url,t.isBlank?"_blank":"_self",t.rel)}},{key:"close",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.settings.closingModalAnimationTime;this.$modal&&(this.showMainPageForReaders(),this.$modal.removeClass("animate"),this.markAsClosed(),this.ally.backToLastActive(),this.stateEvent("close"),setTimeout((function(){e.$modal&&e.$modal.remove()}),n),t&&t())}},{key:"addURLHash",value:function(){window.location.hash="modal"}},{key:"prepare",value:function(){var t=this,e=this.settings.modalUrl+(document.location.port?"?wcmmode=disabled":"");e.includes(this.settings.modalSelector)||(e=e.replace(".html",""),e="".concat(e).concat(this.settings.modalSelector,".html")),this.$.get(e).done((function(e){var n=o().sanitize(e,{ADD_ATTR:["tms-dblclick","target"]});t.$modal=t.$(n);var i=t.identify(t.$modal);t.actions=new m({close:t.close.bind(t),fetchModal:t.fetchModal.bind(t),logoutOnAction:t.settings.logoutOnAction,isLoggedIn:t.isLoggedIn.bind(t),onActionIntent:function(){t.frequencyCap.update([U])},reopenModalTriggeredOnLoad:function(e){t.shouldOpenImmediate()&&t.open({url:e})},modalId:i}),t.ally=new b({fetchModal:t.fetchModal.bind(t)}),t.shouldOpenImmediate()&&(t.isAuthorizedOnly()?t.onLoggedIn((function(){t.open({url:t.settings.originalPath,isBlank:t.settings.isBlank})})):t.isAnonymousOnly()?t.onNotLoggedIn((function(){t.open({url:t.settings.originalPath,isBlank:t.settings.isBlank})})):t.open({url:t.settings.originalPath,isBlank:t.settings.isBlank}))}))}},{key:"shouldOpenImmediate",value:function(){return!!this.settings.openImmediate}},{key:"markAsOpen",value:function(){this.$proxyElement.addClass(this.settings.openCssClass)}},{key:"hideMainPageForReaders",value:function(){this.$modal.siblings().attr("aria-hidden",!0)}},{key:"showMainPageForReaders",value:function(){this.$modal.siblings().removeAttr("aria-hidden")}},{key:"markAsClosed",value:function(){this.$proxyElement.removeClass(this.settings.openCssClass)}},{key:"identify",value:function(t){var e,n,i=t.attr("id");if(!i){var o=(e=window.crypto.getRandomValues(new Uint16Array(1)),n=1,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,o,r,a,s=[],l=!0,u=!1;try{if(r=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(i=r.call(n)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return s}}(e,n)||function(t,e){if(t){if("string"==typeof t)return z(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];i="modal-id-".concat(o),t.attr("id",i)}return this.id=i,this.settings.openCssClass="".concat(this.settings.openCssClass,"-").concat(i),i}},{key:"abort",value:function(){this.close(),this.remove(),this.stateEvent("abort")}},{key:"remove",value:function(){this.$modal&&this.$modal.length&&(this.$modal.remove(),this.$modal=null)}},{key:"stateEvent",value:function(t){this.$(document).trigger({type:"pws_modal_".concat(t),id:this.id})}}],n&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function Y(t){return Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Y(t)}function J(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==Y(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===Y(o)?o:String(o)),i)}var o}var X=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$=Bootstrap.jQuery,this.options={buttonSelector:'[class*="M-MODWIN-"] [class*="A-BT"],[class*="M-MODWIN-"] [class*="A-FSCHKB-"] [type="checkbox"],[class*="M-MODWIN-"] .close-trigger',checkboxSelector:'[class*="A-FSCHKB-"] [type="checkbox"]',actionSelector:'[class*="A-BTNP-"],[class*="A-BTNS-"]',cancelSelector:'[class*="A-BTNSO-"],[class*="A-BTNT-"]',closeSelector:".close-trigger",disabledCssClass:"disabled",exceptGmClass:"except-gm",showOnce:!1,close:function(){},fetchModal:function(){return null},save:function(){},logoutOnAction:!1,LOGOUT_EVENT_COMMAND:"dpws_logout_command"},this.isBlank=!1,this.settings=this.$.extend({},this.options,e),this.setUpModal(),this.updateButtonsSelectorWithID(),this.flagModalButtons(),this.observeButtons(),this.toggleActionButton(this.validateAsForm())}var e,n;return e=t,n=[{key:"action",value:function(){var t=this.validateAsForm();t&&(this.saveShowedOnce(),this.shouldLogoutOnAction()&&this.defer(this.logoutOnAction,1e3),this.defer(this.settings.close)),this.toggleActionButton(t)}},{key:"updateActionButtonAttributes",value:function(){var t=o().sanitize(this.settings.buttonSelector);this.$(t).filter(this.settings.actionSelector).attr({href:this.currentPath,target:this.isBlank||this.shouldLogoutOnAction()?"_blank":"_self"})}},{key:"cancel",value:function(){this.resetAsForm(),this.toggleActionButton(this.validateAsForm()),this.defer(this.settings.close,500)}},{key:"updateButtonsSelectorWithID",value:function(){if(this.$modal){var t=o().sanitize(this.$modal.attr("id"));this.settings.buttonSelector=this.settings.buttonSelector.replace(/\[class\*="M-MODWIN-"\]/g,"#".concat(t))}}},{key:"observeButtons",value:function(){var t=this;this.$(document).on("click change",this.settings.buttonSelector,(function(e){var n=t.$(e.target),i=n;t.filterActionButtonsAndLinks(e.target)||((i=n.parents("a")).length||(i=n.parents("button")),i.length||(i=n.parents("input"))),t.dispatchAction(i)}))}},{key:"filterActionButtonsAndLinks",value:function(t){return t&&("a"===t.tagName.toLowerCase()||"button"===t.tagName.toLowerCase()||"input"===t.tagName.toLowerCase())}},{key:"dispatchAction",value:function(t){t.is(this.settings.actionSelector)?this.action():t.is(this.settings.cancelSelector)?this.cancel():t.is(this.settings.closeSelector)?(this.callCancelButtonIfExists(),this.cancel()):t.is(this.settings.checkboxSelector)&&this.toggleActionButton(this.validateAsForm())}},{key:"validateAsForm",value:function(){var t=!0;return this.$modal&&this.$modal.length&&this.$modal.find(this.settings.checkboxSelector).each((function(e,n){t=n.checked&&t})),t}},{key:"resetAsForm",value:function(){this.$modal&&this.$modal.length&&this.$modal.find(this.settings.checkboxSelector).each((function(t,e){e.checked=!1}))}},{key:"toggleActionButton",value:function(t){var e=this.$modal.find(this.settings.actionSelector);t?e.removeClass(this.settings.disabledCssClass):e.addClass(this.settings.disabledCssClass)}},{key:"setUpModal",value:function(){"function"==typeof this.settings.fetchModal&&(this.$modal=this.settings.fetchModal())}},{key:"logoutOnAction",value:function(){this.$(document).trigger(this.settings.LOGOUT_EVENT_COMMAND)}},{key:"shouldLogoutOnAction",value:function(){return!!this.settings.logoutOnAction}},{key:"saveShowedOnce",value:function(){("function"==typeof this.settings.save||this.settings.showOnce)&&this.settings.save({showedOnce:!0})}},{key:"callCancelButtonIfExists",value:function(){var t=this.$modal.find(this.settings.cancelSelector);document.location.href=t.attr("href")}},{key:"flagModalButtons",value:function(){var t=o().sanitize(this.settings.buttonSelector);this.$(t).addClass(this.settings.exceptGmClass)}},{key:"defer",value:function(){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3;return setTimeout((arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){}).bind(this),t)}}],n&&J(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function Z(t){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Z(t)}function tt(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Z(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==Z(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===Z(o)?o:String(o)),i)}var o}var et=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$=Bootstrap.jQuery,this.options={focusableFrameCssClass:"M-MODWIN-RW-DEV",buttonSelector:'[class*="M-MODWIN-"] [class*="A-BT"],[class*="M-MODWIN-"] .A-FSCHKB-RW-ALL [type="checkbox"],[class*="M-MODWIN-"] .close-trigger',checkboxSelector:'[class*="A-FSCHKB-"] [type="checkbox"]',actionSelector:'[class*="A-BTNP-"],[class*="A-BTNS-"]',cancelSelector:'[class*="A-BTNSO-"],[class*="A-BTNT-"]',closeCssClass:"close-trigger",disabledCssClass:"disabled",validationMessageSelector:"[data-validation-message]",validationMessageKey:"validation-message",validationMessageCssClass:"validation-message",closeKeyboadKey:27,fetchModal:function(){return null}},this.settings=this.$.extend({},this.options,e),this.setUpLastActive(),this.setUpModal(),this.setUpCta()}var e,n;return e=t,(n=[{key:"focusOnShow",value:function(){var t=o().sanitize(this.settings.focusableFrameCssClass),e=this.$(".".concat(t)).get(0);e&&e.focus()}},{key:"setUpModal",value:function(){"function"==typeof this.settings.fetchModal&&(this.$modal=this.settings.fetchModal())}},{key:"focusCtaOrClose",value:function(){var t=this.$modal.find(".".concat(this.settings.closeCssClass)).get(0);t&&t.focus()}},{key:"setUpCta",value:function(){this.$cta=this.$modal.find(this.settings.actionSelector)}},{key:"closeOnEsc",value:function(){var t=this,e=this.$modal.find(".".concat(this.settings.closeCssClass));this.$(document).on("keyup",(function(n){t.$modal.is(":visible")&&n.which===t.settings.closeKeyboadKey&&e.length&&e.get(0).click()}))}},{key:"setUpLastActive",value:function(t){this.lastActive=t}},{key:"backToLastActive",value:function(){var t=this.lastActive;t&&(t.is("a")||t.is("button")||t.is("input")||t.is(document.body)||((t=t.parents("a")).length||(t=t.parents("button")),t.length||(t=t.parents("input")),t.length||(t=t.parents(document.body))),t.get(0).focus())}},{key:"fetchValidationText",value:function(){return this.$modal.find(this.settings.validationMessageSelector).data(this.settings.validationMessageKey)||"is disabled"}},{key:"addValidationTextToCta",value:function(){var t=this.$cta.find(".".concat(this.settings.validationMessageCssClass));t.length||(t=this.$('<span class="visuallyhidden '.concat(this.settings.validationMessageCssClass,'">').concat(this.fetchValidationText(),"</span>"))).appendTo(this.$cta)}}])&&tt(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function nt(t){return nt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nt(t)}function it(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function ot(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==nt(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==nt(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===nt(o)?o:String(o)),i)}var o}var rt=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$=Bootstrap.jQuery,this.options={openCssClass:"modal-show",modalSelector:".modal",proxyElement:document.body,IS_LOGGED_IN_EVENT:"dpws_authorized_true",IS_NOT_LOGGED_IN_EVENT:"dpws_authorized_false",logoutOnAction:!1,authorizedOnly:!1,anonymousOnly:!1,showOnce:!1,openImmediate:!1,isBlank:!1},this.settings=this.$.extend({},this.options,e),this.id="no-modal",this.$proxyElement=this.$(document.body),this.dataKeeper=new w({name:"HSBC_GENERICMODAL_DATA".concat(this.modalPathToKey()),session:!0,forceCookie:!0}),this.storedData=this.dataKeeper.read(),this.showedOnce=!!this.storedData.showedOnce,this.observeAuth(),this.prepare()}var e,n;return e=t,n=[{key:"observeAuth",value:function(){var t=this;this.$(document).on(this.settings.IS_NOT_LOGGED_IN_EVENT,(function(){t.isAuthorizedOnly()&&t.abort(),t.loggedIn=!1})),this.$(document).on(this.settings.IS_LOGGED_IN_EVENT,(function(){t.isAnonymousOnly()&&t.abort(),t.loggedIn=!0}))}},{key:"onLoggedIn",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};this.isLoggedIn()?e():this.$(document).on(this.settings.IS_LOGGED_IN_EVENT,(function(){return e.bind(t)}))}},{key:"onNotLoggedIn",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};this.$(document).on(this.settings.IS_NOT_LOGGED_IN_EVENT,(function(){return e.bind(t)}))}},{key:"isLoggedIn",value:function(){return!!this.loggedIn}},{key:"isAuthorizedOnly",value:function(){return this.settings.authorizedOnly&&!this.settings.anonymousOnly}},{key:"isAnonymousOnly",value:function(){return this.settings.anonymousOnly&&!this.settings.authorizedOnly}},{key:"modalPathToKey",value:function(){return"".concat(this.settings.modalUrl).replace(/\//g,"_")}},{key:"setUpCurrentPath",value:function(t){this.currentPath=t,this.actions.currentPath=t}},{key:"setUpIsBlank",value:function(t){this.isBlank=t,this.actions.isBlank=t}},{key:"fetchModal",value:function(){return this.$modal}},{key:"open",value:function(t,e){this.$modal&&!this.shouldNotShowModal()&&(this.ally.setUpLastActive(e),this.setUpCurrentPath(t.url),this.setUpIsBlank(t.isBlank),this.$proxyElement.append(this.$modal),this.actions.updateActionButtonAttributes(),this.actions.flagModalButtons(),this.$modal.show(),this.markAsOpen(),this.ally.setUpLastActive(e),HSBC_utils.isMobileiOS||HSBC_utils.isMobileAndroid||this.ally.focusOnShow(),this.ally.focusCtaOrClose(),this.ally.closeOnEsc(),this.stateEvent("open"))}},{key:"close",value:function(t){this.$modal&&(t&&t.url&&this.setUpCurrentPath(t.url),t&&t.isBlank&&this.setUpIsBlank(t.isBlank),this.$modal.hide(),this.markAsClosed(),this.ally.backToLastActive(),this.stateEvent("close"))}},{key:"prepare",value:function(){var t=this,e=this.settings.modalUrl+(document.location.port?"?wcmmode=disabled":"");e.includes(this.settings.modalSelector)||(e=e.replace(".html",""),e="".concat(e).concat(this.settings.modalSelector,".html")),this.$.get(e).done((function(e){var n=o().sanitize(e,{ADD_ATTR:["tms-dblclick","target"]});t.$modal=t.$(n),t.identify(t.$modal),t.actions=new X({close:t.close.bind(t),fetchModal:t.fetchModal.bind(t),showOnce:t.settings.showOnce,save:t.dataKeeper.save.bind(t.dataKeeper),logoutOnAction:t.settings.logoutOnAction,authorizedOnly:t.settings.authorizedOnly,anonymousOnly:t.settings.anonymousOnly}),t.ally=new et({fetchModal:t.fetchModal.bind(t)}),t.ally.addValidationTextToCta();var i=function(){t.open({url:t.settings.originalPath,isBlank:t.settings.isBlank})};t.shouldOpenImmediate()&&(t.isAuthorizedOnly()?t.onLoggedIn(i):t.isAnonymousOnly()?t.onNotLoggedIn(i):i())}))}},{key:"shouldOpenImmediate",value:function(){return!!this.settings.openImmediate}},{key:"markAsOpen",value:function(){this.$proxyElement.addClass(this.settings.openCssClass)}},{key:"markAsClosed",value:function(){this.$proxyElement.removeClass(this.settings.openCssClass)}},{key:"identify",value:function(t){var e,n,i=o().sanitize(t.attr("id"));if(!i){var r=(e=window.crypto.getRandomValues(new Uint16Array(1)),n=1,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,o,r,a,s=[],l=!0,u=!1;try{if(r=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(i=r.call(n)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return s}}(e,n)||function(t,e){if(t){if("string"==typeof t)return it(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?it(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];i="modal-id-".concat(r),t.attr("id",i)}this.id=i,this.settings.openCssClass="".concat(this.settings.openCssClass,"-").concat(i)}},{key:"abort",value:function(){this.close(),this.remove(),this.stateEvent("abort")}},{key:"remove",value:function(){this.$modal&&this.$modal.length&&(this.$modal.remove(),this.$modal=null)}},{key:"shouldNotShowModal",value:function(){return this.settings.showOnce&&this.showedOnce}},{key:"stateEvent",value:function(t){this.$(document).trigger({type:"generic_modal_".concat(t),id:this.id})}}],n&&ot(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function at(t){return at="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},at(t)}function st(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==at(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==at(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===at(o)?o:String(o)),i)}var o}var lt=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$=Bootstrap.jQuery,this.options={triggersSelector:'a[href]:not([href^="#"]):not(.except-gm)',notLogonLinksSelector:":not(.login-button):not(.login-link)",triggerOn:"click",logoutOnAction:!1,authorizedOnly:!1,anonymousOnly:!1,enableOnLogonLinks:!1,enabled:!1,wildcardSymbol:"*"},this.settings=this.$.extend({},this.options,e),this.isEnabled()&&this.chooseTrigger()}var e,n;return e=t,n=[{key:"isEnabled",value:function(){return!!this.settings.enabled}},{key:"prepareModal",value:function(){var t=this;"pwsModal"===this.settings.modalType?(this.modal=new K({modalUrl:this.settings.modalUrl,showOnce:this.settings.showOnce,authorizedOnly:this.settings.authorizedOnly,anonymousOnly:this.settings.anonymousOnly,numberOfViewsCounter:this.settings.numberOfViewsCounter,timeRangeResetCounter:this.settings.timeRangeResetCounter,openImmediate:this.isOnLoadTrigger(),originalPath:this.fetchPageUrl(),closingModalAnimationTime:this.settings.closingModalAnimationTime,reinitializationOccurrence:this.settings.reinitializationOccurrence,daysToReinitializeAfterSubmission:this.settings.daysToReinitializeAfterSubmission}),window.addEventListener("hashchange",(function(){"#modal"!==window.location.hash&&t.modal.$proxyElement.hasClass(t.modal.settings.openCssClass)&&t.modal.close()}))):this.modal=new rt({modalUrl:this.settings.modalUrl,showOnce:this.settings.showOnce,logoutOnAction:this.settings.logoutOnAction,authorizedOnly:this.settings.authorizedOnly,anonymousOnly:this.settings.anonymousOnly,numberOfViewsCounter:this.settings.numberOfViewsCounter,timeRangeResetCounter:this.settings.timeRangeResetCounter,openImmediate:this.isOnLoadTrigger(),originalPath:this.fetchPageUrl()})}},{key:"hasWhitelist",value:function(){return this.settings.whitelist&&!!this.settings.whitelist.length}},{key:"hasBlacklist",value:function(){return this.settings.blacklist&&!!this.settings.blacklist.length}},{key:"onWhitelistMatch",value:function(t,e,n){n&&n.preventDefault(),"function"==typeof e&&e(t)}},{key:"isOnWhitelist",value:function(t){var e=this;if(!this.hasWhitelist())return!1;var n=!1;return this.hasWildcardOnWhitelist()?(this.settings.whitelist.forEach((function(i){var o=e.buildWildcardRegexp(e.cleanUpPath(i));(t.match(o)||[])[0]!==t||n||(n=!0)})),n):this.settings.whitelist.includes(t)}},{key:"hasWildcardOnWhitelist",value:function(){var t=!1,e=this.settings.wildcardSymbol;return this.settings.whitelist.forEach((function(n){n.includes(e)&&!t&&(t=!0)})),t}},{key:"buildWildcardRegexp",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=new RegExp("\\".concat(this.settings.wildcardSymbol),"g");return new RegExp(t.replace(e,".*"),"g")}},{key:"onBlacklistMatch",value:function(t,e,n,i){var o=this,r=!1,a=this.cleanUpPath(t.url);this.settings.blacklist.forEach((function(s){!a.includes(s)||o.isOnWhitelist(a)||r||(n&&n.preventDefault(),r=!0,"function"==typeof e&&e(t,i))}))}},{key:"observeTriggers",value:function(){var t=this;this.prepareModal();var e=this.settings.triggersSelector;this.settings.enableOnLogonLinks||(e+=this.settings.notLogonLinksSelector),this.$(document).on("click",e,(function(e){var n,i=t.$(e.target);if(!(t.modal.isAuthorizedOnly()&&!t.modal.isLoggedIn()||t.modal.isAnonymousOnly()&&t.modal.isLoggedIn())){i.attr("href")||i.data("href")||(i=i.parents("[href]")).length||(i=i.parents("[data-href]"));var o=i.attr("href")||i.data("href");n="_blank"===i.attr("target")||"_blank"===i.data("target");var r=i.attr("rel");t.directTrigger({url:o,isBlank:n,rel:r},t.modal.open.bind(t.modal),e,i)}}))}},{key:"onLoad",value:function(){this.directTrigger({url:this.fetchPageUrl()},this.prepareModal.bind(this))}},{key:"fetchPageUrl",value:function(){return this.$('link[rel="canonical"]').attr("href")||this.$('meta[property="og:url"]').attr("content")}},{key:"directTrigger",value:function(t,e,n,i){t&&t.url&&(this.hasWhitelist()&&!this.hasBlacklist()&&this.onWhitelistMatch(t,e,n),this.hasBlacklist()&&this.onBlacklistMatch(t,e,n,i))}},{key:"chooseTrigger",value:function(){this.settings.triggerOn&&(this.isClickTrigger()?this.observeTriggers():this.isOnLoadTrigger()&&this.onLoad())}},{key:"isOnLoadTrigger",value:function(){return"load"===this.settings.triggerOn}},{key:"isClickTrigger",value:function(){return"click"===this.settings.triggerOn}},{key:"cleanUpPath",value:function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split("#")[0].split("?")[0]}}],n&&st(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function ut(t){return ut="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ut(t)}function ct(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==ut(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==ut(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===ut(o)?o:String(o)),i)}var o}var ht=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.setUpModalsConfiguration(),this.createModalsFromModalsConfiguration()}var e,n;return e=t,(n=[{key:"setUpModalsConfiguration",value:function(){this.modalsConfiguration=window.modalsConfiguration||{}}},{key:"createModalsFromModalsConfiguration",value:function(){var t=this;this.modals={},this.modalsConfiguration.modals&&Object.keys(this.modalsConfiguration.modals).forEach((function(e){t.modals[e]=new lt(t.modalsConfiguration.modals[e])}))}}])&&ct(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();HSBC_utils.isEditMode()||HSBC_utils.registerComponent({name:"modal-trigger",selector:".modal-setup",init:function(t){return new ht(t)}})},7948:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,n){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(r)?r:String(r)),o)}var r}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}var i,o=jQuery;i=n((function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),setTimeout((function(){var t=window.location.hash;if(t){var e=n.globalComponents.hashParser.parseHashFromLocationHash(t).anchorString;n.globalComponents.scrollService.scroll(e)}n.globalComponents.anchorScrollController.smoothScrollEnabled=!0}),100)})),o(window).on("load",(function(){return HSBC_utils.registerComponent({name:"XOnLoadScroll",selector:"body > div:first-of-type",init:function(t,e){return new i(t,e)}})}))},3607:(t,e,n)=>{"use strict";var i,o,r,a,s,l=n(6429);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==u(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===u(o)?o:String(o)),i)}var o}i=Bootstrap.jQuery,o=".expander",r=".dropdown",a=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.APP=n,this.$el=i(e),this.$dropdown=this.$el.find(r),this.dropdownBorder=this.$dropdown.css("border"),this.bindUiEvents(),this.tealiumObserver=new l.n(this.$dropdown,{event_type:"click",event_category:"content",event_action:"accordion",event_content:function(t){return i(t).parents(".A-EXPCNT-RW-RBWM").siblings(".anchor").attr("id")}})}var e,n,a;return e=t,a=[{key:"collapseExpander",value:function(t){t.find(r).attr("aria-expanded","false"),HSBC_utils.isMobileAndroid&&t.find(".exp-content").attr("aria-hidden","true")}}],(n=[{key:"bindUiEvents",value:function(){var t=this;this.$dropdown.on("click",(function(e){return t.collapseOtherExpanders(e)})).on("keydown",(function(e){e.keyCode!==HSBC_utils.keyCodes.ENTER&&e.keyCode!==HSBC_utils.keyCodes.SPACE||t.collapseOtherExpanders(e)}))}},{key:"collapseOtherExpanders",value:function(e){var n=i(e.target).closest(o);this.$dropdown.each((function(){var e=i(this).closest(o);n.is(e)||t.collapseExpander(e)})),this.$dropdown.css("border-bottom",this.dropdownBorder)}}])&&c(e.prototype,n),a&&c(e,a),Object.defineProperty(e,"prototype",{writable:!1}),t}(),s={name:"accordion",selector:".O-ACCRD-RW-RBWM",init:function(t,e){return new a(t,e)}},i(window).on("load",(function(){return HSBC_utils.registerComponent(s)}))},3484:(t,e,n)=>{"use strict";var i,o,r,a,s=n(301),l=n(5039),u=n(5670);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function f(t,e,n){return(e=p(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,p(i.key),i)}}function p(t){var e=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==c(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===c(e)?e:String(e)}i=Bootstrap.jQuery,o={monthlyRepayment:"N/A",apr:"N/A",totalAmount:"N/A"},r={recalculate:"LoansCalculator::recalculate",reinit:"LoansCalculator::reinit"},a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$element=i(e),this.readAndPrepareConfig(),this.calculationService=new s.H,this.calculationRules=new l.B(this.config.rules),this.resultRenderer=new u.A(this.$element),this.hookUpOnCalculatorEvents()}var e,n;return e=t,n=[{key:"hookUpOnCalculatorEvents",value:function(){var t=this;i(document).on(r.recalculate,(function(e,n){t.state=n,t.calculate()})),i(document).trigger(r.reinit),this.state||this.displayResult(o)}},{key:"readAndPrepareConfig",value:function(){var t=this.$element.find(".config-holder");this.config=t.data("config"),this.addMinAmountToRules()}},{key:"calculate",value:function(){if(this.validate()){var t=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({apr:this.calculationRules.calculateApr(this.state)},this.state),e=this.calculationService.getCalculationResults(t);if(!e)return;this.displayResult(Object.assign(e,this.state,{amount:e.amount}))}else this.displayResult(Object.assign(o,{amount:(this.state.amountPrefix||"")+this.calculationService.format(this.state.amount),months:this.state.months}))}},{key:"recalculate",value:function(t){this.state[t.name]=t.value,this.calculate()}},{key:"validate",value:function(){var t=this.calculationRules.calculateAmountRange(this.state),e=this.calculationRules.calculateMonthsRange(this.state);return t.min<=this.state.amount&&this.state.amount<=t.max&&e.min<=this.state.months&&this.state.months<=e.max}},{key:"displayResult",value:function(t){this.resultRenderer.render(t)}},{key:"addMinAmountToRules",value:function(){for(var t=this.config.rules.length,e=0;e<t;++e)i.extend(this.config.rules[e],{minAmount:0===e?this.config.minAmount:this.config.rules[e-1].maxAmount+1})}}],n&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),HSBC_utils.registerComponent({name:"productDynamicRates",selector:".M-PRDDNRTS-RW-DEV",init:function(t){return new a(t)}})},5670:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{A:()=>s});var r="resultTemplate",a=Bootstrap.jQuery,s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$scope=e,this.$result=a(".result",e),a.Mustache.add(this.getMustacheName(r),a(".result-template",e).html())}var e,n;return e=t,(n=[{key:"render",value:function(t){this.empty(),this.$result.mustache(this.getMustacheName(r),t)}},{key:"empty",value:function(){this.$result.empty()}},{key:"getMustacheName",value:function(t){return"".concat(t,"_").concat(this.$scope.uniqueId().attr("id"))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},9984:(t,e,n)=>{"use strict";n.d(e,{n:()=>l});var i=n(5311),o=n.n(i),r=n(6429);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==a(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===a(o)?o:String(o)),i)}var o}var l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$backToTopLink=o()(e),this.observeTrigger()}var e,n;return e=t,(n=[{key:"observeTrigger",value:function(){this.tealiumObserver=new r.n(this.$backToTopLink,{event_type:"click",event_action:"button",tealium_event:"link",event_category:"content",event_content:"back to top",raw_datalayer:"3684v6"})}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},7157:(t,e,n)=>{"use strict";var i=n(7718),o=n(9984);HSBC_utils.isEditMode()||HSBC_utils.registerComponent({name:"BackToTop",selector:".M-ARTICLEBACKTOTOP-ART-DEV .A-TYPS5R-RW-DEV",init:function(t){this.backToTop=new i.z(t,{useTabindexZero:!1}),this.articleBackToTopTealium=new o.n(t)}})},3827:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}var r=Bootstrap.jQuery,a="not-active",s="separator-line",l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=r(e),this.$findNextStep=this.$el.find(".next-steps"),this.$findSocialShare=this.$el.find(".social-share"),this.addClassActive(),this.addClassSeparatorLine()}var e,n;return e=t,(n=[{key:"addClassActive",value:function(){0===this.$el.children().length?this.$el.addClass(a):this.$el.removeClass(a)}},{key:"addClassSeparatorLine",value:function(){this.$findNextStep.length>0?this.$findSocialShare.addClass(s):this.$findSocialShare.removeClass(s)}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),u=n(6429);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function f(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==c(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===c(o)?o:String(o)),i)}var o}var d=Bootstrap.jQuery,p=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=d(e),this.$links=this.$el.find("a[href]"),this.facebook(),this.twitter(),this.pinterest(),this.linkedin(),this.tealiumObserver=new u.n(this.$links,{event_type:"click",event_category:"share",event_action:function(t){return d(t).parent().find(".visuallyhidden").text()}})}var e,n;return e=t,(n=[{key:"facebook",value:function(){var t=this;this.processSocialLink("facebook",(function(){return{"{{url}}":t.fetchUrl()}}))}},{key:"twitter",value:function(){var t=this;this.processSocialLink("twitter",(function(){return{"{{url}}":t.fetchUrl(),"{{pagetitle}}":t.fetchPageTitle()}}))}},{key:"pinterest",value:function(){var t=this;this.processSocialLink("pinterest",(function(){return{"{{imageurl}}":t.fetchContentImageUrl(),"{{imagename}}":t.fetchPageTitle(),"{{imagedescription}}":t.fetchPageSummary()}}))}},{key:"linkedin",value:function(){var t=this;this.processSocialLink("linkedin",(function(){return{"{{url}}":t.fetchUrl()}}))}},{key:"fetchUrl",value:function(){return d('[property="og:url"]').attr("content")||document.location.href}},{key:"fetchContentImageUrl",value:function(){return d('[property="og:image"]').attr("content")}},{key:"fetchPageTitle",value:function(){return d('[property="og:title"]').attr("content")||d("title").text()}},{key:"fetchPageSummary",value:function(){return d('[property="og:description"]').attr("content")||d('[name="description"]').attr("content")}},{key:"processSocialLink",value:function(t,e){var n=this.$el.find(".trigger-"+t);if(n.length){var i=n.data("href-template"),o=e();Object.entries(o).forEach((function(t){var e,n,o=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,o,r,a,s=[],l=!0,u=!1;try{if(r=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(i=r.call(n)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return s}}(e,n)||function(t,e){if(t){if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],a=o[1];i=i.replace(r,a?encodeURIComponent(a):"")})),n.attr("href",i)}}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();HSBC_utils.isEditMode()||(HSBC_utils.registerComponent({name:"O-ARTICLEBOOKEND-ART-DEV",selector:".O-ARTICLEBOOKEND-ART-DEV",init:function(t){return new l(t)}}),HSBC_utils.registerComponent({name:"social-share",selector:".social-share",init:function(t){return new p(t)}}))},888:()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,n){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(r)?r:String(r)),o)}var r}var n=Bootstrap.jQuery,i="active",o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=n(e),this.$imgWrapper=this.$el.find(".img-wrapper").find(".noImage"),this.$articleTitle=this.$el.find(".title-wrapper"),this.$gridWrapper=n(".intro-title"),this.addClassActive()}var o,r;return o=t,(r=[{key:"addClassActive",value:function(){this.$imgWrapper.length>0?(this.$articleTitle.addClass(i),this.$gridWrapper.addClass(i)):(this.$articleTitle.removeClass(i),this.$gridWrapper.removeClass(i))}}])&&e(o.prototype,r),Object.defineProperty(o,"prototype",{writable:!1}),t}();HSBC_utils.isEditMode()||HSBC_utils.registerComponent({name:"O-ARTICLETITLE-RW-ALL",selector:".O-ARTICLETITLE-RW-ALL",init:function(t){return new o(t)}})},6875:(t,e,n)=>{"use strict";var i=n(7718),o=n(6090);HSBC_utils.isEditMode()||HSBC_utils.registerComponent({name:"BackToTop",selector:".M-DEFBACKTOTOP-RW-RBWM .A-LNKAU-RW-ALL",init:function(t){this.backToTop=new i.z(t),this.backToTopTealium=new o.W(t)}})},7718:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{z:()=>l});var r=Bootstrap.jQuery,a="active",s=r(document),l=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$backToTopLink=r(e),this.options={useTabindexZero:!0},this.settings=r.extend({},this.options,n),this.$topOfContent=s.find(".".concat("top-of-content")),this.$articleBackToTop=s.find(".".concat("M-ARTICLEBACKTOTOP-ART-DEV")),this.bindUiEvents(),this.settings.useTabindexZero&&this.articleBackToTopTabindex()}var e,n;return e=t,(n=[{key:"bindUiEvents",value:function(){var t=this;this.$backToTopLink.on("click",(function(e){e.preventDefault(),r("html, body").animate({scrollTop:0},"slow",(function(){t.$topOfContent.addClass(a).attr({tabindex:0,"aria-hidden":"false"}).focus()}))})),s.bind("focusin click swipe",(function(e){t.hideSpanWhenLosesFocus(e)}))}},{key:"hideSpanWhenLosesFocus",value:function(t){var e=t.target;this.$topOfContent.hasClass(a)&&(this.$topOfContent.is(e)||this.$topOfContent.removeClass(a).attr({tabindex:-1,"aria-hidden":"true"}))}},{key:"articleBackToTopTabindex",value:function(){this.$articleBackToTop&&this.$backToTopLink.attr("tabindex","0")}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},6090:(t,e,n)=>{"use strict";n.d(e,{W:()=>l});var i=n(5311),o=n.n(i),r=n(6429);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==a(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===a(o)?o:String(o)),i)}var o}var l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$backToTopLink=o()(e),this.observeTrigger()}var e,n;return e=t,(n=[{key:"observeTrigger",value:function(){this.tealiumObserver=new r.n(this.$backToTopLink,{event_type:"click",event_category:"content",event_action:"onsite",event_content:"back to top"})}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},1870:(t,e,n)=>{"use strict";var i=n(7718),o=n(6090);HSBC_utils.isEditMode()||HSBC_utils.registerComponent({name:"BackToTop",selector:".M-BACKTOTOP-RW-RBWM .A-LNKAU-RW-ALL",init:function(t){this.backToTop=new i.z(t),this.backToTopTealium=new o.W(t)}})},670:(t,e,n)=>{"use strict";n.d(e,{W:()=>l});var i=n(5111),o=n(6429);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===r(o)?o:String(o)),i)}var o}var s=jQuery,l=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$=s||Bootstrap.jQuery,this.wrapper=e,this.options={accountId:"6178286542001",playerSelector:".brc-player",dataAccountSelector:"[data-account]",dataAccountKey:"account",titleSelector:".title .A-TYP28L-RW-ALL"},this.settings=this.$.extend({},this.options,n),this.playerElement=this.$(this.wrapper).find(this.settings.playerSelector).get(0),this.fetchAccountId(),this.loadVideoJs()}var e,n,r;return e=t,r=[{key:"composeTimeData",value:function(t){return"seconds:".concat(Math.round(t.currentTime()),"|interval:").concat(Math.round(t.currentTime()/t.duration()*100))}}],(n=[{key:"fetchAccountId",value:function(){var t=this.$(this.wrapper).find(this.settings.dataAccountSelector).data(this.settings.dataAccountKey);this.settings.accountId=t||this.settings.accountId}},{key:"isLibLoaded",value:function(){return void 0!==window.videojs}},{key:"loadVideoJs",value:function(){var t=this;this.video=new i.n(this.wrapper,this.settings),this.isLibLoaded()?this.observeVideo():this.video.loadVideoJs((function(){t.observeVideo()}))}},{key:"observeVideo",value:function(){var e=this;videojs(this.playerElement).ready((function(){e.player=videojs(e.playerElement),e.tealiumObserverPlay=new o.n(e.player,{event_type:"play",event_action:"play",tealium_event:"link",event_category:"video",event_subcategory:"",event_content:function(){return e.$(e.wrapper).find(e.settings.titleSelector).text().toLowerCase()},raw_datalayer:"3684v1"},{nativeObserver:!0}),e.tealiumObserverPause=new o.n(e.player,{event_type:"pause",event_action:"stop",tealium_event:"link",event_category:"video",event_subcategory:function(){return t.composeTimeData(e.player)},event_content:function(){return e.$(e.wrapper).find(e.settings.titleSelector).text().toLowerCase()},raw_datalayer:"3684v2"},{nativeObserver:!0}),e.tealiumObserverResize=new o.n(e.player,{event_type:"playerresize",event_action:"size",tealium_event:"link",event_category:"video",event_subcategory:function(){return e.player.isFullscreen()?"fullscreen":"inpage"},event_content:function(){return e.$(e.wrapper).find(e.settings.titleSelector).text().toLowerCase()},raw_datalayer:"3684v3"},{nativeObserver:!0}),e.tealiumObserverEnded=new o.n(e.player,{event_type:"ended",event_action:"action",tealium_event:"link",event_category:"video",event_subcategory:"ended",event_content:function(){return e.$(e.wrapper).find(e.settings.titleSelector).text().toLowerCase()},raw_datalayer:"3684v4"},{nativeObserver:!0}),e.tealiumObserverSeeking=new o.n(e.player,{event_type:"enterpictureinpicture",event_action:"action",tealium_event:"link",event_category:"video",event_subcategory:"picture-in-picture",event_content:function(){return e.$(e.wrapper).find(e.settings.titleSelector).text().toLowerCase()},raw_datalayer:"5042v1"},{nativeObserver:!0})}))}}])&&a(e.prototype,n),r&&a(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}()},6397:(t,e,n)=>{"use strict";var i=n(670);HSBC_utils.registerComponent({name:"brightcoveVideo",selector:".brightcoveVideo",init:function(t){return new i.W(t)}})},9789:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,n){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(r)?r:String(r)),o)}var r}var n,i,o,r;n=Bootstrap.jQuery,i=/\{\{currentDate\}\}/g,o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=n(e),this.moment=moment,this.setUpCurrentDate(),this.fillCurrentDate(),this.setQuotes()}var o,r;return o=t,(r=[{key:"setQuotes",value:function(){this.$el.find(".quote").each((function(){var t=n(this),e=t.html(),i=n("<q></q>");i.html(e).addClass("quote"),t.replaceWith(i)}))}},{key:"setUpCurrentDate",value:function(){var t=this.$el.find("[data-date-format]").data("date-format"),e=this.$el.find("[data-zone]").data("zone");this.currentDate=this.moment.tz(e).format(t)}},{key:"fillCurrentDate",value:function(){var t=this.currentDate;this.$el.each((function(){var e=this.firstChild.innerHTML;void 0!==e&&(this.firstChild.innerHTML=e.replace(i,t))}))}}])&&e(o.prototype,r),Object.defineProperty(o,"prototype",{writable:!1}),t}(),r={name:"richText",selector:".rich-text, .M-RICHTEXT-ART-DEV",init:function(t){return new o(t)}},HSBC_utils.registerComponent(r)},6172:(t,e,n)=>{"use strict";var i,o,r,a,s,l,u,c=n(4792);function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function f(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==h(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===h(o)?o:String(o)),i)}var o}i=Bootstrap.jQuery,o={tableWrapper:".table-wrapper",adaptableTable:".adaptable-table",caption:"caption"},r="adaptable-table",a="adaptable-table-placeholder",s=i(".tab-widget-tab-content").not(".hidden").width(),l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),HSBC_utils.isEditMode()||(this.$el=i(e),this.bindUIEvents(),this.bindElements(),this.parseMarkup(),this.adjustTableSize(),this.tablesAllyObj=new c.T(this))}var e,n;return e=t,(n=[{key:"bindUIEvents",value:function(){var t=this;i(window).on("resize",(function(){t.adjustTableSize()})),this.$el.on("table:rendered",(function(){t.bindElements(),t.generateCaption(),t.adjustTableSize()}))}},{key:"bindElements",value:function(){this.$tableWrapper=this.$el.find(o.tableWrapper).last(),this.$table=this.$tableWrapper.find("table").last(),this.$cells=this.$table.find("th, td"),this.$stickyColumn=this.$table.find("tr > td:first-child, tr > th:first-child"),this.columnsCount=this.$table.find("tr:first-child > th, tr:first-child > td").length,this.$caption=this.$table.find(o.caption),this.$adaptableTable=this.$el.find(o.adaptableTable),0===this.$adaptableTable.length&&(this.$adaptableTable=this.$el.find(o.adaptableTablePlaceholder))}},{key:"parseMarkup",value:function(){this.$table.removeAttr("height width border cellpadding cellspacing"),this.$cells.removeAttr("height width border cellpadding cellspacing")}},{key:"resetAdaptableTable",value:function(){this.$adaptableTable.length>0&&this.$adaptableTable.css({"padding-left":0}),this.$tableWrapper.css({"overflow-x":"auto"}),this.$stickyColumn.css({width:"auto",height:"auto",left:"auto",position:"static"}),this.$table.css("min-width","100%"),this.$cells.css("width","auto"),this.$adaptableTable.length>0&&(this.$adaptableTable.removeClass(r),this.$adaptableTable.addClass(a))}},{key:"applyAdaptableTable",value:function(){var t=HSBC_utils.matchMedia.mobile?100:200,e=this.$stickyColumn.first(),n=e.innerWidth()-e.width(),l=e.innerHeight()-e.height(),u=this.$table.closest(".tab-widget-tab-content").length>0?s:this.$table.width(),c=u;this.columnsCount>1&&(c=(u/(this.columnsCount-1)).toFixed(2));var h=HSBC_utils.getMatchMediaUnit();if(this.$caption){var f=2*h;this.$caption.css("top",f);var d=this.$caption.height()+2*f;this.$table.css("margin-top",d)}else{var p=2*h;this.$table.css("margin-top",p)}0===this.$adaptableTable.length?(this.$adaptableTable=i('<div class="'.concat(r,'"></div>')),this.$tableWrapper.wrap(this.$adaptableTable),this.$adaptableTable=this.$el.find(o.adaptableTable)):(this.$adaptableTable.addClass(r),this.$adaptableTable.removeClass(a)),this.$stickyColumn.each((function(e,n){var o=i(n);t=!HSBC_utils.matchMedia.mobile&&o.width()>t?o.width():100})),this.$cells.width(c);var m=t-10+n;this.$adaptableTable.css({paddingLeft:m}),this.$tableWrapper.css({"overflow-x":"scroll"}),this.$stickyColumn.css({width:t,left:0,position:"absolute"}),this.$stickyColumn.each((function(t,e){var n=i(e),o=n.parent("tr"),r=(o.height()>n.innerHeight()?o.height():n.innerHeight())-l;o.find("td,th").css({height:r})}))}},{key:"adjustTableSize",value:function(){this.bindElements(),this.resetAdaptableTable(),this.$el.width()<this.$table.width()&&this.applyAdaptableTable(),this.$table.closest(".hidden").length>0&&!HSBC_utils.matchMedia.mobile&&(this.$table.css("width",s),this.$el.css("width",s)),this.$el.css("width","auto"),this.$table.css("width","auto")}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),u={name:"smptbl",selector:".M-SMPTBL-RW-RBWM",init:function(t){return new l(t)}},HSBC_utils.registerComponent(u)},8943:(t,e,n)=>{"use strict";var i=n(6616);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===o(r)?r:String(r)),i)}var r}var a=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$=Bootstrap.jQuery,this.options={titleLinkSelector:".item-title a.A-TYPS4L-RW-DEV",imageSelector:"img",selector:".M-CNT-ITEM-ART-DEV",focusCssClass:"has-focus",hoverCssClass:"has-hover",hasLinkCssClass:"has-link",clickableImage:!0},this.settings=this.$.extend({},this.options,n),this.descriptionParagraphs=e.querySelectorAll(".item-content-text .text-container.text p"),this.makeImagesFocusable(),this.observeImages(),this.observeLinks(),(0,i.Z)(this.descriptionParagraphs)}var e,n;return e=t,(n=[{key:"makeImagesFocusable",value:function(){var t=this,e=this.$("".concat(this.settings.selector," ").concat(this.settings.titleLinkSelector));this.settings.clickableImage&&e.each((function(e,n){t.$(n).parents(t.settings.selector).find(t.settings.imageSelector).addClass(t.settings.hasLinkCssClass)}))}},{key:"observeImages",value:function(){var t=this,e="".concat(this.settings.selector," ").concat(this.settings.imageSelector);this.settings.clickableImage&&this.$(document).on("click",e,(function(e){t.clickLink(e.target)})).on("focus",e,(function(e){t.markAsFocused(e.target)})).on("blur",e,(function(e){t.unmarkAsFocused(e.target),t.unmarkAsHovered(e.target)})).on("hover",e,(function(e){t.markAsHovered(e.target)}))}},{key:"observeLinks",value:function(){var t=this,e="".concat(this.settings.selector," ").concat(this.settings.titleLinkSelector);this.$(document).on("focus",e,(function(e){t.markAsFocused(e.target)})).on("blur",e,(function(e){t.unmarkAsFocused(e.target),t.unmarkAsHovered(e.target)})).on("hover",e,(function(e){t.markAsHovered(e.target)}))}},{key:"clickLink",value:function(t){var e=this.$(t).parents(this.settings.selector).find(this.settings.titleLinkSelector).get(0);e&&e.click()}},{key:"markAsFocused",value:function(t,e){var n=this.$(t).parents(this.settings.selector),i=n.find(this.settings.imageSelector),o=n.find(this.settings.titleLinkSelector);e?(this.settings.clickableImage&&i.removeClass(this.settings.focusCssClass),o.removeClass(this.settings.focusCssClass)):(this.settings.clickableImage&&i.addClass(this.settings.focusCssClass),o.addClass(this.settings.focusCssClass))}},{key:"markAsHovered",value:function(t,e){var n=this.$(t).parents(this.settings.selector),i=n.find(this.settings.imageSelector),o=n.find(this.settings.titleLinkSelector);e?(this.settings.clickableImage&&i.removeClass(this.settings.hoverCssClass),o.removeClass(this.settings.hoverCssClass)):(this.settings.clickableImage&&i.addClass(this.settings.hoverCssClass),o.addClass(this.settings.hoverCssClass))}},{key:"unmarkAsFocused",value:function(t){this.markAsFocused(t,"blur")}},{key:"unmarkAsHovered",value:function(t){this.markAsHovered(t,"blur")}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();HSBC_utils.isEditMode()||HSBC_utils.registerComponent({name:"M-CNT-ITEM-ART-DEV",selector:".M-CNT-ITEM-ART-DEV",init:function(t){return new a(t,{clickableImage:!1})}})},4748:(t,e,n)=>{"use strict";var i=n(6616);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===o(r)?r:String(r)),i)}var r}var a=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$=Bootstrap.jQuery,this.options={moduleSelector:".M-CNT-ART-DEV",wrapperSelector:".container-content",itemSelector:".M-CNT-ITEM-ART-DEV, .M-HERO-ART-DEV",containerItemSelector:".M-CNT-ITEM-ART-DEV",imgSmallXsSelector:".item-layout__oposite-img-small",spacingCssClass:"f-spacing"},this.$el=this.$(e),this.settings=this.$.extend({},this.options,n),this.descriptionParagraphs=e.querySelectorAll(".description.text-container.text p"),this.updateRoles(),this.updateSpacings(),(0,i.Z)(this.descriptionParagraphs)}var e,n;return e=t,(n=[{key:"updateRoles",value:function(){var t,e,n=this.$el.parent(),i=n.find(this.settings.itemSelector);t=n,(e=i).length>1?(e.attr("role","listitem"),t.attr("role","list")):(e.removeAttr("role"),t.removeAttr("role"))}},{key:"updateSpacings",value:function(){this.$containerItemChild=this.$el.find(this.settings.containerItemSelector),this.$imgXS=this.$containerItemChild.find(this.settings.imgSmallXsSelector),this.$imgXS.length?this.$el.addClass(this.settings.spacingCssClass):this.$el.removeClass(this.settings.spacingCssClass)}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),s=n(5311),l=n.n(s),u=n(7967),c=n(6429);function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function d(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==h(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===h(o)?o:String(o)),i)}var o}var p=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$=l()||Bootstrap.jQuery,this.options={containerSelector:".M-CNT-ART-DEV",buttonSelector:'.M-CNT-ART-DEV .button-wrapper[data-show-more-enabled*="true"] a',startSelector:".M-CNT-ART-DEV .container-title-wrapper",buttonsWrapperSelector:".button-wrapper",containerContentSelector:".container-content",hiddenSetSelector:"[data-container-hidden-set]",dataContainerHiddenSetKey:"container-hidden-set",dataEnabledKey:"show-more-enabled",dataContainersSetSize:"show-more-containers-set-size",dataEndSetMessage:"end-set-message",containersSetSize:3,rootPath:"/_jcr_content/par-main-content",articleRootPath:"/_jcr_content/par-additional-content",setAemSelector:"set",containerCurtainCssClass:"container-curtain",showMoreSetEndMessageCssClass:"show-more-set-end-message A-TYPS5R-RW-DEV A-DIVHL-RW-ALL",endSetMessage:"No more articles",articlePageCssClass:"articlePage",bottomSpacingCssClass:"A-DIVHLFOO-RW-DEV",loadedSetSelector:".loaded-set"},this.settings=this.$.extend({},this.options,n),this.setUpConfigButtonContainer(e),this.isEnabled(e)&&(this.updateSetSize(),this.updateEndSetMessage(),this.observeButton(),this.setOffset(),this.setEndState(),this.cleanUpEmpty())}var e,n;return e=t,n=[{key:"setUpConfigButtonContainer",value:function(t){this.$configButtonWrapper=this.$(t).parents(this.settings.buttonsWrapperSelector)}},{key:"isArticlePage",value:function(){return this.$(document.body).hasClass(this.settings.articlePageCssClass)}},{key:"isEnabled",value:function(){return!!this.$configButtonWrapper.data(this.settings.dataEnabledKey)}},{key:"updateSetSize",value:function(){this.settings.containersSetSize=this.$configButtonWrapper.data(this.settings.dataContainersSetSize)||this.settings.containersSetSize}},{key:"updateEndSetMessage",value:function(){this.settings.endSetMessage=this.$configButtonWrapper.data(this.settings.dataEndSetMessage)||this.settings.endSetMessage}},{key:"cleanUpEmpty",value:function(t){var e=this,n=t||document.body;this.$(n).find(this.settings.containerSelector).each((function(t,n){var i=e.$(n);i.find("div").length||i.remove()}))}},{key:"populate",value:function(t){this.cleanUpEmpty(t),this.$containersCollection=t.find(this.settings.containerSelector)}},{key:"setUpCurrentButton",value:function(t){this.$currentButton=this.$(t)}},{key:"getCurrentButton",value:function(){return this.$(this.$currentButton)}},{key:"observeButton",value:function(){var t=this;this.$(document).on("click",this.settings.buttonSelector,(function(e){e.preventDefault(),t.setUpCurrentButton(e.target),t.load()})),this.tealium(this.$(this.settings.buttonSelector).get(0))}},{key:"load",value:function(){var t=this,e=this.$('<div class="container-set-proxy hidden"></div>');if(this.isLoaded())return this.out(),this.moveButton(),this.showEndSetMessage(),void this.moveBottomSpacing();this.curtain(),e.load("".concat(this.fetchUrl()),(function(){t.populate(e),t.setCurrentControllContainer(),t.out(),t.moveButton(),t.showEndSetMessage(),t.moveBottomSpacing(),t.setLoaded(),t.curtain("hide")})),this.defer((function(){t.curtain("hide")}),5e3)}},{key:"out",value:function(){var t,e=this.$container,n=this.$containersCollection.length,i=this.offset+this.settings.containersSetSize>n?n:this.offset+this.settings.containersSetSize;for(this.$prevContainer=e,t=this.offset;t<i;t+=1){var o=this.$containersCollection.get(t);e.after(o),e=this.$(o)}this.focusOnFirstFocusableOrContainer(),this.setEndState(t===n),this.setCurrentControllContainer(e),this.setOffset(t)}},{key:"focusOnFirstFocusableOrContainer",value:function(){var t=this.$containersCollection.get(this.offset);if(t){var e=this.$(t).find("a").get(0);e?e.focus():(this.$(t).attr("tabindex",0),(t=this.$(t).get(0))&&t.focus())}}},{key:"setCurrentControllContainer",value:function(t){this.$container=t||this.fetchContainerComponent()}},{key:"setOffset",value:function(t){this.offset=t||0}},{key:"setLoaded",value:function(){this.loaded=!0}},{key:"setEndState",value:function(t){this.endState=!!t}},{key:"isSetEnd",value:function(){return this.endState}},{key:"isLoaded",value:function(){return!!this.loaded}},{key:"moveButton",value:function(){var t=this,e=this.fetchButtonsComponent();e=e.remove(),this.isSetEnd()||this.defer((function(){t.$container.find(t.settings.containerContentSelector).after(e),t.tealium(e.get(0))}))}},{key:"showEndSetMessage",value:function(){var t=this;this.isSetEnd()&&this.defer((function(){t.$container.find(t.settings.containerContentSelector).after('<p class="'.concat(t.settings.showMoreSetEndMessageCssClass,'">').concat(t.settings.endSetMessage,"</p>"))}))}},{key:"fetchUrl",value:function(){var t,e,n="".concat(this.isArticlePage()?this.settings.articleRootPath:this.settings.rootPath,".").concat(this.settings.setAemSelector,".html"),i=(t=(0,u.N)(document.location.pathname).split(".html"),e=1,function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,o,r,a,s=[],l=!0,u=!1;try{if(r=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(i=r.call(n)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return s}}(t,e)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];return"".concat(i).concat(n).concat(document.location.port?"?wcmmode=disabled":"")}},{key:"fetchContainerComponent",value:function(){return this.getCurrentButton().parents(this.settings.containerSelector)}},{key:"fetchButtonsComponent",value:function(){return this.getCurrentButton().parents(this.settings.buttonsWrapperSelector)}},{key:"curtain",value:function(t){var e=this.fetchContainerComponent(),n=(e=e.length?e:this.$container).parent().find(".".concat(this.settings.containerCurtainCssClass));n.length||t||(n=this.$('<div class="'.concat(this.settings.containerCurtainCssClass,'"></div>')),e.parent().append(n)),t?n.hide():n.show()}},{key:"defer",value:function(){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return setTimeout((arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){}).bind(this),t)}},{key:"moveBottomSpacing",value:function(){var t=this;if(this.$prevContainer&&this.$prevContainer.length){var e=this.$(this.$prevContainer).find(".".concat(this.settings.bottomSpacingCssClass));e.length&&this.defer((function(){t.$container.find(t.settings.loadedSetSelector).after(e.remove())}))}}},{key:"tealium",value:function(t){this.tealiumObserver=new c.n(t,{event_type:"click",event_action:"button",tealium_event:"link",event_category:"content",event_content:"view more",raw_datalayer:"3684v5"})}}],n&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();HSBC_utils.isEditMode()||(HSBC_utils.registerComponent({name:"M-CNT-ART-DEV",selector:".M-CNT-ART-DEV:not(.M-PAG-ART-DEV)",init:function(t){return new a(t)}}),HSBC_utils.registerComponent({name:"container-more",selector:".M-CNT-ART-DEV .button-wrapper a",init:function(t){return new p(t)}}))},1400:(t,e,n)=>{"use strict";var i=n(5311),o=n.n(i),r=n(6616);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==a(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===a(o)?o:String(o)),i)}var o}var l=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$=o()||Bootstrap.jQuery,this.options={titleLinkSelector:".hero-content a.A-TYPS2L-RW-DEV",imageSelector:"img",selector:".M-HERO-ART-DEV",focusCssClass:"has-focus",hoverCssClass:"has-hover",hasLinkCssClass:"has-link"},this.heroParagraphs=e.querySelectorAll(".hero-content .text-container p"),this.settings=this.$.extend({},this.options,n),this.makeImagesFocusable(),this.observeImages(),this.observeLinks(),(0,r.Z)(this.heroParagraphs)}var e,n;return e=t,(n=[{key:"makeImagesFocusable",value:function(){var t=this;this.$("".concat(this.settings.selector," ").concat(this.settings.titleLinkSelector)).each((function(e,n){t.$(n).parents(t.settings.selector).find(t.settings.imageSelector).addClass(t.settings.hasLinkCssClass)}))}},{key:"observeImages",value:function(){var t=this;this.$(document).on("click","".concat(this.settings.selector," ").concat(this.settings.imageSelector),(function(e){t.clickLink(e.target)})).on("focus","".concat(this.settings.selector," ").concat(this.settings.imageSelector),(function(e){t.markAsFocused(e.target)})).on("blur","".concat(this.settings.selector," ").concat(this.settings.imageSelector),(function(e){t.unmarkAsFocused(e.target),t.unmarkAsHovered(e.target)})).on("hover","".concat(this.settings.selector," ").concat(this.settings.imageSelector),(function(e){t.markAsHovered(e.target)}))}},{key:"observeLinks",value:function(){var t=this;this.$(document).on("focus","".concat(this.settings.selector," ").concat(this.settings.titleLinkSelector),(function(e){t.markAsFocused(e.target)})).on("blur","".concat(this.settings.selector," ").concat(this.settings.titleLinkSelector),(function(e){t.unmarkAsFocused(e.target),t.unmarkAsHovered(e.target)})).on("hover","".concat(this.settings.selector," ").concat(this.settings.titleLinkSelector),(function(e){t.markAsHovered(e.target)}))}},{key:"clickLink",value:function(t){var e=this.$(t).parents(this.settings.selector).find(this.settings.titleLinkSelector).get(0);e&&e.click()}},{key:"markAsFocused",value:function(t,e){var n=this.$(t).parents(this.settings.selector),i=n.find(this.settings.imageSelector),o=n.find(this.settings.titleLinkSelector);e?(i.removeClass(this.settings.focusCssClass),o.removeClass(this.settings.focusCssClass)):(i.addClass(this.settings.focusCssClass),o.addClass(this.settings.focusCssClass))}},{key:"markAsHovered",value:function(t,e){var n=this.$(t).parents(this.settings.selector),i=n.find(this.settings.imageSelector),o=n.find(this.settings.titleLinkSelector);e?(i.removeClass(this.settings.hoverCssClass),o.removeClass(this.settings.hoverCssClass)):(i.addClass(this.settings.hoverCssClass),o.addClass(this.settings.hoverCssClass))}},{key:"unmarkAsFocused",value:function(t){this.markAsFocused(t,"blur")}},{key:"unmarkAsHovered",value:function(t){this.markAsHovered(t,"blur")}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();HSBC_utils.isEditMode()||HSBC_utils.registerComponent({name:"M-HERO-ART-DEV",selector:".M-HERO-ART-DEV",init:function(t){return new l(t)}})},8573:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,n){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(r)?r:String(r)),o)}var r}var n=Bootstrap.jQuery,i="hidden",o={path:"/",expires:{months:6}},r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$submitButton=n(e),this.$cookieBanner=n("#cookie-banner"),this.$bannerDismissOpt=n(".cookie-banner-optout"),this.$form=this.$submitButton.closest("form"),this.$radios=n("input:radio",this.$form),this.bindUIEvents()}var r,a;return r=t,(a=[{key:"bindUIEvents",value:function(){var t=this;this.$form.on("submit",(function(e){t.clicked(),e.preventDefault()}))}},{key:"clicked",value:function(){var t;this.$cookieBanner.hasClass(i)||this.$cookieBanner.addClass(i),this.$bannerDismissOpt.hasClass(i)||this.$bannerDismissOpt.addClass(i),this.$radios&&(t=this.$radios.filter(":checked")).length&&HSBC_utils.setCookie(t.attr("name"),t.val(),o);var e=(new Date).getTime();HSBC_utils.setCookie("cookie_banner_dismiss",e,o)}}])&&e(r.prototype,a),Object.defineProperty(r,"prototype",{writable:!1}),t}();HSBC_utils.registerComponent({name:"CookieManagementSubmitButton",selector:"#cmSubmitButton",init:function(t){return new r(t)}})},846:(t,e,n)=>{"use strict";var i=n(6616);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===o(r)?r:String(r)),i)}var r}var a="is-expanded",s="icon-new-chevron_up",l="icon-new-chevron_down",u="aria-expanded",c=Bootstrap.jQuery,h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=c(e),this.$el.addClass("hidden-desc"),this.isExpanded=!1,this.$arrowIcon=this.$el.find(".icon").first(),this.expanderLinkTitle=this.$el.find(".expanderLink-title"),this.expanderLinkTitle.attr(u,"false"),this.expanderParagraphs=e.querySelectorAll(".expander-link__content .text-container.text p"),this.bindUIEvents(),(0,i.Z)(this.expanderParagraphs)}var e,n;return e=t,(n=[{key:"toggleExpander",value:function(){this.isExpanded?this.collapse():(this.expand(),this.triggerExpandEvent())}},{key:"expand",value:function(){this.$el.addClass(a),this.expanderLinkTitle.attr(u,"true"),this.$arrowIcon.addClass(s).removeClass(l),this.isExpanded=!0}},{key:"collapse",value:function(){this.$el.removeClass(a),this.expanderLinkTitle.attr(u,"false"),this.$arrowIcon.addClass(l).removeClass(s),this.isExpanded=!1}},{key:"bindUIEvents",value:function(){var t=this;this.expanderLinkTitle.on("click",(function(){t.toggleExpander()})).on("keydown",(function(e){e.keyCode===HSBC_utils.keyCodes.ENTER&&t.toggleExpander(e)}))}},{key:"triggerExpandEvent",value:function(){c(this.expanderLinkTitle).trigger("custom:expand")}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),f=n(5311),d=n.n(f),p=n(6429);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function y(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==m(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===m(o)?o:String(o)),i)}var o}var v=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=e,this.$=d()||Bootstrap.jQuery,this.options={expanderLinkTitleSelector:".expanderLink-title",expanderLinkTitleTextElementSelector:".A-TYPS4L-RW-DEV"},this.settings=this.$.extend({},this.options,n),this.setUpTrigger(),this.observeTrigger()}var e,n;return e=t,(n=[{key:"setUpTrigger",value:function(){this.$trigger=this.$(this.el).find(this.settings.expanderLinkTitleSelector)}},{key:"observeTrigger",value:function(){var t=this;this.tealiumObserver=new p.n(this.$trigger,{event_type:"custom:expand",event_action:"accordion",tealium_event:"link",event_category:"content",event_content:function(){return t.$trigger.find(t.settings.expanderLinkTitleTextElementSelector).text().trim()},raw_datalayer:"3685v2"})}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();HSBC_utils.isEditMode()||HSBC_utils.registerComponent({name:"expander-toggle",selector:".M-CNT-EXPLIN-DEV .element",init:function(t){this.expanderLink=new h(t),this.expanderLinkTealium=new v(t)}})},2116:(t,e,n)=>{"use strict";n.d(e,{x:()=>s});var i=n(9236);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===o(r)?r:String(r)),i)}var r}var a=jQuery,s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=a(e),this.$dislikeButton=this.$el.find(".dislike-btn"),this.$likeAndFeedbackWrapper=this.$el.find(".like-and-feedback-wrapper"),this.$mainQuestionWrapper=this.$el.find(".main-question-wrapper"),this.$likeButton=this.$el.find(".like-btn"),this.$feedbackOptionsWrapper=this.$el.find(".feedback-options-wrapper"),this.$feedbackButtons=this.$el.find(".feedback-btn"),this.$confirmationMessage=this.$el.find(".confirmation-message"),this.$confirmationMessageWrapper=this.$el.find(".confirmation-message-wrapper "),this.$confirmationMessageText=this.$confirmationMessage.data("confirmation-message"),this.setUpFeedbackTracking(),this.bindUIEvents(),this.setAriaLive()}var e,n;return e=t,(n=[{key:"setUpFeedbackTracking",value:function(){this.feedbackTracking=new i.v}},{key:"bindUIEvents",value:function(){var t=this;this.$dislikeButton.on({click:function(){t.showFeedbackOptions()}}),this.$likeButton.on({click:function(){t.hideMainQuestion(),t.showConfirmationMessage()}}),this.$feedbackButtons.on({click:function(e){t.showConfirmationMessage()}}),this.feedbackTracking.trackLikeAndDislikeClick(this.$dislikeButton,"no"),this.feedbackTracking.trackLikeAndDislikeClick(this.$likeButton),this.feedbackTracking.trackFeedbackClick(this.$feedbackButtons)}},{key:"setAriaLive",value:function(){(HSBC_utils.isMobileiOS||HSBC_utils.isMobileAndroid||HSBC_utils.isSafari)&&this.$likeAndFeedbackWrapper.removeAttr("aria-live"),HSBC_utils.isSafari&&!HSBC_utils.isMobileiOS&&this.$confirmationMessage.attr("aria-live","assertive")}},{key:"showFeedbackOptions",value:function(){this.hideMainQuestion(),this.$feedbackOptionsWrapper.show(),this.$feedbackButtons.get(0).focus()}},{key:"hideMainQuestion",value:function(){this.$mainQuestionWrapper.attr("aria-hidden",!0),this.$mainQuestionWrapper.hide()}},{key:"hideFeedbackOptions",value:function(){this.$feedbackOptionsWrapper.attr("aria-hidden",!0),this.$feedbackOptionsWrapper.hide()}},{key:"showConfirmationMessage",value:function(){this.hideFeedbackOptions(),this.$confirmationMessage.text(this.$confirmationMessageText),this.$confirmationMessageWrapper.show(),this.focusConfirmationMessageOnMobile()}},{key:"focusConfirmationMessageOnMobile",value:function(){(HSBC_utils.isMobileAndroid||HSBC_utils.isMobileiOS)&&this.$confirmationMessage.attr("tabindex",-1).get(0).focus()}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},9236:(t,e,n)=>{"use strict";n.d(e,{v:()=>s});var i=n(6429);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===o(r)?r:String(r)),i)}var r}var a=jQuery,s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options={eventContentPrefix:"useful:",eventContentSufix:"|feedback-component",debug:!1},this.settings=a.extend({},this.options,e)}var e,n;return e=t,(n=[{key:"trackLikeAndDislikeClick",value:function(t,e){this.tealiumObserver=new i.n(t,{event_category:"content",event_action:"button",event_content:e?"".concat(this.settings.eventContentPrefix,"no").concat(this.settings.eventContentSufix):"".concat(this.settings.eventContentPrefix,"yes").concat(this.settings.eventContentSufix),raw_datalayer:e?"3684v9":"3684v7"}),this.log("trackLikeAndDislikeClick")}},{key:"trackFeedbackClick",value:function(t){var e=this.settings.eventContentSufix;this.tealiumObserver=new i.n(t,{event_category:"content",event_action:"button",event_content:function(t){var n=a(t).text().trim().toLowerCase();return"reason:".concat(n).concat(e)},raw_datalayer:"3684v10"}),this.log("trackFeedbackClick")}},{key:"log",value:function(t){window.console&&this.settings.debug&&console.log(t)}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},2464:(t,e,n)=>{"use strict";var i=n(2116);HSBC_utils.isEditMode()||HSBC_utils.registerComponent({name:"Feedback",selector:".M-LIKE-AND-FEEDBACK-DPWS",init:function(t){return new i.x(t)}})},6108:(t,e,n)=>{"use strict";var i=n(5540);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===o(r)?r:String(r)),i)}var r}var a="hidden",s=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),HSBC_utils.isEditMode()||(this.el=e,this.footnotesListElement=this.el.querySelector(".footnotes-list"),this.sectionContainer=this.el.closest(".accordion-section-container"),this.sectionContainer&&this.sectionContainer.classList.add(a),this.lastFootnote=0,this.footnotesList=[],this.footnotesData={},this.getFootnoteData((function(){n.refsVisuallyHidden=n.el.getAttribute("data-refs-visually-hidden"),n.backToContentLinkLabel=n.el.getAttribute("data-back-to-content-link-label"),n.footnoteRefsGenerator=new i.T(n.el,"fn-",n.pushFootnote.bind(n),n.refsVisuallyHidden,n.backToContentLinkLabel),n.rerenderFootnotes(n.defaultRefsArea()),n.observeChanges()})))}var e,n;return e=t,(n=[{key:"getFootnoteData",value:function(t){var e=this,n=this.el.getAttribute("data-footnotes-json-path");if(n){var i=new XMLHttpRequest;i.onreadystatechange=function(){i.readyState===XMLHttpRequest.DONE&&200===i.status&&(e.footnotesData=JSON.parse(i.responseText),t())},i.open("GET",n),i.send()}else t()}},{key:"defaultRefsArea",value:function(){return this.el===document.body?this.el.parentElement:document.body}},{key:"rerenderFootnotes",value:function(t){this.footnoteRefsGenerator.generateRefs(t),this.showFootnotes()}},{key:"pushFootnote",value:function(t){var e=this.footnotesData[t];if(e){var n=this.footnotesList.indexOf(t);return-1===n?(this.footnotesList.push(t),{number:this.footnotesList.length,anchor:e.anchor,name:e.name}):{number:n+1,anchor:e.anchor,name:e.name}}return{}}},{key:"showFootnotes",value:function(){for(var t=this.footnotesList.length,e=!1;this.lastFootnote<t;){var n=this.footnotesList[this.lastFootnote],i=this.footnotesData[n],o=this.createFootnoteElement(i.html,i.anchor);this.footnotesListElement.append(o),this.lastFootnote+=1,e=!0}if(e){this.sectionContainer&&this.sectionContainer.classList.remove(a);var r=new CustomEvent("footnotesRerendered");window.dispatchEvent(r)}}},{key:"createFootnoteElement",value:function(t,e){var n=document.createElement("li"),i=document.createElement("div");if(i.setAttribute("id","".concat("fn-").concat(e)),i.setAttribute("tabindex","-1"),i.innerHTML="".concat(t," "),this.backToContentLinkLabel){var o=document.createElement("a");o.setAttribute("href","#"),o.setAttribute("aria-hidden",!0),o.classList.add("footnote-back-to-content"),o.innerText=this.backToContentLinkLabel,i.append(o)}return n.append(i),n}},{key:"observeChanges",value:function(){var t=this,e=document.body,n={childList:!0,subtree:!0},i=new MutationObserver((function(o){i.disconnect(),o.forEach((function(e){var n=e.addedNodes;n&&n.length>0&&t.rerenderFootnotes(e.target)})),i.observe(e,n)}));i.observe(e,n)}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();HSBC_utils.registerComponent({name:"footnote",selector:".O-FOOTNOTES-RW-DEV",init:function(t){return new s(t)}}),HSBC_utils.registerComponent({name:"footnote-disabled",selector:".disable-footnotes",init:function(t){return new s(t)}})},5540:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{T:()=>l});var r=HSBC_utils.keyCodes,a=/\[@.+?\]/g,s="data-back-link-connected",l=function(){function t(e,n,i,o,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.footnotesComponentElement=e,this.anchorPrefix=n,this.pushFootnote=i,this.refsVisuallyHidden=o||"",this.hasBackToTopLinks=!!r,this.changedInRefsArea=!1,this.removePreviousFootnoteBackLink=function(){return!1}}var e,n;return e=t,n=[{key:"generateRefs",value:function(t){this.changedInRefsArea=!1,this.processTextNodes(t),this.changedInRefsArea&&this.bindRefLinksClicks(t)}},{key:"processTextNodes",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("SCRIPT"!==t.tagName){var i=n;i||1!==t.nodeType||t.hasAttribute("data-disable-footnotes")&&(i=!0),3===t.nodeType&&/\S/.test(t.nodeValue)?this.processFootnoteRefs(t,i):t.childNodes.forEach((function(t){return e.processTextNodes(t,i)}))}}},{key:"processFootnoteRefs",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=t.textContent,o=!1,r="";if(n?(r=i.replace(a,""),o=!0):r=i.replace(a,(function(t){var n=t.substring(2,t.length-1),i=e.createFootnoteRef(n);return""!==i?(o=!0,i):t})),o){var s=document.createRange().createContextualFragment(r);t.replaceWith(s),this.changedInRefsArea=!0}}},{key:"createFootnoteRef",value:function(t){var e=this.pushFootnote(t);return e.name?'<sup\n                        ><a href="#'.concat(this.anchorPrefix).concat(e.anchor,'"\n                            ><span aria-hidden="true"\n                                >').concat(e.number,'</span\n                            ><span class="visuallyhidden"\n                            >').concat(this.refsVisuallyHidden," ").concat(e.number,"</span\n                        ></a\n                    ></sup>"):""}},{key:"bindRefLinksClicks",value:function(t){var e=this;t.querySelectorAll('a[href^="#fn"]').forEach((function(t){t.getAttribute(s)||(t.setAttribute(s,""),t.addEventListener("click",(function(n){n.preventDefault(),e.moveFocusToFootnote(t)})),t.addEventListener("keydown",(function(n){var i=n.keyCode;i!==r.ENTER&&i!==r.SPACE||(n.preventDefault(),e.moveFocusToFootnote(t))})))}))}},{key:"moveFocusToFootnote",value:function(t){var e=t.getAttribute("href"),n=document.querySelector(e);this.hasBackToTopLinks&&(this.removePreviousFootnoteBackLink(),this.addFootnoteBackLink(n,t)),n.focus()}},{key:"addFootnoteBackLink",value:function(t,e){var n=this,i=t.querySelector(".footnote-back-to-content");i.setAttribute("aria-hidden","false"),this.moveFocusToRefLink=function(t){"click"!==t.type&&("keydown"!==t.type||t.keyCode!==r.ENTER&&t.keyCode!==r.SPACE)||(t.preventDefault(),e.focus(),n.removePreviousFootnoteBackLink())},this.removePreviousFootnoteBackLink=function(){i.setAttribute("aria-hidden","true"),i.removeEventListener("click",n.moveFocusToRefLink),i.removeEventListener("keydown",n.moveFocusToRefLink),n.removePreviousFootnoteBackLink=function(){return!1}},i.addEventListener("click",this.moveFocusToRefLink),i.addEventListener("keydown",this.moveFocusToRefLink)}}],n&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},8216:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{Z:()=>a});var r=jQuery,a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=r(e),this.$introSection=this.$el.parents(".intro-section"),this.updateIntroSection()}var e,n;return e=t,(n=[{key:"updateIntroSection",value:function(){this.$introSection.addClass("hero-remove-height"),this.$introSection.children().removeClass("sm-12")}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},6189:(t,e,n)=>{"use strict";var i=n(8216);HSBC_utils.registerComponent({name:"hero",selector:".O-HERO-RW-DEV",init:function(t){return new i.Z(t)}})},9814:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,n){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(r)?r:String(r)),o)}var r}var n=Bootstrap.jQuery,i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$homePageHero=n(e),this.$introSection=this.$homePageHero.parents(".intro-section"),this.updateIntroSection(),this.updateEmptyHeight(),this.bindUIEvents()}var i,o;return i=t,(o=[{key:"updateIntroSection",value:function(){this.$introSection.addClass("has-hero-2")}},{key:"updateEmptyHeight",value:function(){var t=this.$introSection.find(".noImage"),e=this.$introSection.find(".hero-banner-container");t.length&&t.css("min-height","".concat(e.find(".O-HEROBAN-RW-RBWM").height()+40,"px"))}},{key:"bindUIEvents",value:function(){var t=this;n(window).on("resize",(function(){t.updateEmptyHeight()}))}}])&&e(i.prototype,o),Object.defineProperty(i,"prototype",{writable:!1}),t}();HSBC_utils.registerComponent({name:"heroBanner_rev2",selector:".O-HEROBAN2-RW-DEV",init:function(t){return new i(t)}})},1049:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{Z:()=>a});var r=jQuery,a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=r(e),this.$introSection=this.$el.parents(".intro-section"),this.updateIntroSection()}var e,n;return e=t,(n=[{key:"updateIntroSection",value:function(){this.$introSection.addClass("hero-no-image")}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},6001:(t,e,n)=>{"use strict";var i=n(1049);HSBC_utils.registerComponent({name:"heronoimage",selector:".O-HEROBANNOIMG-RW-DEV",init:function(t){return new i.Z(t)}})},6333:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}var r=Bootstrap.jQuery,a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=r(e),this.$parentWrapper=this.$el.parents(".intro-section"),this.$heroBanner=this.$parentWrapper.find(".O-HEROBAN-RW-RBWM"),this.updateStructure()}var e,n;return e=t,(n=[{key:"updateStructure",value:function(){this.$parentWrapper.removeClass("row"),this.$el.unwrap(),this.$heroBanner.wrap(r('<div class="grid"></div>'))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();HSBC_utils.registerComponent({name:"heroimage",selector:".O-HEROIMG-RW-RBWM",init:function(t){return new a(t)}})},9825:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,n){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(r)?r:String(r)),o)}var r}var n,i;n=Bootstrap.jQuery,i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$homePageHero=n(e),this.$messagePage=this.$homePageHero.parents(".messagePage"),this.$messagePage.length&&this.updateMessagePage(),this.$introSection=this.$homePageHero.parents(".intro-section"),this.updateIntroSection()}var i,o;return i=t,(o=[{key:"updateMessagePage",value:function(){this.$messagePage.addClass("globalSmart"),this.$heroBannerParent=this.$homePageHero.parent(),this.$heroBannerParent.addClass("intro-section")}},{key:"updateIntroSection",value:function(){this.$introSection.addClass("has-home-page-hero")}}])&&e(i.prototype,o),Object.defineProperty(i,"prototype",{writable:!1}),t}(),HSBC_utils.registerComponent({name:"heroBanner",selector:".O-HPHERO-RW-DEV",init:function(t){return new i(t)}})},5820:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{Z:()=>a});var r=jQuery,a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=r(e),this.removePaddingFromClosestSiblings(this.$el)}var e,n;return e=t,(n=[{key:"removePaddingFromClosestSiblings",value:function(t){var e=t.prev(),n=t.next();this.removePadding(e,"padding-bottom"),this.removePadding(n,"padding-top")}},{key:"removePadding",value:function(t,e){for(var n=t;n&&"0px"===n.css(e);)n=n.children().last();n.css(e,"0")}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},3617:(t,e,n)=>{"use strict";var i=n(5820);HSBC_utils.registerComponent({name:"inPagePromoOnArticlePage",selector:".articlePage  .in-page-promo",init:function(t){return new i.Z(t)}})},3866:()=>{var t;(t=Bootstrap.jQuery)(".O-SMARTSPCGEN-DEV").find("fieldset:not(:has(input))").replaceWith((function(){return t("<div />").append(t(this).contents())}))},285:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,n){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(r)?r:String(r)),o)}var r}var n,i;n=Bootstrap.jQuery,i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$radioWrapper=n(e),this.$input=this.$radioWrapper.find("input[type=radio]"),this.bindUI()}var i,o;return i=t,(o=[{key:"bindUI",value:function(){var t=this;this.$radioWrapper.on("click",(function(){return t.$input.get(0).checked=!0})).on("keydown",(function(e){e.keyCode!==HSBC_utils.keyCodes.ENTER&&e.keyCode!==HSBC_utils.keyCodes.SPACE||HSBC_utils.isEditMode()||(t.$input.get(0).checked=!0,e.preventDefault())}))}}])&&e(i.prototype,o),Object.defineProperty(i,"prototype",{writable:!1}),t}(),HSBC_utils.registerComponent({name:"radioButton",selector:".A-FSRADB-RW-ALL",init:function(t){this.radioButtonObj=new i(t)}})},2351:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,n){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(r)?r:String(r)),o)}var r}var n,i,o,r;n=Bootstrap.jQuery,i=/\[ID\]/g,o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),HSBC_utils.isEditMode()||(this.$el=n(e),this.$callToActionWrapper=this.$el.find(".cta-wrapper"),this.$ctaMobile=this.$callToActionWrapper.find(".cta-mobile"),this.$ctaDesktop=this.$callToActionWrapper.find(".cta-desktop"),this.mobileAgent=!1,this.transactionId=this.fetchTransactionId(),this.transactionId&&(this.desktopRedirect()||this.generateUrls()))}var o,r;return o=t,(r=[{key:"fetchTransactionId",value:function(){var t=this.$callToActionWrapper.attr("data-param-name"),e=HSBC_utils.getUrlParam(t);return!(null===e||!e.length)&&e}},{key:"passTransactionIdToURL",value:function(t){return t?t.replace(i,this.transactionId):""}},{key:"generateUrls",value:function(){this.generateDesktopUrl(),this.generateMobileUrl(),this.$callToActionWrapper.show()}},{key:"generateDesktopUrl",value:function(){var t=this.$ctaDesktop.attr("href");t&&(t=this.passTransactionIdToURL(t),this.$ctaDesktop.attr("href",t))}},{key:"generateMobileUrl",value:function(){this.mobileAgentCheck(),this.mobileAgent&&(this.parseMobileUrls(),this.bindMobileUIEvents(),this.$ctaMobile.show())}},{key:"mobileAgentCheck",value:function(){!HSBC_utils.isMobileWindowsPhone&&this.$ctaMobile.length&&(HSBC_utils.isMobileiOS?this.mobileAgent="iOS":HSBC_utils.isMobileAndroid&&(HSBC_utils.isChrome?this.mobileAgent="androidChrome":this.mobileAgent="android"))}},{key:"parseMobileUrls",value:function(){var t=this.$callToActionWrapper.attr("data-mobile-urls");(t=JSON.parse(t)[this.mobileAgent]).appUrl=this.passTransactionIdToURL(t.appUrl),this.mobileUrls=t}},{key:"bindMobileUIEvents",value:function(){var t=this;this.$ctaMobile.on("click",(function(e){return t.mobileRedirect(e)})).on("keydown",(function(e){e.keyCode!==HSBC_utils.keyCodes.ENTER&&e.keyCode!==HSBC_utils.keyCodes.SPACE||t.mobileRedirect(e)}))}},{key:"mobileRedirect",value:function(t){var e=this,n=+new Date;try{window.location=this.mobileUrls.appUrl}catch(t){}setTimeout((function(){+new Date-n<5500&&"visible"===document.visibilityState&&(window.location=e.mobileUrls.appStoreUrl)}),5e3)}},{key:"desktopRedirect",value:function(){var t=this.$callToActionWrapper.attr("data-redirect-url");return!!t&&(t=this.passTransactionIdToURL(t),window.location=t,!0)}}])&&e(o.prototype,r),Object.defineProperty(o,"prototype",{writable:!1}),t}(),r={name:"callToAction",selector:".O-CTAPARAM-RW-DEV",init:function(t){return new o(t)}},HSBC_utils.registerComponent(r)},2882:(t,e,n)=>{"use strict";var i,o,r=n(4792);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==a(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===a(o)?o:String(o)),i)}var o}n(8230),i=Bootstrap.jQuery,o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=e,HSBC_utils.isEditMode()||(this.$el=i(e),this.tablesAlly=new r.T(this)),this.removeAdditionalSpaces(),this.applyHeadingScopeAttribute()}var e,n;return e=t,(n=[{key:"removeAdditionalSpaces",value:function(){var t=this.element.getElementsByTagName("td");Array.from(t).forEach((function(t){t.innerHTML=t.innerHTML.replace(/&nbsp;/g," ").trim()}))}},{key:"applyHeadingScopeAttribute",value:function(){i(this.element).find("table.desktop th:not([scope])").attr("scope","col")}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),HSBC_utils.registerComponent({name:"bsctbl",selector:".M-BSCTBL-RW-RBWM",init:function(t){return new o(t)}})},7125:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,n){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(r)?r:String(r)),o)}var r}var n,i,o;n=Bootstrap.jQuery,i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=n(e),this.$targetContainer=this.$el.find(".nomustache-content"),this.$targetContent=this.$targetContainer.find(".M-SMPTBL-RW-RBWM"),this.dataSourceUrl=this.$targetContainer.data("source"),this.tableTemplate=this.$el.find(".dynamic-table-template").html(),this.readDataFromUrl(),this.initializeMustacheFormatter()}var i,o;return i=t,(o=[{key:"readDataFromUrl",value:function(){var t=this;n.ajax(this.dataSourceUrl,{dataType:"json",cache:!1}).done((function(e){t.replaceWithData(!1,e)})).fail((function(e,n,i){t.replaceWithData(!0,{textStatus:n,errorThrown:i})}))}},{key:"initializeMustacheFormatter",value:function(){Mustache&&Mustache.Formatters&&!Mustache.Formatters.threeDecimal&&(Mustache.Formatters.threeDecimal=function(t){return(Math.round(1e3*Number(t))/1e3).toFixed(3)})}},{key:"replaceWithData",value:function(t,e){var i=this;t?console.log("Error: ".concat(JSON.stringify(e))):this.$targetContent.html(Mustache.render(this.tableTemplate,e)).promise().done((function(){i.$targetContent.trigger("table:rendered"),n(window).trigger("resize")}))}}])&&e(i.prototype,o),Object.defineProperty(i,"prototype",{writable:!1}),t}(),o={name:"dynamictable",selector:".M-DYNTBL-RW-RBWM",init:function(t){return new i(t)}},HSBC_utils.registerComponent(o)},1902:(t,e,n)=>{"use strict";var i,o,r;function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==a(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===a(o)?o:String(o)),i)}var o}n(5634),Bootstrap.jQuery,i={formName:"nb",cookieName:"FromWebSite",cookieSettings:{path:"/",secure:!0},dataLinks:{oneClickLinkPath:"data-oneClickLinkPath",fewStepsLinkPath:"data-fewStepsLinkPath",languageTag:"data-languageTag",countryTag:"data-countryTag",fromWebSite:"data-fromWebSite",modalPath:"data-modalPath"},cookies:{languageTag:"LANGTAG=",countryTag:"COUNTRYTAG="},onEnter:{13:1,Enter:1},onEscape:{27:1,Escape:1},onTab:{9:1,Tab:1}},o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.button=e}var e,n;return e=t,(n=[{key:"subscribeOnClicks",value:function(t){var e=this;return t.addEventListener("click",(function(t){e.onClick(t)})),this}},{key:"subscribeOnKeyPress",value:function(t){var e=this;return this.onKeyDown(t,i.onEnter,(function(t){e.onClick(t)})),this}},{key:"onKeyDown",value:function(t,e,n){return t.addEventListener("keydown",(function(t){(e[t.which]||e[t.keyCode]||e[t.key])&&(t.preventDefault(),n(t))})),t}},{key:"popUpConfiguration",value:function(){return["status=yes","location=no","scrollbars=yes","menubar=no","toolbar=no","resizable=yes","height=".concat(screen.height),"width=".concat(screen.width),"left=0","top=0"].join(",")}},{key:"onClick",value:function(){var t=this,e=this.extractAttributes(this.button,i.dataLinks),n=this.buildUrlWithParameters(e);this.needToShowPopUp(e.fewStepsLinkPath)?this.requestPopUp(e.modalPath,(function(i){var o=t.whenLoadedPopUp(n,e,t.parseModal(i));t.showModalToUser(o,document),t.modalAccessibilityHandler(o)}),Bootstrap.jQuery):this.focusOnEl(this.windowOpen(window)).submitForm(n,this.prepareForm(document,this.createForm(document),this.createInput(document))).setCookiesIfValueExists(e.fromWebSite)}},{key:"focusOnEl",value:function(t){return t.focus(),this}},{key:"modalAccessibilityHandler",value:function(t){var e=t.querySelector(".text-container");this.focusOnEl(e)}},{key:"requestPopUp",value:function(t,e,n){n.ajax({type:"GET",url:"".concat(t,".html"),success:e,error:function(t){return console.error("Please configure one click button modal window",t)}})}},{key:"whenLoadedPopUp",value:function(t,e,n){var o=this;try{var r=this.cyclicIterator(n.querySelectorAll("button,a"));this.modalCloseButton(n).addEventListener("click",(function(){o.closeModal(n)})),this.onKeyDown(this.modalCloseButton(n),i.onEnter,(function(){o.closeModal(n)})),this.onKeyDown(document,i.onEscape,(function(){o.closeModal(n)})),this.modalOneStepButton(n).addEventListener("click",(function(){o.oneStepAction(t,e)})),this.onKeyDown(this.modalOneStepButton(n),i.onEnter,(function(){o.oneStepAction(t,e)})),this.modalMultipleStepsButton(n).addEventListener("click",(function(){o.multipleStepsAction(e)})),this.onKeyDown(this.modalMultipleStepsButton(n),i.onEnter,(function(){o.multipleStepsAction(e)})),this.onKeyDown(n,i.onTab,(function(){r.next().focus()}))}catch(t){console.error("Not expected pop-up",t)}return n}},{key:"closeModal",value:function(t){t.parentNode.removeChild(t)}},{key:"cyclicIterator",value:function(t){var e=0;return{next:function(){return e<t.length?t[e++]:(e=0)||t[e++]}}}},{key:"multipleStepsAction",value:function(t){this.focusOnEl(this.windowOpen(window)).submitForm(t.fewStepsLinkPath,this.prepareForm(document,this.createForm(document),this.createInput(document))).setCookiesIfValueExists(t.fromWebSite)}},{key:"oneStepAction",value:function(t,e){this.focusOnEl(this.windowOpen(window)).submitForm(t,this.prepareForm(document,this.createForm(document),this.createInput(document))).setCookiesIfValueExists(e.fromWebSite)}},{key:"buildUrlWithParameters",value:function(t){return this.appendGetParameters(t.oneClickLinkPath,Object.keys(t).filter((function(e){return i.cookies[e]&&t[e]})).reduce((function(e,n){return e.push((i.cookies[n]||"").concat(t[n])),e}),[]))}},{key:"submitForm",value:function(t,e){return e.action=t,e.submit(),e.parentNode.removeChild(e),this}},{key:"setAttributes",value:function(t,e){return Object.entries(e).forEach((function(e){t.setAttribute(e[0],e[1])})),t}},{key:"extractAttributes",value:function(t,e){var n={};return Object.entries(e).reduce((function(e,n){return e[n[0]]=t.getAttribute(n[1]),e}),n),n}},{key:"setCookiesIfValueExists",value:function(t){t?HSBC_utils.setCookie(i.cookieName,t,i.cookieSettings):console.info("Can't set one click button cookie, because value is empty")}},{key:"createInput",value:function(t){return this.setAttributes(t.createElement("input"),{WithCookie:"true"})}},{key:"createForm",value:function(t){return this.setAttributes(t.createElement("form"),{method:"post",name:i.formName,target:i.formName})}},{key:"windowOpen",value:function(t){return t.open("",i.formName,this.popUpConfiguration())}},{key:"showModalToUser",value:function(t,e){return e.body.appendChild(t),t}},{key:"parseModal",value:function(t){return(new DOMParser).parseFromString(t,"text/html").getElementById("oneClickModal")}},{key:"prepareForm",value:function(t,e,n){return e.appendChild(n),t.body.appendChild(e),e}},{key:"appendGetParameters",value:function(t,e){return t.indexOf("?")?"".concat(t,"&").concat(e.join("&")):"".concat(t,"?").concat(e.join("&"))}},{key:"needToShowPopUp",value:function(t){return!!t}},{key:"modalMultipleStepsButton",value:function(t){return t.querySelector("button.options")}},{key:"modalOneStepButton",value:function(t){return t.querySelector("a.continue")}},{key:"modalCloseButton",value:function(t){return t.querySelector(".close-trigger")}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),r={name:"one-click-button",selector:".oneClickButton",init:function(t){return new o(t).subscribeOnClicks(t).subscribeOnKeyPress(t)}},HSBC_utils.registerComponent(r)},4792:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{T:()=>a}),Bootstrap.jQuery;var r=".visuallyhidden",a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=e.$el,this.$iconTick=this.$el.find(".icon-agree"),this.$iconCross=this.$el.find(".icon-minimize"),this.$tableWrapper=this.$el.find(".table-wrapper"),this.context=e,this.setTablesIconCrossAndTickTexts()}var e,n;return e=t,(n=[{key:"setTablesIconCrossAndTickTexts",value:function(){this.iconsTexts={tick:this.$tableWrapper.attr("data-accessibility-tick-icon-text"),cross:this.$tableWrapper.attr("data-accessibility-cross-icon-text")},this.$iconTick.find(r).html(this.iconsTexts.tick),this.$iconCross.find(r).html(this.iconsTexts.cross)}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},6801:(t,e,n)=>{"use strict";var i=n(2489);HSBC_utils.isEditMode()||HSBC_utils.registerComponent({name:"M-COMPLEXPAG-DEV",selector:".M-COMPLEXPAG-DEV",init:function(t){return new i.N(t)}})},1789:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,n){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(r)?r:String(r)),o)}var r}var n,i,o,r,a,s;n=Bootstrap.jQuery,i="active-pinned",o="dynamic",r={dblclick:"tms-dblclick",pid:"data-pid",pidAction:"data-pid-action",eventComponent:"data-event-component",eventName:"data-event-name"},a=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),HSBC_utils.isEditMode()||(this.APP=i,this.$el=this.APP.globalComponents.headerController.$pinnedBanner,this.$pinnedWrapper=this.$el.find(".pinned-wrapper"),this.$header=n(".header"),this.$headerWrapper=n(".header-wrapper-main"),this.$headerNav=n(".header-nav-wrapper"),this.$introSection=n(".intro-section"),this.dynamicHidden=!0,this.dynamicJustFinished=!1,this.resizeStarted=!1,this.prevWindowWidth=n(window).width(),this.isDynamic(),this.introSectionPinnedActive(),this.bindUIEvents())}var a,s;return a=t,(s=[{key:"bindUIEvents",value:function(){var t,e=this;n(window).on("resize",(function(){e.resizeStarted=!0,clearTimeout(t),t=setTimeout((function(){e.windowWidth=n(window).width(),e.prevWindowWidth!==e.windowWidth&&(e.prevWindowWidth=e.windowWidth,e.recalculateAfterResize()),e.resizeStarted=!1}),250)})),n(document).on("appScroll.isScrolledUp",(function(){e.resizeStarted||e.showBanner()})),n(document).on("appScroll.isScrolledDown",(function(){e.resizeStarted||e.hideBanner()}))}},{key:"introSectionPinnedActive",value:function(){var t=this.$introSection;t&&!n(".intro-section.hero-no-image").length&&t.addClass("has-hero-2")}},{key:"isDynamic",value:function(){this.$el.hasClass(o)&&this.captureDynamicTitle()&&this.captureDynamicButton()&&(this.dynamicHidden=!0)}},{key:"captureDynamicHeight",value:function(){this.$el.css({borderBottom:0,height:0,visibility:"hidden",display:"block"}),this.dynamicHeight=this.$el.children().height()+1,this.$el.css({display:"",borderBottom:"",height:"",visibility:""})}},{key:"captureDynamicTitle",value:function(){var t=n(".title-for-pinned-banner").first();if(t.length){var e=t.text(),i=n("<p/>");return i.addClass("A-PINBANNER-TITLE-RW-ALL"),i.text(e),this.$pinnedWrapper.prepend(i),!0}return!1}},{key:"captureDynamicButton",value:function(){if(this.$buttonForBanner=n(".button-for-pinned-banner").first(),this.$buttonForBanner.length){this.$buttonNode=n("<div/>");var t=this.$buttonForBanner.clone();return this.$buttonNode.addClass("action-buttons"),t.attr("id","pp_intro_button_1"),t.removeClass("button-for-pinned-banner"),this.moveTagging(t),this.$buttonNode.append(n("<div/>").append(t)),!0}return!1}},{key:"moveTagging",value:function(t){for(var e in r){var n=r[e],i="".concat("mv-").concat(n);t.attr(n,this.$el.attr(i)),this.$el.removeAttr(i)}}},{key:"showBanner",value:function(){this.showPinnedBanner()}},{key:"hideBanner",value:function(){this.dynamicHidden?this.showDynamicBanner():this.hidePinnedBanner()}},{key:"showDynamicBanner",value:function(){var t=this;this.dynamicJustFinished||(this.dynamicJustFinished=!0,this.$pinnedWrapper.append(this.$buttonNode),this.captureDynamicHeight(),this.$el.removeClass("hidden"),this.$el.attr("aria-hidden","false"),this.$el.animate({bottom:-this.dynamicHeight},400,(function(){t.$el.removeClass(o),t.dynamicHidden=!0,t.hidePinnedBanner()})))}},{key:"hidePinnedBanner",value:function(){var t=this.$el.height(),e=this.$headerNav.height()-t;this.$headerNav.addClass(i).css({position:"absolute",transform:"translateY(-".concat(e,"px)")})}},{key:"showPinnedBanner",value:function(){this.$headerNav.removeClass(i).css({position:"",transform:"none"}),this.dynamicJustFinished&&(this.dynamicJustFinished=!1,n(window).trigger("headerMessageChange"))}},{key:"recalculateAfterResize",value:function(){this.dynamicHidden||this.$headerNav.hasClass(i)&&(this.dynamicJustFinished=!0,this.showFixedBanner())}}])&&e(a.prototype,s),Object.defineProperty(a,"prototype",{writable:!1}),t}(),s={name:"pinnedBanner",selector:".O-PINBANNER-RW-ALL",init:function(t,e){return new a(t,e)}},HSBC_utils.registerComponent(s)},6169:(t,e,n)=>{"use strict";n.d(e,{G:()=>s});var i=n(7856),o=n.n(i),r=Bootstrap.jQuery,a={productSelectContainer:".product-select-container",productImagesContainer:".product-images-container",sectionColumnsContainer:".section-columns-container",slideArea:".slide-area",temporaryContainer:".temporary-container"};function s(t,e,n,i,s,l){s.load("".concat(t.ajaxUrl," ").concat(a.slideArea),(function(){e.html(""),n.html(""),e.append(r("".concat(a.temporaryContainer," ").concat(a.productSelectContainer," > *"))),n.append(r("".concat(a.temporaryContainer," ").concat(a.productImagesContainer," > *"))),i.each((function(t,e){var n=r(e),i=o().sanitize(n.attr("id"));n.html(""),n.append(r("".concat(a.temporaryContainer," #").concat(i," > *")))})),s.html(""),l()}))}},3499:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,n){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(r)?r:String(r)),o)}var r}var n=Bootstrap.jQuery,i="O-FOOTNOTES-RW-DEV",o=".pagination-wrapper",r="pinned",a="released",s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),HSBC_utils.isEditMode()||(this.$el=n(e),this.$mainContent=n('.grid[role="main"]'),this.$absoluteElements=this.$el.find("".concat(o,", ").concat(".section-title",", ").concat(".section-heading",", ")+".".concat(i)),this.$dropdownElements=this.$el.find(".dropdown"),this.$paginationNext=this.$el.find(".pagination .next"),this.$paginationPrev=this.$el.find(".pagination .prev"),this.$paginationNumbers=this.$el.find(".pagination-numbers"),this.$paginationWrapper=this.$el.find(o),this.$productSelectContainer=this.$el.find(".product-select-container"),this.$productImagesContainer=this.$el.find(".product-images-container"),this.$header=n(".header"),this.fontSize=window.getComputedStyle(document.body).fontSize,this.prevWindowWidth=0,this.windowWidth=0,this.columnWidth=0,this.currentColumn=0,this.sliderPosition=0,this.pageYOffset=0,this.pinPosition=0,this.topOffsetMainContent=0,this.topOffset=0,this.edge="left",this.scrollVerticalStarted=!1,HSBC_utils.isRTL&&(this.edge="right"),this.touchFinished=!0,this.scrolledByScript=!1,this.renderPaginationNumbers(),this.addExpanderClass(),this.calculateSpacings(),this.scrollVerticalFrame=this.scrollVertical.bind(this),window.requestAnimationFrame(this.scrollVerticalFrame),this.bindUIEvents())}var s,l;return s=t,l=[{key:"addExpanderClass",value:function(){this.$el.find(".O-ADVEXP-RW-RBWM").each((function(){n(this).parent().addClass("has-expander")}))}},{key:"bindUIEvents",value:function(){var t,e,i=this;n(window).on("footnotesRerendered",(function(){i.calculateSpacings()})),n(window).resize((function(){clearTimeout(t),t=setTimeout((function(){i.windowWidth=n(window).width(),i.prevWindowWidth!==i.windowWidth&&(i.prevWindowWidth=i.windowWidth,i.calculateSpacings(),i.calculatePosition(),i.moveSlider(0),i.calculateColumn(),i.paginationStateUpdate(),i.renderPaginationNumbers(),i.pinNavigation(),i.releaseNavigation())}),250)})),n(window).on("scroll",(function(){clearTimeout(e),i.scrollVerticalStarted=!0,e=setTimeout((function(){i.scrollVerticalStarted=!1,i.releaseNavigation()}),250)})),n(window).on("headerResize",(function(){i.calculateOffsets()})),this.$el.on("touchstart",(function(){i.scrolledByScript=!1,i.touchFinished=!1})),n(window).on("touchend",(function(){i.touchFinished=!0})),this.$el.on("scroll",(function(){clearTimeout(t),clearInterval(t),t=setTimeout((function(){i.scrolledByScript?i.scrolledByScript=!1:t=setInterval((function(){i.touchFinished&&(clearInterval(t),i.snapToNewPosition())}),100)}),100)})),this.$paginationNext.on("click",(function(){i.snapToNewPosition(1)})),this.$paginationPrev.on("click",(function(){i.snapToNewPosition(-1)})),this.$dropdownElements.on("click",(function(){i.calculatePosition(),i.moveSlider(500)})),setInterval((function(){i.fontSize!==window.getComputedStyle(document.body).fontSize&&i.calculateSpacings(),i.fontSize=window.getComputedStyle(document.body).fontSize}),300)}},{key:"calculateSpacings",value:function(){var t=this;this.$absoluteElements.each((function(t,e){var o=n(e);o.css("position","absolute");var r=o.height();if(o.hasClass(i)&&o.parent().css("height",r),0===r){var a=o.closest(".exp-content");a.css({height:0,visibility:"hidden",display:"block"}),r=o.outerHeight(),a.css({height:"",visibility:"",display:""})}else r=o.outerHeight();o.next().css("padding-top",r)})),this.$dropdownElements.each((function(t,e){var i=n(e),o=i.outerHeight();i.parent().css("min-height",o),i.next().css("margin-top",o),i.css("position","absolute")})),n(document).ready((function(){var e=t.$productImagesContainer.innerWidth();t.$productSelectContainer.css("width",e),t.sliderSteps={mobile:{0:0,1:1+Math.floor(e/4),2:1+Math.floor(e/2)},tablet:{0:0,1:Math.floor(e-t.$el.innerWidth())}},t.columnWidth=t.$el.find(".product-select").outerWidth(),t.productSelectContainerHeight=t.$productSelectContainer.innerHeight()})),this.calculateOffsets()}},{key:"calculateOffsets",value:function(){this.topOffsetMainContent=this.$header.height()-1,this.topOffset=this.$el.offset().top-this.topOffsetMainContent}},{key:"calculateColumn",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(0===t){var e=this.$el.scrollLeft(),n=this.sliderPosition-e;HSBC_utils.isRTL&&(e=-e,n=-n),n>20?this.currentColumn=Math.floor(e/this.columnWidth):n<-20&&(this.currentColumn=Math.ceil(e/this.columnWidth))}else this.currentColumn+=t}},{key:"calculatePosition",value:function(){HSBC_utils.matchMedia.mobile?this.sliderPosition=this.sliderSteps.mobile[this.currentColumn]:this.sliderPosition=this.sliderSteps.tablet[this.currentColumn],HSBC_utils.isRTL&&(this.sliderPosition=-this.sliderPosition)}},{key:"moveSlider",value:function(t){Math.floor(this.$el.scrollLeft())!==this.sliderPosition&&(this.scrolledByScript=!0,this.$el.animate({scrollLeft:this.sliderPosition},t))}},{key:"paginationStateUpdate",value:function(){this.currentColumn<1?(this.currentColumn=0,this.edge="left"):HSBC_utils.matchMedia.mobile&&this.currentColumn>1?(this.currentColumn=2,this.edge="right"):HSBC_utils.matchMedia.tablet&&this.currentColumn>0?(this.currentColumn=1,this.edge="right"):this.edge=!1,"left"===this.edge?(this.$paginationPrev.prop("disabled",!0),this.$paginationNext.prop("disabled",!1)):"right"===this.edge?(this.$paginationPrev.prop("disabled",!1),this.$paginationNext.prop("disabled",!0)):(this.$paginationPrev.prop("disabled",!1),this.$paginationNext.prop("disabled",!1))}},{key:"renderPaginationNumbers",value:function(){var t="";t="".concat(this.currentColumn+1,", ").concat(Number(this.currentColumn+2)),HSBC_utils.matchMedia.tablet&&(t+=", ".concat(Number(this.currentColumn+3))),this.$paginationNumbers.text(t)}},{key:"snapToNewPosition",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.calculateColumn(t),this.paginationStateUpdate(),this.renderPaginationNumbers(),this.calculatePosition(),this.moveSlider(500)}},{key:"calculatePinPosition",value:function(){this.pageYOffset=window.pageYOffset,this.pinPosition=this.pageYOffset-this.topOffset}},{key:"pinNavigation",value:function(){this.calculatePinPosition(),this.pinPosition>0?(HSBC_utils.isRTL?this.$el.css({top:this.topOffsetMainContent,"padding-top":this.productSelectContainerHeight,right:HSBC_utils.matchMedia.desktop?"initial":this.$el.scrollLeft()}):this.$el.css({top:this.topOffsetMainContent,"padding-top":this.productSelectContainerHeight,left:HSBC_utils.matchMedia.desktop?"initial":-this.$el.scrollLeft()}),this.$productSelectContainer.addClass(r),this.$paginationWrapper.css({position:"fixed",top:this.topOffsetMainContent})):this.resetNavigation()}},{key:"releaseNavigation",value:function(){this.calculatePinPosition(),this.pinPosition>0?(this.$el.css({top:this.pinPosition,"padding-top":""}),this.$productSelectContainer.addClass(a),this.$productSelectContainer.removeClass(r)):this.resetNavigation()}},{key:"resetNavigation",value:function(){this.$el.css({"padding-top":"",top:""}),this.$productSelectContainer.removeClass(a),this.$productSelectContainer.removeClass(r),this.$paginationWrapper.css({position:"absolute",top:""})}},{key:"scrollVertical",value:function(){this.scrollVerticalStarted&&this.pinNavigation(),window.requestAnimationFrame(this.scrollVerticalFrame)}}],l&&e(s.prototype,l),Object.defineProperty(s,"prototype",{writable:!1}),t}();HSBC_utils.registerComponent({name:"comparatorSlider",selector:".O-PRODCMP-RW-DEV .slide-area",init:function(t){return new s(t)}})},8356:(t,e,n)=>{"use strict";n.d(e,{q:()=>f});var i=n(8654);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return(e=u(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,u(i.key),i)}}function u(t){var e=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===o(e)?e:String(e)}var c=Bootstrap.jQuery,h=HSBC_utils.keyCodes,f=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=e,this.$expander=this.context.$comparator.find(".exp-comparator");var i=this.context.$comparator.attr("data-product-type");this.product={url:i,name:i.replace("-"," ")},this.setCommonView(),HSBC_utils.isEditMode()||this.$expander.on("click",(function(t){return n.accordionExpansionTealium(t)})).on("keydown",(function(t){var e=t.keyCode,i=e===h.ENTER,o=e===h.SPACE;(i||o)&&(t.preventDefault(),n.accordionExpansionTealium(t))}))}var e,n;return e=t,(n=[{key:"setCommonView",value:function(){this.commonView={page_url:"/product-comparator/".concat(this.product.url),page_name:"pws:product comparator:".concat(this.product.name),site_section:"pws",page_type:"tool",page_customer_group:"general",page_category:"product comparator",page_subcategory:this.product.name,tool_type:"comparator",tool_name:"".concat(this.product.name," comparator")}}},{key:"openModalTealium",value:function(){i.j.trackView(a(a({},this.commonView),{},{page_url:"".concat(this.commonView.page_url,"/select-products-popup"),page_name:"".concat(this.commonView.page_name,":select products popup"),raw_datalayer:"5680v2"}))}},{key:"repeatStr",value:function(t,e){for(var n=[],i=0;i<e;i+=1)n[i]=t;return n.join(",")}},{key:"productSubcategory",value:function(t){this.$removeLink=this.context.$productSelectContainer.find(".clear-icon");var e=[];return this.$removeLink.each((function(n,i){e.push(c(i).attr(t))})),e.join(",")}},{key:"resultPageTealium",value:function(t){var e=this.productSubcategory("data-product-subcategory"),n=this.productSubcategory("data-product-id");i.j.trackView(a(a({},this.commonView),{},{page_url:"".concat(this.commonView.page_url,"/result"),page_name:"".concat(this.commonView.page_name,":result"),tool_event:"completed",product_category:this.repeatStr(this.product.name,t),product_subcategory:e,product_id:n,raw_datalayer:"5680v3"}))}},{key:"accordionExpansionTealium",value:function(t){var e=c(t.target),n=!1,o=e.get(0).innerText.toLowerCase();(e.hasClass("text-container")&&e.parent().hasClass("expanded")||"true"===e.attr("aria-expanded"))&&(n=!0),n||i.j.trackEventWithInheritance({page_url:"".concat(this.commonView.page_url,"/result"),page_name:"".concat(this.commonView.page_name,":result"),event_category:"content",event_subcategory:"expand",event_action:"accordion",event_content:o,raw_datalayer:"5680v4"})}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},3933:(t,e,n)=>{"use strict";n.d(e,{G:()=>h});var i=n(7967),o=n(7856),r=n.n(o);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==a(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===a(o)?o:String(o)),i)}var o}var u="data-product-type",c={dataProductType:".product-select-container [".concat(u,"]")},h=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.maxProductsNumber=4,this.getPageUrl(),this.getHtmlExt(),this.getQueryString(),this.getProducts(),this.removeProductsFromPageUrl(),this.setUrls(),this.resolveOldUrl()}var e,n;return e=t,(n=[{key:"getPageUrl",value:function(){this.pageUrl=(0,i.N)("".concat(window.location.origin).concat(window.location.pathname))}},{key:"getHtmlExt",value:function(){this.pageUrl.indexOf(".html")>-1?(this.htmlExt=".html",this.pageUrl=this.pageUrl.replace(".html","")):(this.htmlExt="/",this.pageUrl=this.pageUrl.slice(0,-1))}},{key:"getQueryString",value:function(){this.queryString=r().sanitize(window.location.search)}},{key:"getProducts",value:function(){this.products=[],this.getFirstProduct(),this.getLaterProducts()}},{key:"getFirstProduct",value:function(){var t=document.querySelector(c.dataProductType);if(t){var e=t.getAttribute(u);this.products.push(e)}}},{key:"getLaterProducts",value:function(){var t=(0,i.N)(window.location.hash),e=/[?&]pc-products=([a-zA-Z0-9,_\-.]+)/g.exec(t);if(e){var n=e[e.length-1].split(".");this.products=this.products.concat(n)}}},{key:"removeProductsFromPageUrl",value:function(){if(this.oldProducts="",this.products.length>0){var t=this.products[0],e=this.pageUrl.indexOf(t)-1;this.oldProducts=this.pageUrl.substring(e),this.pageUrl=this.pageUrl.substring(0,e)}}},{key:"setUrls",value:function(){this.setBarUrl(),this.setAjaxUrl()}},{key:"setBarUrl",value:function(){if(this.barUrl=this.pageUrl,this.products.length>0&&(this.barUrl+="/".concat(this.products[0])),this.barUrl+="".concat(this.htmlExt).concat(this.queryString),this.products.length>1){var t=function(t){if(Array.isArray(t))return s(t)}(e=this.products)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();t.shift(),this.barUrl+="#?pc-products=".concat(t.join("."))}var e}},{key:"setAjaxUrl",value:function(){this.ajaxUrl=this.pageUrl,this.products.length>0&&(this.ajaxUrl+=".".concat(this.products.join("."))),this.ajaxUrl+=(0,i.N)("".concat(this.htmlExt).concat(this.queryString))}},{key:"updateBarUrl",value:function(){window.history.pushState(null,null,this.barUrl)}},{key:"resolveOldUrl",value:function(){this.oldProducts.length>0&&-1!==this.oldProducts.indexOf(".")&&(this.oldProducts=this.oldProducts.slice(1),this.products=this.oldProducts.split("."),this.setBarUrl(),this.redirectToNewUrl())}},{key:"redirectToNewUrl",value:function(){window.location.replace(this.barUrl)}},{key:"addProduct",value:function(t){this.products.length<this.maxProductsNumber&&this.products.push(t)}},{key:"removeProduct",value:function(t){this.products=this.products.filter((function(e){return e!==t}))}},{key:"removeProductsExcess",value:function(){this.products=this.products.slice(0,this.maxProductsNumber)}},{key:"findProduct",value:function(t){return this.products.indexOf(t)}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},2338:(t,e,n)=>{"use strict";var i=n(6169),o=n(3933),r=n(8356);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==a(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===a(o)?o:String(o)),i)}var o}var l=Bootstrap.jQuery,u=HSBC_utils.keyCodes,c="is-visible",h="hide-overflow",f="selected",d="add-icon",p="add-image",m="clear-icon",y="disabled",v="add-product",b="pinned",g=".product-select",S=".image-select",k=".modal-checkbox",w="data-product-type",$="aria-checked",C=l("body"),E=l(document),T=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$comparator=l(e),this.$modalWindow=this.$comparator.find(".modal-window"),this.$outsideModal=this.$modalWindow.find(".main-modal"),this.$modalContainer=this.$modalWindow.find(".modal-container"),this.$modalDialog=this.$modalContainer.find(".modal-dialog"),this.$modalButton=this.$modalContainer.find(".modal-button"),this.$closeButton=this.$modalWindow.find(".close-button"),this.$compareButton=this.$modalDialog.find(".A-BTNP-RW-ALL"),this.$removeIcon=this.$comparator.find(".".concat(m)),this.$sectionColumnsContainer=this.$comparator.find(".section-columns-container"),this.$productSelectContainer=this.$comparator.find(".product-select-container"),this.$temporaryContainer=this.$comparator.find(".temporary-container"),this.$productImagesContainer=this.$comparator.find(".product-images-container"),this.$tileSelector=this.$modalDialog.find(".tile-selector"),this.$tileSelector.find(k).attr("tabindex","-1"),this.isLoad=!1,this.isEmptyComparator=!1,this.index=0,this.countOfProducts=0,this.modalScrollStarted=!1,this.modalResizeStarted=!1,this.prevWindowWidth=l(window).width(),this.modalScrollFrame=this.modalScroll.bind(this),window.requestAnimationFrame(this.modalScrollFrame),this.comparatorUrl=new o.G,this.comparatorUrl.products.length>1&&this.ajaxEvent(),this.comparatorTealium=new r.q(this),this.setIdForLabel(),this.bindUIEvents(),this.removeProducts()}var e,n;return e=t,n=[{key:"bindUIEvents",value:function(){var t,e,n=this;this.$outsideModal.on("scroll",(function(){clearTimeout(t),n.modalScrollStarted=!0,t=setTimeout((function(){n.modalScrollStarted=!1}),250)})),l(window).resize((function(){clearTimeout(e),n.modalResizeStarted=!0,e=setTimeout((function(){n.modalResizeStarted=!1}),250)})),l(window).on("load",(function(){n.isLoad=!0,n.markEmptySlotForProduct(),n.addHiddenProductNamesToColumns(),n.calculateProducts(),n.isEmptyComparator&&n.comparatorTealium.openModalTealium()})),this.$comparator.on("click",(function(t){n.addProductPressed(t)&&(n.comparatorTealium.openModalTealium(),n.focusedElBeforeOpen=l(g).eq(n.index).find(".".concat(d)),n.openModal(),t.preventDefault())})),E.on("click",(function(t){n.outsideModal(t)&&n.closeModal()})),this.$outsideModal.on("keydown",(function(t){t.keyCode===u.ESC&&n.$outsideModal.parent().hasClass(c)&&(n.closeModal(),t.preventDefault())})),this.$compareButton.on("click",(function(){return n.closeModal()})),this.$tileSelector.on("click",(function(t){return n.markSelectedProducts(t)})).on("keydown",(function(t){var e=t.keyCode,i=e===u.ENTER,o=e===u.SPACE;(i||o)&&n.markSelectedProducts(t)}))}},{key:"ajaxEvent",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return!1};(0,i.G)(this.comparatorUrl,this.$productSelectContainer,this.$productImagesContainer,this.$sectionColumnsContainer,this.$temporaryContainer,(function(){t.markEmptySlotForProduct(),t.addHiddenProductNamesToColumns(),t.comparatorTealium.resultPageTealium(t.comparatorUrl.products.length),e()}))}},{key:"setIdForLabel",value:function(){this.$tileSelector.each((function(){var t=l(this).find(".label-for-checkbox").get(0).id,e=l(this).find(".description-for-checkbox").get(0).id;l(this).find(k).attr({"aria-labelledby":t,"aria-describedby":e})}))}},{key:"addHiddenProductNamesToColumns",value:function(){var t=this,e=this.$productSelectContainer.find(".title-loaded");this.productTitles=[],e.each((function(e,n){t.productTitles.push(l(n).text())})),this.titleNo=this.productTitles.length,this.$sectionColumnsContainer.each((function(e,n){for(var i=l(n).find(".section-column"),o=0;o<t.titleNo;o+=1)l(i[o]).prepend('<span class="'.concat("visuallyhidden",'">').concat(t.productTitles[o],"</span>"))}))}},{key:"markSelectedProducts",value:function(t){var e=l(t.currentTarget);if(t.preventDefault(),!e.hasClass(y)){var n=l(e).attr(w);e.hasClass(f)?(e.removeClass(f),e.find(k).attr($,"false"),this.comparatorUrl.removeProduct(n)):(e.addClass(f),e.find(k).attr($,"true"),this.comparatorUrl.addProduct(n)),this.isLoad=!1,this.calculateProducts()}}},{key:"removeProducts",value:function(){var t=this;this.$comparator.on("click",this.$removeIcon,(function(e){if(t.removeProductPressed(e)){var n=l(e.target);n.is("span")&&(n=n.parent(".".concat(m))),t.isLoad=!1;var i=n.attr(w);t.comparatorUrl.removeProduct(i),t.calculateProducts(),t.comparatorUrl.setUrls(),t.comparatorUrl.updateBarUrl(),t.ajaxEvent(),e.preventDefault()}}))}},{key:"calculateProducts",value:function(){var t=this;this.pinCTAToggle(),this.$tileSelector.each((function(e,n){var i=l(n),o=t.comparatorUrl.products.length,r=t.comparatorUrl.maxProductsNumber;o>=r?(i.hasClass(f)||(i.addClass(y),i.find(k).attr("tabindex","-1")),o>r&&(t.comparatorUrl.removeProductsExcess(),t.comparatorUrl.setUrls(),t.comparatorUrl.updateBarUrl(),t.ajaxEvent())):(0===o&&t.isLoad&&(t.openModal(),t.isEmptyComparator=!0),i.removeClass(y),i.find(k).attr("tabindex","0"))}))}},{key:"addClassForSelectedItem",value:function(){var t=this;this.$tileSelector.each((function(e,n){var i=l(n);t.comparatorUrl.findProduct(i.attr(w))>-1?(i.addClass(f),i.find(k).attr($,"true")):(i.removeClass(f),i.find(k).attr($,"false"))}))}},{key:"markEmptySlotForProduct",value:function(){l(".".concat(d)).closest(g).addClass(v),l(".".concat(p)).closest(S).addClass(v),this.isLoad||l(".link-icon").get(0).focus()}},{key:"openModal",value:function(){this.addClassForSelectedItem(),this.$modalWindow.addClass(c),C.addClass(h),this.$modalDialog.attr({"aria-hidden":"false","aria-modal":"true"}),this.$closeButton.get(0).focus(),l(k).attr("tabindex","0"),this.setFocusLoop()}},{key:"setFocusLoop",value:function(){var t=this.$closeButton,e=this.$compareButton;this.$modalDialog.get(0).addEventListener("keydown",(function(n){n.keyCode!==u.TAB||n.shiftKey?n.keyCode===u.TAB&&n.shiftKey&&t.is(":focus")&&(e.get(0).focus(),n.preventDefault()):e.is(":focus")&&(t.get(0).focus(),n.preventDefault())}))}},{key:"closeModal",value:function(){this.$modalWindow.removeClass(c),C.removeClass(h),this.$modalDialog.attr({"aria-hidden":"true","aria-modal":"false"}),this.focusedElBeforeOpen&&this.focusedElBeforeOpen.get(0).focus(),this.comparatorUrl.setUrls(),this.comparatorUrl.barUrl!==window.location.href&&(this.comparatorUrl.updateBarUrl(),this.ajaxEvent()),l(k).attr("tabindex","-1")}},{key:"addProductPressed",value:function(t){var e,n,i=l(t.target);if(i.closest(g).length)n=i.closest(g),e=l(g);else{if(!i.closest(S).length)return!1;n=i.closest(S),e=l(S)}return!(!n.find(".".concat(d)).length&&!n.find(".".concat(p)).length||(this.index=e.index(n),0))}},{key:"removeProductPressed",value:function(t){var e=l(t.target);return e.hasClass(m)||e.parent(".".concat(m)).length}},{key:"outsideModal",value:function(t){return t.target===this.$outsideModal.get(0)||t.target===this.$modalContainer.get(0)||t.target===this.$closeButton.get(0)}},{key:"modalScroll",value:function(){this.modalScrollStarted?this.pinCTAToggle(!0):this.modalResizeStarted&&this.resizeCTA(),window.requestAnimationFrame(this.modalScrollFrame)}},{key:"resizeCTA",value:function(){var t=l(window).width();this.prevWindowWidth!==t&&(this.prevWindowWidth=t,this.unpinCTA(!0),this.pinCTAToggle(!0))}},{key:"pinCTAToggle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.$outsideModal.prop("scrollHeight")-this.$outsideModal.prop("scrollTop")-60<this.$outsideModal.prop("clientHeight");this.comparatorUrl.products.length>0&&!e?this.pinCTA(t):e?this.unpinCTA(!0):this.unpinCTA()}},{key:"pinCTA",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.$modalButton.hasClass(b)){var e=this.$modalDialog.outerWidth(),n=this.$modalButton.outerHeight(!0);this.$modalDialog.css("padding-bottom",n),this.$modalButton.addClass(b),this.$modalButton.css("width",e),t?this.$modalButton.css({bottom:0}):(n=this.$modalButton.outerHeight(),this.$modalButton.css("bottom",-n),this.$modalButton.animate({bottom:0}))}}},{key:"unpinCTA",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.$modalButton.hasClass(b))if(e)this.$modalButton.css("width",""),this.$modalButton.removeClass(b),this.$modalDialog.css("padding-bottom",0);else{var n=this.$modalButton.outerHeight();this.$modalButton.animate({bottom:-n},(function(){t.unpinCTA(!0)}))}}}],n&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();HSBC_utils.registerComponent({name:"productComparator",selector:".productComparator",init:function(t){return new T(t)}})},9306:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,n){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(r)?r:String(r)),o)}var r}var n,i,o;n=Bootstrap.jQuery,i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=n(e),this.$gridClasses=this.$el.find(".grid-classes"),this.$allLinks=this.$el.find(".M-QCKLKWICN-RW-RBWM"),this.$linkContainers=this.$el.find(".link-container"),this.initClasses(),this.addDivider(),this.setHeights(),this.removeLastRowDivider(),this.bindUIEvents()}var i,o,r;return i=t,r=[{key:"getHighestElement",value:function(t){return t.toArray().reduce((function(t,e){var i=n(e);return t.height()<i.height()?i:t}),t.first())}}],(o=[{key:"initClasses",value:function(){var t=this.$gridClasses.data("grid-classes");t&&this.$allLinks.addClass(t)}},{key:"bindUIEvents",value:function(){var t=this;n(window).on("resize",(function(){t.setHeights(),t.addDivider(),t.removeLastRowDivider()}))}},{key:"addDivider",value:function(){this.$allLinks.find("span.A-DIVHL-RW-ALL").remove(),this.$gridClasses.hasClass("links-with-divider")&&this.$allLinks.append('<span class="'.concat("A-DIVHL-RW-ALL",'"></span>'))}},{key:"setHeights",value:function(){this.$linkContainers.height("auto"),(HSBC_utils.matchMedia.desktop||HSBC_utils.matchMedia.tablet)&&(this.equalizeElementsInitialHeight(),this.equalizeElementsHeight())}},{key:"equalizeElementsInitialHeight",value:function(){var e=t.getHighestElement(this.$linkContainers);this.$linkContainers.outerHeight(e.outerHeight()),e.height("auto"),this.$linkContainers.outerHeight(e.outerHeight())}},{key:"equalizeElementsHeight",value:function(){var t=this.getVerticallyGroupedColumns();this.$linkContainers.height("auto"),t.forEach((function(t){var e=Math.max.apply(null,t.map((function(t){return t.height()})));t.forEach((function(t){return t.height(e)}))}))}},{key:"getVerticallyGroupedColumns",value:function(){var t={};return this.$linkContainers.each((function(){var e=n(this),i=e.offset().top;t[i]||(t[i]=[]),t[i].push(e)})),n.map(t,(function(t){return[t]}))}},{key:"removeLastRowDivider",value:function(){if(this.$allLinks.length){var t=this.$allLinks.last().offset().top;this.$allLinks.each((function(e,i){var o=n(i);o.offset().top===t&&o.find("span.A-DIVHL-RW-ALL").remove()}))}}}])&&e(i.prototype,o),r&&e(i,r),Object.defineProperty(i,"prototype",{writable:!1}),t}(),o={name:"quickLinksWithIcon",selector:".M-QCKLKSWICN-RW-RBWM",init:function(t){return new i(t)}},HSBC_utils.registerComponent(o)},9218:(t,e,n)=>{"use strict";var i,o,r,a,s,l,u,c,h=n(7279);function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function d(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==f(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===f(o)?o:String(o)),i)}var o}i=Bootstrap.jQuery,o="option:selected",r="recent-articles",a={common:{tiles:"O-MASTERTILE-DEV",grid:"sm-12 md-6 lg-3"},featured:{tiles:"O-MASTERTILE-DEV",grid:"sm-12 md-6"}},s="empty-results",l="all",u=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.APP=n,this.$el=i(e),this.$articlesDataSource=this.$el.find(".articles-data-source"),this.$wrapper=this.$el.find(".recent-articles-wrapper"),this.$pagination=this.$el.find(".generic-pagination"),this.$customSelect=this.$el.find("select.A-FSSINGSEL-RW-ALL"),this.prepare(),this.init(),this.bindUiEvents()}var e,n;return e=t,(n=[{key:"prepare",value:function(){this.setData(),this.setMustacheTemplates(),this.articles.length>0?(this.$el.removeClass(s),this.prepareSettings()):this.$el.addClass(s)}},{key:"prepareSettings",value:function(){var t=this;"topFour"===this.displayMode?(this.articlesPerPage={first:4,any:4},this.articleRowsMap={first:[4,0,0]},this.selectedCategory=l,this.$pagination.hide()):(this.articlesPerPage={first:10,any:12},this.articleRowsMap={first:[2,4,4],any:[4,4,4]},this.selectedCategory=this.$customSelect.length>0?this.$customSelect.find(o).val():l,this.$customSelect.on("change",(function(){return t.setSelectedCategory()})))}},{key:"setData",value:function(){this.articles=this.$articlesDataSource.data("source")||[],this.categories=this.$articlesDataSource.data("tag-names"),this.displayMode=this.$articlesDataSource.data("display-mode"),this.$articlesDataSource.remove(),this.filterOutdatedArticles(),this.setArticlesDate()}},{key:"setArticlesDate",value:function(){this.articles.forEach((function(t){t.publishDate&&(t.date=moment(t.publishDate,"lll").fromNow())}))}},{key:"filterOutdatedArticles",value:function(){var t=this;this.articles.filter((function(e){return!e.publishDate||e.publishDate&&t.isArticleDateValid(e.publishDate,6)}))}},{key:"isArticleDateValid",value:function(t,e){var n=new Date,i=n.setMonth(n.getMonth()-e);return new Date(t).getTime()>i}},{key:"init",value:function(){this.currentPage=1,this.setFilteredArticles(),this.initPagination(),this.render()}},{key:"setFilteredArticles",value:function(){var t=this;this.filteredArticles=this.articles.filter((function(e){return t.isInSelectedCategory(e)}))}},{key:"setSelectedCategory",value:function(){var t=this.$customSelect.find(o).val();this.selectedCategory!==t&&(this.selectedCategory=t,this.init())}},{key:"initPagination",value:function(){var t=this.getPageNumber();this.paginationObject?(this.paginationObject.elNum=t,this.paginationObject.currentEl=this.currentPage):this.paginationObject=new h.t(this.$pagination,t,this.currentPage),t>0?(this.paginationObject.initElements(),this.bindPaginationUIEvents()):this.paginationObject.destroy()}},{key:"getPageNumber",value:function(){var t=this.filteredArticles.length,e=t<this.articlesPerPage.first?"first":"any";return Math.ceil((t-this.articlesPerPage.first)/this.articlesPerPage[e])+1}},{key:"bindUiEvents",value:function(){var t=this;i(window).on("resize",(function(){t.paginationObject.getPaginationControls()&&t.bindPaginationUIEvents()}))}},{key:"bindPaginationUIEvents",value:function(){var t=this;this.paginationObject.getPaginationControls().on("click",(function(e){t.currentPage=i(e.target).data("page"),t.render(),t.scrollToTop(),t.bindPaginationUIEvents()}))}},{key:"scrollToTop",value:function(){window.scrollTo(0,this.$el.offset().top-function(){return this.APP.globalComponents.headerController.calculateHeaderHeight(this.$el)}())}},{key:"render",value:function(){var t=this,e=1===this.currentPage;this.$wrapper.empty(),this.getArticleRows().forEach((function(n,i){var o=e&&2===t.articleRowsMap.first[i]?a.featured:a.common;t.$wrapper.mustache(r,{articles:n,classes:o})}))}},{key:"getArticleRows",value:function(){var t=1===this.currentPage?"first":"any",e=this.articlesPerPage.first+this.articlesPerPage[t]*(this.currentPage-2),n=e+this.articlesPerPage[t],i=this.filteredArticles.filter((function(t,i){return i>=e&&i<n})),o=[];return this.articleRowsMap[t].forEach((function(t){o.push(i.filter((function(e,n){return n<t}))),i.splice(0,t)})),o}},{key:"setMustacheTemplates",value:function(){i.Mustache.add(r,this.$el.find(".".concat(r)).html())}},{key:"isInSelectedCategory",value:function(t){return-1!==t.categories.indexOf(this.selectedCategory)&&t.categories.length||this.selectedCategory===l}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),c={name:"recent-articles",selector:".O-RCNART-RW-RBWM",init:function(t,e){return new u(t,e)}},i(window).on("load",(function(){return HSBC_utils.registerComponent(c)}))},9250:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,n){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(r)?r:String(r)),o)}var r}var n,i,o;n=Bootstrap.jQuery,i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=n(e),this.$introSection=this.$el.parents(".intro-section"),this.$heroSearchBox=this.$el.find('input[type="search"]'),this.$clearCircle=this.$el.find(".A-BTNCLR-RW-DEV"),this.bindUIEvents(),this.manageClearCircleVisibility(),this.updateIntroSection()}var i,o;return i=t,(o=[{key:"bindUIEvents",value:function(){var t=this;this.$clearCircle.on("click",(function(){t.clearHeroSearchBox(),t.manageClearCircleVisibility()})),this.$heroSearchBox.on("input",(function(){return t.manageClearCircleVisibility()})),n(window).on("load",(function(){return t.manageClearCircleVisibility()}))}},{key:"clearHeroSearchBox",value:function(){this.$heroSearchBox.val("").focus()}},{key:"isSearchBoxEmpty",value:function(){return!this.$heroSearchBox.val().length}},{key:"manageClearCircleVisibility",value:function(){var t=this.isSearchBoxEmpty()?"none":"inline-block";this.$clearCircle.css("display",t)}},{key:"updateIntroSection",value:function(){this.$introSection.addClass("hero-with-search")}}])&&e(i.prototype,o),Object.defineProperty(i,"prototype",{writable:!1}),t}(),o={name:"herowithseach",selector:".O-HEROBANWSRCH-RW-DEV",init:function(t){return new i(t)}},HSBC_utils.registerComponent(o)},6806:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{G:()=>a});var r=Bootstrap.jQuery,a=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.config=e||{},this.resultsPageSize=n,this.currentId=0}var e,n;return e=t,(n=[{key:"getSuggestions",value:function(t){var e=this,n=r.Deferred(),i=this.config.suggestionsEndpointURL,o=t.query,a=this.getNextId();if(i&&o&&o.trim()){var s={q:o.trim(),size:4};this.getRequest(i,s).done((function(t){if(a===e.currentId){var i=t.suggest.suggestions.map((function(t){return t.suggestion}));n.resolve(i)}})).fail(n.reject)}else n.resolve([]);return n.promise()}},{key:"getNextId",value:function(){var t=0;return Number.isFinite(this.currentId)&&(this.currentId+=1,t=this.currentId),t}},{key:"getSearchResults",value:function(t){var e=this,n=r.Deferred(),i="(and '".concat(t.query,"' ").concat("(not url:'dcc-configuration') (not url:'configuration header-and-footer') (not url:'configuration modals') (not url:'forms-configuration') (not url:'configuration entities') (not url:'messages') (not url:'vam-messages')",")");if(i&&i.trim()){var o=this.config.endpointURL,a=parseInt(t.page,10),s=!Number.isNaN(a)&&a>1?(a-1)*this.resultsPageSize:0,l={q:i.trim(),"q.parser":"structured",size:this.resultsPageSize,start:s};this.getRequest(o,l).done((function(o){n.resolve({results:e.formatSearchRequest(i,o),params:t})})).fail(n.reject)}else n.resolve([]);return n.promise()}},{key:"formatSearchRequest",value:function(t,e){return{queryString:t,numberOfResults:e.hits.found,rows:e.hits.hit.map((function(t){return{url:t.fields.url,title:t.fields.title,summary:t.fields.description}}))}}},{key:"getRequest",value:function(t,e){return r.ajax({method:"GET",url:t,data:e})}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},4622:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{a:()=>a});var r=jQuery,a=function(){function t(e,n,i){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.paramConfig=this.objectToKeyValuePairs(e),this.pageNameBuilder=n||function(t,e){return"".concat(t,": ").concat(e)},this.changePageStateHandler=i?[i]:[],this.currentState=this.readAllParams(),r(window).on("popstate",(function(t){o.currentState=o.readAllParams(),o.changePageStateHandler.forEach((function(t){return t(r.extend({},o.currentState))}))}))}var e,n;return e=t,(n=[{key:"readAllParams",value:function(){var t=this;return this.paramConfig.map((function(e){return[e[0],t.parseParameter(e[1])]})).reduce((function(t,e){return t[e[0]]=e[1],t}),{})}},{key:"parseParameter",value:function(t){var e=HSBC_utils.getUrlParam(t,location.search);return e?e.replace("+"," "):null}},{key:"updateParameter",value:function(t,e){history&&history.pushState&&(history.pushState("",this.pageNameBuilder(t,e),"?".concat(t,"=").concat(encodeURIComponent(e))),this.currentState=this.readAllParams())}},{key:"objectToKeyValuePairs",value:function(t){return Object.keys(t).map((function(e){return[e,t[e]]}))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},8677:(t,e,n)=>{"use strict";n.d(e,{U:()=>l});var i=n(8654),o=n(1335);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===r(o)?o:String(o)),i)}var o}var s=Bootstrap.jQuery,l=function(){function t(e,n,i){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=s(e),this.config=s(".O-SRCHRES-RW-RBWM [data-config]").data("config"),this.$searchInput=this.$el.find('input[type="search"]'),this.$tagsInput=this.$el.find('input[type="hidden"]'),this.$form=this.$el.find("form"),this.onSubmit=n,this.notInteracted=!0,this.trackFirstInteraction(),this.setInputMaxLength(),this.disableAutocomplete(),this.suggestions=new o.T(this.$el,this.config),this.$el.find("form").on("submit",(function(t){t.preventDefault(),r.handleSubmit()})),this.setSearchField(i),this.trigger="free text"}var e,n;return e=t,(n=[{key:"trackFirstInteraction",value:function(){var t=this;this.$searchInput.on("focus",(function(e){t.notInteracted&&(t.notInteracted=!1,i.j.trackEventWithInheritance({event_category:"tool",event_subcategory:"search",event_action:"start",tool_name:"internal search",tool_type:"search",tool_event:"interaction"}))}))}},{key:"setInputMaxLength",value:function(){this.$searchInput.attr("maxlength",168)}},{key:"disableAutocomplete",value:function(){this.$searchInput.attr("autocomplete","off")}},{key:"handleSubmit",value:function(){var t=this.$searchInput.val();this.validateEmpty(t)?this.onSubmit(t):this.setSearchField("")}},{key:"setSearchField",value:function(t){this.$searchInput.val(t),this.$searchInput.attr("aria-controls","search-results-container")}},{key:"setTrigger",value:function(t){this.trigger=t}},{key:"updateTags",value:function(t){this.$tagsInput.val(t)}},{key:"validateEmpty",value:function(t){return!!(t=t||"").trim().length}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},1335:(t,e,n)=>{"use strict";n.d(e,{T:()=>c});var i=n(7026);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===o(r)?r:String(r)),i)}var r}var a="hidden",s="search-suggestion-template",l=HSBC_utils.keyCodes,u=Bootstrap.jQuery,c=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=e,this.config=n,this.setUpGlobalSettings(),this.$suggestions=this.$el.find(".search-suggestions"),this.$suggestionList=this.$suggestions.find(".suggestion-list"),this.$searchField=this.$el.find(".search-form .input"),this.$suggestionsTotal=this.$el.find(".suggestions-total"),this.$helper=this.$el.find(".search-suggestions-helper"),this.searchService=new i.o(this.config),this.results=[],this.triggered=!1,this.setMustacheTemplates(),this.bindUIEvents()}var e,n;return e=t,(n=[{key:"bindUIEvents",value:function(){var t=this;this.$searchField.on("input",(function(){return t.resolveSuggestions()})),u(window).on("click",(function(e){u(e.target).parents(".search-panel").length||t.removeSuggestions()}))}},{key:"resolveSuggestions",value:function(){var t=this;this.triggered=!1,this.searchService.getSuggestions({query:this.$searchField.val()}).done((function(e){t.results=e||[],t.results.length?t.showSuggestions():(t.$helper.empty().html(0),t.hideSuggestions())}))}},{key:"setUpGlobalSettings",value:function(){this.globalSettings=u(document.body).data("global-settings")}},{key:"fetchTotalSuggestionsAllyText",value:function(){return this.globalSettings&&this.globalSettings.totalSuggestions?this.globalSettings.totalSuggestions:""}},{key:"showSuggestions",value:function(){this.$suggestions.removeClass(a),this.$helper.empty().html(this.results.length),this.render()}},{key:"render",value:function(){var t=this;this.$suggestionList.empty(),this.results.forEach((function(e){return t.$suggestionList.mustache(s,{text:e})})),this.$suggestionsTotal.html("".concat(this.results.length," ").concat(this.fetchTotalSuggestionsAllyText())),this.$suggestionItems=this.$suggestionList.find(".suggestion-item"),this.bindSuggestionsUIEvents()}},{key:"bindSuggestionsUIEvents",value:function(){var t=this;this.$suggestionItems.on("click",(function(e){return t.handleSuggestionChoice(u(e.target))})).on("keydown",(function(e){var n=e.keyCode;n!==l.ENTER&&n!==l.SPACE||t.handleSuggestionChoice(u(e.target))})).on("focusout",(function(e){u(e.relatedTarget).hasClass("suggestion-item")||t.hideSuggestions()}))}},{key:"handleSuggestionChoice",value:function(t){var e=t.text();this.hideSuggestions(),this.triggered=!0,this.$searchField.val(e)}},{key:"hideSuggestions",value:function(){this.removeSuggestions(),this.$searchField.focus()}},{key:"removeSuggestions",value:function(){this.$suggestions.addClass(a)}},{key:"setMustacheTemplates",value:function(){u.Mustache.add(s,this.$el.find(".".concat(s)).html())}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},3253:(t,e,n)=>{"use strict";var i,o,r,a,s,l,u=n(7279),c=n(8654),h=n(7026),f=n(8677),d=n(4622);function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function m(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==p(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===p(o)?o:String(o)),i)}var o}i=Bootstrap.jQuery,o={resultsPageSize:8,moduleName:"searchRender",moduleSelector:".O-SRCHRES-RW-RBWM",moduleSearchField:".O-HEROBANWSRCH-RW-DEV"},r={spinner:"search-spinner",resultsNumber:"search-results-number",result:"search-result",noResults:"search-no-results",spellingSuggestion:"search-spelling-suggestion"},a={query:"q",tags:"tags"},s=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=i(e),this.queryStringState=new d.a(a,this.buildSearchName.bind(this),this.updateSearchState.bind(this)),this.searchField=new f.U(i(o.moduleSearchField),this.onSubmit.bind(this),this.queryStringState.currentState.query),this.config=this.$el.find("[data-config]").data("config"),this.serverErrorPageUrl=this.$el.find("[data-server-error-page-url]").data("server-error-page-url"),this.$pagination=this.$el.find(".generic-pagination"),this.$results=this.$el.find(".search-results"),this.resultsPageSize=n||o.resultsPageSize,this.$spellingSuggestionContainer=this.$el.find(".search-spelling-suggestion-container"),this.searchService=new h.o(this.config,this.resultsPageSize),i(window).on("load",(function(){r.setMustacheTemplates(),r.displayPageResult(r.queryStringState.currentState.query,1)}))}var e,n;return e=t,(n=[{key:"buildSearchName",value:function(t,e){return"Search: ".concat(e)}},{key:"updateSearchState",value:function(t){this.displayPageResult(t.query,t.page||0),this.searchField.setSearchField(t.query)}},{key:"setMustacheTemplates",value:function(){var t=this;i.Mustache.options.warnOnMissingTemplates=!0,Object.keys(r).forEach((function(e){var n=r[e],o=t.$el.find(".".concat(n));i.Mustache.add(n,o.html())}))}},{key:"displaySpinner",value:function(){this.$results.empty().mustache(r.spinner,{})}},{key:"displayPageResult",value:function(t,e){var n=this,i={page:e||1,query:t,requiredfields:this.getRequiredFields()};this.searchField.updateTags(i.requiredfields),i.query&&(this.displaySpinner(i.query),this.searchService.getSearchResults(i).done((function(e){var i=e.results.numberOfResults;n.renderSpellingSuggestion(e.results),0===i?n.renderNoResults({query:e.params.query}):(n.renderSearchResults(e),n.$resultItemLink=n.$el.find(".search-result-item a[data-result-position]"),n.trackResultClickEvent(e),i>n.resultsPageSize?n.renderSearchPagination(e).done((function(e){return n.displayPageResult(t,e.page)})):n.removePagination()),n.trackSearchEvent(e),n.rememberSuggestionOrEmpty(window.sessionStorage,n.suggestionWordOrEmpty(e)),n.searchField.setTrigger("free text")})).fail((function(){return n.redirectToServerErrorPage()})))}},{key:"trackSearchEvent",value:function(t){c.j.trackEventWithInheritance({event_category:"tool",event_subcategory:"search",event_action:"complete",event_content:"search input type: ".concat(this.searchField.suggestions.triggered?"autofill":"free text"),tool_name:"internal search",tool_type:"search",search_results:t.results.numberOfResults,search_term:t.params.query,form_field_1:"page number: ".concat(t.params.page),tool_event:"completed"})}},{key:"trackResultClickEvent",value:function(t){this.$resultItemLink.on("click keydown",(function(e){"click"!==e.type&&e.keyCode!==keyCodes.ENTER||c.j.trackEventWithInheritance({event_category:"tool",event_subcategory:"search",event_action:"result-click",tool_name:"internal search",tool_type:"search",search_results:t.results.numberOfResults,search_result_position:i(e.currentTarget).attr("data-result-position"),search_term:t.params.query})}))}},{key:"rememberSuggestionOrEmpty",value:function(t,e){return t.setItem(o.spellingSuggestion,e)}},{key:"rememberedSuggestionOrEmpty",value:function(t){return t.getItem(o.spellingSuggestion)||""}},{key:"suggestionWordOrEmpty",value:function(t){return t&&t.results&&t.results.suggestion?t.results.suggestion:""}},{key:"previousPageOrRollBackToCurrent",value:function(t){return t.referrer||t.URL}},{key:"emptyResultSetAndNoSuggestions",value:function(t){return!(t&&t.results&&(t.results.numberOfResults||t.results.suggestion))}},{key:"setCountOfSearchesPerformed",value:function(t,e){t.setItem(o.moduleName,e)}},{key:"countOfSearchesPerformed",value:function(t){var e=t.getItem(o.moduleName);return e>0?e:0}},{key:"redirectToServerErrorPage",value:function(){document.location=this.serverErrorPageUrl}},{key:"renderNoResults",value:function(t){this.$results.empty().mustache(r.noResults,t),this.$results.find(".no-results").removeClass("hidden"),this.removePagination()}},{key:"removePagination",value:function(){this.pagination&&this.pagination.destroy()}},{key:"renderSpellingSuggestion",value:function(t){var e=this;this.$spellingSuggestionContainer.empty(),t.suggestion&&(this.$spellingSuggestionContainer.mustache(r.spellingSuggestion,t),this.$el.find(".search-spelling-suggestion-link").on("click",(function(n){e.searchField.setSearchField(t.suggestion),e.searchField.setTrigger("autofill"),e.searchField.$form.trigger("submit"),n.preventDefault(),e.$spellingSuggestionContainer.empty()})))}},{key:"renderSearchResults",value:function(t){var e=this;this.$results.empty().mustache(r.resultsNumber,{count:t.results.numberOfResults}),i(t.results.rows).each((function(t,n){e.$results.mustache(r.result,{url:n.url,title:n.title,screenReaderText:n.screenReaderText||"",summary:n.summary,resultPosition:t+1})})),this.$results.find("a").first().focus()}},{key:"renderSearchPagination",value:function(t){var e=this.countOfPages(t.results.numberOfResults,o.resultsPageSize),n=t.params.page||1,r=i.Deferred();return this.pagination=new u.t(this.$pagination,e,n),this.pagination.getPaginationControls().on("click",(function(e){r.resolve(i(e.target).data(t.page)),e.preventDefault()})),r.promise()}},{key:"countOfPages",value:function(t,e){return Math.ceil(t/e)}},{key:"onSubmit",value:function(t){this.queryStringState.updateParameter("q",t),this.displayPageResult(t,1)}},{key:"getTags",value:function(){return this.queryStringState.currentState.tags}},{key:"getRequiredFields",value:function(){var t=this.getTags();if(t)return"tag:".concat(t)}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),l={name:"search-render",selector:".O-SRCHRES-RW-RBWM",init:function(t){return new s(t)}},HSBC_utils.registerComponent(l)},7026:(t,e,n)=>{"use strict";n.d(e,{o:()=>a});var i=n(6806);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===o(r)?r:String(r)),i)}var r}var a=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e&&e.aws&&(this.searchService=new i.G(e,n))}var e,n;return e=t,(n=[{key:"getSuggestions",value:function(t){return this.searchService.getSuggestions(t)}},{key:"getSearchResults",value:function(t){return this.searchService.getSearchResults(t)}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},3738:(t,e,n)=>{"use strict";var i,o,r,a,s,l,u,c=n(747),h=n(6429);function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function d(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function m(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==f(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===f(o)?o:String(o)),i)}var o}i=Bootstrap.jQuery,o="is-active",r="hidden",a="data-desktop-target",s={pageHeader:".header",tabTitleItemLink:".tab-widget-link",tabTitleItemClass:".tab-widget-item",tabContent:".tab-widget-tab-content",tabsContainer:".tab-widget-tabs",tabListContainer:".tab-widget-list",headerToHideOnMobileTab:".sm-12[".concat("data-heading-level","]"),heading:".heading",dataTarget:"data-target"},l=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.APP=n,this.$el=i(e),this.findComponentElements(),this.smartTabsAlly=new c.B(this),this.$outerAnchorLinks=this.findTabsOuterAnchors(),HSBC_utils.isEditMode()||(this.viewportResolver(),this.hideDuplicatedHeadersOnMobileAndTablet(),this.bindUIEvents(),this.activeTab(window.location.hash),this.setHeight(this.$elementsWithInlineStyleHeight),this.tealiumObserver=new h.n(this.$tabsMenuLinks,{event_type:"click",event_category:"content",event_action:"tab",event_content:function(t){return decodeURI(i(t).attr("href")||i(t).parents(".A-EXPCNT-RW-RBWM").siblings(".anchor").attr("id")).replace("#","")}}))}var e,n;return e=t,(n=[{key:"setAriaSelectedToTabPanel",value:function(t){for(var e=0;e<this.$tabsMenuLinks.length;e++)this.$tabsMenuLinks[e].setAttribute("aria-selected","false"),this.$tabsMenuLinks[e].setAttribute("aria-expanded","false");t.attr("aria-selected","true"),t.attr("aria-expanded","true")}},{key:"findComponentElements",value:function(){this.$tabsMenuItem=this.$el.find(s.tabTitleItemClass),this.$tabsMenuLinks=this.$el.find(s.tabTitleItemLink),this.$tabsContent=this.$el.find(s.tabContent),this.$tabsContainer=this.$el.find(s.tabsContainer),this.$elementsWithInlineStyleHeight=this.$tabsContent.find("[style*='height']"),this.$tabListContainer=this.$el.find(s.tabListContainer)}},{key:"activeTab",value:function(t){var e=this.$tabsMenuItem.find('a[data-target="'.concat(t,'"]'));e.length&&(this.setAriaSelectedToTabPanel(e),this.togglePanel(e),e.focus())}},{key:"findTabsOuterAnchors",value:function(){var t=[];return this.$tabsMenuLinks.each((function(e,n){var o=i(n).attr(s.dataTarget),r=i("a:not(".concat(s.tabTitleItemLink,')[href="').concat(o,'"]'));t=[].concat(d(t),d(r.toArray()))})),i(t)}},{key:"bindUIEvents",value:function(){var t,e=this;this.smartTabsAlly.bindUIEvents(),this.$tabsMenuItem.find("a").on("click",(function(t){var n=i(t.target),o=n.attr(s.dataTarget);e.activeTab(o),n.focus(),t.preventDefault()})),i(window).on("resize",(function(){clearTimeout(t),t=setTimeout((function(){e.viewportResolver(),e.regenerateDesktopViewport(),e.setHeight(e.$elementsWithInlineStyleHeight)}),250)}))}},{key:"togglePanel",value:function(t){var e=t.attr(s.dataTarget),n=this.$el.find(e);t.hasClass(o)||(this.cleanElements(),this.setSelectedElement(t,n))}},{key:"cleanElements",value:function(){this.$tabsMenuLinks.removeClass(o),this.$tabsContent.addClass(r)}},{key:"setSelectedElement",value:function(t,e){t.addClass(o),e.removeClass(r)}},{key:"setHeight",value:function(t){t.height("auto")}},{key:"hideDuplicatedHeadersOnMobileAndTablet",value:function(){i(this.$el.find(s.headerToHideOnMobileTab)).each((function(t,e){var n=i(e),o=n.attr("data-heading-level");i(n.find("".concat(o).concat(s.heading)).first()).parent().addClass("hide-on-mobile-and-tablet")}))}},{key:"viewportResolver",value:function(){HSBC_utils.matchMedia.desktop?this.$tabsContent.each((function(t,e){var n=i(e),o=n.attr(a);o&&n.attr("id",o)})):this.$tabsContent.each((function(t,e){var n=i(e),o=n.attr("id");o&&(n.attr(a,o),n.attr("id",""))}))}},{key:"regenerateDesktopViewport",value:function(){if(HSBC_utils.matchMedia.desktop){var t=this.$tabsMenuItem.find("".concat(s.tabTitleItemLink,'[data-target="').concat(window.location.hash,'"]')),e=this.$tabsMenuItem.find("".concat(s.tabTitleItemLink,".").concat(o)),n=this.$tabsMenuItem.find(s.tabTitleItemLink).first();t.length?n=t:e.length&&(n=e),this.cleanElements(),this.togglePanel(n)}}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),u={name:"Smart Horizontal Tabs",selector:".O-HRZTAB-RW-RBWM",init:function(t,e){return new l(t,e)}},HSBC_utils.registerComponent(u)},747:(t,e,n)=>{"use strict";n.d(e,{B:()=>u});var i=n(7856),o=n.n(i);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===r(o)?o:String(o)),i)}var o}var s=HSBC_utils.keyCodes,l=Bootstrap.jQuery,u=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=e.$el,this.context=e,this.ariaSelectedfirstchild()}var e,n;return e=t,(n=[{key:"bindUIEvents",value:function(){var t=this;this.context.$tabsMenuItem.find("a").on({keydown:function(e){t.catchDataTarget(e),t.keyboardNavigationMenu(e)}}),this.context.$tabsContainer.on({keydown:function(e){t.keyboardNavigationContainer(e)}}),this.context.$tabsContent.on({keydown:function(e){t.keyboardNavigationContent(e)}})}},{key:"changeAriaSelectState",value:function(t){var e=l(t.target);this.context.setAriaSelectedToTabPanel(e)}},{key:"changeAriaHiddenTabindexState",value:function(t){var e=l(t.target),n=o().sanitize(e.attr("data-target"));this.context.$tabsContent.attr({"aria-hidden":!0}),l(n).attr({"aria-hidden":!1})}},{key:"ariaSelectedfirstchild",value:function(){this.context.$tabsMenuItem.first().find("a").attr("aria-selected",!0)}},{key:"getTargetFocus",value:function(t){var e=o().sanitize(t);l('[data-target="#'.concat(e,'"]')).focus()}},{key:"goBackToTabMenuFromLastChild",value:function(t){var e=l(t.target),n=o().sanitize(e.closest(this.context.$tabsContent).attr("id"));e.closest(this.context.$tabsContent).find(HSBC_utils.focusables.join()).first().is(":focus")&&(this.context.$tabsContainer.attr("tabindex",-1),this.getTargetFocus(n),t.preventDefault())}},{key:"focusTabPanel",value:function(){this.context.$tabsContainer.attr("tabindex",0)}},{key:"goBackToSelectedTab",value:function(t){var e=l(t.target).find(this.context.$tabsContent).not(".hidden").attr("id");this.getTargetFocus(e),t.preventDefault()}},{key:"goBackToSelectedTabFromFirstChild",value:function(t){var e=l(t.target),n=o().sanitize(e.find(this.context.$tabsContent).not(".hidden").attr("id"));e.closest(this.context.$tabsContent).find(HSBC_utils.focusables.join()).length<1&&t.preventDefault(),this.context.$tabsContainer.attr("tabindex",-1),this.getTargetFocus(n)}},{key:"keyboardNavigationMenu",value:function(t){var e=t.keyCode,n=e===s.ENTER,i=e===s.SPACE;(n||i)&&(this.changeAriaSelectState(t),this.changeAriaHiddenTabindexState(t),this.focusTabPanel(),t.preventDefault())}},{key:"keyboardNavigationContent",value:function(t){var e=t.keyCode,n=t.shiftKey,i=e===s.ESC;e===s.TAB&&n&&this.goBackToTabMenuFromLastChild(t),i&&this.goBackToSelectedTab(t)}},{key:"keyboardNavigationContainer",value:function(t){var e=t.keyCode,n=t.shiftKey;e===s.TAB&&n&&this.goBackToSelectedTabFromFirstChild(t)}},{key:"catchDataTarget",value:function(t){var e=l(t.target).attr("data-target"),n=t.keyCode,i=n===s.SPACE;(n===s.ENTER||i)&&(this.context.APP.globalComponents.anchorScrollController.anchorAction(e),this.changeAriaSelectState(t),t.preventDefault())}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},1144:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,n){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(r)?r:String(r)),o)}var r}var n=448,i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.smartImage=e,this.updateRatio(),this.bindUIEvents()}var i,o;return i=t,(o=[{key:"bindUIEvents",value:function(){var t,e=this,n=0;window.addEventListener("resize",(function(){clearTimeout(t),t=setTimeout((function(){var t=window.innerWidth;n!==t&&(n=t,e.updateRatio())}),250)}))}},{key:"updateRatio",value:function(){var t=this.smartImage.clientWidth,e=this.smartImage.clientHeight,i=this.smartImage.querySelector(".crh-media-aspect-ratio-container"),o=n/t;i.style.paddingTop=t<=n?"100%":e<=n&&t>n?"".concat(100*o,"%"):"56.25%"}}])&&e(i.prototype,o),Object.defineProperty(i,"prototype",{writable:!1}),t}();HSBC_utils.registerComponent({name:"smartImage",selector:".crh-smart-image--square",init:function(t){return new i(t)}})},9016:(t,e,n)=>{"use strict";var i,o,r,a,s,l=n(4792);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==u(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===u(o)?o:String(o)),i)}var o}n(8230),i=Bootstrap.jQuery,o="table.non-desktop tbody tr th",r="subheader",a="td-subheader",s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=i(e),this.$desktopTh=this.$el.find("table.desktop tbody tr th"),this.$nonDesktop=this.$el.find(o),this.$nonDesktopTr=this.$el.find("table.non-desktop tbody tr"),this.$nonDesktopSeparator=this.$el.find("tr.hidden-row"),HSBC_utils.isEditMode()||(this.tablesAlly=new l.T(this)),this.removeAdditionalSpaces(),this.applyHeadingScopeAttribute(),this.subheaderBackground()}var e,n;return e=t,(n=[{key:"subheaderBackground",value:function(){this.$el.find(this.$desktopTh).length>0?(this.$nonDesktop.first().addClass(r),this.$nonDesktopTr.first().find("td").addClass(a),this.$nonDesktopSeparator.next().find(i("th")).addClass(r),this.$nonDesktopSeparator.next().find(i("td")).addClass(a)):this.$el.find(i(o)).first().removeClass(r)}},{key:"removeAdditionalSpaces",value:function(){this.$el.find("td").each((function(t,e){var n=i(e);n.html(n.html().replace(/&nbsp;/g," ").trim())}))}},{key:"applyHeadingScopeAttribute",value:function(){this.$el.find("table.desktop th:not([scope])").attr("scope","col")}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),HSBC_utils.registerComponent({name:"tableinsert",selector:".M-TABINS-ART-DEV",init:function(t){return new s(t)}})},9243:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,n){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(r)?r:String(r)),o)}var r}var n,i,o,r;n=Bootstrap.jQuery,i=n(window),o=n("html"),r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.isIE11()&&(this.$el=n(e),this.updateAllImagesHeight(),this.updateAllImagesHeightOnResize())}var r,a;return r=t,(a=[{key:"isIE11",value:function(){return o.hasClass("ie-11")}},{key:"updateAllImagesHeight",value:function(){var t=this;this.$el.find("img").each((function(e,n){t.updateImageHeight(n)}))}},{key:"updateAllImagesHeightOnResize",value:function(){i.on("resize",this.updateAllImagesHeight.bind(this))}},{key:"updateImageHeight",value:function(t){var e=n(t);e.height("").height(e.height())}}])&&e(r.prototype,a),Object.defineProperty(r,"prototype",{writable:!1}),t}(),n(window).on("load",(function(){return HSBC_utils.registerComponent({name:"mastertile-iefix",selector:".O-MASTERTILE-DEV",init:function(t){return new r(t)}})}))},5111:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{n:()=>a});var r=jQuery,a=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$=r||Bootstrap.jQuery,this.options={brightcoveDomain:"players.brightcove.net",accountId:"6178286542001",selectorPart:"default_default",brightcoveJsFileName:"index.min.js"},this.settings=this.$.extend({},this.options,n)}var e,n;return e=t,(n=[{key:"loadVideoJs",value:function(t){var e="//".concat(this.settings.brightcoveDomain,"/").concat(this.settings.accountId,"/").concat(this.settings.selectorPart,"/").concat(this.settings.brightcoveJsFileName);"function"==typeof t?this.$.getScript(e,t.bind(this)):this.$.getScript(e)}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},2997:(t,e,n)=>{"use strict";n.d(e,{f:()=>l});var i=n(5111),o=n(6429);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===r(o)?o:String(o)),i)}var o}var s=jQuery,l=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$=s||Bootstrap.jQuery,this.wrapper=e,this.options={accountId:"6178286542001",playerSelector:".brc-player",titleSelector:".title .A-TYPS5R-RW-DEV",dataAccountSelector:"[data-account]",dataAccountKey:"account"},this.settings=this.$.extend({},this.options,n),this.playerElement=this.$(this.wrapper).find(this.settings.playerSelector).get(0),this.fetchAccountId(),this.loadVideoJs()}var e,n,r;return e=t,r=[{key:"composeTimeData",value:function(t){return"seconds:".concat(Math.round(t.currentTime()),"|interval:").concat(Math.round(t.currentTime()/t.duration()*100))}}],(n=[{key:"fetchAccountId",value:function(){var t=this.$(this.wrapper).find(this.settings.dataAccountSelector).data(this.settings.dataAccountKey);this.settings.accountId=t||this.settings.accountId}},{key:"isLibLoaded",value:function(){return void 0!==window.videojs}},{key:"loadVideoJs",value:function(){var t=this;this.video=new i.n(this.wrapper,this.settings),this.isLibLoaded()?this.observeVideo():this.video.loadVideoJs((function(){t.observeVideo()}))}},{key:"observeVideo",value:function(){var e=this;videojs(this.playerElement).ready((function(){e.player=videojs(e.playerElement),e.tealiumObserverPlay=new o.n(e.player,{event_type:"play",event_action:"play",tealium_event:"link",event_category:"video",event_subcategory:"",event_content:function(){return e.$(e.wrapper).find(e.settings.titleSelector).text()},raw_datalayer:"3684v1"},{nativeObserver:!0}),e.tealiumObserverPause=new o.n(e.player,{event_type:"pause",event_action:"stop",tealium_event:"link",event_category:"video",event_subcategory:function(){return t.composeTimeData(e.player)},event_content:function(){return e.$(e.wrapper).find(e.settings.titleSelector).text()},raw_datalayer:"3684v2"},{nativeObserver:!0}),e.tealiumObserverResize=new o.n(e.player,{event_type:"playerresize",event_action:"size",tealium_event:"link",event_category:"video",event_subcategory:function(){return e.player.isFullscreen()?"fullscreen":"inpage"},event_content:function(){return e.$(e.wrapper).find(e.settings.titleSelector).text()},raw_datalayer:"3684v3"},{nativeObserver:!0}),e.tealiumObserverEnded=new o.n(e.player,{event_type:"ended",event_action:"action",tealium_event:"link",event_category:"video",event_subcategory:"ended",event_content:function(){return e.$(e.wrapper).find(e.settings.titleSelector).text()},raw_datalayer:"3684v4"},{nativeObserver:!0}),e.tealiumObserverSeeking=new o.n(e.player,{event_type:"seeking",event_action:"action",tealium_event:"link",event_category:"video",event_subcategory:"seeking",event_content:function(){return e.$(e.wrapper).find(e.settings.titleSelector).text()},raw_datalayer:"3684v4"},{nativeObserver:!0})}))}}])&&a(e.prototype,n),r&&a(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}()},7305:(t,e,n)=>{"use strict";var i=n(2997);HSBC_utils.registerComponent({name:"M-VIDINS-ART-DEV",selector:".M-VIDINS-ART-DEV",init:function(t){return new i.f(t)}})},5106:(t,e,n)=>{function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}var r,a,s,l,u,c,h,f,d,p,m;t=n.nmd(t),r=Bootstrap.jQuery,c={yes:'.amountError > .XfaCheckBox[data-id="1"] input',no:'.amountError > .XfaCheckBox[data-id="2"] input',inf:"#guideContainer-rootPanel-informationBanner___guide-item"},h={yes:'.stolen > .XfaCheckBox[data-id="1"] input',no:'.stolen > .XfaCheckBox[data-id="2"] input',inf:"#guideContainer-rootPanel-columncontrol___guide-item, #guideContainer-rootPanel-richtext_cardstolen___guide-item"},f={yes:'.hsbcATM > .XfaCheckBox[data-id="1"] input',no:'.hsbcATM > .XfaCheckBox[data-id="2"] input',atmIdField:"#guideContainer-rootPanel-guidetextbox_atmId___guide-item",financialInstField:"#guideContainer-rootPanel-guidetextbox_financialInstitution___guide-item",atmIdExpander:"#guideContainer-rootPanel-expander___guide-item",atmLocationHeading:"#guideContainer-rootPanel-heading___guide-item",streetAddressField:"#guideContainer-rootPanel-guidetextbox_streetAddress___guide-item",cityField:"#guideContainer-rootPanel-guidetextbox_city___guide-item",stateField:"#guideContainer-rootPanel-guidedropdownlist_state___guide-item",countryField:"#guideContainer-rootPanel-guidedropdownlist_country___guide-item",sequenceNumberField:"#guideContainer-rootPanel-guidenumericbox_sequence___guide-item",sequenceNumberExpander:"#guideContainer-rootPanel-expander_sequence___guide-item"},d={deposit:'.operation > .XfaCheckBox[data-id="1"] input',withdrawal:'.operation > .XfaCheckBox[data-id="2"] input',section:"#guideContainer-rootPanel-radiobutton_operation___guide-item",withdrawalAmountField:"#guideContainer-rootPanel-guidenumericbox_withdrawalAmount___guide-item",dispensedAmountField:"#guideContainer-rootPanel-guidenumericbox_dispensedAmount___guide-item",cashOrCheckSection:"#guideContainer-rootPanel-radiobutton_deposit___guide-item",depositAmountField:"#guideContainer-rootPanel-guidenumericbox_depositAmount___guide-item",creditAmountField:"#guideContainer-rootPanel-guidenumericbox_creditAmoount___guide-item"},p={container:".time-select",hour:".hour",minute:".minute",period:".period",inputName:"time"},m=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=r(e),this.$amountErrorYesButton=this.$el.find(c.yes),this.$amountErrorNoButton=this.$el.find(c.no),this.$amountErrorInf=this.$el.find(c.inf),this.$stolenYesButton=this.$el.find(h.yes),this.$stolenNoButton=this.$el.find(h.no),this.$stolenInf=this.$el.find(h.inf),this.$hsbcAtmYesButton=this.$el.find(f.yes),this.$hsbcAtmNoButton=this.$el.find(f.no),this.$atmIdField=this.$el.find(f.atmIdField),this.$financialInstField=this.$el.find(f.financialInstField),this.$atmIdExpander=this.$el.find(f.atmIdExpander),this.$atmLocationHeading=this.$el.find(f.atmLocationHeading),this.$streetAddressField=this.$el.find(f.streetAddressField),this.$cityField=this.$el.find(f.cityField),this.$stateField=this.$el.find(f.stateField),this.$countryField=this.$el.find(f.countryField),this.$sequenceNumberField=this.$el.find(f.sequenceNumberField),this.$sequenceNumberExpander=this.$el.find(f.sequenceNumberExpander),this.$cashOrCheckSection=this.$el.find(d.cashOrCheckSection),this.$depositAmountField=this.$el.find(d.depositAmountField),this.$creditAmountField=this.$el.find(d.creditAmountField),this.$depositButton=this.$el.find(d.deposit),this.$withdrawalButton=this.$el.find(d.withdrawal),this.$depositOrWithdrawalSection=this.$el.find(d.section),this.$withdrawalAmountField=this.$el.find(d.withdrawalAmountField),this.$dispensedAmountField=this.$el.find(d.dispensedAmountField);var n=this.$el.find(p.container);this.$hourSelect=n.find(p.hour),this.$minuteSelect=n.find(p.minute),this.$periodSelect=n.find(p.period),this.timeSomExpression=guidelib.runtime[p.inputName].somExpression,this.bindUIEvents()}var e,n;return e=t,(n=[{key:"showEl",value:function(t){t.css("display","block")}},{key:"hideEl",value:function(t){t.css("display","none")}},{key:"isRadioButtonChecked",value:function(t){return"checked"===t.attr("checked")}},{key:"isStolen",value:function(){this.isRadioButtonChecked(this.$stolenYesButton)?a=!0:this.isRadioButtonChecked(this.$stolenNoButton)&&(a=!1)}},{key:"isAmountError",value:function(){this.isRadioButtonChecked(this.$amountErrorYesButton)?s=!0:this.isRadioButtonChecked(this.$amountErrorNoButton)&&(s=!1)}},{key:"isHsbcAtm",value:function(){this.isRadioButtonChecked(this.$hsbcAtmYesButton)?l=!0:this.isRadioButtonChecked(this.$hsbcAtmNoButton)&&(l=!1)}},{key:"isDeposit",value:function(){this.isRadioButtonChecked(this.$depositButton)?u=!0:this.isRadioButtonChecked(this.$withdrawalButton)&&(u=!1)}},{key:"displayInformationWhenStolen",value:function(){a?this.showEl(this.$stolenInf):a||this.hideEl(this.$stolenInf)}},{key:"displayInformationWhenAmountError",value:function(){!1===a&&!1===s?this.showEl(this.$amountErrorInf):this.hideEl(this.$amountErrorInf)}},{key:"displayInformationWhenHsbcAtm",value:function(){l?(this.hideEl(this.$financialInstField),this.showEl(this.$atmIdField),this.showEl(this.$atmIdExpander),this.showEl(this.$atmLocationHeading),this.showEl(this.$streetAddressField),this.showEl(this.$cityField),this.showEl(this.$stateField),this.showEl(this.$countryField),this.showEl(this.$sequenceNumberField),this.showEl(this.$sequenceNumberExpander)):(this.hideEl(this.$atmIdField),this.hideEl(this.$atmIdExpander),this.hideEl(this.$sequenceNumberField),this.hideEl(this.$sequenceNumberExpander),this.showEl(this.$financialInstField),this.showEl(this.$atmLocationHeading),this.showEl(this.$streetAddressField),this.showEl(this.$cityField),this.showEl(this.$stateField),this.showEl(this.$countryField)),this.displayInformationWhenDepositOrWithdrawal()}},{key:"displayInformationWhenDepositOrWithdrawal",value:function(){this.hideEl(this.$depositOrWithdrawalSection),this.hideEl(this.$cashOrCheckSection),this.hideEl(this.$depositAmountField),this.hideEl(this.$creditAmountField),this.hideEl(this.$withdrawalAmountField),this.hideEl(this.$dispensedAmountField),l?(this.showEl(this.$depositOrWithdrawalSection),u?(this.showEl(this.$cashOrCheckSection),this.showEl(this.$depositAmountField),this.showEl(this.$creditAmountField)):void 0!==u&&(this.showEl(this.$withdrawalAmountField),this.showEl(this.$dispensedAmountField))):void 0!==l&&(this.showEl(this.$withdrawalAmountField),this.showEl(this.$dispensedAmountField))}},{key:"bindUIEvents",value:function(){var t=this;this.$stolenYesButton.change((function(){t.isStolen(),t.displayInformationWhenStolen(),t.displayInformationWhenAmountError()})),this.$stolenNoButton.change((function(){t.isStolen(),t.displayInformationWhenStolen(),t.displayInformationWhenAmountError()})),this.$amountErrorYesButton.change((function(){t.isAmountError(),t.displayInformationWhenAmountError()})),this.$amountErrorNoButton.change((function(){t.isAmountError(),t.displayInformationWhenAmountError()})),this.$hsbcAtmYesButton.change((function(){t.isHsbcAtm(),t.displayInformationWhenHsbcAtm()})),this.$hsbcAtmNoButton.change((function(){t.isHsbcAtm(),t.displayInformationWhenHsbcAtm()})),this.$depositButton.change((function(){t.isDeposit(),t.displayInformationWhenDepositOrWithdrawal()})),this.$withdrawalButton.change((function(){t.isDeposit(),t.displayInformationWhenDepositOrWithdrawal()}));var e=function(){var e=t.$hourSelect.val(),n=t.$minuteSelect.val(),i=t.$periodSelect.val();if(e&&n&&i){var o="".concat(e,":").concat(n).concat(i);guideBridge.setProperty([t.timeSomExpression],"value",[o])}};this.$hourSelect.change(e),this.$minuteSelect.change(e),this.$periodSelect.change(e)}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),t={name:"guideContainerForm",selector:".globalSmartAtmError #guideContainerForm",init:function(t){return new m(t)}},HSBC_utils.registerComponent(t)},9619:()=>{jQuery(window).on("load",(function(){HSBC_utils.isEditMode()||HSBC_utils.isPreviewMode()?setTimeout(HSBC_utils.init,300):HSBC_utils.initSegmentationFixInterval()})),HSBC_utils.init()},2726:()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,n){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(r)?r:String(r)),o)}var r}var n=jQuery,i=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.APP=i,this.$link=n(e),this.anchorId=this.APP.components.UrlHelper.getAnchorIDFromHTMLNodeHref(e);var o=!this.$link.hasClass("tab-widget-link");this.anchorId&&o&&this.bindUiEvents(this.anchorId)}var i,o;return i=t,(o=[{key:"uiClickEvent",value:function(t,e){"#"!==e?n(e).length&&(t.preventDefault(),this.APP.globalComponents.anchorScrollController.anchorAction(e)):t.preventDefault()}},{key:"bindUiEvents",value:function(t){var e=this;this.$link.on("click",(function(n){e.uiClickEvent(n,t)}))}}])&&e(i.prototype,o),Object.defineProperty(i,"prototype",{writable:!1}),t}();Bootstrap.jQuery(window).on("load",(function(){return HSBC_utils.registerComponent({name:"anchor",selector:'a[href*="#"]',init:function(t,e){return new i(t,e)}})}))},9287:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,n){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(r)?r:String(r)),o)}var r}var n,i,o;n=Bootstrap.jQuery,i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=n(e),this.$imageData=this.$el.find(".image-data"),this.imageLazyLoad()}var i,o;return i=t,(o=[{key:"imageLazyLoad",value:function(){var t=this,e=this.$imageData.attr("data-src");n(window).on("load",(function(){return t.$imageData.css("background-image",e)}))}}])&&e(i.prototype,o),Object.defineProperty(i,"prototype",{writable:!1}),t}(),o={name:"Background Image",selector:".background-image",init:function(t){this.backgroundImage=new i(t)}},HSBC_utils.registerComponent(o)},5775:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,n){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(r)?r:String(r)),o)}var r}var n,i,o;n=Bootstrap.jQuery,i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=n(e),this.$brandBarFont16=this.$el.find(".A-BBST16R-RW-ALL"),this.setClass()}var i,o;return i=t,(o=[{key:"setClass",value:function(){this.$brandBarFont16.addClass("firefoxFix")}}])&&e(i.prototype,o),Object.defineProperty(i,"prototype",{writable:!1}),t}(),o={name:"brandBar",selector:".O-BRBAR-RW-RBWM",init:function(t){return new i(t)}},HSBC_utils.isFirefox&&HSBC_utils.registerComponent(o)},749:(t,e,n)=>{"use strict";var i=n(5507),o=n(6429);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===r(o)?o:String(o)),i)}var o}!function(t){var e="expanded",n="exp-comparator",r="expander:AEMLayerChanged",s=".expander",l=".O-ADVEXP-RW-RBWM",u=HSBC_utils.keyCodes,c=function(){function c(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),this.APP=r,this.$el=t(e),this.$selectBar=this.$el.children(".dropdown"),this.$collapsibleEl=this.$el.children(".exp-content"),this.$expanderHeading=this.$selectBar.children(".dropdown-text"),this.$smallExpander=this.$el.hasClass("A-SMLEXP-RW-ALL"),this.isWrapper=this.$el.hasClass("A-WRAPPER-RW-ALL"),this.editMode=HSBC_utils.isEditMode();var a=this.$el.find(s).find(HSBC_utils.focusables.join());this.$focusableNodes=this.$collapsibleEl.find(HSBC_utils.focusables.join()).not(a),this.expanderAlly=new i.x(this),this.bindUiEvents(),this.setInitialState(),this.expanderAlly.setAccessibilityAttributes(this.isExpanded()),this.expanderAlly.removeScreenReaderText(),!this.$el.parents(l).length||this.$el.parents(".O-ACCRD-RW-RBWM").length||this.$selectBar.hasClass(n)||(this.tealiumObserver=new o.n(this.$selectBar,{event_type:"click",event_category:"content",event_action:"advance expander",event_content:function(e){return t(e).closest(l).children("div").children("div.anchor").attr("id")}}))}var h,f;return h=c,(f=[{key:"bindUiEvents",value:function(){var e=this;this.editMode||this.$selectBar.on("click",(function(){return e.toggle()})).on("keydown",(function(t){var n=t.keyCode,i=n===u.ENTER,o=n===u.SPACE;(i||o)&&(t.preventDefault(),e.toggle())})),this.$el.on(r,(function(){return e.setInitialState()})),t(window).on("resize",(function(){return e.expanderAlly.updateModulesAccessibility(e.isExpanded())}))}},{key:"setInitialState",value:function(){HSBC_utils.isEditMode()||this.$expanderHeading.hasClass(e)?this.expand():this.collapse()}},{key:"expand",value:function(){this.$expanderHeading.addClass(e),this.$collapsibleEl.addClass(e)}},{key:"collapse",value:function(){this.$expanderHeading.removeClass(e),this.$collapsibleEl.removeClass(e)}},{key:"isExpanded",value:function(){return this.$collapsibleEl.hasClass(e)}},{key:"toggle",value:function(){this.isExpanded()?this.collapse():(this.expand(),this.$selectBar.hasClass(n)||this.$collapsibleEl.focus()),this.styleSmallExpander(),this.expanderAlly.setAccessibilityAttributes(this.isExpanded())}},{key:"styleSmallExpander",value:function(){if(this.$smallExpander){var t=this.isExpanded()?"none":this.$selectBar.css("border");this.$selectBar.css("border-bottom",t)}}}])&&a(h.prototype,f),Object.defineProperty(h,"prototype",{writable:!1}),c}();function h(){t(s).trigger(r)}var f={name:"exp",selector:s,switchToEditHandler:h,switchToPreviewHandler:h,init:function(t,e){return new c(t,e)}};HSBC_utils.registerComponent(f)}(Bootstrap.jQuery)},5507:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{x:()=>s});var r=Bootstrap.jQuery,a="O-BRBAR-RW-RBWM",s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=e.$el,this.$selectBar=e.$selectBar,this.$collapsibleEl=e.$collapsibleEl,this.$focusableNodes=e.$focusableNodes,this.isExpandedByDefault=e.isExpandedByDefault,this.isExpanded=e.isExpandedByDefault,this.isWrapper=e.isWrapper,this.context=e,this.bindUiEvents()}var e,n;return e=t,(n=[{key:"bindUiEvents",value:function(){var t=this;r(window).on("resize",(function(){return t.updateModulesAccessibility()}))}},{key:"setTabIndexes",value:function(t){t&&this.$focusableNodes.removeAttr("tabindex")}},{key:"setAccessibilityAttributes",value:function(t){this.$collapsibleEl.attr("aria-hidden",!t),this.setTabIndexes(t),this.updateModulesAccessibility(t)}},{key:"removeScreenReaderText",value:function(){HSBC_utils.matchMedia.mobile||r(".wrapper-dropdown").eq(0).find(".visuallyhidden").text("")}},{key:"updateModulesAccessibility",value:function(t){this.isWrapper?this.updateWrapperAccessibility():this.updateExpanderAccessibility(t)}},{key:"updateExpanderAccessibility",value:function(t){HSBC_utils.matchMedia.mobile?this.setTabIndexes(this.isExpanded):(this.$selectBar.attr("tabindex",0),this.setTabIndexes(!0)),this.$selectBar.attr("aria-expanded",t)}},{key:"updateWrapperAccessibility",value:function(){!HSBC_utils.matchMedia.mobile||this.$collapsibleEl.hasClass("no-wrapper")?(this.$selectBar.removeAttr("tabindex"),this.$collapsibleEl.parents().eq(2).hasClass(a)&&this.$collapsibleEl.attr({"aria-hidden":!1})):(this.$selectBar.attr("tabindex",0),this.$collapsibleEl.parents().eq(2).hasClass(a)&&this.$collapsibleEl.attr({"aria-hidden":"true"!==this.$selectBar.attr("aria-expanded")}),this.isExpanded||this.setTabIndexes(!this.isExpanded))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},9543:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{X:()=>a});var r=HSBC_utils.keyCodes,a=(Bootstrap.jQuery,function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=e.$el,this.context=e,this.keyboardEvents()}var e,n;return e=t,(n=[{key:"ifIsOpenToggle",value:function(){this.context.isOpen&&this.context.toggleCustomSelectMenu()}},{key:"keyboardEvents",value:function(){var t=this,e=this.$el,n=this.$el.not(".disabled, .error").closest(".".concat("custom-select-container")),i=n.find(".".concat("custom-select-button")),o=n.find(".".concat("custom-select-menu-item"));e.on({change:function(){return t.context.updateSelectValue()},keyup:function(){t.context.updateSelectValue()}}),i.on({keydown:function(e){e.keyCode===r.SPACE||e.keyCode===r.ENTER?t.context.toggleCustomSelectMenu():e.keyCode===r.UP||e.keyCode===r.LEFT?(e.preventDefault(),t.context.focusSelectMenuItem("prev")):e.keyCode===r.DOWN||e.keyCode===r.RIGHT?(e.preventDefault(),t.context.focusSelectMenuItem("next")):(e.keyCode===r.ESC||i.is(":focus")&&e.keyCode===r.TAB&&e.shiftKey)&&t.ifIsOpenToggle()}}),o.on({keydown:function(e){e.keyCode===r.SPACE||e.keyCode===r.ENTER?(t.context.updateSelectValue(e.target),t.ifIsOpenToggle()):e.keyCode===r.UP||e.keyCode===r.LEFT?t.context.focusSelectMenuItem("prev"):e.keyCode===r.DOWN||e.keyCode===r.RIGHT?t.context.focusSelectMenuItem("next"):(e.keyCode===r.ESC||o.last().is(":focus")&&e.keyCode===r.TAB&&!e.shiftKey)&&t.ifIsOpenToggle()}})}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())},5347:(t,e,n)=>{"use strict";var i,o,r,a,s,l,u,c,h,f,d,p,m,y=n(9543);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function b(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==v(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===v(o)?o:String(o)),i)}var o}i=Bootstrap.jQuery,o="custom-select-button",r="custom-select-text",a="custom-select-container",s="custom-select-menu-container",l="custom-select-menu-item",u="custom-select-menu",c="is-active",h="selected",f="focused",d="select-text-",p=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=i(e),this.isOpen=!1,this.id=this.$el.attr("id").replace(/select-/,""),this.customSelectAlly=new y.X(this),this.createCustomSelectElements(),this.buildCustomSelect(),this.updateSelectValue(),this.customSelectAlly.keyboardEvents(),this.bindUIEvents()}var e,n;return e=t,(n=[{key:"createCustomSelectElements",value:function(){this.$customSelectButton=i("<div>",{tabindex:"0",role:"combobox",class:o,"aria-expanded":"false","aria-autocomplete":"list","aria-readonly":"true","aria-labelledby":this.$el.data("label"),"aria-describedby":d+this.id,"aria-activedescendant":d+this.id,"aria-owns":u}),this.$customSelectContainer=i("<div>",{class:a,tabindex:"-1"}),this.$customSelectIcon=i("<span>",{class:"custom-select-icon icon"}),this.$customSelectText=i("<span>",{class:r,id:d+this.id,"aria-hidden":"true","aria-disabled":"true"}),this.$customSelectMenu=i("<ul>",{class:u,"aria-hidden":"true",role:"listbox","aria-disabled":"false"})}},{key:"buildCustomSelect",value:function(){var t=this.$el.attr("class"),e=null;this.$el.wrap(this.$customSelectContainer),e=this.$el.closest(".".concat(a)),this.$customSelectButton.insertAfter(this.$el),this.$customSelectIcon.appendTo(this.$customSelectButton),this.$customSelectText.appendTo(this.$customSelectButton),this.$customSelectMenuContainer=i("<div>").append(this.$customSelectMenu),this.$customSelectMenuContainer.addClass(s),this.$customSelectMenuContainer.insertAfter(this.$customSelectButton),e.addClass(t),this.$el.addClass("replaced"),this.renderMenu()}},{key:"renderMenu",value:function(){var t=this,e=this.$el.find("option"),n=this.$el.prop("selectedIndex");i.each(e,(function(e,o){var r=i(o),a=i("<li>",{text:r.text(),tabindex:-1,role:"option","aria-selected":"false","aria-disabled":"false"});a.addClass(l),a.appendTo(t.$customSelectMenu),e===n&&a.addClass(h)}))}},{key:"updateSelectValue",value:function(t){var e,n=this.$el.find("option"),o=this.$el.closest(".".concat(a)),s=i(t),u=o.find(".".concat(l));void 0!==t&&(i.each(u,(function(t,e){var n=i(e);n.removeClass(h),n.removeClass(f),s.attr("aria-selected",!1)})),s.addClass(h),s.addClass(f),s.attr("aria-selected",!0),i.each(n,(function(t,e){var n=i(e);n.text()===s.text()?n.prop("selected",!0):n.prop("selected",!1)}))),e=o.find("option:selected",this.$el).text(),o.find(".".concat(r)).text(e)}},{key:"toggleCustomSelectMenu",value:function(){var t=this.$el.closest(".".concat(a)),e=t.find(".".concat(s)),n=t.find(".".concat(u)),h=n.find(".".concat(l)),d=t.find(".".concat(o)),p=d.find(".".concat(r)).text();e.hasClass(c)?(d.attr("aria-expanded","false"),n.attr("aria-hidden","true"),this.isOpen=!1,h.attr("tabindex","-1"),this.$customSelectButton.focus()):(d.attr("aria-expanded","true"),n.attr("aria-hidden","false"),this.isOpen=!0,h.attr("tabindex","0"),i.each(h,(function(t,e){var n=i(e);n.text()===p?(n.addClass(f),n.focus()):n.removeClass(f)}))),e.toggleClass(c),this.$el.change()}},{key:"focusSelectMenuItem",value:function(t){var e=null,n=this.$el.closest(".".concat(a)).find(".".concat(l)).filter(".".concat(f));"next"===t?e=n.next():"prev"===t&&(e=n.prev()),e.length&&(n.removeClass(f),e.addClass(f),e.focus(),this.isOpen||this.updateSelectValue(e))}},{key:"bindUIEvents",value:function(){var t=this,e=this.$el,n=this.$el.not(".disabled, .error").closest(".".concat(a)),r=n.find(".".concat(o)),s=n.find(".".concat(l));e.on("change",(function(){return t.updateSelectValue()})),r.on("click",(function(){return t.toggleCustomSelectMenu()})),s.on("click",(function(e){t.updateSelectValue(e.target),t.toggleCustomSelectMenu()})),i(document).on("click",(function(e){t.$customSelectButton.is(e.target)||t.$customSelectMenuContainer.is(e.target)||0!==t.$customSelectButton.has(e.target).length||0!==t.$customSelectMenuContainer.has(e.target).length||!t.isOpen||t.toggleCustomSelectMenu()}))}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),m={name:"fssingsel",selector:"select.A-FSSINGSEL-RW-ALL",init:function(t){return new p(t)}},HSBC_utils.registerComponent(m)},818:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{r:()=>l});var r=HSBC_utils.keyCodes,a=Bootstrap.jQuery,s={hide:"hidden",modalAnnouncement:"modal-announcement-sr-text"},l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=e.$el,this.context=e}var e,n;return e=t,(n=[{key:"bindUIEvents",value:function(){var t=this,e=this.context;this.$focusables=e.$modal.find(HSBC_utils.focusables.join()),e.$modal.on("keydown",(function(n){var i=a(document.activeElement),o=n.keyCode,l=o===r.ESC&&e.$modal.hasClass(s.isVisible),u=o===r.ENTER&&i.hasClass(s.closeTrigger),c=o===r.TAB;l||u?(n.preventDefault(),e.close()):c&&t.handleKeyPress(n)}))}},{key:"handleKeyPress",value:function(t){var e=this.context,n=document.activeElement,i=this.$focusables.first()[0],o=this.$focusables.last()[0];e.$modal.find(".".concat(s.modalAnnouncement)).addClass(s.hide),n!==o||t.shiftKey?n===i&&t.shiftKey&&(o.focus(),t.preventDefault()):(i.focus(),t.preventDefault())}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},9388:(t,e,n)=>{"use strict";var i,o,r,a,s,l,u,c,h,f=n(818);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function p(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==d(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===d(o)?o:String(o)),i)}var o}i=Bootstrap.jQuery,o="A-MODLNK-RW-ALL",r="A-MOD-RW-ALL",a="modal-overlay",s="is-visible",l=i("body"),u="data-modal-binded",c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$modal=null,this.bindUIEvents(),this.allyModule=new f.r(this)}var e,n;return e=t,(n=[{key:"bindUIEvents",value:function(){var t=this;l.attr(u)||(l.on("click",".".concat(o),(function(e){return t.linkClickHandler(e)})),l.on("modal:switchedToEdit",".".concat(o),(function(){return t.close()})),l.attr(u,!0))}},{key:"linkClickHandler",value:function(t){t.preventDefault();var e=i(t.target);e.hasClass(o)?this.$link=e:this.$link=e.closest(".".concat(o)),HSBC_utils.isEditMode()||this.getMarkup()}},{key:"getMarkup",value:function(){var t=this,e=this.$link.attr("href");e&&i.ajax({type:"GET",dataType:"HTML",url:e,success:function(e){t.setUpModalWindow(e),t.open()},error:function(t){return console.error(t)}})}},{key:"open",value:function(){var t=this.$closeTriggers.first();this.$modal.addClass(s).siblings().attr("aria-hidden","true"),setTimeout((function(){return t.focus()}),200)}},{key:"close",value:function(){this.$modal&&(this.$modal.find(".".concat("modal-announcement-sr-text")).removeClass("hidden"),this.$modal.removeClass(s).siblings().removeAttr("aria-hidden")),this.$link.focus()}},{key:"setUpModalWindow",value:function(t){var e=i(t).filter(".".concat(a));e.removeClass(s),l.append(e),this.$modal=l.children().last(".".concat(a)),this.cacheModalElements(),this.lateBindUIEvents()}},{key:"cacheModalElements",value:function(){this.$closeTriggers=this.$modal.find(".".concat("close-trigger"))}},{key:"lateBindUIEvents",value:function(){var t=this;this.$closeTriggers.on("click",(function(){return t.close()})),this.$modal.on("click",(function(e){var n=i(e.target);n.parents(".".concat(r)).length||n.hasClass(r)||t.close()})),this.allyModule.bindUIEvents()}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),h={name:"modal",selector:".A-MODLNK-RW-ALL[href*='/configuration/modals/'], .calculator-creator-v2-wrapper",init:function(t){return new c(t)},switchToEditHandler:function(){i(".".concat(o)).trigger("modal:switchedToEdit")}},HSBC_utils.registerComponent(h)},2489:(t,e,n)=>{"use strict";n.d(e,{N:()=>l});var i=n(6429);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===o(r)?r:String(r)),i)}var r}var a={selectors:{module:".M-COMPLEXPAG-DEV",button:"button:not([disabled])",link:"a",paragraphValue:".M-BASICPAG-DEV__label",dataLayerSelector:"[data-pagination-id]",formFieldSelector:"[data-form-field]",numericLink:"a.M-NUMERICPAG-DEV__element-button",numericPagination:".M-NUMERICPAG-DEV__controls",basicPagination:".M-BASICPAG-DEV__buttons-wrapper",placeholder:".A-PLACEHOLDERPAG-DEV"},dataKeys:{href:"href"}},s=Bootstrap.jQuery,l=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$pagination=s(e),this.settings=s.extend({},a,n),this.$numericPagination=this.$pagination.find(a.selectors.numericPagination),this.$basicPagination=this.$pagination.find(a.selectors.basicPagination),this.numericPaginationLink=this.$pagination.find("".concat(a.selectors.numericPagination," a[title]")),this.observeLinks(),this.ariaSet(),this.ariaSetLabelNumericPag()}var e,n;return e=t,(n=[{key:"getDataLayer",value:function(){var t=document.querySelector(a.selectors.dataLayerSelector);return t&&t.dataset&&t.dataset.paginationId?t.dataset.paginationId:null}},{key:"getFormFieldData",value:function(){var t=document.querySelector(a.selectors.formFieldSelector);return t&&t.dataset&&t.dataset.formField?t.dataset.formField:null}},{key:"observeLinks",value:function(){var t=this;s(document).on("click","".concat(this.settings.selectors.module," ").concat(this.settings.selectors.link),(function(e){if(e.preventDefault(),t.fetchHref(e.target)){t.getDataLayer();var n=s(this).attr("data-title"),o="button:".concat(n,"|component:pagination");new i.n("".concat(t.settings.selectors.module," ").concat(t.settings.selectors.link),{data_event_component:"button",page_name:window.utag_data&&window.utag_data.page_name,page_url:window.utag_data&&window.utag_data.page_url,data_event_name:o,raw_datalayer:t.getDataLayer(),form_field_1:t.getFormFieldData()},{observeImmediate:!1}).trigger(e),t.defer((function(){t.linkHandle(t.fetchHref(e.target))}))}}))}},{key:"linkHandle",value:function(t){document.location.href=t}},{key:"fetchHref",value:function(t){var e=t,n=e.tagName.toLowerCase();return"a"!==n&&"button"!==n&&((e=s(e).parents("a").get(0))||(e=s(t).parents("button").get(0))),e.href||s(e).data(this.settings.dataKeys.href)}},{key:"defer",value:function(t){return setTimeout((t||function(){}).bind(this),1)}},{key:"ariaSet",value:function(){var t=this.$basicPagination.find("a:not([href])");this.$numericPagination.find(a.selectors.placeholder).attr("aria-disabled","true"),t.attr("aria-disabled","true"),t.attr("role","button")}},{key:"ariaSetLabelNumericPag",value:function(){this.numericPaginationLink.each((function(){var t=this.getAttribute("title");this.setAttribute("aria-label",t)}))}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},7279:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{t:()=>u});var r={arrow:"pagination-arrow",number:"pagination-number",dots:"pagination-dots"},a="active",s=Bootstrap.jQuery,l=2,u=function(){function t(e,n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=s(e),this.$wrapper=this.$el.find(".A-PAGMAN-RW-ALL"),this.elNum=n,this.currentEl=i,this.allyTexts=this.getAccessibilityTexts(),this.setMustacheTemplates(),this.initElements()}var e,n;return e=t,(n=[{key:"destroy",value:function(){this.$wrapper.empty()}},{key:"getAccessibilityTexts",value:function(){return{currentPage:this.$el.data("current-page-text")||"",page:this.$el.data("page-text")||""}}},{key:"setMustacheTemplates",value:function(){var t=this;Object.keys(r).forEach((function(e){var n=r[e],i=t.$el.find(".".concat(n));s.Mustache.add(n,i.html())}))}},{key:"initElements",value:function(){this.elNum>1?(this.setVisibleElCount(),this.render(this.getPaginationMap()),this.bindPaginationUIEvents()):this.destroy()}},{key:"bindPaginationUIEvents",value:function(){var t=this;this.$pageSwitchers=this.$wrapper.find(".number a, .arrow a"),this.$pageSwitchers.on("click",(function(e){e.preventDefault();var n=s(e.target);t.currentEl=n.data("page"),t.initElements()}))}},{key:"setVisibleElCount",value:function(){var t=HSBC_utils.matchMedia.tablet?1:2;l=HSBC_utils.matchMedia.mobile?0:t}},{key:"render",value:function(t){var e=this;this.destroy(),t.forEach((function(t){return e.$wrapper.mustache(t.template,t.data)}))}},{key:"getPaginationMap",value:function(){var t=[];t.push(this.getArrowElement("left"));for(var e=1;e<=this.elNum;e++){var n=1===e,i=e===this.elNum,o=this.getElementVisibilityCondition(e),r=this.getDotElement(i,e,-1),s=this.getDotElement(n,e,1);if(null!==r&&t.push(r),o||n||i){var l=e===this.currentEl?a:"";t.push(this.getNumberElement(e,l))}null!==s&&t.push(s)}return t.push(this.getArrowElement("right")),t}},{key:"getDotVisibilityCondition",value:function(t){return Math.abs(this.currentEl-t)>l+1}},{key:"getElementVisibilityCondition",value:function(t){return Math.abs(this.currentEl-t)<=l}},{key:"getPaginationControls",value:function(){return void 0===this.$pageSwitchers?{on:function(){}}:this.$pageSwitchers}},{key:"getArrowElement",value:function(t){var e=1===this.currentEl&&"left"===t||this.currentEl===this.elNum&&"right"===t,n=e?"disabled":"",i=this.currentEl+("left"===t?-1:1);return{template:r.arrow,data:{direction:t,page:i,isDisabled:e,state:n,isRight:"right"===t}}}},{key:"getDotElement",value:function(t,e,n){if(t&&this.getDotVisibilityCondition(e)){var i=e+n;return{template:this.getElementVisibilityCondition(2*i)?r.number:r.dots,data:{page:i,accessibilityText:this.allyTexts.page}}}return null}},{key:"getNumberElement",value:function(t,e){var n=e===a?this.allyTexts.currentPage:this.allyTexts.page;return{template:r.number,data:{page:t,state:e,accessibilityText:n}}}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},1953:(t,e,n)=>{"use strict";var i,o,r,a,s=n(6980);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function u(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==l(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===l(o)?o:String(o)),i)}var o}i=Bootstrap.jQuery,o="is-active",r=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.APP=n,this.$el=i(e),this.$tabsMenu=this.$el.find(".tabs"),this.$tabsContent=this.$el.find(".tabs-content"),this.$tabs=this.$tabsMenu.find(".tab-title-item"),this.$tabsLinks=this.$tabs.find("a"),this.$panels=this.$tabsContent.find(".tab-panel"),this.$activePanel=this.$tabsContent.find(".".concat(o)),this.$simpleTables=this.$tabsContent.find(".M-SMPTBL-RW-RBWM"),this.bindUIEvents(),this.ally=new s.H(this)}var e,n,r;return e=t,r=[{key:"setSelectedElement",value:function(t,e){e.addClass(o),t.addClass(o)}}],(n=[{key:"bindUIEvents",value:function(){var t=this;this.$tabsMenu.find("a").on("click",(function(e){return t.tabsMenuClickHandler(e)})),i(window).on("hashchange",(function(e){t.ally.setAriaSelectedTags(),e.preventDefault()}))}},{key:"tabsMenuClickHandler",value:function(t){var e=i(t.target);this.togglePanel(e),this.tabsMenuEvents(e),this.setEqualHeightsOfLabelsInChinaCalculator(),this.$simpleTables.trigger("tabs:tabSwitched"),t.preventDefault()}},{key:"tabsMenuEvents",value:function(t){this.$tabsContent.find(".".concat(o)).find(HSBC_utils.focusables.join()).add(this.$tabsContent).attr("tabindex",0),this.ally.setTabIndexesOnFocusLeave();var e=t.attr("data-target");this.APP.globalComponents.anchorScrollController.anchorAction(e)}},{key:"togglePanel",value:function(e){var n=e.attr("data-target").replace("#","#panel-"),i=this.$tabsContent.find(n),r=e.parent();r.hasClass(o)||(this.cleanElements(),t.setSelectedElement(r,i),this.ally.setAriaSelectedTags())}},{key:"cleanElements",value:function(){this.$panels.removeClass(o),this.$tabs.removeClass("".concat(o," ").concat("is-selected"))}},{key:"setEqualHeightsOfLabelsInChinaCalculator",value:function(){var t=this.$tabsContent.find(".".concat(o)),e=t.find(".heading-left"),n=t.find(".heading-right");if(e.height("auto"),n.height("auto"),!HSBC_utils.matchMedia.mobile){var i=[e,n],r=[e.outerHeight(),n.outerHeight()],a=Math.max.apply(Math,r);i.forEach((function(t){return t.outerHeight(a)}))}}}])&&u(e.prototype,n),r&&u(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),a={name:"tabs-tablet-desktop",selector:".generic-tabs.hide-on-mobile",init:function(t,e){return new r(t,e)}},HSBC_utils.registerComponent(a)},5651:(t,e,n)=>{"use strict";var i,o,r,a,s,l,u,c=n(4992);function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function f(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==h(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===h(o)?o:String(o)),i)}var o}i=Bootstrap.jQuery,o="is-active",r="is-expanded",a="is-selected",s="on-top",l=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.APP=n,this.$el=i(e),this.$tabsMenu=this.$el.find(".tabs"),this.$tabsContent=this.$el.find(".tabs-content"),this.$tabs=this.$tabsMenu.find(".tab-title-item"),this.$tabsLinks=this.$tabs.find("a"),this.$panels=this.$tabsContent.find(".tab-panel"),this.$simpleTables=this.$tabsContent.find(".M-SMPTBL-RW-RBWM"),this.bindUIEvents(),this.ally=new c.d(this),this.activeTab()}var e,n,l;return e=t,l=[{key:"resizeHandler",value:function(){HSBC_utils.matchMedia.mobile}}],(n=[{key:"activeTab",value:function(){var t="".concat(window.location.hash,"-mobile-anchor"),e=this.$tabsMenu.find('a[data-target="'.concat(t,'"]')),n=this.$tabsContent.find(t.replace("#","#panel-"));e.length&&(this.cleanElements(),this.setSelectedElement(e.parent(),n)),this.ally.setAriaSelectedTags()}},{key:"bindUIEvents",value:function(){var e=this;this.$tabsMenu.find("a").on("click",(function(t){return e.tabsMenuClickHandler(t)})),i(window).on("resize",(function(){return t.resizeHandler()})).on("hashchange",(function(t){HSBC_utils.matchMedia.mobile&&(e.activeTab(),e.ally.setUpAttributes(),t.preventDefault())}))}},{key:"tabsMenuClickHandler",value:function(t){var e=i(t.target);this.toggleDropdown(e),this.tabsMenuEvents(e),this.$simpleTables.trigger("tabs:tabSwitched"),t.preventDefault()}},{key:"tabsMenuEvents",value:function(t){var e=t.parent()[0].id,n=this.$tabsContent.find(".".concat(o)).find(HSBC_utils.focusables.join()).add(this.$tabsContent),i=this.$tabsMenu.hasClass(r);n.attr("tabindex",i?-1:0),i||(this.$tabsContent.attr("tabindex",0),this.ally.setTabIndexesOnFocusLeave(),this.APP.globalComponents.anchorScrollController.anchorAction("#".concat(e)))}},{key:"toggleDropdown",value:function(t){var e=t.attr("data-target").replace("#","#panel-"),n=this.$tabsContent.find(e),i=t.parent();this.$tabsMenu.hasClass(r)?this.collapse(i,n):this.expand()}},{key:"expand",value:function(){var t=this.$tabsMenu.find(".".concat(o));this.$tabsMenu.addClass(r),this.moveElementToTheTop(t),this.$tabsMenu.addClass(s)}},{key:"collapse",value:function(t,e){this.$tabsMenu.find(".".concat(o)).remove(),t.hasClass(o)&&this.$tabsMenu.find(".".concat(a)).addClass(o),this.$tabs.removeClass(a),this.$tabsMenu.removeClass(s).removeClass(r),t.hasClass(o)||(this.cleanElements(),this.setSelectedElement(t,e),this.ally.setAriaSelectedTags()),this.ally.setUpAttributes()}},{key:"moveElementToTheTop",value:function(t){var e=t.clone(!0,!0);e.find("span.active-tab-hidden-text").text(this.ally.accessibility.expandedText),c.d.cleanAccessibilityAttributes(t),t.parent().prepend(e)}},{key:"cleanElements",value:function(){var t=this.$tabsMenu.find(".".concat(o));c.d.cleanAccessibilityAttributes(t),this.$panels.removeClass(o),this.$tabs.removeClass("".concat(o," ").concat(a))}},{key:"setSelectedElement",value:function(t,e){e.addClass(o),t.length>1?t.each((function(t,e){var n=i(e);n.hasClass(a)||n.addClass(o)})):t.addClass(o)}}])&&f(e.prototype,n),l&&f(e,l),Object.defineProperty(e,"prototype",{writable:!1}),t}(),u={name:"tabs-mobile",selector:".generic-tabs.hide-on-tablet-and-desktop",init:function(t,e){return new l(t,e)}},HSBC_utils.registerComponent(u)},6980:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{H:()=>l});var r=Bootstrap.jQuery,a=HSBC_utils.keyCodes,s="is-active",l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=e.$el,this.$tabsMenu=e.$tabsMenu,this.$tabsContent=e.$tabsContent,this.$tabsLinks=e.$tabsLinks,this.$panelFocusables=this.$tabsContent.find(HSBC_utils.focusables.join()).add(this.$tabsContent),this.context=e,this.setAriaSelectedTags(),this.bindUIEvents()}var e,n;return e=t,(n=[{key:"bindUIEvents",value:function(){var t=this;this.$tabsContent.find(HSBC_utils.focusables.join()).add(this.$tabsContent).on("keydown",(function(e){return t.tabsContentKeyEvents(e)})),this.$tabsMenu.find("a").on("keydown",(function(e){return t.tabsMenuKeyHandler(e)})),this.$tabsLinks.on("focus",(function(){t.$tabsContent.attr("tabindex",0),t.$tabsLinks.attr("tabindex",0)}))}},{key:"tabsMenuKeyHandler",value:function(t){var e=t.keyCode,n=r(t.target),i=e===a.SPACE,o=e===a.ENTER,s=e===a.TAB&&!t.shiftKey,l=n.is(this.$tabsLinks.last());o||i?this.context.tabsMenuClickHandler(t):s&&l&&this.setTabIndexesOnFocusLeave()}},{key:"tabsContentKeyEvents",value:function(t){var e=t.keyCode,n=this.$tabsMenu.find(".".concat(s," a"));e===a.ESC&&(this.context.focusWithoutScrolling(n),t.preventDefault())}},{key:"setTabIndexesOnFocusLeave",value:function(){var t=this.$tabsMenu.find(".".concat(s," a"));this.$tabsContent.attr("tabindex",-1),this.$tabsLinks.attr("tabindex",-1),t.attr("tabindex",0)}},{key:"setAriaSelectedTags",value:function(){this.$tabsLinks.attr("aria-selected",!1),this.$tabsMenu.find(".".concat(s," a")).attr("aria-selected",!0)}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},4992:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{d:()=>v});var r="is-active",a="is-selected",s=Bootstrap.jQuery,l=HSBC_utils.keyCodes,u="Dropdown menu, collapsed",c="Dropdown menu, expanded",h="Selected",f="dropdown-collapsed-text",d="dropdown-expanded-text",p="dropdown-selected-text",m="span.active-tab-selected-text",y="aria-hidden",v=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=e.$el,this.$tabsMenu=e.$tabsMenu,this.$tabsContent=e.$tabsContent,this.$tabsLinks=e.$tabsLinks,this.context=e,this.accessibility=this.readAccessibility(),this.setUpAttributes(),this.bindUIEvents()}var e,n,i;return e=t,i=[{key:"cleanAccessibilityAttributes",value:function(t){t.removeClass(r).addClass(a).find("a").removeAttr("aria-haspopup").attr("role","menuitem").find("span.active-tab-hidden-text").remove(),t.find(m).attr(y,"false")}}],(n=[{key:"setUpAttributes",value:function(){var t=this.$tabsMenu.find(".".concat(r)).find("a");t.find(".active-tab-hidden-text").length||t.prepend('<span class="visuallyhidden active-tab-hidden-text"> '.concat(this.accessibility.collapsedText,", ").concat(this.accessibility.selectedText,"</span>")).attr({"aria-haspopup":"true",role:"button"}).find(m).attr(y,"true")}},{key:"bindUIEvents",value:function(){var t=this,e=this.$tabsContent.find(HSBC_utils.focusables.join()).add(this.$tabsContent);this.$tabsMenu.find("a").on("keydown",(function(e){return t.tabsMenuKeyHandler(e)})),this.$tabsLinks.on("focus",(function(){return t.$tabsLinks.attr("tabindex",0)})),e.on("keydown",(function(e){return t.tabsContentKeyEvents(e)}))}},{key:"tabsMenuKeyHandler",value:function(t){var e=t.keyCode,n=s(t.target),i=n.parent(),o=e===l.SPACE,r=e===l.ENTER,a=e===l.DOWN,u=e===l.UP,c=e===l.TAB&&!t.shiftKey,h=n.is(this.$tabsLinks.last());r||o?this.context.tabsMenuClickHandler(t):c&&h?this.setTabIndexesOnFocusLeave():a?this.handleArrowKeyEvent(i,t,!0):u&&this.handleArrowKeyEvent(i,t,!1)}},{key:"handleArrowKeyEvent",value:function(t,e,n){var i=n?"next":"prev",o=t[i]();(o.hasClass(a)?o[i]().find("a"):o.find("a")).focus(),e.preventDefault()}},{key:"setTabIndexesOnFocusLeave",value:function(){var t=this.$tabsMenu.find(".".concat(r," a"));this.$tabsContent.attr("tabindex",-1),this.$tabsLinks.attr("tabindex",-1),t.attr("tabindex",0)}},{key:"tabsContentKeyEvents",value:function(t){var e=t.keyCode,n=this.$tabsMenu.find(".".concat(r," a"));e===l.ESC&&(this.context.focusWithoutScrolling(n),t.preventDefault())}},{key:"setAriaSelectedTags",value:function(){this.$tabsMenu.find(".".concat(r," a")).attr("role","button").find(m).attr(y,"true")}},{key:"readAccessibility",value:function(){return{expandedText:this.$el.data(d)||c,collapsedText:this.$el.data(f)||u,selectedText:this.$el.data(p)||h}}}])&&o(e.prototype,n),i&&o(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}()},388:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{b:()=>a});var r=jQuery,a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=r(e),this.$link=this.$el.find(".A-TYPS5R-RW-DEV"),this.$breadcrumbs=this.$link.find("span.link"),this.breadcrumbsArticleTab()}var e,n;return e=t,(n=[{key:"breadcrumbsArticleTab",value:function(){this.$link.attr("tabindex","0")}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},785:(t,e,n)=>{"use strict";var i=n(388);HSBC_utils.isEditMode()||HSBC_utils.registerComponent({name:"BreadcrumbsArticle",selector:".A-BREADCRUMBS-ART-DEV",init:function(t){return new i.b(t)}})},4481:(t,e,n)=>{"use strict";var i=n(8654);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===o(r)?r:String(r)),i)}var r}var a,s,l=Bootstrap.jQuery,u=".title-with-subtitle-wrapper",c=["OVERSEAS_ACCOUNT_OPENING","EDUCATION","MORTGAGES","RELOCATION","MOVING_FINANCES_GLOBALLY","MANAGING_INVESTMENTS_ABROAD"],h=!1,f=!1,d=!1,p=!1,m="aria-hidden",y=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$elem=l(e),this.firstInteraction=!1,this.errorCodeText=null,this.findFormElements(),this.disableSubmitMainButton(),this.bindUIEvents(),this.resetRadioButtonValue()}var e,n;return e=t,(n=[{key:"findFormElements",value:function(){this.$servicesInput=this.$elem.find('input[name="services"]'),this.$existingCustomerInput=this.$elem.find('input[name="existing-customer"]'),this.$countryOfResidenceInput=this.$elem.find('input[name="country-residence"]'),this.$destinationInput=this.$elem.find('input[name="destination"]'),this.$contactTimeInput=this.$elem.find('input[name="contact-time"]'),this.$preferredBranchInput=this.$elem.find('input[name="preferred-branch"]'),this.$dayInputElement=this.$elem.find('input[name="contact-date-day"]'),this.$monthInputElement=this.$elem.find('input[name="contact-date-month"]'),this.$yearInputElement=this.$elem.find('input[name="contact-date-year"]'),this.$formUpdateSrtInfo=this.$elem.find(".form-update-srt-info"),this.formUpdateFirstPathSrt=this.$elem.data("form-update-first-path-srt"),this.formUpdateSecondPathSrt=this.$elem.data("form-update-second-path-srt"),this.$firstPathWrapper=this.$elem.find(".first-path-wrapper"),this.$secondPathWrapper=this.$elem.find(".second-path-wrapper"),this.$submitMainButtonWrapper=this.$elem.find(".submit-main-button-wrapper"),this.$submitMainButton=this.$submitMainButtonWrapper.find("button"),this.$submitMainButtonDisabledScreenReaderText=this.$submitMainButtonWrapper.data("disabled-srt"),this.$statusViewsContainer=this.$elem.parent().find(".status-views"),this.$confirmationStatus=this.$elem.parent().find(".confirmation-status-publish"),this.$errorStatus=this.$elem.parent().find(".error-status-publish"),this.$statusButtons=this.$statusViewsContainer.find(".btn"),this.$titlesWithSubtitle=this.$elem.parents().find(u),this.$insideCallbackFormTemplate=this.$elem.parents(".callbackFormPage")||null,this.$titlesWithSubtitle=this.$insideCallbackFormTemplate.find(u)||null,this.$allInputs=this.$elem.find("input"),this.$callbackForm=this.$elem.find("form"),this.$spinnerContainer=this.$elem.find(".spinner-container"),this.apiDetails=this.$elem.data("form-api-details")}},{key:"bindUIEvents",value:function(){var t=this;this.$servicesInput.on({change:function(){return t.checkValuesOfInputsAndShowProperContent()}}),this.$existingCustomerInput.on({change:function(){return t.checkValuesOfInputsAndShowProperContent()}}),this.$submitMainButton.on({click:function(e){e.preventDefault(),!d&&p&&(d=!0,t.showStatusPage(e))}}),this.$elem.on({validateAll:function(){return t.validateAll()}}),this.$elem.one({"click keydown touchstart":function(){return t.trackFirstInteractionWithCallBackForm()}})}},{key:"resetRadioButtonValue",value:function(){this.$existingCustomerInput.val("")}},{key:"showStatusPage",value:function(t){var e=HSBC_utils.matchMedia.mobile;t.preventDefault(),e?(l(window).scrollTop(0),0===l(window).scrollTop()&&(this.showMessageAfterSubmission(),this.$statusViewsContainer.get(0).focus())):(this.showMessageAfterSubmission(),HSBC_utils.isSafari&&this.$statusButtons.get(0).focus())}},{key:"showConfirmationPage",value:function(){this.$confirmationStatus.attr(m,!1).show(),this.trackConfirmationView()}},{key:"showErrorPage",value:function(){this.$errorStatus.attr(m,!1).show(),this.trackTechnicalErrorView()}},{key:"hideForm",value:function(){[this.$titlesWithSubtitle.eq(0),this.$elem].forEach((function(t){t.attr(m,!0).hide()}))}},{key:"checkValuesOfInputsAndShowProperContent",value:function(){a=this.$servicesInput.val().trim().toLocaleUpperCase(),s=this.$existingCustomerInput.val().trim().toLocaleLowerCase(),""!==a&&""!==s&&(a===c[0]||a===c[1]||a===c[3]?this.showSubmitMainButtonAndInputs():this.showLivePersonChatButton())}},{key:"showSubmitMainButtonAndInputs",value:function(){var t=this;this.$secondPathWrapper.fadeOut(100,(function(){t.$firstPathWrapper.fadeIn(100,(function(){h||(t.announceFormChange(t.formUpdateFirstPathSrt),h=!0,f=!1)}))}))}},{key:"showLivePersonChatButton",value:function(){var t=this;this.$firstPathWrapper.fadeOut(100,(function(){t.$secondPathWrapper.fadeIn(100,(function(){f||(t.announceFormChange(t.formUpdateSecondPathSrt),h=!1,f=!0)}))}))}},{key:"announceFormChange",value:function(t){this.$formUpdateSrtInfo.text(t)}},{key:"enableSubmitMainButton",value:function(){p=!0,this.$submitMainButton.removeClass("disabled-btn"),this.$submitMainButton.removeAttr("aria-disabled"),HSBC_utils.isMobileAndroid&&this.$submitMainButton.find(".android-srt").remove()}},{key:"disableSubmitMainButton",value:function(){if(p=!1,this.$submitMainButton.addClass("disabled-btn"),this.$submitMainButton.attr("aria-disabled",!0),HSBC_utils.isMobileAndroid){var t='<span class="visuallyhidden android-srt">'.concat(this.$submitMainButtonDisabledScreenReaderText,"</span>");this.$submitMainButton.find(".android-srt").length||this.$submitMainButton.append(t)}}},{key:"validateAll",value:function(){var t=!0;l.each(this.$allInputs,(function(e,n){var i=l(n),o=i.val().length,r=i.hasClass("validationError");(0===o||r)&&(t=!1)})),t?this.enableSubmitMainButton():this.disableSubmitMainButton()}},{key:"trackFirstInteractionWithCallBackForm",value:function(){!1===this.firstInteraction&&(i.j.trackEventWithInheritance({event_category:"form",event_action:"start"}),this.firstInteraction=!0)}},{key:"getFormData",value:function(){var t=this.$callbackForm.serializeArray(),e={},n={};l.each(this.apiDetails.requestHeaders,(function(t,n){e[n.name]=n.value})),l.each(t,(function(t,e){n[e.name]=e.value})),e["X-HSBC-Session-Correlation-Id"]="sht".concat(Date.now().toString());var i=moment("".concat(n["contact-date-year"].trim(),"-").concat(n["contact-date-month"].trim(),"-").concat(n["contact-date-day"].trim()),"YYYY-MM-DD"),o={consent:!0,customerDetails:{countryOfResidence:n["country-residence"].trim().toLocaleUpperCase(),firstName:n["first-name"].trim(),lastName:n["last-name"].trim()},referralDetails:{sourceOfReferral:"ISW",destination:n.destination.trim().toLocaleUpperCase(),interestInternationalService:n.services.trim().toLocaleUpperCase(),preferredBranchOfAccountOpening:n["preferred-branch"].trim(),iswReferralCode:window.utag_data&&window.utag_data.tealium_visitor_id||"0",existingCustomer:"yes"===n["existing-customer"].trim()},contactDetails:{phoneNumber:"".concat(n["phone-number-prefix"].trim()).concat(n["phone-number"].trim()),emailAddress:n.email.trim(),preferredContactDate:i.format("YYYY-MM-DD"),preferredContactTime:n["contact-time"].trim().toLocaleUpperCase()}};return l.ajax({url:this.apiDetails.apiUrl,type:"POST",crossDomain:!0,dataType:"json",data:JSON.stringify(o),headers:e})}},{key:"showMessageAfterSubmission",value:function(){var t=this;this.showSpinner(),this.getFormData().done((function(e){if(t.hideForm(),d=!1,e.referralId)t.showConfirmationPage();else{try{t.errorCodeText=e.errorInfo[0].code||""}catch(e){t.errorCodeText=""}t.showErrorPage()}})).fail((function(e){try{t.errorCodeText=e.statusText||""}catch(e){t.errorCodeText=""}t.hideForm(),t.showErrorPage(),d=!1}))}},{key:"showSpinner",value:function(){this.$spinnerContainer.show()}},{key:"trackConfirmationView",value:function(){var t=this.$countryOfResidenceInput.val().trim().toLocaleLowerCase(),e=this.$destinationInput.val().trim().toLocaleLowerCase(),n=this.$contactTimeInput.val().trim().toLocaleLowerCase(),o=this.$preferredBranchInput.val().trim().toLocaleLowerCase(),r=this.$dayInputElement.val(),l=this.$monthInputElement.val(),u=this.$yearInputElement.val(),c=moment("".concat(u,"-").concat(l,"-").concat(r),"MM-DD-YYYY").toDate();HSBC_utils.isTealiumReady&&i.j.trackView({event_category:"form",event_action:"submit",event_content:"completed",page_name:"".concat(window.utag_data.page_name," : confirmation")||0,page_url:"".concat(window.utag_data.page_url,"confirmation")||0,form_field_1:"services interested in: ".concat(a),form_field_2:"existing customer: ".concat(s),form_field_3:"country of residence: ".concat(t," & preferred branch: ").concat(o),form_field_4:"destination: ".concat(e),form_field_5:"contact date: ".concat(c," & contact time: ").concat(n)})}},{key:"trackTechnicalErrorView",value:function(){HSBC_utils.isTealiumReady&&i.j.trackView({event_category:"error",event_subcategory:this.errorCodeText,event_action:"system",event_content:"technical error",error_type:"system",page_type:"error",page_name:"".concat(window.utag_data.page_name," : technical error")||0,page_url:"".concat(window.utag_data.page_url,"technical-error")||0})}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function b(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==v(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===v(o)?o:String(o)),i)}var o}var g="validationError",S=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$inputElements=n,this.$callbackFormWrapper=e.parents(".callback-form-sht"),this.$validationErrorWrapper=e.find(".validationError-wrapper"),this.$errorDescription=this.$validationErrorWrapper.find(".error-description"),this.$errorsMap=this.$callbackFormWrapper.data("errors-map")}var e,n;return e=t,(n=[{key:"setErrorMessage",value:function(t){this.$errorDescription.text(this.$errorsMap[t])}},{key:"showErrorMessage",value:function(){this.$validationErrorWrapper.show(),this.$inputElements.addClass(g),this.$inputElements.attr("aria-invalid",!0),this.$callbackFormWrapper.trigger("validateAll")}},{key:"hideErrorMessage",value:function(){this.$validationErrorWrapper.hide(),this.$inputElements.removeClass(g),this.$inputElements.attr("aria-invalid",!1),this.$callbackFormWrapper.trigger("validateAll")}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function w(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==k(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===k(o)?o:String(o)),i)}var o}var $=Bootstrap.jQuery,C=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$elem=$(e),this.$dayInputElement=this.$elem.find(".contact-date-day"),this.$monthInputElement=this.$elem.find(".contact-date-month"),this.$yearInputElement=this.$elem.find(".contact-date-year"),this.inputsArray=[this.$dayInputElement.get(0),this.$monthInputElement.get(0),this.$yearInputElement.get(0)],this.$validation=new S(this.$elem,$(this.inputsArray)),this.bindUIEvents()}var e,n;return e=t,(n=[{key:"bindUIEvents",value:function(){var t=this;this.$dayInputElement.on({keyup:function(e){return t.formatNumber(e,2)},blur:function(){return t.checkIfValidateDate()},change:function(){return t.checkIfValidateDate()}}),this.$monthInputElement.on({keyup:function(e){return t.formatNumber(e,2)},blur:function(){return t.checkIfValidateDate()},change:function(){return t.checkIfValidateDate()}}),this.$yearInputElement.on({keyup:function(e){return t.formatNumber(e,4)},blur:function(){return t.checkIfValidateDate()},change:function(){return t.checkIfValidateDate()}})}},{key:"checkIfValidateDate",value:function(){var t=this;setTimeout((function(){var e=document.activeElement;t.inputsArray.includes(e)||t.validateDate()}),0)}},{key:"validateDate",value:function(){var t=this.$dayInputElement.val(),e=this.$monthInputElement.val(),n=this.$yearInputElement.val(),i=moment("".concat(n,"-").concat(e,"-").concat(t),"YYYY-MM-DD"),o=moment();""===t||""===e||""===n?(this.$validation.setErrorMessage("incompleteFieldError"),this.$validation.showErrorMessage()):i.isValid()&&this.validateRangeOfDate(n,e,t)&&i.isAfter(o)?this.$validation.hideErrorMessage():(this.$validation.setErrorMessage("contactDateError"),this.$validation.showErrorMessage())}},{key:"validateRangeOfDate",value:function(t,e,n){return t>=moment().year()&&t<=9999&&e>=1&&e<=12&&n>=1&&n<=31&&t.toString().length>0&&t.toString().length<=4&&e.toString().length>0&&e.toString().length<=2&&n.toString().length>0&&n.toString().length<=2}},{key:"formatNumber",value:function(t,e){var n=$(t.target),i=window.getSelection().toString(),o=n.val();""===i&&-1===$.inArray(t.keyCode,[38,40,37,39])&&(o=this.getCleanNumber(o,e),n.val((function(){return o})))}},{key:"getCleanNumber",value:function(t,e){return t.replace(/\D+/g,"").substr(0,e)}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function T(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==E(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===E(o)?o:String(o)),i)}var o}var P=HSBC_utils.keyCodes,O=Bootstrap.jQuery,A="aria-selected",x=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$elem=e.$elem,this.$itemSelected=null,this.findDropdownElements(e)}var e,n,i;return e=t,i=[{key:"openWithArrows",value:function(t,e){var n=t.keyCode,i=n===P.DOWN,o=n===P.UP;(i||o)&&(t.preventDefault(),"function"==typeof e&&e())}},{key:"selectItem",value:function(t){O(t).addClass("highlighted").attr(A,"true").focus(),this.$itemHighlighted=O(t)}},{key:"deSelectItem",value:function(t){O(t).removeClass("highlighted").removeAttr(A)}}],(n=[{key:"findDropdownElements",value:function(t){this.$dropdownSelectHiddenInput=t.$dropdownSelectHiddenInput,this.$dropdownSelectButton=t.$dropdownSelectButton,this.$dropdownSelectButtonText=t.$dropdownSelectButtonText,this.$dropdownSelectList=t.$dropdownSelectList,this.$dropdownSelectOptions=t.$dropdownSelectOptions,this.$dropdownSelectWrapper=t.$dropdownSelectWrapper,this.$firstOption=this.$dropdownSelectOptions.first(),this.$lastOption=this.$dropdownSelectOptions.last(),this.$itemHighlighted=this.$elem.find(".highlighted")||null}},{key:"moveThroughItemsInList",value:function(t){var e=t.keyCode,n=e===P.DOWN,i=e===P.UP;(n||i)&&(t.preventDefault(),this.moveHighlight(t))}},{key:"focusAfterOpening",value:function(){if(this.$elem.is(".expanded")){if(1===this.$dropdownSelectOptions.length)return;this.$itemSelected?this.$itemSelected.get(0).focus():(t.selectItem(this.$firstOption),this.$firstOption.get(0).focus(),this.$itemHighlighted=this.$firstOption)}}},{key:"updateMainDropdownValueByKeyDown",value:function(t,e){var n=t.keyCode,i=n===P.ENTER,o=n===P.SPACE;(i||o)&&(t.preventDefault(),"function"==typeof e&&e())}},{key:"closeWithEscapeOrShiftTab",value:function(t,e){var n=t.keyCode,i=n===P.ESC,o=t.shiftKey,r=n===P.TAB;(i||r&&o)&&(t.preventDefault(),this.closeListAndFocusButton(e))}},{key:"closeWithTab",value:function(t,e){t.keyCode===P.TAB&&(t.preventDefault(),"function"==typeof e&&e(),HSBC_utils.focusOnTheNextTabbableElement(this.$dropdownSelectButton))}},{key:"cancelHighlightForNotChosenOption",value:function(){var t=this;this.$dropdownSelectOptions.each((function(e,n){O(n).is(t.$itemSelected)||O(n).removeClass("highlighted")}))}},{key:"closeListAndFocusButton",value:function(t){var e=this;"function"==typeof t&&t(),HSBC_utils.isFirefox?setTimeout((function(){return e.$dropdownSelectButton.focus()}),150):this.$dropdownSelectButton.get(0).focus()}},{key:"selectFirstItem",value:function(){this.$itemHighlighted=this.$firstOption,t.selectItem(this.$itemHighlighted)}},{key:"selectLastItem",value:function(){this.$itemHighlighted=this.$lastOption,t.selectItem(this.$itemHighlighted)}},{key:"selectNextItem",value:function(e){this.$itemHighlighted=e,t.selectItem(e)}},{key:"checkForSelection",value:function(e){var n=36===e.which,i=35===e.which;n&&(e.preventDefault(),t.deSelectItem(this.$itemHighlighted),this.selectFirstItem()),i&&(e.preventDefault(),t.deSelectItem(this.$itemHighlighted),this.selectLastItem())}},{key:"moveHighlight",value:function(e){var n,i=e.keyCode,o=i===P.DOWN,r=i===P.UP;if(o||r){var a=o?this.selectFirstItem:this.selectLastItem;this.$itemHighlighted.length?(t.deSelectItem(this.$itemHighlighted),(n=O(this.$itemHighlighted).next()).length?this.selectNextItem(n):a()):a()}this.$dropdownSelectList.attr("aria-activedescendant",O(this.$itemHighlighted).attr("id"))}},{key:"updateSelectedItemAria",value:function(t){var e=O(t.target).closest(".dropdown-select-option");this.$elem.find('[aria-selected="true"]').removeAttr(A).removeClass("highlighted"),e.attr(A,!0).addClass("highlighted"),this.$itemSelected=e,this.$itemHighlighted=this.$itemSelected,this.$dropdownSelectList.attr("aria-activedescendant",e.attr("id"))}}])&&T(e.prototype,n),i&&T(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function j(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==B(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===B(o)?o:String(o)),i)}var o}var _=Bootstrap.jQuery,I=".sht-callbackform-select-field",M=".dropdown-select-button",L=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=e,this.findFormElements()}var e,n;return e=t,(n=[{key:"findFormElements",value:function(){this.$callbackFormWrapper=this.$el.parents(".callback-form-sht"),this.$countryResidenceInput=this.$callbackFormWrapper.find('input[name="country-residence"]'),this.$destinationInput=this.$callbackFormWrapper.find('input[name="destination"]'),this.$destinationInputParent=this.$destinationInput.parents(I),this.$countryResidenceInputParent=this.$countryResidenceInput.parents(I),this.$validationDestination=new S(this.$destinationInputParent,_([this.$destinationInputParent.find(M).get(0),this.$destinationInput.get(0)])),this.$validationcountryResidence=new S(this.$countryResidenceInputParent,_([this.$countryResidenceInputParent.find(M).get(0),this.$countryResidenceInput.get(0)]))}},{key:"validate",value:function(){var t=this.$countryResidenceInput.val().trim().toLocaleLowerCase(),e=this.$destinationInput.val().trim().toLocaleLowerCase();""!==t&&this.$validationcountryResidence.hideErrorMessage(),"other"===e?(this.$validationDestination.setErrorMessage("destinationError"),this.$validationDestination.showErrorMessage()):e===t?(this.$validationDestination.setErrorMessage("destinationAndCountryError"),this.$validationDestination.showErrorMessage()):this.$validationDestination.hideErrorMessage()}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function D(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==R(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===R(o)?o:String(o)),i)}var o}var H,N,U=Bootstrap.jQuery,F=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$elem=U(e),this.findDropdownElements(),this.dropdownOpened=!1,this.checkIfCountryAndDestination()&&(this.$countryAndDestinationValidation=new L(this.$elem)),this.bindUIEvents(),this.ally=new x(this)}var e,n;return e=t,(n=[{key:"findDropdownElements",value:function(){this.$dropdownSelectButton=this.$elem.find(".dropdown-select-button"),this.$dropdownSelectButtonText=this.$elem.find(".dropdown-select-button-text"),this.$dropdownSelectList=this.$elem.find(".dropdown-select-list"),this.$dropdownSelectOptions=this.$dropdownSelectList.find(".dropdown-select-option"),this.$dropdownSelectWrapper=this.$elem.find(".dropdown-select-wrapper"),this.$dropdownSelectHiddenInput=this.$elem.find(".dropdown-select-input"),this.$validation=new S(this.$elem,U([this.$dropdownSelectButton.get(0),this.$dropdownSelectHiddenInput.get(0)]))}},{key:"bindUIEvents",value:function(){var t=this;this.$dropdownSelectButton.on({click:function(e){return t.toggleDropdown(e)},keydown:function(e){return x.openWithArrows(e,t.openDropdown.bind(t,e))}}),this.$dropdownSelectList.on({keydown:function(e){t.ally.updateMainDropdownValueByKeyDown(e,t.updateMainDropdownValue.bind(t,e)),t.ally.moveThroughItemsInList(e),t.ally.checkForSelection(e),t.ally.closeWithTab(e,t.closeDropdown.bind(t)),t.ally.closeWithEscapeOrShiftTab(e,t.closeDropdown.bind(t))}}),this.$dropdownSelectOptions.on({click:function(e){return t.updateMainDropdownValue(e)}}),this.$dropdownSelectHiddenInput.on({change:function(){return t.validateValue()}}),U(document).on({"touchstart touchmove touchend click":function(e){return t.closeOnOutsideClick(e)}})}},{key:"toggleDropdown",value:function(t){this.$elem.hasClass("expanded")?this.closeDropdown():this.openDropdown(t)}},{key:"openDropdown",value:function(){this.dropdownOpened=!0,this.$elem.addClass("expanded"),this.$dropdownSelectList.attr({"aria-hidden":!1,"aria-expanded":!0}),this.$dropdownSelectButton.attr("aria-expanded",!0),this.ally.focusAfterOpening()}},{key:"closeDropdown",value:function(){this.dropdownOpened=!1,this.$elem.removeClass("expanded"),this.$dropdownSelectList.attr({"aria-hidden":!0,"aria-expanded":!1}),this.$dropdownSelectButton.attr("aria-expanded",!1),this.ally.cancelHighlightForNotChosenOption(),this.$dropdownSelectHiddenInput.trigger("change")}},{key:"updateMainDropdownValue",value:function(t){H=U(t.target).text().trim(),N=U(t.target).closest(".dropdown-select-option").attr("data-value"),this.$dropdownSelectButtonText.text(H),this.updateHiddenInputValue(N),this.ally.updateSelectedItemAria(t),this.closeDropdown(),this.ally.closeListAndFocusButton()}},{key:"updateHiddenInputValue",value:function(t){var e=t.trim().toLocaleLowerCase();this.$dropdownSelectHiddenInput.attr("value",e)}},{key:"validateValue",value:function(){""!==this.$dropdownSelectHiddenInput.val()?this.checkIfCountryAndDestination()?this.$countryAndDestinationValidation.validate():this.$validation.hideErrorMessage():(this.$validation.setErrorMessage("incompleteFieldError"),this.$validation.showErrorMessage())}},{key:"checkIfCountryAndDestination",value:function(){return"destination"===this.$dropdownSelectHiddenInput.attr("name")||"country-residence"===this.$dropdownSelectHiddenInput.attr("name")}},{key:"closeOnOutsideClick",value:function(t){!this.dropdownOpened||U(t.target).closest(this.$dropdownSelectWrapper).length||U(t.target).is(this.$dropdownSelectButton)||this.closeDropdown()}}])&&D(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function W(t){return W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},W(t)}function V(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==W(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==W(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===W(o)?o:String(o)),i)}var o}var z=Bootstrap.jQuery,Q=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$elem=z(e),this.$inputElement=this.$elem.find('input[type="email"]'),this.$validation=new S(this.$elem,this.$inputElement),this.bindUIEvents()}var e,n;return e=t,(n=[{key:"bindUIEvents",value:function(){var t=this;this.$inputElement.on({blur:function(){return t.validateInput()}})}},{key:"validateInput",value:function(){var t=this.$inputElement.val();""!==t?this.validateEmail(t)?this.$validation.hideErrorMessage():(this.$validation.setErrorMessage("emailError"),this.$validation.showErrorMessage()):(this.$validation.setErrorMessage("incompleteFieldError"),this.$validation.showErrorMessage())}},{key:"validateEmail",value:function(t){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).trim().toLowerCase())}}])&&V(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function G(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==q(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===q(o)?o:String(o)),i)}var o}var K=Bootstrap.jQuery,Y=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$elem=K(e),this.$prefixInputElement=this.$elem.find(".phone-number-prefix"),this.$inputElement=this.$elem.find(".phone-number"),this.inputsArray=[this.$prefixInputElement.get(0),this.$inputElement.get(0)],this.$validation=new S(this.$elem,K(this.inputsArray)),this.bindUIEvents()}var e,n;return e=t,n=[{key:"bindUIEvents",value:function(){var t=this;this.$prefixInputElement.on({keyup:function(e){return t.formatNumber(e,!0)},blur:function(){return t.checkIfValidateNumber()}}),this.$inputElement.on({keyup:function(e){return t.formatNumber(e)},blur:function(){return t.checkIfValidateNumber()}})}},{key:"checkIfValidateNumber",value:function(){var t=this;setTimeout((function(){var e=document.activeElement;t.inputsArray.includes(e)||t.validateNumber()}),0)}},{key:"validateNumber",value:function(){var t=this.$prefixInputElement.val(),e=this.$inputElement.val();"+"!==t&&""!==e?this.$validation.hideErrorMessage():(this.$validation.setErrorMessage("incompleteFieldError"),this.$validation.showErrorMessage())}},{key:"formatNumber",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=K(t.target),i=window.getSelection().toString(),o=n.val();""===i&&-1===K.inArray(t.keyCode,[38,40,37,39])&&(o=this.getCleanNumber(o),n.val((function(){return e?"+".concat(o):o})))}},{key:"getCleanNumber",value:function(t){return t.replace(/\D+/g,"")}}],n&&G(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function X(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==J(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==J(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===J(o)?o:String(o)),i)}var o}var Z=Bootstrap.jQuery,tt=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$elem=Z(e),this.$inputField=this.$elem.find("input"),this.radioGroup=this.$elem.find('[role="radiogroup"]').get(0),this.$radioButtons=Z(this.radioGroup).find('[role="radio"]'),this.radioGroupAlly=null,this.radioGroupAlly=new RadioGroup(this.radioGroup),this.radioGroupAlly.init(),this.$validation=new S(this.$elem,this.$inputField),this.bindUIEvents()}var e,n;return e=t,(n=[{key:"bindUIEvents",value:function(){var t=this;this.$radioButtons.on({change:function(e){return t.updateInputVal(e)}})}},{key:"updateInputVal",value:function(t){var e=Z(t.target).data("value");this.$inputField.val(e.trim().toLocaleLowerCase()),this.$inputField.trigger("change"),""!==e?this.$validation.hideErrorMessage():(this.$validation.setErrorMessage("incompleteFieldError"),this.$validation.showErrorMessage())}}])&&X(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function et(t){return et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},et(t)}function nt(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==et(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==et(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===et(o)?o:String(o)),i)}var o}var it=Bootstrap.jQuery,ot=/[\!\@\#\$\%\^\&\*\(\)\_\+\=\[\]\{\}\;\'\\\:\"\|\,\.\/\<\>\?\~\`0-9]/g,rt=/[\!\@\#\$\%\^\&\*\(\)\_\+\=\[\]\{\}\;\'\\\:\"\|\,\.\/\<\>\?\~\`]/g,at=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$elem=it(e),this.$inputElement=this.$elem.find("input"),this.$validation=new S(this.$elem,this.$inputElement),this.regExp=this.$elem.hasClass("alphanumeric-input")?rt:ot,this.bindUIEvents()}var e,n;return e=t,(n=[{key:"bindUIEvents",value:function(){var t=this;this.$inputElement.on({keyup:function(){return t.formatTextInput()},change:function(){return t.formatTextInput()},blur:function(){return t.validateInput()}})}},{key:"validateInput",value:function(){""!==this.$inputElement.val()?this.$validation.hideErrorMessage():(this.$validation.setErrorMessage("incompleteFieldError"),this.$validation.showErrorMessage())}},{key:"formatTextInput",value:function(){this.$inputElement.val(this.$inputElement.val().replace(this.regExp,"").substr(0,60))}}])&&nt(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();HSBC_utils.registerComponent({name:"callbackForm",selector:".callback-form-sht",init:function(t){return new y(t)}}),HSBC_utils.registerComponent({name:"contactDateFieldSHT",selector:".sht-callbackform-text-field.contact-date",init:function(t){return new C(t)}}),HSBC_utils.registerComponent({name:"dropdownSelectSHT",selector:".sht-callbackform-select-field",init:function(t){return new F(t)}}),HSBC_utils.registerComponent({name:"phoneNumberFieldSHT",selector:".sht-callbackform-text-field.email",init:function(t){return new Q(t)}}),HSBC_utils.registerComponent({name:"phoneNumberFieldSHT",selector:".sht-callbackform-text-field.phone-number",init:function(t){return new Y(t)}}),HSBC_utils.registerComponent({name:"radioSelectSHT",selector:".sht-callbackform-radio-field",init:function(t){return new tt(t)}}),HSBC_utils.registerComponent({name:"simpleTextFieldSHT",selector:".sht-callbackform-text-field.simple-text",init:function(t){return new at(t)}})},8444:()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,n){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(r)?r:String(r)),o)}var r}var n=Bootstrap.jQuery,i="banner_enabled_status_close",o="hidden",r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$cookieBanner=n(e),this.$closeButton=this.$cookieBanner.find(".close-cookie-banner"),this.cookieValue=HSBC_utils.getCookie(i),this.hasHash=document.location.hash.length>0,this.showCookieNotification(),this.bindUiEvents(),this.setLinkAttributes()}var r,a;return r=t,(a=[{key:"showCookieNotification",value:function(){this.cookieValue||this.$cookieBanner.removeClass(o)}},{key:"bindUiEvents",value:function(){var t=this;this.cookieValue||(n(window).on("scroll",(function(){return t.bannerOnScroll()})),this.$closeButton.on("click",(function(){return t.accept()})))}},{key:"bindTriggeredEvents",value:function(){n(window).trigger("headerMessageChange")}},{key:"bannerOnScroll",value:function(){this.isCloseBlocked()||this.accept()}},{key:"isCloseBlocked",value:function(){return!!this.hasHash&&(this.hasHash=!1,!0)}},{key:"accept",value:function(){this.setCookies(),this.closeBanner(),this.bindTriggeredEvents()}},{key:"closeBanner",value:function(){this.$cookieBanner.hasClass(o)||this.$cookieBanner.addClass(o)}},{key:"setCookies",value:function(){var t={path:"/",expires:{months:6}};HSBC_utils.setCookie("opt_in_status",1,t),HSBC_utils.setCookie(i,Date.now(),t)}},{key:"setLinkAttributes",value:function(){var t=n(".cookie-banner-text").find("a");t&&t.attr("rel","nofollow")}}])&&e(r.prototype,a),Object.defineProperty(r,"prototype",{writable:!1}),t}();HSBC_utils.registerComponent({name:"cookieBanner",selector:".cookie-banner.hidden",init:function(t){return new r(t)}})},9884:()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,n){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(r)?r:String(r)),o)}var r}var n=Bootstrap.jQuery,i="cookie_banner_dismiss",o="banner_enabled_status_close",r="opt_in_status",a=function(){function t(e){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),HSBC_utils.getCookie(i)||(this.$cookieBanner=n(e),this.$cookieBanner.find("button.accept").on("click",(function(){return o.accept()})),this.$cookieBanner.removeClass("hidden"),this.checkLegacyCookieBanner())}var a,s;return a=t,(s=[{key:"checkLegacyCookieBanner",value:function(){HSBC_utils.getCookie(o)&&(HSBC_utils.deleteCookie(o,"/"),HSBC_utils.deleteCookie(r,"/"))}},{key:"accept",value:function(){var t={path:"/",expires:{months:6}};HSBC_utils.setCookie(i,(new Date).getTime(),t),HSBC_utils.setCookie(r,1,t),this.$cookieBanner.addClass("hidden"),n(window).trigger("headerMessageChange")}}])&&e(a.prototype,s),Object.defineProperty(a,"prototype",{writable:!1}),t}();HSBC_utils.registerComponent({name:"cookieBannerOptout",selector:".cookie-banner-optout.hidden",init:function(t){return new a(t)}})},7473:(t,e,n)=>{"use strict";var i=n(2090);HSBC_utils.registerComponent({name:"deadEndPagesMessagingBanner",selector:"#dead-end-pages-messaging-banner.messaging-banner.pub",init:function(t){return new i.h(t,"DEP_")}})},9810:(t,e,n)=>{"use strict";var i,o,r,a,s,l,u=n(2496);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==c(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===c(o)?o:String(o)),i)}var o}i=Bootstrap.jQuery,o={active:"active"},r=".header-main-navigation",a=i("body"),s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=i(e),this.$navigationItem=this.$el.closest(".header-main-navigation-item"),this.$headerMainMenu=this.$el.parents(r),this.$doormatHeading=this.$navigationItem.find(".doormat-heading"),this.$allDoormatLinks=this.$headerMainMenu.find("a"),this.isEnterHandlerEnabled=!1,this.isInMenu=!1,this.equalizeColumnHeight(),this.bindUiEvents(),this.updateMaxHeight(),this.doormatAlly=new u.K(this)}var e,n,s;return e=t,n=[{key:"equalizeColumnHeight",value:function(){var t=this.$el.find(".doormat-main-column"),e=Math.max.apply(null,t.map((function(t,e){return i(e).find(".doormat-column-content").height()})).get());t.height(e)}},{key:"updateMaxHeight",value:function(){var t=i(window).height()-this.$el.offset().top;this.$el.css("max-height",t)}},{key:"removeActiveClass",value:function(){this.$el.removeClass(o.active),this.$navigationItem.removeClass(o.active)}},{key:"removeActiveClassState",value:function(t){t.attr("tabindex",-1),this.toggleMenuStatusText(!0),this.removeActiveClass(),this.isEnterHandlerEnabled=!1,this.isInMenu=!1}},{key:"resize",value:function(){this.equalizeColumnHeight(),this.updateMaxHeight()}},{key:"bindUiEvents",value:function(){var e=this;i(window).on("resize",(function(){return e.resize()})),this.$navigationItem.on("focus",(function(){e.getFocusCondition()&&(e.toggleMenuStatusText(),e.$el.addClass(o.active),e.$navigationItem.addClass(o.active))})).on("focusout",(function(){e.getFocusCondition()&&(e.removeActiveClass(),e.toggleMenuStatusText())})),this.$el.on("mouseout",(function(){return e.removeActiveClassState(e.$allDoormatLinks)})),a.on("click",(function(n){var r=i(n.target);t.isInDoormat(r)||r.hasClass(o.headerMainMenu)||e.removeActiveClassState(e.$allDoormatLinks)}))}},{key:"toggleMenuStatusText",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]?this.$navigationItem.attr("aria-expanded",!1):this.$navigationItem.attr("aria-expanded",!0)}},{key:"getFocusCondition",value:function(){return!(this.isInMenu||this.isEnterHandlerEnabled)}}],s=[{key:"isInDoormat",value:function(t){return!!t.parents(r).length}}],n&&h(e.prototype,n),s&&h(e,s),Object.defineProperty(e,"prototype",{writable:!1}),t}(),l={name:"doormat",selector:"".concat(".hide-on-mobile-and-tablet"," ").concat(".doormat-menu"),init:function(t){return new s(t)}},HSBC_utils.registerComponent(l)},2496:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{K:()=>l});var r="active",a=HSBC_utils.keyCodes,s=Bootstrap.jQuery,l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=e.$el,this.$navigationItem=e.$navigationItem,this.$navigationItemLinks=this.$navigationItem.find("a"),this.$firstDoormatLink=this.$navigationItemLinks.first(),this.$lastDoormatLink=this.$navigationItemLinks.last(),this.$doormatMenuLink=this.$el.find("a"),this.context=e,e.$allDoormatLinks.attr("tabindex",-1),this.bindUIEvents()}var e,n;return e=t,(n=[{key:"eventFunction",value:function(t){var e=this.context,n=s(t.target);e.isEnterHandlerEnabled?e.removeActiveClassState(this.$doormatMenuLink):(e.isEnterHandlerEnabled=!0,e.isInMenu=!0,n.hasClass(r)||(this.$el.addClass(r),this.$navigationItem.addClass(r)),e.toggleMenuStatusText(),this.$el.attr("aria-hidden",!1),this.$doormatMenuLink.attr("tabindex",0),this.$doormatMenuLink.first().focus(),t.preventDefault())}},{key:"bindUIEvents",value:function(){var t=this,e=this.context;this.$navigationItem.on("keydown",(function(n){var i=s(n.target),o=n.keyCode,r=i.prop("tagName");o===a.ENTER||o===a.SPACE?t.eventFunction(n):o===a.TAB&&"LI"===r&&(e.removeActiveClass(),e.toggleMenuStatusText(),e.isEnterHandlerEnabled=!1)})).on("click",(function(n){var i=s(n.target);i.hasClass("header-main-navigation-item")||i.hasClass("header-doormat-mobile-title")||i.hasClass("header-main-navigation-title")||i.hasClass("header-main-navigation-subtitle")?t.eventFunction(n):e.removeActiveClassState(e.$allDoormatLinks)})).on("focus",(function(){e.getFocusCondition()&&(t.$doormatMenuLink.attr("tabindex",-1),e.toggleMenuStatusText())})).on("focusout",(function(){e.getFocusCondition()&&t.$doormatMenuLink.attr("tabindex",-1)})).on("mouseout",(function(){e.removeActiveClassState(e.$allDoormatLinks)})),this.$doormatMenuLink.on("keydown",(function(n){n.keyCode===a.ESC&&(e.isInMenu=!1,t.$doormatMenuLink.attr("tabindex",-1),t.$navigationItem.focus(),n.preventDefault())})),this.$firstDoormatLink.on("keydown",(function(n){var i=n.keyCode;n.shiftKey&&i===a.TAB&&(e.isInMenu=!1,t.$doormatMenuLink.attr("tabindex",-1),t.$el.attr("aria-hidden",!0),t.$navigationItem.focus(),n.preventDefault())})),this.$lastDoormatLink.on("keydown",(function(n){var i=n.keyCode;n.shiftKey||i!==a.TAB||e.removeActiveClassState(t.$doormatMenuLink)}))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},3470:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,n){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(r)?r:String(r)),o)}var r}var n,i,o;n=Bootstrap.jQuery,i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=n(e),this.bindUIElements(),this.createFooterMobileElements(),this.buildFooterMobile(),this.bindUIEvents()}var i,o;return i=t,(o=[{key:"bindUIElements",value:function(){this.$mobileSidebar=n(".".concat("header-mobile-sidebar")),this.$headerDoormatMobile=this.$mobileSidebar.find(".".concat("header-mobile-doormat")),this.$headerMobileFooterItem=this.$el.find(".".concat("header-mobile-footer-item")),this.$headerMobileFooterItemWrapper=this.$el.find(".".concat("header-mobile-footer-item-wrapper")),this.$footerLarge=this.$el.find(".".concat("footer-large")).clone(),this.$footerSupplementary=this.$el.find(".".concat("footer-supplementary")).clone()}},{key:"bindUIEvents",value:function(){var t=this;n(document).on("click",".".concat("opinion-lab-trigger"),(function(e){e.preventDefault(),t.opinionLabShow(e)}))}},{key:"createFooterMobileElements",value:function(){this.$footerMobileMenu=n("<div>",{class:"".concat("header-mobile-footer-menu"," ").concat("sidebar-submenu-wrapper"),"data-source":"mobile-footer"})}},{key:"buildFooterMobile",value:function(){this.$headerMobileFooterItem.find(".".concat("header-doormat-mobile-title")).data("target","mobile-footer").addClass("sidebar-submenu-trigger"),this.$headerDoormatMobile.append(this.$headerMobileFooterItem),this.$headerMobileFooterItemWrapper.remove(),this.$footerMobileMenu.insertAfter(this.$headerDoormatMobile),this.$footerMobileMenu.append(this.$footerLarge).append(this.$footerSupplementary)}},{key:"opinionLabShow",value:function(t){var e=window.oo_feedback||(window.OOo?window.OOo.oo_feedback:null);e&&e.show(t)}}])&&e(i.prototype,o),Object.defineProperty(i,"prototype",{writable:!1}),t}(),o={name:"footer",selector:".".concat("footer"),init:function(t){return new i(t)}},HSBC_utils.registerComponent(o)},6519:(t,e,n)=>{"use strict";var i=n(8654),o=n(2147),r=n(8772);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==a(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===a(o)?o:String(o)),i)}var o}!function(t){var e="is-active",n="hidden",a="header-search-black",l=".header-search",u=t(".page-overlay"),c=HSBC_utils.keyCodes,h=function(){function h(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,h),this.$el=t(e),this.$desktopClearCircle=this.$el.find(".header-clear-container"),this.$searchBox=this.$el.find(".search-box"),this.$searchButton=this.$el.find(".header-search-button"),this.notInteracted=!0,h.isVirtualAssistant()||(this.suggestions=new o.J(this.$el)),this.bindUIEvents(),this.manageClearCircleVisibility(),this.manageTypeOfSearchButton(),this.desktopSearchAllyObj=new r.c(this)}var f,d,p;return f=h,p=[{key:"isVirtualAssistant",value:function(){return!!t("#virtual-assistant-search").length}}],(d=[{key:"focusOutMethod",value:function(e){t(e.relatedTarget).closest(l).length||(u.addClass(n),HSBC_utils.isInternetExplorer&&(this.$searchBox.removeAttr("required"),this.$searchBox.attr("value","Search")))}},{key:"focusInMethod",value:function(e){this.trackFirstInteraction();var i=t(e.target).is(this.$searchButton),o=""===this.$searchBox.val();if(!i||!o)return u.removeClass(n),void(HSBC_utils.isInternetExplorer&&(this.$searchBox.removeAttr("value"),this.$searchBox.attr("required","")));u.addClass(n)}},{key:"bindUIEvents",value:function(){var e=this;this.$searchButton.on("click",(function(){return e.toggleSearchBox()})),this.$desktopClearCircle.on("click",(function(){e.clearSearchBox(),e.manageClearCircleVisibility()})),this.$el.on("focusout",this.focusOutMethod).on("focusin",this.focusInMethod),h.isVirtualAssistant()&&t(document).on("keyup",(function(t){t.keyCode===c.ESC&&e.fixVirtualAssistantSearchExit()})).on("mouseup",(function(){return e.fixVirtualAssistantSearchExit()}))}},{key:"clearSearchBox",value:function(){this.$searchBox.val("").focus(),this.manageTypeOfSearchButton()}},{key:"isExpanded",value:function(){return this.$searchBox.hasClass(e)}},{key:"isSearchBoxEmpty",value:function(){return!this.$searchBox.val().length}},{key:"toggleSearchBox",value:function(){this.isExpanded()&&this.isSearchBoxEmpty()?(this.$searchBox.removeClass(e),this.$el.addClass(a),HSBC_utils.isInternetExplorer&&this.$searchBox.blur()):(this.$searchBox.addClass(e),this.$el.removeClass(a),this.$searchBox.focus(),HSBC_utils.isInternetExplorer&&this.$searchBox.removeAttr("placeholder"))}},{key:"manageClearCircleVisibility",value:function(){var t=this.isSearchBoxEmpty()?"none":"inline-block";this.$desktopClearCircle.css("display",t)}},{key:"manageTypeOfSearchButton",value:function(){var t=this.isSearchBoxEmpty()?"button":"submit";this.$searchButton.attr("type",t)}},{key:"trackFirstInteraction",value:function(){this.notInteracted&&(this.notInteracted=!1,i.j.trackEventWithInheritance({event_category:"tool",event_subcategory:"search",event_action:"start",event_content:"masthead",tool_name:"internal search",tool_type:"search",tool_event:"interaction"}))}},{key:"fixVirtualAssistantSearchExit",value:function(){var t=this;setTimeout((function(){"Search"===t.$searchBox.val()&&(t.$searchBox.val("").change(),t.manageClearCircleVisibility())}),1)}}])&&s(f.prototype,d),p&&s(f,p),Object.defineProperty(f,"prototype",{writable:!1}),h}(),f={name:"Desktop Search",selector:l,init:function(t){return new h(t)}};HSBC_utils.registerComponent(f)}(Bootstrap.jQuery)},5721:(t,e,n)=>{"use strict";var i,o,r,a,s,l,u,c,h=n(2005),f=n(5469);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function p(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==d(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===d(o)?o:String(o)),i)}var o}i=Bootstrap.jQuery,o="is-expanded",r="hidden",a="icon-chevron-up-small",s="icon-chevron-down-small",l="aria-expanded",u=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=i(e),this.isExpanded=!1,this.$arrowIcon=this.$el.find(".icon").first(),this.$menuItems=this.$el.find("".concat(".item"," a")),this.$selectedItem=this.$el.find(".selected-item"),this.$loginButtonExpanded=this.$selectedItem.find(".login-button-expanded"),this.$loginButtonCollapsed=this.$selectedItem.find(".login-button-collapsed"),this.$selectedItem.hasClass("only-one-link")||(this.$selectedItem.attr(l,"false"),this.bindUIEvents()),this.headerDropdownAllyObj=new h.t(this),this.headerLoggedUserStateObj=new f.b(this)}var e,n;return e=t,(n=[{key:"bindUIEvents",value:function(){var t=this;this.$selectedItem.on("click",(function(){t.toggleDropdown()})),this.$menuItems.on("click",(function(){return t.collapse()})),i(document).on("click",(function(e){var n=e.target;t.$el.is(n)||t.$el.has(n).length||t.collapse()}))}},{key:"toggleDropdown",value:function(){this.isExpanded?this.collapse():this.expand()}},{key:"expand",value:function(){this.$el.addClass(o),this.$selectedItem.attr(l,"true"),this.$arrowIcon.addClass(a).removeClass(s),this.$loginButtonExpanded.removeClass(r),this.$loginButtonCollapsed.addClass(r),this.isExpanded=!0}},{key:"collapse",value:function(){this.$el.removeClass(o),this.$selectedItem.attr(l,"false"),this.$arrowIcon.addClass(s).removeClass(a),this.$loginButtonExpanded.addClass(r),this.$loginButtonCollapsed.removeClass(r),this.isExpanded=!1}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),c={name:"header-dropdown",selector:".header-dropdown",init:function(t){return new u(t)}},HSBC_utils.registerComponent(c)},5469:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{b:()=>c});var r="hidden",a="my-accounts-button",s=Bootstrap.jQuery,l=s(document.body),u={checked:!1,during:!1,authorized:!1,delayed:[]},c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=e,this.$el=e.$el,this.$logoutButton=this.$el.find(".logout-button"),this.$loginButton=this.$el.find(".login-button"),this.$loginLinks=this.$el.find(".login-links"),this.$mobileAccountsButton=this.$el.find(".".concat(a)),this.$registerButton=l.find(".register-button"),this.$el.hasClass(a)?this.$accountsButton=this.$el:this.$accountsButton=s("<div></div>"),this.adjustHeaderElements(this.$loginButton,this.$logoutButton),this.adjustHeaderElements(this.$registerButton,this.$accountsButton),this.adjustHeaderElements(s(),this.$mobileAccountsButton),this.bindUiEvents()}var e,n;return e=t,(n=[{key:"bindUiEvents",value:function(){var t=this;this.$logoutButton.length&&(s(document).on("dpws_logout_command",(function(){return t.logout()})),this.$logoutButton.attr("href")||this.$logoutButton.on("click",(function(){return t.redirectOnLogout()})))}},{key:"adjustHeaderElements",value:function(t,e){var n=this;u.checked?(this.changeLoggedState(u.authorized,t,e),this.isLoggedInEvent(u.authorized)):u.during?u.delayed.push((function(i){return n.changeLoggedState(i,t,e)})):(u.during=!0,s.ajax("/auth-status-hint",{cache:!1,contentType:"json"}).done((function(i){var o=i&&i.authorized;n.changeLoggedState(i&&i.authorized,t,e),n.isLoggedInEvent(o),u.during=!1,u.checked=!0,u.authorized=o,u.delayed.forEach((function(t){return t(o)})),u.delayed=[];var r=o?"40":"0";window.utag&&window.utag.data&&window.TMS?TMS.trackEvent("link",{page_security_level:r,logged_in:o}):(window.utag_data=window.utag_data||{},window.utag_data.page_security_level=r,window.utag_data.logged_in=o)})).fail((function(){n.isLoggedInEvent(!1)})))}},{key:"changeLoggedState",value:function(t,e,n){t?(e.addClass(r),n.removeClass(r),this.$loginLinks.remove()):(e.removeClass(r),n.addClass(r))}},{key:"getPagePath",value:function(){var t=s(document).find("[data-page-path]");return t?t.data("page-path"):""}},{key:"redirectOnLogout",value:function(){s("<form>",{method:"post",action:"/bin/logout.".concat(this.getPagePath())}).appendTo("body").submit()}},{key:"isLoggedInEvent",value:function(t){s(document).trigger(t?"dpws_authorized_true":"dpws_authorized_false")}},{key:"logout",value:function(){var t=this.$logoutButton.attr("href");t?"#cpi"!==t?this.redirectTo(t):window.cpiUtils?window.cpiUtils.logoffUser():this.redirectOnLogout():this.redirectOnLogout()}},{key:"redirectTo",value:function(t){document.location.href=t}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},1301:(t,e,n)=>{"use strict";var i,o,r,a,s,l,u,c,h=n(3055),f=n(5469);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function p(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==d(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===d(o)?o:String(o)),i)}var o}i=Bootstrap.jQuery,r={sidebar:"header-mobile-sidebar",sidebarTrigger:"header-sidebar-trigger",sidebarOpen:"sidebar-open",sidebarOverlay:"header-mobile-overlay",logoMobile:"header-mobile-logo",expanded:"expanded",active:"active",expandedAndActive:"expanded active",safariFixPadding:"safari-fix-padding",submenuTrigger:"sidebar-submenu-trigger",submenu:"sidebar-submenu-wrapper",doormatTrigger:"header-main-navigation-item",doormatSidebarTitle:"header-doormat-mobile-title",sidebarLinks:"header-mobile-sidebar-footer",sidebarHiddenCloseButton:"sidebar-hidden-close-button",closeSubmenuTrigger:"close-submenu-trigger",submenuExpanded:"submenu-expanded",doormatContainer:"doormat-container",doormatMenu:"doormat-menu",searchBox:"search-box",headerSearchButton:"header-search-button",contentOverlay:"header-mobile-overlay"},a=i("html"),s=i("body"),l={doormatSectionHeading:".sidebar-submenu-label, .footer-section-title",doormatSidebarItems:".header-doormat-mobile-title, .header-mobile-selected-item, .search-box, .header-mobile-search-container"},u=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),t.initSelectorsObject(),this.cacheDomElements(e),this.bindUIEvents(),this.ally=new h.A(this),this.headerLoggedUserStateObj=new f.b(this)}var e,n,u;return e=t,u=[{key:"initSelectorsObject",value:function(){Object.keys(r).forEach((function(t){return l[t]=".".concat(r[t])})),l.expandedOrActive=".".concat(r.expanded,",.").concat(r.active)}},{key:"scrollTop",value:function(){s.scrollTop(o),a.scrollTop(o)}}],(n=[{key:"cacheDomElements",value:function(t){this.$el=i(t),this.$sidebarTrigger=this.$el.find(l.sidebarTrigger),this.$sidebar=this.$el.find(l.sidebar),this.$header=this.$el.parent(),this.$sidebarOverlay=this.$el.find(l.sidebarOverlay),this.$logoMobile=this.$el.find(l.logoMobile),this.$sidebarLinks=this.$el.find(l.sidebarLinks),this.$sidebarHiddenCloseButton=this.$el.find(l.sidebarHiddenCloseButton),this.$submenuWrapper=this.$el.find(l.submenu),this.$doormatContainer=this.$el.find(l.doormatContainer),this.$doormatMenu=this.$el.find(l.doormatMenu),this.$doormatSidebarTitle=this.$el.find(l.doormatSidebarTitle),this.$doormatSidebarItems=this.$el.find(l.doormatSidebarItems),this.$submenuTrigger=this.$el.find(l.submenuTrigger),this.$closeSubmenuTrigger=this.$el.find(l.closeSubmenuTrigger),this.$searchBox=this.$el.find(l.searchBox),this.$doormatSectionHeading=this.$el.find(l.doormatSectionHeading),this.$headerSearchButton=this.$el.find(l.headerSearchButton),this.$contentOverlay=this.$el.find(l.contentOverlay)}},{key:"bindUIEvents",value:function(){var t=this;this.$el.on("click",l.submenuTrigger,(function(e){return t.toggleSubmenu(e)})).on("click",l.closeSubmenuTrigger,(function(){return t.collapseSubmenu()})),this.$sidebarTrigger.on("click",(function(e){e.preventDefault(),t.toggleSidebar()})),this.$sidebarHiddenCloseButton.on("click",(function(e){e.preventDefault(),t.closeSidebar(),t.$sidebarTrigger.focus()})),this.$sidebarOverlay.on("click",(function(){return t.closeSidebar()})),i(window).on("resize",(function(){return t.resizeEventHandler()})).on("load",(function(){return t.applyFixes()})).on("resize resize_when_banner_closed",(function(){t.calculateOverlayPosition(),t.ally.calculatePositionSidebarHiddenCloseButton()}))}},{key:"toggleSidebar",value:function(){this.isExpanded()?this.closeSidebar():this.openSidebar()}},{key:"isExpanded",value:function(){return this.$sidebar.hasClass(r.expandedAndActive)}},{key:"openSidebar",value:function(){this.$sidebar.addClass(r.expandedAndActive),o=s.scrollTop()||a.scrollTop(),s.addClass(r.sidebarOpen).css("marginTop",-o),this.positionSidebarLinks(),this.ally.openSidebar(),this.calculateOverlayPosition(),this.ally.makePageContentInaccessible(),this.$sidebarHiddenCloseButton.addClass(r.sidebarOpen),this.ally.calculatePositionSidebarHiddenCloseButton()}},{key:"closeSidebar",value:function(){s.css("marginTop",0),this.$sidebar.removeClass("".concat(r.expandedAndActive," ").concat(r.submenuExpanded)),s.removeClass(r.sidebarOpen),this.$sidebar.find(l.expandedOrActive).removeClass(r.expandedAndActive),t.scrollTop(),this.ally.closeSidebar(),this.ally.makePageContentAccessible(),this.$sidebarHiddenCloseButton.removeClass(r.sidebarOpen)}},{key:"toggleSubmenu",value:function(t){var e=i(t.target),n=e.hasClass(r.submenuTrigger)?e:e.closest(l.submenuTrigger),o=n.data("target"),a=this.$el.find("[data-source=".concat(o,"]")),s=a.hasClass(r.expandedAndActive);this.collapseSubmenu(),s||(n.addClass(r.expandedAndActive).attr("aria-expanded","true"),this.ally.openSubmenu(),a.removeAttr("tabindex").addClass(r.expandedAndActive).attr("aria-hidden","false").find(HSBC_utils.focusables.join()).first().focus(),this.$sidebar.addClass(r.submenuExpanded),t.preventDefault()),this.ally.updateFocusables()}},{key:"collapseSubmenu",value:function(){var t=this.$submenuTrigger.filter(".expanded");this.$sidebar.removeClass(r.submenuExpanded).find(l.expandedOrActive).removeClass(r.expandedAndActive),this.ally.closeSubmenu(),i(document.activeElement).is(this.$closeSubmenuTrigger)&&t.focus(),this.ally.updateFocusables()}},{key:"fixPaddingSafari",value:function(){HSBC_utils.isSafari&&this.$doormatContainer.addClass(r.safariFixPadding)}},{key:"fixSvgLogoIssue",value:function(){this.$logoMobile.toggle().toggle()}},{key:"applyFixes",value:function(){this.fixPaddingSafari(),this.fixSvgLogoIssue()}},{key:"positionSidebarLinks",value:function(){var t=this.$sidebarLinks.siblings(":visible").eq(-2),e=t.outerHeight(),n=this.$sidebarLinks.outerHeight(),o=0;this.$sidebar.hasClass(r.expandedAndActive)&&(o=i(window).height()-t.offset().top-e-n),o>0&&this.$sidebarLinks.css("top",o)}},{key:"resizeEventHandler",value:function(){HSBC_utils.matchMedia.desktop?this.closeSidebar():this.positionSidebarLinks()}},{key:"calculateOverlayPosition",value:function(){this.$contentOverlay.css("top",this.$header.innerHeight())}}])&&p(e.prototype,n),u&&p(e,u),Object.defineProperty(e,"prototype",{writable:!1}),t}(),c={name:"Mobile Header",selector:".header-mobile",init:function(t){return new u(t)}},HSBC_utils.registerComponent(c)},597:(t,e,n)=>{"use strict";var i=n(8654),o=n(2147),r=n(7013);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==a(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===a(o)?o:String(o)),i)}var o}!function(t){var e="hidden",n=function(){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=t(n),this.$clearCircle=this.$el.find(".clear-container"),this.$searchBox=this.$el.find(".search-box"),this.$searchOverlay=this.$el.find(".search-overlay"),this.suggestions=new o.J(this.$el),this.notInteracted=!0,this.bindUIEvents(),this.manageClearCircleVisibility(),this.searchMobileAllyObj=new r.c(this)}var n,l;return n=e,(l=[{key:"bindUIEvents",value:function(){var t=this;this.$clearCircle.on("click",(function(){t.clearSearchBox(),t.manageClearCircleVisibility()})),this.$searchBox.on({blur:function(){return t.setOverlayVisibility(!1)},focusin:function(){t.setOverlayVisibility(!0),t.trackFirstInteraction()},input:function(){return t.handleInputChange()}})}},{key:"handleInputChange",value:function(){this.manageClearCircleVisibility()}},{key:"clearSearchBox",value:function(){this.$searchBox.val("").focus()}},{key:"manageClearCircleVisibility",value:function(){a(this.$clearCircle,this.$searchBox.val().length)}},{key:"setOverlayVisibility",value:function(t){a(this.$searchOverlay,t)}},{key:"trackFirstInteraction",value:function(){this.notInteracted&&(this.notInteracted=!1,i.j.trackEventWithInheritance({event_category:"tool",event_subcategory:"search",event_action:"start",event_content:"masthead",tool_name:"internal search",tool_type:"search",tool_event:"interaction"}))}}])&&s(n.prototype,l),Object.defineProperty(n,"prototype",{writable:!1}),e}();function a(t,n){n?t.removeClass(e):t.addClass(e)}var l={name:"Mobile Search",selector:".header-mobile-search-container",init:function(t){return new n(t)}};HSBC_utils.registerComponent(l)}(Bootstrap.jQuery)},2147:(t,e,n)=>{"use strict";n.d(e,{J:()=>f});var i=n(7026),o=n(4553);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===r(o)?o:String(o)),i)}var o}var s="aria-hidden",l="hidden",u="search-suggestion-template",c=HSBC_utils.keyCodes,h=Bootstrap.jQuery,f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=e,this.$suggestions=this.$el.find(".search-suggestions"),this.$suggestionList=this.$suggestions.find(".suggestion-list"),this.$searchBox=this.$el.find(".search-box"),this.$helper=this.$el.find(".search-suggestions-helper"),this.searchService=new i.o(this.getConfig()),this.setUpGlobalSettings(),this.$suggestionsTotal=this.$el.find(".suggestions-total"),this.results=[],this.setMustacheTemplates(),this.bindUIEvents(),this.ally=new o.c(this)}var e,n;return e=t,(n=[{key:"bindUIEvents",value:function(){var t=this;this.$searchBox.on("input",(function(){return t.resolveSuggestions()})),h(window).on("click",(function(e){h(e.target).parents(".header-mobile-search-container").length||t.removeSuggestions()}))}},{key:"setUpGlobalSettings",value:function(){this.globalSettings=h(document.body).data("global-settings")}},{key:"fetchTotalSuggestionsAllyText",value:function(){return this.globalSettings&&this.globalSettings.totalSuggestions?this.globalSettings.totalSuggestions:""}},{key:"resolveSuggestions",value:function(){var t=this;this.searchService.getSuggestions({query:this.$searchBox.val()}).done((function(e){t.results=e||[],t.results.length?t.showSuggestions():(t.$helper.empty().html(0),t.hideSuggestions())}))}},{key:"showSuggestions",value:function(){this.$suggestions.removeClass(l).attr(s,!1),this.$helper.empty().html(this.results.length),this.$helper.parent().attr(s,!1),this.render()}},{key:"render",value:function(){var t=this;this.$suggestionList.empty(),this.results.forEach((function(e){return t.$suggestionList.mustache(u,{text:e})})),this.$suggestionsTotal.html("".concat(this.results.length," ").concat(this.fetchTotalSuggestionsAllyText())),this.$suggestionItems=this.$suggestionList.find(".suggestion-item"),this.bindSuggestionsUIEvents()}},{key:"bindSuggestionsUIEvents",value:function(){var t=this;this.$suggestionItems.on("click",(function(e){return t.handleSuggestionChoice(h(e.target))})).on("keydown",(function(e){var n=e.keyCode;n!==c.ENTER&&n!==c.SPACE||t.handleSuggestionChoice(h(e.target))})).on("focusout",(function(e){h(e.relatedTarget).hasClass("suggestion-item")||t.hideSuggestions()})),this.ally.bindSuggestionsUIEvents()}},{key:"handleSuggestionChoice",value:function(t){var e=t.text();this.hideSuggestions(),this.$searchBox.val(e)}},{key:"hideSuggestions",value:function(){this.removeSuggestions(),this.$searchBox.focus()}},{key:"removeSuggestions",value:function(){this.$suggestions.addClass(l).attr(s,!0),this.$helper.parent().attr(s,!0)}},{key:"getConfig",value:function(){return this.$el.data("config")}},{key:"setMustacheTemplates",value:function(){h.Mustache.add(u,this.$el.find(".".concat(u)).html())}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},8772:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{c:()=>a});var r="aria-label",a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=e.$el,this.$searchButton=e.$searchButton,this.$searchBox=e.$searchBox,this.context=e,this.setSearchButtonAriaLabelTexts(),this.bindUIEvents()}var e,n;return e=t,(n=[{key:"setSearchButtonAriaLabelTexts",value:function(){this.searchButtonAriaLabels={open:this.$searchButton.attr("data-aria-label-open-searchbox"),close:this.$searchButton.attr("data-aria-label-close-searchbox"),displayResults:this.$searchButton.attr("data-aria-label-display-search-results")}}},{key:"bindUIEvents",value:function(){var t=this,e=this.context;this.$searchBox.on("keyup",(function(){e.manageClearCircleVisibility(),e.manageTypeOfSearchButton(),t.setSearchButtonTabindex()})).on("change",(function(){return t.submitText()})),this.$searchButton.on("click",(function(){return t.toggleSearchButtonText()})),e.$desktopClearCircle.on("click",(function(){t.$searchButton.attr(r,t.searchButtonAriaLabels.close),t.setSearchButtonTabindex()}))}},{key:"toggleSearchButtonText",value:function(){var t=this.context.isExpanded()?this.searchButtonAriaLabels.close:this.searchButtonAriaLabels.open;this.$searchButton.attr(r,t),this.setSearchButtonTabindex()}},{key:"submitText",value:function(){this.$searchButton.attr(r,this.searchButtonAriaLabels.displayResults)}},{key:"setSearchButtonTabindex",value:function(){this.context.isExpanded()&&this.context.isSearchBoxEmpty()?(this.$searchButton.attr("tabindex",-1),this.$searchButton.attr("aria-hidden","true")):(this.$searchButton.attr("tabindex",0),this.$searchButton.attr("aria-hidden","false"))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},2005:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{t:()=>s});var r=HSBC_utils.keyCodes,a=Bootstrap.jQuery,s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=e,this.$el=e.$el,this.$menuItems=this.$el.find("".concat(".item"," a")),this.bindUIEvents()}var e,n;return e=t,(n=[{key:"bindUIEvents",value:function(){var t=this,e=this.context;this.$menuItems.on("keydown",(function(e){return t.handleItemsKeyEvent(e)})),e.$selectedItem.on("click",(function(){e.isExpanded&&(HSBC_utils.isInternetExplorer?setTimeout((function(){t.$menuItems.first().focus()}),700):t.$menuItems.first().focus())})).on("keydown",(function(n){var i=n.keyCode,o=i===r.SPACE,a=i===r.ENTER;if(o||a){if(e.$selectedItem.trigger("click"),t.isLogonWithOnlyOneLink(n))return;n.preventDefault()}}))}},{key:"isLogonWithOnlyOneLink",value:function(t){return t.target.classList.contains("only-one-link")}},{key:"handleItemsKeyEvent",value:function(t){var e=this.context,n=t.keyCode,i=t.shiftKey,o=n===r.ENTER,s=n===r.DOWN,l=n===r.UP,u=n===r.TAB,c=u&&i,h=a(t.target),f=h.parent();s?f.next().find("a").focus():(l||c)&&(this.$menuItems.first().is(h)?(e.toggleDropdown(),e.$selectedItem.focus()):f.prev().find("a").focus()),u&&!i?this.$menuItems.last().is(h)&&e.toggleDropdown():o||t.preventDefault()}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},3055:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{A:()=>l});var r="hidden",a=Bootstrap.jQuery,s=HSBC_utils.keyCodes,l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=e.$el,this.$target=e.$target,this.$sidebar=e.$sidebar,this.$header=e.$header,this.$sidebarTrigger=e.$sidebarTrigger,this.$doormatMenu=e.$doormatMenu,this.$doormatSidebarTitle=e.$doormatSidebarTitle,this.$doormatSidebarItems=e.$doormatSidebarItems,this.$submenuTrigger=e.$submenuTrigger,this.$closeSubmenuTrigger=e.$closeSubmenuTrigger,this.$submenuWrapper=e.$submenuWrapper,this.$searchBox=e.$searchBox,this.$doormatSectionHeading=e.$doormatSectionHeading,this.$headerSearchButton=e.$headerSearchButton,this.$sidebarHiddenCloseButton=e.$sidebarHiddenCloseButton,this.context=e,this.updateDoormatAccessibility(),this.setSidebarAriaLabelTexts(),this.updateFocusables(),this.bindUIEvents()}var e,n;return e=t,(n=[{key:"bindUIEvents",value:function(){var t=this;this.$el.on("keydown",(function(e){return t.keydownEventHandler(e)})),this.$sidebarTrigger.on("click",(function(){return t.updateDoormatAccessibility()}))}},{key:"keydownEventHandler",value:function(t){var e=t.keyCode,n=e===s.TAB,i=e===s.ENTER;n?this.tabPressedEventHandler(t):i&&this.enterPressedEventHandler(t)}},{key:"tabPressedEventHandler",value:function(t){var e=t.target,n=this.$sidebar.hasClass("expanded"),i=e===this.$firstFocusable[0]&&t.shiftKey,o=e===this.$lastFocusable[0]&&!t.shiftKey,r=a(e).hasClass("header-sidebar-trigger"),s=this.$sidebar.hasClass("submenu-expanded");n&&r&&!s?((t.shiftKey?this.$lastFocusable:this.$firstFocusable).focus(),t.preventDefault()):n&&r&&s?(this.$closeSubmenuTrigger.focus(),t.preventDefault()):(i||o)&&(this.$sidebarTrigger.focus(),t.preventDefault())}},{key:"enterPressedEventHandler",value:function(t){var e=this.context,n=a(t.target);n.hasClass("sidebar-submenu-trigger")?e.toggleSubmenu(t):n.hasClass("close-submenu-trigger")&&e.collapseSubmenu()}},{key:"updateDoormatAccessibility",value:function(){this.$sidebar.find(".header-main-navigation-item").removeAttr("tabindex aria-expanded").attr("role","presentation").children(this.$doormatSidebarTitle).attr("tabindex",0),this.$submenuTrigger.attr({role:"menuitem","aria-haspopup":!0})}},{key:"setSidebarAriaLabelTexts",value:function(){this.sideBarAriaLabels={open:this.$sidebarTrigger.attr("data-aria-label-open-menu"),close:this.$sidebarTrigger.attr("data-aria-label-close-menu")}}},{key:"updateFocusables",value:function(){var t=this.$sidebar.find(HSBC_utils.focusables.join()).filter((function(t,e){return"none"!==a(e).css("display")}));this.$firstFocusable=t.first(),this.$lastFocusable=t.last()}},{key:"closeSidebar",value:function(){this.$sidebarTrigger.attr("aria-label",this.sideBarAriaLabels.open)}},{key:"openSidebar",value:function(){this.$sidebarTrigger.attr("aria-label",this.sideBarAriaLabels.close),this.showSidebarForScreenReaders()}},{key:"closeSubmenu",value:function(){this.$submenuTrigger.attr("aria-expanded","false"),this.$closeSubmenuTrigger.addClass(r),this.showSidebarForScreenReaders()}},{key:"openSubmenu",value:function(){this.$closeSubmenuTrigger.removeClass(r),this.hideSidebarForScreenReaders()}},{key:"hideSidebarForScreenReaders",value:function(){this.$doormatSectionHeading.attr("tabindex",0),this.$doormatSidebarItems.attr({tabindex:-1,"aria-hidden":"true"}),this.$submenuWrapper.attr("aria-hidden","false")}},{key:"showSidebarForScreenReaders",value:function(){this.$doormatMenu.attr("aria-hidden","true"),this.$doormatSectionHeading.attr("tabindex",-1),this.$doormatSidebarItems.attr({tabindex:0,"aria-hidden":"false"}),this.$submenuWrapper.attr("aria-hidden","true")}},{key:"makePageContentInaccessible",value:function(){this.$header.nextAll("div").wrapAll(a("<div>").addClass("page")),this.$header.siblings(".page").attr("aria-hidden","true"),this.$sidebar.siblings("div").attr("aria-hidden","true")}},{key:"makePageContentAccessible",value:function(){this.$header.siblings(".page").children().unwrap(),this.$sidebar.siblings("div").removeAttr("aria-hidden")}},{key:"calculatePositionSidebarHiddenCloseButton",value:function(){this.$sidebarHiddenCloseButton.css("top",this.$header.innerHeight()-28)}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},7013:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{c:()=>r});var r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=e.$el,this.context=e,this.$searchButton=this.$el.find(".header-search-button"),this.changeSearchButtonBehavior(),this.bindUIEvents()}var e,n;return e=t,(n=[{key:"bindUIEvents",value:function(){var t=this,e=this.context;e.$searchBox.on("input",(function(){return t.changeSearchButtonBehavior()})),e.$clearCircle.on("click",(function(){return t.changeSearchButtonBehavior()}))}},{key:"changeSearchButtonBehavior",value:function(){var t=this.context,e=t.$searchBox.val().length?0:-1,n=t.$searchBox.val().length?"false":"true";this.$searchButton.attr("tabindex",e),this.$searchButton.attr("aria-hidden",n)}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},4553:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e,n){return(e=a(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,a(i.key),i)}}function a(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===i(e)?e:String(e)}n.d(e,{c:()=>u});var s=Bootstrap.jQuery,l=HSBC_utils.keyCodes,u=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=e.$el,this.$suggestionItems=e.$suggestionItems,this.context=e,this.bindUIEvents()}var e,n;return e=t,(n=[{key:"bindUIEvents",value:function(){var t=this;this.context.$searchBox.on("keyup",(function(e){if(t.context.results.length){var n,i=(o(n={},l.DOWN,(function(){return t.$suggestionItems.first().focus()})),o(n,l.ESC,(function(){return t.context.hideSuggestions()})),n);t.handleKeyPress(e,i)}}))}},{key:"bindSuggestionsUIEvents",value:function(){var t=this;this.context.$suggestionItems.on("keydown",(function(e){var n,i=(o(n={},l.ENTER,t.context.handleSuggestionChoice),o(n,l.ESC,t.context.hideSuggestions),o(n,l.DOWN,(function(t){return t.next().focus()})),o(n,l.UP,(function(t){return t.prev().focus()})),n);t.handleKeyPress(e,i)})),this.context.$suggestionItems.first().on("keydown",(function(e){return t.handleArrowKeys(e,!0)})),this.context.$suggestionItems.last().on("keydown",(function(e){return t.handleArrowKeys(e,!1)}))}},{key:"handleArrowKeys",value:function(t,e){t.keyCode===(e?l.UP:l.DOWN)&&this.hideSuggestions()}},{key:"handleKeyPress",value:function(t,e){var n=t.keyCode,i=s(t.target);e.hasOwnProperty(n)&&(t.preventDefault(),e[n].call(this,i))}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},3587:()=>{var t=!1;void 0===window.cpiUtils&&(window.cpiUtils={},t=!0,window.console&&console.log("CPI not found - uses DPWS cpi impl")),t&&(cpiUtils.forEach=function(t,e,n){"use strict";var i;for(i=0;i<t.length;i++)e.call(n,i,t[i])},cpiUtils.closest=function(t,e){"use strict";if("function"==typeof t.closest)return t.closest(e)||null;for(;t;){if(cpiUtils.matches(t,e))return t;t=t.parentElement}return null},cpiUtils.matches=function(t,e){"use strict";var n;if("function"==typeof t.matches)return t.matches(e)||null;var i=document.querySelectorAll(e);for(n=i.length,n-=1;n>=0&&i.item(n)!==t;)n-=1;return n>-1},cpiUtils.templateReplace=function(t,e){"use strict";var n,i=Object.keys(e),o=null;for(n=0;n<i.length;n++)o=i[n],t=t.replace("${".concat(o,"}"),e[o]);return t},cpiUtils.getElementsFromSelector=function(t,e){"use strict";var n=null;if(e=e||document,/^(#?[\w-]+|\.[\w-.]+)$/.test(t))switch(t.charAt(0)){case"#":return[e.getElementById(t.substr(1))];case".":return n=t.substr(1).replace(/\./g," "),[].slice.call(e.getElementsByClassName(n));default:return[].slice.call(e.getElementsByTagName(t))}return[].slice.call(e.querySelectorAll(t))},cpiUtils.getCookieValue=function(t){"use strict";var e=new RegExp("".concat(t,"=([^;]+)")).exec(document.cookie);return e?decodeURI(e[1]):null},cpiUtils.isMobile=function(){"use strict";var t=navigator.userAgent||navigator.vendor||window.opera;return!!/windows phone/i.test(t)||!!/android/i.test(t)||!(!/iPad|iPhone|iPod/.test(t)||window.MSStream)},cpiUtils.page={changesEnabled:!1,hasChanges:function(t){"use strict";cpiUtils.page.changesEnabled=t},changesDetected:function(){"use strict";return cpiUtils.page.changesEnabled}},cpiUtils.eventHandler={addEvent:function(t,e,n){"use strict";function i(t){var e=n.apply(this,arguments);return!1===e&&(t.stopPropagation(),t.preventDefault()),e}function o(){var e=n.call(t,window.event);return!1===e&&(window.event.returnValue=!1,window.event.cancelBubble=!0),e}return t?t.attachEvent?(t.attachEvent("on".concat(e),o),{elem:t,handler:o,event:e}):(t.addEventListener(e,i,!1),{elem:t,handler:i,event:e}):null},removeEvent:function(t){"use strict";t.elem.removeEventListener?t.elem.removeEventListener(t.event,t.handler):t.elem.detachEvent("on".concat(t.event),t.handler)}},cpiUtils.topic={NAVIGATE_AWAY:"navigate-away",NAVIGATE_AWAY_MODAL_SHOW:"navigate-away.modal-show",NAVIGATE_AWAY_LEAVE:"navigate-away.leave",publish:function(t,e){"use strict";window.PubSub.publish(t,e)},publishSync:function(t,e){"use strict";window.PubSub.publishSync(t,e)},subscribe:function(t,e){"use strict";window.PubSub.subscribe(t,e)}},cpiUtils.logoffUser=function(){"use strict";var t,e,n,i,o=document.getElementById("cpiLogoffScript"),r={retail:o.getAttribute("data-retail-logoff-url"),advance:o.getAttribute("data-advance-logoff-url"),premier:o.getAttribute("data-premier-logoff-url")},a=o.getAttribute("data-logoff-path-default"),s=JSON.parse(o.getAttribute("data-logoff-paths"));i=cpiUtils.getCookieValue("segment-hint")||"retail",a?(n=a,cpiUtils.forEach(s,(function(t,e){e.segment===i&&(n=e.path)}))):n=r[i],t=n,e=document.createElement("form"),document.body.appendChild(e),e.setAttribute("method","post"),e.setAttribute("action",t),e.submit()},cpiUtils.navigateAwayInternal=function(t){var e,n,i=cpiUtils.navigateAway.triggerEl&&cpiUtils.navigateAway.triggerEl.getAttribute("target")?cpiUtils.navigateAway.triggerEl.getAttribute("target"):"_self";function o(){var t=cpiUtils.navigateAway.triggerEl.getAttribute("href");window.open(t,i)}function r(){cpiUtils.topic.publishSync(cpiUtils.topic.NAVIGATE_AWAY_LEAVE,{changes:!0,external:!1}),o()}cpiUtils.page.changesDetected()&&"_self"===i?(n=(e=document.getElementById("cpi-modal-navigate-away-internal")).querySelector(".cpi-modal-dialog__close-icon"),e&&cpiUtils.modal.show(e,t,n,(function(){cpiUtils.topic.publish(cpiUtils.topic.NAVIGATE_AWAY_MODAL_SHOW,{changes:!0,external:!1})}),{},(function(){cpiUtils.navigateAway.checkForCallBack(r)}))):cpiUtils.navigateAway.checkForCallBack(o)},cpiUtils.navigateAwayExternal=function(t){function e(){var t,e;cpiUtils.topic.publishSync(cpiUtils.topic.NAVIGATE_AWAY_LEAVE,{changes:cpiUtils.page.changesDetected(),external:!0}),t=document.createElement("form"),e=cpiUtils.navigateAway.triggerEl.getAttribute("data-external-url"),document.body.appendChild(t),t.setAttribute("method","post"),t.setAttribute("action","/bin/logout."+e),t.submit()}var n,i;i=null,(n=document.getElementById("cpi-modal-navigate-away-external"))&&(i=n.querySelector(".cpi-modal-dialog__close-icon"),cpiUtils.modal.show(n,t,i,(function(t){var e=t.querySelector(".cpi-modal-dialog__sub-text"),n=t.querySelector(".cpi-modal-dialog__wrapper"),i="cpi-modal-dialog__sub-text--visible";cpiUtils.topic.publish(cpiUtils.topic.NAVIGATE_AWAY_MODAL_SHOW,{changes:cpiUtils.page.changesDetected(),external:!0}),cpiUtils.page.changesDetected()&&!e.classList.contains(i)?(n.setAttribute("aria-describedby","external-link-modal-text external-link-modal-sub-text"),e.classList.add(i)):(n.setAttribute("aria-describedby","external-link-modal-text"),e.classList.remove(i))}),{},(function(){cpiUtils.navigateAway.checkForCallBack(e)})))},cpiUtils.navigateAway=function(t,e){"use strict";var n=cpiUtils.closest(t.target,"a");cpiUtils.navigateAway.triggerEl=n,cpiUtils.navigateAway.callback=e,cpiUtils.navigateAway.checkForCallBack=function(e){var n=cpiUtils.navigateAway.callback;n&&"function"==typeof n?n(t):e()},n&&n.getAttribute("data-external-url")?(t.preventDefault(),cpiUtils.navigateAwayExternal(t)):(n&&"#"!==n.getAttribute("href")||e)&&(t.preventDefault(),cpiUtils.navigateAwayInternal(t))}),function(){if(void 0!==window.cpiUtils){var t=document.querySelectorAll(".cpi-masthead-logoff__button-dpws");if(t&&t.length)for(var e=0;e<t.length;e++)cpiUtils.eventHandler.addEvent(t[e],"click",(function(t){cpiUtils.navigateAway(t,n)}))}else window.console&&console.log("cpiUtils is not defined");function n(){cpiUtils.logoffUser()}}()},8895:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,n){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(r)?r:String(r)),o)}var r}var n,i,o;n=Bootstrap.jQuery,i=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.APP=i,this.$header=n(e),this.$headerNav=this.$header.find(".header-main-navigation"),this.$logoWrapper=this.$header.find(".header-logo"),this.cacheDomElements(),this.bindUiEvents(),this.detectPatternLab(),this.zoomDetectionTimeout(),this.toggleLogo()}var i,o;return i=t,(o=[{key:"detectPatternLab",value:function(){HSBC_utils.isPatternLab()?this.$header.addClass("header-patternlab"):this.$header.addClass("header-no-patternlab")}},{key:"cacheDomElements",value:function(){this.$skipToContentLink=this.$header.find(".skip-to-content-link"),this.$topOfContent=n(document).find(".top-of-content")}},{key:"setContentPadding",value:function(){this.APP.globalComponents.configuration.checkViewTypeIsForClient()&&this.APP.globalComponents.headerController.setPaddingToMainContent()}},{key:"bindUiEvents",value:function(){var t=this;this.$skipToContentLink.on("click",(function(e){t.$topOfContent.addClass("active").focus(),e.preventDefault()})),n(window).on("resize headerMessageChange",(function(){t.setContentPadding()}))}},{key:"zoomDetectionTimeout",value:function(){var t=this;n(".header-main").resize((function(){t.setContentPadding()}))}},{key:"toggleLogo",value:function(){var t=this;n(window).on("load",(function(){t.$logoWrapper.toggle().toggle()}))}}])&&e(i.prototype,o),Object.defineProperty(i,"prototype",{writable:!1}),t}(),o={name:"header",selector:".header",init:function(t,e){return new i(t,e)}},HSBC_utils.registerComponent(o)},7456:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,n){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(r)?r:String(r)),o)}var r}var n,i,o,r,a;n=Bootstrap.jQuery,i="HSBC_CLIENT_COOKIE",o="PreferredLocale=",r={path:"/",expires:{days:365}},a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=n(e),this.$selectedTriggerLink=this.$el.find(".is-selected a[lang]"),this.fetchGlobalSettings(),this.observeTriggers(),this.initLocale()}var a,s;return a=t,(s=[{key:"initLocale",value:function(){this.updateLocale(this.$selectedTriggerLink.attr("lang"))}},{key:"fetchGlobalSettings",value:function(){var t=n("body").data("global-settings");t&&t.cookieDomain&&(r.domain=t.cookieDomain)}},{key:"observeTriggers",value:function(){var t=this;this.$el.find("a[lang]").on("click",(function(e){t.updateLocale(e.target.lang)}))}},{key:"updateLocale",value:function(t){var e,n,i=this.getLocale(),o=(n=e=t,e&&-1!==e.indexOf("-")&&(n=e.split("-")[0],n+="_",n+=e.split("-")[1].toUpperCase()),n||"");o.length&&i!==o&&this.setLocale(o)}},{key:"setLocale",value:function(t){var e=HSBC_utils.getCookie(i),n=new RegExp("^(.*,)?".concat(o,"[^,]*(,.*)?$")),a=o+(t=t||"");e=e?-1!==e.indexOf(o)?e.replace(n,"$1".concat(a,"$2")):"".concat(e,",").concat(a):a,HSBC_utils.deleteCookie(i,r.path),HSBC_utils.setCookie(i,e,r)}},{key:"getLocale",value:function(){var t=HSBC_utils.getCookie(i),e=new RegExp("^(.*,)?".concat(o,"([^,]*)(,.*)?$"));return t&&-1!==t.indexOf(o)?t.replace(e,"$2"):null}}])&&e(a.prototype,s),Object.defineProperty(a,"prototype",{writable:!1}),t}(),HSBC_utils.registerComponent({name:"localemanagement",selector:".locale-management",init:function(t){return new a(t)}})},2084:(t,e,n)=>{"use strict";var i=n(2090);HSBC_utils.registerComponent({name:"messagingBanner",selector:"#messaging-banner.messaging-banner.pub",init:function(t){return new i.h(t,"")}})},1667:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{T:()=>u});var a=HSBC_utils.keyCodes,s=Bootstrap.jQuery,l="mw-cancel-trigger",u=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=e.$el,this.context=e}var e,n;return e=t,(n=[{key:"bindUIEvents",value:function(){var t,e,n=this,i=this.context,r=i.$modal.find(l);this.$focusables=(t=this.context.$modal).find.apply(t,function(t){if(Array.isArray(t))return o(t)}(e=HSBC_utils.focusables)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r.on("click",(function(){n.$focusables.first()[0].focus()})),i.$modal.on("keydown",(function(t){var e=s(document.activeElement),o=t.keyCode,r=o===a.ESC&&i.$modal.hasClass("is-visible"),u=o===a.ENTER&&e.hasClass(l),c=o===a.TAB;r||u?(t.preventDefault(),i.close()):c&&n.handleKeyPress(t)}))}},{key:"handleKeyPress",value:function(t){var e=this.context,n=document.activeElement,i=this.$focusables.first()[0],o=this.$focusables.last()[0];e.$modal.find(".".concat("modal-announcement-sr-text")).addClass("hidden"),n!==o||t.shiftKey?n===i&&t.shiftKey&&(o.focus(),t.preventDefault()):(i.focus(),t.preventDefault())}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},3710:(t,e,n)=>{"use strict";var i=n(7856),o=n.n(i),r=n(7967),a=n(1667);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==s(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===s(o)?o:String(o)),i)}var o}var u=Bootstrap.jQuery,c="M-MODWIN-DEV",h="modal-window-overlay",f="external-link-modal",d="is-visible",p="hidden",m="vertical-scrollbar-hidden",y="data-content-id",v="default",b={link:"a",component:"[data-external-link-modal-url]",allContents:"[data-content-id]",allNonDefaultContents:"[".concat(y,"][").concat(y,' != "').concat(v,'"]')},g=u("body"),S=u(document),k="aria-hidden",w=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$moduleElement=u(e),this.modalSource=this.$moduleElement.data("external-link-modal-url"),this.$link=null,this.$modal=null,this.bindUIEvents(),this.allyModule=new a.T(this)}var e,n;return e=t,(n=[{key:"bindUIEvents",value:function(){var t=this;this.modalSource&&S.on("click",b.link,(function(e){return t.linkClickHandler(e)})).on("modalWindow:switchedToEdit",b.link,(function(){return t.close()}))}},{key:"linkClickHandler",value:function(t){this.$link=u(t.target),t.target.tagName.toLowerCase()!==b.link&&(this.$link=this.$link.parents(b.link));var e=this.$link.attr("href")||"";if(e.length&&0!==e.indexOf("#")){this.$link.data("which",t.which),1!==t.which&&t.preventDefault();var n=this.analyzeUrl(e,window.dpwsExternalLinkConfiguration);n.isModal&&(t.preventDefault(),HSBC_utils.isEditMode()||(this.$modal?(this.open(),$(g,m)):(this.getMarkup(),$(g,m)))),t.isDefaultPrevented()&&!n.isModal&&n.inWhiteList&&this.leave()}}},{key:"analyzeUrl",value:function(t,e){var n=new RegExp("(^#)|(^/)|(^../)|(^mailto:)|(^tel:)|(^javascript*)((?!.location=).)*$");if(new RegExp("(^http)|(^ftp)|(^//)|(^javascript.*.location=)").test(t)){var i=t.split("//").slice(1)[0],o=i.split("/")[0],r=i.split("/").slice(1).join("/");this.contentId=function(t,e,n){for(var i in n)for(var o=n[i],r=0;r<o.length;r++)if(C(t,e,o[r]))return i;return null}(o,r,e.blacklist);var a=function(t,e,n){for(var i=0;i<n.length;i++)if(C(t,e,n[i]))return!0;return!1}(o,r,e.whitelist);return this.linkCharacteristics(this.contentId||!a,a)}return n.test(t)?this.linkCharacteristics(!1,!1):this.linkCharacteristics(!0,!1)}},{key:"linkCharacteristics",value:function(t,e){return{isModal:t,inWhiteList:e}}},{key:"getMarkup",value:function(){var t=this;this.modalSource&&u.ajax({type:"GET",dataType:"HTML",url:this.modalSource,success:function(e){var n=o().sanitize(e);t.setUpModalWindow(u('<div class="'.concat(h," ").concat(f,'"><div class="').concat(c,'">').concat(n,"</div></div>"))),t.open()},error:function(t){return console.error(t)}})}},{key:"open",value:function(){var t=this;this.setSpecificContent(),this.$modal.addClass(d).removeAttr(k).removeAttr("aria-disabled").siblings().attr(k,"true").css("display","none"),this.setTabIndexElementValue(-1,this.$descriptionEl),this.defer((function(){return t.$descriptionEl.focus()}),200),this.focusedElBeforeOpen=document.activeElement}},{key:"setSpecificContent",value:function(){this.$modal.find(b.allContents).addClass(p),this.$modal.find("[".concat(y,'="').concat(this.contentId||v,'"]')).removeClass(p)}},{key:"close",value:function(){if(this.$modal&&(this.$modal.find(".".concat("modal-announcement-sr-text")).removeClass(p),this.$modal.removeClass(d).attr(k,"true").attr("aria-disabled","true").siblings().removeAttr(k).css("display","")),this.$link){this.$link.removeAttr("data-which");var t=this;this.defer((function(){t.$link.get(0).focus()}))}$(g,m),this.bringBackFocus()}},{key:"bringBackFocus",value:function(){if(this.focusedElBeforeOpen){this.focusedElBeforeOpen.focus();var t=u(this.focusedElBeforeOpen);if(t.is(":focusable"))t.get(0).focus();else for(;;){var e=t.siblings(":focusable");if(e.length>0){e.get(0).focus();break}if(t.is("body")){t.get(0).focus();break}t=t.parent()}}}},{key:"defer",value:function(t,e){setTimeout(t||function(){},e||5)}},{key:"linkReferrerPolyfillForExplorerToRedirect",value:function(t,e){var n=document.createElement("a");n.setAttribute("href",(0,r.N)(t)),n.setAttribute("target",e),n.style.display="block";var i=o().sanitize(n);document.body.appendChild(i),u(i).bind("click",(function(t){t.stopPropagation()})),n.click()}},{key:"leave",value:function(){var t=this.$link.attr("href"),e=2===this.$link.data("which")?"_blank":this.$link.attr("target");HSBC_utils.isInternetExplorer&&e?this.linkReferrerPolyfillForExplorerToRedirect(t,e):e?window.open((0,r.N)(t),e):window.location.href=(0,r.N)(t),this.close()}},{key:"setUpModalWindow",value:function(t){this.$modal=S.find(f),this.$modal.length||(this.$modal=t,this.$modal.appendTo(g)),this.$modal.removeClass(d),this.cacheModalElements(),this.lateBindUIEvents(),this.$modal.find(b.allNonDefaultContents).each((function(){u(this).parent().replaceWith(this)}))}},{key:"setTabIndexElementValue",value:function(t,e){e.attr("tabindex")||e.attr("tabindex",t)}},{key:"cacheModalElements",value:function(){this.$cancelTriggers=this.$modal.find(".".concat("mw-cancel-trigger")),this.$allowTriggers=this.$modal.find(".".concat("mw-allow-trigger")),this.$descriptionEl=this.$modal.find(".".concat("text-container"))}},{key:"lateBindUIEvents",value:function(){var t=this;this.$cancelTriggers.on("click",(function(){return t.close()})),this.$allowTriggers.on("click",(function(){return t.leave()})),this.$modal.on("click",(function(e){var n=u(e.target);n.parents(".".concat(c)).length||n.hasClass(h)||t.close()})),this.allyModule.bindUIEvents()}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function $(t,e){t.hasClass(e)?t.removeClass(e):t.addClass(e)}function C(t,e,n){var i=n,o="",r=!1;return n.indexOf("://")>=0&&(n=i=n.split("://").slice(1)[0]),n.indexOf("/")>=0&&(i=n.split("/")[0],o=n.split("/").slice(1).join("/")),!(!(t.length>=i.length)||((t===i||t.indexOf(i)>=0&&t.lastIndexOf(".".concat(i))===t.length-i.length-1)&&(r=!0),!r||0!==o.length&&0!==e.indexOf(o)))}HSBC_utils.registerComponent({name:"externalLinkModalWindow",selector:b.component,init:function(t){return new w(t)},switchToEditHandler:function(){u(b.link).trigger("modalWindow:switchedToEdit")}})},9480:()=>{},6106:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,n){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(r)?r:String(r)),o)}var r}var n,i,o;n=Bootstrap.jQuery,i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=n(e),this.bindUIElements(),this.createFooterMobileElements(),this.buildFooterMobile(),this.bindUIEvents()}var i,o;return i=t,(o=[{key:"bindUIElements",value:function(){this.$mobileSidebar=n(".".concat("header-mobile-sidebar")),this.$headerDoormatMobile=this.$mobileSidebar.find(".".concat("header-mobile-doormat")),this.$headerMobileFooterItem=this.$el.find(".".concat("header-mobile-footer-item")),this.$headerMobileFooterItemWrapper=this.$el.find(".".concat("header-mobile-footer-item-wrapper")),this.$footerLarge=this.$el.find(".".concat("footer-large")).clone(),this.$footerSupplementary=this.$el.find(".".concat("footer-supplementary")).clone()}},{key:"bindUIEvents",value:function(){var t=this;n(document).on("click",".".concat("opinion-lab-trigger"),(function(e){e.preventDefault(),t.opinionLabShow(e)}))}},{key:"createFooterMobileElements",value:function(){this.$footerMobileMenu=n("<div>",{class:"".concat("header-mobile-footer-menu"," ").concat("sidebar-submenu-wrapper"),"data-source":"mobile-footer"})}},{key:"buildFooterMobile",value:function(){this.$headerMobileFooterItem.find(".".concat("header-doormat-mobile-title")).data("target","mobile-footer").addClass("sidebar-submenu-trigger"),this.$headerDoormatMobile.append(this.$headerMobileFooterItem),this.$headerMobileFooterItemWrapper.remove(),this.$footerMobileMenu.insertAfter(this.$headerDoormatMobile),this.$footerMobileMenu.append(this.$footerLarge).append(this.$footerSupplementary)}},{key:"opinionLabShow",value:function(t){var e=window.oo_feedback||(window.OOo?window.OOo.oo_feedback:null);e&&e.show(t)}}])&&e(i.prototype,o),Object.defineProperty(i,"prototype",{writable:!1}),t}(),o={name:"footer",selector:".".concat("footer"),init:function(t){return new i(t)}},HSBC_utils.registerComponent(o)},4357:()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,n){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(r)?r:String(r)),o)}var r}var n=HSBC_utils.keyCodes,i="aria-hidden",o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$=jQuery,this.options={headerSelector:".pws-header",mobileMenuTriggerSelector:".mobile-menu-trigger",sidebarContainer:".sidebar-container",mobileNavOpenCssClass:"mobile-nav-open",headerMobileOverlay:".header-mobile-overlay",button:".A-BTNP-RW-ALL, .A-BTNP-CLP-ALL",focusablesSelector:'a, input, button, [tabindex]:not([tabindex="-1"])'},this.settings=this.$.extend({},this.options,e),this.$body=this.$(document.body),this.$header=this.$(this.settings.headerSelector),this.$sidebarContainer=this.$(this.settings.sidebarContainer),this.$mobileMenuTrigger=this.$(this.settings.mobileMenuTriggerSelector),this.$headerMobileOverlay=this.$(this.settings.headerMobileOverlay),this.$focusablesSelector=this.$sidebarContainer.find(this.settings.focusablesSelector),this.$lastFocusable=this.$focusablesSelector.last(),this.bindUIEvents()}var o,r;return o=t,(r=[{key:"bindUIEvents",value:function(){var t=this;this.$sidebarContainer.get(0).addEventListener("keydown",(function(e){e.keyCode!==n.TAB||e.shiftKey||t.$body.hasClass(t.options.mobileNavOpenCssClass)&&t.$lastFocusable.is(":focus")&&(t.$mobileMenuTrigger.get(0).focus(),e.preventDefault())}))}},{key:"setAriaExpanded",value:function(t){this.$mobileMenuTrigger.attr("aria-expanded",t)}},{key:"makeContentInaccessible",value:function(){this.$header.nextAll("div").wrapAll(this.$("<div>").addClass("page")),this.$header.siblings(".page").attr(i,"true"),this.$headerMobileOverlay.attr(i,"true")}},{key:"makeContentAccessible",value:function(){this.$header.siblings(".page").children().unwrap(),this.$headerMobileOverlay.removeAttr(i)}}])&&e(o.prototype,r),Object.defineProperty(o,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===r(o)?o:String(o)),i)}var o}var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$=jQuery,this.Utils=HSBC_utils,this.options={headerSelector:".pws-header",headerBanner:"header",headerOverlay:".header-mobile-overlay",sidebarContainer:".sidebar-container",mobileNavOpenCssClass:"mobile-nav-open",mobileMenuTriggerSelector:".mobile-menu-trigger",focusablesSelector:'a, input, button, [tabindex]:not([tabindex="-1"])',ctaButton:".masthead-cta a, .masthead-cta button"},this.settings=this.$.extend({},this.options,e),this.$body=this.$(document.body),this.$header=this.$(this.settings.headerSelector),this.$mobileMenuTrigger=this.$header.find(this.settings.mobileMenuTriggerSelector),this.$headerBanner=this.$(this.settings.headerBanner),this.$headerOverlay=this.$(this.settings.headerOverlay),this.$sidebarContainer=this.$(this.settings.sidebarContainer),this.$ctaButton=this.$(this.options.ctaButton),this.bindUIEvents(),this.observeMainTriggers(),this.observeMobileMenuTrigger(),this.navigationAlly=new o}var e,n;return e=t,n=[{key:"bindUIEvents",value:function(){var t=this;this.$(window).on("load resize headerMessageChange",(function(){t.setHeightOfMobileHeader(),t.returnToDesktop()})),this.$(document).on("click",(function(){return t.setHeightOfMobileHeader()})),this.$ctaButton.on("click",(function(){t.$body.hasClass(t.settings.mobileNavOpenCssClass)&&t.$mobileMenuTrigger.click()}))}},{key:"isTablet",value:function(){return this.Utils.isCLP?this.Utils.matchMediaModern.mediumModern:this.Utils.matchMedia.tablet}},{key:"isDesktop",value:function(){return this.Utils.isCLP?this.Utils.matchMediaModern.largeModern||this.Utils.matchMediaModern.xlargeModern||this.Utils.matchMediaModern.xxlargeModern:this.Utils.matchMedia.desktop}},{key:"observeMainTriggers",value:function(){var t=this;this.$(document).on("click",(function(){t.isDesktop()&&t.triggerDocumentEvent("pws-panel-close-all")}))}},{key:"observeMobileMenuTrigger",value:function(){var t=this;this.$mobileMenuTrigger.on("click",(function(e){e.preventDefault();var n="-100%";t.isTablet()&&(n="-320px");var i={left:"0"},o={left:n},r={left:"",display:""};HSBC_utils.isRTL&&(i={right:"0"},o={right:n},r={right:"",display:""}),t.$body.hasClass(t.settings.mobileNavOpenCssClass)?(t.markBody("close"),t.setHeightOfMobileHeader(),t.navigationAlly.setAriaExpanded(!1),t.navigationAlly.makeContentAccessible(),t.$headerOverlay.stop().animate({opacity:0},500,(function(){t.$headerOverlay.hide()})),t.$sidebarContainer.stop().animate(o,500,(function(){t.$sidebarContainer.css(r)}))):(t.markBody(),t.setHeightOfMobileHeader(),t.navigationAlly.setAriaExpanded(!0),t.navigationAlly.makeContentInaccessible(),t.triggerDocumentEvent("pws-mobile-menu-open"),t.$headerOverlay.show().stop().animate({opacity:.75},500),t.$sidebarContainer.stop().show().animate(i,500))}))}},{key:"setHeightOfMobileHeader",value:function(){var t=this.$headerBanner.height()+this.$header.height();this.$header.parent().css("padding-top",t),this.$header.css("top",this.$headerBanner.height()),this.$headerOverlay.css("top",t),this.$sidebarContainer.css("top",t)}},{key:"returnToDesktop",value:function(){this.isDesktop()&&this.$body.hasClass(this.settings.mobileNavOpenCssClass)&&this.$mobileMenuTrigger.click()}},{key:"focusOn",value:function(t){var e=this;this.defer((function(){e.$(t).focus()}))}},{key:"markBody",value:function(t){t?this.$body.removeClass(this.settings.mobileNavOpenCssClass):this.$body.addClass(this.settings.mobileNavOpenCssClass)}},{key:"triggerDocumentEvent",value:function(t,e){this.$(document).trigger({type:t,hashId:e})}},{key:"defer",value:function(){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return setTimeout((arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){}).bind(this),t)}}],n&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();HSBC_utils.isEditMode()||HSBC_utils.registerComponent({name:"navigation",selector:".pws-header.lite-version",init:function(){return new s}})},903:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,n){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(r)?r:String(r)),o)}var r}var n,i,o,r;n=Bootstrap.jQuery,i="notification_banner_dismissed",o="hide",r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=n(e),this.$closeButton=this.$el.find(".close-notification-banner"),this.$parentRow=this.$el.closest(".row"),HSBC_utils.getCookie(i)!==o||HSBC_utils.isEditMode()?(this.$el.removeClass("hidden"),this.bindUIEvents()):this.closeBanner()}var r,a;return r=t,(a=[{key:"bindUIEvents",value:function(){var t=this,e=this.$el.data("session-dismissal");this.$closeButton.on("click",(function(){t.closeBanner(),e&&HSBC_utils.setCookie(i,o)}))}},{key:"closeBanner",value:function(){HSBC_utils.collapseElement(this.$parentRow,!0)}}])&&e(r.prototype,a),Object.defineProperty(r,"prototype",{writable:!1}),t}(),HSBC_utils.registerComponent({name:"notificationBanner",selector:".notification-banner",init:function(t){return new r(t)}})},5542:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,n){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(r)?r:String(r)),o)}var r}var n,i,o,r;n=Bootstrap.jQuery,i="notification_banner_dismissed",o="hide",r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=n(e),this.$closeButton=this.$el.find(".crh-notification__close-button"),this.$parentRow=this.$el.closest(".content-hub-notification-banner"),HSBC_utils.getCookie(i)!==o||HSBC_utils.isEditMode()?(this.$el.removeClass("hidden"),this.bindUIEvents()):this.closeBanner()}var r,a;return r=t,(a=[{key:"bindUIEvents",value:function(){var t=this,e=this.$el.data("session-dismissal");this.$closeButton.on("click",(function(){t.closeBanner(),e&&HSBC_utils.setCookie(i,o)}))}},{key:"closeBanner",value:function(){HSBC_utils.collapseElement(this.$parentRow,!0)}}])&&e(r.prototype,a),Object.defineProperty(r,"prototype",{writable:!1}),t}(),HSBC_utils.registerComponent({name:"notificationBannerV2",selector:".crh-notification",init:function(t){return new r(t)}})},3785:(t,e,n)=>{"use strict";var i=n(6429);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===o(r)?r:String(r)),i)}var r}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var s=Bootstrap.jQuery,l=HSBC_utils,u=a((function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=s(e),this.$links=this.$el.find("a"),this.tealiumObserver=new i.n(this.$links,{event_type:"click",event_category:"follow",event_action:function(t){return s(t).parent().find(".visuallyhidden").text()}})}));l.registerComponent({name:"socialMediaFooter",selector:".socialMediaFooter",init:function(t){return new u(t)}})},6834:(t,e,n)=>{"use strict";var i=n(6429);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===o(r)?r:String(r)),i)}var r}var a=Bootstrap.jQuery,s="a[href]",l="open",u=HSBC_utils.keyCodes,c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=a(e),this.$links=this.$el.find(s),this.$dropTrigger=this.$el.find(".drop-trigger"),this.$dropContent=this.$el.find(".drop-content"),this.showHideDropdown(),this.facebook(),this.twitter(),this.pinterest(),this.linkedin(),this.tealiumObserver=new i.n(this.$links,{event_type:"click",event_category:"share",event_action:function(t){return a(t).parent().find(".visuallyhidden").text()}}),this.ally()}var e,n;return e=t,(n=[{key:"ally",value:function(){var t=this;function e(t,e){t.$dropTrigger.open=e,function(t,e){t.$dropTrigger.attr("aria-expanded",e),t.$dropContent.attr("aria-hidden",!e)}(t,e)}this.$dropTrigger.open=this.$dropTrigger.hasClass(l),this.expandedFlag=this.$dropTrigger.open,e(this,this.expandedFlag),this.$dropTrigger.on("click",(function(n){var i;n.preventDefault(),t.expandedFlag=t.$dropTrigger.open,t.expandedFlag&&t.$dropTrigger.focus(),e(t,!t.expandedFlag),t.expandedFlag||(i=t.$dropContent.find(s).get(0))&&setTimeout((function(){i.focus()}),3)}))}},{key:"showHideDropdown",value:function(){var t=this;this.$dropContent.hide(),this.$dropTrigger.on("click",(function(e){e.preventDefault(),t.$dropTrigger.hasClass(l)?t.$dropContent.slideUp((function(){t.$dropTrigger.removeClass(l)})):(t.$dropContent.slideDown(),t.$dropTrigger.addClass(l))})).on("keydown",(function(e){var n=e.keyCode,i=n===u.SPACE,o=n===u.ENTER;(i||o)&&(e.preventDefault(),t.$dropTrigger.trigger("click"))}))}},{key:"facebook",value:function(){var t=this;this.processSocialLink("facebook",(function(){return{"{{url}}":t.fetchUrl()}}))}},{key:"twitter",value:function(){var t=this;this.processSocialLink("twitter",(function(){return{"{{url}}":t.fetchUrl(),"{{pagetitle}}":t.fetchPageTitle()}}))}},{key:"pinterest",value:function(){var t=this;this.processSocialLink("pinterest",(function(){return{"{{imageurl}}":t.fetchContentImageUrl(),"{{imagename}}":t.fetchPageTitle(),"{{imagedescription}}":t.fetchPageSummary()}}))}},{key:"linkedin",value:function(){var t=this;this.processSocialLink("linkedin",(function(){return{"{{url}}":t.fetchUrl()}}))}},{key:"fetchUrl",value:function(){return a('[property="og:url"]').attr("content")||document.location.href}},{key:"fetchContentImageUrl",value:function(){return a('[property="og:image"]').attr("content")}},{key:"fetchPageTitle",value:function(){return a('[property="og:title"]').attr("content")||a("title").text()}},{key:"fetchPageSummary",value:function(){return a('[property="og:description"]').attr("content")||a('[name="description"]').attr("content")}},{key:"processSocialLink",value:function(t,e){var n=this.$el.find(".trigger-"+t);if(n.length){var i=n.data("href-template"),o=e();for(var r in o){var a=o[r];i=i.replace(r,a?encodeURIComponent(a):"")}n.attr("href",i)}}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();HSBC_utils.registerComponent({name:"socialSharing",selector:".social-media-sharing",init:function(t){this.socialSharing=new c(t)}})},8154:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,n){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(r)?r:String(r)),o)}var r}var n,i,o,r,a,s,l;n=Bootstrap.jQuery,i="input[name=lc-income]",o="input[name=lc-rate]",r="input[name=lc-period]",a="div[data-name=lc-sliderPeriod] > .ui-slider-handle",s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$lc=n(e),this.$idPeriod=this.$lc.find("label[for=lc-period]").text(),this.$sliderPeriod=n(this.getElement("div[data-name=lc-sliderPeriod]")),this.$period=n(this.getElement(r)),this.$rate=n(this.getElement(o)),this.$income=n(this.getElement(i)),this.$deptToIncomeRatio=Number(this.getValue("input[name=lc-dept-to-income-ratio]")),this.$ratePostfix=n(this.getElement(".lc-rate-postfix")),this.tablesContainerMedium=this.getElement("div[data-name=lc-tablesContainerMedium]"),this.tablesContainerLarge=this.getElement("div[data-name=lc-tablesContainerLarge]"),this.tablesWrapper=this.getElement("div[data-name=lc-tablesWrapper]"),this.$headLoanCalculator=this.$lc.find(".lc-head-info"),this.$errorTextContainer=this.$lc.find(".lc-error-text"),this.$inputs=this.$lc.find("input"),this.value=this.$sliderPeriod.data("lc-value"),this.min=this.$sliderPeriod.data("lc-min"),this.max=this.$sliderPeriod.data("lc-max"),this.mq=null,this.hasErrors={"lc-income-range":!1,"lc-income-syntax":!1,"lc-income-letters":!1,"lc-rate-range":!1,"lc-rate-syntax":!1,"lc-rate-letters":!1,"lc-period-range":!1,"lc-period-syntax":!1,"lc-period-letters":!1},this.createAndSetSlider(),this.bindUIEvents(),this.changeWidth(),this.resizeColumns(),this.calculate()}var s,l;return s=t,l=[{key:"createAndSetSlider",value:function(){var t=this;this.$sliderPeriod.slider({range:"min",value:this.value,min:this.min,max:this.max,step:1}),this.$sliderHandle=this.$lc.find(a),this.$sliderPeriod.slider({slide:function(e,n){t.$period.val(n.value),t.$sliderHandle.attr("aria-valuenow",n.value),t.calculate()}}),this.$period.val(this.$sliderPeriod.slider("value")),this.$sliderHandle.attr({role:"slider","aria-valuemin":this.min,"aria-valuemax":this.max,"aria-valuenow":this.value,"aria-labelledby":this.$idPeriod})}},{key:"bindUIEvents",value:function(){var t=this,e="change keyup";this.$period.on("change keyup blur",(function(){var e=t.$period.val(),n=t.$lc.find(a);t.$sliderPeriod.slider("option","value",e),n.attr("aria-valuenow",e)})),this.$rate.on("change keyup blur",(function(){var e=9*t.$rate.val().replace(".","").length+30;t.$ratePostfix.css("left",e)})),this.$inputs.on("focus",(function(){return t.$headLoanCalculator.attr("aria-hidden","true")})).on("focusout",(function(){return t.$headLoanCalculator.attr("aria-hidden","false")})),this.$income.on(e,(function(){if(t.validateNumbers(t.$income)){var e=Number(t.$income.val().replace(/\.|,/g,""));t.parseNumericWithoutLosingCursorPosition(t.$income,e,"locale"),t.$income.data("lc-min")<=e&&e<=t.$income.data("lc-max")?(t.toggleError(t.$income,"hide","range"),t.calculate()):t.toggleError(t.$income,"show","range")}else t.toggleError(t.$income,"hide","range")})),this.$rate.on(e,(function(){if(t.validateNumbers(t.$rate)){var e=t.$rate.val();if(t.parseNumericWithoutLosingCursorPosition(t.$rate,null,"replace"),n.isNumeric(e)){var i=Number(e),o=i.toString().split("."),r=0;2===o.length&&(r=o[1].length),r>3?(t.toggleError(t.$rate,"hide","range"),t.toggleError(t.$rate,"show","syntax")):(t.toggleError(t.$rate,"hide","syntax"),t.$rate.data("lc-min")<=i&&i<=t.$rate.data("lc-max")?(t.toggleError(t.$rate,"hide","range"),t.calculate()):t.toggleError(t.$rate,"show","range"))}else t.toggleError(t.$rate,"show","syntax"),t.toggleError(t.$rate,"hide","range")}else t.toggleError(t.$rate,"hide","range"),t.toggleError(t.$rate,"hide","syntax")})),this.$period.on(e,(function(){if(t.validateNumbers(t.$period)){var e=Number(t.$period.val().replace(/\.|,/g,""));t.parseNumericWithoutLosingCursorPosition(t.$period,e,"numericValue"),t.$period.data("lc-min")<=e&&e<=t.$period.data("lc-max")?(t.toggleError(t.$period,"hide","range"),t.calculate()):t.toggleError(t.$period,"show","range")}else t.toggleError(t.$period,"hide","range")})),n(window).on("resize",(function(){t.changeWidth(),t.resizeColumns()}))}},{key:"parseNumericWithoutLosingCursorPosition",value:function(t,e){var n,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"locale",o=t[0].selectionStart,r=t[0].selectionEnd,a=t.val().length;"locale"===i?t.val(e.toLocaleString("en")):"replace"===i?t.val(t.val().replace(",",".")):"numericValue"===i&&t.val(e),o+=n=t.val().length-a,r+=n,t[0].setSelectionRange(o,r)}},{key:"getElement",value:function(t){return this.$lc.find(t)[0]}},{key:"getValue",value:function(t){return this.$lc.find(t).eq(0).val()}},{key:"setText",value:function(t,e){this.$lc.find(t).eq(0).find("span").text(e)}},{key:"setError",value:function(t,e){this.hasErrors["".concat(element.attr("name"),"-").concat(e)]=!0}},{key:"removeError",value:function(t,e){this.hasErrors["".concat(element.attr("name"),"-").concat(e)]=!1}},{key:"checkIfHasErrors",value:function(){var t=!1;return n.each(this.hasErrors,(function(e,n){return!0!==n||(t=!0,!1)})),t}},{key:"calculateTotalAmount",value:function(){var t=this.getValue(i).replace(/,/g,""),e=this.getValue(o)/1200,n=12*this.getValue(r),a=this.$deptToIncomeRatio;return Math.round(t*a*(1-Math.pow(1+e,-n))/e)}},{key:"calculateRepaymentResult",value:function(t,e){var n,i=this.getValue(o),a=i/12/100,s=12*this.getValue(r),l=t*a/(1-Math.pow(1+a,-s)),u=0,c=0,h=0,f=0,d=0;"fr"===e&&(l/=2);var p=l;for(i=i/100/(n="mr"===e?12:26);t>0;)(t-=l-(h=t*i))<=0&&(l+=t),c+=l,f+=h,d++;return u=d%n==0?d/n:Math.round(d/n*10)/10,"mr"===e&&(u=Math.round(u)),{repayment:Number(Math.round(p)),period:Number(Number(u).toFixed(1)),totalInterest:Number(Math.round(f)),totalRepayment:Number(Math.round(c))}}},{key:"calculate",value:function(){if(!this.checkIfHasErrors()){var t=this.calculateTotalAmount(),e=this.calculateRepaymentResult(t,"mr"),n=this.calculateRepaymentResult(t,"fr");this.setText("p[data-name=lc-maximumLoanAmount]",t.toLocaleString("en")),this.setText("span[data-name=lc-monthlyRepaymentAmount]",e.repayment.toLocaleString("en")),this.setText("td[data-name=lc-monthlyLoanPeriod]",e.period.toLocaleString("en")),this.setText("td[data-name=lc-monthlyInterestPayable]",e.totalInterest.toLocaleString("en")),this.setText("td[data-name=lc-monthlyTotalRepayment]",e.totalRepayment.toLocaleString("en")),this.setText("span[data-name=lc-fortnightlyRepaymentAmount]",n.repayment.toLocaleString("en")),this.setText("td[data-name=lc-fortnightlyLoanPeriod]",n.period.toLocaleString("en")),this.setText("td[data-name=lc-fortnightlyInterestPayable]",n.totalInterest.toLocaleString("en")),this.setText("td[data-name=lc-fortnightlyTotalRepayment]",n.totalRepayment.toLocaleString("en"))}}},{key:"changeWidth",value:function(){HSBC_utils.matchMedia.desktop?this.tablesContainerLarge.appendChild(this.tablesWrapper):this.tablesContainerMedium.appendChild(this.tablesWrapper)}},{key:"resizeColumns",value:function(){var t=n(this.getElement(".lc-inputs")),e=t.outerHeight(!0),i=n(this.getElement(".lc-results")).outerHeight(!0);e<=i?t.outerHeight(i):t.outerHeight("auto")}},{key:"validateNumbers",value:function(t){return/^[,\.0-9]+$/.test(t.val())?(this.toggleError(t,"hide","letters"),!0):(this.toggleError(t,"show","letters"),!1)}},{key:"toggleError",value:function(t,e,n){var i,o=t.closest(".lc-input-box").find(".lc-error-message"),r=o.find(this.$errorTextContainer),a=t.attr("name"),s="".concat(a,"-range"),l="".concat(a,"-letters"),u="".concat(a,"-syntax");"show"===e?this.setError(t,n):this.removeError(t,n),this.hasErrors[s]||this.hasErrors[l]||this.hasErrors[u]?(this.hasErrors[s]?i=o.data("temp_error_1"):this.hasErrors[l]?i=o.data("temp_error_2"):this.hasErrors[u]&&(i=o.data("temp_error_3")),r.text(i),o.show()):(r.text(""),o.hide())}}],l&&e(s.prototype,l),Object.defineProperty(s,"prototype",{writable:!1}),t}(),l={name:"loanCalculator",selector:".loan-calculator-tool",init:function(t){return new s(t)}},HSBC_utils.registerComponent(l)},6429:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{n:()=>a});var r=jQuery,a=function(){function t(e,n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$=r||Bootstrap.jQuery,this.element=e,this.$elements=r(e),this.config=n||{},this.options={usePageDefaults:!0,observeImmediate:!0,trackViewImmediate:!1,nativeObserver:!1,condition:function(){return!0}},this.settings=this.$.extend({},this.options,i),this.settings.usePageDefaults&&this.fetchPageDefaults(),this.settings.observeImmediate&&this.observe(),this.settings.trackViewImmediate&&this.triggerView()}var e,n,i;return e=t,i=[{key:"updateConfig",value:function(t,e){var n=t;return"function"==typeof t.event_action&&(n=r.extend({},n,{event_action:t.event_action(e)||""})),"function"==typeof t.event_subcategory&&(n=r.extend({},n,{event_subcategory:t.event_subcategory(e)||""})),"function"==typeof t.event_content&&(n=r.extend({},n,{event_content:t.event_content(e)||""})),n}}],(n=[{key:"fetchPageDefaults",value:function(){void 0!==window.utag_data?this.config=this.$.extend(this.config,{page_url:utag_data.page_url||"",site_section:utag_data.site_section||"",page_language:utag_data.page_language||"",page_type:utag_data.page_type||"",page_customer_group:utag_data.page_customer_group||"",page_business_line:utag_data.page_business_line||"",page_name:utag_data.page_name||"",page_category:utag_data.page_category||"",page_subcategory:utag_data.page_subcategory||""}):window.console&&console.log("TealiumObserver info: ","Tealium is not set up on this page and/or utag_data is not defined")}},{key:"observe",value:function(){var t=this,e=this.config.event_type||"click";this.settings.nativeObserver?this.element.on(e,(function(e){return t.trigger(e)})):this.$elements.on(e,(function(e){return t.trigger(e)}))}},{key:"triggerView",value:function(){this.settings.condition()&&void 0!==window.TMS&&TMS.trackView(t.updateConfig(this.config))}},{key:"trigger",value:function(e){this.settings.condition()&&(void 0!==window.TMS?TMS.trackEvent(t.updateConfig(this.config,e.target)):window.console&&console.log("TealiumObserver info: Tealium is not set up on this page and/or TMS is not defined"))}}])&&o(e.prototype,n),i&&o(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}()},9334:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}n.d(e,{X:()=>r});var r=function(){function t(e,n){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.storage=e,this.key=n,this.storage){var i=e.getItem(n);this.ids=i?JSON.parse(i):[]}else this.ids=[]}var e,n;return e=t,(n=[{key:"has",value:function(t){return this.ids.includes(t)}},{key:"add",value:function(t){this.ids.push(t),this.save()}},{key:"updateAll",value:function(t){this.ids=t,this.save()}},{key:"save",value:function(){this.storage&&(this.ids.length?this.storage.setItem(this.key,JSON.stringify(this.ids)):this.storage.removeItem(this.key))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},2090:(t,e,n)=>{"use strict";n.d(e,{h:()=>s});var i=n(9334);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===o(r)?r:String(r)),i)}var r}var a=Bootstrap.jQuery,s=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=a(e),this.processGroup(".A-PNLDRED-RW-ALL",sessionStorage,"".concat(n,"HSBC_msgs_critical")),this.processGroup(".A-PNLGLD-RW-ALL",sessionStorage,"".concat(n,"HSBC_msgs_warning")),this.processGroup(".A-PNLDSPHR-RW-ALL",localStorage,"".concat(n,"HSBC_msgs_general")),this.showMessage()}var e,n;return e=t,(n=[{key:"showMessage",value:function(){this.$el.show(),a(window).trigger("headerMessageChange")}},{key:"processGroup",value:function(t,e,n){var o=this.$el.children(t),r=new i.X(e,n);this.processMessages(o.children(),r)}},{key:"processMessages",value:function(t,e){var n=[];t.each((function(t,i){var o=a(i),r=o.find(".close-message-button"),s=r.data("messageId");e.has(s)?(o.hide(),n.push(s)):r.click((function(){o.hide(),e.add(s),a(window).trigger("headerMessageChange")}))})),a(window).trigger("headerMessageChange"),e.updateAll(n)}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},2460:(t,e,n)=>{var i=n(404);t.exports=i},2440:(t,e,n)=>{var i=n(2107);t.exports=i},4370:(t,e,n)=>{n(8783),n(1038);var i=n(857);t.exports=i.Array.from},5302:(t,e,n)=>{n(9720);var i=n(857);t.exports=i.Object.entries},8230:(t,e,n)=>{n(1615)},5634:(t,e,n)=>{n(2029)},1615:(t,e,n)=>{var i=n(2460);t.exports=i},2029:(t,e,n)=>{var i=n(2440);t.exports=i},9662:(t,e,n)=>{var i=n(614),o=n(6330),r=TypeError;t.exports=function(t){if(i(t))return t;throw r(o(t)+" is not a function")}},6077:(t,e,n)=>{var i=n(614),o=String,r=TypeError;t.exports=function(t){if("object"==typeof t||i(t))return t;throw r("Can't set "+o(t)+" as a prototype")}},9670:(t,e,n)=>{var i=n(111),o=String,r=TypeError;t.exports=function(t){if(i(t))return t;throw r(o(t)+" is not an object")}},8457:(t,e,n)=>{"use strict";var i=n(9974),o=n(6916),r=n(7908),a=n(3411),s=n(7659),l=n(4411),u=n(6244),c=n(6135),h=n(4121),f=n(1246),d=Array;t.exports=function(t){var e=r(t),n=l(this),p=arguments.length,m=p>1?arguments[1]:void 0,y=void 0!==m;y&&(m=i(m,p>2?arguments[2]:void 0));var v,b,g,S,k,w,$=f(e),C=0;if(!$||this===d&&s($))for(v=u(e),b=n?new this(v):d(v);v>C;C++)w=y?m(e[C],C):e[C],c(b,C,w);else for(k=(S=h(e,$)).next,b=n?new this:[];!(g=o(k,S)).done;C++)w=y?a(S,m,[g.value,C],!0):g.value,c(b,C,w);return b.length=C,b}},1318:(t,e,n)=>{var i=n(5656),o=n(3984),r=n(6244),a=function(t){return function(e,n,a){var s,l=i(e),u=r(l),c=o(a,u);if(t&&n!=n){for(;u>c;)if((s=l[c++])!=s)return!0}else for(;u>c;c++)if((t||c in l)&&l[c]===n)return t||c||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},3411:(t,e,n)=>{var i=n(9670),o=n(9212);t.exports=function(t,e,n,r){try{return r?e(i(n)[0],n[1]):e(n)}catch(e){o(t,"throw",e)}}},7072:(t,e,n)=>{var i=n(5112)("iterator"),o=!1;try{var r=0,a={next:function(){return{done:!!r++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(t){}return n}},4326:(t,e,n)=>{var i=n(1702),o=i({}.toString),r=i("".slice);t.exports=function(t){return r(o(t),8,-1)}},648:(t,e,n)=>{var i=n(1694),o=n(614),r=n(4326),a=n(5112)("toStringTag"),s=Object,l="Arguments"==r(function(){return arguments}());t.exports=i?r:function(t){var e,n,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=s(t),a))?n:l?r(e):"Object"==(i=r(e))&&o(e.callee)?"Arguments":i}},9920:(t,e,n)=>{var i=n(2597),o=n(3887),r=n(1236),a=n(3070);t.exports=function(t,e,n){for(var s=o(e),l=a.f,u=r.f,c=0;c<s.length;c++){var h=s[c];i(t,h)||n&&i(n,h)||l(t,h,u(e,h))}}},8544:(t,e,n)=>{var i=n(7293);t.exports=!i((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},6178:t=>{t.exports=function(t,e){return{value:t,done:e}}},8880:(t,e,n)=>{var i=n(9781),o=n(3070),r=n(9114);t.exports=i?function(t,e,n){return o.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},9114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},6135:(t,e,n)=>{"use strict";var i=n(4948),o=n(3070),r=n(9114);t.exports=function(t,e,n){var a=i(e);a in t?o.f(t,a,r(0,n)):t[a]=n}},8052:(t,e,n)=>{var i=n(614),o=n(3070),r=n(6339),a=n(3072);t.exports=function(t,e,n,s){s||(s={});var l=s.enumerable,u=void 0!==s.name?s.name:e;if(i(n)&&r(n,u,s),s.global)l?t[e]=n:a(e,n);else{try{s.unsafe?t[e]&&(l=!0):delete t[e]}catch(t){}l?t[e]=n:o.f(t,e,{value:n,enumerable:!1,configurable:!s.nonConfigurable,writable:!s.nonWritable})}return t}},3072:(t,e,n)=>{var i=n(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(i,t,{value:e,configurable:!0,writable:!0})}catch(n){i[t]=e}return e}},9781:(t,e,n)=>{var i=n(7293);t.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:t=>{var e="object"==typeof document&&document.all,n=void 0===e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},317:(t,e,n)=>{var i=n(7854),o=n(111),r=i.document,a=o(r)&&o(r.createElement);t.exports=function(t){return a?r.createElement(t):{}}},8113:t=>{t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:(t,e,n)=>{var i,o,r=n(7854),a=n(8113),s=r.process,l=r.Deno,u=s&&s.versions||l&&l.version,c=u&&u.v8;c&&(o=(i=c.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!o&&a&&(!(i=a.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=a.match(/Chrome\/(\d+)/))&&(o=+i[1]),t.exports=o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,e,n)=>{var i=n(7854),o=n(1236).f,r=n(8880),a=n(8052),s=n(3072),l=n(9920),u=n(4705);t.exports=function(t,e){var n,c,h,f,d,p=t.target,m=t.global,y=t.stat;if(n=m?i:y?i[p]||s(p,{}):(i[p]||{}).prototype)for(c in e){if(f=e[c],h=t.dontCallGetSet?(d=o(n,c))&&d.value:n[c],!u(m?c:p+(y?".":"#")+c,t.forced)&&void 0!==h){if(typeof f==typeof h)continue;l(f,h)}(t.sham||h&&h.sham)&&r(f,"sham",!0),a(n,c,f,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:(t,e,n)=>{var i=n(1470),o=n(9662),r=n(4374),a=i(i.bind);t.exports=function(t,e){return o(t),void 0===e?t:r?a(t,e):function(){return t.apply(e,arguments)}}},4374:(t,e,n)=>{var i=n(7293);t.exports=!i((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:(t,e,n)=>{var i=n(4374),o=Function.prototype.call;t.exports=i?o.bind(o):function(){return o.apply(o,arguments)}},6530:(t,e,n)=>{var i=n(9781),o=n(2597),r=Function.prototype,a=i&&Object.getOwnPropertyDescriptor,s=o(r,"name"),l=s&&"something"===function(){}.name,u=s&&(!i||i&&a(r,"name").configurable);t.exports={EXISTS:s,PROPER:l,CONFIGURABLE:u}},5668:(t,e,n)=>{var i=n(1702),o=n(9662);t.exports=function(t,e,n){try{return i(o(Object.getOwnPropertyDescriptor(t,e)[n]))}catch(t){}}},1470:(t,e,n)=>{var i=n(4326),o=n(1702);t.exports=function(t){if("Function"===i(t))return o(t)}},1702:(t,e,n)=>{var i=n(4374),o=Function.prototype,r=o.call,a=i&&o.bind.bind(r,r);t.exports=i?a:function(t){return function(){return r.apply(t,arguments)}}},5005:(t,e,n)=>{var i=n(7854),o=n(614);t.exports=function(t,e){return arguments.length<2?(n=i[t],o(n)?n:void 0):i[t]&&i[t][e];var n}},1246:(t,e,n)=>{var i=n(648),o=n(8173),r=n(8554),a=n(7497),s=n(5112)("iterator");t.exports=function(t){if(!r(t))return o(t,s)||o(t,"@@iterator")||a[i(t)]}},4121:(t,e,n)=>{var i=n(6916),o=n(9662),r=n(9670),a=n(6330),s=n(1246),l=TypeError;t.exports=function(t,e){var n=arguments.length<2?s(t):e;if(o(n))return r(i(n,t));throw l(a(t)+" is not iterable")}},8173:(t,e,n)=>{var i=n(9662),o=n(8554);t.exports=function(t,e){var n=t[e];return o(n)?void 0:i(n)}},7854:(t,e,n)=>{var i=function(t){return t&&t.Math==Math&&t};t.exports=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:(t,e,n)=>{var i=n(1702),o=n(7908),r=i({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return r(o(t),e)}},3501:t=>{t.exports={}},490:(t,e,n)=>{var i=n(5005);t.exports=i("document","documentElement")},4664:(t,e,n)=>{var i=n(9781),o=n(7293),r=n(317);t.exports=!i&&!o((function(){return 7!=Object.defineProperty(r("div"),"a",{get:function(){return 7}}).a}))},8361:(t,e,n)=>{var i=n(1702),o=n(7293),r=n(4326),a=Object,s=i("".split);t.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==r(t)?s(t,""):a(t)}:a},2788:(t,e,n)=>{var i=n(1702),o=n(614),r=n(5465),a=i(Function.toString);o(r.inspectSource)||(r.inspectSource=function(t){return a(t)}),t.exports=r.inspectSource},9909:(t,e,n)=>{var i,o,r,a=n(4811),s=n(7854),l=n(111),u=n(8880),c=n(2597),h=n(5465),f=n(6200),d=n(3501),p="Object already initialized",m=s.TypeError,y=s.WeakMap;if(a||h.state){var v=h.state||(h.state=new y);v.get=v.get,v.has=v.has,v.set=v.set,i=function(t,e){if(v.has(t))throw m(p);return e.facade=t,v.set(t,e),e},o=function(t){return v.get(t)||{}},r=function(t){return v.has(t)}}else{var b=f("state");d[b]=!0,i=function(t,e){if(c(t,b))throw m(p);return e.facade=t,u(t,b,e),e},o=function(t){return c(t,b)?t[b]:{}},r=function(t){return c(t,b)}}t.exports={set:i,get:o,has:r,enforce:function(t){return r(t)?o(t):i(t,{})},getterFor:function(t){return function(e){var n;if(!l(e)||(n=o(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}}}},7659:(t,e,n)=>{var i=n(5112),o=n(7497),r=i("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[r]===t)}},614:(t,e,n)=>{var i=n(4154),o=i.all;t.exports=i.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},4411:(t,e,n)=>{var i=n(1702),o=n(7293),r=n(614),a=n(648),s=n(5005),l=n(2788),u=function(){},c=[],h=s("Reflect","construct"),f=/^\s*(?:class|function)\b/,d=i(f.exec),p=!f.exec(u),m=function(t){if(!r(t))return!1;try{return h(u,c,t),!0}catch(t){return!1}},y=function(t){if(!r(t))return!1;switch(a(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!d(f,l(t))}catch(t){return!0}};y.sham=!0,t.exports=!h||o((function(){var t;return m(m.call)||!m(Object)||!m((function(){t=!0}))||t}))?y:m},4705:(t,e,n)=>{var i=n(7293),o=n(614),r=/#|\.prototype\./,a=function(t,e){var n=l[s(t)];return n==c||n!=u&&(o(e)?i(e):!!e)},s=a.normalize=function(t){return String(t).replace(r,".").toLowerCase()},l=a.data={},u=a.NATIVE="N",c=a.POLYFILL="P";t.exports=a},8554:t=>{t.exports=function(t){return null==t}},111:(t,e,n)=>{var i=n(614),o=n(4154),r=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:i(t)||t===r}:function(t){return"object"==typeof t?null!==t:i(t)}},1913:t=>{t.exports=!1},2190:(t,e,n)=>{var i=n(5005),o=n(614),r=n(7976),a=n(3307),s=Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return o(e)&&r(e.prototype,s(t))}},9212:(t,e,n)=>{var i=n(6916),o=n(9670),r=n(8173);t.exports=function(t,e,n){var a,s;o(t);try{if(!(a=r(t,"return"))){if("throw"===e)throw n;return n}a=i(a,t)}catch(t){s=!0,a=t}if("throw"===e)throw n;if(s)throw a;return o(a),n}},3061:(t,e,n)=>{"use strict";var i=n(3383).IteratorPrototype,o=n(30),r=n(9114),a=n(8003),s=n(7497),l=function(){return this};t.exports=function(t,e,n,u){var c=e+" Iterator";return t.prototype=o(i,{next:r(+!u,n)}),a(t,c,!1,!0),s[c]=l,t}},1656:(t,e,n)=>{"use strict";var i=n(2109),o=n(6916),r=n(1913),a=n(6530),s=n(614),l=n(3061),u=n(9518),c=n(7674),h=n(8003),f=n(8880),d=n(8052),p=n(5112),m=n(7497),y=n(3383),v=a.PROPER,b=a.CONFIGURABLE,g=y.IteratorPrototype,S=y.BUGGY_SAFARI_ITERATORS,k=p("iterator"),w="keys",$="values",C="entries",E=function(){return this};t.exports=function(t,e,n,a,p,y,T){l(n,e,a);var P,O,A,x=function(t){if(t===p&&M)return M;if(!S&&t in _)return _[t];switch(t){case w:case $:case C:return function(){return new n(this,t)}}return function(){return new n(this)}},B=e+" Iterator",j=!1,_=t.prototype,I=_[k]||_["@@iterator"]||p&&_[p],M=!S&&I||x(p),L="Array"==e&&_.entries||I;if(L&&(P=u(L.call(new t)))!==Object.prototype&&P.next&&(r||u(P)===g||(c?c(P,g):s(P[k])||d(P,k,E)),h(P,B,!0,!0),r&&(m[B]=E)),v&&p==$&&I&&I.name!==$&&(!r&&b?f(_,"name",$):(j=!0,M=function(){return o(I,this)})),p)if(O={values:x($),keys:y?M:x(w),entries:x(C)},T)for(A in O)(S||j||!(A in _))&&d(_,A,O[A]);else i({target:e,proto:!0,forced:S||j},O);return r&&!T||_[k]===M||d(_,k,M,{name:p}),m[e]=M,O}},3383:(t,e,n)=>{"use strict";var i,o,r,a=n(7293),s=n(614),l=n(111),u=n(30),c=n(9518),h=n(8052),f=n(5112),d=n(1913),p=f("iterator"),m=!1;[].keys&&("next"in(r=[].keys())?(o=c(c(r)))!==Object.prototype&&(i=o):m=!0),!l(i)||a((function(){var t={};return i[p].call(t)!==t}))?i={}:d&&(i=u(i)),s(i[p])||h(i,p,(function(){return this})),t.exports={IteratorPrototype:i,BUGGY_SAFARI_ITERATORS:m}},7497:t=>{t.exports={}},6244:(t,e,n)=>{var i=n(7466);t.exports=function(t){return i(t.length)}},6339:(t,e,n)=>{var i=n(1702),o=n(7293),r=n(614),a=n(2597),s=n(9781),l=n(6530).CONFIGURABLE,u=n(2788),c=n(9909),h=c.enforce,f=c.get,d=String,p=Object.defineProperty,m=i("".slice),y=i("".replace),v=i([].join),b=s&&!o((function(){return 8!==p((function(){}),"length",{value:8}).length})),g=String(String).split("String"),S=t.exports=function(t,e,n){"Symbol("===m(d(e),0,7)&&(e="["+y(d(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!a(t,"name")||l&&t.name!==e)&&(s?p(t,"name",{value:e,configurable:!0}):t.name=e),b&&n&&a(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&a(n,"constructor")&&n.constructor?s&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var i=h(t);return a(i,"source")||(i.source=v(g,"string"==typeof e?e:"")),t};Function.prototype.toString=S((function(){return r(this)&&f(this).source||u(this)}),"toString")},4758:t=>{var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var i=+t;return(i>0?n:e)(i)}},30:(t,e,n)=>{var i,o=n(9670),r=n(6048),a=n(748),s=n(3501),l=n(490),u=n(317),c=n(6200),h="prototype",f="script",d=c("IE_PROTO"),p=function(){},m=function(t){return"<"+f+">"+t+"</"+f+">"},y=function(t){t.write(m("")),t.close();var e=t.parentWindow.Object;return t=null,e},v=function(){try{i=new ActiveXObject("htmlfile")}catch(t){}var t,e,n;v="undefined"!=typeof document?document.domain&&i?y(i):(e=u("iframe"),n="java"+f+":",e.style.display="none",l.appendChild(e),e.src=String(n),(t=e.contentWindow.document).open(),t.write(m("document.F=Object")),t.close(),t.F):y(i);for(var o=a.length;o--;)delete v[h][a[o]];return v()};s[d]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(p[h]=o(t),n=new p,p[h]=null,n[d]=t):n=v(),void 0===e?n:r.f(n,e)}},6048:(t,e,n)=>{var i=n(9781),o=n(3353),r=n(3070),a=n(9670),s=n(5656),l=n(1956);e.f=i&&!o?Object.defineProperties:function(t,e){a(t);for(var n,i=s(e),o=l(e),u=o.length,c=0;u>c;)r.f(t,n=o[c++],i[n]);return t}},3070:(t,e,n)=>{var i=n(9781),o=n(4664),r=n(3353),a=n(9670),s=n(4948),l=TypeError,u=Object.defineProperty,c=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";e.f=i?r?function(t,e,n){if(a(t),e=s(e),a(n),"function"==typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var i=c(t,e);i&&i[d]&&(t[e]=n.value,n={configurable:f in n?n[f]:i[f],enumerable:h in n?n[h]:i[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(a(t),e=s(e),a(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:(t,e,n)=>{var i=n(9781),o=n(6916),r=n(5296),a=n(9114),s=n(5656),l=n(4948),u=n(2597),c=n(4664),h=Object.getOwnPropertyDescriptor;e.f=i?h:function(t,e){if(t=s(t),e=l(e),c)try{return h(t,e)}catch(t){}if(u(t,e))return a(!o(r.f,t,e),t[e])}},8006:(t,e,n)=>{var i=n(6324),o=n(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,o)}},5181:(t,e)=>{e.f=Object.getOwnPropertySymbols},9518:(t,e,n)=>{var i=n(2597),o=n(614),r=n(7908),a=n(6200),s=n(8544),l=a("IE_PROTO"),u=Object,c=u.prototype;t.exports=s?u.getPrototypeOf:function(t){var e=r(t);if(i(e,l))return e[l];var n=e.constructor;return o(n)&&e instanceof n?n.prototype:e instanceof u?c:null}},7976:(t,e,n)=>{var i=n(1702);t.exports=i({}.isPrototypeOf)},6324:(t,e,n)=>{var i=n(1702),o=n(2597),r=n(5656),a=n(1318).indexOf,s=n(3501),l=i([].push);t.exports=function(t,e){var n,i=r(t),u=0,c=[];for(n in i)!o(s,n)&&o(i,n)&&l(c,n);for(;e.length>u;)o(i,n=e[u++])&&(~a(c,n)||l(c,n));return c}},1956:(t,e,n)=>{var i=n(6324),o=n(748);t.exports=Object.keys||function(t){return i(t,o)}},5296:(t,e)=>{"use strict";var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!n.call({1:2},1);e.f=o?function(t){var e=i(this,t);return!!e&&e.enumerable}:n},7674:(t,e,n)=>{var i=n(5668),o=n(9670),r=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=i(Object.prototype,"__proto__","set"))(n,[]),e=n instanceof Array}catch(t){}return function(n,i){return o(n),r(i),e?t(n,i):n.__proto__=i,n}}():void 0)},4699:(t,e,n)=>{var i=n(9781),o=n(1702),r=n(1956),a=n(5656),s=o(n(5296).f),l=o([].push),u=function(t){return function(e){for(var n,o=a(e),u=r(o),c=u.length,h=0,f=[];c>h;)n=u[h++],i&&!s(o,n)||l(f,t?[n,o[n]]:o[n]);return f}};t.exports={entries:u(!0),values:u(!1)}},2140:(t,e,n)=>{var i=n(6916),o=n(614),r=n(111),a=TypeError;t.exports=function(t,e){var n,s;if("string"===e&&o(n=t.toString)&&!r(s=i(n,t)))return s;if(o(n=t.valueOf)&&!r(s=i(n,t)))return s;if("string"!==e&&o(n=t.toString)&&!r(s=i(n,t)))return s;throw a("Can't convert object to primitive value")}},3887:(t,e,n)=>{var i=n(5005),o=n(1702),r=n(8006),a=n(5181),s=n(9670),l=o([].concat);t.exports=i("Reflect","ownKeys")||function(t){var e=r.f(s(t)),n=a.f;return n?l(e,n(t)):e}},857:(t,e,n)=>{var i=n(7854);t.exports=i},4488:(t,e,n)=>{var i=n(8554),o=TypeError;t.exports=function(t){if(i(t))throw o("Can't call method on "+t);return t}},8003:(t,e,n)=>{var i=n(3070).f,o=n(2597),r=n(5112)("toStringTag");t.exports=function(t,e,n){t&&!n&&(t=t.prototype),t&&!o(t,r)&&i(t,r,{configurable:!0,value:e})}},6200:(t,e,n)=>{var i=n(2309),o=n(9711),r=i("keys");t.exports=function(t){return r[t]||(r[t]=o(t))}},5465:(t,e,n)=>{var i=n(7854),o=n(3072),r="__core-js_shared__",a=i[r]||o(r,{});t.exports=a},2309:(t,e,n)=>{var i=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.30.1",mode:i?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.1/LICENSE",source:"https://github.com/zloirock/core-js"})},8710:(t,e,n)=>{var i=n(1702),o=n(9303),r=n(1340),a=n(4488),s=i("".charAt),l=i("".charCodeAt),u=i("".slice),c=function(t){return function(e,n){var i,c,h=r(a(e)),f=o(n),d=h.length;return f<0||f>=d?t?"":void 0:(i=l(h,f))<55296||i>56319||f+1===d||(c=l(h,f+1))<56320||c>57343?t?s(h,f):i:t?u(h,f,f+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:c(!1),charAt:c(!0)}},6293:(t,e,n)=>{var i=n(7392),o=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},3984:(t,e,n)=>{var i=n(9303),o=Math.max,r=Math.min;t.exports=function(t,e){var n=i(t);return n<0?o(n+e,0):r(n,e)}},5656:(t,e,n)=>{var i=n(8361),o=n(4488);t.exports=function(t){return i(o(t))}},9303:(t,e,n)=>{var i=n(4758);t.exports=function(t){var e=+t;return e!=e||0===e?0:i(e)}},7466:(t,e,n)=>{var i=n(9303),o=Math.min;t.exports=function(t){return t>0?o(i(t),9007199254740991):0}},7908:(t,e,n)=>{var i=n(4488),o=Object;t.exports=function(t){return o(i(t))}},7593:(t,e,n)=>{var i=n(6916),o=n(111),r=n(2190),a=n(8173),s=n(2140),l=n(5112),u=TypeError,c=l("toPrimitive");t.exports=function(t,e){if(!o(t)||r(t))return t;var n,l=a(t,c);if(l){if(void 0===e&&(e="default"),n=i(l,t,e),!o(n)||r(n))return n;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),s(t,e)}},4948:(t,e,n)=>{var i=n(7593),o=n(2190);t.exports=function(t){var e=i(t,"string");return o(e)?e:e+""}},1694:(t,e,n)=>{var i={};i[n(5112)("toStringTag")]="z",t.exports="[object z]"===String(i)},1340:(t,e,n)=>{var i=n(648),o=String;t.exports=function(t){if("Symbol"===i(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},6330:t=>{var e=String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}}},9711:(t,e,n)=>{var i=n(1702),o=0,r=Math.random(),a=i(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+r,36)}},3307:(t,e,n)=>{var i=n(6293);t.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:(t,e,n)=>{var i=n(9781),o=n(7293);t.exports=i&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:(t,e,n)=>{var i=n(7854),o=n(614),r=i.WeakMap;t.exports=o(r)&&/native code/.test(String(r))},5112:(t,e,n)=>{var i=n(7854),o=n(2309),r=n(2597),a=n(9711),s=n(6293),l=n(3307),u=i.Symbol,c=o("wks"),h=l?u.for||u:u&&u.withoutSetter||a;t.exports=function(t){return r(c,t)||(c[t]=s&&r(u,t)?u[t]:h("Symbol."+t)),c[t]}},1038:(t,e,n)=>{var i=n(2109),o=n(8457);i({target:"Array",stat:!0,forced:!n(7072)((function(t){Array.from(t)}))},{from:o})},9720:(t,e,n)=>{var i=n(2109),o=n(4699).entries;i({target:"Object",stat:!0},{entries:function(t){return o(t)}})},8783:(t,e,n)=>{"use strict";var i=n(8710).charAt,o=n(1340),r=n(9909),a=n(1656),s=n(6178),l="String Iterator",u=r.set,c=r.getterFor(l);a(String,"String",(function(t){u(this,{type:l,string:o(t),index:0})}),(function(){var t,e=c(this),n=e.string,o=e.index;return o>=n.length?s(void 0,!0):(t=i(n,o),e.index+=t.length,s(t,!1))}))},404:(t,e,n)=>{var i=n(4370);t.exports=i},2107:(t,e,n)=>{var i=n(5302);t.exports=i},7856:function(t){t.exports=function(){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,n){return e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(t,n)}function n(t,i,o){return n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,i){var o=[null];o.push.apply(o,n);var r=new(Function.bind.apply(t,o));return i&&e(r,i.prototype),r},n.apply(null,arguments)}function i(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var r=Object.hasOwnProperty,a=Object.setPrototypeOf,s=Object.isFrozen,l=Object.getPrototypeOf,u=Object.getOwnPropertyDescriptor,c=Object.freeze,h=Object.seal,f=Object.create,d="undefined"!=typeof Reflect&&Reflect,p=d.apply,m=d.construct;p||(p=function(t,e,n){return t.apply(e,n)}),c||(c=function(t){return t}),h||(h=function(t){return t}),m||(m=function(t,e){return n(t,i(e))});var y,v=O(Array.prototype.forEach),b=O(Array.prototype.pop),g=O(Array.prototype.push),S=O(String.prototype.toLowerCase),k=O(String.prototype.toString),w=O(String.prototype.match),$=O(String.prototype.replace),C=O(String.prototype.indexOf),E=O(String.prototype.trim),T=O(RegExp.prototype.test),P=(y=TypeError,function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return m(y,e)});function O(t){return function(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];return p(t,e,i)}}function A(t,e,n){n=n||S,a&&a(t,null);for(var i=e.length;i--;){var o=e[i];if("string"==typeof o){var r=n(o);r!==o&&(s(e)||(e[i]=r),o=r)}t[o]=!0}return t}function x(t){var e,n=f(null);for(e in t)!0===p(r,t,[e])&&(n[e]=t[e]);return n}function B(t,e){for(;null!==t;){var n=u(t,e);if(n){if(n.get)return O(n.get);if("function"==typeof n.value)return O(n.value)}t=l(t)}return function(t){return console.warn("fallback value for",t),null}}var j=c(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),_=c(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),I=c(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),M=c(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),L=c(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),R=c(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),D=c(["#text"]),H=c(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),N=c(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),U=c(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),F=c(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),W=h(/\{\{[\w\W]*|[\w\W]*\}\}/gm),V=h(/<%[\w\W]*|[\w\W]*%>/gm),z=h(/\${[\w\W]*}/gm),Q=h(/^data-[\-\w.\u00B7-\uFFFF]/),q=h(/^aria-[\-\w]+$/),G=h(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),K=h(/^(?:\w+script|data):/i),Y=h(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),J=h(/^html$/i),X=function(){return"undefined"==typeof window?null:window};return function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X(),o=function(t){return e(t)};if(o.version="2.4.5",o.removed=[],!n||!n.document||9!==n.document.nodeType)return o.isSupported=!1,o;var r=n.document,a=n.document,s=n.DocumentFragment,l=n.HTMLTemplateElement,u=n.Node,h=n.Element,f=n.NodeFilter,d=n.NamedNodeMap,p=void 0===d?n.NamedNodeMap||n.MozNamedAttrMap:d,m=n.HTMLFormElement,y=n.DOMParser,O=n.trustedTypes,Z=h.prototype,tt=B(Z,"cloneNode"),et=B(Z,"nextSibling"),nt=B(Z,"childNodes"),it=B(Z,"parentNode");if("function"==typeof l){var ot=a.createElement("template");ot.content&&ot.content.ownerDocument&&(a=ot.content.ownerDocument)}var rt=function(e,n){if("object"!==t(e)||"function"!=typeof e.createPolicy)return null;var i=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(i=n.currentScript.getAttribute(o));var r="dompurify"+(i?"#"+i:"");try{return e.createPolicy(r,{createHTML:function(t){return t},createScriptURL:function(t){return t}})}catch(t){return console.warn("TrustedTypes policy "+r+" could not be created."),null}}(O,r),at=rt?rt.createHTML(""):"",st=a,lt=st.implementation,ut=st.createNodeIterator,ct=st.createDocumentFragment,ht=st.getElementsByTagName,ft=r.importNode,dt={};try{dt=x(a).documentMode?a.documentMode:{}}catch(t){}var pt={};o.isSupported="function"==typeof it&&lt&&void 0!==lt.createHTMLDocument&&9!==dt;var mt,yt,vt=W,bt=V,gt=z,St=Q,kt=q,wt=K,$t=Y,Ct=G,Et=null,Tt=A({},[].concat(i(j),i(_),i(I),i(L),i(D))),Pt=null,Ot=A({},[].concat(i(H),i(N),i(U),i(F))),At=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),xt=null,Bt=null,jt=!0,_t=!0,It=!1,Mt=!0,Lt=!1,Rt=!1,Dt=!1,Ht=!1,Nt=!1,Ut=!1,Ft=!1,Wt=!0,Vt=!1,zt=!0,Qt=!1,qt={},Gt=null,Kt=A({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Yt=null,Jt=A({},["audio","video","img","source","image","track"]),Xt=null,Zt=A({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),te="http://www.w3.org/1998/Math/MathML",ee="http://www.w3.org/2000/svg",ne="http://www.w3.org/1999/xhtml",ie=ne,oe=!1,re=null,ae=A({},[te,ee,ne],k),se=["application/xhtml+xml","text/html"],le=null,ue=a.createElement("form"),ce=function(t){return t instanceof RegExp||t instanceof Function},he=function(e){le&&le===e||(e&&"object"===t(e)||(e={}),e=x(e),mt=mt=-1===se.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,yt="application/xhtml+xml"===mt?k:S,Et="ALLOWED_TAGS"in e?A({},e.ALLOWED_TAGS,yt):Tt,Pt="ALLOWED_ATTR"in e?A({},e.ALLOWED_ATTR,yt):Ot,re="ALLOWED_NAMESPACES"in e?A({},e.ALLOWED_NAMESPACES,k):ae,Xt="ADD_URI_SAFE_ATTR"in e?A(x(Zt),e.ADD_URI_SAFE_ATTR,yt):Zt,Yt="ADD_DATA_URI_TAGS"in e?A(x(Jt),e.ADD_DATA_URI_TAGS,yt):Jt,Gt="FORBID_CONTENTS"in e?A({},e.FORBID_CONTENTS,yt):Kt,xt="FORBID_TAGS"in e?A({},e.FORBID_TAGS,yt):{},Bt="FORBID_ATTR"in e?A({},e.FORBID_ATTR,yt):{},qt="USE_PROFILES"in e&&e.USE_PROFILES,jt=!1!==e.ALLOW_ARIA_ATTR,_t=!1!==e.ALLOW_DATA_ATTR,It=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Mt=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,Lt=e.SAFE_FOR_TEMPLATES||!1,Rt=e.WHOLE_DOCUMENT||!1,Nt=e.RETURN_DOM||!1,Ut=e.RETURN_DOM_FRAGMENT||!1,Ft=e.RETURN_TRUSTED_TYPE||!1,Ht=e.FORCE_BODY||!1,Wt=!1!==e.SANITIZE_DOM,Vt=e.SANITIZE_NAMED_PROPS||!1,zt=!1!==e.KEEP_CONTENT,Qt=e.IN_PLACE||!1,Ct=e.ALLOWED_URI_REGEXP||Ct,ie=e.NAMESPACE||ne,At=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&ce(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(At.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&ce(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(At.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(At.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Lt&&(_t=!1),Ut&&(Nt=!0),qt&&(Et=A({},i(D)),Pt=[],!0===qt.html&&(A(Et,j),A(Pt,H)),!0===qt.svg&&(A(Et,_),A(Pt,N),A(Pt,F)),!0===qt.svgFilters&&(A(Et,I),A(Pt,N),A(Pt,F)),!0===qt.mathMl&&(A(Et,L),A(Pt,U),A(Pt,F))),e.ADD_TAGS&&(Et===Tt&&(Et=x(Et)),A(Et,e.ADD_TAGS,yt)),e.ADD_ATTR&&(Pt===Ot&&(Pt=x(Pt)),A(Pt,e.ADD_ATTR,yt)),e.ADD_URI_SAFE_ATTR&&A(Xt,e.ADD_URI_SAFE_ATTR,yt),e.FORBID_CONTENTS&&(Gt===Kt&&(Gt=x(Gt)),A(Gt,e.FORBID_CONTENTS,yt)),zt&&(Et["#text"]=!0),Rt&&A(Et,["html","head","body"]),Et.table&&(A(Et,["tbody"]),delete xt.tbody),c&&c(e),le=e)},fe=A({},["mi","mo","mn","ms","mtext"]),de=A({},["foreignobject","desc","title","annotation-xml"]),pe=A({},["title","style","font","a","script"]),me=A({},_);A(me,I),A(me,M);var ye=A({},L);A(ye,R);var ve=function(t){g(o.removed,{element:t});try{t.parentNode.removeChild(t)}catch(e){try{t.outerHTML=at}catch(e){t.remove()}}},be=function(t,e){try{g(o.removed,{attribute:e.getAttributeNode(t),from:e})}catch(t){g(o.removed,{attribute:null,from:e})}if(e.removeAttribute(t),"is"===t&&!Pt[t])if(Nt||Ut)try{ve(e)}catch(t){}else try{e.setAttribute(t,"")}catch(t){}},ge=function(t){var e,n;if(Ht)t="<remove></remove>"+t;else{var i=w(t,/^[\r\n\t ]+/);n=i&&i[0]}"application/xhtml+xml"===mt&&ie===ne&&(t='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+t+"</body></html>");var o=rt?rt.createHTML(t):t;if(ie===ne)try{e=(new y).parseFromString(o,mt)}catch(t){}if(!e||!e.documentElement){e=lt.createDocument(ie,"template",null);try{e.documentElement.innerHTML=oe?at:o}catch(t){}}var r=e.body||e.documentElement;return t&&n&&r.insertBefore(a.createTextNode(n),r.childNodes[0]||null),ie===ne?ht.call(e,Rt?"html":"body")[0]:Rt?e.documentElement:r},Se=function(t){return ut.call(t.ownerDocument||t,t,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT,null,!1)},ke=function(e){return"object"===t(u)?e instanceof u:e&&"object"===t(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},we=function(t,e,n){pt[t]&&v(pt[t],(function(t){t.call(o,e,n,le)}))},$e=function(t){var e,n;if(we("beforeSanitizeElements",t,null),(n=t)instanceof m&&("string"!=typeof n.nodeName||"string"!=typeof n.textContent||"function"!=typeof n.removeChild||!(n.attributes instanceof p)||"function"!=typeof n.removeAttribute||"function"!=typeof n.setAttribute||"string"!=typeof n.namespaceURI||"function"!=typeof n.insertBefore||"function"!=typeof n.hasChildNodes))return ve(t),!0;if(T(/[\u0080-\uFFFF]/,t.nodeName))return ve(t),!0;var i=yt(t.nodeName);if(we("uponSanitizeElement",t,{tagName:i,allowedTags:Et}),t.hasChildNodes()&&!ke(t.firstElementChild)&&(!ke(t.content)||!ke(t.content.firstElementChild))&&T(/<[/\w]/g,t.innerHTML)&&T(/<[/\w]/g,t.textContent))return ve(t),!0;if("select"===i&&T(/<template/i,t.innerHTML))return ve(t),!0;if(!Et[i]||xt[i]){if(!xt[i]&&Ee(i)){if(At.tagNameCheck instanceof RegExp&&T(At.tagNameCheck,i))return!1;if(At.tagNameCheck instanceof Function&&At.tagNameCheck(i))return!1}if(zt&&!Gt[i]){var r=it(t)||t.parentNode,a=nt(t)||t.childNodes;if(a&&r)for(var s=a.length-1;s>=0;--s)r.insertBefore(tt(a[s],!0),et(t))}return ve(t),!0}return t instanceof h&&!function(t){var e=it(t);e&&e.tagName||(e={namespaceURI:ie,tagName:"template"});var n=S(t.tagName),i=S(e.tagName);return!!re[t.namespaceURI]&&(t.namespaceURI===ee?e.namespaceURI===ne?"svg"===n:e.namespaceURI===te?"svg"===n&&("annotation-xml"===i||fe[i]):Boolean(me[n]):t.namespaceURI===te?e.namespaceURI===ne?"math"===n:e.namespaceURI===ee?"math"===n&&de[i]:Boolean(ye[n]):t.namespaceURI===ne?!(e.namespaceURI===ee&&!de[i])&&!(e.namespaceURI===te&&!fe[i])&&!ye[n]&&(pe[n]||!me[n]):!("application/xhtml+xml"!==mt||!re[t.namespaceURI]))}(t)?(ve(t),!0):"noscript"!==i&&"noembed"!==i||!T(/<\/no(script|embed)/i,t.innerHTML)?(Lt&&3===t.nodeType&&(e=t.textContent,e=$(e,vt," "),e=$(e,bt," "),e=$(e,gt," "),t.textContent!==e&&(g(o.removed,{element:t.cloneNode()}),t.textContent=e)),we("afterSanitizeElements",t,null),!1):(ve(t),!0)},Ce=function(t,e,n){if(Wt&&("id"===e||"name"===e)&&(n in a||n in ue))return!1;if(_t&&!Bt[e]&&T(St,e));else if(jt&&T(kt,e));else if(!Pt[e]||Bt[e]){if(!(Ee(t)&&(At.tagNameCheck instanceof RegExp&&T(At.tagNameCheck,t)||At.tagNameCheck instanceof Function&&At.tagNameCheck(t))&&(At.attributeNameCheck instanceof RegExp&&T(At.attributeNameCheck,e)||At.attributeNameCheck instanceof Function&&At.attributeNameCheck(e))||"is"===e&&At.allowCustomizedBuiltInElements&&(At.tagNameCheck instanceof RegExp&&T(At.tagNameCheck,n)||At.tagNameCheck instanceof Function&&At.tagNameCheck(n))))return!1}else if(Xt[e]);else if(T(Ct,$(n,$t,"")));else if("src"!==e&&"xlink:href"!==e&&"href"!==e||"script"===t||0!==C(n,"data:")||!Yt[t])if(It&&!T(wt,$(n,$t,"")));else if(n)return!1;return!0},Ee=function(t){return t.indexOf("-")>0},Te=function(e){var n,i,r,a;we("beforeSanitizeAttributes",e,null);var s=e.attributes;if(s){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Pt};for(a=s.length;a--;){var u=n=s[a],c=u.name,h=u.namespaceURI;if(i="value"===c?n.value:E(n.value),r=yt(c),l.attrName=r,l.attrValue=i,l.keepAttr=!0,l.forceKeepAttr=void 0,we("uponSanitizeAttribute",e,l),i=l.attrValue,!l.forceKeepAttr&&(be(c,e),l.keepAttr))if(Mt||!T(/\/>/i,i)){Lt&&(i=$(i,vt," "),i=$(i,bt," "),i=$(i,gt," "));var f=yt(e.nodeName);if(Ce(f,r,i)){if(!Vt||"id"!==r&&"name"!==r||(be(c,e),i="user-content-"+i),rt&&"object"===t(O)&&"function"==typeof O.getAttributeType)if(h);else switch(O.getAttributeType(f,r)){case"TrustedHTML":i=rt.createHTML(i);break;case"TrustedScriptURL":i=rt.createScriptURL(i)}try{h?e.setAttributeNS(h,c,i):e.setAttribute(c,i),b(o.removed)}catch(t){}}}else be(c,e)}we("afterSanitizeAttributes",e,null)}},Pe=function t(e){var n,i=Se(e);for(we("beforeSanitizeShadowDOM",e,null);n=i.nextNode();)we("uponSanitizeShadowNode",n,null),$e(n)||(n.content instanceof s&&t(n.content),Te(n));we("afterSanitizeShadowDOM",e,null)};return o.sanitize=function(e){var i,a,l,c,h,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((oe=!e)&&(e="\x3c!--\x3e"),"string"!=typeof e&&!ke(e)){if("function"!=typeof e.toString)throw P("toString is not a function");if("string"!=typeof(e=e.toString()))throw P("dirty is not a string, aborting")}if(!o.isSupported){if("object"===t(n.toStaticHTML)||"function"==typeof n.toStaticHTML){if("string"==typeof e)return n.toStaticHTML(e);if(ke(e))return n.toStaticHTML(e.outerHTML)}return e}if(Dt||he(f),o.removed=[],"string"==typeof e&&(Qt=!1),Qt){if(e.nodeName){var d=yt(e.nodeName);if(!Et[d]||xt[d])throw P("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof u)1===(a=(i=ge("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===a.nodeName||"HTML"===a.nodeName?i=a:i.appendChild(a);else{if(!Nt&&!Lt&&!Rt&&-1===e.indexOf("<"))return rt&&Ft?rt.createHTML(e):e;if(!(i=ge(e)))return Nt?null:Ft?at:""}i&&Ht&&ve(i.firstChild);for(var p=Se(Qt?e:i);l=p.nextNode();)3===l.nodeType&&l===c||$e(l)||(l.content instanceof s&&Pe(l.content),Te(l),c=l);if(c=null,Qt)return e;if(Nt){if(Ut)for(h=ct.call(i.ownerDocument);i.firstChild;)h.appendChild(i.firstChild);else h=i;return(Pt.shadowroot||Pt.shadowrootmod)&&(h=ft.call(r,h,!0)),h}var m=Rt?i.outerHTML:i.innerHTML;return Rt&&Et["!doctype"]&&i.ownerDocument&&i.ownerDocument.doctype&&i.ownerDocument.doctype.name&&T(J,i.ownerDocument.doctype.name)&&(m="<!DOCTYPE "+i.ownerDocument.doctype.name+">\n"+m),Lt&&(m=$(m,vt," "),m=$(m,bt," "),m=$(m,gt," ")),rt&&Ft?rt.createHTML(m):m},o.setConfig=function(t){he(t),Dt=!0},o.clearConfig=function(){le=null,Dt=!1},o.isValidAttribute=function(t,e,n){le||he({});var i=yt(t),o=yt(e);return Ce(i,o,n)},o.addHook=function(t,e){"function"==typeof e&&(pt[t]=pt[t]||[],g(pt[t],e))},o.removeHook=function(t){if(pt[t])return b(pt[t])},o.removeHooks=function(t){pt[t]&&(pt[t]=[])},o.removeAllHooks=function(){pt={}},o}()}()},5311:t=>{"use strict";t.exports=jQuery}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={id:i,loaded:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),n(1540),n(5733),n(2362),n(305),n(5039),n(301),n(7933),n(1285),n(7592),n(8882),n(7893),n(9310),n(3607),n(3484),n(5670),n(9984),n(7157),n(3827),n(888),n(6875),n(7718),n(6090),n(1870),n(670),n(6397),n(9789),n(6172),n(8943),n(4748),n(1400),n(8573),n(846),n(2116),n(9236),n(2464),n(6108),n(5540),n(8216),n(6189),n(9814),n(1049),n(6001),n(6333),n(9825),n(5820),n(3617),n(3866),n(285),n(2351),n(2882),n(7125),n(1902),n(6801),n(1789),n(6169),n(3499),n(8356),n(3933),n(2338),n(9306),n(9218),n(9250),n(6806),n(4622),n(8677),n(1335),n(3253),n(7026),n(3738),n(747),n(1144),n(9016),n(9243),n(7305),n(5111),n(2997),n(7948),n(5106),n(2726),n(9287),n(5775),n(749),n(5507),n(5347),n(9543),n(9388),n(818),n(2489),n(7279),n(6980),n(4992),n(1953),n(5651),n(388),n(785),n(4481),n(8444),n(9884),n(7473),n(9810),n(2496),n(3470),n(8772),n(2005),n(3055),n(7013),n(4553),n(3587),n(6519),n(8895),n(7456),n(5721),n(5469),n(1301),n(597),n(2147),n(2084),n(3710),n(1667),n(9480),n(6106),n(4357),n(903),n(5542),n(3785),n(6834),n(8154),n(9619)})();
