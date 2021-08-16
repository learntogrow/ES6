//promise local mimic of server
// promice is with resolve and reject
async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve({msg: "info"}), 1000)
    });
  
    let result = await promise; 
    console.log("result: ", result); 
  }
  
   f();

// run in browser
//    navigator.getBattery().then(function(value){
//     console.log("Batter Level: " + (value.level * 100));
//   }, function(reason){
//     console.log("Error: " + reason);
//   });
