const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static(path.resolve("./build")));

app.get("*", (_, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  res.sendFile(path.resolve("./build/index.html"));
});

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log("listen in port " + PORT);
});
