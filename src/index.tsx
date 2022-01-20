import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import Routing from "./components/Routing";
import HomePage from "./pages/HomePage";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5555/";
ReactDOM.render(
  <React.StrictMode>
    <Routing>
      <App />
    </Routing>
  </React.StrictMode>,
  document.getElementById("root")
);
