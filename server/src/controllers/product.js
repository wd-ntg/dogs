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

let buyProduct = async (req, res) => {
  try {
    const { _id, quantity, uid, color, size } = req.body;

    console.log(req.body);

    const userBuyer = await db.collection("buy").findOne({ user: uid });

    console.log(userBuyer)

    if (userBuyer) {
      await db
        .collection("buy")
        .updateOne(
          { user: uid },
          { $push: { products: { id: _id, quantity: quantity, color: color, size: size } } }
        );
      await db.collection("product").updateOne(
        { _id: new ObjectId(_id) },
        { $inc: { quantity: -quantity } }
      )
    } else {
      await db.collection("buy").insertOne({
        user: uid,
        products: [{ id: _id, quantity: quantity, color: color, size: size }],
      });
    }

    return res.status(200).json({
      success: true,
      message: "Mua sản phẩm thành công!",
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      message: "có lỗi xảy ra ở server!",
      data: error,
    });
  }
};

export default {
  getProducts,
  getAllProducts,
  buyProduct,
};
