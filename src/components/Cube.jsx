import { useBox } from '@react-three/cannon';
import { useState } from 'react';

import { useGameContext } from '../hooks/useGameContext';

import * as textures from '../images/textures';

export function Cube({ id, position, texture }) {
  const [isHovered, setIsHovered] = useState(false);
  const [removeCube] = useGameContext(state => [state.removeCube]);

  const [ref] = useBox(() => ({ type: 'Static', position }));

  return (
    <mesh
      onPointerEnter={ e => (e.stopPropagation(), setIsHovered(true)) }
      onPointerOut={ e => (e.stopPropagation(), setIsHovered(false)) }
      onClick={ e => (e.stopPropagation(), e.altKey?removeCube(id):null) }
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