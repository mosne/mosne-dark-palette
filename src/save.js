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

	return (
		<li {...useBlockProps.save({className: classOptions})}>
			<button type="button" aria-haspopup="menu">
					<span className="has-icon--auto">
						{defaultLabel}
					</span>
			</button>
			<ul aria-labelledby="themes-menu-button">
				<li>
					<button type="button" className="active-menu-item has-icon--auto">
						<span>{autoLabel}</span>
					</button>
				</li>
				<li>
					<button type="button" className="has-icon--light">
						<span>{lightLabel}</span>
					</button>
				</li>
				<li>
					<button type="button" className="has-icon--dark">
						<span>{darkLabel}</span>
					</button>
				</li>
			</ul>
		</li>
	);
}
