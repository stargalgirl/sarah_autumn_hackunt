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
        <div classname="containerForButtons">
              <Button onClick={this.handleClickOpen}><img className="twoButtons"src="../ImSafe.png" alt="Safe Button to notify contacts youre safe"/></Button>
              <Button onClick={this.handleClickOpen}><img className="twoButtons" src="../InDangerButton.png" alt="In Danger Button to notify contacts youre safe"/></Button>
        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Successfully sent safety status to contacts"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Your emergency contacts notified via text message of your safety and current location
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;