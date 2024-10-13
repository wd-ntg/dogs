import userService from "../../service/userService";
import {
  userLoginFailed,
  userLoginSuscess,
  userRegisterFailed,
} from "../slice/userSlice";

export const userRegister = (data) => {
  return async (dispactch) => {
    try {
      const res = await userService.userRegister(data);

      console.log("res ", res);

      if (res.success == true) {
        dispactch(userLoginSuscess(res.data));
        return {
          success: true,
          errCode: 0,
          message: "Đăng ký thành công!",
        };
      } else {
        dispactch(userRegisterFailed());
        return {
          success: false,
          errCode: 500,
          message: `Đăng ký thất bại! ${res.message}`,
        };
      }
    } catch (error) {
      dispactch(userRegisterFailed());
      return {
        errCode: 500,
        message: "Đã xảy ra lỗi!",
      };
    }
  };
};

export const userLogin = (data) => {
  return async (dispactch) => {
    try {
      const res = await userService.userLogin(data);
      if (res.success == true) {
        dispactch(userLoginSuscess(res.data));
        return {
          success: true,
          errCode: 0,
          message: "Đăng nhập thành công!",
        };
      } else {
        dispactch(userLoginFailed());
        return {
          success: false,
          errCode: 500,
          message: `Đăng nhập thất bại! ${res.message}`,
        };
      }
    } catch (error) {
      dispactch(userLoginFailed());
      return {
        success: false,
        errCode: 500,
        message: "Đã xảy ra lỗi!",
      };
    }
  };
};
