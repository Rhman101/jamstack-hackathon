import React, { Component } from "react";

import * as routes from '../constants/routes';
import CharacterOption from "./CharacterOption";

class CharacterSelect extends Component {
  handleCharacterSelect = e => {
    console.log(e.target);

    this.props.handleCharacterSelect();
  }

  onExit = () => {
    this.props.history.redirect(routes.LANDING);
  }

  render() {
    return (
      <div>
        <h3>Choose Your Character</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CharacterOption
            avatar="avatar1.jpg"
            charDesc="Wielding nothing but a mighty mind, Character 1 slashes through monsters with razor sharp calculations."
            charName="Character 1"
            handleCharacterSelect={this.handleCharacterSelect}
          />
          <CharacterOption
            avatar="avatar2.jpg"
            charDesc="Pencil and paper swish and flash whenever Character 2 decides to use some math magic."
            charName="Character 2"
            handleCharacterSelect={this.handleCharacterSelect}
          />
        </div>
        <button onClick={this.onExit}>Return to Dashboard</button>
      </div>
    );
  }
}

export default CharacterSelect;
