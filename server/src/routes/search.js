import express from "express";
import { spawn } from 'child_process';

const router = express.Router();

const initRouterSearch = (app) => {
  router.post("search", runPythonScript);

  app.use("/api/", router);
};

export default initRouterSearch;
