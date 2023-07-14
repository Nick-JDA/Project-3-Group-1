const User = require("./models/User");
const Game = require("./models/Game");
const Review = require("./models/Review");
const Rating = require("./models/Rating");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("./utils/auth");
const resolvers = {
  Query: {
    me: async (_, __, context) => {
      if (context.user) {
        try {
          const user = await User.findById(context.user._id);
          return user;
        } catch (error) {
          throw new Error(error);
        }
      }
      throw new AuthenticationError("Not logged in");
    },
  },
  Mutation: {
    login: async (_, { email, password }) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          throw new AuthenticationError("Incorrect email or password");
        }
        const correctPassword = await user.isCorrectPassword(password);
        if (!correctPassword) {
          throw new AuthenticationError("Incorrect email or password");
        }
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        throw new Error(error);
      }
    },
    addUser: async (_, { username, email, password }) => {
      try {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        throw new Error(error);
      }
    },
    saveGame: async (_, { input }, context) => {
      if (context.user) {
        try {
          const user = await User.findByIdAndUpdate(
            context.user._id,
            { $push: { gameCart: input } },
            { new: true }
          );
          return user;
        } catch (error) {
          throw new Error(error);
        }
      }
      throw new AuthenticationError("Not logged in");
    },
    removeGame: async (_, { gameId }, context) => {
      if (context.user) {
        try {
          const user = await User.findByIdAndUpdate(
            context.user._id,
            { $pull: { gameCart: { _id: gameId } } },
            { new: true }
          );
          return user;
        } catch (error) {
          throw new Error(error);
        }
      }
      throw new AuthenticationError("Not logged in");
    },
    createReview: async (_, { input }, context) => {
      if (context.user) {
        try {
          const review = await Review.create({ ...input });
          const game = await Game.findByIdAndUpdate(
            input.gameId,
            { $push: { reviews: review } },
            { new: true }
          );
          return game;
        } catch (error) {
          throw new Error(error);
        }
      }
      throw new AuthenticationError("Not logged in");
    },
    createRating: async (_, { input }, context) => {
      if (context.user) {
        try {
          const rating = await Rating.create({ ...input });
          const review = await Review.findByIdAndUpdate(
            input.reviewId,
            { $push: { ratings: rating } },
            { new: true }
          );
          return review;
        } catch (error) {
          throw new Error(error);
        }
      }
      throw new AuthenticationError("Not logged in");
    },
  },
};
module.exports = resolvers;