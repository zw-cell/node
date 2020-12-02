var index = require('./index');
var os = require('os');
console.log(os.cpus());
console.log(index.add(3, 4));
console.log(index.subtract(6, 4));
console.log(index.multiply(4, 4));
console.log(index.divide(8, 4));