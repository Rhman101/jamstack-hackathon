import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";

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

class CountDownTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timeLeft: 100, started: false };
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 600);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  timerReset = () => {
    this.setState({ timeLeft: 100, started: true });
  };

  progress = () => {
    const { timeLeft } = this.state;
    if (this.state.started) {
      this.setState({ timeLeft: timeLeft === 0 ? 0 : timeLeft - 1 });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <CircularProgress
          className={classes.progress}
          variant="static"
          size={50}
          thickness={6}
          value={this.state.timeLeft}
        />
        <h3>Time</h3>
        <Button onClick={this.timerReset}>Reset</Button>
      </div>
    );
  }
}

CountDownTimer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CountDownTimer);
