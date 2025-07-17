const mongoose = require('mongoose');
const serverConfig = require('./serverConfig');


// The below function helps us to connect to mongo db server

async function connectDB() {
    try{
        await mongoose.connect(serverConfig.DB_URL);
        console.log('Database connected successfully');
    }catch(error) {
        console.error('Database connection failed:', error);
         // Exit the process with failure
    }

}

module.exports = connectDB;
