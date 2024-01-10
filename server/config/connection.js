const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/Codinginterviewpro")
.then(()=> {
    console.log("connected to mongoatlas")
}).catch((e)=>{
    console.log("Unable to connect atlas")
    console.log(e)
});

module.exports = mongoose.connection;