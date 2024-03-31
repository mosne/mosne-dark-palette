/**
 * WordPress dependencies
 */
import {store, getContext} from '@wordpress/interactivity';

store('mosne/color-scheme', {
	actions: {
		makeAuto: () => {
			const context = getContext();
			context.mode = 'auto';
			context.current = 'has-icon--auto wp-block-navigation-submenu__toggle';
			// if media prefers-color-scheme is dark set the theme to dark
			// if media prefers-color-scheme is light set the theme to light remove the data-theme attribute
			if(window.matchMedia('(prefers-color-scheme: dark)').matches)
				document.body.setAttribute('data-theme', 'dark');
			else
				document.body.removeAttribute('data-theme');
			localStorage.setItem( 'theme-dark-mode', 'auto' );
		},
		makeLight: () => {
			const context = getContext();
			context.mode = 'light';
			context.current = 'has-icon--light wp-block-navigation-submenu__toggle';
			document.body.removeAttribute('data-theme');
			localStorage.setItem( 'theme-dark-mode', 'false' );
		},
		makeDark: () => {
			const context = getContext();
			context.mode = 'dark';
			context.current = 'has-icon--dark wp-block-navigation-submenu__toggle';
			document.body.setAttribute('data-theme', 'dark');
			localStorage.setItem( 'theme-dark-mode', 'true' );
		}
	},
	callbacks: {
		colorInit: () => {
			const bodyStyles = window.getComputedStyle(document.body);
			const colorBase = bodyStyles
				.getPropertyValue('--wp--preset--color--base')
				.trim();
			const colorContrast = bodyStyles
				.getPropertyValue('--wp--preset--color--contrast')
				.trim();
			document.body.style.setProperty('--mosne-color-scheme-light', colorBase);
			document.body.style.setProperty('--mosne-color-scheme-dark', colorContrast);
			document.body.setAttribute('data-theme', 'auto');
			const darkMode = localStorage.getItem( 'theme-dark-mode' ) || 'auto';
			if ( darkMode === 'true' ) {
				store('mosne/color-scheme').actions.makeDark();
			} else if ( darkMode === 'auto' ) {
				store('mosne/color-scheme').actions.makeAuto();
			}
		}
	},
});
