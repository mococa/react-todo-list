import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import "./styles/mobileStyles.css";
import { TodoProvider } from "./providers/todos";
import { ThemeProvider } from "./providers/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
    <TodoProvider>
      <App />
    </TodoProvider>{" "}
    </ThemeProvider>{" "}
  </React.StrictMode>,
  document.getElementById("root")
);
