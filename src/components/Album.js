import React, { Component } from 'react';
import './Album.css';
import { Col } from 'reactstrap';

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      image: (props.image == null) ? 'https://gostlab.ru/img/article/migayushhij-znak-voprosa-na-monitore-vashego-mac.jpg' : props.image,
    };
  }
  render() {
    return (
      <Col xs="12" sm="6" md="4">
          <div className="card backSize" style={{ backgroundImage: `url(${this.state.image})` }}>
            <div className="filler"> </div>
            <div className="text"> {this.state.name} </div>
          </div>
      </Col>
    );
  }
}

export default Album;
