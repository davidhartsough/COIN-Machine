import activateNuke from './nuke';
import cursorSwap from './cursor-swap';
import editMode from './edit-mode';
import discoBall from './disco-ball';
import wordSwap from './word-swap';
import mediaSwap from './media-swap';

export default [
  {
    id: 'nuke',
    name: 'Bomb',
    cost: 50,
    activate: activateNuke
  },
  {
    id: 'cursorSwap',
    name: 'Cursor Swap',
    cost: 250,
    activate: cursorSwap
  },
  {
    id: 'editMode',
    name: 'Edit Mode',
    cost: 150,
    activate: editMode
  },
  {
    id: 'disco',
    name: 'Disco Ball',
    cost: 300,
    activate: discoBall
  },
  {
    id: 'wordSwap',
    name: 'Word Swap',
    cost: 100,
    activate: wordSwap
  },
  {
    id: 'mediaSwap',
    name: 'Media Swap',
    cost: 200,
    activate: mediaSwap
  }
];
