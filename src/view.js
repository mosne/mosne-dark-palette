/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

store( 'create-block', {
	actions: {
		toggle: () => {
			const context = getContext();
			context.isOpen = ! context.isOpen;
		},
	},
	callbacks: {
		logIsOpen: () => {
			const { isOpen } = getContext();
			// Log the value of `isOpen` each time it changes.
			console.log( `Is open: ${ isOpen }` );
			document.body.classList.add( 'mosne-color-scheme-'+isOpen );
		},
	},
} );


// Get the root padding variables.
const bodyStyles = window.getComputedStyle( document.body );
const colorBase = bodyStyles
	.getPropertyValue( '--wp--preset--color--base' )
	.trim();
const colorContrast = bodyStyles
	.getPropertyValue( '--wp--preset--color--contrast' )
	.trim();

console.log( colorBase );
console.log( colorContrast );
