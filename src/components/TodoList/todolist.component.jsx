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

    const todoElements = this.props.state.data.map((todoItems, index) => {
      let todoElement;
      if (this.props.state.data.length - 1 === index) {
        todoElement = (
          <input
            type="text"
            className="input input-field"
            placeholder="Add Todo here"
            value={todoItems}
            maxLength="33"
            ref={input => {
              this.toggleInputFocus = input;
            }}
            onChange={e => this.props.handleChange(e, index)}
            onKeyPress={e => this.props.handleKeyPress(e)}
          />
        );
      } else {
        todoElement = (
          <div className="saved-todo">
            <input type="radio" className="checkbox-container" />
            <p className="todo-main__items">{todoItems} </p>
            <button
              className="add-button button-small"
              onClick={() => this.props.handleRemove(index)}
            >
              X
            </button>
          </div>
        );
      }
      return <li key={index}>{todoElement} </li>;
    });
    return (
      <div>
        <ul className="saved-todo__list">{todoElements}</ul>
      </div>
    );
  }
}

export default TodoList;
