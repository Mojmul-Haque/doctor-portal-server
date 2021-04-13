const express = require("express");
const route = require("./Routes/appoinment.book.route");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const app = express();

app.get("/", (req, res) => {
  res.send("conncected");
});

app.use("/", route);

module.exports = app;
