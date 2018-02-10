import React, { Component } from 'react';
import './Image.css';
import { Col } from 'reactstrap';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      image: (props.image == null) ? 'https://gostlab.ru/img/article/migayushhij-znak-voprosa-na-monitore-vashego-mac.jpg' : props.image,
    }
  }
  render() {
    return (
      <Col xs="6" lg="3">
        <div className="imageCard">
          <div className="imageImage" style={{ backgroundImage: `url(${this.state.image})` }}> </div>
          <div className="imageText"> {this.state.name} </div>
        </div>
      </Col>
    );
  }
}

export default Image;