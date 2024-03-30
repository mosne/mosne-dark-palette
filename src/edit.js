/**
 * WordPress dependencies
 */
import {__} from '@wordpress/i18n';
import {useBlockProps, InspectorControls} from '@wordpress/block-editor';
import {
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	PanelBody,
	TextControl
} from '@wordpress/components';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const {
		classOptions,
		defaultLabel,
		autoLabel,
		darkLabel,
		lightLabel,
	} = attributes;
	const blockProps = useBlockProps(
		{
			className: classOptions,
		}
	);
	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Color Scheme Settings', 'mosne-color-scheme')}>
					<ToggleGroupControl
						__nextHasNoMarginBottom
						isBlock
						value={classOptions}
						label={__('Options', 'mosne-color-scheme')}
						onChange={(value) =>
							setAttributes({classOptions: value})
						}
					>
						<ToggleGroupControlOption
							label={__('Icon', 'mosne-color-scheme')}
							value="has-icon hide-label"
						/>
						<ToggleGroupControlOption
							label={__('Label', 'mosne-color-scheme')}
							value="has-label hide-icon"
						/>
						<ToggleGroupControlOption
							label={__('Both', 'mosne-color-scheme')}
							value="has-icon has-label"
						/>
					</ToggleGroupControl>
					<TextControl
						label={__('Default label', 'mosne-color-scheme')}
						value={defaultLabel}
						onChange={(value) =>
							setAttributes({defaultLabel: value})
						}
					/>
					<TextControl
						label={__('OS auto label', 'mosne-color-scheme')}
						value={autoLabel}
						onChange={(value) =>
							setAttributes({autoLabel: value})
						}
					/>
					<TextControl
						label={__('Dark label', 'mosne-color-scheme')}
						value={darkLabel}
						onChange={(value) =>
							setAttributes({darkLabel: value})
						}
					/>
					<TextControl
						label={__('Light label', 'mosne-color-scheme')}
						value={lightLabel}
						onChange={(value) =>
							setAttributes({lightLabel: value})
						}
					/>
				</PanelBody>
			</InspectorControls>
			<li {...blockProps}>
				<button type="button" aria-haspopup="menu">
					<span>{defaultLabel}</span>
				</button>
			</li>
		</>
	);
}
