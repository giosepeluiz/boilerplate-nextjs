import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log("FALHA AO CONECTAR!!!", err);
  }
};

export default connectMongoDB;
