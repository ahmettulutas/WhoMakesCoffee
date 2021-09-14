import { React,  useState } from "react";
import "./styles.css";
export default function App() {
  const [skorlar, setSkorlar] = useState({ TANSU: 0, AHMET: 0, YAVUZ: 0 });
  const [sonuc, setSonuc] = useState("LET'S GO");
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
        {sonuc}
      </h1>
      <p style={{ fontSize: 30 }}>Tansu: {skorlar.TANSU}</p>
      <p style={{ fontSize: 30 }}>Ahmet: {skorlar.AHMET}</p>
      <p style={{ fontSize: 30 }}>Yavuz: {skorlar.MELTEM}</p>
      <button className="button" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}
