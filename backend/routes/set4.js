const express = require('express');
const router = express.Router();

const set4 = require("../data/set4.json");

router.get('/', (req,res) => {
    res.send(set4)
})

module.exports = router;