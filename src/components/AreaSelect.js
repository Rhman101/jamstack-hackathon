import React, { Component } from "react";

import AREAS from "../constants/areas";
import OptionCard from "./OptionCard";

class AreaSelect extends Component {
  render() {
    return (
      <div>
        <h3>Choose an Area</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {AREAS.map(area => (
            <OptionCard {...area} handleSelect={this.props.handleAreaSelect} />
          ))}
        </div>
        <button onClick={this.props.onCancel}>Go Back</button>
      </div>
    );
  }
}

export default AreaSelect;
