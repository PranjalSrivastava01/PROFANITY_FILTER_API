const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("connected to database");
  })
  .catch((error) => {
    console.log("connection failed:",error);
  });
console.log(process.env.MONGODB);
app.use(express.json());
app.use("/users", userRoute);
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server started at port 3000");
});
