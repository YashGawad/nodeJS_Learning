const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<HTML>");
    res.write("<Head><Title>nodeJS</Title></Head>");
    res.write("<body><h1>Enter your details : </h1></body>");
    res.write('<form action="submit-details" method="POST">');
    res.write(
      '<input type="text" name="username" placeholder="Enter your name"><br>',
    );
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male</label>');
    res.write(
      '<input type="radio" id="female" name="gender" value="female">',
    );
    res.write('<label for="female">Female</label><br>');
    res.write('submit <input type="submit" value="Submit">');
    res.write("</form>");
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
