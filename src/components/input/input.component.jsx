import React, { Component } from "react";

class InputForm extends Component {
  render() {
    console.log(this.props);
    return this.props.state.data.map((todo, index) => {
      return (
        <div key={index}>
          <input type="text" value={todo} />
        </div>
      );
    });
  }
}

export default InputForm;
