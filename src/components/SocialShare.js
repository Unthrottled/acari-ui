import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
  EmailShareButton,
  FacebookIcon,
  GooglePlusIcon,
  LinkedinIcon,
  TwitterIcon,
  RedditIcon,
  EmailIcon,
} from 'react-share';

const styles = theme => ({
  typography: {
    padding: theme.spacing.unit * 2,
  },
});

class SocialShare extends React.Component {
  state = {
    anchorEl: null,
    open: false,
  };

  handleClick = event => {
    const { currentTarget } = event;
    this.setState(state => ({
      anchorEl: currentTarget,
      open: !state.open,
    }));
  };

  render() {
    const { classes, children, sharingUrl } = this.props;
    const { anchorEl, open } = this.state;
    const id = open ? 'simple-popper' : null;

    return (
      <div>
        <div onClick={this.handleClick}>
          {children}
        </div>
        <Popper id={id} open={open} anchorEl={anchorEl} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper style={{display: 'flex'}}>
                <RedditShareButton url={sharingUrl}>
                  <RedditIcon size={64}></RedditIcon>
                </RedditShareButton>
                <EmailShareButton url={sharingUrl}>
                  <EmailIcon size={64}></EmailIcon>
                </EmailShareButton>
                <TwitterShareButton url={sharingUrl}>
                  <TwitterIcon size={64}></TwitterIcon>
                </TwitterShareButton>
                <FacebookShareButton url={sharingUrl}>
                  <FacebookIcon size={64}></FacebookIcon>
                </FacebookShareButton>
                <LinkedinShareButton url={sharingUrl}>
                  <LinkedinIcon size={64}></LinkedinIcon>
                </LinkedinShareButton>
                <GooglePlusShareButton url={sharingUrl}>
                  <GooglePlusIcon size={64}></GooglePlusIcon>
                </GooglePlusShareButton>
              </Paper>
            </Fade>
          )}
        </Popper>
      </div>
    );
  }
}

SocialShare.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SocialShare);
