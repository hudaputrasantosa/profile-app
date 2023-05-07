"use strict";

const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

const PORT = 8000;
const HOST = "0.0.0.0";

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.use("/", router);
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
