function getLastIssue(project){
  let lastIssueIndex = project.issues.length - 1;
  let lastIssue = project.issues[lastIssueIndex]
  return lastIssue;
}

module.exports = getLastIssue;