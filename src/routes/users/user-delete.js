/**
 * Created by carol on 24/03/16.
 */

var express = require('express');
var router  = express.Router();

var User = require('./../../models/user');

router.delete('/user/delete', function(req, res, next) {
    var user = new User(
        {
            id:   req.body.id,
            name: req.body.name,
            pass: req.body.pass
        }
    );
    

    console.log(user.id);
    User.find({id:user.id},(function (err, user) {
        if (err) return console.error(err);

    })).remove().exec();

    
    res.status(201).end();
});

module.exports = router;

