import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import img from '../../Assets/IMG_0179.jpg';
import img2 from '../../Assets/New_Cameras.jpg';
import img3 from '../../Assets/IMG_0034.jpg';
import img4 from '../../Assets/Green_Room.jpg';
import img5 from '../../Assets/Cool_Camera_Rig.jpg';
import img6 from '../../Assets/IMG_0180.jpg';
import img7 from '../../Assets/Sound_Stage.jpg';
import img8 from '../../Assets/Elle_Schneider.jpg';
import img9 from '../../Assets/IMG_0006.jpg';
import img10 from '../../Assets/Sigma_Lens.jpg';
import img11 from '../../Assets/IMG_0164.jpg';
import img12 from '../../Assets/IMG_0178.jpg';

const styles = theme => ({
  root: {
    marginTop: 15,
    marginBottom: 50,
    display: 'flex',
    justifyContent: 'space-around',
    width: '99vw',
  },
  paper: {
    width: '70%',
    padding: 25,
    paddingRight: 10,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  mobilePaper: {
    width: '90%',
    padding: 5,
    paddingRight: 0,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  gridList: {
    width: '100%',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  frame: {
    border: '3px solid #5e0e29',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
  },
});

const tileData = [
  {
    img: img,
    title: 'Sound Stage',
    cols: 3,
  },
  {
    img: img2,
    title: 'Sound Stage',
    cols: 1,
  },
  {
    img: img3,
    title: 'Sound Stage',
    cols: 1,
  },
  {
    img: img4,
    title: 'Sound Stage',
    cols: 2,
  },
  {
    img: img5,
    title: 'Sound Stage',
    cols: 1,
  },
  {
    img: img6,
    title: 'Sound Stage',
    cols: 2,
  },
  {
    img: img7,
    title: 'Sound Stage',
    cols: 2,
  },
  {
    img: img8,
    title: 'Sound Stage',
    cols: 1,
  },
  {
    img: img9,
    title: 'Sound Stage',
    cols: 2,
  },
  {
    img: img10,
    title: 'Sound Stage',
    cols: 1,
  },
  {
    img: img11,
    title: 'Sound Stage',
    cols: 2,
  },
  {
    img: img12,
    title: 'Sound Stage',
    cols: 2,
  },
];

const mobileTileData = [
  {
    img: img,
    title: 'Sound Stage',
    cols: 4,
  },
  {
    img: img2,
    title: 'Sound Stage',
    cols: 2,
  },
  {
    img: img5,
    title: 'Sound Stage',
    cols: 2,
  },
  {
    img: img3,
    title: 'Sound Stage',
    cols: 2.5,
  },
  {
    img: img8,
    title: 'Sound Stage',
    cols: 1.5,
  },
  {
    img: img4,
    title: 'Sound Stage',
    cols: 4,
  },
  {
    img: img10,
    title: 'Sound Stage',
    cols: 2.5,
  },
  {
    img: img7,
    title: 'Sound Stage',
    cols: 1.5,
  },
  {
    img: img6,
    title: 'Sound Stage',
    cols: 4,
  },
  {
    img: img9,
    title: 'Sound Stage',
    cols: 4,
  },
  {
    img: img11,
    title: 'Sound Stage',
    cols: 4,
  },
  {
    img: img12,
    title: 'Sound Stage',
    cols: 4,
  },
];

class Gallery extends Component {
  state = {
    open: false,
    tile: false,
  };

  openImageDialog = tile => {
    this.setState({ open: true, tile });
  };

  close = () => {
    this.setState({ open: false, tile: false });
  };

  render() {
    const { classes } = this.props;
    const { open, tile } = this.state;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <GridList
            cellHeight={400}
            spacing={15}
            className={classes.gridList}
            cols={4}
          >
            {tileData.map(tile => (
              <GridListTile
                key={tile.img}
                cols={tile.cols || 1}
                onClick={() => this.openImageDialog(tile)}
              >
                <div
                  className={classes.frame}
                  style={{
                    backgroundImage: `url(${tile.img})`,
                  }}
                />
              </GridListTile>
            ))}
          </GridList>
        </Paper>
        <Paper className={classes.mobilePaper}>
          <GridList cellHeight={200} className={classes.gridList} cols={4}>
            {mobileTileData.map(tile => (
              <GridListTile
                key={tile.img}
                cols={tile.cols || 1}
                onClick={() => this.openImageDialog(tile)}
              >
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </Paper>
        {open && <Lightbox mainSrc={tile.img} onCloseRequest={this.close} />}
      </div>
    );
  }
}

Gallery.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Gallery);
