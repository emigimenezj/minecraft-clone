import { useGameContext } from '../hooks/useGameContext';

import { Cube } from './Cube';

export function Cubes() {
  const [cubes] = useGameContext(state => [state.cubes]);

  return cubes.map(({ id, pos, texture}) => {
    return (
      <Cube
        key={id}
        id={id}
        position={pos}
        texture={texture}
      />
    );
  })
}