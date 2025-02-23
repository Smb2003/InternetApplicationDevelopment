import { configureStore } from "@reduxjs/toolkit";
import bmiReducer from "./bmiSlice";

const store = configureStore({
  reducer: {
    bmi: bmiReducer,
  },
});

export default store;
