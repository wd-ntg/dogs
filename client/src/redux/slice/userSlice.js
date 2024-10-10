import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userInfo: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLoginSuscess: (state, action) => {
      state.isLoggedIn = true;
      state.userInfo = {
        uid: action.payload.uid,
        name: action.payload.name,
        email: action.payload.email,
        photoURL: action.payload.photoURL,
      };
    },
    userLoginFailed: (state) => {
      state.isLoggedIn = false;
      state.userInfo = null;
    },
    userRegisterFailed: (state) => {
      state.isLoggedIn = false;
      state.userInfo = null;
    },
    userLogout: (state) => {
      state.isLoggedIn = false;
      state.userInfo = null;
    },
    updateUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    fetchUserSignedIn: (state, action) => {
      state.isLoggedIn = true;
      state.isLoggedIn = action.payload;
    },
  },
});

export const {
  userLoginSuscess,
  userLoginFailed,
  userRegisterFailed,
  userLogout,
  updateUserInfo,
  fetchUserSignedIn,
} = userSlice.actions;

export default userSlice.reducer;