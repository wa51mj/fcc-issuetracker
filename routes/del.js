const findProject = require('../crud/findProject');
const callbackProjectSave = require('../crud/cbProjectSave');
const getIssue = require('../crud/getIssue');

async function del(req, res){
  console.log('delete request')
  
  let msg = null;
  var projectName = req.params.project;
  let data = req.body;
  
  if(!data._id) {
    // if no issue id is provided
    msg =  '_id error';
  }
  else {
    // else issue id has been provided
    let project = await findProject(projectName);
    let {issue, issueIndex} = getIssue(project, data._id);

    if(!issue) {
      // if issue could not be located using id provided
      msg = `could not delete ${data._id}`;
    }
    else{
      // delete issue
      let deletedIssue = project.issues.splice(issueIndex, 1);
      project.save(callbackProjectSave);
      msg = `deleted ${data._id}`;
    }
  }
    
  res.json({msg})
  return null;
}

module.exports = del;