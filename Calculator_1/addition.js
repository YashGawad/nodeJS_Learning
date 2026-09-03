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
  });
};

module.exports = addition;
