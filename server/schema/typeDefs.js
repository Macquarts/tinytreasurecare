const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    type: String
  }
  type JobPost {
    _id: String
    parentId: String!
    carerId: String!
    jobStatus: String!
  }
  type Query {
    me: User
    getUsers: [User]
    getCarers: [User]
    getCarerDetail: User
    getSentRequests: [JobPost]
    getRecievedRequests: [JobPost]
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
    loginUser(email: String!, password: String, type: String): Auth
    addUser(username: String!, email: String!, password: String!, type: String!): Auth
    sendJobRequest(carerId: String!): JobPostResponse
    updateJobRequest(jobId: String!, jobStatus: String!): JobPostResponse
    
  }
`;

module.exports = typeDefs;