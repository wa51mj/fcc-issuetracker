var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var issueSchema = require('./issue')

var projectSchema = new Schema ({
  project_name : {type: String, required: true},
  issues: [issueSchema]
})

var model = mongoose.model('issuetrackers', projectSchema);

module.exports = model;