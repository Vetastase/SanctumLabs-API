const router = require("express").Router();

/* GET home page */
router.get("/home", (req, res, next) => {
  res.json("bla bla");
});

module.exports = router;