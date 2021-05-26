const express = require('express');
const router = express.Router();

const all = require("../data/all.json");

router.get('/', (req,res) => {
    res.send(all)
})

module.exports = router;