const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
    console.log("working");
});

router.use("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "../public.survey.html"));
    console.log("working!!!");
});

module.exports = router;