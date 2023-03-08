import { nanoid } from 'nanoid';
import { create } from 'zustand';

export const useGameContext = create(set => ({
  texture: 'dirt',
  cubes: [{
    id: nanoid(),
    pos: [1, 0, 0],
    texture: 'dirt'
  }, {
    id: nanoid(),
    pos: [1, 2, 1],
    texture: 'log'
  }, {
    id: nanoid(),
    pos: [0, 0, 1],
    texture: 'wood'
  }],
  addCube: (x, y, z) => {
    set(state => ({
      cubes: [...state.cubes, {
        id: nanoid(),
        texture: state.texture,
        pos: [x, y, z]
      }]
    }));
  },
  removeCube: id => {
    set(state => ({
      cubes: state.cubes.filter(cube => cube.id !== id)
    }));
  },
  setTexture: texture => {
    set(() => ({ texture }));
  },
  saveWorld: () => {},
  resetWorld: () => {},
}));