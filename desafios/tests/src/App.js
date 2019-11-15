import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyDialog from "./dialog";
import MyTimer from "./timer";

function App() {
  return (
    <div className="App">
      <MyDialog color="red">
        <h1 className="Dialog-title">Welcome</h1>
        <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
        <MyTimer />
      </MyDialog>
      {/* composite - html dentro do controlo */}
    </div>
  );
}

export default App;
