const express = require("express");
const cors = require("cors");

const server = express();

server.use(cors());
server.use(express.json());

const serverPort = 3500;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// STATIC SERVER: listen files in public folder
const staticServerPath = "./public"; // relative to the root of the project
server.use(express.static(staticServerPath));

// API: listen fetch requests

// API request > GET > http://localhost:3000/users
server.post("/users", (req, res) => {
  const response = {
    users: [{ name: "Sofía" }, { name: "María" }],
  };
  res.json(response);
});

// API request > POST > http://localhost:3000/new-user
server.post("/users/add", (req, res) => {
  // console request body params
  console.log(
    `Creating the user in database with user name: "${req.body.userName}"`
  );
  const response = {
    result: `User created: ${req.body.userName}`,
  };
  res.json(response);
});
