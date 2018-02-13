import React, { Component } from 'react';
import './AlbumCreate.css';
import './Album.css';
import { Col } from 'reactstrap';

class AlbumCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: 'https://pp.userapi.com/c834301/v834301478/ae5a9/VrmQSB3NPeU.jpg',
    };
  }
  render() {
    return (
      <Col xs="12" md="6" xl="4">
      <div className="card backSizeCreate" style={{  backgroundImage: `url(${this.state.image})` }}>
        <div className="filler"> </div>
        <div className="text"> {this.state.name} </div>
      </div>
      </Col>
    );
  }
}

export default AlbumCreate;
