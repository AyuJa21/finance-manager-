import express, { Router } from "express";
import {
  getAllTasks,
  postNewTask,
  putNewTaskInfo,
  deleteTask,
} from "../controller/taskActions.js";

/* 
getAllTasks ===> to see the every task that have been already added in db
postNewTask ===> to adding new task in db
putNewTaskInfo ===> to re-writing the task 
deleteTask ===> to delete the task from the db
*/

const router = express.Router();

router.get("/", getAllTasks);
router.post("/", postNewTask);
router.put("/:id", putNewTaskInfo);
router.delete("/:id", deleteTask); 
