/**
 * Created by carol on 15/04/16.
 */
var express = require('express');
var router  = express.Router();

var Subject = require('./../../models/subject');

router.get('/subjects', function(req, res, next) {
    Subject.find({}).exec().then(function (subjects) {
        res.json(subjects).end();
    });
});

module.exports = router;