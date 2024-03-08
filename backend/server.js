require("dotenv").config();
//connect to the database
require("./config/database");
const express = require("express");
const path = require("path");
// const favicon = require('serve-favicon');
const logger = require("morgan");
const ensureLoggedIn = require("./config/ensureLoggedIn");
// const checkRole = require('./config/checkRole')

const app = express();

app.use(logger("dev"));
app.use(express.json());

// Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
app.use(require("./config/checkToken"));

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, "build")));

//"Catch All" Route
// Put API routes here, before the "catch all" route

app.use("/api/users", require("./routes/api/users"));

// Protect the API routes below from anonymous users
// const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use("/api/items", require("./routes/api/items"));

app.use("/api/orders", ensureLoggedIn, require("./routes/api/orders"));

//Admin routes
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

// The "catch all" route (note the *) is necessary

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
