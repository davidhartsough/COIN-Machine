chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    file: "coin-machine.js"
  });
  chrome.tabs.insertCSS({
    file: "coin-machine.css"
  });
});
