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

	const classWrapper = classOptions +' wp-block-navigation-item has-child open-on-hover-click wp-block-navigation-submenu';

	return (
		<li {...useBlockProps.save({className: classWrapper})}>
			<button type="button" aria-haspopup="menu" className="wp-block-navigation-submenu__toggle">
					<span className="has-icon--auto">
						{defaultLabel}
					</span>
			</button>
			<ul aria-labelledby="themes-menu-button" className="wp-block-navigation__submenu-container wp-block-navigation-submenu">
				<li className="wp-block-navigation-item">
					<button type="button" className="active-menu-item has-icon--auto">
						<span>{autoLabel}</span>
					</button>
				</li>
				<li className="wp-block-navigation-item">
					<button type="button" className="has-icon--light">
						<span>{lightLabel}</span>
					</button>
				</li>
				<li className="wp-block-navigation-item">
					<button type="button" className="has-icon--dark">
						<span>{darkLabel}</span>
					</button>
				</li>
			</ul>
		</li>
	);
}
