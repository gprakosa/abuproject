// Plesk's Application Startup File
// https://www.plesk.com/blog/product-technology/node-js-plesk-onyx/

const app = require('./app');
const http = require('http');

http.createServer(app).listen(process.env.PORT);