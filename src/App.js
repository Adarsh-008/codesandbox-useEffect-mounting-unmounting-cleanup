import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  const [count, setCount] = useState(window.screen.width);

  const actualWidth = () => {
    setCount(window.innerWidth);
    console.log("Width:", count);
  };

  useEffect(() => {
    // mounting and updating
    window.addEventListener("resize", actualWidth);
  });

  useEffect(() => {
    // Cleanup ie unmounting.
    window.removeEventListener("remove", actualWidth);
  });

  return (
    <div className="App">
      <p>Actual size of the window is :</p>
      <p>{count}</p>
    </div>
  );
}
