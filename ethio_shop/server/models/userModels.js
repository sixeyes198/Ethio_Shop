import { db } from "../config/database.js";

export const newUserPassRegister = (username, password) => {
  return db("ethio_shop_hashed_passwords").insert({ username, password }, [
    "user_id",
    "user_name",
    "password",
  ]);
};

export const userRegister = (username, firstname, lastname, email) => {
  return db("ethio_shop_accounts").insert(
    { username, firstname, lastname, email },
    ["user_id", "user_name", "first_name", "last_name", "email"]
  );
};

export const userLogin = (username) => {
  return db("ethio_shop_hashed_passwords")
    .select("user_name", "password")
    .where({ user_name: username });
};
