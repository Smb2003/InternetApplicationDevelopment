import { configureStore, createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
    name: "color",
    initialState: { value: "#FFAEBD" },
    reducers: {
        setColor: (state, action) => {
            state.value = action.payload.toUpperCase();
        }
    }
});

export const { setColor } = colorSlice.actions;

const store = configureStore({
    reducer: {
        color: colorSlice.reducer
    }
});

export default store;
