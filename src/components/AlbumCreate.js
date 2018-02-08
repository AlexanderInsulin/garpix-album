import React, { Component } from 'react';
import './AlbumCreate.css';
import { Col } from 'reactstrap';

class AlbumCreate extends Component {
  render() {
    return (
      <Col xs="12" sm="6" md="4">
      <div class="card">
        <div class="filler"> </div>
        <div class="text"> {this.props.name}</div>
      </div>
      </Col>
    );
  }
}

export default AlbumCreate;
