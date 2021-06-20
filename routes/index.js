var express = require("express");
var router = express.Router();
const pkg = require("../package.json");

/* GET home page. */
router.get("/health", function (req, res, next) {
  res.send({ name: pkg.name, version: pkg.version });
});

module.exports = router;
