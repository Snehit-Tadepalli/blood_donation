import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./Components/App/App";
import { GlobalContextProvider } from "./context/GlobalContext";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </StrictMode>
);
