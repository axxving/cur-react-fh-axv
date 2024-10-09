import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App title="hola mundo desde el main" />
  </StrictMode>
);
