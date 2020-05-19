import React from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import logo from '../../assets/images/logo.svg';



const toolbar = props => (

  <header className="toolbar">
    <navi className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/dronaar"><img src={logo} alt="Dronaar logo" className="toolbar_logoImg" /></a></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a><Link to="/about">About us</Link></a></li>
                <li><a href="/">Sign in</a></li>
                <li><a href="/">Join</a></li>
                <Link to="/pilots"><button className="navButton">Become a pilot</button></Link>

            </ul>
        </div>
    </navi>
  </header>
);

export default toolbar;
