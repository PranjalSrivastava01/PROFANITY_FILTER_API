const User = require("../models/userModel");

const addUser = async (req, res) => {
  try {
    const { userName, count } = req.body;
    const newUser = new User({ userName, count });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const user = await User.find({});
    if (!user) res.status(200).json({ output: "there is no user" });
    else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getUser = async (req, res) => {
    try {
        const { userName } = req.params;
      const user = await User.find({userName});
        res.status(200).json(user);
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  const updateUser = async (req, res) => {
    try {
      const { userName, count } = req.body; // Assuming userName and count are sent in the request body
      const user = await User.findOne({ userName });
  
      if (!user) {
        res.status(404).json({ message: "User not found." });
        return;
      }
  
      // Update the count with the value sent in the request body
      user.count = count;
      await user.save();
  
      // Send back the updated user data in the response
      res.status(200).json({ message: "User count updated successfully.", user });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
module.exports = {
  getUsers,
  addUser,
  updateUser,
  getUser
};
