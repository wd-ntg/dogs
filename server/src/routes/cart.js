import express from "express";

import cart from "../controllers/cart.js";

const router = express.Router();

const initRouterCart = (app) => {
  router.post("/save", cart.saveCart);
  router.post("/remove", cart.removeCart);

  app.use("/api/cart", router);
};

export default initRouterCart;
