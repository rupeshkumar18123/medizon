const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/awt_db")
  .then(() => {
    console.log("database connected sucessfully....");
  })
  .catch((err) => {
    console.log(err);
  });
