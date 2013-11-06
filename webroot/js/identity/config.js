define(["jquery"], function($) {
	function save() {
		localStorage.setItem('identity-config', JSON.stringify(config));
	}
	
	var config = localStorage.getItem('identity-config');
	
	if (typeof config === 'string')
		config = $.parseJSON(config);
		
	if (typeof config !== 'object')
		config = {};
		
	$.extend(config, {
		login: {
			avaliableForms: {
				loginByUserPass: {
					form: 'identity/views/loginByUserPassForm.html',
					chooser: 'identity/views/loginByUserPassChooser.html'
				},
				loginByEmail: {
					form: 'identity/views/loginByEmailForm.html',
					chooser: 'identity/views/loginByEmailChooser.html'
				}
			},
			selectedForm: 'loginByEmail'
		},
		save: save
	});
	
	return config;
});
