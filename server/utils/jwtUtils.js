// /server/utils/jwtUtils.js
/* 
    THIS IS A SAMPLE CODE FROM CHATGPT
    YET TO WRITE MINE
*/
import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET_KEY; // Make sure to set this in your .env file

export function generateToken(payload, expiresIn = "1h") {
  return jwt.sign(payload, secretKey, { expiresIn });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    throw new Error("Invalid token");
  }
}
