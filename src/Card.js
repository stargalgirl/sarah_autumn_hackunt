import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Form from './Form';

const styles = {
  card1: {
    backgroundColor: '#b71c1c',
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card1}>
      <CardContent>
        <h3>Manage your Emergency Contacts </h3>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          These contacts will be sent your safety status and location via SMS 
        </Typography>
        <Typography>upon clicking the "I'm in Danger" and "I'm Safe" buttons on the homepage</Typography>
      </CardContent>
        <Card>
            <CardContent>
                <Form></Form>
            </CardContent>
        </Card>
        <CardActions>
        <Button size="small">SUBMIT</Button>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);