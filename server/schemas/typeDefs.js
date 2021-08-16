const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    type: String!
    ageType: String!
    careType: String!
    timeType: String!
    skillsandqualifications: String
    postCode: String!
    experienceYears: String!
  }

  type JobPost {
    _id: String
    parentId: String!
    carerId: User!
    jobStatus: String!
  }
  type JobsReceived {
    _id: String
    parentId: User!
    carerId: String!
    jobStatus: String!
  }

  type Query {
    me: User
    getUsers: [User]
    getCarers: [User]
    getCarerDetail: User
    getSentRequests: [JobPost]
    getRecievedRequests: [JobsReceived]
  }

  type Auth {
    token: ID!
    user: User
  }
  type JobPostResponse {
    _id: String
    jobStatus: String
  }

  type Mutation {
    loginUser(
      email: String!
      password: String
      type: String
      firstName: String
    ): Auth
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      type: String!
      ageType: String!
      careType: String!
      skillsandqualifications:String!
      timeType: String!
      postCode: String!
      experienceYears: String!
    ): Auth
    sendJobRequest(carerId: String!): JobPostResponse
    updateJobRequest(jobId: String!, jobStatus: String!): JobPostResponse
  }
`;

module.exports = typeDefs;