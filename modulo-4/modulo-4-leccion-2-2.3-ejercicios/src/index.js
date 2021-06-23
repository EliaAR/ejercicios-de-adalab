const express = require("express");
const cors = require("cors");

// create server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
const staticServerPath = "./public";
app.use(express.static(staticServerPath));

// users

const users = []; // fake users data base

// api endpoints

app.post("/user", (req, res) => {
  console.log("Query params:", req.query);
  console.log("Query param userName:", req.query.userName);
  console.log("Query param userEmail:", req.query.userEmail);

  // add new user to daba base
  users.push({
    name: req.query.userName,
    email: req.query.userEmail,
  });

  res.json({
    result: "User created",
  });
});

app.get("/users", (req, res) => {
  const filterByName = req.query.filterByName;
  const filterByMail = req.query.filterByMail;
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
