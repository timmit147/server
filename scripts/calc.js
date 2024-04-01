function handleRequest(req, res) {
  if (req.method === 'POST') {
      let data = '';
      req.on('data', chunk => {
          data += chunk;
      });
      req.on('end', () => {
          // Parse the incoming data
          const parsedData = JSON.parse(data);
          // Check if the incoming data is a number
          if (!isNaN(parsedData)) {
              // If it's a number, add 1 to it
              const result = parseInt(parsedData) + 1;
              res.statusCode = 200;
              res.setHeader('Content-Type', 'text/plain');
              res.end(result.toString());
          } else {
              // If it's not a number, send a message
              res.statusCode = 400;
              res.setHeader('Content-Type', 'text/plain');
              res.end('Error: Input is not a number');
          }
      });
  } else {
      // If the request method is not POST, send an error response
      res.statusCode = 405;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Method Not Allowed');
  }
}

module.exports = handleRequest;
