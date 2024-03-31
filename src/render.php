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

/** @var array $attributes */
$classOptions      = $attributes['classOptions'] ?? '';
$additionalClasses = $classOptions . 'has-child wp-block-navigation-item open-on-hover-click wp-block-navigation-submenu';

$unique_id = wp_unique_id( 'p-' );
?>

<li <?php echo get_block_wrapper_attributes( [ "class" => $additionalClasses ] ); ?>>
	<div class="navigaiton-item__wrapper"
		 data-wp-interactive="mosne/color-scheme"
		 data-wp-init="callbacks.colorInit"
		<?php echo wp_interactivity_data_wp_context(
			[
				'mode'    => 'auto',
				'current' => 'has-icon--auto wp-block-navigation-submenu__toggle'
			]
		);
		?>>

		<button
			type="button"
			aria-haspopup="menu"
			data-wp-bind--class="context.current"
			class="wp-block-navigation-submenu__toggle">
				<span data-wp-bind--aria-lable="context.mode">
					<?php echo esc_html( $attributes['defaultLabel'] ); ?>
				</span>
		</button>

		<ul aria-labelledby="themes-menu-button"
			class="wp-block-navigation__submenu-container wp-block-navigation-submenu">
			<li class="wp-block-navigation-item">
				<button type="button" data-wp-on--click="actions.makeAuto">
				<span>
					<?php echo esc_html( $attributes['autoLabel'] ); ?>
				</span>
				</button>
			</li>
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
</li>
