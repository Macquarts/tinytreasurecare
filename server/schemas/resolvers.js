const { AuthenticationError } = require('apollo-server-express');
const { User, JobPost } = require('../models');
const { signToken } = require('../shared/auth');

const resolvers = {
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
    getCarerDetail: async (parent, args, context) => {
      const carerDetail = await User.findById(args[0].id);
      return carerDetail;
    },
    getCarers: async (parent, args, context) => {
      const carerList = await User.find({ type: 'CARER' });
      return carerList;
    },
    getSentRequests: async (parent, args, context) => {
      console.log(context.user);
      if (!context.user) {
        throw new AuthenticationError('Something went wrong');
      }

      const sentRequests = await JobPost.find({
        parentId: context.user._id,
      }).populate('carerId');
      console.log(sentRequests);
      return sentRequests;
    },
    getRecievedRequests: async (parent, args, context) => {
      console.log(context.user);
      if (!context.user) {
        throw new AuthenticationError('Something went wrong');
      }

      const recievedRequests = await JobPost.find({
        carerId: context.user._id,
      }).populate('parentId');
      console.log(recievedRequests);
      return recievedRequests;
    },
  },
  Mutation: {
    addUser: async (
      parent,
      {
        firstName,
        lastName,
        email,
        password,
        type,
        ageType,
        careType,
        skillsandqualificationsType,
        timeType,
        postCode,
        experienceYears,
      }
    ) => {
      const user = await User.create({
        firstName,
        lastName,
        email,
        password,
        type,
        ageType,
        careType,
        skillsandqualificationsType,
        timeType,
        postCode,
        experienceYears,
      });

      if (!user) {
        throw new AuthenticationError('Something is wrong');
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
        throw new AuthenticationError('Wrong password!');
      }

      const token = signToken(user);

      return { token, user };
    },
    sendJobRequest: async (parent, { carerId }, context) => {
      console.log('User context', context.user, carerId);
      if (!context.user) {
        throw new AuthenticationError('Something went wrong');
      }
      const jobPost = await JobPost.create({
        carerId: carerId,
        parentId: context.user._id,
        jobStatus: 'PENDING',
      });
      console.log(jobPost);

      return jobPost;
    },
    updateJobRequest: async (parent, { jobId, jobStatus }, context) => {
      console.log(jobId, jobStatus);
      if (!context.user) {
        throw new AuthenticationError('Something went wrong');
      }
      const job = await JobPost.findById(jobId);
      console.log(job);
      const updatedJob = await JobPost.findByIdAndUpdate(jobId, {jobStatus: jobStatus});
      console.log(updatedJob);
      return updatedJob;
    },
  },
};

module.exports = resolvers;