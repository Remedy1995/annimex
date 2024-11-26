const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    shop: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Shop',
        required : true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category',
        required : true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    created_At: {
        type: Date,
        default: Date.now()
    }
})

const Products = mongoose.model("Product", ProductSchema);

module.exports = Products;