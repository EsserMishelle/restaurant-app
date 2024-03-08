const mongoose = require("mongoose");

// Assuming MONGO_URI is correctly set in your environment variables
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Success
db.on("connected", () => {
  console.log(`Mongoose connection open to ${db.host}:${db.port}/${db.name}`);
});

// Error
db.on("error", (err) => {
  console.error(`Mongoose connection error: ${err}`);
});

// Disconnected
db.on("disconnected", () => {
  console.log("Mongoose connection disconnected");
});

// If the Node process ends, close the Mongoose connection
process.on("SIGINT", () => {
  db.close(() => {
    console.log("Mongoose connection disconnected through app termination");
    process.exit(0);
  });
});

module.exports = mongoose;
