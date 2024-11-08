import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const ConnectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`\nMONGO DB CONNECTED !! DB HOST  : ${ConnectionInstance.connection.host}`);
    } catch (error) {
        console.error('Error', error);
        process.exit(1);
    }
};

export default connectDB;
