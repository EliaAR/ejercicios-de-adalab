const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

const staticServerPath = "./public";
app.use(express.static(staticServerPath));

const users = [];

app.post("/user", (req, res) => {
  console.log("Body params:", req.body);
  console.log("Body param userName:", req.body.userName);
  console.log("Body param userEmail:", req.body.userEmail);
  users.push({
    name: req.body.userName,
    email: req.body.userEmail,
  });
  res.json({
    result: "User created",
  });
});

app.post("/users", (req, res) => {
  const filterByName = req.body.filterByName;
  const filterByMail = req.body.filterByMail;
  console.log(filterByName);
  console.log(filterByMail);
  const filterUsers = users
    .filter((user) => user.name.includes(filterByName))
    .filter((user) => user.email.includes(filterByMail));
  console.log(filterUsers);
  res.json({
    result: filterUsers,
  });
});
