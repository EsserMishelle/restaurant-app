// ./routes/api/users.js

const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");

// POST /api/users
router.post("/", function (req, res) {
  console.log("Inside POST /api/users route");
  usersCtrl.create(req, res);
  console.log("POST /api/users route completed");
});

// POST /api/users/login
router.post("/login", function (req, res) {
  console.log("Inside POST /api/users/login route");
  usersCtrl.logIn(req, res);
  console.log("POST /api/users/login route completed");
});

module.exports = router;

// routes/api/users.js

// const express = require("express");
// const router = express.Router();
// const usersCtrl = require("../../controllers/api/users");

// // POST /api/users
// router.post("/", usersCtrl.create);
// //POST /api/users/login
// router.post("/login", usersCtrl.logIn);

// module.exports = router;
