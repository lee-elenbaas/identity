requirejs.config({
	baseUrl: "js/lib",
	paths: { // AMD libraries
		identity: "../../identity",
		jquery: "jquery-2.0.3",
		knockout: "knockout-3.0.0"
	},
	shim: { // for non AMD libraries
	}
});

requirejs(["identity/login"]);
