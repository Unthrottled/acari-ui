import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import GridList from "@material-ui/core/es/GridList/GridList";
import Button from "@material-ui/core/es/Button/Button";
import Circuit from '../images/circuit.png';

const styles = theme => ({
  card: {
    background: `url(${Circuit}) white no-repeat`,
    backgroundPosition: 'top right',
    backgroundSize: '50% 50%',
    maxWidth: 550,
  },
  media: {
    height: 0,
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
    backgroundColor: red[50],
    width: 60,
    height: 60,
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
          <Avatar aria-label="Reach" className={classes.avatar} src={project.reach}/>
          <GridList>
            <div>
              <Typography gutterBottom variant="h4" component="h2">
                {project.title}
              </Typography>
              <Typography component="p">
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
          <IconButton aria-label="Share">
            <ShareIcon/>
          </IconButton>
          <Button size="small" color="primary">
            Learn More
          </Button>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon/>
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {
              project.descriptions.map(description => (
                <Typography paragraph>{description}</Typography>
              ))
            }
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectCard);
