import mongoose from "mongoose";
export const dbConnection=()=> {
    mongoose
        .connect(process.env.MONGO_URL)
        .then(() => {
            console.log("MongoDB connected successfully");
        })
        .catch((err) => {
            console.log(err);
        });
}
