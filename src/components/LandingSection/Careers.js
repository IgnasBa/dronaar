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
    <div className="landingImageCareers">
        
        <Grid container className="lastGrid center" justify="center"
  alignItems="center" >
        <Grid item md={2} xs={1}>
      </Grid>
      <Grid item md={8} xs={10} className="kk" justify="center"
  alignItems="center">
          <Grid item md={12} xs={12} >
          <h1>CAREERS</h1>
          </Grid>
          <Grid item md={12} xs={12}>
          <p>We are looking for amazing people to join our cause to revolutionize this new age of technology and information.</p>
          </Grid>
          <Grid item md={12} xs={12} >
          <Link to="/pilots"><button className="navButtonA">Connect with us</button></Link>
          </Grid>
      </Grid>
      
      <Grid item md={2}>
      </Grid>
      </Grid>
</div>
  );
    
};

export default landingSection;
