import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ApppContextProvider } from "./context/ApppContext.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ApppContextProvider>
      <App />
    </ApppContextProvider>
  </BrowserRouter>
);
