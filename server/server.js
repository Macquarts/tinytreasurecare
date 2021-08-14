const express = require("express");
const path = require("path");
const db = require("./config/connection");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./shared/auth");

const expressServer = express();
const PORT = process.env.PORT || 3001;

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});


// // mongoose.connect('mongodb://localhost:27017/project3');

// // const DB= 'mongodb+srv://dbUSER:ClUsTeR9@cluster0.vih1l.mongodb.net/project3?retryWrites=true&w=majority';

// // mongoose.connect(DB, {

// //   userNewUrlParser:true,
// //   useCreateIndex:true,
// //   useUnifiedTopology:true,
// //   useFindAndModify:false,
// // }).then (() => {
// //   console.log(`connection successful`);
// // }).catch ((error)=> console.log(`connection not made`));

apolloServer.applyMiddleware({ app: expressServer });

expressServer.use(express.urlencoded({ extended: true }));
expressServer.use(express.json());

// To server everything as a single app we are using static file serving 
if (process.env.NODE_ENV === "production") {
  const buildPath = path.join(__dirname, '../client/build');
  expressServer.use(express.static(buildPath));
}


// navigate here when user loads URL
expressServer.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
})


db.once("open", () => {
  expressServer.listen(PORT, () =>
    console.log(`Now listening on localhost:${PORT}`)
  );
  console.log(
    `Use GraphQL at http://localhost:${PORT}${apolloServer.graphqlPath}`
  );
});


// / const mongoose =require('mongoose');
// const express = require("express");
// const path = require("path");
// const db = require("./config/connection");
// const { ApolloServer } = require("apollo-server-express");
// const { typeDefs, resolvers } = require("./schemas");
// const { authMiddleware } = require("./shared/auth");





