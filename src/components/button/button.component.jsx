import React, { Component } from "react";
import "./button.style.css";

class TodoButton extends Component {
  render() {
    return (
      <button className="add-button" onClick={this.props.addInput}>
        +
      </button>
    );
  }
}

export default TodoButton;
