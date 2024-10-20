import express from "express";

import product from "../controllers/product.js";

const router = express.Router();

const initRouterProduct = (app) => {
  router.post("/all", product.getAllProducts);

  router.post("/buy", product.buyProduct);

  router.post("/:id", product.getProducts);

  app.use("/api/product", router);
};

export default initRouterProduct;
