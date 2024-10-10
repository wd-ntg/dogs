import express from "express";

import user from "../controllers/user.js";

const router = express.Router();

const initRouterBuyer = (app) => {
  router.post("/register", user.userRegister);

  app.use("/api/user", router);
};

export default initRouterBuyer;
