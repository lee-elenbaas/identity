define([jquery], function($) {
		var initialConfig = {
			login: {
				avaliableForms: {
					loginByUserPass: {
						form: 'loginByUserPassForm',
						chooser: 'loginByUserPassChooser'
					},
					loginByEmail: {
						form: 'loginByEmailForm',
						chooser: 'loginByEmailChooser'
					}
				},
				selectedForm: 'loginByEmail'
			},
			save: save,
			load: load
		};
		
		var config = $.extend({}, initialConfig);
		
		function save() { // TODO: mperhaps load/save should use this more
			localStorage.setItem('identity-config', JSON.stringify(config));
			alert('saved');
		}
		
		function load() {
			var loaded = localStorage.getItem('identity-config');
			
			if (typeof loaded === 'string')
				loaded = $.parseJSON(config);
				
			if (typeof loaded !== 'object')
				loaded = {};
				
			config = $.extend(deep, loaded, initialConfig);
		}
		
		return config;
	}
);
