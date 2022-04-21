import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide a task"],
    trim: true,
    minlength: [3, "name can not be less than 3 characters"],
  },
  complected: {
    type: Boolean,
    default: false,
  },
});

export interface ITask {
  name: string;
  complected?: boolean;
  _id?: string;
  __v?: number;
}

export default mongoose.model("Task", TaskSchema);
