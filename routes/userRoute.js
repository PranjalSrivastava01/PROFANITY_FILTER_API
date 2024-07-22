const express = require("express");
const router = express.Router();
//const user = require("../models/userModel");
const {
  getUsers,
  addUser,
  updateUser,
  getUser,
} = require("../controllers/userController");
router.get("/", getUsers);
router.get("/getUser/:userName", getUser);
router.post("/addUser", addUser);
router.put("/updateUser/:userName", updateUser);
module.exports = router;
