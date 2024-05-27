import mongoose from 'mongoose';

const connectDB = async () => {
  const URI = process.env.MONGO_URI;
  try {
    await mongoose.connect(URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
