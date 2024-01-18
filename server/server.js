const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { authMiddleware } = require("./utils/auth");
const cors = require("cors");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

async function startApolloServer() {
  try {
    await server.start();

    server.applyMiddleware({ app });

    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });

    db.once("open", () => {
      console.log("Database connection established successfully!");
    }).on("error", (err) => {
      console.error("Database connection error", err);
    });
  } catch (error) {
    console.error("Error starting Apollo Server:", error.message);
  }
}

startApolloServer();
