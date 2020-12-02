const url = require('url');
let praseUrl = 'https://www.google.com/?q=node.js';
let urlObj = url.parse(praseUrl);
console.log(urlObj);