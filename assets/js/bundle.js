/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\r\njQuery(function($){\r\n\r\n    let seenOn = $('.seen-on .seen-on-slider');\r\n\r\nif (seenOn.length > 0) {\r\n\r\n    $('.seen-on-slider').slick({\r\n        dots: false,\r\n        infinite: true,\r\n        speed: 1200, // Fast but smooth\r\n        slidesToShow: 5,\r\n        slidesToScroll: 1,\r\n        arrows: false,\r\n        autoplay: true,\r\n        autoplaySpeed: 0, // No pause between slides\r\n        cssEase: 'linear', // Smooth continuous movement\r\n        responsive: [\r\n            {\r\n                breakpoint: 1400,\r\n                settings: {\r\n                    dots: false,\r\n                    infinite: true,\r\n                    speed: 2000, // Fast but smooth\r\n                    slidesToShow: 3,\r\n                    slidesToScroll: 1,\r\n                    arrows: false,\r\n                    autoplay: true,\r\n                    autoplaySpeed: 0, // No pause between slides\r\n                    cssEase: 'linear',\r\n                }\r\n            },\r\n            {\r\n                breakpoint: 950,\r\n                settings: {\r\n                    dots: false,\r\n                    infinite: true,\r\n                    speed: 2000, // Fast but smooth\r\n                    slidesToShow: 2,\r\n                    slidesToScroll: 1,\r\n                    arrows: false,\r\n                    autoplay: true,\r\n                    autoplaySpeed: 0, // No pause between slides\r\n                    cssEase: 'linear',\r\n                }\r\n            },\r\n             {\r\n                breakpoint: 600,\r\n                settings: {\r\n                    dots: false,\r\n                    infinite: true,\r\n                    speed: 2000, // Fast but smooth\r\n                    slidesToShow: 1,\r\n                    slidesToScroll: 1,\r\n                    arrows: false,\r\n                    autoplay: true,\r\n                    autoplaySpeed: 0, // No pause between slides\r\n                    cssEase: 'linear',\r\n                }\r\n            }\r\n            \r\n            // You can unslick at a given breakpoint now by adding:\r\n            // settings: \"unslick\"\r\n            // instead of a settings object\r\n        ]\r\n    });\r\n\r\n\r\n};\r\n\r\n\r\nlet seenOn2 = $('.seen-on-slider-2');\r\n\r\nif (seenOn2.length > 0) {\r\n\r\n    $('.seen-on-slider-2').slick({\r\n        dots: false,\r\n        infinite: true,\r\n        speed: 1200, // Fast but smooth\r\n        slidesToShow: 9,\r\n        slidesToScroll: 1,\r\n        arrows: false,\r\n        autoplay: true,\r\n        autoplaySpeed: 0, // No pause between slides\r\n        cssEase: 'linear', // Smooth continuous movement\r\n        responsive: [\r\n            {\r\n                breakpoint: 840,\r\n                settings: {\r\n                    dots: false,\r\n                    infinite: true,\r\n                    speed: 2000, // Fast but smooth\r\n                    slidesToShow: 6,\r\n                    slidesToScroll: 1,\r\n                    arrows: false,\r\n                    autoplay: true,\r\n                    autoplaySpeed: 0, // No pause between slides\r\n                    cssEase: 'linear',\r\n                }\r\n            },\r\n            {\r\n                breakpoint: 600,\r\n                settings: {\r\n                    dots: false,\r\n                    infinite: true,\r\n                    speed: 2000, // Fast but smooth\r\n                    slidesToShow: 4,\r\n                    slidesToScroll: 1,\r\n                    arrows: false,\r\n                    autoplay: true,\r\n                    autoplaySpeed: 0, // No pause between slides\r\n                    cssEase: 'linear',\r\n                }\r\n            },\r\n            {\r\n                breakpoint: 400,\r\n                settings: {\r\n                    dots: false,\r\n                    infinite: true,\r\n                    speed: 2000, // Fast but smooth\r\n                    slidesToShow: 3,\r\n                    slidesToScroll: 1,\r\n                    arrows: false,\r\n                    autoplay: true,\r\n                    autoplaySpeed: 0, // No pause between slides\r\n                    cssEase: 'linear',\r\n                }\r\n            }\r\n            \r\n            // You can unslick at a given breakpoint now by adding:\r\n            // settings: \"unslick\"\r\n            // instead of a settings object\r\n        ]\r\n    });\r\n\r\n\r\n};\r\n   \r\n\r\n\r\n\r\n\r\n});\r\n \r\n new WOW().init();\n\n//# sourceURL=webpack://pictorlee-html/./src/index.js?\n}");

/***/ },

/***/ "jquery"
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
(module) {

module.exports = jQuery;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;