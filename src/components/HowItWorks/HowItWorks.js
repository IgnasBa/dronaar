import React from 'react';

import './HowItWorks.css';
import Grid from '@material-ui/core/Grid';
const howItWorks = (props) => (
<div className="how">
    <Grid container>
        <Grid item sm={2} xs={1}></Grid>
<Grid item sm={8} xs={10}><h2>{props.h2}</h2></Grid>
    </Grid>

    <Grid container className="how1">
        <Grid item lg={1} xs={1}></Grid>
        <Grid container lg={9} xs={10}>
        <Grid className="gridh s1" item lg={6} sm={0}><img src={props.img1} alt="companies image" /></Grid>
        <Grid item lg={1} sm={0}></Grid>
        <Grid item className="textGrid" lg={5} sm={12}><h3>Step 1.</h3><p>{props.s1text1}</p><br></br><p>{props.s1text2}</p><br></br><p>{props.s1text3}</p></Grid>
        <Grid className="gridh s2" justify="center"
  alignItems="center" item lg={0} sm={12}><img src={props.img11} alt="companies image" /></Grid>
        </Grid>
        
    </Grid>

    <Grid container className="how2">
        <Grid item lg={2} xs={1}></Grid>
        <Grid container lg={9} xs={10}>
        <Grid item className="textGrid" lg={5} sm={12}><h3>Step 2.</h3><p>{props.s2text1}</p><br></br><p>{props.s2text2}</p><br></br><p>{props.s2text3}</p></Grid>
        <Grid item lg={1} sm={0}></Grid>
        <Grid className="gridh s1" item lg={6} sm={0}><img src={props.img2} alt="companies image" /></Grid>
        <Grid className="gridh s2" justify="center"
  alignItems="center" item lg={0} sm={12}><img src={props.img22} alt="companies image" /></Grid>
        
        
    </Grid>
    </Grid>
        <Grid container className="how1">
        <Grid item lg={1} xs={1}></Grid>
        <Grid container lg={9} xs={10}>
        <Grid className="gridh s1" item lg={6} sm={0}><img src={props.img3} alt="companies image" /></Grid>
        <Grid item lg={1} sm={0}></Grid>
        <Grid item className="textGrid" lg={5} sm={12}><h3>Step 3.</h3><p>{props.s3text1}</p><br></br><p>{props.s3text2}</p><br></br><p>{props.s3text3}</p></Grid>
        <Grid className="gridh s2" justify="center"
  alignItems="center" item lg={0} sm={12}><img src={props.img33} alt="companies image" /></Grid>
        </Grid>
        
    </Grid>
    <Grid container className="how2">
        <Grid item lg={2} xs={1}></Grid>
        <Grid container lg={9} xs={10}>
        <Grid item className="textGrid" lg={5} sm={12}><h3>Step 4.</h3><p>{props.s4text1}</p><br></br><p>{props.s4text2}</p><br></br><p>{props.s4text3}</p></Grid>
        <Grid item lg={1} sm={0}></Grid>
        <Grid className="gridh s1" item sm={0} lg={6} sm={0}><img src={props.img4} alt="companies image" /></Grid>
        <Grid className="gridh s2" justify="center"
  alignItems="center" item lg={0} sm={12}><img src={props.img44} alt="companies image" /></Grid>
        
        
    </Grid>
    </Grid>
    </div>
  

);

export default howItWorks;