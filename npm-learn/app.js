const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.end();
});

const port = 3001;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
