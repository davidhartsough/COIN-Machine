import disco from './disco';
import playSound from './play-sound';

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const randomColor = type => {
  const c = type === 'bright' ? randomNumber(130, 255) : randomNumber(110, 190);
  return `rgb(${c},${c},${c})`;
};

const getCurrentRadius = (r, t) => {
  const cr = Math.abs(r * Math.cos(0) * Math.sin(t) - r * Math.cos(Math.PI) * Math.sin(t)) / 2.5;
  return cr;
};

const initializeDiscoBall = () => {
  const radius = 50;
  const squareSize = 6.5;
  const prec = 19.55;
  const fuzzy = 0.001;
  const inc = (Math.PI - fuzzy) / prec;
  const discoBall = document.getElementById('discoBall');

  for (let t = fuzzy; t < Math.PI; t += inc) {
    const z = radius * Math.cos(t);
    const currentRadius = getCurrentRadius(radius, t);
    const circumference = Math.abs(2 * Math.PI * currentRadius);
    const squaresThatFit = Math.floor(circumference / squareSize);
    const angleInc = (Math.PI * 2 - fuzzy) / squaresThatFit;
    const nextIterator = angleInc / 2 + fuzzy;
    for (let i = nextIterator; i < Math.PI * 2; i += angleInc) {
      const square = document.createElement('div');
      const squareTile = document.createElement('div');
      squareTile.style.width = `${squareSize}px`;
      squareTile.style.height = `${squareSize}px`;
      squareTile.style.transformOrigin = '0 0 0';
      squareTile.style.webkitTransformOrigin = '0 0 0';
      squareTile.style.webkitTransform = `rotate(${i}rad) rotateY(${t}rad)`;
      squareTile.style.transform = `rotate(${i}rad) rotateY(${t}rad)`;
      if ((t > 1.3 && t < 1.9) || (t < -1.3 && t > -1.9)) {
        squareTile.style.backgroundColor = randomColor('bright');
      } else {
        squareTile.style.backgroundColor = randomColor('any');
      }
      square.appendChild(squareTile);
      square.className = 'square';
      squareTile.style.webkitAnimation = 'reflect 2s linear infinite';
      squareTile.style.webkitAnimationDelay = `${randomNumber(0, 20) / 10}s`;
      squareTile.style.animation = 'reflect 2s linear infinite';
      squareTile.style.animationDelay = `${randomNumber(0, 20) / 10}s`;
      squareTile.style.backfaceVisibility = 'hidden';
      const x = radius * Math.cos(i) * Math.sin(t);
      const y = radius * Math.sin(i) * Math.sin(t);
      square.style.webkitTransform = `translateX(${x}px) translateY(${y}px) translateZ(${z}px)`;
      square.style.transform = `translateX(${x}px) translateY(${y}px) translateZ(${z}px)`;
      discoBall.appendChild(square);
    }
  }
};

export default () => {
  const discoBall = document.createElement('div');
  discoBall.id = 'disco-ball';
  document.body.appendChild(discoBall);
  document.getElementById('disco-ball').innerHTML = `
    <div id="discoBallLight"></div>
    <div id="discoBall">
      <div id="discoBallMiddle"></div>
    </div>
  `;
  initializeDiscoBall();
  disco();
  playSound('disco');
};
