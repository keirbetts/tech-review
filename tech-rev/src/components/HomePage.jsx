import React from "react";
import FrontEndCards from "../Cards/FrontEndCards";
import { Router } from "@reach/router";
import ReactBootstrap from "../Pages/ReactBootstrap";

const HomePage = () => {
  return (
    <div>
      <Router>
        <FrontEndCards path='/' />
        <ReactBootstrap path='/felibraries/reactbootstrap' />
      </Router>
    </div>
  );
};

export default HomePage;
