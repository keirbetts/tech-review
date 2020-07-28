import React, { Component } from "react";
import * as api from "../api";

class ReactMdlApiCall extends Component {
  state = {
    monthlyDownloads: "",
  };

  reactMdlInvoker = () => {
    api.fetchReactMdl().then(({ downloads }) => {
      this.setState({ monthlyDownloads: downloads });
    });
  };

  componentDidMount = () => {
    this.reactMdlInvoker();
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

export default ReactMdlApiCall;
