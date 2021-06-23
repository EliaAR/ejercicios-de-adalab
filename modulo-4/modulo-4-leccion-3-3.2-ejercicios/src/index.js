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

app.get("/response-a", (req, res) => {
  res.json({ result: "ok" });
});

app.get("/response-b", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <title>Pruebita</title>
          </head>
      <body class="page">
        <header>
          <h1>Esta es una página de prueba</h1>
          </header>
      </body>
    </html>`);
});

app.get("/response-c", (req, res) => {
  const number = Math.floor(Math.random() * 10 + 1);
  const isEven = number % 2 === 0;
  res.redirect(
    isEven ? "https://www.youtube.com/" : "https://www.instagram.com/"
  );
});

app.get("/response-d", (req, res) => {
  if (req.query.user === "1" || req.query.user === "2") {
    res.status(200).json({ result: "ok" });
  } else {
    res.status(404).json({ result: "error: invalid query param" });
  }
});
