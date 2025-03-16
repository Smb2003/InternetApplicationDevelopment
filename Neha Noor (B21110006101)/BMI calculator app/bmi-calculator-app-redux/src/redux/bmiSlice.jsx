import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bmi: null,
};

const bmiSlice = createSlice({
  name: "bmi",
  initialState,
  reducers: {
    calculateBMI: (state, action) => {
      const { weight, height } = action.payload;
      state.bmi = (weight / (height * height)).toFixed(2);
    },
  },
});

export const { calculateBMI } = bmiSlice.actions;
export default bmiSlice.reducer;
