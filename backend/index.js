const express = require('express');
const cors = require('cors');

// data files
const decks = require("./data/decks.json")

const app = express();

// allow api to be used 
app.use(cors());

app.get('/', (req,res) => {
    res.send(decks)
})

// middleware
const set1Routes = require("./routes/set1");
app.use('/set1', set1Routes);

app.listen(3001, () => console.log("listening at port 30001"));