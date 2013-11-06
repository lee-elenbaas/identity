requirejs.config({
	baseUrl: "js/lib",
	paths: { // AMD libraries
		identity: "../identity",
		views: "../../views",
		jquery: "jquery-2.0.3",
		knockout: "knockout-2.3.0"
	},
	shim: { // for non AMD libraries
	}
});

requirejs(["identity/login"]);
