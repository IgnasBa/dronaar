import React from 'react';
import a1 from '../../assets/images/a1.svg';
import a2 from '../../assets/images/a2.svg';
import a3 from '../../assets/images/a3.svg';
import a4 from '../../assets/images/a4.svg';
import a5 from '../../assets/images/a5.svg';
import a6 from '../../assets/images/a6.svg';
import a7 from '../../assets/images/a7.svg';
import a8 from '../../assets/images/a8.svg';
import a9 from '../../assets/images/a9.svg';
import a10 from '../../assets/images/a10.svg';
import a11 from '../../assets/images/a11.svg';
import a12 from '../../assets/images/a12.svg';
import a13 from '../../assets/images/a13.svg';
import a14 from '../../assets/images/a14.svg';
import a15 from '../../assets/images/a15.svg';
import a16 from '../../assets/images/a16.svg';
import a17 from '../../assets/images/a17.svg';
import a18 from '../../assets/images/a18.svg';
import Frederik from '../../assets/images/frederik.svg';
import Niels from '../../assets/images/niels.svg';
import Grid from '@material-ui/core/Grid';
import { Card, CardTitle, Icon } from 'react-materialize';
import './Startup.css';


const services = props => {
  return (
    <div className="jj">
        
        <Grid container  >
        <Grid item md={2} xs={1}>
      </Grid>
      <Grid container md={8} xs={10}>
      <Grid container md={12} justify="center"
  alignItems="center">
          <h2>OUR STARTUP PARTNERS</h2>
          
          </Grid>
          <Grid container md={12} spacing={2} justify="center"
  alignItems="center">
          <Grid item md={2} sm={4} xs={6}><a href="https://hjaelptilpaaroerende.dk"><img src={a1}></img></a></Grid>
          <Grid item md={2} sm={4} xs={6}><a href="http://relion.dk"><img src={a2}></img></a></Grid>
          <Grid item md={2} sm={4} xs={6}><a href="http://backpackerlife.dk"><img src={a3}></img></a></Grid>
          <Grid item md={2} sm={4} xs={6}><a href="https://www.noatronic.com"><img src={a4}></img></a></Grid>
          <Grid item md={2} sm={4} xs={6}><a href="https://neurospace.io"><img src={a5}></img></a></Grid>
          <Grid item md={2} sm={4} xs={6}><a href="https://privatbar.dk"><img src={a6}></img></a></Grid>
          <Grid item md={2} sm={4} xs={6}><a href="http://parkshare.dk"><img src={a7}></img></a></Grid>
          <Grid item md={2} sm={4} xs={6}><a href="#"><img src={a8}></img></a></Grid>
          <Grid item md={2} sm={4} xs={6}><a href="http://manigrip.dk"><img src={a9}></img></a></Grid>
          <Grid item md={2} sm={4} xs={6}><a href="https://oldenkombucha.dk"><img src={a10}></img></a></Grid>
          <Grid item md={2} sm={4} xs={6}><a href="https://aarhusblendin.dk"><img src={a11}></img></a></Grid>
          <Grid item md={2} sm={4} xs={6}><a href="#"><img src={a12}></img></a></Grid>
          <Grid item md={2} sm={4} xs={6}><a href="#"><img src={a13}></img></a></Grid>
          <Grid item md={2} sm={4} xs={6}><a href="#"><img src={a14}></img></a></Grid>
          <Grid item md={2} sm={4} xs={6}><a href="#"><img src={a15}></img></a></Grid>
          <Grid item md={2} sm={4} xs={6}><a href="http://mindyourtalent.dk/"><img src={a16}></img></a></Grid>
          <Grid item md={2} sm={4} xs={6}><a href="https://elevaid.dk/"><img src={a17}></img></a></Grid>
          <Grid item md={2} sm={4} xs={6}><a href="https://thekitchen.io/"><img src={a18}></img></a></Grid>
          
          </Grid>
          
      </Grid>
      
      <Grid item md={2}>
      </Grid>
      </Grid>
</div>
  );
    
};

export default services;
