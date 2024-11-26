const express = require("express");
const PORT = process.env.PORT || 3001;
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const SMS = require('./routes/PhoneSMSRoutes');
const Auth = require('./routes/AuthRoutes');
const app = express();
const Product = require('./routes/ProductsRoutes');
const Category = require('./routes/CategoryRoutes');
const Orders = require('./routes/OrderRoutes');
const Shop = require('./routes/ShopRoutes');
const connection = require('./config/Database');

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname + '/public/build')));
app.use((express.json()));

app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/build', 'index.html'));
});

app.use((err, req, res, next) => {
  console.log(err)
  if (err instanceof SyntaxError && err.status === 400) {
    return res.status(400).json({
      status: false,
      message: 'Invalid JSON Data Passed'
    })
  }
  console.log('my errr', err)
})
//routes
app.use('/auth', Auth);
app.use('/products', Product);
app.use('/category', Category);
app.use('/orders', Orders);
app.use('/phonesms', SMS);
app.use('/shop', Shop);

//connection to the database
connection();


app.listen(PORT, () => {
  console.log(`Server is now running on ${PORT}`);
});


