const getRandomNumber = () => Date.now() * Math.floor(Math.random() * 100 + 1);

const handleError = error => {
  error.srcElement.src = 'https://placeimg.com/144/144/animals';
};

const createNewMedia = keyword => {
  const newMedia = document.createElement('img');
  newMedia.src = `https://loremflickr.com/144/144/${keyword}?random=${getRandomNumber()}`;
  newMedia.addEventListener('error', handleError);
  return newMedia;
};

const mediaSwap = () => {
  const input = document.getElementById('media-swap-input');
  const word = input.value.trim();
  document.getElementById('media-swap-container').innerHTML = '';
  const everything = document.querySelectorAll('img, video, audio, object, embed, iframe');
  everything.forEach(element => {
    if (!element.classList.contains('dont-swap-me')) {
      element.parentNode.replaceChild(createNewMedia(word), element);
    }
  });
};

export default () => {
  if (document.getElementById('media-swap-container') === null) {
    const mediaSwapContainer = document.createElement('div');
    mediaSwapContainer.id = 'media-swap-container';
    document.body.appendChild(mediaSwapContainer);
  }
  document.getElementById('media-swap-container').innerHTML = `
    <div id="media-swap">
      <div id="media-swap-overlay"></div>
      <div id="media-swap-dialog-wrapper">
        <div id="media-swap-dialog">
          <div>The Media Swap will replace all media on the page with images of your choosing.</div>
          <div>
            <label for="media-swap-input">What would you like to see? Please provide a keyword.</label>
            <input type="text" name="media-swap-input" id="media-swap-input" />
          </div>
          <div>If you have no preference, random images will be used.</div>
          <button id="media-swap-submit" type="button">Make it happen!</button>
        </div>
      </div>
    </div>
  `;
  document.getElementById('media-swap-submit').addEventListener('click', mediaSwap);
};
