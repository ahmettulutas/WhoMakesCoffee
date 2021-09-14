import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./AppFunction";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
