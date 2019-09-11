var Project = require('../models/project');
const callbackProjectSave = require('./cbProjectSave');

function createProject(projectName){
  var newProject = new Project({
    project_name: projectName,
    issues: []
  })
  return newProject.save(callbackProjectSave);
}

module.exports = createProject;