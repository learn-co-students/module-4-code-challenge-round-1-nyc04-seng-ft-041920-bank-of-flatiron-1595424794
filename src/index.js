import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {Provider} from './components/context'
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
