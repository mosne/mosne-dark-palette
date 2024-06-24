<?php
/**
 * Plugin Name:       Mosne Dark Palette
 * Description:       Create and apply your dark palette in an accessibility-friendly manner using the new Interactivity API.
 * Requires at least: 6.5
 * Requires PHP:      7.4
 * Version:           0.1.4
 * Author:            Mosne
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * author URI:        https://mosne.it
 * Text Domain:       mosne-dark-palette
 *
 * @package           create-block
 */

namespace Mosne\DarkPalette;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// Plugin constants
define( 'MOSNE_DARK_PALETTE_VERSION', '0.1.1' );


add_action( 'init', __NAMESPACE__ . '\\mosne_dark_palette_block_init' );
add_action( 'wp_body_open', __NAMESPACE__ . '\\mosne_dark_palette_head_script', 1 );

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function mosne_dark_palette_block_init(): void {
	register_block_type( __DIR__ . '/build/' );
}

/**
 * Enqueue the dark mode script at the beginning of the bod to avoid FOUC. (flash of unstyled content)
 */
function mosne_dark_palette_head_script(): void {
	ob_start();
	?>
	<script>
		let darkMode = 'auto';
		try {
			darkMode = window.localStorage.getItem('mosne-dark-palette') || 'auto';
		} catch (error) {
			console.error(error.message);
		}
		if (darkMode === 'true' || darkMode === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.body.setAttribute('data-theme', 'dark')
		}
	</script>
	<?php
	$dark_mode_script_content  = wp_remove_surrounding_empty_script_tags( ob_get_clean() );
	$dark_mode_script_minified = preg_replace( '/\s+/', ' ', $dark_mode_script_content );
	wp_print_inline_script_tag( $dark_mode_script_minified, [ 'id' => 'mosne-dark-palette-before' ] );
}

