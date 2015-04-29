window.addEvent('load', function() {
 
	/**
	 * Some options for the large photos.
	 *
	 * The first argument is the argument for $$ (can be an array of elements or a selector)
	 */
 
	ReMooz.assign('#demo-photos a', {
		'origin': 'img',
		'shadow': 'onOpenEnd', // fx is faster because shadow appears after resize animation
		'resizeFactor': 0.8, // resize to maximum 80% of screen size
		'cutOut': false, // don't hide the original
		'opacityResize': 0.4, // opaque resize
		'dragging': false, // disable dragging
		'centered': true // resize to center of the screen, not relative to the source element
	});
 
	/**
	 * Note on "shadow": value can be true, onOpenEnd (appear after resize) and false, to disable shadow
	 * WebKit (Safari 3) uses (great looking) CSS shadows, so it ignores this option.
	 */
 
});