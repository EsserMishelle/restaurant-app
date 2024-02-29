require("dotenv").config();
//connect to the database
require("./config/database");
const express = require("express");
const path = require("path");
// const favicon = require('serve-favicon');
const logger = require("morgan");
const ensureLoggedIn = require("./config/ensureLoggedIn");

const app = express();

app.use(logger("dev"));
app.use(express.json());

// Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
app.use(require("./config/checkToken"));

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(express.static(path.join(__dirname, "build")));

app.use(require("./config/checkToken"));
// Put API routes here, before the "catch all" route
app.use("/api/users", require("./routes/api/users"));

app.use("/api/items", require("./routes/api/items"));

app.use("/api/orders", ensureLoggedIn, require("./routes/api/orders"));
// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 8001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
