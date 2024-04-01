function handleRequest(req, res) {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  req.on('end', () => {
    const requestData = JSON.parse(body);
    const number = requestData.data+1;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(number.toString());
  });
}

module.exports = handleRequest;
