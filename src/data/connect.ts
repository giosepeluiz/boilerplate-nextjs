import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const { MONGO_URI } = process.env;

const connect = async () => mongoose.connect(MONGO_URI);

const disconnect = async () => mongoose.disconnect();

const database = {
  connection: connect,
  disconnect,
};
export default database;
