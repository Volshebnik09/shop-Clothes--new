var animateHeader = require('../../components/header__search/index.js');
var activateHeaderPopup = require('../../components/header__popup-menu/index.js');
require('../../sections/main__production/index.js')
animateHeader(document.querySelector('.header__search'));
activateHeaderPopup();



