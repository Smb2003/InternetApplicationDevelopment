import { createSlice } from "@reduxjs/toolkit";

// Quotes ka array
const quotes = [
    "The best way to predict the future is to create it.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "Do what you can, with what you have, where you are.",
    "Believe you can and you're halfway there."
];

// Slice create karein jo state manage karega
const quoteSlice = createSlice({
    name: "quote",
    initialState: {
        quote: "Click the button to get a quote!"
    },
    reducers: {
        generateQuote: (state) => {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            state.quote = quotes[randomIndex];
        }
    }
});

// Actions export karna zaroori hai taake components isko use kar sakein
export const { generateQuote } = quoteSlice.actions;

// Reducer export karein jo Redux store me use hoga
export default quoteSlice.reducer;
