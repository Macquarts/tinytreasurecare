const{ gql}= require('apollo-server');
  
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    type: String
  }
  type Request {
    parentID: String!
    carerID: String!
    requestStatus: String!
  }
  type Query {
    me: User
    getUsers: [User]
    getRequests: [Request]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Mutation {
    loginUser(email: String!, password: String, type: String): Auth
    addUser(username: String!, email: String!, password: String!, type: String!): Auth
  }
`;

module.exports = typeDefs;
    
