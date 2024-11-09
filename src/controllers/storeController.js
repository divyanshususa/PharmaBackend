import Store from "../models/Store.js";

const createStore = async (req, res) => {
  try {
    const store = new Store(req.body);
    await store.save();
    res.status(201).json({ message: "Store created successfully", store });
  } catch (error) {
    res.status(500).json({ message: "Error creating store", error });
  }
};

export default { createStore };
