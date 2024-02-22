const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://jigyanshukumawat:SJ7jRHmzfp9Tdwot@cluster0.fszuh04.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
    }
};

module.exports = connectDB;
