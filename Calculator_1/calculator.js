const http = require("http");
const incomingRequestHandler = require("./request");

const server = http.createServer(incomingRequestHandler);

const port = 3005;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
