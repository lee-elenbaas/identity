requirejs.config({
	baseUrl: "js/lib",
	paths: { // AMD libraries
		identity: "../identity",
		jquery: "jquery-2.0.3"
	},
	shim: { // for non AMD libraries
	}
});

requirejs(["identity/test"]);
