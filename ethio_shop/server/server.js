import express from "express";
import cors from "cors";
import router from "./routes/UserRouters.js";
const app = express();
import path from "path";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3000, () => {
  console.log(`listening on ${process.env.PORT || 3000}`);
});

app.use(router);

// have Node serve the files for our built React app
app.use(express.static(path.join(__dirname, "../client/build")));

// all other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});
