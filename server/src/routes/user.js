import express from "express";

import user from "../controllers/user.js";

const router = express.Router();

const initRouterBuyer = (app) => {
  router.post("/register", user.userRegister);
  router.post("/login", user.userLogin);

  app.use("/api/user", router);
};

export default initRouterBuyer;
