import Brand from "../models/Brand.js";

const createBrand = async (req, res) => {
  try {
    const brand = new Brand(req.body);
    console.log(brand)
    await brand.save();
    res.status(201).json({ message: "Brand created successfully", brand });
  } catch (error) {
    res.status(500).json({ message: "Error creating brand", error });
  }
};

const getAllBrands = async (req, res) => {
    try {
      const brands = await Brand.find();  // Fetch all brand records from MongoDB
      if (brands.length === 0) {
        return res.status(404).json({ message: "No brands found" });
      }
      res.status(200).json({
        status: 200,
        data: brands,
        message: "Brands fetched successfully"
      });
    } catch (error) {
      console.error("Error fetching brands:", error);
      res.status(500).json({ message: "Error fetching brands", error });
    }
  };
  
export default { createBrand ,getAllBrands};
