/**
 * WordPress dependencies
 */
import {useBlockProps} from '@wordpress/block-editor';

export default function save({attributes}) {
	const {
		classOptions,
		defaultLabel,
		autoLabel,
		darkLabel,
		lightLabel,
	} = attributes;

	const classWrapper = classOptions + '';

	return (
		<li {...useBlockProps.save({className: classWrapper})}>
			<button
				type="button"
				aria-haspopup="menu"
				className=""
				data-wp-interactive="mosne/color-scheme"
				data-wp-init="callbacks.colorInit"
				data-wp-contexts='{"mode":"auto","currentClass":"has-icon--auto"}'
			>
				<span>{defaultLabel}</span>
			</button>
			<ul aria-labelledby="themes-menu-button"
				className="wp-block-navigation__submenu-container wp-block-navigation-submenu">
				<li className="wp-block-navigation-item">
					<button
						type="button"
						className="active-menu-item has-icon--auto"
						data-wp-interactive="mosne/color-scheme-action"
						data-wp-on-click="actions.toggle('auto')"
					>
						<span>{autoLabel}</span>
					</button>
				</li>
				<li className="wp-block-navigation-item">
					<button
						type="button"
						className="has-icon--light"
						data-wp-interactive="mosne/color-scheme-action"
						data-wp-on-click="actions.toggle('light')"
					>
						<span>{lightLabel}</span>
					</button>
				</li>
				<li className="wp-block-navigation-item">
					<button
						type="button"
						className="has-icon--dark"
						data-wp-interactive="mosne/color-scheme-action"

					>
						<span>{darkLabel}</span>
					</button>
				</li>
			</ul>
		</li>
	);
}
