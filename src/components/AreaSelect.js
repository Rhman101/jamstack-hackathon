import React, { Component } from "react";

import OptionCard from "./OptionCard";

const AREAS = [
  {
    description: "Why did it have to be snakes?",
    image: "area1.jpg",
    name: "Adder Swamp"
  },
  {
    description: "The only thing that never disappears is the sand",
    image: "area2.jpg",
    name: "Sub Sahara"
  },
  {
    description: "What will come out to greet you in the dark?",
    image: "area3.jpg",
    name: "Nighttimes Forest"
  },
  {
    description: "Can something so broken ever be repaired?",
    image: "area4.jpg",
    name: "The Divided Lands"
  }
];

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
