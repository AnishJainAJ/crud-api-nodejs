const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/product.route");
const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello from node api server");
});

mongoose
  .connect(
    "mongodb+srv://anishdjain29:sRpBTrk25pHi708A@backenddb.a2uwy.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("connection to DB failed");
  });
