# Dark Palette

![Dark Palette](https://github.com/mosne/mosne-dark-palette/blob/main/_wordpress-org/banner-1544x500.png)


Create and apply your dark palette in an a11y friendly way using the new Interactivity API.

## Description

Child of the block navigation menu, Mosne Dark Palette is gutenberg block that gives you :
* A dropdown switcher to choose the color mode you want with custom labels
* A color picker to remap you color palette

### Key Features

* Dark palette block for the block navigation menu
* Use all your custom colors and custom labels
* Accessibility ready
* No cookies are used (GDPR friendly)
* Performance optimized, very lightweight
* No block library required
* Built almost entirely with native WordPress components
* Developer friendly, easy to customize

### Stay Connected

* [View on GitHub](https://github.com/mosne/mosne-dark-palette)
* [Visit my website](https://mosne.it/)
* [Follow on Twitter](https://twitter.com/mosne)

## Installation

1. You have a couple of options:
	* Go to Plugins &rarr; Add New and search for "Dark Palette". Once found, click "Install".
	* Download the Dark Palette from wordpress.org and make sure the folder is zipped. Then upload via Plugins &rarr; Add New &rarr; Upload.
2. Activate the plugin through the 'Plugins' screen in WordPress.
3. Search for the block within the Block Editor (Gutenberg) and  add the "Dark Palette Switcher" block in a block navigation menu.

## Frequently Asked Questions

### How can i customize my css?

you can change the desired behviour using CSS in your theme or in the customizer.
``` css
body[data-theme="dark"]  {
	/* your CSS here */
}
```
### Where can I add custom colors
You can go in the style editor (Apparence > Editor > Styles) and add color to your custom palette.

### Where can I change the icons?

you can change the icons using CSS in your theme or in the customizer.
``` css
.wp-block-mosne-dark-palette.has-icon button.has-icon {
	mask: url("[your svg path]") no-repeat;
}
.wp-block-mosne-dark-palette.has-icon button.has-icon--dark {
	mask: url("[your svg path]") no-repeat;
}
.wp-block-mosne-dark-palette.has-icon button.has-icon--light {
	mask: url("[your svg path]") no-repeat;
}
```

## Screenshots

1. Add custom colors
   ![screenshot-1](https://github.com/mosne/mosne-dark-palette/blob/main/_wordpress-org/screenshot-1.gif)
2. Setup options and labels
   ![screenshot-2](https://github.com/mosne/mosne-dark-palette/blob/main/_wordpress-org/screenshot-2.gif)
3. Edit the dark palette
   ![screenshot-3](https://github.com/mosne/mosne-dark-palette/blob/main/_wordpress-org/screenshot-3.gif)

## Changelog

### 0.1.0 - 2023-04-04

* Initial release
