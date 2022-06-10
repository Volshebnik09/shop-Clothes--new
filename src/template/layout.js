var animateHeader = require('../components/header__search/index.js');
var activateHeaderPopup = require('../components/header__popup-menu/index.js');
animateHeader(document.querySelector('.header__search'));
activateHeaderPopup();

var meta = document.createElement('meta');
meta.name = "viewport";
meta.content = "width=480";

document.body.onresize = () => {
    addMetaWidth();
}
 
addMetaWidth = () => {
    if (window.screen.width <= 480) {
        document.querySelector('head').append(meta);
    } else {
        console.log(123)
        meta.remove()
    }
}


addMetaWidth()