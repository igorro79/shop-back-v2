// const express = require("express");
// const logger = require("morgan");
// const cors = require("cors");
// require("dotenv").config();

// const cartsRouter = require("./routes/api/carts-api");
// const shopsRouter = require("./routes/api/shops-api");

// const app = express();

// const formatsLogger = app.get("env") === "development" ? "dev" : "short";

// app.use(logger(formatsLogger));
// app.use(cors());
// app.use(express.json());

// app.use("/api/shops", shopsRouter);
// app.use("/api/carts", cartsRouter);

// app.use((req, res) => {
//   res.status(404).json({ message: "Not found" });
// });

// app.use(errorHandler);

// module.exports = app;
