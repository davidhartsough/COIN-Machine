import iconNames from './icon-names';

const getRandomItemFromArray = array => array[Math.floor(Math.random() * array.length)];

export default () => {
  const randomCursor = getRandomItemFromArray(iconNames);
  const newCursor = `url('https://png.icons8.com/color/${randomCursor}'), url('https://png.icons8.com/${randomCursor}'), grab`;
  const everything = document.querySelectorAll('*');
  everything.forEach(element => {
    element.style.cursor = newCursor;
  });
};
