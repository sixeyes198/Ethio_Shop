import express from "express";
import cors from "cors";
import router from "./routes/UserRouters.js";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3000, () => {
  console.log(`listening on ${process.env.PORT || 3000}`);
});

app.use(router);

// app.get("/api", (req, res) => {
//   res.json({ Backend: "this gonna be my back-end" });
// });
