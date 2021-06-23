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

app.get("/response-a", (req, res) => {
  res.json({ result: 'ok' });
});

// app.get("/response-b", (req, res) => {
//   res.send(
//     <!DOCTYPE html>
//     <html lang="es">
//       <head>
//         <title>Pruebita</title>
//           </head>
//       <body class="page">
//         <header>
//           <h1>Esta es una página de prueba</h1>
//           </header>
//       </body>
//     </html>);
//  });

app.get("/response-c", (req, res) => {
  const number = Math.floor(Math.random()*10+1)
  res.json({ result: number })
});

app.get("/response-d", (req, res) => {
  const queryParams = "?user=1&user=2";
  res.status(200).json({ result: "ok" })
});