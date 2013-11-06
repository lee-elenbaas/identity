define(
	[
		"jquery", 
		"identity/config"
	], 
	function($, config) {
		$(function() {
			function placeLoginForm() {
				var login = config.login.avaliableForms[config.login.selectedForm];
			
				var formElement = $('[data-id-role=login-form]');
				
				var html = requirejs('text!'+login.form+'!strip');
				
				formElement.html(html);
			}
			
			function placeLoginChooser() {
				var formChooser = $('[data-id-role=login-chooser]');
				
				var html;
				
				for(var form in config.login.avaliableForms)
					html += requirejs('text!'+form.chooser+'!strip');
					
				formChooser.html(html);
			}
			
			placeLoginForm();
			placeLoginChooser();
		});
	}
);
