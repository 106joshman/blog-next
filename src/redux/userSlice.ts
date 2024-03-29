import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for the user object
interface User {
  _id: string;
  // Add other properties based on your user object structure
  name: string; // Example property, replace it with actual properties
}

// Define the state type
interface UserState {
  isLogged: boolean;
  access_token: string;
  user: User;
  userId: string;
}

// Define the payload type for the actions
interface UserPayload {
  access_token: string;
  user: User;
}

// Create the user slice
export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogged: false,
    access_token: "",
    user: {} as User, // Initialize user as an empty object
    userId: "",
  } as UserState, // Explicitly set the state type
  
  reducers: {
    dispatchUpdateUser: (state, action: PayloadAction<UserPayload>) => {
      state.user = { ...state.user, ...action.payload.user };
    },
    dispatchUserLogin: (state, action: PayloadAction<UserPayload>) => {
      state.access_token = action.payload.access_token;
      state.user = action.payload.user;
      state.userId = action.payload.user._id;
      state.isLogged = true;
    },
    dispatchSetAccessToken: (state, action: PayloadAction<{ access_token: string }>) => {
      state.access_token = action.payload.access_token;
    },
    dispatchLogout: (state) => {
      state.access_token = "";
      state.user = {} as User; // Reset user to an empty object
      state.userId = "";
      state.isLogged = false;
    },
  },
});

// Export action creators and reducer
export const {
  dispatchUpdateUser,
  dispatchUserLogin,
  dispatchLogout,
  dispatchSetAccessToken,
} = userSlice.actions;

export default userSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   isLogged: false,
//   accessToken: "",
//   user: {},
//   userId: "",
// };

// export const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     dispatchUser: (state, action) => {
//       state.user = action.payload;
//     },
//     dispatchUserLogin: (state, action) => {
//       state.accessToken = action.payload.accessToken;
//       state.user = action.payload.user;
//       state.userId = action.payload.userId;
//       state.isLogged = true;
//     },
//     dispatchSetAccessToken: (state, action) => {
//       state.accessToken = action.payload;
//     },
//     dispatchLogout: (state) => {
//       state.accessToken = "";
//       state.user = {};
//       state.userId = "";
//       state.isLogged = false;
//     },
//   },
// });

// export const {
//   dispatchUser,
//   dispatchUserLogin,
//   dispatchLogout,
//   dispatchSetAccessToken,
// } = userSlice.actions;

// export default userSlice.reducer;
