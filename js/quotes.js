const quotes = [
  {
    quote: "I am not afraid of storms for I am learning how to sail my ship.",
    author: "Helen Keller",
  },
  {
    quote:
      "The greatest mistake you can make in life is to be continually fearing you will make one.",
    author: "Elbert Hubbard",
  },
  {
    quote: "Nothing great in the world has been accomplished without passion.",
    author: "Georg Wilhelm",
  },
  {
    quote: "Just play. Have fun. Enjoy the game.",
    author: "Michael Jordan",
  },
  {
    quote: "Most powerful is he who has himself in his own power.",
    author: "Seneca",
  },
  {
    quote: "A mind troubled by doubt cannot focus on the course to victory.",
    author: "Arthur Golden",
  },
  {
    quote:
      "Quality is never an accident; it is always the result of intelligent effort.",
    author: "John Ruskin",
  },
  {
    quote:
      "It's not that I'm so smart , it's just that I stay with problems longer.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Great ability develops and reveals itself increasingly with every new assignment.",
    author: "Baltasar Gracian",
  },
  {
    quote:
      "Seeing much, suffering much, and studying much, are the three pillars of learning.",
    author: "Benjamin Disraeli",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
