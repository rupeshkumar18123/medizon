

const express = require("express");
const mongoose =require("mongoose");
const cors = require("cors");
const userRoutes = require("./src/routes/authRoutes");

require("./src/config/db");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/api",userRoutes);


app.get("/",(req,resp)=>{
 resp.send("this is server page for backend of medizon app");
});

app.listen(3000,()=>{
    console.log("server started at port number : 3000");
})

// Set up server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

// module.exports = app;