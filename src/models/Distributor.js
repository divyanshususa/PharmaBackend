import mongoose from "mongoose";

const drugSchema = new mongoose.Schema({
  drugName: String,
  drugCode: String,
  quantity: Number,
  price: Number,
  stock: Number,
  discount: Number,
});

const distributorSchema = new mongoose.Schema({
  distributorName: String,
  address: String,
  contact: String,
  email: String,
  brandSupplied: [drugSchema],
});

const Distributor = mongoose.model("Distributor", distributorSchema);
export default Distributor;
