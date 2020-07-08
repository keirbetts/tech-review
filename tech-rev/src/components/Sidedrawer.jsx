import React from 'react';
import './sidedrawer.css'

const Sidedrawer = (props) => {
  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li><a href='/felibraries'>Front End Libraries</a></li>
      </ul>
    </nav>
  );
};

export default Sidedrawer;