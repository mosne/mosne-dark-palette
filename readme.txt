=== Mosne Dark Palette ===
Contributors:      mosne
Tags:              block, palette, dark, color, accessibility
Requires at least: 6.5
Requires PHP:      7.4
Tested up to:      6.5
Stable tag:        0.1.3
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Create and apply your dark palette in an accessibility-friendly manner using the new Interactivity API.

== Description ==
= Mosne Dark Palette =
This plugin provides the following features:

* A Gutenberg block for the navigation menu, serving as a dropdown switcher that enables you to select the desired color mode using custom labels.
* A color picker for seamlessly remapping your color palette.

== Key Features ==

* Dark palette block for the block navigation menu
* Utilize all your custom colors and custom labels
* Accessibility-ready
* No cookies used (GDPR-friendly)
* Performance-optimized and lightweight
* No block library required
* Primarily built with native WordPress components
* Developer-friendly and easy to customize

== Stay Connected ==

* [View on GitHub](https://github.com/mosne/mosne-dark-palette)
* [Visit my website](https://mosne.it/)
* [Follow on Twitter](https://twitter.com/mosne)

== Installation ==

1. You have a couple of options:
	* Go to Plugins &rarr; Add New and search for "Dark Palette". Once found, click "Install".
	* Download the Dark Palette from wordpress.org and make sure the folder is zipped. Then upload via Plugins &rarr; Add New &rarr; Upload.
2. Activate the plugin through the 'Plugins' screen on WordPress.
3. Search for the "Dark Palette Switcher" block within the Block Editor (Gutenberg) and add it to a block navigation.

== Frequently Asked Questions ==

= How can I customize my CSS? =

You can change the desired behavior using CSS in your theme or in the customizer:
`
body[data-theme="dark"]  {
	/* your CSS here */
	}
`
= Where can I add custom colors =
You can go in the style editor (Appearance > Editor > Styles) and add color to your custom palette.

= Where can I change the icons? =

You can change the icons using CSS in your theme or in the customizer.
`
.wp-block-mosne-dark-palette.has-icon button.has-icon {
	mask: url("[your svg path]") no-repeat;
}
.wp-block-mosne-dark-palette.has-icon button.has-icon--dark {
	mask: url("[your svg path]") no-repeat;
}
.wp-block-mosne-dark-palette.has-icon button.has-icon--light {
	mask: url("[your svg path]") no-repeat;
}
`

== Screenshots ==

1. Add custom colors
2. Setup options and labels
3. Edit the dark palette

== Changelog ==
= 0.1.4 - 2023-06-09 =

* First release on WordPress.org

= 0.1.3 - 2023-06-09 =

* Fix escaping via wp_kses_data and changelogs

= 0.1.2 - 2023-06-01 =

* Fix escaping and changelogs

= 0.1.1 - 2023-05-30 =

* Fix security (disallow direct access to files)

= 0.1.0 - 2023-04-04 =

* Initial release
