!function(global){
	"use strict";
	
	function wrap($) {
		function koApplyBindings(viewModel) {
			return this.each(function() {
				ko.applyBindings(viewModel, this);
			});
		}
	
		$.fn.koApplyBindings = koApplyBindings;
	})(jQuery);

!function(global) {
    'use strict';
     
    var defaults = {
    'default': 'yeah',
    'test': 'simon'
    };
     
    // Wrapper function that allows us to pass it to define later
    var wrap = function($) {
    // Standard JS object stuff
    var Foo = function(element, options) {
    this.options = options;
    this.element = element;
     
    // Instance specific stuff
    };
    Foo.prototype = {
    // All your methods here
    };
    // Here is the actual jQuery plugin part. It just creates a new Foo object
    // for each matched element in the jQuery object.
    $.fn.foo = function(options) {
    options = $.extend(true, {}, defaults, options);
     
    return this.each(function() {
    var $this = $(this);
    // Assign the instance to a data property so the methods can
    // be used
    $this.data('foo', new Foo($this, options));
    });
    };
     
    $.fn.herotabs.defaults = defaults;
    $.fn.herotabs.Foo = Foo;
    };
    // Check for the presence of an AMD loader and if so pass the wrap function to define
    // We can safely assume 'jquery' is the module name as it is a named module already - http://goo.gl/PWyOV
    if (typeof define === 'function' && define.amd) {
    define(['jquery'], wrap);
    } else {
    // Otherwise we assume jQuery was loaded the old fashioned way and just pass the jQuery object to wrap
    wrap(global.jQuery);
    }
    }(this);
