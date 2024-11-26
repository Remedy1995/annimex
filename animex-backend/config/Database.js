const mongoose = require('mongoose');
const mongoDB = process.env.MONGO_PASSWORD;
const Category = require("../models/Category");


const connectDatabase = async () => {
    try {
        const connection = await mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('You have successfully connected to the database');
        const createIndexes = await Category.init();
        console.log('index successfully created')
        return connection;
    } catch (error) {
        console.log('Connection to the database failed',error)
       /// throw new Error(`Connection to the database failed ${error}`);
    }
}

module.exports = connectDatabase;