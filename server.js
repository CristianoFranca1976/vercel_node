const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Teste usando Vercel com Node.js")
});

app.listen(port, () => {
  `Sever is running on port localhost:${port}`
});
