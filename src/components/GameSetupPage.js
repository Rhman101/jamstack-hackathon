import React, { Component } from "react";

import CharacterSelect from "./CharacterSelect";
import AreaSelect from "./AreaSelect";

class GameSetupPage extends Component {
  state = {
    showCharacterSelect: true
  };

  handleCharacterSelect = () => {
    this.toggleShowCharacterSelect();
  }

  toggleShowCharacterSelect = () => {
    this.setState(prevState => ({ showCharacterSelect: !prevState.showCharacterSelect }));
  }

  render() {
    return (
      <div>
        <h2>New Game</h2>
        {this.state.showCharacterSelect ? <CharacterSelect handleCharacterSelect={this.handleCharacterSelect} /> : <AreaSelect onCancel={this.toggleShowCharacterSelect} />}
      </div>
    );
  }
}

export default GameSetupPage;
