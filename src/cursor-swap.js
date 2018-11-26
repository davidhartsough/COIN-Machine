export default () => {
  // TODO: get random icon from url
  const newCursor = "url('https://img.icons8.com/color/32/000000/rick-sanchez.png'), grab";
  document.body.style.cursor = newCursor;
  const everything = document.querySelectorAll('body *');
  everything.forEach(element => {
    element.style.cursor = newCursor;
  });
};
