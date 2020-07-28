import React, { Component } from 'react';
import * as api from '../api'

class BootstrapApiCall extends Component {
  state = {
    monthlyDownloads: ''
  }


  bootStrapInvoker = () => {
    api.fetchReactBootstrap().then(({ downloads }) => {
      this.setState({ monthlyDownloads: downloads })
    })
  }

  componentDidMount = () => {
    this.bootStrapInvoker()
  }

  render() {
    return (
      <div style={{ color: 'white' }}>
        <h5>Downloads</h5>
        <p>Last Month: {this.state.monthlyDownloads}  </p>
      </div>
    );
  }
}

export default BootstrapApiCall;