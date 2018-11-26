const openCoinShop = () => {
  document.getElementById('coin-shop').className = 'show';
};

export default () => {
  const coinMachineDiv = document.createElement('div');
  coinMachineDiv.id = 'coin-machine-container';
  document.body.appendChild(coinMachineDiv);
  document.getElementById('coin-machine-container').innerHTML = `
    <div id="coin-machine">
      <img id="coin-machine-img" src="https://vectr.com/davidhartsough/fvqhWvvj4.svg" alt="COIN Machine"/>
    </div>
    <div id="coin-counter">
      <img id="coin-img" src="https://vectr.com/davidhartsough/h51SQUS9f.svg" alt="coin counter" />
      <span id="coin-count">${sessionStorage.coinCount}</span>
    </div>
    <div id="coin-celebration"></div>
  `;
  document.getElementById('coin-machine').addEventListener('click', openCoinShop);
};
