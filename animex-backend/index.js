const express = require("express");
const PORT = process.env.PORT || 3001;
const path = require('path');
require('dotenv').config();
const SMS = require('./routes/PhoneSMSRoutes');
const Auth = require('./routes/AuthRoutes');
const app = express();
const Product = require('./routes/ProductsRoutes');
const connection = require('./config/Database');


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname + '/public/build')));

//routes
app.use('/auth', Auth);
app.use('/products', Product);
app.use('/phonesms', SMS);

//connection to the database
connection();


app.listen(PORT, () => {
  console.log(`Server is now running on ${PORT}`);
});
