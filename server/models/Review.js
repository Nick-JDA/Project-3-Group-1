const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema({
    text: {
      type: String,
      require: true,
    },
  });
  
  const Review = mongoose.model('Review', reviewSchema);
  
  module.exports = Review;