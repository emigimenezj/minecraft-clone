import { nanoid } from 'nanoid';
import { create } from 'zustand';

export const useGameContext = create(update => ({
  texture: 'dirt',
  cubes: new Map()
    .set('1,0,0', {
      id: nanoid(),
      pos: [1, 0, 0],
      texture: 'dirt'
    })
    .set('1,2,1', {
      id: nanoid(),
      pos: [1, 2, 1],
      texture: 'log'
    })
    .set('0,0,1', {
      id: nanoid(),
      pos: [0, 0, 1],
      texture: 'wood'
    }),
  addCube: pos => {
    const key = pos.toString();
    update( ({cubes, texture}) => cubes.has(key) ? {} : cubes.set(key, {id: nanoid(), pos, texture}) );
  },
  removeCube: pos => {
    const key = pos.toString();
    update( ({cubes}) => (cubes.delete(key), cubes) );
  },
  setTexture: texture => {
    update( _ => ({texture}) );
  },
  saveWorld: _ => {},
  resetWorld: _ => update( ({cubes}) => (cubes.clear(), cubes) ),
}));