import productService from "@/service/productService";

export const getProduct = (id) => async (dispatch) => {
  try {
    const res = await productService.getProduct(id);


    if (res.success === true) {
      return {
        success: true,
        errCode: 0,
        message: "Lấy sản phẩm thành công!",
        data: res.data,
      };
    } else {
      return {
        success: false,
        errCode: 500,
        message: "Lấy sản phẩm thất bại!",
      };
    }
  } catch (error) {
    return {
      success: false,
      errCode: 500,
      message: "Đã có lỗi xảy ra!",
    };
  }
};
