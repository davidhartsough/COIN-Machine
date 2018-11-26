import celebrationMessages from './celebration-messages';

let coinCelebrationTimeout;
let celebrationTimeout;

const getRandomNumber = (min, max) => Math.floor(Math.random() * max + min);

const addCoins = () => {
  const coins = getRandomNumber(1, 10);
  sessionStorage.coinCount = Number(sessionStorage.coinCount) + coins;
  document.getElementById('coin-count').innerText = sessionStorage.coinCount;
  const coinCelebration = document.getElementById('coin-celebration');
  coinCelebration.innerText = `+${coins}`;
  coinCelebration.style.color = `hsl(${getRandomNumber(0, 359)}, 100%, 50%)`;
  clearTimeout(coinCelebrationTimeout);
  coinCelebrationTimeout = setTimeout(() => {
    coinCelebration.innerText = '';
  }, 1600);
};

const getRandomBoolean = () => Math.random() >= 0.5;

const getRandomItemFromArray = array => array[Math.floor(Math.random() * array.length)];

const getRandomCelebrationMessage = () => getRandomItemFromArray(celebrationMessages);

const celebrate = message => {
  // TODO: add sound effects
  // TODO: add arrows
  const celebration = document.getElementById('celebration');
  celebration.innerText = message;
  celebration.className = 'show';
  let styleText = `
    top: ${getRandomNumber(4, 80)}%;
    left: ${getRandomNumber(4, 64)}%;
    color: hsl(${getRandomNumber(0, 359)}, 100%, 50%);
    letter-spacing: ${getRandomNumber(0, 4)}px;
  `;
  if (getRandomBoolean()) {
    styleText += `
      text-transform: uppercase;
    `;
  }
  if (getRandomBoolean()) {
    const randomShade = `hsl(0, 0%, ${getRandomNumber(0, 100)}%)`;
    styleText += `
      text-shadow: ${getRandomNumber(0, 2)}px ${getRandomNumber(1, 3)}px ${randomShade};
    `;
  }
  celebration.style.cssText = styleText;
  clearTimeout(celebrationTimeout);
  celebrationTimeout = setTimeout(() => {
    celebration.className = 'hide';
  }, 1600);
};

export default eventName => {
  addCoins();
  celebrate(`${getRandomCelebrationMessage()} ${eventName}!`);
};
