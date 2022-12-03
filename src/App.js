import { useState } from "react";
import "./App.css";

function App() {
  const [colorIndex, setColorIndex] = useState(0);

  const colors = [
    "green",
    "red",
    "blue",
    "yellow",
    "grey",
    "lightblue",
    "pink",
  ];

  const buttonHandler = () => {
    const newIndex = colorIndex + 1;
    if (colors[newIndex]) {
      setColorIndex(newIndex);
    } else {
      setColorIndex(0);
    }
  };

  return (
    <div style={{ backgroundColor: colors[colorIndex] }}>
      <div className="container 100vh">
        <div className="container-box d-flex align-items-center justify-content-center flex-column">
          <h1 className="text-center">
            React Background <br />
            Color Chnager
          </h1>
          <div className="">
            <button className="mt-1" type="submit" onClick={buttonHandler}>
              Change Background
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
