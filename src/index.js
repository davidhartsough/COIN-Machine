import initializeCoinMachine from './the-machine';
import initializeCoinShop from './coin-shop';
import initializeCoinCollection from './coin-collection';
import initializeCelebration from './celebration';

if (!sessionStorage.coinCount) {
  sessionStorage.coinCount = 0;
}

if (document.getElementById('coin-machine-container') === null) {
  initializeCoinMachine();
  initializeCoinShop();
  initializeCoinCollection();
  initializeCelebration();
  console.log('COIN MACHINE ACTIVATED');
}
