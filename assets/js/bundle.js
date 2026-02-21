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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\r\njQuery(function($){\r\n\r\n  // Slick slider initializations — show 3 items without stretching them full width.\r\n  // If your cards have intrinsic/fixed widths, set `variableWidth: true` instead.\r\n  let carouselWrapper = $(\".activites\");\r\n  if(carouselWrapper.length > 0){\r\n   \r\n     carouselWrapper.slick({\r\n    slidesToShow: 2,\r\n    slidesToScroll: 1,\r\n    centerPadding: '600px',\r\n    speed: 400,\r\n    infinite: true,\r\n    variableWidth: true,\r\n    adaptiveHeight: true,\r\n    dots: true,\r\n    arrows: false,\r\n   \r\n    responsive: [\r\n      {\r\n      breakpoint: 1280,\r\n        settings: {\r\n        slidesToShow: 2,\r\n        slidesToScroll: 1,\r\n        speed: 400,\r\n        infinite: true,\r\n        variableWidth: false,\r\n        adaptiveHeight: false,\r\n        dots: true,\r\n        arrows: false\r\n      }\r\n    },\r\n      {\r\n      breakpoint: 766,\r\n        settings: {\r\n        slidesToShow: 1,\r\n        slidesToScroll: 1,\r\n        speed: 400,\r\n        infinite: true,\r\n        variableWidth: false,\r\n        adaptiveHeight: false,\r\n        dots: true,\r\n        arrows: false\r\n      }\r\n    }\r\n    ]\r\n \r\n  });\r\n \r\n\r\n  }                             \r\n  let carouselWrapperTeacher = $(\".our-teachers\");\r\n  if(carouselWrapperTeacher.length > 0){\r\n   \r\n     carouselWrapperTeacher.slick({\r\n    slidesToShow: 2,\r\n    slidesToScroll: 1,\r\n    speed: 400,\r\n    infinite: true,\r\n    variableWidth: true,\r\n    adaptiveHeight: true,\r\n    dots: true,\r\n    arrows: false,\r\n   \r\n    responsive: [\r\n      {\r\n      breakpoint: 1315,\r\n        settings: {\r\n        slidesToShow: 2,\r\n        slidesToScroll: 1,\r\n        speed: 400,\r\n        infinite: true,\r\n        variableWidth: false,\r\n        adaptiveHeight: false,\r\n        dots: true,\r\n        arrows: false\r\n      }\r\n    },\r\n      {\r\n      breakpoint: 766,\r\n        settings: {\r\n        slidesToShow: 1,\r\n        slidesToScroll: 1,\r\n        speed: 400,\r\n        infinite: true,\r\n        variableWidth: false,\r\n        adaptiveHeight: false,\r\n        dots: true,\r\n        arrows: false\r\n      }\r\n    }\r\n    ]\r\n \r\n  });\r\n \r\n\r\n  }                             \r\n \r\n\r\n  \r\n\r\n\r\n  //search\r\n$('.search-cont .input-open button').on('click', function() {\r\n        $('.search-container').removeClass('-translate-x-full').addClass('translate-x-0');\r\n        $('.overlay-search').removeClass('-translate-x-full').addClass('translate-x-0');\r\n        $('body').addClass('scroll-lock');\r\n    });\r\n\r\n    // Close sidebar\r\n    $('.search-container .cancle button').on('click', function() {\r\n        $('.search-container').removeClass('translate-x-0').addClass('-translate-x-full');\r\n        \r\n       $('.overlay-search').removeClass('translate-x-0').addClass('-translate-x-full'); \r\n       $('body').removeClass('scroll-lock');\r\n    });\r\n\r\n    //classes\r\n\r\n    $('.toggle-container').on('click', function(){\r\n      $(this).find('.class-info').slideToggle();\r\n      $(this).siblings('.toggle-container').find('.class-info').slideUp();\r\n      $(this).find('.toggle-btn button').toggleClass('rotate-180');\r\n      $(this).siblings('.toggle-container').find('.toggle-btn button').removeClass('rotate-180');\r\n      $(this).siblings('.toggle-container').find('.open button').toggleClass('rotate-180');\r\n     \r\n    });\r\n\r\n\r\n    // Open offcanvas\r\n   // Open Offcanvas when clicking .more-option div\r\n  $('.more-option').on('click', function() {\r\n    $('.offcanvas').removeClass('-translate-x-full').addClass('translate-x-0');\r\n    $('body').addClass('overflow-hidden'); // lock scroll\r\n    $('.overlay-more').removeClass('-translate-x-full').addClass('translate-x-0'); \r\n  });\r\n\r\n  // Close Offcanvas when clicking close button\r\n  $('.offcanvas-close').on('click', function() {\r\n    $('.offcanvas').removeClass('translate-x-0').addClass('-translate-x-full');\r\n    $('body').removeClass('overflow-hidden'); // unlock scroll\r\n    $('.overlay-more').removeClass('translate-x-0').addClass('-translate-x-full'); \r\n  });\r\n\r\n  // Dropdown inside offcanvas\r\n  $('.dropdown-btn').on('click', function() {\r\n    $(this).next('ul').slideToggle(300);\r\n    $(this).parent('li').siblings('li').find('ul').slideUp(300);\r\n    $(this).find('svg').toggleClass('rotate-180');\r\n   \r\n\r\n  });\r\n\r\n\r\n\r\n\r\n\r\n \r\n});\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('scroll', function () { \r\n    let scroll = this.scrollY;\r\n    if(scroll > 100){\r\n        document.querySelector('header').classList.add(\"scroll-menu\");\r\n        document.querySelector('header').classList.remove(\"static-menu\");\r\n        \r\n        \r\n    }else{\r\n      document.querySelector('header').classList.remove(\"scroll-menu\");\r\n      document.querySelector('header').classList.add(\"static-menu\");\r\n      \r\n    };\r\n    \r\n });\r\n\r\n \r\n//class-section-toggle\r\n/*\r\n let buttons = document.querySelectorAll('.toggle-btn button');\r\n buttons.forEach(button => {\r\n    button.addEventListener(\"click\", function(){\r\n       //this.closest(\".wow\").querySelector('.class-info').classList.toggle('hidden');\r\n       let toggleContainer =  this.closest(\".toggle-container\");\r\n       let toggleClass = toggleContainer.querySelector('.class-info');\r\n       if(toggleClass){\r\n        toggleClass.classList.toggle(\"hidden\");\r\n        toggleContainer.querySelector('.toggle-btn').classList.toggle('open-close');\r\n       };\r\n\r\n\r\n    });\r\n });\r\n */\r\n\r\n //mobile-menu\r\n\r\n\r\n\r\n \r\n\r\n /* \r\n\r\n //search\r\n\r\n document.querySelector('.nav .search-cont .search .input-open  button').addEventListener(\"click\", function(){\r\n   \r\n   window.scrollTo({\r\n      top: 0,\r\n      behavior: 'instant'\r\n   });\r\n\r\n   setTimeout(function(){\r\n      document.querySelector('.search-container').classList.remove('canvas-open-close');\r\n       document.querySelector('.search-container').classList.remove('opacity-0');\r\n\r\n      document.querySelector('body').classList.add('scroll-lock');\r\n   },300);\r\n\r\n   document.querySelector('.search-container .main-content .cancle button').addEventListener('click', function(){\r\n      document.querySelector('.search-container').classList.add('canvas-open-close');\r\n       document.querySelector('.search-container').classList.add('opacity-0');\r\n\r\n      document.querySelector('body').classList.remove('scroll-lock');\r\n   });\r\n\r\n   \r\n });\r\n*/\r\n \r\n new WOW().init();\n\n//# sourceURL=webpack://pictorlee-html/./src/index.js?\n}");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = jQuery;

/***/ })

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