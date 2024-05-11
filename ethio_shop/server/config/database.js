import knex from "knex";

export const db = knex({
  client: "pg",
  connection: {
    host: "cornelius.db.elephantsql.com",
    port: "5432",
    user: "vqirqwyp",
    database: "vqirqwyp",
    password: "rwnxctepYs7I9kxvGbLZUyVxCcNYgg3v",
  },
});

// DB_HOST= cornelius.db.elephantsql.com
// DB_PORT= 5432
// DB_USER= vqirqwyp
// DB_NAME= vqirqwyp
// DB_PASSWORD= rwnxctepYs7I9kxvGbLZUyVxCcNYgg3v
