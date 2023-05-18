const express = require("express");
const app = express();
require("dotenv").config({ path: "./.env" });

const port = process.env.PORT;
const middleware = require("./middleware/cors");
const headerRouter = require("./routers/headerRouter");

app.use(middleware.corsMiddleware);

app.use("/header", headerRouter);

app.use((err, req, res, next) => {
  console.log("Reached");
});

app.listen(port, () => console.log(`Server at port: ${port}`));
