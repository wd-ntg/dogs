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
};

let getProfile = async (req, res) => {
  try {
    const { uid } = req.body;
    const data = await db.collection("user").findOne({ uid: uid });
    if (data) {
      return res.status(200).json({
        success: true,
        message: "Lấy profile thành công!",
        data: data,
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "Profile không tồn tại!",
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

let updateProfile = async (req, res) => {
  try {
    const { uid, name, address, phoneNumber, userName, email } = req.body;

    console.log(req.body);

    // Kiểm tra xem email đã tồn tại ở tài khoản khác hay chưa
    const existingEmail = await db
      .collection("user")
      .findOne({ email: email, uid: { $ne: uid } });
    if (existingEmail) {
      return res.status(400).json({
        success: false,
        message: "Email đã được sử dụng bởi tài khoản khác!",
      });
    }

    // Kiểm tra xem userName đã tồn tại ở tài khoản khác hay chưa
    const existingUserName = await db
      .collection("user")
      .findOne({ userName: userName, uid: { $ne: uid } });
    if (existingUserName) {
      return res.status(400).json({
        success: false,
        message: "Tên đăng nhập đã được sử dụng bởi tài khoản khác!",
      });
    }

    // Tiến hành cập nhật thông tin người dùng
    const data = await db.collection("user").updateOne(
      { uid: uid },
      {
        $set: {
          name: name,
          address: address,
          phoneNumber: phoneNumber,
          userName: userName,
          email: email,
        },
      }
    );

    if (data.modifiedCount > 0) {
      return res.status(200).json({
        success: true,
        message: "Cập nhật profile thành công!",
        data: data,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Profile không tồn tại hoặc không có thay đổi!",
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

const getAllOrder = async (req, res) => {
  try {
    const { uid } = req.body;

    // Tìm đơn hàng của người dùng
    const data = await db.collection("buy").findOne({ user: uid });

    // Kiểm tra nếu không có đơn hàng nào
    if (!data || !data.products || data.products.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Không tìm thấy đơn hàng nào!",
      });
    }

    const productsArray = data.products;

    // Nhóm các sản phẩm dựa trên id, color và size
    const groupedProducts = productsArray.reduce((acc, product) => {
      // Tạo khóa duy nhất cho mỗi sản phẩm dựa trên id, color và size
      const key = `${product.id}_${product.color || ''}_${product.size || ''}`;
      
      if (acc[key]) {
        acc[key].quantity += product.quantity; // Cộng dồn quantity nếu trùng key
      } else {
        acc[key] = { ...product }; // Thêm sản phẩm mới nếu chưa có
      }
      return acc;
    }, {});

    // Chuyển groupedProducts từ object thành mảng
    const groupedProductsArray = Object.values(groupedProducts);

    // Lấy danh sách các id duy nhất từ groupedProductsArray
    const uniqueIds = groupedProductsArray.map((product) => product.id);

    // Truy vấn thông tin chi tiết của tất cả các sản phẩm theo các id duy nhất
    const productsDetails = await db
      .collection("product")
      .find({ _id: { $in: uniqueIds.map((id) => new ObjectId(id)) } })
      .toArray();

    // Kết hợp thông tin chi tiết với thông tin số lượng và các thuộc tính bổ sung
    const detailedProducts = groupedProductsArray.map((product) => {
      const productDetail = productsDetails.find(
        (detail) => detail._id.toString() === product.id
      );

      if (!productDetail) {
        return {
          id: product.id,
          quantity: product.quantity,
          color: product.color || null, // Thêm color nếu có
          size: product.size || null,   // Thêm size nếu có
          message: "Sản phẩm không tồn tại trong cơ sở dữ liệu",
        };
      }

      return {
        ...productDetail,
        quantity: product.quantity,  // Thêm số lượng
        color: product.color || null,  // Thêm color nếu có
        size: product.size || null,    // Thêm size nếu có
      };
    });

    return res.status(200).json({
      success: true,
      message: "Lấy đơn mua thành công!",
      data: detailedProducts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Đã xảy ra lỗi ở server!",
      data: error,
    });
  }
};

export default {
  userRegister,
  userLogin,
  userPostDog,
  getDogAdop,
  getAllAdop,
  getSearchDog,
  getProfile,
  updateProfile,
  getAllOrder,
};
