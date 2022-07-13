const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const shopRoutes = require("./routes/api/shops-api");
const cartRoutes = require("./routes/api/carts-api");

const port = process.env.PORT || 5000;

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.use("/api/shops", shopRoutes);
app.use("/api/carts", cartRoutes);

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

    app.listen(port, () => {
      console.log(`Server running. Use our API on port: ${port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}

start();
