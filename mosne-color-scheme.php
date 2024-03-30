<?php
/**
 * Plugin Name:       Mosne Color Scheme (dark light or auto)
 * Description:       A block that allow you to choose your color scheme (a11y friendly)
 * Requires at least: 6.5
 * Requires PHP:      7.4
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       mosne-color-scheme
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function mosne_color_scheme_mosne_color_scheme_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'mosne_color_scheme_mosne_color_scheme_block_init' );
