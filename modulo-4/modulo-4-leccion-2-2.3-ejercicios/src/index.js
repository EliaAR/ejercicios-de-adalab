const express = require("express");
const cors = require("cors");

// create server
const server = express();

// set express middleware
server.use(express.json());
server.use(cors());

// init express aplication
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
const staticServerPath = "./public";
server.use(express.static(staticServerPath));

// users

const users = []; // fake users data base

// api endpoints

server.post("/user", (req, res) => {
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

server.get("/users", (req, res) => {
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
