import {
    CreateProduct,
    GetAllProduct,
    GetProduct,
    ReplaceProduct,
    UpdateProduct,
    DeleteProduct,
  } from "../controller/product.js";
import express from 'express';
  const ProductRouter = express.Router();

ProductRouter.post("/", CreateProduct)
  .get("/", GetAllProduct)
  .get("/:id", GetProduct)
  .put("/:id", ReplaceProduct)
  .patch("/:id", UpdateProduct)
  .delete("/:id", DeleteProduct);


  export default ProductRouter;