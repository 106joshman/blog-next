import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  accessToken: "",
  user: {},
  userId: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    dispatchUser: (state, action) => {
      state.user = action.payload;
    },
    dispatchUserLogin: (state, action) => {
      state.accessToken = action.payload;
      state.user = action.payload;
      state.userId = action.payload;
      state.isLogged = true;
    },
    dispatchSetAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    dispatchLogout: (state) => {
      state.accessToken = "";
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
