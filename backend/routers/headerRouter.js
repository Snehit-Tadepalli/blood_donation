const express = require("express");
const headerRouter = express.Router();

const headerController = require("../controllers/headerController.js");

const { headerPage } = headerController;

headerRouter.route("/").get(headerPage);

module.exports = headerRouter;
