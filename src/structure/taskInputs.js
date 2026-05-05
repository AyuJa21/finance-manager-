import mongoose from "mongoose";

const structure = mongoose.Schema(
  {
    title: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    dueDate: {
      type: Date,
      required: true,
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "High",
    },
  },
  { timestamps: true }
);

new Task = mongoose.model("Task", structure)

export default Task 