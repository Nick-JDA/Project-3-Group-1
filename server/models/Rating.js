const mongoose = require('mongoose');

const { Schema } = mongoose;

const ratingSchema = new Schema({
    rate: {
      type: Number,
      require: true,
    },
  });
  
  const Review = mongoose.model('Number', ratingSchema);
  
  module.exports = Review;