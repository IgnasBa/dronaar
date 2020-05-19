import React from 'react';
import { Player } from 'video-react';
import './LandingSection.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import video from '../../assets/video/video.mp4';
import { Link } from 'react-router-dom';
const theme2 = createMuiTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#F79A27',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: '#0066ff',
        main: '#F79A27',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffcc00',
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
  });

const landingSection = props => {
  return (
    <div className="ladn">
     <div className="myVideoDiv">
     <video autoPlay="true" muted loop id="myVideo">
       
  <source src={video} type="video/mp4" />
  </video></div>
<div>
        <Grid container className="lastGrid">
        <Grid item md={2} xs={1}>
      </Grid>
      <Grid item md={8} xs={10} className="kk ssda">
          <Grid item md={5} xs={12}>
          <h1>MAKING UAV-Services Accessible</h1>
          </Grid>
          <Grid item md={6} xs={12}>
          <p>Get in touch with professional drone operators for a variation of services in all industries</p>
          </Grid>
          <Grid item md={3} xs={12} >
          <Link to="/pilots"><button className="navButtonA">Join now</button></Link>
          </Grid>
      </Grid>
      
      <Grid item md={2}>
      </Grid>
      </Grid></div>
</div>
  );
    
};

export default landingSection;
