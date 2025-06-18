var express = require("express");
var router = express.Router();
const books = require("../data/book-data").books;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { books });
});
router.get("/new", function (req, res, next) {
  res.render("new");
});

module.exports = router;
