const mongoose = require('mongoose');


const BillingAddressSchema = new mongoose.Schema({
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
   saveBillingDetailsToAccount : {
    type :Boolean,
    required : true
   },
   createdAt: {
    type: Date, default: Date.now()
}

})


const BillingAddress = mongoose.model("BillingAddress",BillingAddressSchema)

module.exports = BillingAddress;