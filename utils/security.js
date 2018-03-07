var bcrypt = require('bcrypt');

const saltRounds = 10;

var security = {};

/**
 * Hash the a respective string.
 * @param password The password string to be hashed.
 * @param cb A callback fired once the password has been encrypted.that receives have passed to it any error and the hashed password.
 */
security.hash = (password, cb) => {
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err){
            console.error('Hash error:', err)
        }
        cb(err, hash);
    });
};

module.exports = security;