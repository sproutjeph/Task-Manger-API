import { Request, Response } from "express";
function notFound(req: Request, res: Response) {
  res.status(404).send("Rout does not Exist");
}

export default notFound;
