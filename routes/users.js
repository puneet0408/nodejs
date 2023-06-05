import {
    CreateProduct,
    GetAllProduct,
    GetProduct,
    ReplaceProduct,
    UpdateProduct,
    DeleteProduct,
  } from "../controller/user.js";
import express from 'express';
  const UserRouter = express.Router();

UserRouter.post("/", CreateProduct)
  .get("/", GetAllProduct)
  .get("/:id", GetProduct)
  .put("/:id", ReplaceProduct)
  .patch("/:id", UpdateProduct)
  .delete("/:id", DeleteProduct);


  export default UserRouter;