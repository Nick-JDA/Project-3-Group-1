
const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema({
    text: {
        type: String,
        
    },
    ratings: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Rating'
        }
      ]   
})

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
