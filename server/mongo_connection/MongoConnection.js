import mongoose from "mongoose";

const MongoConnection = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_CONNECTION)
      .then(() => console.log("MongoDb Atlas Connected Successfully"))
      .catch((err) => console.log(err.message));
  } catch (error) {
    console.log(error);
  }
};

export default MongoConnection;
