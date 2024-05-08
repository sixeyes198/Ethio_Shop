import knex from "knex";

export const db = knex({
  client: "pg",
  connection: {
    host: "cornelius.db.elephantsql.com",
    port: 5432,
    user: "vqirqwyp",
    database: "vqirqwyp",
    password: "rwnxctepYs7I9kxvGbLZUyVxCcNYgg3v",
  },
});
