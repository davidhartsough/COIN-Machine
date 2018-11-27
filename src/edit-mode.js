export default () => {
  document.body.contentEditable = 'true';
  const everything = document.querySelectorAll('body *');
  everything.forEach(element => {
    element.contentEditable = 'true';
  });
  document.designMode = 'on';
};
