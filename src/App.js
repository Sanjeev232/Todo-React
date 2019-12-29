import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <h1 className="main-heading">Todo List</h1>
          <button className="add-buttoon">+</button>
        </header>
      </div>
    );
  }
}

export default App;
