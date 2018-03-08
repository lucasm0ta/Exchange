var express = require('express');
var router = express.Router();

var m_quote = require('../models/model_quote');

router.get('/', (req, res, next) => {
    m_quote.get((err, ret) => {
        if (err) {
            console.error(err);
            res.status(500).json({message: "Internal Error"});
        } else {
            res.status(200).json(ret);
        }
    });
});

module.exports = router;