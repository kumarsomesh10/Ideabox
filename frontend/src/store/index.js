import { createSlice, configureStore } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: "",
    isLogedIn: false,
  },
  reducers: {
    login(state) {
      state.userId = sessionStorage.getItem("id");
      state.isLogedIn = true;
    },
    logout(state) {
      sessionStorage.clear();
      state.userId = "";
      state.isLogedIn = false;
    },
  },
});

export const authAction = authSlice.actions;

export const store = configureStore({
  reducer: authSlice.reducer,
});
