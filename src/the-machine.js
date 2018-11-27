import playSound from './play-sound';

const openCoinShop = () => {
  document.getElementById('coin-shop').className = 'show';
  const randomNumber = Math.floor(Math.random() * 7 + 1);
  if (randomNumber === 3) {
    playSound('sneeze');
  }
};

export default () => {
  const coinMachineDiv = document.createElement('div');
  coinMachineDiv.id = 'coin-machine-container';
  document.body.appendChild(coinMachineDiv);
  document.getElementById('coin-machine-container').innerHTML = `
    <div id="coin-machine">
      <img class="dont-swap-me" id="coin-machine-img" src="https://vectr.com/davidhartsough/fvqhWvvj4.svg" alt="COIN Machine"/>
    </div>
    <div id="coin-counter">
      <img class="dont-swap-me" id="coin-img" src="https://vectr.com/davidhartsough/h51SQUS9f.svg" alt="coin counter" />
      <div id="coin-count">${sessionStorage.coinCount}</div>
    </div>
    <div id="coin-celebration"></div>
  `;
  document.getElementById('coin-machine').addEventListener('click', openCoinShop);
};
