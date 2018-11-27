import shopItems from './shop-items';
import playSound from './play-sound';

const containsCoinShopDialog = elem => {
  const elemId = elem.id || '';
  return elemId === 'coin-shop-dialog';
};

const closeCoinShop = event => {
  if (event === 'skip' || !event.path.some(containsCoinShopDialog)) {
    document.getElementById('coin-shop').className = 'hide';
  }
};

const subtractCoins = cost => {
  sessionStorage.coinCount = Number(sessionStorage.coinCount) - cost;
  document.getElementById('coin-count').innerText = sessionStorage.coinCount;
};

const buy = item => {
  const { cost, activate } = item;
  if (Number(sessionStorage.coinCount) >= cost) {
    closeCoinShop('skip');
    subtractCoins(cost);
    playSound('buy');
    activate();
  } else {
    alert("WOMP. You don't have enough coins for that yet!");
  }
};

const createCoinShop = () => {
  let optionsHtml = '';
  shopItems.forEach(option => {
    optionsHtml += `
      <div class="shop-option" id="${option.id}">
        <div class="shop-option-title">${option.name}</div>
        <div class="shop-option-cost">
          <img class="shop-option-coin dont-swap-me" src="https://vectr.com/davidhartsough/h51SQUS9f.svg" alt="coin"/>
          ${option.cost}
        </div>
      </div>
    `;
  });
  return `
    <div id="coin-shop">
      <div id="coin-shop-overlay"></div>
      <div id="coin-shop-dialog-wrapper">
        <div id="coin-shop-dialog">
          <div id="coin-shop-title">Buy something from the COIN Machine!</div>
          <div id="coin-shop-text">You earned it!</div>
          <div id="shop-options">
            ${optionsHtml}
          </div>
        </div>
      </div>
    </div>
  `;
};

export default () => {
  const coinShopDiv = document.createElement('div');
  coinShopDiv.id = 'coin-shop-container';
  document.body.appendChild(coinShopDiv);
  document.getElementById('coin-shop-container').innerHTML = createCoinShop();
  shopItems.forEach(option => {
    document.getElementById(option.id).addEventListener('click', () => {
      buy(option);
    });
  });
  document.getElementById('coin-shop-dialog-wrapper').addEventListener('click', closeCoinShop);
};
