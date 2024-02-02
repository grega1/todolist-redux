import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo/todoSlice";

export const todo = configureStore({
  reducer: {
    todo: todoSlice,
  },
});
