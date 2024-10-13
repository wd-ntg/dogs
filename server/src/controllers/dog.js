import { connectToDB, getDB } from "../configDB/mongoDB.js";
import { ObjectId } from "mongodb";

let db;

connectToDB((err) => {
  if (!err) {
    db = getDB();
  }
});

const getDog = async (req, res) => {
  try {
    const id = req.params.id;

    const data = await db
      .collection("search")
      .findOne({ _id: new ObjectId(id) });

    if (data) {
      return res.status(200).json({
        success: true,
        message: "Lấy cún cưng thành công!",
        data: data,
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "Cún cưng không tồn tại!",
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

let getAllDogs = async (req, res) => {
  try {
    const data = await db.collection("search").find().toArray();
    return res.status(200).json({
      success: true,
      message: "Lấy cún cưng thành công!",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Đã có lỗi xảy ra!",
      data: error,
    });
  }
};

export default {
  getDog,
  getAllDogs,
};
