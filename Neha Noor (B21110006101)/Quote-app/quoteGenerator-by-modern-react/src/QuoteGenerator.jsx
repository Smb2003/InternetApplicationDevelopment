import { useState } from "react";
import "./styles.css";

const quotes = [
    "The best way to predict the future is to create it.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "Do what you can, with what you have, where you are.",
    "Believe you can and you're halfway there."
];

const QuoteGenerator = () => {
    const [quote, setQuote] = useState("Click the button to get a quote!");

    const generateQuote = () => {
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    };

    return (
        <div className="container">
            <h1>Random Quote Generator</h1>
            <p className="quote">{quote}</p>
            <button onClick={generateQuote}>New Quote</button>
        </div>
    );
}
export default QuoteGenerator;