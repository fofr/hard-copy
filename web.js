var requirejs = require('requirejs');

requirejs.config({
    nodeRequire: require,
    app: "models/app"
});

requirejs(['app'], function(app) {

});