import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import userRoute from "./route/user.route.js";
import bookRoute from "./route/book.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000
const URI = process.env.MongoDBURI;

// connect to mongodb

try {
    await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to mongoose");
} catch (error) {
    console.log("Error:", error);
}

//defing route
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT , () => {
    console.log(`Example app Listening an port ${PORT}`)
});