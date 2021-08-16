// obj destructuring 

// NOTE: for object its key, not position

// all obect copy is by reference hence the main onject value also changes
// all primitive are copy by value, hence the main variable is not changed

let sandwich =  {
    bread: "honey_oat",
    veg: "carrot_vada",
    cheese: "amul",
    toppings: ["lettuce", "tomato", "mustard"]
  };

  let {bread, veg} = sandwich ;
  console.log("after destruct primitive: ", bread, veg) ;
    
    bread = "plain";
    
    
      let {toppings} = sandwich ; // all primitive are copy by value, hence the main variable is not changed
  console.log("after destruct topping: ", toppings) ;
  toppings[0] = "corn";
  console.log("after destruct object replaced: ", toppings) ;
  console.log("after destruct main object replaced: ", sandwich.toppings) ; // all obejct copy is by reference hence the main onject value also changes