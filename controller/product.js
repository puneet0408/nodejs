import mongoose from "mongoose";
import { Product } from "../model/product.js";

export const CreateProduct = (req, res) => {
  const product = new Product(req.body);
  product
    .save()
    .then((doc) => res.status(200).json(doc))
    .catch((err) => res.status(400).json(err));
};

export const GetAllProduct = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const GetProduct = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const products = await Product.findById(id);
  res.json(products);
};

export const ReplaceProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
  // const productindex = productDummy.findIndex((p) => p.id === id);
  // productDummy.splice(productindex, 1, { ...req.body, id: id });
};

export const UpdateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
  // const productindex = productDummy.findIndex((p) => p.id === id);
  // const product = productDummy[productindex];
  // productDummy.splice(productindex, 1, { ...product, ...req.body });
};

export const DeleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndDelete({ _id: id });
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
  // const productindex = productDummy.findIndex((p) => p.id === id);
  // const product = productDummy[productindex];
  // productDummy.splice(productindex, 1);
};
