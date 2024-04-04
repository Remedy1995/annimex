const Product = require('../models/Products');
const Response = require('../init/Response');


exports.createProducts = async (req, res) => {
    try {
        const { name, description, price, quantity, image_url } = req.body;

        const createProduct = new Product({
            name: name,
            description: description,
            price: price,
            quantity: quantity,
            image_url: image_url
        });

        const saveProduct = await createProduct.save();
        const newSuccess = new Response(201, 'Product has been created successfully', saveProduct);
        return res.status(201).json(newSuccess);
    }
    catch (error) {
        const errorResponse = new Response(500, 'Internal Server Error', error.message)
        return res.status(500).json(errorResponse);
    }
}