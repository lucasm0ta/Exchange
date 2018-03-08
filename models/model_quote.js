var db = require('../utils/database');

const q = {
    insert : 'INSERT INTO quote (coin, value, datetime, exchange) VALUES ($1::text, $2::money, $3, $4::text)',
    select : 'SELECT coin, btc_usd, datetime, exchange, btc_usd - lag(btc_usd) OVER (ORDER BY datetime, btc_usd) AS INCREASE ' +
             'FROM quote ORDER BY datetime DESC LIMIT 1',
};

var quote = {};

quote.get = (cb) => {
    db.query(q.select, (err, res) => {
        if (err) {
            cb("Get Quote Error :" + err.stack, "")
        } else {
            cb("", res.rows[0]);
        }
    });
};

quote.insert = (quote, cb) => {
    db.query(q.insert, [quote.coin, quote.value, quote.timestamp, quote.exchange], cb);
};

module.exports = quote;