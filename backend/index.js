const express = require('express');
const cors = require('cors');

const app = express();

// allow api to be used 
app.use(cors());

app.get('/', (req,res) => {
    res.send("home page")
})

// middleware
const allRoutes = require("./routes/all");
app.use('/all', allRoutes);
const set4Routes = require("./routes/set4");
app.use('/set4', set4Routes);


app.listen(3001, () => console.log("listening at port 3001"));