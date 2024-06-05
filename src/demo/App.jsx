import { useState } from "react";
import "./App.css";
import { AppContent } from "./AppContent";

function App() {
  const [count, setCount] = useState(0);

  return <AppContent {...{ setCount, count }} />;
}

export default App;
