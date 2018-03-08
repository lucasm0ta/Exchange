var db = require('../utils/database');
var val = require('../utils/validate');
var sec = require('../utils/security');

const q = {
    insert : 'INSERT INTO exchange.user (email, password) VALUES ($1::text, $2::text)',
    select_by_email : 'SELECT * FROM exchange.user WHERE email = $1::text',
    remove : ''
};

var user = {};
/**
 *
 * @param usr A user object containing and email and password.
 * @param cb A callback function
 */
user.validateUser = (usr, cb) => {
    var error = ["", ""];
    var r_hash = "";
    val.validateEmail(usr.email, (err_e) => {
        if (err_e) {
            error[0] = err_e;
        } else {
            val.validatePassword(usr.password, (err_p) => {
                if (err_p) {
                    error[1] = err_p;
                    cb(error);
                } else {
                    cb("");
                }
            });
        }

    });
};


user.getUser = (usr, cb) => {
    user.validateUser(usr, (errUser) => {
        if (errUser[0] || errUser[1]) {
            cb(errUser[0] + ((errUser[0] && errUser[1])?" ":"") + errUser[1]);
        } else {
            db.query(q.select_by_email, [usr.email], (err_q, res_q) => {
                if (err_q) {
                    cb(err_q);
                } else {
                    sec.check(usr.password, res_q.rows[0].password, (err_c, res_c) => {
                        if (err_c) {
                            cb(err_c);
                        } else {
                            cb("", res_q.rows[0]);
                        }
                    });
                }
            });
        }
    });
};

user.createUser = (usr, cb) => {
    user.validateUser(usr, (errUser) => {
        if (errUser[0] || errUser[1]) {
            cb(errUser[0] + ((errUser[0] && errUser[1])?" ":"") + errUser[1]);
        } else {
            sec.hash(usr.password, (err, hash) => {
                if (err) {
                    cb(err);
                } else {
                    db.query(q.insert, [usr.email, hash] , cb);
                }
            });
        }
    });
};

user.deleteUser = () => {

};

module.exports = user;