import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import * as routes from "../constants/routes";
import CHARACTERS from "../constants/characters";
import OptionCard from "./OptionCard";

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
