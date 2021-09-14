import { React, useImperativeHandle, useState } from "react";
import "./styles.css";
export default function App() {
  const [skorlar, setSkorlar] = useState({ tansu: 0, ahmet: 0, yavuz: 0 });
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
      tansu: Math.floor(Math.random() * 100)
    }));
    setSkorlar((prev) => ({
      ...prev,
      ahmet: Math.floor(Math.random() * 100)
    }));
    setSkorlar((prev) => ({
      ...prev,
      yavuz: Math.floor(Math.random() * 100)
    }));

    setSonuc((prev) => enBuyuk);
  };
  return (
    <div className="mainDiv">
      <h1 style={{ fontSize: 60, position: "initial" }}>
        {enBuyuk.toUpperCase()}
      </h1>
      <p style={{ fontSize: 30 }}>Tansu: {skorlar.tansu}</p>
      <p style={{ fontSize: 30 }}>Ahmet: {skorlar.ahmet}</p>
      <p style={{ fontSize: 30 }}>Yavuz: {skorlar.yavuz}</p>
      <button className="button" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}
