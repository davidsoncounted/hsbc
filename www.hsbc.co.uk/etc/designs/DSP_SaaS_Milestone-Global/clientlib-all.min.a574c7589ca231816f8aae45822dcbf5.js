window.webAuthConfig=JSON.parse(document.getElementsByTagName("digital-security-platform-web")[0].getAttribute("dspconf"));
ADRUM_APP_KEY=window.webAuthConfig.ADRUM_APP_KEY;
var captchaConfig=null;
if(window.webAuthConfig){captchaConfig=window.webAuthConfig.RE_CAPTCHA_CONFIG
}else{captchaConfig=JSON.parse(document.getElementsByTagName("digital-security-platform-web")[0].getAttribute("dspconf")).RE_CAPTCHA_CONFIG
}if(captchaConfig.enableCaptchaAPI||captchaConfig.enableEnterpriseCaptchaAPI){var entitySiteKey=(captchaConfig.captchaSiteKey)?captchaConfig.captchaSiteKey.trim():captchaConfig.captchSiteKey.trim();
var JSLink=(captchaConfig.filePath)?captchaConfig.filePath+entitySiteKey:"https://www.google.com/recaptcha/api.js?onload=ReCaptchaCallbackV3&render="+entitySiteKey;
var JSElement=document.createElement("script");
JSElement.src=JSLink;
document.getElementsByTagName("head")[0].appendChild(JSElement);
setTimeout(function(){if(typeof grecaptcha=="undefined"){var a=(captchaConfig.FallbackFilePath)?captchaConfig.FallbackFilePath+entitySiteKey:"https://www.recaptcha.net/recaptcha/api.js?render="+entitySiteKey;
var b=document.createElement("script");
b.src=a;
document.head.appendChild(b)
}},1000);
var ReCaptchaCallbackV3=function(){if(captchaConfig.enableEnterpriseCaptchaAPI){window.grecaptcha.enterprise.ready(function(){var a=document.querySelectorAll("div.grecaptcha-badge");
[].forEach.call(a,function(c){if(c){var d=c.querySelectorAll("textarea")[0];
var b=document.createElement("label");
b.innerHTML="reCaptcha response";
b.setAttribute("for",d.getAttribute("id"));
c.appendChild(b);
c.style.visibility="hidden";
c.setAttribute("aria-hidden","true")
}})
})
}else{window.grecaptcha.ready(function(){var a=document.querySelectorAll("div.grecaptcha-badge");
[].forEach.call(a,function(c){if(c){var d=c.querySelectorAll("textarea")[0];
var b=document.createElement("label");
b.innerHTML="reCaptcha response";
b.setAttribute("for",d.getAttribute("id"));
c.appendChild(b);
c.style.visibility="hidden";
c.setAttribute("aria-hidden","true")
}})
})
}}
}(function(K){var x,z,A,B,L;
x={f:[],b:[],c:2000,v:[],j:null};
z=function(){function g(e){a.push(e)
}var a=[];
return{C:function(a){a();
return function(){}
},G:g,m:function(){for(;
0<a.length;
){var e=a.shift();
try{e()
}catch(c){}}},M:function(e,c){var d=!1;
try{if(a=[],0!==e.length){for(var h=!1,b=function(){h||(c(),h=!0)
},m=e.length,k=function(){0<m&&0===--m&&b()
},d=!0,f=0;
f<e.length;
f++){try{var p=(0,e[f])(k);
g(p)
}catch(w){}}g(b)
}}catch(w){}finally{d||c()
}}}
}(x);
A=function(){return{a:[],h:[],D:function(g){return{F:g,i:[],L:function(a,e){for(var c=0;
c<e.length;
c++){this.i[a+c]=e[c]
}},J:function(a){this.L(this.i.length,a)
},H:function(){for(var a=this.i,e=this.F.toString(),c=0;
c<a.length;
c++){try{for(var d=e+="&",h=a[c](),b="",g=/[%&]+/g,k=0,f=void 0;
f=g.exec(h);
k=g.lastIndex){b+=h.substring(k,f.index)+encodeURIComponent(f[0])
}b+=h.substring(k);
e=d+b
}catch(p){}}return e
}}
}}
}();
B=function(g){return{A:g,startsWith:function(a,e){return"string"===typeof a&&"string"===typeof e&&a.length>=e.length?a.substr(0,e.length)===e:!1
},o:function(a){a.match("%5e/index.html")&&(a=document.URL.match(/^[^:]+:/)[0]+a);
var e=/^https?:\/\/[^/]+/;
a=a.match(e);
if(null===a){return !0
}e=document.URL.match(e);
return null!==e&&e[0]===a[0]
},l:function(){var a=navigator.userAgent;
if(a.match(/ Trident\/7\.0;.* rv:11\.0/)){return 11
}var e;
return(e=a.match(/ MSIE (\d+)/))?parseInt(e[1]):null
},K:function(a,e,c){var d=!1;
try{var h=!1,b=function(){a.onload=a.onerror=a.ontimeout=null;
h=!0
};
a.onload=function(){h||(b(),a=null,c(!0))
};
a.onerror=a.ontimeout=function(){h||(b(),a=null,c(!1))
};
a.timeout=e;
a.send();
d=!0
}catch(g){b(),a=null
}finally{d||c(!1)
}},s:function(){return window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")
},B:function(a,e,c){var d=!1,h=!1,b=!1;
try{var g=null,k=!1,f=function(){a.onreadystatechange=null;
null!==g&&(clearTimeout(g),g=null);
k=!0
};
a.onreadystatechange=function(){k||4!=a.readyState||(f(),a=null,c(h,b))
};
0!==e&&(g=setTimeout(function(){k||(h=!0,f(),a.abort(),a=null,c(h,b))
},e));
a.send();
d=!0
}catch(p){b=!0,f(),a=null
}finally{d||c(h,b)
}},u:function(a,e,c,d){"boolean"!==typeof d&&(d=!1);
for(var h=!0,b;
0<=(b=a.indexOf(e))&&(d||h);
){a=a.substr(0,b)+c+a.substr(b+e.length),h=!1
}return a
},I:function(a){if(!a){return 0
}if(Array.prototype.reduce){return a.split("").reduce(function(a,d){a=(a<<5)-a+d.charCodeAt(0);
return a&a
},0)
}for(var e=0,c=0,d=a.length;
c<d;
c++){e=(e<<5)-e+a.charCodeAt(c),e=e&e
}return e
}}
}(function(g){var a;
try{a=document.getElementById(g)
}catch(b){}if(null===a||"undefined"===typeof a){try{a=document.getElementsByName(g)[0]
}catch(b){}}if(null===a||"undefined"===typeof a){for(var e=0;
e<document.forms.length;
e++){for(var c=document.forms[e],d=0;
d<c.elements.length;
d++){var h=c[d];
if(h.name===g||h.id===g){return h
}}}}return a
});
L=function(g,a,e,c,d){function h(a){g.m();
try{if(!a){return k()
}var d;
d=c.A(a);
if(null!==d){try{d.value=k()
}catch(e){d.value=escape(e.message)
}}}catch(e){}}function b(a){function e(){null!==h&&(clearTimeout(h),h=null);
b=!0;
c&&(c=!1,a())
}var c=!1,b=!1;
G="";
var h=null;
try{navigator.getBattery().then(function(d){b||(G=[d.charging,d.chargingTime,d.dischargingTime,d.level].join(),c=!1,a())
}),h=setTimeout(e,d.c),c=!0
}catch(f){}finally{return c||a(),e
}}function m(a,e){function b(){f=!0
}var h=!1,f=!1;
try{if(F="",v=null,a){var g=!c.o(a);
if(g){var n=c.l();
if(null!==n&&10>n){u=8;
return
}}var p=null;
try{p=c.s()
}catch(k){u=9;
return
}try{p.open("GET/index.html",a,!0)
}catch(k){u=1;
return
}c.B(p,d.c,function(a,d){try{if(f){u=5
}else{if(a){u=2
}else{if(d){u=6
}else{var q=p,b=["","",""];
try{x=q.getResponseHeader("cache-control");
for(var h=q.getAllResponseHeaders().toLowerCase().split("\n"),n=["warning","x-cache","via"],E=0;
E<n.length;
E++){for(var k=0;
k<h.length;
k++){if(c.startsWith(h[k],n[E]+":")){b[E]=q.getResponseHeader(n[E]);
break
}}}}catch(l){}z=b[0];
A=b[1];
B=b[2];
u=p.status;
if(200===p.status){var m;
if(!(m=p.getResponseHeader("Last-Modified"))){var w=p.getResponseHeader("Expires");
if(w){var t=new Date(w);
t.setTime(t.getTime()-31536000000);
m=t.toUTCString()
}else{m=void 0
}}(F=m||"")?v=g:u=7
}}}}}catch(l){u=6
}finally{e()
}});
h=!0
}else{u=4
}}catch(k){u=6
}finally{return h||e(),b
}}function k(){C=new Date;
for(var q="Acrobat;Flash;QuickTime;Java Plug-in;Director;Office".split(";"),b=0;
b<q.length;
b++){var c=q[b],h=c,f=c,c="";
try{if(navigator.plugins&&navigator.plugins.length){for(var g=new RegExp(f+".* ([0-9._]+)"),f=0;
f<navigator.plugins.length;
f++){var p=g.exec(navigator.plugins[f].name);
null===p&&(p=g.exec(navigator.plugins[f].description));
p&&(c=p[1])
}}else{if(window.ActiveXObject&&H[f]){try{var n=new ActiveXObject(H[f][0]),c=H[f][1](n)
}catch(k){c=""
}}}}catch(k){c=k.message
}y[h]=c
}q="";
for(b=0;
b<a.a.length;
b++){var l;
try{l=a.a[b]()
}catch(k){l=""
}q+=escape(l);
q+=";"
}q+=escape(d.j.H())+";";
for(b=0;
b<a.h.length;
b++){q=a.h[b](q)
}return I?e.w(q):q
}function f(a){try{if(navigator.plugins&&navigator.plugins.length){for(var d=0;
d<navigator.plugins.length;
d++){var b=navigator.plugins[d];
if(0<=b.name.indexOf(a)){return b.name+(b.description?"|"+b.description:"")
}}}}catch(c){}return""
}function p(a){var d=Math.min(r,D);
return 0!==Math.abs(r-D)&&a.getTimezoneOffset()===d
}function w(a){for(var d=0;
d<a.length;
d++){try{var b=eval(a[d]);
if(b){return b
}}catch(c){}}return""
}function n(a){var d="";
try{"undefined"!==typeof t.g.getComponentVersion&&(d=t.g.getComponentVersion(a,"ComponentID"))
}catch(b){a=b.message.length,d=escape(b.message.substr(0,40<a?40:a))
}return d
}function J(a){return function(){return a
}
}var I=!0,t={},F="",v=null,r=(new Date(2005,0,15)).getTimezoneOffset(),D=(new Date(2005,6,15)).getTimezoneOffset(),u=3,x="",z="",A="",B="",G="",l=J(""),H={Flash:["ShockwaveFlash.ShockwaveFlash",function(a){return a.getVariable("$version")
}],Director:["SWCtl.SWCtl",function(a){return a.ShockwaveVersion("")
}]};
try{t.g=document.createElement("span"),"undefined"!==typeof t.g.addBehavior&&t.g.addBehavior("#default#clientCaps")
}catch(q){}var y={};
d.j=new a.D(1);
d.j.J([function(){var a="";
if(navigator.plugins&&navigator.plugins.length){for(var d=0;
d<navigator.plugins.length;
d++){var b=navigator.plugins[d],a=a+b.name+b.filename+b.description+b.version
}}return c.I(a)+""
},function(){return G
},function(){return w(["navigator.doNotTrack","navigator.msDoNotTrack"])
},function(){return eval("navigator.hardwareConcurrency")
},function(){return eval("navigator.maxTouchPoints")
},function(){return eval("navigator.mimeTypes.length")
},function(){return eval("navigator.product")
},function(){return eval("navigator.productSub")
},function(){return eval("navigator.appMinorVersion")
},function(){return eval('!!window.document.createEvent("TouchEvent")')
},function(){return eval("navigator.vendor")
},function(){return eval("navigator.vendorSub")
},function(){return x
},function(){return z.replace(/ *(\d{3}) [^ ]*( "[^"\\]*(\\(.|\n)[^"\\]*)*"){1,2} */g,function(a,d){return d
})
},function(){return A
},function(){return B
}]);
var C;
a.a=[J("TF1"),J("025"),function(){return ScriptEngineMajorVersion()
},function(){return ScriptEngineMinorVersion()
},function(){return ScriptEngineBuildVersion()
},function(){return n("{7790769C-0471-11D2-AF11-00C04FA35D02}")
},function(){return n("{89820200-ECBD-11CF-8B85-00AA005B4340}")
},function(){return n("{283807B5-2C60-11D0-A31D-00AA00B92C03}")
},function(){return n("{4F216970-C90C-11D1-B5C7-0000F8051515}")
},function(){return n("{44BBA848-CC51-11CF-AAFA-00AA00B6015C}")
},function(){return n("{9381D8F2-0288-11D0-9501-00AA00B911A5}")
},function(){return n("{4F216970-C90C-11D1-B5C7-0000F8051515}")
},function(){return n("{5A8D6EE0-3E18-11D0-821E-444553540000}")
},function(){return n("{89820200-ECBD-11CF-8B85-00AA005B4383}")
},function(){return n("{08B0E5C0-4FCB-11CF-AAA5-00401C608555}")
},function(){return n("{45EA75A0-A269-11D1-B5BF-0000F8051515}")
},function(){return n("{DE5AED00-A4BF-11D1-9948-00C04F98BBC9}")
},function(){return n("{22D6F312-B0F6-11D0-94AB-0080C74C7E95}")
},function(){return n("{44BBA842-CC51-11CF-AAFA-00AA00B6015B}")
},function(){return n("{3AF36230-A269-11D1-B5BF-0000F8051515}")
},function(){return n("{44BBA840-CC51-11CF-AAFA-00AA00B6015C}")
},function(){return n("{CC2A9BA0-3BDD-11D0-821E-444553540000}")
},function(){return n("{08B0E5C0-4FCB-11CF-AAA5-00401C608500}")
},function(){return eval("navigator.appCodeName")
},function(){return eval("navigator.appName")
},function(){return eval("navigator.appVersion")
},function(){return w(["navigator.productSub","navigator.appMinorVersion"])
},function(){return eval("navigator.browserLanguage")
},function(){return eval("navigator.cookieEnabled")
},function(){return w(["navigator.oscpu","navigator.cpuClass"])
},function(){return eval("navigator.onLine")
},function(){return eval("navigator.platform")
},function(){return eval("navigator.systemLanguage")
},function(){return eval("navigator.userAgent")
},function(){return w(["navigator.language","navigator.userLanguage"])
},function(){return eval("document.defaultCharset")
},function(){return eval("document.domain")
},function(){return eval("screen.deviceXDPI")
},function(){return eval("screen.deviceYDPI")
},function(){return eval("screen.fontSmoothingEnabled")
},function(){return eval("screen.updateInterval")
},function(){return 0!==Math.abs(r-D)
},function(){return p(C)
},function(){return"@UTC@"
},function(){var a=0,a=0;
p(C)&&(a=Math.abs(r-D));
return a=-(C.getTimezoneOffset()+a)/60
},function(){return(new Date(2005,5,7,21,33,44,888)).toLocaleString()
},function(){return eval("screen.width")
},function(){return eval("screen.height")
},function(){return y.Acrobat
},function(){return y.Flash
},function(){return y.QuickTime
},function(){return y["Java Plug-in"]
},function(){return y.Director
},function(){return y.Office
},function(){return"@CT@"
},function(){return r
},function(){return D
},function(){return C.toLocaleString()
},function(){return eval("screen.colorDepth")
},function(){return eval("window.screen.availWidth")
},function(){return eval("window.screen.availHeight")
},function(){return eval("window.screen.availLeft")
},function(){return eval("window.screen.availTop")
},function(){return f("Acrobat")
},function(){return f("Adobe SVG")
},function(){return f("Authorware")
},function(){return f("Citrix ICA")
},function(){return f("Director")
},function(){return f("Flash")
},function(){return f("MapGuide")
},function(){return f("MetaStream")
},function(){return f("PDF Viewer")
},function(){return f("QuickTime")
},function(){return f("RealOne")
},function(){return f("RealPlayer Enterprise")
},function(){return f("RealPlayer Plugin")
},function(){return f("Seagate Software Report")
},function(){return f("Silverlight")
},function(){return f("Windows Media")
},function(){return f("iPIX")
},function(){return f("nppdf.so")
},function(){var a=document.createElement("span");
a.innerHTML="&nbsp;";
a.style.position="absolute";
a.style.left="-9999px";
document.body.appendChild(a);
var d=a.offsetHeight;
document.body.removeChild(a);
return d
},l,l,l,l,l,l,l,l,l,l,l,l,l,l,function(){return"6.6.0-0"
},l,function(){return F
},l,l,l,l,l,function(){return"boolean"!==typeof v?"":0+v
},function(){return u
},function(){return"0"
},l,l,l,l];
a.h=[function(a){return c.u(a,escape("@UTC@"),(new Date).getTime())
},function(a){return c.u(a,escape("@CT@"),(new Date).getTime()-C.getTime())
}];
d.b.push(function(a){var b=d.f[0];
return void 0===b?(u=4,g.C(a)):m(b,a)
});
navigator.getBattery&&d.b.push(b);
t.hsbcform=h;
t.f1b5=e.w;
t.initiate=function(a,b){g.m();
d.f=b;
g.M(d.b,function(){setTimeout(a,0)
});
for(var c=0;
c<d.v.length;
c++){d.v[c]()
}};
t.setResource=function(a,d,b){g.m();
if(2<arguments.length){"function"!==typeof b&&(b=function(){});
var e=m(a,function(){setTimeout(b,0)
});
g.G(e)
}else{try{F="";
v=null;
if(e=!c.o(a)){var h=c.l();
if(null!==h&&10>h){return
}}var f=c.s();
f.open("GET/index.html",a,!1);
f.send();
h=function(){var a=f.getResponseHeader("Expires");
if(a){return a=new Date(a),a.setTime(a.getTime()-31536000000),a.toUTCString()
}};
200===f.status&&(F=f.getResponseHeader("Last-Modified")||h()||"")&&(v=e)
}catch(p){}}};
return function(a){a=a||{};
var b=a.ctx||window;
I=a.hasOwnProperty("compress")?a.compress:!0;
b.hsbcparm=t;
I&&(a=navigator.userAgent.toLowerCase(),"Gecko"===navigator.product&&2>=parseInt(a.substring(a.indexOf("rv:")+3,a.indexOf(")",a.indexOf("rv:")+3)).split(".")[0])&&h())
}
}(z,A,function(){function g(a){var c;
37>a?11>a?a?c=a+47:c=46:c=a+54:38>a?c=95:c=a+59;
return String.fromCharCode(c)
}function a(a){function c(a){m=m<<a[0]|a[1];
for(k+=a[0];
6<=k;
){a=m>>k-6&63,b+=g(a),k-=6,m^=a<<k
}}var b="",m=0,k=0;
c([6,(a.length&7)<<3|0]);
c([6,a.length&56|1]);
for(var f=0;
f<a.length;
f++){if(void 0===e[a.charCodeAt(f)]){return
}c(e[a.charCodeAt(f)])
}c(e[0]);
0<k&&c([6-k,0]);
return b
}var e={1:[4,15],110:[8,239],74:[8,238],57:[7,118],56:[7,117],71:[8,233],25:[8,232],101:[5,28],104:[7,111],4:[7,110],105:[6,54],5:[7,107],109:[7,106],103:[9,423],82:[9,422],26:[8,210],6:[7,104],46:[6,51],97:[6,50],111:[6,49],7:[7,97],45:[7,96],59:[5,23],15:[7,91],11:[8,181],72:[8,180],27:[8,179],28:[8,178],16:[7,88],88:[10,703],113:[11,1405],89:[12,2809],107:[13,5617],90:[14,11233],42:[15,22465],64:[16,44929],0:[16,44928],81:[9,350],29:[8,174],118:[8,173],30:[8,172],98:[8,171],12:[8,170],99:[7,84],117:[6,41],112:[6,40],102:[9,319],68:[9,318],31:[8,158],100:[7,78],84:[6,38],55:[6,37],17:[7,73],8:[7,72],9:[7,71],77:[7,70],18:[7,69],65:[7,68],48:[6,33],116:[6,32],10:[7,63],121:[8,125],78:[8,124],80:[7,61],69:[7,60],119:[7,59],13:[8,117],79:[8,116],19:[7,57],67:[7,56],114:[6,27],83:[6,26],115:[6,25],14:[6,24],122:[8,95],95:[8,94],76:[7,46],24:[7,45],37:[7,44],50:[5,10],51:[5,9],108:[6,17],22:[7,33],120:[8,65],66:[8,64],21:[7,31],106:[7,30],47:[6,14],53:[5,6],49:[5,5],86:[8,39],85:[8,38],23:[7,18],75:[7,17],20:[7,16],2:[5,3],73:[8,23],43:[9,45],87:[9,44],70:[7,10],3:[6,4],52:[5,1],54:[5,0]},c="%20 ;;; %3B %2C und fin ed; %28 %29 %3A /53 ike Web 0; .0 e; on il ck 01 in Mo fa 00 32 la .1 ri it %u le".split(" ");
return{w:function(d){for(var e=d,b=0;
c[b];
b++){e=e.split(c[b]).join(String.fromCharCode(b+1))
}e=a(e);
if(void 0===e){return d
}for(var b=65535,m=0;
m<d.length;
m++){b=(b>>>8|b<<8)&65535,b^=d.charCodeAt(m)&255,b^=(b&255)>>4,b^=b<<12&65535,b^=(b&255)<<5&65535
}b&=65535;
d=""+g(b>>>12);
d+=g(b>>>6&63);
d+=g(b&63);
return e+d
}}
}(),B,x);
(function(g){"undefined"!==typeof K?g(K):g()
})(function(g,a,e,c,d,h){function b(a,b,e){function f(){h=!0
}var g=!1,h=!1;
try{var k=!1;
if(!c.o(a)){var v=c.l();
if(null!==v){if(8>v){return
}if(10>v){if(!window.XDomainRequest){return
}k=!0
}}}var r;
(function(a,b){k?(r=new XDomainRequest,r.open("POST/index.html",a),c.K(r,d.c,b)):(r=c.s(),r.open("POST/index.html",a,!0),c.B(r,d.c,function(){b(200===r.status)
}))
})(a,function(a){try{var d=new Date;
if(!h&&a&&r.responseText){var f=r.responseText.replace(/[^ -~](?:.|\n)*/,"");
c.A(b).value=f;
m=d
}}catch(g){}finally{e()
}});
g=!0
}catch(D){}finally{return g||e(),f
}}var m=null,k="",f="";
a.h[0]=function(a){return c.u(a,escape("@UTC@"),(m||new Date).getTime())
};
a.a[106]=function(){return"1"
};
a.a[108]=function(){return k
};
a.a[109]=function(){return f
};
a.a[110]=function(){return h((new Date).getTime())
};
d.b.push(function(a){var c=d.f,e=c[1],c=c[2];
return void 0===e||void 0===c?g.C(a):b(e,c,a)
});
d.v.push(function(){k=f="";
var a=d.f,b=a[3];
if(b){a=a[4];
a:{for(var c=b+"=",e=document.cookie.split(/; */g),g=0;
g<e.length;
g++){var m=e[g];
if(0===m.indexOf(c)){f=m.substring(c.length,m.length);
break a
}}f=""
}f?k="0":(c=(new Date).getTime(),f=h(c),document.cookie=b+"="+f+"; expires="+(new Date(c+63072000000)).toUTCString()+(a?"; domain=."+a:"")+"; path=/",k="1")
}});
return function(a){e(a)
}
}(z,A,L,B,x,function(){var g=/[xy]/g;
return function(a){return("0000000"+((a/1000|0)>>>0).toString(16)).slice(-8)+"-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(g,function(a){var c=16*Math.random()|0;
"y"===a&&(c=c&3|8);
return c.toString(16)
})
}
}()))
})();
(function(){new function(){if(!window.ADRUM&&!0!==window["adrum-disable"]){var b=window.ADRUM={};
window["adrum-start-time"]=window["adrum-start-time"]||(new Date).getTime();
(function(c){(function(d){d.Bd=function(){for(var f=[],e=0;
e<arguments.length;
e++){f[e-0]=arguments[e]
}for(e=0;
e<f.length;
e++){var g=f[e];
g&&g.setUp()
}}
})(c.monitor||(c.monitor={}))
})(b||(b={}));
(function(c){(function(E){function y(d){return"undefined"!==typeof d&&null!==d
}function A(d){return"object"==typeof d&&!E.isArray(d)&&null!==d
}function D(d){return"function"==typeof d||!1
}function B(d){return"string"==typeof d
}function w(e,k){for(var g in k){var h=k[g];
if(j(k,g)){var f=e[g];
A(h)&&A(f)?w(f,h):E.isArray(f)&&E.isArray(h)?e[g]=f.concat(h):e[g]=h
}}return e
}function j(e,d){return Object.prototype.hasOwnProperty.call(e,d)&&y(e[d])
}function o(d){return B(d)?d.replace(/^\s*/,"").replace(/\s*$/,""):d
}function v(e,d){var f=Array.prototype[e];
return f?i(f):u(e,d)
}function i(e){var d=Array.prototype.slice;
return function(f){return e.apply(f,d.call(arguments,1))
}
}function u(e,d){return function(g,f){if(!y(g)){throw new TypeError(e+" called on null or undefined")
}if(!D(f)){throw new TypeError(f+" is not a function")
}return d.apply(null,arguments)
}
}function x(f,e,n){var m=Object(f),k=m.length>>>0,g=0;
if(3>arguments.length){for(;
g<k&&!(g in m);
){g++
}if(g>=k){throw new TypeError("Reduce of empty array with no initial value")
}n=m[g++]
}for(;
g<k;
g++){g in m&&(n=e(n,m[g],g,m))
}return n
}function G(e,g,f){return E.reduce(e,function(k,d,n,m){k[n]=g.call(f,d,n,m);
return k
},Array(e.length>>>0))
}function F(e,g,f){return E.reduce(e,function(k,d,n,m){g.call(f,d,n,m)&&k.push(d);
return k
},[])
}var l=Array.isArray,C=Object.prototype.toString;
E.isDefined=y;
E.isArray=D(l)&&D(l.bind)?l.bind(Array):function(d){return C.call(d)===C.call([])
};
E.isObject=A;
E.isFunction=D;
E.isString=B;
E.isNumber=function(d){return"number"==typeof d
};
E.isBoolean=function(d){return"boolean"==typeof d
};
E.lb=function(d){setTimeout(d,0)
};
E.addEventListener=function(e,h,g){function f(){try{return g.apply(this,Array.prototype.slice.call(arguments))
}catch(d){c.exception(d,"M1",h,e,d)
}}c.isDebug&&c.log("M0",h,e);
e.addEventListener?e.addEventListener(h,f,!1):e.attachEvent&&e.attachEvent("on"+h,f)
};
E.loadScriptAsync=function(e){var g=document.createElement("script");
g.async=!0;
g.src=e;
var f=document.getElementsByTagName("script")[0];
f?(f.parentNode.insertBefore(g,f),c.log("M2",e)):c.log("M3",e)
};
E.mergeJSON=w;
E.hasOwnPropertyDefined=j;
E.Vh=function(d){var e=[];
y(d)&&(e=E.isArray(d)?d:[d]);
return e
};
E.generateGUID=function(d){return y(d)&&D(d.getRandomValues)&&function(){function e(g){g=g.toString(16);
return"0000".substr(g.length)+g
}var f=new Uint16Array(8);
d.getRandomValues(f);
return e(f[0])+e(f[1])+"_"+e(f[2])+"_"+e(f[3])+"_"+e(f[4])+"_"+e(f[5])+e(f[6])+e(f[7])
}
}(window.crypto||window.msCrypto)||function(){return"xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx".replace(/[xy]/g,function(e){var d=16*Math.random()|0;
return("x"==e?d:d&3|8).toString(16)
})
};
E.Kd=function(d){return d?(d=d.stack)&&"string"===typeof d?d:null:null
};
E.trim=o;
E.fh=function(f){var e={},n,m;
if(!f){return e
}var k=f.split("\n");
for(m=0;
m<k.length;
m++){var g=k[m];
n=g.indexOf(":");
f=o(g.substr(0,n)).toLowerCase();
n=o(g.substr(n+1));
f&&(e[f]=e[f]?e[f]+(", "+n):n)
}return e
};
E.tryPeriodically=function(f,e,n,m){function k(){if(e()){n&&n()
}else{var d=f(++g);
0<d?setTimeout(k,d):m&&m()
}}var g=0;
k()
};
E.kc=function(d){return d.charAt(0).toUpperCase()+d.slice(1)
};
E.fd=function(e){for(var d=[],f=1;
f<arguments.length;
f++){d[f-1]=arguments[f]
}return function(){for(var h=[],g=0;
g<arguments.length;
g++){h[g-0]=arguments[g]
}return e.apply(this,d.concat(h))
}
};
E.now=function(){return(new Date).getTime()
};
E.li=x;
E.reduce=v("reduce",x);
E.ki=G;
E.map=v("map",G);
E.ji=F;
E.filter=v("filter",F);
E.Ef=function(d){return E.filter(d,y)
};
E.vf=function(d){return[].concat.apply([],d)
}
})(c.utils||(c.utils={}))
})(b||(b={}));
(function(d){var c=d.conf||(d.conf={});
c.userConf=window["adrum-config"]||{};
c.useHTTPSAlways=!0===c.userConf.useHTTPSAlways;
c.beaconUrlHttp=d.utils.isDefined(c.userConf.beaconUrlHttp)?c.userConf.beaconUrlHttp:"http://col.eum-appdynamics.com";
c.beaconUrlHttps=d.utils.isDefined(c.userConf.beaconUrlHttps)?c.userConf.beaconUrlHttps:"https://col.eum-appdynamics.com";
c.corsEndpointPath="/eumcollector/beacons/browser/v1";
c.imageEndpointPath="../eumcollector/adrumd41d.html?";
c.appKey=c.userConf.appKey||window["adrum-app-key"]||ADRUM_APP_KEY+"";
d=c.useHTTPSAlways||"https:"===document.location.protocol;
var g=c.userConf.adrumExtUrlHttp||"http://cdn.appdynamics.com",h=c.userConf.adrumExtUrlHttps||"https://cdn.appdynamics.com";
c.adrumExtUrl=(d?h:g)+"/adrum-ext.18b6b3ec105ee15f14ef7c382e15f446.js";
c.adrumXdUrl=h+"/adrum-xd.18b6b3ec105ee15f14ef7c382e15f446.html";
c.agentVer="4.3.8.1";
c.sendImageBeacon=c.userConf.beacon&&c.userConf.beacon.sendImageBeacon||window["adrum-send-image-beacon"];
window["adrum-geo-resolver-url"]?(g=window["adrum-geo-resolver-url"],h=g.indexOf("://"),-1!=h&&(g=g.substring(h+3)),g=(d?"https://":"http://")+g):(g=c.userConf.geoResolverUrlHttps||"",h=c.userConf.geoResolverUrlHttp||"",g=d?g:h);
c.geoResolverUrl=g;
c.useStrictDomainCookies=!0===window["adrum-use-strict-domain-cookies"];
c.Ee=10
})(b||(b={}));
(function(i){function g(e,p,o,f){e=i.conf.beaconUrlHttps+"/eumcollector/error.gif?version=1&appKey="+o+"&msg="+encodeURIComponent(e.substring(0,500));
f&&(e+="&stack=",e+=encodeURIComponent(f.substring(0,1500-e.length)));
return e
}function k(f,e){2<=j||(document.createElement("img").src=g(f,0,i.conf.appKey,e),j++)
}function l(c){return 0<=c.location.search.indexOf("ADRUM_debug=true")||0<=c.cookie.search(/(^|;)\s*ADRUM_debug=true/)
}i.iDR=l;
(function(c){c[c.API_ERROR=0]="API_ERROR";
c[c.API_ERROR_INVALID_PARAMS=1]="API_ERROR_INVALID_PARAMS";
c[c.API_ERROR_INVALID_CONFIG=2]="API_ERROR_INVALID_CONFIG";
c[c.API_WARNING=3]="API_WARNING";
c[c.API_WARNING_INEFFECTIVE_CONFIG=4]="API_WARNING_INEFFECTIVE_CONFIG"
})(i.Zd||(i.Zd={}));
i.ja=["JS Agent API Error:","JS Agent API Error Invalid Parameters: ","JS Agent API Error Invalid Configs: ","JS Agent API Warning:","JS Agent API Warning Ineffective Config:"];
i.W=" a constructor is called as a function. Don't forget keyword new.";
i.isDebug=l(document);
i.apiMessageConsoleOut=i.utils.isDefined(i.conf.userConf)&&i.utils.isDefined(i.conf.userConf.log)&&!0===i.conf.userConf.log.apiMessageConsoleOut?!0:!1;
var n=[],m=[];
i.logMessages=n;
i.apiMessages=m;
i.log=function(c){for(var e=1;
e<arguments.length;
e++){}i.isDebug&&n.push(Array.prototype.slice.call(arguments).join(" | "))
};
i.Pg=function(d){for(var c=1;
c<arguments.length;
c++){}m.push(Array.prototype.slice.call(arguments).join(" | "))
};
i.error=function(d){for(var e=1;
e<arguments.length;
e++){}e=Array.prototype.slice.call(arguments).join(" | ");
i.log(e);
k(e,null)
};
i.reportAPIMessage=function(f,r,q,o){var p=i.ih.apply(this,arguments);
i.Pg(p);
i.apiMessageConsoleOut&&"undefined"!==typeof console&&"undefined"!==typeof console.log&&console.log(p);
return p
};
i.exception=function(){for(var d=[],e=0;
e<arguments.length;
e++){d[e-0]=arguments[e]
}1>arguments.length||(d=Array.prototype.slice.call(arguments),e=i.utils.Kd(d[0]),d=d.slice(1).join(" | "),i.log(d),k(d,e))
};
i.assert=function(d,e){d||i.error("Assert fail: "+e)
};
i.dumpLog=i.isDebug?function(){for(var d="",c=0;
c<n.length;
c++){d+=n[c].replace(RegExp("<br/>","g"),"\n\t")+"\n"
}return d
}:function(){};
i.ih=function(o,u,t,p){var s="",s="",r=(new window.Error).stack,q,r=i.utils.isString(r)?r.substring(5):r+"";
i.utils.isDefined(q)||(q=i.utils.map(p,function(c){return null===c?"null":void 0==c?"undefined":""===c?"''":c
}));
switch(o){case 0:case 3:s=i.ja[o];
s=i.utils.isDefined(t)?""+s+u+"\n in "+t+"("+q.join(", ")+")\n"+r:""+s+u+"\n"+r;
break;
case 1:s=i.ja[o];
s=""+s+u+"\nin "+t+"("+q.join(", ")+")\n"+r;
break;
case 2:case 4:s=i.ja[o];
s=""+s+u+", but "+t+"="+q.join(", ")+"\n"+r;
break;
default:s=i.ja[0],s=""+s+u+"\nin "+t+"("+q.join(", ")+")\n"+r
}return s
};
i.cIEBU=g;
var j=0;
i.log("M4")
})(b||(b={}));
(function(d){var c=function(){function f(g){this.max=g;
this.Ma=0
}f.prototype.sg=function(){this.wa()||this.Ma++
};
f.prototype.wa=function(){return this.Ma>=this.max
};
f.prototype.reset=function(){this.Ma=0
};
return f
}(),e=function(){function f(){this.pa=[];
this.pb=new c(f.Oe);
this.ab=new c(f.He)
}f.prototype.submit=function(g){this.push(g)&&d.initEXTDone&&this.processQ()
};
f.prototype.processQ=function(){for(var g=this.Hf(),j=0;
j<g.length;
j++){var i=g[j];
"function"===typeof d.commands[i[0]]?(d.isDebug&&d.log("M5",i[0],i.slice(1).join(", ")),d.commands[i[0]].apply(d,i.slice(1))):d.error("M6",i[0])
}};
f.prototype.Ig=function(g){return"reportXhr"===g||"reportPageError"===g
};
f.prototype.push=function(g){var k=g[0],i=this.Ig(k),j=i?this.pb:this.ab;
if(j.wa()){return d.log("M7",i?"spontaneous":"non spontaneous",k),!1
}this.pa.push(g);
j.sg();
return !0
};
f.prototype.Hf=function(){var g=this.pa;
this.reset();
return g
};
f.prototype.size=function(){return this.pa.length
};
f.prototype.reset=function(){this.pa=[];
this.pb.reset();
this.ab.reset()
};
f.prototype.isSpontaneousQueueDead=function(){return this.pb.wa()
};
f.prototype.isNonSpontaneousQueueDead=function(){return this.ab.wa()
};
f.Oe=100;
f.He=100;
return f
}();
d.fe=e
})(b||(b={}));
(function(c){c.q=new c.fe;
c.command=function(d){for(var e=1;
e<arguments.length;
e++){}c.isDebug&&c.log("M8",d,Array.prototype.slice.call(arguments).slice(1).join(", "));
c.q.submit(Array.prototype.slice.call(arguments))
}
})(b||(b={}));
(function(c){(function(d){var e=function(){function f(){this.status={}
}f.prototype.setUp=function(){};
f.prototype.set=function(h,g){this.status[h]=g
};
return f
}();
d.Hb=e
})(c.monitor||(c.monitor={}))
})(b||(b={}));
(function(c){(function(d){window.ADRUM.aop=d;
d.support=function(e){return !e||"apply" in e
};
d.around=function(i,j,l,k,g){c.assert(d.support(i),"aop.around called on a function which does not support interception");
i=i||function(){};
return function(){c.isDebug&&c.log("M9",k,Array.prototype.slice.call(arguments).join(", "));
var f=Array.prototype.slice.call(arguments),q;
try{j&&(q=j.apply(this,f))
}catch(o){c.exception(o,"M10",k,o)
}c.assert(!q||"[object Array]"===Object.prototype.toString.call(q));
var p=void 0;
try{p=i.apply(this,q||f)
}catch(e){throw g&&g(e),e
}finally{try{l&&l.apply(this,f)
}catch(h){c.exception(h,"M11",k,h)
}}return p
}
};
d.before=function(f,g,h){return d.around(f,g,null,h)
};
d.after=function(f,g,h){return d.around(f,null,g,h)
}
})(c.aop||(c.aop={}))
})(b||(b={}));
(function(c){c=c.EventType||(c.EventType={});
c[c.PageView=0]="PageView";
c[c.Ajax=2]="Ajax";
c[c.VPageView=3]="VPageView";
c[c.Error=4]="Error";
c[c.IFRAME=1]="IFRAME";
c[c.ABSTRACT=100]="ABSTRACT";
c[c.ADRUM_XHR=101]="ADRUM_XHR";
c[c.NG_VIRTUAL_PAGE=102]="NG_VIRTUAL_PAGE"
})(b||(b={}));
(function(c){c=c.events||(c.events={});
c.w={};
c.w[100]={guid:"string",url:"string",parentGUID:"string",parentUrl:"string",parentType:"number",timestamp:"number"};
c.w[3]={resTiming:"object"};
c.w[102]={digestCount:"number"};
c.w[2]={method:"string",parentPhase:"string",parentPhaseId:"number",error:"object",parameter:"object",xhrStatus:"number"};
c.w[101]={allResponseHeaders:"string"};
c.w[4]={msg:"string",line:"number",stack:"string"}
})(b||(b={}));
(function(d){var c=function(){function f(){this.D={}
}f.prototype.mark=function(h,g){e.mark.apply(this,arguments)
};
f.prototype.getTiming=function(g){return(g=this.getEntryByName(g))&&g.startTime
};
f.prototype.measure=function(i,g,j){e.measure.apply(this,arguments)
};
f.prototype.getEntryByName=function(g){return e.getEntryByName.call(this,g)
};
f.La=function(g){return e.La(g)
};
return f
}();
d.PerformanceTracker=c;
var e;
(function(f){var k=d.utils.hasOwnPropertyDefined,j=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance,g=d.utils.isObject(j)&&d.utils.isObject(j.timing)&&d.utils.isNumber(j.timing.navigationStart)?j.timing.navigationStart:window["adrum-start-time"],i=d.utils.now;
f.mark=function(h,l){this.D[h]={name:h,entryType:"mark",startTime:d.utils.isDefined(l)?l:i(),duration:0}
};
f.measure=function(h,m,l){k(this.D,m)&&k(this.D,l)?this.D[h]={name:h,entryType:"measure",startTime:m?this.D[m].startTime:g,duration:(l?this.D[l].startTime:i())-(m?this.D[m].startTime:g)}:d.error("M12",k(this.D,m)?l:m)
};
f.getEntryByName=function(h){return this.D[h]||null
};
f.La=function(h){return h+g
}
})(e||(e={}))
})(b||(b={}));
(function(c){(function(d){function g(f,k){f=f||{};
for(var j in f){k[j]=function(){var l=j,e=f[j];
return function(m){var o="_"+l,n=this[o];
if(c.utils.isDefined(m)){if(typeof m===e){this[o]=m
}else{throw o="wrong type of "+l+" value, "+typeof m+" passed in but should be a "+e+".",c.reportAPIMessage(1,o,"ADRUM.report",Array.prototype.slice.call(arguments)),TypeError(o)
}}return n
}
}()
}}function h(j){var f={},l;
for(l in j){var k=j[l];
f[k.start]=!0;
f[k.end]=!0
}return f
}var i=function(){function e(f){this.perf=new c.PerformanceTracker;
"Object"===this.constructor.name&&c.reportAPIMessage(0,c.W);
this.timestamp(c.utils.now());
this.guid(c.utils.generateGUID());
this.url(document.html);
this.nb(f)
}e.prototype.type=function(){return 100
};
e.prototype.nb=function(f){if(c.utils.isObject(f)){for(var k in f){var j=this[k]||this["mark"+c.utils.kc(k)];
j&&c.utils.isFunction(j)&&j.call(this,f[k])
}}};
e.fc=function(j,f,k){return{guid:function(){return j
},url:function(){return f
},type:function(){return k
}}
};
e.prototype.gg=function(){return e.fc(this.parentGUID(),this.parentUrl(),this.parentType())
};
e.prototype.parent=function(f){var j=this.gg();
c.utils.isDefined(f)&&(c.utils.isFunction(f.guid)&&c.utils.isFunction(f.url)&&c.utils.isFunction(f.type)?(this.parentGUID(f.guid()),this.parentUrl(f.url()),this.parentType(f.type())):c.reportAPIMessage(0,"object is not a valid EventIdentifier","EventTracker.parent",Array.prototype.slice.call(arguments)));
return j
};
return e
}();
d.EventTracker=i;
d.aa=g;
d.gc=function(e,l){e=e||{};
var k=h(e),j;
for(j in k){k=c.utils.kc(j),l["mark"+k]=c.utils.fd(function(m,f){this.perf.mark(m,f)
},j),l["get"+k]=c.utils.fd(function(f){return this.perf.getTiming(f)
},j)
}};
g(d.w[100],i.prototype)
})(c.events||(c.events={}))
})(b||(b={}));
var a=this.ef||function(d,c){function g(){this.constructor=d
}for(var h in c){c.hasOwnProperty(h)&&(d[h]=c[h])
}g.prototype=c.prototype;
d.prototype=new g
};
(function(c){(function(d){var e=function(f){function g(h){this.constructor!=g?c.reportAPIMessage(0,c.W,"ADRUM.events.Error",[]):f.call(this,h)
}a(g,f);
g.prototype.type=function(){return 4
};
return g
}(d.EventTracker);
d.Error=e;
d.aa(d.w[4],e.prototype)
})(c.events||(c.events={}))
})(b||(b={}));
(function(c){(function(d){var e=function(f){function g(){f.apply(this,arguments)
}a(g,f);
g.prototype.setUp=function(){var h=this;
f.prototype.setUp.call(this);
c.listenForErrors=function(){h.Vc()
};
this.Vc()
};
g.prototype.pd=function(i,j,l,k){g.errorsSent>=c.conf.Ee?c.log("M13"):(k=c.utils.Kd(k),c.command("reportPageError",new c.events.Error(c.utils.mergeJSON({msg:i+"",url:c.utils.isString(j)?j:void 0,line:c.utils.isNumber(l)?l:void 0,stack:k},this.status))),g.errorsSent++)
};
g.prototype.Vc=function(){var h=this;
c.aop.support(window.onerror)?(window.onerror=c.aop.around(window.onerror,function(i,m,l,k,j){g.Ya||(h.pd(i,m,l,j),g.Ya=!0)
},function(){g.Ya=!1
},"onerror"),c.log("M14")):c.log("M15")
};
g.Ya=!1;
g.errorsSent=0;
return g
}(d.Hb);
d.ErrorMonitor=e;
d.Ra=new d.ErrorMonitor
})(c.monitor||(c.monitor={}))
})(b||(b={}));
(function(d){var c=function(){function e(){this.Fa=[];
this.Ba(e.Ia,0)
}e.prototype.Wg=function(f){this.Ba(e.$b,f)
};
e.prototype.Yg=function(f){this.Ba(e.hc,f)
};
e.prototype.Xg=function(f){this.Ba(e.bc,f)
};
e.prototype.Ba=function(g,f){this.Fa.push({Vg:(new Date).getTime(),Ug:f,gd:g});
this.Bf=g
};
e.prototype.getPhaseName=function(){return this.Bf
};
e.prototype.getPhaseID=function(f){for(var g=0;
g<e.ec.length;
g++){if(e.ec[g]===f){return g
}}return null
};
e.prototype.getPhaseCallbackTime=function(g){for(var f=this.Fa,h=0;
h<f.length;
h++){if(f[h].gd===g){return f[h].Vg
}}return null
};
e.prototype.findPhaseAtNominalTime=function(f){d.assert(0<=f);
for(var h=this.Fa,g=h.length-1;
0<=g;
g--){if(f>=h[g].Ug){return h[g].gd
}}d.error("M16",f,d.utils.If(h));
return e.Ia
};
e.Ia="AFTER_FIRST_BYTE";
e.$b="AFTER_DOM_INTERACTIVE";
e.hc="AT_ONLOAD";
e.bc="AFTER_ONLOAD";
e.ec=[e.Ia,e.$b,e.hc,e.bc];
return e
}();
d.ei=c;
d.lifecycle=new c;
d.lifecycle=d.lifecycle
})(b||(b={}));
(function(c){(function(d){var e=function(g){function f(){g.apply(this,arguments)
}a(f,g);
f.prototype.type=function(){return 0
};
return f
}(d.EventTracker);
d.PageView=e
})(c.events||(c.events={}))
})(b||(b={}));
(function(c){(function(d){var g=c.utils.now,h=function(){function e(){}e.prototype.setUp=function(){var f=document.readyState;
if("loading"===f){c.log("M17"),e.wh(),e.Cd()
}else{var i={timeStamp:g()};
e.X(i);
"interactive"===f?(c.log("M18"),e.Cd()):(c.log("M19"),e.ca(i),e.ed(i))
}};
e.Cd=function(){c.utils.addEventListener(window,"load",e.ca);
c.utils.addEventListener(window,"load",e.ed)
};
e.ed=function(f){e.currentBasePage=new c.events.PageView;
c.lifecycle.Yg(f&&f.timeStamp);
c.utils.lb(function(){var i=g();
c.lifecycle.Xg(i);
c.command("mark","onload",i);
d.PerformanceMonitor.perf&&(d.perfMonitor.wf(),d.perfMonitor.xf());
c.command("reportOnload",e.currentBasePage);
c.utils.loadScriptAsync(c.conf.adrumExtUrl)
});
c.log("M20")
};
e.wh=function(){if(c.utils.isFunction(document.addEventListener)){document.addEventListener("DOMContentLoaded",e.X,!1)
}else{if(c.utils.isObject(document.attachEvent)){document.attachEvent("onreadystatechange",e.X);
var f=null;
try{f=null===window.frameElement?document.documentElement:null
}catch(i){}null!=f&&f.doScroll&&function j(){if(!e.isReady){try{f.doScroll("left")
}catch(k){setTimeout(j,10);
return
}e.ca()
}}()
}else{c.exception("M21")
}}c.log("M22")
};
e.ca=function(f){e.Yc||(c.lifecycle.Wg(f&&f.timeStamp),c.command("mark","onready",g()),e.Yc=!0)
};
e.X=function(f){document.addEventListener?(document.removeEventListener("DOMContentLoaded",e.X,!1),e.ca(f)):"complete"===document.readyState&&(document.detachEvent("onreadystatechange",e.X),e.ca(f))
};
e.isReady=!1;
e.Yc=!1;
return e
}();
d.DOMEventsMonitor=h;
d.Gf=new d.DOMEventsMonitor
})(c.monitor||(c.monitor={}))
})(b||(b={}));
(function(c){(function(d){var e=function(){function f(){this.navTiming=this.resTiming=null
}f.prototype.setUp=function(){f.perf=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance;
c.utils.isObject(f.perf)&&c.utils.isObject(f.perf.timing)||(f.perf=void 0);
this.setResourceTimingBufferSize()
};
f.prototype.setResourceTimingBufferSize=function(){var h=f.perf,g=c.conf.userConf&&c.conf.userConf.resTiming&&c.conf.userConf.resTiming.bufSize;
!c.utils.isNumber(g)||0>=g?c.log("M23"):h&&c.utils.isFunction(h.setResourceTimingBufferSize)?h.setResourceTimingBufferSize(g):c.log("M24setResourceTimingBufferSize is not supported")
};
f.prototype.wf=function(){var k=f.perf;
if(k=k&&k.timing){if(k.navigationStart&&k.navigationStart<=k.loadEventEnd){var j={},g;
for(g in k){var i=k[g];
"number"===typeof i&&(j[g]=i)
}this.navTiming=j
}else{c.log("M26")
}}else{c.log("M25")
}};
f.prototype.xf=function(){this.resTiming=this.Dc()
};
f.prototype.Dc=function(){var h=f.perf,g=[];
h&&h.getEntriesByType&&(h=h.getEntriesByType("resource"))&&h.length&&0<h.length&&h.unshift&&(g=h);
0==g.length&&c.log("M27");
return g
};
f.perf=null;
return f
}();
d.PerformanceMonitor=e;
d.perfMonitor=new d.PerformanceMonitor
})(c.monitor||(c.monitor={}))
})(b||(b={}));
(function(c){(function(d){d.parseURI=function(f){var e=String(f).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(?:\/\/(?:([^:@\/?#]*)(?::([^:@\/?#]*))?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
f=e&&null!=f.match(e[1]+"//");
return e&&{href:e[0]||"",protocol:e[1]||"",ob:f?"//":"",wb:e[2]||"",gb:e[3]||"",host:e[4]||"",hostname:e[5]||"",port:e[6]||"",pathname:e[7]||"",search:e[8]||"",hash:e[9]||""}
};
d.absolutizeURI=function(w,t){function v(g){var e=[];
g.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"../index.html").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(h){"/.."===h?e.pop():e.push(h)
});
return e.join("").replace(/^\//,"/"===g.charAt(0)?"/":"")
}var u,p,i,j,s,f,k,o;
o=t?d.parseURI(t):{};
k=w?d.parseURI(w):{};
o.protocol?(u=o.protocol,p=o.ob,i=o.wb,j=o.gb,s=o.host,f=v(o.pathname),k=o.search):o.host?(u=k.protocol,p=k.ob,i=o.wb,j=o.gb,s=o.host,f=v(o.pathname),k=o.search):(u=k.protocol,p=k.ob,i=k.wb,j=k.gb,s=k.host,o.pathname?("/"===o.pathname.charAt(0)?f=v(o.pathname):(f=k.pathname?k.pathname.slice(0,k.pathname.lastIndexOf("../index.html")+1)+o.pathname:p?"/"+o.pathname:o.pathname,f=v(f)),k=o.search):(f=v(k.pathname),k=o.search||k.search));
return u+p+(i?i+(j?":"+j:"")+"@":"")+s+f+k+(o.hash?o.hash:"")
};
d.getFullyQualifiedUrl=function(l){try{var m,r=document.location.href,o;
c:{for(var i=document.getElementsByTagName("base"),k=0;
k<i.length;
k++){var p=i[k].href;
if(p){o=p;
break c
}}o=void 0
}m=o?d.absolutizeURI(r,o):r;
return d.absolutizeURI(m,l)
}catch(j){return c.exception(j,"M28",l,m),l
}}
})(c.utils||(c.utils={}))
})(b||(b={}));
(function(c){c=c.events||(c.events={});
c=c.b||(c.b={});
c.navigationStart="navigationStart";
c.domainLookupStart="domainLookupStart";
c.domainLookupEnd="domainLookupEnd";
c.connectStart="connectStart";
c.secureConnectionStart="secureConnectionStart";
c.connectEnd="connectEnd";
c.requestStart="requestStart";
c.responseStart="responseStart";
c.responseEnd="responseEnd";
c.domContentLoadedEventStart="domContentLoadedEventStart";
c.loadEventEnd="loadEventEnd";
c.zd="sendTime";
c.xc="firstByteTime";
c.ud="respAvailTime";
c.vd="respProcTime";
c.yb="viewChangeStart";
c.Pd="viewChangeEnd";
c.zb="viewDOMLoaded";
c.Ud="xhrRequestsCompleted";
c.Oi="viewFragmentsLoaded";
c.Pi="viewResourcesLoaded";
c.Ab="virtualPageStart";
c.Sh="virtualPageEnd"
})(b||(b={}));
(function(c){c=c.events||(c.events={});
c.metricSpec={};
c.metricSpec[0]={Nf:{start:c.b.navigationStart,end:c.b.loadEventEnd,name:"PLT"},Uf:{start:c.b.navigationStart,end:c.b.responseStart,name:"FBT"},Ki:{start:c.b.navigationStart,end:c.b.requestStart,name:"SCT"},Li:{start:c.b.secureConnectionStart,end:c.b.connectEnd,name:"SHT"},ri:{start:c.b.domainLookupStart,end:c.b.domainLookupEnd,name:"DLT"},Ni:{start:c.b.connectStart,end:c.b.connectEnd,name:"TCP"},Ii:{start:c.b.requestStart,end:c.b.responseStart,name:"RAT"},ti:{start:c.b.responseStart,end:c.b.loadEventEnd,name:"FET"},vi:{start:c.b.responseStart,end:c.b.domContentLoadedEventStart,name:"DRT"},ii:{start:c.b.responseStart,end:c.b.responseEnd,name:"DDT"},pi:{start:c.b.responseEnd,end:c.b.domContentLoadedEventStart,name:"DPT"},Hi:{start:c.b.domContentLoadedEventStart,end:c.b.loadEventEnd,name:"PRT"},qi:{start:c.b.navigationStart,end:c.b.domContentLoadedEventStart,name:"DOM"}};
c.metricSpec[2]={Uf:{start:c.b.zd,end:c.b.xc,name:"FBT"},ui:{start:c.b.xc,end:c.b.ud,name:"DDT"},hi:{start:c.b.ud,end:c.b.vd,name:"DPT"},Nf:{start:c.b.zd,end:c.b.vd,name:"PLT"}};
c.metricSpec[3]={Bi:{start:c.b.Ab,end:c.b.Sh,name:"PLT"},ni:{start:c.b.yb,end:c.b.Pd,name:"DDT"},yi:{start:c.b.yb,end:c.b.zb,name:"DRT"},Zh:{start:c.b.Pd,end:c.b.zb,name:"DPT"},$h:{start:c.b.yb,end:c.b.zb,name:"DOM"},Gi:{start:"viewChangeEnd",end:"xhrRequestsCompleted",name:null},zi:{start:"viewChangeEnd",end:"viewPartialsLoaded",name:null},xi:{start:"viewPartialsLoaded",end:"viewFragmentsLoaded",name:null},Ai:{start:"viewPartialsLoaded",end:"viewResourcesLoaded",name:null}};
c.metricSpec[102]=c.metricSpec[3]
})(b||(b={}));
(function(c){(function(d){var e=function(f){function g(h){this.constructor!=g&&this.constructor!=d.AdrumAjax?c.reportAPIMessage(0,c.W,"ADRUM.events.Ajax",[]):f.call(this,h)
}a(g,f);
g.prototype.type=function(){return 2
};
return g
}(d.EventTracker);
d.Ajax=e;
d.aa(d.w[2],e.prototype);
d.gc(d.metricSpec[2],e.prototype)
})(c.events||(c.events={}))
})(b||(b={}));
(function(c){(function(d){var e=function(g){function f(h){g.call(this,h)
}a(f,g);
f.prototype.type=function(){return 2
};
return f
}(d.Ajax);
d.AdrumAjax=e;
d.aa(d.w[101],e.prototype)
})(c.events||(c.events={}))
})(b||(b={}));
(function(c){(function(z){var v=c.utils.isObject,w=c.utils.isDefined,y=c.utils.map,x=c.utils.reduce,t=c.utils.filter,j=c.utils.Vh,k=c.utils.isString,u=c.utils.Ef,i=c.utils.vf,o=c.utils.isFunction,p=c.utils.mergeJSON,A=function(d){function e(){d.call(this);
this.conf=null;
this.qb=!1;
this.Ja=0;
!0===window["adrum-xhr-disable"]?c.log("M29"):window.XMLHttpRequest?(this.conf={exclude:[{urls:[{pattern:c.conf.beaconUrlHttp+c.conf.corsEndpointPath},{pattern:c.conf.beaconUrlHttps+c.conf.corsEndpointPath}]}],include:[],maxPerPageView:e.Fb},e.md(this.conf,c.conf.userConf&&c.conf.userConf.xhr),(this.g=window.XMLHttpRequest.prototype)?"open" in this.g&&"send" in this.g?(this.qb=c.aop.support(this.g.open)&&c.aop.support(this.g.send))||c.log("M33"):c.log("M32"):c.log("M31")):c.log("M30")
}a(e,d);
e.md=function(f,m){var l=e.Fb;
if(m){var g=m.maxPerPageView;
c.utils.isNumber(g)&&0<g?l=g:c.reportAPIMessage(4,"value is not valid; don't limit xhr","xhr.maxPerPageView",[g])
}f.maxPerPageView=l;
f.exclude=e.xb(e.Od,"exclude",f,m);
f.include=e.xb(e.Od,"include",f,m);
f.parameter=e.xb(e.Qh,"parameter",m)
};
e.xb=function(g,f){for(var l=[],h=2;
h<arguments.length;
h++){l[h-2]=arguments[h]
}return u(y(t(i(y(u(l),function(m){return j(m[f])
})),e.Dg(f)),g))
};
e.Od=function(g){var f=e.kd(g);
g=e.ld(g);
return f||g
};
e.Dg=function(f){return function(g){return v(g)||c.reportAPIMessage(2,"Filter object must be an object","xhr."+f,[g])
}
};
e.ld=function(g){var f=g.urls;
if(f&&0<f.length&&(g.urls=e.zf(f),0<g.urls.length)){return g
}};
e.kd=function(f){var g=f.method;
if(w(g)){if(k(g)){return f
}c.error("M34")
}};
e.Qh=function(g){var f=e.ld(g);
e.kd(g);
return e.jh(g)&&f
};
e.jh=function(f){if(o(f.getFromBody)){return f
}c.error("M35")
};
e.zf=function(f){for(var n=[],m=0;
m<f.length;
m++){var g=f[m].pattern;
if("string"===typeof g){try{n.push(new RegExp(g))
}catch(l){c.exception(l,"Parse regex pattern failed.")
}}else{c.error("xhr filter pattern should be a string")
}}return n
};
e.Dd=function(g,f,l){var h=l&&l.include;
l=l&&l.exclude;
return h&&0<h.length&&!e.Sc(f,g,h)||l&&0<l.length&&e.Sc(f,g,l)
};
e.uc=function(f){var m=f.message||f.description,l=f.fileName||f.filename,g=f.lineNumber;
c.utils.isString(f.description)&&0<=f.description.indexOf("Access is denied.")&&(m+=": maybe you have CORS XHR error in IE");
c.monitor.Ra.pd(m,l,g,f)
};
e.prototype.setUp=function(){if(this.qb){c.log("M36");
c.xhrConstructor=window.XMLHttpRequest;
c.xhrOpen=this.xhrOpen=this.g.open;
c.xhrSend=this.xhrSend=this.g.send;
var f=this;
this.g.open=c.aop.around(this.g.open,function(){e.Fg(this)&&(4===this.readyState?(c.log("M37"),e.Of(this._adrumAjaxT),e.a(this,this._adrumAjaxT)):c.log("M38"+this._adrumAjaxT.url()+"' is reported."));
var h=1<=arguments.length?String(arguments[0]):"",g=2<=arguments.length?String(arguments[1]):"",g=c.utils.getFullyQualifiedUrl(g);
f.Ja>=f.conf.maxPerPageView||e.Dd(g,h,f.conf)||(this._adrumAjaxT=new c.events.AdrumAjax(c.utils.mergeJSON({method:h,url:g},f.status)))
},null,"XHR.open",e.uc);
this.g.send=c.aop.around(this.g.send,function(C){var s=this,g=this._adrumAjaxT;
if(g&&!(++f.Ja>f.conf.maxPerPageView)){var r=c.utils.now(),m=g.getSendTime();
c.assert(null===m,"M39");
g.timestamp(r);
g.markSendTime(m||r);
g.parentPhase(c.lifecycle.getPhaseName());
e.Gg(g.url())?s.setRequestHeader("ADRUM","isAjax:true"):c.log("M40",document.location.href,g.url());
C=e.fg(g.url(),f.conf.parameter,C);
g.parameter(C);
var l=0,B=function(){if(4==s.readyState){c.log("M41"),f.Ga(s)
}else{var q=null;
try{q=s.onreadystatechange
}catch(n){c.log("M42",n);
f.Ga(s);
return
}l++;
q?c.aop.support(q)?(s.onreadystatechange=f.pc(q,s,"XHR.onReadyStateChange"),c.log("M43",l)):(c.log("M44"),f.Ga(s)):l<e.cf?c.utils.lb(B):(c.log("M45"),f.Ga(s))
}};
B()
}},null,"XHR.send",e.uc);
"addEventListener" in this.g&&"removeEventListener" in this.g&&c.aop.support(this.g.addEventListener)&&c.aop.support(this.g.removeEventListener)?(this.g.addEventListener=c.aop.around(this.g.addEventListener,this.Af(),null,"XHR.addEventListener"),this.g.removeEventListener=c.aop.around(this.g.removeEventListener,function(g,l){if(this._adrumAjaxT){var h=Array.prototype.slice.call(arguments);
l.__adrumInterceptor?(h[1]=l.__adrumInterceptor,c.log("M46")):c.log("M47");
return h
}},null,"XHR.removeEventListener")):c.log("M48");
c.log("M49")
}};
e.prototype.sd=function(){this.Ja=0
};
e.Zc=function(g,f){for(var n=!1,m=0;
m<f.length;
m++){var l=f[m];
if(l&&l.test(g)){n=!0;
break
}}return n
};
e.Sc=function(g,f,q){var n=!1;
if(f&&q){for(var l=0;
l<q.length;
l++){var m=q[l];
if(!(m.method&&g!==m.method||m.urls&&!e.Zc(f,m.urls))){n=!0;
break
}}}return n
};
e.gh=function(g,f,h){return(f||g)===(h||g)
};
e.Gg=function(g){var f=document.createElement("a");
f.href=g;
g=document.location;
var h=g.protocol;
return f.protocol===h&&f.hostname===g.hostname&&e.gh(e.Df[h],f.port,g.port)
};
e.fg=function(g,f,h){if(f&&(f=t(y(t(f,function(l){return e.Zc(g,l.urls)
}),function(l){return l.getFromBody(h)
}),v),0<f.length)){return x(f,p,{})
}};
e.Ic=function(f){var h=f._adrumAjaxT;
if(h){var g=(new Date).getTime();
2==f.readyState?h.markFirstByteTime(h.getFirstByteTime()||g):4==f.readyState&&(c.assert(null===h.getRespAvailTime(),"M50"),h.markRespAvailTime(h.getRespAvailTime()||g),h.markFirstByteTime(h.getFirstByteTime()||g))
}};
e.prototype.pc=function(f,h,g){return e.Xh(f,function(){e.Ic(this)
},function(){var l=h._adrumAjaxT;
if(l&&4==h.readyState){var m=(new Date).getTime();
c.assert(null===l.getRespProcTime(),"M51");
l.markRespProcTime(l.getRespProcTime()||m);
e.a(h,l)
}},g)
};
e.Fg=function(f){return c.utils.isDefined(f._adrumAjaxT)&&c.utils.isString(f._adrumAjaxT._url)
};
e.Of=function(g){var f=(new Date).getTime();
g.markRespAvailTime(g.getRespAvailTime()||f);
g.markFirstByteTime(g.getFirstByteTime()||f);
g.markRespProcTime(g.getRespProcTime()||f)
};
e.a=function(f,n){var m=f.status,g;
n.xhrStatus(m);
n.allResponseHeaders(f.getAllResponseHeaders());
if(400<=m){try{k(f.responseText)&&(g=f.responseText)
}catch(l){k(f.responseType)&&(g=f.responseType)
}n.error({status:m,msg:g})
}c.command("reportXhr",n)
};
e.prototype.Ga=function(f){if(f._adrumAjaxT){var h=(new Date).getTime()+30000,g=function(){e.Ic(f);
var l=f._adrumAjaxT;
if(l){var m=(new Date).getTime();
4==f.readyState?(c.assert(null===l.getRespProcTime(),"M52"),l.markRespProcTime(l.getRespProcTime()||m),c.log("M53"),e.a(f,l),delete f._adrumAjaxT):m<h?setTimeout(g,e.Gb):(delete f._adrumAjaxT,c.log("M54"))
}};
g()
}};
e.Xh=function(f,n,m,g){var l=f;
f&&"object"===typeof f&&"toString" in f&&"[xpconnect wrapped nsIDOMEventListener]"===f.toString()&&"handleEvent" in f&&(l=function(){f.handleEvent.apply(this,Array.prototype.slice.call(arguments))
});
return c.aop.around(l,n,m,g)
};
e.prototype.Af=function(){for(var f=0;
f<arguments.length;
f++){}var g=this;
return function(l,q){if(("load"===l||"error"===l)&&q&&this._adrumAjaxT){var m;
m=q;
if(m.__adrumInterceptor){m=m.__adrumInterceptor
}else{if(c.aop.support(m)){var n=g.pc(m,this,"XHR.invokeEventListener");
m=m.__adrumInterceptor=n
}else{m=null
}}if(m){return n=Array.prototype.slice.call(arguments),n[1]=m,c.log("M55"),n
}c.log("M56",l,q)
}}
};
e.cf=5;
e.Gb=50;
e.Fb=50;
e.Df={"http:":"80","https:":"443"};
return e
}(z.Hb);
z.na=A;
z.ia=new z.na
})(c.monitor||(c.monitor={}))
})(b||(b={}));
(function(c){(function(g){function h(l,d){var p=[],o=/^\s*(ADRUM_BT\w*)=(.*)\s*$/i.exec(l);
if(o){var n=o[1],o=o[2].replace(/^"|"$/g,""),o=decodeURIComponent(o).split("|"),m=o[0].split(":");
if("R"===m[0]&&Number(m[1])===d){for(j(n),n=1;
n<o.length;
n++){p.push(o[n])
}}}return p
}function i(l,d){var p=/^\s*(ADRUM_(\d+)_(\d+)_(\d+))=(.*)\s*$/i.exec(l);
if(p){var o=p[1],n=p[4],m=p[5];
if(Number(p[3])===d){return j(o),{index:Number(n),value:m}
}}return null
}function k(d){var e=/^\s*ADRUM=s=([\d]+)&r=(.*)\s*/.exec(d);
if(e){c.log("M59",d);
if(3===e.length){return j("ADRUM"),{startTime:Number(e[1]),startPage:e[2]}
}c.error("M60",d);
return null
}}function j(d){c.log("M58",d);
var e=new Date;
e.setTime(e.getTime()-1000);
document.cookie=d+"=;Expires="+e.toUTCString()
}g.startTimeCookie=null;
g.cookieMetadataChunks=null;
g.sc=function(v,u){c.log("M57");
for(var t=u?u.length:0,n=[],p=v.split(";"),e=0;
e<p.length;
e++){var f=p[e],o=i(f,t);
o?n.push(o):(f=k(f),null!=f&&(g.startTimeCookie=f))
}Array.prototype.sort.call(n,function(l,d){return l.index-d.index
});
f=[];
for(e=0;
e<n.length;
e++){f.push(n[e].value)
}for(e=0;
e<p.length;
e++){(n=h(p[e],t))&&0<n.length&&(f=f.concat(n))
}g.cookieMetadataChunks=f
};
c.correlation.eck=g.sc
})(c.correlation||(c.correlation={}))
})(b||(b={}));
(function(c){c.report=function(d){c.utils.isObject(d)&&c.utils.isFunction(d.type)?-1==[0,2,3,4].indexOf(d.type())?c.reportAPIMessage(0,d.type()+"is not a valid external event type","ADRUM.report",Array.prototype.slice.call(arguments)):c.utils.lb(function(){c.command("reportEvent",d)
}):c.reportAPIMessage(1,"","ADRUM.report",Array.prototype.slice.call(arguments))
}
})(b||(b={}));
(function(c){"APP_KEY_NOT_SET"===c.conf.appKey&&"undefined"!==typeof console&&"undefined"!==typeof console.log&&console.log("AppDynamics EUM cloud application key missing. Please specify window['adrum-app-key']");
c.correlation.sc(document.cookie,document.referrer);
c.command("mark","firstbyte",window["adrum-start-time"]);
c.monitor.Bd(c.monitor.Ra,c.monitor.Gf,c.monitor.perfMonitor,c.monitor.ia)
})(b||(b={}));
(function(c){c=c.ng||(c.ng={});
c=c.c||(c.c={});
c.Wc="locationChangeStart";
c.Og="locationChangeSuccess";
c.wd="routeChangeStart";
c.yd="routeChangeSuccess";
c.Fd="stateChangeStart";
c.Gd="stateChangeSuccess";
c.Qd="viewContentLoaded";
c.pg="includeContentRequested";
c.og="includeContentLoaded";
c.qc="digest";
c.Di="outstandingRequestsComplete";
c.jc="beforeNgXhrRequested";
c.ac="afterNgXhrRequested";
c.Ci="ngXhrLoaded";
c.mc="$$completeOutstandingRequest"
})(b||(b={}));
(function(c){(function(d){function g(k,q,p,o,n,l){if(q){try{return q.apply(k,[p,o,n].concat(l))
}catch(j){return k.error(p,o,n,l,d.Error.qe,"an exception occurred in a caller-provided callback function",j)
}}}function h(e,f){return function(){var n=this.current,m=f[n]||f[d.ma]||n,j=Array.prototype.slice.call(arguments);
if(this.tf(e)){return this.error(e,n,m,j,d.Error.re,"event "+e+" inappropriate in current state "+this.current)
}if(!1===g(this,this["onbefore"+e],e,n,m,j)){return d.la.Cb
}m===d.ma&&(m=n);
if(n===m){return g(this,this["onafter"+e]||this["on"+e],e,n,m,j),d.la.Pe
}var l=this;
this.transition=function(){l.transition=null;
l.current=m;
g(l,l["onenter"+m]||l["on"+m],e,n,m,j);
g(l,l["onafter"+e]||l["on"+e],e,n,m,j);
return d.la.Xe
};
if(!1===g(this,this["onleave"+n],e,n,m,j)){return this.transition=null,d.la.Cb
}if(this.transition){return this.transition()
}}
}var i=c.utils.hasOwnPropertyDefined;
d.VERSION="2.3.5";
d.la={Xe:1,Pe:2,Cb:3,ci:4};
d.Error={re:100,di:200,qe:300};
d.ma="*";
d.create=function(x,t){function w(f){var l=f.from instanceof Array?f.from:f.from?[f.from]:[d.ma];
o[f.name]=o[f.name]||{};
for(var k=0;
k<l.length;
k++){z[l[k]]=z[l[k]]||[],z[l[k]].push(f.name),o[f.name][l[k]]=f.to||l[k]
}}var v="string"==typeof x.initial?{state:x.initial}:x.initial,q=t||x.target||{},e=x.events||[],n=x.callbacks||{},o={},z={};
v&&(v.event=v.event||"startup",w({name:v.event,from:"none",to:v.state}));
for(var y=0;
y<e.length;
y++){w(e[y])
}for(var j in o){i(o,j)&&(q[j]=h(j,o[j]))
}for(j in n){i(n,j)&&(q[j]=n[j])
}q.current="none";
q.wi=function(f){return f instanceof Array?0<=f.indexOf(this.current):this.current===f
};
q.sf=function(f){return !this.transition&&(i(o[f],this.current)||i(o[f],d.ma))
};
q.tf=function(f){return !this.sf(f)
};
q.Fa=function(){return z[this.current]
};
q.error=x.error||function(l,k,u,s,m,r,p){throw p||r
};
if(v&&!v.defer){q[v.event]()
}return q
}
})(c.Vb||(c.Vb={}))
})(b||(b={}));
(function(c){(function(d){var e=function(f){function g(h){this.constructor!=c.ng.NgVPageView&&this.constructor!=g?c.reportAPIMessage(0,c.W,"ADRUM.events.VPageView",[]):(f.call(this,h),this.perf=new c.PerformanceTracker,this.start(),c.monitor.ia.sd())
}a(g,f);
g.prototype.type=function(){return 3
};
g.prototype.bg=function(){return d.EventTracker.fc(this.guid(),this.url(),this.type())
};
g.prototype.Ed=function(h){var i=this.bg();
h.set("parent",i);
c.log("M61",i.guid(),i.url())
};
g.prototype.startCorrelatingXhrs=function(){c.log("M62");
this.Ed(c.monitor.ia)
};
g.prototype.stopCorrelatingXhrs=function(){c.monitor.ia.set("parent",null);
c.log("M63")
};
g.prototype.zh=function(){c.log("M64");
this.Ed(c.monitor.Ra)
};
g.prototype.start=function(){this.markVirtualPageStart();
this.startCorrelatingXhrs()
};
g.prototype.end=function(){this.markVirtualPageEnd();
this.stopCorrelatingXhrs()
};
return g
}(d.EventTracker);
d.VPageView=e;
d.aa(d.w[3],e.prototype);
d.gc(d.metricSpec[3],e.prototype)
})(c.events||(c.events={}))
})(b||(b={}));
(function(d){var c=d.ng||(d.ng={}),c=c.conf||(c.conf={});
c.disabled=d.conf.userConf&&d.conf.userConf.spa&&d.conf.userConf.spa.angular&&d.conf.userConf.spa.angular.disable;
c.distinguishVPwithItsTemplateUrl=d.conf.userConf&&d.conf.userConf.spa&&d.conf.userConf.spa.angular&&!0===d.conf.userConf.spa.angular.distinguishVPwithItsTemplateUrl?!0:!1;
c.xhr={};
c.metrics={includeResTimingInEndUserResponseTiming:!0};
d.conf.userConf&&d.conf.userConf.spa&&d.conf.userConf.spa.angular&&d.conf.userConf.spa.angular.vp&&(d.conf.userConf.spa.angular.vp.xhr&&d.monitor.na.md(c.xhr,d.conf.userConf.spa.angular.vp.xhr),d.conf.userConf.spa.angular.vp.metrics&&d.utils.mergeJSON(c.metrics,d.conf.userConf.spa.angular.vp.metrics))
})(b||(b={}));
(function(c){(function(d){var e=function(f){function g(h){f.call(this,h);
this.Qc=!0;
this.da={};
this.V=0;
this.constructor!=g?c.reportAPIMessage(0,c.W,"ADRUM.events.Ajax",[]):this.stopCorrelatingXhrs()
}a(g,f);
g.prototype.type=function(){return 3
};
g.prototype.Ab=function(){this.markViewChangeStart();
this.markVirtualPageStart(this.getViewChangeStart());
this.timestamp(this.getViewChangeStart())
};
g.prototype.qg=function(){this.digestCount(this.digestCount()+1)
};
g.prototype.rg=function(){this.V++;
c.log("increasing xhr count "+this.V+" pending xhr requests")
};
g.prototype.Cf=function(){this.V--;
c.log("decreasing xhr count "+this.V+" pending xhr requests")
};
g.prototype.kg=function(){var h=this.perf.getEntryByName(c.events.b.Ud);
c.log("xhrCount "+this.V+" xhrReuqestCompleted "+h);
return 0<this.V
};
g.prototype.pf=function(){var j={Ea:0},i=document.querySelectorAll("ng-view, [ng-view], .ng-view, [ui-view]");
if(i&&0<i.length){for(var o in g.td){for(var n=0;
n<i.length;
n++){var l=angular.element(i[n]).find(o);
if(0<l.length){for(var k=0;
k<l.length;
k++){var h=l[k][g.td[o].sb];
(h=h?decodeURIComponent(h):null)&&!j[h]&&(j[h]=o,j.Ea++)
}}}}}this.da=j
};
g.prototype.of=function(h){return !!this.da[decodeURIComponent(h.name)]
};
g.prototype.qf=function(){var h=[],i=this;
0<this.da.Ea&&(h=c.monitor.perfMonitor.Dc().filter(function(j){return i.of(j)
}));
this.resTiming(h)
};
g.Rf=function(l){for(var i=[],k=0;
k<l.length;
k++){var j=l[k];
2!==l[k].eventType&&101!==l[k].eventType||c.monitor.na.Dd(j.eventUrl,j.method,d.conf.xhr)||i.push(l[k])
}return i
};
g.cg=function(i){var h,k,j=-1;
h=0;
for(k=i.length;
h<k;
h++){j=Math.max(j,i[h].timestamp+i[h].metrics.PLT)
}return j
};
g.prototype.jf=function(){if(d.conf.xhr){var i=g.Rf(c.channel.getEventsWithParentGUID(this.guid())),i=g.cg(i);
if(0<i){var h=this.perf.getEntryByName(c.events.b.Ud);
this.markXhrRequestsCompleted(Math.min(h&&h.startTime||Number.MAX_VALUE,i))
}}};
g.prototype.adjustTimings=function(){this.jf();
var i=this.getViewDOMLoaded(),h=this.getXhrRequestsCompleted(),i=Math.max(i,h);
d.conf.metrics.includeResTimingInEndUserResponseTiming&&(this.hf(),h=this.getViewResourcesLoaded(),h=Math.max(i,h),c.log("adjust this.end from %s to %s",i,h),i=h);
this.markVirtualPageEnd(i)
};
g.prototype.hf=function(){if(0<this.da.Ea){this.qf();
var h=this.resTiming();
if(h&&h.length>=this.da.Ea){for(var j=[],i=0;
i<h.length;
i++){j.push(h[i].responseEnd)
}h=Math.max.apply(Math,j);
this.markViewResourcesLoaded(c.PerformanceTracker.La(h))
}}};
g.prototype.identifier=function(h){var i=this.Sd;
c.utils.isDefined(h)&&(this.Sd=g.Pf(h),this.url(this.Sd.html));
return i
};
g.Pf=function(h){var i={};
h&&h.j?(i.j={eb:""},c.utils.mergeJSON(i.j,{eb:h.j.originalPath,ea:h.j.template,fa:h.j.templateUrl})):h&&h.state&&(i.state={url:""},c.utils.mergeJSON(i.state,{url:h.state.url,name:h.state.name,ea:h.state.template,fa:h.state.templateUrl}));
return i
};
g.td={img:{sb:"src"},script:{sb:"src"},link:{sb:"href"}};
return g
}(c.events.VPageView);
d.NgVPageView=e;
c.events.aa(c.events.w[102],e.prototype)
})(c.ng||(c.ng={}))
})(b||(b={}));
(function(c){(function(d){var e=function(){function f(){this.h=new d.NgVPageView
}f.prototype.qh=function(){var g=this;
d.conf.metrics.includeResTimingInEndUserResponseTiming?(c.log("M65"),setTimeout(function(){g.hb()
},f.Ze)):setTimeout(function(){g.hb()
},f.$e)
};
f.prototype.hb=function(){c.log("M66");
var g=this.h;
g.parent(c.monitor.DOMEventsMonitor.currentBasePage);
c.command("call",function(){g.adjustTimings();
c.reporter.reportEvent(g)
})
};
f.prototype.vh=function(g){this.h=g
};
f.Ze=5000;
f.$e=2*c.monitor.na.Gb;
return f
}();
d.VirtualPageStateMachine=e;
c.Vb.create({events:[{name:"start",from:"none",to:"ChangeView"},{name:"viewLoaded",from:"ChangeView",to:"XhrPending"},{name:"xhrCompleted",from:"XhrPending",to:"End"},{name:"abort",from:"*",to:"none"},{name:"init",from:"*",to:"none"},{name:"locChange",from:"*",to:"*"},{name:"beforeXhrReq",from:"*",to:"*"},{name:"afterXhrReq",from:"*",to:"*"}],error:function(f){c.log("M67"+f)
},callbacks:{onChangeView:function(){this.h.Ab();
this.h.zh()
},onviewLoaded:function(){this.h.markViewDOMLoaded()
},onXhrPending:function(){this.h.Qc&&this.xhrCompleted()
},onleaveXhrPending:function(g,f,h){if("abort"===g){return this.hb(),!0
}if("xhrCompleted"===g&&"End"===h){if(this.h.kg()){return !1
}this.h.markXhrRequestsCompleted();
return !0
}},onEnd:function(){this.h.pf();
this.qh()
},oninit:function(f,j,i,g){this.vh(g);
c.monitor.ia.sd()
},onlocChange:function(g,f,j,i){this.h.identifier.url=i;
this.h.nb({url:i})
},onbeforeXhrReq:function(g,l,k,i){var j=this.h;
j.Qc=!1;
c.log("M68",i&&i[1]||"",j.guid());
j.rg();
j.startCorrelatingXhrs();
i[3]&&(i[3]=c.aop.before(i[3],function(f,m,h){c.log("M69");
j.Cf();
h&&(f=c.utils.fh(h)["content-type"])&&0<=f.indexOf("text/html")&&j.markViewFragmentsLoaded()
}));
return i
},onafterXhrReq:function(){this.h.stopCorrelatingXhrs()
}}},e.prototype)
})(c.ng||(c.ng={}))
})(b||(b={}));
(function(c){(function(d){var e=function(){function f(){this.n=new d.VirtualPageStateMachine;
this.distinguishVPwithItsTemplateUrl=c.ng.conf.distinguishVPwithItsTemplateUrl
}f.prototype.k=function(k,j){c.log("M70",k);
switch(k){case d.c.wd:case d.c.Fd:this.n.start();
var g=j.next.url||document.URL,i=new d.NgVPageView({url:g,identifier:j.next});
this.distinguishVPwithItsTemplateUrl&&f.zg(this.n.h,i)?this.n.h.nb({url:g,identifier:j.next}):this.Fh(i);
break;
case d.c.yd:case d.c.Gd:this.n.h.markViewChangeEnd();
break;
case d.c.Qd:this.n.viewLoaded();
break;
case d.c.jc:this.n.beforeXhrReq(j);
break;
case d.c.ac:this.n.afterXhrReq();
break;
case d.c.mc:this.n.xhrCompleted();
break;
case d.c.Wc:this.n.locChange(j.next.url);
break;
case d.c.qc:this.n.h.qg()
}};
f.prototype.Fh=function(g){this.n.abort();
this.n.init(g);
this.n.start()
};
f.zg=function(h,l){var k=h.identifier(),j=l.identifier(),i=!1;
return i=!c.utils.isDefined(k)&&!c.utils.isDefined(j)||k===j?!0:c.utils.isDefined(k)&&c.utils.isDefined(j)?k.state||j.state?c.utils.isDefined(k.state)&&c.utils.isDefined(j.state)?k.state.name===j.state.name&&k.state.ea===j.state.ea&&k.state.fa===j.state.fa&&k.state.url===j.state.url:!1:k.j&&j.j?k.j.eb===j.j.eb&&k.j.ea===j.j.ea&&k.j.fa===j.j.fa:k.url===j.url:!1
};
return f
}();
d.af=e
})(c.ng||(c.ng={}))
})(b||(b={}));
(function(c){(function(d){var g=c.utils.addEventListener,h=function(){function e(){this.l=new d.af;
this.Oc=!1
}e.prototype.setUp=function(){function f(j){return function(){c.log(j);
i.init()
}
}var i=this;
f("M71")();
g(document,"DOMContentLoaded",f("M72"));
g(window,"load",f("M73"))
};
e.prototype.init=function(){if("undefined"!=typeof angular&&!this.Oc){this.Oc=!0;
c.log("M74");
var f=this,i=angular.module("ng");
i.config(["$provide",function(j){f.wg(j);
f.vg(j)
}]);
i.run(["$browser",function(j){f.ug(j)
}]);
c.log("M75")
}};
e.prototype.vg=function(k){var j=c.aop,i=this;
k.decorator("$httpBackend",["$delegate",function(f){return f=j.around(f,function(){var l=Array.prototype.slice.call(arguments);
i.l.k(d.c.jc,l);
return l
},function(){i.l.k(d.c.ac)
},"ng.httpBackend")
}])
};
e.prototype.wg=function(k){var j=c.aop,i=this;
k.decorator("$rootScope",["$delegate",function(f){f.$digest=j.after(f.$digest,function(){i.l.k(d.c.qc)
},"ngevents.digest");
f.$on("$locationChangeStart",function(l,o){var m={url:o},n=l&&l.ba&&l.ba.$state&&l.ba.$state.current;
n&&(m.state=n);
i.l.k(d.c.Wc,{next:m})
});
f.$on("$locationChangeSuccess",function(){i.l.k(d.c.Og)
});
f.$on("$routeChangeStart",function(l,o){var m={url:location.href},n=o&&o.$$route;
n&&(m.j=n);
i.l.k(d.c.wd,{next:m})
});
f.$on("$routeChangeSuccess",function(){i.l.k(d.c.yd)
});
f.$on("$stateChangeStart",function(l,m){i.l.k(d.c.Fd,{next:{state:m}})
});
f.$on("$stateChangeSuccess",function(){i.l.k(d.c.Gd)
});
f.$on("$viewContentLoaded",function(l){var m={url:location.href};
if(l=l&&l.ba&&l.ba.$state&&l.ba.$state.current){m.state=l
}i.l.k(d.c.Qd,{next:m})
});
f.$on("$includeContentRequested",function(){i.l.k(d.c.pg)
});
f.$on("$includeContentLoaded",function(){i.l.k(d.c.og)
});
return f
}])
};
e.prototype.ug=function(i){var f=this;
i.$$completeOutstandingRequest=c.aop.before(i.$$completeOutstandingRequest,function(){f.l.k(d.c.mc)
})
};
return e
}();
d.Yh=h;
d.ngMonitor=new h
})(c.ng||(c.ng={}))
})(b||(b={}));
(function(d){var c=d.ng||(d.ng={});
c.conf.disabled||d.monitor.Bd(c.ngMonitor)
})(b||(b={}))
}}
})();
var adrumvPageView={};
window["dsp-vp-start"]=window.performance&&window.performance.timing?window.performance.timing.navigationStart:new Date().getTime();
window.ADRUM_utils=(function(){function a(e){var f=window.location.href.split("?")[0]?window.location.href.split("?")[0]:window.location.href;
f=f.replace(/\#/g,"");
f+="#";
f+=e;
if(typeof ADRUM!=="undefined"){adrumvPageView=new ADRUM.events.VPageView({url:f});
adrumvPageView.start();
adrumvPageView.markVirtualPageStart(window["dsp-vp-start"]);
adrumvPageView.markViewChangeStart()
}}function b(){return adrumvPageView
}function d(f){try{if(f&&!f.submitted){window.dccPageRenderTime=(new Date().getTime()-window["dsp-vp-start"]);
f.submitted=true;
c(f)
}}catch(e){}}function c(f){try{if(typeof ADRUM!=="undefined"){f.markViewChangeEnd();
f.markViewDOMLoaded();
f.markXhrRequestsCompleted();
f.end();
ADRUM.report(f)
}}catch(e){}}return{getAdrumvPageView:b,initializeAdrumVirtualPage:a,endAdrumVPMainPage:d}
}());
window.ADRUM_utils.initializeAdrumVirtualPage(document.querySelectorAll("[data-param]")[0].getAttribute("data-param"));