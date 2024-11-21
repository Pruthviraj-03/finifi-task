import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const mongoURI = process.env.MONGODB_URL;

    if (mongoose.connection.readyState >= 1) {
      console.log("MongoDB connection already established");
      return;
    }

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export { dbConnect };
