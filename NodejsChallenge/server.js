const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
  res.end('Hello from Node inside Docker!');
});
server.listen(port, () => console.log(`Listening on port ${port}`));
