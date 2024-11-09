 import { asyncHandler } from "../utility/asyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utility/ApiError.js";
import { uploadOnCloudinary } from "../utility/fileupload.js";
import { ApiResponse } from "../utility/ApiResponse.js";

// Register User
const registerUser = asyncHandler(async (req, res) => {
    console.log("Incoming request body:", req.body);

    const { name, contact, email, address, password } = req.body;

    if (!name || !contact || !email || !address || !password) {
        throw new ApiError(400, "All fields (name, contact, email, address, password) are required");
    }

    const existedUser = await User.findOne({ $or: [{ contact }, { email }] });

    if (existedUser) {
        throw new ApiError(409, "User already exists");
    }

    const licenceLocalPath = req.files?.Licence?.[0]?.path;
    const gstinLocalPath = req.files?.Gstin?.[0]?.path;
    if (!licenceLocalPath || !gstinLocalPath) {
        throw new ApiError(400, "Images are required");
    }

    const licenceUpload = await uploadOnCloudinary(licenceLocalPath);
    const gstinUpload = await uploadOnCloudinary(gstinLocalPath);

    if (!licenceUpload?.url || !gstinUpload?.url) {
        throw new ApiError(500, "Failed to upload images");
    }

    const user = await User.create({
        name,
        contact,
        email,
        address,
        licenceImage: licenceUpload.url,
        gstinImage: gstinUpload.url,
        password
    });

    const createdUser = await User.findById(user._id).select("-password -refreshToken");
    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering");
    }

    res.status(201).json(new ApiResponse(201, createdUser, "User created successfully"));
});

// Login User
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    console.log("Incoming login request:", { email, password });

    if (!email || !password) {
        throw new ApiError(400, "Email and password are required");
    }

    const user = await User.findOne({ email });
    if (!user) {
        console.log("User not found in database");
        throw new ApiError(401, "Invalid email or password");
    }

    const isPasswordCorrect = await user.isPasswordCorrect(password);
    if (!isPasswordCorrect) {
        console.log("Password does not match for user:", user.email);
        throw new ApiError(401, "Invalid email or password");
    }

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generatefreshToken();
    console.log("Tokens generated successfully");

    res.status(200).json(new ApiResponse(200, { accessToken, refreshToken }, "Login successful"));
});


export { registerUser, loginUser };
