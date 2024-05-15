import knex from "knex";
import dotenv from "dotenv";
dotenv.config();

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

export const db = knex({
  client: "pg",
  connection: {
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    database: DB_NAME,
    password: DB_PASSWORD,
  },
});

// DB_HOST = cornelius.db.elephantsql.com;
// DB_PORT = 5432;
// DB_USER = vqirqwyp;
// DB_NAME = vqirqwyp;
// DB_PASSWORD = rwnxctepYs7I9kxvGbLZUyVxCcNYgg3v;
