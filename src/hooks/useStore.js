import { nanoid } from 'nanoid';
import { create } from 'zustand';


export const useStore = create(set => ({
  texture: 'dirt',
  cubes: [{
    id: nanoid(),
    pos: [1, 1, 1],
    texture: 'dirt'
  }, {
    id: nanoid(),
    pos: [1, 10, 1],
    texture: 'log'
  }],
  addCube: () => {},
  removeCube: () => {},
  setTexture: () => {},
  saveWorld: () => {},
  resetWorld: () => {},
}));