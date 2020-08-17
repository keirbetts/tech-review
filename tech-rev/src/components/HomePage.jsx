import React from "react";
import { Router } from "@reach/router";
import ReactBootstrap from "../Pages/ReactBootstrap";
import SemanticUi from "../Pages/SemanticUi";
import MaterialUi from "../Pages/MaterialUi";
import Fecards from "../Cards/Fecards";
import Title from "../components/title";
import ReactMdl from "../Pages/ReactMdl";
import Sortby from "../Cards/Sortby";

const HomePage = () => {
  return (
    <div>
      <br></br>
      <br></br>
      <Router>
        <Title path="/" />
        <Fecards path="/felibraries" />
        <Sortby path="/felibraries/comparison" />
        <ReactBootstrap path="/felibraries/reactbootstrap" />
        <ReactMdl path="/felibraries/react-mdl" />
        <SemanticUi path="/felibraries/semantic-ui" />
        <MaterialUi path="/felibraries/material-ui" />
      </Router>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default HomePage;
