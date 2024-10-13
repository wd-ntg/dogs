import cartService from "@/service/cartService";
import {
  addToCart,
  removeFromCart,
  actionWithCartFailed,
  actionTicketBuy,
  actionUnTicketBuy,
  actionTicketBuyAll,
  actionUnTicketBuyAll,
  removeFromCartWithoutQuantity,
} from "../slice/cartSlice";

export const addToCartAction = (data) => {
  return async (dispatch) => {
    try {
      await dispatch(addToCart(data.product));
      const res = await cartService.saveCart(data);

      if (res.success === true) {
        return {
          success: true,
          errCode: 0,
          message: "Đã thêm sản phẩm thành công!",
        };
      } else {
        return {
          success: false,
          errCode: 500,
          message: "Đã thêm sản phẩm thất bại!",
        };
      }
    } catch (error) {
      dispatch(actionWithCartFailed());

      return {
        success: false,
        errCode: 500,
        message: "Đã có lỗi xảy ra!",
      };
    }
  };
};

export const removeFromCartAction = (data) => {
  return async (dispatch, getState) => {
    try {
      dispatch(removeFromCart(data.product));

      const res = await cartService.removeCart(data);

      if (res.success === true) {
        return {
          success: true,
          errCode: 0,
          message: "Đã xoá sản phẩm thành công!",
        };
      } else {
        return {
          success: false,
          errCode: 500,
          message: "Đã xoá sản phẩm thất bại!",
        };
      }
    } catch (error) {
      dispatch(actionWithCartFailed());

      return {
        success: false,
        errCode: 500,
        message: "Đã có lỗi xảy ra!",
      };
    }
  };
};

export const actionTicketBuyProduct = (data) => {
  return async (dispatch, getState) => {
    try {
      dispatch(actionTicketBuy(data));
    } catch (error) {
      dispatch(actionWithCartFailed());
    }
  };
};

export const actionUnTicketBuyProduct = (data) => {
  return async (dispatch, getState) => {
    try {
      dispatch(actionUnTicketBuy(data));
    } catch (error) {
      dispatch(actionWithCartFailed());
    }
  };
};

export const actionTicketBuyAllProduct = (data) => {
  return async (dispatch, getState) => {
    try {
      dispatch(actionTicketBuyAll(data));
    } catch (error) {
      dispatch(actionWithCartFailed());
    }
  };
};

export const actionUnTicketBuyAllProduct = (data) => {
  return async (dispatch, getState) => {
    try {
      dispatch(actionUnTicketBuyAll(data));
    } catch (error) {
      dispatch(actionWithCartFailed());
    }
  };
};

export const removeFromCartWithoutQuantityAction = (data) => {
  return async (dispatch, getState) => {
    try {
      dispatch(removeFromCartWithoutQuantity(data));
    } catch (error) {
      dispatch(actionWithCartFailed());
    }
  };
};
