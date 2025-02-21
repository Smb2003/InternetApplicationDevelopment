import { configureStore } from "@reduxjs/toolkit";
import genTableReducer from "./Slice/genTable";

const store = configureStore({
  reducer: {
    generateTable: genTableReducer,
  },
});

export default store;
