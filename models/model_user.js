var db = require('../utils/database');
var val = require('../utils/validate');
var sec = require('../utils/security');

const q = {
    insert : 'INSERT INTO "user" (email, password) VALUES ($1, $2)',
    select : '',
    remove : ''
};

var user = {};
/**
 *
 * @param usr A user object containing and email and password.
 * @param cb A call
 */
user.validateUser = (usr, cb) => {
    var error = ["", ""];
    var r_hash = "";
    val.validateEmail(usr.email, (err) => {
        if (err)
            error[0] = err;
    });
    val.validatePassword(usr.password, (err) => {
        if (err) {
            error[1] = err;
            cb(error, r_hash);
        } else {
            sec.hash(usr.password, (err, hash) => {
                if (err) {
                    error[1] = err;
                } else {
                    r_hash = hash;
                }
                cb(error, r_hash);
            });
        }
    });
};

user.createUser = (usr, cb) => {
    user.validateUser(usr, (errUser, hash) => {
        if (errUser[0] || errUser[1]) {
            cb(errUser[0] + " " +errUser[1]);
        } else {
            db.query(q.insert, [usr.email, hash] , cb);
        }
    });
};

user.getUser = (id, callback) => {

};

user.deleteUser = () => {

};

module.exports = user;