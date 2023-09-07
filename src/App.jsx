import Post from "./components/Post";

function App() {
  return (
    <main>
      <Post author="Maximilian" body="React.js is awesome!" />
      <Post author="Manuel" body="Check out the full course!" />
    </main>
  );
}

export default App;

/**
 * 1. Components are simply functions that return JSX code
 * 2. In places where you use JSX you must have one root
 * JSX element like the main element.
 *
 */
