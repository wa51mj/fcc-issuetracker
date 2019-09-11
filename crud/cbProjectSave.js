let callbackProjectSave = (err, project) => {
  err ? console.log(`issue not saved \n`) : console.log(`issue saved \n`);
  err ? console.log(err) : console.log(project);
  return project;
}

module.exports = callbackProjectSave;