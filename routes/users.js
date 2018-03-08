var express = require('express');
var router = express.Router();
var m_user = require('../models/model_user');
var sec = require('../utils/security');

/* GET users listing. */
router.get('/', (req, res, next) => {

});

router.post('/', (req, res, next) => {
    var user = {
        email : req.body.email,
        password : req.body.password
    };
    m_user.createUser(user, (err) => {
        if (err) {
            console.error(err);
            res.status(500).json(err);
        } else {
            res.status(200).json({message: "User Created."});
        }
    });
});

module.exports = router;
