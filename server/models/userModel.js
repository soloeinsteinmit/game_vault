// /server/models/userModel.js
/* 
    THIS IS A SAMPLE CODE FROM CHATGPT
    YET TO WRITE MINE
*/
import connection from "../database.js";
import bcrypt from "bcryptjs";

export async function createUser(username, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO users (username, password) VALUES (?, ?)";
    connection.query(query, [username, hashedPassword], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
}

export async function findUserByUsername(username) {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM users WHERE username = ?";
    connection.query(query, [username], (err, results) => {
      if (err) return reject(err);
      resolve(results[0]);
    });
  });
}
