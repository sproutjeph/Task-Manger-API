import { Response, Request, NextFunction } from "express";
import { CustomAPIError } from "../errors/custom-error";
const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  return res.status(500).json({ msg: `Something Went Wrong Try Again Later` });
};

export default errorHandler;
