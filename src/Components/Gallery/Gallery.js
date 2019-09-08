import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Fade from '@material-ui/core/Fade';
import img from '../../Assets/E8D995AE-B313-484F-A068-66A1616A7C43.JPG';
import img2 from '../../Assets/LRM_EXPORT_23211438403696_20190728_195729516.jpeg';
import img3 from '../../Assets/IMG_0034.jpg';
import img4 from '../../Assets/LRM_EXPORT_23162973089027_20190728_195641050.jpeg';
import img5 from '../../Assets/Cool_Camera_Rig.jpg';
import img6 from '../../Assets/IMG_0180.jpg';
import img7 from '../../Assets/LRM_EXPORT_23176414817251_20190728_195654492.jpeg';
import img8 from '../../Assets/LRM_EXPORT_23180043909594_20190728_195658121.jpeg';
import img9 from '../../Assets/LRM_EXPORT_23187342167976_20190728_195705419.jpeg';
import img11 from '../../Assets/StudioLayout.jpg';
import img10 from '../../Assets/ProfileShot.JPG';
import img12 from '../../Assets/IMG_0179.jpg';
import img13 from '../../Assets/IMG_0006.jpg';
import img14 from '../../Assets/IMG_6172.jpg';
import img15 from '../../Assets/IMG_6164.jpg';
import img16 from '../../Assets/IMG_6183.jpg';
import img17 from '../../Assets/PurpleShot.jpeg';

const styles = theme => ({
  root: {
    width: '100vw',
    padding: '50px 15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 0,
    },
  },
  header: {
    color: theme.palette.primary.main,
    fontWeight: 600,
    marginBottom: 50,
  },
  pageContent: {
    width: '50vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  mobilePageContent: {
    padding: '0 10px',
    width: '100%',
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
    border: `3px solid ${theme.palette.primary.main}`,
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      border: `2px solid ${theme.palette.primary.main}`,
    },
  },
});

const Team = ({ classes }) => {
  const [open, setOpen] = useState(false);
  const [tile, setTile] = useState({});

  const openImageDialog = tile => {
    setOpen(true);
    setTile(tile);
  };

  const close = () => {
    setOpen(false);
    setTile({});
  };

  const tileData = [
    {
      img: img,
      cols: 3,
    },
    {
      img: img2,
      cols: 1,
    },
    {
      img: img3,
      cols: 1,
    },
    {
      img: img4,
      cols: 2,
    },
    {
      img: img5,
      cols: 1,
    },
    {
      img: img6,
      cols: 2,
    },
    {
      img: img7,
      cols: 2,
    },
    {
      img: img8,
      cols: 1.5,
    },
    {
      img: img9,
      cols: 1,
    },
    {
      img: img10,
      cols: 1.5,
    },
    {
      img: img11,
      cols: 2,
    },
    {
      img: img12,
      cols: 2,
    },
    {
      img: img13,
      cols: 2,
    },
    {
      img: img14,
      cols: 2,
    },
    {
      img: img15,
      cols: 1,
    },
    {
      img: img16,
      cols: 1,
    },
    {
      img: img17,
      cols: 2,
    },
  ];

  return (
    <div className={classes.root}>
      <Fade in={true} timeout={2500}>
        <Typography variant="h2" className={classes.header}>
          Gallery
        </Typography>
      </Fade>
      <Fade in={true} timeout={2500}>
        <>
          <div className={classes.pageContent}>
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
                  onClick={() => openImageDialog(tile)}
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
          </div>
          <div className={classes.mobilePageContent}>
            <GridList
              cellHeight={150}
              spacing={15}
              className={classes.gridList}
              cols={4}
            >
              {tileData.map(tile => (
                <GridListTile
                  key={tile.img}
                  cols={tile.cols || 1}
                  onClick={() => openImageDialog(tile)}
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
          </div>
        </>
      </Fade>
      {open && <Lightbox mainSrc={tile.img} onCloseRequest={close} />}
    </div>
  );
};

Team.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Team);
