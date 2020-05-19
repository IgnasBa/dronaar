import React from 'react';
import Mikkel from '../../assets/images/mikkel.svg';
import Frederik from '../../assets/images/frederik.svg';
import Niels from '../../assets/images/niels.svg';
import Grid from '@material-ui/core/Grid';
import { Card, CardTitle, Icon } from 'react-materialize';
import './Founders.css';


const services = props => {
  return (
    <div className="">
        
        <Grid container  >
        <Grid item md={2} xs={1}>
      </Grid>
      <Grid container md={8} xs={10}>
      <Grid container md={12} justify="center"
  alignItems="center">
          <h2>The Founders</h2>
          
          </Grid>
          <Grid container md={12} spacing={2}>
          <Grid item md={4} xs={12}><Card
      
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={Mikkel}>Mikkel Fenneberg</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      <p>Mikkel is a 22-year-old student of Political Science with a
license for drone piloting. He is the guy who had the idea of this startup and looked for two other
founders.</p>
    </Card></Grid>
          <Grid item md={4} xs={12}><Card
      
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={Frederik}>Frederik Schnefeld</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      <p>Frederik is a 25-year-old student of Information Technology and Communication
at Aarhus University BSS and currently is doing his thesis and is working full time for Dronaar.</p>
    </Card></Grid>
          <Grid item md={4} xs={12}><Card
      
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={Niels}>Niels Knude</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      <p>Niels is 23-year-old who graduated at Business Academy Aarhus in Economics
and Information Technology. He is the guy that is in charge of the development department
at Dronaar and he also works full-time at Lego as a business analyst.</p>
    </Card></Grid>
          
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
