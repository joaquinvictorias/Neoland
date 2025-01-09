const express = require("express");
const connectDB = require("./config/database");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const productRouter = require("./routes/productRoutes");
const orderRouter = require("./routes/orderRoutes");
require("dotenv").config();

const app = express();

connectDB();

app.use(cors({ origin: "http://127.0.0.1:5500" }));
app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/orders", orderRouter);

module.exports = app;