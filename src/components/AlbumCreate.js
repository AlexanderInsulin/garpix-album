import React, { Component } from 'react';
import './AlbumCreate.css';
import './Album.css';
import { Col } from 'reactstrap';

class AlbumCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Создать альбом',
      image: 'https://n6-img-fp.akamaized.net/free-icon/add-outlined-plus-sign_318-74759.jpg?size=338&ext=jpg',
    };
  }
  render() {
    return (
      <Col xs="12" sm="6" md="4">
      <div className="card backSizeCreate" style={{  backgroundImage: `url(${this.state.image})` }}>
        <div className="filler"> </div>
        <div className="text"> {this.state.name} </div>
      </div>
      </Col>
    );
  }
}

export default AlbumCreate;
