const express = require('express');
const cors = require('cors');

const app = express();

// allow api to be used 
app.use(cors());

app.get('/', (req,res) => {
    res.send("home page")
})

// middleware
const set1Routes = require("./routes/set1");
app.use('/set1', set1Routes);

app.listen(3001, () => console.log("listening at port 3001"));