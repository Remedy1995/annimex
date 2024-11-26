const Product = require('../models/Products');
const Shop = require('../models/Shop');
const Category = require('../models/Category');
const Response = require('../init/Response');
const { ObjectId } = require('mongodb');



exports.createProducts = async (req, res) => {
    try {
        const { name, description, price, quantity, image_url, category_id, shop_id } = req.body;

        if (!category_id) {
            return res.status(404).json({ message: 'Sorry category id does not exist' })
        }
        if (!ObjectId.isValid(category_id)) {
            return res.status(400).json({ message: 'Sorry category id is not valid' });
        }

        const createProduct = new Product({
            name: name,
            description: description,
            price: price,
            quantity: quantity,
            category: category_id,
            image_url: image_url,
            shop: shop_id
        });

        const saveProduct = await createProduct.save();
        //update the count for our category products

        const updateProductCount = await Category.findByIdAndUpdate(category_id, { $inc: { productCount: 1 } });
        console.log('this is updated', updateProductCount)
        const newSuccess = new Response(201, 'Product has been created successfully', saveProduct);
        return res.status(201).json(newSuccess);
    }
    catch (error) {
        const errorResponse = new Response(500, 'Internal Server Error', error.message)
        return res.status(500).json(errorResponse);
    }
}


exports.allProducts = async (req, res) => {
    const perPage = parseInt(req.query.perPage) || 10;
    const page = parseInt(req.query.page) || 1;
    try {
        const products = await Product.find().populate('category').skip((page - 1) * perPage).limit(perPage).sort({ "created_At": -1 });
        const allDocuments = await Product.countDocuments();

        const allProducts = new Response(200, 'Products', products);
        const totalpages = Math.ceil(allDocuments / perPage);
        const documentsPerPage = perPage;
        const currentPage = page;
        const allData = { ...allProducts, totalpages, documentsPerPage, allDocuments, currentPage }
        return res.status(200).json(allData)

    }
    catch (error) {
        const errorResponse = new Response(500, 'Internal Server Error', error.message)
        return res.status(500).json(errorResponse);
    }
}


exports.getSingleProduct = async (req, res) => {

    const product_id = req.params.id;
    try {

        if (!ObjectId.isValid(product_id)) {
            return res.status(400).json({ 'error': 'Sorry product id is not valid' })
        }
        const product = await Product.findById(ObjectId(product_id)).populate('category').exec();
        if (!product) {
            const errorResponse = new Response(404, 'Not found', 'product id does not exist')
            return res.status(404).json(errorResponse);
        }

        return res.status(200).json(product)
    }
    catch (error) {
        const errorResponse = new Response(500, 'Internal Server Error', error.message)
        return res.status(500).json(errorResponse);
    }
}


exports.getRelatedProducts = async (req, res) => {
    const perPage = parseInt(req.query.perPage) || 10;
    const page = parseInt(req.query.page) || 1;
    const selectedId = req.params.id;
    const category = req.body.category;
    console.log(selectedId)


    if (!ObjectId.isValid(selectedId)) {
        return res.status(400).json({
            'error': 'Sorry product id was not found'
        })
    }
    try {

        //*******************************************get selected product category id*************************************/
        const categoryId = await Category.findOne({ name: category }).exec();

        //********************************************for example*********************************************************/
        //**********when a user selects a sneaker the related item should not include the selected sneaker****************/
        //***********************************but can include other different sneakers*************************************/
        //*********also the related items category should be the same as the selected item category ***********/
        //******************so related products should have only matching category of sneakers and not any other category */

        console.log('category id', categoryId)
        //*****************the category id is placed in this query to fetch matching products from the category******/
        //***********************the selected id excludes the selected product from the data*************************/
        const product = await Product.find({
            _id: { $ne: selectedId },
            category: categoryId._id
        }).populate('category').skip((page - 1) * perPage).limit(perPage).sort({ "created_At": -1 });

        if (!product) {
            return res.status(404).json({ 'message': 'Sorry no products found' })
        }
        console.log('prod', product.length);
        //count the total number of products that matches the selected item
        const totalProducts = await Product.countDocuments({
            _id: { $ne: selectedId },
            category: categoryId._id
        });
        const allDocuments = totalProducts;

        const allProducts = new Response(200, 'Products', product);
        const totalpages = Math.ceil(allDocuments / perPage);
        const documentsPerPage = perPage;
        const currentPage = page;
        const allData = { ...allProducts, totalpages, documentsPerPage, allDocuments, currentPage }
        return res.status(200).json(allData);
    }
    catch (error) {
        const errorResponse = new Response(500, 'Internal Server Error', error.message)
        return res.status(500).json(errorResponse);
    }
}


