import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Backdrop from './components/Backdrop'
import Sidedrawer from './components/Sidedrawer'
import Footer from './components/Footer'

class App extends Component {
  state = {
    sideDrawerOpen: false

  }



  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }


  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }




  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div className='App'>
        <NavBar drawerClickHandler={this.drawerToggleClickHandler} />
        <Sidedrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <br></br>
        <br></br>
        <HomePage />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </div>
    );
  }
}

export default App;
