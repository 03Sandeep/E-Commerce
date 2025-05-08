import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected".bgMagenta.white);
  } catch (err) {
    console.log(`Error in MongoDB ${err}`.bgRed.white);
  }
};

export default connectDB;
