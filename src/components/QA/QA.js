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
    header="What kind of services can I get?"
    icon={<Icon>looks_one</Icon>}
    node="div"
  >
    As a starting point, you can inquire about any drone-related service that you can think of. If you at any point think that your project may fall outside of what is normally achievable, we advise you to contact us directly for assistance. Throughout dronaar.com, you have an option to view some of the tasks that have been performed and created on the marketplace, as well as case stories from other drone-related projects, which may serve as inspiration.
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="How do I estimate the cost of my project?"
    icon={<Icon>looks_two</Icon>}
    node="div"
  >
    In reality, this is not necessary. You put up a description that is as detailed as possible, which will serve as a basis for the operators to bid on it. This means that if it is your first time consulting drone-related solutions, you won’t have to fret over the pricing, but rather wait until the perfect offer comes. 
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="How much time does it take for the operators to get the job done?"
    icon={<Icon>looks_3</Icon>}
    node="div"
  >
    This is a tough one. The typical assignments performed by our operators vary a great deal, which also means that there hardly exists a standard formula for how long a certain task takes to perform. Operators need to advise the police within a 24 hour window of the flight, whereas larger operations in potentially dangerous air space will require a special permit. 
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="Is there any quality guarantee for the job done?"
    icon={<Icon>looks_4</Icon>}
    node="div"
  >
    We are not able to provide any guarantee for the quality of work performed by the operators. We do provide an escrow solution that makes it possible to contest the work sent for approval, in which case we will help find a solution. Ratings, experience and portfolio are some of the parameters we use to gauge the quality of the work an operator has done and will continue to deliver in future projects. We check that the operators have all the required permits and insurance coverage to make sure that you won’t receive a product that was filmed or obtained illegally. We do not, however, accept responsibility if the operator in any fashion performs any illegal activity not connected to the parameters we can control, i.e. insurance and permits.  
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="Is the platform free to use?"
    icon={<Icon>looks_5</Icon>}
    node="div"
  >
    Sign up, approval, browsing and job posting is completely free of charge on the platform. As soon as you find the operator that you find fit for the assignment, we charge a small one-time fee for connecting your company with the operator. From then on, we charge a small transaction fee, every time a service is provided, and not a second sooner. This means that you will not have to pay us up front when completing a project.  
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="What are the policies in terms of cancelling a job?"
    icon={<Icon>looks_6</Icon>}
    node="div"
  >
    If you, or the operator, have an agreement, then there exists a few different scenarios for the level of compensation, which lies between the client (you) and the operator. <br></br>

Cancellation a month before the assignment: Full refund to the client.<br></br>

Cancellation 14 days  to a month before the assignment: 10% compensation goes to the operator, if the client cancels.<br></br>

Cancellation 1-2 weeks before: 30% compensation goes to the operator, if the client cancels. <br></br>

Cancellation less than 1 week before: 40% of the agreed amount is paid out to the operator, if the client cancels.
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
