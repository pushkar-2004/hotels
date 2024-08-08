const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true,
    },
    mobile:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
    }
});

const Person = mongoose.model('Person',personSchema);
module.exports = Person;
