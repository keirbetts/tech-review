import React from 'react';
import './sidedrawer.css'

const Sidedrawer = (props) => {
  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  return (
    <nav className={drawerClasses}>
      <br></br>
      <ul>
        <li><a href='/felibraries'>Front End Libraries</a></li>
        <li><a href='/belibraries'>Back End Libraries</a></li>
        <li><a href='/npm-packages'>NPM Packages</a></li>
      </ul>
    </nav>
  );
};

export default Sidedrawer;