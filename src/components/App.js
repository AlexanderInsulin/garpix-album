import React, { Component } from 'react';
import './App.css';
import AlbumCreate from './AlbumCreate';
import Album from './Album';
import { Container, Row } from 'reactstrap'

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <AlbumCreate />
          <Album name={'cock'}/>
          <Album name={'vehdk'} image={'https://pp.userapi.com/c636925/v636925368/461ac/We0oi2Hg_dU.jpg'}/>
          <Album name={'caojiec'}/>
        </Row>
      </Container>
    );
  }
}

export default App;
