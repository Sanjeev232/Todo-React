import React, { Component } from "react";
import "./App.css";
import TodoButton from "./components/button/button.component.jsx";
import TodoList from "./components/TodoList/todolist.component.jsx";
import Resetbutton from "./components/button/reset.component.jsx";

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

    const dataLength = this.state.data.length;

    if (dataLength === 0 || this.state.data[dataLength - 1].trim() !== "") {
      this.setState({ data: [...this.state.data, ""] });
    } else {
      alert("Please Enter Your Todo First");
    }
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      // console.log('aaaaa')
      this.addInput();
    }
  };

  handleChange = (e, index) => {
    this.state.data[index] = e.target.value.trim();

    //set the changed state
    this.setState({ data: this.state.data });
    console.log(this.state.data, "!!!");
  };

  handleRemove = index => {
    //remove items at the index
    this.state.data.splice(index, 1);
    console.log(this.state.data, "!!!");

    //update the state
    this.setState({ data: this.state.data });
    console.log(this.state.data, "!!!");
  };

  resetAll = index => {
    if (this.state.data.length > 1) {
      this.state.data.splice(index, this.state.data.length - 1);
      console.log(this.state.data, "!!!");

      //update the state
      this.setState({ data: this.state.data });
      console.log(this.state.data, "!!!");
    }

    // //second method
    // this.setState({ data: [""] });
    // console.log(this.state.data, "!!!");
  };

  render() {
    return (
      <div className="container">
        <header className="header">
          <h1 className="main-heading">Todo List</h1>
          <Resetbutton resetAll={this.resetAll}> </Resetbutton>
          <TodoButton addInput={this.addInput}> </TodoButton>
        </header>
        <TodoList
          state={this.state}
          handleKeyPress={this.handleKeyPress}
          handleChange={this.handleChange}
          handleRemove={this.handleRemove}
        ></TodoList>
      </div>
    );
  }
}

export default App;
