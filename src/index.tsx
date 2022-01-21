import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import Routing from "./components/Routing";
import HomePage from "./pages/HomePage";
import axios from "axios";
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import userReducer from "./redux/reducers/userReducer";

axios.defaults.baseURL = "http://localhost:5555/";
axios.defaults.withCredentials = true;
//@ts-ignore
const store: Store = createStore(userReducer, applyMiddleware(thunk));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routing>
        <App />
      </Routing>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
