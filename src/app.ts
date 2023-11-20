import cors from "cors";
import express from "express";
import { Application, Request, Response } from "express-serve-static-core";

//parsers
const app: Application = express();
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send(" World!");
});

export default app;
