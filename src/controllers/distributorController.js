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

const getAllDistributors = async (req, res) => {
    try {
      const distributors = await Distributor.find();  // Fetch all distributor records
      res.status(200).json(new ApiResponse(200, distributors, "Distributors fetched successfully"));
    } catch (error) {
      res.status(500).json({ message: "Error fetching distributors", error });
    }
  };
  

export default { createDistributor,getAllDistributors };
