/**
 * WordPress dependencies
 */
import {
	Button,
	ColorIndicator,
	ColorPalette,
	Popover,
} from '@wordpress/components';
import { useState } from '@wordpress/element';

const ButtonColorPopover = ( {
	currentColor,
	colors,
	currentSlug,
	handeSetAttribute,
	darkPalette,
} ) => {
	const [ isVisible, setIsVisible ] = useState( false );
	const toggleVisible = () => {
		setIsVisible( ( state ) => ! state );
	};

	return (
		<>
			<Button onClick={ toggleVisible } style={ { padding: 0 } }>
				<ColorIndicator colorValue={ currentColor } />
			</Button>
			{ isVisible && (
				<Popover
					position="middle left"
					onFocusOutside={ () => {
						if ( isVisible ) {
							setIsVisible( false );
						}
					} }
				>
					<div style={ { padding: 8 } }>
						<ColorPalette
							colors={ colors }
							clearable={ true }
							value={ currentColor }
							onChange={ ( value ) => {
								// Update the color value in darkPalette
								const newDarkPalette = darkPalette.map(
									( item ) => {
										if ( item.slug === currentSlug ) {
											return {
												...item,
												color: value,
											};
										}
										return item;
									}
								);
								handeSetAttribute( {
									darkColorsPalette: newDarkPalette,
								} );
							} }
						/>
					</div>
				</Popover>
			) }
		</>
	);
};
export { ButtonColorPopover };
