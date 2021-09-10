import { StrictMode } from "react";
import ReactDOM from "react-dom";
import SocialNetworkApp from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <StrictMode> <SocialNetworkApp /> </StrictMode>,
  document.getElementById("root")
);

reportWebVitals(); 