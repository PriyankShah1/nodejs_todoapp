// mongodb+srv://learnershah360:M1XyhNgXv0B5hzcU@cluster0.bqfoqce.mongodb.net/?retryWrites=true&w=majority


import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "backendapi",
    })
    .then((c) => console.log(`Database Connected with ${c.connection.host}`))
    .catch((e) => console.log(e));
};