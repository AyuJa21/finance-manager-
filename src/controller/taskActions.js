import Task from "../structure/taskInputs";

export const getAllTasks = async (req, res) => {
  try {
    const tasks = Task.find().sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error in getting all tasks from db", error);
    req.status(500).json({ message: "Server error you dumb" });
  }
};

export const postNewTask = async (req, res) => {
  try {
    const { title, description, dueDate, priority } = req.body;
    const task = new Task({ title, description, dueDate, priority });

    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.error("Error in adding new task", error);
    res.status(500).json({ message: "Server error you are really dumb" });
  }
};
