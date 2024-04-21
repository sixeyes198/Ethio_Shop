import {
  newUserPassRegister,
  userRegister,
  userLogin,
} from "../models/userModels.js";

import bcrypt from "bcrypt";

export const _newUserPassRegister = async (req, res) => {
  try {
    const { username, password, first_name, last_name, email } = req.body;
    const user = await userRegister(email, username, first_name, last_name);
    const hashedPassword = bcrypt.hashSync(password + "", 10);
    console.log(password);
    console.log(hashedPassword);
    const response = await newUserPassRegister(username, hashedPassword);
    console.log(response);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: "Cant create user" });
  }
};

export const _userLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userLogin(username);
    if (user.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    const match = bcrypt.compareSync(password + "", user[0].password);
    if (!match) {
      return res.status(404).json({ message: "Password is incorrect" });
    }
    res
      .status(200)
      .json({ username: user[0].username, message: "You are logged in" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Password username incorrect" });
  }
};
