import React from "react";
import FrontEndCards from "../Cards/FrontEndCards";
import { Router } from "@reach/router";
import ReactBootstrap from "../Pages/ReactBootstrap";
import SemanticUi from "../Pages/SemanticUi";
import MaterialUi from "../Pages/MaterialUi";

const HomePage = () => {
  return (
    <div>
      <br></br>
      <br></br>
      <h1>Tech Review</h1>
      <br></br>
      <Router>
        <FrontEndCards path='/' />
        <ReactBootstrap path='/felibraries/reactbootstrap' />
        <SemanticUi path='/felibraries/semantic-ui' />
        <MaterialUi path='/felibraries/material-ui' />
      </Router>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default HomePage;
