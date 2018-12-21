import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Footer from "./components/Footer";
import JumboTron from "./components/JumboTron";
import ProjectCard from "./components/ProjectCard";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Projects from './Projects';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  reach: {
    verticalAlign: 'middle',
    maxWidth: '100%',
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  header: {
    backgroundColor: theme.palette.grey[900] + 'AA',
    marginBottom: '1em',
  },
  toolbarTitle: {
    fontFamily: 'proto',
    color: 'ghostwhite',
    textShadow: '-1px -1px 0 rgba(101, 16, 16, 1), ' +
      '  1px -1px 0 rgba(101, 16, 16, 1), ' +
      '-1px 1px 0 rgba(101, 16, 16, 1), ' +
      '1px 1px 0 rgba(101, 16, 16, 1)',
    flex: 1,
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
});

const App = props => {
  const {classes} = props;
  return (
    <React.Fragment>
      <CssBaseline/>
      <div className={"backdrop"}>
        <AppBar position={"sticky"} className={classes.header}>
          <Toolbar>
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
              className={classes.toolbarTitle}
            >
              Acari Cyberspace
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.layout}>
          <main>
            <JumboTron></JumboTron>
            <Grid container spacing={40} className={classes.cardGrid}>
              {Projects.map(project => (
                <Grid item key={project.title} xs={12} md={6} lg={2}>
                  <ProjectCard project={project}></ProjectCard>
                </Grid>
              ))}
            </Grid>
          </main>
        </div>
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
