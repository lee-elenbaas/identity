"use strict";

requirejs.config({
	paths: {
		jquery: [
			"http://code.jquery.com/jquery-2.0.3.min",
			"../lib/jquery-2.0.3.min.js"
		],
		knockout: [
			"http://knockoutjs.com/downloads/knockout-3.0.0",
			"../lib/knockout-3.0.0.js"
		],
		"jquery-knockout-plugin": "../../src/jquery-knockout-plugin",
		"identity": "../src/js"
	}
});

requirejs(["identity/host"]);
