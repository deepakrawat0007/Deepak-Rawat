const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const Routes = require("./Routes/route")
const SingleQueryRoute = require("./Routes/singleQueryRoute")

app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use("/" , Routes)
app.use("/" , SingleQueryRoute)

app.get('/',(req,res)=>{
    res.status(200).json({
        "Message":"Server is OK"
    })
})

module.exports = app