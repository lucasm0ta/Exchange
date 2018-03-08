var express = require('express');
var router = express.Router();
var m_order = require('../models/model_order');

/**
 *
 */
router.post('/', (req, res, next) => {
    var user = {
        email : req.body.email,
        password : req.body.password
    };
    var order = {
        datetime : new Date().toISOString(),
        quant : req.body.quant,
        value : req.body.value,
        buy : req.body.buy
    };
    m_order.makeOrder(user, order, (err) => {
        if (err) {
            console.error(err)
            res.status(500).json({message: "Internal Error"});
        } else {
            res.status(200).json({message: "Order Created."});
        }
    });
});

router.get('/', (req, res, next) => {
    var user = {
        email : req.body.email,
        password : req.body.password
    };
    m_order.getOrders(user, (err, res) => {
        if (err) {
            console.error(err);
            res.status(500).json({message: "Internal Error"});
        } else {
            res.status(200).json(res);
        }
    });
});

module.exports = router;
