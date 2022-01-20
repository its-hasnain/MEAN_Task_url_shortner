const mongoose = require('mongoose')

const DB_URI = 'mongodb+srv://urlshortner:urlshortner@cluster0.zwate.mongodb.net/Cluster0?retryWrites=true&w=majority'
mongoose.connect(DB_URI,{useNewUrlParser:true, useUnifiedTopology:true})
.then(() => console.log('Connected to a database...'))

    .catch(() => console.error('Could not connect to MongoDB..'));

const connection = mongoose.connection

module.exports = connection
