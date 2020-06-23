import express from "express";
import bodyParser from "body-parser";
import { currentUserRouter } from "./routes/current-user"

const app = express();
app.use(bodyParser.json());

app.get("/api/users/currentuser", (req, res) => {
  res.send("hi the");
});

app.listen(3000, () => {
  console.log("listening on posrt 3000!!!");
});
