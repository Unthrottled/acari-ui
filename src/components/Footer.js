import Typography from "@material-ui/core/es/Typography/Typography";
import Reach from "../images/reach.png";
import React from "react";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  footer: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
})

const Footer = props => {
  const {classes} = props;

  return <React.Fragment>
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        I apologise for nothing.
      </Typography>
    </footer>
    <div style={{textAlign: 'center'}}>
      <img src={Reach} className={classes.reach}></img>
    </div>
  </React.Fragment>;
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer)