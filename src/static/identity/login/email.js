"use strict";

define(["text!identity/login/email/loginForm.html!strip"], function(form) {
	function renderLoginForm(container) {
		container.html(form);
	}
	
	return {
		renderLoginForm: renderLoginForm
	};
});
