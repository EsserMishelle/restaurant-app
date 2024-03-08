const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}

async function create(req, res) {
  console.log("Inside create route handler");
  try {
    // Add the user to the database
    const user = await User.create(req.body);

    // token will be a string
    const token = createJWT(user);
    // Yes, we can use res.json to send back just a string
    // The client code needs to take this into consideration
    res.json(token);
  } catch (err) {
    // Client will check for non-2xx status code
    // 400 = Bad Request
    res.status(400).json(err);
  }
  console.log("create route handler completed");
}
async function logIn(req, res) {
  console.log("Inside logIn route handler");
  try {
    //Find the email the user typed in the frontend in our database
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.status(200).json(createJWT(user));
  } catch {
    res.status(400).json("Bad Credentials");
  }
  console.log("logIn route handler completed");
}

module.exports = {
  create,
  logIn,
};
