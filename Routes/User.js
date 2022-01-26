const path = require('path');
const express = require("express");
const app = express();
app.get("/users", (req, res) => {
    res.sendFile(path.join(__dirname,'..','/Views/Users.html'));
});