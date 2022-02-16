import "./App.css";
import { useState } from "react";

function App() {
  const [initial, setInitial] = useState(0);

  const addDiv = () => {
    setInitial(initial + 1);
  };
  const remDiv = () => {
    setInitial(initial - 1);
  };
  return (
    <div className="App">
      {}
      <button onClick={addDiv}>Increase</button>
      <button onClick={remDiv}>Decrease</button>
    </div>
  );
}

export default App;
