import { useBox } from '@react-three/cannon';
import { useState } from 'react';

import { useGameContext } from '../hooks/useGameContext';

import * as textures from '../images/textures';

export function Cube({ position, texture }) {
  const [isHovered, setIsHovered] = useState(false);
  const [addCube, removeCube] = useGameContext(state => [state.addCube, state.removeCube]);

  const [ref] = useBox(() => ({ type: 'Static', position }));

  const handleClick = event => {
    event.stopPropagation();
    if (event.altKey) return removeCube(position);

    const [target] = event.intersections;
    const {x, y, z} = target.face.normal;
    const [X, Y, Z] = position;

    addCube([x+X, y+Y, z+Z]);
  }

  return (
    <mesh
      onPointerEnter={ e => (e.stopPropagation(), setIsHovered(true)) }
      onPointerOut={ e => (e.stopPropagation(), setIsHovered(false)) }
      onClick={handleClick}
      ref={ref}
    >
      <boxGeometry attach='geometry' />
      <meshStandardMaterial
        color={isHovered ? 'grey' : 'white'}
        transparent
        map={textures[texture]}
        attach='material'
      />
    </mesh>
  );
}