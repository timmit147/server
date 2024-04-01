const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const scriptsDir = path.join(__dirname, 'scripts');

// Dynamically load handlers from the scripts directory
const routes = {};

fs.readdirSync(scriptsDir).forEach(file => {
  const handlerName = `/${path.basename(file, '.js')}`;
  routes[handlerName] = require(path.join(scriptsDir, file));
});

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathName = parsedUrl.pathname;

  const handler = routes[pathName];
  if (handler) {
    handler(req, res);
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
