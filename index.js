const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("../backend/routes/userRoute");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("connected to database");
  })
  .catch(() => {
    console.log("connection failed");
  });
console.log(process.env.MONGODB);
app.use(express.json());
app.use("/users", userRoute);
let port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log("server started at port 3000");
});
