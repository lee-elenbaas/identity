define(
	[
		"jquery", 
		'text!identity/views/loginByUserPassForm.html!strip', 
		'text!identity/views/loginByUserPassChooser.html!strip', 
		'text!identity/views/loginByEmailForm.html!strip', 
		'text!identity/views/loginByEmailChooser.html!strip'
	], 
	function($, loginByUserPassForm, loginByUserPassChooser, loginByEmailForm, loginByEmailChooser) {
		var views = {};
		
		function addView(id, content) {
			views[id] = content;
			
			$('<script type="text/x-template" id="' + id + '">' + content + '</script>').appendTo(body);
		}
		
		addView('loginByUserPassForm', loginByUserPassForm);
		addView('loginByUserPassChooser', loginByUserPassChooser);
		addView('loginByEmailForm', loginByEmailForm);
		addView('loginByEmailChooser', loginByEmailChooser);
		
		return views;
	}
);
