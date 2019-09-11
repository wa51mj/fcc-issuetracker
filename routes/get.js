const findProject = require('../crud/findProject');

async function get(req, res){
  console.log('get request')
  
  let msg = null;
  var projectName = req.params.project;
  let data = req.query;
  
  let project = await findProject(projectName);
  
  if(!project){
     msg = `project could not be found`;
  }
  else {
    let issues = project.issues;
    console.log(data);
    let noFilteringNeeded = Object.keys(data).length === 0
    
    if(noFilteringNeeded){
      console.log('no filtering needed')
      msg = issues;
    }
    else {
      console.log('filtering needed')
      for(let field in data) {
        console.log(`filter field: ${field}`)
        issues = filter(issues, field, data[field]);
      }
      msg = issues;
    }
  }
  
  res.json({msg})
  return null;
}

function filter(arr, field, value){
  return arr.filter( issue => {
    return issue[field] === value;
  })
}

module.exports = get;