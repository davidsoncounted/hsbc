var accessibilityContent=document.getElementById("accessibility-content").getAttribute("data-acc");
var accessibilityContentOverlay=document.getElementById("accessibility-content").getAttribute("data-acc-overlay");
function toggleMenu(b){var a=document.getElementById("mobile-menu");
a.classList.toggle("open");
if(a.classList.contains("open")){document.getElementById("close-menu-button").focus();
document.getElementById("mobile-menu").removeAttribute("aria-hidden");
document.getElementById("app-root").setAttribute("aria-hidden",true);
document.getElementsByClassName("dspFooter")[0].setAttribute("aria-hidden",true);
document.getElementsByClassName("header-wrapper")[0].setAttribute("aria-hidden",true);
document.getElementById("header-mobile").style.display="none";
if(b){b.preventDefault()
}}else{document.getElementById("header-mobile").style.display="";
document.getElementById("open-menu-button").focus();
document.getElementById("mobile-menu").setAttribute("aria-hidden",true);
document.getElementById("app-root").removeAttribute("aria-hidden");
document.getElementsByClassName("dspFooter")[0].removeAttribute("aria-hidden");
document.getElementsByClassName("header-wrapper")[0].removeAttribute("aria-hidden");
if(b){b.preventDefault()
}}}const width=Math.max(document.documentElement.clientWidth,window.innerWidth||0);
window.addEventListener("click",function(a){if(!(document.getElementById("header-menu").contains(a.target))){$("#header-menu").removeClass("open")
}});
function toggleMenuFromKey(a){if(a.keyCode==32||a.keyCode==13){toggleMainMenu(a)
}}function toggleMainMenu(b){b.stopPropagation();
var a=document.getElementById("header-menu");
a.classList.toggle("open");
if(document.getElementById("header-menu-btn-desktop").getAttribute("aria-expanded")==="false"){document.getElementById("header-menu-btn-desktop").setAttribute("aria-expanded","true")
}else{document.getElementById("header-menu-btn-desktop").setAttribute("aria-expanded","false")
}}document.getElementsByClassName("login-button")[0].setAttribute("data-event-name",document.getElementsByClassName("login-button")[0].getAttribute("data-event-name").toLowerCase());
document.getElementsByClassName("login-button")[0].setAttribute("href",document.getElementsByClassName("login-button")[0].getAttribute("data-rel"));
if(document.getElementsByClassName("login-button").length>1){document.getElementsByClassName("login-button")[1].setAttribute("href",document.getElementsByClassName("login-button")[1].getAttribute("data-rel"));
document.getElementsByClassName("login-button")[1].setAttribute("data-event-name",document.getElementsByClassName("login-button")[1].getAttribute("data-event-name").toLowerCase())
}document.getElementsByClassName("logoff-button")[0].setAttribute("href",document.getElementsByClassName("logoff-button")[0].getAttribute("data-rel"));
document.getElementsByClassName("logoff-button")[0].setAttribute("data-event-name",document.getElementsByClassName("logoff-button")[0].getAttribute("data-event-name").toLowerCase());
if(document.getElementsByClassName("logoff-button").length>1){document.getElementsByClassName("logoff-button")[1].setAttribute("href",document.getElementsByClassName("logoff-button")[1].getAttribute("data-rel"));
document.getElementsByClassName("logoff-button")[1].setAttribute("data-event-name",document.getElementsByClassName("logoff-button")[1].getAttribute("data-event-name").toLowerCase())
}function toggleVisibility(b,c){var a=document.getElementsByClassName(b);
a[0].style.display=c?"flex":"none";
a[1].style.display=c?"flex":"none"
}function headerCtabutton(){console.log("###########################insidectafunction#############");
if(document.cookie.indexOf("cam-level-hint=")>-1){toggleVisibility("login-button",false);
toggleVisibility("logoff-button",true);
document.getElementById("logoLink").setAttribute("href",document.getElementById("logoLink").getAttribute("data-dash-rel"));
document.getElementById("logoLinkMobile").setAttribute("href",document.getElementById("logoLink").getAttribute("data-dash-rel"))
}else{let showLoginButton=document.getElementsByClassName("login-button")[0].getAttribute("data-show-logon-button");
toggleVisibility("logoff-button",false);
if(showLoginButton==true||(typeof(showLoginButton)=="string"&&showLoginButton=="true")){toggleVisibility("login-button",true)
}else{toggleVisibility("login-button",false)
}document.getElementById("logoLink").setAttribute("href",document.getElementById("logoLink").getAttribute("data-home-rel"));
document.getElementById("logoLinkMobile").setAttribute("href",document.getElementById("logoLink").getAttribute("data-home-rel"))
}}headerCtabutton();
document.getElementById("headerMenu").innerHTML=document.getElementById("headerMenu").getAttribute("data-main-header-link-config");
let headerLinkConfig=document.getElementById("submenus").getAttribute("data-header-link-config");
if(!(headerLinkConfig===null||Object.keys(JSON.parse(headerLinkConfig)).length===0)){document.getElementById("header-menu").style.display="flex"
}headerLinkConfig=JSON.parse(headerLinkConfig);
let htmlElHeader="<ul>";
for(let HeaderLabel in headerLinkConfig){htmlElHeader=htmlElHeader+"<li class='item p-a-2x'><a href='"+headerLinkConfig[HeaderLabel]+"' data-event-component='topnav' data-event-name='"+HeaderLabel.toLowerCase()+"' target='_blank'><span role='text'>"+HeaderLabel+"<span class='acc-hidden'>"+accessibilityContent+"</span></span></a></li>"
}htmlElHeader=htmlElHeader+"</ul>";
document.getElementById("submenus").innerHTML=htmlElHeader;
htmlElHeader="<ul>";
for(let HeaderLabel in headerLinkConfig){htmlElHeader=htmlElHeader+"<li class='item p-a-2x'><a href='"+headerLinkConfig[HeaderLabel]+"' data-event-component='topnav' data-event-name='"+HeaderLabel.toLowerCase()+"' target='_blank' aria-label='"+HeaderLabel+","+accessibilityContent+"'><span role='text'>"+HeaderLabel+"</span></a></li>"
}htmlElHeader=htmlElHeader+"</ul>";
document.getElementById("mobileSubmenu").innerHTML=htmlElHeader;
document.getElementById("footer-legal-container").innerHTML=document.getElementById("footer-legal-container").getAttribute("data")||"@Copyright. The HSBC limited 2002-2015. All rights reserved.";
let inlineLinkConfig=JSON.parse(document.getElementById("footer-container").getAttribute("inline-link-config"));
let htmlEl="<ul>";
for(let linkLabel in inlineLinkConfig){if(inlineLinkConfig[linkLabel].indexOf("javascript:")>-1){htmlEl=htmlEl+"<li><a href='"+inlineLinkConfig[linkLabel]+"' data-event-component='footer' data-event-name='"+linkLabel.toLowerCase()+"' class='item m-r-3x'><span role='text'>"+linkLabel+"<span class='acc-hidden'>"+accessibilityContentOverlay+"</span></span></a></li>"
}else{htmlEl=htmlEl+"<li><a href='"+inlineLinkConfig[linkLabel]+"' data-event-component='footer' data-event-name='"+linkLabel.toLowerCase()+"' class='item m-r-3x' target='_blank'><span role='text'>"+linkLabel+"<span class='acc-hidden'>"+accessibilityContent+"</span></span></a></li>"
}}htmlEl=htmlEl+"</ul>";
document.getElementById("footer-bottom-links").innerHTML="<div class='grid footer-desktop p-b-2x'>"+htmlEl+"</div>";
htmlEl="<ul>";
for(let linkLabel in inlineLinkConfig){if(inlineLinkConfig[linkLabel].indexOf("javascript:")>-1){htmlEl=htmlEl+"<li class='item p-h-2x'><a href='"+inlineLinkConfig[linkLabel]+";window.toggleMenu();' data-event-component='footer' data-event-name='"+linkLabel.toLowerCase()+"'aria-label='"+linkLabel+","+accessibilityContentOverlay+"'><span role='text'>"+linkLabel+"</span></a></li>"
}else{htmlEl=htmlEl+"<li class='item p-h-2x'><a href='"+inlineLinkConfig[linkLabel]+"' data-event-component='footer' data-event-name='"+linkLabel.toLowerCase()+"' target='_blank' aria-label='"+linkLabel+","+accessibilityContent+"'><span role='text'>"+linkLabel+"</span></a></li>"
}}htmlEl=htmlEl+"</ul>";
document.getElementById("footer-mobile-bottom-links").innerHTML=htmlEl;
let footerLinkConfig=JSON.parse(document.getElementById("footer-container").getAttribute("footer-link-config"));
htmlEl="<ul>";
for(let linkLabel in footerLinkConfig){htmlEl=htmlEl+"<li><a href='"+footerLinkConfig[linkLabel]["link"]+"' data-event-component='footer' data-event-name='"+footerLinkConfig[linkLabel]["label"].toLowerCase()+"' class='item p-a-2x' target='_blank'><span role='text'><span class='icon footerLinkIcon m-r-1x' aria-hidden='true' data-background-rel='"+footerLinkConfig[linkLabel]["imgPath"]+"'></span>"+footerLinkConfig[linkLabel]["label"]+"<span class='acc-hidden'>"+accessibilityContent+"</span></span></a></li>"
}htmlEl=htmlEl+"</ul>";
document.getElementById("footer-links").innerHTML=htmlEl;
htmlEl="<ul>";
for(let linkLabel in footerLinkConfig){htmlEl=htmlEl+"<li class='item p-h-2x'><a href='"+footerLinkConfig[linkLabel]["link"]+"' data-event-component='footer' data-event-name='"+footerLinkConfig[linkLabel]["label"].toLowerCase()+"' target='_blank' aria-label='"+footerLinkConfig[linkLabel]["label"]+","+accessibilityContent+"'><span role='text'><span class='icon footerLinkIcon m-r-1x' aria-hidden='true' data-background-rel='"+footerLinkConfig[linkLabel]["imgPath"]+"'></span>"+footerLinkConfig[linkLabel]["label"]+"</span></a></li>"
}htmlEl=htmlEl+"</ul>";
document.getElementById("footer-links-mobile").innerHTML=htmlEl;
let icons=document.getElementById("footer-links").getElementsByClassName("footerLinkIcon");
for(let index=0;
index<icons.length;
index++){icons[index].style.backgroundImage="url('"+icons[index].getAttribute("data-background-rel")+"')"
}icons=document.getElementById("footer-links-mobile").getElementsByClassName("footerLinkIcon");
for(let index=0;
index<icons.length;
index++){icons[index].style.backgroundImage="url('"+icons[index].getAttribute("data-background-rel")+"')"
}let loginbtn=document.getElementsByClassName("login-button");
for(let i=0;
i<loginbtn.length;
i++){loginbtn[i].setAttribute("data-event-name",loginbtn[i].getAttribute("data-event-name").toLowerCase())
}let logofbtn=document.getElementsByClassName("logoff-button");
for(let i=0;
i<logofbtn.length;
i++){logofbtn[i].setAttribute("data-event-name",logofbtn[i].getAttribute("data-event-name").toLowerCase())
}let firstFocusableEl=document.getElementById("close-menu-button");
let lastFocusableEl=null;
if(document.getElementById("footer-mobile-bottom-links").lastElementChild){lastFocusableEl=document.getElementById("footer-mobile-bottom-links").lastElementChild
}else{if(document.getElementById("footer-links-mobile").lastElementChild){lastFocusableEl=document.getElementById("footer-links-mobile").lastElementChild
}else{if(window.getComputedStyle(document.getElementById("loginLogoffButton").firstElementChild).display==="none"){lastFocusableEl=document.getElementById("loginLogoffButton").lastElementChild
}else{lastFocusableEl=document.getElementById("loginLogoffButton").firstElementChild
}}}document.addEventListener("keyup",function(a){checkTabPress(a)
},false);
function checkTabPress(b){let KEYCODE_TAB=9;
var a=(b.key==="Tab"||b.keyCode===KEYCODE_TAB);
if(!a){return
}if(b.shiftKey){if(document.activeElement===firstFocusableEl){lastFocusableEl.focus();
b.preventDefault()
}}else{if(document.activeElement===lastFocusableEl){firstFocusableEl.focus();
b.preventDefault()
}}}document.addEventListener("CAM_LEVEL_HINT_REMOVAL",function(a){headerCtabutton()
});