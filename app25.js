
//MAPImmutable

// const data = { my: { nested: { name: 'Ajay' } } };
// const goodName = data.my.nested.name;
//const badName = data.my.something.name;//TypeError: Cannot read property 'name' of undefined

// console.log('1. ', goodName);

// ==========================
const {  fromJS } = require('immutable');
const data2 = fromJS({ my: { nested: { name: 'Ajay' } } });
const goodName2 = data2.getIn(['my', 'nested', 'name']);

console.log('2. ',goodName2); 
const badName2 = data2.getIn(['my', 'somename', 'name']);
console.log('3. ',badName2); //

