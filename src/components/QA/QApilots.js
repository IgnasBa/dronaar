import React from 'react';

import './QA.css';
import Grid from '@material-ui/core/Grid';
import 'materialize-css';
import { Collapsible, CollapsibleItem, Icon } from 'react-materialize';



const services = props => {
  return (
    <div className="">
        
        <Grid container className="">
        <Grid item md={2} xs={1}>
      </Grid>
      <Grid container md={8} xs={10} spacing={2}>
          <Grid item lg={6} xs={12}><h2>Questions & Answers for Companies</h2></Grid>
          <Grid item lg={6} xs={0}></Grid>
          <Grid item xs={12}>
          <Collapsible accordion={false}>
  <CollapsibleItem
    expanded={true}
    header="What can I sell?"
    icon={<Icon>looks_one</Icon>}
    node="div"
  >
    You can offer or sell pretty much anything that lies within the company’s project description on the platform. For instance, is there a client that wants help from an operator to inspect his roof or drain pipes, then you are unlikely to sell him stock photos or video. The demand creates what can be supplied.
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="How much money can I make?"
    icon={<Icon>looks_two</Icon>}
    node="div"
  >
    It is in large part up to you how much you make on Dronaar.com. We facilitate the connection between you and the client. Better ratings and more experience increases the likelihood of increased customer demand, and therefore raises the potential earnings. 
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="Is the platform free to use?"
    icon={<Icon>looks_3</Icon>}
    node="div"
  >
    Sign up, approval, browsing and bidding on assignments is totally free of charge. When you start making money on clients through the platform, we charge a small one-time fee, after which we charge a transaction fee for every job you complete through us. In short, it won’t cost you anything until you start making money.
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="How flexible can I be with my assignments in terms of time period?"
    icon={<Icon>looks_4</Icon>}
    node="div"
  >
    We offer a standard agreement, but one that allows for individual adjustments. We set up a few parameters for you and your client to do business. This is to ensure the quality of work provided as well as any potential hiccups that may occur in the process of completing the job. If you see a potential for time-related flexibility, you will be able to negotiate with the client to make sure it fits the timeline you envision for the project, whether it be 2 days or 2 weeks.
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="What is your policy in terms of doing a job on bed weather conditions?"
    icon={<Icon>looks_5</Icon>}
    node="div"
  >
    As soon as the assignment is agreed upon and the deal between you and your client is signed, we let it be up to you to figure out the logistics. If the deal needs to be pushed because of weather-related issues, this is to be handled between the client and yourself.
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="How do I get Paid?"
    icon={<Icon>looks_6</Icon>}
    node="div"
  >
    When the agreement is signed, the client will transfer the compensation to our escrow solution in Stripe. Here, the money will be held until the final product has been delivered to the client and has been approved, after which you will receive your pay. 
  </CollapsibleItem>
</Collapsible>
          </Grid>
          
        
      </Grid>
      
      <Grid item md={2}>
      </Grid>
      </Grid>
</div>
  );
    
};

export default services;
