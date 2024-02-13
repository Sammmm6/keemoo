import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Super sure?",
  "u making me sad",
  "say yess..",
  "please :(",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    // Corregido el nombre de la función handleNoClick
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="cute corgi"
            className="corgiii"
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHFhYWNuMHNlanlmdHptMjBzZmYwcDh5NXFpdjBld2Nxa3dsMWozcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/25688FI5AUUVf04upZ/giphy.gif"
          />
          <div className="text">Yaaayyyy</div>
        </>
      ) : (
        <>
          <img
            alt="corgi and bunnie"
            className="corgi"
            src="https://media.giphy.com/media/bA5cblwksWXDOwSzUI/giphy.gif"
          />
          <div className="título">Will you be my valentine?</div>

          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="NoButton">
              {" "}
              {/* Cerrado el botón que estaba mal abierto */}
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
