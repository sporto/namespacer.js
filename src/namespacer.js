(function(window) {

	"use strict";

	var namespacer = function (string, obj) {
		var parts = string.split('.');
		var current = null;
		var container = window;

		while(parts.length > 0) {
			current = parts.shift();
			if (parts.length === 0) {
				container[current] = obj || {};
			} else {
				container[current] = container[current] || {};
			}
			container = container[current];
		}
	};

	if(typeof window !== "undefined") {
		window.Namespacer = namespacer;
	}

}(window));