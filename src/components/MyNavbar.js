import React, { Component } from 'react';
import './NavBar.css';

import {
  Navbar,
  NavbarBrand
} from 'reactstrap';

class MyNavbar extends Component {
  render() {
    return (
      <Navbar className="navbar-custom" dark sticky="top">
        <div className="rightBorder float-left"> <NavbarBrand href="/" > <i className="material-icons navIcone">chevron_left</i> </NavbarBrand> </div>
        <div className="navCenter"> ame </div>
        <div> <NavbarBrand href="/" className="navEditter"> <i className="material-icons">create</i> </NavbarBrand> </div>
      </Navbar>
    );
  }
}

export default MyNavbar;
