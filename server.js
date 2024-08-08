const express = require("express");
const app = express();

const db = require("./db");

const bodyParser = require('body-parser');
app.use(bodyParser.json());




app.get('/',function(req,res){
    res.send('hello from server');
})

const personRoutes = require("./routes/personRoutes");
const menueRoutess = require("./routes/menueRoutes");
app.use('/person',personRoutes);
app.use('/menue',menueRoutess);

app.listen(3000,()=> console.log("server listening on port 3000\n"));