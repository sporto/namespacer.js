/*!
Namespacer
https://github.com/sporto/namespacer.js
@version 0.5
*/

(function(global) {

	"use strict";

	var namespacer = function (string, obj) {
		var parts = string.split('.');
		var current = null;
		var container = global;

		while(parts.length > 0) {
			current = parts.shift();
			if (parts.length === 0) {
				// if object is given then add that object
				// if there is already something there don't do anything
				// otherwise just create an empty object
				container[current] = obj || container[current] || {};
			} else {
				container[current] = container[current] || {};
			}
			container = container[current];
		}
	};

	if(typeof global !== "undefined") {
		global.Namespacer = namespacer;
	}

}(this));