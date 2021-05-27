const express = require('express');
const router = express.Router();

const set1 = require("../data/set1.json");

router.get('/', (req,res) => {
    res.send(set1)
})

module.exports = router;