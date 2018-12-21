import Typography from "@material-ui/core/es/Typography/Typography";
import Reach from "../images/reach.png";
import React from "react";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/es/Fab/Fab";
import GitHub from "./Github";
import LinkedIn from "./LinkedIn";
import {Code} from "@material-ui/icons";

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
  social: {
    justifyContent: 'space-evenly',
  },
  socialLink: {
    marginRight: '0.5em',
  },
})

const Footer = props => {
  const {classes} = props;

  return <React.Fragment>
    <footer className={classes.footer}>
      <div style={{marginLeft: '1em'}}>
        <Typography variant="h6" gutterBottom align={'center'}>
          Alex Simons
        </Typography>
        <div align="center" className={classes.social}>
          <Fab className={classes.socialLink}
            href={'https://github.com/cyclic-reference/acari-ui'}
               target={'_blank'}>
            <Code/>
          </Fab>
          <Fab className={classes.socialLink}
            href={'https://github.com/cyclic-reference'}
               target={'_blank'}>
            <GitHub/>
          </Fab>
          <Fab className={classes.socialLink}
            href={'https://www.linkedin.com/in/alex-simons-1a459610a/'}
               target={'_blank'}>
            <LinkedIn/>
          </Fab>
        </div>
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
