import findAndReplaceDOMText from 'findandreplacedomtext';

const regExpEscape = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const wordSwap = () => {
  const findInput = document.getElementById('word-swap-find');
  const replaceInput = document.getElementById('word-swap-replace');
  const findWord = findInput.value.trim();
  const replaceWord = replaceInput.value.trim();
  if (findWord.length && replaceWord.length) {
    document.getElementById('word-swap-container').innerHTML = '';
    const wordRegExp = new RegExp(regExpEscape(findWord), 'gi');
    findAndReplaceDOMText(document.body, {
      find: wordRegExp,
      replace: replaceWord,
    });
  } else {
    document.getElementById('word-swap-error').className = 'show';
  }
};

export default () => {
  if (document.getElementById('word-swap-container') === null) {
    const wordSwapContainer = document.createElement('div');
    wordSwapContainer.id = 'word-swap-container';
    document.body.appendChild(wordSwapContainer);
  }
  document.getElementById('word-swap-container').innerHTML = `
    <div id="word-swap">
      <div id="word-swap-overlay"></div>
      <div id="word-swap-dialog-wrapper">
        <div id="word-swap-dialog">
          <div id="word-swap-error" class="hide">Please provide a word to find and a word to replace.</div>
          <div>
            <label for="find">Word to swap out</label>
            <input type="text" name="find" id="word-swap-find" />
          </div>
          <div>
            <label for="replace">Replacement word</label>
            <input type="text" name="replace" id="word-swap-replace" />
          </div>
          <button id="word-swap-submit" type="button">Swap 'em!</button>
        </div>
      </div>
    </div>
  `;
  document.getElementById('word-swap-submit').addEventListener('click', wordSwap);
};
