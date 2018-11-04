import React, { Component } from "react";

import CharacterSelect from "./CharacterSelect";
import AreaSelect from "./AreaSelect";
import NavBar from "./NavBar";
import Typography from "@material-ui/core/Typography";

class GameSetupPage extends Component {
  state = {
    showCharacterSelect: true
  };

  handleCharacterSelect = () => {
    this.toggleShowCharacterSelect();
  };

  toggleShowCharacterSelect = () => {
    this.setState((prevState) => ({ showCharacterSelect: !prevState.showCharacterSelect }));
  };

  render() {
    return (
      <div>
        <NavBar />
        <Typography component="h4" variant="h4" style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
          New Game
        </Typography>
        {this.state.showCharacterSelect ? (
          <CharacterSelect handleCharacterSelect={this.handleCharacterSelect} />
        ) : (
          <AreaSelect onCancel={this.toggleShowCharacterSelect} />
        )}
      </div>
    );
  }
}

export default GameSetupPage;
