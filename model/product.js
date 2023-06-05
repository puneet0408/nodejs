import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number, min:[0,'wrong min discount']
  },
  stock: {
    type: Number,
  },
  category: {
    type: String,
  },
});

export const Product = mongoose.model('product',productSchema)
