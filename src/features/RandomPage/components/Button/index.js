import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function ButtonComponent(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" color="primary" className={classes.button} onClick={props.loadRandom}>
        Primary
      </Button>
    </div>
  );
}

ButtonComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonComponent);