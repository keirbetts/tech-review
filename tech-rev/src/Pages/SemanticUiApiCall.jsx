import React, { Component } from "react";
import * as api from "../api";

class SemanticUIApiCall extends Component {
  state = {
    monthlyDownloads: "",
  };

  semanticInvoker = () => {
    api.fetchSemanticUi().then(({ downloads }) => {
      this.setState({ monthlyDownloads: downloads });
    });
  };

  componentDidMount = () => {
    this.semanticInvoker();
  };

  render() {
    return (
      <div style={{ color: "white" }}>
        <h5>Downloads</h5>
        <p>Last Month: {this.state.monthlyDownloads} </p>
      </div>
    );
  }
}

export default SemanticUIApiCall;
