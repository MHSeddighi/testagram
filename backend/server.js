const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes/Routes");
const path = require("path");

app.use(express.urlencoded({ extended: true }));

try {
  const uri = "mongodb://localhost:27017/testagram"; // Replace with your MongoDB connection string
  mongoose
    .connect(uri, {
      family: 4,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
} catch (error) {
  console.error("Error:", error);
}

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
});
app.use(express.static(path.join(__dirname, 'public')));
app.use("", routes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
