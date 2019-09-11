const findProject = require('../crud/findProject');
const createProject = require('../crud/createProject');
const callbackProjectSave = require('../crud/cbProjectSave');
const getIssue = require('../crud/getIssue');

async function put(req, res){
  console.log('put request')
  
  let msg = null;
  var projectName = req.params.project;
  let data = req.body;
  
  let project = await findProject(projectName);
  let {issue, issueIndex} = getIssue(project, data._id);
  
  if(!issue) {
    msg = `could not update ${data._id.valueOf()}`;
  }
  else{
    let fieldsToUpdate = whichFieldsNeedTobeUpdated(data); // check if any fields have been sent
    
    if(fieldsToUpdate.length === 0) {
      msg = 'no updated field sent';
    }
    else {
      // else update fields
      fieldsToUpdate.forEach( field => issue[field] = data[field] );
      issue.updated_on = Date.now();
      
      project.issues[issueIndex] = issue;
      project.save(callbackProjectSave);
      msg = 'successfully updated';
    }
    
  }
  
  res.json({msg});
  return null;
}

function whichFieldsNeedTobeUpdated(data) {
  let fieldsToUpdate = [];
  for(let field in data){
    if(field !== '_id' && data[field]){
      fieldsToUpdate.push(field);
    }
  }
  return fieldsToUpdate;
}

module.exports = put;