/**
 * WordPress dependencies
 */
import {store, getContext} from '@wordpress/interactivity';

const {actions} = store('mosne/dark-palette', {
	actions: {
		makeAuto: () => {
			const context = getContext();
			context.mode = 'auto';
			context.current =
				'has-icon--auto wp-block-navigation-submenu__toggle';
			if (window.matchMedia('(prefers-color-scheme: dark)').matches)
				document.documentElement.setAttribute("data-theme", "dark");
			else document.documentElement.setAttribute("data-theme", "light");
			try {
				window.localStorage.setItem('mosne-dark-palette', 'auto');
			} catch (error) {
				console.error(error.message); // eslint-disable-line no-console
			}
		},
		makeLight: () => {
			const context = getContext();
			context.mode = 'light';
			context.current =
				'has-icon--light wp-block-navigation-submenu__toggle';
			document.documentElement.setAttribute("data-theme", "light");
			try {
				window.localStorage.setItem('mosne-dark-palette', 'light');
			} catch (error) {
				console.error(error.message); // eslint-disable-line no-console
			}
		},
		makeDark: () => {
			const context = getContext();
			context.mode = 'dark';
			context.current =
				'has-icon--dark wp-block-navigation-submenu__toggle';
			document.documentElement.setAttribute('data-theme', 'dark');
			try {
				window.localStorage.setItem('mosne-dark-palette', 'dark');
			} catch (error) {
				console.error(error.message); // eslint-disable-line no-console
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
			const context = getContext();
			let initMode = context.mode;
			try {
				initMode =
					window.localStorage.getItem('mosne-dark-palette') || context.mode;
			} catch (error) {
				console.error(error.message); // eslint-disable-line no-console
			}
			if (initMode === 'dark') {
				actions.makeDark();
			} else if (initMode === 'auto') {
				actions.makeAuto();
			} else {
				actions.makeLight();
			}
		},
	},
});
