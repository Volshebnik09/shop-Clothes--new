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

/***/ "../src/pages/allProducts/allProducts.js":
/*!***********************************************!*\
  !*** ../src/pages/allProducts/allProducts.js ***!
  \***********************************************/
/***/ (() => {

eval("var numbersPages = document.querySelector('.allProducts__products__numbers-pages');\nvar listNumbers = document.querySelectorAll('.allProducts__products__numbers-pages__item');\nnumbersPages.addEventListener('click', function (e) {\n  listNumbers.forEach(function (el) {\n    if (el.classList.contains('allProducts__products__numbers-pages__item__active') && e.target !== el && e.target !== numbersPages) {\n      el.classList.remove('allProducts__products__numbers-pages__item__active');\n    }\n  });\n\n  if (e.target.classList.contains('allProducts__products__numbers-pages__item')) {\n    e.target.classList.add('allProducts__products__numbers-pages__item__active');\n  }\n});\n\n//# sourceURL=webpack:///../src/pages/allProducts/allProducts.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/pages/allProducts/allProducts.js"]();
/******/ 	
/******/ })()
;