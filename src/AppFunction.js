import { React,  useState } from "react";
import "./styles.css";
export default function App() {
  const [skorlar, setSkorlar] = useState([{TANSU:0, allScore : 0},{AHMET:0, allScore : 0},{OZAN:0, allScore : 0}]);
  const [result, setResult] = useState(0);



  const handleClick = () =>  {
    const newObj = JSON.parse(JSON.stringify(skorlar))
    newObj.map(item => (item.TANSU = Math.floor(Math.random() * 100), item.AHMET = Math.floor(Math.random() * 100), item.OZAN = Math.floor(Math.random() * 100))
      )
    setSkorlar(newObj )
    const max = Object.keys(newObj[0]).reduce((a,b)=> newObj[0][a]> newObj[0][b] ? a : b)
    console.log(max)
    console.log(newObj[0].TANSU)
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
    setSkorlar(newObj)
  };
  
    /*const handleClick = () => {
              setSkorlar((prev) => ({
                ...prev,
                TANSU: Math.floor(Math.random() * 100)
              }));
              setSkorlar((prev) => ({
                ...prev,
                AHMET: Math.floor(Math.random() * 100)
              }));
              setSkorlar((prev) => ({
                ...prev,
                OZAN: Math.floor(Math.random() * 100)
              }));
            console.log(JSON.stringify(skorlar))
            */
  return (
    <div className="mainDiv">
      <h1>{result} wins !!!</h1>
      <p>Tansu: {skorlar[0].TANSU}</p>
      <p>Ahmet: {skorlar[0].AHMET}</p>
      <p>Ozan: {skorlar[0].OZAN}</p>
      <button className="button" onClick={handleClick}>
        Click Me
      </button>
      <div>
        <table>
          <tr>
          <th>Tansu</th>
          <th>Ahmet</th>
          <th>Ozan</th>
          </tr>
          <tr>
          <td>{skorlar[0].allScore}</td>
          <td>{skorlar[1].allScore}</td>
          <td>{skorlar[2].allScore}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
