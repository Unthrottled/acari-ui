import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Strype from '../images/stripe.png';
import post1 from '../blog-post.1.md';
import Reach from '../images/reach.png'
import Footer from "./Footer";
import JumboTron from "./JumboTron";
import ProjectCard from "./ProjectCard";

const styles = theme => ({
  layout: {
    width: 'auto',
    backgroundColor: 'rgba(255,255,255,0.25)',
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
  toolbarTitle: {
    fontFamily: 'proto',
    color: 'ghostwhite',
    textShadow: '-1px -1px 0 rgba(101, 16, 16, 0.95), ' +
      '  1px -1px 0 rgba(101, 16, 16, 0.95), ' +
      '-1px 1px 0 rgba(101, 16, 16, 0.95), ' +
      '1px 1px 0 rgba(101, 16, 16, 0.83)',
    flex: 1,
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
});

const featuredProjects = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    reach: Reach
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    reach: Reach
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    reach: Reach
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    reach: Reach
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    reach: Reach
  },
];

const Landing = props => {
  const {classes} = props;

  return (
    <React.Fragment>
      <CssBaseline/>
      <div className={"backdrop"}>
        <div className={classes.layout}>
          <Toolbar className={classes.toolbarMain}>
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
          <main>
            <JumboTron></JumboTron>
            <Grid container spacing={40} className={classes.cardGrid}>
              {featuredProjects.map(project => (
                <Grid item key={project.title} xs={12} md={6}>
                  <ProjectCard project={project}></ProjectCard>
                </Grid>
              ))}
            </Grid>
            <Grid container spacing={40} className={classes.mainGrid}>
              {/* Main content */}
              <Grid item xs={12} md={8}>
              </Grid>
              {/* End main content */}
              {/* Sidebar */}
              <Grid item xs={12} md={4}>
                <Paper elevation={0} className={classes.sidebarAboutBox}>
                  <Typography variant="h6" gutterBottom>
                    About
                  </Typography>
                  <Typography>
                    Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                    amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                  </Typography>
                </Paper>
              </Grid>
              {/* End sidebar */}
            </Grid>
          </main>
        </div>
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
};

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);