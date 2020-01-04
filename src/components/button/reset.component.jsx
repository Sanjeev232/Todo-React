import React, { Component } from "react";
import "./reset.style.css";

class Resetbutton extends Component {
  render() {
    return (
      <div>
        <button
          className="add-button reset-button"
          onClick={this.props.resetAll}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Resetbutton;
