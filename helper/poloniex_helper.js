const Poloniex = require('poloniex-api-node')

var quote = {
    coin: "BTC",
    value: "",
    timestamp: "",
    exchange: "poloniex",
}

var pol_h = {};
let poloniex = new Poloniex();

pol_h.get= (cb) => {
    poloniex.returnTicker().then((ticker) => {
        quote.value = Math.floor(ticker.USDT_BTC.highestBid/1).toFixed(2);
        cb("", quote);
    }).catch((err) => {
        console.error(err.message);
        cb(err.message, null);
    });
};

module.exports = pol_h;