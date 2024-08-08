const express = require("express");

const router = express.Router();

const MenueItem = require('../models/menue');

router.post('/',async (req,res)=>{
    try{
        const data = req.body;

        const newMenue = new MenueItem(data);

        const response = await newMenue.save();

        console.log('data saved\n');

        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal error occured\n'});
    }
});


router.get('/',async (req,res)=>{
    try{
        const response = await MenueItem.find();

        console.log('data fetched\n');

        res.status(200).json(response);
    }
    catch{
        console.log(err);
        res.status(500).json({error:'Internal error occured\n'});
    }
});

module.exports = router;