exports.getSuggestedProducts = async (req, res) => {
    const categoryName = req.body.category;
    const perPage = parseInt(req.query.perPage) || 10;
    const page = parseInt(req.query.page) || 1;
    const selectedId = req.params.id;
    console.log(selectedId)


    if (!ObjectId.isValid(selectedId)) {
        return res.status(400).json({
            'error': 'Sorry product id was not found'
        })
    }
    if (!categoryName) {
        return res.status(404).json({ message: 'Sorry category Name does not exist' })
    }


    try {
        const categoryNameData = await Category.find({
            name: {
                $ne: categoryName
            }
        }).exec();

        //get only the category Ids from the array of data

        const categoryIds = categoryNameData.map((ids) => ids._id);
        console.log('my CategoryIds', categoryNameData)


        const product = await Product.find({
            _id: { $ne: selectedId },
            category: { $in: categoryIds }
        }).populate('category').skip((page - 1) * perPage).limit(perPage).sort({ "created_At": -1 });

        if (!product) {
            return res.status(404).json({ 'message': 'Sorry no products found' })
        }
        console.log('prod', product);

        //count the total number of products that matches the selected item
        const totalProducts = await Product.countDocuments({
            _id: { $ne: selectedId },
            category: { $in: categoryIds }
        });
        const allDocuments = totalProducts;
        console.log('my total p', totalProducts)
        const allProducts = new Response(200, 'Products', product);
        const totalpages = Math.ceil(allDocuments / perPage);
        const documentsPerPage = perPage;
        const currentPage = page;
        const allData = { ...allProducts, totalpages, documentsPerPage, allDocuments, currentPage }
        return res.status(200).json(allData);
    } catch (error) {
        const errorResponse = new Response(500, 'Internal Server Error', error.message)
        return res.status(500).json(errorResponse);
    }
}






exports.getSuggestedMultipleProducts = async (req, res) => {
    const excludeCategoryNames = req.body.category || [];
    const perPage = parseInt(req.query.perPage) || 10;
    const page = parseInt(req.query.page) || 1;
    const excludeIds = req.body.id || [];


    const invalidIds = excludeIds.filter((id) => !ObjectId.isValid(id));

    if (invalidIds.length > 0) {
        return res.status(400).json({
            'error': 'Sorry one or more products ids provided are incorrect'
        })
    }
    if (excludeCategoryNames.length < 1) {
        return res.status(404).json({ message: 'Sorry one or more category Names does not exist' })
    }


    try {

        //retrieve categories excluding provided category names
        const categoryNameData = await Category.find({
            name: {
                $nin: excludeCategoryNames
            }
        }).exec();

        //get only the category Ids from the array of data

        const categoryIds = categoryNameData.map((ids) => ids._id);
        console.log('my CategoryIds', categoryIds)
        const ObjectIdArray = excludeIds.map((exIds) => ObjectId(exIds));
        //display products excluding the provided ids of the products and within the category ids 
        const product = await Product.find({
            _id: { $nin: ObjectIdArray },
            category: { $in: categoryIds }
        }).populate('category').skip((page - 1) * perPage).limit(perPage).sort({ "created_At": -1 });
        console.log('hi', product)
        if (!product) {
            return res.status(404).json({ 'message': 'Sorry no products found' })
        }
        console.log('prod', product);

        //count the total number of products that matches the selected item
        const totalProducts = await Product.countDocuments({
            _id: { $nin: ObjectIdArray },
            category: { $in: categoryIds }
        });
        const allDocuments = totalProducts;
        console.log('my total p', totalProducts)
        const allProducts = new Response(200, 'Products', product);
        const totalpages = Math.ceil(allDocuments / perPage);
        const documentsPerPage = perPage;
        const currentPage = page;
        const allData = { ...allProducts, totalpages, documentsPerPage, allDocuments, currentPage }
        return res.status(200).json(allData);
    } catch (error) {
        const errorResponse = new Response(500, 'Internal Server Error', error.message)
        return res.status(500).json(errorResponse);
    }
}





