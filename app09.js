//array destructuring : getting individual value, no indexing is required
//useful when u know ...size to be known, and the value you need
// saves not to use memory for unnecessary va;ues

let [firstRec] = ["Blr", "Del", "Mum"]
console.log(firstRec); // Blr

let [,,lastRec] = ["Blr", "Del", "Mum"] //iteratue should know to skipe two values
console.log(lastRec); // Mum
//====================

//need only 4
// ???  =  [1, 2, [3, 4]];

let [,,[,lastValue]] =  [1, 2, [3, 4]];
console.log(lastValue);
//=================

