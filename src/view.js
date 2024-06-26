/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

store( 'mosne/dark-palette', {
	actions: {
		makeAuto: () => {
			const context = getContext();
			context.mode = 'auto';
			context.current =
				'has-icon--auto wp-block-navigation-submenu__toggle';
			if ( window.matchMedia( '(prefers-color-scheme: dark)' ).matches )
				document.body.setAttribute( 'data-theme', 'dark' );
			else document.body.removeAttribute( 'data-theme' );
			try {
				window.localStorage.setItem( 'mosne-dark-palette', 'auto' );
			} catch ( error ) {
				console.error( error.message ); // eslint-disable-line no-console
			}
		},
		makeLight: () => {
			const context = getContext();
			context.mode = 'light';
			context.current =
				'has-icon--light wp-block-navigation-submenu__toggle';
			document.body.removeAttribute( 'data-theme' );
			try {
				window.localStorage.setItem( 'mosne-dark-palette', 'false' );
			} catch ( error ) {
				console.error( error.message ); // eslint-disable-line no-console
			}
		},
		makeDark: () => {
			const context = getContext();
			context.mode = 'dark';
			context.current =
				'has-icon--dark wp-block-navigation-submenu__toggle';
			document.body.setAttribute( 'data-theme', 'dark' );
			try {
				window.localStorage.setItem( 'mosne-dark-palette', 'true' );
			} catch ( error ) {
				console.error( error.message ); // eslint-disable-line no-console
			}
		},
		showSubmenu: () => {
			const context = getContext();
			context.submenu = true;
		},
		hideSubmenu: () => {
			const context = getContext();
			context.submenu = false;
		},
	},
	callbacks: {
		colorInit: () => {
			let darkMode = 'auto';
			try {
				darkMode =
					window.localStorage.getItem( 'mosne-dark-palette' ) ||
					'auto';
			} catch ( error ) {
				console.error( error.message ); // eslint-disable-line no-console
			}
			if ( darkMode === 'true' ) {
				store( 'mosne/dark-palette' ).actions.makeDark();
			} else if ( darkMode === 'auto' ) {
				store( 'mosne/dark-palette' ).actions.makeAuto();
			} else {
				store( 'mosne/dark-palette' ).actions.makeLight();
			}
		},
	},
} );
