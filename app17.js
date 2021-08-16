// //called is fun pouinter , has access to internal data
// //object die count dies
// const {called} = new class {
//     count = 0; // instance variable so no need let var const
//     called = () => {
//         let a=1; //inside function we can use et var const
//         this.count++;
//         console.log(`Called : ${this.count}`);
//     }
// };
// called(); 
// called(); 
// called();//Called : 1
//         // Called : 2
//         // Called : 3 

// //---------------------------------------------
// const x = new class {
//     count = 0;
//     called = () => {
//         this.count++;
//         console.log(`Called : ${this.count}`);
//     }
// };
// x.called(); 
// x.called(); //Called : 1
//             //Called : 2
// called1();//TypeError: called1 is not a function
//==========================================

const {called,count} = new class {
    count = 0;
    called = () => {
        this.count++;
        console.log(`Called : ${this.count}`);
    }
};
called(); 
called(); 
called();//Called : 1
        // Called : 2
        // Called : 3
console.log(count) ;//0
