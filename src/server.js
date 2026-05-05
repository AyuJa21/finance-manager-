import express, { Router } from "express";


const app = express();

const router = express.Router();

app.use("/api/allTasks");

app.listen(5001, () => {
  console.log("Server started at post no: 5001");
});


