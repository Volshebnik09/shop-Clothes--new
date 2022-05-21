/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var animateHeader = __webpack_require__(1);
	var activateHeaderPopup = __webpack_require__(2);

	animateHeader(document.querySelector('.header__search'));
	activateHeaderPopup();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = function addEventsOnSearch(el){
		el.addEventListener('click',(e) => {
			e.stopPropagation();
			e.preventDefault();
			el.classList.add('active')
		});
		document.addEventListener('click',()=>{
			el.classList.remove('active')
		})
	}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = function(el = '.header__popup-menu'){
	    let popup = document.querySelector(el);
	    let content = popup.querySelector('.header__popup-menu__content');
	    let exit = popup.querySelector('.header__popup-menu__close svg');
	    let open = document.querySelector('.header__popup-button svg')
	    content.addEventListener('click',(e)=>{
	        e.stopPropagation();
	    })
	    exit.addEventListener('click', (e)=>{
	        e.stopPropagation()
	        popup.removeAttribute('active')
	    })
	    open.addEventListener('click', (e)=>{
	        e.stopPropagation();
	        popup.setAttribute('active','')
	    })
	    popup.addEventListener('click',(e)=>{
	        popup.removeAttribute('active')
	    })

	    let links = popup.querySelectorAll('#checkForClick')
	    links.forEach((link)=>{

	        link.addEventListener('click',(e)=>{
	            let newNav = link.querySelector('.header__popup-menu__subli');
	            let haveAttribute = newNav.hasAttribute('active');
	            links.forEach((link)=>{
	                link.querySelector('.header__popup-menu__subli').removeAttribute('active')
	            })
	            haveAttribute?
	                newNav.removeAttribute('active','')
	                :newNav.setAttribute('active','')
	        })
	    })
	}

/***/ })
/******/ ]);