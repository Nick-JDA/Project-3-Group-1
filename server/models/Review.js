const { Schema, model } = require("mongoose");
const ratingSchema = require("./Rating");

const reviewSchema = new Schema(
  {
    text: {
        type: String,
        required: true,
    },
    ratings: {
      type: Schema.Types.ObjectId,
      ref: "Rating",
  }   
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
)

reviewSchema.virtual("ratingCount").get(function() {
  return this.ratings.length;
})

const Review = model('Review', reviewSchema);

module.exports = Review;