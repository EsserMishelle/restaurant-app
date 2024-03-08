//controllers/api/admin.js

const User = require("../../models/User");

const adminController = {
  // Get a list of all users
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Update a user's role
  updateUserRole: async (req, res) => {
    const { userId, newRole } = req.body;
    try {
      const user = await User.findByIdAndUpdate(
        userId,
        { role: newRole },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Delete a user
  deleteUser: async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await User.findByIdAndDelete(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(204).send(); // No Content
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Additional admin functionalities as needed...
};

module.exports = adminController;
