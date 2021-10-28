//require - used to manage dependencies in  executable scripts.

const http = require('http'); //used for ECMA scripts, import is used when .mjs extension is used.

//import http from 'http';
//creates a web server constant. req - request listener. res - response object.(used to write data)
const server = http.createServer((req, res) => {
    res.end('Hello World\n');
});

//Activates the server. listen keeps the server running.
server.listen(4242, () => {
    console.log('Server is running...');
});

