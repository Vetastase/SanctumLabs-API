const router = require("express").Router();

/* GET home page */
router.get("/home", (req, res, next) => {
  res.json("Home Page");
});

module.exports = router;