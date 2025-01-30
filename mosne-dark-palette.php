<?php
/**
 * Plugin Name:       Mosne Dark Palette
 * Description:       Create and apply your dark palette in an accessibility-friendly manner using the new Interactivity API.
 * Requires at least: 6.5
 * Requires PHP:      7.4
 * Version:           0.1.5
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
define( 'MOSNE_DARK_PALETTE_VERSION', '0.1.5' );


add_action( 'init', __NAMESPACE__ . '\\mosne_dark_palette_block_init' );

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
