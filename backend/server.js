const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// const usersRouter = require("./routes/users");
const vendorsRouter = require("./routes/vendors");
const guestsRouter = require("./routes/guest");

// const itemsRouter = require("./routes/items");
// const ordersRouter = require("./routes/orders");
// const transactionsRouter = require("./routes/transactions");

// app.use("/users", usersRouter);
app.use("/vendors", vendorsRouter);
app.use("/api/guests", guestsRouter);
// app.use("/api/admin/user", userRouter);
// app.use("/api/vendor", vendorRouter);

// app.use("/items", itemsRouter);
// app.use("/orders", ordersRouter);
// app.use("/transactions", transactionsRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
