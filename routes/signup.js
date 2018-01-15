/**
 * Signup page.
 * Responsible for:
 * * Serve the signup page.
 * * Validate user input.
 * * Check data collision on database.
 * * Return input errors.
 *
 * @type {*|createApplication}
 */
var express = require('express');
var Localize = require('localize');
var path = require('path');
var router = express.Router();

var jsonPath = path.join(__dirname, '..', 'views');
var localize = new Localize(jsonPath, 'utf8');


/**
 * Serve signup page.
 */
router.get('/', function(req, res, next) {
    var lang = /*req.session.lang ||*/ "pt"; // TODO: Find a better way to localize user. Issue #6
    localize.setLocale(lang);
    res.render('signup', {title: 'Express', tr: localize.translate})
    console.log(localize.strings+"--"+ lang + '\'');
})

/**
 * Manage user input.
 */
router.post('/', function(req, res){
    var data = req.body;
    console.debug(data);

    var errors = validateInput(data);
    if (errors) { // Wrong data
        res.render('signup', {title: 'Express', data: data, errors : errors, tr: localize.translate})
    } else { // Accepted
        res.redirect(301,'https://www.google.com');
    }
})

/**
 * Validate the data to signup from user input.
 * @param {JSON} data The signup data.
 * @return {JSON} Error code for each input type.
 *      Error codes:
 *          email:
 *              0
 *          password:
 *              0
 *          id:
 *              0
 *
 *
 */
function validateInput(data) {
    var email = data['email'];
    var pass1 = data['password'];
    var pass2 = data['password2'];
    var id = data['id'];
    var error = {
        email: 0,
        password: 0,

    }
    error.email = validateEmail(email);
    error.password = validatePassword(pass1, pass2);
    console.log(error);
    return error;
}

/**
 * Return if the email is valid or not.
 * @param {string} email The email to be validated.
 * @return {integer} 0 if the email is valid, 1 if null and 2 if wrong format.
 */
function validateEmail(email) {
    if (email !== "") {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return (re.test(email.toLowerCase())) ? 0 : 2;
    } else {
        return 1;
    }
}

/**
 * Check if password is valid.
 * @param {string} pass1 The first password input.
 * @param {string} pass2 The second password input.
 * @returns {number} 0 - Correct
 *                   1 - One of the fields is null
 *                   2 - Too short
 *                   3 - Too long
 *                   4 - They are different
 */
function validatePassword(pass1, pass2) {
    if (pass1 !== "" && pass2 !== "")
        return 1;
    if (pass1.length < 8 )
        return 2;
    if (pass1.length > 90)
        return 3;
    if (pass1 !== pass2)
        return 4;
    else
        return 0;

}
module.exports = router;