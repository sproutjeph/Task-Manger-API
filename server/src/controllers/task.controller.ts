import { Request, Response } from "express";
import Task from "../models/task.model";
import asyncWrapper from "../../middleware/async";
import { CustomAPIError, createCustomError } from "../../errors/custom-error";
export const createTask = asyncWrapper(async (req: Request, res: Response) => {
  const task = await Task.create(req.body);
  return res.status(201).send(task);
});
export const getAllTasks = asyncWrapper(async (req: Request, res: Response) => {
  const allTasks = await Task.find({});
  return res.status(200).json({ allTasks });
});

export const getTask = asyncWrapper(
  async (req: Request, res: Response, next) => {
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });

    if (!task) {
      return next(createCustomError(`No task With id : ${taskId} `, 404));
    }

    return res.status(200).json({ task });
  }
);

export const deleteTask = asyncWrapper(
  async (req: Request, res: Response, next) => {
    const { id: taskId } = req.params;
    const task = await Task.findByIdAndDelete({ _id: taskId });
    if (!task) {
      return next(createCustomError(`No task With id : ${taskId} `, 404));
    }
    res.status(200).json({ task });
  }
);

export const upDateTask = asyncWrapper(
  async (req: Request, res: Response, next) => {
    const { id: taskId } = req.params;

    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return next(createCustomError(`No task With id : ${taskId} `, 404));
    }
    res.status(200).json({ task });
  }
);
