import * as __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__ from "@wordpress/interactivity";
/******/ var __webpack_modules__ = ({

/***/ "@wordpress/interactivity":
/*!*******************************************!*\
  !*** external "@wordpress/interactivity" ***!
  \*******************************************/
/***/ ((module) => {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");
/**
 * WordPress dependencies
 */

(0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)('mosne/color-scheme', {
  actions: {
    makeAuto: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.mode = 'auto';
      context.current = 'has-icon--auto wp-block-navigation-submenu__toggle';
      // if media prefers-color-scheme is dark set the theme to dark
      // if media prefers-color-scheme is light set the theme to light remove the data-theme attribute
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) document.body.setAttribute('data-theme', 'dark');else document.body.removeAttribute('data-theme');
      localStorage.setItem('theme-dark-mode', 'auto');
    },
    makeLight: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.mode = 'light';
      context.current = 'has-icon--light wp-block-navigation-submenu__toggle';
      document.body.removeAttribute('data-theme');
      localStorage.setItem('theme-dark-mode', 'false');
    },
    makeDark: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.mode = 'dark';
      context.current = 'has-icon--dark wp-block-navigation-submenu__toggle';
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme-dark-mode', 'true');
    }
  },
  callbacks: {
    colorInit: () => {
      const bodyStyles = window.getComputedStyle(document.body);
      const colorBase = bodyStyles.getPropertyValue('--wp--preset--color--base').trim();
      const colorContrast = bodyStyles.getPropertyValue('--wp--preset--color--contrast').trim();
      document.body.style.setProperty('--mosne-color-scheme-light', colorBase);
      document.body.style.setProperty('--mosne-color-scheme-dark', colorContrast);
      document.body.setAttribute('data-theme', 'auto');
      const darkMode = localStorage.getItem('theme-dark-mode') || 'auto';
      if (darkMode === 'true') {
        (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)('mosne/color-scheme').actions.makeDark();
      } else if (darkMode === 'auto') {
        (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)('mosne/color-scheme').actions.makeAuto();
      }
    }
  }
});
})();


//# sourceMappingURL=view.js.map