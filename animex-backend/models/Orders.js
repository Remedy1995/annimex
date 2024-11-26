const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({

    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    transaction_id : {type : String ,required : true},
    items: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true, default: 1 },
            category : { type : mongoose.Schema.Types.ObjectId,ref : 'Category',required : true},
             shop : { type : mongoose.Schema.Types.ObjectId,ref : 'Shop',required : true}
        }],
    total: { type: Number, required: true },
    billingAddress: { type: mongoose.Schema.Types.ObjectId, ref: 'BillingAddress', required: true },
    shippingAddress: { type: mongoose.Schema.Types.ObjectId, ref: 'ShippingAddress', required: true },
    status: { type: String, enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'], default: 'pending' },
    createdAt: {
        type: Date, default: Date.now()
    }

})

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;