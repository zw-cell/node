const queryString = require('querystring');
let obj = {
    'keyWord': 'node.js',
    'name': 'zhengwang'
};
let str = queryString.stringify(obj);
console.log(str);