import "./styles.css";
import { useState } from "react";
import img from "./arcade-background.jpeg";
const colors = [
  "#F01111",
  "#F07211",
  "#F0C011",
  "#F6E300",
  "#8DF011",
  "#30F011",
  "#0A9D0A"
];

export default function App() {
  const [scores, setScores] = useState({
    scores: { Tansu: 0, Ahmet: 0, Ozan: 0 },
    totalScores: { Tansu: 0, Ahmet: 0, Ozan: 0 },
    max: null
  });
  const setWarningColor = (point) => {
    return colors[point];
  };
  const handleScores = () => {
    const newObj = JSON.parse(JSON.stringify(scores));
    newObj.scores.Tansu = Math.floor(Math.random() * 100);
    newObj.scores.Ahmet = Math.floor(Math.random() * 100);
    newObj.scores.Ozan = Math.floor(Math.random() * 100);
    newObj.max = Object.keys(newObj.scores).reduce((a, b) =>
      newObj.scores[a] === newObj.scores[b]
        ? "nobody"
        : newObj.scores[a] > newObj.scores[b]
        ? a
        : b
    );
    // the following conditions set the total score
    if (newObj.max === "Tansu") {
      newObj.totalScores.Tansu++;
    } else if (newObj.max === "Ahmet") {
      newObj.totalScores.Ahmet++;
    } else if (newObj.max === "Ozan") {
      newObj.totalScores.Ozan++;
    }
    setScores(newObj);
  };
  return (
    <div style={{ backgroundImage: `url(${img})` }} className="main-div">
      <div className="flex-div">
        <div className="round-scores-div">
          <h1>{scores.max ? `${scores.max} wins` : "LET'S GO"} !!!</h1>
          <p>Tansu: {scores.scores.Tansu}</p>
          <p>Ahmet: {scores.scores.Ahmet}</p>
          <p>Ozan: {scores.scores.Ozan}</p>
          <button className="button" onClick={handleScores}>
            Play
          </button>
        </div>
        <fieldset className="table-div">
          <legend>TOTAL SCORES</legend>
          <table>
            <tr>
              <td>Tansu</td>
              <td>Ahmet</td>
              <td>Ozan</td>
            </tr>
            <tr>
              <td
                style={{
                  "background-color": `${setWarningColor(
                    scores.totalScores.Tansu
                  )}`
                }}
              >
                {scores.totalScores.Tansu}
              </td>
              <td
                style={{
                  "background-color": `${setWarningColor(
                    scores.totalScores.Ahmet
                  )}`
                }}
              >
                {scores.totalScores.Ahmet}
              </td>
              <td
                style={{
                  "background-color": `${setWarningColor(
                    scores.totalScores.Ozan
                  )}`
                }}
              >
                {scores.totalScores.Ozan}
              </td>
            </tr>
          </table>
        </fieldset>
      </div>
    </div>
  );
}
