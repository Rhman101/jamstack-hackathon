import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class NavBar extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem button>
            <Link to="/dash">
              <ListItemText primary="Dashboard" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/game">
              <ListItemText primary="Game" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/game/new">
              <ListItemText primary="Game Setup" />
            </Link>
          </ListItem>
        </List>
      </div>
    );
    return (
      <div>
        <Drawer open={this.state.left} onClose={this.toggleDrawer("left", false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {sideList}
          </div>
        </Drawer>

        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                onClick={this.toggleDrawer("left", true)}
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                {this.props.titleBar}
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
