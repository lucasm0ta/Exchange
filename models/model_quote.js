var db = require('../utils/database');

const q = {
    insert : 'INSERT INTO quote (coin, value, datetime, exchange) VALUES ($1, $2, $3, $4)',
    select : 'SELECT (coin, value, datetime, exchange, last_value) FROM quote ORDER BY datetime DESC LIMIT 1',
    remove : ''
};

var quote = {};

quote.get = (cb) => {
    db.query(q.select, (err, res) => {
        if (err) {
            cb("Get Quote Error :" + err.stack, "")
        } else {
            cb(err,)
        }
    });
};

quote.insert = (quote, cb) => {
    db.query(q.insert, [quote.coin, quote.value, quote.timestamp, quote.exchange], cb);
};

module.exports = quote;