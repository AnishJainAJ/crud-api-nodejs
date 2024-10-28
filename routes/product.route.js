const express = require("express");
const router = express.Router();
const {
  getProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

//retrieve all products
router.get("/", getProducts);
//retrieve single product
router.get("/:id", getOneProduct);
//add a product
router.post("/", createProduct);
//udpate product
router.put("/:id", updateProduct);
//delete product
router.delete("/:id", deleteProduct);

module.exports = router;
