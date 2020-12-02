const url = require('url');
let urlObj = {
    'protocal': 'https',
    'port': 80,
    'host': 'www.google.com',
    'search': '?q=node.js',
    'query': 'q=node.js',
    'path': '/'
};
let urlAdress = url.format(urlObj);
console.log(urlAdress);