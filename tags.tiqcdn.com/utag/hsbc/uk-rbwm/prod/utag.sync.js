//tealium universal tag - utag.sync ut4.0.202405150320, Copyright 2024 Tealium.com Inc. All Rights Reserved.
window.HSBC=window.HSBC||{};HSBC.SITE=HSBC.SITE||{};HSBC.PAGE=HSBC.PAGE||{};HSBC.EXT=HSBC.EXT||{};HSBC.LOG=HSBC.LOG||{};HSBC.DCS=HSBC.DCS||{};window.DCSext=window.DCSext||{};window.dcsGetHSBCCookie=window.dcsGetHSBCCookie||function(name){return"";}
window.dcsVar=function(){};window.dcsMultiTrack=function(){};window.dcsMapHSBC=function(){};window.dcsMeta=function(){};window.dcsFunc=function(){};window.dcsTag=function(){};window.TMS=window.TMS||{};var TMS=window.TMS;TMS.call_queue=[];TMS.copy=function(a,b,c){var utagLoaderGvCopy=function(d,e,f){e={};for(f in d){if(d.hasOwnProperty(f)&&typeof d[f]!="function")e[f]=d[f];}
return e}
b={};for(c in utagLoaderGvCopy(a)){if(a[c]instanceof Array){b[c]=a[c].slice(0)}else{b[c]=a[c]}}
return b}
TMS.trackEvent=function(event_name,data){var new_data=TMS.copy(data);TMS.call_queue.push({type:event_name,data:new_data});};TMS.trackView=function(data){var new_data=TMS.copy(data);TMS.call_queue.push({type:"view",data:new_data});};var maskTimeout=3000,syncChangesApplied=false;var cssRuleManager={sheet:(function(){var style=document.createElement("style");style.appendChild(document.createTextNode(""));document.head.appendChild(style);return style.sheet;})(),addCSSRule:function(selector,rules){if("insertRule"in this.sheet){this.sheet.insertRule(selector+"{"+rules+"}",0);}else if("addRule"in this.sheet){this.sheet.addRule(selector,rules,0);}}}
var removeMask=function(){if(syncChangesApplied)return;cssRuleManager.sheet.disabled=true;syncChangesApplied=true;document.getElementsByTagName("body")[0].style.visibility="visible";}
window.optimizely=window.optimizely||[];window.optimizely.push({type:"addListener",filter:{type:"lifecycle",name:"activated"},"handler":removeMask});function getCookie(cname){var name=cname+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1);}
if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}
return"";}
var cookie;var pollInterval;var totalTime=0;cookie=getCookie("CONSENTMGR-UK-RBWM-CG1");if(cookie.indexOf("c6:1")>-1||(cookie.indexOf("c6")===-1&&cookie.indexOf("consent:true")>-1)){try{runOptimizely();}catch(e){console.log(e);}}
else{startPoll();}
function startPoll(){pollInterval=setInterval(checkCookieSet,1000);setTimeout(stopPoll,60000);}
function stopPoll(){clearInterval(pollInterval)}
function checkCookieSet(){cookie=getCookie("CONSENTMGR-UK-RBWM-CG1");if(cookie.indexOf("c6:1")>-1||(cookie.indexOf("c6")===-1&&cookie.indexOf("consent:true")>-1)){stopPoll();runOptimizely()}
totalTime+=1000;if(totalTime>=60000){stopPoll();}}
function runOptimizely(){try{cssRuleManager.addCSSRule('body','visibility:hidden');cssRuleManager.addCSSRule('html.sn_ps_hover body','visibility:visible');setTimeout(removeMask,maskTimeout);var u={};var header=document.getElementsByTagName("head")[0];u.scr=document.createElement("link");u.scr.rel="dns-prefetch";u.scr.href="//cdn.optimizely.com";header.appendChild(u.scr);u.scr=document.createElement("script");u.scr.async=true;u.scr.src="//cdn.optimizely.com/js/20338730854.js";header.appendChild(u.scr);}catch(e){console.log(e);}}