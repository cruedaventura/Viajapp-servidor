var express = require('express');
var router  = express.Router();

var User = require('./../../models/user');

router.post('/user', function(req, res, next) {
    var user = new User(
        {
            id:   req.body.id,
            name: req.body.name,
            pass: req.body.pass
        }
    );

    user.save(function (err, user) {
        if (err) return console.error(err);
    });

    res.json(user.toObject());
    res.status(201).end();
});



module.exports = router;
