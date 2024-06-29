// /server/database.js
/* 
    THIS IS A SAMPLE CODE FROM CHATGPT
    YET TO WRITE MINE
*/
// Connect to the database
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createConnection({
  host: import.meta.process.env.VITE_DB_HOST,
  user: process.env.VITE_DB_USER,
  password: process.env.VITE_DB_PASSWORD,
  database: process.env.VITE_DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Connected to the MySQL database as ID", connection.threadId);
});

export default connection;
