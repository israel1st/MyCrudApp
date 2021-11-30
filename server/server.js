const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express()

//Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Get Retrieve data from server
app.get('/', (req, res) => {
    res.json("Hello Amazon clone");
});

//Post -Send data  from Front end to back end
app.post('/', (req, res) => {
    console.log(req.body.name);
});

app.listen(3000, err => {
    if(err) {
        console.log(err);
    } else {
        console.log("Listening on Port", 3000)
    }
});  
 