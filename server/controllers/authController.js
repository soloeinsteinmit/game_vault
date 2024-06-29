// /server/controllers/authController.js
/* 
    THIS IS A SAMPLE CODE FROM CHATGPT
    YET TO WRITE MINE
*/

import { createUser, findUserByUsername } from "../models/userModel.js";
import { generateToken } from "../utils/jwtUtils.js";
import bcrypt from "bcryptjs";

export async function register(req, res) {
  const { username, password } = req.body;
  try {
    await createUser(username, password);
    res.status(201).send("User registered");
  } catch (err) {
    res.status(500).send("Error registering user");
  }
}

export async function login(req, res) {
  const { username, password } = req.body;
  try {
    const user = await findUserByUsername(username);
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = generateToken({ username: user.username });
      res.json({ token });
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (err) {
    res.status(500).send("Error logging in");
  }
}
