const mongoose = require('mongoose');
function connect() {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Successfully connected to MongoDB');
    }).catch((err)=>{
        console.log('Error connecting to MongoDB', err.message);
    })
}

module.exports = connect;