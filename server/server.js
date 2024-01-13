const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { authMiddleware } = require("./utils/auth");
const cors = require("cors");

// Importing GraphQL schema and db connection
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

// Setting up the port
const PORT = process.env.PORT || 3001;

// Creating an Express application
const app = express();
app.use(cors()); // Applying CORS middleware to allow cross-origin requests

// Creating an Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware, // Using authMiddleware for context (authentication)
});

// Configuring the Express app 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Applying Apollo Server middleware to the Express app
server.applyMiddleware({ app });

// Serving static files
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist"))); 
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html")); 
  });
}

// Starting the Apollo Server and Express app
const startApolloServer = async () => {
  await server.start(); // Starting Apollo Server
  server.applyMiddleware({ app }); // Applying middleware

  // Start listening on the specified port
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });

  // Handling errors 
  db.once("open", () => {
    console.log("Database connection established successfully!");
  }).on("error", (err) => {
    console.error("Database connection error", err);
  });
};



startApolloServer(); // Initiating the setup of Apollo Server and Express app
