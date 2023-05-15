import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./Components/App/App";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
