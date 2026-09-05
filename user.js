const fs = require("fs");

const userRequestHandler = (req, res) => {
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
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label><br>');
    res.write('<input type="submit" value="Submit">');
    res.write("</form>");
    res.write("</HTML>");
    return res.end();
  } else if (
    req.url.toLocaleLowerCase() === "/submit-details" &&
    req.method === "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);

      const params = new URLSearchParams(fullBody);
      // const bodyObject = {};
      // for (const [key, val] of params.entries()) {
      //   bodyObject[key] = val;
      // }
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      fs.writeFile("user.txt", JSON.stringify(bodyObject), (err) => {
        if (err) {
          console.log(err);
        }
      });
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<HTML>");
    res.write("<Head><Title>nodeJS</Title></Head>");
    res.write("<body><h1>Learning nodeJS and creating projects</h1></body>");
    res.write("</HTML>");
    res.end();
  }
};

module.exports = userRequestHandler;
