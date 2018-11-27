const sounds = {
  coin: new Audio('https://flukeout.github.io/simple-sounds/sounds/coin.mp3'),
  buy: new Audio('https://instaud.io/_/2YL8.mp3'),
  sneeze: new Audio('https://instaud.io/_/2YLu.wav'),
  explosion: new Audio('https://instaud.io/_/2YLx.mp3'),
  disco: new Audio('https://instaud.io/_/2YLF.mp3'),
  honk: new Audio('https://instaud.io/_/2YMm.mp3')
};

export default sound => {
  sounds[sound].play().catch(() => {});
};
