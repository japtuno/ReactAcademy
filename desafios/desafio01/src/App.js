import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyHeader from "./header";

function App() {
  return (
    <div className="App">
      <MyHeader
        title="My first test with subtitle"
        subtitle="optional sub title"
      />
      <hr></hr>
      <MyHeader title="My first test without subtitle" />
    </div>
  );
}

export default App;
