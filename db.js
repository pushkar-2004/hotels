const mongoose = require("mongoose");
const mongoURL = 'mongodb://localhost:27017/hotels'

mongoose.connect(mongoURL,{
})

const db = mongoose.connection;

db.on('connected',()=>{
    console.log("connected to MongoDB database\n");
});

db.on('error',()=>{
    console.log("error connecting to mongodb\n");
});

db.on('disconnected',()=>{
    console.log("database disconnected\n");
});

module.exports = db;