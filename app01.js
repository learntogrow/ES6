var x = true
x = false
console.log(x)

// use of const
const y = true
// y = false
console.log(y)


// =======

const y ={a: 1, b: 2}

y.a = 7; // primitive copy :: by value // updates

y = {} // copy by reference // error
