import express, { Request, Response, NextFunction } from "express";
import path from "path";
const app = express();

app.use(express.static(path.join(__dirname, "../public")));
app.get("/", (req: Request, res: Response, next: NextFunction): void => {
  try {
    res.send("index.html");
  } catch (error) {
    next(error);
  }
});

const port = 3000;
app.listen(port, () => {
  console.log("server started");
});
