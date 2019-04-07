import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AlertDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
      <Button className="button" onClick={this.handleClickOpen}>
            <img className="SOSButton" src="../SOSButton.png" alt="SOS Button to call emergency services"/>
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"An automated message has been sent to 911"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Police are now aware of your location and will be on route soon.
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;