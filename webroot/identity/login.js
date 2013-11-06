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
				
				formElement.html(login.form);
			}
			
			function placeLoginChooser() {
				var formChooser = $('[data-id-role=login-chooser]');
				
				var html = '';
				
				for(var form in config.login.avaliableForms) {
					if (form === config.login.selectedForm)
						continue;
						
					html += config.login.avaliableForms[form].chooser;
				}
					
				formChooser.html(html);
			}
			
			placeLoginForm();
			placeLoginChooser();
		});
	}
);
