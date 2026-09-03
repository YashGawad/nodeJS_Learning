const fs = require("fs");

const addition = (req, res) => {
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const fullBody = Buffer.concat(body).toString();
    console.log(fullBody);

    const params = new URLSearchParams(fullBody);
    const bodyObject = Object.fromEntries(params);
    console.log(bodyObject);
    fs.writeFileSync("user.txt", JSON.stringify(bodyObject));
    const sum = parseInt(bodyObject.number1) + parseInt(bodyObject.number2);
    console.log(sum);

    res.setHeader("Content-type", "text/html")
    res.write(`<h1>Your result is ${sum}`);
    res.end();
  });
};

module.exports = addition;
