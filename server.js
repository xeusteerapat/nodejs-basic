const http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, from Node.js');
  })
  .listen(3000, '127.0.0.1', () => {
    console.log('Server is running at port 3000...');
  });
