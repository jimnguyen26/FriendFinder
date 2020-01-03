const express = require("express");
const router = express.Router();
const friends = require("../data/friends");

router.get("/api/friends", (req, res) => {
    // console.log("hit our server");
    res.send(friends);
});


// router.get("/api/friends", (req, res) => {
//     res.send(friends);
// });


module.exports = router;