const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("../backend/routes/userRoute");
mongoose
  .connect(
    "mongodb+srv://pranjalsrivastavwork:1234567890@cluster0.n7fwj8z.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to database");
  })
  .catch(() => {
    console.log("connection failed");
  });
app.use(express.json());
app.use("/users", userRoute);
app.listen(3000, () => {
  console.log("server started at port 3000");
});
