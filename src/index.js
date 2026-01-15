// src/main.tsx or src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// Safely get root element
const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container missing in index.html");
}

// Create root
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Optional performance reporting
reportWebVitals(console.log);
