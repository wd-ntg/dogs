import express from "express";

import dog from "../controllers/dog.js";

const router = express.Router();

const initRouterDog = (app) => {
  router.post("/all", dog.getAllDogs);

  router.post("/:id", dog.getDog);

  app.use("/api/dog", router);
};

export default initRouterDog;
