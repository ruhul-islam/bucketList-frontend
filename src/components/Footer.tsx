import "./Footer.css";

let quotes: string[] = [
  "You need a plan to build a house. To build a life, it is even more important to have a plan or goal. – Zig Ziglar",
  "If you don’t design your own life plan, chances are you’ll fall into someone else’s plan. And guess what they have planned for you? Not much. – Jim Rohn",
  "Vision without action is a daydream. Action without vision is nightmare. – Japanese Proverb",
  "To sit back and let fate play its hand out and never influence it is not the way man was meant to operate. – John Glenn",
  "Most impossible goals can be met simply by breaking them down into bite-size chunks, writing them down, believing them and going full speed ahead as if they were routine. – Don Lancaster",
  "I do know that when I am 60, I should be attempting to achieve different personal goals than those which had priority at age 20. – Warren Buffett",
  "If a goal is worth having, it’s worth blocking out the time in your day-to-day life necessary to achieve it. – Jill Koenig",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.– Henry David Thoreau",
  "Don’t tell me the sky’s the limit when there are footprints on the moon. – Paul Brandt",
  "The world is a book and those who do not travel read only one page. - St. Augustine",
  "When overseas you learn more about your own country, than you do the place you’re visiting. – Clint Borgen",
  "When preparing to travel, lay out all your clothes and all your money. Then take half the clothes and twice the money. – Susan Heller Anderson",
  "A ship in harbor is safe, but that’s not what ships were built for. – John A. Shedd",
  "Like all great travelers, I have seen more than I remember, and remember more than I have seen. – Benjamin Disraeli",
  "Wellness encompasses a healthy body, a sound mind, and a tranquil spirit. Enjoy the journey as you strive for wellness. - Laurette Gagnon Beaulieu",
  "Our bodies are our gardens – our wills are our gardeners. – William Shakespeare",
  "I have chosen to be happy because it is good for my health. - Voltaire",
  "Self-care is not selfish. You cannot serve from an empty vessel. - Eleanor Brown",
  "It’s important to point out that mental health is more about wellness rather than sickness. – Matt Purcell",
  "Take care of your body, it’s the only place you have to live. – Jim Rohn",
  "Cleaning and organizing is a practice, not a project. — Meagan Francis",
  "The way to get started is to quit talking and start doing. — Walt Disney",
  "The way to get started is to quit talking and start doing. — Walt Disney",
  "When your environment is clean you feel happy motivated and healthy. — Lailah Gifty Akita",
  "When all else fails, cleaning house is the perfect antidote to most of life’s ills. — Sue Grafton",
  "The objective of cleaning is not just to clean, but to feel happiness living within that environment. — Marie Kondo",
];

const getRandomQuote = Math.floor(Math.random() * quotes.length);
console.log(getRandomQuote, quotes[getRandomQuote]);

const Footer = () => {
  return (
    <div className="Footer">
      <h2>{quotes[getRandomQuote]}</h2>
    </div>
  );
};

export default Footer;
function random(random: any, arg1: string) {
  throw new Error("Function not implemented.");
}
