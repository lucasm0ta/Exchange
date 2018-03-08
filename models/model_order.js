var db = require('../utils/database');
var val = require('../utils/validate');
var sec = require('../utils/security');
var m_user = require('./model_user');

const q = {
    insert : 'INSERT INTO "order" (user_id, datetime, btc_quant, btc_usd, buy) VALUES ($1, $2, $3, $4, $5)',
    select : 'SELECT * FROM "order" WHERE id_user = $1',
    remove : ''
};

var order = {};
order.makeOrder = (usr, order, cb) => {
    m_user.getUser(usr, (err_g, usr_db) => {
        if (err_g) {
            cb(err_g);
        } else {
            var vals = [usr_db.id, order.datetime, order.quant, order.value, order.buy];
            db.query(q.insert, vals, (err_q, res) => {
                if (err_q) {
                    cb(err_q)
                } else {
                    cb()
                }
            })
        }

    });
};

order.getOrders = (usr, cb) => {
    m_user.getUser(usr, (err_g, usr_db) => {
        if (err_g) {
            cb(err_g);
        } else {
            db.query(q.select, usr_db.id, (err_q, res) => {
                if (err_q) {
                    cb(err_q)
                } else {
                    cb("", res)
                }
            })
        }
    });
};

module.exports = order;
