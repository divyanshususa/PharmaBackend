import mongoose from "mongoose";

const drugSchema = new mongoose.Schema({
  drugName: String,
  drugCode: String,
  quantity: Number,
  price: Number,
  stock: Number,
  discount: Number,
});

const storeSchema = new mongoose.Schema({
  storeName: String,
  address: String,
  contact: String,
  email: String,
  distributorSupplied: [drugSchema],
});

const Store = mongoose.model("Store", storeSchema);
export default Store;
