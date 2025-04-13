const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Teste usando Vercel com Node.js\n For more information you can visit my repository: https://github.com/CristianoFranca1976/vercel_node")
});

app.listen(port, () => {
  `Sever is running on port localhost:${port}`
});
