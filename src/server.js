import express from "express";
import cors from "cors";
import api from "./api.js";
const app = express();

app.use(cors());

app.use("/api", api);

app.get("/", (req, res) => {
  res.send("server open");
});

const port = 5000;
app.listen(port, () => {
  console.log(`포트 번호 ${port}`);
});
