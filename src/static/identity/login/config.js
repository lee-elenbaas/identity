"use string";

define(["jquery", "../config"], function($, config) {
	// identity login config
	config.login = {
		loginFormRole: "login-form",
		activeModule: "identity/login/email"
	};
	
	return config;
});
