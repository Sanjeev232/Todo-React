import React, { Component } from "react";
import "./input.style.css";

class InputForm extends Component {
  
  render() {
    console.log(this.props);
    return this.props.state.data.map((todo, index) => {
      return (
        

          <div key={index} className="input">
          <input
            type="text"
            className="input-field"
            placeholder="Add here"
            onKeyPress={this.props.handleKeyPress}
          />
          <button className="add-button button-small">X</button>
        </div>
      );
    });
  }
}

export default InputForm;
