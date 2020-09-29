const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");
const config = require("./config");

const settings = config();

const api = express();

api.use(cors());
api.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

api.use(bodyParser.json());

api.use(routes);

api.listen(settings.port);

console.log(
  `GRAYLOG POC - API Rodando.. em http://localhost:${settings.port}`
);
