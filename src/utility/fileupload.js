import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key:  process.env.CLOUD_KEY, 
    api_secret:  process.env.CLOUD_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    if (!localFilePath) return null;

    try {
        const uploadResponse = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto',
            folder: 'pharmasignup'  // Optional: Specify the folder for organization
        });
        console.log("File uploaded to Cloudinary:", uploadResponse.url);
        return uploadResponse;
    } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        fs.unlinkSync(localFilePath); // Clean up the local file after error
        throw new Error('Failed to upload file');
    }
};

export { uploadOnCloudinary };
