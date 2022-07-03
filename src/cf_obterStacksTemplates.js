var AWS = require("aws-sdk");
var fs = require('fs');

/* AWS.config.getCredentials(function(err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log("Access key:", AWS.config.credentials.accessKeyId);

  }
}); */

const cf = new AWS.CloudFormation({ apiVersion: '2010-05-15', region: 'sa-east-1' });

const params = {
  StackStatusFilter: ['CREATE_COMPLETE']
}
cf.listStacks(params, function (err, data) {
  if (err) console.log(err, err.stack);
  else {
    const stacks = data.StackSummaries;
    let count = 0
    for (let index = 0; index < stacks.length; index++) {
      const element = stacks[index];
      saveStackFile(element.StackName);
      count++
    }
    console.log(`${count + 1} stack files baixados!`)
  }
})

function saveStackFile(Stack) {
  let paramsGet = {
    StackName: Stack,
    TemplateStage: 'Processed'
  }
  cf.getTemplate(paramsGet, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else { // successful response
      const template = data.TemplateBody;
      // console.log(template);
      fs.writeFile(`./src/stackFiles/${paramsGet.StackName}.yml`, template, (err) => {
        if (err) throw err;
        console.log(`${paramsGet.StackName}.yml criado!`)
      })
    }
  })
}

/*
const name = 'StackName'
saveStackFile(name);
 */





