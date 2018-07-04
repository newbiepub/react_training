import React from "react";
import ReactDOM from "react-dom";
import Home from "./views/home";
import Counter from "./views/Counter";
import { Provider } from "react-redux";
import { store } from "./store/store";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <React.Fragment>
          <Home />
          <Counter />
        </React.Fragment>
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
