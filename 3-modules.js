// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require ('./4-names');
const sayHi = require ('./5-utils');
const data = require ('./6-alternativeFlavour');
require('./7-mindGrenade');
console.log(data);

sayHi('Roman Shahrear');
sayHi(names.roman);
sayHi(names.shahrear);