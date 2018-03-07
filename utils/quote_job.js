var CronJob = require('cron').CronJob;
var m_quote = require('../models/model_quote');
var pol_helper = require('../helper/poloniex_helper');

const helpers = [pol_helper];

/**
 *
 * @param quote
 */
function insertQuote(err, quote) {
    if (err){
        console.log("Quote Helper Error: " + err);
    } else {
        var timestamp = new Date().toISOString();
        quote.timestamp = timestamp;
        m_quote.insert(quote, (err, res) => {
            if(err)
                console.log("Quote Insert Error: " + err.stack)
        });
    }
}

var job = new CronJob('* 0,15,30,45 * * * *', () => {
    console.log("Inserted Quote");
    helpers.forEach((helper) => {
        helper.get(insertQuote);
    });
});

job.start();