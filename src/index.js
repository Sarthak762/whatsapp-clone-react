import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import StateProvider from "./StateProvider";
import { initaialState, reducer } from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initaialState}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
