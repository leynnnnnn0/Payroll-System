import mongoose from "mongoose";

// Creating a function to connect with the database server
export const connectionDB = async(CONNECTION_URL) => {
    await mongoose.connect(CONNECTION_URL).then(console.log("connected to datase")).catch(err => console.log(err))
}