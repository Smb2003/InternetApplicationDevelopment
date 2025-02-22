import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./quoteSlice";

// Store setup karein aur reducer add karein
export const store = configureStore({
    reducer: {
        quote: quoteReducer
    }
});
