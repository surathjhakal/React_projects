import { useEffect, useState } from "react";
import "./App.css";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";

function App() {
  const [counters, setCounters] = useState([
    { id: 1, value: 4 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);
  const [totalLength, setLength] = useState(1);
  useEffect(() => {
    let tempLength = 0;
    counters.map((counter) => {
      if (counter.value > 0) {
        tempLength += 1;
      }
    });
    setLength(tempLength);
  }, [counters]);
  return (
    <div className="app">
      <Navbar totalLength={totalLength} />
      <Counters counters={counters} setCounters={setCounters} />
    </div>
  );
}

export default App;
