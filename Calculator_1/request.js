const addition = require("./addition");

const incomingRequestHandler = (req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<HTML>");
    res.write("<Head><Title>Navigation</Title></Head>");
    res.write("<body>");
    res.write("<h1>Welcome to our calculator</h1> </br>");
    res.write('<a href="/calculator">Open Calculator</a>');
    res.write("</body>");
    res.write("</HTML>");
    res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-type", "text/html")
    res.write('<form action="addition" method="POST">');
    res.write(
      '<input type="number" name="number1" placeholder="Enter 1st number"><br>',
    );
    res.write(
      '<input type="number" name="number2" placeholder="Enter 2nd number"><br>',
    );
    res.write('<input type="submit" value="Submit">');
    res.write("</form>");

    res.end();
  }
  else if(req.url.toLowerCase() === "/addition"){
    
    addition(req, res);

  }
};

module.exports = incomingRequestHandler;
