import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Pop from "./context/Pop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Pop>
      <App />
    </Pop>
  </StrictMode>
);
