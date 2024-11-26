const mongoose = require('mongoose');


const shippingAddressSchema = new mongoose.Schema({
    streetAddress1 :  {
        type : String ,
        required : true
    },
   streetAddress2 : {
    type : String
   },
   postalCode : {
    type : String ,
    required : true
   },
   country : {
    type : String ,
    required : true
   },
   state :  {
    type : String,
    required : true
   }
   ,
   saveShippingDetailsToAccount : {
    type :Boolean,
    required : true
   },
   createdAt: {
    type: Date, default: Date.now()
}

})

const shippingAddress =  mongoose.model("ShippingAddress",shippingAddressSchema);

module.exports = shippingAddress;