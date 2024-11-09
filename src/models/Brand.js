import mongoose from "mongoose";

const drugSchema = new mongoose.Schema({
  drugName: String,
  drugCode: String,
  quantity: Number,
  price: Number,
  stock: Number,
  discount: Number,
});

const brandSchema = new mongoose.Schema({
  brandName: String,
  address: String,
  contact: String,
  email: String,
  drugList: [drugSchema],
});

const Brand = mongoose.model("Brand", brandSchema);
export default Brand;
