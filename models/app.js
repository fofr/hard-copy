define(['express', 'hogan-express'], function (express, hoganExpress) {

    var app = express(),
        port = process.env.PORT || 5000;

    // Setup copy-and-pasta'd from https://github.com/vol4ok/hogan-express
    app.set('view engine', 'html');
    //app.enable('view cache');
    app.engine('html', hoganExpress);

    app.configure(function() {
        app.use(express.logger({ format: ':method :url :status' }));
    });

    app.get('/', function(request, response) {
        response.render('index', {test: "TEST"});
    });

    app.listen(port, function() {
        console.log("Listening on " + port);
    });

    return app;

});
