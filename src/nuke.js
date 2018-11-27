import initializeCoinMachine from './the-machine';
import initializeCoinShop from './coin-shop';
import initializeCelebration from './celebration';
import playSound from './play-sound';

const rebuild = () => {
  initializeCoinMachine();
  initializeCoinShop();
  initializeCelebration();
};

export default () => {
  if (document.body.id !== 'nuked') {
    playSound('explosion');
    const allTheText = document.body.innerText;
    document.head.innerHTML = `
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
      <title>${document.title}</title>
    `;
    document.body.id = 'nuked';
    document.body.innerHTML = '<p id="all-the-text"></p>';
    document.getElementById('all-the-text').innerText = allTheText;
    rebuild();
  }
};
