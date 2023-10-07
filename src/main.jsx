import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "normalize.css"; //si viene del package.json se importa asi
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
