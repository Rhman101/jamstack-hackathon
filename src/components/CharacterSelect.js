import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import * as routes from "../constants/routes";
import OptionCard from "./OptionCard";

const CHARACTERS = [
  {
    description:
      "Wielding nothing but a mighty mind, Character 1 slashes through monsters with razor sharp calculations.",
    image: "avatar1.jpg",
    name: "Character 1"
  },
  {
    description:
      "Pencil and paper swish and flash whenever Character 2 decides to cast some math magic.",
    image: "avatar2.jpg",
    name: "Character 2"
  }
];

class CharacterSelect extends Component {
  onExit = () => {
    this.props.history.push(routes.LANDING);
  };

  render() {
    return (
      <div>
        <h3>Choose Your Character</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {CHARACTERS.map(character => (
            <OptionCard
              {...character}
              handleSelect={this.props.handleCharacterSelect}
            />
          ))}
        </div>
        <button onClick={this.onExit}>Return to Main Page</button>
      </div>
    );
  }
}

export default withRouter(CharacterSelect);
