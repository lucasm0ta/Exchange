var express = require('express');
var router = express.Router();

var m_quote = require('../models/model_quote');

router.get('/', (req, res, next) => {
    m_quote.get(user, (err, res) => {
        res.status(200).json(err);
        // TODO: Finish this
    });
});

module.exports = router;