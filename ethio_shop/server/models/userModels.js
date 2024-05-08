import { db } from "../config/database.js";

export const newUserPassRegister = (user_name, password) => {
  return db("ethio_shop_hashed_passwords").insert({ user_name, password }, [
    "user_id",
    "user_name",
    "password",
  ]);
};

export const userRegister = (user_name, first_name, last_name, email) => {
  return db("ethio_shop_accounts").insert(
    { user_name, first_name, last_name, email },
    ["user_id", "user_name", "first_name", "last_name", "email"]
  );
};

export const userLogin = (username) => {
  return db("ethio_shop_hashed_passwords")
    .select("user_name", "password")
    .where({ user_name: username });
};

export const userContact = (name, email, message) => {
  return db("ethio_shop_contact").insert({ name, email, message }, [
    "name",
    "email",
    "message",
  ]);
};
