import { connectToDB, getDB } from "../configDB/mongoDB.js";
import { ObjectId } from "mongodb";

let db;

connectToDB((err) => {
  if (!err) {
    db = getDB();
  }
});

let saveCart = async (req, res) => {
  try {
    const data = req.body;
    console.log("data ", data);
    let cart = await db.collection("cart").findOne({ user: data.user });

    if (cart) {
      await db
        .collection("cart")
        .updateOne(
          { user: data.user },
          { $push: { cart_products: data.product } }
        );

      return res.status(200).json({
        success: true,
        message: "Đã thêm sản phẩm vào giỏ hàng!",
      });
    } else {
      await db.collection("cart").insertOne({
        cart_products: [data.product],
        user: data.user,
      });
      return res.status(200).json({
        success: true,
        message: "Đã thêm vào giỏ hàng!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Đã có lỗi xảy ra!",
      data: error,
    });
  }
};

let removeCart = async (req, res) => {
  try {
    const data = req.body;
    let cart = await db.collection("cart").findOne({ user: data.user });

    if (cart) {
      await db
        .collection("cart")
        .updateOne(
          { user: data.user },
          { $pull: { cart_products: data.product } }
        );

      return res.status(200).json({
        success: true,
        message: "Đã xoá sản phẩm thành công!",
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "Sản phẩm không tồn tại!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Đã có lỗi xảy ra!",
      data: error,
    });
  }
};

export default {
  saveCart,
  removeCart
};
