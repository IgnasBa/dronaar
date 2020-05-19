import React from 'react';

import Grid from '@material-ui/core/Grid';



const services = props => {
  return (
    <div className="">
        
        <Grid container  >
        <Grid item md={2} xs={1}>
      </Grid>
      <Grid container md={8} xs={10}>
          <Grid item md={3}></Grid>
      <Grid container md={6} justify="center"
  alignItems="center">
          <h2>Our mission</h2>
          <h4>Dronaar is a Danish company with the roots planted in Aarhus. We believe the future will be with drones at the heart of everyday life. Therefore, our vision is to make drone services available everywhere. Drones represent a shift in how we solve problems, and especially the challenges that involve an airborne solution. The drone industry has seen steady growth in recent years and is expected to grow exponentially in the near future. <br></br><br></br>

Reading this means you are interested. But maybe you're not sure why we're worth your time. We want to emphasize that time is precious. Both the time we spend flying with the drone, but also when we don't. That is why we are working on creating tools for pilots that will save them time and help them focus on what is important. We remove annoying barriers, reduce time-consuming procedures, and steer clear of illogical workflows. We strive to work closely with everyday heroes to see where their shoes are and how we can help them make their everyday lives better.<br></br><br></br>

At the same time, we believe that the customer's understanding of the technology and the operating framework of the operators is important to achieve the best possible cooperation. That's why we work with companies such as Vestas, various municipalities, utilities and real estate companies to increase their understanding of both the technology and the legislation around the future efficiencies they will see with the drone technology.</h4>
          </Grid>
          <Grid item md={3}></Grid>
      </Grid>
      
      <Grid item md={2}>
      </Grid>
      </Grid>
</div>
  );
    
};

export default services;
