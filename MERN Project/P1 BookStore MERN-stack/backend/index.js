import express, { request } from "express";
import { PORT } from "./config.js";

const app = express();

app.get("/", (req, res) => {
    console.log(req);
    return res.status(207).send('Welcome to MERN stack Tutorial')
})

app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
});