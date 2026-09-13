const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();

const PORT = 3003;

//Middleware (plugin for body)
app.use(express.urlencoded({ extendes: false }));

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ id: users.length + 1, ...body });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to write to file" });
    } else {
      return res.status(200).json({ message: "Data written to file" });
    }
  });
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    return res.json({ status: "pending" });
  });

// app.patch("/api/users/:id", (req, res) => {
//   return res.json({ status: "pending" });
// });

// app.delete("/api/users/:id", (req, res) => {
//   return res.json({ status: "pending" });
// });

// app.get("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id);
//   return res.json(user);
// });

app.listen(PORT, () => {
  console.log(`Server is running at : http://localhost:${PORT}`);
});
