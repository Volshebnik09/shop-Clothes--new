var path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: "../src/pages/main/main.js",
        information: "../src/pages/information/information.js",
        production: "../src/pages/production/production.js",
        layout:"../src/template/layout.js",
        allProducts: "../src/pages/allProducts/allProducts.js",
        // second: "../src/pages/second/second.js" пример подгрузки след. страницы
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    output: {
        filename: 'scripts/[name].bundle.js',
    }
};