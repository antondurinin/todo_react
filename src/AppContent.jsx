import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// TODO CRUD Create Read Update Delete
// Create =  add a new TODO
// Read = show the todos 👍
// Update = modify an existing Todo
// Delete = delete a todo
// Bonus: filter todos using a search bar

export function AppContent({ setCount, count }) {
  return (
    <>
      <ImagesSection />
      <h1>Vite + React</h1>
      <div className="card" style={{ borderRadius: "4px" }}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

function ImagesSection() {
  return (
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  );
}
