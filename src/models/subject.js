/**
 * Created by carol on 15/04/16.
 */
var mongoose = require('mongoose');

var SubjectSchema = mongoose.Schema({
    name: {type: String, required:true},
    students: {type: Array}
});

var Subject = mongoose.model('Subject', SubjectSchema);

module.exports = Subject;