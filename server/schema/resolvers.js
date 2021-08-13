const {AuthenticationError} =require("apollo-server-express");
const { User} =require('../models');
const{signToken} =require('../utils/auth');

const resolvers={
    Query: {
        me: async (parent, args, context) => {
          console.log(context.user);
          if (context.user) {
            const userData = await User.findOne({ _id: context.user._id });
            return userData;
          }
        },
        getUsers: async (parent, args, context) => {
          const userList = await User.find();
          return userList;
        },
        getRequests: async (parent, args, context) => {
          return [];
        }
    
      },
      Mutation: {
        addUser: async (parent, { username, email, password }) => {
          const user = await User.create({ username, email, password });
    
          if (!user) {
            throw new AuthenticationError("Something is wrong");
          }
          const token = signToken(user);
          return { token, user };
        },
        loginUser: async (parent, { email, password }) => {
          const user = await User.findOne({ email });
    
          if (!user) {
            throw new AuthenticationError("Can't find this user");
          }
    
          const correctPassword = await user.isCorrectPassword(password);
    
          if (!correctPassword) {
            throw new AuthenticationError("Wrong password!");
          }
    
          const token = signToken(user);
    
          return { token, user };
        },
      },
    };
    
    module.exports = resolvers;
    
