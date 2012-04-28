var eccentric = {
	src: '/flash/eccentric.swf'
	,ratios: [7,1.32,11,1.31,13,1.24,14,1.25,19,1.23,27,1.2,34,1.19,42,1.18,47,1.17,48,1.18,69,1.17,74,1.16,75,1.17,1.16]
	};

	sIFR.activate(eccentric);

	sIFR.replace(eccentric, {
		selector: 'h2, h4'
		,css: {
			'.sIFR-root': { 'font-size': '32px', 'color':'#403c36' }
		},
		tuneHeight:-14, wmode: 'transparent'
	}
);

function addLoadEvent(func) {
	var old_onload = window.onload;

	if(typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			old_onload();
			func();
		}
	}
}

function contactInfo() {
	var list = document.getElementsByTagName("ul");

	for(i=0; i<list.length; i++) {

		var contact = document.createElement("p");
		var text = document.createTextNode("If you have any questions please call us at 845.783.6265");
		contact.appendChild(text);

		var parentDiv = list[i].parentNode;

		insertAfter(contact,list[i]);
	}
}

function insertAfter(newEl, targetEl) {
	var parent = targetEl.parentNode;

	if(parent.last == targetEl) {
		parent.appendChild(newEl);
	} else {
		parent.insertBefore(newEl,targetEl.nextSibling);
	}
}

function setHeight() {
	var copyright = document.getElementById("copyright");

	if(copyright) copyright.style.height = "4.6em";
}

addLoadEvent(contactInfo);
addLoadEvent(setHeight);