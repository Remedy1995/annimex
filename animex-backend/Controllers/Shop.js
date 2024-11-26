const Shop = require('../models/Shop');
const Response = require('../init/Response');
const { ObjectId } = require('mongodb');
const Product = require('../models/Products');



exports.createShop = async (req, res) => {
    try {
        const { name, description, locationOfShop, gpsCordinates, businessStartOfDate, image_url } = req.body;
        const arrayInfo = ["name", "description", "locationOfShop"];
        const information = {
             name: "sdfdsfs",
            description: "I am going",
            locationOfShop: "Accra"
        }

        for (let data of arrayInfo) {
            if (!Object.keys(information).includes(data)) {
                console.log('thedata', data)
                return res.status(422).json({
                    status: false,
                    message: `Sorry missing key parameter ${data}`
                })
            }
            if (!information[data]) {
                return res.status(422).json({
                    status: false,
                    message: `Sorry the ${data} value cannot be empty`
                })
            }

        }

        console.log('info', information)
        
        const createShop = new Shop({
            name: name,
            description: description,
            locationOfShop : locationOfShop,
            gpsCordinates : gpsCordinates,
             businessStartOfDate : businessStartOfDate,
              image_url : image_url
        });

         const saveShop = await createShop.save();
        //update the count for our category products

        // const updateProductCount = await Category.findByIdAndUpdate(category_id, { $inc: { productCount: 1 } });
        // console.log('this is updated', updateProductCount)
        if(saveShop){
            const newSuccess = new Response(201, 'Product has been created successfully', saveShop);
            return res.status(201).json(newSuccess);
        }      
    }
    catch (error) {
        const errorResponse = new Response(500, 'Internal Server Error', error.message)
        return res.status(500).json(errorResponse);
    }
}


exports.allShops = async (req, res) => {
    const perPage = parseInt(req.query.perPage) || 10;
    const page = parseInt(req.query.page) || 1;
    try {
        const shops = await Shop.find().skip((page - 1) * perPage).limit(perPage).sort({ "created_At": -1 });
        const allDocuments = await Shop.countDocuments();

        const allShops = new Response(200, 'Shop',shops);
        const totalpages = Math.ceil(allDocuments / perPage);
        const documentsPerPage = perPage;
        const currentPage = page;
        const allData = { ...allShops, totalpages, documentsPerPage, allDocuments, currentPage }
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


// exports.getSuggestedProducts = async (req, res) => {
//     const categoryName = req.body.category;
//     const perPage = parseInt(req.query.perPage) || 10;
//     const page = parseInt(req.query.page) || 1;
//     const selectedId = req.params.id;
//     console.log(selectedId)


//     if (!ObjectId.isValid(selectedId)) {
//         return res.status(400).json({
//             'error': 'Sorry product id was not found'
//         })
//     }
//     if (!categoryName) {
//         return res.status(404).json({ message: 'Sorry category Name does not exist' })
//     }


//     try {
//         const categoryNameData = await Category.find({
//             name: {
//                 $ne: categoryName
//             }
//         }).exec();

//         //get only the category Ids from the array of data

//         const categoryIds = categoryNameData.map((ids) => ids._id);
//         console.log('my CategoryIds', categoryNameData)


//         const product = await Product.find({
//             _id: { $ne: selectedId },
//             category: { $in: categoryIds }
//         }).populate('category').skip((page - 1) * perPage).limit(perPage).sort({ "created_At": -1 });

//         if (!product) {
//             return res.status(404).json({ 'message': 'Sorry no products found' })
//         }
//         console.log('prod', product);

//         //count the total number of products that matches the selected item
//         const totalProducts = await Product.countDocuments({
//             _id: { $ne: selectedId },
//             : { $in: categoryIds }
//         });
//         const allDocuments = totalProducts;
//         console.log('my total p', totalProducts)
//         const allProducts = new Response(200, 'Products', product);
//         const totalpages = Math.ceil(allDocuments / perPage);
//         const documentsPerPage = perPage;
//         const currentPage = page;
//         const allData = { ...allProducts, totalpages, documentsPerPage, allDocuments, currentPage }
//         return res.status(200).json(allData);
//     } catch (error) {
//         const errorResponse = new Response(500, 'Internal Server Error', error.message)
//         return res.status(500).json(errorResponse);
//     }
// }






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





exports.getProductsAndCategoryBasedOnShopName = async (req, res) => {
    const perPage = parseInt(req.query.perPage) || 10;
    const page = parseInt(req.query.page) || 1;
    const shopId = req.query.shopId;
    if (!shopId) {
        return res.status(400).json({
            'error': 'Sorry No Shop Id found'
        })
    }
    try {
        const shop = await Product.find({
            shop: shopId
        }).populate('shop').populate('category').skip((page - 1) * perPage).limit(perPage).sort({ "created_At": -1 });
        return res.json(shop)

        if (!shop) {
            return res.status(404).json({ 'message': 'Sorry no shops found' })
        }
        console.log('shop', shop.length);
       // count the total number of products a shop sells
        const totalProducts = await Product.countDocuments({
            shop: shopId._id
        });
        const allDocuments = totalProducts;

        const allProducts = new Response(200, 'Products',shop);
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


