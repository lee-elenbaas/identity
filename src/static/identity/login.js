"use string";

define(
	[
		"require",
		"jquery", 
		"./login/config"
	], 
	function(require, $, config) {
		$(function() {
			function placeLoginForm() {
				var hasFormElement = $('['+config.general.roleAttribute+'='+config.login.loginFormRole+']').length;
				
				if (hasFormElement) {
					require([config.login.activeModule], function(loginModule) {
						var formElements = $('['+config.general.roleAttribute+'='+config.login.loginFormRole+']');
						
						loginModule.renderLoginForm(formElements);
					});
				}
			}
			
			function placeLoginChooser() {
//				var formChooser = $('[data-id-role=login-chooser]');
				
//				var html = '';
				
//				for(var form in config.login.avaliableForms) {
//					if (form === config.login.selectedForm)
//						continue;
						
//					html += '<span data-id-form-select="'+form+'">'+config.login.avaliableForms[form].chooser+'</span>';
//				}
					
//				formChooser.html(html);
				
//				formChooser.off('click.identity', '[data-id-form-select]', onFormSelectClick);
//				formChooser.on('click.identity', '[data-id-form-select]', onFormSelectClick);
			}
			
			function onFormSelectClick(e) {
//				var formSelector = $(e.target).closest('[data-id-form-select]');
				
//				var form = formSelector.data('id-form-select');
				
//				config.login.selectedForm = form;
//				config.save();
				
				formSelector.trigger('id-form-select.identity');
				
				return false;
			}
			
			function onIdentityFormChange() {
				placeLoginForm();
				placeLoginChooser();
				
				return false;
			}
			
			var doc = $(document);
			
			doc.on('id-form-select.identity', onIdentityFormChange);
			doc.trigger('id-form-select.identity');
			
			return {
				onIdentityFormChange: onIdentityFormChange
			};
		});
	}
);
