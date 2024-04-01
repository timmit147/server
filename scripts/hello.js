function handleRequest(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello!');
  }
  
  module.exports = handleRequest;
  