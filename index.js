const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const shopRoutes = require("./routes/api/shops-api");
const cartRoutes = require("./routes/api/carts-api");
const test = require("./routes/test");

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.use("/api/shops", shopRoutes);
app.use("/api/carts", cartRoutes);
app.use("/", test);

async function start() {
  try {
    await mongoose
      .connect(process.env.MONGO_URL)
      .then(console.log("database connect succesfully"))
      .catch((error) => {
        console.log(error);
        console.log(error.message);
        process.exit(1);
      });

    app.listen(process.env.PORT, () => {
      console.log(`Server running. Use our API on port: ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}

start();
