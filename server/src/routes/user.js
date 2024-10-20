import express from "express";

import user from "../controllers/user.js";

const router = express.Router();

const initRouterBuyer = (app) => {
  router.post("/register", user.userRegister);
  router.post("/login", user.userLogin);

  router.post("/profile", user.getProfile);
  router.post("/update-profile", user.updateProfile);

  router.post("/all-order", user.getAllOrder);

  router.post("/post-dog", user.userPostDog);
  router.post("/all-adop", user.getAllAdop);
  router.post("/dog-adop/:id", user.getDogAdop);
  router.post("/search-dog/:label", user.getSearchDog);

  app.use("/api/user", router);
};

export default initRouterBuyer;
