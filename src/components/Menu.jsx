import { useGameContext } from '../hooks/useGameContext';

export function Menu() {

  const [resetWorld, saveWorld] = useGameContext(state => [state.resetWorld, state.saveWorld]);

  return (
    <section className="menu">
      <h1>MENU</h1>
      <button onClick={() => resetWorld()}>
        Reset
      </button>
      
      <button onClick={() => saveWorld()}>
        Save
      </button>
    </section>
  );
}