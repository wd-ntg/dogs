import { connectToDB, getDB } from "../configDB/mongoDB.js";
import { ObjectId } from "mongodb";

let db;

connectToDB((err) => {
  if (!err) {
    db = getDB();
  }
});

const getProducts = async (req, res) => {
  try {
    const id = req.params.id;

    const data = await db
      .collection("product")
      .findOne({ _id: new ObjectId(id) });

    if (data) {
      return res.status(200).json({
        success: true,
        message: "Lấy sản phẩm thành công!",
        data: data,
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
      message: "Lấy sản phẩm thất bại!",
      data: error,
    });
  }
};

let getAllProducts = async (req, res) => {
  try {
    const data = await db.collection("product").find().toArray();
    return res.status(200).json({
      success: true,
      message: "Lấy sản phẩm thành công!",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Lấy sản phẩm thất bại!",
      data: error,
    });
  }
};

export default {
  getProducts,
  getAllProducts,
};
