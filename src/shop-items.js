import activateNuke from './nuke';
import cursorSwap from './cursor-swap';

export default [
  {
    id: 'nuke',
    name: 'Nuke',
    cost: 25,
    activate: activateNuke,
  },
  {
    id: 'cursorSwap',
    name: 'Cursor Swap',
    cost: 50,
    activate: cursorSwap,
  },
  {
    id: 'editMode',
    name: 'Edit Mode',
    cost: 250,
  },
  {
    id: 'disco',
    name: 'Disco Ball',
    cost: 100,
  },
  {
    id: 'wordSwap',
    name: 'Word Swap',
    cost: 100,
  },
  {
    id: 'mediaBomb',
    name: 'Media Bomb',
    cost: 100,
  },
];
