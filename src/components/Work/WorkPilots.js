import React from 'react';

import './Work.css';
import Grid from '@material-ui/core/Grid';
import { MediaBox } from 'react-materialize';
import construction from '../../assets/images/construction.svg';
import photography1 from '../../assets/images/photography1.png';
import photography2 from '../../assets/images/photography2.png';
import photography3 from '../../assets/images/photography3.png';
import thermal1 from '../../assets/images/thermal1.png';
import thermal2 from '../../assets/images/thermal2.png';
import thermal3 from '../../assets/images/thermal3.png';
import d1 from '../../assets/images/3d1.png';
import d2 from '../../assets/images/3d2.png';
import d3 from '../../assets/images/3d3.png';
import mass1 from '../../assets/images/mass1.png';
import mass2 from '../../assets/images/mass2.png';
import mass3 from '../../assets/images/mass3.png';
import { Slide } from 'react-slideshow-image';
import image1 from '../../assets/images/image1.svg';


const slideImages1 = [
  photography1,
  photography2,
  photography3
];
const slideImages2 = [
    thermal1,
    thermal2,
    thermal3
  ];
  const slideImages3 = [
    d1,
    d2,
  d3
  ];
  const slideImages4 = [
    mass1,
    mass2,
    mass3
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
        
        <Grid container >
        <Grid item md={2} xs={1}>
      </Grid>
      <Grid container md={8} xs={10} spacing={2}>
          <Grid item lg={8} xs={12}><h2>Work you can do as a DRONE OPERATOR</h2></Grid>
          <Grid item lg={4} xs={0}></Grid>
          <Grid item lg={6} xs={12}><h4>We give you a few examples of what you can do as a drone operator in different industries.</h4></Grid>
          <Grid item lg={6} xs={0}></Grid>
          
          
      </Grid>
      
      <Grid item md={2} xs={1}>
          
      </Grid>
      <Grid item md={2} xs={1}>
      </Grid>
      <Grid container md={8} xs={10} spacing={2}>
          <Grid item lg={8} xs={12}><h3 className="ssds">Photography</h3></Grid>
          <Grid item lg={4} xs={0}></Grid>
          <Grid item lg={6} xs={12}><h4>Take out your best quality drone camera, pick the right time to fly and produce scenic imagery and videos.</h4></Grid>
          <Grid item lg={6} xs={0}></Grid>
          
          
      </Grid>
      
      <Grid item md={2}>
          
      </Grid>
      <Grid item xs={12} className="industries industriesP2"><div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages1[0]})`}}>
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
            <div style={{'backgroundImage': `url(${slideImages1[1]})`}}>
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
            <div style={{'backgroundImage': `url(${slideImages1[2]})`}}>
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


      <Grid item md={2} xs={1}>
      </Grid>
      <Grid container md={8} xs={10} spacing={2}>
          <Grid item lg={8} xs={12}><h3 className="ssds">Thermal imagery</h3></Grid>
          <Grid item lg={4} xs={0}></Grid>
          <Grid item lg={6} xs={12}><h4>Mount your drone with thermal equipment and provide thermal imaging solutions for a variety of demanding industries(connecting link to the industries)Thermal imaging camera drones are also being used for the thermographic inspection of inaccessible buildings or electric power lines.</h4></Grid>
          <Grid item lg={6} xs={0}></Grid>
          
          
      </Grid>
      
      <Grid item md={2}>
          
      </Grid>
      <Grid item xs={12} className="industries industriesP2"><div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages2[0]})`}}>
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
            <div style={{'backgroundImage': `url(${slideImages2[1]})`}}>
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
            <div style={{'backgroundImage': `url(${slideImages2[2]})`}}>
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


      <Grid item md={2} xs={1}>
      </Grid>
      <Grid container md={8} xs={10} spacing={2}>
          <Grid item lg={8} xs={12}><h3 className="ssds">3D mapping and modeling</h3></Grid>
          <Grid item lg={4} xs={0}></Grid>
          <Grid item lg={6} xs={12}><h4>Use the newest 3D modeling software ex: DroneDeploy, DJI terra 3D Mapping for creating accurate representations of high resolution maps, 3D models and even real-time 2D Live maps for the best analytics.</h4></Grid>
          <Grid item lg={6} xs={0}></Grid>
          
          
      </Grid>
      
      <Grid item md={2}>
          
      </Grid>
      <Grid item xs={12} className="industries industriesP2"><div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages3[0]})`}}>
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
            <div style={{'backgroundImage': `url(${slideImages3[1]})`}}>
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
            <div style={{'backgroundImage': `url(${slideImages3[2]})`}}>
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
      

      
      <Grid item md={2} xs={1}>
      </Grid>
      <Grid container md={8} xs={10} spacing={2}>
          <Grid item lg={8} xs={12}><h3 className="ssds">Mass Measurement</h3></Grid>
          <Grid item lg={4} xs={0}></Grid>
          <Grid item lg={6} xs={12}><h4>Calculate the mass and volumes of different objects to make work reports more accurate and accelerate the progress of surveys, project engineering and management.</h4></Grid>
          <Grid item lg={6} xs={0}></Grid>
          
          
      </Grid>
      
      <Grid item md={2}>
          
      </Grid>
      <Grid item xs={12} className="industries industriesP2"><div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages4[0]})`}}>
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
            <div style={{'backgroundImage': `url(${slideImages4[1]})`}}>
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
            <div style={{'backgroundImage': `url(${slideImages4[2]})`}}>
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
      

    
      </Grid>
</div>
  );
    
};

export default services;

