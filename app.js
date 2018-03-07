var express = require('express');
var compression = require('compression')
var path = require('path');
var logger = require('morgan'); // log errors
var bodyParser = require('body-parser'); // parse requests
var lessMiddleware = require('less-middleware'); // WHY ??

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression())

// Start Quote Cron Job
require('./utils/quote_job');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req === 'OPTIONS') { // Request to know if it can ask a certain one.
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({}); // Allow next request.
    }
    next();
});

// Load Routes
var users = require('./routes/users');

// Routes
app.use('/users', users);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
});

module.exports = app;
