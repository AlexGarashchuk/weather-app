import React from "react";
import "./index.css";
import { Details } from "./Components/Details";
import { Basic } from "./Components/Basic";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <div className="box">
        <h2>Sinoptik</h2>
        <Route exact path="/" component={Basic} />
        <Route path="/details" component={Details} />
      </div>
    </div>
  );
}

export default App;
