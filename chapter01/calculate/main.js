var test = require('./test.js');
console.log(test.add(3, 4));
var f = (function(x, y) {
    console.log(x + y);
    return x + y;
})(5, 5);