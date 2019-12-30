import React, { Component } from "react";
import "./App.css";
import TodoButton from "./components/button/button.component.jsx";
import InputForm from "./components/input/input.component.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  addTodo() {
    this.setState({ data: [...this.state.data, ""] });
  }

  render() {
    return (
      <div className="container">
        <header className="header">
          <h1 className="main-heading">Todo List</h1>
          <TodoButton addTodo={this.addTodo.bind(this)}> </TodoButton>
        </header>
        <InputForm state={this.state}></InputForm>
      </div>
    );
  }
}

export default App;
