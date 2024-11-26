const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
         enum : ['Sneakers','Women','Men','Jeans','Belts','Shoes','Clothing'],
         unique : true    
    },
    productCount : {
        type : Number,
        default : 0
    },
    image_url : {
        type : String,
        required : true
    },
    createdAt: {
        type: Date, default: Date.now()
    }
})
//binding constraint such that name is not duplicate
CategorySchema.index({name : 1}, {unique : true});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;