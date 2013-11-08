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
						
					html += '<span data-id-form-select="'+form+'">'+config.login.avaliableForms[form].chooser+'</span>';
				}
					
				formChooser.html(html);
				
				function onFormSelectClick(e) {
					var formSelector = $(e.target).closest('[data-id-form-select]');
					
					var form = formSelector.data('id-form-select');
					
					config.login.selectedForm = form;
					config.save();
					
					formSelector.trigger('id-form-select');
					
					return false;
				}
				
				formChooser.on('click', '[data-id-form-select]', onFormSelectClick);
			}
			
			function onIdentityFormChange() {
				placeLoginForm();
				placeLoginChooser();
				
				return false;
			}
			
			var doc = $(document);
			
			doc.on('id-form-select', onIdentityFormChange);
			doc.trigger('id-form-select');
		});
	}
);
