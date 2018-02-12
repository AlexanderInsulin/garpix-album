import React, { Component } from 'react';
import Galery from './Galery';
import Images from './Images';

import './NavBar.css';

import {
  Navbar,
  NavbarBrand
} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar className="navbar-custom" dark sticky="top">
          <div className="rightBorder float-left"> <NavbarBrand href="/" > <i class="material-icons navIcone">chevron_left</i> </NavbarBrand> </div>
          <div className="navCenter"> ame </div>
          <div> <NavbarBrand href="/" className="navEditter"> <i class="material-icons">create</i> </NavbarBrand> </div>
        </Navbar>
        <Galery />
      </div>
    );
  }
}

export default App;
