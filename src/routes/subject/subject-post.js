/**
 * Created by carol on 15/04/16.
 */
var express = require('express');
var router  = express.Router();

var Subject = require('./../../models/subject');

router.post('/subject', function(req, res, next) {
    var subject = new Subject(
        {
            name: req.body.name,
            students: req.body.students,
        }
    );

    subject.save(function (err, subject) {
        if (err) return console.error(err);
    });

    Subject.find({}).exec().then(function (subjects) {
        res.json(subjects).end();
    });

    //res.json(user.toObject());


});



module.exports = router;
