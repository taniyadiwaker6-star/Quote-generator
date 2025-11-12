const quotes = [
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers"
  },
  {
    text: "It’s not whether you get knocked down, it’s whether you get up.",
    author: "Vince Lombardi"
  },
  {
    text: "The harder you work for something, the greater you’ll feel when you achieve it.",
    author: "Anonymous"
  },
  {
    text: "Dream bigger. Do bigger.",
    author: "Anonymous"
  }
];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

newQuoteBtn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[random].text;
  authorText.textContent = "- " + quotes[random].author;
});
