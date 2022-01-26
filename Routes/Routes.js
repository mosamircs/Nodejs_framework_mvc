var express = require("express");
var app = express();
app.get('/', (req, res) => {
    res.send("home");
});
app.get("/tasks", (req,res) => {
    res.sendFile("views/index.html");
});
app.listen(8080, "127.0.0.1", () => {
    console.log("http://127.0.0.1:8080");
});
