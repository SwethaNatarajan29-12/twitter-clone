import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected : ${connection.connection.host}`);
  } catch (error) {
    console.error(`The error message is ${error.message}`);
    process.exit(1);
  }
};

export default connectMongoDB;
