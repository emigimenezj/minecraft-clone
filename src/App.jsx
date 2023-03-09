import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Cubes } from './components/Cubes';
import { FPV as Fpv } from './components/FPV';
import { Ground } from './components/Ground';
import { Player } from './components/Player';
import { HotkeyBar } from './components/HotkeyBar';
import { Menu } from './components/Menu';

function App() {

  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <Fpv />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <HotkeyBar />
      <Menu />
      <div className="pointer">+</div>
    </>
  );
}

export default App
