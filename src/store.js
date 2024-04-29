import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./store/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
  devTools: true,
});

export default store;
