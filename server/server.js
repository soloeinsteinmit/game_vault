/* 
    THIS IS A SAMPLE CODE FROM CHATGPT
    YET TO WRITE MINE
*/
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
