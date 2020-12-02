const queryString = require('querystring');
let str = 'keyWord=node.js&name=zhengwang';
let obj = queryString.parse(str);
console.log(obj);