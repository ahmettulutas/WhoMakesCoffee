<<<<<<< HEAD
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
      <h1 style={{ fontSize: "10vw", position: "initial" }}>
        {result} wins !!!
      </h1>
      <p style={{ fontSize: 30 }}>Tansu: {skorlar[0].TANSU}</p>
      <p style={{ fontSize: 30 }}>Ahmet: {skorlar[0].AHMET}</p>
      <p style={{ fontSize: 30 }}>Ozan: {skorlar[0].OZAN}</p>
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
=======
import { React, useState } from "react";
import "./styles.css";
export default function App() {
  const [skorlar, setSkorlar] = useState({ TANSU: 0, AHMET: 0, YAVUZ: 0 });
  const [sonuc, setSonuc] = useState(null);
  const findMax = (obj) => {
    const enBuyuk = Object.keys(obj).reduce((a, b) =>
      obj[a] > obj[b] ? a : b
    );
    return enBuyuk;
  };
  const enBuyuk = findMax(skorlar);
  const handleClick = () => {
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
      MELTEM: Math.floor(Math.random() * 100)
    }));

    setSonuc((prev) => enBuyuk);
  };
  return (
    <div className="mainDiv">
      <h1 style={{ fontSize: 60, position: "initial" }}>
        {sonuc === null ? "LET'S GO :)" : `${sonuc} wins!!!`}
      </h1>
      <p style={{ fontSize: 30 }}>Tansu: {skorlar.TANSU}</p>
      <p style={{ fontSize: 30 }}>Ahmet: {skorlar.AHMET}</p>
      <p style={{ fontSize: 30 }}>Meltem: {skorlar.MELTEM}</p>
      <button className="button" onClick={handleClick}>
        Who Makes Coffee?
      </button>
    </div>
  );
}
>>>>>>> origin
