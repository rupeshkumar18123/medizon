//index.js
const express = require("express");


const cors = require("cors");
require("./config");
const user = require("./users");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/login", async (req, resp) => {
  try {
    if (req.body) {
      // Insert multiple documents
      let ans = await user.create(req.body);
      let result = ans.toObject();
      delete result.password;
      resp.send(result);
    }
  } catch (error) {
    resp.status(500).send("Internal Server Error");
  }
});



app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.listen(3000, () =>
  console.log("Server is running on Port [ http://localhost:3000 ]")
);
