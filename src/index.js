const express = require("express");
const v1Historial = require("./v1/routes/historialRoutes");
const app = express();

const PORT = process.env.PORT || 3000;

app.use("/api/v1/historial", v1Historial);

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(PORT, () => {
  console.log(`🚀ServerListening on port ${PORT}`);
});
