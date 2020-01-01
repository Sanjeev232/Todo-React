import React, { Component } from "react";
import "./App.css";
import TodoButton from "./components/button/button.component.jsx";
import TodoList from "./components/TodoList/todolist.component.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    // changed to Es6 arrow function so no need to bind
    // this.addInput = this.addInput.bind(this);
    // this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  addInput = () => {
    // console.log("ADDDED");
    this.setState({ data: [...this.state.data, ""] });
  };

  handleKeyPress = event => {
    if (event.key === "Enter" && event.target.value !== "") {
      // console.log('aaaaa')
      event.preventDefault();
      this.addInput();
    } else if (event.key === "Enter" && event.target.value === "") {
      alert("Please Enter Your Todo");
    }
  };

  handleChange = (e, index) => {
    this.state.data[index] = e.target.value;

    //set the changed state
    this.setState({ data: this.state.data });
  };

  render() {
    return (
      <div className="container">
        <header className="header">
          <h1 className="main-heading">Todo List</h1>
          <TodoButton addInput={this.addInput}> </TodoButton>
        </header>
        <TodoList
          state={this.state}
          handleKeyPress={this.handleKeyPress}
          handleChange={this.handleChange}
        ></TodoList>
      </div>
    );
  }
}

export default App;
