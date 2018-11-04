import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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

class EnemyStrength extends React.Component {
  state = {
    enemyStrength: 100
  };
  loseStrength = () => {
    this.setState({ enemyStrength: this.state.enemyStrength - 10 });
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
          color="secondary"
          variant="static"
          size={50}
          thickness={6}
          value={this.state.enemyStrength}
        />
        <Typography>Enemy Strength</Typography>
        <Button onClick={this.loseStrength}>Hit Me</Button>
      </div>
    );
  }
}

EnemyStrength.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EnemyStrength);
