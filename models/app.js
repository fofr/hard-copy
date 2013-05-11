define(['express'], function (express) {

    var app = express(),
        port = process.env.PORT || 5000;

    app.configure(function() {
        app.use(express.logger({ format: ':method :url :status' }));
    });

    app.get('/', function(request, response) {
        response.send('Hello RequireJS World!');
    });

    app.listen(port, function() {
        console.log("Listening on " + port);
    });

    return app;

});
