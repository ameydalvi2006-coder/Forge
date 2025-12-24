import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("loggedUser")) || null,
  isAuthenticated: !!localStorage.getItem("loggedUser"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("loggedUser", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("loggedUser"); // 🔥 IMPORTANT
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
