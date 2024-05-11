import express from "express";
import cors from "cors";
import router from "./routes/UserRouters.js";
const app = express();

// import path from "path";
// import { fileURLToPath } from "url";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(router);
// //Resolving dir name for ES module
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// console.log(__dirname);
// // Have Node serve the files for our built React app
// app.use(express.static(path.join(__dirname, "/client/build")));

// // All other GET requests not handled before will return our React app
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "/client/build", "index.html"));
// });

app.listen(process.env.PORT || 3000, () => {
  console.log(`listening on ${process.env.PORT || 3000}`);
});
