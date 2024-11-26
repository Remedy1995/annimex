
const User = require('../models/User');
const Order = require('../models/Orders');
const BillingAddress = require('../models/BillingAddress');
const ShippingAddress = require('../models/ShippingAddress');
const Product = require('../models/Products');
const { GenerateTransactionId } = require('../init/Transaction');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;


exports.Orders = async (req, res) => {
  const { userId } = req;
  var { billingAddress, shippingAddress } = req.body[0];
  var { items } = req.body[1];

  if (!items) {
    return res.status(422).json({
      status: false,
      message: 'No items to checkout'
    })
  }
  if (!billingAddress || !shippingAddress) {
    return res.status(422).json({
      status: false,
      message: 'No Billing or Shipping Address Available'
    })
  }

  //check if product ids exist 
  console.log('my items', items)

  let totalPrice = 0;
  for (const item of items) {
    const quantity = Number(item.quantity);
    if (isNaN(quantity)) {
      return res.status(400).json({
        status: false,
        message: `Invalid quantity value passed for ${item.product} : ${item.quantity}`
      })
    }
    try {
      const product = await Product.findById(ObjectId(item.product)).exec();
      console.log('prodddd', product)
      //check if the product id for the product exists
      if (!product) {
        return res.status(404).json({
          status: false,
          message: `Product with ${item.product} not found`
        })
      }
      //check if the ordered quantity is more than what we have in stock 
      if (product.quantity < Number(item.quantity)) {
        return res.status(404).json({
          status: false,
          message: `Sorry Not Enough stocks for ${product.name} order a lesser quantity.Available stocks are ${product.quantity}`
        })
      }
      if (product.quantity < 1) {
        return res.status(404).json({
          status: false,
          message: `Sorry No stocks Available for ${product.name}.Try again later`
        })
      }

      //calculate Total Price of ordered Items 

      totalPrice += product.price * item.quantity;

      console.log('my total price', totalPrice)
    }
    catch (error) {
      return res.status(500).json({
        status: false,
        statusCode: 500,
        message: error.message
      })
    }
  }

  try {

    //
    const getUser = await User.findById(userId).exec();
    console.log('get User', getUser)
    //save Billing and Shipping Address
    const createBillingAddress = new BillingAddress(billingAddress);
    const saveBillingAddress = await createBillingAddress.save();
    const createShippingAddress = new ShippingAddress(shippingAddress);
    const saveShippingAddress = await createShippingAddress.save();
    console.log('my save ', saveBillingAddress, saveShippingAddress)


    //take Payment before we proceed to checkout 


    // save the order in the database 
    const createNewOrder = new Order({
      user: getUser._id,
      transaction_id: GenerateTransactionId(),
      items: items.map(item => ({
        product: ObjectId(item.product),//this saves the product id
        quantity: Number(item.quantity) //this saves the quantity bought for each product
      })),
      total: totalPrice,
      billingAddress: saveBillingAddress._id,//save billingAddress 
      shippingAddress: saveShippingAddress._id,
      status: 'pending'
    })

    const createdOrder = await createNewOrder.save();
    //update our product quantity after goods have been sold 
    if (createdOrder) {
      for (const item of items) {
        const quantity = Number(item.quantity);
        console.log(typeof (quantity))
        await Product.findByIdAndUpdate(ObjectId(item.product), { $inc: { quantity: -quantity } }).exec();
      }
    }

    res.status(201).json({
      status: true,
      message: 'You have successfully checked out you will recieve a confirmation Shortly',
      data: createNewOrder.transaction_id
    })
  }
  catch (error) {
    console.log('error', error)
    return res.status(500).json({
      status: false,
      statusCode: 500,
      message: error.message
    })
  }

}


exports.getOrderInformation = async (req, res) => {
  const userId = req.userId;
  const transaction_id = req.query.transaction_id;
  console.log('trans', transaction_id)
  try {
    const orderedInformation = await Order.find({ user: userId, transaction_id: transaction_id }).populate({
      path: "user",
      select: '-password -confirm_password -createdAt'
    }).populate("billingAddress").populate("shippingAddress").populate({
      path: 'items.product',
      model: 'Product'
  }).exec();
    console.log('my ordered info', orderedInformation)

    res.status(200).json({
      status: true,
      message: 'Payment is successfully processsed and your order is on the way<br/>You will receive an order confirmation email with details of your order and a link to track its progress.',
      data: orderedInformation
    })
  }
  catch (error) {
    return res.status(500).json({
      status: false,
      statusCode: 500,
      message: error.message
    })
  }
}