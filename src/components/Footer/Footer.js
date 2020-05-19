import React from 'react';
import './Footer.css';
import { Footer, Icon } from 'react-materialize';
import Grid from '@material-ui/core/Grid';
import logo from '../../assets/images/logo.svg';
import facebook from '../../assets/images/facebook.svg';
import linkedIn from '../../assets/images/linkedIn.svg';
import instagram from '../../assets/images/instagram.svg';
import { Link } from 'react-router-dom';

const footer = (props) => (

    <Footer
    className="example"
    copyrights="Copyright © Dronaar 2020, All Rights Reserved"
    
  >
      <Grid container>
          
          <Grid item lg={12}><Grid container>
              <Grid item lg={4} xs={12} className="footerGrid">
                  <Grid container justify="center"
  alignItems="center">
                      <Grid item xs={12} ><img className="footerLogo" src={logo} alt="logo"></img></Grid>
                      <Grid item xs={12} className="footerGrid ssd"><a href="https://www.linkedin.com/company/dronaar/"><img className="footerIcon" src={linkedIn}></img></a><a href="https://www.facebook.com/dronaar/"><img className="footerIcon2"  src={facebook}></img></a><a href="https://www.instagram.com/dronaar/"><img  className="footerIcon" src={instagram}></img></a></Grid>
                  </Grid>
                  </Grid>
              <Grid item lg={4} xs={12} className="footerGrid"><ul><li><a href="/">Home</a></li>
                <li><a><Link to="/about">About us</Link></a></li>
                <li><a href="/">Sign in</a></li>
                <li><a href="/">Join</a></li>
                <li><Link to="/pilots">Become a pilot</Link></li></ul></Grid>
              <Grid item lg={1} xs={0}></Grid>
              <Grid item lg={3} xs={12} className="footerGrid">
    <Grid container justify="center"
  alignItems="center" xs={12}>
        <Grid item lg={12} xs={12} justify="center"
  alignItems="center" className="geth"><h3>
              Get in touch
    </h3></Grid>
    <Grid item lg={12} xs={12} justify="center"
  alignItems="center" className="get"><p>Tel: +45 23 71 61 71</p></Grid>
    <Grid item lg={12} xs={12} justify="center"
  alignItems="center" className="get"><p>Address: <br></br>Nørrebrogade 44 8000<br></br> Aarhus C</p></Grid>
    <Grid item lg={12} xs={12} justify="center"
  alignItems="center" className="get"><p>E-mail: mkf@dronaar.com</p></Grid>
    </Grid>
    </Grid>
          </Grid></Grid>
          
      </Grid>
    
    
  </Footer>
    
    );
    
    export default footer;