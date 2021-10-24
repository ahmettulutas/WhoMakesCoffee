import { React,  useState } from "react";
import "./styles.css";
export default function App() {
  const [scores, setScores] = useState([{TANSU:0, allScore : 0},{AHMET:0, allScore : 0},{OZAN:0, allScore : 0}]);
  const [result, setResult] = useState(0);



  const handleClick = () =>  {
    const newObj = JSON.parse(JSON.stringify(scores))
    newObj.map(item => (item.TANSU = Math.floor(Math.random() * 100), item.AHMET = Math.floor(Math.random() * 100), item.OZAN = Math.floor(Math.random() * 100))
      )
    setScores(newObj )
    const max = Object.keys(newObj[0]).reduce((a,b)=> newObj[0][a]> newObj[0][b] ? a : b)
    if(max === "TANSU"){
      newObj[0].allScore ++;
    }
    else if (max === "AHMET") {
      newObj[1].allScore ++;
    }
    else {
      newObj[2].allScore ++;
    }
    setResult(max)
    setScores(newObj)
  };
  

  return (
    <div className="main-div">
      <div className="flex-div">
        <div className="round-scores-div">
      <h1>{result ? `${result} wins` : "LET'S GO"}  !!!</h1>
      <p>Tansu: {scores[0].TANSU}</p>
      <p>Ahmet: {scores[0].AHMET}</p>
      <p>Ozan: {scores[0].OZAN}</p>
      <button className="button" onClick={handleClick}>
        Click Me
      </button>
      </div>
      <div className="table-div">
        <h1>TOTAL SCORES</h1>
        <table>
          <tr>
          <th>Tansu</th>
          <th>Ahmet</th>
          <th>Ozan</th>
          </tr>
          <tr>
          <td>{scores[0].allScore}</td>
          <td>{scores[1].allScore}</td>
          <td>{scores[2].allScore}</td>
          </tr>
        </table>
      </div>
      </div>
    </div>
  );
}
