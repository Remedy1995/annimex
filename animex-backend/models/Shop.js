const mongoose = require('mongoose');

const ShopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
         unique : true    
    },
    description : {
        type :String,
        required : true
    },
    locationOfShop : {
     type : String,
     required : true
    },
    gpsCordinates : [
    {
      longitude : { type : String },
      latitude : { type : String}
    }
    ],
    businessStartOfDate : {
      type : String ,
      //required : true
    },
    image_url : {
        type : String,
        required : true
    },
    createdAt: {
        type: Date, default: Date.now()
    }
})

const Shop = mongoose.model("Shop",ShopSchema);

module.exports = Shop;