import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";
import { Book } from "./models/bookModel.js";
import bookRoute from "./routes/bookRoute.js"

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling cors policy
// Opt-1: Allow all origin with default of cors(*)
app.use(cors());
// Opt-2: Allow custom origin
// app.use(cors(
//   {
//     origin: 'http://localhost:5173',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: 'Content-Type'
//   }
// ))

app.get("/", (req, res) => {
  console.log(req);

  return res.status(234).send("Welcome to MERN Stack Tutorials");
});


app.use('/books', bookRoute);


mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("DB connection error:", err);
  });