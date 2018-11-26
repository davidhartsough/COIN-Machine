export default () => {
  console.log('BOOM!');
  /*
  if (document.body.id !== 'nuked') {
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
    // createTheMachine();
  }
  */
};
