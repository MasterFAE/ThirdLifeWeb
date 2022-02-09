import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import Routing from "./components/Routing";
import HomePage from "./pages/HomePage";
import axios from "axios";
import { createStore, applyMiddleware, Store, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import user from "./redux/reducers/userReducer";
import general from "./redux/reducers/generalReducer";

// axios.defaults.baseURL = "http://localhost:5555/";
axios.defaults.baseURL = "https://37.122.140.155:5555/";
axios.defaults.withCredentials = true;
// axios.defaults.headers.post["Content-Type"] = "application/json";

const rootReducer = combineReducers({ user, general });

//@ts-ignore
const store: Store = createStore(rootReducer, applyMiddleware(thunk));
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
