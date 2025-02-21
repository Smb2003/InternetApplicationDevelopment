import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const genTableSlice = createSlice({
  name: "generateTable",
  initialState,
  reducers: {
    genTable: (state, action) => {
      const { number, range } = action.payload;
      const table = [];
      for (let i = 1; i <= range; i++) {
        table.push(`${number} x ${i} = ${number * i}`);
      }
      state.value = table;
    },
  },
});

export const { genTable } = genTableSlice.actions;
export default genTableSlice.reducer;
