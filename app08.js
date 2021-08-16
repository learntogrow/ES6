
//   var   names = {
//     cities: ["Blr","Del","Mum","Pune"],
//     print: function(delay=1000) {

//       setTimeout(function() {
//         console.log(this.cities.join(","))
//       }, delay)

//     }
//   }

//   names.print()//TypeError: Cannot read property 'join' of undefined
// ======================
// var   names = {
//     cities: ["Blr","Del","Mum","Pune"],
//     print: function(delay=1000) {
//         console.log("level 1: ", this) //goes to parent object
//       setTimeout(function() {
//         console.log("level 2: ", this) // goes to window object
//       }, delay)

//     }
//   }

//   names.print()
// ==========================
var   names = {
    cities: ["Blr","Del","Mum","Pune"],
    print: function(delay=1000) {
        console.log("level 1: ", this.cities.join(",")) //goes to parent object
      setTimeout(() =>  {
        console.log("level 2: ", this.cities.join(",")) // goes to parent object bcoz of arrow
      }, delay)

    }
  }

  names.print()