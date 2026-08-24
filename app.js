const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<HTML>");
    res.write("<Head><Title>nodeJS</Title></Head>");
    res.write("<body><h1>Welcome Home</h1></body>");
    res.write("</HTML>");
    return res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<HTML>");
    res.write("<Head><Title>nodeJS</Title></Head>");
    res.write("<body><h1>This are the products</h1></body>");
    res.write("</HTML>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<HTML>");
  res.write("<Head><Title>nodeJS</Title></Head>");
  res.write("<body><h1>Learning NodeJS</h1></body>");
  res.write("</HTML>");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:3000`);
});
