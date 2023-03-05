import { useBox } from '@react-three/cannon';
import { useState } from 'react';
import * as textures from '../images/textures';

export function Cube({ id, position, texture }) {
  const [isHovered, setIsHovered] = useState(false);

  const [ref] = useBox(() => ({
    type: 'Static',
    position
  }));

  const activeTexture = textures[texture + 'Texture']

  return (
    <mesh
      onPointerEnter={e => (e.stopPropagation(), setIsHovered(true))}
      onPointerOut={e => (e.stopPropagation(), setIsHovered(false))}
      ref={ref}
    >
      <boxGeometry attach='geometry' />
      <meshStandardMaterial
        color={isHovered ? 'grey' : 'white'}
        transparent
        map={activeTexture}
        attach='material'
      />
    </mesh>
  );
}