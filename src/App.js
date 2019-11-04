import React from "react";

import "./App.css";
import TableA from './components/TableA'

function App() {
  return (
    <div className="App">
      <h5 className="title">Crypto Currency</h5>
      <TableA float="right" name="first" />
      <TableA float="left" name="second" />
    </div>
  );
}

export default App
