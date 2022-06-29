var animateHeader = require('../components/header__search/index.js');
var activateHeaderPopup = require('../components/header__popup-menu/index.js');
animateHeader(document.querySelector('.header__search'));
activateHeaderPopup();

var meta = document.createElement('meta');
meta.name = "viewport";
meta.content = "width=480";

var meta__default = document.createElement('meta');
meta__default.name = "viewport";
meta__default.content = "width=device-width, initial-scale=1.0";

document.body.onresize = () => {
    addMetaWidth();
}
 
addMetaWidth = () => {
    if (window.screen.width <= 480) {
        if (!!meta__default) meta__default.remove() 
        document.querySelector('head').append(meta);
    } else {
        if (!!meta) meta.remove()
        document.querySelector('head').append(meta__default);
    }
}


addMetaWidth()