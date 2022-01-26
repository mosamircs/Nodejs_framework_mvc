
const path = require('path');
const express = require("express");
const app = express();
app.listen(8080, "127.0.0.1", () => {
    console.log("http://127.0.0.1:8080");
});
app.get('/tasks', function (req, res) {
    res.sendFile(path.join(__dirname, '..', '/Views/Tasks.html'));
});

app.get("/users", (req, res) => {
    res.sendFile(path.join(__dirname,'..','/Views/Users.html'));
});