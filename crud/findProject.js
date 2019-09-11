var mongoose = require('mongoose');
var Projects = require('../models/project');

function findProject (projectName){
  return Projects.findOne({project_name: projectName}, function(err, project){
    project ? console.log(`project found`) : console.log(`project not found`)
    if (err) console.log(err);
    return project;
  });
}

module.exports = findProject;