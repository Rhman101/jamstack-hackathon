import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CountDownTimer from "./CountDownTimer";
import EnemyStrength from "./EnemyStrength";
import PlayerStrength from "./PlayerStrength";

const styles = (theme) => ({
  progress: {
    margin: theme.spacing.unit * 2
  },
  paper: {
    width: 400,
    height: 200,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
  }
});

class ProgressBox extends React.Component {
  state = {
    timeLeft: 0,
    enemyStrength: 100
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <CountDownTimer />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <EnemyStrength />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <PlayerStrength />
        </div>
      </Paper>
    );
  }
}

ProgressBox.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProgressBox);
