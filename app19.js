//callback ->on event gurenteed handled -> no chance of failure(asyn cant predect outcome, for button it will positive path)
//promise -> not gurenteed -> server is buzy dint respond -> promise will give result pass r fail(timeout) handles both positive and nrgrtive path

//npm install node-fetch


const fetch = require('node-fetch') ; // we r importing , dumping to variable fetch

fetch("https://api.randomuser.me/?nat=US&results=10")//state machine -> pending, fulfilled, error
  .then(response => response.json())
  .then(members => console.log(members))
  .catch(err => console.error(err))

  //cleanup data, ex: header, request etc) fetch will give raw data, we need to clean up