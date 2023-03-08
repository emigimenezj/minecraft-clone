import { usePlane } from '@react-three/cannon';
import { useGameContext } from '../hooks/useGameContext';
import { ground } from '../images/textures';

export function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0]
  }));

  ground.repeat.set(100, 100);

  const [addCube] = useGameContext(state => [state.addCube]);

  const handleClickGround = event => {
    event.stopPropagation();
    const [x, _, z] = Object.values(event.point)
      .map(n => Math.round(n));

    addCube([x, 0, z]);
  }

  return (
    <mesh
      onClick={handleClickGround}
      ref={ref}
    >
      <planeGeometry attach='geometry' args={[100, 100]} />
      <meshStandardMaterial attach='material' map={ground} />
    </mesh>
  );
}