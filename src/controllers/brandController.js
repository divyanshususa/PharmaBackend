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

export default { createBrand };
