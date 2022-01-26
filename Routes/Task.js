const path = require('path');
const express = require("express");
const app = express();
app.get('/tasks', function (req, res) {
  res.sendFile(path.join(__dirname, '..','/Views/Tasks.html'));
})

app.get("/users", (req,res) => {
    res.sendFile(path.join(__dirname,'..','/Views/Users.html'));
});