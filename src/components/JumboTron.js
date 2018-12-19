import Typography from "@material-ui/core/es/Typography/Typography";
import Reach from "../images/reach.png";
import React from "react";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";

const styles = theme => ({
  toolbarSecondary: {
    justifyContent: 'space-between',
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
})


const principles = [
  'Continuous Improvement',
  'Ownership',
  'Bias for Action',
  'Focus',
  'Curiosity',
  'Open-mindedness',
  'Passion',
  'Efficiency',
  'Stability',
];

const JumboTron = props => {
  const {classes} = props;

  return <React.Fragment>
    <Paper className={classes.mainFeaturedPost}>
      <div className={"acari-heading"}>
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                Dedicate to being great.
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                Here is a rich collection of various projects that capture the principals which are dedicated to
                <span style={{fontStyle: 'italic'}}> my</span> passion.
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Toolbar variant="dense" className={classes.toolbarSecondary}>
          {principles.map(section => (
            <Typography color="inherit" noWrap key={section}>
              {section}
            </Typography>
          ))}
        </Toolbar>
      </div>
    </Paper>
  </React.Fragment>;
}

JumboTron.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JumboTron)