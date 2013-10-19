define(["jquery", "text!identity/loginEmailView.html!strip"], function($, loginEmailView){
	$(function(){
		var formElement = $('[data-form=login]');
		formElement.html(loginEmailView);
		alert(loginEmailView);
	});
});
