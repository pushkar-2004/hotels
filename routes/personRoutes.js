const express = require('express');

const router = express.Router();

const Person = require('../models/Person');


// creating new document in mongodb

router.post('/',async (req,res)=>{
    try{
        const data = req.body //assuming the request body contains the person data

        // create a new person document
        const newPerson = new Person(data);

        // save the new person to database
        const response = await newPerson.save();

        console.log('data saved');

        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal error occured\n'});
    }
});

// app method to get the person

router.get('/',async (req,res)=>{
    try{

        const response = await Person.find();

        console.log('data fetched\n');

        res.status(200).json(response);

    }catch(err){

        console.log(err);
        res.status(500).json({error:'Internal error occured\n'});

    }
});

// variables in url
router.get('/:workType',async(req,res)=>{
    try{
        const workType = req.params.workType;
        if(workType=='chef' || workType=='manager' || workType=='waiter'){
            const response = await Person.find({work:workType});
            console.log("information fetched\n");
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error:'Internal server error\n'});
        }
    }
    catch{
        console.log(err);
        res.status(500).json({error:'Internal error occured\n'});
    }
});

module.exports = router;