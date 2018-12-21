import Typography from "@material-ui/core/es/Typography/Typography";
import Reach from "../images/reach.png";
import React from "react";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/es/Fab/Fab";
import GitHub from "./Github";
import LinkedIn from "./LinkedIn";

const styles = theme => ({
  footer: {
    borderRadius: theme.spacing.unit / 2,
    backgroundColor: 'rgba(255,255,255,0.15)',
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
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
      <div style={{marginLeft: '1em'}}>
        <Typography variant="h6" gutterBottom>
          Alex Simons
        </Typography>
        <div onClick={() => window.open("https://github.com/cyclic-reference/acari-ui", '_blank')}>
          <Button variant={"contained"} size="small">
            Source Code
          </Button>
        </div>
        <Fab href={'https://github.com/cyclic-reference'}
             target={'_blank'}>
          <GitHub/>
        </Fab>
        <Fab href={'https://www.linkedin.com/in/alex-simons-1a459610a/'}
             target={'_blank'}>
          <LinkedIn/>
        </Fab>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          I apologise for nothing.
        </Typography>
      </div>
    </footer>
    <div style={{textAlign: 'center'}}>
      <img alt={"Reach"} src={Reach} className={classes.reach}></img>
    </div>
  </React.Fragment>;
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer)