exports.getProductBasedOnCategory = async (req, res) => {
    const perPage = parseInt(req.query.perPage) || 10;
    const page = parseInt(req.query.page) || 1;
    const selectedId = req.params.id;
    const category = req.query.category;
    let shop = req.query.shop;
    shop = 'Asamoah';
    console.log('my selected shop', shop, category, page)
    if (!category) {
        return res.status(400).json({
            'error': 'Sorry Category was not found'
        })
    }
    try {
        const shopId = await Shop.findOne({ name: shop }).exec();
        console.log(shopId)
        const categoryId = await Category.findOne({ name: category }).exec();
        console.log('category id', categoryId)

        let product = await Product.find({
            category: categoryId._id
        }).populate('category').populate('shop').skip((page - 1) * perPage).limit(perPage).sort({ "created_At": -1 });
        // if particular shop is selected only display categories that matches the shop
        if (shop && shopId) {
            product = await Product.find({
                category: categoryId._id,
                shop: shopId._id
            }).populate('category').populate('shop').skip((page - 1) * perPage).limit(perPage).sort({ "created_At": -1 });

        }
        console.log('my shop products', product)
        return true;
        if (!product) {
            return res.status(404).json({ 'message': 'Sorry no products found' })
        }
        console.log('prod', product.length);
        //count the total number of products that matches the selected item
        const totalProducts = await Product.countDocuments({
            _id: { $ne: selectedId },
            category: categoryId._id
        });
        const allDocuments = totalProducts;

        const allProducts = new Response(200, 'Products', product);
        const totalpages = Math.ceil(allDocuments / perPage);
        const documentsPerPage = perPage;
        const currentPage = page;
        const allData = { ...allProducts, totalpages, documentsPerPage, allDocuments, currentPage }
        return res.status(200).json(allData);
    }
    catch (error) {
        const errorResponse = new Response(500, 'Internal Server Error', error.message)
        return res.status(500).json(errorResponse);
    }
}



exports.deleteProduct = async (req, res) => {

    const product_id = req.params.id;
    try {

        if (!ObjectId.isValid(product_id)) {
            return res.status(400).json({ 'error': 'Sorry product id is not valid' })
        }
        const product = await Product.findById(ObjectId(product_id)).exec();
        if (!product) {
            const errorResponse = new Response(404, 'Not found', 'product id does not exist')
            return res.status(404).json(errorResponse);
        }


        const deleteProduct = await product.remove();
        console.log(product.category)
        if (deleteProduct) {
            //update the category product after we have deleted a product 
            const updateCategoryProductCount = await Category.findByIdAndUpdate(product.category, { $inc: { productCount: -1 } });
            console.log('the update product count', updateCategoryProductCount)
            return res.status(200).json({ status: true, message: 'The product has been deleted successfully' })
        }

    }
    catch (error) {
        const errorResponse = new Response(500, 'Internal Server Error', error.message)
        return res.status(500).json(errorResponse);
    }
}


