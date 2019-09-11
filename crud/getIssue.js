function getIssue(project, issueId) {
  // find issue in project
  let issueIndex = null;
  let issue = project.issues.find( (projIssue, index) => {
    issueIndex = index;
    return projIssue.id === issueId.valueOf();
  });
  return {issue, issueIndex};
}

module.exports = getIssue;