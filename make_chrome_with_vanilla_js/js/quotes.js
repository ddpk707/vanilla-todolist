const quotes = [
  {
    quote: '空に何かを見つめてたら、それは星だって君が教えてくれた。',
    author: 'yuuri',
  },
  {
    quote: '何十年、何百年昔の光が　僕自身も忘れたころに僕らを照らしてる。',
    author: 'ベテルギウス',
  },
  {
    quote: '君が不安になる度に強がるんだ。',
    author: '유우리',
  },
  {
    quote: '僕が横にいるよ',
    author: '베테르기우스',
  },
  {
    quote: '명언 10개라니',
    author: '두두',
  },
  {
    quote: '너무 많은거 아닙니꽈!!!!',
    author: 'ㅎㅎ',
  },
  {
    quote: '얼른 퇴근해버리구 싶다구요오',
    author: 'ㅋ',
  },
  {
    quote: '아아ㅏ아ㅏㅏ',
    author: 'ㄴ',
  },
  {
    quote: '늦었다고 시작할 땐 늦었돠...',
    author: 'ㅇ',
  },
  {
    quote: '이런거 밖에 몰라',
    author: 'ㄹ',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;