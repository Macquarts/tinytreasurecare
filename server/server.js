const express = require("express");
const path = require("path");
const db = require("./config/connection");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./shared/auth");

const expressServer = express();
const PORT = process.env.PORT || 3001;

async function startApollo() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });
  await apolloServer.start();

  apolloServer.applyMiddleware({ app: expressServer });

}
startApollo();
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
  
});