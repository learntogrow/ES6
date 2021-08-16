// function outer() {
//     function inner() {
//        console.log("JS");
//     }

// }

// outer().inner() ;/ Cannot read property 'inner' of undefined
// ==============
// function outer() {
//     function inner() {
//        console.log("JS");
//     }
// inner();
// }

// outer(); //JS

//======================
// let outer = () => {
//     let inner = () => console.log("JS");
//     inner();
// }
// outer();
// ===========================
// let outer = () => () => console.log("JS");
// outer()();
// ==========================
// (() => () => console.log("JS"))()();
// =================

//Anjan
// function outer() {
//     function inner() {
//        console.log("JS");
//     }

// inner();
// }

// outer() ;

// ============

// (() => {
// (() => console.log('JS'))();

// })();
   
// ==========
// focus of maintainablity dont make too complex

let outer1 = ()=> {let inner = ()=>console.log("JS");inner();}
outer1();