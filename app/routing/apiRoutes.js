const express = require("express");
const router = express.Router();
const friends = require("../data/friends");

router.get("/", (req, res) => {
    console.log("hit our server");
    res.send("nice");
});



module.exports = router;