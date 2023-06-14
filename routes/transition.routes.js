const router = require("express").Router();


router.get("/", (req, res, next) => {
    res.json("transition");
});


module.exports = router;