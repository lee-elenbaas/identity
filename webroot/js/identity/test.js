define(["jquery", "text!identity/loginEmailView.html!strip"], function($, loginEmailView){
	$(function(){
		$('body').html(loginEmailView);
	});
});
