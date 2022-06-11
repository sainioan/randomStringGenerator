const express = require("express");
const app = express();
var counter = 0

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.get("/pingpong", (req, res) => {

  res.send("pong" + counter);
  counter +=1
})
