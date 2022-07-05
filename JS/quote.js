const quotes = [
  {
    quote: "I never dreamed about success, I worked for it",
    author: "Estee Lauder",
  },
  {
    quote: "Do not try to be original, just try to be good.",
    author: "Paul Rand",
  },
  {
    quote: "Do not be afraid to give up the good to go for the great",
    author: "John D. Rockefeller",
  },
  {
    quote:
      "If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.",
    author: "Martin Luther King Jr.",
  },
  {
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas Edison",
  },
  {
    quote:
      "The fastest way to change yourself is to hang out with people who are already the way you want to be",
    author: "REid Hoffman",
  },
  {
    quote:
      "Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations",
    author: "Tim O Reilly",
  },
  {
    quote:
      "Some people dream of success, while other people get up every morning and make it happen",
    author: "Wayne Huizenga",
  },
  {
    quote:
      "The only thing worse than starting something and falling.. is not starting something",
    author: "SEth Godin",
  },
  {
    quote:
      "If you really want to do something, you will find a way. If you do not, you will find an excuse.",
    author: "Jim Rohn",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

Math.random(); //0~1까지 랜덤한 숫자 제공
Math.round(1.1); //반올림 >> 1
Math.ceil(1.0001); //무조건 올림 >>2
Math.floor(1.9999999999); //무조건 내림>>1
Math.floor(Math.random() * 10); //random의 10을 곱하면 상수가 생기고, floor로 소수점을 없애줌.

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]; //quote를 추가할 수 있으므로 quote에 따라 상수 값 변환 개 천재!!!!

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
