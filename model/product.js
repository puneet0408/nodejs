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
  discountPercentage:{
      type:Number
  },
  rating:{
    type:Number,min:[0,"wrong rating"],max:[5,"cross max limit"]
  },
  brand: {
    type: String,
  },
  category: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
});

export const Product = mongoose.model('Product',productSchema)
