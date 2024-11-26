
const Category = require('../models/Category');
const Response = require('../init/Response');


exports.createCategory = async (req,res) => {
    let categoryName = req.body.category_name;
    let imageUrl = req.body.image_url;
    if(!categoryName){
        return res.status(400).json({ message : 'Sorry category_name is required'})
    }

    if(!imageUrl){
        return res.status(400).json({ message : 'Sorry image_url is required'})
    }
     try {
       const category =  new Category({
        name : categoryName,
        image_url : imageUrl
       })

       const createCategory = await category.save();
       if (createCategory){
        return res.status(201).json({'status' : true , message : 'Category has been successfully created'});
       }

     }
     catch (error){
        const errorResponse = new Response(500, 'Internal Server Error', error.message)
        return res.status(500).json(errorResponse);
     }

}


exports.getAllCategory = async(req,res)=> {
    try {

        const category = await Category.find({}).exec();
        return res.status(200).json({
            status : true,
            data : category
        })
    } catch (error){
        const errorResponse = new Response(500, 'Internal Server Error', error.message)
        return res.status(500).json(errorResponse);
    }
}

