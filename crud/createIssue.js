const callbackProjectSave = require('./cbProjectSave');

async function createIssue(project, data){
  project.issues = project.issues.concat([data]);
  return project.save(callbackProjectSave);
}

module.exports = createIssue;