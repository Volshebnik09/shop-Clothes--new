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

/***/ "../src/components/header__popup-menu/index.js":
/*!*****************************************************!*\
  !*** ../src/components/header__popup-menu/index.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("module.exports = function () {\n  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.header__popup-menu';\n  var popup = document.querySelector(el);\n  var content = popup.querySelector('.header__popup-menu__content');\n  var exit = popup.querySelector('.header__popup-menu__close svg');\n  var open = document.querySelector('.header__popup-button svg');\n  var body = document.body;\n  content.addEventListener('click', function (e) {\n    e.stopPropagation();\n  });\n  exit.addEventListener('click', function (e) {\n    e.stopPropagation();\n    popup.removeAttribute('active');\n    body.style.overflow = 'auto';\n  });\n  open.addEventListener('click', function (e) {\n    e.stopPropagation();\n    popup.setAttribute('active', '');\n    body.style.overflow = 'hidden';\n  });\n  popup.addEventListener('click', function (e) {\n    popup.removeAttribute('active');\n    body.style.overflow = 'auto';\n  });\n  var links = popup.querySelectorAll('#checkForClick');\n  links.forEach(function (link) {\n    link.addEventListener('click', function (e) {\n      var newNav = link.querySelector('.header__popup-menu__subli');\n      var haveAttribute = newNav.hasAttribute('active');\n      links.forEach(function (link) {\n        link.querySelector('.header__popup-menu__subli').removeAttribute('active');\n      });\n      haveAttribute ? newNav.removeAttribute('active', '') : newNav.setAttribute('active', '');\n    });\n  });\n};\n\n//# sourceURL=webpack:///../src/components/header__popup-menu/index.js?");

/***/ }),

/***/ "../src/components/header__search/index.js":
/*!*************************************************!*\
  !*** ../src/components/header__search/index.js ***!
  \*************************************************/
/***/ ((module) => {

eval("module.exports = function addEventsOnSearch(el) {\n  el.addEventListener('click', function (e) {\n    e.stopPropagation();\n    e.preventDefault();\n    el.classList.add('active');\n  });\n  document.addEventListener('click', function () {\n    el.classList.remove('active');\n  });\n};\n\n//# sourceURL=webpack:///../src/components/header__search/index.js?");

/***/ }),

/***/ "../src/template/layout.js":
/*!*********************************!*\
  !*** ../src/template/layout.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var animateHeader = __webpack_require__(/*! ../components/header__search/index.js */ \"../src/components/header__search/index.js\");\n\nvar activateHeaderPopup = __webpack_require__(/*! ../components/header__popup-menu/index.js */ \"../src/components/header__popup-menu/index.js\");\n\nanimateHeader(document.querySelector('.header__search'));\nactivateHeaderPopup();\nvar meta = document.createElement('meta');\nmeta.name = \"viewport\";\nmeta.content = \"width=480\";\nvar meta__default = document.createElement('meta');\nmeta__default.name = \"viewport\";\nmeta__default.content = \"width=device-width, initial-scale=1.0\";\n\ndocument.body.onresize = function () {\n  addMetaWidth();\n};\n\naddMetaWidth = function addMetaWidth() {\n  if (window.screen.width <= 480) {\n    if (!!meta__default) meta__default.remove();\n    document.querySelector('head').append(meta);\n  } else {\n    if (!!meta) meta.remove();\n    document.querySelector('head').append(meta__default);\n  }\n};\n\naddMetaWidth();\n\n//# sourceURL=webpack:///../src/template/layout.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("../src/template/layout.js");
/******/ 	
/******/ })()
;