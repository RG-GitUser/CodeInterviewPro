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

// Creating an Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware, // Using authMiddleware 
});

// Serving static files
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });
}

// Start Apollo Server and apply middleware
async function startApolloServer() {
  try {
    // Start Apollo Server asynchronously
    await server.start();

    // Apply middleware only after server is started
    server.applyMiddleware({ app });

    // Start listening on the specified port
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });

    // Handling errors with the database connection
    db.once("open", () => {
      console.log("Database connection established successfully!");
    }).on("error", (err) => {
      console.error("Database connection error", err);
    });
  } catch (error) {
    console.error("Error starting Apollo Server:", error.message);
  }
}

startApolloServer(); // Initiating the setup of Apollo Server and Express app
