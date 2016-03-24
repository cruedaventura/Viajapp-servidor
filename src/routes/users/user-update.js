/**
 * Created by carol on 24/03/16.
 */
var express = require('express');
var router  = express.Router();

var User = require('./../../models/user');

router.put('/user/update', function(req, res, next) {
    var user = new User(
        {
            id:   req.body.id,
            name: req.body.name,
            pass: req.body.pass
        }
    );

    User.findOneAndUpdate({id: user.id}, {pass: user.pass} ,function (err, user) {
        if (err) return console.error(err);

    });

    res.json(user.toObject());
    res.status(201).end();
});

module.exports = router;

