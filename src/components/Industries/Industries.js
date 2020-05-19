import React from 'react';

import './Industries.css';
import Grid from '@material-ui/core/Grid';
import construction from '../../assets/images/construction.svg';
import agriculture from '../../assets/images/agriculture.svg';
import energy from '../../assets/images/energy.svg';
import insurance from '../../assets/images/insurance.svg';
import { Slide } from 'react-slideshow-image';
import Modal from '@material-ui/core/Modal';
import SimpleModalCon from '../Modal/ModalCon';
import SimpleModalAgri from '../Modal/ModalAgri';
import SimpleModalEne from '../Modal/ModalEne';
import SimpleModalInsu from '../Modal/ModalInsu';

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
          <Grid item xs={12}><h2>Industries</h2></Grid>
          <Grid item lg={6} xs={12}><h4>These are just a few examples of some of the industries that can greatly benefit from drone work.</h4></Grid>
          <Grid item lg={6} xs={0}></Grid>
          
          
      </Grid>
      
      <Grid item md={2}>
      </Grid>
      <Grid item xs={12} className="industries"><div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                <Grid container>
                    <Grid item lg={2} xs={2}></Grid>
                    <Grid item lg={8} xs={8}>
                        <Grid container>
                        <Grid item lg={2} xs={2}></Grid>
                            <Grid item lg={8} xs={8} className="industryh1"><span><strong>CONSTRUCTION</strong></span></Grid>
                        <Grid item lg={2} xs={2}></Grid>
                        <Grid item lg={2} xs={2}></Grid>
                    <Grid item xs={8} lg={8}>
                    <span>In construction, drone site data can be used across a project’s lifecycle to reduce risk and effectively manage more with less. Learn more about different ways aerial intelligence is being used to transform the construction industry.</span><SimpleModalCon></SimpleModalCon>
                    </Grid>
                    <Grid item lg={2} xs={2}></Grid>
                        </Grid>
                        
                    </Grid>
                    <Grid item lg={2} xs={2}></Grid>
                    
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
                            <Grid item xs={8} className="industryh1"><span><strong>Agriculture</strong></span></Grid>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                    <span>Today drones are being used to make smarter decisions about farm management. When paired with the right software, drones make it easier to count plants, measure plant height, monitor field performance and much more.</span><SimpleModalAgri></SimpleModalAgri>
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
                            <Grid item xs={8} className="industryh1"><span><strong>Energy</strong></span></Grid>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                    <span>Drones are replacing traditional inspection techniques in the energy sector. Managers are using them to inspect the condition of key assets like power plants and pipelines, which in turn helps to reduce onsite safety risks by eliminating the need to use humans for dangerous tasks.</span><SimpleModalEne></SimpleModalEne>
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
                            <Grid item xs={8} className="industryh1"><span><strong>Insurance</strong></span></Grid>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                    <span>Aerial intelligence is being used in the insurance industry to optimize risk assessments and claims management.</span><SimpleModalInsu></SimpleModalInsu>
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
      </Grid>
</div>
  );
    
};

export default services;
