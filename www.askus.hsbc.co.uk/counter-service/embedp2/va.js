// Copyright © 2016 Creative Virtual Ltd.
// All rights reserved. Redistribution or re-use of all or part of this code without prior permission is prohibited.

console.log("g1")

cv_fileversion = "{{cv_fileversion}}";
var cvjq,
	vaMinRsrc = "", // add '.min' when in live mode
	CV_RESOURCE_ADDRESS = "//www.askus.hsbc.co.uk/counter-service/embedp2",
	va_srv = 1,
	vainline;

// Config
var vaparam = {
	channel: {
		enabled: true,		// Set to true if a mobile channel is available
		name: 'Root.Mobile'		// Name of a mobile channel
	},
	view: {
		enabled: true,		// Set to true if screen size checking should be performed
		isdesktop: true,	// Is current screen a desktop screen. Set automatically before each request
		threshold: 689		// The screen width at which VA jumps into mobile view.
	},
};

var elem = document.getElementById("virtual-assistant")
elem.innerHTML = '<div class="va-trigger va-closed" role="button" aria-label = "Need help button" tabindex="0">Need help?</div><div class="virtual-assistant-wrapper"></div>';

function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

setAttributes(elem, {'role':'dialog', 'aria-label':'How can we Help'});

function loadVAScript(url, callback) {
	var script = document.createElement("script");
	if(script.readyState) { //IE
		script.onreadystatechange = function() {
			if (script.readyState == "loaded" || script.readyState == "complete") {
				script.onreadystatechange = null;
				callback();
			}
		};
	}
	else { //Others
		script.onload = function () {
			callback();
		};
	}
	script.src = url;
	document.getElementById("virtual-assistant").appendChild(script);
}

// Important, synchronous loading of vascripts
if(window.addEventListener) { // Normal
	window.addEventListener('load', function() {	
		loadVAScript(CV_RESOURCE_ADDRESS + "/js/vendor/jquery/jquery-1.11.3.min.js", function () {
			loadVAScript(CV_RESOURCE_ADDRESS + "/js/vendor/plugins/jquery.xdomainrequest.min.js", function() {
				loadVAScript(CV_RESOURCE_ADDRESS + "/js/vendor/plugins/jquery.hoverflow.min.js", function() {
					cvjq = jQuery.noConflict(true); // custom JQ instance
					//console.log('jquery alias changed to: ' + cvjq.fn.jquery);
					loadVAScript(CV_RESOURCE_ADDRESS + "/js/loader" + vaMinRsrc + ".js", function() {});
				});
			});
		});	
	}, false);
}
else { // IEs
	window.attachEvent('onload', function() {	
		loadVAScript(CV_RESOURCE_ADDRESS + "/js/vendor/jquery/jquery-1.11.3.min.js", function () {
			loadVAScript(CV_RESOURCE_ADDRESS + "/js/vendor/plugins/jquery.xdomainrequest.min.js", function() {
				loadVAScript(CV_RESOURCE_ADDRESS + "/js/vendor/plugins/jquery.hoverflow.min.js", function() {
					cvjq = jQuery.noConflict(true); // custom JQ instance
					//console.log('jquery alias changed to: ' + cvjq.fn.jquery);
					loadVAScript(CV_RESOURCE_ADDRESS + "/js/loader" + vaMinRsrc + ".js", function() {});
				});
			});
		});	
	}, false);
}

// Print functionality without touching the parent page
function printVAConversation(printid) {
	window.frames["va_print_frame"].document.body.innerHTML = document.getElementById(printid).innerHTML;
	window.frames["va_print_frame"].window.focus();
	window.frames["va_print_frame"].window.print();
}
