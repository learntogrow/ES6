//Spread operator
//objective : collect what is balance  remaining  params
// Note : it has to be at last item
//useful in redux
// can be used in array, object, function args

function myFunction(a, b, ...args) {
    console.log('args: ', args);
  }

  myFunction(1, 2, 3, 4, 5); //args:  [ 3, 4, 5 ]
//-------------
//   function myFunction1(...args, a, b) {
//     console.log('args: ', args);
//   }

//   myFunction1(1, 2, 3, 4, 5); //SyntaxError: Rest parameter must be last formal parameter
//------------------------------------
//object spread: breaks the obj 
  let morning = {
    breakfast: "oatmeal",
    lunch: "butter and jam"
  }

  let dinner = "veg and cheese"

  let backpackingMeals = {
    ...morning, //breaks the object
    dinner
  }

  console.log(backpackingMeals);
//   result
// {
//   breakfast: 'oatmeal',
//   lunch: 'butter and jam',
//   dinner: 'veg and cheese'
// }
//---------------------- 
// array spread  //flattens up the array
// let peaks = ["Tallac", "Ralston", "Rose"]
//         let canyons = ["Ward", "Blackwood"]
//         let place = [...peaks, ...canyons]
    
//         console.log(place) //[ 'Tallac', 'Ralston', 'Rose', 'Ward', 'Blackwood' ] 
//==========================
// array spread  //double array
let peaks = ["Tallac", "Ralston", "Rose"]
let canyons = ["Ward", "Blackwood"]
let place = [peaks, canyons]

console.log(place) //[ [ 'Tallac', 'Ralston', 'Rose' ], [ 'Ward', 'Blackwood' ] ]
