// hi.js
function handleRequest(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hi there!');
  }
  
  module.exports = handleRequest;
  