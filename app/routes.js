const express = require("express");
const router = express.Router();

const endpoints = require("./endpoints");

router.get("/", endpoints.home);
router.get("/graylog/test", endpoints.input);

module.exports = router;
