var express = require('express');
var Localize = require('localize');
var path = require('path');

var router = express.Router();

var jsonPath = path.join(__dirname, '..', 'views');
var localize = new Localize(jsonPath, 'utf8');

/* GET home page. */
router.get('/', function (req, res, next) {
    var lang = /*req.session.lang ||*/ "pt"; // TODO: Find a better way to localize user. Issue #6
    localize.setLocale(lang);
    res.render('index', {title: 'Express', tr: localize.translate});
});

module.exports = router;
