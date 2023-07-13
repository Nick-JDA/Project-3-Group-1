const mongoose = require('mongoose');
const { Schema } = mongoose;

const ratingSchema = new Schema({
    // Define the fields for the rating
    // For example:
    value: {
        type: Integer,
        required: true
    },
    // ... add more fields as needed
});


const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;


