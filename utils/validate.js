var isEmail = require('isemail');
var val = {};

val.validateEmail = (email, callback) => {
    var err;
    if (!isEmail.validate(email)){
        err = 'Invalid Email';
    }
    callback(err);
};

val.validatePassword = (password, cb) => {
    var err;
    if (password.length < 8){
        err = 'Password too small.';
    } else if (password.length > 100){
        err = 'Password too long.';
    }
    cb(err);
};

val.validateQuotation = () => {

};

module.exports = val;
