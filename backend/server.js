const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const libraryRoutes = require("./routes/LibraryRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
});

app.use(express.static(__dirname + "/public"));
app.use("/api", libraryRoutes);

app.use("/pages/:url", (req, res) => {
  console.log("1");
  res.sendFile(__dirname + `/public/pages/${req.params.url}.html`);
});
app.use("*", (req, res) => {
  console.log("2");
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
