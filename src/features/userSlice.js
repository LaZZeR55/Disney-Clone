import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

const initialState = {
  name: "",
  email: "",
  photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    // when user login remember this piece of information thats all this code doing
    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
    // when user logout all set to null
  },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;
