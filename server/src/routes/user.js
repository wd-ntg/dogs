import express from "express";

import user from "../controllers/user.js";

const router = express.Router();

const initRouterBuyer = (app) => {
  router.post("/register", user.userRegister);
  router.post("/login", user.userLogin);

  router.post("/post-dog", user.userPostDog);
  router.post("/all-adop", user.getAllAdop);
  router.post("/dog-adop/:id", user.getDogAdop);

  app.use("/api/user", router);
};

export default initRouterBuyer;
