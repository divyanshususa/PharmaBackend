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

const getAllStores = async (req, res) => {
    try {
      const stores = await Store.find();  // Fetch all store records from MongoDB
      if (stores.length === 0) {
        return res.status(404).json({ message: "No stores found" });
      }
      res.status(200).json({
        status: 200,
        data: stores,
        message: "Stores fetched successfully"
      });
    } catch (error) {
      console.error("Error fetching stores:", error);
      res.status(500).json({ message: "Error fetching stores", error });
    }
  };
  

export default { createStore,getAllStores };
