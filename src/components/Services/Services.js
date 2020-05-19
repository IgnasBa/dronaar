import React from 'react';

import './Services.css';
import Grid from '@material-ui/core/Grid';
import marketplaceLogo from '../../assets/images/marketplaceLogo.svg';
import intelligenceLogo from '../../assets/images/intelligenceLogo.svg';
import toolkitLogo from '../../assets/images/toolkitLogo.svg';


const services = props => {
  return (
    <div className="">
        
        <Grid container className="">
        <Grid item md={2} xs={1}>
      </Grid>
      <Grid container md={8} xs={10} spacing={2}>
          <Grid item xs={12}><h2>OUR SERVICES</h2></Grid>
          <Grid item lg={6} md={12}><h4>We provide a range of knowledge based services with focus on our freelance platform, consultancy and IT tools.</h4></Grid>
          <Grid item lg={6} md={0}></Grid>
          
          <Grid item lg={4} md={12} xs={12} className="container">
          <a href="https://dronaar.com/marketplace"> <div className="contain"><img src={marketplaceLogo} /></div></a>
          </Grid>
          <Grid item lg={4} md={12} xs={12} className="container">
          <a href="https://dronaar.com/intelligence"><div className="contain"><img src={intelligenceLogo} /></div></a>          </Grid>
          <Grid item lg={4} md={12} xs={12} className="container">
          <a href="https://dronaar.com/toolkit"><div className="contain"><img src={toolkitLogo} /></div></a>
          </Grid>
      </Grid>
      
      <Grid item md={2}>
      </Grid>
      </Grid>
</div>
  );
    
};

export default services;
