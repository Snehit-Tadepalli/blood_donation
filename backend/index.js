const express = require("express");
const app = express();
require("dotenv").config({ path: "./.env" });
const mongoose = require("mongoose");

const port = process.env.PORT;
const middleware = require("./middleware/cors");

app.use(middleware.corsMiddleware);

app.get("*", (req, res) => {
  res.status(200).json({ message: "Welcome" });
});

app.listen(port, () => console.log(`Server at port: ${port}`));
