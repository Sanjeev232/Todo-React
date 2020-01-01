import React, { Component } from "react";
import "./todolist.style.css";

class TodoList extends Component {
  componentDidUpdate() {
    // console.log("@@@@@@@@@@@@ 2");
    // console.dir(this.props.state.data);
    this.toggleInputFocus.focus();
  }

  

  render() {
    console.log(this.props);
    return this.props.state.data.map((todoItems, index) => {
      return (
        <div key={index} className="input">
          <input
            type="text"
            className="input-field"
            placeholder="Add here"
            value={todoItems}
            ref={input => {
              this.toggleInputFocus = input;
            }}
            onChange={e => this.props.handleChange(e, index)}
            onKeyPress={this.props.handleKeyPress}
          />
          {/* <button className="add-button button-small">X</button> */}
        </div>
      );
    });
  }
}

export default TodoList;
