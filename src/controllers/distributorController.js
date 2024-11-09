import Distributor from "../models/Distributor.js";

const createDistributor = async (req, res) => {
  try {
    const distributor = new Distributor(req.body);
    await distributor.save();
    res.status(201).json({ message: "Distributor created successfully", distributor });
  } catch (error) {
    res.status(500).json({ message: "Error creating distributor", error });
  }
};

export default { createDistributor };
