/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../src/pages/information/information.js":
/*!***********************************************!*\
  !*** ../src/pages/information/information.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../../sections/information__FAQ/index */ \"../src/sections/information__FAQ/index.js\");\n\n//# sourceURL=webpack:///../src/pages/information/information.js?");

/***/ }),

/***/ "../src/sections/information__FAQ/index.js":
/*!*************************************************!*\
  !*** ../src/sections/information__FAQ/index.js ***!
  \*************************************************/
/***/ (() => {

eval("information__FAQ__cards = document.querySelectorAll('.information__FAQ__card');\n\nfunction d() {\n  information__FAQ__cards.forEach(function (el) {\n    el.removeAttribute('active');\n  });\n}\n\ninformation__FAQ__cards.forEach(function (card) {\n  card.addEventListener('click', function (e) {\n    e.stopPropagation();\n    d();\n    card.setAttribute('active', '');\n  });\n});\ndocument.addEventListener('click', function () {\n  d();\n});\n\n//# sourceURL=webpack:///../src/sections/information__FAQ/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("../src/pages/information/information.js");
/******/ 	
/******/ })()
;