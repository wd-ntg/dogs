import { connectToDB, getDB } from "../configDB/mongoDB.js";
import { ObjectId } from "mongodb";

let db;

connectToDB((err) => {
  if (!err) {
    db = getDB();
  }
});

let checkMissingParams = (data) => {
  let fileds = [];
  let value = "";
  Object.keys(data).forEach((key) => {
    fileds.push(key);
  });

  for (let i = 0; i < fileds.length; i++) {
    if (!data[fileds[i]] && !data[fileds[i]] !== 0) {
      value = fileds[i];
      break;
    }
  }

  return value;
};

let userRegister = async (req, res) => {
  try {
    const data = req.body;

    console.log(data);

    // let isCheck = checkMissingParams(data);

    // if (isCheck) {
    //   return res.status(400).json({
    //     success: false,
    //     message: `Dữ liệu bị khuyết thiếu ${isCheck}`,
    //   });
    // }

    if (data.email == "" && data.password != "") {
      let user = await db
        .collection("user")
        .findOne({ name: data.name }, { projection: { _id: 1 } });

      console.log(user);

      if (user) {
        return res.status(400).json({
          success: false,
          message: "Tài khoản đã tồn tại!",
          data: data,
        });
      } else {
        await db.collection("user").insertOne(data);
        return res.status(200).json({
          success: true,
          message: "Đăng ký thành công!",
          data: data,
        });
      }
    } else {
      let user = await db
        .collection("user")
        .findOne({ email: data.email }, { projection: { _id: 1 } });

      if (user) {
        return res.status(200).json({
          success: true,
          message: "Tài khoản đã tồn tại!",
          data: data,
        });
      } else {
        await db.collection("user").insertOne(data);
        return res.status(200).json({
          success: true,
          message: "Đăng ký thành công!",
          data: data,
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Đã có lỗi xảy ra ở server!",
    });
  }
};

let userLogin = async (req, res) => {
  try {
    const data = req.body;
    let user = await db.collection("user").findOne({ name: data.name });
    if (user) {
      if (user.password == data.password) {
        return res.status(200).json({
          success: true,
          message: "Đăng nhập thành công!",
          data: user,
        });
      } else {
        return res.status(200).json({
          success: false,
          message: "Sai mật khẩu!",
        });
      }
    } else {
      return res.status(200).json({
        success: false,
        message: "Tài khoản không tồn tại!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Đã có lỗi xảy ra ở server!",
    });
  }
};

let userPostDog = async (req, res) => {
  try {
    const data = req.body;
    // const post = await db.collection("post").findOne({ user: data.user });
    // if (post) {
    //   await db
    //     .collection("post")
    //     .updateOne({ user: data.user }, { $push: { post_dogs: data.post } });

    //   return res.status(200).json({
    //     success: true,
    //     message: "Đã thêm thành công bài post!",
    //   });
    // } else {
    //   await db.collection("post").insertOne({
    //     post_dogs: [data.post],
    //     user: data.user,
    //     phoneNumber: data.phoneNumber,
    //     address: data.address,
    //   });
    //   return res.status(200).json({
    //     success: true,
    //     message: "Đã thêm thành công bài post!",
    //   });
    // }

    await db.collection("post").insertOne({
      post_dogs: data.post,
      user: data.user,
      phoneNumber: data.phoneNumber,
      address: data.address,
    });
    return res.status(200).json({
      success: true,
      message: "Đã thêm thành công bài post!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Đã có lỗi xảy ra ở server!",
      data: error,
    });
  }
};

const getDogAdop = async (req, res) => {
  try {
    const id = req.params.id;

    console.log(id);

    const data = await db.collection("post").findOne({ _id: new ObjectId(id) });

    if (data) {
      return res.status(200).json({
        success: true,
        message: "Lấy thông tin nhận nuôi thành công!",
        data: data,
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "Thông tin nhận nuôi không tồn tại!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Đã xảy ra lỗi ở server!",
      data: error,
    });
  }
};

let getAllAdop = async (req, res) => {
  try {
    const data = await db.collection("post").find().toArray();
    return res.status(200).json({
      success: true,
      message: "Lấy thông tin thành công!",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Đã xảy ra lỗi ở server!",
      data: error,
    });
  }
};

let getSearchDog = async (req, res) => {
  try {


    const label = req.params.label;


    const data = await db.collection("search").find({ name: label }).toArray();


    if (data) {
      return res.status(200).json({
        success: true,
        message: "Tìm kiếm cún cưng thành công!",
        data: data,
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "Tìm kiếm không tồn tại!",
      });
    }

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Đã xảy ra lỗi ở server!",
      data: error,
    });
  }
}

export default {
  userRegister,
  userLogin,
  userPostDog,
  getDogAdop,
  getAllAdop,
  getSearchDog
};
