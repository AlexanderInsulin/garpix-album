import React, { Component } from 'react';
import './App.css';
import AlbumCreate from './AlbumCreate';
import { Container, Row } from 'reactstrap'

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <AlbumCreate name={'cock'}/>
          <AlbumCreate name={'vehdk'}/>
          <AlbumCreate name={';caojiec'}/>
          <AlbumCreate name={'dckj'}/>
          <AlbumCreate name={'frrjjjj'}/>
        </Row>
      </Container>
    );
  }
}

export default App;
