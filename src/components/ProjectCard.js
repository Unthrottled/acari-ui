import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GridList from '@material-ui/core/es/GridList/GridList';
import Button from '@material-ui/core/es/Button/Button';
import HexBottom from '../images/hex-bottom.png';

const styles = theme => ({
  card: {
    maxWidth: 1000,
    backgroundColor: theme.palette.grey[700],
    color: theme.palette.common.white,
    backgroundImage: `url(${HexBottom})`,
    backgroundPosition: 'left bottom',
    backgroundRepeat: 'repeat-x'
  },
  media: {
    backgroundSize: 'contain',
  },
  cardContent: {
    display: 'flex',
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    width: 70,
    padding: '0.3em',
    height: 70,
  },
});

interface
Props
{
  project: Object
}

class ProjectCard extends React.Component<Props> {
  state = {expanded: false};

  handleExpandClick = () => {
    this.setState(state => ({expanded: !state.expanded}));
  };

  render() {
    const {classes, project} = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <GridList cellHeight={225}>
            <div style={{marginTop: '1em',}}>
              <Typography gutterBottom variant='h4' color='inherit' component='h2'>
                {project.title}
              </Typography>
              <Typography component='p' color='inherit'>
                {project.exerpt}
              </Typography>
            </div>
              <CardMedia
                className={classes.media}
                image={project.displayImage}
                title={project.title}
              />
          </GridList>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label='Share' color={'inherit'}>
            <ShareIcon/>
          </IconButton>
          <div style={{width: '100%', display:'flex'}}>
            <div style={{flexGrow: 0.5}}></div>
            <Avatar  aria-label='Reach'
                     className={classes.avatar}
                     style={{
                       backgroundColor: `${project.color}20`
                     }}
                     src={project.reach}/>
          </div>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            color={'inherit'}
            aria-expanded={this.state.expanded}
            aria-label='Show more'
          >
            <ExpandMoreIcon/>
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout='auto' unmountOnExit>
          <CardContent>
            {
              project.descriptions.map(description => (
                <Typography key={new Date().getMilliseconds()}
                            color={'inherit'}
                            paragraph>{description}</Typography>
              ))
            }
          </CardContent>
          <CardActions>
            <Button variant={"contained"} size='medium' color='default'>
              Learn More
            </Button>
          </CardActions>
        </Collapse>
      </Card>
    );
  }
}

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectCard);
