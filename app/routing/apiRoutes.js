const express = require("express");
const router = express.Router();
const friends = require("../data/friends");

router.get("/api/friends", (req, res) => {
    console.log("hit our server");
    res.send(friends);
});

router.post("/api/friends", (req, res) => {
    console.log(req.body.scores);

    const user = req.body;

    for(let i = 0; i < user.scores.length; i++) {
        user.scores[i] = parseInt(user.scores[i]);
    }

    let bestFriendIndex = 0;
    let minimumDifference = 40;

    for(let i = 0; i < friends.length; i++) {
        let totalDifference = 0;
            for(let j = 0; j < friends[i].scores.length; j++) {
            let difference = Math.abs(user.scores[j] - friends[i].scores[j]);
            totalDifference += difference;
        }

        if(totalDifference < minimumDifference) {
        bestFriendIndex = i;
        minimumDifference = totalDifference;
        }
    }

    friends.push(user);

    res.json(friends[bestFriendIndex]);
});


module.exports = router;
