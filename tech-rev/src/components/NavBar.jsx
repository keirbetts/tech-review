import React from "./node_modules/react";
import "./navbar.css";
import Toggle from "./Toggle";

const NavBar = (props) => {
  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div className="toggle-toolbar-button">
          <Toggle click={props.drawerClickHandler} />
        </div>
        <div className="toolbar_logo">
          <a href="/">Tech Review</a>
        </div>
        <div className="spacer" />
        <div className="toolbar-nav-items">
          <ul>
            <li>
              <a href="/felibraries">Front End Libraries</a>
            </li>
            <li>
              <a href="/belibraries">Back End Libraries</a>
            </li>
            <li>
              <a href="/npm-packages">NPM Packages</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
