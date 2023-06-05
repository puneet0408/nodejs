import fs from "fs";
import { Product } from "../model/product.js";
import { log } from "console";
 


export const CreateProduct = (req, res) => {
  const product = new Product(req.body);
 product.save((err,doc)=>{
  if(err)
        {
            return res.status(400).json(err);
        }
        else
        {
            return res.status(200).json(doc);
        }
 })
  
};

export const GetAllProduct = async (req, res) => {
  const products = await Product.find();
  res.json( products);
};

export const GetProduct = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const products = await Product.findById(id);
  res.json(products);
};

export const ReplaceProduct = (req, res) => {
  const id = +req.params.id;
  const productindex = productDummy.findIndex((p) => p.id === id);
  productDummy.splice(productindex, 1, { ...req.body, id: id });
  res.status(201).json();
};

export const UpdateProduct = (req, res) => {
  const id = +req.params.id;
  const productindex = productDummy.findIndex((p) => p.id === id);
  const product = productDummy[productindex];
  productDummy.splice(productindex, 1, { ...product, ...req.body });
  res.status(201).json();
};

export const DeleteProduct = (req, res) => {
  const id = +req.params.id;
  const productindex = productDummy.findIndex((p) => p.id === id);
  const product = productDummy[productindex];
  productDummy.splice(productindex, 1);
  res.status(201).json(product);
};
