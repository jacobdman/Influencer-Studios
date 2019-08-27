import React, { useState, useRef, useEffect, useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import {
  IconButton,
  Zoom,
  Typography,
  Fade,
  useScrollTrigger,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import StudioContext from '../../context/StudioContext';
import { Motion, spring } from 'react-motion';
import backgroundImage from '../../Assets/StudioHomeBackground.jpg';
import StudioLayoutImg from '../../Assets/StudioLayout.jpg';
import ProfileShot from '../../Assets/ProfileShot.JPG';

const styles = theme => ({
  root: {
    width: '100vw',
    marginTop: -65,
    overflowX: 'hidden',
  },
  landing: {
    width: '100%',
    height: '100vh',
    background: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  menuIcon: {
    position: 'absolute',
    right: 50,
    top: 0,
    color: 'white',
    border: '2px solid white',
    borderRadius: 10,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  spotlight: {
    background: 'rgba(255, 255, 255, 0.1)',
    width: 400,
    height: 400,
    borderRadius: '50%',
    boxShadow: '0px 0px 30px 50px rgba(255, 255, 255, 0.1)',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  homePage: {
    padding: '50px 15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  homePageImageWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  homePageImage: {
    height: 300,
    width: '100%',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    [theme.breakpoints.down('sm')]: {
      height: 400,
    },
  },
  homeHeader: {
    color: theme.palette.primary.main,
    fontWeight: 600,
    position: 'relative',
    top: -160,
    [theme.breakpoints.down('sm')]: {
      top: -300,
    },
  },
  homePageContentWrapper: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: -150,
      padding: '0 10px',
    },
  },
  homePageContent: {
    width: '50%',
    fontSize: 20,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  studioLayoutImg: {
    margin: '30px 0',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  profileShot: {
    height: 400,
    width: '70%',
    margin: '30px 0',
    backgroundImage: `url(${ProfileShot})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    [theme.breakpoints.down('sm')]: {
      height: 250,
      width: '100%',
      backgroundPosition: '70% 50%',
    },
  },
});

const ElevationScroll = ({ children, setShow }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 500,
  });

  if (trigger) {
    setShow(true);
  } else {
    setShow(false);
  }

  return React.cloneElement(children);
};

const Home = ({ classes }) => {
  const [mouse, setMouse] = useState(['35%', '30%']);
  const [screenSize, setScreenSize] = useState({ width: 1000, height: 1000 });
  const landingContainer = useRef(null);
  const context = useContext(StudioContext);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setScreenSize({
      width: landingContainer.current.clientWidth,
      height: landingContainer.current.clientHeight,
    });
  }, [landingContainer]);

  const handleMouseMove = async ({ pageX, pageY }) => {
    if (pageX + 200 <= screenSize.width && pageY + 200 <= screenSize.height) {
      setMouse([pageX - 200, pageY - 200]);
    } else if (pageX + 200 <= screenSize.width) {
      setMouse([pageX - 200, mouse[1]]);
    } else if (pageY + 200 <= screenSize.height) {
      setMouse([mouse[0], pageY - 200]);
    }
  };

  const handleTouchMove = e => {
    e.preventDefault();
    handleMouseMove(e.touches[0]);
  };

  return (
    <div className={classes.root}>
      <div
        className={classes.landing}
        ref={landingContainer}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        <Zoom in={true} timeout={2500}>
          <img
            style={{ height: '120%' }}
            alt="Name"
            src={require('../../Assets/Full_Logo.svg')}
          />
        </Zoom>
        <div
          className={classes.spotlight}
          style={{
            position: 'absolute',
            left: mouse[0],
            top: mouse[1],
          }}
        />
        <Motion
          defaultStyle={{ y: -200 }}
          style={{
            y: spring(context.forceHeader ? 115 : 50, {
              stiffness: 50,
              damping: 12,
            }),
          }}
        >
          {style => (
            <IconButton
              className={classes.menuIcon}
              onClick={context.toggleForceHeader}
              style={{ transform: `translateY(${style.y}px)` }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          )}
        </Motion>
      </div>
      <div className={classes.homePage}>
        <div className={classes.homePageImageWrapper}>
          <Fade in={true} timeout={10000}>
            <div className={classes.homePageImage} />
          </Fade>
          <Fade in={true} timeout={10000}>
            <Typography variant="h2" className={classes.homeHeader}>
              Film and Audio Production Studio
            </Typography>
          </Fade>
        </div>
        <div>
          <ElevationScroll setShow={setShowContent} screenSize={screenSize}>
            <Motion
              defaultStyle={{ x: -screenSize.width, opacity: 0 }}
              style={{
                x: spring(showContent ? 0 : -screenSize.width, {
                  stiffness: 50,
                  damping: 12,
                }),
                opacity: spring(showContent ? 1 : 0, {
                  stiffness: 100,
                  damping: 24,
                }),
              }}
            >
              {style => (
                <div
                  className={classes.homePageContentWrapper}
                  style={{
                    transform: `translateX(${style.x}px)`,
                    opacity: style.opacity,
                  }}
                >
                  <Typography className={classes.homePageContent}>
                    ​In the heart of Salt Lake, convenient to the airport and
                    within the "Devil's Triangle" of freeways (I-15, I-80,
                    I-215) you will find our state-of-the-art film and audio
                    production studio ... but only if you're looking for it. The
                    older brick exterior in a "historic" neighborhood (aka
                    yet-to-be-renovated area) is the perfect disguise to prevent
                    the paparazzi from rushing us and stalking our talent. They
                    would never suspect that our camouflaged building is an
                    internal safe-haven where the magic happens!
                  </Typography>
                  <img
                    src={StudioLayoutImg}
                    className={classes.studioLayoutImg}
                    alt="layout"
                  />
                  <Typography className={classes.homePageContent}>
                    Shh....
                    <br />
                    <br />
                    It's a carefully guarded secret that behind this brick
                    (individually laid by the building's owner, Angelo, himself
                    while defying all modern child-labor laws at the age of 12)
                    we run a covert high-tech operation that boasts:
                    <br />
                    <ul>
                      <li>
                        The quietest studio in SL, assisted by a nearly
                        half-million dollar renovation that includes
                        floor-ceiling surround sound panels. We've done the work
                        so you don't have to choose between A/C and set lights!
                        (You're welcome, sweat-proned actors. And if you're
                        still a little shiny up top, click on our tab for Makeup
                        ... yes, men--it's your moment to wear it shamelessly.)
                      </li>
                      <br />
                      <li>Each room expertly sound-proofed.</li>
                      <br />
                      <li>A 1900 sq ft soundstage, 13 ft ceilings</li>
                      <br />
                      <li>Full white and green cyc walls with scoops</li>
                      <br />
                      <li>Separate audio recording and control rooms</li>
                      <br />
                      <li>Sound-proof edit bays</li>
                      <br />
                      <li>12'x50' staging and green room area</li>
                      <br />
                      <li>Electric grid</li>
                      <br />
                      <li>digitally converted sound panel</li>
                      <br />
                      <li>Technical control panels</li>
                      <br />
                      <li>
                        Integrated networking through each room, which can
                        accommodate a full orchestra
                      </li>
                    </ul>
                  </Typography>
                  <div className={classes.profileShot} />
                  <Typography className={classes.homePageContent}>
                    To the unsuspecting passerby, it is just another building
                    around the corner from the haunted house. To those in the
                    know, it is Utah's film and audio industry's best-kept
                    secret. Truly a geode. We've got your back!
                  </Typography>
                </div>
              )}
            </Motion>
          </ElevationScroll>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Home));
