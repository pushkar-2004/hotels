const mongoose = require("mongoose");

// name , price, taste, is_dringk, ingredients,num_sales;

const menueSchema = mongoose.Schema({
    name:{
        type:String,
    },
    price:{
        type:Number,
    },
    taste:{
        type:String,
        enum:["sweet","spicy","sour"],
    },
    is_drink:{
        type:Boolean,
        default:false,
    },
    ingredients:{
        type:[String],
        default:[],
    },
    num_sales:{
        type:Number,
        default:0
    },
});

const MenueItem = mongoose.model("MenueItem",menueSchema);

module.exports = MenueItem;