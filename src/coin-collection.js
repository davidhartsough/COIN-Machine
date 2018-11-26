import rewardAction from './reward-action';

let scrollTimeout;

const containsCoinPrefix = elem => {
  const elemId = elem.id || '';
  return elemId.indexOf('coin-') !== -1;
};

const eventHandler = event => {
  if (event.path.some(containsCoinPrefix)) {
    return;
  }
  let eventName = event.type;
  switch (eventName) {
    case 'dblclick':
      eventName = 'double click';
      break;
    case 'keyup':
      eventName = 'key press';
      break;
    case 'contextmenu':
      eventName = 'menu open';
      break;
    case 'dragend':
      eventName = 'drag';
      break;
    case 'scroll':
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        rewardAction(eventName);
      }, 120);
      return;
    default:
      break;
  }
  rewardAction(eventName);
};

const events = [
  'click',
  'dblclick',
  'contextmenu',
  'copy',
  'cut',
  'dragend',
  'paste',
  'keyup',
  'scroll',
];

export default () => {
  events.forEach(event => {
    document.addEventListener(event, eventHandler);
  });
};
