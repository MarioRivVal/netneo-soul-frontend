import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";

import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
