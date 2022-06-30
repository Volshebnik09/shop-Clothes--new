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

/***/ "../src/mixins/card-product/popupProd.js":
/*!***********************************************!*\
  !*** ../src/mixins/card-product/popupProd.js ***!
  \***********************************************/
/***/ (() => {

eval("var cards = document.querySelectorAll('.card-product');\nvar cardPopups = Array.from(document.querySelectorAll('.card-popup'));\ncards.forEach(function (card, index) {\n  var img_card = card.querySelector('.card-product__img');\n  var close_btn = cardPopups[index].querySelector('.card-popup__close-btn');\n  img_card.addEventListener('click', function (e) {\n    document.body.style.overflow = 'hidden';\n    cardPopups[index].style.display = 'block';\n  });\n  close_btn.addEventListener('click', function (e) {\n    cardPopups[index].style.display = 'none';\n    document.body.style.overflow = 'auto';\n  });\n});\nwindow.addEventListener('click', function (e) {\n  if (e.target.classList.contains('card-popup')) {\n    e.target.style.display = 'none';\n    document.body.style.overflow = 'auto';\n  }\n});\n\n//# sourceURL=webpack:///../src/mixins/card-product/popupProd.js?");

/***/ }),

/***/ "../src/pages/allProducts/allProducts.js":
/*!***********************************************!*\
  !*** ../src/pages/allProducts/allProducts.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../../mixins/card-product/popupProd.js */ \"../src/mixins/card-product/popupProd.js\");\n\nvar numbersPages = document.querySelector('.allProducts__products__numbers-pages');\nvar listNumbers = document.querySelectorAll('.allProducts__products__numbers-pages__item');\nnumbersPages.addEventListener('click', function (e) {\n  listNumbers.forEach(function (el) {\n    if (el.classList.contains('allProducts__products__numbers-pages__item__active') && e.target !== el && e.target !== numbersPages) {\n      el.classList.remove('allProducts__products__numbers-pages__item__active');\n    }\n  });\n\n  if (e.target.classList.contains('allProducts__products__numbers-pages__item')) {\n    e.target.classList.add('allProducts__products__numbers-pages__item__active');\n  }\n});\n\n//# sourceURL=webpack:///../src/pages/allProducts/allProducts.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("../src/pages/allProducts/allProducts.js");
/******/ 	
/******/ })()
;