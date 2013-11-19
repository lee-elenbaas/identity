(function($) {
	"use strict";
	
	function koApplyBindings(viewModel) {
		return this.each(function() {
			ko.applyBindings(viewModel, this);
		});
	}
	
	$.fn.koApplyBindings = koApplyBindings;
})(jQuery);
