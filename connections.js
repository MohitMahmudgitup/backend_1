const mongoose = require('mongoose')
// Mongo Connection

async function ConnectionMongo(url){
    return mongoose.connect(url)
} 

 module.exports = {ConnectionMongo}

