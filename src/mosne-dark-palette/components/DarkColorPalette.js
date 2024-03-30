import { ColorIndicator } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useSetting } from '@wordpress/block-editor';
import { arrowRight, Icon } from '@wordpress/icons';
import { ButtonColorPopover } from './ButtonColorPopover';

const DarkColorPalette = ( { darkColors, handeSetAttribute } ) => {
	// Color state
	const colorsTheme = useSetting( 'color.palette.theme' ) || [];
	const colorsCustom = useSetting( 'color.palette.custom' ) || [];
	const colors = colorsTheme.concat( colorsCustom );

	// if darkcolors is empty copy colors to darkcolors
	const darkPalette = colors.map( ( item1 ) => {
		const item2 = darkColors.find( ( item ) => item.slug === item1.slug );
		return item2 ? { ...item1, ...item2 } : item1;
	} );

	//CSS styles
	const paletteStyle = {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gap: 8,
	};
	const paletteItemStyle = {
		border: '1px solid #ddd',
		borderRadius: 8,
		padding: 8,
	};
	const paletteItemNameStyle = {
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
	};

	return (
		<>
			<h3>{ __( 'Dark Palette', 'mosne-dark-palette' ) }</h3>
			<ul style={ paletteStyle }>
				{ colors.length > 0 &&
					colors.map( ( colorItem ) => (
						// log the colorItem
						<li key={ colorItem.slug } style={ paletteItemStyle }>
							<p style={ paletteItemNameStyle }>
								{ ' ' }
								{ colorItem.name }
							</p>
							<ColorIndicator colorValue={ colorItem.color } />
							<Icon
								icon={ arrowRight }
								style={ {
									paddingLeft: 4,
									paddingRight: 4,
									height: 20,
								} }
							/>
							<ButtonColorPopover
								currentColor={
									darkColors.find(
										( item ) => item.slug === colorItem.slug
									)?.color || colorItem.color
								}
								currentSlug={ colorItem.slug }
								colors={ colors }
								handeSetAttribute={ handeSetAttribute }
								darkcolors={ darkColors }
								darkPalette={ darkPalette }
							/>
						</li>
					) ) }
			</ul>
		</>
	);
};
export { DarkColorPalette };
