import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const API_URL = "https://api.chucknorris.io/jokes/random";
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    const result = await axios.get(API_URL);
    res.render("index.ejs", {joke: result.data.value});
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})