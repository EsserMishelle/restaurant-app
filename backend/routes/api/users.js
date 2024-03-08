// routes/api/users.js

const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");

// POST /api/users
router.post("/", usersCtrl.create);
//POST /api/users/login
router.post("/login", usersCtrl.logIn);

router.get("/", usersCtrl.create);
router.get("/login", (req, res) => {
  res.render("/login");
});
router.get("/signup", (req, res) => {
  res.render("/signup");
});
module.exports = router;
