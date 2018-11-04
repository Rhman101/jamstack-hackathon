import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";

class LoginForm extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });

    // ToDo : Here comes the functionality for the login
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen} variant="contained" size="large" color="primary">
          Login
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <TextField autoFocus margin="dense" id="name" label="User ID" type="email" fullWidth />
            <TextField autoFocus margin="dense" id="password" label="Password" type="password" fullWidth />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} variant="contained" color="primary">
              Login
            </Button>
            <Button onClick={this.handleClose} variant="contained" color="secondary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default LoginForm;
