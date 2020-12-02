var calculate = require('./test1.js');
var count = {
    add: calculate.add,
    subtract: calculate.calculate,
    multiply: calculate.multiply,
    divide: calculate.divide
}
module.exports = count;