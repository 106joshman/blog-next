import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  token: "",
  user: {},
  userId: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    dispatchUser: (state, action) => {
      state.user = { ...state.user, ...action.payload.user };
    },
    dispatchUserLogin: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.userId = action.payload.user._id;
      state.isLogged = true;
    },
    dispatchSetAccessToken: (state, action) => {
      state.token = action.payload.token;
    },
    dispatchLogout: (state) => {
      state.token = "";
      state.user = {};
      state.userId = "";
      state.isLogged = false;
    },
  },
});

export const {
  dispatchUser,
  dispatchUserLogin,
  dispatchLogout,
  dispatchSetAccessToken,
} = userSlice.actions;

export default userSlice.reducer;