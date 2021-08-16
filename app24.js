const { Map } = require('immutable');  // npm install immutable.

const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = map1.set('b', 50);           // mutate.

console.log(map1.get('b') + " vs " + map2.get('b'));