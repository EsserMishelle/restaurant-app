require("dotenv").config();
//connect to the database
require("./config/database");
const cors = require("cors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const ensureLoggedIn = require("./config/ensureLoggedIn");
// const checkRole = require('./config/checkRole')

const app = express();

const corsOptions = {
  origin: "https://ramen-talk.netlify.app/",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

// Enable CORS with the specified options
app.use(cors(corsOptions));

app.use(logger("dev"));
app.use(express.json());

// Middleware to verify token and assign user object of payload to req.user.

app.use((req, res, next) => {
  console.log("Middleware: checkToken"); // Add this line
  require("./config/checkToken")(req, res, next);
});

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, "build")));

// API routes
console.log("Before API routes"); // Add this line
app.use("/api/users", require("./routes/api/users"));
app.use("/api/items", require("./routes/api/items"));
app.use("/api/orders", ensureLoggedIn, require("./routes/api/orders"));
app.use("/api/admin", ensureLoggedIn, require("./routes/api/adminRoutes"));

// Health Check Endpoint
app.get("/health", (req, res) => {
  const mongoStatus = mongoose.connection.readyState;
  // readyState returns 1 for connected
  if (mongoStatus === 1) {
    res.status(200).send("API is up and MongoDB is connected.");
  } else {
    res.status(500).send("API is up but MongoDB is disconnected.");
  }
});
console.log("After API routes");

console.log("Before catch-all route"); // Add this line
app.get("/*", function (req, res) {
  console.log("Handling catch-all route");
  res.sendFile(path.join(process.cwd(), "frontend", "build", "index.html"));
});
// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
