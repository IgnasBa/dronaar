import React from 'react';
import { Link } from 'react-router-dom';
import './LandingSection.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
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
    <div className="landingImage">
        
        <Grid container className="lastGrid">
        <Grid item md={2} xs={1}>
      </Grid>
      <Grid item md={8} xs={10} className="kk">
          <Grid item md={5} xs={12}>
          <h1>Take Your Experience to the next level</h1>
          </Grid>
          <Grid item md={6} xs={12}>
          <p>Become part of our community, enhance your skills and get a variaty of jobs in different industries</p>
          </Grid>
          <Grid item md={3} xs={12} >
          <Link to="/pilots"><button className="navButtonA">Join now</button></Link>
          </Grid>
      </Grid>
      
      <Grid item md={2}>
      </Grid>
      </Grid>
</div>
  );
    
};

export default landingSection;
