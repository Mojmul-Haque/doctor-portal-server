const express = require("express");
const app = require("./app");
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`the server is open http://localhost:${PORT}`)
);
