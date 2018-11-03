import React, { Component } from "react";

class AreaSelect extends Component {
  render() {
    return (
      <div>
        <h3>Choose an Area</h3>
        <button onClick={this.props.onCancel}>Go Back</button>
      </div>
    );
  }
}

export default AreaSelect;
