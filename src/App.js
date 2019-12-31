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

    this.addTodo = this.addTodo.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  addTodo() {
    // console.log("ADDDED");
    this.setState({ data: [...this.state.data, ""] });
  }

  handleKeyPress(event) {
    if (event.key === "Enter" && event.target.value ) {
      console.log('aaaaa')
      this.addTodo();
    }
  }



  render() {
    return (
      <div className="container">
        <header className="header">
          <h1 className="main-heading">Todo List</h1>
          <TodoButton addTodo={this.addTodo}> </TodoButton>
        </header>
        <InputForm
          state={this.state}
          handleKeyPress={this.handleKeyPress}
        ></InputForm>
      </div>
    );
  }
}

export default App;
