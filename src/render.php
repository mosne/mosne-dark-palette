<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
} // Exit if access directly

/** @var array $attributes */

$dark_colors        = '';
$colors             = '';
$theme_options      = $attributes['themeOption'] ?? 'light';
$default_options    = $attributes['defaultOption'] ?? 'auto';
$unique_id          = wp_unique_id( 'p-' );
$class_options      = $attributes['classOptions'] ?? '';
$enable_auto        = $attributes['enableAuto'] ?? true;
$apparence_options  = $attributes['apparenceOption'] ?? 'dropdown';
$additional_classes = $class_options . '  wp-block-navigation-item open-on-hover-click wp-block-navigation-submenu';
$labels             = [
	'auto'  => esc_attr( $attributes['autoLabel'] ),
	'light' => esc_attr( $attributes['lightLabel'] ),
	'dark'  => esc_attr( $attributes['darkLabel'] ),
];

// Generate the CSS variables for the dark palette
if ( ! empty( $attributes['darkColorsPalette'] ) ) {
	foreach ( $attributes['darkColorsPalette'] as $color ) {
		$dark_colors .= sprintf(
			'--mosne-dark-palette-%s: %s;',
			esc_attr( $color['slug'] ),
			esc_attr( $color['color'] )
		);
		$colors      .= sprintf(
			'--wp--preset--color--%s: var(--mosne-dark-palette-%s, %s);',
			esc_attr( $color['slug'] ),
			esc_attr( $color['slug'] ),
			esc_attr( $color['color'] )
		);
	}
}
// Generate the CSS for the dark palette.
if ( 'light' === $theme_options ) {
	$palette_styles = sprintf(
		'html[data-theme="dark"] { %s %s prefers-color-scheme: dark;}',
		$dark_colors,
		$colors
	);
} else {
	$palette_styles = sprintf(
		'html[data-theme="light"] { %s %s prefers-color-scheme: light;}',
		$dark_colors,
		$colors
	);
}

/**
 * Add the dark palette styles to the page.
 */
wp_add_inline_style(
	'mosne-dark-palette-style',
	$palette_styles
);

/**
 * Enqueue the dark mode script at the beginning of the bod to avoid FOUC. (flash of unstyled content)
 */
// Register an empty script handle to attach the inline script.
wp_register_script( 'mosne-dark-palette-inline', '', [], MOSNE_DARK_PALETTE_VERSION, [ 'in_footer' => false ] );
wp_enqueue_script( 'mosne-dark-palette-inline' );

// Inline script to set the theme based on user preference or system preference.
$inline_script = '
	(function () {
		/* Set the theme based on user preference or system preference */
		let initMode = "' . $default_options . '";
		try {
			initMode = window.localStorage.getItem("mosne-dark-palette") || "' . $default_options . '";
		} catch (error) {
			console.error(error.message);
		}
		if (initMode === "dark" || initMode === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
			/* Set the theme to dark */
			document.documentElement.setAttribute("data-theme", "dark");
		} else {
			/* Set the theme to light */
			document.documentElement.setAttribute("data-theme", "light");
		}
	})();
';

// Ensure proper escaping
$inline_script_minified = preg_replace( '/\s+/', ' ', $inline_script );
// remove all commnets from the inline script
$inline_script_minified = preg_replace( '/\/\*.*?\*\//', '', $inline_script_minified );
wp_add_inline_script( 'mosne-dark-palette-inline', $inline_script_minified );

?>
<li <?php echo wp_kses_data( get_block_wrapper_attributes( [ 'class' => $additional_classes ] ) ); ?>>

	<?php if ( 'toggle' === $apparence_options ) : ?>

		<div class="navigaiton-item__wrapper"
			tabindex="-1"
			data-wp-interactive="mosne/dark-palette"
			data-wp-init="callbacks.colorInit"
			data-wp-on--click="actions.toggleMode"
			data-wp-on--keydown="actions.toggleMode"
			<?php
			echo wp_kses_data(
				wp_interactivity_data_wp_context(
					[
						'mode'    => $default_options,
						'aria'    => $labels[ $default_options ],
						'current' => 'has-icon--auto',
						'submenu' => false,
						'labels'  => $labels,
						'hasAuto' => $enable_auto,
					]
				)
			);
			?>
		>
			<button
				type="button"
				data-wp-bind--class="context.current"
				data-wp-bind--aria-expanded="context.submenu"
				class="wp-block-navigation-submenu__toggle">
				<span data-wp-bind--aria-label="context.aria">
					<?php echo esc_html( $attributes['defaultLabel'] ); ?>
				</span>
			</button>
		</div>

	<?php else : ?>
		<div class="navigaiton-item__wrapper has-child"
			tabindex="-1"
			data-wp-interactive="mosne/dark-palette"
			data-wp-init="callbacks.colorInit"
			data-wp-on--mouseenter="actions.showSubmenu"
			data-wp-on--mouseleave="actions.hideSubmenu"
			data-wp-on--click="actions.showSubmenu"
			data-wp-on--keydown="actions.showSubmenu"
			data-wp-on--focusin="actions.showSubmenu"
			data-wp-on--focusout="actions.hideSubmenu"
			<?php
			echo wp_kses_data(
				wp_interactivity_data_wp_context(
					[
						'mode'    => $default_options,
						'aria'    => $labels[ $default_options ],
						'current' => 'has-icon--auto wp-block-navigation-submenu__toggle',
						'submenu' => false,
						'labels'  => $labels,
						'hasAuto' => $enable_auto,
					]
				)
			);
			?>
		>
			<button
				type="button"
				aria-haspopup="menu"
				data-wp-bind--class="context.current"
				data-wp-bind--aria-expanded="context.submenu"
				class="wp-block-navigation-submenu__toggle">
				<span data-wp-bind--aria-label="context.aria">
					<?php echo esc_html( $attributes['defaultLabel'] ); ?>
				</span>
			</button>
			<ul aria-labelledby="themes-menu-button"
				class="wp-block-navigation__submenu-container wp-block-navigation-submenu">
				<?php if ( $enable_auto ) : ?>
					<li class="wp-block-navigation-item">
						<button type="button" data-wp-on--click="actions.makeAuto">
							<span>
								<?php echo esc_html( $attributes['autoLabel'] ); ?>
							</span>
						</button>
					</li>
				<?php endif; ?>
				<li class="wp-block-navigation-item">
					<button type="button" class="has-icon--light" data-wp-on--click="actions.makeLight">
						<span>
							<?php echo esc_html( $attributes['lightLabel'] ); ?>
						</span>
					</button>
				</li>
				<li class="wp-block-navigation-item">
					<button type="button" class="has-icon--dark" data-wp-on--click="actions.makeDark">
						<span>
							<?php echo esc_html( $attributes['darkLabel'] ); ?>
						</span>
					</button>
				</li>
			</ul>
		</div>
	<?php endif; ?>
</li>
