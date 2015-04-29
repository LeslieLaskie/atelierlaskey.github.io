 window.addEvent('domready', function(){

	/**
	 * That CSS selector will find all <a> elements with the
	 * attribute rel="boxed"
	 *
	 * The second argument sets additional options.
	 */
	SqueezeBox.assign($$('a[rel=boxed]'), {
		size: {x: 480, y: 300},
		ajaxOptions: {
			method: 'get' // we use GET for requesting plain HTML
		}
	});
	
 });