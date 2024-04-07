/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	__experimentalToggleGroupControl as ToggleGroupControl, // eslint-disable-line
	__experimentalToggleGroupControlOption as ToggleGroupControlOption, // eslint-disable-line
	PanelBody,
	TextControl,
} from '@wordpress/components';
import { DarkColorPalette } from './components/DarkColorPalette';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const {
		classOptions,
		defaultLabel,
		autoLabel,
		darkLabel,
		lightLabel,
		darkColorsPalette,
	} = attributes;
	const blockProps = useBlockProps( {
		className: classOptions,
	} );
	const textGrigStyle = {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gap: 8,
	};
	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'mosne-dark-palette' ) }>
					<ToggleGroupControl
						__nextHasNoMarginBottom
						isBlock
						value={ classOptions }
						label={ __( 'Options', 'mosne-dark-palette' ) }
						onChange={ ( value ) =>
							setAttributes( { classOptions: value } )
						}
					>
						<ToggleGroupControlOption
							label={ __( 'Icon', 'mosne-dark-palette' ) }
							value="has-icon hide-label"
						/>
						<ToggleGroupControlOption
							label={ __( 'Label', 'mosne-dark-palette' ) }
							value="has-label hide-icon"
						/>
						<ToggleGroupControlOption
							label={ __( 'Both', 'mosne-dark-palette' ) }
							value="has-icon has-label"
						/>
					</ToggleGroupControl>
					<div style={ textGrigStyle }>
						<TextControl
							label={ __(
								'Default label',
								'mosne-dark-palette'
							) }
							value={ defaultLabel }
							onChange={ ( value ) =>
								setAttributes( { defaultLabel: value } )
							}
						/>
						<TextControl
							label={ __(
								'OS auto label',
								'mosne-dark-palette'
							) }
							value={ autoLabel }
							onChange={ ( value ) =>
								setAttributes( { autoLabel: value } )
							}
						/>
						<TextControl
							label={ __( 'Dark label', 'mosne-dark-palette' ) }
							value={ darkLabel }
							onChange={ ( value ) =>
								setAttributes( { darkLabel: value } )
							}
						/>
						<TextControl
							label={ __( 'Light label', 'mosne-dark-palette' ) }
							value={ lightLabel }
							onChange={ ( value ) =>
								setAttributes( { lightLabel: value } )
							}
						/>
					</div>
					<DarkColorPalette
						darkColors={ darkColorsPalette }
						handeSetAttribute={ setAttributes }
					/>
				</PanelBody>
			</InspectorControls>
			<li { ...blockProps }>
				<button type="button" aria-haspopup="menu">
					<span>{ defaultLabel }</span>
				</button>
			</li>
		</>
	);
}
