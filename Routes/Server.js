const express = require("express");
const app = express();
app.listen(8080, "127.0.0.1", () => {
    console.log("http://127.0.0.1:8080");
});
module.exports = app;   