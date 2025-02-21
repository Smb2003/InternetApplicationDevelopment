const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Do what you can, with what you have, where you are.",
    "The best way to predict the future is to create it.",
    "Act as if what you do makes a difference. It does.",
    "Success is not how high you have climbed, but how you make a positive difference to the world."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}
