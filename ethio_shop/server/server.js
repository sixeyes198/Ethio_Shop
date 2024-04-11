const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3000, () => {
  console.log(`listening on ${process.env.PORT || 3000}`);
});

app.get("/api", (req, res) => {
  res.json({ Backend: "this gonna be my back-end" });
});
