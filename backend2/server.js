const express = require("express");
const cors = require("cors");
const userRoutes = require("./src/routes/authRoutes");

require("./src/config/db");

const app = express();
app.use(cors({
    origin: "*", // Allows requests from any origin
    methods: "GET, POST, PUT, DELETE, OPTIONS",
    
}));
app.use(express.json());




app.use("/api",userRoutes);


app.get("/",(req,resp)=>{
 resp.send("this is server page for backend of medizon app");
});

// app.listen(3000,()=>{
//     console.log("server started at port number : 3000");
// })

// Set up server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

module.exports = app;