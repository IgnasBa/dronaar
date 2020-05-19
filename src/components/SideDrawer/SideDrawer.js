import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <navi className={drawerClasses}>
      <ul>
      <li><a href="/">Home</a></li>
                <li><a><Link to="/about">About us</Link></a></li>
                <li><a href="/">Sign in</a></li>
                <li><a href="/">Join</a></li>
                <li><a><Link to="/pilots">Become a pilot</Link></a></li>
      </ul>
    </navi>
  );
};

export default sideDrawer;
