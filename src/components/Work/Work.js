import React from 'react';

import './Work.css';
import Grid from '@material-ui/core/Grid';
import { MediaBox } from 'react-materialize';
import construction from '../../assets/images/construction.svg';
import agriculture from '../../assets/images/agriculture.svg';
import energy from '../../assets/images/energy.svg';
import insurance from '../../assets/images/insurance.svg';
import { Slide } from 'react-slideshow-image';
import image1 from '../../assets/images/image1.svg';
import w1 from '../../assets/images/w1.png';
import w2 from '../../assets/images/w2.png';
import w3 from '../../assets/images/w3.png';
import w4 from '../../assets/images/w4.png';
import w5 from '../../assets/images/w5.png';
import w6 from '../../assets/images/w6.png';
import w7 from '../../assets/images/w7.png';
import w8 from '../../assets/images/w8.png';


const slideImages = [
  construction,
  agriculture,
  energy,
  insurance
];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const services = props => {
  return (
    <div className="">
        
        <Grid container className="">
        <Grid item md={2} xs={1}>
      </Grid>
      <Grid container md={8} xs={10} spacing={2}>
          <Grid item xs={12}><h2>Work Done by Drone Operators</h2></Grid>
          
          
          
      </Grid>
      
      <Grid item md={2}>
      </Grid>
      <Grid item xs={12} className="industries industries2"><div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                <Grid container>
                    <Grid item lg={2} xs={1}></Grid>
                    <Grid item lg={8} xs={10}>
                        <Grid container>
                        <Grid item lg={2} xs={1}></Grid>
                            <Grid item lg={8} xs={10} className="industryh1"></Grid>
                        <Grid item lg={2} xs={1}></Grid>
                        <Grid item lg={2} xs={1}></Grid>
                    <Grid item xs={10} lg={8}>
                   
                    </Grid>
                    <Grid item lg={2} xs={1}></Grid>
                        </Grid>
                        
                    </Grid>
                    <Grid item lg={2} xs={1}></Grid>
                    
                </Grid>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <Grid container>
                        <Grid item xs={2}></Grid>
                            <Grid item xs={8} className="industryh1"></Grid>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                   
                    </Grid>
                    <Grid item xs={2}></Grid>
                        </Grid>
                        
                    </Grid>
                    <Grid item xs={2}></Grid>
                    
                </Grid>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <Grid container>
                        <Grid item xs={2}></Grid>
                            <Grid item xs={8} className="industryh1"></Grid>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                    
                    </Grid>
                    <Grid item xs={2}></Grid>
                        </Grid>
                        
                    </Grid>
                    <Grid item xs={2}></Grid>
                    
                </Grid>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
            <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <Grid container>
                        <Grid item xs={2}></Grid>
                            <Grid item xs={8} className="industryh1"></Grid>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                   
                    </Grid>
                    <Grid item xs={2}></Grid>
                        </Grid>
                        
                    </Grid>
                    <Grid item xs={2}></Grid>
                    
                </Grid>
            </div>
          </div>
        </Slide>
      </div></Grid>
      <Grid item xs={1} md={2}></Grid>
<Grid container xs={10} md={8} spacing={2} className="industry2">
<Grid item lg={4} md={12} xs={12} className="container">
<MediaBox
  id="MediaBox_9"
  options={{
    inDuration: 275,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200
  }}
>
  <img className="workImg" 
    alt="drone"
    src={image1}
  />
</MediaBox>
          </Grid>
          <Grid item lg={4} md={12} xs={12} className="container">
          <MediaBox
  id="MediaBox_8"
  options={{
    inDuration: 275,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200
  }}
>
  <img className="workImg" 
    alt="drone"
    src={w1}
  />
</MediaBox></Grid>
          <Grid item lg={4} md={12} xs={12} className="container">
          <MediaBox
  id="MediaBox_7"
  options={{
    inDuration: 275,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200
  }}
>
  <img className="workImg" 
    alt="drone"
    src={w2}
  />
</MediaBox>
          </Grid>
          <Grid item lg={4} md={12} xs={12} className="container">
          <MediaBox
  id="MediaBox_6"
  options={{
    inDuration: 275,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200
  }}
>
  <img className="workImg" 
    alt="drone"
    src={w3}
  />
</MediaBox>
          </Grid>
          <Grid item lg={4} md={12} xs={12} className="container">
          <MediaBox
  id="MediaBox_5"
  options={{
    inDuration: 275,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200
  }}
>
  <img className="workImg" 
    alt="drone"
    src={w4}
  />
</MediaBox>
          </Grid>
          <Grid item lg={4} md={12} xs={12} className="container">
          <MediaBox
  id="MediaBox_4"
  options={{
    inDuration: 275,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200
  }}
>
  <img className="workImg" 
    alt="drone"
    src={w5}
  />
</MediaBox>
          </Grid>
          <Grid item lg={4} md={12} xs={12} className="container">
          <MediaBox
  id="MediaBox_3"
  options={{
    inDuration: 275,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200
  }}
>
  <img className="workImg" 
    alt="drone"
    src={w6}
  />
</MediaBox>
          </Grid>
          <Grid item lg={4} md={12} xs={12} className="container">
          <MediaBox
  id="MediaBox_2"
  options={{
    inDuration: 275,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200
  }}
>
  <img className="workImg" 
    alt="drone"
    src={w7}
  />
</MediaBox>
          </Grid>
          <Grid item lg={4} md={12} xs={12} className="container">
          <MediaBox
  id="MediaBox_1"
  options={{
    inDuration: 275,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200
  }}
>
  <img className="workImg" 
    alt="drone"
    src={w8}
  />
</MediaBox>
          </Grid>
</Grid>
    
      </Grid>
</div>
  );
    
};

export default services;

