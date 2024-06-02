//tealium universal tag - utag.sync ut4.0.202405080227, Copyright 2024 Tealium.com Inc. All Rights Reserved.
window.HSBC=window.HSBC||{};HSBC.SITE=HSBC.SITE||{};HSBC.PAGE=HSBC.PAGE||{};HSBC.EXT=HSBC.EXT||{};HSBC.LOG=HSBC.LOG||{};HSBC.DCS=HSBC.DCS||{};window.DCSext=window.DCSext||{};window.dcsGetHSBCCookie=window.dcsGetHSBCCookie||function(name){return"";}
window.dcsVar=function(){};window.dcsMultiTrack=function(){};window.dcsMapHSBC=function(){};window.dcsMeta=function(){};window.dcsFunc=function(){};window.dcsTag=function(){};window.TMS=window.TMS||{};var TMS=window.TMS;TMS.call_queue=[];TMS.copy=function(a,b,c){var utagLoaderGvCopy=function(d,e,f){e={};for(f in d){if(d.hasOwnProperty(f)&&typeof d[f]!="function")e[f]=d[f];}
return e}
b={};for(c in utagLoaderGvCopy(a)){if(a[c]instanceof Array){b[c]=a[c].slice(0)}else{b[c]=a[c]}}
return b}
TMS.trackEvent=function(event_name,data){var new_data=TMS.copy(data);TMS.call_queue.push({type:event_name,data:new_data});};TMS.trackView=function(data){var new_data=TMS.copy(data);TMS.call_queue.push({type:"view",data:new_data});};