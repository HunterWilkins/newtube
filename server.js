const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Newtube listening on ${PORT}`)
});