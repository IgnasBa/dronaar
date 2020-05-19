import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import LandingSection from './components/LandingSection/LandingSection';
import Careers from './components/LandingSection/Careers';
import LandingSectionAbout from './components/LandingSection/LandingSectionAbout';
import LandingSectionPilots from './components/LandingSection/LandingSectionPilots';
import Services from './components/Services/Services';
import Mission from './components/Mission/Mission';
import Founders from './components/Founders/Founders';
import Startup from './components/Startup/Startup';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Companies1 from '../src/assets/images/companies1.svg';
import Companies2 from '../src/assets/images/companies2.svg';
import Companies3 from '../src/assets/images/companies3.svg';
import Companies4 from '../src/assets/images/companies4.svg';
import Companies11 from '../src/assets/images/companies11.svg';
import Companies22 from '../src/assets/images/companies22.svg';
import Companies33 from '../src/assets/images/companies33.svg';
import Companies44 from '../src/assets/images/companies44.svg';
import Pilots1 from '../src/assets/images/pilots1.svg';
import Pilots2 from '../src/assets/images/pilots2.svg';
import Pilots3 from '../src/assets/images/pilots3.svg';
import Pilots4 from '../src/assets/images/pilots4.svg';
import Pilots11 from '../src/assets/images/pilots11.svg';
import Pilots22 from '../src/assets/images/pilots22.svg';
import Pilots33 from '../src/assets/images/pilots33.svg';
import Pilots44 from '../src/assets/images/pilots44.svg';
import Industries from './components/Industries/Industries';
import Work from './components/Work/Work';
import WorkPilots from './components/Work/WorkPilots';
import QA from './components/QA/QA';
import QApilots from './components/QA/QApilots';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route} from 'react-router-dom';


class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;
    
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <BrowserRouter basename="/dronaar">
      <Route path="/" exact render={() => (<div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '56px'}}>
          <LandingSection />
          <Services />
          <HowItWorks h2="HOW IT WORKS FOR COMPANIES" img1={Companies1} img11={Companies11}
           s1text1={<p><strong>Get verified</strong><br></br>All the users of the platform need to be verified by our team.</p>}
           s1text2={<p><strong>Create a free job posting</strong><br></br>Create a free job post and wait for the offers to come to you.</p>}
           s1text3={<p><strong>Job creation</strong><br></br>Create a job posting. Describe the job, the period, the skills required and set a budget.</p>}
           img2={Companies2} img22={Companies22}
           s2text1={<p><strong>Hire the best operator for the job</strong><br></br>Get matched with the best freelancers and consultants. Choose the best candidate for the job.</p>}
           s2text2={<p><strong>Communicate</strong><br></br>Check out the candidates' profiles and communicate with them on the platform.</p>}
           s2text3={<p><strong>Bid</strong><br></br>Receive bids and choose the best one for the job.</p>
           }
           img3={Companies3} img33={Companies33}
           s3text1={<p><strong>Let the work begin</strong><br></br>The contract and the billing is taken care of by our team.</p>}
           s3text2={<p><strong>Agreement Flexibility</strong><br></br>You agree with the drone operator whether you will pay per hour or an agreed fee when the work is completed.</p>}
           s3text3={<p><strong>Contract</strong><br></br>Dronaar takes care automatically in making a contract for you.</p>
           }
           img4={Companies4} img44={Companies44}
           s4text1={<p><strong>Pay and rate</strong><br></br>The bigger the rating the more chances you have to be noticed on the platform.</p>}
           s4text2={<p><strong>Rating</strong><br></br>Both parties leave a rating after the project is finished.</p>}
           s4text3={<p><strong>Billing</strong><br></br>Dronaar handles the payment.</p>
           }/>
           <Industries />
           <Work />
           <QA />
           <Footer />
        </main>
        
      </div>)
        

      }></Route>
      <Route path="/pilots" exact render={() => (<div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '56px'}}>
          <LandingSectionPilots />
          <Services />
          <HowItWorks h2="HOW IT WORKS FOR PILOTS" img1={Pilots1} img11={Pilots11}
           s1text1={<p><strong>Get verified</strong><br></br>All the users of the platform need to be verified by our team.</p>}
           s1text2={<p><strong>Personalize</strong><br></br>Create your own profile.</p>}
           s1text3={<p><strong>Wait for job postings</strong><br></br>Wait for the clients to create job postings.</p>}
           img2={Pilots2} img22={Pilots22}
           s2text1={<p><strong>Find the best job for you</strong><br></br>Use our platform to find the right job for your skillset.</p>}
           s2text2={<p><strong>Communicate</strong><br></br>Check out the clients profiles and communicate with them on the platform.</p>}
           s2text3={<p><strong>Bid</strong><br></br>Make bids for the jobs you want to apply for.</p>
           }
           img3={Pilots3} img33={Pilots33}
           s3text1={<p><strong>Let the work begin</strong><br></br>The contract and the billing is taken care of by our team.</p>}
           s3text2={<p><strong>Agreement Flexibility</strong><br></br>You agree with the client whether you will get paid per hour or an agreed fee when the work is completed.</p>}
           s3text3={<p><strong>Contract</strong><br></br>Dronaar takes care automatically in making a contract for you.</p>
           }
           img4={Pilots4} img44={Pilots44}
           s4text1={<p><strong>Pay and rate</strong><br></br>The bigger the rating the more chances you have to be noticed on the platform.</p>}
           s4text2={<p><strong>Rating</strong><br></br>Both parties leave a rating after the project is finished.</p>}
           s4text3={<p><strong>Billing</strong><br></br>Dronaar handles the payment.</p>
           }/>
           <WorkPilots />
           <QApilots />
           <Footer />
        </main>
        
      </div>)
        

      }></Route>
      <Route path="/about" exact render={() => (<div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '56px'}}>
          <LandingSectionAbout />
          <Mission />
          <Founders />
          <Startup />
          <Careers />
           <Footer />
        </main>
        
      </div>)
        

      }></Route>
      </BrowserRouter>
    );
  }
}

export default App;