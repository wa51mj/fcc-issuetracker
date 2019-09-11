const findProject = require('../crud/findProject');
const createProject = require('../crud/createProject');
const createIssue = require('../crud/createIssue');
const getLastIssue = require('../crud/getLastIssue');
const callbackProjectSave = require('../crud/cbProjectSave');

async function post(req, res){
  console.log('post request');
  
  let msg = null;
  var projectName = req.params.project;
  let data = req.body;
  let hasRequiredFields = checkRequiredFields(data);
  
  if(!hasRequiredFields) {
    msg = {msg:'required fields were not filled'}
  }
  else {
    // required fields were sent
    let project = await findProject(projectName);
  
    if(project){
      // if project exists add an issue and then save
      
      project = await createIssue(project, data);
      msg = getLastIssue(project);
      //msg = 'issue added to existing project';
    }
    else {
      // else project does not exist then create it, add issue and then save
      let newProject = await createProject(projectName);
      
      newProject = await createIssue(newProject, data);
      msg = getLastIssue(newProject);
      //msg = 'issue added to new project';
    }
  }
  
  res.json(msg);
  return null;
}

function checkRequiredFields(data){
  let requiredFields = ['issue_title', 'issue_text', 'created_by'];
  return requiredFields.every( reqField => {
    return data.hasOwnProperty(reqField) && data[reqField].length > 0 ; 
  }); 
}

module.exports = post;