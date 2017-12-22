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
    var lang = /*req.session.lang ||*/ "pt";
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
    if (errors) { //
        res.render('signup', {title: 'Express', data: data, errors : errors})
    } else {
        res.redirect(301,'https://www.google.com');
    }
})

/**
 * Validate the data to signup from user input.
 * @param {JSON} data The signup data.
 * @return {JSON} Error messages for each input if it has, none if it's all valid.
 */
function validateInput(data) {
    var username = data['username'];
    var email = data['email'];
    var pass1 = data['password'];
    var pass2 = data['password2'];
    var error = {
        username : 0,
        email: 0,
        password: 0
    }
    if(username === "" || username.length <= 4){
        error.username = 1
    }
    if(email === "" || !validateEmail(email)){
        error.email = 1
    }
    if (pass1 !== "" && pass2 !== "") {
        switch (validatePassword(pass1, pass2)) {
            case 0: // Correct
                break;
            case 1: // Different
                error.password = 1;
                break;
            case 2: // Too short
                error.password = 2;
                break;
            case 3: // Too long
                error.password = 3;
                break;
        }
    } else {
        error.password = 4;
    }

}
/**
 * Return if the email is valid or not.
 * @param {string} email The email to be validated.
 * @return {boolean} \c true if the email is valid, \c false otherwise.
 */
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase())
}

/**
 * Check if password is valid.
 * @param {string} pass1 The first password input.
 * @param {string} pass2 The second password input.
 * @returns {number} 0 - Correct
 *                   1 - They are different
 *                   2 - Too short
 *                   3 - Too long
 */
function validatePassword(pass1, pass2) {
    if (pass1.length < 8 )
        return 2;
    if (pass1.length > 90)
        return 3;
    if (pass1 !== pass2)
        return 1;
    else
        return 0;

}
module.exports = router;