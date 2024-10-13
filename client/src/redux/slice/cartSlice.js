import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantityCart: 0,
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product._id === action.payload._id
      );

      if (productIndex !== -1) {
        state.products[productIndex].quantity_cart += 1;
      } else {
        state.products = [...state.products, action.payload];
        state.quantityCart += 1;
      }
    },
    removeFromCart: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product._id === action.payload._id
      );

      if (productIndex !== -1) {
        if (state.products[productIndex].quantity_cart > 1) {
          state.products[productIndex].quantity_cart -= 1;
        } else {
          state.products = state.products.filter(
            (product) => product._id !== action.payload._id
          );
          state.quantityCart -= 1;
        }
      }
    },

    removeFromCartWithoutQuantity: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product._id === action.payload._id
      );

      if (productIndex !== -1) {
        state.products = state.products.filter(
          (product) => product._id !== action.payload._id
        );
        state.quantityCart -= 1;
      }
    },

    actionTicketBuy: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product._id === action.payload
      );
      if (productIndex !== -1) {
        state.products[productIndex].ticket_buy = true;
      }
    },

    actionUnTicketBuy: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product._id === action.payload
      );
      if (productIndex !== -1) {
        state.products[productIndex].ticket_buy = false;
      }
    },

    actionTicketBuyAll: (state, action) => {
      state.products.map((product) => (product.ticket_buy = true));
    },

    actionUnTicketBuyAll: (state, action) => {
      state.products.map((product) => (product.ticket_buy = false));
    },

    actionWithCartFailed: () => {},
  },
});

export const {
  addToCart,
  removeFromCart,
  actionWithCartFailed,
  actionTicketBuy,
  actionUnTicketBuy,
  actionTicketBuyAll,
  actionUnTicketBuyAll,
  removeFromCartWithoutQuantity
} = cartSlice.actions;

export default cartSlice.reducer;