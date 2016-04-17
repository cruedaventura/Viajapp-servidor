/**
 * Created by carol on 15/04/16.
 */
var mongoose = require('mongoose');

var StudentSchema = mongoose.Schema({

    name: {type: String, required:true},
    address: {type: String, required:true},
    phones: {type: Array, required:true},
});

var Student = mongoose.model('Student', StudentSchema);

module.exports = Student;