let discoInterval;

const getRandomNumber = (min, max) => Math.floor(Math.random() * max + min);

export default () => {
  const elements = document.querySelectorAll(
    'body, h1, h2, h3, h4, h5, h6, a, button, main, section, header, footer, thead, tfoot, th, article'
  );
  clearInterval(discoInterval);
  discoInterval = setInterval(() => {
    const backgroundColor = `hsl(${getRandomNumber(1, 359)}, 100%, 50%)`;
    const color = `hsl(${getRandomNumber(1, 359)}, 100%, 50%)`;
    elements.forEach(element => {
      element.style.backgroundColor = backgroundColor;
      element.style.color = color;
    });
  }, 1500);
};
